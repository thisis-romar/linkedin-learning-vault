---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: node-js-securing-restful-apis-2
url: "https://www.linkedin.com/learning/node-js-securing-restful-apis-2"
duration_minutes: 58
duration: 58m
level: Advanced
updated: 2/6/2020
learners: 57292
skills:
  - REST APIs
  - Node.js
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHeo-shvzaqqw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1580760379764?e=2147483647&amp;v=beta&amp;t=uWAjmlUMhhWMpo7enY9w0C4Y-BWmN5cK5zo4I5CMQow"
linkedin_topic: Web Development
learning_paths:
  - '[[Explore Web Development with Node.js]]'
  - '[[Explore App Development with the MERN Stack]]'
prev_courses:
  - '[[Building RESTful APIs with Node.js and Express]]'
  - '[[Node Js Security]]'
next_courses:
  - '[[Node- Authentication]]'
  - '[[MongoDB Essential Training]]'
path_nav: '[{"path":"Explore Web Development with Node.js","position":9,"total":11,"prev":"Building RESTful APIs with Node.js and Express","next":"Node- Authentication"},{"path":"Explore App Development with the MERN Stack","position":11,"total":13,"prev":"Node Js Security","next":"MongoDB Essential Training"}]'
path_count: 2
tags:
  - course
  - topic/web-development
  - topic/database-management
  - topic/software-development
  - skill/rest-apis
  - skill/node-js
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Node.js-%20Securing%20RESTful%20APIs.md)

![Node.js: Securing RESTful APIs](https://media.licdn.com/dms/image/v2/C4E0DAQHeo-shvzaqqw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1580760379764?e=2147483647&amp;v=beta&amp;t=uWAjmlUMhhWMpo7enY9w0C4Y-BWmN5cK5zo4I5CMQow)

# Node.js: Securing RESTful APIs

> APIs are a crucial business driver for delivering data to your applications. In this course, learn about various options for securing your RESTful API that can help you keep your application data—and your users—safe. Instructor Emmanuel Henri begins the course with an overview of top security threats and an introduction to the Open Web Application Security Project (OWASP), an important resource on

> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-securing-restful-apis-2) | 58m | Advanced | 57K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Securing Node RESTful APIs](#securing-node-restful-apis)
  - [What you should know](#what-you-should-know)
- [**1. Setting Up**](#1-setting-up) (4 videos)
  - [Overview of the security threats](#overview-of-the-security-threats)
  - [Introduction to OWASP](#introduction-to-owasp)
  - [Introduction to JWT](#introduction-to-jwt)
  - [Introduction to Postman](#introduction-to-postman)
- [**2. Setting Up the Node API**](#2-setting-up-the-node-api) (4 videos)
  - [Base project template intro](#base-project-template-intro)
  - [Finalize the setup for the project](#finalize-the-setup-for-the-project)
  - [Create the user model](#create-the-user-model)
  - [Add bcrypt password hashing](#add-bcrypt-password-hashing)
- [**3. Securing the Node API**](#3-securing-the-node-api) (6 videos)
  - [Add the handlers for loginRequired](#add-the-handlers-for-loginrequired)
  - [Add the handlers for registration](#add-the-handlers-for-registration)
  - [Add the handlers for login](#add-the-handlers-for-login)
  - [Finalize secured endpoints](#finalize-secured-endpoints)
  - [Add JWT setup into index](#add-jwt-setup-into-index)
  - [Test the API with Postman](#test-the-api-with-postman)
- [**4. Other Options**](#4-other-options) (1 videos)
  - [Alternatives for securing APIs](#alternatives-for-securing-apis)
- [**Conclusion**](#conclusion) (1 videos)
  - [Explore and build your skills](#explore-and-build-your-skills)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Securing Node RESTful APIs](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/securing-node-restful-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/securing-node-restful-apis?u=76281980&t=0)** - [Emmanuel] Building an application is always exciting until you realize it is missing some key security features. Until you implement these measures, you might be putting your users, application data, and core of your functions at risk. Understanding the resources and the tools available to you to implement secured APIs is what this course is about. Hi, I'm Emmanuel Henri and having worked on multiple large scale projects where security was always top of mind, it'll be my pleasure to support you on this journey. First, we'll look at the top web application threats and what are the main resources to learn more about them. Then, we'll give you an introduction on [[OWASP]], one of the main resource on security. Next, we'll take a look at what you need to put together to build your own node and Express secure API. And finally, we'll explore a few other libraries built for access control. So if you're ready to learn more about node security, fire up your favorite editor and let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (1)
> **CLI Commands:** node (2)
> **Env Vars:** owasp (1), api (1)
> **Speakers:** - [emmanuel] (1)

#### [What you should know](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/what-you-should-know?u=76281980&t=0)** - As this course is an expiration of how to build secured APIs with a few libraries and node, some basic understanding of node, [[npm]], and it's commands isn't a must, but will help you. Next, experience with [[JavaScript]], especially being familiar with the latest syntax, is essential for this course. As you'll see, I'm running on a Mac, but you can follow along on a PC, as the tools work exactly the same on both platforms. Also, I'm using VS Code as my code editor but feel free to use whatever tool you prefer, although I'd recommend using an editor with a built-in terminal.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (1), [[JavaScript]] (1)
> **CLI Commands:** node (2), npm (1)
> **Tools:** vs code (1), terminal (1)
> **Definitions:** is an  (1)
> **Speakers:** - as (1)


### 1. Setting Up

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of the security threats](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/overview-of-the-security-threats?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/overview-of-the-security-threats?u=76281980&t=0)** - There's a growing list of threats for web developers, and keeping abreast of all these security issues must be on your mind daily. So beyond the scope of this course, you need to continue reading on the subject and looking at the common techniques and tools to prevent these issues. [[OWASP]], which I will introduce shortly, is a great place to start and where I always go to understand the latest threats and how to mitigate them. Prevention should always be your number one priority over dealing with an attack after the fact. So here is a brief list of the top five most recurring attacks. The first one is injection attacks. This is when untrusted data is sent to an interpreter as part of a command or a query. The second one is broken authentication. Often the implementation of the authentication is broken and therefore a great opportunity for attackers to get passwords, [[Tokens]], and more. The third one is sensitive data exposure. More often than not, the APIs don't protect properly sensitive information and therefore easily provides opportunities for identity theft and other bad information leaks. The fourth one is XML entities. Older or poorly written XML processors can be exploited with XML injection with hostile content. And the last one is broken access control. Restrictions on what users can access is often poorly implemented and allows other users to see sensitive data. So this is five of the most reported attacks, but there are more, and the first place I would go to
>
> **[1:34](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/overview-of-the-security-threats?u=76281980&t=94)** in order to get a good grasp of all these is to the OWASP Top 10 report, which you can get from this link. With this brief overview of the top attacks, hopefully it gives you a starting point for your research.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (2), [[Tokens]] (1)
> **Env Vars:** xml (3), owasp (2)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (2)
> **Speakers:** - there (1)

#### [Introduction to OWASP](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-owasp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-owasp?u=76281980&t=0)** - [Instructor] If you are serious about security, [[OWASP]] is always a great place to get started in your research for potential threats and solutions. It is called the Open [[Web Application Security]] Project, or OWASP, and includes a big community and many resources available to you. So go to www.[owasp.org](https://owasp.org). So first, if you are completely new to security and OWASP, head to the Social Media area and join the [[Facebook]] group, [[Slack]] channels, or any of the other potential community available. Then, if you want to get more information on any kind of attacks by name, go to the Reference area right here. So for example, if you go into the Attacks section, you can find any sort of attacks by name right here. So for example, if we're looking for a brute force attack, you can find it in B, right here and then you can click on that link and get more information on that specific attack. Now let's get back to the main page. And if you'd like to get actual solutions or code snippets on several security threats, head to the Code Snippets area, which is right below the Attack section, like so. And then the same thing goes for this section, you can find it by alphabetical order. Now let's get back again to the main page. And last, I'd suggest you visit also the Vulnerability section to read on potential areas where your applications might be vulnerable to threats. And this is in the Reference area again
>
> **[1:34](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-owasp?u=76281980&t=94)** and you can click on this link right here and get a little bit more information, again, by alphabetical order. This site is full of resources to get you started and help you in your research. So make sure to subscribe to their mailing list to get the latest information on security threats.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (4), [[Web Application Security]] (1), [[Facebook]] (1), [[Slack]] (1)
> **CLI Commands:** find (3), make (1)
> **Env Vars:** owasp (3)
> **UI Navigation:** go to (2), click on (1)
> **Analogies:** for example (2)
> **URLs:** [owasp.org](https://owasp.org) (1)
> **Tools:** slack (1)
> **Definitions:** is called (1)

#### [Introduction to JWT](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-jwt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-jwt?u=76281980&t=0)** - [Instructor] JWT, or [[JSON]] Web Token, is an open standard that is used to securely transmit information in between parties. The JSON object primarily consists of three items, a header, the payload, and the signature. So go to [jwt.io](https://jwt.io) and then scroll all the way down to when you see the Encoded and the Decoded section here. That's going to help you understand what I'm just about to explain. So the header has usually two parts, the type of token and the hashing algorithm used to encrypt the token. Then, the payload consists of the [[Metadata]] from the request party that is required from the server. Some typical information you'll see in the payload are issuer of the request, expiration, name, et cetera. Finally, the signature is what proves the requester is who he says he is and is how the request is properly validated, which is what you see in this section. Services like AuthO uses JWT and we talk briefly about the service later on. In fact, the JWT documentation was crafted by the AuthO team. So what is the use of JWT? This is the best way to securely transmit information across parties on the web. So the payload could be used for any type of information you'd like to transmit from two parties. And quite evidently, this can be used to authenticate a user. So when the user is registered to a site, then the token will be used to validate the user
>
> **[1:33](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-jwt?u=76281980&t=93)** as he makes several requests for data. So there you have it. Let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (2), [[Metadata]] (1)
> **Env Vars:** jwt (4), json (2)
> **URLs:** [jwt.io](https://jwt.io) (1)
> **UI Navigation:** go to (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Introduction to Postman](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-postman?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-postman?u=76281980&t=0)** - [Instructor] In this course, at some point, we'll need to be able to test and use the API endpoints. This is where Postman will be used to allow us to get data, post new items, update, or delete them. So go to [getpostman.com](https://getpostman.com) and then scroll to the button right here, and then click download the app, and then download the version for your OS. This works on Mac and [[Windows]] as well. So you can actually use it for [[Linux]] as well, but I've never tried it, so I don't know if it's going to look the same, but feel free to do so if you are on Linux. Once you have this package, install it, it's fairly simple. And then you need to connect it to either your [[Google]] account or sign up to connect all of your requests directly inside of the application. So once you have it installed, it looks something like this. And this is where you can actually make requests. At the top here, you can select the protocol that you'd like to make a request from, so get post, put, and all the usual suspects. Then you enter the URL, and then you can enter the params, authorization, if you have any request that needs that. And then you can enter the headers if you have any specific headers to enter, and then the body of your request. So the key value pair that you need to send data to. So for example, if you're adding new contacts into your CRM application, then you can enter the key value pairs directly in this form here. But one of the things that I really like about this application is that it provides snippets of code for your application or language you're using.
>
> **[1:35](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-postman?u=76281980&t=95)** So if you want to use any of that code, when you made your request, you can click on code here, and then you're going to get the code for your specific language. So for example, if we're using node JS native, then this is the code that you would enter into your front end. If you're using any other languages, so for example, C, C sharp, Go, and so on, so forth, you can get the snippets of code for those specific language. So for example, [[Java]], you can click here and get the code for that particular language. So this is how you can use that application to make requests, and you can leave it open while we're doing this course, in case you need to make any tests with your application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (2), [[Windows]] (1), [[Google]] (1), [[Java]] (1)
> **CLI Commands:** make (4), node (1)
> **Analogies:** for example (4)
> **Env Vars:** api (1), url (1), crm (1)
> **UI Navigation:** go to (1), select the (1), click on (1)
> **Exercise Files:** download the (2)
> **URLs:** [getpostman.com](https://getpostman.com) (1)
> **Tools:** postman (1)


### 2. Setting Up the Node API

[↑ Back to Table of Contents](#table-of-contents)

#### [Base project template intro](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=0)** - [Instructor] Let's get started with building our node express project first. So first, we'll initialize a new node project that installs some dependencies, and finally add the files from a project built in my node and express API course in the [[LinkedIn]] library. So before we get started with our base project, if you don't have [[MongoDB]] installed, please go to their website on [mongodb.com](https://mongodb.com) and install it, as we'll need it to run the new project. If you need help installing it, go through their video on the subject in the same course I just mentioned. When you have it installed, come back to this video, and I'll wait for you. When you're ready to make sure your Mongo database is running, you can test it with a tool called Compass that is directly on the MongoDB site. So you can install Compass, and then once you have Compass installed, you'll be able to see if the database is working. So let's take a look at Compass, and it looks like this. So when you run Compass, it basically asks you to connect to the database on your system, and if it's a successful connection, you're going to see the database that are available on that local host, port 27017. So eventually when we run our application, you're going to see the database that is related to that application appear on Compass. You can also use a tool that I've used a lot in the past called Robo T, but Compass does the same job across [[Windows]] and Mac, so feel free to use Compass or any other tools that you use to test your database.
>
> **[1:34](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=94)** All right, so let's switch to VS Code now. So what I'm going to do first, before we actually open VS Code, I'm going to create the folder where we'll install and add the files for our project. So I'm going to go on the desktop and right click, create a new folder, and I'm going to call this one Security.
>
> **[1:58](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=118)** And once you have it installed, what you can do is drag and drop it directly on VS Code, like so, and on Windows, you can right click on the folder and open it inside of VS Code. Now we have the folder inside of VS Code, and we can start installing the dependencies directly inside of that folder. So let's go ahead and bring up the terminal so you can go on terminal and click on new terminal, like so. And then let's go ahead and install the dependencies. So what I'm going to do first is do an [[npm]] in it, so I initialize a new project inside of that folder with node, and then I'm going to use the double ampersand to add the dependencies directly inside of our package.[[JSON]] file. So the double ampersand, if you're not familiar with it, allows us to run a command first, and then once this command is executed, run the second one. If you want to run all the commands at once, you can use the single ampersand. But for this case, it's not going to work because we need to initialize our node project first before we install the dependencies. So what we're going to install on that project, let's go and do NPM install. And the ones that we need to install is first body parser, then we need to install express, mongoose, nodemon, and then let's do the double ampersand again, and we're going to install the dev dependencies,
>
> **[3:30](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=210)** so let's do NPM install, or you can do the I for shortening the install if you want to. And I'm going to do dash dash save dash dev, and these are the dependencies that I want to install on the dev side, the first one is babel dash [[CLI]], then babel dash preset dash environment, so ENV. The last one is babel dash preset dash stage dash zero. So once you have all this typed, go ahead and hit return, and it's going to initialize your project first, so you can answer all the default questions. I'm going to return on most of 'em. And I'm going to type my name for author. And then, yes. And then what's going to happen after that, because we used the double ampersand, it's going to first install all the regular dependencies, and then the dev dependencies. And now, you can take a look at the package.json file by clicking on it. And you're going to see the dependencies that we've installed here, and then the dev dependencies that we've installed. Perfect. So now, what we need to do is copy the files from the original project that I created in the other course, so let's go back to our desktop, and I'm going to open the exercise files. Click on resources, project, and then copy all the files
>
> **[5:07](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=307)** that I have on that folder inside of the project. Just make sure that you're seeing the babel RC file. If you don't, your system is not showing hidden files. So if you don't see it, do a search in [[Google]] and find out how to show hidden files in your system. But make sure you copy this file, because if you don't, your project is not going to work. So you need to have that file. So let's copy these files, and then put them inside of the security folder by doing command V, or paste. And I have all my files inside of that project. So now that we have our dependencies installed, let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (3), [[npm]] (3), [[Windows]] (2), [[JSON]] (2), [[LinkedIn]] (1)
> **Prerequisites:** install (14), you need to have (1)
> **CLI Commands:** node (5), make (3), npm (3), mongo (1), find (1)
> **Tools:** vs code (5), terminal (3)
> **UI Navigation:** click on (3), go to (1), switch to (1), drag and drop (1), open the (1)
> **Env Vars:** npm (3), api (1), cli (1), env (1)
> **File Paths:** package.json (2)
> **URLs:** [mongodb.com](https://mongodb.com) (1)

#### [Finalize the setup for the project](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=0)** - [Instructor] Let's finalize our base server by adding a few elements to our code and then test it to make sure it works. So the first thing I'm going to do is add a start command inside our scripts in the package.[[JSON]] file. So if you don't have it open, click on package.json file and then we're going to reformat this particular script here. So I'm going to first change test to start and then inside of that command here, I'm going to change a few things. So this will allow us to start the server and then run it with nodemon. So let's go ahead and use nodemon. And we're going to start with the index file so that's the start file which is right here and I'm going to show you what is inside of that project momentarily so let's finish our code first. So let's do index.js. And we're going to execute it with babel-node which will transpile the latest version of [[JavaScript]] into a readable code for the browser. And then use the command -e and look for js files. Okay, so now we can save this. So what I'm going to show you now is what this project is made of. So first of all, it's a Node and an Express server that we are running with Mongoose to connect to the database and then we're using bodyparser to transpile the code that's coming or the requests that are coming directly from the browser and then in the src file here, you're going to see controllers
>
> **[1:35](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=95)** to execute the routes and then the models. So the controllers are the commands that are going to execute the commands inside of the database and the routes are basically where we're going to execute those commands. So this is mainly a base server that we're going to use for security purposes. Okay, so now that we've seen what's inside the code, let's run it. So I'm going to do [[npm]] start and this is going to work because of what? Because of the command that we just created inside of our package.json file and as I do npm start, if the database is running in the background, you should see this command without any errors. If you're seeing any errors, it could happen because frameworks are changing all the time. If you see anything in here, read the warnings, see if there's a fix for it and most often than not, you're going to have them fixed directly in the error message. So if you see anything different here, then read through the console messages and fix it. So for example, in between the first version of this course and this version, there was some errors around Mongo which we fixed inside of the index here. So we've actually added some piece of a code here that allows us to use a NewUrlParser and UnifiedTopology which is fairly new with Mongo. All right, so now that we have our server running, let's go to Postman. And we're going to do a Get request. So I'm going to do localhost.
>
> **[3:10](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=190)** Let's do 3000 and I'm going to go for contacts which is basically the route that will execute the controller so if we go back to our code, and look into the routes, the contacts route will run the controller in getContacts. If we go into getContacts inside of the controllers, it's going to get all the contacts from the database. All right, so let's go and run this in Postman. I don't need to enter anything in the body because this is a plain request to get all the contacts. I send it to the server and right now, it's returning nothing because there's nothing in this database. Okay, so let's go ahead and add a new contact. So if we go ahead and the first one is firstName. Manny and if we want to make sure we can go back to the model so if we go back to VS Code and we take a look at the crmModel, we can take a look at what it takes. So firstName, lastName so those two are required and email, company, phone doesn't need to be there. So we can really create a new contact with just a few name and the last name. So let's go back to Postman. And we have the firstName entered. And let's go to lastName. Henri. And now let's make sure we do a POST. And let's go ahead and send it.
>
> **[4:48](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=288)** And now the database has created this brand new contact inside of our database. So now if we go back and do a Get again to all the contacts, we're going to get a list of all the contacts inside of the database. So right now we just have this one that we just created. So everything is working as it should. Now we're ready to secure this brand new project. Let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (3), [[npm]] (2), [[JavaScript]] (1)
> **CLI Commands:** make (3), node (2), npm (2), mongo (2)
> **Code Identifiers:** firstname (3), getcontacts (2), lastname (2), crmmodel (1)
> **File Paths:** package.json (3), index.js (1)
> **Tools:** postman (3), vs code (1)
> **Cross-References:** go back to (3)
> **UI Navigation:** go to (2), click on (1)
> **Env Vars:** post (1)

#### [Create the user model](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/create-the-user-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/create-the-user-model?u=76281980&t=0)** - [Instructor] The next step in building a secured API is to add users that can register and log into the application. And for that to happen, we need a user schema. So let's get back to VS Code, and in the models folder, I'll create a few file. So I'm going to go ahead and click new file here, and then call this user model dot JS. And if you created that file outside of the folder here, all you have to do is drag and drop that file inside of the folder, and then yes, move it, and then the file's going to be in the right folder. So let's go ahead and start by importing mongoose from mongoose. And then, let's go ahead and create a variable that we'll call schema. And that looks very similar to this CR model here. So if you don't want to waste cycles in typing all these extra stuff, what you can do is copy and paste that section here, like so, and then bring it back to the model here. So you have the first line that we need, and then instead of contact schema, what we'll do is user schema. And then we can work directly inside of that file. So the created date is going to be there as well, and what we're going to do is remove those two here. So I'm going to remove company and phone. And then reuse what we have in here
>
> **[1:36](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/create-the-user-model?u=76281980&t=96)** to create the new elements of a user. So the first one is going to be username, and it's of type string, so the same. It is required, and what we're going to do is, and then, what we're going to do is type true for that. And then we're going to do email. And again, we're going to do true. And it's still a string, so we're good there. And then, we're going to use hash password, so we're going to create a field called hashpassword, so don't forget the H. And then for this one, is also a type string, and then also required. Perfect. So what we've created here is a user schema that we're going to leverage when we create new users. So when we register a new user, this is the schema that's going to check that we have all these elements in the data that we're passing to the server. So username, email, and hash password. And then, in the following video, we're going to install bcrypt, and then make sure that the hash password matches the password that is passed in the data that we're doing the request from. So let's move on and work on that.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Env Vars:** api (1)
> **Tools:** vs code (1)
> **UI Navigation:** drag and drop (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Best Practices:** don't forget (1)
> **Prerequisites:** install (1)

#### [Add bcrypt password hashing](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-bcrypt-password-hashing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-bcrypt-password-hashing?u=76281980&t=0)** - [Instructor] Okay, so now what we're going to do is start writing code related to bcrypt. If you're not familiar with bcrypt, it's a package that allows you to encrypt and decrypt data, so like a password. So what we're going to do first is install bcrypt and while we're actually installing new packages, we'll also install jsonwebtoken. So let's go into [[npm]] I, or you can do install bcrypt and then jsonwebtoken. We'll use jsonwebtoken later on, but I wanted to install it all on this one pass. So let's go ahead and hit enter. Perfect, so everything is installed. So we can close the terminal for now. And if you want to check, you can take a look at the package.[[JSON]] file, and you're going to see bcrypt installed and jsonwebtoken, so we're ready to go. So now what we need to do is import bcrypt, so let's go ahead and import bcrypt from bcrypt, like so. And by the way, when you have a library that you want to import specific functions or exports from that library, what you could do is do something like that, so import from the library. And then do the curly braces here when you're importing something specific, and then start typing, so for example, compare, comparesync, or any specific functions that you'd like to use inside of that library. But in this case, I want to use the whole library,
>
> **[1:33](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-bcrypt-password-hashing?u=76281980&t=93)** so I'm just going to go for this particular item here. So now what we need to do is create the function that will compare the password that has been sent from the request to the one that we have in the database. So bcrypt will decrypt those two passwords, compare them, and then say, "yeah, it's the same password." So this is the function that we're going to create now. So I'm going to leverage user schema and add a method to user schema, and I'm going to call this compare password, which will have, or take as argument, the password that is coming from the request, and then the password that we have in our database, which is the hash password. And then we'll create a function. And in this function, we're going to return from bcrypt's function called comparesync. And we're going to compare the password again that we have from the arguments in our request here, and also the hash password. So this function will compare them both, make sure that they are decrypted while they're comparing, and if they're both matching, then we have a user that can login. Perfect. And while I'm at it, let's just make sure that we have methods, and not method. Let's make sure that everything is okay.
>
> **[3:11](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-bcrypt-password-hashing?u=76281980&t=191)** Bcrypt, bcrypt, so our entire code is all good. So you can save and move onto the next movie.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (1), [[JSON]] (1)
> **CLI Commands:** make (3), npm (1)
> **Prerequisites:** install (4)
> **File Paths:** package.json (1)
> **Env Vars:** npm (1)
> **Tools:** terminal (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 3. Securing the Node API

[↑ Back to Table of Contents](#table-of-contents)

#### [Add the handlers for loginRequired](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-loginrequired?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-loginrequired?u=76281980&t=0)** - [Instructor] Okay, so let's go ahead and create the controllers for our user model. So in the controllers folder, go ahead and click new file, and we're going to call this usercontrollers.js, and then we're going to import a few things. So first, we're going to import mongoose from mongoose. And then we'll import bcrypt from bcrypt. We'll also import JWT, which we'll need soon from jsonwebtoken, which we've installed previously. And then we'll also import the user's key mod that we just created. Again, the tip that I gave you earlier will work in this case, so let's go ahead and do from models, and usermodel, and then, if I go ahead and start typing what are the exports available for me, like userschema, it's going to suggest that, which is a neat trick inside of VS Code. All right, so let's go ahead and create a variable that we'll call User, and I want to do capital U. We're going to create a model from mongoose, like so. Which we'll call user
>
> **[1:35](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-loginrequired?u=76281980&t=95)** and pass the user's key mod. So it's expecting what we've created in the schema. So if we go back to userschema, it's expecting this data that we have created inside of the user schema. So when we pass this, this part of the model we're creating inside of mongoose, it's going to expect the values that we send from our request to the API. All right, so let's create our first function, which is the login required. And this function will take a few arguments, so I'll put in request, then response, and then next, so we can pass to the next function. So let's go ahead and do an if statement. So if in the request there's a user that is basically a logged in user, then go to the next function. So when we'll use the login required inside of our routes, it's going to go through that process. So if we have a logged in user, go ahead to the next function, which will be the function to get the data, or post data, or delete data, and so on, so forth. Otherwise, and this is where we're going to do else, return a response status of 401. And we'll add a message to that, which is a [[JSON]] message. And the message will be
>
> **[3:13](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-loginrequired?u=76281980&t=193)** unauthorized user. So basically, if there's not a logged in user, we're going to tell through a message that this guy is not authorized to add or pull data from the database. And that's basically it for that function. So right now, what we've done is create a function that will check if the user is logged in. We'll keep working on the other functions in the following videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (1)
> **Env Vars:** jwt (1), api (1)
> **Definitions:** is a  (2)
> **File Paths:** usercontrollers.js (1)
> **Cross-References:** go back to (1)
> **Tools:** vs code (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Add the handlers for registration](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-registration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-registration?u=76281980&t=0)** - [Instructor] Okay, so the next function that we need to create is the function for registering new users. So let's go ahead and keep working on this. So let's do an export of a function which we'll call register. And then this function takes two arguments so a request and a response. And then inside of that function, we'll create first a variable that we'll call newUser. And this function will pass a new user, so remember, we've created a variable here which basically adds the model user and passes the schema that we created earlier and we're going to use this to create a new user. Like so. Leveraging what we've created up there. And we'll pass from the request what is in the body. So remember, when we make transactions with Postman here, in the body, we're passing the data to create a new user and this is what will be in the body of the request which is here. So now we'll have the information for the new user and now we need to create the new user and we'll use the hashPassword of that newUser so remember in the body,
>
> **[1:34](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-registration?u=76281980&t=94)** there's going to be a password. So we'll use that and encrypt with bcrypt.password before we pass it to the database and that's why we need to in the model here to compare passwords which are encrypted but bcrypt will decrypt those passwords and then compare them. But we still need to pass a password that is encrypted first inside of our database. So we'll take the request.body.password and again, I've called this password. So if it's a little bit confusing to you in between hashPassword and password, remember that the request is going to send a password but in our database, it's called hashPassword like so. And then we'll pass the value 10. So this is the number that hashSync requires to encrypt so this is the algorithm. And then once we have this, we can save it to the database. So we're going to save it and first and this is the typical code that you would use in an API to send new stuff to Mongo. So we're going to save it.
>
> **[3:01](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-registration?u=76281980&t=181)** And I just want to fix this right away 'cause this goes outside of the curly braces just to be absolutely certain. So if there's an error, when we are saving inside of the database, return a response with the status of 400.
>
> **[3:25](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-registration?u=76281980&t=205)** And then send the message error so let me know what is the error if there is one. Else what you'll do is return the user that we just saved. So what we'll do is first, omit to add the password from the response because we don't want to pass back the password to the response, especially in any response you don't want to send a password back to the user or the front end because that could be used for hacking purpose and so on and so forth. So we are basically setting as undefined when we're passing back to the response and then we're returning a response with a [[JSON]] message which includes the user and again, the user password won't be set as the original request. Okay. So let's save this. Okay, so now this was the function to register a new user. Also using best practices for password. Again using best practices for security measures. Let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (1)
> **Code Identifiers:** hashpassword (3), newuser (2), hashsync (1)
> **CLI Commands:** make (1), mongo (1)
> **Env Vars:** api (1), json (1)
> **Tools:** postman (1)
> **Speakers:** - [instructor] (1)

#### [Add the handlers for login](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-login?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-login?u=76281980&t=0)** - [Instruction] So the final function that we can use for our user controllers is the login function. So basically allowing to login into the API's and once we're logged in, then we can go ahead and do transactions with the API. So let's go ahead and do that function so we're going to call this log in. So you create a new function and then the arguments again are the request and the response.
>
> **[0:35](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-login?u=76281980&t=35)** And then what we're going to do is go ahead and try to find a user in the database. So findOne. So basically, what we need to do is grab the email from the request .body .email. So again in the request, we're going to have an email that we'll try to match to something that we have in our database. So what we'll do and you want to go after the curly brace before the parenthesis, is do a comma and then go ahead and do an error and user and then what we'll do is keep going with a new function to check if there's a new user. So if we get an error, we'll throw the error. Then if if there's no user in the database, we're going to do a response of status 401 and we'll send a response in a [[JSON]] format as well, so we'll do a message that will say authentication failed. No user found. And then what we'll do is go outside
>
> **[2:15](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-login?u=76281980&t=135)** of this curly brace here, so you want to make sure that you go just after what we'd just written and right here and then what we're going to do an else, if, user, so if we find a user, and then inside. So remember, we created a function to compare the passwords so this is where we're going to use it. So if we found a user, then let's make sure that the passwords match. So if the user compare password from the request, again it takes two arguments. So the first argument is the password that is being passed from the request, which is what I've explained in the previous video. And as the second argument, user.hashpassword, so we're basically comparing the password from the database to the one passed inside of the request. And then continue with a function. If they don't match, so this is the negative piece, so if the user compare password doesn't match then you do the response as follow. So we're going to do again a json message,
>
> **[3:50](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-login?u=76281980&t=230)** that's authentication fail, wrong password. Now the last piece that we need to do is if, so the last thing we need to do, is if everything else has been checked, then that means that we have a user and the password matches and then we can send a token from jwt and we'll sign it. So basically, we're sending a token back to the response and telling the request we found somebody, the passwords match, here's the token, you can use this token to actually make transactions with the APIs. So what I'm going to do in the token, I'm going to sign this user email, username, with the user.username. Then also do the same, and let me just do a quick [[Microsoft Word|word]] wrap so we can see everything on the same page here. So let's go ahead do the score id that we'll get from this user and use user id. And then we're going to sign this with a word. So this could be any word,
>
> **[5:25](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-login?u=76281980&t=325)** but you want to make sure that you're using the same word from the request to the actual signature and the API is here. And you'll understand this once we use that word again. So for my Kasie, I'm going to call this one restful APIs and it could be anything so it's basically the secret word that json with token is going to use to sign your token. Okay? So we're all good. Okay, so one thing that I wanted to make sure is that there's no typos anywhere that will basically break the application and actually I see one right here so password shouldn't be like that so let's fix this and save. And everything else seems to be fine, okay. So, now that we have all these functions completed, let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (6), [[JSON]] (3)
> **CLI Commands:** make (5), find (2)
> **Env Vars:** api (3)
> **Code Identifiers:** findone (1)
> **Cross-References:** previous video (1)
> **Definitions:** means that (1)
> **Speakers:** - [instruction] (1)

#### [Finalize secured endpoints](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-secured-endpoints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-secured-endpoints?u=76281980&t=0)** - [Instructor] So we need to add our routes for registration and log in, but also make sure we add the functions that will check for a logged in user before proceeding. So let's go ahead and work on this. For this particular code we're going to need to work in the routes. So go into the routes folder and then open the crmRoutes. And the first thing we're going to do is import the functions that we've created inside of the userController. So let's go ahead and do import and then what I'm going to do is do the from first, from dot dot controller, or controllers, userController,
>
> **[0:48](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-secured-endpoints?u=76281980&t=48)** like so, and then what I can do is use that to import the functions in question. So for example we're going to have access to login. So if I type L I'm going to see login, and then register, and then loginRequired, and these are the functions that we need. So once we have these functions we can pass them to the routes. So what we're going to do is pass the loginRequired to all the routes. So before they actually execute the controllers for getContacts and getContactWithID it's going to execute the function loginRequired that we just created. So let's go ahead and add them. So I'm going to basically click and option click on every element where I want to add that function, like so. And then all I need to do is type loginRequired and then comma, and you're good to go. So we have now this function that will run first, check that somebody's logged in, and then run the function of getting the contacts and the same with every other function that is in this particular route. Now, we also need to create the new route. So remember, our users need to register first and then they also need to be able to log in. So we need to create the routes for those.
>
> **[2:22](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-secured-endpoints?u=76281980&t=142)** So what we're going to do is inside of the routes function here, we're going to add an endpoint which is the first one will be the registration route. So we're going to create an app.route like before. And we'll name this route forward slash auth forward slash register. So this is the route that we're going to need to use from Postman to register. And then we're going to use the function register that we created in the controllers to register that new user. So if you can remember this is this function that we created here, the register function. All right, so we also need to create a route for the login. So let's copy line 33 and line 34, paste it below, like so. And as opposed to auth/register we're going to do auth/login or you could just do login if you want to, so let's go ahead and do that instead. And then pass the right function which is the login function, like so. Okay, so now we've created our route for logging in, so login route. We have a new registration route, and we pass the loginRequired function on all the other routes. So once we're logged in we're going to get a token
>
> **[3:55](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-secured-endpoints?u=76281980&t=235)** from the function, and then we can use that token to actually do the other functions here. So I'll add new items to our database, update them, get all the contacts from our database and so on and so forth. Okay, so let's quickly take a look, just to make sure we haven't made any typos, or any big code errors. And I can see right away that there's a dot missing on the post, and this one as well, and then we can save this. And quickly check, I think we're all good. Perfect. All right, so now that we have all the new routes set up and the loginRequired added to our post and all the other endpoints, we're good to go and move on.

> [!info]- Semantic Content
>
> **Code Identifiers:** loginrequired (6), usercontroller (2), crmroutes (1), getcontacts (1), getcontactwithid (1)
> **CLI Commands:** make (2)
> **UI Navigation:** open the (1), click on (1)
> **Tools:** postman (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Add JWT setup into index](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=0)** - [Instructor] Okay so now the final piece that we need to do is to do the JWT setup inside of our index. So let's go into the index file right here and then what I'm going to do just Below the bodyParser setup, it doesn't matter where it is, I'm going to add the JWT setup. And this is going to be used to pass a secret [[Microsoft Word|word]] and then take the headers and make sure that we match when we get the request and then pass it down to the controllers. So let's go ahead and do JWT setup as the common. And then we're going to do app.use. And it takes a request, response, and then next. So we can pass this next function. And here we go. So the first thing that we're going to need to do is make sure that we have headers which contains the token. So first make sure that we have headers and then make sure that we have in the headers so request.headers.authorization. And also make sure that in our headers, and again, so all of this is going to become very important when we make the request from Postman. Want to make sure that we have authorization in the headers. And also we want to make sure that we have the JWT request or name inside of the headers. So all of this we're checking in here.
>
> **[1:35](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=95)** And I'm going to do a word wrap just to make sure that we're still going to be on the same screen as I type more stuff. Authorization. And then we're going to use a little bit of RegEx and functions with [[JavaScript]] to check for the keyword that we're going to need as the secret word. So let's go ahead and add JWT.
>
> **[2:16](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=136)** And then with [[JSON]] web token we're going to validate all this. So we get the data. So if we have request headers and then if we have request headers authorization and if we have the word JWT in a request then we can check and verify the signature. It's a lot of complex code just to make sure that what we get as a request is authorized to hit the backend or the database with new data or updated data and so on so forth. So we're doing basically the same thing here. And then we're checking the next thing in the array and the next thing in the array should include RESTFUL APIs. Remember, we added that keyword earlier. And then we'll do the usual error and then the decode. So we're doing another function. And if most of this doesn't make sense I'll summarize once we're done typing all the code. So if we have an error
>
> **[3:46](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=226)** then let's pass the request user as undefined.
>
> **[3:56](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=236)** And then the request user decode. And then jump to the next function. Else, request user. Again, we always need to make sure that we're not passing data back if we don't need to. And that's part of what we're doing here. So this is a lot of code just to make sure that we have headers and we have the proper JWT required elements when we pass a request. So want to make sure that we have, like I said before, in the header the authorization and that we have the word JWT. And then we want to make sure that we are passing in the header's RESTFULAPIs when we send it to the database. And finally we're using an if and else statement to make sure that if we have all the elements of the request or what we need here we're not passing data back. Okay so let's quickly validate that we have the import. Oh, we don't, so we need to import JSON web token if we want to be able to use it. So let's make sure we do that. Jsonwebtoken from jsonwebtoken. And let's do a quick check if we have everything that we need. There's no typos. Everything seems to be fine.
>
> **[5:28](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=328)** Okay, perfect, so let's save this. And now that we have our JWT setup, we're ready to test this in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (5), [[JSON]] (2), [[JavaScript]] (1)
> **CLI Commands:** make (17)
> **Env Vars:** jwt (9), json (2), restful (1)
> **Prerequisites:** setup (5)
> **Code Identifiers:** bodyparser (1)
> **Cross-References:** in the next (1)
> **Tools:** postman (1)
> **Definitions:** is a  (1)

#### [Test the API with Postman](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=0)** - [Instructor] Now let's go ahead and test our implementation and do it in Postman. So the first thing we're going to do is make sure our server is running so I'm going to do [[npm]] start. And if you see any error messages because you made some typos or there's something that's missing, read the console for the error messages and go back to those videos just to make sure. All right, so let's switch to Postman. So the first thing we're going to do is try to get the list of contacts without entering any token as if we're unauthorized. So let's go ahead and do that. So let's send for contacts and again, we are getting the unauthorized user. So that's normal behavior. The second thing we're going to do now is create a new user. So I'm going to change this it auth and register like so. And we need a few things when we register in the Body. So we need a username and if you're not sure, what you can do is go back to the code here and look into your user model. And you're going to see that we need a username, email and a password. So let's go ahead and do that. So we're going to do a username so I'm going to do emmanuelhenri and then email, I'm going to do me@[me2.com](https://me2.com). This is not a real email by the way and then a password.
>
> **[1:34](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=94)** And again, I'm entering password and not hash password because password is the data that we're sending to the APIs and then the APIs use hash password inside of the database. So I'm going to do something like test1234. And I'm going to register. So this is a POST and not a GET so we need to select the right method. So POST and then let's send it and then it says that it has created a user so we're good. All right, so now we need to log in before we can do anything in this API. So let's go ahead and log in and remember, the route for login is simply login. And again, this is a POST and we can reuse the same information so we can go ahead and send this to the APIs. And now we're getting a token. So in theory, your front end would leverage that token to make transactions with the API. So what we're going to do is simulate this through Postman by you want to copy everything in between the quotation marks like so and then what we're going to do is for example, get the list of contacts, so we're going to go to GET. Do contacts like we've done before like so. And now we need to enter a few things. So there's nothing that we need for a get contact so we can remove that data here. And then we send some things inside of our headers. So we need to send an authorization. And we need to add JWT
>
> **[3:11](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=191)** and then paste the token. So if you remember, this is the process that we've entered inside of our controller and this is where we're going to check if there is a user logged in through the command that we've created inside of our index here. So this. So this is going to check that we have JWT plus the token that we have and this is the keyword that will check our token here. So let's go back to Postman. And with these commands, we can basically make a transaction with the API and we should be good to go. So let's go ahead and send. And if you're seeing a list of contacts, that means that you've sent the right information to the server. So therefore, the authorization token with JWT, if you're seeing the list of contacts inside of your database, it's all good. So you have your own Node base authentication system with an API attached to it. Let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (1)
> **Env Vars:** api (4), post (3), jwt (3)
> **CLI Commands:** make (4), npm (1), node (1)
> **API Endpoints:** post  (2), get
 (1), post
 (1)
> **Tools:** postman (4)
> **Definitions:** is a  (3), means that (1)
> **Cross-References:** go back to (3)
> **UI Navigation:** switch to (1), select the (1), go to (1)


### 4. Other Options

[↑ Back to Table of Contents](#table-of-contents)

#### [Alternatives for securing APIs](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/alternatives-for-securing-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/alternatives-for-securing-apis?u=76281980&t=0)** - [Instructor] There are many alternatives available for securing your APIs. So let's explore a few of them. First, you have cloud based data such as [[Firebase]], where you can host APIs online and I'll be focused on the front-end or clients for the application. Firebase's team is constantly working on building a secure API offering. Needless to say there are many other players offering similar services such as [[Microsoft Azure]], Cloud [[MongoDB]], AWS, and many others. Pick your favorite player or the one that offers the features you're looking for. Then there are other frameworks such as LoopBack, Sails JS, Strapi, and many others. And for those with just a little bit of tinkering can provide a secured environment similar to the custom build we've done in this course. In the end I suggest you take a look at all of them, do a quick build, and add some models, and see what you like best. Finally, one of the major players in authentication management is Auth0. And if you don't want to create users and management of those users, Auth0 is a great service you can use and easily integrate into your API. So you take our note project and then instead of manually creating the [[User Management]] you would connect it to a service like Auth0. With a few lines of code you can get a secure user management tool that allows or prevents access to areas of your application.
>
> **[1:33](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/alternatives-for-securing-apis?u=76281980&t=93)** Again these are all tools. Define your goals, research these options to see if they meet them, and then become an expert with that options approach.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Firebase]] (2), [[User Management]] (2), [[Microsoft Azure]] (1), [[MongoDB]] (1)
> **Analogies:** such as (3), similar to (1)
> **Env Vars:** api (2), aws (1)
> **CLI Commands:** aws (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Explore and build your skills](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/explore-and-build-your-skills?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/explore-and-build-your-skills?u=76281980&t=0)** - [Instructor] This course was an introduction to security with Node. Needless to say, this is a much deeper subject and no one course could give it justice. We have a few courses on the subject, so feel free to explore them in our library. Equally important, you can continue building your models and access with the approach we've used in this course. You can add more data and user roles to your application, for example. Finally, keeping an eye out for all kinds of security threats and how to mitigate those threats is a must for any developer willing to build secure experiences for all of us. And [[OWASP]] should always be your first place to go for that type of information. Thanks very much for taking my course, and I'll see you in a bit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (1)
> **Definitions:** is a  (2)
> **CLI Commands:** node (1)
> **Env Vars:** owasp (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Emmanuel Henri]]

## Resources

- Exercise files available

## Skills Covered

- REST APIs
- Node.js

## Path Context

### In [[Explore Web Development with Node.js]]
← [[Building RESTful APIs with Node.js and Express]] | **9 of 11** | [[Node- Authentication]] →

### In [[Explore App Development with the MERN Stack]]
← [[Node Js Security]] | **11 of 13** | [[MongoDB Essential Training]] →

## Appears In

- [[Explore Web Development with Node.js]]
- [[Explore App Development with the MERN Stack]]

## Related Courses

_Courses sharing skills:_

- [[Building RESTful APIs with Node.js and Express]] — Node.js, REST APIs
- [[Building RESTful APIs in Laravel]] — REST APIs
- [[WordPress- REST API]] — REST APIs
- [[Building RESTful Web APIs with Django]] — REST APIs
- [[Learning Full-Stack JavaScript Development- MongoDB, Node, and React]] — Node.js

---

[↑ Back to top](#)