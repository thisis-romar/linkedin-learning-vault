---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: react-server-side-rendering-8539269
url: "https://www.linkedin.com/learning/react-server-side-rendering-8539269"
duration_minutes: 75
duration: 1h 15m
level: Advanced
updated: 4/29/2024
learners: 22230
skills:
  - Next.js
  - React.js
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGLmMPM0FdTeA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1617047890732?e=2147483647&amp;v=beta&amp;t=tUX8Byl7T7sAtmJrhRIdZYgPb-VObMctA0TZo3L8HeU"
linkedin_topic: Software Development
learning_paths:
  - '[Explore React.js Development](../../Paths/Software%20Development/Learning%20Paths/Explore%20React.js%20Development.md)'
prev_courses:
  - '[React- Authentication](../Web%20Development/React-%20Authentication.md)'
path_nav: '[{"path":"Explore React.js Development","position":8,"total":8,"prev":"React- Authentication","next":null}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - topic/web-development
  - skill/next-js
  - skill/react-js
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/React-%20Server-Side%20Rendering.md)

![React: Server-Side Rendering](https://media.licdn.com/dms/image/v2/C4E0DAQGLmMPM0FdTeA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1617047890732?e=2147483647&amp;v=beta&amp;t=tUX8Byl7T7sAtmJrhRIdZYgPb-VObMctA0TZo3L8HeU)

# React: Server-Side Rendering

> Server-side rendering lets you optimize your applications to use client or server resources depending on network and device circumstances. Old device on a slow network? Render on the server. New device, fast network? You should probably let the client do the work. Some call the resulting architecture "universal," others "isomorphic," but the results are smooth. Learn about implementing server-side

> [LinkedIn Learning](https://www.linkedin.com/learning/react-server-side-rendering-8539269) | 1h 15m | Advanced | 22K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Learn server-side rendering with React](#learn-server-side-rendering-with-react)
  - [What you should know](#what-you-should-know)
- [**1. Setting Up**](#1-setting-up) (5 videos)
  - [SSR: What, how, and why](#ssr-what-how-and-why)
  - [Chrome and Firefox tools](#chrome-and-firefox-tools)
  - [Install the required libraries and tools](#install-the-required-libraries-and-tools)
  - [Challenge: Why would you use SSR?](#challenge-why-would-you-use-ssr)
  - [Solution: Why would you use SSR?](#solution-why-would-you-use-ssr)
- [**2. Use Next.js to Build SSR**](#2-use-nextjs-to-build-ssr) (8 videos)
  - [Introducing Next.js with React](#introducing-nextjs-with-react)
  - [Add initial components from template](#add-initial-components-from-template)
  - [Add data for props](#add-data-for-props)
  - [Add Redux store and setup](#add-redux-store-and-setup)
  - [Add Redux actions](#add-redux-actions)
  - [Add Redux reducers](#add-redux-reducers)
  - [Challenge: Why use Redux for SSR?](#challenge-why-use-redux-for-ssr)
  - [Solution: Why use Redux for SSR?](#solution-why-use-redux-for-ssr)
- [**3. Server-Side Rendering with Node**](#3-server-side-rendering-with-node) (5 videos)
  - [Create initial Express or Next.js server](#create-initial-express-or-nextjs-server)
  - [Add the Express routes](#add-the-express-routes)
  - [Add links and pages with Express or Next.js](#add-links-and-pages-with-express-or-nextjs)
  - [Challenge: Why use Node or Express for SSR?](#challenge-why-use-node-or-express-for-ssr)
  - [Solution: Why use Node or Express for SSR?](#solution-why-use-node-or-express-for-ssr)
- [**4. Code Splitting**](#4-code-splitting) (4 videos)
  - [Code splitting in Next.js](#code-splitting-in-nextjs)
  - [Other tools available for code splitting](#other-tools-available-for-code-splitting)
  - [Challenge: What is the purpose of code splitting?](#challenge-what-is-the-purpose-of-code-splitting)
  - [Solution: What is the purpose of code splitting?](#solution-what-is-the-purpose-of-code-splitting)
- [**Conclusion**](#conclusion) (2 videos)
  - [React Router with SSR](#react-router-with-ssr)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Learn server-side rendering with React](https://www.linkedin.com/learning/react-server-side-rendering-8539269/learn-server-side-rendering-with-react?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/learn-server-side-rendering-with-react?u=76281980&t=0)** - [Emmanuel] Server-side rendering, universal, or isomorphic applications can be an intimidating subject for some, and even understanding what these terms are can be confusing if you've never explored the subject. I'm here to clarify and demystify the subject for you. Hi, I'm Emmie Henry and I've been working with [React](../../Skills/Web%20Development/React.js.md) since its release and often use SSR in my own applications, and it will be my pleasure to support you in this journey. First, we'll explore the basics of SSR. Then we'll focus our intention on using a template project and build our first application with SSR, React, and leveraging [Next.js](../../Skills/Web%20Development/Next.js.md). Next, we'll add Redux to our application. Also, we'll take a look at express and how we can use it with SSR approach. Finally, we'll take a look at code splitting and how it impacts our application's performance. Now, if you're ready to learn all about SSR with React, fire up your favorite editor and let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (3), [Next.js](../../Skills/Web%20Development/Next.js.md) (1)
> **Env Vars:** ssr (5)
> **File Paths:** next.js (1)
> **Exercise Files:** template (1)
> **Speakers:** - [emmanuel] (1)

#### [What you should know](https://www.linkedin.com/learning/react-server-side-rendering-8539269/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/what-you-should-know?u=76281980&t=0)** - [Instructor] This course is focused on building a server-side application with [React](../../Skills/Web%20Development/React.js.md), so some experience with React is a must. If you aren't familiar with creating React components using props, importing modules, I'd recommend that you take a basic React course from our library. Also experience with [JavaScript](../../Skills/Software%20Development/JavaScript.md) is a must for this course, as this is the basis of a React programmer and [Next.js](../../Skills/Web%20Development/Next.js.md). Additionally, being familiar with terminal commands and [npm](../../Skills/Web%20Development/npm.md) isn't a must, but it will definitely help you when we use these tools. In this course, I'll be using a Mac, but you can follow along on a PC as well. The tools work similarly on both platforms. I'll also be using VS Code as my code editor. Doesn't cost anything, so I recommend it, but feel free to use whichever editor you prefer. Although I recommend using an editor with a built-in terminal.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (5), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [Next.js](../../Skills/Web%20Development/Next.js.md) (1), [npm](../../Skills/Web%20Development/npm.md) (1)
> **Tools:** terminal (2), vs code (1)
> **Definitions:** is a  (2)
> **File Paths:** next.js (1)
> **CLI Commands:** npm (1)
> **Env Vars:** npm (1)
> **Speakers:** - [instructor] (1)


### 1. Setting Up

[↑ Back to Table of Contents](#table-of-contents)

#### [SSR: What, how, and why](https://www.linkedin.com/learning/react-server-side-rendering-8539269/ssr-what-how-and-why?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/ssr-what-how-and-why?u=76281980&t=0)** - [Instructor] Maybe you have heard of some of these different terms, isomorphic, universal, and SSR. But more often than not, they're referred to in the same context. Simply put, these are all different terms meaning the exact same thing, which is, that your application is rendered on the server instead of the client. So to better understand what happens when running your application on the server, let me first explain what happens in your regular [React](../../Skills/Web%20Development/React.js.md) client-side application. Your backend provides APIs or data to your front-end-side client, then React with the data on hand renders the [HTML](../../Skills/Web%20Development/HTML.md) of your application in the browser. Whereas in server-side rendering, the server renders the HTML and then sends it to the client, eliminating the need of the client to do these tasks. Depending on the size of your application, that could be beneficial. And there are some advantages to running your application in the server. For starters, if you are running a pretty large application or expect it to grow quite large, rendering on the server will have a performance improvement in terms of the response time of your application. Consider this fact, the browser in which your application renders is impacted by the machine it runs on. Therefore, if people are looking at your application on older [Hardware](../../Topics/Hardware.md), such as an old phone, laptop or desktop, they will see a difference in performance
>
> **[1:33](https://www.linkedin.com/learning/react-server-side-rendering-8539269/ssr-what-how-and-why?u=76281980&t=93)** to those running newer hardware. However, by rendering the application in the server, you control the performance of the render. Additionally, if you're concerned if your site or applications gets found in the top results of [Google](../../Glossary/Service/Google.md), Bing, and other search engine searches, that might be the second benefit of rendering an application on the server. [JavaScript](../../Skills/Software%20Development/JavaScript.md) doesn't play well with search engines. And unfortunately, when Google for instance sends its robots to index your page, all it sees is JavaScript and not HTML. Over the past few years the situation has improved a bit, but you are better positioned to be indexed properly if what the robot sees is HTML. Keep all these items in mind when you consider SSR and whether you should make the move. So now that we've explored the basics of SSR, let's get going on working with this great approach.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (4), [React](../../Skills/Web%20Development/React.js.md) (2), [Hardware](../../Topics/Hardware.md) (2), [Google](../../Glossary/Service/Google.md) (2), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2)
> **Env Vars:** html (4), ssr (3)
> **Analogies:** such as (1), for instance (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Chrome and Firefox tools](https://www.linkedin.com/learning/react-server-side-rendering-8539269/chrome-and-firefox-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/chrome-and-firefox-tools?u=76281980&t=0)** - [Instructor] For any type of [Web Development](../../Topics/Web%20Development.md), our first tool of choice is the Dev Tools that come with your own browser. Whether you use Chrome, Safari, Firefox, or Edge, you have the tools needed to inspect your code, do performance checks, and more. In this course, we'll specifically use Chrome's internal tools. I highly recommend that you use either Chrome or Firefox as they offer a solid performance and work with the extensions we'll use. So as a developer, you've probably used Chrome's developer tools, but if not, you can access them by hitting Option + Command + I on Mac or Control + Shift + I on [Windows](../../Glossary/Service/Windows.md). And once you see them, you can put them below here or you can put them on the side, whichever you decide to do. And where you have the performance tools is right here. You can have the network tools also telling you a little bit about performance, and you have a whole bunch of other tools that you can use. Also, what you could do is use what we call [React](../../Skills/Web%20Development/React.js.md) Dev Tools and this is something we're going to use in this course. So the best way to find that tool is to search it on [Google](../../Glossary/Service/Google.md), React Dev Tool, and once you found it, you can actually install it with Chrome right here, or you can scroll down and go to the [GitHub](../../Skills/Software%20Development/GitHub.md) page where you have all the options for each browsers. In this case, I'm going to go for the Chrome version. And as you can see,
>
> **[1:31](https://www.linkedin.com/learning/react-server-side-rendering-8539269/chrome-and-firefox-tools?u=76281980&t=91)** I already have installed it on my system, and that's pretty much what you need for this course. And now that we have all the tools we need, let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (2), [Web Development](../../Topics/Web%20Development.md) (1), [Windows](../../Glossary/Service/Windows.md) (1), [Google](../../Glossary/Service/Google.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Tools:** firefox (2), safari (1), github (1)
> **UI Navigation:** scroll down (1), go to (1)
> **CLI Commands:** find (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Install the required libraries and tools](https://www.linkedin.com/learning/react-server-side-rendering-8539269/install-the-required-libraries-and-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/install-the-required-libraries-and-tools?u=76281980&t=0)** - [Narrator] So that's installed all the required tools and libraries we'll need in this course. And the first one we need is [Node.js](../../Skills/Web%20Development/Node.js.md). So the best way to find Node is by doing a [Google](../../Glossary/Service/Google.md) search with Node in the search terms, and then go to the first link, which is [nodejs.org](https://nodejs.org). So let's go ahead and click on that link. And what you want to do is download and install either one of these versions. So both are fine, but what I would recommend if you're doing an application for an enterprise or a business, I would recommend the LTS version because this is the one that is the most supported. If you're building an application for yourself, then use the current, which has the latest and the greatest feature. In this case I'm going to use the LTS version. So what am I going to do is basically download that one, and then click on the package that was just downloaded. And then let's go ahead and go through the prompts so continue, continue, agree and install.
>
> **[1:09](https://www.linkedin.com/learning/react-server-side-rendering-8539269/install-the-required-libraries-and-tools?u=76281980&t=69)** And then what we're going to do is check that it was properly installed. So the best way to do this is to go in a terminal. So what I'm going to do is use the terminal that comes with Visual Studio Code. I'm going to switch to that application. And you can use any editors that you want, in this case this is VS Code. So I'm going to to use terminal, new terminal. And then the best way to do this is to do node-- and then the version. And it's going to basically give us 14.15.4 which is the version or the current version, LTS that I just installed. Now, the next thing that we need is [React](../../Skills/Web%20Development/React.js.md). So the best way to install React, if you want it locally what you need to do is to go to the React site and follow the prompts here. So again, it's fairly easy to install React. All you have to do is to do an [npm](../../Skills/Web%20Development/npm.md) install- G for global, so basically in your system, and then cra. And that will install, React inside of your system, but there is an alternative. You can use the npx command like so. And when you create a new application with React instead of doing npm, installing react and then create a new application, you can simply use npx, create, react, app and then the name of the application. So we'll just do a test for this one. And when you do this, it'll simply
>
> **[2:43](https://www.linkedin.com/learning/react-server-side-rendering-8539269/install-the-required-libraries-and-tools?u=76281980&t=163)** caches the library in question, while you create a new project and then free your system of these unused files. And that's what I typically use when I create a new React app. Okay, so now we've got npm and Node install. Let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (9), [npm](../../Skills/Web%20Development/npm.md) (3), [Node.js](../../Skills/Web%20Development/Node.js.md) (1), [Google](../../Glossary/Service/Google.md) (1)
> **CLI Commands:** node (5), npm (3), npx (2), find (1)
> **Prerequisites:** install (7)
> **Tools:** terminal (4), visual studio (1), vs code (1)
> **UI Navigation:** go to (2), click on (2), switch to (1)
> **Env Vars:** lts (3)
> **File Paths:** node.js (1)
> **URLs:** [nodejs.org](https://nodejs.org) (1)

#### [Challenge: Why would you use SSR?](https://www.linkedin.com/learning/react-server-side-rendering-8539269/challenge-why-would-you-use-ssr?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/challenge-why-would-you-use-ssr?u=76281980&t=0)** - [Instructor] So before we continue, let's challenge you with a quick question. In this chapter, we discussed the importance of SSR and in what scenarios would you use this technology. So here's the question. What are the benefits of using SSR? Think about what you would answer, and when you're ready, watch the solution video, which is next.

> [!info]- Semantic Content
>
> **Env Vars:** ssr (2)
> **Cross-References:** we discussed (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Why would you use SSR?](https://www.linkedin.com/learning/react-server-side-rendering-8539269/solution-why-would-you-use-ssr?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/solution-why-would-you-use-ssr?u=76281980&t=0)** (lively music)
>
> **[0:05](https://www.linkedin.com/learning/react-server-side-rendering-8539269/solution-why-would-you-use-ssr?u=76281980&t=5)** - [Instructor] The answer for the question was in the video where we go over the what, how, and why of SSR. Without going over everything we did in that video, these were the main points we were looking for. SSR is SEO-friendly, or at least better than rendering in the browser. That was the first one. And then the second one is SSR allows you to control the performance and not rely on browsers in their inherent systems. And as a direct result of that point, SSR allows you to scale your application without always worrying about its performance. If your application needs more power, all you have to do is rent or purchase the [Hardware](../../Topics/Hardware.md) to support it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (1)
> **Env Vars:** ssr (4), seo (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (lively music) (1)


### 2. Use Next.js to Build SSR

[↑ Back to Table of Contents](#table-of-contents)

#### [Introducing Next.js with React](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=0)** - [Instructor] If you've never heard of [Next.js](../../Skills/Web%20Development/Next.js.md), it's a great library that allows you to quickly set up server side rendered applications with just a few lines of code. And we'll demonstrate this in a few seconds. It's easy to get started with, but also highly flexible and extensible and works great with libraries like REDOX which we'll also demonstrate in this course. Behind the curtain, it uses Webpack, which you may or may not be familiar with but in any case, this is what builds your application into a bundle to be used in the server. So let's get started with Next.js. So I'm going to go back to Visual Studio Code. And the first thing I'm going to do is create a brand new directory on my desktop. So I'm going to go ahead and open up a brand new terminal, click on Terminal, New Terminal or you can use the Ctrl gravy shortcut and I'm going to make sure I am on the desktop. Let's validate that we are, we're not, so let's go and do Desktop, we're on the right path. So there are two ways to create a brand new application for Next.js. There's the easy way where you can use the npx_create-next-app and then name your app which we're going to call test. And this is basically going to create a brand new application with all the files that you need to get started with Next.js. But for the purpose of this course
>
> **[1:33](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=93)** we're not going to do that, we're going to create it manually. But I want to show you what it does when you actually create one with this command. So let's go ahead and open that project inside of Visual Studio Code. So I'm going to go to my Desktop and then open up the Test. And this is what it creates for you. So it creates basically the file that we're going to build in a few seconds and then it adds a whole bunch of folders. We're going to also create the pages folder in a few seconds so we can add the Index.js file in there. But it also creates an API example, it creates also a public folder where you can have all your images and then you have your styles folders where you have your CSS files in here. And by the way, CSS is built in now when Next.js so we're not going to have to do a lot of configuration like the previous version of this course. So, this is what it creates for you. So let's go ahead and create that manually. So, what I'm going to do is close this folder, like so and then what I'm going to do is go inside of my terminal again and you can use the Ctrl gravy shortcut if you want. And again, I'm going to make sure that I am on the desktop, so I'm not, so let's go ahead and make sure, okay, so now we have the tests directory which if you want to keep, go ahead and do it.
>
> **[3:07](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=187)** And this time what we're going to do is create all this manually. So what I'm going to do first is do mkdir to create a brand new directory, which I'm going to call SSR and now you have this SSR folder and then we're going to go inside of that folder. And now we're inside because there's nothing in there. And what we're going to do is first initialize with an [npm](../../Skills/Web%20Development/npm.md) package .[JSON](../../Skills/Web%20Development/JSON.md) file. So let's go ahead and do npm init and then Enter. And then you can answer all the prompts. So the first thing, the package name, SSR it's good, the version, yes. Description if you want to enter a description it's up to you, entry point, yes. Test command, we're good. If you have a get repository for your project, you can add it in here, keywords and then author, I'm going to put my name and then Enter and this is what you're going to create and now we're good. So the next thing we want to do is install [react](../../Skills/Web%20Development/React.js.md), react on and next.js. So we're going to do exactly that. So, if you go back to the project that we had initially so I'm just going to switch back for a second. If you take a look at the package .JSON file, what we need is those three dependencies and then we're going to add those scripts. So if you want to keep it open so we can save some time afterwards, you can do that as well, and just copy and paste from this.
>
> **[4:42](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=282)** And in fact what I'm going to do is copy what I have in here. So basically these are the scripts that are related to next. Once we do npm dev and npm build, npm start, these are going to be the scripts that are going to be running. So let's go ahead and close or minimize that project depending on what you want to do and then let's bring back or initial one and then let's go ahead and install, react, react-dom and then next, which is the package for Next.js. Oh, I forgot to do npm I or install, so let's go ahead and do that, react, react-dom and then next. So now I've got all these dependencies installed, let's go ahead and paste the scripts that we had in our package .JSON file. So I'm going to open that project now. I'm going to go to my Desktop and then open up that project and then go to my package .JSON file and now I have these three dependencies install. Now, all I have to do is make sure that I have the proper here, so you can manually enter them if you want and I'm simply going to paste them like so, so basically these are the three scripts that you want to add in here. So dev, which is running the command next dev, build, next build, and then start, next start. So basically when we do NPM start
>
> **[6:15](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=375)** it's going to run next start as opposed to the typical start for a node application. So now we have our package .JSON file. So now we need to actually create the pages folder where you put your pages that are going to be rendered in the server. So let's go ahead and create a folder first and we're going to call this pages. And then inside of that folder, we're going to create the first file, which is the Index.js file. And this is basically what we're going to use to create a brand new application with react and Next.js and have it rendered in the server. So let's go ahead and create a brand new file in here, we're going to do Index.js, which is the entry and then in here, we're simply going to export a paragraph that will say hello. So let's go ahead and do that. So let's continue with our function and this is basically a functional or state less component.
>
> **[7:26](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=446)** And then let's just say, Hello, like so. So now that we've done everything to have a base application let's go ahead and run the application and test it. So the first thing we're going to do is bring back our terminal, so I'm going to do Ctrl gravity. And then the first thing you need to do is make sure that you run a build of your application before you actually run it. So if we look at the commands, the command that we're looking for is this one here. So build, so let's go and do npm run build
>
> **[8:05](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=485)** and now the application has been built and now we can actually run it. So what we're going to do is do npm start, and now we can go to our local host port 3000 inside of web browser. So let's go ahead and do that. So localhost 3000 and we have our application running. Now, if you've never worked with Next.js before and have some experience with react, you may be wondering what kind of voodoo magic just happened here. Well, that is the beauty of Next.js. It does a lot of the background work for you especially when you do the build, including code splitting which we'll take a look at further in this course. And as we add more code to this project, you'll see just how intuitive the library is. Oh, and yes, this is code that is running on the server if you were wondering. Now let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Next.js](../../Skills/Web%20Development/Next.js.md) (10), [npm](../../Skills/Web%20Development/npm.md) (9), [React](../../Skills/Web%20Development/React.js.md) (8), [JSON](../../Skills/Web%20Development/JSON.md) (5)
> **CLI Commands:** npm (9), make (5), mkdir (1), node (1)
> **Env Vars:** json (5), ssr (3), css (2), npm (2), redox (1)
> **File Paths:** next.js (10), index.js (3)
> **Tools:** terminal (5), visual studio (2)
> **UI Navigation:** go to (4), click on (1)
> **Prerequisites:** install (4), set up (1)
> **Cross-References:** go back to (2)

#### [Add initial components from template](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=0)** - [Instructor] So we need to add a bit more meat to our application. In the Exercise Files, I included a project I created in another course. So if you look into the Exercise Files, you'll see a resources folder. We'll use some of those files to build our application, leveraging server-side rendering and show how different it is from building a straight [React](../../Skills/Web%20Development/React.js.md) application. In the process, we'll leverage built-in support for CSS with [Next.js](../../Skills/Web%20Development/Next.js.md). So let's build this. So the first thing you got to do is grab the resources files and then put them into our ssr folder. And for that to happen, what we need to do first is create a public folder. So this is where all the public files, such as images or favicons, are going into. So let's go ahead and create that. So we'll right-click, New Folder, and call it public. And in that folder, we're going to grab the images logo, juice, and background.jpg and png, and drop them in the public. So let's go ahead and copy those, like so, and then paste them into that public folder. So the next thing we're going to do is make sure that we have the template project that I created for you. So we have a few files here that we're going to leverage, and we're going to explain why the CSS files have that Card.module names. So let's go ahead and copy those, and then paste them
>
> **[1:34](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=94)** into the pages folder this time, like so. So in your project right now, you should have Card and then the CSS file index and then the CSS file related to it. Once you have all those files, including the public files, let's go ahead and close those folders and get back to Visual Studio Code. So what we're going to do now is change the code of our index to match what we have in here. So, basically, the way to do CSS with built-in support in Next.js is to do with Modular CSS. And, basically, the way it works is that you call your files index.module.css and then you basically import them into your file. So let's go ahead and do that. So what I'm going to do first is just import those files. So I'm going to import styles from index.module.css, which is basically this guy here. And if you're curious what it is, you can actually take a look at it. It's plain old CSS. So we're using Module CSS to actually work with Next.js and React. And then we're going to import the Card component. And if you're curious again for that one, you can take a look at Card.js. And as you can see, it's a functional stateless component, so we have that component here. And we already have module.css supplied to this component.
>
> **[3:10](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=190)** So let's go ahead and continue here and import Card. And then what we're going to do is transform this into a full function, so I'm just going to remove that here to make it easier for us and then remove that as well. And then typical component, we're returning it, and then we're going to start adding some [HTML](../../Skills/Web%20Development/HTML.md) in here. So let's go ahead and start by doing our first div, and we're going to add a className to this. And this is where the Modular CSS comes into play. So the way to work with Module CSS in Next.js is pretty much the same way you would work with it in React. So we've imported a module here which has all of our styles. And then what we could do is import it inside of this particular HTML tag. So what we're going to do is do styles., and then for this one, we're looking for the app style. So if we look into the index here, we're loading these styles into that specific tag here. And then let's continue. We're going to have a header with a className which, again, is styles., and this one we're going to load the header. And then inside of the header we're going to have an image,
>
> **[4:45](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=285)** and the image source is the logo.png. So this is a public file. So this is in the public folder here, and we're loading this image here. And then we're going to add some className to that one as well. I've been doing this on a second line so we can see all the code in our screen, but feel free to do it on a single line. And we're going to add some styles to it, which are basically the logo styles. And then for images, we need to add an alt, and then we're going to close that image or the tag, like so. And then after the header, we're going to add a grid, so another div with a className of grid. And then in that grid we're going to add our Card component, so we're going to have multiple Card components which are already been built for you. So if we take a look at that one here, we have basically a Card component which is using some styles that I've actually done for you in this Card.module.css. And this is going to be a Card that will be repeated a couple of times, so let's do it three times, like so. And then what you could do is simply copy and paste that couple times as you please and then save it.
>
> **[6:21](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=381)** So right now we've created basically a new page that has module styles because now Next.js supports built-in styles with modules. So, basically, we've imported the modules for this particular page here or component, and we're using it all throughout the tags here. So let's go ahead and take a look at what it looks like. So as you can remember, we had this single page before, so let's go and rebuild our application. So I'm going to bring up my terminal by doing Control + grave, or you can simply go ahead and open up your Terminal here, but I'm going to do the Control + grave shortcut. I'm going to stop the server and then do build again, so [npm](../../Skills/Web%20Development/npm.md) run build. And if you have any errors, if you have anything that doesn't jive in here, you're going to see some error messages, take a look at them, and then basically read or actually click on the link, and it's going to bring you to a page where it's going to give you more information about what that error or bug is, and then you can actually resolve it, all right? So now that we have our build on, let's go ahead and start our server. And I'm going to go back to my page, refresh the page, and this is what we just did. So we have our logo, we have our grid, we have three of our cards on our page, and it's all rendered in the server. Okay, so now that we have a base project
>
> **[7:55](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=475)** we can start working with, let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Next.js](../../Skills/Web%20Development/Next.js.md) (5), [React](../../Skills/Web%20Development/React.js.md) (3), [HTML](../../Skills/Web%20Development/HTML.md) (2), [npm](../../Skills/Web%20Development/npm.md) (1)
> **Env Vars:** css (10), html (2)
> **File Paths:** next.js (5), index.module.css (2), card.js (1), module.css (1), card.module.css (1)
> **Code Identifiers:** classname (4)
> **CLI Commands:** make (2), npm (1)
> **Tools:** terminal (2), visual studio (1)
> **Exercise Files:** exercise files (2), template (1)
> **UI Navigation:** right-click (1), click on (1)

#### [Add data for props](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-data-for-props?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-data-for-props?u=76281980&t=0)** - [Instructor] So far we've used stateless components, or functions, but like most applications, we need to populate our application with data, and as with any regular [React](../../Skills/Web%20Development/React.js.md) application, we get the state populated with data, and then pass these as props to our components. [Next.js](../../Skills/Web%20Development/Next.js.md) is a bit different in its approach, but conceptually the same as React, let me demonstrate. So the first thing we're going to do is create a folder inside of our pages here, and we're going to call it API, and then what we're going to do is grab a file from the resources inside of the exercise files and drop it inside of the API. So let's go ahead and do that. Go into the exercise files, click on resources, you have the data file here, and then let's open up our application into the pages, API, and then copy that one into that folder, like so. Then you can close all this and then we're going to go back into Visual Studio Code and continue working on our code in the index.js. So the first thing we're going to do is import that data, so let's go ahead and do that. So we're going to import data from API/data.[JSON](../../Skills/Web%20Development/JSON.md), like so, and then we need to import React because we're going to transform our stateless component
>
> **[1:35](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-data-for-props?u=76281980&t=95)** into a class component. So we need to import React from react, like so, and then let's go ahead and convert this right away, and we're going to do export default class Index extends React.Component, and then we're going to make sure that we have a render method use in here, and insert the component inside of that render, like so,
>
> **[2:23](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-data-for-props?u=76281980&t=143)** and indent this to be perfect, like so, and then let's make sure we create our state. So I'm going to basically do static async getInitialProps,
>
> **[2:40](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-data-for-props?u=76281980&t=160)** which is a function that I'm going to create just temporarily while we're working on our redux code, and then basically pass for the cards, the data that we've imported into our API. So if we look into our API here, we have some data that will pass into the cards, so there should be 17 cards based on that data here, and then what we need to do as opposed to hard code our cards in here, what we're going to do is use a map method to actually map as many cards as we have data in our data or in our state. So basically the big changes in here are in this area here. So what I'm going to do is remove Card, and then what we're returning is this.prompts.cards, and we're going to map it and pass it to the card. So basically what is happening here is for every data in our array of our data.json file here that we have, so every element that we have, we're going to have a new card return, and then we're going to leverage the card component, and pass the data to it. So as many times as we have data in our array, we're going to have a card showing up.
>
> **[4:13](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-data-for-props?u=76281980&t=253)** So this is typical React code that we're basically doing here, so if you've never seen this before, this is plain React. Okay, so now that we have this, we should be safe to actually save this first and then rebuild our server, so let's bring up our terminal, and then stop the server, [npm](../../Skills/Web%20Development/npm.md) run build, and then do npm start, and then go back to our browser, refresh, and now we have the same page, but now we have 11 components based on basically the data that we passed to it. So you could also [Fetch](../../Skills/Web%20Development/Fetch.md) data from an external API and there are multiple examples of this in the docs or on the [GitHub](../../Skills/Software%20Development/GitHub.md) repo here, so if you go to this address here and then go to the examples or go to the Github repo for Next.js, if you do a [Google](../../Glossary/Service/Google.md) search, you'll find it fairly quickly, and then go into the examples and scroll down, everywhere you see API, API routes cors, and so on so forth, these are all great examples of how to fetch external APIs from Next.js or the application that we're working on. So as you can see, it's not really hard to add data to our state, and then get our data going into our application, and remember, this is all happening in SSR.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (8), [Next.js](../../Skills/Web%20Development/Next.js.md) (3), [JSON](../../Skills/Web%20Development/JSON.md) (2), [npm](../../Skills/Web%20Development/npm.md) (2), [Fetch](../../Skills/Web%20Development/Fetch.md) (2)
> **Env Vars:** api (9), ssr (1)
> **File Paths:** next.js (3), index.js (1), api/data.json (1), data.json (1)
> **CLI Commands:** make (2), npm (2), find (1)
> **UI Navigation:** go to (3), click on (1), scroll down (1)
> **Tools:** github (2), visual studio (1), terminal (1)
> **Exercise Files:** exercise files (2), github repo (2)
> **Definitions:** is a  (2)

#### [Add Redux store and setup](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=0)** - [Instructor] When doing state management, Redux is often the first place to go when working with [React](../../Skills/Web%20Development/React.js.md). How would you go about doing Redux with SSR and [Next.js](../../Skills/Web%20Development/Next.js.md). We'll explore this in the next few videos. If you're not familiar with Redux, it basically makes the management of your state centralized, but also prevents spreading your state through all your child components. Something that becomes frustrating for any developer as your application grows. If you have no interest of using Redux, feel free to skip to the next chapter where we revert back to where application currently is and work further on it. So let's work on building the code to make Redux work into an environment. Please be aware that our application won't be working until we complete all their required Redux items. So the first thing we're going to do is install the few dependencies. So what I'm going to do is open up a terminal. You can click on terminal and new terminal or you can do Control + Grave, like so. So let's go ahead and install the dependencies. So we'll start with next-redux-wrapper. We also need react-redux, and finally we need Redux. So now we have those dependencies, let's close our terminal. And what am I going to do before I create the new file which is going to be our store. I'm going to cut this line here and I'm going to grab that code and basically use it in the store file. So let's go ahead and save that.
>
> **[1:34](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=94)** And I'm going to create the store file. And you want to make sure that that file is outside of the pages, because if you put the store inside of the pages, what's going to happen when you start the server? It's going to tell you that it doesn't have a component because Next.js is expecting components inside of pages. So you want to create outside of pages. So let's go ahead and create store.js right here, like so. And then as you would expect we will paste what we just cut from the other file, like, so. But now the link is not going to be good because we were in the pages directories so who want to correct that here. So what I'm going to do is simply do this and then go into pages/API/ and then get from data.[JSON](../../Skills/Web%20Development/JSON.md). And then I'm going to import a few things from the dependencies that I just installed. So I'm going to need createwrapper from next-redux-wrapper. And then I'm going to also need createStore from Redux.
>
> **[3:02](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=182)** Great, so now that we have that, the first thing we're going to do we're going to create our store and I'm going to put a comment here so you can visualize what these things are. So this is create store, and we're going to go ahead and create a variable that we'll call store and inside of it we're going to pass initial state. And we're going to create that momentarily when we create our reducers and our actions. So you want to basically create that code for now and it's going to make sense after. So into that initial state we're going to pass the startState, and this is a function that will return createStore, and inside of it we're going to pass our reducer which we'll work on momentarily, our initial state. And if you've done the previous version of that course you're going to start seeing that we're changing things a little bit, and it's going to simplify the code. Since the first version of that course the code as being simplified for Redux a lot. So that's agood thing. And then we're going to create our initStore which is basically a wrapper that simplifies all the Redux code here. So right now we have our store. And now the last thing we're going to do is go back to our index and actually update a few things here.
>
> **[4:35](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=275)** So the first thing we're going to do is make sure that we update these static async getInitialProps. So now we're going to pass the store inside of our initial props. And instead of returning cards.data we're going to return the store. So let's go ahead and do that. We're going to return the store and dispatch is a function that basically calls into the store and goes into one of the action which in this case is going to be the initial cards and calls from the store or the state. What is the state at that point? And it's going to make sense once we start doing that function momentarily.
>
> **[5:29](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=329)** And finally, the last piece that we need is to export. And we'll want to make sure that we are removing this from here cause we can export twice. And we're going to export default. And this is where we apply the wrapper that we set up in our store and makes the code a lot simpler. So what we're doing now is using initStore which we'll need to import as well. With Redux and we're passing the component or the class component index, which is basically there's component. So now we're going to need to import this as well. So let's go up and import initStore from our store.
>
> **[6:32](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=392)** And our store is right here like so. For now we have our initStore we are passing it down here and wrapping this component with our stores. So basically now by returning it too, we have it available or the state is available to use inside of our component. So let's save this. So now that we have our base store and Redux dependencies, let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (2), [Next.js](../../Skills/Web%20Development/Next.js.md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Code Identifiers:** initstore (4), createstore (2), startstate (1), getinitialprops (1)
> **CLI Commands:** make (6)
> **File Paths:** next.js (2), store.js (1), data.json (1)
> **Tools:** terminal (4)
> **Cross-References:** in the next (1), next chapter (1), go back to (1)
> **Prerequisites:** install (2), set up (1)
> **Env Vars:** ssr (1), api (1)

#### [Add Redux actions](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-actions?u=76281980&t=0)** - [Narrator] A Redox Implementation requires actions. So basically actions are the functions that will be dispatched or called by the component and then execute the reducers to update the store. With the new data available for the application to feed from basically from the state. So let's work on this, so the first thing we're going to do is initialize our state inside of our store. So what I'm going to do here is create our initial state. And I'm going to, again, put a comment here so you can visualize what this is, and I'm going to create the new state with a variable start state. And this will be an object with cards which will be an array. So basically we'll pass the data into that in eventually. Okay. So now that we have our initial state let's create our actions. So actions are basically functions, and you're going to see this as we create them. So the first one, we're going to export a function that will be called initial cards and I'm using the ES6 or above syntax. And then we're going to return from that function and object. And inside of that object there's two things that we're going to pass. The first one is, what is the type of that function? And this one is called initial cards
>
> **[1:33](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-actions?u=76281980&t=93)** and that is basically the standard when you write to type with all caps. And then we're going to pass cards with the data, like so. So basically when we call this action initial cards and we pass it down into the reducer our state is now going to be fed with the data from our data that Jason filed here and this is the type of the action. Let's create a second action and this one is basically as an example if we were to add items inside of our application then we would have this action. We're not going to use it in this application but I just wanted to insert an example. So for example, this one would passed an item into that action, and then we would return again an object which has a type again. So what is the type of that action in this case is to add and then we would pass the item. So basically this is as if I were doing something like this. And these are the actions. We have two functions that we need to pass now into our application. So we're going to go into the index now and make sure we save before we do that and open index and now I'm going to import those two functions from my store. And the first one is initial cards,
>
> **[3:09](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-actions?u=76281980&t=189)** and then I have, add item which are the two functions. So the first one we're already using initial cards as you remember, we actually are using it here. So the way actions work is that they're called from the front end or the component through the function called dispatch. And what happens then you're past the actual function that we created as an action. So in this case we're passing initial cards and once we're calling this we're returning it or executing an action, which is passed down into the reducer which we'll do shortly. So in this case, we're calling initial cards. So let me give you an example that you can visualize a little bit further. So let's say for example, we had a button and we had the way you use a button is with the onclick method. And then inside of it we would pass a function that would call something. So once we click on that button we would execute that function and the function would be dispatch and we would call the add item. So whenever we click on that button it would call the add item action through the method dispatch. So let's go and comment that one and I'm going to leave it as a reference for you.
>
> **[4:43](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-actions?u=76281980&t=283)** Okay. So one more piece of the puzzle for Redox. So let's move on.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (2)
> **Definitions:** is called (1), we call this (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Env Vars:** es6 (1)
> **Speakers:** - [narrator] (1)

#### [Add Redux reducers](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=0)** - The next step to complete Redox is to add the reducers. Basically the function that will take the action dispatch by the application and then update the store with the new information. And therefore the application will be able to update its views with the updated data. So let's go ahead and build that up. So, I'm back into the store JS file and what I'm going to do right after my actions, I'm going to create my reducers. So let's go ahead and again take a note, reducers. And, what I'm going to do is export, a Function called reducer. And I'm going to pass inside as a variable. The state with the initial state. Like so. And I'm going to pass action. And inside of that function we're going to have a switch statement. Which will pass the action type. So remember what we've done here is we have these functions or actions there are calling or dispatch from the application. And when they're called, we're returning a type and then we're returning data or what is called the payload. And in this case, let's say, for example we called initial cards. We're calling into this initial cards type and this is what is passed here. So, if this type is of initial cards
>
> **[1:36](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=96)** what are we going to do with it? And therefore we have a case. So the first case is initial cards. And just to make sure I'm not making any typos, I'm going to copy the type here and basically paste it here. Like so. And if we have this case, we're going to return what? We're going to return cards. And what is the payload action.cards. So basically what we're passing here is the data. So, this is what the state is going to return. And then what we're going to do is add a second case. So what I'm going to do is literally copy this section and then just do it again, like so. And make sure it's indented properly. And then what I'm going to do for the case this time, I'm going to add from the second case here. So, let's say for example, we're dispatching or calling the add item action. We're passing an item. So, there must be an object with it. And, this is the type. So this is what happens here. And we have a payload of item. So in this case, what are we going to return? First of all, we need to return to state. So something's going to change in that particular object here. We're going to return the state.
>
> **[3:09](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=189)** Not high caps, state like so. And then inside of that new state we're going to pass cards
>
> **[3:21](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=201)** with an array. Which will add their current state.cards and passed a new payload which is item in this case. So, basically what happens here if you're not familiar with the syntax. Is that we're returning the original state that we had when we first clicked on add or click on the action. And then we're returning the current state and then we're adding to it the new action item that was passed. So, when this function is called, we have an item that is passed to it. And actually, if you go back to the index, in this function we should have an item. So we should have an item like that, because it requires that variable. I'm not going to add it because we're not going to use that button. But if we were, we would need to pass something to it. So we're passing an item. So, in this case it would be an object with basically. If we look into the API, data [JSON](../../Skills/Web%20Development/JSON.md). It would be an object that would look something like this. So we had animation card, description, some description and an ID. So, once we have that it would be passed into this return statement here. So the state would be returned the current state. So, the state that was initialized here. And then add a new item to that state. So we would have a brand new card added to the list of cards. So this is pretty much what it is for the first two case. And then we need a default case.
>
> **[4:56](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=296)** So what I'm going to do is basically add default and simply return the state in this case. And then you can save it. So right now our application with Redox is ready to be tested. So let's go ahead and close all this. And I'm going to open my terminal by doing control gravity. Or you can open it by clicking on terminal, like so. And there's two ways that you can basically build and then run your application. The first approach is the one that we've used in the past. So what you could do is do [npm](../../Skills/Web%20Development/npm.md) run build and then do NPM run start. But there's a faster way. You can do NPM run dev. And what it's going to do is going to do a bill for you and also start the application. So let's go ahead and do that instead. So right now we have a server started on local hosts. So let me open a browser. And let's go to local hosts 3000. And we have a little spelling mistake here. So let's go and make sure that we don't have that. So, initStore has been basically declare twice. Let's go into our index. And as you can see we have the store initialized twice. So, what I'm going to do is simply remove this one here. That's a little mistake on my part. So let's save that and it's compiling
>
> **[6:30](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=390)** and let's go back to that page. And now everything is working as it should. So we have our cards, everything is good here and we're good to go. So as you can see, it's fairly simple to implement Redox with Next JS and [React](../../Skills/Web%20Development/React.js.md). So this is a fairly simple implementation. But as your application grows, you can split your actions, reducers and main store into their respective files. And also split them further by type, but in principle, it's the same approach.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [npm](../../Skills/Web%20Development/npm.md) (3), [JSON](../../Skills/Web%20Development/JSON.md) (1), [React](../../Skills/Web%20Development/React.js.md) (1)
> **CLI Commands:** make (3), npm (3)
> **Env Vars:** npm (3), api (1), json (1)
> **Definitions:** is called (2), is a  (1)
> **Cross-References:** go back to (2)
> **Tools:** terminal (2)
> **UI Navigation:** click on (1), go to (1)
> **Analogies:** for example (2)

#### [Challenge: Why use Redux for SSR?](https://www.linkedin.com/learning/react-server-side-rendering-8539269/challenge-why-use-redux-for-ssr?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/challenge-why-use-redux-for-ssr?u=76281980&t=0)** (pleasant electronic music)
>
> **[0:05](https://www.linkedin.com/learning/react-server-side-rendering-8539269/challenge-why-use-redux-for-ssr?u=76281980&t=5)** - [Instructor] So before we continue, let's challenge you with a quick question. In this chapter, we started working with SSR and Redux, but you may still be wondering why use Redux with SSR. So think about what you would answer, and when you're ready, watch the solution video.

> [!info]- Semantic Content
>
> **Env Vars:** ssr (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (pleasant electronic music) (1)

#### [Solution: Why use Redux for SSR?](https://www.linkedin.com/learning/react-server-side-rendering-8539269/solution-why-use-redux-for-ssr?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/react-server-side-rendering-8539269/solution-why-use-redux-for-ssr?u=76281980&t=5)** - Okay so let's explore what are the main reasons to add Redux with SSR? For starters, when you get to a point where you need or want to leverage SSR for rendering your application or website at the server level you'll need to have a centralized state management solution. So your state isn't all over your child components. Redux is one of them. Also and especially if you use [React](../../Skills/Web%20Development/React.js.md) I would lean towards leveraging Redux as it has been battle tested through many popular sites, such as [Facebook](../../Glossary/Service/Facebook.md). So the combination of React, SSR with next JS and Redux is great for managing your performance and your state of large applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (2), [Facebook](../../Glossary/Service/Facebook.md) (1)
> **Env Vars:** ssr (3)
> **Analogies:** such as (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - okay (1)


### 3. Server-Side Rendering with Node

[↑ Back to Table of Contents](#table-of-contents)

#### [Create initial Express or Next.js server](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=0)** - In many cases, you might already have an Express web server running. Or would like to get a bit more control over the routes. While you can bill an Express server with Next JS and still do SSR with the power of the two libraries. So let's work on this. So, I went back to the file as they were just before we added Redux into our project. And if you're not sure which exercise files to use. You can go into the exercise files and then look into zero three chapter zero three zero one. And look at the beginning and copy those files into the SSR folder. And this is what it should look like for your index. So right now we should have our return statement just returning the cards and so on and so forth. So let's go ahead and work on that project so we can make Next JS and Express work together. So the first thing we're going to do is go into the terminal. So let's go ahead and open a new terminal so you can do new terminal or control graphic. And we're going to install Express. So [npm](../../Skills/Web%20Development/npm.md) I or install Express. Then in the MPM start script inside of our package .[JSON](../../Skills/Web%20Development/JSON.md) file. Instead of doing Next start. What we're going to do is do node server.JS. And that's going to be the file we're going to use and create momentarily. And basically when we call start
>
> **[1:34](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=94)** it's going to run this server file here with Next JS. So let's go ahead and save that we can close that. So now we're going to work into this brand new file. So what I'm going to do is create a new file and call it server.JS. And you want to make sure this file is outside of pages. Outside of public at the root of your directory. Because if you put it in pages like I mentioned before it's going to treat it as a component and therefore give you an error. So let's go ahead and work on our initial servers. So, this is your typical Express servers. So let's go ahead and do const Express. And then required Express. Then we're going to require Next as well. And this is where we start implementing Next into our server. Next. And then we're going to typical Express stuff. So the port. I'm going to use 3000 on this one. Going to create a variable call dev. Which will have a variable for the node environment. So it's dev or production. But in this case we're going to use dev. But still you want to have that.
>
> **[3:07](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=187)** And then we're going to create the app. And then instead of using Express we're going to use Next. And then pass our dev process that we just created inside of Next. So now it basically knows that we're using a development environment. So you could change this to production if you want. And then we're going to create a get request handler.
>
> **[3:43](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=223)** And now we're going to start using the app environment or our server. Prepare our server.
>
> **[3:59](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=239)** Then execute these things. So once your server is ready. You're going to create a server with Express. So basically this is the process that Next JS does. And then, once we've prepared our files. So once they are built, then create the Express server. And then the typical Express stuff. So listen to port. If there's an error please send me the error.
>
> **[4:48](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=288)** And then into the console log, we're going to add the message ready on HTTP,
>
> **[4:59](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=299)** local host. And then we're going to pass the port that we created in your variable port. Like so.
>
> **[5:21](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=321)** Perfect. Well, now we have our initial server. So let's go ahead and start it. So I'm going to do NPM run build, like we've done before. And then NPM start. And I just made a typo here. So let's make sure I correct that. Save and NPM start again. So now as you can see, we have compiled successfully and are ready to run our server. So we got our Express and Next JS server running. Let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [npm](../../Skills/Web%20Development/npm.md) (4), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **CLI Commands:** npm (4), make (3), node (2)
> **Env Vars:** npm (4), ssr (2), mpm (1), json (1), http (1)
> **Tools:** terminal (3)
> **File Paths:** server.js (2)
> **Exercise Files:** exercise files (2)
> **Prerequisites:** install (2)
> **Speakers:** - in (1)

#### [Add the Express routes](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-the-express-routes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-the-express-routes?u=76281980&t=0)** - [Instructor] Okay, so right now our server is running okay. But if you load it into the browser, it says cannot get. This is because we don't have an express met calling a route. So let's work on that. So I'm going to go back into visuals studio code and we can close the terminal. And what I'm going to do next is go into the app.prepare method, our function and just go ahead and add some routes. So what we're going to do is go ahead and do server.get which is the function that we need to get a route. And then we're going to call this route page two and you have the typical syntax for express. So request response. This is a function. So what are we going to return when we call in page two is we're going to render page two.
>
> **[1:11](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-the-express-routes?u=76281980&t=71)** So we're going to create a page for that route shortly. So let's go ahead and get to the next one. So what I'm going to do is basically copy those three lines and then paste them again. And then for the next one it's going to be page three and not page three this one that we're going to call it. Oh yeah. Just to make some changes and then we need to have a default route. So for this one, we're going to do again, another paste and this is going to be a star like so and this is when we're going to use the handle that we've created. Quest response. Okay, so now we have our main routes. So we have a page two or page three and our main route. So let's go ahead and save all this. We're not going to be able to call page two or page three right now, because we don't have those pages created but we're going to do that next but before we can actually go and test our server so let's make sure it's running. So it is running. And just to make sure what I'm going to do is have it run in again. So MPM start. And then I'm going to go back to my browser and refresh it. And now we have our page because now our routes have been created for that. So right now we have the main route, which is this page but we don't have the other routes.
>
> **[2:44](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-the-express-routes?u=76281980&t=164)** So if I call in page two, this page could not be found. So right now we have the express server running with [Next.js](../../Skills/Web%20Development/Next.js.md), And we have our routes. So let's move on so we can finish this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Next.js](../../Skills/Web%20Development/Next.js.md) (1)
> **CLI Commands:** make (3)
> **File Paths:** next.js (1)
> **Env Vars:** mpm (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Add links and pages with Express or Next.js](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-links-and-pages-with-express-or-next-js?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-links-and-pages-with-express-or-next-js?u=76281980&t=0)** - [Instructor] So now that we have our route to call, we need to create the page in question or the pages in question. And while we're at it, a link we can click to get to one of them. So let's go ahead and do that. So I'm going to switch back to Visual Studio Code, and I'm going to close the server.js file because we're done with that one. And now we need to create the pages inside of the pages folder. So the first one I'm going to do is the Ohyeah. So let's go inside of the folder Ohyeah, and then create a new file, which I'm going to call, ohyeah.js, and then I'm going to simply create a function that will return one [HTML](../../Skills/Web%20Development/HTML.md) tag to create one page, that's it. So let's go ahead and do ohyeah, which is the function that will return, an h1, I'm page 3 trapped inside of OH YEAH,
>
> **[1:10](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-links-and-pages-with-express-or-next-js?u=76281980&t=70)** and that's my page. And all we need to do now is export it. And what I'm going to do now is copy all that code so I can create another page, and I'm going to go to the pages folder again and click a new page and this is going to be page2.js, and I'm going to simply paste this here, and I'm going to call this page2, I'm option clicking on both ohyeah, and doing page 2. And I'm going to do, I'm page 2, and save it. And now I have my brand new pages. And all I have to do at this point is update the index to be able to click and get to one of these pages. So let's go ahead and go to our index, and I'm going to create a link, so basically here where I have the image, I'm going to remove that and create my link here actually wrap the link around the image. So let's create a link tag, which you need to import as well because this is part of next. So what I'm going to do is import it first, Link, this is a component that comes from next, next/link. And then let's use it here, href.
>
> **[2:51](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-links-and-pages-with-express-or-next-js?u=76281980&t=171)** So now what you need to do is add the route that we created inside of our server. So if we go back to the server.js file, we have these routes that we can use. We have page3, page2. So let's go ahead and use one of them. So what I'm going to do is go to, let's go to our ohyeah page, so page three. So let's go ahead and use that link, /page3, and now what we need to do is make sure that the tag is below the image, like so.
>
> **[3:35](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-links-and-pages-with-express-or-next-js?u=76281980&t=215)** So now we wrap the link around the image. So once we save this we're going to be able to go to page3 from the link, so basically the image that we have. So let's go and save this. And now let's go back to our server, it seems to have been compiled already. So let's go to our browser and I'm going to refresh just to be sure. And now click here and I get to page three. So this is from the image here, so the h+sport, if I click on it, I get to that page here. Or if I manually enter page two, I'm going to go to page two. So these are the two pages that we just created. We created basically the routes for it and now we just created a link. So as you can see, using Express with next,js, allows us to fully customize the routes and get all the benefits of Express with [Next.js](../../Skills/Web%20Development/Next.js.md), a win win win and win. Let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (1), [Next.js](../../Skills/Web%20Development/Next.js.md) (1)
> **UI Navigation:** go to (7), click on (1)
> **File Paths:** server.js (2), ohyeah.js (1), page2.js (1), next.js (1)
> **Env Vars:** html (1), yeah (1)
> **Cross-References:** go back to (2)
> **CLI Commands:** make (1)
> **Tools:** visual studio (1)
> **Definitions:** is a  (1)

#### [Challenge: Why use Node or Express for SSR?](https://www.linkedin.com/learning/react-server-side-rendering-8539269/challenge-why-use-node-or-express-for-ssr?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/challenge-why-use-node-or-express-for-ssr?u=76281980&t=0)** (lively music)
>
> **[0:05](https://www.linkedin.com/learning/react-server-side-rendering-8539269/challenge-why-use-node-or-express-for-ssr?u=76281980&t=5)** - [Instructor] So before we continue, let's challenge you with a quick question. In this chapter, we've worked with Express and [Next.js](../../Skills/Web%20Development/Next.js.md). So looking at what we've done in this chapter, why would you use Express with Next.js? So think about what you would answer, and when you're ready, watch the solution video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Next.js](../../Skills/Web%20Development/Next.js.md) (2)
> **File Paths:** next.js (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (lively music) (1)

#### [Solution: Why use Node or Express for SSR?](https://www.linkedin.com/learning/react-server-side-rendering-8539269/solution-why-use-node-or-express-for-ssr?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/solution-why-use-node-or-express-for-ssr?u=76281980&t=0)** - [Narrator] Think about this scenario, you've been using Express for all your server needs and its benefits such as routes, HTTP helpers, such as caching, et cetera. And you want to use [React](../../Skills/Web%20Development/React.js.md) and would like to have SSR capabilities on top, well, this is a prime reason why, you would use these together. So, in short, if you're well versed in React and want to add these extra functions from Express and SSR features, as we demonstrated in this chapter with [Next.js](../../Skills/Web%20Development/Next.js.md), it is possible and definitely a great addition to your tool set. And you can also add Redux, if you'd like to, a winning combination.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (2), [Next.js](../../Skills/Web%20Development/Next.js.md) (1)
> **Env Vars:** ssr (2), http (1)
> **Analogies:** such as (2)
> **File Paths:** next.js (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Code Splitting

[↑ Back to Table of Contents](#table-of-contents)

#### [Code splitting in Next.js](https://www.linkedin.com/learning/react-server-side-rendering-8539269/code-splitting-in-next-js?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/code-splitting-in-next-js?u=76281980&t=0)** - [Instructor] So you may be wondering, what is this code splitting thing that you heard about, and what are the benefits, and how does a library like [Next.js](../../Skills/Web%20Development/Next.js.md) support that? So code splitting, in a nutshell, is the ability to split your code in smaller bundles so the application can load faster when rendered. It's all about speed. Normally, with some libraries, you'd have to be explicit about which part of your application you want to be bundled together. But with Next.js, that's not the case. It comes with code splitting out of the box, and it's pretty intelligent about deciding which part of your code should be split. Off the shelf, Next.js splits your code into components, or whatever is in your page's directory and its' imports. So for example, if you have a page component that imports a CSS file, a dependency, then it will bundle all these three together into its own bundle. There are also advanced features, like Dynamic imports and Dynamic [React](../../Skills/Web%20Development/React.js.md) components, which basically allows you to delay or load specific features on demand and maintain full control of your application load times. But this is a bit beyond the scope of this course. So I'd suggest you take a look at these features on Next.js' documentation. So if you decide to do nothing, you don't have to worry about code splitting. As mentioned before, Next.js does it automatically for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Next.js](../../Skills/Web%20Development/Next.js.md) (5), [React](../../Skills/Web%20Development/React.js.md) (1)
> **File Paths:** next.js (5)
> **Env Vars:** css (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Other tools available for code splitting](https://www.linkedin.com/learning/react-server-side-rendering-8539269/other-tools-available-for-code-splitting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/other-tools-available-for-code-splitting?u=76281980&t=0)** - [Instructor] Code splitting is built in as part of [Next.js](../../Skills/Web%20Development/Next.js.md), and if you're curious about the advanced features related to code splitting, such as Dynamic imports, feel free to explore this page. For example, Dynamic imports is a great way to lazy load your application, which basically means it loads the components as the user scrolls through the page. You have other tools that can improve performance, like AMP Support and Static [HTML](../../Skills/Web%20Development/HTML.md) Support. I would strongly suggest you browse through these subjects to see what fits your needs. And if you build an application that doesn't use Next.js and still would like to leverage code splitting and other tools like Next.js, take a look at Webpack, which is the tool used behind the scene by Next.js. So you can pretty much leverage Webpack to do bundling and adding functions to performance purposes without doing SSR. And finally, if you're not a fan of Webpack, the alternative is Browserify, which, with the addition of Gulp or Grunt and a few plugins, can pretty much do a lot of what Webpack has to offer in a simpler to learn package. However, the minus is that you're relying on plugins being updated along with the other tools. A lot of dependencies to manage. So if you prefer one package, but are ready for the learning curve, then definitely go for Webpack, or Next.js if you want SSR.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Next.js](../../Skills/Web%20Development/Next.js.md) (5), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **File Paths:** next.js (5)
> **Env Vars:** ssr (2), amp (1), html (1)
> **Definitions:** is a  (1), basically means (1)
> **Analogies:** such as (1), for example (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: What is the purpose of code splitting?](https://www.linkedin.com/learning/react-server-side-rendering-8539269/challenge-what-is-the-purpose-of-code-splitting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/challenge-what-is-the-purpose-of-code-splitting?u=76281980&t=0)** (pleasant electronic music)
>
> **[0:05](https://www.linkedin.com/learning/react-server-side-rendering-8539269/challenge-what-is-the-purpose-of-code-splitting?u=76281980&t=5)** - [Instructor] So before we continue, let's challenge you with a quick question. In this chapter, we've looked into code splitting, but what is the purpose of code splitting? Think about what you would answer and, when you're ready, watch the solution video.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (pleasant electronic music) (1)

#### [Solution: What is the purpose of code splitting?](https://www.linkedin.com/learning/react-server-side-rendering-8539269/solution-what-is-the-purpose-of-code-splitting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/solution-what-is-the-purpose-of-code-splitting?u=76281980&t=0)** - You typically start using tools like [Next.js](../../Skills/Web%20Development/Next.js.md) and code splitting when your application scales to a point where you're trying to find ways to improve loading and performance. And that is exactly the purpose of code splitting. It splits your code into various bundles and components to be loaded as needed, preventing your application from loading as one big chunk of code. This way, let's say you only need a specific section of the application loaded, only this section and not the entire list of components is rendered.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Next.js](../../Skills/Web%20Development/Next.js.md) (1)
> **File Paths:** next.js (1)
> **CLI Commands:** find (1)
> **Speakers:** - you (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [React Router with SSR](https://www.linkedin.com/learning/react-server-side-rendering-8539269/react-router-with-ssr?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/react-router-with-ssr?u=76281980&t=0)** - [Instructor] Let's talk about how to integrate [React](../../Skills/Web%20Development/React.js.md) Router into your SSR project. React Router is the standard for [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) in React apps. It enables us to define different pages within our SPA without the need for full page refreshes. This keeps our user interface fast and fluid, just what we need for a modern web experience. So how do you transition into React Router? The first thing you need to do in your SPA project or the SSR project that we've been working on is [npm](../../Skills/Web%20Development/npm.md) install react-router, done, like so, and you install this into your packages. And then what you need to do is define the Routes. So this is the Routes.js file that you would add into your project. So the first thing you do, you import Route and Routes from react-Router-dom, and then you import the components that you want to use for your Routes. And then you define the Routes here. So you need to use the Routes component and then the Route, and then define the path for that Route. So let's say forward slash is home, then you would say forward slash here for the path, and then the component is home for the element as the prop. And then you continue working on these the same way, so about for About, and then for any other path, NotFound. Once you define your Routes you need to load them into the server. So now we go to the server, so SSR,
>
> **[1:36](https://www.linkedin.com/learning/react-server-side-rendering-8539269/react-router-with-ssr?u=76281980&t=96)** and you do all the initial implementations. And then what you need to do is implement your routes into the server so you import the routes that we just created and you also import StaticRouter from react-router-dom/server. And then here in your DOMserver, what you do is you import StaticRouter and then the location is the req.url and then the context. And then you put your routes inside of StaticRouter as such. And that everything else is the same as your usual SSR. Now in the client, what you need to do is basically pass BrowserRouter from react-router-dom and port your routes and then place them here and then everything else would be the same. And that's how you upgrade to an SSR project with React Router, simple changes, big improvements. Your app now has a solid foundation for growth and [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) with a routing system that's ready for complexity.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (9), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (2), [npm](../../Skills/Web%20Development/npm.md) (1), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1)
> **Env Vars:** ssr (5), spa (2)
> **Prerequisites:** install (2)
> **File Paths:** routes.js (1)
> **CLI Commands:** npm (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Next steps](https://www.linkedin.com/learning/react-server-side-rendering-8539269/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/next-steps?u=76281980&t=0)** - [Instructor] In this course, we briefly touched the possibilities of SSR, but gave you enough to understand its core and explore further on larger projects. You can explore a number of [Next.js](../../Skills/Web%20Development/Next.js.md) scenarios with example code on their [GitHub](../../Skills/Software%20Development/GitHub.md) repo. So I would strongly suggest you take a look at the list. You might find your specific need for SSR and be able to get a quick sample project going. Next.js with TypeScript, MobX, various styling libraries, and JS for testing are just a few examples of what you'll find in there. If you ever run into any issues, you can use Stack Overflow, the GitHub Issue section, and finally, take a look at their docs for further help. Next.js community is growing every day, and you'll quickly find an answer to your questions. Thanks very much for taking my course and I'll see you in a bit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Next.js](../../Skills/Web%20Development/Next.js.md) (3), [GitHub](../../Skills/Software%20Development/GitHub.md) (2)
> **File Paths:** next.js (3)
> **CLI Commands:** find (3)
> **Env Vars:** ssr (2)
> **Tools:** github (2)
> **Documentation:** stack overflow (1)
> **Exercise Files:** github repo (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Emmanuel Henri](../../Instructors/Web%20Development/Emmanuel%20Henri.md)

## Resources

- Exercise files available

## Skills Covered

- Next.js
- React.js

## Path Context

### In [Explore React.js Development](../../Paths/Software%20Development/Learning%20Paths/Explore%20React.js%20Development.md)
← [React- Authentication](../Web%20Development/React-%20Authentication.md) | **8 of 8**

## Appears In

- [Explore React.js Development](../../Paths/Software%20Development/Learning%20Paths/Explore%20React.js%20Development.md)

## Related Courses

_Courses sharing skills:_

- [React- Cloud-Powered Apps with Firebase](../Web%20Development/React-%20Cloud-Powered%20Apps%20with%20Firebase.md) — React.js
- [Building a GraphQL Project with React.js](../Web%20Development/Building%20a%20GraphQL%20Project%20with%20React.js.md) — React.js
- [React- Software Architecture](../Web%20Development/React-%20Software%20Architecture.md) — React.js
- [React- Testing and Debugging](../Web%20Development/React-%20Testing%20and%20Debugging.md) — React.js
- [React- Building Styles with CSS Modules](../Web%20Development/React-%20Building%20Styles%20with%20CSS%20Modules.md) — React.js

---

[↑ Back to top](#)