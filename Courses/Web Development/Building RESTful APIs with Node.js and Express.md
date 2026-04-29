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
created: 2026-04-29
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
  - RESTful APIs with Node and Express
  - What you should know
- [**1. Setting Up**](#1-setting-up) (5 videos)
  - Introduction to APIs and the libraries
  - Introduction to Postman
  - Install Node and Express
  - Install Mongo
  - Basic Babel setup
- [**2. Initial Server Build**](#2-initial-server-build) (5 videos)
  - RESTful APIs refresher
  - Initial server setup
  - Initial server files and folders
  - Basic routing endpoints
  - Basics of middleware and uses
- [**3. Database Setup**](#3-database-setup) (3 videos)
  - MongoDB basics refresher
  - Database setup
  - Schema setup
- [**4. CRUD Operations**](#4-crud-operations) (5 videos)
  - Create POST endpoint
  - Create all items GET endpoint
  - Create specific ID GET endpoint
  - Create PUT endpoint
  - Create DELETE endpoint
- [**5. Other API Options**](#5-other-api-options) (2 videos)
  - Static files serving
  - Other potential libraries for API
- [**Conclusion**](#conclusion) (1 videos)
  - Next steps

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### RESTful APIs with Node and Express
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/restful-apis-with-node-and-express?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/restful-apis-with-node-and-express?u=76281980&t=0)** - [Instructor] Have you mastered the frontend world, but feel like you're still missing some knowledge around building a backend?
>
> **[0:06](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/restful-apis-with-node-and-express?u=76281980&t=6)** Have you been looking for a simple way to learn how to build an API with Node and Express?
>
> **[0:11](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/restful-apis-with-node-and-express?u=76281980&t=11)** If the answer is yes to any of these questions, you've come to the right place.
>
> **[0:15](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/restful-apis-with-node-and-express?u=76281980&t=15)** Building an API leveraging Node and Express libraries can be intimidating the first time you try it.
>
> **[0:21](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/restful-apis-with-node-and-express?u=76281980&t=21)** But I'm here to simplify and demystify the whole process.
>
> **[0:26](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/restful-apis-with-node-and-express?u=76281980&t=26)** Hi, I'm Emmanuel Henri and I've been working with Node, Express, and JavaScript for a very long time.
>
> **[0:32](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/restful-apis-with-node-and-express?u=76281980&t=32)** And it is my great pleasure to help you learn about building an API with these frameworks.
>
> **[0:37](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/restful-apis-with-node-and-express?u=76281980&t=37)** First, we'll explore the tools used for testing our API and its database.
>
> **[0:43](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/restful-apis-with-node-and-express?u=76281980&t=43)** Next, we'll set the stage for our API with our initial Express server and routing endpoints.
>
> **[0:50](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/restful-apis-with-node-and-express?u=76281980&t=50)** Then we'll set up our Mongo database along with its schema.
>
> **[0:54](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/restful-apis-with-node-and-express?u=76281980&t=54)** And finally, we'll create each API endpoints to add, update, delete, and pull data from our backend.
>
> **[1:02](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/restful-apis-with-node-and-express?u=76281980&t=62)** So if you're ready to build your own API, fire up your favorite editor and let's get started.

> [!info]- Semantic Content
>
> **Env Vars:** api (7)
> **CLI Commands:** node (3), mongo (1)
> **Code Keywords:** finally, (1), delete (1), let (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/what-you-should-know?u=76281980&t=0)** - [Instructor] As this course is an exploration of how to build an API with Node and Express, some basic understanding of Node, MPM, and its commands isn't a must, but will help you.
>
> **[0:11](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/what-you-should-know?u=76281980&t=11)** Next, experience with JavaScript is essential to follow along, as this is what we use in this course.
>
> **[0:19](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/what-you-should-know?u=76281980&t=19)** As you'll see, I'm running on a Mac.
>
> **[0:21](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/what-you-should-know?u=76281980&t=21)** But you can follow along on a PC, as the tools work exactly the same on both platforms.
>
> **[0:27](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/what-you-should-know?u=76281980&t=27)** Also, I'm using VS Code as my code editor, but feel free to use whatever tool you prefer although I recommend using an editor with a built-in terminal.

> [!info]- Semantic Content
>
> **CLI Commands:** node (2)
> **Env Vars:** api (1), mpm (1)
> **Tools:** vs code (1), terminal (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 1. Setting Up

> [↑ Back to Table of Contents](#table-of-contents)

#### Introduction to APIs and the libraries
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-apis-and-the-libraries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-apis-and-the-libraries?u=76281980&t=0)** - [Instructor] When you hear the term an API, you might be wondering what it is exactly.
>
> **[0:05](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-apis-and-the-libraries?u=76281980&t=5)** The technical term is an application programming interface.
>
> **[0:09](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-apis-and-the-libraries?u=76281980&t=9)** What does that mean?
>
> **[0:10](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-apis-and-the-libraries?u=76281980&t=10)** Is it a way to offer an interface to a program, and in most cases, data from another program?
>
> **[0:17](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-apis-and-the-libraries?u=76281980&t=17)** For example, you build a weather mobile application with cool graphics, but in the end you need access to some kind of weather data.
>
> **[0:24](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-apis-and-the-libraries?u=76281980&t=24)** By connecting your app to a service or interface, say to National Weather Service, that provides this kind of data, you are in other words, using an API.
>
> **[0:34](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-apis-and-the-libraries?u=76281980&t=34)** And for every type of information you might need for your application, there is most likely an API built somewhere.
>
> **[0:40](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-apis-and-the-libraries?u=76281980&t=40)** Free or paid for.
>
> **[0:41](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-apis-and-the-libraries?u=76281980&t=41)** Where you can pull this information from.
>
> **[0:44](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-apis-and-the-libraries?u=76281980&t=44)** A good way to find out is to simply search the type of data you need, along with a keyword API.
>
> **[0:49](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-apis-and-the-libraries?u=76281980&t=49)** And you might find a few options.
>
> **[0:51](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-apis-and-the-libraries?u=76281980&t=51)** So for building our APIs, we'll use a list of standard libraries to get our server together, add persistence with a database and use the latest JavaScript syntax by installing Babel.
>
> **[1:03](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-apis-and-the-libraries?u=76281980&t=63)** So for example, we have [nodejs.org](https://nodejs.org) here.
>
> **[1:08](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-apis-and-the-libraries?u=76281980&t=68)** So nodejs, as you may have explored in a previous course, will be the basis of our server and use it along with Express.
>
> **[1:15](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-apis-and-the-libraries?u=76281980&t=75)** And basically Express will allow us to build our web server and our API endpoints.
>
> **[1:21](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-apis-and-the-libraries?u=76281980&t=81)** So if you want to have more information on Express, feel free to go to [expressjs.com](https://expressjs.com).
>
> **[1:27](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-apis-and-the-libraries?u=76281980&t=87)** But we'll explore this library momentarily.
>
> **[1:30](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-apis-and-the-libraries?u=76281980&t=90)** Babel is the tool that will compile all of our JavaScript code.
>
> **[1:34](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-apis-and-the-libraries?u=76281980&t=94)** So basically when you write some code and it returns the actual version of the code that the web or the application can read when we run it.
>
> **[1:44](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-apis-and-the-libraries?u=76281980&t=104)** So this is the compiler.
>
> **[1:46](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-apis-and-the-libraries?u=76281980&t=106)** So then we'll use MongoDB as our database so we can persist our data.
>
> **[1:51](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-apis-and-the-libraries?u=76281980&t=111)** With these tools we'll be able to build an API we can call in with any frontend applications or tools, such as Postman, which we'll explore momentarily.

> [!info]- Semantic Content
>
> **Env Vars:** api (6)
> **Code Keywords:** interface (3), for. (1), from. (1)
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** find (2)
> **URLs:** [nodejs.org](https://nodejs.org) (1), [expressjs.com](https://expressjs.com) (1)
> **Definitions:** is an  (1), in other words (1)
> **Tools:** postman (1)
> **UI Navigation:** go to (1)

#### Introduction to Postman
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-postman?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-postman?u=76281980&t=0)** - [Instructor] Because we're not using any frontend and this course is about building a backend, we need to be able to test and use the API endpoint we'll create in this course.
>
> **[0:09](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-postman?u=76281980&t=9)** This is where Postman will be used to allow us to get data, post new items, update, or delete them.
>
> **[0:15](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-postman?u=76281980&t=15)** So if you want to get your own version of Postman, and you don't have it installed inside of your system, you can go to [postman.com](https://postman.com) and then sign up for free.
>
> **[0:25](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-postman?u=76281980&t=25)** And once you're signed in, you can actually do it on the web, but if you don't want to do it on the web, there's also tools for Mac, Windows, and Linux.
>
> **[0:35](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-postman?u=76281980&t=35)** And it looks something like this.
>
> **[0:38](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-postman?u=76281980&t=38)** So once you get inside of Postman, you have all these menus here, and you can feel free to explore, but where we're really going to spend our time is in the collections here.
>
> **[0:48](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-postman?u=76281980&t=48)** And then the request methods here.
>
> **[0:51](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-postman?u=76281980&t=51)** So you have get, post, put, del, and post again from form data.
>
> **[0:57](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-postman?u=76281980&t=57)** So if for example, we want to do a get requests, we'll click on it and then you can actually enter the details of the get request under the params, the authorization, if you need any, the headers and so on so forth.
>
> **[1:11](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-postman?u=76281980&t=71)** So you can play it with any of that.
>
> **[1:13](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-postman?u=76281980&t=73)** If you are not sure how this works, or if you're not sure what these things are, you can actually look into the documentation for more information, even on the get, or the post, or the put, request how does it work, what are the query params, and so on so forth.
>
> **[1:31](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-postman?u=76281980&t=91)** You can also go into this section here, code, and get the actual code that you could actually test these requests.
>
> **[1:40](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-postman?u=76281980&t=100)** So if you want to do a curl request, you can actually go right here and get your request based on the information that you've put in here.
>
> **[1:48](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-postman?u=76281980&t=108)** You can do that in all sorts of type of requests from different languages as well.
>
> **[1:53](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-postman?u=76281980&t=113)** So Java, there's Node requests here, PHP, Python, and the list goes on.
>
> **[1:59](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-postman?u=76281980&t=119)** So if you want to have an example, of a node request with Axios, then you have the code here to write in your application based, again, in the params that you've put in here.
>
> **[2:11](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-postman?u=76281980&t=131)** So we're going to work with that, and as we go, you're going to see a little bit more details as to whether the paras that you need to enter.
>
> **[2:17](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-postman?u=76281980&t=137)** And if you want to explore the code snippets, for a front end, for example, to request that particular part of the APIs, then you can use the code that's in here.
>
> **[2:29](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-postman?u=76281980&t=149)** So I'm going to close that.
>
> **[2:30](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-postman?u=76281980&t=150)** And again, as you can see, this tool offers many tools to help us test our API.
>
> **[2:36](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-postman?u=76281980&t=156)** And we'll learn more about these different tools as we use them in the future videos.
>
> **[2:40](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/introduction-to-postman?u=76281980&t=160)** So for now, get Postman, set it up and let's move on.

> [!info]- Semantic Content
>
> **CLI Commands:** node (2), curl (1), php (1), python (1)
> **Tools:** postman (5)
> **Code Keywords:** delete (1), this. (1), let (1)
> **Env Vars:** api (2), php (1)
> **UI Navigation:** go to (1), click on (1)
> **Analogies:** for example (2)
> **URLs:** [postman.com](https://postman.com) (1)
> **Documentation:** the documentation (1)

#### Install Node and Express
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-node-and-express?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-node-and-express?u=76281980&t=0)** - [Instructor] So the next step in the tools we need is to have Node and Express properly installed.
>
> **[0:04](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-node-and-express?u=76281980&t=4)** We'll also get our project initialized so we can add Express to the package.json file.
>
> **[0:10](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-node-and-express?u=76281980&t=10)** So let's get to it.
>
> **[0:11](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-node-and-express?u=76281980&t=11)** So the first thing you need to do is to go to [nodejs.org](https://nodejs.org), and on the main page it will say either download for macOS or the operating system that you're currently on.
>
> **[0:22](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-node-and-express?u=76281980&t=22)** If it doesn't say anything remotely close to your system, you can go in Other Downloads and get the proper installer as such.
>
> **[0:31](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-node-and-express?u=76281980&t=31)** So in this case, I am going to get the macOS Installer.
>
> **[0:36](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-node-and-express?u=76281980&t=36)** Then you click on that installer or the one that you got for your system and you follow the instructions.
>
> **[0:42](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-node-and-express?u=76281980&t=42)** This is going to install Node.js and npm as well which is the tool that we're going to need to install dependencies inside of our package.
>
> **[0:52](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-node-and-express?u=76281980&t=52)** So if you've done all this before, you've been writing code for a bit, you should already have this in your system, don't worry about it.
>
> **[1:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-node-and-express?u=76281980&t=60)** Then we'll go into the next stage shortly.
>
> **[1:07](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-node-and-express?u=76281980&t=67)** Perfect.
>
> **[1:08](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-node-and-express?u=76281980&t=68)** So now that we have this, let's go and open our terminal and I'm going to use Visual Studio Code later on but for now we can use a simple terminal to do in the next stage.
>
> **[1:18](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-node-and-express?u=76281980&t=78)** So let's go ahead and use a terminal.
>
> **[1:21](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-node-and-express?u=76281980&t=81)** And the first thing I'm going to do is to make sure I am on my desktop.
>
> **[1:26](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-node-and-express?u=76281980&t=86)** So I'm going to do cd Desktop, and I'm there, and I'm going to make a new directory that I'm going to call crm.
>
> **[1:37](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-node-and-express?u=76281980&t=97)** So now I should have that and then I'm going to cd into this crm.
>
> **[1:42](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-node-and-express?u=76281980&t=102)** Okay, so now that I am in my folder, I'm ready to install Express.
>
> **[1:47](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-node-and-express?u=76281980&t=107)** But before I do that, I need to initialize the package.json file.
>
> **[1:51](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-node-and-express?u=76281980&t=111)** You do this by doing npm init and then it's going to ask you a bunch of questions and you can basically just return, return.
>
> **[2:01](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-node-and-express?u=76281980&t=121)** If you want to put a description, you can go ahead and do that.
>
> **[2:04](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-node-and-express?u=76281980&t=124)** The entry point is going to be the index.js test command.
>
> **[2:09](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-node-and-express?u=76281980&t=129)** You can enter custom one, get repository.
>
> **[2:12](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-node-and-express?u=76281980&t=132)** If you are planning to push this to a repository, you can add it here.
>
> **[2:17](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-node-and-express?u=76281980&t=137)** Keyword and then the author.
>
> **[2:18](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-node-and-express?u=76281980&t=138)** Let's just see, I'm going to write my name.
>
> **[2:21](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-node-and-express?u=76281980&t=141)** So your package.json file is done.
>
> **[2:24](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-node-and-express?u=76281980&t=144)** Now we can go ahead and install Express home.
>
> **[2:27](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-node-and-express?u=76281980&t=147)** So I'm just going to clear the screen and run npm i or install express, and it's going to install the latest version of Express.
>
> **[2:40](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-node-and-express?u=76281980&t=160)** Perfect, okay, so now we got our project initialized, installed Node which comes with npm, and finally added Express to our project so we can move on.

> [!info]- Semantic Content
>
> **CLI Commands:** npm (4), node (3), make (2), cd (2)
> **Code Keywords:** let (4), case, (1), this, (1), return, (1), return. (1)
> **Prerequisites:** install (6)
> **File Paths:** package.json (3), node.js (1), index.js (1)
> **Tools:** terminal (3), visual studio (1)
> **Code Identifiers:** macos (2)
> **UI Navigation:** go to (1), click on (1)
> **URLs:** [nodejs.org](https://nodejs.org) (1)

#### Install Mongo
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-mongo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-mongo?u=76281980&t=0)** - [Instructor] Now that we have the basic server dependencies for our project, we need to install Mongo so we can add the database when we build the server, but also we'll use Mongoose to simplify some of the initial code.
>
> **[0:11](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-mongo?u=76281980&t=11)** So go to [mongodb.com](https://mongodb.com) and then go to Products, Community Server in the Community Edition, and then here you can find some downloads to install MongoDB.
>
> **[0:26](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-mongo?u=76281980&t=26)** So if you're on macOS, you can download this package and follow the instructions.
>
> **[0:31](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-mongo?u=76281980&t=31)** If you're on anything else, you can select which system you are on and then have the install package there.
>
> **[0:38](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-mongo?u=76281980&t=38)** But for the macOS people, there is a faster way to do this and I'm going to show you.
>
> **[0:44](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-mongo?u=76281980&t=44)** So first of all, you need to install Homebrew.
>
> **[0:46](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-mongo?u=76281980&t=46)** And if you don't have this as a macOS user and developer, you should have that.
>
> **[0:51](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-mongo?u=76281980&t=51)** So let's go ahead and open up a terminal, and I'm going to make this terminal bigger, and then simply paste the line that you just copied.
>
> **[1:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-mongo?u=76281980&t=60)** So if you haven't, basically you go to the webpage and you copy this line here and then you drop this line directly in the terminal here like so, and this is going to install Homebrew.
>
> **[1:13](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-mongo?u=76281980&t=73)** Homebrew is a tool that allow you to install a whole bunch of things very quickly.
>
> **[1:20](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-mongo?u=76281980&t=80)** Okay, so now that you have Homebrew installed, let's take a look at what are the instructions to install Mongo with Homebrew.
>
> **[1:27](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-mongo?u=76281980&t=87)** So I'm going to go back to my browser right here, I'm going to close that, and this is one way of installing it.
>
> **[1:35](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-mongo?u=76281980&t=95)** Again, feel free to use that way.
>
> **[1:37](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-mongo?u=76281980&t=97)** You can also do a search on the documentation.
>
> **[1:41](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-mongo?u=76281980&t=101)** But the way I do it, which is faster, I always go here and I say MongoDB Brew Install.
>
> **[1:52](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-mongo?u=76281980&t=112)** And this way you get directly to the actual installation instructions to have it installed with Homebrew.
>
> **[2:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-mongo?u=76281980&t=120)** And you just follow the instructions here.
>
> **[2:02](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-mongo?u=76281980&t=122)** You want to make sure that when you're on a Mac, you have Xcode Command-Line Tools installed and then you go on to brew tap mongodb brew and this will get you installed.
>
> **[2:16](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-mongo?u=76281980&t=136)** And then what you need to do is make sure that you run MongoDB, because if you don't run it, it's basically as if the database is not there.
>
> **[2:25](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-mongo?u=76281980&t=145)** So as we run our APIs, if the database is not running, then it's not going to be finding it, so you want to make sure that you start it as well and follow these instructions as well.
>
> **[2:37](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-mongo?u=76281980&t=157)** So this is the surest way for macOS users to actually install it.
>
> **[2:43](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-mongo?u=76281980&t=163)** If you want to do similar instructions, you have them here for Windows and you have them here for Linux.
>
> **[2:50](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-mongo?u=76281980&t=170)** So this is the second way of installing it, but again, I find that these instructions are a little bit more safe and it allows us to actually use Homebrew to install it quickly, but also make sure that it's running in the background.
>
> **[3:04](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-mongo?u=76281980&t=184)** So the Windows instructions are right here and the actual exact file is right there too.
>
> **[3:11](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-mongo?u=76281980&t=191)** So if you want to go ahead and follow these instructions, I feel personally that these are more complete and they give you all that you need to actually install it.
>
> **[3:20](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-mongo?u=76281980&t=200)** Once you have that installed in your system, the next thing is Mongoose.
>
> **[3:26](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-mongo?u=76281980&t=206)** So Mongoose basically is a library to help us with modeling our database and bring several built-in tools to help us with validation, business logic, hooks, et cetera.
>
> **[3:38](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-mongo?u=76281980&t=218)** If you'd like to get more details around these two libraries, go to [mongoosejs.com](https://mongoosejs.com) and you're going to have more instructions and more information on the docs, but we're going to use it in our course here while we develop our APIs, so a lot of this is going to be shown onscreen while I actually am building the API.
>
> **[4:03](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-mongo?u=76281980&t=243)** So let's go ahead and install Mongoose and add it to our dependencies.
>
> **[4:06](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-mongo?u=76281980&t=246)** So what I'm going to do now is actually go inside of Visual Studio Code as opposed to do it in the command line, 'cause there's a terminal that comes with Visual Studio Code right here.
>
> **[4:17](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-mongo?u=76281980&t=257)** So the first thing I'm going to do is make sure that I am in the right directory, so I'm going to open the folder of our CRM application, which is on the desktop right here.
>
> **[4:34](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-mongo?u=76281980&t=274)** And if you have this warning, you can go ahead and yes, I trust the author and so on and so forth.
>
> **[4:40](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-mongo?u=76281980&t=280)** And now what we're going to do is bring up the terminal that is inside of Visual Studio Code.
>
> **[4:47](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-mongo?u=76281980&t=287)** If you have your own editor, use your own terminal or use the terminal that is in your system.
>
> **[4:53](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-mongo?u=76281980&t=293)** And now that I have this, I'm going to go ahead and install Mongoose.
>
> **[4:58](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-mongo?u=76281980&t=298)** And I'm going to do npm, again, i mongoose, like so.
>
> **[5:08](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-mongo?u=76281980&t=308)** And now if you want to take a look at everything that we've installed so far, you can look at the package.json file and you see that we have Express, that we've installed in the previous video, and now we have Mongoose that we just installed.
>
> **[5:22](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/install-mongo?u=76281980&t=322)** So we have all the dependencies that we need and with the instructions from MongoDB, you should have MongoDB running in the background and ready to go for the next stage.

> [!info]- Semantic Content
>
> **CLI Commands:** make (6), brew (3), mongo (2), find (2), npm (1)
> **Prerequisites:** install (13)
> **Tools:** terminal (7), visual studio (3), command line (1)
> **Code Keywords:** let (3), else, (1), this, (1)
> **UI Navigation:** go to (4), open the (1)
> **Code Identifiers:** macos (4)
> **Definitions:** is a  (3)
> **URLs:** [mongodb.com](https://mongodb.com) (1), [mongoosejs.com](https://mongoosejs.com) (1)

#### Basic Babel setup
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-babel-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-babel-setup?u=76281980&t=0)** - [Instructor] This course we'll use the latest JavaScript syntax throughout and we want to be able to code our server without worrying about any syntax breaking our application.
>
> **[0:09](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-babel-setup?u=76281980&t=9)** So babel is the tool well set up to help us compile without any issues.
>
> **[0:14](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-babel-setup?u=76281980&t=14)** So lets add it.
>
> **[0:15](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-babel-setup?u=76281980&t=15)** So, inside of our visuals to decode in our project, I'm going to open up a new terminal.
>
> **[0:22](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-babel-setup?u=76281980&t=22)** And I'm going to install a few thules from babel.
>
> **[0:27](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-babel-setup?u=76281980&t=27)** So, you want to save those into the dev dependencies.
>
> **[0:30](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-babel-setup?u=76281980&t=30)** And the way to do that is doing dash dash save dash dev.
>
> **[0:35](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-babel-setup?u=76281980&t=35)** And we're going to add first of all, the core code from babel.
>
> **[0:41](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-babel-setup?u=76281980&t=41)** Then we're going to add the CLI tool.
>
> **[0:45](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-babel-setup?u=76281980&t=45)** Which allows us to do a script here.
>
> **[0:49](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-babel-setup?u=76281980&t=49)** And then we are going to add node the node script or package from babel.
>
> **[0:55](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-babel-setup?u=76281980&t=55)** And finally we're going to add the presets so we can use the latest version of java script.
>
> **[1:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-babel-setup?u=76281980&t=60)** And this is preset dash environment.
>
> **[1:07](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-babel-setup?u=76281980&t=67)** Okay, so once these are installed, let's also install known mons.
>
> **[1:10](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-babel-setup?u=76281980&t=70)** So, these are not going to be in the dev dependencies.
>
> **[1:13](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-babel-setup?u=76281980&t=73)** I'm going to install known mon and body parser.
>
> **[1:18](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-babel-setup?u=76281980&t=78)** Which is a package from express.
>
> **[1:21](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-babel-setup?u=76281980&t=81)** Which will allow us to parse our code.
>
> **[1:25](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-babel-setup?u=76281980&t=85)** There you go.
>
> **[1:27](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-babel-setup?u=76281980&t=87)** We have all of our dependencies, we can close this terminal.
>
> **[1:30](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-babel-setup?u=76281980&t=90)** And now what we're going to do is create the configuration file for babel.
>
> **[1:35](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-babel-setup?u=76281980&t=95)** And again we're going to do this at the root directory.
>
> **[1:38](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-babel-setup?u=76281980&t=98)** And we're going to call this babelrc.
>
> **[1:41](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-babel-setup?u=76281980&t=101)** And don't forget to do the dot here.
>
> **[1:44](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-babel-setup?u=76281980&t=104)** And in this file, we're going to create an object.
>
> **[1:47](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-babel-setup?u=76281980&t=107)** And in this object, we have the presets that we need.
>
> **[1:52](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-babel-setup?u=76281980&t=112)** Which is ray.
>
> **[1:54](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-babel-setup?u=76281980&t=114)** And then we're going to call the at babel package.
>
> **[1:59](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-babel-setup?u=76281980&t=119)** Forward slash preset environment.
>
> **[2:03](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-babel-setup?u=76281980&t=123)** So when we compiled our code, we're going to make sure that we compiled the latest version of java script into readable code for out server.
>
> **[2:12](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-babel-setup?u=76281980&t=132)** So it can run.
>
> **[2:13](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-babel-setup?u=76281980&t=133)** Okay, so we have all we need for babel, lets move on.

> [!info]- Semantic Content
>
> **Prerequisites:** install (3), set up (1)
> **CLI Commands:** node (2), make (1)
> **Tools:** terminal (2)
> **Code Keywords:** let (1)
> **Env Vars:** cli (1)
> **Definitions:** is a  (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)


### 2. Initial Server Build

> [↑ Back to Table of Contents](#table-of-contents)

#### RESTful APIs refresher
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/restful-apis-refresher?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/restful-apis-refresher?u=76281980&t=0)** - [Narrator] Before we actually start building our backend and API, let's cover some quick basics around RESTful API, what is it, and how we're going to build our application around it.
>
> **[0:10](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/restful-apis-refresher?u=76281980&t=10)** Keep in mind this is a quick overview of what a RESTful API is.
>
> **[0:13](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/restful-apis-refresher?u=76281980&t=13)** And if you need a deeper understanding, take a look at learning RESTful APIs in our library.
>
> **[0:19](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/restful-apis-refresher?u=76281980&t=19)** Also, feel free to skip this video if you're fairly familiar with the subject.
>
> **[0:23](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/restful-apis-refresher?u=76281980&t=23)** So in a nutshell, a RESTful API is a way to transact with a backend using HTTP transactions.
>
> **[0:31](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/restful-apis-refresher?u=76281980&t=31)** We use a series of calls like get, post, put, and delete with a HTML address to transact with our backend and its data.
>
> **[0:40](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/restful-apis-refresher?u=76281980&t=40)** So when a front-end client web mobile needs to do transactions with a backend, it makes a call, like for example, get with an API endpoint that looks like an HTML URL and the API responds with success or failure with data if need be.
>
> **[0:56](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/restful-apis-refresher?u=76281980&t=56)** We use get calls to pull the data from a backend.
>
> **[0:59](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/restful-apis-refresher?u=76281980&t=59)** Then if we need to add new data, we use post.
>
> **[1:03](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/restful-apis-refresher?u=76281980&t=63)** Next, if we need to update the data, we use put.
>
> **[1:07](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/restful-apis-refresher?u=76281980&t=67)** And finally, delete. Well, if you need to delete data.
>
> **[1:11](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/restful-apis-refresher?u=76281980&t=71)** If you're really new to APIs and endpoints and you're not quite grasping how these work, I'll point out these items as we build our application to make sure they make sense as we implement our API.

> [!info]- Semantic Content
>
> **Env Vars:** api (7), html (2), http (1), url (1)
> **Code Keywords:** delete (3), let (1), finally, (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [narrator] (1)

#### Initial server setup
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=0)** - [Instructor] Now the fund begins, we'll start by creating our initial server code and making it running properly.
>
> **[0:07](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=7)** We'll simply work on the basis of our server which will add more and more as we build our backend APIs.
>
> **[0:12](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=12)** All right, so let's get started.
>
> **[0:14](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=14)** So, the first thing we're going to need to do is change the script, in this area here.
>
> **[0:19](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=19)** So, we have nodemon, we need to use nodemon so we can do NPM start and it's going to start our server, automatically and we start it whenever we change our code.
>
> **[0:30](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=30)** So, this is what we're going to do.
>
> **[0:32](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=32)** We're going to change test to start and then here, what we're going to do is do nodemon and we're going to call index.js.
>
> **[0:44](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=44)** And you can just simply do index without doing this but I'm used to do it this way.
>
> **[0:49](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=49)** Then exact babel-node, and that's all you need.
>
> **[0:55](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=55)** So, once we start a server, this is going to start it and we're going to be good to go.
>
> **[1:02](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=62)** Now, we need to create the index.js files cuz right now the main is the index.js file and it's calling it from the start command, here.
>
> **[1:12](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=72)** So, we need to create that file.
>
> **[1:13](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=73)** So, we're going to go in and create the index.js file.
>
> **[1:18](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=78)** And this is where we're going to add our code.
>
> **[1:20](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=80)** So, we're going to first import express from "express"
>
> **[1:29](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=89)** and then we're going to create our app variable and we're going to run the express server.
>
> **[1:39](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=99)** And then we're going to create another variable that we're going to call port which is basically the port that our server is going to run.
>
> **[1:46](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=106)** You can do 3000 or 4000.
>
> **[1:49](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=109)** I usually do 3000 for express.
>
> **[1:52](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=112)** Okay, so next we need to have our first endpoint.
>
> **[1:55](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=115)** We're going to add the app.get and create our first endpoint.
>
> **[2:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=120)** So, we're going to create more than this down the road but this is the first end point.
>
> **[2:05](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=125)** Whenever you go on a browser and you call for the server, this is what it's going to show up.
>
> **[2:11](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=131)** So, we have a request, response and what will be the message is basically from the response, here.
>
> **[2:21](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=141)** So, we're going to do a response, send and we're going to do a template string.
>
> **[2:28](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=148)** If you're not familiar with that, it's basically the ability to do a string and pass a variable, such as port, in this case.
>
> **[2:36](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=156)** So we're going to do Node and express server is running on port and now you do the template strings.
>
> **[2:47](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=167)** You do a $ sign, {} and pass the variable, and there you go.
>
> **[2:54](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=174)** So, this is when we go in the browser, we're going to get this response.
>
> **[2:57](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=177)** Now, we need to do something in our console to know that our server is running.
>
> **[3:01](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=181)** So, I'm going to do a app.listen and I'm going to pass the port variable.
>
> **[3:13](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=193)** And then I'm going to do a console log which will pass the message in our console.
>
> **[3:18](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=198)** Again, I'm using templates strings, "Your server is running on port $ {Port}".
>
> **[3:30](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=210)** So, we're going to pass the port.
>
> **[3:31](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=211)** So, if you changed your port number here, anytime in your code, let's say you would change it to 4000, at least the messages are going to reflect the new port.
>
> **[3:41](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=221)** Okay? Save that and we're ready to test.
>
> **[3:44](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=224)** So, what we're going to do is first open up a terminal and run or server, which will run the script that we created in the package.json.
>
> **[3:52](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=232)** So, let's go and do npm start.
>
> **[3:57](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=237)** And our server is running on port 3000 which is basically this message, here.
>
> **[4:02](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=242)** And now we're going to open a new browser window and do localhost and port 3000.
>
> **[4:12](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=252)** And now we have the message node and express is running on port 3000.
>
> **[4:17](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=257)** So, we have successfully created our initial server.
>
> **[4:20](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=260)** Right now, you have a server running on port 3000.
>
> **[4:23](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-setup?u=76281980&t=263)** So, let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (5), let (4), case. (1)
> **File Paths:** index.js (4), package.json (1)
> **CLI Commands:** node (3), npm (2)
> **Ports:** port 3000 (4)
> **Exercise Files:** template (2)
> **Env Vars:** npm (1)
> **Tools:** terminal (1)
> **Analogies:** such as (1)

#### Initial server files and folders
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-files-and-folders?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-files-and-folders?u=76281980&t=0)** - So before we start adding endpoints to our server, let's set up our folder structure for a project.
>
> **[0:05](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-files-and-folders?u=76281980&t=5)** I personally put everything in a source folder and then start branching out the folders and files I'll use for the server, like controllers, models, and routes.
>
> **[0:15](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-files-and-folders?u=76281980&t=15)** So let's get to it.
>
> **[0:16](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-files-and-folders?u=76281980&t=16)** So what I'm going to do is go inside of our route directory and create a source folder, SRC, like that.
>
> **[0:24](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-files-and-folders?u=76281980&t=24)** And then inside of that source folder I'm going to create another folder which will be called controllers.
>
> **[0:33](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-files-and-folders?u=76281980&t=33)** And I'll explain each and every one of 'em as we go into them.
>
> **[0:36](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-files-and-folders?u=76281980&t=36)** And then I'm going to create a folder for the models.
>
> **[0:40](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-files-and-folders?u=76281980&t=40)** So let's go and click another folder and I'm going to call this the models.
>
> **[0:46](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-files-and-folders?u=76281980&t=46)** And then finally, I'm going to, again, make sure that it's in the source folder.
>
> **[0:50](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-files-and-folders?u=76281980&t=50)** Create another folder which will be routes.
>
> **[0:54](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-files-and-folders?u=76281980&t=54)** The controllers are the functions that will allow us to get information into the endpoints and forward it to whoever is calling it.
>
> **[1:03](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-files-and-folders?u=76281980&t=63)** The routes are basically the endpoints and the models is basically the schema models for our database.
>
> **[1:09](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-files-and-folders?u=76281980&t=69)** So I'm going to create basically the first file here inside of controllers.
>
> **[1:16](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-files-and-folders?u=76281980&t=76)** I'm going to call this CRM controllers dot js.
>
> **[1:21](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-files-and-folders?u=76281980&t=81)** We're not going to do anything in this video with it, but just create the file for now.
>
> **[1:25](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-files-and-folders?u=76281980&t=85)** And then inside of our models, we're going to create a similar file, which will be CRM model.
>
> **[1:36](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-files-and-folders?u=76281980&t=96)** And let's make sure that this is controller and not controllers, cuz we're going to have one file that will have the controllers.
>
> **[1:46](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-files-and-folders?u=76281980&t=106)** And then in the routes, we're going to create CRM routes dot js, and, this one needs to be dot js.
>
> **[1:59](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-files-and-folders?u=76281980&t=119)** Okay, so we have all of our three files created in all of three folders inside of our source folder.
>
> **[2:07](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-files-and-folders?u=76281980&t=127)** And we're good to go.
>
> **[2:08](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/initial-server-files-and-folders?u=76281980&t=128)** Let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), finally, (1)
> **Env Vars:** crm (3), src (1)
> **CLI Commands:** make (2)
> **Prerequisites:** before we start (1), set up (1)
> **Speakers:** - so (1)

#### Basic routing endpoints
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=0)** - [Instructor] Any application back-end or front-end needs routes in order to be able to call a URL and get something back in a web application.
>
> **[0:08](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=8)** You can call a route and go to a specific page or you can also use routes to define your endpoints in an application.
>
> **[0:15](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=15)** We'll start working on our endpoints and we'll also start using Postman to test our endpoints.
>
> **[0:20](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=20)** So let's get to it.
>
> **[0:21](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=21)** So the first thing I'm going to do is make some updates into our index.js file so we can actually load the file that we're going to create momentarily.
>
> **[0:32](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=32)** So in here, I'm going to add import routes from and then we're going to go into source, routes and then crmRoutes.
>
> **[0:51](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=51)** And then what we're going to do is basically run our routes inside of the app.
>
> **[0:56](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=56)** So routes, and pass the app.
>
> **[1:01](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=61)** And that's pretty much what we need to do.
>
> **[1:03](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=63)** So basically, we're going to pass inside of a routes the app that is here.
>
> **[1:10](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=70)** So it's going to make sense once we start adding the routes in here.
>
> **[1:14](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=74)** So let's save that.
>
> **[1:17](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=77)** And yes, you're going to have your server crash because we haven't created our code here yet.
>
> **[1:23](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=83)** So in the crmRoutes, we're going to create a function which is called routes, which is supposed to take app as we just written in the index.js files.
>
> **[1:37](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=97)** And these are the things that are going to happen.
>
> **[1:39](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=99)** So the first one is going to be the first route and that route is going to be contact.
>
> **[1:48](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=108)** So remember, we had just a forward slash.
>
> **[1:50](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=110)** So basically if you do localhost 3000 you're going to have the messages that are on the server.
>
> **[1:56](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=116)** But now we're going to have our forward slash contact which will allow us to have get, put, update, delete commands with that endpoint.
>
> **[2:06](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=126)** And inside of this particular endpoint, we're going to have a get command, we're going to have a post command and we're going to create another route to update and then another route to delete.
>
> **[2:22](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=142)** So let's create the app.route to update because we need to pass an ID when we update something.
>
> **[2:30](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=150)** And this one is going to be contact/contactId like so.
>
> **[2:39](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=159)** And then this one is going to have a put command and a delete command.
>
> **[2:46](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=166)** Okay, so let's start creating those routes and add a little bit more of what's going to happen when we do a get command.
>
> **[2:53](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=173)** So the first get command is going to have a request and a response, which is the normal stuff.
>
> **[3:01](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=181)** And for now, what we're going to do is still do the response.send and do a message.
>
> **[3:09](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=189)** So what we're going to do is do a simple message, get request successful.
>
> **[3:20](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=200)** Okay, and then we're going to basically do the same thing for all of them.
>
> **[3:25](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=205)** So let's go ahead and do this one for the post,
>
> **[3:34](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=214)** request, response
>
> **[3:42](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=222)** and do the exact same thing.
>
> **[3:45](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=225)** Now this time it's going to do post request successful.
>
> **[3:55](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=235)** Then we're going to do basically the same thing for every single one of 'em.
>
> **[3:58](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=238)** So what I'm going to do is basically copy and paste what I have here and put it right after the put command like so.
>
> **[4:10](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=250)** And this is the put command, put command successful.
>
> **[4:15](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=255)** And then we're going to do the exact same thing for the delete command like so.
>
> **[4:24](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=264)** And let's make sure that our code is clean as well.
>
> **[4:28](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=268)** And this is going to be the delete request.
>
> **[4:34](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=274)** Okay, so now let's make sure we can export that function, export default routes.
>
> **[4:47](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=287)** There you go.
>
> **[4:48](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=288)** Save, and our server has restarted, no more crashing.
>
> **[4:53](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=293)** And now we can actually test this in Postman.
>
> **[4:55](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=295)** So let me go and get Postman and let's go ahead and test all of our methods with the actual localhost.
>
> **[5:05](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=305)** So let's go ahead and do that, localhost for 3000.
>
> **[5:12](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=312)** Make sure again, the full endpoint is contact.
>
> **[5:15](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=315)** Okay, so let's go ahead and send this and we have our get request successful.
>
> **[5:22](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=322)** We can do a post, send that, post request successful.
>
> **[5:28](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=328)** And now for the put and delete, we need to pass an ID.
>
> **[5:33](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=333)** So we'll just pass a bunch of numbers and do a put, send and put request successful.
>
> **[5:44](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=344)** And then for the delete, do the exact same thing.
>
> **[5:47](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=347)** I'm going to use like just random numbers and delete request successful.
>
> **[5:53](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=353)** So congrats.
>
> **[5:54](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=354)** Now you've got four working endpoints.
>
> **[5:57](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basic-routing-endpoints?u=76281980&t=357)** They're very basic responses when you call them and we don't have anything special or data attached to those requests, but it's a start.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), delete (8), pass (5), function (2)
> **CLI Commands:** make (5)
> **Code Identifiers:** crmroutes (2), contactid (1)
> **Tools:** postman (3)
> **File Paths:** index.js (2)
> **Env Vars:** url (1)
> **UI Navigation:** go to (1)
> **Definitions:** is called (1)

#### Basics of middleware and uses
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=0)** - [Instructor] What is middleware?
>
> **[0:02](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=2)** In the context of our Node and Express server how would it be used?
>
> **[0:06](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=6)** Middleware are simply functions that have access to the request and response object in our Express application and can run their code there.
>
> **[0:15](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=15)** It can make changes to the request response objects, can end them, can call another function in the stack using Nex functions, et cetera.
>
> **[0:24](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=24)** We'll do an example in our routes with middleware in one of our endpoints.
>
> **[0:28](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=28)** So let's get to it.
>
> **[0:29](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=29)** So we're back into the file where our routes are, and we're going to basically change a little bit of our first route, the get route and add middleware.
>
> **[0:39](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=39)** So let's go ahead and do it.
>
> **[0:41](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=41)** I'm going to do a longer version of a function by adding my curly braces here like so.
>
> **[0:48](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=48)** And what I'm going to do is basically add middleware right here.
>
> **[0:55](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=55)** So what I'm going to do is basically do a console log of information that I have in the request response.
>
> **[1:03](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=63)** This is something that you shouldn't do in reality, but it is just for the example.
>
> **[1:07](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=67)** Middleware is often used to call the functions or other things but I'm just going to use the console log example here.
>
> **[1:15](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=75)** I'm going to do a template string, and I'm going to basically in the console log add the information who is this request from.
>
> **[1:26](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=86)** And add my template strings here.
>
> **[1:29](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=89)** Request dot original URL.
>
> **[1:34](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=94)** So it's going to give us the URL of who is the request from and then I'm going to do another one, console log.
>
> **[1:46](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=106)** And then I'm going to do request type, what is this request type.
>
> **[1:53](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=113)** And then again, we're going to do template strings and use the request object to look into what is the method.
>
> **[2:02](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=122)** And then we're going to use the function Nex to move away from that and actually do the official response that we written originally.
>
> **[2:13](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=133)** And I'm going to move that function outside of that function here.
>
> **[2:19](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=139)** So cut that, put a comma here, and then this is going to be run because we have called in Nex, response Nex.
>
> **[2:40](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=160)** And then run and paste our response.
>
> **[2:43](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=163)** Get requests successful.
>
> **[2:48](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=168)** Okay. Oh, I made a little typo here.
>
> **[2:50](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=170)** It's not a dot but a comma, and then save that.
>
> **[2:56](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=176)** Our server is still running and let's go and make that request, the get request.
>
> **[3:01](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=181)** And take a look at what's happening in the console log here.
>
> **[3:04](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=184)** So I'm going to basically go into Postman and do the get request.
>
> **[3:10](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=190)** So let's go ahead and remove the ID, do a get request?
>
> **[3:17](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=197)** Send it.
>
> **[3:18](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=198)** Okay, so we have an error.
>
> **[3:20](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=200)** I know where it is just by the messages.
>
> **[3:23](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=203)** I've seen this before.
>
> **[3:24](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=204)** I didn't pass Nex up here.
>
> **[3:28](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=208)** So let's go ahead and pass it here, save again.
>
> **[3:33](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=213)** And we do the get request on Postman.
>
> **[3:39](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=219)** Now we have our get request successful, but now let's pay attention to our console log.
>
> **[3:44](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=224)** In the console log, we have the request from.
>
> **[3:48](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=228)** So the request is from the contact endpoint and then what is the request type?
>
> **[3:54](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=234)** We have get.
>
> **[3:56](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=236)** So if we put the exact same code in all of our endpoints here, we would get the different endpoints.
>
> **[4:04](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=244)** So here we would get the contact/contact/id and the actual contact ID that we've passed into the put request.
>
> **[4:13](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=253)** And then we would get the different method use.
>
> **[4:15](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=255)** So put, delete, post, et cetera, et cetera.
>
> **[4:18](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=258)** So as you can see, we can add anything we want as middleware in our endpoints.
>
> **[4:23](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=263)** It could could also be a third party library where you want to do something special.
>
> **[4:27](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/basics-of-middleware-and-uses?u=76281980&t=267)** your imagination is your limit.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), function (5), from. (2), pass (2), type, (1)
> **CLI Commands:** make (2), node (1)
> **Exercise Files:** template (3)
> **Env Vars:** url (2)
> **Tools:** postman (2)
> **Speakers:** - [instructor] (1)


### 3. Database Setup

> [↑ Back to Table of Contents](#table-of-contents)

#### MongoDB basics refresher
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/mongodb-basics-refresher?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/mongodb-basics-refresher?u=76281980&t=0)** - [Instructor] This course is not a full on course on MongoDB.
>
> **[0:03](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/mongodb-basics-refresher?u=76281980&t=3)** And if you want to follow our course on the subject, feel free to take a look at our library.
>
> **[0:08](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/mongodb-basics-refresher?u=76281980&t=8)** We'll briefly go over the basics and concepts around using MongoDB so you have a good idea of what we're doing when we implement the code.
>
> **[0:16](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/mongodb-basics-refresher?u=76281980&t=16)** A MongoDB database is one big object containing collections.
>
> **[0:21](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/mongodb-basics-refresher?u=76281980&t=21)** Each collection could be like a contextual item like for example, contacts for the database we'll create.
>
> **[0:28](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/mongodb-basics-refresher?u=76281980&t=28)** Then inside the collection we have documents which are the contacts themselves.
>
> **[0:33](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/mongodb-basics-refresher?u=76281980&t=33)** So my contact information would be in a document, yours in another, et cetera.
>
> **[0:38](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/mongodb-basics-refresher?u=76281980&t=38)** And then inside each document, we have the data for each contact such as address, telephone, email, et cetera.
>
> **[0:46](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/mongodb-basics-refresher?u=76281980&t=46)** The document looks like JSON object with a key value pair approach or arrays of data.
>
> **[0:52](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/mongodb-basics-refresher?u=76281980&t=52)** So where does Mongos fit into this?
>
> **[0:55](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/mongodb-basics-refresher?u=76281980&t=55)** Well, Mongos will allow us to set up a schema for a collection and predefine what each key value pair takes as type.
>
> **[1:03](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/mongodb-basics-refresher?u=76281980&t=63)** For example, the first name of a contact will take a string, but we'll cover this in more details soon.
>
> **[1:10](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/mongodb-basics-refresher?u=76281980&t=70)** Before we move on, I'd like to install a tool we'll use to test our MongoDB and make sure the data we have in our database matches the calls we make to the endpoints.
>
> **[1:18](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/mongodb-basics-refresher?u=76281980&t=78)** And this tool is called Studio 3T and you can get it from [robomongo.org](https://robomongo.org) and simply download and install it on your system.
>
> **[1:28](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/mongodb-basics-refresher?u=76281980&t=88)** So I'm going to do the exact same thing.
>
> **[1:33](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/mongodb-basics-refresher?u=76281980&t=93)** Install it here.
>
> **[1:36](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/mongodb-basics-refresher?u=76281980&t=96)** And once it's installed, you can open it.
>
> **[1:39](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/mongodb-basics-refresher?u=76281980&t=99)** Okay. So once you have to do three fee, all you have to do is click on Connect and it's going to ask you to enter a URI.
>
> **[1:49](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/mongodb-basics-refresher?u=76281980&t=109)** And this is local host.
>
> **[1:53](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/mongodb-basics-refresher?u=76281980&t=113)** And the port for our local host is 27017 and Save.
>
> **[2:06](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/mongodb-basics-refresher?u=76281980&t=126)** And then you can connect to the database.
>
> **[2:08](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/mongodb-basics-refresher?u=76281980&t=128)** So if it's not connecting, something is wrong with your database.
>
> **[2:11](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/mongodb-basics-refresher?u=76281980&t=131)** So all you have to do at this point is connecting.
>
> **[2:15](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/mongodb-basics-refresher?u=76281980&t=135)** And I'm going to connect to the database.
>
> **[2:19](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/mongodb-basics-refresher?u=76281980&t=139)** And I'm connected directly to my database.
>
> **[2:22](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/mongodb-basics-refresher?u=76281980&t=142)** So once we start adding some data into our database, we're going to see whatever collection we added in here and we're going to be able to test or check that the endpoints that we're using with our server is actually sending data to our database here.
>
> **[2:37](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/mongodb-basics-refresher?u=76281980&t=157)** So now we got some basics around MongoDB and a tool will use as we implement our database.
>
> **[2:43](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/mongodb-basics-refresher?u=76281980&t=163)** So let's move on.

> [!info]- Semantic Content
>
> **Prerequisites:** install (3), set up (1)
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** make (2)
> **Code Keywords:** type. (1), let (1)
> **Env Vars:** json (1), uri (1)
> **URLs:** [robomongo.org](https://robomongo.org) (1)
> **UI Navigation:** click on (1)
> **Definitions:** is called (1)

#### Database setup
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/database-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/database-setup?u=76281980&t=0)** - We are now ready to set up our database inside of our api.
>
> **[0:03](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/database-setup?u=76281980&t=3)** So let's get to it.
>
> **[0:05](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/database-setup?u=76281980&t=5)** So we're back into the index dot js and we're going to import a few things first.
>
> **[0:11](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/database-setup?u=76281980&t=11)** So I'm going to import mongoose (keyboard keys clicking) from mongoose and then I'm going to import body Parser from body parser And then what I'm going to do is just on top of the app cuz this is the (keyboard keys clicking) current server routes what I'm going to do is do the mongoose connection right here.
>
> **[0:45](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/database-setup?u=76281980&t=45)** So let's go ahead and do the code for that.
>
> **[0:49](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/database-setup?u=76281980&t=49)** And when I mean the mongoose, I mean the MongoDB connection but we're using mongoose to make the code a lot more succinct and shorter.
>
> **[0:58](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/database-setup?u=76281980&t=58)** global dot promise.
>
> **[1:02](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/database-setup?u=76281980&t=62)** We're using promises so when we make a call they're going to wait for a response as opposed to turn an error until they get the answer.
>
> **[1:11](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/database-setup?u=76281980&t=71)** So this will give us some leeway and we're going to connect to MongoDB local host and we're going to create a CRMDB inside of our MongoDB.
>
> **[1:31](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/database-setup?u=76281980&t=91)** (keyboard keys clicking) Use new U R L parser.
>
> **[1:37](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/database-setup?u=76281980&t=97)** (keyboard keys clicking) True.
>
> **[1:41](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/database-setup?u=76281980&t=101)** (deep breathe) All right, so this completes our mongoose connection.
>
> **[1:47](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/database-setup?u=76281980&t=107)** Now we need to use body parser to allow us to do the json back and forth in between the Mongo database and our server.
>
> **[1:55](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/database-setup?u=76281980&t=115)** So let's go and body parser set up just to give you some notes or leave some notes in the exercise files.
>
> **[2:03](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/database-setup?u=76281980&t=123)** We're going to app use body parser dot URL encoded And we're going to use the options extended true (keyboard keys clicking) And we're going to allow the app to use the json options with body parser.
>
> **[2:29](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/database-setup?u=76281980&t=149)** So this will allow us to do the back and forth between our server and our Mongo database.
>
> **[2:35](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/database-setup?u=76281980&t=155)** All right, so let's save this.
>
> **[2:38](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/database-setup?u=76281980&t=158)** Let's take a look at our server.
>
> **[2:41](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/database-setup?u=76281980&t=161)** Everything is running properly and we are good to go.
>
> **[2:45](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/database-setup?u=76281980&t=165)** So now we have our MongoDB running and connected to our backend with the help of mongoose.
>
> **[2:50](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/database-setup?u=76281980&t=170)** However, we don't have schema or any of the endpoints ready to accept transactions.
>
> **[2:55](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/database-setup?u=76281980&t=175)** In fact, if we use our endpoints and postmen we'll still get the responses we set earlier.
>
> **[3:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/database-setup?u=76281980&t=180)** So we'll work on this throughout the course.
>
> **[3:02](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/database-setup?u=76281980&t=182)** So let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this. (1)
> **Non-Speech:** (keyboard keys clicking) (5)
> **CLI Commands:** make (2), mongo (2)
> **Env Vars:** crmdb (1), url (1)
> **Prerequisites:** set up (2)
> **Exercise Files:** exercise files (1)
> **Speakers:** - we (1)

#### Schema setup
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/schema-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/schema-setup?u=76281980&t=0)** - [Instructor] Before we start adding operations to our database and the corresponding endpoints, we need to create our schema.
>
> **[0:06](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/schema-setup?u=76281980&t=6)** The schema is what dictates the types of data and the structure of your data your database takes.
>
> **[0:12](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/schema-setup?u=76281980&t=12)** In other words if you define the first name key to take only string data, the database will not accept anything else.
>
> **[0:19](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/schema-setup?u=76281980&t=19)** Therefore the schema defines the rules related to what your database can accept.
>
> **[0:24](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/schema-setup?u=76281980&t=24)** So let's go ahead and do this.
>
> **[0:26](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/schema-setup?u=76281980&t=26)** So now we're going to go back to our folder models here.
>
> **[0:30](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/schema-setup?u=76281980&t=30)** nd the crmModel is where we're going to define our schema.
>
> **[0:33](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/schema-setup?u=76281980&t=33)** So let's go ahead and close our index and open up the crmModel.
>
> **[0:39](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/schema-setup?u=76281980&t=39)** In this particular file, we're going to first import mongoose, again mongoose is always helpful with the code, so we're going to use it here too.
>
> **[0:51](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/schema-setup?u=76281980&t=51)** And then we're going to create a variable named schema which will accept the mongoose.schema.
>
> **[1:02](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/schema-setup?u=76281980&t=62)** And then we're going to create the schema, so let's go ahead and do that by first doing export a variable contact schema = new schema.
>
> **[1:19](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/schema-setup?u=76281980&t=79)** It's a lot of schema in a sentence.
>
> **[1:23](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/schema-setup?u=76281980&t=83)** In our schema we're going to add a few things.
>
> **[1:26](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/schema-setup?u=76281980&t=86)** The first name which will be of type String,
>
> **[1:36](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/schema-setup?u=76281980&t=96)** and we'll make it a requirement, so required enter a first name.
>
> **[1:46](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/schema-setup?u=76281980&t=106)** Okay, and then what you could do is put a comma here and then copy those lines, paste it again, and basically this one's going to be last name.
>
> **[2:03](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/schema-setup?u=76281980&t=123)** Last name let's make name a capital M for this one too.
>
> **[2:13](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/schema-setup?u=76281980&t=133)** Enter a last name.
>
> **[2:17](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/schema-setup?u=76281980&t=137)** And then the next one is going to be email.
>
> **[2:22](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/schema-setup?u=76281980&t=142)** It's not required so we can remove that and remove the comma here just to make sure and let's copy this one 'cause the next few are not going to be required company for this one.
>
> **[2:40](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/schema-setup?u=76281980&t=160)** And then paste again for this one is going to be phone and no this is not going to be a string, this one is going to be a number.
>
> **[2:51](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/schema-setup?u=76281980&t=171)** And then we're going to create one that will be of a different type but I'm still going to paste it and again remove the comma 'cause otherwise the server is going to break and this one is going to be called created dates so we have some sort of date for when the data or that particular contact has been created so this one is going to be of typed date and the default is going to be date.now.
>
> **[3:23](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/schema-setup?u=76281980&t=203)** And then you can save this.
>
> **[3:27](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/schema-setup?u=76281980&t=207)** Okay so again let's go back to our server, everything is running properly, and by the way, I'm using the shortcut control gravvy for accessing the terminal that's already open.
>
> **[3:38](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/schema-setup?u=76281980&t=218)** If you want you can also access it from the terminal menu here but I'm using the shortcuts.
>
> **[3:46](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/schema-setup?u=76281980&t=226)** Okay so now we have a MongoDB instance running, we have mongoose connecting to it, we have a schema set up.
>
> **[3:52](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/schema-setup?u=76281980&t=232)** So right now if you look at the MongoDB instance running on this tool here.
>
> **[3:59](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/schema-setup?u=76281980&t=239)** And let's just refresh by clicking here.
>
> **[4:04](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/schema-setup?u=76281980&t=244)** Refresh all.
>
> **[4:06](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/schema-setup?u=76281980&t=246)** So right now if you look at the MongoDB instance running on studio 3T the database is empty, or at least we don't have any items for our contacts yet.
>
> **[4:16](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/schema-setup?u=76281980&t=256)** We'll start adding new items when we create the post endpoint and we'll do this soon.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), this. (2), else. (1)
> **CLI Commands:** make (3)
> **Code Identifiers:** crmmodel (2)
> **Tools:** terminal (2)
> **Prerequisites:** before we start (1), set up (1)
> **Cross-References:** go back to (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)


### 4. CRUD Operations

> [↑ Back to Table of Contents](#table-of-contents)

#### Create POST endpoint
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=0)** - [Instructor] This video, we'll complete our post endpoint so we can add new items to our database and then test it.
>
> **[0:06](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=6)** So let's get to it.
>
> **[0:08](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=8)** So the first thing we're going to do is go into our CRM controllers.
>
> **[0:12](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=12)** So we don't need the model anymore, so we're going to close it.
>
> **[0:16](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=16)** And then go into our controllers.
>
> **[0:18](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=18)** So we're going to start working in here cause this is what is going to basically be the functions that will send the data to the database or update the data and so on and so forth.
>
> **[0:28](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=28)** And then use the endpoint as the kind of portal to all of this.
>
> **[0:33](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=33)** So let's go ahead and start with what we need.
>
> **[0:38](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=38)** Import mongoose from mongoose.
>
> **[0:45](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=45)** And then we're going to import our schema, which we've worked on.
>
> **[0:52](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=52)** Contact schema.
>
> **[0:55](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=55)** And if you want a little tip when you're working with the imports, you can always do import from.
>
> **[1:05](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=65)** And then let's go and grab what we need.
>
> **[1:09](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=69)** From models, CR model.
>
> **[1:13](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=73)** But let's say for example, you did all this already from but you didn't import what you needed.
>
> **[1:18](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=78)** What are you going to do as you actually write what you need to import, it's going to auto-complete it for you like so.
>
> **[1:25](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=85)** So just a little tip when you don't know or can't remember what you need to import from that file.
>
> **[1:31](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=91)** All right, from there we're going to create a variable call contact, which will hold the bottle.
>
> **[1:43](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=103)** And the model is contact.
>
> **[1:48](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=108)** And we're going to pass contact schema.
>
> **[1:51](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=111)** And then we're going to do our first controller.
>
> **[1:53](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=113)** So let's go ahead and do our controller that will be called add new contact.
>
> **[2:01](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=121)** So basically we're going to start with the post, so we can have some contacts in our database before we actually use get.
>
> **[2:09](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=129)** So request, response.
>
> **[2:15](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=135)** And then we're going to create inside of that function a new contact.
>
> **[2:25](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=145)** New contact with the request and the body, basically.
>
> **[2:33](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=153)** So what is the body of the request?
>
> **[2:35](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=155)** So within that variable, we're going to have the body of the request.
>
> **[2:39](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=159)** So basically what we're sending into our post method is going to be in the body here and we're going to use that to create a new item in the database.
>
> **[2:49](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=169)** So new contact dot save.
>
> **[2:58](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=178)** We're going to pass error just in case we have an error and then a contact.
>
> **[3:04](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=184)** And what we're going to do with this if error,
>
> **[3:12](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=192)** then give us the response and error so we know what's happening.
>
> **[3:23](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=203)** Otherwise give us the response with the JSON contact, so basically give us the information that the contact that was saved in the database if it's successful.
>
> **[3:34](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=214)** Okay, so we have our first new controller.
>
> **[3:38](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=218)** So now that we have our first new controller, what we need to do is go in the routes and make sure that this is passed to the endpoint.
>
> **[3:46](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=226)** So we have a route here.
>
> **[3:48](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=228)** Right now we have all of these routes.
>
> **[3:50](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=230)** We have the post route here.
>
> **[3:52](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=232)** What we need to do is pass the new contact to this post.
>
> **[3:56](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=236)** So this is going to simplify the code that we just have in here.
>
> **[3:59](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=239)** So it's going to go like this.
>
> **[4:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=240)** I'm going to delete all this because at this point this is the response, but the controller does the response.
>
> **[4:06](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=246)** So what we're going to do is simply this.
>
> **[4:11](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=251)** And now we need to pass the function or the controller into the post command or post endpoint.
>
> **[4:17](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=257)** In order to do that, we need to import, from our controllers.
>
> **[4:29](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=269)** Forward slash and again, let's go and we know exactly what we're going to import at new contact.
>
> **[4:39](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=279)** From controllers, CRM controller.
>
> **[4:44](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=284)** And now we're going to use it right here.
>
> **[4:48](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=288)** Add new contact.
>
> **[4:50](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=290)** So basically we've imported this controller from here and now we're using it in the post command here.
>
> **[4:59](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=299)** So we're going to save all this.
>
> **[5:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=300)** We're going to bring back our server, make sure everything is running properly.
>
> **[5:05](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=305)** So if anything goes wrong here, check your code.
>
> **[5:10](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=310)** They were probably made a typo somewhere.
>
> **[5:11](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=311)** I do that all the time, so don't worry about it.
>
> **[5:14](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=314)** This is the curse of a developer.
>
> **[5:17](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=317)** Sometimes you add something somewhere like this, and then you save it and then it throws you an error or not.
>
> **[5:25](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=325)** But in this case it does because I didn't use the right syntax for that.
>
> **[5:29](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=329)** Add new contact function or controller that I'm passing.
>
> **[5:32](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=332)** So these things happen even to me, so don't worry about it.
>
> **[5:37](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=337)** Okay, so now we're going to test this in postman.
>
> **[5:40](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=340)** So we're going to test the post method and try it out.
>
> **[5:44](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=344)** Now if you want to look at the CRM model again, just to refresh your memory about what is required for the post command, you need at least the first name and the last name.
>
> **[5:56](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=356)** Everything else is not mandatory.
>
> **[5:58](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=358)** If you feel like adding email, company phone you can add it or not.
>
> **[6:02](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=362)** But it requires a first name, last name at least for the contact to go through the server.
>
> **[6:08](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=368)** Okay, so let's bring up postman.
>
> **[6:11](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=371)** And I'm going to create a brand new post method here, post.
>
> **[6:17](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=377)** And then let's do local post the endpoint 3000, forward slash contact.
>
> **[6:24](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=384)** Now where do we put the information to send to the database is in the body of the request.
>
> **[6:31](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=391)** And we're going to select this one form URL encoded, this one.
>
> **[6:35](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=395)** Make sure you're on post and not any other methods.
>
> **[6:38](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=398)** And now we're going to enter the key value pairs that we set up in our database.
>
> **[6:42](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=402)** So we had first name, put many as value, we had last name.
>
> **[6:49](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=409)** And if you have a typo in any of the keys, you're going to see an error message.
>
> **[6:55](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=415)** And then I'm going to add company, LinkedIn, and then let's add a phone.
>
> **[7:03](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=423)** And 555-555-1234.
>
> **[7:09](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=429)** Okay, so now we got all of our items we have the required ones, which is first name, last name.
>
> **[7:14](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=434)** Let's go ahead and send this request to our server.
>
> **[7:18](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=438)** And the body of the response is basically what is now the information in the database.
>
> **[7:25](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=445)** First name, last name, company, phone.
>
> **[7:29](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=449)** It created an idea and a date as well.
>
> **[7:33](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=453)** And this is what we just sent and the response.
>
> **[7:37](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=457)** So if we look also in the database on studio, let's just do refresh here.
>
> **[7:43](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=463)** Refresh all.
>
> **[7:46](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=466)** Now we have the CRM database that we just created through our post.
>
> **[7:51](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=471)** We have the first contact, which is right here.
>
> **[7:56](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=476)** So everything works successfully and we are good to go.
>
> **[8:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=480)** So as you can see, it is fairly easy to add an endpoint and then test it with post method.
>
> **[8:06](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-post-endpoint?u=76281980&t=486)** We can also get some very good tips on code syntax when you come around to do the front end piece when you explore postman a little bit further.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), this. (4), pass (4), function (3), import, (2)
> **Env Vars:** crm (4), json (1), url (1)
> **CLI Commands:** make (3)
> **Tools:** postman (3)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Create all items GET endpoint
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980&t=0)** - [Instructor] Now that we have an item in our database, let's create the endpoint that will allow us to get all of our contacts.
>
> **[0:07](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980&t=7)** So again, we're going to start from our controller so let's go here and create the new controller, which will find all of our contacts.
>
> **[0:17](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980&t=17)** So we're going to export const getContacts, which is the name of the function that will get all of our contacts.
>
> **[0:27](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980&t=27)** Request, response, and then here, basically all we need to do is do Contact.find.
>
> **[0:40](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980&t=40)** And inside of the find, since we're trying to find everything, we don't need to pass parameters.
>
> **[0:47](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980&t=47)** And then, we're going to pass error contact, like we've done before.
>
> **[0:55](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980&t=55)** And basically, the rest resembles a lot from our if statement here.
>
> **[1:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980&t=60)** So let's go ahead and do that.
>
> **[1:03](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980&t=63)** We're going to paste it here.
>
> **[1:04](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980&t=64)** So if error, please send the error.
>
> **[1:08](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980&t=68)** Otherwise, send the response with the JSON contact.
>
> **[1:12](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980&t=72)** And if it has multiple contacts, it's going to give us the document that has all these contacts.
>
> **[1:18](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980&t=78)** Okay, so we're done on the controller side.
>
> **[1:21](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980&t=81)** Now, we need to add this to a route.
>
> **[1:24](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980&t=84)** So let's save that.
>
> **[1:27](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980&t=87)** And then, go into our CRM route.
>
> **[1:29](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980&t=89)** I'm going to quickly bring up the terminal just to make sure that our server is still running properly.
>
> **[1:33](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980&t=93)** Yeah, okay.
>
> **[1:35](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980&t=95)** Now, here, we need to add the getContact and import it.
>
> **[1:43](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980&t=103)** And now, we're going to use it inside of our get call here.
>
> **[1:48](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980&t=108)** So I'm not going to remove the middleware 'cause this is an example and I want to keep it there, but all I'm going to do, as opposed to do all this gibberish here.
>
> **[1:57](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980&t=117)** It's not gibberish but it's basically the response that we're getting when we do a get method.
>
> **[2:03](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980&t=123)** I'm going to remove this and simply pass get contacts.
>
> **[2:07](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980&t=127)** So let's remove all this here, like so.
>
> **[2:11](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980&t=131)** And after the comma, you pass getContacts.
>
> **[2:16](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980&t=136)** And this will basically get the contacts that we need.
>
> **[2:19](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980&t=139)** All right, save.
>
> **[2:21](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980&t=141)** Let's check our server.
>
> **[2:23](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980&t=143)** Everything is running properly.
>
> **[2:24](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980&t=144)** Now let's go back into Postman.
>
> **[2:27](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980&t=147)** And now we have our get contact right here so we already have it.
>
> **[2:31](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980&t=151)** We don't need to add anything in the body.
>
> **[2:33](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980&t=153)** All we need to do is do the get contact.
>
> **[2:35](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980&t=155)** So if I send this to the server, let's go ahead and do that, we get an array of all the contacts that are in our servers.
>
> **[2:43](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980&t=163)** So for example, right now, we just have this one.
>
> **[2:46](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980&t=166)** So if we were to create another one and I have all this information already here, so let's change this to Manny Anrietto, LinkedIn, and then simply change the number very quickly.
>
> **[3:03](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980&t=183)** And add an email, metoo@[metoo.com](https://metoo.com).
>
> **[3:14](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980&t=194)** And let's send this to the server.
>
> **[3:17](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980&t=197)** We got this new contact.
>
> **[3:19](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980&t=199)** Now, what we can do is go into get contact and run that command again and now you'll see that we have multiple contact into our database.
>
> **[3:29](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980&t=209)** So now we got our get endpoint ready and we're able to pull our data from our database.
>
> **[3:35](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-all-items-get-endpoint?u=76281980&t=215)** Let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), pass (4), const (1), function (1)
> **CLI Commands:** find (4), make (1)
> **Code Identifiers:** getcontacts (2), getcontact (1)
> **Env Vars:** json (1), crm (1)
> **Tools:** terminal (1), postman (1)
> **URLs:** [metoo.com](https://metoo.com) (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)

#### Create specific ID GET endpoint
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=0)** - [Narrator] What if you need to retrieve just the information of a specific contact?
>
> **[0:04](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=4)** This is when a specific ID endpoint comes into play.
>
> **[0:08](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=8)** So let's get to it.
>
> **[0:09](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=9)** So again, we're going to be playing with the same files over the rest of this chapter.
>
> **[0:14](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=14)** So, the first thing we're going to do, again, I'm going to go and create in the CRM controller, the function that will be able to find one specific contact.
>
> **[0:24](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=24)** So, the way it goes, it's very similar to this, but there's a few changes.
>
> **[0:30](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=30)** So you can copy this, or you can just go ahead and type as I type.
>
> **[0:35](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=35)** Okay, so this one is going to be getContact, and just one E in get, getContactWithID.
>
> **[0:48](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=48)** And we're going to basically pass the same thing as usual, request, response, and this is a function.
>
> **[0:59](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=59)** Very similar to what we've done.
>
> **[1:01](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=61)** And then we're going to do contact, instead of find all contacts, we're going to FindById, and we need some parameters in order to find a specific contact inside of that function.
>
> **[1:17](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=77)** From the requests, we'll get the params.contactId, and then the rest is going to be very similar to what we've done.
>
> **[1:28](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=88)** So error, contact.
>
> **[1:38](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=98)** And then inside of it we're going to do the if error, blah, blah, blah, response, and so on and so forth.
>
> **[1:45](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=105)** So let's go ahead and copy this passage here, so line 19 through 22, and let's paste it.
>
> **[1:54](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=114)** And it's pretty much the same.
>
> **[1:55](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=115)** So, if an error, send the error.
>
> **[1:57](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=117)** Otherwise, send me what I have in my json response.
>
> **[2:02](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=122)** Okay, so we're going to add this, and this, and then save.
>
> **[2:08](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=128)** And I'm just going to remove my server.
>
> **[2:10](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=130)** Everything is running properly.
>
> **[2:12](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=132)** Let me just turn down the terminal.
>
> **[2:15](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=135)** And now, let's go into our CRM routes to add it.
>
> **[2:19](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=139)** So we need to import it first, getContactWithID.
>
> **[2:26](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=146)** And in this area here, we need to do a new get.
>
> **[2:29](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=149)** So, we have our get here to get all the contacts, but we also need a new get for a specific ID.
>
> **[2:37](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=157)** So get, and then we're going to pass in this function, getContactWithID.
>
> **[2:46](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=166)** Again, I'm going to add some notes.
>
> **[2:50](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=170)** Get specific contact.
>
> **[2:57](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=177)** This is to post a new contact.
>
> **[3:04](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=184)** This is to get all contacts.
>
> **[3:08](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=188)** So, let's go ahead and save it.
>
> **[3:11](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=191)** Make sure our server is still running properly, everything is running properly.
>
> **[3:15](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=195)** So now we need to first get all the contacts to understand which ID we need to look for.
>
> **[3:21](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=201)** So, let's go into Postman and simply get all of our IDs.
>
> **[3:24](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=204)** We already did this, so we can actually use what we've done in the past.
>
> **[3:28](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=208)** And I'm going to get this specific contact here.
>
> **[3:31](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=211)** So I'm going to do this, like so.
>
> **[3:34](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=214)** Copy that, and then I'm going to go and basically do a get.
>
> **[3:39](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=219)** I'm going to create a new here.
>
> **[3:41](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=221)** So get, and then I'm going to enter the URL and then simply enter the ID right here.
>
> **[3:50](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=230)** So, I could do that, I could put it in the params, but both ways works, because at the end of the day, you're building up a URL that you're asking.
>
> **[3:59](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=239)** So let's send that.
>
> **[4:02](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=242)** And what I get as a return is the information from that specific ID.
>
> **[4:07](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=247)** So now, if you need any specific contact and their data, you can pull only specific contact by its ID.
>
> **[4:14](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=254)** We are almost there.
>
> **[4:15](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=255)** We're completing our endpoints.
>
> **[4:17](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-specific-id-get-endpoint?u=76281980&t=257)** Let's move on to building the rest.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), this, (6), function (4), pass (2), type. (1)
> **Code Identifiers:** getcontactwithid (3), getcontact (1), contactid (1)
> **CLI Commands:** find (3), make (1)
> **Env Vars:** crm (2), url (2)
> **Tools:** terminal (1), postman (1)
> **Analogies:** similar to (2)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Create PUT endpoint
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-put-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-put-endpoint?u=76281980&t=0)** - [Instructor] Now when we need to update our data, we need to create a put endpoint, and this is what we'll focus on this video.
>
> **[0:07](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-put-endpoint?u=76281980&t=7)** Okay, we're going to go back to our controllers and create the update function right here.
>
> **[0:15](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-put-endpoint?u=76281980&t=15)** So we're going to go ahead and do this, export const updateContact, and again, request response.
>
> **[0:30](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-put-endpoint?u=76281980&t=30)** And then we're going to use the contact database, and then the function that we need, it's not a comma, it's a dot, is findOneAndUpdate, and this one requires a couple of things, So let's go ahead and go through them and explain them as I write them.
>
> **[0:51](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-put-endpoint?u=76281980&t=51)** First of all, it needs the ID, so we need to have an ID in order to update it.
>
> **[0:57](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-put-endpoint?u=76281980&t=57)** So what we're going to get it from is the request.params.contactId, and then we're going to pass the request and the body of its request, and with that, we have an option that we need to pass, and this option is new = true.
>
> **[1:19](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-put-endpoint?u=76281980&t=79)** So what does that mean?
>
> **[1:21](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-put-endpoint?u=76281980&t=81)** That means that when they send the JSON response, they're going to show the new information, so the updated contact, not the old one.
>
> **[1:30](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-put-endpoint?u=76281980&t=90)** If I didn't put that in, or if I put false here, it would show the old contact information.
>
> **[1:36](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-put-endpoint?u=76281980&t=96)** So we want to see that our update has been successful, and then we're going to pass the usual suspects here and do our function.
>
> **[1:52](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-put-endpoint?u=76281980&t=112)** And the rest is pretty much the same.
>
> **[1:54](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-put-endpoint?u=76281980&t=114)** So we're going to copy and paste right here what we have...
>
> **[2:04](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-put-endpoint?u=76281980&t=124)** And pass it inside of that function right here, like so.
>
> **[2:09](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-put-endpoint?u=76281980&t=129)** So if we get an error, we get the error.
>
> **[2:12](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-put-endpoint?u=76281980&t=132)** Otherwise, send me the JSON information.
>
> **[2:17](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-put-endpoint?u=76281980&t=137)** Okay, so now what we need to do is go into our CRM route again and go into our put request right here, which I'm going to also update a contact, and we're going to remove everything that we've written already and pass that controller, but we need to make sure that we import it first.
>
> **[2:46](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-put-endpoint?u=76281980&t=166)** So updateContact, and then we're going to pass it to our put method, updateContact.
>
> **[2:55](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-put-endpoint?u=76281980&t=175)** And that pretty much sums up what we need to do in our routes.
>
> **[2:59](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-put-endpoint?u=76281980&t=179)** So save that. Let's go back to Postman and test this.
>
> **[3:04](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-put-endpoint?u=76281980&t=184)** And again, let's make sure we don't get any errors on our server, so I'm just going to bring my terminal shortly.
>
> **[3:10](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-put-endpoint?u=76281980&t=190)** Everything is good here.
>
> **[3:12](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-put-endpoint?u=76281980&t=192)** All right, we can go into Postman.
>
> **[3:15](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-put-endpoint?u=76281980&t=195)** And now let's get our IDs from this call here.
>
> **[3:19](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-put-endpoint?u=76281980&t=199)** So I'm just going to get them, and I have these IDs here.
>
> **[3:23](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-put-endpoint?u=76281980&t=203)** So what I'm going to do, I'm going to use this one and add an email.
>
> **[3:30](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-put-endpoint?u=76281980&t=210)** So I'm going to grab the ID of this one, and then open up a brand new tab here, and this is going to be the update, or put, and the URL is going to be basically the contact ID.
>
> **[3:51](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-put-endpoint?u=76281980&t=231)** So forward slash, paste the ID that I just had, but now we need to pass something in the body, because we need to update something with this one.
>
> **[4:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-put-endpoint?u=76281980&t=240)** So let's go into the body and select the URL encoded one, and I'm going to simply add an email.
>
> **[4:08](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-put-endpoint?u=76281980&t=248)** That's it. I don't need to do anything else, because it already has a first name last name, so we're going to be successful with that request.
>
> **[4:17](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-put-endpoint?u=76281980&t=257)** So let's go ahead and add an email, metootoo@[metoo.com](https://metoo.com),
>
> **[4:25](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-put-endpoint?u=76281980&t=265)** and then let's go ahead and send that request.
>
> **[4:29](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-put-endpoint?u=76281980&t=269)** And now we have this particular ID that we selected, which had this information already, and we added the email.
>
> **[4:39](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-put-endpoint?u=76281980&t=279)** So this is what a put request does.
>
> **[4:42](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-put-endpoint?u=76281980&t=282)** It updates anything that you sent it to.
>
> **[4:43](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-put-endpoint?u=76281980&t=283)** If we had also changed the name, so let's say for example, last name, I want to change it to Henro, let's do that as opposed to Henri.
>
> **[4:55](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-put-endpoint?u=76281980&t=295)** Well, if I do that, and again, I'm using the same ID, and I send it, now the last name is going to be Henro, and we're being shown the new data, because of the parameter that we passed, new as true.
>
> **[5:10](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-put-endpoint?u=76281980&t=310)** So now we can update our data with a put request.
>
> **[5:13](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-put-endpoint?u=76281980&t=313)** Let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), pass (7), function (4), this, (1), const (1)
> **Code Identifiers:** updatecontact (3), findoneandupdate (1), contactid (1)
> **Env Vars:** json (2), url (2), crm (1)
> **Tools:** postman (2), terminal (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (2)
> **URLs:** [metoo.com](https://metoo.com) (1)
> **UI Navigation:** select the (1)

#### Create DELETE endpoint
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-delete-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-delete-endpoint?u=76281980&t=0)** - The final endpoint we need to create is a delete endpoint, so we can delete any of the data we have on our database.
>
> **[0:06](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-delete-endpoint?u=76281980&t=6)** So let's get to it.
>
> **[0:08](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-delete-endpoint?u=76281980&t=8)** So we're back into our controller here, and we are going to start by creating the controller function, delete contact, request response.
>
> **[0:24](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-delete-endpoint?u=76281980&t=24)** (computer keyboard clicks) And then what we need to do is use again, a contact model, and it's as simple as using a remove function from Mongoose.
>
> **[0:40](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-delete-endpoint?u=76281980&t=40)** And obviously it needs some parameters.
>
> **[0:44](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-delete-endpoint?u=76281980&t=44)** So first of all, we need to know what is the id, and we're going to get this from the request params dot contact id, (computer keyboard clicks) and then, we're going to pass, as usual, the error, contact, into our function.
>
> **[1:07](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-delete-endpoint?u=76281980&t=67)** (computer keyboard clicks) And we're going to copy this, but then something else is going to happen.
>
> **[1:14](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-delete-endpoint?u=76281980&t=74)** So let's just copy this first.
>
> **[1:18](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-delete-endpoint?u=76281980&t=78)** So if you remember, whenever we do something to our data, we get the JSON information back, but in this case, we're deleting something, so it's no longer available.
>
> **[1:30](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-delete-endpoint?u=76281980&t=90)** So if there's an error, yeah, give me the error, but if it's successful, don't give me the contact, cause it's going to be null.
>
> **[1:39](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-delete-endpoint?u=76281980&t=99)** So we need to do something with this.
>
> **[1:41](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-delete-endpoint?u=76281980&t=101)** So instead of giving the contact back, so what we're going to do is a message, and the message is, success, (computer keyboard clicks) fully deleted contact, which means that, instead of giving me the contact information that I just sent to you, send me that message, because there's no contact to give me.
>
> **[2:08](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-delete-endpoint?u=76281980&t=128)** So in this case, we don't need that contact parameters here, we can delete it.
>
> **[2:13](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-delete-endpoint?u=76281980&t=133)** (computer keyboard clicks) Cause all we need is either the error, or the JSON message that is sent back to us.
>
> **[2:20](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-delete-endpoint?u=76281980&t=140)** So we're going to finish our function here, and then we're going to go into routes and change the delete here.
>
> **[2:27](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-delete-endpoint?u=76281980&t=147)** So I'm going to remove all of this and pass the delete contact.
>
> **[2:33](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-delete-endpoint?u=76281980&t=153)** So we need to get it from here.
>
> **[2:35](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-delete-endpoint?u=76281980&t=155)** So I'm going to start doing this in a line like this.
>
> **[2:42](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-delete-endpoint?u=76281980&t=162)** (computer keyboard clicks) And then finally, delete contact.
>
> **[2:50](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-delete-endpoint?u=76281980&t=170)** And then finally, pass the delete contact controller into our endpoint right here.
>
> **[2:56](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-delete-endpoint?u=76281980&t=176)** And I'm going to add a note to delete a contact.
>
> **[3:04](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-delete-endpoint?u=76281980&t=184)** All right, let's save this.
>
> **[3:06](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-delete-endpoint?u=76281980&t=186)** Let's check our server.
>
> **[3:09](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-delete-endpoint?u=76281980&t=189)** Everything is running.
>
> **[3:11](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-delete-endpoint?u=76281980&t=191)** Now let's go into Postman.
>
> **[3:13](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-delete-endpoint?u=76281980&t=193)** All right, so now we're in Postman, and I need to get an id to delete it.
>
> **[3:18](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-delete-endpoint?u=76281980&t=198)** So I'm going to go into my GET call here, and get all my contacts, and select one of these.
>
> **[3:26](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-delete-endpoint?u=76281980&t=206)** So I'm going to go ahead and delete this one here.
>
> **[3:29](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-delete-endpoint?u=76281980&t=209)** So I'm going to copy the id of this guy, and then I'm going to go into the new tab that I added.
>
> **[3:36](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-delete-endpoint?u=76281980&t=216)** Or if you don't have one, you can click on the plus, and select delete.
>
> **[3:42](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-delete-endpoint?u=76281980&t=222)** Let's go into local contact forward slash pass the id, and that's all I need.
>
> **[3:51](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-delete-endpoint?u=76281980&t=231)** So once I have this URL composed, all I need to do is send and it's going to delete the contact, and I successfully deleted the contact.
>
> **[4:02](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-delete-endpoint?u=76281980&t=242)** So if I do a GET again, I should have only one contact.
>
> **[4:08](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-delete-endpoint?u=76281980&t=248)** And if you want to be absolutely sure that this is not in the database, let's go into Studio 3T and do again, a click, and I only have one contact in my database.
>
> **[4:23](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-delete-endpoint?u=76281980&t=263)** If I did this before I deleted contact, I would have two.
>
> **[4:26](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/create-delete-endpoint?u=76281980&t=266)** So now we've got a full API with the proper endpoints to create, update, and delete items in the database.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (14), let (7), function (4), pass (4), this. (3)
> **Env Vars:** json (2), url (1), api (1)
> **Definitions:** is a  (2), means that (1)
> **API Endpoints:** get  (2)
> **Tools:** postman (2)
> **UI Navigation:** click on (1)
> **Speakers:** - the (1)


### 5. Other API Options

> [↑ Back to Table of Contents](#table-of-contents)

#### Static files serving
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/static-files-serving?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/static-files-serving?u=76281980&t=0)** - [Instructor] With an express-based server, it is possible to serve static files such as images or any other files you'd like to have available from your backend.
>
> **[0:09](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/static-files-serving?u=76281980&t=9)** So let's go ahead and make this happen.
>
> **[0:11](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/static-files-serving?u=76281980&t=11)** The first thing I'm going to do is go into the exercise files and grab two images from the resources.
>
> **[0:20](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/static-files-serving?u=76281980&t=20)** So click on resources, and these two images are the ones that we're going to statically serve to the outside world.
>
> **[0:28](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/static-files-serving?u=76281980&t=28)** So what we're going to do is go into our CRM here and inside of the directory here we're going to create a public folder.
>
> **[0:39](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/static-files-serving?u=76281980&t=39)** So I'm going to create a new folder called public like so and I'm going to copy those two images directly into that folder. So the sky and football like so.
>
> **[0:53](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/static-files-serving?u=76281980&t=53)** And then add them here. So I'm going to close these folders and now I have this public folder that I just created with those two elements that are available to the public.
>
> **[1:05](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/static-files-serving?u=76281980&t=65)** But before it's available, I need to make changes to the index.js. I'm going to close those two, move my terminal for now and then go into the index and create basically a new line that will allow to serve those static files.
>
> **[1:25](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/static-files-serving?u=76281980&t=85)** So serving static files and it's as easy as
>
> **[1:34](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/static-files-serving?u=76281980&t=94)** using app.use(express.static) and inside of that function
>
> **[1:45](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/static-files-serving?u=76281980&t=105)** we need to pass which folder is going to be static.
>
> **[1:51](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/static-files-serving?u=76281980&t=111)** So in this case, public folder, and that's pretty much all you need to do to serve static files and if we go back to our server everything is running properly and we can test this in a browser.
>
> **[2:04](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/static-files-serving?u=76281980&t=124)** So let's say for example, we open up a brand new browser and we go to localhost:3000/ and all you have to do is get the actual file name so in this case, football.jpeg.
>
> **[2:23](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/static-files-serving?u=76281980&t=143)** And let me just make sure that I got the syntax right for football.jpeg; football.jpeg with an E.
>
> **[2:36](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/static-files-serving?u=76281980&t=156)** Perfect. So now if I enter, I have access to this particular file. If I do the sky, and let's make sure we do it properly sky.jpeg. Let's just remove football and do sky
>
> **[2:54](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/static-files-serving?u=76281980&t=174)** and I have access to this beautiful image that I just statically served through the express server. So now any files that are in the declared static folder will be available to any front end that needs it.

> [!info]- Semantic Content
>
> **Code Keywords:** static (7), let (5), public (5), case, (2), function (1)
> **CLI Commands:** make (4)
> **UI Navigation:** click on (1), go to (1)
> **Analogies:** such as (1), for example (1)
> **File Paths:** index.js (1)
> **URLs:** [localhost:3000](https://localhost:3000) (1)
> **Ports:** :3000 (1)
> **Env Vars:** crm (1)

#### Other potential libraries for API
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/other-potential-libraries-for-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/other-potential-libraries-for-api?u=76281980&t=0)** - [Instructor] We've built an API with endpoints from scratch using Express in this course.
>
> **[0:05](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/other-potential-libraries-for-api?u=76281980&t=5)** However, there are other libraries worth exploring if you want to save some time or get more benefits from these libraries.
>
> **[0:12](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/other-potential-libraries-for-api?u=76281980&t=12)** I always think it's great to first build one on your own so you learn the basics and the syntax then borrow from other libraries to be more efficient.
>
> **[0:20](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/other-potential-libraries-for-api?u=76281980&t=20)** Here are some of the potential options.
>
> **[0:22](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/other-potential-libraries-for-api?u=76281980&t=22)** Go to [koajs.com](https://koajs.com) and if you like Express but would like to get more for less, koa is a great option built from the same people who did Express.
>
> **[0:34](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/other-potential-libraries-for-api?u=76281980&t=34)** For instance, and if you're familiar with ES 6 syntax, you can use generators instead of callbacks.
>
> **[0:41](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/other-potential-libraries-for-api?u=76281980&t=41)** They also remove middleware to make the library smaller and there is much more to explore.
>
> **[0:47](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/other-potential-libraries-for-api?u=76281980&t=47)** Feel free to take a look at it.
>
> **[0:50](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/other-potential-libraries-for-api?u=76281980&t=50)** Go to [swagger.io](https://swagger.io).
>
> **[0:53](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/other-potential-libraries-for-api?u=76281980&t=53)** Then if you'd like to get a full fledged pre-built API, you could either use Swagger or LoopBack, which is [LoopBack.io](https://LoopBack.io).
>
> **[1:02](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/other-potential-libraries-for-api?u=76281980&t=62)** I haven't worked with Swagger but I've built a few projects using LoopBack and I can tell you it's a very good API generator where you can easily build a backend server with all your API endpoints with a few CLI commands.
>
> **[1:16](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/other-potential-libraries-for-api?u=76281980&t=76)** So feel free to explore these tools at your own leisure.
>
> **[1:19](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/other-potential-libraries-for-api?u=76281980&t=79)** But the beauty of having built one yourself from scratch, is that it'll make it easier for you to understand and compare what they offer.

> [!info]- Semantic Content
>
> **Env Vars:** api (4), cli (1)
> **URLs:** [koajs.com](https://koajs.com) (1), [swagger.io](https://swagger.io) (1), [loopback.io](https://loopback.io) (1)
> **CLI Commands:** make (2)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/next-steps?u=76281980&t=0)** - [Instructor] This course was an introduction to building the API with Node and Express.
>
> **[0:05](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/next-steps?u=76281980&t=5)** With this knowledge, you should be able to easily and quickly build a backend with all the proper endpoints needed for any type of application.
>
> **[0:13](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/next-steps?u=76281980&t=13)** To explore this further, you could simply replicate the same process we've done by creating other collections, models, and schemas for your database and also create the proper endpoints for those.
>
> **[0:25](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/next-steps?u=76281980&t=25)** Also, if you'd like to explore some of the libraries we mentioned in the options video, I'd strongly suggest to look into LoopBack or Swagger for creating full fledged APIs with tons of options and tokens for security measures.
>
> **[0:39](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/next-steps?u=76281980&t=39)** Finally, if you prefer you'd like to learn a bit more about how to secure your APIs beyond using a library like LoopBack, look into JWT and how you can implement these in your API.
>
> **[0:52](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/next-steps?u=76281980&t=52)** You can look into the subject by visiting [jwt.io](https://jwt.io) and look into the Node.js section under the libraries tab.
>
> **[1:01](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express-16069959/next-steps?u=76281980&t=61)** Thanks very much for taking my course and I'll see you in a bit.

> [!info]- Semantic Content
>
> **Env Vars:** api (2), jwt (1)
> **CLI Commands:** node (2)
> **File Paths:** node.js (1)
> **Code Keywords:** finally, (1)
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