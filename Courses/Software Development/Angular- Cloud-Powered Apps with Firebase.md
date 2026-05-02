---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: angular-cloud-powered-apps-with-firebase
url: "https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase"
duration_minutes: 136
duration: 2h 16m
level: Intermediate
updated: 11/15/2019
learners: 20776
skills:
  - Angular
  - Firebase
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQEeFiQeqEOdlQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1573861242641?e=2147483647&amp;v=beta&amp;t=ZVZabhGDGEJWMFgn5O_3gsFtnA0kMrO5hrovDu5fTVo"
linkedin_topic: Software Development
learning_paths:
  - '[[Explore Web Development with Angular]]'
prev_courses:
  - '[[Angular- Creating and Hosting a Full-Stack Site]]'
next_courses:
  - '[[WebSocket Communications with Node and Angular]]'
path_nav: '[{"path":"Explore Web Development with Angular","position":5,"total":6,"prev":"Angular- Creating and Hosting a Full-Stack Site","next":"WebSocket Communications with Node and Angular"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - topic/web-development
  - skill/angular
  - skill/firebase
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Angular-%20Cloud-Powered%20Apps%20with%20Firebase.md)

![Angular: Cloud-Powered Apps with Firebase](https://media.licdn.com/dms/image/v2/C4E0DAQEeFiQeqEOdlQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1573861242641?e=2147483647&amp;v=beta&amp;t=ZVZabhGDGEJWMFgn5O_3gsFtnA0kMrO5hrovDu5fTVo)

# Angular: Cloud-Powered Apps with Firebase

> Want to learn how to quickly build apps, without managing infrastructure? Firebase allows you to do exactly that. Backed by Google Cloud Platform and used by some of the largest apps today, Firebase is a suite of tools for building and scaling web applications. In this course, join Victor Mejia as he steps through how to build powerful applications with Firebase. To begin, he takes a look at the F

> [LinkedIn Learning](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase) | 2h 16m | Intermediate | 21K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Structuring your apps for the cloud](#structuring-your-apps-for-the-cloud)
  - [What you should know](#what-you-should-know)
  - [Using the exercise files](#using-the-exercise-files)
- [**1. Setting Up Your Development Environment**](#1-setting-up-your-development-environment) (4 videos)
  - [Installing tools and CLIs](#installing-tools-and-clis)
  - [Generating an Angular application](#generating-an-angular-application)
  - [Overview of the Firebase console](#overview-of-the-firebase-console)
  - [Configuring your web application](#configuring-your-web-application)
- [**2. Firebase Authentication**](#2-firebase-authentication) (6 videos)
  - [Firebase Authentication setup](#firebase-authentication-setup)
  - [Creating users](#creating-users)
  - [Displaying current user](#displaying-current-user)
  - [User logout](#user-logout)
  - [User login](#user-login)
  - [Using Angular route guards](#using-angular-route-guards)
- [**3. Storing and Syncing Data with Firebase Cloud Firestore**](#3-storing-and-syncing-data-with-firebase-cloud-firestore) (6 videos)
  - [Cloud Firestore intro](#cloud-firestore-intro)
  - [Cloud Firestore setup](#cloud-firestore-setup)
  - [Deploying security rules](#deploying-security-rules)
  - [Creating documents](#creating-documents)
  - [Displaying user data](#displaying-user-data)
  - [Updating user documents](#updating-user-documents)
- [**4. Storing Files with Firebase Cloud Storage**](#4-storing-files-with-firebase-cloud-storage) (4 videos)
  - [Cloud Storage setup](#cloud-storage-setup)
  - [Cloud Storage security rules](#cloud-storage-security-rules)
  - [Profile image upload form](#profile-image-upload-form)
  - [Image uploads](#image-uploads)
- [**5. Control Access with Custom Claims and Security Rules**](#5-control-access-with-custom-claims-and-security-rules) (6 videos)
  - [Firebase ID tokens](#firebase-id-tokens)
  - [Setting Firebase custom claims](#setting-firebase-custom-claims)
  - [Admin interface: Route guards, part 1](#admin-interface-route-guards-part-1)
  - [Admin interface: Route guards, part 2](#admin-interface-route-guards-part-2)
  - [Admin interface: View user collection](#admin-interface-view-user-collection)
  - [Admin interface: View user profile](#admin-interface-view-user-profile)
- [**6. Going Serverless with Firebase Cloud Functions**](#6-going-serverless-with-firebase-cloud-functions) (3 videos)
  - [Cloud Functions setup](#cloud-functions-setup)
  - [Cloud Functions: Email setup](#cloud-functions-email-setup)
  - [Cloud Functions: Authentication trigger](#cloud-functions-authentication-trigger)
- [**7. Control Access with Custom Claims and Security Rules**](#7-control-access-with-custom-claims-and-security-rules) (2 videos)
  - [Firebase Hosting setup](#firebase-hosting-setup)
  - [Deploying your app](#deploying-your-app)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Structuring your apps for the cloud](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud-2?u=76281980&t=0)** - [Instructor] [[Angular]] is a powerful and feature-packed framework that makes building Web applications so much more enjoyable.
>
> **[0:06](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud-2?u=76281980&t=6)** I personally love building apps with Angular because it allows me to be productive.
>
> **[0:11](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud-2?u=76281980&t=11)** So, you've got a brilliant idea for your next Angular app, but you will need more than just your client-side code.
>
> **[0:16](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud-2?u=76281980&t=16)** You need hosting, APIs, authentication, and deployments.
>
> **[0:20](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud-2?u=76281980&t=20)** For a very long time, these needs were delegated to back-end developers or [[DevOps]] engineers.
>
> **[0:25](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud-2?u=76281980&t=25)** [[Firebase]] by [[Google]] empowers front-end developers to quickly tackle these problems and focus on what they love.
>
> **[0:31](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud-2?u=76281980&t=31)** Hi, I'm Victor Mejia.
>
> **[0:33](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud-2?u=76281980&t=33)** I'm a Senior UI Engineer and Instructor, and welcome to this course on Angular Cloud-Powered Apps with Firebase.
>
> **[0:39](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud-2?u=76281980&t=39)** In this course, we will be diving into all of the powerful services that Firebase by Google provides in order to build a serverless application.
>
> **[0:47](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud-2?u=76281980&t=47)** Modern Web applications require more than just your client-side code.
>
> **[0:51](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud-2?u=76281980&t=51)** You need hosting, APIs, authentication, and automatic deployments.
>
> **[0:56](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud-2?u=76281980&t=56)** We need to build apps fast, without managing infrastructure.
>
> **[0:59](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud-2?u=76281980&t=59)** Firebase by Google allows you to do exactly that.
>
> **[1:02](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud-2?u=76281980&t=62)** Backed by [[Google Cloud Platform (GCP)|Google Cloud Platform]] and used by some of the largest apps today, Firebase is a suite of tools to help build and scale your Web application.
>
> **[1:12](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud-2?u=76281980&t=72)** We will first take a look at the Firebase console, and see how we can manage different Firebase projects.
>
> **[1:17](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud-2?u=76281980&t=77)** We will then use Firebase Authentication to add authentication to our application.
>
> **[1:22](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud-2?u=76281980&t=82)** As we build out features, we will need to store data using Firebase Cloud Firestore along the way.
>
> **[1:28](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud-2?u=76281980&t=88)** To store files like images, we will be using Firebase [[Cloud Storage]].
>
> **[1:32](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud-2?u=76281980&t=92)** We will then jump into the serverless world and learn how to create our own serverless functions using Firebase Cloud Functions.
>
> **[1:39](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud-2?u=76281980&t=99)** Finally, we will learn how to deploy our app using Firebase Hosting.
>
> **[1:43](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud-2?u=76281980&t=103)** I'm really excited to cover this content with you, so let's dive in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Firebase]] (12), [[Angular]] (4), [[Google]] (3), [[DevOps]] (1), [[Google Cloud Platform (GCP)|Google cloud platform]] (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [What you should know](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/what-you-should-know-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/what-you-should-know-2?u=76281980&t=0)** - [Instructor] This course will assume a basic understanding of [[Angular]].
>
> **[0:03](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/what-you-should-know-2?u=76281980&t=3)** The [[Angular CLI]] assumes that you have Node, [[npm]], and [[Git]] installed on your system.
>
> **[0:09](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/what-you-should-know-2?u=76281980&t=9)** If you're unfamiliar with Angular, I recommend you watch our Essential Training Course for Angular.
>
> **[0:14](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/what-you-should-know-2?u=76281980&t=14)** If you don't have Git installed on your system, go ahead and download it from [git-scm.com](https://git-scm.com).
>
> **[0:20](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/what-you-should-know-2?u=76281980&t=20)** We will be using Node to install packages, and it's needed for the Angular CLI.
>
> **[0:24](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/what-you-should-know-2?u=76281980&t=24)** If you don't know how to use npm, I recommend you watch our course on npm the Node Package Manager.
>
> **[0:30](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/what-you-should-know-2?u=76281980&t=30)** I'll also be using Visual Studio Code as my main editor.
>
> **[0:33](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/what-you-should-know-2?u=76281980&t=33)** You can download it from code.[visualstudio.com](https://visualstudio.com).
>
> **[0:37](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/what-you-should-know-2?u=76281980&t=37)** Its native TypeScript support, intelligent [[JavaScript]] code editing, and cross-platform support makes it the perfect choice for Angular development.
>
> **[0:44](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/what-you-should-know-2?u=76281980&t=44)** If you're interested in the theme I am using, it is the Night Owl theme by Sarah Drasner.
>
> **[0:50](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/what-you-should-know-2?u=76281980&t=50)** Lastly, we are going to spend some time in the terminal.
>
> **[0:53](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/what-you-should-know-2?u=76281980&t=53)** If you're on a Mac, I recommend downloading and installing iTerm2, version three and using a shell like ZSH and the Oh My Zsh framework, as it provides you with tooling that will make you more productive at your terminal.
>
> **[1:07](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/what-you-should-know-2?u=76281980&t=67)** If you're on a [[Windows]] machine, I highly recommend you check out Cmder as an alternative to the Command prompt.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (4), [[npm]] (3), [[Git]] (3), [[Angular CLI]] (2), [[JavaScript]] (1)
> **CLI Commands:** node (3), npm (3), git (3), make (1)
> **Tools:** terminal (2), zsh (2), visual studio (1), command prompt (1)
> **Env Vars:** cli (2), zsh (1)
> **URLs:** [git-scm.com](https://git-scm.com) (1), [visualstudio.com](https://visualstudio.com) (1)
> **Code Identifiers:** iterm2 (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Using the exercise files](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-the-exercise-files-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-the-exercise-files-2?u=76281980&t=0)** - [Instructor] The exercise file contains a [[Git]] repository, where we'll be building a fictitious app called The Grid, which will contain a list of secret agents.
>
> **[0:10](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-the-exercise-files-2?u=76281980&t=10)** The master branch contains the completed application, and the starting points for this course will be the branch 01-04-begin.
>
> **[0:19](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-the-exercise-files-2?u=76281980&t=19)** We can checkout that branch 01-04-begin.
>
> **[0:25](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-the-exercise-files-2?u=76281980&t=25)** I recommend you start here and work together with me and build the entire application.
>
> **[0:31](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-the-exercise-files-2?u=76281980&t=31)** Once you download the exercise files, you will only need to [[npm]] install once, and you can do this at the root of the project.
>
> **[0:38](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-the-exercise-files-2?u=76281980&t=38)** Let me checkout the master branch, and then npm install.
>
> **[0:44](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-the-exercise-files-2?u=76281980&t=44)** At any point, if you wish to see the files for a specific video, there is a branch you can use.
>
> **[0:49](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-the-exercise-files-2?u=76281980&t=49)** For example, if you're in Chapter Two, Video Three, you can checkout the branch 02-03-begin.
>
> **[0:57](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-the-exercise-files-2?u=76281980&t=57)** You could checkout 02-03-begin.
>
> **[1:03](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-the-exercise-files-2?u=76281980&t=63)** If you wish to see the completed files for that particular video, you can checkout the branch 02-03-end.
>
> **[1:15](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-the-exercise-files-2?u=76281980&t=75)** The entire repository is also available at this link.
>
> **[1:19](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-the-exercise-files-2?u=76281980&t=79)** For each video, you can check out the pull request I made to verify the changes match with your work.
>
> **[1:28](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-the-exercise-files-2?u=76281980&t=88)** Lastly, there is sample data that you can use for your users, including sample profile images.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (2), [[Git]] (1)
> **CLI Commands:** npm (2), git (1)
> **Exercise Files:** exercise file (1), download the (1), exercise files (1)
> **Prerequisites:** install (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 1. Setting Up Your Development Environment

[↑ Back to Table of Contents](#table-of-contents)

#### [Installing tools and CLIs](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/installing-tools-and-clis-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/installing-tools-and-clis-2?u=76281980&t=0)** - [Instructor] We will be using both the [[Node.js]] runtime, along with [[npm]].
>
> **[0:04](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/installing-tools-and-clis-2?u=76281980&t=4)** We will be working with the current LTS, which is 10.16.3 at the time of this recording.
>
> **[0:10](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/installing-tools-and-clis-2?u=76281980&t=10)** And you will need at least version 6.9.0 of NPM, which comes bundled with Node.
>
> **[0:16](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/installing-tools-and-clis-2?u=76281980&t=16)** You can also use NVM, the Node Version Manager, which allows you to manage multiple versions of Node.
>
> **[0:21](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/installing-tools-and-clis-2?u=76281980&t=21)** Let's verify both versions in the command line.
>
> **[0:25](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/installing-tools-and-clis-2?u=76281980&t=25)** I'm on a Mac, so I'm going to head over and use the iTerm2 application.
>
> **[0:29](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/installing-tools-and-clis-2?u=76281980&t=29)** If you're on a [[Windows]] machine, use the install command prompt.
>
> **[0:33](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/installing-tools-and-clis-2?u=76281980&t=33)** I can type in node dash dash version.
>
> **[0:35](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/installing-tools-and-clis-2?u=76281980&t=35)** And I see the Node.js version installed on my system.
>
> **[0:38](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/installing-tools-and-clis-2?u=76281980&t=38)** And I can also type in npm dash dash version.
>
> **[0:43](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/installing-tools-and-clis-2?u=76281980&t=43)** And verify that NPM is installed on my system.
>
> **[0:46](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/installing-tools-and-clis-2?u=76281980&t=46)** You will now need to globally install the [[Angular CLI]] on our system.
>
> **[0:50](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/installing-tools-and-clis-2?u=76281980&t=50)** At the time of this recording, the current version of [[Angular]] is version eight.
>
> **[0:55](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/installing-tools-and-clis-2?u=76281980&t=55)** This application should work with version nine as well, once it is released.
>
> **[0:59](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/installing-tools-and-clis-2?u=76281980&t=59)** We will be working with version 8.3.2 of the Angular CLI.
>
> **[1:03](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/installing-tools-and-clis-2?u=76281980&t=63)** Let's go ahead and use our terminal to install the Angular CLI.
>
> **[1:07](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/installing-tools-and-clis-2?u=76281980&t=67)** You might need to use Sudo in your computer.
>
> **[1:11](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/installing-tools-and-clis-2?u=76281980&t=71)** NPM install, dash g for globally, Angular CLI.
>
> **[1:17](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/installing-tools-and-clis-2?u=76281980&t=77)** And we can specify the exact version using the add sign.
>
> **[1:21](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/installing-tools-and-clis-2?u=76281980&t=81)** And we will use version 8.3.2.
>
> **[1:24](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/installing-tools-and-clis-2?u=76281980&t=84)** This will go ahead and [[Fetch]] the necessary dependencies from NPM in order to install the tool globally on your machine.
>
> **[1:31](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/installing-tools-and-clis-2?u=76281980&t=91)** This will take a few moments.
>
> **[1:36](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/installing-tools-and-clis-2?u=76281980&t=96)** Once that is done, let's verify that it was installed on our system.
>
> **[1:40](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/installing-tools-and-clis-2?u=76281980&t=100)** And we can do that by typing ng dash dash version.
>
> **[1:45](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/installing-tools-and-clis-2?u=76281980&t=105)** We see vesion 8.3.2, along with the versions of it's dependencies.
>
> **[1:49](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/installing-tools-and-clis-2?u=76281980&t=109)** Great, we are now ready to get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (6), [[Angular CLI]] (4), [[Node.js]] (2), [[Windows]] (1), [[Angular]] (1)
> **CLI Commands:** node (6), npm (6), sudo (1)
> **Env Vars:** npm (5), cli (4), lts (1), nvm (1)
> **Versions:** version 8 (2), 3.2 (2), 10.16.3 (1), version 6 (1), 9.0 (1)
> **Prerequisites:** install (5)
> **Tools:** command line (1), command prompt (1), terminal (1)
> **File Paths:** node.js (2)
> **Code Identifiers:** iterm2 (1)

#### [Generating an Angular application](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/generating-an-angular-application-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/generating-an-angular-application-2?u=76281980&t=0)** - [Instructor] The starting point for this course will be an [[Angular]] application that has been previously generated, but I want to show you here how you can easily generate an application using the [[Angular CLI]].
>
> **[0:10](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/generating-an-angular-application-2?u=76281980&t=10)** Once you've installed the Angular CLI, it's been added to your global path in order to make it easy for you to use it.
>
> **[0:17](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/generating-an-angular-application-2?u=76281980&t=17)** Let's take a peek at all the options that are available to use by running the command, ng.
>
> **[0:23](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/generating-an-angular-application-2?u=76281980&t=23)** We see that we have commands to create a new application, serve our application, linting, and building our application.
>
> **[0:29](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/generating-an-angular-application-2?u=76281980&t=29)** If you need help with a particular command, say creating a new application, you can use the help flag.
>
> **[0:35](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/generating-an-angular-application-2?u=76281980&t=35)** For example, ng new --help.
>
> **[0:39](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/generating-an-angular-application-2?u=76281980&t=39)** It's important to know that when you scaffold a new application using ng new, a local version of the [[CLI]] will be installed in the node modules of your application.
>
> **[0:48](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/generating-an-angular-application-2?u=76281980&t=48)** Running the ng commands from the command line will delegate to the locally installed version.
>
> **[0:53](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/generating-an-angular-application-2?u=76281980&t=53)** Let's generate a new application that uses [[Routing]] and SASS for our styles.
>
> **[0:57](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/generating-an-angular-application-2?u=76281980&t=57)** Let me go ahead and clear my terminal here.
>
> **[0:59](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/generating-an-angular-application-2?u=76281980&t=59)** And I can use the ng new and specify the name of my application,
>
> **[1:05](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/generating-an-angular-application-2?u=76281980&t=65)** - -routing, in order to use Angular routing, and specify the flag style equals scss to use SASS for my styles.
>
> **[1:14](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/generating-an-angular-application-2?u=76281980&t=74)** This will scaffold a new project for you and start installing dependencies, generating a package.[[JSON]], config files for typescript, testing, and for running and building the application along with an application module Bootstrapped and ready to go.
>
> **[1:29](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/generating-an-angular-application-2?u=76281980&t=89)** Once that is done, let's open this application in our code editor.
>
> **[1:32](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/generating-an-angular-application-2?u=76281980&t=92)** I will be using Visual Studio Code.
>
> **[1:34](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/generating-an-angular-application-2?u=76281980&t=94)** Let's first change directories into that new application and I can use the code command and open the current directory.
>
> **[1:47](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/generating-an-angular-application-2?u=76281980&t=107)** Here we first see the configuration files and in the Source folder is where our application code lives.
>
> **[1:53](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/generating-an-angular-application-2?u=76281980&t=113)** We see that we have our application component, our application module, and a main.ts file where this module is imported and Bootstrapped to run our application.
>
> **[2:06](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/generating-an-angular-application-2?u=76281980&t=126)** To serve our application using a development server, we can use the ng serv command.
>
> **[2:14](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/generating-an-angular-application-2?u=76281980&t=134)** I can also specify the open flag to automatically open my browser.
>
> **[2:21](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/generating-an-angular-application-2?u=76281980&t=141)** And we have the default Angular application generated and open in our browser.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (3), [[Routing]] (3), [[Angular CLI]] (2), [[CLI]] (1), [[JSON]] (1)
> **Env Vars:** cli (3), sass (2)
> **Tools:** command line (1), terminal (1), visual studio (1)
> **File Paths:** package.json (1), main.ts (1)
> **CLI Commands:** make (1), node (1)
> **UI Navigation:** open the (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Overview of the Firebase console](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/overview-of-the-firebase-console-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/overview-of-the-firebase-console-2?u=76281980&t=0)** - [Instructor] In this course we will working with [[Firebase]] by [[Google]], so we will need to first configure a Firebase project.
>
> **[0:06](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/overview-of-the-firebase-console-2?u=76281980&t=6)** From the Firebase homepage, log into the Firebase console by clicking on the Go to Console link and log in with your Google account.
>
> **[0:21](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/overview-of-the-firebase-console-2?u=76281980&t=21)** Once logged in, you will be taken to the Firebase dashboard.
>
> **[0:24](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/overview-of-the-firebase-console-2?u=76281980&t=24)** Go ahead and create a new project.
>
> **[0:27](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/overview-of-the-firebase-console-2?u=76281980&t=27)** You can name it whatever you like.
>
> **[0:29](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/overview-of-the-firebase-console-2?u=76281980&t=29)** If the name is not unique, Firebase will suggest a unique name for you.
>
> **[0:33](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/overview-of-the-firebase-console-2?u=76281980&t=33)** We will be working with a fictitious app called, The Grid, so I will name it [[Angular]]-firebase-grid-dash.
>
> **[0:43](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/overview-of-the-firebase-console-2?u=76281980&t=43)** Go ahead and click Continue.
>
> **[0:45](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/overview-of-the-firebase-console-2?u=76281980&t=45)** We won't be using Google Analytics.
>
> **[0:48](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/overview-of-the-firebase-console-2?u=76281980&t=48)** Firebase will go ahead and create the project for you and notify you once it's ready.
>
> **[0:53](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/overview-of-the-firebase-console-2?u=76281980&t=53)** And our project is now ready.
>
> **[0:54](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/overview-of-the-firebase-console-2?u=76281980&t=54)** Clicking Continue will take you to that project's dashboard, which we will be using throughout the course.
>
> **[1:01](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/overview-of-the-firebase-console-2?u=76281980&t=61)** Heading over to the Develop tab, you can see the different Firebase features that we will be using.
>
> **[1:06](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/overview-of-the-firebase-console-2?u=76281980&t=66)** We will be using Firebase Authentication to manage both the adamant and the registered users for our app.
>
> **[1:13](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/overview-of-the-firebase-console-2?u=76281980&t=73)** We will be using Cloud Firestore as a database to store data and leverage its real time capabilities.
>
> **[1:19](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/overview-of-the-firebase-console-2?u=76281980&t=79)** Firebase Storage will be used to store files.
>
> **[1:21](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/overview-of-the-firebase-console-2?u=76281980&t=81)** In our case to store user uploaded images.
>
> **[1:25](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/overview-of-the-firebase-console-2?u=76281980&t=85)** We will be using Firebase Hosting to easily deploy our app to the cloud.
>
> **[1:28](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/overview-of-the-firebase-console-2?u=76281980&t=88)** And finally, we will be using Firebase Functions and dive into the serverless world.
>
> **[1:34](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/overview-of-the-firebase-console-2?u=76281980&t=94)** At this point, it would be good to install the Firebase [[CLI]], since we will be working with Firebase.
>
> **[1:39](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/overview-of-the-firebase-console-2?u=76281980&t=99)** Head over to your terminal now and we can install it with [[npm]], npm install -g firebase-tools.
>
> **[1:52](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/overview-of-the-firebase-console-2?u=76281980&t=112)** Once that is completed, sign into Firebase using your Google account and we can do that by typing in firebase login.
>
> **[2:03](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/overview-of-the-firebase-console-2?u=76281980&t=123)** Select your Google account
>
> **[2:12](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/overview-of-the-firebase-console-2?u=76281980&t=132)** and we can go ahead and allow the Firebase CLI access to our Google account.
>
> **[2:18](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/overview-of-the-firebase-console-2?u=76281980&t=138)** Once that is completed, you can head back to the command prompt.
>
> **[2:21](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/overview-of-the-firebase-console-2?u=76281980&t=141)** What the firebase login command did is to connect your local machine to Firebase and grant you access to your Firebase projects.
>
> **[2:29](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/overview-of-the-firebase-console-2?u=76281980&t=149)** To test that authentication worked and to list all of your Firebase projects, you can run the following command, firebase projects list.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Firebase]] (24), [[Google]] (6), [[CLI]] (2), [[npm]] (2), [[Angular]] (1)
> **Prerequisites:** install (3), configure (1)
> **CLI Commands:** npm (2)
> **Env Vars:** cli (2)
> **Tools:** terminal (1), command prompt (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Configuring your web application](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/configuring-your-web-application-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/configuring-your-web-application-2?u=76281980&t=0)** - [Instructor] Now that we have created a [[Firebase]] project, and install the firebase [[CLI]] tools, we need to configure our web application with firebase through the firebase console.
>
> **[0:09](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/configuring-your-web-application-2?u=76281980&t=9)** And also install AngularFire which is the official library for firebase in [[Angular]].
>
> **[0:15](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/configuring-your-web-application-2?u=76281980&t=15)** AngularFire will make it much easier for us to integrate firebase into our Angular application allowing us to easily use authentication, manage data, use realtime bindings and upload files.
>
> **[0:29](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/configuring-your-web-application-2?u=76281980&t=29)** It's observable based, so it uses the power of RxJs for maximum efficiency.
>
> **[0:35](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/configuring-your-web-application-2?u=76281980&t=35)** This will be the starting point for the course, so in the exercise files, make sure to install dependencies with mpm install.
>
> **[0:44](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/configuring-your-web-application-2?u=76281980&t=44)** And then, you can check out the 01-04 begin branch, [[Git]] checkout 01-04-begin.
>
> **[0:54](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/configuring-your-web-application-2?u=76281980&t=54)** In your terminal, install both AngularFire in the firebase, mpm install firebase angular/fire.
>
> **[1:05](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/configuring-your-web-application-2?u=76281980&t=65)** While that is installing, let's head over to the Read Me instructions for AngularFire.
>
> **[1:12](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/configuring-your-web-application-2?u=76281980&t=72)** Click on installation and setup, and go down to step four.
>
> **[1:17](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/configuring-your-web-application-2?u=76281980&t=77)** You will copy this placeholder values.
>
> **[1:21](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/configuring-your-web-application-2?u=76281980&t=81)** And once firebase and AngularFire is installed, let's open up our application using Visual Studio code.
>
> **[1:29](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/configuring-your-web-application-2?u=76281980&t=89)** Heading over now to the environment file, we can go ahead and paste these values here.
>
> **[1:37](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/configuring-your-web-application-2?u=76281980&t=97)** Let's head over now to the firebase console.
>
> **[1:41](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/configuring-your-web-application-2?u=76281980&t=101)** Head over to the Project Settings, and down to the area labeled, Your apps.
>
> **[1:48](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/configuring-your-web-application-2?u=76281980&t=108)** Click on the web icon, I will add The Grid Dashboard as the app nickname.
>
> **[1:55](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/configuring-your-web-application-2?u=76281980&t=115)** You don't have to setup hosting just yet, and click on Register App.
>
> **[2:02](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/configuring-your-web-application-2?u=76281980&t=122)** It would then suggest for you to copy and paste these scripts.
>
> **[2:06](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/configuring-your-web-application-2?u=76281980&t=126)** But since we are using Angular firebase, we don't need to do that.
>
> **[2:09](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/configuring-your-web-application-2?u=76281980&t=129)** However, we would need these values.
>
> **[2:14](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/configuring-your-web-application-2?u=76281980&t=134)** Grab the necessary values and place them in the placeholder values in your environment file.
>
> **[2:18](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/configuring-your-web-application-2?u=76281980&t=138)** Let's grab the apiKey, the authDomain, the databaseURL, the projectID, the messagingSenderId.
>
> **[2:48](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/configuring-your-web-application-2?u=76281980&t=168)** And for now, we can leave the storageBucket empty.
>
> **[2:51](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/configuring-your-web-application-2?u=76281980&t=171)** Let's talk a little bit about this environment file.
>
> **[2:53](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/configuring-your-web-application-2?u=76281980&t=173)** Often, in your application, it is desired to provide different environment variables, depending on what environment your app is being stripped on.
>
> **[3:01](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/configuring-your-web-application-2?u=76281980&t=181)** For instance, when developing locally or in a staging environment versus in a production environment.
>
> **[3:09](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/configuring-your-web-application-2?u=76281980&t=189)** All you really need to do is to import the environment object, import { environment } from '../environments/environment'.
>
> **[3:21](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/configuring-your-web-application-2?u=76281980&t=201)** In your application, you always want to import the environment file, not the one that has the environment such as prod.
>
> **[3:31](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/configuring-your-web-application-2?u=76281980&t=211)** And then let's say we need to build a production configuration, all you need to do is to specify the environment when running your build.
>
> **[3:39](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/configuring-your-web-application-2?u=76281980&t=219)** I'm opening up a terminal here, and we'll run ng build and specify the prod configuration here.
>
> **[3:50](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/configuring-your-web-application-2?u=76281980&t=230)** In this case, an environment.prod will be used.
>
> **[3:56](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/configuring-your-web-application-2?u=76281980&t=236)** Let's go ahead and inspect the angular.[[JSON]] file.
>
> **[4:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/configuring-your-web-application-2?u=76281980&t=240)** And let's find the production configuration.
>
> **[4:09](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/configuring-your-web-application-2?u=76281980&t=249)** You can see here, in line 48 for the production configuration, it will replace the environment.ts file with environment.prod.ts.
>
> **[4:19](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/configuring-your-web-application-2?u=76281980&t=259)** The last thing we need to setup is to add the AngularFireModule into our main application module.
>
> **[4:27](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/configuring-your-web-application-2?u=76281980&t=267)** First, let's import the AngularFireModule this will be from 'angular/fire' then we will add this module into the imports.
>
> **[4:43](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/configuring-your-web-application-2?u=76281980&t=283)** AngularFireModule and we'll call initializeApp and we'll passed in environment.firebase.
>
> **[4:55](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/configuring-your-web-application-2?u=76281980&t=295)** Let's test our app by running mpm start.
>
> **[5:05](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/configuring-your-web-application-2?u=76281980&t=305)** Let's go ahead and put our browser, open up the developer tools, and verify that you don't get any compilation errors or any console errors on your browser.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Firebase]] (12), [[Angular]] (6), [[CLI]] (1), [[Git]] (1), [[JSON]] (1)
> **Prerequisites:** install (6), setup (3), configure (1)
> **Code Identifiers:** apikey (1), authdomain (1), databaseurl (1), projectid (1), messagingsenderid (1)
> **CLI Commands:** make (2), git (1), find (1)
> **File Paths:** angular.json (1), environment.ts (1), environment.prod.ts (1)
> **Tools:** terminal (2), visual studio (1)
> **UI Navigation:** click on (3)
> **Analogies:** for instance (1), such as (1)


### 2. Firebase Authentication

[↑ Back to Table of Contents](#table-of-contents)

#### [Firebase Authentication setup](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-authentication-setup-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-authentication-setup-2?u=76281980&t=0)** - [Instructor] Now that we have set up our web application with [[Firebase]] by adding configuration values, we first need to add authentication through the Firebase console.
>
> **[0:09](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-authentication-setup-2?u=76281980&t=9)** Click on Authentication, then Set up Sign-in Method.
>
> **[0:13](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-authentication-setup-2?u=76281980&t=13)** We will enable email and password authentication.
>
> **[0:22](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-authentication-setup-2?u=76281980&t=22)** Let's head to our application now.
>
> **[0:24](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-authentication-setup-2?u=76281980&t=24)** In the application module, first import the AngularFireAuth module.
>
> **[0:29](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-authentication-setup-2?u=76281980&t=29)** Import [[Angular]] Fire Auth module and this will be from angular/fire/auth and we will go ahead and add that also here to the imports.
>
> **[0:48](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-authentication-setup-2?u=76281980&t=48)** Let's generate a login component that will provide a form for the user to sign up and log in.
>
> **[0:54](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-authentication-setup-2?u=76281980&t=54)** Open up your terminal, ng generate component, and we will call this component, login.
>
> **[1:04](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-authentication-setup-2?u=76281980&t=64)** Once it is created, we see that a Login folder has been created for you here and the login component has been added automatically to our application module.
>
> **[1:14](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-authentication-setup-2?u=76281980&t=74)** I have provided a starting point for the form and some simple CSS.
>
> **[1:19](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-authentication-setup-2?u=76281980&t=79)** In the Exercise Files, look under Resources, 02-01, and go ahead and drag the login component template file to the sidebar.
>
> **[1:31](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-authentication-setup-2?u=76281980&t=91)** Go ahead and replace that and also some CSS here.
>
> **[1:40](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-authentication-setup-2?u=76281980&t=100)** The classes used for the [[HTML]] elements are from the Symantec UI framework.
>
> **[1:45](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-authentication-setup-2?u=76281980&t=105)** You can visit the Symantec UI documentation site if you wish to have a different look.
>
> **[1:50](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-authentication-setup-2?u=76281980&t=110)** Next, we want to display this form at the root route of our application.
>
> **[1:54](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-authentication-setup-2?u=76281980&t=114)** Head over to the application [[Routing]] module and add this component at the root route.
>
> **[2:01](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-authentication-setup-2?u=76281980&t=121)** We will add an object here, the path is going to the be the root and the component will be the login component.
>
> **[2:09](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-authentication-setup-2?u=76281980&t=129)** Also, when working with [[Forms]] in Angular, be sure to import the forms module form Angular Forms.
>
> **[2:22](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-authentication-setup-2?u=76281980&t=142)** Import forms module from angular/forms.
>
> **[2:32](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-authentication-setup-2?u=76281980&t=152)** Let's go ahead and run the application using [[npm]] start.
>
> **[2:40](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-authentication-setup-2?u=76281980&t=160)** Once that is done compiling, you can head to your browser, to localhost port 4200 and verify that the sign-up form displays.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (5), [[Forms]] (5), [[Firebase]] (2), [[HTML]] (1), [[Routing]] (1)
> **Env Vars:** css (2), html (1)
> **Exercise Files:** exercise files (1), template (1)
> **Prerequisites:** set up (2)
> **CLI Commands:** npm (1)
> **Ports:** port 4200 (1)
> **Tools:** terminal (1)
> **UI Navigation:** click on (1)

#### [Creating users](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=0)** - [Instructor] Now that we have a new form for inputting information, let's add functionality to the simple form and create a user with [[Firebase]].
>
> **[0:08](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=8)** Head over now to the template file for the login component.
>
> **[0:12](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=12)** Because we are inputting the [[Forms]] module, [[Angular]] will attach the NgForm directive to any form.
>
> **[0:18](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=18)** This makes the NgForm object available in our view.
>
> **[0:22](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=22)** In our form, we'll create a local template variable called form and assign it a value of ngForm.
>
> **[0:30](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=30)** Note that this isn't the string NgForm, but rather the NgForm object.
>
> **[0:36](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=36)** When the form is submitted, we want to call the onSubmit method.
>
> **[0:42](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=42)** And as argument, we pass in the local form variable.
>
> **[0:48](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=48)** The next step is the add the ngModel directive to all of the inputs.
>
> **[0:52](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=52)** This will create an associate between the inputs and the ngForm object.
>
> **[1:02](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=62)** By doing this, the value of the ngForm object will have a value property, which will be an object containing every input with an ngModel directive at these properties.
>
> **[1:13](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=73)** The property names will correspond to the value of the name attribute.
>
> **[1:23](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=83)** Let's head to the login component now.
>
> **[1:25](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=85)** We first need to import the AngularFire auth service.
>
> **[1:28](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=88)** Let's go ahead and inject it here.
>
> **[1:30](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=90)** Private afAuth, and this will be the AngularFire auth service.
>
> **[1:39](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=99)** Let's go ahead and implement now the method to create a user.
>
> **[1:43](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=103)** We will be using async08 for this method so let's label it as such.
>
> **[1:48](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=108)** Async, onSubmit, it will take in the ngForm.
>
> **[1:55](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=115)** Let's go ahead and grab the values from the form by destructuring the form.value object.
>
> **[2:01](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=121)** Let's grab the email, the password, the firstName, and the lastName.
>
> **[2:08](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=128)** We can destructure the form values by accessing the value object here.
>
> **[2:17](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=137)** We're going to have a try catch block here.
>
> **[2:21](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=141)** We will first use the Firebase auth service to create a user with email and password.
>
> **[2:28](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=148)** Let's start the response and we will call the createUserWithEmailAndPassword method.
>
> **[2:42](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=162)** We use email and the password and if there's any error, we will simply log it out for now.
>
> **[2:55](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=175)** After creating the user with email and password, we will update the display name of the user profile.
>
> **[3:03](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=183)** And we can call the updateProfile method on that user that we get back.
>
> **[3:11](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=191)** We want to update the displayName and we will use a template string here.
>
> **[3:17](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=197)** firstName and then lastName
>
> **[3:28](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=208)** And looks like I need to fix this here and that's capital NgForm and let's go ahead and import NgForm from the Angular forms module.
>
> **[3:37](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=217)** Lastly, we want some sort of loading indicator that our application is contacting Firebase.
>
> **[3:43](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=223)** And we will do so by applying the loading class on the form, if the loading variable is true.
>
> **[3:49](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=229)** So on the form, we could say class.loading and this will only be set if the loading variable is true.
>
> **[3:58](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=238)** Let's go ahead and create this variable now.
>
> **[4:01](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=241)** Initially it'll be set to false.
>
> **[4:09](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=249)** Set it to true.
>
> **[4:12](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=252)** And when the action is done, we can set it back to false.
>
> **[4:17](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=257)** One last thing to do, is you want to go ahead and clear the form if the user successfully signs up.
>
> **[4:24](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=264)** We can easily do this by calling the form.reset method.
>
> **[4:31](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=271)** I'm going to start the application with [[npm]] start.
>
> **[4:37](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=277)** And let's turn to out browser now and try things out.
>
> **[4:41](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=281)** I'm going to refresh a page here.
>
> **[4:43](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=283)** I'm going to have two [[Windows]] open.
>
> **[4:45](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=285)** One with our application, and one with the Firebase console so that you can see immediately when a user signs up.
>
> **[4:57](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=297)** Make sure you go to the authentication tab in you Firebase console I'm going to create a test user.
>
> **[5:04](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=304)** Eric Ortiz And I have created this email.
>
> **[5:12](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=312)** The form is cleared.
>
> **[5:15](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=315)** Let's go ahead and refresh here.
>
> **[5:16](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=316)** And we can see our new user here now.
>
> **[5:19](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=319)** To confirm that you have a current Firebase session, go to your application tab in the developer tools
>
> **[5:30](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=330)** under indexDB and you will see information about the current Firebase user.
>
> **[5:38](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=338)** Next, I will show you how to display the current user in the application.
>
> **[5:42](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=342)** And how to route the user to a new page, once the user signs up.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Firebase]] (7), [[Forms]] (2), [[Angular]] (2), [[npm]] (1), [[Windows]] (1)
> **Code Identifiers:** ngform (4), onsubmit (2), ngmodel (2), firstname (2), lastname (2)
> **Exercise Files:** template (3)
> **CLI Commands:** npm (1), make (1)
> **UI Navigation:** go to (2)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Displaying current user](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-current-user-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-current-user-2?u=76281980&t=0)** - [Instructor] Now that we have implemented user sign up, we need to be able to display the currently authenticated user.
>
> **[0:07](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-current-user-2?u=76281980&t=7)** It will also provide a better [[User Experience (UX)|user experience]] if the user gets routed to a profile page where they can see their information.
>
> **[0:13](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-current-user-2?u=76281980&t=13)** Let's do that now.
>
> **[0:14](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-current-user-2?u=76281980&t=14)** Start by generating a new ProfileComponent by using the [[CLI]], ng generate component, and I will call this component profile.
>
> **[0:27](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-current-user-2?u=76281980&t=27)** The new component is generated, and let's go ahead and add a new route.
>
> **[0:32](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-current-user-2?u=76281980&t=32)** Head to the application [[Routing]] module.
>
> **[0:36](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-current-user-2?u=76281980&t=36)** The new route will be profile/:id.
>
> **[0:44](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-current-user-2?u=76281980&t=44)** Where id will be the user id, and the component will be the ProfileComponent.
>
> **[0:51](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-current-user-2?u=76281980&t=51)** Heading back to the login component, once the user successfully signs up, we want to take them to this new ProfileComponent.
>
> **[1:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-current-user-2?u=76281980&t=60)** Let's go ahead and inject the router here.
>
> **[1:08](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-current-user-2?u=76281980&t=68)** We can grab the user id from the response.
>
> **[1:15](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-current-user-2?u=76281980&t=75)** And then, use the router to navigate the user to the profile page.
>
> **[1:22](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-current-user-2?u=76281980&t=82)** That will be /profile/userid here.
>
> **[1:29](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-current-user-2?u=76281980&t=89)** Let's go ahead and start the application.
>
> **[1:33](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-current-user-2?u=76281980&t=93)** While that is compiling, head over to the [[Firebase]] console.
>
> **[1:37](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-current-user-2?u=76281980&t=97)** And you can go ahead and delete this test user account.
>
> **[1:44](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-current-user-2?u=76281980&t=104)** Also, in your developer tools, head to the application tab and go ahead and delete this object store for now.
>
> **[1:54](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-current-user-2?u=76281980&t=114)** Once that is done compiling, head over to your app again.
>
> **[1:58](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-current-user-2?u=76281980&t=118)** Let's go ahead and refresh here.
>
> **[2:01](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-current-user-2?u=76281980&t=121)** Let's create the user again.
>
> **[2:04](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-current-user-2?u=76281980&t=124)** Click on Sign Up, and now we are routed to the new profile page.
>
> **[2:09](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-current-user-2?u=76281980&t=129)** The AngularFire library allows you to easily grab ahold of the currently authenticated user.
>
> **[2:14](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-current-user-2?u=76281980&t=134)** Let's head to the ProfileComponent now.
>
> **[2:19](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-current-user-2?u=76281980&t=139)** In the constructor, first inject the AngularFireAuth service.
>
> **[2:25](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-current-user-2?u=76281980&t=145)** We'll call this afAuth, this will be the AngularFireAuth service.
>
> **[2:31](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-current-user-2?u=76281980&t=151)** Heading over to the template now, we can now display our information.
>
> **[2:38](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-current-user-2?u=76281980&t=158)** Let's have a div here, we will display this only if we have the currently authenticated user.
>
> **[2:49](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-current-user-2?u=76281980&t=169)** Since, that is an observable, we use the async type and then store that as the user variable.
>
> **[2:58](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-current-user-2?u=76281980&t=178)** Let's go ahead and grab the Name, user.displayName.
>
> **[3:09](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-current-user-2?u=76281980&t=189)** We can also grab the email, and lastly, we will grab the user id.
>
> **[3:25](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-current-user-2?u=76281980&t=205)** Heading back to our application now, we can see the information of the currently authenticated user.
>
> **[3:31](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-current-user-2?u=76281980&t=211)** To see all the available information, you can refer to the firebase documentation at this URL.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Firebase]] (2), [[User Experience (UX)|User experience]] (1), [[CLI]] (1), [[Routing]] (1)
> **Code Identifiers:** afauth (1), displayname (1)
> **Env Vars:** cli (1), url (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** template (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [User logout](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-logout-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-logout-2?u=76281980&t=0)** - [Instructor] We are now displaying the current user, but we need the ability to logout the user.
>
> **[0:05](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-logout-2?u=76281980&t=5)** Let's head first to the app component which holds the header, and add a button for the logout action.
>
> **[0:15](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-logout-2?u=76281980&t=15)** Button here of class="ui secondary button and then logout, and we'll add a click handler, that will call the logout method on a component.
>
> **[0:31](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-logout-2?u=76281980&t=31)** In here, the text for the button will be Logout.
>
> **[0:38](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-logout-2?u=76281980&t=38)** Let's go ahead and add some css to position it to the far right.
>
> **[0:46](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-logout-2?u=76281980&t=46)** The logout button will be float right, relatively positioned, and we'll adjust the position slightly.
>
> **[1:02](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-logout-2?u=76281980&t=62)** Heading over to the application, we now see the Logout button there.
>
> **[1:07](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-logout-2?u=76281980&t=67)** Let's head back to the component now and implement the logout method.
>
> **[1:12](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-logout-2?u=76281980&t=72)** Instead of injecting again the AngularFireAuth service, let's create our own wrapper authentication service in order to encapsulate some common logic.
>
> **[1:19](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-logout-2?u=76281980&t=79)** For example, in a logout action, we will need to logout using the [[Firebase]] service, and also redirect the user back to the login page.
>
> **[1:28](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-logout-2?u=76281980&t=88)** We can go ahead and generate a service using the [[CLI]].
>
> **[1:32](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-logout-2?u=76281980&t=92)** I'm going to go ahead and kill the server here.
>
> **[1:35](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-logout-2?u=76281980&t=95)** Let's go ahead and generate a service, ng g which is short for generate, s which is short for service, and I'm going to call this auth service and will be under the core folder.
>
> **[1:52](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-logout-2?u=76281980&t=112)** And we see the auth.service generated here.
>
> **[1:55](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-logout-2?u=76281980&t=115)** In this service, we will inject both the router and also the AngularFireAuth service.
>
> **[2:07](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-logout-2?u=76281980&t=127)** We'll call this afAuth, and it will be the AngularFireAuth service.
>
> **[2:13](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-logout-2?u=76281980&t=133)** Let's implement a logout method here.
>
> **[2:17](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-logout-2?u=76281980&t=137)** We will simply signout a firebase by calling this signout method here.
>
> **[2:24](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-logout-2?u=76281980&t=144)** And then route the user to the route page.
>
> **[2:31](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-logout-2?u=76281980&t=151)** Heading back now to the app component, in the constructor, we can inject our new AuthService, private auth: AuthService.
>
> **[2:50](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-logout-2?u=76281980&t=170)** In the logout method here, on the app component, we simply be a call to the logout method on our new AuthService.
>
> **[2:59](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-logout-2?u=76281980&t=179)** Let's go ahead and start application now.
>
> **[3:05](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-logout-2?u=76281980&t=185)** Heading now to application, let's refresh the page.
>
> **[3:08](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-logout-2?u=76281980&t=188)** We can see that we have a currently authenticated user, and let's test the logout button.
>
> **[3:14](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-logout-2?u=76281980&t=194)** And we redirected now to the Sign Up page.
>
> **[3:17](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-logout-2?u=76281980&t=197)** There is one issue however, as you can see, that we can still see the Logout link.
>
> **[3:23](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-logout-2?u=76281980&t=203)** Let's fix that now.
>
> **[3:24](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-logout-2?u=76281980&t=204)** We don't want to display the Logout link, if there is a current user session.
>
> **[3:29](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-logout-2?u=76281980&t=209)** Let's head back to the AuthService now, and we can add a new method, and name it isLoggedIn.
>
> **[3:38](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-logout-2?u=76281980&t=218)** And here we can simply check the AngularFireAuth service and check if there's a current user.
>
> **[3:48](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-logout-2?u=76281980&t=228)** That information will be .auth.currentUser.
>
> **[3:53](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-logout-2?u=76281980&t=233)** Heading back to the application component, let's add to the template, and we can conditionally render this with ngIf.
>
> **[4:06](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-logout-2?u=76281980&t=246)** And we can check the isLoggedIn method on our new AuthService.
>
> **[4:13](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-logout-2?u=76281980&t=253)** And now we see that the Logout button is gone.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Firebase]] (2), [[CLI]] (1)
> **Code Identifiers:** isloggedin (2), afauth (1), currentuser (1), ngif (1)
> **Definitions:** short for (2), is a  (1)
> **Env Vars:** cli (1)
> **Exercise Files:** template (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [User login](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=0)** - [Instructor] We have provided a way for users to sign up and log out, but we now need to provide a way for users to log in.
>
> **[0:07](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=7)** Let's implement a way for users to switch between a login and a signup form.
>
> **[0:12](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=12)** Let's head back now to the login component.
>
> **[0:17](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=17)** Create a new variable here called Action that will hold the types of the string Login or the string Signup.
>
> **[0:27](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=27)** And default it to the string of Login.
>
> **[0:32](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=32)** We can add two getters to easily use in our template.
>
> **[0:36](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=36)** The first one will be IsLogin and this will return true if the current action is Login.
>
> **[0:47](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=47)** The second one will be IsSignUp and this will return true if the current action is Signup.
>
> **[0:58](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=58)** Heading now to the template file, we only want to display the first and last names if the action is Signup.
>
> **[1:07](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=67)** You can use NGF here and use our new getter: IsSignUp.
>
> **[1:16](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=76)** We will wrap the bottom actions in a div with class of Actions.
>
> **[1:24](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=84)** We can move the button here.
>
> **[1:28](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=88)** And for the button text, we will simply display the action here and I will use the uppercase pipe here.
>
> **[1:41](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=101)** Let's add a link here now.
>
> **[1:44](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=104)** This will only be displayed if the current action is Login.
>
> **[1:54](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=114)** And we have a link here.
>
> **[1:59](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=119)** When the user clicks on this link, it will set the action to Signup.
>
> **[2:08](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=128)** And we will add another link.
>
> **[2:13](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=133)** This will only be displayed if the current action is Signup and, when the user clicks on this link, it will set the action to Login.
>
> **[2:27](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=147)** Let's go ahead and add some CSS to move these buttons to the right.
>
> **[2:31](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=151)** I'll go ahead and delete this style and add some styles for the div with the class of Actions.
>
> **[2:39](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=159)** And we will simply add this rule of text align to the right.
>
> **[2:48](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=168)** Let's go ahead and verify our application.
>
> **[2:50](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=170)** And now we have our two buttons here.
>
> **[2:54](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=174)** Let's go ahead and fix this input here.
>
> **[3:01](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=181)** It looks like I added the NGF only to the first name.
>
> **[3:04](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=184)** We want to add it to the container div.
>
> **[3:11](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=191)** Heading back to our application, clicking on Sign Up, displays the full form.
>
> **[3:16](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=196)** Clicking on Login displays only the email and password fields.
>
> **[3:21](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=201)** Let's head on back to the component file.
>
> **[3:24](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=204)** Here, we will update the OnSubmit method.
>
> **[3:29](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=209)** In the Try block, if the action is Signup, we'll perform the current logic.
>
> **[3:40](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=220)** Otherwise, the action is Login, so we will sign in with email and password here.
>
> **[3:50](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=230)** And we can do that by calling the SignInWithEmailAndPassword method on the Auth service.
>
> **[3:58](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=238)** We're going to declare the response variable here and delete this Const declaration.
>
> **[4:08](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=248)** And then, regardless of the action, unsuccessful login or signup, we will redirect the user to the profile route.
>
> **[4:20](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=260)** Let's head to the application now.
>
> **[4:23](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=263)** I'm going to open up the Developer Tools and check for any error messages that are logged out.
>
> **[4:30](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=270)** Let me try to log in without inputting any information.
>
> **[4:34](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=274)** We see here that [[Firebase]] is already performing client side of validation for me.
>
> **[4:42](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=282)** I will input the email only.
>
> **[4:47](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=287)** Let me try to log in.
>
> **[4:50](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=290)** And now it's throwing an error because there is no password here.
>
> **[4:55](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=295)** Let me go ahead and input a wrong password.
>
> **[5:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=300)** We can see that it actually goes ahead and makes the request, but we get back the error message that the password is invalid.
>
> **[5:07](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=307)** We should display this error message to the user.
>
> **[5:11](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=311)** Let's head back to the template file and, just above the form, we can display the error message.
>
> **[5:16](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=316)** We'll have a div with class of UI Negative Message.
>
> **[5:25](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=325)** And remember these are all classes from the semantic UI framework.
>
> **[5:28](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=328)** And we only want to display this if there is an error available.
>
> **[5:34](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=334)** In here, we will simply display the error message.
>
> **[5:38](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=338)** We also want our application to load the semantic UI styles to display these messages, so let's add the corresponding style files in [[Angular]].[[JSON]].
>
> **[5:50](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=350)** We can add a new line here under Styles and the specific module will be Semantic UI Message and the file will be Message.
>
> **[6:03](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=363)** I'm going to stop the application now using Ctrl + C and start it up again.
>
> **[6:09](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=369)** While that is loading, go ahead and head back to the login component and we want to store this specific error message.
>
> **[6:20](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=380)** It will be of type String.
>
> **[6:22](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=382)** When the user first tries to log in or sign up, we will reset this error message to null.
>
> **[6:30](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=390)** And if there is any error message, we will store this in the Error variable.
>
> **[6:39](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=399)** Let's head back to the application now.
>
> **[6:41](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=401)** Let me try to log in and we can see the error message is displayed here to the user.
>
> **[6:50](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=410)** If I try to log in without a password, I can see that the error message changes.
>
> **[6:55](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=415)** If I put in a wrong password, I can see the error message here as well.
>
> **[7:02](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=422)** Let me try to log in now with the correct password.
>
> **[7:08](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=428)** And I'm redirected back to the profile page.
>
> **[7:10](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=430)** I can go ahead and log out and I am redirected back to the root page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Firebase]] (1), [[Angular]] (1), [[JSON]] (1)
> **Env Vars:** ngf (2), css (1)
> **Exercise Files:** template (3)
> **File Paths:** angular.json (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Using Angular route guards](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=0)** - [Instructor] Before wrapping up our work on authentication, we need to address a couple of issues.
>
> **[0:05](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=5)** Let me show you what I mean.
>
> **[0:07](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=7)** I'm going to go ahead and log in.
>
> **[0:12](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=12)** Once I log in, I am redirected to the profile route.
>
> **[0:16](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=16)** Let me grab this URL and copy it, and I'm going to log out.
>
> **[0:21](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=21)** On pasting this URL and navigating to it, you can see that I am able to go to this route.
>
> **[0:28](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=28)** Nothing is displayed because there isn't a current authenticated user.
>
> **[0:32](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=32)** We should prevent the user from being able to go to this route.
>
> **[0:36](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=36)** There's also a second issue.
>
> **[0:39](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=39)** Let me go ahead and log in again.
>
> **[0:44](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=44)** Once logged in, I am able to go to the root route, and you can see the logout button appears.
>
> **[0:51](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=51)** In this scenario, we should redirect the user back to the profile page, and not allow them to visit the root page, which displays the login form.
>
> **[1:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=60)** Let's tackle the first issue.
>
> **[1:02](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=62)** The [[Angular]] router provides a robust way to prevent users from going to specific routes, by using what's called a route guard.
>
> **[1:10](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=70)** Detailed information is provided at this link.
>
> **[1:13](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=73)** Let's go to our application now, and to our [[Routing]] module, where we define the application's routes.
>
> **[1:22](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=82)** We will import the AngularFireAuthGuard, which provides a prebuilt, canActivate router guard using the AngularFireAuth service.
>
> **[1:35](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=95)** And we will import this from Angular/fire/auth-guard.
>
> **[1:46](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=106)** To the profile route, we can add the canActivate guard, and use this AngularFireAuthGuard.
>
> **[1:57](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=117)** By default, unauthenticated users will not be permitted to navigate to this protected route.
>
> **[2:06](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=126)** Seems like this was duplicated here, let's go ahead and fix that.
>
> **[2:10](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=130)** And we will also need to add this AuthGuard to the providers in the main application module.
>
> **[2:21](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=141)** Let's go ahead and log in now.
>
> **[2:26](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=146)** First, let me log out, refresh the page, and let's try to log in.
>
> **[2:34](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=154)** Let me grab this URL, log out, now we'll try to visit this URL.
>
> **[2:41](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=161)** You can see that the user is prevented from visiting that route, but then the user is left in some intermediate stage.
>
> **[2:48](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=168)** Instead, the user should be redirected back to the login page.
>
> **[2:52](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=172)** Let's head back to our application routing module.
>
> **[2:58](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=178)** We can customize the behavior of this AuthGuard by passing an RXJS pipe through the route data's AuthGuard pipe.
>
> **[3:08](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=188)** Let's go ahead and import the "redirect unauthorized to" pipe from the AngularFireAuthGuard module.
>
> **[3:17](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=197)** We can use that helper to create a custom pipe.
>
> **[3:22](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=202)** Let's name this redirectUnauthorizedToLogin,
>
> **[3:34](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=214)** and we will use this helper, and simply return the user back to the root page.
>
> **[3:42](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=222)** Finally, we can add this pipe to our route data.
>
> **[3:48](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=228)** This would be an object with the property of authGuardPipe, which will be used by [[Firebase]].
>
> **[3:58](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=238)** And we will use this custom pipe.
>
> **[4:03](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=243)** Let's go ahead and log in now.
>
> **[4:06](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=246)** Let me grab this URL, log out, and when I try to navigate to that URL, I am redirected back to the login page.
>
> **[4:15](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=255)** Let's address a second issue now.
>
> **[4:17](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=257)** When the user is logged in, we shouldn't allow them to go to the root page and view the login form.
>
> **[4:22](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=262)** We should redirect them to the profile page.
>
> **[4:27](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=267)** We can create a new pipe called redirectLoggedInToProfile
>
> **[4:36](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=276)** and then use the map operator to transform an optional user to a boolean or array.
>
> **[4:48](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=288)** If there is a user, we can redirect them to the profile page.
>
> **[4:59](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=299)** Otherwise, return true to allow the route.
>
> **[5:09](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=309)** And let's go ahead and import this operator.
>
> **[5:14](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=314)** From rxjs/operators.
>
> **[5:29](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=329)** To the login route, we will add the canActivate AuthGuard, and we will use the AngularFireAuthGuard here, and we'll provide the data for the authGuardPipe property.
>
> **[5:50](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=350)** We will provide this custom operator that we just created.
>
> **[5:54](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=354)** Let's go ahead and log in now.
>
> **[5:58](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=358)** When I'm logged in, if I request the root page, you can see that I am redirected back to the profile page.
>
> **[6:05](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=365)** There's one slight issue with the AuthGuard for the profile route, however, in that if a user knows someone else's user ID, they will be able to go to that route, and we want to prevent that.
>
> **[6:16](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=376)** Let me demonstrate this.
>
> **[6:17](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=377)** When we are logged in, we can try to go to another page, say, the user ID is 123.
>
> **[6:26](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=386)** Even though we are using the user ID from the current session for security purposes, we want to redirect the user to the URL which pertains to them.
>
> **[6:36](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=396)** Let's create another pipe, and call it onlyAllowSelf.
>
> **[6:45](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=405)** It will take a next which is the route, and we want to use the map operator to transform an optional user to a boolean or an array.
>
> **[7:01](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=421)** If there's a user and the user ID in the route, which we can access with next.params.id, equals the user of the currently authenticated user, then we can return true.
>
> **[7:23](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=443)** Otherwise, we will return the user back to the root page.
>
> **[7:32](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=452)** And we can replace this custom pipe with onlyAllowSelf.
>
> **[7:40](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=460)** So now I'm back in the application, if I try to go to another user ID, I am redirected back to the profile page that pertains to the authenticated user.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (2), [[Routing]] (2), [[Firebase]] (1)
> **UI Navigation:** go to (8), navigate to (2)
> **Code Identifiers:** canactivate (3), authguardpipe (2), onlyallowself (2), redirectunauthorizedtologin (1), redirectloggedintoprofile (1)
> **Env Vars:** url (7), rxjs (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. Storing and Syncing Data with Firebase Cloud Firestore

[↑ Back to Table of Contents](#table-of-contents)

#### [Cloud Firestore intro](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-firestore-intro-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-firestore-intro-2?u=76281980&t=0)** - [Instructor] I sure hope you have already been impressed with the powerful features that [[Firebase]] provides.
>
> **[0:05](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-firestore-intro-2?u=76281980&t=5)** We have easily added authentication to our app that otherwise would have taken a really long time to implement ourselves.
>
> **[0:12](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-firestore-intro-2?u=76281980&t=12)** But now it's time to start working with data.
>
> **[0:14](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-firestore-intro-2?u=76281980&t=14)** Cloud Firestore is a flexible, scalable, [[NoSQL]] cloud database to store and sync data for client and server side development.
>
> **[0:23](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-firestore-intro-2?u=76281980&t=23)** This data can be accessed directly via native, as the case.
>
> **[0:27](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-firestore-intro-2?u=76281980&t=27)** It ships the comprehensive set of security rules, so you can access your database without needing to set up your own server.
>
> **[0:33](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-firestore-intro-2?u=76281980&t=33)** And also, it will allow us to sync data across devices.
>
> **[0:38](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-firestore-intro-2?u=76281980&t=38)** The Cloud's Firestore model is document oriented.
>
> **[0:41](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-firestore-intro-2?u=76281980&t=41)** So there aren't any tables or rows like in a [[SQL]] database.
>
> **[0:45](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-firestore-intro-2?u=76281980&t=45)** Instead, we store data in documents, which are then organized into collections.
>
> **[0:51](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-firestore-intro-2?u=76281980&t=51)** Let's start with the document.
>
> **[0:52](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-firestore-intro-2?u=76281980&t=52)** It would be the unit of storage when working with Cloud Firestore.
>
> **[0:57](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-firestore-intro-2?u=76281980&t=57)** It is identified by name and it contains field value pairs.
>
> **[1:02](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-firestore-intro-2?u=76281980&t=62)** The values support many data types, Boolean, number, string, geopoint, binary blob, and timestamp.
>
> **[1:09](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-firestore-intro-2?u=76281980&t=69)** You can also use arrays or nested objects, called maps, to structure data within a document.
>
> **[1:17](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-firestore-intro-2?u=76281980&t=77)** You can also organize more complex data as shown here.
>
> **[1:19](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-firestore-intro-2?u=76281980&t=79)** You can see that it resembles a plain [[JavaScript]] object.
>
> **[1:24](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-firestore-intro-2?u=76281980&t=84)** Now let's talk about collections.
>
> **[1:26](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-firestore-intro-2?u=76281980&t=86)** Documents are organized into collections.
>
> **[1:29](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-firestore-intro-2?u=76281980&t=89)** You can imagine that we have a Users collection for all of our registered users.
>
> **[1:34](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-firestore-intro-2?u=76281980&t=94)** When working with Cloud Firestore in our app, we will be able to both create a reference directly to a document or directly to a collection.
>
> **[1:45](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-firestore-intro-2?u=76281980&t=105)** It is also worth mentioning that you can organize your data into sub-collections as needed, as shown in this diagram.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Firebase]] (1), [[NoSQL]] (1), [[SQL]] (1), [[JavaScript]] (1)
> **Env Vars:** sql (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Cloud Firestore setup](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-firestore-setup-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-firestore-setup-2?u=76281980&t=0)** - [Narrator] In this particular chapter, we will be setting up a users collection and also allow the user to update their profile data.
>
> **[0:08](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-firestore-setup-2?u=76281980&t=8)** Now, when using email and password authentication in [[Firebase]], that data is actually securely stored separately.
>
> **[0:15](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-firestore-setup-2?u=76281980&t=15)** A major reason is of course, to prevent any accidental user leaks and also allow complete flexibility with how we store our user data in Firebase.
>
> **[0:25](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-firestore-setup-2?u=76281980&t=25)** This means that it is impossible currently to retrieve a list of users, nor can we request from Firebase authentication the data for a particular user.
>
> **[0:36](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-firestore-setup-2?u=76281980&t=36)** We will be creating our own users collection in Cloud Firestore, where users will update their profile data.
>
> **[0:42](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-firestore-setup-2?u=76281980&t=42)** Let's first start by cleaning up any test users.
>
> **[0:45](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-firestore-setup-2?u=76281980&t=45)** Heading over to the authentication tab, can go ahead and delete this test user.
>
> **[0:52](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-firestore-setup-2?u=76281980&t=52)** Now we can go ahead to the database tab and we will create a new database.
>
> **[0:58](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-firestore-setup-2?u=76281980&t=58)** We will leave it in locked mode.
>
> **[1:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-firestore-setup-2?u=76281980&t=60)** Currently any read or writes will be denied, but we will be updating that.
>
> **[1:06](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-firestore-setup-2?u=76281980&t=66)** Click, next and you will choose a location.
>
> **[1:09](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-firestore-setup-2?u=76281980&t=69)** This location setting is your project's default, [[Google Cloud Platform (GCP)|Google Cloud platform]] resource location.
>
> **[1:15](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-firestore-setup-2?u=76281980&t=75)** The provided default should be okay.
>
> **[1:17](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-firestore-setup-2?u=76281980&t=77)** Click done and it will provision your Cloud Firestore.
>
> **[1:20](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-firestore-setup-2?u=76281980&t=80)** It may take a few moments.
>
> **[1:25](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-firestore-setup-2?u=76281980&t=85)** And that's it, we are ready to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Firebase]] (3), [[Google Cloud Platform (GCP)|Google cloud platform]] (1)
> **Definitions:** means that (1)
> **Speakers:** - [narrator] (1)

#### [Deploying security rules](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=0)** In the [[Firebase]] console for Cloud Firestore, you can go ahead and click on the Rules tab to view the currently associated security rules.
>
> **[0:08](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=8)** This block here tells us that the security rules will be for the Cloud Firestore service.
>
> **[0:15](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=15)** And the first match rule is actually the root of your database.
>
> **[0:19](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=19)** The second match rule tells it to match any document.
>
> **[0:24](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=24)** So in totality, this is saying for any document in my database, I allow read and write if false, which obviously means never.
>
> **[0:33](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=33)** You can always change the security rules on the Firebase console, but we will actually be using the Firebase [[CLI]] to deploy these rules.
>
> **[0:40](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=40)** It has the advantage since any changes in rules can be tracked via [[Git]].
>
> **[0:44](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=44)** We have already installed the Firebase CLI.
>
> **[0:47](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=47)** If you haven't, go ahead and install it now.
>
> **[0:50](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=50)** Heading back to our terminal, you can install the Firebase tools using mpm install -g firebase-tools.
>
> **[1:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=60)** Then make sure to sign in and test your Firebase CLI by using firebase login.
>
> **[1:09](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=69)** And list your Firebase projects using firebase projects:list.
>
> **[1:15](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=75)** We will now initialize a firebase project.
>
> **[1:18](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=78)** Since we have already created a project in the Firebase console, we will simply associate this project directory with the Firebase project.
>
> **[1:26](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=86)** Let's go ahead and do that now.
>
> **[1:31](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=91)** We can use the command firebase init.
>
> **[1:35](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=95)** Use your arrow keys to choose a Firestore, hit the space bar to select it and then click enter.
>
> **[1:42](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=102)** We will be setting up other features later.
>
> **[1:46](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=106)** Choose "use an existing project."
>
> **[1:49](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=109)** And then select the Firebase project you've been working with.
>
> **[1:52](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=112)** In my case, it is the first one listed here.
>
> **[1:56](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=116)** It will then ask you a series of questions, specifically what you would like to name the different files associated with Cloud Firestore.
>
> **[2:03](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=123)** The default names are perfectly fine.
>
> **[2:06](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=126)** Once that is done, let's head over to Vision Studio Code and see the newly created files.
>
> **[2:12](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=132)** And we have four new files.
>
> **[2:14](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=134)** We have the firebaserc, which is a file that stores your project.
>
> **[2:19](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=139)** Firebase.[[JSON]], a configuration file that lists your project configuration.
>
> **[2:25](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=145)** For now, it is indicating the files used for our Firestore rules and for our Firestore indexes.
>
> **[2:32](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=152)** The indexes.json file includes any indexes for our Cloud Firestore.
>
> **[2:37](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=157)** We won't be working with this.
>
> **[2:39](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=159)** And finally, the firestore.rules file are the security rules for our database.
>
> **[2:45](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=165)** We'll be modifying this and deploying our rules.
>
> **[2:48](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=168)** Note that these are the same rules that are currently in the Firebase console.
>
> **[2:52](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=172)** Head over to the Vision Studio Code extensions now.
>
> **[2:55](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=175)** And we will search for and install an extension that will help with our Firestore rules.
>
> **[3:03](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=183)** You can search for "firebase security rules."
>
> **[3:09](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=189)** This is a specific one that I'm looking for.
>
> **[3:12](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=192)** Now that it's installed, I can head back now to my security rules, and I see that syntax highlighting is added to my security rules.
>
> **[3:21](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=201)** Let's modify this file now and change the match condition.
>
> **[3:27](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=207)** We'll be working with the users collection, and each user will have a document for it's profile data keyed by the user ID.
>
> **[3:37](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=217)** We want to allow both read and write to that location only if that ID matches a currently authenticated user.
>
> **[3:49](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=229)** So you can specify allow read if request.auth.uid (keyboard clicks) is equal to the user ID.
>
> **[4:02](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=242)** And we can specify a similar rule for write.
>
> **[4:07](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=247)** This means that only authenticated users will be able to read or write to this collection.
>
> **[4:12](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=252)** And a user will be able to read and write only from his or her personal document in this collection.
>
> **[4:19](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=259)** Let's now go ahead and deploy these security rules.
>
> **[4:22](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=262)** Open your terminal, and we can deploy these security rules using firebase deploy and specify the only flag firestore:rules.
>
> **[4:39](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=279)** It tells me that the deploy's complete, we can head over to the Firebase console, refresh here, and see that my security rules have been updated.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Firebase]] (20), [[CLI]] (3), [[JSON]] (2), [[Git]] (1)
> **Prerequisites:** install (4)
> **Env Vars:** cli (3)
> **Definitions:** is a  (2), means that (1)
> **File Paths:** firebase.json (1), indexes.json (1)
> **CLI Commands:** git (1), make (1)
> **Tools:** terminal (2)
> **UI Navigation:** click on (1), select the (1)

#### [Creating documents](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=0)** - [Instructor] Now that we have deployed our security rules we can start writing and updating data in a collection.
>
> **[0:07](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=7)** We'll be creating our own user's collection in Cloud or Firestore, where users will update their profile data.
>
> **[0:12](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=12)** The first thing we need to do is to import the [[Angular]] Firestore module, in our main angular module and add it to the imports.
>
> **[0:21](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=21)** We will import AngularFirestoreModule, from angular/fire/firestore
>
> **[0:36](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=36)** and then we add this module to the imports here.
>
> **[0:40](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=40)** Heading back now to the login component, once the user successfully signs up, we'll create a document for that user and the user's collection.
>
> **[0:50](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=50)** And then, route the new user to the profile page.
>
> **[0:53](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=53)** Let's first inject a custom auth service that we have implemented in our app.
>
> **[1:01](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=61)** Private auth and we import the auth service.
>
> **[1:12](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=72)** After updating the user profile with a display name, we will call a method on this auth service.
>
> **[1:22](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=82)** And we will call this create user document.
>
> **[1:27](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=87)** Let's go ahead and implement that method now.
>
> **[1:30](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=90)** We should first create an interface to model our profile data.
>
> **[1:35](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=95)** Under the core folder, create a file and name it user-Profile.model.ts.
>
> **[1:48](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=108)** This will be an interface named UserProfile.
>
> **[1:53](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=113)** And it will have a few properties, the user ID, the name, email, the address, city, state, the zip code, the phone, the specialty, and also the IP address.
>
> **[2:23](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=143)** Let's head over now to the auth service.
>
> **[2:26](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=146)** And we will implement the createUserDocument method.
>
> **[2:32](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=152)** It will consist of three steps.
>
> **[2:35](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=155)** We get the current user.
>
> **[2:39](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=159)** we then create the object with new data.
>
> **[2:45](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=165)** Then finally, we write to Cloud Firestore.
>
> **[2:54](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=174)** We can grab the current authenticated user from the angular fire auth service.
>
> **[3:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=180)** This.afAuth.auth and then grab the current user.
>
> **[3:07](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=187)** Next, we can create the user model.
>
> **[3:11](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=191)** Let's create user profile object.
>
> **[3:15](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=195)** And then we'll be of the user profile type.
>
> **[3:24](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=204)** Let's go ahead and import that now.
>
> **[3:26](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=206)** We will import the user profile from the core folder and the user profile model.
>
> **[3:41](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=221)** The U-I-D will be the user.uid we go ahead and grab the email, and also the name.
>
> **[3:54](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=234)** For now, all the other properties will be empty.
>
> **[3:59](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=239)** And so we need the address, the city, the state, the zip, phone, specialty, and lastly the IP address.
>
> **[4:16](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=256)** It may seem a bit redundant to store the user ID email and name, if it's information already stored in the Fire-based authentication service.
>
> **[4:24](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=264)** As mentioned earlier, when using email and password authentication, that data is actually securely stored separately.
>
> **[4:32](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=272)** A major reason is to prevent any accidental user leaks.
>
> **[4:35](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=275)** and also allows complete flexibility with how we store our user and fire base.
>
> **[4:40](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=280)** This means that it currently isn't possible to retrieve a list of users.
>
> **[4:45](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=285)** Nor can we request, from fire-based authentication, the data for a particular user.
>
> **[4:49](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=289)** So we will be storing user data in a separate database.
>
> **[4:53](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=293)** After creating the model, we can write to the Cloud Firestore at the path for that user specific user ID.
>
> **[5:05](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=305)** Let's first inject the angular firestore service.
>
> **[5:15](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=315)** This will be import angular firestore from angular, fire, firestore.
>
> **[5:32](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=332)** Let me replace this in the constructor.
>
> **[5:40](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=340)** Now we can get a reference to a specific document, at the users/user.useridpath
>
> **[5:56](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=356)** and once we get a reference to that document we can set the data at that location.
>
> **[6:05](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=365)** And we will write this user profile object.
>
> **[6:09](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=369)** It is important to know that Cloud Firestore creates collections and documents implicitly.
>
> **[6:14](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=374)** The first time you add data to the document, you don't need to explicitly create collections or documents.
>
> **[6:20](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=380)** Let's go ahead and start our application.
>
> **[6:28](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=388)** Once that is done, let's head to our application.
>
> **[6:37](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=397)** And just so we can visually see, I'm going to open each window side by side.
>
> **[6:45](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=405)** I'm going to go ahead and create a new user.
>
> **[6:54](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=414)** On the Firebased Database, I will refresh.
>
> **[6:59](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=419)** And you can see that the new user document has been created.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (7)
> **Code Identifiers:** createuserdocument (1), afauth (1)
> **File Paths:** user-profile.model.ts (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Displaying user data](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-user-data-3?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-user-data-3?u=76281980&t=0)** - [Instructor] Now that we have written our user document, in our profile component let's display the newly created information.
>
> **[0:08](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-user-data-3?u=76281980&t=8)** Heading over to Visual Studio Code, head over to the profile component.
>
> **[0:15](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-user-data-3?u=76281980&t=15)** We will first need to import a couple of things.
>
> **[0:19](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-user-data-3?u=76281980&t=19)** Import the AngularFirestoreDocument and also AngularFirestore from [[Angular]]/fire/firestore.
>
> **[0:38](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-user-data-3?u=76281980&t=38)** And I'm going to fix this typo here.
>
> **[0:41](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-user-data-3?u=76281980&t=41)** We will also need to import Observable from RXJS.
>
> **[0:51](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-user-data-3?u=76281980&t=51)** We will need both a reference to the document so let's create that now.
>
> **[1:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-user-data-3?u=76281980&t=60)** Call this observable itemDoc and it will be of type AngularFirestoreDocument.
>
> **[1:09](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-user-data-3?u=76281980&t=69)** The type will be the UserProfile type, which is a model that we previously created.
>
> **[1:15](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-user-data-3?u=76281980&t=75)** We can go ahead and import that now.
>
> **[1:18](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-user-data-3?u=76281980&t=78)** And the actual item will be an Observable of type UserProfile.
>
> **[1:26](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-user-data-3?u=76281980&t=86)** Next, we will inject the AngularFirestore service.
>
> **[1:31](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-user-data-3?u=76281980&t=91)** Public afs AngularFirestore.
>
> **[1:38](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-user-data-3?u=76281980&t=98)** And then in the on knit hook we can get a reference to the document and the observable.
>
> **[1:46](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-user-data-3?u=76281980&t=106)** The item document will be a reference to the document of type UserProfile and then we can specify the path here.
>
> **[1:57](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-user-data-3?u=76281980&t=117)** Our users collection is at users and this specific document will be at the user ID.
>
> **[2:08](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-user-data-3?u=76281980&t=128)** And we can get the current user and then grab the user ID.
>
> **[2:19](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-user-data-3?u=76281980&t=139)** And next we will get an observable to the item by calling the value changes method on the document reference.
>
> **[2:30](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-user-data-3?u=76281980&t=150)** This will allow us to watch for any changes in the user document.
>
> **[2:35](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-user-data-3?u=76281980&t=155)** Heading now to the template, let's just display the [[JSON]] for now.
>
> **[2:46](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-user-data-3?u=76281980&t=166)** We will use the ngif and use the async pipe since it's an observable and we'll store this locally as userProfile.
>
> **[2:58](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-user-data-3?u=76281980&t=178)** We can put a paragraph here.
>
> **[3:02](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-user-data-3?u=76281980&t=182)** And then simply type the object into JSON pipe.
>
> **[3:09](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-user-data-3?u=76281980&t=189)** Let's head back to our page and you can see that the user document object is displayed now.
>
> **[3:16](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-user-data-3?u=76281980&t=196)** I would like to quickly show you the real time feature.
>
> **[3:19](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-user-data-3?u=76281980&t=199)** In our Firestore dashboard, you can directly edit any data you see here.
>
> **[3:26](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-user-data-3?u=76281980&t=206)** Let me go ahead and change a field here.
>
> **[3:34](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-user-data-3?u=76281980&t=214)** And change that to Eric O.
>
> **[3:38](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-user-data-3?u=76281980&t=218)** And you can see here that the data is automatically updated.
>
> **[3:42](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-user-data-3?u=76281980&t=222)** When I edit a field, you should see that data automatically update in the UI.
>
> **[3:46](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-user-data-3?u=76281980&t=226)** That is one of the best features of Fire based cloud store.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (2), [[Angular]] (1)
> **Env Vars:** json (2), rxjs (1)
> **Code Identifiers:** itemdoc (1), userprofile (1)
> **Tools:** visual studio (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Updating user documents](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=0)** - [Instructor] We now need to provide a way for a user to edit their profile data.
>
> **[0:05](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=5)** Head back to Visual Studio Code, and open the exercise files.
>
> **[0:09](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=9)** Look in resources, and open the folder for this video, 03-06.
>
> **[0:15](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=15)** You can grab these files, and replace them with the current template and CSS files in the profile component.
>
> **[0:25](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=25)** Heading back to our application, you should now see the form.
>
> **[0:28](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=28)** Let me go ahead and expand this.
>
> **[0:32](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=32)** We now need to make one small change, in regards to to where we grab the current user ID.
>
> **[0:38](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=38)** In the profile component, instead of grabbing the user ID from the current authenticated user, we will use the ID from the route.
>
> **[0:45](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=45)** This will become useful later, when we have an admin user that is requesting data for a particular user.
>
> **[0:52](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=52)** In the constructor, inject the ActivatedRoute.
>
> **[0:59](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=59)** Let's declare a variable to hold the user ID, and that will be of type string.
>
> **[1:06](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=66)** And then in the constructor, we can go ahead and set this variable.
>
> **[1:11](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=71)** We will use the route snapshot, then use the paramMap to get the ID.
>
> **[1:22](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=82)** The item document should now reference this user ID.
>
> **[1:28](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=88)** Let's connect our form now with our [[Angular]] model.
>
> **[1:34](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=94)** We have the item observable, so we only want to display the form once we have this information.
>
> **[1:43](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=103)** We have the item, and then we use the async pipe, and we can store that locally as userProfile.
>
> **[1:52](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=112)** Next, we want to grab the exported ngForm directive, and save it to a local variable called profileForm.
>
> **[2:02](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=122)** And then, add a submit event, and pass in the profile form as an argument.
>
> **[2:14](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=134)** Lastly, we want to add a class of loading, to let the user know our app is performing some work.
>
> **[2:24](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=144)** We then want to populate the form fields with our data, and we can do that by using the ngModel directive.
>
> **[2:31](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=151)** We are storing the user document as a user profile, so we can use that here.
>
> **[2:39](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=159)** We will use the ngModel directive, and assign that to the userProfile.name here.
>
> **[2:46](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=166)** We will do that for the [[Representational State Transfer (REST)|rest]] of the inputs as well.
>
> **[2:53](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=173)** We have the lastName here.
>
> **[2:57](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=177)** That should actually be the email.
>
> **[3:03](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=183)** The address, city,
>
> **[3:12](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=192)** state, the zip,
>
> **[3:23](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=203)** the phone, the user specialty,
>
> **[3:32](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=212)** and lastly, the user's IP address.
>
> **[3:40](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=220)** Heading back to our application, we can see that the user information is displaying now.
>
> **[3:46](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=226)** For now, we only have the name and the email address.
>
> **[3:50](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=230)** Let's implement the onsubmit method now.
>
> **[3:56](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=236)** First, let's create two local variables, the first one will be the loading variable, which will default to false.
>
> **[4:02](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=242)** And then, a variable to store any errors.
>
> **[4:07](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=247)** The onsubmit method will be async.
>
> **[4:12](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=252)** And here, we will get the ngForm.
>
> **[4:17](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=257)** We will first set the loading variable to true, then we will use the structuring to grab all the values.
>
> **[4:25](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=265)** We can grab the email, the name, the address, the city, state, zip, the IP, the phone, and the specialty.
>
> **[4:42](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=282)** And we will grab these values from the form using the getRawValue method.
>
> **[4:50](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=290)** This retrieves all of the values of the form, regardless of the disabled status.
>
> **[4:56](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=296)** The next step will be to create a userProfile object.
>
> **[5:05](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=305)** It will contain the user ID, which is the current user ID from the route, and then it will contain all of these values.
>
> **[5:19](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=319)** In a try cache block, we will then call a method on our AuthService.
>
> **[5:28](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=328)** We will call this method updateUserDocument, and it will use the userProfile object that we just created.
>
> **[5:36](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=336)** If there are any errors, we will catch the error, we will log it to the console, and then store that error in our variable.
>
> **[5:50](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=350)** Finally, we will set the loading variable to false.
>
> **[5:54](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=354)** Let's go ahead and implement this updateUserDocument method now.
>
> **[6:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=360)** This will actually be in the AuthService, which we need to inject here now.
>
> **[6:07](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=367)** I will put all of these injected services in a new line.
>
> **[6:15](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=375)** And we can inject now the AuthService.
>
> **[6:22](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=382)** Let's head to that service now.
>
> **[6:27](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=387)** We have a method here, updateUserDocument.
>
> **[6:34](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=394)** The argument will be userProfile, of type UserProfile.
>
> **[6:38](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=398)** And this method will actually be pretty simple.
>
> **[6:41](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=401)** Here, we will return the promised return by calling the update method on that document.
>
> **[6:50](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=410)** So we will get a reference to that user document,
>
> **[6:58](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=418)** and then we will call the update method.
>
> **[7:04](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=424)** Let's head to our application now.
>
> **[7:06](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=426)** I will go ahead and put the application and the [[Firebase]] console side by side, so you can see the data updated in real time.
>
> **[7:14](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=434)** I would like to remind you that in the application code under profiles, there's sample data that you could use.
>
> **[7:23](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=443)** I will go ahead and grab the address from here.
>
> **[7:28](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=448)** The city, the state, the zip, the phone number, specialty will be intelligence offer, and then the IP address.
>
> **[7:45](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=465)** And then click submit.
>
> **[7:48](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=468)** Our Firebase data doesn't seem to be updating, let's open up the developer tools, the console, and check for any errors.
>
> **[7:54](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=474)** And I can see an error here.
>
> **[7:56](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=476)** Unsupported field value undefined, found in field email.
>
> **[7:59](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=479)** It seems that I am setting the email as undefined.
>
> **[8:02](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=482)** Let's double-check our template.
>
> **[8:06](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=486)** I'm using ngModel here, and looks like I need to update the name attribute here to email, and also the name to simply name.
>
> **[8:18](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=498)** Let's head back to our application now.
>
> **[8:21](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=501)** And I will fill out the form again.
>
> **[8:25](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=505)** Let's grab the address, the city, the state, the zip,
>
> **[8:38](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=518)** the phone, the specialty was intelligence officer, and also the IP address.
>
> **[8:45](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=525)** And now we can click submit.
>
> **[8:48](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=528)** Now we can see the data was updated in our Firebase document.
>
> **[8:52](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=532)** I can refresh the page, and that data has persisted.
>
> **[8:57](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=537)** I can also change the name here, and click update.
>
> **[9:05](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=545)** And I will automatically see that data updated in the UI.
>
> **[9:09](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=549)** You've done great work, you are well on your way to completing a serverless app built with Firebase.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Firebase]] (4), [[Angular]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Code Identifiers:** userprofile (5), ngmodel (3), updateuserdocument (3), ngform (2), parammap (1)
> **Exercise Files:** template (2), exercise files (1)
> **UI Navigation:** open the (2)
> **CLI Commands:** make (1)
> **Env Vars:** css (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)


### 4. Storing Files with Firebase Cloud Storage

[↑ Back to Table of Contents](#table-of-contents)

#### [Cloud Storage setup](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-setup-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-setup-2?u=76281980&t=0)** - [Instructor] We have used [[Firebase]] Cloud Store for storing data and now we will move onto another great service on Firebase, [[Cloud Storage]].
>
> **[0:09](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-setup-2?u=76281980&t=9)** Cloud Storage is a perfect solution to store and retrieve user generated files, like images, audio, and video without server side code.
>
> **[0:17](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-setup-2?u=76281980&t=17)** It will be very easy to set up and use.
>
> **[0:20](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-setup-2?u=76281980&t=20)** Let's get started.
>
> **[0:21](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-setup-2?u=76281980&t=21)** In your Firebase console on the left hand navigation, click on Storage and then click on the button that says Get Started.
>
> **[0:30](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-setup-2?u=76281980&t=30)** By default, only authenticated users will be able to read and write.
>
> **[0:33](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-setup-2?u=76281980&t=33)** We will be modifying this by deploying updated security rules using the Firebase [[CLI]].
>
> **[0:39](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-setup-2?u=76281980&t=39)** Click on Next and then click on Done to set up Cloud Storage.
>
> **[0:47](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-setup-2?u=76281980&t=47)** We are then taken to the Cloud Storage dashboard where you have the ability to upload files manually and also change the security rules.
>
> **[0:56](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-setup-2?u=76281980&t=56)** Before switching over to our app, we need to grab the storage bucket location for our environment configuration.
>
> **[1:02](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-setup-2?u=76281980&t=62)** Head over to the Project Settings, down to Apps, and the click on the Config radio button.
>
> **[1:11](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-setup-2?u=76281980&t=71)** Then, grab the value for the storage bucket.
>
> **[1:15](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-setup-2?u=76281980&t=75)** Go ahead and copy that.
>
> **[1:17](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-setup-2?u=76281980&t=77)** Head over now to your app.
>
> **[1:19](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-setup-2?u=76281980&t=79)** Open up the Environments file and update the value for the storage bucket.
>
> **[1:25](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-setup-2?u=76281980&t=85)** Next, we want to set up our app so that we can deploy updated security rules using the CLI.
>
> **[1:30](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-setup-2?u=76281980&t=90)** I'm going to open up my terminal here and you can do that using firebase init.
>
> **[1:37](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-setup-2?u=76281980&t=97)** I will go ahead and choose Storage.
>
> **[1:41](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-setup-2?u=76281980&t=101)** Using your arrow keys hit the Spacebar and then click Enter.
>
> **[1:45](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-setup-2?u=76281980&t=105)** The default file name should be fine.
>
> **[1:48](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-setup-2?u=76281980&t=108)** We can see now that the firebase.[[JSON]] file has been updated and a new file, storage.rules, was created.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Firebase]] (6), [[Cloud Storage]] (4), [[CLI]] (2), [[JSON]] (1)
> **UI Navigation:** click on (5)
> **Prerequisites:** set up (3)
> **Env Vars:** cli (2)
> **File Paths:** firebase.json (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Cloud Storage security rules](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-security-rules-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-security-rules-2?u=76281980&t=0)** - [Male Narrator] As of now, any authenticated user will be able to upload files.
>
> **[0:04](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-security-rules-2?u=76281980&t=4)** While this may work for many applications, in our specific scenario, users will be uploading their profile image at a specific location in our storage bucket.
>
> **[0:13](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-security-rules-2?u=76281980&t=13)** We only want that user to have read and write access to that location.
>
> **[0:17](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-security-rules-2?u=76281980&t=17)** We will also be working on an Atom interface to allow a user with an administrator role to access this as well.
>
> **[0:24](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-security-rules-2?u=76281980&t=24)** We'll be uploading the user images to a specific path to the users ID so we can change the match location.
>
> **[0:33](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-security-rules-2?u=76281980&t=33)** Match, forward slash users, the user ID, and then the file name.
>
> **[0:41](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-security-rules-2?u=76281980&t=41)** In addition, we want to allow read and write to that location if the authenticated user matches that ID.
>
> **[0:48](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-security-rules-2?u=76281980&t=48)** This will prevent a user from writing to a location that doesn't belong to that user.
>
> **[0:53](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-security-rules-2?u=76281980&t=53)** We can do that by checking the request.auth.uid and check that that matches the user ID of the location that they are trying to write to.
>
> **[1:06](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-security-rules-2?u=76281980&t=66)** We also want to enforce a couple of other rules.
>
> **[1:11](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-security-rules-2?u=76281980&t=71)** In our application, we don't want the user to upload an image that is larger than five megabytes.
>
> **[1:18](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-security-rules-2?u=76281980&t=78)** So, file is less than five megabytes.
>
> **[1:24](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-security-rules-2?u=76281980&t=84)** And then also, we want to ensure that the content type is an image.
>
> **[1:29](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-security-rules-2?u=76281980&t=89)** Let's write another match rule for that here.
>
> **[1:33](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-security-rules-2?u=76281980&t=93)** We can write match, forward slash, and then the image ID, and we want to allow write if the resource size
>
> **[1:46](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-security-rules-2?u=76281980&t=106)** is less than five megabytes.
>
> **[1:48](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-security-rules-2?u=76281980&t=108)** And we can do a small calculation here.
>
> **[1:53](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-security-rules-2?u=76281980&t=113)** And also, if the resource type is an image.
>
> **[2:02](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-security-rules-2?u=76281980&t=122)** Let's go ahead and deploy these updated rules now with the [[Firebase]] [[CLI]].
>
> **[2:06](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-security-rules-2?u=76281980&t=126)** We can do that using firebase deploy, dash dash only, firestore rules.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Firebase]] (2), [[CLI]] (1)
> **Definitions:** is an  (2)
> **Env Vars:** cli (1)
> **Tools:** atom (1)
> **Speakers:** - [male (1)

#### [Profile image upload form](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=0)** - [Teacher] Now that we have set up our storage along with the security rules let's implement the follow upload.
>
> **[0:06](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=6)** We will be working with the profile component.
>
> **[0:09](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=9)** Let's place the profile photo to the left of the details form.
>
> **[0:14](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=14)** Below the form container, we can add a new div with class of ui grid and stackable.
>
> **[0:26](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=26)** This div will house both the profile image and the form.
>
> **[0:30](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=30)** So let me move the form.
>
> **[0:38](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=38)** Let me fix the indentation here.
>
> **[0:44](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=44)** The profile image will be four columns wide so we will add another div here with class of four wide and column.
>
> **[0:57](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=57)** And the form itself will be 12 columns wide so we can add classes 12 column wide.
>
> **[1:05](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=65)** Inside of this container, we will first add the placeholder image.
>
> **[1:10](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=70)** The source will be, assets/profile-placeholder.png
>
> **[1:21](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=81)** This will be the profile image and we will add a class here of ui image.
>
> **[1:27](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=87)** In the resources folder, you will find this placeholder image.
>
> **[1:31](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=91)** Let's head over to the assets folder, open up the resources folder for this video, and you can drag the image here.
>
> **[1:47](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=107)** Below the image tag we will add a file input which will be hidden.
>
> **[1:52](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=112)** So we input type of file.
>
> **[1:54](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=114)** We can create a reference to this input.
>
> **[1:59](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=119)** And last we'll add a change handler.
>
> **[2:03](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=123)** When the file is changed, we will call the file change method and get a hold of the event here.
>
> **[2:10](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=130)** We will also add the asset attribute along with the file types which will asset.
>
> **[2:16](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=136)** In this case it will be .png and .jpg.
>
> **[2:22](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=142)** Right below this input, we will add a button which will simply trigger a click on the hidden file input.
>
> **[2:30](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=150)** Let's add the classes ui grey button upload-button along with the click handler which will simply trigger the click method on our hidden file input.
>
> **[2:46](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=166)** And the text for this button will be upload photo.
>
> **[2:51](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=171)** Now let's add some styles to make this presentable.
>
> **[2:54](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=174)** So we're to the profile.component.scss.
>
> **[2:58](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=178)** First, we will add styles for the profile image.
>
> **[3:02](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=182)** Can add some padding.
>
> **[3:05](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=185)** And the image itself, we want to make it responsive.
>
> **[3:10](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=190)** We can easily do that by setting the width to 100% and the height to auto.
>
> **[3:17](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=197)** The file input will be hidden so we can simply say display none.
>
> **[3:24](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=204)** And finally let's add a class for the upload button.
>
> **[3:29](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=209)** We want to float right and add some top margin.
>
> **[3:36](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=216)** Let's start the app now with [[npm]] start.
>
> **[3:42](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=222)** Once that is done we can command or control click on this URL and it looks like some of our styling may be off.
>
> **[3:48](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=228)** Let's double check the classes we have added on our [[HTML]] elements.
>
> **[3:54](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=234)** This should be twelve wide column as semantic ui expected classes to be added in a specific order.
>
> **[4:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=240)** And I am missing the profile image class here.
>
> **[4:06](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=246)** Let's set it back to our app and now we see both the image and the profile form.
>
> **[4:12](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=252)** Seems that this is still showing, let's double check that.
>
> **[4:19](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=259)** We are missing a class here.
>
> **[4:21](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=261)** Should be file-input.
>
> **[4:27](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=267)** Heading back to our app and now that is hidden.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (1), [[HTML]] (1)
> **CLI Commands:** make (2), find (1), npm (1)
> **Env Vars:** url (1), html (1)
> **File Paths:** profile.component.scss (1)
> **UI Navigation:** click on (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [teacher] (1)

#### [Image uploads](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=0)** - [Instructor] Let's write the code now to upload the user photo to [[Firebase]].
>
> **[0:05](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=5)** Heading to the application module, we'll first import the AngularFireStorageModule.
>
> **[0:14](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=14)** Now it will be from [[Angular]]/Fire/storage.
>
> **[0:26](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=26)** And make sure to add this module to the imports here.
>
> **[0:30](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=30)** Heading now to the profile component we will declare two additional variables.
>
> **[0:36](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=36)** First one will be a download URL which will be an observable of type string.
>
> **[0:43](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=43)** This will be used to get the source of the user's profile image.
>
> **[0:46](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=46)** We will also declare a second variable and call it uploadProgress.
>
> **[0:52](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=52)** And this will be an observable of type number.
>
> **[0:57](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=57)** This will be used to display a progress bar.
>
> **[1:01](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=61)** In the constructor we will inject the angular fire storage service.
>
> **[1:07](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=67)** We can call this afStorage, and that will be of the type AngularFireStorage.
>
> **[1:19](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=79)** In the constructor we can then get the download URL.
>
> **[1:24](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=84)** We will do so by grabbing a reference to the path the user will be uploading their photo to.
>
> **[1:33](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=93)** We can call that ref and specify the path here.
>
> **[1:36](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=96)** Users slash the user ID slash profile-image.
>
> **[1:46](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=106)** And then call the getDownloadURL method.
>
> **[1:52](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=112)** Heading to the template now, we want to display the profile photo if it has been uploaded.
>
> **[1:59](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=119)** Let's declare a div here and use the NGF directive.
>
> **[2:06](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=126)** We want to display this if we have the download URL.
>
> **[2:10](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=130)** It's an observable, so let's use the async type and store that in source URL.
>
> **[2:20](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=140)** And then here we can display the profile image.
>
> **[2:23](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=143)** We will give it a class of UI and then image.
>
> **[2:28](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=148)** Specify the source which will be the source URL and then give it an alt attribute.
>
> **[2:38](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=158)** And below here we want to display the profile photo placeholder if the user's profile image is not available.
>
> **[2:48](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=168)** Similar we will use NGF here and simply negate this expression.
>
> **[2:59](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=179)** And we can move the placeholder image here.
>
> **[3:09](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=189)** Below the file input we want to display a progress bar and specify the max attribute of 100.
>
> **[3:17](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=197)** And then the value will be set to the upload progress.
>
> **[3:23](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=203)** That is an observable, so we will use the async type here as well.
>
> **[3:29](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=209)** Lastly, we should display any errors to the user.
>
> **[3:32](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=212)** We already have a variable to store the error message, so all we need to do is add it to the template.
>
> **[3:39](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=219)** We will use the semantic UI classes here, ui negative message.
>
> **[3:46](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=226)** A paragraph tag here to display the error, and we only want to display this if we have an error.
>
> **[3:54](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=234)** With that in place, head over to the component class, and let's implement the file change method.
>
> **[4:05](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=245)** Let's have a new method here, call it fileChange and we have access to the event.
>
> **[4:15](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=255)** First, we will clear the downloadURL and any error messages.
>
> **[4:23](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=263)** Next we will get the file.
>
> **[4:26](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=266)** This will be in event.target.files.
>
> **[4:33](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=273)** It'll be an array, so we will grab the first element there.
>
> **[4:38](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=278)** We can then create the file reference.
>
> **[4:42](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=282)** First create a reference using the file path which will be at users forward slash the user id forward slash profile-image.
>
> **[4:57](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=297)** And then we can create the file reference using the Angular Fire Storage and the ref method on that.
>
> **[5:11](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=311)** Next we will upload and store the task.
>
> **[5:18](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=318)** We can get a reference to the task by calling the upload method.
>
> **[5:25](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=325)** We will use the filePath and also the file we want to upload.
>
> **[5:31](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=331)** We want to make sure that we catch any error message.
>
> **[5:40](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=340)** Next we want to observe the percentage changes.
>
> **[5:44](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=344)** This will be a useful indicator to the user.
>
> **[5:50](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=350)** uploadProgress is an observable of type number, and we can simply call the percentage changes on the task.
>
> **[5:59](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=359)** Lastly, we want to get notified when the download URL is available.
>
> **[6:06](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=366)** We can call this snapshotChanges method on the task, use the pipe operator, and when that has been complete, we will set the downloadURL.
>
> **[6:21](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=381)** And we can call the getDownloadURL method on the file reference.
>
> **[6:28](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=388)** And we'll call subscribe to initiate this.
>
> **[6:33](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=393)** Let's start the application now.
>
> **[6:39](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=399)** Open up your browser and let's try to upload a photo.
>
> **[6:46](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=406)** We have sample profile photos under profiles and you can choose any that you would like.
>
> **[6:56](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=416)** Great, let's now check the console to make sure that the photo was indeed uploaded.
>
> **[7:05](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=425)** Can head to the storage tab users and you can see that the image was in fact loaded.
>
> **[7:16](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=436)** Going back to your application we can refresh and see that the image is persistent.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (3), [[Firebase]] (1)
> **Code Identifiers:** uploadprogress (2), getdownloadurl (2), downloadurl (2), afstorage (1), filechange (1)
> **Env Vars:** url (6), ngf (2)
> **CLI Commands:** make (3)
> **Exercise Files:** template (2)
> **Definitions:** is an  (2)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)


### 5. Control Access with Custom Claims and Security Rules

[↑ Back to Table of Contents](#table-of-contents)

#### [Firebase ID tokens](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980)

#### [Setting Firebase custom claims](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980)

#### [Admin interface: Route guards, part 1](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-1-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-1-2?u=76281980&t=0)** - Now that we have used the [[Firebase]] admin sdk, to set custom planes for admin user.
>
> **[0:05](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-1-2?u=76281980&t=5)** It is time to start developing our admin interface.
>
> **[0:08](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-1-2?u=76281980&t=8)** Which will allow the admin user to see all of the registered users and view and edit their profile data.
>
> **[0:14](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-1-2?u=76281980&t=14)** Let's start by creating a new users component.
>
> **[0:17](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-1-2?u=76281980&t=17)** Now we use the [[Angular CLI]].
>
> **[0:19](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-1-2?u=76281980&t=19)** N-G. G which is short for generate.
>
> **[0:22](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-1-2?u=76281980&t=22)** C. Which is short for component.
>
> **[0:25](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-1-2?u=76281980&t=25)** Now we'll call this component users component.
>
> **[0:30](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-1-2?u=76281980&t=30)** We'll then go ahead and add a new route in our [[Routing]] module.
>
> **[0:39](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-1-2?u=76281980&t=39)** Add a new object here.
>
> **[0:41](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-1-2?u=76281980&t=41)** The path will be users.
>
> **[0:44](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-1-2?u=76281980&t=44)** The component would be the users component, we'll just create it.
>
> **[0:51](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-1-2?u=76281980&t=51)** And this will also have an off guard here.
>
> **[0:54](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-1-2?u=76281980&t=54)** We'll be leveraging the [[Angular]] Fire Auth Guard.
>
> **[1:03](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-1-2?u=76281980&t=63)** The auth guard will need some data.
>
> **[1:06](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-1-2?u=76281980&t=66)** And for the auth guard pipe, we'll be writing in admin only auth guard pipe.
>
> **[1:13](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-1-2?u=76281980&t=73)** Being able to file library contains a very helpful custom claims operator that will allow us to get the claims for a user.
>
> **[1:21](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-1-2?u=76281980&t=81)** Let's go ahead and import that now.
>
> **[1:28](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-1-2?u=76281980&t=88)** Then we can go ahead and build our own pipe.
>
> **[1:33](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-1-2?u=76281980&t=93)** We will call this admin only.
>
> **[1:39](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-1-2?u=76281980&t=99)** And then use the pipe operator.
>
> **[1:43](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-1-2?u=76281980&t=103)** Use the custom claims helper and map the claims to a route or a bullion.
>
> **[1:51](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-1-2?u=76281980&t=111)** We can get access to the claims here.
>
> **[1:55](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-1-2?u=76281980&t=115)** If the admin property on the claims is set to true then it will proceed, otherwise, we can return the route to the login page.
>
> **[2:06](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-1-2?u=76281980&t=126)** We can now test this out with both the admin user and the non-admin user.
>
> **[2:10](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-1-2?u=76281980&t=130)** Let me go ahead and start the app here.
>
> **[2:16](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-1-2?u=76281980&t=136)** Once that is complete, head to your application.
>
> **[2:20](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-1-2?u=76281980&t=140)** I'm going to login as a regular user now.
>
> **[2:27](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-1-2?u=76281980&t=147)** And I'm going to try to access the users route.
>
> **[2:31](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-1-2?u=76281980&t=151)** We can see that I'm not allowed to access that route.
>
> **[2:34](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-1-2?u=76281980&t=154)** Then we log out.
>
> **[2:36](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-1-2?u=76281980&t=156)** And I will login as the admin now.
>
> **[2:43](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-1-2?u=76281980&t=163)** And logged in as the admin now.
>
> **[2:45](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-1-2?u=76281980&t=165)** And I will try to access the users route.
>
> **[2:47](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-1-2?u=76281980&t=167)** And I have access to it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Firebase]] (1), [[Angular CLI]] (1), [[Routing]] (1), [[Angular]] (1)
> **Definitions:** short for (2)
> **Env Vars:** cli (1)
> **Speakers:** - now (1)

#### [Admin interface: Route guards, part 2](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=0)** - [Instructor] We should address some things in terms of the [[User Experience (UX)|user experience]].
>
> **[0:03](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=3)** If the user is logged in when requesting the root route, they are redirected to the profile page, regardless of the role of that user.
>
> **[0:13](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=13)** That is fine for normal users, but for the admin user, we would like to redirect to the users page.
>
> **[0:19](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=19)** Let's head now to the application [[Routing]] module.
>
> **[0:22](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=22)** And we will build another pipe.
>
> **[0:25](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=25)** We will call this redirect, logged in to profile or users.
>
> **[0:36](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=36)** We will again be using the custom claims helper to get access to the claims.
>
> **[0:43](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=43)** And map those claims to a Boolean or an array, which will determine the route.
>
> **[0:50](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=50)** We will have three scenarios.
>
> **[0:52](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=52)** If no claims, then there is no authenticate a user.
>
> **[1:01](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=61)** And so allow the route to the root.
>
> **[1:08](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=68)** If a custom claim is set, then redirect to the user's route.
>
> **[1:17](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=77)** And finally, if those conditions are not met, we will redirect to the users profile page.
>
> **[1:27](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=87)** A very important thing to note is that for any authenticated user, the claims are always set and the user ID will be contained in these claims.
>
> **[1:37](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=97)** And so if there is no authenticated user, the claims linked would be zero.
>
> **[1:48](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=108)** In this case, just return true.
>
> **[1:52](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=112)** Now if a custom claim is set, then it will redirect to the user's route.
>
> **[1:58](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=118)** We can simply check here for claims.admin.
>
> **[2:02](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=122)** And we can return the users route here.
>
> **[2:08](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=128)** If the user is not an admin, we redirect to the profile page using the current user's ID.
>
> **[2:21](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=141)** Going to grab the name of this custom pipe, and replace this one, redirect logged into profile, with our new one.
>
> **[2:33](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=153)** Let's test this out now.
>
> **[2:37](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=157)** Going to log out, let me go to the root page, and something seems to be wrong.
>
> **[2:44](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=164)** Let's check the console.
>
> **[2:49](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=169)** Looks like there's something wrong with our new pipe.
>
> **[2:57](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=177)** And I have some extra characters here that are not needed.
>
> **[3:01](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=181)** Let's go ahead and save that, and now I have my application here.
>
> **[3:05](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=185)** I will log in now as the admin user.
>
> **[3:12](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=192)** Let me go ahead and request the root route and I am redirected to the user's page.
>
> **[3:18](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=198)** Let me log out, and log in as a normal user now.
>
> **[3:24](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=204)** Let me request a root route, and I am redirected back to the profile page.
>
> **[3:28](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=208)** One last change needs to be made.
>
> **[3:31](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=211)** I'm going to go ahead and log out and log in as the admin user once more.
>
> **[3:38](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=218)** Upon login, all users are currently sent to their profile page, as we can see here.
>
> **[3:44](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=224)** For the admin user, we should redirect them to the user's page upon login.
>
> **[3:48](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=228)** For normal users, they should be redirected to their profile page.
>
> **[3:53](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=233)** Heading back to our application now, let's go to the auth service, and we will implement a new method called route on login.
>
> **[4:02](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=242)** This will be an async method.
>
> **[4:08](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=248)** We will first grab a hold of the current user and then we will get the token for that user, using the getIdTokenResult on that user.
>
> **[4:25](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=265)** We can then check the claims on this token.
>
> **[4:28](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=268)** If the admin custom claim is set, then we will route that user to the user's route.
>
> **[4:41](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=281)** If that is not set, we will route that user to their profile page.
>
> **[4:48](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=288)** That's forward slash profile, forward slash, and then their user ID.
>
> **[4:58](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=298)** Going out to the login component, we can replace this navigate method call, on the router, with our new method, on the auth service.
>
> **[5:11](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=311)** Let's head back to our browser now, go into log out, and I will log in now as the admin user, and you can see when I log in, I am redirected to the user's page.
>
> **[5:25](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=325)** Then we log out, and log in as a regular user.
>
> **[5:29](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=329)** And upon login, I am redirected to their profile page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[User Experience (UX)|User experience]] (1), [[Routing]] (1)
> **UI Navigation:** go to (2)
> **Code Identifiers:** getidtokenresult (1)
> **Speakers:** - [instructor] (1)

#### [Admin interface: View user collection](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=0)** - [Instructor] We have our route guard set up for our new users route, so let's place some data now.
>
> **[0:05](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=5)** Let's head now to the users component.
>
> **[0:12](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=12)** And in the constructor, inject the AngularFirestore.
>
> **[0:18](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=18)** We'll call this AFS.
>
> **[0:25](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=25)** We will then declare two variables.
>
> **[0:29](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=29)** The first variable will be a reference to the Firestore collection, and we will call this the usersCollection.
>
> **[0:38](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=38)** And it will be of type AngularFirestoreCollection of type UserProfile which is the interface that we have created.
>
> **[0:48](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=48)** The second variable will be an Observable to watch for any real time changes.
>
> **[0:54](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=54)** And this will be of type UserProfile array.
>
> **[1:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=60)** Then in the constructor, we can set these two values.
>
> **[1:03](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=63)** Let's first set the usersCollection.
>
> **[1:06](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=66)** We can get the collection from the AngularFirestore, specify the type, and this will be at the users path.
>
> **[1:16](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=76)** Next we can set the users Observable by calling the valueChanges method on that usersCollection.
>
> **[1:26](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=86)** In the template file, let's display that data now.
>
> **[1:30](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=90)** We're going to have a table with classes of UI, selectable, celled, and table.
>
> **[1:45](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=105)** In the table header we will have five table headers.
>
> **[1:52](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=112)** One for the Name, one for the Specialty, one for their Secret Address, the Phone, and also the IP.
>
> **[2:10](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=130)** Next we will have a table body, and we will have a row for each user.
>
> **[2:20](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=140)** And here, we can use the ngFor directive.
>
> **[2:27](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=147)** And remember that users is a UserProfile Observable, so we will use the async pipe here.
>
> **[2:34](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=154)** And now we can display the data.
>
> **[2:37](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=157)** We have the name, the specialty, the address here,
>
> **[2:48](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=168)** which will be a combination of the address field, the city, the state, and also the zip.
>
> **[3:05](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=185)** Next we will display the user's phone number, and finally the IP address.
>
> **[3:13](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=193)** Let's head to our application now and log in as the admin user.
>
> **[3:21](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=201)** We are taken to the users route, but we don't see any data.
>
> **[3:26](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=206)** Let's Inspect the console and check for any errors.
>
> **[3:29](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=209)** [[Firebase]] is throwing an error here specifying that this user does not have permissions to read this data.
>
> **[3:35](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=215)** Let's Inspect the Firestore cloud rules.
>
> **[3:42](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=222)** If we look at our Firebase cloud store security rules, we see that we have limited access for each user to their own user document.
>
> **[3:50](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=230)** We will need to modify the security rules to allow the admin user to read the entire users collection.
>
> **[3:56](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=236)** We want to allow admin users to read and modify any data in our cloud Firestore.
>
> **[4:01](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=241)** We can modify the current rules to check for the admin custom claim.
>
> **[4:09](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=249)** So here we could just add another expression and check the custom claim by checking the admin property on the token.
>
> **[4:20](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=260)** And we can do the same for the write rule.
>
> **[4:25](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=265)** We also want the admin user to be able to read or write any of the profile image, so let's modify those rules now.
>
> **[4:36](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=276)** So we can also check here for the admin custom claim.
>
> **[4:44](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=284)** I'm going to stop our app, and redeploy our security rules.
>
> **[4:48](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=288)** I'm going to create a couple of MPM scripts to facilitate this.
>
> **[4:53](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=293)** Head over to the package.[[JSON]] file.
>
> **[4:58](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=298)** We will add one MPM script and call it deploy Firestore, and this will call Firebase deploy dash dash only Firestore rules.
>
> **[5:16](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=316)** We can have a similar MPM script to deploy the [[Cloud Storage]] rules.
>
> **[5:29](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=329)** Let's deploy these rules now.
>
> **[5:31](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=331)** First, in my terminal, I will call the first MPM script.
>
> **[5:36](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=336)** MPM run deploy Firestore.
>
> **[5:44](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=344)** I seem to have gotten an error.
>
> **[5:47](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=347)** And looks like there's a compilation error for those rules.
>
> **[5:50](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=350)** Let's inspect that now.
>
> **[5:53](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=353)** This shouldn't be triple equals, should be only double equal.
>
> **[5:57](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=357)** Let me redeploy that.
>
> **[6:03](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=363)** And looks like I have another compilation error here.
>
> **[6:06](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=366)** That should be the or operator.
>
> **[6:11](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=371)** Let's try that again.
>
> **[6:15](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=375)** And that was successfully deployed.
>
> **[6:17](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=377)** Before I deploy the storage rules, let's double check that here.
>
> **[6:20](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=380)** And that looks correct.
>
> **[6:23](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=383)** MPM run deploy storage.
>
> **[6:28](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=388)** Once deployed, let's start our application with MPM start.
>
> **[6:35](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=395)** Heading out to our application, I will log in now as the user.
>
> **[6:44](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=404)** And now, we can see our data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Firebase]] (3), [[JSON]] (1), [[Cloud Storage]] (1)
> **Env Vars:** mpm (7), afs (1)
> **Code Identifiers:** userscollection (3), valuechanges (1), ngfor (1)
> **File Paths:** package.json (1)
> **Tools:** terminal (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)

#### [Admin interface: View user profile](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-profile-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-profile-2?u=76281980&t=0)** - [Instructor] In addition to viewing the users collection, let's also allow the admin to view individual profile data.
>
> **[0:07](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-profile-2?u=76281980&t=7)** I went ahead and added a couple of more users.
>
> **[0:09](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-profile-2?u=76281980&t=9)** If you need temporary email addresses, you can use something like [tempmail.org](https://tempmail.org).
>
> **[0:17](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-profile-2?u=76281980&t=17)** Heading back to our users component, we can turn the name into a navigation link.
>
> **[0:28](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-profile-2?u=76281980&t=28)** We can use the router link directive such that when the user clicks on this link it will navigate them to the profile route.
>
> **[0:43](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-profile-2?u=76281980&t=43)** And I can move the user's name inside this link here.
>
> **[0:53](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-profile-2?u=76281980&t=53)** Heading back to our application, we can see the links display now.
>
> **[0:57](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-profile-2?u=76281980&t=57)** If you try to navigate by clicking on this link, you see that the app doesn't seem to go anywhere.
>
> **[1:01](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-profile-2?u=76281980&t=61)** This is because of the route guard on the profile page.
>
> **[1:04](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-profile-2?u=76281980&t=64)** Let's modify that route guard to allow admin users.
>
> **[1:10](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-profile-2?u=76281980&t=70)** Heading to the application [[Routing]] module, we'll create a new auth-guard pipe.
>
> **[1:16](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-profile-2?u=76281980&t=76)** We will call this allow only self or admin.
>
> **[1:26](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-profile-2?u=76281980&t=86)** It will take in next, which will be provided by [[Firebase]], representing the route.
>
> **[1:33](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-profile-2?u=76281980&t=93)** We will use the pipe operator, the custom claims helper, and then, use the map operator to map those claims into a boolean or to a route.
>
> **[1:48](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-profile-2?u=76281980&t=108)** If there are no claims, that means that there isn't an authenticated user.
>
> **[1:55](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-profile-2?u=76281980&t=115)** In this case, we should route them to the root page, which is the login page.
>
> **[2:03](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-profile-2?u=76281980&t=123)** Otherwise we can check if the requested route matches the user ID and the claim, which is always set for an authenticated user.
>
> **[2:13](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-profile-2?u=76281980&t=133)** Or if that user has the custom claim of admin set to true.
>
> **[2:23](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-profile-2?u=76281980&t=143)** And the next thing we need to do is to replace this current pipe with our new pipe.
>
> **[2:31](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-profile-2?u=76281980&t=151)** Let's flip back to our application, and we can click on a link, and we are taken to that user's profile page.
>
> **[2:38](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-profile-2?u=76281980&t=158)** Heading back, I can view the others as well.
>
> **[2:44](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-profile-2?u=76281980&t=164)** Let's try to modify the data to ensure that the admin user can alter the data.
>
> **[2:50](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-profile-2?u=76281980&t=170)** We can refresh the page, and that data has persisted.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (1), [[Firebase]] (1)
> **URLs:** [tempmail.org](https://tempmail.org) (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)


### 6. Going Serverless with Firebase Cloud Functions

[↑ Back to Table of Contents](#table-of-contents)

#### [Cloud Functions setup](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-setup-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-setup-2?u=76281980&t=0)** - [Narrator] Now we turn to probably one of the most exciting parts of this course, [[Firebase]] Cloud Functions.
>
> **[0:05](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-setup-2?u=76281980&t=5)** Cloud Functions for Firebase allows you to run back-end code, that automatically responds to events, such as when data is created or deleted, images are uploaded, or when there's a new user.
>
> **[0:17](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-setup-2?u=76281980&t=17)** Cloud Functions can also respond to HTTPS requests, allowing you to easily build a serverless API.
>
> **[0:24](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-setup-2?u=76281980&t=24)** As stated, the code is stored in [[Google]]'s Cloud, and runs in a managed environment.
>
> **[0:30](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-setup-2?u=76281980&t=30)** In addition, there's no need to manage and scale your own servers.
>
> **[0:33](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-setup-2?u=76281980&t=33)** Even better, these functions can be written in [[JavaScript]] or TypeScript so you'll feel right at home.
>
> **[0:38](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-setup-2?u=76281980&t=38)** Let's get started.
>
> **[0:40](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-setup-2?u=76281980&t=40)** Switching to the command prompt, in your project directory, you want to ensure you have the Firebase [[CLI]] installed globally via MPM.
>
> **[0:49](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-setup-2?u=76281980&t=49)** And I can do that with MPM install dash G Firebase tools.
>
> **[0:55](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-setup-2?u=76281980&t=55)** Often, bug fixes and new features are available only with the latest version of the Firebase tools, so it's a good practice to frequently update the CLI.
>
> **[1:03](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-setup-2?u=76281980&t=63)** I already have this installed, so I won't do that now.
>
> **[1:07](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-setup-2?u=76281980&t=67)** Once that is installed, make sure that the Firebase login command works.
>
> **[1:13](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-setup-2?u=76281980&t=73)** In here it tells me that I am already logged in.
>
> **[1:17](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-setup-2?u=76281980&t=77)** Let's initialize Cloud Functions for our project.
>
> **[1:20](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-setup-2?u=76281980&t=80)** And I can do that with the Firebase CLI init functions.
>
> **[1:28](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-setup-2?u=76281980&t=88)** I will go ahead and choose JavaScript to write my functions.
>
> **[1:33](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-setup-2?u=76281980&t=93)** I'm going to accept the default, and install dependencies.
>
> **[1:41](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-setup-2?u=76281980&t=101)** We see that a new functions directory has been created for us.
>
> **[1:46](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-setup-2?u=76281980&t=106)** The Cloud Functions for Firebase SUK will be used to create Cloud Functions and set up triggers.
>
> **[1:53](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-setup-2?u=76281980&t=113)** The eslintrc file is an optional file containing rules for JavaScript linting.
>
> **[1:58](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-setup-2?u=76281980&t=118)** The package.[[JSON]] file is a package file describing your Cloud Function's code.
>
> **[2:03](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-setup-2?u=76281980&t=123)** The index.js file is the main source file for your Cloud Functions.
>
> **[2:08](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-setup-2?u=76281980&t=128)** And also the node modules is a directory where your dependencies are installed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Firebase]] (8), [[JavaScript]] (3), [[CLI]] (3), [[Google]] (1), [[JSON]] (1)
> **Env Vars:** cli (3), mpm (2), https (1), api (1), suk (1)
> **Definitions:** is a  (2), is an  (1)
> **Prerequisites:** install (2), set up (1)
> **File Paths:** package.json (1), index.js (1)
> **CLI Commands:** make (1), node (1)
> **Tools:** command prompt (1)
> **Analogies:** such as (1)

#### [Cloud Functions: Email setup](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-email-setup-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-email-setup-2?u=76281980&t=0)** - [Instructor] For our [[Firebase]] cloud function, we will be leveraging the authentication trigger to send a welcome email.
>
> **[0:06](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-email-setup-2?u=76281980&t=6)** Specifically, we will trigger the cloud function when a new user signs up.
>
> **[0:11](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-email-setup-2?u=76281980&t=11)** For this specific example we will be using Nodemailer, which is a node based email client.
>
> **[0:16](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-email-setup-2?u=76281980&t=16)** We will also be using a test Gmail account that I have created to send emails.
>
> **[0:21](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-email-setup-2?u=76281980&t=21)** I recommend that you create a Gmail account that you can use for development.
>
> **[0:24](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-email-setup-2?u=76281980&t=24)** Keep in mind that Gmail has a sending quota.
>
> **[0:28](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-email-setup-2?u=76281980&t=28)** For a larger amount of emails, consider switching to something like SendGrid or Mailgun.
>
> **[0:35](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-email-setup-2?u=76281980&t=35)** Another thing to keep in mind is that the Spark plan, which is a free Firebase plan we are currently using, only allows you to send request to [[Google]] services.
>
> **[0:45](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-email-setup-2?u=76281980&t=45)** For non-Google related services, you will need to enable billing in your Firebase project.
>
> **[0:50](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-email-setup-2?u=76281980&t=50)** You will also need to do two things for your test Gmail account and I have provided instructions here.
>
> **[0:56](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-email-setup-2?u=76281980&t=56)** The first you want to do is to enable access to less secure apps.
>
> **[1:01](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-email-setup-2?u=76281980&t=61)** In a new incognito window, I have logged in with the email account that I will be using to send emails.
>
> **[1:08](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-email-setup-2?u=76281980&t=68)** Let's go ahead and enable that now.
>
> **[1:16](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-email-setup-2?u=76281980&t=76)** And I can see that's already been enabled and now it's to go ahead and visit this link.
>
> **[1:27](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-email-setup-2?u=76281980&t=87)** If your test Gmail account has two step verification, you will need to use an app password and you can follow the instructions at this link here.
>
> **[1:36](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-email-setup-2?u=76281980&t=96)** Let's write our function now.
>
> **[1:39](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-email-setup-2?u=76281980&t=99)** Since we'll be using Nodemailer, we will be installing this now and we will do that in the Functions folder, [[npm]] install nodemailer.
>
> **[1:50](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-email-setup-2?u=76281980&t=110)** Going out to the root directory, Firebase Cloud Functions also allows you to set environment variables, which is important because you don't want to write credentials in your code.
>
> **[2:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-email-setup-2?u=76281980&t=120)** In this case, we will set environment variables for the email and the password for our Gmail account.
>
> **[2:07](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-email-setup-2?u=76281980&t=127)** Firebase functions:config and then set and we will set gmail.email to our email address
>
> **[2:22](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-email-setup-2?u=76281980&t=142)** and also a second environment variable, which will be our password.
>
> **[2:31](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-email-setup-2?u=76281980&t=151)** And then you can hit Enter.
>
> **[2:34](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-email-setup-2?u=76281980&t=154)** You will get a message instructing you to deploy your cloud functions.
>
> **[2:38](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-email-setup-2?u=76281980&t=158)** We will deploy our function after we write our code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Firebase]] (5), [[Google]] (2), [[npm]] (1)
> **CLI Commands:** node (1), npm (1)
> **Definitions:** is a  (2)
> **Warnings:** keep in mind (2)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Cloud Functions: Authentication trigger](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=0)** - [Instructor] Let's write our code now for the [[Firebase]] function.
>
> **[0:03](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=3)** I have required the Firebase functions here, and I would also require the node mailer, since that will be used to send emails.
>
> **[0:13](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=13)** Const node mailer, require node mailer.
>
> **[0:19](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=19)** Next, I will grab a hold of the environment variables that we have previously set.
>
> **[0:25](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=25)** You can grab the Gmail email, by getting the config, and then the email property.
>
> **[0:37](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=37)** And we will also grab the password config, that we previously set.
>
> **[0:50](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=50)** Next, I need to create a mail transport object.
>
> **[0:56](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=56)** I can do so by calling the create transport method here.
>
> **[1:02](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=62)** The service will be Gmail, and pass in the authentication information.
>
> **[1:12](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=72)** The user, and also, the password.
>
> **[1:22](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=82)** I will then create a variable to hold the app name, and this will simply be The Grid Dashboard.
>
> **[1:34](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=94)** Next, let's create the function for sending the welcome email.
>
> **[1:38](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=98)** This would be a async function.
>
> **[1:41](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=101)** And we'll call this function 'send welcome email.'
>
> **[1:45](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=105)** The arguments will be email, and the display name.
>
> **[1:51](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=111)** Let's first create the mail options.
>
> **[1:55](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=115)** This would be a 'from' field, and also a 'to' field.
>
> **[1:59](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=119)** The to field will be the email.
>
> **[2:02](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=122)** And let's specify the from field here.
>
> **[2:05](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=125)** Can use a tempest right here.
>
> **[2:09](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=129)** And then use the app name.
>
> **[2:12](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=132)** And then specify the email here.
>
> **[2:13](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=133)** Which was thegrid.manager@[gmail.com](https://gmail.com).
>
> **[2:20](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=140)** Let's go ahead and set the subject now.
>
> **[2:28](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=148)** We will tell the user "welcome to app name."
>
> **[2:39](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=159)** We will then set the text of this email.
>
> **[2:45](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=165)** Can specify a greeting.
>
> **[2:51](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=171)** But there's no display name, pass in an empty string.
>
> **[2:56](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=176)** Welcome to the elite team of secret agents.
>
> **[3:08](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=188)** Next we can call the send mail method on the mail transport.
>
> **[3:16](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=196)** We will need the mail options here.
>
> **[3:20](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=200)** Once that is complete, we can log a confirmation message.
>
> **[3:24](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=204)** New welcome email sent to, the email address we specify.
>
> **[3:32](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=212)** And then a return statement here.
>
> **[3:35](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=215)** Next, let's specify the cloud function trigger here.
>
> **[3:41](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=221)** The cloud function will be called 'send welcome email.'
>
> **[3:47](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=227)** And this will be triggered when there's a new user.
>
> **[3:55](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=235)** Let's grab a hold of the email of that new user.
>
> **[4:01](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=241)** And also that user's display name.
>
> **[4:10](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=250)** And we can call the function we just wrote, the email, and also the display name.
>
> **[4:17](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=257)** Let's go ahead and deploy our cloud function now.
>
> **[4:20](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=260)** We can use firebase, deploy,
>
> **[4:25](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=265)** - - only functions.
>
> **[4:29](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=269)** This will go ahead and prepare, package, and upload your Firebase cloud function.
>
> **[4:35](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=275)** Once that is complete, let's go ahead and start the app.
>
> **[4:40](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=280)** I have a test user with a real email account.
>
> **[4:44](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=284)** And we'll use that user to sign up.
>
> **[4:48](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=288)** Let's go ahead and go to our browser, to localhost 4200.
>
> **[4:55](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=295)** Let me log out.
>
> **[4:56](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=296)** And I will sign up with the new user with the real email account.
>
> **[5:04](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=304)** Once I sign up, I am taken to the profile page.
>
> **[5:07](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=307)** Now, we'll go ahead and log in to this user's email account.
>
> **[5:11](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=311)** Let me open a new, incognito window.
>
> **[5:14](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=314)** And we'll check that user's email account.
>
> **[5:19](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=319)** Let me sign out of the current user, and go ahead and log in.
>
> **[5:30](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=330)** And there we go, we can see the welcome email here.
>
> **[5:33](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=333)** Sent from our test email account, and saying, "Hey! Welcome to the elite team of secret agents."
>
> **[5:39](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=339)** Congratulations! You have successfully written, deployed, and executed your serverless function.
>
> **[5:45](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=345)** If for any reason your email didn't get sent, you can check the logs in the Firebase console.
>
> **[5:51](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=351)** Heading over to the console, clicking on functions,
>
> **[6:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=360)** and here you can see your cloud function.
>
> **[6:04](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=364)** And then in the logs tab, you can view any logs associated with it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Firebase]] (5)
> **CLI Commands:** node (3)
> **URLs:** [gmail.com](https://gmail.com) (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### 7. Control Access with Custom Claims and Security Rules

[↑ Back to Table of Contents](#table-of-contents)

#### [Firebase Hosting setup](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-hosting-setup-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-hosting-setup-2?u=76281980&t=0)** - [Instructor] Now that we have used authentication to manage users, Cloud Firestore to store data, [[Cloud Storage]] to store user files, and Cloud Functions for serverless back-ends, it's time to deploy our application, and we can do so with [[Firebase]] Hosting.
>
> **[0:14](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-hosting-setup-2?u=76281980&t=14)** We first need to ensure that the [[Angular]] application can build using a production configuration.
>
> **[0:20](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-hosting-setup-2?u=76281980&t=20)** Let's go ahead and add an [[npm]] script.
>
> **[0:23](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-hosting-setup-2?u=76281980&t=23)** Opening your package.[[JSON]] file, I will add a new npm script here, build:prod, and it will build with the production configuration.
>
> **[0:38](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-hosting-setup-2?u=76281980&t=38)** We also need to copy the environment configuration into the production configuration.
>
> **[0:48](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-hosting-setup-2?u=76281980&t=48)** You can grab these values here, and paste them here.
>
> **[0:52](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-hosting-setup-2?u=76281980&t=52)** Let's run a production build of our application now.
>
> **[0:55](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-hosting-setup-2?u=76281980&t=55)** npm run build:prod.
>
> **[1:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-hosting-setup-2?u=76281980&t=60)** Looks like I have an error here.
>
> **[1:01](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-hosting-setup-2?u=76281980&t=61)** Let's inspect, and see what that is.
>
> **[1:05](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-hosting-setup-2?u=76281980&t=65)** Let's go ahead and fix this now.
>
> **[1:07](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-hosting-setup-2?u=76281980&t=67)** It's an app component, and I can make this public here.
>
> **[1:15](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-hosting-setup-2?u=76281980&t=75)** Let's try another build.
>
> **[1:20](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-hosting-setup-2?u=76281980&t=80)** Once it is complete, you can check the dist folder, and see the generated bundles here under grid-dashboard.
>
> **[1:29](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-hosting-setup-2?u=76281980&t=89)** With this in mind, let's set up Firebase Hosting.
>
> **[1:32](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-hosting-setup-2?u=76281980&t=92)** You can use the Firebase tools init.
>
> **[1:37](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-hosting-setup-2?u=76281980&t=97)** I will use my arrow keys and choose Hosting.
>
> **[1:40](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-hosting-setup-2?u=76281980&t=100)** Hit the space bar, and then click Enter.
>
> **[1:43](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-hosting-setup-2?u=76281980&t=103)** Our public directory will actually be dist/grid-dashboard.
>
> **[1:51](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-hosting-setup-2?u=76281980&t=111)** You do want to configure it as a single-page app, and you don't want to override this index.[[HTML]] file.
>
> **[2:01](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-hosting-setup-2?u=76281980&t=121)** Once that is done, you will see that the Firebase.json file has been updated with the hosting configuration.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Firebase]] (4), [[npm]] (3), [[JSON]] (2), [[Cloud Storage]] (1), [[Angular]] (1)
> **CLI Commands:** npm (3), make (1)
> **File Paths:** package.json (1), index.html (1), firebase.json (1)
> **Prerequisites:** set up (1), configure (1)
> **Speakers:** - [instructor] (1)

#### [Deploying your app](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-your-app-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-your-app-2?u=76281980&t=0)** - [Instructor] Once we have built our application and set up [[Firebase]] hosting, let's go ahead and deploy our application now.
>
> **[0:07](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-your-app-2?u=76281980&t=7)** Can use the Firebase tool, deploy dash dash only hosting.
>
> **[0:13](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-your-app-2?u=76281980&t=13)** This may take a few minutes.
>
> **[0:18](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-your-app-2?u=76281980&t=18)** Once that is done, Firebase will give you the URL of your new application.
>
> **[0:23](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-your-app-2?u=76281980&t=23)** Let's go ahead and visit our application here.
>
> **[0:29](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-your-app-2?u=76281980&t=29)** And our application is now live.
>
> **[0:30](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-your-app-2?u=76281980&t=30)** Let's try to log in as the admin user now.
>
> **[0:37](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-your-app-2?u=76281980&t=37)** I can see my users.
>
> **[0:40](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-your-app-2?u=76281980&t=40)** I could view individual profile data.
>
> **[0:43](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-your-app-2?u=76281980&t=43)** I can update that data.
>
> **[0:46](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-your-app-2?u=76281980&t=46)** Refresh and see that that data still persists.
>
> **[0:49](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-your-app-2?u=76281980&t=49)** There's also another command that'll be very useful.
>
> **[0:52](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-your-app-2?u=76281980&t=52)** And that is the Firebase deploy command.
>
> **[0:55](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-your-app-2?u=76281980&t=55)** Let me clear my terminal here and use a Firebase deploy.
>
> **[0:59](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-your-app-2?u=76281980&t=59)** When using this command without any flags, it will deploy all of the Firebase services you have configured in your application.
>
> **[1:07](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-your-app-2?u=76281980&t=67)** For the storage and cloud store services, this will deploy the security rules.
>
> **[1:12](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-your-app-2?u=76281980&t=72)** When hosting is enabled, this will deploy your app.
>
> **[1:14](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-your-app-2?u=76281980&t=74)** And finally, this will prepare, package, and upload your cloud functions.
>
> **[1:20](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-your-app-2?u=76281980&t=80)** This actually may take a few minutes.
>
> **[1:24](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-your-app-2?u=76281980&t=84)** And now it's complete.
>
> **[1:25](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-your-app-2?u=76281980&t=85)** Let's visit the Firebase console now.
>
> **[1:33](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-your-app-2?u=76281980&t=93)** You can go to the hosting tab and actually view the release history here.
>
> **[1:40](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-your-app-2?u=76281980&t=100)** Also note that you get a much nicer URL with a domain.[web.app](https://web.app).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Firebase]] (7)
> **Env Vars:** url (2)
> **URLs:** [web.app](https://web.app) (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Warnings:** note that (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/next-steps-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/next-steps-2?u=76281980&t=0)** - [Instructor] Thanks for joining me on this course.
>
> **[0:02](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/next-steps-2?u=76281980&t=2)** We have leveraged most of the excellent services provided by [[Firebase]] by [[Google]] to help us build a serverless app.
>
> **[0:09](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/next-steps-2?u=76281980&t=9)** I hope you enjoyed learning about the different Firebase features that will make you a much more productive developer when developing [[Angular]] applications.
>
> **[0:16](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/next-steps-2?u=76281980&t=16)** I strongly recommend subscribing to the Firebase YouTube channel.
>
> **[0:20](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/next-steps-2?u=76281980&t=20)** The content is excellent and is a great way to keep up to date with any new features.
>
> **[0:25](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/next-steps-2?u=76281980&t=25)** And of course, continue to browse our library for anything angular related.
>
> **[0:30](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/next-steps-2?u=76281980&t=30)** If you wish to know what I'm currently working on, follow me on [[GitHub]] at [github.com/victormejia](https://github.com/victormejia).
>
> **[0:36](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/next-steps-2?u=76281980&t=36)** You can also find me on Twitter at [twitter.com/_victormejia](https://twitter.com/_victormejia), thanks for watching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Firebase]] (3), [[Angular]] (2), [[GitHub]] (2), [[Google]] (1)
> **CLI Commands:** make (1), find (1)
> **URLs:** [github.com](https://github.com) (1), [twitter.com](https://twitter.com) (1)
> **Tools:** github (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Victor Mejia]]

## Resources

- Exercise files available

## Skills Covered

- Angular
- Firebase

## Path Context

### In [[Explore Web Development with Angular]]
← [[Angular- Creating and Hosting a Full-Stack Site]] | **5 of 6** | [[WebSocket Communications with Node and Angular]] →

## Appears In

- [[Explore Web Development with Angular]]

## Related Courses

_Courses sharing skills:_

- [[React- Cloud-Powered Apps with Firebase]] — Firebase
- [[Building Angular and Django Apps]] — Angular
- [[Using AI in the Design to Full-Stack Development Life Cycle]] — Firebase
- [[Building Angular and ASP.NET Core Applications]] — Angular
- [[WebSocket Communications with Node and Angular]] — Angular

---

[↑ Back to top](#)