---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: react-securing-applications-2
url: "https://www.linkedin.com/learning/react-securing-applications-2"
duration_minutes: 65
duration: 1h 5m
level: Advanced
updated: 4/29/2024
learners: 36779
skills:
  - React.js
  - Secure Authentication
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQE_xNcW-E00pA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1586288300783?e=2147483647&amp;v=beta&amp;t=jkRP2lOvAvGruEd5x36bkL2ivgyRXQ2m-SNAfHqFdmc"
linkedin_topic: Web Development
learning_paths:
  - '[[Explore App Development with the MERN Stack]]'
  - '[[Improve Your React Skills]]'
prev_courses:
  - '[[Building RESTful APIs with Node.js and Express]]'
  - '[[React- Building Styles with CSS Modules]]'
next_courses:
  - '[[Node Js Security]]'
  - '[[Building Modern Projects with React]]'
path_nav: '[{"path":"Explore App Development with the MERN Stack","position":9,"total":13,"prev":"Building RESTful APIs with Node.js and Express","next":"Node Js Security"},{"path":"Improve Your React Skills","position":3,"total":9,"prev":"React- Building Styles with CSS Modules","next":"Building Modern Projects with React"}]'
path_count: 2
tags:
  - course
  - topic/database-management
  - topic/software-development
  - topic/web-development
  - skill/react-js
  - skill/secure-authentication
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/React-%20Securing%20Applications.md)

![React: Securing Applications](https://media.licdn.com/dms/image/v2/C4E0DAQE_xNcW-E00pA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1586288300783?e=2147483647&amp;v=beta&amp;t=jkRP2lOvAvGruEd5x36bkL2ivgyRXQ2m-SNAfHqFdmc)

# React: Securing Applications

> You've built an application around React, using it and other libraries to create a smooth and attractive application. Everything works—but does it work securely? Applications that look great and perform well can still be at risk of attack. This course provides clear, focused steps you can take to reinforce your React applications and authentication methods to defend against common threats. First, 

> [LinkedIn Learning](https://www.linkedin.com/learning/react-securing-applications-2) | 1h 5m | Advanced | 37K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Securing React applications](#securing-react-applications)
  - [What you should know](#what-you-should-know)
- [**1. Setting Up**](#1-setting-up) (3 videos)
  - [Initial setup](#initial-setup)
  - [Set up flow](#set-up-flow)
  - [Set up ESLint](#set-up-eslint)
- [**2. Overview of Security Threats**](#2-overview-of-security-threats) (4 videos)
  - [Introduction to OWASP](#introduction-to-owasp)
  - [Cross-site scripting (XSS) attacks](#cross-site-scripting-xss-attacks)
  - [Cross-site request forgery (CSRF)](#cross-site-request-forgery-csrf)
  - [Introduction to JSON Web Token (JWT) and what it solves](#introduction-to-json-web-token-jwt-and-what-it-solves)
- [**3. Authentication with Auth0**](#3-authentication-with-auth0) (7 videos)
  - [Initial setup of your server](#initial-setup-of-your-server)
  - [Create your API endpoints](#create-your-api-endpoints)
  - [Initial Auth0 setup](#initial-auth0-setup)
  - [Adding the files and code from Auth0](#adding-the-files-and-code-from-auth0)
  - [Update index for Auth0 integration](#update-index-for-auth0-integration)
  - [Add connections to server](#add-connections-to-server)
  - [Finalize menu with login](#finalize-menu-with-login)
- [**4. Other React Considerations**](#4-other-react-considerations) (2 videos)
  - [React considerations for security](#react-considerations-for-security)
  - [Strict mode](#strict-mode)
- [**Conclusion**](#conclusion) (2 videos)
  - [Best practices update](#best-practices-update)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Securing React applications](https://www.linkedin.com/learning/react-securing-applications-2/securing-react-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-securing-applications-2/securing-react-applications?u=76281980&t=0)** - [Emmanuel] Have you ever been faced with a security issue or had your application attacked?
>
> **[0:05](https://www.linkedin.com/learning/react-securing-applications-2/securing-react-applications?u=76281980&t=5)** Do you seek knowledge on security for [[React.js|React]] applications?
>
> **[0:09](https://www.linkedin.com/learning/react-securing-applications-2/securing-react-applications?u=76281980&t=9)** If so, you have come to the right place.
>
> **[0:11](https://www.linkedin.com/learning/react-securing-applications-2/securing-react-applications?u=76281980&t=11)** Security is such a huge undertaking that most people really don't know where to start.
>
> **[0:17](https://www.linkedin.com/learning/react-securing-applications-2/securing-react-applications?u=76281980&t=17)** Hi, I'm Manny Henri and I've been working with React since its release and I implement security measures within all of my applications.
>
> **[0:26](https://www.linkedin.com/learning/react-securing-applications-2/securing-react-applications?u=76281980&t=26)** It's my pleasure to teach you some of the latest ways to secure your React application.
>
> **[0:31](https://www.linkedin.com/learning/react-securing-applications-2/securing-react-applications?u=76281980&t=31)** First, we'll set up our base project using a few tools and best [[Coding Practices]] to get us up and running quickly with a good template.
>
> **[0:40](https://www.linkedin.com/learning/react-securing-applications-2/securing-react-applications?u=76281980&t=40)** Then we'll go through some of the major security threats and how to address them within our React application.
>
> **[0:46](https://www.linkedin.com/learning/react-securing-applications-2/securing-react-applications?u=76281980&t=46)** Next, we'll set up a single sign-on authentication process with our React application.
>
> **[0:52](https://www.linkedin.com/learning/react-securing-applications-2/securing-react-applications?u=76281980&t=52)** And finally, we'll secure our API end point, leveraging other features from AuthO.
>
> **[0:58](https://www.linkedin.com/learning/react-securing-applications-2/securing-react-applications?u=76281980&t=58)** So if you're ready to secure a React application while learning about security best practices, fire up your favorite editor and let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (6), [[Coding Practices]] (1)
> **Prerequisites:** set up (2)
> **Env Vars:** api (1)
> **Exercise Files:** template (1)
> **Speakers:** - [emmanuel] (1)

#### [What you should know](https://www.linkedin.com/learning/react-securing-applications-2/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-securing-applications-2/what-you-should-know?u=76281980&t=0)** - [Instructor] As this course is focused on the exploration of advanced concepts with [[React.js|React]], some experience with React is a must.
>
> **[0:07](https://www.linkedin.com/learning/react-securing-applications-2/what-you-should-know?u=76281980&t=7)** If you aren't familiar with creating React components using props and importing modules, I suggest that you take a basic React course, such as our [[React Essential Training]].
>
> **[0:18](https://www.linkedin.com/learning/react-securing-applications-2/what-you-should-know?u=76281980&t=18)** Also, experience with [[JavaScript]], especially ES6 syntax or above is a must for this course, as this is the basis of a React programmer.
>
> **[0:27](https://www.linkedin.com/learning/react-securing-applications-2/what-you-should-know?u=76281980&t=27)** In this course, I use the ES2015 version of the syntax.
>
> **[0:32](https://www.linkedin.com/learning/react-securing-applications-2/what-you-should-know?u=76281980&t=32)** Next, being familiar with terminal commands and [[npm]] isn't a must, but will definitely help you when we use these tools.
>
> **[0:39](https://www.linkedin.com/learning/react-securing-applications-2/what-you-should-know?u=76281980&t=39)** As you'll see, I'm running on the Mac, but you can follow along on the PC as well, as the tools work exactly the same on both platforms.
>
> **[0:48](https://www.linkedin.com/learning/react-securing-applications-2/what-you-should-know?u=76281980&t=48)** Also, I'm using the VS Code as my code editor, but feel free to use whatever tool you prefer.
>
> **[0:54](https://www.linkedin.com/learning/react-securing-applications-2/what-you-should-know?u=76281980&t=54)** Although, I recommend using an editor with a built in terminal.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (6), [[JavaScript]] (1), [[npm]] (1)
> **Tools:** terminal (2), vs code (1)
> **Env Vars:** es6 (1), es2015 (1)
> **Definitions:** is a  (2)
> **CLI Commands:** npm (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 1. Setting Up

[↑ Back to Table of Contents](#table-of-contents)

#### [Initial setup](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup?u=76281980&t=0)** - [Instructor] For setting up our [[React.js|React]] project I really want to get started where most of you start when developing a React application and that is with the create-react-app [[CLI]] tool, better known as the CRA.
>
> **[0:11](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup?u=76281980&t=11)** Then we'll add what we need to be properly set with our base setup.
>
> **[0:15](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup?u=76281980&t=15)** So let's get to it.
>
> **[0:16](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup?u=76281980&t=16)** So the first thing I'm going to do is create a brand new React application, so what I'm going to do is use Visual Studio Code terminal to do that.
>
> **[0:23](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup?u=76281980&t=23)** So I'm going to open the folder and basically open the Desktop folder like so and create my react-app application in here.
>
> **[0:32](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup?u=76281980&t=32)** Perfect.
>
> **[0:33](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup?u=76281980&t=33)** So now that I have that, what I am going to bring is my terminal, so I'm going to click on View, Terminal, and then what I'm going to use is npx.
>
> **[0:42](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup?u=76281980&t=42)** So if you're not familiar with npx it's basically [[npm]] without having the tool installed locally to your system.
>
> **[0:49](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup?u=76281980&t=49)** So it's going to download the tool, create the new application, and then remove it.
>
> **[0:54](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup?u=76281980&t=54)** So it's a great tool to use any [[Angular]] or React tool without having them installed locally.
>
> **[1:01](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup?u=76281980&t=61)** So let's go ahead and do npx create-react-app and I'm going to call this one secure.
>
> **[1:13](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup?u=76281980&t=73)** Okay, so now that we have a brand new React application installed and created for us, let's close Visual Studio Code and copy the file that we have in our Exercise Files.
>
> **[1:23](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup?u=76281980&t=83)** So what I'm going to do is open the Exercise Files like so and open my Secure folder that I just created.
>
> **[1:31](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup?u=76281980&t=91)** And what I'm going to do is go into the Resources in the Exercise Files and then click on Project and then what you need to do is copy the Source folder into here and remove the one that we have in here.
>
> **[1:42](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup?u=76281980&t=102)** So we're not going to use any of that anymore.
>
> **[1:45](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup?u=76281980&t=105)** The only thing that I would keep is the service worker, so let's go ahead and do that.
>
> **[1:52](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup?u=76281980&t=112)** So I'm going to delete everything but the service worker, like so, and then copy all of this from the Source folder into the Source folder here, like so.
>
> **[2:04](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup?u=76281980&t=124)** And let's just make sure that we do a copy, so Option + Click like so.
>
> **[2:09](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup?u=76281980&t=129)** Once you have that, you want to make sure that you copy the Index from the Public 'cause I actually have some libraries that are installed with the Index.
>
> **[2:17](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup?u=76281980&t=137)** So let's go to Public and remove the index.[[HTML]] and then Option + Click or Command or Control + C and then Command or Control + V.
>
> **[2:30](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup?u=76281980&t=150)** And that should do it for the files that we have to copy from the Exercise Files.
>
> **[2:34](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup?u=76281980&t=154)** So once we have this, I'm supposed to have all of this open like we had before, I'm going to simply drag and drop the folder inside of Visual Studio Code or on [[Windows]] you can right click and open in Visual Studio Code.
>
> **[2:48](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup?u=76281980&t=168)** So now I have my project in here.
>
> **[2:49](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup?u=76281980&t=169)** The only dependency that we need that is not with the base system here is React Router DOM, so let's go ahead and install that.
>
> **[2:59](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup?u=76281980&t=179)** So I'm going to bring up my terminal again and do an npm i --save, and actually we don't need to do that.
>
> **[3:09](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup?u=76281980&t=189)** That's from the legacy npm version.
>
> **[3:12](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup?u=76281980&t=192)** And what we need to install is react-router-dom.
>
> **[3:19](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup?u=76281980&t=199)** So if you want to see if everything is good in the package.[[JSON]] file, we should see react-router-dom appear in the dependencies shortly.
>
> **[3:28](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup?u=76281980&t=208)** Perfect.
>
> **[3:29](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup?u=76281980&t=209)** So now we have everything that we need, so let's go ahead and start our application.
>
> **[3:33](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup?u=76281980&t=213)** Let's do an npm start and if everything went well with our files that we copied, we should have a simple list of all my courses presented with some CSS styles.
>
> **[3:46](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup?u=76281980&t=226)** Perfect.
>
> **[3:47](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup?u=76281980&t=227)** Okay, so now we've got a React application running that has some meat to it.
>
> **[3:51](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup?u=76281980&t=231)** So feel free to use your own if you need to, but make sure you are on the latest version of React.
>
> **[3:56](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup?u=76281980&t=236)** Let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (13), [[npm]] (4), [[CLI]] (1), [[Angular]] (1), [[HTML]] (1)
> **CLI Commands:** npm (4), npx (3), make (3)
> **Tools:** visual studio (4), terminal (4)
> **UI Navigation:** open the (3), click on (2), go to (1), drag and drop (1)
> **Exercise Files:** exercise files (4), download the (1)
> **Env Vars:** cli (1), cra (1), dom (1), css (1)
> **Prerequisites:** install (2), setup (1)
> **File Paths:** index.html (1), package.json (1)

#### [Set up flow](https://www.linkedin.com/learning/react-securing-applications-2/set-up-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-securing-applications-2/set-up-flow?u=76281980&t=0)** - The next step is to install and setup flow into our application.
>
> **[0:04](https://www.linkedin.com/learning/react-securing-applications-2/set-up-flow?u=76281980&t=4)** Although, flow isn't directly related to security since it is basically type checking, it is a good practice to have as it prevents any unwanted data into your application and potential issues.
>
> **[0:16](https://www.linkedin.com/learning/react-securing-applications-2/set-up-flow?u=76281980&t=16)** So let's get to it.
>
> **[0:18](https://www.linkedin.com/learning/react-securing-applications-2/set-up-flow?u=76281980&t=18)** I'm going to leave my application running here, and I'm going to bring a brand new terminal by clicking on the plus here, like so.
>
> **[0:25](https://www.linkedin.com/learning/react-securing-applications-2/set-up-flow?u=76281980&t=25)** Make sure that I'm in the right directory, so the security where I have the package.[[JSON]] here, like so and then what I'm going to do is do [[npm]] install, or i.
>
> **[0:36](https://www.linkedin.com/learning/react-securing-applications-2/set-up-flow?u=76281980&t=36)** That's the shortcut for install, if you don't know.
>
> **[0:39](https://www.linkedin.com/learning/react-securing-applications-2/set-up-flow?u=76281980&t=39)** Flow-bin, so that's what we need to use flow inside of our applications.
>
> **[0:45](https://www.linkedin.com/learning/react-securing-applications-2/set-up-flow?u=76281980&t=45)** Let's go ahead and install it.
>
> **[0:47](https://www.linkedin.com/learning/react-securing-applications-2/set-up-flow?u=76281980&t=47)** Once it is done installing, you can go back to your package.json file like so, and you should see it right here, like so.
>
> **[0:55](https://www.linkedin.com/learning/react-securing-applications-2/set-up-flow?u=76281980&t=55)** And what we're going to do next is add the script to our list of scripts here so we can actually use it.
>
> **[1:00](https://www.linkedin.com/learning/react-securing-applications-2/set-up-flow?u=76281980&t=60)** I'm going to do a comma on line 19, like so, and then create a flow script.
>
> **[1:06](https://www.linkedin.com/learning/react-securing-applications-2/set-up-flow?u=76281980&t=66)** So this flow script will basically start flow, like so.
>
> **[1:12](https://www.linkedin.com/learning/react-securing-applications-2/set-up-flow?u=76281980&t=72)** Perfect.
>
> **[1:13](https://www.linkedin.com/learning/react-securing-applications-2/set-up-flow?u=76281980&t=73)** So now let's save this.
>
> **[1:15](https://www.linkedin.com/learning/react-securing-applications-2/set-up-flow?u=76281980&t=75)** And the next thing we need to do is initialize flow.
>
> **[1:18](https://www.linkedin.com/learning/react-securing-applications-2/set-up-flow?u=76281980&t=78)** You do this by doing npm run flow init, like so.
>
> **[1:26](https://www.linkedin.com/learning/react-securing-applications-2/set-up-flow?u=76281980&t=86)** By running this command you will initialize flow inside of your application, and then we can actually use it.
>
> **[1:32](https://www.linkedin.com/learning/react-securing-applications-2/set-up-flow?u=76281980&t=92)** Now we have initialize flow, and as you can see, a new file appeared inside of our directory, which is called a flow config, and you can actually add a few things in here.
>
> **[1:41](https://www.linkedin.com/learning/react-securing-applications-2/set-up-flow?u=76281980&t=101)** What are the things you want to ignore, what you want to include the libraries, and so on and so forth.
>
> **[1:46](https://www.linkedin.com/learning/react-securing-applications-2/set-up-flow?u=76281980&t=106)** You can explore this with the documentation to understand what all these are.
>
> **[1:50](https://www.linkedin.com/learning/react-securing-applications-2/set-up-flow?u=76281980&t=110)** Let's go ahead and run flow.
>
> **[1:53](https://www.linkedin.com/learning/react-securing-applications-2/set-up-flow?u=76281980&t=113)** What we're going to do is npm run flow.
>
> **[1:58](https://www.linkedin.com/learning/react-securing-applications-2/set-up-flow?u=76281980&t=118)** Right now, the flow server just started, and we don't have any errors.
>
> **[2:03](https://www.linkedin.com/learning/react-securing-applications-2/set-up-flow?u=76281980&t=123)** Basically, when you are doing an application, and you are inserting a type for each of the values that you want to insert in a function.
>
> **[2:10](https://www.linkedin.com/learning/react-securing-applications-2/set-up-flow?u=76281980&t=130)** Let me show you an example.
>
> **[2:11](https://www.linkedin.com/learning/react-securing-applications-2/set-up-flow?u=76281980&t=131)** If we go, I believe in the components in the app.js, we have a type here.
>
> **[2:19](https://www.linkedin.com/learning/react-securing-applications-2/set-up-flow?u=76281980&t=139)** If it's not in here it's somewhere in one of these.
>
> **[2:21](https://www.linkedin.com/learning/react-securing-applications-2/set-up-flow?u=76281980&t=141)** We have here an item, but there's no type assigned to it.
>
> **[2:26](https://www.linkedin.com/learning/react-securing-applications-2/set-up-flow?u=76281980&t=146)** If we had a type, it would basically determine what is a type of argument that we're passing to here.
>
> **[2:32](https://www.linkedin.com/learning/react-securing-applications-2/set-up-flow?u=76281980&t=152)** Right now, it's any because we don't have anything set as a default, so that's why we're seeing no errors.
>
> **[2:37](https://www.linkedin.com/learning/react-securing-applications-2/set-up-flow?u=76281980&t=157)** But if we were to add, for example, a type here, well, once we have a type, if the type that is passed to that argument or that function is not the right one, then we're going to get an error, and this is where when we do npm run flow, we're going to get errors in here, and it's going to tell us exactly where the errors are.
>
> **[2:59](https://www.linkedin.com/learning/react-securing-applications-2/set-up-flow?u=76281980&t=179)** Let me just delete that, save it.
>
> **[3:04](https://www.linkedin.com/learning/react-securing-applications-2/set-up-flow?u=76281980&t=184)** As you can see, we can keep working on our files here, and we'll explore the security threats for [[React.js|React]] in the following videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (4), [[JSON]] (2), [[React.js|React]] (1)
> **CLI Commands:** npm (4), make (1)
> **Prerequisites:** install (4), setup (1)
> **File Paths:** package.json (2), app.js (1)
> **Definitions:** is a  (2), is called (1)
> **Documentation:** the documentation (1)
> **Tools:** terminal (1)
> **Analogies:** for example (1)

#### [Set up ESLint](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=0)** - As you may or may not be aware, [[ESLint]] is already installed with [[React.js|React]] when creating an application with CRA.
>
> **[0:06](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=6)** So you could literally keep working on your app without setting anything up.
>
> **[0:10](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=10)** But I like to add stricter rules, such as the ones followed by Airbnb's engineering team.
>
> **[0:16](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=16)** Having more strict rules in your syntax is always a good practice, and like flow will help prevent bad code that opens up your application for security threats.
>
> **[0:25](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=25)** So let's set this up.
>
> **[0:27](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=27)** So right now, like I said, we don't have really strict rules.
>
> **[0:30](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=30)** So if we look at the bottom on VS code here, we have no problems.
>
> **[0:34](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=34)** So if I click here, I have absolutely no problem.
>
> **[0:37](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=37)** But let's insert the Airbnb files here.
>
> **[0:40](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=40)** So let's go back to the terminal.
>
> **[0:41](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=41)** So you can click here or you can click on view, terminal.
>
> **[0:46](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=46)** And then what we're going to do is use NPX again to install the dependencies.
>
> **[0:51](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=51)** And by the way, this is much better than what it used to be.
>
> **[0:54](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=54)** So we had to verify what are the dependencies or the latest dependencies, then install them, then validate them.
>
> **[1:01](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=61)** Now it's just a simple command and it's going to do all of this for us.
>
> **[1:05](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=65)** So let's go and do NPX.
>
> **[1:08](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=68)** Install.
>
> **[1:10](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=70)** Dash.
>
> **[1:11](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=71)** Peerdeps, for dependencies.
>
> **[1:14](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=74)** Dash dash dev.
>
> **[1:17](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=77)** ESLint.
>
> **[1:19](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=79)** Dash config.
>
> **[1:21](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=81)** Dash Airbnb.
>
> **[1:23](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=83)** Perfect.
>
> **[1:23](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=83)** And what I'm going to do after that is use a command that you can use, if you have, get install inside of your system.
>
> **[1:31](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=91)** So you can do ampersand twice and it's going to do a second command right after this one is done.
>
> **[1:37](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=97)** And I'm going to do MPM, install, ESLINT.
>
> **[1:41](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=101)** So basically by using the double ampersand I'm going to have this command first and then once this command is successful the second one will be executed.
>
> **[1:52](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=112)** So if you want to do the two all at once you can do one ampersand, but I prefer two.
>
> **[1:57](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=117)** Always make sure that first command is successful before I run another one.
>
> **[2:01](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=121)** So let's go ahead and do that.
>
> **[2:03](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=123)** Okay. So now that we have ESLINT installed.
>
> **[2:05](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=125)** We have Airbnb's stricter rules installed.
>
> **[2:08](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=128)** Let's go ahead and make sure that we can apply this inside of this application.
>
> **[2:13](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=133)** So we need to create a new file by clicking on the plus here.
>
> **[2:17](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=137)** And we're going to call this new file .eslintrc, like so.
>
> **[2:23](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=143)** And this is going to be our config file for our ESLint.
>
> **[2:26](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=146)** So basically right now, it still doesn't apply the rules from Airbnb so we need to tell the system or this application to actually apply these rules.
>
> **[2:34](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=154)** So what we're going to do is create an object and inside we're going to type extends and basically use Airbnb, like so.
>
> **[2:47](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=167)** And now as soon as you save this and you navigate through your files; it's going to start looking at those rules.
>
> **[2:55](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=175)** And as you can see, I saw something appear, so.
>
> **[2:58](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=178)** Somewhere on this one.
>
> **[3:01](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=181)** So you see right now I two have errors on this one.
>
> **[3:03](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=183)** So if I click on it.
>
> **[3:05](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=185)** I'm going to see in the problems, type aliases can only be used in a ts file and so on, so forth.
>
> **[3:12](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=192)** So right now we have the stricter rules applied and we can take a look at what are the issues inside of our code and fix them as you go through coding your application.
>
> **[3:21](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=201)** So as you type your code you're going to see those messages appear and it's going to give you better practices around how you write your code and actually follow the standards in the industry.
>
> **[3:32](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=212)** So already you can see our stricter rules have identified several opportunities for improvement.
>
> **[3:36](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=216)** Again this is a list of rules from Airbnb but it has become great practices that many follow in the industry.
>
> **[3:43](https://www.linkedin.com/learning/react-securing-applications-2/set-up-eslint?u=76281980&t=223)** So feel free to use your own set of rules.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ESLint]] (5), [[React.js|React]] (1)
> **Env Vars:** npx (2), eslint (2), cra (1), mpm (1)
> **Prerequisites:** install (5)
> **CLI Commands:** npx (2), make (2)
> **Tools:** terminal (2), vs code (1)
> **UI Navigation:** click on (2)
> **Best Practices:** good practice (1), always make sure (1)
> **Cross-References:** go back to (1)


### 2. Overview of Security Threats

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to OWASP](https://www.linkedin.com/learning/react-securing-applications-2/introduction-to-owasp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-securing-applications-2/introduction-to-owasp?u=76281980&t=0)** - [Instructor] If you are serious about security, [[OWASP]] is always a great place to get started in your research for potential threats and solutions.
>
> **[0:08](https://www.linkedin.com/learning/react-securing-applications-2/introduction-to-owasp?u=76281980&t=8)** It is called the Open [[Web Application Security]] Project, or OWASP, and includes a big community and many resources available to you.
>
> **[0:16](https://www.linkedin.com/learning/react-securing-applications-2/introduction-to-owasp?u=76281980&t=16)** So, go to [owasp.org](https://owasp.org) and once you get to this page, you're going to see that it's structured a little bit differently than in the past if you've seen the previous version of this course or if you've been to this site before.
>
> **[0:28](https://www.linkedin.com/learning/react-securing-applications-2/introduction-to-owasp?u=76281980&t=28)** So, right now what they did is basically organize specific sections into their own links and then they have the chapters, and then they have a whole bunch of information, but let me walk you through what is really important here.
>
> **[0:42](https://www.linkedin.com/learning/react-securing-applications-2/introduction-to-owasp?u=76281980&t=42)** So the first thing that I would do if I would go to this website myself, I would go to the Cheat Sheet Series.
>
> **[0:48](https://www.linkedin.com/learning/react-securing-applications-2/introduction-to-owasp?u=76281980&t=48)** So, you can connect to this by clicking on Projects and then Cheat Sheets and you're going to be brought to a page that looks like this and then what you need to do is click on the cheatsheetseries.[owasp.org](https://owasp.org).
>
> **[1:01](https://www.linkedin.com/learning/react-securing-applications-2/introduction-to-owasp?u=76281980&t=61)** And what I would do is bookmark this particular link here.
>
> **[1:04](https://www.linkedin.com/learning/react-securing-applications-2/introduction-to-owasp?u=76281980&t=64)** So, you're going to get to a page that looks like this.
>
> **[1:07](https://www.linkedin.com/learning/react-securing-applications-2/introduction-to-owasp?u=76281980&t=67)** So, this is the best way to get the latest and greatest information about what are the threats out there, what are the solutions, what are the code snippets that you need to be careful of, or what you should be actually improving your code with.
>
> **[1:21](https://www.linkedin.com/learning/react-securing-applications-2/introduction-to-owasp?u=76281980&t=81)** And let's say for example, we're looking for Cross Site Request Forgery Prevention.
>
> **[1:25](https://www.linkedin.com/learning/react-securing-applications-2/introduction-to-owasp?u=76281980&t=85)** You can click on any of those links here and get more information on what is this attack, how you can actually prevent this attack, and some code snippets if you want to see examples of what it looks like or how you could improve the code.
>
> **[1:39](https://www.linkedin.com/learning/react-securing-applications-2/introduction-to-owasp?u=76281980&t=99)** For example here.
>
> **[1:41](https://www.linkedin.com/learning/react-securing-applications-2/introduction-to-owasp?u=76281980&t=101)** The next thing that I would do is go back to the Cheat Sheet Series and then scroll down until you see the [[Slack]] channel here on the right.
>
> **[1:48](https://www.linkedin.com/learning/react-securing-applications-2/introduction-to-owasp?u=76281980&t=108)** So, what I would recommend is that you join the Slack channel because there's a whole bunch of engineers like you and me that can discuss and share tips and tricks and so on so forth.
>
> **[1:59](https://www.linkedin.com/learning/react-securing-applications-2/introduction-to-owasp?u=76281980&t=119)** So, this is a good way to get around some problems that you have with your security.
>
> **[2:05](https://www.linkedin.com/learning/react-securing-applications-2/introduction-to-owasp?u=76281980&t=125)** Now the last thing that I would recommend is also if you have a specific attack in mind that you want to have more information about, what you could do is simply use the search here.
>
> **[2:14](https://www.linkedin.com/learning/react-securing-applications-2/introduction-to-owasp?u=76281980&t=134)** So let's say for example I'm looking for SXS, like so, which is cross site scripting, and then once you get to the search you're going to get a whole bunch of links that are related to that specific attack.
>
> **[2:26](https://www.linkedin.com/learning/react-securing-applications-2/introduction-to-owasp?u=76281980&t=146)** So, what you could do is click on this one and get a little bit more information about it.
>
> **[2:30](https://www.linkedin.com/learning/react-securing-applications-2/introduction-to-owasp?u=76281980&t=150)** So, this is how I would go about finding information on specific attacks and if you're not very familiar with all the attacks that exist out there, what you could do is start browsing through the cheat sheets.
>
> **[2:42](https://www.linkedin.com/learning/react-securing-applications-2/introduction-to-owasp?u=76281980&t=162)** So, this site is full of resources to get you started and help you in your research.
>
> **[2:47](https://www.linkedin.com/learning/react-securing-applications-2/introduction-to-owasp?u=76281980&t=167)** So, make sure to subscribe to their mailing list as well and get the latest information on security threats.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (4), [[Slack]] (2), [[Web Application Security]] (1)
> **UI Navigation:** go to (3), click on (3), scroll down (1)
> **Env Vars:** owasp (2), sxs (1)
> **Analogies:** for example (3)
> **URLs:** [owasp.org](https://owasp.org) (2)
> **Tools:** slack (2)
> **Definitions:** is called (1), is a  (1)
> **CLI Commands:** make (1)

#### [Cross-site scripting (XSS) attacks](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-scripting-xss-attacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-scripting-xss-attacks?u=76281980&t=0)** - [Instructor] Cross-site scripting attacks is when a malicious script is injected into a trusted site.
>
> **[0:05](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-scripting-xss-attacks?u=76281980&t=5)** For example, add [[JavaScript]] code into an unsuspecting input in a form, and then use this to do all kinds of no good.
>
> **[0:12](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-scripting-xss-attacks?u=76281980&t=12)** Some example of attacks have been pulling data from cookies, session [[Tokens]], and all kinds of sensitive information.
>
> **[0:18](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-scripting-xss-attacks?u=76281980&t=18)** Let me demonstrate an example of cross-site scripting.
>
> **[0:22](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-scripting-xss-attacks?u=76281980&t=22)** So go to [google.com/about/appsecurity/learning/xss](https://google.com/about/appsecurity/learning/xss) and once you get to this website, scroll down until you see this window here.
>
> **[0:34](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-scripting-xss-attacks?u=76281980&t=34)** And then click on show demo.
>
> **[0:37](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-scripting-xss-attacks?u=76281980&t=37)** So basically, how you do cross scripting is to add code inside of a form, so right now if I just do a search text, you're going to see that test is basically what we're searching for and the results are basically what we expect.
>
> **[0:52](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-scripting-xss-attacks?u=76281980&t=52)** But if we refresh that page and then go back to the demo, and then do that again but insert code with it, so if I did underline, and this is [[HTML]] by the way, and I did test and then close my tag like so, and then I click search.
>
> **[1:11](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-scripting-xss-attacks?u=76281980&t=71)** You're going to see that right now I'm actually underlining test.
>
> **[1:15](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-scripting-xss-attacks?u=76281980&t=75)** So that's not good, that means I can place code inside of the form, so that's what cross-site scripting is.
>
> **[1:22](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-scripting-xss-attacks?u=76281980&t=82)** Okay, so now that we've seen what it is, how do we prevent this type of security issue with [[React.js|React]]?
>
> **[1:28](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-scripting-xss-attacks?u=76281980&t=88)** Well, React by default is preventing this type of behavior, and I'll show you how it does it.
>
> **[1:33](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-scripting-xss-attacks?u=76281980&t=93)** So let me demonstrate.
>
> **[1:34](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-scripting-xss-attacks?u=76281980&t=94)** So let's go back to code, and let's go into VS Code in the App.js file.
>
> **[1:40](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-scripting-xss-attacks?u=76281980&t=100)** So if you look into source, components, you're going to find a file that's called App.js.
>
> **[1:46](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-scripting-xss-attacks?u=76281980&t=106)** And let's create a quick function that would return some strings.
>
> **[1:51](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-scripting-xss-attacks?u=76281980&t=111)** So I'm going to do a new function that I'm going to call createMarkup, like so.
>
> **[2:01](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-scripting-xss-attacks?u=76281980&t=121)** And then we'll return some text.
>
> **[2:06](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-scripting-xss-attacks?u=76281980&t=126)** So underscore html, and then I'm going to pass the string I am so dangerous you can feel it.
>
> **[2:17](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-scripting-xss-attacks?u=76281980&t=137)** So this is the function that we're going to use to represent what we want to show you.
>
> **[2:21](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-scripting-xss-attacks?u=76281980&t=141)** So let's go down to where we have the class name footer, so this area here, and I'm going to inject this code inside of my HTML.
>
> **[2:32](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-scripting-xss-attacks?u=76281980&t=152)** So I'm going to do div, close the tag, and then do innerHTML, already there this is something that you shouldn't do, but let's just do it, just for presentation purposes.
>
> **[2:49](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-scripting-xss-attacks?u=76281980&t=169)** And then use our function createMarkup, so I'm injecting this particular function inside of a div here, so this is not something that should be done.
>
> **[3:02](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-scripting-xss-attacks?u=76281980&t=182)** All right, so if I save this, and let's go back to our terminal.
>
> **[3:07](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-scripting-xss-attacks?u=76281980&t=187)** View, terminal.
>
> **[3:10](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-scripting-xss-attacks?u=76281980&t=190)** And make sure that our application is running, and it's running here.
>
> **[3:14](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-scripting-xss-attacks?u=76281980&t=194)** So let's go back to our browser and take a look at the application.
>
> **[3:20](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-scripting-xss-attacks?u=76281980&t=200)** And let's go inside of the developer tools.
>
> **[3:27](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-scripting-xss-attacks?u=76281980&t=207)** You're seeing that we have a warning here, directly setting property innerHTML is not permitted.
>
> **[3:34](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-scripting-xss-attacks?u=76281980&t=214)** So we have a problem, but our application is still running, and we have a warning here.
>
> **[3:39](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-scripting-xss-attacks?u=76281980&t=219)** So in other words, always look at the console just to make sure that you're not doing dangerous code.
>
> **[3:44](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-scripting-xss-attacks?u=76281980&t=224)** So this is dangerous.
>
> **[3:46](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-scripting-xss-attacks?u=76281980&t=226)** So if you wanted to do the exact same thing, but do it in a safe way inside of React, this is how you would write the code.
>
> **[3:55](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-scripting-xss-attacks?u=76281980&t=235)** But again, this is not something that you want to do, you don't want to inject code inside of an innerHTML.
>
> **[4:01](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-scripting-xss-attacks?u=76281980&t=241)** So that's why they name it this way, so dangerouslySetInnerHTML, and then do the exact same thing would be accepted, but as you can tell, this function actually tells you well, you're doing something that is not really secure and be careful.
>
> **[4:20](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-scripting-xss-attacks?u=76281980&t=260)** So if I remove this one now, and then save it, and then go back to my browser.
>
> **[4:31](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-scripting-xss-attacks?u=76281980&t=271)** You're going to see that this is also not accepted, and in fact it gives you an error.
>
> **[4:35](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-scripting-xss-attacks?u=76281980&t=275)** So these are the kind of things that you want to avoid, so this is how cross-site scripting is done, and you don't want to inject anything inside of your HTML.
>
> **[4:46](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-scripting-xss-attacks?u=76281980&t=286)** So there you have it.
>
> **[4:47](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-scripting-xss-attacks?u=76281980&t=287)** But not because React has some measures against cross-site scripting attacks that you need to be less vigilant, so always be on the look out for potential measures, and OAuth again is your best resource.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (4), [[React.js|React]] (4), [[JavaScript]] (1), [[Tokens]] (1), [[Google]] (1)
> **Code Identifiers:** innerhtml (3), createmarkup (2), dangerouslysetinnerhtml (1)
> **Cross-References:** go back to (5)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** html (3)
> **Tools:** terminal (2), vs code (1)
> **UI Navigation:** go to (1), scroll down (1), click on (1)
> **Warnings:** warning (2), be careful (1)

#### [Cross-site request forgery (CSRF)](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-request-forgery-csrf?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-request-forgery-csrf?u=76281980&t=0)** - [Instructor] Cross-site request forgery is any form of malicious code that is executed when a user is authenticated to a trusted website.
>
> **[0:08](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-request-forgery-csrf?u=76281980&t=8)** For example, the authenticated user could be doing any kind of unwanted transactions in the trusted website such as changing passwords, transferring funds, et cetera.
>
> **[0:19](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-request-forgery-csrf?u=76281980&t=19)** There are two ways to prevent CSRF.
>
> **[0:22](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-request-forgery-csrf?u=76281980&t=22)** First, checking the headers to validate the request is from the same origin.
>
> **[0:26](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-request-forgery-csrf?u=76281980&t=26)** So the header of the request website client needs to be from the same HTTP URL as the server.
>
> **[0:33](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-request-forgery-csrf?u=76281980&t=33)** And as a general rule, you want to avoid allowing CORs or cross-origin request.
>
> **[0:39](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-request-forgery-csrf?u=76281980&t=39)** Most browsers protect you from doing this.
>
> **[0:42](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-request-forgery-csrf?u=76281980&t=42)** Second, once the previous step has been done then we need to check for an encrypted or signed token which should be provided with the request.
>
> **[0:50](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-request-forgery-csrf?u=76281980&t=50)** If that check is validated then the transaction can be completed as normal.
>
> **[0:56](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-request-forgery-csrf?u=76281980&t=56)** So how do we prevent these types of attacks or implement such a system into our application?
>
> **[1:02](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-request-forgery-csrf?u=76281980&t=62)** We can through the use of JWT [[Tokens]].
>
> **[1:04](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-request-forgery-csrf?u=76281980&t=64)** And we'll implement this type of authentication security with AuthO, which is a popular cloud-based authentication service that does a lot of the hard work for us.
>
> **[1:14](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-request-forgery-csrf?u=76281980&t=74)** And we'll do this in the next chapter, fully creating all the required elements to implement proper security into our application.
>
> **[1:23](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-request-forgery-csrf?u=76281980&t=83)** Needless to say that by using a tool like AuthO we're also adding prevention measures against other threats such as cross-site scripting.
>
> **[1:32](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-request-forgery-csrf?u=76281980&t=92)** So you might say, "Well, there must be other threats "that [[React.js|React]] developers need to think about."
>
> **[1:37](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-request-forgery-csrf?u=76281980&t=97)** You are correct as you should always get updated information about security threats.
>
> **[1:42](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-request-forgery-csrf?u=76281980&t=102)** However, if you follow React's guidelines and best practices, you should already prevent many other threats as React was built with safety by design.
>
> **[1:51](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-request-forgery-csrf?u=76281980&t=111)** Remember that it powers the busiest website in the world, [[Facebook]].
>
> **[1:56](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-request-forgery-csrf?u=76281980&t=116)** Therefore, it has already been tested for heavy security threats.
>
> **[2:00](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-request-forgery-csrf?u=76281980&t=120)** So by using React, following its best practices and add authentication in router-based roles like we'll build next, you should be well-covered.
>
> **[2:09](https://www.linkedin.com/learning/react-securing-applications-2/cross-site-request-forgery-csrf?u=76281980&t=129)** Let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (4), [[Tokens]] (1), [[Facebook]] (1)
> **Env Vars:** csrf (1), http (1), url (1), jwt (1)
> **Analogies:** such as (2), for example (1)
> **Best Practices:** general rule (1), you should always (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Introduction to JSON Web Token (JWT) and what it solves](https://www.linkedin.com/learning/react-securing-applications-2/introduction-to-json-web-token-jwt-and-what-it-solves?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-securing-applications-2/introduction-to-json-web-token-jwt-and-what-it-solves?u=76281980&t=0)** - [Instructor] JWT or [[JSON]] Web Token is an open standard that is used to securely transmit information in between parties.
>
> **[0:07](https://www.linkedin.com/learning/react-securing-applications-2/introduction-to-json-web-token-jwt-and-what-it-solves?u=76281980&t=7)** The JSON object currently consists of three items, a header, the payload, and the signature.
>
> **[0:14](https://www.linkedin.com/learning/react-securing-applications-2/introduction-to-json-web-token-jwt-and-what-it-solves?u=76281980&t=14)** So if you want to follow along go to [jwt.io](https://jwt.io) and then scroll down until you see this section here.
>
> **[0:21](https://www.linkedin.com/learning/react-securing-applications-2/introduction-to-json-web-token-jwt-and-what-it-solves?u=76281980&t=21)** So we're going to see the header, the payload, and the signature right here.
>
> **[0:28](https://www.linkedin.com/learning/react-securing-applications-2/introduction-to-json-web-token-jwt-and-what-it-solves?u=76281980&t=28)** So the header has usually two parts, the type of token, and the hashing algorithm used to encrypt the token, as you can see here.
>
> **[0:38](https://www.linkedin.com/learning/react-securing-applications-2/introduction-to-json-web-token-jwt-and-what-it-solves?u=76281980&t=38)** Then the payload consists of the [[Metadata]] from the request party that is required from the server.
>
> **[0:44](https://www.linkedin.com/learning/react-securing-applications-2/introduction-to-json-web-token-jwt-and-what-it-solves?u=76281980&t=44)** Some typical information you'll see in the payload are issuer of the request, expiration, name, et cetera.
>
> **[0:51](https://www.linkedin.com/learning/react-securing-applications-2/introduction-to-json-web-token-jwt-and-what-it-solves?u=76281980&t=51)** Like you can see right now we have a name, and a whole bunch of information that is important for the request.
>
> **[0:59](https://www.linkedin.com/learning/react-securing-applications-2/introduction-to-json-web-token-jwt-and-what-it-solves?u=76281980&t=59)** And finally the signature is what prove the requestor is who he says he is, and it is how the request is properly validated.
>
> **[1:08](https://www.linkedin.com/learning/react-securing-applications-2/introduction-to-json-web-token-jwt-and-what-it-solves?u=76281980&t=68)** So services like AuthO uses JWT and this is what we'll implement in our example project.
>
> **[1:14](https://www.linkedin.com/learning/react-securing-applications-2/introduction-to-json-web-token-jwt-and-what-it-solves?u=76281980&t=74)** In fact the JWT documentation was crafted by the AuthO team as you can see at the top here.
>
> **[1:21](https://www.linkedin.com/learning/react-securing-applications-2/introduction-to-json-web-token-jwt-and-what-it-solves?u=76281980&t=81)** So what is the use of JWT?
>
> **[1:24](https://www.linkedin.com/learning/react-securing-applications-2/introduction-to-json-web-token-jwt-and-what-it-solves?u=76281980&t=84)** This is the best way to securely transmit information across parties on the web.
>
> **[1:29](https://www.linkedin.com/learning/react-securing-applications-2/introduction-to-json-web-token-jwt-and-what-it-solves?u=76281980&t=89)** So the payload could be used for any type of information you'd like to transmit from two parties.
>
> **[1:35](https://www.linkedin.com/learning/react-securing-applications-2/introduction-to-json-web-token-jwt-and-what-it-solves?u=76281980&t=95)** And quite evidently as we'll implement in our solution, they can be used to authenticate a user.
>
> **[1:41](https://www.linkedin.com/learning/react-securing-applications-2/introduction-to-json-web-token-jwt-and-what-it-solves?u=76281980&t=101)** So when the user is registered to a site then the token will be used to validate the user as he makes several requests for data.
>
> **[1:48](https://www.linkedin.com/learning/react-securing-applications-2/introduction-to-json-web-token-jwt-and-what-it-solves?u=76281980&t=108)** So there you have it.
>
> **[1:50](https://www.linkedin.com/learning/react-securing-applications-2/introduction-to-json-web-token-jwt-and-what-it-solves?u=76281980&t=110)** So now enough theory, let's start implementing all this next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (2), [[Metadata]] (1)
> **Env Vars:** jwt (4), json (2)
> **UI Navigation:** go to (1), scroll down (1)
> **URLs:** [jwt.io](https://jwt.io) (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 3. Authentication with Auth0

[↑ Back to Table of Contents](#table-of-contents)

#### [Initial setup of your server](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=0)** - [Instructor] So the first thing we need to do in order to build a proper example where our [[React.js|react]] front end connects to a back end with authentication.
>
> **[0:08](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=8)** We need to build our back end with some API inputs.
>
> **[0:11](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=11)** Well first set up the servers, so let's get to it.
>
> **[0:14](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=14)** So I'm back into the folder where we created the react application earlier.
>
> **[0:18](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=18)** And what am going to do first is create a client folder and then put all these files inside of that folder.
>
> **[0:24](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=24)** So let's go and right click, create new folder, call this client and then grab all the files here and then put it inside of client.
>
> **[0:34](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=34)** Remember that you need to show the hidden files, otherwise you're not going to be transferring these files.
>
> **[0:39](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=39)** So want to make sure you see this.
>
> **[0:43](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=43)** So let's go and grab all these files and then put them inside of the client folder.
>
> **[0:49](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=49)** Now we're going to create a server folder like so.
>
> **[0:54](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=54)** And this is where we're going to work for the next little bit.
>
> **[0:57](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=57)** So I'm going to pull or grab and drop this folder inside of VS code.
>
> **[1:03](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=63)** And then we have the server folder where we're going to start working in.
>
> **[1:07](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=67)** So the first thing I'm going to do is bring up my terminal.
>
> **[1:09](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=69)** So let's go and click on view, grab the terminal and then make sure you're in the server.
>
> **[1:16](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=76)** So the fastest way to do this is to right click and then open a terminal.
>
> **[1:21](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=81)** Or you could just do a CD and then server like so.
>
> **[1:26](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=86)** And you're inside of the server.
>
> **[1:28](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=88)** All right, so the first thing we need to do is initialize the package.[[JSON]] files or we're going to do [[npm]] init like so.
>
> **[1:35](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=95)** And then enter, enter, enter, enter until we get to the end.
>
> **[1:41](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=101)** Yes, okay so we got the package.Json file now.
>
> **[1:45](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=105)** Now let's go ahead and install all the dependencies that we need.
>
> **[1:48](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=108)** So I'm going to start with NPM install dash dash save dash dev.
>
> **[1:54](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=114)** And by the way, when I say install and I type i, it's just a shortened version.
>
> **[1:59](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=119)** And then what am I going to do is do babel dash [[CLI]] and then do babel dash precept dash environment and then do one more precept dash stage zero.
>
> **[2:14](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=134)** And then I'm going to use the double ampersand so I can do a second command with the same command basically.
>
> **[2:20](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=140)** And I'm going to do NPM install and I'm going to start with body parser.
>
> **[2:25](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=145)** And these are all the regular dependencies that we need for the server.
>
> **[2:29](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=149)** And this is for the security stuff cores and then express, express dash JWT, JWKS dash RSA, nodemon.
>
> **[2:42](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=162)** And that should be good.
>
> **[2:45](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=165)** Okay, so while it does that, let's go and create the server files that we need.
>
> **[2:49](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=169)** So the next one that I need to work on is the index file.
>
> **[2:53](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=173)** So what we're going to do is create in our server directory, a new file, so let's go ahead and do that.
>
> **[3:00](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=180)** And we're going to call this index.JS.
>
> **[3:03](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=183)** We're also going to create the babel RC file.
>
> **[3:07](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=187)** So again, in the server folder, create a new file dot babel, RC file.
>
> **[3:14](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=194)** And for the babel RC file, what you need to do is basically create first the object.
>
> **[3:21](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=201)** And we're simply going to enter the presets that we just install as dependencies.
>
> **[3:25](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=205)** So we're going to do presets, open the array, and then pass the environment, and then stage zero.
>
> **[3:36](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=216)** Perfect.
>
> **[3:37](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=217)** Now let's save this.
>
> **[3:38](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=218)** You can close it if you want.
>
> **[3:40](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=220)** And now we're going to focus on the index.JS file.
>
> **[3:43](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=223)** So I'm going to import a few things.
>
> **[3:46](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=226)** So let's first import express from express.
>
> **[3:52](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=232)** And what I'm going to do is copy that line with Command + C + R Control + C and then paste it again.
>
> **[3:59](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=239)** And then what I'm going to do is change this and then do option click to change the second item together JWT.
>
> **[4:09](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=249)** And for this one it's express dash JWT.
>
> **[4:16](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=256)** And then just keep going with all the dependencies that I need to import on this particular file.
>
> **[4:20](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=260)** So the second one, and again I'm using option click is cores.
>
> **[4:30](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=270)** And then I'm going to do that again.
>
> **[4:31](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=271)** Paste, click, option click, JWKS.
>
> **[4:38](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=278)** and then here the right dependency that we need to import is our SA.
>
> **[4:44](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=284)** And another trick, if you're not familiar with that one, you can start doing import.
>
> **[4:49](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=289)** And then what you could do is do basically, all right, so I need something from body parser, like so.
>
> **[4:59](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=299)** And then what you could do is if it's something specific from that library that you're importing, you could start doing something like that.
>
> **[5:06](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=306)** And then as you start typing the name of things that you want, it's going to suggest what you can import.
>
> **[5:12](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=312)** When in this case, I'm basically going to use body parser, like so awesome.
>
> **[5:21](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=321)** So now let's go and create our server.
>
> **[5:23](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=323)** So if you're familiar how to build a node and express server, or if you've done my course on the subject, feel free to continue by yourself and then meet us in the next video.
>
> **[5:35](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=335)** App.usebodyparser.Json.
>
> **[5:42](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=342)** And in fact, if you're watching this, there's a few things that are different because of security matters.
>
> **[5:47](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=347)** So I would recommend you watch this and then build it.
>
> **[5:51](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=351)** If you're familiar with how to build a node and an express server.
>
> **[5:55](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=355)** And then let's go and pass true.
>
> **[6:01](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=361)** And then the last one is course that we're going to pass.
>
> **[6:05](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=365)** So basically the function.
>
> **[6:09](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=369)** And finally app.listen.
>
> **[6:13](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=373)** And what am going to do while I'm here, I'm going to create a variable that will hold the port number as opposed to always type the same port number.
>
> **[6:22](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=382)** So I'm going to use that and pass it on.
>
> **[6:24](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=384)** So app, listen on port, and then pass the options for that function.
>
> **[6:33](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=393)** So we're going to do a console log where we're going to do templates string server is running on port, and then I'm going to use the template strings and pass the value port.
>
> **[6:48](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=408)** So it's going to show 4,000 perfect.
>
> **[6:54](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=414)** Okay, so we're done with the base of our server.
>
> **[6:57](https://www.linkedin.com/learning/react-securing-applications-2/initial-setup-of-your-server?u=76281980&t=417)** Let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (3), [[npm]] (3), [[React.js|React]] (2), [[CLI]] (1)
> **Env Vars:** npm (3), jwt (3), jwks (2), api (1), cli (1)
> **CLI Commands:** npm (3), make (2), node (2), cd (1)
> **Prerequisites:** install (5), set up (1)
> **File Paths:** package.json (2), index.js (2), app.usebodyparser.json (1)
> **Tools:** terminal (3), vs code (1)
> **UI Navigation:** click on (1), open the (1)
> **Cross-References:** in the next (1)

#### [Create your API endpoints](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=0)** - [Instructor] Now that we've got a server running.
>
> **[0:02](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=2)** We can start adding the code we need to serve API endpoints.
>
> **[0:05](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=5)** Let's get to it.
>
> **[0:07](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=7)** So, if you go into the Exercise Files, and then in the Resources folder here, you have a data.txt.
>
> **[0:13](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=13)** So, this is basically the data that we're going to serve for the front end to read.
>
> **[0:18](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=18)** So, if we take a look at this, this is basically a list of some of my old courses, and we're going to create a data point with that.
>
> **[0:26](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=26)** So, what I'm going to do is basically copy all of this.
>
> **[0:30](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=30)** And copy it like so.
>
> **[0:33](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=33)** So, that's all you need to do.
>
> **[0:34](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=34)** And now what we're going to do is go back to our code in VS code, and we're going to create inside of the index dot js a get call, and that's going to be our end point.
>
> **[0:46](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=46)** So, let's go ahead and do that.
>
> **[0:47](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=47)** So, after somewhere around here, I'm going to create a get endpoint, and this is going to be a list of my courses.
>
> **[0:59](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=59)** And then a request and response, which are primarily the arguments that we take with a get call.
>
> **[1:08](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=68)** And then inside of it, I'll create an array of courses, which will hold the data that we just copied, like so.
>
> **[1:16](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=76)** And then just paste the information like so.
>
> **[1:19](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=79)** And as you can see, it's already pre formatted for you, and you have a list of all the courses.
>
> **[1:24](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=84)** So, we have all the data we need in here.
>
> **[1:28](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=88)** And this is what will serve to the front end.
>
> **[1:31](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=91)** And the last thing we need to do, is do a response.
>
> **[1:35](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=95)** And we'll do that after the array.
>
> **[1:37](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=97)** So, when we close the array here, I'm going to do response [[JSON]], and then pass the courses to it.
>
> **[1:46](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=106)** So, that will be the response.
>
> **[1:49](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=109)** Perfect.
>
> **[1:50](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=110)** So, if we save this, we have what we need in here.
>
> **[1:53](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=113)** And then what we need to do is basically start the server and test this.
>
> **[1:59](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=119)** If you're not familiar with Postman, this is a great tool to test.
>
> **[2:02](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=122)** But I'm going to do this in the browser, which is primarily the same thing.
>
> **[2:06](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=126)** So, let's go ahead and start the server and see if there's not any issues with the server.
>
> **[2:11](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=131)** And I'm going to bring up my Terminal to do that.
>
> **[2:14](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=134)** Or what you could do to get faster to that folder is do a right click on the folder, and then open in Terminal.
>
> **[2:21](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=141)** And I'm going to do an [[npm]] start.
>
> **[2:25](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=145)** So, what we are missing right now is a script to start our server.
>
> **[2:28](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=148)** So, let's go ahead and make sure that we have one.
>
> **[2:31](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=151)** So, what we could do is go inside of the package dot JSON file here and remove the test script and replace it with the start script.
>
> **[2:40](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=160)** So, we're going to do that.
>
> **[2:41](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=161)** Let's do start, nodemon, index dot js.
>
> **[2:48](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=168)** So, this is the startup file.
>
> **[2:51](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=171)** And then we're going to make sure it goes through Babel, to use the latest version of [[JavaScript]], like so.
>
> **[3:00](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=180)** Alright, let's save this.
>
> **[3:01](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=181)** Now, we have a start script.
>
> **[3:02](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=182)** Now, we shouldn't have any issues.
>
> **[3:06](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=186)** And now our server is running on port 4000.
>
> **[3:09](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=189)** And you can test this in the browser if you want.
>
> **[3:11](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=191)** So basically, the endpoint that we need to test is the courses here.
>
> **[3:16](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=196)** So, basically what you need do is localhost Port 4000, and then do forward slash courses.
>
> **[3:22](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=202)** So, we're going to do this in the browser, and then as the response, we should see the data that we have in here.
>
> **[3:27](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=207)** Let's go back into our browser, and then do localhost, 4000, and then forward slash, courses.
>
> **[3:39](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=219)** And it's a little bit compiled.
>
> **[3:42](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=222)** But this is the data that I'm expecting.
>
> **[3:45](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=225)** So, as you can see, we have the Id one here, title, building an App, in ReactJS and Meteor.
>
> **[3:51](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=231)** JS and so on, so forth.
>
> **[3:52](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=232)** So, this is the response that we're expecting.
>
> **[3:55](https://www.linkedin.com/learning/react-securing-applications-2/create-your-api-endpoints?u=76281980&t=235)** So, now what we're going to do in the following few videos, we're going to connect to this data from the front end, and also making sure that we're doing it securely.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (2), [[npm]] (1), [[JavaScript]] (1)
> **Tools:** terminal (2), vs code (1), postman (1)
> **CLI Commands:** make (2), npm (1)
> **Env Vars:** json (2), api (1)
> **Ports:** port 4000 (2)
> **Definitions:** is a  (2)
> **File Paths:** data.txt (1)
> **Cross-References:** go back to (1)

#### [Initial Auth0 setup](https://www.linkedin.com/learning/react-securing-applications-2/initial-auth0-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-securing-applications-2/initial-auth0-setup?u=76281980&t=0)** - [Instructor] Okay, so now that we have our application, so the server done and the client done, let's go ahead and secure our [[React.js|react]] application.
>
> **[0:08](https://www.linkedin.com/learning/react-securing-applications-2/initial-auth0-setup?u=76281980&t=8)** So what we're going to do now is go to Auth0.
>
> **[0:11](https://www.linkedin.com/learning/react-securing-applications-2/initial-auth0-setup?u=76281980&t=11)** So if you're not logged in into Auth0, and let me just log out just to show you.
>
> **[0:16](https://www.linkedin.com/learning/react-securing-applications-2/initial-auth0-setup?u=76281980&t=16)** And then, what you could do is go directly to Auth0, like so.
>
> **[0:22](https://www.linkedin.com/learning/react-securing-applications-2/initial-auth0-setup?u=76281980&t=22)** And then click here, and then log in.
>
> **[0:29](https://www.linkedin.com/learning/react-securing-applications-2/initial-auth0-setup?u=76281980&t=29)** And then log in with [[GitHub]] or whichever one you want to log in, inside of Auth0.
>
> **[0:36](https://www.linkedin.com/learning/react-securing-applications-2/initial-auth0-setup?u=76281980&t=36)** And once you're logged in, all you have to do at this point is go ahead and create an application.
>
> **[0:41](https://www.linkedin.com/learning/react-securing-applications-2/initial-auth0-setup?u=76281980&t=41)** So I'm going to name this react application.
>
> **[0:47](https://www.linkedin.com/learning/react-securing-applications-2/initial-auth0-setup?u=76281980&t=47)** And then, select the single page application, like so.
>
> **[0:52](https://www.linkedin.com/learning/react-securing-applications-2/initial-auth0-setup?u=76281980&t=52)** And then click create.
>
> **[0:55](https://www.linkedin.com/learning/react-securing-applications-2/initial-auth0-setup?u=76281980&t=55)** And then, what you could do is go into here and click react.
>
> **[1:00](https://www.linkedin.com/learning/react-securing-applications-2/initial-auth0-setup?u=76281980&t=60)** And now, let's go ahead and download the sample, 'cause we're going to get some files directly from the sample and then put them inside of our current project in react.
>
> **[1:12](https://www.linkedin.com/learning/react-securing-applications-2/initial-auth0-setup?u=76281980&t=72)** So yes, we're going to do all this.
>
> **[1:14](https://www.linkedin.com/learning/react-securing-applications-2/initial-auth0-setup?u=76281980&t=74)** You can click on download.
>
> **[1:18](https://www.linkedin.com/learning/react-securing-applications-2/initial-auth0-setup?u=76281980&t=78)** And then, what we're going to do is go into the settings and do exactly what they're recommending here.
>
> **[1:23](https://www.linkedin.com/learning/react-securing-applications-2/initial-auth0-setup?u=76281980&t=83)** So, let's go into the application settings, so you can get this from the settings right here.
>
> **[1:29](https://www.linkedin.com/learning/react-securing-applications-2/initial-auth0-setup?u=76281980&t=89)** And what you need to do is scroll down until you're seeing allowed callback, and that's the first place you're going to go and put H-T-T-P local host, and the port 3000, like so.
>
> **[1:48](https://www.linkedin.com/learning/react-securing-applications-2/initial-auth0-setup?u=76281980&t=108)** And copy that.
>
> **[1:51](https://www.linkedin.com/learning/react-securing-applications-2/initial-auth0-setup?u=76281980&t=111)** And then, do that again for allowed web origins, and then, the same for allowed logout URLs, like so.
>
> **[2:00](https://www.linkedin.com/learning/react-securing-applications-2/initial-auth0-setup?u=76281980&t=120)** And then, scroll all the way down to here, and then save changes.
>
> **[2:05](https://www.linkedin.com/learning/react-securing-applications-2/initial-auth0-setup?u=76281980&t=125)** Okay.
>
> **[2:06](https://www.linkedin.com/learning/react-securing-applications-2/initial-auth0-setup?u=76281980&t=126)** So now that we have this, we have also the files that we downloaded.
>
> **[2:11](https://www.linkedin.com/learning/react-securing-applications-2/initial-auth0-setup?u=76281980&t=131)** So if we go into our downloads, and get this, which we'll file here, so I'm going to put this on my desktop, like so.
>
> **[2:23](https://www.linkedin.com/learning/react-securing-applications-2/initial-auth0-setup?u=76281980&t=143)** And then extract it.
>
> **[2:26](https://www.linkedin.com/learning/react-securing-applications-2/initial-auth0-setup?u=76281980&t=146)** Perfect.
>
> **[2:27](https://www.linkedin.com/learning/react-securing-applications-2/initial-auth0-setup?u=76281980&t=147)** So now, I have all the files that I need inside of that folder, and then, we'll keep working on the secure client, and provide a log in and log out protocol inside of our react application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (5), [[GitHub]] (1)
> **UI Navigation:** go to (1), select the (1), click on (1), scroll down (1)
> **Ports:** port 3000 (1)
> **Tools:** github (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### [Adding the files and code from Auth0](https://www.linkedin.com/learning/react-securing-applications-2/adding-the-files-and-code-from-auth0?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-securing-applications-2/adding-the-files-and-code-from-auth0?u=76281980&t=0)** - [Instructor] So the next thing we need to do is to copy and paste the right files into our current project from what we just downloaded from Auth0.
>
> **[0:08](https://www.linkedin.com/learning/react-securing-applications-2/adding-the-files-and-code-from-auth0?u=76281980&t=8)** So what we're going to do is first open the login folder.
>
> **[0:11](https://www.linkedin.com/learning/react-securing-applications-2/adding-the-files-and-code-from-auth0?u=76281980&t=11)** So, this is the actual folder that contains the files that we need.
>
> **[0:15](https://www.linkedin.com/learning/react-securing-applications-2/adding-the-files-and-code-from-auth0?u=76281980&t=15)** And then, open the secure folder where we have our client and our server, and then, let's click on client.
>
> **[0:22](https://www.linkedin.com/learning/react-securing-applications-2/adding-the-files-and-code-from-auth0?u=76281980&t=22)** And we're going to need is to go in the source folder, and then copy a few files.
>
> **[0:27](https://www.linkedin.com/learning/react-securing-applications-2/adding-the-files-and-code-from-auth0?u=76281980&t=27)** So the first few that we need are in the source folder, as well in the login, so let's click on source.
>
> **[0:33](https://www.linkedin.com/learning/react-securing-applications-2/adding-the-files-and-code-from-auth0?u=76281980&t=33)** And it's the same whether you're on a Mac or [[Windows]].
>
> **[0:36](https://www.linkedin.com/learning/react-securing-applications-2/adding-the-files-and-code-from-auth0?u=76281980&t=36)** And then, what we're going to do is grab the auth config dot [[JSON]], so this is the file that we need that contains your information.
>
> **[0:45](https://www.linkedin.com/learning/react-securing-applications-2/adding-the-files-and-code-from-auth0?u=76281980&t=45)** So, we're going to grab this file here.
>
> **[0:48](https://www.linkedin.com/learning/react-securing-applications-2/adding-the-files-and-code-from-auth0?u=76281980&t=48)** Also, we're going to grab the config, and that's it for this folder.
>
> **[0:52](https://www.linkedin.com/learning/react-securing-applications-2/adding-the-files-and-code-from-auth0?u=76281980&t=52)** So what you do, you copy those inside of source, like so.
>
> **[0:59](https://www.linkedin.com/learning/react-securing-applications-2/adding-the-files-and-code-from-auth0?u=76281980&t=59)** Now, we're going to need, also from utils here, the history.
>
> **[1:03](https://www.linkedin.com/learning/react-securing-applications-2/adding-the-files-and-code-from-auth0?u=76281980&t=63)** So let's go ahead and copy this, and I'm going to put this on my main folder.
>
> **[1:08](https://www.linkedin.com/learning/react-securing-applications-2/adding-the-files-and-code-from-auth0?u=76281980&t=68)** And the last one that I'd like to grab is in the components.
>
> **[1:11](https://www.linkedin.com/learning/react-securing-applications-2/adding-the-files-and-code-from-auth0?u=76281980&t=71)** There is a loading dot JS file.
>
> **[1:13](https://www.linkedin.com/learning/react-securing-applications-2/adding-the-files-and-code-from-auth0?u=76281980&t=73)** I'm going to put this in my components.
>
> **[1:15](https://www.linkedin.com/learning/react-securing-applications-2/adding-the-files-and-code-from-auth0?u=76281980&t=75)** So I'm going to click in components here, and I'm going to grab this file here.
>
> **[1:19](https://www.linkedin.com/learning/react-securing-applications-2/adding-the-files-and-code-from-auth0?u=76281980&t=79)** So loading, I'm going to option click and grab it and bring it here.
>
> **[1:25](https://www.linkedin.com/learning/react-securing-applications-2/adding-the-files-and-code-from-auth0?u=76281980&t=85)** And while we're at it, let's make sure that we have the image that's related to this file.
>
> **[1:30](https://www.linkedin.com/learning/react-securing-applications-2/adding-the-files-and-code-from-auth0?u=76281980&t=90)** So let's go and drag with the option to this folder.
>
> **[1:35](https://www.linkedin.com/learning/react-securing-applications-2/adding-the-files-and-code-from-auth0?u=76281980&t=95)** So this is all we need from the actual copying and pasting from the projects.
>
> **[1:40](https://www.linkedin.com/learning/react-securing-applications-2/adding-the-files-and-code-from-auth0?u=76281980&t=100)** Then, next thing we need to do is go inside of our secure folder in DS code, so I'm going to make sure that DS code is open.
>
> **[1:47](https://www.linkedin.com/learning/react-securing-applications-2/adding-the-files-and-code-from-auth0?u=76281980&t=107)** And while we're at it, let's make sure that our server is running, because we're not going to make any other changes to the server, and want to make sure that once we start our application, we have access to this data as well.
>
> **[1:59](https://www.linkedin.com/learning/react-securing-applications-2/adding-the-files-and-code-from-auth0?u=76281980&t=119)** So, let's go and open up our terminal.
>
> **[2:04](https://www.linkedin.com/learning/react-securing-applications-2/adding-the-files-and-code-from-auth0?u=76281980&t=124)** And you can go to view, and open up the terminal like so, or use the control grab, a little shortcut that we have in here.
>
> **[2:12](https://www.linkedin.com/learning/react-securing-applications-2/adding-the-files-and-code-from-auth0?u=76281980&t=132)** But because we are in the main directory, this is not going to work if we go [[npm]] start, so you want to be in the server directory.
>
> **[2:20](https://www.linkedin.com/learning/react-securing-applications-2/adding-the-files-and-code-from-auth0?u=76281980&t=140)** So let's go and do CD server, like so.
>
> **[2:24](https://www.linkedin.com/learning/react-securing-applications-2/adding-the-files-and-code-from-auth0?u=76281980&t=144)** And then, we're going to do an NPM start.
>
> **[2:29](https://www.linkedin.com/learning/react-securing-applications-2/adding-the-files-and-code-from-auth0?u=76281980&t=149)** So now the server is running, and then we're going to open a brand new window to install a few things inside of our client.
>
> **[2:37](https://www.linkedin.com/learning/react-securing-applications-2/adding-the-files-and-code-from-auth0?u=76281980&t=157)** So let's go ahead and do CD client.
>
> **[2:42](https://www.linkedin.com/learning/react-securing-applications-2/adding-the-files-and-code-from-auth0?u=76281980&t=162)** And you could have done this by right-clicking and then open in terminal, but just want to show you different ways of doing the exact same thing.
>
> **[2:49](https://www.linkedin.com/learning/react-securing-applications-2/adding-the-files-and-code-from-auth0?u=76281980&t=169)** So now, what we're going to do is install a few more dependencies for the client.
>
> **[2:52](https://www.linkedin.com/learning/react-securing-applications-2/adding-the-files-and-code-from-auth0?u=76281980&t=172)** So, the first one that we need is, let's go ahead and do NPM I, the auth library.
>
> **[3:00](https://www.linkedin.com/learning/react-securing-applications-2/adding-the-files-and-code-from-auth0?u=76281980&t=180)** And it's the Auth0 dash spa dash JS.
>
> **[3:08](https://www.linkedin.com/learning/react-securing-applications-2/adding-the-files-and-code-from-auth0?u=76281980&t=188)** So that's the first one that we need.
>
> **[3:09](https://www.linkedin.com/learning/react-securing-applications-2/adding-the-files-and-code-from-auth0?u=76281980&t=189)** And also, we need axios, and that's pretty much what we need.
>
> **[3:14](https://www.linkedin.com/learning/react-securing-applications-2/adding-the-files-and-code-from-auth0?u=76281980&t=194)** So, install those two, and while we're at it, let's go into our client and open up our package dot JSON file, just to make sure that we see them here.
>
> **[3:26](https://www.linkedin.com/learning/react-securing-applications-2/adding-the-files-and-code-from-auth0?u=76281980&t=206)** So now we have Auth0, we have axios, and everything else that we need, perfect.
>
> **[3:31](https://www.linkedin.com/learning/react-securing-applications-2/adding-the-files-and-code-from-auth0?u=76281980&t=211)** So now that we have all the dependencies that we need and the files transferred from the actual files that we downloaded from Auth0, we are ready to make some changes to the code so we can secure [[React.js|react]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (3), [[JSON]] (2), [[Windows]] (1), [[React.js|React]] (1)
> **CLI Commands:** make (7), npm (3), cd (2)
> **Env Vars:** npm (3), json (2)
> **UI Navigation:** open the (2), click on (2), go to (1)
> **Tools:** terminal (3)
> **Prerequisites:** install (3)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Update index for Auth0 integration](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=0)** - [Instructor ] So now we're going to work on the index dot JS file.
>
> **[0:03](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=3)** And what we're going to do is run the application and as we start working on the index, we're going to see a bunch of errors show up and we're going to fix them as we actually work on the files.
>
> **[0:14](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=14)** So let's go ahead and do an [[npm]]-start.
>
> **[0:17](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=17)** You want to make sure you're on the client.
>
> **[0:18](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=18)** So if you're not, you can do a right click on the client here and Open in Terminal.
>
> **[0:24](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=24)** So once you have the application running, you see that right away we have in there.
>
> **[0:29](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=29)** So this is from the dangerously set inner [[HTML]] error.
>
> **[0:33](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=33)** So let's go ahead and fix that right away.
>
> **[0:35](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=35)** So the first thing we're going to do is go inside of D app right in the components right here, app dot JS and let's just remove this function that breaks our application and then go all the way down here to remove that component.
>
> **[0:55](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=55)** And then let's save it.
>
> **[0:57](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=57)** And then let's go back and our application is working again.
>
> **[1:01](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=61)** So that's the first thing.
>
> **[1:02](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=62)** So now we're going to go into the index, which is at the top level here.
>
> **[1:07](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=67)** So index dot JS like so.
>
> **[1:10](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=70)** And we're going to copy the code from the index dot JS on the application that we downloaded.
>
> **[1:17](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=77)** But now we're going to have to actually fix a whole bunch of stuff.
>
> **[1:20](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=80)** Once we paste it here.
>
> **[1:21](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=81)** And I'm going to explain what the code is as we fix it.
>
> **[1:25](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=85)** So let's go on our desktop like so and grab this folder here and then go into the source.
>
> **[1:33](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=93)** And then the index, simply drag and drop it inside of S code like so.
>
> **[1:40](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=100)** So what we're going to do now is copy all that code.
>
> **[1:43](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=103)** So control or command A and then control or command C and then let's go into our own file and let's go again and do control or command A and then control or command V so we can actually base all the code that we copied.
>
> **[2:02](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=122)** So now we can close this file and now let's just break our application.
>
> **[2:06](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=126)** So let's save that and everything is going to break loose.
>
> **[2:10](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=130)** All right.
>
> **[2:10](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=130)** So the first thing we need to do is fix the imports.
>
> **[2:13](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=133)** So we do need to make sure that we are connecting to the right thing here.
>
> **[2:17](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=137)** So the first thing we need to fix is cannot find apps.
>
> **[2:21](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=141)** So let's go and make sure it finds app.
>
> **[2:23](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=143)** So this is in the components folder like so, save that, can't resolve index.CSS.
>
> **[2:32](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=152)** We don't have an index.CSS in our projects.
>
> **[2:34](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=154)** So let's remove that.
>
> **[2:36](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=156)** Boom, can't resolve utils history so let's fix that as well.
>
> **[2:41](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=161)** So this is in the main folder here.
>
> **[2:45](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=165)** So if we close the source, it's in the main source folder.
>
> **[2:48](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=168)** So let's go and simply do that like so and now our application is working again.
>
> **[2:56](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=176)** So let me explain what's happening here.
>
> **[2:58](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=178)** So the first thing we're doing is we're using [[React.js|React]] Router in this application here and we start to actually provide some security inside of this application.
>
> **[3:08](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=188)** So we haven't AuthoProvider and now it grabs all the information from your file and I'm not going to show it on screen, but there's the App configure tracing file, which contains your information.
>
> **[3:21](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=201)** And it grabs it from that file here.
>
> **[3:23](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=203)** And then make sure that as we connect the application, we have all that information and there are indeed an add user inside of this config here.
>
> **[3:33](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=213)** So this is the first thing we do.
>
> **[3:36](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=216)** And then we are basically rendering domain app application.
>
> **[3:39](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=219)** So let me just remove this like so, and the usual service worker from this application.
>
> **[3:46](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=226)** So now we're up and running and we can save this application.
>
> **[3:50](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=230)** So if we go back to our browser or application is back here.
>
> **[3:55](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=235)** So we still have the list of courses.
>
> **[3:57](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=237)** Okay.
>
> **[3:58](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=238)** So now we're done with the index dot JS file.
>
> **[4:00](https://www.linkedin.com/learning/react-securing-applications-2/update-index-for-auth0-integration?u=76281980&t=240)** So let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (1), [[HTML]] (1), [[React.js|React]] (1)
> **CLI Commands:** make (4), npm (1), find (1)
> **Env Vars:** css (2), html (1)
> **File Paths:** index.css (2)
> **UI Navigation:** click on (1), drag and drop (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **Prerequisites:** configure (1)

#### [Add connections to server](https://www.linkedin.com/learning/react-securing-applications-2/add-connections-to-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-securing-applications-2/add-connections-to-server?u=76281980&t=0)** - [Instructor] Okay so now let's work on the main file, the app.js, so go back into the client project, and go into components inside of source, and open up app.js.
>
> **[0:12](https://www.linkedin.com/learning/react-securing-applications-2/add-connections-to-server?u=76281980&t=12)** So the first thing we're going to do is fix our imports and make sure we have everything that we need.
>
> **[0:17](https://www.linkedin.com/learning/react-securing-applications-2/add-connections-to-server?u=76281980&t=17)** So, the first thing that I'm going to do is import axios 'cause we're going to need that.
>
> **[0:22](https://www.linkedin.com/learning/react-securing-applications-2/add-connections-to-server?u=76281980&t=22)** So let's go and import axios from axios.
>
> **[0:29](https://www.linkedin.com/learning/react-securing-applications-2/add-connections-to-server?u=76281980&t=29)** Perfect.
>
> **[0:30](https://www.linkedin.com/learning/react-securing-applications-2/add-connections-to-server?u=76281980&t=30)** Now, we're going to also import, useAuthO from [[React.js|react]]-auth-spa, like so, and then we'll also import our history, there's a lot of stuff that's going to happen directly inside of app that's why we're focusing only on that one for now.
>
> **[0:54](https://www.linkedin.com/learning/react-securing-applications-2/add-connections-to-server?u=76281980&t=54)** And now we're going to import our history file, like so, 'cause we're going to need it with our react router.
>
> **[1:03](https://www.linkedin.com/learning/react-securing-applications-2/add-connections-to-server?u=76281980&t=63)** Now the next thing we're going to need to do is first remove import data, so we're not going to need the data from there anymore, and we're also going to import the loading that we added, the file that we just added not so long ago.
>
> **[1:21](https://www.linkedin.com/learning/react-securing-applications-2/add-connections-to-server?u=76281980&t=81)** And by the way I'm using both styles here in my files so if you want to have a singular style you do something like this, and switch it like so, it's entirely up to you, just to show you that you can do both, no problem, in the file.
>
> **[1:33](https://www.linkedin.com/learning/react-securing-applications-2/add-connections-to-server?u=76281980&t=93)** It typically use single quotes as opposed to double quotes, and I don't know why I started doing double quotes here, probably because some of the code was with double quotes, so, anyways, just a little note for you.
>
> **[1:46](https://www.linkedin.com/learning/react-securing-applications-2/add-connections-to-server?u=76281980&t=106)** All right so now we have loading here, perfect.
>
> **[1:51](https://www.linkedin.com/learning/react-securing-applications-2/add-connections-to-server?u=76281980&t=111)** So now we can go into our code and start using some of the syntax or code that we just did.
>
> **[1:56](https://www.linkedin.com/learning/react-securing-applications-2/add-connections-to-server?u=76281980&t=116)** All right, the first thing that I want to do is remove this, and I left this for a reason.
>
> **[2:01](https://www.linkedin.com/learning/react-securing-applications-2/add-connections-to-server?u=76281980&t=121)** Unsafe component will mount.
>
> **[2:03](https://www.linkedin.com/learning/react-securing-applications-2/add-connections-to-server?u=76281980&t=123)** So this is no longer used in react.
>
> **[2:06](https://www.linkedin.com/learning/react-securing-applications-2/add-connections-to-server?u=76281980&t=126)** So I just wanted to leave it there so you know about it and you can read about it, but, what I'm going to do as opposed to component will mount, what I'm going to use instead is async, so, this is an async function, component did mount, like so.
>
> **[2:24](https://www.linkedin.com/learning/react-securing-applications-2/add-connections-to-server?u=76281980&t=144)** All right, and once we have this, what I want to do is use axios to connect to the back end server.
>
> **[2:34](https://www.linkedin.com/learning/react-securing-applications-2/add-connections-to-server?u=76281980&t=154)** So lets do HTTP, local host, four thousand, the server is on port four thousand, and I want to get courses.
>
> **[2:47](https://www.linkedin.com/learning/react-securing-applications-2/add-connections-to-server?u=76281980&t=167)** And now what were going to do is create the response with axios.
>
> **[2:53](https://www.linkedin.com/learning/react-securing-applications-2/add-connections-to-server?u=76281980&t=173)** So, await axios dot get, what we get from the URL, like so, and then finally return this dot state, set state, with what we got as a response.
>
> **[3:13](https://www.linkedin.com/learning/react-securing-applications-2/add-connections-to-server?u=76281980&t=193)** So we're going to update our state, with the response data.
>
> **[3:21](https://www.linkedin.com/learning/react-securing-applications-2/add-connections-to-server?u=76281980&t=201)** So as opposed to load it manually, with the data here, we're going to get it from the server.
>
> **[3:26](https://www.linkedin.com/learning/react-securing-applications-2/add-connections-to-server?u=76281980&t=206)** So at least we're doing this right now.
>
> **[3:29](https://www.linkedin.com/learning/react-securing-applications-2/add-connections-to-server?u=76281980&t=209)** Okay, so feel free to delete the data folder if you want, but I'm going to leave it there, and then in our render, we' re going to make sure that if there's any problems, we have a loading component that we're using.
>
> **[3:49](https://www.linkedin.com/learning/react-securing-applications-2/add-connections-to-server?u=76281980&t=229)** Okay, so we're basically deconstructing this particular item here, and then what we're going to do if loading return loading,
>
> **[4:08](https://www.linkedin.com/learning/react-securing-applications-2/add-connections-to-server?u=76281980&t=248)** like so.
>
> **[4:09](https://www.linkedin.com/learning/react-securing-applications-2/add-connections-to-server?u=76281980&t=249)** Otherwise, return this.
>
> **[4:12](https://www.linkedin.com/learning/react-securing-applications-2/add-connections-to-server?u=76281980&t=252)** And the last thing we need to do here is pass the history to our router here, so let's do that, history, like so, and if you want to have more information about what that is, you can look into the documentation on react router dom.
>
> **[4:33](https://www.linkedin.com/learning/react-securing-applications-2/add-connections-to-server?u=76281980&t=273)** Okay so once we actually save this, we're going to have a few errors that are going to show up.
>
> **[4:40](https://www.linkedin.com/learning/react-securing-applications-2/add-connections-to-server?u=76281980&t=280)** Some of them we'll fix in future videos, and some of them we'll fix now.
>
> **[4:44](https://www.linkedin.com/learning/react-securing-applications-2/add-connections-to-server?u=76281980&t=284)** So let's go ahead and save, and now the first thing that we're getting is the components loading, so let's go ahead and do that, so double click on loading, and the reason why this is not working, it's because loading is not in the assets, but it's actually in the same folder.
>
> **[5:02](https://www.linkedin.com/learning/react-securing-applications-2/add-connections-to-server?u=76281980&t=302)** So let's do this, and make sure that we're getting to this properly.
>
> **[5:10](https://www.linkedin.com/learning/react-securing-applications-2/add-connections-to-server?u=76281980&t=310)** Loading dot SVG.
>
> **[5:13](https://www.linkedin.com/learning/react-securing-applications-2/add-connections-to-server?u=76281980&t=313)** Awesome, so let's save this, and everything is back to normal.
>
> **[5:18](https://www.linkedin.com/learning/react-securing-applications-2/add-connections-to-server?u=76281980&t=318)** Okay, so now that we have all of this done, the next stage is to update the navigation to make sure that we can actually have a menu at the top.
>
> **[5:28](https://www.linkedin.com/learning/react-securing-applications-2/add-connections-to-server?u=76281980&t=328)** So if we go back to our browser right now, everything is running as it should, but what I'd like to do is be able to have a login and a logout for our application, and this is why we actually did a setup with authO.
>
> **[5:43](https://www.linkedin.com/learning/react-securing-applications-2/add-connections-to-server?u=76281980&t=343)** So let's go ahead and finish that soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (4)
> **CLI Commands:** make (4)
> **Env Vars:** http (1), url (1), svg (1)
> **File Paths:** app.js (2)
> **Code Identifiers:** useautho (1), autho (1)
> **Cross-References:** go back to (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** click on (1)

#### [Finalize menu with login](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=0)** - [Instructor] Okay, so the last thing that we need to do is update the navigation inside of our application, so we can actually log in and log out of our application.
>
> **[0:09](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=9)** So let's go ahead and go into the Navigation file right here.
>
> **[0:14](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=14)** So the first thing we're going to need to do is import a few things.
>
> **[0:17](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=17)** So let's go ahead and import the special file that we have in here inside of that particular file here.
>
> **[0:24](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=24)** So let's go ahead and do that.
>
> **[0:26](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=26)** So I'm going to useAuth0 from [[React.js|react]]-auth0-spa, like so.
>
> **[0:37](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=37)** And then what we'll do is start coding a few elements inside of our component.
>
> **[0:42](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=42)** So let's go ahead and first use what we just imported, and I'm going to first open and close my curly braces, and then useAuth0, and this is a function, and then inside of our curly braces, I will deconstruct what I need.
>
> **[0:59](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=59)** So the first one that I need is isAuthenticated.
>
> **[1:06](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=66)** The second one is loginWithRedirect.
>
> **[1:12](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=72)** And finally, logout.
>
> **[1:16](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=76)** Once I have these, I'm able to use these.
>
> **[1:18](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=78)** So basically, what this allows us to do is first check, is this user authenticated?
>
> **[1:24](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=84)** If yes, show specific things, if not, do not.
>
> **[1:28](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=88)** So what we're going to do, is have on top of our component, the header, and then under the header, we're going to be able to check, is this user authenticated?
>
> **[1:40](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=100)** If not, then you can show the menu, otherwise you can't.
>
> **[1:43](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=103)** So let's go ahead and do that.
>
> **[1:44](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=104)** So the first thing I'm going to do is hit return here, and then inside of curly braces, I'm going to, if it's not authenticated, like so, then do this, and what I'm going to do is create, let's copy all this, like so, and paste it there, so I can leverage some of the things here.
>
> **[2:11](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=131)** And I'm going to remove these guys here, and create a button to log in.
>
> **[2:19](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=139)** So let's go ahead and create the button, with an onClick, and if it's clicked then you loginWithRedirect, like so.
>
> **[2:35](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=155)** And then let's close the button, and call this Log in, like so.
>
> **[2:41](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=161)** Perfect, so now, if we're not logged in, show this button to log in.
>
> **[2:46](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=166)** As simple as that.
>
> **[2:49](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=169)** And then we're going to do something very similar, so let's copy this, and then paste it under.
>
> **[3:03](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=183)** And now, if we're actually authenticated, so as opposed to do the opposite, we're going to do isAuthenticated then show something else.
>
> **[3:13](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=193)** So as opposed to loginWithRedirect, we're going to basically do a logout.
>
> **[3:20](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=200)** So let's take those out here, like so, logout, which is a function, and then let's close our curly brace, onClick the button, everything is good.
>
> **[3:35](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=215)** We have also our navigation here, so what I want to make sure is that we're showing the navigation that we had in our original application if we're logged in.
>
> **[3:45](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=225)** So let's go and copy that, and I'm going to put the logout button last, like so, so we have still our links to Home, About, and Contact and the button to logout.
>
> **[4:00](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=240)** All right, so now that we have that, we could remove this section here, like so, and we have the header of our application, which doesn't change, so we're all set.
>
> **[4:14](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=254)** So let's save this, and make sure there's no errors, and everything is good.
>
> **[4:19](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=259)** And then let's go back to our browser, and we have a login button now.
>
> **[4:26](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=266)** So what is this button?
>
> **[4:27](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=267)** So let's click on it, and now this is going to bring me to the React application log in on Auth0, so I can log in anyway I want.
>
> **[4:38](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=278)** So let's go ahead and log in with [[Google]].
>
> **[4:45](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=285)** And now I'm logged in, and it's showing me my menu.
>
> **[4:50](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=290)** And this is exactly what I wanted.
>
> **[4:52](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=292)** If you want to logout, you can click here and you're logged out.
>
> **[4:57](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=297)** And I just saw something, it doesn't say log out, so I just need to fix this in the application.
>
> **[5:02](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=302)** So let's go and change this from Log in to Logout, perfect.
>
> **[5:08](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=308)** And then let's go back to our browser, login.
>
> **[5:15](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=315)** I'm logged in, and now it says Logout, and we're all set.
>
> **[5:18](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=318)** So if I click on Logout, I'm logged out.
>
> **[5:22](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=322)** So the one thing you could do to make this even further inside of the authentication, but it's the same principle, is use these functions that we use inside of the navigation across your application.
>
> **[5:34](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=334)** So if you don't want to show the Feed, what you could do is pass these specific things inside of that component, and then make this application a little bit more secure, in terms of what's it showing or not.
>
> **[5:46](https://www.linkedin.com/learning/react-securing-applications-2/finalize-menu-with-login?u=76281980&t=346)** So this is how you can actually secure or create a log in and logout, with Auth0 inside of React.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (3), [[Google]] (1)
> **Code Identifiers:** loginwithredirect (3), useauth0 (2), isauthenticated (2), onclick (2)
> **CLI Commands:** make (4)
> **UI Navigation:** click on (2)
> **Definitions:** is a  (2)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)


### 4. Other React Considerations

[↑ Back to Table of Contents](#table-of-contents)

#### [React considerations for security](https://www.linkedin.com/learning/react-securing-applications-2/react-considerations-for-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-securing-applications-2/react-considerations-for-security?u=76281980&t=0)** - [Instructor] As a basic rule, you should never think you're done with security.
>
> **[0:04](https://www.linkedin.com/learning/react-securing-applications-2/react-considerations-for-security?u=76281980&t=4)** It's always something to keep an eye on, especially when you're dealing with user data.
>
> **[0:08](https://www.linkedin.com/learning/react-securing-applications-2/react-considerations-for-security?u=76281980&t=8)** So as a general rule, always go back to the documentation to see the latest updates to [[React.js|React]] syntax and how it impacts your application and security.
>
> **[0:17](https://www.linkedin.com/learning/react-securing-applications-2/react-considerations-for-security?u=76281980&t=17)** The React team spends a lot of time improving the code of the library so it is more reliable, secure, and easy to implement in your application.
>
> **[0:25](https://www.linkedin.com/learning/react-securing-applications-2/react-considerations-for-security?u=76281980&t=25)** So if there are new syntax changes, like the recent update to componentWillMount, there is a reason, and investigate how that impacts your code.
>
> **[0:34](https://www.linkedin.com/learning/react-securing-applications-2/react-considerations-for-security?u=76281980&t=34)** I kept a specific item in the code for a good part of the course to make a point.
>
> **[0:39](https://www.linkedin.com/learning/react-securing-applications-2/react-considerations-for-security?u=76281980&t=39)** So case in point, syntax changes to make the libraries better and more secure.
>
> **[0:45](https://www.linkedin.com/learning/react-securing-applications-2/react-considerations-for-security?u=76281980&t=45)** Make sure to read why and understand the changes needed.
>
> **[0:48](https://www.linkedin.com/learning/react-securing-applications-2/react-considerations-for-security?u=76281980&t=48)** Never publish configuration files, user data, or login information, like for example, in our project we have the configuration files from Otho.
>
> **[0:58](https://www.linkedin.com/learning/react-securing-applications-2/react-considerations-for-security?u=76281980&t=58)** Don't commit this file to Arepo, as it could be opening all kinds of potential issues if anyone were to find it.
>
> **[1:05](https://www.linkedin.com/learning/react-securing-applications-2/react-considerations-for-security?u=76281980&t=65)** Be careful about the data you put in the browser, therefore the client.
>
> **[1:09](https://www.linkedin.com/learning/react-securing-applications-2/react-considerations-for-security?u=76281980&t=69)** Everything the front end does in the browser is accessible to developers to peruse in the developer tools.
>
> **[1:16](https://www.linkedin.com/learning/react-securing-applications-2/react-considerations-for-security?u=76281980&t=76)** For example, if you don't want the feed data we had in our application to show, don't hide it in the client.
>
> **[1:22](https://www.linkedin.com/learning/react-securing-applications-2/react-considerations-for-security?u=76281980&t=82)** But implement a rule from the server to not provide the data unless there is a registered user asking for it.
>
> **[1:30](https://www.linkedin.com/learning/react-securing-applications-2/react-considerations-for-security?u=76281980&t=90)** Last but not least, use StrictMode for more checks on your application.
>
> **[1:35](https://www.linkedin.com/learning/react-securing-applications-2/react-considerations-for-security?u=76281980&t=95)** And we'll take a look at this soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (2)
> **CLI Commands:** make (3), find (1)
> **Best Practices:** you should never (1), general rule (1), make sure to (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **Code Identifiers:** componentwillmount (1)
> **Cross-References:** go back to (1)
> **Documentation:** the documentation (1)

#### [Strict mode](https://www.linkedin.com/learning/react-securing-applications-2/strict-mode?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-securing-applications-2/strict-mode?u=76281980&t=0)** - [Instructor] Strict Mode is a special mode available only in development purposes, to provide more information about your application.
>
> **[0:07](https://www.linkedin.com/learning/react-securing-applications-2/strict-mode?u=76281980&t=7)** It doesn't impact the production bill, but really is for the developer and to get information from.
>
> **[0:13](https://www.linkedin.com/learning/react-securing-applications-2/strict-mode?u=76281980&t=13)** Some of the information you'll get from Strict Mode is, components with unsafe lifecycle, warnings about legacy strings, warnings about deprecated findDOMNode usage, and legacy context APIs.
>
> **[0:25](https://www.linkedin.com/learning/react-securing-applications-2/strict-mode?u=76281980&t=25)** Finding unexpected side effects.
>
> **[0:28](https://www.linkedin.com/learning/react-securing-applications-2/strict-mode?u=76281980&t=28)** So let me show you how easy it is to turn Strict Mode on.
>
> **[0:31](https://www.linkedin.com/learning/react-securing-applications-2/strict-mode?u=76281980&t=31)** So I'm back in the App.js inside of the application we've been working on.
>
> **[0:36](https://www.linkedin.com/learning/react-securing-applications-2/strict-mode?u=76281980&t=36)** And again, am on I'm the Client, this is not something that works on the server.
>
> **[0:40](https://www.linkedin.com/learning/react-securing-applications-2/strict-mode?u=76281980&t=40)** So this is with [[React.js|React]], And basically what I'm going to do is turn Strict Mode on by simply adding a Component which is already available to you.
>
> **[0:50](https://www.linkedin.com/learning/react-securing-applications-2/strict-mode?u=76281980&t=50)** So you don't have to import anything.
>
> **[0:52](https://www.linkedin.com/learning/react-securing-applications-2/strict-mode?u=76281980&t=52)** All you have to do is create a component that looks like this.
>
> **[0:57](https://www.linkedin.com/learning/react-securing-applications-2/strict-mode?u=76281980&t=57)** So React dot Strict Mode, and then wrap the code that you want to validate with Strict Mode.
>
> **[1:09](https://www.linkedin.com/learning/react-securing-applications-2/strict-mode?u=76281980&t=69)** Like that.
>
> **[1:11](https://www.linkedin.com/learning/react-securing-applications-2/strict-mode?u=76281980&t=71)** So what we have right now our entire application is going to be looked at with the Strict Mode.
>
> **[1:18](https://www.linkedin.com/learning/react-securing-applications-2/strict-mode?u=76281980&t=78)** So let's go ahead and save this.
>
> **[1:20](https://www.linkedin.com/learning/react-securing-applications-2/strict-mode?u=76281980&t=80)** And I'm going to start my application.
>
> **[1:22](https://www.linkedin.com/learning/react-securing-applications-2/strict-mode?u=76281980&t=82)** So I'm going to make sure that both my Server and my client is on.
>
> **[1:26](https://www.linkedin.com/learning/react-securing-applications-2/strict-mode?u=76281980&t=86)** So let's open up our Terminal, View Terminal.
>
> **[1:31](https://www.linkedin.com/learning/react-securing-applications-2/strict-mode?u=76281980&t=91)** And right now, I don't have anything on, so let's go in, start with the Server and [[npm]] start.
>
> **[1:41](https://www.linkedin.com/learning/react-securing-applications-2/strict-mode?u=76281980&t=101)** Once this is on, you can start the Client.
>
> **[1:43](https://www.linkedin.com/learning/react-securing-applications-2/strict-mode?u=76281980&t=103)** So let's go into the client, NPM start.
>
> **[1:49](https://www.linkedin.com/learning/react-securing-applications-2/strict-mode?u=76281980&t=109)** Now, everything is good here and if I go back to my Terminal, I don't have any errors.
>
> **[1:55](https://www.linkedin.com/learning/react-securing-applications-2/strict-mode?u=76281980&t=115)** So all is good.
>
> **[1:57](https://www.linkedin.com/learning/react-securing-applications-2/strict-mode?u=76281980&t=117)** So if you want to take a look at the developer tools, you can go and view Developer and then Developer Tools.
>
> **[2:05](https://www.linkedin.com/learning/react-securing-applications-2/strict-mode?u=76281980&t=125)** And you already have a warning.
>
> **[2:07](https://www.linkedin.com/learning/react-securing-applications-2/strict-mode?u=76281980&t=127)** So basically what it does, it takes a look at your entire application and validates that you don't have any unsafe or legacy things that you're using in your application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (2), [[npm]] (2)
> **CLI Commands:** npm (2), make (1)
> **Tools:** terminal (3)
> **Env Vars:** npm (2)
> **File Paths:** app.js (1)
> **Code Identifiers:** finddomnode (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Best practices update](https://www.linkedin.com/learning/react-securing-applications-2/best-practices-update?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-securing-applications-2/best-practices-update?u=76281980&t=0)** - [Instructor] Let's update our knowledge on securing [[React.js|React]] applications with the latest best practices.
>
> **[0:05](https://www.linkedin.com/learning/react-securing-applications-2/best-practices-update?u=76281980&t=5)** Security is a moving target and staying informed is key to keeping your app safe.
>
> **[0:11](https://www.linkedin.com/learning/react-securing-applications-2/best-practices-update?u=76281980&t=11)** So let's jump right in.
>
> **[0:13](https://www.linkedin.com/learning/react-securing-applications-2/best-practices-update?u=76281980&t=13)** In the React world, security practices must evolve as threats become more sophisticated.
>
> **[0:18](https://www.linkedin.com/learning/react-securing-applications-2/best-practices-update?u=76281980&t=18)** It's not just about writing code.
>
> **[0:20](https://www.linkedin.com/learning/react-securing-applications-2/best-practices-update?u=76281980&t=20)** It's about writing code that can stand up to the challenges of today's web environment.
>
> **[0:26](https://www.linkedin.com/learning/react-securing-applications-2/best-practices-update?u=76281980&t=26)** First, let's talk about data handling.
>
> **[0:28](https://www.linkedin.com/learning/react-securing-applications-2/best-practices-update?u=76281980&t=28)** Always use HTTPS to encrypt data in transit.
>
> **[0:33](https://www.linkedin.com/learning/react-securing-applications-2/best-practices-update?u=76281980&t=33)** On the front end, make sure to manage state securely.
>
> **[0:36](https://www.linkedin.com/learning/react-securing-applications-2/best-practices-update?u=76281980&t=36)** Be cautious with third-party libraries.
>
> **[0:39](https://www.linkedin.com/learning/react-securing-applications-2/best-practices-update?u=76281980&t=39)** Audit them regularly using tools like [[npm]] Audit or Snyk and don't forget to set secure HTTP headers to protect your app from common attacks and vulnerabilities.
>
> **[0:52](https://www.linkedin.com/learning/react-securing-applications-2/best-practices-update?u=76281980&t=52)** React helps prevent cross-site scripting attacks out of the box by escaping strings in JSX, but you can bolster your defenses.
>
> **[1:01](https://www.linkedin.com/learning/react-securing-applications-2/best-practices-update?u=76281980&t=61)** Sanitize user input, if you're using dangerously set inner [[HTML]] or, better yet, avoid it when possible.
>
> **[1:09](https://www.linkedin.com/learning/react-securing-applications-2/best-practices-update?u=76281980&t=69)** Implement a robust content security policy to control the sources from which you can lower resources and stay up to date on patches from React and your app's dependencies.
>
> **[1:22](https://www.linkedin.com/learning/react-securing-applications-2/best-practices-update?u=76281980&t=82)** To sum up, protecting your React app requires a multifaceted approach, secure data handling, defending against common vulnerabilities, and keeping dependencies up to date.
>
> **[1:35](https://www.linkedin.com/learning/react-securing-applications-2/best-practices-update?u=76281980&t=95)** With these best practices, you're on your way to building more secure React applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (6), [[npm]] (1), [[HTML]] (1)
> **Env Vars:** https (1), npm (1), http (1), jsx (1), html (1)
> **CLI Commands:** make (1), npm (1)
> **Best Practices:** make sure to (1), don't forget (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Next steps](https://www.linkedin.com/learning/react-securing-applications-2/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-securing-applications-2/next-steps?u=76281980&t=0)** - [Instructor] This course was an introduction to the major security threats and how to prevent them with a [[React.js|React]] application and the integration of 0-O.
>
> **[0:08](https://www.linkedin.com/learning/react-securing-applications-2/next-steps?u=76281980&t=8)** But as you know, security threats are constantly evolving as attacks become more sophisticated.
>
> **[0:14](https://www.linkedin.com/learning/react-securing-applications-2/next-steps?u=76281980&t=14)** What this means is that security is a journey, rather than a destination.
>
> **[0:19](https://www.linkedin.com/learning/react-securing-applications-2/next-steps?u=76281980&t=19)** You'll have to constantly update your websites and apps with the latest techniques and best practices in order to keep your project secure.
>
> **[0:26](https://www.linkedin.com/learning/react-securing-applications-2/next-steps?u=76281980&t=26)** Don't stop learning.
>
> **[0:28](https://www.linkedin.com/learning/react-securing-applications-2/next-steps?u=76281980&t=28)** As we discussed in the course, the [[OWASP]] site is a great resource for more information on all major threats, as well as cheat sheets for best practices.
>
> **[0:37](https://www.linkedin.com/learning/react-securing-applications-2/next-steps?u=76281980&t=37)** I recommend that you subscribe to their newsletter to get updates on the latest threats before you become a victim.
>
> **[0:43](https://www.linkedin.com/learning/react-securing-applications-2/next-steps?u=76281980&t=43)** In the course we secured our application with a single sign-on and then we secured the API, but if you log out of the application and try to access the Contact and About page, they will show up.
>
> **[0:54](https://www.linkedin.com/learning/react-securing-applications-2/next-steps?u=76281980&t=54)** So, always make sure that all areas of your application are properly secured when you don't want them to be public.
>
> **[1:00](https://www.linkedin.com/learning/react-securing-applications-2/next-steps?u=76281980&t=60)** To do this, use the authenticated check we've done on the app.js file across any area you want secure and properly render the pages based on whether someone is or is not authenticated.
>
> **[1:13](https://www.linkedin.com/learning/react-securing-applications-2/next-steps?u=76281980&t=73)** Also, there are many online security communities where you can find help.
>
> **[1:18](https://www.linkedin.com/learning/react-securing-applications-2/next-steps?u=76281980&t=78)** A great place to start is the OWASP site.
>
> **[1:21](https://www.linkedin.com/learning/react-securing-applications-2/next-steps?u=76281980&t=81)** In the Social Media section, you will find their [[Slack]] channel, meetup links, social links, and more.
>
> **[1:27](https://www.linkedin.com/learning/react-securing-applications-2/next-steps?u=76281980&t=87)** If you run into any issues or have questions, this should be the first place to go.
>
> **[1:33](https://www.linkedin.com/learning/react-securing-applications-2/next-steps?u=76281980&t=93)** And finally, beyond React itself, check out the security courses we have in the library which can provide further tools and techniques for security protection.
>
> **[1:43](https://www.linkedin.com/learning/react-securing-applications-2/next-steps?u=76281980&t=103)** Thanks very much for taking my course and I'll see ya in a bit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (2), [[OWASP]] (2), [[Slack]] (1)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** owasp (2), api (1)
> **Definitions:** is a  (2)
> **File Paths:** app.js (1)
> **Cross-References:** we discussed (1)
> **Tools:** slack (1)
> **Best Practices:** always make sure (1)


## Instructor

- [[Emmanuel Henri]]

## Resources

- Exercise files available

## Skills Covered

- React.js
- Secure Authentication

## Path Context

### In [[Explore App Development with the MERN Stack]]
← [[Building RESTful APIs with Node.js and Express]] | **9 of 13** | [[Node Js Security]] →

### In [[Improve Your React Skills]]
← [[React- Building Styles with CSS Modules]] | **3 of 9** | [[Building Modern Projects with React]] →

## Appears In

- [[Explore App Development with the MERN Stack]]
- [[Improve Your React Skills]]

## Related Courses

_Courses sharing skills:_

- [[React- Cloud-Powered Apps with Firebase]] — React.js
- [[Building a GraphQL Project with React.js]] — React.js
- [[React- Software Architecture]] — React.js
- [[React- Testing and Debugging]] — React.js
- [[React- Building Styles with CSS Modules]] — React.js

---

[↑ Back to top](#)