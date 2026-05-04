---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: react-cloud-powered-apps-with-firebase
url: "https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase"
duration_minutes: 149
duration: 2h 29m
level: Advanced
updated: 9/17/2020
learners: 39736
skills:
  - React.js
  - Firebase
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQG9TFjCCF4UaQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1600186691621?e=2147483647&amp;v=beta&amp;t=IwjzkWlF2qjuxcNKrsgcTw1rZa1mZe9rhFDHs-LJSss"
linkedin_topic: Web Development
learning_paths:
  - '[Improve Your React Skills](../../Paths/Web%20Development/Learning%20Paths/Improve%20Your%20React%20Skills.md)'
prev_courses:
  - '[Building a GraphQL Project with React.js](Building%20a%20GraphQL%20Project%20with%20React.js.md)'
path_nav: '[{"path":"Improve Your React Skills","position":9,"total":9,"prev":"Building a GraphQL Project with React.js","next":null}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/react-js
  - skill/firebase
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/React-%20Cloud-Powered%20Apps%20with%20Firebase.md)

![React: Cloud-Powered Apps with Firebase](https://media.licdn.com/dms/image/v2/C560DAQG9TFjCCF4UaQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1600186691621?e=2147483647&amp;v=beta&amp;t=IwjzkWlF2qjuxcNKrsgcTw1rZa1mZe9rhFDHs-LJSss)

# React: Cloud-Powered Apps with Firebase

> Modern web applications require more than just your React code. You need hosting, APIs, authentication, and automatic deployments. You need to build apps fast, without managing infrastructure. Firebase allows you to do exactly that. Backed by Google Cloud Platform and used by some of the largest apps today, Firebase is a suite of tools to help build and scale your web application. In this course, 

> [LinkedIn Learning](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase) | 2h 29m | Advanced | 40K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Structuring your apps for the cloud](#structuring-your-apps-for-the-cloud)
  - [What you should know](#what-you-should-know)
  - [Using the exercise files](#using-the-exercise-files)
- [**1. Setting Up Your Development Environment**](#1-setting-up-your-development-environment) (4 videos)
  - [Installing tools and CLIs](#installing-tools-and-clis)
  - [Generating a new React application](#generating-a-new-react-application)
  - [Overview of the Firebase console](#overview-of-the-firebase-console)
  - [Configuring your web application](#configuring-your-web-application)
- [**2. Firebase Authentication**](#2-firebase-authentication) (9 videos)
  - [Firebase Authentication setup](#firebase-authentication-setup)
  - [Creating users](#creating-users)
  - [Displaying current user](#displaying-current-user)
  - [Redirect user upon signup](#redirect-user-upon-signup)
  - [User logout](#user-logout)
  - [User login](#user-login)
  - [Authenticated user redirect](#authenticated-user-redirect)
  - [Challenge: Authentication redirect](#challenge-authentication-redirect)
  - [Solution: Authentication redirect](#solution-authentication-redirect)
- [**3. Storing and Syncing Data with Firebase Cloud Firestore**](#3-storing-and-syncing-data-with-firebase-cloud-firestore) (7 videos)
  - [Cloud Firestore intro](#cloud-firestore-intro)
  - [Cloud Firestore setup](#cloud-firestore-setup)
  - [Deploying security rules for Cloud Firestore](#deploying-security-rules-for-cloud-firestore)
  - [Creating documents](#creating-documents)
  - [Displaying user document](#displaying-user-document)
  - [Updating user documents, part 1](#updating-user-documents-part-1)
  - [Updating user documents, part 2](#updating-user-documents-part-2)
- [**4. Storing Files with Firebase Cloud Storage**](#4-storing-files-with-firebase-cloud-storage) (7 videos)
  - [Cloud Storage setup](#cloud-storage-setup)
  - [Cloud Storage security rules](#cloud-storage-security-rules)
  - [Profile image upload form](#profile-image-upload-form)
  - [File upload trigger](#file-upload-trigger)
  - [Cloud Storage file upload](#cloud-storage-file-upload)
  - [Challenge: Monitor upload progress](#challenge-monitor-upload-progress)
  - [Solution: Upload progress](#solution-upload-progress)
- [**5. Control Access with Custom Claims and Security Rules**](#5-control-access-with-custom-claims-and-security-rules) (7 videos)
  - [Firebase ID tokens](#firebase-id-tokens)
  - [Setting Firebase custom claims](#setting-firebase-custom-claims)
  - [Admin interface: Users page](#admin-interface-users-page)
  - [Admin interface: Read user collection](#admin-interface-read-user-collection)
  - [Admin interface: Render user collection](#admin-interface-render-user-collection)
  - [Challenge: View user profile with admin](#challenge-view-user-profile-with-admin)
  - [Solution: View user profile with admin](#solution-view-user-profile-with-admin)
- [**6. Going Serverless with Firebase Cloud Functions**](#6-going-serverless-with-firebase-cloud-functions) (3 videos)
  - [Cloud Functions setup](#cloud-functions-setup)
  - [Cloud Functions: Email setup](#cloud-functions-email-setup)
  - [Cloud Functions: Authentication trigger](#cloud-functions-authentication-trigger)
- [**7. Hosting with Firebase**](#7-hosting-with-firebase) (2 videos)
  - [Firebase Hosting setup](#firebase-hosting-setup)
  - [Deploying your React app](#deploying-your-react-app)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Structuring your apps for the cloud](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud?u=76281980&t=0)** - So you want to build your next [react](../../Skills/Web%20Development/React.js.md) web application, but you will need more than just your client side code. You need hosting APIs, authentication and deployment. [Firebase](../../Skills/Web%20Development/Firebase.md) by [Google](../../Glossary/Service/Google.md) and power's front end developers to quickly tackle these problems and focus on what they love.
>
> **[0:15](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud?u=76281980&t=15)** - Hi, I'm Victor Majia, I'm a senior UI engineer and instructor, and welcome to this course on react Cloud-Powered Apps with Firebase. In this course, we'll be diving into all the powerful services that Firebase by Google provides in order to build a serverless application. Modern web apps require hosting, APIs, authentication and automatic deployment. We need to build apps fast without managing infrastructure. Firebase by Google allows you to do exactly that. Used by some of the largest apps today, Firebase is a suite of tools to help build and scale your web application. We'll first take a look at the Firebase console and see how we can manage different Firebase projects. We will then, use Firebase authentication to add authentication. As we build out features, we will need to store data using Cloud Firestorm along the way. To store files like images, we'll be using [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md). We will then jump into the serverless world and learn how to create our own serverless functions using Firebase cloud functions. Finally, we will learn how to deploy our app using Firebase hosting. Along the way we'll use some of reacts latest features like hooks in order to build a robust application. We will also have the use react router and a package called react cook form, which will make it easier for us to work with [Forms](../../Skills/Web%20Development/Forms.md) and react. I'm really excited to cover this content with you. So let's dive in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Firebase](../../Skills/Web%20Development/Firebase.md) (10), [React](../../Skills/Web%20Development/React.js.md) (5), [Google](../../Glossary/Service/Google.md) (3), [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (1), [Forms](../../Skills/Web%20Development/Forms.md) (1)
> **Speakers:** - so (1), - hi (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)

#### [What you should know](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/what-you-should-know?u=76281980&t=0)** - [Narrator] This course will assume a basic understanding of [React](../../Skills/Web%20Development/React.js.md). You will also need Node, [npm](../../Skills/Web%20Development/npm.md), and [Git](../../Skills/Software%20Development/Git.md) installed on your system. If you're not familiar with React, I recommend you watch our Essential Training course for React. If you don't have Git installed on your system, go ahead and download it from [git-scm.com](https://git-scm.com). We'll be using Node and npm the install packages. If you don't know how to use npm, I recommend you watch our course on npm, the Node Package Manager. I'll also be using Visual Studio Code as my main editor. You can download it from code.[visualstudio.com](https://visualstudio.com). I have also installed Prettier for Visual Studio Code in order to auto-format my [JavaScript](../../Skills/Software%20Development/JavaScript.md) code as I save. This is a really useful tool. If you're interested in the theme that I'm using, it is the Night Owl theme by Sarah Drasner. Lastly, we are going to spend quite some time in the terminal. If you're on a Mac, I recommend downloading and installing iTerm2 version three. And using a shell like ZSH in the Oh My ZSH framework, as it provides you with tooling that will make you much more productive at your terminal. If you're on a [Windows](../../Glossary/Service/Windows.md) machine, I highly recommend you check out Cmder as an alternative to the Command Prompt.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [npm](../../Skills/Web%20Development/npm.md) (4), [React](../../Skills/Web%20Development/React.js.md) (3), [Git](../../Skills/Software%20Development/Git.md) (3), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **CLI Commands:** npm (4), node (3), git (3), make (1)
> **Tools:** visual studio (2), terminal (2), zsh (2), command prompt (1)
> **URLs:** [git-scm.com](https://git-scm.com) (1), [visualstudio.com](https://visualstudio.com) (1)
> **Env Vars:** zsh (2)
> **Code Identifiers:** iterm2 (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)

#### [Using the exercise files](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/using-the-exercise-files?u=76281980&t=0)** - [Speaker} We will be building a fictitious App called The Grid, which will contain a list of secret agents.
>
> **[0:13](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/using-the-exercise-files?u=76281980&t=13)** The exercise files contains a [Git](../../Skills/Software%20Development/Git.md) repository, you can download the exercise files from the course homepage, or clone the [GitHub](../../Skills/Software%20Development/GitHub.md) repository found at this URL. Once downloaded, you can run [npm](../../Skills/Web%20Development/npm.md) install in the master branch, you will only need to npm install once at the root of this project, in order to install all of the dependencies. The master branch contains the completed application, and the starting point for this course with a branch 0104-begin. So we can check out 01-04-begin. I recommend you start here and work together with me and build the entire Application. At any point, if you wish to see the files for a specific video, there's a branch you can use. For example, if you're in chapter two, video three, you can check out the branch 02-03-begin. If you wish to see the completed files for that particular video, you can check out the branch 02-03-end. For each video, you can also view the pull request I made, to verify the changes match with your work.
>
> **[1:42](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/using-the-exercise-files?u=76281980&t=102)** Lastly, there is sample data that you can use for your users. And this is found under the profiles folder, including images and data that you can use

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [npm](../../Skills/Web%20Development/npm.md) (2), [Git](../../Skills/Software%20Development/Git.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **CLI Commands:** npm (2), git (1)
> **Exercise Files:** exercise files (2), download the (1)
> **Prerequisites:** install (3)
> **Env Vars:** url (1)
> **Tools:** github (1)
> **Analogies:** for example (1)
> **Speakers:** - [speaker (1)


### 1. Setting Up Your Development Environment

[↑ Back to Table of Contents](#table-of-contents)

#### [Installing tools and CLIs](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/installing-tools-and-clis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/installing-tools-and-clis?u=76281980&t=0)** - [Instructor] We'll be using both the [Node.js](../../Skills/Web%20Development/Node.js.md) runtime along with [npm](../../Skills/Web%20Development/npm.md). We'll be working with the current LTS, which is 12.18.2 at the time of this recording, and you will need at least version six of npm, which comes bundled with Node. If you are using [Windows](../../Glossary/Service/Windows.md), go ahead and click on the button to download the executable. If you're on a Mac or a [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) machine, you can use nvm, the node version manager, which allows you to manage multiple versions of Node. I recommend you use nvm as it makes things very simple. First, let's use the install script. I am going to use cURL, and you can just copy and paste the terminal command. Head over to your terminal and we can paste that and run that. Next, in your terminal, you can now install version 12 of Node.js using nvm install 12. This command will install the latest version of 12. We can now verify both versions in the command line using node --version, and we see version 12.8.2 and npm --version, which shows 6.14.5. I would also recommend that you install the [React](../../Skills/Web%20Development/React.js.md) Developer Tools. This will be very helpful for development and debugging. Great, we are now ready to get started. In the next video we'll take a look at generating a brand new React application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [npm](../../Skills/Web%20Development/npm.md) (3), [Node.js](../../Skills/Web%20Development/Node.js.md) (2), [React](../../Skills/Web%20Development/React.js.md) (2), [Windows](../../Glossary/Service/Windows.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **CLI Commands:** node (6), npm (3), curl (1)
> **Versions:** version 12 (2), 12.18.2 (1), 8.2 (1), 6.14.5 (1)
> **Prerequisites:** install (5)
> **Tools:** terminal (3), command line (1)
> **File Paths:** node.js (2)
> **Code Identifiers:** curl (1)
> **Env Vars:** lts (1)

#### [Generating a new React application](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/generating-a-new-react-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/generating-a-new-react-application?u=76281980&t=0)** - [Instructor] The starting point for this course will be a [React](../../Skills/Web%20Development/React.js.md) Application that has already been generated for you. But here, I want to show you how you can do that yourself. We can generate a brand new React Application using the Create React App Tool chain, which sets up they develop an environment so that we can use the latest [JavaScript](../../Skills/Software%20Development/JavaScript.md) features. In addition to providing a great development experience, it will make it much easier for us to take care of common tasks, such as live-editing CSS and JS in development and optimizing the output for production. Let's head to our terminal and generate a brand new application. We can do that using NPX, Create React App, and then the name of the application. If you haven't used NPX before, it's simply a package runner tool that comes with MPM, starting from version 5.2. It will allow us to run, Create React App without installing it globally on our machine. Let's go ahead and run it now. This will [Fetch](../../Skills/Web%20Development/Fetch.md) a tool, create a directory and files, initialize a repository and install the required tools and packages. Great, that is now complete. I will now change directories into my new application and open that up using visual studio code. Heading over to the package.[JSON](../../Skills/Web%20Development/JSON.md) file,
>
> **[1:39](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/generating-a-new-react-application?u=76281980&t=99)** we see that we are given four simple commands. [npm](../../Skills/Web%20Development/npm.md) start, to start the development server, NPM run build, to build and bundle the app for production. NPM tests, to run your tests and NPM run eject to get access to the configuration files. An option that you wouldn't really need as a tool is already great. Also, this course we'll assume you are using React version 16, so please ensure that you are using this as well. We'll be working with [React Hooks](../../Skills/Web%20Development/React%20Hooks.md), so we will need at least version 16.8. Let's go ahead now and run NPM start. We can open up a new terminal window and run NPM start. We will see our development service start and we now have a React Application running.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (7), [npm](../../Skills/Web%20Development/npm.md) (6), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [Fetch](../../Skills/Web%20Development/Fetch.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Env Vars:** npm (6), npx (2), css (1), mpm (1)
> **CLI Commands:** npm (6), npx (2), make (1)
> **Versions:** version 16 (2), version 5 (1)
> **Tools:** terminal (2), visual studio (1)
> **File Paths:** package.json (1)
> **Analogies:** such as (1)
> **Prerequisites:** install (1)

#### [Overview of the Firebase console](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/overview-of-the-firebase-console?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/overview-of-the-firebase-console?u=76281980&t=0)** - [Instructor] In this course, we will be working with [Firebase](../../Skills/Web%20Development/Firebase.md) by [Google](../../Glossary/Service/Google.md). So what we'll need to first configure a Firebase project. From the Firebase homepage, log into the Firebase Console by clicking on the go-to console link and log in with your Google account. Once logged in, you will be taken to the Firebase dashboard. Go ahead and create a new project. You can name it whatever you like. If the name is not unique, Firebase will suggest a unique name for you. We'll be working with a fictitious app called the Grid which will be a contact manager for special agents. So I will name it, [react](../../Skills/Web%20Development/React.js.md), dash grid, dash dashboard. Go ahead and click continue. We don't want to set up Google analytics for this project and click on create project. Firebase we'll go ahead and create the project for you and notify you once it's ready. Clicking on continue, we'll take it to that project dashboard which will be used throughout this course. Heading over to the develop tab, you can see the different Firebase features that we'll be using. We'll be using Firebase Authentication to manage both the admin and the registered users for our app. We will be using the Cloud Firestore to start data and leverage its real time capabilities. We'll be using Firebase Storage to store files. In our case, to store user uploaded images. Firebase hosting will be used to easily deploy our app to the Cloud.
>
> **[1:34](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/overview-of-the-firebase-console?u=76281980&t=94)** And finally, we'll be using Firebase Functions and dive into the servers this world. At this point, it will be good to install the Firebase [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) since we'll be working with Firebase. Let's set over to our terminal now. And you can install the Firebase tools with [npm](../../Skills/Web%20Development/npm.md). Npm install, dash D, Firebase dash tools. Once that is completed, sign into Firebase using your Google account, and we can do that using Firebase Login. This command connects your local machine to Firebase and grants you access to your Firebase projects. Go ahead and click allow, and we see that the Firebase CLI Login was successful. Let's go ahead and test that the authentication worked. Let's list all of our Firebase projects, and we can do that by using Firebase projects list. And we can now see all of our Firebase projects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Firebase](../../Skills/Web%20Development/Firebase.md) (24), [Google](../../Glossary/Service/Google.md) (4), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (2), [npm](../../Skills/Web%20Development/npm.md) (2), [React](../../Skills/Web%20Development/React.js.md) (1)
> **Prerequisites:** install (3), configure (1), set up (1)
> **CLI Commands:** npm (2)
> **Env Vars:** cli (2)
> **Tools:** terminal (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [Configuring your web application](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980&t=0)** - [Instructor] Now that we have created a [Firebase](../../Skills/Web%20Development/Firebase.md) project and installed the Firebase [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) tools, we need to configure our web application with Firebase through the Firebase console, and also install the Firebase library. We will be using the official Firebase library by [Google](../../Glossary/Service/Google.md) and install it through [npm](../../Skills/Web%20Development/npm.md). This will be the starting point for the course. So in the exercise files, first, make sure to check out the branch, 01-04-begin and install dependencies with npm install. To get the most of this course, I suggest you start here and continue as you work with begin, building out the entire application. In your terminal install Firebase. At the time of this recording, the latest version is 7.15.0. So we'll be using that. Let's head over now to the Firebase console. Click on the Project settings and scroll down to the area that says Your apps. Go ahead and click on the web icon. I will write here [REACT](../../Skills/Web%20Development/React.js.md) DASHBOARD as the app nickname, and we don't have to set up hosting just yet. Go ahead and click on Register app. It will then suggest you copy and paste this scripts, but since we have installed Firebase through npm, we don't need to do that. However, we will need these values. We will go ahead and use the feature of Create React App
>
> **[1:36](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980&t=96)** that allows us to easily add environment variables. Often in your application that are desired to provide different environment variables, depending on what environment your app is being served on. For instance, on developing locally or in a staging or production environment, we will need to prefix each variable with REACT_APP_. This is a convention that is used, you can read more about it here. Heading over to the Firebase console again, we will grab these values and place them in a new environment file. Go ahead and copy that and head over and out to your project. We'll create a new file .env and paste the values we just copied. Let's go ahead and format this file to the convention that React expects. So be an equal sign and each environment variable will be prefixed by REACT_APP_. You have the API_KEY, the AUTH_DOMAIN, the DATABASE_URL, PROJECT_ID, STORAGE_BUCKET, and the MESSAGING_SENDER_ID. We don't need the appId here. Lastly, let's get rid of these quotation marks and also the trailing commas.
>
> **[3:11](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980&t=191)** Let's create a folder called Firebase and here create a new file called config.js. This is where we will initialize Firebase with our configuration, import firebase from 'firebase/app'. And then we can create our Firebase app by calling firebase.InitializeApp, with an object containing our configuration here. Let's replace these values with our new environment variables, REACT_APP_. This is the API_KEY, the AUTH_DOMAIN, the DATABASE_URL, the PROJECT_ID, STORAGE_BUCKET and also the MESSAGING_SENDER_ID.
>
> **[4:22](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980&t=262)** And these variables can be accessed using process.env. Heading over to App.js now, we can import our new configuration file add './firebase/config'. And lastly, back in config.js, let's insert a quick console.log to ensure that our Firebase app initialize with the correct configuration. You can do that using [firebase.app](https://firebase.app).options. Let's test our app now by running npm start. So open up our console, verify that you don't have any computation errors, and we can see that we have our configuration here. It looks like MESSAGING_SENDER_ID is undefined. Let's head back to our application and there's a typo here. Save that, head back to your application, and now we see all of our values displayed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Firebase](../../Skills/Web%20Development/Firebase.md) (19), [npm](../../Skills/Web%20Development/npm.md) (4), [React](../../Skills/Web%20Development/React.js.md) (3), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (1), [Google](../../Glossary/Service/Google.md) (1)
> **Env Vars:** react_app_ (3), messaging_sender_id (3), api_key (2), auth_domain (2), database_url (2)
> **Prerequisites:** install (5), configure (1), set up (1)
> **CLI Commands:** npm (4), make (1)
> **File Paths:** config.js (2), process.env (1), app.js (1)
> **UI Navigation:** click on (3), scroll down (1)
> **Code Identifiers:** appid (1)
> **URLs:** [firebase.app](https://firebase.app) (1)


### 2. Firebase Authentication

[↑ Back to Table of Contents](#table-of-contents)

#### [Firebase Authentication setup](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-authentication-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-authentication-setup?u=76281980&t=0)** - [Instructor] Now that we have set up our web application with [Firebase](../../Skills/Web%20Development/Firebase.md) by adding configuration values, we first need to add authentication through the Firebase console. Click on Authentication, then Set up sign-in method. We will enable email and password sign-in for now.
>
> **[0:27](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-authentication-setup?u=76281980&t=27)** We will be using [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) in our application and achieving this with [React](../../Skills/Web%20Development/React.js.md) Router. Let's first install this. At the time of this recording, the version used is 5.2.0. So let's install that version, [npm](../../Skills/Web%20Development/npm.md) install react-router-dom@5.2.0.
>
> **[0:53](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-authentication-setup?u=76281980&t=53)** Let's create a sign-up component that will provide a form for the user to sign up. We'll create a new folder to house the pages in our application. I have provided a starting point for the form. In the exercise files, head to the resources folder, then folder 02-01, and you can grab the Signup.js file and drag it to the new pages folder. The classes used for the [HTML](../../Skills/Web%20Development/HTML.md) elements here are from a Semantic UI framework. You can visit the Semantic UI documentation site if you wish to have a different look. I have also provided some CSS here. Let's go ahead and copy that and paste it into App.css. And then we'll go ahead and uncomment this. Next we want to display this form at a new route for our application. In App.js, let's import our new page, import from ./pages/Signup. We will also import Route, Switch, and BrowserRouter
>
> **[2:17](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-authentication-setup?u=76281980&t=137)** from react-router-dom. Let's set up routing now. We can wrap everything using BrowserRouter, which is the main building block for routing. It uses HTML5 History API in order to keep our UI in sync with the URL. Next, inside the container, we will use the switch component, which allows us to render a route exclusively. We will have a new route. We want to match the exact path. The path will be /signup and the component will be the new Signup component we just created. Let's go ahead and run npm start. Once that is done, you can go ahead and visit /signup and see our new form.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (3), [React](../../Skills/Web%20Development/React.js.md) (3), [Firebase](../../Skills/Web%20Development/Firebase.md) (2), [npm](../../Skills/Web%20Development/npm.md) (2), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Prerequisites:** set up (3), install (3)
> **Env Vars:** html (1), css (1), html5 (1), api (1), url (1)
> **File Paths:** signup.js (1), app.css (1), app.js (1)
> **CLI Commands:** npm (2)
> **Versions:** 5.2.0 (2)
> **UI Navigation:** click on (1)
> **Exercise Files:** exercise files (1)

#### [Creating users](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=0)** - [Instructor] Now that we have a form for inputting information, let's add functionality to the simple form and create a user with [Firebase](../../Skills/Web%20Development/Firebase.md). To make things easier when working with [Forms](../../Skills/Web%20Development/Forms.md), we will be using [React](../../Skills/Web%20Development/React.js.md) Hook Form. A great little library that will provide a great experience. Both for the user, and for the developer. And it uses [React Hooks](../../Skills/Web%20Development/React%20Hooks.md). Let's install React Hook Form now. [npm](../../Skills/Web%20Development/npm.md) install react-hook-form. And at the time of this recording, we are using version 5.7.2. Heading over now to our new signup component, we will import the useForm hook from react-hook-form. Now by invoking the useForm hook, we get back several useful methods. Let's just structure these here. And we're interested in these three. The register method will allow us to register our inputs and add validation rules. The handleSubmit method will be used for dealing with the form data. And the reset method will be used to clear the form after a successful form submit. Let's first register every one of our inputs by using the ref attribute.
>
> **[1:35](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=95)** Let's do that for the first name. The last name. The email. The password. And those are it. Next, we want to handle the form submission. So let's add that now on the form. OnSubmit. We will call the handleSubmit method from React Hook Form. The callback will be an onSubmit function we'll create now. We'll get back some data. And for now, let's just log this data out. Now, we can create a function for creating a user. Under firebase I will create a new file called auth.js. Here, let's import firebase from firebase/app. And we'll have a new function called signup. It will take in an object. Let's go ahead and just structure this data now. First name, the last name, the email and the password. We will first use use Firebase auth to create a user with email and password. Firebase.auth. And call a method createUserWithEmailAndPassword.
>
> **[3:18](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=198)** We will use async await here. Since this is an asynchronous method here.
>
> **[3:30](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=210)** From the response, we will grab the user and update the profile in order to set the display name. We will set the display name using the first name and the last name. Heading back to the signup component now. We can import our new function. Import signup from firebase auth. And now, we can use that and our onSubmit handler. Let's use a try-catch block here. We will call the signup function with the data. If it's successful, we can reset the form. We can catch any error. And for now, we can simply log out the error here. And we'll need to use async here. Lastly, we want some sort of indicator that our application is performing a network request. And we will do so by applying the loading clause on the form. Let's use the useState hook to add some state to our component.
>
> **[5:09](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=309)** We will call this piece of state isLoading. And also we get back the setLoading function.
>
> **[5:21](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=321)** We will set it to true before performing the network request, and then reset it back to false. Here. Let's create a variable here for the form class name. The UI form. And if it's loading, it will add the class of loading. Otherwise, it will be an empty string. And we can replace here a class name with formClassName. Let's start our application now and turn to the browser. I'm going to have my developer tools open to check for any errors.
>
> **[6:19](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=379)** And let's sign up a user now. First name and last name. And then let's input the email and the password. And click Sign Up. And looks like we have an error here. We need to import one more thing here. Import firebase/auth. Let's recompile that. Head back to our application. And let's try signing up again. Let's head over to the Firebase console now. Click on Users. And then we see our new user created here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Firebase](../../Skills/Web%20Development/Firebase.md) (9), [React](../../Skills/Web%20Development/React.js.md) (5), [Forms](../../Skills/Web%20Development/Forms.md) (1), [React Hooks](../../Skills/Web%20Development/React%20Hooks.md) (1), [npm](../../Skills/Web%20Development/npm.md) (1)
> **Code Identifiers:** useform (2), handlesubmit (2), onsubmit (2), createuserwithemailandpassword (1), usestate (1)
> **CLI Commands:** make (1), npm (1)
> **Versions:** version 5 (1), 7.2 (1)
> **Prerequisites:** install (2)
> **File Paths:** auth.js (1)
> **UI Navigation:** click on (1)
> **Definitions:** is an  (1)

#### [Displaying current user](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=0)** - [Instructor] Now that we have implemented user signup, wanting to be able to display the currently authenticated user. It will also provide a better [user experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) if the user gets routed to a profile page where they can see their information. Let's do that now. But first, we need to be able to get the current authenticated session and be able to access that in any component. We will do so by leveraging [react](../../Skills/Web%20Development/React.js.md) context. And then child components will leverage hooks to access the user session. Let's start by creating a new file under the [Firebase](../../Skills/Web%20Development/Firebase.md) folder here and call it UserProvider.js. We will use this file to house the user context, a provider component, and also a hook to access a current user session. First let's import React. And then the useEffect, useState, and useContext hooks from react. Also let's import firebase from firebase/app.
>
> **[1:09](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=69)** We can create our user context by calling React.createContext. Now we will create our UserProvider component, which will be the top level component of our app. We will use props to render the children. And we can use the useState hook here to create a state for the current session. Giving it initial value of null for the user. and also to hold the loading state. Inside of this component, we will leverage the useEffect hook in order to listen for any Firebase authentication changes. The useEffect hook is a hook that allows you to perform side effects in functional components. It allows us to run these effects only after the component has rendered. So it doesn't block UI rendering. Here we can call firebase.auth. And listen for any authentication state changes. And we will get back the user here. This returns to us
>
> **[2:41](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=161)** a function that we can call in order to unsubscribe. In the callback here we will set our state. Loading will be set to false. And then we can set the user. In this effect, we can return a function that is called before the component is removed from the UI. And we want to do this in order to avoid any memory leaks. Also, we can use a second argument to the useEffect hook. To tell React to when to run this effect. We will simply provide an empty array in order to run the effect and clean up only once. It basically tells React that our effect doesn't depend on any values from props or state. Finally, let's return the provider component. Our user context comes with a provider React component that will allow consuming components to subscribe to context changes. We can provide the value here. Which would be the session. And finally, we can render the children once it is done loading.
>
> **[4:10](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=250)** Lastly, we can create a hook and call that useSession. That will allow other components to access the user context. Let's call a useContext here using the userContext. And we can return the session. Heading over to App.js now, we can import our new userProvider. From firebase userProvider. We can then add it as a top level component.
>
> **[4:54](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=294)** Let's create a profile page component now. Under pages, New File, Profile.js. Import React from react. And we can import our newly created hook called useSession. From firebase/userProvider. Let's create our component now. We can grab a hold of the user by calling the use session hook. If there is no user we can return null. And if we have a user, let's return some information here.
>
> **[5:50](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=350)** Let's return the name. And remember we set the display name. The email. User.email. And also the user ID, which is the property uid. Looks like I need to close this tag here. and let's make sure we export the Profile component here. Let's head back to App.js and add another route. We'll want to match the exact route at /profile. And the component will be our new Profile component. Let's head over to our app again. Let's refresh. We can see that there is a current user session. Heading over to application under indexedDB. Let's head to /profile. And we see the user that was just created. To see all the available information for the Firebase user, You can refer to the Firebase documentation at this URL.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (9), [Firebase](../../Skills/Web%20Development/Firebase.md) (9), [User experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) (1)
> **Code Identifiers:** useeffect (4), userprovider (3), usestate (2), usecontext (2), usesession (2)
> **File Paths:** app.js (2), userprovider.js (1), profile.js (1)
> **Definitions:** is a  (2), is called (1)
> **CLI Commands:** make (1)
> **Env Vars:** url (1)
> **Speakers:** - [instructor] (1)

#### [Redirect user upon signup](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/redirect-user-upon-signup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/redirect-user-upon-signup?u=76281980&t=0)** - [Narrator] As of know, once a user signs up, and we have a session, we have to manually type in /profile in order to go to that route. Once a user successfully signs up, we actually want to take them to the new profile page. Heading first over to the sign-up function, let's grab a hold of the newly created user. We can grab the user from the response, then we can update this line to simply user.updateProfile, and finally we can return the user here. Let's head over to the sign-up component now, because we are supplying this component in the route component as a prop, we get props passed into the sign-up component, and in particular, we get access to the history prop, which will be useful in order to route the user to a different page. We can first grab the newly created user, just create a variable, and then we can set the user here. If we having a user, we can use props. Let me rename that to props. props.history.push to /profile/ newUser.uid.
>
> **[1:28](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/redirect-user-upon-signup?u=76281980&t=88)** Otherwise, we can set the loading state to false. Let's head over to our browser now. I will go ahead and delete the object store that [Firebase](../../Skills/Web%20Development/Firebase.md) creates, and go to the signup route, then go to my Firebase dashboard, and delete the user I just created. Let's create the user again. We can see they were successfully routed to the profile page. We can see that the user information is missing. We simply need to update the route definition. Let's head over to App.js, and here we can update this to /profile:id. Let's head back to our browser now, and we can see the user information displayed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Firebase](../../Skills/Web%20Development/Firebase.md) (2)
> **UI Navigation:** go to (3)
> **Code Identifiers:** updateprofile (1), newuser (1)
> **File Paths:** app.js (1)
> **Speakers:** - [narrator] (1)

#### [User logout](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-logout?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-logout?u=76281980&t=0)** - We are now displaying the current user, but we need the ability to logout the user. Let's head back to auth dot JS, where we are placing the methods dealing with authentication and sign up. We'll add a new function named logout that will simply call the sign on method on [Firebase](../../Skills/Web%20Development/Firebase.md). Firebase dot auth dot sign out. And please keep in mind that this returns a promise. Let's head over now to the header component, and we will add a button for the logout action. Let's give it some class names from semantic UI, UI secondary button and our own class logout, which we'll use to add some styles. Text will be logout and on click, we'll call a function, logout user. Let's create that function now. Logout user. For now it's an empty function. Let's head over to auth dot CSS, and add some CSS for this button. It's float right with the relative position and let's fix the position here. Heading back to the header component,
>
> **[1:38](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-logout?u=76281980&t=98)** we will now import the new logout function from auth dot JS. Import, logout from Firebase, forward slash auth. We will also import the use history hook from [react](../../Skills/Web%20Development/React.js.md) router dom, which gives us access to the history instance that we can use to navigate. And now we can use a hook. This is a very great feature of react router, in that you can give [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) functionality to any component in your application. We can then implement our logout user function. We can await the logout function and once the user successfully signs out, we can redirect a user to the sign up page. And we need the async keyword here, too. Heading back to our browser, we can see the logout button here. And on click, We are redirected to the signup page. In the developer tools, you'll see that the application storage has been cleared. There's one issue, however, in that we still see the logout link, even though the user is logged out. Let's fix that now. We don't want to display the logout link if there isn't a current user session. Heading back to the header component, we can use the hook that we previously wrote
>
> **[3:14](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-logout?u=76281980&t=194)** and grab a hold of the user from the use session. And then we can render the button only if there's a user.
>
> **[3:34](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-logout?u=76281980&t=214)** That is reloaded now, and we can see that the logout link is done. You can test signing up by using a second user. We can sign up. We are redirected to our profile page and we can log out. The link is gone, and we are redirected to the sign up page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Firebase](../../Skills/Web%20Development/Firebase.md) (3), [React](../../Skills/Web%20Development/React.js.md) (2), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
> **Env Vars:** css (2)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - we (1)

#### [User login](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=0)** - We have provided a way for users to sign up and logout, but we now need to provide a way for users to login. Heading back to auth.js, let's implement a login function.
>
> **[0:17](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=17)** This function will also perform asynchronous work. We'll destructure the input to get the email and the password. And we can call it [Firebase](../../Skills/Web%20Development/Firebase.md).auth.signInWithEmailAndPassword using the email and password provided. Finally, we can return the user from the response. Let's create a new login page component, which will be very similar to the sign up page. Let's grab the contents of the sign up component and we can paste it here and we can go ahead and delete the first and last name input fields.
>
> **[1:11](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=71)** We can rename the user to simply "user" and instead of sign up, we can call our new login function. We can delete the servants here. We can then change the button text from sign up to login
>
> **[1:37](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=97)** and also provide a way to take the user to the sign up page. Let's create a container diff here to help out the button and the link. We can then move the button here inside, and the user can login or be redirected to the sign up page. We can use this link component from [react](../../Skills/Web%20Development/React.js.md)-router-dom.
>
> **[2:15](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=135)** In the sign up component, let's do something similar here. We can sign up or login. And the route will be login. Let's go ahead and add some CSS now.
>
> **[2:47](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=167)** The actions will be text-align to the right. Let's add some margin for the buttons. And then also for the link.
>
> **[3:07](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=187)** Lastly, when clicking user logout, we want to redirect the user to the login page instead of the signup page. Let's try this out now. And looks like I have an error. I need to import the link component from react router.
>
> **[3:32](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=212)** Import link from react-router-dom. No compilation errors. Head back to the page, and looks like I need to fix a float here. Let's head back to the CSS here, and we can delete the CSS rule. We did forget one thing, and then we need to add the new login route to app.js. This will be /login and the component will be the new login component we just created. Let's go ahead and import that now. Import login from /pages/Login
>
> **[4:23](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=263)** and make sure we rename this to "Login". There's a couple of errors here, let's rename this to "Login", and we also need to import the link component from react-router-dom. Heading back to our browser, we can sign up or login. Let's go ahead and login. On login, I am redirected to the profile page and I can also logout.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (4), [Firebase](../../Skills/Web%20Development/Firebase.md) (1)
> **Env Vars:** css (3)
> **File Paths:** auth.js (1), app.js (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** signinwithemailandpassword (1)
> **Analogies:** similar to (1)
> **Speakers:** - we (1)

#### [Authenticated user redirect](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=0)** - Before wrapping up our work on authentication, we need to address a couple of issues. Let me show you what I mean. Let's go ahead and log in (keyboard clicking) Upon login, I am redirected to the profile page. However, I can still visit both the login page, and also the signup page. In addition, the logout button appears. In this scenario which redirects the user back to the profile page, and not allow them to visit these pages. Let's tackle the [SQL](../../Skills/Data%20Science/SQL.md). Let's go ahead and create a new folder called router, which will contain all the files we related to [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md). We will create a new file call ProfileRedirect.js. This will be a high-order component that will check for a user session and redirect accordingly. This component will render the desired component if there is no user session. Otherwise, it will redirect the user back to the profile page. Let's go ahead and import [react](../../Skills/Web%20Development/React.js.md) from react. We will also import route, and redirect from react-router-dom. And also, import use session from [Firebase](../../Skills/Web%20Development/Firebase.md)/Userprovider. Let's create the component called profile redirect. We'll destructure the props,
>
> **[1:32](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=92)** and rename the component prop to component with a capital C. This is just a convention. And then, destructure the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the props. (keyboard typing) Inside of this component, we can grab ahold of the user, using use session. And let's make sure we export the profile redirect component. Next, we'll return a route component here. But this time, we will use the render prop. Let's pass in the rest of the props. And the render prop will be a function. And we get access to the props that the route component will pass. If there's no user, we can render the desired component... (keyboard clicking) And give it the props. (keyboard clicking) Otherwise, we will redirect to the profile page. And we can do that by returning a redirect here. (keyboard clicking) We will use the to prop, which will be an object with two properties. The path name is where we want to redirect to,
>
> **[3:09](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=189)** this will be /profile/user.uid.
>
> **[3:18](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=198)** And it will also contain a state property, which will be an object telling it where it is redirecting from. From props.location. Going back to app.js, we can replace the route component for both the signup and the login routes using the new profile redirect component that we just created. And finally, we should redirect the route route of our app to the login route. I sat another route here, exact, and then the path will be the route. And we can simply redirect the user to the login page. Let's open up our terminal to make sure that we don't have any errors. Set to profile redirect. And we can go ahead and delete this line. So back to our page now. And let's try to go to the login page. And we see that we are redirected to the profile page. And let's try to access the signup page, and we are redirected back again to the profile page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (3), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (1), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1), [Firebase](../../Skills/Web%20Development/Firebase.md) (1)
> **Non-Speech:** (keyboard clicking) (4), (keyboard typing) (1), (clicking) (1)
> **File Paths:** profileredirect.js (1), app.js (1)
> **CLI Commands:** make (2)
> **Env Vars:** sql (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Speakers:** - before (1)

#### [Challenge: Authentication redirect](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-authentication-redirect?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-authentication-redirect?u=76281980&t=0)** (electronic music)
>
> **[0:06](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-authentication-redirect?u=76281980&t=6)** - [Instructor] I would now like you to work on a challenge. There's one pending issue in regards to our app. Let me show you what I mean. We are currently logged in. Let me copy this URL and then log out. I will go ahead and paste that URL and try to navigate to it. On pasting and go into this URL, we can see that we are still able to go to this route. Nothing is displayed here because there isn't a current authenticated user. However, we should prevent the user from being able to go to this route. There is a second underlying issue. Let's go ahead and log in. I will go ahead and grab this user ID. Let me log out and let me log in with a separate user. Now let's try to visit the profile page with another user ID. We can still visit the profile page with another ID in the route even though that user isn't logged in. It isn't a huge deal, as it would only display the logged in user. But a user should only be able to visit the corresponding profile page. I have provided some steps that you can follow in order to work on this. You will need to create another high order component similar to what we did previously. You can call it something like private route. In this private route component, you need to check that the ID the user is trying
>
> **[1:39](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-authentication-redirect?u=76281980&t=99)** to list matches a user that is logged in. Otherwise you need to route to the login page. In order to get the ID parameter, remember that the rendered component using the route component gets past props and that includes these three. Match location and history. We can use match to retrieve the params object and hence the ID as shown here. So for instance, in the profile redirect component, we have access to the route props. Here, we're accessing the location object but we can also access the route params using props.match.params.

> [!info]- Semantic Content
>
> **Env Vars:** url (3)
> **UI Navigation:** go to (2), navigate to (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (electronic music) (1)

#### [Solution: Authentication redirect](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-authentication-redirect?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-authentication-redirect?u=76281980&t=0)** - [Instructor] Let's work together on the solution now. Our new component will look very similar to the ProfileRedirect Component. Let's go ahead and grab this entire code here. Let's create a new file, call it PrivateRoute.js. Let's paste this. Let's rename this to PrivateRoute. Let's get rid, of the contents of the render prop here. We have access to the Route props. And here, we can get access to the ID using props.match.params.id. If we have a user, and the user ID matches the Route param ID, then we can return the desired component. Otherwise, we can Redirect the user, to the login page. Heading over to App.js. we can replace this route component here with PrivateRoute.
>
> **[1:26](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-authentication-redirect?u=76281980&t=86)** Let's head over to our application now. Let's refresh. I'm going to copy the URL, log out and then paste that URL. We can see that I'm redirected back to the login page. Let me go ahead and login. I'm going to grab this user ID. I'm going to log out and login as a separate user to see if I'm able to visit that profile page. Paste that in, and you see that I am redirected, to the profile page of that particular user.

> [!info]- Semantic Content
>
> **File Paths:** privateroute.js (1), app.js (1)
> **Env Vars:** url (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Storing and Syncing Data with Firebase Cloud Firestore

[↑ Back to Table of Contents](#table-of-contents)

#### [Cloud Firestore intro](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-firestore-intro?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-firestore-intro?u=76281980&t=0)** - [Narrator] I sure hope you have already been impressed with the powerful features that [Firebase](../../Skills/Web%20Development/Firebase.md) provides. We have easily added authentication to our app that otherwise would have taken a really long time to implement ourselves. But now it's time to start working with data. Cloud Firestore is a flexible, scalable [NoSQL](../../Skills/Software%20Development/NoSQL.md) cloud database to store and sync data for client and server-side development. This data can be accessed directly via native SDKs that shifts with a comprehensive set of security rules so you can access your database without needing to set up your own server. And also, it will allow us to sync across devices. The Cloud Firestore model is document oriented so there aren't any tables or rows like in a [SQL](../../Skills/Data%20Science/SQL.md) database. We instead store data in documents which are then organized into collections. Let's start with the document, it will be the unit of storage when working with Cloud Firestore. It is identified by a name and it contains field value pairs. The values support many data types: Boolean, number, string, geo point, binary blob, and timestamp. You can also use arrays or nested objects, called maps, to structure data within a document. You can also organize more complex data as shown here. You can see that it resembles a plain [JavaScript](../../Skills/Software%20Development/JavaScript.md) object. Now let's talk about collections. Documents are organized into collections. You can imagine, that we can have a users collection
>
> **[1:34](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-firestore-intro?u=76281980&t=94)** for all of our registered users. When working with Cloud Firestore in their app, we'll be able to both create a reference directly to a document or directly to a collection. It is also worth mentioning that you can organize your data into subcollections as needed. As shown in this diagram.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Firebase](../../Skills/Web%20Development/Firebase.md) (1), [NoSQL](../../Skills/Software%20Development/NoSQL.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Env Vars:** sql (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)

#### [Cloud Firestore setup](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-firestore-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-firestore-setup?u=76281980&t=0)** In this particular module, we'll be setting up a users collection and also allow the user to update their profile data. When using email and password authentication in the [Firebase](../../Skills/Web%20Development/Firebase.md), that data is actually securely store separately. A major reason is of course, to prevent any accidental user leaks and also, allow complete flexibility with how we store our user data in the Firebase. This means that is clearly not possible to retrieve a list of users, nor can we request from Firebase authentication the data for a particular user. We'll be creating our own users collection in Cloud Firestore, where users will update their profile data. Let's restart by cleaning up any test users.
>
> **[0:52](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-firestore-setup?u=76281980&t=52)** Now head over to the Database tab and we will create a new database. Click on Create Database, and we will leave it in production mode. Currently, any reader rights will be denied, but we will be updating that. Next, choose a location. This location is your project's default [Google Cloud platform](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) resource location. The provided default should be okay. Click on Done, and it will provision your Cloud Firestore. It may take a few moments.
>
> **[1:35](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-firestore-setup?u=76281980&t=95)** And that's it. We are ready to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Firebase](../../Skills/Web%20Development/Firebase.md) (3), [Google cloud platform](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1)
> **UI Navigation:** click on (2)
> **Definitions:** means that (1)

#### [Deploying security rules for Cloud Firestore](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=0)** - [Instructor] In the [Firebase](../../Skills/Web%20Development/Firebase.md) console for Cloud Firestore, you can go ahead and click on the rules tab to view the currently associated security rules. This tells us that the following rules in this block will be for the Cloud Firestore service. And match/[Databases](../../Skills/Software%20Development/Databases.md)/database/documents is actually the root of your database. The second match here tells it to match any document. So in totality, this is saying for any document in my database, allow read and write a false, which obviously means never. You can always change the security rules in the Firebase console. But we will actually be using the Firebase [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) to deploy security rules. It has the advantage, since any changes in rules can be tracked via [Git](../../Skills/Software%20Development/Git.md). We have already installed the Firebase CLI, if you haven't, go ahead and install it now. And you can do that with [npm](../../Skills/Web%20Development/npm.md) install dash g Firebase tools.
>
> **[1:04](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=64)** Make sure to sign in and test your Firebase CLI using Firebase login.
>
> **[1:14](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=74)** And also list your Firebase projects.
>
> **[1:23](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=83)** Let me go ahead and clear my terminal. We will now initialize a Firebase project, and we can do that using Firebase in it. Since we have already created a project in the Firebase console, we will simply associate this project directory with the Firebase project. For now, choose Firestore, deploy rules and create indexes for Firestore. I hit the space bar, and then click Enter. I can use an existing project and select the project you'll be working with. In my case, it will be [react](../../Skills/Web%20Development/React.js.md)-grid-dashboard.
>
> **[2:08](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=128)** It will then ask you a series of questions specifically where you would like to name the different files associated with Cloud Firestore. The default names are perfectly fine.
>
> **[2:24](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=144)** Heading over to the project directory, you can see they have four new files. That firebaserc is a file that stores your project. Firebase.[JSON](../../Skills/Web%20Development/JSON.md) is a configuration file that lists your project configuration. For now, it is indicating the files used for our Firestore rules and for our Firestore indexes. Firestore.indexes.json includes any indexes for a Cloud Firestore. We won't be working with this. And finally, Firestore.rules are the security rules for our database. We'll be modifying this and deploying our rules. Note that these are the same rules that are currently in the Firebase console. Let's modify this file now and change the match condition. We'll actually be working with the users collection. So we can change this to forward slash users, forward slash, and have a placeholder for the user Id. Each user will have a document for its profile key by the user Id. We want to allow both a read or write to that location only if that Id matches the currently authenticated user. So we can allow read, if request.auth.uid is a user Id.
>
> **[3:56](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=236)** And we can do the same for write and also update.
>
> **[4:05](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=245)** This means that only authenticated users will be able to read or write or update to this collection. And a user will be able to read and write only from his or her personal document in this collection. Let's go ahead and deploy the security rules. Let me clear my terminal. And we can deploy these rules using Firebase, deploy dash dash only Firestore colon rules.
>
> **[4:38](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=278)** It looks like I have a combination over here. This should only be double equals and not triple equals. Let's save that and try to deploy again. Deploy complete. Let's head back to our Firebase console, and refresh the page, and we can see our updated rules here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Firebase](../../Skills/Web%20Development/Firebase.md) (16), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (3), [JSON](../../Skills/Web%20Development/JSON.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Git](../../Skills/Software%20Development/Git.md) (1)
> **Definitions:** is a  (3), means that (1)
> **CLI Commands:** git (1), npm (1), make (1)
> **Env Vars:** cli (3)
> **File Paths:** firebase.json (1), firestore.indexes.json (1)
> **Tools:** terminal (2)
> **UI Navigation:** click on (1), select the (1)
> **Prerequisites:** install (2)

#### [Creating documents](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-documents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-documents?u=76281980&t=0)** - [Man] Now that we have deployed our security rules, we can start writing and updating data in a collection. We will be creating our own users collection in cloud firestore where users will update their profile data. Let's head over now to config.js and let's go ahead and import [Firebase](../../Skills/Web%20Development/Firebase.md) forward slash firestore. And we will export a new token here which will be the firestore service. We can grab that by calling the firestore method on firebase. The next one to do is to create a new function that will create a user document. Under the firebase folder here is create a new file called user.js. This file will hold functions that deal with updating user data. Let's go ahead and import our firestore service from forward slash config and we can create our new function called createUserDocument. It will take in a user object and here let's get a reference to the firestore document. Let's call this variable docRef and will call the doc method on the firestore service. And then the path to that user document, this will be at forward slash users forward slash user.uid.
>
> **[1:41](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-documents?u=76281980&t=101)** The next one to do is to create the user object. Let's call this user profile and it will contain various fields specifically, the user Id which is retrieved from user.uid, email and the name
>
> **[2:03](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-documents?u=76281980&t=123)** which is a user display name. We will also have various other fields for now which will be empty, the address, the city, state, the zip
>
> **[2:20](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-documents?u=76281980&t=140)** phone, the specialty for this agent and the IP address.
>
> **[2:30](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-documents?u=76281980&t=150)** These fields will be populated by submitting a form. Last one to do is to write to cloud firestore and we can easily do that by calling the set method on the document reference and want to set the document with the information in the user profile object. It is important to know that cloud firestore creates collections and documents. Implicitly the first time you add data to the document you don't need to explicitly create collections or documents. Heading back to author.JS in the signup function now, once a user successfully signs up we will create a document for the user in the users collection. We can await createUserDocument with our user.
>
> **[3:30](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-documents?u=76281980&t=210)** It may seem a bit redundant to store the user ID, email and name if it's information already stored in the Firebase authentication service. As mentioned earlier, when using email and password authentication in Firebase, that data is actually securely stored separately. Let's tour our browser now and test things out. I am going to create a new user since I've previously deleted all the users, go ahead and sign up. I am redirect to the profile page and let's head now to the Firebase console and I'm going to refresh the page here and I can see my new user document that has been created containing the name, the email and the user Id.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Firebase](../../Skills/Web%20Development/Firebase.md) (6)
> **File Paths:** config.js (1), user.js (1), author.js (1)
> **Code Identifiers:** createuserdocument (2), docref (1)
> **Definitions:** is a  (1)
> **Speakers:** - [man] (1)

#### [Displaying user document](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-user-document?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-user-document?u=76281980&t=0)** - In our profile component, let's display the newly created information. Well, we'll need to get a reference to the document in our firestore, heading out to the profile component, let's import the firestore service that we previously exported from [Firebase](../../Skills/Web%20Development/Firebase.md)/config.
>
> **[0:27](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-user-document?u=76281980&t=27)** We will also go ahead and import use effect and you state from [react](../../Skills/Web%20Development/React.js.md). We will need a new piece of state that will hold our user document. And the initial value will be null. To retrieve the user document, we will use an effect. And this effect will depend on the user ID property.
>
> **[1:09](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-user-document?u=76281980&t=69)** Next, we need to get a reference to the user document. We can do that by calling the collection method on the firestore service, the collection will be the users and then call the doc method with the user ID. Now to read the data, there are actually two ways we can read the data once or listen for real time changes. I will show you how to implement both. Let's first read the data once. So now that we have a reference to the document, let's call the get method on that document reference. This is a promise, so we can call thought .then when it resolves and we'll get back, the document. If the document exists, then we can set our user document and we can grab the data by calling the data method. Let's lead the current JSX that is returned. If there's no user we will return null, let's change this to use your document. Otherwise let's just dump the [JSON](../../Skills/Web%20Development/JSON.md) on the page for now.
>
> **[2:44](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-user-document?u=76281980&t=164)** Let's head over to our browser now. We can see that JSON is being displayed not here. Let's go ahead and modify field. Let's modify the city, and click update. And we see that data isn't updated on our web application because we are not listening for real time changes. If we refresh the page, then we can see the change that we made. Let's implement listening for real time changes now. Let's go back to our effect. I am going to delete these lines and on the document reference, we can call on snapshot in order to listen for real time changes. we get back a document. If the document exists, we can grab the data using the data method and then set our user document. Now, this returns the function that we can call in order to unsubscribe. Let's set back to our browser now. Let me go ahead and modify the field, click update,
>
> **[4:21](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-user-document?u=76281980&t=261)** and we can see that the data is updated in real time. This is one of the best features of firebase cloud store.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Firebase](../../Skills/Web%20Development/Firebase.md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (2), [React](../../Skills/Web%20Development/React.js.md) (1)
> **Env Vars:** json (2), jsx (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - in (1)

#### [Updating user documents, part 1](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-1?u=76281980&t=0)** - [Tutor] We now need to provide a way for a user to edit the profile data. To do so, we will need new form in our profile(mumbles) in the Exercise files folder, look at resources and then open the folder for this video 03-06. We can go ahead and open this file as it contains some JSX, let's copy that, let's go ahead and paste it here. Let's give that a save and head over to our browser, and we see that the form is displayed now, heading back to the profile component, we need to make one small change in regards to where we grab the current user ID. Instead of grabbing the user ID from the current authenticated user, we will use the ID from the route, this will become useful later when we have an admin user that is requesting data for a particular user. We can go ahead and import useParams from [react](../../Skills/Web%20Development/React.js.md)-router-dom. We can then grab and hold the Params here. And finally, we can update this to Params.id. The next thing we need to do is to register each input in our form, using the register function from react-hook-form. Let's go ahead and import useForm from react-hook-form,
>
> **[1:40](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-1?u=76281980&t=100)** and we can grab the register function, and also the setValue function from useForm.
>
> **[1:53](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-1?u=76281980&t=113)** Now, we can register each input.
>
> **[2:21](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-1?u=76281980&t=141)** The next thing we need to do is to set our form state to the document that we get from file storage, it looks like we have an error here. This should be an object and not an array. Let's give that a save, head over to the browser now and we see that our form is displayed. Looking at the API documentation for version five of React Hook Form, we see that we can set multiple form values by passing in an array, of objects where each object contains a single property, which is a form field. Let's transform that data now. Let's create a new variable called formData. We can use object.entries, which will return to us an array of key value pairs. We can then map over each entry and return an object instead.
>
> **[3:29](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-1?u=76281980&t=209)** finally, we can go ahead and use setValue to set the form data. We need one more change here, and we need to add setValue here as useEffect will depend on this function as well. Send over to our browse now and we can see that the form is populated with the data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (4)
> **Code Identifiers:** setvalue (3), useform (2), useparams (1), formdata (1), useeffect (1)
> **Env Vars:** jsx (1), api (1)
> **CLI Commands:** make (1)
> **UI Navigation:** open the (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [tutor] (1)

#### [Updating user documents, part 2](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-2?u=76281980&t=0)** - [Instructor] Now that the form is being populated with the user document, we need to work on updating this data. Let's go ahead and add another piece of state, and as we hold the loading state, initial value will be false. We can go ahead and create a variable to hold the formClassname, ui big form, and if loading is true, we'll add the loading class otherwise just dependent empty string. And then go ahead and replace the Classname for the form, with our new variable. Heading over now to user.js, we'll go ahead and create a new function called update user document.
>
> **[1:13](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-2?u=76281980&t=73)** And we'll take in a user object, where we could first get a reference to the firestore document. The calling the doc method on the firestore service, and then specifying the path here. Which will be /users/user.uid. We can, then, return the problem's return by calling the update method on that document. Let's head back to profile.js now, and we need to handle the form submission. Onsubmit, we will call a function called handlesubmit. Let's implement that function now.
>
> **[2:18](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-2?u=76281980&t=138)** Then we'll get the formData, and let's set up a try catch block here. Then set the loading state to true, then call our new updateUserDocument function, and we need to add the user id which we will grab from the params, and then add the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the object properties here.
>
> **[2:51](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-2?u=76281980&t=171)** Let's catch for any errors, and for now, let's just log out the error, and then, whether we have an error or not, we want to set the loading state back to false. So looking at my terminal here, to make sure there are no errors, and it looks like we're missing a dependency. We can go ahead and add params.id here. Head over to our browser now, and let's try to submit this form now. Fill in the address, the state and zip, pick a specialty, and also the IP. Then try to submit, and it looks like the page refreshed and I incorrectly implemented the form submission. Let me hit the back button here, and let's head back to our code. We actually want to use the handleSubmit helper from [react](../../Skills/Web%20Development/React.js.md).form, as it will give us access to the form data. Let me rename this function to onSubmit, and then we can call handleSubmit with our onSubmit callback here. Let's save that now, and try to submit the form again.
>
> **[4:27](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-2?u=76281980&t=267)** Let's go ahead and click submit, we could see, that our data was updated. The IP address didn't seem to be updated, let's go ahead and look at that now. And it looks like we forgot to register the IP address input. Let's copy that here and paste that, save, and head back to our browser, let's add the IP address now, hit submit, and we now see the IP address here. We can go ahead and refresh the page and that data has persisted. You've done great work. You are well on your way to completing a serverless app built with [Firebase](../../Skills/Web%20Development/Firebase.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [React](../../Skills/Web%20Development/React.js.md) (1), [Firebase](../../Skills/Web%20Development/Firebase.md) (1)
> **Code Identifiers:** handlesubmit (2), onsubmit (2), formclassname (1), formdata (1), updateuserdocument (1)
> **File Paths:** user.js (1), profile.js (1)
> **CLI Commands:** make (1)
> **Tools:** terminal (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 4. Storing Files with Firebase Cloud Storage

[↑ Back to Table of Contents](#table-of-contents)

#### [Cloud Storage setup](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-setup?u=76281980&t=0)** - [Instructor] We have used [Firebase](../../Skills/Web%20Development/Firebase.md) cloud store for storing data and now we'll move on to another great service from Firebase; [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md). Cloud storage is a perfect solution to store and retrieve user-generated files like images, audio and video, without service at code. It will be very easy to set up and use. Let's get started. Go ahead and click on the Get Started button. By default, only authenticated users will be able to read and write. We'll be modifying this by deploying updated security rules using the Firebase [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md). Go ahead and click on Next and then Done to set up cloud storage. We are then taken to the cloud storage dashboard, where you have the ability to upload files manually and also change the security rules. Next, we want to set up our apps so that we can deploy updated security rules using the CLI. In your terminal, you can do that using firebase init. And we will go ahead and choose, storage. You can you use your arrow keys, press the Space-bar to select it and then hit Enter. Hit enter again for the default file name. And we can see
>
> **[1:33](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-setup?u=76281980&t=93)** that our firebase.[JSON](../../Skills/Web%20Development/JSON.md) file has been updated and there's a new file, storage.rules that has been created.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Firebase](../../Skills/Web%20Development/Firebase.md) (5), [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (4), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Prerequisites:** set up (3)
> **Env Vars:** cli (2)
> **UI Navigation:** click on (2)
> **File Paths:** firebase.json (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Cloud Storage security rules](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-security-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-security-rules?u=76281980&t=0)** - As of now any authenticated user will be able to upload files. While this may work for many applications, in our specific scenario, users will be uploading the profile image at a specific location in our storage bucket. We only want that user to have read and write access to that location. We will also be working on an adamant interface to allow a user with an administrative role to access this as well. We will be uploading the user images to a specific path related to the user's ID, so we can change the match condition. Back slash users, the user ID, and forward slash the file name. And then we want to allow read and write to that location, if the authenticated user matches that ID. This will prevent a user from writing to a location that doesn't belong to her. Let's go ahead and allow read. If the ID from the authenticated user matches the user ID at the location they are trying to write. And we want to allow write, using the same rule, but we want to enforce a couple of other rules. In our application, we don't want the user to upload an image
>
> **[1:33](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-security-rules?u=76281980&t=93)** that is larger than five megabytes. We can do that by checking the resource size and making sure that it's less than five megabytes. Also, we want to ensure that only image file types are allowed. We can do that by checking the resource content type, make sure that it matches. Images. Finally, let's make sure to update the rule set to version two, which is the latest version. Let's go ahead and deploy these updated rules with the [Firebase](../../Skills/Web%20Development/Firebase.md) [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md). We can do that using Firebase deploy dash dash only storage rules. It looks like I have a syntax error here and I am missing if here. Let's try to deploy again. I actually need to delete these two ifs here. One more time. And they have been successfully deployed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Firebase](../../Skills/Web%20Development/Firebase.md) (2), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (1)
> **CLI Commands:** make (2)
> **Env Vars:** cli (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - as (1)

#### [Profile image upload form](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/profile-image-upload-form?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/profile-image-upload-form?u=76281980&t=0)** - Now that we have set up [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md), along with the security rules, let's implement a new feature to allow the user to upload their profile photo. Let's create a new component and call it profileimage.js. Import [react](../../Skills/Web%20Development/React.js.md) from react.
>
> **[0:23](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/profile-image-upload-form?u=76281980&t=23)** This new component will take in the user ID as a prop.
>
> **[0:32](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/profile-image-upload-form?u=76281980&t=32)** We can first create a div to hold the image. The profile image will be four columns wide, and let's give it a custom class here. Inside of this container, we will add the placeholder image.
>
> **[0:58](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/profile-image-upload-form?u=76281980&t=58)** Source will be assets/profile-placeholder.png. And let's give it the alt attribute. Go ahead and open the resources folder. Open up 04-03 and grab this image to the public folder in your project. Below the image tag, we will add the file input, which will be hidden for now.
>
> **[1:39](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/profile-image-upload-form?u=76281980&t=99)** And it will accept .png and .jpg files. Right below, we allot button that will simply trigger the click on the hidden input. The text will be upload photo, and we can now go ahead and add some css. Let's go to app.css. This will be the css for the profile image. The profile image itself will have some padding.
>
> **[2:22](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/profile-image-upload-form?u=76281980&t=142)** Let's make the image responsive
>
> **[2:31](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/profile-image-upload-form?u=76281980&t=151)** and ensure that the file input is hidden. And lastly, some styles for the upload button.
>
> **[2:46](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/profile-image-upload-form?u=76281980&t=166)** Let's render this profile image component now in the profile component. Here, we can add a div which will house both the profile image and the form.
>
> **[3:12](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/profile-image-upload-form?u=76281980&t=192)** Let's go ahead and render the profile image component and give it the ID prop, which we'll grab from params.id. And we can go ahead and move the entire form content inside of here.
>
> **[3:37](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/profile-image-upload-form?u=76281980&t=217)** Let's give that a safe and head over to our browser. And it looks like we have the wrong path here. Let's fix that now. Let's head over to the profile image component, and this should just be /profileplaceholder.png. Let's give that a save, head to our browser and let's fix the columns here. Head back to profile.js, and we need to add 12 wide column to the form class name. Head over to our browser now, and we have our styles fixed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (2), [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (1)
> **File Paths:** profileimage.js (1), app.css (1), profile.js (1)
> **UI Navigation:** open the (1), click on (1), go to (1)
> **CLI Commands:** make (1)
> **Prerequisites:** set up (1)
> **Speakers:** - now (1)

#### [File upload trigger](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/file-upload-trigger?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/file-upload-trigger?u=76281980&t=0)** - We have our form now. Let's write the handlers in order to trigger the file upload dialogue. Well, we need to trigger a click event on the hidden input. And a way we can do that is by using Refs, which allows us to get access to the DOM. Let's head now to the profile image component. Let's go ahead and import useRef from [React](../../Skills/Web%20Development/React.js.md). We can create a ref here. Initial value will be null. And then we can pass as ref object to React using the ref prop here. This would be fileInput. On the button, we can then trigger a click on this input by calling fileInput.current.click. Finally, let's add a handler on the hidden fileInput and log out the files for now. Making this an onChange, grab event and call fileChange with the files. Let's create that function now, called fileChange. It will receive a list of files.
>
> **[1:32](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/file-upload-trigger?u=76281980&t=92)** And let's log that out for now. Let's give that a save and head over to our browser. I'm going to open up the developer tools here. Look at the console. Looks like we have a warning here. Let's go ahead and fix that now. On line 13. This should be className. Let's head back to our browser. Let's refresh. And we have a second error here. This should also be className. Click on the button file upload photo. And we see that the dialogue is triggered Let's click on the photo. And we see that the file is logged out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (2)
> **Code Identifiers:** fileinput (3), filechange (2), classname (2), useref (1), onchange (1)
> **UI Navigation:** click on (3)
> **Env Vars:** dom (1)
> **Warnings:** warning (1)
> **Speakers:** - we (1)

#### [Cloud Storage file upload](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=0)** - With that in place, we need to implement now a function to upload the user image to [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md). Let's first export the fire based storage service for our app in config.js. Import fire base/storage. And we can export a new token here and call that storage, and we can get the storage service here. Head over now to user.js and we'll create a new function called upload image. It needs a user ID and the file to upload. And here it will actually create and return a new promise. We need the resolve and the reject functions. Let's create the file reference here. We need to create first a file path, which will be users/userid/profile-image.
>
> **[1:09](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=69)** Now we can create the file reference, calling storage.ref and then grabbing that child reference using that file path. And let's make sure we import storage here. We now need to create the upload task, and we can do that by calling put on the file reference, giving it the file that we need to upload. And now with the upload task, we can actually listen for state changes. We will listen for the state changed event. Second argument will actually be no for now. The third argument will be used to grab any errors. And the last argument will be used once this task is complete. And here we'll resolve our promise by accessing the ref on the snapshot. Let's head over back to profile image.js and we can add a new piece of state which would be the image URL. The initial vowel will be an empty string here. And now we can update our file change method.
>
> **[2:48](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=168)** Let's grab the reference by calling upload image with the user ID, and also the file we want to upload. We can grab the download URL by calling ref.get download URL, and then we can set our state here. And make sure this has the async keyword here.
>
> **[3:33](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=213)** We can now update the source prop on our image.
>
> **[3:46](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=226)** It will be the image URL if there is one, or our default placeholder. Let's give that a save, and make sure there are no compilation errors, and now head over to your browser. Refresh the page here, let me try to upload a photo. It looks like we have an error here. It seems that we are listening for the wrong event. So back to user.js, and this should be state change, not stage change. Let's give that a save and head back to our browser. And let me try to upload a photo now. And the photo has been uploaded and it's displayed now. We can head over to the [Firebase](../../Skills/Web%20Development/Firebase.md) console, refresh here. We can see that our profile image is there as well. There's one more thing we need to do. If we go ahead and refresh the page, we see that the image is not displayed. We need to retrieve the image URL when the component mounts. Let's head back over to user.js and we'll create a new function here. We'll call that get download URL. You will need the user ID, the file path will be users/userid/profile-image.
>
> **[5:28](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=328)** When we return, storage.ref.child using the file path and the promise returned by calling get download URL. In the profile image component, we can use an effect in order to retrieve this URL when the component mounts. We can call get download URL using the ID. When this promise resolves, if we have a URL, we can go ahead and set the image URL. And this effect will depend on the ID. Let's give that a save and head over to our browser. It looks like we need to import get download URL which is a function we just created.
>
> **[6:34](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=394)** And replace this call here. Let's give that a save. Refresh and our photo is displayed here. We do seem to have an error here though. Let's go back to profile.js. And this needs to be an array of dependencies. Let's give that a save, head over to our browser, refresh, and we see our uploaded image displayed now.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (1), [Firebase](../../Skills/Web%20Development/Firebase.md) (1)
> **Env Vars:** url (12)
> **File Paths:** user.js (3), config.js (1), image.js (1), profile.js (1)
> **CLI Commands:** make (3)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - with (1)

#### [Challenge: Monitor upload progress](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-monitor-upload-progress?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-monitor-upload-progress?u=76281980&t=0)** (pleasant electronic music)
>
> **[0:06](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-monitor-upload-progress?u=76281980&t=6)** - [Instructor] I would now like you to work on a challenge. While our file upload is working, there's no visual indicator that the photo is currently uploading. It would be great to have a progress indicator that can show us our current progress. Fortunately, with [Firebase](../../Skills/Web%20Development/Firebase.md), we can monitor the upload progress. Look at the example at this page in order to display a progress indicator to the user.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Firebase](../../Skills/Web%20Development/Firebase.md) (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (pleasant electronic music) (1)

#### [Solution: Upload progress](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-upload-progress?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-upload-progress?u=76281980&t=0)** - [Instructor] I will now show you one way to implement the file upload progress feature. But first, let me start from a clean slate. Let me delete this. Head out to our browser, I can refresh, And now I'm back to the placeholder image. Head over now to profileimage.js we will add a new piece of state. This would be the upload progress. The initial value will be zero. Now above the button, we can add progress element here. Let's add some style, the width will be a 100 percent. Max value will be a 100. And the value would be the upload progress.
>
> **[1:09](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-upload-progress?u=76281980&t=69)** Heading now to user.js, we can modify our upload image function to accept the new argument called progress, which will be a callback function that can be called with a snapshot information. We can actually use a second argument here, to get the snapshot information and call the progress call back with that snapshot. Back in the profile image component, we can create a new function called update progress. It will receive the snapshot and we can calculate the progress based on the bytes, transferred, divided by the total bytes. And we can multiply that by a hundred to get the percent. Finally, we can set the progress state here. We can then pass this update progress function as a callback to upload image. Let's go ahead and give that a save, and head over to our browser. We now see our progress bar here, and let's try to upload a photo now and we can see the upload progress being displayed here.

> [!info]- Semantic Content
>
> **File Paths:** profileimage.js (1), user.js (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Control Access with Custom Claims and Security Rules

[↑ Back to Table of Contents](#table-of-contents)

#### [Firebase ID tokens](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=0)** - [Presenter] So far we've implemented authentication and have allowed authenticated users to edit data and upload files. But how does [Firebase](../../Skills/Web%20Development/Firebase.md) check for authenticated users? It does is through Firebase ID [Tokens](../../Skills/Web%20Development/Tokens.md), which are essentially [JSON](../../Skills/Web%20Development/JSON.md) web tokens with added data. Every time a user signs in their user credentials are sent to the Firebase authentication backend and exchange for a Firebase ID token, a JWT, and they refresh token, which can be used to retrieve new tokens. JSON web tokens is an industry standard that provides a safe and compact way for representing data transfer between two parties. JWTs can be verified because they are signed, typically using a secret with the HVAC shot 256 algorithm. There are three parts to JSON web tokens, all separated by a dot. The header, the payload and the signature. The header will contain the algorithm with the token type. Typically the header for a JWT will look like this. Here it is specifying that the RSA shot 256 algorithm was used and the type is JWT. The payload includes claim information for an entity, which is most likely a user for your application. There are specific claims that are defined in the JWT standard, and you can also add your own properties to this object. A typical payload will look like this.
>
> **[1:36](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=96)** IAT stands for it should add the timestamp when this JWT was created. It is represented in seconds. Exp stands for expiration time, which is a time that this JWT expires also in seconds. Here we also added [Metadata](../../Skills/Web%20Development/Metadata.md) about a user. In this case, the email and other properties that are specific to Firebase, you can see how this will be very useful in building a role based authentication system. For instance, we will want to have an admin role that can view and edit all data and do important things like delete users if necessary, right from the web app. This feature will be implementing is called Firebase Custom Claims, and we'll be digging into it. Now here, I want to quickly show you what a Firebase ID token looks like. Let's head over to our web application now. Ensure that a user is logged in, open up your developer tools and head to the application tab. You will see that Firebase has maintained data in local storage for this user. In particular, we can inspect the access token, open up the value object under STS token manager. And you will see the access token here, head over to the sources tab, and then to snippets. We will write a spouse snippet to retrieve this token,
>
> **[3:14](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=194)** which can be very useful for debugging. Let's create a variable to hold the database, can have a request here, which would be indexed DB.open, local storage DB is Firebase, local storage DB.
>
> **[3:40](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=220)** This is for any errors
>
> **[3:50](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=230)** and also for a success event.
>
> **[3:58](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=238)** And we can grab the database from event.target.result. Let's create a transaction here now, and give it a name, let's grab a hold of the object store.
>
> **[4:23](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=263)** And in particular, we'll need to retrieve a specific value. Let's go ahead and grab this key right here. Copy that head back to sources. Then we can paste that here and we can create the on success handler here, scrap the data from event.target.result. Let's log this object out. And we can also grab the token from data.value.ststokenmanager.accesstoken
>
> **[5:07](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=307)** and ensure we close the database. Let's go ahead and run this snippet now. We can see the object here and the access token for this user we can go ahead and grab this token, head over to [jwt.io](https://jwt.io). We can paste that here. Looks like I didn't copy it correctly, right click and copy. We can paste that here. We can see that decoded token here. This token is then sent on every request to Firebase, and that is how the user is able to be verifiable and able to perform operations like updating data and uploading files.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Firebase](../../Skills/Web%20Development/Firebase.md) (10), [Tokens](../../Skills/Web%20Development/Tokens.md) (5), [JSON](../../Skills/Web%20Development/JSON.md) (3), [Metadata](../../Skills/Web%20Development/Metadata.md) (1)
> **Env Vars:** jwt (6), json (3), hvac (1), rsa (1), iat (1)
> **Definitions:** stands for (2), is an  (1), is a  (1), is called (1)
> **URLs:** [jwt.io](https://jwt.io) (1)
> **Analogies:** for instance (1)
> **Speakers:** - [presenter] (1)

#### [Setting Firebase custom claims](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=0)** - [Instructor] Our application will have one admin user. So let's create that manually through the [Firebase](../../Skills/Web%20Development/Firebase.md) console. I recommend that you create an email account for your particular admin user. My admin user will be thegrid.manager@[gmail.com](https://gmail.com), and let's set a password here. Great, now that user is created. It is currently not possible to add custom claims from the Firebase console. So generally there are a few ways to do it. One way is to add custom claims when a specific user is created, we can use Firebase Cloud functions to add a trigger to watch for such users. Another way to do it is to do it through the command line, which is perfectly fine as well. We will be using the Firebase Admin SDK, which will let us interact with Firebase from privileged environments to perform actions like adding custom claims and read and write to our database with full admin privileges. You can perform similar actions as if you're in the Firebase console manually. And we do so from a trusted environment. This trusted environment will be our own command line. Let's first install the Firebase Admin SDK. [npm](../../Skills/Web%20Development/npm.md) install firebase dash admin. And at the time of this recording, we are using eight dot 12 dot one. Next, head over to the Firebase console.
>
> **[1:41](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=101)** Click on Project settings, and then Service accounts. We will need to obtain credentials via the Firebase service account to authorize access to Firebase services, and we will need to generate a private key file in [JSON](../../Skills/Web%20Development/JSON.md) format. Firebase makes this really easy for us. Go ahead and click on Generate new private key, and remember that your private key gives access to your projects Firebase services. So make sure to never commit this file to your repository. Go ahead and click on Generate key. That file was downloaded. Then copy the snippet by clicking on the clipboard icon. Heading back to our application now, under Firebase, let's create a new file called set-custom-claims dot js, and paste that snippet in. Here, we will grab a hold of the uid, which will be a command line argument.
>
> **[3:05](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=185)** And then we can set the custom claims, which will simply be adding a property of true. So admin dot auth. You can call in method setCustomUserClaims for this particular user ID. And let's set the custom claim of admin true. This returns a promise, this log message here, custom claim set for user, uid, and then exit. Let's catch any errors here.
>
> **[3:57](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=237)** Go ahead and drag to download the key file to your project. We can drag it to the Firebase folder on the source. I will go ahead and copy the file name. Right click copy relative path, go back to your file, and we can update that here. This would actually be current directory forward slash, and then we have our file name here. Head back to your console now to grab the user ID. Head back to Authentication and let's copy this user ID. And then back to your terminal now, we can use the Firebase admin as a key in our node JS script, which will allow us to set custom claims on the specific user. Let's call the script with node, node source Firebase, forward slash, set-custom-claims dot js, and paste that user ID. Looks like we have an error here. And this should be argv. Let's give that a save, let's run that again. And that's it. Let's verify this by logging in with this user. Let me go ahead and start the application first. Clear the terminal, npm start,
>
> **[5:34](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=334)** and let's go ahead and log in now. Thegrid.manager@[gmail.com](https://gmail.com), set the password and we are logged in now. Let's grab the token with the previous snippet that we wrote. Open up your developer tools and go to sources, and then we replace this key here. Grab the new key, let's copy that and paste that here. And let's run that. And we have our token. Let's right click and copy this token and head over to [JWT.IO](https://JWT.IO). We can paste that here and we can see that our custom claim of admin has been set.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Firebase](../../Skills/Web%20Development/Firebase.md) (17), [npm](../../Skills/Web%20Development/npm.md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **CLI Commands:** node (3), npm (2), make (1)
> **Tools:** command line (3), terminal (2)
> **Env Vars:** sdk (2), json (1), jwt (1)
> **UI Navigation:** click on (3), go to (1)
> **URLs:** [gmail.com](https://gmail.com) (2), [jwt.io](https://jwt.io) (1)
> **Prerequisites:** install (2)
> **Code Identifiers:** setcustomuserclaims (1)

#### [Admin interface: Users page](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=0)** - [Instructor] Now that we have used the [Firebase](../../Skills/Web%20Development/Firebase.md) Admin SDK to set custom claims for an admin user, it is time to start developing our admin interface which will allow the admin user to see all of the registered users and view and edit the profile data. Let's start by creating a new users page, and call it Users.js. Let's create our component here. We'll call this users. And for now let's just return a div with the text users in that div.
>
> **[0:46](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=46)** Before adding a new route to our application, we need to do some work in UserProvider.js, the high order component, where we define the user context and where we get access to the user session. Here, we will want to get information about any custom claims in the user. In particular, we will check for the admin custom claim we previously set. So in addition to the user, let's add another property, isAdmin, and the initial value will be false. Now in the off state change callback, we will need to make some changes. Let's first declare a variable isAdmin and initialize that to false. If there is a user, we can grab the user token object, which we can do by calling the getidToken result method on the user. It returns a promise, so we can use a weight here. And finally, we can set isAdmin to the value found in token.claims.admin, which was the custom claim that we set. And then we can set the isAdmin accordingly. The reason we check for a user is that if there currently isn't an authenticated user,
>
> **[2:21](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=141)** there will be no token object to check for claims. Now, we can create our adamant route component. Let's create a new file under the folder router and call this AdminRoute.js. This will be very similar to the previous higher order components we have been creating like private route. Let's take care of our imports first here. Import [react](../../Skills/Web%20Development/React.js.md), then we can import route and redirect from react router dom, and also import our useSession from forward slash firebase user provider. We can declare our component here, and we will destructure the props, we'll rename the component and then retain the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the props. We can use our use session hook and grab the user, and also the isAdmin flag.
>
> **[3:42](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=222)** And here we can return a route, can give the rest of the props, and then in the render prop is where we can perform our checks. So be it'll a function that receives the props.
>
> **[4:03](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=243)** If there is a user and that user is the admin, then we can go ahead and render the desired component.
>
> **[4:18](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=258)** Otherwise we'll redirect the user to the login page, and we can do that by returning the redirect with a prop two, and the path will be login. And finally, let's make sure we export this component. It looks like I have an import here that I don't need. Now let's head to App.js. And here we can insert our new AdminRoute.
>
> **[4:58](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=298)** We want to match the exact, the path will be forward slash users, and the component will be the new users page component that we just created. So open up our terminal to make sure we don't have any errors. And it looks like we need to declare this function as async. So let's head to UserProvider.js, and we can add async here to this callback function. Let's give that a save, everything looks okay. Now let's add to our browser. Now when the admin users logged in, and I tried to access the root page, I am redirected to the profile page. And now we can try to visit the users page, and we see our component rendered. Now, when the adamant user is logged in, I am redirected to the profile page, that is fine for normal users, but for the admin user, we will like to redirect to the users page. Let's head now to the profile redirect component, and we can use our new isAdmin flag. In our redirect component we can then specify a different path for admin users. If we have an admin user, we redirect to users,
>
> **[6:36](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=396)** otherwise to the profile page, and we can test this out now. As the admin user, let me try to access the route page, and I can redirect it to the users page. One last change needs to be made. Upon login, all users are currently sent to the profile page. For the admin user, we should redirect them to the users page upon login, head over now to Login.js, which is our page component for the login form. And we can add here a new function, we'll call it routeOnLogin. We'll use async weight here. Let's grab a hold of the token in that user by calling getidTokenResult. Now, if we have an admin claim,
>
> **[7:42](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=462)** then we can redirect the user to the users page.
>
> **[7:54](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=474)** Otherwise, we'll redirect them to the profile page. We can grab the line here, copy that and paste that, and replace this line with our new function routeOnLogin,
>
> **[8:09](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=489)** and passing in the user. Let's test this out now. Let me log out, and I will log in as the admin user.
>
> **[8:25](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=505)** And when I log in, I am taken to the users page. I'm going to log out and they meet log in as a nonadmin user. And I am taken to the profile page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Firebase](../../Skills/Web%20Development/Firebase.md) (2), [React](../../Skills/Web%20Development/React.js.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2)
> **Code Identifiers:** isadmin (6), routeonlogin (2), getidtoken (1), usesession (1), getidtokenresult (1)
> **File Paths:** userprovider.js (2), users.js (1), adminroute.js (1), app.js (1), login.js (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (2)
> **Env Vars:** sdk (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Admin interface: Read user collection](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=0)** - [Instructor] Now that we have our admin route set up, let's display some users. I went ahead and added a few more users, using the sample data in the profiles folder in the project. If you need temporary email addresses, you can use something like [tempmail.org](https://tempmail.org). Heading back to our users component, we need to add a new piece of state and it will be an array of users. We can use the used state hook from [react](../../Skills/Web%20Development/React.js.md) and the initial value will be an empty array. We can then use the use effect hook in order to retrieve our users collection. Let's first create a reference to that collection. And we can use the firestore service and retrieve the users collection. On this users reference, we can listen for real time changes using the on snapshot method. And we get back what's called a query snapshot, from [Firebase](../../Skills/Web%20Development/Firebase.md). From this query snapshot, we can get the array of all the documents. We can actually map over these and call the data method on that document in order to get the [JavaScript](../../Skills/Software%20Development/JavaScript.md) object. And for now, let's just log out the users. We need to make sure we unsubscribe appropriately.
>
> **[1:38](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=98)** This actually returns a function that we can call and we can return this in the effect. And lastly, let's make sure we add an ether ray so that we tell react to only run this effect when the component is mounted. Let's head back to our application and it looks like we may have a compilation error. Let's see what's going on. We open up our terminal and it seems like we have an unnecessary import here. Let me delete that line, save. It compiles fine and let's head to our application. I'm going to open up the developer tools here, head to the console and refresh. Let me log in now as the admin user.
>
> **[2:40](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=160)** We can see that Firebase is throwing an error here, specifying that this user does not have permissions to read this data. If you look at our Firebase cloud store security rules, we have limited access for each user to their own user document. We will need to modify the security rules to allow the admin user to read the entire users collection. We can modify the current rules to check for the admin custom claim. So let's go ahead and replace all of these lines with allow read, write, update. If request.off.uid equals a user ID or if that user is an admin user. And you can do that by checking request.auth.token.admin.
>
> **[3:43](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=223)** Let's go ahead and save that. Next, head over to storage.rules. We also want the admin user to be able to read or write any of the profile images. So we can allow read if that is a particular user or if that user is an admin user. And we can do similar thing with the request.auth.token.admin. And we can also add that same line to allow reads. And then we'll go ahead and put the checks for the size and the image type in the parentheses. I'm going to stop our app here and redeploy our security rules. I'm actually going to create an [npm](../../Skills/Web%20Development/npm.md) script to facilitate this. Head over to package.[JSON](../../Skills/Web%20Development/JSON.md) and that will add a new NPM script; deploy firestore. And this will simply run firebase deploy//only firestore rules. And that will let a second NPM script; deploy storage and this will run firebase deploy//only storage rules. and this will run firebase deploy//only storage rules. Let me run both of those NPM scripts now. NPM run, deploy fire store and that is now deployed. Let me run
>
> **[5:16](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=316)** NPM run, deploy storage,
>
> **[5:26](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=326)** and that is now deployed as well. Let's go ahead and start our application now. And now, we see that the user data was fetched and is being logged out to the console.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Firebase](../../Skills/Web%20Development/Firebase.md) (6), [npm](../../Skills/Web%20Development/npm.md) (6), [React](../../Skills/Web%20Development/React.js.md) (2), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **CLI Commands:** npm (6), make (2)
> **Env Vars:** npm (6)
> **Definitions:** is an  (2), is a  (1)
> **File Paths:** package.json (1)
> **URLs:** [tempmail.org](https://tempmail.org) (1)
> **Tools:** terminal (1)
> **Prerequisites:** set up (1)

#### [Admin interface: Render user collection](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-render-user-collection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-render-user-collection?u=76281980&t=0)** - [Instructor] Now that we are successfully retrieving our users, let's display that data now. In the users component, once we successfully retrieved that users, let's set the state here by calling set users with our users array. And now here, we will render a table. Let's give this table a class name of UI Selectable Cell Table and let's render the table header here.
>
> **[0:44](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-render-user-collection?u=76281980&t=44)** And, we will render five fields.
>
> **[1:07](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-render-user-collection?u=76281980&t=67)** Next, we will go ahead and render a table body. And here, we will return a table role for each user. So let's go ahead and map the users array. For each user, we can return a table row. Let's give it a key which will be the user ID. And let's render each one of those fields. We will have the name, the specialty, the address,
>
> **[2:09](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-render-user-collection?u=76281980&t=129)** the phone, and the IP address. Let's give that a save and head over now to our browser. Let me close the Developer Tools and now we can see all of our data.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### [Challenge: View user profile with admin](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-view-user-profile-with-admin?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-view-user-profile-with-admin?u=76281980&t=0)** - [Narrator] I would like you to now work on a challenge. The admin user can view the user's collection, but we want to add the ability for the admin user to view individual profile data and modify that user data. To begin, you will need to add a link for a user. You can turn the username into a link by using link from [react](../../Skills/Web%20Development/React.js.md)-router-dom.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: View user profile with admin](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-view-user-profile-with-admin?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-view-user-profile-with-admin?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:06](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-view-user-profile-with-admin?u=76281980&t=6)** - [Tutor] Let me show you one way of implementing this feature. Head over now to users.js, our page component, and we can turn the user's name into a navigation link by using link from [react](../../Skills/Web%20Development/React.js.md) router dom, and using the username as the text for this link. We can go ahead and add the to prop, and the path will be /profile/userID.
>
> **[0:44](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-view-user-profile-with-admin?u=76281980&t=44)** Let's give that a save and head to our browser now. Now, if you try to navigate by clicking on this link, you see that the app doesn't seem to go anywhere. This is because the profile page is using the private route component, which only allows a user to view its own profile. We will need to modify that to allow admin users. Head over now to PrivateRoute.js, and then in our render prop, we can allow the route if that user is an admin. Let's go ahead and grab the isAdmin flag,
>
> **[1:28](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-view-user-profile-with-admin?u=76281980&t=88)** and we can add a check for the admin user here, or isAdmin. Let's give that a save and try the link now. And you can see that I am able to navigate to any profile now, as the admin user.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (1)
> **Code Identifiers:** isadmin (2), userid (1)
> **File Paths:** users.js (1), privateroute.js (1)
> **Definitions:** is an  (1)
> **Speakers:** - [tutor] (1)
> **Non-Speech:** (upbeat electronic music) (1)


### 6. Going Serverless with Firebase Cloud Functions

[↑ Back to Table of Contents](#table-of-contents)

#### [Cloud Functions setup](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-setup?u=76281980&t=0)** - [Instructor] Now we turn to probably one of the most exciting parts of this course, [Firebase](../../Skills/Web%20Development/Firebase.md) Cloud Functions. Cloud Functions for Firebase allows you to run back in code that automatically responds to event such as when data is created or deleted images are uploaded, or when there's a new user. Cloud Functions can also respond to HTTPS requests, allowing you to easily build a server-less API. As stated the code is stored in the cloud and runs and managed environment. In addition there's no need to manage and scale your own servers. Even better these functions can be written in [JavaScript](../../Skills/Software%20Development/JavaScript.md) or TypeScript, so you'll feel right at home. Let's get started, switching to the command prompt in your project directory. You'll want to ensure that you have the Firebase [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) installed globally via [npm](../../Skills/Web%20Development/npm.md), NPM installed -G Firebase-tools. Often bug fixes and new features are available only with the latest version of the Firebase tools. So it's a good practice to frequently update the CLI. Once installed, make sure that the Firebase logging command works and here it tells me that I'm already logged in. Let's initialize Cloud Functions for our project Firebase unit, functions.
>
> **[1:27](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-setup?u=76281980&t=87)** I will go ahead and use JavaScript to write my functions, click enter, and it will go ahead and set the default and go ahead and install dependencies now. Once done, let's go see the files that it generated. We see that there's a new functions folder, which is a directory containing the code for all of your Cloud Functions. The package.[JSON](../../Skills/Web%20Development/JSON.md) file is the MPM package file describing your Cloud Functions. Index.JS is a main source file for your Cloud Functions. And the node modules is a directory where your dependencies, which are declaring package.Jason live.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Firebase](../../Skills/Web%20Development/Firebase.md) (7), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (2), [npm](../../Skills/Web%20Development/npm.md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Env Vars:** cli (2), npm (2), https (1), api (1), mpm (1)
> **CLI Commands:** npm (2), make (1), node (1)
> **Definitions:** is a  (3)
> **File Paths:** package.json (1), index.js (1)
> **Tools:** command prompt (1)
> **Analogies:** such as (1)
> **Best Practices:** good practice (1)

#### [Cloud Functions: Email setup](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-email-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-email-setup?u=76281980&t=0)** - [Instructor] For our first [Firebase](../../Skills/Web%20Development/Firebase.md) cloud function, we'll be leveraging the authentication trigger to send the welcome email. Specifically, we will trigger the cloud function when a new user signs up. For this specific example, we will be using Nodemailer, which is a node-based email client. We will also be using a test Gmail account that I have created to send emails. I recommend that you create a Gmail account that you can use for development. Specifically, my email account is thegrid.notifier@[gmail.com](https://gmail.com). Keep in mind that Gmail has an email sending quota. For larger amount of emails, consider switching to something like SendGrid or Mailgun. Another thing to keep in mind is that the Spark plan, which is a free Firebase plan we are currently using only allows you to send requests to [Google](../../Glossary/Service/Google.md) Services. For non Google related services, you will need to enable billing and your Firebase project. You will also need to do two things for your test Gmail account. You can visit this URL in order to enable less secure app access. Please note that if you have enabled two-step verification, this option will be enabled for you. In that case, you will need to use an app password and you can follow the instructions here. I will go ahead and enable less secure app access. And lastly, you need to visit this link in order to allow access to your Google account.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Firebase](../../Skills/Web%20Development/Firebase.md) (3), [Google](../../Glossary/Service/Google.md) (3)
> **Warnings:** keep in mind (2), note that (1)
> **Definitions:** is a  (2)
> **CLI Commands:** node (1)
> **URLs:** [gmail.com](https://gmail.com) (1)
> **Env Vars:** url (1)
> **Speakers:** - [instructor] (1)

#### [Cloud Functions: Authentication trigger](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=0)** - [Instructor] Let's try our function now. [Firebase](../../Skills/Web%20Development/Firebase.md) Cloud Functions allows you to set environment variables which is important because you don't want to write credentials in your code. In your terminal, you can set environment variables using firebase functions:config:set. Now we'll set two environment variables, the email, which is thegrid.notifier@[gmail.com](https://gmail.com), and also the password. Go ahead and click Enter. Let's change directories into the functions folder and [npm](../../Skills/Web%20Development/npm.md) install nodemailer.
>
> **[0:52](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=52)** And now we can write our function. We will first require firebase-functions. This is a package that was installed when we initialized Cloud Functions in our project. Let's go ahead and require nodemailer as well. In here, we can grab the environment variables. We need the email in call functions.config, and we store it in gmail.email, and also the gmailPassword, which was stored in gmail.password. Here we can create the node mailer transport. Let's declare a variable. We can call nodemailer.createTransport. It takes in an object for the configuration. The service we'll be using is gmail. And it needs the auth information, the user, which is the email, and also the password.
>
> **[2:16](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=136)** Now we can write our function to send the email. Let's call this sendWelcomeEmail, and it takes in the user email. We will declare the mailOptions, which is the from field,
>
> **[2:45](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=165)** and also the to field, which is a user email. We will also go ahead and add the subject, which will simply say Welcome to The Grid, and finally the email text, and we can send a friendly greeting here and say Welcome to The Grid, the elite team of secret agents. Let's go ahead now and call the function to send the email. We can call mailTransport.sendEmail along with the mailOptions. We can console.log New welcome email sent to:, the user email, and return null here. In here, we can write the Cloud Function and set up the authentication trigger, exports.sendWelcomeEmail. We can listen for that authentication trigger by calling functions.auth.user .onCreate.
>
> **[4:22](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=262)** We will get the user information. Let's grab the email from that new user and then call our function to send this welcome email. To deploy our Cloud Function, let's use the firebase deploy command in the package.[JSON](../../Skills/Web%20Development/JSON.md) so we can run npm run deploy. So back to our terminal. Inside of the functions folder, we can write npm run deploy.
>
> **[5:01](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=301)** Once deployed, let's go ahead and start our app. I will go ahead and move up a directory and start my application. I'm currently logged in as the admin user, so let me go ahead and log out. I have a test user that I have created with a real email account, and we'll go ahead and sign up. Let's go ahead and sign up. And let's check that user's email account, and we see the email here: Welcome to The Grid, the elite team of secret agents. If for any reason your email didn't get sent, check the logs in the Firebase Console and ensure that you enable access to less secure apps, and visit the link for the Display Unlock Captcha, as displayed in the previous video. Congratulations, you have successfully written, deployed, and executed your serverless function.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Firebase](../../Skills/Web%20Development/Firebase.md) (5), [npm](../../Skills/Web%20Development/npm.md) (3), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Code Identifiers:** sendwelcomeemail (2), mailoptions (2), gmailpassword (1), createtransport (1), mailtransport (1)
> **CLI Commands:** npm (3), node (1)
> **File Paths:** functions.config (1), package.json (1)
> **Tools:** terminal (2)
> **Definitions:** is a  (2)
> **Prerequisites:** install (1), set up (1)
> **URLs:** [gmail.com](https://gmail.com) (1)


### 7. Hosting with Firebase

[↑ Back to Table of Contents](#table-of-contents)

#### [Firebase Hosting setup](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-hosting-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-hosting-setup?u=76281980&t=0)** - [Narrator] Now that we have used Authentication to manage users, Cloud Firestore to store data, [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) to store user files and Cloud Functions for serverless backends, it's time to deploy our application, and we can do so with the [Firebase](../../Skills/Web%20Development/Firebase.md) Hosting. We first need to ensure that we can build our [React](../../Skills/Web%20Development/React.js.md) application for production. Create React App has already created a build script for us, so we can simply run [npm](../../Skills/Web%20Development/npm.md) , run build and create React App, we'll go ahead and create an optimized production build for us. Looking at our project files, we see that there's a new build folder here with the optimized production build. And now we can set up Firebase Hosting. In your terminal go ahead and run Firebase in it. We will use the arrow keys, hit the space bar to choose hosting and then click enter. Our public directory will be build. We want to configure as a single page app and we don't want to override the index [HTML](../../Skills/Web%20Development/HTML.md) file. You will then see that the firebase.[JSON](../../Skills/Web%20Development/JSON.md) file has been updated with the hosting configuration.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Firebase](../../Skills/Web%20Development/Firebase.md) (4), [React](../../Skills/Web%20Development/React.js.md) (3), [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (1), [npm](../../Skills/Web%20Development/npm.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Env Vars:** npm (1), html (1)
> **Prerequisites:** set up (1), configure (1)
> **File Paths:** firebase.json (1)
> **CLI Commands:** npm (1)
> **Tools:** terminal (1)
> **Speakers:** - [narrator] (1)

#### [Deploying your React app](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-your-react-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-your-react-app?u=76281980&t=0)** - [Instructor] And now let's deploy the application that you have been working so hard on. Let's write a new [npm](../../Skills/Web%20Development/npm.md) script. We will call this "deploy:hosting", and this will run "[Firebase](../../Skills/Web%20Development/Firebase.md) deploy --only hosting". We'll also write another npm script, simply "deploy" and we can use "firebase deploy," without any arguments. When using this command without any flags, it will deploy all of the Firebase services that you have configured in your application. For the storage and cloud store services, this will deploy the security rules. When hosting is enabled, this will deploy your app. And finally, this will prepare, package and upload your cloud functions. Keep in mind, that running this command may take a few minutes on your machine. Let's go ahead and run npm deploy.
>
> **[1:09](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-your-react-app?u=76281980&t=69)** Once that is done, Firebase will give you the URL of your new application. Let's go ahead and visit that. And we have our application live at this URL. I will go ahead and log in as the admin user
>
> **[1:34](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-your-react-app?u=76281980&t=94)** and I am able to see all of the users and view individual profiles.
>
> **[1:45](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-your-react-app?u=76281980&t=105)** Let me log in as a regular user now and I can see my profile data, update my data as well. We can go ahead and visit the Firebase console as well and you will see some data such as the release history.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Firebase](../../Skills/Web%20Development/Firebase.md) (5), [npm](../../Skills/Web%20Development/npm.md) (3)
> **CLI Commands:** npm (3)
> **Env Vars:** url (2)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/next-steps?u=76281980&t=0)** - Thanks for joining me on this course. We have leveraged most of the excellent services provided by [Google](../../Glossary/Service/Google.md) to help us build a server-less app. You have built an app that uses many features like authentication, [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md), [React Hooks](../../Skills/Web%20Development/React%20Hooks.md), and Cloud functions. These are real skills that you can use in your project. I hope you enjoyed learning about the different [Firebase](../../Skills/Web%20Development/Firebase.md) features that will make you a much more productive developer when developing [React](../../Skills/Web%20Development/React.js.md) applications. I strongly recommend subscribing to the Firebase YouTube channel. The content is excellent, and it's a great way to keep up to date with any new features. And of course, continue to browse our library for anything React related. If you wish to know what I'm currently working on, follow me on [GitHub](../../Skills/Software%20Development/GitHub.md) at [github.com/victormejia](https://github.com/victormejia). You can also follow me at Twitter, at [twitter.com/_victormejia](https://twitter.com/_victormejia) Thanks for watching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Firebase](../../Skills/Web%20Development/Firebase.md) (2), [React](../../Skills/Web%20Development/React.js.md) (2), [GitHub](../../Skills/Software%20Development/GitHub.md) (2), [Google](../../Glossary/Service/Google.md) (1), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
> **URLs:** [github.com](https://github.com) (1), [twitter.com](https://twitter.com) (1)
> **Tools:** github (2)
> **CLI Commands:** make (1)
> **Speakers:** - thanks (1)


## Instructor

- [Victor Mejia](../../Instructors/Web%20Development/Victor%20Mejia.md)

## Resources

- Exercise files available

## Skills Covered

- React.js
- Firebase

## Path Context

### In [Improve Your React Skills](../../Paths/Web%20Development/Learning%20Paths/Improve%20Your%20React%20Skills.md)
← [Building a GraphQL Project with React.js](Building%20a%20GraphQL%20Project%20with%20React.js.md) | **9 of 9**

## Appears In

- [Improve Your React Skills](../../Paths/Web%20Development/Learning%20Paths/Improve%20Your%20React%20Skills.md)

## Related Courses

_Courses sharing skills:_

- [Building a GraphQL Project with React.js](Building%20a%20GraphQL%20Project%20with%20React.js.md) — React.js
- [React- Software Architecture](React-%20Software%20Architecture.md) — React.js
- [React- Testing and Debugging](React-%20Testing%20and%20Debugging.md) — React.js
- [React- Building Styles with CSS Modules](React-%20Building%20Styles%20with%20CSS%20Modules.md) — React.js
- [Building Modern Uis With React Router V6](Building%20Modern%20Uis%20With%20React%20Router%20V6.md) — React.js

---

[↑ Back to top](#)