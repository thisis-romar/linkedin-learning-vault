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
  - '[Explore Web Development with Node.js](../../Paths/Web%20Development/Learning%20Paths/Explore%20Web%20Development%20with%20Node.js.md)'
prev_courses:
  - '[Advanced Express](Advanced%20Express.md)'
next_courses:
  - '[Building RESTful APIs with Node.js and Express](Building%20RESTful%20APIs%20with%20Node.js%20and%20Express.md)'
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
created: 2026-05-03
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
  - [Going beyond the basics in Node](#going-beyond-the-basics-in-node)
  - [What you should know](#what-you-should-know)
  - [Working with VS Code](#working-with-vs-code)
- [**1. The HTTP Module**](#1-the-http-module) (5 videos)
  - [Making a request with the request method](#making-a-request-with-the-request-method)
  - [Making a request with the GET method](#making-a-request-with-the-get-method)
  - [Building a web server](#building-a-web-server)
  - [Creating a file server](#creating-a-file-server)
  - [Serving JSON data](#serving-json-data)
- [**2. npm**](#2-npm) (5 videos)
  - [The package.json file](#the-packagejson-file)
  - [Using import statements](#using-import-statements)
  - [Using minimist](#using-minimist)
  - [Using tiny-timer](#using-tiny-timer)
  - [Managing packages](#managing-packages)
- [**3. Web Servers**](#3-web-servers) (5 videos)
  - [File servers with serve](#file-servers-with-serve)
  - [Intro to Express](#intro-to-express)
  - [Handling POST requests](#handling-post-requests)
  - [Handling DELETE requests](#handling-delete-requests)
  - [Using Express middleware](#using-express-middleware)
- [**4. WebSockets**](#4-websockets) (4 videos)
  - [Creating a WebSocket](#creating-a-websocket)
  - [Broadcasting messages with a WebSocket](#broadcasting-messages-with-a-websocket)
  - [Creating a WebSocket client with Socket.IO](#creating-a-websocket-client-with-socketio)
  - [Emitting Socket.IO events](#emitting-socketio-events)
- [**5. Node.js Testing**](#5-nodejs-testing) (4 videos)
  - [Creating modular projects](#creating-modular-projects)
  - [Configuring Babel with Jest](#configuring-babel-with-jest)
  - [Writing a test](#writing-a-test)
  - [Using code coverage](#using-code-coverage)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Going beyond the basics in Node](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/going-beyond-the-basics-in-node?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/going-beyond-the-basics-in-node?u=76281980&t=0)** - [Eve] When you started to work with [Node.js](../../Skills/Web%20Development/Node.js.md) you probably learned how to install it and how to perform some simple tasks like logging, processing arguments from the command line, and working with the file system. Once you understand those features though, you might be asking yourself, what's next with Node.js? In this course, we're going to find out what's next. We'll go beyond the basics to talk about some of the most essential features of Node.js. We'll create servers, we'll use [npm](../../Skills/Web%20Development/npm.md), we'll handle testing, and we'll work with web sockets. Everything you need to work with Node.js in the real world. My name is Eve Porcello and I've been a [JavaScript](../../Skills/Software%20Development/JavaScript.md) developer and instructor for over a decade. When I started teaching JavaScript, it was mostly thought of as this language to use for hovers and button clicks, today, it's more powerful than ever. And it's more important than ever that developers from a range of backgrounds understand how to work with Node.js projects. We're going to be creating a lot of really cool demos together in this course. So I don't want to waste any more time. Let's get into it. Let's start building with Node.js.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Node.js](../../Skills/Web%20Development/Node.js.md) (6), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [npm](../../Skills/Web%20Development/npm.md) (1)
> **CLI Commands:** node (6), find (1), npm (1)
> **File Paths:** node.js (6)
> **Env Vars:** npm (1)
> **Tools:** command line (1)
> **Prerequisites:** install (1)
> **Speakers:** - [eve] (1)

#### [What you should know](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/what-you-should-know?u=76281980&t=0)** - [Instructor] Let's make sure we have everything we need for the course. Now the first thing we can do is open up our terminal or command prompt and type node -v and this should return the version number that we're currently using. So if this says anything above version 17 or 18, you should be okay, you don't really need to download anything new. If you want to get the latest version, or if you type this in and you see an error, you want to grab the latest version from the [Node.js](../../Skills/Web%20Development/Node.js.md) website. So here on the website, they just pushed a new version of this site. It's looking pretty slick. All you need to do is click on Node.js LTS, or if you wanted to get kind of the most recent features, you could always click down here, want new features sooner. If you're curious about more on these versions and things like that, you can always click on Download and fill out this little installer. I want this version for the following operating system, running one of these. So that's an option for you as well. If you do need to download it though, it'll take you through the process of using an installer. So this is going to download this. I'm going to open that installer and it's going to pop open a window that looks like this. We'll just hit Continue a bunch of times until we install. It may ask for your password as well.
>
> **[1:34](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/what-you-should-know?u=76281980&t=94)** Alright, and then you should be all set. Something to remember is if you're installing this for the first time, sometimes you need to close and reopen your terminal window or command prompt to make sure that this is installed. This is Node working...

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Node.js](../../Skills/Web%20Development/Node.js.md) (2)
> **CLI Commands:** node (4), make (2)
> **Tools:** terminal (2), command prompt (2)
> **File Paths:** node.js (2)
> **UI Navigation:** click on (2)
> **Env Vars:** lts (1)
> **Versions:** version 17 (1)
> **Prerequisites:** install (1)

#### [Working with VS Code](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/working-with-vs-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/working-with-vs-code?u=76281980&t=0)** - [Instructor] The tool I'm going to be using to edit the code for this class is Visual Studio. If you haven't used Visual Studio Code before, it's a free app that you can use for all sorts of different languages. So if you'd like to download it, you can. This will identify what type of machine you're using to access this. And then you can just go ahead and download this, kind of like we did with [Node.js](../../Skills/Web%20Development/Node.js.md) before. We are going to show this in our Finder and then this should download this to our computer. So you can drag the Exercise Files folder over Visual Studio Code in the doc and this will open this up for you. Now, something to note is that, and this is a question I get asked all the time, so if you're looking for a theme, meaning you're looking for a color scheme for your installation of VS code, what you can do is go to the Code menu, go to Preferences, go to Color Theme. And this is going to expose a whole list of the available ones, as well as additional color themes that you can install. So the one that I'm actually using here is called Night Owl. So you should be able to find this in that list. So there's Night Owl Dark, there's Night Owl Light if you prefer that mode. I'm going to stick with Night Owl Dark for the purposes of the class today. Night Owl, there we go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Node.js](../../Skills/Web%20Development/Node.js.md) (1)
> **Tools:** visual studio (3), vs code (1)
> **UI Navigation:** go to (3)
> **CLI Commands:** node (1), find (1)
> **Definitions:** is a  (1), is called (1)
> **File Paths:** node.js (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** kind of like (1)


### 1. The HTTP Module

[↑ Back to Table of Contents](#table-of-contents)

#### [Making a request with the request method](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=0)** - [Instructor] We may need to make HTTP requests in order to upload and download files and information from HTTP servers. [Node.js](../../Skills/Web%20Development/Node.js.md) has two modules for this, the http module. This is the one used for a request to sites without a security certificate, and the https module, which is going to make a request to a site with a security certificate. So what I want to do here is make a request for some data, and I'm going to make this request to this endpoint here. So you can choose whatever Wikipedia article you want to grab. I've grabbed Cher here, and this is going to be the endpoint that I'll send this request to. The first thing we want to do, inside of our file called index.js, is I'm going to import, I'm going to require, the https module, and the file system module. From here, I want to define an object filled with options, and this options object is going to have a few important keys on it. The first is a host name. So where are we making this request? This is sort of the root of our endpoint here. Nice, and then the next thing that we want is a port. So any of these requests that are running over HTTPS will use port 443, then we'll specify the path. So I want to make the request to [wikipedia.org/something](https://wikipedia.org/something). So the path will be here, wiki/Cher, and then we also want to define the method, which is get. We're making a get request for this information.
>
> **[1:34](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=94)** Now, once I've done this, I'm going to call https.request. We'll supply the options as the first argument, and then the callback function is going to be responsible for taking the data from that endpoint and doing something with it. So the first thing we want to do is we want to create a little container, responseBody. This is going to contain all of that data, then we're going to call a response.setEncoding, and the setEncoding function is going to take in UTF-8. So this is our character encoding for that text. Now, here, we'll use response.on. Response.on will take in a value as the first argument. This is going to be data. So this function is going to be called whenever we get some data. Now, when we make this request, it's going to be broken down into chunks. Instead of loading all of this data at once, we're going to instead just grab little bits of it so that that response can come back more efficiently. So let's take a look at what the length of the chunk is. So we'll say chunk.length, then we'll use responseBody += chunk. We'll append that data to our empty responseBody string. Finally, we'll call request.end, closing up that request. Now, we want to make sure that we're navigated to the right folder. (laughs) I often find that the fastest way to do that is to type CD, drag the start folder over here and make sure you're routed to the right place.
>
> **[3:09](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=189)** The other thing I should say is that if you hit Control + Backtick, Control + Tilde, up in your upper left-hand corner of your keyboard, that's going to open and close the embedded terminal in VS Code. So that's pretty cool. Now, to run our node app, we'll say. Now, to run this, we'll say node index. This is going to populate all of these chunks of information to us, and that's pretty cool. We see the length of the chunk. Notice that the last one is a little bit shorter because we have all of these little containers for data, and then at some point we've run out. Let's go ahead and do something with this now. We imported that file system module for a reason, I promise. So what we'll say here is we'll say response.on, end. We want to use the file system module to write to a file. So we'll say fs.writeFile. We'll call the file cher.[HTML](../../Skills/Web%20Development/HTML.md). We'll pass responseBody as the second argument, which is going to take that data and populate it into our HTML page, and then let's go ahead and add an error in case something goes wrong. We'll say if there's an error, we'll throw it. Otherwise, we want to just say file downloaded. Perfect, so at this point, we should be able to run this again. Let's type node index, and it says file downloaded. That's sort of exciting, but more exciting would be
>
> **[4:42](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-request-method?u=76281980&t=282)** to see this whole cher.html page. So now we have all of this HTML that we've downloaded from the internet. So we've built a little page scraper to grab some information from that endpoint. A lot of different cool things that you can do with https and fs combined.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (4), [Node.js](../../Skills/Web%20Development/Node.js.md) (1)
> **CLI Commands:** make (8), node (4), find (1), cd (1)
> **Code Identifiers:** responsebody (4), setencoding (2), writefile (1)
> **Env Vars:** http (2), html (2), https (1), utf (1)
> **File Paths:** cher.html (2), node.js (1), index.js (1)
> **Definitions:** is a  (3)
> **Tools:** terminal (1), vs code (1)
> **URLs:** [wikipedia.org](https://wikipedia.org) (1)

#### [Making a request with the GET method](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-get-method?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-get-method?u=76281980&t=0)** - [Instructor] In the previous video, we used the HTTPS module to make a request to Wikipedia. Now, let's refactor that code a little bit and use the https.get method. And we're also going to refactor this to use a stream. Now, the first thing we need to do is we need a url and our url is going to be the same from before. So we'll say [wikipedia.org/wiki/Cher](https://wikipedia.org/wiki/Cher). Now, once we've done that, we can delete our options object. We're also going to make some adjustments to the request function. So instead of using request, we'll use get. And we are going to pass in instead of options, we'll say url. Because we're saying that we want to make this get request, we don't have to define all of those other options, which is kind of nice. We will use the same callback function here but we're going to use slightly different code inside of this. So let's go ahead and get rid of everything that's here. And we want to create a variable called download. And we're going to set this equal to fs.createWriteStream. And we'll pass in the name of the file that we want to write to. So we'll say cher.[HTML](../../Skills/Web%20Development/HTML.md). Then we'll console.log Response started. And then we'll use response.pipe download. So we want to pipe that data into our file finally. We need to call response.on and what we'll do here is we'll console.log a message for ourselves. We'll say response finished.
>
> **[1:35](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/making-a-request-with-the-get-method?u=76281980&t=95)** Okay, perfect. So now let's try to run this again. We're going to make sure that we're navigated to the right folder. I feel like I'm not. So we'll get there. There we go. Node index said started and then finished. And then we have our HTML page over here once again. So with this code, the results are the same but the code to make this download happen is a little cleaner and more efficient using the get method.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (2)
> **CLI Commands:** make (5), node (1)
> **Env Vars:** https (1), html (1)
> **File Paths:** cher.html (1)
> **Code Identifiers:** createwritestream (1)
> **URLs:** [wikipedia.org](https://wikipedia.org) (1)
> **Cross-References:** previous video (1)
> **Definitions:** is a  (1)

#### [Building a web server](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=0)** - [Instructor] One of the coolest things that you can do with [Node.js](../../Skills/Web%20Development/Node.js.md) is build [Web Servers](../../Skills/Web%20Development/Web%20Servers.md). So let's create a simple text server. We're going to import the http module to make that work. We then are going to use the createServer function. Remember, you can always destructure this too. So if you'd rather just select an individual function from the http module, you would wrap it in curly braces and then get rid of the http dot. So from here, we're going to go ahead and pass in our callback function, which takes in a request and a response. Then we're going to write some headers. So we'll say response.writeHead. We're going to say if there's a 200 response, so if everything goes right, we want to specify a Content-Type. And the Content-Type here will just be text/plain. Then we'll say response.end. We'll say Hello World. Perfect. Now, the tricky thing here is we want to chain on another function. So at the end of createServer, we'll use .listen. And here's where we'll specify which port we want to listen on. So .listen is going to listen on 3000. Finally, here we'll give ourselves a little message to say that the web server is listening on port 3000. So from here, we want to run this. We'll run node index. Web server is running on port 3000.
>
> **[1:33](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=93)** All you need to do here so go to localhost:3000 and we'll serve up our text. We can also use our server to serve [HTML](../../Skills/Web%20Development/HTML.md). So to do that, we'll start by changing the Content-Type to html. And then instead of using response.end here, I'm going to use this template string. So I'll use a couple different back ticks. And we'll say DOCTYPE html. We'll use another opening and closing html tag. We will then use the body. This is a pretty basic html collection here. But it's very exciting when it works. Serving HTML Text. Awesome. So we need to then stop and start that server. We will refresh and we'll see that our HTML is getting served. We can also view some details about the request. So let's go ahead and try to take a look at a few of these methods. So here we'll say Serving HTML Text but next door to this, we'll say request.method. Request made for request.url. Nice. So stop your server, start your server. Go back and you'll see that this is parsing the GET method and the slash route from the request object. So if you want to dig into that further,
>
> **[3:07](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/building-a-web-server?u=76281980&t=187)** you can always console.log request. We'll say Request Details. We will start this guy up again. We'll take a look at our console and we'll see that there's all these different methods that we can make use of. So there's a ton of good information there that can help us to display the right content at the right time, and get information about the request itself. Building web servers with Node.js is one of the most powerful features of the language, and we can use the request variables to determine what type of content the user is requesting.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (8), [Node.js](../../Skills/Web%20Development/Node.js.md) (2), [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) (2)
> **CLI Commands:** node (3), make (2)
> **Env Vars:** html (4), doctype (1)
> **Code Identifiers:** createserver (2), writehead (1)
> **Ports:** port 3000 (2), :3000 (1)
> **File Paths:** node.js (2)
> **URLs:** [localhost:3000](https://localhost:3000) (1)
> **API Endpoints:** get  (1)

#### [Creating a file server](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-file-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-file-server?u=76281980&t=0)** - [Instructor] Now that we understand the basics of creating [Web Servers](../../Skills/Web%20Development/Web%20Servers.md), let's put those skills to work. We're going to build a little website here using these starter files. We have a homepage, we have a photo, we have some styles, and we have a 404 page. So we're going to need to use our knowledge of HTTP to create a server and we're going to serve up from the file system using the createReadStream function. We're going to use createServer, we're going to use the request and the response, and here we're going to use the switch statement. So given the request URL, if I go to the slash route we want to do something, now what we actually want to do is we want to serve up our [HTML](../../Skills/Web%20Development/HTML.md) file that's in that folder but a nice way to kind of wrap this functionality would be to create a function that takes in the response object, the status, the type of file, and the file name itself and we're going to use all of that data to write some headers and to stream the file. So we'll say res.writeHead will write the status, we will plug in a dynamic content type, is it a CSS file? Is it a JPG?
>
> **[1:33](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-file-server?u=76281980&t=93)** Whatever type of file it is, we'll be able to serve it and then we'll say, createReadStream with the name of the file and we want to pipe the response. Okay, so now that I've done that, I'm going to say return sendFile, we'll take in the response object, the status code is 200 here. We'll specify the file type, html, and then we'll say ./home-page.html. So we're serving up this HTML file on the home route, let's go ahead and see if this works. We'll call .listen and then we'll console.log web server at 3000. This is our first case, but we need others. So we want to make sure that we serve up this file correctly, so the file that we want to serve up is called desert mountains and if we go to the homepage.html, this is where we want to serve this up. So I'm just going to copy and paste this from that location, we're going to paste that in, we're going to make sure we're using the right file type and we'll call return sendFile response 200, this time it's image/jpg and then the location is ./desert-mountains. This is where it is in our file system. All right, we got a couple more of these,
>
> **[3:05](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-file-server?u=76281980&t=185)** I'm going to copy and paste this one. We're going to replace this here, we'll say styles.css. This is a text file, but it's a CSS text file and then the name of the file is styles.css. And then finally, whenever we create a switch statement we're going to have a default. So that is going to serve up our 404 response, 404 text/html and ./404.html. Awesome, so let's try this again. We're going to say node index, our server is running. We see Mammoth Lakes, California. It's serving up our CSS, our image, and our HTML. Now, if I was to go to some other page here, /something-else, it'll serve up the 404. So we've built our first actual web server that can be used to serve these files. This is pretty cool because now I can update my own site here simply by changing these files. So it's important to know that we're serving up all of these different file types individually. We're creating an HTML server, an image server, and a CSS server. And all of these are going to allow us to build this page. A quick note too, if we were to go to this route here where we've created this image server, so img/desert-mountains.jpg,
>
> **[4:43](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-file-server?u=76281980&t=283)** we're going to find that file there. Similarly, if we go to 404.html that's going to serve that one up to. So, all of that is working in the background to serve up all of these different files.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (10), [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) (1)
> **Env Vars:** html (4), css (4), http (1), url (1), jpg (1)
> **File Paths:** styles.css (2), 404.html (2), home-page.html (1), homepage.html (1)
> **Code Identifiers:** createreadstream (2), sendfile (2), createserver (1), writehead (1)
> **UI Navigation:** go to (5)
> **CLI Commands:** make (2), node (1), find (1)
> **Definitions:** is called (1), is a  (1)
> **Exercise Files:** starter files (1)

#### [Serving JSON data](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=0)** - [Instructor] We can also use the HTTP module to create an HTTP API or a server that's primary purpose is to serve up [JSON](../../Skills/Web%20Development/JSON.md). APIs are used to serve data to client applications. So let's go ahead and start by requiring createServer. And then we'll also require our data. Now, the data is here in this file called cats.json. A little bit of simple JSON data. So let's go ahead and require ./cats. All right, so createServer. As you might expect, we'll take in the request and the response. This function is going to write some headers for us. So if 200, then our Content-Type will be text/json. We also want to call response.end and we'll say JSON.stringify our data. Finally, we need to chain on a .listen with 3000. Okay. So at this point, we should be able stop our old server. We'll make sure that we're navigated to the right place. We will run node index. This should run our server on 3000. Let's go over here and check it out. We're serving up our JSON. Now, we can also use this to set up some simple [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md). So what we'll do inside of our createServer function
>
> **[1:32](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=92)** is we're going to say if request.url.toLowerCase equals /biscuit, then we'll say let biscuit equal data.filter. We're using a [JavaScript](../../Skills/Software%20Development/JavaScript.md) function here to take a look at each one of these cats to see if the cat.name equals Biscuit. Then we'll say response.end JSON.stringify biscuit. Perfect. So now let's go ahead and create another route for our other cat. Request.url.toLowerCase. Jungle. I wonder if my cats know how many JavaScript videos their names appear in. I would guess no. So again, we'll say cat, cat.name equals Jungle. And then we'll say response.end JSON.stringify jungle. Now, finally, we're going to add an else statement. Else is going to wrap around our existing response.end. So if I don't visit any of these routes, jungle or biscuit, I just want to see everything. I also am noticing here that I spelled biscuit wrong. So let me fix that. And we should be good to go. So let's stop this. Control + C.
>
> **[3:05](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/serving-json-data?u=76281980&t=185)** We'll clear that out. We'll run node index. This should run this. So it's giving us all of our data but if I go to /jungle, it'll give us just that data. If we go to /biscuit, it'll just give us that. So these are just a couple of the techniques that we'll need to construct APIs or middle-tier web apps that just serve JSON data to all sorts of different clients.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (9), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
> **Env Vars:** json (7), http (2), api (1)
> **CLI Commands:** cat (4), node (2), make (1)
> **Code Identifiers:** createserver (3), tolowercase (2)
> **UI Navigation:** go to (2)
> **File Paths:** cats.json (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 2. npm

[↑ Back to Table of Contents](#table-of-contents)

#### [The package.json file](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/the-package-json-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/the-package-json-file?u=76281980&t=0)** - So far we've used core modules, the modules that are installed when you install [Node.js](../../Skills/Web%20Development/Node.js.md). So these include things like HTTP, like fs, like exec, util, all sorts of things like this. We can require them by name because they're available with our installation of Node. So all I have to do is this. I don't have to install anything separately. But there are other modules out there, community modules created by open source developers, and we can install and use those modules too. Node.js community modules are hosted and shared for free with [npm](../../Skills/Web%20Development/npm.md). You can come here to find different Node modules and even publish your own. And you also can have a private account. So your business can publish and share modules privately with npm as well. So when you installed Node, you already installed npm. So if I go to npm -v, this is going to let me know what my current version is. So before we can start to use some of these npm packages, we have to create a package [JSON](../../Skills/Web%20Development/JSON.md) file. So what I'm going to do here is I'm going to run npm init. npm init will walk me through the process of setting up a file called a package JSON. So this package JSON is going to have all sorts of information about my project. So here we can give this a package name. So we're going to call this countdown. Then we're going to give it a version. So I'll just say version, and we'll say description: A countdown clock. We will define an entry point, which is our main [JavaScript](../../Skills/Software%20Development/JavaScript.md) file. We'll hit enter to skip the test command.
>
> **[1:33](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/the-package-json-file?u=76281980&t=93)** We'll hit enter to skip the [Git](../../Skills/Software%20Development/Git.md) repo. We'll say node, javascript, timers. We'll give ourselves credit as an author. We'll give it a license. We'll say an MIT license. And then we'll say that this is okay. What this should have done is it should have created a package JSON file for us. And this is going to have information about the project, but it's also going to store information about all of the dependencies that are part of our project. So the package JSON has all of the configuration information about our project. In the next video we'll install some dependencies using npm.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [npm](../../Skills/Web%20Development/npm.md) (8), [JSON](../../Skills/Web%20Development/JSON.md) (5), [Node.js](../../Skills/Web%20Development/Node.js.md) (2), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [Git](../../Skills/Software%20Development/Git.md) (1)
> **CLI Commands:** npm (8), node (6), find (1), git (1)
> **Env Vars:** json (5), http (1), mit (1)
> **Prerequisites:** install (4)
> **File Paths:** node.js (2)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Speakers:** - so (1)

#### [Using import statements](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-import-statements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-import-statements?u=76281980&t=0)** - [Instructor] So far when we've been working with [Node.js](../../Skills/Web%20Development/Node.js.md) we have imported items using the require statement, and then once they are imported we can start to log some of these things. So let's go ahead and try to run this. We're going to make sure that we're in our start folder, and then we're going to run node index to make this work. Now this will give me a little bit of information about our file system module. Whenever we have imported these modules in the past, whether they come from [npm](../../Skills/Web%20Development/npm.md) or whether they just come from Node.js itself, we have used the require statement using a pattern called CommonJS to import these modules. Now you may have seen a different syntax used which looks a little something like this, import fs from fs. Both of these lines of code are doing the same thing. We're saying, "Let's import this so that I can use this file system module." But the import statements were something that never used to work in Node.js. Now that we have later versions of node though, we can always make one little switch to our package.[JSON](../../Skills/Web%20Development/JSON.md) so that we can use these imports. So all we need to do to our package.json is we're going to add a key called type, and then a value called module, and now we should be able to use that import statement. So we're going to go back here, we're going to remove this, we're going to hit Save, and then we'll try running this again
>
> **[1:33](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-import-statements?u=76281980&t=93)** and we should see the same result. So both of these are the same. You're going to see both of these used kind of interchangeably across your Node.js projects, but if you prefer to use the import statements, that's how you would do it. If you wanted to import specific modules, you would do so the same way just by destructuring them from that import, excellent. So now I can get rid of the require statement and we should be ready to start to import some packages with NPM.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Node.js](../../Skills/Web%20Development/Node.js.md) (4), [npm](../../Skills/Web%20Development/npm.md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (2)
> **CLI Commands:** node (6), make (3), npm (2)
> **File Paths:** node.js (4), package.json (2)
> **Env Vars:** npm (2)
> **UI Navigation:** switch to (1)
> **Speakers:** - [instructor] (1)

#### [Using minimist](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-minimist?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-minimist?u=76281980&t=0)** - [Instructor] Now that we have our project set up, we're ready to start coding. I'm over here at the [npm](../../Skills/Web%20Development/npm.md) JS registry. And I'm going to search for a package that helps us use argv. So this package here called minimist is going to help us parse some arguments that are passed via the console. So let's go ahead and install this. We're going to open up the correct folder. We're going to make sure that we're navigated to the start folder where we have the package.[JSON](../../Skills/Web%20Development/JSON.md) and we're going to npm install minimist, M-I-N-I-M-I-S-T. This is going to install this in our project inside of this folder called node_modules. Now something that's interesting to know is that this package.json is going to manage all of these dependencies for us. So if I was to delete this, for example, I could delete the node_modules folder. I could run an npm install. Npm install or npm i if you're running short on time is going to install all of the dependencies that are part of the project. So when I hit Enter here, we'll notice that the node_modules folder is back. We also see this package-lock.json, which in later versions of npm is going to be installed, as well as a dependency manager. So let's go ahead and go to the index. We're going to replace this. We're going to say import parseArgs from minimist. Cool. Then we're going to destructure from this. We're going to say time.
>
> **[1:33](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-minimist?u=76281980&t=93)** We'll set that equal to parseArgs and what we'll pass into this is process.argv. This is where the arguments are going to come from. Next, we'll say if there's no time, we're going to throw a new Error that says time is required. Then we're going to say if parseInt time throw new Error. And what this is going to do is it's going to if I pass a string or something else, we will pass the message time must be a number. Awesome. Finally, we're going to console.log time. Next, I'll scroll down a little bit, and we're going to run node index once again. This is going to say --time is required because I need to pass this in as an argument. So I'll pass the flag --time and then I'll just say six. So this is going to pass that back to me. Now if I try that again and I say pancakes, a string of some sort, it's going to let me know that time must be a number. So both of our error messages are working. We've tested that and then if I do pass a number with that time flag, like four, we see that is returned to us. So we've used a public Node package to help us parse some arguments. We didn't have to invent anything to parse the arguments ourselves.
>
> **[3:05](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-minimist?u=76281980&t=185)** We just found and used a tool to help us.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [npm](../../Skills/Web%20Development/npm.md) (6), [JSON](../../Skills/Web%20Development/JSON.md) (3)
> **CLI Commands:** npm (6), node (2), make (1)
> **Prerequisites:** install (6), set up (1)
> **Code Identifiers:** node_modules (3), parseargs (2), parseint (1)
> **File Paths:** package.json (2), package-lock.json (1)
> **UI Navigation:** go to (1), scroll down (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Using tiny-timer](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=0)** - [Instructor] All right, let's continue to work with our little timer app. I want to make sure that we are navigated to the correct folder first. Looks like we are and then we'll run node index. Now, if you ever see this error, cannot find package, it's just because you have to run an [npm](../../Skills/Web%20Development/npm.md) install again inside of this folder. The next thing we'll do is run it again and we should see that this is running. Remember, we have to pass a time flag and then we should get that value back. We'll take another look over here at the npm registry. I'm going to look for something called tiny-timer. Tiny-timer is a countdown timer that we can use to call a few different functions. So we have our timer.on function. Every little tick is going to console.log that message. So what we are really looking to do is we'll collect this value from our users, and then we're going to pump it into these functions. The first thing we want to do is install it. Tiny-timer. This is now part of our dependencies. Pretty cool. The next thing we'll do is we're going to go to index.js. We will import. Typically, we add these at the top. We're going to import our Timer from tiny-timer. So now that I've imported this, I need to create a value called Timer, which is going to be set equal to an instance of a new timer. Then we'll call some of these events. Timer.on. So every time we tick,
>
> **[1:32](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=92)** we're going to go ahead and return. We'll say console.log tick. Then we'll say timer.on. Another one of these events is done. So we'll say console.log, the ticking is complete. Cool. Now we need to start the timer. So we'll say timer.start. And then we'll say we want the timer to run for 5,000 milliseconds or five seconds. Awesome. So let's go ahead and run this.
>
> **[2:12](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-tiny-timer?u=76281980&t=132)** And we'll see that this ticks for five times. And then we'll say that the ticking is complete. Now, more cool than this would be to grab our time value from the user. We could say time times 1,000. So now we'll try it again. We'll pass in six here. So we're collecting that info from the terminal and then we're calling those different functions. Remember, this project is depending on these two dependencies from npm. So there's a whole host of different things that you can include from that npm registry so that you don't have to write everything from scratch.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [npm](../../Skills/Web%20Development/npm.md) (4)
> **CLI Commands:** npm (4), make (1), node (1), find (1)
> **Prerequisites:** install (2)
> **File Paths:** index.js (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Managing packages](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/managing-packages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/managing-packages?u=76281980&t=0)** - So far, we've created a little countdown module that's dependent on a few other [Node.js](../../Skills/Web%20Development/Node.js.md) packages in order to make this work. So if you ever see a folder that doesn't have the dependencies installed, all you need to do of course is run [npm](../../Skills/Web%20Development/npm.md) install and you'll get that node modules folder. The other thing that's really nice about this package [JSON](../../Skills/Web%20Development/JSON.md) file is something we haven't talked about yet. We have this script's key here and the script's key has a test command with no test specified. So we actually want to replace tests. We're going to replace this with start, and then here, we'll get rid of this command and we'll say node index. Now what we'll see if we run NPM start is there's an error and that's because I'm not passing along those arguments with that start script. So I could say time, five, try that again. And we should be able to see our module is now running. So you can create as many of these as you'd like to. We can add different scripts for all sorts of different commands. So if we change the name of this to say main and I try to run NPM main, then I'm going to see an error. But if I try NPM run main, then this will run that command. So NPM start, you can get away with not typing run, but other types of commands you would have to write NPM run main. Excellent. So I'm going to swap this back to start one other quick NPM command I wanted to tell you about.
>
> **[1:33](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/managing-packages?u=76281980&t=93)** Say we tried to install human timer. This is another NPM package. And then later on we decide actually if we're only using tiny timer, we don't need it. What we can do is we can get rid of this from the dependencies. It's still inside of this dependencies folder. If we run NPM LS, we're going to see that this is here. It's saying that this is extraneous. It's not being used in our program. So what we can do now is we can run NPM prune and this is going to help make sure that our node modules matches the package JSON by removing any missing modules. So a lot of power can be found in this simple package JSON file and we'll continue to use this as our course continues.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [npm](../../Skills/Web%20Development/npm.md) (10), [JSON](../../Skills/Web%20Development/JSON.md) (3), [Node.js](../../Skills/Web%20Development/Node.js.md) (1)
> **CLI Commands:** npm (10), node (4), make (2), ls (1)
> **Env Vars:** npm (10), json (3)
> **Prerequisites:** install (2)
> **File Paths:** node.js (1)
> **Speakers:** - so (1)


### 3. Web Servers

[↑ Back to Table of Contents](#table-of-contents)

#### [File servers with serve](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/file-servers-with-serve?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/file-servers-with-serve?u=76281980&t=0)** - [Instructor] Earlier in this course, we built an HTTP server capable of serving web files over HTTP. We had to handle file requests for each type of file and respond with the appropriate headers and content. It was a tedious task to build a file server with the core HTTP module, but we know it can be done. We know how to do it. However, when it comes time to get your work done, we can rely on the [npm](../../Skills/Web%20Development/npm.md) community. There are a number of file servers that can serve static files over HTTP. What we have here inside of our start file, we have a folder called client. It looks like the front end team delivered a client web application that's ready to go. If we want to take a look at these files, we need to serve them over HTTP with a web server. So there's actually a module that can help us do this. Now, one way that we can run certain types of packages is we can run a command called NPX. This is Node JSs and NPMs file runner and we're going to run a project called serve and what serve is going to take in is whatever the location of these client files is which is ./client. Serve allows us to select a file folder and serve it over HTTP. So now this is telling us that we have this running on Localhost 3000. If we go to Localhost 3000 in the browser, we should see our client template for our dictionary. In the remaining videos in this section, we're going to take a look
>
> **[1:32](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/file-servers-with-serve?u=76281980&t=92)** at how we can actually make this application work by working with some methods that are part of HTTP.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [npm](../../Skills/Web%20Development/npm.md) (1)
> **Env Vars:** http (7), npm (1), npx (1)
> **CLI Commands:** npm (1), npx (1), node (1), make (1)
> **Cross-References:** earlier in (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### [Intro to Express](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=0)** - [Instructor] The serve module allows us to serve static content, but that's just one option. In order to complete the task of building the ski dictionary web application, we're going to need some more control. We will use express to help us build and customize a web-app that serves files and handles definitions over our [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) API. So what we want to do first, aside from making sure we're in the right folder, is our project doesn't have. It has this client folder, but we also need a package [JSON](../../Skills/Web%20Development/JSON.md). If we don't care too much about configuring these options, we can run an [npm](../../Skills/Web%20Development/npm.md) knit -y. This is going to initialize our project with all of the defaults. So we have start, version, all of those things. You can always go in here and change this. I could call this ski-dictionary. We could customize anything else we wanted to. The next thing we'll do is we'll run npm install express to install our express dependency. This is going to install this into the project. The next thing we want to do. At the same level as the client folder and the package JSON and all of this other stuff, we want to create a file called server.js. Now, server.js, we could go back into the package JSON and correct this to be our main file. We also want to make sure that we're using the type module so that we can use those imports. So let's go to our server next, and we're going to import express from express. Express is one of the most popular NPM libraries to use. It helps us build websites and APIs quickly
>
> **[1:37](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=97)** by taking care of a lot of the monotonous tasks that are necessary to handle every single edge case when building a server. Express is also completely extendable and customizable. So we can build a bunch of different types of web-apps using it. So we've imported this, then we're going to create an instance of our app by calling the express function, then we're going to call app.use. We're going to go to the home route. We're going to stand up our server. So we'll say express static, let's serve up our ./client folder. Next, we're going to call app.listen. We will send 3,000, and we'll say console log, ski dictionary running at 3000. Cool, now we can run our project running node server, and we should see our dictionary running again, but if we take a look at the console, we might see an error that is trying to look for these definitions, at /dictionary, but it cannot get this. So we need to use express to serve up these definitions. First, we're going to need some definitions. So we'll say ski-terms.json, and let's go ahead and define these ski terms. So term one, (chuckles) we'll say, the term is hook, and this one defined means to send your body off a cliff,
>
> **[3:15](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=195)** then we're going to use the term rip, and this one is defined as to ski at a high rate of speed.
>
> **[3:29](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=209)** Perfect, so now what I can do, if I go back to our server, is we can import this. So we'll import ski-terms. Okay, so now that we've done this, we need to add one other thing here. We need to add assert, type json. So what we're doing here is we're importing this file but in order to make this work, in order to make sure that our file is recognized, we're using kind of this experimental syntax here. So we need to go ahead and say this is the type of the file that we're importing. You probably won't always have to do this, but this is, if you see an error that says that you need to define a type, this is how you would do so. The next thing we want to do is underneath app.use, we're going to call app.get, and here we're going to use dictionary as our route, and we're going to add a callback function here saying request, response, and then we'll say response.json, skiTerms. Now I want to stop this, Control + C. I will call node server once more. This is giving us this experimental warning, which we understand, but the more exciting part here is if we go back to localhost 3000, and we hit a refresh, we see that our error has been cleared. We also see that this information is being displayed. So now, if we go to the dictionary route /dictionary, all of our JSON raw data will be added here. We have completed our first full stack application.
>
> **[5:04](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/intro-to-express?u=76281980&t=304)** We built a web server and an API using express, but before we are ready to launch, we're going to need to be able to add new terms using this form here, which is exactly what we're going to do in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (7), [npm](../../Skills/Web%20Development/npm.md) (3), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **CLI Commands:** npm (3), make (3), node (2)
> **Env Vars:** json (4), api (2), npm (1)
> **File Paths:** server.js (2), ski-terms.json (1), response.json (1)
> **Cross-References:** go back to (2), in the next (1)
> **UI Navigation:** go to (3)
> **Prerequisites:** install (3)
> **Code Identifiers:** skiterms (1)

#### [Handling POST requests](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980&t=0)** - [Instructor] So if we fill out this form and click add term, we're going to notice that there is another error. So it's saying that it failed to load a resource and that we are failing to [Fetch](../../Skills/Web%20Development/Fetch.md). So let's take a look at the request with the Chrome browser tools here. If we go to the network tab, we're seeing that we're failing to load a resource. Remember that these HTTP requests are readable stream, so instead of handling the data ourselves, we can use an [npm](../../Skills/Web%20Development/npm.md) called the body parser here to do the heavy lifting. So let's install body parser and we're going to add a post route to our application. So we're going to say, import body parser from body parser and then we'll import fs from fs.
>
> **[0:52](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980&t=52)** Once we've done this, we can call app.post and we're posting this to the /dictionary route. And here, we're going to use, as the second argument to post, body parser. There's a function called .[JSON](../../Skills/Web%20Development/JSON.md) that's going to parse this as json and then we need to add a callback function to say what we want to do. So we're going to say request and response, skiTerms.push. We're going to push whatever those terms are into the request body. And then we'll call response .json. Then we'll pass along the status of success. And the term is whatever is in the request.body. So every time a new term is added, we can save it to a local file in our system. Obviously, we would probably save data like this to a database, but this tiny app doesn't have one, so the file system will have to do. Let's go ahead and create a save function to make this work. So we'll say const save. And this is going to use from the file system module, we'll say fs.writeFile. And we're going to write this to data/ski-terms.json. We will JSON.stringify this, skiTerms, null, and two, and then we'll pass along a function
>
> **[2:24](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-post-requests?u=76281980&t=144)** to handle any errors. So we'll say if there's an error, throw the error. And then finally, we want to add this function. We'll call it, save. Let's go ahead and try to run this once more. We will go back to our local host 3000. This time we'll say, send to jump off of something. A lot of skiing is just jumping, right? And when we add that term, we're going to add it to the page. Now we can add new terms through the client. The client uses HTTP to send the data and we can capture that data and do whatever we want with it. One quick thing I'm noticing too is that we're getting no such file or directory with our write file and that's just because I don't have it in a folder called data. I messed up. So we'll go back and try that again. And we need to refresh, and we'll say send to jump off of something big, add the term, we see it there. If we go to our file, we see it's added to that list. All right, there we go. We're writing two files. We are displaying that data in our UI. Our skier dictionary is really starting to come together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (5), [Fetch](../../Skills/Web%20Development/Fetch.md) (1), [npm](../../Skills/Web%20Development/npm.md) (1)
> **Env Vars:** http (2), npm (1), json (1)
> **Code Identifiers:** skiterms (2), writefile (1)
> **CLI Commands:** npm (1), make (1)
> **UI Navigation:** go to (2)
> **File Paths:** data/ski-terms.json (1)
> **Cross-References:** go back to (1)
> **Prerequisites:** install (1)

#### [Handling DELETE requests](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980&t=0)** - [Instructor] There's one last thing to do. If we go to the Network tab, and then we click on the trashcan icon next to one of these terms, and then we say OK, we're noticing that there's a 404 error here. There's some sort of a problem. Cannot DELETE /dictionary/huck. Our client is trying to send a delete request to our API. And the term that the client wants to delete is being described by the route itself, /dictionary/huck. So no problem. Express automatically handles [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) parameters for us, which makes it easier to capture and use this data. So let's go ahead and add a delete route to our API. All right, so we want to call app.delete. We're going to use dictionary/ and then we'll use a parameter here. We know it's a parameter because we use the colon. So whatever that term is. Huck, drop, whatever. So that'll take the place of that term. Then we want to call a callback function, request and response, and we'll call skiTerms.filter. This is going to check to make sure that our term does not match whatever the request params.term is. In other words what we're saying here is if the term isn't being deleted, let's keep it in the list.
>
> **[1:32](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980&t=92)** We will call the save function again and then we'll call response.[JSON](../../Skills/Web%20Development/JSON.md) and use the status. We'll say removed is whatever the request.params.term is and then finally, we'll set a newLength, which is whatever the length of the new array is after that term has been removed. So let's go ahead and stop that. We will start it again with Node Server. We'll go back to our page and we'll make sure that we're refreshing. Now let's delete huck. OK. And it's looking like skiTerms.length. Typos are our best friend. Let's delete huck again and it's working. We see a 200 code. So we're noticing this error about assignment to a constant variable. And that's because when we're importing this, it's assuming that skiTerms is a constant. We can use let definitions equal skiTerms where we'll replace the variable everywhere it's used. So definitions. Definitions. Definitions. Definitions. Nice. So we have worked around that issue. We should be able to click on the trashcan icons and make all of that work as we want. Our application is complete.
>
> **[3:04](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/handling-delete-requests?u=76281980&t=184)** It reads and displays a ski dictionary and it allows users to add terms.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Code Identifiers:** skiterms (4), newlength (1)
> **CLI Commands:** make (3), node (1)
> **Env Vars:** api (2), delete (1)
> **UI Navigation:** click on (2), go to (1)
> **Definitions:** in other words (1), is a  (1)
> **File Paths:** response.json (1)
> **API Endpoints:** delete  (1)

#### [Using Express middleware](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-express-middleware?u=76281980)

> [!transcript]- Transcript
>
> **[1:22](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-express-middleware?u=76281980&t=82)** We're going to make sure that we're in
>
> **[1:44](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-express-middleware?u=76281980&t=104)** we're going to see that all of this is being logged right here. So we're getting a little bit of detail about exactly what's going on on the app. So this is pretty cool. We've been able to use middleware Express supports this pattern and we can use it for all sorts of different things.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)


### 4. WebSockets

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating a WebSocket](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=0)** - [Instructor] [WebSockets](../../Skills/Web%20Development/WebSocket.md) allow for a true two-way connection between the client and the server. Clients connect to a socket server, and the connection remains open until a client disconnects. And while that connection is open, data can be passed to and from the server. Again, it looks like our front-end team has delivered the files to us inside of this client application. And all of these files should run in the browser. So let's make sure that we're in the start file, and we're going to run that same command. But this time we want to also supply a flag where we're going to run this on port 5000. So we can go ahead and pass that along. It's going to run this on port 5000, and if we go back to our browser, localhost 5000, it should bring up our chat application. So if we take a look at our browser console, it's saying [WebSocket](../../Skills/Web%20Development/WebSocket.md) connection to ws localhost 3000 has failed. So it's trying to connect to this WebSocket, but that's not available. So we're going to install a package that's going to help us construct a simple WebSocket. We'll run [npm](../../Skills/Web%20Development/npm.md) i ws. This is going to install that for us. And then we can start to use it inside of our server file. The first thing we'll import is WebSocketServer from ws. And then we're going to say const wss is a new WebSocketServer that's running on port 3000. Next, we're going to manage this connection using ws.on.
>
> **[1:39](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=99)** The event we're listening for is that connection, and will pass in a callback function here. Now, our callback function will say console.log. So inside of this console log we'll say, "new socket connected." We're also going to manage our disconnections here. So we'll say ws.on, close, and here we will say console.log user disconnected. And then finally, outside of this, we're going to add a general message, console.log, chat server waiting for connections on ws://localhost:3000. And then I'm also noticing that I need to use the right variable name. We'll say wss.on. And then we're going to also pass in ws as the value here. So make that quick tweak wss, and then ws refers to the WebSocket inside of this context. All right, cool. So what we want to do here is we want to have two different terminals running; one for our client, one for our server. So we can hit the split terminal icon. We're going to type npx serve./client. And then we'll pass the port as the flag here with port 5000. So that'll get running over there. And then we'll also run node server in the other terminal. And our chat server will be waiting for connections there. So now if we hit refresh where it connected,
>
> **[3:15](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket?u=76281980&t=195)** we no longer see that error. And now we can say, "hello." And while we're not capturing those just yet, it'll say, "New server is connected." If I open another browser window to localhost 5000, we're going to see that new socket connected. If I close one, we'll see that this is disconnected. It's important to remember that WebSocket connections remain open until they disconnect. In the next lesson, we'll learn to pass data between the client and the server using these WebSockets.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WebSocket](../../Skills/Web%20Development/WebSocket.md) (5), [Websockets](../../Skills/Web%20Development/WebSocket.md) (2), [npm](../../Skills/Web%20Development/npm.md) (1)
> **CLI Commands:** make (2), npm (1), npx (1), node (1)
> **Ports:** port 5000 (3), port 3000 (1), :3000 (1)
> **Cross-References:** go back to (1), in the next (1)
> **Tools:** terminal (2)
> **Definitions:** is a  (1), refers to (1)
> **Prerequisites:** install (2)
> **URLs:** [localhost:3000](https://localhost:3000) (1)

#### [Broadcasting messages with a WebSocket](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=0)** - [Instructor] In the last lesson, we started building the socket server for a browser based chat application. Now the front end team, as we saw, had delivered this client folder that had a bunch of static assets in it that we needed to set up a server behind. So let's go ahead and start that client. We're going to do so with npx serve. We'll use ./client for the name of the directory. And then we'll also pass a port with the -p flag so that this will run on localhost 5000. So now, if we go back to our application, localhost 5000 doesn't have a server. We need to run our server with node server. Now, if we hit refresh, we should see that a new socket has been connected and this will occur for any other tab that I open up. So notice that when I start to type messages, those are not captured anywhere. Nothing is happening. So what we want to do next is we want to create a new array of messages that we can populate. And we're also going to [react](../../Skills/Web%20Development/React.js.md) to this on method every time there's a new message. So we'll say message. We will console.log that message. We will call messages.push, and we'll push each one of those messages in. I want to make sure that message is being captured as a string. So we'll say message.toString. We'll also say if message.toString equals exit. So if the user types exit into the terminal,
>
> **[1:37](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=97)** then we'll call ws.close. We'll call wss.clients.forEach. So this is going to iterate through all of the clients that are connected, all the browser [Windows](../../Glossary/Service/Windows.md) that are connected, and we're going to send that message to each one. So we'll say message.toString. Awesome. Let's also do this. We're going to call ws.send. We'll say, "Welcome to Live Chat!" And then we'll say if messages.length. So if there's any sort of length to that, we'll call ws.send chat currently in session, and we'll call messages.forEach message, ws.send(message.toString()).
>
> **[2:35](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=155)** Cool. Let's try running all of this again. We'll run npx serve, all of that good stuff.
>
> **[2:48](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/broadcasting-messages-with-a-websocket?u=76281980&t=168)** We are also going to stop and restart our server. Now if I hit refresh, we should see all of these messages being displayed. If I go back, we're seeing this buffer. So what we need to do to see those messages logged here is call toString on the message. So let's stop that and restart it. And then it's actually working now. So we want to make sure that we have two of these side by side. We'll see localhost 5000. This time, we'll say, "Hey" from this window. We'll see it pop up here. I'll say, "Window on the right says hello." And that should pop up over here. Now we've built a chat application using the basic web socket spec, but this spec has some limitations. In the next section, we'll learn to use a popular library for building socket applications, [Socket.IO](https://Socket.IO).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **Code Identifiers:** tostring (5), foreach (2)
> **CLI Commands:** npx (2), make (2), node (1)
> **Cross-References:** in the last (1), as we saw (1), go back to (1), in the next (1)
> **Documentation:** spec (2)
> **URLs:** [socket.io](https://socket.io) (1)
> **Tools:** terminal (1)
> **Prerequisites:** set up (1)

#### [Creating a WebSocket client with Socket.IO](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=0)** - [Instructor] In the last lesson, we created a web socket and connected to it using the native web socket object in the browser. Native web sockets are really cool but there are some edge cases that a native web socket cannot handle on its own. If we want our apps to work in a hundred percent of the browsers, we need to have a solution that can still work if web sockets aren't supported. [Socket.IO](https://Socket.IO) is a web socket framework that falls back to different data polling techniques in environments that don't support web sockets. So what this means is that you can build a real time app that's supported in every browser. So let's start to build our server using [Socket.IO](https://Socket.IO). We're going to install [socket.io](https://socket.io) into our project. And then I'm just going to replace everything that's part of this file. I'm going to delete it all and replace it with a server. So we're going to go ahead and pull create server from the HTTP module. Then we're going to import a function called server that comes from [socket.io](https://socket.io). Then we're going to stand up an HTTP server. So we'll say create server and we'll call .listen on our 3000 port. Next, we will create a variable called io. That's set equal to a new server constructor that we'll pass our HTTP server to. Then we need to handle connections. So we'll say whenever there's a connection, we want to take the information about the socket
>
> **[1:33](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=93)** and we want to console log. So this will let us know how many clients are currently connected to our server. Then we're going to call socket.on. So whenever a new message comes in, we'll say message. Here, we'll console log whatever that socket ID is. So what that refers to is whatever the number of the connection is. So if we're all connected to the same chat application, each one of us would have our own client ID. Then we're going to call io.sockets.emit. We'll borrow from that event emitter pattern. And every time we have a message, we're going to emit an event with the message and the socket ID. So what do we want to have happen when a disconnect happens? Let's keep it simple and just console log that something has been disconnected and we'll also grab the socket ID. So let's go ahead and console log socket server here. Socket server will just let us know that this is that particular app. Okay, so we've built our server. The next thing that we want to do is we need to create a lightweight client for our socket server, just so that we can test it. Our front end team has not delivered
>
> **[3:06](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=186)** a chat implementation with [Socket.IO](https://Socket.IO). It doesn't really matter because the scope of web sockets goes way beyond the browser. Any type of client can connect to a web socket to send and receive data. So instead of our browser app, we're going to build a little [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md), a command line interface application that will allow us to communicate with our socket server via the terminal. So let's go ahead and install a separate package called [socket.io](https://socket.io)-client. We use this when we want to consume some data. So inside of this file, we're going to import a function called io from the [socket.io](https://socket.io)-client package. Then we're going to create a variable called socket that's going to set up our listener. So we'll say HTTP local host 3000 then we'll call socket.on connect and we'll say console log socket IO client is connected. All right, great. So let's go ahead and run our server. That's running the socket server. We're also going to run with node socket client. It'll say socket client is connected and then it'll let us know that one connection has happened. And then let's also do it again. We'll say node socket client and then we have two connections there.
>
> **[4:38](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-a-websocket-client-with-socket-io?u=76281980&t=278)** There are all types of clients that we can build that will allow people to chat over this socket. This means that people can chat from the terminal or the browser or a phone application and all communicate via the same server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (1)
> **URLs:** [socket.io](https://socket.io) (7)
> **Env Vars:** http (4), cli (1)
> **Tools:** terminal (2), command line (1)
> **Definitions:** is a  (1), refers to (1), means that (1)
> **Prerequisites:** install (2), set up (1)
> **CLI Commands:** node (2)
> **Cross-References:** in the last (1)

#### [Emitting Socket.IO events](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/emitting-socket-io-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/emitting-socket-io-events?u=76281980&t=0)** - [Instructor] Another benefit of using [Socket.IO](https://Socket.IO) is its ability to raise events by name. The Web Socket Spec only handles message events so that means that all types of data has to be served through the same event. It would take us a lot of code to separate different chat environments and push many different types of data using only one event. So let's handle these different events. So in the previous lesson we created the emit event where we're passing in the name of the event called message. So the way that I can deal with this on the client is I can say socket.on message. We'll take in the message and the id and we'll console.log the id and the message.
>
> **[0:45](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/emitting-socket-io-events?u=76281980&t=45)** Next, we want to say process.stdin.on. So anytime we get some new data, in other words any time I collect information from the terminal from our user, we want to take that data and we want to call socket.emit. We want to admit the chat event and use data.toString.trim to trim off any extra white space. Back to our terminal. I have two different sides here. The first is our server, so we'll node the server. The second is our client, so we'll say socket-client. We'll notice that our one connection is made. If we say hey, this will give us our client ID and the message. So if I was to open up a new one, we'll run node socket-client, two connections over in the server. So if we say hello from client 2 it'll give us a different ID, but also the message. This is only a brief introduction to all of the things that are possible with web sockets. [Real-Time](../../Skills/Database%20Management/Real-Time.md) applications are the future of the internet and no JS of course supports them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1)
> **CLI Commands:** node (2)
> **Tools:** terminal (2)
> **Definitions:** means that (1), in other words (1)
> **Code Identifiers:** tostring (1)
> **URLs:** [socket.io](https://socket.io) (1)
> **Documentation:** spec (1)
> **Speakers:** - [instructor] (1)


### 5. Node.js Testing

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating modular projects](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-modular-projects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-modular-projects?u=76281980&t=0)** - [Instructor] One of the principles of [Node.js](../../Skills/Web%20Development/Node.js.md) is small modules. This means that, as [JavaScript](../../Skills/Software%20Development/JavaScript.md) developers, we should take advantage of modularity by breaking code up into bite size modules that are focused on a specific task. So we've brought back the ski dictionary website and the API that we built back in chapter three. So let's take a look at our index.js file. We have actually broken this project down into smaller files. So I wanted to take you on a little tour. First things first, our index file is going to import a file called app from the app.js file, and we'll call app.listen to listen on this port. Then we move to the app.js file. So the app.js file, check it out. We are importing a few different dependencies. We have express, we have body-parser, and we have a couple other custom files that I built. This is going to take care of all of the express stuff for us, so that as I visit certain routes, the right content will be displayed. We also have this file called dictionary-routes. So dictionary-routes is using the express router to actually stand up routes for different endpoints. So we can post our new data, we can delete data, we can do all sorts of things, but all of this is going to happen inside of this file. Finally, we have a library file. Lib stands for library. This is just a bunch of custom functions that we can use across the project. When we want to run this file, all we need to do is run node ./src. This is going to infer that we mean the index.js file
>
> **[1:34](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/creating-modular-projects?u=76281980&t=94)** as the main entry point for our project. And then we should be able to do all of the things that we did before, which is to add, remove, do all of the things that we do with our Skier Dictionary. Following the small modules principle is going to help us achieve success in a lot of ways, but most importantly, breaking up our code into small independent modules makes it easier to test.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Node.js](../../Skills/Web%20Development/Node.js.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **File Paths:** app.js (3), index.js (2), node.js (1)
> **CLI Commands:** node (2)
> **Definitions:** means that (1), stands for (1)
> **Env Vars:** api (1)
> **Speakers:** - [instructor] (1)

#### [Configuring Babel with Jest](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/configuring-babel-with-jest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/configuring-babel-with-jest?u=76281980&t=0)** - [Instructor] In order to write some tests for our application, we actually need to do some configuration with a tool called Babel. Babel is a [JavaScript](../../Skills/Software%20Development/JavaScript.md) compiler that you can use to make all sorts of transformations with your code. We see this a lot used with the newest versions of JavaScript that aren't compatible in every single browser. We run it through the process of working with Babel, and then we're able to use those new features right away. We also see it used and [React](../../Skills/Web%20Development/React.js.md) with JSX, so we can compile all of those JSX tags to JavaScript syntax that runs in the browser. The reason we'll be doing this is for two reasons, really. We want to be able to use these import statements, and we also want to be able to work with this new syntax here, this assert syntax, and if we happen to have any brand new JavaScript syntax in our project, this would help us with that as well. So, of course, (chuckles) in order to work with this, we're going to need to install a bunch of stuff. So the things we want to install are babel-jest @ babel/core @babel/preset-env,
>
> **[1:09](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/configuring-babel-with-jest?u=76281980&t=69)** and then the long one. I'm sorry in advance, is @babel, plugin-syntax-import-assertions.
>
> **[1:21](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/configuring-babel-with-jest?u=76281980&t=81)** Now, again, I'm going to be providing all of this to you in the student files. So if you want to just check this out in the finished folder for this chapter, no worries, and then the last thing I want to add here is -D. So this is going to install all of these to our dev dependencies. What's cool about this is that the dev dependencies will be only installed in a development environment, not in production. So it's going to keep our project lighter-weight, and then it's going to relegate all of these development dependencies to a single location. Great, so now that I've done this, I should be able to see this in our package.[JSON](../../Skills/Web%20Development/JSON.md). We should be able to scroll down and see that all of these have been added here, nice. The next step we need to take is we need to add to this another key, called jest, and this jest command is going to help us handle transformations. So we're going to use a little regular expression here. So this text that I've added here, we're explicitly defining this because we're using babel-jest as a transformer for our JavaScript code, and what this is going to do is it's going to map all of our type script files, our JavaScript files, our JSX files. All of this will be mapped to the babel-jest module. If you want to find this in the finished folder, it'll be there for you. The final thing we need to do for this setup step is we want to create a new file at the root of the start folder, and it's going
>
> **[2:53](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/configuring-babel-with-jest?u=76281980&t=173)** to be called babel.config.json. So this is going to be a JSON file that sets any presets. Now, the babel, preset-env that we installed before, Think of this as just being a transformer for Babel based on whatever environment we're using. So in this case, we're using [Node.js](../../Skills/Web%20Development/Node.js.md). It's going to perform transformations based on that environment. We're also adding this plugins key here. So the plugins that we're going to use in this case, babel, plugin-syntax-import-assertions. So remember, in this file here, where we're importing the ski terms, and we had to add that assertion. This is experimental JavaScript syntax that might not always be recognized by Babel. So this is going to help us out with that. So now that we have our Babel environment set up, in the next video, we're going to actually write those tests. Just as a reminder if you're ever checking out the Babel site, click on Try it out. There's a pretty cool REPL there that shows you how code goes in and comes out, and (chuckles) what I mean by that is if we were to use some new JavaScript syntax, like JSX, this is going to be the output based on however that transformation occurs. So Babel is a really nice tool. You see it in a ton of projects, and this can be a nice way of figuring out how things are working behind the scenes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (8), [JSON](../../Skills/Web%20Development/JSON.md) (3), [React](../../Skills/Web%20Development/React.js.md) (1), [Node.js](../../Skills/Web%20Development/Node.js.md) (1)
> **Env Vars:** jsx (4), json (1), repl (1)
> **Prerequisites:** install (3), setup (1), set up (1)
> **File Paths:** package.json (1), babel.config.json (1), node.js (1)
> **CLI Commands:** make (1), find (1), node (1)
> **UI Navigation:** scroll down (1), click on (1)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)

#### [Writing a test](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=0)** - [Instructor] In order to write some tests, we'll use a framework. Now, there are dozens of test frameworks, Mocha, Jasmine, Qunit, and they're all designed to do the same thing, which is run tests and report on the status of those tests. All of these different testing libraries also have a similar syntax. So once you test in one framework, you'll be able to write tests in them all. So we're going to go ahead and use Jest, which is a testing library that was developed at [Facebook](../../Glossary/Service/Facebook.md). We're going to use a module called supertest, which makes it easier for us to test different routes. We're going to [npm](../../Skills/Web%20Development/npm.md) i Jest in supertest and install them with capital D and install them with - capital D to install them in our dev dependencies. So once we've done that, we can move over to our folder, and we've done such an excellent job (chuckles) of breaking things down into smaller files. So we're going to create a new file called app.test.js. Whenever we end a file with that .test extension, it's going to, when we run Jest, run those tests. So let's go ahead and import a couple things. We're going to import request from supertest, and we're also going to import the system under test. In other words, we're going to import the function that we're going to test, which is our app file. So ./app is where that lives, then we're going to use our first described statement. So think of a described statement as being a test suite. It is a collection of all of the tests
>
> **[1:35](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=95)** that we're going to write. This described statement takes in the name of the test that we're going to write, which I just called API Tests, and we also have a callback function that we'll send here too. Within that callback function, we will add another function called it. So it is going to tell us what the test actually is. So we're going to say, GET, /dictionary, and then we're going to write an async function here, which will do the following. We're going to say const, body. This is going to be de-structured from our request. So request is going to request details from the app. We're going to get the dictionary route here. So then what we'll do is we'll say, expect, the body.length. So we'll expect all of the data that's coming back from that route to equal three, and that's because we have, in our data folder, skiTerms.[JSON](../../Skills/Web%20Development/JSON.md). There are three items inside of that array. So now what I can do is open up our terminal again, and we're going to try to run this with the [Node.js](../../Skills/Web%20Development/Node.js.md) executable, which we find in our node_modules folder. What I mean by that is this is how we would dig into that node_modules folder, where we installed Jest and run those tests. Now, at this moment, we're seeing that this test has failed, and the reason for this is because it can't import something out of a module. So what I want to do here is I want to make an adjustment.
>
> **[3:09](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/writing-a-test?u=76281980&t=189)** We're not done with configuration just yet. We're going to npm-install another package, called cross-environment, cross-env. It's another one of our dev dependencies, and we're going to make use of this inside of our package.json as a command. So right now, this script for testing really is nothing. We want to replace this. We'll say cross-env NODE_OPTIONS and now in order to use all of the experimental syntax that we're using, we need to say experimental-vm-modules jest. So this is going to be what happens whenever I run that test. It's going to support those import statements, and cross-environment will help us do that, regardless of how we have our projects set up. So now let's try this again. We're going to run npm test. Remember npm test is like npm start. You don't have to say npm run test and check it out. Our test passed. How exciting is that? When I compare the data from the dictionary route to the test that I wrote as this assertion, we find that there is a match, and our test has passed. So all of the different functions that you send to our described statement here, you can wrap them inside of it, or you can create different described statements, but we see our first test passing. We're able to test the data that's on that route and compare it with what our expectations are. Pretty cool.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [npm](../../Skills/Web%20Development/npm.md) (6), [JSON](../../Skills/Web%20Development/JSON.md) (2), [Facebook](../../Glossary/Service/Facebook.md) (1), [Node.js](../../Skills/Web%20Development/Node.js.md) (1)
> **CLI Commands:** npm (6), find (2), make (2), node (1)
> **Prerequisites:** install (4), set up (1)
> **File Paths:** app.test.js (1), skiterms.json (1), node.js (1), package.json (1)
> **Definitions:** is a  (3), in other words (1)
> **Code Identifiers:** node_modules (2), skiterms (1)
> **Env Vars:** api (1), node_options (1)
> **Tools:** terminal (1)

#### [Using code coverage](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-code-coverage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/using-code-coverage?u=76281980&t=0)** - [Instructor] Code coverage provides us with a measure of how much of our code has been covered by tests. It can be used as a metric to decide if you should write more tests. Jest has code coverage built in. So what I'm going to do is add another key here to our scripts, and we'll say all of this stuff, but then we'll send the --coverage flag. Now, if I run [npm](../../Skills/Web%20Development/npm.md) run coverage here, all of our statements, our functions, our lines have been tested. So we have some tests for our app, but it looks like we have a little bit more work to do on our other files. Something to keep in mind about coverage is sometimes people become obsessed with the idea of getting 100% coverage on everything. Focus more on the quality of your tests, rather than the quantity of them. It's really nice to have 100% code coverage, but it's not always required. I think the general rule is 80% or above, and you should be in good shape. So, just note that this is an option to you. You can pass the --coverage flag, and this is built in directly to Jest.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [npm](../../Skills/Web%20Development/npm.md) (1)
> **Warnings:** keep in mind (1), note that (1)
> **CLI Commands:** npm (1)
> **Definitions:** is an  (1)
> **Best Practices:** general rule (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-web-servers-tests-and-deployment/next-steps?u=76281980&t=0)** - Now that you've finished this course, you're in a great place to really work with [Node.js](../../Skills/Web%20Development/Node.js.md) on real projects. If you want to take your learning to the next level, we have a whole series of Node.js courses that you can explore. Node.js [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) will teach you about the essential patterns that can be used to solve common coding challenges. Advanced Node.js will teach you techniques about asynchronous programming and [Data Streaming](../../Skills/DevOps/Data%20Streaming.md) with Node.js, and then Advanced Node.js Scaling Applications shows techniques for scaling Node projects with approaches like database optimization, creating [Microservices](../../Skills/Software%20Development/Microservices.md), and cloning. Thank you so much for going on this journey with me. I hope you have fun building a ton of cool apps with Node.js.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Node.js](../../Skills/Web%20Development/Node.js.md) (7), [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (1), [Data Streaming](../../Skills/DevOps/Data%20Streaming.md) (1), [Microservices](../../Skills/Software%20Development/Microservices.md) (1)
> **CLI Commands:** node (8)
> **File Paths:** node.js (7)
> **Speakers:** - now (1)


## Instructor

- [Eve Porcello](../../Instructors/Web%20Development/Eve%20Porcello.md)

## Resources

- Exercise files available

## Skills Covered

- Web Servers
- Software Testing
- Node.js
- Software Deployment

## Path Context

### In [Explore Web Development with Node.js](../../Paths/Web%20Development/Learning%20Paths/Explore%20Web%20Development%20with%20Node.js.md)
← [Advanced Express](Advanced%20Express.md) | **7 of 11** | [Building RESTful APIs with Node.js and Express](Building%20RESTful%20APIs%20with%20Node.js%20and%20Express.md) →

## Appears In

- [Explore Web Development with Node.js](../../Paths/Web%20Development/Learning%20Paths/Explore%20Web%20Development%20with%20Node.js.md)

## Related Courses

_Courses sharing skills:_

- [Software Testing- Planning Tests for Mobile](../Software%20Development/Software%20Testing-%20Planning%20Tests%20for%20Mobile.md) — Software Testing
- [Complete Guide to AWS Software Deployment](../Cloud%20Computing/Complete%20Guide%20to%20AWS%20Software%20Deployment.md) — Software Deployment
- [Web Servers and APIs using C++](../Software%20Development/Web%20Servers%20and%20APIs%20using%20C%2B%2B.md) — Web Servers
- [Learning Full-Stack JavaScript Development- MongoDB, Node, and React](../Database%20Management/Learning%20Full-Stack%20JavaScript%20Development-%20MongoDB%2C%20Node%2C%20and%20React.md) — Node.js
- [Building a Website with Node.js and Express.js](../Database%20Management/Building%20a%20Website%20with%20Node.js%20and%20Express.js.md) — Node.js

---

[↑ Back to top](#)