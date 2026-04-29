---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: react-testing-and-debugging
url: "https://www.linkedin.com/learning/react-testing-and-debugging"
duration_minutes: 93
duration: 1h 33m
level: Intermediate
updated: 4/9/2025
learners: 39736
skills:
  - Debugging
  - React.js
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQHBryMEI_iM-g/learning-public-crop_675_1200/B4EZYbJj22HcAY-/0/1744212213875?e=2147483647&amp;v=beta&amp;t=o3URCyLQJOCiA-wJb7KVYCcHv_jxaK-eK2YJEVGTp48"
linkedin_topic: Web Development
learning_paths:
  - '[[Improve Your React Skills]]'
prev_courses:
  - '[[Building Modern Projects with React]]'
next_courses:
  - '[[React- Authentication]]'
path_nav: '[{"path":"Improve Your React Skills","position":5,"total":9,"prev":"Building Modern Projects with React","next":"React- Authentication"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/debugging
  - skill/react-js
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/React-%20Testing%20and%20Debugging.md)

![React: Testing and Debugging](https://media.licdn.com/dms/image/v2/D4E0DAQHBryMEI_iM-g/learning-public-crop_675_1200/B4EZYbJj22HcAY-/0/1744212213875?e=2147483647&amp;v=beta&amp;t=o3URCyLQJOCiA-wJb7KVYCcHv_jxaK-eK2YJEVGTp48)

# React: Testing and Debugging

> Tracking down bugs in React—and the many different pieces it communicates with—can be a challenge. While basic JavaScript testing and debugging tools certainly work, solutions designed specifically to work with React will save you time and effort. This course covers those tools, as well as tips and techniques to help you find, diagnose, and fix problems in your apps. Watch and learn how to test Re

> [LinkedIn Learning](https://www.linkedin.com/learning/react-testing-and-debugging) | 1h 33m | Intermediate | 40K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (3 videos)
- **[[#1. Setting Up]]** (6 videos)
- **[[#2. Testing with Jest]]** (8 videos)
- **[[#3. Debugging with Chrome and Extensions]]** (5 videos)
- **[[#4. ESLint and Types]]** (3 videos)
- **[[#Conclusion]]** (2 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Testing and debugging your React apps
> [LinkedIn Learning](https://www.linkedin.com/learning/react-testing-and-debugging/testing-and-debugging-your-react-apps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/testing-and-debugging-your-react-apps?u=76281980&t=0)** - Have you ever felt lost or frustrated while working on a React project, unable to figure out what's wrong with your application code?
>
> **[0:08](https://www.linkedin.com/learning/react-testing-and-debugging/testing-and-debugging-your-react-apps?u=76281980&t=8)** Mostly likely, you've got a bug.
>
> **[0:10](https://www.linkedin.com/learning/react-testing-and-debugging/testing-and-debugging-your-react-apps?u=76281980&t=10)** Maybe you're just getting started, have little or no experience debugging a React application, or maybe your code is really complex and you find that you're really close to giving up.
>
> **[0:19](https://www.linkedin.com/learning/react-testing-and-debugging/testing-and-debugging-your-react-apps?u=76281980&t=19)** Well, despair no more, as I'm here to introduce you to several tools that will help you understand specifically what's gone wrong and what you can do to fix it.
>
> **[0:29](https://www.linkedin.com/learning/react-testing-and-debugging/testing-and-debugging-your-react-apps?u=76281980&t=29)** Hi, I'm Manny Henri and I've been working with React since it was first introduced and I'm here to help you in your quest for bug extermination.
>
> **[0:38](https://www.linkedin.com/learning/react-testing-and-debugging/testing-and-debugging-your-react-apps?u=76281980&t=38)** In this course, we'll first set up all the tools we need.
>
> **[0:41](https://www.linkedin.com/learning/react-testing-and-debugging/testing-and-debugging-your-react-apps?u=76281980&t=41)** We'll explore testing with Jest and we'll run some example tests, create a snapshot, and do conference reports.
>
> **[0:48](https://www.linkedin.com/learning/react-testing-and-debugging/testing-and-debugging-your-react-apps?u=76281980&t=48)** Next, we'll go over the Chrome and React devtools and how we can find the source of our bugs and resolve them.
>
> **[0:55](https://www.linkedin.com/learning/react-testing-and-debugging/testing-and-debugging-your-react-apps?u=76281980&t=55)** Finally, we'll improve code syntax, bug prevention, and performance by using type checking, ESLint and our devtools.
>
> **[1:04](https://www.linkedin.com/learning/react-testing-and-debugging/testing-and-debugging-your-react-apps?u=76281980&t=64)** So if you're ready to exterminate these annoying bugs, open your favorite text editor and let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **Code Keywords:** finally, (1), let (1)
> **Prerequisites:** getting started (1), set up (1)
> **Speakers:** - have (1)

#### Course prerequisites
> [LinkedIn Learning](https://www.linkedin.com/learning/react-testing-and-debugging/course-prerequesites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/course-prerequesites?u=76281980&t=0)** - [Instructor] As this course is focused on the exploration of tools for debugging and testing React applications, some experience with React is a must.
>
> **[0:08](https://www.linkedin.com/learning/react-testing-and-debugging/course-prerequesites?u=76281980&t=8)** If you aren't familiar with creating React components, using props, and importing modules, I'd suggest that you take a basic React course to learn the fundamentals.
>
> **[0:17](https://www.linkedin.com/learning/react-testing-and-debugging/course-prerequesites?u=76281980&t=17)** Also, experience with JavaScript is a must for this course, as this is the basis of a React programmer.
>
> **[0:24](https://www.linkedin.com/learning/react-testing-and-debugging/course-prerequesites?u=76281980&t=24)** Next, being familiar with Terminal commands and MPM isn't a must, but definitely will help you when we use these tools.
>
> **[0:32](https://www.linkedin.com/learning/react-testing-and-debugging/course-prerequesites?u=76281980&t=32)** As you'll see, I'm running on a PC, but you can follow along on a Mac as the tools work exactly the same on both platforms.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Env Vars:** mpm (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### Introduction to CoderPad
> [LinkedIn Learning](https://www.linkedin.com/learning/react-testing-and-debugging/instructions-for-coderpad-25725715?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/instructions-for-coderpad-25725715?u=76281980&t=0)** - [Instructor] In this course, you'll have an opportunity to be tested on the knowledge you'll gain throughout, and we're doing this through a series of coding challenges.
>
> **[0:09](https://www.linkedin.com/learning/react-testing-and-debugging/instructions-for-coderpad-25725715?u=76281980&t=9)** When you first open the coding challenge, you'll be presented with four areas, like this.
>
> **[0:15](https://www.linkedin.com/learning/react-testing-and-debugging/instructions-for-coderpad-25725715?u=76281980&t=15)** The top left gives you the specific instructions on what is the goal of the challenge, and what you need to accomplish.
>
> **[0:23](https://www.linkedin.com/learning/react-testing-and-debugging/instructions-for-coderpad-25725715?u=76281980&t=23)** The screen on the top right is where, in most cases, you'll have to add or change the code to make the test succeed, or render the component properly, which you can see on the bottom left here.
>
> **[0:35](https://www.linkedin.com/learning/react-testing-and-debugging/instructions-for-coderpad-25725715?u=76281980&t=35)** You can also see the Console output if you need to check it.
>
> **[0:39](https://www.linkedin.com/learning/react-testing-and-debugging/instructions-for-coderpad-25725715?u=76281980&t=39)** Finally, in the bottom right, you see the test code, which you might have to change or add new code in some exercises.
>
> **[0:47](https://www.linkedin.com/learning/react-testing-and-debugging/instructions-for-coderpad-25725715?u=76281980&t=47)** Just follow the comments and instructions to see where you need to change or add new code.
>
> **[0:52](https://www.linkedin.com/learning/react-testing-and-debugging/instructions-for-coderpad-25725715?u=76281980&t=52)** Once you're done updating, what you can do is Test my code to submit your code to finalize your test, like so.
>
> **[1:04](https://www.linkedin.com/learning/react-testing-and-debugging/instructions-for-coderpad-25725715?u=76281980&t=64)** So, right now, you can see that test pass here and those two tests that failed, so you need to still work on it.
>
> **[1:12](https://www.linkedin.com/learning/react-testing-and-debugging/instructions-for-coderpad-25725715?u=76281980&t=72)** So, go through the exercise, and good luck.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (1), finally, (1), pass (1)
> **CLI Commands:** make (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)


### 1. Setting Up

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Your test project
> [LinkedIn Learning](https://www.linkedin.com/learning/react-testing-and-debugging/your-test-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/your-test-project?u=76281980&t=0)** - [Instructor] If you took my course, [[From React to React Native]], the project we'll use in this course to test and debug will look familiar, as it's the same app.
>
> **[0:09](https://www.linkedin.com/learning/react-testing-and-debugging/your-test-project?u=76281980&t=9)** If you don't have access to the exercise files and didn't take the other course, no worries.
>
> **[0:14](https://www.linkedin.com/learning/react-testing-and-debugging/your-test-project?u=76281980&t=14)** You can pretty much take any project you're working on and apply the same concept we'll be exploring here.
>
> **[0:19](https://www.linkedin.com/learning/react-testing-and-debugging/your-test-project?u=76281980&t=19)** If you do have access to the exercise files you'll need to do the following steps in order to get this project up and running.
>
> **[0:25](https://www.linkedin.com/learning/react-testing-and-debugging/your-test-project?u=76281980&t=25)** So I am on my desktop, and I'm going to create a brand new folder right here.
>
> **[0:30](https://www.linkedin.com/learning/react-testing-and-debugging/your-test-project?u=76281980&t=30)** So right click and then create a folder.
>
> **[0:32](https://www.linkedin.com/learning/react-testing-and-debugging/your-test-project?u=76281980&t=32)** You can do the same on Mac and then call this testing.
>
> **[0:38](https://www.linkedin.com/learning/react-testing-and-debugging/your-test-project?u=76281980&t=38)** And then I'm going to go into the exercise files and then click on Resources and open that folder here as well.
>
> **[0:49](https://www.linkedin.com/learning/react-testing-and-debugging/your-test-project?u=76281980&t=49)** And basically copy everything that we have in the Resources folder.
>
> **[0:54](https://www.linkedin.com/learning/react-testing-and-debugging/your-test-project?u=76281980&t=54)** So copy that, so Ctrl + C on Windows, Command + C on Mac, and then paste it into this folder.
>
> **[1:04](https://www.linkedin.com/learning/react-testing-and-debugging/your-test-project?u=76281980&t=64)** Once you have this, all you have to do is open this in your favorite editor.
>
> **[1:08](https://www.linkedin.com/learning/react-testing-and-debugging/your-test-project?u=76281980&t=68)** In my case, I'm working with Visual Studio Code, so I'm going to right click and Open with Code.
>
> **[1:15](https://www.linkedin.com/learning/react-testing-and-debugging/your-test-project?u=76281980&t=75)** And if you're on a Mac, you can simply drag and drop that folder inside of Visual Studio Code.
>
> **[1:21](https://www.linkedin.com/learning/react-testing-and-debugging/your-test-project?u=76281980&t=81)** Once you're inside of Visual Studio Code, you can go ahead and open up a Terminal.
>
> **[1:26](https://www.linkedin.com/learning/react-testing-and-debugging/your-test-project?u=76281980&t=86)** So you can click on Terminal, and then New Terminal.
>
> **[1:31](https://www.linkedin.com/learning/react-testing-and-debugging/your-test-project?u=76281980&t=91)** And then make sure that you are in the root folder of that project.
>
> **[1:34](https://www.linkedin.com/learning/react-testing-and-debugging/your-test-project?u=76281980&t=94)** We're going to do npm install, or I, shortcut for install.
>
> **[1:40](https://www.linkedin.com/learning/react-testing-and-debugging/your-test-project?u=76281980&t=100)** Okay, so when you have all the dependencies installed, let's explore a little bit what this project is.
>
> **[1:44](https://www.linkedin.com/learning/react-testing-and-debugging/your-test-project?u=76281980&t=104)** So I'm going to minimize this a little bit.
>
> **[1:47](https://www.linkedin.com/learning/react-testing-and-debugging/your-test-project?u=76281980&t=107)** And then let's take a look at the source folder.
>
> **[1:50](https://www.linkedin.com/learning/react-testing-and-debugging/your-test-project?u=76281980&t=110)** So the source folder is where you have all the files.
>
> **[1:53](https://www.linkedin.com/learning/react-testing-and-debugging/your-test-project?u=76281980&t=113)** So you have the regular index, which is a React application, and then you have the index.tss.
>
> **[1:59](https://www.linkedin.com/learning/react-testing-and-debugging/your-test-project?u=76281980&t=119)** So in the data folder you're going to have a json file, which will have all the data that we're going to need to run this application, and we're going to have a static file as opposed to persist with a server or database.
>
> **[2:12](https://www.linkedin.com/learning/react-testing-and-debugging/your-test-project?u=76281980&t=132)** And then you have the components, and inside of the components you have listings, a grid, and a single.
>
> **[2:18](https://www.linkedin.com/learning/react-testing-and-debugging/your-test-project?u=76281980&t=138)** So basically inside of the app.js file, we run a grid of single items or single components, which we're going to see in a few seconds.
>
> **[2:27](https://www.linkedin.com/learning/react-testing-and-debugging/your-test-project?u=76281980&t=147)** I'm going to run the application and you'll see what I'm talking about.
>
> **[2:30](https://www.linkedin.com/learning/react-testing-and-debugging/your-test-project?u=76281980&t=150)** And this is pretty much standard React code that we're going to use to test and debug.
>
> **[2:35](https://www.linkedin.com/learning/react-testing-and-debugging/your-test-project?u=76281980&t=155)** So if we do npm start, this is the application that we are going to test and debug.
>
> **[2:47](https://www.linkedin.com/learning/react-testing-and-debugging/your-test-project?u=76281980&t=167)** So for your information, if you didn't take the course that I just referenced, this is a React application built from the ground up with Create React app CLI command.
>
> **[2:56](https://www.linkedin.com/learning/react-testing-and-debugging/your-test-project?u=76281980&t=176)** The data is a static json file created in the data folder as I explore earlier.
>
> **[3:02](https://www.linkedin.com/learning/react-testing-and-debugging/your-test-project?u=76281980&t=182)** Okay, so now we have our application properly set up and ready to go.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), static (2), this, (1), case, (1)
> **Tools:** visual studio (3), terminal (3)
> **Prerequisites:** install (2), you'll need (1), set up (1)
> **CLI Commands:** npm (2), make (1)
> **Exercise Files:** exercise files (3)
> **Definitions:** is a  (3)
> **UI Navigation:** click on (2)
> **File Paths:** app.js (1)

#### An overview of your toolset
> [LinkedIn Learning](https://www.linkedin.com/learning/react-testing-and-debugging/an-overview-of-your-toolset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/an-overview-of-your-toolset?u=76281980&t=0)** - [Instructor] Testing and debugging React applications involves multiple tools.
>
> **[0:05](https://www.linkedin.com/learning/react-testing-and-debugging/an-overview-of-your-toolset?u=76281980&t=5)** So I'll briefly introduce you to these as we install them over the course of the next few videos.
>
> **[0:10](https://www.linkedin.com/learning/react-testing-and-debugging/an-overview-of-your-toolset?u=76281980&t=10)** For any type of web development, our first tool of choice is the dev tools that comes with our own browser.
>
> **[0:17](https://www.linkedin.com/learning/react-testing-and-debugging/an-overview-of-your-toolset?u=76281980&t=17)** Whether you use Chrome, Safari, Firefox, or Edge, you have the tools needed to inspect your code, do performance checks, and more.
>
> **[0:26](https://www.linkedin.com/learning/react-testing-and-debugging/an-overview-of-your-toolset?u=76281980&t=26)** In this course, we'll specifically use Chrome's internal tools.
>
> **[0:29](https://www.linkedin.com/learning/react-testing-and-debugging/an-overview-of-your-toolset?u=76281980&t=29)** And I highly recommend that you use either Chrome or Firefox, as they offer solid performance and work with the extensions we'll use.
>
> **[0:38](https://www.linkedin.com/learning/react-testing-and-debugging/an-overview-of-your-toolset?u=76281980&t=38)** So as a developer, you'll probably use Chrome's developer tools.
>
> **[0:41](https://www.linkedin.com/learning/react-testing-and-debugging/an-overview-of-your-toolset?u=76281980&t=41)** But if not, you can access them on a Mac by doing Option-Command-I and on a Window, Control-Shift-I, like so.
>
> **[0:51](https://www.linkedin.com/learning/react-testing-and-debugging/an-overview-of-your-toolset?u=76281980&t=51)** And let me position this at the bottom.
>
> **[0:54](https://www.linkedin.com/learning/react-testing-and-debugging/an-overview-of-your-toolset?u=76281980&t=54)** So I'm going to click here and then position it at the bottom like so.
>
> **[0:58](https://www.linkedin.com/learning/react-testing-and-debugging/an-overview-of-your-toolset?u=76281980&t=58)** And just going to increase the screen in state for that.
>
> **[1:03](https://www.linkedin.com/learning/react-testing-and-debugging/an-overview-of-your-toolset?u=76281980&t=63)** And these are the elements that we're going to work with inside of this browser.
>
> **[1:07](https://www.linkedin.com/learning/react-testing-and-debugging/an-overview-of-your-toolset?u=76281980&t=67)** So we have the source code for that application.
>
> **[1:10](https://www.linkedin.com/learning/react-testing-and-debugging/an-overview-of-your-toolset?u=76281980&t=70)** We have the network, which is basically when we're trying to access elements inside of the application, the performance of the application, the memory use, and more related to development.
>
> **[1:24](https://www.linkedin.com/learning/react-testing-and-debugging/an-overview-of-your-toolset?u=76281980&t=84)** So this is the foundation of our tool set.
>
> **[1:27](https://www.linkedin.com/learning/react-testing-and-debugging/an-overview-of-your-toolset?u=76281980&t=87)** On top of this, we'll add an extension in the next video to help us inspect React components.

> [!info]- Semantic Content
>
> **Tools:** firefox (2), safari (1)
> **Code Keywords:** let (1), this, (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** source code (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### React Developer Tools
> [LinkedIn Learning](https://www.linkedin.com/learning/react-testing-and-debugging/react-developer-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/react-developer-tools?u=76281980&t=0)** - [Instructor] One of the first tools I go to when developing React components is the React Developer Tool.
>
> **[0:05](https://www.linkedin.com/learning/react-testing-and-debugging/react-developer-tools?u=76281980&t=5)** It's an extension available for Chrome, Firefox, and also as a standalone download.
>
> **[0:12](https://www.linkedin.com/learning/react-testing-and-debugging/react-developer-tools?u=76281980&t=12)** So when we were looking at the developer tool, you should've seen something that says Components and Profiler on my end but not on your end if you don't have the tool installed.
>
> **[0:21](https://www.linkedin.com/learning/react-testing-and-debugging/react-developer-tools?u=76281980&t=21)** So let's go ahead and take a look at where you can install it.
>
> **[0:24](https://www.linkedin.com/learning/react-testing-and-debugging/react-developer-tools?u=76281980&t=24)** So you can install the Chrome extension by going to the Chrome Web Store and then look for React Developer Tool.
>
> **[0:32](https://www.linkedin.com/learning/react-testing-and-debugging/react-developer-tools?u=76281980&t=32)** Once you find that, you can actually add it to your Chrome.
>
> **[0:35](https://www.linkedin.com/learning/react-testing-and-debugging/react-developer-tools?u=76281980&t=35)** As you can see, I already have it installed on my Chrome version.
>
> **[0:40](https://www.linkedin.com/learning/react-testing-and-debugging/react-developer-tools?u=76281980&t=40)** You can also find it for Firefox.
>
> **[0:43](https://www.linkedin.com/learning/react-testing-and-debugging/react-developer-tools?u=76281980&t=43)** Same thing, React Developer Tools. And then add it.
>
> **[0:46](https://www.linkedin.com/learning/react-testing-and-debugging/react-developer-tools?u=76281980&t=46)** And finally, if you don't use any of those browsers, you can install the react-devtools standalone and go to NPM and install this one here.
>
> **[0:57](https://www.linkedin.com/learning/react-testing-and-debugging/react-developer-tools?u=76281980&t=57)** Once you have it install, you're going to have the Components and the Profiler.
>
> **[1:01](https://www.linkedin.com/learning/react-testing-and-debugging/react-developer-tools?u=76281980&t=61)** The Profiler is basically something that gives you stats on your actual components and how your application is running.
>
> **[1:08](https://www.linkedin.com/learning/react-testing-and-debugging/react-developer-tools?u=76281980&t=68)** And the Components is where you can see your components.
>
> **[1:10](https://www.linkedin.com/learning/react-testing-and-debugging/react-developer-tools?u=76281980&t=70)** So if you click on Components, you're going to see that right now I have the first app component and then the grid.
>
> **[1:17](https://www.linkedin.com/learning/react-testing-and-debugging/react-developer-tools?u=76281980&t=77)** And as you can see, as I hover over these elements, you're going to see that they're also showing on my browser.
>
> **[1:25](https://www.linkedin.com/learning/react-testing-and-debugging/react-developer-tools?u=76281980&t=85)** So if we scroll over grid and then the single, you're going to see that each item that I hover over it is going to be a highlight.
>
> **[1:32](https://www.linkedin.com/learning/react-testing-and-debugging/react-developer-tools?u=76281980&t=92)** And you also see the props and the state and a lot of information about your application that is particular to React.
>
> **[1:40](https://www.linkedin.com/learning/react-testing-and-debugging/react-developer-tools?u=76281980&t=100)** So if you want to take a look at the state from the app, which is where the state resides, you're going to see that all of the elements of my state is there and I have all the props, which are then passed to the grid.
>
> **[1:51](https://www.linkedin.com/learning/react-testing-and-debugging/react-developer-tools?u=76281980&t=111)** And then you can see the props items are here.
>
> **[1:54](https://www.linkedin.com/learning/react-testing-and-debugging/react-developer-tools?u=76281980&t=114)** And then each item gets its own props.
>
> **[1:57](https://www.linkedin.com/learning/react-testing-and-debugging/react-developer-tools?u=76281980&t=117)** So all the items for that particular item is inside of that single key here.
>
> **[2:04](https://www.linkedin.com/learning/react-testing-and-debugging/react-developer-tools?u=76281980&t=124)** So with the React tool installed, we're ready to move on and explore Jest.

> [!info]- Semantic Content
>
> **Prerequisites:** install (5)
> **CLI Commands:** find (2), npm (1)
> **UI Navigation:** go to (2), click on (1)
> **Code Keywords:** let (1), finally, (1)
> **Tools:** firefox (2)
> **Env Vars:** npm (1)
> **Speakers:** - [instructor] (1)

#### Jest introduction
> [LinkedIn Learning](https://www.linkedin.com/learning/react-testing-and-debugging/jest-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/jest-introduction?u=76281980&t=0)** - [Instructor] The beauty of starting a React project with Create React App is that you get some very useful tools like Jest.
>
> **[0:07](https://www.linkedin.com/learning/react-testing-and-debugging/jest-introduction?u=76281980&t=7)** So, in other words, there's no installation needed as Jest comes pre-installed and ready to go.
>
> **[0:13](https://www.linkedin.com/learning/react-testing-and-debugging/jest-introduction?u=76281980&t=13)** It even has an example task, so let's take a look at it in action.
>
> **[0:18](https://www.linkedin.com/learning/react-testing-and-debugging/jest-introduction?u=76281980&t=18)** So if you go inside of the project that we just set up, and go into the components folder, you're going to find a file that says app.test.js.
>
> **[0:28](https://www.linkedin.com/learning/react-testing-and-debugging/jest-introduction?u=76281980&t=28)** And this is one test that's already inside of your application when you create a new application with React.
>
> **[0:35](https://www.linkedin.com/learning/react-testing-and-debugging/jest-introduction?u=76281980&t=35)** So this test is basically telling you that it renders without crashing, so that means the application's running without crashing.
>
> **[0:44](https://www.linkedin.com/learning/react-testing-and-debugging/jest-introduction?u=76281980&t=44)** So if you want to test this, you can stop the application by doing control C or command C on a Mac.
>
> **[0:51](https://www.linkedin.com/learning/react-testing-and-debugging/jest-introduction?u=76281980&t=51)** Here, let me just let me put more screen estate here, and then all you have to do is npm run test, and this is going to run the test command from your package.json file.
>
> **[1:04](https://www.linkedin.com/learning/react-testing-and-debugging/jest-introduction?u=76281980&t=64)** So if you look at the package.json file, we have a test script in here.
>
> **[1:09](https://www.linkedin.com/learning/react-testing-and-debugging/jest-introduction?u=76281980&t=69)** And it's going to run this command, so let's go ahead and do that.
>
> **[1:14](https://www.linkedin.com/learning/react-testing-and-debugging/jest-introduction?u=76281980&t=74)** And basically, this is what it gives you.
>
> **[1:16](https://www.linkedin.com/learning/react-testing-and-debugging/jest-introduction?u=76281980&t=76)** So it gives you the summary of your tests, so one test suite has passed.
>
> **[1:22](https://www.linkedin.com/learning/react-testing-and-debugging/jest-introduction?u=76281980&t=82)** This one here, so basically what it did, it ran the application and tested this, that it runs without crashing, so the application is actually running without crashing.
>
> **[1:32](https://www.linkedin.com/learning/react-testing-and-debugging/jest-introduction?u=76281980&t=92)** And then you have all these other options that we'll explore later.
>
> **[1:36](https://www.linkedin.com/learning/react-testing-and-debugging/jest-introduction?u=76281980&t=96)** So you can actually rerun the test again, quit the test, and so on, so forth.
>
> **[1:41](https://www.linkedin.com/learning/react-testing-and-debugging/jest-introduction?u=76281980&t=101)** And that's it; so you've got a very capable testing utility right out of the box when you use Create React App.
>
> **[1:48](https://www.linkedin.com/learning/react-testing-and-debugging/jest-introduction?u=76281980&t=108)** So let's move on to the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this, (2)
> **File Paths:** package.json (2), app.test.js (1)
> **CLI Commands:** find (1), npm (1)
> **Cross-References:** next video (1)
> **Definitions:** in other words (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Type checking with Flow
> [LinkedIn Learning](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow-2?u=76281980&t=0)** - [Narrator] Type checking gives us another tool to prevent bugs and find errors in our code.
>
> **[0:05](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow-2?u=76281980&t=5)** So, if you're not familiar with type checking, it allows us to define what type of values or variables, objects, and functions should accept.
>
> **[0:13](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow-2?u=76281980&t=13)** This prevents a lot of unexpected behaviors in our code where we'll be able to see why some of our code doesn't react to way it should, so, let's go ahead and install flow.
>
> **[0:23](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow-2?u=76281980&t=23)** So, I'm going to go back into VS code.
>
> **[0:26](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow-2?u=76281980&t=26)** And once I'm back into VS code, I'm going to open a terminal.
>
> **[0:30](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow-2?u=76281980&t=30)** You want to make sure you're in the root directory of the project.
>
> **[0:33](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow-2?u=76281980&t=33)** So, let's click on terminal, new terminal.
>
> **[0:36](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow-2?u=76281980&t=36)** And then the first thing we're going to do is install flow bin.
>
> **[0:39](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow-2?u=76281980&t=39)** So, let's do npm i, or short for install, flow-bin, and then save this as a dev dependency.
>
> **[0:49](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow-2?u=76281980&t=49)** So, let's do --save-dev like so.
>
> **[0:53](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow-2?u=76281980&t=53)** Once this is done, let's minimize our terminal for a second because we're going to go back to it.
>
> **[0:59](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow-2?u=76281980&t=59)** And then let's open the package.json file right here in the root directory.
>
> **[1:04](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow-2?u=76281980&t=64)** And you should see now, in the dev dependencies flow bin, like, so.
>
> **[1:08](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow-2?u=76281980&t=68)** So now, what we're going to do is add the script.
>
> **[1:10](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow-2?u=76281980&t=70)** So, whenever we do NPM run flow, it's going to run flow.
>
> **[1:15](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow-2?u=76281980&t=75)** So, let's go ahead and go on line 18, do a comma and an add flow as a script.
>
> **[1:22](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow-2?u=76281980&t=82)** So, it's basically going to run flow, like so perfect.
>
> **[1:27](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow-2?u=76281980&t=87)** So now, what we're going to do is initialize a file that we need in order to run flow.
>
> **[1:31](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow-2?u=76281980&t=91)** So, we're going to go back to our terminal and now that we have that script that we can use, we're going to do npm run flow and in it, so we can initialize it first, like, so.
>
> **[1:45](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow-2?u=76281980&t=105)** So, as you can see, I already have that file in my project, but if you don't have it, what you should see is a flow config file, that's going to show up right here.
>
> **[1:59](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow-2?u=76281980&t=119)** So now, in order to use flow, we need to add a little comment inside of a file that we want to check for types.
>
> **[2:06](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow-2?u=76281980&t=126)** So, the first thing we're going to do is go back to one of these files.
>
> **[2:10](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow-2?u=76281980&t=130)** So, the first one we're going to do is in App.js right here.
>
> **[2:14](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow-2?u=76281980&t=134)** And then at the top, we're going to add a comment, so, let's enter twice and then let's add a comment and then you can do @flow.
>
> **[2:25](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow-2?u=76281980&t=145)** So, what's going to happen next, when we run npm run flow, or basically flow, it's going to look for every file with this comment here and then check for types inside of that file.
>
> **[2:37](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow-2?u=76281980&t=157)** So, let's go ahead and save that file, like, so, and then let's go back into our terminal and then let's do npm run flow.
>
> **[2:49](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow-2?u=76281980&t=169)** So, if we executed that command before we did the flow, it would say no errors because there's no file that it's checking.
>
> **[2:56](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow-2?u=76281980&t=176)** So, if you want to remove it, you can actually remove it first like, so save the file and run flow.
>
> **[3:05](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow-2?u=76281980&t=185)** And now, as you can see, there's no errors.
>
> **[3:07](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow-2?u=76281980&t=187)** It had to do some compiling the first time, but now it's going to go a lot faster.
>
> **[3:11](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow-2?u=76281980&t=191)** So, let's go ahead and re-add that comment that we just did.
>
> **[3:14](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow-2?u=76281980&t=194)** So basically, going to do Ctrl + Z to undo or Cmnd + Z on a Mac, save that and then run that command again.
>
> **[3:24](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow-2?u=76281980&t=204)** And now, you're going to see that it actually checked some stuff and it found some errors.
>
> **[3:29](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow-2?u=76281980&t=209)** So, this is exactly what we expect, and as we actually go through flow, we're going to check what we have as errors and correct them.
>
> **[3:37](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow-2?u=76281980&t=217)** So, as you can see, we'll have some work to do later on, but that's the beauty of all these tools.
>
> **[3:41](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow-2?u=76281980&t=221)** We get great advice on how to fix it, so, let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14)
> **Tools:** terminal (6), vs code (2)
> **CLI Commands:** npm (5), find (1), make (1)
> **Prerequisites:** install (3)
> **File Paths:** package.json (1), app.js (1)
> **Cross-References:** go back to (2)
> **UI Navigation:** click on (1), open the (1)
> **Definitions:** short for (1), is a  (1)

#### Linting with ESLint
> [LinkedIn Learning](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=0)** - [Instructor] You can't talk about bugs or bad syntax prevention without talking about linters.
>
> **[0:05](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=5)** Linters are by far one of the best tools to help prevent bad code and syntax errors from finding their way into your app.
>
> **[0:12](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=12)** They also give you great tips about standards.
>
> **[0:15](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=15)** So let's go ahead and set up our linter with some rules.
>
> **[0:18](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=18)** I use Airbnb standards along with some rules for React.
>
> **[0:22](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=22)** They're very strict and conform to high standards as you'll see in a minute.
>
> **[0:26](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=26)** But all these warnings can help you becoming a better developer.
>
> **[0:30](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=30)** So the first thing you need to do if you're using VS Code is to have the extension that will allow you to see the errors inside of VS Code.
>
> **[0:38](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=38)** So you click on Extensions.
>
> **[0:40](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=40)** And then search for ESLint like so.
>
> **[0:43](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=43)** And then select the first one here.
>
> **[0:45](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=45)** It's by Dirk Baeumer, like so.
>
> **[0:47](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=47)** And then install this extension.
>
> **[0:49](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=49)** You may have to restart VS Code.
>
> **[0:52](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=52)** If that's the case, go ahead and do it.
>
> **[0:53](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=53)** And then follow along for the next steps.
>
> **[0:56](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=56)** So once you're done with this, let's close this and then go back to our project.
>
> **[1:00](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=60)** And I'm going to open components so we can take a look at a file once we have ESLint installed and initialize.
>
> **[1:06](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=66)** So the first thing we need to do and by the way, this step used to be a lot of manual entries, manual installations.
>
> **[1:12](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=72)** Now it's all automated for us.
>
> **[1:14](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=74)** So it's really efficient now.
>
> **[1:16](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=76)** So let's bring up a terminal.
>
> **[1:17](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=77)** Let's click on Terminal, New Terminal and then what we're going to do first is install ESLint globally.
>
> **[1:24](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=84)** So I'd like to have it globally because I'd like to use it on multiple projects.
>
> **[1:28](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=88)** Feel free to install it locally but I'm going to install it on my system.
>
> **[1:32](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=92)** So let's do npm i or install.
>
> **[1:36](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=96)** G for global.
>
> **[1:37](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=97)** And then eslint, like so.
>
> **[1:41](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=101)** Once you have that installed, you're ready to go with ESLint and initialize a new file.
>
> **[1:47](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=107)** But what we're going to do is use that initialize file and answer a few questions so it sets up everything for us and it installs the dependencies, so that's the easy way now.
>
> **[1:57](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=117)** So let's do eslint --init.
>
> **[2:04](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=124)** And what you want to do is select the third option because we want to actually enforce a code style, which is Airbnb.
>
> **[2:10](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=130)** So let's go ahead and do that.
>
> **[2:11](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=131)** So we're going to select the third one.
>
> **[2:14](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=134)** If you want to check for syntax only, you can select this one.
>
> **[2:17](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=137)** If you want to find problems, you can do this one but I'm going to enforce a code style as well, so let's select the third option.
>
> **[2:24](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=144)** Now, the first thing you need to select for this one is JavaScript modules and if you're using common JS as opposed to JavaScript modules, you can select that option.
>
> **[2:32](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=152)** We're using React but if you're using Vue.js or something else, you can select the different options.
>
> **[2:38](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=158)** We're not using TypeScript in this project but if you were, you can select yes, but on this case, we're selecting no.
>
> **[2:45](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=165)** And I'm going to select all for this.
>
> **[2:49](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=169)** And now we're selecting our style.
>
> **[2:51](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=171)** So use a popular style guide and what we want to use is the Airbnb.
>
> **[2:58](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=178)** So if you want to follow something else, you can follow the Google's way of linting but in this case, I'm going to follow Airbnb.
>
> **[3:06](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=186)** And then we want to set up the file as a JSON file.
>
> **[3:09](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=189)** So basically, this is the configuration file where we'll all the configurations afterwards.
>
> **[3:14](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=194)** I'm used to the JSON format, so this is what I'm going to select.
>
> **[3:19](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=199)** And then it's checking the dependencies that we need in order to run ESLint with these styles.
>
> **[3:25](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=205)** And you want to install them by saying yes.
>
> **[3:28](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=208)** Otherwise, you're going to have to do the manual process of installing these dependencies.
>
> **[3:32](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=212)** So I'm going to allow this process to install it by itself.
>
> **[3:36](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=216)** So once this is all done, you should see now a ESLint file.
>
> **[3:41](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=221)** So this is the configuration file that basically, this process initialized for us.
>
> **[3:46](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=226)** So if we close this and we'll take a look at what has been done for us, you can see that now we have React and Airbnb as the styles of linting that we're going to have in our project and a whole bunch of stuff that are dependencies for this to happen.
>
> **[4:01](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=241)** So if we close this, and then open any of the files, we're going to see now linting done automatically for us.
>
> **[4:10](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=250)** And as you scroll over this, you're going to see what exactly the rule that is being enforced.
>
> **[4:16](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=256)** So a quick note, the errors you see are specific to ESLint and won't break your code, unless there is an error that impacts the app.
>
> **[4:24](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=264)** ESLint looks for errors specific to industry best practices or company standards and also, rules that you've applied in your config file.
>
> **[4:34](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=274)** In the end, these rules are in place to help you become a better developer and write cleaner code.
>
> **[4:40](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=280)** So as you can see, I've been a bad boy with my code.
>
> **[4:44](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=284)** So as we work on our code over the course, we'll fix some of these.
>
> **[4:48](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=288)** So now that we've got all our tools ready, let's start doing some testing with Jest.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), case, (3), this, (3), else, (2), this. (1)
> **Prerequisites:** install (7), set up (2)
> **UI Navigation:** select the (5), click on (2)
> **Tools:** vs code (3), terminal (3)
> **CLI Commands:** npm (1), find (1)
> **Env Vars:** json (2)
> **File Paths:** vue.js (1)
> **Cross-References:** go back to (1)


### 2. Testing with Jest

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Test strings with matchers
> [LinkedIn Learning](https://www.linkedin.com/learning/react-testing-and-debugging/test-string-with-matchers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/test-string-with-matchers?u=76281980&t=0)** - [Instructor] So let's keep going with now a test for strings.
>
> **[0:03](https://www.linkedin.com/learning/react-testing-and-debugging/test-string-with-matchers?u=76281980&t=3)** So we're going to do again some tests in our Grid.test.js because this is one that actually includes the data for our courses.
>
> **[0:11](https://www.linkedin.com/learning/react-testing-and-debugging/test-string-with-matchers?u=76281980&t=11)** So let's go ahead and do two more tests that are related to strings.
>
> **[0:15](https://www.linkedin.com/learning/react-testing-and-debugging/test-string-with-matchers?u=76281980&t=15)** So what I'm going to do now is actually add a variable.
>
> **[0:18](https://www.linkedin.com/learning/react-testing-and-debugging/test-string-with-matchers?u=76281980&t=18)** So let's create a variable that will be dataTest which equals to data[0].title
>
> **[0:32](https://www.linkedin.com/learning/react-testing-and-debugging/test-string-with-matchers?u=76281980&t=32)** and if you want to know, what we're actually using is this.
>
> **[0:36](https://www.linkedin.com/learning/react-testing-and-debugging/test-string-with-matchers?u=76281980&t=36)** So let's go into courses.json, we're actually using position zero in our array, so basically this guy here, and the title is Building an App with ReactJS and MeteorJS.
>
> **[0:50](https://www.linkedin.com/learning/react-testing-and-debugging/test-string-with-matchers?u=76281980&t=50)** So if you want to check on the application as well you can actually go here.
>
> **[0:54](https://www.linkedin.com/learning/react-testing-and-debugging/test-string-with-matchers?u=76281980&t=54)** You're going to see that this is the first element in our application, so element zero in the array.
>
> **[1:00](https://www.linkedin.com/learning/react-testing-and-debugging/test-string-with-matchers?u=76281980&t=60)** So the title would be Building an App with ReactJS and MeteorJS.
>
> **[1:04](https://www.linkedin.com/learning/react-testing-and-debugging/test-string-with-matchers?u=76281980&t=64)** So you can see the application actually replicates what we just saw in their code.
>
> **[1:09](https://www.linkedin.com/learning/react-testing-and-debugging/test-string-with-matchers?u=76281980&t=69)** So let's go back to our code and now we have our tests running still so what we could do is use one of these functions to actually re-run it.
>
> **[1:18](https://www.linkedin.com/learning/react-testing-and-debugging/test-string-with-matchers?u=76281980&t=78)** So we can close the course.json and continue with our test.
>
> **[1:21](https://www.linkedin.com/learning/react-testing-and-debugging/test-string-with-matchers?u=76281980&t=81)** Now we have the title in this variable here so let's go ahead and test that string.
>
> **[1:28](https://www.linkedin.com/learning/react-testing-and-debugging/test-string-with-matchers?u=76281980&t=88)** So we can actually copy line five here but we're just going to change a few things.
>
> **[1:33](https://www.linkedin.com/learning/react-testing-and-debugging/test-string-with-matchers?u=76281980&t=93)** So let's use that, so paste that and the title of that test is going to change so there is a JS in this title.
>
> **[1:44](https://www.linkedin.com/learning/react-testing-and-debugging/test-string-with-matchers?u=76281980&t=104)** So we're going to look for JS inside of the title that we have in this variable.
>
> **[1:50](https://www.linkedin.com/learning/react-testing-and-debugging/test-string-with-matchers?u=76281980&t=110)** So what we're going to do is expect dataTest to match, and again, we're using a matcher, so toBe is a matcher as well, so toMatch and then we're going to insert this string here, so JS, like so.
>
> **[2:10](https://www.linkedin.com/learning/react-testing-and-debugging/test-string-with-matchers?u=76281980&t=130)** So basically what that means is that it's going to check inside of that variable if we have JS.
>
> **[2:16](https://www.linkedin.com/learning/react-testing-and-debugging/test-string-with-matchers?u=76281980&t=136)** So that should return true.
>
> **[2:18](https://www.linkedin.com/learning/react-testing-and-debugging/test-string-with-matchers?u=76281980&t=138)** So let's do another one.
>
> **[2:20](https://www.linkedin.com/learning/react-testing-and-debugging/test-string-with-matchers?u=76281980&t=140)** So let's copy that and paste it again and then we're going to test for React.
>
> **[2:26](https://www.linkedin.com/learning/react-testing-and-debugging/test-string-with-matchers?u=76281980&t=146)** So let's do this title, the title contains React.
>
> **[2:37](https://www.linkedin.com/learning/react-testing-and-debugging/test-string-with-matchers?u=76281980&t=157)** And now we can actually test a string with the matcher toContain.
>
> **[2:45](https://www.linkedin.com/learning/react-testing-and-debugging/test-string-with-matchers?u=76281980&t=165)** And again, if you want to know what are the matchers that exist, you can go to the JS documentation and see all the matchers that are available to you.
>
> **[2:53](https://www.linkedin.com/learning/react-testing-and-debugging/test-string-with-matchers?u=76281980&t=173)** And then let's enter something that's not in there, so let's do Angular so it returns false and then we'll do React so our tests pass.
>
> **[3:01](https://www.linkedin.com/learning/react-testing-and-debugging/test-string-with-matchers?u=76281980&t=181)** So we have Angular for now so this is not what we're looking for but I just want it to return false so you can see it.
>
> **[3:09](https://www.linkedin.com/learning/react-testing-and-debugging/test-string-with-matchers?u=76281980&t=189)** So let's save that and now our test suite automatically re-runs and it says 1 failed, 4 passed.
>
> **[3:17](https://www.linkedin.com/learning/react-testing-and-debugging/test-string-with-matchers?u=76281980&t=197)** So let's go and take a look which one failed.
>
> **[3:20](https://www.linkedin.com/learning/react-testing-and-debugging/test-string-with-matchers?u=76281980&t=200)** As expected, this expected Angular but it doesn't find Angular in the title here therefore it's false.
>
> **[3:28](https://www.linkedin.com/learning/react-testing-and-debugging/test-string-with-matchers?u=76281980&t=208)** So if we change this to React, like so, and save again, our test suite re-runs again and everything is passed.
>
> **[3:40](https://www.linkedin.com/learning/react-testing-and-debugging/test-string-with-matchers?u=76281980&t=220)** So if we had an error we would see the errors, but now everything is passed so we're good to go.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), this. (1), continue (1), match, (1), pass (1)
> **Code Identifiers:** datatest (2), tobe (1), tomatch (1), tocontain (1)
> **File Paths:** grid.test.js (1), courses.json (1), course.json (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Test numbers with matchers
> [LinkedIn Learning](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=0)** - [Instructor] Now, let's move on to Jest.
>
> **[0:02](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=2)** Jest brings dozens of methods to support most of our testing needs.
>
> **[0:06](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=6)** So, we'll start by using a few methods to test numbers within our application.
>
> **[0:11](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=11)** So, the first thing you're going to do is make sure that your application is running.
>
> **[0:15](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=15)** So, we're going to do npm start, and what we're going to do now is make sure that we know or understand how many elements that we have in our course here, so we can test the amount of data that we have in our application.
>
> **[0:28](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=28)** So, what we're going to do is bring up the developer tools, like so.
>
> **[0:32](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=32)** So, you can click on the three dots on the right corner, More tools, and then Developer tools, or you can use Control + Shift + I, or Command + Shift + I on a Mac to bring up the developer tools.
>
> **[0:43](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=43)** And now, we're going to go into the components.
>
> **[0:46](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=46)** And, as we can see, we have 12 elements in our grid.
>
> **[0:51](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=51)** So, if you want to check the actual state, you can click on the app and take a look here, and you're going to see we have 12 elements, if we count the zero as well.
>
> **[1:00](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=60)** So, let's do a test where we're going to test to the amount of elements that we have in our application.
>
> **[1:05](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=65)** So, I'm going to minimize this, and then let's stop the application by doing Command + C on a Mac or Control + C on Windows, and then let's go inside of our listings folder inside of our components, and then we have our Grid code here.
>
> **[1:21](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=81)** So, what we're going to do is add a test for the grid.
>
> **[1:24](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=84)** So, let's click on the listings folder and create a new file that we're going to call Grid.test.js, like so.
>
> **[1:37](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=97)** And inside of that file, so let me minimize my terminal for now, we're going to first import the data because we need the data that we have inside of our data folder here, so all the courses here.
>
> **[1:49](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=109)** So, we need to import that in order to test.
>
> **[1:52](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=112)** So, we're going to do this from ../.., and now we're back into our root folder, and we're going to go into data/, and then bring up the courses.json, like so.
>
> **[2:08](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=128)** And then, we're going to create a variable that will load the number of data inside of that file.
>
> **[2:14](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=134)** So, we're going to do numItems equals to data.length, like so.
>
> **[2:21](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=141)** So, it's going to count the amount of things that we have in our courses.json.
>
> **[2:28](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=148)** And then, we're going to test this element.
>
> **[2:31](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=151)** So, test one, we're going to call, Number of items should equal 12.
>
> **[2:40](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=160)** So, basically, we're putting a title to that test.
>
> **[2:43](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=163)** So, once we run the test, we're going to see that title show up.
>
> **[2:46](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=166)** Then, comma and then run the function for that test like so.
>
> **[2:51](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=171)** And this is, again, ES-5 and above, so expect numItems.
>
> **[2:58](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=178)** So, basically, the variable that we have here, expect it toBe, which is basically a function that allows us to check to a specific element.
>
> **[3:09](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=189)** In this case, 11.
>
> **[3:11](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=191)** So, this should return false because we don't have 11 items.
>
> **[3:15](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=195)** We have 12.
>
> **[3:17](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=197)** And then, we're going to do exactly the same test, but one test that should run true.
>
> **[3:23](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=203)** And then, expect the number of items to be greater than 12.
>
> **[3:36](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=216)** And, again, boom, boom, boom, expect this numItem, and then we're going to change this function toBeGreaterThanOrEqual to 12.
>
> **[3:55](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=235)** So, this should return true because it's to be greater than or equal.
>
> **[4:03](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=243)** And we should say, than or equal to 12.
>
> **[4:08](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=248)** So, let's make sure we titled this properly.
>
> **[4:10](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=250)** So, this should return false and this should return true.
>
> **[4:14](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=254)** So, let's save all this, and let's go in here and run our test.
>
> **[4:21](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=261)** So, let's go ahead and run our test by doing npm test.
>
> **[4:26](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=266)** And I'm going to bring this up here, and you're going to see the results of our test.
>
> **[4:33](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=273)** So, as expected, one failed and one passed.
>
> **[4:37](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=277)** So, if we take a look at what actually failed, is this one here, so the number of items 12, which is the name of the test, expected to be 11, but received 12.
>
> **[4:48](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=288)** So, as you can see, in our code, we expected it to be 11, and even our title was a little bit misleading.
>
> **[4:55](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=295)** So, right now, to have this test true, we would need to change it to 12.
>
> **[4:59](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=299)** So, let's go ahead and do that.
>
> **[5:02](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=302)** So, I'm going to, basically, go into my code on line six here and change this to 12, like so.
>
> **[5:08](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=308)** Save it, and then now the test are going to pass.
>
> **[5:14](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=314)** Both of them.
>
> **[5:15](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=315)** And if you want to make sure, you get the report as well, you can just exit out of that by doing Control + C, or Command + C on a Mac, and then doing npm test again.
>
> **[5:27](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=327)** And now, you're seeing that test suite two passed, two total, and then the number of tests.
>
> **[5:32](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=332)** We have another test that I showed you on the App.tests.js, which is, basically, rendering the application, so that's a third test that has passed.
>
> **[5:41](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=341)** So, as you can see, matchers are great to test multiple assumptions around numbers.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), function (3), this, (2), from . (1), case, (1)
> **CLI Commands:** make (4), npm (3)
> **Code Identifiers:** numitems (2), tobe (1), numitem (1), tobegreaterthanorequal (1)
> **File Paths:** courses.json (2), grid.test.js (1), app.tests.js (1)
> **UI Navigation:** click on (3)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### Solution: Test numbers with matchers
> [LinkedIn Learning](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-numbers-with-matchers-25724704?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-numbers-with-matchers-25724704?u=76281980&t=0)** - [Instructor] Okay, so let's go ahead and show you the solution for this particular challenge here.
>
> **[0:11](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-numbers-with-matchers-25724704?u=76281980&t=11)** So what I'm going to do is just minimize this here, you know what needs to happen.
>
> **[0:16](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-numbers-with-matchers-25724704?u=76281980&t=16)** So there's three things that needs to happen here.
>
> **[0:19](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-numbers-with-matchers-25724704?u=76281980&t=19)** So we have three tests, one of which will actually succeed right now 'cause there's no code in it yet.
>
> **[0:26](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-numbers-with-matchers-25724704?u=76281980&t=26)** So it will succeed.
>
> **[0:28](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-numbers-with-matchers-25724704?u=76281980&t=28)** Those other two I want you to start getting familiar with reading tests with Jest.
>
> **[0:33](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-numbers-with-matchers-25724704?u=76281980&t=33)** If you've never done any testing with Jest this is a good exercise for you, you're going to start being more familiar with it and you'll be on your way to be a testing master.
>
> **[0:43](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-numbers-with-matchers-25724704?u=76281980&t=43)** So the first thing that we check here is the array.
>
> **[0:48](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-numbers-with-matchers-25724704?u=76281980&t=48)** And we are checking position, the second position.
>
> **[0:51](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-numbers-with-matchers-25724704?u=76281980&t=51)** So one is actually the second position, 0, 1, 2, 3, 0, 1, 2, 3 in the array..
>
> **[0:57](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-numbers-with-matchers-25724704?u=76281980&t=57)** We're actually checking the second position and we're saying this number should be even.
>
> **[1:02](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-numbers-with-matchers-25724704?u=76281980&t=62)** That's not true. 'cause right now it's odd.
>
> **[1:04](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-numbers-with-matchers-25724704?u=76281980&t=64)** And then we're doing the same thing at position three, which is the fourth number here.
>
> **[1:10](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-numbers-with-matchers-25724704?u=76281980&t=70)** And we're saying that this should be odd.
>
> **[1:12](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-numbers-with-matchers-25724704?u=76281980&t=72)** So all of this should fail and then the first test should actually pass because there's no code.
>
> **[1:17](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-numbers-with-matchers-25724704?u=76281980&t=77)** So let's go ahead and test this.
>
> **[1:19](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-numbers-with-matchers-25724704?u=76281980&t=79)** Test fail, test fail, and test pass.
>
> **[1:22](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-numbers-with-matchers-25724704?u=76281980&t=82)** Number 10 is the right, because there's no code here.
>
> **[1:24](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-numbers-with-matchers-25724704?u=76281980&t=84)** Okay, so let's go ahead and change these things by, first of all, fixing those two.
>
> **[1:30](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-numbers-with-matchers-25724704?u=76281980&t=90)** So position one, which is here, should be an even number.
>
> **[1:35](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-numbers-with-matchers-25724704?u=76281980&t=95)** So I'm going to change this to four.
>
> **[1:39](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-numbers-with-matchers-25724704?u=76281980&t=99)** And then the last number should be basically an odd number.
>
> **[1:45](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-numbers-with-matchers-25724704?u=76281980&t=105)** So I'm going to put 11.
>
> **[1:47](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-numbers-with-matchers-25724704?u=76281980&t=107)** But what we'd like to do here is find number ten in the array.
>
> **[1:55](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-numbers-with-matchers-25724704?u=76281980&t=115)** So what we're going to do is actually start writing some code for a test.
>
> **[1:59](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-numbers-with-matchers-25724704?u=76281980&t=119)** So what I'm going to do is, and if you looked into the documentation, you should have written something along these lines.
>
> **[2:06](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-numbers-with-matchers-25724704?u=76281980&t=126)** So expect and were to pass numbers and we're going to pass the second one, which is the third one.
>
> **[2:18](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-numbers-with-matchers-25724704?u=76281980&t=138)** So we're passing number two, which is this number in the array.
>
> **[2:23](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-numbers-with-matchers-25724704?u=76281980&t=143)** And then we're going to say this number we expect it to be ten.
>
> **[2:29](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-numbers-with-matchers-25724704?u=76281980&t=149)** So we're passing an integer here.
>
> **[2:32](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-numbers-with-matchers-25724704?u=76281980&t=152)** So basically that should tell the test that we should have number ten at position number two.
>
> **[2:40](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-numbers-with-matchers-25724704?u=76281980&t=160)** So if we run that test right now, it's going to say Uhuh wrong.
>
> **[2:43](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-numbers-with-matchers-25724704?u=76281980&t=163)** The other two tests should pass, but this one doesn't because it's number eight.
>
> **[2:50](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-numbers-with-matchers-25724704?u=76281980&t=170)** So let's go ahead and change this to number ten.
>
> **[2:53](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-numbers-with-matchers-25724704?u=76281980&t=173)** And just want to make sure that my syntax is all good here.
>
> **[2:56](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-numbers-with-matchers-25724704?u=76281980&t=176)** Yes.
>
> **[2:57](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-numbers-with-matchers-25724704?u=76281980&t=177)** And then test my code and then all test have passed.
>
> **[3:03](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-numbers-with-matchers-25724704?u=76281980&t=183)** So that's basically what I was looking for in this particular challenge.
>
> **[3:08](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-numbers-with-matchers-25724704?u=76281980&t=188)** I hope you had fun researching a little bit of Jest if you're not familiar with it.
>
> **[3:12](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-numbers-with-matchers-25724704?u=76281980&t=192)** So this is a good starting point to help you understand what Jest can do.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (5), let (4), this. (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (2)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Test arrays and objects with matchers
> [LinkedIn Learning](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=0)** - [Instructor] Often you'll work with arrays and objects in your data, and you'll need to test various scenarios related to these types.
>
> **[0:07](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=7)** Jest offers a few specific object and array methods, which you can use in combination with other methods.
>
> **[0:12](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=12)** Let's take a look at how to use them.
>
> **[0:15](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=15)** So first, I'm going to go back into my Grid.test.js inside of my listing folders, inside of components.
>
> **[0:22](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=22)** And what I'm going to do first before writing any code or testing code, I'm going to create an array.
>
> **[0:29](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=29)** Let's go ahead and create that.
>
> **[0:30](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=30)** So, I'm going to put some notes here, so this is Arrays, and then what I'm going to do is create an array.
>
> **[0:36](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=36)** So, let's go ahead and create and array called data2.
>
> **[0:41](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=41)** And we're going to pass inside of that array two titles, so two strings.
>
> **[0:45](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=45)** So, one is going to be React Native, and the other one is going to be React, like so.
>
> **[0:51](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=51)** And then, we're going to start testing.
>
> **[0:54](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=54)** So, basically, one of the methods that we can use for arrays is to use arrayContaining as a method, and let's go ahead and do that.
>
> **[1:03](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=63)** So, what I'm going to do is go ahead and do like before, so let's go ahead and copy that here.
>
> **[1:08](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=68)** So, copy line 19 through 21, and then paste it here like so, and then again like before, we're going to add a title for this test, so we can take a look at what tests are failing when they actually fail, and we're going to call this one, The list of courses contains, or you can do mentions, whatever works for you, React Native and React.
>
> **[1:37](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=97)** And then, again, we're going to do a function like so, and then we're going to change a few things here.
>
> **[1:41](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=101)** So, let me just remove everything here and just keep expect, like so.
>
> **[1:51](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=111)** And then, we're going to do expect, and then we're going to do an array inside of it, or you could actually pass this array here, so we could do that as well, expect data2, and then, we're going to do .toEqual, and then in between that method, we're going to do expect.arrayContaining, and then data2.
>
> **[2:25](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=145)** So, what's going to happen?
>
> **[2:26](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=146)** This is going to return true whatever it is that happens here.
>
> **[2:30](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=150)** Because what's happening here, it's taking the data to list, and it expects this to equal to this arrayContaining the same thing.
>
> **[2:40](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=160)** So, let's make sure that we do something different here in the data2.
>
> **[2:43](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=163)** So, what we're going to do is insert our own array in here.
>
> **[2:46](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=166)** So, we want to, basically, mention what are the elements that should be part of that array, so that when it actually test to it, it actually contains these things.
>
> **[2:57](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=177)** So, let's go and do React Native, and then do React, and then add a third thing like MeteorJS, like so.
>
> **[3:11](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=191)** So, with this test, it expects to at least contain these elements inside of this array.
>
> **[3:19](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=199)** So, this in turn should return true.
>
> **[3:21](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=201)** All right, so, now, let's do a similar test for objects.
>
> **[3:25](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=205)** So, we're going to do an Objects section here because most often you're going to work with arrays or objects when you have data.
>
> **[3:32](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=212)** And before we start talking about what tests we're going to do, just be mindful that we're using an object from this course list on json.
>
> **[3:41](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=221)** So, this is an object, so we'll be able to work with this.
>
> **[3:44](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=224)** So, we're going to, basically, do as usual.
>
> **[3:48](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=228)** So, let's go ahead and copy what we've done here.
>
> **[3:50](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=230)** So, let's copy that, and then paste it, and then call the title here.
>
> **[3:56](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=236)** So, we're going to call this, The first course to have a property title.
>
> **[4:06](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=246)** And then, let's go ahead and remove this.
>
> **[4:09](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=249)** So, we expect data at position zero to have a property.
>
> **[4:16](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=256)** So, let's go and remove that.
>
> **[4:18](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=258)** So, toHaveProperty.
>
> **[4:24](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=264)** So, basically, we're checking the properties that are a part of this list.
>
> **[4:29](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=269)** So, let's go back to our data, and then open up the courses.json, and the properties are these here, so the id, title, category, so on, so forth.
>
> **[4:38](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=278)** So, at position one of this array, so this element here, we expect to have a property of, and then let's just add what we expect, title, and that would return true.
>
> **[4:54](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=294)** So, if I wrote anything else but any of these elements, it would return false.
>
> **[5:00](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=300)** All right, so let's go ahead and copy this test, and we're going to do now the exact same test, and make sure that we can pass a value.
>
> **[5:07](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=307)** So, we can also pass a property, but also the value that's expected from that property.
>
> **[5:12](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=312)** So, for example, if we look at courses.json, and we have 31,266 in the views properties.
>
> **[5:20](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=320)** So, let's go ahead and use that.
>
> **[5:22](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=322)** So, I'm going to copy that number here, like so, and then I'm going to write a brand new function.
>
> **[5:29](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=329)** And, before I do that, I just realized that I said Proterty and not Property.
>
> **[5:33](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=333)** Let's change that, and let's copy the value before I copy the testing here.
>
> **[5:38](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=338)** So, I'm going to copy the testing, and paste it below.
>
> **[5:44](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=344)** And it's the same test, so let's also change that typo here.
>
> **[5:49](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=349)** And we're going to change this to, The first course to have a property title and value of 31,266.
>
> **[6:03](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=363)** And then, what we're going to do is, in this test here, we can pass a second argument in this method, and this is going to be the value we're expecting, so 31,266 like so.
>
> **[6:19](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=379)** And then, let's make sure that we remove that code because it's going to break our application, save this, and then bring up a terminal, and let's make sure we're in the root.
>
> **[6:31](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=391)** We are, and now we can do npm run test.
>
> **[6:37](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=397)** But, as you can see, our test has failed, and why is that?
>
> **[6:42](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=402)** This is the reason.
>
> **[6:43](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=403)** So, if we look back into our code, I did this on purpose, I didn't change this to views, I left title.
>
> **[6:50](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=410)** So, title is actually, Building an App with React and MeteorJS.
>
> **[6:54](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=414)** It's not 31,266.
>
> **[6:57](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=417)** Now, if we change this to views like so, now all of our tests has passed.
>
> **[7:04](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=424)** So, Jest has several other methods you can use in various ways and combinations.
>
> **[7:08](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=428)** So, let me show you the page in question.
>
> **[7:11](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=431)** And if you go to [jestjs.io/docs/english/expect](https://jestjs.io/docs/english/expect), you're going to get all the methods that you can use for matchers.
>
> **[7:21](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=441)** So, these are really good methods that you can use to test any assumptions, or anything that you want to test with strings, numbers, arrays, and objects.

> [!info]- Semantic Content
>
> **Code Keywords:** let (23), pass (5), function (2), this. (2), this, (2)
> **CLI Commands:** make (4), npm (1)
> **Code Identifiers:** arraycontaining (3), toequal (1), tohaveproperty (1)
> **File Paths:** courses.json (2), grid.test.js (1)
> **Prerequisites:** you'll need (1), before we start (1)
> **URLs:** [jestjs.io](https://jestjs.io) (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)

#### Solution: Test object with matchers
> [LinkedIn Learning](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-object-with-matchers-25726643?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-object-with-matchers-25726643?u=76281980&t=0)** - [Instructor] Okay, so let's discuss the solution for this coding challenge.
>
> **[0:10](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-object-with-matchers-25726643?u=76281980&t=10)** So I'm not going to go through the instructions.
>
> **[0:12](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-object-with-matchers-25726643?u=76281980&t=12)** I think it's a good exercise to actually go through the test code here and read them to understand what we're looking for.
>
> **[0:21](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-object-with-matchers-25726643?u=76281980&t=21)** So basically the two tests that we're actually looking for, and what needs to be updated, is one, we actually need to make sure that when we are rendering here, we're actually seeing the name and we're seeing the email, so the very first fix that we have to do is there's fixes in the test code too, but there are a fix that we need to do in here 'cause right now we're hard coding unknown.
>
> **[0:49](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-object-with-matchers-25726643?u=76281980&t=49)** We need to pass the actual user.
>
> **[0:51](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-object-with-matchers-25726643?u=76281980&t=51)** So the user here is passed, but not used anywhere in the component.
>
> **[0:55](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-object-with-matchers-25726643?u=76281980&t=55)** So let's go ahead and do that.
>
> **[0:57](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-object-with-matchers-25726643?u=76281980&t=57)** That's the very first fix.
>
> **[0:59](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-object-with-matchers-25726643?u=76281980&t=59)** So we need to pass the user name.
>
> **[1:02](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-object-with-matchers-25726643?u=76281980&t=62)** So if we go in here for the default user, you see we're passing a name, we're passing an email, we could also pass the idea, but we're not really looking for this.
>
> **[1:13](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-object-with-matchers-25726643?u=76281980&t=73)** Okay, so now this one here, we need to pass the user.email, basically.
>
> **[1:22](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-object-with-matchers-25726643?u=76281980&t=82)** Same thing like so.
>
> **[1:25](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-object-with-matchers-25726643?u=76281980&t=85)** So now, our test would pass, but the problem is that our test are wrong.
>
> **[1:30](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-object-with-matchers-25726643?u=76281980&t=90)** We need to fix our test as well.
>
> **[1:33](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-object-with-matchers-25726643?u=76281980&t=93)** So what do we need to fix here?
>
> **[1:35](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-object-with-matchers-25726643?u=76281980&t=95)** So same thing here, we have to dynamically pass something in our test, and right now we expect to see on the screen, and we're getting the text to be in the document to be the correct name and email, and then the app to render properly.
>
> **[1:52](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-object-with-matchers-25726643?u=76281980&t=112)** So what we need to do those two tests to actually pass is to add a few things, so basically, it's fairly simple what we need to to do here is basically pass, so we're passing a default user, so default user, and we need to pass the name, and we need to do the exact same thing here.
>
> **[2:18](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-object-with-matchers-25726643?u=76281980&t=138)** This is not very complicated, but I wanted you to look at various examples of tests with text so you understand what is possible, what you can do, and get more experience with this particular framework.
>
> **[2:34](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-object-with-matchers-25726643?u=76281980&t=154)** And it was the same thing here.
>
> **[2:39](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-object-with-matchers-25726643?u=76281980&t=159)** There you go.
>
> **[2:42](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-object-with-matchers-25726643?u=76281980&t=162)** Default user.
>
> **[2:47](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-object-with-matchers-25726643?u=76281980&t=167)** There you go.
>
> **[2:49](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-object-with-matchers-25726643?u=76281980&t=169)** So now that we have fixed all this just running Test My Code, we'll go and do all the tests, and all the tests have passed, so renders the correct username and email and then the app renders properly.
>
> **[3:05](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-object-with-matchers-25726643?u=76281980&t=185)** So this was what was expected.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (9), let (2), for. (1), for, (1), this. (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Code coverage reports
> [LinkedIn Learning](https://www.linkedin.com/learning/react-testing-and-debugging/code-coverage-reports?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/code-coverage-reports?u=76281980&t=0)** - [Instructor] As you build your application, it'll be hard to track which file have tests.
>
> **[0:04](https://www.linkedin.com/learning/react-testing-and-debugging/code-coverage-reports?u=76281980&t=4)** And this is where a coverage report comes handy.
>
> **[0:07](https://www.linkedin.com/learning/react-testing-and-debugging/code-coverage-reports?u=76281980&t=7)** Let's explore where that is.
>
> **[0:09](https://www.linkedin.com/learning/react-testing-and-debugging/code-coverage-reports?u=76281980&t=9)** So before we do anything, I just want to remove that test here so we can have a report that has some failure or things that we haven't covered yet, so I'm going to comment all this code and save it like so.
>
> **[0:22](https://www.linkedin.com/learning/react-testing-and-debugging/code-coverage-reports?u=76281980&t=22)** And then I'm going to go into the package.json file and then create a brand new script.
>
> **[0:27](https://www.linkedin.com/learning/react-testing-and-debugging/code-coverage-reports?u=76281980&t=27)** So let's go ahead and after test, let's go and create a brand new script, and I'm going to call this one coverage.
>
> **[0:36](https://www.linkedin.com/learning/react-testing-and-debugging/code-coverage-reports?u=76281980&t=36)** And it's going to be npm run test dash dash, and then dash dash coverage.
>
> **[0:46](https://www.linkedin.com/learning/react-testing-and-debugging/code-coverage-reports?u=76281980&t=46)** So this will run the test as well as the coverage, and then let's save this.
>
> **[0:54](https://www.linkedin.com/learning/react-testing-and-debugging/code-coverage-reports?u=76281980&t=54)** And you can close this file if you want, so as you can see right now, we're not doing a test for the whole applications.
>
> **[0:59](https://www.linkedin.com/learning/react-testing-and-debugging/code-coverage-reports?u=76281980&t=59)** We're not taking a snapshot of the application, so let's go and open up a terminal, so we're going to click on terminal, new terminal.
>
> **[1:07](https://www.linkedin.com/learning/react-testing-and-debugging/code-coverage-reports?u=76281980&t=67)** And then let's do npm run coverage, which is the script that we're going to run.
>
> **[1:12](https://www.linkedin.com/learning/react-testing-and-debugging/code-coverage-reports?u=76281980&t=72)** And this calls this script here.
>
> **[1:19](https://www.linkedin.com/learning/react-testing-and-debugging/code-coverage-reports?u=76281980&t=79)** Okay, perfect, so let's hit return on this, and now it's going to run our test and it has given us also coverage, so let's go all the way up here and scroll up, and right now, we have zero coverage in the statements.
>
> **[1:38](https://www.linkedin.com/learning/react-testing-and-debugging/code-coverage-reports?u=76281980&t=98)** In the branch, we have some coverage.
>
> **[1:40](https://www.linkedin.com/learning/react-testing-and-debugging/code-coverage-reports?u=76281980&t=100)** In the functions, we have 100 percent coverage of the index here; we don't have any other coverage of the other functions.
>
> **[1:47](https://www.linkedin.com/learning/react-testing-and-debugging/code-coverage-reports?u=76281980&t=107)** So let's change that.
>
> **[1:48](https://www.linkedin.com/learning/react-testing-and-debugging/code-coverage-reports?u=76281980&t=108)** So the first thing we're going to do is uncomment that little text here so let's uncomment that and then save.
>
> **[1:59](https://www.linkedin.com/learning/react-testing-and-debugging/code-coverage-reports?u=76281980&t=119)** And then our test is going to be run again and now, as you can see, we have a better coverage test.
>
> **[2:05](https://www.linkedin.com/learning/react-testing-and-debugging/code-coverage-reports?u=76281980&t=125)** So now, because we're running basically a snapshot of our UI, we have the app.js grid and single that has been covered by this particular coverage.
>
> **[2:16](https://www.linkedin.com/learning/react-testing-and-debugging/code-coverage-reports?u=76281980&t=136)** So how to read this coverage report is basically when you see the statement side here, this is basically the statement coverage, so as each statement in the program being executed, then the branch side is how each brand of each control structure has been executed, so for example, for an if statement, have both the true and false have been executed?
>
> **[2:41](https://www.linkedin.com/learning/react-testing-and-debugging/code-coverage-reports?u=76281980&t=161)** So basically, has every edge in the program been executed?
>
> **[2:45](https://www.linkedin.com/learning/react-testing-and-debugging/code-coverage-reports?u=76281980&t=165)** Now the function is a function coverage, so as each function in the program been called, and you can see that that's not the case, and then the lines, has each executable line in the source file has been executed?
>
> **[2:59](https://www.linkedin.com/learning/react-testing-and-debugging/code-coverage-reports?u=76281980&t=179)** So these are all the things that you need to take a look at when you're doing a coverage report.
>
> **[3:04](https://www.linkedin.com/learning/react-testing-and-debugging/code-coverage-reports?u=76281980&t=184)** And as you go through each file, you need to make sure that you are looking at these elements here, and then validate that each of these elements have been executed properly.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), function (3), this. (1), this, (1), case, (1)
> **CLI Commands:** npm (2), make (1)
> **Tools:** terminal (3)
> **File Paths:** package.json (1), app.js (1)
> **UI Navigation:** click on (1), scroll up (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Snapshot testing with Jest
> [LinkedIn Learning](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=0)** - [Instructor] Jest snapshots allow us to test a UI at different points in time and prevent any unexpected changes.
>
> **[0:06](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=6)** When change happens, either intentionally or not, our tests with throw an error to let us know.
>
> **[0:12](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=12)** This way we can decide whether to update the snapshot or look into why the snapshot changed.
>
> **[0:17](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=17)** Jest accomplishes this because it renders our component into a JSON file.
>
> **[0:23](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=23)** And then takes a snapshot of this file.
>
> **[0:25](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=25)** Then whenever we run our test, Jest compares the snapshot with the latest rendered output.
>
> **[0:31](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=31)** If there is any difference between them, we get notified.
>
> **[0:35](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=35)** So let's first install the package, then we'll refactor our app test to do the snapshots.
>
> **[0:40](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=40)** So let's bring up a terminal inside of VS Code, so I'm going to click on Terminal, New Terminal.
>
> **[0:46](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=46)** And then I'm going to do npm i, which is short for install react-test-renderer like so.
>
> **[0:58](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=58)** Once this is installed, you can go ahead and close the terminal and then let's bring up App.test.js, which is in the components folder.
>
> **[1:06](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=66)** So I'm first going to import the renderer.
>
> **[1:10](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=70)** So let's go ahead and do that.
>
> **[1:12](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=72)** So I don't need to have ReactDOM anymore, so let's go ahead and just import renderer from react-test-renderer like so.
>
> **[1:24](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=84)** And then we're going to do a test here.
>
> **[1:27](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=87)** So let's go ahead and do that.
>
> **[1:29](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=89)** So I'm going to do test and then again, I'm going to call this test App snapshot test.
>
> **[1:39](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=99)** And like we've done before, we're going to pass a function into this method like so.
>
> **[1:47](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=107)** And the first thing we're going to do, we're going to create a variable that will basically hold the components.
>
> **[1:53](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=113)** So we're going to do that with renderer.create and then pass App.
>
> **[2:02](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=122)** Like so.
>
> **[2:04](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=124)** And then we're going to create a tree, which will hold the JSON data.
>
> **[2:10](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=130)** So component.toJSON like so.
>
> **[2:18](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=138)** And then with this, we're able to do the test.
>
> **[2:21](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=141)** So expect the tree toMatchSnapshot like so and then you can delete this whole test here if you want.
>
> **[2:37](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=157)** So basically, we're creating a variable which will hold the complete UI and then we're basically passing this to a tree variable, which will basically render this to JSON.
>
> **[2:49](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=169)** And then the JSON will be tasked to what we have in the snapshot, like so.
>
> **[2:54](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=174)** And then save this.
>
> **[2:58](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=178)** So now we're ready to make the test.
>
> **[2:59](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=179)** So let's go ahead and do that.
>
> **[3:00](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=180)** So we're going to bring up the terminal again.
>
> **[3:05](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=185)** And now we're going to do npm run test like so.
>
> **[3:09](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=189)** And now you see that now we have a snapshot that has been written for us.
>
> **[3:14](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=194)** So if we take a look inside of our folder here, in components, we have now a folder that's called snapshots.
>
> **[3:21](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=201)** And this is where this snapshot is.
>
> **[3:24](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=204)** So once we rerun our test or make any changes to our UI, it's going to test again this snapshot here.
>
> **[3:31](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=211)** So let's go ahead and make some changes.
>
> **[3:32](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=212)** So let's go and bring the App.js.
>
> **[3:38](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=218)** And I'm going to bring that down and what I'm going to do is remove this comment here.
>
> **[3:43](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=223)** So I'm going to remove that.
>
> **[3:48](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=228)** And then change Courses to Course list.
>
> **[3:53](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=233)** And then let's bring up the terminal again because we're going to save this and it's going to rerun our test automatically.
>
> **[3:59](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=239)** So let's save this.
>
> **[4:03](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=243)** And now we have a snapshot test that has failed because our UI snapshot does not equal to what we have right now.
>
> **[4:11](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=251)** So right now, it's going to show you exactly what has changed and what has changed now is the Course list because the other one was comment so it doesn't track that.
>
> **[4:20](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=260)** So now we have a pass that has failed.
>
> **[4:24](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=264)** So what options we have right now is to inspect the component in question.
>
> **[4:28](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=268)** So I did make a mistake here.
>
> **[4:31](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=271)** I want this to be Courses as opposed to Course list.
>
> **[4:34](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=274)** Then I would change the UI again.
>
> **[4:36](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=276)** But if you want to update the snapshot, all you have to do is type U and it's going to update the snapshot and then the test will actually pass.
>
> **[4:45](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=285)** So let's go ahead and do that.
>
> **[4:47](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=287)** So you want to make sure you're in the terminal and then let's just do u to update, like so.
>
> **[4:52](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=292)** So now it's updating the snapshot and now the snapshot has been updated and now the test has passed because now the actual snapshot reflects what we have in our application.
>
> **[5:04](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=304)** So snapshots allow you to do spot checks on your UI.
>
> **[5:07](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=307)** Almost in a similar fashion to how you do versioning with Git.
>
> **[5:11](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=311)** Let's move on

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), pass (4), this. (2), throw (1), function (1)
> **CLI Commands:** make (5), npm (2), git (1)
> **Tools:** terminal (7), vs code (1)
> **Env Vars:** json (4)
> **File Paths:** app.test.js (1), app.js (1)
> **Code Identifiers:** tojson (1), tomatchsnapshot (1)
> **Prerequisites:** install (2)
> **UI Navigation:** click on (1)

#### Organize your tests with describe()
> [LinkedIn Learning](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=0)** - [Instructor] As your list of tests grows you might have the need to organize your tasks beyond the simple file organization.
>
> **[0:07](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=7)** Each file is a test suite and then it runs a test inside of the suite.
>
> **[0:11](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=11)** But you might need to organize your tests further and you can do this with the describe method.
>
> **[0:17](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=17)** The main advantage of doing this is to block your test around the context of what you're trying to test.
>
> **[0:23](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=23)** Let's refactor our code a bit to demonstrate an example and how you go about doing this.
>
> **[0:28](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=28)** So I'm back into the grid.test.js where I have this big massive test here and what I'm going to do is refactor all this.
>
> **[0:36](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=36)** So the first thing we're going to do is refactor the numbers area.
>
> **[0:40](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=40)** So I'm going to hit return after the variable that I created here and I'm going to create a describe.
>
> **[0:48](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=48)** And this is basically how you block several tasks together.
>
> **[0:53](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=53)** So we're going to call this number test.
>
> **[0:58](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=58)** And then again it's a function.
>
> **[1:02](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=62)** And then all we have to do is cut the test that we have here and then paste them inside of that block, like so.
>
> **[1:12](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=72)** And that's all we need to do.
>
> **[1:15](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=75)** And then we can do the same for all the other areas.
>
> **[1:19](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=79)** So we're testing strings here so let's go ahead and do the same.
>
> **[1:23](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=83)** So we're going to do describe.
>
> **[1:29](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=89)** And this is string test.
>
> **[1:36](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=96)** Comma.
>
> **[1:38](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=98)** No arguments.
>
> **[1:39](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=99)** And then open the function and then put those tests inside of it like so.
>
> **[1:46](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=106)** And by the way don't pay attention to these errors that I'm getting from eslent here.
>
> **[1:51](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=111)** So basically I'm using the four spacing as opposed to the two spacing which is the standard for AirBnb and that's where I'm getting these errors I'm certain are just the returns.
>
> **[2:02](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=122)** So these can all be fixed inside of the rules and so on so forth.
>
> **[2:07](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=127)** So let's go ahead and continue.
>
> **[2:09](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=129)** So I have the string test and now I'm going to have the arrays and object test like so.
>
> **[2:17](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=137)** So I can remove that.
>
> **[2:20](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=140)** Create a describe block.
>
> **[2:22](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=142)** So describe.
>
> **[2:26](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=146)** Arrays and objects test.
>
> **[2:33](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=153)** And exactly the same thing.
>
> **[2:35](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=155)** So this is repetitive but it's good practice so you get this right.
>
> **[2:40](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=160)** Let's put all these three inside of that block.
>
> **[2:46](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=166)** And then let's remove the two unnecessary returns.
>
> **[2:50](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=170)** So now I have the three tests in here that I'm going to run through a describe block.
>
> **[2:57](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=177)** So now let's go ahead and test all this.
>
> **[2:59](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=179)** So we have our tests inside of a describe block and let's go into the terminal again.
>
> **[3:05](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=185)** New terminal.
>
> **[3:06](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=186)** Then I'm going to do npm run test.
>
> **[3:14](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=194)** So now all my tests has passed and if you want to see how the titles are actually organized let's go ahead and make sure that one of the tests fails.
>
> **[3:21](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=201)** So let's go to this one.
>
> **[3:27](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=207)** So as opposed to 12, let's put 11 here.
>
> **[3:31](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=211)** And that's going to make the test fail, so let's save that.
>
> **[3:36](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=216)** And now we have a failure and let's go in here.
>
> **[3:42](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=222)** And you're going to see that we have a failed test inside of the describe block number test.
>
> **[3:49](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=229)** This test has failed.
>
> **[3:53](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=233)** And if you want to rerun the test you can actually press W and then enter again.
>
> **[3:59](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=239)** And by the way I've shown you this menu because in the past it was showing you a lot more information.
>
> **[4:04](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=244)** Now it's very simple and simplified information but if you want to see more information you can actually press w here and get the full menu like so.
>
> **[4:15](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=255)** So let's fix our test to make sure that it passes, bring it back to 12, let's save that.
>
> **[4:23](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=263)** And now all of our tests will pass like so.
>
> **[4:26](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=266)** So we have our snapshot, our eight tests that passed.
>
> **[4:29](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=269)** We have our two test suites which is basically the two files and this is the time that it ran the test.
>
> **[4:35](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=275)** So as you can see this can be useful as your lists of tests grows.
>
> **[4:39](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=279)** You could organize them by snapshots, type of matches used, specific contents of the app, example API calls, et cetera.
>
> **[4:47](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=287)** It helps organize your tests and have a cleaner report when you run your test.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), this. (3), function (2), continue (1), pass (1)
> **CLI Commands:** make (3), npm (1)
> **Tools:** terminal (2)
> **UI Navigation:** open the (1), go to (1)
> **File Paths:** grid.test.js (1)
> **Env Vars:** api (1)
> **Definitions:** is a  (1)
> **Best Practices:** good practice (1)


### 3. Debugging with Chrome and Extensions

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Debug with Chrome introduction
> [LinkedIn Learning](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-chrome-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-chrome-introduction?u=76281980&t=0)** - [Instructor] Whenever there's a bug or your application isn't performing the way you expect, your first reaction should be to use the Chrome DevTools or the ones from your favorite browser.
>
> **[0:08](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-chrome-introduction?u=76281980&t=8)** Earlier, we installed a React Dev Tools and they're also really handy when we need to debug our application.
>
> **[0:14](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-chrome-introduction?u=76281980&t=14)** I'll explore this one next.
>
> **[0:16](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-chrome-introduction?u=76281980&t=16)** I took a liberty of inserting a few bugs in our application if you are using the exercise files look into chapter three and then the start of 03 01, and if you aren't using them, I'll point out the bugs so you can reproduce them in your code.
>
> **[0:31](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-chrome-introduction?u=76281980&t=31)** So if your application isn't running, please do npm start, and also open up a second terminal and run the test with npm run test.
>
> **[0:39](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-chrome-introduction?u=76281980&t=39)** So if we take a look at my terminal, I have the test right now running, and then I also have the application running here.
>
> **[0:46](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-chrome-introduction?u=76281980&t=46)** So let's go back to our browser.
>
> **[0:48](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-chrome-introduction?u=76281980&t=48)** So as you can see there are a few bugs reported by both the console, the web browser, and then our test.
>
> **[0:55](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-chrome-introduction?u=76281980&t=55)** The beauty of working with state of the art frameworks like React, is that you get really good bug reports with some helpful details.
>
> **[1:01](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-chrome-introduction?u=76281980&t=61)** So let's take a look at what's happening here.
>
> **[1:03](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-chrome-introduction?u=76281980&t=63)** So I'm looking at the console inside of Chrome right now, and it says Uncaught Reference Error, course is not defined, and I also get the same error here, and if I look into my test inside of VS Code, I'm going to get a similar response here.
>
> **[1:20](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-chrome-introduction?u=76281980&t=80)** So let's go ahead and go into that file.
>
> **[1:21](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-chrome-introduction?u=76281980&t=81)** So they say there's an error inside of App.js, so let's look into that file, and as you can see right now, we're stating course and we're using courses, and what we're importing as data is courses, so we need to fix that here, so let's go ahead fix that, and then let's save, and then our test, we're going to run again, so if we go back to our browser, now we have a new error.
>
> **[1:49](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-chrome-introduction?u=76281980&t=109)** So we have, inside of our components, and then Single.js, we have item is not defined, no undefined and then we get the same error here, so let's take a look at what's happening here.
>
> **[2:00](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-chrome-introduction?u=76281980&t=120)** So let's go back to our code, and let's take a look at Single, and Single is not returning anything, so right now let's do a console log, and by the way, this is something that I do quite often when I want to actually figure out what's happening here, so console.log, I should have item pass into that single.
>
> **[2:22](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-chrome-introduction?u=76281980&t=142)** So if I save that and then go back to my browser, and then refresh, I'm going to see that I don't have anything passed, so item is not defined.
>
> **[2:34](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-chrome-introduction?u=76281980&t=154)** So let's go back to our code and let's figure out what's happening here, but the error's coming from Single but the item is not being passed, so first of all, we're not passing it inside of that component, so let's add it here.
>
> **[2:48](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-chrome-introduction?u=76281980&t=168)** Do we get the error again?
>
> **[2:50](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-chrome-introduction?u=76281980&t=170)** No, we're good, so now we have all the items are being passed here, and now we have our items showing up inside of our grid.
>
> **[2:58](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-chrome-introduction?u=76281980&t=178)** So let's go back here and remove the console.log.
>
> **[3:05](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-chrome-introduction?u=76281980&t=185)** But now we get another error.
>
> **[3:07](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-chrome-introduction?u=76281980&t=187)** Each child in a list should have a unique key, and we also have a URL that actually informs us on what the error is, so if we click on it, we're going to see that we always need to have a key prop in here and have something unique for each component inside of our grid.
>
> **[3:23](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-chrome-introduction?u=76281980&t=203)** So in this case, let's make sure we add that in our code, so let's go back to our code here, and that probably happens in grid because right now this is the element that actually repeats itself multiple times.
>
> **[3:38](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-chrome-introduction?u=76281980&t=218)** So let's make sure we add a key, so we're going to add a key here, and then do item.id, and save that again, and let's look at our test into our console here.
>
> **[3:57](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-chrome-introduction?u=76281980&t=237)** Now our tests have passed, which probably means that our application is also running, which looks beautiful here, and if we look back into our code here, our application is running properly.
>
> **[4:09](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-chrome-introduction?u=76281980&t=249)** So as you can see, there are many ways to accomplish the same thing, and knowing the different tools will help you in the long run.
>
> **[4:14](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-chrome-introduction?u=76281980&t=254)** Sometimes the bugs will be obvious and easy to fix, but other times they'll require a bit more research.

> [!info]- Semantic Content
>
> **Code Keywords:** let (18), pass (1), case, (1), require (1)
> **Cross-References:** go back to (6)
> **CLI Commands:** npm (2), make (2)
> **Tools:** terminal (2), chrome devtools (1), vs code (1)
> **File Paths:** app.js (1), single.js (1)
> **Env Vars:** url (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** exercise files (1)

#### Debug with React DevTools
> [LinkedIn Learning](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=0)** - [Narrator] The reactive tools provides us with useful tools to inspect our components, the stake props space to a component, or even provide console commands to play what are components.
>
> **[0:10](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=10)** So let's take a look at a few.
>
> **[0:12](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=12)** If we go back into our browser and make sure your application is running, go into the components here.
>
> **[0:18](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=18)** And this is again from the react dev tools.
>
> **[0:20](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=20)** And the first thing you're going to see is that we have each of our components that we've built into our application listed here.
>
> **[0:26](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=26)** So if we go back quickly to our application and let's close the terminal, you're going to see that we have our app.js, which is the first top component.
>
> **[0:34](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=34)** And then we're passing the grid right here, which is the second level.
>
> **[0:38](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=38)** And then into the grid, we are passing the single and we're returning it in this function here.
>
> **[0:45](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=45)** So we have each single for each items in our data, which is basically what we have in the courses.json here.
>
> **[0:52](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=52)** So if we take a look at all these and go back into our component, we're going to see all these components and all these single components based on the amount of elements that we have in our database.
>
> **[1:03](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=63)** So we have 12 elements here, so 12 components.
>
> **[1:06](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=66)** And it's going to be repeated as many times that we have objects inside of our array.
>
> **[1:11](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=71)** So if we take a look at the top level here, we're going to have the state.
>
> **[1:15](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=75)** If there's any props or a past to this particular component, we're going to see them here.
>
> **[1:19](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=79)** And then we have our state, which is the courses and all the elements that we're passing to the grid.
>
> **[1:25](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=85)** So if we take a look at the grid now, we see them as props, which are being basically passed here.
>
> **[1:30](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=90)** And then each component has the elements that actually belongs to it.
>
> **[1:34](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=94)** So that basically generates and render this application here.
>
> **[1:38](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=98)** So you can take a look at all these elements and basically determine if there's anything missing here.
>
> **[1:43](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=103)** So let's say for example you were coding something and you're missing an element here and you still have the data that's been provided here.
>
> **[1:50](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=110)** So let's say we didn't have the image and you're not passing it into the component.
>
> **[1:54](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=114)** So you could go back to your code and then take a look at the single and then make sure you pass the image somewhere.
>
> **[2:01](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=121)** So we're passing the views, release_date, so on and so forth, but we're passing the image here.
>
> **[2:06](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=126)** So this is how you start testing and debugging your application.
>
> **[2:10](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=130)** One more thing you could do in the console here, you can use some commands to get some information about your component or your application by doing dollar sign R and then dot.
>
> **[2:23](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=143)** And then you have all these things that you have access to.
>
> **[2:25](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=145)** So if you want to know more about the state and you are in the right element here, then you can actually call the state.
>
> **[2:33](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=153)** And if you do R, and then let's say, for example, prop, you're going to see that you have items.
>
> **[2:41](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=161)** And then you can click on these items, you have an item for that.
>
> **[2:44](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=164)** And that's why we didn't have the state because we were at the top level of this application.
>
> **[2:49](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=169)** We're actually in this element here.
>
> **[2:53](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=173)** One more thing you can do is a profiler.
>
> **[2:55](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=175)** So the profiler gives you performance based on components.
>
> **[2:59](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=179)** So each component, how long it takes to load it.
>
> **[3:02](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=182)** So let's go ahead and go to the profiler and then to get it started, you can actually reload the application and start profiling, like so.
>
> **[3:10](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=190)** So we're going to wait and then we can move and start playing with the components and stuff like that.
>
> **[3:20](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=200)** And then when you want to stop recording, you can actually click on stop.
>
> **[3:24](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=204)** And then you have some performance here.
>
> **[3:25](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=205)** So you have the app that took one millisecond and then the grid, which loaded inside of the app.
>
> **[3:32](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=212)** So all of these is combined into that top level component here and then the grid 0.5 and so on and so forth.
>
> **[3:40](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=220)** So all of these elements took an amount of time in particular, and then in turn impacted your application, you can also rank them.
>
> **[3:48](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=228)** So which elements in the component that actually loaded faster and the ones that loaded slower.
>
> **[3:54](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=234)** So as you can see, the app is the slowest.
>
> **[3:56](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=236)** And if you want to take a look at specific element, you can take a look at the single key one, which was the longest to load.
>
> **[4:05](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=245)** And then if you had any interaction, so let's say for example, we have specific actions here that we have to click on, you'd see the actual time each of these interactions actually lasted.
>
> **[4:16](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=256)** So now when a combination of the browser developer tools and reacts on, you should be armed to inspect, debug and kill any problems your application may have.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), function (1), pass (1)
> **UI Navigation:** click on (3), go to (1)
> **Analogies:** for example (3)
> **File Paths:** app.js (1), courses.json (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** release_date (1)
> **Versions:** 0.5 (1)
> **Cross-References:** go back to (1)

#### Test your network and performance
> [LinkedIn Learning](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=0)** - [Instructor] Chrome and many popular browsers have their own performance and profile tools to get more granular into your performance inspection of your application.
>
> **[0:09](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=9)** And for Chrome they're called Network and Performance.
>
> **[0:12](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=12)** Let's take a look at them.
>
> **[0:14](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=14)** So right now I have already some data here because I already loaded the application at least once.
>
> **[0:19](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=19)** So let's go ahead and reload the application.
>
> **[0:22](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=22)** So when you do that, and you want to make sure you're on the Network tab inside of the DevTools.
>
> **[0:27](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=27)** Sorry if you don't have that open you want to make sure you go to the three dots here.
>
> **[0:32](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=32)** And then More Tools and then Developer Tools.
>
> **[0:34](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=34)** Or Control + Shift + I for Windows and Command + Shift + I for Mac.
>
> **[0:40](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=40)** So let's go ahead and reload the application like so.
>
> **[0:44](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=44)** And basically it's the exact same thing that we were looking at when we looked at Profiler.
>
> **[0:49](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=49)** The only difference here it's everything but more granularly the files themselves.
>
> **[0:56](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=56)** So the actual file for jQuery, materialize.css.
>
> **[1:00](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=60)** The Bundle.js which is basically the bundle build by React.
>
> **[1:04](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=64)** All the images, and so on, so forth.
>
> **[1:06](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=66)** And you see an actual performance in milliseconds for each of these elements.
>
> **[1:11](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=71)** And if you want to get more information about each element you can actually scroll over the actual line item here and then get more information about the duration of the queuing.
>
> **[1:21](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=81)** And when it actually loaded inside of your application.
>
> **[1:26](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=86)** So this is fairly good when you want to get more information about any specific things.
>
> **[1:31](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=91)** And then you can actually get even more granular.
>
> **[1:34](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=94)** So you can go into the JavaScript files and figure out what is the file that takes the longest.
>
> **[1:40](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=100)** As you can see its the react_DevTools_backend that actually takes the longest.
>
> **[1:44](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=104)** And the same with images and CSS files and so on, so forth.
>
> **[1:48](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=108)** So whenever you have problems with an application, or if it doesn't load properly or fast enough.
>
> **[1:54](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=114)** What you could do is go into these tools and figure out what are the issues and maybe mitigate them.
>
> **[1:59](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=119)** Or prevent these things to happen.
>
> **[2:01](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=121)** So if these images are way to long to load and that's slowing down your application.
>
> **[2:06](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=126)** What you could do is basically minimize them and make smaller versions of these images when you load your application.
>
> **[2:14](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=134)** So this is a good tool to look at the performance.
>
> **[2:17](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=137)** So in combination with Profiler and Components you can start figuring out what are the issues inside of your application.
>
> **[2:24](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=144)** The specific components, or basically the images.
>
> **[2:27](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=147)** Or the files themself that are loaded, what are the problems?
>
> **[2:31](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=151)** And when you want to actually make a report, or get more information about interactions.
>
> **[2:36](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=156)** You go into the Performance tab.
>
> **[2:38](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=158)** So what's going to happen is if you click Reload, it's going to start profiling pretty much like the Profiler.
>
> **[2:44](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=164)** So let's go ahead and do that.
>
> **[2:46](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=166)** And then let's interact with our application.
>
> **[2:48](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=168)** So I'm going to scroll down, click on stuff.
>
> **[2:51](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=171)** And so on, so forth.
>
> **[2:52](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=172)** And as you actually interact with your application, it's going to create a report here.
>
> **[2:58](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=178)** And what's really cool about that it actually gives you an image of what's happening inside of your application while you're actually doing things.
>
> **[3:06](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=186)** And then the frame per second which is basically how it's rendered inside of your server.
>
> **[3:11](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=191)** And each of the components, how long it took and so on, so forth.
>
> **[3:14](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=194)** So these are really granular report to give you performance indicators of your application.
>
> **[3:21](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=201)** So once you've tested and debugged all the code issues that we've looked at earlier.
>
> **[3:27](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=207)** Now it's actually time to do some performance test to validate that your application is going to load fast and efficiently with any other browser.
>
> **[3:36](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=216)** So you can actually do this in Firefox as well.
>
> **[3:39](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=219)** And many of the popular browsers have similar tools to actually test your application.
>
> **[3:43](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=223)** So make sure you use these tools to understand more about your application.
>
> **[3:47](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=227)** How fast it loads, and if there's any issues with specific files.
>
> **[3:51](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=231)** And mitigate these issues.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5)
> **Code Keywords:** let (5)
> **UI Navigation:** go to (1), scroll down (1), click on (1)
> **File Paths:** materialize.css (1), bundle.js (1)
> **Code Identifiers:** jquery (1)
> **Env Vars:** css (1)
> **Tools:** firefox (1)
> **Definitions:** is a  (1)

#### Run an audit in Chrome
> [LinkedIn Learning](https://www.linkedin.com/learning/react-testing-and-debugging/run-an-audit-in-chrome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/run-an-audit-in-chrome?u=76281980&t=0)** - [Instructor] Running several reports to help figure out what's wrong or what could be fixed is great and you can do this with Chrome, so let's take a look at it.
>
> **[0:07](https://www.linkedin.com/learning/react-testing-and-debugging/run-an-audit-in-chrome?u=76281980&t=7)** So I'm back into my browser and make sure the application is running and once it is running go to the developer tools and then go all the way till you see Lighthouse and then click on that tab.
>
> **[0:20](https://www.linkedin.com/learning/react-testing-and-debugging/run-an-audit-in-chrome?u=76281980&t=20)** And this is the auditing feature that Chrome offers so you can do this report on both mobile or desktop so if you want to do a test on mobile you can click here and then on desktop if you want to do on desktop so in this case I'm going to do the desktop one and let's go ahead and generate report.
>
> **[0:38](https://www.linkedin.com/learning/react-testing-and-debugging/run-an-audit-in-chrome?u=76281980&t=38)** And this is what Chrome provides you with.
>
> **[0:40](https://www.linkedin.com/learning/react-testing-and-debugging/run-an-audit-in-chrome?u=76281980&t=40)** So you have a report that speaks to performance, accessibility, best practices, SEO, and progressive web app.
>
> **[0:47](https://www.linkedin.com/learning/react-testing-and-debugging/run-an-audit-in-chrome?u=76281980&t=47)** Progressive web app is the ability to have an app offline so if your application actually does that then you're going to have a report on that but in this case it's not so I'm not going to get a report there.
>
> **[0:57](https://www.linkedin.com/learning/react-testing-and-debugging/run-an-audit-in-chrome?u=76281980&t=57)** So basically you're going to see areas that you need to improve, areas that you actually excel and if there's any issues or red areas, you're going to know about it as well.
>
> **[1:07](https://www.linkedin.com/learning/react-testing-and-debugging/run-an-audit-in-chrome?u=76281980&t=67)** So let's quickly take a look at these performance metrics first and as you can see, if there's anything that needs to be improved, you're going to get detailed information about it so surf image in non gen formats, properly sized images, so these are things that could help improve this application.
>
> **[1:24](https://www.linkedin.com/learning/react-testing-and-debugging/run-an-audit-in-chrome?u=76281980&t=84)** And then if you scroll down you're going to get the accessibility one which means basically that this is accessible for all types of devices.
>
> **[1:32](https://www.linkedin.com/learning/react-testing-and-debugging/run-an-audit-in-chrome?u=76281980&t=92)** And then you're going to go down, best practices, so right now we're not using HTTPS which is normal because we're doing this locally but if this was online then you would see a report on that as well and then if you click to any of these you're going to get more information about how to resolve this and what is the issue.
>
> **[1:52](https://www.linkedin.com/learning/react-testing-and-debugging/run-an-audit-in-chrome?u=76281980&t=112)** So this is a really great report to get a lot of information about your application or website and at the SEO, so if you're not familiar with SEO it's basically Search Engine Optimization, that means that you have specific key words in your application that will allow people to find you on Google on any of these search engines out there.
>
> **[2:11](https://www.linkedin.com/learning/react-testing-and-debugging/run-an-audit-in-chrome?u=76281980&t=131)** And finally the progressive web app so this is basically anything that has to do with an application that is offline so if you were to do this then you would see more information about this.
>
> **[2:23](https://www.linkedin.com/learning/react-testing-and-debugging/run-an-audit-in-chrome?u=76281980&t=143)** So this is a great report to take a look at how the application performs in all these different aspects so make sure to do this audit before you actually publish your application or your website and it's going to give you some indication as to what you need to improve before you go out there.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this. (1)
> **Env Vars:** seo (3), https (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** go to (1), click on (1), scroll down (1)
> **Definitions:** is a  (2), means that (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### Debug resources to find answers
> [LinkedIn Learning](https://www.linkedin.com/learning/react-testing-and-debugging/debug-resources-to-find-answers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/debug-resources-to-find-answers?u=76281980&t=0)** - [Instructor] There will be times when you get really weird bugs or new ones you've never heard of.
>
> **[0:04](https://www.linkedin.com/learning/react-testing-and-debugging/debug-resources-to-find-answers?u=76281980&t=4)** In these times, even after having gone through the tools, you're still scratching your head and are ready to throw your computer off the window.
>
> **[0:11](https://www.linkedin.com/learning/react-testing-and-debugging/debug-resources-to-find-answers?u=76281980&t=11)** Don't despair, there are resources to help you resolve it.
>
> **[0:14](https://www.linkedin.com/learning/react-testing-and-debugging/debug-resources-to-find-answers?u=76281980&t=14)** Most of the time someone else has gone through the same experience or error you just had, and most likely ask a question in one of the resources I'll show you.
>
> **[0:23](https://www.linkedin.com/learning/react-testing-and-debugging/debug-resources-to-find-answers?u=76281980&t=23)** You just need to find this particular pose, and reproduce a solution and off you go.
>
> **[0:28](https://www.linkedin.com/learning/react-testing-and-debugging/debug-resources-to-find-answers?u=76281980&t=28)** So let's take a look at in there.
>
> **[0:30](https://www.linkedin.com/learning/react-testing-and-debugging/debug-resources-to-find-answers?u=76281980&t=30)** So let's say for example, I'm back here, and right now there's no bug in our application.
>
> **[0:33](https://www.linkedin.com/learning/react-testing-and-debugging/debug-resources-to-find-answers?u=76281980&t=33)** Let's say I remove this particular key ID here and just save it.
>
> **[0:40](https://www.linkedin.com/learning/react-testing-and-debugging/debug-resources-to-find-answers?u=76281980&t=40)** And then would go into my browser, and let's open the application, localhost and then go into the console, more tools.
>
> **[0:51](https://www.linkedin.com/learning/react-testing-and-debugging/debug-resources-to-find-answers?u=76281980&t=51)** Dev tools and I get each child in a list should have a unique key prop.
>
> **[0:57](https://www.linkedin.com/learning/react-testing-and-debugging/debug-resources-to-find-answers?u=76281980&t=57)** So let's say for example, I didn't have that link here.
>
> **[0:59](https://www.linkedin.com/learning/react-testing-and-debugging/debug-resources-to-find-answers?u=76281980&t=59)** I would probably just copy that and the first resource I would go to is Google.
>
> **[1:06](https://www.linkedin.com/learning/react-testing-and-debugging/debug-resources-to-find-answers?u=76281980&t=66)** So Google is the first place that everyone goes to and I'm not different.
>
> **[1:11](https://www.linkedin.com/learning/react-testing-and-debugging/debug-resources-to-find-answers?u=76281980&t=71)** So this is what I would do.
>
> **[1:13](https://www.linkedin.com/learning/react-testing-and-debugging/debug-resources-to-find-answers?u=76281980&t=73)** So I would literally paste the error that I get from react.
>
> **[1:18](https://www.linkedin.com/learning/react-testing-and-debugging/debug-resources-to-find-answers?u=76281980&t=78)** And then I would go for the first link here, and then read through it.
>
> **[1:25](https://www.linkedin.com/learning/react-testing-and-debugging/debug-resources-to-find-answers?u=76281980&t=85)** And probably the solution would be here.
>
> **[1:28](https://www.linkedin.com/learning/react-testing-and-debugging/debug-resources-to-find-answers?u=76281980&t=88)** But let's say for example, I didn't find anything on Google.
>
> **[1:30](https://www.linkedin.com/learning/react-testing-and-debugging/debug-resources-to-find-answers?u=76281980&t=90)** The second place I would go to, even though it might be indexed on Google is Stack Overflow.
>
> **[1:36](https://www.linkedin.com/learning/react-testing-and-debugging/debug-resources-to-find-answers?u=76281980&t=96)** So, if you don't have any resources online that you're going to find the error and the solution, I would go to stack overflow next and then ask a question.
>
> **[1:45](https://www.linkedin.com/learning/react-testing-and-debugging/debug-resources-to-find-answers?u=76281980&t=105)** So let's say for example, I just drop this thing here, I would get some results and if I don't get a result, you can go ahead and ask a question and then drop your code and then the error that you're getting from the terminal.
>
> **[1:58](https://www.linkedin.com/learning/react-testing-and-debugging/debug-resources-to-find-answers?u=76281980&t=118)** And therefore, eventually, somebody he's going to answer it and give you the answer.
>
> **[2:02](https://www.linkedin.com/learning/react-testing-and-debugging/debug-resources-to-find-answers?u=76281980&t=122)** It typically takes him between 24 to 48 hours to get a good answer on your problem.
>
> **[2:08](https://www.linkedin.com/learning/react-testing-and-debugging/debug-resources-to-find-answers?u=76281980&t=128)** If you're desperate and you can't wait for something, the other resource that I would go to is Reactiflux, which is a Discord server.
>
> **[2:16](https://www.linkedin.com/learning/react-testing-and-debugging/debug-resources-to-find-answers?u=76281980&t=136)** So if you join Reactiflux, you're going to be on the server where there's people around React Native, Redux, React, Jest, Relay and GraphQL which are all technologies from Facebook.
>
> **[2:28](https://www.linkedin.com/learning/react-testing-and-debugging/debug-resources-to-find-answers?u=76281980&t=148)** And then you would be able to ask your question and most likely there's a developer that will answer it.
>
> **[2:34](https://www.linkedin.com/learning/react-testing-and-debugging/debug-resources-to-find-answers?u=76281980&t=154)** Then if you found a bug or if you found something that is not found anywhere, the next thing that would go to is the [reactjs.org](https://reactjs.org) and then click on GitHub and then report that bug.
>
> **[2:47](https://www.linkedin.com/learning/react-testing-and-debugging/debug-resources-to-find-answers?u=76281980&t=167)** So what I would do is go into the issues here on the actual Facebook react, GitHub repo and then create a new issue.
>
> **[2:57](https://www.linkedin.com/learning/react-testing-and-debugging/debug-resources-to-find-answers?u=76281980&t=177)** This is a bug that I found, these are the issues that are coming out from the terminal and then this is the code that I use to get to that problem.
>
> **[3:06](https://www.linkedin.com/learning/react-testing-and-debugging/debug-resources-to-find-answers?u=76281980&t=186)** And most likely somebody is going to take a look at your blog and if you found a bug, eventually somebody's going to answer or suggest some solutions in the meantime while they're fixing the bug.
>
> **[3:17](https://www.linkedin.com/learning/react-testing-and-debugging/debug-resources-to-find-answers?u=76281980&t=197)** So, these are the resources to figure out any bugs that you may have in your application.
>
> **[3:23](https://www.linkedin.com/learning/react-testing-and-debugging/debug-resources-to-find-answers?u=76281980&t=203)** Use them wisely and you should be good to go.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), throw (1)
> **UI Navigation:** go to (5), open the (1), click on (1)
> **Tools:** terminal (2), github (2), discord (1)
> **Analogies:** for example (4)
> **CLI Commands:** find (3)
> **Documentation:** stack overflow (2)
> **Definitions:** is a  (2)
> **URLs:** [reactjs.org](https://reactjs.org) (1)


### 4. ESLint and Types

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Code improvement with ESLint
> [LinkedIn Learning](https://www.linkedin.com/learning/react-testing-and-debugging/code-improvement-with-eslint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/code-improvement-with-eslint?u=76281980&t=0)** - [Instructor] If you ever wondered about JavaScript, React or industry standards, linters are a good place to start to improve your compliance.
>
> **[0:08](https://www.linkedin.com/learning/react-testing-and-debugging/code-improvement-with-eslint?u=76281980&t=8)** In the previous video, we set up ES lint to allow us to improve our application code with industry standards.
>
> **[0:15](https://www.linkedin.com/learning/react-testing-and-debugging/code-improvement-with-eslint?u=76281980&t=15)** Now let's take a look at what errors ES lint shows us, what to do with these errors, and where to look for references for these standards.
>
> **[0:23](https://www.linkedin.com/learning/react-testing-and-debugging/code-improvement-with-eslint?u=76281980&t=23)** So I'm back into VS Code, and I have the grid.js file open and what I'm going to do is go one by one where I see this red line, which is basically where errors are.
>
> **[0:33](https://www.linkedin.com/learning/react-testing-and-debugging/code-improvement-with-eslint?u=76281980&t=33)** You can also bring up the terminal, so click on terminal, and then go to the initial terminal like so, and then go to problems here, so it's going to show you problems in your application based on where you are.
>
> **[0:46](https://www.linkedin.com/learning/react-testing-and-debugging/code-improvement-with-eslint?u=76281980&t=46)** So grid.js is where we are, and we have all these errors that we have inside of that particular file.
>
> **[0:52](https://www.linkedin.com/learning/react-testing-and-debugging/code-improvement-with-eslint?u=76281980&t=52)** So if I click on here, it's going to show us this error.
>
> **[0:55](https://www.linkedin.com/learning/react-testing-and-debugging/code-improvement-with-eslint?u=76281980&t=55)** And so on, so forth, like so.
>
> **[0:59](https://www.linkedin.com/learning/react-testing-and-debugging/code-improvement-with-eslint?u=76281980&t=59)** If you want to get more information about this, you can actually show fixes and then, what you could do is actually fix the problem right here.
>
> **[1:07](https://www.linkedin.com/learning/react-testing-and-debugging/code-improvement-with-eslint?u=76281980&t=67)** Or you could do it actually in the application, so I'm going to fix it here, so fix this semi-problem, and I got this issue resolved.
>
> **[1:16](https://www.linkedin.com/learning/react-testing-and-debugging/code-improvement-with-eslint?u=76281980&t=76)** If I am in the file, and I see these errors, I'm going to basically click where I'm at, and then do control dot on Windows or command dot on Mac like so, and it's going to show us the same recommendations that we would see inside of our problems here.
>
> **[1:34](https://www.linkedin.com/learning/react-testing-and-debugging/code-improvement-with-eslint?u=76281980&t=94)** So let's say, for example, disable react/destructuring-assignment for this line, and so on, so forth.
>
> **[1:39](https://www.linkedin.com/learning/react-testing-and-debugging/code-improvement-with-eslint?u=76281980&t=99)** But let's say, for example, you have no idea what they're talking about.
>
> **[1:42](https://www.linkedin.com/learning/react-testing-and-debugging/code-improvement-with-eslint?u=76281980&t=102)** What is this react/destructuring-assignment?
>
> **[1:45](https://www.linkedin.com/learning/react-testing-and-debugging/code-improvement-with-eslint?u=76281980&t=105)** You can actually show documentation for react/destructuring-assignment like so.
>
> **[1:50](https://www.linkedin.com/learning/react-testing-and-debugging/code-improvement-with-eslint?u=76281980&t=110)** And then you click (computer chimes) and then, yes, let's open this into an external website.
>
> **[1:58](https://www.linkedin.com/learning/react-testing-and-debugging/code-improvement-with-eslint?u=76281980&t=118)** And then you would be brought exactly where you have more documentation about this particular rule.
>
> **[2:04](https://www.linkedin.com/learning/react-testing-and-debugging/code-improvement-with-eslint?u=76281980&t=124)** So this is on a GitHub repo where they document all the rules specific to that plug-in, so if it was about Arabian Bee's rules, we would get directly to that documentation, so let's say, for example, you wanted to understand what this is exactly.
>
> **[2:19](https://www.linkedin.com/learning/react-testing-and-debugging/code-improvement-with-eslint?u=76281980&t=139)** You would see all the information here.
>
> **[2:21](https://www.linkedin.com/learning/react-testing-and-debugging/code-improvement-with-eslint?u=76281980&t=141)** So what are the rule details?
>
> **[2:24](https://www.linkedin.com/learning/react-testing-and-debugging/code-improvement-with-eslint?u=76281980&t=144)** How can you fix it?
>
> **[2:25](https://www.linkedin.com/learning/react-testing-and-debugging/code-improvement-with-eslint?u=76281980&t=145)** And so on, so forth.
>
> **[2:29](https://www.linkedin.com/learning/react-testing-and-debugging/code-improvement-with-eslint?u=76281980&t=149)** Or you can simply click here, and then do control dot, and disable this rule.
>
> **[2:36](https://www.linkedin.com/learning/react-testing-and-debugging/code-improvement-with-eslint?u=76281980&t=156)** And then we would be good to go.
>
> **[2:38](https://www.linkedin.com/learning/react-testing-and-debugging/code-improvement-with-eslint?u=76281980&t=158)** Then this one, let's click here, do control dot, because we're not using the JSX filename extension, let's disable that, as well.
>
> **[2:49](https://www.linkedin.com/learning/react-testing-and-debugging/code-improvement-with-eslint?u=76281980&t=169)** Let's click here, do control dot, and then it says, "fix this keyword spacing problem," and this is just a space, so there you go.
>
> **[2:57](https://www.linkedin.com/learning/react-testing-and-debugging/code-improvement-with-eslint?u=76281980&t=177)** We have this one fixed.
>
> **[2:59](https://www.linkedin.com/learning/react-testing-and-debugging/code-improvement-with-eslint?u=76281980&t=179)** And then finally, this one here, let's do control dot, as well, and this one, it's for prop-types.
>
> **[3:06](https://www.linkedin.com/learning/react-testing-and-debugging/code-improvement-with-eslint?u=76281980&t=186)** Because we haven't gotten to prop-types yet, I'm simply going to disable it or you can go and take a look at the documentation and fix it yourself like so.
>
> **[3:17](https://www.linkedin.com/learning/react-testing-and-debugging/code-improvement-with-eslint?u=76281980&t=197)** And now we have a new problem here, and let's fix it automatically like so.
>
> **[3:23](https://www.linkedin.com/learning/react-testing-and-debugging/code-improvement-with-eslint?u=76281980&t=203)** And then we have just one more problem somewhere in here, and this is the one here, so let's go and do a space, and then save this and we have a problem-free or we have a file that is compliant with the standards of the industry.
>
> **[3:43](https://www.linkedin.com/learning/react-testing-and-debugging/code-improvement-with-eslint?u=76281980&t=223)** So if any developers take a look at this file, they'll see that you have something that is compliant, has great standards, and if they're wondering about why you're disabling this, then just go and explore these further, but in this case, because we're not using the JSX extension into our files, then we need to disable this.
>
> **[4:02](https://www.linkedin.com/learning/react-testing-and-debugging/code-improvement-with-eslint?u=76281980&t=242)** So I would encourage you to go through the other components and update them with the latest standards.
>
> **[4:08](https://www.linkedin.com/learning/react-testing-and-debugging/code-improvement-with-eslint?u=76281980&t=248)** This is what I do as I code my applications, so it's always good practice, and it helps you as a developer.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), this, (2), finally, (1), case, (1), this. (1)
> **Tools:** terminal (3), vs code (1), github (1)
> **UI Navigation:** click on (2), go to (2)
> **Analogies:** for example (3)
> **File Paths:** grid.js (2)
> **Env Vars:** jsx (2)
> **Cross-References:** previous video (1)
> **Documentation:** the documentation (1)

#### Solution: Practice ESLint best practices in a component
> [LinkedIn Learning](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=0)** - [Instructor] So for this coding challenge, I wanted to try something different.
>
> **[0:09](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=9)** How do you test for ESLint best practices, even though we don't have access to ESLint in our coding environments?
>
> **[0:18](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=18)** So what I've done here is, and we can actually hide this afterwards, I've added a bunch of tests that should actually check for several things in your code that will basically allow us to fix ESLint best practices, so the code is junky right now.
>
> **[0:36](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=36)** It's not following the tests here, which are ESLint best practices, and what I'm going to do, once I fix this, not only this is will render, 'cause right now, it's not even rendering properly, but this will also pass all the tests, so let's go ahead and start our fixing, and what I would do is read all of this and just to make sure, so first of all, let's go ahead.
>
> **[1:01](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=61)** The first thing we need to check is, well, the app component is exported correctly.
>
> **[1:07](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=67)** Then we check for the grid component is exported correctly, the item array is exported correctly.
>
> **[1:15](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=75)** The grid component renders without crashing.
>
> **[1:18](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=78)** Same with the app, and then list items are rendered correctly, and then finally, we're checking for formatting issues, so we're making sure that there's semicolons and so on, so forth, so let's go ahead.
>
> **[1:32](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=92)** If you run the test right now, it's definitely not going to be successful.
>
> **[1:39](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=99)** Yeah, zero tests passed. Okay.
>
> **[1:42](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=102)** So what I'm going to do is just bring that up here, and let's go ahead and start fixing our stuff here.
>
> **[1:48](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=108)** So as the first thing, you have multiple exports here.
>
> **[1:51](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=111)** You have an export for this, you have an export for the app, and you have the grid.
>
> **[1:57](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=117)** The problem with this one is, well, actually, you shouldn't have a default if you have multiple exports in the same file, so we're going to remove that, and that should fix this here, so that's the first thing.
>
> **[2:12](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=132)** Let's go here. It's still not rendering.
>
> **[2:15](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=135)** Oh, there it is.
>
> **[2:17](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=137)** I'm going to remove prop types because we're not using it, and then I'm going to add a semicolon here,
>
> **[2:28](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=148)** and then what I'm going to do is start making sure that some of these have the proper indentation, so just clean it up a bit.
>
> **[2:36](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=156)** So first of all, I'm going to do this, and then I'm going to do this, and then I'm going to also make sure that this is within this, because this was missing.
>
> **[2:56](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=176)** I don't know if you noticed that, like this., and then we're going to put the UL here, and then UL indented like so, and then finally, this here.
>
> **[3:10](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=190)** Semicolon here.
>
> **[3:12](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=192)** Let's make sure, very quickly, you have to check everything to make sure that we're following all the proper things, so here, we need to... Like this.
>
> **[3:28](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=208)** And I usually, depends on your style or what are the standard practices you follow, 'cause there's multiple out there, but this is how I would make this one, and then let's work on this one here, indent it like this, and then as you can see, we have the same problem here.
>
> **[3:59](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=239)** We don't have... Like so.
>
> **[4:09](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=249)** I want to make sure that it's properly indented like so.
>
> **[4:13](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=253)** I'm very, very granular in my syntax, and everything that I do, I check it and then crosscheck it over and over to make sure that I'm following the best practices, and actually, as a matter of fact, the practices, the actual rules that I follow with the company I'm working is a bit different.
>
> **[4:40](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=280)** We don't use semicolons, for example, so it depends on the best practices you're following.
>
> **[4:49](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=289)** It's very important to always follow whatever is used internally at your company.
>
> **[5:03](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=303)** A lot of the same errors here, so we have some code missing here, too.
>
> **[5:17](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=317)** Semicolon, and then this.
>
> **[5:23](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=323)** I'm still rendering, so somewhat, I'm still good.
>
> **[5:27](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=327)** The invitation would make me go back to a developer and tell 'em, "Please fix this just for cleanliness."
>
> **[5:37](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=337)** Okay, so let's check our code.
>
> **[5:40](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=340)** Let's see if everything is good.
>
> **[5:41](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=341)** In theory, it should all be good, so if we test my code here, all the tests have passed properly.
>
> **[5:53](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=353)** So as you can see, it wasn't that hard of a test, because it was mostly about formatting your components and making sure that you had everything that you needed, but it's a good exercise to kind of introduce you to ESLint.
>
> **[6:08](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=368)** Depending on the rules that you're following with your company, you may have different syntax.
>
> **[6:12](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=372)** For example, in our company, I removed the semicolon.
>
> **[6:18](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=378)** We don't use semicolons within our standard practices internally.
>
> **[6:23](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=383)** I do not enjoy adding those semicolons everywhere, personally, so I made that as a rule, and we're following practices that follow this particular rule.
>
> **[6:33](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=393)** So hopefully you had fun, and let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), this, (6), this. (3), finally, (2), pass (1)
> **CLI Commands:** make (8)
> **Analogies:** for example (2)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Type checking with Flow
> [LinkedIn Learning](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=0)** - [Instructor] Another great tool to help prevent bugs is type checking.
>
> **[0:03](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=3)** Type checking is basically a practice of declaring what type of data you should expect to be passed within your application.
>
> **[0:10](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=10)** If the types don't match, type checking throws an error warning that you are trying to pass a number to a variable that is expecting a string for example.
>
> **[0:18](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=18)** React has prop types that you can use within its libraries but I personally prefer to use a tool like Flow which has much more to offer and is also maintained by the Facebook team.
>
> **[0:29](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=29)** What's really good about Flow is that you could use it without setting up your types because Flow offers a lot for you out of the box.
>
> **[0:36](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=36)** So let's take a look at it.
>
> **[0:38](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=38)** So I don't know if you remember earlier when we set up Flow we did a flow here.
>
> **[0:43](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=43)** So we did this mention.
>
> **[0:44](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=44)** So flow is going to check for this file.
>
> **[0:46](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=46)** But I want to do it on a new file.
>
> **[0:48](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=48)** So I'm going to go to single.js which is in the listings inside of components.
>
> **[0:54](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=54)** And then in here I'm going to add flow.
>
> **[0:57](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=57)** I'm going to do forward slash forward slash at @flow like so.
>
> **[1:02](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=62)** And then we're going to save this.
>
> **[1:05](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=65)** And then if we go into our terminal, so I'm going to open up a new terminal, and then do npm run flow.
>
> **[1:14](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=74)** Remember, we did a script in our package.json file here that actually runs flow when we do the script npm run flow.
>
> **[1:23](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=83)** We're going to run flow.
>
> **[1:25](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=85)** So let's go ahead and do that.
>
> **[1:29](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=89)** So let's take a look at what are the recommendations that we get.
>
> **[1:33](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=93)** So I'm going to look at this file.
>
> **[1:35](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=95)** You guys can take a look at the state later on.
>
> **[1:38](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=98)** But let's take a look at this one here.
>
> **[1:39](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=99)** So in their component single we have an item that's been passed but we don't have type annotation for this one.
>
> **[1:47](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=107)** So let's go ahead and do that.
>
> **[1:49](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=109)** So we're going to go back into our single.js file and we're going to do some type annotation here.
>
> **[1:55](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=115)** So just below React we're going to remove the prop types here.
>
> **[2:00](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=120)** And then we can remove this.
>
> **[2:07](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=127)** And then what we're going to do is define what is the type item and what does it take.
>
> **[2:11](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=131)** So we're going to do type.
>
> **[2:15](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=135)** Item.
>
> **[2:17](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=137)** Which equals to an object.
>
> **[2:19](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=139)** And then we're going to define what this item is.
>
> **[2:22](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=142)** And let's go and define it.
>
> **[2:24](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=144)** So inside of that we got an ID which takes a number.
>
> **[2:30](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=150)** Then we have a title which takes a string.
>
> **[2:36](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=156)** Category which takes a string again.
>
> **[2:40](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=160)** And then what we could do is simply copy that line 'cause we're going to do a lot of strings.
>
> **[2:47](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=167)** And paste it here and this is the description.
>
> **[2:53](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=173)** Let's do that again for link.
>
> **[2:59](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=179)** And then release date.
>
> **[3:11](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=191)** Views again and then the image.
>
> **[3:12](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=192)** Views and then image.
>
> **[3:22](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=202)** And now what we need to do is pass that type inside of our single item here because we need to define what this item is, what type it expects.
>
> **[3:32](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=212)** So what we're going to do is do column and then pass items like so.
>
> **[3:38](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=218)** So basically what we're doing is defining that this type is what this item should be and once flow actually runs through that code it's going to expect this item to be of item like so.
>
> **[3:52](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=232)** So once we have that we can save the file and then go back to our terminal.
>
> **[3:56](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=236)** So I'm going to do control + shift + graphy, and this brings up a new terminal, it doesn't matter.
>
> **[4:01](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=241)** So we could do npm run flow.
>
> **[4:05](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=245)** Now you're going to see that we have a new error.
>
> **[4:07](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=247)** So we got this type defined but we don't have this type defined.
>
> **[4:12](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=252)** So you can go ahead and define each and every type that it's taking as you go along with the code.
>
> **[4:17](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=257)** And it's basically following the same examples that we just did.
>
> **[4:20](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=260)** So type checking adds an extra layer of safety while developing your application and prevents the wrong type of data from being passed to your components.
>
> **[4:28](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=268)** As your application scales in size and complexity you'll see how useful this is for debugging and prevention of these potential bugs.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), pass (3), this. (2), match, (1), type. (1)
> **Tools:** terminal (4)
> **File Paths:** single.js (2), package.json (1)
> **CLI Commands:** npm (3)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Warnings:** warning (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### React StrictMode behaviors
> [LinkedIn Learning](https://www.linkedin.com/learning/react-testing-and-debugging/react-strict-behaviors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/react-strict-behaviors?u=76281980&t=0)** - [Instructor] Let's explore React StrictMode, a development aid that helps you write better React code by enforcing best practices.
>
> **[0:08](https://www.linkedin.com/learning/react-testing-and-debugging/react-strict-behaviors?u=76281980&t=8)** React StrictMode is like a lighthouse illuminating the rocky shores of your code base.
>
> **[0:14](https://www.linkedin.com/learning/react-testing-and-debugging/react-strict-behaviors?u=76281980&t=14)** It's a feature you can apply to parts of your app to help catch potential issues early in the development phase.
>
> **[0:21](https://www.linkedin.com/learning/react-testing-and-debugging/react-strict-behaviors?u=76281980&t=21)** Think of it as a linting tool for component behavior.
>
> **[0:25](https://www.linkedin.com/learning/react-testing-and-debugging/react-strict-behaviors?u=76281980&t=25)** So why use StrictMode?
>
> **[0:27](https://www.linkedin.com/learning/react-testing-and-debugging/react-strict-behaviors?u=76281980&t=27)** It helps with future-proofing your app, making sure it's ready for upcoming changes in React Score.
>
> **[0:33](https://www.linkedin.com/learning/react-testing-and-debugging/react-strict-behaviors?u=76281980&t=33)** StrictMode checks your code for deprecated methods, warns about side effects in the rendering phase, and encourages best practices by flagging issues like the old string ref API.
>
> **[0:46](https://www.linkedin.com/learning/react-testing-and-debugging/react-strict-behaviors?u=76281980&t=46)** To use StrictMode, simply wrap your component with React's StrictMode, like so.
>
> **[0:52](https://www.linkedin.com/learning/react-testing-and-debugging/react-strict-behaviors?u=76281980&t=52)** This won't affect your production build, but will activate checks and warnings in development.
>
> **[0:58](https://www.linkedin.com/learning/react-testing-and-debugging/react-strict-behaviors?u=76281980&t=58)** Combine this with thorough testing and debugging, and you'll ensure your app is robust, maintainable, and up-to-date with the latest React standards.
>
> **[1:07](https://www.linkedin.com/learning/react-testing-and-debugging/react-strict-behaviors?u=76281980&t=67)** React StrictMode is a powerful ally.
>
> **[1:10](https://www.linkedin.com/learning/react-testing-and-debugging/react-strict-behaviors?u=76281980&t=70)** It's like having a seasoned developer over your shoulder, guiding you to better practices and a cleaner, safer code base.
>
> **[1:18](https://www.linkedin.com/learning/react-testing-and-debugging/react-strict-behaviors?u=76281980&t=78)** Start using it today and keep your React applications on the cutting edge.

> [!info]- Semantic Content
>
> **Analogies:** think of it as (1), it's like (1)
> **Code Keywords:** let (1)
> **Env Vars:** api (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/react-testing-and-debugging/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/next-steps?u=76281980&t=0)** - This course was an introduction to testing and debugging React applications.
>
> **[0:05](https://www.linkedin.com/learning/react-testing-and-debugging/next-steps?u=76281980&t=5)** With the tools we've explored here you should have a good basic understanding of this complex subject.
>
> **[0:10](https://www.linkedin.com/learning/react-testing-and-debugging/next-steps?u=76281980&t=10)** If you haven't used testing and debugging tools before, I'd recommend diving in deeper with the utilities and methods we've explored.
>
> **[0:18](https://www.linkedin.com/learning/react-testing-and-debugging/next-steps?u=76281980&t=18)** Try them with one of your own applications to understand the impact that they can have in your workflow.
>
> **[0:24](https://www.linkedin.com/learning/react-testing-and-debugging/next-steps?u=76281980&t=24)** Once you're comfortable, I'd suggest that you further explore Jest and Flow.
>
> **[0:28](https://www.linkedin.com/learning/react-testing-and-debugging/next-steps?u=76281980&t=28)** For example, you could use Enzyme with Jest to manipulate and assert your components in various ways.
>
> **[0:34](https://www.linkedin.com/learning/react-testing-and-debugging/next-steps?u=76281980&t=34)** You can get started with any of these advanced concepts by exploring the documentation, which is always the best place to get more information on the tools you're using.
>
> **[0:43](https://www.linkedin.com/learning/react-testing-and-debugging/next-steps?u=76281980&t=43)** Remember, while many developers have decided to use some or all of these tools, there are others that can do similar tasks.
>
> **[0:50](https://www.linkedin.com/learning/react-testing-and-debugging/next-steps?u=76281980&t=50)** What you ultimately decide to use is up to you and your dev team.
>
> **[0:55](https://www.linkedin.com/learning/react-testing-and-debugging/next-steps?u=76281980&t=55)** Thanks very much for taking my course, and I'll see ya in a bit.

> [!info]- Semantic Content
>
> **Code Keywords:** assert (1)
> **Documentation:** the documentation (1)
> **Analogies:** for example (1)
> **Speakers:** - this (1)


## Instructor

- [[Emmanuel Henri]]

## Resources

- Exercise files available

## Skills Covered

- Debugging
- React.js

## Path Context

### In [[Improve Your React Skills]]
← [[Building Modern Projects with React]] | **5 of 9** | [[React- Authentication]] →

## Appears In

- [[Improve Your React Skills]]

## Related Courses

_Courses sharing skills:_

- [[React- Cloud-Powered Apps with Firebase]] — React.js
- [[Building a GraphQL Project with React.js]] — React.js
- [[React- Software Architecture]] — React.js
- [[React- Building Styles with CSS Modules]] — React.js
- [[Building Modern Uis With React Router V6]] — React.js

---

[↑ Back to top](#)