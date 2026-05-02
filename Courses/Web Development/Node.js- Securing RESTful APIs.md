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
created: 2026-05-02
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

#### Securing Node RESTful APIs
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/securing-node-restful-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/securing-node-restful-apis?u=76281980&t=0)** - [Emmanuel] Building an application is always exciting until you realize it is missing some key security features.
>
> **[0:07](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/securing-node-restful-apis?u=76281980&t=7)** Until you implement these measures, you might be putting your users, application data, and core of your functions at risk.
>
> **[0:14](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/securing-node-restful-apis?u=76281980&t=14)** Understanding the resources and the tools available to you to implement secured APIs is what this course is about.
>
> **[0:21](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/securing-node-restful-apis?u=76281980&t=21)** Hi, I'm Emmanuel Henri and having worked on multiple large scale projects where security was always top of mind, it'll be my pleasure to support you on this journey.
>
> **[0:32](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/securing-node-restful-apis?u=76281980&t=32)** First, we'll look at the top web application threats and what are the main resources to learn more about them.
>
> **[0:38](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/securing-node-restful-apis?u=76281980&t=38)** Then, we'll give you an introduction on OWASP, one of the main resource on security.
>
> **[0:44](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/securing-node-restful-apis?u=76281980&t=44)** Next, we'll take a look at what you need to put together to build your own node and Express secure API.
>
> **[0:50](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/securing-node-restful-apis?u=76281980&t=50)** And finally, we'll explore a few other libraries built for access control.
>
> **[0:54](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/securing-node-restful-apis?u=76281980&t=54)** So if you're ready to learn more about node security, fire up your favorite editor and let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security]] (4), application (2), node (2), data (1), web application (1)
> **CLI Commands:** node (2)
> **Env Vars:** owasp (1), api (1)
> **Speakers:** - [emmanuel] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/what-you-should-know?u=76281980&t=0)** - As this course is an expiration of how to build secured APIs with a few libraries and node, some basic understanding of node, npm, and it's commands isn't a must, but will help you.
>
> **[0:11](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/what-you-should-know?u=76281980&t=11)** Next, experience with JavaScript, especially being familiar with the latest syntax, is essential for this course.
>
> **[0:19](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/what-you-should-know?u=76281980&t=19)** As you'll see, I'm running on a Mac, but you can follow along on a PC, as the tools work exactly the same on both platforms.
>
> **[0:26](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/what-you-should-know?u=76281980&t=26)** Also, I'm using VS Code as my code editor but feel free to use whatever tool you prefer, although I'd recommend using an editor with a built-in terminal.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** node (2), [[npm]] (1), next (1), [[JavaScript]] (1)
> **CLI Commands:** node (2), npm (1)
> **Tools:** vs code (1), terminal (1)
> **Definitions:** is an  (1)
> **Speakers:** - as (1)


### 1. Setting Up

[↑ Back to Table of Contents](#table-of-contents)

#### Overview of the security threats
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/overview-of-the-security-threats?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/overview-of-the-security-threats?u=76281980&t=0)** - There's a growing list of threats for web developers, and keeping abreast of all these security issues must be on your mind daily.
>
> **[0:07](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/overview-of-the-security-threats?u=76281980&t=7)** So beyond the scope of this course, you need to continue reading on the subject and looking at the common techniques and tools to prevent these issues.
>
> **[0:15](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/overview-of-the-security-threats?u=76281980&t=15)** OWASP, which I will introduce shortly, is a great place to start and where I always go to understand the latest threats and how to mitigate them.
>
> **[0:24](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/overview-of-the-security-threats?u=76281980&t=24)** Prevention should always be your number one priority over dealing with an attack after the fact.
>
> **[0:30](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/overview-of-the-security-threats?u=76281980&t=30)** So here is a brief list of the top five most recurring attacks.
>
> **[0:35](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/overview-of-the-security-threats?u=76281980&t=35)** The first one is injection attacks.
>
> **[0:37](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/overview-of-the-security-threats?u=76281980&t=37)** This is when untrusted data is sent to an interpreter as part of a command or a query.
>
> **[0:43](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/overview-of-the-security-threats?u=76281980&t=43)** The second one is broken authentication.
>
> **[0:46](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/overview-of-the-security-threats?u=76281980&t=46)** Often the implementation of the authentication is broken and therefore a great opportunity for attackers to get passwords, tokens, and more.
>
> **[0:55](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/overview-of-the-security-threats?u=76281980&t=55)** The third one is sensitive data exposure.
>
> **[0:58](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/overview-of-the-security-threats?u=76281980&t=58)** More often than not, the APIs don't protect properly sensitive information and therefore easily provides opportunities for identity theft and other bad information leaks.
>
> **[1:09](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/overview-of-the-security-threats?u=76281980&t=69)** The fourth one is XML entities.
>
> **[1:12](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/overview-of-the-security-threats?u=76281980&t=72)** Older or poorly written XML processors can be exploited with XML injection with hostile content.
>
> **[1:19](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/overview-of-the-security-threats?u=76281980&t=79)** And the last one is broken access control.
>
> **[1:21](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/overview-of-the-security-threats?u=76281980&t=81)** Restrictions on what users can access is often poorly implemented and allows other users to see sensitive data.
>
> **[1:28](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/overview-of-the-security-threats?u=76281980&t=88)** So this is five of the most reported attacks, but there are more, and the first place I would go to in order to get a good grasp of all these is to the OWASP Top 10 report, which you can get from this link.
>
> **[1:41](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/overview-of-the-security-threats?u=76281980&t=101)** With this brief overview of the top attacks, hopefully it gives you a starting point for your research.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (3), [[OWASP]] (2), web (1), [[Security]] (1), [[Tokens]] (1)
> **Env Vars:** xml (3), owasp (2)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (2)
> **Speakers:** - there (1)

#### Introduction to OWASP
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-owasp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-owasp?u=76281980&t=0)** - [Instructor] If you are serious about security, OWASP is always a great place to get started in your research for potential threats and solutions.
>
> **[0:08](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-owasp?u=76281980&t=8)** It is called the Open Web Application Security Project, or OWASP, and includes a big community and many resources available to you.
>
> **[0:17](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-owasp?u=76281980&t=17)** So go to www.[owasp.org](https://owasp.org).
>
> **[0:21](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-owasp?u=76281980&t=21)** So first, if you are completely new to security and OWASP, head to the Social Media area and join the Facebook group, Slack channels, or any of the other potential community available.
>
> **[0:36](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-owasp?u=76281980&t=36)** Then, if you want to get more information on any kind of attacks by name, go to the Reference area right here.
>
> **[0:44](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-owasp?u=76281980&t=44)** So for example, if you go into the Attacks section, you can find any sort of attacks by name right here.
>
> **[0:51](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-owasp?u=76281980&t=51)** So for example, if we're looking for a brute force attack, you can find it in B, right here and then you can click on that link and get more information on that specific attack.
>
> **[1:01](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-owasp?u=76281980&t=61)** Now let's get back to the main page.
>
> **[1:03](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-owasp?u=76281980&t=63)** And if you'd like to get actual solutions or code snippets on several security threats, head to the Code Snippets area, which is right below the Attack section, like so.
>
> **[1:13](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-owasp?u=76281980&t=73)** And then the same thing goes for this section, you can find it by alphabetical order.
>
> **[1:19](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-owasp?u=76281980&t=79)** Now let's get back again to the main page.
>
> **[1:22](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-owasp?u=76281980&t=82)** And last, I'd suggest you visit also the Vulnerability section to read on potential areas where your applications might be vulnerable to threats.
>
> **[1:31](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-owasp?u=76281980&t=91)** And this is in the Reference area again and you can click on this link right here and get a little bit more information, again, by alphabetical order.
>
> **[1:42](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-owasp?u=76281980&t=102)** This site is full of resources to get you started and help you in your research.
>
> **[1:46](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-owasp?u=76281980&t=106)** So make sure to subscribe to their mailing list to get the latest information on security threats.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security]] (5), [[OWASP]] (4), web application (1), [[Slack]] (1)
> **CLI Commands:** find (3), make (1)
> **Env Vars:** owasp (3)
> **UI Navigation:** go to (2), click on (1)
> **Analogies:** for example (2)
> **URLs:** [owasp.org](https://owasp.org) (1)
> **Tools:** slack (1)
> **Definitions:** is called (1)

#### Introduction to JWT
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-jwt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-jwt?u=76281980&t=0)** - [Instructor] JWT, or JSON Web Token, is an open standard that is used to securely transmit information in between parties.
>
> **[0:08](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-jwt?u=76281980&t=8)** The JSON object primarily consists of three items, a header, the payload, and the signature.
>
> **[0:15](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-jwt?u=76281980&t=15)** So go to [jwt.io](https://jwt.io) and then scroll all the way down to when you see the Encoded and the Decoded section here.
>
> **[0:24](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-jwt?u=76281980&t=24)** That's going to help you understand what I'm just about to explain.
>
> **[0:28](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-jwt?u=76281980&t=28)** So the header has usually two parts, the type of token and the hashing algorithm used to encrypt the token.
>
> **[0:37](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-jwt?u=76281980&t=37)** Then, the payload consists of the metadata from the request party that is required from the server.
>
> **[0:43](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-jwt?u=76281980&t=43)** Some typical information you'll see in the payload are issuer of the request, expiration, name, et cetera.
>
> **[0:51](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-jwt?u=76281980&t=51)** Finally, the signature is what proves the requester is who he says he is and is how the request is properly validated, which is what you see in this section.
>
> **[1:01](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-jwt?u=76281980&t=61)** Services like AuthO uses JWT and we talk briefly about the service later on.
>
> **[1:06](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-jwt?u=76281980&t=66)** In fact, the JWT documentation was crafted by the AuthO team.
>
> **[1:11](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-jwt?u=76281980&t=71)** So what is the use of JWT?
>
> **[1:14](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-jwt?u=76281980&t=74)** This is the best way to securely transmit information across parties on the web.
>
> **[1:18](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-jwt?u=76281980&t=78)** So the payload could be used for any type of information you'd like to transmit from two parties.
>
> **[1:23](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-jwt?u=76281980&t=83)** And quite evidently, this can be used to authenticate a user.
>
> **[1:28](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-jwt?u=76281980&t=88)** So when the user is registered to a site, then the token will be used to validate the user as he makes several requests for data.
>
> **[1:35](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-jwt?u=76281980&t=95)** So there you have it.
>
> **[1:36](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-jwt?u=76281980&t=96)** Let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (2), web (2), [[Metadata]] (1), data (1)
> **Env Vars:** jwt (4), json (2)
> **URLs:** [jwt.io](https://jwt.io) (1)
> **UI Navigation:** go to (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Introduction to Postman
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-postman?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-postman?u=76281980&t=0)** - [Instructor] In this course, at some point, we'll need to be able to test and use the API endpoints.
>
> **[0:05](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-postman?u=76281980&t=5)** This is where Postman will be used to allow us to get data, post new items, update, or delete them.
>
> **[0:12](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-postman?u=76281980&t=12)** So go to [getpostman.com](https://getpostman.com) and then scroll to the button right here, and then click download the app, and then download the version for your OS.
>
> **[0:22](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-postman?u=76281980&t=22)** This works on Mac and Windows as well.
>
> **[0:25](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-postman?u=76281980&t=25)** So you can actually use it for Linux as well, but I've never tried it, so I don't know if it's going to look the same, but feel free to do so if you are on Linux.
>
> **[0:33](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-postman?u=76281980&t=33)** Once you have this package, install it, it's fairly simple.
>
> **[0:37](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-postman?u=76281980&t=37)** And then you need to connect it to either your Google account or sign up to connect all of your requests directly inside of the application.
>
> **[0:45](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-postman?u=76281980&t=45)** So once you have it installed, it looks something like this.
>
> **[0:49](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-postman?u=76281980&t=49)** And this is where you can actually make requests.
>
> **[0:51](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-postman?u=76281980&t=51)** At the top here, you can select the protocol that you'd like to make a request from, so get post, put, and all the usual suspects.
>
> **[0:59](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-postman?u=76281980&t=59)** Then you enter the URL, and then you can enter the params, authorization, if you have any request that needs that.
>
> **[1:07](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-postman?u=76281980&t=67)** And then you can enter the headers if you have any specific headers to enter, and then the body of your request.
>
> **[1:14](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-postman?u=76281980&t=74)** So the key value pair that you need to send data to.
>
> **[1:17](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-postman?u=76281980&t=77)** So for example, if you're adding new contacts into your CRM application, then you can enter the key value pairs directly in this form here.
>
> **[1:26](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-postman?u=76281980&t=86)** But one of the things that I really like about this application is that it provides snippets of code for your application or language you're using.
>
> **[1:35](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-postman?u=76281980&t=95)** So if you want to use any of that code, when you made your request, you can click on code here, and then you're going to get the code for your specific language.
>
> **[1:44](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-postman?u=76281980&t=104)** So for example, if we're using node JS native, then this is the code that you would enter into your front end.
>
> **[1:51](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-postman?u=76281980&t=111)** If you're using any other languages, so for example, C, C sharp, Go, and so on, so forth, you can get the snippets of code for those specific language.
>
> **[2:00](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-postman?u=76281980&t=120)** So for example, java, you can click here and get the code for that particular language.
>
> **[2:07](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/introduction-to-postman?u=76281980&t=127)** So this is how you can use that application to make requests, and you can leave it open while we're doing this course, in case you need to make any tests with your application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (6), data (2), [[Linux]] (2), api (1), [[Windows]] (1)
> **CLI Commands:** make (4), node (1)
> **Analogies:** for example (4)
> **Env Vars:** api (1), url (1), crm (1)
> **UI Navigation:** go to (1), select the (1), click on (1)
> **Exercise Files:** download the (2)
> **URLs:** [getpostman.com](https://getpostman.com) (1)
> **Tools:** postman (1)


### 2. Setting Up the Node API

[↑ Back to Table of Contents](#table-of-contents)

#### Base project template intro
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=0)** - [Instructor] Let's get started with building our node express project first.
>
> **[0:04](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=4)** So first, we'll initialize a new node project that installs some dependencies, and finally add the files from a project built in my node and express API course in the LinkedIn library.
>
> **[0:16](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=16)** So before we get started with our base project, if you don't have MongoDB installed, please go to their website on [mongodb.com](https://mongodb.com) and install it, as we'll need it to run the new project.
>
> **[0:29](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=29)** If you need help installing it, go through their video on the subject in the same course I just mentioned.
>
> **[0:35](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=35)** When you have it installed, come back to this video, and I'll wait for you.
>
> **[0:39](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=39)** When you're ready to make sure your Mongo database is running, you can test it with a tool called Compass that is directly on the MongoDB site.
>
> **[0:48](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=48)** So you can install Compass, and then once you have Compass installed, you'll be able to see if the database is working.
>
> **[0:55](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=55)** So let's take a look at Compass, and it looks like this.
>
> **[0:59](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=59)** So when you run Compass, it basically asks you to connect to the database on your system, and if it's a successful connection, you're going to see the database that are available on that local host, port 27017.
>
> **[1:14](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=74)** So eventually when we run our application, you're going to see the database that is related to that application appear on Compass.
>
> **[1:21](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=81)** You can also use a tool that I've used a lot in the past called Robo T, but Compass does the same job across Windows and Mac, so feel free to use Compass or any other tools that you use to test your database.
>
> **[1:34](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=94)** All right, so let's switch to VS Code now.
>
> **[1:37](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=97)** So what I'm going to do first, before we actually open VS Code, I'm going to create the folder where we'll install and add the files for our project.
>
> **[1:46](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=106)** So I'm going to go on the desktop and right click, create a new folder, and I'm going to call this one Security.
>
> **[1:58](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=118)** And once you have it installed, what you can do is drag and drop it directly on VS Code, like so, and on Windows, you can right click on the folder and open it inside of VS Code.
>
> **[2:10](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=130)** Now we have the folder inside of VS Code, and we can start installing the dependencies directly inside of that folder.
>
> **[2:17](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=137)** So let's go ahead and bring up the terminal so you can go on terminal and click on new terminal, like so.
>
> **[2:26](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=146)** And then let's go ahead and install the dependencies.
>
> **[2:29](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=149)** So what I'm going to do first is do an NPM in it, so I initialize a new project inside of that folder with node, and then I'm going to use the double ampersand to add the dependencies directly inside of our package.json file.
>
> **[2:45](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=165)** So the double ampersand, if you're not familiar with it, allows us to run a command first, and then once this command is executed, run the second one.
>
> **[2:55](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=175)** If you want to run all the commands at once, you can use the single ampersand.
>
> **[3:00](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=180)** But for this case, it's not going to work because we need to initialize our node project first before we install the dependencies.
>
> **[3:07](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=187)** So what we're going to install on that project, let's go and do NPM install.
>
> **[3:13](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=193)** And the ones that we need to install is first body parser, then we need to install express, mongoose, nodemon, and then let's do the double ampersand again, and we're going to install the dev dependencies, so let's do NPM install, or you can do the I for shortening the install if you want to.
>
> **[3:38](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=218)** And I'm going to do dash dash save dash dev, and these are the dependencies that I want to install on the dev side, the first one is babel dash CLI, then babel dash preset dash environment, so ENV.
>
> **[4:00](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=240)** The last one is babel dash preset dash stage dash zero.
>
> **[4:07](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=247)** So once you have all this typed, go ahead and hit return, and it's going to initialize your project first, so you can answer all the default questions.
>
> **[4:16](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=256)** I'm going to return on most of 'em.
>
> **[4:20](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=260)** And I'm going to type my name for author.
>
> **[4:24](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=264)** And then, yes.
>
> **[4:26](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=266)** And then what's going to happen after that, because we used the double ampersand, it's going to first install all the regular dependencies, and then the dev dependencies.
>
> **[4:37](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=277)** And now, you can take a look at the package.json file by clicking on it.
>
> **[4:41](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=281)** And you're going to see the dependencies that we've installed here, and then the dev dependencies that we've installed.
>
> **[4:48](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=288)** Perfect.
>
> **[4:49](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=289)** So now, what we need to do is copy the files from the original project that I created in the other course, so let's go back to our desktop, and I'm going to open the exercise files.
>
> **[5:01](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=301)** Click on resources, project, and then copy all the files that I have on that folder inside of the project.
>
> **[5:10](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=310)** Just make sure that you're seeing the babel RC file.
>
> **[5:13](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=313)** If you don't, your system is not showing hidden files.
>
> **[5:18](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=318)** So if you don't see it, do a search in Google and find out how to show hidden files in your system.
>
> **[5:24](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=324)** But make sure you copy this file, because if you don't, your project is not going to work.
>
> **[5:29](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=329)** So you need to have that file.
>
> **[5:31](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=331)** So let's copy these files, and then put them inside of the security folder by doing command V, or paste.
>
> **[5:39](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=339)** And I have all my files inside of that project.
>
> **[5:43](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/base-project-template-intro?u=76281980&t=343)** So now that we have our dependencies installed, let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (6), node (5), express (3), [[MongoDB]] (3), [[npm]] (3)
> **Prerequisites:** install (14), you need to have (1)
> **CLI Commands:** node (5), make (3), npm (3), mongo (1), find (1)
> **Tools:** vs code (5), terminal (3)
> **UI Navigation:** click on (3), go to (1), switch to (1), drag and drop (1), open the (1)
> **Env Vars:** npm (3), api (1), cli (1), env (1)
> **File Paths:** package.json (2)
> **URLs:** [mongodb.com](https://mongodb.com) (1)

#### Finalize the setup for the project
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=0)** - [Instructor] Let's finalize our base server by adding a few elements to our code and then test it to make sure it works.
>
> **[0:06](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=6)** So the first thing I'm going to do is add a start command inside our scripts in the package.json file.
>
> **[0:12](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=12)** So if you don't have it open, click on package.json file and then we're going to reformat this particular script here.
>
> **[0:20](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=20)** So I'm going to first change test to start and then inside of that command here, I'm going to change a few things.
>
> **[0:28](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=28)** So this will allow us to start the server and then run it with nodemon.
>
> **[0:33](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=33)** So let's go ahead and use nodemon.
>
> **[0:36](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=36)** And we're going to start with the index file so that's the start file which is right here and I'm going to show you what is inside of that project momentarily so let's finish our code first.
>
> **[0:47](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=47)** So let's do index.js.
>
> **[0:50](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=50)** And we're going to execute it with babel-node which will transpile the latest version of JavaScript into a readable code for the browser.
>
> **[1:03](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=63)** And then use the command -e and look for js files.
>
> **[1:09](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=69)** Okay, so now we can save this.
>
> **[1:11](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=71)** So what I'm going to show you now is what this project is made of.
>
> **[1:14](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=74)** So first of all, it's a Node and an Express server that we are running with Mongoose to connect to the database and then we're using bodyparser to transpile the code that's coming or the requests that are coming directly from the browser and then in the src file here, you're going to see controllers to execute the routes and then the models.
>
> **[1:39](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=99)** So the controllers are the commands that are going to execute the commands inside of the database and the routes are basically where we're going to execute those commands.
>
> **[1:50](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=110)** So this is mainly a base server that we're going to use for security purposes.
>
> **[1:55](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=115)** Okay, so now that we've seen what's inside the code, let's run it.
>
> **[2:00](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=120)** So I'm going to do npm start and this is going to work because of what?
>
> **[2:03](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=123)** Because of the command that we just created inside of our package.json file and as I do npm start, if the database is running in the background, you should see this command without any errors.
>
> **[2:16](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=136)** If you're seeing any errors, it could happen because frameworks are changing all the time.
>
> **[2:22](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=142)** If you see anything in here, read the warnings, see if there's a fix for it and most often than not, you're going to have them fixed directly in the error message.
>
> **[2:32](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=152)** So if you see anything different here, then read through the console messages and fix it.
>
> **[2:37](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=157)** So for example, in between the first version of this course and this version, there was some errors around Mongo which we fixed inside of the index here.
>
> **[2:48](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=168)** So we've actually added some piece of a code here that allows us to use a NewUrlParser and UnifiedTopology which is fairly new with Mongo.
>
> **[2:58](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=178)** All right, so now that we have our server running, let's go to Postman.
>
> **[3:03](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=183)** And we're going to do a Get request.
>
> **[3:06](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=186)** So I'm going to do localhost.
>
> **[3:10](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=190)** Let's do 3000 and I'm going to go for contacts which is basically the route that will execute the controller so if we go back to our code, and look into the routes, the contacts route will run the controller in getContacts.
>
> **[3:30](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=210)** If we go into getContacts inside of the controllers, it's going to get all the contacts from the database.
>
> **[3:37](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=217)** All right, so let's go and run this in Postman.
>
> **[3:40](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=220)** I don't need to enter anything in the body because this is a plain request to get all the contacts.
>
> **[3:46](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=226)** I send it to the server and right now, it's returning nothing because there's nothing in this database.
>
> **[3:52](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=232)** Okay, so let's go ahead and add a new contact.
>
> **[3:55](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=235)** So if we go ahead and the first one is firstName.
>
> **[4:02](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=242)** Manny and if we want to make sure we can go back to the model so if we go back to VS Code and we take a look at the crmModel, we can take a look at what it takes.
>
> **[4:13](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=253)** So firstName, lastName so those two are required and email, company, phone doesn't need to be there.
>
> **[4:20](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=260)** So we can really create a new contact with just a few name and the last name.
>
> **[4:24](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=264)** So let's go back to Postman.
>
> **[4:28](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=268)** And we have the firstName entered.
>
> **[4:30](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=270)** And let's go to lastName.
>
> **[4:36](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=276)** Henri.
>
> **[4:37](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=277)** And now let's make sure we do a POST.
>
> **[4:44](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=284)** And let's go ahead and send it.
>
> **[4:48](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=288)** And now the database has created this brand new contact inside of our database.
>
> **[4:53](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=293)** So now if we go back and do a Get again to all the contacts, we're going to get a list of all the contacts inside of the database.
>
> **[5:04](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=304)** So right now we just have this one that we just created.
>
> **[5:07](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=307)** So everything is working as it should.
>
> **[5:10](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=310)** Now we're ready to secure this brand new project.
>
> **[5:13](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-the-setup-for-the-project?u=76281980&t=313)** Let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (8), [[JSON]] (3), node (2), [[npm]] (2), [[JavaScript]] (1)
> **CLI Commands:** make (3), node (2), npm (2), mongo (2)
> **Code Identifiers:** firstname (3), getcontacts (2), lastname (2), crmmodel (1)
> **File Paths:** package.json (3), index.js (1)
> **Tools:** postman (3), vs code (1)
> **Cross-References:** go back to (3)
> **UI Navigation:** go to (2), click on (1)
> **Env Vars:** post (1)

#### Create the user model
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/create-the-user-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/create-the-user-model?u=76281980&t=0)** - [Instructor] The next step in building a secured API is to add users that can register and log into the application.
>
> **[0:06](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/create-the-user-model?u=76281980&t=6)** And for that to happen, we need a user schema.
>
> **[0:09](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/create-the-user-model?u=76281980&t=9)** So let's get back to VS Code, and in the models folder, I'll create a few file.
>
> **[0:14](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/create-the-user-model?u=76281980&t=14)** So I'm going to go ahead and click new file here, and then call this user model dot JS.
>
> **[0:25](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/create-the-user-model?u=76281980&t=25)** And if you created that file outside of the folder here, all you have to do is drag and drop that file inside of the folder, and then yes, move it, and then the file's going to be in the right folder.
>
> **[0:39](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/create-the-user-model?u=76281980&t=39)** So let's go ahead and start by importing mongoose from mongoose.
>
> **[0:49](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/create-the-user-model?u=76281980&t=49)** And then, let's go ahead and create a variable that we'll call schema.
>
> **[0:54](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/create-the-user-model?u=76281980&t=54)** And that looks very similar to this CR model here.
>
> **[0:57](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/create-the-user-model?u=76281980&t=57)** So if you don't want to waste cycles in typing all these extra stuff, what you can do is copy and paste that section here, like so, and then bring it back to the model here.
>
> **[1:12](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/create-the-user-model?u=76281980&t=72)** So you have the first line that we need, and then instead of contact schema, what we'll do is user schema.
>
> **[1:21](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/create-the-user-model?u=76281980&t=81)** And then we can work directly inside of that file.
>
> **[1:24](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/create-the-user-model?u=76281980&t=84)** So the created date is going to be there as well, and what we're going to do is remove those two here.
>
> **[1:30](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/create-the-user-model?u=76281980&t=90)** So I'm going to remove company and phone.
>
> **[1:34](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/create-the-user-model?u=76281980&t=94)** And then reuse what we have in here to create the new elements of a user.
>
> **[1:39](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/create-the-user-model?u=76281980&t=99)** So the first one is going to be username, and it's of type string, so the same.
>
> **[1:45](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/create-the-user-model?u=76281980&t=105)** It is required, and what we're going to do is, and then, what we're going to do is type true for that.
>
> **[1:52](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/create-the-user-model?u=76281980&t=112)** And then we're going to do email.
>
> **[1:56](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/create-the-user-model?u=76281980&t=116)** And again, we're going to do true.
>
> **[1:59](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/create-the-user-model?u=76281980&t=119)** And it's still a string, so we're good there.
>
> **[2:03](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/create-the-user-model?u=76281980&t=123)** And then, we're going to use hash password, so we're going to create a field called hashpassword, so don't forget the H.
>
> **[2:11](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/create-the-user-model?u=76281980&t=131)** And then for this one, is also a type string, and then also required.
>
> **[2:19](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/create-the-user-model?u=76281980&t=139)** Perfect.
>
> **[2:21](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/create-the-user-model?u=76281980&t=141)** So what we've created here is a user schema that we're going to leverage when we create new users.
>
> **[2:28](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/create-the-user-model?u=76281980&t=148)** So when we register a new user, this is the schema that's going to check that we have all these elements in the data that we're passing to the server.
>
> **[2:36](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/create-the-user-model?u=76281980&t=156)** So username, email, and hash password.
>
> **[2:39](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/create-the-user-model?u=76281980&t=159)** And then, in the following video, we're going to install bcrypt, and then make sure that the hash password matches the password that is passed in the data that we're doing the request from.
>
> **[2:50](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/create-the-user-model?u=76281980&t=170)** So let's move on and work on that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (2), next (1), api (1), application (1)
> **CLI Commands:** make (1)
> **Env Vars:** api (1)
> **Tools:** vs code (1)
> **UI Navigation:** drag and drop (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Best Practices:** don't forget (1)

#### Add bcrypt password hashing
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-bcrypt-password-hashing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-bcrypt-password-hashing?u=76281980&t=0)** - [Instructor] Okay, so now what we're going to do is start writing code related to bcrypt.
>
> **[0:05](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-bcrypt-password-hashing?u=76281980&t=5)** If you're not familiar with bcrypt, it's a package that allows you to encrypt and decrypt data, so like a password.
>
> **[0:11](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-bcrypt-password-hashing?u=76281980&t=11)** So what we're going to do first is install bcrypt and while we're actually installing new packages, we'll also install jsonwebtoken.
>
> **[0:20](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-bcrypt-password-hashing?u=76281980&t=20)** So let's go into NPM I, or you can do install bcrypt and then jsonwebtoken.
>
> **[0:30](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-bcrypt-password-hashing?u=76281980&t=30)** We'll use jsonwebtoken later on, but I wanted to install it all on this one pass.
>
> **[0:35](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-bcrypt-password-hashing?u=76281980&t=35)** So let's go ahead and hit enter.
>
> **[0:38](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-bcrypt-password-hashing?u=76281980&t=38)** Perfect, so everything is installed.
>
> **[0:40](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-bcrypt-password-hashing?u=76281980&t=40)** So we can close the terminal for now.
>
> **[0:42](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-bcrypt-password-hashing?u=76281980&t=42)** And if you want to check, you can take a look at the package.json file, and you're going to see bcrypt installed and jsonwebtoken, so we're ready to go.
>
> **[0:51](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-bcrypt-password-hashing?u=76281980&t=51)** So now what we need to do is import bcrypt, so let's go ahead and import bcrypt from bcrypt, like so.
>
> **[1:03](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-bcrypt-password-hashing?u=76281980&t=63)** And by the way, when you have a library that you want to import specific functions or exports from that library, what you could do is do something like that, so import from the library.
>
> **[1:18](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-bcrypt-password-hashing?u=76281980&t=78)** And then do the curly braces here when you're importing something specific, and then start typing, so for example, compare, comparesync, or any specific functions that you'd like to use inside of that library.
>
> **[1:31](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-bcrypt-password-hashing?u=76281980&t=91)** But in this case, I want to use the whole library, so I'm just going to go for this particular item here.
>
> **[1:39](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-bcrypt-password-hashing?u=76281980&t=99)** So now what we need to do is create the function that will compare the password that has been sent from the request to the one that we have in the database.
>
> **[1:48](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-bcrypt-password-hashing?u=76281980&t=108)** So bcrypt will decrypt those two passwords, compare them, and then say, "yeah, it's the same password."
>
> **[1:55](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-bcrypt-password-hashing?u=76281980&t=115)** So this is the function that we're going to create now.
>
> **[1:58](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-bcrypt-password-hashing?u=76281980&t=118)** So I'm going to leverage user schema and add a method to user schema, and I'm going to call this compare password, which will have, or take as argument, the password that is coming from the request, and then the password that we have in our database, which is the hash password.
>
> **[2:22](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-bcrypt-password-hashing?u=76281980&t=142)** And then we'll create a function.
>
> **[2:26](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-bcrypt-password-hashing?u=76281980&t=146)** And in this function, we're going to return from bcrypt's function called comparesync.
>
> **[2:36](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-bcrypt-password-hashing?u=76281980&t=156)** And we're going to compare the password again that we have from the arguments in our request here, and also the hash password.
>
> **[2:47](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-bcrypt-password-hashing?u=76281980&t=167)** So this function will compare them both, make sure that they are decrypted while they're comparing, and if they're both matching, then we have a user that can login.
>
> **[3:00](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-bcrypt-password-hashing?u=76281980&t=180)** Perfect.
>
> **[3:01](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-bcrypt-password-hashing?u=76281980&t=181)** And while I'm at it, let's just make sure that we have methods, and not method.
>
> **[3:07](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-bcrypt-password-hashing?u=76281980&t=187)** Let's make sure that everything is okay.
>
> **[3:11](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-bcrypt-password-hashing?u=76281980&t=191)** Bcrypt, bcrypt, so our entire code is all good.
>
> **[3:14](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-bcrypt-password-hashing?u=76281980&t=194)** So you can save and move onto the next movie.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (2), data (1), [[npm]] (1), hit (1), [[JSON]] (1)
> **CLI Commands:** make (3), npm (1)
> **Prerequisites:** install (4)
> **File Paths:** package.json (1)
> **Env Vars:** npm (1)
> **Tools:** terminal (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 3. Securing the Node API

[↑ Back to Table of Contents](#table-of-contents)

#### Add the handlers for loginRequired
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-loginrequired?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-loginrequired?u=76281980&t=0)** - [Instructor] Okay, so let's go ahead and create the controllers for our user model.
>
> **[0:05](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-loginrequired?u=76281980&t=5)** So in the controllers folder, go ahead and click new file, and we're going to call this usercontrollers.js, and then we're going to import a few things.
>
> **[0:19](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-loginrequired?u=76281980&t=19)** So first, we're going to import mongoose from mongoose.
>
> **[0:27](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-loginrequired?u=76281980&t=27)** And then we'll import bcrypt from bcrypt.
>
> **[0:35](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-loginrequired?u=76281980&t=35)** We'll also import JWT, which we'll need soon from jsonwebtoken, which we've installed previously.
>
> **[0:46](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-loginrequired?u=76281980&t=46)** And then we'll also import the user's key mod that we just created.
>
> **[0:50](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-loginrequired?u=76281980&t=50)** Again, the tip that I gave you earlier will work in this case, so let's go ahead and do from models, and usermodel, and then, if I go ahead and start typing what are the exports available for me, like userschema, it's going to suggest that, which is a neat trick inside of VS Code.
>
> **[1:14](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-loginrequired?u=76281980&t=74)** All right, so let's go ahead and create a variable that we'll call User, and I want to do capital U.
>
> **[1:21](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-loginrequired?u=76281980&t=81)** We're going to create a model from mongoose, like so.
>
> **[1:31](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-loginrequired?u=76281980&t=91)** Which we'll call user and pass the user's key mod.
>
> **[1:37](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-loginrequired?u=76281980&t=97)** So it's expecting what we've created in the schema.
>
> **[1:40](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-loginrequired?u=76281980&t=100)** So if we go back to userschema, it's expecting this data that we have created inside of the user schema.
>
> **[1:48](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-loginrequired?u=76281980&t=108)** So when we pass this, this part of the model we're creating inside of mongoose, it's going to expect the values that we send from our request to the API.
>
> **[1:59](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-loginrequired?u=76281980&t=119)** All right, so let's create our first function, which is the login required.
>
> **[2:07](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-loginrequired?u=76281980&t=127)** And this function will take a few arguments, so I'll put in request, then response, and then next, so we can pass to the next function.
>
> **[2:17](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-loginrequired?u=76281980&t=137)** So let's go ahead and do an if statement.
>
> **[2:20](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-loginrequired?u=76281980&t=140)** So if in the request there's a user that is basically a logged in user, then go to the next function.
>
> **[2:34](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-loginrequired?u=76281980&t=154)** So when we'll use the login required inside of our routes, it's going to go through that process.
>
> **[2:39](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-loginrequired?u=76281980&t=159)** So if we have a logged in user, go ahead to the next function, which will be the function to get the data, or post data, or delete data, and so on, so forth.
>
> **[2:50](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-loginrequired?u=76281980&t=170)** Otherwise, and this is where we're going to do else, return a response status of 401.
>
> **[3:04](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-loginrequired?u=76281980&t=184)** And we'll add a message to that, which is a json message.
>
> **[3:10](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-loginrequired?u=76281980&t=190)** And the message will be unauthorized user.
>
> **[3:15](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-loginrequired?u=76281980&t=195)** So basically, if there's not a logged in user, we're going to tell through a message that this guy is not authorized to add or pull data from the database.
>
> **[3:28](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-loginrequired?u=76281980&t=208)** And that's basically it for that function.
>
> **[3:31](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-loginrequired?u=76281980&t=211)** So right now, what we've done is create a function that will check if the user is logged in.
>
> **[3:37](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-loginrequired?u=76281980&t=217)** We'll keep working on the other functions in the following videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), next (4), api (1), [[JSON]] (1), database (1)
> **Env Vars:** jwt (1), api (1)
> **Definitions:** is a  (2)
> **File Paths:** usercontrollers.js (1)
> **Cross-References:** go back to (1)
> **Tools:** vs code (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Add the handlers for registration
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-registration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-registration?u=76281980&t=0)** - [Instructor] Okay, so the next function that we need to create is the function for registering new users.
>
> **[0:06](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-registration?u=76281980&t=6)** So let's go ahead and keep working on this.
>
> **[0:08](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-registration?u=76281980&t=8)** So let's do an export of a function which we'll call register.
>
> **[0:16](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-registration?u=76281980&t=16)** And then this function takes two arguments so a request and a response.
>
> **[0:25](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-registration?u=76281980&t=25)** And then inside of that function, we'll create first a variable that we'll call newUser.
>
> **[0:36](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-registration?u=76281980&t=36)** And this function will pass a new user, so remember, we've created a variable here which basically adds the model user and passes the schema that we created earlier and we're going to use this to create a new user.
>
> **[0:51](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-registration?u=76281980&t=51)** Like so.
>
> **[0:53](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-registration?u=76281980&t=53)** Leveraging what we've created up there.
>
> **[0:56](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-registration?u=76281980&t=56)** And we'll pass from the request what is in the body.
>
> **[1:01](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-registration?u=76281980&t=61)** So remember, when we make transactions with Postman here, in the body, we're passing the data to create a new user and this is what will be in the body of the request which is here.
>
> **[1:15](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-registration?u=76281980&t=75)** So now we'll have the information for the new user and now we need to create the new user and we'll use the hashPassword of that newUser so remember in the body, there's going to be a password.
>
> **[1:35](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-registration?u=76281980&t=95)** So we'll use that and encrypt with bcrypt.password before we pass it to the database and that's why we need to in the model here to compare passwords which are encrypted but bcrypt will decrypt those passwords and then compare them.
>
> **[1:54](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-registration?u=76281980&t=114)** But we still need to pass a password that is encrypted first inside of our database.
>
> **[2:01](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-registration?u=76281980&t=121)** So we'll take the request.body.password and again, I've called this password.
>
> **[2:11](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-registration?u=76281980&t=131)** So if it's a little bit confusing to you in between hashPassword and password, remember that the request is going to send a password but in our database, it's called hashPassword like so.
>
> **[2:25](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-registration?u=76281980&t=145)** And then we'll pass the value 10.
>
> **[2:27](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-registration?u=76281980&t=147)** So this is the number that hashSync requires to encrypt so this is the algorithm.
>
> **[2:35](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-registration?u=76281980&t=155)** And then once we have this, we can save it to the database.
>
> **[2:40](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-registration?u=76281980&t=160)** So we're going to save it and first and this is the typical code that you would use in an API to send new stuff to Mongo.
>
> **[2:53](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-registration?u=76281980&t=173)** So we're going to save it.
>
> **[3:01](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-registration?u=76281980&t=181)** And I just want to fix this right away 'cause this goes outside of the curly braces just to be absolutely certain.
>
> **[3:10](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-registration?u=76281980&t=190)** So if there's an error, when we are saving inside of the database, return a response with the status of 400.
>
> **[3:25](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-registration?u=76281980&t=205)** And then send the message error so let me know what is the error if there is one.
>
> **[3:40](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-registration?u=76281980&t=220)** Else what you'll do is return the user that we just saved.
>
> **[3:46](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-registration?u=76281980&t=226)** So what we'll do is first, omit to add the password from the response because we don't want to pass back the password to the response, especially in any response you don't want to send a password back to the user or the front end because that could be used for hacking purpose and so on and so forth.
>
> **[4:11](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-registration?u=76281980&t=251)** So we are basically setting as undefined when we're passing back to the response and then we're returning a response with a JSON message which includes the user and again, the user password won't be set as the original request.
>
> **[4:28](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-registration?u=76281980&t=268)** Okay.
>
> **[4:29](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-registration?u=76281980&t=269)** So let's save this.
>
> **[4:31](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-registration?u=76281980&t=271)** Okay, so now this was the function to register a new user.
>
> **[4:35](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-registration?u=76281980&t=275)** Also using best practices for password.
>
> **[4:38](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-registration?u=76281980&t=278)** Again using best practices for security measures.
>
> **[4:41](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-registration?u=76281980&t=281)** Let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (5), next (1), data (1), api (1), [[JSON]] (1)
> **Code Identifiers:** hashpassword (3), newuser (2), hashsync (1)
> **CLI Commands:** make (1), mongo (1)
> **Env Vars:** api (1), json (1)
> **Tools:** postman (1)
> **Speakers:** - [instructor] (1)

#### Add the handlers for login
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-login?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-login?u=76281980&t=0)** - [Instruction] So the final function that we can use for our user controllers is the login function.
>
> **[0:05](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-login?u=76281980&t=5)** So basically allowing to login into the API's and once we're logged in, then we can go ahead and do transactions with the API.
>
> **[0:14](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-login?u=76281980&t=14)** So let's go ahead and do that function so we're going to call this log in.
>
> **[0:19](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-login?u=76281980&t=19)** So you create a new function and then the arguments again are the request and the response.
>
> **[0:35](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-login?u=76281980&t=35)** And then what we're going to do is go ahead and try to find a user in the database.
>
> **[0:42](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-login?u=76281980&t=42)** So findOne.
>
> **[0:48](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-login?u=76281980&t=48)** So basically, what we need to do is grab the email from the request .body .email.
>
> **[0:58](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-login?u=76281980&t=58)** So again in the request, we're going to have an email that we'll try to match to something that we have in our database.
>
> **[1:05](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-login?u=76281980&t=65)** So what we'll do and you want to go after the curly brace before the parenthesis, is do a comma and then go ahead and do an error and user and then what we'll do is keep going with a new function to check if there's a new user.
>
> **[1:27](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-login?u=76281980&t=87)** So if we get an error, we'll throw the error.
>
> **[1:36](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-login?u=76281980&t=96)** Then if if there's no user in the database, we're going to do a response of status 401 and we'll send a response in a json format as well, so we'll do a message that will say authentication failed.
>
> **[2:05](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-login?u=76281980&t=125)** No user found.
>
> **[2:12](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-login?u=76281980&t=132)** And then what we'll do is go outside of this curly brace here, so you want to make sure that you go just after what we'd just written and right here and then what we're going to do an else, if, user, so if we find a user, and then inside.
>
> **[2:36](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-login?u=76281980&t=156)** So remember, we created a function to compare the passwords so this is where we're going to use it.
>
> **[2:41](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-login?u=76281980&t=161)** So if we found a user, then let's make sure that the passwords match.
>
> **[2:46](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-login?u=76281980&t=166)** So if the user compare password from the request, again it takes two arguments.
>
> **[3:01](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-login?u=76281980&t=181)** So the first argument is the password that is being passed from the request, which is what I've explained in the previous video.
>
> **[3:11](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-login?u=76281980&t=191)** And as the second argument, user.hashpassword, so we're basically comparing the password from the database to the one passed inside of the request.
>
> **[3:27](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-login?u=76281980&t=207)** And then continue with a function.
>
> **[3:30](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-login?u=76281980&t=210)** If they don't match, so this is the negative piece, so if the user compare password doesn't match then you do the response as follow.
>
> **[3:45](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-login?u=76281980&t=225)** So we're going to do again a json message, that's authentication fail, wrong password.
>
> **[4:00](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-login?u=76281980&t=240)** Now the last piece that we need to do is if, so the last thing we need to do, is if everything else has been checked, then that means that we have a user and the password matches and then we can send a token from jwt and we'll sign it.
>
> **[4:24](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-login?u=76281980&t=264)** So basically, we're sending a token back to the response and telling the request we found somebody, the passwords match, here's the token, you can use this token to actually make transactions with the APIs.
>
> **[4:40](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-login?u=76281980&t=280)** So what I'm going to do in the token, I'm going to sign this user email, username, with the user.username.
>
> **[4:55](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-login?u=76281980&t=295)** Then also do the same, and let me just do a quick word wrap so we can see everything on the same page here.
>
> **[5:05](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-login?u=76281980&t=305)** So let's go ahead do the score id that we'll get from this user and use user id.
>
> **[5:18](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-login?u=76281980&t=318)** And then we're going to sign this with a word.
>
> **[5:23](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-login?u=76281980&t=323)** So this could be any word, but you want to make sure that you're using the same word from the request to the actual signature and the API is here.
>
> **[5:32](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-login?u=76281980&t=332)** And you'll understand this once we use that word again.
>
> **[5:35](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-login?u=76281980&t=335)** So for my Kasie, I'm going to call this one restful APIs and it could be anything so it's basically the secret word that json with token is going to use to sign your token.
>
> **[5:50](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-login?u=76281980&t=350)** Okay?
>
> **[5:51](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-login?u=76281980&t=351)** So we're all good.
>
> **[5:54](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-login?u=76281980&t=354)** Okay, so one thing that I wanted to make sure is that there's no typos anywhere that will basically break the application and actually I see one right here so password shouldn't be like that so let's fix this and save.
>
> **[6:13](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-login?u=76281980&t=373)** And everything else seems to be fine, okay.
>
> **[6:17](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-the-handlers-for-login?u=76281980&t=377)** So, now that we have all these functions completed, let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (6), database (4), api (3), [[JSON]] (3), application (1)
> **CLI Commands:** make (5), find (2)
> **Env Vars:** api (3)
> **Code Identifiers:** findone (1)
> **Cross-References:** previous video (1)
> **Definitions:** means that (1)
> **Speakers:** - [instruction] (1)

#### Finalize secured endpoints
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-secured-endpoints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-secured-endpoints?u=76281980&t=0)** - [Instructor] So we need to add our routes for registration and log in, but also make sure we add the functions that will check for a logged in user before proceeding.
>
> **[0:08](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-secured-endpoints?u=76281980&t=8)** So let's go ahead and work on this.
>
> **[0:11](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-secured-endpoints?u=76281980&t=11)** For this particular code we're going to need to work in the routes.
>
> **[0:14](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-secured-endpoints?u=76281980&t=14)** So go into the routes folder and then open the crmRoutes.
>
> **[0:20](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-secured-endpoints?u=76281980&t=20)** And the first thing we're going to do is import the functions that we've created inside of the userController.
>
> **[0:26](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-secured-endpoints?u=76281980&t=26)** So let's go ahead and do import and then what I'm going to do is do the from first, from dot dot controller, or controllers, userController,
>
> **[0:48](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-secured-endpoints?u=76281980&t=48)** like so, and then what I can do is use that to import the functions in question.
>
> **[0:56](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-secured-endpoints?u=76281980&t=56)** So for example we're going to have access to login.
>
> **[0:59](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-secured-endpoints?u=76281980&t=59)** So if I type L I'm going to see login, and then register, and then loginRequired, and these are the functions that we need.
>
> **[1:11](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-secured-endpoints?u=76281980&t=71)** So once we have these functions we can pass them to the routes.
>
> **[1:15](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-secured-endpoints?u=76281980&t=75)** So what we're going to do is pass the loginRequired to all the routes.
>
> **[1:20](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-secured-endpoints?u=76281980&t=80)** So before they actually execute the controllers for getContacts and getContactWithID it's going to execute the function loginRequired that we just created.
>
> **[1:31](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-secured-endpoints?u=76281980&t=91)** So let's go ahead and add them.
>
> **[1:33](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-secured-endpoints?u=76281980&t=93)** So I'm going to basically click and option click on every element where I want to add that function, like so.
>
> **[1:45](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-secured-endpoints?u=76281980&t=105)** And then all I need to do is type loginRequired and then comma, and you're good to go.
>
> **[1:56](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-secured-endpoints?u=76281980&t=116)** So we have now this function that will run first, check that somebody's logged in, and then run the function of getting the contacts and the same with every other function that is in this particular route.
>
> **[2:10](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-secured-endpoints?u=76281980&t=130)** Now, we also need to create the new route.
>
> **[2:13](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-secured-endpoints?u=76281980&t=133)** So remember, our users need to register first and then they also need to be able to log in.
>
> **[2:19](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-secured-endpoints?u=76281980&t=139)** So we need to create the routes for those.
>
> **[2:22](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-secured-endpoints?u=76281980&t=142)** So what we're going to do is inside of the routes function here, we're going to add an endpoint which is the first one will be the registration route.
>
> **[2:34](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-secured-endpoints?u=76281980&t=154)** So we're going to create an app.route like before.
>
> **[2:40](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-secured-endpoints?u=76281980&t=160)** And we'll name this route forward slash auth forward slash register.
>
> **[2:46](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-secured-endpoints?u=76281980&t=166)** So this is the route that we're going to need to use from Postman to register.
>
> **[2:53](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-secured-endpoints?u=76281980&t=173)** And then we're going to use the function register that we created in the controllers to register that new user.
>
> **[3:00](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-secured-endpoints?u=76281980&t=180)** So if you can remember this is this function that we created here, the register function.
>
> **[3:07](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-secured-endpoints?u=76281980&t=187)** All right, so we also need to create a route for the login.
>
> **[3:11](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-secured-endpoints?u=76281980&t=191)** So let's copy line 33 and line 34, paste it below, like so.
>
> **[3:19](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-secured-endpoints?u=76281980&t=199)** And as opposed to auth/register we're going to do auth/login or you could just do login if you want to, so let's go ahead and do that instead.
>
> **[3:30](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-secured-endpoints?u=76281980&t=210)** And then pass the right function which is the login function, like so.
>
> **[3:37](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-secured-endpoints?u=76281980&t=217)** Okay, so now we've created our route for logging in, so login route.
>
> **[3:46](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-secured-endpoints?u=76281980&t=226)** We have a new registration route, and we pass the loginRequired function on all the other routes.
>
> **[3:52](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-secured-endpoints?u=76281980&t=232)** So once we're logged in we're going to get a token from the function, and then we can use that token to actually do the other functions here.
>
> **[4:01](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-secured-endpoints?u=76281980&t=241)** So I'll add new items to our database, update them, get all the contacts from our database and so on and so forth.
>
> **[4:08](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-secured-endpoints?u=76281980&t=248)** Okay, so let's quickly take a look, just to make sure we haven't made any typos, or any big code errors.
>
> **[4:16](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-secured-endpoints?u=76281980&t=256)** And I can see right away that there's a dot missing on the post, and this one as well, and then we can save this.
>
> **[4:25](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-secured-endpoints?u=76281980&t=265)** And quickly check, I think we're all good.
>
> **[4:29](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-secured-endpoints?u=76281980&t=269)** Perfect.
>
> **[4:31](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/finalize-secured-endpoints?u=76281980&t=271)** All right, so now that we have all the new routes set up and the loginRequired added to our post and all the other endpoints, we're good to go and move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (2)
> **Code Identifiers:** loginrequired (6), usercontroller (2), crmroutes (1), getcontacts (1), getcontactwithid (1)
> **CLI Commands:** make (2)
> **UI Navigation:** open the (1), click on (1)
> **Tools:** postman (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Add JWT setup into index
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=0)** - [Instructor] Okay so now the final piece that we need to do is to do the JWT setup inside of our index.
>
> **[0:07](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=7)** So let's go into the index file right here and then what I'm going to do just Below the bodyParser setup, it doesn't matter where it is, I'm going to add the JWT setup.
>
> **[0:18](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=18)** And this is going to be used to pass a secret word and then take the headers and make sure that we match when we get the request and then pass it down to the controllers.
>
> **[0:27](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=27)** So let's go ahead and do JWT setup as the common.
>
> **[0:31](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=31)** And then we're going to do app.use.
>
> **[0:37](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=37)** And it takes a request, response, and then next.
>
> **[0:42](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=42)** So we can pass this next function.
>
> **[0:47](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=47)** And here we go.
>
> **[0:49](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=49)** So the first thing that we're going to need to do is make sure that we have headers which contains the token.
>
> **[0:57](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=57)** So first make sure that we have headers and then make sure that we have in the headers so request.headers.authorization.
>
> **[1:13](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=73)** And also make sure that in our headers, and again, so all of this is going to become very important when we make the request from Postman.
>
> **[1:21](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=81)** Want to make sure that we have authorization in the headers.
>
> **[1:24](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=84)** And also we want to make sure that we have the JWT request or name inside of the headers.
>
> **[1:32](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=92)** So all of this we're checking in here.
>
> **[1:35](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=95)** And I'm going to do a word wrap just to make sure that we're still going to be on the same screen as I type more stuff.
>
> **[1:44](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=104)** Authorization.
>
> **[1:49](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=109)** And then we're going to use a little bit of RegEx and functions with JavaScript to check for the keyword that we're going to need as the secret word.
>
> **[2:04](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=124)** So let's go ahead and add JWT.
>
> **[2:16](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=136)** And then with JSON web token we're going to validate all this.
>
> **[2:21](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=141)** So we get the data.
>
> **[2:23](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=143)** So if we have request headers and then if we have request headers authorization and if we have the word JWT in a request then we can check and verify the signature.
>
> **[2:41](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=161)** It's a lot of complex code just to make sure that what we get as a request is authorized to hit the backend or the database with new data or updated data and so on so forth.
>
> **[2:56](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=176)** So we're doing basically the same thing here.
>
> **[3:02](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=182)** And then we're checking the next thing in the array and the next thing in the array should include RESTFUL APIs.
>
> **[3:14](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=194)** Remember, we added that keyword earlier.
>
> **[3:18](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=198)** And then we'll do the usual error and then the decode.
>
> **[3:24](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=204)** So we're doing another function.
>
> **[3:30](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=210)** And if most of this doesn't make sense I'll summarize once we're done typing all the code.
>
> **[3:36](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=216)** So if we have an error
>
> **[3:46](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=226)** then let's pass the request user as undefined.
>
> **[3:56](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=236)** And then the request user decode.
>
> **[4:01](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=241)** And then jump to the next function.
>
> **[4:07](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=247)** Else, request user.
>
> **[4:12](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=252)** Again, we always need to make sure that we're not passing data back if we don't need to.
>
> **[4:20](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=260)** And that's part of what we're doing here.
>
> **[4:24](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=264)** So this is a lot of code just to make sure that we have headers and we have the proper JWT required elements when we pass a request.
>
> **[4:33](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=273)** So want to make sure that we have, like I said before, in the header the authorization and that we have the word JWT.
>
> **[4:40](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=280)** And then we want to make sure that we are passing in the header's RESTFULAPIs when we send it to the database.
>
> **[4:49](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=289)** And finally we're using an if and else statement to make sure that if we have all the elements of the request or what we need here we're not passing data back.
>
> **[5:01](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=301)** Okay so let's quickly validate that we have the import.
>
> **[5:05](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=305)** Oh, we don't, so we need to import JSON web token if we want to be able to use it.
>
> **[5:10](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=310)** So let's make sure we do that.
>
> **[5:13](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=313)** Jsonwebtoken from jsonwebtoken.
>
> **[5:19](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=319)** And let's do a quick check if we have everything that we need.
>
> **[5:23](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=323)** There's no typos.
>
> **[5:27](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=327)** Everything seems to be fine.
>
> **[5:28](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=328)** Okay, perfect, so let's save this.
>
> **[5:31](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/add-jwt-setup-into-index?u=76281980&t=331)** And now that we have our JWT setup, we're ready to test this in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (6), [[Microsoft Word|Word]] (5), data (5), [[JSON]] (2), web (2)
> **CLI Commands:** make (17)
> **Env Vars:** jwt (9), json (2), restful (1)
> **Prerequisites:** setup (5)
> **Code Identifiers:** bodyparser (1)
> **Cross-References:** in the next (1)
> **Tools:** postman (1)
> **Definitions:** is a  (1)

#### Test the API with Postman
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=0)** - [Instructor] Now let's go ahead and test our implementation and do it in Postman.
>
> **[0:05](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=5)** So the first thing we're going to do is make sure our server is running so I'm going to do npm start.
>
> **[0:12](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=12)** And if you see any error messages because you made some typos or there's something that's missing, read the console for the error messages and go back to those videos just to make sure.
>
> **[0:22](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=22)** All right, so let's switch to Postman.
>
> **[0:25](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=25)** So the first thing we're going to do is try to get the list of contacts without entering any token as if we're unauthorized.
>
> **[0:32](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=32)** So let's go ahead and do that.
>
> **[0:33](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=33)** So let's send for contacts and again, we are getting the unauthorized user.
>
> **[0:38](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=38)** So that's normal behavior.
>
> **[0:40](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=40)** The second thing we're going to do now is create a new user.
>
> **[0:44](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=44)** So I'm going to change this it auth and register like so.
>
> **[0:52](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=52)** And we need a few things when we register in the Body.
>
> **[0:55](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=55)** So we need a username and if you're not sure, what you can do is go back to the code here and look into your user model.
>
> **[1:07](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=67)** And you're going to see that we need a username, email and a password.
>
> **[1:11](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=71)** So let's go ahead and do that.
>
> **[1:14](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=74)** So we're going to do a username so I'm going to do emmanuelhenri and then email, I'm going to do me@[me2.com](https://me2.com).
>
> **[1:28](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=88)** This is not a real email by the way and then a password.
>
> **[1:34](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=94)** And again, I'm entering password and not hash password because password is the data that we're sending to the APIs and then the APIs use hash password inside of the database.
>
> **[1:46](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=106)** So I'm going to do something like test1234.
>
> **[1:50](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=110)** And I'm going to register.
>
> **[1:52](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=112)** So this is a POST and not a GET so we need to select the right method.
>
> **[1:57](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=117)** So POST and then let's send it and then it says that it has created a user so we're good.
>
> **[2:04](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=124)** All right, so now we need to log in before we can do anything in this API.
>
> **[2:09](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=129)** So let's go ahead and log in and remember, the route for login is simply login.
>
> **[2:17](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=137)** And again, this is a POST and we can reuse the same information so we can go ahead and send this to the APIs.
>
> **[2:25](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=145)** And now we're getting a token.
>
> **[2:27](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=147)** So in theory, your front end would leverage that token to make transactions with the API.
>
> **[2:33](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=153)** So what we're going to do is simulate this through Postman by you want to copy everything in between the quotation marks like so and then what we're going to do is for example, get the list of contacts, so we're going to go to GET.
>
> **[2:49](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=169)** Do contacts like we've done before like so.
>
> **[2:52](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=172)** And now we need to enter a few things.
>
> **[2:54](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=174)** So there's nothing that we need for a get contact so we can remove that data here.
>
> **[3:00](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=180)** And then we send some things inside of our headers.
>
> **[3:04](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=184)** So we need to send an authorization.
>
> **[3:09](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=189)** And we need to add JWT and then paste the token.
>
> **[3:15](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=195)** So if you remember, this is the process that we've entered inside of our controller and this is where we're going to check if there is a user logged in through the command that we've created inside of our index here.
>
> **[3:31](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=211)** So this.
>
> **[3:31](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=211)** So this is going to check that we have JWT plus the token that we have and this is the keyword that will check our token here.
>
> **[3:41](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=221)** So let's go back to Postman.
>
> **[3:44](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=224)** And with these commands, we can basically make a transaction with the API and we should be good to go.
>
> **[3:50](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=230)** So let's go ahead and send.
>
> **[3:53](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=233)** And if you're seeing a list of contacts, that means that you've sent the right information to the server.
>
> **[3:59](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=239)** So therefore, the authorization token with JWT, if you're seeing the list of contacts inside of your database, it's all good.
>
> **[4:08](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=248)** So you have your own Node base authentication system with an API attached to it.
>
> **[4:15](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/test-the-api-with-postman?u=76281980&t=255)** Let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** api (4), data (2), database (2), [[npm]] (1), node (1)
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

#### Alternatives for securing APIs
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/alternatives-for-securing-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/alternatives-for-securing-apis?u=76281980&t=0)** - [Instructor] There are many alternatives available for securing your APIs.
>
> **[0:04](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/alternatives-for-securing-apis?u=76281980&t=4)** So let's explore a few of them.
>
> **[0:06](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/alternatives-for-securing-apis?u=76281980&t=6)** First, you have cloud based data such as Firebase, where you can host APIs online and I'll be focused on the front-end or clients for the application.
>
> **[0:16](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/alternatives-for-securing-apis?u=76281980&t=16)** Firebase's team is constantly working on building a secure API offering.
>
> **[0:21](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/alternatives-for-securing-apis?u=76281980&t=21)** Needless to say there are many other players offering similar services such as Microsoft Azure, Cloud MongoDB, AWS, and many others.
>
> **[0:34](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/alternatives-for-securing-apis?u=76281980&t=34)** Pick your favorite player or the one that offers the features you're looking for.
>
> **[0:40](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/alternatives-for-securing-apis?u=76281980&t=40)** Then there are other frameworks such as LoopBack, Sails JS, Strapi, and many others.
>
> **[0:49](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/alternatives-for-securing-apis?u=76281980&t=49)** And for those with just a little bit of tinkering can provide a secured environment similar to the custom build we've done in this course.
>
> **[0:56](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/alternatives-for-securing-apis?u=76281980&t=56)** In the end I suggest you take a look at all of them, do a quick build, and add some models, and see what you like best.
>
> **[1:03](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/alternatives-for-securing-apis?u=76281980&t=63)** Finally, one of the major players in authentication management is Auth0.
>
> **[1:08](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/alternatives-for-securing-apis?u=76281980&t=68)** And if you don't want to create users and management of those users, Auth0 is a great service you can use and easily integrate into your API.
>
> **[1:17](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/alternatives-for-securing-apis?u=76281980&t=77)** So you take our note project and then instead of manually creating the user management you would connect it to a service like Auth0.
>
> **[1:25](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/alternatives-for-securing-apis?u=76281980&t=85)** With a few lines of code you can get a secure user management tool that allows or prevents access to areas of your application.
>
> **[1:33](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/alternatives-for-securing-apis?u=76281980&t=93)** Again these are all tools.
>
> **[1:35](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/alternatives-for-securing-apis?u=76281980&t=95)** Define your goals, research these options to see if they meet them, and then become an expert with that options approach.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (2), [[Firebase]] (2), application (2), api (2), management (2)
> **Analogies:** such as (3), similar to (1)
> **Env Vars:** api (2), aws (1)
> **CLI Commands:** aws (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Explore and build your skills
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/explore-and-build-your-skills?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/explore-and-build-your-skills?u=76281980&t=0)** - [Instructor] This course was an introduction to security with Node.
>
> **[0:03](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/explore-and-build-your-skills?u=76281980&t=3)** Needless to say, this is a much deeper subject and no one course could give it justice.
>
> **[0:08](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/explore-and-build-your-skills?u=76281980&t=8)** We have a few courses on the subject, so feel free to explore them in our library.
>
> **[0:12](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/explore-and-build-your-skills?u=76281980&t=12)** Equally important, you can continue building your models and access with the approach we've used in this course.
>
> **[0:19](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/explore-and-build-your-skills?u=76281980&t=19)** You can add more data and user roles to your application, for example.
>
> **[0:22](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/explore-and-build-your-skills?u=76281980&t=22)** Finally, keeping an eye out for all kinds of security threats and how to mitigate those threats is a must for any developer willing to build secure experiences for all of us.
>
> **[0:33](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/explore-and-build-your-skills?u=76281980&t=33)** And OWASP should always be your first place to go for that type of information.
>
> **[0:38](https://www.linkedin.com/learning/node-js-securing-restful-apis-2/explore-and-build-your-skills?u=76281980&t=38)** Thanks very much for taking my course, and I'll see you in a bit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security]] (2), node (1), data (1), application (1), [[OWASP]] (1)
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