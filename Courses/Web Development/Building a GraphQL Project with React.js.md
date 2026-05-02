---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: building-a-graphql-project-with-react-js
url: "https://www.linkedin.com/learning/building-a-graphql-project-with-react-js"
duration_minutes: 136
duration: 2h 16m
level: Intermediate
updated: 3/10/2021
learners: 36779
skills:
  - React.js
  - GraphQL
exercise_files: true
github: "https://github.com/LinkedInLearning/react-graphql-2875095"
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQEeQnVkhv1BeA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1615224399373?e=2147483647&amp;v=beta&amp;t=omfC7AlJchzaaonrEuBif0RWx3OFHrvZ5ReLmn-grlQ"
linkedin_topic: Web Development
learning_paths:
  - '[[Improve Your React Skills]]'
prev_courses:
  - '[[React- Software Architecture]]'
next_courses:
  - '[[React- Cloud-Powered Apps with Firebase]]'
path_nav: '[{"path":"Improve Your React Skills","position":8,"total":9,"prev":"React- Software Architecture","next":"React- Cloud-Powered Apps with Firebase"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/react-js
  - skill/graphql
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Building%20a%20GraphQL%20Project%20with%20React.js.md)

![Building a GraphQL Project with React.js](https://media.licdn.com/dms/image/v2/C4E0DAQEeQnVkhv1BeA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1615224399373?e=2147483647&amp;v=beta&amp;t=omfC7AlJchzaaonrEuBif0RWx3OFHrvZ5ReLmn-grlQ)

# Building a GraphQL Project with React.js

> Are you a web developer creating apps? GraphQL gives you a clean way to query complex server data efficiently, and React makes it easy to present that information as a web application in the browser. In this course, instructor Ray Villalobos teaches you how to assemble these parts, using the familiar structure of GitHub as a source for information. Ray first walks you through installing React, inc

> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js) | 2h 16m | Intermediate | 37K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Why use React with GraphQL for projects?](#why-use-react-with-graphql-for-projects)
  - [Using the exercises for this course](#using-the-exercises-for-this-course)
- [**1. Getting Started**](#1-getting-started) (3 videos)
  - [Installing requirements](#installing-requirements)
  - [Analyzing the React installation](#analyzing-the-react-installation)
  - [Customizing and adding modules](#customizing-and-adding-modules)
- [**2. GitHub's GraphQL Schema**](#2-githubs-graphql-schema) (3 videos)
  - [Exploring GraphQL](#exploring-graphql)
  - [Building queries](#building-queries)
  - [GitHub authentication tokens](#github-authentication-tokens)
- [**3. Working with GraphQL Data**](#3-working-with-graphql-data) (4 videos)
  - [Retrieving data](#retrieving-data)
  - [Generating state](#generating-state)
  - [Creating a query component](#creating-a-query-component)
  - [Using the Callback hook](#using-the-callback-hook)
- [**4. Building the React App**](#4-building-the-react-app) (4 videos)
  - [Generating a list of repos](#generating-a-list-of-repos)
  - [Using search queries](#using-search-queries)
  - [Working with conditional classes](#working-with-conditional-classes)
  - [Reading license information](#reading-license-information)
- [**5. Adding Interactive Features**](#5-adding-interactive-features) (4 videos)
  - [Creating dynamic queries](#creating-dynamic-queries)
  - [Building a search component](#building-a-search-component)
  - [Setting up pagination](#setting-up-pagination)
  - [Creating the pagination interface](#creating-the-pagination-interface)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Why use React with GraphQL for projects?](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/why-use-react-with-graphql-for-projects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/why-use-react-with-graphql-for-projects?u=76281980&t=0)** - [Ray] [[GraphQL]] and [[React.js|React]] are extremely popular [[Web Development]] platforms that are highly desired by developers and employers alike.
>
> **[0:08](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/why-use-react-with-graphql-for-projects?u=76281980&t=8)** But learning how to use them can be challenging, especially if you're not practicing them in context.
>
> **[0:14](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/why-use-react-with-graphql-for-projects?u=76281980&t=14)** Hey there, this is Ray Villalobos, senior staff instructor at [[LinkedIn]], and in this course, I'm going to show you how to create a realistic application that uses [[GitHub]]'s GraphQL API to show you a searchable list of the repositories on your account.
>
> **[0:29](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/why-use-react-with-graphql-for-projects?u=76281980&t=29)** Now we'll go step-by-step through the concepts and then dive right into building the application using the latest React techniques, which include [[React Hooks]], authenticating into GitHub GraphQL, paginating and searching through GraphQL data.
>
> **[0:44](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/why-use-react-with-graphql-for-projects?u=76281980&t=44)** Now, this is a hands-on course for those who like learning by building.
>
> **[0:48](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/why-use-react-with-graphql-for-projects?u=76281980&t=48)** So if you're ready to get busy with React and GraphQL, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (5), [[React.js|React]] (3), [[GitHub]] (2), [[Web Development]] (1), [[LinkedIn]] (1)
> **Tools:** github (2)
> **Env Vars:** api (1)
> **Definitions:** is a  (1)
> **Speakers:** - [ray] (1)

#### [Using the exercises for this course](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-exercises-for-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-exercises-for-this-course?u=76281980&t=0)** - [Trainer] To get through the code for this course, simply go to [raybo.org/slides_graphqlreact](https://raybo.org/slides_graphqlreact).
>
> **[0:08](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-exercises-for-this-course?u=76281980&t=8)** This will take you to a slideshow with all the links you'll need for the course.
>
> **[0:12](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-exercises-for-this-course?u=76281980&t=12)** At the bottom of the slideshow, you'll find a navigation toolbar.
>
> **[0:16](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-exercises-for-this-course?u=76281980&t=16)** You can hit the T key to show or hide the toolbar.
>
> **[0:19](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-exercises-for-this-course?u=76281980&t=19)** You can also find links to the [[GitHub]] repository as well as contact information.
>
> **[0:24](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-exercises-for-this-course?u=76281980&t=24)** If you hit the M key, you'll see an index of all those slides for the course.
>
> **[0:29](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-exercises-for-this-course?u=76281980&t=29)** If you click on a slide, that slide will play on your monitor.
>
> **[0:33](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-exercises-for-this-course?u=76281980&t=33)** At the beginning of each slide, there is an overlay with a link to each of the slides.
>
> **[0:38](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-exercises-for-this-course?u=76281980&t=38)** To move through the slides, you can use the arrow keys.
>
> **[0:41](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-exercises-for-this-course?u=76281980&t=41)** You can get to a GitHub repo that has all the code for the course.
>
> **[0:47](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-exercises-for-this-course?u=76281980&t=47)** The repository is built so that there are branches for each of the videos and the course.
>
> **[0:51](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-exercises-for-this-course?u=76281980&t=51)** You can use this branch pop-up right here to switch to a specific branch and take a look at the code at that stage.
>
> **[0:58](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-exercises-for-this-course?u=76281980&t=58)** For example, the branch titled 01_02 would show you the code on chapter one and show you the second video in that chapter.
>
> **[1:06](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-exercises-for-this-course?u=76281980&t=66)** If you see a letter B at the beginning of the name, it means that's how the code look at the beginning of the video.
>
> **[1:12](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-exercises-for-this-course?u=76281980&t=72)** If you see an E at the end of the branch, that's how the code look at the end of the video.
>
> **[1:17](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-exercises-for-this-course?u=76281980&t=77)** If you want to, you can download the code by clicking the Code button and then choosing one of the options like Open with GitHub Desktop or Open with Visual Studio code.
>
> **[1:27](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-exercises-for-this-course?u=76281980&t=87)** If you're familiar with terminal commands, you can also download the repo by using the clipboard icon to copy the link.
>
> **[1:33](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-exercises-for-this-course?u=76281980&t=93)** You could also look at the code or download any of the branches by going to the branch pop-up and then using the Code button.
>
> **[1:42](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-exercises-for-this-course?u=76281980&t=102)** That way you can download the ZIP file for the specific video you want to follow along with.
>
> **[1:48](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-exercises-for-this-course?u=76281980&t=108)** We recommend that you download the main branch and issue the [[npm]] install from there.
>
> **[1:54](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-exercises-for-this-course?u=76281980&t=114)** If you need more experience working with [[Git]] and GitHub, do a search for [[Learning Git and GitHub]] in our library.
>
> **[2:00](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-exercises-for-this-course?u=76281980&t=120)** If you're comfortable with this, then let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (5), [[Git]] (2), [[npm]] (1)
> **Tools:** github (5), visual studio (1), terminal (1)
> **Exercise Files:** download the (4), github repo (1), zip file (1)
> **CLI Commands:** find (2), git (2), npm (1)
> **UI Navigation:** go to (1), click on (1), switch to (1)
> **Env Vars:** zip (1), npm (1)
> **Definitions:** is an  (1), means that (1)
> **Prerequisites:** you'll need (1), install (1)


### 1. Getting Started

[↑ Back to Table of Contents](#table-of-contents)

#### [Installing requirements](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=0)** - [Instructor] Let's take a look at what we're going to need to get going with our [[React.js|react]] project.
>
> **[0:04](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=4)** Now, there are some prerequisites that you're going to have to install before you get started.
>
> **[0:08](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=8)** First, is a copy of [[Git]].
>
> **[0:11](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=11)** Git is a [[Version Control]] system that is used to manage most web projects.
>
> **[0:16](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=16)** If you're on a PC, when you install Git, you have the option of installing an app called Git Bash which lets you use [[Linux]] commands on a PC.
>
> **[0:24](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=24)** You'll also need a copy of [[Node.js]] which is used to manage node projects.
>
> **[0:29](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=29)** And it comes with something called NPX which we will need for this project.
>
> **[0:34](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=34)** In addition to that there's a couple of tools that aren't necessarily required, but are going to make your life a lot easier.
>
> **[0:41](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=41)** First is, the react developer tools.
>
> **[0:44](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=44)** This is an extension for a Chrome browsers and it gives you a lot of capabilities in inspecting your react projects.
>
> **[0:52](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=52)** You can see a little, we have it right here.
>
> **[0:54](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=54)** It's very handy.
>
> **[0:56](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=56)** In addition to that, there's a couple of different extensions that can make your life easier, if you're using visual studio code.
>
> **[1:02](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=62)** The first is React Snippets.
>
> **[1:04](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=64)** This is a series of react snippets that's going to make your life easier and it's going to make it faster for you to type some of the code.
>
> **[1:12](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=72)** In addition to that, there is a JSX snippets that will allow you to use the language that react projects are based on a little bit easier.
>
> **[1:23](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=83)** Now to install react, we're going to need to use an application called the Create React App.
>
> **[1:30](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=90)** You can see the website right here and what it does is manage the project for you and creates a build process that is going to take care of live reloading and letting you build the project whenever you need to send it into a server.
>
> **[1:46](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=106)** Now to use this, you're going to need to do a couple of things.
>
> **[1:49](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=109)** If you have a previous version of the Create React App, you want to run this command on your terminal to make sure that you uninstall the older version of it.
>
> **[1:59](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=119)** If you've got that taken care of then you can issue commands like this to install an application on your desktop.
>
> **[2:05](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=125)** And that's what we're going to do right now.
>
> **[2:08](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=128)** I'm going to use a terminal application called hyper, you can use the Macro S terminal or Git Bash on a PC and we're going to run those commands that we just saw a minute ago.
>
> **[2:18](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=138)** First, I like to place things on the desktop.
>
> **[2:22](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=142)** You can put them on any folder on your hard drive.
>
> **[2:24](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=144)** So I'm going to issue a CD Tilda/Desktop Command and then from here, I'm going to run the npx command.
>
> **[2:32](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=152)** Now, when you run NPX it does require that you have Node.js 5.2 or higher.
>
> **[2:39](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=159)** So if you already had a copy of Node.js on your machine and this doesn't work, make sure that you update Node.js.
>
> **[2:46](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=166)** Let's go to the Node.js website and download the newer version.
>
> **[2:49](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=169)** So we'll do npx and then create-react-app like this, and then we'll give our project a name.
>
> **[2:56](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=176)** So I'm going to call this one reactgraphql.
>
> **[2:59](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=179)** You can call it whatever you want.
>
> **[3:01](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=181)** And then it's going to go through the installation process.
>
> **[3:04](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=184)** This is going to take a while.
>
> **[3:07](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=187)** So, once that's done, you can see that you can go and use a couple of these different commands to run your application.
>
> **[3:14](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=194)** First, you need to make sure that you are in the proper folder.
>
> **[3:17](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=197)** So let's do a cd reactgraphql.
>
> **[3:22](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=202)** Now we're in the right folder and we can use any of these commands right here.
>
> **[3:26](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=206)** Now I want to go ahead and open this up in my editor instead of running the [[npm]] start command from here.
>
> **[3:35](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=215)** So I'm going to open this up in visual studio code and I'll open up a terminal.
>
> **[3:39](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=219)** You can go to the menu right here and select new terminal, or you can use the shortcut that is listed right here.
>
> **[3:47](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=227)** So it's Ctrl + Tilda on a Mac and then issue the npm start command from here.
>
> **[3:54](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=234)** I'll go ahead and run the app on another port but that may not be showing up in your project.
>
> **[4:00](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=240)** And once you run that, you should see the application run.
>
> **[4:03](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=243)** Your port might be different but it should pull up in a browser.
>
> **[4:07](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=247)** And I've arranged that over here on the right hand side The README file has all of those commands when you first install it.
>
> **[4:16](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=256)** However, in this project, you may notice that we are going to end up with some different looking, read me files when this project is done.
>
> **[4:26](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=266)** We can see npm start and npm test, and if you want to create the application so that you can put it on a server by FTP net or for sale, or any other hosting company, you can run an npm run build command, and that will create an additional folder called build folder.
>
> **[4:43](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=283)** That's what would go on the server.
>
> **[4:46](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=286)** Well, there's one more thing I want to do right here before I get too far, I'm going to be creating a file that I do not want Git to track for me.
>
> **[4:56](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=296)** And that file is going to need to go in this gitignore document.
>
> **[5:00](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=300)** This document allows you to tell Git not to track certain files.
>
> **[5:06](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=306)** And the file we're going to be creating is going to be in the source folder and it's going to be called db.js.
>
> **[5:12](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=312)** So that's going to be a small change that I'm making here.
>
> **[5:15](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/installing-requirements?u=76281980&t=315)** Let's go ahead and save that and I'll go over everything that we've installed in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (10), [[Git]] (7), [[Node.js]] (5), [[npm]] (5), [[Version Control]] (1)
> **CLI Commands:** git (7), make (7), node (6), npm (5), npx (4)
> **Tools:** terminal (5), bash (2), visual studio (2)
> **File Paths:** node.js (5), db.js (1)
> **Env Vars:** npx (2), jsx (1), npm (1), readme (1), ftp (1)
> **Definitions:** is a  (4), is an  (1)
> **Prerequisites:** install (5)
> **UI Navigation:** go to (2)

#### [Analyzing the React installation](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=0)** - [Instructor] Create [[React.js|React]] App makes it easier to create a project by installing a lot of modules.
>
> **[0:05](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=5)** So let's go over what we get when we use the application.
>
> **[0:09](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=9)** Note, if you're comfortable with React installations you might want to skip over this video.
>
> **[0:14](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=14)** So here's some of the modules that you get when you use Create React App.
>
> **[0:18](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=18)** The first one is called Webpack.
>
> **[0:20](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=20)** Now Webpack is a [[JavaScript]] bundler.
>
> **[0:23](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=23)** Its main job is to manage how our applications are assembled and the loading of your different modules into an application.
>
> **[0:30](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=30)** Next up is something called Bable.
>
> **[0:33](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=33)** A Babel is a JavaScript compiler.
>
> **[0:35](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=35)** It lets you write code with the latest JavaScript features and it will convert them so that it works with older browsers.
>
> **[0:43](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=43)** Next is something called [[ESLint]].
>
> **[0:45](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=45)** ESLint is a JavaScript linter which analyzes your code against certain rules and helps you fix them.
>
> **[0:52](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=52)** And you may need to install an extension which you can find right here.
>
> **[0:58](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=58)** This one is for Visual Studio code so this is a link to the Visual Studio code marketplace.
>
> **[1:03](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=63)** You can also find this extension by going to the extensions directly in Visual Studio code.
>
> **[1:09](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=69)** You'll also get something called Jest.
>
> **[1:11](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=71)** And now Jest is a lightweight testing framework and you can use it to run tests on your projects to make sure that your application is working properly.
>
> **[1:23](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=83)** Finally, you get something called Web Vitals.
>
> **[1:26](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=86)** Web Vitals are a group of performance monitoring tools for your site, measuring things like performance, accessibility, and best practices.
>
> **[1:35](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=95)** Now let's take a look at the actual installation.
>
> **[1:37](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=97)** So we'll go back into Visual Studio code and we'll go through some of these files.
>
> **[1:42](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=102)** Now, since the last video I have added some of our compliance files like the license, notice, contributing.md.
>
> **[1:48](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=108)** So you may see a few less files if you're Visual Studio following along with the installation from the Create React App.
>
> **[1:57](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=117)** Now you'll notice that the README that I have here is a little bit different that you would get from the Create React App and that one just has the different commands that you can run.
>
> **[2:08](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=128)** Those commands are also inside this package that [[JSON]] so the commands that you can run our start build test and eject.
>
> **[2:16](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=136)** So this package.json file is the file that [[Node.js]] creates to manage the project.
>
> **[2:22](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=142)** You can see a list of the default dependencies, which has some of the modules that we just talked about right here.
>
> **[2:29](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=149)** So you can see Web Vitals, you can also see the React library right here as well as Jest, the testing library.
>
> **[2:38](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=158)** And in addition to that you can also see some configuration segments over here that tell the application on how to work.
>
> **[2:46](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=166)** Essentially here we're configuring how ESLint will work with some simple extends here that will let them work properly with React documents.
>
> **[2:56](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=176)** Also, the browser lists allow you control how the output of the Create Re App will work when you use the build command.
>
> **[3:06](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=186)** That means that we're going to be targeting certain browsers that are listed right here, different things during production, as well as development, and you can modify that right here as well.
>
> **[3:18](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=198)** Next up is a file called gitignore.
>
> **[3:20](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=200)** Now this is the document that helps you control what's being tracked by [[GitHub]].
>
> **[3:25](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=205)** In the last video you notice that I added this source.db.js file, which is something that we're going to be adding a little bit later on.
>
> **[3:33](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=213)** Let's take a look at the public folder next.
>
> **[3:36](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=216)** The public folder has files that Webpack will manage automatically for you.
>
> **[3:41](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=221)** Now these will also be moved to the server when our project is deployed by using the build command.
>
> **[3:47](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=227)** You can see that there are some icons as well as logos of different sizes and also a file called robots.txt, this gives web crawlers information about your websites.
>
> **[3:59](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=239)** Web crawlers are applications that search engines like [[Google]] use to get more information about your sites.
>
> **[4:05](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=245)** So you can configure that right here.
>
> **[4:07](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=247)** There's also a manifest.json file which you can see right here.
>
> **[4:13](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=253)** Now this is usually used for PWAs or progressive web apps.
>
> **[4:17](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=257)** They allow your projects to be installed in mobile platforms without building native apps.
>
> **[4:23](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=263)** Finally, we get to the real important file in this folder which is the index.[[HTML]] file.
>
> **[4:28](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=268)** This is the entry point for browsers, so whenever you're looking at the webpage that gets generated, you're looking at this index.html page which also runs the application.
>
> **[4:40](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=280)** Then you can modify this file if you want to but remember that Webpack will use this file to inject both the JavaScript code as well as any CSS code that it needs.
>
> **[4:51](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=291)** So it'll add tags into the head section here for the CSS and it'll add stuff down here for the JavaScript at the bottom, like it normally would for any project.
>
> **[5:02](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=302)** Now, the most important thing in this document is this div right here.
>
> **[5:08](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=308)** This is where your application will be loaded.
>
> **[5:11](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=311)** So your entire application will live right here.
>
> **[5:14](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=314)** You can add some stuff here afterwards or you can maybe add some meta-tags of your own but just remember not to delete this div with the ID of root 'cause that's very important.
>
> **[5:26](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=326)** Now the entry point for all of your applications is inside this source folder.
>
> **[5:31](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=331)** And that folder, you will find a lot of different files.
>
> **[5:35](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=335)** The main one is called index.js.
>
> **[5:39](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=339)** Now this is the entry point for your application, so in the same way that the document is read from index.html, that index.html file is going to read this index.js file and it's going to load your entire application.
>
> **[5:55](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=355)** Now this file imports a lot of different codes from different libraries that you can see right here including something called React as well as ReactDom.
>
> **[6:04](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=364)** React of course is the main library for React and ReactDom is used to essentially control the [[Document Object Model (DOM)|document object model]], sort of the structure of how webpages are put together.
>
> **[6:16](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=376)** One of the nice things about React is that it controls the Dom for you so that all you have to do is worry about the state or the data that goes into a page and React will take care of that Dom for you.
>
> **[6:29](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=389)** You can see this being used right down here in this ReactDom.render, this is probably the only time that you will use this ReactDom library in your projects.
>
> **[6:41](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=401)** Most of these are going to be installed into this folder when the Create React App runs, it actually runs an [[npm]] install command and then it puts a lot of stuff in here.
>
> **[6:52](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=412)** But if you scroll down far enough you should be able to see the React folder or the folder for all of these different items in here.
>
> **[7:00](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=420)** So let's see if we can find React, should be coming up here.
>
> **[7:05](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=425)** So you can see ReactDom is right here and React is up here.
>
> **[7:09](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=429)** So these files are literally coming from this node modules folder.
>
> **[7:14](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=434)** Normally they would be loaded like this if they were a file that was somewhere in the current document, which is what this import is.
>
> **[7:21](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=441)** So this import imports a CSS document, and let me go ahead and close that node modules it's so humongous.
>
> **[7:29](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=449)** So this is importing an index.css file which you can see right here.
>
> **[7:34](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=454)** Some very basic code and this is a CSS file that will affect your entire application.
>
> **[7:40](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=460)** So if you want some CSS that, you know, does something to the entire webpage you can put it right here, let's go back into index.
>
> **[7:48](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=468)** And then we're also loading a single module called App.
>
> **[7:52](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=472)** Now notice that this is referring to this App.js document right here but it doesn't have the extension.
>
> **[7:59](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=479)** When you are importing the modules you don't need to add the .js extension and you usually call a variable like this or an object from that component that is going to be loaded into this component.
>
> **[8:13](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=493)** Now you're also noticing that we're importing report Web Vitals from this report Web Vitals file right here which is what controls that module that lets us take a look at Web Vital information for different purposes.
>
> **[8:29](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=509)** There's also a setupTests.js file which you can see right here, which sets up the test and notice that there are three files here for the App.
>
> **[8:39](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=519)** The one that gets loaded up first is this one but there's also a test file for the individual module if that's something that you're interested in working in.
>
> **[8:49](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=529)** Now this render command is also doing something that puts React in strict mode.
>
> **[8:55](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=535)** That means that it's going to complain if you're write potentially dangerous code and this isn't something that is going to be necessarily added when you actually build the application because putting React and strict mode would add a bunch of additional code that is just going through whatever you type in and check it and you don't want that in production so that gets extracted from production.
>
> **[9:18](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=558)** You can see that we're actually using the App component that we load from here from this App down here.
>
> **[9:24](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=564)** So this is where the application gets loaded.
>
> **[9:27](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=567)** And over here, when we call ReactDom.render the only other thing that we pass is the location of where we want to load this file.
>
> **[9:36](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=576)** We want to load everything into an item that has an ID of route which we saw earlier in the public's index.html file.
>
> **[9:46](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=586)** And that's why this ID here is really important.
>
> **[9:49](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=589)** Now, since we loaded up App.js, let's take a look at that one next.
>
> **[9:54](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=594)** Here you can see that there is a low command for a file in logo, and you might not be used to loading logos like SVGs in this manner but this is one perfectly good way that you can do something like this in React.
>
> **[10:09](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=609)** The differences if you put a logo, say in the public folder it's going to be web accessible to anybody.
>
> **[10:16](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=616)** So somebody could type in the URL of your application and then find this logo192.png, whereas these files are going to be all controlled by the Webpack automation.
>
> **[10:28](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=628)** And it might go ahead and before publishing or even embedding the logo, it might do some compression or some modification of the document.
>
> **[10:39](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=639)** So it's considered maybe a better way of doing it, I'm not sure if it's necessarily better but sometimes you do want people to have access to the files, but that's what it's doing.
>
> **[10:48](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=648)** And you can see that it's actually being loaded right here and since we imported it as a object called logo then we can use it directly in this source call right here which is sort of an interesting way of loading up an image, I think.
>
> **[11:03](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=663)** We're also loading a test for this document.
>
> **[11:07](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=667)** You saw that earlier, we have this setup tests file to control this app test.js file when we installed it, jest testing library this file will show you some sample code of how you create a basic test.
>
> **[11:21](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=681)** It's not something we're going to be doing in this course but you can take a look at that library if you want to learn more.
>
> **[11:26](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=686)** Now the same way that we were loading index.css we're also loading CSS only for this component.
>
> **[11:35](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=695)** So the CSS that you see an App.css will only be tied to this specific component, the app.js component or the app component.
>
> **[11:46](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=706)** Now next up we have a function right here that defines our component and that function is being exported and that's what we receive into the index.js file.
>
> **[11:56](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=716)** I should mention that the code that we're seeing here is something that is called JSX which is a combination of JavaScript and XML.
>
> **[12:07](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=727)** You don't usually use JavaScript to return HTML code like this, but that's what JSX is all about.
>
> **[12:14](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=734)** You can see that this code also uses the more modern React function syntax instead of the class based syntax.
>
> **[12:23](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=743)** So we'll be using this function-based syntax as well as hooks throughout this project because it's more modern and honestly, I'm liking it a little bit better, I think it's a little more like regular JavaScript.
>
> **[12:35](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=755)** You do have to get used to JSX if you're not used to it because things that you're used to writing in HTML.
>
> **[12:42](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=762)** So for example, class, the keyword class that you would use an HTML has to be renamed as class name because class is a valid JavaScript keyword.
>
> **[12:53](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=773)** And since this is a combination of JavaScript and HTML you know JavaScript might get confused by that keyword.
>
> **[13:01](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=781)** So you'll see that whenever we, for example, create a form and we use the keyword for in a label we would have to use the keyword HTML for, there is a couple of weird things that you have to get used to like that.
>
> **[13:14](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=794)** But other than that, this is pretty simple HTML code that just displaced something on screen.
>
> **[13:20](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/analyzing-the-react-installation?u=76281980&t=800)** And this is pretty much how our application loads, there's a lot going on here but hopefully now that I've gone through it everything makes a lot more sense.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (20), [[JavaScript]] (12), [[HTML]] (11), [[ESLint]] (3), [[JSON]] (3)
> **File Paths:** index.html (5), index.js (3), app.js (3), index.css (2), contributing.md (1)
> **Env Vars:** css (7), html (6), jsx (3), readme (1), json (1)
> **Definitions:** is a  (13), is called (3), means that (2)
> **CLI Commands:** find (5), node (3), make (1), npm (1)
> **Tools:** visual studio (5), github (1)
> **Prerequisites:** install (2), configure (1), setup (1)
> **Cross-References:** in the last (1), coming up (1), earlier in (1)

#### [Customizing and adding modules](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=0)** - [Instructor] The setup for this project is a bit overkill, so let's pair it down a bit and install a few extra modules just like we would on a real project.
>
> **[0:09](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=9)** So I'm going to switch back into my application, and I'm going to start by removing a lot of files that we're not going to use here.
>
> **[0:18](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=18)** So we'll open up the public folder, and get rid of these two logos, as well as the manifest.[[JSON]], and the robots file.
>
> **[0:28](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=28)** And then here, we're going to get rid of App, as well as the test and also the Index.css file, and also this logo.
>
> **[0:42](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=42)** And we'll also get rid of the test setup, as well as reportWebVitals.
>
> **[0:47](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=47)** So I'm going to right click, I'm in Visual Studio Code here, and I'll just hit the delete button and that'll get rid of those files.
>
> **[0:54](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=54)** We'll also need to make some modifications to some of the files, so that these changes will be taken care of.
>
> **[1:01](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=61)** So I'll start with the index.[[HTML]].
>
> **[1:04](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=64)** There's just a lot of code here and I'm not going to use a lot of it.
>
> **[1:08](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=68)** So I'm going to go and, let's see, remove the favicon, these meta tags.
>
> **[1:14](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=74)** You can leave some of these in here, but I'm just going to make some very lean code.
>
> **[1:19](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=79)** And I'll go all the way to this notice here that has the title create [[React.js|React]] dot.
>
> **[1:25](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=85)** That's really all we need on the head tag.
>
> **[1:28](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=88)** And I'll get rid of this humongous comment here.
>
> **[1:31](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=91)** I think like once you've read it, I mean, I think that comment will disappear, but this'll be just nicer if we get rid of it, just make it a lot smaller.
>
> **[1:40](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=100)** And now let's go ahead and save this.
>
> **[1:41](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=101)** Next step, we'll touch the index.js file.
>
> **[1:45](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=105)** And I'm not going to use this import of the CSS because I'm not going to be doing a lot of CSS in this project, almost not.
>
> **[1:54](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=114)** I'm just going to use the Bootstrap framework, which will make things a lot simpler.
>
> **[1:58](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=118)** So I'll get rid of this reportWebVitals since I'm not using it, and also get rid of these comments, and actually we'll get rid of this reportWebVitals thing since we're not using it either.
>
> **[2:10](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=130)** Everything else looks pretty good.
>
> **[2:14](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=134)** So let's go over to App.js.
>
> **[2:16](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=136)** We're not using this logo anymore, or this App.css file, so we'll just leave this.
>
> **[2:24](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=144)** So we'll just leave this function thing here, and we're going to get rid of most of this HTML code for now.
>
> **[2:31](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=151)** Just leaving that like that.
>
> **[2:32](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=152)** I'll come back into this and add something a little bit later on, once I install a couple of the modules.
>
> **[2:39](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=159)** So if you save, you may see this reflow a little bit, that's okay.
>
> **[2:45](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=165)** I'm going to install some additional modules.
>
> **[2:47](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=167)** I'm not going to be writing any CSS for this project, so I'll use the most popular framework in the world, which is Bootstrap.
>
> **[2:53](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=173)** And that's going to give you a ton of classes that you can use to build your applications a lot quicker.
>
> **[2:59](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=179)** You can see that I don't want to be touching CSS, so I want to just get this going.
>
> **[3:05](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=185)** I'm going be using the v5.0, and right now the latest one that's out is the beta 1, maybe using, probably more than likely you'll be using a later version, but none of the code that I'm doing is too crazy, so it should all work.
>
> **[3:22](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=202)** I'm going to be using the Sass version of Bootstrap, which is actually a lot better than the regular version of Bootstrap.
>
> **[3:28](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=208)** Sass stands for Syntactically Awesome Style Sheets, and it's a way to work with the same code that people used to create Bootstrap.
>
> **[3:38](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=218)** So I'll show you an example of how by using the Sass version of Bootstrap, I can easily change the colors to something that I like, which I always enjoy doing.
>
> **[3:48](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=228)** So Sass. Another thing that we're going to use is something called Bootstrap Icons.
>
> **[3:54](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=234)** These are pretty new as well, and they go really well if you just need a few icons to put into your projects.
>
> **[4:00](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=240)** You can see a list of all the icons.
>
> **[4:02](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=242)** I'm just going to use a couple of these, but it's a growing list of icons from the makers of Bootstrap, and this is completely open source as well.
>
> **[4:11](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=251)** So it's a pretty cool library.
>
> **[4:13](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=253)** All right. So in order to do this, I need to switch back into my project and I'm going to pull up the terminal.
>
> **[4:18](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=258)** And you're going to need to install some of these modules.
>
> **[4:21](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=261)** So I'll do [[npm]] i for install, and I'll use bootstrap@next.
>
> **[4:27](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=267)** By the time this is released, it might just be Bootstrap, but I'm going to use bootstrap@next because it's still under beta.
>
> **[4:34](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=274)** And then I'll call bootstrap-icons, and I'm also going to install Sass.
>
> **[4:40](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=280)** So, all those three with one command, I'll hit return.
>
> **[4:43](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=283)** And it's going to take a little bit to get going.
>
> **[4:46](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=286)** All right, once that's done, let's clear that out and close out the terminal.
>
> **[4:51](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=291)** You'll notice that our package.json file has changed a little bit to show that I'm loading these items in here.
>
> **[4:59](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=299)** So now that means that they have been moved into the node modules folder, and I can install them from there and use them in my application.
>
> **[5:07](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=307)** So I'm going to create a new file, and this is going to go in my source folder.
>
> **[5:11](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=311)** So I'm going to make a new file right here.
>
> **[5:14](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=314)** It's going to be called custom.scss, because I'm using Sass instead of regular CSS.
>
> **[5:21](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=321)** And so this file is going to load up the CSS components from Bootstrap, as well as the CSS fonts from Bootstrap Icons.
>
> **[5:30](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=330)** So I'll use an import command, and in quotes I'm going to use a tilde here, which means go to the node modules folder and look for the Bootstrap framework, look for the SCSS folder, and then find a file called bootstrap.scss.
>
> **[5:48](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=348)** Now, if you want to, you can look for it, it should be here somewhere.
>
> **[5:52](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=352)** There it is right here.
>
> **[5:53](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=353)** So if I open up Bootstrap, you'll notice that there is an SCSS folder, and in here is all of the Bootstrap files.
>
> **[6:01](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=361)** And I'm loading the one called Bootstrap SCSS, it's actually going to be at the bottom because notice that all these have underscores at the beginning.
>
> **[6:10](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=370)** So here's the file that I'm loading.
>
> **[6:12](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=372)** And this has a bunch of imports to some of these other documents.
>
> **[6:16](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=376)** The important thing right here, is that this is uploading or importing a bunch of variables that Bootstrap gives you.
>
> **[6:24](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=384)** And with those variables, you can change how Bootstrap works.
>
> **[6:28](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=388)** So if you don't like these colors, and I always have a big problem with this particular blue, it's not bad, but it's a little bit too strong for me, so I always like to change it.
>
> **[6:37](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=397)** So you can redefine the way Bootstrap works.
>
> **[6:40](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=400)** Bootstrap has the colors defined with names, so there's like, you know, a name called primary, that is the color of the blue.
>
> **[6:48](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=408)** Secondary, that's like a medium gray, and some of these other keywords here.
>
> **[6:53](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=413)** So you can completely modify this.
>
> **[6:55](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=415)** If you need help, there is a course that I did on Bootstrap with Sass, you may want to take a peek at that if you're interested in customizing this thing.
>
> **[7:02](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=422)** But what I like to do, is just go ahead and change the definition of primary and make that something else.
>
> **[7:10](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=430)** I'm going to make it a cool purple.
>
> **[7:12](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=432)** And this is how you do that. So now anything called primary, and you'll see some of these when I create the application, will now be purple instead of the traditional blue, which again, I'm not a huge fan of.
>
> **[7:25](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=445)** So I need to put a semi-colon here, and I'm going to do another import, this time I'm going to import Bootstrap Icons.
>
> **[7:32](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=452)** And what I'm going to do, is install a font or at least a CSS file that contains links to the fonts.
>
> **[7:42](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=462)** And this is going to be bootstrap-icons, and it is a CSS file.
>
> **[7:46](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=466)** So what this does, is, again, that goes into the file in node modules.
>
> **[7:52](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=472)** And I don't need to show it to you, and loads up this Bootstrap Icons, which has links to a font.
>
> **[7:57](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=477)** And you'll have access to all of those Bootstrap Icons, which is great.
>
> **[8:02](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=482)** So that's our custom.scss file.
>
> **[8:05](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=485)** We're going to need to import that, and to make it available to our entire application, I'm going to load it up into index.js.
>
> **[8:15](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=495)** And so after this app right here, I'm going to import, and because it is a file that I'm importing, I'm going to import the custom.scss file that I created just now.
>
> **[8:29](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=509)** And I'll put a semi-colon here at the end, and save this.
>
> **[8:33](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=513)** All right. So now, I'm going to go back into App.js, which has my component.
>
> **[8:39](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=519)** And I'm going to add some stuff here.
>
> **[8:41](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=521)** So into this app, if you know Bootstrap, I'm going to add a container.
>
> **[8:45](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=525)** That's going to load up the basic sort of structure of Bootstrap, which gives you a responsive grid that's 12 columns big.
>
> **[8:53](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=533)** And I'm also going to add a little bit of padding at the top of the application, 5 units, so that it doesn't butt up all the way to the top of the window.
>
> **[9:02](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=542)** I never like how it looks when it does that.
>
> **[9:04](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=544)** And then I'm going to make just a headline, and this headline is going to have, remember we don't use class, we use class name in JSX, and in here, I'm going to add the text primary class.
>
> **[9:19](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=559)** And then in here, I'm going to add an icon.
>
> **[9:24](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=564)** And this is how you add icons.
>
> **[9:25](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=565)** You put in the name of the class that the icon has.
>
> **[9:29](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=569)** So, bi is the Bootstrap Icons, diagram-2-fill.
>
> **[9:35](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=575)** So this is the name of how you get to that icon.
>
> **[9:39](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=579)** And then after this, I'll put in keyword here, Repos, and I'm going to save that.
>
> **[9:45](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=585)** It's going to reformat it a little bit, and if we have done everything correctly, we should see a change here.
>
> **[9:52](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=592)** It might be that I'm not, or I didn't end up rerunning the npm start command, which you probably have to stop.
>
> **[9:58](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=598)** If it's already running, you probably want to Control + C to stop the running of the application, because you've loaded some additional modules.
>
> **[10:07](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=607)** And let's try npm start, see if that works.
>
> **[10:11](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=611)** And that'll start the development server and load up our application, which it looks like I have an error here.
>
> **[10:17](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=617)** So, this is what happens when you get an error with React.
>
> **[10:20](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=620)** It'll give you this Failed to compile command, and try to give you some information about what the problem is.
>
> **[10:24](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=624)** It's actually pretty good.
>
> **[10:25](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=625)** You can see that there's a problem here with this import statement, or in my custom.scss file.
>
> **[10:31](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=631)** It's trying to import something that it can't find.
>
> **[10:33](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=633)** So it actually gives you this import command here.
>
> **[10:37](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=637)** And if you option + click, it's going to try to find it.
>
> **[10:40](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=640)** But what I know is that, the mistake that I made is I put a slash here after the tilde.
>
> **[10:46](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=646)** So I wasn't supposed to do that.
>
> **[10:48](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=648)** And once I save this, it will try to recompile.
>
> **[10:52](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=652)** You may need to refresh this, and there is the result.
>
> **[10:56](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=656)** So that's looking like it's working.
>
> **[10:59](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=659)** We got both the icons, as well as the Bootstrap framework installed.
>
> **[11:04](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=664)** You can see that it is responsive, and that we get the icon.
>
> **[11:08](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=668)** And my primary colors have now been reset to look purple instead of the traditional Bootstrap blue.
>
> **[11:15](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/customizing-and-adding-modules?u=76281980&t=675)** So, we're looking good.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (3), [[JSON]] (2), [[HTML]] (2), [[React.js|React]] (2)
> **CLI Commands:** make (9), npm (3), node (3), find (3)
> **File Paths:** custom.scss (4), index.js (2), app.js (2), manifest.json (1), index.css (1)
> **Env Vars:** css (9), scss (3), html (1), jsx (1)
> **Prerequisites:** install (8), setup (2)
> **Definitions:** is a  (4), stands for (1), means that (1), is an  (1)
> **Code Identifiers:** reportwebvitals (3)
> **Tools:** terminal (2), visual studio (1)


### 2. GitHub's GraphQL Schema

[↑ Back to Table of Contents](#table-of-contents)

#### [Exploring GraphQL](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=0)** - [Instructor] Before we get going with [[GraphQL]], let's talk about what it is and how you can use it with [[GitHub]].
>
> **[0:06](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=6)** GraphQL is an open source query language for managing data on your server.
>
> **[0:10](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=10)** You can take a look at their website right here which gives you a lot of information and it shows you that you start off by describing some data, asking for what you want and then you get predictable results in return.
>
> **[0:22](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=22)** But this doesn't really show the full power of what it can do.
>
> **[0:26](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=26)** What makes it unique is that it lets you retrieve everything you need from your database in a single call.
>
> **[0:33](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=33)** You get a lot of information quicker than with traditional [[Representational State Transfer (REST)|REST]] APIs and in less requests to the server, which makes it faster.
>
> **[0:42](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=42)** Like [[React.js|react]] GraphQL was created by [[Facebook]].
>
> **[0:45](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=45)** It has been running their mobile apps since 2012 which in web years is a really long time.
>
> **[0:51](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=51)** Just imagine how efficient and fast it has to be to run all of the data from Facebook.
>
> **[0:58](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=58)** Now, it's been an open source project that runs under its own foundation since 2018.
>
> **[1:04](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=64)** And it's also used by GitHub and other companies so you know that it's battle tested.
>
> **[1:09](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=69)** GitHub's version of GraphQL allows you to look up the information about your account and repositories.
>
> **[1:15](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=75)** It's a great place to get some practical experience with GraphQL.
>
> **[1:20](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=80)** The way that you start with GraphQL and GitHub is by using something called the GraphQL Explorer.
>
> **[1:25](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=85)** You can get through it right here.
>
> **[1:27](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=87)** That GraphQL Explorer requires that you are assigned into your account.
>
> **[1:32](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=92)** So go ahead and sign in after you go to this link.
>
> **[1:36](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=96)** What's your log then?
>
> **[1:37](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=97)** This lets you play around with your real life production data from GitHub as if you are in an application that's already authenticated.
>
> **[1:46](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=106)** The Explorer also has a lot of built in documentation and you can see right here that we have these different tabs as well as this docs right here which is where you get the documentation.
>
> **[1:58](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=118)** To begin with, you get a sample query and all you have to do is click on this button right here to play that query.
>
> **[2:05](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=125)** So you can see on the right that the data you receive is in the [[JSON]] format.
>
> **[2:11](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=131)** Now the graph QL requests, syntax it's something that is close to JSON or [[JavaScript]] object notation.
>
> **[2:18](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=138)** And you can see that it has the curly braces just like JSON, but it doesn't have name and valley pairs.
>
> **[2:23](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=143)** It's really designed to just describe the query, in other words, what you are asking for.
>
> **[2:29](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=149)** So here we're starting by getting the username of the current user, which for me, it's planet of the web.
>
> **[2:36](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=156)** So we execute a query command right here and that query has a viewer option.
>
> **[2:42](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=162)** And that also has a login option right here.
>
> **[2:46](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=166)** Now the nice thing about this GraphQL API Explorer is that it also lets you see all the documentation.
>
> **[2:52](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=172)** So the documentation and the Explorer are in the same place.
>
> **[2:57](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=177)** And notice that when I roll over these different sort of definitions here, it's going to give me some documentation info and I can come in here and click on any one of these items to get the documentation on the right to show what that is all about.
>
> **[3:12](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=192)** So, if I see this, I can go ahead and look at what each of these items are.
>
> **[3:17](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=197)** So you see the users are defined with all these different parameters right here and it has really good descriptions of everything that you see right there.
>
> **[3:26](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=206)** So, let's go ahead and close this out.
>
> **[3:29](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=209)** There's also a few buttons at the very top.
>
> **[3:31](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=211)** So you can start typing in your query here and if you hit this Prettify button, it's just going to reformat it to make it look nice and even got rid of the comments as you see right there.
>
> **[3:42](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=222)** Notice that there are some triangles right here so you can sort of collapse the data.
>
> **[3:47](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=227)** So if you have a really long query you can use this to make it look a little bit simpler.
>
> **[3:52](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=232)** You can also click right here to go to the history of all the queries that you've made.
>
> **[3:56](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=236)** We haven't done that many yet, but you can see them all in a list right here and you can even start them or edit them by clicking on this button to give them labels.
>
> **[4:08](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=248)** Now, in addition to that, you also have the Explorer which shows you a different view of the documentation.
>
> **[4:16](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=256)** And this essentially gives you sort of an outline of everything you can do in GraphQL.
>
> **[4:21](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=261)** Sometimes looking at the documentation is a little bit complicated.
>
> **[4:26](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=266)** So if I go to the documentation you're going to notice that I can do either a query or a view mutation and I can click through here, and then there's like a long list of all the different properties here.
>
> **[4:38](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=278)** This is sort of just a simpler way of looking through the documentation and seeing sort of all of the different things in a simpler way, just a little bit quicker.
>
> **[4:49](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=289)** So you can take a look at, say the user sort of search that we can do here and open that up and take a look at all the parameters for each one of those.
>
> **[5:00](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=300)** And we can click on these to add them to our queries.
>
> **[5:04](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=304)** And notice that when I clicked on Company [[HTML]], it automatically added that in here.
>
> **[5:10](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=310)** So now if I put in here, say planetoftheweb, I do have a company set up in my profile.
>
> **[5:19](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=319)** So that's what it's showing me right here.
>
> **[5:21](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=321)** And if I wanted to see my bio, I could click on that.
>
> **[5:24](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=324)** And so this is kind of not just a way to get to the docs, but also a nice way of adding things into this section right here.
>
> **[5:32](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=332)** So if I play this, it's going to show you the bio and you can look at the HTML version of the bio and just keep on adding things by using the Explorer, it can be pretty handy.
>
> **[5:43](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=343)** Somehow my query got deleted, I'm just going to Undo to show my query again.
>
> **[5:47](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=347)** There's also an interesting way that you can look at what's available in each one of these sections.
>
> **[5:53](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=353)** So if I hit return right here and I type in any letter, I should get a pop-up menu that shows me all of the options underneath that letter or close to that letter at least.
>
> **[6:04](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=364)** I can also hit the Ctrl + Space Bar anywhere here and I can see the full list of things that I can add here.
>
> **[6:11](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=371)** So let's see, let's add the number of followers.
>
> **[6:14](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=374)** If you add something and you get this red sort of underline, it means that you can't just ask for this thing, you have to sort of give it a few other parameters.
>
> **[6:26](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=386)** And in here this followers would be a list of all my followers.
>
> **[6:30](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=390)** So that requires a more complex query and it's telling you here the format that you should have syntax saying that you should probably add a set of curly braces here and then in addition to that now even though we've done what it said it needed, it's saying that it probably wants you to include some more information right here, more inquiries later.
>
> **[6:51](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=411)** But I just wanted to show you that it's really well-documented.
>
> **[6:54](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=414)** There's a section down here where you can test out query variables.
>
> **[6:58](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=418)** We're not going to use this very much because we will just be doing things directly in react.
>
> **[7:04](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=424)** But if you want it to try out sort of how you would use variables in your react application, you can do it right here.
>
> **[7:10](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=430)** So before you to get going too far make sure you go into the GraphQL Explorer, sometimes this is pronounced as graphical instead of GraphicQL.
>
> **[7:20](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=440)** It is a version of something called graphical which is the traditional way that you would make queries in a GUI or graphical user interface.
>
> **[7:28](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=448)** That's a separate application that you can download or you can go online and actually play with it on the web.
>
> **[7:33](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=453)** The only difference between the traditional graphical and this Explorer is that this allows you to quickly sign into your account.
>
> **[7:41](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=461)** If you're using the regular graphical you would have to actually submit some login information.
>
> **[7:48](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=468)** We'll go over how to set that up or how to set up your authentication which you'll also need for your react app later on.
>
> **[7:56](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/exploring-graphql?u=76281980&t=476)** So it makes sure you go to this graphical interface and explore what you can do with the GitHub GraphQL, it's as easy as going from the original query and trying some of the things out in the left-hand and receiving some data on the right.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (12), [[GitHub]] (6), [[React.js|React]] (4), [[JSON]] (3), [[Facebook]] (2)
> **Documentation:** the documentation (8), the docs (1)
> **Env Vars:** json (3), html (2), rest (1), api (1), gui (1)
> **UI Navigation:** go to (4), click on (4)
> **Tools:** github (6)
> **Definitions:** is a  (3), is an  (1), in other words (1), means that (1)
> **CLI Commands:** make (4)
> **Analogies:** imagine (1), just like (1)

#### [Building queries](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=0)** - [Instructor] So let's go ahead and talk about how queries are built with [[GraphQL]] and then we'll work on some different examples and then we'll take a look at how that works inside the GraphQL Explorer.
>
> **[0:11](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=11)** The structure of all the data in your queries is known as the schema.
>
> **[0:15](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=15)** And this is a common term in [[Databases]].
>
> **[0:17](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=17)** This just means that you need to understand how your data is going to be structured when you ask for it especially with GraphQL.
>
> **[0:26](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=26)** Now, searches are done by looking through different fields and sub fields.
>
> **[0:30](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=30)** We already saw a few of them.
>
> **[0:32](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=32)** In the example that we use earlier, our query field is what we were looking for.
>
> **[0:38](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=38)** Now, the fields can be of different types.
>
> **[0:40](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=40)** You're probably familiar with some traditional types like strings, integers, and Booleans, but each GraphQL instance also has its own custom types.
>
> **[0:50](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=50)** So, for example, one of the types is a repository.
>
> **[0:53](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=53)** That's a unique type that [[GitHub]] has that isn't really a normal [[JavaScript]], or any type that you'd find in other data.
>
> **[1:02](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=62)** There are really only two types of requests that you can make with GraphQL.
>
> **[1:06](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=66)** The root types are called either queries or mutation.
>
> **[1:10](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=70)** Queries is a simple request for information from the server.
>
> **[1:14](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=74)** The query type has a number of sub fields that you can request.
>
> **[1:18](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=78)** And in our example, we had asked for the viewer, but you can also ask for information about organizations, repos, whoever is viewing the current page, or individual users.
>
> **[1:30](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=90)** Now, the second is the mutation, which is a request to modify data on GitHub servers.
>
> **[1:37](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=97)** We'll be focusing on just queries for this course.
>
> **[1:40](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=100)** So, of course you can add other fields to our data.
>
> **[1:43](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=103)** So, let's go back into the GraphQL Explorer and you can see that right now we're using this user information.
>
> **[1:50](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=110)** But before we do that, let's just go back into the documentation to show you that here are the two different route types that you could use here, the query or the mutation.
>
> **[2:00](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=120)** And as I mentioned, we're going to be focusing on queries.
>
> **[2:03](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=123)** If I click on that, you can see the different types of queries that we can perform right here.
>
> **[2:09](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=129)** And you saw that the one that we're using right now is this user query to get information about the current user, but we can also take a look at a viewer.
>
> **[2:19](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=139)** Whoever's looking at the data at the moment and that would be the person that is logged into your application and is currently viewing your applications page.
>
> **[2:29](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=149)** But you can also perform all these other kinds.
>
> **[2:32](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=152)** One of the interesting ones is a search query.
>
> **[2:34](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=154)** So, you can actually do a search just like you would with GitHub by performing this type of query as well.
>
> **[2:41](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=161)** So, pretty important.
>
> **[2:42](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=162)** And you can also take a look at the specific repository.
>
> **[2:46](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=166)** Now, these do require some arguments so you have to pass along some information in some of these queries.
>
> **[2:52](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=172)** And you can take a look at some of these other types and actually click through them and try to see if you can figure out how to construct them.
>
> **[2:59](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=179)** We'll construct a couple of queries right now.
>
> **[3:02](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=182)** And instead of looking for user information, I'm going to ask for viewer information.
>
> **[3:07](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=187)** Now, notice that before we add query written out right here, that is optional, you don't really have to have the keyword query.
>
> **[3:15](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=195)** And you can also do name queries, but we're not going to need that for our [[React.js|react]] project.
>
> **[3:20](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=200)** So, we'll stick to what we're doing.
>
> **[3:22](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=202)** And so, as I type in viewer, it is telling you that you're going to need some more information here.
>
> **[3:28](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=208)** And remember that you can hit Ctrl + Space, and take a look at the list that is right here but it's all kind of in a quick list.
>
> **[3:35](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=215)** And if you start typing in viewer, you'll get it right there and you can hit the tab to apply that one.
>
> **[3:40](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=220)** So, I'm going to open up this query parameter section here and I'm going to type in log in and then hit return and type a name, bio and company.
>
> **[3:53](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=233)** Notice that unlike what I would be doing with [[JSON]], I don't really need the commas that I normally would put there.
>
> **[4:00](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=240)** And I'm going to also ask for the avatar URL.
>
> **[4:03](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=243)** To show you that you can ask for a number of different things within each one of your query requests.
>
> **[4:09](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=249)** So, this has given me my login username, the name, my basic bio, and there's all kinds of other pieces of information that you can ask through these different fields.
>
> **[4:21](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=261)** And as I mentioned, when you roll over these different fields you can also learn more about what types they require.
>
> **[4:29](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=269)** Some of these are going to be more complex.
>
> **[4:31](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=271)** These are actually going to be pretty simple.
>
> **[4:32](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=272)** I think these are all going to be strings.
>
> **[4:34](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=274)** So, actually, this one's a URI, so it's expecting a URI type and you can even click on that here on the right to show you that this is pretty much just a URL.
>
> **[4:46](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=286)** That's another [[Microsoft Word|word]] for that.
>
> **[4:47](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=287)** But you can also pass along arguments if you want to.
>
> **[4:50](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=290)** So, let's try another different type of query.
>
> **[4:53](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=293)** So, here we're going to use a license query.
>
> **[4:56](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=296)** So, this will give you a list of all the licenses here and I'm going to type in the curly braces, but you'll notice that it's complaining that this isn't a complete query.
>
> **[5:07](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=307)** So, notice that if I roll over this curly brace down here its saying that it's expecting a name.
>
> **[5:15](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=315)** So in addition to passing along just the keyword license, I'm going to have to open up parenthesis here and then it's actually helping me out.
>
> **[5:22](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=322)** It's saying that I'm going to need at least a key.
>
> **[5:25](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=325)** So notice that it says that it needs an S-P-T-X-I-D.
>
> **[5:30](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=330)** So I'm going to type in key here, and then in parentheses, I'll type in probably the most common license that you'll see on open source projects, which is the M-I-T license.
>
> **[5:41](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=341)** So that thing that you saw earlier, the animals if I can get it back here.
>
> **[5:47](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=347)** So let's see license and the S-P-D-X-I-D is just a term for an ID for all of the different standard licenses that you can use for open source.
>
> **[6:00](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=360)** So something like BSD or MIT would be in that list.
>
> **[6:04](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=364)** And this particular query can give you information about whatever license you want.
>
> **[6:08](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=368)** So I'll type in key again, I'll put an MIT and then I need some fields here because it doesn't make any sense for me to ask for this without any fields.
>
> **[6:17](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=377)** If I click on this, you'll see that it's retrieving the name of the license, not particularly useful although this is just the S-P-D-X-I-D that is converted to the full name here.
>
> **[6:29](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=389)** So we can ask for other things like description, we'll ask for the body and the URL here.
>
> **[6:36](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=396)** So let's go ahead and prettify this and then hit the Play button.
>
> **[6:40](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=400)** And you can see that now you can get a lot more information about the license, including a description, as well as the full body of the license and if you're building an application that had to deal with licenses, maybe you could create sort of a list of the licenses and let people look at the descriptions.
>
> **[6:57](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=417)** That's pretty cool.
>
> **[6:58](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=418)** And that is done by passing an argument like this.
>
> **[7:01](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=421)** Sometimes you're going to need more than one argument.
>
> **[7:04](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=424)** Some of the arguments are going to be optional just like with regular JSON file.
>
> **[7:09](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=429)** So, let's take a look at another type of query that you would make.
>
> **[7:14](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=434)** And this one will be dealing with something called nodes.
>
> **[7:18](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=438)** So here, I'm going to ask for information about the viewer.
>
> **[7:22](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=442)** Let's try that viewer, and then in curly braces, I'm going to ask for the repositories.
>
> **[7:29](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=449)** So I can ask either for information about a specific repository or get a list of repositories.
>
> **[7:36](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=456)** And in here, I'm going to need to pass along an identifier.
>
> **[7:40](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=460)** So I'm going to need to know I want either a certain amount of repositories.
>
> **[7:45](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=465)** You can't just ask for all of them.
>
> **[7:47](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=467)** I think there's like a limit of about a hundred that you can ask for, but it wants to know how many do you want.
>
> **[7:54](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=474)** And so the word that use here is first and then you can put in a number and then in here we can put in things that are relevant to the repositories.
>
> **[8:04](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=484)** So you can see that you can put in a total count which will be pretty useful.
>
> **[8:08](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=488)** So we'll say, how many repositories do we have total?
>
> **[8:12](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=492)** And I'm asking for the first two, so this will make more sense in a minute but you can at least find out how many you have total that are available to you.
>
> **[8:19](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=499)** Now, in order to get the actual list of repositories, I'm going to have to use something called nodes.
>
> **[8:24](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=504)** And this is how I access information in a list.
>
> **[8:27](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=507)** In here you can pass along certain things about repositories that you want.
>
> **[8:32](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=512)** So look at all the data that's available here quite a bit of stuff.
>
> **[8:36](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=516)** I'm just going to do name, description and I'm also going to show you that you can get an ID for anything or any sort of nodes in a GraphQL with GitHub.
>
> **[8:49](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=529)** So this is actually pretty useful for react applications because whenever you're making lists in react you need unique IDs.
>
> **[8:56](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=536)** So this can retrieve them for you.
>
> **[8:59](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=539)** And that's pretty cool.
>
> **[8:59](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=539)** And now you can see that I'm getting the data for a couple of different repositories that I have here.
>
> **[9:07](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=547)** I'm not really sure how it's figuring out which repository is to get it.
>
> **[9:11](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=551)** Maybe like the very first two repositories I ever made because I haven't qualified the results.
>
> **[9:18](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=558)** So in order to do that, I can add an order by and an order by I can qualify these, I'm going to add some curly braces here.
>
> **[9:28](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=568)** I'll qualify these by a field called created at and let me go ahead and hide this so I have more room to play here.
>
> **[9:35](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=575)** So, field created at, and then I need to specify at least a direction and I'll say, descending.
>
> **[9:41](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=581)** So this should be the last two repositories.
>
> **[9:45](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=585)** And I'm using this slide application.
>
> **[9:47](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=587)** So it's probably going to always load up to the top.
>
> **[9:50](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=590)** So this is the latest repository, it retrieved two items at the beginning of this qualification right here.
>
> **[10:01](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=601)** So now, what about pagination?
>
> **[10:03](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=603)** So when you paginate items, when you want to receive a list, but you want to actually paginate the list, you can ask for an additional section called edges.
>
> **[10:14](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=614)** So, edges is how we paginate and what you put in edges is a list of nodes that you want to retrieve as a list of edges.
>
> **[10:23](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=623)** So in the edges, I'm going to put my nodes, let's see prettify this, and can't ask for nodes inside, I just have to ask for each individual node because edges creates sort of a sub list and each one of those sub lists is going to contain a series of nodes in this case.
>
> **[10:43](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=643)** So let's try that.
>
> **[10:45](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=645)** And it's not really going to do very much, it's actually going to look exactly the same as before but now we have activated pagination by using these edges.
>
> **[10:55](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=655)** And in order to work with these edges we have to understand another concept which are cursors.
>
> **[11:01](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=661)** So cursors are like IDs but they're IDs that are relevant to the edges.
>
> **[11:07](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=667)** So in here, right next to edges, I put in a cursor qualifier here then it's going to give me a separate ID.
>
> **[11:18](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=678)** And this ID is going to relate to how I am paginating my document.
>
> **[11:23](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=683)** So, I can use this ID to ask for a certain amount of items.
>
> **[11:31](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=691)** So let's say, I'm going to use this cursor right here.
>
> **[11:34](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=694)** So the precursors are like a pointer.
>
> **[11:35](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=695)** So I'm going to grab this cursor and I'm going to say, I want the first two items using the same order qualifiers but I want them after this cursor.
>
> **[11:47](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=707)** So now when I ask for this, you're going to get to other repositories that appear after the item with this cursor.
>
> **[11:56](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=716)** So by adding a cursor to each one of our edges, we can control which items we're seeing in our entire directory.
>
> **[12:05](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=725)** And that's how you paginate.
>
> **[12:07](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=727)** There's also some information that you can retrieve as part of your edges.
>
> **[12:12](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=732)** So after this cursor, then I can ask for some page info this will give me some useful information as to whether or not there is a next or a previous page based on your parameters here.
>
> **[12:26](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=746)** So, we'll say there is, has previous page and has next page.
>
> **[12:31](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=751)** And then there's also a start cursor and end cursor.
>
> **[12:36](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=756)** So right now we all have only retrieving two items.
>
> **[12:38](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=758)** So this would be the start cursor and this would be the end cursor.
>
> **[12:43](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=763)** But if we were asking for more items, then the page info will actually just give us the beginning and ending cursor so that we can more easily paginate our lists right here.
>
> **[12:54](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=774)** So you could see that because I have two items, the end cursor is the same as this and then the beginning cursor is the other one because I'm only using two.
>
> **[13:01](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=781)** And notice that here has previous page is currently true because I'm looking at the information after this cursor which is essentially the second page.
>
> **[13:13](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=793)** And if I didn't have that, then previous page would have a value of false because we're at the beginning of the list.
>
> **[13:23](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=803)** And if I would have navigated to the last page then has next page would be false.
>
> **[13:28](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=808)** So that's how you paginate, retrieve data, and this is how you use qualifiers as well as arguments and then how you paginate using edges and nodes.
>
> **[13:39](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=819)** So pretty useful information.
>
> **[13:40](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-queries?u=76281980&t=820)** And we'll be using all this when we create our application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (7), [[GitHub]] (4), [[React.js|React]] (3), [[JSON]] (2), [[Microsoft Word|Word]] (2)
> **Env Vars:** url (3), json (2), uri (2), mit (2), bsd (1)
> **Definitions:** is a  (7), known as (1), means that (1)
> **CLI Commands:** make (4), find (2), node (1)
> **Tools:** github (4)
> **UI Navigation:** click on (3)
> **Analogies:** just like (2), for example (1)
> **Documentation:** the documentation (1)

#### [GitHub authentication tokens](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=0)** - [Ray] In order to work with the [[GitHub]] [[GraphQL]] API we'll need to create an authentication token.
>
> **[0:05](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=5)** But that's a secret that will give an application access to the GitHub GraphQL data from within [[React.js|react]].
>
> **[0:11](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=11)** Now, before you do this, make sure that you're logged in to GitHub and that your email has been verified.
>
> **[0:17](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=17)** So you need to go to the top right-hand side of the screen, to your little icon and then you're going to go to the settings right here.
>
> **[0:30](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=30)** And then you want to scroll down to developers settings that is down here for me.
>
> **[0:35](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=35)** And then you want to switch to personal access [[Tokens]].
>
> **[0:38](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=38)** Now, here, you want to create a new access token.
>
> **[0:42](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=42)** So let's go ahead and generate a new token here and you're going to need to define what type of permissions you're going to give your application that you can control the access in a number of different ways.
>
> **[0:55](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=55)** I'm going to give you the minimal amount of permissions to read information.
>
> **[0:59](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=59)** And so we'll click here on repo and actually I want to give this thing a name.
>
> **[1:04](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=64)** So I'll say GitHub GraphQL course or you can put in whatever name you want but we want at least the repo permissions and then under [admin.org](https://admin.org), you may or may not want to read information from your administration, that's up to you.
>
> **[1:24](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=84)** And then also under admin repo hooks this will allow you to connect to different repositories.
>
> **[1:33](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=93)** So I'm going to allow people to read the repo hooks from my permissions.
>
> **[1:38](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=98)** And then the final one that we're going to need is down here at the bottom.
>
> **[1:43](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=103)** Actually, I think I need to make sure that I also allow people to read my user information.
>
> **[1:48](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=108)** So I'll click on user and that'll select all of these.
>
> **[1:51](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=111)** And then I want to go to admin PGP key that is permissions to read GPG keys for your applications.
>
> **[2:01](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=121)** So you need to turn that on as well.
>
> **[2:03](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=123)** You can give additional permissions, and that is just going to depend on what you want your application to do.
>
> **[2:10](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=130)** You can read more about this information right here on this link.
>
> **[2:14](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=134)** Now, once you do all this, I'm going to hit generate token, and now this is really important this is the only time that you're going to see this access token.
>
> **[2:23](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=143)** So if you want to, you can store it in a safe place.
>
> **[2:27](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=147)** I tend to use one password if I want to be able to retrieve that again because you're never going to see this thing again.
>
> **[2:33](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=153)** There's even a nice convenient little icon right here that you can click on to copy this to your clipboard.
>
> **[2:38](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=158)** And now you're going to need to generate a file that has this ID in it.
>
> **[2:43](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=163)** So to do that, I'm going to switch back into my application.
>
> **[2:46](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=166)** You're going to have to do this yourself because I included the file that I'm about to create in the gitignore document right here.
>
> **[2:56](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=176)** So, notice there is a gitignore document.
>
> **[2:59](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=179)** And at the very bottom, I said not to track a file that's going to go into source folder and it's going to be named db.js, which I'm about to create.
>
> **[3:07](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=187)** So you're going to have to make your own this is not going to be in the repository repo.
>
> **[3:12](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=192)** So I'm going to to go into source and I'll create a new file.
>
> **[3:16](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=196)** This is going to to be called db.js and it's going to have the information to allow my application, to use the GitHub repository info.
>
> **[3:25](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=205)** So I'll create a constant here.
>
> **[3:26](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=206)** I'm going to call it, GitHub, and this is going to be an object and it's going to have base URL.
>
> **[3:33](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=213)** Now this is going to be the same thing for you.
>
> **[3:35](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=215)** The base URL is just the entry point for applications to go to GitHub.
>
> **[3:41](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=221)** So, this is going to be [https://api.github.com/GraphQL](https://api.github.com/GraphQL)
>
> **[3:50](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=230)** So this is how it's going to retrieve the data or where it's going to retrieve the data from.
>
> **[3:55](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=235)** Username here will be your username mine is planetoftheweb, please don't use mine.
>
> **[4:01](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=241)** It's not going to work unless you have the proper authentication anyways.
>
> **[4:04](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=244)** But put your own username here.
>
> **[4:07](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=247)** So next up, you're going to pass along some headers.
>
> **[4:11](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=251)** So this is information that you will be passing along when you make the request.
>
> **[4:15](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=255)** So we're going to need to pass along content type.
>
> **[4:18](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=258)** And this will be application/[[JSON]].
>
> **[4:22](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=262)** Make sure you capitalize these 'cause that's a common error.
>
> **[4:25](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=265)** And then you're going to need to pass authorization.
>
> **[4:30](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=270)** And this one doesn't need to be quoted like this one.
>
> **[4:33](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=273)** This one's quoted 'cause it has a hyphen in it.
>
> **[4:36](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=276)** And it will need this quote over here on the right.
>
> **[4:39](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=279)** And this is going to save first, the [[Microsoft Word|word]] bearer.
>
> **[4:43](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=283)** And then you're going to paste the access token from GitHub, right?
>
> **[4:47](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=287)** And then finally you're going to need to export this data.
>
> **[4:53](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=293)** Export, and we're going to give it a name of GitHub.
>
> **[4:56](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=296)** So that's what's going to be exported into our other application, that JS file eventually.
>
> **[5:03](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=303)** So go ahead and save that.
>
> **[5:05](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=305)** And that's all you need to do to set this up so that you can read this data into your application.
>
> **[5:12](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=312)** Now, remember that because we added this file to our gitignore document.
>
> **[5:17](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=317)** This file will not be in the repository for this course.
>
> **[5:20](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/github-authentication-tokens?u=76281980&t=320)** And therefore this file isn't really any different than, you know, the file that I was using previously, because all we did is add a file that doesn't get tracked here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (10), [[GraphQL]] (4), [[React.js|React]] (1), [[Tokens]] (1), [[JSON]] (1)
> **Tools:** github (10)
> **UI Navigation:** go to (4), click on (2), scroll down (1), switch to (1)
> **CLI Commands:** make (5)
> **Env Vars:** url (2), api (1), pgp (1), gpg (1)
> **File Paths:** db.js (2)
> **URLs:** [admin.org](https://admin.org) (1), [https://api.github.com/graphql](https://api.github.com/graphql) (1)
> **Definitions:** is a  (1)


### 3. Working with GraphQL Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Retrieving data](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=0)** - [Instructor] Let's go ahead and start building our application.
>
> **[0:02](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=2)** And the first thing I need to do is go ahead and import the [[GitHub]] object that I created from my database file.
>
> **[0:11](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=11)** So that'll be ./db.js that will load up this file that has all the credentials that I will need to import my application.
>
> **[0:21](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=21)** So next up, I'm going to also import a feature called useEffect and this feature will come from [[React.js|react]].
>
> **[0:31](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=31)** This is going to allow us to load up that data when we need it in our application.
>
> **[0:37](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=37)** So, useEffect is what we call a react hook.
>
> **[0:41](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=41)** Now, this is a feature that lets you perform what they call it side effects and function components.
>
> **[0:48](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=48)** So if you're familiar with the way the older version of react, use life cycle methods, this is a combination of a few methods like component did mount, component did update and component well on mount.
>
> **[1:02](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=62)** So it kind of combined in this useEffect you combine all three of those features into a single hook.
>
> **[1:11](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=71)** So let's go ahead and use that now that we've imported it.
>
> **[1:15](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=75)** So we'll say in the application actually I need to open this up right here and say, useEffect.
>
> **[1:22](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=82)** And in here I'm going to create an arrow function and I'll start off by creating a constant for my query called githubQuery.
>
> **[1:34](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=94)** And I'm just going to create a simple query in GitHub.
>
> **[1:38](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=98)** So I'll call this query and using the tick marks, I'm going to just put in a sample query that I would send in to the [[GraphQL]] explores.
>
> **[1:52](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=112)** The same thing that you would type in the GraphQL Explorer.
>
> **[1:55](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=115)** A lot of times you can just go to the GraphQL Explorer and try the query that you want.
>
> **[1:59](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=119)** So the query that I will type in, or that I want to grab is going to be just a query for the viewer and I'm going to get the viewer's name.
>
> **[2:09](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=129)** So you can actually open this up and just copy it from there.
>
> **[2:13](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=133)** So I'm going to copy this and then go back into my application.
>
> **[2:17](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=137)** And I'm just going to paste this query in here.
>
> **[2:21](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=141)** So you actually don't need this [[Microsoft Word|word]] query in here.
>
> **[2:24](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=144)** And if you would have hit the predefined button, it actually gets rid of that, but it's going to copy this part right here, and then I'll paste it.
>
> **[2:35](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=155)** You got to make sure that my closing tick markets on its own sort of line.
>
> **[2:40](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=160)** So let's try that.
>
> **[2:42](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=162)** So that's the query that I'll be performing.
>
> **[2:44](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=164)** Another tip here is, I do like to end that in my things nicely.
>
> **[2:48](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=168)** So this query should probably be something like this.
>
> **[2:52](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=172)** So I know that if I go back into my GraphQL query and I'm actually going to hit Command bracket or right bracket to give it two indents and then I can copy this with the proper indents for my applications.
>
> **[3:05](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=185)** Now, when I paste this, it looks like it needs another one.
>
> **[3:08](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=188)** So let's do one more.
>
> **[3:10](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=190)** So now when I paste this quick because I'll be doing that some, then it's going to have the right and dentations that it looks pretty with my application.
>
> **[3:18](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=198)** So in addition to that, so this useEffect is going to define this query and then I'm going to use the [[Fetch]] API.
>
> **[3:29](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=209)** So this is just a regular [[JavaScript]] API and I'm going to use the github object that I imported from db.js and I'm going to read the base URL.
>
> **[3:41](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=221)** That's the URL of the GitHub API itself, and I'm going to pass along an object here that is going to say method.
>
> **[3:51](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=231)** And the method needs to be POST.
>
> **[3:53](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=233)** You can use a [[Git]] method, but not when you use headers.
>
> **[3:59](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=239)** So let's go back here, method: "POST" and then I'm going to use headers.
>
> **[4:06](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=246)** And I already have that defined in my db.js file.
>
> **[4:11](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=251)** So this will say github.headers, and as the body I'm going to use [[JSON]].stringify.
>
> **[4:19](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=259)** So this is a method that converts some JSON data which we're going to be reading from this GitHub query into a string.
>
> **[4:28](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=268)** So we'll pass along to the githubQuery variable that we defined and with fetch, fetch is a promise based API.
>
> **[4:37](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=277)** So then you're going to receive a response from the server hopefully everything goes well.
>
> **[4:43](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=283)** And I'm going to take that response and convert it to JSON because of the response you're going to get is essentially what would happen if we click on this button right here, you're going to get this as the response.
>
> **[4:56](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=296)** But we need to convert it into JSON and if that is successful, then I'm going to receive some data which I will then pass along.
>
> **[5:07](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=307)** And for right now, we'll just output it to the console and then we should add an error or something to just handle our errors.
>
> **[5:16](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=316)** So this is going to do another error function here and then I'll just do a console log with whatever error I get back.
>
> **[5:25](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=325)** I don't really need this comma right here.
>
> **[5:30](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=330)** Let's check it out and see if it worked.
>
> **[5:33](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=333)** So if you have your application already running, let's go ahead and make this bigger and pull up the console.
>
> **[5:41](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=341)** So I'll do a right click and inspect and go to the Console here.
>
> **[5:47](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=347)** And it looks like we are getting an object and the object has some data and we're receiving the data that we need for our applications.
>
> **[5:57](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=357)** There's a couple of warnings but just ignore them for right now.
>
> **[5:59](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=359)** It's just complaining that GitHub is defined but never use, which isn't a big deal.
>
> **[6:07](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=367)** I'm not even sure what that means because it's actually been defined and it's being used right here.
>
> **[6:12](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=372)** So we'll just ignore the warnings for right now.
>
> **[6:14](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=374)** But you can see that we are getting the data and we get the data into an object that is in the JSON format.
>
> **[6:22](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=382)** That object starts with data already.
>
> **[6:24](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=384)** So it actually, the data comes in a variable called data.
>
> **[6:28](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=388)** And then we get a JSON object that has the viewer information and then the name.
>
> **[6:33](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=393)** So this is similar to what you would see right here.
>
> **[6:36](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=396)** You get an object.
>
> **[6:38](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/retrieving-data?u=76281980&t=398)** The first sort of level of the object is data and then you get a viewer and then the name and all that comes back into an object that then we can access.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (7), [[JSON]] (6), [[GraphQL]] (4), [[React.js|React]] (3), [[Fetch]] (3)
> **Env Vars:** json (6), api (4), url (2), post (2)
> **Code Identifiers:** useeffect (5), githubquery (2)
> **Tools:** github (7)
> **Definitions:** is a  (4)
> **File Paths:** db.js (3)
> **CLI Commands:** make (2), git (1)
> **UI Navigation:** go to (2), click on (1)

#### [Generating state](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-state?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-state?u=76281980&t=0)** - [Instructor] So now we need to find a way of creating the variable that we need, so that we can access it in our application.
>
> **[0:08](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-state?u=76281980&t=8)** So in this component, we want to go ahead and print out the name of the user.
>
> **[0:12](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-state?u=76281980&t=12)** Now to do that, we're going to to have to use another hook called useState.
>
> **[0:17](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-state?u=76281980&t=17)** So if you remember from previous versions of [[React.js|react]] you could define a variable called state that you could access in your applications.
>
> **[0:27](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-state?u=76281980&t=27)** The way that this works with hooks is by allowing you to use another feature called the useState.
>
> **[0:33](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-state?u=76281980&t=33)** So you call it into the component that you want to use that state with and then you get the ability to create a variable.
>
> **[0:41](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-state?u=76281980&t=41)** So here, I'm going to say, let and I'm going to create a variable called userName.
>
> **[0:47](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-state?u=76281980&t=47)** And then I'm going to also have the ability of setting the value of that variable with a function.
>
> **[0:53](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-state?u=76281980&t=53)** So, this user effect is going to give you access to creating these two functions.
>
> **[0:59](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-state?u=76281980&t=59)** So userName here, and that is going to useState and it's going to initialize it into an empty string.
>
> **[1:10](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-state?u=76281980&t=70)** So, that means that now I get this value that I can use as a global variable and I can set that value with this method right here.
>
> **[1:21](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-state?u=76281980&t=81)** So it's great out because I'm not using them yet.
>
> **[1:24](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-state?u=76281980&t=84)** So let's go ahead and take care of that.
>
> **[1:27](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-state?u=76281980&t=87)** What I want to do is when I get my data, I want to go ahead and use the method that I just created called setUserName and then go through my data.
>
> **[1:37](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-state?u=76281980&t=97)** So if you remember, if I do inspect here, it should still be showing me the object.
>
> **[1:44](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-state?u=76281980&t=104)** So let's go ahead and actually delete this and just refresh.
>
> **[1:49](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-state?u=76281980&t=109)** Now it's actually showing me a warning but it's just telling me the same thing that my editor is telling me that I'm not using those.
>
> **[1:56](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-state?u=76281980&t=116)** Just ignore that.
>
> **[1:58](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-state?u=76281980&t=118)** So here you can see that the data comes back in a variable called data, and then I have the viewer object and then there I have the name.
>
> **[2:06](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-state?u=76281980&t=126)** So I need to replicate that.
>
> **[2:08](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-state?u=76281980&t=128)** And so I will say, setUserName, data.data because the first data is the variable that I place this [[JSON]] into, and then it returns the thing called data in there.
>
> **[2:22](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-state?u=76281980&t=142)** And then I need to say viewer and the variable in there is called name that has the name.
>
> **[2:28](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-state?u=76281980&t=148)** So now, I'm setting that the value of that variable, and notice that this is no longer grayed out with this method, but I haven't used it anywhere yet.
>
> **[2:37](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-state?u=76281980&t=157)** And so then whenever you want to create a variable, and what I'm going to do is just create another paragraph after this H1.
>
> **[2:45](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-state?u=76281980&t=165)** Now I'll do a paragraph and I'll say, Hey there and now I can use that variable in here.
>
> **[2:52](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-state?u=76281980&t=172)** So, I'll just say username and once this refreshes, you could see that he grabbed the data from the [[GitHub]] [[GraphQL]] API and it created a variable that my component had access to and it was able to read for that to me.
>
> **[3:09](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-state?u=76281980&t=189)** So another thing that you can do when you're looking at these is take a look at the inspector and you can see that data coming in.
>
> **[3:19](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-state?u=76281980&t=199)** If you have the react Chrome extension installed, you should see a couple of additional sort of items.
>
> **[3:27](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-state?u=76281980&t=207)** If you make this window really big, you'll be able to see the profiler as well as the components.
>
> **[3:32](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-state?u=76281980&t=212)** If you click on components, you can see here that it's loading up the app.
>
> **[3:37](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-state?u=76281980&t=217)** And right now that app has a state of my name right now.
>
> **[3:42](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-state?u=76281980&t=222)** So, let's go ahead and refresh and you can see that when this first loads, the state doesn't have anything.
>
> **[3:47](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-state?u=76281980&t=227)** So what it's doing, it's going to GitHub, fetching the data from the GraphQL API, retrieving that data and adding it into the state right here.
>
> **[3:56](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-state?u=76281980&t=236)** So that's great.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (2), [[GitHub]] (2), [[GraphQL]] (2), [[JSON]] (1)
> **Code Identifiers:** usestate (3), username (2), setusername (2)
> **Env Vars:** api (2), json (1)
> **CLI Commands:** find (1), make (1)
> **Tools:** github (2)
> **Definitions:** means that (1), is called (1)
> **UI Navigation:** click on (1)
> **Warnings:** warning (1)

#### [Creating a query component](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-a-query-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-a-query-component?u=76281980&t=0)** - [Instructor] It's always a good idea to separate your code so that you have different component for pieces that you need.
>
> **[0:07](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-a-query-component?u=76281980&t=7)** And I know that this query is going to get pretty complicated.
>
> **[0:11](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-a-query-component?u=76281980&t=11)** So, I'm going to set it apart as a separate file.
>
> **[0:15](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-a-query-component?u=76281980&t=15)** So, I'm going to grab this const thing right here and I'm going to create a new document, and I'm going to call this Query.js and then I'm just going to paste it in here.
>
> **[0:28](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-a-query-component?u=76281980&t=28)** So, let's go ahead and save this.
>
> **[0:31](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-a-query-component?u=76281980&t=31)** And I also need to, because this is going to be a component now, I need to go ahead and export this as the default item.
>
> **[0:41](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-a-query-component?u=76281980&t=41)** And I'm going to just export the githubQuery, a little object that I created up there.
>
> **[0:47](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-a-query-component?u=76281980&t=47)** So, just like before, except we're exporting this now.
>
> **[0:51](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-a-query-component?u=76281980&t=51)** And then in App.js, let's go back in there, we're going to have to import this.
>
> **[1:00](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-a-query-component?u=76281980&t=60)** So, we'll do an import here.
>
> **[1:02](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-a-query-component?u=76281980&t=62)** We'll just call it query, this is the name of it in this component.
>
> **[1:07](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-a-query-component?u=76281980&t=67)** And then we'll say from the query file that we just created we don't have to put the JS extension to that.
>
> **[1:15](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-a-query-component?u=76281980&t=75)** All right so, now that we've imported it, let's go ahead and use it.
>
> **[1:21](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-a-query-component?u=76281980&t=81)** So, instead of calling githubQuery here, we'll just call it with its new name, and it's just called query.
>
> **[1:28](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-a-query-component?u=76281980&t=88)** So, let's go ahead and save this.
>
> **[1:29](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-a-query-component?u=76281980&t=89)** And let's take a look at our application.
>
> **[1:32](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-a-query-component?u=76281980&t=92)** It should still work the same way, it's just that we are extracting everything from a separate file, which is a little bit better.
>
> **[1:40](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-a-query-component?u=76281980&t=100)** Our query is going to get pretty large as this application grows, so it's always a good idea to try to separate as much as you can into different sub-components.

> [!info]- Semantic Content
>
> **File Paths:** query.js (1), app.js (1)
> **Code Identifiers:** githubquery (2)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Using the Callback hook](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-callback-hook?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-callback-hook?u=76281980&t=0)** - [Instructor] Now you may have noticed when you were looking at the console in our application that our application was retrieving the data more than once.
>
> **[0:09](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-callback-hook?u=76281980&t=9)** So let's go ahead and refresh this and you can see that.
>
> **[0:12](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-callback-hook?u=76281980&t=12)** So by reloading, we get the data from the server twice.
>
> **[0:16](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-callback-hook?u=76281980&t=16)** That's because the user fact feature will rerun there this data, as we [[Fetch]] it from the server and it might do that more than once.
>
> **[0:25](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-callback-hook?u=76281980&t=25)** As our application grows, this is going to become more of a problem.
>
> **[0:28](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-callback-hook?u=76281980&t=28)** So we can use a different hook called useCallback to optimize how, and when items are rendered in our application.
>
> **[0:36](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-callback-hook?u=76281980&t=36)** This is called memorization and essentially it's going to remember our data and not update it unless we need it to.
>
> **[0:44](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-callback-hook?u=76281980&t=44)** So let's go ahead and use this in our application.
>
> **[0:48](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-callback-hook?u=76281980&t=48)** So I'm going to save this and what I'm going to do is take most of this fetch out of the use effect section here, and I'm going to create a new variable here or a new method.
>
> **[1:02](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-callback-hook?u=76281980&t=62)** So const fetchData.
>
> **[1:06](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-callback-hook?u=76281980&t=66)** And we'll have it do the useCallback hook.
>
> **[1:10](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-callback-hook?u=76281980&t=70)** And in here, we're going to paste that fetch method and then at the end of this, go ahead and save this.
>
> **[1:19](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-callback-hook?u=76281980&t=79)** I don't think it's going to work until I wire all this up.
>
> **[1:21](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-callback-hook?u=76281980&t=81)** So let's go ahead and make that window a lot bigger.
>
> **[1:24](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-callback-hook?u=76281980&t=84)** Now I'm going to take, use a fact and have it call this new method, and then I'm going to have it use this method as a dependency.
>
> **[1:37](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-callback-hook?u=76281980&t=97)** And this actually needs to be put in an array.
>
> **[1:39](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-callback-hook?u=76281980&t=99)** So let's go ahead and save this.
>
> **[1:41](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-callback-hook?u=76281980&t=101)** And I also need to specify a list of dependencies that will cost this callback to be used.
>
> **[1:49](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-callback-hook?u=76281980&t=109)** So let's go ahead and add right now on MTR.
>
> **[1:53](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-callback-hook?u=76281980&t=113)** And you'll see that I will be adding things in here, as I need certain elements that are going to be changing to go ahead and trigger a new fetch of the data.
>
> **[2:05](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-callback-hook?u=76281980&t=125)** And actually, I think I need to rewrite this a little bit.
>
> **[2:07](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-callback-hook?u=76281980&t=127)** So this should just be fetchData, it's going to call that method.
>
> **[2:14](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-callback-hook?u=76281980&t=134)** Let's going and get rid of this.
>
> **[2:17](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-callback-hook?u=76281980&t=137)** And then actually need a comma and then the dependency of fetchData here.
>
> **[2:25](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-callback-hook?u=76281980&t=145)** So now let's take a look at our application.
>
> **[2:27](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-callback-hook?u=76281980&t=147)** It should have stayed the same.
>
> **[2:29](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-callback-hook?u=76281980&t=149)** And if we inspect here and we go to the console let's go ahead and clear this out and just do a refresh.
>
> **[2:38](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-callback-hook?u=76281980&t=158)** And you'll see that it only loads once.
>
> **[2:40](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-callback-hook?u=76281980&t=160)** And as we go through the building of this application you will notice that I'm going to add different dependencies that are going to trigger a new fetching of the data.
>
> **[2:51](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-the-callback-hook?u=76281980&t=171)** So I can very clearly control when that new data needs to be fetched, as opposed to letting [[React.js|react]] take care of it, which can cause some of these reloading problems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (4), [[React.js|React]] (1)
> **Code Identifiers:** fetchdata (3), usecallback (2)
> **CLI Commands:** make (1)
> **Env Vars:** mtr (1)
> **UI Navigation:** go to (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)


### 4. Building the React App

[↑ Back to Table of Contents](#table-of-contents)

#### [Generating a list of repos](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=0)** - [Instructor] So, it's time to start listing some repos in our application, and to do that, I'm going to need a new query.
>
> **[0:08](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=8)** I really highly suggest that whenever you're creating a query, you just go to the Explorer.
>
> **[0:13](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=13)** It has a lot of additional features that will make it easier for you to create it.
>
> **[0:19](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=19)** I mean, when you're here in this text editor, this is just text.
>
> **[0:23](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=23)** So there's none of the help that you get in the Explorer.
>
> **[0:26](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=26)** So have that open in a separate window and create your query, 'cause I can hit command or control space here.
>
> **[0:32](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=32)** And I get this pop-up where I can start typing in something like, say, I want repositories here, and I can use that little pop-up menu.
>
> **[0:40](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=40)** It just makes it a lot easier.
>
> **[0:42](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=42)** And as I'm typing things that I know I need to type in here, it's actually just giving me hints and help them meet.
>
> **[0:48](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=48)** It's really fantastic.
>
> **[0:50](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=50)** So I'm going to get the nodes and I'm going to get the name.
>
> **[0:55](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=55)** I'll get an ID and the description which is the name.
>
> **[1:02](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=62)** I don't really need to do this but I'll do name, description and ID, and maybe I'll also get the URL just to have it for later.
>
> **[1:10](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=70)** So let's go ahead and grab this from here.
>
> **[1:13](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=73)** And remember you can use command bracket to push this in, to make sure that it's a little bit easier when you paste it.
>
> **[1:20](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=80)** If you hit prettify, all that's going to go away.
>
> **[1:22](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=82)** So do it before you hit prettify.
>
> **[1:24](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=84)** And remember you can always go to history and see all your previous queries that you've done.
>
> **[1:29](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=89)** So if you screw up, you can just go see what you've done before.
>
> **[1:33](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=93)** All right so let's go back here, and I'm going to paste this.
>
> **[1:36](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=96)** So I know it's a good query now, because the graph QL Explorer didn't give me any errors.
>
> **[1:42](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=102)** Otherwise, at the very least, if you're going to add something here, go ahead and copy it and paste it into the Explorer and test that out before you go too far because it is really annoying when you have an error in your query because you just typed it in here.
>
> **[1:56](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=116)** And so, let's go into our application now.
>
> **[2:02](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=122)** And so we'll start off by creating a new state variable and we're going to call this repo list.
>
> **[2:09](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=129)** And of course we have to create the set repo list method.
>
> **[2:15](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=135)** And this is going to work with use state and it's going to have an initial value of knowledge, just like nothing.
>
> **[2:24](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=144)** Alrighty, then when I get this data from the server, I'm going to create a variable because these kind of get annoying when they're extremely long.
>
> **[2:37](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=157)** So I'm going to create a variable here called viewer, just a temporary variable.
>
> **[2:42](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=162)** And this is just going to get the data from the viewer.
>
> **[2:47](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=167)** And I forgot to put an equal sign there.
>
> **[2:49](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=169)** And then I will use the set username method X, I already have it down here.
>
> **[2:55](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=175)** So I'll take that set username and just pass along viewer that name.
>
> **[3:01](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=181)** And then, I will use setRepoList.
>
> **[3:05](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=185)** And that's going to be viewer dot repositories and then get the notes from the repositories.
>
> **[3:13](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=193)** So I'll get rid of that console log.
>
> **[3:15](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=195)** And now you are outputting, you use this viewer variable, so that you don't have to type in data data all the time.
>
> **[3:25](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=205)** So I don't know why I think that's so annoying.
>
> **[3:28](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=208)** All right, so now it's time to start outputting this into our application.
>
> **[3:33](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=213)** So we just need to write some really boring [[HTML]].
>
> **[3:38](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=218)** And what I'm going to do, also, is go ahead and put this on a method here.
>
> **[3:48](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=228)** So right underneath here, what I want to do is print out that repo list.
>
> **[3:51](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=231)** But I know that, at the beginning, that repo list is going to have a null value.
>
> **[3:56](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=236)** So it's going to cost an error unless we do something like this.
>
> **[4:00](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=240)** So I'm going to just say repoList and then use this notation here, parentheses to just output.
>
> **[4:09](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=249)** Then I'll just go ahead and output my [[JavaScript]].
>
> **[4:12](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=252)** Technically, this is JSX.
>
> **[4:14](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=254)** So we have to use className, and then I'll add some bootstrap classes here.
>
> **[4:20](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=260)** So this will be list-group and list-group-flush, which is going to give it a little bit of breathing room.
>
> **[4:29](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=269)** Actually, it's going to get rid of all the breathing and then we need to go ahead and app with each of the items.
>
> **[4:35](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=275)** So, I'm going to say retake that list that I get and use the map method.
>
> **[4:44](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=284)** And then here I'm going to create a temporary variable called repo, and now I can output each of the list items.
>
> **[4:53](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=293)** So className once again, and each one of these is going to get list-group-item.
>
> **[5:01](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=301)** And whenever I output a list of things, they all need to have a key.
>
> **[5:06](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=306)** Otherwise, the compiler's going to complain, so let's not have it do that.
>
> **[5:12](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=312)** So we'll say repo that ID, and I'm going to convert it to string.
>
> **[5:18](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=318)** I think the ID is going to come out as a string anyways, but we were just in case making sure that it's a strength.
>
> **[5:27](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=327)** It's a little bit safer to make sure that's something is a string.
>
> **[5:31](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=331)** So className here, we're going to create the link now.
>
> **[5:34](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=334)** And this is going to be a headline.
>
> **[5:38](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=338)** This is cool about Bootstrap.
>
> **[5:39](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=339)** You can create something that looks like a headline even though it's a link.
>
> **[5:44](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=344)** So you can say, make it like a headline level five and margin bottom zero, text-decoration-none, so that it doesn't look like a link.
>
> **[5:55](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=355)** It doesn't have like the underline, which for some reason I find somewhat offensive.
>
> **[6:01](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=361)** So for the href, we are going to pass along the repo URL, and then we are going to output the repo name here, and then we'll do a paragraph, make it a small size.
>
> **[6:18](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=378)** I use small quite a bit.
>
> **[6:20](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=380)** And then we'll do the repo description.
>
> **[6:23](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=383)** I really have been using tailwind a lot.
>
> **[6:26](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=386)** And I'll probably do a course on that at some point.
>
> **[6:29](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=389)** I really love it, because it just gives you a lot of sizes for things, they're a little bit more of a pain to use than Bootstrap.
>
> **[6:36](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=396)** Bootstrap just has a lot of built-in components that are easier to work with, but let's see if I missed anything.
>
> **[6:43](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=403)** Yeah, it looks like instead of a curly brace here, I'm supposed to have used a parentheses here, so hopes.
>
> **[6:51](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=411)** So common mistake.
>
> **[6:53](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=413)** This should be then two parentheses down here.
>
> **[6:57](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=417)** I probably don't need a semi-colon here.
>
> **[7:01](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=421)** Unfortunately, sometimes when you save, if you have something like PrintAir, it'll kind of try to fix your code for you.
>
> **[7:07](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=427)** So that's how it should look like.
>
> **[7:09](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=429)** Let's see if we have something that looks great, yeah.
>
> **[7:12](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=432)** So now, we were able to take our list of repos that we get from graph QL and output them as a list.
>
> **[7:20](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=440)** This is looking pretty good.
>
> **[7:21](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=441)** It's a good beginning.
>
> **[7:22](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=442)** And there's a lot more we're going to do with this, but just the ability to read the data from the database by making a query, I think is pretty awesome.
>
> **[7:31](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=451)** And this is just a list of my repos.
>
> **[7:34](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/generating-a-list-of-repos?u=76281980&t=454)** Clearly you will be seeing a list of yours, but it's a good start for our application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1), [[JavaScript]] (1)
> **CLI Commands:** make (5), find (1)
> **Code Identifiers:** classname (3), setrepolist (1), repolist (1)
> **Env Vars:** url (2), html (1), jsx (1)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Warnings:** common mistake (1)

#### [Using search queries](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=0)** - [Instructor] Although, I can get my repository information like this, this is going to show me information for whoever is viewing the application.
>
> **[0:07](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=7)** And what I want is a little bit different, I want to be able to get a specific account and then I'm going to eventually want to search through that account by creating a search query.
>
> **[0:18](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=18)** So this is not the best way to get the information.
>
> **[0:23](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=23)** So what I'm going to do, is I'm going to take this out.
>
> **[0:25](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=25)** Actually, I'm going to go to the [[GraphQL]] Explorer because I did tell you that it's a much better way of doing this sort of thing.
>
> **[0:32](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=32)** So in our query, we're going to extract all these repositories from there.
>
> **[0:39](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=39)** And we're still going to want the user's name because we're saying, "hello username."
>
> **[0:44](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=44)** But instead, we're going to use a search command here.
>
> **[0:48](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=48)** And then on the search, we're going to ask it to return a query.
>
> **[0:53](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=53)** And so this is the equivalent of when you go to [[GitHub]] and you do a search, you may have noticed when you type a search, it'll actually create these different search parameters that go in the query.
>
> **[1:06](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=66)** Or if you've done an advanced search it does something like this.
>
> **[1:10](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=70)** It allows you to type in something like user and then your username.
>
> **[1:15](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=75)** So you could put your username on yours and then you can also do things like add a sort method.
>
> **[1:22](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=82)** So what I'll do is I'll get the last updated repositories in descending order and in addition to that, I need to type in here that I want only repository.
>
> **[1:36](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=96)** So I'll do type repository.
>
> **[1:38](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=98)** Let's go ahead and make this a lot smaller here.
>
> **[1:41](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=101)** And then I'm going to ask for the first 10.
>
> **[1:48](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=108)** By doing this, I'll be able to then get all of the nodes.
>
> **[1:54](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=114)** So, I need to type in here nodes and what I want from the nodes, the same thing that I had before.
>
> **[2:02](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=122)** So let's see if I still have it copied to the clipboard.
>
> **[2:06](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=126)** I want the same stuff that I had before, name, description, ID and URL.
>
> **[2:13](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=133)** But what I'm going to do is do a fragment.
>
> **[2:17](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=137)** So when you get a search, you have to do this triple dot thing and then do a fragment that returns just to repositories because when you search it, it's actually able to search through a lot of different places.
>
> **[2:32](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=152)** So it can search for issues and all types of other things.
>
> **[2:36](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=156)** So we have to add this additional section here and I know it looks ugly, but I just paste it, my data that I wanted in there.
>
> **[2:43](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=163)** So I'm going to hit prettify here and then I'll hit this play button and show you the now I'm getting the repositories.
>
> **[2:50](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=170)** It looks similar except that I am sorting them but I'm able to specify a user.
>
> **[2:57](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=177)** Now, the other cool thing in here, is that I can put in something like, let's do tutorial here in my query and now it's going to return repositories with that text in there.
>
> **[3:11](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=191)** So see if you can see the keyword tutorial here.
>
> **[3:14](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=194)** So this is going to become more useful in the future but for now, we're just going to get the information sort of like the way we had done before, except we are asking for a search parameter, we've isolated the viewer here and created this search parameter with all the same stuff that we had before.
>
> **[3:32](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=212)** So, let's go ahead and indent it a few times, copy it out of here and then replace our query here.
>
> **[3:41](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=221)** So, it's looking pretty good.
>
> **[3:43](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=223)** Let's see if it actually will load up.
>
> **[3:45](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=225)** It might not load because query is now in a slightly different structure.
>
> **[3:50](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=230)** So we'll need to fix this up in app.js.
>
> **[3:53](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=233)** And what I'm also going to do is, since it's a little bit better to put things on their own component, I'm going to componetize all of this list, item stuff.
>
> **[4:06](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=246)** So I don't want it to be here.
>
> **[4:08](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=248)** What I'm going to do is I'm going to create a new component and I'm going to call this component RepoInfo.
>
> **[4:14](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=254)** And for the key, it's going to get past the repo.id
>
> **[4:23](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=263)** and it's going to get past also the repo.
>
> **[4:28](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=268)** So, I need to go ahead and import this.
>
> **[4:31](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=271)** So I'll say import RepoInfo from something that I'll create in just a minute RepoInfo.
>
> **[4:39](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=279)** I probably should have made that file first, but let's go ahead and do it now.
>
> **[4:43](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=283)** New file RepoInfo.js and so for this, I'll do a const RepoInfo and this RepoInfo is going to get past along some information from our main application, mainly the repository that we want to output here.
>
> **[5:05](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=305)** And so we'll use an arrow function that's going to return and then I'll paste my code from before.
>
> **[5:15](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=315)** So I always, some reason, I'm kind of used to doing curly braces and it should just be the parentheses cause that's how it works better with JSX.
>
> **[5:25](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=325)** So let's go ahead and save this and we'll go back into app.js.
>
> **[5:33](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=333)** And now I need to also make sure that I properly get the information when we retrieve the data from our [[Fetch]].
>
> **[5:43](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=343)** So after viewer, I'm going to create another variable here const repos, and it's in a different structure now.
>
> **[5:52](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=352)** So Repos is actually going to be in data.data and then search nodes.
>
> **[6:01](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=361)** It's no longer under viewer as it was before, so it's in a different place.
>
> **[6:06](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=366)** And so I decided to create its own variable for it.
>
> **[6:09](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=369)** And then I can just say, repos here.
>
> **[6:14](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=374)** And now I should retrieve all the information and it looks like RepoInfo does not, oops, I missed the exporting, very important.
>
> **[6:25](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=385)** Whenever you create a component you have to export default and RepoInfo here.
>
> **[6:31](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=391)** So let's go ahead and save that.
>
> **[6:33](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=393)** Hopefully it'll fix everything up and you can see that it looks similar.
>
> **[6:37](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=397)** The advantage is that now we have the search capability and also we added a little bit of a sorting algorithm here and there's a lot more than you can do with this search queries.
>
> **[6:49](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/using-search-queries?u=76281980&t=409)** I really love this because of the ability to be able to do any sort of search that I could in GitHub and you'll see how we're going to build this up to give us an application with additional capabilities.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (2), [[GraphQL]] (1), [[Fetch]] (1)
> **File Paths:** app.js (2), repoinfo.js (1)
> **CLI Commands:** make (2)
> **Env Vars:** url (1), jsx (1)
> **Tools:** github (2)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Working with conditional classes](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=0)** - [Instructor] Let's take a look at how we can do something a little bit more useful with our application.
>
> **[0:05](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=5)** What I'd like to show is whether or not I'm subscribed to some of these repositories.
>
> **[0:10](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=10)** Now to do that, I need to modify my query to add a field called viewer subscription.
>
> **[0:18](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=18)** But this is going to show me a field that shows me whether or not I'm subscribed to this particular repository.
>
> **[0:24](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=24)** So let's go into the RepoInfo.js file, and we're going to need to modify this template to make it work with our new information.
>
> **[0:36](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=36)** So to do that after this list item, I'm going to create a div and I need to add some classes onto this.
>
> **[0:44](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=44)** So className and these are going to be some Flexbox classes, d-flex just to make it look nice, justify oops justify-content-between and align-items-center.
>
> **[1:04](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=64)** So, this div is going to have another div in it and these are just bootstrap divs.
>
> **[1:13](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=73)** I'm using bootstrap five here.
>
> **[1:15](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=75)** So, let's see d-flex and flex-column.
>
> **[1:19](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=79)** Although I don't think I'm using anything specific to bootstrap five quite yet.
>
> **[1:24](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=84)** And now I'm going to grab this anchor tag and this paragraph and move them in here.
>
> **[1:33](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=93)** Let's go ahead and save it.
>
> **[1:33](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=93)** So reformats it a little bit better, and now we're ready to add our new sort of section.
>
> **[1:39](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=99)** So this is just going to be a spam and that's why I'm using Flexbox because it's going to treat this div with whatever I put in here.
>
> **[1:48](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=108)** I don't know if it has to be a span, but that's how I made it.
>
> **[1:52](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=112)** So, span className.
>
> **[1:55](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=115)** So for these classes, I'm actually going to use conditional classes to show them.
>
> **[1:59](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=119)** So I don't really have to do that.
>
> **[2:02](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=122)** Let's go ahead and just to className, let's do them without the conditional classes first.
>
> **[2:09](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=129)** So px-1, py-1.
>
> **[2:12](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=132)** So this is just padding at the top and bottom and ms-1 so the new version of bootstrap and the one that just dropped, I think it's like beta one or think it's one right now changes the ability to put margin on the right and left.
>
> **[2:30](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=150)** And because it allows you to do right to left text, those have been renamed S for side and E for edge.
>
> **[2:40](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=160)** So that's what this means if you're into a bootstrap code inline block here, btn btn-sn and then I will just, I'll put this repost subcription here repo.viewerSubscription.
>
> **[3:04](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=184)** Let's see if we can get that information.
>
> **[3:06](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=186)** Yeah, so now you can see that for the most part, actually for all these repos, I'm actually subscribed.
>
> **[3:12](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=192)** So let's go ahead and change the quantity, twenty just so that we can see if we get any that are unsubscribed.
>
> **[3:20](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=200)** See, I can see that a few of them are unsubscribed down here.
>
> **[3:24](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=204)** So what I'm going to do is modify this RepoInfo.js to use some conditional classes to make them look different depending on whether they are subscribed or unsubscribed because I'm interesting and visually knowing that so it'd be better if they were able to stand out a little bit more.
>
> **[3:45](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=225)** So that's why I was going to show you how to do conditional classes, which I think is pretty cool.
>
> **[3:49](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=229)** So, what I want to do is I'll cut all this out, cut all these classes out and then I'm going to use an object here.
>
> **[3:58](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=238)** And this could be cool or not that cool depending on whether or not you love how [[React.js|react]] does classes and how jsx works.
>
> **[4:08](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=248)** So, I know that I want to add all these classes and in line still it's a doesn't look good in line block here, oops.
>
> **[4:15](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=255)** Error against the display inline-block-btn-btn-sm, and then I'm going to add some of these color classes.
>
> **[4:22](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=262)** So in here I'll do a parentheses, and so if repo that viewer subscription is subscribed
>
> **[4:34](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=274)** I think it comes back as capital subscribed.
>
> **[4:40](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=280)** Then I can use and this is what's called a turnery statement.
>
> **[4:45](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=285)** One of the coolest ways of doing if then statements with [[JavaScript]], which is heavily used in react.
>
> **[4:52](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=292)** So if the subscription is subscribed, then I will use the btn-success style.
>
> **[5:01](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=301)** So to give me a, I think it's a green color, is it the default.
>
> **[5:05](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=305)** And then I can do otherwise, go ahead and do a btn-outline-secondary.
>
> **[5:13](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=313)** See if it reformats it a little bit better, when I save it and so py means padding top and bottom on the Y axis in other words, and I think any data space here because these two classes will be added at the end of that.
>
> **[5:31](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=331)** Let's go ahead and see this, see how it works, open this up.
>
> **[5:35](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=335)** And you can see now that if I am subscribed, it's going to show me a green button, if I'm not, then it's going to show me the sort of gray outline which is a nice visual way of immediately knowing whether or not I'm subscribed to any of these.
>
> **[5:49](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=349)** I'm going to try to make maybe the buttons a little bit smaller.
>
> **[5:54](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=354)** As I mentioned, sometimes small we'll make them small enough but sometimes you have to go a little bit more.
>
> **[6:02](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=362)** So what I'll do is I'll add a style.
>
> **[6:03](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=363)** So you can actually add a style attribute in react and you just use double curly braces.
>
> **[6:09](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=369)** And then this is weird, you have to use on size object notation for them which is sort of odd.
>
> **[6:16](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=376)** So let's try that.
>
> **[6:18](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=378)** See, now the buttons are a lot smaller, which I think looks a little bit better and yeah just a nice visual way of seeing it whether or not I'm subscribed.
>
> **[6:28](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/working-with-conditional-classes?u=76281980&t=388)** And this conditional data is one good way of doing that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (3), [[JavaScript]] (1)
> **CLI Commands:** make (5)
> **Code Identifiers:** classname (3), viewersubscription (1)
> **File Paths:** repoinfo.js (2)
> **Definitions:** in other words (1), is a  (1)
> **Exercise Files:** template (1)
> **Analogies:** it's like (1)
> **Speakers:** - [instructor] (1)

#### [Reading license information](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=0)** - [Instructor] Another thing I want to to do with this project is help me track whether or not a project has the proper license or any license at all.
>
> **[0:09](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=9)** Sometimes I use [[GitHub]] for really quick projects and I want to go through and make sure that I am licensing them properly.
>
> **[0:18](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=18)** So, let's go back into the [[GraphQL]] Explorer, I'm going to add something called license info.
>
> **[0:25](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=25)** So I'll do that after URL and license info is an object and you have the option of adding all kinds of information here.
>
> **[0:35](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=35)** Now, the one that I'm going to use is called spdxId.
>
> **[0:41](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=41)** This is a short Id that is standard and there's a website actually that you can look for.
>
> **[0:47](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=47)** Just type in spdxId and it shows you all the licensees and their IDs which are really short versions of them.
>
> **[0:57](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=57)** So let's see if I click on this, you can see that some of these have no assertion which means it doesn't have a standard kind of license.
>
> **[1:07](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=67)** This one's BSD 2-clause.
>
> **[1:09](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=69)** There's probably some MIT licenses and a lot of them have no, what I want to be able to do is make sure that I identify which ones are no and then I can go check them out and see if that's okay because maybe it's a personal project that I'm not really putting out there so let's go ahead and I think it's pretty simple, I'm just going to to grab these three lines here and go back and paste.
>
> **[1:33](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=93)** I'll put them after viewer subscription here and I want to to hope that nothing's wrong with the query which it's not going to be a big deal for this little bit of code.
>
> **[1:45](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=105)** So, in this case, I'm going to go back into my RepoInfo file and I'm just going to output it and show you that I'm going to need a pretty complex way of analyzing what I'm getting back from the server to display my labels properly.
>
> **[2:07](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=127)** So in the simplest way, let's see, before this span right here, I'm going to sort of group my two labels into this section here that I'll put under this span.
>
> **[2:21](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=141)** So I'll put that one in there and then let's add some classes here, so className text-nowrap so that they don't stack on top of each other and also ms-3, which in Bootstrap is a margin of three units to one of the sides.
>
> **[2:41](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=161)** So remember, the new right and left are side and edge in Bootstrap.
>
> **[2:47](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=167)** And then I'm just going to say here, go ahead and I put repo.licenseInfo.spdxID.
>
> **[3:02](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=182)** That's really a tough one to remember, so, let's see what we get when we get that back up.
>
> **[3:09](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=189)** So, you can see that I'm getting an error here and that's because sometimes when I get data back from the server, some of that data comes along with a null value and the loop that is printing this out doesn't like to print out null values.
>
> **[3:28](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=208)** So what I can do is use one of [[JavaScript]]'s new operator types.
>
> **[3:33](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=213)** It's a question mark, and then a period instead of just a period and what that does, it's called an optional chaining operator.
>
> **[3:41](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=221)** It essentially converts the value coming in if it's no into an undefined value.
>
> **[3:48](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=228)** And so you can see that it will now whenever it encounters like a null, it's just not going to print it out.
>
> **[3:55](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=235)** And it's not going to give you an error.
>
> **[3:56](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=236)** So this very, very useful operator is going to come in handy when dealing with these items.
>
> **[4:03](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=243)** So now, I've got the value of the license info but I want to make that a little bit better.
>
> **[4:11](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=251)** So, I'm going to create a variable that is going to sort of give me different buttons depending on what the value of this is.
>
> **[4:22](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=262)** So, I'm actually going to modify this and I'm going to create a variable called license and I'll put it right here.
>
> **[4:31](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=271)** So that variable is going to go here in repo info, I'm going to create the license variable and then I'll do a switch.
>
> **[4:41](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=281)** So the switch will look for that information and then it's going to output different things.
>
> **[4:49](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=289)** So if the license comes across as undefined then, I'm going to output some stuff.
>
> **[4:58](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=298)** I have to remember that it's parentheses when I want to output something.
>
> **[5:02](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=302)** So I'm going to create a span here and let's do className, px-1 py-0.
>
> **[5:13](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=313)** So padding horizontally of one, vertically of zero and I'm going to put a one unit to the side and then some inline block and then some button code here, btn-sn-btn-danger.
>
> **[5:32](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=332)** So if it does come across as undefine it's going to give me a nice red button and we'll add the small font size.
>
> **[5:42](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=342)** So, I think it's like right here, we'll copy this style tag just to make it a little bit smaller, like this other one.
>
> **[5:53](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=353)** So here we'll do this, and this is going to say NO LICENSE
>
> **[6:04](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=364)** and then it's going to break.
>
> **[6:07](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=367)** And then we're going to have to put in some other values here.
>
> **[6:10](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=370)** So, it's going to then if it happens to be in quotations no assertion, I want to do something slightly different.
>
> **[6:25](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=385)** Let me save this for now.
>
> **[6:27](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=387)** And let's see this one for no assertion.
>
> **[6:32](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=392)** I'm going to do a warning button here and then I'm going to output the value of this thing instead of no license.
>
> **[6:43](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=403)** So here I don't need, if I'm just outputting the value I don't need that question mark.
>
> **[6:49](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=409)** So, it does another break and then that default will be, again I'm just going to copy one of these, oops, so it looks very daunting, but it's just really the same thing over and over with different styles.
>
> **[7:07](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=427)** So, this will be outline-success.
>
> **[7:14](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=434)** Let's check it out, see what we get now.
>
> **[7:16](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=436)** So now we get these nice little labels that as I'm scrolling through this at a glance, I can see if something doesn't have a license or if it has a proper spdxId.
>
> **[7:29](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=449)** It does have a valid spdxId license, then it's going to show me this kind of style.
>
> **[7:35](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=455)** And then if there is a license, but it's not a sort of standard license, then it shows me this kind of yellow button, which is really cool.
>
> **[7:44](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/reading-license-information?u=76281980&t=464)** And that way I can quickly look at a glance and see what's going on with my repos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (1), [[GraphQL]] (1), [[JavaScript]] (1)
> **Code Identifiers:** spdxid (5), classname (2), licenseinfo (1)
> **Definitions:** is a  (3), is an  (1), is called (1)
> **CLI Commands:** make (4)
> **Env Vars:** url (1), bsd (1), mit (1), license (1)
> **Tools:** github (1)
> **UI Navigation:** click on (1)
> **Analogies:** it's like (1)


### 5. Adding Interactive Features

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating dynamic queries](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=0)** - [Instructor] It's time to start programming some other functionality for controlling our list.
>
> **[0:05](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=5)** So to take care of that, I'm going to create some new variables.
>
> **[0:08](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=8)** I'll start with a pageCount variable here.
>
> **[0:15](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=15)** And I'll go ahead and take care of that with useState.
>
> **[0:21](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=21)** Now initialize that.
>
> **[0:22](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=22)** For right now, we will look for items that have the keyword slides in them.
>
> **[0:29](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=29)** So I have a few slides on different projects.
>
> **[0:32](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=32)** That will be a good one to start with.
>
> **[0:34](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=34)** Let's go ahead and copy this one couple of times.
>
> **[0:38](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=38)** Then I will use a queryString.
>
> **[0:42](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=42)** And I got to remember to capitalize it here 'cause that's the sort of style for this.
>
> **[0:48](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=48)** And it's actually for queryStrings I want to have the keyword slides.
>
> **[0:53](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=53)** But for the pageCount, I'll just pass along a number of 10 items.
>
> **[0:59](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=59)** Then the last one will be totalCount.
>
> **[1:06](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=66)** So this would be how many items I receive back from querying the database.
>
> **[1:11](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=71)** All right, so, what I'm going to do in here is create a new constant or the queryText because right now, when I look for the data in the database, I'm taking the query that comes from the file, and I'm using [[JSON]].stringify, but I'm going to create a variable like I've done for other things to make it like I did for some of these things down here just to make it easier to find these 'cause it gets kind of complicated after a while.
>
> **[1:44](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=104)** So here I'll create this variable called queryText, and I'm using it up here.
>
> **[1:52](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=112)** So queryText is going to be JSON.stringify.
>
> **[1:56](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=116)** And then I'm going to call the query method.
>
> **[1:59](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=119)** So the query method is what I get when I look for the Query.
>
> **[2:04](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=124)** Right now, the query is just really a string.
>
> **[2:08](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=128)** What I'm going to do is convert this query into a function that I can send some variables into.
>
> **[2:15](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=135)** So I'm going to use this query method that I'll be creating and pass along two variables: pageCount and my queryString.
>
> **[2:25](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=145)** And this is when this array right here becomes useful.
>
> **[2:31](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=151)** Remember that the useCallback hook will take care of memorizing what we get back from [[Fetch]], but I do want it to keep track of when certain variables change, I want it to reprocess my fetch command.
>
> **[2:48](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=168)** The interface is telling me here that it's missing these two dependencies that it needs in order to get the data back.
>
> **[2:55](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=175)** So we'll put in here pageCount, it's actually telling me which ones too, so that's pretty cool, and queryString.
>
> **[3:03](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=183)** So now, if any of those changes, then it's going to rerun the fetch command for me, which is cool because I'm going to be creating some interface elements that will allow me to modify those a little bit later on.
>
> **[3:16](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=196)** So let's see, constant.
>
> **[3:19](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=199)** And, of course, for the totalCount, I need to send a null value here, so.
>
> **[3:27](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=207)** Let's go back into our query and convert it.
>
> **[3:31](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=211)** So we'll go back in here.
>
> **[3:32](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=212)** And to convert this into a function that accepts some values, then we're going to have to pass along some data, so pageCount.
>
> **[3:42](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=222)** I'll just call them in here also, pageCount and queryString, right?
>
> **[3:46](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=226)** And then instead of just, you know, querying this query, I'm going to return the query.
>
> **[3:52](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=232)** So I'm going to need to grab this query and go ahead and put it inside this return statement here.
>
> **[3:59](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=239)** And so this also needs to have an arrow function here.
>
> **[4:06](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=246)** All right, that's looking pretty good, except that now what I can do is add some of these variables.
>
> **[4:15](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=255)** So when I'm searching here, I can put in a variable so that it includes whatever queryString I'm going to include when I do a search, still look for the user:planetoftheweb.
>
> **[4:29](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=269)** And instead of hard coding a number here, I can pass along the number that I receive into this function, so pageCount.
>
> **[4:38](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=278)** Then I need to get one more thing from the database.
>
> **[4:42](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=282)** So in addition to nodes, I'm going to get back also the amount of nodes I have.
>
> **[4:48](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=288)** So this is going to be in a variable called repositoryCount that will tell me how many nodes I have so that I can use that in a total.
>
> **[4:56](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=296)** All right, so, let's go back into our App.js file and finish this off, so let's see.
>
> **[5:05](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=305)** So right up here, I'm going to create a variable for total, and it's going to use that repositoryCount variable that I just extracted.
>
> **[5:17](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=317)** Right, and then I'm going to use the setTotalCount method and pass along that total that I now have, the total.
>
> **[5:27](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=327)** And also, I still have some of the other information about the queryString.
>
> **[5:34](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=334)** So for right now, I am initializing the queryString and the pageCount.
>
> **[5:40](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=340)** Just ignore that these aren't being assigned.
>
> **[5:43](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=343)** You may get a warning in the console, but don't worry about it.
>
> **[5:47](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=347)** We'll be, you know, playing with that a little bit later on.
>
> **[5:50](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=350)** But for right now, let's just go ahead and output something to the screen so that we can see that it is reading everything properly.
>
> **[5:57](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=357)** So we'll do a paragraph here, and then we'll just do a bold here that says Search for:, and then we'll put in the queryString, the pipe character, and let's see, we'll just copy this a couple of times.
>
> **[6:15](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=375)** So Search for:, and then we'll do like, second one will be Items per page:, and this will use a pageCount.
>
> **[6:26](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=386)** And then this will be like Total results:, and this will use totalCount.
>
> **[6:33](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=393)** Let's see if we get everything back.
>
> **[6:35](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=395)** And, sure enough, notice that it's telling you that there's only 18 results, so we had a lot more results before, but now there's only 18.
>
> **[6:44](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=404)** And it's only retrieving items that have the slides somewhere in the repository.
>
> **[6:50](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=410)** And if I wanted to try something else, then I can use the initialization here to do something like tutorials and see how that affects.
>
> **[7:00](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=420)** So now it says there's 13.
>
> **[7:02](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=422)** Yeah, I get a different set of results.
>
> **[7:04](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=424)** So this is working pretty well.
>
> **[7:06](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=426)** It's not exactly an interface, but at least, this way we can check, let's go ahead and get rid of this last pipe here.
>
> **[7:14](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-dynamic-queries?u=76281980&t=434)** I'm going to at least use this to create a query that is a little more dynamic and that we can pass information to.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (3), [[JSON]] (2)
> **Code Identifiers:** pagecount (9), querystring (8), totalcount (3), querytext (3), repositorycount (2)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** json (2)
> **File Paths:** app.js (1)
> **Definitions:** is a  (1)
> **Best Practices:** remember to (1)
> **Warnings:** warning (1)

#### [Building a search component](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=0)** - [Instructor] So for this next part I want go ahead and create a better version of this search section that is right here.
>
> **[0:08](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=8)** So right now, this just displays as a bunch of text and I want to do a proper form.
>
> **[0:14](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=14)** However, it'd be really boring for me to type in a bunch of bootstrap code.
>
> **[0:18](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=18)** So I prepared a special place for you to grab the code from.
>
> **[0:23](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=23)** So I'm going to copy this from here and what I need to do is create a new file, this file will be called SearchBox.js.
>
> **[0:33](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=33)** And in here I'm going to create a constant call it SearchBox and then it's going to have an item in there and we're going to pass along some variables.
>
> **[0:46](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=46)** So totalCount, pageCount, queryStrings.
>
> **[0:51](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=51)** So it'll receive these variables and then it's also going to receive two methods so this is how you pass along methods from a main component to a sub component, on total change and on query change, right.
>
> **[1:09](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=69)** So this is going to be an arrow function and this arrow function is going to return.
>
> **[1:15](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=75)** And then in parentheses we are going to paste all that code in there, maybe try to invent it a little bit.
>
> **[1:25](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=85)** And at the very end we have to export this so export default and SearchBox.
>
> **[1:32](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=92)** That is pretty awesome.
>
> **[1:34](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=94)** Now, there's going to be a little bit more wiring that I might have to do in here to use some of these methods.
>
> **[1:39](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=99)** All right so, down here I'm going to go ahead and output the variable totalCount that I'm receiving.
>
> **[1:50](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=110)** And then I need to go through the form element and output some of these other items here.
>
> **[1:57](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=117)** All right, so for this queryString I'm going to receive the query string variable so I'll put it as the value here.
>
> **[2:05](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=125)** And then whenever something changes in this input field so on change, we're going to track the on change event.
>
> **[2:16](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=136)** Then what I wanted to do is trigger an event on the parent component.
>
> **[2:20](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=140)** So, this is going to generate an event and the name of the event it's going to be onQueryChange.
>
> **[2:32](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=152)** And it's going to pass along the value of the target which will be the query string.
>
> **[2:39](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=159)** So you can see that the on query change event fired up or showed up right here.
>
> **[2:44](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=164)** So, this is going to essentially whenever the value of my item changes, it's going to generate an event on the parent and pass along the value of this item.
>
> **[2:57](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=177)** All right, so we'll do the next one.
>
> **[3:01](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=181)** It's going to be similar to this one.
>
> **[3:04](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=184)** So the value will be the pageCount variable that we get.
>
> **[3:11](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=191)** And actually, yeah this queryString here should be in curly braces.
>
> **[3:20](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=200)** And we'll do something similar to this one down here as well.
>
> **[3:23](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=203)** So whenever this one changes, the event will be on total change passing along the target value as well.
>
> **[3:35](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=215)** And we have total count now so, this should work as our component.
>
> **[3:42](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=222)** Let's go back into the application and we'll import this and then we'll have to use it in our applications.
>
> **[3:49](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=229)** So down here where we have this sort of really cheesy paragraph here with the info, we are going to use this new search box component.
>
> **[4:02](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=242)** And to the search box we will pass the totalCount, pageCount, the queryString as well.
>
> **[4:14](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=254)** And in here we will sort of look for the events so that when the events trigger, then we can do something with those events in the local component.
>
> **[4:26](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=266)** So, here whenever the query string changes we're going to receive something from the form.
>
> **[4:34](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=274)** I'm going to put it in a variable see this is queryString, so this is going to be myString and then set.
>
> **[4:44](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=284)** I'm going to use the local setQueryString variable to pass along the value of my string.
>
> **[4:50](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=290)** So, whenever the event gets triggered by this search box, right.
>
> **[4:57](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=297)** So whenever the query changes here it's going to trigger this onQueryChange event and pass it along the value of whatever is in the input field.
>
> **[5:07](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=307)** I don't know if it's showing up yet because I haven't saved.
>
> **[5:09](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=309)** And on the main app, it's going to execute the set query string which is this method right here to set the user state to whatever you want.
>
> **[5:20](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=320)** Let's go back actually so we need to also of course in addition to on total change, we also need to do the same thing for onQueryChange.
>
> **[5:33](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=333)** So onQueryChange or actually onQueryChange is the one that I just did so onTotal Change, then this needs to be another variable so we'll call it myNumber here.
>
> **[5:49](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=349)** And then set total change here so this will execute the local methods.
>
> **[5:56](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=356)** So, all righty then close this SearchBox out.
>
> **[6:01](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=361)** Let's see if it's coming in.
>
> **[6:04](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=364)** So actually I think this needs to be set pageCount.
>
> **[6:08](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=368)** So total change, set pageCount actually.
>
> **[6:14](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=374)** Let's try this out see if it even shows up.
>
> **[6:17](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=377)** All right, so now we have this nice little interface here.
>
> **[6:21](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=381)** Let's see there's 13 items and just delete this so if I delete the preset, it's showing 147 items.
>
> **[6:31](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=391)** And let's type something in like slides here.
>
> **[6:34](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=394)** And now you can see the list shortens up for the slides.
>
> **[6:39](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=399)** And I don't need to import this twice, but I should start out by initializing this with an empty string here so that it lists all the results, right.
>
> **[6:50](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=410)** And then when I type in something in here it's going to trigger the updating of the query string which gives us now 18 results.
>
> **[6:58](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=418)** And also let's see so it starts off as 10 and I can go ahead and use these arrows here to make them, give myself more or less results per page.
>
> **[7:11](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=431)** So that makes everything look pretty good.
>
> **[7:14](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=434)** You know one thing I don't like about bootstrap is that it doesn't have a ton of the fault values or at least they think that this color for the background I think it's called like light with Bootstrap light, it's a little bit too weak for me.
>
> **[7:28](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=448)** So, again because we have the ability to modify this through CSS or Sass I'm going to redefine the color of light.
>
> **[7:41](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=461)** I'll make it just a little bit darker and see if eventually it'll reload and it'll be a little bit darker.
>
> **[7:49](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=469)** I mean, I think that that light color looks okay on some machines, but on some machines I think it's way too light.
>
> **[7:57](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=477)** So I like to make it a little bit darker and it's nice that we have the ability to do that pretty easily.
>
> **[8:02](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/building-a-search-component?u=76281980&t=482)** Also a nice interface makes us think so much better and makes our application a lot more useful.

> [!info]- Semantic Content
>
> **Code Identifiers:** pagecount (5), onquerychange (5), querystring (4), totalcount (3), querystrings (1)
> **CLI Commands:** make (3)
> **File Paths:** searchbox.js (1)
> **Env Vars:** css (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Setting up pagination](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=0)** - [Instructor] The last feature that we're going to add to this application is pagination.
>
> **[0:05](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=5)** Now to do that, we need to review how it works in the [[GitHub]] [[GraphQL]] Explorer.
>
> **[0:13](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=13)** So the way that you do this is by adding a series of edges and then putting the nodes within those edges.
>
> **[0:21](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=21)** So we're going to have to modify our queries.
>
> **[0:25](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=25)** And to do that, I'll kind of show you what you need to do in this GraphQL Explorer.
>
> **[0:30](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=30)** We're going to need to track a set of edges, and inside those edges, we are going to track a cursor.
>
> **[0:40](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=40)** A cursor is like an ID that identifies each one of the nodes and gives it an ID that you can use for pagination.
>
> **[0:50](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=50)** So you can say, "Give me the first 10 items," or you can say, "Give me the first 10 items "after a specific cursor."
>
> **[0:57](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=57)** So we are going to take these nodes and then put them inside after the cursor.
>
> **[1:06](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=66)** Go ahead and put them in here.
>
> **[1:08](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=68)** And inside the edges, they're not called nodes 'cause there's only one node per edge, so the edges become kind of like the list.
>
> **[1:19](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=79)** And let's go ahead and hit Prettify here.
>
> **[1:22](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=82)** And there is just a single node, and as you go through the list, you'll get multiple nodes.
>
> **[1:28](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=88)** And what you can also do is, at the edges location, so at the same level as edges, you can also get some information about the page.
>
> **[1:40](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=100)** It's in an item called pageInfo, and pageInfo will give you all kinds of information.
>
> **[1:46](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=106)** So we can say, startCursor, endCursor, hasNextPage, and hasPreviousPage.
>
> **[1:53](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=113)** Now, what these will do.
>
> **[1:55](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=115)** Let's see, let's just do a few, like very few.
>
> **[2:00](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=120)** We'll just do two items for this.
>
> **[2:02](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=122)** So we'll hit the play here, and you'll see that now you get the edges, and each edges has the current cursor and then the current node.
>
> **[2:16](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=136)** So here is one edge, right?
>
> **[2:18](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=138)** And then, there is another edge here, right?
>
> **[2:22](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=142)** And you also get this pageInfo section, and that gives you the ID or the cursor for the beginning of the page.
>
> **[2:31](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=151)** So notice that this one has an equal sign at the top.
>
> **[2:35](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=155)** So that's this one right here.
>
> **[2:37](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=157)** And then, this one also, it also has an equal sign, but it has an I instead of an E here.
>
> **[2:42](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=162)** So you can see that that is this second cursor.
>
> **[2:45](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=165)** Now, there's only two items, so there's only going to be two cursors, but if you had more items, then this will give you the beginning item and the end item.
>
> **[2:53](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=173)** And the way that you paginate is by getting some items, starting with a certain amount after a cursor.
>
> **[3:01](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=181)** So you can say, "Get me two items after this end cursor."
>
> **[3:07](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=187)** Essentially, after this second item, I want two more items.
>
> **[3:11](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=191)** Or you could say, "Get me two items before."
>
> **[3:15](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=195)** Instead of first, you would just ask for the last two items before the beginning cursor.
>
> **[3:23](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=203)** What I'm going to do here is, I don't really want to lose all my variables that are in my query, but I am going to grab this right here, and I'll come back to my query.
>
> **[3:37](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=217)** And it's going to be a little bit challenging to find out exactly where to put these.
>
> **[3:42](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=222)** So let's see, we need to say, repositoryCount then edges.
>
> **[3:50](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=230)** And the nodes are going to go in there, but I do want to output also the cursor, and at the same level as the edges, that's where I'm going to paste my pageInfo.
>
> **[4:01](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=241)** And then, I'm going to grab the nodes and place those with my cursor, and I need to rename these node.
>
> **[4:14](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=254)** All right, so hopefully I did that correctly.
>
> **[4:18](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=258)** With all of the indentation, it's a little bit tough, but I think I got it right.
>
> **[4:22](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=262)** And so what I'm going to need to do also is to ask for a lot more variables so that I can modify my query so that it properly paginates things for me.
>
> **[4:34](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=274)** So in addition to queryString, we're going to ask for a paginationKeyword as well as a paginationString.
>
> **[4:46](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=286)** So what that will do is, I need to modify this keyword here, first, to sometimes say first and sometimes say last.
>
> **[4:57](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=297)** And instead of just having a pageCount, I also want to make sure that I have a paginationString after this.
>
> **[5:07](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=307)** So this right here, this first is going to be replaced by one of the new variables, paginationKeyword, and then it is still going to grab pageCount, but then after that, then I'm going to pass along paginationString.
>
> **[5:32](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=332)** I added a space here after this queryString.
>
> **[5:36](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=336)** So let's go ahead and save this.
>
> **[5:37](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=337)** It looks pretty good for the most part.
>
> **[5:42](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=342)** And now, I need to go into App.js and just start creating all those variables.
>
> **[5:49](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=349)** So after this one, I'm going to need to add a bunch of variables here.
>
> **[5:55](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=355)** So just going to create a whole of them right here, and I'll just start with startCursor, setStartCursor.
>
> **[6:07](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=367)** All right, I do need to initialize these differently.
>
> **[6:12](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=372)** So by default, hasPreviousPage, I'm going to assume that the first page that is going to be false, right?
>
> **[6:19](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=379)** Because there is no previous page on the first page, but the hasNextPage will be true.
>
> **[6:25](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=385)** And my useState, my default value for the paginationKeyword will be first.
>
> **[6:33](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=393)** And my queryString is going to be an empty string by default.
>
> **[6:39](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=399)** Okay, now also when I pass along the query, I need to pass along all those variables as well.
>
> **[6:47](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=407)** Let's go ahead and do that.
>
> **[6:49](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=409)** PaginationKeyword and paginationString.
>
> **[6:55](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=415)** All right, now, the way to get to my repos is going to be a little bit different.
>
> **[7:01](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=421)** Instead of going from search to nodes, I need to go to the edges now.
>
> **[7:07](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=427)** And then, I also need to initialize some constants for the [[Representational State Transfer (REST)|rest]] of the data.
>
> **[7:15](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=435)** So start is going to be, actually, a lot of them are going to be similar.
>
> **[7:21](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=441)** So data.data and then search.pageInfo.
>
> **[7:29](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=449)** StartCursor here.
>
> **[7:31](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=451)** And think most of these are going to be pretty similar, so I'm just going to copy everything to this question mark here, and then do the rest of the variables.
>
> **[7:44](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=464)** And then, this will be endCursor.
>
> **[7:50](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=470)** Alrighty, and I'm going to also add some initialization of these methods.
>
> **[7:57](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=477)** So setStartCursor will be set to my new variable and some of these other ones as well.
>
> **[8:09](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=489)** Right, now I'm going to need to add into my dependencies here the paginationString as well as the paginationKeyword.
>
> **[8:21](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=501)** Now, when I'm asking for the repos, I need to include the fact that I need to get to the node on each one of these.
>
> **[8:31](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=511)** So repo.node and repo.node.id for the key.
>
> **[8:36](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=516)** All right, let's see if we are still getting some data.
>
> **[8:39](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=519)** Let's refresh just in case.
>
> **[8:41](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=521)** So now, it looks like everything is working again.
>
> **[8:43](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/setting-up-pagination?u=76281980&t=523)** We don't really have pagination, but that is another component that we're going to have to create, and we'll take care of that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (2), [[Representational State Transfer (REST)|Rest]] (2), [[GitHub]] (1)
> **Code Identifiers:** pageinfo (5), paginationstring (5), paginationkeyword (4), querystring (3), startcursor (2)
> **CLI Commands:** node (7), find (1), make (1)
> **File Paths:** app.js (1)
> **Cross-References:** in the next (1)
> **Tools:** github (1)
> **UI Navigation:** go to (1)
> **Analogies:** kind of like (1)

#### [Creating the pagination interface](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-the-pagination-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-the-pagination-interface?u=76281980&t=0)** - [Instructor] All right, let's finish this application off by creating our navigation component.
>
> **[0:04](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-the-pagination-interface?u=76281980&t=4)** All right, so in apps, let's start by creating a new component.
>
> **[0:09](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-the-pagination-interface?u=76281980&t=9)** So, we'll make a new file in the source folder.
>
> **[0:12](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-the-pagination-interface?u=76281980&t=12)** We'll call it NavButtons.js, and we'll create this method here.
>
> **[0:20](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-the-pagination-interface?u=76281980&t=20)** It's going to receive some items.
>
> **[0:22](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-the-pagination-interface?u=76281980&t=22)** So, we're going to get start, end, next, previous, and we will use a method called onPage.
>
> **[0:34](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-the-pagination-interface?u=76281980&t=34)** So this is a method that will be triggered whenever we click on one of these buttons that we're going to be creating here.
>
> **[0:41](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-the-pagination-interface?u=76281980&t=41)** So now, this is going to return some JSX code.
>
> **[0:48](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-the-pagination-interface?u=76281980&t=48)** So, we'll put some bootstrap code here.
>
> **[0:56](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-the-pagination-interface?u=76281980&t=56)** We'll need to export this NavButtons.
>
> **[1:02](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-the-pagination-interface?u=76281980&t=62)** All right, all right, let's keep on going, and we'll need to create two buttons.
>
> **[1:07](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-the-pagination-interface?u=76281980&t=67)** Now, these buttons will only show up if either previous or next has values in them.
>
> **[1:14](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-the-pagination-interface?u=76281980&t=74)** So we'll say here, previous, and then we'll create a button here.
>
> **[1:20](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-the-pagination-interface?u=76281980&t=80)** So a margin in the X direction of one, button small, primary, and then we're going to use some bootstrap icons here.
>
> **[1:31](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-the-pagination-interface?u=76281980&t=91)** All right, and now we'll put in the events.
>
> **[1:33](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-the-pagination-interface?u=76281980&t=93)** So when somebody clicks on this item, then it's going to execute a method that we're calling onPage.
>
> **[1:43](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-the-pagination-interface?u=76281980&t=103)** This is the previous button, so it'll pass along the keyword last, as the first element, and then it's going to pass before, and then some quotations.
>
> **[1:55](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-the-pagination-interface?u=76281980&t=115)** Now I can't use the traditional sort of curly brace variables like this, because of JSX.
>
> **[2:02](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-the-pagination-interface?u=76281980&t=122)** So we're going to have to do this the old fashioned way.
>
> **[2:05](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-the-pagination-interface?u=76281980&t=125)** So before plus start, plus, and we're going to have to use traditional concatenation here, and it looks like I'm missing an arrow right here.
>
> **[2:19](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-the-pagination-interface?u=76281980&t=139)** That's why I'm getting all these like red items.
>
> **[2:22](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-the-pagination-interface?u=76281980&t=142)** So that looks good.
>
> **[2:25](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-the-pagination-interface?u=76281980&t=145)** All right, so we'll do the same thing for the next button, or at least something pretty similar, for the next button.
>
> **[2:33](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-the-pagination-interface?u=76281980&t=153)** So it'll only show up if next has some sort of value, and this will be an arrow going to the right, and then when somebody clicks on this, the first keyword will be first, and then this will say after, here, and I actually need a colon for both of these.
>
> **[2:51](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-the-pagination-interface?u=76281980&t=171)** So before, then a space, and then these quotes on (mumbles) concatenation there, and then of course, this one needs to say, end, here.
>
> **[3:01](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-the-pagination-interface?u=76281980&t=181)** All right, that looks right to me.
>
> **[3:04](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-the-pagination-interface?u=76281980&t=184)** We'll find out in just a minute, if we did it correctly, and then I need to go ahead and go to App.js and import this, all right, and I need to add this into my app.
>
> **[3:20](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-the-pagination-interface?u=76281980&t=200)** Let's see, we'll do this after the search box, and we'll pass along all the variables.
>
> **[3:30](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-the-pagination-interface?u=76281980&t=210)** Finally, we'll need to do the method here.
>
> **[3:32](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-the-pagination-interface?u=76281980&t=212)** So whenever we get the onPage method, we're going to receive some sort of keyword, and then we'll also receive a string with that, and then we will use the setPaginationKeyword to be myKeyword that we just got.
>
> **[3:55](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-the-pagination-interface?u=76281980&t=235)** So, this onPage should have an equal sign, right here, and this actually should be a curly brace, right here.
>
> **[4:05](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-the-pagination-interface?u=76281980&t=245)** So, okay, this receives two values, myKeyword and then myString, right, and then arrow function, then setPaginationKeyword, and setPaginationString here.
>
> **[4:21](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-the-pagination-interface?u=76281980&t=261)** Alrighty then, that is looking pretty good to me, and yay, you can see the little button right here.
>
> **[4:30](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-the-pagination-interface?u=76281980&t=270)** Now only the forward button shows up, because right now, if I were to look at my data, I would see that the previous keyword doesn't exist, or it right now, remember, when we set this up, the previous or HasPreviousPage has a value of false and the HasNextPage has a value of true, so only the forward button is showing up right now.
>
> **[4:56](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-the-pagination-interface?u=76281980&t=296)** So if I click on this, I should get the next page, and if I click this back, I should see the previous page of my results.
>
> **[5:04](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-the-pagination-interface?u=76281980&t=304)** So that is looking fantastic.
>
> **[5:07](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-the-pagination-interface?u=76281980&t=307)** Now because this is a component, then that means I should be able to add another one at the bottom, just in case I'm looking at, maybe the bottom of the page.
>
> **[5:20](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-the-pagination-interface?u=76281980&t=320)** That's the beauty of components, and I can add a button at the bottom of the page, as well, and use that to navigate if I want to.
>
> **[5:29](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-the-pagination-interface?u=76281980&t=329)** Super, that is a pretty cool app.
>
> **[5:31](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/creating-the-pagination-interface?u=76281980&t=331)** I'm sure you have more ideas on what you can do with the app, but this kind of shows you all the things that you would use with [[GraphQL]] that you might want to do when working with an application that uses the [[GitHub]] version of GraphQL, and also, [[React.js|React]] working with hooks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (2), [[GitHub]] (1), [[React.js|React]] (1)
> **Code Identifiers:** onpage (4), setpaginationkeyword (2), mykeyword (2), mystring (1), setpaginationstring (1)
> **UI Navigation:** click on (2), go to (1)
> **Definitions:** is a  (3)
> **File Paths:** navbuttons.js (1), app.js (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** jsx (2)
> **Tools:** github (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/next-steps?u=76281980&t=0)** - [Ray] Working with a real project like this is a lot of fun, but I bet you're probably wondering what else you could do with this technology.
>
> **[0:07](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/next-steps?u=76281980&t=7)** Now you can spend a lot of time inside the documentation for the [[GitHub]] [[GraphQL]] Explorer.
>
> **[0:14](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/next-steps?u=76281980&t=14)** It's well-documented and a great place to explore what else you could do with this app.
>
> **[0:20](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/next-steps?u=76281980&t=20)** You should also check out the documentation for the regular version of GraphQL at this URL.
>
> **[0:26](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/next-steps?u=76281980&t=26)** Now we have lots of content on GraphQL as well as [[React.js|React]].
>
> **[0:30](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/next-steps?u=76281980&t=30)** So make sure you do a search for GraphQL or React from the library.
>
> **[0:37](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/next-steps?u=76281980&t=37)** Finally, if you want to know what I'm up to, check out my blog at [raybo.org](https://raybo.org), where you can find out what I'm up to, as well as follow me in any of my social media accounts.
>
> **[0:47](https://www.linkedin.com/learning/building-a-graphql-project-with-react-js/next-steps?u=76281980&t=47)** Thanks for watching, and good luck with building your next React application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GraphQL]] (4), [[React.js|React]] (3), [[GitHub]] (1)
> **CLI Commands:** make (1), find (1)
> **Documentation:** the documentation (2)
> **URLs:** [raybo.org](https://raybo.org) (1)
> **Env Vars:** url (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Speakers:** - [ray] (1)


## Instructor

- [[Ray Villalobos]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/react-graphql-2875095)

## Skills Covered

- React.js
- GraphQL

## Path Context

### In [[Improve Your React Skills]]
← [[React- Software Architecture]] | **8 of 9** | [[React- Cloud-Powered Apps with Firebase]] →

## Appears In

- [[Improve Your React Skills]]

## Related Courses

_Courses sharing skills:_

- [[Building GraphQL Applications in Laravel]] — GraphQL
- [[React- Cloud-Powered Apps with Firebase]] — React.js
- [[React- Software Architecture]] — React.js
- [[React- Testing and Debugging]] — React.js
- [[React- Building Styles with CSS Modules]] — React.js

---

[↑ Back to top](#)