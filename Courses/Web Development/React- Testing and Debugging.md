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
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/React-%20Testing%20and%20Debugging.md)

![React: Testing and Debugging](https://media.licdn.com/dms/image/v2/D4E0DAQHBryMEI_iM-g/learning-public-crop_675_1200/B4EZYbJj22HcAY-/0/1744212213875?e=2147483647&amp;v=beta&amp;t=o3URCyLQJOCiA-wJb7KVYCcHv_jxaK-eK2YJEVGTp48)

# React: Testing and Debugging

> Tracking down bugs in React—and the many different pieces it communicates with—can be a challenge. While basic JavaScript testing and debugging tools certainly work, solutions designed specifically to work with React will save you time and effort. This course covers those tools, as well as tips and techniques to help you find, diagnose, and fix problems in your apps. Watch and learn how to test Re

> [LinkedIn Learning](https://www.linkedin.com/learning/react-testing-and-debugging) | 1h 33m | Intermediate | 40K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Testing and debugging your React apps](#testing-and-debugging-your-react-apps)
  - [Course prerequisites](#course-prerequisites)
  - [Introduction to CoderPad](#introduction-to-coderpad)
- [**1. Setting Up**](#1-setting-up) (6 videos)
  - [Your test project](#your-test-project)
  - [An overview of your toolset](#an-overview-of-your-toolset)
  - [React Developer Tools](#react-developer-tools)
  - [Jest introduction](#jest-introduction)
  - [Type checking with Flow](#type-checking-with-flow)
  - [Linting with ESLint](#linting-with-eslint)
- [**2. Testing with Jest**](#2-testing-with-jest) (8 videos)
  - [Test strings with matchers](#test-strings-with-matchers)
  - [Test numbers with matchers](#test-numbers-with-matchers)
  - [Solution: Test numbers with matchers](#solution-test-numbers-with-matchers)
  - [Test arrays and objects with matchers](#test-arrays-and-objects-with-matchers)
  - [Solution: Test object with matchers](#solution-test-object-with-matchers)
  - [Code coverage reports](#code-coverage-reports)
  - [Snapshot testing with Jest](#snapshot-testing-with-jest)
  - [Organize your tests with describe()](#organize-your-tests-with-describe)
- [**3. Debugging with Chrome and Extensions**](#3-debugging-with-chrome-and-extensions) (5 videos)
  - [Debug with Chrome introduction](#debug-with-chrome-introduction)
  - [Debug with React DevTools](#debug-with-react-devtools)
  - [Test your network and performance](#test-your-network-and-performance)
  - [Run an audit in Chrome](#run-an-audit-in-chrome)
  - [Debug resources to find answers](#debug-resources-to-find-answers)
- [**4. ESLint and Types**](#4-eslint-and-types) (3 videos)
  - [Code improvement with ESLint](#code-improvement-with-eslint)
  - [Solution: Practice ESLint best practices in a component](#solution-practice-eslint-best-practices-in-a-component)
  - [Type checking with Flow](#type-checking-with-flow)
- [**Conclusion**](#conclusion) (2 videos)
  - [React StrictMode behaviors](#react-strictmode-behaviors)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Testing and debugging your React apps](https://www.linkedin.com/learning/react-testing-and-debugging/testing-and-debugging-your-react-apps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/testing-and-debugging-your-react-apps?u=76281980&t=0)** - Have you ever felt lost or frustrated while working on a [[React.js|React]] project, unable to figure out what's wrong with your application code? Mostly likely, you've got a bug. Maybe you're just getting started, have little or no experience debugging a React application, or maybe your code is really complex and you find that you're really close to giving up. Well, despair no more, as I'm here to introduce you to several tools that will help you understand specifically what's gone wrong and what you can do to fix it. Hi, I'm Manny Henri and I've been working with React since it was first introduced and I'm here to help you in your quest for bug extermination. In this course, we'll first set up all the tools we need. We'll explore testing with Jest and we'll run some example tests, create a snapshot, and do conference reports. Next, we'll go over the Chrome and React devtools and how we can find the source of our bugs and resolve them. Finally, we'll improve code syntax, bug prevention, and performance by using type checking, [[ESLint]] and our devtools. So if you're ready to exterminate these annoying bugs, open your favorite text editor and let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (4), [[ESLint]] (1)
> **CLI Commands:** find (2)
> **Prerequisites:** getting started (1), set up (1)
> **Speakers:** - have (1)

#### [Course prerequisites](https://www.linkedin.com/learning/react-testing-and-debugging/course-prerequesites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/course-prerequesites?u=76281980&t=0)** - [Instructor] As this course is focused on the exploration of tools for debugging and testing [[React.js|React]] applications, some experience with React is a must. If you aren't familiar with creating React components, using props, and importing modules, I'd suggest that you take a basic React course to learn the fundamentals. Also, experience with [[JavaScript]] is a must for this course, as this is the basis of a React programmer. Next, being familiar with Terminal commands and MPM isn't a must, but definitely will help you when we use these tools. As you'll see, I'm running on a PC, but you can follow along on a Mac as the tools work exactly the same on both platforms.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (5), [[JavaScript]] (1)
> **Definitions:** is a  (2)
> **Env Vars:** mpm (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Introduction to CoderPad](https://www.linkedin.com/learning/react-testing-and-debugging/instructions-for-coderpad-25725715?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/instructions-for-coderpad-25725715?u=76281980&t=0)** - [Instructor] In this course, you'll have an opportunity to be tested on the knowledge you'll gain throughout, and we're doing this through a series of coding challenges. When you first open the coding challenge, you'll be presented with four areas, like this. The top left gives you the specific instructions on what is the goal of the challenge, and what you need to accomplish. The screen on the top right is where, in most cases, you'll have to add or change the code to make the test succeed, or render the component properly, which you can see on the bottom left here. You can also see the Console output if you need to check it. Finally, in the bottom right, you see the test code, which you might have to change or add new code in some exercises. Just follow the comments and instructions to see where you need to change or add new code. Once you're done updating, what you can do is Test my code to submit your code to finalize your test, like so. So, right now, you can see that test pass here and those two tests that failed, so you need to still work on it. So, go through the exercise, and good luck.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)


### 1. Setting Up

[↑ Back to Table of Contents](#table-of-contents)

#### [Your test project](https://www.linkedin.com/learning/react-testing-and-debugging/your-test-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/your-test-project?u=76281980&t=0)** - [Instructor] If you took my course, [[From React to React Native]], the project we'll use in this course to test and debug will look familiar, as it's the same app. If you don't have access to the exercise files and didn't take the other course, no worries. You can pretty much take any project you're working on and apply the same concept we'll be exploring here. If you do have access to the exercise files you'll need to do the following steps in order to get this project up and running. So I am on my desktop, and I'm going to create a brand new folder right here. So right click and then create a folder. You can do the same on Mac and then call this testing. And then I'm going to go into the exercise files and then click on Resources and open that folder here as well. And basically copy everything that we have in the Resources folder. So copy that, so Ctrl + C on [[Windows]], Command + C on Mac, and then paste it into this folder. Once you have this, all you have to do is open this in your favorite editor. In my case, I'm working with Visual Studio Code, so I'm going to right click and Open with Code. And if you're on a Mac, you can simply drag and drop that folder inside of Visual Studio Code. Once you're inside of Visual Studio Code, you can go ahead and open up a Terminal. So you can click on Terminal, and then New Terminal. And then make sure
>
> **[1:32](https://www.linkedin.com/learning/react-testing-and-debugging/your-test-project?u=76281980&t=92)** that you are in the root folder of that project. We're going to do [[npm]] install, or I, shortcut for install. Okay, so when you have all the dependencies installed, let's explore a little bit what this project is. So I'm going to minimize this a little bit. And then let's take a look at the source folder. So the source folder is where you have all the files. So you have the regular index, which is a [[React.js|React]] application, and then you have the index.tss. So in the data folder you're going to have a [[JSON]] file, which will have all the data that we're going to need to run this application, and we're going to have a static file as opposed to persist with a server or database. And then you have the components, and inside of the components you have listings, a grid, and a single. So basically inside of the app.js file, we run a grid of single items or single components, which we're going to see in a few seconds. I'm going to run the application and you'll see what I'm talking about. And this is pretty much standard React code that we're going to use to test and debug. So if we do npm start, this is the application that we are going to test and debug. So for your information, if you didn't take the course that I just referenced, this is a React application built from the ground up with Create React app [[CLI]] command. The data is a static json file created in the data folder as I explore earlier. Okay, so now we have our application properly set up and ready to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (5), [[npm]] (2), [[JSON]] (2), [[React Native]] (1), [[Windows]] (1)
> **Tools:** visual studio (3), terminal (3)
> **Prerequisites:** install (2), you'll need (1), set up (1)
> **CLI Commands:** npm (2), make (1)
> **Exercise Files:** exercise files (3)
> **Definitions:** is a  (3)
> **UI Navigation:** click on (2)
> **File Paths:** app.js (1)

#### [An overview of your toolset](https://www.linkedin.com/learning/react-testing-and-debugging/an-overview-of-your-toolset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/an-overview-of-your-toolset?u=76281980&t=0)** - [Instructor] Testing and debugging [[React.js|React]] applications involves multiple tools. So I'll briefly introduce you to these as we install them over the course of the next few videos. For any type of [[Web Development]], our first tool of choice is the dev tools that comes with our own browser. Whether you use Chrome, Safari, Firefox, or Edge, you have the tools needed to inspect your code, do performance checks, and more. In this course, we'll specifically use Chrome's internal tools. And I highly recommend that you use either Chrome or Firefox, as they offer solid performance and work with the extensions we'll use. So as a developer, you'll probably use Chrome's developer tools. But if not, you can access them on a Mac by doing Option-Command-I and on a Window, Control-Shift-I, like so. And let me position this at the bottom. So I'm going to click here and then position it at the bottom like so. And just going to increase the screen in state for that. And these are the elements that we're going to work with inside of this browser. So we have the source code for that application. We have the network, which is basically when we're trying to access elements inside of the application, the performance of the application, the memory use, and more related to development. So this is the foundation of our tool set. On top of this, we'll add an extension in the next video to help us inspect React components.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (2), [[Web Development]] (1)
> **Tools:** firefox (2), safari (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** source code (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [React Developer Tools](https://www.linkedin.com/learning/react-testing-and-debugging/react-developer-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/react-developer-tools?u=76281980&t=0)** - [Instructor] One of the first tools I go to when developing [[React.js|React]] components is the React Developer Tool. It's an extension available for Chrome, Firefox, and also as a standalone download. So when we were looking at the developer tool, you should've seen something that says Components and Profiler on my end but not on your end if you don't have the tool installed. So let's go ahead and take a look at where you can install it. So you can install the Chrome extension by going to the Chrome Web Store and then look for React Developer Tool. Once you find that, you can actually add it to your Chrome. As you can see, I already have it installed on my Chrome version. You can also find it for Firefox. Same thing, React Developer Tools. And then add it. And finally, if you don't use any of those browsers, you can install the react-devtools standalone and go to [[npm]] and install this one here. Once you have it install, you're going to have the Components and the Profiler. The Profiler is basically something that gives you stats on your actual components and how your application is running. And the Components is where you can see your components. So if you click on Components, you're going to see that right now I have the first app component and then the grid. And as you can see, as I hover over these elements, you're going to see that they're also showing on my browser. So if we scroll over grid and then the single, you're going to see that each item that I hover over it is going to be a highlight.
>
> **[1:32](https://www.linkedin.com/learning/react-testing-and-debugging/react-developer-tools?u=76281980&t=92)** And you also see the props and the state and a lot of information about your application that is particular to React. So if you want to take a look at the state from the app, which is where the state resides, you're going to see that all of the elements of my state is there and I have all the props, which are then passed to the grid. And then you can see the props items are here. And then each item gets its own props. So all the items for that particular item is inside of that single key here. So with the React tool installed, we're ready to move on and explore Jest.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (7), [[npm]] (1)
> **Prerequisites:** install (5)
> **CLI Commands:** find (2), npm (1)
> **UI Navigation:** go to (2), click on (1)
> **Tools:** firefox (2)
> **Env Vars:** npm (1)
> **Speakers:** - [instructor] (1)

#### [Jest introduction](https://www.linkedin.com/learning/react-testing-and-debugging/jest-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/jest-introduction?u=76281980&t=0)** - [Instructor] The beauty of starting a [[React.js|React]] project with Create React App is that you get some very useful tools like Jest. So, in other words, there's no installation needed as Jest comes pre-installed and ready to go. It even has an example task, so let's take a look at it in action. So if you go inside of the project that we just set up, and go into the components folder, you're going to find a file that says app.test.js. And this is one test that's already inside of your application when you create a new application with React. So this test is basically telling you that it renders without crashing, so that means the application's running without crashing. So if you want to test this, you can stop the application by doing control C or command C on a Mac. Here, let me just let me put more screen estate here, and then all you have to do is [[npm]] run test, and this is going to run the test command from your package.[[JSON]] file. So if you look at the package.json file, we have a test script in here. And it's going to run this command, so let's go ahead and do that. And basically, this is what it gives you. So it gives you the summary of your tests, so one test suite has passed. This one here, so basically what it did, it ran the application and tested this, that it runs without crashing, so the application is actually running without crashing. And then you have all these other options
>
> **[1:34](https://www.linkedin.com/learning/react-testing-and-debugging/jest-introduction?u=76281980&t=94)** that we'll explore later. So you can actually rerun the test again, quit the test, and so on, so forth. And that's it; so you've got a very capable testing utility right out of the box when you use Create React App. So let's move on to the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (4), [[JSON]] (2), [[npm]] (1)
> **File Paths:** package.json (2), app.test.js (1)
> **CLI Commands:** find (1), npm (1)
> **Cross-References:** next video (1)
> **Definitions:** in other words (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Type checking with Flow](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow-2?u=76281980&t=0)** - [Narrator] Type checking gives us another tool to prevent bugs and find errors in our code. So, if you're not familiar with type checking, it allows us to define what type of values or variables, objects, and functions should accept. This prevents a lot of unexpected behaviors in our code where we'll be able to see why some of our code doesn't [[React.js|react]] to way it should, so, let's go ahead and install flow. So, I'm going to go back into VS code. And once I'm back into VS code, I'm going to open a terminal. You want to make sure you're in the root directory of the project. So, let's click on terminal, new terminal. And then the first thing we're going to do is install flow bin. So, let's do [[npm]] i, or short for install, flow-bin, and then save this as a dev dependency. So, let's do --save-dev like so. Once this is done, let's minimize our terminal for a second because we're going to go back to it. And then let's open the package.[[JSON]] file right here in the root directory. And you should see now, in the dev dependencies flow bin, like, so. So now, what we're going to do is add the script. So, whenever we do NPM run flow, it's going to run flow. So, let's go ahead and go on line 18, do a comma and an add flow as a script. So, it's basically going to run flow, like so perfect. So now, what we're going to do is initialize a file that we need in order to run flow. So, we're going to go back to our terminal
>
> **[1:35](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow-2?u=76281980&t=95)** and now that we have that script that we can use, we're going to do npm run flow and in it, so we can initialize it first, like, so. So, as you can see, I already have that file in my project, but if you don't have it, what you should see is a flow config file, that's going to show up right here. So now, in order to use flow, we need to add a little comment inside of a file that we want to check for types. So, the first thing we're going to do is go back to one of these files. So, the first one we're going to do is in App.js right here. And then at the top, we're going to add a comment, so, let's enter twice and then let's add a comment and then you can do @flow. So, what's going to happen next, when we run npm run flow, or basically flow, it's going to look for every file with this comment here and then check for types inside of that file. So, let's go ahead and save that file, like, so, and then let's go back into our terminal and then let's do npm run flow. So, if we executed that command before we did the flow, it would say no errors because there's no file that it's checking. So, if you want to remove it, you can actually remove it first like, so save the file and run flow. And now, as you can see, there's no errors.
>
> **[3:07](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow-2?u=76281980&t=187)** It had to do some compiling the first time, but now it's going to go a lot faster. So, let's go ahead and re-add that comment that we just did. So basically, going to do Ctrl + Z to undo or Cmnd + Z on a Mac, save that and then run that command again. And now, you're going to see that it actually checked some stuff and it found some errors. So, this is exactly what we expect, and as we actually go through flow, we're going to check what we have as errors and correct them. So, as you can see, we'll have some work to do later on, but that's the beauty of all these tools. We get great advice on how to fix it, so, let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (5), [[React.js|React]] (1), [[JSON]] (1)
> **Tools:** terminal (6), vs code (2)
> **CLI Commands:** npm (5), find (1), make (1)
> **Prerequisites:** install (3)
> **File Paths:** package.json (1), app.js (1)
> **Cross-References:** go back to (2)
> **UI Navigation:** click on (1), open the (1)
> **Definitions:** short for (1), is a  (1)

#### [Linting with ESLint](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=0)** - [Instructor] You can't talk about bugs or bad syntax prevention without talking about linters. Linters are by far one of the best tools to help prevent bad code and syntax errors from finding their way into your app. They also give you great tips about standards. So let's go ahead and set up our linter with some rules. I use Airbnb standards along with some rules for [[React.js|React]]. They're very strict and conform to high standards as you'll see in a minute. But all these warnings can help you becoming a better developer. So the first thing you need to do if you're using VS Code is to have the extension that will allow you to see the errors inside of VS Code. So you click on Extensions. And then search for [[ESLint]] like so. And then select the first one here. It's by Dirk Baeumer, like so. And then install this extension. You may have to restart VS Code. If that's the case, go ahead and do it. And then follow along for the next steps. So once you're done with this, let's close this and then go back to our project. And I'm going to open components so we can take a look at a file once we have ESLint installed and initialize. So the first thing we need to do and by the way, this step used to be a lot of manual entries, manual installations. Now it's all automated for us. So it's really efficient now. So let's bring up a terminal. Let's click on Terminal, New Terminal and then what we're going to do first is install ESLint globally. So I'd like to have it globally because I'd like to use it on multiple projects. Feel free to install it locally but I'm going to install it on my system. So let's do [[npm]] i or install.
>
> **[1:36](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=96)** G for global. And then eslint, like so. Once you have that installed, you're ready to go with ESLint and initialize a new file. But what we're going to do is use that initialize file and answer a few questions so it sets up everything for us and it installs the dependencies, so that's the easy way now. So let's do eslint --init. And what you want to do is select the third option because we want to actually enforce a code style, which is Airbnb. So let's go ahead and do that. So we're going to select the third one. If you want to check for syntax only, you can select this one. If you want to find problems, you can do this one but I'm going to enforce a code style as well, so let's select the third option. Now, the first thing you need to select for this one is [[JavaScript]] modules and if you're using common JS as opposed to JavaScript modules, you can select that option. We're using React but if you're using [[Vue.js]] or something else, you can select the different options. We're not using TypeScript in this project but if you were, you can select yes, but on this case, we're selecting no. And I'm going to select all for this. And now we're selecting our style. So use a popular style guide and what we want to use is the Airbnb. So if you want to follow something else, you can follow the [[Google]]'s way of linting but in this case, I'm going to follow Airbnb. And then we want to set up the file as a [[JSON]] file.
>
> **[3:09](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=189)** So basically, this is the configuration file where we'll all the configurations afterwards. I'm used to the JSON format, so this is what I'm going to select. And then it's checking the dependencies that we need in order to run ESLint with these styles. And you want to install them by saying yes. Otherwise, you're going to have to do the manual process of installing these dependencies. So I'm going to allow this process to install it by itself. So once this is all done, you should see now a ESLint file. So this is the configuration file that basically, this process initialized for us. So if we close this and we'll take a look at what has been done for us, you can see that now we have React and Airbnb as the styles of linting that we're going to have in our project and a whole bunch of stuff that are dependencies for this to happen. So if we close this, and then open any of the files, we're going to see now linting done automatically for us. And as you scroll over this, you're going to see what exactly the rule that is being enforced. So a quick note, the errors you see are specific to ESLint and won't break your code, unless there is an error that impacts the app. ESLint looks for errors specific to industry best practices or company standards and also, rules that you've applied in your config file. In the end, these rules are in place to help you become a better developer and write cleaner code. So as you can see, I've been a bad boy with my code.
>
> **[4:44](https://www.linkedin.com/learning/react-testing-and-debugging/linting-with-eslint?u=76281980&t=284)** So as we work on our code over the course, we'll fix some of these. So now that we've got all our tools ready, let's start doing some testing with Jest.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ESLint]] (10), [[React.js|React]] (3), [[JavaScript]] (2), [[JSON]] (2), [[npm]] (1)
> **Prerequisites:** install (7), set up (2)
> **UI Navigation:** select the (5), click on (2)
> **Tools:** vs code (3), terminal (3)
> **CLI Commands:** npm (1), find (1)
> **Env Vars:** json (2)
> **File Paths:** vue.js (1)
> **Cross-References:** go back to (1)


### 2. Testing with Jest

[↑ Back to Table of Contents](#table-of-contents)

#### [Test strings with matchers](https://www.linkedin.com/learning/react-testing-and-debugging/test-string-with-matchers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/test-string-with-matchers?u=76281980&t=0)** - [Instructor] So let's keep going with now a test for strings. So we're going to do again some tests in our Grid.test.js because this is one that actually includes the data for our courses. So let's go ahead and do two more tests that are related to strings. So what I'm going to do now is actually add a variable. So let's create a variable that will be dataTest which equals to data[0].title
>
> **[0:32](https://www.linkedin.com/learning/react-testing-and-debugging/test-string-with-matchers?u=76281980&t=32)** and if you want to know, what we're actually using is this. So let's go into courses.[[JSON]], we're actually using position zero in our array, so basically this guy here, and the title is Building an App with ReactJS and MeteorJS. So if you want to check on the application as well you can actually go here. You're going to see that this is the first element in our application, so element zero in the array. So the title would be Building an App with ReactJS and MeteorJS. So you can see the application actually replicates what we just saw in their code. So let's go back to our code and now we have our tests running still so what we could do is use one of these functions to actually re-run it. So we can close the course.json and continue with our test. Now we have the title in this variable here so let's go ahead and test that string. So we can actually copy line five here but we're just going to change a few things. So let's use that, so paste that and the title of that test is going to change so there is a JS in this title. So we're going to look for JS inside of the title that we have in this variable. So what we're going to do is expect dataTest to match, and again, we're using a matcher, so toBe is a matcher as well, so toMatch and then we're going to insert this string here,
>
> **[2:07](https://www.linkedin.com/learning/react-testing-and-debugging/test-string-with-matchers?u=76281980&t=127)** so JS, like so. So basically what that means is that it's going to check inside of that variable if we have JS. So that should return true. So let's do another one. So let's copy that and paste it again and then we're going to test for [[React.js|React]]. So let's do this title, the title contains React. And now we can actually test a string with the matcher toContain. And again, if you want to know what are the matchers that exist, you can go to the JS documentation and see all the matchers that are available to you. And then let's enter something that's not in there, so let's do [[Angular]] so it returns false and then we'll do React so our tests pass. So we have Angular for now so this is not what we're looking for but I just want it to return false so you can see it. So let's save that and now our test suite automatically re-runs and it says 1 failed, 4 passed. So let's go and take a look which one failed. As expected, this expected Angular but it doesn't find Angular in the title here therefore it's false. So if we change this to React, like so, and save again, our test suite re-runs again and everything is passed.
>
> **[3:40](https://www.linkedin.com/learning/react-testing-and-debugging/test-string-with-matchers?u=76281980&t=220)** So if we had an error we would see the errors, but now everything is passed so we're good to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (4), [[Angular]] (4), [[JSON]] (2)
> **Code Identifiers:** datatest (2), tobe (1), tomatch (1), tocontain (1)
> **File Paths:** grid.test.js (1), courses.json (1), course.json (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Test numbers with matchers](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=0)** - [Instructor] Now, let's move on to Jest. Jest brings dozens of methods to support most of our testing needs. So, we'll start by using a few methods to test numbers within our application. So, the first thing you're going to do is make sure that your application is running. So, we're going to do [[npm]] start, and what we're going to do now is make sure that we know or understand how many elements that we have in our course here, so we can test the amount of data that we have in our application. So, what we're going to do is bring up the developer tools, like so. So, you can click on the three dots on the right corner, More tools, and then Developer tools, or you can use Control + Shift + I, or Command + Shift + I on a Mac to bring up the developer tools. And now, we're going to go into the components. And, as we can see, we have 12 elements in our grid. So, if you want to check the actual state, you can click on the app and take a look here, and you're going to see we have 12 elements, if we count the zero as well. So, let's do a test where we're going to test to the amount of elements that we have in our application. So, I'm going to minimize this, and then let's stop the application by doing Command + C on a Mac or Control + C on [[Windows]], and then let's go inside of our listings folder inside of our components, and then we have our Grid code here. So, what we're going to do is add a test for the grid. So, let's click on the listings folder and create a new file that we're going to call Grid.test.js, like so. And inside of that file,
>
> **[1:39](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=99)** so let me minimize my terminal for now, we're going to first import the data because we need the data that we have inside of our data folder here, so all the courses here. So, we need to import that in order to test. So, we're going to do this from ../.., and now we're back into our root folder, and we're going to go into data/, and then bring up the courses.[[JSON]], like so. And then, we're going to create a variable that will load the number of data inside of that file. So, we're going to do numItems equals to data.length, like so. So, it's going to count the amount of things that we have in our courses.json. And then, we're going to test this element. So, test one, we're going to call, Number of items should equal 12. So, basically, we're putting a title to that test. So, once we run the test, we're going to see that title show up. Then, comma and then run the function for that test like so. And this is, again, ES-5 and above, so expect numItems. So, basically, the variable that we have here, expect it toBe, which is basically a function that allows us to check to a specific element. In this case, 11.
>
> **[3:11](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=191)** So, this should return false because we don't have 11 items. We have 12. And then, we're going to do exactly the same test, but one test that should run true. And then, expect the number of items to be greater than 12.
>
> **[3:36](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=216)** And, again, boom, boom, boom, expect this numItem, and then we're going to change this function toBeGreaterThanOrEqual to 12.
>
> **[3:55](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=235)** So, this should return true because it's to be greater than or equal. And we should say, than or equal to 12. So, let's make sure we titled this properly. So, this should return false and this should return true. So, let's save all this, and let's go in here and run our test. So, let's go ahead and run our test by doing npm test. And I'm going to bring this up here, and you're going to see the results of our test. So, as expected, one failed and one passed. So, if we take a look at what actually failed, is this one here, so the number of items 12, which is the name of the test, expected to be 11, but received 12. So, as you can see, in our code, we expected it to be 11, and even our title was a little bit misleading. So, right now, to have this test true, we would need to change it to 12. So, let's go ahead and do that. So, I'm going to, basically, go into my code on line six here and change this to 12, like so. Save it, and then now the test are going to pass. Both of them. And if you want to make sure, you get the report as well, you can just exit out of that by doing Control + C, or Command + C on a Mac, and then doing npm test again. And now, you're seeing that test suite two passed,
>
> **[5:30](https://www.linkedin.com/learning/react-testing-and-debugging/test-numbers-with-matchers-2?u=76281980&t=330)** two total, and then the number of tests. We have another test that I showed you on the App.tests.js, which is, basically, rendering the application, so that's a third test that has passed. So, as you can see, matchers are great to test multiple assumptions around numbers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (3), [[JSON]] (2), [[Windows]] (1)
> **CLI Commands:** make (4), npm (3)
> **Code Identifiers:** numitems (2), tobe (1), numitem (1), tobegreaterthanorequal (1)
> **File Paths:** courses.json (2), grid.test.js (1), app.tests.js (1)
> **UI Navigation:** click on (3)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Test numbers with matchers](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-numbers-with-matchers-25724704?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-numbers-with-matchers-25724704?u=76281980&t=0)** - [Instructor] Okay, so let's go ahead and show you the solution for this particular challenge here. So what I'm going to do is just minimize this here, you know what needs to happen. So there's three things that needs to happen here. So we have three tests, one of which will actually succeed right now 'cause there's no code in it yet. So it will succeed. Those other two I want you to start getting familiar with reading tests with Jest. If you've never done any testing with Jest this is a good exercise for you, you're going to start being more familiar with it and you'll be on your way to be a testing master. So the first thing that we check here is the array. And we are checking position, the second position. So one is actually the second position, 0, 1, 2, 3, 0, 1, 2, 3 in the array.. We're actually checking the second position and we're saying this number should be even. That's not true. 'cause right now it's odd. And then we're doing the same thing at position three, which is the fourth number here. And we're saying that this should be odd. So all of this should fail and then the first test should actually pass because there's no code. So let's go ahead and test this. Test fail, test fail, and test pass. Number 10 is the right, because there's no code here. Okay, so let's go ahead and change these things by, first of all, fixing those two. So position one, which is here,
>
> **[1:33](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-numbers-with-matchers-25724704?u=76281980&t=93)** should be an even number. So I'm going to change this to four. And then the last number should be basically an odd number. So I'm going to put 11. But what we'd like to do here is find number ten in the array. So what we're going to do is actually start writing some code for a test. So what I'm going to do is, and if you looked into the documentation, you should have written something along these lines. So expect and were to pass numbers and we're going to pass the second one, which is the third one. So we're passing number two, which is this number in the array. And then we're going to say this number we expect it to be ten. So we're passing an integer here. So basically that should tell the test that we should have number ten at position number two. So if we run that test right now, it's going to say Uhuh wrong. The other two tests should pass, but this one doesn't because it's number eight. So let's go ahead and change this to number ten. And just want to make sure that my syntax is all good here. Yes. And then test my code and then all test have passed. So that's basically what I was looking for
>
> **[3:07](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-numbers-with-matchers-25724704?u=76281980&t=187)** in this particular challenge. I hope you had fun researching a little bit of Jest if you're not familiar with it. So this is a good starting point to help you understand what Jest can do.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (2)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Test arrays and objects with matchers](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=0)** - [Instructor] Often you'll work with arrays and objects in your data, and you'll need to test various scenarios related to these types. Jest offers a few specific object and array methods, which you can use in combination with other methods. Let's take a look at how to use them. So first, I'm going to go back into my Grid.test.js inside of my listing folders, inside of components. And what I'm going to do first before writing any code or testing code, I'm going to create an array. Let's go ahead and create that. So, I'm going to put some notes here, so this is Arrays, and then what I'm going to do is create an array. So, let's go ahead and create and array called data2. And we're going to pass inside of that array two titles, so two strings. So, one is going to be [[React Native]], and the other one is going to be [[React.js|React]], like so. And then, we're going to start testing. So, basically, one of the methods that we can use for arrays is to use arrayContaining as a method, and let's go ahead and do that. So, what I'm going to do is go ahead and do like before, so let's go ahead and copy that here. So, copy line 19 through 21, and then paste it here like so, and then again like before, we're going to add a title for this test, so we can take a look at what tests are failing when they actually fail, and we're going to call this one, The list of courses contains, or you can do mentions, whatever works for you, React Native and React.
>
> **[1:37](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=97)** And then, again, we're going to do a function like so, and then we're going to change a few things here. So, let me just remove everything here and just keep expect, like so. And then, we're going to do expect, and then we're going to do an array inside of it, or you could actually pass this array here, so we could do that as well, expect data2, and then, we're going to do .toEqual, and then in between that method, we're going to do expect.arrayContaining, and then data2. So, what's going to happen? This is going to return true whatever it is that happens here. Because what's happening here, it's taking the data to list, and it expects this to equal to this arrayContaining the same thing. So, let's make sure that we do something different here in the data2. So, what we're going to do is insert our own array in here. So, we want to, basically, mention what are the elements that should be part of that array, so that when it actually test to it, it actually contains these things. So, let's go and do React Native, and then do React, and then add a third thing like MeteorJS, like so. So, with this test, it expects to at least contain
>
> **[3:15](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=195)** these elements inside of this array. So, this in turn should return true. All right, so, now, let's do a similar test for objects. So, we're going to do an Objects section here because most often you're going to work with arrays or objects when you have data. And before we start talking about what tests we're going to do, just be mindful that we're using an object from this course list on [[JSON]]. So, this is an object, so we'll be able to work with this. So, we're going to, basically, do as usual. So, let's go ahead and copy what we've done here. So, let's copy that, and then paste it, and then call the title here. So, we're going to call this, The first course to have a property title.
>
> **[4:06](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=246)** And then, let's go ahead and remove this. So, we expect data at position zero to have a property. So, let's go and remove that. So, toHaveProperty. So, basically, we're checking the properties that are a part of this list. So, let's go back to our data, and then open up the courses.json, and the properties are these here, so the id, title, category, so on, so forth. So, at position one of this array, so this element here, we expect to have a property of, and then let's just add what we expect, title, and that would return true. So, if I wrote anything else but any of these elements, it would return false. All right, so let's go ahead and copy this test, and we're going to do now the exact same test, and make sure that we can pass a value. So, we can also pass a property, but also the value that's expected from that property. So, for example, if we look at courses.json, and we have 31,266 in the views properties. So, let's go ahead and use that. So, I'm going to copy that number here, like so, and then I'm going to write a brand new function. And, before I do that, I just realized that I said Proterty and not Property. Let's change that, and let's copy the value before I copy the testing here. So, I'm going to copy the testing, and paste it below.
>
> **[5:44](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=344)** And it's the same test, so let's also change that typo here. And we're going to change this to, The first course to have a property title and value of 31,266.
>
> **[6:03](https://www.linkedin.com/learning/react-testing-and-debugging/test-arrays-and-objects-with-matchers?u=76281980&t=363)** And then, what we're going to do is, in this test here, we can pass a second argument in this method, and this is going to be the value we're expecting, so 31,266 like so. And then, let's make sure that we remove that code because it's going to break our application, save this, and then bring up a terminal, and let's make sure we're in the root. We are, and now we can do [[npm]] run test. But, as you can see, our test has failed, and why is that? This is the reason. So, if we look back into our code, I did this on purpose, I didn't change this to views, I left title. So, title is actually, Building an App with React and MeteorJS. It's not 31,266. Now, if we change this to views like so, now all of our tests has passed. So, Jest has several other methods you can use in various ways and combinations. So, let me show you the page in question. And if you go to [jestjs.io/docs/english/expect](https://jestjs.io/docs/english/expect), you're going to get all the methods that you can use for matchers. So, these are really good methods that you can use to test any assumptions, or anything that you want to test with strings, numbers, arrays, and objects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (4), [[React Native]] (3), [[JSON]] (3), [[npm]] (1)
> **CLI Commands:** make (4), npm (1)
> **Code Identifiers:** arraycontaining (3), toequal (1), tohaveproperty (1)
> **File Paths:** courses.json (2), grid.test.js (1)
> **Prerequisites:** you'll need (1), before we start (1)
> **URLs:** [jestjs.io](https://jestjs.io) (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)

#### [Solution: Test object with matchers](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-object-with-matchers-25726643?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-object-with-matchers-25726643?u=76281980&t=0)** - [Instructor] Okay, so let's discuss the solution for this coding challenge. So I'm not going to go through the instructions. I think it's a good exercise to actually go through the test code here and read them to understand what we're looking for. So basically the two tests that we're actually looking for, and what needs to be updated, is one, we actually need to make sure that when we are rendering here, we're actually seeing the name and we're seeing the email, so the very first fix that we have to do is there's fixes in the test code too, but there are a fix that we need to do in here 'cause right now we're hard coding unknown. We need to pass the actual user. So the user here is passed, but not used anywhere in the component. So let's go ahead and do that. That's the very first fix. So we need to pass the user name. So if we go in here for the default user, you see we're passing a name, we're passing an email, we could also pass the idea, but we're not really looking for this. Okay, so now this one here, we need to pass the user.email, basically. Same thing like so. So now, our test would pass, but the problem is that our test are wrong. We need to fix our test as well.
>
> **[1:33](https://www.linkedin.com/learning/react-testing-and-debugging/solution-test-object-with-matchers-25726643?u=76281980&t=93)** So what do we need to fix here? So same thing here, we have to dynamically pass something in our test, and right now we expect to see on the screen, and we're getting the text to be in the document to be the correct name and email, and then the app to render properly. So what we need to do those two tests to actually pass is to add a few things, so basically, it's fairly simple what we need to to do here is basically pass, so we're passing a default user, so default user, and we need to pass the name, and we need to do the exact same thing here. This is not very complicated, but I wanted you to look at various examples of tests with text so you understand what is possible, what you can do, and get more experience with this particular framework. And it was the same thing here. There you go. Default user. There you go. So now that we have fixed all this just running Test My Code, we'll go and do all the tests, and all the tests have passed, so renders the correct username and email and then the app renders properly. So this was what was expected.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Code coverage reports](https://www.linkedin.com/learning/react-testing-and-debugging/code-coverage-reports?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/code-coverage-reports?u=76281980&t=0)** - [Instructor] As you build your application, it'll be hard to track which file have tests. And this is where a coverage report comes handy. Let's explore where that is. So before we do anything, I just want to remove that test here so we can have a report that has some failure or things that we haven't covered yet, so I'm going to comment all this code and save it like so. And then I'm going to go into the package.[[JSON]] file and then create a brand new script. So let's go ahead and after test, let's go and create a brand new script, and I'm going to call this one coverage. And it's going to be [[npm]] run test dash dash, and then dash dash coverage. So this will run the test as well as the coverage, and then let's save this. And you can close this file if you want, so as you can see right now, we're not doing a test for the whole applications. We're not taking a snapshot of the application, so let's go and open up a terminal, so we're going to click on terminal, new terminal. And then let's do npm run coverage, which is the script that we're going to run. And this calls this script here. Okay, perfect, so let's hit return on this, and now it's going to run our test and it has given us also coverage, so let's go all the way up here and scroll up,
>
> **[1:35](https://www.linkedin.com/learning/react-testing-and-debugging/code-coverage-reports?u=76281980&t=95)** and right now, we have zero coverage in the statements. In the branch, we have some coverage. In the functions, we have 100 percent coverage of the index here; we don't have any other coverage of the other functions. So let's change that. So the first thing we're going to do is uncomment that little text here so let's uncomment that and then save. And then our test is going to be run again and now, as you can see, we have a better coverage test. So now, because we're running basically a snapshot of our UI, we have the app.js grid and single that has been covered by this particular coverage. So how to read this coverage report is basically when you see the statement side here, this is basically the statement coverage, so as each statement in the program being executed, then the branch side is how each brand of each control structure has been executed, so for example, for an if statement, have both the true and false have been executed? So basically, has every edge in the program been executed? Now the function is a function coverage, so as each function in the program been called, and you can see that that's not the case, and then the lines, has each executable line in the source file has been executed? So these are all the things that you need to take a look at when you're doing a coverage report. And as you go through each file, you need to make sure that you are looking at
>
> **[3:09](https://www.linkedin.com/learning/react-testing-and-debugging/code-coverage-reports?u=76281980&t=189)** these elements here, and then validate that each of these elements have been executed properly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (2), [[JSON]] (1)
> **CLI Commands:** npm (2), make (1)
> **Tools:** terminal (3)
> **File Paths:** package.json (1), app.js (1)
> **UI Navigation:** click on (1), scroll up (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Snapshot testing with Jest](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=0)** - [Instructor] Jest snapshots allow us to test a UI at different points in time and prevent any unexpected changes. When change happens, either intentionally or not, our tests with throw an error to let us know. This way we can decide whether to update the snapshot or look into why the snapshot changed. Jest accomplishes this because it renders our component into a [[JSON]] file. And then takes a snapshot of this file. Then whenever we run our test, Jest compares the snapshot with the latest rendered output. If there is any difference between them, we get notified. So let's first install the package, then we'll refactor our app test to do the snapshots. So let's bring up a terminal inside of VS Code, so I'm going to click on Terminal, New Terminal. And then I'm going to do [[npm]] i, which is short for install [[React.js|react]]-test-renderer like so. Once this is installed, you can go ahead and close the terminal and then let's bring up App.test.js, which is in the components folder. So I'm first going to import the renderer. So let's go ahead and do that. So I don't need to have ReactDOM anymore, so let's go ahead and just import renderer from react-test-renderer like so. And then we're going to do a test here. So let's go ahead and do that. So I'm going to do test and then again, I'm going to call this test App snapshot test.
>
> **[1:39](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=99)** And like we've done before, we're going to pass a function into this method like so. And the first thing we're going to do, we're going to create a variable that will basically hold the components. So we're going to do that with renderer.create and then pass App. Like so. And then we're going to create a tree, which will hold the JSON data. So component.toJSON like so. And then with this, we're able to do the test. So expect the tree toMatchSnapshot like so and then you can delete this whole test here if you want. So basically, we're creating a variable which will hold the complete UI and then we're basically passing this to a tree variable, which will basically render this to JSON. And then the JSON will be tasked to what we have in the snapshot, like so. And then save this. So now we're ready to make the test. So let's go ahead and do that. So we're going to bring up the terminal again. And now we're going to do npm run test like so. And now you see that now we have a snapshot that has been written for us.
>
> **[3:14](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=194)** So if we take a look inside of our folder here, in components, we have now a folder that's called snapshots. And this is where this snapshot is. So once we rerun our test or make any changes to our UI, it's going to test again this snapshot here. So let's go ahead and make some changes. So let's go and bring the App.js. And I'm going to bring that down and what I'm going to do is remove this comment here. So I'm going to remove that. And then change Courses to Course list. And then let's bring up the terminal again because we're going to save this and it's going to rerun our test automatically. So let's save this. And now we have a snapshot test that has failed because our UI snapshot does not equal to what we have right now. So right now, it's going to show you exactly what has changed and what has changed now is the Course list because the other one was comment so it doesn't track that. So now we have a pass that has failed. So what options we have right now is to inspect the component in question. So I did make a mistake here. I want this to be Courses as opposed to Course list. Then I would change the UI again. But if you want to update the snapshot, all you have to do is type U and it's going to update the snapshot and then the test will actually pass. So let's go ahead and do that.
>
> **[4:47](https://www.linkedin.com/learning/react-testing-and-debugging/snapshot-testing-with-jest?u=76281980&t=287)** So you want to make sure you're in the terminal and then let's just do u to update, like so. So now it's updating the snapshot and now the snapshot has been updated and now the test has passed because now the actual snapshot reflects what we have in our application. So snapshots allow you to do spot checks on your UI. Almost in a similar fashion to how you do versioning with [[Git]]. Let's move on

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (4), [[npm]] (2), [[React.js|React]] (2), [[Git]] (1)
> **CLI Commands:** make (5), npm (2), git (1)
> **Tools:** terminal (7), vs code (1)
> **Env Vars:** json (4)
> **File Paths:** app.test.js (1), app.js (1)
> **Code Identifiers:** tojson (1), tomatchsnapshot (1)
> **Prerequisites:** install (2)
> **UI Navigation:** click on (1)

#### [Organize your tests with describe()](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=0)** - [Instructor] As your list of tests grows you might have the need to organize your tasks beyond the simple file organization. Each file is a test suite and then it runs a test inside of the suite. But you might need to organize your tests further and you can do this with the describe method. The main advantage of doing this is to block your test around the context of what you're trying to test. Let's refactor our code a bit to demonstrate an example and how you go about doing this. So I'm back into the grid.test.js where I have this big massive test here and what I'm going to do is refactor all this. So the first thing we're going to do is refactor the numbers area. So I'm going to hit return after the variable that I created here and I'm going to create a describe. And this is basically how you block several tasks together. So we're going to call this number test. And then again it's a function. And then all we have to do is cut the test that we have here and then paste them inside of that block, like so. And that's all we need to do. And then we can do the same for all the other areas. So we're testing strings here so let's go ahead and do the same. So we're going to do describe. And this is string test. Comma.
>
> **[1:38](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=98)** No arguments. And then open the function and then put those tests inside of it like so. And by the way don't pay attention to these errors that I'm getting from eslent here. So basically I'm using the four spacing as opposed to the two spacing which is the standard for AirBnb and that's where I'm getting these errors I'm certain are just the returns. So these can all be fixed inside of the rules and so on so forth. So let's go ahead and continue. So I have the string test and now I'm going to have the arrays and object test like so. So I can remove that. Create a describe block. So describe. Arrays and objects test. And exactly the same thing. So this is repetitive but it's good practice so you get this right. Let's put all these three inside of that block. And then let's remove the two unnecessary returns. So now I have the three tests in here that I'm going to run through a describe block. So now let's go ahead and test all this. So we have our tests inside of a describe block and let's go into the terminal again. New terminal. Then I'm going to do [[npm]] run test.
>
> **[3:14](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=194)** So now all my tests has passed and if you want to see how the titles are actually organized let's go ahead and make sure that one of the tests fails. So let's go to this one. So as opposed to 12, let's put 11 here. And that's going to make the test fail, so let's save that. And now we have a failure and let's go in here. And you're going to see that we have a failed test inside of the describe block number test. This test has failed. And if you want to rerun the test you can actually press W and then enter again. And by the way I've shown you this menu because in the past it was showing you a lot more information. Now it's very simple and simplified information but if you want to see more information you can actually press w here and get the full menu like so. So let's fix our test to make sure that it passes, bring it back to 12, let's save that. And now all of our tests will pass like so. So we have our snapshot, our eight tests that passed. We have our two test suites which is basically the two files and this is the time that it ran the test. So as you can see this can be useful as your lists of tests grows. You could organize them by snapshots, type of matches used, specific contents of the app, example API calls, et cetera. It helps organize your tests
>
> **[4:48](https://www.linkedin.com/learning/react-testing-and-debugging/organize-your-tests-with-describe?u=76281980&t=288)** and have a cleaner report when you run your test.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (1)
> **CLI Commands:** make (3), npm (1)
> **Tools:** terminal (2)
> **UI Navigation:** open the (1), go to (1)
> **File Paths:** grid.test.js (1)
> **Env Vars:** api (1)
> **Definitions:** is a  (1)
> **Best Practices:** good practice (1)


### 3. Debugging with Chrome and Extensions

[↑ Back to Table of Contents](#table-of-contents)

#### [Debug with Chrome introduction](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-chrome-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-chrome-introduction?u=76281980&t=0)** - [Instructor] Whenever there's a bug or your application isn't performing the way you expect, your first reaction should be to use the Chrome DevTools or the ones from your favorite browser. Earlier, we installed a [[React.js|React]] Dev Tools and they're also really handy when we need to debug our application. I'll explore this one next. I took a liberty of inserting a few bugs in our application if you are using the exercise files look into chapter three and then the start of 03 01, and if you aren't using them, I'll point out the bugs so you can reproduce them in your code. So if your application isn't running, please do [[npm]] start, and also open up a second terminal and run the test with npm run test. So if we take a look at my terminal, I have the test right now running, and then I also have the application running here. So let's go back to our browser. So as you can see there are a few bugs reported by both the console, the web browser, and then our test. The beauty of working with state of the art frameworks like React, is that you get really good bug reports with some helpful details. So let's take a look at what's happening here. So I'm looking at the console inside of Chrome right now, and it says Uncaught Reference Error, course is not defined, and I also get the same error here, and if I look into my test inside of VS Code, I'm going to get a similar response here. So let's go ahead and go into that file. So they say there's an error inside of App.js, so let's look into that file, and as you can see right now, we're stating course and we're using courses, and what we're importing as data is courses,
>
> **[1:37](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-chrome-introduction?u=76281980&t=97)** so we need to fix that here, so let's go ahead fix that, and then let's save, and then our test, we're going to run again, so if we go back to our browser, now we have a new error. So we have, inside of our components, and then Single.js, we have item is not defined, no undefined and then we get the same error here, so let's take a look at what's happening here. So let's go back to our code, and let's take a look at Single, and Single is not returning anything, so right now let's do a console log, and by the way, this is something that I do quite often when I want to actually figure out what's happening here, so console.log, I should have item pass into that single. So if I save that and then go back to my browser, and then refresh, I'm going to see that I don't have anything passed, so item is not defined. So let's go back to our code and let's figure out what's happening here, but the error's coming from Single but the item is not being passed, so first of all, we're not passing it inside of that component, so let's add it here. Do we get the error again? No, we're good, so now we have all the items are being passed here, and now we have our items showing up inside of our grid. So let's go back here and remove the console.log. But now we get another error. Each child in a list should have a unique key, and we also have a URL that actually informs us
>
> **[3:13](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-chrome-introduction?u=76281980&t=193)** on what the error is, so if we click on it, we're going to see that we always need to have a key prop in here and have something unique for each component inside of our grid. So in this case, let's make sure we add that in our code, so let's go back to our code here, and that probably happens in grid because right now this is the element that actually repeats itself multiple times. So let's make sure we add a key, so we're going to add a key here, and then do item.id, and save that again, and let's look at our test into our console here. Now our tests have passed, which probably means that our application is also running, which looks beautiful here, and if we look back into our code here, our application is running properly. So as you can see, there are many ways to accomplish the same thing, and knowing the different tools will help you in the long run. Sometimes the bugs will be obvious and easy to fix, but other times they'll require a bit more research.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (2), [[npm]] (2)
> **Cross-References:** go back to (6)
> **CLI Commands:** npm (2), make (2)
> **Tools:** terminal (2), chrome devtools (1), vs code (1)
> **File Paths:** app.js (1), single.js (1)
> **Env Vars:** url (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** exercise files (1)

#### [Debug with React DevTools](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=0)** - [Narrator] The reactive tools provides us with useful tools to inspect our components, the stake props space to a component, or even provide console commands to play what are components. So let's take a look at a few. If we go back into our browser and make sure your application is running, go into the components here. And this is again from the [[React.js|react]] dev tools. And the first thing you're going to see is that we have each of our components that we've built into our application listed here. So if we go back quickly to our application and let's close the terminal, you're going to see that we have our app.js, which is the first top component. And then we're passing the grid right here, which is the second level. And then into the grid, we are passing the single and we're returning it in this function here. So we have each single for each items in our data, which is basically what we have in the courses.[[JSON]] here. So if we take a look at all these and go back into our component, we're going to see all these components and all these single components based on the amount of elements that we have in our database. So we have 12 elements here, so 12 components. And it's going to be repeated as many times that we have objects inside of our array. So if we take a look at the top level here, we're going to have the state. If there's any props or a past to this particular component, we're going to see them here. And then we have our state, which is the courses and all the elements that we're passing to the grid. So if we take a look at the grid now, we see them as props, which are being basically passed here. And then each component has the elements
>
> **[1:32](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=92)** that actually belongs to it. So that basically generates and render this application here. So you can take a look at all these elements and basically determine if there's anything missing here. So let's say for example you were coding something and you're missing an element here and you still have the data that's been provided here. So let's say we didn't have the image and you're not passing it into the component. So you could go back to your code and then take a look at the single and then make sure you pass the image somewhere. So we're passing the views, release_date, so on and so forth, but we're passing the image here. So this is how you start testing and debugging your application. One more thing you could do in the console here, you can use some commands to get some information about your component or your application by doing dollar sign R and then dot. And then you have all these things that you have access to. So if you want to know more about the state and you are in the right element here, then you can actually call the state. And if you do R, and then let's say, for example, prop, you're going to see that you have items. And then you can click on these items, you have an item for that. And that's why we didn't have the state because we were at the top level of this application. We're actually in this element here. One more thing you can do is a profiler. So the profiler gives you performance based on components. So each component, how long it takes to load it. So let's go ahead and go to the profiler and then to get it started,
>
> **[3:05](https://www.linkedin.com/learning/react-testing-and-debugging/debug-with-react-devtools?u=76281980&t=185)** you can actually reload the application and start profiling, like so. So we're going to wait and then we can move and start playing with the components and stuff like that. And then when you want to stop recording, you can actually click on stop. And then you have some performance here. So you have the app that took one millisecond and then the grid, which loaded inside of the app. So all of these is combined into that top level component here and then the grid 0.5 and so on and so forth. So all of these elements took an amount of time in particular, and then in turn impacted your application, you can also rank them. So which elements in the component that actually loaded faster and the ones that loaded slower. So as you can see, the app is the slowest. And if you want to take a look at specific element, you can take a look at the single key one, which was the longest to load. And then if you had any interaction, so let's say for example, we have specific actions here that we have to click on, you'd see the actual time each of these interactions actually lasted. So now when a combination of the browser developer tools and reacts on, you should be armed to inspect, debug and kill any problems your application may have.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (1), [[JSON]] (1)
> **UI Navigation:** click on (3), go to (1)
> **Analogies:** for example (3)
> **File Paths:** app.js (1), courses.json (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** release_date (1)
> **Versions:** 0.5 (1)
> **Cross-References:** go back to (1)

#### [Test your network and performance](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=0)** - [Instructor] Chrome and many popular browsers have their own performance and profile tools to get more granular into your performance inspection of your application. And for Chrome they're called Network and Performance. Let's take a look at them. So right now I have already some data here because I already loaded the application at least once. So let's go ahead and reload the application. So when you do that, and you want to make sure you're on the Network tab inside of the DevTools. Sorry if you don't have that open you want to make sure you go to the three dots here. And then More Tools and then Developer Tools. Or Control + Shift + I for [[Windows]] and Command + Shift + I for Mac. So let's go ahead and reload the application like so. And basically it's the exact same thing that we were looking at when we looked at Profiler. The only difference here it's everything but more granularly the files themselves. So the actual file for jQuery, materialize.css. The Bundle.js which is basically the bundle build by [[React.js|React]]. All the images, and so on, so forth. And you see an actual performance in milliseconds for each of these elements. And if you want to get more information about each element you can actually scroll over the actual line item here and then get more information about the duration of the queuing. And when it actually loaded inside of your application. So this is fairly good when you want to get more information about any specific things. And then you can actually get even more granular.
>
> **[1:34](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=94)** So you can go into the [[JavaScript]] files and figure out what is the file that takes the longest. As you can see its the react_DevTools_backend that actually takes the longest. And the same with images and CSS files and so on, so forth. So whenever you have problems with an application, or if it doesn't load properly or fast enough. What you could do is go into these tools and figure out what are the issues and maybe mitigate them. Or prevent these things to happen. So if these images are way to long to load and that's slowing down your application. What you could do is basically minimize them and make smaller versions of these images when you load your application. So this is a good tool to look at the performance. So in combination with Profiler and Components you can start figuring out what are the issues inside of your application. The specific components, or basically the images. Or the files themself that are loaded, what are the problems? And when you want to actually make a report, or get more information about interactions. You go into the Performance tab. So what's going to happen is if you click Reload, it's going to start profiling pretty much like the Profiler. So let's go ahead and do that. And then let's interact with our application. So I'm going to scroll down, click on stuff. And so on, so forth. And as you actually interact with your application, it's going to create a report here. And what's really cool about that it actually gives you an image of what's happening inside of your application while you're actually doing things. And then the frame per second
>
> **[3:07](https://www.linkedin.com/learning/react-testing-and-debugging/test-your-network-and-performance?u=76281980&t=187)** which is basically how it's rendered inside of your server. And each of the components, how long it took and so on, so forth. So these are really granular report to give you performance indicators of your application. So once you've tested and debugged all the code issues that we've looked at earlier. Now it's actually time to do some performance test to validate that your application is going to load fast and efficiently with any other browser. So you can actually do this in Firefox as well. And many of the popular browsers have similar tools to actually test your application. So make sure you use these tools to understand more about your application. How fast it loads, and if there's any issues with specific files. And mitigate these issues.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (1), [[React.js|React]] (1), [[JavaScript]] (1)
> **CLI Commands:** make (5)
> **UI Navigation:** go to (1), scroll down (1), click on (1)
> **File Paths:** materialize.css (1), bundle.js (1)
> **Code Identifiers:** jquery (1)
> **Env Vars:** css (1)
> **Tools:** firefox (1)
> **Definitions:** is a  (1)

#### [Run an audit in Chrome](https://www.linkedin.com/learning/react-testing-and-debugging/run-an-audit-in-chrome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/run-an-audit-in-chrome?u=76281980&t=0)** - [Instructor] Running several reports to help figure out what's wrong or what could be fixed is great and you can do this with Chrome, so let's take a look at it. So I'm back into my browser and make sure the application is running and once it is running go to the developer tools and then go all the way till you see Lighthouse and then click on that tab. And this is the auditing feature that Chrome offers so you can do this report on both mobile or desktop so if you want to do a test on mobile you can click here and then on desktop if you want to do on desktop so in this case I'm going to do the desktop one and let's go ahead and generate report. And this is what Chrome provides you with. So you have a report that speaks to performance, accessibility, best practices, SEO, and progressive web app. Progressive web app is the ability to have an app offline so if your application actually does that then you're going to have a report on that but in this case it's not so I'm not going to get a report there. So basically you're going to see areas that you need to improve, areas that you actually [[Microsoft Excel|excel]] and if there's any issues or red areas, you're going to know about it as well. So let's quickly take a look at these [[Performance Metrics]] first and as you can see, if there's anything that needs to be improved, you're going to get detailed information about it so surf image in non gen formats, properly sized images, so these are things that could help improve this application. And then if you scroll down you're going to get the accessibility one which means basically that this is accessible for all types of devices. And then you're going to go down, best practices,
>
> **[1:35](https://www.linkedin.com/learning/react-testing-and-debugging/run-an-audit-in-chrome?u=76281980&t=95)** so right now we're not using HTTPS which is normal because we're doing this locally but if this was online then you would see a report on that as well and then if you click to any of these you're going to get more information about how to resolve this and what is the issue. So this is a really great report to get a lot of information about your application or website and at the SEO, so if you're not familiar with SEO it's basically [[Search Engine Optimization (SEO)|Search Engine Optimization]], that means that you have specific key words in your application that will allow people to find you on [[Google]] on any of these search engines out there. And finally the progressive web app so this is basically anything that has to do with an application that is offline so if you were to do this then you would see more information about this. So this is a great report to take a look at how the application performs in all these different aspects so make sure to do this audit before you actually publish your application or your website and it's going to give you some indication as to what you need to improve before you go out there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (1), [[Performance Metrics]] (1), [[Search Engine Optimization (SEO)|Search engine optimization]] (1), [[Google]] (1)
> **Env Vars:** seo (3), https (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** go to (1), click on (1), scroll down (1)
> **Definitions:** is a  (2), means that (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### [Debug resources to find answers](https://www.linkedin.com/learning/react-testing-and-debugging/debug-resources-to-find-answers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/debug-resources-to-find-answers?u=76281980&t=0)** - [Instructor] There will be times when you get really weird bugs or new ones you've never heard of. In these times, even after having gone through the tools, you're still scratching your head and are ready to throw your computer off the window. Don't despair, there are resources to help you resolve it. Most of the time someone else has gone through the same experience or error you just had, and most likely ask a question in one of the resources I'll show you. You just need to find this particular pose, and reproduce a solution and off you go. So let's take a look at in there. So let's say for example, I'm back here, and right now there's no bug in our application. Let's say I remove this particular key ID here and just save it. And then would go into my browser, and let's open the application, localhost and then go into the console, more tools. Dev tools and I get each child in a list should have a unique key prop. So let's say for example, I didn't have that link here. I would probably just copy that and the first resource I would go to is [[Google]]. So Google is the first place that everyone goes to and I'm not different. So this is what I would do. So I would literally paste the error that I get from [[React.js|react]]. And then I would go for the first link here, and then read through it. And probably the solution would be here. But let's say for example, I didn't find anything on Google. The second place I would go to,
>
> **[1:32](https://www.linkedin.com/learning/react-testing-and-debugging/debug-resources-to-find-answers?u=76281980&t=92)** even though it might be indexed on Google is Stack Overflow. So, if you don't have any resources online that you're going to find the error and the solution, I would go to stack overflow next and then ask a question. So let's say for example, I just drop this thing here, I would get some results and if I don't get a result, you can go ahead and ask a question and then drop your code and then the error that you're getting from the terminal. And therefore, eventually, somebody he's going to answer it and give you the answer. It typically takes him between 24 to 48 hours to get a good answer on your problem. If you're desperate and you can't wait for something, the other resource that I would go to is Reactiflux, which is a Discord server. So if you join Reactiflux, you're going to be on the server where there's people around [[React Native]], Redux, React, Jest, Relay and [[GraphQL]] which are all technologies from [[Facebook]]. And then you would be able to ask your question and most likely there's a developer that will answer it. Then if you found a bug or if you found something that is not found anywhere, the next thing that would go to is the [reactjs.org](https://reactjs.org) and then click on [[GitHub]] and then report that bug. So what I would do is go into the issues here on the actual Facebook react, GitHub repo and then create a new issue. This is a bug that I found, these are the issues that are coming out from the terminal and then this is the code that I use to get to that problem.
>
> **[3:06](https://www.linkedin.com/learning/react-testing-and-debugging/debug-resources-to-find-answers?u=76281980&t=186)** And most likely somebody is going to take a look at your blog and if you found a bug, eventually somebody's going to answer or suggest some solutions in the meantime while they're fixing the bug. So, these are the resources to figure out any bugs that you may have in your application. Use them wisely and you should be good to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (4), [[React.js|React]] (3), [[Facebook]] (2), [[GitHub]] (2), [[React Native]] (1)
> **UI Navigation:** go to (5), open the (1), click on (1)
> **Tools:** terminal (2), github (2), discord (1)
> **Analogies:** for example (4)
> **CLI Commands:** find (3)
> **Documentation:** stack overflow (2)
> **Definitions:** is a  (2)
> **URLs:** [reactjs.org](https://reactjs.org) (1)


### 4. ESLint and Types

[↑ Back to Table of Contents](#table-of-contents)

#### [Code improvement with ESLint](https://www.linkedin.com/learning/react-testing-and-debugging/code-improvement-with-eslint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/code-improvement-with-eslint?u=76281980&t=0)** - [Instructor] If you ever wondered about [[JavaScript]], [[React.js|React]] or industry standards, linters are a good place to start to improve your compliance. In the previous video, we set up ES lint to allow us to improve our application code with industry standards. Now let's take a look at what errors ES lint shows us, what to do with these errors, and where to look for references for these standards. So I'm back into VS Code, and I have the grid.js file open and what I'm going to do is go one by one where I see this red line, which is basically where errors are. You can also bring up the terminal, so click on terminal, and then go to the initial terminal like so, and then go to problems here, so it's going to show you problems in your application based on where you are. So grid.js is where we are, and we have all these errors that we have inside of that particular file. So if I click on here, it's going to show us this error. And so on, so forth, like so. If you want to get more information about this, you can actually show fixes and then, what you could do is actually fix the problem right here. Or you could do it actually in the application, so I'm going to fix it here, so fix this semi-problem, and I got this issue resolved. If I am in the file, and I see these errors, I'm going to basically click where I'm at, and then do control dot on [[Windows]] or command dot on Mac like so, and it's going to show us the same recommendations that we would see inside of our problems here.
>
> **[1:34](https://www.linkedin.com/learning/react-testing-and-debugging/code-improvement-with-eslint?u=76281980&t=94)** So let's say, for example, disable react/destructuring-assignment for this line, and so on, so forth. But let's say, for example, you have no idea what they're talking about. What is this react/destructuring-assignment? You can actually show documentation for react/destructuring-assignment like so. And then you click (computer chimes) and then, yes, let's open this into an external website. And then you would be brought exactly where you have more documentation about this particular rule. So this is on a [[GitHub]] repo where they document all the rules specific to that plug-in, so if it was about Arabian Bee's rules, we would get directly to that documentation, so let's say, for example, you wanted to understand what this is exactly. You would see all the information here. So what are the rule details? How can you fix it? And so on, so forth. Or you can simply click here, and then do control dot, and disable this rule. And then we would be good to go. Then this one, let's click here, do control dot, because we're not using the JSX filename extension, let's disable that, as well. Let's click here, do control dot, and then it says, "fix this keyword spacing problem," and this is just a space, so there you go. We have this one fixed. And then finally, this one here, let's do control dot, as well, and this one, it's for prop-types. Because we haven't gotten to prop-types yet,
>
> **[3:09](https://www.linkedin.com/learning/react-testing-and-debugging/code-improvement-with-eslint?u=76281980&t=189)** I'm simply going to disable it or you can go and take a look at the documentation and fix it yourself like so. And now we have a new problem here, and let's fix it automatically like so. And then we have just one more problem somewhere in here, and this is the one here, so let's go and do a space, and then save this and we have a problem-free or we have a file that is compliant with the standards of the industry. So if any developers take a look at this file, they'll see that you have something that is compliant, has great standards, and if they're wondering about why you're disabling this, then just go and explore these further, but in this case, because we're not using the JSX extension into our files, then we need to disable this. So I would encourage you to go through the other components and update them with the latest standards. This is what I do as I code my applications, so it's always good practice, and it helps you as a developer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (4), [[JavaScript]] (1), [[Windows]] (1), [[GitHub]] (1)
> **Tools:** terminal (3), vs code (1), github (1)
> **UI Navigation:** click on (2), go to (2)
> **Analogies:** for example (3)
> **File Paths:** grid.js (2)
> **Env Vars:** jsx (2)
> **Cross-References:** previous video (1)
> **Documentation:** the documentation (1)

#### [Solution: Practice ESLint best practices in a component](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=0)** - [Instructor] So for this coding challenge, I wanted to try something different. How do you test for [[ESLint]] best practices, even though we don't have access to ESLint in our coding environments? So what I've done here is, and we can actually hide this afterwards, I've added a bunch of tests that should actually check for several things in your code that will basically allow us to fix ESLint best practices, so the code is junky right now. It's not following the tests here, which are ESLint best practices, and what I'm going to do, once I fix this, not only this is will render, 'cause right now, it's not even rendering properly, but this will also pass all the tests, so let's go ahead and start our fixing, and what I would do is read all of this and just to make sure, so first of all, let's go ahead. The first thing we need to check is, well, the app component is exported correctly. Then we check for the grid component is exported correctly, the item array is exported correctly. The grid component renders without crashing. Same with the app, and then list items are rendered correctly, and then finally, we're checking for formatting issues, so we're making sure that there's semicolons and so on, so forth, so let's go ahead. If you run the test right now,
>
> **[1:33](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=93)** it's definitely not going to be successful. Yeah, zero tests passed. Okay. So what I'm going to do is just bring that up here, and let's go ahead and start fixing our stuff here. So as the first thing, you have multiple exports here. You have an export for this, you have an export for the app, and you have the grid. The problem with this one is, well, actually, you shouldn't have a default if you have multiple exports in the same file, so we're going to remove that, and that should fix this here, so that's the first thing. Let's go here. It's still not rendering. Oh, there it is. I'm going to remove prop types because we're not using it, and then I'm going to add a semicolon here,
>
> **[2:28](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=148)** and then what I'm going to do is start making sure that some of these have the proper indentation, so just clean it up a bit. So first of all, I'm going to do this, and then I'm going to do this, and then I'm going to also make sure that this is within this, because this was missing. I don't know if you noticed that, like this., and then we're going to put the UL here, and then UL indented like so, and then finally, this here. Semicolon here. Let's make sure, very quickly, you have to check everything to make sure that we're following all the proper things, so here, we need to... Like this. And I usually, depends on your style or what are the standard practices you follow, 'cause there's multiple out there, but this is how I would make this one, and then let's work on this one here, indent it like this, and then as you can see, we have the same problem here. We don't have...
>
> **[4:07](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=247)** Like so. I want to make sure that it's properly indented like so. I'm very, very granular in my syntax, and everything that I do, I check it and then crosscheck it over and over to make sure that I'm following the best practices, and actually, as a matter of fact, the practices, the actual rules that I follow with the company I'm working is a bit different. We don't use semicolons, for example, so it depends on the best practices you're following. It's very important to always follow whatever is used internally at your company.
>
> **[5:03](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=303)** A lot of the same errors here, so we have some code missing here, too.
>
> **[5:17](https://www.linkedin.com/learning/react-testing-and-debugging/solution-practice-eslint-best-practices-in-a-component?u=76281980&t=317)** Semicolon, and then this. I'm still rendering, so somewhat, I'm still good. The invitation would make me go back to a developer and tell 'em, "Please fix this just for cleanliness." Okay, so let's check our code. Let's see if everything is good. In theory, it should all be good, so if we test my code here, all the tests have passed properly. So as you can see, it wasn't that hard of a test, because it was mostly about formatting your components and making sure that you had everything that you needed, but it's a good exercise to kind of introduce you to ESLint. Depending on the rules that you're following with your company, you may have different syntax. For example, in our company, I removed the semicolon. We don't use semicolons within our standard practices internally. I do not enjoy adding those semicolons everywhere, personally, so I made that as a rule, and we're following practices that follow this particular rule. So hopefully you had fun, and let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ESLint]] (5)
> **CLI Commands:** make (8)
> **Analogies:** for example (2)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Type checking with Flow](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=0)** - [Instructor] Another great tool to help prevent bugs is type checking. Type checking is basically a practice of declaring what type of data you should expect to be passed within your application. If the types don't match, type checking throws an error warning that you are trying to pass a number to a variable that is expecting a string for example. [[React.js|React]] has prop types that you can use within its libraries but I personally prefer to use a tool like Flow which has much more to offer and is also maintained by the [[Facebook]] team. What's really good about Flow is that you could use it without setting up your types because Flow offers a lot for you out of the box. So let's take a look at it. So I don't know if you remember earlier when we set up Flow we did a flow here. So we did this mention. So flow is going to check for this file. But I want to do it on a new file. So I'm going to go to single.js which is in the listings inside of components. And then in here I'm going to add flow. I'm going to do forward slash forward slash at @flow like so. And then we're going to save this. And then if we go into our terminal, so I'm going to open up a new terminal, and then do [[npm]] run flow. Remember, we did a script in our package.[[JSON]] file here that actually runs flow when we do the script npm run flow. We're going to run flow. So let's go ahead and do that. So let's take a look at what are the recommendations that we get.
>
> **[1:33](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=93)** So I'm going to look at this file. You guys can take a look at the state later on. But let's take a look at this one here. So in their component single we have an item that's been passed but we don't have type annotation for this one. So let's go ahead and do that. So we're going to go back into our single.js file and we're going to do some type annotation here. So just below React we're going to remove the prop types here. And then we can remove this. And then what we're going to do is define what is the type item and what does it take. So we're going to do type. Item. Which equals to an object. And then we're going to define what this item is. And let's go and define it. So inside of that we got an ID which takes a number. Then we have a title which takes a string. Category which takes a string again. And then what we could do is simply copy that line 'cause we're going to do a lot of strings. And paste it here and this is the description. Let's do that again for link. And then release date.
>
> **[3:11](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=191)** Views again and then the image. Views and then image.
>
> **[3:22](https://www.linkedin.com/learning/react-testing-and-debugging/type-checking-with-flow?u=76281980&t=202)** And now what we need to do is pass that type inside of our single item here because we need to define what this item is, what type it expects. So what we're going to do is do column and then pass items like so. So basically what we're doing is defining that this type is what this item should be and once flow actually runs through that code it's going to expect this item to be of item like so. So once we have that we can save the file and then go back to our terminal. So I'm going to do control + shift + graphy, and this brings up a new terminal, it doesn't matter. So we could do npm run flow. Now you're going to see that we have a new error. So we got this type defined but we don't have this type defined. So you can go ahead and define each and every type that it's taking as you go along with the code. And it's basically following the same examples that we just did. So type checking adds an extra layer of safety while developing your application and prevents the wrong type of data from being passed to your components. As your application scales in size and complexity you'll see how useful this is for debugging and prevention of these potential bugs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (3), [[React.js|React]] (2), [[Facebook]] (1), [[JSON]] (1)
> **Tools:** terminal (4)
> **File Paths:** single.js (2), package.json (1)
> **CLI Commands:** npm (3)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Warnings:** warning (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [React StrictMode behaviors](https://www.linkedin.com/learning/react-testing-and-debugging/react-strict-behaviors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/react-strict-behaviors?u=76281980&t=0)** - [Instructor] Let's explore [[React.js|React]] StrictMode, a development aid that helps you write better React code by enforcing best practices. React StrictMode is like a lighthouse illuminating the rocky shores of your code base. It's a feature you can apply to parts of your app to help catch potential issues early in the development phase. Think of it as a linting tool for component behavior. So why use StrictMode? It helps with future-proofing your app, making sure it's ready for upcoming changes in React Score. StrictMode checks your code for deprecated methods, warns about side effects in the rendering phase, and encourages best practices by flagging issues like the old string ref API. To use StrictMode, simply wrap your component with React's StrictMode, like so. This won't affect your production build, but will activate checks and warnings in development. Combine this with thorough testing and debugging, and you'll ensure your app is robust, maintainable, and up-to-date with the latest React standards. React StrictMode is a powerful ally. It's like having a seasoned developer over your shoulder, guiding you to better practices and a cleaner, safer code base. Start using it today and keep your React applications on the cutting edge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (8)
> **Analogies:** think of it as (1), it's like (1)
> **Env Vars:** api (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Next steps](https://www.linkedin.com/learning/react-testing-and-debugging/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-testing-and-debugging/next-steps?u=76281980&t=0)** - This course was an introduction to testing and debugging [[React.js|React]] applications. With the tools we've explored here you should have a good basic understanding of this complex subject. If you haven't used testing and debugging tools before, I'd recommend diving in deeper with the utilities and methods we've explored. Try them with one of your own applications to understand the impact that they can have in your workflow. Once you're comfortable, I'd suggest that you further explore Jest and Flow. For example, you could use Enzyme with Jest to manipulate and assert your components in various ways. You can get started with any of these advanced concepts by exploring the documentation, which is always the best place to get more information on the tools you're using. Remember, while many developers have decided to use some or all of these tools, there are others that can do similar tasks. What you ultimately decide to use is up to you and your dev team. Thanks very much for taking my course, and I'll see ya in a bit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (1)
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