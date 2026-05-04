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
  - '[Explore Web Development with Angular](../../Paths/Software%20Development/Learning%20Paths/Explore%20Web%20Development%20with%20Angular.md)'
prev_courses:
  - '[Angular- Creating and Hosting a Full-Stack Site](Angular-%20Creating%20and%20Hosting%20a%20Full-Stack%20Site.md)'
next_courses:
  - '[WebSocket Communications with Node and Angular](WebSocket%20Communications%20with%20Node%20and%20Angular.md)'
path_nav: '[{"path":"Explore Web Development with Angular","position":5,"total":6,"prev":"Angular- Creating and Hosting a Full-Stack Site","next":"WebSocket Communications with Node and Angular"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - topic/web-development
  - skill/angular
  - skill/firebase
status: not-started
created: 2026-05-03
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
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud-2?u=76281980&t=0)** - [Instructor] [Angular](../../Skills/Web%20Development/Angular.md) is a powerful and feature-packed framework that makes building Web applications so much more enjoyable. I personally love building apps with Angular because it allows me to be productive. So, you've got a brilliant idea for your next Angular app, but you will need more than just your client-side code. You need hosting, APIs, authentication, and deployments. For a very long time, these needs were delegated to back-end developers or [DevOps](../../Topics/DevOps.md) engineers. [Firebase](../../Skills/Web%20Development/Firebase.md) by [Google](../../Glossary/Service/Google.md) empowers front-end developers to quickly tackle these problems and focus on what they love. Hi, I'm Victor Mejia. I'm a Senior UI Engineer and Instructor, and welcome to this course on Angular Cloud-Powered Apps with Firebase. In this course, we will be diving into all of the powerful services that Firebase by Google provides in order to build a serverless application. Modern Web applications require more than just your client-side code. You need hosting, APIs, authentication, and automatic deployments. We need to build apps fast, without managing infrastructure. Firebase by Google allows you to do exactly that. Backed by [Google Cloud Platform](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) and used by some of the largest apps today, Firebase is a suite of tools to help build and scale your Web application. We will first take a look at the Firebase console, and see how we can manage different Firebase projects. We will then use Firebase Authentication to add authentication to our application. As we build out features, we will need to store data using Firebase Cloud Firestore along the way. To store files like images, we will be using Firebase [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md).
>
> **[1:32](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud-2?u=76281980&t=92)** We will then jump into the serverless world and learn how to create our own serverless functions using Firebase Cloud Functions. Finally, we will learn how to deploy our app using Firebase Hosting. I'm really excited to cover this content with you, so let's dive in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Firebase](../../Skills/Web%20Development/Firebase.md) (12), [Angular](../../Skills/Web%20Development/Angular.md) (4), [Google](../../Glossary/Service/Google.md) (3), [DevOps](../../Topics/DevOps.md) (1), [Google cloud platform](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [What you should know](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/what-you-should-know-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/what-you-should-know-2?u=76281980&t=0)** - [Instructor] This course will assume a basic understanding of [Angular](../../Skills/Web%20Development/Angular.md). The [Angular CLI](../../Skills/Web%20Development/Angular%20CLI.md) assumes that you have Node, [npm](../../Skills/Web%20Development/npm.md), and [Git](../../Skills/Software%20Development/Git.md) installed on your system. If you're unfamiliar with Angular, I recommend you watch our Essential Training Course for Angular. If you don't have Git installed on your system, go ahead and download it from [git-scm.com](https://git-scm.com). We will be using Node to install packages, and it's needed for the Angular CLI. If you don't know how to use npm, I recommend you watch our course on npm the Node Package Manager. I'll also be using Visual Studio Code as my main editor. You can download it from code.[visualstudio.com](https://visualstudio.com). Its native TypeScript support, intelligent [JavaScript](../../Skills/Software%20Development/JavaScript.md) code editing, and cross-platform support makes it the perfect choice for Angular development. If you're interested in the theme I am using, it is the Night Owl theme by Sarah Drasner. Lastly, we are going to spend some time in the terminal. If you're on a Mac, I recommend downloading and installing iTerm2, version three and using a shell like ZSH and the Oh My Zsh framework, as it provides you with tooling that will make you more productive at your terminal. If you're on a [Windows](../../Glossary/Service/Windows.md) machine, I highly recommend you check out Cmder as an alternative to the Command prompt.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Angular](../../Skills/Web%20Development/Angular.md) (4), [npm](../../Skills/Web%20Development/npm.md) (3), [Git](../../Skills/Software%20Development/Git.md) (3), [Angular CLI](../../Skills/Web%20Development/Angular%20CLI.md) (2), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-the-exercise-files-2?u=76281980&t=0)** - [Instructor] The exercise file contains a [Git](../../Skills/Software%20Development/Git.md) repository, where we'll be building a fictitious app called The Grid, which will contain a list of secret agents. The master branch contains the completed application, and the starting points for this course will be the branch 01-04-begin. We can checkout that branch 01-04-begin. I recommend you start here and work together with me and build the entire application. Once you download the exercise files, you will only need to [npm](../../Skills/Web%20Development/npm.md) install once, and you can do this at the root of the project. Let me checkout the master branch, and then npm install. At any point, if you wish to see the files for a specific video, there is a branch you can use. For example, if you're in Chapter Two, Video Three, you can checkout the branch 02-03-begin. You could checkout 02-03-begin. If you wish to see the completed files for that particular video, you can checkout the branch 02-03-end.
>
> **[1:15](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-the-exercise-files-2?u=76281980&t=75)** The entire repository is also available at this link. For each video, you can check out the pull request I made to verify the changes match with your work. Lastly, there is sample data that you can use for your users, including sample profile images.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [npm](../../Skills/Web%20Development/npm.md) (2), [Git](../../Skills/Software%20Development/Git.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/installing-tools-and-clis-2?u=76281980&t=0)** - [Instructor] We will be using both the [Node.js](../../Skills/Web%20Development/Node.js.md) runtime, along with [npm](../../Skills/Web%20Development/npm.md). We will be working with the current LTS, which is 10.16.3 at the time of this recording. And you will need at least version 6.9.0 of NPM, which comes bundled with Node. You can also use NVM, the Node Version Manager, which allows you to manage multiple versions of Node. Let's verify both versions in the command line. I'm on a Mac, so I'm going to head over and use the iTerm2 application. If you're on a [Windows](../../Glossary/Service/Windows.md) machine, use the install command prompt. I can type in node dash dash version. And I see the Node.js version installed on my system. And I can also type in npm dash dash version. And verify that NPM is installed on my system. You will now need to globally install the [Angular CLI](../../Skills/Web%20Development/Angular%20CLI.md) on our system. At the time of this recording, the current version of [Angular](../../Skills/Web%20Development/Angular.md) is version eight. This application should work with version nine as well, once it is released. We will be working with version 8.3.2 of the Angular CLI. Let's go ahead and use our terminal to install the Angular CLI. You might need to use Sudo in your computer. NPM install, dash g for globally, Angular CLI. And we can specify the exact version using the add sign. And we will use version 8.3.2. This will go ahead and [Fetch](../../Skills/Web%20Development/Fetch.md) the necessary dependencies from NPM in order to install the tool globally on your machine.
>
> **[1:31](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/installing-tools-and-clis-2?u=76281980&t=91)** This will take a few moments. Once that is done, let's verify that it was installed on our system. And we can do that by typing ng dash dash version. We see vesion 8.3.2, along with the versions of it's dependencies. Great, we are now ready to get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [npm](../../Skills/Web%20Development/npm.md) (6), [Angular CLI](../../Skills/Web%20Development/Angular%20CLI.md) (4), [Node.js](../../Skills/Web%20Development/Node.js.md) (2), [Windows](../../Glossary/Service/Windows.md) (1), [Angular](../../Skills/Web%20Development/Angular.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/generating-an-angular-application-2?u=76281980&t=0)** - [Instructor] The starting point for this course will be an [Angular](../../Skills/Web%20Development/Angular.md) application that has been previously generated, but I want to show you here how you can easily generate an application using the [Angular CLI](../../Skills/Web%20Development/Angular%20CLI.md). Once you've installed the Angular CLI, it's been added to your global path in order to make it easy for you to use it. Let's take a peek at all the options that are available to use by running the command, ng. We see that we have commands to create a new application, serve our application, linting, and building our application. If you need help with a particular command, say creating a new application, you can use the help flag. For example, ng new --help. It's important to know that when you scaffold a new application using ng new, a local version of the [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) will be installed in the node modules of your application. Running the ng commands from the command line will delegate to the locally installed version. Let's generate a new application that uses [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) and SASS for our styles. Let me go ahead and clear my terminal here. And I can use the ng new and specify the name of my application,
>
> **[1:05](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/generating-an-angular-application-2?u=76281980&t=65)** - -routing, in order to use Angular routing, and specify the flag style equals scss to use SASS for my styles. This will scaffold a new project for you and start installing dependencies, generating a package.[JSON](../../Skills/Web%20Development/JSON.md), config files for typescript, testing, and for running and building the application along with an application module Bootstrapped and ready to go. Once that is done, let's open this application in our code editor. I will be using Visual Studio Code. Let's first change directories into that new application and I can use the code command and open the current directory. Here we first see the configuration files and in the Source folder is where our application code lives. We see that we have our application component, our application module, and a main.ts file where this module is imported and Bootstrapped to run our application. To serve our application using a development server, we can use the ng serv command. I can also specify the open flag to automatically open my browser. And we have the default Angular application generated and open in our browser.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Angular](../../Skills/Web%20Development/Angular.md) (3), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (3), [Angular CLI](../../Skills/Web%20Development/Angular%20CLI.md) (2), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/overview-of-the-firebase-console-2?u=76281980&t=0)** - [Instructor] In this course we will working with [Firebase](../../Skills/Web%20Development/Firebase.md) by [Google](../../Glossary/Service/Google.md), so we will need to first configure a Firebase project. From the Firebase homepage, log into the Firebase console by clicking on the Go to Console link and log in with your Google account.
>
> **[0:21](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/overview-of-the-firebase-console-2?u=76281980&t=21)** Once logged in, you will be taken to the Firebase dashboard. Go ahead and create a new project. You can name it whatever you like. If the name is not unique, Firebase will suggest a unique name for you. We will be working with a fictitious app called, The Grid, so I will name it [Angular](../../Skills/Web%20Development/Angular.md)-firebase-grid-dash. Go ahead and click Continue. We won't be using Google Analytics. Firebase will go ahead and create the project for you and notify you once it's ready. And our project is now ready. Clicking Continue will take you to that project's dashboard, which we will be using throughout the course. Heading over to the Develop tab, you can see the different Firebase features that we will be using. We will be using Firebase Authentication to manage both the adamant and the registered users for our app. We will be using Cloud Firestore as a database to store data and leverage its real time capabilities. Firebase Storage will be used to store files. In our case to store user uploaded images. We will be using Firebase Hosting to easily deploy our app to the cloud. And finally, we will be using Firebase Functions and dive into the serverless world. At this point, it would be good to install the Firebase [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md), since we will be working with Firebase. Head over to your terminal now and we can install it with [npm](../../Skills/Web%20Development/npm.md), npm install -g firebase-tools. Once that is completed,
>
> **[1:53](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/overview-of-the-firebase-console-2?u=76281980&t=113)** sign into Firebase using your Google account and we can do that by typing in firebase login. Select your Google account
>
> **[2:12](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/overview-of-the-firebase-console-2?u=76281980&t=132)** and we can go ahead and allow the Firebase CLI access to our Google account. Once that is completed, you can head back to the command prompt. What the firebase login command did is to connect your local machine to Firebase and grant you access to your Firebase projects. To test that authentication worked and to list all of your Firebase projects, you can run the following command, firebase projects list.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Firebase](../../Skills/Web%20Development/Firebase.md) (24), [Google](../../Glossary/Service/Google.md) (6), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (2), [npm](../../Skills/Web%20Development/npm.md) (2), [Angular](../../Skills/Web%20Development/Angular.md) (1)
> **Prerequisites:** install (3), configure (1)
> **CLI Commands:** npm (2)
> **Env Vars:** cli (2)
> **Tools:** terminal (1), command prompt (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Configuring your web application](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/configuring-your-web-application-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/configuring-your-web-application-2?u=76281980&t=0)** - [Instructor] Now that we have created a [Firebase](../../Skills/Web%20Development/Firebase.md) project, and install the firebase [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) tools, we need to configure our web application with firebase through the firebase console. And also install AngularFire which is the official library for firebase in [Angular](../../Skills/Web%20Development/Angular.md). AngularFire will make it much easier for us to integrate firebase into our Angular application allowing us to easily use authentication, manage data, use realtime bindings and upload files. It's observable based, so it uses the power of RxJs for maximum efficiency. This will be the starting point for the course, so in the exercise files, make sure to install dependencies with mpm install. And then, you can check out the 01-04 begin branch, [Git](../../Skills/Software%20Development/Git.md) checkout 01-04-begin. In your terminal, install both AngularFire in the firebase, mpm install firebase angular/fire. While that is installing, let's head over to the Read Me instructions for AngularFire. Click on installation and setup, and go down to step four. You will copy this placeholder values. And once firebase and AngularFire is installed, let's open up our application using Visual Studio code. Heading over now to the environment file, we can go ahead and paste these values here.
>
> **[1:37](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/configuring-your-web-application-2?u=76281980&t=97)** Let's head over now to the firebase console. Head over to the Project Settings, and down to the area labeled, Your apps. Click on the web icon, I will add The Grid Dashboard as the app nickname. You don't have to setup hosting just yet, and click on Register App. It would then suggest for you to copy and paste these scripts. But since we are using Angular firebase, we don't need to do that. However, we would need these values. Grab the necessary values and place them in the placeholder values in your environment file. Let's grab the apiKey, the authDomain, the databaseURL, the projectID, the messagingSenderId. And for now, we can leave the storageBucket empty. Let's talk a little bit about this environment file. Often, in your application, it is desired to provide different environment variables, depending on what environment your app is being stripped on. For instance, when developing locally or in a staging environment versus in a production environment. All you really need to do is to import
>
> **[3:11](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/configuring-your-web-application-2?u=76281980&t=191)** the environment object, import { environment } from '../environments/environment'. In your application, you always want to import the environment file, not the one that has the environment such as prod. And then let's say we need to build a production configuration, all you need to do is to specify the environment when running your build. I'm opening up a terminal here, and we'll run ng build and specify the prod configuration here. In this case, an environment.prod will be used. Let's go ahead and inspect the angular.[JSON](../../Skills/Web%20Development/JSON.md) file. And let's find the production configuration.
>
> **[4:09](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/configuring-your-web-application-2?u=76281980&t=249)** You can see here, in line 48 for the production configuration, it will replace the environment.ts file with environment.prod.ts. The last thing we need to setup is to add the AngularFireModule into our main application module. First, let's import the AngularFireModule this will be from 'angular/fire' then we will add this module into the imports. AngularFireModule and we'll call initializeApp and we'll passed in environment.firebase. Let's test our app by running mpm start.
>
> **[5:05](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/configuring-your-web-application-2?u=76281980&t=305)** Let's go ahead and put our browser, open up the developer tools, and verify that you don't get any compilation errors or any console errors on your browser.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Firebase](../../Skills/Web%20Development/Firebase.md) (12), [Angular](../../Skills/Web%20Development/Angular.md) (6), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (1), [Git](../../Skills/Software%20Development/Git.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-authentication-setup-2?u=76281980&t=0)** - [Instructor] Now that we have set up our web application with [Firebase](../../Skills/Web%20Development/Firebase.md) by adding configuration values, we first need to add authentication through the Firebase console. Click on Authentication, then Set up Sign-in Method. We will enable email and password authentication.
>
> **[0:22](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-authentication-setup-2?u=76281980&t=22)** Let's head to our application now. In the application module, first import the AngularFireAuth module. Import [Angular](../../Skills/Web%20Development/Angular.md) Fire Auth module and this will be from angular/fire/auth and we will go ahead and add that also here to the imports. Let's generate a login component that will provide a form for the user to sign up and log in. Open up your terminal, ng generate component, and we will call this component, login. Once it is created, we see that a Login folder has been created for you here and the login component has been added automatically to our application module. I have provided a starting point for the form and some simple CSS. In the Exercise Files, look under Resources, 02-01, and go ahead and drag the login component template file to the sidebar. Go ahead and replace that and also some CSS here. The classes used for the [HTML](../../Skills/Web%20Development/HTML.md) elements are from the Symantec UI framework. You can visit the Symantec UI documentation site if you wish to have a different look. Next, we want to display this form at the root route of our application.
>
> **[1:54](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-authentication-setup-2?u=76281980&t=114)** Head over to the application [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) module and add this component at the root route. We will add an object here, the path is going to the be the root and the component will be the login component. Also, when working with [Forms](../../Skills/Web%20Development/Forms.md) in Angular, be sure to import the forms module form Angular Forms.
>
> **[2:22](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-authentication-setup-2?u=76281980&t=142)** Import forms module from angular/forms.
>
> **[2:32](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-authentication-setup-2?u=76281980&t=152)** Let's go ahead and run the application using [npm](../../Skills/Web%20Development/npm.md) start. Once that is done compiling, you can head to your browser, to localhost port 4200 and verify that the sign-up form displays.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Angular](../../Skills/Web%20Development/Angular.md) (5), [Forms](../../Skills/Web%20Development/Forms.md) (5), [Firebase](../../Skills/Web%20Development/Firebase.md) (2), [HTML](../../Skills/Web%20Development/HTML.md) (1), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=0)** - [Instructor] Now that we have a new form for inputting information, let's add functionality to the simple form and create a user with [Firebase](../../Skills/Web%20Development/Firebase.md). Head over now to the template file for the login component. Because we are inputting the [Forms](../../Skills/Web%20Development/Forms.md) module, [Angular](../../Skills/Web%20Development/Angular.md) will attach the NgForm directive to any form. This makes the NgForm object available in our view. In our form, we'll create a local template variable called form and assign it a value of ngForm. Note that this isn't the string NgForm, but rather the NgForm object. When the form is submitted, we want to call the onSubmit method. And as argument, we pass in the local form variable. The next step is the add the ngModel directive to all of the inputs. This will create an associate between the inputs and the ngForm object. By doing this, the value of the ngForm object will have a value property, which will be an object containing every input with an ngModel directive at these properties. The property names will correspond to the value of the name attribute. Let's head to the login component now. We first need to import the AngularFire auth service. Let's go ahead and inject it here. Private
>
> **[1:32](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=92)** afAuth, and this will be the AngularFire auth service. Let's go ahead and implement now the method to create a user. We will be using async08 for this method so let's label it as such. Async, onSubmit, it will take in the ngForm. Let's go ahead and grab the values from the form by destructuring the form.value object. Let's grab the email, the password, the firstName, and the lastName. We can destructure the form values by accessing the value object here. We're going to have a try catch block here. We will first use the Firebase auth service to create a user with email and password. Let's start the response and we will call the createUserWithEmailAndPassword method. We use email and the password and if there's any error, we will simply log it out for now. After creating the user with email and password, we will update the display name of the user profile. And we can call
>
> **[3:05](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=185)** the updateProfile method on that user that we get back. We want to update the displayName and we will use a template string here. firstName and then lastName
>
> **[3:28](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=208)** And looks like I need to fix this here and that's capital NgForm and let's go ahead and import NgForm from the Angular forms module. Lastly, we want some sort of loading indicator that our application is contacting Firebase. And we will do so by applying the loading class on the form, if the loading variable is true. So on the form, we could say class.loading and this will only be set if the loading variable is true. Let's go ahead and create this variable now. Initially it'll be set to false. Set it to true. And when the action is done, we can set it back to false. One last thing to do, is you want to go ahead and clear the form if the user successfully signs up. We can easily do this by calling the form.reset method. I'm going to start the application with [npm](../../Skills/Web%20Development/npm.md) start. And let's turn to out browser now and try things out. I'm going to refresh a page here. I'm going to have two [Windows](../../Glossary/Service/Windows.md) open. One with our application, and one with the Firebase console so that you can see immediately when a user signs up. Make sure you go to the authentication tab in you Firebase console
>
> **[5:01](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=301)** I'm going to create a test user. Eric Ortiz And I have created this email. The form is cleared. Let's go ahead and refresh here. And we can see our new user here now. To confirm that you have a current Firebase session, go to your application tab in the developer tools
>
> **[5:30](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-users-2?u=76281980&t=330)** under indexDB and you will see information about the current Firebase user. Next, I will show you how to display the current user in the application. And how to route the user to a new page, once the user signs up.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Firebase](../../Skills/Web%20Development/Firebase.md) (7), [Forms](../../Skills/Web%20Development/Forms.md) (2), [Angular](../../Skills/Web%20Development/Angular.md) (2), [npm](../../Skills/Web%20Development/npm.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **Code Identifiers:** ngform (4), onsubmit (2), ngmodel (2), firstname (2), lastname (2)
> **Exercise Files:** template (3)
> **CLI Commands:** npm (1), make (1)
> **UI Navigation:** go to (2)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Displaying current user](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-current-user-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-current-user-2?u=76281980&t=0)** - [Instructor] Now that we have implemented user sign up, we need to be able to display the currently authenticated user. It will also provide a better [user experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) if the user gets routed to a profile page where they can see their information. Let's do that now. Start by generating a new ProfileComponent by using the [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md), ng generate component, and I will call this component profile. The new component is generated, and let's go ahead and add a new route. Head to the application [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) module. The new route will be profile/:id. Where id will be the user id, and the component will be the ProfileComponent. Heading back to the login component, once the user successfully signs up, we want to take them to this new ProfileComponent. Let's go ahead and inject the router here. We can grab the user id from the response. And then, use the router to navigate the user to the profile page. That will be /profile/userid here. Let's go ahead and start the application. While that is compiling, head over to the [Firebase](../../Skills/Web%20Development/Firebase.md) console.
>
> **[1:37](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-current-user-2?u=76281980&t=97)** And you can go ahead and delete this test user account. Also, in your developer tools, head to the application tab and go ahead and delete this object store for now. Once that is done compiling, head over to your app again. Let's go ahead and refresh here. Let's create the user again. Click on Sign Up, and now we are routed to the new profile page. The AngularFire library allows you to easily grab ahold of the currently authenticated user. Let's head to the ProfileComponent now. In the constructor, first inject the AngularFireAuth service. We'll call this afAuth, this will be the AngularFireAuth service. Heading over to the template now, we can now display our information. Let's have a div here, we will display this only if we have the currently authenticated user. Since, that is an observable, we use the async type and then store that as the user variable. Let's go ahead and grab the Name, user.displayName.
>
> **[3:09](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-current-user-2?u=76281980&t=189)** We can also grab the email, and lastly, we will grab the user id.
>
> **[3:25](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-current-user-2?u=76281980&t=205)** Heading back to our application now, we can see the information of the currently authenticated user. To see all the available information, you can refer to the firebase documentation at this URL.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Firebase](../../Skills/Web%20Development/Firebase.md) (2), [User experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) (1), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (1), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
> **Code Identifiers:** afauth (1), displayname (1)
> **Env Vars:** cli (1), url (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** template (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [User logout](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-logout-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-logout-2?u=76281980&t=0)** - [Instructor] We are now displaying the current user, but we need the ability to logout the user. Let's head first to the app component which holds the header, and add a button for the logout action. Button here of class="ui secondary button and then logout, and we'll add a click handler, that will call the logout method on a component. In here, the text for the button will be Logout. Let's go ahead and add some css to position it to the far right. The logout button will be float right, relatively positioned, and we'll adjust the position slightly. Heading over to the application, we now see the Logout button there. Let's head back to the component now and implement the logout method. Instead of injecting again the AngularFireAuth service, let's create our own wrapper authentication service in order to encapsulate some common logic. For example, in a logout action, we will need to logout using the [Firebase](../../Skills/Web%20Development/Firebase.md) service, and also redirect the user back to the login page. We can go ahead and generate a service using the [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md). I'm going to go ahead and kill the server here.
>
> **[1:35](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-logout-2?u=76281980&t=95)** Let's go ahead and generate a service, ng g which is short for generate, s which is short for service, and I'm going to call this auth service and will be under the core folder. And we see the auth.service generated here. In this service, we will inject both the router and also the AngularFireAuth service. We'll call this afAuth, and it will be the AngularFireAuth service. Let's implement a logout method here. We will simply signout a firebase by calling this signout method here. And then route the user to the route page. Heading back now to the app component, in the constructor, we can inject our new AuthService, private auth: AuthService.
>
> **[2:50](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-logout-2?u=76281980&t=170)** In the logout method here, on the app component, we simply be a call to the logout method on our new AuthService. Let's go ahead and start application now. Heading now to application, let's refresh the page. We can see that we have a currently authenticated user, and let's test the logout button. And we redirected now to the Sign Up page. There is one issue however, as you can see, that we can still see the Logout link. Let's fix that now. We don't want to display the Logout link, if there is a current user session. Let's head back to the AuthService now, and we can add a new method, and name it isLoggedIn. And here we can simply check the AngularFireAuth service and check if there's a current user. That information will be .auth.currentUser. Heading back to the application component, let's add to the template, and we can conditionally render this with ngIf. And we can check the isLoggedIn method on our new AuthService. And now we see that the Logout button is gone.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Firebase](../../Skills/Web%20Development/Firebase.md) (2), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (1)
> **Code Identifiers:** isloggedin (2), afauth (1), currentuser (1), ngif (1)
> **Definitions:** short for (2), is a  (1)
> **Env Vars:** cli (1)
> **Exercise Files:** template (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [User login](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=0)** - [Instructor] We have provided a way for users to sign up and log out, but we now need to provide a way for users to log in. Let's implement a way for users to switch between a login and a signup form. Let's head back now to the login component. Create a new variable here called Action that will hold the types of the string Login or the string Signup. And default it to the string of Login. We can add two getters to easily use in our template. The first one will be IsLogin and this will return true if the current action is Login. The second one will be IsSignUp and this will return true if the current action is Signup. Heading now to the template file, we only want to display the first and last names if the action is Signup. You can use NGF here and use our new getter: IsSignUp.
>
> **[1:16](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=76)** We will wrap the bottom actions in a div with class of Actions. We can move the button here. And for the button text, we will simply display the action here and I will use the uppercase pipe here.
>
> **[1:41](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=101)** Let's add a link here now. This will only be displayed if the current action is Login. And we have a link here. When the user clicks on this link, it will set the action to Signup.
>
> **[2:08](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=128)** And we will add another link. This will only be displayed if the current action is Signup and, when the user clicks on this link, it will set the action to Login. Let's go ahead and add some CSS to move these buttons to the right. I'll go ahead and delete this style and add some styles for the div with the class of Actions. And we will simply add this rule of text align to the right. Let's go ahead and verify our application. And now we have our two buttons here. Let's go ahead and fix this input here. It looks like I added the NGF only to the first name. We want to add it to the container div. Heading back to our application, clicking on Sign Up, displays the full form. Clicking on Login displays only the email and password fields. Let's head on back to the component file. Here, we will update the OnSubmit method. In the Try block, if the action is Signup, we'll perform the current logic. Otherwise, the action is Login,
>
> **[3:43](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=223)** so we will sign in with email and password here. And we can do that by calling the SignInWithEmailAndPassword method on the Auth service. We're going to declare the response variable here and delete this Const declaration. And then, regardless of the action, unsuccessful login or signup, we will redirect the user to the profile route. Let's head to the application now. I'm going to open up the Developer Tools and check for any error messages that are logged out. Let me try to log in without inputting any information. We see here that [Firebase](../../Skills/Web%20Development/Firebase.md) is already performing client side of validation for me. I will input the email only. Let me try to log in. And now it's throwing an error because there is no password here. Let me go ahead and input a wrong password. We can see that it actually goes ahead and makes the request, but we get back the error message that the password is invalid. We should display this error message to the user. Let's head back to the template file and, just above the form, we can display the error message. We'll have a div with class of UI Negative Message.
>
> **[5:25](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=325)** And remember these are all classes from the semantic UI framework. And we only want to display this if there is an error available. In here, we will simply display the error message. We also want our application to load the semantic UI styles to display these messages, so let's add the corresponding style files in [Angular](../../Skills/Web%20Development/Angular.md).[JSON](../../Skills/Web%20Development/JSON.md). We can add a new line here under Styles and the specific module will be Semantic UI Message and the file will be Message. I'm going to stop the application now using Ctrl + C and start it up again. While that is loading, go ahead and head back to the login component and we want to store this specific error message. It will be of type String. When the user first tries to log in or sign up, we will reset this error message to null. And if there is any error message, we will store this in the Error variable. Let's head back to the application now. Let me try to log in and we can see the error message is displayed here to the user. If I try to log in without a password, I can see that the error message changes. If I put in a wrong password,
>
> **[6:59](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/user-login-2?u=76281980&t=419)** I can see the error message here as well. Let me try to log in now with the correct password. And I'm redirected back to the profile page. I can go ahead and log out and I am redirected back to the root page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Firebase](../../Skills/Web%20Development/Firebase.md) (1), [Angular](../../Skills/Web%20Development/Angular.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Env Vars:** ngf (2), css (1)
> **Exercise Files:** template (3)
> **File Paths:** angular.json (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Using Angular route guards](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=0)** - [Instructor] Before wrapping up our work on authentication, we need to address a couple of issues. Let me show you what I mean. I'm going to go ahead and log in. Once I log in, I am redirected to the profile route. Let me grab this URL and copy it, and I'm going to log out. On pasting this URL and navigating to it, you can see that I am able to go to this route. Nothing is displayed because there isn't a current authenticated user. We should prevent the user from being able to go to this route. There's also a second issue. Let me go ahead and log in again. Once logged in, I am able to go to the root route, and you can see the logout button appears. In this scenario, we should redirect the user back to the profile page, and not allow them to visit the root page, which displays the login form. Let's tackle the first issue. The [Angular](../../Skills/Web%20Development/Angular.md) router provides a robust way to prevent users from going to specific routes, by using what's called a route guard. Detailed information is provided at this link. Let's go to our application now, and to our [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) module, where we define the application's routes. We will import the AngularFireAuthGuard, which provides a prebuilt, canActivate router guard using the AngularFireAuth service.
>
> **[1:35](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=95)** And we will import this from Angular/fire/auth-guard.
>
> **[1:46](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=106)** To the profile route, we can add the canActivate guard, and use this AngularFireAuthGuard. By default, unauthenticated users will not be permitted to navigate to this protected route. Seems like this was duplicated here, let's go ahead and fix that. And we will also need to add this AuthGuard to the providers in the main application module.
>
> **[2:21](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=141)** Let's go ahead and log in now. First, let me log out, refresh the page, and let's try to log in. Let me grab this URL, log out, now we'll try to visit this URL. You can see that the user is prevented from visiting that route, but then the user is left in some intermediate stage. Instead, the user should be redirected back to the login page. Let's head back to our application routing module. We can customize the behavior of this AuthGuard by passing an RXJS pipe through the route data's AuthGuard pipe. Let's go ahead and import the "redirect unauthorized to" pipe from the AngularFireAuthGuard module. We can use that helper to create a custom pipe. Let's name this redirectUnauthorizedToLogin,
>
> **[3:34](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=214)** and we will use this helper, and simply return the user back to the root page. Finally, we can add this pipe to our route data. This would be an object with the property of authGuardPipe, which will be used by [Firebase](../../Skills/Web%20Development/Firebase.md). And we will use this custom pipe. Let's go ahead and log in now. Let me grab this URL, log out, and when I try to navigate to that URL, I am redirected back to the login page. Let's address a second issue now. When the user is logged in, we shouldn't allow them to go to the root page and view the login form. We should redirect them to the profile page. We can create a new pipe called redirectLoggedInToProfile
>
> **[4:36](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=276)** and then use the map operator to transform an optional user to a boolean or array.
>
> **[4:48](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=288)** If there is a user, we can redirect them to the profile page. Otherwise, return true to allow the route.
>
> **[5:09](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=309)** And let's go ahead and import this operator. From rxjs/operators.
>
> **[5:29](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=329)** To the login route, we will add the canActivate AuthGuard, and we will use the AngularFireAuthGuard here, and we'll provide the data for the authGuardPipe property.
>
> **[5:50](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=350)** We will provide this custom operator that we just created. Let's go ahead and log in now. When I'm logged in, if I request the root page, you can see that I am redirected back to the profile page. There's one slight issue with the AuthGuard for the profile route, however, in that if a user knows someone else's user ID, they will be able to go to that route, and we want to prevent that. Let me demonstrate this. When we are logged in, we can try to go to another page, say, the user ID is 123. Even though we are using the user ID from the current session for security purposes, we want to redirect the user to the URL which pertains to them. Let's create another pipe, and call it onlyAllowSelf.
>
> **[6:45](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=405)** It will take a next which is the route, and we want to use the map operator to transform an optional user to a boolean or an array. If there's a user and the user ID in the route, which we can access with next.params.id, equals the user of the currently authenticated user, then we can return true. Otherwise, we will return the user back to the root page.
>
> **[7:32](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/using-angular-route-guards-2?u=76281980&t=452)** And we can replace this custom pipe with onlyAllowSelf. So now I'm back in the application, if I try to go to another user ID, I am redirected back to the profile page that pertains to the authenticated user.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Angular](../../Skills/Web%20Development/Angular.md) (2), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (2), [Firebase](../../Skills/Web%20Development/Firebase.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-firestore-intro-2?u=76281980&t=0)** - [Instructor] I sure hope you have already been impressed with the powerful features that [Firebase](../../Skills/Web%20Development/Firebase.md) provides. We have easily added authentication to our app that otherwise would have taken a really long time to implement ourselves. But now it's time to start working with data. Cloud Firestore is a flexible, scalable, [NoSQL](../../Skills/Software%20Development/NoSQL.md) cloud database to store and sync data for client and server side development. This data can be accessed directly via native, as the case. It ships the comprehensive set of security rules, so you can access your database without needing to set up your own server. And also, it will allow us to sync data across devices. The Cloud's Firestore model is document oriented. So there aren't any tables or rows like in a [SQL](../../Skills/Data%20Science/SQL.md) database. Instead, we store data in documents, which are then organized into collections. Let's start with the document. It would be the unit of storage when working with Cloud Firestore. It is identified by name and it contains field value pairs. The values support many data types, Boolean, number, string, geopoint, binary blob, and timestamp. You can also use arrays or nested objects, called maps, to structure data within a document. You can also organize more complex data as shown here. You can see that it resembles a plain [JavaScript](../../Skills/Software%20Development/JavaScript.md) object. Now let's talk about collections. Documents are organized into collections. You can imagine that we have a Users collection for all of our registered users.
>
> **[1:34](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-firestore-intro-2?u=76281980&t=94)** When working with Cloud Firestore in our app, we will be able to both create a reference directly to a document or directly to a collection. It is also worth mentioning that you can organize your data into sub-collections as needed, as shown in this diagram.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Firebase](../../Skills/Web%20Development/Firebase.md) (1), [NoSQL](../../Skills/Software%20Development/NoSQL.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Env Vars:** sql (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Cloud Firestore setup](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-firestore-setup-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-firestore-setup-2?u=76281980&t=0)** - [Narrator] In this particular chapter, we will be setting up a users collection and also allow the user to update their profile data. Now, when using email and password authentication in [Firebase](../../Skills/Web%20Development/Firebase.md), that data is actually securely stored separately. A major reason is of course, to prevent any accidental user leaks and also allow complete flexibility with how we store our user data in Firebase. This means that it is impossible currently to retrieve a list of users, nor can we request from Firebase authentication the data for a particular user. We will be creating our own users collection in Cloud Firestore, where users will update their profile data. Let's first start by cleaning up any test users. Heading over to the authentication tab, can go ahead and delete this test user. Now we can go ahead to the database tab and we will create a new database. We will leave it in locked mode. Currently any read or writes will be denied, but we will be updating that. Click, next and you will choose a location. This location setting is your project's default, [Google Cloud platform](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) resource location. The provided default should be okay. Click done and it will provision your Cloud Firestore. It may take a few moments. And that's it, we are ready to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Firebase](../../Skills/Web%20Development/Firebase.md) (3), [Google cloud platform](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1)
> **Definitions:** means that (1)
> **Speakers:** - [narrator] (1)

#### [Deploying security rules](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=0)** In the [Firebase](../../Skills/Web%20Development/Firebase.md) console for Cloud Firestore, you can go ahead and click on the Rules tab to view the currently associated security rules. This block here tells us that the security rules will be for the Cloud Firestore service. And the first match rule is actually the root of your database. The second match rule tells it to match any document. So in totality, this is saying for any document in my database, I allow read and write if false, which obviously means never. You can always change the security rules on the Firebase console, but we will actually be using the Firebase [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) to deploy these rules. It has the advantage since any changes in rules can be tracked via [Git](../../Skills/Software%20Development/Git.md). We have already installed the Firebase CLI. If you haven't, go ahead and install it now. Heading back to our terminal, you can install the Firebase tools using mpm install -g firebase-tools. Then make sure to sign in and test your Firebase CLI by using firebase login. And list your Firebase projects using firebase projects:list. We will now initialize a firebase project. Since we have already created a project in the Firebase console, we will simply associate this project directory with the Firebase project. Let's go ahead and do that now. We can use the command firebase init.
>
> **[1:35](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=95)** Use your arrow keys to choose a Firestore, hit the space bar to select it and then click enter. We will be setting up other features later. Choose "use an existing project." And then select the Firebase project you've been working with. In my case, it is the first one listed here. It will then ask you a series of questions, specifically what you would like to name the different files associated with Cloud Firestore. The default names are perfectly fine. Once that is done, let's head over to Vision Studio Code and see the newly created files. And we have four new files. We have the firebaserc, which is a file that stores your project. Firebase.[JSON](../../Skills/Web%20Development/JSON.md), a configuration file that lists your project configuration. For now, it is indicating the files used for our Firestore rules and for our Firestore indexes. The indexes.json file includes any indexes for our Cloud Firestore. We won't be working with this. And finally, the firestore.rules file are the security rules for our database. We'll be modifying this and deploying our rules. Note that these are the same rules that are currently in the Firebase console. Head over to the Vision Studio Code extensions now. And we will search for and install an extension that will help with our Firestore rules. You can search for "firebase security rules." This is a specific one that I'm looking for.
>
> **[3:12](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=192)** Now that it's installed, I can head back now to my security rules, and I see that syntax highlighting is added to my security rules. Let's modify this file now and change the match condition. We'll be working with the users collection, and each user will have a document for it's profile data keyed by the user ID. We want to allow both read and write to that location only if that ID matches a currently authenticated user. So you can specify allow read if request.auth.uid (keyboard clicks) is equal to the user ID. And we can specify a similar rule for write. This means that only authenticated users will be able to read or write to this collection. And a user will be able to read and write only from his or her personal document in this collection. Let's now go ahead and deploy these security rules. Open your terminal, and we can deploy these security rules using firebase deploy and specify the only flag firestore:rules. It tells me that the deploy's complete, we can head over to the Firebase console, refresh here,
>
> **[4:49](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-security-rules-2?u=76281980&t=289)** and see that my security rules have been updated.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Firebase](../../Skills/Web%20Development/Firebase.md) (20), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (3), [JSON](../../Skills/Web%20Development/JSON.md) (2), [Git](../../Skills/Software%20Development/Git.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=0)** - [Instructor] Now that we have deployed our security rules we can start writing and updating data in a collection. We'll be creating our own user's collection in Cloud or Firestore, where users will update their profile data. The first thing we need to do is to import the [Angular](../../Skills/Web%20Development/Angular.md) Firestore module, in our main angular module and add it to the imports. We will import AngularFirestoreModule, from angular/fire/firestore
>
> **[0:36](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=36)** and then we add this module to the imports here. Heading back now to the login component, once the user successfully signs up, we'll create a document for that user and the user's collection. And then, route the new user to the profile page. Let's first inject a custom auth service that we have implemented in our app. Private auth and we import the auth service. After updating the user profile with a display name, we will call a method on this auth service. And we will call this create user document. Let's go ahead and implement that method now. We should first create an interface to model our profile data. Under the core folder, create a file and name it user-Profile.model.ts. This will be an interface named UserProfile. And it will have a few properties, the user ID, the name, email, the address, city, state, the zip code, the phone, the specialty,
>
> **[2:19](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=139)** and also the IP address. Let's head over now to the auth service. And we will implement the createUserDocument method. It will consist of three steps. We get the current user. we then create the object with new data. Then finally, we write to Cloud Firestore.
>
> **[2:54](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=174)** We can grab the current authenticated user from the angular fire auth service. This.afAuth.auth and then grab the current user. Next, we can create the user model. Let's create user profile object. And then we'll be of the user profile type.
>
> **[3:24](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=204)** Let's go ahead and import that now. We will import the user profile from the core folder and the user profile model.
>
> **[3:41](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=221)** The U-I-D will be the user.uid we go ahead and grab the email, and also the name. For now, all the other properties will be empty. And so we need the address, the city, the state, the zip, phone, specialty, and lastly the IP address. It may seem a bit redundant to store the user ID email and name, if it's information already stored in the Fire-based authentication service. As mentioned earlier, when using email and password authentication, that data is actually securely stored separately. A major reason is to prevent any accidental user leaks. and also allows complete flexibility with how we store our user and fire base. This means that it currently isn't possible to retrieve a list of users. Nor can we request, from fire-based authentication, the data for a particular user. So we will be storing user data in a separate database. After creating the model, we can write to the Cloud Firestore at the path for that user specific user ID.
>
> **[5:05](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=305)** Let's first inject the angular firestore service.
>
> **[5:15](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=315)** This will be import angular firestore from angular, fire, firestore.
>
> **[5:32](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=332)** Let me replace this in the constructor.
>
> **[5:40](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=340)** Now we can get a reference to a specific document, at the users/user.useridpath
>
> **[5:56](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=356)** and once we get a reference to that document we can set the data at that location. And we will write this user profile object. It is important to know that Cloud Firestore creates collections and documents implicitly. The first time you add data to the document, you don't need to explicitly create collections or documents. Let's go ahead and start our application. Once that is done, let's head to our application. And just so we can visually see, I'm going to open each window side by side. I'm going to go ahead and create a new user.
>
> **[6:54](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/creating-documents-2?u=76281980&t=414)** On the Firebased Database, I will refresh. And you can see that the new user document has been created.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Angular](../../Skills/Web%20Development/Angular.md) (7)
> **Code Identifiers:** createuserdocument (1), afauth (1)
> **File Paths:** user-profile.model.ts (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Displaying user data](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-user-data-3?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-user-data-3?u=76281980&t=0)** - [Instructor] Now that we have written our user document, in our profile component let's display the newly created information. Heading over to Visual Studio Code, head over to the profile component. We will first need to import a couple of things. Import the AngularFirestoreDocument and also AngularFirestore from [Angular](../../Skills/Web%20Development/Angular.md)/fire/firestore.
>
> **[0:38](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-user-data-3?u=76281980&t=38)** And I'm going to fix this typo here. We will also need to import Observable from RXJS.
>
> **[0:51](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-user-data-3?u=76281980&t=51)** We will need both a reference to the document so let's create that now. Call this observable itemDoc and it will be of type AngularFirestoreDocument. The type will be the UserProfile type, which is a model that we previously created. We can go ahead and import that now. And the actual item will be an Observable of type UserProfile. Next, we will inject the AngularFirestore service. Public afs AngularFirestore. And then in the on knit hook we can get a reference to the document and the observable. The item document will be a reference to the document of type UserProfile and then we can specify the path here. Our users collection is at users and this specific document will be at the user ID. And we can get the current user and then grab the user ID. And next we will get an observable to the item by calling the value changes method
>
> **[2:27](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/displaying-user-data-3?u=76281980&t=147)** on the document reference. This will allow us to watch for any changes in the user document. Heading now to the template, let's just display the [JSON](../../Skills/Web%20Development/JSON.md) for now. We will use the ngif and use the async pipe since it's an observable and we'll store this locally as userProfile. We can put a paragraph here. And then simply type the object into JSON pipe. Let's head back to our page and you can see that the user document object is displayed now. I would like to quickly show you the real time feature. In our Firestore dashboard, you can directly edit any data you see here. Let me go ahead and change a field here. And change that to Eric O. And you can see here that the data is automatically updated. When I edit a field, you should see that data automatically update in the UI. That is one of the best features of Fire based cloud store.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (2), [Angular](../../Skills/Web%20Development/Angular.md) (1)
> **Env Vars:** json (2), rxjs (1)
> **Code Identifiers:** itemdoc (1), userprofile (1)
> **Tools:** visual studio (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Updating user documents](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=0)** - [Instructor] We now need to provide a way for a user to edit their profile data. Head back to Visual Studio Code, and open the exercise files. Look in resources, and open the folder for this video, 03-06. You can grab these files, and replace them with the current template and CSS files in the profile component. Heading back to our application, you should now see the form. Let me go ahead and expand this. We now need to make one small change, in regards to to where we grab the current user ID. In the profile component, instead of grabbing the user ID from the current authenticated user, we will use the ID from the route. This will become useful later, when we have an admin user that is requesting data for a particular user. In the constructor, inject the ActivatedRoute. Let's declare a variable to hold the user ID, and that will be of type string. And then in the constructor, we can go ahead and set this variable. We will use the route snapshot, then use the paramMap to get the ID. The item document should now reference this user ID. Let's connect our form now with our [Angular](../../Skills/Web%20Development/Angular.md) model. We have the item observable, so we only want
>
> **[1:37](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=97)** to display the form once we have this information. We have the item, and then we use the async pipe, and we can store that locally as userProfile. Next, we want to grab the exported ngForm directive, and save it to a local variable called profileForm. And then, add a submit event, and pass in the profile form as an argument. Lastly, we want to add a class of loading, to let the user know our app is performing some work. We then want to populate the form fields with our data, and we can do that by using the ngModel directive. We are storing the user document as a user profile, so we can use that here. We will use the ngModel directive, and assign that to the userProfile.name here. We will do that for the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the inputs as well. We have the lastName here. That should actually be the email. The address, city,
>
> **[3:12](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=192)** state, the zip,
>
> **[3:23](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=203)** the phone, the user specialty,
>
> **[3:32](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=212)** and lastly, the user's IP address. Heading back to our application, we can see that the user information is displaying now. For now, we only have the name and the email address. Let's implement the onsubmit method now. First, let's create two local variables, the first one will be the loading variable, which will default to false. And then, a variable to store any errors. The onsubmit method will be async. And here, we will get the ngForm. We will first set the loading variable to true, then we will use the structuring to grab all the values. We can grab the email, the name, the address, the city, state, zip, the IP, the phone, and the specialty. And we will grab these values from the form using the getRawValue method. This retrieves all of the values of the form, regardless of the disabled status. The next step will be to create a userProfile object.
>
> **[5:05](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=305)** It will contain the user ID, which is the current user ID from the route, and then it will contain all of these values. In a try cache block, we will then call a method on our AuthService. We will call this method updateUserDocument, and it will use the userProfile object that we just created. If there are any errors, we will catch the error, we will log it to the console, and then store that error in our variable. Finally, we will set the loading variable to false. Let's go ahead and implement this updateUserDocument method now. This will actually be in the AuthService, which we need to inject here now. I will put all of these injected services in a new line.
>
> **[6:15](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=375)** And we can inject now the AuthService. Let's head to that service now. We have a method here, updateUserDocument. The argument will be userProfile, of type UserProfile. And this method will actually be pretty simple. Here, we will return the promised return by calling the update method on that document. So we will get a reference to that user document,
>
> **[6:58](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=418)** and then we will call the update method. Let's head to our application now. I will go ahead and put the application and the [Firebase](../../Skills/Web%20Development/Firebase.md) console side by side, so you can see the data updated in real time. I would like to remind you that in the application code under profiles, there's sample data that you could use. I will go ahead and grab the address from here. The city, the state, the zip, the phone number, specialty will be intelligence offer, and then the IP address. And then click submit. Our Firebase data doesn't seem to be updating, let's open up the developer tools, the console, and check for any errors. And I can see an error here. Unsupported field value undefined, found in field email. It seems that I am setting the email as undefined. Let's double-check our template. I'm using ngModel here, and looks like I need to update the name attribute here to email, and also the name to simply name. Let's head back to our application now. And I will fill out the form again. Let's grab the address, the city, the state, the zip,
>
> **[8:38](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/updating-user-documents-2?u=76281980&t=518)** the phone, the specialty was intelligence officer, and also the IP address. And now we can click submit. Now we can see the data was updated in our Firebase document. I can refresh the page, and that data has persisted. I can also change the name here, and click update. And I will automatically see that data updated in the UI. You've done great work, you are well on your way to completing a serverless app built with Firebase.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Firebase](../../Skills/Web%20Development/Firebase.md) (4), [Angular](../../Skills/Web%20Development/Angular.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
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
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-setup-2?u=76281980&t=0)** - [Instructor] We have used [Firebase](../../Skills/Web%20Development/Firebase.md) Cloud Store for storing data and now we will move onto another great service on Firebase, [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md). Cloud Storage is a perfect solution to store and retrieve user generated files, like images, audio, and video without server side code. It will be very easy to set up and use. Let's get started. In your Firebase console on the left hand navigation, click on Storage and then click on the button that says Get Started. By default, only authenticated users will be able to read and write. We will be modifying this by deploying updated security rules using the Firebase [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md). Click on Next and then click on Done to set up Cloud Storage. We are then taken to the Cloud Storage dashboard where you have the ability to upload files manually and also change the security rules. Before switching over to our app, we need to grab the storage bucket location for our environment configuration. Head over to the Project Settings, down to Apps, and the click on the Config radio button. Then, grab the value for the storage bucket. Go ahead and copy that. Head over now to your app. Open up the Environments file and update the value for the storage bucket. Next, we want to set up our app so that we can deploy updated security rules using the CLI. I'm going to open up my terminal here
>
> **[1:33](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-setup-2?u=76281980&t=93)** and you can do that using firebase init. I will go ahead and choose Storage. Using your arrow keys hit the Spacebar and then click Enter. The default file name should be fine. We can see now that the firebase.[JSON](../../Skills/Web%20Development/JSON.md) file has been updated and a new file, storage.rules, was created.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Firebase](../../Skills/Web%20Development/Firebase.md) (6), [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (4), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-security-rules-2?u=76281980&t=0)** - [Male Narrator] As of now, any authenticated user will be able to upload files. While this may work for many applications, in our specific scenario, users will be uploading their profile image at a specific location in our storage bucket. We only want that user to have read and write access to that location. We will also be working on an Atom interface to allow a user with an administrator role to access this as well. We'll be uploading the user images to a specific path to the users ID so we can change the match location. Match, forward slash users, the user ID, and then the file name. In addition, we want to allow read and write to that location if the authenticated user matches that ID. This will prevent a user from writing to a location that doesn't belong to that user. We can do that by checking the request.auth.uid and check that that matches the user ID of the location that they are trying to write to. We also want to enforce a couple of other rules. In our application, we don't want the user to upload an image that is larger than five megabytes. So, file is less than five megabytes. And then also, we want to ensure that the content type is an image. Let's write another match rule for that here. We can write match, forward slash, and then the image ID,
>
> **[1:38](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-security-rules-2?u=76281980&t=98)** and we want to allow write if the resource size
>
> **[1:46](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-security-rules-2?u=76281980&t=106)** is less than five megabytes. And we can do a small calculation here. And also, if the resource type is an image.
>
> **[2:02](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-storage-security-rules-2?u=76281980&t=122)** Let's go ahead and deploy these updated rules now with the [Firebase](../../Skills/Web%20Development/Firebase.md) [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md). We can do that using firebase deploy, dash dash only, firestore rules.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Firebase](../../Skills/Web%20Development/Firebase.md) (2), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (1)
> **Definitions:** is an  (2)
> **Env Vars:** cli (1)
> **Tools:** atom (1)
> **Speakers:** - [male (1)

#### [Profile image upload form](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=0)** - [Teacher] Now that we have set up our storage along with the security rules let's implement the follow upload. We will be working with the profile component. Let's place the profile photo to the left of the details form. Below the form container, we can add a new div with class of ui grid and stackable.
>
> **[0:26](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=26)** This div will house both the profile image and the form. So let me move the form. Let me fix the indentation here. The profile image will be four columns wide so we will add another div here with class of four wide and column.
>
> **[0:57](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=57)** And the form itself will be 12 columns wide so we can add classes 12 column wide. Inside of this container, we will first add the placeholder image. The source will be, assets/profile-placeholder.png
>
> **[1:21](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=81)** This will be the profile image and we will add a class here of ui image. In the resources folder, you will find this placeholder image. Let's head over to the assets folder, open up the resources folder for this video, and you can drag the image here. Below the image tag we will add a file input which will be hidden. So we input type of file. We can create a reference to this input. And last we'll add a change handler. When the file is changed, we will call the file change method and get a hold of the event here. We will also add the asset attribute along with the file types which will asset. In this case it will be .png and .jpg. Right below this input, we will add a button which will simply trigger a click on the hidden file input. Let's add the classes ui grey button upload-button along with the click handler which will simply trigger the click method on our hidden file input. And the text for this button will be upload photo. Now let's add some styles to make this presentable. So we're to the profile.component.scss.
>
> **[2:58](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/profile-image-upload-form-2?u=76281980&t=178)** First, we will add styles for the profile image. Can add some padding. And the image itself, we want to make it responsive. We can easily do that by setting the width to 100% and the height to auto. The file input will be hidden so we can simply say display none. And finally let's add a class for the upload button. We want to float right and add some top margin. Let's start the app now with [npm](../../Skills/Web%20Development/npm.md) start. Once that is done we can command or control click on this URL and it looks like some of our styling may be off. Let's double check the classes we have added on our [HTML](../../Skills/Web%20Development/HTML.md) elements. This should be twelve wide column as semantic ui expected classes to be added in a specific order. And I am missing the profile image class here. Let's set it back to our app and now we see both the image and the profile form. Seems that this is still showing, let's double check that. We are missing a class here. Should be file-input. Heading back to our app and now that is hidden.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [npm](../../Skills/Web%20Development/npm.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **CLI Commands:** make (2), find (1), npm (1)
> **Env Vars:** url (1), html (1)
> **File Paths:** profile.component.scss (1)
> **UI Navigation:** click on (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [teacher] (1)

#### [Image uploads](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=0)** - [Instructor] Let's write the code now to upload the user photo to [Firebase](../../Skills/Web%20Development/Firebase.md). Heading to the application module, we'll first import the AngularFireStorageModule. Now it will be from [Angular](../../Skills/Web%20Development/Angular.md)/Fire/storage.
>
> **[0:26](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=26)** And make sure to add this module to the imports here. Heading now to the profile component we will declare two additional variables. First one will be a download URL which will be an observable of type string. This will be used to get the source of the user's profile image. We will also declare a second variable and call it uploadProgress. And this will be an observable of type number. This will be used to display a progress bar. In the constructor we will inject the angular fire storage service. We can call this afStorage, and that will be of the type AngularFireStorage.
>
> **[1:19](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=79)** In the constructor we can then get the download URL. We will do so by grabbing a reference to the path the user will be uploading their photo to. We can call that ref and specify the path here. Users slash the user ID slash profile-image.
>
> **[1:46](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=106)** And then call the getDownloadURL method. Heading to the template now, we want to display the profile photo if it has been uploaded. Let's declare a div here and use the NGF directive. We want to display this if we have the download URL. It's an observable, so let's use the async type and store that in source URL. And then here we can display the profile image. We will give it a class of UI and then image. Specify the source which will be the source URL and then give it an alt attribute. And below here we want to display the profile photo placeholder if the user's profile image is not available. Similar we will use NGF here and simply negate this expression. And we can move the placeholder image here.
>
> **[3:09](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=189)** Below the file input we want to display a progress bar and specify the max attribute of 100. And then the value will be set to the upload progress. That is an observable, so we will use the async type here as well. Lastly, we should display any errors to the user. We already have a variable to store the error message, so all we need to do is add it to the template. We will use the semantic UI classes here, ui negative message. A paragraph tag here to display the error, and we only want to display this if we have an error. With that in place, head over to the component class, and let's implement the file change method. Let's have a new method here, call it fileChange and we have access to the event. First, we will clear the downloadURL and any error messages. Next we will get the file. This will be in event.target.files. It'll be an array, so we will grab the first element there. We can then create the file reference. First create a reference using the file path
>
> **[4:46](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=286)** which will be at users forward slash the user id forward slash profile-image. And then we can create the file reference using the Angular Fire Storage and the ref method on that. Next we will upload and store the task. We can get a reference to the task by calling the upload method. We will use the filePath and also the file we want to upload. We want to make sure that we catch any error message.
>
> **[5:40](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=340)** Next we want to observe the percentage changes. This will be a useful indicator to the user. uploadProgress is an observable of type number, and we can simply call the percentage changes on the task. Lastly, we want to get notified when the download URL is available. We can call this snapshotChanges method on the task, use the pipe operator, and when that has been complete, we will set the downloadURL. And we can call the getDownloadURL method on the file reference. And we'll call subscribe to initiate this. Let's start the application now. Open up your browser and let's try to upload a photo. We have sample profile photos under profiles and you can choose any that you would like. Great, let's now check the console to make sure that the photo was indeed uploaded. Can head to the storage tab users
>
> **[7:13](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/image-uploads-2?u=76281980&t=433)** and you can see that the image was in fact loaded. Going back to your application we can refresh and see that the image is persistent.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Angular](../../Skills/Web%20Development/Angular.md) (3), [Firebase](../../Skills/Web%20Development/Firebase.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-1-2?u=76281980&t=0)** - Now that we have used the [Firebase](../../Skills/Web%20Development/Firebase.md) admin sdk, to set custom planes for admin user. It is time to start developing our admin interface. Which will allow the admin user to see all of the registered users and view and edit their profile data. Let's start by creating a new users component. Now we use the [Angular CLI](../../Skills/Web%20Development/Angular%20CLI.md). N-G. G which is short for generate. C. Which is short for component. Now we'll call this component users component. We'll then go ahead and add a new route in our [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) module. Add a new object here. The path will be users. The component would be the users component, we'll just create it. And this will also have an off guard here. We'll be leveraging the [Angular](../../Skills/Web%20Development/Angular.md) Fire Auth Guard.
>
> **[1:03](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-1-2?u=76281980&t=63)** The auth guard will need some data. And for the auth guard pipe, we'll be writing in admin only auth guard pipe. Being able to file library contains a very helpful custom claims operator that will allow us to get the claims for a user. Let's go ahead and import that now. Then we can go ahead and build our own pipe. We will call this admin only. And then use the pipe operator. Use the custom claims helper and map the claims to a route or a bullion. We can get access to the claims here. If the admin property on the claims is set to true then it will proceed, otherwise, we can return the route to the login page. We can now test this out with both the admin user and the non-admin user. Let me go ahead and start the app here. Once that is complete, head to your application. I'm going to login as a regular user now. And I'm going to try to access the users route. We can see that I'm not allowed to access that route. Then we log out.
>
> **[2:36](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-1-2?u=76281980&t=156)** And I will login as the admin now. And logged in as the admin now. And I will try to access the users route. And I have access to it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Firebase](../../Skills/Web%20Development/Firebase.md) (1), [Angular CLI](../../Skills/Web%20Development/Angular%20CLI.md) (1), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1), [Angular](../../Skills/Web%20Development/Angular.md) (1)
> **Definitions:** short for (2)
> **Env Vars:** cli (1)
> **Speakers:** - now (1)

#### [Admin interface: Route guards, part 2](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=0)** - [Instructor] We should address some things in terms of the [user experience](../../Skills/Web%20Development/User%20Experience%20(UX).md). If the user is logged in when requesting the root route, they are redirected to the profile page, regardless of the role of that user. That is fine for normal users, but for the admin user, we would like to redirect to the users page. Let's head now to the application [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) module. And we will build another pipe. We will call this redirect, logged in to profile or users. We will again be using the custom claims helper to get access to the claims. And map those claims to a Boolean or an array, which will determine the route. We will have three scenarios. If no claims, then there is no authenticate a user.
>
> **[1:01](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=61)** And so allow the route to the root. If a custom claim is set, then redirect to the user's route.
>
> **[1:17](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=77)** And finally, if those conditions are not met, we will redirect to the users profile page. A very important thing to note is that for any authenticated user, the claims are always set and the user ID will be contained in these claims. And so if there is no authenticated user, the claims linked would be zero.
>
> **[1:48](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=108)** In this case, just return true. Now if a custom claim is set, then it will redirect to the user's route. We can simply check here for claims.admin. And we can return the users route here. If the user is not an admin, we redirect to the profile page using the current user's ID. Going to grab the name of this custom pipe, and replace this one, redirect logged into profile, with our new one. Let's test this out now. Going to log out, let me go to the root page, and something seems to be wrong. Let's check the console. Looks like there's something wrong with our new pipe. And I have some extra characters here that are not needed. Let's go ahead and save that, and now I have my application here. I will log in now as the admin user. Let me go ahead and request the root route and I am redirected to the user's page. Let me log out, and log in as a normal user now. Let me request a root route,
>
> **[3:26](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=206)** and I am redirected back to the profile page. One last change needs to be made. I'm going to go ahead and log out and log in as the admin user once more. Upon login, all users are currently sent to their profile page, as we can see here. For the admin user, we should redirect them to the user's page upon login. For normal users, they should be redirected to their profile page. Heading back to our application now, let's go to the auth service, and we will implement a new method called route on login. This will be an async method. We will first grab a hold of the current user and then we will get the token for that user, using the getIdTokenResult on that user. We can then check the claims on this token. If the admin custom claim is set, then we will route that user to the user's route. If that is not set, we will route that user to their profile page. That's forward slash profile, forward slash, and then their user ID. Going out to the login component,
>
> **[5:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-route-guards-part-2-2?u=76281980&t=300)** we can replace this navigate method call, on the router, with our new method, on the auth service. Let's head back to our browser now, go into log out, and I will log in now as the admin user, and you can see when I log in, I am redirected to the user's page. Then we log out, and log in as a regular user. And upon login, I am redirected to their profile page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [User experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) (1), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
> **UI Navigation:** go to (2)
> **Code Identifiers:** getidtokenresult (1)
> **Speakers:** - [instructor] (1)

#### [Admin interface: View user collection](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=0)** - [Instructor] We have our route guard set up for our new users route, so let's place some data now. Let's head now to the users component. And in the constructor, inject the AngularFirestore. We'll call this AFS. We will then declare two variables. The first variable will be a reference to the Firestore collection, and we will call this the usersCollection. And it will be of type AngularFirestoreCollection of type UserProfile which is the interface that we have created. The second variable will be an Observable to watch for any real time changes. And this will be of type UserProfile array. Then in the constructor, we can set these two values. Let's first set the usersCollection. We can get the collection from the AngularFirestore, specify the type, and this will be at the users path. Next we can set the users Observable by calling the valueChanges method on that usersCollection. In the template file, let's display that data now. We're going to have a table with classes
>
> **[1:33](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=93)** of UI, selectable, celled, and table.
>
> **[1:45](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=105)** In the table header we will have five table headers. One for the Name, one for the Specialty, one for their Secret Address, the Phone, and also the IP. Next we will have a table body, and we will have a row for each user. And here, we can use the ngFor directive. And remember that users is a UserProfile Observable, so we will use the async pipe here. And now we can display the data. We have the name, the specialty, the address here,
>
> **[2:48](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=168)** which will be a combination of the address field, the city, the state, and also the zip.
>
> **[3:05](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=185)** Next we will display the user's phone number, and finally the IP address. Let's head to our application now and log in as the admin user. We are taken to the users route, but we don't see any data. Let's Inspect the console and check for any errors. [Firebase](../../Skills/Web%20Development/Firebase.md) is throwing an error here specifying that this user does not have permissions to read this data. Let's Inspect the Firestore cloud rules. If we look at our Firebase cloud store security rules, we see that we have limited access for each user to their own user document. We will need to modify the security rules to allow the admin user to read the entire users collection. We want to allow admin users to read and modify any data in our cloud Firestore. We can modify the current rules to check for the admin custom claim. So here we could just add another expression and check the custom claim by checking the admin property on the token. And we can do the same for the write rule. We also want the admin user to be able to read or write any of the profile image, so let's modify those rules now. So we can also check here for the admin custom claim.
>
> **[4:44](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=284)** I'm going to stop our app, and redeploy our security rules. I'm going to create a couple of MPM scripts to facilitate this. Head over to the package.[JSON](../../Skills/Web%20Development/JSON.md) file. We will add one MPM script and call it deploy Firestore, and this will call Firebase deploy dash dash only Firestore rules. We can have a similar MPM script to deploy the [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) rules. Let's deploy these rules now. First, in my terminal, I will call the first MPM script. MPM run deploy Firestore.
>
> **[5:44](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-collection-2?u=76281980&t=344)** I seem to have gotten an error. And looks like there's a compilation error for those rules. Let's inspect that now. This shouldn't be triple equals, should be only double equal. Let me redeploy that. And looks like I have another compilation error here. That should be the or operator. Let's try that again. And that was successfully deployed. Before I deploy the storage rules, let's double check that here. And that looks correct. MPM run deploy storage. Once deployed, let's start our application with MPM start. Heading out to our application, I will log in now as the user. And now, we can see our data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Firebase](../../Skills/Web%20Development/Firebase.md) (3), [JSON](../../Skills/Web%20Development/JSON.md) (1), [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-profile-2?u=76281980&t=0)** - [Instructor] In addition to viewing the users collection, let's also allow the admin to view individual profile data. I went ahead and added a couple of more users. If you need temporary email addresses, you can use something like [tempmail.org](https://tempmail.org). Heading back to our users component, we can turn the name into a navigation link. We can use the router link directive such that when the user clicks on this link it will navigate them to the profile route.
>
> **[0:43](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-profile-2?u=76281980&t=43)** And I can move the user's name inside this link here.
>
> **[0:53](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-profile-2?u=76281980&t=53)** Heading back to our application, we can see the links display now. If you try to navigate by clicking on this link, you see that the app doesn't seem to go anywhere. This is because of the route guard on the profile page. Let's modify that route guard to allow admin users. Heading to the application [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) module, we'll create a new auth-guard pipe. We will call this allow only self or admin.
>
> **[1:26](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-profile-2?u=76281980&t=86)** It will take in next, which will be provided by [Firebase](../../Skills/Web%20Development/Firebase.md), representing the route. We will use the pipe operator, the custom claims helper, and then, use the map operator to map those claims into a boolean or to a route. If there are no claims, that means that there isn't an authenticated user. In this case, we should route them to the root page, which is the login page. Otherwise we can check if the requested route matches the user ID and the claim, which is always set for an authenticated user. Or if that user has the custom claim of admin set to true.
>
> **[2:23](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/admin-interface-view-user-profile-2?u=76281980&t=143)** And the next thing we need to do is to replace this current pipe with our new pipe. Let's flip back to our application, and we can click on a link, and we are taken to that user's profile page. Heading back, I can view the others as well. Let's try to modify the data to ensure that the admin user can alter the data. We can refresh the page, and that data has persisted.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1), [Firebase](../../Skills/Web%20Development/Firebase.md) (1)
> **URLs:** [tempmail.org](https://tempmail.org) (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)


### 6. Going Serverless with Firebase Cloud Functions

[↑ Back to Table of Contents](#table-of-contents)

#### [Cloud Functions setup](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-setup-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-setup-2?u=76281980&t=0)** - [Narrator] Now we turn to probably one of the most exciting parts of this course, [Firebase](../../Skills/Web%20Development/Firebase.md) Cloud Functions. Cloud Functions for Firebase allows you to run back-end code, that automatically responds to events, such as when data is created or deleted, images are uploaded, or when there's a new user. Cloud Functions can also respond to HTTPS requests, allowing you to easily build a serverless API. As stated, the code is stored in [Google](../../Glossary/Service/Google.md)'s Cloud, and runs in a managed environment. In addition, there's no need to manage and scale your own servers. Even better, these functions can be written in [JavaScript](../../Skills/Software%20Development/JavaScript.md) or TypeScript so you'll feel right at home. Let's get started. Switching to the command prompt, in your project directory, you want to ensure you have the Firebase [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) installed globally via MPM. And I can do that with MPM install dash G Firebase tools. Often, bug fixes and new features are available only with the latest version of the Firebase tools, so it's a good practice to frequently update the CLI. I already have this installed, so I won't do that now. Once that is installed, make sure that the Firebase login command works. In here it tells me that I am already logged in. Let's initialize Cloud Functions for our project. And I can do that with the Firebase CLI init functions.
>
> **[1:28](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-setup-2?u=76281980&t=88)** I will go ahead and choose JavaScript to write my functions. I'm going to accept the default, and install dependencies. We see that a new functions directory has been created for us. The Cloud Functions for Firebase SUK will be used to create Cloud Functions and set up triggers. The eslintrc file is an optional file containing rules for JavaScript linting. The package.[JSON](../../Skills/Web%20Development/JSON.md) file is a package file describing your Cloud Function's code. The index.js file is the main source file for your Cloud Functions. And also the node modules is a directory where your dependencies are installed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Firebase](../../Skills/Web%20Development/Firebase.md) (8), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (3), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (3), [Google](../../Glossary/Service/Google.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-email-setup-2?u=76281980&t=0)** - [Instructor] For our [Firebase](../../Skills/Web%20Development/Firebase.md) cloud function, we will be leveraging the authentication trigger to send a welcome email. Specifically, we will trigger the cloud function when a new user signs up. For this specific example we will be using Nodemailer, which is a node based email client. We will also be using a test Gmail account that I have created to send emails. I recommend that you create a Gmail account that you can use for development. Keep in mind that Gmail has a sending quota. For a larger amount of emails, consider switching to something like SendGrid or Mailgun. Another thing to keep in mind is that the Spark plan, which is a free Firebase plan we are currently using, only allows you to send request to [Google](../../Glossary/Service/Google.md) services. For non-Google related services, you will need to enable billing in your Firebase project. You will also need to do two things for your test Gmail account and I have provided instructions here. The first you want to do is to enable access to less secure apps. In a new incognito window, I have logged in with the email account that I will be using to send emails. Let's go ahead and enable that now. And I can see that's already been enabled and now it's to go ahead and visit this link. If your test Gmail account has two step verification, you will need to use an app password
>
> **[1:33](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-email-setup-2?u=76281980&t=93)** and you can follow the instructions at this link here. Let's write our function now. Since we'll be using Nodemailer, we will be installing this now and we will do that in the Functions folder, [npm](../../Skills/Web%20Development/npm.md) install nodemailer. Going out to the root directory, Firebase Cloud Functions also allows you to set environment variables, which is important because you don't want to write credentials in your code. In this case, we will set environment variables for the email and the password for our Gmail account. Firebase functions:config and then set and we will set gmail.email to our email address
>
> **[2:22](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-email-setup-2?u=76281980&t=142)** and also a second environment variable, which will be our password. And then you can hit Enter. You will get a message instructing you to deploy your cloud functions. We will deploy our function after we write our code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Firebase](../../Skills/Web%20Development/Firebase.md) (5), [Google](../../Glossary/Service/Google.md) (2), [npm](../../Skills/Web%20Development/npm.md) (1)
> **CLI Commands:** node (1), npm (1)
> **Definitions:** is a  (2)
> **Warnings:** keep in mind (2)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Cloud Functions: Authentication trigger](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=0)** - [Instructor] Let's write our code now for the [Firebase](../../Skills/Web%20Development/Firebase.md) function. I have required the Firebase functions here, and I would also require the node mailer, since that will be used to send emails. Const node mailer, require node mailer. Next, I will grab a hold of the environment variables that we have previously set. You can grab the Gmail email, by getting the config, and then the email property. And we will also grab the password config, that we previously set. Next, I need to create a mail transport object. I can do so by calling the create transport method here. The service will be Gmail, and pass in the authentication information. The user, and also, the password. I will then create a variable to hold the app name, and this will simply be The Grid Dashboard.
>
> **[1:34](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=94)** Next, let's create the function for sending the welcome email. This would be a async function. And we'll call this function 'send welcome email.' The arguments will be email, and the display name. Let's first create the mail options. This would be a 'from' field, and also a 'to' field. The to field will be the email. And let's specify the from field here. Can use a tempest right here. And then use the app name. And then specify the email here. Which was thegrid.manager@[gmail.com](https://gmail.com). Let's go ahead and set the subject now. We will tell the user "welcome to app name." We will then set the text of this email. Can specify a greeting. But there's no display name, pass in an empty string. Welcome to the elite team of secret agents.
>
> **[3:08](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=188)** Next we can call the send mail method on the mail transport. We will need the mail options here. Once that is complete, we can log a confirmation message. New welcome email sent to, the email address we specify. And then a return statement here. Next, let's specify the cloud function trigger here. The cloud function will be called 'send welcome email.' And this will be triggered when there's a new user. Let's grab a hold of the email of that new user. And also that user's display name.
>
> **[4:10](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=250)** And we can call the function we just wrote, the email, and also the display name. Let's go ahead and deploy our cloud function now. We can use firebase, deploy,
>
> **[4:25](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=265)** - - only functions. This will go ahead and prepare, package, and upload your Firebase cloud function. Once that is complete, let's go ahead and start the app. I have a test user with a real email account. And we'll use that user to sign up. Let's go ahead and go to our browser, to localhost 4200. Let me log out. And I will sign up with the new user with the real email account. Once I sign up, I am taken to the profile page. Now, we'll go ahead and log in to this user's email account. Let me open a new, incognito window. And we'll check that user's email account. Let me sign out of the current user, and go ahead and log in. And there we go, we can see the welcome email here. Sent from our test email account, and saying, "Hey! Welcome to the elite team of secret agents." Congratulations! You have successfully written, deployed, and executed your serverless function. If for any reason your email didn't get sent, you can check the logs in the Firebase console. Heading over to the console, clicking on functions,
>
> **[6:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger-2?u=76281980&t=360)** and here you can see your cloud function. And then in the logs tab, you can view any logs associated with it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Firebase](../../Skills/Web%20Development/Firebase.md) (5)
> **CLI Commands:** node (3)
> **URLs:** [gmail.com](https://gmail.com) (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### 7. Control Access with Custom Claims and Security Rules

[↑ Back to Table of Contents](#table-of-contents)

#### [Firebase Hosting setup](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-hosting-setup-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-hosting-setup-2?u=76281980&t=0)** - [Instructor] Now that we have used authentication to manage users, Cloud Firestore to store data, [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) to store user files, and Cloud Functions for serverless back-ends, it's time to deploy our application, and we can do so with [Firebase](../../Skills/Web%20Development/Firebase.md) Hosting. We first need to ensure that the [Angular](../../Skills/Web%20Development/Angular.md) application can build using a production configuration. Let's go ahead and add an [npm](../../Skills/Web%20Development/npm.md) script. Opening your package.[JSON](../../Skills/Web%20Development/JSON.md) file, I will add a new npm script here, build:prod, and it will build with the production configuration. We also need to copy the environment configuration into the production configuration. You can grab these values here, and paste them here. Let's run a production build of our application now. npm run build:prod. Looks like I have an error here. Let's inspect, and see what that is. Let's go ahead and fix this now. It's an app component, and I can make this public here. Let's try another build. Once it is complete, you can check the dist folder, and see the generated bundles here under grid-dashboard. With this in mind, let's set up Firebase Hosting. You can use the Firebase tools init.
>
> **[1:37](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-hosting-setup-2?u=76281980&t=97)** I will use my arrow keys and choose Hosting. Hit the space bar, and then click Enter. Our public directory will actually be dist/grid-dashboard.
>
> **[1:51](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/firebase-hosting-setup-2?u=76281980&t=111)** You do want to configure it as a single-page app, and you don't want to override this index.[HTML](../../Skills/Web%20Development/HTML.md) file. Once that is done, you will see that the Firebase.json file has been updated with the hosting configuration.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Firebase](../../Skills/Web%20Development/Firebase.md) (4), [npm](../../Skills/Web%20Development/npm.md) (3), [JSON](../../Skills/Web%20Development/JSON.md) (2), [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (1), [Angular](../../Skills/Web%20Development/Angular.md) (1)
> **CLI Commands:** npm (3), make (1)
> **File Paths:** package.json (1), index.html (1), firebase.json (1)
> **Prerequisites:** set up (1), configure (1)
> **Speakers:** - [instructor] (1)

#### [Deploying your app](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-your-app-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-your-app-2?u=76281980&t=0)** - [Instructor] Once we have built our application and set up [Firebase](../../Skills/Web%20Development/Firebase.md) hosting, let's go ahead and deploy our application now. Can use the Firebase tool, deploy dash dash only hosting. This may take a few minutes. Once that is done, Firebase will give you the URL of your new application. Let's go ahead and visit our application here. And our application is now live. Let's try to log in as the admin user now. I can see my users. I could view individual profile data. I can update that data. Refresh and see that that data still persists. There's also another command that'll be very useful. And that is the Firebase deploy command. Let me clear my terminal here and use a Firebase deploy. When using this command without any flags, it will deploy all of the Firebase services you have configured in your application. For the storage and cloud store services, this will deploy the security rules. When hosting is enabled, this will deploy your app. And finally, this will prepare, package, and upload your cloud functions. This actually may take a few minutes. And now it's complete. Let's visit the Firebase console now. You can go to the hosting tab and actually view
>
> **[1:38](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/deploying-your-app-2?u=76281980&t=98)** the release history here. Also note that you get a much nicer URL with a domain.[web.app](https://web.app).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Firebase](../../Skills/Web%20Development/Firebase.md) (7)
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
> **[0:00](https://www.linkedin.com/learning/angular-cloud-powered-apps-with-firebase/next-steps-2?u=76281980&t=0)** - [Instructor] Thanks for joining me on this course. We have leveraged most of the excellent services provided by [Firebase](../../Skills/Web%20Development/Firebase.md) by [Google](../../Glossary/Service/Google.md) to help us build a serverless app. I hope you enjoyed learning about the different Firebase features that will make you a much more productive developer when developing [Angular](../../Skills/Web%20Development/Angular.md) applications. I strongly recommend subscribing to the Firebase YouTube channel. The content is excellent and is a great way to keep up to date with any new features. And of course, continue to browse our library for anything angular related. If you wish to know what I'm currently working on, follow me on [GitHub](../../Skills/Software%20Development/GitHub.md) at [github.com/victormejia](https://github.com/victormejia). You can also find me on Twitter at [twitter.com/_victormejia](https://twitter.com/_victormejia), thanks for watching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Firebase](../../Skills/Web%20Development/Firebase.md) (3), [Angular](../../Skills/Web%20Development/Angular.md) (2), [GitHub](../../Skills/Software%20Development/GitHub.md) (2), [Google](../../Glossary/Service/Google.md) (1)
> **CLI Commands:** make (1), find (1)
> **URLs:** [github.com](https://github.com) (1), [twitter.com](https://twitter.com) (1)
> **Tools:** github (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Victor Mejia](../../Instructors/Web%20Development/Victor%20Mejia.md)

## Resources

- Exercise files available

## Skills Covered

- Angular
- Firebase

## Path Context

### In [Explore Web Development with Angular](../../Paths/Software%20Development/Learning%20Paths/Explore%20Web%20Development%20with%20Angular.md)
← [Angular- Creating and Hosting a Full-Stack Site](Angular-%20Creating%20and%20Hosting%20a%20Full-Stack%20Site.md) | **5 of 6** | [WebSocket Communications with Node and Angular](WebSocket%20Communications%20with%20Node%20and%20Angular.md) →

## Appears In

- [Explore Web Development with Angular](../../Paths/Software%20Development/Learning%20Paths/Explore%20Web%20Development%20with%20Angular.md)

## Related Courses

_Courses sharing skills:_

- [React- Cloud-Powered Apps with Firebase](../Web%20Development/React-%20Cloud-Powered%20Apps%20with%20Firebase.md) — Firebase
- [Building Angular and Django Apps](../Web%20Development/Building%20Angular%20and%20Django%20Apps.md) — Angular
- [Using AI in the Design to Full-Stack Development Life Cycle](../Artificial%20Intelligence%20(AI)/Using%20AI%20in%20the%20Design%20to%20Full-Stack%20Development%20Life%20Cycle.md) — Firebase
- [Building Angular and ASP.NET Core Applications](../Web%20Development/Building%20Angular%20and%20ASP.NET%20Core%20Applications.md) — Angular
- [WebSocket Communications with Node and Angular](WebSocket%20Communications%20with%20Node%20and%20Angular.md) — Angular

---

[↑ Back to top](#)