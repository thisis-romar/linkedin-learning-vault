---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: node-js-web-servers-tests-and-deployment
url: "https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment"
duration_minutes: 79
duration: 1h 19m
level: Advanced
updated: 5/23/2024
learners: 81079
skills:
  - Web Servers
  - Software Testing
  - Node.js
  - Software Deployment
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGzbpxDbiFDCQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1660760035765?e=2147483647&amp;v=beta&amp;t=wSAPuZDQTgNdWyga5CuVmumumOxXhJ7OTejXJi-g2xo"
linkedin_topic: Web Development
learning_paths:
  - '[[Explore Web Development with Node.js]]'
prev_courses:
  - '[[Advanced Express]]'
next_courses:
  - '[[Building RESTful APIs with Node.js and Express]]'
path_nav: '[{"path":"Explore Web Development with Node.js","position":7,"total":11,"prev":"Advanced Express","next":"Building RESTful APIs with Node.js and Express"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/web-servers
  - skill/software-testing
  - skill/node-js
  - skill/software-deployment
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Node.js-%20Web%20Servers%2C%20Tests%2C%20and%20Deployment.md)

![Node.js: Web Servers, Tests, and Deployment](https://media.licdn.com/dms/image/v2/C4E0DAQGzbpxDbiFDCQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1660760035765?e=2147483647&amp;v=beta&amp;t=wSAPuZDQTgNdWyga5CuVmumumOxXhJ7OTejXJi-g2xo)

# Node.js: Web Servers, Tests, and Deployment

> If you’re looking to deepen your essential knowledge of Node.js, you’re in luck. This powerful tool for controlling servers and building web applications allows you to work from just about anywhere. In this course, instructor Eve Porcello walks you through how to connect with web servers and test and deploy Node.js applications.Get a thorough introduction to the HTTP module to make a request and b

> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment) | 1h 19m | Advanced | 81K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - Going beyond the basics in Node
  - What you should know
  - Working with VS Code
- [**1. The HTTP Module**](#1-the-http-module) (5 videos)
  - Making a request with the request method
  - Making a request with the GET method
  - Building a web server
  - Creating a file server
  - Serving JSON data
- [**2. npm**](#2-npm) (5 videos)
  - The package.json file
  - Using import statements
  - Using minimist
  - Using tiny-timer
  - Managing packages
- [**3. Web Servers**](#3-web-servers) (5 videos)
  - File servers with serve
  - Intro to Express
  - Handling POST requests
  - Handling DELETE requests
  - Using Express middleware
- [**4. WebSockets**](#4-websockets) (4 videos)
  - Creating a WebSocket
  - Broadcasting messages with a WebSocket
  - Creating a WebSocket client with Socket.IO
  - Emitting Socket.IO events
- [**5. Node.js Testing**](#5-nodejs-testing) (4 videos)
  - Creating modular projects
  - Configuring Babel with Jest
  - Writing a test
  - Using code coverage
- [**Conclusion**](#conclusion) (1 videos)
  - Next steps

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Going beyond the basics in Node
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/going-beyond-the-basics-in-node?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/going-beyond-the-basics-in-node?u=76281980&t=0)** - [Eve] When you started to work with Node.js you probably learned how to install it and how to perform some simple tasks like logging, processing arguments from the command line, and working with the file system.
>
> **[0:11](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/going-beyond-the-basics-in-node?u=76281980&t=11)** Once you understand those features though, you might be asking yourself, what's next with Node.js?
>
> **[0:15](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/going-beyond-the-basics-in-node?u=76281980&t=15)** In this course, we're going to find out what's next.
>
> **[0:18](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/going-beyond-the-basics-in-node?u=76281980&t=18)** We'll go beyond the basics to talk about some of the most essential features of Node.js.
>
> **[0:23](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/going-beyond-the-basics-in-node?u=76281980&t=23)** We'll create servers, we'll use NPM, we'll handle testing, and we'll work with web sockets.
>
> **[0:29](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/going-beyond-the-basics-in-node?u=76281980&t=29)** Everything you need to work with Node.js in the real world.
>
> **[0:33](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/going-beyond-the-basics-in-node?u=76281980&t=33)** My name is Eve Porcello and I've been a JavaScript developer and instructor for over a decade.
>
> **[0:38](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/going-beyond-the-basics-in-node?u=76281980&t=38)** When I started teaching JavaScript, it was mostly thought of as this language to use for hovers and button clicks, today, it's more powerful than ever.
>
> **[0:46](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/going-beyond-the-basics-in-node?u=76281980&t=46)** And it's more important than ever that developers from a range of backgrounds understand how to work with Node.js projects.
>
> **[0:53](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/going-beyond-the-basics-in-node?u=76281980&t=53)** We're going to be creating a lot of really cool demos together in this course.
>
> **[0:57](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/going-beyond-the-basics-in-node?u=76281980&t=57)** So I don't want to waste any more time.
>
> **[0:58](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/going-beyond-the-basics-in-node?u=76281980&t=58)** Let's get into it.
>
> **[0:59](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/going-beyond-the-basics-in-node?u=76281980&t=59)** Let's start building with Node.js.

> [!info]- Semantic Content
>
> **CLI Commands:** node (6), find (1), npm (1)
> **File Paths:** node.js (6)
> **Code Keywords:** let (2)
> **Env Vars:** npm (1)
> **Tools:** command line (1)
> **Prerequisites:** install (1)
> **Speakers:** - [eve] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/what-you-should-know?u=76281980&t=0)** - [Instructor] Let's make sure we have everything we need for the course.
>
> **[0:03](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/what-you-should-know?u=76281980&t=3)** Now the first thing we can do is open up our terminal or command prompt and type node -v and this should return the version number that we're currently using.
>
> **[0:13](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/what-you-should-know?u=76281980&t=13)** So if this says anything above version 17 or 18, you should be okay, you don't really need to download anything new.
>
> **[0:23](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/what-you-should-know?u=76281980&t=23)** If you want to get the latest version, or if you type this in and you see an error, you want to grab the latest version from the Node.js website.
>
> **[0:33](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/what-you-should-know?u=76281980&t=33)** So here on the website, they just pushed a new version of this site.
>
> **[0:37](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/what-you-should-know?u=76281980&t=37)** It's looking pretty slick.
>
> **[0:39](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/what-you-should-know?u=76281980&t=39)** All you need to do is click on Node.js LTS, or if you wanted to get kind of the most recent features, you could always click down here, want new features sooner.
>
> **[0:51](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/what-you-should-know?u=76281980&t=51)** If you're curious about more on these versions and things like that, you can always click on Download and fill out this little installer.
>
> **[1:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/what-you-should-know?u=76281980&t=60)** I want this version for the following operating system, running one of these.
>
> **[1:06](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/what-you-should-know?u=76281980&t=66)** So that's an option for you as well.
>
> **[1:09](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/what-you-should-know?u=76281980&t=69)** If you do need to download it though, it'll take you through the process of using an installer.
>
> **[1:14](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/what-you-should-know?u=76281980&t=74)** So this is going to download this.
>
> **[1:18](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/what-you-should-know?u=76281980&t=78)** I'm going to open that installer and it's going to pop open a window that looks like this.
>
> **[1:25](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/what-you-should-know?u=76281980&t=85)** We'll just hit Continue a bunch of times until we install.
>
> **[1:31](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/what-you-should-know?u=76281980&t=91)** It may ask for your password as well.
>
> **[1:34](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/what-you-should-know?u=76281980&t=94)** Alright, and then you should be all set.
>
> **[1:37](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/what-you-should-know?u=76281980&t=97)** Something to remember is if you're installing this for the first time, sometimes you need to close and reopen your terminal window or command prompt to make sure that this is installed.
>
> **[1:47](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/what-you-should-know?u=76281980&t=107)** This is Node working...

> [!info]- Semantic Content
>
> **CLI Commands:** node (4), make (2)
> **Code Keywords:** this. (2), let (1), new. (1), continue (1)
> **Tools:** terminal (2), command prompt (2)
> **File Paths:** node.js (2)
> **UI Navigation:** click on (2)
> **Env Vars:** lts (1)
> **Versions:** version 17 (1)
> **Prerequisites:** install (1)

#### Working with VS Code
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/working-with-vs-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/working-with-vs-code?u=76281980&t=0)** - [Instructor] The tool I'm going to be using to edit the code for this class is Visual Studio.
>
> **[0:05](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/working-with-vs-code?u=76281980&t=5)** If you haven't used Visual Studio Code before, it's a free app that you can use for all sorts of different languages.
>
> **[0:12](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/working-with-vs-code?u=76281980&t=12)** So if you'd like to download it, you can.
>
> **[0:15](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/working-with-vs-code?u=76281980&t=15)** This will identify what type of machine you're using to access this.
>
> **[0:19](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/working-with-vs-code?u=76281980&t=19)** And then you can just go ahead and download this, kind of like we did with Node.js before.
>
> **[0:26](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/working-with-vs-code?u=76281980&t=26)** We are going to show this in our Finder and then this should download this to our computer.
>
> **[0:32](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/working-with-vs-code?u=76281980&t=32)** So you can drag the Exercise Files folder over Visual Studio Code in the doc and this will open this up for you.
>
> **[0:38](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/working-with-vs-code?u=76281980&t=38)** Now, something to note is that, and this is a question I get asked all the time, so if you're looking for a theme, meaning you're looking for a color scheme for your installation of VS code, what you can do is go to the Code menu, go to Preferences, go to Color Theme.
>
> **[0:55](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/working-with-vs-code?u=76281980&t=55)** And this is going to expose a whole list of the available ones, as well as additional color themes that you can install.
>
> **[1:03](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/working-with-vs-code?u=76281980&t=63)** So the one that I'm actually using here is called Night Owl.
>
> **[1:06](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/working-with-vs-code?u=76281980&t=66)** So you should be able to find this in that list.
>
> **[1:08](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/working-with-vs-code?u=76281980&t=68)** So there's Night Owl Dark, there's Night Owl Light if you prefer that mode.
>
> **[1:12](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/working-with-vs-code?u=76281980&t=72)** I'm going to stick with Night Owl Dark for the purposes of the class today.
>
> **[1:19](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/working-with-vs-code?u=76281980&t=79)** Night Owl, there we go.

> [!info]- Semantic Content
>
> **Tools:** visual studio (3), vs code (1)
> **UI Navigation:** go to (3)
> **CLI Commands:** node (1), find (1)
> **Code Keywords:** this. (1), this, (1)
> **Definitions:** is a  (1), is called (1)
> **File Paths:** node.js (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** kind of like (1)


### 1. The HTTP Module

> [↑ Back to Table of Contents](#table-of-contents)

#### Making a request with the request method
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=0)** - [Instructor] We may need to make HTTP requests in order to upload and download files and information from HTTP servers.
>
> **[0:06](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=6)** Node.js has two modules for this, the http module.
>
> **[0:10](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=10)** This is the one used for a request to sites without a security certificate, and the https module, which is going to make a request to a site with a security certificate.
>
> **[0:21](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=21)** So what I want to do here is make a request for some data, and I'm going to make this request to this endpoint here.
>
> **[0:26](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=26)** So you can choose whatever Wikipedia article you want to grab.
>
> **[0:30](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=30)** I've grabbed Cher here, and this is going to be the endpoint that I'll send this request to.
>
> **[0:36](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=36)** The first thing we want to do, inside of our file called index.js, is I'm going to import, I'm going to require, the https module, and the file system module.
>
> **[0:47](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=47)** From here, I want to define an object filled with options, and this options object is going to have a few important keys on it.
>
> **[0:56](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=56)** The first is a host name.
>
> **[0:59](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=59)** So where are we making this request?
>
> **[1:01](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=61)** This is sort of the root of our endpoint here.
>
> **[1:05](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=65)** Nice, and then the next thing that we want is a port.
>
> **[1:09](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=69)** So any of these requests that are running over HTTPS will use port 443, then we'll specify the path.
>
> **[1:18](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=78)** So I want to make the request to [wikipedia.org/something](https://wikipedia.org/something).
>
> **[1:23](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=83)** So the path will be here, wiki/Cher, and then we also want to define the method, which is get.
>
> **[1:30](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=90)** We're making a get request for this information.
>
> **[1:34](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=94)** Now, once I've done this, I'm going to call https.request.
>
> **[1:40](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=100)** We'll supply the options as the first argument, and then the callback function is going to be responsible for taking the data from that endpoint and doing something with it.
>
> **[1:51](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=111)** So the first thing we want to do is we want to create a little container, responseBody.
>
> **[1:56](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=116)** This is going to contain all of that data, then we're going to call a response.setEncoding, and the setEncoding function is going to take in UTF-8.
>
> **[2:07](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=127)** So this is our character encoding for that text.
>
> **[2:10](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=130)** Now, here, we'll use response.on.
>
> **[2:13](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=133)** Response.on will take in a value as the first argument.
>
> **[2:18](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=138)** This is going to be data.
>
> **[2:20](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=140)** So this function is going to be called whenever we get some data.
>
> **[2:23](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=143)** Now, when we make this request, it's going to be broken down into chunks.
>
> **[2:26](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=146)** Instead of loading all of this data at once, we're going to instead just grab little bits of it so that that response can come back more efficiently.
>
> **[2:36](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=156)** So let's take a look at what the length of the chunk is.
>
> **[2:40](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=160)** So we'll say chunk.length, then we'll use responseBody += chunk.
>
> **[2:47](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=167)** We'll append that data to our empty responseBody string.
>
> **[2:51](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=171)** Finally, we'll call request.end, closing up that request.
>
> **[2:57](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=177)** Now, we want to make sure that we're navigated to the right folder.
>
> **[3:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=180)** (laughs) I often find that the fastest way to do that is to type CD, drag the start folder over here and make sure you're routed to the right place.
>
> **[3:09](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=189)** The other thing I should say is that if you hit Control + Backtick, Control + Tilde, up in your upper left-hand corner of your keyboard, that's going to open and close the embedded terminal in VS Code.
>
> **[3:22](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=202)** So that's pretty cool.
>
> **[3:24](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=204)** Now, to run our node app, we'll say.
>
> **[3:27](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=207)** Now, to run this, we'll say node index.
>
> **[3:31](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=211)** This is going to populate all of these chunks of information to us, and that's pretty cool.
>
> **[3:37](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=217)** We see the length of the chunk.
>
> **[3:39](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=219)** Notice that the last one is a little bit shorter because we have all of these little containers for data, and then at some point we've run out.
>
> **[3:47](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=227)** Let's go ahead and do something with this now.
>
> **[3:50](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=230)** We imported that file system module for a reason, I promise.
>
> **[3:54](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=234)** So what we'll say here is we'll say response.on, end.
>
> **[3:58](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=238)** We want to use the file system module to write to a file.
>
> **[4:02](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=242)** So we'll say fs.writeFile.
>
> **[4:05](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=245)** We'll call the file cher.html.
>
> **[4:09](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=249)** We'll pass responseBody as the second argument, which is going to take that data and populate it into our HTML page, and then let's go ahead and add an error in case something goes wrong.
>
> **[4:22](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=262)** We'll say if there's an error, we'll throw it.
>
> **[4:26](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=266)** Otherwise, we want to just say file downloaded.
>
> **[4:32](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=272)** Perfect, so at this point, we should be able to run this again.
>
> **[4:35](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=275)** Let's type node index, and it says file downloaded.
>
> **[4:39](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=279)** That's sort of exciting, but more exciting would be to see this whole cher.html page.
>
> **[4:45](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=285)** So now we have all of this HTML that we've downloaded from the internet.
>
> **[4:50](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=290)** So we've built a little page scraper to grab some information from that endpoint.
>
> **[4:56](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=296)** A lot of different cool things that you can do with https and fs combined.

> [!info]- Semantic Content
>
> **Code Keywords:** module (6), let (4), this, (3), function (3), import, (1)
> **CLI Commands:** make (8), node (4), find (1), cd (1)
> **Code Identifiers:** responsebody (4), setencoding (2), writefile (1)
> **Env Vars:** http (2), html (2), https (1), utf (1)
> **File Paths:** cher.html (2), node.js (1), index.js (1)
> **Definitions:** is a  (3)
> **Tools:** terminal (1), vs code (1)
> **URLs:** [wikipedia.org](https://wikipedia.org) (1)

#### Making a request with the GET method
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-get-method?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-get-method?u=76281980&t=0)** - [Instructor] In the previous video, we used the HTTPS module to make a request to Wikipedia.
>
> **[0:05](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-get-method?u=76281980&t=5)** Now, let's refactor that code a little bit and use the https.get method.
>
> **[0:09](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-get-method?u=76281980&t=9)** And we're also going to refactor this to use a stream.
>
> **[0:12](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-get-method?u=76281980&t=12)** Now, the first thing we need to do is we need a url and our url is going to be the same from before.
>
> **[0:19](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-get-method?u=76281980&t=19)** So we'll say [wikipedia.org/wiki/Cher](https://wikipedia.org/wiki/Cher).
>
> **[0:23](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-get-method?u=76281980&t=23)** Now, once we've done that, we can delete our options object.
>
> **[0:27](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-get-method?u=76281980&t=27)** We're also going to make some adjustments to the request function.
>
> **[0:30](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-get-method?u=76281980&t=30)** So instead of using request, we'll use get.
>
> **[0:34](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-get-method?u=76281980&t=34)** And we are going to pass in instead of options, we'll say url.
>
> **[0:38](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-get-method?u=76281980&t=38)** Because we're saying that we want to make this get request, we don't have to define all of those other options, which is kind of nice.
>
> **[0:44](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-get-method?u=76281980&t=44)** We will use the same callback function here but we're going to use slightly different code inside of this.
>
> **[0:51](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-get-method?u=76281980&t=51)** So let's go ahead and get rid of everything that's here.
>
> **[0:55](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-get-method?u=76281980&t=55)** And we want to create a variable called download.
>
> **[1:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-get-method?u=76281980&t=60)** And we're going to set this equal to fs.createWriteStream.
>
> **[1:05](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-get-method?u=76281980&t=65)** And we'll pass in the name of the file that we want to write to.
>
> **[1:08](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-get-method?u=76281980&t=68)** So we'll say cher.html.
>
> **[1:11](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-get-method?u=76281980&t=71)** Then we'll console.log Response started.
>
> **[1:16](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-get-method?u=76281980&t=76)** And then we'll use response.pipe download.
>
> **[1:18](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-get-method?u=76281980&t=78)** So we want to pipe that data into our file finally.
>
> **[1:24](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-get-method?u=76281980&t=84)** We need to call response.on and what we'll do here is we'll console.log a message for ourselves.
>
> **[1:31](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-get-method?u=76281980&t=91)** We'll say response finished.
>
> **[1:35](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-get-method?u=76281980&t=95)** Okay, perfect.
>
> **[1:36](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-get-method?u=76281980&t=96)** So now let's try to run this again.
>
> **[1:38](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-get-method?u=76281980&t=98)** We're going to make sure that we're navigated to the right folder.
>
> **[1:41](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-get-method?u=76281980&t=101)** I feel like I'm not.
>
> **[1:43](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-get-method?u=76281980&t=103)** So we'll get there.
>
> **[1:46](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-get-method?u=76281980&t=106)** There we go.
>
> **[1:47](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-get-method?u=76281980&t=107)** Node index said started and then finished.
>
> **[1:51](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-get-method?u=76281980&t=111)** And then we have our HTML page over here once again.
>
> **[1:55](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-get-method?u=76281980&t=115)** So with this code, the results are the same but the code to make this download happen is a little cleaner and more efficient using the get method.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), function (2), pass (2), module (1), delete (1)
> **CLI Commands:** make (5), node (1)
> **Env Vars:** https (1), html (1)
> **File Paths:** cher.html (1)
> **Code Identifiers:** createwritestream (1)
> **URLs:** [wikipedia.org](https://wikipedia.org) (1)
> **Cross-References:** previous video (1)
> **Definitions:** is a  (1)

#### Building a web server
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=0)** - [Instructor] One of the coolest things that you can do with Node.js is build web servers.
>
> **[0:04](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=4)** So let's create a simple text server.
>
> **[0:06](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=6)** We're going to import the http module to make that work.
>
> **[0:10](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=10)** We then are going to use the createServer function.
>
> **[0:15](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=15)** Remember, you can always destructure this too.
>
> **[0:18](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=18)** So if you'd rather just select an individual function from the http module, you would wrap it in curly braces and then get rid of the http dot.
>
> **[0:29](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=29)** So from here, we're going to go ahead and pass in our callback function, which takes in a request and a response.
>
> **[0:37](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=37)** Then we're going to write some headers.
>
> **[0:39](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=39)** So we'll say response.writeHead.
>
> **[0:42](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=42)** We're going to say if there's a 200 response, so if everything goes right, we want to specify a Content-Type.
>
> **[0:50](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=50)** And the Content-Type here will just be text/plain.
>
> **[0:54](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=54)** Then we'll say response.end.
>
> **[0:57](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=57)** We'll say Hello World.
>
> **[0:59](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=59)** Perfect.
>
> **[1:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=60)** Now, the tricky thing here is we want to chain on another function.
>
> **[1:04](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=64)** So at the end of createServer, we'll use .listen.
>
> **[1:08](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=68)** And here's where we'll specify which port we want to listen on.
>
> **[1:12](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=72)** So .listen is going to listen on 3000.
>
> **[1:16](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=76)** Finally, here we'll give ourselves a little message to say that the web server is listening on port 3000.
>
> **[1:25](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=85)** So from here, we want to run this.
>
> **[1:27](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=87)** We'll run node index.
>
> **[1:30](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=90)** Web server is running on port 3000.
>
> **[1:33](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=93)** All you need to do here so go to localhost:3000 and we'll serve up our text.
>
> **[1:39](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=99)** We can also use our server to serve HTML.
>
> **[1:42](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=102)** So to do that, we'll start by changing the Content-Type to html.
>
> **[1:49](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=109)** And then instead of using response.end here, I'm going to use this template string.
>
> **[1:54](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=114)** So I'll use a couple different back ticks.
>
> **[1:57](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=117)** And we'll say DOCTYPE html.
>
> **[2:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=120)** We'll use another opening and closing html tag.
>
> **[2:04](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=124)** We will then use the body.
>
> **[2:07](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=127)** This is a pretty basic html collection here.
>
> **[2:13](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=133)** But it's very exciting when it works.
>
> **[2:16](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=136)** Serving HTML Text.
>
> **[2:19](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=139)** Awesome.
>
> **[2:20](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=140)** So we need to then stop and start that server.
>
> **[2:25](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=145)** We will refresh and we'll see that our HTML is getting served.
>
> **[2:30](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=150)** We can also view some details about the request.
>
> **[2:33](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=153)** So let's go ahead and try to take a look at a few of these methods.
>
> **[2:37](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=157)** So here we'll say Serving HTML Text but next door to this, we'll say request.method.
>
> **[2:45](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=165)** Request made for request.url.
>
> **[2:51](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=171)** Nice.
>
> **[2:52](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=172)** So stop your server, start your server.
>
> **[2:55](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=175)** Go back and you'll see that this is parsing the GET method and the slash route from the request object.
>
> **[3:04](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=184)** So if you want to dig into that further, you can always console.log request.
>
> **[3:11](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=191)** We'll say Request Details.
>
> **[3:15](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=195)** We will start this guy up again.
>
> **[3:19](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=199)** We'll take a look at our console and we'll see that there's all these different methods that we can make use of.
>
> **[3:24](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=204)** So there's a ton of good information there that can help us to display the right content at the right time, and get information about the request itself.
>
> **[3:35](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=215)** Building web servers with Node.js is one of the most powerful features of the language, and we can use the request variables to determine what type of content the user is requesting.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), let (2), module (2), pass (1), type. (1)
> **CLI Commands:** node (3), make (2)
> **Env Vars:** html (4), doctype (1)
> **Code Identifiers:** createserver (2), writehead (1)
> **Ports:** port 3000 (2), :3000 (1)
> **File Paths:** node.js (2)
> **URLs:** [localhost:3000](https://localhost:3000) (1)
> **API Endpoints:** get  (1)

#### Creating a file server
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-file-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-file-server?u=76281980&t=0)** - [Instructor] Now that we understand the basics of creating web servers, let's put those skills to work.
>
> **[0:05](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-file-server?u=76281980&t=5)** We're going to build a little website here using these starter files.
>
> **[0:08](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-file-server?u=76281980&t=8)** We have a homepage, we have a photo, we have some styles, and we have a 404 page.
>
> **[0:16](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-file-server?u=76281980&t=16)** So we're going to need to use our knowledge of HTTP to create a server and we're going to serve up from the file system using the createReadStream function.
>
> **[0:32](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-file-server?u=76281980&t=32)** We're going to use createServer, we're going to use the request and the response, and here we're going to use the switch statement.
>
> **[0:42](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-file-server?u=76281980&t=42)** So given the request URL, if I go to the slash route we want to do something, now what we actually want to do is we want to serve up our HTML file that's in that folder but a nice way to kind of wrap this functionality would be to create a function that takes in the response object, the status, the type of file, and the file name itself and we're going to use all of that data to write some headers and to stream the file.
>
> **[1:18](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-file-server?u=76281980&t=78)** So we'll say res.writeHead will write the status, we will plug in a dynamic content type, is it a CSS file?
>
> **[1:31](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-file-server?u=76281980&t=91)** Is it a JPG?
>
> **[1:33](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-file-server?u=76281980&t=93)** Whatever type of file it is, we'll be able to serve it and then we'll say, createReadStream with the name of the file and we want to pipe the response.
>
> **[1:43](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-file-server?u=76281980&t=103)** Okay, so now that I've done that, I'm going to say return sendFile, we'll take in the response object, the status code is 200 here.
>
> **[1:53](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-file-server?u=76281980&t=113)** We'll specify the file type, html, and then we'll say ./home-page.html.
>
> **[2:01](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-file-server?u=76281980&t=121)** So we're serving up this HTML file on the home route, let's go ahead and see if this works.
>
> **[2:07](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-file-server?u=76281980&t=127)** We'll call .listen and then we'll console.log web server at 3000.
>
> **[2:17](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-file-server?u=76281980&t=137)** This is our first case, but we need others.
>
> **[2:21](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-file-server?u=76281980&t=141)** So we want to make sure that we serve up this file correctly, so the file that we want to serve up is called desert mountains and if we go to the homepage.html, this is where we want to serve this up.
>
> **[2:33](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-file-server?u=76281980&t=153)** So I'm just going to copy and paste this from that location, we're going to paste that in, we're going to make sure we're using the right file type and we'll call return sendFile response 200, this time it's image/jpg and then the location is ./desert-mountains.
>
> **[2:59](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-file-server?u=76281980&t=179)** This is where it is in our file system.
>
> **[3:04](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-file-server?u=76281980&t=184)** All right, we got a couple more of these, I'm going to copy and paste this one.
>
> **[3:09](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-file-server?u=76281980&t=189)** We're going to replace this here, we'll say styles.css.
>
> **[3:17](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-file-server?u=76281980&t=197)** This is a text file, but it's a CSS text file and then the name of the file is styles.css.
>
> **[3:28](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-file-server?u=76281980&t=208)** And then finally, whenever we create a switch statement we're going to have a default.
>
> **[3:32](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-file-server?u=76281980&t=212)** So that is going to serve up our 404 response, 404 text/html and ./404.html.
>
> **[3:45](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-file-server?u=76281980&t=225)** Awesome, so let's try this again.
>
> **[3:47](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-file-server?u=76281980&t=227)** We're going to say node index, our server is running.
>
> **[3:51](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-file-server?u=76281980&t=231)** We see Mammoth Lakes, California.
>
> **[3:53](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-file-server?u=76281980&t=233)** It's serving up our CSS, our image, and our HTML.
>
> **[3:58](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-file-server?u=76281980&t=238)** Now, if I was to go to some other page here, /something-else, it'll serve up the 404.
>
> **[4:05](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-file-server?u=76281980&t=245)** So we've built our first actual web server that can be used to serve these files.
>
> **[4:10](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-file-server?u=76281980&t=250)** This is pretty cool because now I can update my own site here simply by changing these files.
>
> **[4:16](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-file-server?u=76281980&t=256)** So it's important to know that we're serving up all of these different file types individually.
>
> **[4:21](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-file-server?u=76281980&t=261)** We're creating an HTML server, an image server, and a CSS server.
>
> **[4:27](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-file-server?u=76281980&t=267)** And all of these are going to allow us to build this page.
>
> **[4:31](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-file-server?u=76281980&t=271)** A quick note too, if we were to go to this route here where we've created this image server, so img/desert-mountains.jpg, we're going to find that file there.
>
> **[4:45](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-file-server?u=76281980&t=285)** Similarly, if we go to 404.html that's going to serve that one up to.
>
> **[4:51](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-file-server?u=76281980&t=291)** So, all of that is working in the background to serve up all of these different files.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), function (2), switch (2), type, (2), case, (1)
> **Env Vars:** html (4), css (4), http (1), url (1), jpg (1)
> **File Paths:** styles.css (2), 404.html (2), home-page.html (1), homepage.html (1)
> **Code Identifiers:** createreadstream (2), sendfile (2), createserver (1), writehead (1)
> **UI Navigation:** go to (5)
> **CLI Commands:** make (2), node (1), find (1)
> **Definitions:** is called (1), is a  (1)
> **Exercise Files:** starter files (1)

#### Serving JSON data
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=0)** - [Instructor] We can also use the HTTP module to create an HTTP API or a server that's primary purpose is to serve up JSON.
>
> **[0:09](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=9)** APIs are used to serve data to client applications.
>
> **[0:12](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=12)** So let's go ahead and start by requiring createServer.
>
> **[0:17](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=17)** And then we'll also require our data.
>
> **[0:20](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=20)** Now, the data is here in this file called cats.json.
>
> **[0:25](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=25)** A little bit of simple JSON data.
>
> **[0:27](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=27)** So let's go ahead and require ./cats.
>
> **[0:34](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=34)** All right, so createServer.
>
> **[0:37](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=37)** As you might expect, we'll take in the request and the response.
>
> **[0:40](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=40)** This function is going to write some headers for us.
>
> **[0:44](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=44)** So if 200, then our Content-Type will be text/json.
>
> **[0:53](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=53)** We also want to call response.end and we'll say JSON.stringify our data.
>
> **[1:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=60)** Finally, we need to chain on a .listen with 3000.
>
> **[1:07](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=67)** Okay.
>
> **[1:08](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=68)** So at this point, we should be able stop our old server.
>
> **[1:13](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=73)** We'll make sure that we're navigated to the right place.
>
> **[1:17](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=77)** We will run node index.
>
> **[1:19](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=79)** This should run our server on 3000.
>
> **[1:22](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=82)** Let's go over here and check it out.
>
> **[1:25](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=85)** We're serving up our JSON.
>
> **[1:26](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=86)** Now, we can also use this to set up some simple routing.
>
> **[1:30](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=90)** So what we'll do inside of our createServer function is we're going to say if request.url.toLowerCase equals /biscuit, then we'll say let biscuit equal data.filter.
>
> **[1:47](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=107)** We're using a JavaScript function here to take a look at each one of these cats to see if the cat.name equals Biscuit.
>
> **[1:57](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=117)** Then we'll say response.end JSON.stringify biscuit.
>
> **[2:06](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=126)** Perfect.
>
> **[2:07](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=127)** So now let's go ahead and create another route for our other cat.
>
> **[2:14](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=134)** Request.url.toLowerCase.
>
> **[2:19](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=139)** Jungle.
>
> **[2:20](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=140)** I wonder if my cats know how many JavaScript videos their names appear in.
>
> **[2:26](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=146)** I would guess no.
>
> **[2:28](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=148)** So again, we'll say cat, cat.name equals Jungle.
>
> **[2:36](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=156)** And then we'll say response.end JSON.stringify jungle.
>
> **[2:42](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=162)** Now, finally, we're going to add an else statement.
>
> **[2:45](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=165)** Else is going to wrap around our existing response.end.
>
> **[2:49](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=169)** So if I don't visit any of these routes, jungle or biscuit, I just want to see everything.
>
> **[2:55](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=175)** I also am noticing here that I spelled biscuit wrong.
>
> **[2:58](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=178)** So let me fix that.
>
> **[3:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=180)** And we should be good to go.
>
> **[3:01](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=181)** So let's stop this.
>
> **[3:03](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=183)** Control + C.
>
> **[3:05](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=185)** We'll clear that out.
>
> **[3:05](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=185)** We'll run node index.
>
> **[3:09](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=189)** This should run this.
>
> **[3:11](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=191)** So it's giving us all of our data but if I go to /jungle, it'll give us just that data.
>
> **[3:17](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=197)** If we go to /biscuit, it'll just give us that.
>
> **[3:21](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=201)** So these are just a couple of the techniques that we'll need to construct APIs or middle-tier web apps that just serve JSON data to all sorts of different clients.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), function (3), require (2), finally, (2), this. (2)
> **Env Vars:** json (7), http (2), api (1)
> **CLI Commands:** cat (4), node (2), make (1)
> **Code Identifiers:** createserver (3), tolowercase (2)
> **UI Navigation:** go to (2)
> **File Paths:** cats.json (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 2. npm

> [↑ Back to Table of Contents](#table-of-contents)

#### The package.json file
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/the-package-json-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/the-package-json-file?u=76281980&t=0)** - So far we've used core modules, the modules that are installed when you install Node.js.
>
> **[0:06](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/the-package-json-file?u=76281980&t=6)** So these include things like HTTP, like fs, like exec, util, all sorts of things like this.
>
> **[0:13](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/the-package-json-file?u=76281980&t=13)** We can require them by name because they're available with our installation of Node.
>
> **[0:18](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/the-package-json-file?u=76281980&t=18)** So all I have to do is this.
>
> **[0:19](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/the-package-json-file?u=76281980&t=19)** I don't have to install anything separately.
>
> **[0:22](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/the-package-json-file?u=76281980&t=22)** But there are other modules out there, community modules created by open source developers, and we can install and use those modules too.
>
> **[0:30](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/the-package-json-file?u=76281980&t=30)** Node.js community modules are hosted and shared for free with npm.
>
> **[0:35](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/the-package-json-file?u=76281980&t=35)** You can come here to find different Node modules and even publish your own.
>
> **[0:39](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/the-package-json-file?u=76281980&t=39)** And you also can have a private account.
>
> **[0:41](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/the-package-json-file?u=76281980&t=41)** So your business can publish and share modules privately with npm as well.
>
> **[0:45](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/the-package-json-file?u=76281980&t=45)** So when you installed Node, you already installed npm.
>
> **[0:49](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/the-package-json-file?u=76281980&t=49)** So if I go to npm -v, this is going to let me know what my current version is.
>
> **[0:55](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/the-package-json-file?u=76281980&t=55)** So before we can start to use some of these npm packages, we have to create a package JSON file.
>
> **[1:01](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/the-package-json-file?u=76281980&t=61)** So what I'm going to do here is I'm going to run npm init.
>
> **[1:04](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/the-package-json-file?u=76281980&t=64)** npm init will walk me through the process of setting up a file called a package JSON.
>
> **[1:10](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/the-package-json-file?u=76281980&t=70)** So this package JSON is going to have all sorts of information about my project.
>
> **[1:15](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/the-package-json-file?u=76281980&t=75)** So here we can give this a package name.
>
> **[1:17](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/the-package-json-file?u=76281980&t=77)** So we're going to call this countdown.
>
> **[1:19](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/the-package-json-file?u=76281980&t=79)** Then we're going to give it a version.
>
> **[1:21](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/the-package-json-file?u=76281980&t=81)** So I'll just say version, and we'll say description: A countdown clock.
>
> **[1:27](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/the-package-json-file?u=76281980&t=87)** We will define an entry point, which is our main JavaScript file.
>
> **[1:30](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/the-package-json-file?u=76281980&t=90)** We'll hit enter to skip the test command.
>
> **[1:33](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/the-package-json-file?u=76281980&t=93)** We'll hit enter to skip the git repo.
>
> **[1:36](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/the-package-json-file?u=76281980&t=96)** We'll say node, javascript, timers.
>
> **[1:41](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/the-package-json-file?u=76281980&t=101)** We'll give ourselves credit as an author.
>
> **[1:44](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/the-package-json-file?u=76281980&t=104)** We'll give it a license.
>
> **[1:46](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/the-package-json-file?u=76281980&t=106)** We'll say an MIT license.
>
> **[1:48](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/the-package-json-file?u=76281980&t=108)** And then we'll say that this is okay.
>
> **[1:50](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/the-package-json-file?u=76281980&t=110)** What this should have done is it should have created a package JSON file for us.
>
> **[1:54](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/the-package-json-file?u=76281980&t=114)** And this is going to have information about the project, but it's also going to store information about all of the dependencies that are part of our project.
>
> **[2:04](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/the-package-json-file?u=76281980&t=124)** So the package JSON has all of the configuration information about our project.
>
> **[2:08](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/the-package-json-file?u=76281980&t=128)** In the next video we'll install some dependencies using npm.

> [!info]- Semantic Content
>
> **CLI Commands:** npm (8), node (6), find (1), git (1)
> **Env Vars:** json (5), http (1), mit (1)
> **Code Keywords:** this. (2), require (1), private (1), let (1)
> **Prerequisites:** install (4)
> **File Paths:** node.js (2)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Speakers:** - so (1)

#### Using import statements
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-import-statements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-import-statements?u=76281980&t=0)** - [Instructor] So far when we've been working with Node.js we have imported items using the require statement, and then once they are imported we can start to log some of these things.
>
> **[0:12](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-import-statements?u=76281980&t=12)** So let's go ahead and try to run this.
>
> **[0:14](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-import-statements?u=76281980&t=14)** We're going to make sure that we're in our start folder, and then we're going to run node index to make this work.
>
> **[0:22](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-import-statements?u=76281980&t=22)** Now this will give me a little bit of information about our file system module.
>
> **[0:27](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-import-statements?u=76281980&t=27)** Whenever we have imported these modules in the past, whether they come from NPM or whether they just come from Node.js itself, we have used the require statement using a pattern called CommonJS to import these modules.
>
> **[0:43](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-import-statements?u=76281980&t=43)** Now you may have seen a different syntax used which looks a little something like this, import fs from fs.
>
> **[0:52](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-import-statements?u=76281980&t=52)** Both of these lines of code are doing the same thing.
>
> **[0:55](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-import-statements?u=76281980&t=55)** We're saying, "Let's import this so that I can use this file system module."
>
> **[1:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-import-statements?u=76281980&t=60)** But the import statements were something that never used to work in Node.js.
>
> **[1:06](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-import-statements?u=76281980&t=66)** Now that we have later versions of node though, we can always make one little switch to our package.json so that we can use these imports.
>
> **[1:16](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-import-statements?u=76281980&t=76)** So all we need to do to our package.json is we're going to add a key called type, and then a value called module, and now we should be able to use that import statement.
>
> **[1:26](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-import-statements?u=76281980&t=86)** So we're going to go back here, we're going to remove this, we're going to hit Save, and then we'll try running this again and we should see the same result.
>
> **[1:35](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-import-statements?u=76281980&t=95)** So both of these are the same.
>
> **[1:37](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-import-statements?u=76281980&t=97)** You're going to see both of these used kind of interchangeably across your Node.js projects, but if you prefer to use the import statements, that's how you would do it.
>
> **[1:46](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-import-statements?u=76281980&t=106)** If you wanted to import specific modules, you would do so the same way just by destructuring them from that import, excellent.
>
> **[1:55](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-import-statements?u=76281980&t=115)** So now I can get rid of the require statement and we should be ready to start to import some packages with NPM.

> [!info]- Semantic Content
>
> **Code Keywords:** require (3), module (3), let (2), this, (2), this. (1)
> **CLI Commands:** node (6), make (3), npm (2)
> **File Paths:** node.js (4), package.json (2)
> **Env Vars:** npm (2)
> **UI Navigation:** switch to (1)
> **Speakers:** - [instructor] (1)

#### Using minimist
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-minimist?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-minimist?u=76281980&t=0)** - [Instructor] Now that we have our project set up, we're ready to start coding.
>
> **[0:03](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-minimist?u=76281980&t=3)** I'm over here at the npm JS registry.
>
> **[0:06](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-minimist?u=76281980&t=6)** And I'm going to search for a package that helps us use argv.
>
> **[0:10](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-minimist?u=76281980&t=10)** So this package here called minimist is going to help us parse some arguments that are passed via the console.
>
> **[0:17](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-minimist?u=76281980&t=17)** So let's go ahead and install this.
>
> **[0:18](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-minimist?u=76281980&t=18)** We're going to open up the correct folder.
>
> **[0:22](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-minimist?u=76281980&t=22)** We're going to make sure that we're navigated to the start folder where we have the package.json and we're going to npm install minimist, M-I-N-I-M-I-S-T.
>
> **[0:34](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-minimist?u=76281980&t=34)** This is going to install this in our project inside of this folder called node_modules.
>
> **[0:39](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-minimist?u=76281980&t=39)** Now something that's interesting to know is that this package.json is going to manage all of these dependencies for us.
>
> **[0:45](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-minimist?u=76281980&t=45)** So if I was to delete this, for example, I could delete the node_modules folder.
>
> **[0:51](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-minimist?u=76281980&t=51)** I could run an npm install.
>
> **[0:54](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-minimist?u=76281980&t=54)** Npm install or npm i if you're running short on time is going to install all of the dependencies that are part of the project.
>
> **[1:03](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-minimist?u=76281980&t=63)** So when I hit Enter here, we'll notice that the node_modules folder is back.
>
> **[1:08](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-minimist?u=76281980&t=68)** We also see this package-lock.json, which in later versions of npm is going to be installed, as well as a dependency manager.
>
> **[1:17](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-minimist?u=76281980&t=77)** So let's go ahead and go to the index.
>
> **[1:20](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-minimist?u=76281980&t=80)** We're going to replace this.
>
> **[1:22](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-minimist?u=76281980&t=82)** We're going to say import parseArgs from minimist.
>
> **[1:27](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-minimist?u=76281980&t=87)** Cool.
>
> **[1:28](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-minimist?u=76281980&t=88)** Then we're going to destructure from this.
>
> **[1:31](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-minimist?u=76281980&t=91)** We're going to say time.
>
> **[1:33](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-minimist?u=76281980&t=93)** We'll set that equal to parseArgs and what we'll pass into this is process.argv.
>
> **[1:39](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-minimist?u=76281980&t=99)** This is where the arguments are going to come from.
>
> **[1:43](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-minimist?u=76281980&t=103)** Next, we'll say if there's no time, we're going to throw a new Error that says time is required.
>
> **[1:54](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-minimist?u=76281980&t=114)** Then we're going to say if parseInt time throw new Error.
>
> **[1:59](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-minimist?u=76281980&t=119)** And what this is going to do is it's going to if I pass a string or something else, we will pass the message time must be a number.
>
> **[2:12](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-minimist?u=76281980&t=132)** Awesome.
>
> **[2:12](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-minimist?u=76281980&t=132)** Finally, we're going to console.log time.
>
> **[2:16](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-minimist?u=76281980&t=136)** Next, I'll scroll down a little bit, and we're going to run node index once again.
>
> **[2:25](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-minimist?u=76281980&t=145)** This is going to say --time is required because I need to pass this in as an argument.
>
> **[2:31](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-minimist?u=76281980&t=151)** So I'll pass the flag --time and then I'll just say six.
>
> **[2:36](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-minimist?u=76281980&t=156)** So this is going to pass that back to me.
>
> **[2:39](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-minimist?u=76281980&t=159)** Now if I try that again and I say pancakes, a string of some sort, it's going to let me know that time must be a number.
>
> **[2:47](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-minimist?u=76281980&t=167)** So both of our error messages are working.
>
> **[2:49](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-minimist?u=76281980&t=169)** We've tested that and then if I do pass a number with that time flag, like four, we see that is returned to us.
>
> **[2:57](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-minimist?u=76281980&t=177)** So we've used a public Node package to help us parse some arguments.
>
> **[3:02](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-minimist?u=76281980&t=182)** We didn't have to invent anything to parse the arguments ourselves.
>
> **[3:05](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-minimist?u=76281980&t=185)** We just found and used a tool to help us.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (7), let (3), this. (3), delete (2), throw (2)
> **CLI Commands:** npm (6), node (2), make (1)
> **Prerequisites:** install (6), set up (1)
> **Code Identifiers:** node_modules (3), parseargs (2), parseint (1)
> **File Paths:** package.json (2), package-lock.json (1)
> **UI Navigation:** go to (1), scroll down (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Using tiny-timer
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=0)** - [Instructor] All right, let's continue to work with our little timer app.
>
> **[0:04](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=4)** I want to make sure that we are navigated to the correct folder first.
>
> **[0:09](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=9)** Looks like we are and then we'll run node index.
>
> **[0:12](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=12)** Now, if you ever see this error, cannot find package, it's just because you have to run an npm install again inside of this folder.
>
> **[0:20](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=20)** The next thing we'll do is run it again and we should see that this is running.
>
> **[0:24](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=24)** Remember, we have to pass a time flag and then we should get that value back.
>
> **[0:29](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=29)** We'll take another look over here at the npm registry.
>
> **[0:32](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=32)** I'm going to look for something called tiny-timer.
>
> **[0:34](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=34)** Tiny-timer is a countdown timer that we can use to call a few different functions.
>
> **[0:40](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=40)** So we have our timer.on function.
>
> **[0:44](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=44)** Every little tick is going to console.log that message.
>
> **[0:47](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=47)** So what we are really looking to do is we'll collect this value from our users, and then we're going to pump it into these functions.
>
> **[0:56](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=56)** The first thing we want to do is install it.
>
> **[0:59](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=59)** Tiny-timer.
>
> **[1:01](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=61)** This is now part of our dependencies.
>
> **[1:03](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=63)** Pretty cool.
>
> **[1:05](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=65)** The next thing we'll do is we're going to go to index.js.
>
> **[1:09](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=69)** We will import.
>
> **[1:10](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=70)** Typically, we add these at the top.
>
> **[1:12](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=72)** We're going to import our Timer from tiny-timer.
>
> **[1:17](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=77)** So now that I've imported this, I need to create a value called Timer, which is going to be set equal to an instance of a new timer.
>
> **[1:27](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=87)** Then we'll call some of these events.
>
> **[1:29](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=89)** Timer.on.
>
> **[1:30](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=90)** So every time we tick, we're going to go ahead and return.
>
> **[1:35](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=95)** We'll say console.log tick.
>
> **[1:39](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=99)** Then we'll say timer.on.
>
> **[1:42](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=102)** Another one of these events is done.
>
> **[1:45](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=105)** So we'll say console.log, the ticking is complete.
>
> **[1:51](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=111)** Cool.
>
> **[1:52](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=112)** Now we need to start the timer.
>
> **[1:54](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=114)** So we'll say timer.start.
>
> **[1:56](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=116)** And then we'll say we want the timer to run for 5,000 milliseconds or five seconds.
>
> **[2:03](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=123)** Awesome.
>
> **[2:04](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=124)** So let's go ahead and run this.
>
> **[2:12](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=132)** And we'll see that this ticks for five times.
>
> **[2:16](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=136)** And then we'll say that the ticking is complete.
>
> **[2:18](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=138)** Now, more cool than this would be to grab our time value from the user.
>
> **[2:24](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=144)** We could say time times 1,000.
>
> **[2:28](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=148)** So now we'll try it again.
>
> **[2:30](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=150)** We'll pass in six here.
>
> **[2:32](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=152)** So we're collecting that info from the terminal and then we're calling those different functions.
>
> **[2:37](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=157)** Remember, this project is depending on these two dependencies from npm.
>
> **[2:42](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=162)** So there's a whole host of different things that you can include from that npm registry so that you don't have to write everything from scratch.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), pass (2), continue (1), function (1), import. (1)
> **CLI Commands:** npm (4), make (1), node (1), find (1)
> **Prerequisites:** install (2)
> **File Paths:** index.js (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Managing packages
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/managing-packages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/managing-packages?u=76281980&t=0)** - So far, we've created a little countdown module that's dependent on a few other Node.js packages in order to make this work.
>
> **[0:08](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/managing-packages?u=76281980&t=8)** So if you ever see a folder that doesn't have the dependencies installed, all you need to do of course is run NPM install and you'll get that node modules folder.
>
> **[0:17](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/managing-packages?u=76281980&t=17)** The other thing that's really nice about this package JSON file is something we haven't talked about yet.
>
> **[0:22](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/managing-packages?u=76281980&t=22)** We have this script's key here and the script's key has a test command with no test specified.
>
> **[0:29](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/managing-packages?u=76281980&t=29)** So we actually want to replace tests.
>
> **[0:31](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/managing-packages?u=76281980&t=31)** We're going to replace this with start, and then here, we'll get rid of this command and we'll say node index.
>
> **[0:40](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/managing-packages?u=76281980&t=40)** Now what we'll see if we run NPM start is there's an error and that's because I'm not passing along those arguments with that start script.
>
> **[0:48](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/managing-packages?u=76281980&t=48)** So I could say time, five, try that again.
>
> **[0:53](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/managing-packages?u=76281980&t=53)** And we should be able to see our module is now running.
>
> **[0:56](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/managing-packages?u=76281980&t=56)** So you can create as many of these as you'd like to.
>
> **[0:59](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/managing-packages?u=76281980&t=59)** We can add different scripts for all sorts of different commands.
>
> **[1:04](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/managing-packages?u=76281980&t=64)** So if we change the name of this to say main and I try to run NPM main, then I'm going to see an error.
>
> **[1:13](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/managing-packages?u=76281980&t=73)** But if I try NPM run main, then this will run that command.
>
> **[1:18](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/managing-packages?u=76281980&t=78)** So NPM start, you can get away with not typing run, but other types of commands you would have to write NPM run main.
>
> **[1:27](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/managing-packages?u=76281980&t=87)** Excellent. So I'm going to swap this back to start one other quick NPM command I wanted to tell you about.
>
> **[1:33](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/managing-packages?u=76281980&t=93)** Say we tried to install human timer.
>
> **[1:36](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/managing-packages?u=76281980&t=96)** This is another NPM package.
>
> **[1:38](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/managing-packages?u=76281980&t=98)** And then later on we decide actually if we're only using tiny timer, we don't need it.
>
> **[1:43](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/managing-packages?u=76281980&t=103)** What we can do is we can get rid of this from the dependencies.
>
> **[1:47](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/managing-packages?u=76281980&t=107)** It's still inside of this dependencies folder.
>
> **[1:51](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/managing-packages?u=76281980&t=111)** If we run NPM LS, we're going to see that this is here.
>
> **[1:54](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/managing-packages?u=76281980&t=114)** It's saying that this is extraneous.
>
> **[1:56](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/managing-packages?u=76281980&t=116)** It's not being used in our program.
>
> **[1:58](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/managing-packages?u=76281980&t=118)** So what we can do now is we can run NPM prune and this is going to help make sure that our node modules matches the package JSON by removing any missing modules.
>
> **[2:11](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/managing-packages?u=76281980&t=131)** So a lot of power can be found in this simple package JSON file and we'll continue to use this as our course continues.

> [!info]- Semantic Content
>
> **CLI Commands:** npm (10), node (4), make (2), ls (1)
> **Env Vars:** npm (10), json (3)
> **Code Keywords:** module (2), continue (1)
> **Prerequisites:** install (2)
> **File Paths:** node.js (1)
> **Speakers:** - so (1)


### 3. Web Servers

> [↑ Back to Table of Contents](#table-of-contents)

#### File servers with serve
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/file-servers-with-serve?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/file-servers-with-serve?u=76281980&t=0)** - [Instructor] Earlier in this course, we built an HTTP server capable of serving web files over HTTP.
>
> **[0:06](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/file-servers-with-serve?u=76281980&t=6)** We had to handle file requests for each type of file and respond with the appropriate headers and content.
>
> **[0:13](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/file-servers-with-serve?u=76281980&t=13)** It was a tedious task to build a file server with the core HTTP module, but we know it can be done.
>
> **[0:19](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/file-servers-with-serve?u=76281980&t=19)** We know how to do it.
>
> **[0:20](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/file-servers-with-serve?u=76281980&t=20)** However, when it comes time to get your work done, we can rely on the NPM community.
>
> **[0:26](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/file-servers-with-serve?u=76281980&t=26)** There are a number of file servers that can serve static files over HTTP.
>
> **[0:31](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/file-servers-with-serve?u=76281980&t=31)** What we have here inside of our start file, we have a folder called client.
>
> **[0:36](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/file-servers-with-serve?u=76281980&t=36)** It looks like the front end team delivered a client web application that's ready to go.
>
> **[0:40](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/file-servers-with-serve?u=76281980&t=40)** If we want to take a look at these files, we need to serve them over HTTP with a web server.
>
> **[0:47](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/file-servers-with-serve?u=76281980&t=47)** So there's actually a module that can help us do this.
>
> **[0:50](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/file-servers-with-serve?u=76281980&t=50)** Now, one way that we can run certain types of packages is we can run a command called NPX.
>
> **[0:57](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/file-servers-with-serve?u=76281980&t=57)** This is Node JSs and NPMs file runner and we're going to run a project called serve and what serve is going to take in is whatever the location of these client files is which is ./client.
>
> **[1:13](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/file-servers-with-serve?u=76281980&t=73)** Serve allows us to select a file folder and serve it over HTTP.
>
> **[1:18](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/file-servers-with-serve?u=76281980&t=78)** So now this is telling us that we have this running on Localhost 3000.
>
> **[1:22](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/file-servers-with-serve?u=76281980&t=82)** If we go to Localhost 3000 in the browser, we should see our client template for our dictionary.
>
> **[1:29](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/file-servers-with-serve?u=76281980&t=89)** In the remaining videos in this section, we're going to take a look at how we can actually make this application work by working with some methods that are part of HTTP.

> [!info]- Semantic Content
>
> **Env Vars:** http (7), npm (1), npx (1)
> **CLI Commands:** npm (1), npx (1), node (1), make (1)
> **Code Keywords:** module (2), static (1), this. (1)
> **Cross-References:** earlier in (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### Intro to Express
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=0)** - [Instructor] The serve module allows us to serve static content, but that's just one option.
>
> **[0:05](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=5)** In order to complete the task of building the ski dictionary web application, we're going to need some more control.
>
> **[0:11](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=11)** We will use express to help us build and customize a web-app that serves files and handles definitions over our rest API.
>
> **[0:20](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=20)** So what we want to do first, aside from making sure we're in the right folder, is our project doesn't have.
>
> **[0:26](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=26)** It has this client folder, but we also need a package JSON.
>
> **[0:30](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=30)** If we don't care too much about configuring these options, we can run an npm knit -y.
>
> **[0:35](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=35)** This is going to initialize our project with all of the defaults.
>
> **[0:38](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=38)** So we have start, version, all of those things.
>
> **[0:41](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=41)** You can always go in here and change this.
>
> **[0:44](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=44)** I could call this ski-dictionary.
>
> **[0:46](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=46)** We could customize anything else we wanted to.
>
> **[0:50](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=50)** The next thing we'll do is we'll run npm install express to install our express dependency.
>
> **[0:56](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=56)** This is going to install this into the project.
>
> **[0:59](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=59)** The next thing we want to do.
>
> **[1:01](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=61)** At the same level as the client folder and the package JSON and all of this other stuff, we want to create a file called server.js.
>
> **[1:10](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=70)** Now, server.js, we could go back into the package JSON and correct this to be our main file.
>
> **[1:17](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=77)** We also want to make sure that we're using the type module so that we can use those imports.
>
> **[1:23](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=83)** So let's go to our server next, and we're going to import express from express.
>
> **[1:29](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=89)** Express is one of the most popular NPM libraries to use.
>
> **[1:33](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=93)** It helps us build websites and APIs quickly by taking care of a lot of the monotonous tasks that are necessary to handle every single edge case when building a server.
>
> **[1:44](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=104)** Express is also completely extendable and customizable.
>
> **[1:47](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=107)** So we can build a bunch of different types of web-apps using it.
>
> **[1:51](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=111)** So we've imported this, then we're going to create an instance of our app by calling the express function, then we're going to call app.use.
>
> **[2:01](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=121)** We're going to go to the home route.
>
> **[2:03](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=123)** We're going to stand up our server.
>
> **[2:05](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=125)** So we'll say express static, let's serve up our ./client folder.
>
> **[2:11](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=131)** Next, we're going to call app.listen.
>
> **[2:14](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=134)** We will send 3,000, and we'll say console log, ski dictionary running at 3000.
>
> **[2:26](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=146)** Cool, now we can run our project running node server, and we should see our dictionary running again, but if we take a look at the console, we might see an error that is trying to look for these definitions, at /dictionary, but it cannot get this.
>
> **[2:46](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=166)** So we need to use express to serve up these definitions.
>
> **[2:51](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=171)** First, we're going to need some definitions.
>
> **[2:53](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=173)** So we'll say ski-terms.json, and let's go ahead and define these ski terms.
>
> **[2:59](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=179)** So term one, (chuckles) we'll say, the term is hook, and this one defined means to send your body off a cliff,
>
> **[3:15](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=195)** then we're going to use the term rip, and this one is defined as to ski at a high rate of speed.
>
> **[3:29](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=209)** Perfect, so now what I can do, if I go back to our server, is we can import this.
>
> **[3:37](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=217)** So we'll import ski-terms.
>
> **[3:40](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=220)** Okay, so now that we've done this, we need to add one other thing here.
>
> **[3:44](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=224)** We need to add assert, type json.
>
> **[3:50](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=230)** So what we're doing here is we're importing this file but in order to make this work, in order to make sure that our file is recognized, we're using kind of this experimental syntax here.
>
> **[4:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=240)** So we need to go ahead and say this is the type of the file that we're importing.
>
> **[4:05](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=245)** You probably won't always have to do this, but this is, if you see an error that says that you need to define a type, this is how you would do so.
>
> **[4:13](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=253)** The next thing we want to do is underneath app.use, we're going to call app.get, and here we're going to use dictionary as our route, and we're going to add a callback function here saying request, response, and then we'll say response.json, skiTerms.
>
> **[4:34](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=274)** Now I want to stop this, Control + C.
>
> **[4:37](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=277)** I will call node server once more.
>
> **[4:39](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=279)** This is giving us this experimental warning, which we understand, but the more exciting part here is if we go back to localhost 3000, and we hit a refresh, we see that our error has been cleared.
>
> **[4:52](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=292)** We also see that this information is being displayed.
>
> **[4:55](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=295)** So now, if we go to the dictionary route /dictionary, all of our JSON raw data will be added here.
>
> **[5:01](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=301)** We have completed our first full stack application.
>
> **[5:04](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=304)** We built a web server and an API using express, but before we are ready to launch, we're going to need to be able to add new terms using this form here, which is exactly what we're going to do in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (4), this. (3), let (3), module (2), static (2)
> **CLI Commands:** npm (3), make (3), node (2)
> **Env Vars:** json (4), api (2), npm (1)
> **File Paths:** server.js (2), ski-terms.json (1), response.json (1)
> **Cross-References:** go back to (2), in the next (1)
> **UI Navigation:** go to (3)
> **Prerequisites:** install (3)
> **Code Identifiers:** skiterms (1)

#### Handling POST requests
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980&t=0)** - [Instructor] So if we fill out this form and click add term, we're going to notice that there is another error.
>
> **[0:05](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980&t=5)** So it's saying that it failed to load a resource and that we are failing to fetch.
>
> **[0:10](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980&t=10)** So let's take a look at the request with the Chrome browser tools here.
>
> **[0:13](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980&t=13)** If we go to the network tab, we're seeing that we're failing to load a resource.
>
> **[0:17](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980&t=17)** Remember that these HTTP requests are readable stream, so instead of handling the data ourselves, we can use an NPM called the body parser here to do the heavy lifting.
>
> **[0:28](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980&t=28)** So let's install body parser and we're going to add a post route to our application.
>
> **[0:36](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980&t=36)** So we're going to say, import body parser from body parser and then we'll import fs from fs.
>
> **[0:52](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980&t=52)** Once we've done this, we can call app.post and we're posting this to the /dictionary route.
>
> **[1:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980&t=60)** And here, we're going to use, as the second argument to post, body parser.
>
> **[1:07](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980&t=67)** There's a function called .json that's going to parse this as json and then we need to add a callback function to say what we want to do.
>
> **[1:15](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980&t=75)** So we're going to say request and response, skiTerms.push.
>
> **[1:22](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980&t=82)** We're going to push whatever those terms are into the request body.
>
> **[1:26](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980&t=86)** And then we'll call response .json.
>
> **[1:29](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980&t=89)** Then we'll pass along the status of success.
>
> **[1:33](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980&t=93)** And the term is whatever is in the request.body.
>
> **[1:37](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980&t=97)** So every time a new term is added, we can save it to a local file in our system.
>
> **[1:42](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980&t=102)** Obviously, we would probably save data like this to a database, but this tiny app doesn't have one, so the file system will have to do.
>
> **[1:51](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980&t=111)** Let's go ahead and create a save function to make this work.
>
> **[1:55](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980&t=115)** So we'll say const save.
>
> **[1:58](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980&t=118)** And this is going to use from the file system module, we'll say fs.writeFile.
>
> **[2:05](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980&t=125)** And we're going to write this to data/ski-terms.json.
>
> **[2:10](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980&t=130)** We will JSON.stringify this, skiTerms, null, and two, and then we'll pass along a function to handle any errors.
>
> **[2:26](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980&t=146)** So we'll say if there's an error, throw the error.
>
> **[2:31](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980&t=151)** And then finally, we want to add this function.
>
> **[2:34](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980&t=154)** We'll call it, save.
>
> **[2:35](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980&t=155)** Let's go ahead and try to run this once more.
>
> **[2:41](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980&t=161)** We will go back to our local host 3000.
>
> **[2:45](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980&t=165)** This time we'll say, send to jump off of something.
>
> **[2:50](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980&t=170)** A lot of skiing is just jumping, right?
>
> **[2:53](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980&t=173)** And when we add that term, we're going to add it to the page.
>
> **[2:56](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980&t=176)** Now we can add new terms through the client.
>
> **[2:59](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980&t=179)** The client uses HTTP to send the data and we can capture that data and do whatever we want with it.
>
> **[3:07](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980&t=187)** One quick thing I'm noticing too is that we're getting no such file or directory with our write file and that's just because I don't have it in a folder called data.
>
> **[3:17](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980&t=197)** I messed up.
>
> **[3:18](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980&t=198)** So we'll go back and try that again.
>
> **[3:21](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980&t=201)** And we need to refresh, and we'll say send to jump off of something big, add the term, we see it there.
>
> **[3:32](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980&t=212)** If we go to our file, we see it's added to that list.
>
> **[3:37](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980&t=217)** All right, there we go.
>
> **[3:39](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980&t=219)** We're writing two files.
>
> **[3:40](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980&t=220)** We are displaying that data in our UI.
>
> **[3:44](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980&t=224)** Our skier dictionary is really starting to come together.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), let (4), this, (2), pass (2), const (1)
> **Env Vars:** http (2), npm (1), json (1)
> **Code Identifiers:** skiterms (2), writefile (1)
> **CLI Commands:** npm (1), make (1)
> **UI Navigation:** go to (2)
> **File Paths:** data/ski-terms.json (1)
> **Cross-References:** go back to (1)
> **Prerequisites:** install (1)

#### Handling DELETE requests
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980&t=0)** - [Instructor] There's one last thing to do.
>
> **[0:01](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980&t=1)** If we go to the Network tab, and then we click on the trashcan icon next to one of these terms, and then we say OK, we're noticing that there's a 404 error here.
>
> **[0:12](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980&t=12)** There's some sort of a problem.
>
> **[0:13](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980&t=13)** Cannot DELETE /dictionary/huck.
>
> **[0:16](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980&t=16)** Our client is trying to send a delete request to our API.
>
> **[0:20](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980&t=20)** And the term that the client wants to delete is being described by the route itself, /dictionary/huck.
>
> **[0:26](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980&t=26)** So no problem.
>
> **[0:28](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980&t=28)** Express automatically handles routing parameters for us, which makes it easier to capture and use this data.
>
> **[0:35](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980&t=35)** So let's go ahead and add a delete route to our API.
>
> **[0:39](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980&t=39)** All right, so we want to call app.delete.
>
> **[0:42](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980&t=42)** We're going to use dictionary/ and then we'll use a parameter here.
>
> **[0:48](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980&t=48)** We know it's a parameter because we use the colon.
>
> **[0:50](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980&t=50)** So whatever that term is.
>
> **[0:52](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980&t=52)** Huck, drop, whatever.
>
> **[0:55](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980&t=55)** So that'll take the place of that term.
>
> **[0:59](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980&t=59)** Then we want to call a callback function, request and response, and we'll call skiTerms.filter.
>
> **[1:11](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980&t=71)** This is going to check to make sure that our term does not match whatever the request params.term is.
>
> **[1:25](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980&t=85)** In other words what we're saying here is if the term isn't being deleted, let's keep it in the list.
>
> **[1:32](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980&t=92)** We will call the save function again and then we'll call response.json and use the status.
>
> **[1:44](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980&t=104)** We'll say removed is whatever the request.params.term is and then finally, we'll set a newLength, which is whatever the length of the new array is after that term has been removed.
>
> **[1:57](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980&t=117)** So let's go ahead and stop that.
>
> **[1:59](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980&t=119)** We will start it again with Node Server.
>
> **[2:02](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980&t=122)** We'll go back to our page and we'll make sure that we're refreshing.
>
> **[2:07](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980&t=127)** Now let's delete huck.
>
> **[2:09](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980&t=129)** OK.
>
> **[2:10](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980&t=130)** And it's looking like skiTerms.length.
>
> **[2:16](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980&t=136)** Typos are our best friend.
>
> **[2:19](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980&t=139)** Let's delete huck again and it's working.
>
> **[2:22](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980&t=142)** We see a 200 code.
>
> **[2:24](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980&t=144)** So we're noticing this error about assignment to a constant variable.
>
> **[2:28](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980&t=148)** And that's because when we're importing this, it's assuming that skiTerms is a constant.
>
> **[2:34](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980&t=154)** We can use let definitions equal skiTerms where we'll replace the variable everywhere it's used.
>
> **[2:41](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980&t=161)** So definitions.
>
> **[2:44](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980&t=164)** Definitions.
>
> **[2:46](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980&t=166)** Definitions.
>
> **[2:49](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980&t=169)** Definitions.
>
> **[2:52](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980&t=172)** Nice.
>
> **[2:53](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980&t=173)** So we have worked around that issue.
>
> **[2:56](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980&t=176)** We should be able to click on the trashcan icons and make all of that work as we want.
>
> **[3:02](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980&t=182)** Our application is complete.
>
> **[3:04](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980&t=184)** It reads and displays a ski dictionary and it allows users to add terms.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (7), let (6), function (2), finally, (1), this, (1)
> **Code Identifiers:** skiterms (4), newlength (1)
> **CLI Commands:** make (3), node (1)
> **Env Vars:** api (2), delete (1)
> **UI Navigation:** click on (2), go to (1)
> **Definitions:** in other words (1), is a  (1)
> **File Paths:** response.json (1)
> **API Endpoints:** delete  (1)

#### Using Express middleware
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-express-middleware?u=76281980)

> [!transcript]- Transcript
>
> **[1:22](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-express-middleware?u=76281980&t=82)** We're going to make sure that we're in
>
> **[1:44](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-express-middleware?u=76281980&t=104)** we're going to see that all of this is being logged right here.
>
> **[1:47](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-express-middleware?u=76281980&t=107)** So we're getting a little bit of detail about exactly what's going on on the app.
>
> **[1:52](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-express-middleware?u=76281980&t=112)** So this is pretty cool.
>
> **[1:53](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-express-middleware?u=76281980&t=113)** We've been able to use middleware Express supports this pattern and we can use it for all sorts of different things.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)


### 4. WebSockets

> [↑ Back to Table of Contents](#table-of-contents)

#### Creating a WebSocket
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=0)** - [Instructor] WebSockets allow for a true two-way connection between the client and the server.
>
> **[0:05](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=5)** Clients connect to a socket server, and the connection remains open until a client disconnects.
>
> **[0:11](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=11)** And while that connection is open, data can be passed to and from the server.
>
> **[0:16](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=16)** Again, it looks like our front-end team has delivered the files to us inside of this client application.
>
> **[0:21](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=21)** And all of these files should run in the browser.
>
> **[0:24](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=24)** So let's make sure that we're in the start file, and we're going to run that same command.
>
> **[0:30](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=30)** But this time we want to also supply a flag where we're going to run this on port 5000.
>
> **[0:38](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=38)** So we can go ahead and pass that along.
>
> **[0:41](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=41)** It's going to run this on port 5000, and if we go back to our browser, localhost 5000, it should bring up our chat application.
>
> **[0:52](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=52)** So if we take a look at our browser console, it's saying WebSocket connection to ws localhost 3000 has failed.
>
> **[0:59](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=59)** So it's trying to connect to this WebSocket, but that's not available.
>
> **[1:04](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=64)** So we're going to install a package that's going to help us construct a simple WebSocket.
>
> **[1:10](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=70)** We'll run npm i ws.
>
> **[1:13](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=73)** This is going to install that for us.
>
> **[1:15](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=75)** And then we can start to use it inside of our server file.
>
> **[1:19](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=79)** The first thing we'll import is WebSocketServer from ws.
>
> **[1:23](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=83)** And then we're going to say const wss is a new WebSocketServer that's running on port 3000.
>
> **[1:33](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=93)** Next, we're going to manage this connection using ws.on.
>
> **[1:39](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=99)** The event we're listening for is that connection, and will pass in a callback function here.
>
> **[1:45](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=105)** Now, our callback function will say console.log.
>
> **[1:50](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=110)** So inside of this console log we'll say, "new socket connected."
>
> **[1:54](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=114)** We're also going to manage our disconnections here.
>
> **[1:56](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=116)** So we'll say ws.on, close, and here we will say console.log user disconnected.
>
> **[2:08](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=128)** And then finally, outside of this, we're going to add a general message, console.log, chat server waiting for connections on ws://localhost:3000.
>
> **[2:21](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=141)** And then I'm also noticing that I need to use the right variable name.
>
> **[2:24](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=144)** We'll say wss.on.
>
> **[2:27](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=147)** And then we're going to also pass in ws as the value here.
>
> **[2:33](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=153)** So make that quick tweak wss, and then ws refers to the WebSocket inside of this context.
>
> **[2:41](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=161)** All right, cool.
>
> **[2:42](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=162)** So what we want to do here is we want to have two different terminals running; one for our client, one for our server.
>
> **[2:48](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=168)** So we can hit the split terminal icon.
>
> **[2:52](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=172)** We're going to type npx serve./client.
>
> **[2:57](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=177)** And then we'll pass the port as the flag here with port 5000.
>
> **[3:03](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=183)** So that'll get running over there.
>
> **[3:05](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=185)** And then we'll also run node server in the other terminal.
>
> **[3:09](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=189)** And our chat server will be waiting for connections there.
>
> **[3:12](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=192)** So now if we hit refresh where it connected, we no longer see that error.
>
> **[3:16](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=196)** And now we can say, "hello."
>
> **[3:19](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=199)** And while we're not capturing those just yet, it'll say, "New server is connected."
>
> **[3:24](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=204)** If I open another browser window to localhost 5000, we're going to see that new socket connected.
>
> **[3:32](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=212)** If I close one, we'll see that this is disconnected.
>
> **[3:35](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=215)** It's important to remember that WebSocket connections remain open until they disconnect.
>
> **[3:41](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=221)** In the next lesson, we'll learn to pass data between the client and the server using these WebSockets.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (5), function (2), let (1), const (1), finally, (1)
> **CLI Commands:** make (2), npm (1), npx (1), node (1)
> **Ports:** port 5000 (3), port 3000 (1), :3000 (1)
> **Cross-References:** go back to (1), in the next (1)
> **Tools:** terminal (2)
> **Definitions:** is a  (1), refers to (1)
> **Prerequisites:** install (2)
> **URLs:** [localhost:3000](https://localhost:3000) (1)

#### Broadcasting messages with a WebSocket
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=0)** - [Instructor] In the last lesson, we started building the socket server for a browser based chat application.
>
> **[0:05](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=5)** Now the front end team, as we saw, had delivered this client folder that had a bunch of static assets in it that we needed to set up a server behind.
>
> **[0:13](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=13)** So let's go ahead and start that client.
>
> **[0:15](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=15)** We're going to do so with npx serve.
>
> **[0:18](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=18)** We'll use ./client for the name of the directory.
>
> **[0:21](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=21)** And then we'll also pass a port with the -p flag so that this will run on localhost 5000.
>
> **[0:28](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=28)** So now, if we go back to our application, localhost 5000 doesn't have a server.
>
> **[0:33](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=33)** We need to run our server with node server.
>
> **[0:39](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=39)** Now, if we hit refresh, we should see that a new socket has been connected and this will occur for any other tab that I open up.
>
> **[0:48](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=48)** So notice that when I start to type messages, those are not captured anywhere.
>
> **[0:54](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=54)** Nothing is happening.
>
> **[0:55](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=55)** So what we want to do next is we want to create a new array of messages that we can populate.
>
> **[1:01](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=61)** And we're also going to react to this on method every time there's a new message.
>
> **[1:08](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=68)** So we'll say message.
>
> **[1:10](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=70)** We will console.log that message.
>
> **[1:14](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=74)** We will call messages.push, and we'll push each one of those messages in.
>
> **[1:21](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=81)** I want to make sure that message is being captured as a string.
>
> **[1:24](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=84)** So we'll say message.toString.
>
> **[1:27](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=87)** We'll also say if message.toString equals exit.
>
> **[1:34](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=94)** So if the user types exit into the terminal, then we'll call ws.close.
>
> **[1:40](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=100)** We'll call wss.clients.forEach.
>
> **[1:45](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=105)** So this is going to iterate through all of the clients that are connected, all the browser windows that are connected, and we're going to send that message to each one.
>
> **[1:54](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=114)** So we'll say message.toString.
>
> **[1:58](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=118)** Awesome. Let's also do this.
>
> **[2:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=120)** We're going to call ws.send.
>
> **[2:02](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=122)** We'll say, "Welcome to Live Chat!"
>
> **[2:06](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=126)** And then we'll say if messages.length.
>
> **[2:10](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=130)** So if there's any sort of length to that, we'll call ws.send chat currently in session, and we'll call messages.forEach message, ws.send(message.toString()).
>
> **[2:35](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=155)** Cool. Let's try running all of this again.
>
> **[2:39](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=159)** We'll run npx serve, all of that good stuff.
>
> **[2:48](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=168)** We are also going to stop and restart our server.
>
> **[2:54](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=174)** Now if I hit refresh, we should see all of these messages being displayed.
>
> **[3:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=180)** If I go back, we're seeing this buffer.
>
> **[3:03](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=183)** So what we need to do to see those messages logged here is call toString on the message.
>
> **[3:09](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=189)** So let's stop that and restart it.
>
> **[3:13](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=193)** And then it's actually working now.
>
> **[3:16](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=196)** So we want to make sure that we have two of these side by side.
>
> **[3:18](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=198)** We'll see localhost 5000.
>
> **[3:21](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=201)** This time, we'll say, "Hey" from this window.
>
> **[3:24](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=204)** We'll see it pop up here.
>
> **[3:26](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=206)** I'll say, "Window on the right says hello."
>
> **[3:31](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=211)** And that should pop up over here.
>
> **[3:34](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=214)** Now we've built a chat application using the basic web socket spec, but this spec has some limitations.
>
> **[3:41](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=221)** In the next section, we'll learn to use a popular library for building socket applications, [Socket.IO](https://Socket.IO).

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), static (1), pass (1), this. (1)
> **Code Identifiers:** tostring (5), foreach (2)
> **CLI Commands:** npx (2), make (2), node (1)
> **Cross-References:** in the last (1), as we saw (1), go back to (1), in the next (1)
> **Documentation:** spec (2)
> **URLs:** [socket.io](https://socket.io) (1)
> **Tools:** terminal (1)
> **Prerequisites:** set up (1)

#### Creating a WebSocket client with Socket.IO
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=0)** - [Instructor] In the last lesson, we created a web socket and connected to it using the native web socket object in the browser.
>
> **[0:06](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=6)** Native web sockets are really cool but there are some edge cases that a native web socket cannot handle on its own.
>
> **[0:12](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=12)** If we want our apps to work in a hundred percent of the browsers, we need to have a solution that can still work if web sockets aren't supported.
>
> **[0:20](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=20)** [Socket.IO](https://Socket.IO) is a web socket framework that falls back to different data polling techniques in environments that don't support web sockets.
>
> **[0:28](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=28)** So what this means is that you can build a real time app that's supported in every browser.
>
> **[0:34](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=34)** So let's start to build our server using [Socket.IO](https://Socket.IO).
>
> **[0:38](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=38)** We're going to install [socket.io](https://socket.io) into our project.
>
> **[0:44](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=44)** And then I'm just going to replace everything that's part of this file.
>
> **[0:48](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=48)** I'm going to delete it all and replace it with a server.
>
> **[0:53](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=53)** So we're going to go ahead and pull create server from the HTTP module.
>
> **[1:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=60)** Then we're going to import a function called server that comes from [socket.io](https://socket.io).
>
> **[1:05](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=65)** Then we're going to stand up an HTTP server.
>
> **[1:08](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=68)** So we'll say create server and we'll call .listen on our 3000 port.
>
> **[1:15](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=75)** Next, we will create a variable called io.
>
> **[1:19](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=79)** That's set equal to a new server constructor that we'll pass our HTTP server to.
>
> **[1:25](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=85)** Then we need to handle connections.
>
> **[1:28](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=88)** So we'll say whenever there's a connection, we want to take the information about the socket and we want to console log.
>
> **[1:37](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=97)** So this will let us know how many clients are currently connected to our server.
>
> **[1:44](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=104)** Then we're going to call socket.on.
>
> **[1:47](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=107)** So whenever a new message comes in, we'll say message.
>
> **[1:56](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=116)** Here, we'll console log whatever that socket ID is.
>
> **[2:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=120)** So what that refers to is whatever the number of the connection is.
>
> **[2:08](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=128)** So if we're all connected to the same chat application, each one of us would have our own client ID.
>
> **[2:16](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=136)** Then we're going to call io.sockets.emit.
>
> **[2:20](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=140)** We'll borrow from that event emitter pattern.
>
> **[2:24](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=144)** And every time we have a message, we're going to emit an event with the message and the socket ID.
>
> **[2:33](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=153)** So what do we want to have happen when a disconnect happens?
>
> **[2:36](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=156)** Let's keep it simple and just console log that something has been disconnected and we'll also grab the socket ID.
>
> **[2:45](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=165)** So let's go ahead and console log socket server here.
>
> **[2:48](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=168)** Socket server will just let us know that this is that particular app.
>
> **[2:52](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=172)** Okay, so we've built our server.
>
> **[2:55](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=175)** The next thing that we want to do is we need to create a lightweight client for our socket server, just so that we can test it.
>
> **[3:04](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=184)** Our front end team has not delivered a chat implementation with [Socket.IO](https://Socket.IO).
>
> **[3:08](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=188)** It doesn't really matter because the scope of web sockets goes way beyond the browser.
>
> **[3:13](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=193)** Any type of client can connect to a web socket to send and receive data.
>
> **[3:19](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=199)** So instead of our browser app, we're going to build a little CLI, a command line interface application that will allow us to communicate with our socket server via the terminal.
>
> **[3:30](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=210)** So let's go ahead and install a separate package called [socket.io](https://socket.io)-client.
>
> **[3:38](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=218)** We use this when we want to consume some data.
>
> **[3:41](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=221)** So inside of this file, we're going to import a function called io from the [socket.io](https://socket.io)-client package.
>
> **[3:50](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=230)** Then we're going to create a variable called socket that's going to set up our listener.
>
> **[3:57](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=237)** So we'll say HTTP local host 3000 then we'll call socket.on connect and we'll say console log socket IO client is connected.
>
> **[4:12](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=252)** All right, great.
>
> **[4:13](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=253)** So let's go ahead and run our server.
>
> **[4:15](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=255)** That's running the socket server.
>
> **[4:17](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=257)** We're also going to run with node socket client.
>
> **[4:21](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=261)** It'll say socket client is connected and then it'll let us know that one connection has happened.
>
> **[4:30](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=270)** And then let's also do it again.
>
> **[4:32](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=272)** We'll say node socket client and then we have two connections there.
>
> **[4:38](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=278)** There are all types of clients that we can build that will allow people to chat over this socket.
>
> **[4:43](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=283)** This means that people can chat from the terminal or the browser or a phone application and all communicate via the same server.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), function (2), delete (1), module (1), pass (1)
> **URLs:** [socket.io](https://socket.io) (7)
> **Env Vars:** http (4), cli (1)
> **Tools:** terminal (2), command line (1)
> **Definitions:** is a  (1), refers to (1), means that (1)
> **Prerequisites:** install (2), set up (1)
> **CLI Commands:** node (2)
> **Cross-References:** in the last (1)

#### Emitting Socket.IO events
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/emitting-socket-io-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/emitting-socket-io-events?u=76281980&t=0)** - [Instructor] Another benefit of using [Socket.IO](https://Socket.IO) is its ability to raise events by name.
>
> **[0:04](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/emitting-socket-io-events?u=76281980&t=4)** The Web Socket Spec only handles message events so that means that all types of data has to be served through the same event.
>
> **[0:11](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/emitting-socket-io-events?u=76281980&t=11)** It would take us a lot of code to separate different chat environments and push many different types of data using only one event.
>
> **[0:18](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/emitting-socket-io-events?u=76281980&t=18)** So let's handle these different events.
>
> **[0:20](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/emitting-socket-io-events?u=76281980&t=20)** So in the previous lesson we created the emit event where we're passing in the name of the event called message.
>
> **[0:26](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/emitting-socket-io-events?u=76281980&t=26)** So the way that I can deal with this on the client is I can say socket.on message.
>
> **[0:33](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/emitting-socket-io-events?u=76281980&t=33)** We'll take in the message and the id and we'll console.log the id and the message.
>
> **[0:45](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/emitting-socket-io-events?u=76281980&t=45)** Next, we want to say process.stdin.on.
>
> **[0:51](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/emitting-socket-io-events?u=76281980&t=51)** So anytime we get some new data, in other words any time I collect information from the terminal from our user, we want to take that data and we want to call socket.emit.
>
> **[1:03](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/emitting-socket-io-events?u=76281980&t=63)** We want to admit the chat event and use data.toString.trim to trim off any extra white space.
>
> **[1:14](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/emitting-socket-io-events?u=76281980&t=74)** Back to our terminal.
>
> **[1:16](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/emitting-socket-io-events?u=76281980&t=76)** I have two different sides here.
>
> **[1:18](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/emitting-socket-io-events?u=76281980&t=78)** The first is our server, so we'll node the server.
>
> **[1:22](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/emitting-socket-io-events?u=76281980&t=82)** The second is our client, so we'll say socket-client.
>
> **[1:27](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/emitting-socket-io-events?u=76281980&t=87)** We'll notice that our one connection is made.
>
> **[1:31](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/emitting-socket-io-events?u=76281980&t=91)** If we say hey, this will give us our client ID and the message.
>
> **[1:37](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/emitting-socket-io-events?u=76281980&t=97)** So if I was to open up a new one, we'll run node socket-client, two connections over in the server.
>
> **[1:48](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/emitting-socket-io-events?u=76281980&t=108)** So if we say hello from client 2 it'll give us a different ID, but also the message.
>
> **[1:54](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/emitting-socket-io-events?u=76281980&t=114)** This is only a brief introduction to all of the things that are possible with web sockets.
>
> **[1:59](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/emitting-socket-io-events?u=76281980&t=119)** Real-time applications are the future of the internet and no JS of course supports them.

> [!info]- Semantic Content
>
> **CLI Commands:** node (2)
> **Code Keywords:** raise (1), let (1)
> **Tools:** terminal (2)
> **Definitions:** means that (1), in other words (1)
> **Code Identifiers:** tostring (1)
> **URLs:** [socket.io](https://socket.io) (1)
> **Documentation:** spec (1)
> **Speakers:** - [instructor] (1)


### 5. Node.js Testing

> [↑ Back to Table of Contents](#table-of-contents)

#### Creating modular projects
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-modular-projects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-modular-projects?u=76281980&t=0)** - [Instructor] One of the principles of Node.js is small modules.
>
> **[0:03](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-modular-projects?u=76281980&t=3)** This means that, as JavaScript developers, we should take advantage of modularity by breaking code up into bite size modules that are focused on a specific task.
>
> **[0:13](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-modular-projects?u=76281980&t=13)** So we've brought back the ski dictionary website and the API that we built back in chapter three.
>
> **[0:18](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-modular-projects?u=76281980&t=18)** So let's take a look at our index.js file.
>
> **[0:22](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-modular-projects?u=76281980&t=22)** We have actually broken this project down into smaller files.
>
> **[0:26](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-modular-projects?u=76281980&t=26)** So I wanted to take you on a little tour.
>
> **[0:29](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-modular-projects?u=76281980&t=29)** First things first, our index file is going to import a file called app from the app.js file, and we'll call app.listen to listen on this port.
>
> **[0:38](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-modular-projects?u=76281980&t=38)** Then we move to the app.js file.
>
> **[0:40](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-modular-projects?u=76281980&t=40)** So the app.js file, check it out.
>
> **[0:42](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-modular-projects?u=76281980&t=42)** We are importing a few different dependencies.
>
> **[0:45](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-modular-projects?u=76281980&t=45)** We have express, we have body-parser, and we have a couple other custom files that I built.
>
> **[0:50](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-modular-projects?u=76281980&t=50)** This is going to take care of all of the express stuff for us, so that as I visit certain routes, the right content will be displayed.
>
> **[0:58](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-modular-projects?u=76281980&t=58)** We also have this file called dictionary-routes.
>
> **[1:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-modular-projects?u=76281980&t=60)** So dictionary-routes is using the express router to actually stand up routes for different endpoints.
>
> **[1:08](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-modular-projects?u=76281980&t=68)** So we can post our new data, we can delete data, we can do all sorts of things, but all of this is going to happen inside of this file.
>
> **[1:16](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-modular-projects?u=76281980&t=76)** Finally, we have a library file.
>
> **[1:19](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-modular-projects?u=76281980&t=79)** Lib stands for library.
>
> **[1:21](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-modular-projects?u=76281980&t=81)** This is just a bunch of custom functions that we can use across the project.
>
> **[1:24](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-modular-projects?u=76281980&t=84)** When we want to run this file, all we need to do is run node ./src.
>
> **[1:31](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-modular-projects?u=76281980&t=91)** This is going to infer that we mean the index.js file as the main entry point for our project.
>
> **[1:37](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-modular-projects?u=76281980&t=97)** And then we should be able to do all of the things that we did before, which is to add, remove, do all of the things that we do with our Skier Dictionary.
>
> **[1:46](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-modular-projects?u=76281980&t=106)** Following the small modules principle is going to help us achieve success in a lot of ways, but most importantly, breaking up our code into small independent modules makes it easier to test.

> [!info]- Semantic Content
>
> **File Paths:** app.js (3), index.js (2), node.js (1)
> **Code Keywords:** let (1), delete (1), finally, (1)
> **CLI Commands:** node (2)
> **Definitions:** means that (1), stands for (1)
> **Env Vars:** api (1)
> **Speakers:** - [instructor] (1)

#### Configuring Babel with Jest
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/configuring-babel-with-jest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/configuring-babel-with-jest?u=76281980&t=0)** - [Instructor] In order to write some tests for our application, we actually need to do some configuration with a tool called Babel.
>
> **[0:06](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/configuring-babel-with-jest?u=76281980&t=6)** Babel is a JavaScript compiler that you can use to make all sorts of transformations with your code.
>
> **[0:11](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/configuring-babel-with-jest?u=76281980&t=11)** We see this a lot used with the newest versions of JavaScript that aren't compatible in every single browser.
>
> **[0:18](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/configuring-babel-with-jest?u=76281980&t=18)** We run it through the process of working with Babel, and then we're able to use those new features right away.
>
> **[0:24](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/configuring-babel-with-jest?u=76281980&t=24)** We also see it used and React with JSX, so we can compile all of those JSX tags to JavaScript syntax that runs in the browser.
>
> **[0:33](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/configuring-babel-with-jest?u=76281980&t=33)** The reason we'll be doing this is for two reasons, really.
>
> **[0:36](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/configuring-babel-with-jest?u=76281980&t=36)** We want to be able to use these import statements, and we also want to be able to work with this new syntax here, this assert syntax, and if we happen to have any brand new JavaScript syntax in our project, this would help us with that as well.
>
> **[0:51](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/configuring-babel-with-jest?u=76281980&t=51)** So, of course, (chuckles) in order to work with this, we're going to need to install a bunch of stuff.
>
> **[0:57](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/configuring-babel-with-jest?u=76281980&t=57)** So the things we want to install are babel-jest @ babel/core @babel/preset-env,
>
> **[1:09](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/configuring-babel-with-jest?u=76281980&t=69)** and then the long one.
>
> **[1:11](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/configuring-babel-with-jest?u=76281980&t=71)** I'm sorry in advance, is @babel, plugin-syntax-import-assertions.
>
> **[1:21](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/configuring-babel-with-jest?u=76281980&t=81)** Now, again, I'm going to be providing all of this to you in the student files.
>
> **[1:25](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/configuring-babel-with-jest?u=76281980&t=85)** So if you want to just check this out in the finished folder for this chapter, no worries, and then the last thing I want to add here is -D.
>
> **[1:33](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/configuring-babel-with-jest?u=76281980&t=93)** So this is going to install all of these to our dev dependencies.
>
> **[1:37](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/configuring-babel-with-jest?u=76281980&t=97)** What's cool about this is that the dev dependencies will be only installed in a development environment, not in production.
>
> **[1:45](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/configuring-babel-with-jest?u=76281980&t=105)** So it's going to keep our project lighter-weight, and then it's going to relegate all of these development dependencies to a single location.
>
> **[1:53](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/configuring-babel-with-jest?u=76281980&t=113)** Great, so now that I've done this, I should be able to see this in our package.json.
>
> **[1:59](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/configuring-babel-with-jest?u=76281980&t=119)** We should be able to scroll down and see that all of these have been added here, nice.
>
> **[2:05](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/configuring-babel-with-jest?u=76281980&t=125)** The next step we need to take is we need to add to this another key, called jest, and this jest command is going to help us handle transformations.
>
> **[2:20](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/configuring-babel-with-jest?u=76281980&t=140)** So we're going to use a little regular expression here.
>
> **[2:23](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/configuring-babel-with-jest?u=76281980&t=143)** So this text that I've added here, we're explicitly defining this because we're using babel-jest as a transformer for our JavaScript code, and what this is going to do is it's going to map all of our type script files, our JavaScript files, our JSX files.
>
> **[2:39](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/configuring-babel-with-jest?u=76281980&t=159)** All of this will be mapped to the babel-jest module.
>
> **[2:43](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/configuring-babel-with-jest?u=76281980&t=163)** If you want to find this in the finished folder, it'll be there for you.
>
> **[2:46](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/configuring-babel-with-jest?u=76281980&t=166)** The final thing we need to do for this setup step is we want to create a new file at the root of the start folder, and it's going to be called babel.config.json.
>
> **[2:58](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/configuring-babel-with-jest?u=76281980&t=178)** So this is going to be a JSON file that sets any presets.
>
> **[3:02](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/configuring-babel-with-jest?u=76281980&t=182)** Now, the babel, preset-env that we installed before, Think of this as just being a transformer for Babel based on whatever environment we're using.
>
> **[3:13](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/configuring-babel-with-jest?u=76281980&t=193)** So in this case, we're using Node.js.
>
> **[3:15](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/configuring-babel-with-jest?u=76281980&t=195)** It's going to perform transformations based on that environment.
>
> **[3:19](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/configuring-babel-with-jest?u=76281980&t=199)** We're also adding this plugins key here.
>
> **[3:21](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/configuring-babel-with-jest?u=76281980&t=201)** So the plugins that we're going to use in this case, babel, plugin-syntax-import-assertions.
>
> **[3:32](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/configuring-babel-with-jest?u=76281980&t=212)** So remember, in this file here, where we're importing the ski terms, and we had to add that assertion.
>
> **[3:40](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/configuring-babel-with-jest?u=76281980&t=220)** This is experimental JavaScript syntax that might not always be recognized by Babel.
>
> **[3:45](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/configuring-babel-with-jest?u=76281980&t=225)** So this is going to help us out with that.
>
> **[3:47](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/configuring-babel-with-jest?u=76281980&t=227)** So now that we have our Babel environment set up, in the next video, we're going to actually write those tests.
>
> **[3:53](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/configuring-babel-with-jest?u=76281980&t=233)** Just as a reminder if you're ever checking out the Babel site, click on Try it out.
>
> **[3:57](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/configuring-babel-with-jest?u=76281980&t=237)** There's a pretty cool REPL there that shows you how code goes in and comes out, and (chuckles) what I mean by that is if we were to use some new JavaScript syntax, like JSX, this is going to be the output based on however that transformation occurs.
>
> **[4:14](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/configuring-babel-with-jest?u=76281980&t=254)** So Babel is a really nice tool.
>
> **[4:16](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/configuring-babel-with-jest?u=76281980&t=256)** You see it in a ton of projects, and this can be a nice way of figuring out how things are working behind the scenes.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (2), case, (2), assert (1), module (1)
> **Env Vars:** jsx (4), json (1), repl (1)
> **Prerequisites:** install (3), setup (1), set up (1)
> **File Paths:** package.json (1), babel.config.json (1), node.js (1)
> **CLI Commands:** make (1), find (1), node (1)
> **UI Navigation:** scroll down (1), click on (1)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)

#### Writing a test
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=0)** - [Instructor] In order to write some tests, we'll use a framework.
>
> **[0:03](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=3)** Now, there are dozens of test frameworks, Mocha, Jasmine, Qunit, and they're all designed to do the same thing, which is run tests and report on the status of those tests.
>
> **[0:13](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=13)** All of these different testing libraries also have a similar syntax.
>
> **[0:17](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=17)** So once you test in one framework, you'll be able to write tests in them all.
>
> **[0:22](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=22)** So we're going to go ahead and use Jest, which is a testing library that was developed at Facebook.
>
> **[0:27](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=27)** We're going to use a module called supertest, which makes it easier for us to test different routes.
>
> **[0:33](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=33)** We're going to npm i Jest in supertest and install them with capital D and install them with - capital D to install them in our dev dependencies.
>
> **[0:43](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=43)** So once we've done that, we can move over to our folder, and we've done such an excellent job (chuckles) of breaking things down into smaller files.
>
> **[0:53](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=53)** So we're going to create a new file called app.test.js.
>
> **[0:58](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=58)** Whenever we end a file with that .test extension, it's going to, when we run Jest, run those tests.
>
> **[1:06](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=66)** So let's go ahead and import a couple things.
>
> **[1:08](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=68)** We're going to import request from supertest, and we're also going to import the system under test.
>
> **[1:17](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=77)** In other words, we're going to import the function that we're going to test, which is our app file.
>
> **[1:23](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=83)** So ./app is where that lives, then we're going to use our first described statement.
>
> **[1:29](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=89)** So think of a described statement as being a test suite.
>
> **[1:33](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=93)** It is a collection of all of the tests that we're going to write.
>
> **[1:37](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=97)** This described statement takes in the name of the test that we're going to write, which I just called API Tests, and we also have a callback function that we'll send here too.
>
> **[1:46](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=106)** Within that callback function, we will add another function called it.
>
> **[1:49](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=109)** So it is going to tell us what the test actually is.
>
> **[1:52](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=112)** So we're going to say, GET, /dictionary, and then we're going to write an async function here, which will do the following.
>
> **[2:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=120)** We're going to say const, body.
>
> **[2:04](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=124)** This is going to be de-structured from our request.
>
> **[2:08](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=128)** So request is going to request details from the app.
>
> **[2:11](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=131)** We're going to get the dictionary route here.
>
> **[2:16](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=136)** So then what we'll do is we'll say, expect, the body.length.
>
> **[2:21](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=141)** So we'll expect all of the data that's coming back from that route to equal three, and that's because we have, in our data folder, skiTerms.json.
>
> **[2:32](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=152)** There are three items inside of that array.
>
> **[2:35](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=155)** So now what I can do is open up our terminal again, and we're going to try to run this with the Node.js executable, which we find in our node_modules folder.
>
> **[2:46](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=166)** What I mean by that is this is how we would dig into that node_modules folder, where we installed Jest and run those tests.
>
> **[2:56](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=176)** Now, at this moment, we're seeing that this test has failed, and the reason for this is because it can't import something out of a module.
>
> **[3:05](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=185)** So what I want to do here is I want to make an adjustment.
>
> **[3:09](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=189)** We're not done with configuration just yet.
>
> **[3:11](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=191)** We're going to npm-install another package, called cross-environment, cross-env.
>
> **[3:18](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=198)** It's another one of our dev dependencies, and we're going to make use of this inside of our package.json as a command.
>
> **[3:26](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=206)** So right now, this script for testing really is nothing.
>
> **[3:29](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=209)** We want to replace this.
>
> **[3:30](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=210)** We'll say cross-env NODE_OPTIONS and now in order to use all of the experimental syntax that we're using, we need to say experimental-vm-modules jest.
>
> **[3:46](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=226)** So this is going to be what happens whenever I run that test.
>
> **[3:49](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=229)** It's going to support those import statements, and cross-environment will help us do that, regardless of how we have our projects set up.
>
> **[3:58](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=238)** So now let's try this again.
>
> **[3:59](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=239)** We're going to run npm test.
>
> **[4:01](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=241)** Remember npm test is like npm start.
>
> **[4:04](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=244)** You don't have to say npm run test and check it out.
>
> **[4:07](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=247)** Our test passed. How exciting is that?
>
> **[4:10](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=250)** When I compare the data from the dictionary route to the test that I wrote as this assertion, we find that there is a match, and our test has passed.
>
> **[4:20](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=260)** So all of the different functions that you send to our described statement here, you can wrap them inside of it, or you can create different described statements, but we see our first test passing.
>
> **[4:32](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=272)** We're able to test the data that's on that route and compare it with what our expectations are.
>
> **[4:38](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=278)** Pretty cool.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), module (2), let (2), async (1), const (1)
> **CLI Commands:** npm (6), find (2), make (2), node (1)
> **Prerequisites:** install (4), set up (1)
> **File Paths:** app.test.js (1), skiterms.json (1), node.js (1), package.json (1)
> **Definitions:** is a  (3), in other words (1)
> **Code Identifiers:** node_modules (2), skiterms (1)
> **Env Vars:** api (1), node_options (1)
> **Tools:** terminal (1)

#### Using code coverage
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-code-coverage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-code-coverage?u=76281980&t=0)** - [Instructor] Code coverage provides us with a measure of how much of our code has been covered by tests.
>
> **[0:04](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-code-coverage?u=76281980&t=4)** It can be used as a metric to decide if you should write more tests.
>
> **[0:08](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-code-coverage?u=76281980&t=8)** Jest has code coverage built in.
>
> **[0:10](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-code-coverage?u=76281980&t=10)** So what I'm going to do is add another key here to our scripts, and we'll say all of this stuff, but then we'll send the --coverage flag.
>
> **[0:23](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-code-coverage?u=76281980&t=23)** Now, if I run npm run coverage here, all of our statements, our functions, our lines have been tested.
>
> **[0:32](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-code-coverage?u=76281980&t=32)** So we have some tests for our app, but it looks like we have a little bit more work to do on our other files.
>
> **[0:38](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-code-coverage?u=76281980&t=38)** Something to keep in mind about coverage is sometimes people become obsessed with the idea of getting 100% coverage on everything.
>
> **[0:47](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-code-coverage?u=76281980&t=47)** Focus more on the quality of your tests, rather than the quantity of them.
>
> **[0:52](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-code-coverage?u=76281980&t=52)** It's really nice to have 100% code coverage, but it's not always required.
>
> **[0:56](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-code-coverage?u=76281980&t=56)** I think the general rule is 80% or above, and you should be in good shape.
>
> **[1:01](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-code-coverage?u=76281980&t=61)** So, just note that this is an option to you.
>
> **[1:03](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-code-coverage?u=76281980&t=63)** You can pass the --coverage flag, and this is built in directly to Jest.

> [!info]- Semantic Content
>
> **Warnings:** keep in mind (1), note that (1)
> **CLI Commands:** npm (1)
> **Code Keywords:** pass (1)
> **Definitions:** is an  (1)
> **Best Practices:** general rule (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/next-steps?u=76281980&t=0)** - Now that you've finished this course, you're in a great place to really work with Node.js on real projects.
>
> **[0:06](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/next-steps?u=76281980&t=6)** If you want to take your learning to the next level, we have a whole series of Node.js courses that you can explore.
>
> **[0:12](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/next-steps?u=76281980&t=12)** Node.js Design Patterns will teach you about the essential patterns that can be used to solve common coding challenges.
>
> **[0:18](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/next-steps?u=76281980&t=18)** Advanced Node.js will teach you techniques about asynchronous programming and data streaming with Node.js, and then Advanced Node.js Scaling Applications shows techniques for scaling Node projects with approaches like database optimization, creating microservices, and cloning.
>
> **[0:35](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/next-steps?u=76281980&t=35)** Thank you so much for going on this journey with me.
>
> **[0:37](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/next-steps?u=76281980&t=37)** I hope you have fun building a ton of cool apps with Node.js.

> [!info]- Semantic Content
>
> **CLI Commands:** node (8)
> **File Paths:** node.js (7)
> **Speakers:** - now (1)


## Instructor

- [[Eve Porcello]]

## Resources

- Exercise files available

## Skills Covered

- Web Servers
- Software Testing
- Node.js
- Software Deployment

## Path Context

### In [[Explore Web Development with Node.js]]
← [[Advanced Express]] | **7 of 11** | [[Building RESTful APIs with Node.js and Express]] →

## Appears In

- [[Explore Web Development with Node.js]]

## Related Courses

_Courses sharing skills:_

- [[Software Testing- Planning Tests for Mobile]] — Software Testing
- [[Complete Guide to AWS Software Deployment]] — Software Deployment
- [[Web Servers and APIs using C++]] — Web Servers
- [[Learning Full-Stack JavaScript Development- MongoDB, Node, and React]] — Node.js
- [[Building a Website with Node.js and Express.js]] — Node.js

---

[↑ Back to top](#)