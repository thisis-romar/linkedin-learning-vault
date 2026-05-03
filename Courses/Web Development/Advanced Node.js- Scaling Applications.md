---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: advanced-node-js-scaling-applications
url: "https://www.linkedin.com/learning/advanced-node-js-scaling-applications"
duration_minutes: 74
duration: 1h 14m
level: Advanced
updated: 6/10/2024
learners: 112061
skills:
  - Scalability
  - Node.js
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQEaPuuqI4TOOQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568661390988?e=2147483647&amp;v=beta&amp;t=Vt79jS3fHLum9Wu404dh95269UzD_6q-fCSS-_I_XVM"
linkedin_topic: Web Development
learning_paths:
  - '[[Advance your Node.js Skills]]'
prev_courses:
  - '[[Advanced Node.js]]'
path_nav: '[{"path":"Advance your Node.js Skills","position":8,"total":8,"prev":"Advanced Node.js","next":null}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/scalability
  - skill/node-js
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Advanced%20Node.js-%20Scaling%20Applications.md)

![Advanced Node.js: Scaling Applications](https://media.licdn.com/dms/image/v2/C4E0DAQEaPuuqI4TOOQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568661390988?e=2147483647&amp;v=beta&amp;t=Vt79jS3fHLum9Wu404dh95269UzD_6q-fCSS-_I_XVM)

# Advanced Node.js: Scaling Applications

> While Node.js is great for creating small apps with minimal surface areas, it was designed to scale. In this course, learn sophisticated programming techniques that can help you scale your Node.js applications. Instructor Alex Banks goes over the scale cube, discussing the different directions in which an app can be scaled: along the x-axis, z-axis, and y-axis. He also looks at cloning, discussing

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-node-js-scaling-applications) | 1h 14m | Advanced | 112K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Scaling applications with Node.js](#scaling-applications-with-nodejs)
  - [What you should know](#what-you-should-know)
  - [Using the exercise files](#using-the-exercise-files)
- [**1. Cloning**](#1-cloning) (6 videos)
  - [The scale cube](#the-scale-cube)
  - [Scaling the x-axis](#scaling-the-x-axis)
  - [Forking processes](#forking-processes)
  - [Using a cluster module](#using-a-cluster-module)
  - [Architecting zero downtime](#architecting-zero-downtime)
  - [Working with clusters with PM2](#working-with-clusters-with-pm2)
- [**2. Database Scaling**](#2-database-scaling) (4 videos)
  - [Working with databases](#working-with-databases)
  - [Incorporating a database](#incorporating-a-database)
  - [Scaling the z-axis](#scaling-the-z-axis)
  - [Setting up horizontal partitioning](#setting-up-horizontal-partitioning)
- [**3. Microservices**](#3-microservices) (5 videos)
  - [Scaling the y-axis](#scaling-the-y-axis)
  - [Decomposing services](#decomposing-services)
  - [Service orchestration](#service-orchestration)
  - [Create an orchestration](#create-an-orchestration)
  - [Test the orchestration layer](#test-the-orchestration-layer)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Scaling applications with Node.js](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/scaling-applications-with-node-js?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/scaling-applications-with-node-js?u=76281980&t=0)** - [Alex] Hello, welcome to Advanced [[Node.js]]: Scaling Applications. I'm Alex Banks. I'm not surprised that you're here. At Node.js Development, conversations about scaling come up quite early and that's because the intent of Node.js and the goal of the Node.js Developer is to keep things small. We create small applications with small surface areas. Each node can only handle a small amount of traffic, but these small bits can be powerful. Just like everything you see in the world around you is made up of the tiniest particles, atoms, and molecules, global clouds are made up of many tiny processes. Processes that all work together to handle massive amounts of traffic and data. In this course, we're gonna learn how to break our applications and data up into even tinier bits, single instances that are scalable. We will examine the scale cube and discuss the three directions in which an application can be scaled. We're gonna start off the scaling discussion by talking about cloning, the process of forking our Node.js processes into multiple instances. We will then learn to group these instances under our main process and create clusters that never have to go down. Next we'll take a look at how data layers can be scaled. Specifically, we'll discuss how to split data between [[Databases]] using a technique called Horizontal Partitioning. Finally, we'll learn how to decompose our applications into even smaller applications, [[Microservices]]. Microservices are tiny services that are designed to only work on part of the business features. This course is designed to introduce the main techniques involved with scaling Node.js Applications. Once you have completed this course, you will understand how to scale a Node.js Application
>
> **[1:33](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/scaling-applications-with-node-js?u=76281980&t=93)** using these techniques. Node is designed to scale and scaling Node Applications is fun. I'm excited. I hope you're ready. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (7), [[Microservices]] (2), [[Databases]] (1)
> **CLI Commands:** node (10)
> **File Paths:** node.js (7)
> **Analogies:** just like (1)
> **Speakers:** - [alex] (1)

#### [What you should know](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/what-you-should-know-24004526?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/what-you-should-know-24004526?u=76281980&t=0)** - [Instructor] This course focuses on what it takes to build and scale [[Node.js]] applications. To be best prepared for this course, you may want to consider having some foundational knowledge in place. First and foremost, any Node.js class is a [[JavaScript]] class, so make sure you're familiar with the latest JavaScript syntax. Specifically, we'll use arrow functions, destructuring for objects and arrays, and we'll be using the let and const declarations. This course also assumes some knowledge of core Node.js modules like HTTP, [[npm]], and Express. It also assumes that you already have Node.js installed. If you don't already have Node.js installed, you can visit [Nodejs.org](https://Nodejs.org) and install the latest version. That's all you'll need to start building Node.js applications at scale.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (6), [[JavaScript]] (2), [[npm]] (1)
> **CLI Commands:** node (6), make (1), npm (1)
> **File Paths:** node.js (6)
> **Env Vars:** http (1), npm (1)
> **Prerequisites:** install (1), you'll need (1)
> **URLs:** [nodejs.org](https://nodejs.org) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Using the exercise files](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/using-the-exercise-files?u=76281980&t=0)** - [Instructor] We can't start scaling the applications from scratch, we need some examples and samples to scale. So this course has a set of exercise files that you can download and follow along with. This will allow you to work alongside of me with the exact same files that I'll be working on. In the exercise files folder, you'll find folders for each chapter in a corresponding subfolder for each of the videos where we'll be working on code. In each video subfolder, you'll find a start and finished folder. When the video begins, I'll start with the files in the start folder, and when the video ends, I'll end with the files found in the finished folder. Sometimes, you will find a packaged [[JSON]] in the start folder. This means that in order to run the sample, some dependencies must be installed. For these samples, simply follow along with me and run [[npm]] install to install the dependencies when I do. Throughout, I'll be using Atom as my code editor. Atom is available at [atom.io](https://atom.io). You can download and install the code editor from this website. Now, using Atom is not required. You can actually use any code editor or IDE that you can edit [[JavaScript]] files with. Well, that's all we should need for setup. Let's go ahead and begin scaling [[Node.js]] applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (1), [[npm]] (1), [[JavaScript]] (1), [[Node.js]] (1)
> **CLI Commands:** find (3), npm (1), node (1)
> **Tools:** atom (4)
> **Prerequisites:** install (3), setup (1)
> **Env Vars:** json (1), ide (1)
> **Exercise Files:** exercise files (2)
> **File Paths:** node.js (1)
> **URLs:** [atom.io](https://atom.io) (1)


### 1. Cloning

[↑ Back to Table of Contents](#table-of-contents)

#### [The scale cube](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/the-scale-cube?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/the-scale-cube?u=76281980&t=0)** - [Instructor] There are many ways to scale applications. Sometimes it helps to have a good visual guide that can accommodate all of the possibilities when it comes to scaling your application. The scale cube is a diagram that is a good tool for visually understanding all the ways in which our applications can be scaled. It was originally introduced in the book, The Art of [[Scalability]], by Martin Abbott and Michael Fisher. The bottom left corner of the cube represents the least scaled application possible, a single instance monolith. This means you have one application running in a single instance on a single computer. As we scale our applications we move closer to the top right hand corner of the scale cube. Applications on this side of the diagram could represent multi-instance applications that have been distributed into [[Microservices]] and contain partitioned database clusters. Applications that are closer to the top right hand corner of the cube should be able to handle massive amounts of traffic. The X axis of the scale cube represents cloning. This means running multiple instances of an application and splitting the traffic between those instances. The closer we are to the left side of this axis the fewer instances we have. All the way over on the left side we might only have a couple instance running on a single machine. The more we move to the right on this axis the more instances we run. We can split our application up into many instances that run across many different machines even across different data centers around the world. At a certain point the data that our application stores will run out of disc space and or memory. Or maybe the database traffic will become too great to handle with a single database.
>
> **[1:32](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/the-scale-cube?u=76281980&t=92)** The Z axis represents scaling the data capabilities of our applications. On this axis we'll split our database up into several instances that are only responsible for a part of the whole dataset. Along the Y axis we break monolithic applications up into microservices. This means dividing the application into services that are designed to focus on a single feature and work together with other services to [[Jetpack Compose|compose]] the functionality of our entire application. In this course we're gonna examine what it means to scale a [[Node.js]] application on every axis of this cube. Each chapter we will examine a different axis and demonstrate techniques for scaling along that axis. In the next chapter we'll get started by analyzing the X axis and looking at the various ways in which we can clone a Node.js application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microservices]] (2), [[Node.js]] (2), [[Scalability]] (1), [[Jetpack Compose|Compose]] (1)
> **File Paths:** node.js (2)
> **CLI Commands:** node (2)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Scaling the x-axis](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/scaling-the-x-axis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/scaling-the-x-axis?u=76281980&t=0)** - [Instructor] To scale along the x-axis means to clone your app. This means running the exact same application in another instance, and then handling the traffic between the two instances instead of one. For example, let's say you have a business or a server that provides advice to clients. As [[Microsoft Word|word]] gets out about your business, you'll be providing a lot of advice. This could lead to long lines and long wait times among your clients. How are you gonna deal with all this traffic? Well, one option is to clone your booth. That is to open more advice booths, and split the traffic between them. Each booth provides the exact same service, and they each operate independently on a part of the traffic. We just scaled our advice booth across the x-axis. We can scale our node application, even the monolith, by running separate instances of the same application and then splitting the traffic between those instances. We can scale further along the x-axis by running multiple instances of our application on multiple machines. Today, it's rather easy to scale our application by running multiple instances across multiple data centers positioned worldwide. If a particular area or region gets more traffic, you simply clone more instances in that region. In the next lesson, we'll look at how we can fork a node process into multiple instances.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **CLI Commands:** node (2)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Forking processes](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/forking-processes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/forking-processes?u=76281980&t=0)** - [Instructor] Because [[Node.js]] is single threaded, we've run into the need to scale our applications much sooner that we would if we were using another programming language. It's not a problem. This is actually a benefit of Node because we get to talk about scaling much earlier in the application lifecycle because Node applications are made to scale. Node.js is designed to clone your application and then run it using multiple instances simultaneously. This process is called forking. Let's take a look at how we can fork our advice server. So I'm looking at our exercise files within chapter one lesson three, and I'm looking at the app.js file found in the start folder. In this file, you can see that we already have some code for you. So here we have an HTTP server that's serving advice. On line four, those are the advice options. So this server's gonna randomly give you one of these options. On line 12, that's where we create the server, and we are randomly selecting the option because of line 13 where we set the random index using Math.random. Then we'll create a payload so that we can return the port, the ID of the current process, and some random advice. And then we will respond with that payload on line 21. So another thing to notice is that on line two, we are setting the port from the process.argv array. These are the arguments that are passed to this script when it starts. We can run our server by going over to the terminal and typing node app and then the port we'd like to use, 3001. So I just started an advice service running on port 3001. I can come over here to the browser. All right, and then when I hit the server using the browser, localhost:3001,
>
> **[1:34](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/forking-processes?u=76281980&t=94)** we get to see the port, the processID, and some random advice. Every time I hit refresh, we can see that the advice changes. Now this is great, but because we only have one instance of one process running, we're only gonna be able to handle so much traffic. So the solution is to fork this process. So let's go over to our files, and you'll notice that there's also an index.js file under the start folder. Let's go ahead and open that up. And what we want to do is get the fork function from the child_process module. Now just for the fun of it, I'll go ahead and create a variable called processes. And this variable will be an array. And what we're gonna do is we're gonna fork that app. And I'll go ahead and fork the app into three instances. Now if you recall, we need to send the port to the app to start it, so the fork function is very similar to the spawn function and the execute function in that it will take an array of arguments. So this first one will run on 3001. The second app will run on 3002. And this third app will run on 3003. All right, and then the next thing I'm gonna go ahead and do is console.log the number of processes that we currently have running, forked processes.length.
>
> **[2:55](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/forking-processes?u=76281980&t=175)** Processes, there we go. So now, when I run the index file, we will actually fork our application. We will clone it into three processes, each running on its own port. Let's go ahead and check it out. So I'm gonna come over here to the terminal and stop what we're currently running. And then I'm just gonna go ahead and node . because that will run the index.js file. And you can see that it says forked three processes. If I come over to the browser, we'll notice on 3001, we have an advice server running. On 3002, we also have an advice server running. And on 3003, we have an advice server running. So we've created three node instances. They each have their own memory, and they each have their own processID. So we can see that this is 7957, this is 7956, and this is 7955. They're all running the same code. This is a small example of how we can use the fork method available to us within the child_process module. Here, we took our application, our app.js file, and forked it into three separate instances that use the same code. There is another module that we can use to fork our application into a pool of processes. In the next lesson, we'll take a look at how we can create a process pool using the cluster module.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (2)
> **CLI Commands:** node (7)
> **File Paths:** node.js (2), app.js (2), index.js (2)
> **Code Identifiers:** processid (2), child_process (2)
> **Ports:** port 3001 (1), :3001 (1)
> **Cross-References:** earlier in (1), in the next (1)
> **Tools:** terminal (2)
> **Definitions:** is called (1), is a  (1)

#### [Using a cluster module](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/using-a-cluster-module?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/using-a-cluster-module?u=76281980&t=0)** - [Instructor] In [[Node.js]], a single application instance only uses one processor because Node.js is single threaded. Forking your application into multiple instances is required to take full advantage of your [[Hardware]]. A cluster is a group of node instances that all work together. A cluster is made up of worker processes, the four instances of our app, in a main process, which is the instance that spawns and controls the workers. Let's create a cluster to take advantage of every CPU that is available to us. I'm inside of the Exercise Files, inside of the folder for Chapter One, Chapter One, Lesson Four, and within the Start folder, there's a blank index.js. That's where I'm gonna be adding my code. So the first thing I'm gonna go ahead and do is take a look at the CPUs on this machine. So if I use the OS module, and then invoke the CPUs function, this will give me information about every processor that I have available on this machine. So, if we come over to our terminal and run the index by typing node dot, we can see that we have what looks to be about eight Intel processors running on this machine. So now let's go ahead and add the cluster module to our code. And the cluster module is also available inside of the node core. And what I'm gonna go ahead and do is instead of looking at the CPUs, I just wanna get the number of CPUs that we have and I can get that just by turning on a length because it returns an array. So that gives us the number of CPUs that we have. Now I can check our cluster module to find out if this is the master process.
>
> **[1:34](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/using-a-cluster-module?u=76281980&t=94)** So I'll go ahead and console.log, this is the master process and otherwise, we will have a worker process. So I'll go ahead and console.log, this is the worker process. Now if this is the master process, what we wanna do is call cluster.fork to clone this process. And in fact, if I do it three times, I will have created three processes. So let's go ahead and actually take a look at the process ID. So we'll look at the PID inside of this console log and we'll also look for the PID inside of this console log. Great, so I'm gonna go ahead and save this and come over to my terminal and clear it and then type node dot and you can see that we have four processes running. On 8003, we have this is the master process. 8004, this is the worker process. 8005, worker, 8006, worker. So this cluster allowed us to clone several processes. So what can we do with this? I'm gonna go ahead and stop this. Alright, now let's do a little bit more than just log that we have a process running. So I'm gonna come back over here and the first thing I'm gonna do is create a for loop, where i equals zero and i is less than our number of CPUs, i plus plus and we're gonna make sure we call cluster.fork for each of the CPUs that we have available to us. So this should start about nine processes. Eight worker processes and the main process.
>
> **[3:07](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/using-a-cluster-module?u=76281980&t=187)** So within the worker process, instead of just logging the process ID, why don't we serve it. So let me come actually up here to line one and import the HTTP and down here, we'll create a server. And I'm just gonna make sure that we're listening on port 3000. So, this server will get every request to go to this handler and we'll create a message. And we'll go ahead and put the process ID here. So there's the PID. And what we wanna do is log the message and respond to the request with the message. There we go. So let's go ahead and save this and then come over to the terminal and then run our application. And it looks like, in my for loop, I forgot to add a semicolon. I put a comma there, that's silly. So let's go ahead and save this and try this again so we're clear and then node dot. Maybe I should also spell cluster correctly on line eight. Alright, let's try this one more time. So we'll come over here and then clear and node dot and it says this is the master process. But, if we come over to the browser and hit localhost:3000, we can see that we're hitting the same worker process. Now, what you'll notice is is every time I hit the browser, I am hitting worker process 8016. That's because we're not getting enough traffic to really use the [[Representational State Transfer (REST)|rest]] of the processes. So from within the terminal, I'm gonna go ahead
>
> **[4:42](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/using-a-cluster-module?u=76281980&t=282)** and install an [[npm]] that will allow us to run a node test. So you can type sudo npm install loadtest -g because we want to install this package globally. So now that I have loadtest installed, what I'm gonna go ahead and do is start our site node dot, so we have our main processes running and we have eight worker processes running here. I'm gonna go ahead and hit command T to open up a new terminal tab. And from this new terminal tab, I'm gonna run a loadtest. So we'll loadtest the number 300 hits, the site, [http://localhost:3000](http://localhost:3000). So now we'll simulate some traffic and let's watch this traffic spread out. So what you'll notice is each of these workers are actually being hit. We can see the different process IDs. Remember, every time we make a web request, on line 11, we are creating a server that's gonna let us know what the worker process ID is and then we are logging that on line 13. So in the terminal, that's what we're seeing, the line 13 log, and you can notice that when we have 300 requests, we're actually spreading the load out across eight different processors and taking full advantage of our machine.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (2), [[npm]] (2), [[Hardware]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** node (10), make (3), npm (2), find (1), sudo (1)
> **Tools:** terminal (7)
> **Env Vars:** pid (3), cpu (1), http (1), npm (1)
> **Prerequisites:** install (3), required to (1)
> **File Paths:** node.js (2), index.js (1)
> **Ports:** :3000 (2), port 3000 (1)
> **URLs:** [localhost:3000](https://localhost:3000) (1), [http://localhost:3000](http://localhost:3000) (1)

#### [Architecting zero downtime](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/architecting-zero-downtime?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/architecting-zero-downtime?u=76281980&t=0)** - [Instructor] One of the advantages of running multiple processes is that your app never has to go down, it can always be available to your users, this is called zero downtime. Sometimes our apps go down, this could be due to some mysterious and obscure bug, it could be due to high traffic or sometimes we just need to update the code and restart the process, in a cluster when a single instance fails, the traffic will use the remaining worker instances, and the main process can detect worker failures and automatically restart those workers. When you need to update your app you no longer need to tell your customers that the website will be down due to maintenance. You can simply program your cluster to restart each instance with the updated code. Let's take a look at what this looks like in our sample from the last lesson. So I'm going over to the exercise files, I'm in the exercise files under chapter one, chapter one lesson five and we are taking a look at the cluster we built during the last lesson. So this is our cluster, the main process is defined in the first part of the if statement on line five, so this is the master process. Then we are gonna go head and fork an instance for each of our CPUs, and down here in the block that starts on line 10 we create a server for each of our worker instances. So I'm gonna go head and modify this code a little bit, the first thing I'm gonna do is just let us know that we have started a worker at, and we'll go ahead and put the process.pid out. Another thing that I wanna do is within the master process, so within this first if block, I wanna listen for failures. So I can do cluster.on exit, now the cluster module implements the event emitter so exit events
>
> **[1:35](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/architecting-zero-downtime?u=76281980&t=95)** will be raised when any worker process dies. The worker that has just exited will be passed back to the callback function, so we'll let our users know that a worker has just died, and we'll go head and put the process.pid so we know that this is the process. We're letting our users know what the process ID of the worker is that has just died and let's go head and let them know how many workers are remaining. And we can get that number, simply by using the cluster.workers. So cluster.workers gives us an object where each field is one of the workers, what I wanna do is use object.keys to extract an array of keys for every key within that object and I don't actually wanna work with the worker. I just want the array so I can pin on a .length and that will count the workers for us. So how many keys we have left in cluster.workers is how many workers are left. So we'll let our user know. So now we need a way for our server to die, and the easiest way we can implement for our server to die is for our user to simply kill it. So let's come down here into the worker process and into the handler that handles each request and we're gonna go head and move some things around. First I'm gonna come down to the bottom and just do a check so if the req.url is equal to /kill. So if our route is kill we're gonna go head and call process.exit, otherwise we'll go ahead and move our message to this block.
>
> **[3:10](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/architecting-zero-downtime?u=76281980&t=190)** I'm actually gonna get rid of the message for now, just actually put a console log in this block, so working on request, and then we'll go ahead and put the process.pid so we can see what process is working on the request. So if we haven't killed it we get to see what process is working on the request and then we're just gonna go head and respond with process, and again process.pid. So we'll respond with the process ID to every request but if the route is kill, then we're gonna actually call process.exit which will kill this worker and it will kill this current server. Great, oh it also looks like I misspelled console on line 13, and I also misspelled it on line 17. Alright let's go head and put the correct spelling for that in. And each worker process now, I want a way to kill the worker so in the function that handles every request, I'm just gonna delete what we have, and I'm gonna respond with something a little different. I'll just say res.end and we will go ahead and put the process.pid, so we'll go ahead and respond with the process ID. What I wanna do is I want to check the route, so if the req.url happens to be equal to /kill then we're gonna allow our users to kill this process. So when a kill request is sent, the current process will exit, now I do not recommend putting a kill route in your production server. But we wanna see our cluster on exit fire on line 11
>
> **[4:44](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/architecting-zero-downtime?u=76281980&t=284)** so we're gonna handle it this way with the sample but this effectively does allow users to kill this process, and kill this current server. So we'll also check the req.url, to see if it's the homepage so we'll just go ahead and console.log serving from process.pid and we will put that process ID out there once again. So let's go ahead and save this and come over to the terminal and run our cluster by typing node . And we can see the process ID of every worker, so each worker is a different process that has a different process ID. I can come over to the browser and browse to localhost 3000 we can see that this request was served from the process with the ID 8390, if I come over here we see that we are serving from 8390. So what happens if I come to the browser and then do /kill? So now I'm sending a kill route and now I'm being handled by 8388, so you can see that process number 8387 has died. So we only have seven remaining, how here's the cool thing, we killed one of our [[Web Servers]] but as long as I come and request localhost 3000, I'm still being handled by another worker process. This time it's 8389, but I can go ahead and kill this process too, so now what I've done is I've killed two processes and you can see that we only have six remaining. The more processes I kill, the less processes I have remaining and we can actually see that we're down to four. However, notice my site hasn't gone down. So localhost 3000 is still up because we're using the remaining instances.
>
> **[6:17](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/architecting-zero-downtime?u=76281980&t=377)** In fact, 8389 is now serving this file. So there's one other change that we wanna add to this, to truly make this zero downtime we have to actually restart our instance so I'm gonna come back over to our cluster.on exit event, and opposed to letting our user know that we only have these clusters remaining, what I'm gonna go head and do, is just fork another worker. So we'll go head and let our users know that we are starting new worker, and, so this way we will always have eight workers running. When a worker dies, we'll just go ahead and fork the process and start another worker, so let's go head and see if this works. Let's come over to our terminal, Control + C to stop the current cluster, clear to clear the terminal, node . and now we have all of our processes running. So now if I do to localhost 3000, we can see that I'm being served from 8400, if I type kill, looks like I didn't spell cluster correctly. So let's go head and spell that correctly too and then we should actually restart the cluster so let's go head and give this a shot. We will clear the terminal, write node . One more time, there's our cluster running there are eight worker processes, and I'm just going to go head and kill one of them, by sending a kill request, and now we see that worker 8409 has died, but we've started a new worker, 8418. So every time we try to kill a worker, one pops up in its place and no matter how many kill events I issue we still have our website running.
>
> **[7:51](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/architecting-zero-downtime?u=76281980&t=471)** So I can still browse localhost 3000. It never goes down, it always stays up. If we look at the logs here we can see that we've killed multiple worker processes but we've started a new one each time that worker has died, so this is pretty cool, this is called zero downtime.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Web Servers]] (1)
> **CLI Commands:** node (3), make (1)
> **Tools:** terminal (4)
> **Definitions:** is called (2), is a  (1)
> **Exercise Files:** exercise files (2)
> **Speakers:** - [instructor] (1)

#### [Working with clusters with PM2](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/working-with-clusters-with-pm2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/working-with-clusters-with-pm2?u=76281980&t=0)** - [Instructor] In the last few examples, we built our own simple cluster. In the real world, there are already many tools that we can use to help us manage clusters in production. The tool I want to look at is called PM2. PM2 is a no JS process manager. It will allow you to manage zero down time clusters in production. Let's install PM2. So, I'm in the terminal, in the exercise files, under chapter one. Chapter one, lesson six and I'm gonna go ahead and run a sudo [[npm]] install dash g PM2. And while PM2 in installing, let's go ahead and take a look at our files within the start folder. So we have a app dot js and this contains a web server that will serve advice. So this is a variation on the advice server that we used in the third lesson in this chapter. The difference with this advice server is on line 17 we're just also logging the process ID, along with the advice, and we're no longer serving the port. And then on line 22, this server is gonna run on port 3000. So this is the app that we're gonna split. And every request should give us some random advice from the options found in this array here on line two. So let's go ahead and run this using PM2. I'm gonna go ahead and clear the current screen. So I'm gonna go ahead and run that application using PM2 start app dot js dash i 3. And what this will do is run three instances of the app js and node. So we can see it's running right there. And if I actually go over to the browser and hit local host 3000, we can see that this is running. I'm getting some advice, also the process ID is changing.
>
> **[1:34](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/working-with-clusters-with-pm2?u=76281980&t=94)** It might be handled by different processes. So this is running. I can actually clear and still use this terminal. PM2 runs in the background. If I want to see the list again, I can do PM2 list and this will tell me about all of the applications that I currently have running. I can also PM2 stop app and we can see that we've stopped the app. And PM2 delete app to remove our app from PM2. So go ahead and clear this again. I want to start our app again using PM2 start app.js dash i and then negative one. So when you use dash i negative one, PM2 will actually automatically select the number of instances that it should run for your current processor. So here you can see it's running seven instances of our application. This is pretty neat. Let's go ahead and look at the application in the browser. So local host 3000 is running. So I'm gonna use that loadtest method from earlier to loadtest -n we'll go ahead and do 2000 [http://localhost:3000](http://localhost:3000) and running this will simulate 2000 requests to localhost 3000. And, as this happens, all of these requests have been spanned out across our cluster. We can actually see that by running clear and PM2 list and we can notice that we're using a little bit more of the CPU and a little bit more memory for each of our processes to handle those 2000 requests. So, something else we might want to do is check the logs. PM2 logs will show you the logs for all of the processes.
>
> **[3:10](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/working-with-clusters-with-pm2?u=76281980&t=190)** So you can see here that each number of process this is the list of the last fifteen logs that we can see. So to exit the logs, all you have to do is hit control c. And we're back into the start folder. And PM2 list to see the current applications again. Now one of the features that I like is PM2 monit. And this actually brings up a monitor. So from here I can hit command t to open a new tab. And then loadtest dash n 3000 [http://localhost:3000](http://localhost:3000). So we're gonna go ahead and simulate 3000 requests to our application using loadtest. So we can actually see logging happened in real time as we simulate this loadtest. So we can see that we're getting advice from various processes. So I'm gonna go back over here and stop the PM2 monitor. One of the features that we have with PM2 is zero down time. So if I go ahead and take a look at the list of our applications, we can see that they're all still running. Let's say I go over to the code and make a change to the application itself. Like, for instance, let's say I change the advice to only do it and don't do it. So I made a pretty major change here and I'm gonna go ahead and save that. And what I can do is called PM2 reload app and what PM2 does is it automatically starts cluster one by one and diverts the user traffic
>
> **[4:45](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/working-with-clusters-with-pm2?u=76281980&t=285)** to clusters that aren't being restarted. So what that means is right now I can actually change the application so that we're only getting advice do it or don't do it. When it comes to scaling along the Z axis, we don't have to reinvent the wheel. There are already great tools out there that we can use. Also, [[Cloud Services]] like AWS or Roku, Cloudflair, or [[Microsoft Azure|Azure]] have tools that manager clusters baked into their environments. It's important to know that sheer no JS websites at API will run in production on many instances and they never have to go down.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (1), [[Cloud Services]] (1), [[Microsoft Azure|Azure]] (1)
> **Env Vars:** pm2 (22), cpu (1), aws (1), api (1)
> **CLI Commands:** sudo (1), npm (1), node (1), make (1), aws (1)
> **Definitions:** is called (2), is a  (2)
> **Ports:** :3000 (2), port 3000 (1)
> **URLs:** [http://localhost:3000](http://localhost:3000) (2)
> **Tools:** terminal (2)
> **Prerequisites:** install (2)


### 2. Database Scaling

[↑ Back to Table of Contents](#table-of-contents)

#### [Working with databases](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/working-with-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/working-with-databases?u=76281980&t=0)** - [Instructor] When scaling [[Node.js]] applications across instances, the need for a database arises. When we have multiple instances of the same process cloned, they need to act on the same data, but the memory used by each instance is not shared. When we create our change data on a single instance using memory, that data is not automatically shared across all of your processes. The easiest way to synchronize and share data across all of your processes, is by using a database. A database provides a single access point to store data. If all of your instances communicate with the same database, then they all should have the correct data. I do not recommend building your own database. There are a lot of [[Databases]] out there that you can implement. The choices range from reliable open-source projects to large enterprise databases that have been around for decades. As a Node.js developer, it is important that you learn to use a database and start incorporating it in your projects early so that they are ready to scale. It's most likely not enough to simply install a database on the same machine that you're using to host your application. Remember, as we scale, we will be scaling across different machines. All of your instance will need to have access to up-to-date, accurate data, so it's important that you use a dedicated database service that is accessible by all of your instances. As you scale your application, you can also scale your database service and make it capable of handling more traffic and data. You can also use third party database services. These services will charge you a monthly fee based upon your traffic and data. Scaling is already baked into these services. Most services provide an easy solution to scale your database cluster or partition data. As you scale your data layer,
>
> **[1:33](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/working-with-databases?u=76281980&t=93)** your monthly service fee will increase.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (2), [[Databases]] (2)
> **CLI Commands:** node (2), make (1)
> **File Paths:** node.js (2)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Incorporating a database](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/incorporating-a-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/incorporating-a-database?u=76281980&t=0)** - [Narrator] Let's exemplify the need for a database to keep data accurate across processes. I'm under the exercise files under chapter two, lesson two. And I'm within the start folder. I already have an app. Let's go ahead and start it by running node app.js. So we can see that we're counting requests. If I come over to the browser and I navigate to locohost 3000 I can see one, two, three. Every time I make a request I see the count go up. If we come over here to the terminal, we can see that this is being handled by one process. A process with the ID of 5465 and it's just incrementing the count for each http request. So I'm gonna go ahead and stop this. And type clear just to save that for me for later. And then I'll come over to the file and check it out. So we can see that we're saving the request in memory here on line three. And on line seven we're incrementing the request and then we are responding with the request to the user as well as logging them to the console. So our app appears to work until we run several instances of it. So I'm gonna come over here to the terminal and run pm2 start app.js-i three. So now I'm running three instances of my app. And what happens is when I come over here and make a request, I see one. But if I hit refresh, I'm not getting the right number. In fact we can see this problem if we run pm2 monit, where we can see our logs. And what we'll notice is, is every time we hit refresh, it's taking a while for the number to increment. The reason is is we are running this application across three processes. And each process is saving their own request value in memory.
>
> **[1:33](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/incorporating-a-database?u=76281980&t=93)** So we're only incrementing it every once in a while. So I'm gonna go ahead and stop the pm2 monit. We're gonna pm2 stop all and pm2 delete all and clear. Okay so now I've stopped our app in pm2. So we can fix this problem by adding a database. And to exemplify this I'm gonna use the most light weight database possible. A file database called node local storage. So let's go ahead and [[npm]] install node local storage. And now that we have a database installed let's go back to our file and save the request variables in the database. So I'm gonna go ahead and import local storage. The class from our node local storage package. And instead of incrementing the requests here like this, what I'm gonna do is I'm gonna use this file database. So we'll go ahead and create an instance of it by saying const db = new local storage. And we'll save the data to the data folder. So I can go ahead and start us out with some data. I'm gonna go over to our project folder. Under the start folder. And I'm gonna create a new folder called data. And within that new folder, I'm gonna create a new file called requests. And we'll just go ahead and start the counter off at zero. So this is where we're saving the data. It's within a file within our folder. So this is a very small, light weight database based off of the browser local storage API.
>
> **[3:06](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/incorporating-a-database?u=76281980&t=186)** And it's really just to exemplify how to solve this problem. So down here instead of incrementing the requests like this, what I'm gonna go ahead and do is load that variable from the database. So we'll let the requests = db.get item. And we're getting the request item so that's what we want to call it. And then I'm gonna go ahead and save the item by saying db.set item requests. And we'll go ahead say ++ requests. There we go. So we're still gonna log in to the terminal. We're also going to respond with the request number. So let's go ahead and save our new file. And then come over to the terminal. We're gonna clear again. And then we're gonna go ahead and do pm2 start app. js-i three. And once again we have three instances running. We're also gonna run pm2 monit so we can see the logs. And then we'll come over to our browser and we'll make some requests. Now it appears that our application is working. And that's because we have a single store for all of the data. So even though all of these processes are running, they're still using a single source of truth for our request count.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (1)
> **CLI Commands:** node (4), make (3), npm (1)
> **Tools:** terminal (4)
> **File Paths:** app.js (2)
> **Env Vars:** api (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** navigate to (1)
> **Exercise Files:** exercise files (1)

#### [Scaling the z-axis](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/scaling-the-z-axis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/scaling-the-z-axis?u=76281980&t=0)** - [Instructor] As your traffic grows, you will need to scale your data layer. Consider our advice booth. Our advice customers have records that we use to track whether or not the advice is working. Since we cloned our advice booth into several booths already, they will need a place to store and look up data records. So, we'll need a records booth. Each data record takes up space. So, in this example, our records booth will require a file cabinet. So, what happens when there's lots of records to store and look up? Well, we need to split our record booths and add more file cabinets to store all of the records. Here, we split our record booths into booths that are designed to handle only a part of the overall load. One booth will handle records for customers that have names that start with the letter A through the letter K. Another booth will handle the load from L to P and a third one will handle the load from Q to Z. We just scaled the advice booth along the z-axis. The z-axis of the scale cube is about scaling your database. The technique we just deployed is called horizontal partitioning. Horizontal partitioning or sharding involves adding more database instances that are each designed to store and provide access to a part of the data. Each database is called a shard. There are many ways in which your database can be horizontally partitioned. You can horizontally partition your database by the alphabet, as we did with the advice booth. You can also partition your database by region or zone. You can partition your database by customer age, random identifiers, there are literally dozens of ways to partition your database. You have to decide upon the best solution that works for your application and your business. Don't scale your database unless you have to.
>
> **[1:33](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/scaling-the-z-axis?u=76281980&t=93)** Situations that will require you to scale your data layer are too much data. So, when you start to overflow the disc or memory space because you're saving and working with too much data. More write operations than the server can handle. So, when your database is doing a lot of work and too much work than one server can handle. When you experience slow performance and this is strange but it's actually often cheaper to host shards than one database. So, if you're hosting your own database, you'll want to use their tools and patterns for implementing horizontal partitioning. Each of a popular [[Databases]] have a built-in or associated solution to handle creating shards.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1)
> **Definitions:** is called (2)
> **Speakers:** - [instructor] (1)

#### [Setting up horizontal partitioning](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/setting-up-horizontal-partitioning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/setting-up-horizontal-partitioning?u=76281980&t=0)** - [Instructor] Let's take a look at how we can modify the node local storage database to partition data between two [[Databases]]. I'm looking at the exercise files in chapter two, chapter two lesson four and within the start folder I'm currently looking at the index. So here we're using a database module that we've created and this is a database of cats. So we'll go ahead and save the names and colors of all of these cats, so every time we call db add cat we'll be adding a new cat to the database. On line 10 were gonna read a cat named Biscuit from the database, so it should find the first cat that we've added and then on line 11 we're supposed to get an array of all of the orange cats. So it should get these last two cats here on line seven and eight and the one on line three. So we're writing to the database with add cat and then reading from it with find cats by name and find cats by color. Then finally we're just logging that information here. So let's go to the terminal and run this. Let's run an [[npm]] install to install the dependencies, specifically the node local storage database and now let's go ahead and run our app by typing node dot. So you can see here that we are returning Biscuit and we are in fact returning an array of orange cats. So something else also happened. We created the database in the data folder so if I expand the data folder we can now see that we have all of these cats saved in the database. So let's take a look the db.js file that's actually saving the data. So in the db.js file we're using our local storage database. On line three we're telling a new instance of the local storage database to save its data under the data folder.
>
> **[1:33](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/setting-up-horizontal-partitioning?u=76281980&t=93)** On line five we have a function that we can use to load cats so this will read cats from the database. On line seven we have a function that we can use to check the data to see if a cat exists. We do so by calling load cats to load all of the cats from the database in creating an array of only cat names. This happens on line eight, because we are mapping all of the cats returned by load cats and then using the array.includes method we're checking to see if the name of that cat exists. Now this is important because under our exports here our add cat function doesn't want to add any new cats if they already exist. So on line 14 we're gonna check the cats name to see if we have that cat if we don't already have that cat then we're gonna go ahead and load all of the cats on line 15, add a new cat to the array on line 16 and then save the cats on line 17. Line 21 is our function for finding cats by name. So we're just gonna load cats and then do an array.find to find the specific cat that we're looking for and then finally on line 26 we're finding cats by color. So we're just gonna load all of the cats and then filter our cats array for cats that match the current color. So this is our database. So what happens when we have so many cats that they cannot be handled by a single database or a single file. The answer is to create shards and horizontally partition our cat data. So we're gonna make this change here in the db file because we don't want to change the way the users use the database, we just want to change the way the data is stored in the database. That means that our index.js file won't change it's just the database file that will handle the partitioning. So let's go ahead and add these changes.
>
> **[3:07](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/setting-up-horizontal-partitioning?u=76281980&t=187)** The first thing that we're gonna need to do is create a dbA and create a dbB. So in my data A I'm gonna save it in the database called A through M. So all cats that names begins with the letter A through M will be saved in that partition and dbB will be M through Z. So now I've created two database instances. What we really need is a sharding function or a function that will tell us which database to use. So I'll add which db and we'll take in the name of the cat and what we're gonna do is check the name. So we'll use a regular expression to check the name to see if it starts with A through M or also starts with lowercase A through M. So if the name matches A through M then what we're gonna do is return dbA, otherwise we'll return dbB. So there we go, so which db is gonna return one of the two local storage databases that we created simply by checking the name to see if the first letter of the name falls under the letters A through M. So now on line nine the only modification that I'm gonna do to load cats is I'm gonna take in the db. So the db that we should use to load cats from will be passed to this as an argument and we will load the cats item from that database. So I'll also have to modify my has cats function. So we want to know which database to check to see if we have a cat. So we're gonna use the cats name for that, because if the cats name falls under A through M we're gonna check dbA, otherwise we're gonna check dbB.
>
> **[4:41](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/setting-up-horizontal-partitioning?u=76281980&t=281)** So we're gonna send the appropriate database to the load cats function and we're gonna execute which db and we will go ahead and send this the cats name. So the cats name will come in from has cat, we'll send it to which db, which will return either dbA or dbB depending upon the cats name. Then the cats from that database will be loaded and then checked to see if that cat exists. So now we just have to make some changes down here to our methods. So the first thing we need to do is we just need to make sure we're loading cats from the correct database. So we're gonna come in here within this if statement and just add a db, let db equal which db and we will pass the new cat that name value. So that will select the appropriate db and then we'll use that database to load the cats where the new cats should be added. So this is based off of their name. Now I'm gonna come in to find cats by name and again we just have to specify which db. So I'm gonna go ahead and say let db equal which db and we will add the name there and then we will load the cats from that database. So find cats by color actually has to use both shards, right. So we have to find all of the cats regardless of their name by color, so that's fine. What we're gonna go ahead and do here is return and we're gonna ahead and use an array with the spread operator and we'll use the load cats function and what we're gonna do is load all of the cats from dbA and we're gonna filter them. So we'll go through each of the cats and we'll make sure that the cats color
>
> **[6:15](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/setting-up-horizontal-partitioning?u=76281980&t=375)** matches the color that's sent to this function. Then I'm gonna actually copy this line. So I'm gonna actually spread all of the values from dbB in here as well. So what we're doing is we're returning a single array. That array is created with the spread operator, which is gonna spread all of the values of our cats dbA and dbB into the array once they've been filtered based on the cat color. So let's go ahead and save this and now we have a new db file. So I'm gonna come out to my terminal and I'm gonna run the application by typing node dot. So we can see that we're getting this exact same output. We're able to find the cat named Biscuit and we're also able to find all of the orange cats. But let's go ahead and take a look at our data. What we'll notice is our data has been partitioned between two databases. So data A through M is storing all of the cats that names begin with A through M. So that's Biscuit, Jungle, Fancy Feast, and Bread. Data M through Z is saving the names of all of the cats if their names fall between M and Z. So what's neat about this to the user it didn't matter. I actually interfaced with the database the exact same way, but the database is handling the partitioning on the backend which becomes transparent in the index file. So this is a simple sample that was designed to demonstrate horizontal partitioning or sharding. When in production I highly recommend using a real database. Every popular database has a way to partition the data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (3), [[npm]] (1)
> **CLI Commands:** cat (21), find (10), node (4), make (4), npm (1)
> **Code Identifiers:** dbb (7), dba (6)
> **Definitions:** is a  (3), means that (1)
> **File Paths:** db.js (2), index.js (1)
> **Tools:** terminal (2)
> **UI Navigation:** go to (1), select the (1)
> **Prerequisites:** install (2)


### 3. Microservices

[↑ Back to Table of Contents](#table-of-contents)

#### [Scaling the y-axis](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/scaling-the-y-axis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/scaling-the-y-axis?u=76281980&t=0)** - [Instructor] The last axis of the scale cube to cover is the y axis. Scaling along this axis means decomposing your app into [[Microservices]]. Consider our advice booth, remember, we're kinda good at advice so this booth is gonna be very popular, it has a lot of traffic. It's our job to handle all of this traffic efficiently and decrease the wait times for our clients. One way to do this is to create multiple advice booths. In this scenario, each booth specializes in providing advice on a specific topic. One booth is dedicated to finance advice, another booth is dedicated to love advice, and the third booth is dedicated to [[Wellness]] advice. The traffic splits itself based upon its needs. But, who are we kidding, the love advice booth is the most popular booth. Since this particular service is receiving more traffic, we can scale it along the x axis by cloning more love advice booths. We can clone as many as we need to handle the traffic. We just scaled the advice booth along the y axis and split it up into booths that are designed to handle a specific feature. The monolithic application handles all of its features in one app, a single code base, all running in the same process. Here, we have an example of a monolith, a ticketing app. This application allows customers to find shows and purchase tickets for those shows. Features can be divided into shows, a catalog of upcoming plays and concerts, theaters, information about where the shows take place, and how many people can attend, search for searching shows and theaters, checkout for purchasing tickets and customers for your users. Instead of running all of these features in the same service using the same code base,
>
> **[1:34](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/scaling-the-y-axis?u=76281980&t=94)** we can divide the functionality of our application up into smaller applications that are each designed to handle only specific features. These smaller services are called microservices. They are independent applications that are designed to work together. They run independently, launch independently, and scale independently. If a particular service is receiving more traffic, we can scale that and only that service. For instance, if the checkout process is receiving the most traffic, we can clone that into multiple instances. Microservices don't only allow us to scale applications, they allow us to scale engineering teams as well. As your company grows, you will inevitably hire more engineers. Each engineer may have a specific area of expertise. For instance, you have front end engineers, back end engineers, database administrators, and system runtime engineers. Your team and your application will eventually grow to a size where everyone working on the same monolithic application becomes very difficult. Microservices allow us to scale our teams as well. Each service is a small, independent application. So each service can be hosted and managed by a small independent team. Each team gets its share of specialized engineers and they will all work together to build, deploy, host, and manage a specific service. Some services can even be handled by third parties. Auth0 is a service that you can use to manage users and authorization. Stripe is a payment service, that can handle processing payment transactions. This means that your engineers and your team can focus on the services that are specific to your business. There are many other third party services
>
> **[3:06](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/scaling-the-y-axis?u=76281980&t=186)** that you can consider incorporating in your applications. There's everything from geo mapping, to messaging, [[Continuous Integration (CI)|continuous integration]], database services. In this chapter, we're gonna examine how we can decompose our applications into services. We'll also take a look at some of the challenges that we will face when moving to microservice architectures.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microservices]] (4), [[Wellness]] (1), [[Continuous Integration (CI)|Continuous integration]] (1)
> **Definitions:** is a  (3), means that (1)
> **Analogies:** for instance (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Decomposing services](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/decomposing-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/decomposing-services?u=76281980&t=0)** - [Instructor] Let's take a look at how we can take a large API built with Express and break it down into smaller services that each focus on specific features. I'm in the terminal in the exercise files under chapter three, chapter three lesson two, and this is the start folder, within this folder, we're gonna find a file called the ticket-system.js. Inside of this file is the world's smallest monolith. It's an Express API that handles reservations and reserving seats for shows with two different data points. So I'm gonna go into the start folder and run an [[npm]] install just to install Express and the other dependencies needed for the ticket system. And then we'll go ahead and start it with pm2. So I'll do a pm2 start ticket-system.js -i 3.
>
> **[0:45](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/decomposing-services?u=76281980&t=45)** So we'll run it on a little three-instant cluster. And then I'm gonna go ahead and make a request for the ticket system using curl. So we'll do curl [http://localhost:3000](http://localhost:3000) and we will notice that we are getting some [[JSON]] data back from the ticket system. So we have two different data types here. Specifically, we have shows, which is an array, and reservations, what's contains all of our reservations. So let's go over to the file and check it out. So here we have the ticket-system.js. Now, the entire Express application for handling both shows and tickets live within this file. And you can see here on line six, we're using our node LocalStorage database, and within the data folder we have some reservations. So this is that object of reservations that was being returned, and we also have some shows. So this is a list of the available shows. You can see that we have a rock concert, a Shakespeare play, and a monster truck rally. Now, the monster truck rally is sold out, so we have 500 tickets reserved, and there's a house size of 500. We still have tickets available for both the Shakespeare play and the rock concert. So our reservation data set just basically saves an array of who has those tickets, so each key is the show ID, and then there's an array of who has the tickets and how many tickets they have. So these are our monster truck rally tickets, which are sold out here. So what we want to do is we actually want to split this into two services, one service to focus on shows, and another service to focus on reservations. So the first thing I'm gonna do is come in here and split the data, [[Microservices]] can operate and should operate their own [[Databases]]. So I'm gonna go ahead and add a new folder for data-shows.
>
> **[2:20](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/decomposing-services?u=76281980&t=140)** And I'm gonna add another new folder for data-reservations. So I'm gonna take these JSON files from the data folder. I'll take the reservations file and move it into the data reservations folder, and I'll take the shows file and move it into the data shows folder. After that, I can simply delete the data folder. So now we have two databases, one for handling the shows type and one for handling the reservations type. The next thing that we're gonna need are two services. So instead of a ticket-system.js, I'm gonna go ahead and do a new file called show-service. No, we'll just call it show.js. And I'll do another new file called reservations.js. So we're gonna take the code from the ticket system and split it into both of these files. So I'm just gonna take everything and copy it, put it on my clipboard, so I'm selecting all with Command + A and copying with Command + C. But we're just basically copying this entire file. And we're gonna go into the show.js first and paste the entire file. So what I'm gonna do to accomplish this is simply make some changes to this file, I'm gonna strip out anything that has to do with reservations, so the first thing we're gonna do is use the data-shows database. And I'm also gonna delete these two functions for saving reservations and loading reservations, 'cause we're only concerned with shows. Now, of the Express app, the routes that have to do with shows are releasing seats, so if there's reserve seats for a show that's canceled, we can release those seats, and holding seats, which would reserve seats for a show.
>
> **[3:54](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/decomposing-services?u=76281980&t=234)** The route for cancel and reserving tickets, they have to do with reservations. Also, this get route here for line 98 also has to do with getting reservations, so I'm gonna select all of these lines. So from line 101 to line 55 and delete them. We don't need that functionality within our show service. We do want to be able to get an individual show, and on our main route we should only return the shows. So I'm gonna get rid of the reservations on line 63, and we are just going to return the shows. So I'll go ahead and save this. Oh, the last thing I want to do is, we are gonna start this service on 3001. So on this last line here I'll change the port to 3001, and we'll let us know that this is just the show service. So the show service is a smaller, scaled-back, independent Express app that's designed to handle shows. So we have to do the same thing with the reservation service, so I'm gonna come into the ticket system, I'm gonna copy everything. And I'm gonna go into the reservation system and paste it. And this time, I'm gonna do the opposite. So on line six, we're gonna do data-reservations. We're gonna delete the functions for loading shows, 'cause we only care about reservations from here. And we're gonna delete the routes that have to do with shows, so release seats, I'm gonna delete from line 15 to line 33. And then again, I'm gonna delete this put route for holding seats, from line 16 to 36. And cancel has to do with reservations, so we'll keep that route. Reserving tickets has to do with reservations, so we'll keep this post route. And getting reservations for a show has to do with reservations, so we'll keep that get route.
>
> **[5:28](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/decomposing-services?u=76281980&t=328)** But the show ID, we'll get rid of this get route from line 62 to line 67. And when we actually get the main route on this API, we don't want to have any information about the shows. It only has access to information about reservations, so we will only return the reservations. And I'll make sure that it says reservations returned. That reminds me that I have to go into the show service and go to the bottom of this get route, and also say that just shows have been returned. So the show service is gonna return shows, and the reservations service is gonna return reservations. The last thing we have to do to this file is, change the port to 3002 and notify our users that the reservations service is running on port 3002. So there we go, we just split the ticket system into two separate services. Let's go ahead and test them out. So I'm gonna come over here to the browser and I will clear everything. I'm gonna remove my other service, so I'll run pm2 stop all as well as pm2 delete all to get rid of the ticket system. Then we're gonna run a clear, and now, let's go ahead and start up our services. So let's do a pm2 start show.js. Now, the show service, we probably are gonna have some more traffic with the show service simply because anyone can look up shows, not everyone's gonna make reservations. So I'll go ahead and run this one on four instances. And then I'll go ahead and do the pm2 start reservations.js. This one we only need to run on two instances. Not everybody's gonna be making reservations.
>
> **[7:01](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/decomposing-services?u=76281980&t=421)** So there's our little cluster, and now our cluster actually contains, for the overall app, two separate services. So let's test out both services. I'm gonna go ahead and type a clear, and then we'll use curl to hit localhost:3001, where our show service is running. And we can see that we're getting shows, and then I'll go ahead and type a clear and do curl to hit [http://localhost:3002](http://localhost:3002). And we can see that those are our reservations, so we're getting an object return here as opposed to that array of shows. So now, in order to do anything, I have to operate independently with each service. So now, in order to hold seats for the rock concert, I'm gonna send another HTTP request with curl. The request is gonna be a put request to the route localhost:3001, where our show service is running, and we're gonna hit that hold-seats route. And we also need to send some data along with this, so we need the count of the seats we're gonna hold, I'll say three, and the show ID, I have that on the clipboard, gonna paste that there. And that's the show ID for the rock concert. So when I send this put request, we can see that we have reserved seats for the rock concert and we've added three seats. So if I actually want to check this out, I can clear this and do a curl request for HTTP. So I'll send a request to localhost:3001, slash the ID of the rock concert, so we'll look up just that show. And when I run this, it looks like I cannot get. So I'm gonna come over to the show service,
>
> **[8:35](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/decomposing-services?u=76281980&t=515)** that's the one that we're looking at to debug this problem. So the route is show/ID, but because this is the show service, I'm just gonna actually make the route the ID, because that's the only data set that we're dealing with here. So I'm gonna ahead and save this. Now, because I saved this, I have to reload with pm2 all of my instances. So I'm gonna do pm2 reload all. And we will get a zero downtime restart. And now, I'm gonna go ahead and, pressing the up arrow, look for my curl request, there it is. So localhost:3001, show ID, and we see that we now have 13 seats reserved for the rock concert. So that's good, we've broken everything up into two services and both services work. Now that we have two separate services running, we'll need to orchestrate the services to complete the reservation process. Let's take a look at what it means to orchestrate services.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (2), [[Databases]] (2), [[npm]] (1), [[Microservices]] (1)
> **CLI Commands:** curl (7), make (5), find (1), npm (1), node (1)
> **File Paths:** ticket-system.js (4), show.js (3), reservations.js (2)
> **Ports:** :3001 (4), :3000 (1), port 3002 (1), :3002 (1)
> **Env Vars:** api (3), json (2), http (2)
> **URLs:** [localhost:3001](https://localhost:3001) (4), [http://localhost:3000](http://localhost:3000) (1), [http://localhost:3002](http://localhost:3002) (1)
> **Definitions:** is a  (2), is an  (1)
> **Prerequisites:** install (2)

#### [Service orchestration](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/service-orchestration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/service-orchestration?u=76281980&t=0)** - [Instructor] When we decompose our applications into [[Microservices]], we have to consider how they will work together. Sometimes a single action performed by a client will need to work across several services to complete that action. Consider the checkout process. Theaters have limited space, so when a user purchases a ticket, their seat needs to be reserved. If the show is sold out, then the user should not be able to purchase any tickets for that show. Before a user can purchase a ticket, they need to make sure that the show has seats available, that functionality is found in the show service. If there are seats, then they need to checkout and purchase a ticket with the checkout process. Once the ticket is purchase, the show service will then need to be updated, it will need to reserve the seats for that customer for a specific show. Sometimes we place this orchestration requirement on the client itself, this means that in front-end applications or mobile applications, or admin portals that they need to know how to work with each service and make sure that they are checking the shows for seats before proceeding to the checkout on their own. But if we want to be nice to our clients, we should provide a single checkout process that can be evoked and handle the orchestration details on the back-end. One possible solution is API Orchestration, this means that we would provide a single API that can be used to interact with all of the clients and orchestrate the microservices that are required to perform an action. In this example, any client can simply send a checkout request to the API and the API will handle the details with the checkout and show service. Another orchestration technique is to incorporate a messaging layer, you can think of a messaging layer
>
> **[1:33](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/service-orchestration?u=76281980&t=93)** as being like a back door to your service. Customers come in through the front door, the API and the goods that are purchased from other businesses are delivered in the back door. A messaging layer is typically a TCP application that can be used to communicate with other microservices. In this example, customers can checkout with the checkout service and the checkout service will update that action on the messaging layer, which will in turn reserve the seats for the show. The details of checking the show service for available seats and reserving them are all handled on the back-end via a middleware to middleware communication. Sometimes a microservice may briefly go down or become unavailable, a single service failure may not be a show stopper for the checkout process, consider a situation where a customer wants to purchase tickets, but the seats cannot be reserved because the show service is down. Well instead of stopping the transaction, checkout service could sell the tickets and reserve the seats when the show service becomes available. Your messaging layer could queue up the reservations and when the show service becomes available, you can operate on the message queue and reserve all of the seats that needed to be reserved while the service was down. These are just a couple of techniques that are available to you when it's time to orchestrate your microservices. In the next couple of lessons we will look at some code samples to see how we can orchestrate our microservices using API layers and messaging layers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microservices]] (5)
> **Env Vars:** api (6), tcp (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the next (1)
> **Definitions:** means that (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Create an orchestration](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/create-an-orchestration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/create-an-orchestration?u=76281980&t=0)** - [Instructor] Let's take a look at how we can create an API orchestration layer. To orchestrate the process of making a reservation, so far we have two separate [[Microservices]]. One for handling shows and another for handling reservations inside of the exercise files, within the start folder under chapter three, chapter three lesson four and looking at the show service we know that in order to make a reservation we have to make sure that the show has available seats and then we need to end a put request to this service to hold those seats. We also need to interact with the reservation service. The reservation service itself saves the name on each reservation as well as their count of tickets. If I take a look at this reservation service, reservations are being made through post request. So by sending a post request to the home route, we are actually making the reservation. We don't have any information within this function about the show service because the reservation service doesn't really care about the show service. All it needs to make a reservation is the show ID. So we're gonna create a third application, this application is going to be an API orchestration layer and we actually already got started doing it. If you open up API.js you will see the foundation for an Express API, we're just gonna make some changes to this file to make it work. So if we scroll to the top of the file, let's first discuss what we have. On lines one through four, we have the packages that we're gonna need to use. That includes express, bodyParser, cors and node [[Fetch]]. The next couple of lines are little helper functions that we can use to send the HTTP request to either the show or reservation service. On line six we have a get all shows function.
>
> **[1:33](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/create-an-orchestration?u=76281980&t=93)** It will send a HTTP request to localhost 3001 where the show service is running and give us a list of shows. On line 10 we can also get an individual show by invoking the getShow function and sending an ID. It will send a HTTP request to 3001 and use the ID to select the individual show from that service. We're gonna need to be able to hold seats so again using localhost 3001, the show service, we're gonna send a put request using fetch and we'll send the show ID and the count along with that put request to hold the seats from the show service, and then finally we're gonna need to make a reservation. Making a reservation entails sending a post-request to localhost 3002 where the reservation service is running and sending it the name, count, and show ID. So this is a completely separate service now and this API will actually orchestrate making a reservation with multiple services. So within this API the first thing we need to do is scroll all the way to the bottom, one benefit of an orchestration API is security, we can only expose the parts of the underlying services that we want clients to consume. The ticket orchestration API only returns a list of shows, the registration list is private. Everyone can look up the shows and the number of tickets that are remaining on each show but we only want administrators handling the reservation information. So this API only needs to expose the shows, not the reservation. So I'm gonna come down here on line 77 and I'm gonna console.log and we will log the fact that we are requesting shows from the show service and down here we'll go head and get the shows.
>
> **[3:10](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/create-an-orchestration?u=76281980&t=190)** Simply by invoking getAllShows. Now remember getAllShows returns a promise, so I'm using the Async and await in order to wait for that promise to resolve to the shows and then I'm gonna go head and respond with some [[JSON]] just the list of shows. So now our API will actually get the information from the show service and return the list of available shows for the public to consume. Now we need to orchestrate the reservations, when a customer makes a reservation we need to first look up the show and see if there are seats available. If there are seats available, we need to hold those seats with the show service and make an official reservation with the reservation service. So up here, on line 36, when we send a post request to our API with reserve, we are invoking this function. So we're gonna make sure that you've sent a count in the request body, and a name for the reservation. But before we can decide whether there's a show, we have to look it up. So we're gonna look that up using the show service, so come down here to line 51, and the first thing we wanna do is take your count and parse it, so we're gonna take the string from req.body.count and parse it into an integer and we're making sure that we have that variable there on line 40. The next thing we're gonna do is look up the show, so we need to use the show service for this. So we're gonna use this getShow function here on line 10, it returns our fetch promise so long as we send it the ID of the show that we wanna get. It should resolve to the JSON data for that show. So let's go ahead and do that.
>
> **[4:42](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/create-an-orchestration?u=76281980&t=282)** I'm gonna go ahead and say that the show itself is equal to await, 'cause getShow returns a promise. So we have to wait for it to asynchronously resolve, but we'll send it the show ID that is actually being sent to this post request. So that should look up the show, next down here on line 56, we're saying hey if we don't have a show we couldn't find the show with the show ID you sent us, so we're gonna go head and stop making a reservation here and return an error. But on line 61 if we do have a show, we're gonna take the houseSize and subtract the number of tickets that are currently reserved and that should give us the remaining seats. So if we have seats available on line 63, we're checking the remaining seats to see if it's less than the count of tickets that we want to reserve. If it's not we're gonna let our users know in an error that they can't reserve the number of seats they're trying to reserve because there's only so many remaining. So now we still need to orchestrate the other two services, we need to hold the seats with the show service, so I'm gonna go head and console.log, holding count seats for req.body.name
>
> **[5:49](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/create-an-orchestration?u=76281980&t=349)** so we know exactly whose making the reservation and I will await our holdSeats so this is the function from above all we need to do is send it the req.body.showID and the count and it will hold those seats for us. And once the seats have been held I also need to console.log the fact that we are making the reservation and now I can make the reservation, I will capture the reservation that is returned from the reservation service by await, makeReservation req.body.name, count, req.body.showID.
>
> **[6:31](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/create-an-orchestration?u=76281980&t=391)** So by sending these three fields we actually send the request to make the reservation and we should see that reservation get returned and that completes our API layer, so I'm gonna go ahead and save our API and in the next video we'll go head and test our new service.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (3), [[JSON]] (2), [[Microservices]] (1)
> **Env Vars:** api (13), http (3), json (2)
> **CLI Commands:** make (10), node (1), find (1)
> **Code Identifiers:** getshow (3), getallshows (2), showid (2), bodyparser (1), housesize (1)
> **File Paths:** api.js (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** select the (1)
> **Exercise Files:** exercise files (1)

#### [Test the orchestration layer](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/test-the-orchestration-layer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/test-the-orchestration-layer?u=76281980&t=0)** - [Instructor] So let's go ahead and start up our new set of [[Microservices]]. So the first thing I wanna do is make sure that I get the dependencies for this sample that we have here within our exercise files, under the start folder for chapter three, chapter three, lesson two. So I'm gonna run [[npm]] install, just to make sure we get all of our dependencies. And now I can start these services. So I'll run pm2 start show.js and we'll run this on two instances and then I'll run pm2 start reservations.js and I will also run that on two instances. And now we have a third service, so we're gonna pm2 start app.js and we'll also run that one on two instances. And it looks like I can't start the pm2 app.jss api.js, so pm2 start api.js and we'll also run that on two instances. There we go. So I'll clear out this clutter and then pm2 list, just so we can see our instances running. So now our slew of microservices includes reservations, shows, and an api orchestration layer. So what I wanna do is I'm gonna go over to another terminal window, and I'm just gonna monitor this service by running pm2 monit. And I have it set up in a separate terminal window because it's gonna tie up this terminal window. But we wanna be able to see the global logs as we test. So I'm gonna come over to here and the first thing we're gonna do is we wanna get a list of shows, but now all of our client interactions should go through our orchestration api. So in order to get a list of the available shows and information on tickets available, I need to send a curl request to [http://localhost:3000](http://localhost:3000).
>
> **[1:40](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/test-the-orchestration-layer?u=76281980&t=100)** And in doing so, you can see that I'm receiving just the list of shows. So this little [[JSON]] blob, is in an array, it has all of the shows that I need. So you see that we're able to get that information. Let's go over to the monitor and see what happens. So here, the request starts with the api. So you can see that we have an api requesting shows from the show service and then the show service is actually returning the shows to the api, which then returns them to the user and that's the blob of shows that we see here. So the next thing that we wanna do is try to reserve tickets. Let's reserve tickets for this rock concert. So it's the first ID value that we see here, so I'm gonna go ahead and copy this from the json blob and then I'm gonna curl http:// so again, we're working with the same orchestration layer. All of our client requests should now go through local host 3000 and we're gonna send a post request to local host 3000 reserve. And we need to send some data. So the data is gonna be name, who's reserving the tickets, we'll go ahead and say Eve's reserving these tickets this time and we'll also send the count. Let's go ahead and reserve five tickets and the show ID. So I still have that rock concert ID on the clipboard, I'm gonna go ahead and add that there. And let's see if we make this reservation. So we get a success back, we've reserved five tickets under Eve for the show. So the other thing that's neat about this, is if we go over to the monitor, we can see that the show service has delivered the show, rock concert. So we've actually made a request to see if we can see those tickets first, from the show service. So now that we do have tickets available
>
> **[3:12](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/test-the-orchestration-layer?u=76281980&t=192)** with the rock concert, we can see that the api service is holding five seats for Eve and the api service is making the reservation for Eve. If I come over here and now I do another curl, I'm gonna just press up on my keyboard until I find curl local hose 3000, you can see that the rock concert now has 15 seats reserved, as opposed to 10. So the show service is actually reserving those seats but Eve also has a reservation. So that's an example of how we can use another service, an api orchestration layer, to orchestrate complex events that traverse multiple microservices.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microservices]] (3), [[JSON]] (2), [[npm]] (1)
> **CLI Commands:** curl (4), make (3), npm (1), find (1)
> **File Paths:** api.js (2), show.js (1), reservations.js (1), app.js (1)
> **Tools:** terminal (3)
> **Prerequisites:** install (1), set up (1)
> **URLs:** [http://localhost:3000](http://localhost:3000) (1)
> **Ports:** :3000 (1)
> **Env Vars:** npm (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/next-steps?u=76281980&t=0)** - [Instructor] Thank you for joining me for Advanced [[Node.js]]. I hope you can use this knowledge to understand the main techniques that are involved when scaling Node.js applications. As you can see, scaling is conceptual. Cloning, horizontal partitioning, and [[Microservices]] are all architectural patterns that apply to computer science at large, not just Node.js. This course contained code examples of these concepts, but in production there is no need to reinvent the wheel. I'd like to recommend some tools and services to look into when scaling your production applications. First, you'll want to find a good database. The course [[Databases for Node.js Developers]] by Daniel Khan is a great place to start. This course introduces [[MongoDB]], [[Redis]], and [[MySQL]]. Once you've found your favorite database you can dive into that database more deeply with other [[LinkedIn]] courses on that topic. In this course I briefly introduce the architecture for message queues. But, I didn't show a [[JavaScript]] sample because they're really involved. If you're gonna be working with microservice architectures you'll want to know more about messaging queues. I would recommend looking into RabbitMQ or [[Apache Kafka]]. These are popular messaging queues that can be used to integrate your services. Additionally I would recommend taking the Learning Redis course with Emmanuel Henri. Redis is a key value data store, but it has some publisher/subscriber functionality that could be used to implement messaging queues as well. When it comes to scaling you don't have to build everything yourself. Cloud service providers like [[Microsoft Azure|Azure]] or [[Amazon Web Services (AWS)|Amazon Web Services]] or Cloudflare all have solutions for cloning your Node.js applications and services into instances that are hosted worldwide. Before you stand up your own server
>
> **[1:34](https://www.linkedin.com/learning/advanced-node-js-scaling-applications/next-steps?u=76281980&t=94)** with PM2 I would look into the features that are available with a cloud service provider like Azure. LinkedIn has dozens of courses on both Azure and Amazon Web Services. Again, thank you for taking this course. And I wish you luck on all of your scaling adventures.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (5), [[Redis]] (3), [[Microsoft Azure|Azure]] (3), [[LinkedIn]] (2), [[Amazon Web Services (AWS)|Amazon web services]] (2)
> **CLI Commands:** node (5), find (1), mysql (1), apache (1)
> **File Paths:** node.js (5)
> **Definitions:** is a  (2)
> **Env Vars:** pm2 (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Alex Banks]]

## Resources

- Exercise files available

## Skills Covered

- Scalability
- Node.js

## Path Context

### In [[Advance your Node.js Skills]]
← [[Advanced Node.js]] | **8 of 8**

## Appears In

- [[Advance your Node.js Skills]]

## Related Courses

_Courses sharing skills:_

- [[Learning Full-Stack JavaScript Development- MongoDB, Node, and React]] — Node.js
- [[Building a Website with Node.js and Express.js]] — Node.js
- [[Advanced Node.js]] — Node.js
- [[Node.js- Debugging and Performance Tuning]] — Node.js
- [[Node.js- Design Patterns]] — Node.js

---

[↑ Back to top](#)