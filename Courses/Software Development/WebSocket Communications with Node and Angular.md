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
created: 2026-05-03
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

#### [What are WebSockets?](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/what-are-websockets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/what-are-websockets?u=76281980&t=0)** - [Patrick Siewe] [[WebSocket|WebSockets]] is the stuff of magic. Remember, the first time you came across a website that updates in real time. It might have been as simple as a stock price ticker, or as complex as a multiplayer game. These sites really stand out from the typical block post new site, or profile page. Real time two way communication, is powered by WebSockets, and learning how to use them to your advantage, will allow you to develop more useful, engaging, and just plain fun software. As everything around us gets ever more connected and interactive, these skills are bound to become more valuable, more marketable. This course will take you through setting up a [[WebSocket]] server from scratch in NodeJS. We'll learn how to test a server, when there is Node UI to speak of. And then we'll go and build the UI as well. In the end, we'll have an end to end solution, for a chat application, powered by, well, I'll give you two guesses, and one of them better rhyme with Lead Buckets. I am Patrick Siewe, a full stack engineer, who loves to teach and learn. I've been taken by WebSocket ever since I learned about them, and I'm on a mission to help others see just how cool they are to work with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WebSocket|Websockets]] (2), [[WebSocket]] (2)
> **CLI Commands:** node (1)
> **Speakers:** - [patrick (1)

#### [Preview the chat app we will build together](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/preview-the-chat-app-we-will-build-together?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/preview-the-chat-app-we-will-build-together?u=76281980&t=0)** - [Instructor] We'll spend the course learning all things [[WebSocket|WebSockets]] by building an end-to-end solution for live chatting. Let me show you what the final product will look like from the browser's perspective then touch just a bit on the making of this sausage. Here, we have our final application open in two browser [[Windows]]. The front end is built using the angler framework with UI components from the angle and material library. We have the ability to connect to the backend of our WebSockets. The user would enter his or her name and hit connect. The login form goes away, we now have the user's identity and a box where the user can start chatting. Pressing enter submits the chat entry. Another user comes in later from another browser and logs in. Notice that Mike gets a popup notification and the user list on the left side of the window is updated with Jen. This is all handled over WebSockets. As Jen enters the chat, Mike gets it immediately. We also added styling to make it easy to recognize one's own chat and identity from the user's list. Let's go to the IDE where I can show you a little bit about how the sausage is made. Here, I have the file browser open with all the project files. I suggest starting with the readme file which I have loaded in the main pane. The readme file gives tons of information
>
> **[1:32](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/preview-the-chat-app-we-will-build-together?u=76281980&t=92)** about not just how to run this application but some of the tools we used. So a quick look through the readme will give you a very good sense of what to expect from this course. This application is organized in a Monorepo meaning a single [[Git]] repository hosting several applications. These are in the packages directory, where you can see that we actually have several packages. The backend which is a server. A share library of types and the front end which is the webapp. Throughout the course, we'll learn how to manage multiple applications working together to deliver a seamless product. As you can see, there is a lot of building to be done, but in the end, what may have started looking like magic should just be plain cool.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WebSocket|Websockets]] (3), [[Windows]] (1), [[Git]] (1)
> **Documentation:** the readme (3)
> **CLI Commands:** make (1), git (1)
> **Definitions:** is a  (2)
> **Env Vars:** ide (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [What you should know](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/what-you-should-know?u=76281980&t=0)** - [Instructor] Before you get started with this course, there are a few things you need to know. Number one, general programming. I assume that you have development experience. This course isn't meant to be your first foray into programming. I explain concepts as I go, but you should know enough about coding to be able to follow well-written code and understand concepts like classes, interfaces, functions and methods, and callbacks. Number two, TypeScript. You should be comfortable working with TypeScript and at least vaguely familiar with [[Object-Oriented Programming (OOP)|object-oriented programming]]. In the course's Read Me file, you'll find a link to a good TypeScript introductory course, should you need one. Number three, [[Node.js]]. We use a Node.js server to run the [[WebSocket]] backend, so some familiarity with Node is a plus, but not necessary. Number four, [[Angular]]. I use the Angular library to build the frontend, so knowledge of Angular is helpful. However, you won't use most of the features of the library. Taking 15 minutes to read through the Angular Essential section of the What is Angular page before starting Chapter Three would come in handy. Number five, [[Git]]. Basic knowledge of Git is necessary to clone the report to your machine and to load the state of our build at different points in the course, since every lesson has a checkpoint in the Git history with a corresponding Git tag. Most importantly, you need enthusiasm
>
> **[1:34](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/what-you-should-know?u=76281980&t=94)** and willingness to build, break, and rebuild. There's just no substitute for getting your hands dirty and it's fun to boot, so have at it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (5), [[Git]] (4), [[Node.js]] (2), [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1), [[WebSocket]] (1)
> **CLI Commands:** git (4), node (3), find (1)
> **File Paths:** node.js (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 1. Environment: TypeScript, Node, and Angular

[↑ Back to Table of Contents](#table-of-contents)

#### [How to clone the code at any stage](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/how-to-clone-the-code-at-any-stage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/how-to-clone-the-code-at-any-stage?u=76281980&t=0)** - As you progress through the course you'll inevitably find yourself wondering how to get your local environment to match mine. Starting from the same state we'll make it easier for you to code along. To make this simple for you we'll use [[Git]] tags. A git tag is a reference to a particular commit within the git history. By checking a branch out from the git tag you'll be setting your locals files to match that point in time in the history of development. If you select the branch dropdown and the tags tag you'll see all of the git tags in this tree. Let's clone the ripple locally and I'll show you how to make use of them. First let's copy the get you git URL. I'll move on to my command prompt to clone the repo. Here my command prompt I'll execute. Git clone, the git URL and the name of the folder I want to clone things into. You may get a credential helper pop up. If you do select no helper. No credentials are needed. The repo has been cloned into the web sockets folder. So I'll go to the IDE and open the folder there. The first file you should take a look at when you open the project is probably the Read Me file. It has a lot of information about how to run the project, what resources are used et cetera. Let's take a look at the git history.
>
> **[1:38](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/how-to-clone-the-code-at-any-stage?u=76281980&t=98)** We start in the main branch. The main branch contains all of the commits that make up the full application and checking out the main branch will get you the final set of the application. But as I said before there's a tag for every point in development. Let's list out the tags. The tags name matches the beginning of the lesson whose chapter number and video number are named in the tag. For instance to rewind the state of the local files to what they were at the beginning of chapter one lesson two I would simply do get check out branch, name my branch and then name the tag I'm branching out from. This would create a new branch that's exactly the same as the tag that we branched out from. If I go back to the file browser I can see that in packages there's now nothing. That's because we rewind the state all the way to chapter one lesson two the beginning of the lesson. Let's get back to the final state of the application by checking out the main branch. The next thing that is important for you to do before you start development is to run [[npm]] install. Once you complete this install
>
> **[3:11](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/how-to-clone-the-code-at-any-stage?u=76281980&t=191)** you'll be ready to start working. Now that you know how to get back to the same page as me feel free to experiment with the code. Try out interesting things, go off the beaten path and have fun. Also remember you can branch out from the same tag multiple times.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (9), [[npm]] (1)
> **CLI Commands:** git (9), make (4), find (1), npm (1)
> **UI Navigation:** open the (2), select the (1), dropdown (1), go to (1)
> **Env Vars:** url (2), ide (1), npm (1)
> **Tools:** command prompt (2)
> **Prerequisites:** install (2)
> **Cross-References:** go back to (1)
> **Exercise Files:** clone the repo (1)

#### [Create shared datatypes library](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=0)** - [Instructor] One common challenge you'll run across when developing a UI and its back end, is that while there are separate applications many of the data construct they need overlap. For instance, both apps will need a user object. What do we define this object? In both the UI and the back end. This carries significant risks that the two code bases will diverge, will have to always remember to make a change to one whenever we make a change to the other. A better approach is to create a shared library of types that both applications can import and use. This will allow us to have a single definition for all shared assets. As a bonus, it's easy. Let's dive in and create it. In the README file if you scroll down to working with the model repo, you'll notice a Creating the Shared Library section. This section shows the script that we need to run to create a library. What we're doing here is leveraging the Nx build systems generator using the Nx generate command. The particular generator we're using here comes from the Narwhal workspace package and it's called library. Types is just the name of our generated library. Let's copy this script and run it in the terminal. Nx has created all the files that we need to have our library running. Tsconfigbase.[[JSON]] has been updated. Let's go take a quick look at that first. Whenever a library is added, Nx will a path to the library's entry point in the path's object. Our library's package name is [[WebSocket]]/types.
>
> **[1:35](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=95)** So any application that is imported an object from our library can just import it from websocket/types. The library source files themselves are within the packages folder and the types folder because that's what we named our library. Everything we call goes inside of source and index.ts is the library's entry point. Anything we export from this file will be available to external packages. So let's add this user object. So within the lib folder, I'll create the file, and from that file export a user interface. So make it accessible to external packages. I'll have to also export it from the entry point, and I can delete the default files that we don't need. This is just confirming that I don't want them anymore. Now the user is available to everyone. The last thing I'd like to do is to add to packagejson a new script that will help us lint the library to make sure that it's synthetically correct. Let's call it types:lint, and this group will execute Nx's lint command on the library we just created. Let's try it quickly to make sure that we have made no mistakes so far. Oh, it's not happy about something.
>
> **[3:09](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-shared-datatypes-library?u=76281980&t=189)** Aha. So the linting rules require interface to not be empty. We just created a user interface but we put nothing in there. So let's add some keys, user needs a name and an ID. Let's go back and try to lint once more, and see if there's anything else that we missed. Now everything is hunky-dory. Everyone is happy. With our library in place, whenever we make a change to a shared type it'll be a lot easier to propagate that change to all our applications, because it will all be importing from the common source of truth. Nice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WebSocket]] (2), [[JSON]] (1)
> **CLI Commands:** make (6)
> **File Paths:** tsconfigbase.json (1), index.ts (1)
> **Env Vars:** readme (1)
> **Documentation:** the readme (1)
> **Tools:** terminal (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** for instance (1)

#### [Create the Node.js service](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-node-js-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-node-js-service?u=76281980&t=0)** - [Instructor] To get a live chat going, we need a way to keep track of our users and their messages and to notify all users when something new is posted into the chatroom, or when someone answers or leaves the room. We need a backend service. It'll expose a [[WebSocket]] end point, manage client connections, and relay chat messages between users. Let's create a bare bones no GS application for this task. From the readme file, scroll down to the working with a Monorepo section, creating the WebSocket server. There, you see a script where we leverage the annex builders generator, more specifically the narwhal node app generator to create a service called server. Let's copy and execute this script in the terminal. The annex script will create all the files that we need to stand up our server. The server source files are inside of packages server. Let's go take a look at what was created. Every package you create with annex has a project.[[JSON]] file. This file lists all the things that annex knows how to do with your package. Inside of the target object are the different scripts that can be run to manage your package. Specifically, build, serve, lint, and test. We'll come back to this in a minute. The source folder includes all of the source files that we will code and main.ts
>
> **[1:33](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-node-js-service?u=76281980&t=93)** is the entry point for our package. This is the file that runs when the service starts. Let us modify what gets printed. Now to start the server, we need to add a script to package JSON that leverages these tools that annex puts at our disposal. Specifically, we need a linting script and we need a serve script. So let's go to the top level package JSON and add scripts for the server. I will say annex lint package server and to start the server, we'll execute annex serve server.
>
> **[2:20](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-node-js-service?u=76281980&t=140)** So when this script gets executed, the corresponding project JSON tool will be run. In this case, serve to start the server. With everything in place, let's actually start our server. Well, first actually, let's lint it. Linting checks whether there are any syntactic or import circle dependency errors and everything looks good. Finally, let's start the server. Once we do, we can see hi, I'm alive, printed to the screen. This tells us that main.ts was executed properly and launched the console. With our backend service up, we now have the beginnings of our application upon which we can build up more features as we go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (4), [[WebSocket]] (2)
> **Env Vars:** json (4)
> **File Paths:** main.ts (2), project.json (1)
> **UI Navigation:** scroll down (1), go to (1)
> **CLI Commands:** node (1)
> **Documentation:** the readme (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Create the client Angular application](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=0)** - [Instructor] How will users interact with our chat service? They cannot be expected to call it directly. It's time to build a UI. For our purposes, we'll use [[Angular]], a highly scalable and well supported front end framework. So let's create a bare-bones Angular application. Within the README file, go to the Working with a Monorepo section, specifically Creating the Angular Web Application. Here we have an Nx generator script that will create an Angular application called webapp with some helpful configuration to get us started. Let's execute this in the terminal. And while the app gets created, move on to the next script, which is adding the Angular Material library. This library includes some UI components we can use to quickly build our chat room. We'll execute that as well. And let's go take a look at the files created. In the file browser within the packages directory there should be two new folders: webapp and webapp end to end. We only care about webapp. Within webapp a project.[[JSON]] file was created as is always the case when you add a new package using one of these Nx generators. And within the target object, we can see the different scripts that Nx has prepared for us. We're specifically interested in the lint and serve scripts. As we were, when we built our backend service, we can leverage these scripts to lint or to start our service. So let's add the corresponding routines to package.json.
>
> **[1:36](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=96)** To lint, we'll add a routine called webapp:lint, which will call nx_lint webapp. And to start our application, let's call our routine webapp:start and that will call nx_serve webapp project. With that set, let's take a closer look at the application itself which is in the source directory. Angular application comes in modules. Modules lists dependencies that Angular needs to render your UI. In our case, we have just one component called app.components. If you look in the app browser you'll notice several files named app.components. We have app.component.ts. This is a type script file that hosts the logic behind the components. In this case, a single variable is declared called title. Let's make it say, "I am Angular." Then we have component.scss or sometimes component.css. This is where you define styles. Let's create new style for class blue. Let's make it color darkblue. and it's maybe margin auto. Border 2 pixel. Okay, and the final piece of the component is the [[HTML]]. And this is where you define the template
>
> **[3:09](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/create-the-client-angular-application?u=76281980&t=189)** for your component. And so here let's make a div that has the class we just declared, and the div will say the title of the application. So you can see how all of these will work together. The type script file defines the logic, the CSS file or SAS files declares the styles and the display HTML file, the template file, will join the two. Let's start our application using the script we just created in package.json. The webapp:start script. Once Angular starts, it will run on localhost4200. So let's go to localhost4200. And here we see the div we created earlier with the class and the styles that we set. So we can be sure that everything is wired correctly. Angular is running. The component template is bound to the component class, which is bound to the component styles. At this point, we have all of our major pieces scaffolded. The UI, the backend service, and the library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (10), [[JSON]] (3), [[HTML]] (2)
> **File Paths:** package.json (2), project.json (1), app.component.ts (1), component.scss (1), component.css (1)
> **Env Vars:** html (2), readme (1), css (1), sas (1)
> **CLI Commands:** make (3)
> **Exercise Files:** template (3)
> **Code Identifiers:** nx_lint (1), nx_serve (1)
> **UI Navigation:** go to (2)
> **Documentation:** the readme (1)

#### [Review the project structure](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/review-the-project-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/review-the-project-structure?u=76281980&t=0)** - All the elements that will make up our application have been created. We have a Back End, a UI, and a library of shared types. And all of these will work together to deliver a great experience for both the developer and for the users. Before we build features on top of these, I wanted to take a moment to explore the project directory so that we have a good understanding of how the different files work together. So let's open up the file browser. At the top level is a package.[[JSON]], which declares the name of our project, the scripts we can run, which typically will start or lint different aspects of our project, and the dependencies for this project. We won't really be touching this anymore. At the top level, within the file browser, you can also see workspace.json. Workspace.json lists all the packages that we've created. Server is the Back End. Types is the library of shared types. And webapp is the front end. The packages themselves are in the packages directory. If we expand this within the file browser, we'll notice one folder for each package. Server types, webapp and webapp end to end, which we'll not be using. Let's expand server. Every package has a source folder and this is where the code is written. Outside of the source folder is a meta data
>
> **[1:32](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/review-the-project-structure?u=76281980&t=92)** telling us about the package or giving NX some information about how to handle the package. Of greatest interest to us is probably project.json, which we see in every package and more specifically the targets object because this object lists the different scripts that NX knows how to run, build, serve, lint, et cetera. And these are the targets we leveraged when we wrote our scripts within package.json, NX lent, NX serve. Within the source directory of each package is a main.ts or index.ts. This is the file that actually runs when that package starts or for a library when it gets imported. So if you look in the second package, for instance, types, we see within the source folder and index.ts, this is what gets run whenever we import our library. And then finally, we have the webapp package. This is the UI or the angler application. Main is the entry point, but all of our work within [[Angular]] will be inside the app folder, where we have an app components, an app module, and eventually we'll add an app service. These are the components that make up our project structure and with a good understanding of this structure we're ready to build more productively. So let's get to it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (5), [[Angular]] (1)
> **File Paths:** package.json (2), workspace.json (2), index.ts (2), project.json (1), main.ts (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (2)
> **Analogies:** for instance (1)
> **Speakers:** - all (1)

#### [Add the WebSocket server to Node.js](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=0)** - [Instructor] It's time to start building the first real feature of our application. Let's create the web socket server. We'll use the WS [[npm]] Library. Easily one of the most popular and most performant web socket libraries for Node. From the read me file, scroll down to the tools used to build this application. The first tool is the WS Library. Let's take a look at its [[GitHub]] page. Here on GitHub on the library's read me file, there's a table of contents with usage examples. The example that we care most about is the simple server example. It shows a pattern for how to build a basic web socket server. You create a new web socket server passing in some options, then you listen to the connection on the server which gives you a socket. You listen to a message on the socket, and the data that comes out of the socket will be in the callback. To send a message to the socket, you call send on it. Pretty straightforward. Let's code. Because we're working on this service, we want to go to the server package. Within this package, source.main is the file that runs when the server starts. Instead of logging to the console, let's create a function that we will execute. Well, what should it do? It should start the web socket server, but rather than crowd this file with all of our logic, let's go to app and create a new class, ws handler, which will be a wrapper around the WS Library's web socket server. Let's import the assets we need.
>
> **[1:41](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=101)** We definitely need web socket, which is an instance of the connection, web socket server, and the server option which dictate how the server is configured. We'll have a private web socket server within our class, and then initialize function. The initialized function will instantiate the server, passing in the options to configure the server. This function will also start listening for the server's events, specifically we're interested in the listening event and the connection event. The listening event is triggered when the server is ready to accept connections. So here, we're just going to log that the server is listening. And for the connection event, this is triggered when a client connects to the web socket. The inputs to this event are the web socket and the incoming request. Once this occurs, let's execute a local function on socket connected and pass in the socket and the request. Now we don't have this function defined yet, so now is as good a time as any to do that. It's incoming message. There we go. Incoming message. Well, right now we don't really have anything to do here,
>
> **[3:16](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=196)** so we'll just go into the console log new web socket connection. And we have the basics of our server. Now, to be able to use this in any way, we have to link it to main. So here, let's define the options. And the only one that we care about is a port number. Let's use 8080, and then we can instantiate the handler.
>
> **[3:49](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-websocket-server-to-node-js?u=76281980&t=229)** There we go. That should be good. Let's lint our code to make sure there is no error. There are two warnings because we defined socket and request for this method, but we're not using them. We'll use them later, so I'm okay with them for now. Let's finally start the server. The server starts successfully, and we can see that it is listening on port 8080, which means that our code is working. The server was instantiated, and this first event on line 10 was triggered successfully. Soon we'll have messages flying back and forth. I call that progress.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (2), [[npm]] (1)
> **CLI Commands:** npm (1), node (1), make (1)
> **UI Navigation:** go to (2), scroll down (1)
> **Definitions:** is an  (1), is a  (1), means that (1)
> **Tools:** github (2)
> **Ports:** port 8080 (1)
> **Env Vars:** npm (1)
> **Prerequisites:** configure (1)


### 2. Stand Up a WebSocket Service

[↑ Back to Table of Contents](#table-of-contents)

#### [Receive your first WebSocket connection](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=0)** - [Instructor] In this chapter we'll build out the web socket server that we created at the end of chapter one. First we need tools to test the connection from the client side. In the readme file. If you scroll to the very bottom you'll see the tools used to build this application section. And the last two tools are web extensions that can be used for this purpose. For Chrome and brave there is Advanced [[WebSocket]] Client for Firefox the Websocket Weasel. Because I'm on Brave. I'll be showing Advanced Websocket Client. Let's switch to the browser. In my browser, I'm going to load Advanced Websocket Clients. The interface is pretty self-explanatory. There's a URL where we can enter the host the web socket server is listening on. There is a request window where we can answer the payload that we want to send to the websocket. A message log allows us to see everything that went to the socket and came from it. And a response window where we can examine the payloads. Before we can use this extension we need to configure our server to accept messages and send replies, let's code. This is the WsHandler class we defined earlier. It's within the packages, server, source, app directory. We previously had a on socket connected function which is triggered when a new socket connects to the server. This is our opportunity to start listening to messages coming from that socket.
>
> **[1:33](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=93)** Let's do so. The message carries a data packet that we can explore. Let's create a on socket message handler that will take the socket as well as this data.
>
> **[1:55](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=115)** It's of type raw data and raw data from the Ws package. What should we do when the message arrives? Well, how about we console log it, and we send a reply. Now the message comes in as raw data before we can use it. Let's parse it into a [[JSON]] object. We'll turn into a string and then parse it to JSON. Then we can console log it and we can craft the reply, lets say message received. Now we cannot just send an object into the socket. So we'll have to wrap it with JSON stringify. Now it's ready to be sent. The other event that we want to listen to the socket for is the disconnection of the socket. So we know when a client is no longer connected. This is the close event, And this event gets a code and a reason. On socket closed let's create the handler for this particular event.
>
> **[3:23](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=203)** And in this case we'll just log that the socket is closed.
>
> **[3:35](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=215)** And the reason if available. Sometimes no reason is given. Now our server is ready to this two messages log the message received and send a reply. The reply will always say message received at this point. Let's lint the code to see whether we have any errors.
>
> **[4:02](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/receive-your-first-websocket-connection?u=76281980&t=242)** One warning request defined but never used that's okay we can get back to that later. Otherwise it looks good. So we can run in the code now. Once we notice that the server is listening, here it is on port 8080. We can go back to the browser and using the web extension connects to the right port 8080. The status has changed to opened which means we have a live connection. If you look in the server logs it says new websocket connection. Let's try to send a message through. The shortcut to sending a message here is Ctrl + Enter. So once I do that, we can see the message logged in the server and in the message log it's in orange but a reply was received message received. So we know that the round trip works. Now let's test whether the server will notice when we disconnect. So back to the extension, let's close this session. The status has changed to closed and we can see that the server has logged the closure. So everything looks great. We now established the connection with two-way messaging and we're rolling.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WebSocket]] (6), [[JSON]] (3)
> **Env Vars:** json (3), url (1)
> **Ports:** port 8080 (2)
> **Cross-References:** go back to (1)
> **Documentation:** the readme (1)
> **Tools:** firefox (1)
> **UI Navigation:** switch to (1)
> **Definitions:** is a  (1)

#### [Manage multiple connected users](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=0)** - [Instructor] To manage multiple users chatting, we need to refactor our code to better separate concerns. Our connection handler is both managing connections and managing messages, so it's getting crowded. Let's add a new user manager class, dedicated to keeping track of the connected users and offering helper methods to send them messages. Within the file browser, we want to be in packages, server, src, app. And next to the ws-handler that we created earlier, we'll have a user-manager.
>
> **[0:39](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=39)** UserManager will maintain a set of sockets
>
> **[0:48](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=48)** and helper methods to manage them. So we need a method to add the socket, to remove the socket for when a user disconnects,
>
> **[1:08](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=68)** to send a socket a message. We haven't yet defined what a message will look like, so I'll just put unknown for now. Now, we cannot just send a raw object, we have to stringify it first. So I'm going to use [[JSON]].stringify on the message and then send the result. And, of course, because this is a chat, often we'll want message to be broadcasted to all users. We want all users to be aware of what is said in the chat. So we need a sendToAll. And in this case, what we want to do is iterate through all the connected sockets and test whether each socket is still live. For that, we look at its readyState and compare it to a constant of [[WebSocket]].OPEN. If it's open, that means the socket is still currently connected, and we can send it a message. But before we can send, we have to again stringify the message.
>
> **[2:23](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=143)** Here we go. So now we have all the helper methods ready to go. UserManager can then be instantiated within the ws-handler. That accepts connections. And a good place to do this is in the initialize. So let's create a new private member. And initialize it. So when a socket connects, right now we execute onSocketConnected. We'll want to add that socket to the set. Likewise when a socket disconnects, right now we execute onSocketClosed, we want to remove the socket from the set. But for this, we need to pass the socket to onSocketClosed. So let's add it to the inputs. And pass it along. All right, and the last piece we need here is we want to send the message not from here directly but from the socket. So here where we send the reply, what we want to do instead is use the userManager. Message received, still. Let's see whether everything still works. First, we'll lint our code. We have the same warning about request being unused in the onSocketConnected.
>
> **[3:58](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/manage-multiple-connected-users?u=76281980&t=238)** That's fine, and then we run our code. Server is listening on port 8080. So let's go to the browser and start the extension. Here we have the extension. Let's set it side by side with our IDE. And first, open the connection. It stills works. Down here we have new websocket connection! Send a message. Is anybody home? And we get the reply. Message received, still. So everything is working. But with better separation of concerns, our code will be easier to enhance and to test. We're well positioned now to manage multiple clients connected in parallel. Fantastic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WebSocket]] (2), [[JSON]] (1)
> **Code Identifiers:** onsocketconnected (2), onsocketclosed (2), sendtoall (1), readystate (1), usermanager (1)
> **Env Vars:** json (1), open (1), ide (1)
> **UI Navigation:** go to (1), open the (1)
> **Warnings:** be aware (1), warning (1)
> **Ports:** port 8080 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Standardize WebSocket message shape](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=0)** - [Instructor] The [[WebSocket]] protocol is quite flexible about what sorts of payloads can be sent. Strings, ArrayBuffers, even files can be sent over [[WebSocket|WebSockets]]. To reduce errors, it's important to establish a standard type for the messages your application expects to receive. So let's define this interface. Navigate to the types library so that we can a new type. Besides the user type, which we define at the beginning of the course, let's create a new file here, ws message. And from this file, we will export the type ws message. Now, before we define what it should look like, let's remember to export this type from the top level index.ts file of the library. Remember that at it's this index.ts file located on the packages, types, source that exposes everything the library wants other packages or other applications to see. So if you want something visible from outside, you need to export it from here. Here we go. Now, going back to our message, there are actually a couple of message types that will send the application. At least two. A chat message is the message that the user sends back to the server. And this contains just the text to be broadcasted. But there's also a chat relay message, or maybe chat broadcast message. This is what this server will send everybody
>
> **[1:34](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=94)** to let everyone know what was just added to the chat. Of course, also have content, but it must have the author of the original message. To easily route different messages to different logic paths, it makes sense to have an event key that helps us distinguish one from the other. And now we know the different types of messages we have, and then maybe more in the future, but this is a good start. So ws message is of type chat relay message, or chat message. And we've defined what each of these look like. With that out of the way, we can go back to our service to make use of these new strong types. In ws handler, the method that runs when we get a socket message parses data, we now know that the payload should be of type ws message. And the user manager method that sends data should also expect to receive a ws message. In fact, so should the sendToAll method. Notice that ws message is imported from our library. Already, we see a problem here. The ship we're sending does not adhere to ws message. So let's fix that. Let's make it a regular chat message. Hey, still here.
>
> **[3:10](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=190)** Okay. I think that's great. Let's link the code to try to catch any more errors. I'll start with the library. Looks good. And then the server. The server gives us a warning. Same warning as before. We have this request incoming message that we're not using, but I'm okay with that. All right. So let's start the server. It's listening on port 8080. So we can go to the Client and try to send messages back and forth to make sure everything still works. In Advanced WebSocket Client, let's connect. And we'll alter this message to adhere to the new shape we've defined. Event is of type chat. Payload has contents.
>
> **[4:07](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/standardize-websocket-message-shape?u=76281980&t=247)** And let's send that. Perfect. We see the reply is still here. If we go to the server, we'll see the website connection was detected. The message, anybody home, was received. Everything still works. Great. Strong typing is a powerful tool at your disposal to reduce errors and ease collaboration between applications. It may not seem like it, but we've just taken a big step forward in hardening the product.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WebSocket]] (2), [[WebSocket|Websockets]] (1)
> **CLI Commands:** make (3)
> **UI Navigation:** go to (2), navigate to (1)
> **File Paths:** index.ts (2)
> **Definitions:** is a  (2)
> **Warnings:** warning (2)
> **Code Identifiers:** sendtoall (1)
> **Ports:** port 8080 (1)

#### [Broadcast new chat message to all](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/broadcast-new-chat-message-to-all?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/broadcast-new-chat-message-to-all?u=76281980&t=0)** - [Instructor] Our server is now set up to receive messages, but how will other users know when there has been an update? Remember that the beauty of [[WebSocket|WebSockets]] is that both sides of the connection can transmit and listen. So just as our server is listening for new messages, all connected clients are also listening. It's up to us to notify them when a new message arrives. It's time to broadcast. Navigate to the server package. Within the ws handler file, we previously coded a onSocketMessage function. This runs when a new message arrives from the Client. Instead of responding with a generic message, what we want to do is broadcast the message that was received to everyone connected. Well, thankfully, when we built the userManager, we added a sendToAll function. This function will iterate over every socket and send it the data. So all we should need to do from the onSocketMessage function is to call the sendToAll of the userManager, and send it the message we received. Let's start the server and figure out whether this worked. The server started successfully. So let's move on to the browser and use the extension to test the connection. Here I have one instance of my Chrome extension. I'm going to actually run two of these instances
>
> **[1:36](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/broadcast-new-chat-message-to-all?u=76281980&t=96)** so we can see messages going back and forth. So let me duplicate this tab, and then set them side by side. We'll then connect to the [[WebSocket]] in both cases. So for the first time, we have two connected sockets. Now let's send message. The first message would say, Hi there. And right way we can see on the right hand side that the message was received, Hi there. There it is. If we send a response, it was received on the left side. Who are you? So what we have basically is a two-way WebSocket communication. We basically have a chat. How awesome is that?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WebSocket]] (2), [[WebSocket|Websockets]] (1)
> **Code Identifiers:** onsocketmessage (2), usermanager (2), sendtoall (2)
> **UI Navigation:** navigate to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Notify all when a new user connects](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-notify-all-when-a-new-user-connects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-notify-all-when-a-new-user-connects?u=76281980&t=0)** - [Instructor] To keep our users aware of changes in the chat room, it would be nice to notify them whenever someone new arrives. in this challenge, I want you to add this feature. Basically, when a new connection is made, everyone else should get a message saying so. Bonus points if you can figure out how to to collect the new user's name in the connection attempt and how to include that name in the new user's notification. Take a look at the WS handle we've been working on. When a socket connects, we execute onSocketConnected. And here we have two inputs. So far, we haven't made any use of the incoming message, but this is information that comes from the client about the client, and so it may provide a good place to start investigating how to implement this feature. This challenge should take you about 20 to 40 minutes to implement. If you get stuck, check out my solution video, where I walk through my own implementation. Good luck.

> [!info]- Semantic Content
>
> **Code Identifiers:** onsocketconnected (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Notify all when a user connects](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=0)** (energetic music)
>
> **[0:05](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=5)** - [Instructor] So, how did you do, were you able to send new user notifications? How about the user's name? Were you able to collect that at connection time? Let's work through it together. Remember that in my IDE you can always see where I am within the project by looking at the file path near the top of the window. Here, I'm in the packages server source app ws handler file. But before we work on this file, let's go back to our library file, specifically, the message type that we defined earlier. We had two types of messages, chat message and chat relay message. Let's add assistant notice as a new type of message. And all it needs to hold is the string notice. We'll make it part of the union type. That is ws message. And this will allow us to send it just as any other chat message could be sent. Let's go back to ws handler. I hinted at the fact that this incoming message that comes when the socket is connected, may be helpful to us. In fact, my idea is to use the URL that's part of the request to allow the user to specify URL parameters, specifically the user's name. For instance, the user connects by calling local host 8080 but nothing stops us from taking a username after that. So to parse this request,
>
> **[1:38](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=98)** let's send it to the user manager. The user manager's add function is in the user manager file. And right now all it takes is a web socket. Let's also accept the request. Now from the request, we can parse the search parameters by first getting the full URL. And this is a concatenation of the host which you can find from the headers and the URL path which is just requested URL. So this full URL looks something like so. To convert it to a URL object that we can actually parse, we called the new URL method. And finally, we can extract the name from the search params of the new URL. And we want the name param. Once we have the name, it's pretty easy to build the user of type user from our library. User has a name and an ID. Now we don't have any database here. So I'm just going to use mock IDs. We'll start at ID one and we'll increment it each time. So this is the user. Once we have the user, we can generate the notice that should go out to everyone. Event is system notice
>
> **[3:09](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=189)** and the contents would just be name has joined the chat
>
> **[3:17](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=197)** and then we can emit this to everybody connected. Now this should be sufficient but we're going to need this user again. if we want to do anything else with that user later, such as giving notice of disconnection or treat the user in any kind of special way. So in addition to this, I wanted to change how we store the connected sockets instead of just storing a set. I think it makes more sense to store a map of the web socket and it's connected user. So that down here on line 25, instead of just adding the socket, we're going to set in the map, the socket and the user. This forces us to make one small adjustment near the bottom. The send to all method, remember, just cycled through all the sockets in the set, but if you call it for each on a map, what you get are the values of the map. So this socket is actually a user, not a socket. If we want to cycle through the keys of the map, we will do this dot socket dot keys and iterate through that. First, that's converted to an array so we can iterate through it. And everything else is pretty much the same as before because the keys of the sockets are actually the sockets themselves. There is a problem here, I just noticed. Let's go take a look at what that is. Nope. It went away.
>
> **[4:50](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-notify-all-when-a-user-connects?u=76281980&t=290)** So I guess it's fine. Let's link our code just to be sure before we run it because we've also made a change to the library, I would also want to link the library. That looks fine. Then finally let's run it and test. So what we want to see happen is when a new user arrives, any connected user gets a notice. The server started and is listening. So let's go to the client. Here I have the client side by side, they both closed. On the left side, I have a client named Jane. On the right, I have a client named Ryan. Let's open the first connection. The connection opened just fine. Now, as we open Ryan's connection, we should see Jane get a new message. So let's try that. And here we go. We have a system notice event that says Ryan has joined the chat. So it works. With this notification, any UI would have all the info it needs to alert the users of new arrivals.

> [!info]- Semantic Content
>
> **Env Vars:** url (9), ide (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (3)
> **Cross-References:** go back to (2)
> **UI Navigation:** go to (1), open the (1)
> **Analogies:** for instance (1), such as (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (energetic music) (1)


### 3. Build the UI with Angular

[↑ Back to Table of Contents](#table-of-contents)

#### [A quick look at Angular](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/a-quick-look-at-angular?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/a-quick-look-at-angular?u=76281980&t=0)** - [Instructor] We spent the last chapter building up the backend service. Now it's time to build up the UI. For our use case we'll use the [[Angular]] Framework. A [[JavaScript]] framework that makes front end easy to build. From the README file, if you scroll down to the tools used to build this application section, Angular framework is one of these. Let's head to the website. On Angular's webpage, I just want to point out a couple of the features of the library. Angular is built around components, where a component is a single unit of view that the user interact with. The component is made up of three portions. There's the component class, where the logic drives the component. There's a component template, which can be an [[HTML]] file or an HTML template within the component file itself. And there's a component style, a [[SaaS]] or CSS file where you style the template. We'll take a look at these in a minute. Something else that is important to know about Angular is how the template interacts with the logic. Here are a couple of examples. In the top section, we have a paragraph. And you'll notice the bracket notation, which is a way to assign to a property within the template. So id equals say hello id means, take the ID property of this paragraph and assigned to it the say hello ID property, that's in the components class. Likewise, style.color here,
>
> **[1:35](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/a-quick-look-at-angular?u=76281980&t=95)** means take the style and the color property of that style for this paragraph and assign to it the font color property from within the component class. Besides the bracket notation, the only other notation you need to be aware of in Angular for this course, is the parenthesis notation. Parentheses capture events. So in the second snippet, click equals same message, means when a click event is admitted by this button, capture that and execute the same message method in the component template. So with this building blocks in place, let's switch back to our code. Let's navigate to the Angular application, which we called web app. Within the source slash app folder, We have all of the files we're going to be interacting with. Here you see that we have several app component files. We have app components ts, where the logic will reside. We have app components HTML, where the template will reside. And finally, we have app component SCSS, where the styling will reside. These work together to build the component. The component itself, it's part of the app module, where app module lists all the dependencies Angular needs to know about, to display your component. You can see within app module here that we have some imports. Import browser module, import browser animation module.
>
> **[3:09](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/a-quick-look-at-angular?u=76281980&t=189)** As we add more UI blocks to our component, we need to import more modules from the Angular materials library. The modules we import, allow your component to use more and more features.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (9), [[HTML]] (3), [[JavaScript]] (1), [[SaaS]] (1)
> **Exercise Files:** template (7)
> **Env Vars:** html (3), readme (1), css (1), scss (1)
> **UI Navigation:** scroll down (1), navigate to (1)
> **Definitions:** is a  (2)
> **Documentation:** the readme (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Set up the chat component](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=0)** - [Instructor] It's time to start building our app component. We'll use mock data, and establish initial styling. Let's navigate to the webapp. I'm going to open up all three files for the app component. The ts file, the [[HTML]] file, and the styling file, because we need to edit all three. Let's start with the ts file. Let's define the two main objects that we need to display the component. The messages are of type ChatRelayMessage, they come from the server. The current user is just a user, and that comes from our [[WebSocket]]/types library. [[Angular]] exposes an execution hook called OnInIt that we can implements to make sure that angular will run code that we want when it loads up this components. OnInIt comes from angular/core. Let's implement the execution hook. We'll set some mock data at the start. So for messages, let's say we have a first message from Jane with id: 1, who says,
>
> **[1:12](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=72)** "Hi, this is Jane." And we'll have another message from say, Henry, with id: 2. And Henry replies with, "Hello, Jane I'm Henry." Finally, let's load up the currentUser with some mock data as well, we'll call him Xavier, and give him id: 3. Okay, now that it's set, let's go style the component a little bit. We'll delete the previous stylings we had here, and style the host selector. Host selector will style the entire component. So, what I'd like to do is use a grid display, we use CSS grid, and let's organize our template areas. We'll have at the top header and login-state, or maybe connection-state. This is where the user would be able to connect, or maybe even disconnect from the websocket. Then we'll have the user-list on the sidebar with the chat-area where the messages will be displayed in the middle, and let's extend the user-list all the way to the bottom, because the chat could have a lot of users. But at the bottom, for the main area, we will have the chat-input where the user can enter next chat message. With that out of the way, let's establish the width of the columns. I'll use one fraction and three fraction, so that the left section is only 1/3rd as wide as the main section, and we'll add a gap between the different areas, so they don't bump into each other.
>
> **[2:45](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=165)** The last thing I like to do is define a style and a class for each of these template areas, so that we can quickly identify them in the template. So we'll have, login-state, which will have a grid-area of login-state. And repeat that for all of the different areas. So this is one for header, user-list, chat-area, chat-input.
>
> **[3:14](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=194)** What happens with CSS grid is that when in the template we assign a class to an element. The corresponding grid-area we can define here will let the browser know where to place that element in the view. So, any element that has class chat-input, for instance, we're saying assign it to the grid-area of chat-input. So within the view, it's going to be in the main section in the middle of the page. Add some spacing here. With that basic CSS styling out of the way, we can then move on to the component template. And what we'll do in the template is start displaying the mock data that we established in the component class. First, there is the user object itself. So, let's put this in a div called login-state, so that it would be placed in the right position. And in here, we're going to place the currentUser. This double bracket notation is a way to tell angular to take that field and display it in this section. The vertical bar is called a pipe, and this tells angular how to display it. We're telling angular, "Take the currentUser, and pass it through the [[JSON]] pipe, because it's an object." Next thing I'd like to do is display the messages. And for this, we need to loop through them. Angular offers a directive called ngFor, which will allow us to loop through messages.
>
> **[4:49](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/set-up-the-chat-component?u=76281980&t=289)** And this will be the class chat-area. We define this class as having the position where the message will be displayed in the style. So how do we display the message? Well, for now, same as we display the user, we're just going to say messages, and pass it through the json pipe. So that it looks okay, I'm actually going to wrap it inside a preformatted tag, like so. So let's start the application and see what it looks like. First thing I'd like to watch is lint it first. This allows to see quickly whether we've made a syntactic error or import error. That looks good, and then we start the application. The angular application will run on port 4200. So, once it gets started here, we'll move on to the browser, and load that web page. Let's go to the browser. In the browser, let's navigate to localhost 4200 and load the page. And we can see that everything seems to work fine. We have the currentUser at the top in div.login.state, there's space on the left. In fact, here, we can see the entire grid-area. The space in the middle contains the chat messages, the mock messages that we've identified. So everything seems to be working great. We're ready to build on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (8), [[WebSocket]] (2), [[JSON]] (2), [[HTML]] (1)
> **Exercise Files:** template (6)
> **Code Identifiers:** currentuser (4), ngfor (1)
> **Env Vars:** css (3)
> **UI Navigation:** navigate to (2), go to (1)
> **Definitions:** is a  (1), is called (1)
> **CLI Commands:** make (1)
> **Ports:** port 4200 (1)

#### [Prototype the chat UI](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=0)** - [Instructor] It's finally time to flash out the UI. We need two basic elements, a Chat Panel where we'll display old messages and append new ones, and an input area where the user will be able to draft and send new messages. Let's move to the code. So because I like to watch what happens as I make change to the application, I like running the application in the browser side by side with the IDE as I code. So in this case, let's start the application, and while that runs, let's take a look at the tool we're going to use to build the UI component. If you scroll down in the readme file all the way to tools used to build this application, one of the tools is the [[Angular]] Material UI Library. Let's head over to its website. The material library comes with components that can be used to quickly bootstrap a webpage. We are particularly interested in the card component. A simple card is a great way to display anything that needs to pop against the background, and I think it would make a good option for our chat message, so I'm going to copy this. And we're also going to use the form input field, but we'll get to that in a minute. So when using an Angular Material components pay attention to the API tab up here, it'll let you know what you need to import from Angular Material. In our case, it's actually the MatCardModule, so that's what I'll start with.
>
> **[1:32](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=92)** The card module has to be imported into our app module. From the file browser, let's open up all of the files we need to edit. app module, definitely the app template, the app styling. Let's start with the app module. Here we're going to import the two modules we need for the day; the MatCardModule. We'll also need the MatInputModule. With this out of the way, we can move on the template and add the MatCard. Let me go copy the code. On the webpage for the Angular Material Library, all examples have codes right next to them, so in this case, I'm just going to copy the MatCard code, and put it in our template. Now all of the messages to be displayed as cards, so let's put the mat-card in here, but we actually want the cards to be iterated over rather than the apparent dev, So I'm going to move the ngFor down to apply to the mat-card. For each message we need a card. Well, what should the card have? Well, let's have the author of the message. Remember that this message comes from the app component where we define the mark message data, and we also need the contents of the message, and perhaps we can have a horizontal rule between the two. Let's see what it looks like. Let's go to the browser. In the browser I'm going to load up our application,
>
> **[3:06](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=186)** which would be running by now, and we have our messages here, but there's still a lot of junk we need to take care of, so let's set this side by side and make edits to the template. Now that we have the mat-card, we no longer need this message through [[JSON]]. The cards are also too wide, they don't really pop against the background, so let's go to the app component CSS, and within the chat area which is where the cards are displayed, add some styling. Let's make their max width 400 pixels, and add a bottom margin, maybe 15 pixels, let's see what that looks like. I'm saving the file, and that looks better. I actually, don't like the horizontal rule between the two, so let's go remove that. Okay, that's not better. The other thing we want to add is the input field which should go below the chat messages. In the CSS, we define this area of the grid as chat input, and we give it a right here, so this is what we need to have in the template. Now let's take a look at the angular material form input to see the proper selector. Let's look at the examples. I'm interested in the outline form field, so let's go look at the code for that one and copy that. We'll remove the things we don't need
>
> **[4:43](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/prototype-the-chat-ui?u=76281980&t=283)** such as hint and label. I only really care about the placeholder. Let's ask the user, "What's on your mind?" Let's save the file and see what it looks like. Okay, it appears here, but it's a little too short, so let's go style it a little bit differently, so this would be in the chat-input area. Here we go. Let's make it display it as block, and have a max width of 430 pixels, looks about right. That's a little small, let's make it 432 pixels. And the reason 432 pixels works is that if we look at the browser in greater detail, and we inspect the card, the card has 432 pixels in width, and so by setting the input to be 432 pixels wide, I know that they will align. Okay, at this point we have the cards and we have the input. Things are coming along just fine.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (5), [[JSON]] (1)
> **CLI Commands:** make (6)
> **Env Vars:** css (2), ide (1), api (1), json (1)
> **Exercise Files:** template (5)
> **UI Navigation:** go to (2), scroll down (1)
> **Code Identifiers:** ngfor (1)
> **Documentation:** the readme (1)
> **Definitions:** is a  (1)

#### [Add the connection UI](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=0)** - One area of our template we still need to flesh out is the connection UI. There should be an input box and a connect button showing when the user is not yet connected but we should also show the user information when the user already is connected. So let's build that. First, let's start the web app. And while this pulls up, let's go grab the button UI that we need from the [[Angular]] material library. My browser let's find out the material library's page and the component I'm interested in is the button. We'll just take a basic, how about a erase button that might be fun. The API we need to import is the mat-button module. So let's actually start there. And remember that our our imports go into our app module. So if I now link it to app module I can add Mat button module to our import array. And then finally, within the login stick up here we can have the connection button as well as the input. So we'll have a simple Mat input filled as we had before. Instead of outline here, let's make it standard because I don't want the outline going around the box and the hints might be what's your name? We also need a button. And for that, let's take a look at the library. Under examples, we had seen a erase button somewhere.
>
> **[1:36](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=96)** Let's go grab that and we'll make this a connect. Let's take a look at what it looks like in the browser. I'm going to put the browser and the IG side by side now so we can call changes live. Okay, here we are. It looks all right, but I'd like it to extend the width of this main panel. So let's go to the CSS and under the login state section which is where we have this input we're going to change this display to be of type flex and justify content be center. Let's see where that works. That's not as good is it let's make a change here. I don't like that so much. I'm going to use align items center that might look better. Okay. Let's save. Okay. They are aligned but let's add some margin between the two. So we're going to say the immediate children will have a margin of say 16 pixels. Okay. I like that a lot more. So now we have this connects button. Let's make it so that when we click the connect button something actually happens. In angular you can bind to template events using the parenthesis notation.
>
> **[3:09](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=189)** So in this button, all I need to do is say one to one clicks, execute a method. So let's say the connects method. We then need to go define this method in the app component. So that's sort of the app component, the TS file. And we're going to need a new connect method. So what should this take? We needed to have the username the user entered in the input box. The simplest way to do this is to have a template variable on the input. Let's call it username because we can then pass it into the connect function here. And what it will actually give us is the... What's the matter here. Oh, it's complaining because the connect method within the component does not expect any input but we can fix that. So the username here actually gives us a handle on the inputs element itself. So this would be username input which is an [[HTML]] input element and let's just console log it connecting as user name input dot value. Once we save this, we can test whether it works. So let's open up the console and enter name. It was Xavier I think. If I connect, here we go connecting as Xavier. So this part is looking good.
>
> **[4:42](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/add-the-connection-ui?u=76281980&t=282)** The next thing we need to do is when the user is connected this should just show the user's name. So how do we implement that? Well, let's go back to the app components HTML. What we actually need is a switch clause. When the user is defined show one thing when the user is not defined, show something else. So let's have it here. angular gives us a switch case called NG switch. And this would be is current user undefined. If the current user is undefined then we want to show the [[Forms]]. So all of these we've just coded would go inside a container. Here we go. And this would be switch case true user is undefined. Otherwise, if the user is defined we'll have a different NG container. And here we're just going to show the user objects. All right. So let's have this running and take a look. How do we see? Here We have the user object because the user was defined. But if we go back to the app component and not set the current user to anything and reload we should see that again, the connection to time shows up. So everything seems we wired up correctly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (3), [[HTML]] (2), [[Forms]] (1)
> **CLI Commands:** make (4), find (1)
> **Env Vars:** html (2), api (1), css (1)
> **Exercise Files:** template (3)
> **Cross-References:** go back to (2)
> **Definitions:** is an  (1), is a  (1)
> **UI Navigation:** go to (1)
> **Speakers:** - one (1)


### 4. Turn On WebSockets in the UI

[↑ Back to Table of Contents](#table-of-contents)

#### [Simulate authentication on new connections](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980&t=0)** - [Instructor] Our back end is ready to receive connections and our UI is scaffolded with mock data. In this chapter, we'll add the connective tissue between the two and draw up our application. When the user logs in by connecting to the [[WebSocket]], the server should return a user object containing the id of the user. This simulates authentication in a production application. Let's modify our backend to add a new login event, and to return the user on new connections. Navigate to the types library so we can add the new type of event to the message types. In the ws message file, we already had ChatMessage, ChatRelayMessage and SystemNotice messages. Let's add the LoginMessage and LoginMessage would just have event of type login and a payload that's the user. Now let's add this to the union of WsMessage types. With that out of the way, we can go to the server and emit the new LoginMessage event when a new connection is established. Within ws handler, let's have a quick reminder of our logic flow. On line 18 on socket connected is called when a new sock connection is established. Right now we just add that socket to userManager. A userManager would make sense to emit the new loginMessage event. So I'm here within the userManager file
>
> **[1:36](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980&t=96)** and let's take a look at the add method. The add method creates the user and adds it to the set of saved users. This is where we ought to emit it as well. So let's create the new loginMessage and it'll have user and the event will be login. This is what we want to send to the user who just logged in. The user who just logged in is available through the socket that was passed in. So all we have to do is to say socket.send the loginMessage.
>
> **[2:19](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/simulate-authentication-on-new-connections?u=76281980&t=139)** Now, we cannot send the message itself without first [[JSON]] stratifying it. An object can't be sent as is. So what we'll do is wrap this in a JSON.stringify. Let's see whether this works. We'll use a browser extension to connect to the server and see whether this login event is emitted. Let's switch the browser. In my browser, I'm going to start the events website at clients and let's clear the old messages. Let's log in as Ryan and see whether any messages returned. Look at that, I forgot to start the server. Let's go back and start the server that might help. Back in the IDE, let's open the terminal and start the server. Now that the server is listening, we'll try again. Back to the browser and let's open the connection again. Perfect. We can see the response came back as the login message payload. Event login, name Ryan, id one. So it works. The backend is now simulating authentication flow. The next time we connect from the client we can display info by the user that came from the server instead of relying on mock data. It's another big step forward.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (2), [[WebSocket]] (1)
> **Code Identifiers:** usermanager (3), loginmessage (3)
> **UI Navigation:** open the (2), navigate to (1), go to (1)
> **Env Vars:** json (2), ide (1)
> **CLI Commands:** make (1)
> **Tools:** terminal (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Connect the web app to the socket](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=0)** - [Instructor] In [[Angular]], the class responsible for interfacing with backend services is called a provider. In our application, this is the class that will connect to the [[WebSocket]] and return the user object to the component. Let's build it. Let's go the webapp project and inside of the app directory, we're going to add a new class called app.service. This is the provider that will connect to the websocket. We have to add the injectable decorative function above it to allow Angular to inject it in our components. We also need to go to the app.module and add it to the providers array. To inject a service in a component, we need to add it as a member within the constructor. Now, let's focus for a minute on AppService. AppService needs to be able to connect to the websocket. So let's add a connect function that takes the user's name. AppService also has to be able to return the user upon authentication. Now, a clean way to do this is to add a user stream into which we're going to push the user once we know his or her identity. So this stream will emit user. And it starts with undefined. To connect to the websocket, we're going to use the rxjs library's webSocket function. From the readme file, if you scroll down to the tools used to build this application section,
>
> **[1:34](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=94)** you'll see rxjs webSocket as one of these tools and a link to its website. For this application, we use a small subset of its functionality that I'll explain as I use them. Let's first import webSocket and create one. Now, the webSocket requires us to have a URL. So actually, instead of creating it here because we don't yet know the name, which is part of the URL, it's best to create it inside of the connect function. So what I'll do is to say in here this.socket is webSocket to whom we pass the URL.
>
> **[2:18](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=138)** And up here, all we want to do is let's see what type it is. WebSocketSubjectConfig. All we want to do is declare the type. I'm pretty sure it's WebSocketSubject and the type of message that comes out of it is WsSubject. Okay, great. So connect creates the socket but to actually connect to the socket, we have to call subscribe on it. So let's do that. And what subscribe takes is a callback that will be executed with messages coming from the socket. So let's first create this callback. We call onMessageFromServer. And the message is of type WsMessage. This comes from our shared library of types. And this is what subscribe should call. So what should we do when a message arrives? Well, we have different message types. If you navigate to the shared types, src, lib folder, inside of ws-messages, you'll see the different types of messages we've cleared on line three. ChatRelay, ChatMessage, SystemNotice. We're interested in LoginMessage. To know which message we're receiving, we look at the event key because that's what differentiates them. So within AppService, when a message arrives, we want to get the event. And depending on the event, we'll change our behavior. The first event we want to handle is login. Now, when a login event arrives, we know that the user is the payload.
>
> **[3:51](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=231)** So all we have to do is push that into the user stream. We call next to push something into a stream and we're going to push in message.user. We also want a break so that there's no follow through to the next case in the switch case. Something else that might be useful for debugging is to console.log the message that comes from the server. There we go. With that in place, what we need to do is go back to the app.component and consume this stream to update the local user. Previously we had hard coded a user. This time what we want to do is listen to the stream and when a user comes out, set the current user to equal the user who came out of the stream. With that in place, let's test everything. First, we're going to lint the application to make sure there's no problem. That looks good. Let me terminate whatever's running in the other tab. And then we're going to start the application. Now, we also need to start the backend since we're doing a real socket connection this time. The backend's listening and so is the front end. Let's switch to the browser and try connection. In the browser, let's expand to show the console
>
> **[5:27](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=327)** and go to localhost:4200. The application loads successfully. Let's try to connect as Ryan. Something is wrong, the connection did not occur. Oh, I know, we forgot to actually wire in the connect button to the AppServices connect method. Let's go back to the code. Within the app.component, we have this connect method on line 28. All it does is log. What we should do is capture the userName
>
> **[6:04](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/connect-the-web-app-to-the-socket?u=76281980&t=364)** and use that to connect. Okay, let's give this another try after the application recompiles. Let's go back to the browser. Okay, the application has reloaded. Let's try to connect as Ryan. There we go, that's what I expected. So from the server, we received the message, event: login, user: Ryan and we can see that in the view, we now have name: Ryan, id: 1. And this comes from the template. Let's go to the template quickly. In the app template, if you recall, this was called app.component.[[HTML]]. There we go. By the way, remember that you can always look near the top of my window to see where I am in the file tree. What we have at the top of the template is a switch case. If currentUser is undefined, whenever that's true, we show a form. Whenever it's false, meaning the currentUser is set, when set to the currentUser. And that's why in the browser, we see the currentUser want to connect. Everything works great.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WebSocket]] (9), [[Angular]] (2), [[HTML]] (1)
> **Code Identifiers:** websocket (5), currentuser (4), onmessagefromserver (1), username (1)
> **UI Navigation:** go to (3), scroll down (1), navigate to (1), switch to (1)
> **Exercise Files:** template (4)
> **Env Vars:** url (3)
> **Cross-References:** go back to (3)
> **Definitions:** is a  (2), is called (1)
> **File Paths:** app.component.html (1)

#### [Start chatting](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=0)** - [Instructor] It's finally time to get chat messages flying back and forth. We need to update every part of the stack to make this work. But once we're done we'll be able to see multiple users having a live chat over [[WebSocket]]. Let's start with the backend service and work our way all the way to the UI template to affect this change. Buckle in. Remember, you can always look at the top of my window here to see where I am within the project. The first file we need to change is a ws handler file which is in the server package. This is the file that receives the socket message and acts upon it. Right now all we do is send it to everyone. What we want to do instead is create a chat relay message that we send to everyone rather than the original message because the original message does not contain the author but the relay does. So let's use a switch statement here and take a look at the payloads event type. If it is a chat event, then we need to relay the message. Well, how do we do that? Well, let's go to the user manager because user manager handles users and replies. We're going to add a new relay chat method. That takes the socket event came from as well as the original chat message. From here we can construct the relay message. Event is always chat relay.
>
> **[1:36](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=96)** Contents matches the original chat messages contents. And we need author. Well, how do we find the author? The author is the user who sent this information. Remember that user manager has a map called sockets? That binds each web socket to a user. So all we have to do here is to say this.sockets get the user at the from socket. This will give us the user. Once we have the relay message, we can send it to all. This will ensure that whenever a chat comes in we send the relay message which includes the chat's original author to everyone connected. That's user manager. Well ws handler can then leverage this new functionality when a chat event comes in to just relay it. And remember to break. So that should be it for the backend. Everything is wired up here. We move up the stack to the front end and this time the app service, which interacts with the backend. So let's look up app service. And this is in the web app source app folder. There are two things we need to do here. First, we need to be able to handle relay message. When a message come from a server we are aware of login message. The next case we handle here is chat relay. When a relay message arrives, what should we do? Well, we need to send it to the browser. More specifically, to the template.
>
> **[3:10](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=190)** So let's have a new chat message stream here where we can push the relay messages. And when a new one arrives we just push it into the stream. And break. So that's the first thing this app service needs to be able to do. But the other thing it needs to be able to do is to send a message to the backend. So let's add a method called send. This is what will be triggered whenever the user types in a new message. And all it needs are the contents to send to the backend. To send a message into the socket is pretty easy. We just call socket.next and we pass in the data. Well let's first construct the payload. Event is always chat and content is whatever was passed to us. So we can send this to the WebSocket. And here, everything is wired up. We then move up this stack to the app component. The app component consumes the app service. So let's look it up. The app component class needs two things as well. First it needs the ability to add new messages to the array. Right now we have this mock array. Instead, what we need to do is subscribe to the new chat message stream and when a new message arrives, just add it to the array. What we're really doing here is creating a new array
>
> **[4:47](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=287)** because [[Angular]] will only notice that something has changed if you create the new array. So that's the first thing. The next thing this needs to be able to do is to actually send the message to the backend. So let's add send and it'll be very similar to the connect. What we pass here is the input element so that we can read its value. In this case, we'll call it chat input. And we'll say this.appService.send(chatInput.value). And then finally, we go one more level up the stack to the app component template, where we have the form field where the user will input whatever is on her mind. We need this to trigger this send. The way we do it is very similar to what we did with the input for connection where we took the username as a template variable and we passed it into a method. Here let's call this chatInput and we'll listen to the Enter key. Angular makes this really easy with this parenthesis notation. Listen to the keyup enter event. And when that occurs, we call send and we pass in the chat input. Let's see with everything is wired correctly. First thing I want to do is make sure to lint both the web app and the server because we made so many changes. And the server, [[npm]] run server:lint. Let's look at the result of the web app linting.
>
> **[6:20](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=380)** That worked so that we can start the web application. And let's look at these server results. That worked as well so we can start the server. Once they've both started, we'll go to the browser and try to send messages back and forth. Great, the web app has started and the server is listening. Let's go to the browser. Here in the browser I've loaded two instances of the application. Let's log in as Mike on one side and as Erin on the other and start sending messages. So Mike will say, "Hi this is Mike". And we see it pop up immediately on Erin's side. And Erin might say, "Hey Mike!" Now notice a couple of things. We are going through the backend, back and forth here. We also noticed that the messages are popping up immediately. We have the author and the content of the message. Everything works well. There's one thing I'd like to change though. I noticed that when I enter a message it does not clear this input field and that's inconvenient because the user has to delete it to send the next message. So let's go back to the code and fix that. In the app component, when we send the next thing we ought to do is to clear this input. So let's do chatInput.value equals an empty string. Let's recompile and see whether that helps us. Let's go to the browser. I have my browser side by side here once more.
>
> **[7:54](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/start-chatting?u=76281980&t=474)** Mike and let's say Ellen this time and when Mike sends a message, Ellen gets it but the inbox is cleared. Everything works great. It's definitely exciting to see the chat come to life.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WebSocket]] (2), [[Angular]] (2), [[npm]] (1)
> **CLI Commands:** make (2), find (1), npm (1)
> **Code Identifiers:** chatinput (3), appservice (1)
> **UI Navigation:** go to (4)
> **Exercise Files:** template (4)
> **Definitions:** is a  (2)
> **Analogies:** similar to (2)
> **Best Practices:** remember to (1), make sure to (1)

#### [Challenge: Show notification when user enters or leaves](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-show-notification-when-user-enters-or-leaves?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-show-notification-when-user-enters-or-leaves?u=76281980&t=1)** (upbeat intro music)
>
> **[0:05](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-show-notification-when-user-enters-or-leaves?u=76281980&t=5)** - [Narrator] Our chat works, but there are a couple of missing features that result in a poor [[User Experience (UX)|user experience]]. Suppose that Mike logged in here, and there's a friend of mine, Ella, logged on the other side. We can be chatting. And if Ella disconnects by say, closing a browser, I'll have no idea. I could still be talking. I get no notification that Ella is gone. Your next challenge is to fix this. I want you to add a notification whenever a user enters or leaves the room, so that all users in the chat room are aware of this. You may find documentation for the WS library useful. Also feel free to use one of angle materials components if a simple browser alert isn't spiffy enough for you. This challenge should take you about 20 to 40 minutes to complete. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[User Experience (UX)|User experience]] (1)
> **CLI Commands:** find (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat intro music) (1)

#### [Solution: Show notification when user enters or leaves](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=0)** (bright epic music)
>
> **[0:05](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=5)** - [INSTRUCTOR] So were you able to implement the notifications? In an earlier chapter, we added the system notice message type that we can leverage here. We also previously built handlers for new connections and new disconnection from the sockets that we can also use here. So a lot of the pieces are already in place. Let's go through my implementation. We'll start with the backend. So let's get into the server package and look at ws_handler.
>
> **[0:38](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=38)** When we receive a new socket connection we call user manager.ad. Let's go see what it does. User manager.ad creates a system notice and sends it to everyone. So this is already working to do what we want. Let's take a look at the socket disconnection. When a socket is closed, we called userManager.remove. Let's see what it does. userManager.remove simply removes the socket from the map. So this is where we ought to emit the notice for disconnection. Let's first capture the name of the disconnecting user, Where socket is the map, we get the user entry at this socket, and we capture the name of the user. Then we can create the system message. It'll be pretty similar to what we did with the user joining the chat. Let's copy that. In our case we want to say name has left the chat, and send it to all. That looks good. That's all we should do for the backend. Then we need to take a look at the frontend. Specifically, the app service. Remember that the app service is what links the frontend to the service on the backend. So the app service already exposes different streams of data for new user, a new chat message. Let's add a new one for system notices.
>
> **[2:14](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=134)** And this will be a new subject that emits the system notice type. System notice remember comes from our types library. So when do we push a new notice inside this subject? Well, when we receive a message from the server we have a new case. We had login and chat relay. Now we need case system notice. And when this occurs all we need to do is push into the stream, the next notice. And break. Everything is set here. Then we go one layer up to the app component. The app component needs a way to listen for notices and show them to the user. So let's first write a handler here on notice that will receive the notice, and do something with it. What should it do with it? Well, the simplest thing we can do with the notice is just alert the user, like so. This will pop up a box that the user has to read and dismiss. So it's pretty intrusive. A better option would be to leverage the [[Angular]] material components that we've been working with. In the readme file, if you scroll down to the tools used to build this application section, you'll see the Angular library. Let's go to its website. It has a pretty component for this use case. On the Angular Material library website, Let's go to the component section.
>
> **[3:49](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=229)** And the component I'm interested in is called snackbar. Snackbar is cool because it pops open an alert at the bottom of the screen, so it's not intrusive. Let's import it. If we look at the API it requires us to import MatSnackBar module. As all of our dependencies, this goes into our app module. Back to the project. Let's load up app module, and add the new import.
>
> **[4:26](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=266)** Finally, within the app components, we need to inject the snackbar service. It's called MatSnackBar. This is a service that can open up that notification at the bottom of the screen. So when the system notice comes in, all we have to do is execute the snackbar services open method, and passing what we want to toast. In the message, the second parameter shows another message on the snackbar, which we don't need. And the third parameter is a configuration objects. And here we're interested in duration. Let's make it 5,000 milliseconds. So when should this be triggered? While following the pattern we've established with chat message and user changes, we can also listen to the system message stream from the app service. There we go. Now that this is all wired up, lets link our code and check it out. We'll also link the server since we made some changes there.
>
> **[5:41](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=341)** The web app linted successfully. Let's start it. And the server linted successfully as well. Once both of these have started, we'll go to the browser and test our implementation. Server looks good. Web app is running. Let's go to the browser. In the browser, I've loaded the application side by side. Let's log it on one side as Mike. And as I log in on the other side, pay attention to whether snack bar appears on Mike's screen. So this is Ella. There it is. So when Ella connects, Mike gets a notification that will go away after five seconds. What if Ella disconnects? So let's close Ella's browser. And there's a notification that Mike gets. That looks great. One thing I'd like to change quickly though is how we display the current user at the top. Instead of having this ugly looking object, how about we just show Mike is logged in. Let's go to the app component and quickly make this change. Within the app template, we have the user shown with a [[JSON]] pipe. All we need to do is to just display the user's name. Let's say logged in as, and that should be it. Let's go back to the web page, and let's log in. Perfect. We have our notifications implemented
>
> **[7:15](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-notification-when-user-enters-or-leaves?u=76281980&t=435)** and everything is looking great.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (3), [[JSON]] (1)
> **UI Navigation:** go to (5), scroll down (1)
> **Code Identifiers:** usermanager (2), ws_handler (1)
> **Env Vars:** instructor (1), api (1), json (1)
> **Definitions:** is a  (2), is called (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1)
> **Documentation:** the readme (1)

#### [Challenge: Show list of connected users](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-show-list-of-connected-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-show-list-of-connected-users?u=76281980&t=1)** - Our web socket chat is almost complete. There's one crucial piece missing however. When user arrives, she has no way to know who is already in the chat room. Although she gets notifications for people coming, and leaving once she's there, there's no way to know who's in the chat. Let's fix this. In your next challenge, I'd like you to add a user's list to the view that's visible at all times when user is logged in. This is your biggest challenge yet, and it will require you to bring together, a lot of the techniques and resources, we've leveraged so far. I've done some of the fun and pre-work, let me show you. Navigate to the Web App, App folder, and look in the App components. In the App components, I've added a new member called user. That's an array of the connected users. And I fill it in with some mock data, in the NG on data handler, in the App template, the CML file, I've added a new class user list to a dev, within this dev. We use the angle of materials, Mattlist to list out all the users. Here you can see that we're iterating over users, and for each user we're printing the user's name and ID. Let's see what it looks like in the browser. Let's load the application. Here you can see the user's list on the left hand side, with our mock data.
>
> **[1:34](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/challenge-show-list-of-connected-users?u=76281980&t=94)** In your implementation, this list will only be available, once the user has actually connected to the socket, since it has to come from the back end. This challenge should take you 45 to 60 minutes. Good luck.

> [!info]- Semantic Content
>
> **Env Vars:** cml (1)
> **UI Navigation:** navigate to (1)
> **Exercise Files:** template (1)
> **Speakers:** - our (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Show list of connected users](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=5)** - [Instructor] So how did you solve the problem of the user not knowing who logged in before she arrived? Were you able to show the user's list at all times? There are few ways this can be done, but a simple one is to just add a new message type and follow the patterns we've established before. Let's head to the shared library and in the file where we defined the types of messages, add a new one. Let's call it UserListMessage. We'll make the events userList, and we'll give it a user's array. With that defined, we can start using this message in the server. The class in the server that's responsible for messaging users is user-manager. So let's go to it and take a look at where we need to make a change. User manager has an add method which is called when a user is added to the socket. And a remove method when the socket disconnects. These are the places where we need to omit the updated user list to all users. So let's add a new helper method that will do just this. Rather than call it updateUserList, let's say sendUserList to all. Much more descriptive. So first thing we need to do is to draft the message. Event is sets to userList, how do we get the users? This has to be an array of users. Well remember that this class has all the users in a map.
>
> **[1:42](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=102)** So if we want to get them, all we have to do is iterate over the values of the map. In our case, this simply means, this.sockets.values, this is not an array, it's an iterator. So turn it into an array, we wrap it in array.from, and that's that. The next thing we need to do is send this to everyone. Or the id complaints that this is not a type WsMessage. So let's go double check that we've added userListMessage to WsMessage. We didn't, so it's missing from this type which is why the idea wouldn't let me use it in that space. Okay, that should fix things. All right, everyone is happy again. So at this point we've sent the updated user list to everyone listening, but where should we call this method? What we've already determined that it should be called whenever a user is added or removed. In the add function, let's execute it after the socket has been added to the map. In the remove function, we'll execute it at the end as well after the user has been removed from the map. That's all we need to do for this step, we can then move up one level in the stack to the front end, more specifically the app service that handles connections with the back end. The app service has on message from server method which should handle the new case.
>
> **[3:18](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=198)** If a user list is sent, what should we do? Well, let's just stick to the same pattern we've already established. In this case I'm going to use a behavior subject rather than a subject that's because a behavior subject allows me to set a default value. We'll start with an empty array. And when a new list comes in, we just send the users into the stream and break. That should be it, then the app component has to consume this list, so let's go edit that. Our app component right now has a mock list of users, we will replace this with the user list. And when a new list arrives, just update the local list. This should have us covered, let's link our code and test it.
>
> **[4:21](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=261)** Web app completed successfully. So let's try to launch it. Likewise for the server. The server is ready and so is the web app, let's go to the browser. In my browser, I'm going to load two sessions of our application. Suppose the user logs in first, let's say Mike logs in first. Mike gets the user list which has Mike and no one else. On the other side, let's say Erica logs in, let's see what happens. Mike gets a notification and both Mike and Erica got the updated user list, fantastic. Supposed they chat a bit, so hi, this is Mike. Hi Mike, I'm Erica. When one of them disconnects, let's say Erica disconnects. Let's see what the Mike's user list gets updated. It does, not only does he get notification, but Erica is removed from the user list, works great. One quick thing I noticed that I want to fix here is that it's not easy to tell which posts are yours and which aren't. So from Mike's perspective, all posts look the same. Let's make Mike's own posts stand out a little bit. Let's go back to the template. So here we are in the app component. If we navigate to the template, the posts come from this mat-card. What we want to do is add a class,
>
> **[5:54](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/solution-show-list-of-connected-users?u=76281980&t=354)** if the card belongs to the current user. So let's say class.current-user will be set if message.author.id is the same as currentUser.id, and we add a question mark here, just in case current user is null or undefined we don't want to try to [[Fetch]] id against it. So current user will be added as a class to mat-card when appropriate. Then we need to go to the [[SaaS]] file to add styling for the current user class. So this is in, say mat-card there we go. So if we have current user, we're going to make the background-color beige. With that in mind, let's make sure the app recompiles, and let's go back to the browser. In the browser, let's load up again two sessions and quickly test. They both connected when Mike says, hi this is Mike. And Erica replies. We can see that for each individual, his or her post is now styled differently so it'll stand out. This is great work. With this piece of the puzzle in place, we now have a fully functional chat powered by web sockets. Congratulations on making it this far, we could spruce it up a little bit with some UI tweaks but we've done a fantastic job here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (1), [[SaaS]] (1)
> **Code Identifiers:** userlist (2), updateuserlist (1), senduserlist (1), userlistmessage (1), currentuser (1)
> **CLI Commands:** make (5)
> **UI Navigation:** go to (3), navigate to (1)
> **Cross-References:** go back to (2)
> **Exercise Files:** template (2)
> **Definitions:** is called (1), we call this (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/websocket-communications-with-node-and-angular/next-steps?u=76281980&t=0)** - [Instructor] Thanks for sticking with me through the course. I hope you had as much fun building as I did. We've come a long way from zero to having a full, stack-chat application powered by [[WebSocket]]. If what seemed like magic at the start, is now just cool but makes sense to you, I've done my job. There's so much more we could add to our chat server before we release it to the wild. Here are some of the ideas I had that I just could not fit into this course. Error handling, [[Unit Testing]], input validation, proper authentication so users don't impersonate one another, private messages, message history, such that a user who logs in can see all previous messages, or a user who loses his internet connection can see messages he missed when he comes back. If interest in this course is high, I would love to take on some of these topics in a future WebSocket course. This has been Patrick Siewe and the pleasure has been mine. Cheers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WebSocket]] (2), [[Unit Testing]] (1)
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