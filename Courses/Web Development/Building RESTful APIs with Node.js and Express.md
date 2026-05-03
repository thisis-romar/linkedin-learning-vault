---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: building-restful-apis-with-node-js-and-express-16069959
url: "https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959"
duration_minutes: 77
duration: 1h 17m
level: Intermediate
updated: 11/14/2022
learners: 112061
skills:
  - Express.js
  - REST APIs
  - Node.js
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQFBQs89Kb83rg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1668018324768?e=2147483647&amp;v=beta&amp;t=RRUJY4qoTWuVmUGY_sQuO2W7xw0iCcLX6JZUMGD6Y9w"
linkedin_topic: Web Development
learning_paths:
  - '[[Explore Web Development with Node.js]]'
  - '[[Explore App Development with the MERN Stack]]'
prev_courses:
  - '[[Node.js- Web Servers, Tests, and Deployment]]'
  - '[[Building a Website with Node.js and Express.js]]'
next_courses:
  - '[[Node.js- Securing RESTful APIs]]'
  - '[[React- Securing Applications]]'
path_nav: '[{"path":"Explore Web Development with Node.js","position":8,"total":11,"prev":"Node.js- Web Servers, Tests, and Deployment","next":"Node.js- Securing RESTful APIs"},{"path":"Explore App Development with the MERN Stack","position":8,"total":13,"prev":"Building a Website with Node.js and Express.js","next":"React- Securing Applications"}]'
path_count: 2
tags:
  - course
  - topic/web-development
  - topic/database-management
  - topic/software-development
  - skill/express-js
  - skill/rest-apis
  - skill/node-js
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Building%20RESTful%20APIs%20with%20Node.js%20and%20Express.md)

![Building RESTful APIs with Node.js and Express](https://media.licdn.com/dms/image/v2/C560DAQFBQs89Kb83rg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1668018324768?e=2147483647&amp;v=beta&amp;t=RRUJY4qoTWuVmUGY_sQuO2W7xw0iCcLX6JZUMGD6Y9w)

# Building RESTful APIs with Node.js and Express

> Did you know you can use Node.js and Express to build a web API that can push and pull data from your applications via HTTP? You don't have to learn ASP.NET or Python. You don't even have to know that much about back-end programming. In this course, Emmanuel Henri shows you how to create a simple, RESTful web API with these two popular JavaScript libraries. He guides you through how to set up the 

> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959) | 1h 17m | Intermediate | 112K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [RESTful APIs with Node and Express](#restful-apis-with-node-and-express)
  - [What you should know](#what-you-should-know)
- [**1. Setting Up**](#1-setting-up) (5 videos)
  - [Introduction to APIs and the libraries](#introduction-to-apis-and-the-libraries)
  - [Introduction to Postman](#introduction-to-postman)
  - [Install Node and Express](#install-node-and-express)
  - [Install Mongo](#install-mongo)
  - [Basic Babel setup](#basic-babel-setup)
- [**2. Initial Server Build**](#2-initial-server-build) (5 videos)
  - [RESTful APIs refresher](#restful-apis-refresher)
  - [Initial server setup](#initial-server-setup)
  - [Initial server files and folders](#initial-server-files-and-folders)
  - [Basic routing endpoints](#basic-routing-endpoints)
  - [Basics of middleware and uses](#basics-of-middleware-and-uses)
- [**3. Database Setup**](#3-database-setup) (3 videos)
  - [MongoDB basics refresher](#mongodb-basics-refresher)
  - [Database setup](#database-setup)
  - [Schema setup](#schema-setup)
- [**4. CRUD Operations**](#4-crud-operations) (5 videos)
  - [Create POST endpoint](#create-post-endpoint)
  - [Create all items GET endpoint](#create-all-items-get-endpoint)
  - [Create specific ID GET endpoint](#create-specific-id-get-endpoint)
  - [Create PUT endpoint](#create-put-endpoint)
  - [Create DELETE endpoint](#create-delete-endpoint)
- [**5. Other API Options**](#5-other-api-options) (2 videos)
  - [Static files serving](#static-files-serving)
  - [Other potential libraries for API](#other-potential-libraries-for-api)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [RESTful APIs with Node and Express](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/restful-apis-with-node-and-express?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/restful-apis-with-node-and-express?u=76281980&t=0)** - [Instructor] Have you mastered the frontend world, but feel like you're still missing some knowledge around building a backend? Have you been looking for a simple way to learn how to build an API with Node and Express? If the answer is yes to any of these questions, you've come to the right place. Building an API leveraging Node and Express libraries can be intimidating the first time you try it. But I'm here to simplify and demystify the whole process. Hi, I'm Emmanuel Henri and I've been working with Node, Express, and [[JavaScript]] for a very long time. And it is my great pleasure to help you learn about building an API with these frameworks. First, we'll explore the tools used for testing our API and its database. Next, we'll set the stage for our API with our initial Express server and [[Routing]] endpoints. Then we'll set up our Mongo database along with its schema. And finally, we'll create each API endpoints to add, update, delete, and pull data from our backend. So if you're ready to build your own API, fire up your favorite editor and let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1), [[Routing]] (1)
> **Env Vars:** api (7)
> **CLI Commands:** node (3), mongo (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [What you should know](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/what-you-should-know?u=76281980&t=0)** - [Instructor] As this course is an exploration of how to build an API with Node and Express, some basic understanding of Node, MPM, and its commands isn't a must, but will help you. Next, experience with [[JavaScript]] is essential to follow along, as this is what we use in this course. As you'll see, I'm running on a Mac. But you can follow along on a PC, as the tools work exactly the same on both platforms. Also, I'm using VS Code as my code editor, but feel free to use whatever tool you prefer although I recommend using an editor with a built-in terminal.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1)
> **CLI Commands:** node (2)
> **Env Vars:** api (1), mpm (1)
> **Tools:** vs code (1), terminal (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 1. Setting Up

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to APIs and the libraries](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-apis-and-the-libraries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-apis-and-the-libraries?u=76281980&t=0)** - [Instructor] When you hear the term an API, you might be wondering what it is exactly. The technical term is an application programming interface. What does that mean? Is it a way to offer an interface to a program, and in most cases, data from another program? For example, you build a weather mobile application with cool graphics, but in the end you need access to some kind of weather data. By connecting your app to a service or interface, say to National Weather Service, that provides this kind of data, you are in other words, using an API. And for every type of information you might need for your application, there is most likely an API built somewhere. Free or paid for. Where you can pull this information from. A good way to find out is to simply search the type of data you need, along with a keyword API. And you might find a few options. So for building our APIs, we'll use a list of standard libraries to get our server together, add persistence with a database and use the latest [[JavaScript]] syntax by installing Babel. So for example, we have [nodejs.org](https://nodejs.org) here. So nodejs, as you may have explored in a previous course, will be the basis of our server and use it along with Express. And basically Express will allow us to build our web server and our API endpoints. So if you want to have more information on Express, feel free to go to [expressjs.com](https://expressjs.com). But we'll explore this library momentarily. Babel is the tool that will compile all of our JavaScript code.
>
> **[1:34](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-apis-and-the-libraries?u=76281980&t=94)** So basically when you write some code and it returns the actual version of the code that the web or the application can read when we run it. So this is the compiler. So then we'll use [[MongoDB]] as our database so we can persist our data. With these tools we'll be able to build an API we can call in with any frontend applications or tools, such as Postman, which we'll explore momentarily.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2), [[MongoDB]] (1)
> **Env Vars:** api (6)
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** find (2)
> **URLs:** [nodejs.org](https://nodejs.org) (1), [expressjs.com](https://expressjs.com) (1)
> **Definitions:** is an  (1), in other words (1)
> **Tools:** postman (1)
> **UI Navigation:** go to (1)

#### [Introduction to Postman](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-postman?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-postman?u=76281980&t=0)** - [Instructor] Because we're not using any frontend and this course is about building a backend, we need to be able to test and use the API endpoint we'll create in this course. This is where Postman will be used to allow us to get data, post new items, update, or delete them. So if you want to get your own version of Postman, and you don't have it installed inside of your system, you can go to [postman.com](https://postman.com) and then sign up for free. And once you're signed in, you can actually do it on the web, but if you don't want to do it on the web, there's also tools for Mac, [[Windows]], and [[Linux]]. And it looks something like this. So once you get inside of Postman, you have all these menus here, and you can feel free to explore, but where we're really going to spend our time is in the collections here. And then the request methods here. So you have get, post, put, del, and post again from form data. So if for example, we want to do a get requests, we'll click on it and then you can actually enter the details of the get request under the params, the authorization, if you need any, the headers and so on so forth. So you can play it with any of that. If you are not sure how this works, or if you're not sure what these things are, you can actually look into the documentation for more information, even on the get, or the post, or the put, request how does it work, what are the query params, and so on so forth. You can also go into this section here, code,
>
> **[1:34](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-postman?u=76281980&t=94)** and get the actual code that you could actually test these requests. So if you want to do a curl request, you can actually go right here and get your request based on the information that you've put in here. You can do that in all sorts of type of requests from different languages as well. So [[Java]], there's Node requests here, [[PHP]], [[Python (Programming Language)|Python]], and the list goes on. So if you want to have an example, of a node request with Axios, then you have the code here to write in your application based, again, in the params that you've put in here. So we're going to work with that, and as we go, you're going to see a little bit more details as to whether the paras that you need to enter. And if you want to explore the code snippets, for a front end, for example, to request that particular part of the APIs, then you can use the code that's in here. So I'm going to close that. And again, as you can see, this tool offers many tools to help us test our API. And we'll learn more about these different tools as we use them in the future videos. So for now, get Postman, set it up and let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (1), [[Linux]] (1), [[Java]] (1), [[PHP]] (1), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** node (2), curl (1), php (1), python (1)
> **Tools:** postman (5)
> **Env Vars:** api (2), php (1)
> **UI Navigation:** go to (1), click on (1)
> **Analogies:** for example (2)
> **URLs:** [postman.com](https://postman.com) (1)
> **Documentation:** the documentation (1)

#### [Install Node and Express](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-node-and-express?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-node-and-express?u=76281980&t=0)** - [Instructor] So the next step in the tools we need is to have Node and Express properly installed. We'll also get our project initialized so we can add Express to the package.[[JSON]] file. So let's get to it. So the first thing you need to do is to go to [nodejs.org](https://nodejs.org), and on the main page it will say either download for macOS or the operating system that you're currently on. If it doesn't say anything remotely close to your system, you can go in Other Downloads and get the proper installer as such. So in this case, I am going to get the macOS Installer. Then you click on that installer or the one that you got for your system and you follow the instructions. This is going to install [[Node.js]] and [[npm]] as well which is the tool that we're going to need to install dependencies inside of our package. So if you've done all this before, you've been writing code for a bit, you should already have this in your system, don't worry about it. Then we'll go into the next stage shortly. Perfect. So now that we have this, let's go and open our terminal and I'm going to use Visual Studio Code later on but for now we can use a simple terminal to do in the next stage. So let's go ahead and use a terminal. And the first thing I'm going to do is to make sure I am on my desktop. So I'm going to do cd Desktop, and I'm there,
>
> **[1:32](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-node-and-express?u=76281980&t=92)** and I'm going to make a new directory that I'm going to call crm. So now I should have that and then I'm going to cd into this crm. Okay, so now that I am in my folder, I'm ready to install Express. But before I do that, I need to initialize the package.json file. You do this by doing npm init and then it's going to ask you a bunch of questions and you can basically just return, return. If you want to put a description, you can go ahead and do that. The entry point is going to be the index.js test command. You can enter custom one, get repository. If you are planning to push this to a repository, you can add it here. Keyword and then the author. Let's just see, I'm going to write my name. So your package.json file is done. Now we can go ahead and install Express home. So I'm just going to clear the screen and run npm i or install express, and it's going to install the latest version of Express. Perfect, okay, so now we got our project initialized, installed Node which comes with npm, and finally added Express to our project so we can move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (4), [[JSON]] (3), [[Node.js]] (1)
> **CLI Commands:** npm (4), node (3), make (2), cd (2)
> **Prerequisites:** install (6)
> **File Paths:** package.json (3), node.js (1), index.js (1)
> **Tools:** terminal (3), visual studio (1)
> **Code Identifiers:** macos (2)
> **UI Navigation:** go to (1), click on (1)
> **URLs:** [nodejs.org](https://nodejs.org) (1)

#### [Install Mongo](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-mongo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-mongo?u=76281980&t=0)** - [Instructor] Now that we have the basic server dependencies for our project, we need to install Mongo so we can add the database when we build the server, but also we'll use Mongoose to simplify some of the initial code. So go to [mongodb.com](https://mongodb.com) and then go to [[Microsoft Products|Products]], Community Server in the Community Edition, and then here you can find some downloads to install [[MongoDB]]. So if you're on macOS, you can download this package and follow the instructions. If you're on anything else, you can select which system you are on and then have the install package there. But for the macOS people, there is a faster way to do this and I'm going to show you. So first of all, you need to install Homebrew. And if you don't have this as a macOS user and developer, you should have that. So let's go ahead and open up a terminal, and I'm going to make this terminal bigger, and then simply paste the line that you just copied. So if you haven't, basically you go to the webpage and you copy this line here and then you drop this line directly in the terminal here like so, and this is going to install Homebrew. Homebrew is a tool that allow you to install a whole bunch of things very quickly. Okay, so now that you have Homebrew installed, let's take a look at what are the instructions to install Mongo with Homebrew. So I'm going to go back to my browser right here, I'm going to close that,
>
> **[1:33](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-mongo?u=76281980&t=93)** and this is one way of installing it. Again, feel free to use that way. You can also do a search on the documentation. But the way I do it, which is faster, I always go here and I say MongoDB Brew Install. And this way you get directly to the actual installation instructions to have it installed with Homebrew. And you just follow the instructions here. You want to make sure that when you're on a Mac, you have [[Xcode]] Command-Line Tools installed and then you go on to brew tap mongodb brew and this will get you installed. And then what you need to do is make sure that you run MongoDB, because if you don't run it, it's basically as if the database is not there. So as we run our APIs, if the database is not running, then it's not going to be finding it, so you want to make sure that you start it as well and follow these instructions as well. So this is the surest way for macOS users to actually install it. If you want to do similar instructions, you have them here for [[Windows]] and you have them here for [[Linux]]. So this is the second way of installing it, but again, I find that these instructions are a little bit more safe and it allows us to actually use Homebrew to install it quickly, but also make sure that it's running in the background. So the Windows instructions are right here
>
> **[3:07](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-mongo?u=76281980&t=187)** and the actual exact file is right there too. So if you want to go ahead and follow these instructions, I feel personally that these are more complete and they give you all that you need to actually install it. Once you have that installed in your system, the next thing is Mongoose. So Mongoose basically is a library to help us with modeling our database and bring several built-in tools to help us with validation, business logic, hooks, et cetera. If you'd like to get more details around these two libraries, go to [mongoosejs.com](https://mongoosejs.com) and you're going to have more instructions and more information on the docs, but we're going to use it in our course here while we develop our APIs, so a lot of this is going to be shown onscreen while I actually am building the API. So let's go ahead and install Mongoose and add it to our dependencies. So what I'm going to do now is actually go inside of Visual Studio Code as opposed to do it in the command line, 'cause there's a terminal that comes with Visual Studio Code right here. So the first thing I'm going to do is make sure that I am in the right directory, so I'm going to open the folder of our CRM application, which is on the desktop right here. And if you have this warning, you can go ahead and yes, I trust the author and so on and so forth.
>
> **[4:40](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-mongo?u=76281980&t=280)** And now what we're going to do is bring up the terminal that is inside of Visual Studio Code. If you have your own editor, use your own terminal or use the terminal that is in your system. And now that I have this, I'm going to go ahead and install Mongoose. And I'm going to do [[npm]], again, i mongoose, like so. And now if you want to take a look at everything that we've installed so far, you can look at the package.[[JSON]] file and you see that we have Express, that we've installed in the previous video, and now we have Mongoose that we just installed. So we have all the dependencies that we need and with the instructions from MongoDB, you should have MongoDB running in the background and ready to go for the next stage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (7), [[Windows]] (2), [[Microsoft Products|Products]] (1), [[Xcode]] (1), [[Linux]] (1)
> **CLI Commands:** make (6), brew (3), mongo (2), find (2), npm (1)
> **Prerequisites:** install (13)
> **Tools:** terminal (7), visual studio (3), command line (1)
> **UI Navigation:** go to (4), open the (1)
> **Code Identifiers:** macos (4)
> **Definitions:** is a  (3)
> **URLs:** [mongodb.com](https://mongodb.com) (1), [mongoosejs.com](https://mongoosejs.com) (1)

#### [Basic Babel setup](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-babel-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-babel-setup?u=76281980&t=0)** - [Instructor] This course we'll use the latest [[JavaScript]] syntax throughout and we want to be able to code our server without worrying about any syntax breaking our application. So babel is the tool well set up to help us compile without any issues. So lets add it. So, inside of our visuals to decode in our project, I'm going to open up a new terminal. And I'm going to install a few thules from babel. So, you want to save those into the dev dependencies. And the way to do that is doing dash dash save dash dev. And we're going to add first of all, the core code from babel. Then we're going to add the [[CLI]] tool. Which allows us to do a script here. And then we are going to add node the node script or package from babel. And finally we're going to add the presets so we can use the latest version of [[Java]] script. And this is preset dash environment. Okay, so once these are installed, let's also install known mons. So, these are not going to be in the dev dependencies. I'm going to install known mon and body parser. Which is a package from express. Which will allow us to parse our code. There you go. We have all of our dependencies, we can close this terminal. And now what we're going to do is
>
> **[1:32](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-babel-setup?u=76281980&t=92)** create the configuration file for babel. And again we're going to do this at the root directory. And we're going to call this babelrc. And don't forget to do the dot here. And in this file, we're going to create an object. And in this object, we have the presets that we need. Which is ray. And then we're going to call the at babel package. Forward slash preset environment. So when we compiled our code, we're going to make sure that we compiled the latest version of java script into readable code for out server. So it can run. Okay, so we have all we need for babel, lets move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2), [[JavaScript]] (1), [[CLI]] (1)
> **Prerequisites:** install (3), set up (1)
> **CLI Commands:** node (2), make (1)
> **Tools:** terminal (2)
> **Env Vars:** cli (1)
> **Definitions:** is a  (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)


### 2. Initial Server Build

[↑ Back to Table of Contents](#table-of-contents)

#### [RESTful APIs refresher](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/restful-apis-refresher?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/restful-apis-refresher?u=76281980&t=0)** - [Narrator] Before we actually start building our backend and API, let's cover some quick basics around RESTful API, what is it, and how we're going to build our application around it. Keep in mind this is a quick overview of what a RESTful API is. And if you need a deeper understanding, take a look at learning RESTful APIs in our library. Also, feel free to skip this video if you're fairly familiar with the subject. So in a nutshell, a RESTful API is a way to transact with a backend using HTTP transactions. We use a series of calls like get, post, put, and delete with a [[HTML]] address to transact with our backend and its data. So when a front-end client web mobile needs to do transactions with a backend, it makes a call, like for example, get with an API endpoint that looks like an HTML URL and the API responds with success or failure with data if need be. We use get calls to pull the data from a backend. Then if we need to add new data, we use post. Next, if we need to update the data, we use put. And finally, delete. Well, if you need to delete data. If you're really new to APIs and endpoints and you're not quite grasping how these work, I'll point out these items as we build our application to make sure they make sense as we implement our API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2)
> **Env Vars:** api (7), html (2), http (1), url (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [narrator] (1)

#### [Initial server setup](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=0)** - [Instructor] Now the fund begins, we'll start by creating our initial server code and making it running properly. We'll simply work on the basis of our server which will add more and more as we build our backend APIs. All right, so let's get started. So, the first thing we're going to need to do is change the script, in this area here. So, we have nodemon, we need to use nodemon so we can do [[npm]] start and it's going to start our server, automatically and we start it whenever we change our code. So, this is what we're going to do. We're going to change test to start and then here, what we're going to do is do nodemon and we're going to call index.js. And you can just simply do index without doing this but I'm used to do it this way. Then exact babel-node, and that's all you need. So, once we start a server, this is going to start it and we're going to be good to go. Now, we need to create the index.js files cuz right now the main is the index.js file and it's calling it from the start command, here. So, we need to create that file. So, we're going to go in and create the index.js file. And this is where we're going to add our code. So, we're going to first import express from "express"
>
> **[1:29](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=89)** and then we're going to create our app variable and we're going to run the express server. And then we're going to create another variable that we're going to call port which is basically the port that our server is going to run. You can do 3000 or 4000. I usually do 3000 for express. Okay, so next we need to have our first endpoint. We're going to add the app.get and create our first endpoint. So, we're going to create more than this down the road but this is the first end point. Whenever you go on a browser and you call for the server, this is what it's going to show up. So, we have a request, response and what will be the message is basically from the response, here. So, we're going to do a response, send and we're going to do a template string. If you're not familiar with that, it's basically the ability to do a string and pass a variable, such as port, in this case. So we're going to do Node and express server is running on port and now you do the template strings. You do a $ sign, {} and pass the variable, and there you go. So, this is when we go in the browser, we're going to get this response. Now, we need to do something in our console to know that our server is running. So, I'm going to do a app.listen
>
> **[3:03](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=183)** and I'm going to pass the port variable.
>
> **[3:13](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=193)** And then I'm going to do a console log which will pass the message in our console. Again, I'm using templates strings, "Your server is running on port $ {Port}".
>
> **[3:30](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=210)** So, we're going to pass the port. So, if you changed your port number here, anytime in your code, let's say you would change it to 4000, at least the messages are going to reflect the new port. Okay? Save that and we're ready to test. So, what we're going to do is first open up a terminal and run or server, which will run the script that we created in the package.[[JSON]]. So, let's go and do npm start. And our server is running on port 3000 which is basically this message, here. And now we're going to open a new browser window and do localhost and port 3000. And now we have the message node and express is running on port 3000. So, we have successfully created our initial server. Right now, you have a server running on port 3000. So, let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (2), [[JSON]] (1)
> **File Paths:** index.js (4), package.json (1)
> **CLI Commands:** node (3), npm (2)
> **Ports:** port 3000 (4)
> **Exercise Files:** template (2)
> **Env Vars:** npm (1)
> **Tools:** terminal (1)
> **Analogies:** such as (1)

#### [Initial server files and folders](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-files-and-folders?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-files-and-folders?u=76281980&t=0)** - So before we start adding endpoints to our server, let's set up our folder structure for a project. I personally put everything in a source folder and then start branching out the folders and files I'll use for the server, like controllers, models, and routes. So let's get to it. So what I'm going to do is go inside of our route directory and create a source folder, SRC, like that. And then inside of that source folder I'm going to create another folder which will be called controllers. And I'll explain each and every one of 'em as we go into them. And then I'm going to create a folder for the models. So let's go and click another folder and I'm going to call this the models. And then finally, I'm going to, again, make sure that it's in the source folder. Create another folder which will be routes. The controllers are the functions that will allow us to get information into the endpoints and forward it to whoever is calling it. The routes are basically the endpoints and the models is basically the schema models for our database. So I'm going to create basically the first file here inside of controllers. I'm going to call this CRM controllers dot js. We're not going to do anything in this video with it, but just create the file for now. And then inside of our models, we're going to create a similar file, which will be CRM
>
> **[1:33](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-files-and-folders?u=76281980&t=93)** model. And let's make sure that this is controller and not controllers, cuz we're going to have one file that will have the controllers. And then in the routes, we're going to create CRM routes dot js, and, this one needs to be dot js. Okay, so we have all of our three files created in all of three folders inside of our source folder. And we're good to go. Let's move on.

> [!info]- Semantic Content
>
> **Env Vars:** crm (3), src (1)
> **CLI Commands:** make (2)
> **Prerequisites:** before we start (1), set up (1)
> **Speakers:** - so (1)

#### [Basic routing endpoints](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=0)** - [Instructor] Any application back-end or front-end needs routes in order to be able to call a URL and get something back in a web application. You can call a route and go to a specific page or you can also use routes to define your endpoints in an application. We'll start working on our endpoints and we'll also start using Postman to test our endpoints. So let's get to it. So the first thing I'm going to do is make some updates into our index.js file so we can actually load the file that we're going to create momentarily. So in here, I'm going to add import routes from and then we're going to go into source, routes and then crmRoutes. And then what we're going to do is basically run our routes inside of the app. So routes, and pass the app. And that's pretty much what we need to do. So basically, we're going to pass inside of a routes the app that is here. So it's going to make sense once we start adding the routes in here. So let's save that. And yes, you're going to have your server crash because we haven't created our code here yet. So in the crmRoutes, we're going to create a function which is called routes, which is supposed to take app as we just written in the index.js files.
>
> **[1:37](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=97)** And these are the things that are going to happen. So the first one is going to be the first route and that route is going to be contact. So remember, we had just a forward slash. So basically if you do localhost 3000 you're going to have the messages that are on the server. But now we're going to have our forward slash contact which will allow us to have get, put, update, delete commands with that endpoint. And inside of this particular endpoint, we're going to have a get command, we're going to have a post command and we're going to create another route to update and then another route to delete. So let's create the app.route to update because we need to pass an ID when we update something. And this one is going to be contact/contactId like so.
>
> **[2:39](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=159)** And then this one is going to have a put command and a delete command. Okay, so let's start creating those routes and add a little bit more of what's going to happen when we do a get command. So the first get command is going to have a request and a response, which is the normal stuff. And for now, what we're going to do is still do the response.send and do a message. So what we're going to do is do a simple message, get request successful. Okay, and then we're going to basically do the same thing for all of them. So let's go ahead and do this one for the post,
>
> **[3:34](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=214)** request, response
>
> **[3:42](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=222)** and do the exact same thing. Now this time it's going to do post request successful. Then we're going to do basically the same thing for every single one of 'em. So what I'm going to do is basically copy and paste what I have here and put it right after the put command like so. And this is the put command, put command successful. And then we're going to do the exact same thing for the delete command like so. And let's make sure that our code is clean as well. And this is going to be the delete request. Okay, so now let's make sure we can export that function, export default routes. There you go. Save, and our server has restarted, no more crashing. And now we can actually test this in Postman. So let me go and get Postman and let's go ahead and test all of our methods with the actual localhost. So let's go ahead and do that, localhost for 3000. Make sure again, the full endpoint is contact. Okay, so let's go ahead and send this
>
> **[5:19](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=319)** and we have our get request successful. We can do a post, send that, post request successful. And now for the put and delete, we need to pass an ID. So we'll just pass a bunch of numbers and do a put, send and put request successful. And then for the delete, do the exact same thing. I'm going to use like just random numbers and delete request successful. So congrats. Now you've got four working endpoints. They're very basic responses when you call them and we don't have anything special or data attached to those requests, but it's a start.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5)
> **Code Identifiers:** crmroutes (2), contactid (1)
> **Tools:** postman (3)
> **File Paths:** index.js (2)
> **Env Vars:** url (1)
> **UI Navigation:** go to (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Basics of middleware and uses](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=0)** - [Instructor] What is middleware? In the context of our Node and Express server how would it be used? Middleware are simply functions that have access to the request and response object in our Express application and can run their code there. It can make changes to the request response objects, can end them, can call another function in the stack using Nex functions, et cetera. We'll do an example in our routes with middleware in one of our endpoints. So let's get to it. So we're back into the file where our routes are, and we're going to basically change a little bit of our first route, the get route and add middleware. So let's go ahead and do it. I'm going to do a longer version of a function by adding my curly braces here like so. And what I'm going to do is basically add middleware right here. So what I'm going to do is basically do a console log of information that I have in the request response. This is something that you shouldn't do in reality, but it is just for the example. Middleware is often used to call the functions or other things but I'm just going to use the console log example here. I'm going to do a template string, and I'm going to basically in the console log add the information who is this request from. And add my template strings here. Request dot original URL. So it's going to give us the URL of who is the request from
>
> **[1:39](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=99)** and then I'm going to do another one, console log. And then I'm going to do request type, what is this request type. And then again, we're going to do template strings and use the request object to look into what is the method. And then we're going to use the function Nex to move away from that and actually do the official response that we written originally. And I'm going to move that function outside of that function here. So cut that, put a comma here, and then this is going to be run because we have called in Nex, response Nex.
>
> **[2:40](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=160)** And then run and paste our response. Get requests successful. Okay. Oh, I made a little typo here. It's not a dot but a comma, and then save that. Our server is still running and let's go and make that request, the get request. And take a look at what's happening in the console log here. So I'm going to basically go into Postman and do the get request. So let's go ahead and remove the ID, do a get request? Send it. Okay, so we have an error. I know where it is just by the messages. I've seen this before. I didn't pass Nex up here. So let's go ahead and pass it here, save again. And we do the get request on Postman. Now we have our get request successful, but now let's pay attention to our console log. In the console log, we have the request from. So the request is from the contact endpoint and then what is the request type? We have get. So if we put the exact same code in all of our endpoints here, we would get the different endpoints. So here we would get the contact/contact/id and the actual contact ID that we've passed into the put request. And then we would get the different method use.
>
> **[4:15](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=255)** So put, delete, post, et cetera, et cetera. So as you can see, we can add anything we want as middleware in our endpoints. It could could also be a third party library where you want to do something special. your imagination is your limit.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), node (1)
> **Exercise Files:** template (3)
> **Env Vars:** url (2)
> **Tools:** postman (2)
> **Speakers:** - [instructor] (1)


### 3. Database Setup

[↑ Back to Table of Contents](#table-of-contents)

#### [MongoDB basics refresher](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/mongodb-basics-refresher?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/mongodb-basics-refresher?u=76281980&t=0)** - [Instructor] This course is not a full on course on [[MongoDB]]. And if you want to follow our course on the subject, feel free to take a look at our library. We'll briefly go over the basics and concepts around using MongoDB so you have a good idea of what we're doing when we implement the code. A MongoDB database is one big object containing collections. Each collection could be like a contextual item like for example, contacts for the database we'll create. Then inside the collection we have documents which are the contacts themselves. So my contact information would be in a document, yours in another, et cetera. And then inside each document, we have the data for each contact such as address, telephone, email, et cetera. The document looks like [[JSON]] object with a key value pair approach or arrays of data. So where does Mongos fit into this? Well, Mongos will allow us to set up a schema for a collection and predefine what each key value pair takes as type. For example, the first name of a contact will take a string, but we'll cover this in more details soon. Before we move on, I'd like to install a tool we'll use to test our MongoDB and make sure the data we have in our database matches the calls we make to the endpoints. And this tool is called Studio 3T and you can get it from [robomongo.org](https://robomongo.org) and simply download and install it on your system. So I'm going to do the exact same thing. Install it here.
>
> **[1:36](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/mongodb-basics-refresher?u=76281980&t=96)** And once it's installed, you can open it. Okay. So once you have to do three fee, all you have to do is click on Connect and it's going to ask you to enter a URI. And this is local host. And the port for our local host is 27017 and Save.
>
> **[2:06](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/mongodb-basics-refresher?u=76281980&t=126)** And then you can connect to the database. So if it's not connecting, something is wrong with your database. So all you have to do at this point is connecting. And I'm going to connect to the database. And I'm connected directly to my database. So once we start adding some data into our database, we're going to see whatever collection we added in here and we're going to be able to test or check that the endpoints that we're using with our server is actually sending data to our database here. So now we got some basics around MongoDB and a tool will use as we implement our database. So let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (5), [[JSON]] (1)
> **Prerequisites:** install (3), set up (1)
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** make (2)
> **Env Vars:** json (1), uri (1)
> **URLs:** [robomongo.org](https://robomongo.org) (1)
> **UI Navigation:** click on (1)
> **Definitions:** is called (1)

#### [Database setup](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/database-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/database-setup?u=76281980&t=0)** - We are now ready to set up our database inside of our api. So let's get to it. So we're back into the index dot js and we're going to import a few things first. So I'm going to import mongoose (keyboard keys clicking) from mongoose and then I'm going to import body Parser from body parser And then what I'm going to do is just on top of the app cuz this is the (keyboard keys clicking) current server routes what I'm going to do is do the mongoose connection right here. So let's go ahead and do the code for that. And when I mean the mongoose, I mean the [[MongoDB]] connection but we're using mongoose to make the code a lot more succinct and shorter. global dot promise. We're using promises so when we make a call they're going to wait for a response as opposed to turn an error until they get the answer. So this will give us some leeway and we're going to connect to MongoDB local host and we're going to create a CRMDB inside of our MongoDB. (keyboard keys clicking)
>
> **[1:33](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/database-setup?u=76281980&t=93)** Use new U R L parser. (keyboard keys clicking) True. (deep breathe) All right, so this completes our mongoose connection. Now we need to use body parser to allow us to do the [[JSON]] back and forth in between the Mongo database and our server. So let's go and body parser set up just to give you some notes or leave some notes in the exercise files. We're going to app use body parser dot URL encoded And we're going to use the options extended true (keyboard keys clicking) And we're going to allow the app to use the json options with body parser. So this will allow us to do the back and forth between our server and our Mongo database. All right, so let's save this. Let's take a look at our server. Everything is running properly and we are good to go. So now we have our MongoDB running and connected to our backend with the help of mongoose. However, we don't have schema or any of the endpoints ready to accept transactions. In fact, if we use our endpoints and postmen we'll still get the responses we set earlier. So we'll work on this throughout the course. So let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (4), [[JSON]] (2)
> **Non-Speech:** (keyboard keys clicking) (5)
> **CLI Commands:** make (2), mongo (2)
> **Env Vars:** crmdb (1), url (1)
> **Prerequisites:** set up (2)
> **Exercise Files:** exercise files (1)
> **Speakers:** - we (1)

#### [Schema setup](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/schema-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/schema-setup?u=76281980&t=0)** - [Instructor] Before we start adding operations to our database and the corresponding endpoints, we need to create our schema. The schema is what dictates the types of data and the structure of your data your database takes. In other words if you define the first name key to take only string data, the database will not accept anything else. Therefore the schema defines the rules related to what your database can accept. So let's go ahead and do this. So now we're going to go back to our folder models here. nd the crmModel is where we're going to define our schema. So let's go ahead and close our index and open up the crmModel. In this particular file, we're going to first import mongoose, again mongoose is always helpful with the code, so we're going to use it here too. And then we're going to create a variable named schema which will accept the mongoose.schema. And then we're going to create the schema, so let's go ahead and do that by first doing export a variable contact schema = new schema.
>
> **[1:19](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/schema-setup?u=76281980&t=79)** It's a lot of schema in a sentence. In our schema we're going to add a few things. The first name which will be of type String,
>
> **[1:36](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/schema-setup?u=76281980&t=96)** and we'll make it a requirement, so required enter a first name.
>
> **[1:46](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/schema-setup?u=76281980&t=106)** Okay, and then what you could do is put a comma here and then copy those lines, paste it again, and basically this one's going to be last name. Last name let's make name a capital M for this one too.
>
> **[2:13](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/schema-setup?u=76281980&t=133)** Enter a last name. And then the next one is going to be email. It's not required so we can remove that and remove the comma here just to make sure and let's copy this one 'cause the next few are not going to be required company for this one. And then paste again for this one is going to be phone and no this is not going to be a string, this one is going to be a number. And then we're going to create one that will be of a different type but I'm still going to paste it and again remove the comma 'cause otherwise the server is going to break and this one is going to be called created dates so we have some sort of date for when the data or that particular contact has been created so this one is going to be of typed date and the default is going to be date.now. And then you can save this. Okay so again let's go back to our server, everything is running properly, and by the way, I'm using the shortcut control gravvy for accessing the terminal that's already open. If you want you can also access it from the terminal menu here but I'm using the shortcuts. Okay so now we have a [[MongoDB]] instance running,
>
> **[3:49](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/schema-setup?u=76281980&t=229)** we have mongoose connecting to it, we have a schema set up. So right now if you look at the MongoDB instance running on this tool here. And let's just refresh by clicking here. Refresh all. So right now if you look at the MongoDB instance running on studio 3T the database is empty, or at least we don't have any items for our contacts yet. We'll start adding new items when we create the post endpoint and we'll do this soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (3)
> **CLI Commands:** make (3)
> **Code Identifiers:** crmmodel (2)
> **Tools:** terminal (2)
> **Prerequisites:** before we start (1), set up (1)
> **Cross-References:** go back to (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)


### 4. CRUD Operations

[↑ Back to Table of Contents](#table-of-contents)

#### [Create POST endpoint](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=0)** - [Instructor] This video, we'll complete our post endpoint so we can add new items to our database and then test it. So let's get to it. So the first thing we're going to do is go into our CRM controllers. So we don't need the model anymore, so we're going to close it. And then go into our controllers. So we're going to start working in here cause this is what is going to basically be the functions that will send the data to the database or update the data and so on and so forth. And then use the endpoint as the kind of portal to all of this. So let's go ahead and start with what we need. Import mongoose from mongoose. And then we're going to import our schema, which we've worked on. Contact schema. And if you want a little tip when you're working with the imports, you can always do import from. And then let's go and grab what we need. From models, CR model. But let's say for example, you did all this already from but you didn't import what you needed. What are you going to do as you actually write what you need to import, it's going to auto-complete it for you like so. So just a little tip when you don't know or can't remember what you need to import from that file. All right, from there we're going to create
>
> **[1:35](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=95)** a variable call contact, which will hold the bottle. And the model is contact. And we're going to pass contact schema. And then we're going to do our first controller. So let's go ahead and do our controller that will be called add new contact. So basically we're going to start with the post, so we can have some contacts in our database before we actually use get. So request, response. And then we're going to create inside of that function a new contact. New contact with the request and the body, basically. So what is the body of the request? So within that variable, we're going to have the body of the request. So basically what we're sending into our post method is going to be in the body here and we're going to use that to create a new item in the database. So new contact dot save.
>
> **[2:58](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=178)** We're going to pass error just in case we have an error and then a contact. And what we're going to do with this if error,
>
> **[3:12](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=192)** then give us the response and error so we know what's happening. Otherwise give us the response with the [[JSON]] contact, so basically give us the information that the contact that was saved in the database if it's successful. Okay, so we have our first new controller. So now that we have our first new controller, what we need to do is go in the routes and make sure that this is passed to the endpoint. So we have a route here. Right now we have all of these routes. We have the post route here. What we need to do is pass the new contact to this post. So this is going to simplify the code that we just have in here. So it's going to go like this. I'm going to delete all this because at this point this is the response, but the controller does the response. So what we're going to do is simply this. And now we need to pass the function or the controller into the post command or post endpoint. In order to do that, we need to import, from our controllers. Forward slash and again, let's go and we know exactly what we're going to import at new contact. From controllers, CRM controller. And now we're going to use it right here.
>
> **[4:48](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=288)** Add new contact. So basically we've imported this controller from here and now we're using it in the post command here. So we're going to save all this. We're going to bring back our server, make sure everything is running properly. So if anything goes wrong here, check your code. They were probably made a typo somewhere. I do that all the time, so don't worry about it. This is the curse of a developer. Sometimes you add something somewhere like this, and then you save it and then it throws you an error or not. But in this case it does because I didn't use the right syntax for that. Add new contact function or controller that I'm passing. So these things happen even to me, so don't worry about it. Okay, so now we're going to test this in postman. So we're going to test the post method and try it out. Now if you want to look at the CRM model again, just to refresh your memory about what is required for the post command, you need at least the first name and the last name. Everything else is not mandatory. If you feel like adding email, company phone you can add it or not. But it requires a first name, last name at least for the contact to go through the server. Okay, so let's bring up postman. And I'm going to create a brand new post method here, post. And then let's do local post the endpoint 3000, forward slash contact.
>
> **[6:24](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=384)** Now where do we put the information to send to the database is in the body of the request. And we're going to select this one form URL encoded, this one. Make sure you're on post and not any other methods. And now we're going to enter the key value pairs that we set up in our database. So we had first name, put many as value, we had last name. And if you have a typo in any of the keys, you're going to see an error message. And then I'm going to add company, [[LinkedIn]], and then let's add a phone. And 555-555-1234. Okay, so now we got all of our items we have the required ones, which is first name, last name. Let's go ahead and send this request to our server. And the body of the response is basically what is now the information in the database. First name, last name, company, phone. It created an idea and a date as well. And this is what we just sent and the response. So if we look also in the database on studio, let's just do refresh here. Refresh all. Now we have the CRM database that we just created through our post. We have the first contact, which is right here. So everything works successfully
>
> **[7:59](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=479)** and we are good to go. So as you can see, it is fairly easy to add an endpoint and then test it with post method. We can also get some very good tips on code syntax when you come around to do the front end piece when you explore postman a little bit further.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (1), [[LinkedIn]] (1)
> **Env Vars:** crm (4), json (1), url (1)
> **CLI Commands:** make (3)
> **Tools:** postman (3)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Create all items GET endpoint](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980&t=0)** - [Instructor] Now that we have an item in our database, let's create the endpoint that will allow us to get all of our contacts. So again, we're going to start from our controller so let's go here and create the new controller, which will find all of our contacts. So we're going to export const getContacts, which is the name of the function that will get all of our contacts. Request, response, and then here, basically all we need to do is do Contact.find. And inside of the find, since we're trying to find everything, we don't need to pass parameters. And then, we're going to pass error contact, like we've done before. And basically, the [[Representational State Transfer (REST)|rest]] resembles a lot from our if statement here. So let's go ahead and do that. We're going to paste it here. So if error, please send the error. Otherwise, send the response with the [[JSON]] contact. And if it has multiple contacts, it's going to give us the document that has all these contacts. Okay, so we're done on the controller side. Now, we need to add this to a route. So let's save that. And then, go into our CRM route. I'm going to quickly bring up the terminal just to make sure that our server is still running properly.
>
> **[1:33](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980&t=93)** Yeah, okay. Now, here, we need to add the getContact and import it. And now, we're going to use it inside of our get call here. So I'm not going to remove the middleware 'cause this is an example and I want to keep it there, but all I'm going to do, as opposed to do all this gibberish here. It's not gibberish but it's basically the response that we're getting when we do a get method. I'm going to remove this and simply pass get contacts. So let's remove all this here, like so. And after the comma, you pass getContacts. And this will basically get the contacts that we need. All right, save. Let's check our server. Everything is running properly. Now let's go back into Postman. And now we have our get contact right here so we already have it. We don't need to add anything in the body. All we need to do is do the get contact. So if I send this to the server, let's go ahead and do that, we get an array of all the contacts that are in our servers. So for example, right now, we just have this one. So if we were to create another one and I have all this information already here, so let's change this to Manny Anrietto, [[LinkedIn]], and then simply change the number very quickly. And add an email,
>
> **[3:10](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980&t=190)** metoo@[metoo.com](https://metoo.com). And let's send this to the server. We got this new contact. Now, what we can do is go into get contact and run that command again and now you'll see that we have multiple contact into our database. So now we got our get endpoint ready and we're able to pull our data from our database. Let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[JSON]] (1), [[LinkedIn]] (1)
> **CLI Commands:** find (4), make (1)
> **Code Identifiers:** getcontacts (2), getcontact (1)
> **Env Vars:** json (1), crm (1)
> **Tools:** terminal (1), postman (1)
> **URLs:** [metoo.com](https://metoo.com) (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)

#### [Create specific ID GET endpoint](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=0)** - [Narrator] What if you need to retrieve just the information of a specific contact? This is when a specific ID endpoint comes into play. So let's get to it. So again, we're going to be playing with the same files over the [[Representational State Transfer (REST)|rest]] of this chapter. So, the first thing we're going to do, again, I'm going to go and create in the CRM controller, the function that will be able to find one specific contact. So, the way it goes, it's very similar to this, but there's a few changes. So you can copy this, or you can just go ahead and type as I type. Okay, so this one is going to be getContact, and just one E in get, getContactWithID. And we're going to basically pass the same thing as usual, request, response, and this is a function. Very similar to what we've done. And then we're going to do contact, instead of find all contacts, we're going to FindById, and we need some parameters in order to find a specific contact inside of that function. From the requests, we'll get the params.contactId, and then the rest is going to be very similar to what we've done. So error, contact.
>
> **[1:38](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=98)** And then inside of it we're going to do the if error, blah, blah, blah, response, and so on and so forth. So let's go ahead and copy this passage here, so line 19 through 22, and let's paste it. And it's pretty much the same. So, if an error, send the error. Otherwise, send me what I have in my [[JSON]] response. Okay, so we're going to add this, and this, and then save. And I'm just going to remove my server. Everything is running properly. Let me just turn down the terminal. And now, let's go into our CRM routes to add it. So we need to import it first, getContactWithID. And in this area here, we need to do a new get. So, we have our get here to get all the contacts, but we also need a new get for a specific ID. So get, and then we're going to pass in this function, getContactWithID. Again, I'm going to add some notes. Get specific contact. This is to post a new contact. This is to get all contacts. So, let's go ahead and save it.
>
> **[3:11](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=191)** Make sure our server is still running properly, everything is running properly. So now we need to first get all the contacts to understand which ID we need to look for. So, let's go into Postman and simply get all of our IDs. We already did this, so we can actually use what we've done in the past. And I'm going to get this specific contact here. So I'm going to do this, like so. Copy that, and then I'm going to go and basically do a get. I'm going to create a new here. So get, and then I'm going to enter the URL and then simply enter the ID right here. So, I could do that, I could put it in the params, but both ways works, because at the end of the day, you're building up a URL that you're asking. So let's send that. And what I get as a return is the information from that specific ID. So now, if you need any specific contact and their data, you can pull only specific contact by its ID. We are almost there. We're completing our endpoints. Let's move on to building the rest.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (3), [[JSON]] (1)
> **Code Identifiers:** getcontactwithid (3), getcontact (1), contactid (1)
> **CLI Commands:** find (3), make (1)
> **Env Vars:** crm (2), url (2)
> **Tools:** terminal (1), postman (1)
> **Analogies:** similar to (2)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Create PUT endpoint](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-put-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-put-endpoint?u=76281980&t=0)** - [Instructor] Now when we need to update our data, we need to create a put endpoint, and this is what we'll focus on this video. Okay, we're going to go back to our controllers and create the update function right here. So we're going to go ahead and do this, export const updateContact, and again, request response.
>
> **[0:30](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-put-endpoint?u=76281980&t=30)** And then we're going to use the contact database, and then the function that we need, it's not a comma, it's a dot, is findOneAndUpdate, and this one requires a couple of things, So let's go ahead and go through them and explain them as I write them. First of all, it needs the ID, so we need to have an ID in order to update it. So what we're going to get it from is the request.params.contactId, and then we're going to pass the request and the body of its request, and with that, we have an option that we need to pass, and this option is new = true. So what does that mean? That means that when they send the [[JSON]] response, they're going to show the new information, so the updated contact, not the old one. If I didn't put that in, or if I put false here, it would show the old contact information. So we want to see that our update has been successful, and then we're going to pass the usual suspects here and do our function. And the [[Representational State Transfer (REST)|rest]] is pretty much the same. So we're going to copy and paste right here what we have...
>
> **[2:04](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-put-endpoint?u=76281980&t=124)** And pass it inside of that function right here, like so. So if we get an error, we get the error. Otherwise, send me the JSON information. Okay, so now what we need to do is go into our CRM route again and go into our put request right here, which I'm going to also update a contact, and we're going to remove everything that we've written already and pass that controller, but we need to make sure that we import it first. So updateContact, and then we're going to pass it to our put method, updateContact. And that pretty much sums up what we need to do in our routes. So save that. Let's go back to Postman and test this. And again, let's make sure we don't get any errors on our server, so I'm just going to bring my terminal shortly. Everything is good here. All right, we can go into Postman. And now let's get our IDs from this call here. So I'm just going to get them, and I have these IDs here. So what I'm going to do, I'm going to use this one and add an email. So I'm going to grab the ID of this one, and then open up a brand new tab here,
>
> **[3:39](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-put-endpoint?u=76281980&t=219)** and this is going to be the update, or put, and the URL is going to be basically the contact ID. So forward slash, paste the ID that I just had, but now we need to pass something in the body, because we need to update something with this one. So let's go into the body and select the URL encoded one, and I'm going to simply add an email. That's it. I don't need to do anything else, because it already has a first name last name, so we're going to be successful with that request. So let's go ahead and add an email, metootoo@[metoo.com](https://metoo.com),
>
> **[4:25](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-put-endpoint?u=76281980&t=265)** and then let's go ahead and send that request. And now we have this particular ID that we selected, which had this information already, and we added the email. So this is what a put request does. It updates anything that you sent it to. If we had also changed the name, so let's say for example, last name, I want to change it to Henro, let's do that as opposed to Henri. Well, if I do that, and again, I'm using the same ID, and I send it, now the last name is going to be Henro, and we're being shown the new data, because of the parameter that we passed, new as true. So now we can update our data with a put request. Let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **Code Identifiers:** updatecontact (3), findoneandupdate (1), contactid (1)
> **Env Vars:** json (2), url (2), crm (1)
> **Tools:** postman (2), terminal (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (2)
> **URLs:** [metoo.com](https://metoo.com) (1)
> **UI Navigation:** select the (1)

#### [Create DELETE endpoint](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-delete-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-delete-endpoint?u=76281980&t=0)** - The final endpoint we need to create is a delete endpoint, so we can delete any of the data we have on our database. So let's get to it. So we're back into our controller here, and we are going to start by creating the controller function, delete contact, request response. (computer keyboard clicks) And then what we need to do is use again, a contact model, and it's as simple as using a remove function from Mongoose. And obviously it needs some parameters. So first of all, we need to know what is the id, and we're going to get this from the request params dot contact id, (computer keyboard clicks) and then, we're going to pass, as usual, the error, contact, into our function. (computer keyboard clicks) And we're going to copy this, but then something else is going to happen. So let's just copy this first. So if you remember, whenever we do something to our data, we get the [[JSON]] information back, but in this case, we're deleting something, so it's no longer available. So if there's an error, yeah, give me the error,
>
> **[1:34](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-delete-endpoint?u=76281980&t=94)** but if it's successful, don't give me the contact, cause it's going to be null. So we need to do something with this. So instead of giving the contact back, so what we're going to do is a message, and the message is, success, (computer keyboard clicks) fully deleted contact, which means that, instead of giving me the contact information that I just sent to you, send me that message, because there's no contact to give me. So in this case, we don't need that contact parameters here, we can delete it. (computer keyboard clicks) Cause all we need is either the error, or the JSON message that is sent back to us. So we're going to finish our function here, and then we're going to go into routes and change the delete here. So I'm going to remove all of this and pass the delete contact. So we need to get it from here. So I'm going to start doing this in a line like this. (computer keyboard clicks) And then finally, delete contact. And then finally, pass the delete contact controller into our endpoint right here. And I'm going to add a note to delete a contact. All right, let's save this.
>
> **[3:06](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-delete-endpoint?u=76281980&t=186)** Let's check our server. Everything is running. Now let's go into Postman. All right, so now we're in Postman, and I need to get an id to delete it. So I'm going to go into my GET call here, and get all my contacts, and select one of these. So I'm going to go ahead and delete this one here. So I'm going to copy the id of this guy, and then I'm going to go into the new tab that I added. Or if you don't have one, you can click on the plus, and select delete. Let's go into local contact forward slash pass the id, and that's all I need. So once I have this URL composed, all I need to do is send and it's going to delete the contact, and I successfully deleted the contact. So if I do a GET again, I should have only one contact. And if you want to be absolutely sure that this is not in the database, let's go into Studio 3T and do again, a click, and I only have one contact in my database. If I did this before I deleted contact, I would have two. So now we've got a full API with the proper endpoints to create, update, and delete items in the database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (2)
> **Env Vars:** json (2), url (1), api (1)
> **Definitions:** is a  (2), means that (1)
> **API Endpoints:** get  (2)
> **Tools:** postman (2)
> **UI Navigation:** click on (1)
> **Speakers:** - the (1)


### 5. Other API Options

[↑ Back to Table of Contents](#table-of-contents)

#### [Static files serving](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/static-files-serving?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/static-files-serving?u=76281980&t=0)** - [Instructor] With an express-based server, it is possible to serve static files such as images or any other files you'd like to have available from your backend. So let's go ahead and make this happen. The first thing I'm going to do is go into the exercise files and grab two images from the resources. So click on resources, and these two images are the ones that we're going to statically serve to the outside world. So what we're going to do is go into our CRM here and inside of the directory here we're going to create a public folder. So I'm going to create a new folder called public like so and I'm going to copy those two images directly into that folder. So the sky and football like so. And then add them here. So I'm going to close these folders and now I have this public folder that I just created with those two elements that are available to the public. But before it's available, I need to make changes to the index.js. I'm going to close those two, move my terminal for now and then go into the index and create basically a new line that will allow to serve those static files. So serving static files and it's as easy as
>
> **[1:34](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/static-files-serving?u=76281980&t=94)** using app.use(express.static) and inside of that function
>
> **[1:45](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/static-files-serving?u=76281980&t=105)** we need to pass which folder is going to be static. So in this case, public folder, and that's pretty much all you need to do to serve static files and if we go back to our server everything is running properly and we can test this in a browser. So let's say for example, we open up a brand new browser and we go to localhost:3000/ and all you have to do is get the actual file name so in this case, football.jpeg.
>
> **[2:23](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/static-files-serving?u=76281980&t=143)** And let me just make sure that I got the syntax right for football.jpeg; football.jpeg with an E.
>
> **[2:36](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/static-files-serving?u=76281980&t=156)** Perfect. So now if I enter, I have access to this particular file. If I do the sky, and let's make sure we do it properly sky.jpeg. Let's just remove football and do sky
>
> **[2:54](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/static-files-serving?u=76281980&t=174)** and I have access to this beautiful image that I just statically served through the express server. So now any files that are in the declared static folder will be available to any front end that needs it.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **UI Navigation:** click on (1), go to (1)
> **Analogies:** such as (1), for example (1)
> **File Paths:** index.js (1)
> **URLs:** [localhost:3000](https://localhost:3000) (1)
> **Ports:** :3000 (1)
> **Env Vars:** crm (1)
> **Cross-References:** go back to (1)

#### [Other potential libraries for API](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/other-potential-libraries-for-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/other-potential-libraries-for-api?u=76281980&t=0)** - [Instructor] We've built an API with endpoints from scratch using Express in this course. However, there are other libraries worth exploring if you want to save some time or get more benefits from these libraries. I always think it's great to first build one on your own so you learn the basics and the syntax then borrow from other libraries to be more efficient. Here are some of the potential options. Go to [koajs.com](https://koajs.com) and if you like Express but would like to get more for less, koa is a great option built from the same people who did Express. For instance, and if you're familiar with ES 6 syntax, you can use generators instead of callbacks. They also remove middleware to make the library smaller and there is much more to explore. Feel free to take a look at it. Go to [swagger.io](https://swagger.io). Then if you'd like to get a full fledged pre-built API, you could either use Swagger or LoopBack, which is [LoopBack.io](https://LoopBack.io). I haven't worked with Swagger but I've built a few projects using LoopBack and I can tell you it's a very good API generator where you can easily build a backend server with all your API endpoints with a few [[CLI]] commands. So feel free to explore these tools at your own leisure. But the beauty of having built one yourself from scratch, is that it'll make it easier for you to understand and compare what they offer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CLI]] (1)
> **Env Vars:** api (4), cli (1)
> **URLs:** [koajs.com](https://koajs.com) (1), [swagger.io](https://swagger.io) (1), [loopback.io](https://loopback.io) (1)
> **CLI Commands:** make (2)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/next-steps?u=76281980&t=0)** - [Instructor] This course was an introduction to building the API with Node and Express. With this knowledge, you should be able to easily and quickly build a backend with all the proper endpoints needed for any type of application. To explore this further, you could simply replicate the same process we've done by creating other collections, models, and schemas for your database and also create the proper endpoints for those. Also, if you'd like to explore some of the libraries we mentioned in the options video, I'd strongly suggest to look into LoopBack or Swagger for creating full fledged APIs with tons of options and [[Tokens]] for security measures. Finally, if you prefer you'd like to learn a bit more about how to secure your APIs beyond using a library like LoopBack, look into JWT and how you can implement these in your API. You can look into the subject by visiting [jwt.io](https://jwt.io) and look into the [[Node.js]] section under the libraries tab. Thanks very much for taking my course and I'll see you in a bit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (1), [[Node.js]] (1)
> **Env Vars:** api (2), jwt (1)
> **CLI Commands:** node (2)
> **File Paths:** node.js (1)
> **URLs:** [jwt.io](https://jwt.io) (1)
> **Cross-References:** we mentioned (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Emmanuel Henri]]

## Resources

- Exercise files available

## Skills Covered

- Express.js
- REST APIs
- Node.js

## Path Context

### In [[Explore Web Development with Node.js]]
← [[Node.js- Web Servers, Tests, and Deployment]] | **8 of 11** | [[Node.js- Securing RESTful APIs]] →

### In [[Explore App Development with the MERN Stack]]
← [[Building a Website with Node.js and Express.js]] | **8 of 13** | [[React- Securing Applications]] →

## Appears In

- [[Explore Web Development with Node.js]]
- [[Explore App Development with the MERN Stack]]

## Related Courses

_Courses sharing skills:_

- [[Building a Website with Node.js and Express.js]] — Node.js, Express.js
- [[Node.js- Securing RESTful APIs]] — Node.js, REST APIs
- [[Express Essentials- Build Powerful Web Apps with Node.js]] — Node.js, Express.js
- [[Building RESTful APIs in Laravel]] — REST APIs
- [[WordPress- REST API]] — REST APIs

---

[↑ Back to top](#)