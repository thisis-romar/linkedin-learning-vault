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
  - '[[Improve Your React Skills]]'
prev_courses:
  - '[[Building a GraphQL Project with React.js]]'
path_nav: '[{"path":"Improve Your React Skills","position":9,"total":9,"prev":"Building a GraphQL Project with React.js","next":null}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/react-js
  - skill/firebase
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/React-%20Cloud-Powered%20Apps%20with%20Firebase.md)

![React: Cloud-Powered Apps with Firebase](https://media.licdn.com/dms/image/v2/C560DAQG9TFjCCF4UaQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1600186691621?e=2147483647&amp;v=beta&amp;t=IwjzkWlF2qjuxcNKrsgcTw1rZa1mZe9rhFDHs-LJSss)

# React: Cloud-Powered Apps with Firebase

> Modern web applications require more than just your React code. You need hosting, APIs, authentication, and automatic deployments. You need to build apps fast, without managing infrastructure. Firebase allows you to do exactly that. Backed by Google Cloud Platform and used by some of the largest apps today, Firebase is a suite of tools to help build and scale your web application. In this course, 

> [LinkedIn Learning](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase) | 2h 29m | Advanced | 40K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (3 videos)
- **2. 1. Setting Up Your Development Environment** (4 videos)
- **3. 2. Firebase Authentication** (9 videos)
- **4. 3. Storing and Syncing Data with Firebase Cloud Firestore** (7 videos)
- **5. 4. Storing Files with Firebase Cloud Storage** (7 videos)
- **6. 5. Control Access with Custom Claims and Security Rules** (7 videos)
- **7. 6. Going Serverless with Firebase Cloud Functions** (3 videos)
- **8. 7. Hosting with Firebase** (2 videos)
- **9. Conclusion** (1 videos)

### 1. Introduction

#### Structuring your apps for the cloud
> [LinkedIn Learning](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud?u=76281980&t=0)** - So you want to build your next react web application, but you will need more than just your client side code.
>
> **[0:06](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud?u=76281980&t=6)** You need hosting APIs, authentication and deployment.
>
> **[0:09](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud?u=76281980&t=9)** Firebase by Google and power's front end developers to quickly tackle these problems and focus on what they love.
>
> **[0:15](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud?u=76281980&t=15)** - Hi, I'm Victor Majia, I'm a senior UI engineer and instructor, and welcome to this course on react Cloud-Powered Apps with Firebase.
>
> **[0:23](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud?u=76281980&t=23)** In this course, we'll be diving into all the powerful services that Firebase by Google provides in order to build a serverless application.
>
> **[0:31](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud?u=76281980&t=31)** Modern web apps require hosting, APIs, authentication and automatic deployment.
>
> **[0:37](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud?u=76281980&t=37)** We need to build apps fast without managing infrastructure.
>
> **[0:40](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud?u=76281980&t=40)** Firebase by Google allows you to do exactly that.
>
> **[0:44](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud?u=76281980&t=44)** Used by some of the largest apps today, Firebase is a suite of tools to help build and scale your web application.
>
> **[0:51](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud?u=76281980&t=51)** We'll first take a look at the Firebase console and see how we can manage different Firebase projects.
>
> **[0:56](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud?u=76281980&t=56)** We will then, use Firebase authentication to add authentication.
>
> **[1:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud?u=76281980&t=60)** As we build out features, we will need to store data using Cloud Firestorm along the way.
>
> **[1:05](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud?u=76281980&t=65)** To store files like images, we'll be using Cloud storage.
>
> **[1:09](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud?u=76281980&t=69)** We will then jump into the serverless world and learn how to create our own serverless functions using Firebase cloud functions.
>
> **[1:16](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud?u=76281980&t=76)** Finally, we will learn how to deploy our app using Firebase hosting.
>
> **[1:20](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud?u=76281980&t=80)** Along the way we'll use some of reacts latest features like hooks in order to build a robust application.
>
> **[1:27](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud?u=76281980&t=87)** We will also have the use react router and a package called react cook form, which will make it easier for us to work with forms and react.
>
> **[1:34](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud?u=76281980&t=94)** I'm really excited to cover this content with you.
>
> **[1:37](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/structuring-your-apps-for-the-cloud?u=76281980&t=97)** So let's dive in.

> [!info]- Semantic Content
>
> **Code Keywords:** require (1), finally, (1), let (1)
> **Speakers:** - so (1), - hi (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/what-you-should-know?u=76281980&t=0)** - [Narrator] This course will assume a basic understanding of React.
>
> **[0:04](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/what-you-should-know?u=76281980&t=4)** You will also need Node, npm, and Git installed on your system.
>
> **[0:09](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/what-you-should-know?u=76281980&t=9)** If you're not familiar with React, I recommend you watch our Essential Training course for React.
>
> **[0:16](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/what-you-should-know?u=76281980&t=16)** If you don't have Git installed on your system, go ahead and download it from [git-scm.com](https://git-scm.com).
>
> **[0:24](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/what-you-should-know?u=76281980&t=24)** We'll be using Node and npm the install packages.
>
> **[0:30](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/what-you-should-know?u=76281980&t=30)** If you don't know how to use npm, I recommend you watch our course on npm, the Node Package Manager.
>
> **[0:37](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/what-you-should-know?u=76281980&t=37)** I'll also be using Visual Studio Code as my main editor.
>
> **[0:41](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/what-you-should-know?u=76281980&t=41)** You can download it from code.[visualstudio.com](https://visualstudio.com).
>
> **[0:45](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/what-you-should-know?u=76281980&t=45)** I have also installed Prettier for Visual Studio Code in order to auto-format my JavaScript code as I save.
>
> **[0:52](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/what-you-should-know?u=76281980&t=52)** This is a really useful tool.
>
> **[0:55](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/what-you-should-know?u=76281980&t=55)** If you're interested in the theme that I'm using, it is the Night Owl theme by Sarah Drasner.
>
> **[1:02](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/what-you-should-know?u=76281980&t=62)** Lastly, we are going to spend quite some time in the terminal.
>
> **[1:05](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/what-you-should-know?u=76281980&t=65)** If you're on a Mac, I recommend downloading and installing iTerm2 version three.
>
> **[1:10](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/what-you-should-know?u=76281980&t=70)** And using a shell like ZSH in the Oh My ZSH framework, as it provides you with tooling that will make you much more productive at your terminal.
>
> **[1:19](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/what-you-should-know?u=76281980&t=79)** If you're on a Windows machine, I highly recommend you check out Cmder as an alternative to the Command Prompt.

> [!info]- Semantic Content
>
> **CLI Commands:** npm (4), node (3), git (3), make (1)
> **Tools:** visual studio (2), terminal (2), zsh (2), command prompt (1)
> **URLs:** [git-scm.com](https://git-scm.com) (1), [visualstudio.com](https://visualstudio.com) (1)
> **Env Vars:** zsh (2)
> **Code Identifiers:** iterm2 (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [narrator] (1)

#### Using the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/using-the-exercise-files?u=76281980&t=0)** - [Speaker} We will be building a fictitious App called The Grid, which will contain a list of secret agents.
>
> **[0:13](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/using-the-exercise-files?u=76281980&t=13)** The exercise files contains a Git repository, you can download the exercise files from the course homepage, or clone the GitHub repository found at this URL.
>
> **[0:26](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/using-the-exercise-files?u=76281980&t=26)** Once downloaded, you can run npm install in the master branch, you will only need to npm install once at the root of this project, in order to install all of the dependencies.
>
> **[0:39](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/using-the-exercise-files?u=76281980&t=39)** The master branch contains the completed application, and the starting point for this course with a branch 0104-begin.
>
> **[0:50](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/using-the-exercise-files?u=76281980&t=50)** So we can check out 01-04-begin.
>
> **[0:55](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/using-the-exercise-files?u=76281980&t=55)** I recommend you start here and work together with me and build the entire Application.
>
> **[1:01](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/using-the-exercise-files?u=76281980&t=61)** At any point, if you wish to see the files for a specific video, there's a branch you can use.
>
> **[1:07](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/using-the-exercise-files?u=76281980&t=67)** For example, if you're in chapter two, video three, you can check out the branch 02-03-begin.
>
> **[1:17](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/using-the-exercise-files?u=76281980&t=77)** If you wish to see the completed files for that particular video, you can check out the branch 02-03-end.
>
> **[1:28](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/using-the-exercise-files?u=76281980&t=88)** For each video, you can also view the pull request I made, to verify the changes match with your work.
>
> **[1:42](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/using-the-exercise-files?u=76281980&t=102)** Lastly, there is sample data that you can use for your users.
>
> **[1:46](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/using-the-exercise-files?u=76281980&t=106)** And this is found under the profiles folder, including images and data that you can use

> [!info]- Semantic Content
>
> **CLI Commands:** npm (2), git (1)
> **Exercise Files:** exercise files (2), download the (1)
> **Prerequisites:** install (3)
> **Env Vars:** url (1)
> **Tools:** github (1)
> **Analogies:** for example (1)
> **Speakers:** - [speaker (1)


### 2. 1. Setting Up Your Development Environment

#### Installing tools and CLIs
> [LinkedIn Learning](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/installing-tools-and-clis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/installing-tools-and-clis?u=76281980&t=0)** - [Instructor] We'll be using both the Node.js runtime along with npm.
>
> **[0:04](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/installing-tools-and-clis?u=76281980&t=4)** We'll be working with the current LTS, which is 12.18.2 at the time of this recording, and you will need at least version six of npm, which comes bundled with Node.
>
> **[0:14](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/installing-tools-and-clis?u=76281980&t=14)** If you are using Windows, go ahead and click on the button to download the executable.
>
> **[0:19](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/installing-tools-and-clis?u=76281980&t=19)** If you're on a Mac or a Linux machine, you can use nvm, the node version manager, which allows you to manage multiple versions of Node.
>
> **[0:27](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/installing-tools-and-clis?u=76281980&t=27)** I recommend you use nvm as it makes things very simple.
>
> **[0:31](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/installing-tools-and-clis?u=76281980&t=31)** First, let's use the install script.
>
> **[0:33](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/installing-tools-and-clis?u=76281980&t=33)** I am going to use cURL, and you can just copy and paste the terminal command.
>
> **[0:40](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/installing-tools-and-clis?u=76281980&t=40)** Head over to your terminal and we can paste that and run that.
>
> **[0:46](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/installing-tools-and-clis?u=76281980&t=46)** Next, in your terminal, you can now install version 12 of Node.js using nvm install 12.
>
> **[0:55](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/installing-tools-and-clis?u=76281980&t=55)** This command will install the latest version of 12.
>
> **[1:02](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/installing-tools-and-clis?u=76281980&t=62)** We can now verify both versions in the command line using node --version, and we see version 12.8.2 and npm --version, which shows 6.14.5.
>
> **[1:17](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/installing-tools-and-clis?u=76281980&t=77)** I would also recommend that you install the React Developer Tools.
>
> **[1:21](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/installing-tools-and-clis?u=76281980&t=81)** This will be very helpful for development and debugging.
>
> **[1:24](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/installing-tools-and-clis?u=76281980&t=84)** Great, we are now ready to get started.
>
> **[1:26](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/installing-tools-and-clis?u=76281980&t=86)** In the next video we'll take a look at generating a brand new React application.

> [!info]- Semantic Content
>
> **CLI Commands:** node (6), npm (3), curl (1)
> **Versions:** version 12 (2), 12.18.2 (1), 8.2 (1), 6.14.5 (1)
> **Prerequisites:** install (5)
> **Tools:** terminal (3), command line (1)
> **File Paths:** node.js (2)
> **Code Keywords:** let (1)
> **Code Identifiers:** curl (1)
> **Env Vars:** lts (1)

#### Generating a new React application
> [LinkedIn Learning](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/generating-a-new-react-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/generating-a-new-react-application?u=76281980&t=0)** - [Instructor] The starting point for this course will be a React Application that has already been generated for you.
>
> **[0:06](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/generating-a-new-react-application?u=76281980&t=6)** But here, I want to show you how you can do that yourself.
>
> **[0:10](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/generating-a-new-react-application?u=76281980&t=10)** We can generate a brand new React Application using the Create React App Tool chain, which sets up they develop an environment so that we can use the latest JavaScript features.
>
> **[0:20](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/generating-a-new-react-application?u=76281980&t=20)** In addition to providing a great development experience, it will make it much easier for us to take care of common tasks, such as live-editing CSS and JS in development and optimizing the output for production.
>
> **[0:33](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/generating-a-new-react-application?u=76281980&t=33)** Let's head to our terminal and generate a brand new application.
>
> **[0:38](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/generating-a-new-react-application?u=76281980&t=38)** We can do that using NPX, Create React App, and then the name of the application.
>
> **[0:52](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/generating-a-new-react-application?u=76281980&t=52)** If you haven't used NPX before, it's simply a package runner tool that comes with MPM, starting from version 5.2.
>
> **[1:01](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/generating-a-new-react-application?u=76281980&t=61)** It will allow us to run, Create React App without installing it globally on our machine.
>
> **[1:06](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/generating-a-new-react-application?u=76281980&t=66)** Let's go ahead and run it now.
>
> **[1:10](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/generating-a-new-react-application?u=76281980&t=70)** This will fetch a tool, create a directory and files, initialize a repository and install the required tools and packages.
>
> **[1:22](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/generating-a-new-react-application?u=76281980&t=82)** Great, that is now complete.
>
> **[1:24](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/generating-a-new-react-application?u=76281980&t=84)** I will now change directories into my new application and open that up using visual studio code.
>
> **[1:36](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/generating-a-new-react-application?u=76281980&t=96)** Heading over to the package.json file, we see that we are given four simple commands.
>
> **[1:42](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/generating-a-new-react-application?u=76281980&t=102)** NPM start, to start the development server, NPM run build, to build and bundle the app for production.
>
> **[1:49](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/generating-a-new-react-application?u=76281980&t=109)** NPM tests, to run your tests and NPM run eject to get access to the configuration files.
>
> **[1:56](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/generating-a-new-react-application?u=76281980&t=116)** An option that you wouldn't really need as a tool is already great.
>
> **[2:02](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/generating-a-new-react-application?u=76281980&t=122)** Also, this course we'll assume you are using React version 16, so please ensure that you are using this as well.
>
> **[2:09](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/generating-a-new-react-application?u=76281980&t=129)** We'll be working with React Hooks, so we will need at least version 16.8.
>
> **[2:15](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/generating-a-new-react-application?u=76281980&t=135)** Let's go ahead now and run NPM start.
>
> **[2:20](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/generating-a-new-react-application?u=76281980&t=140)** We can open up a new terminal window and run NPM start.
>
> **[2:25](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/generating-a-new-react-application?u=76281980&t=145)** We will see our development service start and we now have a React Application running.

> [!info]- Semantic Content
>
> **Env Vars:** npm (6), npx (2), css (1), mpm (1)
> **CLI Commands:** npm (6), npx (2), make (1)
> **Code Keywords:** let (3)
> **Versions:** version 16 (2), version 5 (1)
> **Tools:** terminal (2), visual studio (1)
> **File Paths:** package.json (1)
> **Analogies:** such as (1)
> **Prerequisites:** install (1)

#### Overview of the Firebase console
> [LinkedIn Learning](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/overview-of-the-firebase-console?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/overview-of-the-firebase-console?u=76281980&t=0)** - [Instructor] In this course, we will be working with Firebase by Google.
>
> **[0:03](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/overview-of-the-firebase-console?u=76281980&t=3)** So what we'll need to first configure a Firebase project.
>
> **[0:06](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/overview-of-the-firebase-console?u=76281980&t=6)** From the Firebase homepage, log into the Firebase Console by clicking on the go-to console link and log in with your Google account.
>
> **[0:14](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/overview-of-the-firebase-console?u=76281980&t=14)** Once logged in, you will be taken to the Firebase dashboard.
>
> **[0:17](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/overview-of-the-firebase-console?u=76281980&t=17)** Go ahead and create a new project.
>
> **[0:19](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/overview-of-the-firebase-console?u=76281980&t=19)** You can name it whatever you like.
>
> **[0:21](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/overview-of-the-firebase-console?u=76281980&t=21)** If the name is not unique, Firebase will suggest a unique name for you.
>
> **[0:25](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/overview-of-the-firebase-console?u=76281980&t=25)** We'll be working with a fictitious app called the Grid which will be a contact manager for special agents.
>
> **[0:31](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/overview-of-the-firebase-console?u=76281980&t=31)** So I will name it, react, dash grid, dash dashboard.
>
> **[0:37](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/overview-of-the-firebase-console?u=76281980&t=37)** Go ahead and click continue.
>
> **[0:39](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/overview-of-the-firebase-console?u=76281980&t=39)** We don't want to set up Google analytics for this project and click on create project.
>
> **[0:45](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/overview-of-the-firebase-console?u=76281980&t=45)** Firebase we'll go ahead and create the project for you and notify you once it's ready.
>
> **[0:51](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/overview-of-the-firebase-console?u=76281980&t=51)** Clicking on continue, we'll take it to that project dashboard which will be used throughout this course.
>
> **[0:58](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/overview-of-the-firebase-console?u=76281980&t=58)** Heading over to the develop tab, you can see the different Firebase features that we'll be using.
>
> **[1:05](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/overview-of-the-firebase-console?u=76281980&t=65)** We'll be using Firebase Authentication to manage both the admin and the registered users for our app.
>
> **[1:13](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/overview-of-the-firebase-console?u=76281980&t=73)** We will be using the Cloud Firestore to start data and leverage its real time capabilities.
>
> **[1:20](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/overview-of-the-firebase-console?u=76281980&t=80)** We'll be using Firebase Storage to store files.
>
> **[1:24](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/overview-of-the-firebase-console?u=76281980&t=84)** In our case, to store user uploaded images.
>
> **[1:30](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/overview-of-the-firebase-console?u=76281980&t=90)** Firebase hosting will be used to easily deploy our app to the Cloud.
>
> **[1:34](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/overview-of-the-firebase-console?u=76281980&t=94)** And finally, we'll be using Firebase Functions and dive into the servers this world.
>
> **[1:40](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/overview-of-the-firebase-console?u=76281980&t=100)** At this point, it will be good to install the Firebase CLI since we'll be working with Firebase.
>
> **[1:46](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/overview-of-the-firebase-console?u=76281980&t=106)** Let's set over to our terminal now.
>
> **[1:48](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/overview-of-the-firebase-console?u=76281980&t=108)** And you can install the Firebase tools with npm.
>
> **[1:51](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/overview-of-the-firebase-console?u=76281980&t=111)** Npm install, dash D, Firebase dash tools.
>
> **[1:58](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/overview-of-the-firebase-console?u=76281980&t=118)** Once that is completed, sign into Firebase using your Google account, and we can do that using Firebase Login.
>
> **[2:10](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/overview-of-the-firebase-console?u=76281980&t=130)** This command connects your local machine to Firebase and grants you access to your Firebase projects.
>
> **[2:18](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/overview-of-the-firebase-console?u=76281980&t=138)** Go ahead and click allow, and we see that the Firebase CLI Login was successful.
>
> **[2:26](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/overview-of-the-firebase-console?u=76281980&t=146)** Let's go ahead and test that the authentication worked.
>
> **[2:29](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/overview-of-the-firebase-console?u=76281980&t=149)** Let's list all of our Firebase projects, and we can do that by using Firebase projects list.
>
> **[2:39](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/overview-of-the-firebase-console?u=76281980&t=159)** And we can now see all of our Firebase projects.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), continue (2), case, (1), finally, (1)
> **Prerequisites:** install (3), configure (1), set up (1)
> **CLI Commands:** npm (2)
> **Env Vars:** cli (2)
> **Tools:** terminal (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### Configuring your web application
> [LinkedIn Learning](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980&t=0)** - [Instructor] Now that we have created a Firebase project and installed the Firebase CLI tools, we need to configure our web application with Firebase through the Firebase console, and also install the Firebase library.
>
> **[0:12](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980&t=12)** We will be using the official Firebase library by Google and install it through npm.
>
> **[0:18](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980&t=18)** This will be the starting point for the course.
>
> **[0:20](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980&t=20)** So in the exercise files, first, make sure to check out the branch, 01-04-begin and install dependencies with npm install.
>
> **[0:33](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980&t=33)** To get the most of this course, I suggest you start here and continue as you work with begin, building out the entire application.
>
> **[0:42](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980&t=42)** In your terminal install Firebase.
>
> **[0:45](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980&t=45)** At the time of this recording, the latest version is 7.15.0.
>
> **[0:50](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980&t=50)** So we'll be using that.
>
> **[0:55](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980&t=55)** Let's head over now to the Firebase console.
>
> **[0:59](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980&t=59)** Click on the Project settings and scroll down to the area that says Your apps.
>
> **[1:06](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980&t=66)** Go ahead and click on the web icon.
>
> **[1:09](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980&t=69)** I will write here REACT DASHBOARD as the app nickname, and we don't have to set up hosting just yet.
>
> **[1:16](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980&t=76)** Go ahead and click on Register app.
>
> **[1:20](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980&t=80)** It will then suggest you copy and paste this scripts, but since we have installed Firebase through npm, we don't need to do that.
>
> **[1:27](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980&t=87)** However, we will need these values.
>
> **[1:32](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980&t=92)** We will go ahead and use the feature of Create React App that allows us to easily add environment variables.
>
> **[1:40](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980&t=100)** Often in your application that are desired to provide different environment variables, depending on what environment your app is being served on.
>
> **[1:47](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980&t=107)** For instance, on developing locally or in a staging or production environment, we will need to prefix each variable with REACT_APP_.
>
> **[1:59](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980&t=119)** This is a convention that is used, you can read more about it here.
>
> **[2:04](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980&t=124)** Heading over to the Firebase console again, we will grab these values and place them in a new environment file.
>
> **[2:11](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980&t=131)** Go ahead and copy that and head over and out to your project.
>
> **[2:16](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980&t=136)** We'll create a new file .env and paste the values we just copied.
>
> **[2:23](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980&t=143)** Let's go ahead and format this file to the convention that React expects.
>
> **[2:28](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980&t=148)** So be an equal sign and each environment variable will be prefixed by REACT_APP_.
>
> **[2:37](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980&t=157)** You have the API_KEY, the AUTH_DOMAIN, the DATABASE_URL, PROJECT_ID, STORAGE_BUCKET, and the MESSAGING_SENDER_ID.
>
> **[2:59](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980&t=179)** We don't need the appId here.
>
> **[3:01](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980&t=181)** Lastly, let's get rid of these quotation marks and also the trailing commas.
>
> **[3:11](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980&t=191)** Let's create a folder called Firebase and here create a new file called config.js.
>
> **[3:19](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980&t=199)** This is where we will initialize Firebase with our configuration, import firebase from 'firebase/app'.
>
> **[3:29](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980&t=209)** And then we can create our Firebase app by calling firebase.InitializeApp, with an object containing our configuration here.
>
> **[3:40](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980&t=220)** Let's replace these values with our new environment variables, REACT_APP_.
>
> **[3:57](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980&t=237)** This is the API_KEY, the AUTH_DOMAIN, the DATABASE_URL, the PROJECT_ID, STORAGE_BUCKET and also the MESSAGING_SENDER_ID.
>
> **[4:22](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980&t=262)** And these variables can be accessed using process.env.
>
> **[4:32](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980&t=272)** Heading over to App.js now, we can import our new configuration file add './firebase/config'.
>
> **[4:42](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980&t=282)** And lastly, back in config.js, let's insert a quick console.log to ensure that our Firebase app initialize with the correct configuration.
>
> **[4:53](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980&t=293)** You can do that using [firebase.app](https://firebase.app).options.
>
> **[5:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980&t=300)** Let's test our app now by running npm start.
>
> **[5:06](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980&t=306)** So open up our console, verify that you don't have any computation errors, and we can see that we have our configuration here.
>
> **[5:17](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980&t=317)** It looks like MESSAGING_SENDER_ID is undefined.
>
> **[5:20](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980&t=320)** Let's head back to our application and there's a typo here.
>
> **[5:26](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/configuring-your-web-application?u=76281980&t=326)** Save that, head back to your application, and now we see all of our values displayed.

> [!info]- Semantic Content
>
> **Env Vars:** react_app_ (3), messaging_sender_id (3), api_key (2), auth_domain (2), database_url (2)
> **Code Keywords:** let (8), continue (1)
> **Prerequisites:** install (5), configure (1), set up (1)
> **CLI Commands:** npm (4), make (1)
> **File Paths:** config.js (2), process.env (1), app.js (1)
> **UI Navigation:** click on (3), scroll down (1)
> **Code Identifiers:** appid (1)
> **URLs:** [firebase.app](https://firebase.app) (1)


### 3. 2. Firebase Authentication

#### Firebase Authentication setup
> [LinkedIn Learning](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-authentication-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-authentication-setup?u=76281980&t=0)** - [Instructor] Now that we have set up our web application with Firebase by adding configuration values, we first need to add authentication through the Firebase console.
>
> **[0:10](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-authentication-setup?u=76281980&t=10)** Click on Authentication, then Set up sign-in method.
>
> **[0:17](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-authentication-setup?u=76281980&t=17)** We will enable email and password sign-in for now.
>
> **[0:27](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-authentication-setup?u=76281980&t=27)** We will be using routing in our application and achieving this with React Router.
>
> **[0:32](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-authentication-setup?u=76281980&t=32)** Let's first install this.
>
> **[0:34](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-authentication-setup?u=76281980&t=34)** At the time of this recording, the version used is 5.2.0.
>
> **[0:39](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-authentication-setup?u=76281980&t=39)** So let's install that version, npm install react-router-dom@5.2.0.
>
> **[0:53](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-authentication-setup?u=76281980&t=53)** Let's create a sign-up component that will provide a form for the user to sign up.
>
> **[0:57](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-authentication-setup?u=76281980&t=57)** We'll create a new folder to house the pages in our application.
>
> **[1:03](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-authentication-setup?u=76281980&t=63)** I have provided a starting point for the form.
>
> **[1:06](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-authentication-setup?u=76281980&t=66)** In the exercise files, head to the resources folder, then folder 02-01, and you can grab the Signup.js file and drag it to the new pages folder.
>
> **[1:20](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-authentication-setup?u=76281980&t=80)** The classes used for the HTML elements here are from a Semantic UI framework.
>
> **[1:26](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-authentication-setup?u=76281980&t=86)** You can visit the Semantic UI documentation site if you wish to have a different look.
>
> **[1:33](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-authentication-setup?u=76281980&t=93)** I have also provided some CSS here.
>
> **[1:37](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-authentication-setup?u=76281980&t=97)** Let's go ahead and copy that and paste it into App.css.
>
> **[1:46](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-authentication-setup?u=76281980&t=106)** And then we'll go ahead and uncomment this.
>
> **[1:51](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-authentication-setup?u=76281980&t=111)** Next we want to display this form at a new route for our application.
>
> **[1:57](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-authentication-setup?u=76281980&t=117)** In App.js, let's import our new page, import from ./pages/Signup.
>
> **[2:08](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-authentication-setup?u=76281980&t=128)** We will also import Route, Switch, and BrowserRouter
>
> **[2:17](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-authentication-setup?u=76281980&t=137)** from react-router-dom.
>
> **[2:22](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-authentication-setup?u=76281980&t=142)** Let's set up routing now.
>
> **[2:24](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-authentication-setup?u=76281980&t=144)** We can wrap everything using BrowserRouter, which is the main building block for routing.
>
> **[2:34](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-authentication-setup?u=76281980&t=154)** It uses HTML5 History API in order to keep our UI in sync with the URL.
>
> **[2:42](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-authentication-setup?u=76281980&t=162)** Next, inside the container, we will use the switch component, which allows us to render a route exclusively.
>
> **[2:52](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-authentication-setup?u=76281980&t=172)** We will have a new route.
>
> **[2:54](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-authentication-setup?u=76281980&t=174)** We want to match the exact path.
>
> **[2:58](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-authentication-setup?u=76281980&t=178)** The path will be /signup and the component will be the new Signup component we just created.
>
> **[3:09](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-authentication-setup?u=76281980&t=189)** Let's go ahead and run npm start.
>
> **[3:14](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-authentication-setup?u=76281980&t=194)** Once that is done, you can go ahead and visit /signup and see our new form.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), this. (2), switch (2), from . (1)
> **Prerequisites:** set up (3), install (3)
> **Env Vars:** html (1), css (1), html5 (1), api (1), url (1)
> **File Paths:** signup.js (1), app.css (1), app.js (1)
> **CLI Commands:** npm (2)
> **Versions:** 5.2.0 (2)
> **UI Navigation:** click on (1)
> **Exercise Files:** exercise files (1)

#### Creating users
> [LinkedIn Learning](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=0)** - [Instructor] Now that we have a form for inputting information, let's add functionality to the simple form and create a user with Firebase.
>
> **[0:08](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=8)** To make things easier when working with forms, we will be using React Hook Form.
>
> **[0:13](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=13)** A great little library that will provide a great experience.
>
> **[0:17](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=17)** Both for the user, and for the developer.
>
> **[0:20](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=20)** And it uses React hooks.
>
> **[0:23](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=23)** Let's install React Hook Form now.
>
> **[0:25](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=25)** Npm install react-hook-form.
>
> **[0:30](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=30)** And at the time of this recording, we are using version 5.7.2.
>
> **[0:38](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=38)** Heading over now to our new signup component, we will import the useForm hook from react-hook-form.
>
> **[0:53](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=53)** Now by invoking the useForm hook, we get back several useful methods.
>
> **[1:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=60)** Let's just structure these here.
>
> **[1:03](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=63)** And we're interested in these three.
>
> **[1:05](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=65)** The register method will allow us to register our inputs and add validation rules.
>
> **[1:11](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=71)** The handleSubmit method will be used for dealing with the form data.
>
> **[1:16](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=76)** And the reset method will be used to clear the form after a successful form submit.
>
> **[1:24](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=84)** Let's first register every one of our inputs by using the ref attribute.
>
> **[1:35](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=95)** Let's do that for the first name.
>
> **[1:39](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=99)** The last name.
>
> **[1:42](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=102)** The email.
>
> **[1:46](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=106)** The password.
>
> **[1:48](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=108)** And those are it.
>
> **[1:50](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=110)** Next, we want to handle the form submission.
>
> **[1:52](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=112)** So let's add that now on the form.
>
> **[1:58](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=118)** OnSubmit.
>
> **[1:59](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=119)** We will call the handleSubmit method from React Hook Form.
>
> **[2:05](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=125)** The callback will be an onSubmit function we'll create now.
>
> **[2:13](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=133)** We'll get back some data.
>
> **[2:14](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=134)** And for now, let's just log this data out.
>
> **[2:20](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=140)** Now, we can create a function for creating a user.
>
> **[2:24](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=144)** Under firebase I will create a new file called auth.js.
>
> **[2:30](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=150)** Here, let's import firebase from firebase/app.
>
> **[2:37](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=157)** And we'll have a new function called signup.
>
> **[2:44](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=164)** It will take in an object.
>
> **[2:46](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=166)** Let's go ahead and just structure this data now.
>
> **[2:49](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=169)** First name, the last name, the email and the password.
>
> **[2:57](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=177)** We will first use use Firebase auth to create a user with email and password.
>
> **[3:04](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=184)** Firebase.auth.
>
> **[3:08](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=188)** And call a method createUserWithEmailAndPassword.
>
> **[3:18](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=198)** We will use async await here.
>
> **[3:22](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=202)** Since this is an asynchronous method here.
>
> **[3:30](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=210)** From the response, we will grab the user and update the profile in order to set the display name.
>
> **[3:43](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=223)** We will set the display name using the first name and the last name.
>
> **[3:55](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=235)** Heading back to the signup component now.
>
> **[3:58](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=238)** We can import our new function.
>
> **[4:01](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=241)** Import signup from firebase auth.
>
> **[4:12](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=252)** And now, we can use that and our onSubmit handler.
>
> **[4:17](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=257)** Let's use a try-catch block here.
>
> **[4:22](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=262)** We will call the signup function with the data.
>
> **[4:28](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=268)** If it's successful, we can reset the form.
>
> **[4:33](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=273)** We can catch any error.
>
> **[4:35](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=275)** And for now, we can simply log out the error here.
>
> **[4:43](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=283)** And we'll need to use async here.
>
> **[4:49](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=289)** Lastly, we want some sort of indicator that our application is performing a network request.
>
> **[4:54](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=294)** And we will do so by applying the loading clause on the form.
>
> **[4:59](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=299)** Let's use the useState hook to add some state to our component.
>
> **[5:09](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=309)** We will call this piece of state isLoading.
>
> **[5:12](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=312)** And also we get back the setLoading function.
>
> **[5:21](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=321)** We will set it to true before performing the network request, and then reset it back to false.
>
> **[5:29](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=329)** Here.
>
> **[5:32](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=332)** Let's create a variable here for the form class name.
>
> **[5:37](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=337)** The UI form.
>
> **[5:40](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=340)** And if it's loading, it will add the class of loading.
>
> **[5:46](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=346)** Otherwise, it will be an empty string.
>
> **[5:52](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=352)** And we can replace here a class name with formClassName.
>
> **[6:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=360)** Let's start our application now and turn to the browser.
>
> **[6:08](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=368)** I'm going to have my developer tools open to check for any errors.
>
> **[6:19](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=379)** And let's sign up a user now.
>
> **[6:22](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=382)** First name and last name.
>
> **[6:24](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=384)** And then let's input the email and the password.
>
> **[6:28](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=388)** And click Sign Up.
>
> **[6:30](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=390)** And looks like we have an error here.
>
> **[6:33](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=393)** We need to import one more thing here.
>
> **[6:36](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=396)** Import firebase/auth.
>
> **[6:41](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=401)** Let's recompile that.
>
> **[6:43](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=403)** Head back to our application.
>
> **[6:45](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=405)** And let's try signing up again.
>
> **[6:51](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=411)** Let's head over to the Firebase console now.
>
> **[6:53](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=413)** Click on Users.
>
> **[6:55](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-users?u=76281980&t=415)** And then we see our new user created here.

> [!info]- Semantic Content
>
> **Code Keywords:** let (18), function (6), async (2), await (1)
> **Code Identifiers:** useform (2), handlesubmit (2), onsubmit (2), createuserwithemailandpassword (1), usestate (1)
> **CLI Commands:** make (1), npm (1)
> **Versions:** version 5 (1), 7.2 (1)
> **Prerequisites:** install (2)
> **File Paths:** auth.js (1)
> **UI Navigation:** click on (1)
> **Definitions:** is an  (1)

#### Displaying current user
> [LinkedIn Learning](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=0)** - [Instructor] Now that we have implemented user signup, wanting to be able to display the currently authenticated user.
>
> **[0:07](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=7)** It will also provide a better user experience if the user gets routed to a profile page where they can see their information.
>
> **[0:13](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=13)** Let's do that now.
>
> **[0:15](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=15)** But first, we need to be able to get the current authenticated session and be able to access that in any component.
>
> **[0:22](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=22)** We will do so by leveraging react context.
>
> **[0:25](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=25)** And then child components will leverage hooks to access the user session.
>
> **[0:30](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=30)** Let's start by creating a new file under the firebase folder here and call it UserProvider.js.
>
> **[0:40](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=40)** We will use this file to house the user context, a provider component, and also a hook to access a current user session.
>
> **[0:48](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=48)** First let's import React.
>
> **[0:50](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=50)** And then the useEffect, useState, and useContext hooks from react.
>
> **[1:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=60)** Also let's import firebase from firebase/app.
>
> **[1:09](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=69)** We can create our user context by calling React.createContext.
>
> **[1:18](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=78)** Now we will create our UserProvider component, which will be the top level component of our app.
>
> **[1:26](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=86)** We will use props to render the children.
>
> **[1:32](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=92)** And we can use the useState hook here to create a state for the current session.
>
> **[1:46](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=106)** Giving it initial value of null for the user.
>
> **[1:50](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=110)** and also to hold the loading state.
>
> **[1:57](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=117)** Inside of this component, we will leverage the useEffect hook in order to listen for any Firebase authentication changes.
>
> **[2:09](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=129)** The useEffect hook is a hook that allows you to perform side effects in functional components.
>
> **[2:14](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=134)** It allows us to run these effects only after the component has rendered.
>
> **[2:18](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=138)** So it doesn't block UI rendering.
>
> **[2:22](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=142)** Here we can call firebase.auth.
>
> **[2:26](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=146)** And listen for any authentication state changes.
>
> **[2:33](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=153)** And we will get back the user here.
>
> **[2:39](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=159)** This returns to us a function that we can call in order to unsubscribe.
>
> **[2:47](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=167)** In the callback here we will set our state.
>
> **[2:52](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=172)** Loading will be set to false.
>
> **[2:55](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=175)** And then we can set the user.
>
> **[2:58](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=178)** In this effect, we can return a function that is called before the component is removed from the UI.
>
> **[3:04](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=184)** And we want to do this in order to avoid any memory leaks.
>
> **[3:10](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=190)** Also, we can use a second argument to the useEffect hook.
>
> **[3:14](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=194)** To tell React to when to run this effect.
>
> **[3:17](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=197)** We will simply provide an empty array in order to run the effect and clean up only once.
>
> **[3:22](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=202)** It basically tells React that our effect doesn't depend on any values from props or state.
>
> **[3:27](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=207)** Finally, let's return the provider component.
>
> **[3:31](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=211)** Our user context comes with a provider React component that will allow consuming components to subscribe to context changes.
>
> **[3:47](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=227)** We can provide the value here.
>
> **[3:49](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=229)** Which would be the session.
>
> **[3:54](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=234)** And finally, we can render the children once it is done loading.
>
> **[4:10](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=250)** Lastly, we can create a hook and call that useSession.
>
> **[4:15](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=255)** That will allow other components to access the user context.
>
> **[4:21](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=261)** Let's call a useContext here using the userContext.
>
> **[4:26](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=266)** And we can return the session.
>
> **[4:30](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=270)** Heading over to App.js now, we can import our new userProvider.
>
> **[4:39](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=279)** From firebase userProvider.
>
> **[4:45](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=285)** We can then add it as a top level component.
>
> **[4:54](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=294)** Let's create a profile page component now.
>
> **[4:57](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=297)** Under pages, New File, Profile.js.
>
> **[5:03](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=303)** Import React from react.
>
> **[5:08](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=308)** And we can import our newly created hook called useSession.
>
> **[5:14](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=314)** From firebase/userProvider.
>
> **[5:21](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=321)** Let's create our component now.
>
> **[5:24](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=324)** We can grab a hold of the user by calling the use session hook.
>
> **[5:33](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=333)** If there is no user we can return null.
>
> **[5:40](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=340)** And if we have a user, let's return some information here.
>
> **[5:50](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=350)** Let's return the name.
>
> **[5:55](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=355)** And remember we set the display name.
>
> **[6:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=360)** The email.
>
> **[6:03](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=363)** User.email.
>
> **[6:06](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=366)** And also the user ID, which is the property uid.
>
> **[6:16](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=376)** Looks like I need to close this tag here.
>
> **[6:23](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=383)** and let's make sure we export the Profile component here.
>
> **[6:29](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=389)** Let's head back to App.js and add another route.
>
> **[6:36](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=396)** We'll want to match the exact route at /profile.
>
> **[6:41](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=401)** And the component will be our new Profile component.
>
> **[6:48](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=408)** Let's head over to our app again.
>
> **[6:50](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=410)** Let's refresh.
>
> **[6:52](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=412)** We can see that there is a current user session.
>
> **[6:58](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=418)** Heading over to application under indexedDB.
>
> **[7:02](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=422)** Let's head to /profile.
>
> **[7:06](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=426)** And we see the user that was just created.
>
> **[7:10](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-current-user?u=76281980&t=430)** To see all the available information for the Firebase user, You can refer to the Firebase documentation at this URL.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), function (2), finally, (2)
> **Code Identifiers:** useeffect (4), userprovider (3), usestate (2), usecontext (2), usesession (2)
> **File Paths:** app.js (2), userprovider.js (1), profile.js (1)
> **Definitions:** is a  (2), is called (1)
> **CLI Commands:** make (1)
> **Env Vars:** url (1)
> **Speakers:** - [instructor] (1)

#### Redirect user upon signup
> [LinkedIn Learning](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/redirect-user-upon-signup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/redirect-user-upon-signup?u=76281980&t=0)** - [Narrator] As of know, once a user signs up, and we have a session, we have to manually type in /profile in order to go to that route.
>
> **[0:09](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/redirect-user-upon-signup?u=76281980&t=9)** Once a user successfully signs up, we actually want to take them to the new profile page.
>
> **[0:15](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/redirect-user-upon-signup?u=76281980&t=15)** Heading first over to the sign-up function, let's grab a hold of the newly created user.
>
> **[0:20](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/redirect-user-upon-signup?u=76281980&t=20)** We can grab the user from the response, then we can update this line to simply user.updateProfile, and finally we can return the user here.
>
> **[0:32](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/redirect-user-upon-signup?u=76281980&t=32)** Let's head over to the sign-up component now, because we are supplying this component in the route component as a prop, we get props passed into the sign-up component, and in particular, we get access to the history prop, which will be useful in order to route the user to a different page.
>
> **[0:52](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/redirect-user-upon-signup?u=76281980&t=52)** We can first grab the newly created user, just create a variable, and then we can set the user here.
>
> **[1:03](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/redirect-user-upon-signup?u=76281980&t=63)** If we having a user, we can use props.
>
> **[1:12](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/redirect-user-upon-signup?u=76281980&t=72)** Let me rename that to props.
>
> **[1:14](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/redirect-user-upon-signup?u=76281980&t=74)** props.history.push to /profile/ newUser.uid.
>
> **[1:28](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/redirect-user-upon-signup?u=76281980&t=88)** Otherwise, we can set the loading state to false.
>
> **[1:36](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/redirect-user-upon-signup?u=76281980&t=96)** Let's head over to our browser now.
>
> **[1:38](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/redirect-user-upon-signup?u=76281980&t=98)** I will go ahead and delete the object store that Firebase creates, and go to the signup route, then go to my Firebase dashboard, and delete the user I just created.
>
> **[1:57](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/redirect-user-upon-signup?u=76281980&t=117)** Let's create the user again.
>
> **[2:03](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/redirect-user-upon-signup?u=76281980&t=123)** We can see they were successfully routed to the profile page.
>
> **[2:07](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/redirect-user-upon-signup?u=76281980&t=127)** We can see that the user information is missing.
>
> **[2:11](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/redirect-user-upon-signup?u=76281980&t=131)** We simply need to update the route definition.
>
> **[2:15](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/redirect-user-upon-signup?u=76281980&t=135)** Let's head over to App.js, and here we can update this to /profile:id.
>
> **[2:25](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/redirect-user-upon-signup?u=76281980&t=145)** Let's head back to our browser now, and we can see the user information displayed.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), delete (2), function (1)
> **UI Navigation:** go to (3)
> **Code Identifiers:** updateprofile (1), newuser (1)
> **File Paths:** app.js (1)
> **Speakers:** - [narrator] (1)

#### User logout
> [LinkedIn Learning](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-logout?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-logout?u=76281980&t=0)** - We are now displaying the current user, but we need the ability to logout the user.
>
> **[0:05](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-logout?u=76281980&t=5)** Let's head back to auth dot JS, where we are placing the methods dealing with authentication and sign up.
>
> **[0:12](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-logout?u=76281980&t=12)** We'll add a new function named logout that will simply call the sign on method on Firebase.
>
> **[0:23](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-logout?u=76281980&t=23)** Firebase dot auth dot sign out.
>
> **[0:30](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-logout?u=76281980&t=30)** And please keep in mind that this returns a promise.
>
> **[0:35](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-logout?u=76281980&t=35)** Let's head over now to the header component, and we will add a button for the logout action.
>
> **[0:43](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-logout?u=76281980&t=43)** Let's give it some class names from semantic UI, UI secondary button and our own class logout, which we'll use to add some styles.
>
> **[0:56](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-logout?u=76281980&t=56)** Text will be logout and on click, we'll call a function, logout user.
>
> **[1:08](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-logout?u=76281980&t=68)** Let's create that function now.
>
> **[1:09](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-logout?u=76281980&t=69)** Logout user.
>
> **[1:12](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-logout?u=76281980&t=72)** For now it's an empty function.
>
> **[1:16](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-logout?u=76281980&t=76)** Let's head over to auth dot CSS, and add some CSS for this button.
>
> **[1:23](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-logout?u=76281980&t=83)** It's float right with the relative position and let's fix the position here.
>
> **[1:36](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-logout?u=76281980&t=96)** Heading back to the header component, we will now import the new logout function from auth dot JS.
>
> **[1:42](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-logout?u=76281980&t=102)** Import, logout from Firebase, forward slash auth.
>
> **[1:53](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-logout?u=76281980&t=113)** We will also import the use history hook from react router dom, which gives us access to the history instance that we can use to navigate.
>
> **[2:06](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-logout?u=76281980&t=126)** And now we can use a hook.
>
> **[2:12](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-logout?u=76281980&t=132)** This is a very great feature of react router, in that you can give routing functionality to any component in your application.
>
> **[2:18](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-logout?u=76281980&t=138)** We can then implement our logout user function.
>
> **[2:25](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-logout?u=76281980&t=145)** We can await the logout function and once the user successfully signs out, we can redirect a user to the sign up page.
>
> **[2:35](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-logout?u=76281980&t=155)** And we need the async keyword here, too.
>
> **[2:39](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-logout?u=76281980&t=159)** Heading back to our browser, we can see the logout button here.
>
> **[2:46](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-logout?u=76281980&t=166)** And on click, We are redirected to the signup page.
>
> **[2:50](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-logout?u=76281980&t=170)** In the developer tools, you'll see that the application storage has been cleared.
>
> **[2:54](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-logout?u=76281980&t=174)** There's one issue, however, in that we still see the logout link, even though the user is logged out.
>
> **[3:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-logout?u=76281980&t=180)** Let's fix that now.
>
> **[3:02](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-logout?u=76281980&t=182)** We don't want to display the logout link if there isn't a current user session.
>
> **[3:07](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-logout?u=76281980&t=187)** Heading back to the header component, we can use the hook that we previously wrote and grab a hold of the user from the use session.
>
> **[3:22](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-logout?u=76281980&t=202)** And then we can render the button only if there's a user.
>
> **[3:34](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-logout?u=76281980&t=214)** That is reloaded now, and we can see that the logout link is done.
>
> **[3:39](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-logout?u=76281980&t=219)** You can test signing up by using a second user.
>
> **[3:45](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-logout?u=76281980&t=225)** We can sign up.
>
> **[3:47](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-logout?u=76281980&t=227)** We are redirected to our profile page and we can log out.
>
> **[3:51](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-logout?u=76281980&t=231)** The link is gone, and we are redirected to the sign up page.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), function (7), import, (1), await (1), async (1)
> **Env Vars:** css (2)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - we (1)

#### User login
> [LinkedIn Learning](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=0)** - We have provided a way for users to sign up and logout, but we now need to provide a way for users to login.
>
> **[0:07](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=7)** Heading back to auth.js, let's implement a login function.
>
> **[0:17](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=17)** This function will also perform asynchronous work.
>
> **[0:19](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=19)** We'll destructure the input to get the email and the password.
>
> **[0:28](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=28)** And we can call it firebase.auth.signInWithEmailAndPassword using the email and password provided.
>
> **[0:41](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=41)** Finally, we can return the user from the response.
>
> **[0:46](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=46)** Let's create a new login page component, which will be very similar to the sign up page.
>
> **[0:52](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=52)** Let's grab the contents of the sign up component and we can paste it here and we can go ahead and delete the first and last name input fields.
>
> **[1:11](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=71)** We can rename the user to simply "user" and instead of sign up, we can call our new login function.
>
> **[1:24](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=84)** We can delete the servants here.
>
> **[1:27](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=87)** We can then change the button text from sign up to login
>
> **[1:37](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=97)** and also provide a way to take the user to the sign up page.
>
> **[1:43](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=103)** Let's create a container diff here to help out the button and the link.
>
> **[1:52](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=112)** We can then move the button here inside, and the user can login or be redirected to the sign up page.
>
> **[2:07](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=127)** We can use this link component from react-router-dom.
>
> **[2:15](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=135)** In the sign up component, let's do something similar here.
>
> **[2:23](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=143)** We can sign up or login.
>
> **[2:32](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=152)** And the route will be login.
>
> **[2:37](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=157)** Let's go ahead and add some CSS now.
>
> **[2:47](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=167)** The actions will be text-align to the right.
>
> **[2:53](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=173)** Let's add some margin for the buttons.
>
> **[2:58](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=178)** And then also for the link.
>
> **[3:07](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=187)** Lastly, when clicking user logout, we want to redirect the user to the login page instead of the signup page.
>
> **[3:19](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=199)** Let's try this out now.
>
> **[3:23](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=203)** And looks like I have an error.
>
> **[3:24](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=204)** I need to import the link component from react router.
>
> **[3:32](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=212)** Import link from react-router-dom.
>
> **[3:39](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=219)** No compilation errors.
>
> **[3:41](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=221)** Head back to the page, and looks like I need to fix a float here.
>
> **[3:47](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=227)** Let's head back to the CSS here, and we can delete the CSS rule.
>
> **[3:54](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=234)** We did forget one thing, and then we need to add the new login route to app.js.
>
> **[4:02](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=242)** This will be /login and the component will be the new login component we just created.
>
> **[4:12](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=252)** Let's go ahead and import that now.
>
> **[4:14](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=254)** Import login from /pages/Login
>
> **[4:23](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=263)** and make sure we rename this to "Login".
>
> **[4:28](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=268)** There's a couple of errors here, let's rename this to "Login", and we also need to import the link component from react-router-dom.
>
> **[4:42](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=282)** Heading back to our browser, we can sign up or login.
>
> **[4:47](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=287)** Let's go ahead and login.
>
> **[4:50](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/user-login?u=76281980&t=290)** On login, I am redirected to the profile page and I can also logout.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), function (3), delete (3), finally, (1)
> **Env Vars:** css (3)
> **File Paths:** auth.js (1), app.js (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** signinwithemailandpassword (1)
> **Analogies:** similar to (1)
> **Speakers:** - we (1)

#### Authenticated user redirect
> [LinkedIn Learning](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=0)** - Before wrapping up our work on authentication, we need to address a couple of issues.
>
> **[0:05](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=5)** Let me show you what I mean.
>
> **[0:06](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=6)** Let's go ahead and log in (keyboard clicking) Upon login, I am redirected to the profile page.
>
> **[0:13](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=13)** However, I can still visit both the login page, and also the signup page.
>
> **[0:22](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=22)** In addition, the logout button appears.
>
> **[0:25](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=25)** In this scenario which redirects the user back to the profile page, and not allow them to visit these pages.
>
> **[0:32](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=32)** Let's tackle the SQL.
>
> **[0:34](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=34)** Let's go ahead and create a new folder called router, which will contain all the files we related to routing.
>
> **[0:42](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=42)** We will create a new file call ProfileRedirect.js.
>
> **[0:48](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=48)** This will be a high-order component that will check for a user session and redirect accordingly.
>
> **[0:54](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=54)** This component will render the desired component if there is no user session.
>
> **[0:58](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=58)** Otherwise, it will redirect the user back to the profile page.
>
> **[1:03](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=63)** Let's go ahead and import react from react.
>
> **[1:08](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=68)** We will also import route, and redirect from react-router-dom.
>
> **[1:16](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=76)** And also, import use session from firebase/Userprovider.
>
> **[1:23](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=83)** Let's create the component called profile redirect.
>
> **[1:30](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=90)** We'll destructure the props, and rename the component prop to component with a capital C.
>
> **[1:37](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=97)** This is just a convention.
>
> **[1:39](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=99)** And then, destructure the rest of the props.
>
> **[1:42](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=102)** (keyboard typing) Inside of this component, we can grab ahold of the user, using use session.
>
> **[1:54](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=114)** And let's make sure we export the profile redirect component.
>
> **[2:01](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=121)** Next, we'll return a route component here.
>
> **[2:07](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=127)** But this time, we will use the render prop.
>
> **[2:11](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=131)** Let's pass in the rest of the props.
>
> **[2:18](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=138)** And the render prop will be a function.
>
> **[2:22](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=142)** And we get access to the props that the route component will pass.
>
> **[2:29](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=149)** If there's no user, we can render the desired component... (keyboard clicking) And give it the props.
>
> **[2:39](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=159)** (keyboard clicking) Otherwise, we will redirect to the profile page.
>
> **[2:49](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=169)** And we can do that by returning a redirect here.
>
> **[2:54](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=174)** (keyboard clicking) We will use the to prop, which will be an object with two properties.
>
> **[3:05](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=185)** The path name is where we want to redirect to, this will be /profile/user.uid.
>
> **[3:18](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=198)** And it will also contain a state property, which will be an object telling it where it is redirecting from.
>
> **[3:27](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=207)** From props.location.
>
> **[3:31](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=211)** Going back to app.js, we can replace the route component for both the signup and the login routes using the new profile redirect component that we just created.
>
> **[3:45](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=225)** And finally, we should redirect the route route of our app to the login route.
>
> **[3:55](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=235)** I sat another route here, exact, and then the path will be the route.
>
> **[4:03](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=243)** And we can simply redirect the user to the login page.
>
> **[4:09](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=249)** Let's open up our terminal to make sure that we don't have any errors.
>
> **[4:14](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=254)** Set to profile redirect.
>
> **[4:18](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=258)** And we can go ahead and delete this line.
>
> **[4:23](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=263)** So back to our page now.
>
> **[4:26](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=266)** And let's try to go to the login page.
>
> **[4:29](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=269)** And we see that we are redirected to the profile page.
>
> **[4:32](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/authenticated-user-redirect?u=76281980&t=272)** And let's try to access the signup page, and we are redirected back again to the profile page.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), pass (2), function (1), from. (1), finally, (1)
> **Non-Speech:** (keyboard clicking) (4), (keyboard typing) (1), (clicking) (1)
> **File Paths:** profileredirect.js (1), app.js (1)
> **CLI Commands:** make (2)
> **Env Vars:** sql (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Speakers:** - before (1)

#### Challenge: Authentication redirect
> [LinkedIn Learning](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-authentication-redirect?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-authentication-redirect?u=76281980&t=0)** (electronic music)
>
> **[0:06](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-authentication-redirect?u=76281980&t=6)** - [Instructor] I would now like you to work on a challenge.
>
> **[0:08](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-authentication-redirect?u=76281980&t=8)** There's one pending issue in regards to our app.
>
> **[0:11](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-authentication-redirect?u=76281980&t=11)** Let me show you what I mean.
>
> **[0:13](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-authentication-redirect?u=76281980&t=13)** We are currently logged in.
>
> **[0:15](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-authentication-redirect?u=76281980&t=15)** Let me copy this URL and then log out.
>
> **[0:21](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-authentication-redirect?u=76281980&t=21)** I will go ahead and paste that URL and try to navigate to it.
>
> **[0:27](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-authentication-redirect?u=76281980&t=27)** On pasting and go into this URL, we can see that we are still able to go to this route.
>
> **[0:32](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-authentication-redirect?u=76281980&t=32)** Nothing is displayed here because there isn't a current authenticated user.
>
> **[0:37](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-authentication-redirect?u=76281980&t=37)** However, we should prevent the user from being able to go to this route.
>
> **[0:42](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-authentication-redirect?u=76281980&t=42)** There is a second underlying issue.
>
> **[0:45](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-authentication-redirect?u=76281980&t=45)** Let's go ahead and log in.
>
> **[0:50](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-authentication-redirect?u=76281980&t=50)** I will go ahead and grab this user ID.
>
> **[0:54](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-authentication-redirect?u=76281980&t=54)** Let me log out and let me log in with a separate user.
>
> **[1:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-authentication-redirect?u=76281980&t=60)** Now let's try to visit the profile page with another user ID.
>
> **[1:06](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-authentication-redirect?u=76281980&t=66)** We can still visit the profile page with another ID in the route even though that user isn't logged in.
>
> **[1:13](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-authentication-redirect?u=76281980&t=73)** It isn't a huge deal, as it would only display the logged in user.
>
> **[1:18](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-authentication-redirect?u=76281980&t=78)** But a user should only be able to visit the corresponding profile page.
>
> **[1:22](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-authentication-redirect?u=76281980&t=82)** I have provided some steps that you can follow in order to work on this.
>
> **[1:27](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-authentication-redirect?u=76281980&t=87)** You will need to create another high order component similar to what we did previously.
>
> **[1:31](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-authentication-redirect?u=76281980&t=91)** You can call it something like private route.
>
> **[1:35](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-authentication-redirect?u=76281980&t=95)** In this private route component, you need to check that the ID the user is trying to list matches a user that is logged in.
>
> **[1:42](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-authentication-redirect?u=76281980&t=102)** Otherwise you need to route to the login page.
>
> **[1:46](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-authentication-redirect?u=76281980&t=106)** In order to get the ID parameter, remember that the rendered component using the route component gets past props and that includes these three.
>
> **[1:58](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-authentication-redirect?u=76281980&t=118)** Match location and history.
>
> **[2:02](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-authentication-redirect?u=76281980&t=122)** We can use match to retrieve the params object and hence the ID as shown here.
>
> **[2:10](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-authentication-redirect?u=76281980&t=130)** So for instance, in the profile redirect component, we have access to the route props.
>
> **[2:20](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-authentication-redirect?u=76281980&t=140)** Here, we're accessing the location object but we can also access the route params using props.match.params.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), private (2), this. (1), match. (1)
> **Env Vars:** url (3)
> **UI Navigation:** go to (2), navigate to (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (electronic music) (1)

#### Solution: Authentication redirect
> [LinkedIn Learning](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-authentication-redirect?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-authentication-redirect?u=76281980&t=0)** - [Instructor] Let's work together on the solution now.
>
> **[0:08](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-authentication-redirect?u=76281980&t=8)** Our new component will look very similar to the ProfileRedirect Component.
>
> **[0:13](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-authentication-redirect?u=76281980&t=13)** Let's go ahead and grab this entire code here.
>
> **[0:16](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-authentication-redirect?u=76281980&t=16)** Let's create a new file, call it PrivateRoute.js.
>
> **[0:22](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-authentication-redirect?u=76281980&t=22)** Let's paste this.
>
> **[0:23](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-authentication-redirect?u=76281980&t=23)** Let's rename this to PrivateRoute.
>
> **[0:27](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-authentication-redirect?u=76281980&t=27)** Let's get rid, of the contents of the render prop here.
>
> **[0:33](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-authentication-redirect?u=76281980&t=33)** We have access to the Route props.
>
> **[0:38](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-authentication-redirect?u=76281980&t=38)** And here, we can get access to the ID using props.match.params.id.
>
> **[0:50](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-authentication-redirect?u=76281980&t=50)** If we have a user, and the user ID matches the Route param ID, then we can return the desired component.
>
> **[1:05](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-authentication-redirect?u=76281980&t=65)** Otherwise, we can Redirect the user, to the login page.
>
> **[1:15](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-authentication-redirect?u=76281980&t=75)** Heading over to App.js.
>
> **[1:16](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-authentication-redirect?u=76281980&t=76)** we can replace this route component here with PrivateRoute.
>
> **[1:26](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-authentication-redirect?u=76281980&t=86)** Let's head over to our application now.
>
> **[1:28](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-authentication-redirect?u=76281980&t=88)** Let's refresh.
>
> **[1:29](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-authentication-redirect?u=76281980&t=89)** I'm going to copy the URL, log out and then paste that URL.
>
> **[1:36](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-authentication-redirect?u=76281980&t=96)** We can see that I'm redirected back to the login page.
>
> **[1:41](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-authentication-redirect?u=76281980&t=101)** Let me go ahead and login.
>
> **[1:43](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-authentication-redirect?u=76281980&t=103)** I'm going to grab this user ID.
>
> **[1:46](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-authentication-redirect?u=76281980&t=106)** I'm going to log out and login as a separate user to see if I'm able to visit that profile page.
>
> **[1:54](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-authentication-redirect?u=76281980&t=114)** Paste that in, and you see that I am redirected, to the profile page of that particular user.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), this. (1), match. (1)
> **File Paths:** privateroute.js (1), app.js (1)
> **Env Vars:** url (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. 3. Storing and Syncing Data with Firebase Cloud Firestore

#### Cloud Firestore intro
> [LinkedIn Learning](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-firestore-intro?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-firestore-intro?u=76281980&t=0)** - [Narrator] I sure hope you have already been impressed with the powerful features that Firebase provides.
>
> **[0:05](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-firestore-intro?u=76281980&t=5)** We have easily added authentication to our app that otherwise would have taken a really long time to implement ourselves.
>
> **[0:12](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-firestore-intro?u=76281980&t=12)** But now it's time to start working with data.
>
> **[0:15](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-firestore-intro?u=76281980&t=15)** Cloud Firestore is a flexible, scalable NoSQL cloud database to store and sync data for client and server-side development.
>
> **[0:23](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-firestore-intro?u=76281980&t=23)** This data can be accessed directly via native SDKs that shifts with a comprehensive set of security rules so you can access your database without needing to set up your own server.
>
> **[0:34](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-firestore-intro?u=76281980&t=34)** And also, it will allow us to sync across devices.
>
> **[0:39](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-firestore-intro?u=76281980&t=39)** The Cloud Firestore model is document oriented so there aren't any tables or rows like in a SQL database.
>
> **[0:46](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-firestore-intro?u=76281980&t=46)** We instead store data in documents which are then organized into collections.
>
> **[0:52](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-firestore-intro?u=76281980&t=52)** Let's start with the document, it will be the unit of storage when working with Cloud Firestore.
>
> **[0:58](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-firestore-intro?u=76281980&t=58)** It is identified by a name and it contains field value pairs.
>
> **[1:04](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-firestore-intro?u=76281980&t=64)** The values support many data types: Boolean, number, string, geo point, binary blob, and timestamp.
>
> **[1:12](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-firestore-intro?u=76281980&t=72)** You can also use arrays or nested objects, called maps, to structure data within a document.
>
> **[1:19](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-firestore-intro?u=76281980&t=79)** You can also organize more complex data as shown here.
>
> **[1:21](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-firestore-intro?u=76281980&t=81)** You can see that it resembles a plain JavaScript object.
>
> **[1:26](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-firestore-intro?u=76281980&t=86)** Now let's talk about collections.
>
> **[1:29](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-firestore-intro?u=76281980&t=89)** Documents are organized into collections.
>
> **[1:31](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-firestore-intro?u=76281980&t=91)** You can imagine, that we can have a users collection for all of our registered users.
>
> **[1:36](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-firestore-intro?u=76281980&t=96)** When working with Cloud Firestore in their app, we'll be able to both create a reference directly to a document or directly to a collection.
>
> **[1:48](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-firestore-intro?u=76281980&t=108)** It is also worth mentioning that you can organize your data into subcollections as needed.
>
> **[1:53](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-firestore-intro?u=76281980&t=113)** As shown in this diagram.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Env Vars:** sql (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)

#### Cloud Firestore setup
> [LinkedIn Learning](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-firestore-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-firestore-setup?u=76281980&t=0)** In this particular module, we'll be setting up a users collection and also allow the user to update their profile data.
>
> **[0:08](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-firestore-setup?u=76281980&t=8)** When using email and password authentication in the Firebase, that data is actually securely store separately.
>
> **[0:14](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-firestore-setup?u=76281980&t=14)** A major reason is of course, to prevent any accidental user leaks and also, allow complete flexibility with how we store our user data in the Firebase.
>
> **[0:24](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-firestore-setup?u=76281980&t=24)** This means that is clearly not possible to retrieve a list of users, nor can we request from Firebase authentication the data for a particular user.
>
> **[0:35](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-firestore-setup?u=76281980&t=35)** We'll be creating our own users collection in Cloud Firestore, where users will update their profile data.
>
> **[0:43](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-firestore-setup?u=76281980&t=43)** Let's restart by cleaning up any test users.
>
> **[0:52](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-firestore-setup?u=76281980&t=52)** Now head over to the Database tab and we will create a new database.
>
> **[0:57](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-firestore-setup?u=76281980&t=57)** Click on Create Database, and we will leave it in production mode.
>
> **[1:03](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-firestore-setup?u=76281980&t=63)** Currently, any reader rights will be denied, but we will be updating that.
>
> **[1:11](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-firestore-setup?u=76281980&t=71)** Next, choose a location.
>
> **[1:13](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-firestore-setup?u=76281980&t=73)** This location is your project's default Google Cloud platform resource location.
>
> **[1:21](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-firestore-setup?u=76281980&t=81)** The provided default should be okay.
>
> **[1:24](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-firestore-setup?u=76281980&t=84)** Click on Done, and it will provision your Cloud Firestore.
>
> **[1:27](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-firestore-setup?u=76281980&t=87)** It may take a few moments.
>
> **[1:35](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-firestore-setup?u=76281980&t=95)** And that's it. We are ready to go.

> [!info]- Semantic Content
>
> **Code Keywords:** module (1), let (1)
> **UI Navigation:** click on (2)
> **Definitions:** means that (1)

#### Deploying security rules for Cloud Firestore
> [LinkedIn Learning](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=0)** - [Instructor] In the Firebase console for Cloud Firestore, you can go ahead and click on the rules tab to view the currently associated security rules.
>
> **[0:10](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=10)** This tells us that the following rules in this block will be for the Cloud Firestore service.
>
> **[0:17](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=17)** And match/databases/database/documents is actually the root of your database.
>
> **[0:25](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=25)** The second match here tells it to match any document.
>
> **[0:29](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=29)** So in totality, this is saying for any document in my database, allow read and write a false, which obviously means never.
>
> **[0:37](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=37)** You can always change the security rules in the Firebase console.
>
> **[0:41](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=41)** But we will actually be using the Firebase CLI to deploy security rules.
>
> **[0:45](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=45)** It has the advantage, since any changes in rules can be tracked via Git.
>
> **[0:50](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=50)** We have already installed the Firebase CLI, if you haven't, go ahead and install it now.
>
> **[0:56](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=56)** And you can do that with npm install dash g Firebase tools.
>
> **[1:04](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=64)** Make sure to sign in and test your Firebase CLI using Firebase login.
>
> **[1:14](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=74)** And also list your Firebase projects.
>
> **[1:23](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=83)** Let me go ahead and clear my terminal.
>
> **[1:25](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=85)** We will now initialize a Firebase project, and we can do that using Firebase in it.
>
> **[1:33](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=93)** Since we have already created a project in the Firebase console, we will simply associate this project directory with the Firebase project.
>
> **[1:41](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=101)** For now, choose Firestore, deploy rules and create indexes for Firestore.
>
> **[1:49](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=109)** I hit the space bar, and then click Enter.
>
> **[1:53](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=113)** I can use an existing project and select the project you'll be working with.
>
> **[1:59](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=119)** In my case, it will be react-grid-dashboard.
>
> **[2:08](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=128)** It will then ask you a series of questions specifically where you would like to name the different files associated with Cloud Firestore.
>
> **[2:16](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=136)** The default names are perfectly fine.
>
> **[2:24](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=144)** Heading over to the project directory, you can see they have four new files.
>
> **[2:31](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=151)** That firebaserc is a file that stores your project.
>
> **[2:36](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=156)** Firebase.json is a configuration file that lists your project configuration.
>
> **[2:42](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=162)** For now, it is indicating the files used for our Firestore rules and for our Firestore indexes.
>
> **[2:50](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=170)** Firestore.indexes.json includes any indexes for a Cloud Firestore.
>
> **[2:55](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=175)** We won't be working with this.
>
> **[2:58](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=178)** And finally, Firestore.rules are the security rules for our database.
>
> **[3:04](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=184)** We'll be modifying this and deploying our rules.
>
> **[3:07](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=187)** Note that these are the same rules that are currently in the Firebase console.
>
> **[3:12](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=192)** Let's modify this file now and change the match condition.
>
> **[3:17](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=197)** We'll actually be working with the users collection.
>
> **[3:20](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=200)** So we can change this to forward slash users, forward slash, and have a placeholder for the user Id.
>
> **[3:31](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=211)** Each user will have a document for its profile key by the user Id.
>
> **[3:36](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=216)** We want to allow both a read or write to that location only if that Id matches the currently authenticated user.
>
> **[3:46](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=226)** So we can allow read, if request.auth.uid is a user Id.
>
> **[3:56](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=236)** And we can do the same for write and also update.
>
> **[4:05](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=245)** This means that only authenticated users will be able to read or write or update to this collection.
>
> **[4:12](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=252)** And a user will be able to read and write only from his or her personal document in this collection.
>
> **[4:19](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=259)** Let's go ahead and deploy the security rules.
>
> **[4:22](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=262)** Let me clear my terminal.
>
> **[4:25](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=265)** And we can deploy these rules using Firebase, deploy dash dash only Firestore colon rules.
>
> **[4:38](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=278)** It looks like I have a combination over here.
>
> **[4:41](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=281)** This should only be double equals and not triple equals.
>
> **[4:48](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=288)** Let's save that and try to deploy again.
>
> **[4:54](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-security-rules-for-cloud-firestore?u=76281980&t=294)** Deploy complete. Let's head back to our Firebase console, and refresh the page, and we can see our updated rules here.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), case, (1), this. (1), finally, (1)
> **Definitions:** is a  (3), means that (1)
> **CLI Commands:** git (1), npm (1), make (1)
> **Env Vars:** cli (3)
> **File Paths:** firebase.json (1), firestore.indexes.json (1)
> **Tools:** terminal (2)
> **UI Navigation:** click on (1), select the (1)
> **Prerequisites:** install (2)

#### Creating documents
> [LinkedIn Learning](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-documents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-documents?u=76281980&t=0)** - [Man] Now that we have deployed our security rules, we can start writing and updating data in a collection.
>
> **[0:07](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-documents?u=76281980&t=7)** We will be creating our own users collection in cloud firestore where users will update their profile data.
>
> **[0:14](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-documents?u=76281980&t=14)** Let's head over now to config.js and let's go ahead and import firebase forward slash firestore.
>
> **[0:25](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-documents?u=76281980&t=25)** And we will export a new token here which will be the firestore service.
>
> **[0:32](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-documents?u=76281980&t=32)** We can grab that by calling the firestore method on firebase.
>
> **[0:39](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-documents?u=76281980&t=39)** The next one to do is to create a new function that will create a user document.
>
> **[0:44](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-documents?u=76281980&t=44)** Under the firebase folder here is create a new file called user.js.
>
> **[0:49](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-documents?u=76281980&t=49)** This file will hold functions that deal with updating user data.
>
> **[0:53](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-documents?u=76281980&t=53)** Let's go ahead and import our firestore service from forward slash config and we can create our new function called createUserDocument.
>
> **[1:07](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-documents?u=76281980&t=67)** It will take in a user object and here let's get a reference to the firestore document.
>
> **[1:17](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-documents?u=76281980&t=77)** Let's call this variable docRef and will call the doc method on the firestore service.
>
> **[1:26](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-documents?u=76281980&t=86)** And then the path to that user document, this will be at forward slash users forward slash user.uid.
>
> **[1:41](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-documents?u=76281980&t=101)** The next one to do is to create the user object.
>
> **[1:45](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-documents?u=76281980&t=105)** Let's call this user profile and it will contain various fields specifically, the user Id which is retrieved from user.uid, email and the name
>
> **[2:03](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-documents?u=76281980&t=123)** which is a user display name.
>
> **[2:06](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-documents?u=76281980&t=126)** We will also have various other fields for now which will be empty, the address, the city, state, the zip
>
> **[2:20](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-documents?u=76281980&t=140)** phone, the specialty for this agent and the IP address.
>
> **[2:30](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-documents?u=76281980&t=150)** These fields will be populated by submitting a form.
>
> **[2:35](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-documents?u=76281980&t=155)** Last one to do is to write to cloud firestore and we can easily do that by calling the set method on the document reference and want to set the document with the information in the user profile object.
>
> **[2:52](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-documents?u=76281980&t=172)** It is important to know that cloud firestore creates collections and documents.
>
> **[2:56](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-documents?u=76281980&t=176)** Implicitly the first time you add data to the document you don't need to explicitly create collections or documents.
>
> **[3:04](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-documents?u=76281980&t=184)** Heading back to author.JS in the signup function now, once a user successfully signs up we will create a document for the user in the users collection.
>
> **[3:19](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-documents?u=76281980&t=199)** We can await createUserDocument with our user.
>
> **[3:30](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-documents?u=76281980&t=210)** It may seem a bit redundant to store the user ID, email and name if it's information already stored in the Firebase authentication service.
>
> **[3:38](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-documents?u=76281980&t=218)** As mentioned earlier, when using email and password authentication in Firebase, that data is actually securely stored separately.
>
> **[3:46](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-documents?u=76281980&t=226)** Let's tour our browser now and test things out.
>
> **[3:51](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-documents?u=76281980&t=231)** I am going to create a new user since I've previously deleted all the users, go ahead and sign up.
>
> **[4:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/creating-documents?u=76281980&t=240)** I am redirect to the profile page and let's head now to the Firebase console and I'm going to refresh the page here and I can see my new user document that has been created containing the name, the email and the user Id.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), function (3), await (1)
> **File Paths:** config.js (1), user.js (1), author.js (1)
> **Code Identifiers:** createuserdocument (2), docref (1)
> **Definitions:** is a  (1)
> **Speakers:** - [man] (1)

#### Displaying user document
> [LinkedIn Learning](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-user-document?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-user-document?u=76281980&t=0)** - In our profile component, let's display the newly created information.
>
> **[0:05](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-user-document?u=76281980&t=5)** Well, we'll need to get a reference to the document in our firestore, heading out to the profile component, let's import the firestore service that we previously exported from firebase/config.
>
> **[0:27](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-user-document?u=76281980&t=27)** We will also go ahead and import use effect and you state from react.
>
> **[0:37](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-user-document?u=76281980&t=37)** We will need a new piece of state that will hold our user document.
>
> **[0:46](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-user-document?u=76281980&t=46)** And the initial value will be null.
>
> **[0:52](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-user-document?u=76281980&t=52)** To retrieve the user document, we will use an effect.
>
> **[0:58](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-user-document?u=76281980&t=58)** And this effect will depend on the user ID property.
>
> **[1:09](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-user-document?u=76281980&t=69)** Next, we need to get a reference to the user document.
>
> **[1:16](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-user-document?u=76281980&t=76)** We can do that by calling the collection method on the firestore service, the collection will be the users and then call the doc method with the user ID.
>
> **[1:31](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-user-document?u=76281980&t=91)** Now to read the data, there are actually two ways we can read the data once or listen for real time changes.
>
> **[1:39](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-user-document?u=76281980&t=99)** I will show you how to implement both.
>
> **[1:42](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-user-document?u=76281980&t=102)** Let's first read the data once.
>
> **[1:45](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-user-document?u=76281980&t=105)** So now that we have a reference to the document, let's call the get method on that document reference.
>
> **[1:54](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-user-document?u=76281980&t=114)** This is a promise, so we can call thought .then when it resolves and we'll get back, the document.
>
> **[2:01](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-user-document?u=76281980&t=121)** If the document exists, then we can set our user document and we can grab the data by calling the data method.
>
> **[2:12](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-user-document?u=76281980&t=132)** Let's lead the current JSX that is returned.
>
> **[2:19](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-user-document?u=76281980&t=139)** If there's no user we will return null, let's change this to use your document.
>
> **[2:28](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-user-document?u=76281980&t=148)** Otherwise let's just dump the JSON on the page for now.
>
> **[2:44](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-user-document?u=76281980&t=164)** Let's head over to our browser now.
>
> **[2:47](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-user-document?u=76281980&t=167)** We can see that JSON is being displayed not here.
>
> **[2:53](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-user-document?u=76281980&t=173)** Let's go ahead and modify field.
>
> **[2:57](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-user-document?u=76281980&t=177)** Let's modify the city, and click update.
>
> **[3:03](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-user-document?u=76281980&t=183)** And we see that data isn't updated on our web application because we are not listening for real time changes.
>
> **[3:10](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-user-document?u=76281980&t=190)** If we refresh the page, then we can see the change that we made.
>
> **[3:19](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-user-document?u=76281980&t=199)** Let's implement listening for real time changes now.
>
> **[3:24](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-user-document?u=76281980&t=204)** Let's go back to our effect.
>
> **[3:27](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-user-document?u=76281980&t=207)** I am going to delete these lines and on the document reference, we can call on snapshot in order to listen for real time changes.
>
> **[3:39](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-user-document?u=76281980&t=219)** we get back a document.
>
> **[3:41](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-user-document?u=76281980&t=221)** If the document exists, we can grab the data using the data method and then set our user document.
>
> **[3:57](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-user-document?u=76281980&t=237)** Now, this returns the function that we can call in order to unsubscribe.
>
> **[4:07](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-user-document?u=76281980&t=247)** Let's set back to our browser now.
>
> **[4:12](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-user-document?u=76281980&t=252)** Let me go ahead and modify the field, click update, and we can see that the data is updated in real time.
>
> **[4:26](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/displaying-user-document?u=76281980&t=266)** This is one of the best features of firebase cloud store.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), delete (1), function (1)
> **Env Vars:** json (2), jsx (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - in (1)

#### Updating user documents, part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-1?u=76281980&t=0)** - [Tutor] We now need to provide a way for a user to edit the profile data.
>
> **[0:05](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-1?u=76281980&t=5)** To do so, we will need new form in our profile(mumbles) in the Exercise files folder, look at resources and then open the folder for this video 03-06.
>
> **[0:21](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-1?u=76281980&t=21)** We can go ahead and open this file as it contains some JSX, let's copy that, let's go ahead and paste it here.
>
> **[0:34](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-1?u=76281980&t=34)** Let's give that a save and head over to our browser, and we see that the form is displayed now, heading back to the profile component, we need to make one small change in regards to where we grab the current user ID.
>
> **[0:48](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-1?u=76281980&t=48)** Instead of grabbing the user ID from the current authenticated user, we will use the ID from the route, this will become useful later when we have an admin user that is requesting data for a particular user.
>
> **[1:01](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-1?u=76281980&t=61)** We can go ahead and import useParams from react-router-dom.
>
> **[1:08](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-1?u=76281980&t=68)** We can then grab and hold the Params here.
>
> **[1:15](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-1?u=76281980&t=75)** And finally, we can update this to Params.id.
>
> **[1:23](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-1?u=76281980&t=83)** The next thing we need to do is to register each input in our form, using the register function from react-hook-form.
>
> **[1:31](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-1?u=76281980&t=91)** Let's go ahead and import useForm from react-hook-form,
>
> **[1:40](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-1?u=76281980&t=100)** and we can grab the register function, and also the setValue function from useForm.
>
> **[1:53](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-1?u=76281980&t=113)** Now, we can register each input.
>
> **[2:21](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-1?u=76281980&t=141)** The next thing we need to do is to set our form state to the document that we get from file storage, it looks like we have an error here.
>
> **[2:31](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-1?u=76281980&t=151)** This should be an object and not an array.
>
> **[2:35](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-1?u=76281980&t=155)** Let's give that a save, head over to the browser now and we see that our form is displayed.
>
> **[2:42](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-1?u=76281980&t=162)** Looking at the API documentation for version five of React Hook Form, we see that we can set multiple form values by passing in an array, of objects where each object contains a single property, which is a form field.
>
> **[2:57](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-1?u=76281980&t=177)** Let's transform that data now.
>
> **[3:03](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-1?u=76281980&t=183)** Let's create a new variable called formData.
>
> **[3:07](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-1?u=76281980&t=187)** We can use object.entries, which will return to us an array of key value pairs.
>
> **[3:15](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-1?u=76281980&t=195)** We can then map over each entry and return an object instead.
>
> **[3:29](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-1?u=76281980&t=209)** finally, we can go ahead and use setValue to set the form data.
>
> **[3:38](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-1?u=76281980&t=218)** We need one more change here, and we need to add setValue here as useEffect will depend on this function as well.
>
> **[3:47](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-1?u=76281980&t=227)** Send over to our browse now and we can see that the form is populated with the data.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), function (4), finally, (2)
> **Code Identifiers:** setvalue (3), useform (2), useparams (1), formdata (1), useeffect (1)
> **Env Vars:** jsx (1), api (1)
> **CLI Commands:** make (1)
> **UI Navigation:** open the (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [tutor] (1)

#### Updating user documents, part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-2?u=76281980&t=0)** - [Instructor] Now that the form is being populated with the user document, we need to work on updating this data.
>
> **[0:07](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-2?u=76281980&t=7)** Let's go ahead and add another piece of state, and as we hold the loading state, initial value will be false.
>
> **[0:23](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-2?u=76281980&t=23)** We can go ahead and create a variable to hold the formClassname, ui big form, and if loading is true, we'll add the loading class otherwise just dependent empty string.
>
> **[0:48](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-2?u=76281980&t=48)** And then go ahead and replace the Classname for the form, with our new variable.
>
> **[0:57](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-2?u=76281980&t=57)** Heading over now to user.js, we'll go ahead and create a new function called update user document.
>
> **[1:13](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-2?u=76281980&t=73)** And we'll take in a user object, where we could first get a reference to the firestore document.
>
> **[1:24](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-2?u=76281980&t=84)** The calling the doc method on the firestore service, and then specifying the path here.
>
> **[1:34](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-2?u=76281980&t=94)** Which will be /users/user.uid.
>
> **[1:41](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-2?u=76281980&t=101)** We can, then, return the problem's return by calling the update method on that document.
>
> **[1:53](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-2?u=76281980&t=113)** Let's head back to profile.js now, and we need to handle the form submission.
>
> **[2:01](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-2?u=76281980&t=121)** Onsubmit, we will call a function called handlesubmit.
>
> **[2:07](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-2?u=76281980&t=127)** Let's implement that function now.
>
> **[2:18](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-2?u=76281980&t=138)** Then we'll get the formData, and let's set up a try catch block here.
>
> **[2:24](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-2?u=76281980&t=144)** Then set the loading state to true, then call our new updateUserDocument function, and we need to add the user id which we will grab from the params, and then add the rest of the object properties here.
>
> **[2:51](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-2?u=76281980&t=171)** Let's catch for any errors, and for now, let's just log out the error, and then, whether we have an error or not, we want to set the loading state back to false.
>
> **[3:07](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-2?u=76281980&t=187)** So looking at my terminal here, to make sure there are no errors, and it looks like we're missing a dependency.
>
> **[3:15](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-2?u=76281980&t=195)** We can go ahead and add params.id here.
>
> **[3:20](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-2?u=76281980&t=200)** Head over to our browser now, and let's try to submit this form now.
>
> **[3:26](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-2?u=76281980&t=206)** Fill in the address, the state and zip, pick a specialty, and also the IP.
>
> **[3:41](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-2?u=76281980&t=221)** Then try to submit, and it looks like the page refreshed and I incorrectly implemented the form submission.
>
> **[3:49](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-2?u=76281980&t=229)** Let me hit the back button here, and let's head back to our code.
>
> **[3:58](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-2?u=76281980&t=238)** We actually want to use the handleSubmit helper from react.form, as it will give us access to the form data.
>
> **[4:08](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-2?u=76281980&t=248)** Let me rename this function to onSubmit, and then we can call handleSubmit with our onSubmit callback here.
>
> **[4:20](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-2?u=76281980&t=260)** Let's save that now, and try to submit the form again.
>
> **[4:27](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-2?u=76281980&t=267)** Let's go ahead and click submit, we could see, that our data was updated.
>
> **[4:35](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-2?u=76281980&t=275)** The IP address didn't seem to be updated, let's go ahead and look at that now.
>
> **[4:46](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-2?u=76281980&t=286)** And it looks like we forgot to register the IP address input.
>
> **[4:53](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-2?u=76281980&t=293)** Let's copy that here and paste that, save, and head back to our browser, let's add the IP address now, hit submit, and we now see the IP address here.
>
> **[5:09](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-2?u=76281980&t=309)** We can go ahead and refresh the page and that data has persisted.
>
> **[5:15](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-2?u=76281980&t=315)** You've done great work.
>
> **[5:16](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/updating-user-documents-part-2?u=76281980&t=316)** You are well on your way to completing a serverless app built with Firebase.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), function (5)
> **Code Identifiers:** handlesubmit (2), onsubmit (2), formclassname (1), formdata (1), updateuserdocument (1)
> **File Paths:** user.js (1), profile.js (1)
> **CLI Commands:** make (1)
> **Tools:** terminal (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 5. 4. Storing Files with Firebase Cloud Storage

#### Cloud Storage setup
> [LinkedIn Learning](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-setup?u=76281980&t=0)** - [Instructor] We have used Firebase cloud store for storing data and now we'll move on to another great service from Firebase; cloud storage.
>
> **[0:10](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-setup?u=76281980&t=10)** Cloud storage is a perfect solution to store and retrieve user-generated files like images, audio and video, without service at code.
>
> **[0:19](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-setup?u=76281980&t=19)** It will be very easy to set up and use.
>
> **[0:23](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-setup?u=76281980&t=23)** Let's get started.
>
> **[0:24](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-setup?u=76281980&t=24)** Go ahead and click on the Get Started button.
>
> **[0:27](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-setup?u=76281980&t=27)** By default, only authenticated users will be able to read and write.
>
> **[0:33](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-setup?u=76281980&t=33)** We'll be modifying this by deploying updated security rules using the Firebase CLI.
>
> **[0:41](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-setup?u=76281980&t=41)** Go ahead and click on Next and then Done to set up cloud storage.
>
> **[0:50](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-setup?u=76281980&t=50)** We are then taken to the cloud storage dashboard, where you have the ability to upload files manually and also change the security rules.
>
> **[0:59](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-setup?u=76281980&t=59)** Next, we want to set up our apps so that we can deploy updated security rules using the CLI.
>
> **[1:07](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-setup?u=76281980&t=67)** In your terminal, you can do that using firebase init.
>
> **[1:15](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-setup?u=76281980&t=75)** And we will go ahead and choose, storage.
>
> **[1:19](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-setup?u=76281980&t=79)** You can you use your arrow keys, press the Space-bar to select it and then hit Enter.
>
> **[1:25](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-setup?u=76281980&t=85)** Hit enter again for the default file name.
>
> **[1:31](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-setup?u=76281980&t=91)** And we can see that our firebase.json file has been updated and there's a new file, storage.rules that has been created.

> [!info]- Semantic Content
>
> **Prerequisites:** set up (3)
> **Code Keywords:** let (1), default, (1)
> **Env Vars:** cli (2)
> **UI Navigation:** click on (2)
> **File Paths:** firebase.json (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Cloud Storage security rules
> [LinkedIn Learning](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-security-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-security-rules?u=76281980&t=0)** - As of now any authenticated user will be able to upload files.
>
> **[0:05](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-security-rules?u=76281980&t=5)** While this may work for many applications, in our specific scenario, users will be uploading the profile image at a specific location in our storage bucket.
>
> **[0:14](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-security-rules?u=76281980&t=14)** We only want that user to have read and write access to that location.
>
> **[0:19](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-security-rules?u=76281980&t=19)** We will also be working on an adamant interface to allow a user with an administrative role to access this as well.
>
> **[0:27](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-security-rules?u=76281980&t=27)** We will be uploading the user images to a specific path related to the user's ID, so we can change the match condition.
>
> **[0:37](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-security-rules?u=76281980&t=37)** Back slash users, the user ID, and forward slash the file name.
>
> **[0:46](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-security-rules?u=76281980&t=46)** And then we want to allow read and write to that location, if the authenticated user matches that ID.
>
> **[0:54](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-security-rules?u=76281980&t=54)** This will prevent a user from writing to a location that doesn't belong to her.
>
> **[1:01](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-security-rules?u=76281980&t=61)** Let's go ahead and allow read.
>
> **[1:04](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-security-rules?u=76281980&t=64)** If the ID from the authenticated user matches the user ID at the location they are trying to write.
>
> **[1:19](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-security-rules?u=76281980&t=79)** And we want to allow write, using the same rule, but we want to enforce a couple of other rules.
>
> **[1:28](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-security-rules?u=76281980&t=88)** In our application, we don't want the user to upload an image that is larger than five megabytes.
>
> **[1:36](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-security-rules?u=76281980&t=96)** We can do that by checking the resource size and making sure that it's less than five megabytes.
>
> **[1:52](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-security-rules?u=76281980&t=112)** Also, we want to ensure that only image file types are allowed.
>
> **[1:59](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-security-rules?u=76281980&t=119)** We can do that by checking the resource content type, make sure that it matches.
>
> **[2:09](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-security-rules?u=76281980&t=129)** Images.
>
> **[2:14](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-security-rules?u=76281980&t=134)** Finally, let's make sure to update the rule set to version two, which is the latest version.
>
> **[2:25](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-security-rules?u=76281980&t=145)** Let's go ahead and deploy these updated rules with the Firebase CLI.
>
> **[2:30](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-security-rules?u=76281980&t=150)** We can do that using Firebase deploy dash dash only storage rules.
>
> **[2:42](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-security-rules?u=76281980&t=162)** It looks like I have a syntax error here and I am missing if here.
>
> **[2:49](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-security-rules?u=76281980&t=169)** Let's try to deploy again.
>
> **[2:55](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-security-rules?u=76281980&t=175)** I actually need to delete these two ifs here.
>
> **[3:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-security-rules?u=76281980&t=180)** One more time.
>
> **[3:04](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-security-rules?u=76281980&t=184)** And they have been successfully deployed.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), interface (1), type, (1), finally, (1), delete (1)
> **CLI Commands:** make (2)
> **Env Vars:** cli (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - as (1)

#### Profile image upload form
> [LinkedIn Learning](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/profile-image-upload-form?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/profile-image-upload-form?u=76281980&t=0)** - Now that we have set up cloud storage, along with the security rules, let's implement a new feature to allow the user to upload their profile photo.
>
> **[0:09](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/profile-image-upload-form?u=76281980&t=9)** Let's create a new component and call it profileimage.js.
>
> **[0:15](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/profile-image-upload-form?u=76281980&t=15)** Import react from react.
>
> **[0:23](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/profile-image-upload-form?u=76281980&t=23)** This new component will take in the user ID as a prop.
>
> **[0:32](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/profile-image-upload-form?u=76281980&t=32)** We can first create a div to hold the image.
>
> **[0:39](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/profile-image-upload-form?u=76281980&t=39)** The profile image will be four columns wide, and let's give it a custom class here.
>
> **[0:48](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/profile-image-upload-form?u=76281980&t=48)** Inside of this container, we will add the placeholder image.
>
> **[0:58](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/profile-image-upload-form?u=76281980&t=58)** Source will be assets/profile-placeholder.png.
>
> **[1:06](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/profile-image-upload-form?u=76281980&t=66)** And let's give it the alt attribute.
>
> **[1:12](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/profile-image-upload-form?u=76281980&t=72)** Go ahead and open the resources folder.
>
> **[1:14](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/profile-image-upload-form?u=76281980&t=74)** Open up 04-03 and grab this image to the public folder in your project.
>
> **[1:25](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/profile-image-upload-form?u=76281980&t=85)** Below the image tag, we will add the file input, which will be hidden for now.
>
> **[1:39](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/profile-image-upload-form?u=76281980&t=99)** And it will accept .png and .jpg files.
>
> **[1:46](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/profile-image-upload-form?u=76281980&t=106)** Right below, we allot button that will simply trigger the click on the hidden input.
>
> **[1:58](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/profile-image-upload-form?u=76281980&t=118)** The text will be upload photo, and we can now go ahead and add some css.
>
> **[2:04](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/profile-image-upload-form?u=76281980&t=124)** Let's go to app.css.
>
> **[2:07](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/profile-image-upload-form?u=76281980&t=127)** This will be the css for the profile image.
>
> **[2:13](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/profile-image-upload-form?u=76281980&t=133)** The profile image itself will have some padding.
>
> **[2:22](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/profile-image-upload-form?u=76281980&t=142)** Let's make the image responsive
>
> **[2:31](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/profile-image-upload-form?u=76281980&t=151)** and ensure that the file input is hidden.
>
> **[2:38](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/profile-image-upload-form?u=76281980&t=158)** And lastly, some styles for the upload button.
>
> **[2:46](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/profile-image-upload-form?u=76281980&t=166)** Let's render this profile image component now in the profile component.
>
> **[2:55](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/profile-image-upload-form?u=76281980&t=175)** Here, we can add a div which will house both the profile image and the form.
>
> **[3:12](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/profile-image-upload-form?u=76281980&t=192)** Let's go ahead and render the profile image component and give it the ID prop, which we'll grab from params.id.
>
> **[3:22](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/profile-image-upload-form?u=76281980&t=202)** And we can go ahead and move the entire form content inside of here.
>
> **[3:37](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/profile-image-upload-form?u=76281980&t=217)** Let's give that a safe and head over to our browser.
>
> **[3:43](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/profile-image-upload-form?u=76281980&t=223)** And it looks like we have the wrong path here.
>
> **[3:45](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/profile-image-upload-form?u=76281980&t=225)** Let's fix that now.
>
> **[3:46](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/profile-image-upload-form?u=76281980&t=226)** Let's head over to the profile image component, and this should just be /profileplaceholder.png.
>
> **[3:54](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/profile-image-upload-form?u=76281980&t=234)** Let's give that a save, head to our browser and let's fix the columns here.
>
> **[4:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/profile-image-upload-form?u=76281980&t=240)** Head back to profile.js, and we need to add 12 wide column to the form class name.
>
> **[4:10](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/profile-image-upload-form?u=76281980&t=250)** Head over to our browser now, and we have our styles fixed.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), public (1)
> **File Paths:** profileimage.js (1), app.css (1), profile.js (1)
> **UI Navigation:** open the (1), click on (1), go to (1)
> **CLI Commands:** make (1)
> **Prerequisites:** set up (1)
> **Speakers:** - now (1)

#### File upload trigger
> [LinkedIn Learning](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/file-upload-trigger?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/file-upload-trigger?u=76281980&t=0)** - We have our form now.
>
> **[0:01](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/file-upload-trigger?u=76281980&t=1)** Let's write the handlers in order to trigger the file upload dialogue.
>
> **[0:06](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/file-upload-trigger?u=76281980&t=6)** Well, we need to trigger a click event on the hidden input.
>
> **[0:10](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/file-upload-trigger?u=76281980&t=10)** And a way we can do that is by using Refs, which allows us to get access to the DOM.
>
> **[0:16](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/file-upload-trigger?u=76281980&t=16)** Let's head now to the profile image component.
>
> **[0:20](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/file-upload-trigger?u=76281980&t=20)** Let's go ahead and import useRef from React.
>
> **[0:28](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/file-upload-trigger?u=76281980&t=28)** We can create a ref here.
>
> **[0:32](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/file-upload-trigger?u=76281980&t=32)** Initial value will be null.
>
> **[0:35](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/file-upload-trigger?u=76281980&t=35)** And then we can pass as ref object to React using the ref prop here.
>
> **[0:43](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/file-upload-trigger?u=76281980&t=43)** This would be fileInput.
>
> **[0:49](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/file-upload-trigger?u=76281980&t=49)** On the button, we can then trigger a click on this input by calling fileInput.current.click.
>
> **[1:06](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/file-upload-trigger?u=76281980&t=66)** Finally, let's add a handler on the hidden fileInput and log out the files for now.
>
> **[1:13](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/file-upload-trigger?u=76281980&t=73)** Making this an onChange, grab event and call fileChange with the files.
>
> **[1:23](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/file-upload-trigger?u=76281980&t=83)** Let's create that function now, called fileChange.
>
> **[1:29](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/file-upload-trigger?u=76281980&t=89)** It will receive a list of files.
>
> **[1:32](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/file-upload-trigger?u=76281980&t=92)** And let's log that out for now.
>
> **[1:40](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/file-upload-trigger?u=76281980&t=100)** Let's give that a save and head over to our browser.
>
> **[1:43](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/file-upload-trigger?u=76281980&t=103)** I'm going to open up the developer tools here.
>
> **[1:46](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/file-upload-trigger?u=76281980&t=106)** Look at the console.
>
> **[1:48](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/file-upload-trigger?u=76281980&t=108)** Looks like we have a warning here.
>
> **[1:50](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/file-upload-trigger?u=76281980&t=110)** Let's go ahead and fix that now.
>
> **[1:52](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/file-upload-trigger?u=76281980&t=112)** On line 13.
>
> **[1:55](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/file-upload-trigger?u=76281980&t=115)** This should be className.
>
> **[1:58](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/file-upload-trigger?u=76281980&t=118)** Let's head back to our browser.
>
> **[2:01](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/file-upload-trigger?u=76281980&t=121)** Let's refresh.
>
> **[2:03](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/file-upload-trigger?u=76281980&t=123)** And we have a second error here.
>
> **[2:05](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/file-upload-trigger?u=76281980&t=125)** This should also be className.
>
> **[2:10](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/file-upload-trigger?u=76281980&t=130)** Click on the button file upload photo.
>
> **[2:12](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/file-upload-trigger?u=76281980&t=132)** And we see that the dialogue is triggered Let's click on the photo.
>
> **[2:17](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/file-upload-trigger?u=76281980&t=137)** And we see that the file is logged out.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), pass (1), finally, (1), function (1)
> **Code Identifiers:** fileinput (3), filechange (2), classname (2), useref (1), onchange (1)
> **UI Navigation:** click on (3)
> **Env Vars:** dom (1)
> **Warnings:** warning (1)
> **Speakers:** - we (1)

#### Cloud Storage file upload
> [LinkedIn Learning](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=0)** - With that in place, we need to implement now a function to upload the user image to cloud storage.
>
> **[0:06](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=6)** Let's first export the fire based storage service for our app in config.js.
>
> **[0:14](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=14)** Import fire base/storage.
>
> **[0:20](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=20)** And we can export a new token here and call that storage, and we can get the storage service here.
>
> **[0:29](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=29)** Head over now to user.js and we'll create a new function called upload image.
>
> **[0:38](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=38)** It needs a user ID and the file to upload.
>
> **[0:42](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=42)** And here it will actually create and return a new promise.
>
> **[0:49](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=49)** We need the resolve and the reject functions.
>
> **[0:52](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=52)** Let's create the file reference here.
>
> **[0:57](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=57)** We need to create first a file path, which will be users/userid/profile-image.
>
> **[1:09](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=69)** Now we can create the file reference, calling storage.ref and then grabbing that child reference using that file path.
>
> **[1:23](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=83)** And let's make sure we import storage here.
>
> **[1:29](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=89)** We now need to create the upload task, and we can do that by calling put on the file reference, giving it the file that we need to upload.
>
> **[1:44](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=104)** And now with the upload task, we can actually listen for state changes.
>
> **[1:52](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=112)** We will listen for the state changed event.
>
> **[1:56](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=116)** Second argument will actually be no for now.
>
> **[2:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=120)** The third argument will be used to grab any errors.
>
> **[2:08](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=128)** And the last argument will be used once this task is complete.
>
> **[2:16](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=136)** And here we'll resolve our promise by accessing the ref on the snapshot.
>
> **[2:24](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=144)** Let's head over back to profile image.js and we can add a new piece of state which would be the image URL.
>
> **[2:39](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=159)** The initial vowel will be an empty string here.
>
> **[2:43](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=163)** And now we can update our file change method.
>
> **[2:48](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=168)** Let's grab the reference by calling upload image with the user ID, and also the file we want to upload.
>
> **[3:01](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=181)** We can grab the download URL by calling ref.get download URL, and then we can set our state here.
>
> **[3:20](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=200)** And make sure this has the async keyword here.
>
> **[3:33](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=213)** We can now update the source prop on our image.
>
> **[3:46](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=226)** It will be the image URL if there is one, or our default placeholder.
>
> **[3:56](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=236)** Let's give that a save, and make sure there are no compilation errors, and now head over to your browser.
>
> **[4:02](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=242)** Refresh the page here, let me try to upload a photo.
>
> **[4:09](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=249)** It looks like we have an error here.
>
> **[4:12](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=252)** It seems that we are listening for the wrong event.
>
> **[4:16](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=256)** So back to user.js, and this should be state change, not stage change.
>
> **[4:23](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=263)** Let's give that a save and head back to our browser.
>
> **[4:29](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=269)** And let me try to upload a photo now.
>
> **[4:35](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=275)** And the photo has been uploaded and it's displayed now.
>
> **[4:38](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=278)** We can head over to the Firebase console, refresh here.
>
> **[4:45](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=285)** We can see that our profile image is there as well.
>
> **[4:51](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=291)** There's one more thing we need to do.
>
> **[4:53](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=293)** If we go ahead and refresh the page, we see that the image is not displayed.
>
> **[4:57](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=297)** We need to retrieve the image URL when the component mounts.
>
> **[5:02](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=302)** Let's head back over to user.js and we'll create a new function here.
>
> **[5:10](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=310)** We'll call that get download URL.
>
> **[5:15](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=315)** You will need the user ID, the file path will be users/userid/profile-image.
>
> **[5:28](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=328)** When we return, storage.ref.child using the file path and the promise returned by calling get download URL.
>
> **[5:41](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=341)** In the profile image component, we can use an effect in order to retrieve this URL when the component mounts.
>
> **[5:53](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=353)** We can call get download URL using the ID.
>
> **[6:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=360)** When this promise resolves, if we have a URL, we can go ahead and set the image URL.
>
> **[6:09](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=369)** And this effect will depend on the ID.
>
> **[6:16](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=376)** Let's give that a save and head over to our browser.
>
> **[6:20](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=380)** It looks like we need to import get download URL which is a function we just created.
>
> **[6:34](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=394)** And replace this call here.
>
> **[6:36](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=396)** Let's give that a save.
>
> **[6:40](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=400)** Refresh and our photo is displayed here.
>
> **[6:43](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=403)** We do seem to have an error here though.
>
> **[6:47](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=407)** Let's go back to profile.js.
>
> **[6:53](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=413)** And this needs to be an array of dependencies.
>
> **[6:56](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-storage-file-upload?u=76281980&t=416)** Let's give that a save, head over to our browser, refresh, and we see our uploaded image displayed now.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), function (4), async (1), return, (1)
> **Env Vars:** url (12)
> **File Paths:** user.js (3), config.js (1), image.js (1), profile.js (1)
> **CLI Commands:** make (3)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - with (1)

#### Challenge: Monitor upload progress
> [LinkedIn Learning](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-monitor-upload-progress?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-monitor-upload-progress?u=76281980&t=0)** (pleasant electronic music)
>
> **[0:06](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-monitor-upload-progress?u=76281980&t=6)** - [Instructor] I would now like you to work on a challenge.
>
> **[0:09](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-monitor-upload-progress?u=76281980&t=9)** While our file upload is working, there's no visual indicator that the photo is currently uploading.
>
> **[0:15](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-monitor-upload-progress?u=76281980&t=15)** It would be great to have a progress indicator that can show us our current progress.
>
> **[0:20](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-monitor-upload-progress?u=76281980&t=20)** Fortunately, with Firebase, we can monitor the upload progress.
>
> **[0:24](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-monitor-upload-progress?u=76281980&t=24)** Look at the example at this page in order to display a progress indicator to the user.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (pleasant electronic music) (1)

#### Solution: Upload progress
> [LinkedIn Learning](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-upload-progress?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-upload-progress?u=76281980&t=0)** - [Instructor] I will now show you one way to implement the file upload progress feature.
>
> **[0:11](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-upload-progress?u=76281980&t=11)** But first, let me start from a clean slate.
>
> **[0:16](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-upload-progress?u=76281980&t=16)** Let me delete this.
>
> **[0:19](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-upload-progress?u=76281980&t=19)** Head out to our browser, I can refresh, And now I'm back to the placeholder image.
>
> **[0:25](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-upload-progress?u=76281980&t=25)** Head over now to profileimage.js we will add a new piece of state.
>
> **[0:31](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-upload-progress?u=76281980&t=31)** This would be the upload progress.
>
> **[0:38](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-upload-progress?u=76281980&t=38)** The initial value will be zero.
>
> **[0:42](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-upload-progress?u=76281980&t=42)** Now above the button, we can add progress element here.
>
> **[0:47](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-upload-progress?u=76281980&t=47)** Let's add some style, the width will be a 100 percent.
>
> **[0:56](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-upload-progress?u=76281980&t=56)** Max value will be a 100.
>
> **[0:59](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-upload-progress?u=76281980&t=59)** And the value would be the upload progress.
>
> **[1:09](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-upload-progress?u=76281980&t=69)** Heading now to user.js, we can modify our upload image function to accept the new argument called progress, which will be a callback function that can be called with a snapshot information.
>
> **[1:25](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-upload-progress?u=76281980&t=85)** We can actually use a second argument here, to get the snapshot information and call the progress call back with that snapshot.
>
> **[1:37](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-upload-progress?u=76281980&t=97)** Back in the profile image component, we can create a new function called update progress.
>
> **[1:47](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-upload-progress?u=76281980&t=107)** It will receive the snapshot and we can calculate the progress based on the bytes, transferred, divided by the total bytes.
>
> **[2:04](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-upload-progress?u=76281980&t=124)** And we can multiply that by a hundred to get the percent.
>
> **[2:08](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-upload-progress?u=76281980&t=128)** Finally, we can set the progress state here.
>
> **[2:14](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-upload-progress?u=76281980&t=134)** We can then pass this update progress function as a callback to upload image.
>
> **[2:26](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-upload-progress?u=76281980&t=146)** Let's go ahead and give that a save, and head over to our browser.
>
> **[2:32](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-upload-progress?u=76281980&t=152)** We now see our progress bar here, and let's try to upload a photo now and we can see the upload progress being displayed here.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (4), delete (1), this. (1), finally, (1)
> **File Paths:** profileimage.js (1), user.js (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. 5. Control Access with Custom Claims and Security Rules

#### Firebase ID tokens
> [LinkedIn Learning](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=0)** - [Presenter] So far we've implemented authentication and have allowed authenticated users to edit data and upload files.
>
> **[0:07](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=7)** But how does Firebase check for authenticated users?
>
> **[0:10](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=10)** It does is through Firebase ID tokens, which are essentially JSON web tokens with added data.
>
> **[0:17](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=17)** Every time a user signs in their user credentials are sent to the Firebase authentication backend and exchange for a Firebase ID token, a JWT, and they refresh token, which can be used to retrieve new tokens.
>
> **[0:32](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=32)** JSON web tokens is an industry standard that provides a safe and compact way for representing data transfer between two parties.
>
> **[0:41](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=41)** JWTs can be verified because they are signed, typically using a secret with the HVAC shot 256 algorithm.
>
> **[0:50](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=50)** There are three parts to JSON web tokens, all separated by a dot.
>
> **[0:54](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=54)** The header, the payload and the signature.
>
> **[1:01](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=61)** The header will contain the algorithm with the token type.
>
> **[1:04](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=64)** Typically the header for a JWT will look like this.
>
> **[1:08](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=68)** Here it is specifying that the RSA shot 256 algorithm was used and the type is JWT.
>
> **[1:19](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=79)** The payload includes claim information for an entity, which is most likely a user for your application.
>
> **[1:25](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=85)** There are specific claims that are defined in the JWT standard, and you can also add your own properties to this object.
>
> **[1:32](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=92)** A typical payload will look like this.
>
> **[1:36](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=96)** IAT stands for it should add the timestamp when this JWT was created.
>
> **[1:42](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=102)** It is represented in seconds.
>
> **[1:46](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=106)** Exp stands for expiration time, which is a time that this JWT expires also in seconds.
>
> **[1:54](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=114)** Here we also added metadata about a user.
>
> **[1:58](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=118)** In this case, the email and other properties that are specific to Firebase, you can see how this will be very useful in building a role based authentication system.
>
> **[2:07](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=127)** For instance, we will want to have an admin role that can view and edit all data and do important things like delete users if necessary, right from the web app.
>
> **[2:18](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=138)** This feature will be implementing is called Firebase Custom Claims, and we'll be digging into it.
>
> **[2:25](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=145)** Now here, I want to quickly show you what a Firebase ID token looks like.
>
> **[2:31](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=151)** Let's head over to our web application now.
>
> **[2:36](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=156)** Ensure that a user is logged in, open up your developer tools and head to the application tab.
>
> **[2:47](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=167)** You will see that Firebase has maintained data in local storage for this user.
>
> **[2:51](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=171)** In particular, we can inspect the access token, open up the value object under STS token manager.
>
> **[3:02](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=182)** And you will see the access token here, head over to the sources tab, and then to snippets.
>
> **[3:12](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=192)** We will write a spouse snippet to retrieve this token, which can be very useful for debugging.
>
> **[3:19](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=199)** Let's create a variable to hold the database, can have a request here, which would be indexed DB.open, local storage DB is Firebase, local storage DB.
>
> **[3:40](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=220)** This is for any errors
>
> **[3:50](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=230)** and also for a success event.
>
> **[3:58](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=238)** And we can grab the database from event.target.result.
>
> **[4:04](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=244)** Let's create a transaction here now, and give it a name, let's grab a hold of the object store.
>
> **[4:23](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=263)** And in particular, we'll need to retrieve a specific value.
>
> **[4:28](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=268)** Let's go ahead and grab this key right here.
>
> **[4:34](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=274)** Copy that head back to sources.
>
> **[4:37](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=277)** Then we can paste that here and we can create the on success handler here, scrap the data from event.target.result.
>
> **[4:52](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=292)** Let's log this object out.
>
> **[4:55](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=295)** And we can also grab the token from data.value.ststokenmanager.accesstoken
>
> **[5:07](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=307)** and ensure we close the database.
>
> **[5:10](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=310)** Let's go ahead and run this snippet now.
>
> **[5:14](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=314)** We can see the object here and the access token for this user we can go ahead and grab this token, head over to [jwt.io](https://jwt.io).
>
> **[5:29](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=329)** We can paste that here.
>
> **[5:36](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=336)** Looks like I didn't copy it correctly, right click and copy.
>
> **[5:40](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=340)** We can paste that here.
>
> **[5:43](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=343)** We can see that decoded token here.
>
> **[5:48](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-id-tokens?u=76281980&t=348)** This token is then sent on every request to Firebase, and that is how the user is able to be verifiable and able to perform operations like updating data and uploading files.

> [!info]- Semantic Content
>
> **Env Vars:** jwt (6), json (3), hvac (1), rsa (1), iat (1)
> **Code Keywords:** let (7), this. (2), type. (1), case, (1), delete (1)
> **Definitions:** stands for (2), is an  (1), is a  (1), is called (1)
> **URLs:** [jwt.io](https://jwt.io) (1)
> **Analogies:** for instance (1)
> **Speakers:** - [presenter] (1)

#### Setting Firebase custom claims
> [LinkedIn Learning](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=0)** - [Instructor] Our application will have one admin user.
>
> **[0:03](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=3)** So let's create that manually through the Firebase console.
>
> **[0:06](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=6)** I recommend that you create an email account for your particular admin user.
>
> **[0:12](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=12)** My admin user will be thegrid.manager@[gmail.com](https://gmail.com), and let's set a password here.
>
> **[0:21](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=21)** Great, now that user is created.
>
> **[0:24](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=24)** It is currently not possible to add custom claims from the Firebase console.
>
> **[0:29](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=29)** So generally there are a few ways to do it.
>
> **[0:32](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=32)** One way is to add custom claims when a specific user is created, we can use Firebase Cloud functions to add a trigger to watch for such users.
>
> **[0:46](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=46)** Another way to do it is to do it through the command line, which is perfectly fine as well.
>
> **[0:51](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=51)** We will be using the Firebase Admin SDK, which will let us interact with Firebase from privileged environments to perform actions like adding custom claims and read and write to our database with full admin privileges.
>
> **[1:05](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=65)** You can perform similar actions as if you're in the Firebase console manually.
>
> **[1:10](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=70)** And we do so from a trusted environment.
>
> **[1:13](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=73)** This trusted environment will be our own command line.
>
> **[1:16](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=76)** Let's first install the Firebase Admin SDK.
>
> **[1:22](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=82)** Npm install firebase dash admin.
>
> **[1:27](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=87)** And at the time of this recording, we are using eight dot 12 dot one.
>
> **[1:36](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=96)** Next, head over to the Firebase console.
>
> **[1:41](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=101)** Click on Project settings, and then Service accounts.
>
> **[1:48](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=108)** We will need to obtain credentials via the Firebase service account to authorize access to Firebase services, and we will need to generate a private key file in JSON format.
>
> **[1:59](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=119)** Firebase makes this really easy for us.
>
> **[2:07](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=127)** Go ahead and click on Generate new private key, and remember that your private key gives access to your projects Firebase services.
>
> **[2:16](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=136)** So make sure to never commit this file to your repository.
>
> **[2:21](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=141)** Go ahead and click on Generate key.
>
> **[2:26](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=146)** That file was downloaded.
>
> **[2:29](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=149)** Then copy the snippet by clicking on the clipboard icon.
>
> **[2:34](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=154)** Heading back to our application now, under Firebase, let's create a new file called set-custom-claims dot js, and paste that snippet in.
>
> **[2:50](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=170)** Here, we will grab a hold of the uid, which will be a command line argument.
>
> **[3:05](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=185)** And then we can set the custom claims, which will simply be adding a property of true.
>
> **[3:14](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=194)** So admin dot auth.
>
> **[3:16](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=196)** You can call in method setCustomUserClaims for this particular user ID.
>
> **[3:22](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=202)** And let's set the custom claim of admin true.
>
> **[3:28](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=208)** This returns a promise, this log message here, custom claim set for user, uid, and then exit.
>
> **[3:45](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=225)** Let's catch any errors here.
>
> **[3:57](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=237)** Go ahead and drag to download the key file to your project.
>
> **[4:01](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=241)** We can drag it to the Firebase folder on the source.
>
> **[4:08](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=248)** I will go ahead and copy the file name.
>
> **[4:12](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=252)** Right click copy relative path, go back to your file, and we can update that here.
>
> **[4:21](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=261)** This would actually be current directory forward slash, and then we have our file name here.
>
> **[4:28](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=268)** Head back to your console now to grab the user ID.
>
> **[4:32](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=272)** Head back to Authentication and let's copy this user ID.
>
> **[4:41](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=281)** And then back to your terminal now, we can use the Firebase admin as a key in our node JS script, which will allow us to set custom claims on the specific user.
>
> **[4:54](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=294)** Let's call the script with node, node source Firebase, forward slash, set-custom-claims dot js, and paste that user ID.
>
> **[5:07](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=307)** Looks like we have an error here.
>
> **[5:13](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=313)** And this should be argv.
>
> **[5:15](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=315)** Let's give that a save, let's run that again.
>
> **[5:22](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=322)** And that's it.
>
> **[5:23](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=323)** Let's verify this by logging in with this user.
>
> **[5:26](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=326)** Let me go ahead and start the application first.
>
> **[5:30](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=330)** Clear the terminal, npm start, and let's go ahead and log in now.
>
> **[5:36](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=336)** Thegrid.manager@[gmail.com](https://gmail.com), set the password and we are logged in now.
>
> **[5:45](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=345)** Let's grab the token with the previous snippet that we wrote.
>
> **[5:49](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=349)** Open up your developer tools and go to sources, and then we replace this key here.
>
> **[5:59](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=359)** Grab the new key, let's copy that and paste that here.
>
> **[6:06](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=366)** And let's run that.
>
> **[6:07](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=367)** And we have our token.
>
> **[6:10](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=370)** Let's right click and copy this token and head over to [JWT.IO](https://JWT.IO).
>
> **[6:15](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/setting-firebase-custom-claims?u=76281980&t=375)** We can paste that here and we can see that our custom claim of admin has been set.

> [!info]- Semantic Content
>
> **Code Keywords:** let (18), private (3)
> **CLI Commands:** node (3), npm (2), make (1)
> **Tools:** command line (3), terminal (2)
> **Env Vars:** sdk (2), json (1), jwt (1)
> **UI Navigation:** click on (3), go to (1)
> **URLs:** [gmail.com](https://gmail.com) (2), [jwt.io](https://jwt.io) (1)
> **Prerequisites:** install (2)
> **Code Identifiers:** setcustomuserclaims (1)

#### Admin interface: Users page
> [LinkedIn Learning](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=0)** - [Instructor] Now that we have used the Firebase Admin SDK to set custom claims for an admin user, it is time to start developing our admin interface which will allow the admin user to see all of the registered users and view and edit the profile data.
>
> **[0:17](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=17)** Let's start by creating a new users page, and call it Users.js.
>
> **[0:26](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=26)** Let's create our component here.
>
> **[0:30](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=30)** We'll call this users.
>
> **[0:33](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=33)** And for now let's just return a div with the text users in that div.
>
> **[0:46](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=46)** Before adding a new route to our application, we need to do some work in UserProvider.js, the high order component, where we define the user context and where we get access to the user session.
>
> **[1:03](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=63)** Here, we will want to get information about any custom claims in the user.
>
> **[1:07](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=67)** In particular, we will check for the admin custom claim we previously set.
>
> **[1:12](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=72)** So in addition to the user, let's add another property, isAdmin, and the initial value will be false.
>
> **[1:22](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=82)** Now in the off state change callback, we will need to make some changes.
>
> **[1:29](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=89)** Let's first declare a variable isAdmin and initialize that to false.
>
> **[1:36](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=96)** If there is a user, we can grab the user token object, which we can do by calling the getidToken result method on the user.
>
> **[1:52](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=112)** It returns a promise, so we can use a weight here.
>
> **[1:56](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=116)** And finally, we can set isAdmin to the value found in token.claims.admin, which was the custom claim that we set.
>
> **[2:10](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=130)** And then we can set the isAdmin accordingly.
>
> **[2:15](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=135)** The reason we check for a user is that if there currently isn't an authenticated user, there will be no token object to check for claims.
>
> **[2:25](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=145)** Now, we can create our adamant route component.
>
> **[2:29](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=149)** Let's create a new file under the folder router and call this AdminRoute.js.
>
> **[2:38](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=158)** This will be very similar to the previous higher order components we have been creating like private route.
>
> **[2:46](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=166)** Let's take care of our imports first here.
>
> **[2:50](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=170)** Import react, then we can import route and redirect from react router dom, and also import our useSession from forward slash firebase user provider.
>
> **[3:13](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=193)** We can declare our component here, and we will destructure the props, we'll rename the component and then retain the rest of the props.
>
> **[3:28](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=208)** We can use our use session hook and grab the user, and also the isAdmin flag.
>
> **[3:42](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=222)** And here we can return a route, can give the rest of the props, and then in the render prop is where we can perform our checks.
>
> **[3:55](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=235)** So be it'll a function that receives the props.
>
> **[4:03](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=243)** If there is a user and that user is the admin, then we can go ahead and render the desired component.
>
> **[4:18](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=258)** Otherwise we'll redirect the user to the login page, and we can do that by returning the redirect with a prop two, and the path will be login.
>
> **[4:31](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=271)** And finally, let's make sure we export this component.
>
> **[4:38](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=278)** It looks like I have an import here that I don't need.
>
> **[4:46](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=286)** Now let's head to App.js.
>
> **[4:48](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=288)** And here we can insert our new AdminRoute.
>
> **[4:58](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=298)** We want to match the exact, the path will be forward slash users, and the component will be the new users page component that we just created.
>
> **[5:11](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=311)** So open up our terminal to make sure we don't have any errors.
>
> **[5:16](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=316)** And it looks like we need to declare this function as async.
>
> **[5:21](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=321)** So let's head to UserProvider.js, and we can add async here to this callback function.
>
> **[5:30](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=330)** Let's give that a save, everything looks okay.
>
> **[5:33](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=333)** Now let's add to our browser.
>
> **[5:35](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=335)** Now when the admin users logged in, and I tried to access the root page, I am redirected to the profile page.
>
> **[5:47](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=347)** And now we can try to visit the users page, and we see our component rendered.
>
> **[5:56](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=356)** Now, when the adamant user is logged in, I am redirected to the profile page, that is fine for normal users, but for the admin user, we will like to redirect to the users page.
>
> **[6:09](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=369)** Let's head now to the profile redirect component, and we can use our new isAdmin flag.
>
> **[6:22](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=382)** In our redirect component we can then specify a different path for admin users.
>
> **[6:28](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=388)** If we have an admin user, we redirect to users, otherwise to the profile page, and we can test this out now.
>
> **[6:42](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=402)** As the admin user, let me try to access the route page, and I can redirect it to the users page.
>
> **[6:50](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=410)** One last change needs to be made.
>
> **[6:53](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=413)** Upon login, all users are currently sent to the profile page.
>
> **[6:57](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=417)** For the admin user, we should redirect them to the users page upon login, head over now to Login.js, which is our page component for the login form.
>
> **[7:10](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=430)** And we can add here a new function, we'll call it routeOnLogin.
>
> **[7:19](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=439)** We'll use async weight here.
>
> **[7:23](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=443)** Let's grab a hold of the token in that user by calling getidTokenResult.
>
> **[7:33](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=453)** Now, if we have an admin claim,
>
> **[7:42](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=462)** then we can redirect the user to the users page.
>
> **[7:54](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=474)** Otherwise, we'll redirect them to the profile page.
>
> **[7:57](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=477)** We can grab the line here, copy that and paste that, and replace this line with our new function routeOnLogin,
>
> **[8:09](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=489)** and passing in the user.
>
> **[8:13](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=493)** Let's test this out now.
>
> **[8:16](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=496)** Let me log out, and I will log in as the admin user.
>
> **[8:25](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=505)** And when I log in, I am taken to the users page.
>
> **[8:29](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=509)** I'm going to log out and they meet log in as a nonadmin user.
>
> **[8:34](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-users-page?u=76281980&t=514)** And I am taken to the profile page.

> [!info]- Semantic Content
>
> **Code Keywords:** let (17), function (5), async (3), finally, (2), interface (1)
> **Code Identifiers:** isadmin (6), routeonlogin (2), getidtoken (1), usesession (1), getidtokenresult (1)
> **File Paths:** userprovider.js (2), users.js (1), adminroute.js (1), app.js (1), login.js (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (2)
> **Env Vars:** sdk (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### Admin interface: Read user collection
> [LinkedIn Learning](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=0)** - [Instructor] Now that we have our admin route set up, let's display some users.
>
> **[0:04](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=4)** I went ahead and added a few more users, using the sample data in the profiles folder in the project.
>
> **[0:11](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=11)** If you need temporary email addresses, you can use something like [tempmail.org](https://tempmail.org).
>
> **[0:17](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=17)** Heading back to our users component, we need to add a new piece of state and it will be an array of users.
>
> **[0:28](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=28)** We can use the used state hook from react and the initial value will be an empty array.
>
> **[0:36](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=36)** We can then use the use effect hook in order to retrieve our users collection.
>
> **[0:43](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=43)** Let's first create a reference to that collection.
>
> **[0:47](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=47)** And we can use the firestore service and retrieve the users collection.
>
> **[0:56](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=56)** On this users reference, we can listen for real time changes using the on snapshot method.
>
> **[1:06](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=66)** And we get back what's called a query snapshot, from Firebase.
>
> **[1:11](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=71)** From this query snapshot, we can get the array of all the documents.
>
> **[1:17](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=77)** We can actually map over these and call the data method on that document in order to get the JavaScript object.
>
> **[1:27](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=87)** And for now, let's just log out the users.
>
> **[1:34](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=94)** We need to make sure we unsubscribe appropriately.
>
> **[1:38](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=98)** This actually returns a function that we can call and we can return this in the effect.
>
> **[1:46](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=106)** And lastly, let's make sure we add an ether ray so that we tell react to only run this effect when the component is mounted.
>
> **[1:56](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=116)** Let's head back to our application and it looks like we may have a compilation error.
>
> **[2:02](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=122)** Let's see what's going on.
>
> **[2:04](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=124)** We open up our terminal and it seems like we have an unnecessary import here.
>
> **[2:12](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=132)** Let me delete that line, save.
>
> **[2:16](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=136)** It compiles fine and let's head to our application.
>
> **[2:20](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=140)** I'm going to open up the developer tools here, head to the console and refresh.
>
> **[2:28](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=148)** Let me log in now as the admin user.
>
> **[2:40](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=160)** We can see that Firebase is throwing an error here, specifying that this user does not have permissions to read this data.
>
> **[2:48](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=168)** If you look at our Firebase cloud store security rules, we have limited access for each user to their own user document.
>
> **[3:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=180)** We will need to modify the security rules to allow the admin user to read the entire users collection.
>
> **[3:07](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=187)** We can modify the current rules to check for the admin custom claim.
>
> **[3:13](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=193)** So let's go ahead and replace all of these lines with allow read, write, update.
>
> **[3:22](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=202)** If request.off.uid equals a user ID or if that user is an admin user.
>
> **[3:33](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=213)** And you can do that by checking request.auth.token.admin.
>
> **[3:43](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=223)** Let's go ahead and save that.
>
> **[3:45](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=225)** Next, head over to storage.rules.
>
> **[3:48](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=228)** We also want the admin user to be able to read or write any of the profile images.
>
> **[3:53](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=233)** So we can allow read if that is a particular user or if that user is an admin user.
>
> **[4:03](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=243)** And we can do similar thing with the request.auth.token.admin.
>
> **[4:10](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=250)** And we can also add that same line to allow reads.
>
> **[4:16](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=256)** And then we'll go ahead and put the checks for the size and the image type in the parentheses.
>
> **[4:26](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=266)** I'm going to stop our app here and redeploy our security rules.
>
> **[4:32](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=272)** I'm actually going to create an NPM script to facilitate this.
>
> **[4:36](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=276)** Head over to package.json and that will add a new NPM script; deploy firestore.
>
> **[4:45](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=285)** And this will simply run firebase deploy//only firestore rules.
>
> **[4:52](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=292)** And that will let a second NPM script; deploy storage and this will run firebase deploy//only storage rules.
>
> **[5:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=300)** and this will run firebase deploy//only storage rules.
>
> **[5:04](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=304)** Let me run both of those NPM scripts now.
>
> **[5:06](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=306)** NPM run, deploy fire store and that is now deployed.
>
> **[5:15](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=315)** Let me run NPM run, deploy storage,
>
> **[5:26](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=326)** and that is now deployed as well.
>
> **[5:28](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=328)** Let's go ahead and start our application now.
>
> **[5:36](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-read-user-collection?u=76281980&t=336)** And now, we see that the user data was fetched and is being logged out to the console.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), function (1), delete (1), this. (1)
> **CLI Commands:** npm (6), make (2)
> **Env Vars:** npm (6)
> **Definitions:** is an  (2), is a  (1)
> **File Paths:** package.json (1)
> **URLs:** [tempmail.org](https://tempmail.org) (1)
> **Tools:** terminal (1)
> **Prerequisites:** set up (1)

#### Admin interface: Render user collection
> [LinkedIn Learning](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-render-user-collection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-render-user-collection?u=76281980&t=0)** - [Instructor] Now that we are successfully retrieving our users, let's display that data now.
>
> **[0:07](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-render-user-collection?u=76281980&t=7)** In the users component, once we successfully retrieved that users, let's set the state here by calling set users with our users array.
>
> **[0:21](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-render-user-collection?u=76281980&t=21)** And now here, we will render a table.
>
> **[0:29](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-render-user-collection?u=76281980&t=29)** Let's give this table a class name of UI Selectable Cell Table and let's render the table header here.
>
> **[0:44](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-render-user-collection?u=76281980&t=44)** And, we will render five fields.
>
> **[1:07](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-render-user-collection?u=76281980&t=67)** Next, we will go ahead and render a table body.
>
> **[1:14](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-render-user-collection?u=76281980&t=74)** And here, we will return a table role for each user.
>
> **[1:19](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-render-user-collection?u=76281980&t=79)** So let's go ahead and map the users array.
>
> **[1:26](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-render-user-collection?u=76281980&t=86)** For each user, we can return a table row.
>
> **[1:33](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-render-user-collection?u=76281980&t=93)** Let's give it a key which will be the user ID.
>
> **[1:40](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-render-user-collection?u=76281980&t=100)** And let's render each one of those fields.
>
> **[1:46](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-render-user-collection?u=76281980&t=106)** We will have the name, the specialty, the address,
>
> **[2:09](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-render-user-collection?u=76281980&t=129)** the phone, and the IP address.
>
> **[2:21](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-render-user-collection?u=76281980&t=141)** Let's give that a save and head over now to our browser.
>
> **[2:27](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/admin-interface-render-user-collection?u=76281980&t=147)** Let me close the Developer Tools and now we can see all of our data.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9)
> **Speakers:** - [instructor] (1)

#### Challenge: View user profile with admin
> [LinkedIn Learning](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-view-user-profile-with-admin?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-view-user-profile-with-admin?u=76281980&t=0)** - [Narrator] I would like you to now work on a challenge.
>
> **[0:09](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-view-user-profile-with-admin?u=76281980&t=9)** The admin user can view the user's collection, but we want to add the ability for the admin user to view individual profile data and modify that user data.
>
> **[0:20](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-view-user-profile-with-admin?u=76281980&t=20)** To begin, you will need to add a link for a user.
>
> **[0:24](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/challenge-view-user-profile-with-admin?u=76281980&t=24)** You can turn the username into a link by using link from react-router-dom.

> [!info]- Semantic Content
>
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: View user profile with admin
> [LinkedIn Learning](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-view-user-profile-with-admin?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-view-user-profile-with-admin?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:06](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-view-user-profile-with-admin?u=76281980&t=6)** - [Tutor] Let me show you one way of implementing this feature.
>
> **[0:10](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-view-user-profile-with-admin?u=76281980&t=10)** Head over now to users.js, our page component, and we can turn the user's name into a navigation link by using link from react router dom, and using the username as the text for this link.
>
> **[0:32](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-view-user-profile-with-admin?u=76281980&t=32)** We can go ahead and add the to prop, and the path will be /profile/userID.
>
> **[0:44](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-view-user-profile-with-admin?u=76281980&t=44)** Let's give that a save and head to our browser now.
>
> **[0:50](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-view-user-profile-with-admin?u=76281980&t=50)** Now, if you try to navigate by clicking on this link, you see that the app doesn't seem to go anywhere.
>
> **[0:56](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-view-user-profile-with-admin?u=76281980&t=56)** This is because the profile page is using the private route component, which only allows a user to view its own profile.
>
> **[1:04](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-view-user-profile-with-admin?u=76281980&t=64)** We will need to modify that to allow admin users.
>
> **[1:09](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-view-user-profile-with-admin?u=76281980&t=69)** Head over now to PrivateRoute.js, and then in our render prop, we can allow the route if that user is an admin.
>
> **[1:20](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-view-user-profile-with-admin?u=76281980&t=80)** Let's go ahead and grab the isAdmin flag,
>
> **[1:28](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-view-user-profile-with-admin?u=76281980&t=88)** and we can add a check for the admin user here, or isAdmin.
>
> **[1:37](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-view-user-profile-with-admin?u=76281980&t=97)** Let's give that a save and try the link now.
>
> **[1:41](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/solution-view-user-profile-with-admin?u=76281980&t=101)** And you can see that I am able to navigate to any profile now, as the admin user.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), private (1)
> **Code Identifiers:** isadmin (2), userid (1)
> **File Paths:** users.js (1), privateroute.js (1)
> **Definitions:** is an  (1)
> **Speakers:** - [tutor] (1)
> **Non-Speech:** (upbeat electronic music) (1)


### 7. 6. Going Serverless with Firebase Cloud Functions

#### Cloud Functions setup
> [LinkedIn Learning](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-setup?u=76281980&t=0)** - [Instructor] Now we turn to probably one of the most exciting parts of this course, Firebase Cloud Functions.
>
> **[0:06](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-setup?u=76281980&t=6)** Cloud Functions for Firebase allows you to run back in code that automatically responds to event such as when data is created or deleted images are uploaded, or when there's a new user.
>
> **[0:19](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-setup?u=76281980&t=19)** Cloud Functions can also respond to HTTPS requests, allowing you to easily build a server-less API.
>
> **[0:26](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-setup?u=76281980&t=26)** As stated the code is stored in the cloud and runs and managed environment.
>
> **[0:31](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-setup?u=76281980&t=31)** In addition there's no need to manage and scale your own servers.
>
> **[0:35](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-setup?u=76281980&t=35)** Even better these functions can be written in JavaScript or TypeScript, so you'll feel right at home.
>
> **[0:40](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-setup?u=76281980&t=40)** Let's get started, switching to the command prompt in your project directory.
>
> **[0:45](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-setup?u=76281980&t=45)** You'll want to ensure that you have the Firebase CLI installed globally via NPM, NPM installed -G Firebase-tools.
>
> **[0:56](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-setup?u=76281980&t=56)** Often bug fixes and new features are available only with the latest version of the Firebase tools.
>
> **[1:01](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-setup?u=76281980&t=61)** So it's a good practice to frequently update the CLI.
>
> **[1:05](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-setup?u=76281980&t=65)** Once installed, make sure that the Firebase logging command works and here it tells me that I'm already logged in.
>
> **[1:16](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-setup?u=76281980&t=76)** Let's initialize Cloud Functions for our project Firebase unit, functions.
>
> **[1:27](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-setup?u=76281980&t=87)** I will go ahead and use JavaScript to write my functions, click enter, and it will go ahead and set the default and go ahead and install dependencies now.
>
> **[1:42](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-setup?u=76281980&t=102)** Once done, let's go see the files that it generated.
>
> **[1:47](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-setup?u=76281980&t=107)** We see that there's a new functions folder, which is a directory containing the code for all of your Cloud Functions.
>
> **[1:56](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-setup?u=76281980&t=116)** The package.json file is the MPM package file describing your Cloud Functions.
>
> **[2:03](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-setup?u=76281980&t=123)** Index.JS is a main source file for your Cloud Functions.
>
> **[2:07](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-setup?u=76281980&t=127)** And the node modules is a directory where your dependencies, which are declaring package.Jason live.

> [!info]- Semantic Content
>
> **Env Vars:** cli (2), npm (2), https (1), api (1), mpm (1)
> **CLI Commands:** npm (2), make (1), node (1)
> **Code Keywords:** let (3)
> **Definitions:** is a  (3)
> **File Paths:** package.json (1), index.js (1)
> **Tools:** command prompt (1)
> **Analogies:** such as (1)
> **Best Practices:** good practice (1)

#### Cloud Functions: Email setup
> [LinkedIn Learning](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-email-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-email-setup?u=76281980&t=0)** - [Instructor] For our first Firebase cloud function, we'll be leveraging the authentication trigger to send the welcome email.
>
> **[0:07](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-email-setup?u=76281980&t=7)** Specifically, we will trigger the cloud function when a new user signs up.
>
> **[0:12](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-email-setup?u=76281980&t=12)** For this specific example, we will be using Nodemailer, which is a node-based email client.
>
> **[0:19](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-email-setup?u=76281980&t=19)** We will also be using a test Gmail account that I have created to send emails.
>
> **[0:24](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-email-setup?u=76281980&t=24)** I recommend that you create a Gmail account that you can use for development.
>
> **[0:29](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-email-setup?u=76281980&t=29)** Specifically, my email account is thegrid.notifier@[gmail.com](https://gmail.com).
>
> **[0:35](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-email-setup?u=76281980&t=35)** Keep in mind that Gmail has an email sending quota.
>
> **[0:38](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-email-setup?u=76281980&t=38)** For larger amount of emails, consider switching to something like SendGrid or Mailgun.
>
> **[0:46](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-email-setup?u=76281980&t=46)** Another thing to keep in mind is that the Spark plan, which is a free Firebase plan we are currently using only allows you to send requests to Google Services.
>
> **[0:55](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-email-setup?u=76281980&t=55)** For non Google related services, you will need to enable billing and your Firebase project.
>
> **[1:01](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-email-setup?u=76281980&t=61)** You will also need to do two things for your test Gmail account.
>
> **[1:06](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-email-setup?u=76281980&t=66)** You can visit this URL in order to enable less secure app access.
>
> **[1:12](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-email-setup?u=76281980&t=72)** Please note that if you have enabled two-step verification, this option will be enabled for you.
>
> **[1:18](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-email-setup?u=76281980&t=78)** In that case, you will need to use an app password and you can follow the instructions here.
>
> **[1:25](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-email-setup?u=76281980&t=85)** I will go ahead and enable less secure app access.
>
> **[1:30](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-email-setup?u=76281980&t=90)** And lastly, you need to visit this link in order to allow access to your Google account.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), case, (1)
> **Warnings:** keep in mind (2), note that (1)
> **Definitions:** is a  (2)
> **CLI Commands:** node (1)
> **URLs:** [gmail.com](https://gmail.com) (1)
> **Env Vars:** url (1)
> **Speakers:** - [instructor] (1)

#### Cloud Functions: Authentication trigger
> [LinkedIn Learning](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=0)** - [Instructor] Let's try our function now.
>
> **[0:02](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=2)** Firebase Cloud Functions allows you to set environment variables which is important because you don't want to write credentials in your code.
>
> **[0:10](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=10)** In your terminal, you can set environment variables using firebase functions:config:set.
>
> **[0:20](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=20)** Now we'll set two environment variables, the email, which is thegrid.notifier@[gmail.com](https://gmail.com), and also the password.
>
> **[0:34](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=34)** Go ahead and click Enter.
>
> **[0:38](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=38)** Let's change directories into the functions folder and npm install nodemailer.
>
> **[0:52](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=52)** And now we can write our function.
>
> **[0:57](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=57)** We will first require firebase-functions.
>
> **[1:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=60)** This is a package that was installed when we initialized Cloud Functions in our project.
>
> **[1:09](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=69)** Let's go ahead and require nodemailer as well.
>
> **[1:16](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=76)** In here, we can grab the environment variables.
>
> **[1:21](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=81)** We need the email in call functions.config, and we store it in gmail.email, and also the gmailPassword, which was stored in gmail.password.
>
> **[1:42](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=102)** Here we can create the node mailer transport.
>
> **[1:47](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=107)** Let's declare a variable.
>
> **[1:51](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=111)** We can call nodemailer.createTransport.
>
> **[1:56](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=116)** It takes in an object for the configuration.
>
> **[1:59](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=119)** The service we'll be using is gmail.
>
> **[2:04](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=124)** And it needs the auth information, the user, which is the email, and also the password.
>
> **[2:16](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=136)** Now we can write our function to send the email.
>
> **[2:22](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=142)** Let's call this sendWelcomeEmail, and it takes in the user email.
>
> **[2:29](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=149)** We will declare the mailOptions, which is the from field,
>
> **[2:45](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=165)** and also the to field, which is a user email.
>
> **[2:52](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=172)** We will also go ahead and add the subject, which will simply say Welcome to The Grid, and finally the email text, and we can send a friendly greeting here and say Welcome to The Grid, the elite team of secret agents.
>
> **[3:27](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=207)** Let's go ahead now and call the function to send the email.
>
> **[3:34](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=214)** We can call mailTransport.sendEmail along with the mailOptions.
>
> **[3:48](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=228)** We can console.log New welcome email sent to:, the user email, and return null here.
>
> **[3:59](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=239)** In here, we can write the Cloud Function and set up the authentication trigger, exports.sendWelcomeEmail.
>
> **[4:09](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=249)** We can listen for that authentication trigger by calling functions.auth.user .onCreate.
>
> **[4:22](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=262)** We will get the user information.
>
> **[4:25](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=265)** Let's grab the email from that new user and then call our function to send this welcome email.
>
> **[4:39](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=279)** To deploy our Cloud Function, let's use the firebase deploy command in the package.json so we can run npm run deploy.
>
> **[4:49](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=289)** So back to our terminal.
>
> **[4:51](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=291)** Inside of the functions folder, we can write npm run deploy.
>
> **[5:01](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=301)** Once deployed, let's go ahead and start our app.
>
> **[5:03](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=303)** I will go ahead and move up a directory and start my application.
>
> **[5:12](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=312)** I'm currently logged in as the admin user, so let me go ahead and log out.
>
> **[5:18](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=318)** I have a test user that I have created with a real email account, and we'll go ahead and sign up.
>
> **[5:30](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=330)** Let's go ahead and sign up.
>
> **[5:34](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=334)** And let's check that user's email account, and we see the email here: Welcome to The Grid, the elite team of secret agents.
>
> **[5:45](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=345)** If for any reason your email didn't get sent, check the logs in the Firebase Console and ensure that you enable access to less secure apps, and visit the link for the Display Unlock Captcha, as displayed in the previous video.
>
> **[6:01](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/cloud-functions-authentication-trigger?u=76281980&t=361)** Congratulations, you have successfully written, deployed, and executed your serverless function.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), function (8), require (2)
> **Code Identifiers:** sendwelcomeemail (2), mailoptions (2), gmailpassword (1), createtransport (1), mailtransport (1)
> **CLI Commands:** npm (3), node (1)
> **File Paths:** functions.config (1), package.json (1)
> **Tools:** terminal (2)
> **Definitions:** is a  (2)
> **Prerequisites:** install (1), set up (1)
> **URLs:** [gmail.com](https://gmail.com) (1)


### 8. 7. Hosting with Firebase

#### Firebase Hosting setup
> [LinkedIn Learning](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-hosting-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-hosting-setup?u=76281980&t=0)** - [Narrator] Now that we have used Authentication to manage users, Cloud Firestore to store data, Cloud Storage to store user files and Cloud Functions for serverless backends, it's time to deploy our application, and we can do so with the Firebase Hosting.
>
> **[0:16](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-hosting-setup?u=76281980&t=16)** We first need to ensure that we can build our React application for production.
>
> **[0:22](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-hosting-setup?u=76281980&t=22)** Create React App has already created a build script for us, so we can simply run NPM , run build and create React App, we'll go ahead and create an optimized production build for us.
>
> **[0:38](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-hosting-setup?u=76281980&t=38)** Looking at our project files, we see that there's a new build folder here with the optimized production build.
>
> **[0:48](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-hosting-setup?u=76281980&t=48)** And now we can set up Firebase Hosting.
>
> **[0:53](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-hosting-setup?u=76281980&t=53)** In your terminal go ahead and run Firebase in it.
>
> **[0:59](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-hosting-setup?u=76281980&t=59)** We will use the arrow keys, hit the space bar to choose hosting and then click enter.
>
> **[1:08](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-hosting-setup?u=76281980&t=68)** Our public directory will be build.
>
> **[1:14](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-hosting-setup?u=76281980&t=74)** We want to configure as a single page app and we don't want to override the index HTML file.
>
> **[1:25](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/firebase-hosting-setup?u=76281980&t=85)** You will then see that the firebase.json file has been updated with the hosting configuration.

> [!info]- Semantic Content
>
> **Code Keywords:** public (1), override (1)
> **Env Vars:** npm (1), html (1)
> **Prerequisites:** set up (1), configure (1)
> **File Paths:** firebase.json (1)
> **CLI Commands:** npm (1)
> **Tools:** terminal (1)
> **Speakers:** - [narrator] (1)

#### Deploying your React app
> [LinkedIn Learning](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-your-react-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-your-react-app?u=76281980&t=0)** - [Instructor] And now let's deploy the application that you have been working so hard on.
>
> **[0:05](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-your-react-app?u=76281980&t=5)** Let's write a new npm script.
>
> **[0:08](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-your-react-app?u=76281980&t=8)** We will call this "deploy:hosting", and this will run "firebase deploy --only hosting".
>
> **[0:21](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-your-react-app?u=76281980&t=21)** We'll also write another npm script, simply "deploy" and we can use "firebase deploy," without any arguments.
>
> **[0:31](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-your-react-app?u=76281980&t=31)** When using this command without any flags, it will deploy all of the Firebase services that you have configured in your application.
>
> **[0:38](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-your-react-app?u=76281980&t=38)** For the storage and cloud store services, this will deploy the security rules.
>
> **[0:43](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-your-react-app?u=76281980&t=43)** When hosting is enabled, this will deploy your app.
>
> **[0:47](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-your-react-app?u=76281980&t=47)** And finally, this will prepare, package and upload your cloud functions.
>
> **[0:52](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-your-react-app?u=76281980&t=52)** Keep in mind, that running this command may take a few minutes on your machine.
>
> **[0:57](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-your-react-app?u=76281980&t=57)** Let's go ahead and run npm deploy.
>
> **[1:09](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-your-react-app?u=76281980&t=69)** Once that is done, Firebase will give you the URL of your new application.
>
> **[1:14](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-your-react-app?u=76281980&t=74)** Let's go ahead and visit that.
>
> **[1:21](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-your-react-app?u=76281980&t=81)** And we have our application live at this URL.
>
> **[1:25](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-your-react-app?u=76281980&t=85)** I will go ahead and log in as the admin user
>
> **[1:34](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-your-react-app?u=76281980&t=94)** and I am able to see all of the users and view individual profiles.
>
> **[1:45](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-your-react-app?u=76281980&t=105)** Let me log in as a regular user now and I can see my profile data, update my data as well.
>
> **[1:57](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/deploying-your-react-app?u=76281980&t=117)** We can go ahead and visit the Firebase console as well and you will see some data such as the release history.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), finally, (1)
> **CLI Commands:** npm (3)
> **Env Vars:** url (2)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 9. Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/next-steps?u=76281980&t=0)** - Thanks for joining me on this course.
>
> **[0:02](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/next-steps?u=76281980&t=2)** We have leveraged most of the excellent services provided by Google to help us build a server-less app.
>
> **[0:09](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/next-steps?u=76281980&t=9)** You have built an app that uses many features like authentication, routing, React hooks, and Cloud functions.
>
> **[0:16](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/next-steps?u=76281980&t=16)** These are real skills that you can use in your project.
>
> **[0:19](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/next-steps?u=76281980&t=19)** I hope you enjoyed learning about the different Firebase features that will make you a much more productive developer when developing React applications.
>
> **[0:28](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/next-steps?u=76281980&t=28)** I strongly recommend subscribing to the Firebase YouTube channel.
>
> **[0:31](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/next-steps?u=76281980&t=31)** The content is excellent, and it's a great way to keep up to date with any new features.
>
> **[0:37](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/next-steps?u=76281980&t=37)** And of course, continue to browse our library for anything React related.
>
> **[0:42](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/next-steps?u=76281980&t=42)** If you wish to know what I'm currently working on, follow me on GitHub at [github.com/victormejia](https://github.com/victormejia).
>
> **[0:50](https://www.linkedin.com/learning/react-cloud-powered-apps-with-firebase/next-steps?u=76281980&t=50)** You can also follow me at Twitter, at [twitter.com/_victormejia](https://twitter.com/_victormejia) Thanks for watching.

> [!info]- Semantic Content
>
> **URLs:** [github.com](https://github.com) (1), [twitter.com](https://twitter.com) (1)
> **Tools:** github (2)
> **CLI Commands:** make (1)
> **Code Keywords:** continue (1)
> **Speakers:** - thanks (1)


## Instructor

- [[Victor Mejia]]

## Resources

- Exercise files available

## Skills Covered

- React.js
- Firebase

## Path Context

### In [[Improve Your React Skills]]
← [[Building a GraphQL Project with React.js]] | **9 of 9**

## Appears In

- [[Improve Your React Skills]]

## Related Courses

_Courses sharing skills:_

- [[Building a GraphQL Project with React.js]] — React.js
- [[React- Software Architecture]] — React.js
- [[React- Testing and Debugging]] — React.js
- [[React- Building Styles with CSS Modules]] — React.js
- [[Building Modern Uis With React Router V6]] — React.js

---

[↑ Back to top](#)