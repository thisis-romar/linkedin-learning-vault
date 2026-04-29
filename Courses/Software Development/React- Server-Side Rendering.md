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
  - '[[Explore React.js Development]]'
prev_courses:
  - '[[React- Authentication]]'
path_nav: '[{"path":"Explore React.js Development","position":8,"total":8,"prev":"React- Authentication","next":null}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - topic/web-development
  - skill/next-js
  - skill/react-js
status: not-started
created: 2026-04-29
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
  - Learn server-side rendering with React
  - What you should know
- [**1. Setting Up**](#1-setting-up) (5 videos)
  - SSR: What, how, and why
  - Chrome and Firefox tools
  - Install the required libraries and tools
  - Challenge: Why would you use SSR?
  - Solution: Why would you use SSR?
- [**2. Use Next.js to Build SSR**](#2-use-nextjs-to-build-ssr) (8 videos)
  - Introducing Next.js with React
  - Add initial components from template
  - Add data for props
  - Add Redux store and setup
  - Add Redux actions
  - Add Redux reducers
  - Challenge: Why use Redux for SSR?
  - Solution: Why use Redux for SSR?
- [**3. Server-Side Rendering with Node**](#3-server-side-rendering-with-node) (5 videos)
  - Create initial Express or Next.js server
  - Add the Express routes
  - Add links and pages with Express or Next.js
  - Challenge: Why use Node or Express for SSR?
  - Solution: Why use Node or Express for SSR?
- [**4. Code Splitting**](#4-code-splitting) (4 videos)
  - Code splitting in Next.js
  - Other tools available for code splitting
  - Challenge: What is the purpose of code splitting?
  - Solution: What is the purpose of code splitting?
- [**Conclusion**](#conclusion) (2 videos)
  - React Router with SSR
  - Next steps

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Learn server-side rendering with React
> [LinkedIn Learning](https://www.linkedin.com/learning/react-server-side-rendering-8539269/learn-server-side-rendering-with-react?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/learn-server-side-rendering-with-react?u=76281980&t=0)** - [Emmanuel] Server-side rendering, universal, or isomorphic applications can be an intimidating subject for some, and even understanding what these terms are can be confusing if you've never explored the subject.
>
> **[0:14](https://www.linkedin.com/learning/react-server-side-rendering-8539269/learn-server-side-rendering-with-react?u=76281980&t=14)** I'm here to clarify and demystify the subject for you.
>
> **[0:18](https://www.linkedin.com/learning/react-server-side-rendering-8539269/learn-server-side-rendering-with-react?u=76281980&t=18)** Hi, I'm Emmie Henry and I've been working with React since its release and often use SSR in my own applications, and it will be my pleasure to support you in this journey.
>
> **[0:30](https://www.linkedin.com/learning/react-server-side-rendering-8539269/learn-server-side-rendering-with-react?u=76281980&t=30)** First, we'll explore the basics of SSR.
>
> **[0:32](https://www.linkedin.com/learning/react-server-side-rendering-8539269/learn-server-side-rendering-with-react?u=76281980&t=32)** Then we'll focus our intention on using a template project and build our first application with SSR, React, and leveraging Next.js.
>
> **[0:41](https://www.linkedin.com/learning/react-server-side-rendering-8539269/learn-server-side-rendering-with-react?u=76281980&t=41)** Next, we'll add Redux to our application.
>
> **[0:45](https://www.linkedin.com/learning/react-server-side-rendering-8539269/learn-server-side-rendering-with-react?u=76281980&t=45)** Also, we'll take a look at express and how we can use it with SSR approach.
>
> **[0:50](https://www.linkedin.com/learning/react-server-side-rendering-8539269/learn-server-side-rendering-with-react?u=76281980&t=50)** Finally, we'll take a look at code splitting and how it impacts our application's performance.
>
> **[0:55](https://www.linkedin.com/learning/react-server-side-rendering-8539269/learn-server-side-rendering-with-react?u=76281980&t=55)** Now, if you're ready to learn all about SSR with React, fire up your favorite editor and let's get started.

> [!info]- Semantic Content
>
> **Env Vars:** ssr (5)
> **Code Keywords:** finally, (1), let (1)
> **File Paths:** next.js (1)
> **Exercise Files:** template (1)
> **Speakers:** - [emmanuel] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/react-server-side-rendering-8539269/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/what-you-should-know?u=76281980&t=0)** - [Instructor] This course is focused on building a server-side application with React, so some experience with React is a must.
>
> **[0:08](https://www.linkedin.com/learning/react-server-side-rendering-8539269/what-you-should-know?u=76281980&t=8)** If you aren't familiar with creating React components using props, importing modules, I'd recommend that you take a basic React course from our library.
>
> **[0:17](https://www.linkedin.com/learning/react-server-side-rendering-8539269/what-you-should-know?u=76281980&t=17)** Also experience with JavaScript is a must for this course, as this is the basis of a React programmer and Next.js.
>
> **[0:25](https://www.linkedin.com/learning/react-server-side-rendering-8539269/what-you-should-know?u=76281980&t=25)** Additionally, being familiar with terminal commands and NPM isn't a must, but it will definitely help you when we use these tools.
>
> **[0:34](https://www.linkedin.com/learning/react-server-side-rendering-8539269/what-you-should-know?u=76281980&t=34)** In this course, I'll be using a Mac, but you can follow along on a PC as well.
>
> **[0:38](https://www.linkedin.com/learning/react-server-side-rendering-8539269/what-you-should-know?u=76281980&t=38)** The tools work similarly on both platforms.
>
> **[0:42](https://www.linkedin.com/learning/react-server-side-rendering-8539269/what-you-should-know?u=76281980&t=42)** I'll also be using VS Code as my code editor.
>
> **[0:45](https://www.linkedin.com/learning/react-server-side-rendering-8539269/what-you-should-know?u=76281980&t=45)** Doesn't cost anything, so I recommend it, but feel free to use whichever editor you prefer.
>
> **[0:51](https://www.linkedin.com/learning/react-server-side-rendering-8539269/what-you-should-know?u=76281980&t=51)** Although I recommend using an editor with a built-in terminal.

> [!info]- Semantic Content
>
> **Tools:** terminal (2), vs code (1)
> **Definitions:** is a  (2)
> **File Paths:** next.js (1)
> **CLI Commands:** npm (1)
> **Env Vars:** npm (1)
> **Speakers:** - [instructor] (1)


### 1. Setting Up

> [↑ Back to Table of Contents](#table-of-contents)

#### SSR: What, how, and why
> [LinkedIn Learning](https://www.linkedin.com/learning/react-server-side-rendering-8539269/ssr-what-how-and-why?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/ssr-what-how-and-why?u=76281980&t=0)** - [Instructor] Maybe you have heard of some of these different terms, isomorphic, universal, and SSR.
>
> **[0:07](https://www.linkedin.com/learning/react-server-side-rendering-8539269/ssr-what-how-and-why?u=76281980&t=7)** But more often than not, they're referred to in the same context.
>
> **[0:11](https://www.linkedin.com/learning/react-server-side-rendering-8539269/ssr-what-how-and-why?u=76281980&t=11)** Simply put, these are all different terms meaning the exact same thing, which is, that your application is rendered on the server instead of the client.
>
> **[0:21](https://www.linkedin.com/learning/react-server-side-rendering-8539269/ssr-what-how-and-why?u=76281980&t=21)** So to better understand what happens when running your application on the server, let me first explain what happens in your regular React client-side application.
>
> **[0:31](https://www.linkedin.com/learning/react-server-side-rendering-8539269/ssr-what-how-and-why?u=76281980&t=31)** Your backend provides APIs or data to your front-end-side client, then React with the data on hand renders the HTML of your application in the browser.
>
> **[0:42](https://www.linkedin.com/learning/react-server-side-rendering-8539269/ssr-what-how-and-why?u=76281980&t=42)** Whereas in server-side rendering, the server renders the HTML and then sends it to the client, eliminating the need of the client to do these tasks.
>
> **[0:54](https://www.linkedin.com/learning/react-server-side-rendering-8539269/ssr-what-how-and-why?u=76281980&t=54)** Depending on the size of your application, that could be beneficial.
>
> **[0:58](https://www.linkedin.com/learning/react-server-side-rendering-8539269/ssr-what-how-and-why?u=76281980&t=58)** And there are some advantages to running your application in the server.
>
> **[1:03](https://www.linkedin.com/learning/react-server-side-rendering-8539269/ssr-what-how-and-why?u=76281980&t=63)** For starters, if you are running a pretty large application or expect it to grow quite large, rendering on the server will have a performance improvement in terms of the response time of your application.
>
> **[1:16](https://www.linkedin.com/learning/react-server-side-rendering-8539269/ssr-what-how-and-why?u=76281980&t=76)** Consider this fact, the browser in which your application renders is impacted by the machine it runs on.
>
> **[1:24](https://www.linkedin.com/learning/react-server-side-rendering-8539269/ssr-what-how-and-why?u=76281980&t=84)** Therefore, if people are looking at your application on older hardware, such as an old phone, laptop or desktop, they will see a difference in performance to those running newer hardware.
>
> **[1:36](https://www.linkedin.com/learning/react-server-side-rendering-8539269/ssr-what-how-and-why?u=76281980&t=96)** However, by rendering the application in the server, you control the performance of the render.
>
> **[1:43](https://www.linkedin.com/learning/react-server-side-rendering-8539269/ssr-what-how-and-why?u=76281980&t=103)** Additionally, if you're concerned if your site or applications gets found in the top results of Google, Bing, and other search engine searches, that might be the second benefit of rendering an application on the server.
>
> **[1:56](https://www.linkedin.com/learning/react-server-side-rendering-8539269/ssr-what-how-and-why?u=76281980&t=116)** JavaScript doesn't play well with search engines.
>
> **[1:58](https://www.linkedin.com/learning/react-server-side-rendering-8539269/ssr-what-how-and-why?u=76281980&t=118)** And unfortunately, when Google for instance sends its robots to index your page, all it sees is JavaScript and not HTML.
>
> **[2:07](https://www.linkedin.com/learning/react-server-side-rendering-8539269/ssr-what-how-and-why?u=76281980&t=127)** Over the past few years the situation has improved a bit, but you are better positioned to be indexed properly if what the robot sees is HTML.
>
> **[2:17](https://www.linkedin.com/learning/react-server-side-rendering-8539269/ssr-what-how-and-why?u=76281980&t=137)** Keep all these items in mind when you consider SSR and whether you should make the move.
>
> **[2:23](https://www.linkedin.com/learning/react-server-side-rendering-8539269/ssr-what-how-and-why?u=76281980&t=143)** So now that we've explored the basics of SSR, let's get going on working with this great approach.

> [!info]- Semantic Content
>
> **Env Vars:** html (4), ssr (3)
> **Code Keywords:** let (2)
> **Analogies:** such as (1), for instance (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Chrome and Firefox tools
> [LinkedIn Learning](https://www.linkedin.com/learning/react-server-side-rendering-8539269/chrome-and-firefox-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/chrome-and-firefox-tools?u=76281980&t=0)** - [Instructor] For any type of web development, our first tool of choice is the Dev Tools that come with your own browser.
>
> **[0:07](https://www.linkedin.com/learning/react-server-side-rendering-8539269/chrome-and-firefox-tools?u=76281980&t=7)** Whether you use Chrome, Safari, Firefox, or Edge, you have the tools needed to inspect your code, do performance checks, and more.
>
> **[0:15](https://www.linkedin.com/learning/react-server-side-rendering-8539269/chrome-and-firefox-tools?u=76281980&t=15)** In this course, we'll specifically use Chrome's internal tools.
>
> **[0:19](https://www.linkedin.com/learning/react-server-side-rendering-8539269/chrome-and-firefox-tools?u=76281980&t=19)** I highly recommend that you use either Chrome or Firefox as they offer a solid performance and work with the extensions we'll use.
>
> **[0:28](https://www.linkedin.com/learning/react-server-side-rendering-8539269/chrome-and-firefox-tools?u=76281980&t=28)** So as a developer, you've probably used Chrome's developer tools, but if not, you can access them by hitting Option + Command + I on Mac or Control + Shift + I on Windows.
>
> **[0:42](https://www.linkedin.com/learning/react-server-side-rendering-8539269/chrome-and-firefox-tools?u=76281980&t=42)** And once you see them, you can put them below here or you can put them on the side, whichever you decide to do.
>
> **[0:48](https://www.linkedin.com/learning/react-server-side-rendering-8539269/chrome-and-firefox-tools?u=76281980&t=48)** And where you have the performance tools is right here.
>
> **[0:51](https://www.linkedin.com/learning/react-server-side-rendering-8539269/chrome-and-firefox-tools?u=76281980&t=51)** You can have the network tools also telling you a little bit about performance, and you have a whole bunch of other tools that you can use.
>
> **[1:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/chrome-and-firefox-tools?u=76281980&t=60)** Also, what you could do is use what we call React Dev Tools and this is something we're going to use in this course.
>
> **[1:06](https://www.linkedin.com/learning/react-server-side-rendering-8539269/chrome-and-firefox-tools?u=76281980&t=66)** So the best way to find that tool is to search it on Google, React Dev Tool, and once you found it, you can actually install it with Chrome right here, or you can scroll down and go to the GitHub page where you have all the options for each browsers.
>
> **[1:24](https://www.linkedin.com/learning/react-server-side-rendering-8539269/chrome-and-firefox-tools?u=76281980&t=84)** In this case, I'm going to go for the Chrome version.
>
> **[1:30](https://www.linkedin.com/learning/react-server-side-rendering-8539269/chrome-and-firefox-tools?u=76281980&t=90)** And as you can see, I already have installed it on my system, and that's pretty much what you need for this course.
>
> **[1:38](https://www.linkedin.com/learning/react-server-side-rendering-8539269/chrome-and-firefox-tools?u=76281980&t=98)** And now that we have all the tools we need, let's move on.

> [!info]- Semantic Content
>
> **Tools:** firefox (2), safari (1), github (1)
> **Code Keywords:** case, (1), let (1)
> **UI Navigation:** scroll down (1), go to (1)
> **CLI Commands:** find (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Install the required libraries and tools
> [LinkedIn Learning](https://www.linkedin.com/learning/react-server-side-rendering-8539269/install-the-required-libraries-and-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/install-the-required-libraries-and-tools?u=76281980&t=0)** - [Narrator] So that's installed all the required tools and libraries we'll need in this course.
>
> **[0:05](https://www.linkedin.com/learning/react-server-side-rendering-8539269/install-the-required-libraries-and-tools?u=76281980&t=5)** And the first one we need is Node.js.
>
> **[0:07](https://www.linkedin.com/learning/react-server-side-rendering-8539269/install-the-required-libraries-and-tools?u=76281980&t=7)** So the best way to find Node is by doing a Google search with Node in the search terms, and then go to the first link, which is [nodejs.org](https://nodejs.org).
>
> **[0:17](https://www.linkedin.com/learning/react-server-side-rendering-8539269/install-the-required-libraries-and-tools?u=76281980&t=17)** So let's go ahead and click on that link.
>
> **[0:20](https://www.linkedin.com/learning/react-server-side-rendering-8539269/install-the-required-libraries-and-tools?u=76281980&t=20)** And what you want to do is download and install either one of these versions.
>
> **[0:24](https://www.linkedin.com/learning/react-server-side-rendering-8539269/install-the-required-libraries-and-tools?u=76281980&t=24)** So both are fine, but what I would recommend if you're doing an application for an enterprise or a business, I would recommend the LTS version because this is the one that is the most supported.
>
> **[0:36](https://www.linkedin.com/learning/react-server-side-rendering-8539269/install-the-required-libraries-and-tools?u=76281980&t=36)** If you're building an application for yourself, then use the current, which has the latest and the greatest feature.
>
> **[0:42](https://www.linkedin.com/learning/react-server-side-rendering-8539269/install-the-required-libraries-and-tools?u=76281980&t=42)** In this case I'm going to use the LTS version.
>
> **[0:45](https://www.linkedin.com/learning/react-server-side-rendering-8539269/install-the-required-libraries-and-tools?u=76281980&t=45)** So what am I going to do is basically download that one, and then click on the package that was just downloaded.
>
> **[0:54](https://www.linkedin.com/learning/react-server-side-rendering-8539269/install-the-required-libraries-and-tools?u=76281980&t=54)** And then let's go ahead and go through the prompts so continue, continue, agree and install.
>
> **[1:09](https://www.linkedin.com/learning/react-server-side-rendering-8539269/install-the-required-libraries-and-tools?u=76281980&t=69)** And then what we're going to do is check that it was properly installed.
>
> **[1:13](https://www.linkedin.com/learning/react-server-side-rendering-8539269/install-the-required-libraries-and-tools?u=76281980&t=73)** So the best way to do this is to go in a terminal.
>
> **[1:16](https://www.linkedin.com/learning/react-server-side-rendering-8539269/install-the-required-libraries-and-tools?u=76281980&t=76)** So what I'm going to do is use the terminal that comes with Visual Studio Code.
>
> **[1:21](https://www.linkedin.com/learning/react-server-side-rendering-8539269/install-the-required-libraries-and-tools?u=76281980&t=81)** I'm going to switch to that application.
>
> **[1:24](https://www.linkedin.com/learning/react-server-side-rendering-8539269/install-the-required-libraries-and-tools?u=76281980&t=84)** And you can use any editors that you want, in this case this is VS Code.
>
> **[1:28](https://www.linkedin.com/learning/react-server-side-rendering-8539269/install-the-required-libraries-and-tools?u=76281980&t=88)** So I'm going to to use terminal, new terminal.
>
> **[1:32](https://www.linkedin.com/learning/react-server-side-rendering-8539269/install-the-required-libraries-and-tools?u=76281980&t=92)** And then the best way to do this is to do node-- and then the version.
>
> **[1:38](https://www.linkedin.com/learning/react-server-side-rendering-8539269/install-the-required-libraries-and-tools?u=76281980&t=98)** And it's going to basically give us 14.15.4 which is the version or the current version, LTS that I just installed.
>
> **[1:46](https://www.linkedin.com/learning/react-server-side-rendering-8539269/install-the-required-libraries-and-tools?u=76281980&t=106)** Now, the next thing that we need is React.
>
> **[1:50](https://www.linkedin.com/learning/react-server-side-rendering-8539269/install-the-required-libraries-and-tools?u=76281980&t=110)** So the best way to install React, if you want it locally what you need to do is to go to the React site and follow the prompts here.
>
> **[1:59](https://www.linkedin.com/learning/react-server-side-rendering-8539269/install-the-required-libraries-and-tools?u=76281980&t=119)** So again, it's fairly easy to install React.
>
> **[2:03](https://www.linkedin.com/learning/react-server-side-rendering-8539269/install-the-required-libraries-and-tools?u=76281980&t=123)** All you have to do is to do an npm install- G for global, so basically in your system, and then cra.
>
> **[2:13](https://www.linkedin.com/learning/react-server-side-rendering-8539269/install-the-required-libraries-and-tools?u=76281980&t=133)** And that will install, React inside of your system, but there is an alternative.
>
> **[2:19](https://www.linkedin.com/learning/react-server-side-rendering-8539269/install-the-required-libraries-and-tools?u=76281980&t=139)** You can use the npx command like so.
>
> **[2:23](https://www.linkedin.com/learning/react-server-side-rendering-8539269/install-the-required-libraries-and-tools?u=76281980&t=143)** And when you create a new application with React instead of doing npm, installing react and then create a new application, you can simply use npx, create, react, app and then the name of the application.
>
> **[2:39](https://www.linkedin.com/learning/react-server-side-rendering-8539269/install-the-required-libraries-and-tools?u=76281980&t=159)** So we'll just do a test for this one.
>
> **[2:41](https://www.linkedin.com/learning/react-server-side-rendering-8539269/install-the-required-libraries-and-tools?u=76281980&t=161)** And when you do this, it'll simply caches the library in question, while you create a new project and then free your system of these unused files.
>
> **[2:51](https://www.linkedin.com/learning/react-server-side-rendering-8539269/install-the-required-libraries-and-tools?u=76281980&t=171)** And that's what I typically use when I create a new React app.
>
> **[2:55](https://www.linkedin.com/learning/react-server-side-rendering-8539269/install-the-required-libraries-and-tools?u=76281980&t=175)** Okay, so now we've got npm and Node install.
>
> **[2:59](https://www.linkedin.com/learning/react-server-side-rendering-8539269/install-the-required-libraries-and-tools?u=76281980&t=179)** Let's move on.

> [!info]- Semantic Content
>
> **CLI Commands:** node (5), npm (3), npx (2), find (1)
> **Code Keywords:** let (3), continue (2), switch (1), this, (1)
> **Prerequisites:** install (7)
> **Tools:** terminal (4), visual studio (1), vs code (1)
> **UI Navigation:** go to (2), click on (2), switch to (1)
> **Env Vars:** lts (3)
> **File Paths:** node.js (1)
> **URLs:** [nodejs.org](https://nodejs.org) (1)

#### Challenge: Why would you use SSR?
> [LinkedIn Learning](https://www.linkedin.com/learning/react-server-side-rendering-8539269/challenge-why-would-you-use-ssr?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/challenge-why-would-you-use-ssr?u=76281980&t=0)** - [Instructor] So before we continue, let's challenge you with a quick question.
>
> **[0:10](https://www.linkedin.com/learning/react-server-side-rendering-8539269/challenge-why-would-you-use-ssr?u=76281980&t=10)** In this chapter, we discussed the importance of SSR and in what scenarios would you use this technology.
>
> **[0:16](https://www.linkedin.com/learning/react-server-side-rendering-8539269/challenge-why-would-you-use-ssr?u=76281980&t=16)** So here's the question.
>
> **[0:18](https://www.linkedin.com/learning/react-server-side-rendering-8539269/challenge-why-would-you-use-ssr?u=76281980&t=18)** What are the benefits of using SSR?
>
> **[0:22](https://www.linkedin.com/learning/react-server-side-rendering-8539269/challenge-why-would-you-use-ssr?u=76281980&t=22)** Think about what you would answer, and when you're ready, watch the solution video, which is next.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (1), let (1)
> **Env Vars:** ssr (2)
> **Cross-References:** we discussed (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Why would you use SSR?
> [LinkedIn Learning](https://www.linkedin.com/learning/react-server-side-rendering-8539269/solution-why-would-you-use-ssr?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/solution-why-would-you-use-ssr?u=76281980&t=0)** (lively music)
>
> **[0:05](https://www.linkedin.com/learning/react-server-side-rendering-8539269/solution-why-would-you-use-ssr?u=76281980&t=5)** - [Instructor] The answer for the question was in the video where we go over the what, how, and why of SSR.
>
> **[0:12](https://www.linkedin.com/learning/react-server-side-rendering-8539269/solution-why-would-you-use-ssr?u=76281980&t=12)** Without going over everything we did in that video, these were the main points we were looking for.
>
> **[0:18](https://www.linkedin.com/learning/react-server-side-rendering-8539269/solution-why-would-you-use-ssr?u=76281980&t=18)** SSR is SEO-friendly, or at least better than rendering in the browser.
>
> **[0:24](https://www.linkedin.com/learning/react-server-side-rendering-8539269/solution-why-would-you-use-ssr?u=76281980&t=24)** That was the first one.
>
> **[0:25](https://www.linkedin.com/learning/react-server-side-rendering-8539269/solution-why-would-you-use-ssr?u=76281980&t=25)** And then the second one is SSR allows you to control the performance and not rely on browsers in their inherent systems.
>
> **[0:34](https://www.linkedin.com/learning/react-server-side-rendering-8539269/solution-why-would-you-use-ssr?u=76281980&t=34)** And as a direct result of that point, SSR allows you to scale your application without always worrying about its performance.
>
> **[0:43](https://www.linkedin.com/learning/react-server-side-rendering-8539269/solution-why-would-you-use-ssr?u=76281980&t=43)** If your application needs more power, all you have to do is rent or purchase the hardware to support it.

> [!info]- Semantic Content
>
> **Env Vars:** ssr (4), seo (1)
> **Code Keywords:** for. (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (lively music) (1)


### 2. Use Next.js to Build SSR

> [↑ Back to Table of Contents](#table-of-contents)

#### Introducing Next.js with React
> [LinkedIn Learning](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=0)** - [Instructor] If you've never heard of Next.js, it's a great library that allows you to quickly set up server side rendered applications with just a few lines of code.
>
> **[0:09](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=9)** And we'll demonstrate this in a few seconds.
>
> **[0:12](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=12)** It's easy to get started with, but also highly flexible and extensible and works great with libraries like REDOX which we'll also demonstrate in this course.
>
> **[0:23](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=23)** Behind the curtain, it uses Webpack, which you may or may not be familiar with but in any case, this is what builds your application into a bundle to be used in the server.
>
> **[0:34](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=34)** So let's get started with Next.js.
>
> **[0:36](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=36)** So I'm going to go back to Visual Studio Code.
>
> **[0:39](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=39)** And the first thing I'm going to do is create a brand new directory on my desktop.
>
> **[0:44](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=44)** So I'm going to go ahead and open up a brand new terminal, click on Terminal, New Terminal or you can use the Ctrl gravy shortcut and I'm going to make sure I am on the desktop.
>
> **[0:56](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=56)** Let's validate that we are, we're not, so let's go and do Desktop, we're on the right path.
>
> **[1:06](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=66)** So there are two ways to create a brand new application for Next.js.
>
> **[1:11](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=71)** There's the easy way where you can use the npx_create-next-app and then name your app which we're going to call test.
>
> **[1:24](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=84)** And this is basically going to create a brand new application with all the files that you need to get started with Next.js.
>
> **[1:31](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=91)** But for the purpose of this course we're not going to do that, we're going to create it manually.
>
> **[1:36](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=96)** But I want to show you what it does when you actually create one with this command.
>
> **[1:43](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=103)** So let's go ahead and open that project inside of Visual Studio Code.
>
> **[1:51](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=111)** So I'm going to go to my Desktop and then open up the Test.
>
> **[1:57](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=117)** And this is what it creates for you.
>
> **[1:59](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=119)** So it creates basically the file that we're going to build in a few seconds and then it adds a whole bunch of folders.
>
> **[2:06](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=126)** We're going to also create the pages folder in a few seconds so we can add the Index.js file in there.
>
> **[2:13](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=133)** But it also creates an API example, it creates also a public folder where you can have all your images and then you have your styles folders where you have your CSS files in here.
>
> **[2:27](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=147)** And by the way, CSS is built in now when Next.js so we're not going to have to do a lot of configuration like the previous version of this course.
>
> **[2:36](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=156)** So, this is what it creates for you.
>
> **[2:39](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=159)** So let's go ahead and create that manually.
>
> **[2:41](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=161)** So, what I'm going to do is close this folder, like so and then what I'm going to do is go inside of my terminal again and you can use the Ctrl gravy shortcut if you want.
>
> **[2:56](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=176)** And again, I'm going to make sure that I am on the desktop, so I'm not, so let's go ahead and make sure, okay, so now we have the tests directory which if you want to keep, go ahead and do it.
>
> **[3:07](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=187)** And this time what we're going to do is create all this manually.
>
> **[3:10](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=190)** So what I'm going to do first is do mkdir to create a brand new directory, which I'm going to call SSR and now you have this SSR folder and then we're going to go inside of that folder.
>
> **[3:26](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=206)** And now we're inside because there's nothing in there.
>
> **[3:29](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=209)** And what we're going to do is first initialize with an NPM package .JSON file.
>
> **[3:35](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=215)** So let's go ahead and do npm init and then Enter.
>
> **[3:42](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=222)** And then you can answer all the prompts.
>
> **[3:44](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=224)** So the first thing, the package name, SSR it's good, the version, yes.
>
> **[3:49](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=229)** Description if you want to enter a description it's up to you, entry point, yes.
>
> **[3:54](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=234)** Test command, we're good.
>
> **[3:56](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=236)** If you have a get repository for your project, you can add it in here, keywords and then author, I'm going to put my name and then Enter and this is what you're going to create and now we're good.
>
> **[4:12](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=252)** So the next thing we want to do is install react, react on and next.js.
>
> **[4:19](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=259)** So we're going to do exactly that.
>
> **[4:21](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=261)** So, if you go back to the project that we had initially so I'm just going to switch back for a second.
>
> **[4:27](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=267)** If you take a look at the package .JSON file, what we need is those three dependencies and then we're going to add those scripts.
>
> **[4:35](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=275)** So if you want to keep it open so we can save some time afterwards, you can do that as well, and just copy and paste from this.
>
> **[4:42](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=282)** And in fact what I'm going to do is copy what I have in here.
>
> **[4:45](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=285)** So basically these are the scripts that are related to next.
>
> **[4:49](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=289)** Once we do npm dev and npm build, npm start, these are going to be the scripts that are going to be running.
>
> **[4:55](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=295)** So let's go ahead and close or minimize that project depending on what you want to do and then let's bring back or initial one and then let's go ahead and install, react, react-dom and then next, which is the package for Next.js.
>
> **[5:14](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=314)** Oh, I forgot to do npm I or install, so let's go ahead and do that, react, react-dom and then next.
>
> **[5:27](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=327)** So now I've got all these dependencies installed, let's go ahead and paste the scripts that we had in our package .JSON file.
>
> **[5:36](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=336)** So I'm going to open that project now.
>
> **[5:40](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=340)** I'm going to go to my Desktop and then open up that project and then go to my package .JSON file and now I have these three dependencies install.
>
> **[5:53](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=353)** Now, all I have to do is make sure that I have the proper here, so you can manually enter them if you want and I'm simply going to paste them like so, so basically these are the three scripts that you want to add in here.
>
> **[6:06](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=366)** So dev, which is running the command next dev, build, next build, and then start, next start.
>
> **[6:13](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=373)** So basically when we do NPM start it's going to run next start as opposed to the typical start for a node application.
>
> **[6:22](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=382)** So now we have our package .JSON file.
>
> **[6:25](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=385)** So now we need to actually create the pages folder where you put your pages that are going to be rendered in the server.
>
> **[6:33](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=393)** So let's go ahead and create a folder first and we're going to call this pages.
>
> **[6:39](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=399)** And then inside of that folder, we're going to create the first file, which is the Index.js file.
>
> **[6:45](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=405)** And this is basically what we're going to use to create a brand new application with react and Next.js and have it rendered in the server.
>
> **[6:54](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=414)** So let's go ahead and create a brand new file in here, we're going to do Index.js, which is the entry and then in here, we're simply going to export a paragraph that will say hello.
>
> **[7:09](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=429)** So let's go ahead and do that.
>
> **[7:15](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=435)** So let's continue with our function and this is basically a functional or state less component.
>
> **[7:26](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=446)** And then let's just say, Hello, like so.
>
> **[7:31](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=451)** So now that we've done everything to have a base application let's go ahead and run the application and test it.
>
> **[7:38](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=458)** So the first thing we're going to do is bring back our terminal, so I'm going to do Ctrl gravity.
>
> **[7:43](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=463)** And then the first thing you need to do is make sure that you run a build of your application before you actually run it.
>
> **[7:51](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=471)** So if we look at the commands, the command that we're looking for is this one here.
>
> **[7:56](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=476)** So build, so let's go and do npm run build
>
> **[8:05](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=485)** and now the application has been built and now we can actually run it.
>
> **[8:09](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=489)** So what we're going to do is do npm start, and now we can go to our local host port 3000 inside of web browser.
>
> **[8:18](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=498)** So let's go ahead and do that.
>
> **[8:20](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=500)** So localhost 3000 and we have our application running.
>
> **[8:28](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=508)** Now, if you've never worked with Next.js before and have some experience with react, you may be wondering what kind of voodoo magic just happened here.
>
> **[8:36](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=516)** Well, that is the beauty of Next.js.
>
> **[8:39](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=519)** It does a lot of the background work for you especially when you do the build, including code splitting which we'll take a look at further in this course.
>
> **[8:48](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=528)** And as we add more code to this project, you'll see just how intuitive the library is.
>
> **[8:54](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=534)** Oh, and yes, this is code that is running on the server if you were wondering.
>
> **[8:59](https://www.linkedin.com/learning/react-server-side-rendering-8539269/introducing-next-js-with-react?u=76281980&t=539)** Now let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (21), case, (1), public (1), switch (1), this. (1)
> **CLI Commands:** npm (9), make (5), mkdir (1), node (1)
> **Env Vars:** json (5), ssr (3), css (2), npm (2), redox (1)
> **File Paths:** next.js (10), index.js (3)
> **Tools:** terminal (5), visual studio (2)
> **UI Navigation:** go to (4), click on (1)
> **Prerequisites:** install (4), set up (1)
> **Cross-References:** go back to (2)

#### Add initial components from template
> [LinkedIn Learning](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=0)** - [Instructor] So we need to add a bit more meat to our application.
>
> **[0:05](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=5)** In the Exercise Files, I included a project I created in another course.
>
> **[0:10](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=10)** So if you look into the Exercise Files, you'll see a resources folder.
>
> **[0:15](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=15)** We'll use some of those files to build our application, leveraging server-side rendering and show how different it is from building a straight React application.
>
> **[0:24](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=24)** In the process, we'll leverage built-in support for CSS with Next.js.
>
> **[0:29](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=29)** So let's build this.
>
> **[0:31](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=31)** So the first thing you got to do is grab the resources files and then put them into our ssr folder.
>
> **[0:38](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=38)** And for that to happen, what we need to do first is create a public folder.
>
> **[0:42](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=42)** So this is where all the public files, such as images or favicons, are going into.
>
> **[0:48](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=48)** So let's go ahead and create that.
>
> **[0:49](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=49)** So we'll right-click, New Folder, and call it public.
>
> **[0:55](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=55)** And in that folder, we're going to grab the images logo, juice, and background.jpg and png, and drop them in the public.
>
> **[1:04](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=64)** So let's go ahead and copy those, like so, and then paste them into that public folder.
>
> **[1:12](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=72)** So the next thing we're going to do is make sure that we have the template project that I created for you.
>
> **[1:19](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=79)** So we have a few files here that we're going to leverage, and we're going to explain why the CSS files have that Card.module names.
>
> **[1:28](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=88)** So let's go ahead and copy those, and then paste them into the pages folder this time, like so.
>
> **[1:39](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=99)** So in your project right now, you should have Card and then the CSS file index and then the CSS file related to it.
>
> **[1:47](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=107)** Once you have all those files, including the public files, let's go ahead and close those folders and get back to Visual Studio Code.
>
> **[1:56](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=116)** So what we're going to do now is change the code of our index to match what we have in here.
>
> **[2:02](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=122)** So, basically, the way to do CSS with built-in support in Next.js is to do with Modular CSS.
>
> **[2:10](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=130)** And, basically, the way it works is that you call your files index.module.css and then you basically import them into your file.
>
> **[2:21](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=141)** So let's go ahead and do that.
>
> **[2:22](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=142)** So what I'm going to do first is just import those files.
>
> **[2:26](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=146)** So I'm going to import styles from index.module.css, which is basically this guy here.
>
> **[2:41](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=161)** And if you're curious what it is, you can actually take a look at it.
>
> **[2:45](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=165)** It's plain old CSS.
>
> **[2:47](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=167)** So we're using Module CSS to actually work with Next.js and React.
>
> **[2:53](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=173)** And then we're going to import the Card component.
>
> **[2:56](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=176)** And if you're curious again for that one, you can take a look at Card.js.
>
> **[3:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=180)** And as you can see, it's a functional stateless component, so we have that component here.
>
> **[3:06](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=186)** And we already have module.css supplied to this component.
>
> **[3:10](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=190)** So let's go ahead and continue here and import Card.
>
> **[3:18](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=198)** And then what we're going to do is transform this into a full function, so I'm just going to remove that here to make it easier for us and then remove that as well.
>
> **[3:33](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=213)** And then typical component, we're returning it, and then we're going to start adding some HTML in here.
>
> **[3:42](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=222)** So let's go ahead and start by doing our first div, and we're going to add a className to this.
>
> **[3:48](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=228)** And this is where the Modular CSS comes into play.
>
> **[3:52](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=232)** So the way to work with Module CSS in Next.js is pretty much the same way you would work with it in React.
>
> **[3:59](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=239)** So we've imported a module here which has all of our styles.
>
> **[4:04](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=244)** And then what we could do is import it inside of this particular HTML tag.
>
> **[4:10](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=250)** So what we're going to do is do styles., and then for this one, we're looking for the app style.
>
> **[4:16](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=256)** So if we look into the index here, we're loading these styles into that specific tag here.
>
> **[4:26](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=266)** And then let's continue.
>
> **[4:27](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=267)** We're going to have a header with a className which, again, is styles., and this one we're going to load the header.
>
> **[4:41](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=281)** And then inside of the header we're going to have an image, and the image source is the logo.png.
>
> **[4:53](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=293)** So this is a public file.
>
> **[4:55](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=295)** So this is in the public folder here, and we're loading this image here.
>
> **[5:02](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=302)** And then we're going to add some className to that one as well.
>
> **[5:05](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=305)** I've been doing this on a second line so we can see all the code in our screen, but feel free to do it on a single line.
>
> **[5:13](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=313)** And we're going to add some styles to it, which are basically the logo styles.
>
> **[5:18](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=318)** And then for images, we need to add an alt, and then we're going to close that image or the tag, like so.
>
> **[5:30](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=330)** And then after the header, we're going to add a grid, so another div with a className of grid.
>
> **[5:42](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=342)** And then in that grid we're going to add our Card component, so we're going to have multiple Card components which are already been built for you.
>
> **[5:49](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=349)** So if we take a look at that one here, we have basically a Card component which is using some styles that I've actually done for you in this Card.module.css.
>
> **[6:01](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=361)** And this is going to be a Card that will be repeated a couple of times, so let's do it three times, like so.
>
> **[6:10](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=370)** And then what you could do is simply copy and paste that couple times as you please and then save it.
>
> **[6:21](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=381)** So right now we've created basically a new page that has module styles because now Next.js supports built-in styles with modules.
>
> **[6:34](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=394)** So, basically, we've imported the modules for this particular page here or component, and we're using it all throughout the tags here.
>
> **[6:44](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=404)** So let's go ahead and take a look at what it looks like.
>
> **[6:46](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=406)** So as you can remember, we had this single page before, so let's go and rebuild our application.
>
> **[6:54](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=414)** So I'm going to bring up my terminal by doing Control + grave, or you can simply go ahead and open up your Terminal here, but I'm going to do the Control + grave shortcut.
>
> **[7:04](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=424)** I'm going to stop the server and then do build again, so npm run build.
>
> **[7:12](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=432)** And if you have any errors, if you have anything that doesn't jive in here, you're going to see some error messages, take a look at them, and then basically read or actually click on the link, and it's going to bring you to a page where it's going to give you more information about what that error or bug is, and then you can actually resolve it, all right?
>
> **[7:33](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=453)** So now that we have our build on, let's go ahead and start our server.
>
> **[7:38](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=458)** And I'm going to go back to my page, refresh the page, and this is what we just did.
>
> **[7:44](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=464)** So we have our logo, we have our grid, we have three of our cards on our page, and it's all rendered in the server.
>
> **[7:53](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-initial-components-from-template?u=76281980&t=473)** Okay, so now that we have a base project we can start working with, let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), module (9), public (8), this. (2), continue (2)
> **Env Vars:** css (10), html (2)
> **File Paths:** next.js (5), index.module.css (2), card.js (1), module.css (1), card.module.css (1)
> **Code Identifiers:** classname (4)
> **CLI Commands:** make (2), npm (1)
> **Tools:** terminal (2), visual studio (1)
> **Exercise Files:** exercise files (2), template (1)
> **UI Navigation:** right-click (1), click on (1)

#### Add data for props
> [LinkedIn Learning](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-data-for-props?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-data-for-props?u=76281980&t=0)** - [Instructor] So far we've used stateless components, or functions, but like most applications, we need to populate our application with data, and as with any regular React application, we get the state populated with data, and then pass these as props to our components.
>
> **[0:17](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-data-for-props?u=76281980&t=17)** Next.js is a bit different in its approach, but conceptually the same as React, let me demonstrate.
>
> **[0:24](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-data-for-props?u=76281980&t=24)** So the first thing we're going to do is create a folder inside of our pages here, and we're going to call it API, and then what we're going to do is grab a file from the resources inside of the exercise files and drop it inside of the API.
>
> **[0:41](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-data-for-props?u=76281980&t=41)** So let's go ahead and do that.
>
> **[0:45](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-data-for-props?u=76281980&t=45)** Go into the exercise files, click on resources, you have the data file here, and then let's open up our application into the pages, API, and then copy that one into that folder, like so.
>
> **[1:05](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-data-for-props?u=76281980&t=65)** Then you can close all this and then we're going to go back into Visual Studio Code and continue working on our code in the index.js.
>
> **[1:14](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-data-for-props?u=76281980&t=74)** So the first thing we're going to do is import that data, so let's go ahead and do that.
>
> **[1:20](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-data-for-props?u=76281980&t=80)** So we're going to import data from API/data.json, like so, and then we need to import React because we're going to transform our stateless component into a class component.
>
> **[1:37](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-data-for-props?u=76281980&t=97)** So we need to import React from react, like so, and then let's go ahead and convert this right away, and we're going to do export default class Index extends React.Component, and then we're going to make sure that we have a render method use in here, and insert the component inside of that render, like so,
>
> **[2:23](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-data-for-props?u=76281980&t=143)** and indent this to be perfect, like so, and then let's make sure we create our state.
>
> **[2:29](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-data-for-props?u=76281980&t=149)** So I'm going to basically do static async getInitialProps,
>
> **[2:40](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-data-for-props?u=76281980&t=160)** which is a function that I'm going to create just temporarily while we're working on our redux code, and then basically pass for the cards, the data that we've imported into our API.
>
> **[2:58](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-data-for-props?u=76281980&t=178)** So if we look into our API here, we have some data that will pass into the cards, so there should be 17 cards based on that data here, and then what we need to do as opposed to hard code our cards in here, what we're going to do is use a map method to actually map as many cards as we have data in our data or in our state.
>
> **[3:24](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-data-for-props?u=76281980&t=204)** So basically the big changes in here are in this area here.
>
> **[3:28](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-data-for-props?u=76281980&t=208)** So what I'm going to do is remove Card, and then what we're returning is this.prompts.cards, and we're going to map it and pass it to the card.
>
> **[3:44](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-data-for-props?u=76281980&t=224)** So basically what is happening here is for every data in our array of our data.json file here that we have, so every element that we have, we're going to have a new card return, and then we're going to leverage the card component, and pass the data to it.
>
> **[4:08](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-data-for-props?u=76281980&t=248)** So as many times as we have data in our array, we're going to have a card showing up.
>
> **[4:13](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-data-for-props?u=76281980&t=253)** So this is typical React code that we're basically doing here, so if you've never seen this before, this is plain React.
>
> **[4:22](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-data-for-props?u=76281980&t=262)** Okay, so now that we have this, we should be safe to actually save this first and then rebuild our server, so let's bring up our terminal, and then stop the server, npm run build, and then do npm start, and then go back to our browser, refresh, and now we have the same page, but now we have 11 components based on basically the data that we passed to it.
>
> **[4:59](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-data-for-props?u=76281980&t=299)** So you could also fetch data from an external API and there are multiple examples of this in the docs or on the Github repo here, so if you go to this address here and then go to the examples or go to the Github repo for Next.js, if you do a Google search, you'll find it fairly quickly, and then go into the examples and scroll down, everywhere you see API, API routes cors, and so on so forth, these are all great examples of how to fetch external APIs from Next.js or the application that we're working on.
>
> **[5:37](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-data-for-props?u=76281980&t=337)** So as you can see, it's not really hard to add data to our state, and then get our data going into our application, and remember, this is all happening in SSR.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), pass (5), continue (1), extends (1), static (1)
> **Env Vars:** api (9), ssr (1)
> **File Paths:** next.js (3), index.js (1), api/data.json (1), data.json (1)
> **CLI Commands:** make (2), npm (2), find (1)
> **UI Navigation:** go to (3), click on (1), scroll down (1)
> **Tools:** github (2), visual studio (1), terminal (1)
> **Exercise Files:** exercise files (2), github repo (2)
> **Definitions:** is a  (2)

#### Add Redux store and setup
> [LinkedIn Learning](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=0)** - [Instructor] When doing state management, Redux is often the first place to go when working with React.
>
> **[0:06](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=6)** How would you go about doing Redux with SSR and Next.js.
>
> **[0:10](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=10)** We'll explore this in the next few videos.
>
> **[0:13](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=13)** If you're not familiar with Redux, it basically makes the management of your state centralized, but also prevents spreading your state through all your child components.
>
> **[0:22](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=22)** Something that becomes frustrating for any developer as your application grows.
>
> **[0:27](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=27)** If you have no interest of using Redux, feel free to skip to the next chapter where we revert back to where application currently is and work further on it.
>
> **[0:37](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=37)** So let's work on building the code to make Redux work into an environment.
>
> **[0:42](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=42)** Please be aware that our application won't be working until we complete all their required Redux items.
>
> **[0:48](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=48)** So the first thing we're going to do is install the few dependencies.
>
> **[0:51](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=51)** So what I'm going to do is open up a terminal.
>
> **[0:54](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=54)** You can click on terminal and new terminal or you can do Control + Grave, like so.
>
> **[1:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=60)** So let's go ahead and install the dependencies.
>
> **[1:02](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=62)** So we'll start with next-redux-wrapper.
>
> **[1:09](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=69)** We also need react-redux, and finally we need Redux.
>
> **[1:16](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=76)** So now we have those dependencies, let's close our terminal.
>
> **[1:20](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=80)** And what am I going to do before I create the new file which is going to be our store.
>
> **[1:24](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=84)** I'm going to cut this line here and I'm going to grab that code and basically use it in the store file.
>
> **[1:32](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=92)** So let's go ahead and save that.
>
> **[1:34](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=94)** And I'm going to create the store file.
>
> **[1:37](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=97)** And you want to make sure that that file is outside of the pages, because if you put the store inside of the pages, what's going to happen when you start the server?
>
> **[1:47](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=107)** It's going to tell you that it doesn't have a component because Next.js is expecting components inside of pages.
>
> **[1:55](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=115)** So you want to create outside of pages.
>
> **[1:57](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=117)** So let's go ahead and create store.js right here, like so.
>
> **[2:04](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=124)** And then as you would expect we will paste what we just cut from the other file, like, so.
>
> **[2:12](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=132)** But now the link is not going to be good because we were in the pages directories so who want to correct that here.
>
> **[2:18](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=138)** So what I'm going to do is simply do this and then go into pages/API/ and then get from data.json.
>
> **[2:30](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=150)** And then I'm going to import a few things from the dependencies that I just installed.
>
> **[2:35](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=155)** So I'm going to need createwrapper from next-redux-wrapper.
>
> **[2:46](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=166)** And then I'm going to also need createStore from Redux.
>
> **[3:02](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=182)** Great, so now that we have that, the first thing we're going to do we're going to create our store and I'm going to put a comment here so you can visualize what these things are.
>
> **[3:11](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=191)** So this is create store, and we're going to go ahead and create a variable that we'll call store and inside of it we're going to pass initial state.
>
> **[3:24](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=204)** And we're going to create that momentarily when we create our reducers and our actions.
>
> **[3:29](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=209)** So you want to basically create that code for now and it's going to make sense after.
>
> **[3:35](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=215)** So into that initial state we're going to pass the startState, and this is a function that will return createStore, and inside of it we're going to pass our reducer which we'll work on momentarily, our initial state.
>
> **[3:59](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=239)** And if you've done the previous version of that course you're going to start seeing that we're changing things a little bit, and it's going to simplify the code.
>
> **[4:07](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=247)** Since the first version of that course the code as being simplified for Redux a lot.
>
> **[4:14](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=254)** So that's agood thing.
>
> **[4:17](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=257)** And then we're going to create our initStore which is basically a wrapper that simplifies all the Redux code here.
>
> **[4:26](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=266)** So right now we have our store.
>
> **[4:30](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=270)** And now the last thing we're going to do is go back to our index and actually update a few things here.
>
> **[4:35](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=275)** So the first thing we're going to do is make sure that we update these static async getInitialProps.
>
> **[4:45](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=285)** So now we're going to pass the store inside of our initial props.
>
> **[4:51](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=291)** And instead of returning cards.data we're going to return the store.
>
> **[4:55](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=295)** So let's go ahead and do that.
>
> **[4:58](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=298)** We're going to return the store and dispatch is a function that basically calls into the store and goes into one of the action which in this case is going to be the initial cards and calls from the store or the state.
>
> **[5:14](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=314)** What is the state at that point?
>
> **[5:18](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=318)** And it's going to make sense once we start doing that function momentarily.
>
> **[5:29](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=329)** And finally, the last piece that we need is to export.
>
> **[5:35](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=335)** And we'll want to make sure that we are removing this from here cause we can export twice.
>
> **[5:44](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=344)** And we're going to export default.
>
> **[5:46](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=346)** And this is where we apply the wrapper that we set up in our store and makes the code a lot simpler.
>
> **[5:54](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=354)** So what we're doing now is using initStore which we'll need to import as well.
>
> **[6:03](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=363)** With Redux and we're passing the component or the class component index, which is basically there's component.
>
> **[6:12](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=372)** So now we're going to need to import this as well.
>
> **[6:14](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=374)** So let's go up and import initStore from our store.
>
> **[6:32](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=392)** And our store is right here like so.
>
> **[6:36](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=396)** For now we have our initStore we are passing it down here and wrapping this component with our stores.
>
> **[6:44](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=404)** So basically now by returning it too, we have it available or the state is available to use inside of our component.
>
> **[6:52](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=412)** So let's save this.
>
> **[6:55](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-store-and-setup?u=76281980&t=415)** So now that we have our base store and Redux dependencies, let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), pass (4), function (3), static (1), async (1)
> **Code Identifiers:** initstore (4), createstore (2), startstate (1), getinitialprops (1)
> **CLI Commands:** make (6)
> **File Paths:** next.js (2), store.js (1), data.json (1)
> **Tools:** terminal (4)
> **Cross-References:** in the next (1), next chapter (1), go back to (1)
> **Prerequisites:** install (2), set up (1)
> **Env Vars:** ssr (1), api (1)

#### Add Redux actions
> [LinkedIn Learning](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-actions?u=76281980&t=0)** - [Narrator] A Redox Implementation requires actions.
>
> **[0:03](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-actions?u=76281980&t=3)** So basically actions are the functions that will be dispatched or called by the component and then execute the reducers to update the store.
>
> **[0:12](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-actions?u=76281980&t=12)** With the new data available for the application to feed from basically from the state.
>
> **[0:18](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-actions?u=76281980&t=18)** So let's work on this, so the first thing we're going to do is initialize our state inside of our store.
>
> **[0:24](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-actions?u=76281980&t=24)** So what I'm going to do here is create our initial state.
>
> **[0:28](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-actions?u=76281980&t=28)** And I'm going to, again, put a comment here so you can visualize what this is, and I'm going to create the new state with a variable start state.
>
> **[0:41](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-actions?u=76281980&t=41)** And this will be an object with cards which will be an array.
>
> **[0:48](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-actions?u=76281980&t=48)** So basically we'll pass the data into that in eventually.
>
> **[0:52](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-actions?u=76281980&t=52)** Okay. So now that we have our initial state let's create our actions.
>
> **[0:57](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-actions?u=76281980&t=57)** So actions are basically functions, and you're going to see this as we create them.
>
> **[1:02](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-actions?u=76281980&t=62)** So the first one, we're going to export a function that will be called initial cards and I'm using the ES6 or above syntax.
>
> **[1:17](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-actions?u=76281980&t=77)** And then we're going to return from that function and object.
>
> **[1:23](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-actions?u=76281980&t=83)** And inside of that object there's two things that we're going to pass.
>
> **[1:27](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-actions?u=76281980&t=87)** The first one is, what is the type of that function?
>
> **[1:30](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-actions?u=76281980&t=90)** And this one is called initial cards and that is basically the standard when you write to type with all caps.
>
> **[1:39](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-actions?u=76281980&t=99)** And then we're going to pass cards with the data, like so.
>
> **[1:46](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-actions?u=76281980&t=106)** So basically when we call this action initial cards and we pass it down into the reducer our state is now going to be fed with the data from our data that Jason filed here and this is the type of the action.
>
> **[2:04](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-actions?u=76281980&t=124)** Let's create a second action and this one is basically as an example if we were to add items inside of our application then we would have this action.
>
> **[2:13](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-actions?u=76281980&t=133)** We're not going to use it in this application but I just wanted to insert an example.
>
> **[2:19](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-actions?u=76281980&t=139)** So for example, this one would passed an item into that action, and then we would return again an object which has a type again.
>
> **[2:32](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-actions?u=76281980&t=152)** So what is the type of that action in this case is to add and then we would pass the item.
>
> **[2:39](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-actions?u=76281980&t=159)** So basically this is as if I were doing something like this.
>
> **[2:47](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-actions?u=76281980&t=167)** And these are the actions.
>
> **[2:49](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-actions?u=76281980&t=169)** We have two functions that we need to pass now into our application.
>
> **[2:53](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-actions?u=76281980&t=173)** So we're going to go into the index now and make sure we save before we do that and open index and now I'm going to import those two functions from my store.
>
> **[3:05](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-actions?u=76281980&t=185)** And the first one is initial cards, and then I have, add item which are the two functions.
>
> **[3:13](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-actions?u=76281980&t=193)** So the first one we're already using initial cards as you remember, we actually are using it here.
>
> **[3:19](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-actions?u=76281980&t=199)** So the way actions work is that they're called from the front end or the component through the function called dispatch.
>
> **[3:27](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-actions?u=76281980&t=207)** And what happens then you're past the actual function that we created as an action.
>
> **[3:33](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-actions?u=76281980&t=213)** So in this case we're passing initial cards and once we're calling this we're returning it or executing an action, which is passed down into the reducer which we'll do shortly.
>
> **[3:46](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-actions?u=76281980&t=226)** So in this case, we're calling initial cards.
>
> **[3:49](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-actions?u=76281980&t=229)** So let me give you an example that you can visualize a little bit further.
>
> **[3:52](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-actions?u=76281980&t=232)** So let's say for example, we had a button and we had the way you use a button is with the onclick method.
>
> **[4:06](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-actions?u=76281980&t=246)** And then inside of it we would pass a function that would call something.
>
> **[4:13](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-actions?u=76281980&t=253)** So once we click on that button we would execute that function and the function would be dispatch and we would call the add item.
>
> **[4:25](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-actions?u=76281980&t=265)** So whenever we click on that button it would call the add item action through the method dispatch.
>
> **[4:35](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-actions?u=76281980&t=275)** So let's go and comment that one and I'm going to leave it as a reference for you.
>
> **[4:43](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-actions?u=76281980&t=283)** Okay. So one more piece of the puzzle for Redox.
>
> **[4:46](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-actions?u=76281980&t=286)** So let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** function (8), let (7), pass (7), this, (1), this. (1)
> **UI Navigation:** click on (2)
> **Definitions:** is called (1), we call this (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Env Vars:** es6 (1)
> **Speakers:** - [narrator] (1)

#### Add Redux reducers
> [LinkedIn Learning](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=0)** - The next step to complete Redox is to add the reducers.
>
> **[0:04](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=4)** Basically the function that will take the action dispatch by the application and then update the store with the new information.
>
> **[0:10](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=10)** And therefore the application will be able to update its views with the updated data.
>
> **[0:16](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=16)** So let's go ahead and build that up.
>
> **[0:19](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=19)** So, I'm back into the store JS file and what I'm going to do right after my actions, I'm going to create my reducers.
>
> **[0:27](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=27)** So let's go ahead and again take a note, reducers.
>
> **[0:31](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=31)** And, what I'm going to do is export, a Function called reducer.
>
> **[0:39](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=39)** And I'm going to pass inside as a variable.
>
> **[0:43](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=43)** The state with the initial state.
>
> **[0:49](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=49)** Like so.
>
> **[0:51](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=51)** And I'm going to pass action.
>
> **[0:56](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=56)** And inside of that function we're going to have a switch statement.
>
> **[1:02](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=62)** Which will pass the action type.
>
> **[1:06](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=66)** So remember what we've done here is we have these functions or actions there are calling or dispatch from the application.
>
> **[1:15](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=75)** And when they're called, we're returning a type and then we're returning data or what is called the payload.
>
> **[1:22](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=82)** And in this case, let's say, for example we called initial cards.
>
> **[1:26](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=86)** We're calling into this initial cards type and this is what is passed here.
>
> **[1:32](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=92)** So, if this type is of initial cards what are we going to do with it?
>
> **[1:38](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=98)** And therefore we have a case.
>
> **[1:41](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=101)** So the first case is initial cards.
>
> **[1:45](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=105)** And just to make sure I'm not making any typos, I'm going to copy the type here and basically paste it here.
>
> **[1:51](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=111)** Like so.
>
> **[1:52](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=112)** And if we have this case, we're going to return what?
>
> **[1:57](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=117)** We're going to return cards.
>
> **[2:02](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=122)** And what is the payload action.cards.
>
> **[2:09](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=129)** So basically what we're passing here is the data.
>
> **[2:13](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=133)** So, this is what the state is going to return.
>
> **[2:17](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=137)** And then what we're going to do is add a second case.
>
> **[2:19](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=139)** So what I'm going to do is literally copy this section and then just do it again, like so.
>
> **[2:31](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=151)** And make sure it's indented properly.
>
> **[2:34](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=154)** And then what I'm going to do for the case this time, I'm going to add from the second case here.
>
> **[2:40](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=160)** So, let's say for example, we're dispatching or calling the add item action.
>
> **[2:45](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=165)** We're passing an item.
>
> **[2:46](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=166)** So, there must be an object with it.
>
> **[2:48](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=168)** And, this is the type.
>
> **[2:50](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=170)** So this is what happens here.
>
> **[2:53](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=173)** And we have a payload of item.
>
> **[2:56](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=176)** So in this case, what are we going to return?
>
> **[2:59](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=179)** First of all, we need to return to state.
>
> **[3:01](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=181)** So something's going to change in that particular object here.
>
> **[3:06](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=186)** We're going to return the state.
>
> **[3:09](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=189)** Not high caps, state like so.
>
> **[3:13](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=193)** And then inside of that new state we're going to pass cards
>
> **[3:21](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=201)** with an array.
>
> **[3:24](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=204)** Which will add their current state.cards and passed a new payload which is item in this case.
>
> **[3:33](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=213)** So, basically what happens here if you're not familiar with the syntax.
>
> **[3:37](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=217)** Is that we're returning the original state that we had when we first clicked on add or click on the action.
>
> **[3:45](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=225)** And then we're returning the current state and then we're adding to it the new action item that was passed.
>
> **[3:53](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=233)** So, when this function is called, we have an item that is passed to it.
>
> **[3:57](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=237)** And actually, if you go back to the index, in this function we should have an item.
>
> **[4:03](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=243)** So we should have an item like that, because it requires that variable.
>
> **[4:07](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=247)** I'm not going to add it because we're not going to use that button.
>
> **[4:10](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=250)** But if we were, we would need to pass something to it.
>
> **[4:14](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=254)** So we're passing an item.
>
> **[4:16](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=256)** So, in this case it would be an object with basically.
>
> **[4:20](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=260)** If we look into the API, data JSON.
>
> **[4:23](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=263)** It would be an object that would look something like this.
>
> **[4:26](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=266)** So we had animation card, description, some description and an ID.
>
> **[4:31](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=271)** So, once we have that it would be passed into this return statement here.
>
> **[4:37](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=277)** So the state would be returned the current state.
>
> **[4:40](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=280)** So, the state that was initialized here.
>
> **[4:43](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=283)** And then add a new item to that state.
>
> **[4:46](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=286)** So we would have a brand new card added to the list of cards.
>
> **[4:51](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=291)** So this is pretty much what it is for the first two case.
>
> **[4:55](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=295)** And then we need a default case.
>
> **[4:56](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=296)** So what I'm going to do is basically add default and simply return the state in this case.
>
> **[5:07](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=307)** And then you can save it.
>
> **[5:11](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=311)** So right now our application with Redox is ready to be tested.
>
> **[5:16](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=316)** So let's go ahead and close all this.
>
> **[5:19](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=319)** And I'm going to open my terminal by doing control gravity.
>
> **[5:22](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=322)** Or you can open it by clicking on terminal, like so.
>
> **[5:25](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=325)** And there's two ways that you can basically build and then run your application.
>
> **[5:30](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=330)** The first approach is the one that we've used in the past.
>
> **[5:33](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=333)** So what you could do is do NPM run build and then do NPM run start.
>
> **[5:40](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=340)** But there's a faster way.
>
> **[5:41](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=341)** You can do NPM run dev.
>
> **[5:44](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=344)** And what it's going to do is going to do a bill for you and also start the application.
>
> **[5:49](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=349)** So let's go ahead and do that instead.
>
> **[5:52](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=352)** So right now we have a server started on local hosts.
>
> **[5:55](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=355)** So let me open a browser.
>
> **[6:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=360)** And let's go to local hosts 3000.
>
> **[6:06](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=366)** And we have a little spelling mistake here.
>
> **[6:09](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=369)** So let's go and make sure that we don't have that.
>
> **[6:11](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=371)** So, initStore has been basically declare twice.
>
> **[6:15](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=375)** Let's go into our index.
>
> **[6:18](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=378)** And as you can see we have the store initialized twice.
>
> **[6:21](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=381)** So, what I'm going to do is simply remove this one here.
>
> **[6:24](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=384)** That's a little mistake on my part.
>
> **[6:27](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=387)** So let's save that and it's compiling and let's go back to that page.
>
> **[6:32](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=392)** And now everything is working as it should.
>
> **[6:35](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=395)** So we have our cards, everything is good here and we're good to go.
>
> **[6:40](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=400)** So as you can see, it's fairly simple to implement Redox with Next JS and React.
>
> **[6:46](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=406)** So this is a fairly simple implementation.
>
> **[6:48](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=408)** But as your application grows, you can split your actions, reducers and main store into their respective files.
>
> **[6:55](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-redux-reducers?u=76281980&t=415)** And also split them further by type, but in principle, it's the same approach.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), case. (6), function (5), pass (5), case, (3)
> **CLI Commands:** make (3), npm (3)
> **Env Vars:** npm (3), api (1), json (1)
> **Definitions:** is called (2), is a  (1)
> **Cross-References:** go back to (2)
> **Tools:** terminal (2)
> **UI Navigation:** click on (1), go to (1)
> **Analogies:** for example (2)

#### Challenge: Why use Redux for SSR?
> [LinkedIn Learning](https://www.linkedin.com/learning/react-server-side-rendering-8539269/challenge-why-use-redux-for-ssr?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/challenge-why-use-redux-for-ssr?u=76281980&t=0)** (pleasant electronic music)
>
> **[0:05](https://www.linkedin.com/learning/react-server-side-rendering-8539269/challenge-why-use-redux-for-ssr?u=76281980&t=5)** - [Instructor] So before we continue, let's challenge you with a quick question.
>
> **[0:09](https://www.linkedin.com/learning/react-server-side-rendering-8539269/challenge-why-use-redux-for-ssr?u=76281980&t=9)** In this chapter, we started working with SSR and Redux, but you may still be wondering why use Redux with SSR.
>
> **[0:18](https://www.linkedin.com/learning/react-server-side-rendering-8539269/challenge-why-use-redux-for-ssr?u=76281980&t=18)** So think about what you would answer, and when you're ready, watch the solution video.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (1), let (1)
> **Env Vars:** ssr (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (pleasant electronic music) (1)

#### Solution: Why use Redux for SSR?
> [LinkedIn Learning](https://www.linkedin.com/learning/react-server-side-rendering-8539269/solution-why-use-redux-for-ssr?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/react-server-side-rendering-8539269/solution-why-use-redux-for-ssr?u=76281980&t=5)** - Okay so let's explore what are the main reasons to add Redux with SSR?
>
> **[0:10](https://www.linkedin.com/learning/react-server-side-rendering-8539269/solution-why-use-redux-for-ssr?u=76281980&t=10)** For starters, when you get to a point where you need or want to leverage SSR for rendering your application or website at the server level you'll need to have a centralized state management solution.
>
> **[0:22](https://www.linkedin.com/learning/react-server-side-rendering-8539269/solution-why-use-redux-for-ssr?u=76281980&t=22)** So your state isn't all over your child components.
>
> **[0:25](https://www.linkedin.com/learning/react-server-side-rendering-8539269/solution-why-use-redux-for-ssr?u=76281980&t=25)** Redux is one of them.
>
> **[0:27](https://www.linkedin.com/learning/react-server-side-rendering-8539269/solution-why-use-redux-for-ssr?u=76281980&t=27)** Also and especially if you use React I would lean towards leveraging Redux as it has been battle tested through many popular sites, such as Facebook.
>
> **[0:37](https://www.linkedin.com/learning/react-server-side-rendering-8539269/solution-why-use-redux-for-ssr?u=76281980&t=37)** So the combination of React, SSR with next JS and Redux is great for managing your performance and your state of large applications.

> [!info]- Semantic Content
>
> **Env Vars:** ssr (3)
> **Code Keywords:** let (1)
> **Analogies:** such as (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - okay (1)


### 3. Server-Side Rendering with Node

> [↑ Back to Table of Contents](#table-of-contents)

#### Create initial Express or Next.js server
> [LinkedIn Learning](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=0)** - In many cases, you might already have an Express web server running.
>
> **[0:04](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=4)** Or would like to get a bit more control over the routes.
>
> **[0:07](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=7)** While you can bill an Express server with Next JS and still do SSR with the power of the two libraries.
>
> **[0:13](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=13)** So let's work on this.
>
> **[0:15](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=15)** So, I went back to the file as they were just before we added Redux into our project.
>
> **[0:21](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=21)** And if you're not sure which exercise files to use.
>
> **[0:25](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=25)** You can go into the exercise files and then look into zero three chapter zero three zero one.
>
> **[0:34](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=34)** And look at the beginning and copy those files into the SSR folder.
>
> **[0:39](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=39)** And this is what it should look like for your index.
>
> **[0:44](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=44)** So right now we should have our return statement just returning the cards and so on and so forth.
>
> **[0:51](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=51)** So let's go ahead and work on that project so we can make Next JS and Express work together.
>
> **[0:59](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=59)** So the first thing we're going to do is go into the terminal.
>
> **[1:01](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=61)** So let's go ahead and open a new terminal so you can do new terminal or control graphic.
>
> **[1:06](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=66)** And we're going to install Express.
>
> **[1:08](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=68)** So NPM I or install Express.
>
> **[1:14](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=74)** Then in the MPM start script inside of our package .JSON file.
>
> **[1:19](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=79)** Instead of doing Next start.
>
> **[1:22](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=82)** What we're going to do is do node server.JS.
>
> **[1:28](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=88)** And that's going to be the file we're going to use and create momentarily.
>
> **[1:31](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=91)** And basically when we call start it's going to run this server file here with Next JS.
>
> **[1:39](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=99)** So let's go ahead and save that we can close that.
>
> **[1:43](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=103)** So now we're going to work into this brand new file.
>
> **[1:45](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=105)** So what I'm going to do is create a new file and call it server.JS.
>
> **[1:51](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=111)** And you want to make sure this file is outside of pages.
>
> **[1:55](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=115)** Outside of public at the root of your directory.
>
> **[1:59](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=119)** Because if you put it in pages like I mentioned before it's going to treat it as a component and therefore give you an error.
>
> **[2:06](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=126)** So let's go ahead and work on our initial servers.
>
> **[2:09](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=129)** So, this is your typical Express servers.
>
> **[2:12](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=132)** So let's go ahead and do const Express.
>
> **[2:17](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=137)** And then required Express.
>
> **[2:23](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=143)** Then we're going to require Next as well.
>
> **[2:28](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=148)** And this is where we start implementing Next into our server.
>
> **[2:34](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=154)** Next.
>
> **[2:37](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=157)** And then we're going to typical Express stuff.
>
> **[2:40](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=160)** So the port.
>
> **[2:42](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=162)** I'm going to use 3000 on this one.
>
> **[2:45](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=165)** Going to create a variable call dev.
>
> **[2:49](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=169)** Which will have a variable for the node environment.
>
> **[2:59](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=179)** So it's dev or production.
>
> **[3:03](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=183)** But in this case we're going to use dev.
>
> **[3:05](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=185)** But still you want to have that.
>
> **[3:07](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=187)** And then we're going to create the app.
>
> **[3:11](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=191)** And then instead of using Express we're going to use Next.
>
> **[3:16](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=196)** And then pass our dev process that we just created inside of Next.
>
> **[3:24](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=204)** So now it basically knows that we're using a development environment.
>
> **[3:28](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=208)** So you could change this to production if you want.
>
> **[3:33](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=213)** And then we're going to create a get request handler.
>
> **[3:43](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=223)** And now we're going to start using the app environment or our server.
>
> **[3:49](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=229)** Prepare our server.
>
> **[3:59](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=239)** Then execute these things.
>
> **[4:03](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=243)** So once your server is ready.
>
> **[4:07](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=247)** You're going to create a server with Express.
>
> **[4:10](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=250)** So basically this is the process that Next JS does.
>
> **[4:15](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=255)** And then, once we've prepared our files.
>
> **[4:19](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=259)** So once they are built, then create the Express server.
>
> **[4:26](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=266)** And then the typical Express stuff.
>
> **[4:29](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=269)** So listen to port.
>
> **[4:33](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=273)** If there's an error please send me the error.
>
> **[4:48](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=288)** And then into the console log, we're going to add the message ready on HTTP,
>
> **[4:59](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=299)** local host.
>
> **[5:02](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=302)** And then we're going to pass the port that we created in your variable port.
>
> **[5:10](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=310)** Like so.
>
> **[5:21](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=321)** Perfect.
>
> **[5:22](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=322)** Well, now we have our initial server.
>
> **[5:24](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=324)** So let's go ahead and start it.
>
> **[5:28](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=328)** So I'm going to do NPM run build, like we've done before.
>
> **[5:37](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=337)** And then NPM start.
>
> **[5:42](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=342)** And I just made a typo here.
>
> **[5:44](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=344)** So let's make sure I correct that.
>
> **[5:47](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=347)** Save and NPM start again.
>
> **[5:54](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=354)** So now as you can see, we have compiled successfully and are ready to run our server.
>
> **[6:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=360)** So we got our Express and Next JS server running.
>
> **[6:03](https://www.linkedin.com/learning/react-server-side-rendering-8539269/create-initial-express-or-next-js-server?u=76281980&t=363)** Let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), pass (2), this. (1), public (1), const (1)
> **CLI Commands:** npm (4), make (3), node (2)
> **Env Vars:** npm (4), ssr (2), mpm (1), json (1), http (1)
> **Tools:** terminal (3)
> **File Paths:** server.js (2)
> **Exercise Files:** exercise files (2)
> **Prerequisites:** install (2)
> **Speakers:** - in (1)

#### Add the Express routes
> [LinkedIn Learning](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-the-express-routes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-the-express-routes?u=76281980&t=0)** - [Instructor] Okay, so right now our server is running okay.
>
> **[0:04](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-the-express-routes?u=76281980&t=4)** But if you load it into the browser, it says cannot get.
>
> **[0:08](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-the-express-routes?u=76281980&t=8)** This is because we don't have an express met calling a route.
>
> **[0:12](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-the-express-routes?u=76281980&t=12)** So let's work on that.
>
> **[0:13](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-the-express-routes?u=76281980&t=13)** So I'm going to go back into visuals studio code and we can close the terminal.
>
> **[0:22](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-the-express-routes?u=76281980&t=22)** And what I'm going to do next is go into the app.prepare method, our function and just go ahead and add some routes.
>
> **[0:32](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-the-express-routes?u=76281980&t=32)** So what we're going to do is go ahead and do server.get which is the function that we need to get a route.
>
> **[0:41](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-the-express-routes?u=76281980&t=41)** And then we're going to call this route page two and you have the typical syntax for express.
>
> **[0:52](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-the-express-routes?u=76281980&t=52)** So request response.
>
> **[0:56](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-the-express-routes?u=76281980&t=56)** This is a function.
>
> **[0:58](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-the-express-routes?u=76281980&t=58)** So what are we going to return when we call in page two is we're going to render page two.
>
> **[1:11](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-the-express-routes?u=76281980&t=71)** So we're going to create a page for that route shortly.
>
> **[1:15](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-the-express-routes?u=76281980&t=75)** So let's go ahead and get to the next one.
>
> **[1:18](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-the-express-routes?u=76281980&t=78)** So what I'm going to do is basically copy those three lines and then paste them again.
>
> **[1:25](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-the-express-routes?u=76281980&t=85)** And then for the next one it's going to be page three and not page three this one that we're going to call it.
>
> **[1:32](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-the-express-routes?u=76281980&t=92)** Oh yeah.
>
> **[1:36](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-the-express-routes?u=76281980&t=96)** Just to make some changes and then we need to have a default route.
>
> **[1:41](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-the-express-routes?u=76281980&t=101)** So for this one, we're going to do again, another paste and this is going to be a star like so and this is when we're going to use the handle that we've created.
>
> **[1:58](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-the-express-routes?u=76281980&t=118)** Quest response.
>
> **[2:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-the-express-routes?u=76281980&t=120)** Okay, so now we have our main routes.
>
> **[2:03](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-the-express-routes?u=76281980&t=123)** So we have a page two or page three and our main route.
>
> **[2:06](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-the-express-routes?u=76281980&t=126)** So let's go ahead and save all this.
>
> **[2:09](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-the-express-routes?u=76281980&t=129)** We're not going to be able to call page two or page three right now, because we don't have those pages created but we're going to do that next but before we can actually go and test our server so let's make sure it's running.
>
> **[2:22](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-the-express-routes?u=76281980&t=142)** So it is running.
>
> **[2:23](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-the-express-routes?u=76281980&t=143)** And just to make sure what I'm going to do is have it run in again.
>
> **[2:27](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-the-express-routes?u=76281980&t=147)** So MPM start.
>
> **[2:32](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-the-express-routes?u=76281980&t=152)** And then I'm going to go back to my browser and refresh it.
>
> **[2:35](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-the-express-routes?u=76281980&t=155)** And now we have our page because now our routes have been created for that.
>
> **[2:40](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-the-express-routes?u=76281980&t=160)** So right now we have the main route, which is this page but we don't have the other routes.
>
> **[2:44](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-the-express-routes?u=76281980&t=164)** So if I call in page two, this page could not be found.
>
> **[2:50](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-the-express-routes?u=76281980&t=170)** So right now we have the express server running with Next.js, And we have our routes.
>
> **[2:55](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-the-express-routes?u=76281980&t=175)** So let's move on so we can finish this.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (3), this. (2)
> **CLI Commands:** make (3)
> **File Paths:** next.js (1)
> **Env Vars:** mpm (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Add links and pages with Express or Next.js
> [LinkedIn Learning](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-links-and-pages-with-express-or-next-js?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-links-and-pages-with-express-or-next-js?u=76281980&t=0)** - [Instructor] So now that we have our route to call, we need to create the page in question or the pages in question.
>
> **[0:07](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-links-and-pages-with-express-or-next-js?u=76281980&t=7)** And while we're at it, a link we can click to get to one of them.
>
> **[0:10](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-links-and-pages-with-express-or-next-js?u=76281980&t=10)** So let's go ahead and do that.
>
> **[0:12](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-links-and-pages-with-express-or-next-js?u=76281980&t=12)** So I'm going to switch back to Visual Studio Code, and I'm going to close the server.js file because we're done with that one.
>
> **[0:20](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-links-and-pages-with-express-or-next-js?u=76281980&t=20)** And now we need to create the pages inside of the pages folder.
>
> **[0:23](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-links-and-pages-with-express-or-next-js?u=76281980&t=23)** So the first one I'm going to do is the Ohyeah.
>
> **[0:27](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-links-and-pages-with-express-or-next-js?u=76281980&t=27)** So let's go inside of the folder Ohyeah, and then create a new file, which I'm going to call, ohyeah.js, and then I'm going to simply create a function that will return one HTML tag to create one page, that's it.
>
> **[0:46](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-links-and-pages-with-express-or-next-js?u=76281980&t=46)** So let's go ahead and do ohyeah, which is the function that will return, an h1, I'm page 3 trapped inside of OH YEAH,
>
> **[1:10](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-links-and-pages-with-express-or-next-js?u=76281980&t=70)** and that's my page.
>
> **[1:13](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-links-and-pages-with-express-or-next-js?u=76281980&t=73)** And all we need to do now is export it.
>
> **[1:17](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-links-and-pages-with-express-or-next-js?u=76281980&t=77)** And what I'm going to do now is copy all that code so I can create another page, and I'm going to go to the pages folder again and click a new page and this is going to be page2.js, and I'm going to simply paste this here, and I'm going to call this page2, I'm option clicking on both ohyeah, and doing page 2.
>
> **[1:49](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-links-and-pages-with-express-or-next-js?u=76281980&t=109)** And I'm going to do, I'm page 2, and save it.
>
> **[1:57](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-links-and-pages-with-express-or-next-js?u=76281980&t=117)** And now I have my brand new pages.
>
> **[1:59](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-links-and-pages-with-express-or-next-js?u=76281980&t=119)** And all I have to do at this point is update the index to be able to click and get to one of these pages.
>
> **[2:04](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-links-and-pages-with-express-or-next-js?u=76281980&t=124)** So let's go ahead and go to our index, and I'm going to create a link, so basically here where I have the image, I'm going to remove that and create my link here actually wrap the link around the image.
>
> **[2:21](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-links-and-pages-with-express-or-next-js?u=76281980&t=141)** So let's create a link tag, which you need to import as well because this is part of next.
>
> **[2:31](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-links-and-pages-with-express-or-next-js?u=76281980&t=151)** So what I'm going to do is import it first, Link, this is a component that comes from next, next/link.
>
> **[2:46](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-links-and-pages-with-express-or-next-js?u=76281980&t=166)** And then let's use it here, href.
>
> **[2:51](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-links-and-pages-with-express-or-next-js?u=76281980&t=171)** So now what you need to do is add the route that we created inside of our server.
>
> **[2:56](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-links-and-pages-with-express-or-next-js?u=76281980&t=176)** So if we go back to the server.js file, we have these routes that we can use.
>
> **[3:01](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-links-and-pages-with-express-or-next-js?u=76281980&t=181)** We have page3, page2.
>
> **[3:04](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-links-and-pages-with-express-or-next-js?u=76281980&t=184)** So let's go ahead and use one of them.
>
> **[3:05](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-links-and-pages-with-express-or-next-js?u=76281980&t=185)** So what I'm going to do is go to, let's go to our ohyeah page, so page three.
>
> **[3:12](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-links-and-pages-with-express-or-next-js?u=76281980&t=192)** So let's go ahead and use that link, /page3, and now what we need to do is make sure that the tag is below the image, like so.
>
> **[3:35](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-links-and-pages-with-express-or-next-js?u=76281980&t=215)** So now we wrap the link around the image.
>
> **[3:38](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-links-and-pages-with-express-or-next-js?u=76281980&t=218)** So once we save this we're going to be able to go to page3 from the link, so basically the image that we have.
>
> **[3:46](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-links-and-pages-with-express-or-next-js?u=76281980&t=226)** So let's go and save this.
>
> **[3:48](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-links-and-pages-with-express-or-next-js?u=76281980&t=228)** And now let's go back to our server, it seems to have been compiled already.
>
> **[3:55](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-links-and-pages-with-express-or-next-js?u=76281980&t=235)** So let's go to our browser and I'm going to refresh just to be sure.
>
> **[4:01](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-links-and-pages-with-express-or-next-js?u=76281980&t=241)** And now click here and I get to page three.
>
> **[4:06](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-links-and-pages-with-express-or-next-js?u=76281980&t=246)** So this is from the image here, so the h+sport, if I click on it, I get to that page here.
>
> **[4:12](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-links-and-pages-with-express-or-next-js?u=76281980&t=252)** Or if I manually enter page two, I'm going to go to page two.
>
> **[4:18](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-links-and-pages-with-express-or-next-js?u=76281980&t=258)** So these are the two pages that we just created.
>
> **[4:21](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-links-and-pages-with-express-or-next-js?u=76281980&t=261)** We created basically the routes for it and now we just created a link.
>
> **[4:27](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-links-and-pages-with-express-or-next-js?u=76281980&t=267)** So as you can see, using Express with next,js, allows us to fully customize the routes and get all the benefits of Express with next.js, a win win win and win.
>
> **[4:39](https://www.linkedin.com/learning/react-server-side-rendering-8539269/add-links-and-pages-with-express-or-next-js?u=76281980&t=279)** Let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), function (2), switch (1), return, (1), this. (1)
> **UI Navigation:** go to (7), click on (1)
> **File Paths:** server.js (2), ohyeah.js (1), page2.js (1), next.js (1)
> **Env Vars:** html (1), yeah (1)
> **Cross-References:** go back to (2)
> **CLI Commands:** make (1)
> **Tools:** visual studio (1)
> **Definitions:** is a  (1)

#### Challenge: Why use Node or Express for SSR?
> [LinkedIn Learning](https://www.linkedin.com/learning/react-server-side-rendering-8539269/challenge-why-use-node-or-express-for-ssr?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/challenge-why-use-node-or-express-for-ssr?u=76281980&t=0)** (lively music)
>
> **[0:05](https://www.linkedin.com/learning/react-server-side-rendering-8539269/challenge-why-use-node-or-express-for-ssr?u=76281980&t=5)** - [Instructor] So before we continue, let's challenge you with a quick question.
>
> **[0:10](https://www.linkedin.com/learning/react-server-side-rendering-8539269/challenge-why-use-node-or-express-for-ssr?u=76281980&t=10)** In this chapter, we've worked with Express and Next.js.
>
> **[0:14](https://www.linkedin.com/learning/react-server-side-rendering-8539269/challenge-why-use-node-or-express-for-ssr?u=76281980&t=14)** So looking at what we've done in this chapter, why would you use Express with Next.js?
>
> **[0:21](https://www.linkedin.com/learning/react-server-side-rendering-8539269/challenge-why-use-node-or-express-for-ssr?u=76281980&t=21)** So think about what you would answer, and when you're ready, watch the solution video.

> [!info]- Semantic Content
>
> **File Paths:** next.js (2)
> **Code Keywords:** continue (1), let (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (lively music) (1)

#### Solution: Why use Node or Express for SSR?
> [LinkedIn Learning](https://www.linkedin.com/learning/react-server-side-rendering-8539269/solution-why-use-node-or-express-for-ssr?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/solution-why-use-node-or-express-for-ssr?u=76281980&t=0)** - [Narrator] Think about this scenario, you've been using Express for all your server needs and its benefits such as routes, HTTP helpers, such as caching, et cetera.
>
> **[0:16](https://www.linkedin.com/learning/react-server-side-rendering-8539269/solution-why-use-node-or-express-for-ssr?u=76281980&t=16)** And you want to use React and would like to have SSR capabilities on top, well, this is a prime reason why, you would use these together.
>
> **[0:24](https://www.linkedin.com/learning/react-server-side-rendering-8539269/solution-why-use-node-or-express-for-ssr?u=76281980&t=24)** So, in short, if you're well versed in React and want to add these extra functions from Express and SSR features, as we demonstrated in this chapter with Next.js, it is possible and definitely a great addition to your tool set.
>
> **[0:38](https://www.linkedin.com/learning/react-server-side-rendering-8539269/solution-why-use-node-or-express-for-ssr?u=76281980&t=38)** And you can also add Redux, if you'd like to, a winning combination.

> [!info]- Semantic Content
>
> **Env Vars:** ssr (2), http (1)
> **Analogies:** such as (2)
> **File Paths:** next.js (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Code Splitting

> [↑ Back to Table of Contents](#table-of-contents)

#### Code splitting in Next.js
> [LinkedIn Learning](https://www.linkedin.com/learning/react-server-side-rendering-8539269/code-splitting-in-next-js?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/code-splitting-in-next-js?u=76281980&t=0)** - [Instructor] So you may be wondering, what is this code splitting thing that you heard about, and what are the benefits, and how does a library like Next.js support that?
>
> **[0:09](https://www.linkedin.com/learning/react-server-side-rendering-8539269/code-splitting-in-next-js?u=76281980&t=9)** So code splitting, in a nutshell, is the ability to split your code in smaller bundles so the application can load faster when rendered.
>
> **[0:18](https://www.linkedin.com/learning/react-server-side-rendering-8539269/code-splitting-in-next-js?u=76281980&t=18)** It's all about speed.
>
> **[0:20](https://www.linkedin.com/learning/react-server-side-rendering-8539269/code-splitting-in-next-js?u=76281980&t=20)** Normally, with some libraries, you'd have to be explicit about which part of your application you want to be bundled together.
>
> **[0:28](https://www.linkedin.com/learning/react-server-side-rendering-8539269/code-splitting-in-next-js?u=76281980&t=28)** But with Next.js, that's not the case.
>
> **[0:30](https://www.linkedin.com/learning/react-server-side-rendering-8539269/code-splitting-in-next-js?u=76281980&t=30)** It comes with code splitting out of the box, and it's pretty intelligent about deciding which part of your code should be split.
>
> **[0:37](https://www.linkedin.com/learning/react-server-side-rendering-8539269/code-splitting-in-next-js?u=76281980&t=37)** Off the shelf, Next.js splits your code into components, or whatever is in your page's directory and its' imports.
>
> **[0:46](https://www.linkedin.com/learning/react-server-side-rendering-8539269/code-splitting-in-next-js?u=76281980&t=46)** So for example, if you have a page component that imports a CSS file, a dependency, then it will bundle all these three together into its own bundle.
>
> **[0:56](https://www.linkedin.com/learning/react-server-side-rendering-8539269/code-splitting-in-next-js?u=76281980&t=56)** There are also advanced features, like Dynamic imports and Dynamic React components, which basically allows you to delay or load specific features on demand and maintain full control of your application load times.
>
> **[1:09](https://www.linkedin.com/learning/react-server-side-rendering-8539269/code-splitting-in-next-js?u=76281980&t=69)** But this is a bit beyond the scope of this course.
>
> **[1:12](https://www.linkedin.com/learning/react-server-side-rendering-8539269/code-splitting-in-next-js?u=76281980&t=72)** So I'd suggest you take a look at these features on Next.js' documentation.
>
> **[1:17](https://www.linkedin.com/learning/react-server-side-rendering-8539269/code-splitting-in-next-js?u=76281980&t=77)** So if you decide to do nothing, you don't have to worry about code splitting.
>
> **[1:21](https://www.linkedin.com/learning/react-server-side-rendering-8539269/code-splitting-in-next-js?u=76281980&t=81)** As mentioned before, Next.js does it automatically for you.

> [!info]- Semantic Content
>
> **File Paths:** next.js (5)
> **Code Keywords:** case. (1)
> **Env Vars:** css (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Other tools available for code splitting
> [LinkedIn Learning](https://www.linkedin.com/learning/react-server-side-rendering-8539269/other-tools-available-for-code-splitting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/other-tools-available-for-code-splitting?u=76281980&t=0)** - [Instructor] Code splitting is built in as part of Next.js, and if you're curious about the advanced features related to code splitting, such as Dynamic imports, feel free to explore this page.
>
> **[0:11](https://www.linkedin.com/learning/react-server-side-rendering-8539269/other-tools-available-for-code-splitting?u=76281980&t=11)** For example, Dynamic imports is a great way to lazy load your application, which basically means it loads the components as the user scrolls through the page.
>
> **[0:21](https://www.linkedin.com/learning/react-server-side-rendering-8539269/other-tools-available-for-code-splitting?u=76281980&t=21)** You have other tools that can improve performance, like AMP Support and Static HTML Support.
>
> **[0:28](https://www.linkedin.com/learning/react-server-side-rendering-8539269/other-tools-available-for-code-splitting?u=76281980&t=28)** I would strongly suggest you browse through these subjects to see what fits your needs.
>
> **[0:34](https://www.linkedin.com/learning/react-server-side-rendering-8539269/other-tools-available-for-code-splitting?u=76281980&t=34)** And if you build an application that doesn't use Next.js and still would like to leverage code splitting and other tools like Next.js, take a look at Webpack, which is the tool used behind the scene by Next.js.
>
> **[0:47](https://www.linkedin.com/learning/react-server-side-rendering-8539269/other-tools-available-for-code-splitting?u=76281980&t=47)** So you can pretty much leverage Webpack to do bundling and adding functions to performance purposes without doing SSR.
>
> **[0:54](https://www.linkedin.com/learning/react-server-side-rendering-8539269/other-tools-available-for-code-splitting?u=76281980&t=54)** And finally, if you're not a fan of Webpack, the alternative is Browserify, which, with the addition of Gulp or Grunt and a few plugins, can pretty much do a lot of what Webpack has to offer in a simpler to learn package.
>
> **[1:10](https://www.linkedin.com/learning/react-server-side-rendering-8539269/other-tools-available-for-code-splitting?u=76281980&t=70)** However, the minus is that you're relying on plugins being updated along with the other tools.
>
> **[1:16](https://www.linkedin.com/learning/react-server-side-rendering-8539269/other-tools-available-for-code-splitting?u=76281980&t=76)** A lot of dependencies to manage.
>
> **[1:18](https://www.linkedin.com/learning/react-server-side-rendering-8539269/other-tools-available-for-code-splitting?u=76281980&t=78)** So if you prefer one package, but are ready for the learning curve, then definitely go for Webpack, or Next.js if you want SSR.

> [!info]- Semantic Content
>
> **File Paths:** next.js (5)
> **Env Vars:** ssr (2), amp (1), html (1)
> **Code Keywords:** static (1), finally, (1)
> **Definitions:** is a  (1), basically means (1)
> **Analogies:** such as (1), for example (1)
> **Speakers:** - [instructor] (1)

#### Challenge: What is the purpose of code splitting?
> [LinkedIn Learning](https://www.linkedin.com/learning/react-server-side-rendering-8539269/challenge-what-is-the-purpose-of-code-splitting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/challenge-what-is-the-purpose-of-code-splitting?u=76281980&t=0)** (pleasant electronic music)
>
> **[0:05](https://www.linkedin.com/learning/react-server-side-rendering-8539269/challenge-what-is-the-purpose-of-code-splitting?u=76281980&t=5)** - [Instructor] So before we continue, let's challenge you with a quick question.
>
> **[0:09](https://www.linkedin.com/learning/react-server-side-rendering-8539269/challenge-what-is-the-purpose-of-code-splitting?u=76281980&t=9)** In this chapter, we've looked into code splitting, but what is the purpose of code splitting?
>
> **[0:15](https://www.linkedin.com/learning/react-server-side-rendering-8539269/challenge-what-is-the-purpose-of-code-splitting?u=76281980&t=15)** Think about what you would answer and, when you're ready, watch the solution video.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (1), let (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (pleasant electronic music) (1)

#### Solution: What is the purpose of code splitting?
> [LinkedIn Learning](https://www.linkedin.com/learning/react-server-side-rendering-8539269/solution-what-is-the-purpose-of-code-splitting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/solution-what-is-the-purpose-of-code-splitting?u=76281980&t=0)** - You typically start using tools like Next.js and code splitting when your application scales to a point where you're trying to find ways to improve loading and performance.
>
> **[0:15](https://www.linkedin.com/learning/react-server-side-rendering-8539269/solution-what-is-the-purpose-of-code-splitting?u=76281980&t=15)** And that is exactly the purpose of code splitting.
>
> **[0:18](https://www.linkedin.com/learning/react-server-side-rendering-8539269/solution-what-is-the-purpose-of-code-splitting?u=76281980&t=18)** It splits your code into various bundles and components to be loaded as needed, preventing your application from loading as one big chunk of code.
>
> **[0:28](https://www.linkedin.com/learning/react-server-side-rendering-8539269/solution-what-is-the-purpose-of-code-splitting?u=76281980&t=28)** This way, let's say you only need a specific section of the application loaded, only this section and not the entire list of components is rendered.

> [!info]- Semantic Content
>
> **File Paths:** next.js (1)
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
> **Speakers:** - you (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### React Router with SSR
> [LinkedIn Learning](https://www.linkedin.com/learning/react-server-side-rendering-8539269/react-router-with-ssr?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/react-router-with-ssr?u=76281980&t=0)** - [Instructor] Let's talk about how to integrate React Router into your SSR project.
>
> **[0:05](https://www.linkedin.com/learning/react-server-side-rendering-8539269/react-router-with-ssr?u=76281980&t=5)** React Router is the standard for routing in React apps.
>
> **[0:09](https://www.linkedin.com/learning/react-server-side-rendering-8539269/react-router-with-ssr?u=76281980&t=9)** It enables us to define different pages within our SPA without the need for full page refreshes.
>
> **[0:16](https://www.linkedin.com/learning/react-server-side-rendering-8539269/react-router-with-ssr?u=76281980&t=16)** This keeps our user interface fast and fluid, just what we need for a modern web experience.
>
> **[0:22](https://www.linkedin.com/learning/react-server-side-rendering-8539269/react-router-with-ssr?u=76281980&t=22)** So how do you transition into React Router?
>
> **[0:25](https://www.linkedin.com/learning/react-server-side-rendering-8539269/react-router-with-ssr?u=76281980&t=25)** The first thing you need to do in your SPA project or the SSR project that we've been working on is npm install react-router, done, like so, and you install this into your packages.
>
> **[0:41](https://www.linkedin.com/learning/react-server-side-rendering-8539269/react-router-with-ssr?u=76281980&t=41)** And then what you need to do is define the Routes.
>
> **[0:44](https://www.linkedin.com/learning/react-server-side-rendering-8539269/react-router-with-ssr?u=76281980&t=44)** So this is the Routes.js file that you would add into your project.
>
> **[0:49](https://www.linkedin.com/learning/react-server-side-rendering-8539269/react-router-with-ssr?u=76281980&t=49)** So the first thing you do, you import Route and Routes from react-Router-dom, and then you import the components that you want to use for your Routes.
>
> **[0:59](https://www.linkedin.com/learning/react-server-side-rendering-8539269/react-router-with-ssr?u=76281980&t=59)** And then you define the Routes here.
>
> **[1:02](https://www.linkedin.com/learning/react-server-side-rendering-8539269/react-router-with-ssr?u=76281980&t=62)** So you need to use the Routes component and then the Route, and then define the path for that Route.
>
> **[1:09](https://www.linkedin.com/learning/react-server-side-rendering-8539269/react-router-with-ssr?u=76281980&t=69)** So let's say forward slash is home, then you would say forward slash here for the path, and then the component is home for the element as the prop.
>
> **[1:19](https://www.linkedin.com/learning/react-server-side-rendering-8539269/react-router-with-ssr?u=76281980&t=79)** And then you continue working on these the same way, so about for About, and then for any other path, NotFound.
>
> **[1:28](https://www.linkedin.com/learning/react-server-side-rendering-8539269/react-router-with-ssr?u=76281980&t=88)** Once you define your Routes you need to load them into the server.
>
> **[1:32](https://www.linkedin.com/learning/react-server-side-rendering-8539269/react-router-with-ssr?u=76281980&t=92)** So now we go to the server, so SSR, and you do all the initial implementations.
>
> **[1:41](https://www.linkedin.com/learning/react-server-side-rendering-8539269/react-router-with-ssr?u=76281980&t=101)** And then what you need to do is implement your routes into the server so you import the routes that we just created and you also import StaticRouter from react-router-dom/server.
>
> **[1:55](https://www.linkedin.com/learning/react-server-side-rendering-8539269/react-router-with-ssr?u=76281980&t=115)** And then here in your DOMserver, what you do is you import StaticRouter and then the location is the req.url and then the context.
>
> **[2:08](https://www.linkedin.com/learning/react-server-side-rendering-8539269/react-router-with-ssr?u=76281980&t=128)** And then you put your routes inside of StaticRouter as such.
>
> **[2:12](https://www.linkedin.com/learning/react-server-side-rendering-8539269/react-router-with-ssr?u=76281980&t=132)** And that everything else is the same as your usual SSR.
>
> **[2:16](https://www.linkedin.com/learning/react-server-side-rendering-8539269/react-router-with-ssr?u=76281980&t=136)** Now in the client, what you need to do is basically pass BrowserRouter from react-router-dom and port your routes and then place them here and then everything else would be the same.
>
> **[2:32](https://www.linkedin.com/learning/react-server-side-rendering-8539269/react-router-with-ssr?u=76281980&t=152)** And that's how you upgrade to an SSR project with React Router, simple changes, big improvements.
>
> **[2:39](https://www.linkedin.com/learning/react-server-side-rendering-8539269/react-router-with-ssr?u=76281980&t=159)** Your app now has a solid foundation for growth and scalability with a routing system that's ready for complexity.

> [!info]- Semantic Content
>
> **Env Vars:** ssr (5), spa (2)
> **Code Keywords:** let (2), interface (1), continue (1), pass (1)
> **Prerequisites:** install (2)
> **File Paths:** routes.js (1)
> **CLI Commands:** npm (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/react-server-side-rendering-8539269/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-server-side-rendering-8539269/next-steps?u=76281980&t=0)** - [Instructor] In this course, we briefly touched the possibilities of SSR, but gave you enough to understand its core and explore further on larger projects.
>
> **[0:10](https://www.linkedin.com/learning/react-server-side-rendering-8539269/next-steps?u=76281980&t=10)** You can explore a number of Next.js scenarios with example code on their GitHub repo.
>
> **[0:15](https://www.linkedin.com/learning/react-server-side-rendering-8539269/next-steps?u=76281980&t=15)** So I would strongly suggest you take a look at the list.
>
> **[0:18](https://www.linkedin.com/learning/react-server-side-rendering-8539269/next-steps?u=76281980&t=18)** You might find your specific need for SSR and be able to get a quick sample project going.
>
> **[0:24](https://www.linkedin.com/learning/react-server-side-rendering-8539269/next-steps?u=76281980&t=24)** Next.js with TypeScript, MobX, various styling libraries, and JS for testing are just a few examples of what you'll find in there.
>
> **[0:34](https://www.linkedin.com/learning/react-server-side-rendering-8539269/next-steps?u=76281980&t=34)** If you ever run into any issues, you can use Stack Overflow, the GitHub Issue section, and finally, take a look at their docs for further help.
>
> **[0:43](https://www.linkedin.com/learning/react-server-side-rendering-8539269/next-steps?u=76281980&t=43)** Next.js community is growing every day, and you'll quickly find an answer to your questions.
>
> **[0:49](https://www.linkedin.com/learning/react-server-side-rendering-8539269/next-steps?u=76281980&t=49)** Thanks very much for taking my course and I'll see you in a bit.

> [!info]- Semantic Content
>
> **File Paths:** next.js (3)
> **CLI Commands:** find (3)
> **Env Vars:** ssr (2)
> **Tools:** github (2)
> **Code Keywords:** finally, (1)
> **Documentation:** stack overflow (1)
> **Exercise Files:** github repo (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Emmanuel Henri]]

## Resources

- Exercise files available

## Skills Covered

- Next.js
- React.js

## Path Context

### In [[Explore React.js Development]]
← [[React- Authentication]] | **8 of 8**

## Appears In

- [[Explore React.js Development]]

## Related Courses

_Courses sharing skills:_

- [[React- Cloud-Powered Apps with Firebase]] — React.js
- [[Building a GraphQL Project with React.js]] — React.js
- [[React- Software Architecture]] — React.js
- [[React- Testing and Debugging]] — React.js
- [[React- Building Styles with CSS Modules]] — React.js

---

[↑ Back to top](#)