---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: create-a-crm-mobile-application-with-react-native-23458867
url: "https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867"
duration_minutes: 170
duration: 2h 50m
level: Advanced
updated: 2/28/2024
learners: 18638
skills:
  - Mobile Application Development
  - React Native
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHnKiYx-QGRdg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1708996526383?e=2147483647&amp;v=beta&amp;t=RVD3RlZgu14-Sz0_TSe3LZ8Axfu6X7DiOHXEhWZPVKw"
linkedin_topic: Mobile Development
learning_paths:
  - '[[Become a React Native Developer]]'
prev_courses:
  - '[[From React to React Native]]'
next_courses:
  - '[[React Native Ecosystem and Workflow]]'
path_nav: '[{"path":"Become a React Native Developer","position":3,"total":5,"prev":"From React to React Native","next":"React Native Ecosystem and Workflow"}]'
path_count: 1
tags:
  - course
  - topic/mobile-development
  - skill/mobile-application-development
  - skill/react-native
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Mobile%20Development/Create%20a%20CRM%20Mobile%20Application%20with%20React%20Native.md)

![Create a CRM Mobile Application with React Native](https://media.licdn.com/dms/image/v2/D560DAQHnKiYx-QGRdg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1708996526383?e=2147483647&amp;v=beta&amp;t=RVD3RlZgu14-Sz0_TSe3LZ8Axfu6X7DiOHXEhWZPVKw)

# Create a CRM Mobile Application with React Native

> React Native lets web developers apply their skills to native apps for iOS and Android. In this course, Emmanuel Henri shows how to take a design spec created in a previous course—Prototype a CRM Mobile App with Framer—and convert it into a real CRM application, with a clean interface, smooth performance, and natural cross-platform adaptability. Learn how to set up a project, establish a strong fo

> [LinkedIn Learning](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867) | 2h 50m | Advanced | 19K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [CRM application with React Native](#crm-application-with-react-native)
  - [Course prerequisites](#course-prerequisites)
- [**1. Project Setup and Backend**](#1-project-setup-and-backend) (4 videos)
  - [Initialize React Native project](#initialize-react-native-project)
  - [Project folder structure](#project-folder-structure)
  - [Explore material kit and vector icons](#explore-material-kit-and-vector-icons)
  - [Node and express backend setup](#node-and-express-backend-setup)
- [**2. Redux and Main Views**](#2-redux-and-main-views) (7 videos)
  - [Get started with Redux](#get-started-with-redux)
  - [React Native actions](#react-native-actions)
  - [Create tab menu](#create-tab-menu)
  - [Tab navigation](#tab-navigation)
  - [Create the people list view](#create-the-people-list-view)
  - [Code the people item view](#code-the-people-item-view)
  - [Add new components](#add-new-components)
- [**3. Complex Component**](#3-complex-component) (4 videos)
  - [Setting up Redux for a detail view](#setting-up-redux-for-a-detail-view)
  - [CSS details](#css-details)
  - [Coding the scroll on the detail view](#coding-the-scroll-on-the-detail-view)
  - [Finalize detail view](#finalize-detail-view)
- [**4. CRUD Operations**](#4-crud-operations) (6 videos)
  - [Create a new add person form](#create-a-new-add-person-form)
  - [Functions for add person action](#functions-for-add-person-action)
  - [Update person Redux reducer](#update-person-redux-reducer)
  - [Update person view](#update-person-view)
  - [Connect your list view to backend](#connect-your-list-view-to-backend)
  - [Testing and debugging Redux for editing](#testing-and-debugging-redux-for-editing)
- [**5. Company View and Final Touches**](#5-company-view-and-final-touches) (2 videos)
  - [Code the company list query](#code-the-company-list-query)
  - [Create company item and list view](#create-company-item-and-list-view)
- [**Conclusion**](#conclusion) (1 videos)
  - [Building your own CRM application with React Native](#building-your-own-crm-application-with-react-native)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### CRM application with React Native
> [LinkedIn Learning](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/crm-application-with-react-native?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/crm-application-with-react-native?u=76281980&t=0)** - [Mani] If you've built any applications with React, you've probably heard about React Native, the framework that allows you to build native iOS and Android apps.
>
> **[0:09](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/crm-application-with-react-native?u=76281980&t=9)** In this course, we'll build a CRM application using React Native.
>
> **[0:14](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/crm-application-with-react-native?u=76281980&t=14)** We'll first set you up with everything you need to get going, and then get the backend set up and start it.
>
> **[0:20](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/crm-application-with-react-native?u=76281980&t=20)** Next, we'll build several views while managing our states with Redox, and finally, continue to create our application with full CRUD capabilities.
>
> **[0:29](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/crm-application-with-react-native?u=76281980&t=29)** In the end, like most of my projects, we'll code a small algorithm with Lodash to remodel our data and create a company list view.
>
> **[0:38](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/crm-application-with-react-native?u=76281980&t=38)** Hi, I'm Mani Henri. I'm a React and React Native developer.
>
> **[0:42](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/crm-application-with-react-native?u=76281980&t=42)** I'm here to support you on this journey [[Learning React Native]] while building an amazing CRM application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React Native]] (4), application (3), [[React.js|React]] (2), [[Android]] (1), next (1)
> **Env Vars:** crm (2), crud (1)
> **Code Identifiers:** ios (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [mani] (1)

#### Course prerequisites
> [LinkedIn Learning](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/course-prerequisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/course-prerequisites?u=76281980&t=0)** - [Instructor] As this course is the creation of a React Native application, some knowledge of React is a must.
>
> **[0:07](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/course-prerequisites?u=76281980&t=7)** If creating React components, using props, or the state, and importing modules are concepts that aren't familiar to you, I'd suggest you take a basic React course.
>
> **[0:17](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/course-prerequisites?u=76281980&t=17)** Also, experience with JavaScript is a must for this course, as this is the basis of a React programmer.
>
> **[0:24](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/course-prerequisites?u=76281980&t=24)** You can take this course on a Mac or Windows.
>
> **[0:26](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/course-prerequisites?u=76281980&t=26)** I've delivered this course on both operating systems, so feel free to use whichever you prefer.
>
> **[0:31](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/course-prerequisites?u=76281980&t=31)** Last but not least, being familiar with terminal commands and npm isn't a must, but definitely will help you when we use these tools.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (4), [[React Native]] (1), application (1), [[JavaScript]] (1), [[Windows]] (1)
> **Definitions:** is a  (2)
> **CLI Commands:** npm (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)


### 1. Project Setup and Backend

[↑ Back to Table of Contents](#table-of-contents)

#### Initialize React Native project
> [LinkedIn Learning](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=0)** - [Instructor] Okay, so we're going to go and get started by creating a new React Native project.
>
> **[0:06](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=6)** And the way to go about doing this, if you want to follow along on the instructions from [reactnative.dev](https://reactnative.dev), you can go ahead and click on Get Started right away.
>
> **[0:16](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=16)** And what it's going to show you are all the steps that you need to go through to create a new project.
>
> **[0:23](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=23)** In the past, we used a React Native CLI Quickstart.
>
> **[0:26](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=26)** It's a bit more complex and there's a lot of things that you need to install, but this is the way to go if you want to have specific development operating systems and specific target OS that you want to do.
>
> **[0:39](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=39)** Especially if you're using Linux, you want to go and click on Linux and find out how you can actually use Android and Linux.
>
> **[0:46](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=46)** The same thing with Android and Windows.
>
> **[0:49](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=49)** iOS is not supported either on Linux or Windows.
>
> **[0:52](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=52)** There's ways to counter that, but I wouldn't recommend it.
>
> **[0:57](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=57)** If you really want to develop for iOS, go for macOS and then go ahead and install whatever you need to do this.
>
> **[1:05](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=65)** This is the long way.
>
> **[1:07](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=67)** There's a lot of things that you need to install to make it work this way.
>
> **[1:12](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=72)** I would recommend, and this is what we're going to use in this course, is the Expo Go Quickstart and it goes very quickly.
>
> **[1:19](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=79)** You can create a project and then open it up in your simulator as soon as you're ready.
>
> **[1:25](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=85)** The requirements for it is that you have a simulator installed on your system.
>
> **[1:29](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=89)** So if you're planning on going to Android as the target OS, then make sure you install Android Studio.
>
> **[1:36](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=96)** Make sure you install the requirements to use Android Studio.
>
> **[1:40](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=100)** The same with iOS.
>
> **[1:43](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=103)** If you are planning on going on iOS as the final target OS, go and make sure that you have Xcode installed, simulator installed, and all the requirements for these systems.
>
> **[1:56](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=116)** And you can use the quick start here by jumping to the specific target OS and development OS and follow these instructions to actually install everything you need for your system.
>
> **[2:10](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=130)** In most cases, you need all of these things anyways to finish up on a specific system.
>
> **[2:16](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=136)** But to get started with the actual application, the React Native application, it goes much faster this way.
>
> **[2:23](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=143)** So I have all the requirements on my system.
>
> **[2:25](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=145)** I'm going to open up my simulator.
>
> **[2:28](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=148)** I'm using iOS and basically right now, I have iPhone 14 Pro Max as the targeted operating system and the device.
>
> **[2:37](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=157)** And what I could do is basically minimize the instructions here and then what we're going to need to do is open up a terminal to create the new application, which we're going to see on our desktop shortly.
>
> **[2:49](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=169)** I'm going to create it on the desktop.
>
> **[2:52](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=172)** So I'm going to open up my terminal, like so, and make sure that I am on my desktop.
>
> **[2:58](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=178)** So I'm going to do CD desktop.
>
> **[3:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=180)** So I just did an ls to see where I was.
>
> **[3:03](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=183)** I'm going on a desktop and then, yep, I'm on the desktop now.
>
> **[3:07](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=187)** So what I'm going to do is go ahead and on my desktop, create a new application, CRM application, with the instructions here.
>
> **[3:16](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=196)** And we're going to need to use the NPX command, which is basically the same as NPM.
>
> **[3:23](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=203)** The other difference between NPX and NPM is that it doesn't need to install the libraries or the packages prior to do the NPM command.
>
> **[3:33](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=213)** So what it does with NPX, it automates the actual installation of the libraries you need in order to create the new project.
>
> **[3:41](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=221)** So I'm going to go and create expo app and call this application CRM.
>
> **[3:48](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=228)** I'm building it on this desktop, like so.
>
> **[3:52](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=232)** So while this is actually creating all of this, I'm going to check, I have the folder here, we're all good to go and wait for the installation slash creation of the project to finish.
>
> **[4:06](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=246)** So now that I have the application or project created, I can CD into CRM like so.
>
> **[4:14](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=254)** And now I am inside of the application, where I have all the assets for this specific application.
>
> **[4:22](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=262)** So now what we're going to do is start the application and then run it on our simulator and make one small change in my tool of choice, which is VS code, where you can use any editor you want to make the code changes and see it change in the simulator.
>
> **[4:41](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=281)** So let's go ahead and do this.
>
> **[4:43](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=283)** The command, as you can see here, is NPX expo start, as such.
>
> **[4:50](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=290)** So now I've got this and you can use this to actually install expo on your actual physical iPhone and basically test it on the iPhone as well, which is super cool when you want to see on the actual physical device how it actually runs.
>
> **[5:09](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=309)** Now I'm just going to run it on the simulator so I can do I for iOS.
>
> **[5:13](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=313)** If you are on Android, you do A.
>
> **[5:17](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=317)** And let's go ahead, I'm going to do I, and now you're going to see my simulator here run the application.
>
> **[5:25](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=325)** Go and do this, open up the application.
>
> **[5:28](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=328)** And as you can see, this is the Expo app.
>
> **[5:31](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=331)** So there's nothing in this application yet.
>
> **[5:33](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=333)** So if you want to see it live, I'm going to close this window, I'm going to minimize this for now.
>
> **[5:41](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=341)** I may use the terminal directly in VS code.
>
> **[5:43](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=343)** And what I'm going to do is drop the folder inside of VS code so we can see our code here and make the proper change.
>
> **[5:52](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=352)** And you need to go into the App.js file.
>
> **[5:57](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=357)** And then I'm going to close the explorer so I can see my simulator here as well.
>
> **[6:02](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=362)** Have as much screen as possible, like this.
>
> **[6:07](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=367)** Put my simulator here, so I can see it while I'm doing development, like so.
>
> **[6:12](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=372)** This is cool. Yeah, that's good.
>
> **[6:15](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=375)** And as you can see right now, I have this here.
>
> **[6:18](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=378)** Open up in App.js to start working on your app.
>
> **[6:22](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=382)** This is the same thing that we have here.
>
> **[6:24](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=384)** So let's go ahead and change this and you'll see the change happen live.
>
> **[6:30](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=390)** And if I save this, I'm going to see the change directly in the application here.
>
> **[6:35](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=395)** This is super cool.
>
> **[6:36](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=396)** The other thing that you need to always keep in mind of is that you can also open the debugger directly from here.
>
> **[6:43](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=403)** So if I press J here, I'm going to see the debugger and you have all the stuff that you need for the debugger here.
>
> **[6:52](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=412)** All right, so now that we have a project started, we can move on.
>
> **[6:57](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/initialize-react-native-project?u=76281980&t=417)** In the next video, we'll get familiar with the folder structure and the files and take a look at the schema.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (14), [[Android]] (6), [[Linux]] (4), [[React Native]] (3), [[npm]] (3)
> **CLI Commands:** make (8), npx (4), npm (3), cd (2), find (1)
> **Env Vars:** npx (4), crm (3), npm (3), cli (1)
> **Code Identifiers:** ios (6), iphone (3), macos (1)
> **Prerequisites:** install (8)
> **Tools:** terminal (3), vs code (3)
> **UI Navigation:** click on (2), open the (1)
> **File Paths:** app.js (2)

#### Project folder structure
> [LinkedIn Learning](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=0)** - [Instructor] Let's take a look at the project structure and what are the files included with an Expo build.
>
> **[0:06](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=6)** Note to self, if you've ever done React Native, the CLI approach, you have more files here, and you have like the iOS and Android files.
>
> **[0:16](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=16)** And if you want to write specific codes to these specific files for targeting these target OS, it's in the folder structure here.
>
> **[0:26](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=26)** But when you do an Expo version, it doesn't have any of that.
>
> **[0:29](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=29)** Expo actually supports not only Android and iOS but also the web, so you can leverage this to create a build after that either for web, for iOS, or Android.
>
> **[0:41](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=41)** So, this is the beauty of working with Expo.
>
> **[0:43](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=43)** Right now, this is basically a React Native project supported by Expo.
>
> **[0:47](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=47)** But once you're done with this, if you want to do a build, specifically to all these different target OS, then you create a build and we're going to take a look at this later on in this course.
>
> **[1:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=60)** So right now, what we're going to do is just explore what Expo offers for the file folder structure, and it actually is much more simplified than the other approach.
>
> **[1:10](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=70)** So right now, you should have an Expo document here, which basically keeps track of where you've actually worked with in terms of devices.
>
> **[1:19](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=79)** So right now, we just did an iOS simulator, and this is why there's nothing here.
>
> **[1:24](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=84)** And if you read the README.md, it's going to tell you that you don't have to pay much attention to this unless you want to have more information, and you do not commit this file or folder to GitHub, and it's in the .gitignore here.
>
> **[1:40](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=100)** So, this is the Expo.
>
> **[1:42](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=102)** Then, the assets are basically all the image files that are used in the application.
>
> **[1:48](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=108)** So once we start putting buttons and stuff like that, this is where we're going to put them.
>
> **[1:52](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=112)** The node_modules are all the libraries and packages that are installed with this application, and you can see a replication of what they are.
>
> **[1:59](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=119)** So we have react-native, we have react, expo-status-bar and expo, and you have @babel/core for the devDependencies, and these are the scripts that we can use with this one.
>
> **[2:13](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=133)** And basically what we're doing is npx expo start, and you can be specific when you start it to go to iOS or to go to the web here.
>
> **[2:24](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=144)** So this is what I was talking about here, so if we go into our terminal that we've opened.
>
> **[2:30](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=150)** Because it's already opened here, I'm going to stop the server from this terminal and do it from VS Code instead.
>
> **[2:37](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=157)** And I'm going to bring my terminal either by clicking here, New Terminal, or Control + Grave, which I usually use as the shortcut here.
>
> **[2:47](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=167)** And do, let's say for example, ios.
>
> **[2:49](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=169)** So npx expo start
>
> **[2:55](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=175)** - -ios, it's going to literally open my server and go straight to iOS and open up my application here.
>
> **[3:04](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=184)** So let's say I reopen the application, this is fine.
>
> **[3:08](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=188)** This is from my previous build.
>
> **[3:10](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=190)** And again, if we go back to the App.js file and make another change, you'll see that change live in here.
>
> **[3:17](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=197)** So, Hello you, save.
>
> **[3:22](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=202)** It should update automatically.
>
> **[3:23](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=203)** If it was from the server connection prior, you can restart it here, no problem, or you can just basically reload the app by doing R, like so.
>
> **[3:35](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=215)** And then it's going to reload the app, and Hello you.
>
> **[3:38](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=218)** So if you have any issues where the application doesn't automatically change the text, you can do an R in here and it will basically rebundle and send it to the application.
>
> **[3:48](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=228)** And now, it's working, okay?
>
> **[3:51](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=231)** So, this is for the App.js file.
>
> **[3:54](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=234)** Well, this is the entry point for your application here, so let me just close this for a second and make this full.
>
> **[4:03](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=243)** And this is the file where you have basically your first view, which we'll explore later on what are these views and these components that you're going to use with React Native.
>
> **[4:15](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=255)** And you have a stylesheet already created.
>
> **[4:18](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=258)** This is why you don't have an external stylesheet, it's created within the file, and we're going to keep that structure throughout the course as well.
>
> **[4:25](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=265)** So, we have a nice stylesheet inside of the component and keep it modulated for that specific file.
>
> **[4:32](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=272)** We have the app.json file here where you can actually put more information about your application.
>
> **[4:39](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=279)** So the version, what is the orientation, where are the icon, and so much more that we'll explore later on.
>
> **[4:48](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=288)** If you have specific things that you want to do to the web, Android, or iOS, you can enter these things here as well.
>
> **[4:57](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=297)** And if you want more information about the app.json file, you can explore it on the documentation at [expo.com](https://expo.com) and you'll know all the details about that.
>
> **[5:08](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=308)** We're not going to do this in this course.
>
> **[5:11](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=311)** The babel is the config for babel, and then the package.json, we explored already.
>
> **[5:18](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=318)** So this is pretty much the file structure for a brand new project created with Expo as opposed to the CLI approach, which actually minimizes the number of files and makes it that much faster to create or work with your project and application.
>
> **[5:36](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=336)** So, this was the file structure.
>
> **[5:38](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/project-folder-structure?u=76281980&t=338)** Let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (9), [[Android]] (4), web (4), [[React Native]] (3), [[JSON]] (3)
> **Code Identifiers:** ios (7), node_modules (1), devdependencies (1)
> **File Paths:** app.js (2), app.json (2), readme.md (1), package.json (1)
> **Tools:** terminal (4), github (1), vs code (1)
> **CLI Commands:** npx (2), make (2)
> **Env Vars:** cli (2), readme (1)
> **Documentation:** the readme (1), the documentation (1)
> **UI Navigation:** go to (2)

#### Explore material kit and vector icons
> [LinkedIn Learning](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/explore-material-kit-and-vector-icons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/explore-material-kit-and-vector-icons?u=76281980&t=0)** - [Instructor] This project will use a few libraries to make our application follow material design styles.
>
> **[0:05](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/explore-material-kit-and-vector-icons?u=76281980&t=5)** For example, we'll set up material kit, a library full of great pre-built components, based on material design.
>
> **[0:12](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/explore-material-kit-and-vector-icons?u=76281980&t=12)** We'll also explore a vector icon library that is pre-installed with Expo, so we can have icons we can use whenever we need them.
>
> **[0:19](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/explore-material-kit-and-vector-icons?u=76281980&t=19)** With those two libraries, we should have everything we need to build great views very quickly.
>
> **[0:24](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/explore-material-kit-and-vector-icons?u=76281980&t=24)** So let's jump to your console core command prompt for Windows to add those.
>
> **[0:29](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/explore-material-kit-and-vector-icons?u=76281980&t=29)** So the first thing we need to do, if you want to follow along with the instructions, you can go to the webpage where we have the information about the vector icons.
>
> **[0:38](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/explore-material-kit-and-vector-icons?u=76281980&t=38)** So you can go to docs.[expo.dev](https://expo.dev), forward slash guides, forward slash icons.
>
> **[0:43](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/explore-material-kit-and-vector-icons?u=76281980&t=43)** In the past, we needed to install this library separately, but now it's included directly inside of Expo.
>
> **[0:50](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/explore-material-kit-and-vector-icons?u=76281980&t=50)** So if you look at this here, all we have to do at this point is import ionicons here from Expo Vector.
>
> **[0:57](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/explore-material-kit-and-vector-icons?u=76281980&t=57)** So if you want to use ionicons, obviously, but if you want to have more information about the icons, you can click here on this link and take a look at what are the icons available.
>
> **[1:08](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/explore-material-kit-and-vector-icons?u=76281980&t=68)** So you have several that you can take a look at.
>
> **[1:12](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/explore-material-kit-and-vector-icons?u=76281980&t=72)** So for example, if you want an arrow, then you have all these designs that you can take a look at and so on and so forth.
>
> **[1:18](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/explore-material-kit-and-vector-icons?u=76281980&t=78)** So you can look for specific icons and add them as you please.
>
> **[1:22](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/explore-material-kit-and-vector-icons?u=76281980&t=82)** So, the way it works is basically, you import ionicons from @Expo/vector, icons, and then you can use them directly inside of a view.
>
> **[1:32](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/explore-material-kit-and-vector-icons?u=76281980&t=92)** So we can do that later on, but I just wanted to mention to you that it is pre-install with Expo and therefore, we don't need to install anything else.
>
> **[1:41](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/explore-material-kit-and-vector-icons?u=76281980&t=101)** For the material design, we need to install this library, react-native-material.
>
> **[1:46](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/explore-material-kit-and-vector-icons?u=76281980&t=106)** So the way to go about it, this one is fairly simple.
>
> **[1:49](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/explore-material-kit-and-vector-icons?u=76281980&t=109)** You go all the way down here and all you have to do, is do npm install@react-native-material/core.
>
> **[1:56](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/explore-material-kit-and-vector-icons?u=76281980&t=116)** So I'm literally going to copy this command here and go into VS code, open up the terminal, shut down our server here, and just to get some space here, I'm going to remove the Explorer.
>
> **[2:12](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/explore-material-kit-and-vector-icons?u=76281980&t=132)** And all I have to do is paste this particular command here and I'm going to install the react-native-material core.
>
> **[2:20](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/explore-material-kit-and-vector-icons?u=76281980&t=140)** So with this, if we go back to the documentation, we would be able to add a button like this.
>
> **[2:26](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/explore-material-kit-and-vector-icons?u=76281980&t=146)** So import button from react-native, and then add it to the application here, like so.
>
> **[2:33](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/explore-material-kit-and-vector-icons?u=76281980&t=153)** So if I show you what I just did and we start our application again, like so, now what could do is do R, to reload the application.
>
> **[2:46](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/explore-material-kit-and-vector-icons?u=76281980&t=166)** So it rebuilds it.
>
> **[2:47](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/explore-material-kit-and-vector-icons?u=76281980&t=167)** It's very important to do that from time to time, just to kind of refresh the build on this simulator.
>
> **[2:53](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/explore-material-kit-and-vector-icons?u=76281980&t=173)** So now that we have that, what we could do is, in this particular view here, we can import the button as such.
>
> **[3:01](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/explore-material-kit-and-vector-icons?u=76281980&t=181)** And then in the text or somewhere in here, let's just go back to documentation, and basically grab this button here like so.
>
> **[3:11](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/explore-material-kit-and-vector-icons?u=76281980&t=191)** We're going to copy and paste that button here.
>
> **[3:14](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/explore-material-kit-and-vector-icons?u=76281980&t=194)** Just add it in here, save.
>
> **[3:18](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/explore-material-kit-and-vector-icons?u=76281980&t=198)** Now that we added it, it would show up on the simulator.
>
> **[3:21](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/explore-material-kit-and-vector-icons?u=76281980&t=201)** So we're not going to use that for now.
>
> **[3:22](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/explore-material-kit-and-vector-icons?u=76281980&t=202)** I just wanted to give you an example.
>
> **[3:25](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/explore-material-kit-and-vector-icons?u=76281980&t=205)** We're going to do that later.
>
> **[3:26](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/explore-material-kit-and-vector-icons?u=76281980&t=206)** And remove that here.
>
> **[3:28](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/explore-material-kit-and-vector-icons?u=76281980&t=208)** So you have an idea of how this works, but we're going to do multiple items as we build our components here.
>
> **[3:35](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/explore-material-kit-and-vector-icons?u=76281980&t=215)** I just wanted to give you an example.
>
> **[3:38](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/explore-material-kit-and-vector-icons?u=76281980&t=218)** So now that we have a kit we can use to build our views plus a great icon library, let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (4), [[React.js|React]] (4), prompt (1), [[Windows]] (1), [[npm]] (1)
> **Prerequisites:** install (6), set up (1)
> **Tools:** command prompt (1), vs code (1), terminal (1)
> **CLI Commands:** make (1), npm (1)
> **Cross-References:** go back to (2)
> **UI Navigation:** go to (2)
> **Analogies:** for example (2)
> **URLs:** [expo.dev](https://expo.dev) (1)

#### Node and express backend setup
> [LinkedIn Learning](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/node-and-express-backend-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/node-and-express-backend-setup?u=76281980&t=0)** - [Instructor] Now let's take a look at the backend we'll use for our React Native application.
>
> **[0:04](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/node-and-express-backend-setup?u=76281980&t=4)** For mobile applications, you have multiple choices you can use for backend.
>
> **[0:09](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/node-and-express-backend-setup?u=76281980&t=9)** If you prefer using your own, you can quickly get started with one such as the Node Express API we'll leverage from another one of my courses.
>
> **[0:17](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/node-and-express-backend-setup?u=76281980&t=17)** Or you can leverage cloud options such as Google's Firebase.
>
> **[0:20](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/node-and-express-backend-setup?u=76281980&t=20)** In this case, I have one prebuilt for you and let's set it up.
>
> **[0:24](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/node-and-express-backend-setup?u=76281980&t=24)** So the first thing you need to do is have MongoDB install, the Community Edition.
>
> **[0:29](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/node-and-express-backend-setup?u=76281980&t=29)** So the way to get to that, you go to [mongodb.com/try/download/community](https://mongodb.com/try/download/community).
>
> **[0:36](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/node-and-express-backend-setup?u=76281980&t=36)** And when you get to that page, what you need to do is go down here and follow the instructions.
>
> **[0:42](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/node-and-express-backend-setup?u=76281980&t=42)** There's a simple install if you have Homebrew where you do brew install mongodb-atlas and then atlas setup.
>
> **[0:49](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/node-and-express-backend-setup?u=76281980&t=49)** Or you can go into the further instructions and download it from here, there's more options.
>
> **[0:56](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/node-and-express-backend-setup?u=76281980&t=56)** So just follow the instructions to install it on your system.
>
> **[0:59](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/node-and-express-backend-setup?u=76281980&t=59)** Once MongoDB is up and running, then you can go to the next step.
>
> **[1:04](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/node-and-express-backend-setup?u=76281980&t=64)** So pause the video if you don't have MongoDB installed on your system and then unpause when you're ready.
>
> **[1:09](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/node-and-express-backend-setup?u=76281980&t=69)** All right, so once you have MongoDB installed, what you need to do is go ahead and close this.
>
> **[1:15](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/node-and-express-backend-setup?u=76281980&t=75)** I'm just going to minimize code here for a second.
>
> **[1:20](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/node-and-express-backend-setup?u=76281980&t=80)** And then you go into the exercise files.
>
> **[1:23](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/node-and-express-backend-setup?u=76281980&t=83)** And in the exercise files, what you have is resources here.
>
> **[1:27](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/node-and-express-backend-setup?u=76281980&t=87)** In the resources, what you need to do is grab these files here and make sure that you are showing hidden files, so you can see babelrc.
>
> **[1:36](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/node-and-express-backend-setup?u=76281980&t=96)** And once you have that, you can copy all these files and then create your backend.
>
> **[1:41](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/node-and-express-backend-setup?u=76281980&t=101)** So I'm going to create a new folder, call this backend, copy the files from here, close this, go into the backend, and then paste the files here, and then drag and drop the backend into VS Code to install it.
>
> **[2:01](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/node-and-express-backend-setup?u=76281980&t=121)** So just as a quick overview, this is the backend that I've built for you.
>
> **[2:05](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/node-and-express-backend-setup?u=76281980&t=125)** You have controllers in here, you have the model, you have the routes, and all the latest and greatest for babelrc.
>
> **[2:14](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/node-and-express-backend-setup?u=76281980&t=134)** So let's go ahead and install this.
>
> **[2:16](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/node-and-express-backend-setup?u=76281980&t=136)** So I'm going to bring the terminal, so control grab E or you can grab it from here like so.
>
> **[2:24](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/node-and-express-backend-setup?u=76281980&t=144)** And the first thing you need to do is do a npm install or i.
>
> **[2:29](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/node-and-express-backend-setup?u=76281980&t=149)** Once you have everything installed, what you could do is do npm start like so.
>
> **[2:34](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/node-and-express-backend-setup?u=76281980&t=154)** And that's all you need to do.
>
> **[2:36](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/node-and-express-backend-setup?u=76281980&t=156)** Your backend should be saying your server is running on port 3000.
>
> **[2:40](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/node-and-express-backend-setup?u=76281980&t=160)** If you're seeing errors, if you're seeing something that is not connecting to database or something like that, that means that you haven't in installed MongoDB properly.
>
> **[2:50](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/node-and-express-backend-setup?u=76281980&t=170)** So if you see that, go back to the instructions I just showed you and then restart your server with npm start.
>
> **[2:56](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/node-and-express-backend-setup?u=76281980&t=176)** Once you see this, you should be able to go to local host 3000 and you should see this: Node and express server is running on port 3000.
>
> **[3:06](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/node-and-express-backend-setup?u=76281980&t=186)** So if you see this, that means everything is working properly.
>
> **[3:10](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/node-and-express-backend-setup?u=76281980&t=190)** I will minimize this so this is running in the background while we continue working on our React Native application.
>
> **[3:17](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/node-and-express-backend-setup?u=76281980&t=197)** So I'm just going to close this and bring the CRM back here.
>
> **[3:22](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/node-and-express-backend-setup?u=76281980&t=202)** Perfect, so this is how you install the server or the backend that I included in this course.
>
> **[3:28](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/node-and-express-backend-setup?u=76281980&t=208)** If you're running into any problems, read the console and it's going to tell you exactly what happened.
>
> **[3:35](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/node-and-express-backend-setup?u=76281980&t=215)** If you're seeing the cannot connect to the database, make sure that you take a look at it.
>
> **[3:41](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/node-and-express-backend-setup?u=76281980&t=221)** One of the things that you can do also if you have Postman, is open Postman, go to this particular URL here, so local host 3000 or this address and do a send as a command.
>
> **[3:55](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/node-and-express-backend-setup?u=76281980&t=235)** You might not see anything right now because you haven't posted anything on the database, but if you see an empty array as a return data, then you're good.
>
> **[4:05](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/node-and-express-backend-setup?u=76281980&t=245)** If you see errors, that means that your server needs to be installed properly or you need to restart the process that we've just done.
>
> **[4:12](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/node-and-express-backend-setup?u=76281980&t=252)** One way or another, that's another way of checking if you have your server set up properly.
>
> **[4:18](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/node-and-express-backend-setup?u=76281980&t=258)** All right, so let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (7), [[npm]] (3), database (3), [[React Native]] (2), application (2)
> **Prerequisites:** install (8), setup (1), set up (1)
> **CLI Commands:** npm (3), node (2), make (2), brew (1)
> **UI Navigation:** go to (4), drag and drop (1)
> **Tools:** postman (2), vs code (1), terminal (1)
> **Env Vars:** api (1), crm (1), url (1)
> **Ports:** port 3000 (2)
> **Exercise Files:** exercise files (2)


### 2. Redux and Main Views

[↑ Back to Table of Contents](#table-of-contents)

#### Get started with Redux
> [LinkedIn Learning](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=0)** - [Instructor] Redux is a great tool to manage your state and we'll get started on setting it up.
>
> **[0:05](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=5)** I'll make sure to cover the code we're introducing as we create it.
>
> **[0:08](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=8)** But if you need a more in-depth introduction to Redux, do a search in our library for courses related to it.
>
> **[0:15](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=15)** On the second note, I am not using the new approach to Redux due to some middleware that is already deprecated.
>
> **[0:22](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=22)** And personally I prefer it this way, as it allows me to see the logic through and through.
>
> **[0:26](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=26)** However, if you prefer using the new code or another state machine like MobX, feel free to follow along this course and then update the code to whichever framework you desire.
>
> **[0:37](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=37)** Okay, so the first thing we're going to do is turn off the application here and install the dependencies that we need to continue.
>
> **[0:45](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=45)** So the first thing I'm going to do is install Redux, then I'm going to install React Redux, Redux thunk.
>
> **[0:57](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=57)** And while we're in here, I'm going to also install lodash for later.
>
> **[1:01](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=61)** So let's go ahead and install these libraries.
>
> **[1:05](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=65)** Alright, so what I'm going to do before is make sure I maximize my screen, and I'm going to close the terminal while we're doing code.
>
> **[1:14](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=74)** So the first thing we're going to need to do is open the App.js if you don't have this file already open, and we're going to create our store.
>
> **[1:22](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=82)** So basically our store is where your state is stored.
>
> **[1:26](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=86)** It's as simple as that.
>
> **[1:27](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=87)** So, in Redux you have the reducers that takes any actions and reduces the data to what it needs to be next.
>
> **[1:35](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=95)** So let's say for example, you have a state of alignment that is at center, and as you click on a specific button, it calls an action that says, for example, left align.
>
> **[1:48](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=108)** And what it will do is go into the reducer and change your state where this particular element is going to be left-align as opposed to center.
>
> **[1:56](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=116)** So then what we need to pass here is basically the value from the state that would be dynamically changed.
>
> **[2:03](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=123)** So that's pretty much how Redux works.
>
> **[2:05](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=125)** So let's go ahead and set it up.
>
> **[2:08](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=128)** So the first thing I'm going to do is import provider from React Redux, and then I'm going to import two elements from Redux, the first one being Create Store, and then I'm going to also import Apply Malware like so.
>
> **[2:30](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=150)** So one thing to note, Create Store says that it's going to be deprecated, it's okay, you can still use it, with the legacy approach to Redux.
>
> **[2:41](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=161)** Again, if you want to update it, you go ahead and take a look at the updated code, but I like to use it this way.
>
> **[2:48](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=168)** After that, what I'm going to do is import thunk from Redux Thunk.
>
> **[2:56](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=176)** Perfect.
>
> **[2:57](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=177)** So now what we need to do is wrap the provider on top of our containers here.
>
> **[3:04](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=184)** So what I'm going to do is change this particular element here and remove it.
>
> **[3:10](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=190)** Actually, we're not going to use the view 'cause we'll have other elements later on.
>
> **[3:14](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=194)** And I'm going to wrap inside of these particular elements, the provider like so.
>
> **[3:20](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=200)** And then we're going to pass the store that we'll create in the second right here.
>
> **[3:27](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=207)** But right now, there's no value because we haven't created the store yet.
>
> **[3:32](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=212)** So let me just go ahead and do that.
>
> **[3:36](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=216)** So the provider actually provides the store inside of our application and wraps it right here.
>
> **[3:41](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=221)** All right, so now that we have the provider here, we need to create the store.
>
> **[3:46](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=226)** So what I'm going to do is create the store right here.
>
> **[3:49](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=229)** So I'm going to create a variable called store, and I'm going to use Create Store like so.
>
> **[3:59](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=239)** So what we're going to do eventually, we're going to create reducers that will pass right here.
>
> **[4:05](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=245)** So what I'm going to do for now is place the reducers here and apply Middleware, and pass thunk to it like so.
>
> **[4:15](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=255)** So now we have all this set up, but the problem is if we save this, our application's going to crash 'cause we don't have our reducers yet.
>
> **[4:22](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=262)** So what I'm going to do is create a quick file that will have our reducers export them and then have them load here.
>
> **[4:29](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=269)** So let's go ahead and do that.
>
> **[4:30](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=270)** So I'm going to create a file right here.
>
> **[4:37](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=277)** And inside of Source, I'm going to create a folder that I will call Reducers.
>
> **[4:47](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=287)** And inside of the Reducers folder, I'm going to create People Reducer dot JS.
>
> **[4:57](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=297)** And inside the people reducer, I'm going to create an export, which will be default, with state equals initial state.
>
> **[5:11](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=311)** And then action.
>
> **[5:14](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=314)** And then this will be basically returning our state, which will be exported as reducers.
>
> **[5:22](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=322)** We'll do them later.
>
> **[5:27](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=327)** And just save this as is and save this as is.
>
> **[5:30](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=330)** There's a big chance that the application will still crash 'cause we still have to recreate a whole bunch of things to make our reducers work.
>
> **[5:37](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=337)** But this is what we're going to do for now.
>
> **[5:40](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=340)** And then import our reducers from reducers here.
>
> **[5:53](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=353)** People reducer, like so.
>
> **[5:56](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=356)** Now the next thing I want to do that we're going to start using inside of this course is a Component folder inside of the Source folder.
>
> **[6:04](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=364)** So we're going to create that right away, and then create a source folder, not inside this guy.
>
> **[6:19](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=379)** And what we're going to do now inside of the Source folder, we're going to create a folder called Images.
>
> **[6:28](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=388)** And we're also going to drop the reducers inside of the source here, like so.
>
> **[6:34](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/get-started-with-redux?u=76281980&t=394)** So now inside of our source we have images and reducers, and we'll keep working on our application in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (5), next (3), [[React.js|React]] (2), [[Search]] (1), data (1)
> **Prerequisites:** install (5), set up (1)
> **CLI Commands:** make (3)
> **UI Navigation:** open the (1), click on (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **File Paths:** app.js (1)
> **Cross-References:** in the next (1)

#### React Native actions
> [LinkedIn Learning](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=0)** - [Instructor] So let's continue working on the initial setup for Redux.
>
> **[0:04](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=4)** The one thing that we need to do now is to make sure that we can get some data inside of our application, otherwise our application's not going to show anything and it will break.
>
> **[0:13](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=13)** So right now, if you run the application, you're going to get errors like this.
>
> **[0:17](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=17)** So, what we want to do is get to bare state where we have data inside of our application and we can load some people inside of our CRM.
>
> **[0:27](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=27)** So what we're going to do first is go back to our reducers right here and start working on this.
>
> **[0:34](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=34)** So the first thing we're going to need to do is create the initial state.
>
> **[0:38](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=38)** So let's go ahead and do that: initialState.
>
> **[0:41](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=41)** And our initial state will include an object with a bunch of stuff that we're going to add to it as we have actions and our reducers are reducing that state with a new state.
>
> **[0:54](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=54)** And this is why I love the legacy way of doing Redux, because the logic is there, the actions tells you what's going to happen next, and it's very, very logical in its approach.
>
> **[1:05](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=65)** So the first thing I'm going to need is a people array.
>
> **[1:10](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=70)** And this is going to basically include all the people that we have inside of our database and then be able to list this into a people view.
>
> **[1:20](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=80)** And therefore, I have also data for detailed view.
>
> **[1:24](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=84)** Next, we need to have a few things that I want to keep in our state that we're going to use as specific actions are acted upon with the application.
>
> **[1:32](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=92)** So one of them is detailView.
>
> **[1:35](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=95)** So, whenever the detailView is true, it's going to show the detail view as opposed to the list view.
>
> **[1:42](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=102)** Also, I want to have a personSelected state where we're going to have it at null for now.
>
> **[1:51](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=111)** So whenever somebody is selected, then we're going to see this person in particular.
>
> **[1:56](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=116)** And then we need a few things that we're going to use as we have a form.
>
> **[2:01](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=121)** So, we're going to have a form inside of our application where we enter the data for adding new contacts inside of our application.
>
> **[2:09](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=129)** This is where we're going to use the next several items to fill with that new information, send it to the actual database, persist the information there, and then basically clear the state with empty information.
>
> **[2:24](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=144)** So, the first thing we need to do is: firstName, and let's go ahead and copy this, we're going to do a few of those, like this.
>
> **[2:34](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=154)** Then, lastName, then we're going to need phone, we're going to need email, company, and you can add anything you want on there.
>
> **[2:50](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=170)** This is basically the stuff that I'm going to use in the application, but if you want to hold anything else for a specific CRM, then you can add your own things in here.
>
> **[3:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=180)** And we're also going to set it up when we do the actions, how we send this, and the form itself.
>
> **[3:07](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=187)** So you can update it with new fields if you want inside of the form that we're going to use.
>
> **[3:14](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=194)** We're going to need to hold an ID.
>
> **[3:16](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=196)** So when we need to use that is basically, let's say for example, you're selecting a specific person, you need to hold, in the state, that information.
>
> **[3:24](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=204)** And the last one is toUpdate.
>
> **[3:28](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=208)** So, this is something that we're going to use with the UI.
>
> **[3:32](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=212)** So when this is true, it's going to show a specific screen.
>
> **[3:36](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=216)** All right, so this is our initial state.
>
> **[3:38](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=218)** What we're going to do now is include the first reducer inside of our reducers.
>
> **[3:44](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=224)** So what I'm going to do is create a switch statement, like so, an action type will passed to our switch, and then based on the action type, we're going to select something that is happening with our reducers, and therefore at that point, update the state with that specific data.
>
> **[4:08](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=248)** So, in this case here, we have what we're going to call our INITIAL_FETCH, so when we fetch our database.
>
> **[4:18](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=258)** And what we're going to do with that is return whatever the state is and then add, in people, the action.payload.
>
> **[4:32](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=272)** So this way, basically, when we click on a specific action that calls the INITIAL_FETCH, it's going to return the states, so wherever it is in the states.
>
> **[4:42](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=282)** So, if we have data in any of these elements, it's going to return that state, but also update people here with what we fetched directly from the database.
>
> **[4:52](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=292)** All right, so we have our first action.
>
> **[4:54](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=294)** And in the switch statement, you always need to have a default, right?
>
> **[4:58](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=298)** So, let's go ahead and do our default.
>
> **[5:01](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=301)** And our default is going to be just return the state.
>
> **[5:08](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=308)** Perfect, so we need to enter this because otherwise it's going to return an error when it runs through that switch statement if we don't have a default.
>
> **[5:16](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=316)** Now the next thing we need to do is go inside of our src and create our actions.
>
> **[5:22](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=322)** So inside of our src, I'm going to create a folder here that I'm going to call "actions."
>
> **[5:29](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=329)** And inside of that folder, and you can split them if you want, and then make sure that your modular imports are done properly, but what I'm going to do is simply do an index file inside of the actions and use that as basically the file where I hold all the actions.
>
> **[5:48](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=348)** So I'm going to do index.js, and then what we're going to do is export our first action.
>
> **[5:55](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=355)** So, the first action is going to be called loadInitialContacts.
>
> **[6:04](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=364)** And basically, actions are functions.
>
> **[6:08](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=368)** So what we're doing when we call this particular action here, we're basically calling data, or in this case here, whatever other actions that we're going to put in there.
>
> **[6:19](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=379)** So delete contact, update contacts, so on, so forth.
>
> **[6:23](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=383)** And then what we're doing, the result of that action is going to update our state here in our reducers.
>
> **[6:31](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=391)** So that basically is what's happening.
>
> **[6:34](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=394)** So, we're going to write that function with this in mind.
>
> **[6:38](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=398)** So, what we're doing here is return, whatever what's going to happen here, we're passing a dispatch.
>
> **[6:46](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=406)** And basically dispatch is a function that we can use to dispatch specific elements.
>
> **[6:53](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=413)** So what we're going to do here is first, we're going to fetch our database, so the database we set up earlier, and the URL is 'http://', and I'm going to use that address.
>
> **[7:09](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=429)** You can use localhost as well, it works, but I like to input the specific address, port 3000, and it's contact, this is what we created.
>
> **[7:20](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=440)** If you are curious about any of this, you can go into the backend right here, in the Routes, and then see that this is the route that returns a contact when we get something here.
>
> **[7:31](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=451)** So, if you're curious, you can browse through all the code here.
>
> **[7:35](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=455)** This is another course of mine where I built the database.
>
> **[7:39](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=459)** All right, so let's continue.
>
> **[7:41](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=461)** So once we fetch this, what we're going to do is do a .then, and we're going to use the response from that fetch to return the response.json.
>
> **[7:58](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=478)** So basically what happens here is whatever is the response from the server, we're returning it to that function, and therefore we're going to be able to update our state with the data from the server.
>
> **[8:12](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=492)** So once this is done, let's close this here, we're going to do another command.
>
> **[8:19](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=499)** So, then, what we're going to do is dispatch the data that we just pulled from the database and select our reducer.
>
> **[8:35](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=515)** So the reducer that we just created is INITIAL_FETCH, right?
>
> **[8:40](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=520)** And what we're going to do is, to that INITIAL_FETCH, we're going to pass, as the payload, the data, like so, as simple as that.
>
> **[8:52](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=532)** So basically the data is going to be now loaded into our state as the payload.
>
> **[8:58](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=538)** And if you go back to the reducer, basically the reducer is going to update our state with the payload from our fetch here.
>
> **[9:06](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=546)** And then the only thing I want to do is catch an error.
>
> **[9:09](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=549)** If there's anything that goes wrong, at least we see it in the console, and pass the error just to make sure we understand what's happening.
>
> **[9:21](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=561)** Okay, perfect.
>
> **[9:22](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=562)** So now what we've done is basically created the first action here that will fetch the data from the server and then inside of our reducers, pass that data into our state, and therefore return our state for the data.
>
> **[9:39](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=579)** So at that point, we'll be able to use that data to create the other views and not have any errors.
>
> **[9:46](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/react-native-actions?u=76281980&t=586)** All right, so now that we've created our initial actions and reducers, let's move on to the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (15), application (8), database (8), [[Fetch]] (6), next (5)
> **Code Identifiers:** detailview (2), initialstate (1), personselected (1), firstname (1), lastname (1)
> **Env Vars:** initial_fetch (4), crm (2), url (1)
> **CLI Commands:** make (3)
> **Cross-References:** go back to (2), next video (1)
> **Definitions:** is a  (2), we call this (1)
> **File Paths:** index.js (1), response.json (1)
> **Prerequisites:** setup (1), set up (1)

#### Create tab menu
> [LinkedIn Learning](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=0)** - [Instructor] Okay, so now what we're going to do is create the tab navigation at the bottom of our application.
>
> **[0:06](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=6)** Again, if you run the application right now, it's still going to be a fee because we're not using anything to load the information that we stored in our state.
>
> **[0:16](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=16)** So what we're going to do is actually work on the tab at the bottom and then create the people list view on top and start loading things back then.
>
> **[0:28](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=28)** So up until we actually finish these things, you're still going to have errors.
>
> **[0:32](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=32)** So let's go ahead and get started.
>
> **[0:34](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=34)** So the first thing I'm going to do is go inside of the terminal here, and I'm going to clear that up here and then do an NPM install.
>
> **[0:43](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=43)** We need a few things to continue working with the views and have icons and things like that.
>
> **[0:48](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=48)** So we're going to use a few of those libraries.
>
> **[0:51](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=51)** So the first thing I want to do is install react native material forward slash core.
>
> **[1:01](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=61)** Then I want to again do react navigation, and this is the navigational stuff that we're going to use momentarily.
>
> **[1:12](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=72)** I'm going to use the material bottom tabs to maintain the look of the application.
>
> **[1:23](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=83)** And then again, react navigation native, we need that.
>
> **[1:31](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=91)** Then there's a few libraries that we need.
>
> **[1:34](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=94)** React native paper, react native safe area context,
>
> **[1:48](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=108)** react native screens, and finally react native vector icons.
>
> **[2:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=120)** So we should be good here.
>
> **[2:03](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=123)** If you made a typo, just take a look at the messages in the console log.
>
> **[2:07](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=127)** It's going to give you a good idea of what happened, if anything.
>
> **[2:10](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=130)** Okay, so now we're going to go in the app.js.
>
> **[2:15](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=135)** I'm just going to close this for a second and we're going to start working on our navigation right here.
>
> **[2:21](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=141)** What I want to do is inside of our provider, I want to have the navigation right here.
>
> **[2:27](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=147)** So I'm going to remove this altogether and the next time we actually run the application, we have data in it.
>
> **[2:35](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=155)** It's going to pass that data and basically have the tabs at the bottom.
>
> **[2:39](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=159)** So what I'm going to do is import the navigation tabs that I just installed.
>
> **[2:45](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=165)** Let me just close this for having a little bit more estate for now.
>
> **[2:49](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=169)** Okay, so what I'm going to do is import navigation container from react navigation native.
>
> **[2:59](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=179)** And I'm also going to import a component that I'm going to create momentarily.
>
> **[3:05](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=185)** So right now it's going to tell you guys that there's an error, but I'm going to create this navigation component momentarily.
>
> **[3:13](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=193)** So it's going to be from source, from components, navigation like so.
>
> **[3:22](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=202)** And then what we're going to do right here inside of our provider, we're going to have the navigation container.
>
> **[3:32](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=212)** And inside the navigation container, we're going to have the component that will create shortly like so.
>
> **[3:41](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=221)** With all this, you should be good for this particular area.
>
> **[3:45](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=225)** So now we need to create this new component.
>
> **[3:47](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=227)** So now in our components folder, we're going to create the navigation component.
>
> **[3:53](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=233)** So let's go ahead and call this navigation.js, X out.
>
> **[3:57](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=237)** And then we're going to create our component that will be our navigation tool right here.
>
> **[4:04](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=244)** So let's go ahead and do that.
>
> **[4:06](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=246)** So we need to import a few things.
>
> **[4:08](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=248)** So let's go and create that screen.
>
> **[4:12](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=252)** Create material bottom tab navigator.
>
> **[4:19](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=259)** So that's the first one that we need.
>
> **[4:23](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=263)** And let me just close this again.
>
> **[4:25](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=265)** We're also going to need an icon from react native vector icons, and we're going to go specifically to evil icons.
>
> **[4:40](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=280)** We're going to use that shortly.
>
> **[4:43](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=283)** Now we're going to import other components that we don't have yet.
>
> **[4:47](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=287)** So we'll create a quick component in the next video to make sure that we have these components when we load our application and it's not running into a problem, but what we're going to do is create a component that we're going to call people list from, and it's going to be inside of the component here.
>
> **[5:04](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=304)** People list, don't have that yet, so it's going to scream if you start the application.
>
> **[5:11](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=311)** We're also going to import company list from company list.
>
> **[5:21](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=321)** And finally we're going to import add person from add person, like so.
>
> **[5:32](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=332)** So when we have all these components loaded, we can start creating our navigation.
>
> **[5:36](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=336)** Let's go ahead and do that.
>
> **[5:38](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=338)** So I'm going to create a tab that will have create material bottom tab like so.
>
> **[5:45](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=345)** And then we're going to create our navigation component.
>
> **[5:50](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=350)** And if you like the shorter way of doing things so for example, if you want to export this component directly from here, you can do that.
>
> **[5:58](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=358)** Some people actually do that, but I tend to do the opposite.
>
> **[6:05](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=365)** Again, this is just a personal style.
>
> **[6:06](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=366)** If you have your own way of working, it's going to be the same at the end of the day.
>
> **[6:11](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=371)** And then I would do something like export default navigation like so, and then I can start working on my component here, like so.
>
> **[6:25](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=385)** Okay, so the first thing we're going to do is create a tab dot navigator, and inside of that tab navigator, we're going to have our screens.
>
> **[6:37](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-tab-menu?u=76281980&t=397)** So just for the sake of time, I'm going to continue this particular code in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (6), [[React Native]] (6), [[React.js|React]] (3), next (3), data (2)
> **File Paths:** app.js (1), navigation.js (1)
> **CLI Commands:** npm (1), make (1)
> **Cross-References:** in the next (2)
> **Prerequisites:** install (2)
> **Env Vars:** npm (1)
> **Tools:** terminal (1)
> **Analogies:** for example (1)

#### Tab navigation
> [LinkedIn Learning](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=0)** - [Instructor] Let's continue doing the tab navigation here.
>
> **[0:03](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=3)** So the first thing I'm going to do is add some props for the tab navigator.
>
> **[0:07](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=7)** So if you don't know, tab navigator comes with a lot of options and basically props that you can use.
>
> **[0:15](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=15)** For example, the one that I'm going to use first is what is the initial route?
>
> **[0:20](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=20)** So when the application loads, what is the route that will be loaded on the screen from the tab?
>
> **[0:26](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=26)** So it's going to be people.
>
> **[0:29](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=29)** Another prop is active color, and that's the color that you want of the tab itself.
>
> **[0:34](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=34)** So this is a color that I'm using throughout this application.
>
> **[0:39](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=39)** Feel free to select whatever color you want.
>
> **[0:41](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=41)** Then the bar style basically allows us to add more styles to the bar itself.
>
> **[0:46](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=46)** One of them is the background color.
>
> **[0:49](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=49)** So just as a note, this is the active color, so basically the color when you select a particular tab.
>
> **[0:55](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=55)** The background color is the color of the tab itself.
>
> **[0:59](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=59)** So we're going to go for this color here.
>
> **[1:04](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=64)** Okay, so these are the options for the tab navigator.
>
> **[1:07](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=67)** So the tab navigator comes with basically a component that you can use, which is the tab screen, and this basically allows you to add the different tabs inside of the tab navigator.
>
> **[1:20](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=80)** So let's go ahead and do that.
>
> **[1:23](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=83)** And the tab screen also has some options.
>
> **[1:25](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=85)** So what we're going to do first for the tab screen is what is the name of that tab?
>
> **[1:30](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=90)** So the first one is people, and what is the component you're going to load by this particular tab?
>
> **[1:37](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=97)** And in this case, it's PeopleList.
>
> **[1:41](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=101)** And then if we have any options for a tab, what you do is you can go ahead and use one of the props that's called options.
>
> **[1:50](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=110)** And for those, you have several things you can do.
>
> **[1:52](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=112)** So for example, what is the tab bar label?
>
> **[1:57](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=117)** So that's the actual label.
>
> **[1:59](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=119)** Even though we're loading the PeopleList component and the screen name is people, we still need to put a label here.
>
> **[2:07](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=127)** The other one that I'm going to do is use an icon.
>
> **[2:10](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=130)** And this is why we imported this icon here.
>
> **[2:13](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=133)** So what we're going to do is basically go ahead and do a function that will return an icon for this particular tab like so.
>
> **[2:25](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=145)** And inside of that bar, we're going to load icon name user, and we're going to put a size for it at 30 and then a color.
>
> **[2:39](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=159)** And basically the color will be the color that will be passed through the icon like so.
>
> **[2:47](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=167)** Okay, so now we have our first tab screen.
>
> **[2:49](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=169)** What we're going to do to speed this up, we're going to basically copy and paste the entire code that we just written and we'll create the other tabs the same way.
>
> **[3:02](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=182)** So the second one is add, which uses the AddPerson component.
>
> **[3:11](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=191)** And then for the tar label, it's going to be add.
>
> **[3:15](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=195)** And we're going to be using the plus icon from the library we loaded, same size, same color.
>
> **[3:22](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=202)** And again, we're going to do this one more time for the CompanyList.
>
> **[3:29](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=209)** And this is going to be company, which will use the CompanyList component.
>
> **[3:37](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=217)** For this, we're going to use the label company.
>
> **[3:41](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=221)** And for the actual icon itself, it's going to be the archive icon.
>
> **[3:45](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=225)** And again, if you want to have more details, just go and research React Native vector icons, and then you can take a look at all the lists of the icons that are possible with this particular library.
>
> **[3:58](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=238)** And then there are sublibraries that you can load like what we just done here, so EvilIcons, and then use whatever icon that are part of that library.
>
> **[4:09](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=249)** Then the next thing we need to do, we save this.
>
> **[4:12](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=252)** I'm going to add a line here.
>
> **[4:13](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=253)** And then what we'll do is go in our list of components and add the People component, the CompanyList component and the AddPeople component.
>
> **[4:25](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=265)** Right here, we're just going to create a temporary component here for each one of them so we can load our components whenever we click a tab, especially the first one, which is PeopleList.
>
> **[4:37](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=277)** So this one we're going to import React component from react, and then we're going to import also View, StyleSheet, and Flatlist from react-native.
>
> **[5:02](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=302)** Okay, so then what we're going to do is create a class component, which we'll call PeopleList extends Component, then create a render return, and then just create a simple view, Hello.
>
> **[5:27](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=327)** Export default PeopleList.
>
> **[5:34](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=334)** Okay, so what we're going to do very quickly just to have a base component that we can load for each in the navigation, we're going to copy all this very quickly, create components.
>
> **[5:45](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=345)** We're going to create the AddPerson.js, and we're going to create the CompanyList.js.
>
> **[5:58](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=358)** And for each one of them, we're going to paste this, quickly switch the PeopleList to this one is Company List, save it and do the same for here for AddPerson.
>
> **[6:14](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=374)** I'm going to change the PeopleList to AddPerson.
>
> **[6:19](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=379)** So we have unique components for each one of them.
>
> **[6:23](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=383)** And we can start the application and run it.
>
> **[6:25](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=385)** And we're going to do this in the next video.
>
> **[6:26](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/tab-navigation?u=76281980&t=386)** So let's go ahead and move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (3), [[React.js|React]] (3), next (2), [[React Native]] (1)
> **File Paths:** addperson.js (1), companylist.js (1)
> **Analogies:** for example (2)
> **CLI Commands:** tar (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Create the people list view
> [LinkedIn Learning](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=0)** - [Instructor] Okay so what we're going to work on next is to make sure that first of all, we can load the application and if there's any issues, then we fix 'em right away.
>
> **[0:09](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=9)** The other thing is we're going to focus on the PeopleList component.
>
> **[0:12](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=12)** So we're still going to break our application by adding more code, but as we move along, things are going to start moving into place.
>
> **[0:20](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=20)** So let's go ahead and start the application first, see if there's any issues at the forefront.
>
> **[0:26](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=26)** And I'm going to do npm start.
>
> **[0:31](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=31)** Select iOS.
>
> **[0:34](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=34)** And we have some issues here.
>
> **[0:37](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=37)** So texturing must be rendered in text.
>
> **[0:40](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=40)** Okay, so something is wrong here.
>
> **[0:44](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=44)** At the top here, located in PeopleList.
>
> **[0:50](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=50)** So let's take a look at that.
>
> **[0:52](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=52)** So what we're going to do first, let's go into PeopleList.
>
> **[0:57](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=57)** Yeah, okay.
>
> **[0:58](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=58)** So what we're going to do here is just switch this to a text.
>
> **[1:01](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=61)** There you go.
>
> **[1:04](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=64)** And make sure it's also loaded here, like so.
>
> **[1:09](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=69)** Good.
>
> **[1:11](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=71)** Perfect.
>
> **[1:12](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=72)** And we're going to copy and paste these in each one of the list that we've created here.
>
> **[1:20](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=80)** Perfect.
>
> **[1:21](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=81)** And AddPerson.
>
> **[1:26](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=86)** Okay.
>
> **[1:27](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=87)** First thing, we're good to go.
>
> **[1:30](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=90)** So what I'm going to do now is just load the PeopleList and do the full application here.
>
> **[1:36](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=96)** So we may actually get rid of the text there.
>
> **[1:39](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=99)** So the first thing we're going to do is import a few things.
>
> **[1:42](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=102)** So I'm going to go ahead and undo the text thing here 'cause we're going to change that anyways.
>
> **[1:48](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=108)** It's just for the others not to get any problems after that.
>
> **[1:52](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=112)** Okay, so we're going to import, connect from React Redux.
>
> **[1:59](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=119)** We're going to also import PeopleItem, which we'll work on shortly.
>
> **[2:06](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=126)** So basically if you want to see the architecture of the application, we're going from PeopleList to PeopleItem, and then we're going to have detailView, which we're going to show a lot more information about that person.
>
> **[2:19](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=139)** So this is the way we're basically going to build it from now on.
>
> **[2:22](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=142)** So PeopleItem.
>
> **[2:27](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=147)** And what we should do, is quickly add a component, call it PeopleItem, like so, .js, copy and paste from CompanyList.
>
> **[2:43](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=163)** Go in PeopleItem, boom.
>
> **[2:45](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=165)** Quickly switch these two to PeopleItem, like so.
>
> **[2:50](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=170)** So we have something right here.
>
> **[2:54](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=174)** Then we're going to do import, PeopleDetail.
>
> **[2:59](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=179)** So the detailed view from PeopleDetail, and we're going to do the exact same thing that we just did, very quickly.
>
> **[3:09](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=189)** So we have something here.
>
> **[3:12](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=192)** Boom.
>
> **[3:13](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=193)** PeopleDetail.js, like so.
>
> **[3:19](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=199)** Paste, select here, select here.
>
> **[3:22](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=202)** PeopleDetail.
>
> **[3:25](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=205)** We're building basically our architecture of our applications right now by having simple components and then we'll change the whole thing as we work along.
>
> **[3:33](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=213)** Okay, so we've done that here.
>
> **[3:36](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=216)** Now I'm going to come back here, so now I can actually load this and then import loadInitialContacts,
>
> **[3:48](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=228)** from actions.
>
> **[3:51](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=231)** And while I'm thinking about it, we need to make a few changes in our directory.
>
> **[3:55](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=235)** And I'm going to do this directly inside of the app.
>
> **[4:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=240)** So I'm going to go right here, like so.
>
> **[4:04](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=244)** And what I'm going to do is make sure that my components are inside source, here, and I want to make sure that my actions are in source, so we're good with that.
>
> **[4:18](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=258)** Images should be in source too, and then the reducers.
>
> **[4:22](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=262)** So we're all good.
>
> **[4:26](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=266)** And if we start the application, we may have some issues where it's loaded, but as far as I'm concerned, I'm pretty sure we have all this well done.
>
> **[4:36](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=276)** If not, then it's going to show us very quickly.
>
> **[4:40](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=280)** Let's make sure that we are loading it from here.
>
> **[4:44](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=284)** PeopleList, CompanyList, Navigation.
>
> **[4:48](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=288)** We're all good.
>
> **[4:49](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=289)** Okay.
>
> **[4:51](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=291)** All right, let's continue working on this one.
>
> **[4:54](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=294)** Now what we need to do is create the style sheet, so we're going to go ahead and do that.
>
> **[4:59](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=299)** Styles equals StyleSheet.create.
>
> **[5:05](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=305)** So we're creating a style sheet for this particular page.
>
> **[5:09](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=309)** And then we're going to add styles for the container.
>
> **[5:14](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=314)** And it's going to be paddingTop.
>
> **[5:19](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=319)** I'm going to put 80 pixels.
>
> **[5:22](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=322)** Okay, so this is done.
>
> **[5:25](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=325)** Now I'm going to go inside of my class here and I'm going to create first, a component.
>
> **[5:33](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=333)** And basically when the component has mounted, we want to load our initial contacts.
>
> **[5:42](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=342)** And then what we're going to do, inside of our render here, we're going to render a flat list.
>
> **[5:51](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=351)** And inside of a flat list, we're going to have a few things.
>
> **[5:53](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=353)** So a flat list component from React Native, basically takes a few things.
>
> **[5:59](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=359)** The first thing it takes as a prop is what is the data that we're actually loading?
>
> **[6:05](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=365)** And we're going to do some Redux right after that, towards the end of that file, because what we need to do is connect Redux or the store to this component, so we actually have access to the props.people, inside of our state.
>
> **[6:22](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=382)** So we're going to do that.
>
> **[6:23](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=383)** This is what we have to set up, so it loads the props.people.
>
> **[6:28](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=388)** Then we're going to render an item and for each item in the array, so basically people is an array, and the Flatlist is a flat list of elements.
>
> **[6:40](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=400)** We need to have for every single elements that we're going to have inside of the flat list, we're going to render one item.
>
> **[6:50](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=410)** So this is what it takes as a prop.
>
> **[6:52](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=412)** So item, and this item is PeopleItem.
>
> **[7:01](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=421)** And it takes a prop that will be PeopleItem.
>
> **[7:05](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=425)** So basically every single item inside of our array is going to return this PeopleItem component, which we quickly created.
>
> **[7:16](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=436)** Just forgot this here.
>
> **[7:18](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=438)** And it needs to also have a key.
>
> **[7:21](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=441)** So we need to extract from the list what exactly is the key.
>
> **[7:26](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=446)** So for every item in a list, there needs to be a key.
>
> **[7:30](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=450)** So what is going to be that key?
>
> **[7:32](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=452)** So that's basically what we're setting up right now.
>
> **[7:37](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=457)** And we're going to use the index of that item to string, like so.
>
> **[7:43](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=463)** Simple operation to render a key for every item here.
>
> **[7:51](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=471)** Okay.
>
> **[7:52](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=472)** So now we need to map the store to this particular component.
>
> **[7:59](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=479)** We need to map state to props, takes a state, and then it will return the people from the state.people and detailView.
>
> **[8:20](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=500)** This is something we're going to use later because we need to understand when we click on a specific action, it's going to put detailView as true, and if it's true, then show the detailed view as opposed to the flat list on the screen.
>
> **[8:36](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=516)** And this is what we're mapping to it, like so.
>
> **[8:40](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=520)** Okay.
>
> **[8:41](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=521)** So basically what this does here is for the people props and the detailView prop, we're mapping the state.people and the state.detailView.
>
> **[8:50](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=530)** So what we have in the store needs to be mapped.
>
> **[8:53](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=533)** Now in order to connect all this, we need to run connect from the Redux library and have map state to props.
>
> **[9:03](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=543)** And it's going to take it from loadInitialContacts, right?
>
> **[9:09](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=549)** And then we export PeopleList.
>
> **[9:14](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=554)** So these are all the arguments that this function connect takes.
>
> **[9:18](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=558)** So with this, we should be able to connect the store to this specific view here.
>
> **[9:24](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=564)** Perfect.
>
> **[9:25](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=565)** So now that we've done the PeopleList component, we need to move on to the next one on the list.
>
> **[9:32](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-the-people-list-view?u=76281980&t=572)** Let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (6), next (2), [[npm]] (1), [[React.js|React]] (1), [[React Native]] (1)
> **Code Identifiers:** detailview (5), loadinitialcontacts (2), ios (1), paddingtop (1)
> **CLI Commands:** make (6), npm (1)
> **Definitions:** is an  (1), is a  (1)
> **File Paths:** peopledetail.js (1)
> **UI Navigation:** click on (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Code the people item view
> [LinkedIn Learning](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=0)** - [Instructor] Okay, so now we'll focus on the PeopleItem view.
>
> **[0:03](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=3)** So when we run the list, we're going to have PeopleItem.
>
> **[0:07](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=7)** And inside of the PeopleItem, we're going to have the component that will be repeated multiple times.
>
> **[0:13](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=13)** So let's go ahead and create that.
>
> **[0:15](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=15)** So what I'm going to do is import a few things first.
>
> **[0:19](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=19)** So in the React Native view, I'm going to import Text, keep View, keep StyleSheet, also we'll remove Flatlist, replace it with Image, and TouchableWithoutFeedback.
>
> **[0:34](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=34)** So let's go ahead and find that one. Perfect.
>
> **[0:39](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=39)** So once we have those, let me just close this, we should be good to go.
>
> **[0:43](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=43)** And now we're ready to import other things.
>
> **[0:46](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=46)** We're also going to Connect redux in here and we're going to import again icons that we'll select from react-native-vector-icons/EvilIcons.
>
> **[1:04](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=64)** And then we're going to import all of our actions as actions from actions.
>
> **[1:15](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=75)** Perfect.
>
> **[1:16](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=76)** Okay, we're going to create a style sheet, StyleSheet.create.
>
> **[1:27](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=87)** And we're going to create a few here.
>
> **[1:28](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=88)** So the first one, I want to create a title that will have a few things here.
>
> **[1:33](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=93)** So we're going to have a top that will have minus 60 pixels, a left that will have 100 pixels.
>
> **[1:41](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=101)** And again, I did all these in my initial project a while ago, so I'm using pretty much verbatim most of it from the initial project.
>
> **[1:53](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=113)** Then what we're going to do, we're also going to create styles for a class that's called Image in which we'll have a height of 100.
>
> **[2:07](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=127)** Then we're going to go and have also an action class.
>
> **[2:11](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=131)** And inside that action class, we'll have a top of minus 30.
>
> **[2:15](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=135)** We'll have a background color that will be black color, that will be white.
>
> **[2:27](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=147)** And font size, that will be at 24.
>
> **[2:31](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=151)** And once we start the application, you're going to see all these styles in action.
>
> **[2:35](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=155)** If there's anything you want to change, play with it as you start the application.
>
> **[2:40](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=160)** Then the icon is going to have a few styles too.
>
> **[2:44](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=164)** Position absolute.
>
> **[2:51](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=171)** Top 15.
>
> **[2:54](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=174)** Left zero.
>
> **[2:56](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=176)** Color white.
>
> **[3:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=180)** Background color.
>
> **[3:02](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=182)** And we're going to go with something very specific on this one, RGBA 255, 255, 255, 0.
>
> **[3:14](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=194)** Just to show you options that we have when we create style sheets.
>
> **[3:18](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=198)** Okay, so that's our style sheet.
>
> **[3:20](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=200)** Now what we need to do is recreate a little bit of this.
>
> **[3:25](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=205)** We're not going to do a class, we're going to do a functional component here.
>
> **[3:29](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=209)** So we're going to do this instead, PeopleItem, we're passing props and we're going to return.
>
> **[3:42](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=222)** The first component we're going to use is the TouchableWithoutFeedback, which will have an onPress function that will run props.selectPerson.
>
> **[3:56](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=236)** So we'll create that action once we go back to redux and extend on the actions that we already have.
>
> **[4:05](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=245)** What we'll do is basically take the actual person of this item, so the idea of that item, and then it will return and push to the detail view of the information from that particular item or particular person in the list, so props.people.
>
> **[4:29](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=269)** Okay, so then what we're going to do, we're going to create a view, and inside of the view, we're going to have a few things.
>
> **[4:36](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=276)** We're going to have first the image component, then we're going to have an icon component, and we're going to put some details in here in a second.
>
> **[4:45](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=285)** And then we're going to have two text component, one here and one there like so.
>
> **[4:55](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=295)** Perfect, so now we're going to need to put a few things.
>
> **[4:58](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=298)** So for the image itself, the image takes two props that I need.
>
> **[5:04](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=304)** First of all, it takes a source.
>
> **[5:07](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=307)** And what is the source?
>
> **[5:08](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=308)** It requires from my images background.jpg.
>
> **[5:16](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=316)** And we're going to drop these images shortly inside of our images folder.
>
> **[5:23](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=323)** The second prop it takes is any style.
>
> **[5:26](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=326)** So yes, in this case, we have some styles that are applied to the image, styles.image.
>
> **[5:32](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=332)** Perfect.
>
> **[5:33](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=333)** Now the icon, we need a name, right?
>
> **[5:36](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=336)** And the name is going to be user.
>
> **[5:41](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=341)** Then we're going to have a size of 100.
>
> **[5:46](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=346)** And then some styles, and they're going to come from styles.icon.
>
> **[5:54](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=354)** And finally, for the text, we're going to apply first of all styles here, which will be taking styles.title, and then style styles.action.
>
> **[6:13](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=373)** And basically, the title will be props.people.firstName.
>
> **[6:22](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=382)** Again, we're going to do the exact same thing, props.people.LastName.
>
> **[6:29](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=389)** And then in the text here, which company comes from, so people.company.
>
> **[6:38](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=398)** And finally, we need to do what we've done previously, making sure that we connect our component through redux.
>
> **[6:53](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=413)** Okay, so let's save this.
>
> **[6:58](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=418)** Just one thing that I realized here.
>
> **[7:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=420)** A little typo. Perfect.
>
> **[7:02](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=422)** Save that. Perfect.
>
> **[7:05](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=425)** Now that we've done the PeopleItem component, we're going to move to other components that are left in our list.
>
> **[7:11](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-people-item-view?u=76281980&t=431)** Let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (2), [[React Native]] (1), [[React.js|React]] (1), functional (1)
> **Code Identifiers:** onpress (1), selectperson (1), firstname (1)
> **CLI Commands:** find (1)
> **Env Vars:** rgba (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### Add new components
> [LinkedIn Learning](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=0)** - [Instructor] We're going to complete the remaining components needed on this video, plus add all the images required from the exercise files.
>
> **[0:07](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=7)** Right now your application in the simulator is giving you errors and this is normal.
>
> **[0:12](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=12)** We haven't quite finished integrating most of the elements needed to make the application work properly.
>
> **[0:17](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=17)** So bear with me as we continue on our journey.
>
> **[0:20](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=20)** So let's get to it.
>
> **[0:22](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=22)** Okay, so the first thing that we're going to do is add the remaining components and add the images in the image folder.
>
> **[0:29](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=29)** So what I'm going to do is minimize first VS Code here.
>
> **[0:32](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=32)** And as you can see, there's errors and this is completely normal.
>
> **[0:36](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=36)** So just for the sake of not having any errors, let's just close the application for now.
>
> **[0:40](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=40)** So I'm going to go in the exercise files.
>
> **[0:43](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=43)** And in the exercise files you have a folder called Images.
>
> **[0:46](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=46)** So grab all the images here.
>
> **[0:49](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=49)** And the only thing you don't need in the image folder is the PDF file and the afdesign here, which are basically the original design files that I've used to create these.
>
> **[1:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=60)** And I'm going to copy them and then go inside of the CRM here.
>
> **[1:06](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=66)** And in the Sources folder, you have the Images folder, and I'm going to drop the images right here, like so.
>
> **[1:14](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=74)** Perfect. So we got everything we need.
>
> **[1:16](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=76)** We can go back and grab our application here, and we're going to add more components.
>
> **[1:22](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=82)** So the first one that I want to add is the Companyitem.js.
>
> **[1:29](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=89)** And let's go ahead and grab code from the AddPerson.
>
> **[1:34](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=94)** And while I'm here, I'm seeing something here.
>
> **[1:36](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=96)** This shouldn't be asking for component with a a low cap.
>
> **[1:42](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=102)** And let me just check to make sure that I didn't make that mistake somewhere else.
>
> **[1:46](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=106)** I did, so let's remove that just to remove that error.
>
> **[1:52](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=112)** Navigation doesn't seem to have it.
>
> **[1:54](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=114)** Component here in the PeopleDetail.
>
> **[1:58](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=118)** Make sure you save your file as you go along.
>
> **[2:01](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=121)** Let's remove that here.
>
> **[2:03](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=123)** And finally on PeopleList, remove that. This is a typo.
>
> **[2:08](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=128)** I probably was writing down component, and then all of a sudden I wrote it again and it auto completed for me.
>
> **[2:16](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=136)** So, okay, so now that I have this, let's grab the code from AddPerson, copy.
>
> **[2:23](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=143)** Go inside of CompanyItem, paste it, change AddPerson to CompanyItem, like so.
>
> **[2:35](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=155)** And make sure we also just create a View instead of text while we're here.
>
> **[2:43](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=163)** And just remove this so we don't run into any errors.
>
> **[2:47](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=167)** And I'm going to copy that, paste it in the other component that I created just to fix that little problem that might be an issue.
>
> **[2:59](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=179)** And here we're good.
>
> **[3:06](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=186)** Yeah, let's paste it here as well.
>
> **[3:10](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=190)** And quickly check over your components just to make sure you don't have any of this.
>
> **[3:17](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=197)** View, we're good. Here we're good.
>
> **[3:19](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=199)** Here we're good. Okay, perfect.
>
> **[3:22](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=202)** So now I'm going to continue.
>
> **[3:24](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=204)** Copy all this.
>
> **[3:26](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=206)** Close the others. Create a new component here.
>
> **[3:30](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=210)** And this one I'm going to call UpdatePerson.js.
>
> **[3:37](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=217)** Paste this. Update here.
>
> **[3:40](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=220)** So UpdatePerson. Perfect, we're all good.
>
> **[3:45](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=225)** And then finally, do the exact same thing for a component that we're going to call DetailView, which will work in detail in the next chapter 'cause there's a lot of code in this specific component here.
>
> **[3:59](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=239)** So I'm going to do this.
>
> **[4:02](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=242)** Again update DetailView, like so.
>
> **[4:07](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=247)** And there you go.
>
> **[4:08](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=248)** One more thing I want to do before we leave this video.
>
> **[4:11](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=251)** I want to complete the code for PeopleList.
>
> **[4:14](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=254)** This is one that I really want to complete now because we have more things that we need in here.
>
> **[4:19](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=259)** So the way I'm going to do this is first I'm going to create a method that I'm going to call renderInitialView.
>
> **[4:31](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=271)** And basically this function or method as part of our class, what it's going to do is, when the state returns in DetailView true, we're going to basically run the PeopleDetail view here.
>
> **[4:47](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=287)** And if it's off, we're going to return the Flatlist.
>
> **[4:51](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=291)** So that will allow us to click on a specific item inside of our list, and if it's clicked, then it's going to update our state with DetailView equals True.
>
> **[5:03](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=303)** And then it's going to render the PeopleView as opposed to the Flatlist.
>
> **[5:08](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=308)** So let's go ahead and do this.
>
> **[5:10](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=310)** If (this.props.detailView === true)
>
> **[5:20](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=320)** then return <PeopleDetail />, like so.
>
> **[5:28](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=328)** So we want to make sure that we have PeopleDetail imported here, so we're good.
>
> **[5:34](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=334)** Perfect, else { return, and then we're going to return the Flatlist here.
>
> **[5:44](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=344)** So I'm going to highlight line 33 to 37, cut it, return, paste it here, like so.
>
> **[5:55](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=355)** Perfect.
>
> **[5:56](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=356)** And then, in the render method, basically what we're going to do is first have a view and we're going to add styles, and basically those styles from container.
>
> **[6:12](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=372)** And if you remember, we did those here, earlier.
>
> **[6:16](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=376)** Perfect.
>
> **[6:18](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=378)** And then we're going to use the method that we just created, so renderInitialView(), like so.
>
> **[6:25](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=385)** So basically this function will be returned inside of the PeopleList.
>
> **[6:30](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=390)** So if DetailView is false, it's going to return the Flatlist of people.
>
> **[6:36](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=396)** If it's true, then we're going to have the PeopleDetail.
>
> **[6:40](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/add-new-components?u=76281980&t=400)** So this is basically what I wanted to do in this video, so let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (4), next (1)
> **CLI Commands:** make (7)
> **Code Identifiers:** renderinitialview (2), detailview (1)
> **Exercise Files:** exercise files (3)
> **File Paths:** companyitem.js (1), updateperson.js (1)
> **Env Vars:** pdf (1), crm (1)
> **Cross-References:** in the next (1)
> **Tools:** vs code (1)


### 3. Complex Component

[↑ Back to Table of Contents](#table-of-contents)

#### Setting up Redux for a detail view
> [LinkedIn Learning](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=0)** - [Instructor] In this chapter, we're going to start working on a detailed and complex component such as the detail view.
>
> **[0:07](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=7)** The first thing we're going to do is set up redux for the detail view, and then we're going to keep working on the detail view itself, the component, until we're done with it.
>
> **[0:16](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=16)** So let's go ahead and get started.
>
> **[0:18](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=18)** So the first thing we're going to do is go back to our actions here.
>
> **[0:24](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=24)** And we're going to add a few actions.
>
> **[0:26](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=26)** 'cause right now, all we have is just the load initial contact, so we need two more actions specific to the detail view.
>
> **[0:34](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=34)** So one of them is called select person.
>
> **[0:41](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=41)** And this one basically will take a people ID.
>
> **[0:47](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=47)** And then return inside a redux a type, which we'll call selected person.
>
> **[0:57](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=57)** And we'll need the select ID inside of our actions, which is basically the people.
>
> **[1:04](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=64)** And I just made a mistake here, just a little typo that could screw us in the future, like so.
>
> **[1:13](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=73)** And I want to make sure that this is a function, perfect.
>
> **[1:17](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=77)** Alright, so basically if we click, and we select the action selected person, and we have the people idea, we're going to be able to return inside of our state a person as selected, and we're going to have the people idea with that.
>
> **[1:35](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=95)** Now the next one that we need to work on is called non-selected.
>
> **[1:41](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=101)** Which basically means that we don't have anything selected.
>
> **[1:48](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=108)** And this will return inside of our state.
>
> **[1:52](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=112)** Type, none, selected.
>
> **[1:59](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=119)** As such.
>
> **[2:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=120)** Perfect.
>
> **[2:01](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=121)** So these are the actions and then we need to work on a reducer.
>
> **[2:06](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=126)** So let's go ahead and bring the reducer here.
>
> **[2:09](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=129)** So, when the action of a selected person is clicked, we're going to pass it inside of our reducer here.
>
> **[2:18](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=138)** And what I'm going to do, actually, I'm going to do it after the initial fetch.
>
> **[2:24](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=144)** We're going to have a case.
>
> **[2:27](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=147)** Which will be selected person, remember we just created that action, so if the action is selected person, we're going to return our state, our state.
>
> **[2:42](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=162)** And, in the detail view, we're going to put it as true.
>
> **[2:48](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=168)** So remember, in the previous video we did in the component here, in people list.
>
> **[2:54](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=174)** So in the people list here, if the actual state says that detail view is true, then return the people detail, right?
>
> **[3:03](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=183)** This component.
>
> **[3:04](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=184)** Otherwise return the flat list.
>
> **[3:06](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=186)** Well this is where we're going to do this.
>
> **[3:08](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=188)** So if the action is the selected person, we're going to pass the action as selected person, and we're going to have a people ID inside of this particular action.
>
> **[3:19](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=199)** And now we're passing this inside of our reducer.
>
> **[3:23](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=203)** So, the detail view's going to be as true.
>
> **[3:26](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=206)** And then person selected, we're going to have the action with the select idea.
>
> **[3:36](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=216)** So, this here.
>
> **[3:41](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=221)** So basically this will update the state with a people ID here inside of our key here, select ID.
>
> **[3:49](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=229)** With that, with the people detail here, we're going to pass it in people detail and it's going to grab whatever is in the state as the selected person selected here.
>
> **[4:04](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=244)** And therefore, we'll have all the details inside of the detail view.
>
> **[4:08](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=248)** More on this as we work on the detail view.
>
> **[4:11](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=251)** So, we're going to finish this here.
>
> **[4:14](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=254)** So, we have also another case, if you remember correctly, that other case is non-selected, right?
>
> **[4:26](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=266)** And what happens when we have that?
>
> **[4:30](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=270)** We return.
>
> **[4:32](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=272)** Again, the state.
>
> **[4:35](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=275)** Detail view is now going to be false.
>
> **[4:40](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=280)** And the person selected will be no, so nobody.
>
> **[4:49](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=289)** Otherwise, we have the default case here.
>
> **[4:51](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=291)** Alright, so we can save this.
>
> **[4:54](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=294)** What I'm going to do next is work on the detail view a little bit, because we have a lot of code in the detail view, so I'm going to close these here.
>
> **[5:03](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=303)** And I'm going to open the detail view.
>
> **[5:05](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=305)** So, for the detail view, first and foremost, we have to load a few things here in react native, we have style sheet, which is good, we have, instead of flat list, we're going to have the scroll view.
>
> **[5:20](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=320)** We're going to need text, we're going to need image, and we're going to need touchable opacity.
>
> **[5:30](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=330)** Like so.
>
> **[5:32](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=332)** We're also going to need a few things, so let's go ahead and import everything that we need, and then we'll move on to the next video with the rest of the code, 'cause we have a lot of code in this particular view.
>
> **[5:43](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=343)** It's a complex one, this is where we have all the details of the person, or the contact, so, there's a lot of things that we need to add here, so, react redux.
>
> **[5:56](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=356)** We need also to import evil icon.
>
> **[6:02](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=362)** From react native vector icons.
>
> **[6:09](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=369)** And then we're going to select evil icons.
>
> **[6:14](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=374)** We also need material icon.
>
> **[6:19](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=379)** From, again, the same guy is here.
>
> **[6:24](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=384)** So let's copy and paste this.
>
> **[6:28](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=388)** And instead of evil icons, it's going to be material icons.
>
> **[6:34](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=394)** Next we're going to also import simple icon, there's a lot of icons that I'm using in this particular component.
>
> **[6:44](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=404)** And simple line icons.
>
> **[6:48](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=408)** And finally, we're going to import all our actions, which we're going to use at some point here.
>
> **[6:56](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=416)** There you go.
>
> **[6:58](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=418)** And while we're here, the last thing that I'm going to create just before we move on to the next video is the styles, 'cause we're going to work on the styles here.
>
> **[7:10](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=430)** Style sheet, dot create.
>
> **[7:15](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=435)** And we're just going to create the first one, so there's something in here, otherwise it's going to return an error, even though our application, it's still not going to work for a little bit.
>
> **[7:24](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=444)** But I'd like to just add something here, so, title one's going to be top minus 75.
>
> **[7:32](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=452)** Left 100, and font size is going to be 24, like so.
>
> **[7:41](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/setting-up-redux-for-a-detail-view?u=76281980&t=461)** Okay, and then we'll continue working on this in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (6), [[React Native]] (2), [[Fetch]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[React.js|React]] (1)
> **Cross-References:** next video (2), go back to (1), previous video (1), in the next (1)
> **Definitions:** is called (2), is a  (1), basically means (1)
> **UI Navigation:** select the (1), open the (1)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### CSS details
> [LinkedIn Learning](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=0)** - [Instructor] So let's continue working on the detailed view and we're going to continue the CSS in this video.
>
> **[0:06](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=6)** So what I'm going to do is keep working on the CSS and basically all these styles are going to be applied once we start working on our scroll view and Touchables and so on, so forth.
>
> **[0:18](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=18)** So let's go ahead and we're going to get started with title2 and most of these are going to be very similar.
>
> **[0:28](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=28)** So let's go ahead and copy and paste.
>
> **[0:31](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=31)** And the only thing is going to be different is the top.
>
> **[0:35](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=35)** Okay, let's keep going.
>
> **[0:37](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=37)** Next one is going to be an image and the height of the image is going to be 100.
>
> **[0:45](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=45)** And then we're going to have background color that will be transparent.
>
> **[0:52](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=52)** The next one is going to be closeIcon and the position is going to be absolute.
>
> **[1:03](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=63)** Next one is going to be top 10, right 5.
>
> **[1:09](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=69)** And again, these are all positional elements and also colors.
>
> **[1:14](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=74)** So if there's anything that you want to change from what I'm doing here, please feel free to do so.
>
> **[1:20](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=80)** These are styles, so these are not going to have a huge impact on the application except the actual look.
>
> **[1:26](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=86)** So let's go ahead and continue.
>
> **[1:28](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=88)** The icon is going to be position absolute like so.
>
> **[1:33](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=93)** And then top 15 left 0, color is going to be white.
>
> **[1:45](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=105)** Background color is going to be an RGBA value, which takes four parameters, 255, 255, 255 and 0.
>
> **[1:58](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=118)** And the reason why I'm doing this, I could have just simply done the actual name of the color, I wanted to show you a different alternative for the colors.
>
> **[2:07](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=127)** Okay, the next one is the text area.
>
> **[2:13](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=133)** And the text area will have a flex direction of row.
>
> **[2:20](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=140)** Then we're going to have padding left 20, padding top, we're going to have 5.
>
> **[2:32](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=152)** And the reason why I said this is because the next one has a 10.
>
> **[2:37](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=157)** So what I'm going to do is copy this very similar code and I'm going to call this final text.
>
> **[2:48](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=168)** Flex direction is row padding left 20 and padding top is going to be 10 instead of five.
>
> **[2:56](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=176)** Text icons plural, by the way, it's going to have a specific color of #26a.
>
> **[3:05](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=185)** Again, I'm showing you another option for colors.
>
> **[3:09](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=189)** This is the X value.
>
> **[3:11](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=191)** Then we're going to have action area.
>
> **[3:14](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=194)** So basically just to understand what's happening here, we're creating a style sheet with this function here Create.
>
> **[3:23](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=203)** And this style sheet is going to be applied whenever we add the styles inside of our views.
>
> **[3:31](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=211)** In the next following videos, we're going to work on adding the components or the views inside of that component and add the actual styles to it.
>
> **[3:41](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=221)** So there's a lot of styles that we need to add because this is a big component with a lot of stuff in it.
>
> **[3:48](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=228)** So action area, padding top takes 10, flex direction is row as well.
>
> **[4:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=240)** Justify content will be space around.
>
> **[4:06](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=246)** And once you see how this component looks, you can come in and change the styles if there's anything that you don't like.
>
> **[4:16](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=256)** But these are styles that I chose based on how it feels when you open up the application.
>
> **[4:23](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=263)** And again, you can choose your own edit icon has its own styles, basically just color #26, a6e4.
>
> **[4:39](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=279)** Sections, we have a few things.
>
> **[4:43](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=283)** So what I'm going to do is copy from this one here 'cause there's a lot of stuff that's coming from the same.
>
> **[4:50](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=290)** And then paste it.
>
> **[4:53](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=293)** So this is the one that I've copied here.
>
> **[4:56](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=296)** Text area and pasted here.
>
> **[4:59](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=299)** So sections, the flex direction is row, the padding left is 10, the padding top is 10 as well.
>
> **[5:07](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=307)** And then we only have to add a width of 100.
>
> **[5:14](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=314)** We have a few things left and then we're done for the CSS and the style sheet.
>
> **[5:21](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=321)** The delete icon's going to have a color of, again, we're using a hex value.
>
> **[5:29](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=329)** So #e9a 69a Now I'm going to paste again the way I've done for the sections.
>
> **[5:43](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=343)** Make sure we add the class first, edit delete area, and then paste.
>
> **[5:52](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=352)** So the first one is the same.
>
> **[5:53](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=353)** Padding left, we don't need it.
>
> **[5:56](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=356)** Padding bottom is going to be 10.
>
> **[6:03](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=363)** And then I need justify content is space around.
>
> **[6:10](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=370)** Align item is center.
>
> **[6:16](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=376)** Background color, we're going to go for an RGBA value again, rgba.
>
> **[6:25](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=385)** And this one is 211, 211, 211, and 0.3 for the alpha.
>
> **[6:34](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=394)** Then margin bottom 10, margin top, 20.
>
> **[6:45](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=405)** And we have one last class to create action image width of 100 and height of 100 as well.
>
> **[6:59](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=419)** Perfect. So now we have all of our styles created.
>
> **[7:02](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=422)** We're ready to get rolling with the actual component itself.
>
> **[7:06](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/css-details?u=76281980&t=426)** Let's save this and move on to the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (7), css (3), application (2)
> **Env Vars:** css (3), rgba (2)
> **Cross-References:** in the next (1), next video (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** closeicon (1)
> **Versions:** 0.3 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Coding the scroll on the detail view
> [LinkedIn Learning](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=0)** - [Instructor] Okay, so now we'll continue working on the detail view.
>
> **[0:04](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=4)** One of the things that we're going to do first is add an action here.
>
> **[0:08](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=8)** So basically this particular action update test will allow us to update the contact whenever we want to.
>
> **[0:17](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=17)** So basically when we click on any of the contacts, we are going to go into the screen where we can update the view itself.
>
> **[0:26](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=26)** So let's go ahead update contact this.props.person.
>
> **[0:33](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=33)** So we're passing the actual person in here.
>
> **[0:37](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=37)** So we're going to create this update contact action when we get to the actual CRUD section in the next chapter.
>
> **[0:45](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=45)** So what we're going to do is pass this particular person into that action or function and then go to the screen where we update the contact with all the information from that particular person.
>
> **[0:58](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=58)** Okay, so now we're going to go inside of our view here.
>
> **[1:03](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=63)** So I'm going to use the view here and get started on creating our full view.
>
> **[1:07](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=67)** The first thing I'm going to do here is pass a style.
>
> **[1:10](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=70)** So we have a style that's called container, and we're going to use that.
>
> **[1:18](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=78)** And then inside of that style is where we're going to have our scroll view.
>
> **[1:23](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=83)** And what I want to also add in here as a prop is show vertical scroll indicator as false.
>
> **[1:34](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=94)** So basically we don't want to have the scroll thingy on the side of that particular scroll view.
>
> **[1:40](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=100)** The first thing we're going to do after that is add an image.
>
> **[1:45](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=105)** And that image needs a source, right?
>
> **[1:48](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=108)** And that source requires a particular image.
>
> **[1:52](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=112)** And that image is one of the images that we put inside of the image folder.
>
> **[1:57](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=117)** And this one is the background.
>
> **[2:01](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=121)** And then we're going to add style to that image.
>
> **[2:06](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=126)** And it's going to come from styles.image, which was the one that we created in the last video.
>
> **[2:13](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=133)** Then this is where we're going to start using the icons.
>
> **[2:17](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=137)** So this one is EvilIcon, and it has a name as one of the props that it takes.
>
> **[2:25](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=145)** And we're going to pass user, it needs a size too.
>
> **[2:32](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=152)** So for the size, we're going to do 100.
>
> **[2:35](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=155)** And finally we're going to pass styles.
>
> **[2:39](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=159)** And we're going to use Styles.Icon like so.
>
> **[2:44](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=164)** What I'm going to do next is basically copy this and paste it 'cause we're going to have another icon, but this time the icon's going to be simple icon, and the name of that icon is close.
>
> **[2:59](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=179)** We're going to use it as a 30 for the style and do close icon for the styles.
>
> **[3:09](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=189)** Again, if you want to know what we've done for that one, you can check.
>
> **[3:13](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=193)** Close Icon is here, and these are the styles for that particular icon.
>
> **[3:19](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=199)** So that's what we worked on on the last video, and now we're going to add all these components and implement all the styles that we have for each one of them.
>
> **[3:29](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=209)** Okay, oh, one thing that we forgot to put in here is onPress, something's going to happen.
>
> **[3:37](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=217)** And onPress we're going to use one of the actions.
>
> **[3:40](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=220)** And that action is this.prop.noneSelected which we created.
>
> **[3:50](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=230)** So this way when we press this close icon, it's going to send an action to Redux basically saying that, noneSelected, and this is how we're going to change the view from detail view to the list.
>
> **[4:05](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=245)** Okay, so then we're going to do a text component, which will have a style.
>
> **[4:13](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=253)** And this one is going to be styles.title1.
>
> **[4:19](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=259)** And what we're going to pass here is this.props.person.firstName.
>
> **[4:30](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=270)** And also we're going to repeat this.
>
> **[4:32](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=272)** So if you want, you can quickly copy, make sure you have a space, and do the last name here.
>
> **[4:39](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=279)** So first name, last name is going to be here like so, okay?
>
> **[4:45](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=285)** Perfect, now we can copy this if we want, or you can simply type what is going to happen next.
>
> **[4:54](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=294)** And for the style, we're going to use style.title2.
>
> **[5:02](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=302)** Instead of doing the name, we're going to do this.props.person.company, like so.
>
> **[5:12](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=312)** Okay, now we're going to do another view right below here that will apply styles to it.
>
> **[5:25](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=325)** And this time it's going to be styles.text area.
>
> **[5:30](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=330)** And what we're going to do next is basically add a whole bunch of things that are all going to be the same.
>
> **[5:37](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=337)** So we can redo this section, copy and paste, and just change the name or something else.
>
> **[5:44](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=344)** So we're going to do the phone first.
>
> **[5:46](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=346)** So let's go ahead and do that.
>
> **[5:47](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=347)** So first we're going to have material icon, and if you want again to copy any of these lines, and paste it here like so.
>
> **[6:01](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=361)** And then the name is going to be phone.
>
> **[6:05](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=365)** The size is going to be 40.
>
> **[6:07](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=367)** And then change this to text icons, like so.
>
> **[6:13](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=373)** Then what we're going to do is do a text, so you can copy this one if you want.
>
> **[6:19](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=379)** Paste it here.
>
> **[6:22](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=382)** The style is going to be final text like so.
>
> **[6:28](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=388)** And then this.props.person.phone is going to be what goes in here.
>
> **[6:36](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=396)** Now everything else is going to be very similar to this and not a whole lot of change.
>
> **[6:42](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=402)** So let's go and copy this here and paste it.
>
> **[6:48](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=408)** And then what we're going to change on this one is instead of phone, it's going to say email here, text icons, it's going to be the same, final text is going to be the same.
>
> **[7:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=420)** And then all we change is email here.
>
> **[7:03](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=423)** So you can see what we're going to do a couple of times here.
>
> **[7:05](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=425)** It's going to be very simple, and it's going to go quickly.
>
> **[7:10](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=430)** So we can paste again.
>
> **[7:12](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=432)** And instead of email, we're going to do assignment.
>
> **[7:17](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=437)** And here it's going to be project.
>
> **[7:20](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=440)** So basically what we're doing is adding all the different elements that are part of our person.
>
> **[7:28](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=448)** So if you look back, and let's go into the reducers.
>
> **[7:33](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=453)** If you look back here, our initial state has all these things here.
>
> **[7:38](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=458)** First name, last name, phone, email, company, project, notes.
>
> **[7:41](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=461)** All of these are going to be displayed on the detail view.
>
> **[7:44](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=464)** So this is where, and I'm going to close the explorer.
>
> **[7:47](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=467)** This is where we're repeating a lot of these views with the different things here.
>
> **[7:53](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=473)** So in case of this one, it's project, and icon is assignment.
>
> **[7:57](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=477)** So we're going to do this again.
>
> **[7:59](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=479)** And on this one we're going to use the mode edit as the icon.
>
> **[8:05](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=485)** And for the actual prop itself, what we're going to do is notes like so.
>
> **[8:11](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/coding-the-scroll-on-the-detail-view?u=76281980&t=491)** Okay, so now after we're done with this, I would recommend you save, and we'll keep working on this particular component in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (5)
> **Code Identifiers:** onpress (2), noneselected (2), firstname (1)
> **Cross-References:** in the next (2), in the last (1)
> **UI Navigation:** click on (1), go to (1)
> **CLI Commands:** make (1)
> **Env Vars:** crud (1)
> **Analogies:** similar to (1)
> **Prerequisites:** make sure you have (1)

#### Finalize detail view
> [LinkedIn Learning](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=0)** - [Instructor] Okay, so let's continue working on the detail view.
>
> **[0:03](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=3)** We still have a lot of code to write, so let's go ahead and get started.
>
> **[0:07](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=7)** The next thing that we need to do is a view.
>
> **[0:10](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=10)** So let's go ahead and create a view.
>
> **[0:12](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=12)** And this view is going to have a style of styles dot edit, delete area.
>
> **[0:19](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=19)** And inside of that view, basically this area is going to be where we can delete or update specific items.
>
> **[0:28](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=28)** So what we need at this point is to use the touchable opacity button, and it's going to have the styles apply to it.
>
> **[0:40](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=40)** Sections.
>
> **[0:42](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=42)** And let's close that out.
>
> **[0:44](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=44)** But inside of the touchable opacity, there are a few things that we need to do, and we're going to need to do an on press.
>
> **[0:56](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=56)** And that on press is going to create the update test.
>
> **[1:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=60)** This is where we're going to leverage the function that we just created above.
>
> **[1:04](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=64)** So let's go ahead and do this, and we're going to return this dot update test.
>
> **[1:14](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=74)** So basically when we touch that specific area, which is here, whatever is inside of this view is going to be touchable and will basically call this function here.
>
> **[1:30](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=90)** So let's go ahead and do that.
>
> **[1:32](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=92)** So what we're going to do is leverage against some of these things here.
>
> **[1:37](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=97)** So the icon, and the text, and we're going to put it inside of the touchable opacity.
>
> **[1:43](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=103)** So I'm going to do this and do this too.
>
> **[1:48](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=108)** And the specific material icon that we're going to use is the auto renew.
>
> **[1:56](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=116)** The size is going to be 40, and we're going to call the edit icon like so.
>
> **[2:05](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=125)** And then for the text itself, we're going to do final text again.
>
> **[2:10](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=130)** And instead of passing a value, we're going to type the name edit.
>
> **[2:16](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=136)** And again, we're going to redo all this code all over again for the delete function.
>
> **[2:25](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=145)** So copy all this, paste it all again, and the styles are going to be the same.
>
> **[2:33](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=153)** And for this one, instead of using this update test, I'm going to go ahead and do props dot delete contact, which we'll pass.
>
> **[2:45](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=165)** And inside of that prop, we're going to pass this dot prop dot person, dot underscore ID.
>
> **[2:55](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=175)** And let me just finish the button.
>
> **[2:57](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=177)** Delete forever is the name of the icon.
>
> **[3:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=180)** We're going to still do 40, edit icon is the same, and then for the style, instead of edit, we're going to type delete.
>
> **[3:09](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=189)** So this section here, this is going to be a section where you can either edit the specific contact or delete the contact.
>
> **[3:18](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=198)** So you have all the details of the contact above.
>
> **[3:20](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=200)** And then here you have two buttons that allow you to either edit the contact or delete the contact.
>
> **[3:26](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=206)** And we're going to put the function delete contact, and the function update contact, the one that we use here inside of our CRD videos later on in that chapter.
>
> **[3:40](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=220)** So just FYI.
>
> **[3:43](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=223)** Okay, so now let's continue.
>
> **[3:45](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=225)** We're going to create another view.
>
> **[3:48](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=228)** And style for this one is going to be actions area.
>
> **[3:54](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=234)** And inside of it we're going to have also a touchable opacity.
>
> **[3:59](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=239)** And inside of this one, we're going to have an image.
>
> **[4:02](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=242)** And that image is going to have a source which require an image that we drop earlier.
>
> **[4:10](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=250)** So images, and then the specific image is called dot png.
>
> **[4:18](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=258)** And then for the style, we're going to apply action image.
>
> **[4:24](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=264)** And this is why it takes a lot of videos to get through that specific detail view component, because there's so much happening on that particular component.
>
> **[4:33](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=273)** So for example, we have the details for the contact, and then we have actions that we can click on.
>
> **[4:40](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=280)** It's important to take the time to do it properly.
>
> **[4:43](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=283)** Okay, so let's go and copy and paste this again.
>
> **[4:48](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=288)** And on this one, the image that we're calling is going to be email.
>
> **[4:53](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=293)** So you're starting to see what's happening here.
>
> **[4:55](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=295)** So we have three touchable opacity.
>
> **[4:58](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=298)** We could have added a non-press or an action for this, but it's a bit beyond, I guess, the scope of this course.
>
> **[5:05](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=305)** It's basically the same thing as these particular functions that we're pressing here.
>
> **[5:11](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=311)** These are important because we're actually updating the contact, we're deleting the contact.
>
> **[5:16](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=316)** But if you want to call email or what's going to be the next one, SMS, the contact, these are functions that are beyond what we're teaching here.
>
> **[5:26](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=326)** So you can always figure out what these are and how you can call into specific elements inside of the phone to call, email, and so on, so forth.
>
> **[5:36](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=336)** But this is not what we're teaching here.
>
> **[5:39](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=339)** I just wanted to add the image, but we're not going to do the actual functions around these buttons.
>
> **[5:46](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=346)** Okay?
>
> **[5:47](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=347)** So we're doing it one more time and this one is SMS.
>
> **[5:51](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=351)** And it's the same style, same everything.
>
> **[5:55](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=355)** And then what we need to do is one last view.
>
> **[5:58](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=358)** So what we're going to do is get outside of that view, right here, just before the scroll view, and create one last view with style again.
>
> **[6:11](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=371)** Styles dot action area.
>
> **[6:16](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=376)** And these are the texts that are going to go below the images, FYI.
>
> **[6:21](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=381)** So we're going to do call, and repeat, and copy and paste for these.
>
> **[6:31](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=391)** Three times.
>
> **[6:32](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=392)** One is email and one is SMS.
>
> **[6:38](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=398)** Okay, so we are officially done with the actual component side of things.
>
> **[6:45](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=405)** Now what we're going to do is basically connect redux to this particular component.
>
> **[6:51](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=411)** So the way to do this, again, we need to create a map, state to props, so we have access to this.
>
> **[7:02](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=422)** Passes the state.
>
> **[7:05](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=425)** And then we return for the props that we have inside of this particular component.
>
> **[7:12](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=432)** One the person selected.
>
> **[7:16](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=436)** And one quick note to update, state that update to update.
>
> **[7:24](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=444)** So these are two elements that will basically update the state with these elements here.
>
> **[7:29](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=449)** So two updates.
>
> **[7:30](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=450)** If we click on the edit button, that means that we're into an update state, and this will generate different screens and allow us to update the contact.
>
> **[7:43](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=463)** And finally what we're going to do is instead of doing the export default here, we're going to connect map state to props, and the actions to this particular component, which is detail view, like so.
>
> **[8:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=480)** Okay.
>
> **[8:01](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=481)** We are officially done with entering all the elements that we need inside of this particular view.
>
> **[8:09](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/finalize-detail-view?u=76281980&t=489)** Let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (2)
> **Env Vars:** sms (3), fyi (2), crd (1)
> **Definitions:** is a  (1), is called (1), means that (1)
> **UI Navigation:** click on (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 4. CRUD Operations

[↑ Back to Table of Contents](#table-of-contents)

#### Create a new add person form
> [LinkedIn Learning](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-a-new-add-person-form?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-a-new-add-person-form?u=76281980&t=0)** - [Instructor] In this chapter, we'll focus on adding all the proper CRUD operations with our actions, reducers, and then finalize them with the components, so let's get started, so what we're going to do first is go inside of our index here, and we're going to start adding a few actions, so what I'm going to do, right after the noneSelected and before the loadInitialContacts.
>
> **[0:24](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-a-new-add-person-form?u=76281980&t=24)** It doesn't really matter where in the file you put this, but for me, it's create and then load, and this is what I'm going to do, so first, we're going to create an action that's going to be called createNewContact, and these are going to take a few things, so let's go ahead and add the elements that we're going to need.
>
> **[0:47](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-a-new-add-person-form?u=76281980&t=47)** The first one is, obviously, we're going to need a firstName passed to create a new contact, lastName, and let me just close the Explorer so we have more screen estate.
>
> **[0:59](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-a-new-add-person-form?u=76281980&t=59)** Then we're going to pass the phone, the email, company, project, and then notes, and then, inside of this particular function or action, we're going to return, and we're going to pass dispatch 'cause we're going to need it.
>
> **[1:21](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-a-new-add-person-form?u=76281980&t=81)** We're going to return whatever is inside of that action or function, so there's a few things that are going to happen.
>
> **[1:31](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-a-new-add-person-form?u=76281980&t=91)** First thing we need to fetch, and the back end is, again, the 127.
>
> **[1:39](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-a-new-add-person-form?u=76281980&t=99)** You can also do a localhost if you want, 0.1.
>
> **[1:43](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-a-new-add-person-form?u=76281980&t=103)** It's the same.
>
> **[1:45](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-a-new-add-person-form?u=76281980&t=105)** Port 3000, and this is our API end, and what we're doing here is a POST method, so we need to add that, 'POST', and in the body of that POST, we're going to have whatever is returned here, so basically, this function will create a new contact, so we're fetching the back end with the method of POST, and then, in the body, we're going to pass whatever we got from the form inside of the add person, which we're going to work on in the next video, so let's go ahead and add all the things that we need.
>
> **[2:26](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-a-new-add-person-form?u=76281980&t=146)** Basically, you need to use this function here, so JSON.stringify, so it creates our JSON that we're going to need, and pass the firstName, and then, what I'm going to do, just to make this faster, I'm going to copy and paste lastName.
>
> **[2:54](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-a-new-add-person-form?u=76281980&t=174)** We're going to paste again, and what I'm going to do this time is just do option-click on both.
>
> **[2:59](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-a-new-add-person-form?u=76281980&t=179)** I could have done that on the last one too.
>
> **[3:01](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-a-new-add-person-form?u=76281980&t=181)** Do phone, paste again, option-click on the two, and then, here is going to be email, paste again, option-click, company, paste, option-click, project, and finally, we're going to do the same for notes.
>
> **[3:26](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-a-new-add-person-form?u=76281980&t=206)** Okay, once you have that, you want to make sure also you pass the headers in this particular call to your APIs, so the headers is 'Accept': 'application/json', 'Content-Type'.
>
> **[3:48](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-a-new-add-person-form?u=76281980&t=228)** If you're familiar with API calls, this is familiar territory for you.
>
> **[3:56](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-a-new-add-person-form?u=76281980&t=236)** Okay, so once we make the call, we pass the new item inside of our back end.
>
> **[4:04](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-a-new-add-person-form?u=76281980&t=244)** What we need to do, and we're going to use .then for that.
>
> **[4:11](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-a-new-add-person-form?u=76281980&t=251)** We're going to do a dispatch of our reducers, so basically, the dispatch is going to pass to our reducer this item here, where we're going to create a 'NEW_CONTACT', and we're going to create the 'NEW_CONTACT' reducer shortly.
>
> **[4:29](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-a-new-add-person-form?u=76281980&t=269)** Then we need to do something else, so we're also going to need to dispatch loadInitialContacts right after that, and the reason why we're doing this is to make sure that our contacts, once we add a new contacts, we are calling onto the action that will loadInitialContacts and therefore, make sure that we update our list of contacts inside of our application, and finally, if there's any error, catch the error and put it into the console what is this error.
>
> **[5:06](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-a-new-add-person-form?u=76281980&t=306)** All right, so now we create a new action.
>
> **[5:09](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-a-new-add-person-form?u=76281980&t=309)** Save this to make sure.
>
> **[5:10](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-a-new-add-person-form?u=76281980&t=310)** Let's go ahead and go into our reducers and work on our reducer.
>
> **[5:15](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-a-new-add-person-form?u=76281980&t=315)** I'm still going to close my Explorer just to have more screen estate, and what I'm going to do, again, here, right after noneSelected, I'm going to build the next case.
>
> **[5:29](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-a-new-add-person-form?u=76281980&t=329)** The first case is a form update that we're going to need and use in a future video when we update a contact, but I'm still going to do it now 'cause it's part of creating and updating a new contact, so basically, we're going to reproduce the state and then update the action.payload.prop with the action.payload.value, and this is basically updating, inside of our state, these elements here.
>
> **[6:04](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-a-new-add-person-form?u=76281980&t=364)** As we work on the form by adding a firstName, lastName, and so on and so forth, this particular reducer here is going to change the values in here with what the form is basically adding, and then we're going to use that form to post it to the API at the end of that call, so basically, do the action that we have just created here.
>
> **[6:29](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-a-new-add-person-form?u=76281980&t=389)** Create a new contact.
>
> **[6:30](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-a-new-add-person-form?u=76281980&t=390)** We're going to pass all the information that we added to the form, so that's why this form is important here, 'kay?
>
> **[6:38](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-a-new-add-person-form?u=76281980&t=398)** So the next one that we need is a case where we create the 'NEW_CONTACT', the one that we had inside of our createNewContact action, and this will return the state with all the elements that we had on the other side, so if you want to avoid typing a lot of things, what we could do is copy this, paste it here, simply remove this on all of them, like so, and sometimes, if I'm doing things a bit too fast, you can pause the video, take a look at what I'm doing, and then, what I'm going to do here
>
> **[7:28](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-a-new-add-person-form?u=76281980&t=448)** is option-click on all these, like so, and replace them with simply this, and then delete, like that, 'kay?
>
> **[7:41](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-a-new-add-person-form?u=76281980&t=461)** Once we have that case, we also need to have a case where we add a new person, so let's go ahead and do that.
>
> **[7:48](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-a-new-add-person-form?u=76281980&t=468)** These are all the reducers that are going to be involved in adding a new person, adding a contact, and this is why we're creating all of them now.
>
> **[7:58](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-a-new-add-person-form?u=76281980&t=478)** Returns the state and then returns all the action.newPerson.
>
> **[8:08](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-a-new-add-person-form?u=76281980&t=488)** Once we do the form on the add new person component, all of these specific reducers here are going to make a lot more sense, so just save it for now, and let's move on to the form in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (4), api (3), [[JSON]] (3), application (2), [[Fetch]] (1)
> **Code Identifiers:** loadinitialcontacts (3), firstname (3), lastname (3), noneselected (2), createnewcontact (2)
> **Env Vars:** post (4), api (3), new_contact (3), json (2), crud (1)
> **CLI Commands:** make (7)
> **UI Navigation:** click on (3)
> **Definitions:** is a  (3)
> **Cross-References:** in the next (2)
> **Ports:** port 3000 (1)

#### Functions for add person action
> [LinkedIn Learning](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=0)** - [Instructor] Okay, so now let's work on the add new person component.
>
> **[0:03](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=3)** So that's all we have right now, so we have a lot of code to write to make this work.
>
> **[0:08](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=8)** So the first thing I'm going to do is start by making sure that I have everything I need in my imports.
>
> **[0:14](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=14)** I need ScrollView here and I also need Text, so let's go ahead and add those.
>
> **[0:22](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=22)** Then what I'm going to need is a few things.
>
> **[0:24](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=24)** So I'm going to need to import connect from, not http2, but from react-redux like so.
>
> **[0:36](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=36)** I'm also going to need to import Button and a TextInput from @react-native-material/core like so.
>
> **[0:54](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=54)** And finally I'm going to need to import all of our actions because we're going to need to use a few of 'em here, and that's the easier way, from '../actions'; like so.
>
> **[1:09](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=69)** Now the next thing we're going to do is create our style sheets.
>
> **[1:11](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=71)** So like we've done in the past, create styles = StyleSheet.create.
>
> **[1:21](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=81)** And then we're going to add a few styles here.
>
> **[1:24](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=84)** One of them is the form.
>
> **[1:27](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=87)** The second one is fieldStyles.
>
> **[1:35](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=95)** And then finally, addButton.
>
> **[1:40](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=100)** All right, so the style that we're going to insert here, one is flex: 1, paddingTop is going to be 50, paddingLeft is going to be 10.
>
> **[1:58](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=118)** And again, as we run this application shortly, you're going to see the styles that then you can go back here and change them to your liking.
>
> **[2:06](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=126)** These are basically my personal preferences.
>
> **[2:10](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=130)** paddingRight.
>
> **[2:14](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=134)** And this one was left and not right.
>
> **[2:18](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=138)** So paddingRight, 20 as well.
>
> **[2:20](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=140)** And then, justifyContent: 'space-between', like so.
>
> **[2:28](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=148)** Then for this one, we're going to have a height of 70.
>
> **[2:34](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=154)** color, we're going to add a color here.
>
> **[2:37](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=157)** So it's going to be #f47100.
>
> **[2:43](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=163)** And then we're going to go ahead and go into the addButton.
>
> **[2:47](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=167)** And this is going to be a simple style of marginTop at 20.
>
> **[2:55](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=175)** Okay, so inside of our Component, our class Component here, we're going to add first a function.
>
> **[3:03](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=183)** And this function will allow us to add a new person inside of our database.
>
> **[3:07](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=187)** So onAddPress, and this is how we're going to call it, what we're going to do is create a variable first before passing anything with all the elements that we have in our actions.
>
> **[3:22](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=202)** So if you want to eliminate some of the code, we should have it somewhere here like so.
>
> **[3:28](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=208)** So what I'm going to do is simply copy and paste these guys here.
>
> **[3:32](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=212)** So this is from the actions, and the action that we just created a video ago, createNewContact, I basically copied these guys here and I'm going to paste them here like so.
>
> **[3:47](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=227)** And then what I'm going to do is create this.props with these.
>
> **[3:55](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=235)** And let me just close the Explorer to get a little bit more space.
>
> **[4:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=240)** Then this.props, what we're going to do is leverage the action that we just created, createNewContact, right?
>
> **[4:12](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=252)** And then again, pass all the elements that we just created as a variable.
>
> **[4:18](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=258)** So these guys, this.props.
>
> **[4:21](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=261)** And then finally, we're going to use our navigation to get back to the People, navigate to the People screen like so.
>
> **[4:35](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=275)** So if I explain this very shortly, once we AddPress, we're going to create all these elements here as a variable and pass the this.props from it.
>
> **[4:48](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=288)** So basically all of these are going to be available then to be passed to our new action here and create a new contact with these elements.
>
> **[4:57](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=297)** And then at the end, we're going to navigate back to the People screen.
>
> **[5:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=300)** This is how it works in here.
>
> **[5:03](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=303)** All right, so now we're ready to start working on our stuff here.
>
> **[5:07](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=307)** So the first thing we're going to do is create a ScrollView.
>
> **[5:10](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=310)** So let's go ahead and do this, ScrollView.
>
> **[5:15](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=315)** And inside the ScrollView, we're going to have, again, what we did the last time, showsVerticalScrollingIndicator.
>
> **[5:24](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=324)** We're going to still say false for that.
>
> **[5:28](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=328)** And then inside the ScrollView, we're going to create a new View that will have the styles for the form, so style={styles.form} like so.
>
> **[5:41](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=341)** And then inside we're going to create the Text inputs.
>
> **[5:45](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=345)** So the first thing, we're going to create a Text input, and this one will add a new contact.
>
> **[5:51](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=351)** So we're going to have a text at the top of our form that says Add a new contact.
>
> **[5:56](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=356)** And then we're going to have all the Text inputs or the forms.
>
> **[6:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=360)** So we're going to create one, then copy it and just paste it again for all the other elements that we need to add inside of our form.
>
> **[6:07](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=367)** So therefore, these guys here.
>
> **[6:10](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=370)** All right, so let's get started.
>
> **[6:12](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=372)** So TextInput, and let me just close it out.
>
> **[6:20](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=380)** And then inside of it, we're going to have a label, right?
>
> **[6:24](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=384)** And the label is going to be First name for this one.
>
> **[6:28](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=388)** Then we're going to insert styles for this guy, the styles that we've defined, so styles.fieldStyles, right?
>
> **[6:39](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=399)** Then we're going to have a value, so this.props.firstName like so.
>
> **[6:49](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=409)** Then onChangeText, so whenever we add text, we're going to update the value of our prop, which basically then will be passed into our action here.
>
> **[7:01](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=421)** So once we have some value inside of that prop firstName, then once we click or tap onAddPress, we're going to pass all the values that we've created inside of our form, then pass it into the action and so on and so forth.
>
> **[7:18](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=438)** Okay, so let's finish this, this.props.formUpdate with the prop: 'firstName', value.
>
> **[7:33](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=453)** Perfect.
>
> **[7:34](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=454)** And FYI, as you type this, if you have any typos or anything that doesn't work or the application doesn't work out, once we start running it, then what you could do is look into the exercise files to find my code and see what I've done.
>
> **[7:51](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=471)** Okay, so now we need to repeat the same thing for last name and all the elements that we have in our form.
>
> **[7:57](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=477)** So let's continue, TextInput.
>
> **[7:58](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=478)** This is going to be Last name.
>
> **[8:02](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=482)** And then I change this here.
>
> **[8:05](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=485)** And Option + Click here and change this to lastName.
>
> **[8:12](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=492)** Do this again.
>
> **[8:13](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=493)** Now this is Phone number.
>
> **[8:18](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=498)** And then click here, and then Option + Click here, and what you do is change this to phone.
>
> **[8:28](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=508)** And continue down the list.
>
> **[8:30](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=510)** If you want to challenge yourself, just pause the video and basically do the rest of the form on your own.
>
> **[8:36](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=516)** See if you can get it yourself.
>
> **[8:38](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=518)** All right, this time is going to be Email.
>
> **[8:42](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=522)** Then same thing here, same thing here, email.
>
> **[8:48](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=528)** Paste, and then if you want, as a reminder, take a look at here.
>
> **[8:52](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=532)** firstName, lastName, phone, email, then it's company, projects, and notes, so let's continue,
>
> **[9:06](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=546)** company.
>
> **[9:09](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=549)** Then let's do this for the project.
>
> **[9:22](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=562)** And then finally, Notes.
>
> **[9:33](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=573)** Okay, so now that we have all this, the next step is to add the button that will call the actual add onAddPress function that we have here, right here.
>
> **[9:48](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=588)** So to call this, we need the button.
>
> **[9:49](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=589)** So let's go ahead and create the button.
>
> **[9:51](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=591)** So the first thing we're going to do for this particular area, we're going to again insert some styles in a View, so style, and this one is going to be styles.addButton like so, boom.
>
> **[10:06](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=606)** And then add a button right here.
>
> **[10:09](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=609)** So the Button will have a title of Add, color of #4db6ac.
>
> **[10:22](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=622)** And then onPress, we're going to basically use this.onAddPress.
>
> **[10:29](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=629)** Now let me just go here.
>
> **[10:31](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=631)** And then we're going to make sure that we bind this particular function to this class here.
>
> **[10:41](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=641)** Okay, so finally, before we actually end this particular video, we need to connect, again, Redux.
>
> **[10:50](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=650)** So we're going to do, as usual, mapStateToProps, pass the state, and then we're going to basically create all of the stuff that we need in here.
>
> **[11:06](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=666)** So what I'm going to do is simply do a copy of all this here, paste it down right here like so.
>
> **[11:17](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=677)** And then pass it to state as opposed to props like we did up there.
>
> **[11:22](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=682)** And then return these guys.
>
> **[11:26](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=686)** And just remove the constant here for the second one, like so.
>
> **[11:33](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=693)** And finally, here on the export, we need to also connect.
>
> **[11:40](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=700)** So let's do this, connect(mapStateToProps) the actions, and this component.
>
> **[11:53](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=713)** Okay, so that was a lot of code.
>
> **[11:55](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=715)** So if you got the gist of all this, we have a form to which have a prop of all these elements here.
>
> **[12:03](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=723)** So this form has each prop that we need.
>
> **[12:06](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=726)** Once we hit the button here, it's going to call this onAddPress function that is right up here and pass all the elements that we have in our form, map it to the props, and then send it to the action createNewContact, create a new contact, and then navigate back to People.
>
> **[12:26](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=746)** So in short, this will create a new contact with the action that we set in the previous video and then call the reducer to change the state to its proper state.
>
> **[12:35](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/functions-for-add-person-action?u=76281980&t=755)** All right, so let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (2), next (2), application (2), database (1), [[Forms]] (1)
> **Code Identifiers:** onaddpress (5), firstname (4), addbutton (3), createnewcontact (3), fieldstyles (2)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** fyi (1)
> **Cross-References:** previous video (1)
> **UI Navigation:** navigate to (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)

#### Update person Redux reducer
> [LinkedIn Learning](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=0)** - [Instructor] In this video, we're going to add all the code that we need for Redux for the update person component.
>
> **[0:06](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=6)** So what we're going to need to do first is go inside of the actions here and then we're going to add a few actions based on what we need for updating a person.
>
> **[0:17](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=17)** So what I'm going to do is first go below the create new contact right here and go ahead and create the action, update, contact.
>
> **[0:31](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=31)** So what we're going to pass is a person, and then what we're going to do is return this action, which is going to be called update contact like so, and the payload is going to be the person.
>
> **[0:51](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=51)** Perfect, now we also need to create an action for saving the contact.
>
> **[0:57](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=57)** So basically whenever we update a contact, we need to save it as well.
>
> **[1:03](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=63)** So what we're going to pass in here is going to be similar to what we're passing when we're creating a new contact.
>
> **[1:09](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=69)** So let's go ahead and copy some of the code that we have right here.
>
> **[1:13](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=73)** So first thing I'm going to copy is all this here and bring it down here and update, save contact.
>
> **[1:25](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=85)** But I'm going to also add the ID.
>
> **[1:28](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=88)** So underscore, ID, the reason why we're passing ID is to make sure we identify which contact we're going to save or update.
>
> **[1:38](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=98)** All right, so once we have that, a lot of the same code will apply from the one here.
>
> **[1:42](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=102)** So what I'm going to do is copy all this, all the way down to here to line 41, copy that, go inside of my save contact and paste it.
>
> **[1:58](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=118)** And then we're just going to change what we need to change.
>
> **[2:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=120)** So the first thing we need to do is change the endpoint we're passing to.
>
> **[2:05](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=125)** In order to update the contact, we need to pass the ID in here.
>
> **[2:10](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=130)** So underscore, ID, like so, it's not a post, but a put method.
>
> **[2:17](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=137)** And then everything else is going to be remotely the same.
>
> **[2:20](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=140)** So all of these elements here are going to be the same.
>
> **[2:24](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=144)** If you look at all the headers are going to be the same, the dispatch are going to be remotely the same except here.
>
> **[2:34](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=154)** So the type is not new contact, but save contact, capital letters.
>
> **[2:42](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=162)** And then we're also going to load initial contacts once more just to make sure that we have all of our contacts listed inside of our view.
>
> **[2:52](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=172)** Alright, so this is good for the actions.
>
> **[2:55](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=175)** Now what we need to do is go inside the reducers and open that file.
>
> **[3:01](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=181)** I'm going to close this and then what I'm going to do somewhere around add person, I'm going to create two cases.
>
> **[3:09](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=189)** So one is going to be the update underscore contact.
>
> **[3:16](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=196)** And before this becomes a problem, let's do a lowercase on this one.
>
> **[3:22](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=202)** And then I'm going to return and let's see if I have something that has all the elements that I need.
>
> **[3:29](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=209)** I have some of it here.
>
> **[3:31](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=211)** So what I'm going to do is copy and paste it in the update contact.
>
> **[3:37](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=217)** Before I return any of this, I need to return the state clearly.
>
> **[3:42](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=222)** I'm also going to add another one to update to true.
>
> **[3:49](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=229)** And then in all these elements here, and I'm going to also add ID before I forget it, I'm going to change some of these things.
>
> **[3:59](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=239)** Okay, so instead of having nothing here, what I'm going to do is on all these guys, I'm going to option click to select all these guys.
>
> **[4:11](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=251)** 'Cause there's going to be a lot of repetitive codes.
>
> **[4:13](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=253)** So I don't like to write things twice if I can shorten it.
>
> **[4:18](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=258)** So this is going to become action, dot payload.
>
> **[4:23](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=263)** And let's just do the first one.
>
> **[4:25](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=265)** So this one is going to be first name, second one's going to be last name, phone, email, company, project, and finally notes.
>
> **[4:41](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=281)** And I forgot to do this one here, that's okay.
>
> **[4:44](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=284)** We'll just copy and paste right here.
>
> **[4:47](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=287)** And then change this to underscore ID.
>
> **[4:53](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=293)** Okay, so update contact is done, so let's save it.
>
> **[4:57](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=297)** Let's create the next case.
>
> **[4:59](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=299)** Case, which is save contact, right?
>
> **[5:04](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=304)** And then on this one I'm going to return this date, make to update false this time, make also detailed view false.
>
> **[5:21](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=321)** And just to explain this, when we save the contact, we're updating these elements inside of the state.
>
> **[5:28](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=328)** To update means detail view, false.
>
> **[5:32](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=332)** That means we're going out of the detailed view.
>
> **[5:35](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=335)** If this was true, the detailed view would show right?
>
> **[5:39](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=339)** And then we're going to do all these guys.
>
> **[5:42](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=342)** Empty, so copy line 47 through 53, paste it here.
>
> **[5:50](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=350)** And then at the end we're also going to add underscore ID and comma, and that completes our safe contact.
>
> **[6:03](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=363)** One other thing I just want to make sure to check is that I have underscore ID here.
>
> **[6:09](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=369)** Yeah, I do, okay, good.
>
> **[6:11](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=371)** Okay, so now we've added all the actions and the reducers that we need for the update form view.
>
> **[6:18](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=378)** We're going to work next on the component itself.
>
> **[6:21](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-redux-reducer?u=76281980&t=381)** Let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (2)
> **CLI Commands:** make (5)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### Update person view
> [LinkedIn Learning](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-view?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-view?u=76281980&t=0)** - [Narrator] Okay, so now we're going to work on the UpdatePerson view and the component.
>
> **[0:05](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-view?u=76281980&t=5)** And the cool thing about this particular component is that we've written a lot of the code already on the AddPerson.
>
> **[0:12](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-view?u=76281980&t=12)** So what we're going to do is primarily copy all of the code from the AddPerson view, all of it like so, and then put it in the UpdatePerson and then change what we need to change.
>
> **[0:27](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-view?u=76281980&t=27)** Basically select all.
>
> **[0:29](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-view?u=76281980&t=29)** So I did Command A on Mac and Ctrl A on Windows, and then I'm going to paste it like so.
>
> **[0:38](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-view?u=76281980&t=38)** And then I'm going to make all the changes that I need to make.
>
> **[0:41](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-view?u=76281980&t=41)** So the first thing that I need to change is in here, the actual name of the class itself.
>
> **[0:47](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-view?u=76281980&t=47)** We're going to call this UpdatePerson and make sure that at the end, we change it accordingly here.
>
> **[0:58](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-view?u=76281980&t=58)** Perfect.
>
> **[1:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-view?u=76281980&t=60)** Now the second thing that we need to change is this one here.
>
> **[1:03](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-view?u=76281980&t=63)** The function is not on AddPress, but on UpdatePress.
>
> **[1:11](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-view?u=76281980&t=71)** And we're going to change it to where the button is too.
>
> **[1:19](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-view?u=76281980&t=79)** And if you want to make sure that you're writing the right thing here and not have to do any typos because the function's already created, you can simply do this .UpdatePerson and then .bind(this), like so.
>
> **[1:38](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-view?u=76281980&t=98)** Okay, now let me close this to have more screen estate.
>
> **[1:43](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-view?u=76281980&t=103)** All right, let's go back up and change a few things here.
>
> **[1:48](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-view?u=76281980&t=108)** Instead of CreateNewContact, we need to now not only pass the underscore ID on both here, let me just do option click underscore id.
>
> **[2:06](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-view?u=76281980&t=126)** I'm just going to remove the extra space here.
>
> **[2:09](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-view?u=76281980&t=129)** And then instead of CreateNewContact, it's SaveContact.
>
> **[2:19](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-view?u=76281980&t=139)** So save this and most of the rest is pretty much the same.
>
> **[2:23](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-view?u=76281980&t=143)** So if we look at it, we have our styles that we've created.
>
> **[2:27](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-view?u=76281980&t=147)** We have the function that we created for specifically updating a contact and we have our scroll view, which is pretty much the same as the other one.
>
> **[2:39](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-view?u=76281980&t=159)** Now here we have this.props/firstName.
>
> **[2:44](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-view?u=76281980&t=164)** And basically we have the values that would be passed directly from the id.
>
> **[2:50](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-view?u=76281980&t=170)** So you should have pretty much stuff showing up on the field here and then onPress, and then mapStateToProps.
>
> **[3:01](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-view?u=76281980&t=181)** The only thing that we need to add here is again, the id.
>
> **[3:04](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-view?u=76281980&t=184)** So I'm going to do option click on both and do underscore id.
>
> **[3:10](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-view?u=76281980&t=190)** So I have access to this and everything else is the same.
>
> **[3:13](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-view?u=76281980&t=193)** And then here, actions, everything seems to be working here.
>
> **[3:18](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-view?u=76281980&t=198)** So now you've completed adding a person, updating a person.
>
> **[3:23](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/update-person-view?u=76281980&t=203)** Now we're going to focus on finalizing listing people so we can actually see them and start running our application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (1), [[Representational State Transfer (REST)|Rest]] (1), application (1)
> **CLI Commands:** make (4)
> **Code Identifiers:** firstname (1), onpress (1), mapstatetoprops (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [narrator] (1)

#### Connect your list view to backend
> [LinkedIn Learning](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=0)** - [Instructor] Okay, so this is where we're going to connect all the pieces that we need so we can actually see the application running.
>
> **[0:07](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=7)** So as we update the code, we're going to keep an eye on our simulator, because this is going to work eventually.
>
> **[0:14](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=14)** Right now we have an error that I just noticed, Flatlist doesn't exist.
>
> **[0:19](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=19)** Clearly it doesn't, because FlatList takes a capital L.
>
> **[0:23](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=23)** So let's go ahead and fix that right away.
>
> **[0:26](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=26)** Right here, the component in question, I'm going to save that, and lo and behold, I actually have here a list that shows up.
>
> **[0:37](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=37)** The other thing I want to fix here is mapStateToProps, just to make sure we're spelling this right, like so, save that.
>
> **[0:47](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=47)** Perfect.
>
> **[0:48](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=48)** Now, if you see the screen and you don't see anything in here, it's normal.
>
> **[0:53](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=53)** It's because you don't have anything in your database yet.
>
> **[0:56](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=56)** So you have two choices.
>
> **[0:58](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=58)** Either you add it through this screen and we could do that.
>
> **[1:03](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=63)** So let's go Manny.
>
> **[1:05](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=65)** So there's a little issue here that we're going to fix, but if you want to dismiss that and go to People and see something, you can add it directly through the application that I call Postman.
>
> **[1:18](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=78)** So if you're familiar with Postman, what Postman does, it allows you to add through your backend specific things.
>
> **[1:26](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=86)** So contact, POST, if you remember correctly, we could do first name, last name, and so on and so forth.
>
> **[1:32](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=92)** So you can add a few things and then send it to your backend.
>
> **[1:36](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=96)** And it's going to add people.
>
> **[1:37](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=97)** So if you want to go ahead and do that, you can do that too, or add it through the form.
>
> **[1:41](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=101)** But clearly there is an issue with the app form, which we'll debug next.
>
> **[1:46](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=106)** So what I'm going to do first is finalize everything that I need.
>
> **[1:49](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=109)** So I did this here so I can close that.
>
> **[1:51](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=111)** And then I'm going to go in PeopleDetail and make a few changes here.
>
> **[1:57](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=117)** It's going to be very quick here.
>
> **[1:59](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=119)** So first thing I'm going to do is remove these guys here.
>
> **[2:02](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=122)** I don't need those.
>
> **[2:05](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=125)** Then I need to import a few things.
>
> **[2:07](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=127)** So I'm going to import { connect } from 'react-redux'.
>
> **[2:16](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=136)** We're going to import DetailView From './DetailView'.
>
> **[2:23](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=143)** We're going to import UpdatePerson from './UpdatePerson' here and import all the actions so we have access to all of them from '../actions'.
>
> **[2:41](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=161)** Perfect.
>
> **[2:42](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=162)** So now in the component itself, we're going to have first a function that will be renderDetails.
>
> **[2:52](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=172)** And basically this function will again check, like, what we've done in the past.
>
> **[2:57](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=177)** We're going to check if this.props.update, not .update, but .toUpdate.
>
> **[3:06](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=186)** If it's true, then return <UpdatePerson />.
>
> **[3:13](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=193)** So basically when this particular element, in our state or this particular prop, toUpdate is true, then return this view, else, return <DetailView />.
>
> **[3:29](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=209)** And then in our return statement here, all we have to do is use the function we just created, {this.renderDetails()}.
>
> **[3:44](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=224)** And this is a function.
>
> **[3:45](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=225)** Let's make sure we use this properly.
>
> **[3:48](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=228)** I just need to create the view first and just insert this inside the <View>.
>
> **[3:59](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=239)** Perfect.
>
> **[4:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=240)** And then what we're going to do is, again, map our props.
>
> **[4:04](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=244)** So mapStateToProps = state =>
>
> **[4:13](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=253)** and then return toUpdate: state.toUpdate.
>
> **[4:22](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=262)** And finally, again, like we've done in the past, connect(mapStateToProps, actions)
>
> **[4:35](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=275)** and then bind PeopleDetails to the export.
>
> **[4:40](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=280)** Okay, we're going to save this, and now we have all of our views.
>
> **[4:43](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=283)** Now what we're going to do is quickly debug this.
>
> **[4:47](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=287)** So we have a few things that we need to debug.
>
> **[4:51](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=291)** Most likely, there's going to be a few screens that are not going to work.
>
> **[4:54](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=294)** So Company is not going to work properly or not show anything yet, because we haven't finished those.
>
> **[5:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=300)** People, if we click here, we have some elements that we need to debug.
>
> **[5:05](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=305)** We're going to take a look at that in the following video so we know that we have this.
>
> **[5:11](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=311)** So let's dismiss this and let's bring back our view here so we have an issue when we add a new contact.
>
> **[5:20](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/connect-your-list-view-to-backend?u=76281980&t=320)** And we're going to take a look at that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (2), next (2), database (1), [[React.js|React]] (1)
> **Code Identifiers:** toupdate (4), mapstatetoprops (3), renderdetails (2)
> **CLI Commands:** make (3)
> **Tools:** postman (3)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** post (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)

#### Testing and debugging Redux for editing
> [LinkedIn Learning](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=0)** - [Instructor] Okay, so now what we're going to do is add a few actions and a reducer to be able to remove ailments in our applications.
>
> **[0:08](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=8)** We're also going to fix and debug a few things.
>
> **[0:11](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=11)** So the first thing I'm going to do right away and get it out of the way is I made a little typo here.
>
> **[0:17](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=17)** I don't know if you caught that.
>
> **[0:18](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=18)** If you don't have this error, it means that you've done the right thing and I didn't.
>
> **[0:23](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=23)** So basically, what I need to do first is fix this, and it should get rid of that PropType error.
>
> **[0:30](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=30)** And then the reason why we have an error when we type elements in this form is that we don't have the right action inside of our actions to the form update.
>
> **[0:41](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=41)** We have the reducer, well, we don't have the action, so we need to add that.
>
> **[0:46](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=46)** All right, so what we're going to do first is go into the actions and start by adding this one here.
>
> **[0:52](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=52)** So I'm going to do an export cons and do formUpdate, and then what is the prop and the value.
>
> **[1:06](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=66)** We're basically passing those two parameters.
>
> **[1:09](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=69)** Then we're going to return for the specific action a type, which will be FORM_UPDATE, which we were calling in this particular element here, but didn't have the proper action for it.
>
> **[1:22](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=82)** So that's why we have an error here.
>
> **[1:24](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=84)** And then the payload is going to be the prop and the value.
>
> **[1:29](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=89)** And we're using that in two of our forms, the update and the addNewContact.
>
> **[1:35](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=95)** So you would've probably ran into more issues inside the update as well if you went into the edit mode.
>
> **[1:43](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=103)** Okay, so we have that one done.
>
> **[1:44](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=104)** We're going to save.
>
> **[1:46](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=106)** And then we're going to do another one, and I'd like to do it a little bit lower here after the update and save, since this is a delete, and I'll keep it above loadInitial action since this one is the one we're always using.
>
> **[2:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=120)** And I'm going to do export const deleteContact.
>
> **[2:08](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=128)** We're going to pass an id as a parameter, then we're going to return.
>
> **[2:14](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=134)** And I think I'm going to copy some of the code that we have somewhere else.
>
> **[2:20](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=140)** I think I'm going to copy saveContact here and just delete everything that I don't need.
>
> **[2:27](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=147)** Yeah, it's going to be faster this way.
>
> **[2:30](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=150)** Okay, so basically what I don't need here, okay, so let's fix our errors.
>
> **[2:36](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=156)** Dispatch, this is all good, fetch, all good, the id, all good, and the method is delete.
>
> **[2:42](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=162)** So what I'm going to do is shorten that one. So let's do this.
>
> **[2:47](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=167)** We don't need a body in this one.
>
> **[2:50](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=170)** And I'm going to do this method: 'DELETE', like so.
>
> **[3:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=180)** we don't need the headers.
>
> **[3:02](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=182)** We can go straight to then, like so, then remove this.
>
> **[3:10](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=190)** Again, if I'm going too fast, just pause the video.
>
> **[3:14](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=194)** So basically, what I've done is leverage the previous code with the fetch.
>
> **[3:19](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=199)** We're passing an idea as we need it for the delete method.
>
> **[3:24](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=204)** Then make sure you don't have anything after the parenthesis.
>
> **[3:27](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=207)** And then we do the then, we're doing a dispatch, and the dispatch is going to be DELETE_CONTACT.
>
> **[3:37](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=217)** And then we're also doing a dispatch of loading initial contacts and we're also catching if there's an error.
>
> **[3:45](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=225)** And let's make sure that what you're passing is written the same way as this, okay?
>
> **[3:52](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=232)** And just to make sure when you type this here that you're passing the id that's here.
>
> **[3:59](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=239)** You just simply do this and pass the id, like so, save, okay?
>
> **[4:08](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=248)** Then what we need is to go in the reducers and add the case for delete a contact.
>
> **[4:15](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=255)** So I'm going to go all the way down, just before the default, and do a case for DELETE_CONTACT, like so,
>
> **[4:29](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=269)** return ...state, detailView is going to be false.
>
> **[4:39](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=279)** Again, we don't need the detailView when we're deleting.
>
> **[4:43](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=283)** And personSelected is going to be null.
>
> **[4:47](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=287)** So we're clearing the person that we're selecting from that action and the reducer.
>
> **[4:55](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=295)** Okay, so now we can test this, see if there's any bugs.
>
> **[4:59](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=299)** Let's bring our terminal.
>
> **[5:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=300)** Let's do our complete refresh by doing R.
>
> **[5:04](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=304)** Now you should see this, click.
>
> **[5:06](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=306)** You have all the details here.
>
> **[5:09](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=309)** Everything should look fine and dandy like this.
>
> **[5:11](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=311)** If it doesn't, that's your CSS.
>
> **[5:14](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=314)** If there's something missing, you got an error, take a look at the error or take a look at my code.
>
> **[5:20](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=320)** Then clicking here should actually turn it back.
>
> **[5:23](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=323)** Yep, there you go.
>
> **[5:26](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=326)** Now we have this.
>
> **[5:27](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=327)** If we want to add a person, we go ahead and click on Add, and I'm going to start typing.
>
> **[5:33](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=333)** Now the form should work.
>
> **[5:35](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=335)** So let's take a look.
>
> **[5:36](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=336)** Manny, yep, it's working.
>
> **[5:38](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=338)** Manny Henri, 555555555, me@[p.com](https://p.com), then company, LinkedIn, project, Bla, Bla, then Add.
>
> **[5:54](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=354)** And we have the new person.
>
> **[5:56](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=356)** So if we click on the second one, I have two with the same name.
>
> **[6:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=360)** Let's go. And this one, let's click on Edit.
>
> **[6:04](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=364)** And now we have a little issue.
>
> **[6:05](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=365)** So we have, "Cannot bind of undefined."
>
> **[6:09](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=369)** Okay, so let's take a look here.
>
> **[6:12](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=372)** Let me just close this for a second.
>
> **[6:14](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=374)** So we clicked on Edit, and UpdatePerson is where the error is.
>
> **[6:20](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=380)** So let's go ahead and click UpdatePerson.
>
> **[6:22](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=382)** Let's take a look at what we're having as an issue here.
>
> **[6:29](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=389)** UpdatePerson doesn't seem to be catching that one.
>
> **[6:32](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=392)** So let's see.
>
> **[6:34](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=394)** And it's not UpdatePerson, but on UpdatePress.
>
> **[6:40](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=400)** That's the right function because that was the function that we actually created here.
>
> **[6:47](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=407)** So that was my bad. Okay, so now we're good.
>
> **[6:50](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=410)** Let's go back, click on Add, and we have this on UpdatePress, UpdatePerson.
>
> **[6:57](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=417)** We have some issues here too. So let's take a look at this.
>
> **[7:01](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=421)** Let's make sure we have all the elements.
>
> **[7:03](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=423)** What is the error?
>
> **[7:04](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=424)** It says, "this.props.navigation to people."
>
> **[7:06](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=426)** Okay, so here's where we have an issue.
>
> **[7:10](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=430)** And this, we don't need.
>
> **[7:12](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=432)** So let's remove that one because this is not part of the add, okay?
>
> **[7:21](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=441)** All right, let's go back here.
>
> **[7:22](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=442)** Let's click again on one of the names. Let's click on Edit.
>
> **[7:25](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=445)** Let's just change to Manuel and then click on Add.
>
> **[7:31](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=451)** And it hasn't refreshed it. So, interesting.
>
> **[7:37](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=457)** Okay, so if I do, this is the add new contact.
>
> **[7:41](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=461)** So again, we need to change this.
>
> **[7:44](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=464)** So let's go back to the people.
>
> **[7:45](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=465)** Let's click on Add again.
>
> **[7:48](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=468)** And let's click on this one, click on Edit.
>
> **[7:52](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=472)** So there's a few things I want to change.
>
> **[7:55](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=475)** So let's again go into, first, here, it should be Update contact, like so.
>
> **[8:05](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=485)** Let's make sure we have all the elements in place here 'cause we copied a lot of code for this one.
>
> **[8:11](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=491)** So we need to make sure that we're doing this right.
>
> **[8:14](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=494)** Notes, boom, boom, boom.
>
> **[8:17](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=497)** Okay, so let's go ahead and check the actions to make sure that everything's dandy and there.
>
> **[8:22](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=502)** So let's go into the actions here.
>
> **[8:25](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=505)** And what I'm going to do is close the explorer, close the UpdatePerson, and saveContact is here.
>
> **[8:33](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=513)** So saveContact, the id is passed, but for some reason, it doesn't take it up inside of the fetch here.
>
> **[8:44](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=524)** And I know exactly why.
>
> **[8:45](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=525)** It's because this is not a template strings.
>
> **[8:48](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=528)** It's a regular string. So let's go ahead and do that.
>
> **[8:50](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=530)** Let's make sure to transform this to a template string.
>
> **[8:53](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=533)** Now it should take it.
>
> **[8:56](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=536)** Yes. Okay.
>
> **[8:58](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=538)** So that means that I made the same mistake in the other fetch here where I need the id, right here.
>
> **[9:07](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=547)** See, it doesn't take it.
>
> **[9:08](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=548)** Okay, so let's go and change it to template string.
>
> **[9:13](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=553)** Little details but that makes a world difference in programming.
>
> **[9:17](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=557)** Okay, so let's see if everything is back to normal.
>
> **[9:20](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=560)** I'm just going to change the name to Manuel as opposed to Manny, and Add.
>
> **[9:26](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=566)** And Manuel Henri. So this is all good.
>
> **[9:30](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=570)** Now we also added the delete in this video, so let's test this.
>
> **[9:36](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=576)** If I click on Delete, it's deleted. We're all good.
>
> **[9:40](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=580)** Okay, so now we've completed all of our debugging.
>
> **[9:43](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=583)** The application works with the people, adding new people, editing new people, deleting new people.
>
> **[9:48](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/testing-and-debugging-redux-for-editing?u=76281980&t=588)** Now we're going to focus on the company views in the next chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (4), [[Forms]] (1), css (1), [[LinkedIn]] (1), [[Programming]] (1)
> **Code Identifiers:** savecontact (3), detailview (2), formupdate (1), addnewcontact (1), loadinitial (1)
> **UI Navigation:** click on (10)
> **CLI Commands:** make (8)
> **Env Vars:** delete_contact (2), form_update (1), delete (1), css (1)
> **Exercise Files:** template (3)
> **Definitions:** means that (2), is a  (1)
> **Cross-References:** go back to (1), in the next (1)


### 5. Company View and Final Touches

[↑ Back to Table of Contents](#table-of-contents)

#### Code the company list query
> [LinkedIn Learning](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=0)** - [Instructor] Okay, so in this chapter we're going to create a view that will be a company view that will give us a list of the companies with the people that work there.
>
> **[0:09](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=9)** So if we have two people that work at LinkedIn, we're going to have one LinkedIn list with two people inside of it.
>
> **[0:15](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=15)** So what we're going to do is create a second name, just Gabe Bla, phone number six, six, six, six, six, six.
>
> **[0:23](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=23)** Email gabe@[whatever.com](https://whatever.com).
>
> **[0:28](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=28)** Company, LinkedIn.
>
> **[0:31](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=31)** Let's make sure it's the same company.
>
> **[0:32](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=32)** Boom, boom, boom, boom, okay.
>
> **[0:35](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=35)** Add this one.
>
> **[0:36](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=36)** So we have two guys and let's edit this one to make sure it has the same name and company LinkedIn, add.
>
> **[0:45](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=45)** And we have two companies with the same name.
>
> **[0:47](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=47)** Okay, perfect.
>
> **[0:48](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=48)** So now what we need to do is in the actions, clean the lodash, 'cause we don't need lodash here, we're actually going to do it in the other file.
>
> **[0:59](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=59)** So what I'm going to do now is bring the company list first and then in the next video we're going to do company item and finish it with a beautiful view for companies.
>
> **[1:12](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=72)** So let's go ahead and work on this one now.
>
> **[1:14](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=74)** And the first thing I'm going to do is change a few things here.
>
> **[1:19](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=79)** Actually, I'm going to import connect from react redux.
>
> **[1:29](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=89)** Then I'm going to import this from lodash.
>
> **[1:34](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=94)** And the reason why I'm going to do lodash is, basically I'm going to write a quick algorithm that will allow me to pull all the people from contacts and put them together in a company view.
>
> **[1:48](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=108)** So, and then I'm going to import company item from company item, like so.
>
> **[1:58](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=118)** Okay, now in the render, before I go and do the render, I'm going to do styles, I'm going to need styles from this guy too.
>
> **[2:07](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=127)** Stylesheet.create.
>
> **[2:13](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=133)** And now I'm going to do simply a container that will have flex of one and padding top of 80.
>
> **[2:25](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=145)** So basically, give some room in between all the elements of the iPhone and the actual view.
>
> **[2:33](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=153)** Okay, and then in the view itself, we're going to do all this, return.
>
> **[2:38](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=158)** And I'm going to first leverage my view and insert the container, the style, styles.container.
>
> **[2:51](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=171)** And then I'm going to create a flat list.
>
> **[2:54](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=174)** And again, let's make sure we type flat list properly, 'cause that was our big issue the last time.
>
> **[3:01](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=181)** Close that component.
>
> **[3:02](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=182)** And then we're going to, first for the data, we're going to use this.props.companies.
>
> **[3:12](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=192)** We're going to render item and we're leveraging a lot of the same code that we've done for render people, but I'm going to type it this time.
>
> **[3:24](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=204)** So item, and for each item, we're going to use the company item and companies as the actual prop that it takes, item.
>
> **[3:42](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=222)** And make sure you close out your component before that curly brace here.
>
> **[3:48](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=228)** 'Cause this is part of the function render item.
>
> **[3:51](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=231)** And you want to make sure that your component starts here and it closes before that curly brace.
>
> **[3:57](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=237)** Just a quick note, 'cause I made that mistake before and I looked for that error for a while.
>
> **[4:03](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=243)** I was like, where is this mistake?
>
> **[4:06](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=246)** And sometimes it's the simple typos like this, that make your life a living hell for a couple of hours or a couple of minutes because you're like, I can't see what I've done wrong.
>
> **[4:15](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=255)** We've all been there as developers.
>
> **[4:18](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=258)** Okay, so now I'm using a lot of the same syntax for basically using the key extractor as the item itself.
>
> **[4:28](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=268)** So whatever is the item and the index will basically create a key, 'cause every component inside of React, when there are lists, they need a key.
>
> **[4:39](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=279)** Okay, so this is pretty much done for this particular render method, now we need to create the algorithm for our little list, and this is how we're going to do it.
>
> **[4:51](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=291)** We're going to do it in the map state to props here, map state to props, past the state.
>
> **[5:03](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=303)** And then we're going to first create a variable called people.
>
> **[5:09](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=309)** And for that, we're going to pass state.people.
>
> **[5:13](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=313)** So we have our array of people.
>
> **[5:16](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=316)** And then what we're going to do is create a prop called companies.
>
> **[5:21](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=321)** And as you must remember, we're actually passing it to every item here.
>
> **[5:27](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=327)** So the companies is here, right?
>
> **[5:29](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=329)** So we're going to create companies, and this is how we're going to basically create this particular variable.
>
> **[5:37](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=337)** So we're going to leverage lodash and chain using people.
>
> **[5:46](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=346)** And then, we're going to group by company.
>
> **[5:51](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=351)** You're probably going to start seeing where this is going.
>
> **[5:54](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=354)** And then what we're going to do is map... Value and key... and return, company, key, and then the names with the value.
>
> **[6:12](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=372)** So basically what we're doing, we're going through the list of all the people, trying to find which companies are the same.
>
> **[6:19](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=379)** So, chain them and group them by company.
>
> **[6:22](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=382)** And then what we're going to do is map that with a company, which will be a key and names value.
>
> **[6:29](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=389)** So there's probably going to be an array of people as the names.
>
> **[6:35](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=395)** And then finally, what we're going to do is return the companies, which will have, at that point, a list of people inside of it.
>
> **[6:48](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=408)** And that's basically the algorithm to map all the names for a company and have that company list all the names.
>
> **[6:57](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=417)** And then finally, what we're going to do is do like we're usually doing in redox, is make sure that we connect map state to props with company lists.
>
> **[7:10](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=430)** Save that.
>
> **[7:11](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=431)** Now we may run into some issues here because right now we don't have all the elements, but I'm going to take a look at this bug just to make sure, flat list.
>
> **[7:23](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=443)** Yeah, we did load this the wrong way this time.
>
> **[7:26](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=446)** So let's do this, now we don't have a problem anymore.
>
> **[7:29](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=449)** If we go here, we may have a call stack error because right now we don't have all the elements completed.
>
> **[7:36](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=456)** So we're going to complete this in the next video.
>
> **[7:38](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/code-the-company-list-query?u=76281980&t=458)** And if there's anything that we did wrong, a typo somewhere, we'll debug that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (4), next (3), [[React.js|React]] (2), data (1)
> **CLI Commands:** make (8), find (1)
> **Cross-References:** in the next (3)
> **Code Identifiers:** iphone (1)
> **URLs:** [whatever.com](https://whatever.com) (1)
> **Speakers:** - [instructor] (1)

#### Create company item and list view
> [LinkedIn Learning](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=0)** - [Instructor] Okay, so let's finalize our code with the CompanyItem, which we'll be able to load into CompanyList once we have this one done.
>
> **[0:10](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=10)** So, the first thing I'm going to do is change here.
>
> **[0:13](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=13)** Remove the Component 'cause we're not going to need it.
>
> **[0:16](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=16)** And then, what I'm going to do is add Image to that list here.
>
> **[0:23](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=23)** And finally, import Icon from 'react-native- vector-icons/Material Oops. Let's make sure that forward slash material icon, that's why it wasn't showing.
>
> **[0:50](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=50)** It's because I had a little issue here.
>
> **[0:53](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=53)** Okay, now we'll create the style sheet as usual, styles, stylesheet.create, and we're going to start by doing title top -55, left 150 and font size 24.
>
> **[1:22](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=82)** Then we're going to do each class, which we'll do height of 100, left of zero padding top 5.
>
> **[1:43](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=103)** Then what we're going to do is do action top minus 25.
>
> **[1:50](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=110)** Background color, we're going to do black color white.
>
> **[1:57](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=117)** So basically the background's going to be black and the text's going to be white.
>
> **[2:01](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=121)** And this is going to be for the list of people.
>
> **[2:04](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=124)** Padding bottom, we're going to do 5, padding top we're also going to do 5.
>
> **[2:16](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=136)** And padding left, we're going to do 10.
>
> **[2:22](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=142)** And the final element is going to be the icon position absolute top 10, left 10, color white.
>
> **[2:40](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=160)** And background color, we're going to do an RGBA 255, 255, 255 is zero.
>
> **[2:57](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=177)** Okay, so now inside of company items, we're going to change this to something else.
>
> **[3:04](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=184)** We're not going to do a class component on this one.
>
> **[3:09](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=189)** We're going to do a functional component.
>
> **[3:12](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=192)** Company item takes props 'cause we don't need it.
>
> **[3:18](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=198)** It's a lot more code, a lot more complex things that happens in the background with React.
>
> **[3:23](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=203)** We don't need it.
>
> **[3:25](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=205)** So we're just going to do a functional one on this one.
>
> **[3:28](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=208)** Let's do a view.
>
> **[3:30](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=210)** We're going to do an image and this image will take a few things.
>
> **[3:35](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=215)** So the first thing is the source, right?
>
> **[3:37](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=217)** So the source will require image, background.jpeg, style styles.image, right?
>
> **[3:54](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=234)** So we have that style.
>
> **[3:56](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=236)** Now we need to do an icon next.
>
> **[3:58](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=238)** So we're going to do that. Remember we load in an icon.
>
> **[4:01](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=241)** So we're going to do that, icon, which we'll close out right away.
>
> **[4:06](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=246)** And then we need to do a few things.
>
> **[4:08](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=248)** So the name of the icon is going to be business, the size will be 100.
>
> **[4:17](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=257)** And again, we're going to do style styles.icon And then finally we're going to do text, which will repeat all of the particular people within the company.
>
> **[4:31](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=271)** So this is where we're going to do that.
>
> **[4:35](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=275)** Style styles.title, I'm actually going to name the company first.
>
> **[4:43](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=283)** So pass props.companies .company and then we're going to do all the people inside of this particular company.
>
> **[4:58](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=298)** So props.companies .name.map So we're mapping every person that is inside of that particular company.
>
> **[5:11](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=311)** And we're going to return inside of that return we're we're going to have text, name, first name, and then name.lastName So every person that is going to be on that array, we're going to return the first name and the last name.
>
> **[5:38](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=338)** So we're basically going through every name that sits inside the company.
>
> **[5:42](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=342)** Now the only thing I need to do here is add a key.
>
> **[5:46](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=346)** So that's very important in React.
>
> **[5:48](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=348)** So name._id And then I'm also going to add the style that we just wrote.
>
> **[5:57](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=357)** Styles.action And, okay, so here's something that was imported by mistake.
>
> **[6:06](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=366)** Let's make sure that it's not flat list.
>
> **[6:10](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=370)** Should be flatList, but I don't think we're using it.
>
> **[6:13](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=373)** No, we're not using it here. So let me remove that one.
>
> **[6:18](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=378)** Perfect. Now we can save.
>
> **[6:22](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=382)** Okay, so what is property text doesn't exist.
>
> **[6:26](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=386)** Okay, let's go ahead, take a look at this.
>
> **[6:29](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=389)** We forgot to import text, so let's make sure we do.
>
> **[6:34](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=394)** There you go. Save it.
>
> **[6:36](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=396)** We're back.
>
> **[6:37](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=397)** I'm just going to reload and rebundle.
>
> **[6:42](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=402)** It doesn't seem to have any issues. Let's go here.
>
> **[6:45](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=405)** And what do we have now?
>
> **[6:47](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=407)** Company item cannot read Property Map of Undefined.
>
> **[6:51](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=411)** Okay, so let's go and take a look at this particular thing here.
>
> **[6:57](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=417)** Names, that's a problem I had name singular, so now it should work.
>
> **[7:04](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=424)** There you go.
>
> **[7:05](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=425)** So now we have two names inside of the company, LinkedIn.
>
> **[7:09](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=429)** So, if I add another person, let's add another person in another company.
>
> **[7:14](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=434)** Let's say my company, I'll go Fields, Project, whatever, whatever.
>
> **[7:23](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=443)** Manuelo Henrieto.
>
> **[7:27](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=447)** I'm just making fun of my own name, fyi.
>
> **[7:30](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=450)** Okay, number, email doesn't really matter.
>
> **[7:33](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=453)** We didn't put any catch on this one.
>
> **[7:38](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=458)** Add.
>
> **[7:40](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=460)** Okay, so that completes the application.
>
> **[7:42](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=462)** I hope you had as much fun as I did.
>
> **[7:45](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=465)** Play with the application, update the styles if you want to.
>
> **[7:49](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=469)** This is basically the styles that I've put in in there.
>
> **[7:52](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/create-company-item-and-list-view?u=76281980&t=472)** And then if you want to add more to this application, feel free to do so.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (3), application (3), functional (2), next (1), business (1)
> **CLI Commands:** make (3)
> **Code Identifiers:** lastname (1), flatlist (1)
> **Env Vars:** rgba (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Building your own CRM application with React Native
> [LinkedIn Learning](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/building-your-own-crm-application-with-react-native?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/building-your-own-crm-application-with-react-native?u=76281980&t=0)** - [Narrator] I hope you had as much fun as I did building this CRM application.
>
> **[0:04](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/building-your-own-crm-application-with-react-native?u=76281980&t=4)** Now that we have a full function of the application with crowd abilities, there are a few areas I suggest to continue building your skills or explore how you could improve this application.
>
> **[0:15](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/building-your-own-crm-application-with-react-native?u=76281980&t=15)** For example, you could expand the project data by adding multiple projects per contact, details per project or even assign projects to companies instead of people.
>
> **[0:25](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/building-your-own-crm-application-with-react-native?u=76281980&t=25)** Next, you could take a similar approach by adding multiple phone numbers and emails per contact.
>
> **[0:31](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/building-your-own-crm-application-with-react-native?u=76281980&t=31)** Then you could add type checking with either PropTypes or flow, which adds further type assertion and multiple ways to prevent bug and bad code in your application.
>
> **[0:41](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/building-your-own-crm-application-with-react-native?u=76281980&t=41)** Adding more tests to your app would also help in improving your development workflow.
>
> **[0:46](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/building-your-own-crm-application-with-react-native?u=76281980&t=46)** Finally, pushing your mobile development skills further by taking any of the iOS or Android courses available on LinkedIn Learning is a great next step.
>
> **[0:56](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/building-your-own-crm-application-with-react-native?u=76281980&t=56)** As all our mobile projects end in these environments, being familiar with the development languages and tools is a must to be able to release your application.
>
> **[1:05](https://www.linkedin.com/learning/create-a-crm-mobile-application-with-react-native-23458867/building-your-own-crm-application-with-react-native?u=76281980&t=65)** Thanks very much for taking my course, and I'll see you in a bit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (5), next (2), data (1), [[Mobile Development]] (1), [[Android]] (1)
> **Definitions:** is a  (2)
> **Code Identifiers:** ios (1)
> **Env Vars:** crm (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)


## Instructor

- [[Emmanuel Henri]]

## Resources

- Exercise files available

## Skills Covered

- Mobile Application Development
- React Native

## Path Context

### In [[Become a React Native Developer]]
← [[From React to React Native]] | **3 of 5** | [[React Native Ecosystem and Workflow]] →

## Appears In

- [[Become a React Native Developer]]

## Related Courses

_Courses sharing skills:_

- [[Learning React Native]] — React Native
- [[React Native Ecosystem and Workflow]] — React Native
- [[From React to React Native]] — React Native
- [[React Native Essential Training]] — React Native

---

[↑ Back to top](#)