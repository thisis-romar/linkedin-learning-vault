---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: advanced-express
url: "https://www.linkedin.com/learning/advanced-express"
duration_minutes: 150
duration: 2h 30m
level: Advanced
updated: 2/7/2019
learners: 17819
skills:
  - Express.js
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQEs-5ilV5t5IA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568665801430?e=2147483647&amp;v=beta&amp;t=fpFV5ai-XBvBeCymP5dNGdv5PYSX3t6MBY1E3STCcuE"
linkedin_topic: Web Development
learning_paths:
  - '[[Explore Web Development with Node.js]]'
  - '[[Advance your Node.js Skills]]'
prev_courses:
  - '[[Express Essentials- Build Powerful Web Apps with Node.js]]'
  - '[[Node.js- Debugging and Performance Tuning]]'
next_courses:
  - '[[Node.js- Web Servers, Tests, and Deployment]]'
  - '[[Node.js- Microservices]]'
path_nav: '[{"path":"Explore Web Development with Node.js","position":6,"total":11,"prev":"Express Essentials- Build Powerful Web Apps with Node.js","next":"Node.js- Web Servers, Tests, and Deployment"},{"path":"Advance your Node.js Skills","position":5,"total":8,"prev":"Node.js- Debugging and Performance Tuning","next":"Node.js- Microservices"}]'
path_count: 2
tags:
  - course
  - topic/web-development
  - skill/express-js
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Advanced%20Express.md)

![Advanced Express](https://media.licdn.com/dms/image/v2/C4E0DAQEs-5ilV5t5IA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568665801430?e=2147483647&amp;v=beta&amp;t=fpFV5ai-XBvBeCymP5dNGdv5PYSX3t6MBY1E3STCcuE)

# Advanced Express

> Node.js is one of major platforms for the web and Express is one of the most popular Node frameworks. This course is designed to take your development skills to the next level, with advanced techniques that will enable you to tackle more complex projects with Express. Learn how to integrate a database, build a proper user authentication and authorization system, securely upload files, process and 

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-express) | 2h 30m | Advanced | 18K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Tackle any project with Express](#tackle-any-project-with-express)
  - [What you should know](#what-you-should-know)
  - [Get your tools ready](#get-your-tools-ready)
  - [Understanding and running the sample project](#understanding-and-running-the-sample-project)
- [**1. Know the Building Blocks and Internals of Express**](#1-know-the-building-blocks-and-internals-of-express) (3 videos)
  - [Exploring Express components and APIs](#exploring-express-components-and-apis)
  - [Important Express middleware](#important-express-middleware)
  - [Creating a template engine for Express](#creating-a-template-engine-for-express)
- [**2. Use MongoDB and Mongoose to Manage Users**](#2-use-mongodb-and-mongoose-to-manage-users) (8 videos)
  - [Setting up a hosted MongoDB server](#setting-up-a-hosted-mongodb-server)
  - [Connecting to MongoDB](#connecting-to-mongodb)
  - [Adding MongoDB and Mongoose to an Express project](#adding-mongodb-and-mongoose-to-an-express-project)
  - [Creating a user schema for Mongoose](#creating-a-user-schema-for-mongoose)
  - [Using bcrypt to hash and validate passwords](#using-bcrypt-to-hash-and-validate-passwords)
  - [Adding password encryption and validation to a Mongoose model](#adding-password-encryption-and-validation-to-a-mongoose-model)
  - [Creating a user registration route](#creating-a-user-registration-route)
  - [Testing the form and reviewing the data in MongoDB](#testing-the-form-and-reviewing-the-data-in-mongodb)
- [**3. Authenticate and Authorize Users**](#3-authenticate-and-authorize-users) (11 videos)
  - [Understanding cookies and sessions](#understanding-cookies-and-sessions)
  - [Adding cookies and sessions to Express](#adding-cookies-and-sessions-to-express)
  - [Inspecting the session object](#inspecting-the-session-object)
  - [Introduction to Passport](#introduction-to-passport)
  - [Adding Passport to Express](#adding-passport-to-express)
  - [Setting up an authentication strategy for Passport](#setting-up-an-authentication-strategy-for-passport)
  - [Serializing and deserializing users](#serializing-and-deserializing-users)
  - [Creating a login form with Passport](#creating-a-login-form-with-passport)
  - [Providing a logout link](#providing-a-logout-link)
  - [Authentication vs. authorization](#authentication-vs-authorization)
  - [Protecting routes](#protecting-routes)
- [**4. Handle File Uploads and Process Images**](#4-handle-file-uploads-and-process-images) (5 videos)
  - [File upload basics](#file-upload-basics)
  - [Handling multipart form data with multer](#handling-multipart-form-data-with-multer)
  - [Resizing and storing images with sharp](#resizing-and-storing-images-with-sharp)
  - [Creating an image handling middleware](#creating-an-image-handling-middleware)
  - [Serving images](#serving-images)
- [**5. Deployment and Running in Production**](#5-deployment-and-running-in-production) (7 videos)
  - [Tuning Express performance: NODE_ENV and compression](#tuning-express-performance-node_env-and-compression)
  - [Tuning Express performance: Further measures](#tuning-express-performance-further-measures)
  - [Add logging](#add-logging)
  - [Using the Node.js cluster module](#using-the-nodejs-cluster-module)
  - [Securing an Express application](#securing-an-express-application)
  - [Deployment and operation with PM2](#deployment-and-operation-with-pm2)
  - [Running behind a web server](#running-behind-a-web-server)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Tackle any project with Express](https://www.linkedin.com/learning/advanced-express/tackle-any-project-with-express?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-express/tackle-any-project-with-express?u=76281980&t=0)** - [Instructor] Today, [[Node.js]] is one of the major platforms for the web.
>
> **[0:04](https://www.linkedin.com/learning/advanced-express/tackle-any-project-with-express?u=76281980&t=4)** Enterprises like Uber and Netflix, Autodesk, Intuit and even the NASA are using I for important parts of their business.
>
> **[0:11](https://www.linkedin.com/learning/advanced-express/tackle-any-project-with-express?u=76281980&t=11)** With over five million weekly downloads, Express is the most commonly used web framework to use with Node.js.
>
> **[0:19](https://www.linkedin.com/learning/advanced-express/tackle-any-project-with-express?u=76281980&t=19)** In my previous course I covered how to build a simple website with Express.
>
> **[0:23](https://www.linkedin.com/learning/advanced-express/tackle-any-project-with-express?u=76281980&t=23)** In this course, we will now cover everything you need to know to tackling more complex challenges that are very common in today's website projects.
>
> **[0:32](https://www.linkedin.com/learning/advanced-express/tackle-any-project-with-express?u=76281980&t=32)** We will cover how to wire a database into Express, how to build out the proper user authentication, authorization, how to process, upload and serve images, optimizing your projects for performance, security and the actual deployment to a server.
>
> **[0:52](https://www.linkedin.com/learning/advanced-express/tackle-any-project-with-express?u=76281980&t=52)** This course also contains a complete startup project that we will work on throughout the course.
>
> **[0:58](https://www.linkedin.com/learning/advanced-express/tackle-any-project-with-express?u=76281980&t=58)** I'm Daniel Khan.
>
> **[0:59](https://www.linkedin.com/learning/advanced-express/tackle-any-project-with-express?u=76281980&t=59)** For more than 17 years, I've been working as developer in architecting tech.
>
> **[1:04](https://www.linkedin.com/learning/advanced-express/tackle-any-project-with-express?u=76281980&t=64)** Try me now on my [[LinkedIn]] Learning course on building an advanced website with Express, so let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (2), [[LinkedIn]] (1)
> **File Paths:** node.js (2)
> **CLI Commands:** node (2)
> **Env Vars:** nasa (1)
> **Speakers:** - [instructor] (1)

#### [What you should know](https://www.linkedin.com/learning/advanced-express/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-express/what-you-should-know?u=76281980&t=0)** - [Instructor] This course is not a beginner's course.
>
> **[0:02](https://www.linkedin.com/learning/advanced-express/what-you-should-know?u=76281980&t=2)** If you're just getting started with Express, I recommend you my course Building a Website with [[Node.js]] and Express from the library.
>
> **[0:10](https://www.linkedin.com/learning/advanced-express/what-you-should-know?u=76281980&t=10)** This course here builds on what we've learned there.
>
> **[0:14](https://www.linkedin.com/learning/advanced-express/what-you-should-know?u=76281980&t=14)** To get the most out of this course, you should have knowledge in [[JavaScript]], of course, and there you should know variables, functions, and callbacks, at the very least.
>
> **[0:25](https://www.linkedin.com/learning/advanced-express/what-you-should-know?u=76281980&t=25)** You should also know and understand ES6 syntax.
>
> **[0:29](https://www.linkedin.com/learning/advanced-express/what-you-should-know?u=76281980&t=29)** This means you should know classes, you should understand arrow functions, the spread syntax, and object destructuring because I'm using it throughout the videos.
>
> **[0:41](https://www.linkedin.com/learning/advanced-express/what-you-should-know?u=76281980&t=41)** And, of course, you should also understand promises and async/await.
>
> **[0:47](https://www.linkedin.com/learning/advanced-express/what-you-should-know?u=76281980&t=47)** You should, at least, have basic Node.js knowledge.
>
> **[0:49](https://www.linkedin.com/learning/advanced-express/what-you-should-know?u=76281980&t=49)** You should know how to install Node.js, how to use [[npm]], and how to run an application.
>
> **[0:57](https://www.linkedin.com/learning/advanced-express/what-you-should-know?u=76281980&t=57)** You should have intermediate knowledge in Express.
>
> **[1:00](https://www.linkedin.com/learning/advanced-express/what-you-should-know?u=76281980&t=60)** This means you should know how HTTP works, how to set up an Express project, how the request lifecycle works, and how [[Routing]] and middlewares work.
>
> **[1:12](https://www.linkedin.com/learning/advanced-express/what-you-should-know?u=76281980&t=72)** As I said, this is all covered in the course Building a Website with Node.js and Express.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (4), [[JavaScript]] (1), [[npm]] (1), [[Routing]] (1)
> **CLI Commands:** node (4), npm (1)
> **File Paths:** node.js (4)
> **Prerequisites:** getting started (1), install (1), set up (1)
> **Env Vars:** es6 (1), http (1)
> **Speakers:** - [instructor] (1)

#### [Get your tools ready](https://www.linkedin.com/learning/advanced-express/get-your-tools-ready?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-express/get-your-tools-ready?u=76281980&t=0)** - [Instructor] Before we really get started, let's make sure that you have all the tools needed on your machine.
>
> **[0:06](https://www.linkedin.com/learning/advanced-express/get-your-tools-ready?u=76281980&t=6)** First, let's install an editor.
>
> **[0:08](https://www.linkedin.com/learning/advanced-express/get-your-tools-ready?u=76281980&t=8)** In this course, I will use Visual Studio Code.
>
> **[0:11](https://www.linkedin.com/learning/advanced-express/get-your-tools-ready?u=76281980&t=11)** It's free and it comes with great [[Node.js]] support out of the box.
>
> **[0:15](https://www.linkedin.com/learning/advanced-express/get-your-tools-ready?u=76281980&t=15)** I highly recommend that you use it as well, at least for this course.
>
> **[0:19](https://www.linkedin.com/learning/advanced-express/get-your-tools-ready?u=76281980&t=19)** After installing it, you can open it right away and it will present you with a welcome screen.
>
> **[0:26](https://www.linkedin.com/learning/advanced-express/get-your-tools-ready?u=76281980&t=26)** Visual Studio Code comes with an integrated terminal that lets you run shell commands.
>
> **[0:30](https://www.linkedin.com/learning/advanced-express/get-your-tools-ready?u=76281980&t=30)** Let's open it by selecting View, Terminal.
>
> **[0:35](https://www.linkedin.com/learning/advanced-express/get-your-tools-ready?u=76281980&t=35)** And there, now let's check if we have the right version of Node.js installed.
>
> **[0:40](https://www.linkedin.com/learning/advanced-express/get-your-tools-ready?u=76281980&t=40)** You see that I'm having 10.14.1 installed, which is the currently long-term supported version of Node.js.
>
> **[0:47](https://www.linkedin.com/learning/advanced-express/get-your-tools-ready?u=76281980&t=47)** If you haven't Node.js installed yet, just head over to the Node.js website and install the currently long-term supported version there.
>
> **[0:56](https://www.linkedin.com/learning/advanced-express/get-your-tools-ready?u=76281980&t=56)** Let's also check the version of [[npm]].
>
> **[1:00](https://www.linkedin.com/learning/advanced-express/get-your-tools-ready?u=76281980&t=60)** We see that we have 6.4.1 installed right now, and we can use NPM to update itself, so let's make sure that we have the latest version of NPM in place, and for that, I run sudo because I'm on a Mac and I need elevated privileges.
>
> **[1:16](https://www.linkedin.com/learning/advanced-express/get-your-tools-ready?u=76281980&t=76)** NPM install -g for globally, npm@latest.
>
> **[1:27](https://www.linkedin.com/learning/advanced-express/get-your-tools-ready?u=76281980&t=87)** Okay, we see that we already have the latest version of NPM installed.
>
> **[1:32](https://www.linkedin.com/learning/advanced-express/get-your-tools-ready?u=76281980&t=92)** The sampler project we will be working on comes with a configuration for [[ESLint]].
>
> **[1:38](https://www.linkedin.com/learning/advanced-express/get-your-tools-ready?u=76281980&t=98)** There is a Visual Studio Code extension for ESLint.
>
> **[1:41](https://www.linkedin.com/learning/advanced-express/get-your-tools-ready?u=76281980&t=101)** You can install it by clicking on the extensions icon on the left menu bar and then looking for ESLint.
>
> **[1:50](https://www.linkedin.com/learning/advanced-express/get-your-tools-ready?u=76281980&t=110)** And simply installing it.
>
> **[1:55](https://www.linkedin.com/learning/advanced-express/get-your-tools-ready?u=76281980&t=115)** Now you have all the tools needed in place and we can proceed with the [[Representational State Transfer (REST)|rest]] of the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (6), [[Node.js]] (5), [[ESLint]] (3), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** npm (6), node (5), make (2), sudo (1)
> **File Paths:** node.js (5)
> **Env Vars:** npm (5)
> **Tools:** visual studio (3), terminal (2)
> **Prerequisites:** install (4)
> **Versions:** 10.14.1 (1), 6.4.1 (1)
> **Definitions:** is a  (1)

#### [Understanding and running the sample project](https://www.linkedin.com/learning/advanced-express/understanding-and-running-the-sample-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-express/understanding-and-running-the-sample-project?u=76281980&t=0)** - [Instructor] This course uses a sample project as starting point.
>
> **[0:04](https://www.linkedin.com/learning/advanced-express/understanding-and-running-the-sample-project?u=76281980&t=4)** You find it in the Exercise Files folder.
>
> **[0:07](https://www.linkedin.com/learning/advanced-express/understanding-and-running-the-sample-project?u=76281980&t=7)** Additionally, the Exercise Files folder contains sub folders with start and end states for every video that contains changes to the code.
>
> **[0:17](https://www.linkedin.com/learning/advanced-express/understanding-and-running-the-sample-project?u=76281980&t=17)** I've already opened the sample project.
>
> **[0:19](https://www.linkedin.com/learning/advanced-express/understanding-and-running-the-sample-project?u=76281980&t=19)** It's the meetup folder in the Exercise Files in Visual Studio Code and there you see it's a typical Express application with the main application file in server, app.js.
>
> **[0:35](https://www.linkedin.com/learning/advanced-express/understanding-and-running-the-sample-project?u=76281980&t=35)** Please take your time to get acquainted with the overall structure of the project but as you see, we have a routes directory that contains all the respective routes of the application and we have a config directory that contains the application configuration and this configuration is also environment aware as you see here on line six or line 17 because we distinguish between development, production and test.
>
> **[1:05](https://www.linkedin.com/learning/advanced-express/understanding-and-running-the-sample-project?u=76281980&t=65)** If we look at individual route, maybe one in users, index.js, we see that my routes are functions which means that in theory we could pass in arguments to parametrize the route.
>
> **[1:22](https://www.linkedin.com/learning/advanced-express/understanding-and-running-the-sample-project?u=76281980&t=82)** We will also do this in this course.
>
> **[1:26](https://www.linkedin.com/learning/advanced-express/understanding-and-running-the-sample-project?u=76281980&t=86)** This project also includes tests and by the end of this course, they should all pass successfully.
>
> **[1:32](https://www.linkedin.com/learning/advanced-express/understanding-and-running-the-sample-project?u=76281980&t=92)** Throughout the course, I will mention when to run individual tests to make sure that you are on track.
>
> **[1:39](https://www.linkedin.com/learning/advanced-express/understanding-and-running-the-sample-project?u=76281980&t=99)** So, let's try that out.
>
> **[1:40](https://www.linkedin.com/learning/advanced-express/understanding-and-running-the-sample-project?u=76281980&t=100)** First of all, to set up the project, we have to run [[npm]] install because this will pull down all our dependencies and now for our first test, I run npx, that's the new command executor of npm, mocha test/server/app.test.js
>
> **[2:05](https://www.linkedin.com/learning/advanced-express/understanding-and-running-the-sample-project?u=76281980&t=125)** and the fact that those four tests already passing successfully tells us that the basic setup of the application is done.
>
> **[2:14](https://www.linkedin.com/learning/advanced-express/understanding-and-running-the-sample-project?u=76281980&t=134)** We won't cover testing in this course but the tests contained should give you a very nice headstart on how to test different aspects of an Express application.
>
> **[2:25](https://www.linkedin.com/learning/advanced-express/understanding-and-running-the-sample-project?u=76281980&t=145)** You find all tests in the test folder.
>
> **[2:30](https://www.linkedin.com/learning/advanced-express/understanding-and-running-the-sample-project?u=76281980&t=150)** To run this application, we can execute npm start on the terminal but the project also contains a launch configuration for the debugger, so if you like, you can also start it up with an attached debugger and use all the debugging features like breakpoints.
>
> **[2:50](https://www.linkedin.com/learning/advanced-express/understanding-and-running-the-sample-project?u=76281980&t=170)** Let's look at the page, so I'm opening it in the browser localhost:3000.
>
> **[2:58](https://www.linkedin.com/learning/advanced-express/understanding-and-running-the-sample-project?u=76281980&t=178)** It's a conference or Meetup page and it's based on the project that I covered in my course [[Building a Website with Node.js and Express.js]].
>
> **[3:07](https://www.linkedin.com/learning/advanced-express/understanding-and-running-the-sample-project?u=76281980&t=187)** The site already contains the basic building blocks for what we're going to implement throughout the course, so if we look into Account, for instance, we already have a working route for Register.
>
> **[3:19](https://www.linkedin.com/learning/advanced-express/understanding-and-running-the-sample-project?u=76281980&t=199)** For Login, we will build out the route later but the templates are all in place already.
>
> **[3:27](https://www.linkedin.com/learning/advanced-express/understanding-and-running-the-sample-project?u=76281980&t=207)** With the sample app now up and running, we are now ready to dive right into the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (3), [[Node.js]] (1), [[Express.js]] (1)
> **CLI Commands:** npm (3), find (2), make (1), npx (1), node (1)
> **File Paths:** app.js (1), index.js (1), test/server/app.test.js (1), node.js (1), express.js (1)
> **Exercise Files:** exercise files (3)
> **Prerequisites:** set up (1), install (1), setup (1)
> **Tools:** visual studio (1), terminal (1)
> **URLs:** [localhost:3000](https://localhost:3000) (1)
> **Ports:** :3000 (1)


### 1. Know the Building Blocks and Internals of Express

[↑ Back to Table of Contents](#table-of-contents)

#### [Exploring Express components and APIs](https://www.linkedin.com/learning/advanced-express/exploring-express-components-and-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-express/exploring-express-components-and-apis?u=76281980&t=0)** - [Narrator] In this video, we will explore the basic building blocks of Express.
>
> **[0:04](https://www.linkedin.com/learning/advanced-express/exploring-express-components-and-apis?u=76281980&t=4)** Here's a very simple Hello World sample.
>
> **[0:06](https://www.linkedin.com/learning/advanced-express/exploring-express-components-and-apis?u=76281980&t=6)** You don't need to have it open, just follow along with me.
>
> **[0:10](https://www.linkedin.com/learning/advanced-express/exploring-express-components-and-apis?u=76281980&t=10)** Already in this simple sample, we have almost all complements Express consists of on onscreen.
>
> **[0:16](https://www.linkedin.com/learning/advanced-express/exploring-express-components-and-apis?u=76281980&t=16)** On line one, you see Express itself.
>
> **[0:21](https://www.linkedin.com/learning/advanced-express/exploring-express-components-and-apis?u=76281980&t=21)** On line two, we are creating the application object.
>
> **[0:25](https://www.linkedin.com/learning/advanced-express/exploring-express-components-and-apis?u=76281980&t=25)** And then, on line five, on the request handler, you see the request object and the response object.
>
> **[0:34](https://www.linkedin.com/learning/advanced-express/exploring-express-components-and-apis?u=76281980&t=34)** Let's attach a debugger and step through it to understand better what Express is doing under the hood.
>
> **[0:39](https://www.linkedin.com/learning/advanced-express/exploring-express-components-and-apis?u=76281980&t=39)** For that, I will first put a breakpoint here in line two and one in line six, and I'm starting the debugger.
>
> **[0:51](https://www.linkedin.com/learning/advanced-express/exploring-express-components-and-apis?u=76281980&t=51)** And we're holding here at the breakpoint, and we see that now Express is instantiated.
>
> **[0:56](https://www.linkedin.com/learning/advanced-express/exploring-express-components-and-apis?u=76281980&t=56)** Let's step into that, and we see that create application object basically composes the whole express application, and creates the request, the response object.
>
> **[1:12](https://www.linkedin.com/learning/advanced-express/exploring-express-components-and-apis?u=76281980&t=72)** And then, it calls app.init, so let's, real quick, step further through that and into app.init and there we see that it just initializes the application with some default configuration.
>
> **[1:28](https://www.linkedin.com/learning/advanced-express/exploring-express-components-and-apis?u=76281980&t=88)** Let's step out of that again and re-return app from here.
>
> **[1:37](https://www.linkedin.com/learning/advanced-express/exploring-express-components-and-apis?u=76281980&t=97)** Next, we define run route, it's a get route, let's step into that now and here you see something that is quite interesting.
>
> **[1:45](https://www.linkedin.com/learning/advanced-express/exploring-express-components-and-apis?u=76281980&t=105)** In Express, you can use app.get also to set configuration variables.
>
> **[1:51](https://www.linkedin.com/learning/advanced-express/exploring-express-components-and-apis?u=76281980&t=111)** And, here you see how this is done so it simply looks into the arguments to distinguish between, is this a route declaration or are we just setting a configure variable?
>
> **[2:05](https://www.linkedin.com/learning/advanced-express/exploring-express-components-and-apis?u=76281980&t=125)** Then, if we scroll down a little bit, we see on line 482 how our [[Routing]] function is simply added to the list of routes of this application.
>
> **[2:17](https://www.linkedin.com/learning/advanced-express/exploring-express-components-and-apis?u=76281980&t=137)** Let's step out of that and then in the end the application simply starts to listen.
>
> **[2:25](https://www.linkedin.com/learning/advanced-express/exploring-express-components-and-apis?u=76281980&t=145)** Let's look into this app.listen real quick and we see that here we simply create a stock HTTP server, but adds the application as handler function for this server.
>
> **[2:41](https://www.linkedin.com/learning/advanced-express/exploring-express-components-and-apis?u=76281980&t=161)** Let's step out of that and let's follow along with the execution.
>
> **[2:48](https://www.linkedin.com/learning/advanced-express/exploring-express-components-and-apis?u=76281980&t=168)** Next, I will use my browser to open this page and put 3,000 and we're now in the handler for this route.
>
> **[2:56](https://www.linkedin.com/learning/advanced-express/exploring-express-components-and-apis?u=76281980&t=176)** Now, let's look a little bit into the object, into the variables we have here.
>
> **[3:02](https://www.linkedin.com/learning/advanced-express/exploring-express-components-and-apis?u=76281980&t=182)** If you look at the left side we see that we now have this request and this response object and scope.
>
> **[3:08](https://www.linkedin.com/learning/advanced-express/exploring-express-components-and-apis?u=76281980&t=188)** Each of these objects gives us a set of properties and methods to work with and they are very well documented on the Express websites.
>
> **[3:15](https://www.linkedin.com/learning/advanced-express/exploring-express-components-and-apis?u=76281980&t=195)** So, let's head over there.
>
> **[3:17](https://www.linkedin.com/learning/advanced-express/exploring-express-components-and-apis?u=76281980&t=197)** So, Express gives us the application object and the application object lets us define middlewares and routes and also contains a few helpers to set configuration data like, The FUE Engine.
>
> **[3:31](https://www.linkedin.com/learning/advanced-express/exploring-express-components-and-apis?u=76281980&t=211)** The request object is what we get in our middleware function and it holds information about the request we are currently processing.
>
> **[3:40](https://www.linkedin.com/learning/advanced-express/exploring-express-components-and-apis?u=76281980&t=220)** It contains mostly properties, but also a few messages to inquiry information about the request.
>
> **[3:47](https://www.linkedin.com/learning/advanced-express/exploring-express-components-and-apis?u=76281980&t=227)** The response object is what we use to send to response.
>
> **[3:50](https://www.linkedin.com/learning/advanced-express/exploring-express-components-and-apis?u=76281980&t=230)** Naturally, it contains a variety of methods from template rendering to sending a chasten response.
>
> **[3:57](https://www.linkedin.com/learning/advanced-express/exploring-express-components-and-apis?u=76281980&t=237)** The API also describes a route object that we get where express.router and it contains a subset of methods the application object gives us.
>
> **[4:09](https://www.linkedin.com/learning/advanced-express/exploring-express-components-and-apis?u=76281980&t=249)** This is all Express consists of, no mater if the application is large or small.
>
> **[4:14](https://www.linkedin.com/learning/advanced-express/exploring-express-components-and-apis?u=76281980&t=254)** Most of its power comes from being extendable via middlewares.
>
> **[4:18](https://www.linkedin.com/learning/advanced-express/exploring-express-components-and-apis?u=76281980&t=258)** In the next video, we will cover a few popular ones.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (1)
> **Env Vars:** http (1), fue (1), api (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** template (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [narrator] (1)

#### [Important Express middleware](https://www.linkedin.com/learning/advanced-express/important-express-middleware?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-express/important-express-middleware?u=76281980&t=0)** - [Instructor] Express gets most of its power through middlewares that can be plugged into the request live site to modify data or change the flow of an application.
>
> **[0:09](https://www.linkedin.com/learning/advanced-express/important-express-middleware?u=76281980&t=9)** Let's look at a few popular ones.
>
> **[0:12](https://www.linkedin.com/learning/advanced-express/important-express-middleware?u=76281980&t=12)** They're also documented on the Express website.
>
> **[0:15](https://www.linkedin.com/learning/advanced-express/important-express-middleware?u=76281980&t=15)** Some are provided by the Express team, some are projects on its own.
>
> **[0:20](https://www.linkedin.com/learning/advanced-express/important-express-middleware?u=76281980&t=20)** First of all, we have body-parser.
>
> **[0:22](https://www.linkedin.com/learning/advanced-express/important-express-middleware?u=76281980&t=22)** We need it to parse form data into request.body.
>
> **[0:26](https://www.linkedin.com/learning/advanced-express/important-express-middleware?u=76281980&t=26)** Any project that has a regular form in it, needs that.
>
> **[0:31](https://www.linkedin.com/learning/advanced-express/important-express-middleware?u=76281980&t=31)** Then we have compression and we will cover that in the last chapter.
>
> **[0:35](https://www.linkedin.com/learning/advanced-express/important-express-middleware?u=76281980&t=35)** It lets us compress HTTP responses.
>
> **[0:39](https://www.linkedin.com/learning/advanced-express/important-express-middleware?u=76281980&t=39)** We have cookie-parser, we also will cover that in this course.
>
> **[0:43](https://www.linkedin.com/learning/advanced-express/important-express-middleware?u=76281980&t=43)** It's needed to parse cookie information from request headers.
>
> **[0:48](https://www.linkedin.com/learning/advanced-express/important-express-middleware?u=76281980&t=48)** Then we have multer.
>
> **[0:49](https://www.linkedin.com/learning/advanced-express/important-express-middleware?u=76281980&t=49)** We will cover that as well.
>
> **[0:51](https://www.linkedin.com/learning/advanced-express/important-express-middleware?u=76281980&t=51)** Multer lets you handle multipart form data, and you always have that when a form contains a file.
>
> **[0:58](https://www.linkedin.com/learning/advanced-express/important-express-middleware?u=76281980&t=58)** Serve-favicon is also very frequently used to serve favicons.
>
> **[1:02](https://www.linkedin.com/learning/advanced-express/important-express-middleware?u=76281980&t=62)** Session, we will cover that in this course, as well.
>
> **[1:05](https://www.linkedin.com/learning/advanced-express/important-express-middleware?u=76281980&t=65)** It is, of course, important for all the session management in Express.
>
> **[1:10](https://www.linkedin.com/learning/advanced-express/important-express-middleware?u=76281980&t=70)** Helmet, we will cover in the last chapter.
>
> **[1:12](https://www.linkedin.com/learning/advanced-express/important-express-middleware?u=76281980&t=72)** It helps you to secure Express applications.
>
> **[1:17](https://www.linkedin.com/learning/advanced-express/important-express-middleware?u=76281980&t=77)** And finally passport, we will spend a lot of time with that in this course because it lets you authenticate users in Express.

> [!info]- Semantic Content
>
> **Cross-References:** in the last (2)
> **Env Vars:** http (1)
> **Speakers:** - [instructor] (1)

#### [Creating a template engine for Express](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980&t=0)** - [Narrator] In this video, I will show you to use the API function app.engine, to create the template engine.
>
> **[0:07](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980&t=7)** I'm still using my hello world sample for that.
>
> **[0:09](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980&t=9)** You don't necessarily have to code along with me.
>
> **[0:12](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980&t=12)** Just watch what I'm doing.
>
> **[0:14](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980&t=14)** Express comes with a variety of supported template engines.
>
> **[0:17](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980&t=17)** But let's assume for a moment that we want to create our own.
>
> **[0:21](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980&t=21)** Let's say, one that renders mark down to [[HTML]], how would we implement that?
>
> **[0:27](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980&t=27)** As Express is built for extensibility, adding this is actually quite easy.
>
> **[0:32](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980&t=32)** So I'm here in my index js file and now I'll write on top after application was instantiated, I will add app.engine and this takes as first argument the name of the engine and it should be md for marked down and then I create an async function the signature for app.engine tells us that this function gets a file path an options object and a callback function.
>
> **[1:11](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980&t=71)** So we now obviously have to open this file.
>
> **[1:15](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980&t=75)** For that, I bring in, const fs equals require fs.
>
> **[1:22](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980&t=82)** Because we need read file from it and I also want to create a promisify version of read file and for that I had const util equals require util.
>
> **[1:37](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980&t=97)** And a bit further down, I now add const fsreadfile equals util promisify fs.readfile.
>
> **[1:52](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980&t=112)** This will rep the read file function of no chase to return a promise.
>
> **[1:56](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980&t=116)** So that we can then use async await with it.
>
> **[2:01](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980&t=121)** Now let's head into line ten.
>
> **[2:02](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980&t=122)** We'll first add a try catch block because we need to try catch as we're using await later and if something goes wrong, we will return an error on the callback.
>
> **[2:20](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980&t=140)** And in the try block and I'll add const content equals await fsreadfile and the filepath.
>
> **[2:33](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980&t=153)** Now we have the content of the file.
>
> **[2:35](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980&t=155)** Usually in template ansions you also have some concept of placeholders that are replaced with variables.
>
> **[2:41](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980&t=161)** So let's build something like that real quick.
>
> **[2:44](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980&t=164)** So const rendered equals content and content is a buffer so we call to string on it.
>
> **[2:55](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980&t=175)** And there we will very simply just replace a headline.
>
> **[3:01](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980&t=181)** So we will use curly brackets for placeholders and we will get the past in variables where the options object and I'm looking for options headline here.
>
> **[3:19](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980&t=199)** In the end we want to return to marked down converted to HTML and for that we need a module that can transform marked down to HTML and I'm using marked for that.
>
> **[3:31](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980&t=211)** So I'm installing [[npm]] install district save marked and it bring it in.
>
> **[3:39](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980&t=219)** Const marked equals require, marked.
>
> **[3:47](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980&t=227)** And now I just have to return that.
>
> **[3:51](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980&t=231)** Return, callback, null, marked and the rendered template string.
>
> **[4:05](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980&t=245)** This should give us an HTML then.
>
> **[4:08](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980&t=248)** Now we have to tell Express to use this engine for template rendering, so I add app.set and here I'm setting the property views and the view path should be in views.
>
> **[4:27](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980&t=267)** And I'm also setting the template engine app.set, view engine and this should be md.
>
> **[4:39](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980&t=279)** Now let's change the handle function.
>
> **[4:42](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980&t=282)** So I'm doing here res send.
>
> **[4:44](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980&t=284)** Now I'm using res render and I want to render index and the headline should be, hello world.
>
> **[5:01](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980&t=301)** And now all that is left is to create this template.
>
> **[5:04](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980&t=304)** So I'm creating a folder views.
>
> **[5:07](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980&t=307)** And in here index md file, and in this index md file, I will now use this template placeholder, call it headline.
>
> **[5:20](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980&t=320)** Let's make a list.
>
> **[5:24](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980&t=324)** And use a little bit of formatting in there in there, like for bold or for italics.
>
> **[5:40](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980&t=340)** And that should be it, let's start this little application index js and I'm heading into my browser.
>
> **[5:52](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980&t=352)** And we get a rendered HTML.
>
> **[5:56](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980&t=356)** If we look into the page source, we see proper HTML.
>
> **[5:59](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980&t=359)** It's just missing the body HTML head parts and we also see that our template placeholder was replaced with hello world.
>
> **[6:08](https://www.linkedin.com/learning/advanced-express/creating-a-template-engine-for-express?u=76281980&t=368)** This is of course a very simple example of how to create a template engine but this is basically how it's done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (7), [[npm]] (1)
> **Exercise Files:** template (10)
> **Env Vars:** html (7), api (1)
> **CLI Commands:** npm (1), make (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [narrator] (1)


### 2. Use MongoDB and Mongoose to Manage Users

[↑ Back to Table of Contents](#table-of-contents)

#### [Setting up a hosted MongoDB server](https://www.linkedin.com/learning/advanced-express/setting-up-a-hosted-mongodb-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-express/setting-up-a-hosted-mongodb-server?u=76281980&t=0)** - [Instructor] On many websites, you find a form for users to register an account and set a password.
>
> **[0:05](https://www.linkedin.com/learning/advanced-express/setting-up-a-hosted-mongodb-server?u=76281980&t=5)** And in this chapter, we are going to build exactly that.
>
> **[0:09](https://www.linkedin.com/learning/advanced-express/setting-up-a-hosted-mongodb-server?u=76281980&t=9)** To store the users we will use [[MongoDB]] and for that we need access to a MongoDB server.
>
> **[0:15](https://www.linkedin.com/learning/advanced-express/setting-up-a-hosted-mongodb-server?u=76281980&t=15)** While it's easy to spin up a MongoDB server on a [[Linux]] box, it can be hard on other operating systems like [[Windows]].
>
> **[0:22](https://www.linkedin.com/learning/advanced-express/setting-up-a-hosted-mongodb-server?u=76281980&t=22)** Additionally, a production setup usually requires at least three nodes to form a cluster.
>
> **[0:28](https://www.linkedin.com/learning/advanced-express/setting-up-a-hosted-mongodb-server?u=76281980&t=28)** If you don't want to set this up, you can use a hosted solution.
>
> **[0:32](https://www.linkedin.com/learning/advanced-express/setting-up-a-hosted-mongodb-server?u=76281980&t=32)** For this course we will use MongoDB Atlas.
>
> **[0:34](https://www.linkedin.com/learning/advanced-express/setting-up-a-hosted-mongodb-server?u=76281980&t=34)** It's a hosted solution directly from the creators of MongoDB and it offers a free tier that is sufficient for our purposes.
>
> **[0:42](https://www.linkedin.com/learning/advanced-express/setting-up-a-hosted-mongodb-server?u=76281980&t=42)** So let's set this up, look up MongoDB Atlas in a search engine and then you will end up on a page like you see it here.
>
> **[0:51](https://www.linkedin.com/learning/advanced-express/setting-up-a-hosted-mongodb-server?u=76281980&t=51)** And here you will simply select get started for free and create an account.
>
> **[0:57](https://www.linkedin.com/learning/advanced-express/setting-up-a-hosted-mongodb-server?u=76281980&t=57)** I already created an account and logged in.
>
> **[1:00](https://www.linkedin.com/learning/advanced-express/setting-up-a-hosted-mongodb-server?u=76281980&t=60)** And you should find yourself then on a page like this where you can create a new cluster.
>
> **[1:07](https://www.linkedin.com/learning/advanced-express/setting-up-a-hosted-mongodb-server?u=76281980&t=67)** So I click on build a cluster and there we will create a cluster using only the free tier options.
>
> **[1:15](https://www.linkedin.com/learning/advanced-express/setting-up-a-hosted-mongodb-server?u=76281980&t=75)** We can leave everything at default and I will now click on Create cluster and we will end up on a page that tells us that the cluster is being created and this will take a while.
>
> **[1:28](https://www.linkedin.com/learning/advanced-express/setting-up-a-hosted-mongodb-server?u=76281980&t=88)** Now that it has this ready I want to create some [[Databases]] on it.
>
> **[1:32](https://www.linkedin.com/learning/advanced-express/setting-up-a-hosted-mongodb-server?u=76281980&t=92)** So I click on collections and there on create databases and I want to create a database for production.
>
> **[1:42](https://www.linkedin.com/learning/advanced-express/setting-up-a-hosted-mongodb-server?u=76281980&t=102)** So call it production and I already know that we will have a collection called users on that and then click create.
>
> **[1:52](https://www.linkedin.com/learning/advanced-express/setting-up-a-hosted-mongodb-server?u=76281980&t=112)** Additionally, I also want to create a database for test and also here I create a collection users and I will do the same for development.
>
> **[2:14](https://www.linkedin.com/learning/advanced-express/setting-up-a-hosted-mongodb-server?u=76281980&t=134)** Next, we of course also need all the credentials in the database user to collect to this cluster.
>
> **[2:20](https://www.linkedin.com/learning/advanced-express/setting-up-a-hosted-mongodb-server?u=76281980&t=140)** For that I click on clusters and then on security and first we have to whitelist our current IP so that it's allowed to even connect to this cluster.
>
> **[2:32](https://www.linkedin.com/learning/advanced-express/setting-up-a-hosted-mongodb-server?u=76281980&t=152)** So I click on IP whitelist and then add IP address and I will use my current IP address for that.
>
> **[2:41](https://www.linkedin.com/learning/advanced-express/setting-up-a-hosted-mongodb-server?u=76281980&t=161)** I click confirm.
>
> **[2:42](https://www.linkedin.com/learning/advanced-express/setting-up-a-hosted-mongodb-server?u=76281980&t=162)** And we also need a user to connect to this cluster so I click on MongoDB users and add new user and here I call this user dbUser and it will auto generate a secure password.
>
> **[3:00](https://www.linkedin.com/learning/advanced-express/setting-up-a-hosted-mongodb-server?u=76281980&t=180)** I click on show and they will copied it out now and click on add User and with this user in the clipboard, I head over into my application and there I just create a temporary file just to preserve this password there.
>
> **[3:22](https://www.linkedin.com/learning/advanced-express/setting-up-a-hosted-mongodb-server?u=76281980&t=202)** Now we need the connection string to connect to this cluster so I click on clusters and then connect, there I choose connect your application and we will use the newer connection string for zero six plus drivers.
>
> **[3:39](https://www.linkedin.com/learning/advanced-express/setting-up-a-hosted-mongodb-server?u=76281980&t=219)** So click on that, I will copy it out and I head again over into my application.
>
> **[3:47](https://www.linkedin.com/learning/advanced-express/setting-up-a-hosted-mongodb-server?u=76281980&t=227)** Paste the connection string in there and I will replace the password placeholder with the password restored before and also I will change the database name that is here mentioned in the database url here its test I will change it first to production.
>
> **[4:09](https://www.linkedin.com/learning/advanced-express/setting-up-a-hosted-mongodb-server?u=76281980&t=249)** Lets remove the r here and I copy it three times, we need production, test and development.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (7), [[Databases]] (2), [[Linux]] (1), [[Windows]] (1)
> **UI Navigation:** click on (10)
> **CLI Commands:** find (2)
> **Code Identifiers:** dbuser (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Connecting to MongoDB](https://www.linkedin.com/learning/advanced-express/connecting-to-mongodb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-express/connecting-to-mongodb?u=76281980&t=0)** - [Narrator] How do we provide the previously created credentials to our application?
>
> **[0:05](https://www.linkedin.com/learning/advanced-express/connecting-to-mongodb?u=76281980&t=5)** We need a way to work with different [[Databases]] depending on the environment.
>
> **[0:09](https://www.linkedin.com/learning/advanced-express/connecting-to-mongodb?u=76281980&t=9)** Luckily, our configuration does already support that so if we look into server config index js, we see here on line six that we have a property development.
>
> **[0:21](https://www.linkedin.com/learning/advanced-express/connecting-to-mongodb?u=76281980&t=21)** On line 17 we have a property production and if we scroll down, on line 28, we have a property test.
>
> **[0:30](https://www.linkedin.com/learning/advanced-express/connecting-to-mongodb?u=76281980&t=30)** On the other hand, we should not store credentials with our application code, especially if this is committed to some [[Version Control]] system like ki-tar.
>
> **[0:39](https://www.linkedin.com/learning/advanced-express/connecting-to-mongodb?u=76281980&t=39)** That's why I installed a module called dotenv already, to see that I'm requiring it up here on line one, and what dotenv does is it looks for fouls with the name dotenv in our project route and brings the setting in then as environment variables on process and you can see that here, for example, on line 14, we bring in process.env.DEVELOPMENT_DB_DSN.
>
> **[1:11](https://www.linkedin.com/learning/advanced-express/connecting-to-mongodb?u=76281980&t=71)** So set these variables to sample project or ID contains a file dotenv sample, and I will now go ahead and rename it to dotenv, and in there you already see the prepared properties that we want to bring in to the setup, the database collection.
>
> **[1:32](https://www.linkedin.com/learning/advanced-express/connecting-to-mongodb?u=76281980&t=92)** So I will now head over to my temp file from before, I cut out the credentials from there, and I paste them into dotenv.
>
> **[1:46](https://www.linkedin.com/learning/advanced-express/connecting-to-mongodb?u=76281980&t=106)** Let's remove the right sidebar here and I will now copy them up to the right configuration properties, so I will copy production and will paste it to the production DSN.
>
> **[2:00](https://www.linkedin.com/learning/advanced-express/connecting-to-mongodb?u=76281980&t=120)** I will copy test and copy it up here and the same also, of course, for development.
>
> **[2:09](https://www.linkedin.com/learning/advanced-express/connecting-to-mongodb?u=76281980&t=129)** We can now also remove this temp file we had before and let's real quick also look into our gitignore file.
>
> **[2:19](https://www.linkedin.com/learning/advanced-express/connecting-to-mongodb?u=76281980&t=139)** This file contains patterns for all files that should not be committed to version control, so I look into that and in line 58, you will find .env, this dotenv file will never end up, for instance, on ki-tar.
>
> **[2:36](https://www.linkedin.com/learning/advanced-express/connecting-to-mongodb?u=76281980&t=156)** Now we are ready to use the newly configured mon-ga-de-plast in our application and the project contains a test function that makes sure that all databases are reachable.
>
> **[2:47](https://www.linkedin.com/learning/advanced-express/connecting-to-mongodb?u=76281980&t=167)** You find it in test, DB, connect.
>
> **[2:51](https://www.linkedin.com/learning/advanced-express/connecting-to-mongodb?u=76281980&t=171)** Just to run this test, I will now add into the integral terminal official studio code, and run npx mocha test/db/connect and as we see,
>
> **[3:10](https://www.linkedin.com/learning/advanced-express/connecting-to-mongodb?u=76281980&t=190)** all tests are passing, which means that we can connect to [[MongoDB]] at-list properly.
>
> **[3:16](https://www.linkedin.com/learning/advanced-express/connecting-to-mongodb?u=76281980&t=196)** Again, if your IP address tends to change frequently, please make sure that you have white listed your current IP address if the connect suddenly fails.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (2), [[Version Control]] (2), [[MongoDB]] (1)
> **CLI Commands:** tar (2), find (2), npx (1), make (1)
> **Env Vars:** development_db_dsn (1), dsn (1)
> **Analogies:** for example (1), for instance (1)
> **File Paths:** process.env (1)
> **Tools:** terminal (1)
> **UI Navigation:** scroll down (1)
> **Prerequisites:** setup (1)

#### [Adding MongoDB and Mongoose to an Express project](https://www.linkedin.com/learning/advanced-express/adding-mongodb-and-mongoose-to-an-express-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-express/adding-mongodb-and-mongoose-to-an-express-project?u=76281980&t=0)** - [Instructor] With all the credentials in place, we will now make [[MongoDB]] available to Express.
>
> **[0:06](https://www.linkedin.com/learning/advanced-express/adding-mongodb-and-mongoose-to-an-express-project?u=76281980&t=6)** For that, we will use Mongoose.
>
> **[0:07](https://www.linkedin.com/learning/advanced-express/adding-mongodb-and-mongoose-to-an-express-project?u=76281980&t=7)** Mongoose is an object [[Data Modeling]] laboratory for MongoDB.
>
> **[0:11](https://www.linkedin.com/learning/advanced-express/adding-mongodb-and-mongoose-to-an-express-project?u=76281980&t=11)** It's very commonly used, lets us create schemas and makes working with Mongoose from NodeJS generally easier.
>
> **[0:18](https://www.linkedin.com/learning/advanced-express/adding-mongodb-and-mongoose-to-an-express-project?u=76281980&t=18)** On the flip side it comes with some performance overhead.
>
> **[0:21](https://www.linkedin.com/learning/advanced-express/adding-mongodb-and-mongoose-to-an-express-project?u=76281980&t=21)** So if your applications are heavy on database reads and writes and you run into performance issues, Mongoose might be an optimization target.
>
> **[0:30](https://www.linkedin.com/learning/advanced-express/adding-mongodb-and-mongoose-to-an-express-project?u=76281980&t=30)** Let's install Mongoose now, for that, I type, [[npm]] install --save and my project wrote.
>
> **[0:44](https://www.linkedin.com/learning/advanced-express/adding-mongodb-and-mongoose-to-an-express-project?u=76281980&t=44)** And I want to isolate everything that has to do with the database connection in a model on its own.
>
> **[0:50](https://www.linkedin.com/learning/advanced-express/adding-mongodb-and-mongoose-to-an-express-project?u=76281980&t=50)** For that I create a new folder in server called, lib.
>
> **[0:56](https://www.linkedin.com/learning/advanced-express/adding-mongodb-and-mongoose-to-an-express-project?u=76281980&t=56)** And in lib I create the new file, db.js and here on line one I will, add const mongoose = require('mongoose')
>
> **[1:12](https://www.linkedin.com/learning/advanced-express/adding-mongodb-and-mongoose-to-an-express-project?u=76281980&t=72)** And further down I add, module.exports and I want to export a function connect and this function is asynchronous, and takes a database connection string dsn and it will then simply call, mongoose.connect with I think even dsn as argument.
>
> **[1:42](https://www.linkedin.com/learning/advanced-express/adding-mongodb-and-mongoose-to-an-express-project?u=76281980&t=102)** Additionally I also want to add a configuration property, called useNewUrlParser because if you omit this right now you would get some, deprecation warnings when MongoDB starts up.
>
> **[1:59](https://www.linkedin.com/learning/advanced-express/adding-mongodb-and-mongoose-to-an-express-project?u=76281980&t=119)** So I want to write that.
>
> **[2:01](https://www.linkedin.com/learning/advanced-express/adding-mongodb-and-mongoose-to-an-express-project?u=76281980&t=121)** So I add useNewUrlParser is true.
>
> **[2:08](https://www.linkedin.com/learning/advanced-express/adding-mongodb-and-mongoose-to-an-express-project?u=76281980&t=128)** Mongoose is smart enough to maintain a global database connection.
>
> **[2:12](https://www.linkedin.com/learning/advanced-express/adding-mongodb-and-mongoose-to-an-express-project?u=76281980&t=132)** So as soon as we connected to the database once, we don't have to pass the connection object around.
>
> **[2:18](https://www.linkedin.com/learning/advanced-express/adding-mongodb-and-mongoose-to-an-express-project?u=76281980&t=138)** Given that it would theoretically not matter where we create the database connection.
>
> **[2:24](https://www.linkedin.com/learning/advanced-express/adding-mongodb-and-mongoose-to-an-express-project?u=76281980&t=144)** I will create it in, bin www which is our main startup script.
>
> **[2:31](https://www.linkedin.com/learning/advanced-express/adding-mongodb-and-mongoose-to-an-express-project?u=76281980&t=151)** I do this because if we scroll down here on line 42, we see that we are calling server.listen which makes the application accept new HTTP requests.
>
> **[2:44](https://www.linkedin.com/learning/advanced-express/adding-mongodb-and-mongoose-to-an-express-project?u=76281980&t=164)** And I want to make sure that the database connection, is already set up before the application accepts requests.
>
> **[2:54](https://www.linkedin.com/learning/advanced-express/adding-mongodb-and-mongoose-to-an-express-project?u=76281980&t=174)** So for that I will now up here after app required, the application I will add on line nine, const db = require('../server/lib/db')
>
> **[3:14](https://www.linkedin.com/learning/advanced-express/adding-mongodb-and-mongoose-to-an-express-project?u=76281980&t=194)** next I will add back to line 42.
>
> **[3:18](https://www.linkedin.com/learning/advanced-express/adding-mongodb-and-mongoose-to-an-express-project?u=76281980&t=198)** And there I will now add, db.connect(config.database.dsn)
>
> **[3:27](https://www.linkedin.com/learning/advanced-express/adding-mongodb-and-mongoose-to-an-express-project?u=76281980&t=207)** because we already have the configuration object in place inside this current file and then I call .then.
>
> **[3:37](https://www.linkedin.com/learning/advanced-express/adding-mongodb-and-mongoose-to-an-express-project?u=76281980&t=217)** So if the connection was established I will now, first log out, console.log('Connected to MongoDB')
>
> **[3:51](https://www.linkedin.com/learning/advanced-express/adding-mongodb-and-mongoose-to-an-express-project?u=76281980&t=231)** and next I will start listening on the HTTP port, means accepting new requests and I also want to handle errors and for that I add .catch((err) and if an error occurs I will, simply console.error
>
> **[4:17](https://www.linkedin.com/learning/advanced-express/adding-mongodb-and-mongoose-to-an-express-project?u=76281980&t=257)** means letting the user know what went wrong.
>
> **[4:23](https://www.linkedin.com/learning/advanced-express/adding-mongodb-and-mongoose-to-an-express-project?u=76281980&t=263)** For now we can ignore those screen warning indicators.
>
> **[4:27](https://www.linkedin.com/learning/advanced-express/adding-mongodb-and-mongoose-to-an-express-project?u=76281980&t=267)** We will take care of that later in this course.
>
> **[4:32](https://www.linkedin.com/learning/advanced-express/adding-mongodb-and-mongoose-to-an-express-project?u=76281980&t=272)** Now let's try this out by starting the application.
>
> **[4:35](https://www.linkedin.com/learning/advanced-express/adding-mongodb-and-mongoose-to-an-express-project?u=76281980&t=275)** So I run, npm start and as you see we get connected to MongoDB first and this is then followed by the information that the servers listening.
>
> **[4:46](https://www.linkedin.com/learning/advanced-express/adding-mongodb-and-mongoose-to-an-express-project?u=76281980&t=286)** This means we won't accept requests, unless the database is already setup and in place.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (5), [[npm]] (2), [[Data Modeling]] (1)
> **CLI Commands:** make (2), npm (2)
> **Prerequisites:** install (2), set up (1), setup (1)
> **Code Identifiers:** usenewurlparser (2)
> **Env Vars:** http (2)
> **File Paths:** db.js (1)
> **Cross-References:** later in (1)
> **UI Navigation:** scroll down (1)

#### [Creating a user schema for Mongoose](https://www.linkedin.com/learning/advanced-express/creating-a-user-schema-for-mongoose?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-express/creating-a-user-schema-for-mongoose?u=76281980&t=0)** - Mongoose uses schemas to define the structure and data types within a document.
>
> **[0:05](https://www.linkedin.com/learning/advanced-express/creating-a-user-schema-for-mongoose?u=76281980&t=5)** To create and manipulate data within a defined schema, Mongoose gives you a the concept of models.
>
> **[0:12](https://www.linkedin.com/learning/advanced-express/creating-a-user-schema-for-mongoose?u=76281980&t=12)** A model is the programming interface that lets you create and manipulate data based on the schema.
>
> **[0:19](https://www.linkedin.com/learning/advanced-express/creating-a-user-schema-for-mongoose?u=76281980&t=19)** We will now create a schema that stores users.
>
> **[0:21](https://www.linkedin.com/learning/advanced-express/creating-a-user-schema-for-mongoose?u=76281980&t=21)** For that I will first create a new folder.
>
> **[0:27](https://www.linkedin.com/learning/advanced-express/creating-a-user-schema-for-mongoose?u=76281980&t=27)** "Models inside server" and inside that folder, I will create a new file "UserModel.js".
>
> **[0:38](https://www.linkedin.com/learning/advanced-express/creating-a-user-schema-for-mongoose?u=76281980&t=38)** On top of this file I will bring in mongoose because mongoose require mongoose
>
> **[0:50](https://www.linkedin.com/learning/advanced-express/creating-a-user-schema-for-mongoose?u=76281980&t=50)** and we also want to add some functionality to validate the data and validate the email address is a solved problem so we will install a module for that.
>
> **[1:00](https://www.linkedin.com/learning/advanced-express/creating-a-user-schema-for-mongoose?u=76281980&t=60)** So in the terminal I run [[npm]] install --save
>
> **[1:09](https://www.linkedin.com/learning/advanced-express/creating-a-user-schema-for-mongoose?u=76281980&t=69)** enter module is called email-validator and while this is running let's bring it in email validator=require
>
> **[1:25](https://www.linkedin.com/learning/advanced-express/creating-a-user-schema-for-mongoose?u=76281980&t=85)** Email-validator Now let's start creating the actual user schema For that add const UserSchema = mongoose.Schema (); first argument which is an object that contains the data definition for this module.
>
> **[1:53](https://www.linkedin.com/learning/advanced-express/creating-a-user-schema-for-mongoose?u=76281980&t=113)** So if we want to store users, first of all a user has a username and this username should be from type string.
>
> **[2:03](https://www.linkedin.com/learning/advanced-express/creating-a-user-schema-for-mongoose?u=76281980&t=123)** It should be required so we won't except users without username.
>
> **[2:09](https://www.linkedin.com/learning/advanced-express/creating-a-user-schema-for-mongoose?u=76281980&t=129)** We will trim the included data to remove trailing spaces or white spaces We want usernames to be unique so I add index unique true and
>
> **[2:28](https://www.linkedin.com/learning/advanced-express/creating-a-user-schema-for-mongoose?u=76281980&t=148)** the min length for any username should be 3.
>
> **[2:36](https://www.linkedin.com/learning/advanced-express/creating-a-user-schema-for-mongoose?u=76281980&t=156)** We now see here this arrow indicators so it is complaining that the indents are wrong.
>
> **[2:43](https://www.linkedin.com/learning/advanced-express/creating-a-user-schema-for-mongoose?u=76281980&t=163)** If this happens just click on the bottom bar on spaces and select indent using spaces.
>
> **[2:52](https://www.linkedin.com/learning/advanced-express/creating-a-user-schema-for-mongoose?u=76281980&t=172)** And then just 2 because that's the default of our configuration and then we can alter them and it's fixed.
>
> **[3:02](https://www.linkedin.com/learning/advanced-express/creating-a-user-schema-for-mongoose?u=76281980&t=182)** Next we will add a property for email because every user should also have an email address.
>
> **[3:10](https://www.linkedin.com/learning/advanced-express/creating-a-user-schema-for-mongoose?u=76281980&t=190)** For that I can basically copy the configuration for the username and modify that and so it is still a string.
>
> **[3:16](https://www.linkedin.com/learning/advanced-express/creating-a-user-schema-for-mongoose?u=76281980&t=196)** It should be required, it should be trimmed.
>
> **[3:20](https://www.linkedin.com/learning/advanced-express/creating-a-user-schema-for-mongoose?u=76281980&t=200)** Additionally, it should also be lowercase because email addresses are always case insensitive.
>
> **[3:28](https://www.linkedin.com/learning/advanced-express/creating-a-user-schema-for-mongoose?u=76281980&t=208)** We don't need a minlength, but what we want to do now is we want to validate this email address so I add validate and I can define the validator function here.
>
> **[3:40](https://www.linkedin.com/learning/advanced-express/creating-a-user-schema-for-mongoose?u=76281980&t=220)** So I add validator and we use this email validator module that we used before and there we pass in the function validate.
>
> **[3:55](https://www.linkedin.com/learning/advanced-express/creating-a-user-schema-for-mongoose?u=76281980&t=235)** If the email address is wrong then we will give the user a message which should be ${props.value} is not a valid email address.
>
> **[4:24](https://www.linkedin.com/learning/advanced-express/creating-a-user-schema-for-mongoose?u=76281980&t=264)** Next users should also have passwords so add a new property password and I will again copy over everything we have here for the username.
>
> **[4:41](https://www.linkedin.com/learning/advanced-express/creating-a-user-schema-for-mongoose?u=76281980&t=281)** It's string, it's required, it should be trimmed and the minlength should be 8 in case of a password.
>
> **[4:53](https://www.linkedin.com/learning/advanced-express/creating-a-user-schema-for-mongoose?u=76281980&t=293)** In the end, I also want mongoose to automatically create time stamps for each document.
>
> **[4:59](https://www.linkedin.com/learning/advanced-express/creating-a-user-schema-for-mongoose?u=76281980&t=299)** The second argument I add now the configuration time stamps, true so that's a configuration option that makes mongoose create and add and updated time stamp for each document.
>
> **[5:16](https://www.linkedin.com/learning/advanced-express/creating-a-user-schema-for-mongoose?u=76281980&t=316)** And in the end add module.exports =mongoose.model('User') and I want
>
> **[5:35](https://www.linkedin.com/learning/advanced-express/creating-a-user-schema-for-mongoose?u=76281980&t=335)** to use userschema so the model is called user and uses the userschema.
>
> **[5:43](https://www.linkedin.com/learning/advanced-express/creating-a-user-schema-for-mongoose?u=76281980&t=343)** So let's try that out for that I already created the test so I simply run npx mocha test/server/models/UserModel.test.js
>
> **[5:59](https://www.linkedin.com/learning/advanced-express/creating-a-user-schema-for-mongoose?u=76281980&t=359)** and we see that it runs through so what did we test here?
>
> **[6:04](https://www.linkedin.com/learning/advanced-express/creating-a-user-schema-for-mongoose?u=76281980&t=364)** We tested if we can create a user, if user with a too short username is rejected, if a too short password is rejected, if an invalid email format is rejected, and that a user that was created is also findable in the database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (1)
> **Definitions:** is called (2), is a  (1), is an  (1)
> **File Paths:** usermodel.js (1), test/server/models/usermodel.test.js (1)
> **CLI Commands:** npm (1), npx (1)
> **Prerequisites:** install (2)
> **Tools:** terminal (1)
> **UI Navigation:** click on (1)
> **Speakers:** - mongoose (1)

#### [Using bcrypt to hash and validate passwords](https://www.linkedin.com/learning/advanced-express/using-bcrypt-to-hash-and-validate-passwords?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-express/using-bcrypt-to-hash-and-validate-passwords?u=76281980&t=0)** - [Instructor] It's a very bad practice to store password in plaintext because if your data gets compromised, the intruder will gain access to all passwords as well.
>
> **[0:09](https://www.linkedin.com/learning/advanced-express/using-bcrypt-to-hash-and-validate-passwords?u=76281980&t=9)** As users tend to reuse passwords in different places, this would cause a huge security threat.
>
> **[0:15](https://www.linkedin.com/learning/advanced-express/using-bcrypt-to-hash-and-validate-passwords?u=76281980&t=15)** This is why we will now add a function that will automatically hash any password before it gets stored into the database.
>
> **[0:23](https://www.linkedin.com/learning/advanced-express/using-bcrypt-to-hash-and-validate-passwords?u=76281980&t=23)** We will use bcrypt for that.
>
> **[0:25](https://www.linkedin.com/learning/advanced-express/using-bcrypt-to-hash-and-validate-passwords?u=76281980&t=25)** It's a hashing function dedicated for passwords.
>
> **[0:29](https://www.linkedin.com/learning/advanced-express/using-bcrypt-to-hash-and-validate-passwords?u=76281980&t=29)** bcrypt takes two input argument, the password and the number of hashing rounds we want to perform.
>
> **[0:36](https://www.linkedin.com/learning/advanced-express/using-bcrypt-to-hash-and-validate-passwords?u=76281980&t=36)** The more rounds you use, the harder it is to use brute force to get back to the original password.
>
> **[0:43](https://www.linkedin.com/learning/advanced-express/using-bcrypt-to-hash-and-validate-passwords?u=76281980&t=43)** bcrypt gives us a hash that consists of a version information, the number of rounds that have been used, the salt that has been used, and the actual hash.
>
> **[0:55](https://www.linkedin.com/learning/advanced-express/using-bcrypt-to-hash-and-validate-passwords?u=76281980&t=55)** Now we have a hash that we can store in the database, but how do we find out if a given password is correct?
>
> **[1:02](https://www.linkedin.com/learning/advanced-express/using-bcrypt-to-hash-and-validate-passwords?u=76281980&t=62)** Luckily, bcrypt is deterministic.
>
> **[1:05](https://www.linkedin.com/learning/advanced-express/using-bcrypt-to-hash-and-validate-passwords?u=76281980&t=65)** This means that, given the same input arguments, it will always end up with the same hash.
>
> **[1:11](https://www.linkedin.com/learning/advanced-express/using-bcrypt-to-hash-and-validate-passwords?u=76281980&t=71)** It also provides a compare function with linear execution time to prevent timing attacks.
>
> **[1:17](https://www.linkedin.com/learning/advanced-express/using-bcrypt-to-hash-and-validate-passwords?u=76281980&t=77)** These are attacks that use the execution time after comparison to guess how close a given password is to the real one.
>
> **[1:25](https://www.linkedin.com/learning/advanced-express/using-bcrypt-to-hash-and-validate-passwords?u=76281980&t=85)** If you want to learn more about how bcrypt works, please use the link shown below.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Definitions:** means that (1)
> **Best Practices:** bad practice (1)
> **Speakers:** - [instructor] (1)

#### [Adding password encryption and validation to a Mongoose model](https://www.linkedin.com/learning/advanced-express/adding-password-encryption-and-validation-to-a-mongoose-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-express/adding-password-encryption-and-validation-to-a-mongoose-model?u=76281980&t=0)** - [Instructor] Now that we know a little bit about the theory of password encryption, let's implement it real quick in our model.
>
> **[0:07](https://www.linkedin.com/learning/advanced-express/adding-password-encryption-and-validation-to-a-mongoose-model?u=76281980&t=7)** So I open server models, UserModel.js, and first of all, I want to install bcrypt, so I run [[npm]] install dash dash save bcrypt.
>
> **[0:22](https://www.linkedin.com/learning/advanced-express/adding-password-encryption-and-validation-to-a-mongoose-model?u=76281980&t=22)** Of course I also have to require it, so add const bcrypt equals require bcrypt.
>
> **[0:36](https://www.linkedin.com/learning/advanced-express/adding-password-encryption-and-validation-to-a-mongoose-model?u=76281980&t=36)** You also want to add a constant that holds the number of salt rounds, so add salt underscore rounds equals 12.
>
> **[0:48](https://www.linkedin.com/learning/advanced-express/adding-password-encryption-and-validation-to-a-mongoose-model?u=76281980&t=48)** Next, after the schema was defined, I will now implement a so-called presave hook for Mongoose, so I add UserSchema dot pre save, so this is a function that will run every save for document, and there I add async function.
>
> **[1:10](https://www.linkedin.com/learning/advanced-express/adding-password-encryption-and-validation-to-a-mongoose-model?u=76281980&t=70)** We cannot use fat arrow syntax here because we have to use this in the function then and this refers then to the actual object.
>
> **[1:22](https://www.linkedin.com/learning/advanced-express/adding-password-encryption-and-validation-to-a-mongoose-model?u=76281980&t=82)** I give the function name, preSave, and this gets next callback, and in there I will now add const user equals, and this is now the usage of this, so user refers now to the actual to be saved object.
>
> **[1:46](https://www.linkedin.com/learning/advanced-express/adding-password-encryption-and-validation-to-a-mongoose-model?u=76281980&t=106)** And I don't want to do anything with the password if it was modified, so I add if not user dot isModified it's a property that Mongoose gives us, and I want to put a password here, and if there was no change to the password, I will simply bale out of the function by calling next.
>
> **[2:14](https://www.linkedin.com/learning/advanced-express/adding-password-encryption-and-validation-to-a-mongoose-model?u=76281980&t=134)** In any other case, I add a try catch block, and in there I add const hash equals await bcrypt and the hash function on delivery, and we use user dot password.
>
> **[2:35](https://www.linkedin.com/learning/advanced-express/adding-password-encryption-and-validation-to-a-mongoose-model?u=76281980&t=155)** So that's the password on the user object that is to be saved, and a second argument.
>
> **[2:41](https://www.linkedin.com/learning/advanced-express/adding-password-encryption-and-validation-to-a-mongoose-model?u=76281980&t=161)** I add the salt rounds.
>
> **[2:45](https://www.linkedin.com/learning/advanced-express/adding-password-encryption-and-validation-to-a-mongoose-model?u=76281980&t=165)** Now we await the creation of the hash.
>
> **[2:48](https://www.linkedin.com/learning/advanced-express/adding-password-encryption-and-validation-to-a-mongoose-model?u=76281980&t=168)** When it was created, I add user dot password equals this hash.
>
> **[2:57](https://www.linkedin.com/learning/advanced-express/adding-password-encryption-and-validation-to-a-mongoose-model?u=76281980&t=177)** And don't forget again to call to return with the next callback, otherwise this function will get stuck, and on the catch block, we will return next with the error.
>
> **[3:13](https://www.linkedin.com/learning/advanced-express/adding-password-encryption-and-validation-to-a-mongoose-model?u=76281980&t=193)** Now we also want to implement the compare function we talked about before, and this compare function is rather CPU-heavy, and there is a sync and async version.
>
> **[3:24](https://www.linkedin.com/learning/advanced-express/adding-password-encryption-and-validation-to-a-mongoose-model?u=76281980&t=204)** We will use the async version because the sync one would block the input considerably when there are many logins, and this can really impact the performance of an application.
>
> **[3:35](https://www.linkedin.com/learning/advanced-express/adding-password-encryption-and-validation-to-a-mongoose-model?u=76281980&t=215)** So I will now add, and here I'm utilizing now Mongoose way to create instance method, so I add UserSchema dot methods.
>
> **[3:49](https://www.linkedin.com/learning/advanced-express/adding-password-encryption-and-validation-to-a-mongoose-model?u=76281980&t=229)** So this is then a method that will be available on every document that comes from the database.
>
> **[3:57](https://www.linkedin.com/learning/advanced-express/adding-password-encryption-and-validation-to-a-mongoose-model?u=76281980&t=237)** comparePassword equals async function comparePassword.
>
> **[4:08](https://www.linkedin.com/learning/advanced-express/adding-password-encryption-and-validation-to-a-mongoose-model?u=76281980&t=248)** Again, no fat arrow syntax here for us because we need this in there, and this argument, comparePassword, gets the candidate password, and it will return bcrypt dot compare, the candidate with the password that is on the user object right now.
>
> **[4:43](https://www.linkedin.com/learning/advanced-express/adding-password-encryption-and-validation-to-a-mongoose-model?u=76281980&t=283)** Okay, let's try this out.
>
> **[4:45](https://www.linkedin.com/learning/advanced-express/adding-password-encryption-and-validation-to-a-mongoose-model?u=76281980&t=285)** So I'm running NPX mocha test server models UserModel test.
>
> **[4:55](https://www.linkedin.com/learning/advanced-express/adding-password-encryption-and-validation-to-a-mongoose-model?u=76281980&t=295)** Now I'm using UserModel dot test dot password dot JS.
>
> **[4:59](https://www.linkedin.com/learning/advanced-express/adding-password-encryption-and-validation-to-a-mongoose-model?u=76281980&t=299)** Let's run that.
>
> **[5:01](https://www.linkedin.com/learning/advanced-express/adding-password-encryption-and-validation-to-a-mongoose-model?u=76281980&t=301)** And we see that all our tests are passed, so we have now a working password encryption and comparison function implemented in our model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (1)
> **Code Identifiers:** comparepassword (3), presave (1), ismodified (1)
> **Env Vars:** npm (1), cpu (1), npx (1)
> **CLI Commands:** npm (1), npx (1)
> **Definitions:** is a  (2)
> **Prerequisites:** install (2)
> **File Paths:** usermodel.js (1)
> **Cross-References:** we talked about (1)

#### [Creating a user registration route](https://www.linkedin.com/learning/advanced-express/creating-a-user-registration-route?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-express/creating-a-user-registration-route?u=76281980&t=0)** - [Instructor] Now after creating the user schema model, the next step is creating a route to let users register themselves.
>
> **[0:07](https://www.linkedin.com/learning/advanced-express/creating-a-user-registration-route?u=76281980&t=7)** The form for that is already provided with the sample project, simply head to Account, Register, and you should get that form.
>
> **[0:16](https://www.linkedin.com/learning/advanced-express/creating-a-user-registration-route?u=76281980&t=16)** Let's review the [[HTML]], we had to form a little bit so I'm using inspect here and you see the form does a post request to slash users slash registration and we will now implement exactly that prompt.
>
> **[0:35](https://www.linkedin.com/learning/advanced-express/creating-a-user-registration-route?u=76281980&t=35)** For that we head over to Visual Studio Code and there I open server, browse, users, index dot JS and you see already the get route, this is the form that we just saw and under this route I will now add a new one for post.
>
> **[0:53](https://www.linkedin.com/learning/advanced-express/creating-a-user-registration-route?u=76281980&t=53)** Router dot post slash registration and it will be async
>
> **[1:08](https://www.linkedin.com/learning/advanced-express/creating-a-user-registration-route?u=76281980&t=68)** and it takes request, response, and a next.
>
> **[1:17](https://www.linkedin.com/learning/advanced-express/creating-a-user-registration-route?u=76281980&t=77)** And next, we want to implement the logic for creating a user and usually I tend to organize functionality in service classes, you see them when you look into the services folder.
>
> **[1:30](https://www.linkedin.com/learning/advanced-express/creating-a-user-registration-route?u=76281980&t=90)** To keep things a little bit more compact though, I will now implement the user creation logic in the route directly.
>
> **[1:36](https://www.linkedin.com/learning/advanced-express/creating-a-user-registration-route?u=76281980&t=96)** If you start to add more functionality, you can still factor things out into a class of its own.
>
> **[1:43](https://www.linkedin.com/learning/advanced-express/creating-a-user-registration-route?u=76281980&t=103)** To add the user creation logic, I will now bring in the user model, so right after we required express I will now add const, user model equals require
>
> **[2:00](https://www.linkedin.com/learning/advanced-express/creating-a-user-registration-route?u=76281980&t=120)** and we go two levels up, enter as models, user model.
>
> **[2:08](https://www.linkedin.com/learning/advanced-express/creating-a-user-registration-route?u=76281980&t=128)** In the route now, I will first add a try catch block because we will use await in here and we can only handle errors in await using try catch so I add error and if an error occurs, I will just return next error.
>
> **[2:31](https://www.linkedin.com/learning/advanced-express/creating-a-user-registration-route?u=76281980&t=151)** Now let's implement the logic for storing the user inside the database, for that I will add const, user equals new user model, and this takes an object
>
> **[2:50](https://www.linkedin.com/learning/advanced-express/creating-a-user-registration-route?u=76281980&t=170)** with the data that we actually want to store.
>
> **[2:53](https://www.linkedin.com/learning/advanced-express/creating-a-user-registration-route?u=76281980&t=173)** So I want to store the user name and this comes in request dot body, username, because we have the express body parser as middleware in place so it will resolve every form inputs into req body.
>
> **[3:08](https://www.linkedin.com/learning/advanced-express/creating-a-user-registration-route?u=76281980&t=188)** We also want store the email so it's req body dot email and, of course, also the password, req body password.
>
> **[3:25](https://www.linkedin.com/learning/advanced-express/creating-a-user-registration-route?u=76281980&t=205)** Next we have to save the user so I add const, saved, user equals await, user dot save.
>
> **[3:35](https://www.linkedin.com/learning/advanced-express/creating-a-user-registration-route?u=76281980&t=215)** This is a function that Mongoose gives us and it will store the user in the database.
>
> **[3:43](https://www.linkedin.com/learning/advanced-express/creating-a-user-registration-route?u=76281980&t=223)** Now we have to make sure that the user was actually really saved so I add, if saved user, then everything was fine so I will return, res redirect and I will send the user back to users slash registration
>
> **[4:08](https://www.linkedin.com/learning/advanced-express/creating-a-user-registration-route?u=76281980&t=248)** and I will add success equals true to the query.
>
> **[4:15](https://www.linkedin.com/learning/advanced-express/creating-a-user-registration-route?u=76281980&t=255)** If you look into the get route above, you see that we pass on this argument further into the form and the form has some logic in there, that will show a success message when this variable is true.
>
> **[4:34](https://www.linkedin.com/learning/advanced-express/creating-a-user-registration-route?u=76281980&t=274)** If there is no saved user, I will return, next, new error, because obviously we could not save the user so I will add, failed to save user for unknown reasons.
>
> **[4:58](https://www.linkedin.com/learning/advanced-express/creating-a-user-registration-route?u=76281980&t=298)** We are omitting validation here because the model will do that for us, in real world scenarios though, you may at least want to validate if the user name or email already exists in the database and then provide a user-friendly error message to the user.
>
> **[5:13](https://www.linkedin.com/learning/advanced-express/creating-a-user-registration-route?u=76281980&t=313)** Now let's test this out, the sample project comes with a test for that so I now run NPX mocha test server routes users index dot registration test dot JS
>
> **[5:32](https://www.linkedin.com/learning/advanced-express/creating-a-user-registration-route?u=76281980&t=332)** and we see that all tests run through successfully.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **CLI Commands:** make (1), npx (1)
> **Env Vars:** html (1), npx (1)
> **Tools:** visual studio (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Testing the form and reviewing the data in MongoDB](https://www.linkedin.com/learning/advanced-express/testing-the-form-and-reviewing-the-data-in-mongodb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-express/testing-the-form-and-reviewing-the-data-in-mongodb?u=76281980&t=0)** - [Instructor] With the route in place, now let's try this form out for real.
>
> **[0:06](https://www.linkedin.com/learning/advanced-express/testing-the-form-and-reviewing-the-data-in-mongodb?u=76281980&t=6)** So I fill it out, my name, my email address.
>
> **[0:12](https://www.linkedin.com/learning/advanced-express/testing-the-form-and-reviewing-the-data-in-mongodb?u=76281980&t=12)** You should remember the email address and the password you're using here because we will need it a little bit later.
>
> **[0:20](https://www.linkedin.com/learning/advanced-express/testing-the-form-and-reviewing-the-data-in-mongodb?u=76281980&t=20)** And I submit it, and I get the thank you for your registration message back.
>
> **[0:27](https://www.linkedin.com/learning/advanced-express/testing-the-form-and-reviewing-the-data-in-mongodb?u=76281980&t=27)** As we are using [[MongoDB]] Atlas, we can now easily head over to their UI to see how the data actually looks in the database.
>
> **[0:35](https://www.linkedin.com/learning/advanced-express/testing-the-form-and-reviewing-the-data-in-mongodb?u=76281980&t=35)** So, in the Atlas dashboard, I click on my Cluster0 here, and go into Collections, and when I then look into development users, you see the newly created user with a ObjectId that is automatically provided by MongoDB, the username, the email address, the hash password using bcrypt, and also the createdAt and updatedAt time stamps, and this __v, that is a field that is internal to Mongo.
>
> **[1:10](https://www.linkedin.com/learning/advanced-express/testing-the-form-and-reviewing-the-data-in-mongodb?u=76281980&t=70)** Of course this is not a full-blown [[User Management]] system.
>
> **[1:14](https://www.linkedin.com/learning/advanced-express/testing-the-form-and-reviewing-the-data-in-mongodb?u=76281980&t=74)** For that, you'd also want to add functionality for users to update their data, or maybe you even want to send out confirmation emails.
>
> **[1:23](https://www.linkedin.com/learning/advanced-express/testing-the-form-and-reviewing-the-data-in-mongodb?u=76281980&t=83)** In our case though, it's enough if we can create users, and in the next chapter we will use Passport to authenticate users against a database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (2), [[User Management]] (1)
> **Code Identifiers:** createdat (1), updatedat (1)
> **CLI Commands:** mongo (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. Authenticate and Authorize Users

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding cookies and sessions](https://www.linkedin.com/learning/advanced-express/understanding-cookies-and-sessions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-express/understanding-cookies-and-sessions?u=76281980&t=0)** - [Instructor] Before we authenticate a user, we have to talk about how to recognize them later.
>
> **[0:05](https://www.linkedin.com/learning/advanced-express/understanding-cookies-and-sessions?u=76281980&t=5)** Well, let's say it more generally, how can we store information about one individual user in the session on the server?
>
> **[0:13](https://www.linkedin.com/learning/advanced-express/understanding-cookies-and-sessions?u=76281980&t=13)** For that we need cookies and some kind of session management.
>
> **[0:17](https://www.linkedin.com/learning/advanced-express/understanding-cookies-and-sessions?u=76281980&t=17)** Let's look at the typical authentication flow, very similar to what we will build in this chapter.
>
> **[0:22](https://www.linkedin.com/learning/advanced-express/understanding-cookies-and-sessions?u=76281980&t=22)** We have a browser and a server and let's also conceptually create the box for the app that is served by the server and also one for the database.
>
> **[0:32](https://www.linkedin.com/learning/advanced-express/understanding-cookies-and-sessions?u=76281980&t=32)** The browser sends a post request with some form data like e-mail and password, tool slash, log in.
>
> **[0:38](https://www.linkedin.com/learning/advanced-express/understanding-cookies-and-sessions?u=76281980&t=38)** On the server we will now try to authenticate the user and if the login is valid, recreate the session that maps the user logged in to some random identifier.
>
> **[0:48](https://www.linkedin.com/learning/advanced-express/understanding-cookies-and-sessions?u=76281980&t=48)** Inside the session we can now set arbitrary data that we want to associate with this user like the user ID to [[Fetch]] the user from the database for subsequent requests.
>
> **[0:58](https://www.linkedin.com/learning/advanced-express/understanding-cookies-and-sessions?u=76281980&t=58)** The server will now send back some [[HTML]] to the browser like the thank you page for logging in, and additionally, it sends a special header called Set-Cookie.
>
> **[1:09](https://www.linkedin.com/learning/advanced-express/understanding-cookies-and-sessions?u=76281980&t=69)** If a browser gets such a header, it will store this cookie and will send it from now on with every request to the server like forward slash account.
>
> **[1:18](https://www.linkedin.com/learning/advanced-express/understanding-cookies-and-sessions?u=76281980&t=78)** Every session has a unique identifier called Session ID.
>
> **[1:21](https://www.linkedin.com/learning/advanced-express/understanding-cookies-and-sessions?u=76281980&t=81)** On the server we can then use this identifier to load the session, and in this session we will find the previously stored user ID and we can use it to fetch the user from the database.
>
> **[1:34](https://www.linkedin.com/learning/advanced-express/understanding-cookies-and-sessions?u=76281980&t=94)** What's important here, is that the session identifier has to be something like a random hash that can only be mapped back to the user by the server.
>
> **[1:42](https://www.linkedin.com/learning/advanced-express/understanding-cookies-and-sessions?u=76281980&t=102)** Why?
>
> **[1:43](https://www.linkedin.com/learning/advanced-express/understanding-cookies-and-sessions?u=76281980&t=103)** A very simple and very wrong example would be to use the email address of the user as a Session ID.
>
> **[1:51](https://www.linkedin.com/learning/advanced-express/understanding-cookies-and-sessions?u=76281980&t=111)** As cookies can be freely manipulated by the client, anyone that knows the email address of the user could now become this user.
>
> **[1:59](https://www.linkedin.com/learning/advanced-express/understanding-cookies-and-sessions?u=76281980&t=119)** The same applies to using incremental ID's, account numbers, or whatever information that can easily be guessed or tried out by a brute force of text.
>
> **[2:09](https://www.linkedin.com/learning/advanced-express/understanding-cookies-and-sessions?u=76281980&t=129)** There are a few properties that can be sent with a cookie.
>
> **[2:13](https://www.linkedin.com/learning/advanced-express/understanding-cookies-and-sessions?u=76281980&t=133)** Additionally, to the cookie value a key-value pair, we can set an expiration date.
>
> **[2:18](https://www.linkedin.com/learning/advanced-express/understanding-cookies-and-sessions?u=76281980&t=138)** If this is omitted, the cookie will be deleted when the browser closes.
>
> **[2:22](https://www.linkedin.com/learning/advanced-express/understanding-cookies-and-sessions?u=76281980&t=142)** We can tell that this cookie will only be sent by Qualys secure connection, means SSL.
>
> **[2:28](https://www.linkedin.com/learning/advanced-express/understanding-cookies-and-sessions?u=76281980&t=148)** Or that the cookie cannot be read by a [[JavaScript]] on decline.
>
> **[2:33](https://www.linkedin.com/learning/advanced-express/understanding-cookies-and-sessions?u=76281980&t=153)** To make express read cookies, we need a middleware called Cookie Parser.
>
> **[2:38](https://www.linkedin.com/learning/advanced-express/understanding-cookies-and-sessions?u=76281980&t=158)** It's part of express, but needs to be installed separately.
>
> **[2:42](https://www.linkedin.com/learning/advanced-express/understanding-cookies-and-sessions?u=76281980&t=162)** If it's in place, it will look for cookie headers in the raw request headers and make them available in request cookies.
>
> **[2:51](https://www.linkedin.com/learning/advanced-express/understanding-cookies-and-sessions?u=76281980&t=171)** Now we need a way to store and manage the session data and Express provides a module for that.
>
> **[2:56](https://www.linkedin.com/learning/advanced-express/understanding-cookies-and-sessions?u=76281980&t=176)** It's called Express Session.
>
> **[3:00](https://www.linkedin.com/learning/advanced-express/understanding-cookies-and-sessions?u=76281980&t=180)** Express Session, by default, stores your session information in memory, but this is not recommended in production.
>
> **[3:06](https://www.linkedin.com/learning/advanced-express/understanding-cookies-and-sessions?u=76281980&t=186)** Mostly because only the process that stores the session can read it afterwards.
>
> **[3:12](https://www.linkedin.com/learning/advanced-express/understanding-cookies-and-sessions?u=76281980&t=192)** This solution will start to work as soon as you scale up to multiple processes, like with a Clustal module or even scale out to different servers.
>
> **[3:21](https://www.linkedin.com/learning/advanced-express/understanding-cookies-and-sessions?u=76281980&t=201)** Luckily, Express Session lets you define storage back-ends and there is a variety of modules available for that.
>
> **[3:28](https://www.linkedin.com/learning/advanced-express/understanding-cookies-and-sessions?u=76281980&t=208)** As we are already using Mongo DB, let's store the session there.
>
> **[3:33](https://www.linkedin.com/learning/advanced-express/understanding-cookies-and-sessions?u=76281980&t=213)** For that we will use connect Mongo.
>
> **[3:35](https://www.linkedin.com/learning/advanced-express/understanding-cookies-and-sessions?u=76281980&t=215)** Then all we have to do is add Express Session bio middleware.
>
> **[3:40](https://www.linkedin.com/learning/advanced-express/understanding-cookies-and-sessions?u=76281980&t=220)** Connect Mongo also supports reusing mongoose connections and that's ideal for us.
>
> **[3:45](https://www.linkedin.com/learning/advanced-express/understanding-cookies-and-sessions?u=76281980&t=225)** But that was enough theory for now, we will now implement session management in our Express application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (2), [[HTML]] (1), [[JavaScript]] (1)
> **CLI Commands:** mongo (3), make (2), find (1)
> **Env Vars:** html (1), ssl (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Adding cookies and sessions to Express](https://www.linkedin.com/learning/advanced-express/adding-cookies-and-sessions-to-express?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-express/adding-cookies-and-sessions-to-express?u=76281980&t=0)** - [Instructor] As shown in the previous video we will need cookie parser to read cookies from the raw request header.
>
> **[0:06](https://www.linkedin.com/learning/advanced-express/adding-cookies-and-sessions-to-express?u=76281980&t=6)** So I'm installing that now in [[npm]] install --save cookie-parser and we need to recall it in our app.js file.
>
> **[0:18](https://www.linkedin.com/learning/advanced-express/adding-cookies-and-sessions-to-express?u=76281980&t=18)** So somewhere on top of the file add, const cookieParser = require('cookie-parser').
>
> **[0:33](https://www.linkedin.com/learning/advanced-express/adding-cookies-and-sessions-to-express?u=76281980&t=33)** CookieParser is a middleware.
>
> **[0:34](https://www.linkedin.com/learning/advanced-express/adding-cookies-and-sessions-to-express?u=76281980&t=34)** This means we also have to add it to the chain of middlewares via app.use.
>
> **[0:40](https://www.linkedin.com/learning/advanced-express/adding-cookies-and-sessions-to-express?u=76281980&t=40)** And for that I'm going down to line 24, right after the bodyParser.
>
> **[0:45](https://www.linkedin.com/learning/advanced-express/adding-cookies-and-sessions-to-express?u=76281980&t=45)** I will now add app.use(cookieParser).
>
> **[0:51](https://www.linkedin.com/learning/advanced-express/adding-cookies-and-sessions-to-express?u=76281980&t=51)** And we're calling it as a function So we have to add parentheses here in the end.
>
> **[0:57](https://www.linkedin.com/learning/advanced-express/adding-cookies-and-sessions-to-express?u=76281980&t=57)** From now on Express will give us cookies in request.cookies.
>
> **[1:02](https://www.linkedin.com/learning/advanced-express/adding-cookies-and-sessions-to-express?u=76281980&t=62)** Next, let's plug in the session management.
>
> **[1:05](https://www.linkedin.com/learning/advanced-express/adding-cookies-and-sessions-to-express?u=76281980&t=65)** For that install express session into install-- save express-session and to store the sessions in [[MongoDB]] I will install connect-mongo and now on top of app.js again
>
> **[1:30](https://www.linkedin.com/learning/advanced-express/adding-cookies-and-sessions-to-express?u=76281980&t=90)** I will bring in those modules first.
>
> **[1:35](https://www.linkedin.com/learning/advanced-express/adding-cookies-and-sessions-to-express?u=76281980&t=95)** The session module const session = require('express-session') and then I add the MongoStore.
>
> **[1:51](https://www.linkedin.com/learning/advanced-express/adding-cookies-and-sessions-to-express?u=76281980&t=111)** It's require('connect-mongo').
>
> **[1:56](https://www.linkedin.com/learning/advanced-express/adding-cookies-and-sessions-to-express?u=76281980&t=116)** And this module now takes, the previously required session as an argument.
>
> **[2:04](https://www.linkedin.com/learning/advanced-express/adding-cookies-and-sessions-to-express?u=76281980&t=124)** Further down now of course we have to add all of this as a middleware.
>
> **[2:09](https://www.linkedin.com/learning/advanced-express/adding-cookies-and-sessions-to-express?u=76281980&t=129)** So right after line 26 where we added the cookieParser I will now add app.use(session and session takes a property object as a argument.
>
> **[2:29](https://www.linkedin.com/learning/advanced-express/adding-cookies-and-sessions-to-express?u=76281980&t=149)** First we define the secret.
>
> **[2:31](https://www.linkedin.com/learning/advanced-express/adding-cookies-and-sessions-to-express?u=76281980&t=151)** This is used to sign the sessions to prevent tamperings.
>
> **[2:35](https://www.linkedin.com/learning/advanced-express/adding-cookies-and-sessions-to-express?u=76281980&t=155)** While I, use some random string here.
>
> **[2:41](https://www.linkedin.com/learning/advanced-express/adding-cookies-and-sessions-to-express?u=76281980&t=161)** Then we want to resave, which means that the session will stay active also, if it wasn't changed.
>
> **[2:50](https://www.linkedin.com/learning/advanced-express/adding-cookies-and-sessions-to-express?u=76281980&t=170)** And we set saveUninitialized to false because otherwise we would get a lot of empty objects in our database.
>
> **[2:59](https://www.linkedin.com/learning/advanced-express/adding-cookies-and-sessions-to-express?u=76281980&t=179)** And now we define a session store.
>
> **[3:01](https://www.linkedin.com/learning/advanced-express/adding-cookies-and-sessions-to-express?u=76281980&t=181)** And this session store is a new MongoStore and it takes a Mongoose connection, configuration property.
>
> **[3:16](https://www.linkedin.com/learning/advanced-express/adding-cookies-and-sessions-to-express?u=76281980&t=196)** And this should be mongoose.connection.
>
> **[3:23](https://www.linkedin.com/learning/advanced-express/adding-cookies-and-sessions-to-express?u=76281980&t=203)** And as you see, [[ESLint]] complains now that mongoose is not defined yet.
>
> **[3:28](https://www.linkedin.com/learning/advanced-express/adding-cookies-and-sessions-to-express?u=76281980&t=208)** Of course we have to also bring it in here const mongoose = require('mongoose').
>
> **[3:41](https://www.linkedin.com/learning/advanced-express/adding-cookies-and-sessions-to-express?u=76281980&t=221)** And this mongoose module actually, contains the database connection.
>
> **[3:46](https://www.linkedin.com/learning/advanced-express/adding-cookies-and-sessions-to-express?u=76281980&t=226)** So why can we do it like that without connecting to the database here?
>
> **[3:50](https://www.linkedin.com/learning/advanced-express/adding-cookies-and-sessions-to-express?u=76281980&t=230)** As I said, when we covered Mongoose, this module remains in module global state.
>
> **[3:55](https://www.linkedin.com/learning/advanced-express/adding-cookies-and-sessions-to-express?u=76281980&t=235)** And this means that once Mongoose is connected, and we do that in ping www the connection is available whenever we require mongoose.
>
> **[4:05](https://www.linkedin.com/learning/advanced-express/adding-cookies-and-sessions-to-express?u=76281980&t=245)** To try the session management out now let's simply add a little visit counter to an existing custom middleware like the one that fetches speaker names.
>
> **[4:15](https://www.linkedin.com/learning/advanced-express/adding-cookies-and-sessions-to-express?u=76281980&t=255)** You will find that, down starting at line 36 here in the try block I add req.session.visits =
>
> **[4:29](https://www.linkedin.com/learning/advanced-express/adding-cookies-and-sessions-to-express?u=76281980&t=269)** and I'm using a ternary operation here, request.session.visits.
>
> **[4:36](https://www.linkedin.com/learning/advanced-express/adding-cookies-and-sessions-to-express?u=76281980&t=276)** If this is present we will simply add one to this property
>
> **[4:46](https://www.linkedin.com/learning/advanced-express/adding-cookies-and-sessions-to-express?u=76281980&t=286)** and if it's not present it will be initialized with one.
>
> **[4:52](https://www.linkedin.com/learning/advanced-express/adding-cookies-and-sessions-to-express?u=76281980&t=292)** Next we can go ahead and try this out and look at the data in the debugger and in the database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (1), [[MongoDB]] (1), [[ESLint]] (1)
> **Code Identifiers:** cookieparser (3), bodyparser (1), saveuninitialized (1)
> **CLI Commands:** mongo (2), npm (1), find (1)
> **Definitions:** is a  (2), means that (2)
> **Prerequisites:** install (4)
> **File Paths:** app.js (2)
> **Cross-References:** previous video (1), we covered (1)
> **Speakers:** - [instructor] (1)

#### [Inspecting the session object](https://www.linkedin.com/learning/advanced-express/inspecting-the-session-object?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-express/inspecting-the-session-object?u=76281980&t=0)** - [Narrator] With our little visit counter in place, let's use the debugger to inspect what's actually going on in our request.session object.
>
> **[0:11](https://www.linkedin.com/learning/advanced-express/inspecting-the-session-object?u=76281980&t=11)** For that, I want to set a break point on line 38.
>
> **[0:14](https://www.linkedin.com/learning/advanced-express/inspecting-the-session-object?u=76281980&t=14)** You do that by simply moving the mouse to the spot left of the line number and then click on it so we have a break point.
>
> **[0:22](https://www.linkedin.com/learning/advanced-express/inspecting-the-session-object?u=76281980&t=22)** Now, here, and I start the debugger.
>
> **[0:29](https://www.linkedin.com/learning/advanced-express/inspecting-the-session-object?u=76281980&t=29)** And I head over to the website and just load the page once.
>
> **[0:35](https://www.linkedin.com/learning/advanced-express/inspecting-the-session-object?u=76281980&t=35)** If we now hover over request session, we see that we already have a session object here that holds the cookie, it holds the session ID and also the properties that we set before.
>
> **[0:48](https://www.linkedin.com/learning/advanced-express/inspecting-the-session-object?u=76281980&t=48)** And now let's use the debugger to step over to the next line of code and if we now hover over the session object, we already see that there is also now this visits property set.
>
> **[1:04](https://www.linkedin.com/learning/advanced-express/inspecting-the-session-object?u=76281980&t=64)** So let's stop the debugger now and remove the break point and I will now simply start the application and I will reload it a few more times.
>
> **[1:19](https://www.linkedin.com/learning/advanced-express/inspecting-the-session-object?u=76281980&t=79)** And to see what actually now happened on the database I head over to [[MongoDB]] Atlas and now when we refresh our list of collections, we should see a new collection sessions.
>
> **[1:31](https://www.linkedin.com/learning/advanced-express/inspecting-the-session-object?u=76281980&t=91)** When I click on that, we see that there is now a new document that represents the current session we created.
>
> **[1:39](https://www.linkedin.com/learning/advanced-express/inspecting-the-session-object?u=76281980&t=99)** So it has a session ID, it has expiration date, and also a session property and if we look into that a little bit closer, we see that there is a property visits set and it have the value of 3.
>
> **[1:58](https://www.linkedin.com/learning/advanced-express/inspecting-the-session-object?u=76281980&t=118)** So far, so good.
>
> **[1:59](https://www.linkedin.com/learning/advanced-express/inspecting-the-session-object?u=76281980&t=119)** Let's head back to the code and there I will remove this visit com, we don't need it anymore.
>
> **[2:07](https://www.linkedin.com/learning/advanced-express/inspecting-the-session-object?u=76281980&t=127)** Until now, we can manage sessions but we have no functionality to actually authenticate the user in place.
>
> **[2:15](https://www.linkedin.com/learning/advanced-express/inspecting-the-session-object?u=76281980&t=135)** We will cover that in the next videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (1)
> **UI Navigation:** click on (2)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Introduction to Passport](https://www.linkedin.com/learning/advanced-express/introduction-to-passport?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-express/introduction-to-passport?u=76281980&t=0)** - [Narrator] Passport is the most widely-used authentication module for [[Node.js]].
>
> **[0:05](https://www.linkedin.com/learning/advanced-express/introduction-to-passport?u=76281980&t=5)** Conceptually, Passport provides an authenticate function.
>
> **[0:10](https://www.linkedin.com/learning/advanced-express/introduction-to-passport?u=76281980&t=10)** This function uses a so-called strategy to authenticate the user.
>
> **[0:15](https://www.linkedin.com/learning/advanced-express/introduction-to-passport?u=76281980&t=15)** Strategies are pluggable authentication modules that can be installed separately.
>
> **[0:20](https://www.linkedin.com/learning/advanced-express/introduction-to-passport?u=76281980&t=20)** Through these strategies, Passport covers a lot of back ends or use cases from local authentication that is mostly used to authenticate against the local database to strategies for a variety of third-party systems, including single sign-on providers and logins via social media concepts, like [[Facebook]], or other exotic systems Shoplet.
>
> **[0:42](https://www.linkedin.com/learning/advanced-express/introduction-to-passport?u=76281980&t=42)** Right now, there are over 500 strategies available.
>
> **[0:46](https://www.linkedin.com/learning/advanced-express/introduction-to-passport?u=76281980&t=46)** Once Overview successfully authenticated, Passport also takes care of storing the user in the session, and restoring it for every request.
>
> **[0:55](https://www.linkedin.com/learning/advanced-express/introduction-to-passport?u=76281980&t=55)** To use Passport in Express, it needs to be hooked into the application with, you might've guessed it, two middle definitions.
>
> **[1:03](https://www.linkedin.com/learning/advanced-express/introduction-to-passport?u=76281980&t=63)** What do these two middle functions do?
>
> **[1:06](https://www.linkedin.com/learning/advanced-express/introduction-to-passport?u=76281980&t=66)** First we have initialize, it returns a middleware function that uses the request object to store passport internal data in.
>
> **[1:14](https://www.linkedin.com/learning/advanced-express/introduction-to-passport?u=76281980&t=74)** And then, we need passport dot session.
>
> **[1:18](https://www.linkedin.com/learning/advanced-express/introduction-to-passport?u=76281980&t=78)** It looks for previously serialized user in the current session and uses a provided deserialization function to provide the user in request dot user to all following middlewares and routes.
>
> **[1:30](https://www.linkedin.com/learning/advanced-express/introduction-to-passport?u=76281980&t=90)** In the next videos, we are going to add Passport to our sample project and we will create a strategy to authenticate users against the database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (1), [[Facebook]] (1)
> **File Paths:** node.js (1)
> **CLI Commands:** node (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [narrator] (1)

#### [Adding Passport to Express](https://www.linkedin.com/learning/advanced-express/adding-passport-to-express?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-express/adding-passport-to-express?u=76281980&t=0)** - [Instructor] To add passport to the project, I have to install the [[npm]] module, so I'm running npm install --save passport.
>
> **[0:10](https://www.linkedin.com/learning/advanced-express/adding-passport-to-express?u=76281980&t=10)** We should hold all authentication-related code in a central location instead of spreading it out in our server.js file.
>
> **[0:18](https://www.linkedin.com/learning/advanced-express/adding-passport-to-express?u=76281980&t=18)** Let's create a file, lib, auth.js for that.
>
> **[0:26](https://www.linkedin.com/learning/advanced-express/adding-passport-to-express?u=76281980&t=26)** And in there, first we will bring in passport, const passport equals require passport.
>
> **[0:37](https://www.linkedin.com/learning/advanced-express/adding-passport-to-express?u=76281980&t=37)** And here I will simply export a few function that passport needs to operate, so I'm exporting an object with one property initialize which we'll simply call passport.initialize and one property session which points to passport.session.
>
> **[1:14](https://www.linkedin.com/learning/advanced-express/adding-passport-to-express?u=76281980&t=74)** Let's fix the indents here real quick.
>
> **[1:21](https://www.linkedin.com/learning/advanced-express/adding-passport-to-express?u=76281980&t=81)** Of course we now have to add this also to our app.js file, so I'm opening app.js and there I will add const auth equals require
>
> **[1:39](https://www.linkedin.com/learning/advanced-express/adding-passport-to-express?u=76281980&t=99)** /lib/auth.
>
> **[1:43](https://www.linkedin.com/learning/advanced-express/adding-passport-to-express?u=76281980&t=103)** Of course we now also have to bring those two passport middleware functions into our middleware chain and here it's really important that they're loaded after the session was initialized, so if we have the session middleware on line 30, we will add them right after that, so I'm using app.use and there I first add auth.initialize and on the next line, I add app auth.session.
>
> **[2:23](https://www.linkedin.com/learning/advanced-express/adding-passport-to-express?u=76281980&t=143)** In my templates, I want to show different navigation options depending on if the user is logged in or not.
>
> **[2:31](https://www.linkedin.com/learning/advanced-express/adding-passport-to-express?u=76281980&t=151)** So, let's create another middleware that sets the user on res.locals which is globally available in all templates.
>
> **[2:39](https://www.linkedin.com/learning/advanced-express/adding-passport-to-express?u=76281980&t=159)** See my course Building a Website with [[Express.js]] if this is unfamiliar to you.
>
> **[2:44](https://www.linkedin.com/learning/advanced-express/adding-passport-to-express?u=76281980&t=164)** So, I will now head over back to auth.js and there I add a new exported property setUser
>
> **[2:56](https://www.linkedin.com/learning/advanced-express/adding-passport-to-express?u=76281980&t=176)** and it takes request, response and next and there I simply set res.locals.user equals request.user
>
> **[3:12](https://www.linkedin.com/learning/advanced-express/adding-passport-to-express?u=76281980&t=192)** because if a user is logged in, passport will give us the current user in request.user and in the end we should never forger to call and return next because otherwise our application will get stuck.
>
> **[3:30](https://www.linkedin.com/learning/advanced-express/adding-passport-to-express?u=76281980&t=210)** So, now let's head over to app.js and there we will simply bring in this additional middleware after we initialized passport.
>
> **[3:43](https://www.linkedin.com/learning/advanced-express/adding-passport-to-express?u=76281980&t=223)** Now that we have passport in place, we have to implement a strategy that lets us authenticate users against our database.
>
> **[3:52](https://www.linkedin.com/learning/advanced-express/adding-passport-to-express?u=76281980&t=232)** We will do that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (2), [[Express.js]] (1)
> **File Paths:** app.js (3), auth.js (2), server.js (1), express.js (1)
> **CLI Commands:** npm (2)
> **Prerequisites:** install (2)
> **Code Identifiers:** setuser (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Setting up an authentication strategy for Passport](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=0)** - [Narrator] Eventually we want to authenticate users against our [[MongoDB]] Database.
>
> **[0:05](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=5)** For that, we already created a user model.
>
> **[0:08](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=8)** Now we want to implement all flows and methods related to authentication.
>
> **[0:13](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=13)** Let's open the auth.js.
>
> **[0:16](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=16)** And as we know, passport gives us a set of different authentication strategies.
>
> **[0:21](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=21)** To authenticate against the local database we need the local strategy.
>
> **[0:26](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=26)** It's not bundled with passport.
>
> **[0:27](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=27)** So we need to install the respective model.
>
> **[0:30](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=30)** For that I'll run [[npm]] install, dash dash save, passport dash local.
>
> **[0:40](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=40)** And now in auth.js I can add const, local strategy,
>
> **[0:50](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=50)** equals require passport local, dot strategy.
>
> **[1:02](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=62)** Next we have to add the strategy to passport.
>
> **[1:05](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=65)** And for that we have a similar mechanism as express middle verse.
>
> **[1:11](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=71)** So I add passport dot use.
>
> **[1:16](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=76)** And here we'll now pass in the new local strategy.
>
> **[1:23](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=83)** And by default this strategy will look for username and password in the body.
>
> **[1:28](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=88)** But we want to use the email address here.
>
> **[1:31](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=91)** So we have to set a configuration option for that.
>
> **[1:35](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=95)** And to do that, add username field should be email.
>
> **[1:41](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=101)** So it will now look inside the body for a property email, and will use that instead of a username field.
>
> **[1:53](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=113)** Next, we have to implement the actual authentication function, so I add async.
>
> **[1:59](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=119)** And this function gets now the username, the password, and the done callback.
>
> **[2:13](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=133)** And inside, we will add a try catch block.
>
> **[2:20](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=140)** If there is an error, we want to return done, done error.
>
> **[2:27](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=147)** And in the try block, we will now implement the actual authentication logic.
>
> **[2:34](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=154)** And for that of course, we also need the user model in place.
>
> **[2:38](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=158)** So we will require that, const user model, equals require models, usermodel.
>
> **[2:54](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=174)** Now we can try to load the user by adding const user, equals await user model, find one.
>
> **[3:08](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=188)** And here we want to look for the email address, which is given us by password in the username variable.
>
> **[3:20](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=200)** We add exec so that we get a real promise back.
>
> **[3:26](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=206)** And next we will now check if there is a user or not.
>
> **[3:30](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=210)** So if there is no user, we will return done.
>
> **[3:38](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=218)** First argument is an error.
>
> **[3:40](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=220)** This is not an error search.
>
> **[3:42](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=222)** But we also have no user object so we will pass in false as second argument.
>
> **[3:48](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=228)** And the third argument we can provide a message that could be something like invalid username or password.
>
> **[4:03](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=243)** If there is a user, we now want to validate their password.
>
> **[4:08](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=248)** So add const password okay, equals await user.
>
> **[4:17](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=257)** And this is now the compare function that we implemented in the model.
>
> **[4:21](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=261)** User compare password.
>
> **[4:25](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=265)** And we will compare it with the password we got as function argument from passport.
>
> **[4:35](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=275)** If password is not okay, we will return again with the message and no user, which is again, invalid username or password.
>
> **[4:53](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=293)** And in the other case, we can now return done, null error here.
>
> **[5:01](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=301)** But a valid user with a valid password.
>
> **[5:06](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=306)** With this strategy in place, we can now authenticate users against the database.
>
> **[5:10](https://www.linkedin.com/learning/advanced-express/setting-up-an-authentication-strategy-for-passport?u=76281980&t=310)** Next, we have to implement the serialization and de-serialization functions to save and retrieve users from a session.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (1), [[npm]] (1)
> **Definitions:** is an  (2), is a  (2)
> **File Paths:** auth.js (2)
> **CLI Commands:** npm (1), find (1)
> **Prerequisites:** install (2)
> **UI Navigation:** open the (1)
> **Speakers:** - [narrator] (1)

#### [Serializing and deserializing users](https://www.linkedin.com/learning/advanced-express/serializing-and-deserializing-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-express/serializing-and-deserializing-users?u=76281980&t=0)** - [Instructor] When it comes to serialization, deserialization of users, it's up to us to decide what to store in the session.
>
> **[0:08](https://www.linkedin.com/learning/advanced-express/serializing-and-deserializing-users?u=76281980&t=8)** We could store the whole user object, but this would also mean that when a user is deleted or data is changed, the stored user object in the session would still be the same.
>
> **[0:17](https://www.linkedin.com/learning/advanced-express/serializing-and-deserializing-users?u=76281980&t=17)** It's better to just store the user ID and use this ID to retrieve the user from the database for every time the session is loaded.
>
> **[0:26](https://www.linkedin.com/learning/advanced-express/serializing-and-deserializing-users?u=76281980&t=26)** So, let's implement this serialization and deserialization now.
>
> **[0:31](https://www.linkedin.com/learning/advanced-express/serializing-and-deserializing-users?u=76281980&t=31)** I will add here, after line 19, passport.serializeUser and this function gets the actual user as first argument and the done callback.
>
> **[0:47](https://www.linkedin.com/learning/advanced-express/serializing-and-deserializing-users?u=76281980&t=47)** And all we do here now is we return done with null error, but a user._id.
>
> **[1:02](https://www.linkedin.com/learning/advanced-express/serializing-and-deserializing-users?u=76281980&t=62)** And we see that [[ESLint]] is now complaining a bit here.
>
> **[1:06](https://www.linkedin.com/learning/advanced-express/serializing-and-deserializing-users?u=76281980&t=66)** Here on line 21, it's telling us that the block statement could be optimized.
>
> **[1:11](https://www.linkedin.com/learning/advanced-express/serializing-and-deserializing-users?u=76281980&t=71)** So, let's let eslint just fix that.
>
> **[1:15](https://www.linkedin.com/learning/advanced-express/serializing-and-deserializing-users?u=76281980&t=75)** So, I'm clicking into this line, and do you see now this light bulb showing up?
>
> **[1:19](https://www.linkedin.com/learning/advanced-express/serializing-and-deserializing-users?u=76281980&t=79)** And there I select Fix this arrow-body style problem.
>
> **[1:24](https://www.linkedin.com/learning/advanced-express/serializing-and-deserializing-users?u=76281980&t=84)** And eslint will then optimize that to a more shortcut syntax.
>
> **[1:30](https://www.linkedin.com/learning/advanced-express/serializing-and-deserializing-users?u=76281980&t=90)** We also see that eslint obviously does not like underscores, but in this case we have to use it, so I will simply click into this line, and select Suppress after clicking on the light bulb.
>
> **[1:45](https://www.linkedin.com/learning/advanced-express/serializing-and-deserializing-users?u=76281980&t=105)** Next, we want to implement the deserialization function, so I add passport.deserializeUser, and this is an async function that gets the user ID as first argument and a done callback as second.
>
> **[2:03](https://www.linkedin.com/learning/advanced-express/serializing-and-deserializing-users?u=76281980&t=123)** And there I now add the try catch block.
>
> **[2:09](https://www.linkedin.com/learning/advanced-express/serializing-and-deserializing-users?u=76281980&t=129)** In case of an error, as always, we return done error, and in the try block, we will now try to load the user from the database.
>
> **[2:25](https://www.linkedin.com/learning/advanced-express/serializing-and-deserializing-users?u=76281980&t=145)** So, add const user = await UserModel.findByID, and we used user ID we got from passport, and we call exec on that to get the real promise back.
>
> **[2:45](https://www.linkedin.com/learning/advanced-express/serializing-and-deserializing-users?u=76281980&t=165)** And we can return done(null, and user) So, in case the user could not be found because, maybe, it was deleted from the database, this would not be a problem, because then passport would also not be able to deserialize the user and the user would not authenticate.
>
> **[3:11](https://www.linkedin.com/learning/advanced-express/serializing-and-deserializing-users?u=76281980&t=191)** Passport is now fully set up to authenticate users against the database and to store and retrieve them using a session.
>
> **[3:20](https://www.linkedin.com/learning/advanced-express/serializing-and-deserializing-users?u=76281980&t=200)** Next, we will use passport to let our users log in and out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ESLint]] (4)
> **Code Identifiers:** serializeuser (1), deserializeuser (1), findbyid (1)
> **Definitions:** is an  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Creating a login form with Passport](https://www.linkedin.com/learning/advanced-express/creating-a-login-form-with-passport?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-express/creating-a-login-form-with-passport?u=76281980&t=0)** - [Instructor] We now have all the authentication logic set up.
>
> **[0:03](https://www.linkedin.com/learning/advanced-express/creating-a-login-form-with-passport?u=76281980&t=3)** Next, we need to create the routes to let users log in.
>
> **[0:07](https://www.linkedin.com/learning/advanced-express/creating-a-login-form-with-passport?u=76281980&t=7)** If we look at this site, we see that there is already a login link under Account, but if we click on it, we see that there is an error because the route for it does not exist yet.
>
> **[0:19](https://www.linkedin.com/learning/advanced-express/creating-a-login-form-with-passport?u=76281980&t=19)** So back in Visual Studio Code, I open server, routes, users, index.js.
>
> **[0:27](https://www.linkedin.com/learning/advanced-express/creating-a-login-form-with-passport?u=76281980&t=27)** And there, right on top, I add router.get, and the route should be on the slash login, request, response, and we will render form, res render.
>
> **[0:46](https://www.linkedin.com/learning/advanced-express/creating-a-login-form-with-passport?u=76281980&t=46)** And this form exists already if we look into views, users.
>
> **[0:53](https://www.linkedin.com/learning/advanced-express/creating-a-login-form-with-passport?u=76281980&t=53)** There is already a login form.
>
> **[0:57](https://www.linkedin.com/learning/advanced-express/creating-a-login-form-with-passport?u=76281980&t=57)** So back in index.js, I now simply have to render users slash login.
>
> **[1:09](https://www.linkedin.com/learning/advanced-express/creating-a-login-form-with-passport?u=76281980&t=69)** Let's reload the application real quick, and let's reload the form, and we see now we have this login form.
>
> **[1:17](https://www.linkedin.com/learning/advanced-express/creating-a-login-form-with-passport?u=76281980&t=77)** This login form will now post to slash users slash login, and we will implement the post route for it now.
>
> **[1:28](https://www.linkedin.com/learning/advanced-express/creating-a-login-form-with-passport?u=76281980&t=88)** And for the authentication, we will now use passport.
>
> **[1:33](https://www.linkedin.com/learning/advanced-express/creating-a-login-form-with-passport?u=76281980&t=93)** And for that, I will bring in passport by adding const passport equals require passport.
>
> **[1:45](https://www.linkedin.com/learning/advanced-express/creating-a-login-form-with-passport?u=76281980&t=105)** Very much like Mongoose, passport maintains a module frugal state.
>
> **[1:49](https://www.linkedin.com/learning/advanced-express/creating-a-login-form-with-passport?u=76281980&t=109)** So everything we configured on it, like the strategy, will be available on the imported module as well.
>
> **[1:57](https://www.linkedin.com/learning/advanced-express/creating-a-login-form-with-passport?u=76281980&t=117)** Now for the post route I will add router.post, slash login, and now we use this passport middle var passport.authenticate, and its first argument, this middle var picks which strategy to use, and we will use the local strategy here.
>
> **[2:25](https://www.linkedin.com/learning/advanced-express/creating-a-login-form-with-passport?u=76281980&t=145)** In a second argument, we can pass in the configuration object, and there we can set what to do in case of a successful or failed login.
>
> **[2:35](https://www.linkedin.com/learning/advanced-express/creating-a-login-form-with-passport?u=76281980&t=155)** And in case of a successful login, I want to redirect the user, so I add the configuration property successRedirect, and this should lead the user to the index page.
>
> **[2:51](https://www.linkedin.com/learning/advanced-express/creating-a-login-form-with-passport?u=76281980&t=171)** Similarly, there is a failure redirect configuration option, and there I want to send the user back to the form users slash login, and I want to add a error variable to the very string, so error should be true.
>
> **[3:18](https://www.linkedin.com/learning/advanced-express/creating-a-login-form-with-passport?u=76281980&t=198)** Now for the form that we render here on line 12, we want to also pass in this error state, so I will now add a form variable error, and it comes from request.query.error.
>
> **[3:42](https://www.linkedin.com/learning/advanced-express/creating-a-login-form-with-passport?u=76281980&t=222)** If we looked at the login form template real quick, we see that if the error variable is set, the user will get an alert.
>
> **[3:55](https://www.linkedin.com/learning/advanced-express/creating-a-login-form-with-passport?u=76281980&t=235)** Now it's time to try this out.
>
> **[3:57](https://www.linkedin.com/learning/advanced-express/creating-a-login-form-with-passport?u=76281980&t=237)** First we will simply run a test.
>
> **[3:59](https://www.linkedin.com/learning/advanced-express/creating-a-login-form-with-passport?u=76281980&t=239)** So I run NPX mocha test/server/routes/users/ and there's an index.login.test.js, and let's run this real quick.
>
> **[4:13](https://www.linkedin.com/learning/advanced-express/creating-a-login-form-with-passport?u=76281980&t=253)** And we see that we can successfully log in the user.
>
> **[4:19](https://www.linkedin.com/learning/advanced-express/creating-a-login-form-with-passport?u=76281980&t=259)** Now let's also try to fill out the form.
>
> **[4:23](https://www.linkedin.com/learning/advanced-express/creating-a-login-form-with-passport?u=76281980&t=263)** So I start the application again.
>
> **[4:26](https://www.linkedin.com/learning/advanced-express/creating-a-login-form-with-passport?u=76281980&t=266)** On the form, let's first try to use wrong credentials, and login.
>
> **[4:35](https://www.linkedin.com/learning/advanced-express/creating-a-login-form-with-passport?u=76281980&t=275)** And as expected, we get an error message back.
>
> **[4:39](https://www.linkedin.com/learning/advanced-express/creating-a-login-form-with-passport?u=76281980&t=279)** Now let's use the correct credentials that we created before when registering.
>
> **[4:48](https://www.linkedin.com/learning/advanced-express/creating-a-login-form-with-passport?u=76281980&t=288)** And we got redirected to the index page, and we also see that the user is now set as template variable, because we now have different navigation that shows the username on the top right, and also new navigation options, My Account, and Logout.
>
> **[5:09](https://www.linkedin.com/learning/advanced-express/creating-a-login-form-with-passport?u=76281980&t=309)** In the next video, we will implement this logout route.

> [!info]- Semantic Content
>
> **File Paths:** index.js (2), index.login.test.js (1)
> **Exercise Files:** template (2)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** npx (1)
> **Code Identifiers:** successredirect (1)
> **Env Vars:** npx (1)
> **Cross-References:** in the next (1)
> **Tools:** visual studio (1)

#### [Providing a logout link](https://www.linkedin.com/learning/advanced-express/providing-a-logout-link?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-express/providing-a-logout-link?u=76281980&t=0)** - [Instructor] It's a good practice to also provide a way for users to logout and the sample project already contains a link for it here under the user name and logout.
>
> **[0:12](https://www.linkedin.com/learning/advanced-express/providing-a-logout-link?u=76281980&t=12)** We see that the route/user/logout does not exist yet.
>
> **[0:16](https://www.linkedin.com/learning/advanced-express/providing-a-logout-link?u=76281980&t=16)** We will implement it now.
>
> **[0:19](https://www.linkedin.com/learning/advanced-express/providing-a-logout-link?u=76281980&t=19)** For that I'm heading back to visual studio code and in there I open server, routes, users, index js and right after the the route for the log in I will now add a new route, router.get/logout,
>
> **[0:42](https://www.linkedin.com/learning/advanced-express/providing-a-logout-link?u=76281980&t=42)** request, response as always.
>
> **[0:44](https://www.linkedin.com/learning/advanced-express/providing-a-logout-link?u=76281980&t=44)** And password automatically adds a function logout to the request object.
>
> **[0:50](https://www.linkedin.com/learning/advanced-express/providing-a-logout-link?u=76281980&t=50)** All we have to do it call it and it will log the user out.
>
> **[0:53](https://www.linkedin.com/learning/advanced-express/providing-a-logout-link?u=76281980&t=53)** Behind the scenes it will clear the login session.
>
> **[0:57](https://www.linkedin.com/learning/advanced-express/providing-a-logout-link?u=76281980&t=57)** So I will now call request, logout
>
> **[1:05](https://www.linkedin.com/learning/advanced-express/providing-a-logout-link?u=76281980&t=65)** and next I want to redirect the user to the index page because maybe the user was on some privilege page and after logout they should of course end up somewhere that is accessible for all users.
>
> **[1:25](https://www.linkedin.com/learning/advanced-express/providing-a-logout-link?u=76281980&t=85)** Let's restart our application and let's click on logout now,
>
> **[1:34](https://www.linkedin.com/learning/advanced-express/providing-a-logout-link?u=76281980&t=94)** and we see that the user got logged out so we are back at the navigation containing account and the login page.
>
> **[1:44](https://www.linkedin.com/learning/advanced-express/providing-a-logout-link?u=76281980&t=104)** So we can now authenticate users, but what do they gain by logging in anyways.
>
> **[1:50](https://www.linkedin.com/learning/advanced-express/providing-a-logout-link?u=76281980&t=110)** There should be routes that are only available for privilege users like my account.
>
> **[1:55](https://www.linkedin.com/learning/advanced-express/providing-a-logout-link?u=76281980&t=115)** In the next videos I will show you how to protect route with password, it's quite easy.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (1)
> **Tools:** visual studio (1)
> **UI Navigation:** click on (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### [Authentication vs. authorization](https://www.linkedin.com/learning/advanced-express/authentication-vs-authorization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-express/authentication-vs-authorization?u=76281980&t=0)** - [Instructor] Requiring users to log in can have two purposes.
>
> **[0:03](https://www.linkedin.com/learning/advanced-express/authentication-vs-authorization?u=76281980&t=3)** It can be for authentication.
>
> **[0:06](https://www.linkedin.com/learning/advanced-express/authentication-vs-authorization?u=76281980&t=6)** This means we want to know who this user is.
>
> **[0:09](https://www.linkedin.com/learning/advanced-express/authentication-vs-authorization?u=76281980&t=9)** We implemented that already, and as soon as a user is logged in, request.user contains this information.
>
> **[0:16](https://www.linkedin.com/learning/advanced-express/authentication-vs-authorization?u=76281980&t=16)** We also stored this information in response.local so that all templates have access to it.
>
> **[0:22](https://www.linkedin.com/learning/advanced-express/authentication-vs-authorization?u=76281980&t=22)** Another reason to ask a user to log in is that we want to restrict or grant access to information depending on privileges a user has.
>
> **[0:31](https://www.linkedin.com/learning/advanced-express/authentication-vs-authorization?u=76281980&t=31)** This is called authorization.
>
> **[0:35](https://www.linkedin.com/learning/advanced-express/authentication-vs-authorization?u=76281980&t=35)** On the demo project, logged in users have access to a my account page.
>
> **[0:40](https://www.linkedin.com/learning/advanced-express/authentication-vs-authorization?u=76281980&t=40)** So it's under the user menu, here under my account.
>
> **[0:45](https://www.linkedin.com/learning/advanced-express/authentication-vs-authorization?u=76281980&t=45)** It's simple and only shows some basic information about the currently logged in user.
>
> **[0:52](https://www.linkedin.com/learning/advanced-express/authentication-vs-authorization?u=76281980&t=52)** Let's try out what happens if we are logged out and end up on this page, maybe through our browser history.
>
> **[0:58](https://www.linkedin.com/learning/advanced-express/authentication-vs-authorization?u=76281980&t=58)** So, let's copy that URL here, and let's log out.
>
> **[1:04](https://www.linkedin.com/learning/advanced-express/authentication-vs-authorization?u=76281980&t=64)** And let's head back to this page.
>
> **[1:08](https://www.linkedin.com/learning/advanced-express/authentication-vs-authorization?u=76281980&t=68)** We see that we are now presented with an error message because the template is missing the user data and fails to render.
>
> **[1:14](https://www.linkedin.com/learning/advanced-express/authentication-vs-authorization?u=76281980&t=74)** This is something we should avoid.
>
> **[1:16](https://www.linkedin.com/learning/advanced-express/authentication-vs-authorization?u=76281980&t=76)** In the next video, we will make sure that pages that require privilege can only be accessed by logged in users.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Env Vars:** url (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** template (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Protecting routes](https://www.linkedin.com/learning/advanced-express/protecting-routes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-express/protecting-routes?u=76281980&t=0)** - [Instructor] The account route that we want to change is in server, routes, users, index.js and way down we see here this get route for account.
>
> **[0:12](https://www.linkedin.com/learning/advanced-express/protecting-routes?u=76281980&t=12)** We learned about middlewares before and we know that the middleware can call the next one in the chain or end the request.
>
> **[0:19](https://www.linkedin.com/learning/advanced-express/protecting-routes?u=76281980&t=19)** So I'm going to add a middleware to the route before the page is rendered.
>
> **[0:24](https://www.linkedin.com/learning/advanced-express/protecting-routes?u=76281980&t=24)** For that I add request, response, next, let's do the comma here already and in this middleware function I will now simple check if request user means this is a logged in user, return, next
>
> **[0:48](https://www.linkedin.com/learning/advanced-express/protecting-routes?u=76281980&t=48)** and in any other case we will return res.status401
>
> **[0:59](https://www.linkedin.com/learning/advanced-express/protecting-routes?u=76281980&t=59)** and then we will end the request.
>
> **[1:01](https://www.linkedin.com/learning/advanced-express/protecting-routes?u=76281980&t=61)** So this is a quite hard error, we could of course also redirect the user then to the login form.
>
> **[1:08](https://www.linkedin.com/learning/advanced-express/protecting-routes?u=76281980&t=68)** Let's restart application and see if this works as intended.
>
> **[1:12](https://www.linkedin.com/learning/advanced-express/protecting-routes?u=76281980&t=72)** I reload the page with the error from before and we see that we now get an ERROR 401.
>
> **[1:19](https://www.linkedin.com/learning/advanced-express/protecting-routes?u=76281980&t=79)** This is a good example on how we can chain middlewares to enforce rules that need to apply before we call the next middleware.
>
> **[1:26](https://www.linkedin.com/learning/advanced-express/protecting-routes?u=76281980&t=86)** Let's add a little enhancement for the sake of consistency real quick.
>
> **[1:30](https://www.linkedin.com/learning/advanced-express/protecting-routes?u=76281980&t=90)** What if a user by accident ends up on the registration or login page despite being logged in?
>
> **[1:36](https://www.linkedin.com/learning/advanced-express/protecting-routes?u=76281980&t=96)** We should redirect them to their account page.
>
> **[1:39](https://www.linkedin.com/learning/advanced-express/protecting-routes?u=76281980&t=99)** As we need this functionality on two routes, I will now simply create a function and I create that outside of this module export.
>
> **[1:51](https://www.linkedin.com/learning/advanced-express/protecting-routes?u=76281980&t=111)** Add a function, redirect if logged in, it takes request, response, next.
>
> **[2:02](https://www.linkedin.com/learning/advanced-express/protecting-routes?u=76281980&t=122)** And here I will simple check if request user is set, so the user is logged in and in this case I want to redirect to /users/account.
>
> **[2:22](https://www.linkedin.com/learning/advanced-express/protecting-routes?u=76281980&t=142)** In any other case we will simply pass the control on to the next middleware in the chain, which is most probably the one that renders the page done.
>
> **[2:34](https://www.linkedin.com/learning/advanced-express/protecting-routes?u=76281980&t=154)** To apply this middleware we now simply have to copy it into the get route for /login and the one for /registration.
>
> **[2:49](https://www.linkedin.com/learning/advanced-express/protecting-routes?u=76281980&t=169)** Let's restart the application, let's head back to the page.
>
> **[2:56](https://www.linkedin.com/learning/advanced-express/protecting-routes?u=76281980&t=176)** And on this page I will now log in with my credentials
>
> **[3:05](https://www.linkedin.com/learning/advanced-express/protecting-routes?u=76281980&t=185)** and now I will navigate to /users/registration
>
> **[3:13](https://www.linkedin.com/learning/advanced-express/protecting-routes?u=76281980&t=193)** and this leads me back to account.
>
> **[3:16](https://www.linkedin.com/learning/advanced-express/protecting-routes?u=76281980&t=196)** and let's try the same for /login and this works as well.
>
> **[3:23](https://www.linkedin.com/learning/advanced-express/protecting-routes?u=76281980&t=203)** With that we are done with implementing authenticating authorization for our project.
>
> **[3:28](https://www.linkedin.com/learning/advanced-express/protecting-routes?u=76281980&t=208)** In the next chapters we will learn how to upload files and manipulate images in Express.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3)
> **File Paths:** index.js (1)
> **Env Vars:** error (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** navigate to (1)
> **Speakers:** - [instructor] (1)


### 4. Handle File Uploads and Process Images

[↑ Back to Table of Contents](#table-of-contents)

#### [File upload basics](https://www.linkedin.com/learning/advanced-express/file-upload-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-express/file-upload-basics?u=76281980&t=0)** - [Instructor] When we look at our registration form, we see that it already contains a file upload field.
>
> **[0:05](https://www.linkedin.com/learning/advanced-express/file-upload-basics?u=76281980&t=5)** Now one could assume that this is sufficient to send a file to a server.
>
> **[0:10](https://www.linkedin.com/learning/advanced-express/file-upload-basics?u=76281980&t=10)** Unfortunately, it's not that easy.
>
> **[0:12](https://www.linkedin.com/learning/advanced-express/file-upload-basics?u=76281980&t=12)** Let's fill out the form and inspect the payloads to understand the problems so I'm just putting in some bogus data.
>
> **[0:22](https://www.linkedin.com/learning/advanced-express/file-upload-basics?u=76281980&t=22)** Some password, and I will also choose a file to be uploaded and I'm opening from development tools I select preserve log so that the redirect won't clear the history and I click submit.
>
> **[0:40](https://www.linkedin.com/learning/advanced-express/file-upload-basics?u=76281980&t=40)** Now when I look into this registration request, we see on the bottom of the headers the request headers.
>
> **[0:50](https://www.linkedin.com/learning/advanced-express/file-upload-basics?u=76281980&t=50)** If we scroll down in it, we see that there is also a section for form data.
>
> **[0:56](https://www.linkedin.com/learning/advanced-express/file-upload-basics?u=76281980&t=56)** And there we see that we are transmitting a few fields.
>
> **[1:00](https://www.linkedin.com/learning/advanced-express/file-upload-basics?u=76281980&t=60)** If we look at the source, we see that the data is encoded similar to a theory stream if we do a get request.
>
> **[1:10](https://www.linkedin.com/learning/advanced-express/file-upload-basics?u=76281980&t=70)** We also see in the payload that while the file name of the uploaded image was sent, the binary data is missing.
>
> **[1:18](https://www.linkedin.com/learning/advanced-express/file-upload-basics?u=76281980&t=78)** This is because, to upload a file, we need to change the encoding of the form to multipart form data.
>
> **[1:25](https://www.linkedin.com/learning/advanced-express/file-upload-basics?u=76281980&t=85)** Let's do that in our template.
>
> **[1:27](https://www.linkedin.com/learning/advanced-express/file-upload-basics?u=76281980&t=87)** So for that, I'm heading back to Visual Studio Code and then I'm opening server, views, users, registation.pug, and there on the form I will now add enctype=multipart /form-data.
>
> **[1:48](https://www.linkedin.com/learning/advanced-express/file-upload-basics?u=76281980&t=108)** Now let's head back to the browser and I'm using history back to get back to the registration form and then reload it, let's clear the log, and now let's try to send the form again.
>
> **[2:10](https://www.linkedin.com/learning/advanced-express/file-upload-basics?u=76281980&t=130)** I'm again putting some bogus data and I choose, again, a file and then submit.
>
> **[2:24](https://www.linkedin.com/learning/advanced-express/file-upload-basics?u=76281980&t=144)** We now see that the payload has changed drastically.
>
> **[2:27](https://www.linkedin.com/learning/advanced-express/file-upload-basics?u=76281980&t=147)** You see that, for instance, with the content type that is set to multipart form data and there is some boundary defined and we also don't see any past form data because it's now sent binary.
>
> **[2:40](https://www.linkedin.com/learning/advanced-express/file-upload-basics?u=76281980&t=160)** We now also get an error message because the route is suddenly missing the data and the validator of Mongoose kicks in.
>
> **[2:48](https://www.linkedin.com/learning/advanced-express/file-upload-basics?u=76281980&t=168)** This is because the expressed body parser does not understand multipart bodies.
>
> **[2:53](https://www.linkedin.com/learning/advanced-express/file-upload-basics?u=76281980&t=173)** To make this work, we need a special middleware that can work with such data.
>
> **[2:58](https://www.linkedin.com/learning/advanced-express/file-upload-basics?u=76281980&t=178)** In the following video, we will change our registration route so that it will be able to receive the avatar image along with the other form fields in request body as before.

> [!info]- Semantic Content
>
> **Analogies:** similar to (1), for instance (1)
> **CLI Commands:** make (1)
> **Tools:** visual studio (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### [Handling multipart form data with multer](https://www.linkedin.com/learning/advanced-express/handling-multipart-form-data-with-multer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-express/handling-multipart-form-data-with-multer?u=76281980&t=0)** - [Instructor] As mentioned in the previous video, we need a middleware that can handle multipart form data and the module of choice for that is called multer.
>
> **[0:09](https://www.linkedin.com/learning/advanced-express/handling-multipart-form-data-with-multer?u=76281980&t=9)** Let's install it by running [[npm]] install --save multer.
>
> **[0:18](https://www.linkedin.com/learning/advanced-express/handling-multipart-form-data-with-multer?u=76281980&t=18)** Now we have to require and set up multer.
>
> **[0:21](https://www.linkedin.com/learning/advanced-express/handling-multipart-form-data-with-multer?u=76281980&t=21)** I don't want to clutter my route with it, so I will create a new file middlewares.js in routes.
>
> **[0:28](https://www.linkedin.com/learning/advanced-express/handling-multipart-form-data-with-multer?u=76281980&t=28)** So, down here in server, routes, I create a new file, middlewares.js.
>
> **[0:38](https://www.linkedin.com/learning/advanced-express/handling-multipart-form-data-with-multer?u=76281980&t=38)** In there I will now require multer and now we of course have to set it up.
>
> **[0:50](https://www.linkedin.com/learning/advanced-express/handling-multipart-form-data-with-multer?u=76281980&t=50)** So, I add const upload equals multer and we can parametrize multer now with configuration and they're about to limit the file size.
>
> **[1:05](https://www.linkedin.com/learning/advanced-express/handling-multipart-form-data-with-multer?u=76281980&t=65)** This is especially important because we won't configure multer to destroy the file on disk and the default is storing it in memory.
>
> **[1:12](https://www.linkedin.com/learning/advanced-express/handling-multipart-form-data-with-multer?u=76281980&t=72)** Allowing unlimited file sizes here could easily be used to create a denial-of-service attack.
>
> **[1:19](https://www.linkedin.com/learning/advanced-express/handling-multipart-form-data-with-multer?u=76281980&t=79)** So, for the limits I will now add fileSize and this should be four megabytes.
>
> **[1:37](https://www.linkedin.com/learning/advanced-express/handling-multipart-form-data-with-multer?u=76281980&t=97)** Let's fix the indents really quick.
>
> **[1:47](https://www.linkedin.com/learning/advanced-express/handling-multipart-form-data-with-multer?u=76281980&t=107)** Now all that is left to do is to export this configured multer instance, so I add multer.exports.upload equals upload.
>
> **[2:04](https://www.linkedin.com/learning/advanced-express/handling-multipart-form-data-with-multer?u=76281980&t=124)** Now let's head over to our users, index.js file with the routes in it and there I simply add const middlewares equals require middlewares.
>
> **[2:23](https://www.linkedin.com/learning/advanced-express/handling-multipart-form-data-with-multer?u=76281980&t=143)** Next we have to modify the post route for the registration, so I'm scrolling down 'til I find the post route in line 26 and there I will now add middlewares.upload and there we set the upload.single, so we want to accept the single file upload and for that we also set the field name we are looking for, the field is named avatar and that's it.
>
> **[2:59](https://www.linkedin.com/learning/advanced-express/handling-multipart-form-data-with-multer?u=76281980&t=179)** Multer will give us the uploaded result in request.files and the regular form fields in request.body as before.
>
> **[3:08](https://www.linkedin.com/learning/advanced-express/handling-multipart-form-data-with-multer?u=76281980&t=188)** I will now use the debugger to set a breakpoint to see if this works as intended, so I'm setting a breakpoint here in line 29 and I'm starting the debugger and let's head over back to our website and here I will fill out the form
>
> **[3:39](https://www.linkedin.com/learning/advanced-express/handling-multipart-form-data-with-multer?u=76281980&t=219)** and I select the file to be uploaded.
>
> **[3:45](https://www.linkedin.com/learning/advanced-express/handling-multipart-form-data-with-multer?u=76281980&t=225)** Let's submit.
>
> **[3:47](https://www.linkedin.com/learning/advanced-express/handling-multipart-form-data-with-multer?u=76281980&t=227)** And now you see that we hit this breakpoint.
>
> **[3:51](https://www.linkedin.com/learning/advanced-express/handling-multipart-form-data-with-multer?u=76281980&t=231)** Let's see which variables we have available, so I click on Local and there I open request
>
> **[4:03](https://www.linkedin.com/learning/advanced-express/handling-multipart-form-data-with-multer?u=76281980&t=243)** and there I have to scroll down a little bit and we see that we have the request body now again with the regular form fields and further down we now also have a file object that contains a buffer with binary data along with some [[Metadata]] to tell us more about the actually uploaded file.
>
> **[4:26](https://www.linkedin.com/learning/advanced-express/handling-multipart-form-data-with-multer?u=76281980&t=266)** So far so good.
>
> **[4:27](https://www.linkedin.com/learning/advanced-express/handling-multipart-form-data-with-multer?u=76281980&t=267)** In the next video, we will work on resizing and storing this file.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (1), [[Metadata]] (1)
> **Prerequisites:** install (2), set up (1), configure (1)
> **File Paths:** middlewares.js (2), index.js (1)
> **UI Navigation:** select the (1), click on (1), scroll down (1)
> **CLI Commands:** npm (1), find (1)
> **Cross-References:** previous video (1), in the next (1)
> **Code Identifiers:** filesize (1)
> **Definitions:** is called (1)

#### [Resizing and storing images with sharp](https://www.linkedin.com/learning/advanced-express/resizing-and-storing-images-with-sharp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-express/resizing-and-storing-images-with-sharp?u=76281980&t=0)** - [Narrator] By now, we have a buffer that contains our image data and some meetup information for the image.
>
> **[0:06](https://www.linkedin.com/learning/advanced-express/resizing-and-storing-images-with-sharp?u=76281980&t=6)** In this video, we will convert the image to PNG, to not having to deal with different file formats, and we shrink the image to a maximum size needed on our page to save some disk space.
>
> **[0:18](https://www.linkedin.com/learning/advanced-express/resizing-and-storing-images-with-sharp?u=76281980&t=18)** There are several modules that deal with image manipulation available; I personally prefer sharp.
>
> **[0:24](https://www.linkedin.com/learning/advanced-express/resizing-and-storing-images-with-sharp?u=76281980&t=24)** It provides plenty of image manipulation methods and a good performance.
>
> **[0:28](https://www.linkedin.com/learning/advanced-express/resizing-and-storing-images-with-sharp?u=76281980&t=28)** So let's install it now by running [[npm]] install --save sharp, and we will need image manipulation functions on different places, so it makes sense to create this service class for that.
>
> **[0:43](https://www.linkedin.com/learning/advanced-express/resizing-and-storing-images-with-sharp?u=76281980&t=43)** So I will now go into server, services, and there I create a new file: AvatarService.js.
>
> **[0:54](https://www.linkedin.com/learning/advanced-express/resizing-and-storing-images-with-sharp?u=76281980&t=54)** There, of course, first, bring const sharp = require('sharp'), and we need need a few more modules, because I want to automatically create file names.
>
> **[1:09](https://www.linkedin.com/learning/advanced-express/resizing-and-storing-images-with-sharp?u=76281980&t=69)** For that, we will use uuidv4 = require('uuid'),
>
> **[1:21](https://www.linkedin.com/learning/advanced-express/resizing-and-storing-images-with-sharp?u=76281980&t=81)** and we take the version four here, and we need util, and also we will need path to deal with file path,
>
> **[1:45](https://www.linkedin.com/learning/advanced-express/resizing-and-storing-images-with-sharp?u=76281980&t=105)** and also because we are dealing with files, we will need file system methods, so I add require('fs').
>
> **[1:55](https://www.linkedin.com/learning/advanced-express/resizing-and-storing-images-with-sharp?u=76281980&t=115)** Next, as we want to use unlink to delete files later, I will create a promisified version of unlink, so I call is fsunlink, which is util.promisify(fs.unlink),
>
> **[2:17](https://www.linkedin.com/learning/advanced-express/resizing-and-storing-images-with-sharp?u=76281980&t=137)** so this will wrap this function to return a promise.
>
> **[2:23](https://www.linkedin.com/learning/advanced-express/resizing-and-storing-images-with-sharp?u=76281980&t=143)** Now let's start implementing the class, so I add a class AvatarService.
>
> **[2:30](https://www.linkedin.com/learning/advanced-express/resizing-and-storing-images-with-sharp?u=76281980&t=150)** And let's fix the indents real quick, so I'm using two spaces here.
>
> **[2:38](https://www.linkedin.com/learning/advanced-express/resizing-and-storing-images-with-sharp?u=76281980&t=158)** And first, let's implement a constructor, and this constructor gets a directory; that's the directory where we want to store files, and then I create a member variable from it: this.directory = directory.
>
> **[3:02](https://www.linkedin.com/learning/advanced-express/resizing-and-storing-images-with-sharp?u=76281980&t=182)** Next, we need a function that does the storing of the file, and also the resizing, so add a new function, async store, and this function will take a buffer from alter.
>
> **[3:16](https://www.linkedin.com/learning/advanced-express/resizing-and-storing-images-with-sharp?u=76281980&t=196)** And I also want to create two little helper functions; first is static filename(), and this will simply create a file name for us.
>
> **[3:28](https://www.linkedin.com/learning/advanced-express/resizing-and-storing-images-with-sharp?u=76281980&t=208)** And in return, a uuidv4 string, and we take the extension .png, because will create PNG files.
>
> **[3:42](https://www.linkedin.com/learning/advanced-express/resizing-and-storing-images-with-sharp?u=76281980&t=222)** And I will also create a new helper function filepath,
>
> **[3:50](https://www.linkedin.com/learning/advanced-express/resizing-and-storing-images-with-sharp?u=76281980&t=230)** which takes a filename, and returns the full path to this file, path.resolve, and in there, I use this.directory;
>
> **[4:08](https://www.linkedin.com/learning/advanced-express/resizing-and-storing-images-with-sharp?u=76281980&t=248)** that's the directory from the constructor, and /$(filename).
>
> **[4:24](https://www.linkedin.com/learning/advanced-express/resizing-and-storing-images-with-sharp?u=76281980&t=264)** Now back to our store function; we can now add const filename = AvatarService, so because it's a static method, because it does not contain any reference to the class via this AvatarService.filename, and we also want to create the filepath now, const filepath = this.filepath,
>
> **[4:59](https://www.linkedin.com/learning/advanced-express/resizing-and-storing-images-with-sharp?u=76281980&t=299)** and we path in the previously created file name.
>
> **[5:04](https://www.linkedin.com/learning/advanced-express/resizing-and-storing-images-with-sharp?u=76281980&t=304)** Now comes the logic to actually resize and store the image, so I add await sharp, and we path in the buffer,
>
> **[5:16](https://www.linkedin.com/learning/advanced-express/resizing-and-storing-images-with-sharp?u=76281980&t=316)** and then we call the resize method on it, and we want to resize it to 300 times 300, and we have to add a few config arguments here, because we want it to fit these constraints, sharp.fit.inside.
>
> **[5:39](https://www.linkedin.com/learning/advanced-express/resizing-and-storing-images-with-sharp?u=76281980&t=339)** And we also don't want these images to be enlarged, because enlarging images always means a loss of image quality.
>
> **[5:52](https://www.linkedin.com/learning/advanced-express/resizing-and-storing-images-with-sharp?u=76281980&t=352)** And, in the end, we want to store it to the event filepath.
>
> **[6:01](https://www.linkedin.com/learning/advanced-express/resizing-and-storing-images-with-sharp?u=76281980&t=361)** And to work with the file that was just created, we will return the file name to a color.
>
> **[6:12](https://www.linkedin.com/learning/advanced-express/resizing-and-storing-images-with-sharp?u=76281980&t=372)** Next, I also want to create a function that can delete images.
>
> **[6:17](https://www.linkedin.com/learning/advanced-express/resizing-and-storing-images-with-sharp?u=76281980&t=377)** For that, I add async, delete, some filename,
>
> **[6:26](https://www.linkedin.com/learning/advanced-express/resizing-and-storing-images-with-sharp?u=76281980&t=386)** and this will run if it's unlinked; it's not promisified, unlink function this.filepath(filename).
>
> **[6:46](https://www.linkedin.com/learning/advanced-express/resizing-and-storing-images-with-sharp?u=76281980&t=406)** In the end, we should not forget to export from this module, so add module.exports = AvatarService.
>
> **[7:00](https://www.linkedin.com/learning/advanced-express/resizing-and-storing-images-with-sharp?u=76281980&t=420)** This should give us all functionality we need for now, and I've created a test that verifies that to around npx mocha, test/server/services/AvatarService.test.js,
>
> **[7:17](https://www.linkedin.com/learning/advanced-express/resizing-and-storing-images-with-sharp?u=76281980&t=437)** and we see that it can deal with PNG images, JPEG images, and it can also delete images.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (1)
> **Env Vars:** png (3), jpeg (1)
> **File Paths:** avatarservice.js (1), test/server/services/avatarservice.test.js (1)
> **CLI Commands:** npm (1), npx (1)
> **Prerequisites:** install (2)
> **Speakers:** - [narrator] (1)

#### [Creating an image handling middleware](https://www.linkedin.com/learning/advanced-express/creating-an-image-handling-middleware?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-express/creating-an-image-handling-middleware?u=76281980&t=0)** - [Instructor] In this video, we will instantiate the previously created class and create the middleware that utilizes it to handle our uploads.
>
> **[0:08](https://www.linkedin.com/learning/advanced-express/creating-an-image-handling-middleware?u=76281980&t=8)** First, we need to make an instance of this class available in our routes, and they are already built in a way that they can accept arguments passed on from other parts of the application.
>
> **[0:19](https://www.linkedin.com/learning/advanced-express/creating-an-image-handling-middleware?u=76281980&t=19)** We can start in server, app.js, and there, right after the feedback service on line 13, I now add const AvatarService equals require services/AvatarService.
>
> **[0:42](https://www.linkedin.com/learning/advanced-express/creating-an-image-handling-middleware?u=76281980&t=42)** Then, a little bit further down, I will now add to line 19 const avatars equals new AvatarService, and we pass in the path where we want to store the images and its config data avatars.
>
> **[1:03](https://www.linkedin.com/learning/advanced-express/creating-an-image-handling-middleware?u=76281980&t=63)** Why can we do that?
>
> **[1:04](https://www.linkedin.com/learning/advanced-express/creating-an-image-handling-middleware?u=76281980&t=64)** Because the sample project already has this set.
>
> **[1:09](https://www.linkedin.com/learning/advanced-express/creating-an-image-handling-middleware?u=76281980&t=69)** In the config file, there is already a path for the avatars defined, and this points to data, avatars, so all images will be stored in this directory.
>
> **[1:21](https://www.linkedin.com/learning/advanced-express/creating-an-image-handling-middleware?u=76281980&t=81)** Next, we have to pass avatars down our [[Routing]] chain, so I'm scrolling down until we have this app.use here, and here, I'm simply passing in avatars.
>
> **[1:34](https://www.linkedin.com/learning/advanced-express/creating-an-image-handling-middleware?u=76281980&t=94)** Next, we have to head into the users route here in routes, users, Index.js.
>
> **[1:42](https://www.linkedin.com/learning/advanced-express/creating-an-image-handling-middleware?u=76281980&t=102)** I will now, first, for the module exports here, add params as argument, and then I will use ES6 destructuring to [[Fetch]] avatars out of the params that have been passed down the chain.
>
> **[2:05](https://www.linkedin.com/learning/advanced-express/creating-an-image-handling-middleware?u=76281980&t=125)** Now, I want to create a middleware that can work with this service class, so I head over to middlewares.js, and there I now add module.exports.handleAvatar.
>
> **[2:22](https://www.linkedin.com/learning/advanced-express/creating-an-image-handling-middleware?u=76281980&t=142)** This function should now accept the service class as argument, and then return a middleware that utilizes this service class.
>
> **[2:32](https://www.linkedin.com/learning/advanced-express/creating-an-image-handling-middleware?u=76281980&t=152)** This is done like that.
>
> **[2:33](https://www.linkedin.com/learning/advanced-express/creating-an-image-handling-middleware?u=76281980&t=153)** So we accept avatars as argument, and then we return a middleware request, response, next, and this middleware will now check if there even was a file uploaded.
>
> **[2:53](https://www.linkedin.com/learning/advanced-express/creating-an-image-handling-middleware?u=76281980&t=173)** This means it has to run after the multer upload took place, so I'm adding if not request file, return next, because we don't have anything to do here.
>
> **[3:10](https://www.linkedin.com/learning/advanced-express/creating-an-image-handling-middleware?u=76281980&t=190)** There is no image.
>
> **[3:13](https://www.linkedin.com/learning/advanced-express/creating-an-image-handling-middleware?u=76281980&t=193)** Then, we want to check if the filename that was uploaded is valid, so I add if req.file, and the [[Metadata]] we are looking for is the mimetype, which is the image type in this case, and if it's not image/png, and if it's also not image/ jpeg, then we want to return an error, return next, new error, which says file format is not supported.
>
> **[4:01](https://www.linkedin.com/learning/advanced-express/creating-an-image-handling-middleware?u=76281980&t=241)** But, if we have a valid image, we will now await avatars.store, and we use the request file buffer that we get from multer.
>
> **[4:17](https://www.linkedin.com/learning/advanced-express/creating-an-image-handling-middleware?u=76281980&t=257)** We should we store the filename that is returned from this function now?
>
> **[4:22](https://www.linkedin.com/learning/advanced-express/creating-an-image-handling-middleware?u=76281980&t=262)** I want to store it in req.file .storedFilename.
>
> **[4:30](https://www.linkedin.com/learning/advanced-express/creating-an-image-handling-middleware?u=76281980&t=270)** This is a very common pattern to use.
>
> **[4:33](https://www.linkedin.com/learning/advanced-express/creating-an-image-handling-middleware?u=76281980&t=273)** If you pass down this information down to other middlewares, you just add it to the request object.
>
> **[4:41](https://www.linkedin.com/learning/advanced-express/creating-an-image-handling-middleware?u=76281980&t=281)** And, we have already a request file object provided by multer.
>
> **[4:46](https://www.linkedin.com/learning/advanced-express/creating-an-image-handling-middleware?u=76281980&t=286)** If we are done here, we will simply return next.
>
> **[4:52](https://www.linkedin.com/learning/advanced-express/creating-an-image-handling-middleware?u=76281980&t=292)** Now, we have to go back into the users Index.js file with the route for posting to registration, and there, after the upload middleware, and there I add now middlewares.
>
> **[5:15](https://www.linkedin.com/learning/advanced-express/creating-an-image-handling-middleware?u=76281980&t=315)** handleAvatar, and we pass in the service class instance as argument, and we will get a middleware back from this function call.
>
> **[5:28](https://www.linkedin.com/learning/advanced-express/creating-an-image-handling-middleware?u=76281980&t=328)** Next, if there was a file uploaded, I now want to store the filename with the user, and for that we have to extend the model a little bit, so I go into models, UserModel.js, and there I want to now also have a new field for avatar, and this is simply of type String.
>
> **[5:56](https://www.linkedin.com/learning/advanced-express/creating-an-image-handling-middleware?u=76281980&t=356)** Okay, let's head back into the route, and now we will implement the logic to actually store this information.
>
> **[6:04](https://www.linkedin.com/learning/advanced-express/creating-an-image-handling-middleware?u=76281980&t=364)** So, if there is a file, and if we also have a filename, then we want to add this information as avatar to the user object.
>
> **[6:31](https://www.linkedin.com/learning/advanced-express/creating-an-image-handling-middleware?u=76281980&t=391)** We see that in the next line, we do the user save, so when user.avatar is set, this will be saved into the database.
>
> **[6:40](https://www.linkedin.com/learning/advanced-express/creating-an-image-handling-middleware?u=76281980&t=400)** Now, also for a little bit of hygiene, we will also extend the catch block a little bit, because what is when maybe user.save fails, then we would still have this orphaned file that was uploaded in our data directory, so if anything goes wrong, we will now add if request file and request file.storedfilename, then we want to delete it, because obviously there is no user stored in the database.
>
> **[7:21](https://www.linkedin.com/learning/advanced-express/creating-an-image-handling-middleware?u=76281980&t=441)** And we pass in the stored filename to the delete function.
>
> **[7:28](https://www.linkedin.com/learning/advanced-express/creating-an-image-handling-middleware?u=76281980&t=448)** Again, I already prepared a test for that, so I run now npx mocha test/server/routes /users/index.fileupload.test.js.
>
> **[7:48](https://www.linkedin.com/learning/advanced-express/creating-an-image-handling-middleware?u=76281980&t=468)** We see that all the tests are green.
>
> **[7:51](https://www.linkedin.com/learning/advanced-express/creating-an-image-handling-middleware?u=76281980&t=471)** Next, we will look into how to serve those images.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (1), [[Fetch]] (1), [[Metadata]] (1)
> **File Paths:** index.js (2), app.js (1), middlewares.js (1), usermodel.js (1), users/index.fileupload.test.js (1)
> **Code Identifiers:** handleavatar (2), storedfilename (1)
> **CLI Commands:** make (1), npx (1)
> **Definitions:** is a  (2)
> **Env Vars:** es6 (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Serving images](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=0)** - [Instructor] With this Image Handling functionality in place for this route, let's try out the form and create a user.
>
> **[0:09](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=9)** So, I create a random user, tim@[example.com](https://example.com).
>
> **[0:15](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=15)** I now have to remember these credentials because I want to login with it later.
>
> **[0:23](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=23)** Some password, and I will use some PNG picture to upload.
>
> **[0:31](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=31)** Let's hit Submit.
>
> **[0:34](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=34)** And next, I will login with this credentials.
>
> **[0:43](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=43)** And we now see that up there on the top right, we see this broken image.
>
> **[0:49](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=49)** This is because the template contains a logic to show a thumbnail if the user has a file pass for avatar set.
>
> **[0:58](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=58)** Additionally, when I click now on this broken image, and go to my account.
>
> **[1:05](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=65)** I see that we also have this image problem here because also here I want to show an avatar picture.
>
> **[1:14](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=74)** So, what we have to do now is we have to implement the logic to surf those pictures.
>
> **[1:20](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=80)** Let's head back into Visual Studio Code, and there, let's really click look at the templates, so that we better understand what we are doing.
>
> **[1:31](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=91)** In Layout includes Header.
>
> **[1:35](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=95)** We see that around line 36, we want to surf from users/avatartn.
>
> **[1:42](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=102)** This should be the thumbnail, and we will pass in the file name of the avatar.
>
> **[1:48](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=108)** Also, when we look into Users Account, we see that we want to surf here from users/avatar.
>
> **[1:56](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=116)** This means we need two routes.
>
> **[1:59](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=119)** One for the avatar image as it is stored in the file system, and also another route that will give us a thumbnail of this avatar.
>
> **[2:09](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=129)** So, let's implement it now.
>
> **[2:10](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=130)** For that, I go back into Routes, Users, Index.js, and let's first implement a route that serves the avatar image.
>
> **[2:23](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=143)** So, for that, let's go to the very bottom, and here I add router.get.
>
> **[2:33](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=153)** This should be avatar/ and we get the file name s argument, request, response, next.
>
> **[2:48](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=168)** And first, we want to add a header that tells the browser which image type it has to expect.
>
> **[2:57](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=177)** So, I add res type.
>
> **[3:00](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=180)** PNG, that's a shortcut by Express.
>
> **[3:03](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=183)** It will then create the correct image header, and I will return res.
>
> **[3:09](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=189)** And now, we are using sendFile.
>
> **[3:11](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=191)** That's a method provided by Express.
>
> **[3:15](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=195)** And we can simply here use avatars, and the file pass.
>
> **[3:22](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=202)** Put a file name.
>
> **[3:24](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=204)** We just got through the Params.
>
> **[3:26](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=206)** Request, params.filename.
>
> **[3:32](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=212)** We don't need a Next here, so let's remove that.
>
> **[3:36](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=216)** Let's restart the application, and head back to the website, and let's reload the account page.
>
> **[3:44](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=224)** And now, the uploaded picture is shown as avatar picture.
>
> **[3:47](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=227)** Then, we also have to implement the route for the thumbnail.
>
> **[3:51](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=231)** So, I'm heading back to Visual Studio Code, and there I go into Services, Avatar Service.
>
> **[3:57](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=237)** And we now have to create a function that creates a thumbnail.
>
> **[4:01](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=241)** And that's quite easy.
>
> **[4:03](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=243)** So, I simply create an Async function and I call it thumbnail, and it gets a filename, and it will then return sharp, and it should load the file, and with this given filename from the file pass.
>
> **[4:27](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=267)** Then, we call .resize.
>
> **[4:31](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=271)** I want to make it 50 times 50.
>
> **[4:37](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=277)** And then, I want to simply create a buffer from it.
>
> **[4:40](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=280)** So, I'm not storing this file at all, I'm simply returning binary data from this function.
>
> **[4:48](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=288)** And back in Index.js, I will now copy the route for the avatar.
>
> **[4:53](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=293)** I call it route to get avatartn for thumbnail, and the file name.
>
> **[5:01](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=301)** And now, we have to call this newly created thumbnail function, so I add, const tn = await avatars.thumnail (req.params.)filename.
>
> **[5:22](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=322)** And then, I will now replace the sendFile with res.end, and we simply pass in the binary buffer and add a second argument binary.
>
> **[5:37](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=337)** And Express will take care of the [[Representational State Transfer (REST)|rest]].
>
> **[5:40](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=340)** And we also have to make this function Async.
>
> **[5:45](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=345)** Let's reload the application.
>
> **[5:49](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=349)** And on the website, let's reload.
>
> **[5:52](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=352)** And now, we also have an avatar picture as thumbnail for the user menu.
>
> **[5:59](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=359)** This is now, also, a good occasion to run all tests that come with the project.
>
> **[6:03](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=363)** So, I will now simply run, [[npm]] run.
>
> **[6:06](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=366)** And this will recursively run all tests in the test directory.
>
> **[6:12](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=372)** And let's see what it gives us.
>
> **[6:15](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=375)** It can take a little bit because it's still plenty of tests.
>
> **[6:19](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=379)** It looks good so far.
>
> **[6:21](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=381)** It's always an exciting moment in a project.
>
> **[6:24](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=384)** And we see that all 32 tests are passing.
>
> **[6:27](https://www.linkedin.com/learning/advanced-express/serving-images?u=76281980&t=387)** This means that we have now flashed out all application logic needed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[npm]] (1)
> **Analogies:** picture (5)
> **CLI Commands:** make (2), npm (1)
> **File Paths:** index.js (2)
> **Code Identifiers:** sendfile (2)
> **Env Vars:** png (2)
> **Tools:** visual studio (2)
> **UI Navigation:** go to (2)


### 5. Deployment and Running in Production

[↑ Back to Table of Contents](#table-of-contents)

#### [Tuning Express performance: NODE_ENV and compression](https://www.linkedin.com/learning/advanced-express/tuning-express-performance-node-env-and-compression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-express/tuning-express-performance-node-env-and-compression?u=76281980&t=0)** - [Narrator] As soon as your application is deployed to server and available to for real users performance becomes key, and this not only about the [[User Experience (UX)|user experience]] of individual users, but also cost effective, because inefficient code needs more resources to run, which forces you to scale up or out.
>
> **[0:19](https://www.linkedin.com/learning/advanced-express/tuning-express-performance-node-env-and-compression?u=76281980&t=19)** The suggestions in this video are loosely based on the performance based practices from the Express website.
>
> **[0:25](https://www.linkedin.com/learning/advanced-express/tuning-express-performance-node-env-and-compression?u=76281980&t=25)** We will implement some of them in this chapter, or I will at least explain them.
>
> **[0:31](https://www.linkedin.com/learning/advanced-express/tuning-express-performance-node-env-and-compression?u=76281980&t=31)** The environment varietal NODE_ENV, is not just a convention to use to distinguish between different configurations in your code.
>
> **[0:39](https://www.linkedin.com/learning/advanced-express/tuning-express-performance-node-env-and-compression?u=76281980&t=39)** It is also used by Express to make assumptions when it comes to caching and login.
>
> **[0:44](https://www.linkedin.com/learning/advanced-express/tuning-express-performance-node-env-and-compression?u=76281980&t=44)** For instance when running in development, templates are not cached, but compiled for each execution, which makes sense, because this lets you work on a template, and seeing the changes without restarting the app every time.
>
> **[0:57](https://www.linkedin.com/learning/advanced-express/tuning-express-performance-node-env-and-compression?u=76281980&t=57)** Of course this comes with a performance penalty and my test indicate that your application can run up to three times slower in development than in production.
>
> **[1:08](https://www.linkedin.com/learning/advanced-express/tuning-express-performance-node-env-and-compression?u=76281980&t=68)** The two sunburst charts you are seeing here show the CPU utilization of an application running in development compared to one running in production, and it's clearly visible that in development the CPU is being more busy.
>
> **[1:22](https://www.linkedin.com/learning/advanced-express/tuning-express-performance-node-env-and-compression?u=76281980&t=82)** Each segment you see is a function on the step, for example the little boxes on the upper left segment on the first chart are just template compiling.
>
> **[1:32](https://www.linkedin.com/learning/advanced-express/tuning-express-performance-node-env-and-compression?u=76281980&t=92)** If you want to learn more about this please look into my blog I've taken from a few years back.
>
> **[1:37](https://www.linkedin.com/learning/advanced-express/tuning-express-performance-node-env-and-compression?u=76281980&t=97)** It's also sited on the [[Express.js]] website.
>
> **[1:41](https://www.linkedin.com/learning/advanced-express/tuning-express-performance-node-env-and-compression?u=76281980&t=101)** Http lets the server and the browser negotiate if the data sent to the server should be compressed or not.
>
> **[1:48](https://www.linkedin.com/learning/advanced-express/tuning-express-performance-node-env-and-compression?u=76281980&t=108)** To enable that on the server side you need a specific middleware called compress.
>
> **[1:53](https://www.linkedin.com/learning/advanced-express/tuning-express-performance-node-env-and-compression?u=76281980&t=113)** After adding this middleware a browser that accepts compressed responses and all modern browsers do may be served a synced version of the [[HTML]] code, which can of course drastically reduce the data to be transferred.
>
> **[2:06](https://www.linkedin.com/learning/advanced-express/tuning-express-performance-node-env-and-compression?u=76281980&t=126)** Let's add this to our application real quick, so I'm heading back to visual studio code.
>
> **[2:13](https://www.linkedin.com/learning/advanced-express/tuning-express-performance-node-env-and-compression?u=76281980&t=133)** First of all before we optimize that, I want to see the current numbers, so I'm heading over to the website and opening Chrome developer tools, and there I will make sure that the cache is disabled, and entrust reloading the page.
>
> **[2:32](https://www.linkedin.com/learning/advanced-express/tuning-express-performance-node-env-and-compression?u=76281980&t=152)** Now let's look at the request for localhost, and we see that it has right now a size of eight dot eight kilobytes, and the time is 475 milliseconds.
>
> **[2:45](https://www.linkedin.com/learning/advanced-express/tuning-express-performance-node-env-and-compression?u=76281980&t=165)** Now let's go into visual studio code and I'm opening app.js and of course I have to install the middleware [[npm]] install dash dash save compression
>
> **[3:03](https://www.linkedin.com/learning/advanced-express/tuning-express-performance-node-env-and-compression?u=76281980&t=183)** and on top of the page I bring in const compression equals require compression
>
> **[3:16](https://www.linkedin.com/learning/advanced-express/tuning-express-performance-node-env-and-compression?u=76281980&t=196)** Now as for all middleware I have to of course also edit to the chain of middlewares and I do that right on top.
>
> **[3:26](https://www.linkedin.com/learning/advanced-express/tuning-express-performance-node-env-and-compression?u=76281980&t=206)** After line 17 I add app.use compression.
>
> **[3:35](https://www.linkedin.com/learning/advanced-express/tuning-express-performance-node-env-and-compression?u=76281980&t=215)** Compression accepts a range of configuration settings, but we go with the defaults here.
>
> **[3:40](https://www.linkedin.com/learning/advanced-express/tuning-express-performance-node-env-and-compression?u=76281980&t=220)** Now I'm starting the application again npm start, and I'm heading back to the browser, let's reload the page now, so let's remember we had eight dot eight kilobytes and let's compare it.
>
> **[3:58](https://www.linkedin.com/learning/advanced-express/tuning-express-performance-node-env-and-compression?u=76281980&t=238)** The time stayed the same, but we see that the size is now three times lower which is plenty.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (2), [[User Experience (UX)|User experience]] (1), [[Express.js]] (1), [[HTML]] (1)
> **CLI Commands:** make (2), npm (2)
> **Env Vars:** cpu (2), node_env (1)
> **File Paths:** express.js (1), app.js (1)
> **Tools:** visual studio (2)
> **Exercise Files:** template (2)
> **Analogies:** for instance (1), for example (1)
> **Prerequisites:** install (2)

#### [Tuning Express performance: Further measures](https://www.linkedin.com/learning/advanced-express/tuning-express-performance-further-measures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-express/tuning-express-performance-further-measures?u=76281980&t=0)** The Express website comes with a few more recommendations regarding performance.
>
> **[0:04](https://www.linkedin.com/learning/advanced-express/tuning-express-performance-further-measures?u=76281980&t=4)** Some we already took into account, some will be implemented during this chapter.
>
> **[0:10](https://www.linkedin.com/learning/advanced-express/tuning-express-performance-further-measures?u=76281980&t=10)** Express recommends to cache request results and in the next video we will implement that in the chief of six fold performance improvement there.
>
> **[0:20](https://www.linkedin.com/learning/advanced-express/tuning-express-performance-further-measures?u=76281980&t=20)** We should not use synchronous functions.
>
> **[0:23](https://www.linkedin.com/learning/advanced-express/tuning-express-performance-further-measures?u=76281980&t=23)** Some functions come in the synchronous and in a asynchronous form, like fs.readFile and fs.readFilesync.
>
> **[0:32](https://www.linkedin.com/learning/advanced-express/tuning-express-performance-further-measures?u=76281980&t=32)** It's not just running a single thread, this means that this NodeJS process, can not handle, any more requests while the synchronous function runs.
>
> **[0:40](https://www.linkedin.com/learning/advanced-express/tuning-express-performance-further-measures?u=76281980&t=40)** While this does not matter if the function, is called infrequently this can become a huge problem, if your site becomes successful and gets more traffic.
>
> **[0:50](https://www.linkedin.com/learning/advanced-express/tuning-express-performance-further-measures?u=76281980&t=50)** A synchronous function utilized in NodeJS event loop and will free the NodeJS process to do other work until the function returns with a promise or a callback.
>
> **[1:00](https://www.linkedin.com/learning/advanced-express/tuning-express-performance-further-measures?u=76281980&t=60)** Remember the decrypt function we used to hash passwords.
>
> **[1:03](https://www.linkedin.com/learning/advanced-express/tuning-express-performance-further-measures?u=76281980&t=63)** This is a good example, we used the asynchronous function because otherwise each time I use the release change, the hashing would have blocked NodeJS.
>
> **[1:12](https://www.linkedin.com/learning/advanced-express/tuning-express-performance-further-measures?u=76281980&t=72)** Express also recommends to not use console.log because it's synchronous.
>
> **[1:18](https://www.linkedin.com/learning/advanced-express/tuning-express-performance-further-measures?u=76281980&t=78)** In this chapter we will use a, dedicated asynchronous logger to replace console.log.
>
> **[1:25](https://www.linkedin.com/learning/advanced-express/tuning-express-performance-further-measures?u=76281980&t=85)** If errors aren't handled and exceptions aren't caught, the node process might terminate with a crash, even if we use a process manager that then restarts the process.
>
> **[1:36](https://www.linkedin.com/learning/advanced-express/tuning-express-performance-further-measures?u=76281980&t=96)** This will of course impact performance.
>
> **[1:40](https://www.linkedin.com/learning/advanced-express/tuning-express-performance-further-measures?u=76281980&t=100)** NodeJS is as mentioned single threaded and the search only utilizes one CPU.
>
> **[1:46](https://www.linkedin.com/learning/advanced-express/tuning-express-performance-further-measures?u=76281980&t=106)** By using a cluster module we can distribute requests to multiple processes and utilize the CPU better.
>
> **[1:53](https://www.linkedin.com/learning/advanced-express/tuning-express-performance-further-measures?u=76281980&t=113)** We will do that in this chapter as well.
>
> **[1:56](https://www.linkedin.com/learning/advanced-express/tuning-express-performance-further-measures?u=76281980&t=116)** Now let's go ahead and implement some of the optimizations we just talked about.

> [!info]- Semantic Content
>
> **Definitions:** means that (1), is called (1), is a  (1)
> **Code Identifiers:** readfile (1), readfilesync (1)
> **Env Vars:** cpu (2)
> **CLI Commands:** node (1)
> **Cross-References:** in the next (1)

#### [Add logging](https://www.linkedin.com/learning/advanced-express/add-logging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-express/add-logging?u=76281980&t=0)** - [Instructor] As mentioned console log is synchronous and not recommended for production.
>
> **[0:06](https://www.linkedin.com/learning/advanced-express/add-logging?u=76281980&t=6)** Additionally it does not let us use different log levels depending on the environment we are in.
>
> **[0:11](https://www.linkedin.com/learning/advanced-express/add-logging?u=76281980&t=11)** If we look at the warnings we also see that it complains about the usage of console log.
>
> **[0:19](https://www.linkedin.com/learning/advanced-express/add-logging?u=76281980&t=19)** We will use bunyan, a dedicated logging module to implement production grade logging for our application now.
>
> **[0:26](https://www.linkedin.com/learning/advanced-express/add-logging?u=76281980&t=26)** We will also make the logging use different log levels depending on the environment we are running in.
>
> **[0:33](https://www.linkedin.com/learning/advanced-express/add-logging?u=76281980&t=33)** To do that, we will now extend our config module a little.
>
> **[0:37](https://www.linkedin.com/learning/advanced-express/add-logging?u=76281980&t=37)** So I'm going into server, config.
>
> **[0:40](https://www.linkedin.com/learning/advanced-express/add-logging?u=76281980&t=40)** Index js, and first I have to install Bunyan.
>
> **[0:46](https://www.linkedin.com/learning/advanced-express/add-logging?u=76281980&t=46)** So I go ahead and run [[npm]] install, dash, dash save, bunyan.
>
> **[0:52](https://www.linkedin.com/learning/advanced-express/add-logging?u=76281980&t=52)** and of course I have to require so add const bunyan equals require bunyan.
>
> **[1:05](https://www.linkedin.com/learning/advanced-express/add-logging?u=76281980&t=65)** Next, let's prepare some configuration depending on the environment.
>
> **[1:12](https://www.linkedin.com/learning/advanced-express/add-logging?u=76281980&t=72)** So somewhere before the module exports starts I will now add const loggers equals.
>
> **[1:26](https://www.linkedin.com/learning/advanced-express/add-logging?u=76281980&t=86)** So we need a logger for development.
>
> **[1:28](https://www.linkedin.com/learning/advanced-express/add-logging?u=76281980&t=88)** And this should be a function, because we want to lazy load those and instantiate all of them.
>
> **[1:38](https://www.linkedin.com/learning/advanced-express/add-logging?u=76281980&t=98)** So add bunyan dot create logger and I want to pass in the name, and in this case it's just the environment we are running and I want to add the log level.
>
> **[1:53](https://www.linkedin.com/learning/advanced-express/add-logging?u=76281980&t=113)** And, for development, it makes sense to use debug.
>
> **[1:59](https://www.linkedin.com/learning/advanced-express/add-logging?u=76281980&t=119)** Let's duplicate those lines and let's add production.
>
> **[2:05](https://www.linkedin.com/learning/advanced-express/add-logging?u=76281980&t=125)** And test.
>
> **[2:10](https://www.linkedin.com/learning/advanced-express/add-logging?u=76281980&t=130)** And for production of course the name should be production and the log level in production environment should be information and test.
>
> **[2:23](https://www.linkedin.com/learning/advanced-express/add-logging?u=76281980&t=143)** The only one to show fatal errors because otherwise it would just clutter our testing results.
>
> **[2:31](https://www.linkedin.com/learning/advanced-express/add-logging?u=76281980&t=151)** Next, I will simply go ahead into the respective environment configurations and add a property log.
>
> **[2:42](https://www.linkedin.com/learning/advanced-express/add-logging?u=76281980&t=162)** And for development, it should be loggers dot development and let's copy this line and go ahead to production, it should be loggers production.
>
> **[2:56](https://www.linkedin.com/learning/advanced-express/add-logging?u=76281980&t=176)** And, for test it should be loggers dot test.
>
> **[3:06](https://www.linkedin.com/learning/advanced-express/add-logging?u=76281980&t=186)** Now we want to of course use this logger.
>
> **[3:08](https://www.linkedin.com/learning/advanced-express/add-logging?u=76281980&t=188)** So I'm going into bin www and there we already have the config available obviously and now I will simply bring in the log from the config by adding const log equals config dot log.
>
> **[3:30](https://www.linkedin.com/learning/advanced-express/add-logging?u=76281980&t=210)** Don't forget the parentheses here because we are executing a function.
>
> **[3:37](https://www.linkedin.com/learning/advanced-express/add-logging?u=76281980&t=217)** Now let's look for console log statements and I will simply search and replace the now console log with log dot info.
>
> **[3:56](https://www.linkedin.com/learning/advanced-express/add-logging?u=76281980&t=236)** And additionally I want to replace the console error messages and they should be log dot fatal.
>
> **[4:15](https://www.linkedin.com/learning/advanced-express/add-logging?u=76281980&t=255)** Now let's start the application to see if everything still works.
>
> **[4:21](https://www.linkedin.com/learning/advanced-express/add-logging?u=76281980&t=261)** And we see that we get now output from bunyan and the output from bunyan is by default jason, maybe we want it to be a little bit more human friendly so I go into package Jason and there I now just add to the start script.
>
> **[4:39](https://www.linkedin.com/learning/advanced-express/add-logging?u=76281980&t=279)** Hypen and bunyan because bunyan has a console formatter we will and restart now.
>
> **[4:49](https://www.linkedin.com/learning/advanced-express/add-logging?u=76281980&t=289)** We see that we get now a formatted output on the console.
>
> **[4:54](https://www.linkedin.com/learning/advanced-express/add-logging?u=76281980&t=294)** As the logger is now part of our config it's easy to pass it around in our application wherever we need it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (1)
> **CLI Commands:** make (1), npm (1)
> **Best Practices:** recommended (1), don't forget (1)
> **Prerequisites:** install (2)
> **Speakers:** - [instructor] (1)

#### [Using the Node.js cluster module](https://www.linkedin.com/learning/advanced-express/using-the-node-js-cluster-module?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-express/using-the-node-js-cluster-module?u=76281980&t=0)** - [Instructor] [[Node.js]] runs in a single process, and basically in one thread.
>
> **[0:05](https://www.linkedin.com/learning/advanced-express/using-the-node-js-cluster-module?u=76281980&t=5)** This means that it does not fully utilize all CPUs on a host.
>
> **[0:09](https://www.linkedin.com/learning/advanced-express/using-the-node-js-cluster-module?u=76281980&t=9)** To remedy this, Node.js provides a cluster module, that will spin up chart processes.
>
> **[0:15](https://www.linkedin.com/learning/advanced-express/using-the-node-js-cluster-module?u=76281980&t=15)** Under the hood, Node.js then uses interprocess communication to distribute the load between the chart processes, round robin.
>
> **[0:24](https://www.linkedin.com/learning/advanced-express/using-the-node-js-cluster-module?u=76281980&t=24)** Node cluster is not the only way to achieve this.
>
> **[0:27](https://www.linkedin.com/learning/advanced-express/using-the-node-js-cluster-module?u=76281980&t=27)** For example, if you use the process manager PM2, as we will do later, it can be configured to scale up to all CPUs as well.
>
> **[0:36](https://www.linkedin.com/learning/advanced-express/using-the-node-js-cluster-module?u=76281980&t=36)** Still, to understand the basic principle behind clustering, we will now implement this from scratch using Node cluster.
>
> **[0:44](https://www.linkedin.com/learning/advanced-express/using-the-node-js-cluster-module?u=76281980&t=44)** Before we optimize this, let's run a little load test against our current application.
>
> **[0:50](https://www.linkedin.com/learning/advanced-express/using-the-node-js-cluster-module?u=76281980&t=50)** So, on the console, I'm using a patch bench, and we want to concur and see if 10, and I'm running one hundred request against the website.
>
> **[1:09](https://www.linkedin.com/learning/advanced-express/using-the-node-js-cluster-module?u=76281980&t=69)** This takes a little bit, and we see that we have a time per request of around 39 milliseconds.
>
> **[1:19](https://www.linkedin.com/learning/advanced-express/using-the-node-js-cluster-module?u=76281980&t=79)** Now, let's see what we can gain by using the cluster module.
>
> **[1:22](https://www.linkedin.com/learning/advanced-express/using-the-node-js-cluster-module?u=76281980&t=82)** I'm in bin www, cluster is core module of Node.js, so, I don't have to insert anything in here.
>
> **[1:32](https://www.linkedin.com/learning/advanced-express/using-the-node-js-cluster-module?u=76281980&t=92)** I'm just requiring cluster, and it also wants to require the os which is also core module that gives us access to some operating system information.
>
> **[1:49](https://www.linkedin.com/learning/advanced-express/using-the-node-js-cluster-module?u=76281980&t=109)** From this os module, I can now query the number of CPUs.
>
> **[1:56](https://www.linkedin.com/learning/advanced-express/using-the-node-js-cluster-module?u=76281980&t=116)** Const numCPUs equals os dot cpus parenthesis, dot length.
>
> **[2:05](https://www.linkedin.com/learning/advanced-express/using-the-node-js-cluster-module?u=76281980&t=125)** You will see in the setting, while we are doing that, I'm scrolling down all the way to line 46, and after this line, so, after the instance of the server was created, I now add the logic for the clustering.
>
> **[2:21](https://www.linkedin.com/learning/advanced-express/using-the-node-js-cluster-module?u=76281980&t=141)** And here, at first, say if cluster is master, so, that's the case when we are the master process.
>
> **[2:31](https://www.linkedin.com/learning/advanced-express/using-the-node-js-cluster-module?u=76281980&t=151)** That's the process that starts first.
>
> **[2:35](https://www.linkedin.com/learning/advanced-express/using-the-node-js-cluster-module?u=76281980&t=155)** I will do a log of info, master, dollar, process, dot, pid, is running.
>
> **[2:51](https://www.linkedin.com/learning/advanced-express/using-the-node-js-cluster-module?u=76281980&t=171)** So, we will get the process id of the master process, and then I will use a for loop to create workers for each free CPU.
>
> **[3:04](https://www.linkedin.com/learning/advanced-express/using-the-node-js-cluster-module?u=76281980&t=184)** So, I lower than num CPUs, because one CPUs should be dedicated to the master process as well.
>
> **[3:16](https://www.linkedin.com/learning/advanced-express/using-the-node-js-cluster-module?u=76281980&t=196)** One, so for each CPU we will do a cluster with fork which creates a worker.
>
> **[3:25](https://www.linkedin.com/learning/advanced-express/using-the-node-js-cluster-module?u=76281980&t=205)** We also want to handle errors here, so, cluster on exit, so if something goes wrong, this event gets the, just that worker process, and there,
>
> **[3:43](https://www.linkedin.com/learning/advanced-express/using-the-node-js-cluster-module?u=76281980&t=223)** I copy over that log line from line 49.
>
> **[3:48](https://www.linkedin.com/learning/advanced-express/using-the-node-js-cluster-module?u=76281980&t=228)** But this time it's a log fatal, and it's worker process,
>
> **[3:58](https://www.linkedin.com/learning/advanced-express/using-the-node-js-cluster-module?u=76281980&t=238)** worker process pid, just died.
>
> **[4:04](https://www.linkedin.com/learning/advanced-express/using-the-node-js-cluster-module?u=76281980&t=244)** And in this case, I want to fork a new worker because otherwise, we would maybe run out of workers, if there was some temporary problem, which lets the workers die.
>
> **[4:17](https://www.linkedin.com/learning/advanced-express/using-the-node-js-cluster-module?u=76281980&t=257)** Next, we will have to add the code to run when we are the chart process, and in this chart process, we will now do this db connect, and the listening part.
>
> **[4:31](https://www.linkedin.com/learning/advanced-express/using-the-node-js-cluster-module?u=76281980&t=271)** So, that's the main application code.
>
> **[4:36](https://www.linkedin.com/learning/advanced-express/using-the-node-js-cluster-module?u=76281980&t=276)** Everything else can stay the same.
>
> **[4:42](https://www.linkedin.com/learning/advanced-express/using-the-node-js-cluster-module?u=76281980&t=282)** And let's now restart the application, and see what happens, and we see the log message that indicates, that all workers have spun up.
>
> **[4:55](https://www.linkedin.com/learning/advanced-express/using-the-node-js-cluster-module?u=76281980&t=295)** Now, let's run a load test again.
>
> **[4:59](https://www.linkedin.com/learning/advanced-express/using-the-node-js-cluster-module?u=76281980&t=299)** So, before we had around 39 milliseconds response time.
>
> **[5:03](https://www.linkedin.com/learning/advanced-express/using-the-node-js-cluster-module?u=76281980&t=303)** Now, let's do that again, and we see that it's now 24 millisecond, which is a pretty good improvement.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (4)
> **CLI Commands:** node (6)
> **File Paths:** node.js (4)
> **Env Vars:** cpu (2), pm2 (1)
> **Definitions:** means that (1), is a  (1)
> **Code Identifiers:** numcpus (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Securing an Express application](https://www.linkedin.com/learning/advanced-express/securing-an-express-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-express/securing-an-express-application?u=76281980&t=0)** - [Narrator] Before we deploy our application to the open world, we should make sure that it fulfills basic security requirements.
>
> **[0:07](https://www.linkedin.com/learning/advanced-express/securing-an-express-application?u=76281980&t=7)** Express comes with a set of recommended best practices.
>
> **[0:11](https://www.linkedin.com/learning/advanced-express/securing-an-express-application?u=76281980&t=11)** Many deal with how secure connections are handled, but we will later use Nginx to do that for us.
>
> **[0:18](https://www.linkedin.com/learning/advanced-express/securing-an-express-application?u=76281980&t=18)** Before we talk about Express as such you should make sure that the dependencies we brought in are secure.
>
> **[0:24](https://www.linkedin.com/learning/advanced-express/securing-an-express-application?u=76281980&t=24)** Newer versions of [[npm]] make this very easy for us.
>
> **[0:27](https://www.linkedin.com/learning/advanced-express/securing-an-express-application?u=76281980&t=27)** We can simply run npm audit and it will check all installed modules for known vulnerabilities and we see that we have 1074 packages installed right now.
>
> **[0:42](https://www.linkedin.com/learning/advanced-express/securing-an-express-application?u=76281980&t=42)** But this is plenty of code and there is plenty that could go wrong.
>
> **[0:45](https://www.linkedin.com/learning/advanced-express/securing-an-express-application?u=76281980&t=45)** So running npm audit frequently like for every deployment makes sense to make sure that there are no packages installed that have known vulnerabilities that can be explored.
>
> **[0:57](https://www.linkedin.com/learning/advanced-express/securing-an-express-application?u=76281980&t=57)** An easy way to add some level of security to Express is using Helmet.
>
> **[1:03](https://www.linkedin.com/learning/advanced-express/securing-an-express-application?u=76281980&t=63)** Helmet combines a set of middlewares that deal with non-attack vectors on websites.
>
> **[1:09](https://www.linkedin.com/learning/advanced-express/securing-an-express-application?u=76281980&t=69)** If we look at the Helmet website we see that the different measures are very well documented.
>
> **[1:14](https://www.linkedin.com/learning/advanced-express/securing-an-express-application?u=76281980&t=74)** So if we look for instance at Hide Powered-By we get a key explanation which attack is prevented with this measure.
>
> **[1:25](https://www.linkedin.com/learning/advanced-express/securing-an-express-application?u=76281980&t=85)** Please take your time to review and understand the different attacks that Helmet can prevent.
>
> **[1:31](https://www.linkedin.com/learning/advanced-express/securing-an-express-application?u=76281980&t=91)** We will now install Helmet into our application for that I go into to Visual Studio code and I simply add npm install helmet and on top of our server.
>
> **[1:44](https://www.linkedin.com/learning/advanced-express/securing-an-express-application?u=76281980&t=104)** App.js file.
>
> **[1:47](https://www.linkedin.com/learning/advanced-express/securing-an-express-application?u=76281980&t=107)** Ubpringing Helmet const helmet equals require helmet.
>
> **[1:58](https://www.linkedin.com/learning/advanced-express/securing-an-express-application?u=76281980&t=118)** And further down after we instantiated the express we will simply add the middleware app.use helmet parentheses and let's start the application.
>
> **[2:14](https://www.linkedin.com/learning/advanced-express/securing-an-express-application?u=76281980&t=134)** And back on the browser, let's open from developer tools.
>
> **[2:21](https://www.linkedin.com/learning/advanced-express/securing-an-express-application?u=76281980&t=141)** Let's reload the page and when we click on the request for localhost we see that helmet set a few headers here that deal with different kinds of attacks.
>
> **[2:34](https://www.linkedin.com/learning/advanced-express/securing-an-express-application?u=76281980&t=154)** Later as mentioned we will add an additional level of security by serving requests not directly from [[Node.js]] but via Ngenix as reverse proxy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (4), [[Node.js]] (1)
> **CLI Commands:** make (4), npm (4), nginx (1), node (1)
> **File Paths:** app.js (1), node.js (1)
> **Prerequisites:** install (2)
> **Tools:** visual studio (1)
> **UI Navigation:** click on (1)
> **Analogies:** for instance (1)
> **Best Practices:** recommended (1)

#### [Deployment and operation with PM2](https://www.linkedin.com/learning/advanced-express/deployment-and-operation-with-pm2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-express/deployment-and-operation-with-pm2?u=76281980&t=0)** - [Instructor] In this video, I will deploy our application to a server using PM2.
>
> **[0:05](https://www.linkedin.com/learning/advanced-express/deployment-and-operation-with-pm2?u=76281980&t=5)** PM2 is a very powerful process manager that also comes with a feature that lets us deploy a project.
>
> **[0:11](https://www.linkedin.com/learning/advanced-express/deployment-and-operation-with-pm2?u=76281980&t=11)** This is a good option for smaller projects.
>
> **[0:13](https://www.linkedin.com/learning/advanced-express/deployment-and-operation-with-pm2?u=76281980&t=13)** In larger projects you might have a whole deployment pipeline that takes care of that.
>
> **[0:19](https://www.linkedin.com/learning/advanced-express/deployment-and-operation-with-pm2?u=76281980&t=19)** As server, I'm using an [[Amazon EC2|EC2]] instance, but any host on the internet will do.
>
> **[0:25](https://www.linkedin.com/learning/advanced-express/deployment-and-operation-with-pm2?u=76281980&t=25)** On this host, I installed [[Node.js]] and PM2 and I created the user Node.js and a directory on Node.js deploy.
>
> **[0:33](https://www.linkedin.com/learning/advanced-express/deployment-and-operation-with-pm2?u=76281980&t=33)** I also added the public SSH key of my development machine to the list of authorized keys.
>
> **[0:40](https://www.linkedin.com/learning/advanced-express/deployment-and-operation-with-pm2?u=76281980&t=40)** PM2 tool relies on [[Git]] to deploy project from.
>
> **[0:42](https://www.linkedin.com/learning/advanced-express/deployment-and-operation-with-pm2?u=76281980&t=42)** For that I pushed it to a [[GitHub]] repository.
>
> **[0:46](https://www.linkedin.com/learning/advanced-express/deployment-and-operation-with-pm2?u=76281980&t=46)** Additionally, I copied my .env file into the deploy directory because it's not published to GitHub for obvious security reasons.
>
> **[0:54](https://www.linkedin.com/learning/advanced-express/deployment-and-operation-with-pm2?u=76281980&t=54)** On [[MongoDB]] Atlas, I also white listed the IP of my server so that it can then connect to the MongoDB cluster.
>
> **[1:05](https://www.linkedin.com/learning/advanced-express/deployment-and-operation-with-pm2?u=76281980&t=65)** To setup the deployment on all development machine, we first have to install PM2.
>
> **[1:10](https://www.linkedin.com/learning/advanced-express/deployment-and-operation-with-pm2?u=76281980&t=70)** I want to install it globally, so I run sudo [[npm]] install -g pm2.
>
> **[1:19](https://www.linkedin.com/learning/advanced-express/deployment-and-operation-with-pm2?u=76281980&t=79)** This asks me for my user password, and then it will install PM2 globally on my development machine.
>
> **[1:29](https://www.linkedin.com/learning/advanced-express/deployment-and-operation-with-pm2?u=76281980&t=89)** As mentioned, PM2 can handle deployments for us.
>
> **[1:32](https://www.linkedin.com/learning/advanced-express/deployment-and-operation-with-pm2?u=76281980&t=92)** For that, it needs a configuration file called ecosystem config js that describes this whole deployment.
>
> **[1:39](https://www.linkedin.com/learning/advanced-express/deployment-and-operation-with-pm2?u=76281980&t=99)** I have created this configuration file for you already.
>
> **[1:42](https://www.linkedin.com/learning/advanced-express/deployment-and-operation-with-pm2?u=76281980&t=102)** You can find it in the exercise files.
>
> **[1:44](https://www.linkedin.com/learning/advanced-express/deployment-and-operation-with-pm2?u=76281980&t=104)** It's in the project root.
>
> **[1:46](https://www.linkedin.com/learning/advanced-express/deployment-and-operation-with-pm2?u=76281980&t=106)** Let's open it and let's go through it real quick.
>
> **[1:50](https://www.linkedin.com/learning/advanced-express/deployment-and-operation-with-pm2?u=76281980&t=110)** First, the file describes which apps need to be deployed, and we want to deploy only one app, and its name meetup.
>
> **[1:59](https://www.linkedin.com/learning/advanced-express/deployment-and-operation-with-pm2?u=76281980&t=119)** We define the start script, and also very important we define that when we push into production, NODE_ENV should be set to production.
>
> **[2:09](https://www.linkedin.com/learning/advanced-express/deployment-and-operation-with-pm2?u=76281980&t=129)** Starting with line 11, we now describe the actual deployment.
>
> **[2:14](https://www.linkedin.com/learning/advanced-express/deployment-and-operation-with-pm2?u=76281980&t=134)** We define the SSH user to be used, the host to connect to, the Git ref, and also the repo to deploy from.
>
> **[2:24](https://www.linkedin.com/learning/advanced-express/deployment-and-operation-with-pm2?u=76281980&t=144)** Then we define the deployment path on the server, and then we have a few post-deploy commands like copying over the env file into the current directory, doing npm install, and then starting the application.
>
> **[2:41](https://www.linkedin.com/learning/advanced-express/deployment-and-operation-with-pm2?u=76281980&t=161)** To setup the server for the first deployment, we have to now run pm2 deploy production setup.
>
> **[2:51](https://www.linkedin.com/learning/advanced-express/deployment-and-operation-with-pm2?u=76281980&t=171)** This will create all the directories and structures on the host.
>
> **[2:57](https://www.linkedin.com/learning/advanced-express/deployment-and-operation-with-pm2?u=76281980&t=177)** And next we want to run pm2 deploy production.
>
> **[3:06](https://www.linkedin.com/learning/advanced-express/deployment-and-operation-with-pm2?u=76281980&t=186)** And this will now deploy the application to the host.
>
> **[3:09](https://www.linkedin.com/learning/advanced-express/deployment-and-operation-with-pm2?u=76281980&t=189)** Let's look into the host real quick.
>
> **[3:12](https://www.linkedin.com/learning/advanced-express/deployment-and-operation-with-pm2?u=76281980&t=192)** So I'm in my deploy directory and there.
>
> **[3:17](https://www.linkedin.com/learning/advanced-express/deployment-and-operation-with-pm2?u=76281980&t=197)** And we now see that pm2 created a few directories with a directory current, which points to the currently running application.
>
> **[3:28](https://www.linkedin.com/learning/advanced-express/deployment-and-operation-with-pm2?u=76281980&t=208)** PM2 keeps also copies of all deployment, so that we can roll back if anything goes wrong.
>
> **[3:35](https://www.linkedin.com/learning/advanced-express/deployment-and-operation-with-pm2?u=76281980&t=215)** Now that the application was deployed, let's see if it's running.
>
> **[3:41](https://www.linkedin.com/learning/advanced-express/deployment-and-operation-with-pm2?u=76281980&t=221)** So I'm running pm2 status, and I see that everything is running as expected.
>
> **[3:47](https://www.linkedin.com/learning/advanced-express/deployment-and-operation-with-pm2?u=76281980&t=227)** And now I'm running pm2 save to preserve this setup.
>
> **[3:51](https://www.linkedin.com/learning/advanced-express/deployment-and-operation-with-pm2?u=76281980&t=231)** And now I also want that this application starts whenever the server started, so I'm running pm2 startup.
>
> **[4:01](https://www.linkedin.com/learning/advanced-express/deployment-and-operation-with-pm2?u=76281980&t=241)** And this gives us a command to execute and this command will add our application to the startup scripts.
>
> **[4:13](https://www.linkedin.com/learning/advanced-express/deployment-and-operation-with-pm2?u=76281980&t=253)** Now of course we're curious if we can access the website, so in my browser opening http and that's my daemon server URL, and I'm connecting to port 3000.
>
> **[4:25](https://www.linkedin.com/learning/advanced-express/deployment-and-operation-with-pm2?u=76281980&t=265)** On EC2 I have for that open to port 3000 on the firewall.
>
> **[4:30](https://www.linkedin.com/learning/advanced-express/deployment-and-operation-with-pm2?u=76281980&t=270)** And we see we have now a website running on the internet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (3), [[Amazon EC2|Ec2]] (2), [[Git]] (2), [[GitHub]] (2), [[MongoDB]] (2)
> **Env Vars:** pm2 (8), ec2 (2), ssh (2), node_env (1), url (1)
> **CLI Commands:** node (3), ssh (2), git (2), npm (2), sudo (1)
> **Prerequisites:** install (5), setup (4)
> **File Paths:** node.js (3)
> **Ports:** port 3000 (2)
> **Tools:** github (2)
> **Definitions:** is a  (2)

#### [Running behind a web server](https://www.linkedin.com/learning/advanced-express/running-behind-a-web-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-express/running-behind-a-web-server?u=76281980&t=0)** - [Instructor] Usually we don't want [[Node.js]] to directly serve a website.
>
> **[0:04](https://www.linkedin.com/learning/advanced-express/running-behind-a-web-server?u=76281980&t=4)** Things like SSL or TLS encryption are doable, but a web server was exactly made for such a task.
>
> **[0:12](https://www.linkedin.com/learning/advanced-express/running-behind-a-web-server?u=76281980&t=12)** That's why the most common setup is running Express Apps behind some reverse proxy like Nginx.
>
> **[0:18](https://www.linkedin.com/learning/advanced-express/running-behind-a-web-server?u=76281980&t=18)** On my [[Amazon EC2|EC2]] instance, I've already installed Engine X and I used Let's Encrypt to install and setup a free SSL certificate.
>
> **[0:28](https://www.linkedin.com/learning/advanced-express/running-behind-a-web-server?u=76281980&t=28)** I've also already took care of the proxy configuration.
>
> **[0:32](https://www.linkedin.com/learning/advanced-express/running-behind-a-web-server?u=76281980&t=32)** Let's look into it real quick.
>
> **[0:36](https://www.linkedin.com/learning/advanced-express/running-behind-a-web-server?u=76281980&t=36)** So I'm going into /etc/nginx/sites-enabled/default, and there now see this section with location /.
>
> **[0:46](https://www.linkedin.com/learning/advanced-express/running-behind-a-web-server?u=76281980&t=46)** So the most important part is the proxy_pass directive here.
>
> **[0:50](https://www.linkedin.com/learning/advanced-express/running-behind-a-web-server?u=76281980&t=50)** This tells Nginx to reverse proxy everything to localhost on port 3000.
>
> **[0:57](https://www.linkedin.com/learning/advanced-express/running-behind-a-web-server?u=76281980&t=57)** For complete overview of all the proxy directives, please refer to the Nginx documentation.
>
> **[1:06](https://www.linkedin.com/learning/advanced-express/running-behind-a-web-server?u=76281980&t=66)** To let Express run behind the proxy properly, we also have to make a few adoptions to the code.
>
> **[1:15](https://www.linkedin.com/learning/advanced-express/running-behind-a-web-server?u=76281980&t=75)** So I had backed individual studio code, and in app.js I will now make a few adjustments.
>
> **[1:25](https://www.linkedin.com/learning/advanced-express/running-behind-a-web-server?u=76281980&t=85)** First of all I want to distinguish if we're running in development or in production.
>
> **[1:30](https://www.linkedin.com/learning/advanced-express/running-behind-a-web-server?u=76281980&t=90)** So now add run line 43, if(app.get('env')), this gives us the current environment we're running on equals production, and I want to do a few things differently.
>
> **[1:52](https://www.linkedin.com/learning/advanced-express/running-behind-a-web-server?u=76281980&t=112)** I'm doing the else branch, and there I copy in, for instance, the setup of the session.
>
> **[2:01](https://www.linkedin.com/learning/advanced-express/running-behind-a-web-server?u=76281980&t=121)** So we're running production means behind a proxy, and Express as an option that tells it that it's running behind a proxy.
>
> **[2:12](https://www.linkedin.com/learning/advanced-express/running-behind-a-web-server?u=76281980&t=132)** If you don't set that, it might happen that the IP address of the users is not reported correctly.
>
> **[2:17](https://www.linkedin.com/learning/advanced-express/running-behind-a-web-server?u=76281980&t=137)** So we are setting trust proxy and we trust here the loopback device, which is our localhost.
>
> **[2:28](https://www.linkedin.com/learning/advanced-express/running-behind-a-web-server?u=76281980&t=148)** And additionally we also want to change the session handling a little bit, so I'm copy over the setup of the session from the else block.
>
> **[2:40](https://www.linkedin.com/learning/advanced-express/running-behind-a-web-server?u=76281980&t=160)** And there, for instance, I want to change the secret, and additionally, I also want to change the session Id name, because if we leave the default, which is connect.sId, someone might be able to infer that this is an Express server, and the less we expose about ourselves, the better.
>
> **[3:06](https://www.linkedin.com/learning/advanced-express/running-behind-a-web-server?u=76281980&t=186)** Next we also want to configure that we are running behind a proxy.
>
> **[3:15](https://www.linkedin.com/learning/advanced-express/running-behind-a-web-server?u=76281980&t=195)** This makes a few more adjustments to how the session management works, and additionally as we're now behind a SSL connection, we can force the browser to only send secure cookies.
>
> **[3:35](https://www.linkedin.com/learning/advanced-express/running-behind-a-web-server?u=76281980&t=215)** Now let's commit it to my [[Version Control]], updated for proxies, and let's upload from here.
>
> **[3:51](https://www.linkedin.com/learning/advanced-express/running-behind-a-web-server?u=76281980&t=231)** Push to the server.
>
> **[3:53](https://www.linkedin.com/learning/advanced-express/running-behind-a-web-server?u=76281980&t=233)** And now we can simply use pm2 update to push our current application, and now we can simply use pm2 deploy production
>
> **[4:09](https://www.linkedin.com/learning/advanced-express/running-behind-a-web-server?u=76281980&t=249)** to push all those changes to the server.
>
> **[4:14](https://www.linkedin.com/learning/advanced-express/running-behind-a-web-server?u=76281980&t=254)** Let's head over to the browser now, and let's open https and the URL where the website is running on, and we see that it's now served via https.
>
> **[4:28](https://www.linkedin.com/learning/advanced-express/running-behind-a-web-server?u=76281980&t=268)** Now let's make a quick test.
>
> **[4:31](https://www.linkedin.com/learning/advanced-express/running-behind-a-web-server?u=76281980&t=271)** Let's register new user.
>
> **[4:38](https://www.linkedin.com/learning/advanced-express/running-behind-a-web-server?u=76281980&t=278)** And password, and we want to upload a picture.
>
> **[4:46](https://www.linkedin.com/learning/advanced-express/running-behind-a-web-server?u=76281980&t=286)** Let's submit, and let's login with this user,
>
> **[4:59](https://www.linkedin.com/learning/advanced-express/running-behind-a-web-server?u=76281980&t=299)** and we see that it works as suspected.
>
> **[5:02](https://www.linkedin.com/learning/advanced-express/running-behind-a-web-server?u=76281980&t=302)** We now have a working website served via https and running on the internet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (1), [[Amazon EC2|Ec2]] (1), [[Version Control]] (1)
> **CLI Commands:** nginx (4), make (3), node (1)
> **Env Vars:** ssl (3), tls (1), ec2 (1), url (1)
> **Prerequisites:** setup (4), install (1), configure (1)
> **Analogies:** for instance (2), picture (1)
> **File Paths:** node.js (1), app.js (1)
> **Code Identifiers:** proxy_pass (1), sid (1)
> **Ports:** port 3000 (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/advanced-express/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-express/next-steps?u=76281980&t=0)** - [Daniel] Thank you for taking this course.
>
> **[0:02](https://www.linkedin.com/learning/advanced-express/next-steps?u=76281980&t=2)** I hope you liked it.
>
> **[0:03](https://www.linkedin.com/learning/advanced-express/next-steps?u=76281980&t=3)** During this course, you've learned how to build an advanced website with Express.
>
> **[0:08](https://www.linkedin.com/learning/advanced-express/next-steps?u=76281980&t=8)** Please check out our library for other advanced courses that show you how to build on this knowledge.
>
> **[0:13](https://www.linkedin.com/learning/advanced-express/next-steps?u=76281980&t=13)** Why not extend your knowledge by watching a course on how to use different [[Databases]] with [[Node.js]].
>
> **[0:18](https://www.linkedin.com/learning/advanced-express/next-steps?u=76281980&t=18)** Or learn how to use Express to create a [[Representational State Transfer (REST)|REST]] API.
>
> **[0:22](https://www.linkedin.com/learning/advanced-express/next-steps?u=76281980&t=22)** Also, knowing how to run your application on cloud providers like AWS and broadening your [[DevOps]] knowledge is a good investment.
>
> **[0:30](https://www.linkedin.com/learning/advanced-express/next-steps?u=76281980&t=30)** I post a lot of Node.js information on Twitter, and I'd be happy if you follow me there.
>
> **[0:36](https://www.linkedin.com/learning/advanced-express/next-steps?u=76281980&t=36)** And if you ever happen to see me at the conference, feel free to hit me up anytime.
>
> **[0:40](https://www.linkedin.com/learning/advanced-express/next-steps?u=76281980&t=40)** So, see you soon.
>
> **[0:42](https://www.linkedin.com/learning/advanced-express/next-steps?u=76281980&t=42)** I'm Daniel Khan.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (2), [[Databases]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[DevOps]] (1)
> **CLI Commands:** node (2), aws (1)
> **Env Vars:** rest (1), api (1), aws (1)
> **File Paths:** node.js (2)
> **Definitions:** is a  (1)
> **Speakers:** - [daniel] (1)


## Instructor

- [[Daniel Khan]]

## Resources

- Exercise files available

## Skills Covered

- Express.js

## Path Context

### In [[Explore Web Development with Node.js]]
← [[Express Essentials- Build Powerful Web Apps with Node.js]] | **6 of 11** | [[Node.js- Web Servers, Tests, and Deployment]] →

### In [[Advance your Node.js Skills]]
← [[Node.js- Debugging and Performance Tuning]] | **5 of 8** | [[Node.js- Microservices]] →

## Appears In

- [[Explore Web Development with Node.js]]
- [[Advance your Node.js Skills]]

## Related Courses

_Courses sharing skills:_

- [[Building a Website with Node.js and Express.js]] — Express.js
- [[Building RESTful APIs with Node.js and Express]] — Express.js
- [[Express Essentials- Build Powerful Web Apps with Node.js]] — Express.js

---

[↑ Back to top](#)