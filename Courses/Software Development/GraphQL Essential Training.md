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
  - '[Stay Ahead in GraphQL](../../Paths/Software%20Development/Learning%20Paths/Stay%20Ahead%20in%20GraphQL.md)'
prev_courses:
  - '[Learning Graphql](Learning%20Graphql.md)'
next_courses:
  - '[Migrating from REST to GraphQL](Migrating%20from%20REST%20to%20GraphQL.md)'
path_nav: '[{"path":"Stay Ahead in GraphQL","position":2,"total":3,"prev":"Learning Graphql","next":"Migrating from REST to GraphQL"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - topic/web-development
  - skill/graphql
status: not-started
created: 2026-05-03
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
  - [Learn GraphQL essentials](#learn-graphql-essentials)
  - [Course prerequisites](#course-prerequisites)
- [**1. Setup and Introduction**](#1-setup-and-introduction) (5 videos)
  - [IDE and required tools](#ide-and-required-tools)
  - [GraphQL overview](#graphql-overview)
  - [Server setup](#server-setup)
  - [The initial GraphQL setup](#the-initial-graphql-setup)
  - [Basic GraphQL schema](#basic-graphql-schema)
- [**2. Types and Schemas**](#2-types-and-schemas) (6 videos)
  - [Object types and fields](#object-types-and-fields)
  - [Query and mutation types](#query-and-mutation-types)
  - [What is the resolver and its role?](#what-is-the-resolver-and-its-role)
  - [Scalar types](#scalar-types)
  - [Enumeration types](#enumeration-types)
  - [List of types inside another](#list-of-types-inside-another)
- [**3. Setting Up Persistence**](#3-setting-up-persistence) (4 videos)
  - [Installing MongoDB for GraphQL](#installing-mongodb-for-graphql)
  - [Finalize the database connectors](#finalize-the-database-connectors)
  - [Update resolvers for MongoDB](#update-resolvers-for-mongodb)
  - [Data persistence with SQL](#data-persistence-with-sql)
- [**4. Mutations**](#4-mutations) (3 videos)
  - [Add new items with mutations](#add-new-items-with-mutations)
  - [Update items with mutations](#update-items-with-mutations)
  - [Delete items with mutations](#delete-items-with-mutations)
- [**5. Queries in Depth**](#5-queries-in-depth) (3 videos)
  - [Querying all products](#querying-all-products)
  - [Querying with aliases](#querying-with-aliases)
  - [Querying with fragments](#querying-with-fragments)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Learn GraphQL essentials](https://www.linkedin.com/learning/graphql-essential-training-20298359/learn-graphql-essentials?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/learn-graphql-essentials?u=76281980&t=0)** - [Instructor] Are you looking for a better way to [Fetch](../../Skills/Web%20Development/Fetch.md) data from multiple sources? This is where [GraphQL](../../Skills/Web%20Development/GraphQL.md) comes in, and in this course we'll explore GraphQL and Dev and I'll demonstrate how to work with this library. First, we'll walk through the setup of GraphQL. Then we'll explore the syntax of all the different types and the schema. Next, we'll add persistence using [MongoDB](../../Skills/Software%20Development/MongoDB.md) and [SQL](../../Skills/Data%20Science/SQL.md), so we can query multiple [Databases](../../Skills/Software%20Development/Databases.md). Then we'll code mutations to add new items, update them or delete them. And finally, we'll level up our queries using some advanced features. I'm Emmanuel Henri and I've been working with GraphQL since it was introduced to the market. If you're ready to learn about GraphQL, fire up your favorite editor and let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (5), [Fetch](../../Skills/Web%20Development/Fetch.md) (1), [MongoDB](../../Skills/Software%20Development/MongoDB.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** sql (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Course prerequisites](https://www.linkedin.com/learning/graphql-essential-training-20298359/course-prerequisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/course-prerequisites?u=76281980&t=0)** - [Instructor] As this course is an essentials course on [GraphQL](../../Skills/Web%20Development/GraphQL.md), no prior knowledge of GraphQL is required. However, experience with [JavaScript](../../Skills/Software%20Development/JavaScript.md) is a must for this course. Next, being familiar with terminal commands and [npm](../../Skills/Web%20Development/npm.md) is useful, as we run these tools often. And as you'll see, I'm running on a Mac, but you can follow along on a PC, as the tools work exactly the same on both platforms.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (2), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [npm](../../Skills/Web%20Development/npm.md) (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** npm (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)


### 1. Setup and Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [IDE and required tools](https://www.linkedin.com/learning/graphql-essential-training-20298359/ide-and-required-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/ide-and-required-tools?u=76281980&t=0)** - [Instructor] [GraphQL](../../Skills/Web%20Development/GraphQL.md) doesn't require anything special outside of the tools you're currently using as a developer, so a good IDE or code editor will do the trick. There are some options with extensions or plugins that will make your experience as a developer smoother working with GraphQL. So for example, in this course I use VS Code with a GraphQL extension that provides some nifty tools when working with this framework. This is personally what I use, too. So for example, if you want to add the extension that I'm using, all you have to do is to click on the extensions inside of VS Code, look for GraphQL, and this is the one that I use, but there's quite a few here, so there's this one, too, and a few others here. So if you're using Apollo with GraphQL, you can also install this one, but I usually install one and see how it works and if I get everything that I need within that very first extension, then I keep going with this one. Otherwise, I look for other things that can provide more tools for me. If you're using Relay, you have Relay right here. Also, if you don't want to use VS Code, there's a whole bunch of tools that you can use as editors. So for example, there's WebStorm. That is a paid IDE that has a lot of tools that you can use here, and there are probably a lot of features that are usable and efficient for you if you are using GraphQL. Alright, we have our tool set ready, so let's move on to a brief introduction of the GraphQL ecosystem.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (7)
> **Tools:** vs code (3)
> **Analogies:** for example (3)
> **Env Vars:** ide (2)
> **Prerequisites:** install (2)
> **CLI Commands:** make (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)

#### [GraphQL overview](https://www.linkedin.com/learning/graphql-essential-training-20298359/graphql-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/graphql-overview?u=76281980&t=0)** - [Instructor] What is [GraphQL](../../Skills/Web%20Development/GraphQL.md) and what are the benefits of using it? Is it a database? No. Is it a server? Somewhat. A client? Neither. So what is it? A couple years ago, Meta or [Facebook](../../Glossary/Service/Facebook.md) was facing a challenge with their social network. When you're asking for information about friends or friends of their friends' friends, well, the current query options for the database in the market couldn't support. So anytime you would go further than four or five levels deep in your network, Facebook couldn't support it. This is when they created GraphQL. GraphQL is a query language for any kind of APIs and is able to fulfill any queries across multiple [Databases](../../Skills/Software%20Development/Databases.md). So in other words, it's not a server or a database. It's a query language. The main benefit of using it is that you can ask for exactly what you want and you'll get those results and nothing else. If you've followed any TypeScript courses, you're familiar with type checking. Well, guess what? GraphQL allows to describe what type of data you can expect. GraphQL's ecosystem is also in constant growth. Not only you can get started with Facebook own version of GraphQL, but there are multiple options for you to explore. For example, the Polo client by the folks at Meteor is built on top of GraphQL and provides several extra features. So needless to say that GraphQL is a great tool to add to your development arsenal.
>
> **[1:35](https://www.linkedin.com/learning/graphql-essential-training-20298359/graphql-overview?u=76281980&t=95)** All right, let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (8), [Facebook](../../Glossary/Service/Facebook.md) (3), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Definitions:** is a  (2), in other words (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Server setup](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=0)** - [Instructor] Okay, so for setting up our [GraphQL](../../Skills/Web%20Development/GraphQL.md) environment, we need a base server set up and we'll use node to get this going. We'll also install Babel so we can use [JavaScript](../../Skills/Software%20Development/JavaScript.md)'s latest syntax as we work with our application. So let's get to it. So the first thing I'm going to do is literally create a new folder here on my desktop, like so. I'm going to call this GraphQL, like so. And then I'm going to drag and drop this folder into this window or open it from the Explorer here. So you can do both. So open folder, then go on the desktop, and let's go to GraphQL, like so. And we have our base server here, well our base folder. So what I'm going to do now is use the terminal to install a few things. So you can open it from new terminal, like so, or use the shortcut in your respective system. So let's clear this and let's go ahead by doing an [npm](../../Skills/Web%20Development/npm.md) init, so we can initialize our project. So yes, GraphQL, version, description, index, test command, get, keywords, and then author. You can put whatever you want in here. I'm just going faster here, so we can create this base package. Dot [JSON](../../Skills/Web%20Development/JSON.md) file here, so as you can see, you have everything you need here. If you want to add any details, you can do that here as well. So what we're going to do now
>
> **[1:33](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=93)** is install the few dependencies that we need. So I'm going to first install Express, so NPMI Express, 'cause that's the first thing we're going to need. And I'll let it install. Once it's installed here, we're going to now install a few dev dependencies. So what I'm going to do is do NPMI, or you can use install, and do dash, dash save, dash dev, and then add a few dependencies. So the very first one is going to be Babel [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md), and then what I'm going to do is copy and paste that particular line here. So I can copy and paste again and save a few keystrokes, and do core and then paste, and then I'm going to do node and then paste again. And the last will be precept environment, like so. Install those, and you should see dev dependencies appear on your package dot JSON file.
>
> **[2:42](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=162)** Once this is all installed here, I am going to close my window here, like so. Close the window, and then create a new file. So I'm going to go inside of my GraphQL folder, create a brand new file that I'm going to call .BabelRC, like so. And this is where we're going to enter the presets that we need in order for Babel to compile the code from the latest version of JavaScript that we're going to use into a code that is understood when it's ran into your browser. Okay, so we're going to enter the presets here and we're opening up an array, and we need to insert Babel, like so. Forward slash preset environment. And that's it, that's all we need for that file here. We're going to close it, and then what we're going to need to do is create our first index file. So this particular server here, actually we need to change the script too. So let me do that while we're here. We need to change this particular script to Nodemon and we're going to also install Nodemon. So I had forgotten about that, we'll do that now. So my script, I usually, not on the test one, on the start, like so, I usually like to use Nodemon when I run my servers.
>
> **[4:21](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=261)** Whenever you make an update in your code, it automatically restarts the server. You can do RS-2 to restart the server whenever you want to refresh the server. So that's why I use Nodemon, I think it's a great tool. So Nodemon is going to open the index file that we'll create momentarily, and then we're going to pass a few command here, execution with Babel node, which means it's going to compile the code for us here in JavaScript. Therefore, when we run start, it's going to run this code and basically use Nodemon to automatically restart the server whenever we make changes. Okay, so now that we have this, now we can create our index file, which we'll do right now, and basically create an index.JS file, which is our point of entry into our server. And then inside of this particular file, we're going to import Express from Express, like so.
>
> **[5:27](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=327)** And we're going to create our app, which will be basically an Express server, like so. And then let's say we open our server inside of a browser and we're asking for the point of entry, like so. It's going to basically request an answer with a response. So basically we're making a request of this URL, and then it's going to respond with this message that we're going to pass here. "GraphQL is amazing."
>
> **[6:11](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=371)** And then we're going to make sure to pass on what port we are listening to. So there's two ways that, some people, I usually do this, I create a variable, like so, and I call it port. And then I pass the variable of the port that I want to use, and then I usually pass that here, so I have this variable that I can always change down the road. And whenever I use the port inside of that particular file, I don't have to repeat that code multiple times, and therefore, you just create that one variable that holds the port and then you can pass it to whichever methods or functions that actually use it, like so. So, what we're doing here is that the app is listening on port 80/80 and we're going to do a console log whenever this server is running, and then you can always pass a message, like running server, and then let's do template strings and stuff. So we can pass that variable that we just created, like so, running server on local host.
>
> **[7:31](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=451)** And then you can pass the port here, like so. And then forward slash graphQL, like so. So it tells you exactly where this particular GraphQL server is running on. And yeah, that's basically what we need to do. And now we're going to run it. So let me just finish this here, and save this. If you are basically entering, this is not going to work yet. We're going to work on this fairly soon, but right now, if you ask for this particular extension here, then we're going to get this message. So let's just make sure that our server is running. So I'm going to open up my terminal again, new terminal, and then I'm going to, let's delete this one here, clear, and then do an NPM start. Oh yeah, that's right, we forgot to install Nodemon, so we're going to do that now, NPM install Nodemon. And then NPM start, like so. Now our server's going to run. Running server on local host 80/80. Let's just go for port 80/80 'cause right now, the URL or basically this particular endpoint hasn't been created yet. So let's just go into local host 80/80, like so.
>
> **[8:58](https://www.linkedin.com/learning/graphql-essential-training-20298359/server-setup?u=76281980&t=538)** And we have our message here, "GraphQL is amazing." So everything is up and running. Let's move on to the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (9), [npm](../../Skills/Web%20Development/npm.md) (4), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (3), [JSON](../../Skills/Web%20Development/JSON.md) (2), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (1)
> **Prerequisites:** install (11), set up (1)
> **CLI Commands:** npm (4), make (4), node (3)
> **Env Vars:** npm (4), json (2), npmi (2), url (2), cli (1)
> **Tools:** terminal (4)
> **UI Navigation:** drag and drop (1), go to (1), open the (1)
> **Ports:** port 80 (2)
> **File Paths:** index.js (1)

#### [The initial GraphQL setup](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=0)** - [Instructor] Now that we have a base server set up, let's add [GraphQL](../../Skills/Web%20Development/GraphQL.md) to it. So the first thing we're going to do is install a few more things. So, let's stop the server, so Control C to stop it. I'm going to clear this, and what you need to install next is GraphQL itself, so graphql. And there's a nice express package that integrates GraphQL with express very well. So, let's go ahead and install this one. And with those two packages, we'll be able to keep working on our server. So, let me just close this for now. And what I'm going to do now is create a data folder where we're going to have our resolvers, our database connections, and our schema as well. I'll explain all of those as we work with them. But let's create the folder first, and then we'll create the files that we need. So, I'm going to call this data. And then, inside of that folder, I'm going to create our schema. So, I'm going to call this schema.js. So basically, a schema is a blueprint for the data that GraphQL is accepting, and what are the types for each of these elements. And what I'm going to do is explain this as I build the schema. So, let's go ahead first and import buildSchema from graphql, I'm using shortcuts here, but it's buildSchema from graphql, like so. And then, we're going to create our first schema.
>
> **[1:34](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=94)** So, let's go ahead and create schema, and we're going to use buildSchema, like so.
>
> **[1:47](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=107)** And then, inside of our schema, we have to define a type for a Query. So, we have to define a type for whatever types of data that you're going to receive, but you also need to define a type for your queries, a type for your mutations, we'll get back to that in a video or two. But in the meantime, we're going to just go ahead and create our first time, which will be of query. So, whenever somebody is asking for the query hello, we expect a string. So basically, the response should be a string. So, what's going to happen with that, we're going to export it, and then we we'll, and as we build the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md), it'll make a bit more sense. So, let's just finish this here, export schema, save this, and then let's go into our server. So here on our server, let me close this to have a bit more screen estate. I'm going to import graphql HTTP from express-graphql. And now, what I'm going to do is after the get here, I'm going to define a root. So, the root will be used basically to define the responses that are available
>
> **[3:22](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=202)** from the GraphQL server. So in this case, we have a type that we called hello, right? which should be basically a query. And what we're going to do is sort of create a very quick resolver here. So, the resolver is basically the function that resolves the data from the database. So, GraphQL has a function that is calling it to the database, and then returns data into GraphQL. So in this case, because we don't have a database, we don't have anything right now, we're just going to create this function, which basically what you're looking at right now, is a resolver that will resolve a message which should be a strength. So in this case, we're going to say, well, "Hi, I'm Manny!" Like so. So, once we call into this resolver, which is a type of query, we should get a response, "Hi, I'm Manny!" Okay? So now, we're going to basically define the GraphQL server. So, let's use this endpoint. So, we're going to use the endpoint GraphQL, which as you remember here, we should have an endpoint called GraphQL, so this is where we're going to define it, GraphQL. And this endpoint will use the express-GraphQL package to create a GraphQL server, like so.
>
> **[4:55](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=295)** And we have a few things that we're going to define here. So, what are we using is a schema that we just defined, so we need to import it here, import our schema from our data scheme, right? So, it's auto completes for me. So basically, what we're doing is we're importing the schema from the data folder and the schema, so basically what we exported here. So, let's go ahead and import this here, and then we're going to use it here. So, we're telling GraphQL, FYI, the schema that I'm expecting is from the schema here. And you can also do something like this if you want to use the latest and greatest [JavaScript](../../Skills/Software%20Development/JavaScript.md). But I like to be a bit more declarative, so you guys see the thinking here, but you can also do the shorter version. So, the root value is going to be the root. So basically, the resolver is this function here that will return the value. And basically, we're going to use graphiql, which is basically a front end interface that the GraphQL team has built. So, we can actually see when we make requests to the server as supposed to go through an endpoint, we're going to use graphiQL just to represent what we're working on right now. Okay? So, save all this, and now let's go into our terminal. And I keep creating new terminals, I shouldn't do that.
>
> **[6:30](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=390)** Just bring the old terminal and do an [npm](../../Skills/Web%20Development/npm.md) start. Everything is running. So, we're going to go to this address on our browser, and you're going to see graphiQL as we do this window, paste that address, and we have GraphiQL here! So basically, to show you that what we've built works, what we're going to need to do is basically run the query that we've created. So, let's go ahead and erase all of this gibberish here. And if you don't know what's available in your GraphQL server, there are docs here. If you click on docs, you're going to see that right now, we have a root type of Query. Okay, so what is that Query? Click on here. And you see the type that we've defined is of hello, and it's expecting as a response string. So if a resolver is coded properly, it's going to return whatever our resolver is supposed to return. So, the resolver, if it was connected to a database, it would return whatever is available from that specific resolver. So, let's go ahead and do this, so query. And if I just type hello like this, I don't need anything else because there's no input, there's nothing else that I could do on this specific query type. And I run it, I have this message, "hello," "I'm Manny!" That is resolved
>
> **[8:03](https://www.linkedin.com/learning/graphql-essential-training-20298359/the-initial-graphql-setup?u=76281980&t=483)** by the function that we wrote inside of our server. So, you have coded your first GraphQL server! Got it started and made your first query. So, this is how you get started with GraphQL. There's a lot more to it, and we'll explore this in the rest of the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (23), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [npm](../../Skills/Web%20Development/npm.md) (1)
> **Code Identifiers:** buildschema (3), graphiql (2)
> **Definitions:** is a  (4)
> **Prerequisites:** install (3), set up (1)
> **CLI Commands:** make (2), npm (1)
> **UI Navigation:** click on (2), go to (1)
> **Env Vars:** http (1), fyi (1)
> **Tools:** terminal (2)

#### [Basic GraphQL schema](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=0)** - [Instructor] To be able to make queries in [GraphQL](../../Skills/Web%20Development/GraphQL.md), you need to define a schema like we started working on here. But this is basically a query. The schema defines the query type and then also what it is expecting. And then a resolver will actually resolve the results from each API endpoint. So the type definition provides what type of data we expect and the resolvers gets the data for us. So we'll get started by defining our product type for our application, and then resolve it with fake data for now. So what I'm going to do is get back into the schema inside of our data folder. So if you want to access this file, it's this one. And what I'm going to do first is define the product type. So basically I am going to again use the keyword type and then define a product. And then what I'm going to do is for that product, I'm going to define each keys and what we're expecting for that particular key. So the first thing is an id, which will be provided by a database eventually, and we're expecting a type of ID. And then I'm going to have a name which we're expecting it to be a String. Same thing for description, a String. We're going to expect a Float for the price. And then we're going to have a key call soldout
>
> **[1:34](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=94)** and it's going to be Boolean. So let's say for example, we're making a mutation, which we'll get to down the road and we're adding a new product to the database and we're passing for the name a Boolean as opposed to a string. The server would go back to the actual query and say, I cannot process this query because the name is not a Boolean, it is a string. So this is why this is very useful because it's sanitizing the data before it's sent to the database and has a one point entry through GraphQL. All right, so for the query, as opposed to say hello, we're going to basically have a query of product and it's expecting a product as a response. So once we make a query for the product, we're going to return a product, which is basically of this type. Okay, so now we're done with the schema. Let's go into our server and basically create a quick resolver that will generate fake data. So this way we have something that we can resolve to in here. So we'll introduce the resolvers and work with them in the future. But right now let's write the function here that will return a product. So I'm going to basically create the resolver product, and here I'm going to return a product as opposed to high and many, like so. And it's going to be
>
> **[3:10](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=190)** a number here for the id. Then we're going to have a name, which should be a string, otherwise it's not going to work. So I'm going to call this a widget, and then I'm going to have a description. And then let's call this a Beautiful widget to use in the garden. And then we're going to have a price and insert a float here. And then we're going to have a Boolean for the soldout key, like so. Okay, so now we have a resolver written. Let's go back to GraphiQL And let's make sure first that our server is actually running. So I'm going to do Control + Grave to see. Yep, it's running. It has refreshed automatically because of nodemon. Then let's refresh this. Clearly we have an error because the query hello doesn't work anymore. And if you look into the documentation explorer here, if you click on query and you see product, it's expecting a product and therefore these elements here. So what I'm going to do now, it's basically go and ask for a product inside of my query.
>
> **[4:33](https://www.linkedin.com/learning/graphql-essential-training-20298359/basic-graphql-schema?u=76281980&t=273)** So let's go and change this to product. And then for a product, we need to return these five things here. So I'm going to, let's say I'm going to just ask for the name. I'm not going to ask for the idea. So you can be very surgical on what you're requesting GraphQL to return. And this is the beauty of GraphQL. Once you know exactly what you're asking for here, you can ask for as little as you want or as much as you want. So we can ask for the description and I want to know the price, and that's it. So let's say you just want that and you click run, it's going to go through your resolver and resolve the data that you asked. The resolver later will actually connect to the database and will query the database and then return whatever data that you want here. So as you can see, it's pretty straightforward to build your schema and then run queries only on what you need. So let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (4)
> **CLI Commands:** make (3)
> **Cross-References:** go back to (2)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** api (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** click on (1)
> **Analogies:** for example (1)


### 2. Types and Schemas

[↑ Back to Table of Contents](#table-of-contents)

#### [Object types and fields](https://www.linkedin.com/learning/graphql-essential-training-20298359/object-types-and-fields?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/object-types-and-fields?u=76281980&t=0)** - [Instructor] If you're familiar with type checking with libraries like TypeScript or Flow, exploring types in [GraphQL](../../Skills/Web%20Development/GraphQL.md) will be familiar to you. Everything in GraphQL is defined by types as we've done already in our schema. So let's open the schema again, and let's explore a few things and then we'll add new code. So basically, when you are defining a type, you are defining the shape of how this data will be and what type of data it expects. For example, in your current type, Product, we are expecting the data to contain an ID, name, description, et cetera. So this is your object type for the Product. Like any [JavaScript](../../Skills/Software%20Development/JavaScript.md) object inside of it, we have the fields, and then declare what type of data we expect for this field. For example, name is a field and we expect a string for that field. This field could be a string, an array of another type, et cetera. We'll go through every option possible as we go through this course. So let's push this a bit further by adding an array of stores to our Product. So what we're going to do first is go and add inside of our type for Product a store. So let's go ahead and add stores, and this could be an array like so. And on this one, I'm going to put an exclamation point here. What does that mean, is that this array cannot be empty. So therefore, we need to have a store absolutely
>
> **[1:35](https://www.linkedin.com/learning/graphql-essential-training-20298359/object-types-and-fields?u=76281980&t=95)** with a product, otherwise, we won't be able to send the information to the database or whatever is connected to this type of Product. So that's how it would work for that. And then what we need to do is also define, well, the type Store. So let's go ahead and do that, we're going to define Store. And for that one, we'll have a store, and then expect a string. So therefore, each store will have a string like so. So now that we've done this, let's make sure that we are going into a server and that our resolver is actually updated to handle this. So what I'm going to do here is add in the resolver of stores, and then this one's going to be an array like so. And then for each array, I'm going to have a store, and then I would say, let's say Pasadena. And then another one, it would be a store, Los Angeles, like so. Okay, so our resolver is done, our server is running properly. I just did a shortcut to open it up, and then I'm going to go inside of GraphiQL, just do a quick refresh. And then, let's go ahead and do the same query, but this time I'm going to add stores like so.
>
> **[3:12](https://www.linkedin.com/learning/graphql-essential-training-20298359/object-types-and-fields?u=76281980&t=192)** And then I do this, it's going to basically name me the store here. So what it was asking basically here that I didn't enter is what I'm asking for the store. So you need to ask for something, so in this case, I have store as an entry value, so I need to run that, and then I would get the list of stores for this particular store. So as we explore GraphQL, you'll learn about many of the types, and we'll go through each of them. So let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (3), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Query and mutation types](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=0)** - [Instructor] Queries and mutations are the basis of running operations in a [GraphQL](../../Skills/Web%20Development/GraphQL.md) environment. And we'll explore each type. First you have queries, which we already coded one for a product type right here. And if you look into the schema, you can find it right here. The query type is responsible for defining what will return when we make the query. In this case, we are querying a product type and therefore when we run the query, it will return a product or multiple [products](../../Skills/Software%20Development/Microsoft%20Products.md) based on the query. Next, we have mutations, which is basically GraphQL's way of changing data, updating, or creating new data. So let's add a mutation type to our project. So the very first thing that I'm going to do is go back to the index and I'm going to create an in-memory database here. And then we're going to use it, create a class, and then create new products just as an object inside of our application. So let's go ahead and do that first. Okay, so what I'm going to do is just before the const root I'm going to create a class of Product and this will be constructor, which will take an id and then name, description, price, soldout, and then stores. And then inside of the constructor,
>
> **[1:36](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=96)** I'm going to basically this.id, I'm going to initialize all these different keys here. And just copy and paste. (keyboard clicks) And I'm going to do this for every single one of them, so id, name, description, price, soldout, and stores.
>
> **[2:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=120)** Then I'm going to change it, I'm going to use the Option + click inside of VS Code. And this is the name, Option + click, description, price, soldout,
>
> **[2:23](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=143)** and stores like so. Okay, so I have my class declared and then I'm going to create my in-memory object that will hold my products that I'm going to create. We'll initialize [Databases](../../Skills/Software%20Development/Databases.md) later on in this course but for the time being, just for the example, I'm going to create an object here that will hold all the new products that we'll create. And then here in our resolver, I'm going to basically create a new product here. So I'm going to then create a product. So I'm creating a new resolver for our product.
>
> **[3:16](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=196)** (keyboard clicks) let id, require, we're going to use crypto to create an id, crypto.
>
> **[3:35](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=215)** And we're going to create with the id, leveraging random bytes. And we're going to create 10 characters, toString,
>
> **[3:51](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=231)** and use hex, like so. So basically we're creating an id here that we're going to leverage. And let's make sure we do this inside of here. Let me just cut this here. There you go. And then paste this here. There you go, so you want to make sure that you're inside of this and then create your function, or your resolver right here, like so. Okay, so let's continue. We're going to add this to the product database. Equals the input and return new Product
>
> **[4:50](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=290)** with the id and the input, like so. So basically we're creating a mini resolver leveraging the database or the object that we've created here. And that's how we're going to basically run this little function for now. Say this, let's make sure that our schema is updated to handle that input, very important. So now that we have our query here, now we also need to create our type for the store input. So StoreInput like so, which basically takes a store
>
> **[5:33](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=333)** for string 'cause we're going to need to create a new product, but we'll also need to have the input for the store, like we had the store here inside of our queries. So that's very important. So now that we have our type for the store input, we need to create the product input as well. So all of these are elements that you need to create for the mutations. So basically what we're going to do is basically copy and paste everything that we have in here. Copy and paste right here, like so. The big difference here is that it's not a store, but a StoreInput that we're taking in here. Everything else should be the same here. And then we need to create the mutation, so type mutation with a capital M like we did for query here. And then we need to create products, so we're leveraging the resolver, createProduct, which takes an input. And if you go back here, the resolver is actually taking an input here, like so. And these inputs should be of type ProductInput. Therefore they should have all these things including absolutely needs to have a StoreInput, it's mandatory. And then once the mutation is done, it needs to return something which is the Product, like so.
>
> **[7:07](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=427)** Okay, so now this is all done, let's make sure our server is running. [npm](../../Skills/Web%20Development/npm.md) start, and it's running without any issues.
>
> **[7:23](https://www.linkedin.com/learning/graphql-essential-training-20298359/query-and-mutation-types?u=76281980&t=443)** Okay, so let's close the terminal, everything is working properly. And if we go back to all this, as you can see, we have the input here for the StoreInput, which stores are taking as an input. And then we have the ProductInput, which is used in our resolver here, where we actually use the input: ProductInput inside of this createProduct. And then it returns the product once we're done with the mutation. Okay, so now that we've created our first mutation, let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (5), [GraphQL](../../Skills/Web%20Development/GraphQL.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1), [npm](../../Skills/Web%20Development/npm.md) (1)
> **CLI Commands:** make (5), find (1), npm (1)
> **Code Identifiers:** createproduct (2), tostring (1)
> **Cross-References:** go back to (2)
> **Tools:** vs code (1), terminal (1)
> **Speakers:** - [instructor] (1)

#### [What is the resolver and its role?](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=0)** - [Instructor] So you have heard me talking about resolvers and seen to so far by way of the queries and mutations. Basically resolvers are the functions that respond to queries and mutations. They are the function that gives us the result of the query. And because the standard approach is to leave the schema only for type definition, we create those functions separate from the schema. You can either have them in a separate file and then import them into your main server file, or have them into your main entry server file, in this case, our index.js, like I've done here. So we use the second method thus far. So let's extract the resolve resolvers into their own file and go through the ones we have so far. So what I'm going to do now is go inside of my data folder and create the resolvers right here, not here, but in the data one. Resolvers.js, like so. And then what I'm going to do is basically grab everything from those resolvers here, to the class Product, cut it from the index file, let me just close the Explorer here, save that for now. It's going to break the application for now, but we'll fix whatever we need to fix here after. And then I'm going to paste all this inside my resolvers file, right here. So what I need first is the class product. I still need the class product here, so I'm going to keep all of this my constructor, I'm basically setting up my product class here. And then we're going to leave my in-memory
>
> **[1:33](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=93)** product database here. So the object that I created to add new [products](../../Skills/Software%20Development/Microsoft%20Products.md), and then this is where it's going to change a bit. So the first thing I'm going to do is create a variable that will be called resolvers. And then what I'm going to do is create a first resolver that will be used to get a single product. So getProduct, like so, and then it needs an ID to actually get a product, like so. And then what I need to do is return a new product. And it needs the ID to return that product. And we're going to go basically inside the product database and find that single product with the ID. So this is what it does here. Then I'm going to create my second resolver, which is based on this guy here. So I'm going to literally just cut that out here, and paste it right there, like so. So that doesn't change. Then we can delete the root here, like so. And then we're going to export default resolvers, like so.
>
> **[2:57](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=177)** Okay, so now I got my resolvers file completed. The next thing we need to do, as you can imagine, because we changed one of our queries here, the getProduct, we need to change that in the schema too. So let's go into our schema, right here, just going to close this. And then what I'm going to do in my query, right here, I'm going to change all this to getProduct, which takes an ID, and then it returns a product. Okay, so we don't need to change anything in the schema. The last thing we need to do is import our resolvers inside of our server file, because right now, we are basically using the root here, but we're not using anything. So we need to import the resolvers first, 'cause as you recall, the root was part of the resolvers function that we had earlier. So now we need to reimport the resolvers here, like so, then we need to create a variable called root, and pass the resolvers to it. And now the root will be used right here. So we should be all good to go. Now let's save this. Let's open our server. Our server should be running properly here. And if you're not sure, let's just do RS. And there you go, everything is good. Now we can go and test this inside of GraphiQL.
>
> **[4:35](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=275)** Okay, so now we're back into GraphiQL, and as we can see there is an issue. So first of all, the documentation is not showing anything, so that's already a sign that something is wrong. But as I can see here, it says here, "Errors, "the type of mutation, createProduct input, "must be input type, but got ProductInput." Alright, so let's take a look at what's happening here. First of all, if we look at the server, the server doesn't show that there's any issues. But there's clearly an issue. Well, first of all, I see it right here. There's an issue here, this is not creat, but createProduct. So we need to kind of change that, but that was not the error that I was seeing. So let's go here in the schema. And what happens here is that a mutation should be of input and not of type here, because type is for query. So that was my mistake. So we need to change that to input right here. I like to go through these exercise with you guys where we debug stuff so you can see the kinds of errors that could happen and sometimes be able to debug them. Because a lot of times we debug stuff as developers, and I like to have these experiences with you. All right, so let's save that. That should fix what we need to fix. Let's just again, reload this. I'm going to go and do this and reload.
>
> **[6:06](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=366)** And I believe this, the same thing is for the StoreInput, too. So we need to change that, too. Okay, so now that should fix everything that we need to fix. Let's go back here, refresh this. There you go. Alright, the documentation's back, that's a good sign. So if we take a look at the mutations right now, what we see is that we have a createProduct and it takes an input, a product input, and then this input takes all these things. So what I'm going to do now is actually create a product. So what I'm going to do is go into my Mutation and then createProduct. As you can see, it's already working and it takes an input. And this input takes several things. So first of all, it takes a name. So we could call this a widget, like so. Then it takes a description, and then that description could be, "another widget for your garden." Then it needs to have a price, so let's do 23.99, and then let's go ahead and do soldout, which takes a boolean, so let's say false. And then finally you absolutely need to put it in certain stores, right? And the stores are an array of stores. So then we need to create a store, which will be, again, I'll go with what I've used before,
>
> **[7:41](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=461)** Pasadena, with the capital P, and then we need to create another store. And we're going to put this one also in LA, like we've done before, Los Angeles, like so, okay? So we got everything that we need. Now what we need is to return something. So I'd like to return the price, and the name, and the description for what I'm going to create. So as you do the execute query, I've created a product, and I have a price, I have a name, and I have a description. So let me create another one, but this time I'm going to get the ID so I can get the ID after. And I'm just going to change this to Widget 23. Just change a few things, let's say 40.99, and this one is in Thousand Oaks. And let's go ahead and do this. And now I got an ID. Let's copy the ID and let's go back into our documentation and let's go into the queries. Now I can get a product with this ID. So let me go ahead and do that. So now, going to do a query, and this is called getProduct. I need to have an ID, so I'm going to pass that ID, and then I'm going to get, let's say the price,
>
> **[9:18](https://www.linkedin.com/learning/graphql-essential-training-20298359/what-is-the-resolver-and-its-role?u=76281980&t=558)** and the name, and the description. Now by running this query that we just created, I'm running this query, and now I got the name Widget 23, the price 40.99, and the description, "another widget for your garden." So now we've got a solid base for a GraphiQL server. So let's continue exploring other types, GraphiQL uses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Code Identifiers:** getproduct (4), createproduct (4)
> **Versions:** 40.99 (2), 23.99 (1)
> **File Paths:** index.js (1), resolvers.js (1)
> **Documentation:** the documentation (2)
> **Definitions:** is an  (1), is called (1)
> **CLI Commands:** find (1)
> **Analogies:** imagine (1)

#### [Scalar types](https://www.linkedin.com/learning/graphql-essential-training-20298359/scalar-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/scalar-types?u=76281980&t=0)** - [Instructor] [Scala](../../Skills/Software%20Development/Scala.md) types are the basic types that come with [GraphQL](../../Skills/Web%20Development/GraphQL.md) and can be used without having to create the type beforehand. So with GraphQL, we have access to these basic Scala types. We have int for integers, your regular number. We have float, a float number, which basically includes a decimal point. So for example, we are using it right here. We have string, which we've been using everywhere. So this is basically for any list of characters that we've used thus far. An ID right here, which is basically a unique identifier for each entry in GraphQL. And finally we have Boolean, which has a value of true or false. So for each field we enter into our type, like our product type, we need to define what Scala type it takes. So let's add a new field with the different Scala types for our schema. So right now, we're not using integers, so let's go ahead and do that. So what I'm going to do is introduce inside of my type product here an inventory key, which I'm going to pass an integer type. And we're going to do this also for the product input. So I'm going to add it here like so, and add the integer. And then finally, I'm going to also pass this to the resolvers. And I'm going to do this inventory equals inventory. I'm going to make sure I pass it
>
> **[1:36](https://www.linkedin.com/learning/graphql-essential-training-20298359/scalar-types?u=76281980&t=96)** in my constructor above here, inventory, like so, and then I should be able to use it. So make sure everything is running properly here. So I just brought my terminal. You can do this by clicking here or using the shortcuts of your editor. I'm going to again do a refresh. And now inside of my mutation, I'm going to add inventory like so. And I'm going to say there's 10 of those, like so. Perfect. So now I'm going to create a widget number 54, change the price a bit, $52, and then maybe change the city here to Orlando. Okay, so now let's create that new object. It has created that new object with an ID. And now I'm going to query that specific ID. And by the way, if you're not familiar with history, basically that button brings all the queries that you've made through the life of this particular GraphQL server. So if you want to bring up a previous query, you can actually do that this way and then paste, let's say, for example, the ID that we're trying to look for. I'm just going to close the documentation here. And now I would like to know the inventory too, so I can actually add inventory here, run this, and now I know that widget 54 is at $52.99
>
> **[3:12](https://www.linkedin.com/learning/graphql-essential-training-20298359/scalar-types?u=76281980&t=192)** and it has 10 in the inventory. So basically when you create your types, you can essentially use any of these for your fields. So let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Scala](../../Skills/Software%20Development/Scala.md) (4), [GraphQL](../../Skills/Web%20Development/GraphQL.md) (4)
> **CLI Commands:** make (2)
> **Analogies:** for example (2)
> **Versions:** 52.99 (1)
> **Documentation:** the documentation (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Enumeration types](https://www.linkedin.com/learning/graphql-essential-training-20298359/enumeration-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/enumeration-types?u=76281980&t=0)** - [Instructor] Enumeration type, or commonly called enums, is a special [Scala](../../Skills/Software%20Development/Scala.md) type that allows you to define a specific set of data the field takes and restrict the input to what you list in the enum type. So let me demonstrate so we can make better sense of this type. So let's go back to our schema. And what I'm going to do first is create the enum type. So what I'm going to do just below here, I'm going to create an enum and I'm going to call this one Soldout. And basically what this takes is either two values, one is SOLDOUT or ONSALE. And what basically that says is that for the soldout here as opposed to using a Boolean, what I'm going to do is use the enum type call Soldout, like so. So basically what I'm doing here for soldout key, I can only list or take these two values. And I'm going to do this also for the input right here, Soldout, like so. And that's basically how it works. So now what I'm going to do is go back to [GraphQL](../../Skills/Web%20Development/GraphQL.md) and let's go ahead and test this. So let's say we want to create a new product. Let's go into the history and use a previous create product here and change a few things. So let's say Widget 99,
>
> **[1:36](https://www.linkedin.com/learning/graphql-essential-training-20298359/enumeration-types?u=76281980&t=96)** and then let's change the price to $12.99 and let's keep it at false, let's just keep it the old way, and then we'll return all these things, run the query, and now I got an error message. Enum Soldout cannot represent non-value false. So, okay, so let's use what we just said earlier. Let's do ONSALE as opposed to a Boolean. And we absolutely need to refresh the server in order for this to work, but let's run it. And now it's worked. Now it's going to give me an error message because I haven't refreshed my server yet, because previously it would take a false or a true value, but now it's actually taking an enum. So it gives me an error, but actually it's working because I actually created a product here. Now if I do this again and I will say SOLDOUT and create a brand new product, so I'm going to call this product 34, change the price so I can have something that I know, and now what I'm going to do is also list soldout and run this query. And as you can see, it says SOLDOUT as I've actually name it as SOLDOUT. So whenever you need to restrict the type of data the field takes, enums are a great way to do it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Scala](../../Skills/Software%20Development/Scala.md) (1), [GraphQL](../../Skills/Web%20Development/GraphQL.md) (1)
> **Env Vars:** soldout (4), onsale (2)
> **Cross-References:** go back to (2)
> **CLI Commands:** make (1)
> **Versions:** 12.99 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [List of types inside another](https://www.linkedin.com/learning/graphql-essential-training-20298359/list-of-types-inside-another?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/list-of-types-inside-another?u=76281980&t=0)** - [Instructor] In many cases, you will need to have inside of a field multiple values. For example, a list of episodes characters featured in a television show. This is where you can create a type for your list and use an array to signify a list of items inside of the field. In our case, we already created it for the stores. So if you look back at the schema here, you see that we have stores as one of the elements that is taken inside of our type product. And then you see this array here of store. So this is basically how it works. So if you go into the type here, you define what this particular type takes first. So it could take more than one, not just string. It could take an actual idea for the store, it could take an address, it could take a whole bunch of things. And then you actually go inside of the product ID and then have a list like so. And if you don't remember, the exclamation point makes it mandatory to have an element here. So if you don't enter any stores for that product, it's not going to work when you actually do the input or when you actually list the stores. So as you can see, this is very useful to create sub lists of items for your type. So let's move on.

> [!info]- Semantic Content
>
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 3. Setting Up Persistence

[↑ Back to Table of Contents](#table-of-contents)

#### [Installing MongoDB for GraphQL](https://www.linkedin.com/learning/graphql-essential-training-20298359/installing-mongodb-for-graphql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/installing-mongodb-for-graphql?u=76281980&t=0)** - [Instructor] Right now, our data is only saved in memory. And when we stop the server, we lose any data persistence. With our [GraphQL](../../Skills/Web%20Development/GraphQL.md) server up and running and now with some knowledge about how it works, let's add data persistence with [MongoDB](../../Skills/Software%20Development/MongoDB.md). So the first thing you need to do is, install MongoDB. And the fastest way to the actual instructions is usually to do MongoDB install and the operating system you're on. So let's say for example, you're on a Mac, you would do this, and then you would go to install MongoDB Community Edition, which is the free version. And then on this same page, you have all the instructions for the different operating systems. So install on [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), install on [Windows](../../Glossary/Service/Windows.md), install with Docker if you want to do with Docker. So what you need to do is, follow these instructions. They're very well explained, so I'm not going to go through them in this video, but I want to make sure that once you have all of this installed, you can do a check to make sure that your MongoDB service is running. So follow again, the instructions for your specific operating system. And once you're done with that, I would recommend that you install a tool that will allow you to actually check if you have the MongoDB service open and running. So this is the application that I use to check if MongoDB is working and also sometimes I use it to make transactions with the database directly. It's called Robo 3T, and it looks something like this. What you need to do once you have it open, you need to basically create a connection to MongoDB,
>
> **[1:34](https://www.linkedin.com/learning/graphql-essential-training-20298359/installing-mongodb-for-graphql?u=76281980&t=94)** which uses the local host and the port 27017. So the way you actually connect it is to, let's just go ahead and edit. All you need to do is, basically put the local host and that address, save it, and then connect to it. If you're able to connect to it and you see all the [Databases](../../Skills/Software%20Development/Databases.md) that you created through your applications, you can see all the stuff that I've created here, then you're good to go. Now, the next thing that we need to install directly on the application is Mongoose. So what we're going to do, we're going to close our server. So I'm going to open up a new terminal by clicking new terminal, new terminal, and I have this running here. So what I'm going to do is, close the terminal here, or turn off the server by doing control C. And then what I'm going to do is, do an mpm i and install Mongoose, and we're going to use Mongoose to make the connection to the database with MongoDB and then connect with our GraphQL server. So let's go ahead and install Mongoose. And I have a little issue here. So what I'm going to do is mpm install Mongoose, and I'm going to force it. This is something local that I have experienced in the past, so I need to force it. But it's still going to install it, so I'm going to be good on my end. You won't need to do that, it's just on my end.
>
> **[3:06](https://www.linkedin.com/learning/graphql-essential-training-20298359/installing-mongodb-for-graphql?u=76281980&t=186)** So now, here what I have is, Mongoose install in my dependencies. So we're good to go. We have Mongoose install, you should have MongoDB running, have been able to check it through Robo T or any connections, you can actually run the service and check it as well. If you're running into any issues with the installation of MongoDB, please make sure to refer back to the documentation on the MongoDB website I showed you earlier, and you should be eventually good to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MongoDB](../../Skills/Software%20Development/MongoDB.md) (12), [GraphQL](../../Skills/Web%20Development/GraphQL.md) (2), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [Windows](../../Glossary/Service/Windows.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Prerequisites:** install (14)
> **CLI Commands:** make (5), docker (2)
> **Tools:** terminal (4)
> **Ports:** port 27017 (1)
> **Documentation:** the documentation (1)
> **Analogies:** for example (1)
> **Best Practices:** make sure to (1)

#### [Finalize the database connectors](https://www.linkedin.com/learning/graphql-essential-training-20298359/finalize-the-database-connectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/finalize-the-database-connectors?u=76281980&t=0)** - [Instructor] Now that we have the necessary items to connect to a Mongo database, let's finalize our server to properly connect to the database. So what we're going to do is go inside of our data folder here and create a new file that we'll call dbConnectors. So this is where we're going to connect all over [Databases](../../Skills/Software%20Development/Databases.md) to our [GraphQL](../../Skills/Web%20Development/GraphQL.md) server. So let's go ahead and create a new file in the data folder though, and call this dbConnectors like so .js.
>
> **[0:34](https://www.linkedin.com/learning/graphql-essential-training-20298359/finalize-the-database-connectors?u=76281980&t=34)** And then what we're going to do is let's go ahead and import mongoose like so. And let me just close this to have more screen estate. And what I'm going to do is create an async function to connect to [MongoDB](../../Skills/Software%20Development/MongoDB.md). So let's go ahead and do that async function, and we're going to call this connectMongo, and we're going to try to connect to MongoDB. So what we'll do is await our connection to mongoose, and we're going to use the mongodb at a local host like we checked earlier,
>
> **[1:22](https://www.linkedin.com/learning/graphql-essential-training-20298359/finalize-the-database-connectors?u=76281980&t=82)** and we're going to create a widgets database. And then we're going to console log if there's a connection to MongoDB. So we can check we successfully connected to MongoDB like so. All right, so if there's an error, catch the error and console.log the error. So this way, if there's any issues with the connection, although we checked it in the previous video, if there's an error, at least we'll know in the console log. And the proper practices after a while, is once you have all of this running and you're sure that everything is good, you want to avoid doing too many console logs because this information is actually showing up on the server, okay? And then we're going to use that function connectMongo, boom. Okay, so then what we're going to do is create a mongoose.Schema so we know exactly what we expect from the MongoDB server. So I'm going to create a widget schema, and this is going to be a new mongoose.Schema like so.
>
> **[2:49](https://www.linkedin.com/learning/graphql-essential-training-20298359/finalize-the-database-connectors?u=76281980&t=169)** And this is going to be my schema here. So first of all, as we've defined before, we expect a name for string. We expect a description, which will be also a string, and we need to put comma after here, like so. We also expect a price, which will be a number. And again, just to make sure it's defined as a number in a mongoose.Schema and not as a float or an integer, like we've defined it in GraphQL. So just to make sure that there's no confusion here. Soldout will be expected to be a string, even though we defined it as an enum in the GraphQL server. It's still a string at the end of the day. Inventory also a string. And then finally stores, we expect an array. Okay, perfect. So we have our mongoose.Schema defined. Now we need to apply that schema to the widgets connection or the widgets database that we have on MongoDB. So we're going to do that now, and we're going to create a widgets variable, which will hold the model that we just defined with our schema, and we'll apply it to our widgets database like so, and past the widget schema like so, okay?
>
> **[4:24](https://www.linkedin.com/learning/graphql-essential-training-20298359/finalize-the-database-connectors?u=76281980&t=264)** So the next thing we need to do, we need to be able to export this so we can use it afterwards in our resolvers. And I'm not going to export a default, I'm going to export widgets specifically because after that we're going to actually create the [SQL](../../Skills/Data%20Science/SQL.md) or SQLite, a database connection down the road, and we're going to export that as well. So we're going to use it in our resolvers. So I'm just going to save this as is for now, and make sure that our server runs properly with what we just did. And everything is good to go, so we can move forward to the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MongoDB](../../Skills/Software%20Development/MongoDB.md) (7), [GraphQL](../../Skills/Web%20Development/GraphQL.md) (3), [Databases](../../Skills/Software%20Development/Databases.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **CLI Commands:** make (3), mongo (1)
> **Code Identifiers:** dbconnectors (2), connectmongo (2)
> **Cross-References:** previous video (1), next video (1)
> **Env Vars:** sql (1)
> **Best Practices:** avoid doing (1)
> **Speakers:** - [instructor] (1)

#### [Update resolvers for MongoDB](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=0)** - [Instructor] Let's quickly update our initial resolvers just to make sure that we can actually use the DB connectors that we just created. So let's go ahead and go into the resolvers here. I'm going to close exploration for now, and what I'm going to do is simply update the getProduct here. And then what we'll do is createProduct, we'll update this one later on. So what I'm going to do for now, I'm just going to comment this code here and I'm going to update the getProduct. So what I'm going to do is turn this into an async function two. So I'll literally rewrite the whole thing just to make sure that I'm not making any mistakes here, and I will basically do it this way. Okay, so first let's make this async. And I'm going to pass an ID like I was doing before. And let's turn this into a function. I'm going to put the comma here, so don't get the errors. And basically what we're going to do is try to connect and find inside of the database through our connection to Mongoose to find a product and we'll do await and let's change a few things here. So what we need to do first is remove this here and then we can remove the class product. We don't need it anymore. And I'm going to import Widgets from RDB connectors. Like so.
>
> **[1:32](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=92)** So this way we're leveraging the schema and everything that we've built inside of our connectors and basically use that here. So now we can use Widgets like so, .findbyId and then pass the id. So with that, we'll be able to find a product and then return the product. If not, catch the error and throw new Error, like so. Okay, so what we're doing here is leveraging the database connection that we created, plus the schema plus everything that Mongoose has set up here, which is the Widgets. And then what we're going to do is try to connect through our resolver. Again, the resolver is the function that returns from the database what we need. So in this case, getProduct will return a single product. So we need to pass an ID, and then we're going to try to connect to our widgets connection and find by ID a single item and then return that single item. And if it doesn't work, then throw an error. So let's go ahead and save that. And we're going to make sure that our server is running and it says connected to [MongoDB](../../Skills/Software%20Development/MongoDB.md), too. So that means that we're successfully connected to MongoDB, everything is running as it should. So let's go ahead and open up a new window and go to localhost:8080,
>
> **[3:11](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=191)** and [GraphQL](../../Skills/Web%20Development/GraphQL.md). And the docs are running properly. That means that everything is running properly. So now what we're going to do is try to find an ID through Robo 3T. So what I'm going to do is go through our Robo 3T connection here, going to connect through Robo 3T, and I'm going to go in my widgets database, going to collections. And this is a good exercise for you to see, just to make sure that sometimes you may need to go directly into the database to figure things out. And I have several IDs here. So I have several objects that I can use with an ID. So let's go and get this ID here So what it could do is copy that particular widget. So I'm going to go into a different mode, in a documents mode so I can actually copy this here. And FYI, what I've clicked is on this document mode here, so I can actually copy things. You have different modes here, like so. You can play with this and basically look through your data inside of your database connection. So I just copied a specific Id. So I'm going to go back to GraphQL and I'm going to go into the history, or actually no, I'm going to actually do a query directly. I'm going to do a query and get a single product, which in this case takes an ID. And I'm going to pass that ID like I did before. Whoops, I don't think it worked when I copied. So let's go back here, copy. Let's go back here.
>
> **[4:47](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-resolvers-for-mongodb?u=76281980&t=287)** Paste, perfect. And now what do I want? I'd like to get a name. I'd like to get the soldout, and I'd like to get a description. So what I've done now is through MongoDB, we'll be able to now have persistence, but also be able to query it from GraphQL. So what I'm doing is here, I run this query and now I have the product, which is a name of Widget2, which soldout says it's ONSALE, and the description, another widget for your garden. So if I want to know the inventory just to make sure I have enough to sell, I can run the same thing. And on this particular item, I didn't have the inventory way back. So if I go back into MongoDB and I scroll through all these different items that I have on the database, I will find one that has inventory. If I could scroll down, which one had the inventory? Well, none of these on this particular one, I just remembered that these were run before I added the inventory and they were in the non-persistent database that we had before. So I'm not going to be able to have the inventory on this one, so we're good to go. So this is why I always have Robo 3T in the background just to make sure that I'm not missing anything. But in this case, the inventory is not available. We can throw a mutation when we have MongoDB connected, and actually at that point we'll have the inventory. So let's go ahead and move on to connect SQLize in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MongoDB](../../Skills/Software%20Development/MongoDB.md) (5), [GraphQL](../../Skills/Web%20Development/GraphQL.md) (3)
> **CLI Commands:** make (7), find (6)
> **Code Identifiers:** getproduct (3), createproduct (1), findbyid (1)
> **Definitions:** means that (2), is a  (2)
> **Env Vars:** rdb (1), fyi (1), onsale (1)
> **Cross-References:** go back to (1), in the next (1)
> **UI Navigation:** go to (1), scroll down (1)
> **URLs:** [localhost:8080](https://localhost:8080) (1)

#### [Data persistence with SQL](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=0)** - [Instructor] Adding any other [Databases](../../Skills/Software%20Development/Databases.md) to [GraphQL](../../Skills/Web%20Development/GraphQL.md) is a similar process, and I wanted to give you a quick example with SQLite. Needless to say, you would have to update your resolvers and schema to support this new database and data, but for the sake of focusing on [MongoDB](../../Skills/Software%20Development/MongoDB.md) I'll quickly provide an example for [SQL](../../Skills/Data%20Science/SQL.md). Then the process of creating a function that resolves this particular data is similar to what we've done. So, let me go ahead and show you how it's done. So, I'm going to go first into my server here, and I'm going to stop it with Control + C. And I'm going to install a few dependencies. So, I'm going to install [npm](../../Skills/Web%20Development/npm.md) i, casual, lodash,
>
> **[0:43](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=43)** sequelize, and sqlite3, and these dependencies are going to allow me to use SQLite3. So, you don't have to do this. I have to do this 'cause I have an issue with my system right now, so I'm just going to force these and it's going to work for me. But you don't have to do the --force. It's just something that's running in my cache. All right, so let's go ahead and do an npm start, and then I'm going to close the connection. And then I'm going to go in my dbConnectors, close Explorer just to have a little bit more screen estate, and I'm going to go ahead and start importing a few things. So, I'm going to first import Sequelize and DataType like so, DataTypes plural, make sure it's plural. Then I'm going to import _ from 'lodash' like so,
>
> **[1:42](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=102)** and then import casual from 'casual' like so.
>
> **[1:50](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=110)** And we're going to use casual to generate some data, that's why we're using casual here. Okay, so next what we need to do is create a connection to Sequelize, so what we're going to do is go just below here and first create a Sequelize connection like so, Sequelize, and we're going to have ('sqlite::memory:').
>
> **[2:22](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=142)** And once you run this, FYI, you may have some warning about deprecation with this particular expression here. So, I want to show you that the Sequelize team have been warned about this and they're working on a fix. So, this is the actual issue that's related to this, so this is the area you may see, DeprecationWarning, blah, blah, blah, is invalid. Future versions of Node will throw an error. So, they're working on this and they haven't found, as of the recording of this video, an issue yet, but it's on its way. So, just keep track of this particular issue here. It's 16923, and you should be able to follow what's happening with this. But I believe that once they fix this, and it may be fixed by the time you actually do this course, once they have it fixed you won't see this warning anymore. It's just something within Sequelize. Anyways, I wanted to mention it to you guys. Not to worry, it still works regardless. Okay, so now what we're going to do is continue working on the functions that will connect to Sequelize. So, what I'm going to do next is basically create a categories model for our [products](../../Skills/Software%20Development/Microsoft%20Products.md). So, what is the category, what is the description of that category? So, basically this is what I would use the second database for, just for the sake of an example. So, I'm going to create a variable called Categories, and then I will use sequelize and define these categories inside of a categories in memory database.
>
> **[3:57](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=237)** And then inside of this categories I need to define what types are going to be passed. So, for example, the first key is going to be Categories, and we use DataTypes to define what the type is. And in this case it's going to be a STRING. Again, I'm going really fast through how is the syntax for Sequelize. You can take a look at the documentation if you want to have more information. So, but basically what we're doing right now, we're defining the types using Sequelize on syntax, so that's how they define the types with Sequelize. That's why the STRING is in all caps and so on so forth. Okay, so we're going to continue the description of that category, again, uses DataTypes, and again will be a STRING like so. Perfect, so now that we've defined our schema for this particular Categories database now we can make an actual connection to Sequelize. And we're going to use basically an await approach to this. So, what I'm going to call this is syncAndSeedCategories(),
>
> **[5:14](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=314)** and we're going to try by awaiting for a sequelize.sync connection. And we want to force it by saying { force: true }. And then we can say okay, if it's successful then we can mark 'SQLite connection established
>
> **[5:51](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=351)** and Categories model synced' just to make sure we have some warning as to what is happening, okay? And then make sure that you're still in the try. We're going to seed the categories, so this is what we're doing here, we're going to seed. And seeding is basically a term for Sequelize, so meaning that we're creating elements inside the database. So, what we're going to do here is just create the categories with casual. So, we're going to create a bunch of categories just to fill the database a little bit with data, with fake data actually. So, what we we're going to do is use a Promise.all, and using Lodash we're going to create a bunch of times, some fake data. And this is what we're going to do. And again, we're going to leverage casual to create this fake data. This is why we install casual, so we're going to basically use Categories to create a few items in the database. And you're going to see all of this happen in real time on the console, so you're going to see Categories created, blah, blah, blah, as it connects to SQLite. So, first, we're going to create five times with casual.[word](../../Skills/Cloud%20Computing/Microsoft%20Word.md). So, casual allows us to use any specific words, randomized words, and create these categories. It's probably not going to look like store categories,
>
> **[7:26](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=446)** but we're using this just for fake data purposes. So, this is a good exercise if one day you need to create fake data for your database, casual is always a good library to do that, okay? And once this is done let's do a console.log so it tells us that we have seeded the categories inside our SQLite database, 'Categories seeded'. All right, so this is where we catch if there's an error. So, catch, let's pass in error console.log 'Error with SQLite DB:',
>
> **[8:19](https://www.linkedin.com/learning/graphql-essential-training-20298359/data-persistence-with-sql?u=76281980&t=499)** and let's pass what is the error so we know what's happening. Okay, and now let's run that function that we just created, syncAndSeedCategories. And let's make sure that we export the Categories if we would need it for our resolvers. We're not going to use it in this course, but it's the same concept. So, you're exporting categories, which you could use in your resolvers. Oh wait, this is wrong. This is async. I just saw that there was an error here. So, FYI, if you wrote await here it's await there. It's just I went too fast here. So, async, await, await, like I saw there was an error and I couldn't figure it out what was it, but it's here. So, async, await, await, and now you're all good. All right, so now we can save this. In theory we can go back here. And as you can see, with our SQLite database we have run tables inside of SQLite. It created the tables and inserted values, and it says Categories seeded. That means that our connection to SQLite is successful. So, if you need to get further on this example look at the SQLite documentation to get data and add the proper functions to your resolvers. So, let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [npm](../../Skills/Web%20Development/npm.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1), [GraphQL](../../Skills/Web%20Development/GraphQL.md) (1), [MongoDB](../../Skills/Software%20Development/MongoDB.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **CLI Commands:** make (5), npm (2), sqlite3 (2), node (1)
> **Env Vars:** string (3), fyi (2), sql (1)
> **Code Identifiers:** syncandseedcategories (2), dbconnectors (1)
> **Definitions:** is a  (2), means that (1)
> **Warnings:** warning (3)
> **Prerequisites:** install (3)
> **Analogies:** similar to (1), for example (1)


### 4. Mutations

[↑ Back to Table of Contents](#table-of-contents)

#### [Add new items with mutations](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=0)** - [Instructor] Now that we have all our DBs properly connected, let's add some mutations for a [GraphQL](../../Skills/Web%20Development/GraphQL.md) server. So we're going to start with one mutation, which is basically the one we already created, which is create product. And we'll focus on creating that one first, and then we'll add more as we go through the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of this course. So let's close the explorer and I'm going to start refactoring this one here. And we're also going to make this an async function just to make sure that we have everything before we actually resolve this function. So the first thing I'm going to do is create a newWidget like so, and it's going to be a newWidget, and we're going to pass inside of that newWidget, all the stuff that we've used in the past. So name. So what I'm going to do is pass a name, input.name, and we're simply going to copy and paste
>
> **[1:16](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=76)** all of this a few times, five, six. And we're going to change all of this for different things. So I'm going to click, option, click here and change this to description. Then I'm going to change this one here to price, soldout, inventory. And then here, stores. Once I have this new widget, I'm also going to add an ID to this widget, .id = newWidget._id
>
> **[2:11](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=131)** like so, and then we're going to resolve the function. We're going to use that function to connect to a database. So we're going to try and await the newWidget to save to the database like so. And then return the widget so we can actually see it in the GraphQL, like so, if this doesn't work, catch the error, throw the error, or throw new Error, actually, with passing the error like so. Okay, so that's basically what we need. What I'm going to save now this, make sure that everything is good. It's seated. The SQLite stuff. Let's go into our screen, GraphQL here, and let's create a new product. So what I'm going to do is use some of my history, so you can do that too to save some time. I'm going to click on history and I'm going to go to mutation, create product, close the history. Basically all of this is the same as what we've done in the past, so this should work. I'm going to change a few things just to make sure. Again, the syntax is mutation, and again, if you're not sure, you can look into the docs here. Mutation createProduct takes an input of ProductInput. And what this input is expecting are these things.
>
> **[3:49](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=229)** You absolutely need to put an array of stores here. And if you don't, it's going to show in there, right here. So let's go ahead and I'm going to change this to an actual name of a product. So I'm going to put a shovel here instead of a widget, just a Shovel 2. I'm continue with the shovel just to see the difference between the stuff that we've done in the past and the stuff that we're doing now. So this shovel is going to be $14.99. It's not sold out, so on sale. The inventory, we're going to put 30 and I'm going to keep the same stores. So what I'm going to do now is get everything back. And I want to know the inventory too. So price, name, description, inventory sold out. I want to get this once I create a new product, if everything is connected properly and we run this, it's going to show you the new product here. And you can even go inside the database on Robo 3T to see if it has worked. So I'm going to close this, reopen this, and I have an object here that was created recently. And as you can see, I have my shovel gear that was created directly on the [MongoDB](../../Skills/Software%20Development/MongoDB.md) database. And all the elements that are supposed to be here are here. So basically your connection to the MongoDB to create a new product is working. So as you can see, it's fairly easy to add a mutation to our server. Let's continue working on our server
>
> **[5:22](https://www.linkedin.com/learning/graphql-essential-training-20298359/add-new-items-with-mutations?u=76281980&t=322)** in the following videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (3), [MongoDB](../../Skills/Software%20Development/MongoDB.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Code Identifiers:** newwidget (5), createproduct (1)
> **CLI Commands:** make (4)
> **UI Navigation:** click on (1), go to (1)
> **Versions:** 14.99 (1)
> **Documentation:** the docs (1)
> **Speakers:** - [instructor] (1)

#### [Update items with mutations](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=0)** - [Instructor] In a scenario where you need to update items in the database with [GraphQL](../../Skills/Web%20Development/GraphQL.md), we also need to set up the proper mutations to do so. So let's do this. So let's go ahead and update our resolvers here to have an updateProduct. So I'm going to put it right after the createProduct here. I'm going to put a comma at the end here, and then I will updateProduct. So I'm going to add a resolver that's called updateProduct. And this is also going to be an async function, which needs an input. And what we're going to do is try to update the product by, first of all, we're going to create this variable that will hold widgets and basically try to update findOneAndUpdate.
>
> **[1:02](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=62)** So basically what is going to happen here, and this needs a few things. First of all, it needs an ID. So we need to, from the input, pass the ID of that object and make sure that we can find one in our database and then update it with the input. And we're also going to pass a parameter here if it's not in the system. So let's say, for example, we're trying to update something that isn't existing in the database. If it's new, then with the true here, it's going to create a new one for us. So what we're going to do after that? Like we've done before, we're going to return the updateWidget like so. And then we're going to do basically the same thing here. catch error, throw new Error, blah, blah, blah. So I'm going to literally copy and paste that code here like so. And that will complete our updateProduct here. Now this time, because we don't have the updateProduct resolver inside of our schema, we need to update our schema. So let's go into our schema inside of the data folder. And here you see we had the createProduct before. That's why we didn't update our schema here. But now we need to do the same for our updateProduct. So we're going to do that, updateProduct and make sure you don't make any typos like I've done for the create here in the past. Because otherwise, GraphQL is going
>
> **[2:35](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=155)** to think something's wrong. And what we expect is the ProductInput type. So we expect the ProductInput to be with these things here, like so. And then we're going to return a product after the resolver as done updating the database. Okay, so let's save this. Let's make sure there's no errors here. Everything is good. Let's go into GraphQL right here and let's use our update. So what I'm going to do first is go and mutation. And I'm going to, in this case, well actually, first of all, let's find a product. So let's go into our history. We'll need to create a new product first. So what I'm going to do is call the createProduct first, and I'm going to make sure that I have an ID for this guy here, so id. And let's do Shovel 4. And let's change the price here, 24.99. Create a new product, I have the ID here. Going to copy that ID and now we can actually update the product because I have the ID. Okay, so mutation. And I'm going to update, well, let's refresh GraphQL so I have access to update. There you go. And it needs input. And this is the input that I need.
>
> **[4:09](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=249)** So what I'm going to need first for sure is an ID, right? So we need an ID. I'm going to pass the ID I just copied, and I also can change anything from that product. So let's do, for example, price. I'm going to change the price to 50.99. And then what I'm going to do is make sure they have stores, 'cause stores always needs to be in there. So what I'm going to do here is add store. So store, it's like this. Then I'm going to do Orlando, and store, I'm going to do Los Angeles.
>
> **[5:03](https://www.linkedin.com/learning/graphql-essential-training-20298359/update-items-with-mutations?u=76281980&t=303)** Okay, so now I have stores, I'm updating the price with the ID. And what I'm going to do is go with the name, the price, then I'm going to close the history and then run this here. And as you can see now I've updated the product with the price of 50.99, and the name is still Shovel 4. So there you have it. Now you'll be able to update any items with GraphQL.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (5)
> **Code Identifiers:** updateproduct (7), createproduct (3), findoneandupdate (1), updatewidget (1)
> **CLI Commands:** make (6), find (2)
> **Versions:** 50.99 (2), 24.99 (1)
> **Analogies:** for example (2), it's like (1)
> **Definitions:** is an  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Delete items with mutations](https://www.linkedin.com/learning/graphql-essential-training-20298359/delete-items-with-mutations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/delete-items-with-mutations?u=76281980&t=0)** - [Instructor] The final mutation we need for a [GraphQL](../../Skills/Web%20Development/GraphQL.md) server is to be able to delete data. So let's add this mutation. So the first thing we're going to do, like we've done before, is to add the resolver here. So what I'm going to do is add a comma here and then call this new resolver deleteProduct. Keep the same approach as we've done before. Again, it's going to be an async function, and what we absolutely need in this case is an ID. So we can delete a specific ID within the database. So what I'm going to do is go ahead and try to delete this specific ID inside of my widgets database. So we're going to remove and remove takes an ID. So what we're going to do is on the score ID and pass the ID like so. As simple as this, and then return. And now we can't really return something because we are removing an item within our database. So what we're going to do instead is return a message this time. Successfully deleted widget,
>
> **[1:21](https://www.linkedin.com/learning/graphql-essential-training-20298359/delete-items-with-mutations?u=76281980&t=81)** and then the same thing as before, catch the error, throw the new error, and so on and so forth. We also need to update our schema right here. And what we're going to do is basically do the same thing as we've done before. So we're going to do a delete product and the input is an ID and we need to absolutely need to have that ID and we're going to return the string. So this is what's different. So in this case, if we don't have an ID, this function is going to return an error. So that's why we put the exclamation point here is mandatory to have an ID in order for this particular mutation to work. And then the return is the string, basically the message that we've set up inside of our resolver here. So this is what's expecting as a return from the actual resolver slash database, successfully deleted widget. Wait a minute, I just realized one thing that this is not removed. This is deleteOne and not remove, save. Let's check our server. Everything is good. Okay, so now we're back into GraphiQL. And I already have a product that I updated here. So what I'm going to do here is basically take that, copy that, and then what I'm going to do is remove all this, start with a mutation
>
> **[2:59](https://www.linkedin.com/learning/graphql-essential-training-20298359/delete-items-with-mutations?u=76281980&t=179)** and delete product, which takes an ID, and then copy. So once you run this command here, you should literally see the message that we've actually added, successfully deleted widget. And if you try to find that widget inside of your database here. So let's go see EE2. We go into the database. I'm going to close that, reopen it. And EE2 is nowhere to be found. It actually was deleted. So as you can see, this is fairly easy to add a mutation for deleted objects inside of GraphQL.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (2)
> **Code Identifiers:** deleteproduct (1), deleteone (1)
> **Env Vars:** ee2 (2)
> **Definitions:** is an  (2)
> **CLI Commands:** find (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 5. Queries in Depth

[↑ Back to Table of Contents](#table-of-contents)

#### [Querying all products](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-all-products?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-all-products?u=76281980&t=0)** - [Instructor] Querying all objects in [GraphQL](../../Skills/Web%20Development/GraphQL.md) is often a need to get a list of items. So let's work on this query. Okay, so now we need to add a resolver first in here. So what I'm going to do, just to follow the train of thoughts here, I'm going to put it right after, get a single product, I'm going to put this resolver right here. So, get all [products](../../Skills/Software%20Development/Microsoft%20Products.md) is going to be the resolver I'm going to be working on. So let's go ahead and create that resolver, which is a function. I'm going to put a comma here so I can take out that error. And then let's go ahead and use the try catch again. And I'm going to basically return await, widgets, find. Basically find all with no parameters so we can find all of our widgets. That's it. And then we're going to do the exact same thing we've done before. Catch error, throw error, boom. Like so. Perfect. So now we got our resolver. We need to add it to our schema. And let's go here. And we're going to put this in the queries right here. So what we're going to do is go here and then get all products. It doesn't take anything and it will return an array of product. So that's basically what this query is going to do.
>
> **[1:38](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-all-products?u=76281980&t=98)** So we can save all this, we can check our server, everything is working fine. And then we can go into GraphIQL here, and I'm going to literally remove this and do query, like so. And then get, oh, well actually, let's just refresh this so we can have access to this. Get all products. And then you want to define what you want to get from each of the products, right? So let's say, for example, we want to have the name, we want to have the price, and we want to have the inventory. That's basically what we want. We can run our query and it's going to return all the products that are in the database and returns the name, the price, and the inventory. So clearly we have a few that the inventory is null because we created those items before. But as you can see here, we have the inventory for the shovel that we created. So we're good to go. Okay, so this is all you get for query all products inside of our GraphQL database or server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (6), [GraphQL](../../Skills/Web%20Development/GraphQL.md) (2)
> **CLI Commands:** find (3)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Querying with aliases](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-aliases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-aliases?u=76281980&t=0)** - [Instructor] Aliases is a feature that comes right out of the box with [GraphQL](../../Skills/Web%20Development/GraphQL.md) and doesn't require any coding. It is basically a way to do multiple queries and name them with anything you want to properly label them. So let me demonstrate. So let's go ahead and clear this here. And what I'm going to do is do a query like so, and what I'm going to do, I am going to call the first query, let's say widgetone, like so. And then what I'm going to do is use getProduct and I'm going to pass an ID of that product, right? And what I'm going to do is go inside of Robo 3T so I don't have to stop from typing this particular query. So I'm going to go into [JSON](../../Skills/Web%20Development/JSON.md) mode, get this object ID here, copy that, and then I'm going to get the other one here. So let's start with this one. Like so, and then you want to have specific things from that specific product. So I'd like to have, for example, the name. I'd like to have a description and I'd like to have a price. And then what we could do at that point is get a second alias or a second query that I'm going to call widgettwo.
>
> **[1:30](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-aliases?u=76281980&t=90)** And again, use the exact same syntax or very similar. So getProduct. And I'm going to grab another ID from here. So I'm going to go for the one that has inventory. I think it's the very last one here. Inventory, yeah. Boom. Copy that, go back into GraphiQL. And this is the ID that I'm going to pass for this one. And then for this one, I want specific things. I just want the name and I want the inventory 'cause the inventory is not available for this one here, but I have it available here so I can actually call for that. So what I've done here is specific syntax around the alias. So I have an alias that's called widgetone, which is getting information from that product. And I have another alias here, widgettwo, which is getting information from that specific product. And you could go on and on and on and on. And also have another query type. So get all [products](../../Skills/Software%20Development/Microsoft%20Products.md) and have specific things from that specific query or alias. And then have on the second alias, another query. So let's go ahead and call this. And as you can see on the first alias, I have the name, the description, and the price. And then on the second one I have the name and the inventory. So using aliases could be useful when the front end is calling the backend from specific products and can construct the query with the same name or ID of the product to get the result
>
> **[3:04](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-aliases?u=76281980&t=184)** with the proper label. I'm sure you can find a specific use for this feature as you explore using GraphQL with your own projects. So let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (2), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Code Identifiers:** getproduct (2)
> **CLI Commands:** find (1)
> **Env Vars:** json (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Querying with fragments](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-fragments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-fragments?u=76281980&t=0)** - [Instructor] Like aliases, fragments are a neat feature that comes built in with [GraphQL](../../Skills/Web%20Development/GraphQL.md) and is very useful when we start requesting the same data across several items. So let me demonstrate. So we have our two items here that have different aliases, right? So we have this idea, and we get [products](../../Skills/Software%20Development/Microsoft%20Products.md), and we have a second alias that gets information from this idea here. But what if we wanted to have the exact same information across all these different ideas? So what it could do here is build a fragment. So let me go ahead and do that. So I'm going to start typing the fragment first. So I'm going to create a fragment that I'm going to call productFragment on Product.
>
> **[0:47](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-fragments?u=76281980&t=47)** And then you can define exactly what you want for that specific fragment. So I know that inventory is not available across all my different products in my database. And what I'm going to do is do the name, do the description, and then do the price. So I know at least these pieces of information are available. So now how do I use a fragment inside of my syntax above here? All I have to do, first of all, is remove this, right? And then I do dot, dot, dot, and basically use productFragment like this. And then do the same here. Dot, dot, dot, productFragment. And now with this query, I can literally build multiple queries with aliases, but have the same information across all these different aliases. So a lot less typing and get a lot more information from this fragment. So if I run this, I'm going to have the exact same information across all my different aliases. So I have the name, the description, and the price on all two. So you can also be even more specific. I could get all products on here. So let me rebuild the second one. Like this. And instead of get a single product, I could get all products. And now I need to define what I'm going to get. But I have this really neat piece of fragments
>
> **[2:22](https://www.linkedin.com/learning/graphql-essential-training-20298359/querying-with-fragments?u=76281980&t=142)** that I can use, and I'm going to get all the same information across. So first I'm going to get the single user, and then I'm going to get all products with the name, description, and price. And there you go. So now I can use these specific elements in my front end, for example. And let's say, for example, I just wanted to have this single user or this single widget, I could use that information for one element on my front end, and then I could use that information for another element on my front end, as you can see. So as you can see, and very much like aliases, the use case for this is similar. It could be used for getting multiple items and typing a lot less in your queries.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (5), [GraphQL](../../Skills/Web%20Development/GraphQL.md) (1)
> **Code Identifiers:** productfragment (3)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/graphql-essential-training-20298359/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/graphql-essential-training-20298359/next-steps?u=76281980&t=0)** - [Instructor] This was an essential exploration of [GraphQL](../../Skills/Web%20Development/GraphQL.md) and what it has to offer. With this new knowledge, you should be able to build your own GraphQL server, and get going with queries and mutations. GraphQL is in constant development, and new features will come up from time to time, in addition to those we've explored in this course. You'll want to keep abreast of these new features by reading the docs and articles by the development team. Whenever you need help, there is a GraphQL community on [Slack](../../Skills/Software%20Development/Slack.md), and you can access it with this link, [graphql-slack.com](https://graphql-slack.com). Thanks very much for taking my course, and I'll see you in a bit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (5), [Slack](../../Skills/Software%20Development/Slack.md) (2)
> **Tools:** slack (2)
> **URLs:** [graphql-slack.com](https://graphql-slack.com) (1)
> **Documentation:** the docs (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Emmanuel Henri](../../Instructors/Web%20Development/Emmanuel%20Henri.md)

## Resources

- Exercise files available

## Skills Covered

- GraphQL

## Path Context

### In [Stay Ahead in GraphQL](../../Paths/Software%20Development/Learning%20Paths/Stay%20Ahead%20in%20GraphQL.md)
← [Learning Graphql](Learning%20Graphql.md) | **2 of 3** | [Migrating from REST to GraphQL](Migrating%20from%20REST%20to%20GraphQL.md) →

## Appears In

- [Stay Ahead in GraphQL](../../Paths/Software%20Development/Learning%20Paths/Stay%20Ahead%20in%20GraphQL.md)

## Related Courses

_Courses sharing skills:_

- [Building GraphQL Applications in Laravel](../Web%20Development/Building%20GraphQL%20Applications%20in%20Laravel.md) — GraphQL
- [Building a GraphQL Project with React.js](../Web%20Development/Building%20a%20GraphQL%20Project%20with%20React.js.md) — GraphQL
- [Spring with GraphQL](Spring%20with%20GraphQL.md) — GraphQL
- [Migrating from REST to GraphQL](Migrating%20from%20REST%20to%20GraphQL.md) — GraphQL
- [Learning Graphql](Learning%20Graphql.md) — GraphQL

---

[↑ Back to top](#)