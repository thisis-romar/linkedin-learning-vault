---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: building-monorepos-on-github-17057806
url: "https://www.linkedin.com/learning/building-monorepos-on-github-17057806"
level: Advanced
updated: 7/30/2025
learners: 39390
skills:
  - GitHub
exercise_files: true
github: "https://github.com/LinkedInLearning/building-monorepos-on-GitHub-3086076"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFhDmiByitrFw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1667582740341?e=2147483647&amp;v=beta&amp;t=aGad4_rlXhSKDVLguVCHNzM1zFaccHsM8J0Qu91Wsrk"
linkedin_topic: DevOps
learning_paths:
  - '[Essential New Skills in Software Engineering](../../Paths/DevOps/Learning%20Paths/Essential%20New%20Skills%20in%20Software%20Engineering.md)'
next_courses:
  - '[Introduction to Agile Development Practices- Bring Agile to Your Development Pipelines](Introduction%20to%20Agile%20Development%20Practices-%20Bring%20Agile%20to%20Your%20Development%20Pipelines.md)'
path_nav: '[{"path":"Essential New Skills in Software Engineering","position":1,"total":4,"prev":null,"next":"Introduction to Agile Development Practices- Bring Agile to Your Development Pipelines"}]'
path_count: 1
tags:
  - course
  - topic/devops
  - topic/software-development
  - skill/github
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/Building%20Monorepos%20On%20Github.md)

![Building Monorepos On Github](https://media.licdn.com/dms/image/v2/D560DAQFhDmiByitrFw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1667582740341?e=2147483647&amp;v=beta&amp;t=aGad4_rlXhSKDVLguVCHNzM1zFaccHsM8J0Qu91Wsrk)

# Building Monorepos On Github

> If you’re a developer or system administrator, you’re always looking for easier and more collaborative ways to manage a large codebase for your organization. Monorepos allow you to manage code for many projects on a single repository. In this course, Carlos Solís teaches you how to build and host monorepos on GitHub. Discover how monorepos can help you reduce complexity, avoid code dependencies, a

> [LinkedIn Learning](https://www.linkedin.com/learning/building-monorepos-on-github-17057806) | Advanced | 39K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Managing code in monorepos](#managing-code-in-monorepos)
  - [What is a monorepo, and why should you use one?](#what-is-a-monorepo-and-why-should-you-use-one)
  - [Using GitHub Codespaces with this course](#using-github-codespaces-with-this-course)
- [**1. Creating and Building Monorepos**](#1-creating-and-building-monorepos) (7 videos)
  - [Creating your first monorepo](#creating-your-first-monorepo)
  - [Setting up config files](#setting-up-config-files)
  - [Adding a new project](#adding-a-new-project)
  - [Running commands](#running-commands)
  - [Building your monorepo](#building-your-monorepo)
  - [Monorepo Git hooks](#monorepo-git-hooks)
  - [Installing shared components](#installing-shared-components)
- [**2. Tools to Manage Your Monorepos**](#2-tools-to-manage-your-monorepos) (4 videos)
  - [How to migrate projects to your monorepo](#how-to-migrate-projects-to-your-monorepo)
  - [Running custom commands on your monorepo](#running-custom-commands-on-your-monorepo)
  - [Dependabot pull requests](#dependabot-pull-requests)
  - [Other tools to manage monorepos](#other-tools-to-manage-monorepos)
- [**3. GitHub Actions for Monorepos**](#3-github-actions-for-monorepos) (6 videos)
  - [Getting familiar with GitHub Actions](#getting-familiar-with-github-actions)
  - [Creating the perfect workflow for your monorepo](#creating-the-perfect-workflow-for-your-monorepo)
  - [Creating workflows for your apps](#creating-workflows-for-your-apps)
  - [Using multiple workflows for your apps](#using-multiple-workflows-for-your-apps)
  - [Building and deploying monorepos with Netlify](#building-and-deploying-monorepos-with-netlify)
  - [Deploying monorepos with GitHub actions](#deploying-monorepos-with-github-actions)
- [**4. Best Practices**](#4-best-practices) (2 videos)
  - [How to design your monorepo](#how-to-design-your-monorepo)
  - [Architectural governance in your monorepo](#architectural-governance-in-your-monorepo)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Managing code in monorepos](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/managing-code-in-monorepos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/managing-code-in-monorepos?u=76281980&t=0)** - [Instructor] The use of modified code repositories or mono repos is becoming more and more popular because of the advantage of having just one place to store all your code, system conflicts, and tests. In this course, we'll learn how to create mono repos from the basics. We will go from zero to build an automated deployment process of applications. I'm Carlos Solis, author and web developer for almost 20 years, working on applications of different size all over the world, and I can wait to show you how to get the most out of your mono repos by using best practices, improving performance, and managing all your apps and dependencies in just one place.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### [What is a monorepo, and why should you use one?](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/what-is-a-monorepo-and-why-should-you-use-it?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/what-is-a-monorepo-and-why-should-you-use-it?u=76281980&t=0)** - [Instructor] Before we start working on monorepos, let's begin defining what a repository is. Commonly known as repos, they could contain one or several software package that include any kind of software piece and they could hold a website, a mobile app, or an API. Repos can have one or many programming languages. A mobile app, for example, could use mainly one programming language such as [Java](../../Skills/Software%20Development/Java.md), [Kotlin](../../Skills/Software%20Development/Kotlin.md), or [Swift](../../Skills/Mobile%20Development/Swift%20(Programming%20Language).md). One of the most important part of a repository is [Version Control](../../Skills/Web%20Development/Version%20Control.md): a system to store and manage every change made in the code that allows developers to revert the software to any previous state. You can think that a repo is a container for a project which is one of the most common use cases. For example, a repo can hold every line of code needed to create a full-stack app. Things start to get complex when you need to create a project with different codebases. For example, if a web app has a team working exclusively on the frontend and another separate team dealing with the backend, the most common solution here is to create separate repositories with different team members, workflows, and deploy tools. The more complex the software gets, the more code units are required, like in this example, using [Microservices](../../Skills/Software%20Development/Microservices.md) architecture, where different teams manage every microservice. Same happens here,
>
> **[1:33](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/what-is-a-monorepo-and-why-should-you-use-it?u=76281980&t=93)** with microfrontends architecture applied in the frontend. Several independent micro apps are running in parallel. The complexity of handling this kind of software could be significant and require extensive time and resources. There are different options to manage this kind of problem. One of them is using a polyrepo or multirepo approach. Polyrepos are multiple repositories that are part of the same app. Every repo contains a part of the app, maintained, usually, by different teams. There are no strict rules about organizing a polyrepo, but usually each repo groups code that is part of a logic unit. Each repo should be decoupled, allowing teams to deploy their changes independently. Here, in this example, we can see that if a team makes a change on the repo before it's available to the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the app, it needs to be compiled or integrated. That requires a form of orchestrator or building task that can run on demand or schedule, for example, once or twice a day. As with every solution, polyrepo have trade-offs, but it allows teams to work independently, there is a risk of ending with too many repos. Every time a project needs a common dependency, it will be duplicated, increasing the size of the repo. Finally, when a change affects more than one repo needs to be implemented in phases, to make sure every required part is already deployed.
>
> **[3:11](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/what-is-a-monorepo-and-why-should-you-use-it?u=76281980&t=191)** Monorepos are a different approach. Here, instead of having multirepositories, everything is grouped in the same repo. Every part of the code is under the same version control. A monorepo is designed to hold large projects, sharing the same libraries and models, reducing duplicated dependencies. In this example, we can see how a monorepo works. The code is one massive block and every time a developer introduce a change on a model or section of the app, the whole system is updated. Monorepos reduce code complexity, code duplicates, and the number of steps required to deploy new features. If we need to compare both approaches, the most important point is that there is no silver bullet. The perfect solution depends on the details and requirements of each project. Both cases have trade-offs. While monorepos reduce code duplication, they can become too big and require governance and attention to good practices. On the other hand, polyrepos could be easier to handle, but working across repo makes changes slow and prone to hard-to-track errors. Finally, since monorepos are recommended for large projects with multiple teams, running a small website or a single mobile app will not benefit from a monorepo approach.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Version Control](../../Skills/Web%20Development/Version%20Control.md) (2), [Java](../../Skills/Software%20Development/Java.md) (1), [Kotlin](../../Skills/Software%20Development/Kotlin.md) (1), [Swift](../../Skills/Mobile%20Development/Swift%20(Programming%20Language).md) (1), [Microservices](../../Skills/Software%20Development/Microservices.md) (1)
> **Analogies:** for example (4), such as (1)
> **Definitions:** is a  (2), known as (1)
> **Prerequisites:** before we start (1), required to (1)
> **CLI Commands:** make (1)
> **Env Vars:** api (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Using GitHub Codespaces with this course](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=0)** - [Instructor] This is Ravi del Lobos, senior staff instructor at [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning, and I'm going to show you how to work with LinkedIn Learning courses using [GitHub](../../Skills/Software%20Development/GitHub.md) [Codespaces](../../Skills/Software%20Development/Codespaces.md). Codespaces is a code editor in the cloud with the full power of Visual Studio Code. It allows for real world hands on practice that mirrors [Software Development](../../Topics/Software%20Development.md) in the workplace. This course was created using GitHub Codespaces. Using Codespaces, you have everything you need to get going without needing complex installations or build tools. One click and you're ready to go. To practice along with the course, you can create a codespace directly from the course overview page. First, click open next to GitHub Codespaces. If you're already logged in, you'll be directed to a Getting Started with GitHub Codespaces page. If you're not logged in, you'll be prompted to log in or create a free GitHub account first. From this page, click on create codespace on main. The first time you open up a codespace, it might take a few minutes to create the virtual machine. Once it's done, you'll enter the code editor environment. If you're familiar with Visual Studio Code, this is a special version of that editor running on GitHub's servers. Your course can have one or more extensions pre-installed based on the course you're taking. Those can be found in the extensions panel. Because this is a browser, it's easy to inadvertently close the browser window and lose the editor. If you do that, don't panic.
>
> **[1:33](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=93)** Codespaces saves everything you're doing on a virtual machine. You can always get the codespace back for this repo right here. Notice that it even remembered that I had opened the extensions panel. An alternate way to create a codespace is directly from one of our course's GitHub repositories. From here, click code and then create codespace on main. You can also restart a previous codespace from this location. GitHub Codespaces is compatible on devices with smaller screen sizes, like mobile phones or tablets, but it is optimized for larger screens, so we recommend that you practice along with this course on a laptop or desktop computer. The sample course I'm looking at is what is known as a flat branch repository. You can tell because there's a single branch when you click on the branch icon on the status bar. You can also tell because there are different folders for each of the videos in the course. This is a sample of what a multi-branch repository looks like, which is more common when you're working with web frameworks. If you go to the branch icon on the status bar, you can see that there's more than one branch. You can switch to the different branches using this menu. The branches are named with the chapter and the video number you're watching. If you see a B at the end of the branch, that's how the code looked at the beginning. If you see an E, that's how the code looked at the end. Let's switch to how the code looked on chapter two
>
> **[3:09](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=189)** in the third video. I'll choose the beginning branch. As you work through a course, you might make some changes on a branch. I'm going to make a minor edit on the index.[HTML](../../Skills/Web%20Development/HTML.md) file right here. I'm going to go ahead and save that, and you can see that I've modified this file, because there's an M right here and the branch name now has an asterisk on it. If I try to switch to another branch that causes major changes, like, say, 0703E, I may see a dialog box like this. If you don't care about saving your changes, you can simply hit the force checkout button. It will let you switch to that branch. You can then choose to discard the changes on this file. Your instructor will let you know what the folder structure is for your course. Forking lets you create your own copy of the repository on your account so that you can keep any changes that you've made, even if you've deleted the codespace. To create your own fork, you can click on the fork button on their repository. I'm going to hit create fork. Now I have my own copy of this repository, and if I want to, I can start a new codespace on that fork. This forked version is almost exactly like the original repository, but it will let you push
>
> **[4:44](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=284)** your own changes. Notice that the URL of the repository is slightly different. Let's go ahead and make a simple change to this file right here.
>
> **[5:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=300)** I'm going to save it. You'll note that there is an M right here, as well as an asterisk on this branch. In the source control panel, you can also see a 1 for the change that we just made. Let's go ahead and try to commit this change. I'm going to hit the commit button, and I'll ask it to go ahead and stage the changes. And then I'm going to hit this button here. I'll hit OK. You can also let it go ahead and run [Git](../../Skills/Software%20Development/Git.md) [Fetch](../../Skills/Web%20Development/Fetch.md). That way, it'll automatically sync with your forked repo. Now that change will be stored in your own version of this repository. Don't worry if you forget to fork a repo and then try to push changes. Codespaces will also ask you if you want to create a fork automatically. Look for additional course-specific tips from the instructor. Now let's get back to the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Codespaces](../../Skills/Software%20Development/Codespaces.md) (9), [GitHub](../../Skills/Software%20Development/GitHub.md) (8), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [Software Development](../../Topics/Software%20Development.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Tools:** github (8), visual studio (2)
> **UI Navigation:** switch to (4), click on (2), go to (1)
> **Definitions:** is a  (4), is an  (1)
> **CLI Commands:** make (3), git (1)
> **File Paths:** index.html (1)
> **Env Vars:** url (1)
> **Warnings:** note that (1)


### 1. Creating and Building Monorepos

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating your first monorepo](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-your-first-monorepo-26274110?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-your-first-monorepo-26274110?u=76281980&t=0)** - [Instructor] We're going to create your first monorepo, but before we begin, make sure you have an active repository on your workspace. Use the comments [Git](../../Skills/Software%20Development/Git.md) init to initialize a new repository, or git clone with the URL where you want to download your original repository. I already have my repository initialized and connected with [GitHub](../../Skills/Software%20Development/GitHub.md). Now you need to install Rush on your system. Rush is a Monorepo manager that is reliable and scalable. You can find more information about it on [rush.io](https://rush.io). I'm working on Visual Studio Code, and we'll use the terminal. The first thing I'll do is to install Rush with the command [npm](../../Skills/Web%20Development/npm.md) install -g. This means the application will be globally available on your whole system. Now include the name of the package, in this case, [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md)/rush. Hit enter, and this will install Rush on your system. To ensure everything is installed properly, let's run these two commands. First type node --version. Here you see the node version installed, and second type rush --h. This way, we know that both Rush and Node
>
> **[1:33](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-your-first-monorepo-26274110?u=76281980&t=93)** are up and running. Now that we have all the settings required, we need to run the first command to initialize the monorepo. Here in the terminal type rush init and hit enter.
>
> **[1:49](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-your-first-monorepo-26274110?u=76281980&t=109)** This will start our first monorepo, and let's peruse the files that Rush created for you. First, you'll find the common folder with configuration settings we can use across all the different applications in this Monorepo. We also have different configuration files, especially the Rush.[JSON](../../Skills/Web%20Development/JSON.md) file that manages the configuration of the whole project. Now that the repo is successfully created, it's time to save the changes in a GitHub repository. I'm going to clean the terminal with command + K and type git add .to stage all the different files we just created, and commit the changes with Git Commit -M and include a new message init repo. Now all your files are stored in the main repository. If you followed these steps, congratulations, you just created the monorepo using rush.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (4), [GitHub](../../Skills/Software%20Development/GitHub.md) (2), [npm](../../Skills/Web%20Development/npm.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **CLI Commands:** git (4), node (3), find (2), make (1), npm (1)
> **Tools:** terminal (3), github (2), visual studio (1)
> **Prerequisites:** install (4), make sure you have (1)
> **File Paths:** rush.json (1)
> **URLs:** [rush.io](https://rush.io) (1)
> **Env Vars:** url (1)
> **Definitions:** is a  (1)

#### [Setting up config files](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/setting-up-config-files-26270150?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/setting-up-config-files-26270150?u=76281980&t=0)** - [Instructor] Configuration settings are key to keep your monorepo organized and consistent. In a Rush based monorepo, these settings are stored in the rush.[JSON](../../Skills/Web%20Development/JSON.md) file. When you open this file for the first time in Visual Studio Code, you're likely to see some syntax errors. To fix that, go to the lower right corner of the screen and select the language mode. Click here. You might say JSON, and then JSONC, select the JSON with comments option. This enable support for comments inside JSON files and removes those error messages. If you run into issues building your app, make sure the rush.json file includes matching versions for Rush No JS and PMPM. The easiest way to check is by typing in the terminal rush --version to verify the current version of your system. Right after that, you can run node --version and look on the rush.json file, the value node supported version range. Compare it with your current node version, and if it's within the specified range, Rush will work without issues or update if necessary. Keep this in mind anytime you upgrade node or work with an older config file
>
> **[1:33](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/setting-up-config-files-26270150?u=76281980&t=93)** and make sure to update this version range so everything runs smoothly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (6)
> **CLI Commands:** node (4), make (2)
> **Env Vars:** json (3), jsonc (1), pmpm (1)
> **File Paths:** rush.json (3)
> **UI Navigation:** select the (2), go to (1)
> **Tools:** visual studio (1), terminal (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### [Adding a new project](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/adding-a-new-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/adding-a-new-project?u=76281980&t=0)** - [Instructor] Let's create a new project and add it to your monorepo. First, I want to modify this project. I will create a new folder called Monorepos, and inside this folder, I want to include the name of this lesson. I will move the rush.[JSON](../../Skills/Web%20Development/JSON.md) file and the Common folder. Those are the configuration files for Rush. Now we can handle Rush monorepo inside this folder. Let's start by creating a new folder called Apps. This folder will be the host of all the applications in this monorepo. To open this monorepo, just select the folder, right click and select the option Open in Integrated Terminal. As you can see, we are inside this folder and every comment we include here only affects this monorepo. So let's create a new project. Let's go to the new folder called Apps with the command cd apps and include the command [npm](../../Skills/Web%20Development/npm.md) create vite customers.
>
> **[1:27](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/adding-a-new-project?u=76281980&t=87)** This will create a new project using vite, and the project will be called Customers, hit Enter. In this case, I want to select [React](../../Skills/Web%20Development/React.js.md) project based on [JavaScript](../../Skills/Software%20Development/JavaScript.md). There's no need to run npm install. Rush will handle all the dependencies for you. Now, let's add your projects to this monorepo. Open the rush.json file and find the project's value. Here we can include all the projects for this monorepo. We need to include two values. First, the package name, we can copy here, the package name, and the other value it's project folder.
>
> **[2:17](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/adding-a-new-project?u=76281980&t=137)** For the package name, this should match the name registered in the app package JSON file. So let's open the new app called Customers, locate the package, the JSON file, and find the name value, in this case customers. So including here, and the project folder in this case is apps/customers. Save and if you want to add more apps, just repeat this process, and here comes the best part of setting up a monorepo using Rush, it's running the command rush update, hit Enter. This command pulls together the dependencies of all your configured projects and install them in one central location. Run this command every time you start working on a new project or make dependency changes. Check the Commons folder of this project. Inside it, you find the Temp folder and here is located a Node_models folder where all the dependencies are located. If you check your project Node_models folder, you'll notice they only contain the most essential dependencies. These setup make it easier to maintain, update, and scale your projects efficiently.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (4), [npm](../../Skills/Web%20Development/npm.md) (2), [React](../../Skills/Web%20Development/React.js.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **CLI Commands:** find (3), npm (2), make (2), cd (1)
> **UI Navigation:** select the (2), open the (2), go to (1)
> **Prerequisites:** install (2), setup (1)
> **File Paths:** rush.json (2)
> **Env Vars:** json (2)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Running commands](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-commands?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-commands?u=76281980&t=0)** - [Instructor] Running rush comments is a crucial part of the development workflow in a monorepo environment. Let me show you how to do it. First, locate the folder that contains your monorepo. In this case, I have the name of this lesson, right click on it and select the option Open in Integrated Terminal. This will open a terminal session with access to all rush comments. The first thing you should do is to update the project dependencies. In the terminal type rush update. Hit Enter. This comment, make sure all dependencies are installed correctly and your workspace is up to date. If you encounter any issues running this comment, try resetting and install dependencies with the following comment. Type rush, update and include the argument --perch.
>
> **[0:57](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-commands?u=76281980&t=57)** This comment clears the existing state and reinstalls packages, which often resolves set of problems. Next, navigate to the application folder you want to work on. For example, here we are working on an application called Customers Inside an Apps folder. So to navigate there type cd apps/customers.
>
> **[1:24](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-commands?u=76281980&t=84)** Once you incite the folder, you can run local development comments using rushx. If you open the package, the [JSON](../../Skills/Web%20Development/JSON.md) file of this project, you can find a list of available comments. For example, if you want to run the dev comment type rushx and then the comment, dev. This will make the app start in local mode with shared dependencies stored on the monorepo. With this comment, you can debug the code of a single application of a monorepo. Now you're ready to run comments and manage your apps using rush.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **CLI Commands:** make (2), cd (1), find (1)
> **UI Navigation:** click on (1), select the (1), navigate to (1), open the (1)
> **Tools:** terminal (3)
> **Analogies:** for example (2)
> **Env Vars:** json (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)

#### [Building your monorepo](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-your-monorepo-26273169?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-your-monorepo-26273169?u=76281980&t=0)** - [Instructor] Building projects is essential for testing and deploying your applications. I have two projects that need to be added to this monorepo. So first, I locate the monorepo for this lesson and locate the rush.[JSON](../../Skills/Web%20Development/JSON.md) file. Here I have one project included, and in the apps folder, I include two more called Finance and Shop. So to make sure the name of the package, just open the project, select package to JSON, and verify the name of the project. In this case, I include a finance application located in apps/finance. I repeat the process one more time for a shop application located in apps/shop.
>
> **[1:05](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-your-monorepo-26273169?u=76281980&t=65)** Save the changes. Right click on my monorepo folder, open in integrated terminal, and here I can run the command rush update. This install all dependencies in a shared folder. And now you can start the building process. This is way to build a process using rush is by running the command rush, build. Here, rush start building your projects. This means it creates an optimized or compiled version of each application. For example, in the rush.json file, you can see that I have a package named customers. To build only this package, run rush, build -o
>
> **[1:57](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-your-monorepo-26273169?u=76281980&t=117)** and the name of the package, customers. This command builds only that one application. Rush has a built-in cache system. If you build a project with no changes, the process is much faster. Rush simply checks that everything is already built and up to date, so skips unnecessary steps. If you make a change in one of your application, rush will detect it and rebuild only that modified app. This way, every time you run the build process, you get faster and more efficient results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (3)
> **File Paths:** rush.json (2)
> **CLI Commands:** make (2)
> **UI Navigation:** open the (1), click on (1)
> **Env Vars:** json (1)
> **Tools:** terminal (1)
> **Analogies:** for example (1)
> **Prerequisites:** install (1)

#### [Monorepo Git hooks](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=0)** - [Instructor] Working on Monorepos is about large code bases and independent teams working on different parts of the code. You need to make sure every new change meet the standards and [Git](../../Skills/Software%20Development/Git.md) Hooks can help. Git Hooks are simple task that you can attach to your Git events. Here is a list of possible Git events. You can install Git Hooks on your Monorepos just by following a couple of simple steps. Let me show you. First, locate the common folder and inside it the Git Hooks folder. If you want to create a hook for a specific event just select the event. In this case, I want to create a hook for the pre-commit event and go to the Git Hooks folder, create the new file and name it as the event that you want to track. Keep in mind that we don't need to include any extension. Git Hooks can analyze your code or run arbitrary tasks. For example, I want to run at node common here just by running node and including the path to a script that I already created in this case common scripts my task dot JS. So every time a user try to commit any change to my repository, this no task will run into my system. So, the task that I have here is just
>
> **[1:34](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=94)** a simple message that will be displayed on the terminal. Before I can run this, I want to make sure that my Git Hook it's ready to run on my system. So, I want to make sure that I have permissions. And in this case, I want to go to CD common Git Hooks and make sure that I have the permissions with the common CH mode plus X and the name of the file, in this case pre commit. Now I'm ready to run this hook into my system but I need to rush, run this code into all my applications that are contained on my Monorepo. So, I need to run the command rush install. Now my Git Hook it's available on all my applications. Let's test it. Running the common kit, add point, and git commit.
>
> **[2:47](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=167)** So when I try to commit anything to my repository at Split Center, you can see that the message included on my task is visible on the terminal. You can also include different hooks for the same Monorepo. Let's create another one. Go to the Gits Hook folder, create a new file. And in this case we're going to process the commit message. So, we're going to include the commit dash MSG and here we're going to include a code that will verify the commit message. And in case we have less than three words it will show an invalid message. So this way we can include any standard. Let's save it. Make sure that we have permissions. So we run the CH mode, plus X and the commit dash MSG
>
> **[3:52](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=232)** commit. Let's run the rush install comment to make sure that this hook is available all across my Monorepo. And let's move to another part of this Monorepo. Now I'm going to include one change in my code just to make sure that something to commit. And here in the terminal, I'm going to commit with git at everything and git commit dash M. And in this case I'm just going to include one single [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) in order to trigger the git hook that validates the message. So press enter. And as you can see here we have no JS task that can run anything on my computer, for example, optimizing images or changing or building something additional to make sure that my Monorepo can run. And also the standards here, verifying that I have at least three words every time I commit. Using Git Hooks can help you to scale your process by automating task across projects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (16), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **CLI Commands:** git (16), make (8), node (2), cd (1)
> **UI Navigation:** go to (3), select the (1)
> **Tools:** terminal (3)
> **Prerequisites:** install (3)
> **Env Vars:** msg (2)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)

#### [Installing shared components](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980&t=0)** - Sharing and reusing code is one of the most important things when using a monorepo. This lesson will show you how to create and install one common component into your monorepo. Here in this monorepo, I created a folder called libs. Inside it and included a new UI component. In this case, a button based on [React](../../Skills/Web%20Development/React.js.md). I'm going to share this new component with another app on my monorepo. The first step is to register this new component into my Rush project. So I will copy one of the current items in the Rush Jason file. And include the settings for this new component. In the package name, we need to include the name of the package we have for this component. We need to verify the name on the package, Jason, in this case, is at my libs slash component. I'm going to copy this value and include it in here. The project to folder in this case is libs slash component. I'm going to save this file and now I need to run the rush update comment That will update my monorepo installing every dependency and external library this new component may have. Now let's install the new UI component on one of my apps. To do so, I need to edit the source code.
>
> **[1:38](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980&t=98)** In this case, I'm going to find the apps shop and then the folder is RC. Inside this, you can find the app dot JES file. Here we are working on a React application and I need to import my share library. In this case, the new component called the big red button. So I need to import it, use it import and the name of the library, which in this case is Big red button from the name of the package, in this case @ my libs slash component
>
> **[2:27](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980&t=147)** And now that I have imported it, I can include the new component in the code. Here, I can have the big red button. And save it. The new share component is ready to use but I need to run two more steps. The first, is to run, rush build. This way I can ensure that my application and the new component are already built and available to use. And as you may notice, here, I have an error. That's because I didn't registry my new library. To register a library into one of my apps I need to run one specific comment. And I need to browse to this application. In this case, I need to type CD apps slash shop. And I need to run the common rush add dash dash package. And here I need to include the name of the package in this case @ my dash libs
>
> **[3:59](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980&t=239)** slash component. Now my app can access the shared library. And since we're working on a monorepo, changes are synchronized. Every change in the common library will appear on every app using it. Let's see the final result by running the common rush X start Rush X allows me to run specific comments inside one application. For example, here, in the package to Jason of the shop app, we have a start comment. And here I finally have the big red button import from a common library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (2)
> **CLI Commands:** find (2), cd (1)
> **Prerequisites:** install (2)
> **Env Vars:** jes (1)
> **Exercise Files:** source code (1)
> **Analogies:** for example (1)
> **Speakers:** - sharing (1)


### 2. Tools to Manage Your Monorepos

[↑ Back to Table of Contents](#table-of-contents)

#### [How to migrate projects to your monorepo](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-migrate-projects-to-your-monorepo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-migrate-projects-to-your-monorepo?u=76281980&t=0)** - [Instructor] Your monorepo is where all your projects live together sharing code and dependencies. In this lesson, I will show you how to grow your monorepo by importing new projects. Here in the apps folder, I have a new application called 'new_app'. Let's pretend I just copy this 'new_app' into my monorepo. Even if the app is running properly, it could contain system file from its older repository. That means even if we have the new code inside our monorepo folders, the app could be (indistinct) We need to remove any trace of previous repositories. So, to clean this folder, first we need to browse to this new application. To, so, I need to go to the terminal and type: cd apps/new_app Here I am inside the 'new _app' and I need to remove any traces from [Git](../../Skills/Software%20Development/Git.md) by typing: rm dash (-) rf dot (.) git This will remove the git folder with possibly outdated info. We also need to remove system files that could affect dependencies. In this case, I will remove files that are often present on external repos.
>
> **[1:34](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-migrate-projects-to-your-monorepo?u=76281980&t=94)** Here I will include a command that will remove files such as 'package-lock.[JSON](../../Skills/Web%20Development/JSON.md)' or 'shrinkwrap.yaml'. Now I need to ensure that the project is include in the rush, the 'json' file, by adding a new entry for my new project. Here I'm included the package name, in this case 'new_app' and the path to the project folder in this case 'apps/new_app'. Now we're ready for a fresh start. To do so, we need to run these commands. First, we need to run rush install, then rush update, and finally, rush build. The first command will take all the common configurations. For example, the git hooks and copy them into my new project. Once I have run the rushing style, we need to update all the dependencies on the monorepo. So we need to run the rush update and build commands. Now, the new project, it's imported and it's part of our monorepo. Imported new projects, it's an easy process to make your monorepo grow. Just remember to run your test before merging the code to prevent errors.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (4), [JSON](../../Skills/Web%20Development/JSON.md) (2)
> **CLI Commands:** git (4), cd (1), rm (1), make (1)
> **Code Identifiers:** new_app (5)
> **File Paths:** package-lock.json (1), shrinkwrap.yaml (1)
> **Analogies:** such as (1), for example (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Best Practices:** remember to (1)

#### [Running custom commands on your monorepo](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-custom-commands-on-your-monorepo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-custom-commands-on-your-monorepo?u=76281980&t=0)** - [Instructor] Switching projects and running different commands across your monorepo could be confusing. This lesson will show you how to create global, custom commands. Let me show you one problem. Here, I have a monorepo with multiple apps, and I need to run unit test on every application, but to do so, I have to browse one by one the folders that contains my applications. For example, I need to go to cd apps/customers to open one of my applications, then open the package.[JSON](../../Skills/Web%20Development/JSON.md) file and find the scripts section. In this case, I need the test script. So, I can use rushx and then call the script, in this case, test. And this is a manual process that I need to repeat for each application of my monorepo, and it's not scalable. That's why we can use global commands. Here, I have the command-line-json file. You can find it on the command/config/rush folder. To create a new global command, find the commands section and include an entry. In the commandKind property, you can add the value bulk. This means I'm creating a bulk command
>
> **[1:36](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-custom-commands-on-your-monorepo?u=76281980&t=96)** that will run on each of my applications. Here in the name, I'm going to name it testrush.
>
> **[1:49](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-custom-commands-on-your-monorepo?u=76281980&t=109)** These combinations means rush will try to run the command called testrush on each app of the monorepo. We can also include different properties, such as a summary and description, and enable them to run in parallel, allowing the bulk process to run faster. Before running this command, we must ensure it's present on all the applications. So I will open the package.json file of each application and include this new process in the scripts section. In my case, the new command is called testrush. So I will go to the scripts section and include this new task, testrush. Here, I copy the test command because I want to run the unit test, but I need to include an additional value which is --watchAll =false. This will ensure the process close once the tests are finished and don't crash my bulk command. I'm going to save this file. And remember to repeat this process on the package.json file on every other application. Let's see the new command in action. Let's go to the terminal and remove this command
>
> **[3:26](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-custom-commands-on-your-monorepo?u=76281980&t=206)** and type rush, which is a global command, and now we can call the new custom command, in this case, testrush. You can change it or include new shared commands to fit the needs of each project to create customer workflows on your monorepos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (4)
> **UI Navigation:** go to (3), open the (2)
> **CLI Commands:** find (3), cd (1)
> **File Paths:** package.json (3)
> **Definitions:** is a  (2), is called (1)
> **Code Identifiers:** commandkind (1), watchall (1)
> **Analogies:** for example (1), such as (1)
> **Tools:** terminal (1)

#### [Dependabot pull requests](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/dependabot-pull-requests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/dependabot-pull-requests?u=76281980&t=0)** - [Instructor] Dependabot is a [GitHub](../../Skills/Software%20Development/GitHub.md) tool to keep your dependencies secure and up to date. To install Dependabot, go to GitHub, select your repo, and click on Insights. You can find the Dependency graph, which is a list of all the dependencies you have in use. Find the Dependabot tab, and if you haven't created yet, click on the Enable Dependabot. Now, we need to create a config file. Dependabot scans your dependency files for outdated or insecure dependencies. Here, we can set up the settings for that process. Here, I have one code previously made where I'm going to include some settings. The first one is to include the package ecosystem. In this case, I am using a [React](../../Skills/Web%20Development/React.js.md)-based application so I need to include the value [npm](../../Skills/Web%20Development/npm.md). The directory is the place where we store the package.[JSON](../../Skills/Web%20Development/JSON.md) files. So, in this case, we can set the schedule for this process to run again. In this case, I want to set it daily. And it's possible to define reviewers, commit message, and even limit the number of open pull requests. Now, let's save this config file clicking on Commit new file,
>
> **[1:36](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/dependabot-pull-requests?u=76281980&t=96)** and Dependabot now starts scanning and creating pull requests for dependencies that need an update. If you want to edit the scan settings, find the .github folder, and inside this, the dependabot.yml file. Here, you can edit the settings for your Dependabot. Make sure that you have Dependabot alerts enabled on Settings, Security and analysis, and click on Enable Dependabot alerts. Here, I have a similar repo after the Dependabot scan is finished. As you may notice, we have security issues, and if we click on the Dependabot alerts, we can check and detect what are the problems. We have also pull request for my outdated dependencies. Even if the process is automatic, you can manually review, test and merge dependable changes. Dependabot is an easy automatic tool to keep your monorepo secure and updated.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (3), [React](../../Skills/Web%20Development/React.js.md) (1), [npm](../../Skills/Web%20Development/npm.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **CLI Commands:** find (3), npm (1), make (1)
> **UI Navigation:** click on (4), go to (1)
> **Tools:** github (3)
> **Definitions:** is a  (2), is an  (1)
> **File Paths:** package.json (1), dependabot.yml (1)
> **Prerequisites:** install (1), set up (1)
> **Speakers:** - [instructor] (1)

#### [Other tools to manage monorepos](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/other-tools-to-manage-monorepos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/other-tools-to-manage-monorepos?u=76281980&t=0)** - [Instructor] In this lesson, we're going to talk about the tools to build your monorepos. The most important thing to remember is that monorepos are not monoliths. Monoliths are massive blocks of code that builds all at once. Monorepos, on the other hand, are just a group of apps, develop and deployed separately. Each app on a monorepo needs to be flexible and independent, and that's why building tools are crucial. Building tools can make or break a project. Each monorepo has its own developer culture, requirements and constraints, and every tool has its strength. That's why there is no silver bullet. I want to show you a list of monorepo managers, so you can have more options to choose how to build your project. The first tool is Bazel, an open-source tool supported by [Google](../../Glossary/Service/Google.md). It supports multiple languages such as [Java](../../Skills/Software%20Development/Java.md) C++ or [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). It is widely used for machine-learning projects. Since [TensorFlow](../../Skills/Artificial%20Intelligence%20(AI)/TensorFlow.md), a popular machine learning platform used Bazel to build Python projects. Bazel used the Starlark language to manage configuration and settings. Next, we have Lerna. Lerna is designed for [JavaScript](../../Skills/Software%20Development/JavaScript.md) projects. It has a good integration with the Babel compiler and in learner, all projects are packages and advantages repos as multipackage repositories. Buck is another tool that is designed and used by [Facebook](../../Glossary/Service/Facebook.md).
>
> **[1:39](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/other-tools-to-manage-monorepos?u=76281980&t=99)** Buck users, such as Airbnb or Uber report benchmarks of up to 50% faster builds and smaller apps. Buck is commonly used for [Android](../../Glossary/Sdk/Android.md) and [iOS Development](../../Skills/Mobile%20Development/iOS%20Development.md). Finally, we have Rush, sponsored by [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md). This monorepo manager is designed for JavaScript projects. It scans and organized dependencies and move them to a single place to keep better track, prevent duplicates and phantom dependencies. Rush is the tool that we are using in discourse because it's easy to build, test, and deploy monorepos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [Google](../../Glossary/Service/Google.md) (1), [Java](../../Skills/Software%20Development/Java.md) (1), [TensorFlow](../../Skills/Artificial%20Intelligence%20(AI)/TensorFlow.md) (1)
> **CLI Commands:** python (2), make (1)
> **Analogies:** such as (2)
> **Code Identifiers:** ios (1)
> **Speakers:** - [instructor] (1)


### 3. GitHub Actions for Monorepos

[↑ Back to Table of Contents](#table-of-contents)

#### [Getting familiar with GitHub Actions](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/getting-familiar-with-github-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/getting-familiar-with-github-actions?u=76281980&t=0)** - [Instructor] [GitHub](../../Skills/Software%20Development/GitHub.md) Actions are powerful tools that allows you to automate tasks, and design workflows to build and deploy applications. To install GitHub Actions, go to GitHub, select your repo, and click on Actions. Here you can find pre-made workflows for popular services and stacks. Let's create a simple GitHub action. I'm going to click here on set up a workflow yourself. Here we have a very basic example of a GitHub action. Let's start including a name. Now, we have what will trigger this action. In this case, we have two different events, the push and the pull request. That means every time someone push code to the main branch, or someone make a pull request to the main branch, we will trigger this action. If you want to include new branches, you can just add it in here. Next, we have the workflow_dispatch. I will show you this later. Then we have the jobs. That means a list of different tasks that we can run in parallel. For example here, we have a build task. Actions use code packages in Docker to run operative systems. So we can select here, the operative system, in this case, [Ubuntu](../../Skills/Web%20Development/Ubuntu.md). Once we have our container running, we can run steps.
>
> **[1:35](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/getting-familiar-with-github-actions?u=76281980&t=95)** For example here, we are checking out the code from a repo, and then running comments inside the container. Let's press on Start commit to save the changes. And now, we just created our first GitHub action. If you want to modify this file, just go to the GitHub folder workflows, and then select the file with the name of your action, dot yml. If we check this code again, we know it is that, one of the things that trigger this action , is when someone push code to the main branch, and that is what we just did, by editing this file, we just pushed the changes of this action to the main branch. That means we just trigger the action that we just created. And if you notice here, we have an icon, that means the action runs successfully. It's clicking here, and if we click on the job built, here we have details of every step or action just made. If we come back here to the build process, and select on Actions, we can select My Workflo, which is the action that we just created.
>
> **[3:11](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/getting-familiar-with-github-actions?u=76281980&t=191)** In this case, we included the workflow_dispatch, so that means we can run this action manually. For example, clicking here, and we can select a specific branch to run it, and clicking on Run, that will trigger again my action. With GitHub Actions, you can create complex workflows, test on different operative systems, and automate tasks for any part of your monorepo.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (8), [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) (1)
> **Tools:** github (8)
> **UI Navigation:** go to (2), click on (2), select the (1)
> **CLI Commands:** find (1), make (1), docker (1)
> **Analogies:** for example (3)
> **Code Identifiers:** workflow_dispatch (2)
> **Prerequisites:** install (1), set up (1)
> **Speakers:** - [instructor] (1)

#### [Creating the perfect workflow for your monorepo](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-the-perfect-workflow-for-your-monorepo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-the-perfect-workflow-for-your-monorepo?u=76281980&t=0)** - [Instructor] Githubs are powerful tools but to make the perfect workflow for your monorepo, you need to change into its specific parts. Triggers, for example, define when the workflow starts. They can be activated by [Git](../../Skills/Software%20Development/Git.md) events such as pushing code, manually, or even schedule. When you work with a monorepo with dozens of projects, it's important to know what and when to build or deploy your projects, and triggers can use filters for this. In this example, we have a code that only triggers when the code is pushed to the main branch and the changes were made inside the apps folder. This, for example, can start building all my apps only when I modify their code but not when a library or configuration files were modified. We can filter even more and define one specific path. In this scenario, the action will be triggered only when a change is pushed from my-app folder and any other change on any other app will be ignored. Let's talk about the action jobs. Jobs are group of tasks that can be run in parallel. One important thing of the jobs is that we can run them on multiple operative systems. Here we have a list of three different jobs. All of them can be run in parallel. Here we can, for example,
>
> **[1:33](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-the-perfect-workflow-for-your-monorepo?u=76281980&t=93)** define one specific node that matches with the one we use for development the code. Jobs can create Docker containers stacked with an operative system and frameworks. Inside the jobs, we can include steps. Steps are comments that can be executed on a container terminal. We can use almost the same comments that we can use on local. Using multiple steps, we can [compose](../../Glossary/Framework/Jetpack%20Compose.md) complex actions. Here, in this example, we are using several steps. The first one, it's checking out the code that is on our monorepo. Then installed [Node.js](../../Skills/Web%20Development/Node.js.md) and finally, we can run rush comments. As I mentioned, we can use almost the same code as local. We can use in some cases, some changes. For example here, we are using the install-run-rush.js script. This is a way to expose rush comments on a remote terminal. When using this format, you can call any rush comment. We can also use custom comments. For example, here we're using a custom comment that is included on the command-line.[JSON](../../Skills/Web%20Development/JSON.md). Any comment that is defined there can be called on the terminal using this format. By using a combination of these tools, you can build workflows on [GitHub](../../Skills/Software%20Development/GitHub.md) to filter, build, and deploy any single or group of applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (1), [Compose](../../Glossary/Framework/Jetpack%20Compose.md) (1), [Node.js](../../Skills/Web%20Development/Node.js.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Analogies:** for example (5), such as (1)
> **CLI Commands:** node (2), make (1), git (1), docker (1)
> **Tools:** terminal (3), github (1)
> **File Paths:** node.js (1), install-run-rush.js (1), command-line.json (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Creating workflows for your apps](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-workflows-for-your-apps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-workflows-for-your-apps?u=76281980&t=0)** - [Instructor] You can run a workflow for your monorepos using [GitHub](../../Skills/Software%20Development/GitHub.md) actions. Let me show you how. Here, I have my monorepo, using Rush, and I am about to modify one action. In this case, I am on the folder, .github/workflows/main.yml or the name of your action .yml, including the name for this action in this case, will be called Run Rush app. Now, we need to define what will trigger this action. Here, we're going to use, that every time, a user push code from the main branch or we have a pull request for the main branch, this action will be triggered. I'm going to create a job. In this case, it will be called test. Before we can start this job, I need to define that we will run it on an [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) container. I need to define the node version as well and define that we're working on a [continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) environment. It's time to work on the steps. The first step, it's to check out the code. We need to get the code from our monorepo into the container.
>
> **[1:34](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-workflows-for-your-apps?u=76281980&t=94)** Next step, it's to use and install [Node.js](../../Skills/Web%20Development/Node.js.md). Here, we're going to use Node.js version 14. Finally, I'm going to run the Rush commands. In this case, I am using the install-run-rush.js interface to expose the Rush commands into my container. So first, I'm going to install and build my application, using Rush. And once I have my application fully functional on the container, I can run custom commands. For example, here, I'm going to test my code. So now, I'm going to use the install script and call a test command. I am ready to find this custom command into the settings of my project. To start running this action, let's click on start commit, go to actions, and here, you can see the action is running. Let's check another action I just run, so you can see how it looks. Here's the job that I'm running, the test code, and if you notice, here we are running a rush test. What happens if we want to run just one application?
>
> **[3:10](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-workflows-for-your-apps?u=76281980&t=190)** Let's go to the actions and edit the main file. If we want to run just one application, we need to modify one thing. Find a build command and include an argument called, dash, dash, to and the name of the application that you want to run. For example, here, I have one application called red-app. This will run only the red-app application and its dependencies. GitHub actions can automate testing for your monorepos, improve quality code and prevent possible errors.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (3), [Node.js](../../Skills/Web%20Development/Node.js.md) (2), [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) (1), [Continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) (1)
> **CLI Commands:** node (3), find (2)
> **File Paths:** node.js (2), github/workflows/main.yml (1), install-run-rush.js (1)
> **Prerequisites:** install (4)
> **Tools:** github (3)
> **UI Navigation:** go to (2), click on (1)
> **Analogies:** for example (2)
> **Versions:** version 14 (1)

#### [Using multiple workflows for your apps](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-multiple-workflows-for-your-apps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-multiple-workflows-for-your-apps?u=76281980&t=0)** - In this monorepo, I have two different applications. Is it possible to run both in the same action? Let me show you how to do this. First, locate your action. Remember, the [GitHub](../../Skills/Software%20Development/GitHub.md) actions are located on the dot GitHub folder, slash workflows, and the name, of your action. In this case, main, dot yaml. Here, I have one action that will be triggered every time someone push or send a full request to the main branch. Here, I have a job with a series of steps that eventually run the common rush build. In this case, I am using the dash, dash, two argument, to only run one of the applications, in this case, red app. Let's modify this action, to run both applications. First, I'm going to modify the triggers. I want to include a filter, here, called pathes. And this will only trigger the action, if the changes are made on the app's folder with the name of my applications. In this case, I have the red app. This in text means that everything inside the red app, will trigger this action and I want to include as well, my blue app.
>
> **[1:36](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-multiple-workflows-for-your-apps?u=76281980&t=96)** Now we have here, the jobs. Jobs are tasks, that can be run in parallel. So, I want to copy this job,
>
> **[1:57](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-multiple-workflows-for-your-apps?u=76281980&t=117)** and change it for blue build. Here, I'm going to repeat the same actions to build the red application. The first change, it's to modify the build command to run, the blue app. Next, I'm going to remove the test. Now, this action will only trigger if we have changes on any of those applications and will run both of them at the same time. When I click on start commit and commit my changes, this application will start running. This is how we can run multiple applications using GitHub actions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (3)
> **Tools:** github (3)
> **UI Navigation:** click on (1)
> **Definitions:** means that (1)
> **Speakers:** - in (1)

#### [Building and deploying monorepos with Netlify](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-and-deploying-monorepos-with-netlify?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-and-deploying-monorepos-with-netlify?u=76281980&t=0)** - In this lesson we are going to prepare our monorepo to deploy applications. I'm going to use [netlify.com](https://netlify.com) to deploy my application. You can create a free account, and once you have it, click on New site from [Git](../../Skills/Software%20Development/Git.md). We need to use the same name of our repository to create one site.
>
> **[0:32](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-and-deploying-monorepos-with-netlify?u=76281980&t=32)** Here, I'm going to copy the name of my repo, select it, select the branch, where it's going to take the code to deploy. I'm going to leave the base directory blank. And here, we need to include a build command. We're going to run this code inside an external container. That means we need to run the installing process from scratch. So we need to start with [npm](../../Skills/Web%20Development/npm.md) install dash g @[Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md)/rush
>
> **[1:19](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-and-deploying-monorepos-with-netlify?u=76281980&t=79)** That will install Rush. We also have to include rush, install,
>
> **[1:31](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-and-deploying-monorepos-with-netlify?u=76281980&t=91)** rush build, rush deploy,
>
> **[1:39](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-and-deploying-monorepos-with-netlify?u=76281980&t=99)** with the argument, dash dash overwrite, dash p to select a package and the name of the package or application in this case, Red App. This will create the application inside this container. Now we need to build it using the Rush X command. So first, we need to go to the folder where our application is created using CD common slash deploy slash apps
>
> **[2:20](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-and-deploying-monorepos-with-netlify?u=76281980&t=140)** and the name of the app. I'm going to copy this, cuz we are going to use it in a minute. And finally I need to add the command, rush X build. In the Publish Directory, the common deploy apps, the name of the app and slash build, is the value that we need to include. We're ready to deploy this site and at this current moment it is possible that we have errors since we need to configure [GitHub](../../Skills/Software%20Development/GitHub.md). But first, let's go to site settings and copy the API ID value. Let's go to our repo, select settings, go to Secrets, and create a New repository secret. Here, I already created the value NETLIFY_SITE_ID with the value that we just copied. Now, we need to create another value called NETLIFY_AUTH_TOKIN. To get this value, we need to go to User settings Applications and create a token.
>
> **[4:01](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-and-deploying-monorepos-with-netlify?u=76281980&t=241)** Once you have it, copy the value go to GitHub and include it here, on this secret. Now, we have our Netlify account and GitHub account ready to deploy applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (3), [Git](../../Skills/Software%20Development/Git.md) (1), [npm](../../Skills/Web%20Development/npm.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **UI Navigation:** go to (6), click on (1), select the (1)
> **Prerequisites:** install (3), configure (1)
> **CLI Commands:** git (1), npm (1), cd (1)
> **Env Vars:** api (1), netlify_site_id (1), netlify_auth_tokin (1)
> **Tools:** github (3)
> **URLs:** [netlify.com](https://netlify.com) (1)
> **Speakers:** - in (1)

#### [Deploying monorepos with GitHub actions](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=1)** - [Instructor] In this lesson, I will show you how to deploy an application using Rush. Here, I have a Rush based monorepo. Inside it, I have several apps. The first step of this process is to select one app to deploy. To do so, I need to select the folder where my monorepo is. Click on Open in Integrated Terminal. And type the comment rush init-deploy --project
>
> **[0:43](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=43)** and the name of the project I want to deploy. In this case, red-app. This will create a config file called deploy.[JSON](../../Skills/Web%20Development/JSON.md) on your monorepo's common folder. Now we need to run two more comments, rush build && rush deploy.
>
> **[1:12](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=72)** Once it's finished, the app is now ready for deploying. Commit all the changes selecting the Source Control Tool. Include a commit message. Click on commit. And remember to sync your change with [GitHub](../../Skills/Software%20Development/GitHub.md). In this example, my Monorepo is located on a sub folder. So, I will select that folder, right click, and choose Copy Relative Path. I'm using a Netlify free account to deploy this app, and I need to include this path by clicking on Site Settings, Build and Deploy. Find Build settings. Click on Edit. Include my path on the base directory. Now click on Save, and before we leave, make sure that you have your Netlify auth token and site ID. I already have those values stored on GitHub under Settings, Secrets, Actions, using these to Action secrets. Now we're ready to create that GitHub action to automate this app deploy. Go to GitHub Actions. Select New workflow.
>
> **[2:48](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=168)** And click on set up a workflow yourself. Find the jobs section, and under it the build job. Select the code after this. And remove it. We're going to replace this code. Let's start creating a virtual machine based on [Ubuntu](../../Skills/Web%20Development/Ubuntu.md). Then set up [Node.js](../../Skills/Web%20Development/Node.js.md). We need it to run Rush comments. Before running these comments, remember in this example, my monorepo is under a sub folder. So I need to browse there, so I need to browse there first by typing cd and the path to my monorepo. Now I can run the Rush install and build comments and then tell Rush to deploy my app. In this case, the name is red-app. Finally, I need to send the app to Netlify by including its libraries. I included the AUTH_TOKEN and SITE_ID I previously stored as Secrets on my repo. Now we are good to go. Change the workflow name to deploy-red-app.yml.
>
> **[4:20](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=260)** Click on Start commit. You can include a message and then click on Commit new file. Now, every time code is merged on the main branch, this GitHub action will be triggered and deployed to Netlify. Here is the Netlify application using my GitHub code. And if I click here, we can see the application I built with Rush is already up and running.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (6), [JSON](../../Skills/Web%20Development/JSON.md) (1), [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) (1), [Node.js](../../Skills/Web%20Development/Node.js.md) (1)
> **UI Navigation:** click on (7), select the (2), go to (1)
> **Tools:** github (6), terminal (1)
> **CLI Commands:** find (2), make (1), node (1), cd (1)
> **File Paths:** deploy.json (1), node.js (1), deploy-red-app.yml (1)
> **Prerequisites:** set up (2), install (1)
> **Env Vars:** auth_token (1), site_id (1)
> **Best Practices:** remember to (1)


### 4. Best Practices

[↑ Back to Table of Contents](#table-of-contents)

#### [How to design your monorepo](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-design-your-monorepo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-design-your-monorepo?u=76281980&t=0)** - [Narrator] Before you add the first line of code it's crucial to plan and design your monorepo. The first step is to select the right tools. Detect the specifics of your project. Such as constraints, risk, and requirements before. Every tool has trade offs, a clear picture of your project needs will help you to choose wiser. Big monorepos could put any tool to its limits. So before choosing any monorepo manager run performance test on the realistic scenarios and compare results. Always ask your [DevOps](../../Topics/DevOps.md) for suggestions. They understand the project needs an infrastructure and could provide critical feedback. Every project needs order and naming conventions are fundamental. A global naming convention could help team members add elements faster and create a standard set of rules to make it easier to understand the project. There are no specific rules on monorepo structure. So a unified directory organization where apps, libraries and common files located in predictable places reduces the learning curve for new developers. Create a document with detailed information about those rules, examples, and resources and make it available for all developers. And regarding documentation, make it easy to access for everyone involved in the project. Keep it updated and provide as many examples and use cases as possible. Automation should be a part of your plan.
>
> **[1:37](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-design-your-monorepo?u=76281980&t=97)** Monorepos can become very complex with several teams and project introducing changes constantly. Automation can help to test and analyze every comment. For repetitive, mindless tasks such as monitor dependencies, you can use [GitHub](../../Skills/Software%20Development/GitHub.md) Dependabot. GitHub actions can help you to improve visibility on important changes by tracking critical files and notifying other members of a full request. You can use code linters and githooks to enforce testing and best practices on every comment. Finally, teamwork is crucial to create a successful monorepo. Try to include as many voices as possible. Architects, developers, managers, user feedback to understand better the monorepo requirements. Use a codeowner's file to define which team or individual owns a project on the monorepo and can review all the changes made there. And as I mentioned before, always ask for DevOps feedback about your monorepos. They have a clear picture of the delivery pipeline.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DevOps](../../Topics/DevOps.md) (2), [GitHub](../../Skills/Software%20Development/GitHub.md) (2)
> **Analogies:** such as (2), picture (2)
> **CLI Commands:** make (3)
> **Tools:** github (2)
> **UI Navigation:** select the (1)
> **Speakers:** - [narrator] (1)

#### [Architectural governance in your monorepo](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/architectural-governance-in-your-monorepo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/architectural-governance-in-your-monorepo?u=76281980&t=0)** - [Instructor] Monorepos need close control to avoid an accumulation of technical depth. Creating governance policies is crucial. Monorepos must deal with team projects and developers working separately. In this kind of environment, it's easy to lose track of standards or adopt too many different guidelines. This practice can affect architecture, performance, and lower the overall quality of the code. There are three different areas of your monorepo to keep close control. First, embrace a coding standard. Choose a style guide and stick to it. Avoid using different standards for different projects. Improve consistency by implementing configuration files, such as .editorconfig. This way, you can enforce all your users to follow the same coding rules. Global link to rules can prevent code errors and encourage this practice. Most of the problems of monorepos come from dependencies. Keep close track of outdated dependencies. Tools like [GitHub](../../Skills/Software%20Development/GitHub.md)'s Dependabot can automate this process. Track and audit your code, remove large unused dependencies, and monitor for security issues. Finally, one trick to ensure you have control of dependencies, is to monitor files such as package.[JSON](../../Skills/Web%20Development/JSON.md), and create GitHub actions to assign architects and team leads to every pull request, including your dependencies.
>
> **[1:35](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/architectural-governance-in-your-monorepo?u=76281980&t=95)** Pull requests are great for discussion. You can use GitHub actions to track sensitive changes, auto-assign team members, and discuss architecture guidelines on every pull request. And always remember to include [DevOps](../../Topics/DevOps.md) on infrastructure and work-flow changes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (3), [JSON](../../Skills/Web%20Development/JSON.md) (1), [DevOps](../../Topics/DevOps.md) (1)
> **Tools:** github (3)
> **Analogies:** such as (2)
> **File Paths:** package.json (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/next-steps?u=76281980&t=0)** - [Instructor] We reached the end of this training, and I hope that you have a clear picture of what is a monorepo, and how to use [GitHub](../../Skills/Software%20Development/GitHub.md) to manage and automate your code. If you want to learn more about Rush and how to manage your monorepos, I recommend checking the Documents section. I encourage you to test other monorepo managers, such as Lerna in case you're looking for [JavaScript](../../Skills/Software%20Development/JavaScript.md) projects, or Bazel, if you're looking for multiple languages. Compare the results and choose the better options for you. To learn more about [Git](../../Skills/Software%20Development/Git.md) hooks, check out [githooks.com](https://githooks.com), with detailed information and examples. Finally, you can find on GitHub extensive documentation about GitHub actions and its syntax to take your workflows to the next level.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (3), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [Git](../../Skills/Software%20Development/Git.md) (1)
> **Tools:** github (3)
> **CLI Commands:** git (1), find (1)
> **Analogies:** picture (1), such as (1)
> **URLs:** [githooks.com](https://githooks.com) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/building-monorepos-on-GitHub-3086076)

## Skills Covered

- GitHub

## Path Context

### In [Essential New Skills in Software Engineering](../../Paths/DevOps/Learning%20Paths/Essential%20New%20Skills%20in%20Software%20Engineering.md)
**1 of 4** | [Introduction to Agile Development Practices- Bring Agile to Your Development Pipelines](Introduction%20to%20Agile%20Development%20Practices-%20Bring%20Agile%20to%20Your%20Development%20Pipelines.md) →

## Appears In

- [Essential New Skills in Software Engineering](../../Paths/DevOps/Learning%20Paths/Essential%20New%20Skills%20in%20Software%20Engineering.md)

## Related Courses

_Courses sharing skills:_

- [Practical GitHub Code Search](../Software%20Development/Practical%20GitHub%20Code%20Search.md) — GitHub
- [Practical GitHub Project Management and Collaboration](../Software%20Development/Practical%20GitHub%20Project%20Management%20and%20Collaboration.md) — GitHub
- [Creating a Book Search Engine from Scratch Using Java and GitHub Copilot](../Artificial%20Intelligence%20(AI)/Creating%20a%20Book%20Search%20Engine%20from%20Scratch%20Using%20Java%20and%20GitHub%20Copilot.md) — GitHub
- [Benefits of GitHub Community](../Artificial%20Intelligence%20(AI)/Benefits%20of%20GitHub%20Community.md) — GitHub
- [GitHub Foundations- Privacy, Security, and Administration](../Artificial%20Intelligence%20(AI)/GitHub%20Foundations-%20Privacy%2C%20Security%2C%20and%20Administration.md) — GitHub

---

[↑ Back to top](#)