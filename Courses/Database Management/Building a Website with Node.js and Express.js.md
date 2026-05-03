---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: building-a-website-with-node-js-and-express-js-3
url: "https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3"
duration_minutes: 190
duration: 3h 10m
level: Beginner
updated: 11/14/2024
learners: 22230
skills:
  - Express.js
  - Node.js
exercise_files: true
github: "https://github.com/LinkedInLearning/building-a-website-with-nodejs-and-expressjs-2255009"
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQHNu_2nM0E_OA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1578674895854?e=2147483647&amp;v=beta&amp;t=iO17C7utFWESU09K9yMep2zfuYV8o3OVaaBJIGMHIBY"
linkedin_topic: Database Management
learning_paths:
  - '[[Explore App Development with the MERN Stack]]'
prev_courses:
  - '[[Node.js- Testing and Code Quality]]'
next_courses:
  - '[[Building RESTful APIs with Node.js and Express]]'
path_nav: '[{"path":"Explore App Development with the MERN Stack","position":7,"total":13,"prev":"Node.js- Testing and Code Quality","next":"Building RESTful APIs with Node.js and Express"}]'
path_count: 1
tags:
  - course
  - topic/database-management
  - topic/software-development
  - topic/web-development
  - skill/express-js
  - skill/node-js
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Database%20Management/Building%20a%20Website%20with%20Node.js%20and%20Express.js.md)

![Building a Website with Node.js and Express.js](https://media.licdn.com/dms/image/v2/C560DAQHNu_2nM0E_OA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1578674895854?e=2147483647&amp;v=beta&amp;t=iO17C7utFWESU09K9yMep2zfuYV8o3OVaaBJIGMHIBY)

# Building a Website with Node.js and Express.js

> Node.js is a major platform for the web, used by companies like Uber, Netflix, and Intuit. Express.js is a fast, minimalist framework that sits on top of Node.js and allows you to build powerful single- and multi-page web applications and websites. In this course, instructor Daniel Khan shows how to build a realistic and robust website with these technologies. Learn how to build a basic applicatio

> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3) | 3h 10m | Beginner | 22K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Dynamic websites with Node and Express](#dynamic-websites-with-node-and-express)
  - [What you should know](#what-you-should-know)
  - [Using the exercise files and GitHub](#using-the-exercise-files-and-github)
  - [Setting up your development environment](#setting-up-your-development-environment)
- [**1. Building a Basic Express Application**](#1-building-a-basic-express-application) (5 videos)
  - [Create an Express server in three minutes](#create-an-express-server-in-three-minutes)
  - [Building from a HTML page or template](#building-from-a-html-page-or-template)
  - [Serving HTML pages and static content](#serving-html-pages-and-static-content)
  - [Setting up ESLint and Prettier](#setting-up-eslint-and-prettier)
  - [Setting up nodemon](#setting-up-nodemon)
- [**2. Template Engines**](#2-template-engines) (3 videos)
  - [Template engines and Express](#template-engines-and-express)
  - [Getting to know the EJS template engine](#getting-to-know-the-ejs-template-engine)
  - [Rendering the index page with EJS](#rendering-the-index-page-with-ejs)
- [**3. Express Routes and Middleware**](#3-express-routes-and-middleware) (5 videos)
  - [Express middleware and routes](#express-middleware-and-routes)
  - [Modular routes with express.Router](#modular-routes-with-expressrouter)
  - [Creating routes for all subpages](#creating-routes-for-all-subpages)
  - [Add business logic](#add-business-logic)
  - [Add a session management middleware](#add-a-session-management-middleware)
- [**4. Professional Templating with Express**](#4-professional-templating-with-express) (8 videos)
  - [Create a site-wide layout](#create-a-site-wide-layout)
  - [Using partials with EJS](#using-partials-with-ejs)
  - [Template variables in more detail](#template-variables-in-more-detail)
  - [Looping through lists in templates](#looping-through-lists-in-templates)
  - [Creating a list page](#creating-a-list-page)
  - [Using parameter routes](#using-parameter-routes)
  - [Challenge: Partials and lists](#challenge-partials-and-lists)
  - [Solution: Partials and lists](#solution-partials-and-lists)
- [**5. Handling Errors Gracefully**](#5-handling-errors-gracefully) (3 videos)
  - [How to handle errors in express](#how-to-handle-errors-in-express)
  - [Creating an error page](#creating-an-error-page)
  - [Populating the error page](#populating-the-error-page)
- [**6. Handling Form Data**](#6-handling-form-data) (4 videos)
  - [Creating a form template](#creating-a-form-template)
  - [Handling POST requests](#handling-post-requests)
  - [Validating and sanitizing user input](#validating-and-sanitizing-user-input)
  - [Storing data](#storing-data)
- [**7. Creating APIs with Express**](#7-creating-apis-with-express) (4 videos)
  - [A little intro to REST APIs](#a-little-intro-to-rest-apis)
  - [Creating and testing an API endpoint](#creating-and-testing-an-api-endpoint)
  - [Add client side JavaScript](#add-client-side-javascript)
  - [Updating the page from REST](#updating-the-page-from-rest)
- [**Conclusion**](#conclusion) (1 videos)
  - [Build on what you've learned](#build-on-what-youve-learned)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Dynamic websites with Node and Express](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/dynamic-websites-with-node-and-express?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/dynamic-websites-with-node-and-express?u=76281980&t=0)** - Today, [[Node.js]] is one of the major platforms for the web. Enterprises like Uber, Netflix, Autodesk, Intuit and even the NASA are using it for important parts of their business. With over 4,000,000 weekly downloads, Express is the most commonly used web framework to use with Node.js. Due to its minimalistic approach and ease of use, creating websites with it is easy and enjoyable. After completing this course, you will be able to build a dynamic website with Express end-to-end. You will also be able to use and transform any [[HTML]] theme you find online into a dynamic page. You will even learn how to create API endpoints to create Single-Page applications. I invite you to join me on my [[LinkedIn]] Learning Course, where you will learn everything you will need to create a website with Express.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (2), [[HTML]] (1), [[LinkedIn]] (1)
> **CLI Commands:** node (2), find (1)
> **Env Vars:** nasa (1), html (1), api (1)
> **File Paths:** node.js (2)
> **Speakers:** - today (1)

#### [What you should know](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/what-you-should-know?u=76281980&t=0)** - There is some knowledge you should have to get the most out of this course. You should specifically and most importantly know a little bit about [[Git]], so you should have a Git client at least installed. And, you should be able to use it on the comment line. You should know some [[HTML]] and CSS. That makes sense because we are building a website, and we will also manipulate HTML and CSS to some degree here. You should know [[JavaScript]] basics like how to declare variables, how to use functions, and callbacks. You should also know some basics about [[Node.js]] like how to build a simple application and how to run it. You should also be familiar with new features of JavaScript that came with ES6 like let and const, like arrow functions. And also, you should have some basic understanding of async/await. In our library, you find a vairety of courses that help you gain better understanding of all these concepts. Everything else, from installing the required software to configuring the sample project, will be covered during this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (2), [[HTML]] (2), [[JavaScript]] (2), [[Node.js]] (1)
> **Env Vars:** html (2), css (2), es6 (1)
> **CLI Commands:** git (2), node (1), find (1)
> **File Paths:** node.js (1)
> **Speakers:** - there (1)

#### [Using the exercise files and GitHub](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/using-the-exercise-files-and-github-24696875?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/using-the-exercise-files-and-github-24696875?u=76281980&t=0)** - [Instructor] All the files for this course are freely available as a [[GitHub]] repository at this URL. Assume that you have a [[Git]] client already installed on your machine, and have some basic knowledge about Git and GitHub. If you're completely new to Git, I recommend taking the course, [[Learning Git and GitHub]] by Ray Villalobos, as git and GitHub are so commonly used, investing time in learning them is a great investment in your career. The repository is set up with branches for each of the videos in this course. You can use the branch dropdown on the left to switch between the different versions. If you see a b at the end of the branch name, it indicates the state of the code at the beginning of the video, while an e indicates the state at the end. The main branch shows the initial state of the course and there is also a branch called final, which contains the final state of the course. To download all the files and get started, you need to clone this Git repository. I'll show you how to [[Fetch]] all the branches to your machine, but if you already know how Git works and have your own workflow, feel also free to just clone the repository as you would do it normally. I will now click on this green button and there will copy this HTTPS URL to my clipboard. Next, I'm going to open a terminal window. On a Mac, I can use the regular Terminal app, on [[Windows]], you can use Command Prompt, Partial, or Git Bash, which is included when you install Git.
>
> **[1:37](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/using-the-exercise-files-and-github-24696875?u=76281980&t=97)** Now in my terminal, I first created a directory and I call it building-website-nodejs-express.
>
> **[1:50](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/using-the-exercise-files-and-github-24696875?u=76281980&t=110)** Then I change into this directory, and now I'm doing the cloning. For that I type git clone --bare, and now I paste in the GitHub URL that I copied before. And then very important, I also have to add an empty space, a blank, and then I have to write .git because I want to clone the [[Metadata]] of this repository into the .git directory. Now, hit return, and this now pulled down all the metadata of this repository, but we still don't have any files here. So if I do an ls, you see there is nothing in this directory right now. So what I now will do is I write, git config --bool
>
> **[2:47](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/using-the-exercise-files-and-github-24696875?u=76281980&t=167)** core.bare false. So there is no point remembering or memorizing all of that. If you want to clone up a repository, it's always safe to look that up. So this is no knowledge that you really need to have. I hit return, and then I type git reset --hard. Now, when I do an ls, you see that I now have files in directories in my directory, and if I type git branch, I see that I have now all the branches pulled down to my machine. Going forward, we will use Visual Studio Code because it has a very good Git integration. Let's install it now along with the [[Representational State Transfer (REST)|rest]] of the development environment used for this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (16), [[GitHub]] (5), [[Metadata]] (2), [[Fetch]] (1), [[Windows]] (1)
> **CLI Commands:** git (16), ls (2)
> **Tools:** github (5), terminal (3), command prompt (1), bash (1), visual studio (1)
> **Env Vars:** url (3), https (1)
> **Prerequisites:** install (2), set up (1)
> **UI Navigation:** dropdown (1), click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Setting up your development environment](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/setting-up-your-development-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/setting-up-your-development-environment?u=76281980&t=0)** - [Instructor] Before we really get started, let's make sure that you have all the tools needed on your machine. First, let's install an editor. In this course, I will use Visual Studio Code. It's free, and it comes with great [[Node.js]] support out of the box. I highly recommend that you use it as well, at least for this course. To install it, use your favorite search engine to look for Visual Studio Code. Click on the download link for your operating system. I have it installed already. Let's open it right away, File, Open. And as you know, I placed the exercise files on my desktop, so I open it from right there. Visual Studio Code comes with great [[Git]] integration. And here on the bottom left, you see that we are currently on the master branch. And you also see that when I click on that, I can switch between all those different branches freely. So if I want to see the end of chapter three, video three, I just switch into this branch. But to get started, make sure that you stay on the master branch. Visual Studio Code comes with an integrated terminal that lets you run shell commands. Let's open it by selecting View, Terminal. And let's see which Node version we have installed here on this machine. So I type node -v, and you see that I have installed 12.13. That's the currently long-term supported version of Node.js. If you've got an error now, this means that you haven't installed Node.js already. So to install it, just head to the Node.js website, and install the currently long-term supported version. With that all said, you should be ready
>
> **[1:33](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/setting-up-your-development-environment?u=76281980&t=93)** to now really get started with this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (4), [[Git]] (1)
> **CLI Commands:** node (6), make (2), git (1)
> **Tools:** visual studio (4), terminal (2)
> **File Paths:** node.js (4)
> **Prerequisites:** install (4)
> **UI Navigation:** click on (2)
> **Versions:** 12.13 (1)
> **Exercise Files:** exercise files (1)


### 1. Building a Basic Express Application

[↑ Back to Table of Contents](#table-of-contents)

#### [Create an Express server in three minutes](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/create-an-express-server-in-three-minutes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/create-an-express-server-in-three-minutes?u=76281980&t=0)** - [Instructor] Ready to jump right in, then get ready for some hands on coding. To kick this off, we will create the minimal Express application from scratch. We will keep extending that application throughout the course. Different than other platforms, [[Node.js]] has an HTTP module built into its core, Express utilizes the HTTP server in this core module, and at least during development, you don't need to set up a separate dedicated rep server to Express applications. Let's see how this works. I already have Visual Studio Code open, and the only Node.js specific thing is the package.[[JSON]] file and the package-lock.json file, those are needed to maintain dependencies of our current project. Now I will open the terminal that comes with Visual Studio Code by clicking View, and there, Terminal, and let's first install Express. So in the terminal, I type [[npm]] install express, this will pull down Express and all dependencies, and add it to a project, and you see already in the package.json, this dependency is now here on line 14. Next, I'm going to create a file for the server we are going to build, let's call it server.js. So in the root of my directory, add a new file, server.js, and there I will first require Express, so add const express equals require express, and then I have to create an instance of Express
>
> **[1:34](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/create-an-express-server-in-three-minutes?u=76281980&t=94)** which is actually our application, so add const app equals express, and note the parenthesis there, this is because we're executing a function here. Next, I define the port, so this is the port that the application should listen to, usually map servers are listening on port 80, but it's a convention that Express servers usually listen port 3000. Next, we need some route that we can open in the browser. We will learn more about routes in great detail later, just for now, stay with me and add app.get, and this is for the slash route, so that's the index route, and I have a callback here that takes a request and the response object, and in the callback function, I now want to send something to the browser, and there is a method for that on the response object, so I add response, and when I enter the dot, you see already that Visual Studio Code helps me with auto-completion, so it's response.send, and I want to just say, hello Express here, and let's add a friendly smiley, so whenever this route is called, this should be sent to the browser, and in the end, we also of course have to really start the server and tell it where to listen, so I now add app.listen, and I add port as first argument,
>
> **[3:09](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/create-an-express-server-in-three-minutes?u=76281980&t=189)** and it again has a callback, this will be called as soon as the server is listening, and there I now add console.log, and I'm using back ticks here because we are using string interpolation, and in there I add Express server listening on port $, and then curly brackets, the port. Let's try that out, so in my integrated terminal, I will just now type node server.js which will use node.js to execute this file, and it looks good so far, it's at least running and I'm opening my browser, and in the browser, I now add to a local host:3000, and we get a hello Express back, as expected. That's it, this is a basic Express server. Of course, we have got much more to do, but some important building blocks are in here already.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (3), [[JSON]] (3), [[npm]] (1)
> **File Paths:** node.js (3), server.js (3), package.json (2), package-lock.json (1)
> **Tools:** terminal (4), visual studio (3)
> **CLI Commands:** node (4), npm (1)
> **Ports:** port 80 (1), port 3000 (1), :3000 (1)
> **Definitions:** is a  (2), is called (1)
> **Prerequisites:** install (2), set up (1)
> **Env Vars:** http (2)

#### [Building from a HTML page or template](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/building-from-a-html-page-or-template?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/building-from-a-html-page-or-template?u=76281980&t=0)** - [Instructor] Our central goal is to build a dynamic website from a static template using Express. In our project you find a folder called "provided" and in there, there is a folder called "static". Let's first drag this folder into the root of our project. When I look into the folder, I see that it consists of some [[HTML]] pages and also a folder for CSS styles, one for images and one for [[JavaScript]]. Let's look into the code of the index.html file real quick and we see that right on top here at line 6, it loads Bootstrap, a CSS framework that gives us some good default styles and offers a grid system to create responsive websites. We will see what this means in a second. I now want to see how this page looks like in the browser on my Mac. For that, I can now simply right click on this index.html file and select Reveal in Finder. Depending on your operating system, you should have something similar here. And here on the Finder, I can now select Open With [[Google]] Chrome. So what you want to do is you want to open the index.html file in your browser. So we see that we are going to build some page for conference. It's called Roux Meetups. And the index page consists of a so-called hero section, that's the section with the large picture on top, then we have a navigation, a list of speakers,
>
> **[1:34](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/building-from-a-html-page-or-template?u=76281980&t=94)** and when we scroll down, there is some intro text on... And we have a sidebar that shows artworks made by the speakers of our conference and if I click on such a picture, we see that the page uses some JavaScript to open a large version of it. Before I talked about that this page is using Bootstrap to make this page responsive and when I now reduce the size of my browser window, you see what this means. So responsive means that depending on the size of the browser window, it will adapt and it will also even hide sections the smaller we get, as you see here. Let's look at the navigation, so we have Home, Speakers and Feedback and Speakers is a drop-down and when I click on All Speakers, I get to a typical list page where I see more details about the speakers of the conference. Our designer got lazy here and just copy-pasted one section to just emphasize that this is a list. This is also very common. When I click on the speaker's name, I get to a speaker detail page that now contains a large picture of the speaker along with some more detail, so the whole bio of the speaker and on the right sidebar I have now just the artwork that this particular speaker created. Let's also click on Feedback.
>
> **[3:08](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/building-from-a-html-page-or-template?u=76281980&t=188)** This leads us to a typical page that contains a form to submit feedback and a section that shows feedback provided by others. You might now wonder why we even want to use Express here. This is a perfectly functioning website. We just need some web server that will serve it. So why do we need Express? Well, imagine that just a speaker changes. So when I'm here on Home, I have to change a speaker. So I will do this now on this top speaker's bar and also in the Speakers navigation and I, of course, also have to change the speaker's detail page. That's very redundant. Dynamic websites let you avoid such redundancies by using central templates that contain the layout of a page. Or let's look on the Feedback page. We want to be able to submit feedback and also see it instantly on the page. This is also only possible using dynamic websites. We can see that there are many good reasons why most websites we see today are dynamic and not just use static HTML. Let's proceed by taking the very first step towards a dynamic site by letting Express just serve static HTML as any normal web server like NGINX or Apache would do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (6), [[JavaScript]] (2), [[Google]] (1)
> **Env Vars:** html (3), css (2), nginx (1)
> **UI Navigation:** click on (4), open the (1), scroll down (1)
> **Definitions:** is a  (4), means that (1)
> **CLI Commands:** find (1), make (1), nginx (1), apache (1)
> **Analogies:** picture (3), imagine (1)
> **File Paths:** index.html (3)
> **Exercise Files:** template (1)

#### [Serving HTML pages and static content](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/serving-html-pages-and-static-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/serving-html-pages-and-static-content?u=76281980&t=0)** - [Instructor] Let's teach Express to send static [[HTML]] pages to the browser. This is not yet what we understand as a dynamic website. It's more what a regular web server does. It receives the request for some URL and serves the right page for it. To accomplish that, let's open the server.js file and there want to change the existing default route to read and send the HTML file to the browser. To accomplish that, I have to add one more module to this server.js file and it's a core module called path. So I add const path = require('path'). We will see why in a second because in there, in my default route, I first remove everything what's in there and I start typing response, which the code already suggests sendFile. So this is a function on the response objects that lets us send a file to the browser and I have to now add the path to this file. And for that I use the path module and there I use the join method that helps me just create a proper paths reference. And this first argument I'm using __dirname, that's a constant provided by [[Node.js]] that contains the current directory, and, as second argument, I'm now adding ./static and the index.html.
>
> **[1:39](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/serving-html-pages-and-static-content?u=76281980&t=99)** Should be pretty clear what we're doing here so we are creating a paths reference that points to the index.html file in the static folder. We also have a speakers html file. Let's serve this as well. So I now copy this route and now I use the paths speakers. So under /speakers I want to serve now the speakers page. And there I just have to change index.html to speakers.html. Let's start the application now by typing node server.js and I'm heading to the browser. And in there I want to open localhost 3000. And we see that this is pretty good already, but the page misses all images and pretty much all styles. So the styling that you see here now is basically provided by bootstrap and bootstrap is loaded from an external URL. If we look into Chrome developer tools. So on the right-hand side there is three dots. In there I can select More Tools and Developer Tools. And when I open the Network tab and reload the page, we see that the page fails to load all the static files like all the speakers, images, the styles. Here it says file. So pretty much everything that is static. Let's see how we can fix that. So I'm back in Visual Studio code. There see, in the static folder that we have the CSS images and [[JavaScript]] files in here.
>
> **[3:12](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/serving-html-pages-and-static-content?u=76281980&t=192)** But Express now has no way to know that it should serve static files from there. For that we have to add a new so-called middleware that is called static. We will learn more about middlewares later, but, for now, let's just use it. So, before my [[Routing]] handlers are defined, I will now add app.use and the middleware is called express.static. So every time you see an app.use, this is how middlewares are applied in Express. And, there again, I will add path.join__dirname and, other than pointing to a particular file, I'm just now pointing to the whole static folder. This will instruct Express to look into the static folder for each request it receives and, if it finds a matching file, it will send it to the browser. Now let's restart the application again. Node server.js and let's head back to the browser and reload the page. And we see that it now looks perfect. We can also try the /speakers route and it hopefully will now serve the speakers page, and it does. We just created the basic Express web server that serves HTML and static files. While we will change the routes to render dynamic templates later, serving static assets via Express.static is something you will need in any project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (8), [[Node.js]] (1), [[JavaScript]] (1), [[Routing]] (1)
> **File Paths:** server.js (4), index.html (3), node.js (1), speakers.html (1)
> **Env Vars:** html (3), url (2), css (1)
> **CLI Commands:** node (3)
> **Definitions:** is called (2), is a  (1)
> **Code Identifiers:** sendfile (1), join__dirname (1)
> **Tools:** visual studio (1)
> **UI Navigation:** open the (1)

#### [Setting up ESLint and Prettier](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/setting-up-eslint-and-prettier?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/setting-up-eslint-and-prettier?u=76281980&t=0)** - [Instructor] A properly configured development environment helps you avoiding common pitfalls by taking care of consistent code formatting and pointing out possible problems. I think that regardless of what you're doing, this is something you should know how to set up. For that, I'm now going to install a set of tools to accomplish that. You can use that for any other project just like that. First I'm going to install [[ESLint]]. ESLint is a so-called linter. It uses a rule set to enforce some coding style rules and also points out common coding mistakes. For that, I now run [[npm]] install, dash d because it's a development dependency, ESLint. And after this is installed, takes a little bit, if we look into package.[[JSON]] we see that this was now added as dev dependency. This means if we deploy our project into production, ESLint should not be included. To initialize ESLint, we will use the common npx. Npx comes with your [[Node.js]] installation and it will first look into your Node modules folder to find the script you want to execute. Or if it isn't there, it will even pull it down from the npm repository. We installed ESLint already. So we now type npx eslint dash dash init. It will take the init script provided directly by ESLint which is now in our Node modules folder. And it will give us a wizard. On this wizard, I now select that I want to check syntax,
>
> **[1:33](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/setting-up-eslint-and-prettier?u=76281980&t=93)** find problems, and enforce code style. I select CommonJS because that's the module Node.js uses. We don't use [[React.js|React]] or [[Vue.js]] so I select none of these. We are not using Typescript. And I can deselect the browser. I just want to use Node and I also want to use a popular style guide. And I prefer Airbnb there. So that's a style guide provided by the company Airbnb. They use that in their projects. And this visit will now create a config file. And I want this to be in JSON format. Next visit asks me if it can install a few additional dependencies. So I select yes. And now this is installing. Next I also want to install prettier. Prettier is a tool that can format your code. So differently than ESLint which is more about code style and code mistakes. This is about keeping code formatting consistent. So I'm now going to type npm install dash d. Again it's a dev dependency, prettier. And I'm also going to install two more modules that integrate prettier with ESLint. So because we have to make sure that the ruleset provided by ESLint is consistent with how ESLint does the code formatting later. So add eslint dahs config, dash prettier, and eslint dash plugin,
>
> **[3:09](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/setting-up-eslint-and-prettier?u=76281980&t=189)** dash prettier. So far, Visual Studio Code does not know anything about the modules we just installed. We have to install two extensions now. For that I click on the extensions menu item on the left menu bar. And there I select first ESLint. And let's just select the first extension that comes up. It's by Dirk Baeumer. And I select install. And also we want to install the extension for Prettier. And there I take the extension provided by Esben Petersen. And I click install. Now I want to change the configuration of Visual Studio Code for that. I go to code, preferences, settings. And there I first look for ESLint. And I select here auto fix on save. Then I look for save and in here you see editor format and save and enable that as well. And I also want to set the default code format now for Visual Studio Code. So I look for format and there you see the default formatter. And if it's not yet set to Prettier, just select Prettier by typing Prettier in. And then you select esbenp Prettier Visual Studio Code. That should be it pretty much here. One more thing I have to do is I have to change the ESLint dot JSON file to add the modules we installed before.
>
> **[4:43](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/setting-up-eslint-and-prettier?u=76281980&t=283)** So here on extends next to airbnb-base I add now prettier. That's the Prettier config module. And I also have to add a new entry here, a new key. Plugins. And for plugins I will now add a new array entry that is again prettier. And I also have to set some defaults for prettier. That's another config file. And we're almost done, I promise. Now I select new file and create a file .prettierrc. And in here, I set now configuration options for Prettier, some defaults that Prettier needs. And as you see here, as we install the Prettier extension, we now get even coding assist for this configuration file. And for trailing comma, I want to set es5. So that's how the trailing comma should look like for arrays. The print width, so that's the line length, should be 100. And I want to use single quotes for strings. I select true here. Now you saw it already. When I hit save, it already did some formatting. Here I'm going to click on server.js and I hit save. You see that it now uses just two spaces as indent. And it also added one more line after the last line.
>
> **[6:20](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/setting-up-eslint-and-prettier?u=76281980&t=380)** So that is some coding style that is enforced by the Airbnb style guide. So this looks pretty good so far. Let's try something else. Let's add some line break here that shouldn't be here. And you see when I save it jumps back. You see that now code formatting is really enforced. And if you roll that out into a whole team of developers, you can always make sure that your code always looks exactly the same.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ESLint]] (17), [[npm]] (3), [[JSON]] (3), [[Node.js]] (2), [[React.js|React]] (1)
> **CLI Commands:** node (5), npm (3), npx (3), find (2), make (2)
> **Prerequisites:** install (12), set up (1)
> **File Paths:** node.js (2), package.json (1), vue.js (1), server.js (1)
> **Tools:** visual studio (4)
> **UI Navigation:** click on (2), select the (1), go to (1)
> **Env Vars:** json (2)
> **Definitions:** is a  (2)

#### [Setting up nodemon](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/setting-up-nodemon?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/setting-up-nodemon?u=76281980&t=0)** On my pursuit to make coding as smooth as possible, I found out that it's pretty tedious to reload express every time I change some code as we did it before. This problem can be solved with a tool called nodemon. Nodemon will watch a project and reload it automatically when a file changes. So let's install nodemon now and it's again a development dependency. I add [[npm]], install, dash D, nodemon, and this will install nodemon for us and I'm already opening package.jason, because I have to change the startscript, they are now once nodemon is installed, because I will now add a new entry that I call dev. You will see soon how we can run this then, and there I add nodemon, and then I add dash dash ignore, and this is now a little bit of spoiler, because later we will store feedback user submit into a feedback.jason file, and we don't want express to reload then every time this file is changed, so I am ignoring the feedback.jason file that we will have later, and then I add server.js, this is the script we want to start. To use that now I just run npm, run, dev, so that's the script that we are going to run and we see that now nodemon is starting up.
>
> **[1:36](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/setting-up-nodemon?u=76281980&t=96)** Let's try something out like adding some console statement here. Console log, I am restarting and then hit save, and you see that now the script restarted and also printed out my log statement, let's remove that before we go on. We now have a really solid development environment in place that makes our life easier as we go forward in this course, and in the next chapter, we will look at how to use templates with express.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (2)
> **CLI Commands:** npm (2), make (1)
> **Prerequisites:** install (3)
> **File Paths:** server.js (1)
> **Cross-References:** in the next (1)


### 2. Template Engines

[↑ Back to Table of Contents](#table-of-contents)

#### [Template engines and Express](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/template-engines-and-express?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/template-engines-and-express?u=76281980&t=0)** - When building a dynamic website, there's always some static [[HTML]] that should contain some dynamic data. Let's look at an example. Imagine you have some array that contains a list of persons and you want to output this on an HTML page. Maybe you already got the HTML from your designer. So, how can we combine our data with the provided HTML? This is where template engines come into play. They always provide some special syntax to work with dynamic data. Here is an example in pseudocode. Finally, we need something that does the actual work of pausing the template file, combining it with the provided dynamic data, and then rendering it to HTML. This is what the template engine does. On top of that, there is one more reason why you want to use templates. Let's look at the website we are building. There are parts that appear throughout the sites like the hero section, the navigation, or the gallery. Using templates, we can split our layout into reusable parts and store them in separate template files and just include them into our page. By doing so, there is no redundancy. And, if we want to change the navigation, we do it at exactly one place. Modularization is another thing template engines give us. Express is agnostic when it comes to template engines. Any engine that provides a specific interface can be plucked into the framework. Looking at the Express documentation, we see that, today, around 20 engines are known to work with Express. Choosing the right one is mostly a matter of preference. Most importantly, you should comfortable with this syntax.
>
> **[1:35](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/template-engines-and-express?u=76281980&t=95)** The end result rendered to the browser is always HTML. It's always the same for any template engine. For this course, we will use the embedded [[JavaScript]] template engine, EJS, as it's simple, fast, and powerful.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (6), [[JavaScript]] (1)
> **Exercise Files:** template (8)
> **Env Vars:** html (6), ejs (1)
> **Definitions:** is an  (1)
> **Analogies:** imagine (1)
> **Speakers:** - when (1)

#### [Getting to know the EJS template engine](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/getting-to-know-the-ejs-template-engine?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/getting-to-know-the-ejs-template-engine?u=76281980&t=0)** - [Instructor] I've already opened the website for the ejs template engine that we will use in this course. The website contains the complete documentation which fits neatly on one page. It also lists the features and benefits. Most importantly ejs lets you use regular [[JavaScript]] as template language as you see here. So you don't have to learn any new syntax. The only thing that might look unfamiliar to you are the template text. These are the brackets with the percent sign. They instruct ejs to parse what's in there and there are different types. Let's look at them. The simple bracket with the percent sign is used for [[Control Flow]] like conditions or loop statements that don't produce any output. Add an equal sign and it will output the variable inside those tags and escape all [[HTML]] in it. If you use a minus sign the content will be un-escaped. This is when you want to render html that is inside the variable. There are also few tags that deal with white spaces and new lines. We don't need them in this course but you should know that they exist. Additionally there are also includes. They let you include the content of another template into the current one. You can even pass in arguments. This makes them very useful when you, for instance, want to output list elements. No worries if something is still unclear we will use all of that throughout this course. Now let's first add ejs to our project and I head back to my Visual Studio code and I stop node mon by pressing Control+C
>
> **[1:33](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/getting-to-know-the-ejs-template-engine?u=76281980&t=93)** and now I will run [[npm]] install ejs. This will just install the ejs template engine to my project and now I have to also tell Express that it should use ejs so in my server.js right after Express was instantiated and maybe after the port was declared I add app.set and the configuration value we want to set this view blank engine and there I set ejs. You don't have to require ejs here in this file, the Express will automatically discover it. And then I also have to tell Express where to find those views. For that I add app.set and the entry is views and the value is path.drawing and I use again __dirname and the second argument I now use ./views. This expects the template to live in a folder called views. This folder does not exist yet so we will create it now. So in the root of my project I will now select New Folder and create a new folder Views in there. Let's restart the application by running npm run dev. So the application still works but we don't see much of a result either. Next we will render our first template using ejs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2), [[npm]] (2), [[JavaScript]] (1), [[Control Flow]] (1)
> **Exercise Files:** template (7)
> **CLI Commands:** npm (2), node (1), find (1)
> **Prerequisites:** install (2)
> **File Paths:** server.js (1)
> **Tools:** visual studio (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Rendering the index page with EJS](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/rendering-the-index-page-with-ejs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/rendering-the-index-page-with-ejs?u=76281980&t=0)** - [Instructor] 'Kay, now with EJS in place, I want to use it to render the index page, so let's open server.js, and let's look for the route with the slash. So I'll remove what I have here, and I will now use the render function of Express. So I add, response.render, and render takes its first argument, a path to a template. And I use here, pages/index. Obviously, I have to create that, so what Express is doing here, it will then look into views, pages, index, to find a matching template file. As a second argument, it also accepts an object that contains local variables that will be available to the template. And I want to just set a variable that's called pageTitle, and let this be, Welcome. So the page title of the index page should be Welcome. Of course, I now have to also create this pages directory in views, so I add a new folder to views called pages. And then I will move over the index.[[HTML]] file into this pages folder. And I also have to change the extension now to ejs. To make Visual Studio Code also recognize EJS files, let's add an extension for that. So I look for ejs, and there I have EJS Language Support,
>
> **[1:37](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/rendering-the-index-page-with-ejs?u=76281980&t=97)** and I will just install that. So I get a little bit of syntax help by Visual Studio Code. And in this index.ejs file, I will now change the title to use the variable we defined before, so I add, now I have this percent bracket with the percent sign and an equal sign because I want to output something, and I want to output pageTitle here. So this should be all that is needed to do, so let's look into the browser. And here in the browser, I just open again localhost:3000, and we see that the page is now obviously rendered using the template engine, and we also see that this page title we set as template variable is now part of the page title shown here on the browser. So far, we have learned what template engines are, and we created and rendered our first template using EJS. Next, we will look into Express routes and middlewares in a bit more detail, and I will show you how to use Express Router to organize your applications like a pro.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **Exercise Files:** template (7)
> **Env Vars:** ejs (4)
> **File Paths:** server.js (1), index.html (1)
> **CLI Commands:** find (1), make (1)
> **Code Identifiers:** pagetitle (2)
> **Tools:** visual studio (2)
> **URLs:** [localhost:3000](https://localhost:3000) (1)


### 3. Express Routes and Middleware

[↑ Back to Table of Contents](#table-of-contents)

#### [Express middleware and routes](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/express-middleware-and-routes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/express-middleware-and-routes?u=76281980&t=0)** - [Instructor] Middlewares are key concepts of Express. Basically everything is built around them. We already created [[Routing]] middlewares that will be executed when a specific URL matches, and to end a request for sending data back to the browser. We also used the Express static middleware to support static files like style sheets or images. And additionally to using existing middlewares, we can of course also define our own ones. Let's now dive into this topic a bit deeper. First, let's look at the overt syntax. Middlewares are defined on the application object and, in general, they use application dot use. And they take a callback. This is what will be executed for this given middleware, and the callback gets a request and a responsive check, but we will see that in a bit. We can also have a path as first argument to this app.use, this means the middleware will then be only executed if the URL matches a specific path. Again, they take a callback that will be then executed for that. And then we also have those routing middlewares. They usually use some http verb and I will cover that in a bit, but they again take some path, and also a callback. What can Express middlewares do? They run with your request, and they can execute any code in there. They get the request and response object as arguments, and of course they can operate on them, so this means they can, for instance, change the request object to parse maybe some information that is in there and stored
>
> **[1:35](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/express-middleware-and-routes?u=76281980&t=95)** in another variable. And they can also end the request-response cycle. This is mostly true for routing middlewares because in the end, a routing middleware will send something back to the browser and will so end the execution flow and the request. Finally, they can also call the next middleware in the stack, this means if more middlewares are defined, a middleware can pass on the [[Control Flow]] to the next middleware. Let's look at the general middleware first. Regular middlewares are defined on the application object with .use, and they support the callback that should be executed for each request, and this callback takes a request and a response argument and also a next argument. Request and response are rich objects with several messages defined on them. Most importantly, response gives us methods to finalize the request and send data back to the server, but we will see that on the routing middleware on the next slide. The middleware can then do anything that needs to be done. Very often it will manipulate the request or response object. Once the middleware's done, and that's important, it will call next to pass on the control flow. If next is not called, the request will hang. So every time you end up with a not loading page, most probably you have forgotten to call next or end the request in some other way. Let's look at Express routing middlewares. So in this case we have some call to /feedback of our page. A route is a specific middleware that contains an http verb.
>
> **[3:10](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/express-middleware-and-routes?u=76281980&t=190)** As you might know, in http there are different so-called verbs, like get, post, put or delete. They are part of the http protocol, and for instance, when you send a form, this is most likely a post request. When you simply open an URL in the browser, it's a get request. Next, we have the path the route should match against. So this route will only be executed when this given path matches. As I said before, this is also possible for app.use, so the lines are pretty blurry between those channel and those routing middlewares. The main difference is the http verb on routing middlewares. Then again, we have this handler function that gets this request and response object, and this next object. Routing middlewares usually end the request in some way, so they will, in most cases not call next in the end, but something that will terminate the request and send something back to the browser, and those methods to send something back to the browser are defined on the response object. For instance, we have something like send file, that we used before, or to render template we can call .render on it. So this will terminate the request, no need to call next in the end. There's one more important thing and these are parameter routes. Express routes can contain parameters. This means that parts of the URL can be dynamic, and this dynamic parameters can then be used by the application. Think of a route that should show the page of a given conference speaker.
>
> **[4:43](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/express-middleware-and-routes?u=76281980&t=283)** As you can see, using a column it identifies a parameter and the route will then match any string after speakers and store it in a variable called speaker name, and we can then use it, of course, inside of our handler function. We can also end with a question mark. This will make the parameter optional. This means it will then match /users, but also /users Melissa, and then again make speaker name available and then set it to Melissa. To put this all together, let's look at the Express request lifecycle. In the beginning the application initializes. It will execute all [[JavaScript]] code which will register all middlewares. Then it will start the http server and listen on a given port. At some point, a request for some URL comes in. In this case, it's for /speakers. Express will execute all defined middlewares in the order of their creation, and if they aren't ending the request, they have to call next to pass on the control flow to the next middleware. As I said, if you don't call next here, the request will hang. If a middleware contains a path, it will only execute it when the path matches. In our example, at some point we find the path /speakers, and it matches because it's also a get request, so this get speakers middleware gets executed and it will ideally then do something like response dot send to send a response back to the client.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (9), [[Control Flow]] (3), [[JavaScript]] (1)
> **Env Vars:** url (5)
> **CLI Commands:** make (2), find (1)
> **Analogies:** for instance (3)
> **Definitions:** is a  (1), means that (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### [Modular routes with express.Router](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/modular-routes-with-express-router?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/modular-routes-with-express-router?u=76281980&t=0)** - [Instructor] Now that you're an expert on routes in middlewares, let's apply that knowledge. And I also want to show you one more important feature of Express. Until now, we defined the route for all application directly in the server.js file. That's okay for smaller applications but once the application grows, this can become confusing and hard to maintain. A good practice is to group all route definitions into a file or directory structure of its own. To accomplish that, I will create a new folder routes in my root folder and in this root folder, I will create a new file index.js. Next, I will copy that route definition for slash and while I'm here, I will remove the declaration of the speakers route. We will add it to the new [[Routing]] structure in a bit. And I paste now the definition into my index.js file. Now we see those red wavy lines on the app object. That's obviously because there is no app object defined here so how can I get to my Express application objects to define the routes on? This is where Express Router comes into place. Express Router lets you create SAP applications that listen on specific routes. To use Express Router, I will first require express
>
> **[1:33](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/modular-routes-with-express-router?u=76281980&t=93)** and then I will get my router object from Express by calling constructor equals express.Router and that's a function so it ends with parentheses. So now I have a router object and I can really now replace this app object with router because that's very similar to an Express application and I can define middlewares and routes on it. Right now this module does not return anything. What I could do now is I could now do a module.exports equals router and this would then return the router object that we just defined with the route defined on it but I want to do something else. This is something you won't find in many tutorials but I find it very useful. I will now define a function or I export a function by adding module.exports equals and I define an arrow function on that and I will put my routing definition into this function. And from there, I will now return the router object. So why am I doing that? By doing so, we can pass arguments from our application down to the route as function parameters and we will use that later. So we just created a routing module
>
> **[3:05](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/modular-routes-with-express-router?u=76281980&t=185)** and now we have to mount that into our main application and we can do that by going into server.js and there I swill first require this new routing module. So I add const routes equals require ./routes and as you might know, this will default to the index.js file so this will require /routes /index.js and then further down after the Express, static middleware was declared. I will now add app.use. So that's another middleware and this middleware should listen on the slash paths. So this is a catch all for all the routes under slash and here I will now add my routes module and mind the parentheses, of course because we saw before, this is a function and to get the router object back from it, we have to call this function. So now let's open the page again. And as expected, everything still works but now we have a dedicated routing infrastructure that we will build upon during this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (5)
> **File Paths:** index.js (4), server.js (2)
> **CLI Commands:** find (2)
> **Definitions:** is a  (2)
> **Env Vars:** sap (1)
> **UI Navigation:** open the (1)
> **Analogies:** similar to (1)
> **Best Practices:** good practice (1)

#### [Creating routes for all subpages](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/creating-routes-for-all-subpages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/creating-routes-for-all-subpages?u=76281980&t=0)** - [Instructor] We just created our first [[Routing]] module. Let's now go ahead and create the [[Representational State Transfer (REST)|rest]] of the modules that we need to build up our whole page. I decided to organize each sub-page into a file of its own. For that, I will now add a new file, feedback.js, and a new file, speakers.js, to my routes folder. Before we implement those routing modules, how should we book them into our express application? What I could do now is I could simply just add it here to server.js. So, for instance, something like app.use /speakers, and then have some speakers route, something like that. But this will again add a lot of dependency to the sub-modules that I have. I would rather just have one point in the application where I hook or mount the routes into it. So what I can do instead and which is way more elegant is I can go into my index.js file and add those sub-pages now to that index.js file, which also resembles the overall structure of my application because under the index page, which is slash, I have a /speakers and I have a /feedback. So to accomplish that, I have to require those two files I've just created.
>
> **[1:34](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/creating-routes-for-all-subpages?u=76281980&t=94)** So I add const speakersRoute equals require ./speakers,
>
> **[1:45](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/creating-routes-for-all-subpages?u=76281980&t=105)** and I add const feedbackRoute equals require ./feedback.
>
> **[1:56](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/creating-routes-for-all-subpages?u=76281980&t=116)** Next I have to mount those two routing handles. For that I now add router.use, so very similar to what we did before in the server.js file, and now for everything below speakers, I want to use the speakersRoute. And mind the parentheses in the end, because as we know, this should later be a function that is exported from the speakersRoute. And I do the same for feedback, so router.use for everything under /feedback, I want to call the feedback routing handle. When we load the application now, I will get an error. This is because the middleware actually expects a function to be returned. Obviously there is no function yet because speakers and feedback don't return anything. They are empty. But I'm just showing you that so that you know if you ever run into this problem, it's most probably because you forgot to return anything from your routing handle. So let's implement those routing handles now, and to save a little bit of typing work, I will just copy the content of my index.js file and paste it to my speakers.js file, and we can remove the require for speakers and feedback on top, and also these router.use statements, obviously. And for the slash route,
>
> **[3:29](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/creating-routes-for-all-subpages?u=76281980&t=209)** which is because it's mounted to /speakers, so this means now the slash points to /speakers, I will for now just return response send
>
> **[3:45](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/creating-routes-for-all-subpages?u=76281980&t=225)** because we don't have a template for that yet, so I can simply return speakers list, because the /speakers page should return the list of speakers. I also want to create the route for speakers detail pages. For that I will copy now this routing handler, and now I have this parameter route we talked before because I'm using now column shortname, because this is now everything that matches /speakers slash some short name that identifies the speaker's detail page that I want to show, and that will return, and mind the backticks here because I'm use string interpolation, detail page of dollar, and how do I get this parameter shortname now? This comes with the request object because request has a property params, and the shortname will be stored under .shortname.
>
> **[4:56](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/creating-routes-for-all-subpages?u=76281980&t=296)** I will copy that now again and paste it into the feedback.js file. So the first route is pretty much the same. I will just change the response we send to feedback page.
>
> **[5:13](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/creating-routes-for-all-subpages?u=76281980&t=313)** And then now I want to define another route that will be later used to receive the data when someone submits the feedback form, and for that we will now set another HTTP verb, not get, we will use post, because we will send this form with post. Don't forget now to remove this shortname parameter here, and then we'll just send a response like feedback form posted. So this should make sense for you. So we have an HTTP verb of get, which will show the feedback page, and when I submit the form against the same /feedback route, this post routing handler will be called, and right now we will just return feedback form posted from there. As we see now also, the application is now starting properly again because we implemented the routing functions, so we can now head over into the browser and just open localhost 3000. The index page still shows up. Let's see what happens when I access /speakers. And this shows speakers list. Now let's say there is a speaker Daniel. This would show the detail page of Daniel, and also we can just do the get request to the feedback page, and I also get the feedback page here. So that's it.
>
> **[6:44](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/creating-routes-for-all-subpages?u=76281980&t=404)** We have all routes for our sub-pages done. As you can see, express router gives us a lot of flexibility to structure the routes in a meaningful way. Let's now go ahead and add some business logic that we will need inside those routes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (9), [[Representational State Transfer (REST)|Rest]] (1)
> **File Paths:** index.js (3), feedback.js (2), speakers.js (2), server.js (2)
> **Code Identifiers:** speakersroute (3), feedbackroute (1)
> **Env Vars:** http (2)
> **Analogies:** for instance (1), similar to (1)
> **CLI Commands:** make (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)

#### [Add business logic](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/add-business-logic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/add-business-logic?u=76281980&t=0)** - [Instructor] With our routes in place, we're missing an important piece of our application. Right now, if one speaker would ask us to change their information, we'd still need to change that on various locations like for the navigation and for the top list of speakers. Also, how should we collect feedback and show it on the Feedback page? We want a central place where all the speakers' information and all feedback is stored. We need a way to retrieve this information to render into our template. In any dynamic website, you will find some kind of business logic. As this is regular [[JavaScript]] code and not really related to Express, I've already prepared classes that will give us that. You'll find them in the provided folder in Services. So, to get started, let's move this Services folder to the root of our application. Also, there is a folder, Data, that contains the feedback and the speakers data. So I'll move that to the root of my application as well. So the provided folder should, after that, be empty. Let's look into the Data folder real quick, so I have all speakers information already in there, including the artwork for the given speaker and their short name. And I also have a feedback.[[JSON]] file with all the feedback that we received so far. Let's real quick open the SpeakerService and, there, you'll find various methods to retrieve data from the JSON file and return it.
>
> **[1:36](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/add-business-logic?u=76281980&t=96)** And, for the FeedbackService, we also have a method that gets all feedback and one to add an entry. We will use all those methods throughout the [[Representational State Transfer (REST)|rest]] of the course. And, when you look closer into it, you may think that there are more efficient ways to work with this data loaded from a file, like we could load this data just once and not for every method. I did it like that because I want it so that the logic resembles how you would work with the database to store the data. If you want to build on this course material for a real page, it should be easy to switch the database later. Speakers and feedback are going to be used within our routes, but I want to instantiate them centrally in server.js and make them then available to my routes from there. And this is where the way we created the [[Routing]] handlers before, like as a function, comes into play. So, first, I start out by opening server.js and there, I first have to require those two service classes. So, somewhere on top, I add: const FeedbackService equals require, dot, slash, services, FeedbackService. And the same goes for SpeakersService equals require,
>
> **[3:01](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/add-business-logic?u=76281980&t=181)** dot, slash, services, SpeakerService. Next, I have to create instances off those classes, so I will now add const feedbackService, and now I'm using lowercase because this is a class instance. Const feedbackService equals new FeedbackService and there, I'll now add the path to the data file. So this is what the constructor expects. Let's look into that one more time real quick. You see that the constructor expects a data file that points to the JSON file. So I add dot, slash, data, feedback.json.
>
> **[3:46](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/add-business-logic?u=76281980&t=226)** And I do the same for the SpeakersService, so add: const speakersService equals new SpeakersService, and there, I'm passing the path to the data, speakers.json file. And, as I said before, I now want to pass down those two instances of those classes to our routing infrastructure and, for that, I can now simply add an object, so curly brackets as argument to the Routes function and then we'll simply add now FeedbackService and SpeakerService, so this will pass down those two service instances to the routes. And, if you wonder, because the syntax is unfamiliar for class syntax, this is the same as if you would write something like speakersService, colon, speakersService, so technically, it's the same, it's just a shortcut. In my routing handlers, I have two, of course, now. So I'ma collect these class instances, so I go into Routes and, in index.js, I can now get this as function argument and I call this function argument "params" and we're going to save it. I will prettify that and remove the parentheses here and I pass down those params simply to the Speakers and the Feedback route.
>
> **[5:20](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/add-business-logic?u=76281980&t=320)** And now we have to proceed in speakers.js. And there, I'm using a so-called destructuring assignment, so I'm using const and curly brackets, SpeakersService, equals params. Yeah, of course, I have to also add params here as a function argument. So this is the same as if I would do something like params.SpeakerService and remove those parentheses, so technically, that's the same, but you'll see already that then this link tells me, oh, better use that destructuring assignment. And, when I save, it will even do that for me. So let's try using the SpeakersService right in the index route, so I can now add const speakers equals, and I call SpeakersService, getList, which gives me a list of all speakers and this is an asynchronous function, so I have to await it. And, when I await a function in another function, I have to make this function async, so here, for the callback, I now add async in front of it. Otherwise, I cannot await for an asynchronous function. And, in the end, I simply will return response and, of course, Express gives us also a method that returns JSON, so I add response.json, speakers, so this will be a proper JSON response
>
> **[6:56](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/add-business-logic?u=76281980&t=416)** with the content of what we got from speakersService.GetList. And let's do the same for Feedback, so I go to feedback.js. Again, I'm receiving params here and then I will now add const and, again, destructuring assignment: const feedbackService equals params. And we create an async function here again and I [[Fetch]] the feedback by adding const feedback equals await feedbackService.getList.
>
> **[7:43](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/add-business-logic?u=76281980&t=463)** This will give us all feedback and, again, I'm returning JSON and, in this case, now the feedback. So the application is still reloading, does not show an error, that's already a good sign. Let's try this out, I'm heading into the browser, and let's open localhost:3000/speakers and I get a list of speakers back. And let's do the same for feedback. And here is the list of feedback. So, as you see, we now have the business logic in place and we can now build the rest of the application on it by rendering this information into our templates.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (9), [[Routing]] (3), [[Representational State Transfer (REST)|Rest]] (2), [[JavaScript]] (1), [[Fetch]] (1)
> **Code Identifiers:** feedbackservice (4), speakersservice (4), getlist (2)
> **File Paths:** feedback.json (2), server.js (2), speakers.json (1), index.js (1), speakers.js (1)
> **CLI Commands:** find (3), make (2)
> **Env Vars:** json (5)
> **Definitions:** is a  (2), is an  (1)
> **UI Navigation:** open the (1), go to (1)
> **URLs:** [localhost:3000](https://localhost:3000) (1)

#### [Add a session management middleware](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/add-a-session-management-middleware?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/add-a-session-management-middleware?u=76281980&t=0)** - [Instructor] While we are at fleshing out the application logic, I want to add one more piece of middleware that is common to web applications, and that we will also need a bit later. HTTP is stateless, this means that it doesn't recognize a user between requests. To persist data for a user from request to request, we need sessions. In my course Advanced Express, I provide detailed insights into how sessions work. For this course, I keep it short, and just show you how to install a proper session management system, and how to use it. There are various different session modules for express. We will use cookie sessions. Cookie sessions store the data we want to persist for a user encrypted on the client, this needs to be encrypted, because we don't want the user to be able to see and manipulate what we store in that session. The encryption hides it from them. To get started we will now install the cookie session module, so I'm stopping nodemon and Express, by pressing CTRL + C. And I will now type [[npm]] install cookie-session.
>
> **[1:12](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/add-a-session-management-middleware?u=76281980&t=72)** And then I can start my application again. And in the server js, I now add on top, as you expect already, const cookieSession equals require cookie session. And then I have to add this middleware to the request lifecycle, because it has to [[Fetch]] those cookies that are sent with the headers that come from the client and parse them and also then set them on the request object so that we can work with them. Right before we set the view engine I will now add app.use and the middleware is called cookieSession, and I add some configuration object there. The name of the session object should be session, and I can define keys here. So, this is a set of keys that will be used then to encrypt the cookies, and there I'm very creative, I'm just putting something in there, it just should be random, do whatever you want. And I do one more thing. Look closely, because if you deploy this application ever to a web server, and usually this runs behind a reverse proxy like NGINX, then your whole cookie system might not work because you have to add app.set trust proxy 1.
>
> **[2:50](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/add-a-session-management-middleware?u=76281980&t=170)** And this makes express trust cookies that are passed through a reverse proxy. If you don't have that, your whole cookie system might fail then, when you deploy to production, and this is really hard to track down. Of course, there are more options that you can pass to this cookie session module, but for what we need this is completely sufficient. Now, let's find a way to test this. Let's go to our index route. So, I open routes, index js. And let's create a very simple visit counter in this index route. So, I add now, if not request, and now cookie session will store this information on a property called session on the request object, and I want to store the visit count on a property visitcount, if it does not exist, I will initialize it now. So, I add request session.visitcount = 0. And after that, I can now just do something like request.session.visitcount += 1, so this will increment the visit count by one. And below that, I will log out the console. I add console log, and I'm using string interpolation here. And I add number of visits,
>
> **[4:26](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/add-a-session-management-middleware?u=76281980&t=266)** colon, dollar, curly brackets, request. And let's copy paste that here, request session visitcount, and then paste it in here. Okay, so far so good. Let's see what happens now. So, I open my browser again, and I head over just to the index route, and I run this application. Let's see what we get on the console. And I see number of visits one. Let's reload it a few more times. And, yeah, you see that now the number of visits is at 11. And to prove this is now really stored for a specific user, so that is not all visits of all users, that's the visits of one specific user. I will now just open chrome in incognito mode, because incognito mode starts fresh, without the cookies we just set. And I will now simply open the page again. And if we now look into our console you see that the number of visits is again one. And if we go back to the regular page and we reload. You see that the number of visits is 12. So, it's really specific for a given user. Let's be a little bit more curious. Just, let's look into chrome developer tools. And there, let's just reload the page. And right on top, this is where the page actually
>
> **[6:02](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/add-a-session-management-middleware?u=76281980&t=362)** the [[HTML]] gets transferred. And there, you have this tab Cookies, and you see that there is this session cookie, which contains this encrypted value. So, that is all done by the session handling middleware, you just add it. To clean this up, let's remove this visit counter, we don't need it going forward, so I'm just removing it from the index route again. This session middleware gives us a working session system, so that we can persist data from request to request, and we will use it a bit later in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (1), [[Fetch]] (1), [[HTML]] (1)
> **Env Vars:** http (1), ctrl (1), nginx (1), html (1)
> **CLI Commands:** npm (1), nginx (1), find (1)
> **Definitions:** means that (1), is called (1), is a  (1)
> **Prerequisites:** install (3)
> **Code Identifiers:** cookiesession (2)
> **Cross-References:** go back to (1), later in (1)
> **UI Navigation:** go to (1), open the (1)


### 4. Professional Templating with Express

[↑ Back to Table of Contents](#table-of-contents)

#### [Create a site-wide layout](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/create-a-site-wide-layout?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/create-a-site-wide-layout?u=76281980&t=0)** - [Instructor] So far we created one template for the index page. If we look at it, there are parts that will be the same for any sub-page. This would be the whole [[HTML]] head section with just the page title changing but also the navigation, the hero section with the large image is something that you may want to show on some sub-pages. Let's open Chrome developer tools real quick and for that I can just now click right into the page and choose inspect because we want to inspect the parts of the page. And if we hover over those section in html on the right side, we see that they get marked on the left side, so we can identify which section we are on in html. And there you see that we have this header section with this jumbotron up there and then we also have this nav directly below and then there is an article that contains the speakerslist and if we keep scrolling, we end up at some container and let's scroll down here on the page as well. And you see that this container contains the content of this individual page. And within this container we, again, have also two sections. The first is the left section and then we also have side bar. Everything in this container is specific to a given page. The parts around it are the so-called layout. And the content of an individual page should ideally be loaded into this layout.
>
> **[1:34](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/create-a-site-wide-layout?u=76281980&t=94)** Some template engines come with some layered concept out of the box, AJS doesn't. But it's easy to build something similar. For that, let's go back into Visual Studio code and there I will now create a folder layout inside my fuse folder. And then to get started, I will just copy and paste my index.js file that I have in pages into layout. Then I open the index.ajs file in pages again, so careful that you are back on this index file inside pages not the one inside layout now. In there, I will now remove everything that is surrounding my actual content container. And for that I'm scrolling down and so here we are at the header section between navigation, there is the jumbotron and we scroll down further and there we have the the speakerslist. And the speakerslist is something actually that is specific to the index page. so we leave them in. So and then I'm scrolling further and remove more or less the [[Representational State Transfer (REST)|rest]] of it on the right side so here we are, that's still the main content. Scrolling, scrolling, scrolling. Here we have the side bar with the pictures. And then you end at the section with [[JavaScript]] and here we can actually remove everything until down to the html.
>
> **[3:07](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/create-a-site-wide-layout?u=76281980&t=187)** And if we save, you'll also see that Prettier will now fix the indentation and if you see something like that, so if the div is maybe here on the same level, you're most probably just forgot to remove something on top so then you just have to look at it again and just make sure that the indentations are really nested as you see them here. So this is now really the content of our index page. Everything on there belongs to the index page. Now I save this and then I go back in to the index.ajs file in layout. And now I'm going the other way around. So now I'm removing everything from the layout that would be specific to a given page. So, I'm scrolling down and I'll leave the jumbotron in here, the navigation stays but everything here starting with the speakerslist way down to the JavaScript down here is now page specific. Here, I'm just making one important change that is key when moving from local static files to a template-based approach. I make the path, you see here in line 85 to /js/pixgrid.js, I make it absolute. So I removed the dot here. This is because the absolute path points to the root of a project when it's delivered via Express and it will work even when we are on a sub-page where the relative path would not point
>
> **[4:40](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/create-a-site-wide-layout?u=76281980&t=280)** to the right location anymore. We will fix that in various locations while we are creating the other templates. Just so you're aware why we are doing that. What's left now is some way to load the contents of a page into this layout file dynamically. And we already learned that AJS supports includes. So we can now scroll up again and after the header section we will now enter the template tag and this is the &lt;% and then now using the dash, the minus because we want to include the template unescaped because if you would escape it, the html in this template would be escaped as well and you would see basically the html show up on your page and not the parsed html. So, I add now include, and there I'm using backticks because can use string interpolation here as well and there I'm now pointing to ../pages/${template}
>
> **[5:45](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/create-a-site-wide-layout?u=76281980&t=345)** and don't forget to also close this template tag here. Next of course we need to change the template rendering function to actually render the layout and pass in to template that we want to be included in to this layout. So I'm opening routes index.js and there I have my index route with the render in there and there I will now change the render function to render layout because that would point to fuse layout and then default to index.js and the page title can stay the same and I will now add a new template variable that is index. That's the template we want to include in to this layout. Now I'm anxious if this still works as before so I'm opening Chrome again and there I reload the page and this looks actually pretty good. So we now have a layout base template system and it's now way easier and way less redundant to create the other sub-pages using AJS.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (7), [[JavaScript]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **Exercise Files:** template (13)
> **File Paths:** index.js (3), js/pixgrid.js (1)
> **UI Navigation:** scroll down (2), open the (1), scroll up (1)
> **CLI Commands:** make (3)
> **Env Vars:** ajs (3)
> **Tools:** visual studio (1)
> **Definitions:** is an  (1)

#### [Using partials with EJS](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/using-partials-with-ejs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/using-partials-with-ejs?u=76281980&t=0)** - [Instructor] As developers, we know that it often helps to move recurring or just large sections of code into large functional units of their own. This removes redundancies and increases readability and reusability. When creating templates, such functional units are often referred to as partials. When we look at our layout file in views, layout, index.ejs, we see that it's already pretty cluttered with different parts of content. So if I wanted to change my navigation section, you see that I have to scroll around to eventually find it and do my edits there. So the navigation would be a good candidate to move into a file of its own. So let's try that out. I will now, in layout, create a new folder, partials. So that's where all our partials should live. And in there, I create a new file, navigation.ejs. Next, I will copy the whole navigation section from my index.ejs file, and you find that, here on line 27, you see that there, this nav section starts, and if I scroll down all the way, you can follow along this vertical line here as well because this marks the tag we are actually on. And here the nav tag closes, so I'm cutting it out here. And I move back to navigation.ejs, and then paste for the cut-out before into this file. When it's saved, the indentations are fixed,
>
> **[1:35](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/using-partials-with-ejs?u=76281980&t=95)** and you should, as well, see this proper nesting as I have it here in my file. While I'm here, I also want to fix all links to actually point to the right sub-pages, as they will be named later then on my dynamic page. So I'm looking through the file, and I see that ./index.[[HTML]], this is actually the slash path. Here on line 15, there is the same. I replaced it as well. ./speakers.html should be /speakers. And further down on line 30, again have a link to speakers.html. I remove the dot and just call it /speakers. And we see that there are those dropdown items, and we have this link to Hilary Goldwynn. We can leave it like that because we will make this section dynamic later anyways. So we will fix those links. But we can also fix /feedback.html to be just /feedback. Let's see if we forgot something. No, this looks good so far. So what's left to do is in my layout index.js file. I, of course, also have to now add this include, so I'm using the bracket here in the header section after the jumbotron. Bracket, percent. And I want to again include unescaped HTML, so I use this dash. And then I add, include, ./partials/navigation, and I can omit the EJS extension.
>
> **[3:13](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/using-partials-with-ejs?u=76281980&t=193)** And don't forget to close this tag here as well. Now let's look into the browser. Let's reload the page. And we see that the navigation is still here, and now all the links, like to All Speakers, are fixed as well. And also this link on this Roux Meetups now points to the root of our application. Let's look into the layout file again. And we also see that there are plenty of scripts here, and those other scripts here harm readability, so why don't we just also move that out into a file on its own. So I'm cutting out the script section, and in partials, I create the new file. And how should we call it? Maybe, scripts.ejs. And I simply copy that part in there as well. Of course, again, I have to now also do it, include those scripts. So I add, and for that they can just copy the navigation part. And after the template is included, so just before the closing body tag, I will now add, include, ./partials/scripts. Now if I reload the page, everything looks good still. And we see if the scripts are working by just clicking on one of those images because pixgrid is used for showing the pop-up for this image. And if this works, then obviously the scripts are included properly as well. And, of course, you can always go into Chrome Developer Tools using Inspect
>
> **[4:49](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/using-partials-with-ejs?u=76281980&t=289)** and see how the code actually looks like. And you see here that the scripts are again here because they're rendered via include.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (5)
> **File Paths:** speakers.html (2), index.html (1), feedback.html (1), index.js (1)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** html (1), ejs (1)
> **UI Navigation:** scroll down (1), dropdown (1)
> **Exercise Files:** template (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### [Template variables in more detail](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/template-variables-in-more-detail?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/template-variables-in-more-detail?u=76281980&t=0)** - [Instructor] You already saw that we can make variables available to templates. In our index route, we did that for the page title and also for setting the template that should be rendered with the layout. Template variables are dev way to make any dynamic data available to templates and Express knows three different types depending on their scope. First, you can set the variable directly as we see here on line 10 on our index route. These variables are only available to the particular template for this particular request. Second, Express also knows variables that are globally available to any template for a given request. So they are request global template variables, and they are set on the response object. Typically you would set that via middleware. So let's try this out real quick so I go into server.js and there, after the express static middleware runs and now add a new middleware where app.use and we know already it takes a callback that takes a request, a response and a next argument and here on the response object, I can now set something like response and the variables are set on a sub property called locals and here I can just set any variable name like someVariable equals hello. So this variable named someVariable will then be available to any template and also of course, to the layout file.
>
> **[1:34](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/template-variables-in-more-detail?u=76281980&t=94)** Of course, as for any middleware, I will return next mean. Lastly, there are also variables that are set during start up of the application and then available for the whole lifecycle. This is done and you might guess this already, on the application object. So on the application object, there is also locals property so I can set app.locals and here we will start by defining a global template variable that contains the name of the page so I add app.locals.siteName and I let this be ROUX Meetups and I used uppercase for the ROUX so that we see a difference when we try it out then later. And to use that variable now, I go into views, layouts, index.js and there for the title, I will now replace the static site name with bracket percent sign equals because we want to output something and I just enter siteName here. Maybe let's do a pipe between siteName and pageTitle. So let's try that out. In the browser, I will open locahost:3000 and we see that now here up there on the tab that ROUX is now written uppercase so it's coming from the template variable we just set. We also have the name of the site in our navigation. Why don't we also change it there to be dynamic, so I open layout, partials, navigation
>
> **[3:12](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/template-variables-in-more-detail?u=76281980&t=192)** and there I look for the navbar-brand class and in there we have this Roux Meetups again and there I also will simply add siteName in template tags. In the browser, let's reload it and we see that now it's also here written uppercase, means coming from this template variable. When I look further on my page, and into the navigation and here we have this dropdown with Speakers. I see that I have a list of All Speakers here in this navigation. So it would be cool if we can make this also dynamic and ideally, this should run with each and every request and should then be available to all templates. This means that we could during runtime even change the name of a speaker and it would automatically update. To accomplish that and I showed that a little bit already, we can go into server.js where I already created this middleware before. First, let's remove all that is in there in this middleware function. And I add a try catch block and if you're wondering what we're doing here, we will cover Express error handling in great detail later. For now, just follow along. If there's an error, we'll return next error. And in the try block, I now add const names equals and we have the speaker service available in this file already because we declare it up there in line nine. So I can now simply add speakerService.getNames and do you know what I forgot here?
>
> **[4:47](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/template-variables-in-more-detail?u=76281980&t=287)** Of course, I have to avoid on that because this is an asynchronous function and also I have to make this callback asynchronous. Now to make this available to all templates and also to the layout, I add response.locals.speakerNames equals name
>
> **[5:11](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/template-variables-in-more-detail?u=76281980&t=311)** and to see that what we did actually worked, let's do also a console.log and let's just output this response locals here, this object to see if this worked as expected and in the end, never forget to return next from a middleware. Let's reload the page. And look at the console because as you see here, we have here now this locals object and this locals object contains one property speakerNames with the names and short names exactly as we needed for our navigation. So with these names available to all templates, let's see how we can use it to render the speaker navigation.

> [!info]- Semantic Content
>
> **Code Identifiers:** sitename (4), somevariable (2), speakernames (2), pagetitle (1), speakerservice (1)
> **Exercise Files:** template (10)
> **CLI Commands:** make (5)
> **File Paths:** server.js (2), index.js (1)
> **Env Vars:** roux (3)
> **Definitions:** means that (1), is an  (1)
> **Ports:** :3000 (1)
> **UI Navigation:** dropdown (1)

#### [Looping through lists in templates](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/looping-through-lists-in-templates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/looping-through-lists-in-templates?u=76281980&t=0)** - [Instructor] By now we have the list of speaker names that we [[Fetch]] with every request and store into a template variable. Let's see how we can now render the navigation from it. For that, I open views, layout, partials, and there, navigation ejs. You now already see how much easier things get once the layout has been split into logical parts, because now I am right in my navigation, and just scroll down until I find this dropdown. It starts at line 29, and there I see that the individual speaker starts with line 33. And what I will do now is, I separate this out first by adding blank lines. And I will remove this Lorenzo Garcia entry, and also the last entry for Mr.Rewington, and just leave Hillary Goldwynn in here. We use that entry more or less as a blueprint for the dynamic data that we want to render out now. Next, I want to now loop through the speaker names template variable. And for that, I first add the template tag we know already, and I don't use now a equal sign or a minus, because I'm not outputting anything. So, for control structure I just use bracket percent, and there I now start out by adding speaker names, and there I can now call, like in [[JavaScript]], forEach on it. And as it is with a forEach function, this takes a callback that gets,
>
> **[1:35](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/looping-through-lists-in-templates?u=76281980&t=95)** for each iteration, the current array item. And then I continue as if this would be regular Javascript, by adding curly brackets, so this now looks very much like regular Javascript. And all I have to do now is to actually close the template tags, here and down here. I close that so that EJS knows that this has to be parsed as Javascript, and then I take the more or less blueprint, this one entry that we kept, and I copy that into my loop statement here. And in this loop statement, I now have this speaker variable available, the loop run over the variable, which will, for each iteration, contain another speaker. So, I will now simply change everything that's static here to be dynamic and also represent our dynamic page. So, for the speaker link, I now add speakers/, and this should point to the speaker.shortname, and in the console you'll see speaker names array as well. So, you see that there is a speaker property for each speaker, and we also want to output the full name. So copy, paste this block I have here on the link. And here, change it, to simply be speaker.name. So, this should be it, let's head over
>
> **[3:09](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/looping-through-lists-in-templates?u=76281980&t=189)** to the page and reload it, and when we now look into the speaker array, we see that the links are now correct. And we know that this list of speakers is fetched for each request, so when go now into our data, speakers [[JSON]] file, and I change Lorenzo Garcia to be Lorenzo Garcia the third, and I reload, this is now directly reflected in the navigation. We also see that it's not reflected yet in this section with the top speakers, with the pictures, because this is still static. So, what we are going to do next is we will make this dynamic as well. And as this is only used on the index page, I will also fetch this information just for the index page. For that, I go back, and let's first go into server js and remove this console log block statement we had before, we don't need it anymore. But, I will now go into routes, index js, and there first have to get the speaker service, and you should know already how this is done. So, I add const speakersService equals params. Next, I want to fetch the speakers list, and in this case, the speakers names won't do because we also want to have the title of the talk of the speakers, and we have a method for that. So, I now add const topSpeakers equals, and now we await again, this means we have to make
>
> **[4:44](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/looping-through-lists-in-templates?u=76281980&t=284)** this callback function here async, and I add speakersService. And there is a method called getList, which will give us the complete speakers list, including the title of the talks, and to also see that let's do console log here, topSpeakers, and we also want to, of course, make this variable now available to our template, so add topSpeakers to the second argument object. Let's reload the page so that we get this list content to know how this object looks like. And you see that we, again, have name, shortname, but also the title of the talk, and the summary for the talk. To use this data now, I open our page, this index ejs, and there on the very top, we have the top speakers list. And as you might already have guessed, this is a good candidate, again, to factor out into a file on its own. So, I will now just copy that whole article at the very top, and I will create in pages a new folder partials. And in there, I create the new file topSpeakers.ejs. And then paste the content in here, and back in my index ejs file, I now have to add includes, so I add the
>
> **[6:21](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/looping-through-lists-in-templates?u=76281980&t=381)** bracket percent, again, with the minus, because I want to have unescaped [[HTML]] here. And I add include ./partials, topSpeakers. Let's reload the page, and see if everything still works. And it's looking good. Next, let's open topSpeakers again, and of course we now want to render this dynamic content into that, so we want to render a list again, and this is now just a little bit more complicated, because there is more content in here. We now have to separate out where such as speaker entry starts and ends, and we see that this is actually this call, and the text center that defines the speaker. So, we can separate it out by creating a empty line here. And, if you look a little bit closer, those entries are not the same for some reason, so our designer was a little bit careless here. You see that we have here a div for the speakerslist-info, but further down, we have a paragraph for the speakerslist-info. I'm removing this first entry, I will stick to the paragraph, because all other entries are using the paragraph here. And we now want to render the list here as well, and this is just a little bit more complicated, because there is just more content in there, and we have to figure out where such a speaker entry starts and ends, and if we look a little bit closer, this is actually this col-md text-center that defines one speaker,
>
> **[7:57](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/looping-through-lists-in-templates?u=76281980&t=477)** so I can separate this out here. And further down, again, so these are my speakers entries. Now let's remove all entries but one, and let's save to make sure when it's formatted, that the nesting of the div system's correct, and it is. And I will now, again, as we did it before, traverse the list. So, I use &lt;%, topSpeakers, and forEach, and in there, I have again, this callback function that gets each element of this array as an argument. Again, add these curly brackets. And I should not forget to close the template tags. Also here, on this line above. And then I will just copy this speakers element into this loop statement. And as before, this will now loop through the speakers, and for every iteration, I have now access to the current speaker object. And for the title I can now add &lt;%=speaker.title. You see it here on the console, as well. So, as a reference, we see also how this object looks like. And further down, for the speaker name, I add speaker.name. And we also have to fix the links for the speaker, so this is then /speakers, and the speaker's shortname, and when you look a little bit further,
>
> **[9:36](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/looping-through-lists-in-templates?u=76281980&t=576)** we need it again because there's also a link on the image, so I copy paste that here for the image link. And if we look how the image source actually looks like, it uses the speaker shortname just with an _tn, for example, and then jpeg. So, I can derive the URL to the speaker's image from the shortname. The only thing I want to fix here as well, is to use an absolute URL here, and then I can insert the speaker shortname here. So this will then point, and if you don't believe me, you can also look into static, images, and there you see speakers, and there you see the shortname always appended with _tn, so this will then point to the right image. Also, you see the alt text, and we want to have the speaker name in there as well. So, I change Hilary Goldywynn Post also into a template variable. Let's see if we have anything static left. No, I don't see anything, looks good so far, so let's reload the page and see if this works. And you see now that we have this Lorenzo Garcia the third, so this means this was now rendered directly from a JSON file. We now decided that it is actually not Lorenzo Garcia the third, so I go back into speakers and remove this entry here, and reload. And you see that it gets the name entry updated. Let's hover of the links, and you also see that
>
> **[11:12](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/looping-through-lists-in-templates?u=76281980&t=672)** the links are now correctly pointing into /speakers. So, we are now way closer to having a dynamic website, but when we try to get to speakers, All Speakers, we see that there is no template yet, so let's go ahead and create templates for the speaker's list, and also for the speaker's detail pictures.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (4), [[Fetch]] (3), [[JSON]] (2), [[HTML]] (1)
> **Code Identifiers:** topspeakers (7), foreach (3), speakersservice (2), getlist (1)
> **Exercise Files:** template (8)
> **Env Vars:** json (2), url (2), ejs (1), html (1)
> **CLI Commands:** make (4), find (1)
> **Definitions:** is a  (3)
> **UI Navigation:** scroll down (1), dropdown (1)
> **Analogies:** such as (1), for example (1)

#### [Creating a list page](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/creating-a-list-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/creating-a-list-page?u=76281980&t=0)** - [Instructor] So far, we've only have the index page template ready. Now it's time to implement some more pages. If we look at the static page, we see that there is a page that shows all speakers. We created a route for that already. When I click on a speaker, I get to their profile page. And when I look at this profile page, it contains a large image, just the artwork for this given speaker, and then some detailed information about this speaker. Such a pattern of list and detail pages is very common, and we need to find a way to let Express know which speaker it should show on the detail page. Such a pattern of list and detail pages is very common. We need to find a way to let Express know which speaker it should show on the detail page and this is where parameter routes come into place. Let's implement the speakers list template and this should by now look very familiar to you. And there, I look into my static folder and I will take this speakers.[[HTML]] file and I copy it into my views pages. Folder, and then I rename speakers.html into speakers.ejs. Next, I'm going to remove everything that is part of the layout, so this is everything down to this line 46 where we have this container mt-4. Then I look for where the [[JavaScript]] tags start and I will remove that as well down to the HTML. Then, as I mentioned before,
>
> **[1:35](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/creating-a-list-page?u=76281980&t=95)** we have to fix those image links to be absolute but we will take care of this artwork sidebar anyways later so we can leave it as it is right now. Next, let's change our route to render this template. So I take the route we have already in index.js and there remove this console.log statement already and copy our index route because it's very similar to the speakers.js file and I replace what we have in here now for this /route. The only thing that changes is that these are not, now not the top speakers, they're just the speakers. The getList statement stays the same. And I will just pass speakers as variable to this template and of course, we have to change the template that we want to render and it's now the speakers template and the page title should be Speakers. Let's see if this works already, so I go into my browser to the page and there I use the navigation and click on Speakers, All Speakers. K, this looks good so far but it's still just a static placeholder content and we will replace it now with dynamic content. So in my speakers.ejs file, I now have to again identify where those individual speakers entries start and I can do that also by again in the browser clicking Inspect.
>
> **[3:12](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/creating-a-list-page?u=76281980&t=192)** And we see that one particular speaker is always this div class mb-4. So that's easy. So I look for this div class mb-4 and it's here. And I just select one entry that I will use as blueprint and I can remove all other entries. This goes down to where the article HTML tag is closed. So this what we have left now is one particular speaker. Let's see if this is correct by just reloading the page. Yes, this looks good. Next, we are going to use the loop statement we had before. So we add speakers. Next, we are going to do something very similar to what we did before for the top speakers so I add speakers.forEach and again we get this callback function and this function gets the current speaker from the array for each iteration. Let's close the template text here and also up here and I take now this one speaker entry and paste it into this loop statement because as you know, now we have the speaker as variable available for each iteration. So I can now again change what we have in here to speaker.title and I copy that
>
> **[4:49](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/creating-a-list-page?u=76281980&t=289)** because I'm lazy and I change the name to be speaker.name. And of course, the URL has to be /speakers/speaker.shortname.
>
> **[5:08](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/creating-a-list-page?u=76281980&t=308)** And down here, also there is a placeholder for Lorenzo_Garcia. I just replaced it with .speakers.shortname. And also the image link needs to be fixed. First it should be absolute and I also want to put the shortname here and the alt text should also contain the real name of the current speaker and down here we have the summary for a given speaker and then know that is stored in speaker.summary. Again, there should be no static content left and this looks good so far. So let's see what happens when I reload the page and we see that this is looking good now so we have now the real speakers list rendered out here as expected so this now a dynamic page as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (4), [[JavaScript]] (1)
> **Exercise Files:** template (7)
> **File Paths:** speakers.html (2), index.js (1), speakers.js (1)
> **Env Vars:** html (2), url (1)
> **CLI Commands:** find (2)
> **Code Identifiers:** getlist (1), foreach (1)
> **UI Navigation:** click on (2)
> **Definitions:** is a  (2)

#### [Using parameter routes](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/using-parameter-routes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/using-parameter-routes?u=76281980&t=0)** - [Instructor] With the speakers list in place, all that is missing now is the detail page. Let's again click on one such link in the speakers list. And you see that we end up on a page that contains the shortening of a given speaker. And we want to now create the route that shows the detail page for a speaker by a given short name. For that, I open Visual Studio Code again. And I first want to implement this route. So I go into speakers. And we now need some way to get the speakers details by the short name. And you see that we have a parameter route here already that gets the short name. And now I'll start out by adding const speaker equals await. And of course, I have to add async to the callback here. And I'm using the speakerService here. And that now, I need a method that gives me a speaker by their short name. So let's look into SpeakerService. And there, on line 68, you should see this method. So, it's getSpeaker, and it takes the short name as argument. Back in speakers.js, I will now just call getSpeaker. And do you remember how we get to this short name? It's in request.params.shortname. So all request parameters are in request.params.
>
> **[1:36](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/using-parameter-routes?u=76281980&t=96)** Let's do a console.log for this speaker, so that it's later easier to output everything inside the template. And of course, we want to render now a template with the layout. So I copy this render function from the regular/route int. Paste it here. Over end, I of course want to render another template. It should be then speakers-detail and it gets the current speaker as an argument. Of course, we now have to create the speakers-detail template so I look into my static folder and there I have this Hilary.Goldwyn.[[HTML]] file and I copy that over into my pages folder.
>
> **[2:28](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/using-parameter-routes?u=76281980&t=148)** And I rename it to speakers-detail.ejs. And now very similar to what we did before, we remove everything that we have here until we reach this container statement and then we scroll down to find where the [[JavaScript]] starts and remove everything down to the HTML. And here in this file, we now have this speaker template variable and we have to now just use that to replace all static content with the dynamic content. So I add brackets percent equals speaker.title for the title. Let's copy, paste, copy here again. That's the speaker name. Then also let's fix the links. It's /speakers/ shortname. Down here again /speakers/ shortname. And for the image, I now don't have the thumbnail but the big version so it's just the speaker.shortname.jpg and I also have to fix the alt text to be Photo of speaker.name. So let's now see how we get this information. We see that this is a long information now. Not the summary we had before and we added a console.log so we just have to reload the page.
>
> **[4:00](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/using-parameter-routes?u=76281980&t=240)** We see already that it works but there is still the placeholder text in there. So let's see how this property is named and it's named description. So down here, I remove these paragraphs and I add speaker.description. Let's reload the page and see what happens now. And we see that a few things are wrong actually here. So the top large picture is missing. The artwork is not working and if we scroll down, we also see that the HTML is rendered because when we look into the description, we see that this actually contains paragraph text and they now show up in our HTML page. Do you know what's wrong here? Exactly, it's the equal sign that we are using here because we escape HTML and as said a few times before, if you escape HTML, HTML text will then regular show up in your page. So if we change this to a minus sign and reload that, see that this is now rendered correctly. Still we have some more problems on this page. So the artwork on the left side is not showing and also this jumbotron with this big picture on top is also not showing up. So something is still really wrong and also the styling is somehow off. So let's look into Chrome Developer Tools. Let's reload the page
>
> **[5:35](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/using-parameter-routes?u=76281980&t=335)** with the Network tab open and we see that there a few things are not loading and most importantly, our style sheet is not loading. So it does not find the style sheet and if we look closer under which directory the browser is looking for this style sheet, it becomes pretty clear, we see that the paths to the style sheet is simply wrong because it's under /speakers and that's obviously never the style sheet is. When we look into our static folder, this should be under /css. So what happens here? This happens because we are now under /speakers/Lorenzo.Garcia so that's one level down and this is pretty similar like any regular directory structure so we are one level too deep and somewhere we seem to have a relative link that now points into speakers and not to the root of our web server. So let's look into the layout file if we can find this problem. So in layout, index.ejs, let's see what's wrong here and if we scroll down, we see that the path to the style sheet actually is relative and this causes this whole problem here. So if I change this path to be absolute and reload to page, it works again and goes through the whole styling. It's correct again. What's still missing is the artwork but let's work together to fix that in the upcoming challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (7), [[JavaScript]] (1)
> **Env Vars:** html (6)
> **Exercise Files:** template (5)
> **UI Navigation:** scroll down (3), click on (1)
> **CLI Commands:** find (3)
> **Code Identifiers:** getspeaker (2), speakerservice (1)
> **Analogies:** picture (2), similar to (1)
> **File Paths:** speakers.js (1), hilary.goldwyn.html (1)

#### [Challenge: Partials and lists](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/challenge-partials-and-lists?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/challenge-partials-and-lists?u=76281980&t=0)** - [Instructor] Our site is now pretty complete and dynamic. But one thing that is clearly still missing though is the sidebar with the artwork. You see that here on the detail page it's even broken and if I look at the static page that we got in the first place I see that the index page contains a left sidebar with all the artwork of all speakers. The same is true for the speakers list. But when I go into one individual speaker I see that it only shows the artwork for this particular speaker. Also I see that regardless of the page the caption artwork on display on top stays the same everywhere. So it's the same here on the speakers detail page but also here on the index page. Let's take the challenge to first move this artwork section into a pod shell and then make it dynamic. For that we of course need a way to get the artwork for all speakers and also for a specific speaker using their short name. Let's go into Visual Studio code and look into the speaker service class. So I open services, speaker service, and when I scroll through it somewhere around line 36, you see this get all artwork method. So this will give us all artwork for all speakers. And if I scroll further I also see that there is already a method called
>
> **[1:34](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/challenge-partials-and-lists?u=76281980&t=94)** get artwork for speaker that takes a short name and only gives me the artwork for a particular speaker. To understand this a little bit better let's also look into the data that gives us that. So I open data, speakers.[[JSON]], and there you see that each speaker has some array with artwork attached to them. So with that knowledge you should now be able to take this challenge. You of course have to change the routes to [[Fetch]] the right array of artwork. You have to provide them to the templates and you have to factor out the artwork on the sidebar and also iterate through the array of art work items to create the list that we see on the page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (1), [[Fetch]] (1)
> **File Paths:** speakers.json (1)
> **CLI Commands:** make (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Partials and lists](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/solution-partials-and-lists?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/solution-partials-and-lists?u=76281980&t=0)** (punchy electronic music)
>
> **[0:05](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/solution-partials-and-lists?u=76281980&t=5)** - [Instructor] I hope you took some time to get the artwork sidebar part working. Here's how I would do it. So, I start out by first looking at the page, and to better understand the overall structure, also of this sidebar element, and for that, I would just right-click into the sidebar, and select inspect, because then I see how this whole sidebar is actually built. So, you see that there is first an article class that contains this who should come section, we will leave this alone, but after that, we have this next article that contains the artwork. So, it's two article classes on the index page for instance. When I look into this article class, we see that there is this pixgrid element, that's just a simple list of items, it's not even a [[HTML]] list, it's just all those images thrown into this element, pixgrid will then take care of rendering that properly. And we also see that we are rendering the thumbnails here. And it seems as if this _tn is a convention provided by pixgrid, because when I click on the image, it will automatically find and open the large version of the picture. With that knowledge, let's head back into Visual Studio Code. And there I will go into views, and into pages, and I want to first start with the index page. So, I open index ejs,
>
> **[1:40](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/solution-partials-and-lists?u=76281980&t=100)** and I look for this article class we talked about before. And I will now just cut this out. And I create the partial, and I will call this artwork.ejs. And then I paste what I just cut out into this file. Next, on the index page, I will just add the include to the index file where I just removed this section. So I add &lt;% and a dash, because I don't want to escape HTML, and I add include ./partials/artwork. And let's not forget to close this template tag. So, this should now still look as it looked before, so I'm opening the dynamic page, and head to the index page, and we see that the artwork is still there. Also, the large popups work still. I'm going to just reuse this section on every page that should show artwork. And this is the case for speakers ejs. So, here we have this artwork part again, and I'm removing this article, with all its content, and I replace it with the include to the partial. And the same is also true for the speakers detail page. There, I also look for this article tag,
>
> **[3:13](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/solution-partials-and-lists?u=76281980&t=193)** and I replace it again with my include. Now, let's look at the page again. I go to the speakers list, and the artwork is there. And I go to speakers detail page, and there we also have the artwork, but it's still broken, you should figure out meanwhile why this is the case, this is because we're having relative links here, for our images, but as we are rendering them dynamically now, I just left it at that. Now we have to change our routes to provide the list of artwork that is needed for a specific page to the template. So, I'm heading back into Visual Studio Code, and there I open routes, index js. And in there, I first want to now [[Fetch]] a list of all artwork items. So, add const artwork equals await speakersService.getAllArtwork. And I also, of course, want to provide this data to the template as template variables. So, I add artwork to the list of template variables. Let's look real quick at the index page again and reload the page to make sure that nothing is broken. So, everything looks fine so far, but we are not dynamically rendering the artwork yet of this list, so I'm going back to Visual Studio Code, and I need the same list of artwork on the speakers list. So, this is in route, speakers js.
>
> **[4:46](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/solution-partials-and-lists?u=76281980&t=286)** And there we'll also just paste in this line that gives us the list of artwork items in the art, add also here artwork to the template variables. And finally, on the speakers detail page, so that's the next route, starting at line 14, we want to output the artwork for each event speaker, so I now add const artwork. And I remove this console log statement that we used for debugging before. const artwork = await speakersService, getArtworkForSpeaker, and I pass in the shortname that we get this request param. And again, of course, I want to provide this to the template as template variables. So I'm adding that here as well. To better understand how this data looks like, I will just, real quickly, add here a console log statement that gives the artwork, and I head over to the browser. I open the speaker's detail page. And when I now look into the console, I see how this looks like. So, that's extremely easy, it's just an array with image items, and if we are fetching all artwork, it's just also an array with all artwork in there. So, that is simple to traverse, I'm just opening my artwork ejs file, with the partial with the artwork, and now I want to traverse this template variable. So I add &lt;%
>
> **[6:22](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/solution-partials-and-lists?u=76281980&t=382)** and I do artwork forEach, and this gets function, let's call this artwork item just item. Then I continue, as I would do with regular [[JavaScript]], just closing the template tags here in the end, and also on the first line. And then we'll just take one line out here. We will use as blueprint. But if you look a little bit closely, also see that we have here an alt text here, that is kind of indexed, so it shows artwork 0, artwork 1, and if you know Javascript, you may know that the second argument for each function is actually the current index, so I'm adding that here. And now I can remove all the static images. Finally, I just have to fix the URL to first be absolute, and then use this artwork name from the current item. So, I just add &lt;%=item. There is nothing else to do, because it's just an array item here. And I also want to output the current key here on the alt text. Okay, in a perfect world, this should now work out of the box, let's look if this is the case. So, I'm heading back to the front page, and we see there is still something broken, let's have a look what's wrong here. And for that, I just use inspect, and look at what I just did here.
>
> **[7:56](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/solution-partials-and-lists?u=76281980&t=476)** And I see that I did a mistake for the image name, so I head back to Visual Studio Code, and I see that I appended the jpg extension here, though it's already part of the item with the image name, so I can remove that. Now I'm going back to the browser. And I see that it's now rendering properly, and when I click on it, I also get the large image, so that works great already. The same should be true for the All Speakers list, and it is, everything still works. And let's look into a particular speaker. And this is now the artwork really specific to this given speaker. So, I would say mission accomplished, the artwork sidebar is now dynamic as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2), [[JavaScript]] (2), [[Fetch]] (1)
> **Exercise Files:** template (10)
> **UI Navigation:** click on (2), go to (2), right-click (1), open the (1)
> **Code Identifiers:** speakersservice (2), getallartwork (1), getartworkforspeaker (1), foreach (1)
> **Tools:** visual studio (4)
> **Env Vars:** html (2), url (1)
> **CLI Commands:** find (1), make (1)
> **Analogies:** for instance (1), picture (1)


### 5. Handling Errors Gracefully

[↑ Back to Table of Contents](#table-of-contents)

#### [How to handle errors in express](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/how-to-handle-errors-in-express?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/how-to-handle-errors-in-express?u=76281980&t=0)** - [Instructor] Mistakes happen. Be it some syntax problem or a field database call. Your application will run into errors and if they aren't handled gracefully, the question isn't if but when some error will take down your website and you get an angry call from a client. There're a few patterns and good practices to gracefully deal with errors in Express. We're already learned that in Express, each middleware function can either send a response which ends the request cycle or call the next middleware in the chain using next. But what happens when an error occurs inside the middleware or route? Let's try this out. So I open server.js and in there, I will just create some route that simulates an error. I do this right after the express.static middleware. I add app.get /throw and this gets as we know a request, response and the next argument and in there, I will now use the regular [[JavaScript]] function, throw new Error and I say Something did throw. Let's open the browser to run this route, so it's /throw localhost:3000/throw and we see we get the error message and we also get the so-called stack trace. It's not pretty but the application is still running so when I head back to the index page, I see that everything is still generally fine.
>
> **[1:35](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/how-to-handle-errors-in-express?u=76281980&t=95)** In my console, I also see that the error was logged out here. So that's the default provided by Express. So using throw would be a legit way to report an arrow. When something goes wrong, just throw an error and Express will show some error message. This is true as long as you aren't in an asynchronous invocation. I show you that by simply using setTimeout. That's an easy way to simulate asynchronicity in [[Node.js]], so I will create the setTimeout function here. And I move this throw statement into setTimeout and this should run after say 500 milliseconds. Let's open this throw root again and we see that now we get a pretty solid error. So this site cannot be reached and when I look back on the website on the index page, I see that the page is down. Looking into Visual Studio Code again, I see that Nodemon tells us that the app crashed. So as we see, throwing from an asynchronous invocation will crash your app and this is obviously something you want to and have to avoid. So how can we return errors from asynchronous invocations? This is where next comes into play again because next accepts an error as first argument.
>
> **[3:07](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/how-to-handle-errors-in-express?u=76281980&t=187)** So if I now run into an error in this timeout function, I can simply do a return next and I don't use throw anymore but I just return the error object here. And when I head back to my /throw route, I see that we get now a proper error back. The stack trace is shorter because it's in an asynchronous invocation and there Node.js does not see so much of what happened before. So as we learned now, our general rule is to never throw from your Express routes and middlewares because it can take down your whole application. Nowadays, we also have async await and we use a lot throughout this course. With async await, we don't have a callback as we have it here in setTimeout and we need another way to handle errors that happen in this asynchronous invocation. So to try that out, we can just use the middleware that we created before to get the names and I remove this row route again and I will just now go into this getNames function and I will throw from there. So in this map function, maybe that returns us the speakers, I will now throw an error, throw new Error. And I call it Async await error. Next, let's reload the index page and we see that the application hangs completely.
>
> **[4:43](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/how-to-handle-errors-in-express?u=76281980&t=283)** So this is bad again. Application not reachable. Completely broken. So what happened here? When I look into the error message on the console, I see that I get an unhandled promise rejection warning. This means that we got an error but it was not properly handled. So how can we handle that? In server.js, I will now use a try catch block, so add try, catch, you should be familiar with that. So that's regular JavaScript and all the code goes into the try block but if something goes wrong, I end up in the catch block and there I get an error object where I can now simply do a return next error again. Let's reload the page and we see that we get now this Async await error. It's still not pretty but it does not take down our application. Next, let's apply what we just learned to the routes we already created so I go to the index route and there I will now create a new try catch statement and I copy over all this old code block into the try block and if an error occurs, I return next error and I have to get next as function argument here because I only had request, response because I was not using next yet. This looks good
>
> **[6:16](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/how-to-handle-errors-in-express?u=76281980&t=376)** but now [[ESLint]] complains we now also have to return from the try block. I do the same now for the speakers route. Again, a try catch block. And there I move the code over here. And do a return next error.
>
> **[6:52](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/how-to-handle-errors-in-express?u=76281980&t=412)** And now you should know already how this works. I'm doing that also for the speakers-detail. So while we're doing that, we have the good feeling of making our app really resilient to any error that could occur. And a return from here as well and all that and I also have to get this next callback as argument and finally, let's do this also for feedback. So always when you see an await statement in a route,
>
> **[7:35](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/how-to-handle-errors-in-express?u=76281980&t=455)** it's a good call to use try catch to handle a possible error within this asynchronous invocation. So now application is way more resilient to errors than it was before but we also saw that this default error page by Express is not really pretty or user friendly. So if a user runs into that, they will most probably think something is terribly wrong with the website. We should find a way to override the Express default error handler and show something more pretty to the user in case something happens and we will do that right now.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2), [[Node.js]] (2), [[ESLint]] (1)
> **Code Identifiers:** settimeout (4), getnames (1)
> **File Paths:** server.js (2), node.js (2)
> **CLI Commands:** node (2), find (1)
> **UI Navigation:** open the (1), go to (1)
> **URLs:** [localhost:3000](https://localhost:3000) (1)
> **Ports:** :3000 (1)
> **Tools:** visual studio (1)

#### [Creating an error page](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/creating-an-error-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/creating-an-error-page?u=76281980&t=0)** - [Instructor] Right now, the error page we get is the default view provided by Express. You will agree that this does not look very professional. The page looks pretty broken, there are no links back to safer grounds and the user that ends up there will likely leave. We should change that now and add a more professional page that doesn't look as if the server has just crashed. So, I looked around to find some clean and neutral error template and what I found was that one. As you see this is very clean, very neutral and also very simple. And I want to use that now as my error template in my application. So, for that, I first click on [[HTML]]. And we see that it uses bootstrap already so there is not much to do for us. I simply take the snippet now. I copy it. Let's see if we have css as well. Yeah, there is some css to set as well. And I will go into Visual Studio Code. There you see that I created some demo error in the index route. We will have to remove that later. But now, I will just open views. And in views, I will just create a new file on the top level, so not in pages that are called error dot ejs. And, let's put the regular html around that because what we have is just a snippet. Body, int, into the head tag. Add a title tag, and let's say, "An error occurred."
>
> **[1:36](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/creating-an-error-page?u=76281980&t=96)** And into the body I paste now what I copied from the page before. As we saw, we also have to set some style clauses here, so I just copied it as well. And, in static, I create a new file error dot css. And I paste in this snippet as well. And for the error page, I have to, of course now, include the stylesheet so I add link rel equals stylesheet. And href is slash css error dot css. So, we have now an error template but where is the render function for the error page? Right now, we're using the built in functionality of Express. To change that, we need to create our own error handler. First we want to catch errors that occur when no route matched our request. So, I can simulate that by simply going to a page and accessing a subpage called hello. And as you see here, I get this, cannot get hello and this is where we reload the page, a 404 not found error. So, let's create the middleware that captures this error. And for that, I now head into my server.js file. And there at the very end, so this means after all route middlewares were running when we end up here, it's obvious
>
> **[3:11](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/creating-an-error-page?u=76281980&t=191)** that no routes did match. As we know, routes are handled in order. If we end up at this last route, no other route did match and there I just add request response and next. And there I want to actually create an error object, the proper http error. And I can do that with a simple helper module provided by Express that I will install now so I add [[npm]] install http errors. Now, I'm requiring this module so I add const and I call this create error equals require http dash errors. Now, I'm scrolling back down to my middleware function and in there I will now return next create error, and it should be an error 404 because it's not found, and the message should be "File not found." So, this will now trigger an error 404. Let's start Express again and see what happens. Yeah, now I get a not found error with a File not found. So, that's exactly what we expected. Now we have to create the real error handler.
>
> **[4:44](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/creating-an-error-page?u=76281980&t=284)** So, a handler function that will render the right template for us. For that, Express has a convention to know which function is actually the error handling function and this is a middleware that takes four arguments. So, a middleware that takes four arguments is the error handling middleware. So, for that the app dot use. And now, the first argument to this middleware is the error. And then, I go on with request, response, and next.
>
> **[5:20](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/creating-an-error-page?u=76281980&t=320)** So, this is now an error handling middleware just because it takes four arguments. And in there, I will just now populate my template variables by adding response dot locals dot message. This should be the error dot message. Because that's an error object that usually contains some message. Then I add const status that should be the status code with either the error dot status or, if we don't get any error status let's default to 500, let's default to error 500, which is an internal server error according to the hdp standard. And I also want to set this status now as template variables for response, local, status equals status. And we will now also set the status on our http response. So, I add response dot status and I set it to the status we just defined. So, our response will contain also the status code of this http request be it 404 or 500 or whatever. And in the end, all I have to do is response dot render and there I want to render error. Now, I'm almost anxious to see how the page looks like, so let's go back to the browser and let's reload. And this looks almost good but we are missing something here.
>
> **[6:53](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/creating-an-error-page?u=76281980&t=413)** Let's go back into our error template and there we see that we are missing the statements that actually include bootstraps, so I head back to the template. Let's see where it is and as you see that's here on top. I will just include the bootstrap css and paste it into a snippet as well. And we reload now. We get this beautiful error page back.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2), [[npm]] (1)
> **Exercise Files:** template (8)
> **CLI Commands:** find (1), npm (1)
> **Cross-References:** as we saw (1), go back to (1)
> **Definitions:** is a  (1), is an  (1)
> **Prerequisites:** install (2)
> **File Paths:** server.js (1)
> **Tools:** visual studio (1)

#### [Populating the error page](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/populating-the-error-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/populating-the-error-page?u=76281980&t=0)** - [Instructor] As you might have figured, this is still not dynamic because that's still a static page so we will now have to apply our template variables so I go back into the error template and in there I will just add my template text so 4404 I replace that with bracket percent
>
> **[0:24](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/populating-the-error-page?u=76281980&t=24)** equal status and for the message I'll put the error message.
>
> **[0:33](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/populating-the-error-page?u=76281980&t=33)** So let's head back into the browser, let's reload the page. As you see now we get this proper error message and when we go back to the index route that contains another error we get 500 and some error, so the error message that we defined before. What I'm not showing here is the actual error stack trace as we saw it before because it's a pretty bad practice to show that to the user because it may contain sensitive information so what we can do instead is we can go into the error handler again and just add a console.error
>
> **[1:17](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/populating-the-error-page?u=76281980&t=77)** I'll put the error to the console so that when we look into log file we see which errors have occurred but we don't show them to the users. So let's reload again and let's look at the console and as you see they get the error message with a complete stack trace on the console but we don't leak any information to our users. So now we have a proper and pretty error page before we proceed let's remove this error from our index page so that everything works again. Let's try that, I reload, and we have a beautiful working page again.

> [!info]- Semantic Content
>
> **Exercise Files:** template (3)
> **Cross-References:** go back to (1), as we saw (1)
> **Best Practices:** bad practice (1)
> **Speakers:** - [instructor] (1)


### 6. Handling Form Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating a form template](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/creating-a-form-template?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/creating-a-form-template?u=76281980&t=0)** - [Instructor] Before we can implement the feedback page, we, of course, have to do the template for it first. Creating this template is very similar to the templates we've created before, and by now this should be very familiar to you. So let's do this one real quick in a more ad lib way. Feel free to stop the video and try it out on your own first. So, I have the static page open here. Let's look at it in Chrome Developer Tools real quick, just to see where the content is starting. So you see that we have this main content and then feedback, but way up before there is this container with the content that we had before for the other template. So I go into Visual Studio Code, there I open my static folder, and there we have a file feedback [[HTML]] and I'm now copying that into views, pages, and now I'm renaming the extension to .js, and then I again scroll, select everything, until I reach the container after the header section, and I can again remove everything starting with the script. So this is, for now, the static template, and of course also need a random function for that, so I go into routes, feedback.js, and let's make our life easier by just copying the index route because we have this nice random function in there already,
>
> **[1:36](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/creating-a-form-template?u=76281980&t=96)** and I go back to feedback, and for this slash route, I now add the content I copied before but I'm removing the artwork and the top speakers, we don't need it here. So let's remove that as well from the template variables, and the page title should be Feedback, and the template is feedback in lowercase. While we are here, we can also already make the feedback items available to the template, so I'm going ahead and add const feedback equals await feedback service.getList. GetList will give us the list of feedback items. And I will pass that as template variable. So now we have the feedback items available to the template, so let's head over to the feedback template, and there we have this right menu bar, and again we have there the feedback items. So starting here on line 52 we have class feedback items and in there there are elements called feedback item. And what I will do here now again is I remove all the items except one that we will use as a blueprint. Let's find the right div, that's the hardest part. Just to get that right, and when we save we see,
>
> **[3:12](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/creating-a-form-template?u=76281980&t=192)** yep, that works well, so now I again will do a loop statement. So add feedback.forEach, function, and this function gets one feedback item per iteration, and again, I just act as if it was regular [[JavaScript]] and I close the template tags, and then I'm taking this whole block of feedback and I'm pasting it into this loop. Now I'm wondering how those feedback items look like, and I can easily just look into my data folder and there I see the feedback [[JSON]] file and I see we have name, email, title, and message. We won't print out the email, but we will show everything else, so I will now just change the feedback title from being static to item.title, then we have the name, so I replace the name chain with item.name, and then I also want to replace the message, so it's item.message. By now everything static should be gone
>
> **[4:44](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/creating-a-form-template?u=76281980&t=284)** and it looks good so far, so let's head over to the webpage, and let's go to feedback, and you'll see that we now get this data directly from the json file, and just to prove just in case you don't believe me, let's go into data, feedback json, and let's say it wasn't Frank's but Jim that made this feedback entry. When I reload you see it's Jim now. So we added everything to round out the feedback template and also to show feedback items. What we need now is the functionality to post new feedback to the page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (3), [[HTML]] (1), [[JavaScript]] (1)
> **Exercise Files:** template (12)
> **CLI Commands:** make (2), find (1)
> **Code Identifiers:** getlist (1), foreach (1)
> **File Paths:** feedback.js (1)
> **Cross-References:** go back to (1)
> **Tools:** visual studio (1)
> **UI Navigation:** go to (1)

#### [Handling POST requests](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/handling-post-requests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/handling-post-requests?u=76281980&t=0)** - [Instructor] So far, we've created a dynamic website that could display content that comes from some [[JSON]] file, but may be also stored in the database. One reason to even create a dynamic website in the first place, though, is that we may need to handle user data in the one or the other way. In our case, we've got a form that allows users to submit feedback to be displayed on the page. We've already created a template for that and let's look at this real quick. So I'm opening Visual Studio Code and I'll open Feedback.ajs. We can see that there is a form in there already, but it misses a few things. First of all, I hope you know [[HTML]]. It needs a method, so I add now the form method and I want to send this form via POST request, which is very common for any type of form. Then I also need an action, so that's the URL the form data needs to be sent to, and I want to send it to /feedback, so that's the post route we created at the very beginning. Then I also have to name the form inputs. That's something no regular designer will do for you. So I now have to just go to the input fields and, there, I add name equals, its name equals name. Then, for the email address, it's name equals email. So that's the name of the form element. Then we need a title, so add name equals title. And then we also want the message; its name equals message.
>
> **[1:44](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/handling-post-requests?u=76281980&t=104)** Now let's reload the page and let's fill in something into this form. Bogus email address. This was awesome, I'm completely amazed. "I will..." And, when I now submit this, I end now on this post route that we created before. But obviously, we are not doing anything with the data yet, so let's go into the route handler for this post route. So I open Routes, feedback.js, and we want to operate here in this post route. Here is where we have to parse in all this data coming from our form. Now how do we get this form data inside our post route? Express is very modular and, out of the box, quite bare metal. To make it pass post bodies, we need another module that provides us with the request middleware. It's called Body Parser. And I have to install that now, so I open the terminal again. I stop my Nodemon server with Ctrl + C. And I do an "[[npm]] install body-parser". Then I head over into my server.js file and there, on top, I will now add const bodyParser equals require body-parser.
>
> **[3:21](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/handling-post-requests?u=76281980&t=201)** You might have guessed Body Parser's a middleware, so it operates now on the request object and it should parse what's on there. So I go down and I will do that right after the cookie parser runs. That is somewhere after line 24. And now add app.use, bodyParser, and the Body Parser has several submodules included and we want to have URL encoded because that is how such [[Forms]] are sent. That's the format for that. And there, we have to add some configuration and this is extended, true. You can't just always use it like that. If you're wondering about the configuration options for this Body Parser, then just look up the module and then you'll find them all, in most cases, "extended, true" is what you need to have proper form parsing in place. So now let's head back into our Feedback route and let's see if we now get data here. So I add now console.log and Body Parser will give us this data in request.body.
>
> **[4:43](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/handling-post-requests?u=76281980&t=283)** Let's restart the server again: npm run dev. Let's reload the page. This posts the form again because we posted it before, and when we, real quick, also look into Chrome Developer Tools when we reload the page, we should see on the Network tab that this is a POST request and, when you scroll down, you'll also see the form data that we sent. So this is always helpful if you want to debug the form and make sure that the data is actually sent properly. And now, back in our route, you'll see that we also get a nice object with the form data we just sent, so now all that is left is to operate on this form data and later store this in the JSON file.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (2), [[npm]] (2), [[HTML]] (1), [[Forms]] (1)
> **Env Vars:** json (2), post (2), url (2), html (1)
> **CLI Commands:** make (2), npm (2), find (1)
> **UI Navigation:** go to (1), open the (1), scroll down (1)
> **File Paths:** feedback.js (1), server.js (1)
> **Code Identifiers:** bodyparser (2)
> **API Endpoints:** post  (2)
> **Tools:** visual studio (1), terminal (1)

#### [Validating and sanitizing user input](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/validating-and-sanitizing-user-input?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/validating-and-sanitizing-user-input?u=76281980&t=0)** - [Instructor] We can now receive the form date of when a form is posted. How can we make sure that this date is complete and also doesn't contain malicious data, like [[JavaScript]] malware? Regardless of which measures you take in the browser to validate a form, a malicious user can always circumvent that. In short, you cannot trust data from the client. This means that we need to add measures to the service site to make sure that the data the user sent to us is valid. And for that we will use the module, express-validator. It makes input validation pretty easy. So I'm just stopping my server again and I type [[npm]] install express-validator.
>
> **[0:45](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/validating-and-sanitizing-user-input?u=76281980&t=45)** And in my feedback module, I can now add const and curly brackets because it's, again, destructuring assignment, check, validationResult equals require express-validator.
>
> **[1:09](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/validating-and-sanitizing-user-input?u=76281980&t=69)** And this will all make sense to you in a second. Check is a [[Routing]] malware. This means it accepts the same request response and next signature like any other handler function. And while we are using it, I can now sure you how to chain such malwares. So let's go to the post route and there I will now add a second argument, just an array. And inside this array, I add now check, and what do I want to check? So check looks into my body and I want to check the name, then I want to trim it. This means I want to remove empty characters in the beginning and in the end. Then I want to make sure that the length is at least three
>
> **[2:03](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/validating-and-sanitizing-user-input?u=76281980&t=123)** because I assume that a name should be three characters long, Then I'm escaping that to make sure that there is no [[HTML]] and JavaScript embedded in this entry. And then I add .widthMessage. This is the message that should be returned if there is something wrong. And there I just type a name is required and that's it for the name. And then I will go ahead and add a new entry, now for the email. For that, I copy the check for the name and now I'm looking into the email property on my body. And there I want to first trim and then I can use .isEmail. So this is a function that makes sure that what the user provided is really an email address. Then I add .normailzeEmail that adds some formatting to the email, makes it lowercase. For the message, I add a valid email address is required.
>
> **[3:21](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/validating-and-sanitizing-user-input?u=76281980&t=201)** I copy the name entry again because we have a few more things to verify. The next thing is the title and the title should also at least be three characters long and if there is something wrong, the error message should be a title is required. And at the very end, I also wanted to validate the message
>
> **[3:52](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/validating-and-sanitizing-user-input?u=76281980&t=232)** and here, let's say, the minimum length should be five and the error message is a message is required. So when a request now comes into this route, all these checks will run and in the end, the last next handler, will lead to the actual handler function that we created. And in there, we can now check if there were any errors. So I add const errors equals and now I can use this validationResult function provided by express-validator. And there I'm passing the request object. Because if there were errors, express-validator puts some hints on the request object. And first, I want to handle the case that there were errors, so I add if not errors.isEmpty, so means there were errors. And if there were errors, I want to store those errors in my session object, then we will see in a second why I'm doing that like that. So I create a new object on request.session that I need feedback. So this is everything feedback-related. And in there I create a property, errors, and then I use a function provided by express-validator that is on the errors object, and it's array. So this will give us then an array
>
> **[5:26](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/validating-and-sanitizing-user-input?u=76281980&t=326)** of errors from express-validator. And now comes the reason why I have to store the errors on the session object because to display the feedback page again, we will now redirect to the get route again. So I'm now adding return response.redirect and I want to redirect to /feedback. That's, in general, a good practice because every time you send a form, you want to avoid that a user can just hit the reload button to send it again. And in any other case, we will stay with what we have now, we will modify that in a bit. So let's see what we have now. In case an error happens, the request gets redirected to the get route, to the feedback route. And in the get route, the can now [[Fetch]] those errors from the session object. So let's go up to the get route here on line 10 and there I now add somewhere, before the render function takes place, const errors = request.session.feedback, if this exists, so I'm adding a question mark. Then I want errors to be request.session.feedback.errors
>
> **[6:53](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/validating-and-sanitizing-user-input?u=76281980&t=413)** and in any other case, errors should be false. And after that, I want to reset this session object, so I add request.session.feedback equals an empty object.
>
> **[7:10](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/validating-and-sanitizing-user-input?u=76281980&t=430)** So after we stored the errors, let's reset this date. To pass these errors now to the template, you might have guessed it, I'm just adding that as template variable. So now I can head over into my template and then I want to let the user know that an error occurred. So I go into feedback.ajs and pretty much right on top, after this headline, send us feedback, I will now add an if statement. So if locals.errors, you know that we have to test existence of variables on the locals property, otherwise we can an error. And this is again, pretty similar to any other JavaScript, just close the template text. And if there was an error, I will now add div class and bootstrap gives us nice styles for outputting such messages, so I add alert alert-danger. This will give us a nice red error box. And then I want to traverse this errors array, so I add errors.forEach function error
>
> **[8:37](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/validating-and-sanitizing-user-input?u=76281980&t=517)** and again, I'm closing the template text here properly. Before I start this loop, I also have to create the ul tag, so for the list. And inside the loop, I now add a list item and this list item contains bracket percent equals error dot message, msg. So this is the format how express-validator gives us the message back on the error object. Now let's start the survey again, npm run dev. And I head over to the feedback form again. And I will just now submit without entering anything and you see that I get now an error message back, so that is exactly as expected. But also when I go back to feedback, this message is gone. This is because we also reset the session object every time we collected the error object from there. We can try a little bit more, so I add Daniel, but then some bogus for the email, a pretty title, and a nice message. And when I submit it now, we see that we get now the error message that a valid email address is required, so this express-validator also checked that the actual syntax of the email address is correct. We just learned two things.
>
> **[10:11](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/validating-and-sanitizing-user-input?u=76281980&t=611)** First of all, we learned how to validate a form, but we also learned how to show proper error messages to the user. And for that, we used the mechanism that propagates this error message to the next request via the session object. And this technique is often referred to as flash messages.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (3), [[npm]] (2), [[Routing]] (1), [[HTML]] (1), [[Fetch]] (1)
> **CLI Commands:** make (5), npm (2)
> **Code Identifiers:** validationresult (2), widthmessage (1), isemail (1), normailzeemail (1), isempty (1)
> **Exercise Files:** template (5)
> **Definitions:** is a  (3), means that (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Analogies:** similar to (1)

#### [Storing data](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/storing-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/storing-data?u=76281980&t=0)** - [Instructor] All that is left for a working feedback page is calling the respective function to write the user-provided feedback to a file. Let's look into the feedback service for that. So I open services, feedbackService, and when I scroll down, I see a function, a method addEntry. So that's exactly what we need here. It just updates the feedback with a new entry. And if you wonder what this data.unshift is, this is used to prepend something to an array. Otherwise we could push it, but then new feedback items would appear in the end, which is a little bit counterintuitive. Let's go back into a feedback route, and of course we have to add this to the post request so after the validation did run and we check for the errors, if we end up down here, we are sure that the data we got is valid. Now I can just add await feedbackService.addEntry.
>
> **[1:05](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/storing-data?u=76281980&t=65)** Now I have to do two things, first of all I have to make this callback async because we are waiting here, and I also have to [[Fetch]] all those items from my body. These items are not sanitized and escaped by express validator. And I'm using a restructuring assignment here again. So add const, curly brackets, name, email, title, message, equals, request.body. Now all that is left to do is to call add entry with name, email, title and message. We're not interested in what this add entry gives back to us so we can just leave the await call without assigning it to a variable here. And, I also want to add now a message to the user that tells them that everything went fine. So add now request.session, so I'm using this flash message approach again. Feedback equals and now I just add a property message in there, I'll write "Thank you for your feedback." Now I the end I just have to do another redirect as we did before for the error. And of course, I also have to evaluate now
>
> **[2:40](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/storing-data?u=76281980&t=160)** the session object to see if there is a message in there, so I simply take this error checking and add a new line and I want to call this success message, and if there is request session feedback and request session feedback message, I can store this in this variable and I pass this as template variable to the template, here as well. That thing is to now, also show the success message if there is one, so I go to pages, feedback.ajs and up here where the error is handled I add else if locals success message
>
> **[3:37](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/storing-data?u=76281980&t=217)** and if this is the case, I can output the success message and I can use this alert class from Bootstrap again, so add div class equals alert, but the type is now alert dash success. So this will give me a friendly green success box and in there I just output a success message so add brackets percent equals success message. Now let's see if this still works. So, let's go to the page, and here I enter my name, my email address, this was very nice, I will come again next week. Let's submit it now, and you see that we now get the success message, and also a new item was added to the feedback.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (1)
> **Code Identifiers:** feedbackservice (2), addentry (2)
> **UI Navigation:** go to (2), scroll down (1)
> **Exercise Files:** template (2)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 7. Creating APIs with Express

[↑ Back to Table of Contents](#table-of-contents)

#### [A little intro to REST APIs](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/a-little-intro-to-rest-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/a-little-intro-to-rest-apis?u=76281980&t=0)** - [Instructor] [[Representational State Transfer (REST)|REST]] stands for [[Representational State Transfer (REST)|Representational State Transfer]], and it defines a way for creating web services. Today, such RESTful services are the most commonly used pattern for APIs. You find courses dedicated to REST with [[Node.js]] in the library, yet in times of single-page apps, it's such a common use case for Express that I want to cover it in this course as well. In this chapter, we will use some client-side [[JavaScript]] and the REST API to send feedback directly to a REST endpoint and also to update the webpage without reloading it, but let's first look at the basics. When we talked about routes, we already touched the topic of HTTP verbs. Get is used when you simply request a page, post is most commonly used for forums because it allows to send large amounts of data in the payload, put is nothing the browser uses, but it's part of the HTTP standard, and delete is also defined in the HTTP standard and not really used by browsers, and there are a few more verbs, but these are the most common used ones in REST services. Now, what REST does, it's giving those HTTP verbs a meaning, or how we call it a semantic. Get requests a resource, post creates a resource, put is usually used for updating a resource, and delete deletes a resource. The main difference between the regular route and the REST route is that the regular route will return you [[HTML]] in most cases, but REST returns data, and in most cases, this is formatted as [[JSON]],
>
> **[1:38](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/a-little-intro-to-rest-apis?u=76281980&t=98)** but let's look at an example, let's say we want to create a simple [[User Management]] system. When working with data, three operations are so common that they got their own acronym, it's create, update, and delete, in short, CRUD. So If I want to request all users, I will most probably make a request to /users, and this will give me a JSON with all users in it. If I want to create a user, I will make a post request to this endpoint containing the payload for this user to create it. If I want to get a specific user, I will do a get request to a parameter route which contains maybe something like the user ID, in this case I used 42, so it's the user with ID 42. And if I want to now update this user, I will make a put request which is very similar to the post request, it also contains the payload, but the path I'm using now contains the user ID, so this will now manipulate the user object in the database for instance. Then of course, there's also delete verb that I can use to delete a user with a given ID. REST is very commonly used when creating single-page applications. Simply put, the initial request returns an initial document, this document usually contains a lot of JavaScript which is then used to actually render the HTML or the content into the page.
>
> **[3:12](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/a-little-intro-to-rest-apis?u=76281980&t=192)** All subsequent interactions with the web sets and the data behind it is done by a so-called XHR, sometimes referred to as [[AJAX]], it's an API built into JavaScript on the browser to do HTTP requests. So after that initial request, the page isn't reloaded anymore, but sends data to the back end when needed and is updated via JavaScript using the data received from the back end. As I said before, there are dedicated courses on REST in the library, but for our task at hand, changing the feedback form to send and receive data via REST, you now know everything that you need to know.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (11), [[JavaScript]] (4), [[HTML]] (2), [[JSON]] (2), [[Representational State Transfer (REST)|Representational state transfer]] (1)
> **Env Vars:** rest (11), http (5), api (2), html (2), json (2)
> **CLI Commands:** make (3), find (1), node (1)
> **Analogies:** similar to (1), for instance (1)
> **File Paths:** node.js (1)
> **Cross-References:** we talked about (1)
> **Definitions:** stands for (1)
> **Speakers:** - [instructor] (1)

#### [Creating and testing an API endpoint](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/creating-and-testing-an-api-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/creating-and-testing-an-api-endpoint?u=76281980&t=0)** - [Instructor] We've learned the basics about [[Representational State Transfer (REST)|rest]] APIs already. Technically, a rest endpoint is no different from any other route in Express. The only difference is that is won't return an [[HTML]] page, but most likely, [[JSON]]. I want to create a route now that can be used to insert a new feedback entry. And it should also return the now updated list of feedback items. So, let's open route, feeback.js, and let's start out by now adding a new method. And it's a post method as well. I'm scrolling all the way down. But this should now be router dot post. And the endpoint should listen under slash API. So, it would be slash feedback slash API. And again, I have a request and a response object and in there, I want to implement my logic. Now of course also data sent via rest has to be validated so I can use basically the same validation rules that I had before for this post route. And it would be pretty redundant to now just copy paste it. So what I'm doing instead is I will now copy this array of validations and just enter a variable instead. And I call this variable validations. Now we just have to store those validations,
>
> **[1:35](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/creating-and-testing-an-api-endpoint?u=76281980&t=95)** insert this variable, so I'm scrolling all the way up. I can declare this variable even outside of my module exports. So I add const, validations, equals and then I paste in this whole array of validations. Now I can also use this same variable for my API. So I add this a second argument. So this is exactly the same as before, it just stores all those checks in a variable and all those checks will then run for each request that comes in. When I look at my regular post route, I also see that I forgot something here and now that it's short and easy to read, we will just add a try catch block here as well. We learned before that we always want to have try catch when we are doing async wait. So I'm adding that now here and if there is an error I want to return next error, and I have to add next as an argument here on the callback function. And let's add this next here on my rest route as well because we start out with a try catch block here as well. Try catch, if there is an error we will return next error. And in there, we will now very similar
>
> **[3:09](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/creating-and-testing-an-api-endpoint?u=76281980&t=189)** to the before, started out by const errors equals validation result on the request object because we also have to check for errors here as well. But differently than before, we cannot redirect the user now because we are not on the browser on this route. So, I will now do another kind of error handling. So if there is some error, so the error object isn't empty, I will return response dot Json because luckily, of course, Express also gives us a method on the response object that returns a proper json string. And there I just returned the errors, array S errors property. And we will see later then, how we can work with that and show the user still an error message. And if everything went fine, we can do something also similar to what we did before. So, I'm just copy pasting line 66 and 67 where we fetched the variables from request body and then storing the new entry. And now, of course, this has to be async. And after this was done, after this was stored, I now want to return the now updated list of feedback entries, so I'm adding a new line,
>
> **[4:44](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/creating-and-testing-an-api-endpoint?u=76281980&t=284)** const feedback equals await feedback, service dot get list and in the variant, I will return response dot json, and I want to return an object that should contain and key feedback. Next, I want to have an easy way to test this endpoint to make sure that this works properly and for any [[API Testing]] I recommend a tool called Postman. And I will, really quick, install that now. So I'm looking up Postman and I'm downloading the app. You should get a version for your rating system here. It's opening it, this takes a little bit. And then I can start it right away. There I choose to skip signing in. So, I just want to use the very simple standard functionality this gives us. So where you see the launchpad, I click on this plus icon and there, I select that I want to do a post request and I want to do a post request against http, local host slash local host, colon 3000 slash feedback
>
> **[6:20](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/creating-and-testing-an-api-endpoint?u=76281980&t=380)** slash API. And I have to do a few more settings here because the body should be in raw format. And the format that I want to send, that's the very right dropdown, should be Json. And in there, I just create now a typically Jasn object And this object contains name Daniel and email test@[test.com](https://test.com). A title. Let's call it rest title. Test and a message. "This was sent via rest." So let's see what happens when a sent is now to the webpage and on there we get to respond. And I see that I get an error object back, it acts as if there was no data present actually. So what's happening here? Maybe you can guess that similar to the body parts that we needed for [[Forms]], we now also need the body parts are for Jasn. This can be very easily edit. So I go to server.js because it's the same body parcle, but it now just uses Json, and I don't have to add any other options here. So just copy paste and change to module we are using here to json.
>
> **[7:55](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/creating-and-testing-an-api-endpoint?u=76281980&t=475)** Let's go to Postman again and let's try to send the form again. I'm sending. And now I see I get an array of feedback back. And the first item is now the item be just edit. So we have now a fully functional rest endpoint that receives data via post, stores it and gives us back the data in json.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (8), [[Representational State Transfer (REST)|Rest]] (7), [[HTML]] (1), [[API Testing]] (1), [[Forms]] (1)
> **Env Vars:** api (5)
> **UI Navigation:** go to (2), click on (1), dropdown (1)
> **Tools:** postman (3)
> **File Paths:** feeback.js (1), server.js (1)
> **Definitions:** is an  (2)
> **Analogies:** similar to (2)
> **CLI Commands:** make (1)

#### [Add client side JavaScript](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/add-client-side-javascript?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/add-client-side-javascript?u=76281980&t=0)** - [Daniel] We now want to leverage those API endpoints that we just created to modify our feedback page to send the form to the server using XHR, and to update the feedback shown on the page. Technically, we will first load the completely random page containing the [[JavaScript]] needed for those interactions, From then, all subsequent requests will use the [[Representational State Transfer (REST)|REST]] API. This combination of initial server-side rendering and client-side updates is very common in so-called Single-Page apps. As it would be completely out of scope to cover Single-page application frameworks like [[React.js|React]], [[Angular]] or [[Vue.js]] in this course, we will take it easy and use jQuery, a simple, but powerful, library that lets us do XHR requests and also easily lets us update the page via JavaScript. You find plenty of courses on jQuery in the library if you want to dive deeper into the topic. Our page, in fact, already uses jQuery because Bootstrap relies on it for things like the dropdown menu we have in our navigation. So when we look at the source code of the page and scroll way down, we see that down there on line 201, we already loading jQuery into the page. And before we move on, I want to show you one more thing. So if I now open the Chrome developer tools and I reload the page, I see that we get an error here. So why does this happen? This is because PixGrid, that we're using for the artwork gallery, has a problem if there is no artwork on the page. So we should find a way to also just load PixGrid when it's really needed. So it's look into Visual Studio code.
>
> **[1:33](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/add-client-side-javascript?u=76281980&t=93)** And there we already have this JavaScript in views, partials, scripts.ejs, and in line 16, we see that we always loading PixGrid. So this is something we can easily change by now adding if condition. So I could say if locals.artwork because every time when we have an artwork variable in our template, we can assume that there is this artwork gallery. So if this is the case, we're loading PixGrid. But not on pages like the feedback page that doesn't contain any artwork. Now, I mentioned that I created the JavaScript for the feedback page already, and you find it under static js. There is a file feedback.js. We also just want to load it when we are on the feedback page. So what we can do now is, I just copy-paste this block with the artwork and then I do something like if locals.feedback, because this feedback template variable is only set on the feedback page. And there I will now just load feedback.js, so if we are on the feedback page, this JavaScript is loaded. Let's look back at the page, let's reload. We see first of all we don't get an error anymore for the PixGrid. We also see when we go to the js tab, that we are loading the feedback script here. Let's just real quick look at the page and see if the gallery still works. And this looks good.
>
> **[3:07](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/add-client-side-javascript?u=76281980&t=187)** So as planned, the artwork is also loaded only when we are on a page that contains artwork. With that all in place, let's finalize our feedback page now.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (5), [[Representational State Transfer (REST)|Rest]] (1), [[React.js|React]] (1), [[Angular]] (1), [[Vue.js]] (1)
> **Env Vars:** api (2), xhr (2), rest (1)
> **Code Identifiers:** jquery (4)
> **File Paths:** feedback.js (2), vue.js (1)
> **CLI Commands:** find (3)
> **UI Navigation:** dropdown (1), open the (1), go to (1)
> **Exercise Files:** template (2), source code (1)
> **Tools:** visual studio (1)

#### [Updating the page from REST](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/updating-the-page-from-rest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/updating-the-page-from-rest?u=76281980&t=0)** - We just added the feedback.js client-side [[JavaScript]] to the page. And now let's look into this script to understand what it's doing, basically. So I'm going to static, js, ENTER, open feedback.js. And you see those dollar signs here, they are related to jQuery, it's more or less a shortcut, provided by jQuery and (unintelligible) just complains because it doesn't know them. What I want to show you is this function that does this XHR request. It starts in line 55. So it attaches and this is what jQuery basically does. It attaches to CSS classes, or IDs. And there it attaches to the feedback form and it attaches there to the Submit event. So when someone hits Submit, we first, in line 57, prevent the default. This means the form won't be sent then by a regular means. And then we initiate the post request. So in line 61, you see that we are posting to feedback/API. So that's the endpoint we created before. And starting with line 63, we collect the data from the form using the CSS IDs, the selectors to get the value out of that. So that's, again, something provided by jQuery. And then in the end, in line 70, we have a callback. This callback, update feedback cannot operate on the data that comes back from this post request.
>
> **[1:33](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/updating-the-page-from-rest?u=76281980&t=93)** So if we scroll up to this update feedback, we do a few things. So in line nine, we empty all status messages that might be on the page. And then if there are no errors coming back, so this is not the error handling. If there is no error, we will first reset the form. So this is pretty handy. We only reset the form when there is no error. We do that because it's so annoying when you fill out the form and there is a mistake, maybe a wrong email address syntax or something like that, and then you try to submit it and the whole form clears. So, clearing the form should only be done when the form was successfully processed. So if the form was successfully processed, we can then use the data that we get from this post request because our endpoint will give us the full list of feedback back. So we now traverse that and create the [[HTML]] needed to replace the feedback list on the right side. So this looks very similar to what we did before on the server side. So we traverse it and then we said item title, item name, and item message. Then in the end on line 34, we will replace the feedback that we have in the page with the newly rendered with the updated entry that we just added. And in line 36, we also showed the success message that came back from the server. If there was an error that this starts in 37, we will traverse the errors and create an error list, and set this to the feedback status element on the web page. Let's look into the feedback template real quick
>
> **[3:09](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/updating-the-page-from-rest?u=76281980&t=189)** because we have to edit or something. So go to fuse, pages, feedback HS. Because what's missing so far is this feedback status element where we want to render those status messages in, so I add a div class equals feedback-status. And let's enclose everything related to the status messages here. So what we have in there is still related to server-side rendering. And the form will even still work like that if someone does not have installed JavaScript, so we can leave this server-side rendering of the status messages in there. But we will now use client-side JavaScript to update the page. So I open my feedback page, localhost 3000. And I go to feedback. And I open. And they open Chrome Developer Tools real quick to see what's happening on the network side. And there, I open the XHR tab up there, because then I see the HR request. So, Daniel, test@[test.com](https://test.com). I call it SPA for single page application feedback. And, I add... "This should now work." Let's see if it does.
>
> **[4:43](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/updating-the-page-from-rest?u=76281980&t=283)** So I scroll down, I click Submit. And we see that we are almost there. So the API request is done. You see that here in Chrome Developer Tools. There you see what we are sending and if I look into response, let's see what response gives us. And this is a little bit hard to see. So I'm clicking on Preview. There, we see very clearly what we get. You see that we get the whole feedback back, but something is wrong with the success message. So let's head over into the route, by going to routes, feedback.js, and now let's see what's wrong with the success message, and I scroll down to my route. And we see that we don't set any success message here. So what we now have to add is successMessage. And there we add again, "Thank you for your feedback."
>
> **[5:49](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/updating-the-page-from-rest?u=76281980&t=349)** Now, without doing anything, without reloading the page, this should actually work out of the box. So I'm adding a new entry, "Let's try again." And, "This should now really work." Let's submit it now. And now we get, "Thank you for feedback." Because now the API sends the right data and we also see that pretty well in Chrome Developer Tools. Let's close that. We see, also, maybe let's do it one last time. And, "Final message." "This page is finished now." And let's hit Submit. And you see how nicely everything automatically updates without even reloading the page. With that all done, the page is done. We now have a fully dynamic website. Let's go through it real quick. So everything you get here is dynamic. On the right side, we have the artwork. On top we have the top speakers and also speakers navigation that is rendered dynamically. We have a list with all speakers, and then also speakers detail pages, that will render just (unintelligible) off a given speaker. This whole structure of the web page and what we created like [[Forms]] or dynamic lists or galleries is very generic. So you will come across such patterns in a lot of websites.
>
> **[7:24](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/updating-the-page-from-rest?u=76281980&t=444)** It should be easy for you to build upon that to create any website you want.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (3), [[HTML]] (1), [[Forms]] (1)
> **Env Vars:** api (3), xhr (2), css (2), enter (1), html (1)
> **UI Navigation:** go to (2), scroll down (2), scroll up (1), open the (1)
> **Code Identifiers:** jquery (4), successmessage (1)
> **File Paths:** feedback.js (3)
> **Definitions:** is a  (2)
> **URLs:** [test.com](https://test.com) (1)
> **Exercise Files:** template (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Build on what you've learned](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/build-on-what-you-ve-learned?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/build-on-what-you-ve-learned?u=76281980&t=0)** - [Daniel] Thank you for taking this course. I hope you liked it. In this course you learned everything you need to know to create basic website with [[Node.js]]. If you want to take this further, I recommend you to now take my course Advanced Express, which dives deeper into the internals of Express, but also shows you how to use [[Databases]] or how to upload files. If something during this course looked unfamiliar, please search our library for it. There are courses really nearly for everything. I post a lot of Node.js-related information on Twitter. I'd be happy if you followed me there. And if you ever happen to see me at the conference, feel free to hit me up any time. See you soon, I'm Daniel Khan.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (2), [[Databases]] (1)
> **File Paths:** node.js (2)
> **CLI Commands:** node (2)
> **Speakers:** - [daniel] (1)


## Instructor

- [[Daniel Khan]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/building-a-website-with-nodejs-and-expressjs-2255009)

## Skills Covered

- Express.js
- Node.js

## Path Context

### In [[Explore App Development with the MERN Stack]]
← [[Node.js- Testing and Code Quality]] | **7 of 13** | [[Building RESTful APIs with Node.js and Express]] →

## Appears In

- [[Explore App Development with the MERN Stack]]

## Related Courses

_Courses sharing skills:_

- [[Building RESTful APIs with Node.js and Express]] — Node.js, Express.js
- [[Express Essentials- Build Powerful Web Apps with Node.js]] — Node.js, Express.js
- [[Learning Full-Stack JavaScript Development- MongoDB, Node, and React]] — Node.js
- [[Advanced Node.js- Scaling Applications]] — Node.js
- [[Advanced Node.js]] — Node.js

---

[↑ Back to top](#)