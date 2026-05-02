---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: websocket-communications-with-node-and-angular
url: "https://www.linkedin.com/learning/websocket-communications-with-node-and-angular"
duration_minutes: 110
duration: 1h 50m
level: Advanced
updated: 3/11/2022
learners: 20776
skills:
  - WebSocket
  - Angular
  - Node.js
exercise_files: true
github: "https://github.com/LinkedInLearning/websocket-comms-with-node-and-angular-2825709"
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQE_YE-lIDB7xw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1646853207200?e=2147483647&amp;v=beta&amp;t=lDyzOC2sKLTJDVltV-cZ9-V506_a6Pm3tUrB9FUpeVQ"
linkedin_topic: Software Development
learning_paths:
  - '[[Explore Web Development with Angular]]'
prev_courses:
  - '[[Angular- Cloud-Powered Apps with Firebase]]'
path_nav: '[{"path":"Explore Web Development with Angular","position":6,"total":6,"prev":"Angular- Cloud-Powered Apps with Firebase","next":null}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - topic/web-development
  - skill/websocket
  - skill/angular
  - skill/node-js
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/WebSocket%20Communications%20with%20Node%20and%20Angular.md)

![WebSocket Communications with Node and Angular](https://media.licdn.com/dms/image/v2/C560DAQE_YE-lIDB7xw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1646853207200?e=2147483647&amp;v=beta&amp;t=lDyzOC2sKLTJDVltV-cZ9-V506_a6Pm3tUrB9FUpeVQ)

# WebSocket Communications with Node and Angular

> If you come across a web page that updates in real time, you’re probably seeing WebSocket at work. Unlike the request and response protocol of HTTP, WebSocket allows for real-time, two-way communication, and learning how to use it will help you to develop more useful and engaging software. In this course, Patrick Siewe teaches you just what WebSocket is and what it can do, by guiding you through t

> [LinkedIn Learning](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular) | 1h 50m | Advanced | 21K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [What are WebSockets?](#what-are-websockets)
  - [Preview the chat app we will build together](#preview-the-chat-app-we-will-build-together)
  - [What you should know](#what-you-should-know)
- [**1. Environment: TypeScript, Node, and Angular**](#1-environment-typescript-node-and-angular) (6 videos)
  - [How to clone the code at any stage](#how-to-clone-the-code-at-any-stage)
  - [Create shared datatypes library](#create-shared-datatypes-library)
  - [Create the Node.js service](#create-the-nodejs-service)
  - [Create the client Angular application](#create-the-client-angular-application)
  - [Review the project structure](#review-the-project-structure)
  - [Add the WebSocket server to Node.js](#add-the-websocket-server-to-nodejs)
- [**2. Stand Up a WebSocket Service**](#2-stand-up-a-websocket-service) (6 videos)
  - [Receive your first WebSocket connection](#receive-your-first-websocket-connection)
  - [Manage multiple connected users](#manage-multiple-connected-users)
  - [Standardize WebSocket message shape](#standardize-websocket-message-shape)
  - [Broadcast new chat message to all](#broadcast-new-chat-message-to-all)
  - [Challenge: Notify all when a new user connects](#challenge-notify-all-when-a-new-user-connects)
  - [Solution: Notify all when a user connects](#solution-notify-all-when-a-user-connects)
- [**3. Build the UI with Angular**](#3-build-the-ui-with-angular) (4 videos)
  - [A quick look at Angular](#a-quick-look-at-angular)
  - [Set up the chat component](#set-up-the-chat-component)
  - [Prototype the chat UI](#prototype-the-chat-ui)
  - [Add the connection UI](#add-the-connection-ui)
- [**4. Turn On WebSockets in the UI**](#4-turn-on-websockets-in-the-ui) (7 videos)
  - [Simulate authentication on new connections](#simulate-authentication-on-new-connections)
  - [Connect the web app to the socket](#connect-the-web-app-to-the-socket)
  - [Start chatting](#start-chatting)
  - [Challenge: Show notification when user enters or leaves](#challenge-show-notification-when-user-enters-or-leaves)
  - [Solution: Show notification when user enters or leaves](#solution-show-notification-when-user-enters-or-leaves)
  - [Challenge: Show list of connected users](#challenge-show-list-of-connected-users)
  - [Solution: Show list of connected users](#solution-show-list-of-connected-users)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### What are WebSockets?
> [LinkedIn Learning](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/what-are-websockets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/what-are-websockets?u=76281980&t=0)** - [Patrick Siewe] WebSockets is the stuff of magic.
>
> **[0:02](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/what-are-websockets?u=76281980&t=2)** Remember, the first time you came across a website that updates in real time.
>
> **[0:06](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/what-are-websockets?u=76281980&t=6)** It might have been as simple as a stock price ticker, or as complex as a multiplayer game.
>
> **[0:11](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/what-are-websockets?u=76281980&t=11)** These sites really stand out from the typical block post new site, or profile page.
>
> **[0:15](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/what-are-websockets?u=76281980&t=15)** Real time two way communication, is powered by WebSockets, and learning how to use them to your advantage, will allow you to develop more useful, engaging, and just plain fun software.
>
> **[0:26](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/what-are-websockets?u=76281980&t=26)** As everything around us gets ever more connected and interactive, these skills are bound to become more valuable, more marketable.
>
> **[0:34](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/what-are-websockets?u=76281980&t=34)** This course will take you through setting up a WebSocket server from scratch in NodeJS.
>
> **[0:38](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/what-are-websockets?u=76281980&t=38)** We'll learn how to test a server, when there is Node UI to speak of.
>
> **[0:42](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/what-are-websockets?u=76281980&t=42)** And then we'll go and build the UI as well.
>
> **[0:44](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/what-are-websockets?u=76281980&t=44)** In the end, we'll have an end to end solution, for a chat application, powered by, well, I'll give you two guesses, and one of them better rhyme with Lead Buckets.
>
> **[0:54](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/what-are-websockets?u=76281980&t=54)** I am Patrick Siewe, a full stack engineer, who loves to teach and learn.
>
> **[0:59](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/what-are-websockets?u=76281980&t=59)** I've been taken by WebSocket ever since I learned about them, and I'm on a mission to help others see just how cool they are to work with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WebSocket|Websockets]] (2), [[WebSocket]] (2), game (1), node (1), application (1)
> **CLI Commands:** node (1)
> **Speakers:** - [patrick (1)

#### Preview the chat app we will build together
> [LinkedIn Learning](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/preview-the-chat-app-we-will-build-together?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/preview-the-chat-app-we-will-build-together?u=76281980&t=0)** - [Instructor] We'll spend the course learning all things WebSockets by building an end-to-end solution for live chatting.
>
> **[0:06](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/preview-the-chat-app-we-will-build-together?u=76281980&t=6)** Let me show you what the final product will look like from the browser's perspective then touch just a bit on the making of this sausage.
>
> **[0:14](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/preview-the-chat-app-we-will-build-together?u=76281980&t=14)** Here, we have our final application open in two browser windows.
>
> **[0:18](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/preview-the-chat-app-we-will-build-together?u=76281980&t=18)** The front end is built using the angler framework with UI components from the angle and material library.
>
> **[0:25](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/preview-the-chat-app-we-will-build-together?u=76281980&t=25)** We have the ability to connect to the backend of our WebSockets.
>
> **[0:31](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/preview-the-chat-app-we-will-build-together?u=76281980&t=31)** The user would enter his or her name and hit connect.
>
> **[0:34](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/preview-the-chat-app-we-will-build-together?u=76281980&t=34)** The login form goes away, we now have the user's identity and a box where the user can start chatting.
>
> **[0:42](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/preview-the-chat-app-we-will-build-together?u=76281980&t=42)** Pressing enter submits the chat entry.
>
> **[0:45](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/preview-the-chat-app-we-will-build-together?u=76281980&t=45)** Another user comes in later from another browser and logs in.
>
> **[0:51](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/preview-the-chat-app-we-will-build-together?u=76281980&t=51)** Notice that Mike gets a popup notification and the user list on the left side of the window is updated with Jen.
>
> **[1:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/preview-the-chat-app-we-will-build-together?u=76281980&t=60)** This is all handled over WebSockets.
>
> **[1:02](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/preview-the-chat-app-we-will-build-together?u=76281980&t=62)** As Jen enters the chat, Mike gets it immediately.
>
> **[1:09](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/preview-the-chat-app-we-will-build-together?u=76281980&t=69)** We also added styling to make it easy to recognize one's own chat and identity from the user's list.
>
> **[1:17](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/preview-the-chat-app-we-will-build-together?u=76281980&t=77)** Let's go to the IDE where I can show you a little bit about how the sausage is made.
>
> **[1:22](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/preview-the-chat-app-we-will-build-together?u=76281980&t=82)** Here, I have the file browser open with all the project files.
>
> **[1:26](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/preview-the-chat-app-we-will-build-together?u=76281980&t=86)** I suggest starting with the readme file which I have loaded in the main pane.
>
> **[1:30](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/preview-the-chat-app-we-will-build-together?u=76281980&t=90)** The readme file gives tons of information about not just how to run this application but some of the tools we used.
>
> **[1:37](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/preview-the-chat-app-we-will-build-together?u=76281980&t=97)** So a quick look through the readme will give you a very good sense of what to expect from this course.
>
> **[1:44](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/preview-the-chat-app-we-will-build-together?u=76281980&t=104)** This application is organized in a Monorepo meaning a single git repository hosting several applications.
>
> **[1:51](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/preview-the-chat-app-we-will-build-together?u=76281980&t=111)** These are in the packages directory, where you can see that we actually have several packages.
>
> **[1:56](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/preview-the-chat-app-we-will-build-together?u=76281980&t=116)** The backend which is a server.
>
> **[1:59](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/preview-the-chat-app-we-will-build-together?u=76281980&t=119)** A share library of types and the front end which is the webapp.
>
> **[2:03](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/preview-the-chat-app-we-will-build-together?u=76281980&t=123)** Throughout the course, we'll learn how to manage multiple applications working together to deliver a seamless product.
>
> **[2:10](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/preview-the-chat-app-we-will-build-together?u=76281980&t=130)** As you can see, there is a lot of building to be done, but in the end, what may have started looking like magic should just be plain cool.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WebSocket|Websockets]] (3), application (3), product (2), [[Windows]] (1), hit (1)
> **Documentation:** the readme (3)
> **CLI Commands:** make (1), git (1)
> **Definitions:** is a  (2)
> **Env Vars:** ide (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/what-you-should-know?u=76281980&t=0)** - [Instructor] Before you get started with this course, there are a few things you need to know.
>
> **[0:04](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/what-you-should-know?u=76281980&t=4)** Number one, general programming.
>
> **[0:07](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/what-you-should-know?u=76281980&t=7)** I assume that you have development experience.
>
> **[0:10](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/what-you-should-know?u=76281980&t=10)** This course isn't meant to be your first foray into programming.
>
> **[0:14](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/what-you-should-know?u=76281980&t=14)** I explain concepts as I go, but you should know enough about coding to be able to follow well-written code and understand concepts like classes, interfaces, functions and methods, and callbacks.
>
> **[0:26](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/what-you-should-know?u=76281980&t=26)** Number two, TypeScript.
>
> **[0:29](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/what-you-should-know?u=76281980&t=29)** You should be comfortable working with TypeScript and at least vaguely familiar with object-oriented programming.
>
> **[0:35](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/what-you-should-know?u=76281980&t=35)** In the course's Read Me file, you'll find a link to a good TypeScript introductory course, should you need one.
>
> **[0:41](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/what-you-should-know?u=76281980&t=41)** Number three, Node.js.
>
> **[0:45](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/what-you-should-know?u=76281980&t=45)** We use a Node.js server to run the WebSocket backend, so some familiarity with Node is a plus, but not necessary.
>
> **[0:53](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/what-you-should-know?u=76281980&t=53)** Number four, Angular.
>
> **[0:56](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/what-you-should-know?u=76281980&t=56)** I use the Angular library to build the frontend, so knowledge of Angular is helpful.
>
> **[1:01](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/what-you-should-know?u=76281980&t=61)** However, you won't use most of the features of the library.
>
> **[1:05](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/what-you-should-know?u=76281980&t=65)** Taking 15 minutes to read through the Angular Essential section of the What is Angular page before starting Chapter Three would come in handy.
>
> **[1:15](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/what-you-should-know?u=76281980&t=75)** Number five, Git.
>
> **[1:17](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/what-you-should-know?u=76281980&t=77)** Basic knowledge of Git is necessary to clone the report to your machine and to load the state of our build at different points in the course, since every lesson has a checkpoint in the Git history with a corresponding Git tag.
>
> **[1:32](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/what-you-should-know?u=76281980&t=92)** Most importantly, you need enthusiasm and willingness to build, break, and rebuild.
>
> **[1:38](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/what-you-should-know?u=76281980&t=98)** There's just no substitute for getting your hands dirty and it's fun to boot, so have at it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (5), [[Git]] (4), [[Programming]] (2), [[Node.js]] (2), [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1)
> **CLI Commands:** git (4), node (3), find (1)
> **File Paths:** node.js (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 1. Environment: TypeScript, Node, and Angular

[↑ Back to Table of Contents](#table-of-contents)

#### How to clone the code at any stage
> [LinkedIn Learning](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/how-to-clone-the-code-at-any-stage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/how-to-clone-the-code-at-any-stage?u=76281980&t=0)** - As you progress through the course you'll inevitably find yourself wondering how to get your local environment to match mine.
>
> **[0:06](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/how-to-clone-the-code-at-any-stage?u=76281980&t=6)** Starting from the same state we'll make it easier for you to code along.
>
> **[0:10](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/how-to-clone-the-code-at-any-stage?u=76281980&t=10)** To make this simple for you we'll use git tags.
>
> **[0:15](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/how-to-clone-the-code-at-any-stage?u=76281980&t=15)** A git tag is a reference to a particular commit within the git history.
>
> **[0:20](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/how-to-clone-the-code-at-any-stage?u=76281980&t=20)** By checking a branch out from the git tag you'll be setting your locals files to match that point in time in the history of development.
>
> **[0:30](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/how-to-clone-the-code-at-any-stage?u=76281980&t=30)** If you select the branch dropdown and the tags tag you'll see all of the git tags in this tree.
>
> **[0:41](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/how-to-clone-the-code-at-any-stage?u=76281980&t=41)** Let's clone the ripple locally and I'll show you how to make use of them.
>
> **[0:46](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/how-to-clone-the-code-at-any-stage?u=76281980&t=46)** First let's copy the get you git URL.
>
> **[0:50](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/how-to-clone-the-code-at-any-stage?u=76281980&t=50)** I'll move on to my command prompt to clone the repo.
>
> **[0:54](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/how-to-clone-the-code-at-any-stage?u=76281980&t=54)** Here my command prompt I'll execute.
>
> **[0:57](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/how-to-clone-the-code-at-any-stage?u=76281980&t=57)** Git clone, the git URL and the name of the folder I want to clone things into.
>
> **[1:05](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/how-to-clone-the-code-at-any-stage?u=76281980&t=65)** You may get a credential helper pop up.
>
> **[1:07](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/how-to-clone-the-code-at-any-stage?u=76281980&t=67)** If you do select no helper.
>
> **[1:11](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/how-to-clone-the-code-at-any-stage?u=76281980&t=71)** No credentials are needed.
>
> **[1:14](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/how-to-clone-the-code-at-any-stage?u=76281980&t=74)** The repo has been cloned into the web sockets folder.
>
> **[1:17](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/how-to-clone-the-code-at-any-stage?u=76281980&t=77)** So I'll go to the IDE and open the folder there.
>
> **[1:23](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/how-to-clone-the-code-at-any-stage?u=76281980&t=83)** The first file you should take a look at when you open the project is probably the Read Me file.
>
> **[1:27](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/how-to-clone-the-code-at-any-stage?u=76281980&t=87)** It has a lot of information about how to run the project, what resources are used et cetera.
>
> **[1:34](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/how-to-clone-the-code-at-any-stage?u=76281980&t=94)** Let's take a look at the git history.
>
> **[1:38](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/how-to-clone-the-code-at-any-stage?u=76281980&t=98)** We start in the main branch.
>
> **[1:40](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/how-to-clone-the-code-at-any-stage?u=76281980&t=100)** The main branch contains all of the commits that make up the full application and checking out the main branch will get you the final set of the application.
>
> **[1:51](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/how-to-clone-the-code-at-any-stage?u=76281980&t=111)** But as I said before there's a tag for every point in development.
>
> **[1:56](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/how-to-clone-the-code-at-any-stage?u=76281980&t=116)** Let's list out the tags.
>
> **[2:01](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/how-to-clone-the-code-at-any-stage?u=76281980&t=121)** The tags name matches the beginning of the lesson whose chapter number and video number are named in the tag.
>
> **[2:10](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/how-to-clone-the-code-at-any-stage?u=76281980&t=130)** For instance to rewind the state of the local files to what they were at the beginning of chapter one lesson two I would simply do get check out branch, name my branch and then name the tag I'm branching out from.
>
> **[2:32](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/how-to-clone-the-code-at-any-stage?u=76281980&t=152)** This would create a new branch that's exactly the same as the tag that we branched out from.
>
> **[2:39](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/how-to-clone-the-code-at-any-stage?u=76281980&t=159)** If I go back to the file browser I can see that in packages there's now nothing.
>
> **[2:45](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/how-to-clone-the-code-at-any-stage?u=76281980&t=165)** That's because we rewind the state all the way to chapter one lesson two the beginning of the lesson.
>
> **[2:54](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/how-to-clone-the-code-at-any-stage?u=76281980&t=174)** Let's get back to the final state of the application by checking out the main branch.
>
> **[3:03](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/how-to-clone-the-code-at-any-stage?u=76281980&t=183)** The next thing that is important for you to do before you start development is to run NPM install.
>
> **[3:09](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/how-to-clone-the-code-at-any-stage?u=76281980&t=189)** Once you complete this install you'll be ready to start working.
>
> **[3:14](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/how-to-clone-the-code-at-any-stage?u=76281980&t=194)** Now that you know how to get back to the same page as me feel free to experiment with the code.
>
> **[3:19](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/how-to-clone-the-code-at-any-stage?u=76281980&t=199)** Try out interesting things, go off the beaten path and have fun.
>
> **[3:24](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/how-to-clone-the-code-at-any-stage?u=76281980&t=204)** Also remember you can branch out from the same tag multiple times.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (9), application (3), prompt (2), web (1), next (1)
> **CLI Commands:** git (9), make (4), find (1), npm (1)
> **UI Navigation:** open the (2), select the (1), dropdown (1), go to (1)
> **Env Vars:** url (2), ide (1), npm (1)
> **Tools:** command prompt (2)
> **Prerequisites:** install (2)
> **Cross-References:** go back to (1)
> **Exercise Files:** clone the repo (1)

#### Create shared datatypes library
> [LinkedIn Learning](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=0)** - [Instructor] One common challenge you'll run across when developing a UI and its back end, is that while there are separate applications many of the data construct they need overlap.
>
> **[0:08](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=8)** For instance, both apps will need a user object.
>
> **[0:12](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=12)** What do we define this object?
>
> **[0:14](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=14)** In both the UI and the back end.
>
> **[0:16](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=16)** This carries significant risks that the two code bases will diverge, will have to always remember to make a change to one whenever we make a change to the other.
>
> **[0:24](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=24)** A better approach is to create a shared library of types that both applications can import and use.
>
> **[0:30](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=30)** This will allow us to have a single definition for all shared assets.
>
> **[0:34](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=34)** As a bonus, it's easy.
>
> **[0:35](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=35)** Let's dive in and create it.
>
> **[0:37](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=37)** In the README file if you scroll down to working with the model repo, you'll notice a Creating the Shared Library section.
>
> **[0:46](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=46)** This section shows the script that we need to run to create a library.
>
> **[0:50](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=50)** What we're doing here is leveraging the Nx build systems generator using the Nx generate command.
>
> **[0:57](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=57)** The particular generator we're using here comes from the Narwhal workspace package and it's called library.
>
> **[1:03](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=63)** Types is just the name of our generated library.
>
> **[1:06](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=66)** Let's copy this script and run it in the terminal.
>
> **[1:12](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=72)** Nx has created all the files that we need to have our library running.
>
> **[1:17](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=77)** Tsconfigbase.json has been updated.
>
> **[1:21](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=81)** Let's go take a quick look at that first.
>
> **[1:24](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=84)** Whenever a library is added, Nx will a path to the library's entry point in the path's object.
>
> **[1:32](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=92)** Our library's package name is websocket/types.
>
> **[1:35](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=95)** So any application that is imported an object from our library can just import it from websocket/types.
>
> **[1:43](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=103)** The library source files themselves are within the packages folder and the types folder because that's what we named our library.
>
> **[1:53](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=113)** Everything we call goes inside of source and index.ts is the library's entry point.
>
> **[1:58](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=118)** Anything we export from this file will be available to external packages.
>
> **[2:03](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=123)** So let's add this user object.
>
> **[2:06](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=126)** So within the lib folder, I'll create the file, and from that file export a user interface.
>
> **[2:16](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=136)** So make it accessible to external packages.
>
> **[2:18](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=138)** I'll have to also export it from the entry point, and I can delete the default files that we don't need.
>
> **[2:28](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=148)** This is just confirming that I don't want them anymore.
>
> **[2:33](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=153)** Now the user is available to everyone.
>
> **[2:36](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=156)** The last thing I'd like to do is to add to packagejson a new script that will help us lint the library to make sure that it's synthetically correct.
>
> **[2:48](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=168)** Let's call it types:lint, and this group will execute Nx's lint command on the library we just created.
>
> **[2:59](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=179)** Let's try it quickly to make sure that we have made no mistakes so far.
>
> **[3:07](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=187)** Oh, it's not happy about something.
>
> **[3:09](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=189)** Aha.
>
> **[3:10](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=190)** So the linting rules require interface to not be empty.
>
> **[3:14](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=194)** We just created a user interface but we put nothing in there.
>
> **[3:17](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=197)** So let's add some keys, user needs a name and an ID.
>
> **[3:27](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=207)** Let's go back and try to lint once more, and see if there's anything else that we missed.
>
> **[3:33](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=213)** Now everything is hunky-dory.
>
> **[3:35](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=215)** Everyone is happy.
>
> **[3:37](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=217)** With our library in place, whenever we make a change to a shared type it'll be a lot easier to propagate that change to all our applications, because it will all be importing from the common source of truth.
>
> **[3:46](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=226)** Nice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WebSocket]] (2), data (1), [[JSON]] (1), application (1)
> **CLI Commands:** make (6)
> **File Paths:** tsconfigbase.json (1), index.ts (1)
> **Env Vars:** readme (1)
> **Documentation:** the readme (1)
> **Tools:** terminal (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** for instance (1)

#### Create the Node.js service
> [LinkedIn Learning](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-node-js-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-node-js-service?u=76281980&t=0)** - [Instructor] To get a live chat going, we need a way to keep track of our users and their messages and to notify all users when something new is posted into the chatroom, or when someone answers or leaves the room.
>
> **[0:11](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-node-js-service?u=76281980&t=11)** We need a backend service.
>
> **[0:13](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-node-js-service?u=76281980&t=13)** It'll expose a WebSocket end point, manage client connections, and relay chat messages between users.
>
> **[0:18](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-node-js-service?u=76281980&t=18)** Let's create a bare bones no GS application for this task.
>
> **[0:23](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-node-js-service?u=76281980&t=23)** From the readme file, scroll down to the working with a Monorepo section, creating the WebSocket server.
>
> **[0:30](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-node-js-service?u=76281980&t=30)** There, you see a script where we leverage the annex builders generator, more specifically the narwhal node app generator to create a service called server.
>
> **[0:42](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-node-js-service?u=76281980&t=42)** Let's copy and execute this script in the terminal.
>
> **[0:49](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-node-js-service?u=76281980&t=49)** The annex script will create all the files that we need to stand up our server.
>
> **[0:54](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-node-js-service?u=76281980&t=54)** The server source files are inside of packages server.
>
> **[0:58](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-node-js-service?u=76281980&t=58)** Let's go take a look at what was created.
>
> **[1:04](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-node-js-service?u=76281980&t=64)** Every package you create with annex has a project.JSON file.
>
> **[1:10](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-node-js-service?u=76281980&t=70)** This file lists all the things that annex knows how to do with your package.
>
> **[1:15](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-node-js-service?u=76281980&t=75)** Inside of the target object are the different scripts that can be run to manage your package.
>
> **[1:21](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-node-js-service?u=76281980&t=81)** Specifically, build, serve, lint, and test.
>
> **[1:25](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-node-js-service?u=76281980&t=85)** We'll come back to this in a minute.
>
> **[1:28](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-node-js-service?u=76281980&t=88)** The source folder includes all of the source files that we will code and main.ts is the entry point for our package.
>
> **[1:35](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-node-js-service?u=76281980&t=95)** This is the file that runs when the service starts.
>
> **[1:38](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-node-js-service?u=76281980&t=98)** Let us modify what gets printed.
>
> **[1:43](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-node-js-service?u=76281980&t=103)** Now to start the server, we need to add a script to package JSON that leverages these tools that annex puts at our disposal.
>
> **[1:52](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-node-js-service?u=76281980&t=112)** Specifically, we need a linting script and we need a serve script.
>
> **[1:57](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-node-js-service?u=76281980&t=117)** So let's go to the top level package JSON and add scripts for the server.
>
> **[2:07](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-node-js-service?u=76281980&t=127)** I will say annex lint package server and to start the server, we'll execute annex serve server.
>
> **[2:20](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-node-js-service?u=76281980&t=140)** So when this script gets executed, the corresponding project JSON tool will be run.
>
> **[2:28](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-node-js-service?u=76281980&t=148)** In this case, serve to start the server.
>
> **[2:31](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-node-js-service?u=76281980&t=151)** With everything in place, let's actually start our server.
>
> **[2:35](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-node-js-service?u=76281980&t=155)** Well, first actually, let's lint it.
>
> **[2:40](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-node-js-service?u=76281980&t=160)** Linting checks whether there are any syntactic or import circle dependency errors and everything looks good.
>
> **[2:48](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-node-js-service?u=76281980&t=168)** Finally, let's start the server.
>
> **[2:54](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-node-js-service?u=76281980&t=174)** Once we do, we can see hi, I'm alive, printed to the screen.
>
> **[3:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-node-js-service?u=76281980&t=180)** This tells us that main.ts was executed properly and launched the console.
>
> **[3:07](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-node-js-service?u=76281980&t=187)** With our backend service up, we now have the beginnings of our application upon which we can build up more features as we go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (4), [[WebSocket]] (2), application (2), node (1)
> **Env Vars:** json (4)
> **File Paths:** main.ts (2), project.json (1)
> **UI Navigation:** scroll down (1), go to (1)
> **CLI Commands:** node (1)
> **Documentation:** the readme (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### Create the client Angular application
> [LinkedIn Learning](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=0)** - [Instructor] How will users interact with our chat service?
>
> **[0:02](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=2)** They cannot be expected to call it directly.
>
> **[0:04](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=4)** It's time to build a UI.
>
> **[0:06](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=6)** For our purposes, we'll use Angular, a highly scalable and well supported front end framework.
>
> **[0:11](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=11)** So let's create a bare-bones Angular application.
>
> **[0:15](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=15)** Within the README file, go to the Working with a Monorepo section, specifically Creating the Angular Web Application.
>
> **[0:23](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=23)** Here we have an Nx generator script that will create an Angular application called webapp with some helpful configuration to get us started.
>
> **[0:31](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=31)** Let's execute this in the terminal.
>
> **[0:34](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=34)** And while the app gets created, move on to the next script, which is adding the Angular Material library.
>
> **[0:41](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=41)** This library includes some UI components we can use to quickly build our chat room.
>
> **[0:46](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=46)** We'll execute that as well.
>
> **[0:50](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=50)** And let's go take a look at the files created.
>
> **[0:54](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=54)** In the file browser within the packages directory there should be two new folders: webapp and webapp end to end.
>
> **[1:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=60)** We only care about webapp.
>
> **[1:03](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=63)** Within webapp a project.json file was created as is always the case when you add a new package using one of these Nx generators.
>
> **[1:10](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=70)** And within the target object, we can see the different scripts that Nx has prepared for us.
>
> **[1:18](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=78)** We're specifically interested in the lint and serve scripts.
>
> **[1:21](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=81)** As we were, when we built our backend service, we can leverage these scripts to lint or to start our service.
>
> **[1:28](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=88)** So let's add the corresponding routines to package.json.
>
> **[1:36](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=96)** To lint, we'll add a routine called webapp:lint, which will call nx_lint webapp.
>
> **[1:45](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=105)** And to start our application, let's call our routine webapp:start and that will call nx_serve webapp project.
>
> **[1:58](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=118)** With that set, let's take a closer look at the application itself which is in the source directory.
>
> **[2:05](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=125)** Angular application comes in modules.
>
> **[2:08](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=128)** Modules lists dependencies that Angular needs to render your UI.
>
> **[2:14](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=134)** In our case, we have just one component called app.components.
>
> **[2:18](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=138)** If you look in the app browser you'll notice several files named app.components.
>
> **[2:20](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=140)** We have app.component.ts.
>
> **[2:25](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=145)** This is a type script file that hosts the logic behind the components.
>
> **[2:30](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=150)** In this case, a single variable is declared called title.
>
> **[2:33](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=153)** Let's make it say, "I am Angular."
>
> **[2:37](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=157)** Then we have component.scss or sometimes component.css.
>
> **[2:43](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=163)** This is where you define styles.
>
> **[2:45](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=165)** Let's create new style for class blue.
>
> **[2:50](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=170)** Let's make it color darkblue.
>
> **[2:52](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=172)** and it's maybe margin auto.
>
> **[2:58](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=178)** Border 2 pixel.
>
> **[3:01](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=181)** Okay, and the final piece of the component is the HTML.
>
> **[3:07](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=187)** And this is where you define the template for your component.
>
> **[3:10](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=190)** And so here let's make a div that has the class we just declared, and the div will say the title of the application.
>
> **[3:23](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=203)** So you can see how all of these will work together.
>
> **[3:26](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=206)** The type script file defines the logic, the CSS file or SAS files declares the styles and the display HTML file, the template file, will join the two.
>
> **[3:40](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=220)** Let's start our application using the script we just created in package.json.
>
> **[3:47](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=227)** The webapp:start script.
>
> **[3:51](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=231)** Once Angular starts, it will run on localhost4200.
>
> **[3:56](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=236)** So let's go to localhost4200.
>
> **[3:59](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=239)** And here we see the div we created earlier with the class and the styles that we set.
>
> **[4:09](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=249)** So we can be sure that everything is wired correctly.
>
> **[4:13](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=253)** Angular is running.
>
> **[4:15](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=255)** The component template is bound to the component class, which is bound to the component styles.
>
> **[4:21](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=261)** At this point, we have all of our major pieces scaffolded.
>
> **[4:24](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=264)** The UI, the backend service, and the library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (10), application (7), [[JSON]] (3), css (2), [[HTML]] (2)
> **File Paths:** package.json (2), project.json (1), app.component.ts (1), component.scss (1), component.css (1)
> **Env Vars:** html (2), readme (1), css (1), sas (1)
> **CLI Commands:** make (3)
> **Exercise Files:** template (3)
> **Code Identifiers:** nx_lint (1), nx_serve (1)
> **UI Navigation:** go to (2)
> **Documentation:** the readme (1)

#### Review the project structure
> [LinkedIn Learning](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/review-the-project-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/review-the-project-structure?u=76281980&t=0)** - All the elements that will make up our application have been created.
>
> **[0:04](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/review-the-project-structure?u=76281980&t=4)** We have a Back End, a UI, and a library of shared types.
>
> **[0:08](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/review-the-project-structure?u=76281980&t=8)** And all of these will work together to deliver a great experience for both the developer and for the users.
>
> **[0:14](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/review-the-project-structure?u=76281980&t=14)** Before we build features on top of these, I wanted to take a moment to explore the project directory so that we have a good understanding of how the different files work together.
>
> **[0:25](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/review-the-project-structure?u=76281980&t=25)** So let's open up the file browser.
>
> **[0:29](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/review-the-project-structure?u=76281980&t=29)** At the top level is a package.json, which declares the name of our project, the scripts we can run, which typically will start or lint different aspects of our project, and the dependencies for this project.
>
> **[0:48](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/review-the-project-structure?u=76281980&t=48)** We won't really be touching this anymore.
>
> **[0:52](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/review-the-project-structure?u=76281980&t=52)** At the top level, within the file browser, you can also see workspace.json.
>
> **[0:57](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/review-the-project-structure?u=76281980&t=57)** Workspace.json lists all the packages that we've created.
>
> **[1:02](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/review-the-project-structure?u=76281980&t=62)** Server is the Back End.
>
> **[1:03](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/review-the-project-structure?u=76281980&t=63)** Types is the library of shared types.
>
> **[1:06](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/review-the-project-structure?u=76281980&t=66)** And webapp is the front end.
>
> **[1:09](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/review-the-project-structure?u=76281980&t=69)** The packages themselves are in the packages directory.
>
> **[1:13](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/review-the-project-structure?u=76281980&t=73)** If we expand this within the file browser, we'll notice one folder for each package.
>
> **[1:18](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/review-the-project-structure?u=76281980&t=78)** Server types, webapp and webapp end to end, which we'll not be using.
>
> **[1:23](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/review-the-project-structure?u=76281980&t=83)** Let's expand server.
>
> **[1:25](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/review-the-project-structure?u=76281980&t=85)** Every package has a source folder and this is where the code is written.
>
> **[1:30](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/review-the-project-structure?u=76281980&t=90)** Outside of the source folder is a meta data telling us about the package or giving NX some information about how to handle the package.
>
> **[1:38](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/review-the-project-structure?u=76281980&t=98)** Of greatest interest to us is probably project.json, which we see in every package and more specifically the targets object because this object lists the different scripts that NX knows how to run, build, serve, lint, et cetera.
>
> **[1:54](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/review-the-project-structure?u=76281980&t=114)** And these are the targets we leveraged when we wrote our scripts within package.json, NX lent, NX serve.
>
> **[2:03](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/review-the-project-structure?u=76281980&t=123)** Within the source directory of each package is a main.ts or index.ts.
>
> **[2:09](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/review-the-project-structure?u=76281980&t=129)** This is the file that actually runs when that package starts or for a library when it gets imported.
>
> **[2:17](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/review-the-project-structure?u=76281980&t=137)** So if you look in the second package, for instance, types, we see within the source folder and index.ts, this is what gets run whenever we import our library.
>
> **[2:33](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/review-the-project-structure?u=76281980&t=153)** And then finally, we have the webapp package.
>
> **[2:36](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/review-the-project-structure?u=76281980&t=156)** This is the UI or the angler application.
>
> **[2:39](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/review-the-project-structure?u=76281980&t=159)** Main is the entry point, but all of our work within angular will be inside the app folder, where we have an app components, an app module, and eventually we'll add an app service.
>
> **[2:54](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/review-the-project-structure?u=76281980&t=174)** These are the components that make up our project structure and with a good understanding of this structure we're ready to build more productively.
>
> **[3:01](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/review-the-project-structure?u=76281980&t=181)** So let's get to it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (5), application (2), data (1), [[Angular]] (1)
> **File Paths:** package.json (2), workspace.json (2), index.ts (2), project.json (1), main.ts (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (2)
> **Analogies:** for instance (1)
> **Speakers:** - all (1)

#### Add the WebSocket server to Node.js
> [LinkedIn Learning](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=0)** - [Instructor] It's time to start building the first real feature of our application.
>
> **[0:03](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=3)** Let's create the web socket server.
>
> **[0:05](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=5)** We'll use the WS NPM Library.
>
> **[0:08](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=8)** Easily one of the most popular and most performant web socket libraries for Node.
>
> **[0:12](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=12)** From the read me file, scroll down to the tools used to build this application.
>
> **[0:17](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=17)** The first tool is the WS Library.
>
> **[0:20](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=20)** Let's take a look at its GitHub page.
>
> **[0:23](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=23)** Here on GitHub on the library's read me file, there's a table of contents with usage examples.
>
> **[0:29](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=29)** The example that we care most about is the simple server example.
>
> **[0:32](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=32)** It shows a pattern for how to build a basic web socket server.
>
> **[0:36](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=36)** You create a new web socket server passing in some options, then you listen to the connection on the server which gives you a socket.
>
> **[0:45](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=45)** You listen to a message on the socket, and the data that comes out of the socket will be in the callback.
>
> **[0:51](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=51)** To send a message to the socket, you call send on it.
>
> **[0:54](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=54)** Pretty straightforward.
>
> **[0:56](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=56)** Let's code.
>
> **[0:57](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=57)** Because we're working on this service, we want to go to the server package.
>
> **[1:02](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=62)** Within this package, source.main is the file that runs when the server starts.
>
> **[1:08](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=68)** Instead of logging to the console, let's create a function that we will execute.
>
> **[1:14](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=74)** Well, what should it do?
>
> **[1:15](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=75)** It should start the web socket server, but rather than crowd this file with all of our logic, let's go to app and create a new class, ws handler, which will be a wrapper around the WS Library's web socket server.
>
> **[1:35](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=95)** Let's import the assets we need.
>
> **[1:41](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=101)** We definitely need web socket, which is an instance of the connection, web socket server, and the server option which dictate how the server is configured.
>
> **[1:51](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=111)** We'll have a private web socket server within our class, and then initialize function.
>
> **[2:03](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=123)** The initialized function will instantiate the server, passing in the options to configure the server.
>
> **[2:11](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=131)** This function will also start listening for the server's events, specifically we're interested in the listening event and the connection event.
>
> **[2:21](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=141)** The listening event is triggered when the server is ready to accept connections.
>
> **[2:25](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=145)** So here, we're just going to log that the server is listening.
>
> **[2:35](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=155)** And for the connection event, this is triggered when a client connects to the web socket.
>
> **[2:44](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=164)** The inputs to this event are the web socket and the incoming request.
>
> **[2:51](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=171)** Once this occurs, let's execute a local function on socket connected and pass in the socket and the request.
>
> **[3:01](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=181)** Now we don't have this function defined yet, so now is as good a time as any to do that.
>
> **[3:09](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=189)** It's incoming message.
>
> **[3:10](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=190)** There we go.
>
> **[3:11](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=191)** Incoming message.
>
> **[3:14](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=194)** Well, right now we don't really have anything to do here, so we'll just go into the console log new web socket connection.
>
> **[3:22](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=202)** And we have the basics of our server.
>
> **[3:25](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=205)** Now, to be able to use this in any way, we have to link it to main.
>
> **[3:32](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=212)** So here, let's define the options.
>
> **[3:37](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=217)** And the only one that we care about is a port number.
>
> **[3:40](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=220)** Let's use 8080, and then we can instantiate the handler.
>
> **[3:49](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=229)** There we go.
>
> **[3:54](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=234)** That should be good.
>
> **[3:56](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=236)** Let's lint our code to make sure there is no error.
>
> **[4:01](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=241)** There are two warnings because we defined socket and request for this method, but we're not using them.
>
> **[4:08](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=248)** We'll use them later, so I'm okay with them for now.
>
> **[4:11](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=251)** Let's finally start the server.
>
> **[4:17](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=257)** The server starts successfully, and we can see that it is listening on port 8080, which means that our code is working.
>
> **[4:25](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=265)** The server was instantiated, and this first event on line 10 was triggered successfully.
>
> **[4:30](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=270)** Soon we'll have messages flying back and forth.
>
> **[4:33](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=273)** I call that progress.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** web (12), application (2), [[GitHub]] (2), feature (1), [[npm]] (1)
> **CLI Commands:** npm (1), node (1), make (1)
> **UI Navigation:** go to (2), scroll down (1)
> **Definitions:** is an  (1), is a  (1), means that (1)
> **Tools:** github (2)
> **Ports:** port 8080 (1)
> **Env Vars:** npm (1)
> **Prerequisites:** configure (1)


### 2. Stand Up a WebSocket Service

[↑ Back to Table of Contents](#table-of-contents)

#### Receive your first WebSocket connection
> [LinkedIn Learning](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=0)** - [Instructor] In this chapter we'll build out the web socket server that we created at the end of chapter one.
>
> **[0:05](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=5)** First we need tools to test the connection from the client side.
>
> **[0:09](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=9)** In the readme file.
>
> **[0:11](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=11)** If you scroll to the very bottom you'll see the tools used to build this application section.
>
> **[0:16](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=16)** And the last two tools are web extensions that can be used for this purpose.
>
> **[0:22](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=22)** For Chrome and brave there is Advanced Websocket Client for Firefox the Websocket Weasel.
>
> **[0:28](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=28)** Because I'm on Brave.
>
> **[0:29](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=29)** I'll be showing Advanced Websocket Client.
>
> **[0:32](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=32)** Let's switch to the browser.
>
> **[0:35](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=35)** In my browser, I'm going to load Advanced Websocket Clients.
>
> **[0:38](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=38)** The interface is pretty self-explanatory.
>
> **[0:41](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=41)** There's a URL where we can enter the host the web socket server is listening on.
>
> **[0:47](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=47)** There is a request window where we can answer the payload that we want to send to the websocket.
>
> **[0:53](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=53)** A message log allows us to see everything that went to the socket and came from it.
>
> **[0:59](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=59)** And a response window where we can examine the payloads.
>
> **[1:03](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=63)** Before we can use this extension we need to configure our server to accept messages and send replies, let's code.
>
> **[1:12](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=72)** This is the WsHandler class we defined earlier.
>
> **[1:15](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=75)** It's within the packages, server, source, app directory.
>
> **[1:21](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=81)** We previously had a on socket connected function which is triggered when a new socket connects to the server.
>
> **[1:29](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=89)** This is our opportunity to start listening to messages coming from that socket.
>
> **[1:33](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=93)** Let's do so.
>
> **[1:37](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=97)** The message carries a data packet that we can explore.
>
> **[1:42](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=102)** Let's create a on socket message handler that will take the socket as well as this data.
>
> **[1:55](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=115)** It's of type raw data and raw data from the Ws package.
>
> **[2:02](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=122)** What should we do when the message arrives?
>
> **[2:04](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=124)** Well, how about we console log it, and we send a reply.
>
> **[2:07](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=127)** Now the message comes in as raw data before we can use it.
>
> **[2:10](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=130)** Let's parse it into a JSON object.
>
> **[2:17](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=137)** We'll turn into a string and then parse it to JSON.
>
> **[2:21](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=141)** Then we can console log it and we can craft the reply, lets say message received.
>
> **[2:36](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=156)** Now we cannot just send an object into the socket.
>
> **[2:38](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=158)** So we'll have to wrap it with JSON stringify.
>
> **[2:46](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=166)** Now it's ready to be sent.
>
> **[2:51](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=171)** The other event that we want to listen to the socket for is the disconnection of the socket.
>
> **[2:56](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=176)** So we know when a client is no longer connected.
>
> **[3:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=180)** This is the close event, And this event gets a code and a reason.
>
> **[3:10](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=190)** On socket closed let's create the handler for this particular event.
>
> **[3:23](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=203)** And in this case we'll just log that the socket is closed.
>
> **[3:35](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=215)** And the reason if available.
>
> **[3:39](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=219)** Sometimes no reason is given.
>
> **[3:42](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=222)** Now our server is ready to this two messages log the message received and send a reply.
>
> **[3:50](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=230)** The reply will always say message received at this point.
>
> **[3:54](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=234)** Let's lint the code to see whether we have any errors.
>
> **[4:02](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=242)** One warning request defined but never used that's okay we can get back to that later.
>
> **[4:09](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=249)** Otherwise it looks good.
>
> **[4:10](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=250)** So we can run in the code now.
>
> **[4:16](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=256)** Once we notice that the server is listening, here it is on port 8080.
>
> **[4:20](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=260)** We can go back to the browser and using the web extension connects to the right port 8080.
>
> **[4:30](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=270)** The status has changed to opened which means we have a live connection.
>
> **[4:35](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=275)** If you look in the server logs it says new websocket connection.
>
> **[4:39](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=279)** Let's try to send a message through.
>
> **[4:45](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=285)** The shortcut to sending a message here is Ctrl + Enter.
>
> **[4:48](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=288)** So once I do that, we can see the message logged in the server and in the message log it's in orange but a reply was received message received.
>
> **[4:59](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=299)** So we know that the round trip works.
>
> **[5:01](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=301)** Now let's test whether the server will notice when we disconnect.
>
> **[5:04](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=304)** So back to the extension, let's close this session.
>
> **[5:10](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=310)** The status has changed to closed and we can see that the server has logged the closure.
>
> **[5:15](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=315)** So everything looks great.
>
> **[5:18](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=318)** We now established the connection with two-way messaging and we're rolling.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WebSocket]] (6), data (5), web (4), [[JSON]] (3), application (1)
> **Env Vars:** json (3), url (1)
> **Ports:** port 8080 (2)
> **Cross-References:** go back to (1)
> **Documentation:** the readme (1)
> **Tools:** firefox (1)
> **UI Navigation:** switch to (1)
> **Definitions:** is a  (1)

#### Manage multiple connected users
> [LinkedIn Learning](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=0)** - [Instructor] To manage multiple users chatting, we need to refactor our code to better separate concerns.
>
> **[0:05](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=5)** Our connection handler is both managing connections and managing messages, so it's getting crowded.
>
> **[0:11](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=11)** Let's add a new user manager class, dedicated to keeping track of the connected users and offering helper methods to send them messages.
>
> **[0:20](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=20)** Within the file browser, we want to be in packages, server, src, app.
>
> **[0:26](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=26)** And next to the ws-handler that we created earlier, we'll have a user-manager.
>
> **[0:39](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=39)** UserManager will maintain a set of sockets
>
> **[0:48](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=48)** and helper methods to manage them.
>
> **[0:50](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=50)** So we need a method to add the socket, to remove the socket for when a user disconnects,
>
> **[1:08](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=68)** to send a socket a message.
>
> **[1:13](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=73)** We haven't yet defined what a message will look like, so I'll just put unknown for now.
>
> **[1:18](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=78)** Now, we cannot just send a raw object, we have to stringify it first.
>
> **[1:21](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=81)** So I'm going to use JSON.stringify on the message and then send the result.
>
> **[1:31](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=91)** And, of course, because this is a chat, often we'll want message to be broadcasted to all users.
>
> **[1:36](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=96)** We want all users to be aware of what is said in the chat.
>
> **[1:39](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=99)** So we need a sendToAll.
>
> **[1:44](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=104)** And in this case, what we want to do is iterate through all the connected sockets and test whether each socket is still live.
>
> **[1:55](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=115)** For that, we look at its readyState and compare it to a constant of WebSocket.OPEN.
>
> **[2:06](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=126)** If it's open, that means the socket is still currently connected, and we can send it a message.
>
> **[2:12](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=132)** But before we can send, we have to again stringify the message.
>
> **[2:23](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=143)** Here we go.
>
> **[2:24](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=144)** So now we have all the helper methods ready to go.
>
> **[2:28](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=148)** UserManager can then be instantiated within the ws-handler.
>
> **[2:32](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=152)** That accepts connections.
>
> **[2:33](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=153)** And a good place to do this is in the initialize.
>
> **[2:36](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=156)** So let's create a new private member.
>
> **[2:42](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=162)** And initialize it.
>
> **[2:48](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=168)** So when a socket connects, right now we execute onSocketConnected.
>
> **[2:54](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=174)** We'll want to add that socket to the set.
>
> **[2:59](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=179)** Likewise when a socket disconnects, right now we execute onSocketClosed, we want to remove the socket from the set.
>
> **[3:10](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=190)** But for this, we need to pass the socket to onSocketClosed.
>
> **[3:12](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=192)** So let's add it to the inputs.
>
> **[3:19](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=199)** And pass it along.
>
> **[3:25](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=205)** All right, and the last piece we need here is we want to send the message not from here directly but from the socket.
>
> **[3:32](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=212)** So here where we send the reply, what we want to do instead is use the userManager.
>
> **[3:41](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=221)** Message received, still.
>
> **[3:44](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=224)** Let's see whether everything still works.
>
> **[3:47](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=227)** First, we'll lint our code.
>
> **[3:51](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=231)** We have the same warning about request being unused in the onSocketConnected.
>
> **[3:58](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=238)** That's fine, and then we run our code.
>
> **[4:03](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=243)** Server is listening on port 8080.
>
> **[4:05](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=245)** So let's go to the browser and start the extension.
>
> **[4:10](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=250)** Here we have the extension.
>
> **[4:13](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=253)** Let's set it side by side with our IDE.
>
> **[4:16](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=256)** And first, open the connection.
>
> **[4:19](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=259)** It stills works.
>
> **[4:20](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=260)** Down here we have new websocket connection!
>
> **[4:23](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=263)** Send a message.
>
> **[4:24](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=264)** Is anybody home?
>
> **[4:27](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=267)** And we get the reply.
>
> **[4:28](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=268)** Message received, still.
>
> **[4:30](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=270)** So everything is working.
>
> **[4:32](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=272)** But with better separation of concerns, our code will be easier to enhance and to test.
>
> **[4:36](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=276)** We're well positioned now to manage multiple clients connected in parallel.
>
> **[4:40](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=280)** Fantastic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WebSocket]] (2), next (1), [[JSON]] (1), parallel (1)
> **Code Identifiers:** onsocketconnected (2), onsocketclosed (2), sendtoall (1), readystate (1), usermanager (1)
> **Env Vars:** json (1), open (1), ide (1)
> **UI Navigation:** go to (1), open the (1)
> **Warnings:** be aware (1), warning (1)
> **Ports:** port 8080 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Standardize WebSocket message shape
> [LinkedIn Learning](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=0)** - [Instructor] The WebSocket protocol is quite flexible about what sorts of payloads can be sent.
>
> **[0:04](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=4)** Strings, ArrayBuffers, even files can be sent over WebSockets.
>
> **[0:09](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=9)** To reduce errors, it's important to establish a standard type for the messages your application expects to receive.
>
> **[0:14](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=14)** So let's define this interface.
>
> **[0:17](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=17)** Navigate to the types library so that we can a new type.
>
> **[0:24](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=24)** Besides the user type, which we define at the beginning of the course, let's create a new file here, ws message.
>
> **[0:32](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=32)** And from this file, we will export the type ws message.
>
> **[0:39](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=39)** Now, before we define what it should look like, let's remember to export this type from the top level index.ts file of the library.
>
> **[0:46](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=46)** Remember that at it's this index.ts file located on the packages, types, source that exposes everything the library wants other packages or other applications to see.
>
> **[0:58](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=58)** So if you want something visible from outside, you need to export it from here. Here we go.
>
> **[1:04](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=64)** Now, going back to our message, there are actually a couple of message types that will send the application. At least two.
>
> **[1:12](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=72)** A chat message is the message that the user sends back to the server.
>
> **[1:20](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=80)** And this contains just the text to be broadcasted.
>
> **[1:25](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=85)** But there's also a chat relay message, or maybe chat broadcast message.
>
> **[1:32](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=92)** This is what this server will send everybody to let everyone know what was just added to the chat.
>
> **[1:37](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=97)** Of course, also have content, but it must have the author of the original message.
>
> **[1:46](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=106)** To easily route different messages to different logic paths, it makes sense to have an event key that helps us distinguish one from the other.
>
> **[1:57](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=117)** And now we know the different types of messages we have, and then maybe more in the future, but this is a good start.
>
> **[2:04](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=124)** So ws message is of type chat relay message, or chat message.
>
> **[2:09](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=129)** And we've defined what each of these look like.
>
> **[2:12](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=132)** With that out of the way, we can go back to our service to make use of these new strong types.
>
> **[2:20](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=140)** In ws handler, the method that runs when we get a socket message parses data, we now know that the payload should be of type ws message.
>
> **[2:34](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=154)** And the user manager method that sends data should also expect to receive a ws message.
>
> **[2:41](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=161)** In fact, so should the sendToAll method.
>
> **[2:46](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=166)** Notice that ws message is imported from our library.
>
> **[2:53](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=173)** Already, we see a problem here.
>
> **[2:56](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=176)** The ship we're sending does not adhere to ws message.
>
> **[2:59](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=179)** So let's fix that.
>
> **[3:03](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=183)** Let's make it a regular chat message.
>
> **[3:07](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=187)** Hey, still here.
>
> **[3:10](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=190)** Okay. I think that's great.
>
> **[3:12](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=192)** Let's link the code to try to catch any more errors.
>
> **[3:16](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=196)** I'll start with the library.
>
> **[3:18](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=198)** Looks good. And then the server.
>
> **[3:24](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=204)** The server gives us a warning.
>
> **[3:26](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=206)** Same warning as before.
>
> **[3:27](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=207)** We have this request incoming message that we're not using, but I'm okay with that.
>
> **[3:34](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=214)** All right. So let's start the server.
>
> **[3:41](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=221)** It's listening on port 8080.
>
> **[3:43](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=223)** So we can go to the Client and try to send messages back and forth to make sure everything still works.
>
> **[3:49](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=229)** In Advanced WebSocket Client, let's connect.
>
> **[3:53](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=233)** And we'll alter this message to adhere to the new shape we've defined.
>
> **[3:58](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=238)** Event is of type chat. Payload has contents.
>
> **[4:07](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=247)** And let's send that. Perfect.
>
> **[4:09](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=249)** We see the reply is still here.
>
> **[4:13](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=253)** If we go to the server, we'll see the website connection was detected.
>
> **[4:17](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=257)** The message, anybody home, was received.
>
> **[4:20](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=260)** Everything still works. Great.
>
> **[4:24](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=264)** Strong typing is a powerful tool at your disposal to reduce errors and ease collaboration between applications.
>
> **[4:29](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=269)** It may not seem like it, but we've just taken a big step forward in hardening the product.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WebSocket]] (2), application (2), data (2), [[WebSocket|Websockets]] (1), product (1)
> **CLI Commands:** make (3)
> **UI Navigation:** go to (2), navigate to (1)
> **File Paths:** index.ts (2)
> **Definitions:** is a  (2)
> **Warnings:** warning (2)
> **Code Identifiers:** sendtoall (1)
> **Ports:** port 8080 (1)

#### Broadcast new chat message to all
> [LinkedIn Learning](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/broadcast-new-chat-message-to-all?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/broadcast-new-chat-message-to-all?u=76281980&t=0)** - [Instructor] Our server is now set up to receive messages, but how will other users know when there has been an update?
>
> **[0:05](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/broadcast-new-chat-message-to-all?u=76281980&t=5)** Remember that the beauty of WebSockets is that both sides of the connection can transmit and listen.
>
> **[0:11](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/broadcast-new-chat-message-to-all?u=76281980&t=11)** So just as our server is listening for new messages, all connected clients are also listening.
>
> **[0:16](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/broadcast-new-chat-message-to-all?u=76281980&t=16)** It's up to us to notify them when a new message arrives.
>
> **[0:18](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/broadcast-new-chat-message-to-all?u=76281980&t=18)** It's time to broadcast.
>
> **[0:20](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/broadcast-new-chat-message-to-all?u=76281980&t=20)** Navigate to the server package.
>
> **[0:25](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/broadcast-new-chat-message-to-all?u=76281980&t=25)** Within the ws handler file, we previously coded a onSocketMessage function.
>
> **[0:33](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/broadcast-new-chat-message-to-all?u=76281980&t=33)** This runs when a new message arrives from the Client.
>
> **[0:38](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/broadcast-new-chat-message-to-all?u=76281980&t=38)** Instead of responding with a generic message, what we want to do is broadcast the message that was received to everyone connected.
>
> **[0:49](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/broadcast-new-chat-message-to-all?u=76281980&t=49)** Well, thankfully, when we built the userManager, we added a sendToAll function.
>
> **[0:56](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/broadcast-new-chat-message-to-all?u=76281980&t=56)** This function will iterate over every socket and send it the data.
>
> **[1:02](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/broadcast-new-chat-message-to-all?u=76281980&t=62)** So all we should need to do from the onSocketMessage function is to call the sendToAll of the userManager, and send it the message we received.
>
> **[1:16](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/broadcast-new-chat-message-to-all?u=76281980&t=76)** Let's start the server and figure out whether this worked.
>
> **[1:21](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/broadcast-new-chat-message-to-all?u=76281980&t=81)** The server started successfully.
>
> **[1:23](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/broadcast-new-chat-message-to-all?u=76281980&t=83)** So let's move on to the browser and use the extension to test the connection.
>
> **[1:30](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/broadcast-new-chat-message-to-all?u=76281980&t=90)** Here I have one instance of my Chrome extension.
>
> **[1:33](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/broadcast-new-chat-message-to-all?u=76281980&t=93)** I'm going to actually run two of these instances so we can see messages going back and forth.
>
> **[1:38](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/broadcast-new-chat-message-to-all?u=76281980&t=98)** So let me duplicate this tab, and then set them side by side.
>
> **[1:43](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/broadcast-new-chat-message-to-all?u=76281980&t=103)** We'll then connect to the WebSocket in both cases.
>
> **[1:49](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/broadcast-new-chat-message-to-all?u=76281980&t=109)** So for the first time, we have two connected sockets.
>
> **[1:52](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/broadcast-new-chat-message-to-all?u=76281980&t=112)** Now let's send message.
>
> **[1:54](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/broadcast-new-chat-message-to-all?u=76281980&t=114)** The first message would say, Hi there.
>
> **[2:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/broadcast-new-chat-message-to-all?u=76281980&t=120)** And right way we can see on the right hand side that the message was received, Hi there.
>
> **[2:05](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/broadcast-new-chat-message-to-all?u=76281980&t=125)** There it is. If we send a response, it was received on the left side.
>
> **[2:12](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/broadcast-new-chat-message-to-all?u=76281980&t=132)** Who are you?
>
> **[2:14](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/broadcast-new-chat-message-to-all?u=76281980&t=134)** So what we have basically is a two-way WebSocket communication.
>
> **[2:19](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/broadcast-new-chat-message-to-all?u=76281980&t=139)** We basically have a chat.
>
> **[2:21](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/broadcast-new-chat-message-to-all?u=76281980&t=141)** How awesome is that?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WebSocket]] (2), [[WebSocket|Websockets]] (1), generic (1), data (1)
> **Code Identifiers:** onsocketmessage (2), usermanager (2), sendtoall (2)
> **UI Navigation:** navigate to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Notify all when a new user connects
> [LinkedIn Learning](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-notify-all-when-a-new-user-connects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-notify-all-when-a-new-user-connects?u=76281980&t=0)** - [Instructor] To keep our users aware of changes in the chat room, it would be nice to notify them whenever someone new arrives.
>
> **[0:11](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-notify-all-when-a-new-user-connects?u=76281980&t=11)** in this challenge, I want you to add this feature.
>
> **[0:14](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-notify-all-when-a-new-user-connects?u=76281980&t=14)** Basically, when a new connection is made, everyone else should get a message saying so.
>
> **[0:18](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-notify-all-when-a-new-user-connects?u=76281980&t=18)** Bonus points if you can figure out how to to collect the new user's name in the connection attempt and how to include that name in the new user's notification.
>
> **[0:28](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-notify-all-when-a-new-user-connects?u=76281980&t=28)** Take a look at the WS handle we've been working on.
>
> **[0:31](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-notify-all-when-a-new-user-connects?u=76281980&t=31)** When a socket connects, we execute onSocketConnected.
>
> **[0:34](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-notify-all-when-a-new-user-connects?u=76281980&t=34)** And here we have two inputs.
>
> **[0:36](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-notify-all-when-a-new-user-connects?u=76281980&t=36)** So far, we haven't made any use of the incoming message, but this is information that comes from the client about the client, and so it may provide a good place to start investigating how to implement this feature.
>
> **[0:49](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-notify-all-when-a-new-user-connects?u=76281980&t=49)** This challenge should take you about 20 to 40 minutes to implement.
>
> **[0:53](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-notify-all-when-a-new-user-connects?u=76281980&t=53)** If you get stuck, check out my solution video, where I walk through my own implementation.
>
> **[0:58](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-notify-all-when-a-new-user-connects?u=76281980&t=58)** Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** feature (2)
> **Code Identifiers:** onsocketconnected (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Notify all when a user connects
> [LinkedIn Learning](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=0)** (energetic music)
>
> **[0:05](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=5)** - [Instructor] So, how did you do, were you able to send new user notifications?
>
> **[0:11](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=11)** How about the user's name?
>
> **[0:12](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=12)** Were you able to collect that at connection time?
>
> **[0:15](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=15)** Let's work through it together.
>
> **[0:17](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=17)** Remember that in my IDE you can always see where I am within the project by looking at the file path near the top of the window.
>
> **[0:24](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=24)** Here, I'm in the packages server source app ws handler file.
>
> **[0:28](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=28)** But before we work on this file, let's go back to our library file, specifically, the message type that we defined earlier.
>
> **[0:36](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=36)** We had two types of messages, chat message and chat relay message.
>
> **[0:40](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=40)** Let's add assistant notice as a new type of message.
>
> **[0:50](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=50)** And all it needs to hold is the string notice.
>
> **[0:56](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=56)** We'll make it part of the union type.
>
> **[1:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=60)** That is ws message.
>
> **[1:02](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=62)** And this will allow us to send it just as any other chat message could be sent.
>
> **[1:07](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=67)** Let's go back to ws handler.
>
> **[1:09](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=69)** I hinted at the fact that this incoming message that comes when the socket is connected, may be helpful to us.
>
> **[1:16](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=76)** In fact, my idea is to use the URL that's part of the request to allow the user to specify URL parameters, specifically the user's name.
>
> **[1:27](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=87)** For instance, the user connects by calling local host 8080 but nothing stops us from taking a username after that.
>
> **[1:35](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=95)** So to parse this request, let's send it to the user manager.
>
> **[1:41](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=101)** The user manager's add function is in the user manager file.
>
> **[1:46](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=106)** And right now all it takes is a web socket.
>
> **[1:48](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=108)** Let's also accept the request.
>
> **[1:53](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=113)** Now from the request, we can parse the search parameters by first getting the full URL.
>
> **[2:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=120)** And this is a concatenation of the host which you can find from the headers and the URL path which is just requested URL.
>
> **[2:09](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=129)** So this full URL looks something like so.
>
> **[2:14](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=134)** To convert it to a URL object that we can actually parse, we called the new URL method.
>
> **[2:24](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=144)** And finally, we can extract the name from the search params of the new URL.
>
> **[2:30](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=150)** And we want the name param.
>
> **[2:32](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=152)** Once we have the name, it's pretty easy to build the user of type user from our library.
>
> **[2:40](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=160)** User has a name and an ID.
>
> **[2:44](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=164)** Now we don't have any database here.
>
> **[2:46](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=166)** So I'm just going to use mock IDs.
>
> **[2:50](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=170)** We'll start at ID one and we'll increment it each time.
>
> **[2:56](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=176)** So this is the user.
>
> **[2:58](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=178)** Once we have the user, we can generate the notice that should go out to everyone.
>
> **[3:08](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=188)** Event is system notice and the contents would just be name has joined the chat
>
> **[3:17](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=197)** and then we can emit this to everybody connected.
>
> **[3:22](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=202)** Now this should be sufficient but we're going to need this user again.
>
> **[3:26](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=206)** if we want to do anything else with that user later, such as giving notice of disconnection or treat the user in any kind of special way.
>
> **[3:33](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=213)** So in addition to this, I wanted to change how we store the connected sockets instead of just storing a set.
>
> **[3:41](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=221)** I think it makes more sense to store a map of the web socket and it's connected user.
>
> **[3:50](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=230)** So that down here on line 25, instead of just adding the socket, we're going to set in the map, the socket and the user.
>
> **[4:01](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=241)** This forces us to make one small adjustment near the bottom.
>
> **[4:05](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=245)** The send to all method, remember, just cycled through all the sockets in the set, but if you call it for each on a map, what you get are the values of the map.
>
> **[4:16](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=256)** So this socket is actually a user, not a socket.
>
> **[4:19](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=259)** If we want to cycle through the keys of the map, we will do this dot socket dot keys and iterate through that.
>
> **[4:30](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=270)** First, that's converted to an array so we can iterate through it.
>
> **[4:34](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=274)** And everything else is pretty much the same as before because the keys of the sockets are actually the sockets themselves.
>
> **[4:43](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=283)** There is a problem here, I just noticed.
>
> **[4:47](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=287)** Let's go take a look at what that is.
>
> **[4:49](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=289)** Nope. It went away.
>
> **[4:50](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=290)** So I guess it's fine.
>
> **[4:52](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=292)** Let's link our code just to be sure before we run it because we've also made a change to the library, I would also want to link the library.
>
> **[5:03](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=303)** That looks fine.
>
> **[5:04](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=304)** Then finally let's run it and test.
>
> **[5:09](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=309)** So what we want to see happen is when a new user arrives, any connected user gets a notice.
>
> **[5:16](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=316)** The server started and is listening.
>
> **[5:18](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=318)** So let's go to the client.
>
> **[5:20](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=320)** Here I have the client side by side, they both closed.
>
> **[5:24](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=324)** On the left side, I have a client named Jane.
>
> **[5:26](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=326)** On the right, I have a client named Ryan.
>
> **[5:28](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=328)** Let's open the first connection.
>
> **[5:31](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=331)** The connection opened just fine.
>
> **[5:33](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=333)** Now, as we open Ryan's connection, we should see Jane get a new message.
>
> **[5:39](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=339)** So let's try that.
>
> **[5:41](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=341)** And here we go.
>
> **[5:43](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=343)** We have a system notice event that says Ryan has joined the chat.
>
> **[5:47](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=347)** So it works.
>
> **[5:48](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=348)** With this notification, any UI would have all the info it needs to alert the users of new arrivals.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** web (2), [[Search]] (2), database (1)
> **Env Vars:** url (9), ide (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (3)
> **Cross-References:** go back to (2)
> **UI Navigation:** go to (1), open the (1)
> **Analogies:** for instance (1), such as (1)
> **Speakers:** - [instructor] (1)


### 3. Build the UI with Angular

[↑ Back to Table of Contents](#table-of-contents)

#### A quick look at Angular
> [LinkedIn Learning](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/a-quick-look-at-angular?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/a-quick-look-at-angular?u=76281980&t=0)** - [Instructor] We spent the last chapter building up the backend service.
>
> **[0:04](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/a-quick-look-at-angular?u=76281980&t=4)** Now it's time to build up the UI.
>
> **[0:07](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/a-quick-look-at-angular?u=76281980&t=7)** For our use case we'll use the Angular Framework.
>
> **[0:09](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/a-quick-look-at-angular?u=76281980&t=9)** A JavaScript framework that makes front end easy to build.
>
> **[0:14](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/a-quick-look-at-angular?u=76281980&t=14)** From the README file, if you scroll down to the tools used to build this application section, Angular framework is one of these.
>
> **[0:22](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/a-quick-look-at-angular?u=76281980&t=22)** Let's head to the website.
>
> **[0:25](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/a-quick-look-at-angular?u=76281980&t=25)** On Angular's webpage, I just want to point out a couple of the features of the library.
>
> **[0:30](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/a-quick-look-at-angular?u=76281980&t=30)** Angular is built around components, where a component is a single unit of view that the user interact with.
>
> **[0:37](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/a-quick-look-at-angular?u=76281980&t=37)** The component is made up of three portions.
>
> **[0:39](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/a-quick-look-at-angular?u=76281980&t=39)** There's the component class, where the logic drives the component.
>
> **[0:45](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/a-quick-look-at-angular?u=76281980&t=45)** There's a component template, which can be an HTML file or an HTML template within the component file itself.
>
> **[0:52](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/a-quick-look-at-angular?u=76281980&t=52)** And there's a component style, a SaaS or CSS file where you style the template.
>
> **[0:59](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/a-quick-look-at-angular?u=76281980&t=59)** We'll take a look at these in a minute.
>
> **[1:01](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/a-quick-look-at-angular?u=76281980&t=61)** Something else that is important to know about Angular is how the template interacts with the logic.
>
> **[1:07](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/a-quick-look-at-angular?u=76281980&t=67)** Here are a couple of examples.
>
> **[1:09](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/a-quick-look-at-angular?u=76281980&t=69)** In the top section, we have a paragraph.
>
> **[1:12](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/a-quick-look-at-angular?u=76281980&t=72)** And you'll notice the bracket notation, which is a way to assign to a property within the template.
>
> **[1:20](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/a-quick-look-at-angular?u=76281980&t=80)** So id equals say hello id means, take the ID property of this paragraph and assigned to it the say hello ID property, that's in the components class.
>
> **[1:32](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/a-quick-look-at-angular?u=76281980&t=92)** Likewise, style.color here, means take the style and the color property of that style for this paragraph and assign to it the font color property from within the component class.
>
> **[1:47](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/a-quick-look-at-angular?u=76281980&t=107)** Besides the bracket notation, the only other notation you need to be aware of in Angular for this course, is the parenthesis notation.
>
> **[1:54](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/a-quick-look-at-angular?u=76281980&t=114)** Parentheses capture events.
>
> **[1:56](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/a-quick-look-at-angular?u=76281980&t=116)** So in the second snippet, click equals same message, means when a click event is admitted by this button, capture that and execute the same message method in the component template.
>
> **[2:10](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/a-quick-look-at-angular?u=76281980&t=130)** So with this building blocks in place, let's switch back to our code.
>
> **[2:15](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/a-quick-look-at-angular?u=76281980&t=135)** Let's navigate to the Angular application, which we called web app.
>
> **[2:21](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/a-quick-look-at-angular?u=76281980&t=141)** Within the source slash app folder, We have all of the files we're going to be interacting with.
>
> **[2:27](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/a-quick-look-at-angular?u=76281980&t=147)** Here you see that we have several app component files.
>
> **[2:31](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/a-quick-look-at-angular?u=76281980&t=151)** We have app components ts, where the logic will reside.
>
> **[2:35](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/a-quick-look-at-angular?u=76281980&t=155)** We have app components HTML, where the template will reside.
>
> **[2:41](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/a-quick-look-at-angular?u=76281980&t=161)** And finally, we have app component SCSS, where the styling will reside.
>
> **[2:47](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/a-quick-look-at-angular?u=76281980&t=167)** These work together to build the component.
>
> **[2:50](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/a-quick-look-at-angular?u=76281980&t=170)** The component itself, it's part of the app module, where app module lists all the dependencies Angular needs to know about, to display your component.
>
> **[3:02](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/a-quick-look-at-angular?u=76281980&t=182)** You can see within app module here that we have some imports.
>
> **[3:05](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/a-quick-look-at-angular?u=76281980&t=185)** Import browser module, import browser animation module.
>
> **[3:09](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/a-quick-look-at-angular?u=76281980&t=189)** As we add more UI blocks to our component, we need to import more modules from the Angular materials library.
>
> **[3:17](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/a-quick-look-at-angular?u=76281980&t=197)** The modules we import, allow your component to use more and more features.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (9), [[HTML]] (3), application (2), [[JavaScript]] (1), [[SaaS]] (1)
> **Exercise Files:** template (7)
> **Env Vars:** html (3), readme (1), css (1), scss (1)
> **UI Navigation:** scroll down (1), navigate to (1)
> **Definitions:** is a  (2)
> **Documentation:** the readme (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Set up the chat component
> [LinkedIn Learning](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=0)** - [Instructor] It's time to start building our app component.
>
> **[0:03](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=3)** We'll use mock data, and establish initial styling.
>
> **[0:06](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=6)** Let's navigate to the webapp.
>
> **[0:10](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=10)** I'm going to open up all three files for the app component.
>
> **[0:14](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=14)** The ts file, the html file, and the styling file, because we need to edit all three.
>
> **[0:20](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=20)** Let's start with the ts file.
>
> **[0:22](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=22)** Let's define the two main objects that we need to display the component.
>
> **[0:26](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=26)** The messages are of type ChatRelayMessage, they come from the server.
>
> **[0:31](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=31)** The current user is just a user, and that comes from our websocket/types library.
>
> **[0:40](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=40)** Angular exposes an execution hook called OnInIt that we can implements to make sure that angular will run code that we want when it loads up this components.
>
> **[0:51](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=51)** OnInIt comes from angular/core.
>
> **[0:54](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=54)** Let's implement the execution hook.
>
> **[0:56](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=56)** We'll set some mock data at the start.
>
> **[0:59](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=59)** So for messages, let's say we have a first message from Jane with id: 1, who says,
>
> **[1:12](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=72)** "Hi, this is Jane."
>
> **[1:15](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=75)** And we'll have another message from say, Henry, with id: 2.
>
> **[1:21](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=81)** And Henry replies with, "Hello, Jane I'm Henry."
>
> **[1:26](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=86)** Finally, let's load up the currentUser with some mock data as well, we'll call him Xavier, and give him id: 3.
>
> **[1:37](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=97)** Okay, now that it's set, let's go style the component a little bit.
>
> **[1:42](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=102)** We'll delete the previous stylings we had here, and style the host selector.
>
> **[1:47](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=107)** Host selector will style the entire component.
>
> **[1:49](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=109)** So, what I'd like to do is use a grid display, we use CSS grid, and let's organize our template areas.
>
> **[1:57](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=117)** We'll have at the top header and login-state, or maybe connection-state.
>
> **[2:04](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=124)** This is where the user would be able to connect, or maybe even disconnect from the websocket.
>
> **[2:08](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=128)** Then we'll have the user-list on the sidebar with the chat-area where the messages will be displayed in the middle, and let's extend the user-list all the way to the bottom, because the chat could have a lot of users.
>
> **[2:20](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=140)** But at the bottom, for the main area, we will have the chat-input where the user can enter next chat message.
>
> **[2:28](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=148)** With that out of the way, let's establish the width of the columns.
>
> **[2:32](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=152)** I'll use one fraction and three fraction, so that the left section is only 1/3rd as wide as the main section, and we'll add a gap between the different areas, so they don't bump into each other.
>
> **[2:45](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=165)** The last thing I like to do is define a style and a class for each of these template areas, so that we can quickly identify them in the template.
>
> **[2:52](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=172)** So we'll have, login-state, which will have a grid-area of login-state.
>
> **[3:01](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=181)** And repeat that for all of the different areas.
>
> **[3:04](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=184)** So this is one for header, user-list, chat-area, chat-input.
>
> **[3:14](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=194)** What happens with CSS grid is that when in the template we assign a class to an element.
>
> **[3:22](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=202)** The corresponding grid-area we can define here will let the browser know where to place that element in the view.
>
> **[3:32](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=212)** So, any element that has class chat-input, for instance, we're saying assign it to the grid-area of chat-input.
>
> **[3:38](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=218)** So within the view, it's going to be in the main section in the middle of the page.
>
> **[3:44](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=224)** Add some spacing here.
>
> **[3:48](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=228)** With that basic CSS styling out of the way, we can then move on to the component template.
>
> **[3:53](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=233)** And what we'll do in the template is start displaying the mock data that we established in the component class.
>
> **[3:59](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=239)** First, there is the user object itself.
>
> **[4:02](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=242)** So, let's put this in a div called login-state, so that it would be placed in the right position.
>
> **[4:09](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=249)** And in here, we're going to place the currentUser.
>
> **[4:14](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=254)** This double bracket notation is a way to tell angular to take that field and display it in this section.
>
> **[4:22](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=262)** The vertical bar is called a pipe, and this tells angular how to display it.
>
> **[4:26](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=266)** We're telling angular, "Take the currentUser, and pass it through the json pipe, because it's an object."
>
> **[4:34](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=274)** Next thing I'd like to do is display the messages.
>
> **[4:37](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=277)** And for this, we need to loop through them.
>
> **[4:40](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=280)** Angular offers a directive called ngFor, which will allow us to loop through messages.
>
> **[4:49](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=289)** And this will be the class chat-area.
>
> **[4:53](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=293)** We define this class as having the position where the message will be displayed in the style.
>
> **[4:59](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=299)** So how do we display the message?
>
> **[5:01](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=301)** Well, for now, same as we display the user, we're just going to say messages, and pass it through the json pipe.
>
> **[5:10](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=310)** So that it looks okay, I'm actually going to wrap it inside a preformatted tag, like so.
>
> **[5:18](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=318)** So let's start the application and see what it looks like.
>
> **[5:22](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=322)** First thing I'd like to watch is lint it first.
>
> **[5:28](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=328)** This allows to see quickly whether we've made a syntactic error or import error.
>
> **[5:33](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=333)** That looks good, and then we start the application.
>
> **[5:39](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=339)** The angular application will run on port 4200.
>
> **[5:42](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=342)** So, once it gets started here, we'll move on to the browser, and load that web page.
>
> **[5:48](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=348)** Let's go to the browser.
>
> **[5:50](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=350)** In the browser, let's navigate to localhost 4200 and load the page.
>
> **[5:55](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=355)** And we can see that everything seems to work fine.
>
> **[5:58](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=358)** We have the currentUser at the top in div.login.state, there's space on the left.
>
> **[6:03](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=363)** In fact, here, we can see the entire grid-area.
>
> **[6:07](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=367)** The space in the middle contains the chat messages, the mock messages that we've identified.
>
> **[6:12](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=372)** So everything seems to be working great.
>
> **[6:14](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=374)** We're ready to build on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (8), data (4), css (3), application (3), [[WebSocket]] (2)
> **Exercise Files:** template (6)
> **Code Identifiers:** currentuser (4), ngfor (1)
> **Env Vars:** css (3)
> **UI Navigation:** navigate to (2), go to (1)
> **Definitions:** is a  (1), is called (1)
> **CLI Commands:** make (1)
> **Ports:** port 4200 (1)

#### Prototype the chat UI
> [LinkedIn Learning](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=0)** - [Instructor] It's finally time to flash out the UI.
>
> **[0:03](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=3)** We need two basic elements, a Chat Panel where we'll display old messages and append new ones, and an input area where the user will be able to draft and send new messages.
>
> **[0:16](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=16)** Let's move to the code.
>
> **[0:19](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=19)** So because I like to watch what happens as I make change to the application, I like running the application in the browser side by side with the IDE as I code.
>
> **[0:29](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=29)** So in this case, let's start the application, and while that runs, let's take a look at the tool we're going to use to build the UI component.
>
> **[0:40](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=40)** If you scroll down in the readme file all the way to tools used to build this application, one of the tools is the Angular Material UI Library.
>
> **[0:47](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=47)** Let's head over to its website.
>
> **[0:50](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=50)** The material library comes with components that can be used to quickly bootstrap a webpage.
>
> **[0:55](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=55)** We are particularly interested in the card component.
>
> **[0:58](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=58)** A simple card is a great way to display anything that needs to pop against the background, and I think it would make a good option for our chat message, so I'm going to copy this.
>
> **[1:09](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=69)** And we're also going to use the form input field, but we'll get to that in a minute.
>
> **[1:19](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=79)** So when using an Angular Material components pay attention to the API tab up here, it'll let you know what you need to import from Angular Material.
>
> **[1:27](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=87)** In our case, it's actually the MatCardModule, so that's what I'll start with.
>
> **[1:32](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=92)** The card module has to be imported into our app module.
>
> **[1:37](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=97)** From the file browser, let's open up all of the files we need to edit.
>
> **[1:43](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=103)** app module, definitely the app template, the app styling.
>
> **[1:49](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=109)** Let's start with the app module.
>
> **[1:51](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=111)** Here we're going to import the two modules we need for the day; the MatCardModule.
>
> **[1:58](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=118)** We'll also need the MatInputModule.
>
> **[2:02](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=122)** With this out of the way, we can move on the template and add the MatCard.
>
> **[2:08](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=128)** Let me go copy the code.
>
> **[2:10](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=130)** On the webpage for the Angular Material Library, all examples have codes right next to them, so in this case, I'm just going to copy the MatCard code, and put it in our template.
>
> **[2:20](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=140)** Now all of the messages to be displayed as cards, so let's put the mat-card in here, but we actually want the cards to be iterated over rather than the apparent dev, So I'm going to move the ngFor down to apply to the mat-card.
>
> **[2:35](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=155)** For each message we need a card.
>
> **[2:37](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=157)** Well, what should the card have?
>
> **[2:38](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=158)** Well, let's have the author of the message.
>
> **[2:43](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=163)** Remember that this message comes from the app component where we define the mark message data, and we also need the contents of the message, and perhaps we can have a horizontal rule between the two.
>
> **[3:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=180)** Let's see what it looks like.
>
> **[3:01](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=181)** Let's go to the browser.
>
> **[3:03](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=183)** In the browser I'm going to load up our application, which would be running by now, and we have our messages here, but there's still a lot of junk we need to take care of, so let's set this side by side and make edits to the template.
>
> **[3:19](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=199)** Now that we have the mat-card, we no longer need this message through JSON.
>
> **[3:26](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=206)** The cards are also too wide, they don't really pop against the background, so let's go to the app component CSS, and within the chat area which is where the cards are displayed, add some styling.
>
> **[3:40](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=220)** Let's make their max width 400 pixels, and add a bottom margin, maybe 15 pixels, let's see what that looks like.
>
> **[3:50](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=230)** I'm saving the file, and that looks better.
>
> **[3:54](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=234)** I actually, don't like the horizontal rule between the two, so let's go remove that.
>
> **[4:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=240)** Okay, that's not better.
>
> **[4:03](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=243)** The other thing we want to add is the input field which should go below the chat messages.
>
> **[4:08](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=248)** In the CSS, we define this area of the grid as chat input, and we give it a right here, so this is what we need to have in the template.
>
> **[4:21](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=261)** Now let's take a look at the angular material form input to see the proper selector.
>
> **[4:30](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=270)** Let's look at the examples.
>
> **[4:33](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=273)** I'm interested in the outline form field, so let's go look at the code for that one and copy that.
>
> **[4:41](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=281)** We'll remove the things we don't need such as hint and label.
>
> **[4:46](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=286)** I only really care about the placeholder.
>
> **[4:49](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=289)** Let's ask the user, "What's on your mind?"
>
> **[4:53](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=293)** Let's save the file and see what it looks like.
>
> **[4:55](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=295)** Okay, it appears here, but it's a little too short, so let's go style it a little bit differently, so this would be in the chat-input area.
>
> **[5:04](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=304)** Here we go.
>
> **[5:07](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=307)** Let's make it display it as block, and have a max width of 430 pixels, looks about right.
>
> **[5:17](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=317)** That's a little small, let's make it 432 pixels.
>
> **[5:21](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=321)** And the reason 432 pixels works is that if we look at the browser in greater detail, and we inspect the card, the card has 432 pixels in width, and so by setting the input to be 432 pixels wide, I know that they will align.
>
> **[5:41](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=341)** Okay, at this point we have the cards and we have the input.
>
> **[5:43](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=343)** Things are coming along just fine.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (5), [[Angular]] (5), css (2), api (1), next (1)
> **CLI Commands:** make (6)
> **Env Vars:** css (2), ide (1), api (1), json (1)
> **Exercise Files:** template (5)
> **UI Navigation:** go to (2), scroll down (1)
> **Code Identifiers:** ngfor (1)
> **Documentation:** the readme (1)
> **Definitions:** is a  (1)

#### Add the connection UI
> [LinkedIn Learning](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=0)** - One area of our template we still need to flesh out is the connection UI.
>
> **[0:04](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=4)** There should be an input box and a connect button showing when the user is not yet connected but we should also show the user information when the user already is connected.
>
> **[0:13](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=13)** So let's build that.
>
> **[0:16](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=16)** First, let's start the web app.
>
> **[0:20](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=20)** And while this pulls up, let's go grab the button UI that we need from the angular material library.
>
> **[0:27](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=27)** My browser let's find out the material library's page and the component I'm interested in is the button.
>
> **[0:37](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=37)** We'll just take a basic, how about a erase button that might be fun.
>
> **[0:44](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=44)** The API we need to import is the mat-button module.
>
> **[0:48](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=48)** So let's actually start there.
>
> **[0:50](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=50)** And remember that our our imports go into our app module.
>
> **[0:52](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=52)** So if I now link it to app module I can add Mat button module to our import array.
>
> **[1:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=60)** And then finally, within the login stick up here we can have the connection button as well as the input.
>
> **[1:08](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=68)** So we'll have a simple Mat input filled as we had before.
>
> **[1:13](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=73)** Instead of outline here, let's make it standard because I don't want the outline going around the box and the hints might be what's your name?
>
> **[1:24](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=84)** We also need a button.
>
> **[1:26](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=86)** And for that, let's take a look at the library.
>
> **[1:31](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=91)** Under examples, we had seen a erase button somewhere.
>
> **[1:36](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=96)** Let's go grab that and we'll make this a connect.
>
> **[1:46](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=106)** Let's take a look at what it looks like in the browser.
>
> **[1:50](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=110)** I'm going to put the browser and the IG side by side now so we can call changes live.
>
> **[1:59](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=119)** Okay, here we are.
>
> **[2:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=120)** It looks all right, but I'd like it to extend the width of this main panel.
>
> **[2:04](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=124)** So let's go to the CSS and under the login state section which is where we have this input we're going to change this display to be of type flex and justify content be center.
>
> **[2:23](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=143)** Let's see where that works.
>
> **[2:26](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=146)** That's not as good is it let's make a change here.
>
> **[2:29](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=149)** I don't like that so much.
>
> **[2:31](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=151)** I'm going to use align items center that might look better.
>
> **[2:39](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=159)** Okay. Let's save.
>
> **[2:43](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=163)** Okay. They are aligned but let's add some margin between the two.
>
> **[2:47](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=167)** So we're going to say the immediate children will have a margin of say 16 pixels.
>
> **[2:55](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=175)** Okay. I like that a lot more.
>
> **[2:56](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=176)** So now we have this connects button.
>
> **[2:59](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=179)** Let's make it so that when we click the connect button something actually happens.
>
> **[3:04](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=184)** In angular you can bind to template events using the parenthesis notation.
>
> **[3:09](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=189)** So in this button, all I need to do is say one to one clicks, execute a method.
>
> **[3:16](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=196)** So let's say the connects method.
>
> **[3:19](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=199)** We then need to go define this method in the app component.
>
> **[3:23](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=203)** So that's sort of the app component, the TS file.
>
> **[3:27](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=207)** And we're going to need a new connect method.
>
> **[3:32](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=212)** So what should this take?
>
> **[3:34](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=214)** We needed to have the username the user entered in the input box.
>
> **[3:38](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=218)** The simplest way to do this is to have a template variable on the input.
>
> **[3:44](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=224)** Let's call it username because we can then pass it into the connect function here.
>
> **[3:52](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=232)** And what it will actually give us is the... What's the matter here.
>
> **[3:57](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=237)** Oh, it's complaining because the connect method within the component does not expect any input but we can fix that.
>
> **[4:03](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=243)** So the username here actually gives us a handle on the inputs element itself.
>
> **[4:07](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=247)** So this would be username input which is an HTML input element and let's just console log it connecting as user name input dot value.
>
> **[4:24](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=264)** Once we save this, we can test whether it works.
>
> **[4:27](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=267)** So let's open up the console and enter name.
>
> **[4:35](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=275)** It was Xavier I think.
>
> **[4:36](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=276)** If I connect, here we go connecting as Xavier.
>
> **[4:40](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=280)** So this part is looking good.
>
> **[4:42](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=282)** The next thing we need to do is when the user is connected this should just show the user's name.
>
> **[4:48](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=288)** So how do we implement that?
>
> **[4:49](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=289)** Well, let's go back to the app components HTML.
>
> **[4:52](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=292)** What we actually need is a switch clause.
>
> **[4:56](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=296)** When the user is defined show one thing when the user is not defined, show something else.
>
> **[5:03](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=303)** So let's have it here.
>
> **[5:05](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=305)** angular gives us a switch case called NG switch.
>
> **[5:11](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=311)** And this would be is current user undefined.
>
> **[5:18](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=318)** If the current user is undefined then we want to show the forms.
>
> **[5:23](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=323)** So all of these we've just coded would go inside a container.
>
> **[5:29](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=329)** Here we go.
>
> **[5:32](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=332)** And this would be switch case true user is undefined.
>
> **[5:37](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=337)** Otherwise, if the user is defined we'll have a different NG container.
>
> **[5:47](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=347)** And here we're just going to show the user objects.
>
> **[5:51](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=351)** All right.
>
> **[5:52](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=352)** So let's have this running and take a look.
>
> **[5:55](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=355)** How do we see?
>
> **[5:58](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=358)** Here We have the user object because the user was defined.
>
> **[6:01](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=361)** But if we go back to the app component and not set the current user to anything and reload we should see that again, the connection to time shows up.
>
> **[6:11](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=371)** So everything seems we wired up correctly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (3), [[HTML]] (2), web (1), api (1), css (1)
> **CLI Commands:** make (4), find (1)
> **Env Vars:** html (2), api (1), css (1)
> **Exercise Files:** template (3)
> **Cross-References:** go back to (2)
> **Definitions:** is an  (1), is a  (1)
> **UI Navigation:** go to (1)
> **Speakers:** - one (1)


### 4. Turn On WebSockets in the UI

[↑ Back to Table of Contents](#table-of-contents)

#### Simulate authentication on new connections
> [LinkedIn Learning](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980&t=0)** - [Instructor] Our back end is ready to receive connections and our UI is scaffolded with mock data.
>
> **[0:05](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980&t=5)** In this chapter, we'll add the connective tissue between the two and draw up our application.
>
> **[0:10](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980&t=10)** When the user logs in by connecting to the WebSocket, the server should return a user object containing the id of the user.
>
> **[0:17](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980&t=17)** This simulates authentication in a production application.
>
> **[0:20](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980&t=20)** Let's modify our backend to add a new login event, and to return the user on new connections.
>
> **[0:26](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980&t=26)** Navigate to the types library so we can add the new type of event to the message types.
>
> **[0:34](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980&t=34)** In the ws message file, we already had ChatMessage, ChatRelayMessage and SystemNotice messages.
>
> **[0:40](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980&t=40)** Let's add the LoginMessage and LoginMessage would just have event of type login and a payload that's the user.
>
> **[0:57](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980&t=57)** Now let's add this to the union of WsMessage types.
>
> **[1:03](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980&t=63)** With that out of the way, we can go to the server and emit the new LoginMessage event when a new connection is established.
>
> **[1:11](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980&t=71)** Within ws handler, let's have a quick reminder of our logic flow.
>
> **[1:18](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980&t=78)** On line 18 on socket connected is called when a new sock connection is established.
>
> **[1:24](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980&t=84)** Right now we just add that socket to userManager.
>
> **[1:28](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980&t=88)** A userManager would make sense to emit the new loginMessage event.
>
> **[1:32](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980&t=92)** So I'm here within the userManager file and let's take a look at the add method.
>
> **[1:40](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980&t=100)** The add method creates the user and adds it to the set of saved users.
>
> **[1:47](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980&t=107)** This is where we ought to emit it as well.
>
> **[1:49](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980&t=109)** So let's create the new loginMessage and it'll have user and the event will be login.
>
> **[2:01](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980&t=121)** This is what we want to send to the user who just logged in.
>
> **[2:04](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980&t=124)** The user who just logged in is available through the socket that was passed in.
>
> **[2:08](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980&t=128)** So all we have to do is to say socket.send the loginMessage.
>
> **[2:19](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980&t=139)** Now, we cannot send the message itself without first JSON stratifying it.
>
> **[2:25](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980&t=145)** An object can't be sent as is.
>
> **[2:27](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980&t=147)** So what we'll do is wrap this in a JSON.stringify.
>
> **[2:32](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980&t=152)** Let's see whether this works.
>
> **[2:33](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980&t=153)** We'll use a browser extension to connect to the server and see whether this login event is emitted.
>
> **[2:39](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980&t=159)** Let's switch the browser.
>
> **[2:42](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980&t=162)** In my browser, I'm going to start the events website at clients and let's clear the old messages.
>
> **[2:49](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980&t=169)** Let's log in as Ryan and see whether any messages returned.
>
> **[2:55](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980&t=175)** Look at that, I forgot to start the server.
>
> **[2:57](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980&t=177)** Let's go back and start the server that might help.
>
> **[3:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980&t=180)** Back in the IDE, let's open the terminal and start the server.
>
> **[3:07](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980&t=187)** Now that the server is listening, we'll try again.
>
> **[3:10](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980&t=190)** Back to the browser and let's open the connection again.
>
> **[3:16](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980&t=196)** Perfect.
>
> **[3:17](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980&t=197)** We can see the response came back as the login message payload.
>
> **[3:22](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980&t=202)** Event login, name Ryan, id one.
>
> **[3:24](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980&t=204)** So it works.
>
> **[3:27](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980&t=207)** The backend is now simulating authentication flow.
>
> **[3:29](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980&t=209)** The next time we connect from the client we can display info by the user that came from the server instead of relying on mock data.
>
> **[3:36](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980&t=216)** It's another big step forward.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (2), application (2), [[JSON]] (2), [[WebSocket]] (1), next (1)
> **Code Identifiers:** usermanager (3), loginmessage (3)
> **UI Navigation:** open the (2), navigate to (1), go to (1)
> **Env Vars:** json (2), ide (1)
> **CLI Commands:** make (1)
> **Tools:** terminal (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Connect the web app to the socket
> [LinkedIn Learning](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=0)** - [Instructor] In Angular, the class responsible for interfacing with backend services is called a provider.
>
> **[0:06](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=6)** In our application, this is the class that will connect to the websocket and return the user object to the component.
>
> **[0:13](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=13)** Let's build it.
>
> **[0:14](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=14)** Let's go the webapp project and inside of the app directory, we're going to add a new class called app.service.
>
> **[0:26](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=26)** This is the provider that will connect to the websocket.
>
> **[0:31](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=31)** We have to add the injectable decorative function above it to allow Angular to inject it in our components.
>
> **[0:39](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=39)** We also need to go to the app.module and add it to the providers array.
>
> **[0:46](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=46)** To inject a service in a component, we need to add it as a member within the constructor.
>
> **[0:54](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=54)** Now, let's focus for a minute on AppService.
>
> **[0:57](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=57)** AppService needs to be able to connect to the websocket.
>
> **[1:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=60)** So let's add a connect function that takes the user's name.
>
> **[1:04](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=64)** AppService also has to be able to return the user upon authentication.
>
> **[1:10](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=70)** Now, a clean way to do this is to add a user stream into which we're going to push the user once we know his or her identity.
>
> **[1:19](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=79)** So this stream will emit user.
>
> **[1:20](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=80)** And it starts with undefined.
>
> **[1:23](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=83)** To connect to the websocket, we're going to use the rxjs library's webSocket function.
>
> **[1:28](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=88)** From the readme file, if you scroll down to the tools used to build this application section, you'll see rxjs webSocket as one of these tools and a link to its website.
>
> **[1:40](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=100)** For this application, we use a small subset of its functionality that I'll explain as I use them.
>
> **[1:46](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=106)** Let's first import webSocket and create one.
>
> **[1:53](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=113)** Now, the webSocket requires us to have a URL.
>
> **[1:57](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=117)** So actually, instead of creating it here because we don't yet know the name, which is part of the URL, it's best to create it inside of the connect function.
>
> **[2:06](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=126)** So what I'll do is to say in here this.socket is webSocket to whom we pass the URL.
>
> **[2:18](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=138)** And up here, all we want to do is let's see what type it is.
>
> **[2:24](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=144)** WebSocketSubjectConfig.
>
> **[2:25](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=145)** All we want to do is declare the type.
>
> **[2:28](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=148)** I'm pretty sure it's WebSocketSubject and the type of message that comes out of it is WsSubject.
>
> **[2:34](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=154)** Okay, great.
>
> **[2:35](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=155)** So connect creates the socket but to actually connect to the socket, we have to call subscribe on it.
>
> **[2:42](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=162)** So let's do that.
>
> **[2:43](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=163)** And what subscribe takes is a callback that will be executed with messages coming from the socket.
>
> **[2:49](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=169)** So let's first create this callback.
>
> **[2:53](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=173)** We call onMessageFromServer.
>
> **[2:56](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=176)** And the message is of type WsMessage.
>
> **[2:58](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=178)** This comes from our shared library of types.
>
> **[3:02](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=182)** And this is what subscribe should call.
>
> **[3:07](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=187)** So what should we do when a message arrives?
>
> **[3:09](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=189)** Well, we have different message types.
>
> **[3:11](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=191)** If you navigate to the shared types, src, lib folder, inside of ws-messages, you'll see the different types of messages we've cleared on line three.
>
> **[3:21](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=201)** ChatRelay, ChatMessage, SystemNotice.
>
> **[3:23](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=203)** We're interested in LoginMessage.
>
> **[3:26](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=206)** To know which message we're receiving, we look at the event key because that's what differentiates them.
>
> **[3:32](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=212)** So within AppService, when a message arrives, we want to get the event.
>
> **[3:39](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=219)** And depending on the event, we'll change our behavior.
>
> **[3:44](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=224)** The first event we want to handle is login.
>
> **[3:47](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=227)** Now, when a login event arrives, we know that the user is the payload.
>
> **[3:51](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=231)** So all we have to do is push that into the user stream.
>
> **[3:55](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=235)** We call next to push something into a stream and we're going to push in message.user.
>
> **[4:02](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=242)** We also want a break so that there's no follow through to the next case in the switch case.
>
> **[4:08](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=248)** Something else that might be useful for debugging is to console.log the message that comes from the server.
>
> **[4:17](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=257)** There we go.
>
> **[4:18](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=258)** With that in place, what we need to do is go back to the app.component and consume this stream to update the local user.
>
> **[4:29](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=269)** Previously we had hard coded a user.
>
> **[4:34](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=274)** This time what we want to do is listen to the stream and when a user comes out, set the current user to equal the user who came out of the stream.
>
> **[4:44](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=284)** With that in place, let's test everything.
>
> **[4:46](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=286)** First, we're going to lint the application to make sure there's no problem.
>
> **[4:56](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=296)** That looks good.
>
> **[4:59](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=299)** Let me terminate whatever's running in the other tab.
>
> **[5:03](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=303)** And then we're going to start the application.
>
> **[5:08](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=308)** Now, we also need to start the backend since we're doing a real socket connection this time.
>
> **[5:16](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=316)** The backend's listening and so is the front end.
>
> **[5:20](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=320)** Let's switch to the browser and try connection.
>
> **[5:24](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=324)** In the browser, let's expand to show the console and go to localhost:4200.
>
> **[5:29](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=329)** The application loads successfully.
>
> **[5:31](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=331)** Let's try to connect as Ryan.
>
> **[5:37](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=337)** Something is wrong, the connection did not occur.
>
> **[5:39](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=339)** Oh, I know, we forgot to actually wire in the connect button to the AppServices connect method.
>
> **[5:46](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=346)** Let's go back to the code.
>
> **[5:49](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=349)** Within the app.component, we have this connect method on line 28.
>
> **[5:54](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=354)** All it does is log.
>
> **[5:56](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=356)** What we should do is capture the userName
>
> **[6:04](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=364)** and use that to connect.
>
> **[6:11](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=371)** Okay, let's give this another try after the application recompiles.
>
> **[6:15](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=375)** Let's go back to the browser.
>
> **[6:19](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=379)** Okay, the application has reloaded.
>
> **[6:21](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=381)** Let's try to connect as Ryan.
>
> **[6:25](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=385)** There we go, that's what I expected.
>
> **[6:27](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=387)** So from the server, we received the message, event: login, user: Ryan and we can see that in the view, we now have name: Ryan, id: 1.
>
> **[6:36](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=396)** And this comes from the template.
>
> **[6:38](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=398)** Let's go to the template quickly.
>
> **[6:41](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=401)** In the app template, if you recall, this was called app.component.html.
>
> **[6:47](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=407)** There we go.
>
> **[6:49](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=409)** By the way, remember that you can always look near the top of my window to see where I am in the file tree.
>
> **[6:55](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=415)** What we have at the top of the template is a switch case.
>
> **[6:59](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=419)** If currentUser is undefined, whenever that's true, we show a form.
>
> **[7:06](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=426)** Whenever it's false, meaning the currentUser is set, when set to the currentUser.
>
> **[7:10](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=430)** And that's why in the browser, we see the currentUser want to connect.
>
> **[7:15](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=435)** Everything works great.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WebSocket]] (9), application (8), [[Angular]] (2), next (2), [[Debugging]] (1)
> **Code Identifiers:** websocket (5), currentuser (4), onmessagefromserver (1), username (1)
> **UI Navigation:** go to (3), scroll down (1), navigate to (1), switch to (1)
> **Exercise Files:** template (4)
> **Env Vars:** url (3)
> **Cross-References:** go back to (3)
> **Definitions:** is a  (2), is called (1)
> **File Paths:** app.component.html (1)

#### Start chatting
> [LinkedIn Learning](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=0)** - [Instructor] It's finally time to get chat messages flying back and forth.
>
> **[0:03](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=3)** We need to update every part of the stack to make this work.
>
> **[0:06](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=6)** But once we're done we'll be able to see multiple users having a live chat over WebSocket.
>
> **[0:11](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=11)** Let's start with the backend service and work our way all the way to the UI template to affect this change.
>
> **[0:16](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=16)** Buckle in.
>
> **[0:18](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=18)** Remember, you can always look at the top of my window here to see where I am within the project.
>
> **[0:23](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=23)** The first file we need to change is a ws handler file which is in the server package.
>
> **[0:30](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=30)** This is the file that receives the socket message and acts upon it.
>
> **[0:34](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=34)** Right now all we do is send it to everyone.
>
> **[0:37](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=37)** What we want to do instead is create a chat relay message that we send to everyone rather than the original message because the original message does not contain the author but the relay does.
>
> **[0:50](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=50)** So let's use a switch statement here and take a look at the payloads event type.
>
> **[1:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=60)** If it is a chat event, then we need to relay the message.
>
> **[1:05](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=65)** Well, how do we do that?
>
> **[1:07](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=67)** Well, let's go to the user manager because user manager handles users and replies.
>
> **[1:13](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=73)** We're going to add a new relay chat method.
>
> **[1:17](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=77)** That takes the socket event came from as well as the original chat message.
>
> **[1:27](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=87)** From here we can construct the relay message.
>
> **[1:35](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=95)** Event is always chat relay.
>
> **[1:36](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=96)** Contents matches the original chat messages contents.
>
> **[1:40](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=100)** And we need author.
>
> **[1:42](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=102)** Well, how do we find the author?
>
> **[1:44](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=104)** The author is the user who sent this information.
>
> **[1:47](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=107)** Remember that user manager has a map called sockets?
>
> **[1:51](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=111)** That binds each web socket to a user.
>
> **[1:54](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=114)** So all we have to do here is to say this.sockets get the user at the from socket.
>
> **[2:03](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=123)** This will give us the user.
>
> **[2:05](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=125)** Once we have the relay message, we can send it to all.
>
> **[2:10](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=130)** This will ensure that whenever a chat comes in we send the relay message which includes the chat's original author to everyone connected.
>
> **[2:18](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=138)** That's user manager.
>
> **[2:19](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=139)** Well ws handler can then leverage this new functionality when a chat event comes in to just relay it.
>
> **[2:30](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=150)** And remember to break.
>
> **[2:33](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=153)** So that should be it for the backend.
>
> **[2:34](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=154)** Everything is wired up here.
>
> **[2:36](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=156)** We move up the stack to the front end and this time the app service, which interacts with the backend.
>
> **[2:43](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=163)** So let's look up app service.
>
> **[2:46](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=166)** And this is in the web app source app folder.
>
> **[2:51](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=171)** There are two things we need to do here.
>
> **[2:52](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=172)** First, we need to be able to handle relay message.
>
> **[2:55](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=175)** When a message come from a server we are aware of login message.
>
> **[2:58](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=178)** The next case we handle here is chat relay.
>
> **[3:02](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=182)** When a relay message arrives, what should we do?
>
> **[3:05](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=185)** Well, we need to send it to the browser.
>
> **[3:07](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=187)** More specifically, to the template.
>
> **[3:10](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=190)** So let's have a new chat message stream here where we can push the relay messages.
>
> **[3:20](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=200)** And when a new one arrives we just push it into the stream.
>
> **[3:25](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=205)** And break.
>
> **[3:26](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=206)** So that's the first thing this app service needs to be able to do.
>
> **[3:29](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=209)** But the other thing it needs to be able to do is to send a message to the backend.
>
> **[3:33](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=213)** So let's add a method called send.
>
> **[3:38](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=218)** This is what will be triggered whenever the user types in a new message.
>
> **[3:41](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=221)** And all it needs are the contents to send to the backend.
>
> **[3:47](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=227)** To send a message into the socket is pretty easy.
>
> **[3:49](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=229)** We just call socket.next and we pass in the data.
>
> **[3:54](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=234)** Well let's first construct the payload.
>
> **[4:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=240)** Event is always chat and content is whatever was passed to us.
>
> **[4:05](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=245)** So we can send this to the WebSocket.
>
> **[4:09](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=249)** And here, everything is wired up.
>
> **[4:11](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=251)** We then move up this stack to the app component.
>
> **[4:14](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=254)** The app component consumes the app service.
>
> **[4:17](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=257)** So let's look it up.
>
> **[4:20](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=260)** The app component class needs two things as well.
>
> **[4:23](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=263)** First it needs the ability to add new messages to the array.
>
> **[4:27](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=267)** Right now we have this mock array.
>
> **[4:29](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=269)** Instead, what we need to do is subscribe to the new chat message stream and when a new message arrives, just add it to the array.
>
> **[4:45](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=285)** What we're really doing here is creating a new array because Angular will only notice that something has changed if you create the new array.
>
> **[4:53](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=293)** So that's the first thing.
>
> **[4:54](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=294)** The next thing this needs to be able to do is to actually send the message to the backend.
>
> **[4:58](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=298)** So let's add send and it'll be very similar to the connect.
>
> **[5:03](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=303)** What we pass here is the input element so that we can read its value.
>
> **[5:07](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=307)** In this case, we'll call it chat input.
>
> **[5:11](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=311)** And we'll say this.appService.send(chatInput.value).
>
> **[5:19](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=319)** And then finally, we go one more level up the stack to the app component template, where we have the form field where the user will input whatever is on her mind.
>
> **[5:28](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=328)** We need this to trigger this send.
>
> **[5:30](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=330)** The way we do it is very similar to what we did with the input for connection where we took the username as a template variable and we passed it into a method.
>
> **[5:40](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=340)** Here let's call this chatInput and we'll listen to the Enter key.
>
> **[5:47](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=347)** Angular makes this really easy with this parenthesis notation.
>
> **[5:50](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=350)** Listen to the keyup enter event.
>
> **[5:55](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=355)** And when that occurs, we call send and we pass in the chat input.
>
> **[6:01](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=361)** Let's see with everything is wired correctly.
>
> **[6:04](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=364)** First thing I want to do is make sure to lint both the web app and the server because we made so many changes.
>
> **[6:13](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=373)** And the server, npm run server:lint.
>
> **[6:18](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=378)** Let's look at the result of the web app linting.
>
> **[6:20](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=380)** That worked so that we can start the web application.
>
> **[6:25](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=385)** And let's look at these server results.
>
> **[6:28](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=388)** That worked as well so we can start the server.
>
> **[6:34](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=394)** Once they've both started, we'll go to the browser and try to send messages back and forth.
>
> **[6:42](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=402)** Great, the web app has started and the server is listening.
>
> **[6:44](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=404)** Let's go to the browser.
>
> **[6:46](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=406)** Here in the browser I've loaded two instances of the application.
>
> **[6:50](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=410)** Let's log in as Mike on one side and as Erin on the other and start sending messages.
>
> **[6:59](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=419)** So Mike will say, "Hi this is Mike".
>
> **[7:03](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=423)** And we see it pop up immediately on Erin's side.
>
> **[7:06](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=426)** And Erin might say, "Hey Mike!"
>
> **[7:10](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=430)** Now notice a couple of things.
>
> **[7:12](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=432)** We are going through the backend, back and forth here.
>
> **[7:15](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=435)** We also noticed that the messages are popping up immediately.
>
> **[7:18](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=438)** We have the author and the content of the message.
>
> **[7:21](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=441)** Everything works well.
>
> **[7:22](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=442)** There's one thing I'd like to change though.
>
> **[7:24](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=444)** I noticed that when I enter a message it does not clear this input field and that's inconvenient because the user has to delete it to send the next message.
>
> **[7:31](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=451)** So let's go back to the code and fix that.
>
> **[7:33](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=453)** In the app component, when we send the next thing we ought to do is to clear this input.
>
> **[7:40](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=460)** So let's do chatInput.value equals an empty string.
>
> **[7:45](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=465)** Let's recompile and see whether that helps us.
>
> **[7:49](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=469)** Let's go to the browser.
>
> **[7:51](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=471)** I have my browser side by side here once more.
>
> **[7:54](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=474)** Mike and let's say Ellen this time and when Mike sends a message, Ellen gets it but the inbox is cleared.
>
> **[8:04](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=484)** Everything works great.
>
> **[8:07](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=487)** It's definitely exciting to see the chat come to life.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** web (5), next (5), [[WebSocket]] (2), [[Angular]] (2), data (1)
> **CLI Commands:** make (2), find (1), npm (1)
> **Code Identifiers:** chatinput (3), appservice (1)
> **UI Navigation:** go to (4)
> **Exercise Files:** template (4)
> **Definitions:** is a  (2)
> **Analogies:** similar to (2)
> **Best Practices:** remember to (1), make sure to (1)

#### Challenge: Show notification when user enters or leaves
> [LinkedIn Learning](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-show-notification-when-user-enters-or-leaves?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-show-notification-when-user-enters-or-leaves?u=76281980&t=1)** (upbeat intro music)
>
> **[0:05](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-show-notification-when-user-enters-or-leaves?u=76281980&t=5)** - [Narrator] Our chat works, but there are a couple of missing features that result in a poor user experience.
>
> **[0:10](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-show-notification-when-user-enters-or-leaves?u=76281980&t=10)** Suppose that Mike logged in here, and there's a friend of mine, Ella, logged on the other side.
>
> **[0:19](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-show-notification-when-user-enters-or-leaves?u=76281980&t=19)** We can be chatting.
>
> **[0:23](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-show-notification-when-user-enters-or-leaves?u=76281980&t=23)** And if Ella disconnects by say, closing a browser, I'll have no idea.
>
> **[0:30](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-show-notification-when-user-enters-or-leaves?u=76281980&t=30)** I could still be talking.
>
> **[0:34](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-show-notification-when-user-enters-or-leaves?u=76281980&t=34)** I get no notification that Ella is gone.
>
> **[0:37](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-show-notification-when-user-enters-or-leaves?u=76281980&t=37)** Your next challenge is to fix this.
>
> **[0:41](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-show-notification-when-user-enters-or-leaves?u=76281980&t=41)** I want you to add a notification whenever a user enters or leaves the room, so that all users in the chat room are aware of this.
>
> **[0:49](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-show-notification-when-user-enters-or-leaves?u=76281980&t=49)** You may find documentation for the WS library useful.
>
> **[0:53](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-show-notification-when-user-enters-or-leaves?u=76281980&t=53)** Also feel free to use one of angle materials components if a simple browser alert isn't spiffy enough for you.
>
> **[1:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-show-notification-when-user-enters-or-leaves?u=76281980&t=60)** This challenge should take you about 20 to 40 minutes to complete.
>
> **[1:03](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-show-notification-when-user-enters-or-leaves?u=76281980&t=63)** Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[User Experience (UX)|User experience]] (1), next (1)
> **CLI Commands:** find (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat intro music) (1)

#### Solution: Show notification when user enters or leaves
> [LinkedIn Learning](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=0)** (bright epic music)
>
> **[0:05](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=5)** - [INSTRUCTOR] So were you able to implement the notifications?
>
> **[0:09](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=9)** In an earlier chapter, we added the system notice message type that we can leverage here.
>
> **[0:14](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=14)** We also previously built handlers for new connections and new disconnection from the sockets that we can also use here.
>
> **[0:21](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=21)** So a lot of the pieces are already in place.
>
> **[0:24](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=24)** Let's go through my implementation.
>
> **[0:27](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=27)** We'll start with the backend.
>
> **[0:28](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=28)** So let's get into the server package and look at ws_handler.
>
> **[0:38](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=38)** When we receive a new socket connection we call user manager.ad.
>
> **[0:42](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=42)** Let's go see what it does.
>
> **[0:45](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=45)** User manager.ad creates a system notice and sends it to everyone.
>
> **[0:50](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=50)** So this is already working to do what we want.
>
> **[0:54](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=54)** Let's take a look at the socket disconnection.
>
> **[0:58](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=58)** When a socket is closed, we called userManager.remove.
>
> **[1:02](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=62)** Let's see what it does.
>
> **[1:04](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=64)** userManager.remove simply removes the socket from the map.
>
> **[1:08](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=68)** So this is where we ought to emit the notice for disconnection.
>
> **[1:12](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=72)** Let's first capture the name of the disconnecting user, Where socket is the map, we get the user entry at this socket, and we capture the name of the user.
>
> **[1:27](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=87)** Then we can create the system message.
>
> **[1:29](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=89)** It'll be pretty similar to what we did with the user joining the chat.
>
> **[1:32](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=92)** Let's copy that.
>
> **[1:38](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=98)** In our case we want to say name has left the chat, and send it to all.
>
> **[1:45](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=105)** That looks good.
>
> **[1:46](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=106)** That's all we should do for the backend.
>
> **[1:50](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=110)** Then we need to take a look at the frontend.
>
> **[1:52](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=112)** Specifically, the app service.
>
> **[1:56](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=116)** Remember that the app service is what links the frontend to the service on the backend.
>
> **[2:03](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=123)** So the app service already exposes different streams of data for new user, a new chat message.
>
> **[2:10](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=130)** Let's add a new one for system notices.
>
> **[2:14](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=134)** And this will be a new subject that emits the system notice type.
>
> **[2:20](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=140)** System notice remember comes from our types library.
>
> **[2:26](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=146)** So when do we push a new notice inside this subject?
>
> **[2:30](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=150)** Well, when we receive a message from the server we have a new case.
>
> **[2:33](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=153)** We had login and chat relay.
>
> **[2:35](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=155)** Now we need case system notice.
>
> **[2:39](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=159)** And when this occurs all we need to do is push into the stream, the next notice.
>
> **[2:47](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=167)** And break. Everything is set here.
>
> **[2:50](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=170)** Then we go one layer up to the app component.
>
> **[2:56](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=176)** The app component needs a way to listen for notices and show them to the user.
>
> **[3:02](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=182)** So let's first write a handler here on notice that will receive the notice, and do something with it.
>
> **[3:13](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=193)** What should it do with it?
>
> **[3:15](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=195)** Well, the simplest thing we can do with the notice is just alert the user, like so.
>
> **[3:20](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=200)** This will pop up a box that the user has to read and dismiss.
>
> **[3:24](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=204)** So it's pretty intrusive.
>
> **[3:26](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=206)** A better option would be to leverage the Angular material components that we've been working with.
>
> **[3:30](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=210)** In the readme file, if you scroll down to the tools used to build this application section, you'll see the Angular library.
>
> **[3:39](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=219)** Let's go to its website.
>
> **[3:41](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=221)** It has a pretty component for this use case.
>
> **[3:44](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=224)** On the Angular Material library website, Let's go to the component section.
>
> **[3:49](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=229)** And the component I'm interested in is called snackbar.
>
> **[3:56](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=236)** Snackbar is cool because it pops open an alert at the bottom of the screen, so it's not intrusive.
>
> **[4:04](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=244)** Let's import it.
>
> **[4:06](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=246)** If we look at the API it requires us to import MatSnackBar module.
>
> **[4:12](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=252)** As all of our dependencies, this goes into our app module.
>
> **[4:16](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=256)** Back to the project.
>
> **[4:17](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=257)** Let's load up app module, and add the new import.
>
> **[4:26](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=266)** Finally, within the app components, we need to inject the snackbar service.
>
> **[4:35](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=275)** It's called MatSnackBar.
>
> **[4:37](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=277)** This is a service that can open up that notification at the bottom of the screen.
>
> **[4:41](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=281)** So when the system notice comes in, all we have to do is execute the snackbar services open method, and passing what we want to toast.
>
> **[4:52](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=292)** In the message, the second parameter shows another message on the snackbar, which we don't need.
>
> **[5:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=300)** And the third parameter is a configuration objects.
>
> **[5:03](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=303)** And here we're interested in duration.
>
> **[5:05](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=305)** Let's make it 5,000 milliseconds.
>
> **[5:08](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=308)** So when should this be triggered?
>
> **[5:11](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=311)** While following the pattern we've established with chat message and user changes, we can also listen to the system message stream from the app service.
>
> **[5:24](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=324)** There we go.
>
> **[5:25](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=325)** Now that this is all wired up, lets link our code and check it out.
>
> **[5:31](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=331)** We'll also link the server since we made some changes there.
>
> **[5:41](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=341)** The web app linted successfully. Let's start it.
>
> **[5:48](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=348)** And the server linted successfully as well.
>
> **[5:54](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=354)** Once both of these have started, we'll go to the browser and test our implementation.
>
> **[6:01](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=361)** Server looks good.
>
> **[6:02](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=362)** Web app is running.
>
> **[6:03](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=363)** Let's go to the browser.
>
> **[6:06](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=366)** In the browser, I've loaded the application side by side.
>
> **[6:09](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=369)** Let's log it on one side as Mike.
>
> **[6:12](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=372)** And as I log in on the other side, pay attention to whether snack bar appears on Mike's screen.
>
> **[6:18](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=378)** So this is Ella.
>
> **[6:20](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=380)** There it is.
>
> **[6:21](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=381)** So when Ella connects, Mike gets a notification that will go away after five seconds.
>
> **[6:25](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=385)** What if Ella disconnects?
>
> **[6:26](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=386)** So let's close Ella's browser.
>
> **[6:29](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=389)** And there's a notification that Mike gets.
>
> **[6:33](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=393)** That looks great.
>
> **[6:34](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=394)** One thing I'd like to change quickly though is how we display the current user at the top.
>
> **[6:39](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=399)** Instead of having this ugly looking object, how about we just show Mike is logged in.
>
> **[6:45](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=405)** Let's go to the app component and quickly make this change.
>
> **[6:47](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=407)** Within the app template, we have the user shown with a JSON pipe.
>
> **[6:56](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=416)** All we need to do is to just display the user's name.
>
> **[7:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=420)** Let's say logged in as, and that should be it.
>
> **[7:06](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=426)** Let's go back to the web page, and let's log in.
>
> **[7:12](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=432)** Perfect. We have our notifications implemented and everything is looking great.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (3), web (3), application (2), data (1), next (1)
> **UI Navigation:** go to (5), scroll down (1)
> **Code Identifiers:** usermanager (2), ws_handler (1)
> **Env Vars:** instructor (1), api (1), json (1)
> **Definitions:** is a  (2), is called (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1)
> **Documentation:** the readme (1)

#### Challenge: Show list of connected users
> [LinkedIn Learning](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-show-list-of-connected-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-show-list-of-connected-users?u=76281980&t=1)** - Our web socket chat is almost complete.
>
> **[0:07](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-show-list-of-connected-users?u=76281980&t=7)** There's one crucial piece missing however.
>
> **[0:10](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-show-list-of-connected-users?u=76281980&t=10)** When user arrives, she has no way to know who is already in the chat room.
>
> **[0:15](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-show-list-of-connected-users?u=76281980&t=15)** Although she gets notifications for people coming, and leaving once she's there, there's no way to know who's in the chat.
>
> **[0:21](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-show-list-of-connected-users?u=76281980&t=21)** Let's fix this.
>
> **[0:23](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-show-list-of-connected-users?u=76281980&t=23)** In your next challenge, I'd like you to add a user's list to the view that's visible at all times when user is logged in.
>
> **[0:32](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-show-list-of-connected-users?u=76281980&t=32)** This is your biggest challenge yet, and it will require you to bring together, a lot of the techniques and resources, we've leveraged so far.
>
> **[0:38](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-show-list-of-connected-users?u=76281980&t=38)** I've done some of the fun and pre-work, let me show you.
>
> **[0:42](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-show-list-of-connected-users?u=76281980&t=42)** Navigate to the Web App, App folder, and look in the App components.
>
> **[0:49](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-show-list-of-connected-users?u=76281980&t=49)** In the App components, I've added a new member called user.
>
> **[0:53](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-show-list-of-connected-users?u=76281980&t=53)** That's an array of the connected users.
>
> **[0:55](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-show-list-of-connected-users?u=76281980&t=55)** And I fill it in with some mock data, in the NG on data handler, in the App template, the CML file, I've added a new class user list to a dev, within this dev.
>
> **[1:12](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-show-list-of-connected-users?u=76281980&t=72)** We use the angle of materials, Mattlist to list out all the users.
>
> **[1:17](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-show-list-of-connected-users?u=76281980&t=77)** Here you can see that we're iterating over users, and for each user we're printing the user's name and ID.
>
> **[1:24](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-show-list-of-connected-users?u=76281980&t=84)** Let's see what it looks like in the browser.
>
> **[1:28](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-show-list-of-connected-users?u=76281980&t=88)** Let's load the application.
>
> **[1:29](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-show-list-of-connected-users?u=76281980&t=89)** Here you can see the user's list on the left hand side, with our mock data.
>
> **[1:34](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-show-list-of-connected-users?u=76281980&t=94)** In your implementation, this list will only be available, once the user has actually connected to the socket, since it has to come from the back end.
>
> **[1:41](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-show-list-of-connected-users?u=76281980&t=101)** This challenge should take you 45 to 60 minutes.
>
> **[1:44](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-show-list-of-connected-users?u=76281980&t=104)** Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (3), web (2), next (1), application (1)
> **Env Vars:** cml (1)
> **UI Navigation:** navigate to (1)
> **Exercise Files:** template (1)
> **Speakers:** - our (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Show list of connected users
> [LinkedIn Learning](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=5)** - [Instructor] So how did you solve the problem of the user not knowing who logged in before she arrived?
>
> **[0:10](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=10)** Were you able to show the user's list at all times?
>
> **[0:13](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=13)** There are few ways this can be done, but a simple one is to just add a new message type and follow the patterns we've established before.
>
> **[0:21](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=21)** Let's head to the shared library and in the file where we defined the types of messages, add a new one.
>
> **[0:31](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=31)** Let's call it UserListMessage.
>
> **[0:34](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=34)** We'll make the events userList, and we'll give it a user's array.
>
> **[0:41](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=41)** With that defined, we can start using this message in the server.
>
> **[0:48](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=48)** The class in the server that's responsible for messaging users is user-manager.
>
> **[0:52](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=52)** So let's go to it and take a look at where we need to make a change.
>
> **[0:56](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=56)** User manager has an add method which is called when a user is added to the socket.
>
> **[1:03](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=63)** And a remove method when the socket disconnects.
>
> **[1:06](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=66)** These are the places where we need to omit the updated user list to all users.
>
> **[1:11](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=71)** So let's add a new helper method that will do just this.
>
> **[1:16](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=76)** Rather than call it updateUserList, let's say sendUserList to all.
>
> **[1:22](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=82)** Much more descriptive.
>
> **[1:24](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=84)** So first thing we need to do is to draft the message.
>
> **[1:30](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=90)** Event is sets to userList, how do we get the users?
>
> **[1:34](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=94)** This has to be an array of users.
>
> **[1:36](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=96)** Well remember that this class has all the users in a map.
>
> **[1:42](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=102)** So if we want to get them, all we have to do is iterate over the values of the map.
>
> **[1:49](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=109)** In our case, this simply means, this.sockets.values, this is not an array, it's an iterator.
>
> **[1:57](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=117)** So turn it into an array, we wrap it in array.from, and that's that.
>
> **[2:05](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=125)** The next thing we need to do is send this to everyone.
>
> **[2:10](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=130)** Or the id complaints that this is not a type WsMessage.
>
> **[2:14](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=134)** So let's go double check that we've added userListMessage to WsMessage.
>
> **[2:20](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=140)** We didn't, so it's missing from this type which is why the idea wouldn't let me use it in that space.
>
> **[2:27](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=147)** Okay, that should fix things.
>
> **[2:29](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=149)** All right, everyone is happy again.
>
> **[2:31](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=151)** So at this point we've sent the updated user list to everyone listening, but where should we call this method?
>
> **[2:38](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=158)** What we've already determined that it should be called whenever a user is added or removed.
>
> **[2:43](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=163)** In the add function, let's execute it after the socket has been added to the map.
>
> **[2:49](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=169)** In the remove function, we'll execute it at the end as well after the user has been removed from the map.
>
> **[2:55](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=175)** That's all we need to do for this step, we can then move up one level in the stack to the front end, more specifically the app service that handles connections with the back end.
>
> **[3:10](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=190)** The app service has on message from server method which should handle the new case.
>
> **[3:18](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=198)** If a user list is sent, what should we do?
>
> **[3:21](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=201)** Well, let's just stick to the same pattern we've already established.
>
> **[3:27](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=207)** In this case I'm going to use a behavior subject rather than a subject that's because a behavior subject allows me to set a default value.
>
> **[3:34](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=214)** We'll start with an empty array.
>
> **[3:38](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=218)** And when a new list comes in, we just send the users into the stream and break.
>
> **[3:46](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=226)** That should be it, then the app component has to consume this list, so let's go edit that.
>
> **[3:54](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=234)** Our app component right now has a mock list of users, we will replace this with the user list.
>
> **[4:03](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=243)** And when a new list arrives, just update the local list.
>
> **[4:09](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=249)** This should have us covered, let's link our code and test it.
>
> **[4:21](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=261)** Web app completed successfully.
>
> **[4:23](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=263)** So let's try to launch it.
>
> **[4:29](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=269)** Likewise for the server.
>
> **[4:34](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=274)** The server is ready and so is the web app, let's go to the browser.
>
> **[4:39](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=279)** In my browser, I'm going to load two sessions of our application.
>
> **[4:43](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=283)** Suppose the user logs in first, let's say Mike logs in first.
>
> **[4:48](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=288)** Mike gets the user list which has Mike and no one else.
>
> **[4:52](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=292)** On the other side, let's say Erica logs in, let's see what happens.
>
> **[4:58](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=298)** Mike gets a notification and both Mike and Erica got the updated user list, fantastic.
>
> **[5:05](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=305)** Supposed they chat a bit, so hi, this is Mike.
>
> **[5:12](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=312)** Hi Mike, I'm Erica.
>
> **[5:16](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=316)** When one of them disconnects, let's say Erica disconnects.
>
> **[5:19](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=319)** Let's see what the Mike's user list gets updated.
>
> **[5:22](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=322)** It does, not only does he get notification, but Erica is removed from the user list, works great.
>
> **[5:29](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=329)** One quick thing I noticed that I want to fix here is that it's not easy to tell which posts are yours and which aren't.
>
> **[5:36](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=336)** So from Mike's perspective, all posts look the same.
>
> **[5:39](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=339)** Let's make Mike's own posts stand out a little bit.
>
> **[5:42](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=342)** Let's go back to the template.
>
> **[5:45](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=345)** So here we are in the app component.
>
> **[5:47](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=347)** If we navigate to the template, the posts come from this mat-card.
>
> **[5:53](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=353)** What we want to do is add a class, if the card belongs to the current user.
>
> **[5:57](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=357)** So let's say class.current-user will be set if message.author.id is the same as currentUser.id, and we add a question mark here, just in case current user is null or undefined we don't want to try to fetch id against it.
>
> **[6:17](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=377)** So current user will be added as a class to mat-card when appropriate.
>
> **[6:22](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=382)** Then we need to go to the SaaS file to add styling for the current user class.
>
> **[6:26](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=386)** So this is in, say mat-card there we go.
>
> **[6:32](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=392)** So if we have current user, we're going to make the background-color beige.
>
> **[6:40](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=400)** With that in mind, let's make sure the app recompiles, and let's go back to the browser.
>
> **[6:47](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=407)** In the browser, let's load up again two sessions and quickly test.
>
> **[6:55](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=415)** They both connected when Mike says, hi this is Mike.
>
> **[7:01](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=421)** And Erica replies.
>
> **[7:06](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=426)** We can see that for each individual, his or her post is now styled differently so it'll stand out.
>
> **[7:12](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=432)** This is great work.
>
> **[7:13](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=433)** With this piece of the puzzle in place, we now have a fully functional chat powered by web sockets.
>
> **[7:18](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=438)** Congratulations on making it this far, we could spruce it up a little bit with some UI tweaks but we've done a fantastic job here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** web (3), next (1), application (1), [[Fetch]] (1), [[SaaS]] (1)
> **Code Identifiers:** userlist (2), updateuserlist (1), senduserlist (1), userlistmessage (1), currentuser (1)
> **CLI Commands:** make (5)
> **UI Navigation:** go to (3), navigate to (1)
> **Cross-References:** go back to (2)
> **Exercise Files:** template (2)
> **Definitions:** is called (1), we call this (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/next-steps?u=76281980&t=0)** - [Instructor] Thanks for sticking with me through the course.
>
> **[0:02](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/next-steps?u=76281980&t=2)** I hope you had as much fun building as I did.
>
> **[0:05](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/next-steps?u=76281980&t=5)** We've come a long way from zero to having a full, stack-chat application powered by WebSocket.
>
> **[0:11](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/next-steps?u=76281980&t=11)** If what seemed like magic at the start, is now just cool but makes sense to you, I've done my job.
>
> **[0:17](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/next-steps?u=76281980&t=17)** There's so much more we could add to our chat server before we release it to the wild.
>
> **[0:22](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/next-steps?u=76281980&t=22)** Here are some of the ideas I had that I just could not fit into this course.
>
> **[0:26](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/next-steps?u=76281980&t=26)** Error handling, unit testing, input validation, proper authentication so users don't impersonate one another, private messages, message history, such that a user who logs in can see all previous messages, or a user who loses his internet connection can see messages he missed when he comes back.
>
> **[0:49](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/next-steps?u=76281980&t=49)** If interest in this course is high, I would love to take on some of these topics in a future WebSocket course.
>
> **[0:55](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/next-steps?u=76281980&t=55)** This has been Patrick Siewe and the pleasure has been mine.
>
> **[0:59](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/next-steps?u=76281980&t=59)** Cheers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WebSocket]] (2), application (1), [[Unit Testing]] (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Patrick Siewe]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/websocket-comms-with-node-and-angular-2825709)

## Skills Covered

- WebSocket
- Angular
- Node.js

## Path Context

### In [[Explore Web Development with Angular]]
← [[Angular- Cloud-Powered Apps with Firebase]] | **6 of 6**

## Appears In

- [[Explore Web Development with Angular]]

## Related Courses

_Courses sharing skills:_

- [[Building Angular and Django Apps]] — Angular
- [[Learning Full-Stack JavaScript Development- MongoDB, Node, and React]] — Node.js
- [[Building a Website with Node.js and Express.js]] — Node.js
- [[Advanced Node.js- Scaling Applications]] — Node.js
- [[Advanced Node.js]] — Node.js

---

[↑ Back to top](#)