---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: express-essentials-build-powerful-web-apps-with-node-js
url: "https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js"
duration_minutes: 119
duration: 1h 59m
level: Beginner
updated: 2/28/2025
learners: 57292
skills:
  - Express.js
  - Web Application Development
  - Node.js
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQGKtfaW13vibA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1643826197423?e=2147483647&amp;v=beta&amp;t=X81OoNDAWbAW2ZkeAynmerPGMiUmmdbLuq-X-VbDMd0"
linkedin_topic: Web Development
learning_paths:
  - '[[Explore Web Development with Node.js]]'
  - '[[Explore App Development with the MERN Stack]]'
prev_courses:
  - '[[Databases for Node.js Developers]]'
  - '[[Learning npm- A Package Manager]]'
next_courses:
  - '[[Advanced Express]]'
  - '[[Node.js- Testing and Code Quality]]'
path_nav: '[{"path":"Explore Web Development with Node.js","position":5,"total":11,"prev":"Databases for Node.js Developers","next":"Advanced Express"},{"path":"Explore App Development with the MERN Stack","position":5,"total":13,"prev":"Learning npm- A Package Manager","next":"Node.js- Testing and Code Quality"}]'
path_count: 2
tags:
  - course
  - topic/web-development
  - topic/database-management
  - topic/software-development
  - skill/express-js
  - skill/web-application-development
  - skill/node-js
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Express%20Essentials-%20Build%20Powerful%20Web%20Apps%20with%20Node.js.md)

![Express Essentials: Build Powerful Web Apps with Node.js](https://media.licdn.com/dms/image/v2/C560DAQGKtfaW13vibA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1643826197423?e=2147483647&amp;v=beta&amp;t=X81OoNDAWbAW2ZkeAynmerPGMiUmmdbLuq-X-VbDMd0)

# Express Essentials: Build Powerful Web Apps with Node.js

> Are you looking for a quick introduction on the basics of using Express? Express is a flexible, minimalist framework that sits on top of Node.js, allowing you to build powerful websites and web applications with quick and easy-to-use APIs. In this course, full-stack software engineer Jamie Pittman shows you how to get started with this engaging, popular framework.Learn the basics of how to set up 

> [LinkedIn Learning](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js) | 1h 59m | Beginner | 57K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (2 videos)
- **[[#1. Installation and First Steps: Node.js and Express]]** (3 videos)
- **[[#2. Express Basics]]** (6 videos)
- **[[#3. Express Routing Fundamentals]]** (4 videos)
- **[[#4. Express Essentials: Middleware]]** (4 videos)
- **[[#5. Taking Express One Step Further]]** (3 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Generate server-side code with Express
> [LinkedIn Learning](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/generate-server-side-code-with-express-24554156?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/generate-server-side-code-with-express-24554156?u=76281980&t=0)** - [Jamie] If you're a frontend engineer that wants to explore backend or full-stack development, Express is a great first step.
>
> **[0:07](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/generate-server-side-code-with-express-24554156?u=76281980&t=7)** We'll cover everything from installation, creating a server, and the routing knowledge needed to generate server-side code.
>
> **[0:14](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/generate-server-side-code-with-express-24554156?u=76281980&t=14)** I'm Jamie Pittman, and I created this course to help you get up and running with Express.
>
> **[0:19](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/generate-server-side-code-with-express-24554156?u=76281980&t=19)** By the end, you'll be equipped to create a basic endpoint and further your full-stack expertise.
>
> **[0:25](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/generate-server-side-code-with-express-24554156?u=76281980&t=25)** Let's dive in.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [jamie] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-you-should-know?u=76281980&t=0)** - [Instructor] This course provides a beginner to intermediate level overview of Express.
>
> **[0:05](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-you-should-know?u=76281980&t=5)** Express is a Node.js framework that utilizes JavaScript.
>
> **[0:10](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-you-should-know?u=76281980&t=10)** You absolutely do not need to be an expert or senior level developer, but this course does require a basic understanding of JavaScript.
>
> **[0:19](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-you-should-know?u=76281980&t=19)** Advanced knowledge is not a requirement for this course.
>
> **[0:23](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-you-should-know?u=76281980&t=23)** In these first few videos, we will cover installation for Node.js and Express, so don't worry if you do not currently have these installed.
>
> **[0:33](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-you-should-know?u=76281980&t=33)** If you're just starting out, this will be a great way to broaden your knowledge across the back-end stack.
>
> **[0:39](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-you-should-know?u=76281980&t=39)** If you have a few years of development experience under your belt, this will add another skill to your existing arsenal.
>
> **[0:45](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-you-should-know?u=76281980&t=45)** We will primarily be working in a text editor, terminal, and web browser.
>
> **[0:51](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-you-should-know?u=76281980&t=51)** You should be familiar with how to use your favorite text editor and your terminal.
>
> **[0:56](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-you-should-know?u=76281980&t=56)** For this course, I will be working primarily in Visual Studio Code, or VS Code, and using its built-in terminal.
>
> **[1:03](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-you-should-know?u=76281980&t=63)** Please note that you can use whatever editor and terminal program that you are most comfortable with for this course.
>
> **[1:10](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-you-should-know?u=76281980&t=70)** That's all you'll need for this course.
>
> **[1:12](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-you-should-know?u=76281980&t=72)** Now let's get started.

> [!info]- Semantic Content
>
> **Tools:** terminal (4), visual studio (1), vs code (1)
> **File Paths:** node.js (2)
> **CLI Commands:** node (2)
> **Code Keywords:** require (1), let (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### 1. Installation and First Steps: Node.js and Express

> [[#Table of Contents|↑ Back to Table of Contents]]

#### What are Node.js and npm?
> [LinkedIn Learning](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-node-js-and-npm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-node-js-and-npm?u=76281980&t=0)** - [Instructor] Before you can start working with Express, it's important for you to first understand Node.js and NPM, as you will need both of these in order to install and use Express.
>
> **[0:10](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-node-js-and-npm?u=76281980&t=10)** We are going to skin the surface on these technologies.
>
> **[0:14](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-node-js-and-npm?u=76281980&t=14)** So if you need more of a refresher on either one, please check out additional courses in the LinkedIn learning library.
>
> **[0:21](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-node-js-and-npm?u=76281980&t=21)** Node.js is an open source and cross-platform JavaScript runtime environment.
>
> **[0:27](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-node-js-and-npm?u=76281980&t=27)** For those of us who write JavaScript already, this provides us with the means of writing server side code for our applications.
>
> **[0:34](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-node-js-and-npm?u=76281980&t=34)** Basically, you can build a backend environment to communicate with the database, collect data and interact with files using JavaScript.
>
> **[0:42](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-node-js-and-npm?u=76281980&t=42)** This is incredibly convenient for those of us who are more familiar with writing code for the front end.
>
> **[0:49](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-node-js-and-npm?u=76281980&t=49)** Node.js has a vast library of modules to supplement its operations, often referred to as packages.
>
> **[0:56](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-node-js-and-npm?u=76281980&t=56)** Similar to libraries you might install in a JavaScript project, Node.js utilizes packages to provide access to any files you may need for your project.
>
> **[1:06](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-node-js-and-npm?u=76281980&t=66)** Node package manager or NPM is the package manager for Node.js packages.
>
> **[1:12](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-node-js-and-npm?u=76281980&t=72)** Conveniently, NPM is bundled and installed automatically with Node.js.
>
> **[1:18](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-node-js-and-npm?u=76281980&t=78)** Both Node.js and NPM are required to be installed in order to get started with Express.
>
> **[1:24](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-node-js-and-npm?u=76281980&t=84)** Before you install anything, double-check to see if you already have node installed by opening your terminal or whatever application you are using for command line operations.
>
> **[1:34](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-node-js-and-npm?u=76281980&t=94)** Next, type node-v, and you can see I have version 16.13 installed here already.
>
> **[1:43](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-node-js-and-npm?u=76281980&t=103)** And if it returns a version for you as well, you should be all set, node's already installed.
>
> **[1:48](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-node-js-and-npm?u=76281980&t=108)** Now let's double check to see what version of MPM you have installed.
>
> **[1:52](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-node-js-and-npm?u=76281980&t=112)** And we can do this by typing npm-v.
>
> **[1:56](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-node-js-and-npm?u=76281980&t=116)** I have version 8.1 installed with NPM, and if you already have everything installed, you're good to go ahead and proceed to the next video.
>
> **[2:06](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-node-js-and-npm?u=76281980&t=126)** But if not, let's head over to the official Node.js site and let's get node installed.
>
> **[2:12](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-node-js-and-npm?u=76281980&t=132)** This is the official website for Node.js, and on this download page, based on your operating system, Windows, MacOS, or Linux, you can select the proper installer and get the process started.
>
> **[2:24](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-node-js-and-npm?u=76281980&t=144)** Find the operating system for your machine under the LTS tab.
>
> **[2:28](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-node-js-and-npm?u=76281980&t=148)** LTS stands for long-term support.
>
> **[2:31](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-node-js-and-npm?u=76281980&t=151)** It is recommended that you start with this version as you learn Express in this course.
>
> **[2:36](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-node-js-and-npm?u=76281980&t=156)** So I'm going to go ahead and select MacOS installers, since I'm working on a Mac, and once that's downloaded, I'll go ahead and install.
>
> **[2:46](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-node-js-and-npm?u=76281980&t=166)** Now that you have node installed, let's jump back to the terminal and confirm that everything installed properly.
>
> **[2:52](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-node-js-and-npm?u=76281980&t=172)** Just like we did a little bit earlier, we can confirm the version of node that we're using by typing node-v.
>
> **[2:59](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-node-js-and-npm?u=76281980&t=179)** So now if you didn't have this installed, you should now see a version appearing for you that corresponds with the one that you downloaded from the Node.js official site.
>
> **[3:10](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-node-js-and-npm?u=76281980&t=190)** And let's just double-check to see our NPM version, just like we did earlier, npm-v.
>
> **[3:16](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-node-js-and-npm?u=76281980&t=196)** All right, and you should see a version for that come through as well.
>
> **[3:20](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-node-js-and-npm?u=76281980&t=200)** Excellent.
>
> **[3:21](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-node-js-and-npm?u=76281980&t=201)** So now that you have everything installed, you're now ready to start jumping into Express.

> [!info]- Semantic Content
>
> **CLI Commands:** node (18), npm (8), find (1)
> **File Paths:** node.js (10)
> **Env Vars:** npm (6), lts (2), mpm (1)
> **Code Keywords:** let (5)
> **Prerequisites:** install (4), required to (1)
> **Tools:** terminal (2), command line (1)
> **Analogies:** just like (2), similar to (1)
> **Versions:** version 16 (1), version 8 (1)

#### What is Express?
> [LinkedIn Learning](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express?u=76281980&t=0)** - [Narrator] Express is a minimal, flexible, no JS application framework.
>
> **[0:05](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express?u=76281980&t=5)** It is definitely one of the most, if not the most popular framework for no JS.
>
> **[0:11](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express?u=76281980&t=11)** Express is used to make building websites, web applications, and APIs, as easy as possible using JavaScript.
>
> **[0:19](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express?u=76281980&t=19)** It is used to handle and simplify responses from API requests and supports various templating engines to simplify HTML generation.
>
> **[0:28](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express?u=76281980&t=28)** If you're not familiar with templating engines, they're used to create HTML templates with minimal code and give you the ability to feed variables into the templates.
>
> **[0:39](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express?u=76281980&t=39)** To give you a more visual explanation of how Node and Express work in conjunction with what we consider the front-end of an application or the client, here is a diagram that outlines the process.
>
> **[0:50](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express?u=76281980&t=50)** The client sends a request to your Node server, which then relays that request to Express.
>
> **[0:56](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express?u=76281980&t=56)** Express takes the request and generates the appropriate response with the help from Middleware, which we will talk about Middleware more in depth in later videos, and then sends the response back through the Node server to the client.
>
> **[1:11](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express?u=76281980&t=71)** Throughout this course, we will be referencing the Express documentation quite a bit.
>
> **[1:16](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express?u=76281980&t=76)** The intention of this course is to give you a solid foundation in Express, so you can start building applications on your own with little to no assistance.

> [!info]- Semantic Content
>
> **CLI Commands:** node (3), make (1)
> **Env Vars:** html (2), api (1)
> **Definitions:** is a  (2)
> **Speakers:** - [narrator] (1)

#### What is Express Application Generator?
> [LinkedIn Learning](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=0)** - [Instructor] Express Application Generator is a package that allows you to quickly and easily get a skeleton project with Express up and running.
>
> **[0:08](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=8)** Speaking from my own experiences with various projects, sometimes the most difficult part about getting started is setting up a project.
>
> **[0:16](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=16)** This takes any of the guesswork out of the equation.
>
> **[0:19](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=19)** Let's head to the official documentation and get started.
>
> **[0:23](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=23)** Express Application Generator provides several options when setting up your project, including whether or not you'd like to use a specific template engine, or the option to add a gitignore file.
>
> **[0:34](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=34)** Here, we can see that there are a variety of options that are available by typing express -h.
>
> **[0:40](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=40)** When we get to the command line, we will try this together as we set up our own project.
>
> **[0:45](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=45)** For this course, we won't be using Express Application Generator because I want to show you the essentials of Express.
>
> **[0:52](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=52)** However, I do want to briefly walk through the installation of this package and show you how to use it so that you'll be equipped for future projects.
>
> **[1:00](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=60)** Let's go ahead and install Express Application Generator and create an example project.
>
> **[1:08](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=68)** First, let's open the terminal in VS Code.
>
> **[1:10](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=70)** You can do this by clicking View in the main menu, and then selecting terminal.
>
> **[1:15](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=75)** Next, we need to navigate to where we'd like to set up our project.
>
> **[1:19](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=79)** I'm going to navigate to my desktop and set up there, but you have free reign to place your project wherever makes the most sense for you.
>
> **[1:27](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=87)** So first, I'll navigate to my desktop, and you can use tab to auto-complete, which I'll do quite a bit throughout this course.
>
> **[1:34](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=94)** All right, so now I'm on my desktop, and I'm going to create a new folder or directory that I'm going to call express.
>
> **[1:40](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=100)** So I'll do this by using the command, make directory, or mkdir, and then express.
>
> **[1:49](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=109)** Then I'm going to navigate into that folder.
>
> **[1:53](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=113)** And this is where I'm going to create my project using Express Application Generator.
>
> **[1:58](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=118)** So once you're in that folder, we're going to run the command npm install express-generator.
>
> **[2:10](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=130)** All right, once installed, I'm going to go ahead and clear just so I get my terminal nice and clean for us.
>
> **[2:16](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=136)** And now we're going to run that express -h command that we talked about a little bit earlier.
>
> **[2:22](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=142)** And this shows us all the different options that we can use when we're creating our project using Express Application Generator.
>
> **[2:29](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=149)** And you may find that using this out-of-the-box is best for you, or if you want to customize your project, that is totally fine as well.
>
> **[2:37](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=157)** You use whatever options work best for you.
>
> **[2:40](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=160)** There's really no right or wrong way to use this package.
>
> **[2:44](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=164)** For this example, let's go ahead and generate a project that we're going to call a test app.
>
> **[2:49](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=169)** and we want to generate it with a gitignore file using the Handlebars template engine.
>
> **[2:55](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=175)** How do we translate this into the command line to create our project?
>
> **[2:59](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=179)** So when looking at the different options that are available, we can satisfy the requirements that we have, which is again, to use a gitignore file and to create a project using the Handlebars template engine.
>
> **[3:14](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=194)** So the first thing we want to do is type express in the command line.
>
> **[3:18](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=198)** This is going to indicate that we're using that application generator, and then everything that proceeds is going to be any configurations that we add for the project.
>
> **[3:29](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=209)** So the first thing we want to do is add a gitignore file, and we can see that in order to do that, we'll add --git.
>
> **[3:36](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=216)** Then the next thing that we needed to do was add the Handlebars template engine.
>
> **[3:41](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=221)** So we see that in order to do that, we can add --hbs.
>
> **[3:46](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=226)** The last thing that we want to do is add the name of our project, which we're going to call test app.
>
> **[3:53](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=233)** All right, so one more time before we generate this, we'll start with express, and then we're going to add that gitignore file.
>
> **[3:59](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=239)** So we'll add --git.
>
> **[4:02](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=242)** We're going to use the Handlebars templating engine, so add --hbs.
>
> **[4:07](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=247)** And then we're going to call our project testapp.
>
> **[4:11](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=251)** Once our project has been generated, you'll see that you have all of those different commands in the terminal.
>
> **[4:18](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=258)** You can see that in order to install dependencies, you'll use npm install.
>
> **[4:23](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=263)** And then in order to run the app, you have that command there, which we'll come back to here shortly.
>
> **[4:29](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=269)** So let's take a look at the contents now of this folder, and we'll do that by using the command ls.
>
> **[4:35](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=275)** And we can see that we have testapp, and that it's been created in this folder.
>
> **[4:40](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=280)** So let's go ahead and navigate into testapp by doing cd testapp.
>
> **[4:46](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=286)** Next, we're going to install our dependencies.
>
> **[4:48](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=288)** And as it is referenced above, we can do that using npm install.
>
> **[4:56](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=296)** Now that our dependencies have been added, let's open the project in VS Code.
>
> **[5:01](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=301)** You can do this a number of different ways, but I'm going to go to the main menu, and go to File and then Open.
>
> **[5:11](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=311)** And then I'm going to navigate into that testapp directory.
>
> **[5:16](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=316)** So here I know is on my desktop, and in express, and then testapp.
>
> **[5:22](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=322)** All right, and click Open.
>
> **[5:26](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=326)** As you can see, we have quite a few folders ready to go.
>
> **[5:29](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=329)** I'm not going to go through all of them, I just want to hit the highlights.
>
> **[5:33](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=333)** First, we have a node_modules folder that was generated after our npm install.
>
> **[5:38](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=338)** Then we have a public folder.
>
> **[5:39](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=339)** This contains folders with images, JavaScript files, style sheets.
>
> **[5:45](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=345)** Out-of-the-box, Express Application Generator has a style.css sheet that has some basic CSS that we'll see when we run the server.
>
> **[5:55](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=355)** Inside the routes folder, we have index.js and user.js.
>
> **[5:59](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=359)** These have default routes set up for us when we run the server.
>
> **[6:04](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=364)** The views folder houses our Handlebars files.
>
> **[6:07](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=367)** Template engines like Handlebars and Pug may be new to you, and they're not required for this course.
>
> **[6:12](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=372)** So if you're not familiar with how to use them, that's totally okay.
>
> **[6:16](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=376)** Basically, you can pass variables into the template engines to generate a view.
>
> **[6:21](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=381)** We also see our gitignore file was generated for us, as well as a package.json file.
>
> **[6:27](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=387)** Lastly, we have our app.js file, and let's go ahead and open that up and see what that has.
>
> **[6:34](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=394)** So you can see, there's a lot that has been configured here for us.
>
> **[6:38](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=398)** In this course, we're going to learn how to do pretty much all of this from scratch.
>
> **[6:44](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=404)** So now that we've seen the project structure, let's run this and see what we're working with.
>
> **[6:49](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=409)** Let's go ahead and head back to the official documentation for Express Application Generator.
>
> **[6:55](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=415)** In order to run our project, we can see that there are a couple of different options based on the operating system that you're using.
>
> **[7:03](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=423)** For this course, I'm using macOS.
>
> **[7:05](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=425)** So I'll run the following command, DEBUG=testapp:* npm start.
>
> **[7:14](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=434)** Please note that in this documentation, it has myapp because that's the name of the app that was used in the example in the documentation.
>
> **[7:22](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=442)** But since we called ours testapp, we'll replace myapp with testapp.
>
> **[7:28](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=448)** So find the command that corresponds to your operating system, copy it, and head back to your terminal.
>
> **[7:35](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=455)** All right, so here, our terminal was closed, so I'm going to go ahead and reopen that using view and then terminal.
>
> **[7:42](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=462)** I'm going to minimize this.
>
> **[7:46](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=466)** All right.
>
> **[7:47](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=467)** So I'm going to paste the command that I copied from the Express Application Generator documentation.
>
> **[7:55](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=475)** And it's important again, that in their documentation, they called their app myapp, but we use testapp, so make sure you change that in the command line.
>
> **[8:06](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=486)** So you should have DEBUG=testapp:* npm start.
>
> **[8:17](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=497)** In your terminal, if it's successfully started, and it should, you should see testapp is listening on port 3000.
>
> **[8:25](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=505)** Now we're going to head over to the browser and we're going to open our localhost 3000, and see our app running in action.
>
> **[8:35](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=515)** So back in our browser, we're going to open a new tab, and we're going to do localhost 3000.
>
> **[8:43](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=523)** And voila, You should see Express and Welcome to Express.
>
> **[8:48](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-express-application-generator?u=76281980&t=528)** And this is how you can get a project with Express up and running fairly easily with Express Application Generator.

> [!info]- Semantic Content
>
> **CLI Commands:** npm (6), make (2), find (2), git (2), mkdir (1)
> **Code Keywords:** let (10), this, (1), public (1), pass (1), this. (1)
> **Tools:** terminal (8), command line (4), vs code (2)
> **Prerequisites:** install (7), set up (4), getting started (1)
> **UI Navigation:** navigate to (3), open the (2), go to (2)
> **Exercise Files:** template (6)
> **File Paths:** style.css (1), index.js (1), user.js (1), package.json (1), app.js (1)
> **Env Vars:** debug (2), css (1)


### 2. Express Basics

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Getting started: Server and project setup
> [LinkedIn Learning](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=0)** - [Instructor] Let's get our project set up and run our first server using Express.
>
> **[0:05](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=5)** We're going to start with our editor.
>
> **[0:07](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=7)** So I'm in VS Code, I'm going to go ahead and open my terminal, and I'm starting at the root here, I'm going to go ahead and navigate to my desktop.
>
> **[0:17](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=17)** So cd Desktop, and on my desktop, I'm going to create a new folder for our project, and I'm going to call this express essentials.
>
> **[0:28](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=28)** So in order to create that new folder mkdir and then express essentials, make sure you spell it right.
>
> **[0:38](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=38)** All right.
>
> **[0:38](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=38)** So I have that new folder created and now I'm going to navigate into it and we can go ahead and initialize this new project using npm init.
>
> **[0:50](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=50)** So make sure that you are in that new project folder, and this is where we're going to start the project.
>
> **[1:00](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=60)** So if you're not familiar with npm init, it is a command that is used to scaffold projects.
>
> **[1:08](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=68)** It's going to prompt us with a series of questions about how we want to set up our project.
>
> **[1:13](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=73)** If you haven't used it before, don't worry.
>
> **[1:15](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=75)** Most of the prompts are not going to require a response.
>
> **[1:19](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=79)** All right, so we can go ahead and type npm init, and the first prompt is for our package name and it's defaulting to our folder name, which is expressed essentials, which is great, and we can go ahead and hit enter.
>
> **[1:34](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=94)** It's version 1.0, which also we don't need to make any changes there.
>
> **[1:39](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=99)** If you want to add a description, feel free to do so, but it's not required for this setup.
>
> **[1:44](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=104)** The entry point for our project is going to be index.js, and we'll talk about that a little bit later, but that's perfect, we don't need to make any changes.
>
> **[1:53](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=113)** No test command, no Git repository, no keywords.
>
> **[1:58](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=118)** If you want to add your name as the author, go ahead and do so.
>
> **[2:03](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=123)** License, don't need to worry about making a change there, and then we can quickly just scan and make sure everything looks right.
>
> **[2:11](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=131)** Excellent, and if so, go ahead and hit enter.
>
> **[2:15](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=135)** Perfect.
>
> **[2:16](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=136)** So now we can go ahead and open up our folder that we just created for our new project.
>
> **[2:26](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=146)** So, sorry, I'm going to go to File, Open Folder, and I created this on my desktop, expresses essentials and go ahead and click open.
>
> **[2:38](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=158)** So now we can see that a package.json file has been generated from our npm init.
>
> **[2:46](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=166)** So this looks very familiar, we just saw this in our terminal.
>
> **[2:49](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=169)** So now the next thing that we need to do is install express in another package called nodemon, nodemon is a tool that will automatically restart your node server, when a change has been detected in the project.
>
> **[3:05](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=185)** It is a huge time saver when working with Node.js.
>
> **[3:11](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=191)** So let's open our terminal again.
>
> **[3:13](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=193)** So View, Terminal, and we are going to type npm install express, and then nodemon, and I'm going to close this pane.
>
> **[3:30](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=210)** All right, so they've both been installed, express and nodemon, and now we're going to add some additional dev dependencies to ensure that our project will be compatible with ES6 syntax.
>
> **[3:43](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=223)** You may be asking yourself, what does ES6 refer to?
>
> **[3:48](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=228)** You've probably heard it quite a bit, and ES6 is referring to ECMAScript 6, and this is a specific version of JavaScript that is considered industry standard.
>
> **[4:01](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=241)** It allows us to use several features of JavaScript that we were not previously able to, such as modules, which we'll talk about here shortly, arrow functions, several other features, even things like const and let, those were part of ES6.
>
> **[4:19](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=259)** So in this course, we're going to use babel, which is a basic JavaScript compiler.
>
> **[4:25](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=265)** So that is what is going to allow us to use ES6 within our project.
>
> **[4:31](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=271)** So babel is a dev dependency, and we will have to indicate that when we install those packages here in the command line.
>
> **[4:42](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=282)** So we are going to go ahead and do that, and we're going to start by typing npm install, as we do when we're installing different dependencies, and since these are dev dependencies, we're going to do --save-dev.
>
> **[5:00](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=300)** All right, and then babel has four packages that we'll need to make sure that we install for this project.
>
> **[5:06](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=306)** The first is babel core, so with each of these babel is going to be preceded by the @ symbol.
>
> **[5:14](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=314)** I'll call that out as I'm listing out the packages, but I just wanted to call that out.
>
> **[5:19](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=319)** So the first one is babel core.
>
> **[5:21](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=321)** So @babel/core, then the next is babel cli, so @babel/cli.
>
> **[5:29](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=329)** The third is @babel/preset-env, and then the last one is @babel/node.
>
> **[5:39](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=339)** So just to recap, before we get these installed, just to make sure that you have everything that you need, so we start this command with npm install, then --save -dev.
>
> **[5:54](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=354)** Then we have @babel/core, @babel/cli, @babel/preset -env, and then @babel/node.
>
> **[6:08](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=368)** One thing I want to point out before we move on, there aren't any warnings that we see here in our terminal at this point, but I do want to point out that sometimes you may see warnings in your terminal, usually they're harmless, but I do suggest scanning your terminal when you've installed things, just to make sure that there have been no vulnerabilities that have been introduced into your projects.
>
> **[6:33](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=393)** So we've installed those successfully, and now we need to create a configuration file for babel.
>
> **[6:40](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=400)** We can do this directly from the command line by typing touch, which this is the command you use to create new files, and the file that we need to create is a babelrc file.
>
> **[6:52](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=412)** So it's a dot file.
>
> **[6:54](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=414)** So you'll do .babelrc, okay.
>
> **[7:00](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=420)** So if I open the pane here where we have all of our files for this project, you'll see that babelrc has been created.
>
> **[7:07](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=427)** So we can double click on that, and in our babelrc file, we need to indicate the presets that we've installed.
>
> **[7:17](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=437)** So this file consists of simply an object, so we'll start with our curly braces, and then we have the key presets, and this presets takes an array.
>
> **[7:32](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=452)** Within our array we are going to simply add that babel.
>
> **[7:38](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=458)** Be sure you put the @ sign, @babel/preset -env.
>
> **[7:44](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=464)** You remember, we just installed that package.
>
> **[7:47](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=467)** So when I saved mine, formats it very nicely for me, and that's it.
>
> **[7:53](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=473)** We can go ahead and close this babelrc file.
>
> **[7:58](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=478)** All right, so moving back to our package.json file, I'm going to close the pane here, just so we can have a little bit more room and let's take a look at our dependencies and dev dependencies, just to kind of point out various elements of this file.
>
> **[8:18](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=498)** So we have our express and nodemon as our dependencies, and then we have our four babel packages for our dev dependencies.
>
> **[8:29](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=509)** Now we're going to add some scripts to our project, and then we will get started incorporating nodemon and ES6 syntax into this project.
>
> **[8:40](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=520)** So the first thing we need to do is add a type to our package.json file.
>
> **[8:46](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=526)** So we're going to put this right underneath name and so type: and then the type that we need to add is module.
>
> **[8:56](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=536)** So what does this mean?
>
> **[8:57](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=537)** We want to be able to use modules that were introduced in the ES6 in our project.
>
> **[9:03](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=543)** So for example, modules will be defined in our index.js file with the use of import and export, instead of the required function that was used in previous versions of JavaScript.
>
> **[9:17](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=557)** Keep in mind that when looking at documentation, you may still see various elements of Express referenced with previous versions, and we'll see that when we are in later videos, that the documentation may reference the older version of JavaScript, but we want to keep our project nice and modern.
>
> **[9:38](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=578)** So make sure you save that.
>
> **[9:40](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=580)** So we have our type module added, and then we're going to add a start script to our project.
>
> **[9:47](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=587)** So we can go ahead and take this test script out.
>
> **[9:50](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=590)** We don't need that, and we're going to add, start: and I'll add some quotation marks there, and I'm going to go ahead and outline everything that we need to add for our start script, and then I'm going to break it down after we have it added.
>
> **[10:10](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=610)** So the first thing that we'll add is nodemon, and then the next is
>
> **[10:16](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=616)** - -experimental
>
> **[10:20](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=620)** - json-modules, and then --exec, then babel -node index.js, and make sure you save, so Command + S.
>
> **[10:38](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=638)** So you may be wondering, what does all this mean?
>
> **[10:42](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=642)** The first part nodemon, it references that nodemon package that we will use, so we don't have to constantly restart our server.
>
> **[10:51](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=651)** Next, we have to add the flag experimental JSON modules in order to be able to load JSON files.
>
> **[11:00](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=660)** Everything else to the right of that is telling our server to run the project using babel and start the application from the index.js file.
>
> **[11:11](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=671)** So now we should be all set with our package.json file once again, make sure it's saved, and now we need to create our index.js file.
>
> **[11:24](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=684)** So this is going to be the entry point for our project.
>
> **[11:29](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=689)** So you can create this file from the command line or one thing that I want to point out, a nice feature of VS Code is that in this explorer pane, you can add a new file, add a new folder here really easily.
>
> **[11:42](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=702)** So I'm going to go ahead and click this new file and create the index.js.
>
> **[11:49](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=709)** One thing I want to point out before we start adding logic to our index.js file, is that this entry point file can be named whatever you'd like it to be named.
>
> **[12:00](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=720)** So sometimes you'll see it referenced as app.js, and that's totally fine, you can name this whatever you would like.
>
> **[12:10](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=730)** The important thing is that in your package.json file, that it is referencing it accordingly.
>
> **[12:18](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=738)** So if you did decide that you wanted to call the entry point file app.js, you would just need to make sure this main was updated with app.js, and then also your npm start command would need to be apt.js.
>
> **[12:33](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=753)** So simply just wanted to point that out.
>
> **[12:35](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=755)** You don't have to name your entry file index.js, it is industry standard to see it as such though.
>
> **[12:42](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=762)** So just wanted to point that out.
>
> **[12:44](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=764)** All right, so now back to our index.js file, and the first thing that we need to do is import express from express.
>
> **[12:56](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=776)** So make sure express reference the second time is in quotation marks.
>
> **[13:02](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=782)** Then below that we will create a variable app and we're going to set that equal to express.
>
> **[13:12](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=792)** Next, we're going to create another variable, and this is PORT.
>
> **[13:18](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=798)** So it's not necessary to create a variable for the port number, but I like to do it simply because we may use this in multiple places, and if you change the value, you only have to update it in one spot.
>
> **[13:37](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=817)** So here, we're going to set our port number equal to 3000, and this is pretty common, and you could have 3001, it's really up to you, but 3000 is a common one.
>
> **[13:50](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=830)** Next, we want to make sure that our app is listening on the port that we've specified, which is 3000.
>
> **[13:58](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=838)** So we're going to take our app variable and we're going to use the method listen, and the listen method takes two arguments.
>
> **[14:09](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=849)** The first argument is the port number, so we've set that equal to 3000, so we can just pass that variable right in, and then the second argument is a function.
>
> **[14:19](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=859)** So let's go ahead and set up our arrow function here, we don't need anything else, but this at this point.
>
> **[14:28](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=868)** So we are just simply going to log out a message here.
>
> **[14:35](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=875)** You could add additional logic into this function, but for the purposes of just getting this project up and running, we just want to log out a message right now to ensure that our server is running.
>
> **[14:48](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=888)** So we're going to console.log, and I'm going to use a template literal here, and I'm just simply going to add the message, the server is running on port, and then I will pass in port here.
>
> **[15:09](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=909)** Okay, so console.log, the server is running on port and we should see 3000.
>
> **[15:15](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=915)** So make sure you save, and now let's watch the magic happen.
>
> **[15:20](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=920)** So we're going to go back to our terminal here and we're going to type in npm start and you can see that we see the message, the server is running on port 3000.
>
> **[15:36](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=936)** So you should see that printed in your terminal and great work.
>
> **[15:39](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=939)** One more thing before we move on, I want you to see how nodemon is working for us and how convenient it is.
>
> **[15:46](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=946)** So if we weren't using nodemon, every time we made a change to any of our files, we would have to stop and restart the server.
>
> **[15:55](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=955)** With nodemon, when a change is detected, it automatically restarts.
>
> **[16:00](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=960)** So for example, I'm just going to modify our console.log here by adding an exclamation point and saving, and you'll see now in the terminal that it updated automatically.
>
> **[16:12](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=972)** It added that exclamation point after the port number.
>
> **[16:16](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/getting-started-server-and-project-setup?u=76281980&t=976)** So I just wanted to show you that and great job on getting your first server set up using Express.

> [!info]- Semantic Content
>
> **CLI Commands:** make (15), npm (9), node (5), cd (1), mkdir (1)
> **File Paths:** index.js (9), package.json (5), app.js (3), node.js (1), apt.js (1)
> **Code Keywords:** let (6), function (4), module (2), pass (2), require (1)
> **Tools:** terminal (10), command line (3), vs code (2)
> **Prerequisites:** install (6), set up (4), setup (1), before we start (1)
> **Env Vars:** es6 (7), json (2), port (1)
> **Definitions:** is a  (9)
> **UI Navigation:** navigate to (1), go to (1), open the (1), click on (1)

#### Mock data is served: Adding data to your server
> [LinkedIn Learning](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=0)** - [Narrator] When you're developing an API and want to test how data is displayed, you may want to start with some mock data.
>
> **[0:07](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=7)** Mock data generation can be a tedious task, but fortunately there are resources available to help us quickly and easily put together what we need.
>
> **[0:16](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=16)** One such resource is a website called Mockaroo.
>
> **[0:20](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=20)** I have used this countless times, and it is incredibly helpful and easy to use.
>
> **[0:26](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=26)** On the landing page of Mockaroo, you're prompted with a variety of field names and corresponding data types.
>
> **[0:33](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=33)** For the purpose of this video, we are going to keep things very simple.
>
> **[0:37](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=37)** But if you ever need to generate mock data, know that there are many options here for you.
>
> **[0:43](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=43)** These fields and types represent the information that will be housed in the JSON data that we are going to generate.
>
> **[0:50](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=50)** I'll start by removing the last two items, gender and IP address.
>
> **[0:56](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=56)** So now you should just have four fields listed that will be included in our mock data, ID, first name, last name, and email.
>
> **[1:06](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=66)** Directly below the listing of fields you'll see a line that starts with rows.
>
> **[1:12](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=72)** Let's reduce the number of rows to 25.
>
> **[1:16](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=76)** For the purpose of our example, we don't need a ton of data, so let's just keep it simple.
>
> **[1:22](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=82)** Beside the row input is a format dropdown.
>
> **[1:26](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=86)** We want this data to be in JSON format, so let's go ahead and change that from CSV to JSON.
>
> **[1:33](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=93)** You'll see two new check boxes appear, and we can just keep those selected.
>
> **[1:38](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=98)** That's it, so now we click on the download data button, which is fixed to the bottom of the page.
>
> **[1:45](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=105)** And now we have our mock data.
>
> **[1:49](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=109)** My file was saved in my machine's download folder.
>
> **[1:52](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=112)** So I'm going to go ahead and change the name of it to simply mock.JSON.
>
> **[2:00](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=120)** You can name this file whatever you would like.
>
> **[2:02](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=122)** I'm simplifying the name in order to make it easier to reference in our project.
>
> **[2:07](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=127)** Once you've located your mock file, go ahead and transition back to your code editor.
>
> **[2:13](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=133)** From here, we need to add a folder to house our newly generated mock data.
>
> **[2:18](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=138)** You can add this from the command line, if you choose or through the editor.
>
> **[2:24](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=144)** I'm going to go ahead and use VS Code to add the folder.
>
> **[2:27](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=147)** I'll click into the main section with my files, and then click the folder icon with a plus sign.
>
> **[2:35](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=155)** And I'm going to name this folder data.
>
> **[2:38](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=158)** Next let's bring our data into the project.
>
> **[2:41](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=161)** For ease I'm just going to simply drag and drop the file into the newly created folder.
>
> **[2:49](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=169)** This will open up the file automatically, and if it didn't, for whatever reason, depending on how you pulled it into your project, go ahead and open it.
>
> **[2:57](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=177)** And let's just take a quick look at the data that's there.
>
> **[3:00](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=180)** On Mockaroo we specified that we wanted to use ID, first name, last name, and email.
>
> **[3:06](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=186)** And we can see that all of these fields are there for us with that mocked data.
>
> **[3:13](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=193)** The first thing we need to do in order to use this mock data is import that into our index.js file.
>
> **[3:22](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=202)** So we can go ahead and close this mock.json file.
>
> **[3:26](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=206)** And now in our index JS file, we're going to import the mock data.
>
> **[3:32](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=212)** So right below where we imported express, we're going to import data from, and then ./ 'cause we want to get to that data folder, and then mock.json, all right?
>
> **[3:48](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=228)** So make sure you go ahead and save that.
>
> **[3:51](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=231)** Now we're just going to simply log out the data.
>
> **[3:55](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=235)** We're going to modify our existing app.listen function with this mock data.
>
> **[4:03](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=243)** So I'm just going to add right below an additional console log, and we're going to place the data in that console log.
>
> **[4:12](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=252)** So now we're ready to run our application.
>
> **[4:20](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=260)** All right, and while it's booting up, I'm going to go ahead and increase the size of our terminal so we can see that we now have all of our mock data being logged out in our terminal.
>
> **[4:34](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=274)** So we have our port that is running here on port 3000, our message that we did in the previous video.
>
> **[4:43](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=283)** And then now we have all of our mock data being logged out here in the terminal.
>
> **[4:48](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=288)** Before we move on, there are a few things that I want to call out to make sure that you understand the distinction between our server side code and our client side or front end code at this point.
>
> **[4:59](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=299)** If we see the project running in the browser, I think it will help illustrate the difference between the two.
>
> **[5:06](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=306)** In our browser, let's go ahead and open a new tab, and go to local host 3000 where our server's running.
>
> **[5:16](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=316)** When you get there, you'll see that a message is printed, cannot get, and you may have expected to see our mock data loaded here.
>
> **[5:24](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=324)** What does the statement cannot get mean?
>
> **[5:27](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=327)** At this point in our project, we have not implemented any HTTP methods or created any routes to fetch data.
>
> **[5:35](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=335)** The get method is an HTTP method used to retrieve data that we will discuss in the next video.
>
> **[5:42](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=342)** So what about our mock data?
>
> **[5:44](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=344)** Let's explore this question by opening our dev tools, which you can do on a Mac with Control, right click, inspect.
>
> **[5:56](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=356)** Let's see if anything is being logged out in the console here, which we might expect.
>
> **[6:03](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=363)** As you can see, we do have this error, but don't worry about that right now, but you can see that our console is clear.
>
> **[6:11](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=371)** We don't see our mock data logged out in our browser because we logged the mock data on the server.
>
> **[6:17](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=377)** Our browser console is tied to the client side while our terminal or command line is logging out what we specify in our server.
>
> **[6:26](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/mock-data-is-served-adding-data-to-your-server?u=76281980&t=386)** The goal in working with express and node in general is to bridge that data from the server to the client.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), from, (1), function (1)
> **Env Vars:** json (4), http (2), api (1), csv (1)
> **Tools:** terminal (4), command line (2), vs code (1)
> **File Paths:** mock.json (3), index.js (1)
> **CLI Commands:** make (3), node (1)
> **UI Navigation:** dropdown (1), click on (1), drag and drop (1), go to (1)
> **Definitions:** is a  (2), is an  (1)
> **Cross-References:** previous video (1), in the next (1)

#### What are HTTP methods and routes?
> [LinkedIn Learning](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=0)** - [Instructor] Let's determine how an application responds to a client request to a particular endpoint which consists of a path, an HTTP request method.
>
> **[0:11](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=11)** As a user of the web, you are constantly interacting with routes.
>
> **[0:15](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=15)** Whenever you visit a URL, this is a route that has been coded to serve up specific information based on the page and associated HTTP methods.
>
> **[0:25](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=25)** So then what are HTTP methods?
>
> **[0:28](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=28)** HTTP methods are actions that are taken on a specific resource.
>
> **[0:33](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=33)** For the purposes of this course, we are only going to focus on four of these methods which correspond to CRUD operations.
>
> **[0:42](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=42)** If you've never heard this acronym before, CRUD stands for create, read, update and delete.
>
> **[0:49](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=49)** The four HTTP methods that we are going to focus on are GET, POST, PUT and DELETE.
>
> **[0:56](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=56)** Often times, you will see these references in print in all caps, as they are here, but when we use them in our code, they will be in lowercase.
>
> **[1:04](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=64)** Think about each of these methods using an example of an app where you can create a grocery list.
>
> **[1:11](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=71)** We will illustrate each method with the help of our grocery list example.
>
> **[1:16](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=76)** We use the GET method to retrieve or get data from the server.
>
> **[1:20](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=80)** You will use this method quite often as you retrieve data to display or render a page or within an application.
>
> **[1:29](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=89)** Using our grocery list example, we would use the GET method to retrieve all of the items that are currently on our grocery list to render on the page.
>
> **[1:39](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=99)** Next, we have the POST method.
>
> **[1:41](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=101)** POST sends data to the server and generates a new resource.
>
> **[1:46](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=106)** You would use the POST method if you wanted to add a new item to your grocery list.
>
> **[1:51](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=111)** Once you submit the new item, it would post to the server and the new item or resource would be created.
>
> **[1:58](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=118)** The PUT method is used to update an existing resource.
>
> **[2:03](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=123)** Let's say you had three bananas on your grocery list but now you need five.
>
> **[2:08](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=128)** Since you need to update an existing grocery list entry, you would use PUT to update the resource.
>
> **[2:15](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=135)** And then we have DELETE which does what its name implies.
>
> **[2:19](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=139)** It deletes an existing resource.
>
> **[2:21](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=141)** If we decided we no longer needed to get cereal, we would use the DELETE method to remove that item from our grocery list.
>
> **[2:29](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=149)** Now that we have a foundation for HTTP methods, let's discuss HTTP messages.
>
> **[2:37](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=157)** There are two HTTP messages.
>
> **[2:40](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=160)** Requests and responses.
>
> **[2:42](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=162)** When you start constructing your routes, you will use these to communicate back and forth with the client and the server.
>
> **[2:48](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=168)** Requests are sent by the client to trigger an action on the server.
>
> **[2:52](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=172)** In contrast, responses are the answers sent from the server.
>
> **[2:57](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=177)** Now that we have a foundation for routes and HTTP methods, let's try to construct our first route.
>
> **[3:04](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=184)** We're going to start in the browser, but make sure you have your code editor handy.
>
> **[3:08](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=188)** At localhost:3000, you can see that we still have the message Cannot GET that we saw in our last video.
>
> **[3:16](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=196)** Hopefully this message makes a little bit more sense to you now that you know more about routes and HTTP methods.
>
> **[3:23](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=203)** We're seeing this message because we don't have any routes set up at this point.
>
> **[3:28](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=208)** So let's go ahead and create one together.
>
> **[3:30](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=210)** Let's transition over to our VS code and right below our PORT variable, we're going to start with a reference to our Express app, so app, and then since we're starting with the GET method, we'll go ahead and apply the GET method to app.
>
> **[3:49](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=229)** Each HTTP method takes two arguments, the path and the handler.
>
> **[3:54](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=234)** The handler is basically the function that is going to execute once the path is found.
>
> **[3:59](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=239)** For our path, we're going to use forward slash and then for the handler, we're going to pass the request and response along with some additional code to be executed.
>
> **[4:11](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=251)** So first, I'll put in slash, so this is the route.
>
> **[4:15](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=255)** So that is our first argument, and then our next two arguments, request and response, I'm going to spell them out fully, but please note that often times, you will see request represented as req and response represented as res.
>
> **[4:38](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=278)** You can use either one.
>
> **[4:40](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=280)** It is totally up to you, but just to be more explicit, I'm going to fully spell out request and response throughout the course.
>
> **[4:48](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=288)** So now, I have my request and response and now I'm going to add the function here, our arrow function, for the handler.
>
> **[4:58](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=298)** So now that we have this set up, we're going to use the send method on the response to send a message to the route that we've established.
>
> **[5:08](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=308)** So we'll do response.send and in this send method, we're just going to pass a messasge, a string that says, "This is a GET request at slash," with slash meaning the route.
>
> **[5:27](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=327)** So let's save that.
>
> **[5:31](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=331)** And then let's head back to the browser and refresh and let's see if our message is being displayed.
>
> **[5:41](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=341)** All right, so back here at localhost:3000, let's refresh, and congratulations.
>
> **[5:47](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=347)** You've just created your first route with Express.
>
> **[5:50](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=350)** Awesome.
>
> **[5:51](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=351)** So let's head back, though, to our editor, and let's go ahead and create some routes for the other three HTTP methods.
>
> **[6:01](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=361)** For the sake of example, we can easily copy and paste our first block of code and make a few little tweaks.
>
> **[6:08](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=368)** So I'm going to copy this GET and then right below, paste it in, and we're going to change the GET to POST.
>
> **[6:20](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=380)** All right.
>
> **[6:21](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=381)** And this path, instead of being at the route, let's name the following three by their CRUD operation spelled out.
>
> **[6:31](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=391)** So with POST, it's create, so let's call this route create, request and response in our handler function, that setup stays the same, but we're going to change the message here to say, "This is a POST request at /create."
>
> **[6:50](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=410)** All right, so we'll save that.
>
> **[6:52](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=412)** So we have our GET, we have our POST.
>
> **[6:54](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=414)** Our next route is going to be a PUT.
>
> **[6:58](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=418)** So we'll change post to put and we're going to call this route edit.
>
> **[7:08](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=428)** All right, so then, request and response.
>
> **[7:11](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=431)** This stays the same, our handler stays the same, and we're just simply going to update the message here.
>
> **[7:17](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=437)** So, "This is a PUT request at /edit."
>
> **[7:23](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=443)** All right, make sure you save, and then last but not least we will create a delete.
>
> **[7:32](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=452)** So delete and we're going to call this route delete and just simply change the message.
>
> **[7:42](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=462)** So, delete, spell it right, at delete.
>
> **[7:47](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=467)** All right and I'm going to save this and then just to keep things organized, I like to add comments in my code and especially, too, if you're referencing this in the future so I'll have GET here and then POST, and those double slashes will keep it as a comment and it's not going to disrupt anything with your code.
>
> **[8:14](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=494)** All right.
>
> **[8:15](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=495)** So very good.
>
> **[8:17](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=497)** You have four new routes.
>
> **[8:20](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=500)** Our GET, POST, PUT and DELETE.
>
> **[8:24](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-http-methods-and-routes?u=76281980&t=504)** In our next video, we're going to talk about an easy-to-use free resource that we can use to test any endpoints that we create.

> [!info]- Semantic Content
>
> **Env Vars:** http (12), post (10), put (6), delete (4), crud (3)
> **Code Keywords:** let (14), delete (10), function (4), pass (2)
> **API Endpoints:** get  (7), put  (5), post  (4), get
 (2), delete
 (1)
> **Definitions:** is a  (4), stands for (1)
> **Prerequisites:** set up (2), make sure you have (1), setup (1)
> **CLI Commands:** make (3)
> **URLs:** [localhost:3000](https://localhost:3000) (2)
> **Ports:** :3000 (2)

#### Postman: A free tool for testing
> [LinkedIn Learning](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980&t=0)** - [Instructor] In our previous video, we created several new routes using the HTTP methods get, post, put, and delete.
>
> **[0:08](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980&t=8)** If we want to test the get method, it's pretty easy.
>
> **[0:11](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980&t=11)** We can just open our browser, go to the route, and we should see the data that we sent to the client.
>
> **[0:16](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980&t=16)** For the other HTTP methods, testing is a little bit more challenging.
>
> **[0:21](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980&t=21)** Luckily, there is a free tool that can help us test our routes called Postman.
>
> **[0:26](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980&t=26)** Postman has a lot of really cool features, but I'm going to keep things simple for the sake of our work with Express in this course, and just show you how to test our endpoints.
>
> **[0:35](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980&t=35)** We will start here on [Postman.com](https://Postman.com).
>
> **[0:38](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980&t=38)** You have a couple of options when it comes to how you use Postman.
>
> **[0:42](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980&t=42)** For our purposes, we will need to download the desktop app to access our local host.
>
> **[0:48](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980&t=48)** Go ahead and select the operating system that you're working on, and download the desktop app.
>
> **[0:55](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980&t=55)** Since I'm working on a Mac, I'll go ahead and select the Mac icon, and then download the app on this next page.
>
> **[1:10](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980&t=70)** Once downloaded, I'll head to my Downloads folder and un-zip the file.
>
> **[1:18](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980&t=78)** Postman has downloaded, and I can go ahead and open.
>
> **[1:22](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980&t=82)** You'll likely be prompted to move Postman to an Applications folder, and perhaps like this, get a prompt to make sure that I want to open it since I downloaded it from the internet.
>
> **[1:36](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980&t=96)** When you open the Postman app, you'll be prompted to either create a new account or sign in with an existing account.
>
> **[1:44](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980&t=104)** You don't need an account in order to utilize Postman, but I highly recommend going ahead and setting up an account so you can reference your various endpoint calls at a later date.
>
> **[1:55](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980&t=115)** If you don't have an account already, go ahead and pause this video and create an account by clicking on Sign Up For Free on this page.
>
> **[2:04](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980&t=124)** Signing up for an account is quick and easy.
>
> **[2:07](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980&t=127)** Once you've created your account, or if you already have an account, go ahead and sign in.
>
> **[2:13](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980&t=133)** Once you've successfully logged into Postman, let's go ahead and flip back to our Code editor.
>
> **[2:19](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980&t=139)** As we discussed, we can see our get route is working when we visit local host 3,000.
>
> **[2:24](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980&t=144)** Now we're going to test our three other methods.
>
> **[2:27](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980&t=147)** Post, put, and delete.
>
> **[2:31](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980&t=151)** The first route that we are going to test is create, which is a post.
>
> **[2:35](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980&t=155)** How can we test this in Postman?
>
> **[2:38](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980&t=158)** Heading back over to the Postman app, you should be on the homepage and see Create New.
>
> **[2:44](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980&t=164)** Go ahead and click on Create New.
>
> **[2:47](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980&t=167)** On the next screen, click HTTP Request.
>
> **[2:52](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980&t=172)** In the Enter Request URL field, we're going to enter our route, localhost:3000/create.
>
> **[3:03](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980&t=183)** To the left of the URL is a dropdown menu that contains various HTTP methods.
>
> **[3:09](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980&t=189)** We know that this route is a post, so let's go ahead and select Post.
>
> **[3:15](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980&t=195)** Then click on the Send button on the right-hand side of the URL.
>
> **[3:20](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980&t=200)** Below, we see that the message we sent in our handler is displaying.
>
> **[3:25](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980&t=205)** This is a post request at create, great job.
>
> **[3:29](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980&t=209)** Let's try put next.
>
> **[3:31](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980&t=211)** The route for put is edit, and we should see the following message when we send the request.
>
> **[3:36](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980&t=216)** This is a put request at edit.
>
> **[3:39](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980&t=219)** So we're just going to edit our call, changing create to edit, and post to put.
>
> **[3:50](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980&t=230)** When we send, we see our message below.
>
> **[3:55](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980&t=235)** This is a put request at edit.
>
> **[3:57](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980&t=237)** We have one more HTTP method to test, and that's Delete.
>
> **[4:02](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980&t=242)** With this route, we should see the message, this is a delete request at /delete.
>
> **[4:07](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980&t=247)** So we're going to change edit to delete, and then the method in the dropdown to delete as well.
>
> **[4:15](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980&t=255)** When we hit Send, we see this is a delete request at /delete.
>
> **[4:22](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/postman-a-free-tool-for-testing?u=76281980&t=262)** Congratulations, you've just successfully utilized Postman to test your routes.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (9), let (3), new. (2), this, (1)
> **Tools:** postman (12)
> **Definitions:** is a  (10)
> **Env Vars:** http (5), url (3)
> **UI Navigation:** select the (2), click on (2), dropdown (2), go to (1), open the (1)
> **URLs:** [postman.com](https://postman.com) (1), [localhost:3000](https://localhost:3000) (1)
> **Cross-References:** previous video (1), we discussed (1)
> **Exercise Files:** download the (2)

#### Let's GET some data: Creating a basic data endpoint
> [LinkedIn Learning](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/let-s-get-some-data-creating-a-basic-data-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/let-s-get-some-data-creating-a-basic-data-endpoint?u=76281980&t=0)** - [Instructor] So far in this course, we have set up some basic routes using the HTTP methods get, post, put, and delete.
>
> **[0:09](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/let-s-get-some-data-creating-a-basic-data-endpoint?u=76281980&t=9)** We've sent data to the client, but it's been in messages that we've hard-coded to simply illustrate how to get our endpoints up and running.
>
> **[0:16](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/let-s-get-some-data-creating-a-basic-data-endpoint?u=76281980&t=16)** In this video, we want to take our mock data and serve it to our client via a get.
>
> **[0:22](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/let-s-get-some-data-creating-a-basic-data-endpoint?u=76281980&t=22)** This is something that you will do time and time again, as you build endpoints with express, we're going to start in our code editor and then test with postman and the browser.
>
> **[0:33](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/let-s-get-some-data-creating-a-basic-data-endpoint?u=76281980&t=33)** In our index JS file, let's take a look at our get route.
>
> **[0:37](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/let-s-get-some-data-creating-a-basic-data-endpoint?u=76281980&t=37)** We're going to go ahead and clear out the response.send that we have here and make some changes.
>
> **[0:45](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/let-s-get-some-data-creating-a-basic-data-endpoint?u=76281980&t=45)** Typically, when you're working with an application that is using node and express, you are likely hooking into a database as well.
>
> **[0:52](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/let-s-get-some-data-creating-a-basic-data-endpoint?u=76281980&t=52)** This is where you be querying and fetching existing data.
>
> **[0:55](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/let-s-get-some-data-creating-a-basic-data-endpoint?u=76281980&t=55)** For the scope of this course, we are simply focusing on express, so we will just briefly touch on this topic.
>
> **[1:02](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/let-s-get-some-data-creating-a-basic-data-endpoint?u=76281980&t=62)** Inside our get, the first thing we usually do is get data from a database and then set up any necessary error handling at this time.
>
> **[1:11](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/let-s-get-some-data-creating-a-basic-data-endpoint?u=76281980&t=71)** But for this course, we're going to use the mock data that we already imported to send to our client.
>
> **[1:17](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/let-s-get-some-data-creating-a-basic-data-endpoint?u=76281980&t=77)** In order to do that, we will use the response and then apply the method json in order to send data to the client in json format.
>
> **[1:27](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/let-s-get-some-data-creating-a-basic-data-endpoint?u=76281980&t=87)** In order to set this up, we'll just simply need to pass our data to the json method.
>
> **[1:35](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/let-s-get-some-data-creating-a-basic-data-endpoint?u=76281980&t=95)** All right, now make sure you save.
>
> **[1:36](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/let-s-get-some-data-creating-a-basic-data-endpoint?u=76281980&t=96)** That's very important.
>
> **[1:38](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/let-s-get-some-data-creating-a-basic-data-endpoint?u=76281980&t=98)** And then now we're going to head to postman to test our get.
>
> **[1:44](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/let-s-get-some-data-creating-a-basic-data-endpoint?u=76281980&t=104)** In postman, let's open a new tab.
>
> **[1:48](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/let-s-get-some-data-creating-a-basic-data-endpoint?u=76281980&t=108)** We see the default is get, so we don't need to make a change there.
>
> **[1:52](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/let-s-get-some-data-creating-a-basic-data-endpoint?u=76281980&t=112)** We just need to enter a local host 3000 in the URL field.
>
> **[1:58](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/let-s-get-some-data-creating-a-basic-data-endpoint?u=76281980&t=118)** All right, once we have that, we can now hit send, and you should see the response mock data down in the body.
>
> **[2:08](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/let-s-get-some-data-creating-a-basic-data-endpoint?u=76281980&t=128)** Pretty cool.
>
> **[2:09](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/let-s-get-some-data-creating-a-basic-data-endpoint?u=76281980&t=129)** Now let's see what it looks like in the browser.
>
> **[2:13](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/let-s-get-some-data-creating-a-basic-data-endpoint?u=76281980&t=133)** If you're not already on local host 3000, go ahead and head there.
>
> **[2:17](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/let-s-get-some-data-creating-a-basic-data-endpoint?u=76281980&t=137)** I still have this from our last video, so I'm simply just going to refresh.
>
> **[2:23](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/let-s-get-some-data-creating-a-basic-data-endpoint?u=76281980&t=143)** And now we see that we are getting that same mock data here on the client side or in the browser.
>
> **[2:30](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/let-s-get-some-data-creating-a-basic-data-endpoint?u=76281980&t=150)** It's identical to what we were seeing in postman.
>
> **[2:33](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/let-s-get-some-data-creating-a-basic-data-endpoint?u=76281980&t=153)** Great job, you've just served up data using get.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), delete (1), pass (1)
> **CLI Commands:** make (3), node (1)
> **Tools:** postman (4)
> **Env Vars:** http (1), url (1)
> **Prerequisites:** set up (2)
> **Speakers:** - [instructor] (1)

#### Serving static files with Express
> [LinkedIn Learning](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=0)** - [Instructor] In addition to using Express to query and fetch data from APIs, you can also use express to serve static files.
>
> **[0:08](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=8)** Static files, in this case, are files that are not going to change.
>
> **[0:12](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=12)** So typically you might serve files like photos, PDFs, document files, but you can also serve more development specific files like HTML and CSS files.
>
> **[0:23](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=23)** If you take a look at the exercise files for this course, you should see a folder labeled static_files.
>
> **[0:31](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=31)** In this folder, there are two images: mountains_1 and mountains_2.
>
> **[0:37](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=37)** We are going to serve up these photos, which are examples of static files using our Express project.
>
> **[0:44](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=44)** I'm going to show you two different ways to accomplish this.
>
> **[0:47](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=47)** Let's go ahead and get started in our VS Code.
>
> **[0:50](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=50)** The first thing that we're going to do is create a new folder at the root of our project called public.
>
> **[0:56](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=56)** You can create your folder in a few ways.
>
> **[0:58](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=58)** If you want to use the command line to do so, please feel free.
>
> **[1:02](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=62)** I'm going to use the built-in functionality with VS Code to add the folder.
>
> **[1:06](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=66)** So our little folder icon with the plus sign.
>
> **[1:09](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=69)** If we click that and we're going to call this folder public.
>
> **[1:15](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=75)** Now let's take the photo mountains_1, and we can just drag and drop it into this folder.
>
> **[1:24](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=84)** Excellent.
>
> **[1:25](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=85)** And it may have opened it for you, that's okay.
>
> **[1:27](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=87)** You can see what it looks like, but you can go ahead and close it if it opened it for you.
>
> **[1:33](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=93)** All right, and you should have your index.js file open if it's not already.
>
> **[1:37](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=97)** Make sure you go ahead and open that.
>
> **[1:39](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=99)** In order to serve static files, we need to use the built-in middleware function express.static that we will pass to app.use.
>
> **[1:49](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=109)** This method is built in with Express and used to handle middleware functions.
>
> **[1:55](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=115)** So first let's go ahead and start right underneath our PORT.
>
> **[2:00](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=120)** And I'm going to call this using the public folder at the root of the project.
>
> **[2:11](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=131)** All right, so as I mentioned, we're going to use app.use, right?
>
> **[2:18](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=138)** So the use method, and then the use method takes the express.static method.
>
> **[2:28](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=148)** The express.static function has a few parameters, but we're only going to focus on passing the folder where the file lives to this function.
>
> **[2:37](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=157)** In our case, we've created the public folder.
>
> **[2:40](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=160)** So we are going to pass that as a string to the express.static function.
>
> **[2:46](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=166)** So we'll just simply type public in here and make sure you save.
>
> **[2:50](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=170)** This folder will be served from the root directory, and we will reference the file based on its name, mountains_1.jpg.
>
> **[3:00](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=180)** Let's see this in action by heading to our browser.
>
> **[3:04](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=184)** At the root of our project is localhost:3000.
>
> **[3:07](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=187)** If we add a slash and then mountains_1.jpg,
>
> **[3:16](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=196)** and then we hit enter, voila, you should see our first picture, great job.
>
> **[3:22](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=202)** Now, what if you want to create a specific route for your image or files?
>
> **[3:28](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=208)** Let's head back to our editor to try to set this up in a different way.
>
> **[3:33](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=213)** The first thing we're going to do is create a new folder that we will call images.
>
> **[3:38](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=218)** As mentioned previously, please create this folder in whatever means is easiest for you.
>
> **[3:43](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=223)** I'm going to use VS Code.
>
> **[3:45](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=225)** So I'll create my new folder and it is called images.
>
> **[3:49](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=229)** Then we're going to take our second image from our static files from our exercise files for this course.
>
> **[3:57](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=237)** And we're going to take mountains_2, and I'm going to drag and drop that into my images folder.
>
> **[4:04](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=244)** And just like what happened before, it's probably going to open for you, and you can go ahead and close that out.
>
> **[4:10](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=250)** This time, we're going to create a new route that will serve our images, and we're going to call it images.
>
> **[4:18](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=258)** The setup will be almost identical to our previous example.
>
> **[4:23](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=263)** So I'm going to head and close our pane here and make this a little bit bigger.
>
> **[4:29](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=269)** So this was our first static file serving that we did.
>
> **[4:34](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=274)** All right, and we served up the image in the public folder, and then I'm going to just make a comment here for us.
>
> **[4:41](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=281)** So for this one, we're going to be using the images folder at the route /images, okay?
>
> **[4:50](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=290)** So just like we did in the previous example with the public folder, we're going to start with app.use.
>
> **[4:58](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=298)** And the first argument that we'll pass in is a string and it is going to be /images.
>
> **[5:08](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=308)** This /images is denoting a route that we will serve the images from.
>
> **[5:14](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=314)** And then as we did in the previous example, we're going to pass express.static.
>
> **[5:21](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=321)** And this time we're going to pass the string images to indicate that we want to pull from the images folder.
>
> **[5:30](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=330)** All right, so go ahead and save that.
>
> **[5:33](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=333)** So just a quick recap, before we head over to our browser.
>
> **[5:36](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=336)** We used the app.use method.
>
> **[5:39](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=339)** The first argument is the route, and we are going to serve our images at the /images route, and those images are going to be pulled from the folder images.
>
> **[5:53](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=353)** So let's go ahead and head back to our browser, and test our route successfully.
>
> **[6:01](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=361)** All right, so we can just stay on this browser.
>
> **[6:05](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=365)** We're just going to back this out.
>
> **[6:07](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=367)** Let's go ahead and just start at localhost:3000.
>
> **[6:12](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=372)** All right, so this is our route.
>
> **[6:14](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=374)** And now if we add /images, and then this time we're going to do /images, and then the name of the file, which is mountains_2.jpg, and you should see the photo.
>
> **[6:34](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/serving-static-files-with-express?u=76281980&t=394)** Great job.

> [!info]- Semantic Content
>
> **Code Keywords:** static (11), let (7), public (7), pass (5), function (4)
> **CLI Commands:** make (4)
> **Tools:** vs code (3), command line (1)
> **Env Vars:** html (1), css (1), port (1)
> **Analogies:** just like (2), picture (1)
> **URLs:** [localhost:3000](https://localhost:3000) (2)
> **Ports:** :3000 (2)
> **UI Navigation:** drag and drop (2)


### 3. Express Routing Fundamentals

> [[#Table of Contents|↑ Back to Table of Contents]]

#### What are routing parameters?
> [LinkedIn Learning](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=0)** - Before we build on our express routing knowledge, let's review what we've learned thus far.
>
> **[0:06](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=6)** A route is how an application responds to a client request to a particular end point.
>
> **[0:12](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=12)** A few lessons ago, we created several routes to get our application up and running.
>
> **[0:17](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=17)** We even learned how to use the tool postman to access a variety of different routes, tied to various paths and methods.
>
> **[0:26](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=26)** In order to construct our routes in express, we need two key components, the path and the method.
>
> **[0:32](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=32)** We learned that the path is what defines our end points.
>
> **[0:35](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=35)** In this example, "/animals" is our path.
>
> **[0:39](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=39)** This could be slash images or slash data, whatever makes sense for your application and the information that it is providing or utilizing.
>
> **[0:48](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=48)** Then our method is what defines the action that we're going to take with our end point.
>
> **[0:53](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=53)** In this example, we have a GET method , which will retrieve data and provide it to the client.
>
> **[1:00](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=60)** For this course, we are focusing on four route methods.
>
> **[1:04](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=64)** These are closely linked to CRUD operations, post, get, put, and delete.
>
> **[1:11](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=71)** In this lesson, we're going to build on our knowledge of routes and discuss routing parameters.
>
> **[1:17](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=77)** Routing parameters are segments of the URL that are used to capture values specified at positions within a URL.
>
> **[1:26](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=86)** This means that you can pass data points through the URL to help define information that can be used to execute route methods in your application.
>
> **[1:35](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=95)** It is a very cool and powerful feature.
>
> **[1:38](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=98)** To better understand this concept, let's head over to the official express documentation.
>
> **[1:45](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=105)** In the express documentation, within their routing guide, head down to the route parameters section.
>
> **[1:52](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=112)** In this section, they've provided a great example for us to break down.
>
> **[1:57](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=117)** Here we see the path is "/users".
>
> **[2:01](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=121)** Colon user ID slash books, colon book ID.
>
> **[2:06](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=126)** In this example, user ID and book ID represent two different route parameters.
>
> **[2:12](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=132)** You can then see in the request URL right below that those route parameters have been replaced with actual values.
>
> **[2:21](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=141)** 34 for the user ID, and 8989 for the book ID.
>
> **[2:26](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=146)** The values passed in the route correspond to the parameters that have been set for the route.
>
> **[2:31](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=151)** We are looking for a user with an ID of 34 and a book with an ID of 8989.
>
> **[2:39](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=159)** If we wanted to capture or access the values that were passed as route parameters, we would do so using the request.
>
> **[2:47](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=167)** Remember you'll often see requests abbreviated as REQ, and response as RES.
>
> **[2:56](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=176)** Either way of representing them is fine.
>
> **[2:58](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=178)** You can see that the request dot params returns an object with the key value pairs corresponding to the route parameters and their values.
>
> **[3:08](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=188)** Further down in the documentation are some more advanced ways of using route parameters.
>
> **[3:14](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=194)** But for this course, we are just going to stick to the basics for now.
>
> **[3:18](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=198)** Let's head to our editor and create our own route using route parameters.
>
> **[3:23](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=203)** To illustrate how to use routing parameters, we are going to set up a brand new GET end point.
>
> **[3:30](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=210)** Right below our existing GET end point, let's start our new end point with routing parameters.
>
> **[3:36](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=216)** So I'm going to scroll down to our GET, and then right below, I'm just going to make a note here.
>
> **[3:43](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=223)** And this is our GET with routing parameters.
>
> **[3:48](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=228)** All right, and just as we did with our previous GET, we will start with app and then .GET, the method that we need in order to set up our route.
>
> **[4:01](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=241)** Let's pretend like we're creating an end point for a class and we're going to pass a student's ID as a routing parameter.
>
> **[4:09](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=249)** So that will give us the path slash class slash colon ID.
>
> **[4:15](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=255)** So remember our paths will go in quotation marks and that slash class slash colon ID.
>
> **[4:25](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=265)** All right, and we can go ahead and save that.
>
> **[4:27](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=267)** And then next, as we've done in our other routes, we need to add the request and response and set up the rest of the handler.
>
> **[4:35](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=275)** So request, and then response, and then I'm going to set up my arrow function.
>
> **[4:45](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=285)** If we recall from the express documentation, route parameters are stored in the request under the property params.
>
> **[4:53](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=293)** So let's go ahead and console log those out so you can see what this looks like, and we can confirm that we have everything set up correctly.
>
> **[5:01](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=301)** So console log request dot prams.
>
> **[5:08](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=308)** Excellent.
>
> **[5:12](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=312)** Before we head over to our browser, let's go ahead and remove the console log in our app dot listen, that has the mock data.
>
> **[5:21](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=321)** So go ahead and scroll down to app dot listen, it's at the very end of our file.
>
> **[5:26](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=326)** And we're just going to remove that to clear up some of the noise in our console.
>
> **[5:32](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=332)** So make sure you save, and then you'll see now in our terminal, we just have the server is running on port 3000.
>
> **[5:42](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=342)** So let's go ahead.
>
> **[5:43](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=343)** Let's open our browser, side-by-side with our editor.
>
> **[5:48](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=348)** Remember because we are logging out parameters in our server, we will see these logged in our terminal, not in the browser.
>
> **[5:56](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=356)** So in our browser, we will add our route to local host 3000, so, local host 300.
>
> **[6:04](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=364)** And our new route is class.
>
> **[6:08](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=368)** And then for the ID, I'm going to put the number 10 because that's my favorite number.
>
> **[6:13](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=373)** And if we hit enter, we see in the browser that the page itself doesn't change.
>
> **[6:20](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=380)** Because we're not passing any data to the client side at this point.
>
> **[6:24](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=384)** However, if you take a look in our terminal, you will see that the request parameters are being logged out.
>
> **[6:31](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=391)** You should see an object with a key of ID that corresponds to the route parameter ID.
>
> **[6:37](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=397)** And then the value that we passed, which in this case is 10.
>
> **[6:41](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=401)** One thing I want to note is that any route parameters are going to be transmitted as strings.
>
> **[6:48](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=408)** So it's important to keep that in mind, depending on what you want to do with the parameter.
>
> **[6:52](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=412)** In our case, we want to use the parameter as a number.
>
> **[6:56](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=416)** So let's head back to our editor and add some additional code.
>
> **[7:00](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=420)** Let's go ahead and remove the console.
>
> **[7:03](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=423)** And we're going to create a new variable called student ID that we will store the student ID parameter in.
>
> **[7:13](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=433)** So student ID will be set to request, dot params, dot ID.
>
> **[7:23](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=443)** So this corresponds to our request parameter ID, all right?
>
> **[7:27](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=447)** So we have our variable student ID.
>
> **[7:30](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=450)** We've set it to request dot params dot ID.
>
> **[7:34](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=454)** However, as we just mentioned, we want to use this as a number.
>
> **[7:38](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=458)** So we need to change this string to a number, and we can do that using the number function.
>
> **[7:45](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=465)** So in order to do that, we'll actually wrap this request dot params dot ID in the number function.
>
> **[7:52](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=472)** So the number function, if you've never used it before, it's a capital N, number, and then open and close parentheses.
>
> **[8:01](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=481)** And we are passing that request dot params dot ID as the argument in order to convert that from a string to a number.
>
> **[8:11](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=491)** Next, we're going to use this ID to reference our existing mock dataset and return the student that corresponds to the matching ID.
>
> **[8:21](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=501)** Now, I know we didn't call our mock data anything specific.
>
> **[8:25](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=505)** so just for example's sake, we're going to pretend like our mock data is actually a list of students in our class.
>
> **[8:33](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=513)** So let's create a new variable that we'll call student.
>
> **[8:38](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=518)** And we're going to set this equal to data, which is our mock data.
>
> **[8:45](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=525)** That is an array.
>
> **[8:47](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=527)** Now we're going to do some data manipulation using a JavaScript array method called filter.
>
> **[8:55](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=535)** Using the JavaScript array method filter, we're going to filter the data down based on the student ID.
>
> **[9:02](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=542)** If the student dot ID matches student ID, then we will return that student.
>
> **[9:07](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=547)** So we will say data dot filter, all right?
>
> **[9:12](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=552)** And then we're going to call our element "student".
>
> **[9:18](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=558)** And then we're going to implicitly return this function, which if you're not familiar with what this means, it basically means we will not use the return keyword.
>
> **[9:31](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=571)** We will just simply return it without having to explicitly say return.
>
> **[9:38](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=578)** So then if the student dot ID equals student ID, then we want to return that.
>
> **[9:49](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=589)** All right?
>
> **[9:50](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=590)** So let's just break this down before we move on.
>
> **[9:53](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=593)** So we have our student variable.
>
> **[9:55](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=595)** Then we have our data, which is our mock data.
>
> **[9:58](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=598)** And we're going to filter that data using the JavaScript array method filter.
>
> **[10:03](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=603)** We will set up this filter array method and call the element that we're living through "student".
>
> **[10:10](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=610)** And then we will return the student.id, so right from our mock data, where there's student.id that matches our student ID that was passed as a request parameter.
>
> **[10:25](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=625)** Excellent.
>
> **[10:26](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=626)** Now, what we're going to do, is we will pass the response using the method "send to our client".
>
> **[10:37](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=637)** So we will go response dot send, and then we're going to pass the student that was returned.
>
> **[10:45](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=645)** Now let's head back to our browser and see this in action.
>
> **[10:50](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=650)** In our browser, let's go ahead and head to our local host 3000.
>
> **[10:57](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=657)** And we know the route is class.
>
> **[10:59](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=659)** And this time let's pass an ID of 15, and see what we get back.
>
> **[11:05](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=665)** You should see that you now have the student entry that corresponds to the ID 15.
>
> **[11:13](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=673)** You can change this number to anything that you want.
>
> **[11:16](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=676)** And if there is a match, you will get a corresponding result.
>
> **[11:21](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=681)** If not, you'll just get an empty array.
>
> **[11:23](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=683)** So if we try 3, because we know in our data set, we had 25 entries, so if we have 3, we see that we get our student Darlene.
>
> **[11:32](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=692)** However, if we try 50, because we only had 25 entries, we're just getting an empty array at this point.
>
> **[11:40](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=700)** And that's because we used the filter method.
>
> **[11:43](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=703)** And if there's no matches, then nothing is returned.
>
> **[11:47](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=707)** But, awesome work.
>
> **[11:48](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-routing-parameters?u=76281980&t=708)** Routing for amateurs will be a very powerful tool to help you retrieve information using express.

> [!info]- Semantic Content
>
> **Code Keywords:** let (16), pass (5), function (5), class. (3), delete (1)
> **Env Vars:** url (4), crud (1), req (1), res (1)
> **Prerequisites:** set up (6)
> **Definitions:** is a  (2), means that (1), is an  (1), basically means (1)
> **API Endpoints:** get  (4)
> **Tools:** terminal (3), postman (1)
> **CLI Commands:** make (2)
> **UI Navigation:** scroll down (2)

#### What are route handlers?
> [LinkedIn Learning](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-route-handlers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-route-handlers?u=76281980&t=0)** - [Instructor] Even though the phrase route handler may be new to you, you've actually been using route handlers for much of the course thus far.
>
> **[0:07](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-route-handlers?u=76281980&t=7)** Route handlers are the blocks of code that handle logic for your routes.
>
> **[0:12](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-route-handlers?u=76281980&t=12)** This can be in the form of a function, an array of functions, or combinations of both.
>
> **[0:17](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-route-handlers?u=76281980&t=17)** In the route handlers that we've created so far in this course, we've kept them fairly simple with a single callback.
>
> **[0:23](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-route-handlers?u=76281980&t=23)** We'll dive into this in our editor in just a second, but for more information about route handlers, you can definitely reference the Express documentation for more information and more detailed and advanced ways to use route handlers.
>
> **[0:39](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-route-handlers?u=76281980&t=39)** If we look at our first route, our get at the root of the project, our route handler here is a function with a response.json, a single callback function.
>
> **[0:49](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-route-handlers?u=76281980&t=49)** It is perfectly fine if your route handlers are simple and straightforward.
>
> **[0:53](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-route-handlers?u=76281980&t=53)** In fact, you want them to be as much as possible.
>
> **[0:57](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-route-handlers?u=76281980&t=57)** However, there are methods that we can incorporate when it's necessary to have multiple callbacks.
>
> **[1:03](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-route-handlers?u=76281980&t=63)** These opportunities are rare, and for the sake of this course, you should just be familiar with how they work at a basic level.
>
> **[1:10](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-route-handlers?u=76281980&t=70)** In order to add additional callbacks, we can use the function next.
>
> **[1:15](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-route-handlers?u=76281980&t=75)** Next is not specific to Node JS or Express.
>
> **[1:19](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-route-handlers?u=76281980&t=79)** It's actually a third argument that can be passed along with the request and response, and it invokes the next middleware function in the app.
>
> **[1:27](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-route-handlers?u=76281980&t=87)** Much like we could name request and response anything, and I do not recommend you doing that, next could also be named something different.
>
> **[1:36](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-route-handlers?u=76281980&t=96)** However, to avoid confusion it is important that you always name it next.
>
> **[1:41](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-route-handlers?u=76281980&t=101)** Let's go ahead and build a new route using next.
>
> **[1:45](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-route-handlers?u=76281980&t=105)** For simplicity's sake, go ahead and copy our first get route, and paste it right below.
>
> **[1:52](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-route-handlers?u=76281980&t=112)** I'm going to go ahead and make a note here just for our reference later and say, this is get with next.
>
> **[2:00](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-route-handlers?u=76281980&t=120)** We will have this route's path be next.
>
> **[2:04](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-route-handlers?u=76281980&t=124)** So, we'll change that here, and then we're going to need to add next as an argument after request and response.
>
> **[2:15](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-route-handlers?u=76281980&t=135)** We can go ahead and remove this response.json, and we're going to replace it with a console log that says the response will be sent by the next function.
>
> **[2:37](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-route-handlers?u=76281980&t=157)** All right, and then right below that, we're going to add the next function.
>
> **[2:46](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-route-handlers?u=76281980&t=166)** Great.
>
> **[2:46](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-route-handlers?u=76281980&t=166)** Now we have our first callback function set up within our route handler.
>
> **[2:51](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-route-handlers?u=76281980&t=171)** Let's create the second callback.
>
> **[2:53](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-route-handlers?u=76281980&t=173)** After the closing curly brace, add a comma, and hit enter to go to the next line.
>
> **[3:00](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-route-handlers?u=76281980&t=180)** Let's go ahead and add our request and response arguments and set up our arrow function.
>
> **[3:13](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-route-handlers?u=76281980&t=193)** Great.
>
> **[3:15](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-route-handlers?u=76281980&t=195)** Within this function, we're going to send a message to the client that says, so we're going to log, I'm sorry, we're not going to log this out, we're going to use the response, and we're going to use the method send to send this message to the client.
>
> **[3:30](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-route-handlers?u=76281980&t=210)** Which is, I just set up a route with a second callback.
>
> **[3:39](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-route-handlers?u=76281980&t=219)** All right.
>
> **[3:40](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-route-handlers?u=76281980&t=220)** Make sure you save that, and then let's go ahead and check out our browser to see what that looks like.
>
> **[3:49](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-route-handlers?u=76281980&t=229)** In our browser, we're on localhost:3000 right now, and we set up this new route at /next.
>
> **[3:57](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-route-handlers?u=76281980&t=237)** So, if we hit enter and load that, we'll see the message that we sent in our second callback, which is I just set up a route (laughs) with a second callback.
>
> **[4:08](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-route-handlers?u=76281980&t=248)** Excellent.
>
> **[4:09](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-route-handlers?u=76281980&t=249)** So, you're now familiar with how to create routes using a variety of different types of route handlers.

> [!info]- Semantic Content
>
> **Code Keywords:** function (10), let (4)
> **Prerequisites:** set up (5)
> **CLI Commands:** make (2), node (1)
> **File Paths:** response.json (2)
> **URLs:** [localhost:3000](https://localhost:3000) (1)
> **Ports:** :3000 (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)

#### What are common methods for Express routing?
> [LinkedIn Learning](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-common-methods-for-express-routing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-common-methods-for-express-routing?u=76281980&t=0)** - [Instructor] When creating routes with Express, we will use various methods to handle the response and provide feedback to the client.
>
> **[0:07](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-common-methods-for-express-routing?u=76281980&t=7)** Response methods are the methods on the response object that are responsible for transmitting information to the client, if we don't handle the responses, or do so incorrectly, then the necessary information will not make it from the server to the client.
>
> **[0:23](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-common-methods-for-express-routing?u=76281980&t=23)** In this video, we are going to discuss some useful response methods and how to use them in your projects.
>
> **[0:30](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-common-methods-for-express-routing?u=76281980&t=30)** The Express documentation has a full list of response methods that you can incorporate into your projects but, for the sake of this course, we're only going to focus on a few of them to help get you started.
>
> **[0:43](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-common-methods-for-express-routing?u=76281980&t=43)** Some of these should look familiar to you as we have been using the JSON method and the send method at various points in our project thus far.
>
> **[0:52](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-common-methods-for-express-routing?u=76281980&t=52)** The JSON method simply sends the JSON response.
>
> **[0:56](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-common-methods-for-express-routing?u=76281980&t=56)** Right now, we're using this at the root of our project to display our mock data.
>
> **[1:01](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-common-methods-for-express-routing?u=76281980&t=61)** The send method sends the HTTP response to the client.
>
> **[1:07](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-common-methods-for-express-routing?u=76281980&t=67)** We've been using this mainly to send strings to the client, printing various messages in the browser.
>
> **[1:13](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-common-methods-for-express-routing?u=76281980&t=73)** The other two methods are new to us.
>
> **[1:16](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-common-methods-for-express-routing?u=76281980&t=76)** The download method is used to transfer a file as an attachment, depending on your browser, you may be prompted to download a file, or it will just automatically download the file to your computer.
>
> **[1:29](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-common-methods-for-express-routing?u=76281980&t=89)** The redirect method is used to redirect the client to a different URL.
>
> **[1:34](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-common-methods-for-express-routing?u=76281980&t=94)** This could be local to the application, or a completely different website.
>
> **[1:39](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-common-methods-for-express-routing?u=76281980&t=99)** Let's head to our editor and create some new routes using the response methods we just learned about.
>
> **[1:45](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-common-methods-for-express-routing?u=76281980&t=105)** For ease in creating our redirect method route let's just go ahead and copy our original get.
>
> **[1:52](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-common-methods-for-express-routing?u=76281980&t=112)** And we'll paste this in right below the download method that we created just a second ago.
>
> **[1:58](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-common-methods-for-express-routing?u=76281980&t=118)** And I'll add a note that this is our redirect method.
>
> **[2:02](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-common-methods-for-express-routing?u=76281980&t=122)** Our redirect method, we're going to have that at the path redirect so we can save that.
>
> **[2:07](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-common-methods-for-express-routing?u=76281980&t=127)** And then, we can actually remove this response .json.
>
> **[2:12](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-common-methods-for-express-routing?u=76281980&t=132)** So with the redirect method it will be applied to the response object, and the redirect method, as discussed previously, it can redirect you to an external site, or it can redirect you within your application.
>
> **[2:35](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-common-methods-for-express-routing?u=76281980&t=155)** But, for this particular example, we're going to use an external site.
>
> **[2:39](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-common-methods-for-express-routing?u=76281980&t=159)** So, within the parentheses, the argument that we're going to pass here to this redirect method is in quotation marks, we're going to go to the LinkedIn URL.
>
> **[2:49](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-common-methods-for-express-routing?u=76281980&t=169)** So that is [http://www.linkedin.com](http://www.linkedin.com).
>
> **[2:56](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-common-methods-for-express-routing?u=76281980&t=176)** So when we go to localhost:3000/redirect then we're going to be automatically redirected to the LinkedIn page.
>
> **[3:06](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-common-methods-for-express-routing?u=76281980&t=186)** So let's test us in our browser and make sure it's working as expected.
>
> **[3:12](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-common-methods-for-express-routing?u=76281980&t=192)** All right so if we change this to redirect and hit Enter, you'll see that you are automatically redirected to the LinkedIn home page, great work.
>
> **[3:26](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-common-methods-for-express-routing?u=76281980&t=206)** Remember, this is not an exhaustive list of response methods that are available.
>
> **[3:32](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-are-common-methods-for-express-routing?u=76281980&t=212)** You can check out the Express documentation for additional methods to help you build future projects.

> [!info]- Semantic Content
>
> **Env Vars:** json (3), url (2), http (1)
> **Code Keywords:** let (3), pass (1)
> **CLI Commands:** make (2)
> **URLs:** [http://www.linkedin.com](http://www.linkedin.com) (1), [localhost:3000](https://localhost:3000) (1)
> **UI Navigation:** go to (2)
> **Ports:** :3000 (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### What is route chaining in Express?
> [LinkedIn Learning](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=0)** - [Instructor] When creating routes with Express, especially with more complex projects, we may have several routes with the same path, but using different methods.
>
> **[0:11](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=11)** Using the method route on our app, we can chain several methods together to keep our code clean and easy to understand.
>
> **[0:19](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=19)** What might this look like?
>
> **[0:21](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=21)** In our index JS file, I've created three routes with the same path, slash class, and they are each using a different method, get, post, and put.
>
> **[0:35](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=35)** Let's first start by adding app.route.
>
> **[0:39](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=39)** So, right above this, right above our route chaining in our index JS file here, I'm going to add app.route.
>
> **[0:50](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=50)** All right, and this is going to take an argument that represents our path.
>
> **[0:54](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=54)** So in this case, that will be class.
>
> **[0:58](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=58)** So, make sure you have the slash class.
>
> **[1:02](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=62)** All right.
>
> **[1:03](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=63)** From here, all we need to do is chain our existing methods to this route.
>
> **[1:10](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=70)** I'm going to copy everything from dot get to the end and paste this right after.
>
> **[1:18](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=78)** So, I will take this, and then I'm just going to add that right below.
>
> **[1:28](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=88)** All right, so I will need to remove that semi-colon.
>
> **[1:33](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=93)** So, we have our first route chained here, which is get.
>
> **[1:38](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=98)** However, I need to go ahead and remove the reference to the path within this get here.
>
> **[1:45](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=105)** So, the only thing that should be there now is request and response, and then your arrow function, which is sending retrieve class info.
>
> **[1:56](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=116)** We will also need to go ahead and remove this semi-colon.
>
> **[2:00](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=120)** All right so we have the get method done.
>
> **[2:02](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=122)** I'm going to go ahead and comment this out, and then let's move on to our post.
>
> **[2:08](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=128)** So, we're going to do the exact same thing for the post and the put.
>
> **[2:13](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=133)** So, I can copy this and then paste it right after the end of the get method.
>
> **[2:21](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=141)** So, I'm going to actually put this on a separate line, and put this on a separate line as well.
>
> **[2:28](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=148)** Just so you can see a little bit better, the difference, and before I move on and add the put, remember to remove the path.
>
> **[2:39](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=159)** Okay so, and this did some automatic formatting for me here, but you can see we've got our get, we've got our post, and our post is doing a response.send that says create class info.
>
> **[2:51](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=171)** All right, and then I'm going to just comment this out, and then we're going to add our put.
>
> **[2:58](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=178)** So, I'll copy that, I'm going to remove the semi-colon and paste the put in here, and then we need to remove the path.
>
> **[3:08](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=188)** All right, so now, and let me actually just comment this out before I forget to do that, and save.
>
> **[3:15](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=195)** So, let's take a look at this really quick.
>
> **[3:17](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=197)** So, we have app.route and we added the route method with the path, class, to allow us to chain all of these methods together.
>
> **[3:30](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=210)** So, we have our get route that is so it's going to be get to the class path, and when we hit that, it's going to say retrieve class info.
>
> **[3:43](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=223)** That's being sent to the client.
>
> **[3:46](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=226)** When you do a post to slash class, you're going to get the response, create class info, and then when you do a put to the route class, you're going to get a response of update class info.
>
> **[4:02](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=242)** Before we move to the browser, and we're also going to use Postman to look at all of these responses.
>
> **[4:09](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=249)** Make sure that you have all of the original routes commented out.
>
> **[4:14](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=254)** All right, let's go ahead to Postman and test these routes.
>
> **[4:20](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=260)** All right, so I'm here in Postman.
>
> **[4:22](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=262)** I'm just going to open a new tab and we're going to go to localhost 3000.
>
> **[4:30](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=270)** So, that was saved their for us, slash class.
>
> **[4:33](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=273)** And we already have this set to the get method by default.
>
> **[4:37](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=277)** So if we hit send, then you should see in the body here retrieve class info, which is what we would expect to see given how we set up our route.
>
> **[4:49](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=289)** Let's try post.
>
> **[4:50](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=290)** So, the only thing that we'll have to change here is in the dropdown menu, from get, we're going to change this to post.
>
> **[4:57](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=297)** The route is still the same, but when we hit send, we now see create class info in the body.
>
> **[5:05](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=305)** All right, and then last but not least, let's change the method to put, and again, the route stays the same.
>
> **[5:15](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=315)** And when we hit send, we'll see update class info in the body.
>
> **[5:20](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=320)** Great work.
>
> **[5:21](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-route-chaining-in-express?u=76281980&t=321)** You've now mastered the basics of Express routing.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), class, (4), class. (3), this, (2), case, (1)
> **Tools:** postman (3)
> **CLI Commands:** make (2)
> **UI Navigation:** dropdown (1)
> **Best Practices:** remember to (1)
> **Prerequisites:** make sure you have (1)
> **Speakers:** - [instructor] (1)


### 4. Express Essentials: Middleware

> [[#Table of Contents|↑ Back to Table of Contents]]

#### What is middleware?
> [LinkedIn Learning](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-middleware?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-middleware?u=76281980&t=0)** - [Narrator] When you are using Express, you're going to hear the term middleware quite often.
>
> **[0:05](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-middleware?u=76281980&t=5)** What exactly do we mean when we say middleware?
>
> **[0:09](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-middleware?u=76281980&t=9)** According to the official Express documentation, middleware functions are functions that have access to the request object, the response object and the next function in the applications request response cycle.
>
> **[0:24](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-middleware?u=76281980&t=24)** Middleware performs a number of tasks, executing code, changing the request in response objects, ending the request response cycle, or calling next.
>
> **[0:36](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-middleware?u=76281980&t=36)** The diagram here on the Express documentation outlines the role of each aspect of a middleware function call, each of which we have discussed up to this point.
>
> **[0:46](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-middleware?u=76281980&t=46)** Now that we have a better understanding of the term middleware, let's head back to our editor and take a look at the middleware that we've written up to this point.
>
> **[0:55](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-middleware?u=76281980&t=55)** In our index.js file, if you scroll down to around line 48, where we created a get route that incorporated routing parameters, you can see that I've added a few comments to help further explain the concept of middleware.
>
> **[1:09](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-middleware?u=76281980&t=69)** Effectively, all of our code above handling the response is considered middleware.
>
> **[1:14](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-middleware?u=76281980&t=74)** In this particular example, we access the routing parameters via the request object and utilize that data to render the response that we send to the client.
>
> **[1:24](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-middleware?u=76281980&t=84)** Middleware can come in a number of forms.
>
> **[1:27](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-middleware?u=76281980&t=87)** Some is built in to Express.
>
> **[1:30](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-middleware?u=76281980&t=90)** Some helps us handle errors, and we can even add third-party middleware to our applications.
>
> **[1:36](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/what-is-middleware?u=76281980&t=96)** In the next few videos, we will explore each of these concepts more in depth.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), let (1)
> **File Paths:** index.js (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [narrator] (1)

#### Out of the box: Built-in middleware with Express
> [LinkedIn Learning](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=0)** - [Instructor] Express comes with a few additional built-in middleware functions that can be helpful in the construction of applications.
>
> **[0:08](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=8)** Currently, there are three built-in middleware functions with Express.
>
> **[0:12](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=12)** Static, JSON, and URL-encoded.
>
> **[0:15](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=15)** Express.static serves static assets, including files and images.
>
> **[0:20](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=20)** If you recall from a previous video, we use this method to serve images in our application.
>
> **[0:26](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=26)** The next is express.json.
>
> **[0:28](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=28)** It parses incoming requests with JSON payloads and is based on body parser.
>
> **[0:34](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=34)** Body parser is a Node.js parsing middleware.
>
> **[0:38](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=38)** The final built-in middleware function is express.urlencoded, which is similar to express.json, except it parses incoming requests with URL-encoded payloads.
>
> **[0:49](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=49)** It is also based on body parser.
>
> **[0:52](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=52)** Before we move on, let's take a look at an example of JSON versus URL-encoded payloads to make sure we understand the difference.
>
> **[1:01](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=61)** You can see the both examples contain the same information but in two different formats.
>
> **[1:06](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=66)** At this point, JSON should look familiar to you.
>
> **[1:10](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=70)** We have our keys and values within an object.
>
> **[1:13](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=73)** The URL-encoded version is assembled in a single block with the keys and values separated by an equals sign.
>
> **[1:21](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=81)** Now, that we have a better understanding of the differences between the two, let's head to our editor and incorporate these middleware functions into our application.
>
> **[1:30](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=90)** If your terminal is not open, make sure that you go ahead and open it now.
>
> **[1:37](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=97)** Let's get started right below where we used express.static previously, and we're just going to add a few lines there.
>
> **[1:45](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=105)** We'll start with app.use.
>
> **[1:50](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=110)** All right, use method, and then we're going to pass in express with the JSON method applied.
>
> **[1:58](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=118)** All right and then save that.
>
> **[2:00](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=120)** So with this we're specifying that we want our requests to be JSON.
>
> **[2:07](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=127)** The next thing we'll want to do is create a post route that we can use to illustrate how express.json and express.urlencoded work.
>
> **[2:17](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=137)** So actually, before we do that, I'm just going to add a comment here, and we're using express.json and express.urlencoded and save.
>
> **[2:31](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=151)** Okay, so we're going to create a new post route, and I'm just going to scroll down a little bit, and we're going to add that below our GET at the root.
>
> **[2:42](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=162)** So I'm going to add a comment here.
>
> **[2:45](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=165)** So this is going to be a POST, and this is going to be tied to express.json and express.urlencoded.
>
> **[2:53](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=173)** Great.
>
> **[2:54](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=174)** All right, so the path for this is going to be item.
>
> **[3:00](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=180)** So because this is a post, we'll start with app.post, and our path, we said it's going to be items.
>
> **[3:08](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=188)** So it's /item, and then we need to set up our function and add in our request and response and then get our arrow function set up as well.
>
> **[3:21](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=201)** In this instance, we're just going to log out the request body and send that to the client.
>
> **[3:27](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=207)** Because this end point is a post, we're going to need to use postman to test, but let's go ahead and get this set up here.
>
> **[3:34](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=214)** So we're going to log out.
>
> **[3:37](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=217)** Oops, console.log, requests.body.
>
> **[3:42](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=222)** All right, so we'll log that out, and then we're also going to send the request body to the client.
>
> **[3:49](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=229)** So we do that using response.send, and then we're just passing in the request body as the argument there.
>
> **[3:58](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=238)** All right, so now let's go ahead and transition to postman and test.
>
> **[4:05](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=245)** In postman, let's go ahead and open a new tab, and we can type localhost3000/item, and then we need to set the HTTP method to POST.
>
> **[4:21](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=261)** Now, we have a few additional steps that we're going to need to implement here in postman to see our express.json in action.
>
> **[4:30](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=270)** The first is to set the content type in the headers of the end point call.
>
> **[4:35](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=275)** So in order to do this, we'll click on Headers, which is right below that URL bar, and when we click in there, you'll see a KEY and VALUE field.
>
> **[4:45](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=285)** Both of these fields will auto-populate, meaning if you start to type in something, you'll get a list of different options.
>
> **[4:52](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=292)** So that's super helpful.
>
> **[4:54](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=294)** So we're going to click into KEY and we're going to start typing content and we see Content Type appears.
>
> **[5:03](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=303)** So that's what we want to select, Content Type, and then for the value, we want to use JSON, and the value that corresponds to this will be application/json, but if I go ahead and type json, we'll see that that pops up as the first option.
>
> **[5:22](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=322)** Before we send the request, we need to set up the body.
>
> **[5:27](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=327)** So to the right of the headers, you'll see Body, and you can go ahead and click there, and then you'll see a couple options here, none, form data, x-www-form-urlencoded, raw, binary and GraphQL.
>
> **[5:43](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=343)** We want to select raw.
>
> **[5:45](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=345)** On the far right, you should see that this is set to JSON.
>
> **[5:50](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=350)** If not, click this dropdown menu and make sure that it's set appropriately.
>
> **[5:56](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=356)** All right, now, we're going to click into this space, where you see there's the number one, and we're going to supply a body to our route.
>
> **[6:06](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=366)** Since our route is item, let's just set the key to item.
>
> **[6:11](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=371)** So our body is going to be an object.
>
> **[6:14](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=374)** So we need our curly braces and with the key item.
>
> **[6:18](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=378)** So item's going to be in quotation marks and then a colon, and let's give this item value a value of rollerblades.
>
> **[6:28](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=388)** That sounds fun. All right?
>
> **[6:31](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=391)** And now we can send our request.
>
> **[6:36](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=396)** So in the body of postman, you should see exactly what we just sent via the raw body, which is our object here with the key item and the value rollerblades.
>
> **[6:50](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=410)** Transitioning back to our editor where we have our terminal open, you can also see that rollerblades was logged on the server side as well, and that comes from that console log of request.body.
>
> **[7:06](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=426)** So the console log request.body provided that to us in our terminal when we hit the end point item with a post HTTP method.
>
> **[7:17](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=437)** Now, let's transition to urlencoded.
>
> **[7:21](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=441)** We're going to scroll back up to where we have our app.use with express.json, and we can go ahead and comment that out for now, and we're going to replace that with app.use.
>
> **[7:36](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=456)** So just like we started with before, and we're going to say express and this time, .urlencoded, all right?
>
> **[7:46](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=466)** Now, here, urlencoded also takes an argument, and we want to pass this argument extended true because it will give us more of a JSON-like experience.
>
> **[8:02](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=482)** So inside the parentheses, we can create a new object and it's going to have the key of extended, and you'll see that auto-completed for me there, and that's going to be set to true.
>
> **[8:16](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=496)** All right, so go ahead and save that and additionally, this will prevent us from getting any errors with our code as well.
>
> **[8:23](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=503)** So now, we'll need to head back to postman, make a few adjustments, and then we're going to send the request again using the urlencoded.
>
> **[8:33](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=513)** So the first thing that we'll need to change here is the content type.
>
> **[8:37](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=517)** So we need to go back to our Headers menu and in the VALUE field, we need to clear this out.
>
> **[8:45](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=525)** So the content type key is going to stay but now, we're going to change the value of the content type.
>
> **[8:52](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=532)** So if you clear that out and start typing url, you should see this, application/x-www-form-urlencoded, and that's what you'll need to select, then we're going to click into the body, and we're going to change the raw to that same value that we just selected in the headers, this x www-form-urlencoded.
>
> **[9:19](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=559)** We're going to use the same data here but in a different way.
>
> **[9:24](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=564)** So here it prompts you for a key, which instead of typing the object out and adding the quotation marks to indicate that it's a key, we can just simply type item here and then for our value, we will do the same thing as we did before, and we'll provide a value of rollerblades.
>
> **[9:42](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=582)** So when we hit send, we're going to see the exact same body.
>
> **[9:49](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=589)** It just looks a little bit different.
>
> **[9:51](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=591)** If you remember, from the previous example, they looked identical, but since we're using the urlencoded value, it's a little bit different in terms of how we pass the body, but not how the body is received.
>
> **[10:05](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=605)** So now, let's head back to our editor and see what that looks like in our terminal.
>
> **[10:11](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/out-of-the-box-built-in-middleware-with-express?u=76281980&t=611)** If we take a look at our terminal, we see that we also get this logged out on the server side, as we would have expected from our previous example.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), static (4), function (3), pass (3), this, (2)
> **Env Vars:** json (9), url (5), post (2), http (2), key (2)
> **Tools:** postman (6), terminal (5)
> **File Paths:** express.json (7), node.js (1)
> **CLI Commands:** make (4), node (1)
> **Prerequisites:** set up (4), you'll need (1)
> **UI Navigation:** scroll down (1), click on (1), dropdown (1)
> **Definitions:** is a  (3)

#### Handling errors: Utilizing middleware for errors
> [LinkedIn Learning](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=0)** - [Instructor] When creating endpoints, it is really important to make sure that you take into account handling errors that might arise.
>
> **[0:07](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=7)** It's not only important for someone who is using your application but also when it comes to tracing the source of the error.
>
> **[0:14](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=14)** Let's start in our editor around line 39 where we chained our routes together.
>
> **[0:19](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=19)** Since we don't have an existing error, we can actually manually throw one.
>
> **[0:24](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=24)** Being able to do so is really helpful when you're trying to make sure you have thoroughly tested your endpoints.
>
> **[0:31](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=31)** In the get method, go ahead and comment out the response.send.
>
> **[0:36](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=36)** Right below that, we're going to manually throw an error by typing throw new and then invoking the Error function.
>
> **[0:46](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=46)** Make sure you save that.
>
> **[0:48](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=48)** And by adding this throw new Error, Express will catch the error and provide additional information in the browser.
>
> **[0:56](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=56)** So let's go ahead and see what that looks like in the browser.
>
> **[1:00](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=60)** If we head to localhost:3000/class because we're using that chained route, and we threw the error in the get, so I have localhost:300/class.
>
> **[1:11](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=71)** I hit Enter and we now have an error that is pointing to index.js at line 43.
>
> **[1:19](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=79)** So this is exactly where we threw that error.
>
> **[1:22](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=82)** Now, while this is helpful, there are some other things that we can do in order to give us some more detailed and more custom error handling.
>
> **[1:33](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=93)** So let's take things up a notch and let's utilize some built-in middleware to handle errors.
>
> **[1:39](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=99)** Back here in our editor, we're going to create an error handling middleware function.
>
> **[1:45](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=105)** In terms of organization, we want our custom error handling function to be at the end of our routing file.
>
> **[1:51](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=111)** So it should be after the last function and/or before the app.listen.
>
> **[1:57](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=117)** So let's go ahead and scroll down to the bottom of our file here and we're going to add it right above the app.listen.
>
> **[2:06](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=126)** The first thing that we'll need to do is use app.use.
>
> **[2:11](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=131)** So app.use.
>
> **[2:13](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=133)** And the app.use method is going to take some different arguments or additional arguments I should say than ones that we've used previously.
>
> **[2:27](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=147)** So we're going to add the parentheses where we'll pass those arguments and then I'm going to set up my arrow function first before adding those in.
>
> **[2:39](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=159)** So this custom error handler takes four arguments.
>
> **[2:43](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=163)** Error, request, response and next.
>
> **[2:47](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=167)** And remember, these arguments can be written in full or abbreviated.
>
> **[2:51](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=171)** So the new one for us is error.
>
> **[2:54](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=174)** For this example, I'm actually going to abbreviate versus writing them out in their full form as I've done in other routes just to give you an example of both.
>
> **[3:05](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=185)** So here, the arguments are going to be err for error, req for request, res for response and then we're actually going to fully type out next.
>
> **[3:16](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=196)** All right, and go ahead and save that.
>
> **[3:18](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=198)** Within our route handler function, we're first going to console.log the error using console.error.
>
> **[3:25](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=205)** So console.error.
>
> **[3:30](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=210)** And we're going to pass in error or err.stack.
>
> **[3:35](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=215)** Stack represents the stack trace of the error, and this is what we saw in the browser previously.
>
> **[3:43](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=223)** The next thing that we're going to do is add a response status.
>
> **[3:51](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=231)** So the response status is going to be a 500 and we're going to send a message to the client that says something like something is broken.
>
> **[4:00](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=240)** So we'll say response.status.
>
> **[4:05](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=245)** And this takes an argument of the status code, which is going to be 500.
>
> **[4:10](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=250)** And then we can chain the method send and pass a message.
>
> **[4:16](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=256)** So we're going to say, as I mentioned, something is broken.
>
> **[4:22](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=262)** All right, and we're going to add an exclamation point because we really want to drive home that something is broken.
>
> **[4:27](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=267)** So for the purposes of this course, we're just keeping the error message simple but you should try to make your error messages as informative as possible for the user based on your application.
>
> **[4:41](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=281)** All right, now before we transition to the browser, make sure you've saved.
>
> **[4:45](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=285)** I'm going to double check.
>
> **[4:47](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=287)** You see nodemon is restarting looking for those changes.
>
> **[4:51](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=291)** And let's go ahead and transition back to the browser.
>
> **[4:56](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=296)** If we refresh this page, we should now see the message something is broken in the browser.
>
> **[5:03](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=303)** All right, so that did exactly what we expected.
>
> **[5:06](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=306)** Now let's transition back to our terminal in our editor and let's see what's there for us.
>
> **[5:14](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=314)** So back here in our editor, I'm actually going to make the terminal a little bit bigger and you can see that in our terminal here, right below where we have our server is running on port 3000.
>
> **[5:27](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=327)** We now have the stack trace error that was previously being printed in the browser.
>
> **[5:33](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=333)** So I hope you can see why it is better for the user, for the user experience to set up that custom error handler and have a clean, clear message that's being passed to the client and then on the server side, you're actually getting that stack trace error, so as the engineer or developer, you can actually trace down where you're having the errors and amend them accordingly.
>
> **[6:02](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/handling-errors-utilizing-middleware-for-errors?u=76281980&t=362)** So congratulations, you've successfully created a custom error handler function.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), function (7), throw (4), pass (3), class. (1)
> **CLI Commands:** make (6)
> **Ports:** :3000 (1), :300 (1), port 3000 (1)
> **Tools:** terminal (3)
> **URLs:** [localhost:3000](https://localhost:3000) (1), [localhost:300](https://localhost:300) (1)
> **Prerequisites:** set up (2)
> **File Paths:** index.js (1)
> **UI Navigation:** scroll down (1)

#### Third-party middleware: Suggestions and how to add it
> [LinkedIn Learning](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/third-party-middleware-suggestions-and-how-to-add-it?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/third-party-middleware-suggestions-and-how-to-add-it?u=76281980&t=0)** - In addition to built-in middleware, Express also has an extensive list of third-party middleware that is available to help you enhance your projects.
>
> **[0:10](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/third-party-middleware-suggestions-and-how-to-add-it?u=76281980&t=10)** For the scope of this course, there is not a package that aligns with our needs, so we won't be installing any third-party middleware at this time.
>
> **[0:18](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/third-party-middleware-suggestions-and-how-to-add-it?u=76281980&t=18)** The Express documentation is a valuable source of information for any needs and questions that may arise when you're building a project.
>
> **[0:26](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/third-party-middleware-suggestions-and-how-to-add-it?u=76281980&t=26)** The documentation has extensive information regarding what is available and further information on how to install and set up these modules, should you ever need them.
>
> **[0:37](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/third-party-middleware-suggestions-and-how-to-add-it?u=76281980&t=37)** First is a list of middleware modules maintained by the Express team.
>
> **[0:42](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/third-party-middleware-suggestions-and-how-to-add-it?u=76281980&t=42)** Why is that significant?
>
> **[0:44](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/third-party-middleware-suggestions-and-how-to-add-it?u=76281980&t=44)** When we are building applications and using external modules, it is important that the code is maintained and stable.
>
> **[0:51](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/third-party-middleware-suggestions-and-how-to-add-it?u=76281980&t=51)** There are a lot of middleware packages available out there, but they may not be maintained and could possibly have security issues.
>
> **[0:59](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/third-party-middleware-suggestions-and-how-to-add-it?u=76281980&t=59)** Within the list, each module has additional information regarding that particular module, why you should use it, how to install, and more.
>
> **[1:08](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/third-party-middleware-suggestions-and-how-to-add-it?u=76281980&t=68)** Let's take a look at the detailed information around the body parser module.
>
> **[1:15](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/third-party-middleware-suggestions-and-how-to-add-it?u=76281980&t=75)** Here we have the page devoted to body parser.
>
> **[1:19](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/third-party-middleware-suggestions-and-how-to-add-it?u=76281980&t=79)** And if we scroll down a little bit, we'll get more information regarding installation.
>
> **[1:24](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/third-party-middleware-suggestions-and-how-to-add-it?u=76281980&t=84)** Typically, the installation is very straightforward.
>
> **[1:27](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/third-party-middleware-suggestions-and-how-to-add-it?u=76281980&t=87)** NPM install and usually the module's name.
>
> **[1:30](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/third-party-middleware-suggestions-and-how-to-add-it?u=76281980&t=90)** So here, no different.
>
> **[1:31](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/third-party-middleware-suggestions-and-how-to-add-it?u=76281980&t=91)** We can see it's NPM install and then body parser.
>
> **[1:35](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/third-party-middleware-suggestions-and-how-to-add-it?u=76281980&t=95)** One thing I want to know in regards to getting projects set up with these modules is how they are imported.
>
> **[1:41](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/third-party-middleware-suggestions-and-how-to-add-it?u=76281980&t=101)** Right below the installation is API.
>
> **[1:43](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/third-party-middleware-suggestions-and-how-to-add-it?u=76281980&t=103)** And this denotes how the module would be imported into the project.
>
> **[1:47](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/third-party-middleware-suggestions-and-how-to-add-it?u=76281980&t=107)** You'll notice in the documentation that it is different from how we are importing our modules in our project.
>
> **[1:54](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/third-party-middleware-suggestions-and-how-to-add-it?u=76281980&t=114)** Here it is var bodyParser equals require body parser.
>
> **[1:59](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/third-party-middleware-suggestions-and-how-to-add-it?u=76281980&t=119)** Please note that in this course, we are using ES6 syntax.
>
> **[2:03](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/third-party-middleware-suggestions-and-how-to-add-it?u=76281980&t=123)** So in our case, we'd say, import body parser from body parser.
>
> **[2:10](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/third-party-middleware-suggestions-and-how-to-add-it?u=76281980&t=130)** Hopping back to the main list of middleware, below the list of modules maintained by Express is another list with popular middleware modules.
>
> **[2:19](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/third-party-middleware-suggestions-and-how-to-add-it?u=76281980&t=139)** You'll see that they have a disclaimer that these modules are not maintained by the Express team.
>
> **[2:26](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/third-party-middleware-suggestions-and-how-to-add-it?u=76281980&t=146)** However, the fact that they are on the official Express site is certainly a positive endorsement.

> [!info]- Semantic Content
>
> **Code Keywords:** module (5), let (1), var (1), require (1), case, (1)
> **Prerequisites:** install (4), set up (2)
> **Env Vars:** npm (2), api (1), es6 (1)
> **CLI Commands:** npm (2)
> **Documentation:** the documentation (2)
> **Definitions:** is a  (2)
> **Code Identifiers:** bodyparser (1)
> **UI Navigation:** scroll down (1)


### 5. Taking Express One Step Further

> [[#Table of Contents|↑ Back to Table of Contents]]

#### How to debug your express application
> [LinkedIn Learning](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=0)** - [Instructor] The debug mode is a way to see all of the internal logs used in Express.
>
> **[0:05](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=5)** According to the Official Express Documentation, Express uses the Debug module internally to log information about route matches, middleware functions that are in use, application mode, and the flow of the request response cycle.
>
> **[0:21](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=21)** When launching the app, instead of using npm start, we would use some form of the commands you see here.
>
> **[0:27](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=27)** We are going to have to add an extra flag, but we'll get more into that momentarily.
>
> **[0:32](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=32)** The Debug command is fairly consistent across all operating systems, but you can see with Windows users there is a slight difference, so keep that in mind if you're using a Windows machine.
>
> **[0:44](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=44)** The logs that you see below after running the command are for an app generated by Express Application Generator.
>
> **[0:51](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=51)** However, what we'll see in our logs will look fairly similar.
>
> **[0:55](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=55)** Let's head back to our editor where we have our terminal and see what this looks like with our project.
>
> **[1:02](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=62)** If you don't have the terminal open, make sure you go ahead and do so.
>
> **[1:06](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=66)** I actually have my server running and you probably do too, but we're going to go ahead and shut that down using Control + C.
>
> **[1:15](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=75)** And I'm going to clear this just to make things a little bit cleaner.
>
> **[1:20](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=80)** And what we're going to do is then run the Debug command that we just saw on the Express Documentation page.
>
> **[1:30](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=90)** The Debug command will go a little bit something like this.
>
> **[1:33](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=93)** It will be DEBUG in all caps, equals express, colon, asterisk and then a space, node, dash, dash, experimental-json-modules, space, index.js.
>
> **[1:56](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=116)** Remember, if you're using a Windows machine, yours will look slightly different at the beginning, but pretty much everything to the right of the asterisk is going to be the same.
>
> **[2:06](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=126)** Now, let's break this down before we hit Enter and see this in action.
>
> **[2:11](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=131)** So, DEBUG=express:*, that's just the basic debug script
>
> **[2:20](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=140)** so to speak that we will use to debug with our application.
>
> **[2:24](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=144)** If you take a look, I have my package JSON file open, and it's okay if you don't have yours open, we will come back to that shortly.
>
> **[2:32](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=152)** But if you remember, when we were setting up our start script, we had to add the flag experimental JSON modules, because we're using ES6 and we're using JSON, so that's why we have to include it in our debug script.
>
> **[2:49](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=169)** And then, index.js is just referencing the entry point of our project, okay?
>
> **[2:56](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=176)** If you're ready go ahead and hit Enter, and you will see the debugger in action.
>
> **[3:05](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=185)** I'm going to make my terminal a bit bigger, just so we can take a look at everything that's here.
>
> **[3:13](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=193)** Scrolling back up to the very top where this starts, all right?
>
> **[3:20](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=200)** You can see all of the output here based on our server.
>
> **[3:24](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=204)** There's information about the application, there's information about the routes, and even what corresponding HTTP method they're using.
>
> **[3:33](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=213)** And then anything we have console logged is still here, so if we keep scrolling down you see all of these routes.
>
> **[3:40](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=220)** We have a lot of routes that we created with this project, but then we also still have our console log here regarding the port number that our server is running on.
>
> **[3:51](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=231)** Let's take a look, we're going to head over to our browser, and we're going to see what the debugger looks like whenever a route has been hit or you transition to a new route.
>
> **[4:04](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=244)** Let's go ahead back over to our browser and head to one of our routes, and then we'll come back and look at our terminal.
>
> **[4:12](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=252)** All right, starting here in a new tab, I'm just going to go to local host 3,000 where we have our server running, and as we would expect we have all of our mock data.
>
> **[4:22](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=262)** that's still being served to the client here.
>
> **[4:25](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=265)** Let's go to our class route that we created with our routing parameters.
>
> **[4:30](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=270)** So that slash, class, and then let's go to student five.
>
> **[4:37](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=277)** We hit Enter, on the client side we get back the student information here, okay?
>
> **[4:44](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=284)** And let's head back to our editor in terminal and let's see what the debugger printed out in regards to our navigating in between routes.
>
> **[4:52](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=292)** All right, back here at our editor in our terminal, we see that there's some new information from the debugger that's here.
>
> **[5:00](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=300)** They're all in reference to Express router.
>
> **[5:04](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=304)** You can see the first one after our console log regarding our port number, it was dispatching a GET, so out the route.
>
> **[5:11](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=311)** And then if you look a bit further down, you can see that we went to the class route with the student ID of five.
>
> **[5:20](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=320)** And so, all of that information is provided to us by the debugger.
>
> **[5:25](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=325)** Now, the debugger Command is kind of long, just like the command that we used for our npm start.
>
> **[5:33](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=333)** To make debugging a little bit easier, let's add it to our package .json file so we don't have to type that out each time.
>
> **[5:41](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=341)** I'm going to make my terminal smaller, and if you don't already have your package .json file open, go ahead and open your package JSON and scroll down to where we have the scripts and our npm start.
>
> **[5:57](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=357)** In this script's object we're going to add a debug.
>
> **[6:01](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=361)** I'll just go to a new line and then in quotes here, we'll add the key for debug and then some quotes.
>
> **[6:11](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=371)** This is going to start just like we typed in our terminal.
>
> **[6:16](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=376)** It's going to start with capital DEBUG, equals, express, colon, asterisk.
>
> **[6:25](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=385)** Now I'm going to add a space.
>
> **[6:27](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=387)** Now, remember if you're using a Windows operating system, this is going to be a little bit different, this first part.
>
> **[6:34](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=394)** Just make sure you reference the Express documentation to make sure that you have the right thing typed in.
>
> **[6:41](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=401)** Then we're going to take everything that's in our start script, and we're going to add it after this DEBUG, express, colon, asterisk.
>
> **[6:50](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=410)** I'm just going to copy this and then add it right here.
>
> **[6:56](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=416)** All right? And save.
>
> **[6:57](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=417)** Make sure you save, always important to save.
>
> **[7:00](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=420)** Basically we're saying DEBUG, right?
>
> **[7:04](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=424)** And then this is almost identical to what we had typed in the command line in our terminal.
>
> **[7:12](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=432)** We just added the nodemon so that way, if we are running in debug mode and there's a change, we don't have to start and stop the server.
>
> **[7:22](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=442)** We want to make sure that we include that, we know we need our experimental JSON modules flag, and then we have our other information for ES6 with the Babel node and then our entry index JS file, okay?
>
> **[7:35](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=455)** Let's go ahead, we have debug mode running, go back to your terminal, and go ahead and shut the server down.
>
> **[7:44](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=464)** And I'm going to clear, and then I'm going to use our new script, so I will type an npm run debug.
>
> **[7:56](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=476)** And that will put me into debug mode.
>
> **[8:01](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=481)** Just to show you, I'm just going to make this a little bit bigger.
>
> **[8:04](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=484)** And you can see we have everything that we had previously, all of our logs, all of our console logs.
>
> **[8:11](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=491)** And now if there's any changes, we don't have to start and stop the server.
>
> **[8:16](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/how-to-debug-your-express-application?u=76281980&t=496)** There is certainly more that you can do and use debugging for, but now you have a great foundation to get started with basic debugging using Express' Debug module.

> [!info]- Semantic Content
>
> **CLI Commands:** make (10), npm (4), node (2)
> **Code Keywords:** let (10), module (2), this. (1), class, (1), for, (1)
> **Env Vars:** debug (5), json (5), es6 (2), http (1)
> **Tools:** terminal (10), command line (1)
> **UI Navigation:** go to (4), scroll down (1)
> **File Paths:** index.js (2)
> **Definitions:** is a  (2)
> **Analogies:** just like (2)

#### Using express with a database
> [LinkedIn Learning](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/using-express-with-a-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/using-express-with-a-database?u=76281980&t=0)** - [Instructor] Throughout this course, we've only used mock data with our server.
>
> **[0:04](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/using-express-with-a-database?u=76281980&t=4)** When you start building additional applications using Express, you will most likely want to integrate with the database to be able to manipulate data and create more robust applications.
>
> **[0:15](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/using-express-with-a-database?u=76281980&t=15)** Using a database allows you to really see how powerful your HTTP methods can be.
>
> **[0:21](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/using-express-with-a-database?u=76281980&t=21)** You'll be able to retrieve data from your database using get, create new records using post, and update and delete existing records using put and delete.
>
> **[0:31](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/using-express-with-a-database?u=76281980&t=31)** Express integrates with a number of popular databases, including MongoDB, SQLite, and many more, as you can see from this list in Express's official documentation.
>
> **[0:42](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/using-express-with-a-database?u=76281980&t=42)** When you're ready to integrate with the database in your project, this documentation can help you navigate the process, step-by-step.
>
> **[0:50](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/using-express-with-a-database?u=76281980&t=50)** For example, if we click on MongoDB, we are given installation instructions in a link to the GitHub repository.
>
> **[0:59](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/using-express-with-a-database?u=76281980&t=59)** There are also further instructions about loading the module in your project.
>
> **[1:03](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/using-express-with-a-database?u=76281980&t=63)** Using a database with your Express application will be a fun, next step with your future projects.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (2), module (1)
> **Env Vars:** http (1)
> **Tools:** github (1)
> **UI Navigation:** click on (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Security concerns and best practices
> [LinkedIn Learning](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/security-concerns-and-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/security-concerns-and-best-practices?u=76281980&t=0)** - [Instructor] Cyber attacks are a very common occurrence these days.
>
> **[0:04](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/security-concerns-and-best-practices?u=76281980&t=4)** It is important to make sure we keep our applications as secure as possible to protect the data that we are using.
>
> **[0:10](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/security-concerns-and-best-practices?u=76281980&t=10)** We are just going to briefly touch on some of the security best practices to keep in mind with Express.
>
> **[0:16](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/security-concerns-and-best-practices?u=76281980&t=16)** For further information regarding security, please check out some of the other LinkedIn Learning courses that are available that go more in depth with this topic.
>
> **[0:25](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/security-concerns-and-best-practices?u=76281980&t=25)** This list was pulled together based on the security concerns that Express has highlighted in their documentation.
>
> **[0:31](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/security-concerns-and-best-practices?u=76281980&t=31)** Please visit their site for more in-depth information regarding security best practices.
>
> **[0:36](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/security-concerns-and-best-practices?u=76281980&t=36)** First and foremost, it is important to make sure that you keep up to date with the most recent version of Express and other dependency modules that you're using.
>
> **[0:45](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/security-concerns-and-best-practices?u=76281980&t=45)** Older versions will have vulnerabilities that can make you susceptible to security issues in addition to performance issues as well.
>
> **[0:53](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/security-concerns-and-best-practices?u=76281980&t=53)** You should use TLS encryption with your application.
>
> **[0:56](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/security-concerns-and-best-practices?u=76281980&t=56)** This will help keep any communication over the web as secure as possible.
>
> **[1:01](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/security-concerns-and-best-practices?u=76281980&t=61)** There are even free resources available like Let's Encrypt that will help you get a free TLS certificate.
>
> **[1:08](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/security-concerns-and-best-practices?u=76281980&t=68)** Helmet is a module that can protect your app by setting HTTP headers appropriately and securely.
>
> **[1:14](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/security-concerns-and-best-practices?u=76281980&t=74)** It is effectively a collection of middleware functions that set security related HTTP response headers.
>
> **[1:21](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/security-concerns-and-best-practices?u=76281980&t=81)** Cookies are the way web browsers store and track data about a user session with a particular website or application.
>
> **[1:28](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/security-concerns-and-best-practices?u=76281980&t=88)** Express has a few middleware modules to make cookie storage as seamless as possible for your application.
>
> **[1:34](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/security-concerns-and-best-practices?u=76281980&t=94)** A brute force attack is a cyber attack targeted to passwords, log-in credentials and encryption keys.
>
> **[1:42](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/security-concerns-and-best-practices?u=76281980&t=102)** Hackers try various combinations until they find one that works.
>
> **[1:46](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/security-concerns-and-best-practices?u=76281980&t=106)** You can protect your application from such attacks by blocking authorization attempts and there is even a package you can use called rate-limiter-flexible to incorporate this into your projects.
>
> **[1:58](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/security-concerns-and-best-practices?u=76281980&t=118)** And lastly, you want to make sure that your dependencies are secure.
>
> **[2:02](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/security-concerns-and-best-practices?u=76281980&t=122)** This can be done very easily using npm-audit in the command line.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5), find (1), npm (1)
> **Env Vars:** tls (2), http (2)
> **Code Keywords:** let (1), module (1)
> **Definitions:** is a  (2)
> **Tools:** command line (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/next-steps?u=76281980&t=0)** - [Instructor] Thank you so much for joining me for this course on Express Essential Training.
>
> **[0:05](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/next-steps?u=76281980&t=5)** I hope that you will take the knowledge that you learned from this course and start building your own projects with Express.
>
> **[0:11](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/next-steps?u=76281980&t=11)** I strongly encourage you to keep coding, keep building on your Express foundations.
>
> **[0:16](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/next-steps?u=76281980&t=16)** If you're learning on your own, the best way to learn is to build something.
>
> **[0:20](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/next-steps?u=76281980&t=20)** If you're working as a developer or software engineer, see if there are ways that you can incorporate Express into your current projects.
>
> **[0:28](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/next-steps?u=76281980&t=28)** You can also check out other LinkedIn learning courses on Node.js and Express, including courses that teach you how to use various stacks that include Express, like the MEAN stack, which is MongoDB, Express, Angular, and Node.
>
> **[0:42](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/next-steps?u=76281980&t=42)** Or the MERN stack, which is MongoDB, Express, React, and Node.
>
> **[0:48](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/next-steps?u=76281980&t=48)** I hope that you found this course to be valuable.
>
> **[0:50](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/next-steps?u=76281980&t=50)** Please feel free to follow me here on LinkedIn.
>
> **[0:54](https://www.linkedin.com/learning/express-essentials-build-powerful-web-apps-with-node-js/next-steps?u=76281980&t=54)** Keep up the great work.

> [!info]- Semantic Content
>
> **CLI Commands:** node (3)
> **Env Vars:** mean (1), mern (1)
> **File Paths:** node.js (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Jamie Pittman]]

## Resources

- Exercise files available

## Skills Covered

- Express.js
- Web Application Development
- Node.js

## Path Context

### In [[Explore Web Development with Node.js]]
← [[Databases for Node.js Developers]] | **5 of 11** | [[Advanced Express]] →

### In [[Explore App Development with the MERN Stack]]
← [[Learning npm- A Package Manager]] | **5 of 13** | [[Node.js- Testing and Code Quality]] →

## Appears In

- [[Explore Web Development with Node.js]]
- [[Explore App Development with the MERN Stack]]

## Related Courses

_Courses sharing skills:_

- [[Building a Website with Node.js and Express.js]] — Node.js, Express.js
- [[Building RESTful APIs with Node.js and Express]] — Node.js, Express.js
- [[Building Angular and Django Apps]] — Web Application Development
- [[Learning Full-Stack JavaScript Development- MongoDB, Node, and React]] — Node.js
- [[Advanced Node.js- Scaling Applications]] — Node.js

---

[↑ Back to top](#)