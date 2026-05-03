---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: vue-js-testing-and-debugging
url: "https://www.linkedin.com/learning/vue-js-testing-and-debugging"
duration_minutes: 80
duration: 1h 20m
level: Intermediate
updated: 9/2/2021
learners: 2320
skills:
  - Software Testing
  - Debugging Code
exercise_files: true
github: "https://github.com/LinkedInLearning/vue-js-testing-and-debugging-2399300"
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQHYc0PVbuobHw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1630434561194?e=2147483647&amp;v=beta&amp;t=FzHEJYD_JRzHoccvWKfjVWBxjEHLEOgALRndTKDx5es"
linkedin_topic: Web Development
learning_paths:
  - '[[Explore Web Development with Vue.js]]'
prev_courses:
  - '[[Learning Vue Js]]'
next_courses:
  - '[[Vue.js- Creating and Hosting a Full-Stack Site]]'
path_nav: '[{"path":"Explore Web Development with Vue.js","position":2,"total":3,"prev":"Learning Vue Js","next":"Vue.js- Creating and Hosting a Full-Stack Site"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/software-testing
  - skill/debugging-code
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Vue.js-%20Testing%20and%20Debugging.md)

![Vue.js: Testing and Debugging](https://media.licdn.com/dms/image/v2/C560DAQHYc0PVbuobHw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1630434561194?e=2147483647&amp;v=beta&amp;t=FzHEJYD_JRzHoccvWKfjVWBxjEHLEOgALRndTKDx5es)

# Vue.js: Testing and Debugging

> You've learned Vue and can create amazing front-end interfaces, but how do you make sure they really work? With Jest, ESLint, and browser dev tools, you can look under the hood and see how well your interface is really working. Instructor Fikayo Adepoju explains the benefits of well-tested code, then delves into how to set up your testing tools. Fikayo goes over everything you need to start unit t

> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-testing-and-debugging) | 1h 20m | Intermediate | 2K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Testing Vue applications](#testing-vue-applications)
  - [What you should know](#what-you-should-know)
  - [Exercise files for testing and debugging](#exercise-files-for-testing-and-debugging)
  - [Why you need to test](#why-you-need-to-test)
- [**1. Setting Up Testing Tools**](#1-setting-up-testing-tools) (4 videos)
  - [Setting up the sample project](#setting-up-the-sample-project)
  - [What makes up a testing toolkit?](#what-makes-up-a-testing-toolkit)
  - [Getting started with Jest](#getting-started-with-jest)
  - [Syntax error checking with ESLint](#syntax-error-checking-with-eslint)
- [**2. Unit Testing**](#2-unit-testing) (7 videos)
  - [Installing and running Jest](#installing-and-running-jest)
  - [Testing strings using matchers](#testing-strings-using-matchers)
  - [Testing numeric values](#testing-numeric-values)
  - [Testing objects and arrays](#testing-objects-and-arrays)
  - [Organizing tests](#organizing-tests)
  - [Testing asynchronous code](#testing-asynchronous-code)
  - [Analyzing test coverage](#analyzing-test-coverage)
- [**3. Testing Vue Components**](#3-testing-vue-components) (3 videos)
  - [Mounting components using render](#mounting-components-using-render)
  - [Accessing elements within a component](#accessing-elements-within-a-component)
  - [Firing events on components](#firing-events-on-components)
- [**4. Debugging with Vue and Chrome Developer tools**](#4-debugging-with-vue-and-chrome-developer-tools) (5 videos)
  - [Debugging errors using Chrome DevTools](#debugging-errors-using-chrome-devtools)
  - [Setting up Vue Devtools](#setting-up-vue-devtools)
  - [Debugging with Vue Devtools](#debugging-with-vue-devtools)
  - [Tracking and debugging state](#tracking-and-debugging-state)
  - [Running a performance audit](#running-a-performance-audit)
- [**5. Functional and Automated Testing**](#5-functional-and-automated-testing) (3 videos)
  - [Introduction to Cypress](#introduction-to-cypress)
  - [Running a simple end-to-end test with Cypress](#running-a-simple-end-to-end-test-with-cypress)
  - [Automated testing with CircleCI](#automated-testing-with-circleci)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps with testing](#next-steps-with-testing)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Testing Vue applications](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-vue-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-vue-applications?u=76281980&t=0)** - [Fikayo Adepoju] Testing helps create stable and reliable applications. Contrary to general perception tests are quite fun to write and run. You will also learn how to automate your functional tests for repetitive regression tests and also add test to your [[Continuous Integration (CI)|continuous integration]] and deployment pipelines to stop bugs from getting into your production code. Hi, I am Fikayo Adepoju and I have been building applications for over 10 years now. Through this time I have experienced a lot of bugs and I've been caught up at several odd hours to fix them. I have learned some best practices that I would like to share with you to avoid frustrating bugs. So sit back, fire up your development machine and let's get started. Testing [[Vue.js]] applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Continuous Integration (CI)|Continuous integration]] (1), [[Vue.js]] (1)
> **File Paths:** vue.js (1)
> **Speakers:** - [fikayo (1)

#### [What you should know](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-you-should-know?u=76281980&t=0)** - This course requires that you have background knowledge in certain technologies before getting started. You will also need to have a few things set up on your machine to follow along with the examples and exercises in this course. The first thing you will need is [[Node.js]] installed on your system. Node.js is a [[JavaScript]] runtime popularly used for building backend applications using JavaScript. Node.js can be downloaded for any operating system platform from the official Node.js website at [nodejs.org](https://nodejs.org). On the Node.js website, you can find instructions on how to install Node.js for your platform. The minimum required version of Node.js to engage with this course is version 12. The next item on the requirements list is the [[Vue.js]] [[CLI]] tool. This tool is used for scaffolding and managing Vue.js projects. As of the time of this recording, the tool can be installed by running the command [[npm]] install -G @[[Vue.js|vue]]/cli. This will invoke the NPM tool to install the CLI on your system globally and make it accessible from any location in your file system. If you prefer the Yarn packet manager, you can use it to install the CLI by running the command yarn global add @view/cli. This will install the CLI globally, just like the NPM packet manager would. The browser that will be used in this course is the [[Google]] Chrome browser. Google Chrome has a set of battle-tested developer tools that we will be making use of in our debugging
>
> **[1:33](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-you-should-know?u=76281980&t=93)** and testing activities in this course. Any version of the Google Chrome browser from version 80 is perfect for this course. You will also need a text editor to write your test cases. This is one area where you have the liberty to choose any text editor you're most comfortable with. I'll be using Visual Studio Code, or VS Code for short, as the text editor for writing the test cases for the exercises. VS Code has amazing support for writing Vue.js code with a community of plugins that make the development experience a blissful one. Asides these tools, you also require a basic experience in web technologies, that is [[HTML]], CSS and JavaScript. You also need some experience building applications with Vue.js. If you have no experience with these technologies and frameworks, I advise you pause this course and go to our library to find courses to learn about them. Once you have good experience with HTML, CSS and JavaScript, and you have built some applications with Vue.js, you can then return to this course to learn all about testing Vue.js applications. However, if you have all the experience described above and have also set up all the tools required, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (7), [[Vue.js]] (6), [[CLI]] (6), [[JavaScript]] (4), [[npm]] (3)
> **CLI Commands:** node (7), npm (3), find (2), make (2), yarn (2)
> **File Paths:** node.js (7), vue.js (6)
> **Env Vars:** cli (4), npm (3), html (2), css (2)
> **Prerequisites:** install (5), set up (2), getting started (1)
> **Tools:** vs code (2), visual studio (1)
> **Versions:** version 12 (1), version 80 (1)
> **URLs:** [nodejs.org](https://nodejs.org) (1)

#### [Exercise files for testing and debugging](https://www.linkedin.com/learning/vue-js-testing-and-debugging/exercise-files-for-testing-and-debugging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/exercise-files-for-testing-and-debugging?u=76281980&t=0)** - [Instructor] The exercise files for this course are available on the [[LinkedIn]] Learning official [[GitHub]] repo. The files are for the [[Vue.js|Vue]] JS project we'll be testing in this course. The starting point for each exercise has been organized into branches for you to conveniently follow along. These branches are named according to the section on video for the exercise you have to perform. In each video, you will be instructed to switch to the appropriate branch to follow along. The link to this repository can be found in this video description.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1), [[GitHub]] (1), [[Vue.js|Vue]] (1)
> **Exercise Files:** exercise files (1), github repo (1)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)

#### [Why you need to test](https://www.linkedin.com/learning/vue-js-testing-and-debugging/why-you-need-to-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/why-you-need-to-test?u=76281980&t=0)** - [Instructor] One of the quick impact of properly testing your code is the peace of mind that comes with it. Knowing that core functionalities of your application have been well-tested before being pushed to production means you don't get called by 2:00 AM in the morning to fix bugs. Another major reason why we write tests is to ensure that our code follows standards of clean and quality code. Quality code is code that is easy to understand, maintain and also well-structured. Quality code can also be relative to style guides of the organization for which it is written. Testing rules can be written to ensure the style guide is enforced. Code also needs to be tested in a team development project to ensure that team members do not push bugs into the central repository. When a pull request is submitted, tests run on the feature branch before it is merged into the destination branch. If the tests fail, the developer is notified that there are bugs to be fixed before they can be allowed to merge with the central repository. Another major reason and a merit to testing is in the value of the application. The more bugs were remove from our application through testing, the more the value of the application increases. It is therefore important to view testing as the practice of increasing the value of an application by removing its defects. We can go on and on talking about why testing is so important in software applications. However, from the points discussed so far, we can conclude that testing should be a standard practice in our development flow as it helps detect and remove defects from our applications.

> [!info]- Semantic Content
>
> **Ports:** :00 (1)
> **Speakers:** - [instructor] (1)


### 1. Setting Up Testing Tools

[↑ Back to Table of Contents](#table-of-contents)

#### [Setting up the sample project](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-the-sample-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-the-sample-project?u=76281980&t=0)** - [Instructor] In this video, you'll be setting up the demo project to follow the exercises in this course. For this, you will need to have your command line terminal open. I already have this open and we'll be going in to the command to pull the project from the remote [[GitHub]] repository. Whilst you have your terminal open, navigate to the location in your file system where you want to have the demo project. At this location, type the command [[Git]] clone and the location of the project, then hit enter. This will pull the project from the remote repository into your current location on the terminal. Once the project completes, you now have a project to work with. Go into the project route with the command CD project name. Next, you need to install the project dependencies by running the command MPM install. This might take a while, so you might want to come back when the installation is done. Once the dependencies have been installed, you can then run the project by running the command [[npm]] run serve. This will kick off the process of booting up the local development server for the view application. Once the boot process is done, the applications local address gets printed to the screen. Copy this address and paste it in your browser to load the application. Our demo application is now loaded on the browser and we see the login page for the Explore California website, the best website for booking your vacation in California. This application will be used by users of the site to access and manage their travel profiles. The user accesses their profile by typing in their email and password in the login form
>
> **[1:33](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-the-sample-project?u=76281980&t=93)** and submitting the credentials. For this demo, type in user@[test.com](https://test.com) for the email, then type testpassword into the password field. With the credentials typed in click on the submit button to login. Once logged in, you see the user's profile page. On the left-hand side, we see the user's bio-card containing the avatar, name and address. Below the bio-card are links to the user's social accounts. On the right-hand side is more information about the user and below that, the user's tour breakdown and status of trips around California. This is the project you'll be testing in this course. You'll be writing unit tests to test the components in this application, and also write end-to-end tests to test features like the login process. In the next video, we'll be taking a look at testing tools that will be used for writing and running our tests.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (1), [[Git]] (1), [[npm]] (1)
> **Tools:** terminal (3), command line (1), github (1)
> **CLI Commands:** git (1), cd (1), npm (1)
> **Env Vars:** mpm (1), npm (1)
> **UI Navigation:** navigate to (1), click on (1)
> **Prerequisites:** install (2)
> **URLs:** [test.com](https://test.com) (1)
> **Cross-References:** in the next (1)

#### [What makes up a testing toolkit?](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-makes-up-a-testing-toolkit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-makes-up-a-testing-toolkit?u=76281980&t=0)** - [Instructor] In order to test [[Vue.js]] applications there are a couple of tools required. These tools will be set up as development dependencies in your application. The first set of these tools is a testing library. A testing library is used to scaffold and structure test cases. One of the most popular [[JavaScript]] testing libraries is Mocha. The Jest testing framework also contains a testing library, built-in. The second tool required in your testing toolkit is an assertion library. An assertion library allows you to test a piece of code or component in your application by passing an input value and checking for an expected result. An assertion library is used within the structure created by a testing library in a test case. An example of an assertion library is chai.js. Chai.js can be easily combined with Mocha to write test cases. The Jest testing framework also consists of an assertion library, built-in. The third tool required in your testing toolkit is a test runner. This is the tool that takes the code written in your test cases and runs them to give a success or failure report. Examples of test runners are Karma and the Jest testing framework. The three tools we have discussed so far are compulsory in a testing setup. However, the next two are based on your testing needs. The first set of these optional tools is actually a set of functions known as mocks, stubs and spies. This set of functions are used to imitate collaborative code. If the unit of code you're testing depends on an external model or a piece of code,
>
> **[1:34](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-makes-up-a-testing-toolkit?u=76281980&t=94)** these functions can be used to imitate external functionality that your code depends on. The second optional and final tool in your toolkit is a test coverage tool. Developers and testers often ask the question, how much test is enough test? This tool helps you get close to the answer to that question by reporting the amount of your code that is currently being covered in your test cases. An example of a test coverage tool is istanbul.js. The Jest testing framework also has a test coverage functionality that is built on istanbul.js. In this course, we are going to be using the Jest testing framework. The Jest testing framework is a perfect choice because it consists of all the tools that we have just mentioned. So, in the next video we are going to be setting up the Jest testing framework to use in testing our vue.js applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vue.js]] (2), [[JavaScript]] (1)
> **File Paths:** vue.js (2), chai.js (2), istanbul.js (2)
> **Definitions:** is a  (4), is an  (1), known as (1)
> **Prerequisites:** set up (1), setup (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Getting started with Jest](https://www.linkedin.com/learning/vue-js-testing-and-debugging/getting-started-with-jest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/getting-started-with-jest?u=76281980&t=0)** - Jest is a testing framework for [[JavaScript]] applications. One of the major advantages of Jest is that it has all the five testing tools described in the previous video built-in. Jest also has an API that is familiar with other JavaScript testing frameworks you may already be used to. The Jest testing framework can be used to test any of the three most popular front end frameworks. That is [[Angular]], [[React.js|React]], and, of course, [[Vue.js]]. Jest can also be configured to work with any custom JavaScript project setup you have. The philosophy behind Jest is to ensure correctness in any JavaScript code base. Jest has a very approachable feature-rich API, and you can use only what you need from the framework. Jest is also well-documented and makes the testing experience a delight. Jest was built and is maintained by [[Facebook]], and has a very strong community of developers behind it. In the following sections, you'll be installing and setting up Jest to write tests for the demo application you just cloned.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (4), [[Angular]] (1), [[React.js|React]] (1), [[Vue.js]] (1), [[Facebook]] (1)
> **Env Vars:** api (2)
> **File Paths:** vue.js (1)
> **Cross-References:** previous video (1)
> **Definitions:** is a  (1)
> **Prerequisites:** setup (1)
> **Speakers:** - jest (1)

#### [Syntax error checking with ESLint](https://www.linkedin.com/learning/vue-js-testing-and-debugging/syntax-error-checking-with-eslint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/syntax-error-checking-with-eslint?u=76281980&t=0)** - Linting your code is very important in your testing process, as it helps you detect syntax errors. This reduces the time you spend in debugging your code, as it ensures that your code is free of syntax errors before you run it. To follow along with this exercise, make sure that you are on the 01_04b branch of the project. The easiest way to add linting to your [[Vue.js]] project is by using the [[Vue.js|Vue]] [[CLI]] add function to install and configure the [[ESLint]] packet. Make sure you're at the root of your project and run the command vue add @vue/cli dash plugin dash eslint. Now hit enter to run the command. This will begin the installation and setup process. This might take awhile, so you would want to return when the process is done. At some point in the installation process, you'll get a prompt to pick a configuration for ESLint. Let's go with the standard configuration. Next, you'll get a prompt to pick additional features for ESLint. The two options are lint on save and lint on commit. The lint on save option runs the linter each time you save your code in the editor. The lint on commit option lints your code before it's committed to your local repository. Select the lint on save option by hitting the enter key as it's already the default selection. Then wait once again, for the process to finally complete. Once the setup is complete, load up the project in your text editor. The setup process did not only install ESLint,
>
> **[1:34](https://www.linkedin.com/learning/vue-js-testing-and-debugging/syntax-error-checking-with-eslint?u=76281980&t=94)** but configured the package for the Vue.js project. Notice the eslint.rc.js file. This is the configuration file for the ESLint package. Another item added by the setup process can be found in the package.[[JSON]] file. A lint script has an added to the list of scripts. This allows us to run the linter on the entire project from the terminal. Let's try this out. Let's head over to the terminal. At the root of the project, run the lint script by typing [[npm]] run lint. At this point of the project, the linter reports that no errors were found as the project does not contain any syntax errors at the moment. Let's try to get some error reporting by intentionally adding some syntax errors to our code. Inside the text editor, open up Home.vue. Just underneath the first opening div, add an incomplete div tag. Now let's return to the terminal and run the linting command once again. This time the linter reports the syntax errors in our code. It also gives information on where the error takes place, helping us locate and fix them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ESLint]] (7), [[Vue.js|Vue]] (4), [[Vue.js]] (2), [[CLI]] (2), [[JSON]] (1)
> **Prerequisites:** setup (4), install (2), configure (1)
> **File Paths:** vue.js (2), eslint.rc.js (1), package.json (1)
> **CLI Commands:** make (2), npm (1)
> **Tools:** terminal (3)
> **Env Vars:** cli (1), npm (1)
> **UI Navigation:** select the (1)
> **Speakers:** - linting (1)


### 2. Unit Testing

[↑ Back to Table of Contents](#table-of-contents)

#### [Installing and running Jest](https://www.linkedin.com/learning/vue-js-testing-and-debugging/installing-and-running-jest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/installing-and-running-jest?u=76281980&t=0)** - Now that we understand Jest and what it does, let's get it installed and set up in our project. To install Jest, have your command line open at the root of the [[Vue.js]] project. To follow along with this video, you need the 02_01b branch of the project. So check the branch out of the remote repository using [[Git]], now run the command to install the jest package as a development dependency. Now, this process is going to take a while, so you can take a short break, maybe check on your emails, then turn back when it's done. Now that Jest has been installed into the project, we can start using it to run our tests. You can confirm this by running the jest command at the root of the project. The output of running jest at this point indicates that there are no tests currently available in the project. The way we just ran jest is not a standard way we will be running into command, we'll be creating an [[npm]] script for that. To add the NPM script, locate the package.[[JSON]] file in your text editor. Now add the test script in the script section and set it to call the jest command, this way each time we run the test script, the jest command we'll run. Let's go ahead and test that out in the [[CLI]]. I do it on the project once again, run the test script using NPM, as seen we get the same results as we did when we just ran the jest command,
>
> **[1:32](https://www.linkedin.com/learning/vue-js-testing-and-debugging/installing-and-running-jest?u=76281980&t=92)** but this time we have some errors coming from NPM terminating the process. Now you don't have to worry about these errors, they are completely normal and would no longer show up once we have test files in the project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (4), [[Vue.js]] (1), [[Git]] (1), [[JSON]] (1), [[CLI]] (1)
> **CLI Commands:** npm (4), git (1)
> **Env Vars:** npm (4), cli (1)
> **Prerequisites:** install (2), set up (1)
> **File Paths:** vue.js (1), package.json (1)
> **Tools:** command line (1)
> **Speakers:** - now (1)

#### [Testing strings using matchers](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-strings-using-matchers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-strings-using-matchers?u=76281980&t=0)** - Are projects now has just installed and is good to go. Time for us to start adding some tests to our application, starting with string tests. Just our sessions make use of matches to compare the output of our code to expected results. So we'll be using string matches to test out strings in this video. To follow along with this video, you need the 02 underscore 02B branch of the project so make sure you're on the 02 underscore 02B branch. For the exercises in this chapter, we will be placing all our tests inside a special just folder named tests, with double underscores on both sides. When we run our test command, just look at this folder and run the files inside it as test suits. Let's go ahead and create a folder inside the source folder. Next, create a strings dot JS file within this folder. The file just created will continue our string tests. Given tests and terminologies, this file is known as it test suit. Within the file, let's add a simple string test that will test if a certain phrase contains a substring.
>
> **[1:16](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-strings-using-matchers?u=76281980&t=76)** So here we start by writing the test case definition, then within the test case we search the phrase it's raining cats and dogs to contain the substring dogs. We do this using the expect function given to us by just and distinct matcher to match. Too much text in a regular expression or string match in the search term. Let's go ahead and save this file then switch to the command line to run the test. Now we're going to test command at the root of the project. To run the string test we'll just add it. The command we just ran invokes just to begin searching the project for test files and any file found will be run and the test results printed. This process can sometimes take a while depending on the number of tests, the logic in the test or the speed of your machine. Not only the testing process is complete we see a passed result printer to the screen. That is because the substring dogs does exist in the tested phrase it's raining cats and dogs. Just indicates a check mark to the left of the test case name to show its status. It also reports how many test cases and test suits that were involved in the testing process and how many of them passed. We also get information on how long it took the tests to run. Let's cause the test to fail by searching for a non-existent substring and see how just will post the failure. Back in the text editor,
>
> **[2:50](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-strings-using-matchers?u=76281980&t=170)** let's replace the search term by switching dogs to fishes in the to match function then save the file. Switch back to the terminal and run the test once again. The test results are way different this time. The red ink already indicates to us that something is wrong somewhere and we know why. The substrings fishes cannot be found in the given phrase. And as you can see, just clearly we post that expected button cannot be found in received string. Just goes a step further by showing us where in the test case the error is coming from. In this case, it's in the substring supplied to the matcher. We also get to use your stats on the number of tests and field versus past test report, including the time it took the test to run.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Tools:** command line (1), terminal (1)
> **UI Navigation:** switch to (1)
> **Definitions:** known as (1)
> **Speakers:** - are (1)

#### [Testing numeric values](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=0)** - Numeric values are one of the most important data types that require testing in your code. In this video, we'll be doing just that. Your official JS documentation consists of a couple of matches for testing numbers, and we will be making use of some of them in this exercise. To follow along with this video, you need the 02_03b branch of the project. So make sure you are on the 02_03b branch. A new model has been added to the project that will contain utilities to be used in our tests. Inside the source folder, there's a utilities.js file containing the utilities model. The model currently contains a single function, "addNumbers". This function simply adds the two numbers supplied to it as arguments. We'll be making use of this model in our next test. Navigate to the tests folder. And within it create a new file numbers.js. (keyboard typing) This file will contain test cases for our numeric tests. First thing to do in this test is to import the addNumbers function. (keyboard typing) Good, now let's add a test case that uses addNumbers to add the numbers four and five. (keyboard typing) Using it toEqual Jest matcher, let's assert its result to be nine as expected. Good, now save the file and returned it to the command line to run the tests.
>
> **[1:34](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=94)** We currently have two test suites in the project. One for the strings test, from a previous video and the one we just added for testing numeric values. If we want [[npm]], run test, Jest will run all the tests suites currently available within the project. We can, however, run a specific test suite by adding a space and the name of the test suite file, after the test command. Let's run the numbers.js file this way. As seen from the results, just reports a passing state for our addNumbers function. Let's introduce a bug into this function and see if our tests can help us detect that. Going to the utilities model. And we'll place the addition operator, which is subtraction. Save the file and switch back to the command line to run the test suite once again. This time Jest reports that our function is not producing the right output, which indicates a bug in its implementation. This shows the importance of tests in our application. As we can be quickly notified of unwanted behaviors in our code. Let's go back to the utilities model to fix the function and next we'll look at testing floating point numbers. To test floating point numbers, we'll be adding another test case. This time we'll be adding floating point numbers, 0.4 and 0.5 to a certain expected result of 0.9. (keyboard typing)
>
> **[3:14](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=194)** Good. Now save the file and switch back to the command line to run the test suite once again. (keyboard typing) Everything appears to be fine. our two tests are passing as expected. However, there's an hidden bug right inside our code. Switch back to the test file and this time add the floating point numbers 0.1 and 0.2. Asserting an expected result of 0.3. Make sure you save the file. Now we talk to the command line, I'm going to test case once again. (keyboard typing) Surprise, surprise, our test fails. But why? Turns out floating point numbers often have rounding up errors. and this is common across different programming languages, [[JavaScript]] inclusive. As seen, the result didn't turn out to be exactly 0.3. It was a teeny tiny little bit above 0.3. But don't worry, just adjust the right matcher to fix this problem. Back in the text editor, let's replace the toEqual matcher in the floating point numbers test to the, "toBeCloseTo" matcher. This matcher is preferred by Jest for testing equality in floating point numbers. Save the file on and head to the command line. Now run the test once again and this time we should have passing results for both tests. (keyboard typing)
>
> **[4:49](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=289)** Awesome. In the next video, we'll take a look at how we can test objects and arrays.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (1), [[JavaScript]] (1)
> **Versions:** 0.3 (3), 0.4 (1), 0.5 (1), 0.9 (1), 0.1 (1)
> **Code Identifiers:** addnumbers (4), toequal (2), tobecloseto (1)
> **Non-Speech:** (keyboard typing) (7)
> **Tools:** command line (5)
> **File Paths:** numbers.js (2), utilities.js (1)
> **CLI Commands:** make (2), npm (1)
> **Cross-References:** previous video (1), go back to (1), in the next (1)

#### [Testing objects and arrays](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-objects-and-arrays?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-objects-and-arrays?u=76281980&t=0)** - [Instructor] So, you have learnt how to use Jest matchers to test primitive data types like strings and numbers. It's now time to dive into the world of arrays and objects. Just as with strings or numbers, Jest comes packaged with handy matchers for writing assertions for objects and arrays. We will be taking a look at a couple of them in this video. So, without wasting any time, let's dive in. Follow along with this video. You need the 02_04b branch of the project. So make sure you are on the 02_04b branch.
>
> **[0:37](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-objects-and-arrays?u=76281980&t=37)** For this exercise, two additional properties are now present in the utilities model. A countries collection array, which holds string names of five countries and a user object, [[John the Ripper|John]] Doe, which contains bio-data properties of a fictitious user name, you guessed it, John Doe. Just like the 'addNumbers' function, these new properties have been included in the models exports. So, let's start adding tests for these properties. Inside the test file, create a new file with the name 'object.js'. To begin writing the test suit, import the country's collection and John Doe objects from the utilities model. Next, add a text case to check if the country's collection contains a country named Nigeria.
>
> **[1:38](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-objects-and-arrays?u=76281980&t=98)** For this, the 'toContain' Jest matcher will be used. The 'toContain' matcher checks if an array contains at least one instance of the given argument. Save the file and let's take this test for spin. At the root of the project, use the test script to run the newly added test suit. As expected, Jest reports a passing result for the test suit. Let's take for a country that does not exist in the array, say France, then observe how Jest reports it. Replace the argument of the 'toContain' matcher with the string 'France'. Save the file and return to the command line to run the test once again. As expected, the test fails because the string France is not contained in our countries array. Jest prints out the expected string to be found, that is France, and below it shows the content of the array to indicate that the search term does not exist in the array. We will be testing the the John Doe object next but first let's fix the array test by reverting back to the search for the string Nigeria. To test our John Doe object, we'll be writing a test case that checks if the user object contains a subset of its information. The assertion will check if the John Doe object has an age property equal to 26 and that the user's occupation is an accountant. For this, we'll be passing into the 'toEqual' matcher,
>
> **[3:11](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-objects-and-arrays?u=76281980&t=191)** the function 'expect.objectContaining' which is a Jest helper. The 'objectContaining' helper method returns true, if the object we are searching contains the key value pairs in the sub object passed to it. Inside this function, we just passed the subset of information we want to check. Save this file and head over to the command line to run the test. Because our John Doe object contains the key value pair searched, our tests passed. A change in any of the key value pairs can cause the test to fail if it is not contained in the John Doe object as specified. For example, let's head back to our test file and change occupation to programmer, save this file and return to the [[CLI]] to run the test once again. You can see that the test now fail as the occupation key value pair is not as we have it in our John Doe object. For more methods and functions for testing objects and array, I encourage you to check the official Jest documentation and other useful examples online. This will help you familiarize yourself with different scenarios and conditions for testing objects and arrays.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[John the Ripper|John]] (9), [[CLI]] (1)
> **Code Identifiers:** tocontain (3), objectcontaining (2), addnumbers (1), toequal (1)
> **Tools:** command line (2)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** just like (1), for example (1)
> **File Paths:** object.js (1)
> **CLI Commands:** make (1)
> **Env Vars:** cli (1)

#### [Organizing tests](https://www.linkedin.com/learning/vue-js-testing-and-debugging/organizing-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/organizing-tests?u=76281980&t=0)** - [Instructor] Test cases help us test different scenarios in which our code will be used. Wouldn't it be awesome to define the context in which a test is running and group related tests? This will surely be beneficial to properly reading and interpreting test results. Using Jest, we have the ability to group tests using describe blocks. This way we can group and label related tests and also define dependencies per test group. Let's dive into our code and see how we can use describe blocks to group all the tests written so far. In this exercise, we'll be creating a group for the string tests, another group for the numeric tests and a third group for the objects and arrays tests. Inside the test folder, create a new file with the name organized.js. Inside this test suite, let's import all properties contained in the utilities module. Next, we create a container describe block to hold all our test cases. Let's now nest three describe blocks inside the parent block. One for each set of tests we have written so far. Good. Let's now copy the tests from each test file written so far into their respective blocks.
>
> **[1:34](https://www.linkedin.com/learning/vue-js-testing-and-debugging/organizing-tests?u=76281980&t=94)** With all the tests in their describe blocks, save the file and run the new test suite on the command line. As expected, our tests pass. But this is not the main story here. Look at how tests are now organized into sections and hierarchies making it easier to interpret. This arrangement also indicates the order in which the tests are ran. To confirm this, let's try switching the position of the describe blocks. Back in the editor, let's switch the position of the numeric test for that of the object test group. Now save the file and return to the [[CLI]] once again to run the test. As observed, this time the order changes, and we see the arrays and objects tests running before the numeric tests. This is a very useful tool when the order in which the tests run matter to the testing process. Using describe blocks, we can easily group tests and introduce context into our testing process. Describe blocks also helps us to use Jest set up and tear down functions to manage dependencies for test groups.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CLI]] (1)
> **File Paths:** organized.js (1)
> **Env Vars:** cli (1)
> **Tools:** command line (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Testing asynchronous code](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-asynchronous-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-asynchronous-code?u=76281980&t=0)** - [Instructor] Asynchronous code is very common in front end applications. This makes it very important to learn how to test the parts of your code base that you want asynchronously. For this purpose, a new function, async print, have been added to the utilities model. This function mocks an asynchronous process by printing out the hello world string two seconds after it is invoked. The async function without a promise that resolves a string. Let's go ahead and test this function's behavior. To follow along with this video, you need the 02_06b branch of the project. So make sure you are on the 02_06b branch. Go into the test folder and create a new file with the name async.js. Inside the test file, import the async print function. Next, we'll be writing a test case that checks that the asynchronous function prints the string hello world as expected. Inside a test case scaffold, we call the asynchronous function and use the promise API to get its results. Make sure you return the promise by adding the return keyword just before the async print function call. This is important for jest to terminate the process after executing the test. Now that we have the result in the data variable, we can post it to test it with the expect method and the to be matcher. Good, now save the file
>
> **[1:39](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-asynchronous-code?u=76281980&t=99)** and head over to the command line to run the test. As we can see, our tests pass as expected. Do take into consideration that the time it takes for the asynchronous process to complete is included in the total time it takes to test to complete. Using the thenable promise syntax is one way to work with asynchronous tests and jest. Another way to test asynchronous code and jest is to use the async await syntax. Let's head back to our test file and write the async await version of the test case we just ran. Back in the test file, let's comment out the first test case that we have written. Now, write another test case exactly like the previous one, but this time, we'll be adding the async keyword. The async keyword will be added just before the call back function. Now regard the test using expect to assert the result of the async print function call. Because we're testing under asynchronous function, the await keyword needs to proceed the expect call. Next, we need a matcher to test the output of the function. For promised based async functions, the expect function as a resolves property that needs to be called before calling the matcher function. The resolves property as a fluent API that can be changed to any of the available matchers. Just like the previous version of the test, we use the to be matcher to assert the expected string output of hello world. Save this file and return to the [[CLI]] to run the test.
>
> **[3:15](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-asynchronous-code?u=76281980&t=195)** As expected, we have passing tests once again. Feel free to choose the syntax you prefer. After all, it's just syntax. One syntax does not have functional advantage over the other.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CLI]] (1)
> **Env Vars:** api (2), cli (1)
> **CLI Commands:** make (2)
> **File Paths:** async.js (1)
> **Tools:** command line (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Analyzing test coverage](https://www.linkedin.com/learning/vue-js-testing-and-debugging/analyzing-test-coverage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/analyzing-test-coverage?u=76281980&t=0)** - [Speaker] As stated in the previous section, Jest comes bundled with tools for analyzing test coverage. Test coverage reports give visibility into how much of our code base is covered by our test cases. So let's see how we can use the test coverage tool in Jest to visualize how much of our code is currently covered by tests. To follow along with this video, you need the 02_07b branch of the project. So make sure you are on the 02_07b branch. Adding test coverage in Jest is pretty straightforward, go into the package.[[JSON]] file and simply add the --coverage flag to the Jest command in the test clip content in the package.json file. With this added, a test coverage report will be generated anytime we run the test script. Let's go ahead and test this out on the command line, but first save the file. To generate a test report, simply run the test command to run all the tests in the application. All our tests are currently passing, but can you spot the table below the tests? This table indicates that only the utilities module is covered by tests. This is quite obvious as the utility module is the only module being used in all our tests. This means that every other module in the project is currently not being tested. The table also shows that all the functions in the utilities module are currently being tested. This is indicated by the hundred percent score under the functions column. One side effect of running code coverage is that the tool
>
> **[1:33](https://www.linkedin.com/learning/vue-js-testing-and-debugging/analyzing-test-coverage?u=76281980&t=93)** also generates an [[HTML]] test report. This page gives us a more detailed and interactive report. Look at the coverage folder now present within the project. This is an auto-generated folder for the test report. The report file is an index.HTML file inside the lcov-report folder. The report file can be opened in the browser by running the open command to target the report's file. You can also open the file manually by double-clicking on the file. The test coverage report in the browser is more user-friendly and uses colors to improve the experience. The modules being tested are listed with your test coverage results. You can click on a module to view the parts that are being tested and the parts not tested. Currently, our utilities module is fully tested. Let's introduce a dummy module into the project and just include it in any of our test file, but not test any part of it. Create a new testModule.js file inside the source folder. Inside this module add a simple function that prints a string and export it from the module.
>
> **[2:50](https://www.linkedin.com/learning/vue-js-testing-and-debugging/analyzing-test-coverage?u=76281980&t=170)** Now open the async.js test file and import the print something function from the dummy module. With the new module in place and imported into one of our test files, let's now generate an updated test coverage by running the test script once again. When the test is complete, open the coverage file once again in the browser. This time we see two files and the report indicating that no function in our dummy module is being tested. Click on the test module to have a more detailed view. Here we see the print something function and the statement in it, colored red. This indicates that they are currently not being covered in our project tests. Manually searching true code to find what to test or guessing how much our code has been tested is counterproductive and inaccurate. Test coverage helps us avoid these assumptions by giving us factual data about the state of our tests.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (2), [[HTML]] (2)
> **File Paths:** package.json (2), index.html (1), testmodule.js (1), async.js (1)
> **UI Navigation:** open the (3), click on (2)
> **Definitions:** is an  (2), means that (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** html (2)
> **Code Identifiers:** testmodule (1)
> **Tools:** command line (1)


### 3. Testing Vue Components

[↑ Back to Table of Contents](#table-of-contents)

#### [Mounting components using render](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=0)** - [Instructor] Now that we have a good understanding of testing [[JavaScript]] data types, it's time to start testing [[Vue.js|Vue]] JS components. Vue JS component needs to be mounted into a DOM environment for it to be used. Because of this, we need tools that will help simulate a DOM environment in our test environment and mount our Vue JS components on it. To follow along with this video, you need the 03_01b branch to follow the project. So make sure you're on the 03_01b branch. Jest is a very extendable framework. And in this video we'll be installing a couple of packages that are compatible with Jest for testing Vue JS components. The first set of packages we would install is the 'vue test utils' package and the 'vue jest' package. The 'vue test utils' library is the official [[Unit Testing]] utility library for Vue JS. It provides all the low-level APIs for mounting and working with Vue JS components. The 'vue jest' library on the other hand, is a transformer for the Vue files inside the Jest environment. Simply put, it allows us to work with Vue JS components in the Jest environment. Install these two libraries at development dependencies using [[npm]]. Once this installation is done, we need to add some configurations to our project. Back in our editor, we need to add some configurations for Jest to recognize Vue JS files with a '.vue' extension and transform them using the vue jest package we just installed. Start by creating a 'jest.config' file at the root of the project.
>
> **[1:34](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=94)** This is the file that would contain all our custom configurations for Jest. First, we include the model file extensions property. Then, we'll include 'js', '[[JSON]]' and 'vue' to tell Jest to process '.vue' files. Next, we include the transform property and instruct it to transform our vue files using 'vue-jest'.
>
> **[2:08](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=128)** Lastly, we set the test environment property to 'jsdom'. This is often the default with jest, but I would advise you to set it explicitly. Now that we have a Jest configuration file, the next step is to set up our test to use Babel. Babel transpiler enables us use ESX syntax inside our test files. The required Babel packages to be installed are 'babel-jest', 'babel-core' and 'babel-preset-env' Run the following command to install all these packages at development dependencies. Now, don't worry about memorizing all this. The commands are available on the 'vue test utils' online documentation. You now have all that is needed to use the ESX syntax and import '.vue' files in your tests. Lastly, we'll install the vue testing library. At this point, you can actually start testing your application using the 'vue test utils' library, but why settle for good when there is better. The vue testing library package is built on top of the vue test utils library and makes the process of testing vue components a breeze. The philosophy behind the library is that, the more tests resemble the way software is used, the more confidence they provide. To install this library, run the following command. With all packages in place and fully configured, let's mount a vue component in our test. Create a new file mount.js inside the tests folder. Inside the file, import the render method
>
> **[3:47](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=227)** from the vue testing library. In this test file, we'll be mounting the 'home.vue' component, which is the login page for our application. The 'home.vue' component is located inside the views folder. Let's go ahead and import this component inside the 'mount.js' test file. Next, let's write a test case for this test. To mount our component into the virtual DOM that will be used by Jest, we use the render method. The render method gives us a good number of utilities to work with the components once it's mounted. One of those utilities is the 'getByText' method, which we'll get to use later on. Let's go ahead and run this test, but first, ensure that you have saved the file. If our component is not mounted, the test will throw an error. Run the 'mount.js' test file by running the test command on it. As we can see our test passes, indicating that we have successfully mounted a component to test. This might not seem like much at the moment, but in the coming videos, we get to play around the component by testing its content and behaviors. See you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vue.js|Vue]] (30), [[JavaScript]] (1), [[Unit Testing]] (1), [[npm]] (1), [[JSON]] (1)
> **Env Vars:** dom (3), esx (2), npm (1)
> **Prerequisites:** install (5), set up (1)
> **File Paths:** mount.js (3), jest.config (1)
> **CLI Commands:** make (1), npm (1)
> **Definitions:** is a  (2)
> **Code Identifiers:** getbytext (1)
> **Cross-References:** in the next (1)

#### [Accessing elements within a component](https://www.linkedin.com/learning/vue-js-testing-and-debugging/accessing-elements-within-a-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/accessing-elements-within-a-component?u=76281980&t=0)** - [Instructor] One of the most important tests to conduct on a UI component is to check that it contains the right elements. These elements could be text nodes, buttons, form elements and so on. The login page you're currently looking at is the home.view component we mounted in a previous video. This page contains a background image of a couple on the left-hand side, the logo of the Explore California Toll Services company, a login form with a title and two fields to enter the login credentials and finally the button to submit the login form. Using Jest, we can test the components to check if it contains any of these elements. But how is this type of test useful? Imagine a team member mistakenly or maliciously deletes the password field and goes ahead to push the code to the team's repository. The test that checks for the presence of this field can easily detect this omission and stop the code from corrupting the application in production. In this exercise, we'll be testing for the presence of the form title. The title reads Login to your account. This test will fail if the title does not exist and pass if it does. Let's head back to our editor and write the test. To follow along with this video, you need the 03_02b branch of the project. So make sure you are on the 02_02b branch. Inside the mount.js file, we have extracted the function getByText from the rendered instance of the home.view component. The getByText method allows us to assess an element based on an exact match of its text component. This function will throw an error causing the test to fail
>
> **[1:36](https://www.linkedin.com/learning/vue-js-testing-and-debugging/accessing-elements-within-a-component?u=76281980&t=96)** if the search text cannot be found. Let's go ahead and use this function to search for the title of the login form. Good. Now save the file and let's run the test file. Because our component contains the search text in the login form title, our tests pass. Now let's take a look at the case where the text is incomplete. Back in the editor, let's remove the [[Microsoft Word|word]] account from the search string. Now save the file and run the test once again. This time, we'll get an error that shows that an exact match of the search text cannot be found. Jest also prints out the content of the component on the screen for confirmation. It might seem a little strict that Jest searches for an exact match, but when it comes to testing being strict is highly encouraged. Your tests are like your code gods and you must ensure that you're not taking anything for granted.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Code Identifiers:** getbytext (2)
> **File Paths:** mount.js (1)
> **CLI Commands:** make (1)
> **Cross-References:** previous video (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Firing events on components](https://www.linkedin.com/learning/vue-js-testing-and-debugging/firing-events-on-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/firing-events-on-components?u=76281980&t=0)** - [Instructor] Before we begin, make sure you're on the 03_03b branch of the project to follow along with this video. Accessing elements within component helps us test their existence within the components. This is good and covers a lot of testing scenarios, but what if we want to test behavior? The Explore California login form requires an email and password. When we type this in, I click the login button, we are navigated to the profile page. But what if we leave the fields blank and try to log in? This time, an error message is displayed instructing us to enter the login credentials. This behavior is one that can be tested to be sure that users are not allowed to log in without entering their credentials. So let's go into our editor and write the test. In order to test the login error functionality, we need to access the login button and trigger a click event on it. To achieve this, we first need to import the fire event object from the view testing library. The fire event object helps us simulate user events like click, mouse over, mouse in, and so on in our test environment. For this exercise, we'll be using the click method of the fire event object. Events fired on the elements using the fire event methods are asynchronous processes and return a promise. Thus, we need to add the async keyword to our tests callback function. Next, we get to reference to our login button using the get by text method to search for the button's label.
>
> **[1:35](https://www.linkedin.com/learning/vue-js-testing-and-debugging/firing-events-on-components?u=76281980&t=95)** Now let's fire the click event on the login button using the click method of the fire event object. Because we did not fill in any of the login credentials, the error message should be displayed after firing the click event on the button. Let's confirm that we have the message on the screen by using the get by text method to search for the error message. Good, we can now save the file and run our test. Everything goes fine and our tests pass as expected. However, the practice of testing is all about finding bugs in our application. So let's see what happens if we do not fire the click event but try to search for the error message. Let's comment out the line that fires the event and see what happens when we try to search for the error message without clicking the button. Save the file and add back to the command line to run the test. Just now, we post that the login error message cannot be found, which is good, because the component is currently not in the state that causes the error to show up. Understanding that testing is the practice of adding value to an application by finding our moving bugs helps us better understand the purpose of the exercise. This enables us to write more tests that try to break the system to expose bugs.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)


### 4. Debugging with Vue and Chrome Developer tools

[↑ Back to Table of Contents](#table-of-contents)

#### [Debugging errors using Chrome DevTools](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=0)** - [Speaker] To follow along with this video, make sure you're on the 04_01b branch of the project. Before diving into any fancy set up for debugging an application, it is a good practice to first see what you can get out of the tools you currently have. Most modern browsers come bundled with developer tools that can be very useful in tracking down common errors in an application. Unlike the old days of fireball on Firefox browsers, modern browser tools are now enhanced with debugging capabilities almost equal and sometimes more elaborate than what you get for most IDs. So far in this course, we have been making use of the Chrome browser. The Chrome browser currently accounts for over 60% of global browser usage according to current usage [[Statistics]]. Over time, Chrome has also received significant updates to its developer tool. And in my opinion, it has the best browser developer tools in today's market. We currently have a bug in our Explore California application, but I won't tell you what it is. Let's try to login to the application to find out. Let's enter our email and password. Let's now click the login button to enter into the application. Notice anything? Yeah, the absence of action here indicates that there is an error. It is expected that we should be logged in and be directed to the dashboard, but nothing happened. Why is that? When you trigger an action and you don't get the expected response and not even an error message to give you a hint as to what is happening,
>
> **[1:33](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=93)** it's time to pop open the developer tools to check what might have gone wrong under the hood. Open the developer tools and first check the console to find out if there are any errors present. And as suspected, we have an error, if we [[Zoom]] closely into the error message, we see a statement that says "Cannot read property push of undefined." The statement error in V-on handler indicates that this error is taking place on an event handler. Scroll down a little and we see the error statement once again. Just below it is more information about where the error took place. Just below it, is more information about where the error took place. VueComponent is a generic reference to the component in which this error is taking place. And we can see that it's on the login property. This login property is contained in the Home.VueComponent as shown in the Chrome developer tools console. One of the amazing features of the error reporting in Chrome's console is that you can simply click on the file and be taken directly to where in the code the error is coming from. Let's click Home.[[Vue.js|vue]] in the console to look at the error location. If you notice there is a yellow flash on the error line, it disappeared quickly, so you may not have noticed. Let's go back to the console and click the file once again to observe the flash. The flash highlights line 74, this is the line where the router was called to trigger the navigation to the profile page. Going back to the console,
>
> **[3:06](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=186)** again, now that we know that it takes place on line 74, the error reads "Cannot read property push of undefined." This means we are calling the push method on a variable that is undefined. Let's return to the error line to check that. The undefined variable is definitely the dollar router object as this is the variable on which we're calling the push method. Looking closely on the object, can you notice the error? You can pause the video to check, do you see it now? Yeah, the router object was misspelled. We have a missing O in there. Let's fix this error by correcting the spelling and saving the file. Back in the browser, let's refresh the page to ensure that our changes have kicked in. Now login once again to see if the error is gone. Awesome, now we are navigated to the profile page after providing the credentials and clicking the login button. Looking at the console, there are no more errors printed, indicating that our bug is now fixed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (1), [[Zoom]] (1), [[Vue.js|Vue]] (1)
> **UI Navigation:** open the (2), scroll down (1), click on (1)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** find (2), make (1)
> **Cross-References:** go back to (1)
> **Tools:** firefox (1)
> **Best Practices:** good practice (1)
> **Prerequisites:** set up (1)

#### [Setting up Vue Devtools](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-vue-devtools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-vue-devtools?u=76281980&t=0)** - [Instructor] Debugging [[Vue.js]] apps with browser Developer tools is great. But if you are looking for a solution custom-made for troubleshooting Vue.js applications, the [[Vue.js|Vue]] Developer tools is the way to go. The Vue Developer tools was created by the Vue.js team to improve the developer experience building Vue.js applications. This tool exists as a browser plugin. And as at the time of this recording, only supports the [[Google]] Chrome and Firefox browsers. To get the tool installed on your Chrome or Firefox, simply google Vue Developer tools. You can append the name of your browser for a more specific search. The first link is what we're looking for. This is a link to the Chrome store, where we can view details about the plugin and install it. Here on the Vue Developer tools, Chrome web store page, we can see details about the plugin including the current number of downloads, which is currently at a whopping 1 million plus. There are also link to check reviews and seek support. To add the extension to Chrome, click on the Add to Chrome button. This will check for compatibility with your browser version. We then get a prompt to confirm the installation by clicking Add extension. Once the extension is installed, you get a success message from a pop-up notification box. To see the Vue Developer tools pop-up in Chrome's Dev tools, You will need to go to a page where you have a Vue site open. Now go ahead and open the Chrome Developer tools to see if you have a Vue tab. As you can see, we now have a tab for Vue. This might not be visible immediately,
>
> **[1:34](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-vue-devtools?u=76281980&t=94)** so refresh the page to bring it up. We now have the Vue.js Developer tools installed, and we can start using it in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vue.js|Vue]] (8), [[Vue.js]] (5), [[Google]] (2)
> **File Paths:** vue.js (5)
> **UI Navigation:** click on (1), go to (1), open the (1)
> **Tools:** firefox (2)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Debugging with Vue Devtools](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=0)** - [Instructor] To follow along with this video, make sure you're on the 04_03b branch of the project. Now that we have the [[Vue.js|Vue]] developer tools installed, let's walk through the tool, to understand how we can use it for debugging our [[Vue.js]] applications. In the Chrome developer tools, click on the Vue tools tab. By default, the components section of the tool is selected. This is the section where a tree view of the components currently on the loaded page is shown. The root component is default for all pages. And the app component is where our router is located. You can click to expand these components to see the hierarchy of child components within them. For now, we only have a Home.vue component within the app component. This component represents the page currently in view and contains no child components. Clicking on this component will reveal its instance variable on the right-hand side. This variable can be accessed on the disk key vault within the component. The $route variable contains properties relating to the current route. These include the route path, route name, query parameters and many other useful properties. You also have information about the component's data properties, and you can inspect them as they change in [[Real-Time]]. For example, observe what happens to the show arrow variable. When we click on the login button without entering any credentials. As you have observed, the show arrow variable changes from false to true. This is the value that causes the error message to be displayed. The Vue developer tool shows us how this piece of data
>
> **[1:34](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=94)** updates in real-time. This is very useful in debugging the current state of the component. You can also inspect the actual Dom elements contained in the components currently selected and show that the Home.vue component is selected. Then click on the inspect DOM icon on the right. This opens the elements tab in Chrome developer tools, and immediately selects the container element for the component. You can expand this to view and walk through the inner [[HTML]]. This allows you to use the built-in browser DevTools to inspect the actual markup. Back into DevTools. Notice the highlighted components contains a statement. Home component equals $vm0. The $vm variable is a reference to the Home.vue component. Also one useful thing about this reference is that you can simply type it in your console and interact with the component. Let's type $vm0, then follow it with a dot. This immediately gives us a list of all the properties available on the component instance. We see properties such as el, which is a reference to the HTML container element for the component. From the preview shown below the statement. You can see a div with a class name container. The $route property we saw earlier in the Vue DevTools is also available on the instance here in the console. When you hit enter, you get the same route properties seen earlier, you can also reference data properties directly on the $vm0 object. For example, the show arrow variable. This can help you access the current values of data
>
> **[3:07](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=187)** properties on the component directly in the home console. The Vue.js developer tools also has other sections for inspecting your Vue.js application. The Vuex section is used to view, inspect and run true state mutations, taking place in the Vuex door. This tool helps you time travel two-state changes by rolling back mutations and replaying them. There are also sections for monitoring events in the application. Route changes and route history. You also have a settings section where you can configure the theme of the DevTools. Here, you can do things like enable props editing, enable auto loading of Vuex states, and many more. Do note that some of these settings when enabled may impact performance or cause crashes. So be careful when using them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vue.js|Vue]] (7), [[Vue.js]] (3), [[Real-Time]] (2), [[HTML]] (2)
> **File Paths:** vue.js (3)
> **Env Vars:** html (2), dom (1)
> **UI Navigation:** click on (3)
> **Analogies:** for example (2), such as (1)
> **Definitions:** is a  (2)
> **Warnings:** note that (1), be careful (1)
> **CLI Commands:** make (1)

#### [Tracking and debugging state](https://www.linkedin.com/learning/vue-js-testing-and-debugging/tracking-and-debugging-state?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/tracking-and-debugging-state?u=76281980&t=0)** - [Instructor] State management is a huge part of front end development in today's world of [[Web Development]]. The most popular architectures for managing states make use of a central store. Components subscribe to this store for data and commute mutations to (indistinct), to change data. Our Explore California application uses Vuex, which also makes use of the central store concept for managing states. Follow along with this video. make sure that you are on the 04_04b branch of the project. When we're logging into the application, the user's data is committed to the store. The application then navigates to the profile page. On the profile page, the profile components subscribes to the user data using a computer property. This piece of data referenced from the store is then used in the page templates to display the user's info. At this moment, a state bug exists in the app, which we'll use the [[Vue.js]] developer tools to inspect. Let's log in to the application to find out what the bug is. Can you guess what the bug is? Try pausing the video for a few seconds, if you are yet to figure it out. Yup. The user data is not available on this page. So what might be causing this? Is a subscription to the store broken? Let's move back to the login page and pull up the view there too. Switch to the Vuex section so that we can inspect the mutations. Which you'll see the set user mutation called in here when we log in. Let's log in once again. Okay, wait a second.
>
> **[1:38](https://www.linkedin.com/learning/vue-js-testing-and-debugging/tracking-and-debugging-state?u=76281980&t=98)** No mutation is being recorded to the Vue.js dev tools. This shows that our set user mutation, which commits the user info to the store, is not being called, but a call is right there in our code. What could be the issue? Back in the log in function in the onboard view component, let's check the line that caused the mutation. By observing the name of the mutation, it seems we have a typo here. Let's check the store to confirm Yup. The mutation to be called is setUser camel case. What we have in the code is misspelled. This is a very common issue when working with state mutation. Let's go back and fix it. Back in the login function, replaced the misspelled mutation name with the appropriate name. Now save the file and switch back to the browser to login again. Here in the browser, make sure that the VueJS developer tools is still open and on the Vuex tab. Now let's log in again with our credentials. Our bug appears to be fixed and we have the user data available on the profile page as it should be. If you look at the Vuex inspector, notice that the mutation is recorded, meaning that our mutation is now being called. The Vuex section of the Vue.js developer tools provides clear visibility into our state changes are taking place. This in turn helps us to properly debug the changes in our applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vue.js]] (3), [[Web Development]] (1)
> **CLI Commands:** make (3), find (1)
> **File Paths:** vue.js (3)
> **Definitions:** is a  (3)
> **Code Identifiers:** setuser (1)
> **UI Navigation:** switch to (1)
> **Speakers:** - [instructor] (1)

#### [Running a performance audit](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980&t=0)** - [Instructor] Performance is a big deal in front-end applications. Written [[Statistics]] have shown that a delay as low as 10 milliseconds can cost sites to lose traffic. So, how do you measure performance of a [[Vue.js]] application? How do you track down performance bottlenecks in order to fix them? Fortunately, Chrome Developer Tools compounded with tools for measuring the performance of an application. These tools can help you track down performance bottlenecks and detect areas to improve on. Go ahead and open the Developer Tools in Chrome and switch to the performance tab. We'll be running a performance audit on the login process to analyze its run-time performance. Run-time performance is how your page performs when it is running as opposed to loading. To achieve this, click on the record button which is the gray circle on the performance tab. Ensure that the screenshots option is checked and enter your login credentials to login and click the login button. Once you're logged in, click the stop button on the recorder to stop the process. Woof, that's a whole bunch of information. Don't worry, we'll make sense of the important parts soon. Undock the dev tools to get a better view. One of the main sections is the very first section labeled FPS. FPS stands for frames per second. Here, you want to make sure that your page animations are running at 60 frames per second, and you have very little of these red bars. The red bars indicate that the FPS dropped to a point that might harm [[User Experience (UX)|user experience]]. A full red bar running across white lens
>
> **[1:32](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980&t=92)** shows that you need to do some major optimization to avoid page junk. The next section is the CPU section. The easier way to make sense of the colors in the CPU section is to look down at the summary section on the performance panel. The summary section summarizes the activities taking place and the colors also correspond to the CPU section. If the CPU section is full of colors, it means it is maxed out during recording. This is not the case here, so we're good. We have more of CPU idle time. To see the state of your page at any point in time of the recording, hover over the FPS, CPU or net section. Moving left and right helps you replay the recording. This can help you track down the point in the process where there is a performance bottleneck. This process is known as curbing. In the frames section, you can also hover across the bars. With this, you can catch some red squares that indicate points where the frame drops. If your page has a lot of animations, the frames per second reading is something you want to pay close attention to. To further help up with this, Chrome dev tools provides the frames per second meter. This meter helps you visualize the frames metrics in [[Real-Time]]. To pull up the meter, type Command + Shift + P on Mac, or Ctrl + Shift + B on [[Windows]], to open the command menu, then type rendering in the search field and select show frames per second meter. This will pull up the show frames per second meter
>
> **[3:08](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980&t=188)** which shows you the frames per second in real-time as you use the application. Close performance tools also gives you the ability to tweak some settings under which the app runs. Click on the cog icon on the right-hand side of the performance toolbar to open the settings page. Here, you can make the CPU slower by throttling its performance under the CPU options. You can also throttle the network speed in the network options. This can help you visualize how your application will perform on less powerful devices and slower networks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (2), [[Statistics]] (1), [[Vue.js]] (1), [[User Experience (UX)|User experience]] (1), [[Windows]] (1)
> **Env Vars:** cpu (8), fps (4)
> **UI Navigation:** open the (3), click on (2), switch to (1)
> **CLI Commands:** make (4)
> **Definitions:** is a  (2), stands for (1), known as (1)
> **File Paths:** vue.js (1)
> **Speakers:** - [instructor] (1)


### 5. Functional and Automated Testing

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to Cypress](https://www.linkedin.com/learning/vue-js-testing-and-debugging/introduction-to-cypress?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/introduction-to-cypress?u=76281980&t=0)** - [Instructor] Being able to test an application just the way an end user would use it, is the best form of functional testing. This type of testing gives the most useful feedback in terms of [[User Experience (UX)|user experience]]. However, with these benefits come the laborious task of having to perform these tests manually. It can quickly become frustrating to test an application with hundreds of features from end-to-end. Don't even get me started on manually performing regression tests, when updates are made to the application. In comes Cypress. Cypress is an open source testing tool, for automating functional tests for anything that runs in the browser. Cypress is easy to set up, fast, and highly reliable. If you're like me and you've used [[Selenium]] in the past, and I've had to deal with different browser versions and timeout issues, you would find Cypress to be a breath of fresh air. Cypress is free and open source, thus you can start using it right away. Cypress allows you to switch between different browsers when testing. It also has the ability to adjust the view port when you want to test your applications responsiveness on different devices. Cypress also has a time travel feature, that allows you to rewind and replay tests. Cypress is fast, easy to use, and you'll find it as a good replacement for Selenium. In the next video, we'll be setting up a simple Cypress test to test the login process of our VJS application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Selenium]] (2), [[User Experience (UX)|User experience]] (1)
> **CLI Commands:** find (2)
> **Env Vars:** vjs (1)
> **Cross-References:** in the next (1)
> **Definitions:** is an  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Running a simple end-to-end test with Cypress](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=0)** - [Instructor] Cypress can either be installed as a local dependency in your application or globally on your system. For this exercise, we'll be installing Cypress on the development dependency in our application. To follow along with this video, make sure you're on the 05_02 branch of the project. Cypress is available as an [[npm]] package. Thus, we can install it using NPM. This might take awhile so you might want to come back when installation is done. Once Cypress is installed, you can run it through its binary content in the node modules folder. This can be achieved by running the binary file directly by accessing it in the .bin folder of the node modules folder and calling its open command.
>
> **[0:50](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=50)** Once this command completes, Cypress will add a Cypress folder at the root of the application and a pop up dialog displaying the contents of the newly added folder. This folder contains sample tests that you can run to confirm that Cypress is running fine. We would be running all of that. Let's go ahead and write our own test. We'll be writing a test that will test the login process of our application. To begin, let's go ahead and create our test file. Go into the integrations folder of the Cypress folder and create a new file, login.spec.js. Cypress tests use the Mocha library for writing test cases and charge js as the assertion library. This will reflect in the syntax of the test we would be writing. Let's begin by writing the describe block for our test. Next, let's write our test case for the login test. Great, a good practice when writing test cases is to write out the steps in the testing process. For this test, we first have to load the page. Once the page is loaded, we want to enter the login credentials. The next step is to click on the login button to login. Lastly, we want to assert that we land on the profile page once logged in. These comments will form a guide to make sure we cover all steps required for our test case. Let's now begin to write the code
>
> **[2:25](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=145)** that will make this happen. Before we begin, ensure that your app is running. If your app is not running, make sure you get this started before running your tests. First, using the Cypress global cy object, we can use the visit function to load the root URL of the app. We can actually run this test at this point. But first, let's delete the existing sample tests in the integration folder.
>
> **[2:54](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=174)** Now, save this file and let's head back to the command line to run Cypress. Previously, we run the Cypress command by pointing to it inside the .bin folder inside node modules. In recent versions of NPM, you can actually use the MPX tool to directly run binarys contained in the node modules folder. Simply type NPX Cypress open to run the test we just wrote. This will pop open the Cypress tool. From the Cypress tool, you can then run the test we just wrote by double clicking on the test file. This will open up an instance of the Chrome browser and you can literally see the address you just provided entered into the address bar and the homepage loaded. How cool is that? On the left-hand side, you can see your test cases and the steps involved in the test. Now that we have the homepage loaded and we have confirmed that Cypress runs fine, let's write the other steps for testing our login process. To populate our form fields, we use the get method on the cy objects to target the form elements, using their CSS selectors.
>
> **[4:09](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=249)** In the home.[[Vue.js|vue]] component, we see that the form fields now have unique classes to directly target them, and same for the button. Using the get method, let's target the email field. Then use the type method to fill in the required value. Good, let's go ahead and do the same for the password field. Next, we targeted the login button, but before that, I need to add a dot here as we are using CSS selectors. Now we target the button. Then call the click button on it to log into the application. Now that we have logged in on this line, the final step is to assert that we are now on the profile page. This can be done with the combination of the URL and should methods on the Cypress object. The should method takes in a comparison type on what you're comparing against. For this test, we'll be using the include comparison type and telling it to match the forward slash profile route. Now save the file and let's run the test once again. This time, with Cypress running the entire login process. Our test passed because our assertions are right. If any of the assertions have been wrong or Cypress cannot look at an element on the screen, tests will fail indicating that we have a bug in our login flow.
>
> **[5:42](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=342)** The beauty of this process is that once these tests have been written, you no longer need to manually perform the tests. You can run them as many times as you want and get detailed reporting from Cypress.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (3), [[Vue.js|Vue]] (1)
> **CLI Commands:** make (4), node (4), npm (3), npx (1)
> **Env Vars:** npm (3), url (2), css (2), mpx (1), npx (1)
> **UI Navigation:** click on (1), open the (1)
> **File Paths:** login.spec.js (1)
> **Documentation:** spec (1)
> **Tools:** command line (1)
> **Best Practices:** good practice (1)

#### [Automated testing with CircleCI](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=0)** - [Instructor] So, we're doing the writing for our application. Writing test to ensure that bugs are tracked and fixed before pushing it to production. However, a lot of human errors can still creep into the testing process. Developers might forget to run their tests suits before pushing it to the main repo. We need a way to automate this in such a way that tests guard unhealthy code from being pushed to production. In today's [[DevOps]] world, the solution is [[Continuous Integration (CI)|continuous integration]] pipelines. Continuous integration pipelines, monitor code repositories, and ensure that tests run automatically whenever new code is pushed to a branch. This prevents errors from being pushed into the main branch as a merge will not be possible until all tests are passing. Continuous integration pipelines can be built from scratch with tools like [[Jenkins]] and hosted privately. However, except you have peculiar needs, using a hosted service is preferred. One of the most popular continuous integration and deployment service today is CircleCI. CircleCI is easy to set up and uses the [[Infrastructure as code (IaC)|infrastructure as code]] paradigm to provision a continuous integration pipeline for your code repositories. We'll be setting up a continuous integration or CI pipeline to run the Jest tests contained in our application. To begin building our CI pipeline, make sure that you're on the 05_03b branch of the project. Also ensure that you have pushed your code to a [[GitHub]] repository. I've already done that for this application. The first step in the process of setting up a CI pipeline
>
> **[1:34](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=94)** on CircleCI is writing the pipeline script. To do this, you need to create a '.cicleci' folder at the root of your application. Next, you need to create a yml configuration file with the name config inside the '.circleci' folder. This is the file that will contain your continuous integration script. I will go ahead and write the script, then go over it when I'm done. Now that we have this script, let's go over it. I will advise you not to try and crack your brain regarding the syntax here. Just try to understand what the file is doing as I explain. CircleCI scripts have their formats and keywords well-defined in their documentation. And that should be your reference for getting familiar with the platform. The pipeline script simply consists of jobs, which can be grouped into workflows. Here we have defined a single job called build and set it's working directory to '/repo'. Next, we set the docker image to a CircleCI image running node version 12. This environment is the environment in which our tests will run. Next, we go through a series of steps where we check out the code, update [[npm]], install and cache dependencies. Finally, we run the test in the 'package.[[JSON]]' file using NPM. This should be enough for our test to run, when we push the code to the remote repository. Save this file and push it to your remote repository
>
> **[3:09](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=189)** on GitHub. The next step is to connect our repo to CircleCI. Click on the login or signup button at the top right-hand corner, depending on whether you already have an account or not. Either of the pages has links for logging in with GitHub. Click on the GitHub link to get into your account. I have already logged in with my GitHub account and now on the Projects page. The Projects page is where new projects are connected to CircleCI. You will see all the projects in your GitHub account listed here. To add the 'explore-california' project, click on the setup project button on the right-hand side. On the dialogue box, select that you'll be adding your own configuration file. Next, type in the name of the branch on which the configuration file exists. It's advisable that the file should be in the main branch. This way, every branch that is pushed to the repo would be tested. For this exercise, I have entered the project branch I am currently using to teach this exercise. That is 05_03b. Now click on the 'Let's Go' button and let's watch the pipeline run. Now that the pipeline has finished running, we get a pass for the build. Let's click on the build to view the details. As seen, each step is in its own tab and you can expand the tab to view the details. The step we care about the most
>
> **[4:44](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=284)** is the one that runs the tests. So let's jump to that. Here, we see that our tests are successfully run and we can go through the test results. With this pipeline set up, anytime we push code to the repository, the tests will automatically run. If the tests pass, the code will be cleared to merge with the main branch. If not the main branch will be protected until the faulty code is fixed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Continuous Integration (CI)|Continuous integration]] (7), [[GitHub]] (6), [[npm]] (2), [[DevOps]] (1), [[Jenkins]] (1)
> **Tools:** github (6)
> **CLI Commands:** npm (2), make (1), docker (1), node (1)
> **UI Navigation:** click on (5)
> **Prerequisites:** set up (2), install (1), setup (1)
> **Env Vars:** npm (2)
> **File Paths:** package.json (1)
> **Versions:** version 12 (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps with testing](https://www.linkedin.com/learning/vue-js-testing-and-debugging/next-steps-with-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/next-steps-with-testing?u=76281980&t=0)** - [Fiyako] To further your understanding on how to test [[Vue.js]] applications, I advise that you check the Testing page on the official Vue.js website. You will find helpful links to recommended tools for testing Vue.js applications. I also advise that you check the [[Vue.js|Vue]] Testing Library documentation to get familiar with all the features it offers for making the testing process a lot easier. For more details on using Cypress for automated functional testing, check out the Cypress documentation for more features of their API. To learn more about Vue.js, you can check out the following courses in the [[LinkedIn]] Learning Library, Vue.js Essential Training by Ray Villalobos, Vue.js: Building an Interface, also by Ray, and Learning Vuex by Alexander Zanfer. You can also connect with me on social media. I'm very active on Twitter via Twitter handle displayed on your screen, and you can also find me on LinkedIn using my name. Happy coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vue.js]] (6), [[LinkedIn]] (2), [[Vue.js|Vue]] (1)
> **File Paths:** vue.js (6)
> **CLI Commands:** find (2)
> **Env Vars:** api (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [fiyako] (1)


## Instructor

- [[Fikayo Adepoju]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/vue-js-testing-and-debugging-2399300)

## Skills Covered

- Software Testing
- Debugging Code

## Path Context

### In [[Explore Web Development with Vue.js]]
← [[Learning Vue Js]] | **2 of 3** | [[Vue.js- Creating and Hosting a Full-Stack Site]] →

## Appears In

- [[Explore Web Development with Vue.js]]

## Related Courses

_Courses sharing skills:_

- [[Angular- Testing and Debugging]] — Debugging Code, Software Testing
- [[Learning JavaScript Debugging]] — Debugging Code
- [[Software Testing- Planning Tests for Mobile]] — Software Testing
- [[Building an Ethereum Blockchain App- 9 Testing Ethereum Apps]] — Software Testing
- [[Java- Testing with JUnit]] — Software Testing

---

[↑ Back to top](#)