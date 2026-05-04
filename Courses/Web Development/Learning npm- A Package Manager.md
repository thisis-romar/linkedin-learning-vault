---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: learning-npm-a-package-manager
url: "https://www.linkedin.com/learning/learning-npm-a-package-manager"
duration_minutes: 55
duration: 55m
level: Beginner
updated: 3/10/2023
learners: 18820
skills:
  - Package Management
  - npm
exercise_files: true
github: "https://github.com/LinkedInLearning/learning-npm-the-node-package-manager-4362456/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/C4D0DAQFg7WtswO2x6w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1679938394111?e=2147483647&amp;v=beta&amp;t=LT14fGNBKJt3K2tLYLBOZn33aw1Qko0tB6FO0fgBkfk"
linkedin_topic: Web Development
learning_paths:
  - '[Explore Web Development with Node.js](../../Paths/Web%20Development/Learning%20Paths/Explore%20Web%20Development%20with%20Node.js.md)'
  - '[Explore App Development with the MERN Stack](../../Paths/Database%20Management/Learning%20Paths/Explore%20App%20Development%20with%20the%20MERN%20Stack.md)'
prev_courses:
  - '[Node Js Essential Training](Node%20Js%20Essential%20Training.md)'
  - '[Node Js Essential Training](Node%20Js%20Essential%20Training.md)'
next_courses:
  - '[Node.js- Testing and Code Quality](Node.js-%20Testing%20and%20Code%20Quality.md)'
  - '[Express Essentials- Build Powerful Web Apps with Node.js](Express%20Essentials-%20Build%20Powerful%20Web%20Apps%20with%20Node.js.md)'
path_nav: '[{"path":"Explore Web Development with Node.js","position":2,"total":11,"prev":"Node Js Essential Training","next":"Node.js- Testing and Code Quality"},{"path":"Explore App Development with the MERN Stack","position":4,"total":13,"prev":"Node Js Essential Training","next":"Express Essentials- Build Powerful Web Apps with Node.js"}]'
path_count: 2
tags:
  - course
  - topic/web-development
  - topic/database-management
  - topic/software-development
  - skill/package-management
  - skill/npm
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Learning%20npm-%20A%20Package%20Manager.md)

![Learning npm: A Package Manager](https://media.licdn.com/dms/image/v2/C4D0DAQFg7WtswO2x6w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1679938394111?e=2147483647&amp;v=beta&amp;t=LT14fGNBKJt3K2tLYLBOZn33aw1Qko0tB6FO0fgBkfk)

# Learning npm: A Package Manager

> npm is an indispensable part of every developer's toolbox. It's the package manager for JavaScript and JavaScript frameworks such as Node.js, enabling developers to easily share and re-use code. In this course, Emmanuel Henri teaches developers how to work with npm commands to install and manage project dependencies. He starts with showing how to install npm, and details all the basic tools you ca

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-npm-a-package-manager) | 55m | Beginner | 19K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Learning npm](#learning-npm)
  - [What you should know](#what-you-should-know)
  - [Using GitHub Codespaces with this course](#using-github-codespaces-with-this-course)
- [**1. Definition and Installation**](#1-definition-and-installation) (2 videos)
  - [Defining a package and npm](#defining-a-package-and-npm)
  - [Installing Node and npm](#installing-node-and-npm)
- [**2. Getting Started with npm**](#2-getting-started-with-npm) (7 videos)
  - [Initializing a package.json file](#initializing-a-packagejson-file)
  - [Adding node packages](#adding-node-packages)
  - [Managing global directory](#managing-global-directory)
  - [Updating a dependency](#updating-a-dependency)
  - [Removing a dependency](#removing-a-dependency)
  - [Semantic versioning](#semantic-versioning)
  - [Introduction to package-lock.json](#introduction-to-package-lockjson)
- [**3. Publishing Your Package**](#3-publishing-your-package) (3 videos)
  - [Publishing an unscoped package](#publishing-an-unscoped-package)
  - [Publishing a scoped package](#publishing-a-scoped-package)
  - [Publishing a private package](#publishing-a-private-package)
- [**4. Advanced Subjects**](#4-advanced-subjects) (5 videos)
  - [Working with your npm cache](#working-with-your-npm-cache)
  - [Running an npm audit](#running-an-npm-audit)
  - [Scripting in package.json](#scripting-in-packagejson)
  - [Introduction to npx](#introduction-to-npx)
  - [Alternatives to npm](#alternatives-to-npm)
- [**Conclusion**](#conclusion) (1 videos)
  - [Furthering your npm journey](#furthering-your-npm-journey)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Learning npm](https://www.linkedin.com/learning/learning-npm-a-package-manager/learning-npm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-npm-a-package-manager/learning-npm?u=76281980&t=0)** - If you've ever worked with Node or any [JavaScript](../../Skills/Software%20Development/JavaScript.md) framework, you've worked with Node Package Manager, or MPM, at one time or another, and if you'd like to better understand what you can do with [npm](../../Skills/Web%20Development/npm.md), you've come to the right place. Mastering the commands and functions that come with MPM will be the focus of this course. Hi, I'm Emmy Henri, and it's my pleasure to show you what you can do with MPM and bring your skillset to the next level. We'll begin by making sure you can fall along with Codespace on [GitHub](../../Skills/Software%20Development/GitHub.md), then we'll explore all the basic tools you can use with NPM, such as adding, updating or removing a package. Finally, we'll dive deep into advanced features, such as NPM cache, audits, scripting and more. If you're ready to start learning NPM, open up your favorite editor and let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [npm](../../Skills/Web%20Development/npm.md) (4), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Env Vars:** npm (4), mpm (3)
> **CLI Commands:** npm (4), node (2)
> **Analogies:** such as (2)
> **Tools:** github (1)
> **Speakers:** - if (1)

#### [What you should know](https://www.linkedin.com/learning/learning-npm-a-package-manager/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-npm-a-package-manager/what-you-should-know?u=76281980&t=0)** - [Instructor] This is an introductory course on [npm](../../Skills/Web%20Development/npm.md), so no prior knowledge of the tool and its commands is necessary. However, some experience with [Node.js](../../Skills/Web%20Development/Node.js.md) or [JavaScript](../../Skills/Software%20Development/JavaScript.md) based projects will help you understand the context of these commands versus being completely in the dark when we come to discuss them. But if you don't have that type of experience, not to worry, you'll be able to complete this course without it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [npm](../../Skills/Web%20Development/npm.md) (1), [Node.js](../../Skills/Web%20Development/Node.js.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **CLI Commands:** npm (1), node (1)
> **File Paths:** node.js (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Using GitHub Codespaces with this course](https://www.linkedin.com/learning/learning-npm-a-package-manager/using-github-codespaces-with-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-npm-a-package-manager/using-github-codespaces-with-this-course?u=76281980&t=0)** - This is Ramon de Lobos, Senior Staff Instructor at [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning, and I'm going to show you how to work with LinkedIn Learning courses using [GitHub](../../Skills/Software%20Development/GitHub.md) [Codespaces](../../Skills/Software%20Development/Codespaces.md). Codespaces is a code editor in the cloud with the full power of Visual Studio Code. It allows for real world, hands-on practice that mirrors [Software Development](../../Topics/Software%20Development.md) in the workplace. This course was created using GitHub Codespaces. Using Codespaces, you have everything you need to get going without needing complex installations or build tools. One click and you're ready to go. To practice along with the course, you can create a Codespace directly from the course overview page. First, click open next to GitHub Codespaces. If you're already logged in, you'll be directed to a Getting Started with GitHub Codespaces page. If you're not logged in, you'll be prompted to log in or create a free GitHub account first. From this page, click on Create Codespace on Main. The first time you open up a Codespace, it might take a few minutes to create the virtual machine. Once it's done, you'll enter the code editor environment. If you're familiar with Visual Studio Code, this is a special version of that editor running on GitHub's servers. Your course can have one or more extensions pre-installed based on the course you're taking. Those can be found in the extensions panel. Because this is a browser, it's easy to inadvertently close the browser window and lose the editor.
>
> **[1:31](https://www.linkedin.com/learning/learning-npm-a-package-manager/using-github-codespaces-with-this-course?u=76281980&t=91)** If you do that, don't panic, Codespaces saves everything you're doing on a virtual machine. You can always get the Codespace back for this repo right here. Notice that it even remembered that I had open the extensions panel. An alternate way to create a Codespace is directly from one of our courses in GitHub repositories. From here, click code, and then create Codespace on Main. You can also restart a previous Codespace from this location. GitHub Codespaces is compatible on devices with smaller screen sizes, like mobile phones or tablets, but it is optimized for larger screens, so we recommend that you practice along with this course on a laptop or desktop computer. The sample course I'm looking at is what is known as a flat branch repository. You can tell because there's a single branch when you click on the branch icon on the status bar. You can also tell because there are different folders for each of the videos in the course. This is a sample of what a multi-branch repository looks like, which is more common when you're working with web frameworks. If you go to the branch icon on the status bar, you can see that there's more than one branch. You can switch to the different branches using this menu. The branches are named with the chapter and the video number you're watching. If you see a B at the end of the branch, that's how the code looked at the beginning. If you see an E, that's how the code looked at the end.
>
> **[3:06](https://www.linkedin.com/learning/learning-npm-a-package-manager/using-github-codespaces-with-this-course?u=76281980&t=186)** Let's switch to how the code looked on chapter two in the third video. I'll choose the beginning branch. As you work through a course, you might make some changes on a branch. I'm going to make a minor edit on the index [HTML](../../Skills/Web%20Development/HTML.md) file right here. I'm going to go ahead and save that, and you can see that I've modified this file because there's an M right here, and the branch name now has an asterisk on it. If I try to switch to another branch that causes major changes like say 0703E, I may see a dot lock box like this. If you don't care about saving your changes, you can simply hit the force checkout button. It will let you switch to that branch. You can then choose to discard the changes on this file. Your instructor will let you know what the folder structure is for your course. Forking lets you create your own copy of the repository on your account, so that you can keep any changes that you've made. Even if you've deleted the Codespace. To create your own fork, you can click on the fork button on the repository. I'm going to hit Create fork. I don't have my own copy of this repository, and if I want to, I can start a new Codespace on that fork. This fork version is almost exactly like
>
> **[4:41](https://www.linkedin.com/learning/learning-npm-a-package-manager/using-github-codespaces-with-this-course?u=76281980&t=281)** the original repository, but it will let you push your own changes. Notice that the URL of the repository is slightly different. Let's go ahead and make a simple change to this file right here.
>
> **[5:00](https://www.linkedin.com/learning/learning-npm-a-package-manager/using-github-codespaces-with-this-course?u=76281980&t=300)** I'm going to save it. You'll note that there is an M right here as well as an asterisk on this branch. In the source control panel, you can also see a one for the change that we just made. Let's go ahead and try to commit this change. I'm going to hit the commit button and I'll ask it to go ahead and stage the changes, and then I'm going to hit this button here. I'll hit okay. You can also let it go ahead and run get [Fetch](../../Skills/Web%20Development/Fetch.md). That way it'll automatically sync with your forked repo. Now that change will be stored in your own version of this repository. Don't worry if you forget to fork a repo, and then try to push changes, Codespaces will also ask you if you want to create a fork automatically. Look for additional course-specific tips from the instructor. Now, let's get back to the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Codespaces](../../Skills/Software%20Development/Codespaces.md) (9), [GitHub](../../Skills/Software%20Development/GitHub.md) (8), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [Software Development](../../Topics/Software%20Development.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Tools:** github (8), visual studio (2)
> **UI Navigation:** switch to (4), click on (3), open the (1), go to (1)
> **Definitions:** is a  (4), known as (1), is an  (1)
> **CLI Commands:** make (3)
> **Env Vars:** html (1), url (1)
> **Warnings:** note that (1)
> **Prerequisites:** getting started (1)


### 1. Definition and Installation

[↑ Back to Table of Contents](#table-of-contents)

#### [Defining a package and npm](https://www.linkedin.com/learning/learning-npm-a-package-manager/defining-a-package-and-npm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-npm-a-package-manager/defining-a-package-and-npm?u=76281980&t=0)** - [Instructor] If you've ever built applications with [JavaScript](../../Skills/Software%20Development/JavaScript.md), [React](../../Skills/Web%20Development/React.js.md), [Angular](../../Skills/Web%20Development/Angular.md), [Node.js](../../Skills/Web%20Development/Node.js.md), or Express, you've used the package manager to install dependencies. This package manager is called [npm](../../Skills/Web%20Development/npm.md). It comes pre-install with Node.js and we'll go over how to install it shortly. Dependencies or packages, they're used in all your projects and come in with a package.[JSON](../../Skills/Web%20Development/JSON.md) file, such as this one. This file is the map of your project. It tells who created it, the version, and the packages that needs to be installed. So what is really a package, or a module, or a dependency? First off, don't be intimidated by people who use these terms. They're nearly the same thing. They're simply a file or multiple files combined together to form a package that represents a specific function. If we go to www.[npmjs.com](https://npmjs.com), we can search this directory of packages for any function we would like to add to our project. For example, if you search for css, you're going to find tons of packages that are related to CSS. You want to add a router to a React application, there is a package for that. You want to add simple syntax for displaying dates on your application, install the moment package. There are a growing 700,000 packages and more in this directory, so most likely if you think of something, there is probably a package for that. The idea behind having this package directory at npm is to build lightweight projects
>
> **[1:34](https://www.linkedin.com/learning/learning-npm-a-package-manager/defining-a-package-and-npm?u=76281980&t=94)** that can be easily shared across development team and install the dependencies or packages locally on our machines when we use the project. It allows to free our resources locally and install only what we need versus carrying this code tax with whoever we want to share our projects with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (2), [Node.js](../../Skills/Web%20Development/Node.js.md) (2), [npm](../../Skills/Web%20Development/npm.md) (2), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [Angular](../../Skills/Web%20Development/Angular.md) (1)
> **Prerequisites:** install (6)
> **CLI Commands:** node (2), npm (2), find (1)
> **File Paths:** node.js (2), package.json (1)
> **Definitions:** is called (1), is a  (1)
> **Analogies:** such as (1), for example (1)
> **URLs:** [npmjs.com](https://npmjs.com) (1)
> **Env Vars:** css (1)

#### [Installing Node and npm](https://www.linkedin.com/learning/learning-npm-a-package-manager/installing-node-and-npm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-npm-a-package-manager/installing-node-and-npm?u=76281980&t=0)** - [Instructor] In this course, we're going to use CodeSpace to make it easier to follow and use the branches as the course endings. However, when you work on your projects, you need to install [npm](../../Skills/Web%20Development/npm.md) or [Node.js](../../Skills/Web%20Development/Node.js.md) Let's go over the proper steps to install NPM. So all you have to do is first go to [nodejs.org](https://nodejs.org) and then here, it should actually recommend for your own system what you need to download. Usually you would go for the LTS. This is basically the supported version. If you're encountering any issues, this is the version that is supported. If you want the latest and greatest features that are not quite supported yet, you can go for this one here. Usually what I do is go with this, because it's the safest way. Now, what you need to do if you don't see your operating system here and you can't download the right version, what you could do is go to Other Downloads and then go to the Current or the LTS version and find the [Windows](../../Glossary/Service/Windows.md) installer, macOS, or source code for [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md). And then you can go here if you want to have specific versions here so the 64 bit, ARMv7, and so on, so forth. So find the right version, download the installer, and then install it in your system and you should be good to go for NPM and Node at the same time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [npm](../../Skills/Web%20Development/npm.md) (3), [Node.js](../../Skills/Web%20Development/Node.js.md) (1), [Windows](../../Glossary/Service/Windows.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **CLI Commands:** npm (3), node (2), find (2), make (1)
> **Env Vars:** npm (3), lts (2)
> **UI Navigation:** go to (3)
> **Exercise Files:** download the (2), source code (1)
> **Prerequisites:** install (3)
> **File Paths:** node.js (1)
> **Code Identifiers:** macos (1)


### 2. Getting Started with npm

[↑ Back to Table of Contents](#table-of-contents)

#### [Initializing a package.json file](https://www.linkedin.com/learning/learning-npm-a-package-manager/initializing-a-package-json-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-npm-a-package-manager/initializing-a-package-json-file?u=76281980&t=0)** - [Instructor] As mentioned before, the package .[JSON](../../Skills/Web%20Development/JSON.md) file is the map for building your project and setting your dependencies. But first, let's take a look at what you need to follow along. All you need is a good editor with some terminal capabilities, and vscode is perfect for this. In my case, I'm going to use code space which is an online version of vscode. So I'm back where the repo is here and what I'm going to do is click on code and use one of the code spaces. I already used this a bit so I'm going to use this one here. You can create a new one by pressing plus. Once your area is set up, you're ready to go. So this is very much like vscode. So if you want to use vscode it's the same thing, or use your favorite editor. So what we're going to do now is go inside of the terminal and we're going to initialize the project so we can get a package .json file. So let's go ahead and do that. And I'm going to do [npm](../../Skills/Web%20Development/npm.md) init. So when you do that it's going to create the package .json file. So you have to answer a few questions when you do that. The package name, let's keep it that way. Version. Yeah, let's keep it that way too. Description, you can write a description if you want. Index. That's the entry point of the project. Test command. And what's the [Git](../../Skills/Software%20Development/Git.md) repository? It's basically setting up the one that we have. Keywords and then the author.
>
> **[1:39](https://www.linkedin.com/learning/learning-npm-a-package-manager/initializing-a-package-json-file?u=76281980&t=99)** So as you can see now, we have the package .json files. I'm going to close the terminal and open up the package .json file and show you what it is. So I'm just going to close temporarily this one. So basically it's a representation of what we just said. So basically the name, the version description, and then what are the main entry point of the project, in this case, index.js. When we have scripts, we're going to enter them here. So if we do an mpm start this is where we're going to enter what is going to happen when we do the mpm start. Repository information, author information, and so on and so forth. When we install packages or uninstall packages you're going to see dependencies and dev dependencies appear here. So this is pretty much what it is. It's a map of your project with the dependencies that are related to the project as you install them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (5), [npm](../../Skills/Web%20Development/npm.md) (1), [Git](../../Skills/Software%20Development/Git.md) (1)
> **Tools:** terminal (3)
> **Prerequisites:** install (2), set up (1)
> **CLI Commands:** npm (1), git (1)
> **Definitions:** is a  (1), is an  (1)
> **File Paths:** index.js (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [Adding node packages](https://www.linkedin.com/learning/learning-npm-a-package-manager/adding-node-packages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-npm-a-package-manager/adding-node-packages?u=76281980&t=0)** - [Instructor] The first step and one that you might have encountered already is adding packages locally or globally. But what is the difference between the two? When a package is installed locally, it is installed on your project's directory, in this case, the one we're working on. When it is installed globally, it will be installed in your system, available to all projects. But we'll get back to that later. So let's go ahead and go into the terminal. So what I'm going to do is go Ctrl + grab it to bring the terminal. And then what I'm going to do is go ahead and do [npm](../../Skills/Web%20Development/npm.md) install and you can do i as a shortcut, and let's install express.
>
> **[0:50](https://www.linkedin.com/learning/learning-npm-a-package-manager/adding-node-packages?u=76281980&t=50)** And as you can see now we're going to have dependencies that are going to show up on our package.[JSON](../../Skills/Web%20Development/JSON.md) file. So express to show up here. If you want to install dev dependencies, you do the exact same thing by doing npm install, and the only thing that you add is -save-dev and then you install the dependencies that you need. In this case, let's go ahead and install babel-[CLI](../../Skills/Network%20and%20System%20Administration/CLI.md). Oh, made a little typo. There you go. And now you can see the dev dependencies here. So babel and then cli. So the keyword [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) -save-dev is a special keyword is basically a keyword that tells NPM to install these as dev tools, which means they won't be included on your production build, but used throughout development. So when you compile a production build, these dependencies won't be included like our Babel packages which help us compile ES6 or related code to [JavaScript](../../Skills/Software%20Development/JavaScript.md) that the web understands.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [npm](../../Skills/Web%20Development/npm.md) (3), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Prerequisites:** install (7)
> **CLI Commands:** npm (3)
> **Env Vars:** npm (1), es6 (1)
> **Tools:** terminal (2)
> **File Paths:** package.json (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Managing global directory](https://www.linkedin.com/learning/learning-npm-a-package-manager/managing-global-directory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-npm-a-package-manager/managing-global-directory?u=76281980&t=0)** - [Instructor] Sometimes, it makes sense to install globally. For example, I have a [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) tool for creating new [react](../../Skills/Web%20Development/React.js.md) applications installed globally on my system. So let's go over how to manage your global packages. Before I continue, there is a better way now where you can simply use the command of a package using the command, npx, and then adding the command. So for example, if I wanted to use Create React App and create a new application, I would do npx-create-react-app, like so, and then name my application. As you know, you need to name the application where you use this command. And that's how it would work. So what it does is install the packages temporarily on your system, and then does the command, and then removes the package file from the system. So that's how it works. But when and if you need to install globally, your packages will sit in these directories. You can manage your global directory with the same commands we'll use throughout this course. The only exception is that you add a -g or -global to your command. So let me show you. I'm going to go back to my terminal and I'm going to do [npm](../../Skills/Web%20Development/npm.md) install create-react-app, and then you would do -g, like this, and it would install this directly, globally on your system. If you have any permission errors when you do this, like a EACCES or anything like that,
>
> **[1:33](https://www.linkedin.com/learning/learning-npm-a-package-manager/managing-global-directory?u=76281980&t=93)** you can go here on this link and go through the instructions how to resolve it. I usually do sudo, which works for all of the cases for me, but for some people, you might have to do some tinkering to get EACCES. Also, this is a good Stack Overflow conversation here where you want to change the default global installation on your directory. If you want to do that, this is a good one. The link is here on the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (4), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (1), [npm](../../Skills/Web%20Development/npm.md) (1)
> **Prerequisites:** install (5)
> **CLI Commands:** npx (2), npm (1), sudo (1)
> **Env Vars:** eacces (2), cli (1)
> **Definitions:** is a  (3)
> **Analogies:** for example (2)
> **Cross-References:** go back to (1)
> **Documentation:** stack overflow (1)

#### [Updating a dependency](https://www.linkedin.com/learning/learning-npm-a-package-manager/updating-a-dependency?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-npm-a-package-manager/updating-a-dependency?u=76281980&t=0)** - [Instructor] Sometimes you will get warnings about the versions of your package being out of date. And also, I'll show you in a second how to do a simple command to understand which packages are outdated. At the same time, I'll show you how to install a specific version of a package. So I simulate having an outdated one. So let's go ahead and first install a specific version. So I'm going to [npm](../../Skills/Web%20Development/npm.md) install [ESLint](../../Skills/Software%20Development/ESLint.md) and we're going to install this version 5.2.0.
>
> **[0:36](https://www.linkedin.com/learning/learning-npm-a-package-manager/updating-a-dependency?u=76281980&t=36)** So now that we have this install, you can see that we have this version here. So if we want to know which packages are outdated you do npm outdated, like so. If you want to check the global directories, you do the same with a -g, like we've done before. But in this case, let's just check the ones that we have here. And as you can see, we have this package that is completely out of sync, like this is version 8.32. I have 5.2 and so on so forth. So then what you could do, you could do npm install eslint, or you can do also update, like so, eslint
>
> **[1:31](https://www.linkedin.com/learning/learning-npm-a-package-manager/updating-a-dependency?u=76281980&t=91)** (keyboard clacking) And then let's do install, like so.
>
> **[1:43](https://www.linkedin.com/learning/learning-npm-a-package-manager/updating-a-dependency?u=76281980&t=103)** So basically whenever you want to install update specific versions, you do one of the commands that we just did. So when I did the update, it didn't update because it felt that it had the most recent version. So update works on and off. If you want to really install the version that is wanted, in this case, you can install this or if you want to go from scratch, you uninstall and install and it's going to install the latest. Or you can be specific like we just did at the beginning, like 5.32. So if you wanted to do this, let's go ahead and do this. The latest version is what? 8.32. So let's go and do 8.32.0 and it's going to install the latest version in our system. And as you can see now, in the package.[JSON](../../Skills/Web%20Development/JSON.md) file, we have 8.32. This would've been the version that would've been installed initially if you just did npm install eslens. So this is how you install specific versions, you update or where you find out which versions are updated in your project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [npm](../../Skills/Web%20Development/npm.md) (4), [ESLint](../../Skills/Software%20Development/ESLint.md) (3), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Prerequisites:** install (15)
> **Versions:** 8.32 (2), version 5 (1), 2.0 (1), version 8 (1), 5.2 (1)
> **CLI Commands:** npm (4), find (1)
> **File Paths:** package.json (1)
> **Speakers:** - [instructor] (1)

#### [Removing a dependency](https://www.linkedin.com/learning/learning-npm-a-package-manager/removing-a-dependency?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-npm-a-package-manager/removing-a-dependency?u=76281980&t=0)** - [Instructor] Now let's go over the basics of removing a package. So it's very simple. To remove a package after you install it is "[npm](../../Skills/Web%20Development/npm.md) uninstall." And let's say we wanted to remove "[ESLint](../../Skills/Software%20Development/ESLint.md)." That would be it. If you wanted to remove something globally, you would do "-g." If you want to remove something from the dev dependencies, let's say "eslint" was in the dev dependencies, you would do "-save-dev" like so. So it's basically using uninstall as opposed to install. So let's go ahead and remove "eslint." And as you can see now, it's been removed from our dependencies. And this is how simple it is to remove a package.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ESLint](../../Skills/Software%20Development/ESLint.md) (3), [npm](../../Skills/Web%20Development/npm.md) (1)
> **Prerequisites:** install (2)
> **CLI Commands:** npm (1)
> **Speakers:** - [instructor] (1)

#### [Semantic versioning](https://www.linkedin.com/learning/learning-npm-a-package-manager/semantic-versioning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-npm-a-package-manager/semantic-versioning?u=76281980&t=0)** - [Instructor] When you look at the package files, you'll see version numbers with multiple numbers and some weird characters. What are those and what do they mean? So let's first take a look at the numbers. The first number is usually a major new release, like a full new version of a software. The second number is a minor release, like adding new functions to this major release, a new tool, for example. And finally, the last number are patches and fixes, usually for bug fixes and such. Now, what is the caret, the character that looks like a hat? This is the default when installing new packages, and it means that when you or another developer installs the dependencies, and let's say the package [JSON](../../Skills/Web%20Development/JSON.md) file says version 4.16.3 for Express, it means that MPM will install any recent version available, such as 4.xx. So if the most current version of Express is 4.25.4, it will install that version but never any version 5. The tilde and (indistinct) change Express with it is a more strict versioning approach and means that we won't install any versions beyond 4.16.x. So in other words, it would install only the latest version of 4.16 but never go to 4.17 or 4.25, which means it will install only the bugs and fixes. And if you want to be specific, in other words, always install 4.16.3, simply remove the character in the version number.
>
> **[1:35](https://www.linkedin.com/learning/learning-npm-a-package-manager/semantic-versioning?u=76281980&t=95)** So this allows you to maintain self-control over your dependencies. In some cases, some may completely break your application. And roll the drums... If you ever heard the term "semantic versioning", this is exactly what I just explained. This is something that most developers abide by when they publish to MPM.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Versions:** 4.16 (2), version 4 (1), 16.3 (1), 4.25.4 (1), version 5 (1)
> **Definitions:** means that (3), is a  (2), in other words (2)
> **Prerequisites:** install (6)
> **Env Vars:** mpm (2), json (1)
> **Analogies:** for example (1), such as (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Introduction to package-lock.json](https://www.linkedin.com/learning/learning-npm-a-package-manager/introduction-to-package-lock-json?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-npm-a-package-manager/introduction-to-package-lock-json?u=76281980&t=0)** - [Instructor] Whenever you run [npm](../../Skills/Web%20Development/npm.md) install on a new project, this weird file called package-lock.[JSON](../../Skills/Web%20Development/JSON.md) appears in your root directory. What is this file and its purpose? Well, first, I wanted to explain semantic versioning, which we went through on the last video so you have a good base to understand this file. In most cases, developers creating packages and publishing to npm will follow the major, minor, and patches release we went through on the last video. So in theory, any versions within 1.x.x shouldn't have breaking change to your application. And in this huge ecosystem of packages, in most cases, dependencies rely on others, and so on and so forth. So you can imagine how quickly this entire tree of dependencies could break if there isn't any order and people following semantic versioning. So going back to our example used in the last video, we just got this project from another developer without a package-lock.json file, and we installed the dependencies, start the project, but it doesn't work. We look at the package.json file and we see express version with a caret, 4.15.4. And we check, and now it is at 4.25.3. And this version, however not major, breaks our app. So this is where package-lock.json comes to the rescue. When we do npm install, the package.json file is the input and the package-lock.json is the output. And this file will guarantee the same install
>
> **[1:35](https://www.linkedin.com/learning/learning-npm-a-package-manager/introduction-to-package-lock-json?u=76281980&t=95)** every time we do an npm install whoever we pass this project to as long as we commit the package-lock.json file to our repo or when you pass this project along to someone, make sure to include it. So let's go back to our scenario. We got the same project as earlier, but now with a package-lock.json file included, and I run npm install. Well, it will install 4.15.4 instead of 4.25.3, unless I delete the package-lock.json file.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (9), [npm](../../Skills/Web%20Development/npm.md) (5)
> **File Paths:** package-lock.json (7), package.json (2)
> **CLI Commands:** npm (5), make (1)
> **Prerequisites:** install (6)
> **Versions:** 4.15.4 (2), 4.25.3 (2)
> **Cross-References:** in the last (1), go back to (1)
> **Analogies:** imagine (1)
> **Best Practices:** make sure to (1)


### 3. Publishing Your Package

[↑ Back to Table of Contents](#table-of-contents)

#### [Publishing an unscoped package](https://www.linkedin.com/learning/learning-npm-a-package-manager/publishing-an-unscoped-package?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-npm-a-package-manager/publishing-an-unscoped-package?u=76281980&t=0)** - [Lecturer] Before we dive into publishing an on scope package, let's define the difference between the two. Both the on scope and scope packages can be public and the on scope package is published without having an organization attached to the name. And this is usually the default. For example, if you publish a package with a name my-package, this is on scope. This type of package is always public versus the scope package could be public or private. Let me demonstrate. So another note that I want to add is when you see the repo where I publish the files for each of the videos, you're going to see first here main. So this is where you start. So I would suggest you fork this particular repo and get all the files from it and not use mine here. So what you are going to do once you have the repo fork you're going to use the appropriate videos at the end. So basically this is the end of two one. So basically you start from 02, 02. This is where you start 02, 03, and so on and so forth. So this is for example how I ended on 02 01. So if you want to see the ending before the end of the video, you can grab the 02 02 when you're working on 02 01 and so on so forth. So once you're ready to go, you actually either download the code to your own local machine or you use codespace like I'm using here. So local to get the actual code
>
> **[1:33](https://www.linkedin.com/learning/learning-npm-a-package-manager/publishing-an-unscoped-package?u=76281980&t=93)** on your machine or you use codespace. Okay. So in my case, I'm going to go back to my branch here that I was working on 03 one because this is where we're at. And this is where I'm working for me. For you, if you want to go and see at the ending of the two seven, this is where you're at. You would start from this video at three two if you wanted to see the ending of this one. I'm doing this because I'm going to publish myself. So just a note, if you get confused by what I'm doing, I'm always going to be a branch behind you if you check my screen. Okay. So what I'm going to do now is basically test the package cuz we already did our [npm](../../Skills/Web%20Development/npm.md) in it. So if you look in the instructions of npmjs you're going to see that the first thing you need to do is initialize your package. So do npm in it. In this case, I don't need to do it. So I did it here because I had to test all my connections to the npmjs. But, in this case you don't have to do this because we did this previously and we explored the package right here. So what we're going to do is basically go to the final steps of actually sending a package to js, because when you do a public on scope, it's the default regular name. You don't have the scope package and you don't make it private either. So this is is full public, everybody's going to see your package on npmjs. So you do it that way. The first thing you always do to make sure
>
> **[3:06](https://www.linkedin.com/learning/learning-npm-a-package-manager/publishing-an-unscoped-package?u=76281980&t=186)** that your package works is what you do, you can create a brand new window of vscode. As you can see, I'm on the web, so I'm using codespace. I'm not using my local copy of Visual Studio, I'm actually on codespace. So in this case, what you want to do is find exactly where this package resides on your local machine if you're doing a local machine and basically do an npm install on another project and do the full path. This is how you do it because it's not published yet. So you can just do, if your package was named my-package, like so you can do this because it's not published yet. So what you do instead, you do where exactly on your computer, is this package. So if I had this package locally, it might be somewhere on emmanuelhenry, and then it could be in [GitHub](../../Skills/Software%20Development/GitHub.md), my github directory, and then in my-package folder, something like so. Package... So if it was there by doing npm install and the full path of your package it's going to install that package and test it. If it installs, if there's no errors, if everything's going fine, that means your package is legit and you're able to publish it to npm. So that's the first step. Always do this. Once this is done, basically all you have to do at this point to publish a public non-scope package is
>
> **[4:43](https://www.linkedin.com/learning/learning-npm-a-package-manager/publishing-an-unscoped-package?u=76281980&t=283)** basically npm publish like so. And that's all you have to do. It's going to publish the name of your package and so on so forth. So this is how you publish an scope public package to npmjs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [npm](../../Skills/Web%20Development/npm.md) (6), [GitHub](../../Skills/Software%20Development/GitHub.md) (2)
> **CLI Commands:** npm (6), make (2), find (1)
> **Tools:** github (2), visual studio (1)
> **Prerequisites:** install (3)
> **Analogies:** for example (2)
> **UI Navigation:** go to (1)
> **Exercise Files:** download the (1)
> **Warnings:** note that (1)

#### [Publishing a scoped package](https://www.linkedin.com/learning/learning-npm-a-package-manager/publishing-a-scoped-package?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-npm-a-package-manager/publishing-a-scoped-package?u=76281980&t=0)** - [Instructor] Now let's explore a scope package. As mentioned in the last video, it can be public or private. Scope is when you add an organization to the name or your own username. So you have the package with an @ sign at the beginning. For example, if you added @manny as the organization to the My Package when you install it, you need to use the full name as demonstrated here with a forward slash when you install it after. So if somebody use your package, they're going to need to use the organization name before. So let's go ahead and explore how this works. So the first thing I'm going to do is remove the package.[JSON](../../Skills/Web%20Development/JSON.md) file here because you actually set the scope when you initialize your package.json file. So let's go ahead and do that. I'm just going to remove it and it's going to look different when you initialize it because now it's going to either read your notes folder here. I actually removed it so we don't have tons of stuff in here. And then I'm going to install a few things just to populate it a bit. So let's go ahead and do that. So the first thing you do is, again, like we've done in a previous video, you're going to do [npm](../../Skills/Web%20Development/npm.md) init. But now as opposed to just do it that way without any other commands, you're going to do -scope and then you're going to set what is the name of the organization or your username. So in this case, I'm going to do mannyhenri or it could be the name of organization
>
> **[1:34](https://www.linkedin.com/learning/learning-npm-a-package-manager/publishing-a-scoped-package?u=76281980&t=94)** which is algofields, like so. And then again it's going to go through the same steps to set up your package.json files. So package name, version of your package, description, what it is, index as the entry point, text command, the repository it's putting it automatically based on the fact that I'm using Codespace, keywords the name of the author, and so on so forth. This is okay. Boom, you have your package.json file here and you have like we had before no dependencies because I removed my note folder here and then you can add them to yourself. So what I'm going to do is just npm i express, just to add something in the dependencies. So we have express here. Then let's do npm i babel-[CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) -save--dev, like so.
>
> **[2:40](https://www.linkedin.com/learning/learning-npm-a-package-manager/publishing-a-scoped-package?u=76281980&t=160)** And then we'll have the dev dependencies showing up here. Okay, so we got some stuff here. Okay, I made a little boo boo, no -- here. So there you go. And then just, perfect. So now we have it in the dev dependencies. Okay, so we're good to go. Now as you remember, we have our package-lock.json file here which is super important when you actually commit to repo. So if you want everybody to have the same packages and you know, modules here. Now that we have set this as a scope package and you can see it right here, it says @algofields and then the name of the package, which is a super long one 'cause we didn't define it as specific. So what we could do is reset it as my package when we name it, it's fine. What we're going to do now is once you actually publish it, what's going to happen instead of just publish npm publish like the last video, this would go public. You need to define, well, actually this would go as scope private if we don't do anything else. So this is what we're going to do in the next video, but for this video we need to set it as public 'cause you have scope public and you have scope private. So for this video, we're going to do the public version. So to do npm publish and do it public, what you have to do is basically set -access
>
> **[4:16](https://www.linkedin.com/learning/learning-npm-a-package-manager/publishing-a-scoped-package?u=76281980&t=256)** to public, like so. So by doing this command here, it's going to tell npm.js to set it to public. And by the way, if you had any issues in the past video and this one because you don't have an account on npm.js, please make sure that you set one up. And once you have that set up, you shouldn't have any problems publishing your packages to npm.js. That's the only requirement. It may ask you to set an actual username for the npm.js on the publish command. If you do that, just set your account, add your login and username, and then it's going to have your OTP. OTP is basically the security code that it asks you after just to make sure your account is secure. Once you're actually logged in into your system with npm.js, you can just go and do npm publish automatically it will be logged in. So once you do this command, you will be publishing to npm.js as a scope package and the access is going to be public. So pretty much like [Angular](../../Skills/Web%20Development/Angular.md). For example, if you install any Angular packages, you see the @angular and then the name of the package after forward slash. This is how you do it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [npm](../../Skills/Web%20Development/npm.md) (12), [JSON](../../Skills/Web%20Development/JSON.md) (5), [Angular](../../Skills/Web%20Development/Angular.md) (3), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (1)
> **CLI Commands:** npm (12), make (2)
> **File Paths:** npm.js (6), package.json (4), package-lock.json (1)
> **Prerequisites:** install (4), set up (2)
> **Cross-References:** in the last (1), previous video (1), in the next (1)
> **Env Vars:** otp (2)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)

#### [Publishing a private package](https://www.linkedin.com/learning/learning-npm-a-package-manager/publishing-a-private-package?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-npm-a-package-manager/publishing-a-private-package?u=76281980&t=0)** - [Instructor] Okay, so now let's explore how to do a private package, a scope private package. So if you followed along from the third chapter doing the on scope first, doing the scope, this part is going to be very quick, very easy for you. So if you are jumping into this video, please watch the other ones so you get all the previous knowledge about how to initialize your package.[JSON](../../Skills/Web%20Development/JSON.md) file, how to set it as scope as you initialized it. So right now it should be scope. It should look something like this. There should be an @ in the name of your package here. If you don't have that and you have a simple name like my package or whatever is the package about, go back to the previous video. At the very least, initialize your package.json file. Make sure that there's an organization or username with your name of your package here and now you'll be able to do this video. Once you've done all of this, it's very simple. You don't need to do any extra steps to make it scope and private. All you need to do at this point is to do the publish, [npm](../../Skills/Web%20Development/npm.md) publish command here. And if you're logged in into your npm.js account, it's going to publish as scope and as private because that's the default. In the previous video, we showed you how to do scope. But public, there were some extra command to add in here. In this case, the default is private for the scope packages.
>
> **[1:35](https://www.linkedin.com/learning/learning-npm-a-package-manager/publishing-a-private-package?u=76281980&t=95)** So basically at this point, all you have to do is do npm publish, login into your npm.js account if you haven't done so on your local machine, and then off you go and you're able to actually publish it. So this is pretty much how it works for the scope private packages. You just do npm publish, Enter, and you're done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [npm](../../Skills/Web%20Development/npm.md) (5), [JSON](../../Skills/Web%20Development/JSON.md) (2)
> **CLI Commands:** npm (5), make (2)
> **File Paths:** package.json (2), npm.js (2)
> **Cross-References:** previous video (2), go back to (1)
> **Speakers:** - [instructor] (1)


### 4. Advanced Subjects

[↑ Back to Table of Contents](#table-of-contents)

#### [Working with your npm cache](https://www.linkedin.com/learning/learning-npm-a-package-manager/working-with-your-npm-cache?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-npm-a-package-manager/working-with-your-npm-cache?u=76281980&t=0)** - [Instructor] [npm](../../Skills/Web%20Development/npm.md) keeps a cache of your installed modules so that it doesn't have to get them every time, but that sometimes can lead to unexpected results. And worse, turn app that doesn't work properly. And the symptoms will be somewhat vague at first, but in most cases, when you try to install a module that should be working properly and it doesn't or a version of a module that doesn't work, just try clearing up your cache. Npm's official docs say sometimes npm's cache gets confused. And that is sometimes a reality that will lead to hours of frustration. Clearing your npm cache should always be part of your troubleshooting steps when working with modules and really not understanding what's happening. Since npm5, the cache self-heals. But again, we're talking about a process that is not foolproof and you might need to force it. So let me demonstrate a few commands worth knowing to manage your cache. So now, I'm back on my local machine, as you can see, because I don't want to do that on a codespace section or instance. So, right now, I just installed the dependencies. I did npm i, so to make sure that I have no modules in here on my local machine. And the commands that you need to do to clear or to clean your npm are the following. The first one is npm cache verify. So this will verify your cache to make sure that there's no problem with it. So as you can see, when it's done verifying the cache, it's going to give you some results. What are the packages installed,
>
> **[1:33](https://www.linkedin.com/learning/learning-npm-a-package-manager/working-with-your-npm-cache?u=76281980&t=93)** what are the problems, if any, and so on and so forth. So that's the first thing you do. You can read this and get a good indication if there's a problem or not. If you have issues, what you can do is clean the cache. And the way to do this is do npm cache clean, and just to make sure there's no issues, you do -force. And this is going to clean your cache. And that's it. With these simple commands, you'll be able to find out if there are any issues with your cache, and if so, you can force clear your cache.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [npm](../../Skills/Web%20Development/npm.md) (8)
> **CLI Commands:** npm (8), make (3), find (1)
> **Documentation:** official docs (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Running an npm audit](https://www.linkedin.com/learning/learning-npm-a-package-manager/running-an-npm-audit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-npm-a-package-manager/running-an-npm-audit?u=76281980&t=0)** - [Instructor] An [npm](../../Skills/Web%20Development/npm.md) audit is basically a command that will check the dependencies of your project and make sure they're safe to use. Whenever you install the new package, the command npm audit runs automatically and tells you if there are any issues with a package. Also, make sure you have NPM version six or above for this to work properly. So let's try it out. So I'm back in Codespace. I don't need to be on the local machine to check this. It was just for the cache thing. So what I'm going to do now is do npmm install socketio. So I'm going to install a new package for this. So as you can see already with installing socketio, we get a warning that there are some issues with this package. Let's run a full report to see what are the issues. So you have 21 vulnerabilities, two low, two moderate, and 13 high, and four critical. So what we could do as suggested here, let's do an npm audit. Okay, so now we got the report back from the npm audit. Let's just scroll a bit on this one here. It's going to give you some details. So we see more details as to what could be the issue. If the issue is low or moderate, in this case it says severity high, the recommended action is to fix at your own leisure. But if it's high or critical, you need to address it ASAP. Then it gives you a little bit of details as what is the issue. In this case, there's not much detail,
>
> **[1:32](https://www.linkedin.com/learning/learning-npm-a-package-manager/running-an-npm-audit?u=76281980&t=92)** but you can go higher and see reports with a lot more information here. In this case, it says no fix available. So what I would raise with the repo is an issue with this package with the owners of socketio and let them know that there's some vulnerabilities with this specific package. So in this way, at least the owners are aware of what the issue is. But if this is something that you're using in an enterprise or a company, I would recommend considering other packages over sockerio just to make sure you have something that's more stable and not vulnerable to a bunch of issues which could be security issues as well. Other details that you see is the name of the package, what version fixes the issue, the path, and more information if you'd like to explore this further. We don't have an example that has all these details, but if you see SemVer warning, that means the patch could be breaking the package. When I say SemVer, if you see S-E-M-V-E-R in one of the details here, that means that this could be breaking the package and therefore your project. So you want to move away from these without any questions. Then at that point, you can either do an npm audit fix like we just did, or simply install the packages one by one to see if you can get a more recent package and fix 'em. So all these packages were automatically installed by the main package socketio. What you could do also is try to reinstall these packages that are an issue.
>
> **[3:05](https://www.linkedin.com/learning/learning-npm-a-package-manager/running-an-npm-audit?u=76281980&t=185)** Looks like this one is ms. If you update ms, it might be installing the latest version depending if you have a caret or not. Again, use the techniques that we've explored in the course to get the latest version and see if that fix it. Run an npm audit. This is an important exercise to do if you have your application. If it is on an enterprise or a company environment, you want to make sure you do these things for security breaking issues. So this is how you can run an audit for all your packages. Make sure that whatever you're using is safe to be used in your application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [npm](../../Skills/Web%20Development/npm.md) (7)
> **CLI Commands:** npm (7), make (5)
> **Prerequisites:** install (4), make sure you have (2)
> **Definitions:** is an  (2), means that (1)
> **Env Vars:** npm (1), asap (1)
> **Warnings:** warning (2)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Scripting in package.json](https://www.linkedin.com/learning/learning-npm-a-package-manager/scripting-in-package-json?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-npm-a-package-manager/scripting-in-package-json?u=76281980&t=0)** - [Instructor] So let's talk about scripting. But before we do that, I want to make sure that you're at the same spot as I am. So you should pull from the 0403 branch on the repo, and you're going to have these extra files that I set up for you. So this is not a course about building an API, I have a full course on that if you want to learn how to build an API server with Node and Express, basically use some of the files from that course actually, and one of 'em is the index where you can see I'm starting an express server, and I just basically put the bare bones of it, and then in the package.[JSON](../../Skills/Web%20Development/JSON.md) file you're going to see that there's extra things that I've installed here. So I've installed actually Express and [Socket.IO](https://Socket.IO) is already there, but devDependencies weren't there. Like we have the latest version of Babel here. I basically earlier installed Babel and Node version of it, because I got so used to use that one as opposed to the scope one here. But now this is all the right files to set up an Express server. Again, this is not a course about sending up the server I just added the files for you. As long as you're on the branch 0403, you should see all these things. This is about scripting, we're going to do that right here, we're going to change the script. And the first thing you need to do, however, is to make sure that you install all the dependencies, so you have the node_modules here. So I'm going to do that, so I'm going to bring up my terminal through Control grabbing, you can grab it here as well. And let's just clear that up
>
> **[1:33](https://www.linkedin.com/learning/learning-npm-a-package-manager/scripting-in-package-json?u=76281980&t=93)** and do [npm](../../Skills/Web%20Development/npm.md) i. So scripting a package.json file gives us a way to do simple commands to repeat or execute complex commands. If you have a little bit of experience developing applications, you've seen this in action, there are so many of them that it's better to show you the documentation from npm. So if you go here at this specific link, you're going to see that we have examples of scripts. You have the scripts that are going to run before the compress, you have compress as well, and then postcompress. So basically whenever a script that you've put in these specific cycles are going to run there, there's also prepare, prepublish, prepack, postpack dependencies, and so on so forth. These are other life cycle scripts that you can use. So to prepare would be somewhere in here, and then what you need to run in this specific script. We're going to use the start one for our own. So start, and then what do we need to do when we do npm start? It's going to execute that command. So if you're familiar with scripting, this is going to sound very familiar to you. The only thing that we're showing today is when these scripts are going to run. It's a good thing that you should always go back to here to know what you can do and at what time. Okay, so let's go back to our server slash scripting here. I'm going to clear that, and I'm going to close this for a second and just minimize this, and let's go ahead,
>
> **[3:06](https://www.linkedin.com/learning/learning-npm-a-package-manager/scripting-in-package-json?u=76281980&t=186)** and work on the script. So the script is basically a quick script that starts with start. So basically when you run npm start this is what is going to run. And one of the things that we're going to need to install just before we do that is nodemon, so we're going to do that right after we do our script. Nodemon allows us to basically run a node server, and let it restart whenever you make changes to your server. And I love this one because it's always useful when you make changes, if you see that your server is broken or not, I'd rather do this than just using Node. So let's go ahead, and the script starts with nodemon, and then what is the entry point of your server, which is the JS file that I added in the project. And you need to compile it with Babel and in this case babel-node, which is now the better version of Babel specific to Node like so. And this is going to make the whole thing work. So once we have that in [Codespaces](../../Skills/Software%20Development/Codespaces.md) it's going to save it automatically, if you're working locally on your system you have to save it yourself. And now what we're going to do is install nodemon. So let's go ahead and bring up the terminal and I'm going to do npm i nodemon like so. And then once this is done, all we have to do to run our server is to do npm start. Once we do the npm start
>
> **[4:39](https://www.linkedin.com/learning/learning-npm-a-package-manager/scripting-in-package-json?u=76281980&t=279)** it's going to run our script that we just written here. Otherwise we would have to write here every single time, node, .index, blah, blah, blah, blah. You don't want to do that, you want to do a simple script execution by doing npm start this is what it's going to run. And then basically it's running this script, so let's go ahead and do that. And now server is running on port 3000, and you could actually preview it if you want to open it in your browser. You're going to see basically the command that we have on our index here. So when you get the actual server, it's going to say Node and express server is running on port 3000, but this is not about learning express and node server, but I just wanted to let you know this is normal behavior if you see this and then you see the actual message here on the browser. Okay, so this is how you run scripts inside of npm and Node and Express server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [npm](../../Skills/Web%20Development/npm.md) (9), [JSON](../../Skills/Web%20Development/JSON.md) (2), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (1)
> **CLI Commands:** node (10), npm (9), make (5)
> **Prerequisites:** install (3), set up (2)
> **File Paths:** package.json (2)
> **Code Identifiers:** devdependencies (1), node_modules (1)
> **Ports:** port 3000 (2)
> **Env Vars:** api (2)
> **Tools:** terminal (2)

#### [Introduction to npx](https://www.linkedin.com/learning/learning-npm-a-package-manager/introduction-to-npx?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-npm-a-package-manager/introduction-to-npx?u=76281980&t=0)** - Have you ever experienced installing [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) tools from MPM packages that you used only once in order to create new projects? Good examples are Yo Man or the Create [React](../../Skills/Web%20Development/React.js.md) app tool or the [Angular CLI](../../Skills/Web%20Development/Angular%20CLI.md) tool. What can result from installing these tools is package pollution in your global directories. And most of us rarely go checking on what is installed globally, if ever. The main purpose of creating NPX was to resolve these issues. And as you'll see, there are many use NPX can be used, and we'll explore a few. Also make sure you have MPM version 5.2 or above to have access to NPX. So let's go ahead and stop our server. I'm going to go and do control c, and then I'm going to clear this and let's do an example in this project. Let's say for example, we want to use Angular CLI and create a new app. Well in this case we would have to go completely out of this container. So I suggest you do this on a brand new Codespace if you're using Codespace. So out of this particular repo, or I suggest you do this on your local machine and create a brand new project. So I'm going to basically bring my own copy of VS code in a new window. I'm going to start new from a different directory. So I'm just going to check where I'm at. So I'm going to go on my desktop. Good.
>
> **[1:32](https://www.linkedin.com/learning/learning-npm-a-package-manager/introduction-to-npx?u=76281980&t=92)** So I'm going to make a new directory test app, like so, and then cd into my test app. Perfect. So in this particular directory, I'm going to go ahead and create a new [Angular](../../Skills/Web%20Development/Angular.md) project. So instead of installing Angular CLI on my own system, I'm going to use NPX and run the actual command from Angular CLI right away. So the way it works is NPX dash p, and the name of the package is Angular CLI, like so. And then use the command to create a new project with Angular, new, myapp. Let's just do my app. Now, it's going to create a folder inside my folder. I don't care. If you want to do this without creating a new directory, you can do that directly without making this command, or just get out of that test app. But I want to insulate that app inside of a folder so I can delete it after. So this is the command from basically Angular CLI, and this is the package that's going to be leveraged to run this command. And the beauty of it is by using NPX, we're not going to have Angular CLI in our system after it's going to cash it out. I say yes. No. I won't add a whole bunch of stuff for now, because this is just a project
>
> **[3:06](https://www.linkedin.com/learning/learning-npm-a-package-manager/introduction-to-npx?u=76281980&t=186)** that I want to create just for testing purposes. Okay, so in order to run our project, we will need to get into the actual folder. There's an app folder. So cd, my app, and then let's take a look. We have all these things inside of the modules. So if you wanted, you could run whatever scripts that comes with Angular or run your application. So this is really cool. You can do the same inside of Angular and install Mocha. So you can do NPX and install Mocha right here. And you would say yes to this, And there's no test file. That's normal. We didn't create anything, or no test files inside of that system. That's why you get this error. But now Mocha is installed inside of your Angular project. You can also do scripts inside of your project. So if we go back to our project here and do a script, you can do a script inside of your package .[JSON](../../Skills/Web%20Development/JSON.md) here that is going to leverage NPX. So let's copy that for example. And let's do for example, create an Angular application, and then the script would go for something like we did here. So I'm going to go and grab my script that I've done here. NPX create a new app like so, copy that go back to my Codespace and put it inside here.
>
> **[4:41](https://www.linkedin.com/learning/learning-npm-a-package-manager/introduction-to-npx?u=76281980&t=281)** And let's make sure we make a comma for my second. So if I save this inside my project and I go MPM run, and by the way you use run when this is a custom command here, because this is not part of the lifecycle ones that are reserved by MPM. You need to do MPM run and then create Angular app. It will run this NPX command. I'm not going to do that because I don't want to create a project inside of my project here. It's going to be a bit messy. But this is how you would do it. So if you really think about it, there are multiple cases where you could use this and if you want to have more details, check the reference for more details on this link. So then you can go down and see in the description, the information about NPX, and it will give you all the little commands that you can do inside of NPX. There's a lot and it's a great tool.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Angular CLI](../../Skills/Web%20Development/Angular%20CLI.md) (7), [Angular](../../Skills/Web%20Development/Angular.md) (7), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (1), [React](../../Skills/Web%20Development/React.js.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Env Vars:** npx (12), cli (8), mpm (5)
> **CLI Commands:** npx (12), make (4), cd (2)
> **Analogies:** for example (3)
> **Prerequisites:** install (2), make sure you have (1)
> **Cross-References:** go back to (2)
> **Versions:** version 5 (1)
> **Tools:** vs code (1)

#### [Alternatives to npm](https://www.linkedin.com/learning/learning-npm-a-package-manager/alternatives-to-npm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-npm-a-package-manager/alternatives-to-npm?u=76281980&t=0)** - [Instructor] [npm](../../Skills/Web%20Development/npm.md) is constantly growing into a better tool every year with new commands and additions to its already solid list of commands. But there are alternatives you could use. Beware that more often than not, if something works well in these alternatives, most likely NPM will implement it too. For example, the package-lock.[JSON](../../Skills/Web%20Development/JSON.md) file was introduced not too long ago after Yarn did it. I used yarn for a bit and then switched back to NPM. So you might find other alternatives on the web. And if you do, you can test it but most likely either Yarn or NPM are the two good alternatives. So let's take a look at Yarn package. Yarn is a really good alternative which was introduced by the [Facebook](../../Glossary/Service/Facebook.md) team. It is pretty much almost the same as NPM as it also used a lockfile to prevent any project issues when you passed them around. It's also known to be a bit faster, but I'm a big user of NPM and actually used this for a bit. And then all the stuff that Yarn was introducing NPM is also doing it. So I was very familiar with NPM versus Yarn so I told myself, let's go back to my old school stuff. But Yarn is a very good alternative and I've seen people use it on and off and I know that it's a good alternative. So if you want to use this, you can go ahead and use Yarn.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [npm](../../Skills/Web%20Development/npm.md) (8), [JSON](../../Skills/Web%20Development/JSON.md) (1), [Facebook](../../Glossary/Service/Facebook.md) (1)
> **CLI Commands:** yarn (9), npm (8), find (1)
> **Env Vars:** npm (8)
> **Definitions:** is a  (2)
> **File Paths:** package-lock.json (1)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Furthering your npm journey](https://www.linkedin.com/learning/learning-npm-a-package-manager/furthering-your-npm-journey?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-npm-a-package-manager/furthering-your-npm-journey?u=76281980&t=0)** - [Instructor] I hope you now have a solid understanding of the basics with MPM. There are multiple areas you could explore after completing this MPM course. For example, you can move on to learning more about [Node.js](../../Skills/Web%20Development/Node.js.md) and building projects such as an API application with Express. You can also look into other frameworks such as [React](../../Skills/Web%20Development/React.js.md) and [Angular](../../Skills/Web%20Development/Angular.md). All of these types of projects use MPM extensively. Finally, you can also decide to dive into security subjects related to Node and MPM. They are several courses on these subjects in our library. MPM and Node are so present everywhere in [JavaScript](../../Skills/Software%20Development/JavaScript.md) programming that wherever you throw your dart you'll most likely land on subject touching MPM. Thank you for taking my course, and I'll see you in a bit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Node.js](../../Skills/Web%20Development/Node.js.md) (1), [React](../../Skills/Web%20Development/React.js.md) (1), [Angular](../../Skills/Web%20Development/Angular.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Env Vars:** mpm (6), api (1)
> **CLI Commands:** node (3)
> **Analogies:** such as (2), for example (1)
> **File Paths:** node.js (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Emmanuel Henri](../../Instructors/Web%20Development/Emmanuel%20Henri.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/learning-npm-the-node-package-manager-4362456/codespaces)

## Skills Covered

- Package Management
- npm

## Path Context

### In [Explore Web Development with Node.js](../../Paths/Web%20Development/Learning%20Paths/Explore%20Web%20Development%20with%20Node.js.md)
← [Node Js Essential Training](Node%20Js%20Essential%20Training.md) | **2 of 11** | [Node.js- Testing and Code Quality](Node.js-%20Testing%20and%20Code%20Quality.md) →

### In [Explore App Development with the MERN Stack](../../Paths/Database%20Management/Learning%20Paths/Explore%20App%20Development%20with%20the%20MERN%20Stack.md)
← [Node Js Essential Training](Node%20Js%20Essential%20Training.md) | **4 of 13** | [Express Essentials- Build Powerful Web Apps with Node.js](Express%20Essentials-%20Build%20Powerful%20Web%20Apps%20with%20Node.js.md) →

## Appears In

- [Explore Web Development with Node.js](../../Paths/Web%20Development/Learning%20Paths/Explore%20Web%20Development%20with%20Node.js.md)
- [Explore App Development with the MERN Stack](../../Paths/Database%20Management/Learning%20Paths/Explore%20App%20Development%20with%20the%20MERN%20Stack.md)

---

[↑ Back to top](#)