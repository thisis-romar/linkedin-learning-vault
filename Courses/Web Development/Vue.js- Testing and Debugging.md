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
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Vue.js-%20Testing%20and%20Debugging.md)

![Vue.js: Testing and Debugging](https://media.licdn.com/dms/image/v2/C560DAQHYc0PVbuobHw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1630434561194?e=2147483647&amp;v=beta&amp;t=FzHEJYD_JRzHoccvWKfjVWBxjEHLEOgALRndTKDx5es)

# Vue.js: Testing and Debugging

> You've learned Vue and can create amazing front-end interfaces, but how do you make sure they really work? With Jest, ESLint, and browser dev tools, you can look under the hood and see how well your interface is really working. Instructor Fikayo Adepoju explains the benefits of well-tested code, then delves into how to set up your testing tools. Fikayo goes over everything you need to start unit t

> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-testing-and-debugging) | 1h 20m | Intermediate | 2K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#1. Introduction]]** (4 videos)
- **[[#2. 1. Setting Up Testing Tools]]** (4 videos)
- **[[#3. 2. Unit Testing]]** (7 videos)
- **[[#4. 3. Testing Vue Components]]** (3 videos)
- **[[#5. 4. Debugging with Vue and Chrome Developer tools]]** (5 videos)
- **[[#6. 5. Functional and Automated Testing]]** (3 videos)
- **[[#7. Conclusion]]** (1 videos)

### 1. Introduction

#### Testing Vue applications
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-vue-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-vue-applications?u=76281980&t=0)** - [Fikayo Adepoju] Testing helps create stable and reliable applications.
>
> **[0:04](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-vue-applications?u=76281980&t=4)** Contrary to general perception tests are quite fun to write and run.
>
> **[0:08](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-vue-applications?u=76281980&t=8)** You will also learn how to automate your functional tests for repetitive regression tests and also add test to your continuous integration and deployment pipelines to stop bugs from getting into your production code.
>
> **[0:19](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-vue-applications?u=76281980&t=19)** Hi, I am Fikayo Adepoju and I have been building applications for over 10 years now.
>
> **[0:26](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-vue-applications?u=76281980&t=26)** Through this time I have experienced a lot of bugs and I've been caught up at several odd hours to fix them.
>
> **[0:31](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-vue-applications?u=76281980&t=31)** I have learned some best practices that I would like to share with you to avoid frustrating bugs.
>
> **[0:37](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-vue-applications?u=76281980&t=37)** So sit back, fire up your development machine and let's get started.
>
> **[0:41](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-vue-applications?u=76281980&t=41)** Testing Vue.js applications.

> [!info]- Semantic Content
>
> **File Paths:** vue.js (1)
> **Code Keywords:** let (1)
> **Speakers:** - [fikayo (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-you-should-know?u=76281980&t=0)** - This course requires that you have background knowledge in certain technologies before getting started.
>
> **[0:05](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-you-should-know?u=76281980&t=5)** You will also need to have a few things set up on your machine to follow along with the examples and exercises in this course.
>
> **[0:12](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-you-should-know?u=76281980&t=12)** The first thing you will need is Node.js installed on your system.
>
> **[0:15](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-you-should-know?u=76281980&t=15)** Node.js is a JavaScript runtime popularly used for building backend applications using JavaScript.
>
> **[0:22](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-you-should-know?u=76281980&t=22)** Node.js can be downloaded for any operating system platform from the official Node.js website at [nodejs.org](https://nodejs.org).
>
> **[0:29](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-you-should-know?u=76281980&t=29)** On the Node.js website, you can find instructions on how to install Node.js for your platform.
>
> **[0:34](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-you-should-know?u=76281980&t=34)** The minimum required version of Node.js to engage with this course is version 12.
>
> **[0:39](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-you-should-know?u=76281980&t=39)** The next item on the requirements list is the Vue.js CLI tool.
>
> **[0:44](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-you-should-know?u=76281980&t=44)** This tool is used for scaffolding and managing Vue.js projects.
>
> **[0:48](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-you-should-know?u=76281980&t=48)** As of the time of this recording, the tool can be installed by running the command NPM install -G @vue/cli.
>
> **[0:58](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-you-should-know?u=76281980&t=58)** This will invoke the NPM tool to install the CLI on your system globally and make it accessible from any location in your file system.
>
> **[1:07](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-you-should-know?u=76281980&t=67)** If you prefer the Yarn packet manager, you can use it to install the CLI by running the command yarn global add @view/cli.
>
> **[1:18](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-you-should-know?u=76281980&t=78)** This will install the CLI globally, just like the NPM packet manager would.
>
> **[1:24](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-you-should-know?u=76281980&t=84)** The browser that will be used in this course is the Google Chrome browser.
>
> **[1:27](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-you-should-know?u=76281980&t=87)** Google Chrome has a set of battle-tested developer tools that we will be making use of in our debugging and testing activities in this course.
>
> **[1:36](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-you-should-know?u=76281980&t=96)** Any version of the Google Chrome browser from version 80 is perfect for this course.
>
> **[1:41](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-you-should-know?u=76281980&t=101)** You will also need a text editor to write your test cases.
>
> **[1:44](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-you-should-know?u=76281980&t=104)** This is one area where you have the liberty to choose any text editor you're most comfortable with.
>
> **[1:50](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-you-should-know?u=76281980&t=110)** I'll be using Visual Studio Code, or VS Code for short, as the text editor for writing the test cases for the exercises.
>
> **[1:58](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-you-should-know?u=76281980&t=118)** VS Code has amazing support for writing Vue.js code with a community of plugins that make the development experience a blissful one.
>
> **[2:06](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-you-should-know?u=76281980&t=126)** Asides these tools, you also require a basic experience in web technologies, that is HTML, CSS and JavaScript.
>
> **[2:15](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-you-should-know?u=76281980&t=135)** You also need some experience building applications with Vue.js.
>
> **[2:19](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-you-should-know?u=76281980&t=139)** If you have no experience with these technologies and frameworks, I advise you pause this course and go to our library to find courses to learn about them.
>
> **[2:27](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-you-should-know?u=76281980&t=147)** Once you have good experience with HTML, CSS and JavaScript, and you have built some applications with Vue.js, you can then return to this course to learn all about testing Vue.js applications.
>
> **[2:38](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-you-should-know?u=76281980&t=158)** However, if you have all the experience described above and have also set up all the tools required, let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** node (7), npm (3), find (2), make (2), yarn (2)
> **File Paths:** node.js (7), vue.js (6)
> **Env Vars:** cli (4), npm (3), html (2), css (2)
> **Prerequisites:** install (5), set up (2), getting started (1)
> **Tools:** vs code (2), visual studio (1)
> **Code Keywords:** require (1), let (1)
> **Versions:** version 12 (1), version 80 (1)
> **URLs:** [nodejs.org](https://nodejs.org) (1)

#### Exercise files for testing and debugging
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-testing-and-debugging/exercise-files-for-testing-and-debugging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/exercise-files-for-testing-and-debugging?u=76281980&t=0)** - [Instructor] The exercise files for this course are available on the LinkedIn Learning official GitHub repo.
>
> **[0:06](https://www.linkedin.com/learning/vue-js-testing-and-debugging/exercise-files-for-testing-and-debugging?u=76281980&t=6)** The files are for the Vue JS project we'll be testing in this course.
>
> **[0:10](https://www.linkedin.com/learning/vue-js-testing-and-debugging/exercise-files-for-testing-and-debugging?u=76281980&t=10)** The starting point for each exercise has been organized into branches for you to conveniently follow along.
>
> **[0:16](https://www.linkedin.com/learning/vue-js-testing-and-debugging/exercise-files-for-testing-and-debugging?u=76281980&t=16)** These branches are named according to the section on video for the exercise you have to perform.
>
> **[0:21](https://www.linkedin.com/learning/vue-js-testing-and-debugging/exercise-files-for-testing-and-debugging?u=76281980&t=21)** In each video, you will be instructed to switch to the appropriate branch to follow along.
>
> **[0:26](https://www.linkedin.com/learning/vue-js-testing-and-debugging/exercise-files-for-testing-and-debugging?u=76281980&t=26)** The link to this repository can be found in this video description.

> [!info]- Semantic Content
>
> **Exercise Files:** exercise files (1), github repo (1)
> **Code Keywords:** switch (1)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)

#### Why you need to test
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-testing-and-debugging/why-you-need-to-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/why-you-need-to-test?u=76281980&t=0)** - [Instructor] One of the quick impact of properly testing your code is the peace of mind that comes with it.
>
> **[0:06](https://www.linkedin.com/learning/vue-js-testing-and-debugging/why-you-need-to-test?u=76281980&t=6)** Knowing that core functionalities of your application have been well-tested before being pushed to production means you don't get called by 2:00 AM in the morning to fix bugs.
>
> **[0:15](https://www.linkedin.com/learning/vue-js-testing-and-debugging/why-you-need-to-test?u=76281980&t=15)** Another major reason why we write tests is to ensure that our code follows standards of clean and quality code.
>
> **[0:23](https://www.linkedin.com/learning/vue-js-testing-and-debugging/why-you-need-to-test?u=76281980&t=23)** Quality code is code that is easy to understand, maintain and also well-structured.
>
> **[0:28](https://www.linkedin.com/learning/vue-js-testing-and-debugging/why-you-need-to-test?u=76281980&t=28)** Quality code can also be relative to style guides of the organization for which it is written.
>
> **[0:33](https://www.linkedin.com/learning/vue-js-testing-and-debugging/why-you-need-to-test?u=76281980&t=33)** Testing rules can be written to ensure the style guide is enforced.
>
> **[0:37](https://www.linkedin.com/learning/vue-js-testing-and-debugging/why-you-need-to-test?u=76281980&t=37)** Code also needs to be tested in a team development project to ensure that team members do not push bugs into the central repository.
>
> **[0:45](https://www.linkedin.com/learning/vue-js-testing-and-debugging/why-you-need-to-test?u=76281980&t=45)** When a pull request is submitted, tests run on the feature branch before it is merged into the destination branch.
>
> **[0:52](https://www.linkedin.com/learning/vue-js-testing-and-debugging/why-you-need-to-test?u=76281980&t=52)** If the tests fail, the developer is notified that there are bugs to be fixed before they can be allowed to merge with the central repository.
>
> **[1:01](https://www.linkedin.com/learning/vue-js-testing-and-debugging/why-you-need-to-test?u=76281980&t=61)** Another major reason and a merit to testing is in the value of the application.
>
> **[1:06](https://www.linkedin.com/learning/vue-js-testing-and-debugging/why-you-need-to-test?u=76281980&t=66)** The more bugs were remove from our application through testing, the more the value of the application increases.
>
> **[1:11](https://www.linkedin.com/learning/vue-js-testing-and-debugging/why-you-need-to-test?u=76281980&t=71)** It is therefore important to view testing as the practice of increasing the value of an application by removing its defects.
>
> **[1:19](https://www.linkedin.com/learning/vue-js-testing-and-debugging/why-you-need-to-test?u=76281980&t=79)** We can go on and on talking about why testing is so important in software applications.
>
> **[1:24](https://www.linkedin.com/learning/vue-js-testing-and-debugging/why-you-need-to-test?u=76281980&t=84)** However, from the points discussed so far, we can conclude that testing should be a standard practice in our development flow as it helps detect and remove defects from our applications.

> [!info]- Semantic Content
>
> **Ports:** :00 (1)
> **Speakers:** - [instructor] (1)


### 2. 1. Setting Up Testing Tools

#### Setting up the sample project
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-the-sample-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-the-sample-project?u=76281980&t=0)** - [Instructor] In this video, you'll be setting up the demo project to follow the exercises in this course.
>
> **[0:05](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-the-sample-project?u=76281980&t=5)** For this, you will need to have your command line terminal open.
>
> **[0:08](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-the-sample-project?u=76281980&t=8)** I already have this open and we'll be going in to the command to pull the project from the remote GitHub repository.
>
> **[0:14](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-the-sample-project?u=76281980&t=14)** Whilst you have your terminal open, navigate to the location in your file system where you want to have the demo project.
>
> **[0:20](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-the-sample-project?u=76281980&t=20)** At this location, type the command git clone and the location of the project, then hit enter.
>
> **[0:27](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-the-sample-project?u=76281980&t=27)** This will pull the project from the remote repository into your current location on the terminal.
>
> **[0:32](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-the-sample-project?u=76281980&t=32)** Once the project completes, you now have a project to work with.
>
> **[0:35](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-the-sample-project?u=76281980&t=35)** Go into the project route with the command CD project name.
>
> **[0:40](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-the-sample-project?u=76281980&t=40)** Next, you need to install the project dependencies by running the command MPM install.
>
> **[0:46](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-the-sample-project?u=76281980&t=46)** This might take a while, so you might want to come back when the installation is done.
>
> **[0:51](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-the-sample-project?u=76281980&t=51)** Once the dependencies have been installed, you can then run the project by running the command NPM run serve.
>
> **[0:59](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-the-sample-project?u=76281980&t=59)** This will kick off the process of booting up the local development server for the view application.
>
> **[1:05](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-the-sample-project?u=76281980&t=65)** Once the boot process is done, the applications local address gets printed to the screen.
>
> **[1:10](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-the-sample-project?u=76281980&t=70)** Copy this address and paste it in your browser to load the application.
>
> **[1:13](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-the-sample-project?u=76281980&t=73)** Our demo application is now loaded on the browser and we see the login page for the Explore California website, the best website for booking your vacation in California.
>
> **[1:23](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-the-sample-project?u=76281980&t=83)** This application will be used by users of the site to access and manage their travel profiles.
>
> **[1:29](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-the-sample-project?u=76281980&t=89)** The user accesses their profile by typing in their email and password in the login form and submitting the credentials.
>
> **[1:35](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-the-sample-project?u=76281980&t=95)** For this demo, type in user@[test.com](https://test.com) for the email, then type testpassword into the password field.
>
> **[1:42](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-the-sample-project?u=76281980&t=102)** With the credentials typed in click on the submit button to login.
>
> **[1:45](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-the-sample-project?u=76281980&t=105)** Once logged in, you see the user's profile page.
>
> **[1:48](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-the-sample-project?u=76281980&t=108)** On the left-hand side, we see the user's bio-card containing the avatar, name and address.
>
> **[1:54](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-the-sample-project?u=76281980&t=114)** Below the bio-card are links to the user's social accounts.
>
> **[1:58](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-the-sample-project?u=76281980&t=118)** On the right-hand side is more information about the user and below that, the user's tour breakdown and status of trips around California.
>
> **[2:07](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-the-sample-project?u=76281980&t=127)** This is the project you'll be testing in this course.
>
> **[2:09](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-the-sample-project?u=76281980&t=129)** You'll be writing unit tests to test the components in this application, and also write end-to-end tests to test features like the login process.
>
> **[2:17](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-the-sample-project?u=76281980&t=137)** In the next video, we'll be taking a look at testing tools that will be used for writing and running our tests.

> [!info]- Semantic Content
>
> **Tools:** terminal (3), command line (1), github (1)
> **CLI Commands:** git (1), cd (1), npm (1)
> **Code Keywords:** this, (1), while, (1)
> **Env Vars:** mpm (1), npm (1)
> **UI Navigation:** navigate to (1), click on (1)
> **Prerequisites:** install (2)
> **URLs:** [test.com](https://test.com) (1)
> **Cross-References:** in the next (1)

#### What makes up a testing toolkit?
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-makes-up-a-testing-toolkit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-makes-up-a-testing-toolkit?u=76281980&t=0)** - [Instructor] In order to test Vue.js applications there are a couple of tools required.
>
> **[0:04](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-makes-up-a-testing-toolkit?u=76281980&t=4)** These tools will be set up as development dependencies in your application.
>
> **[0:08](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-makes-up-a-testing-toolkit?u=76281980&t=8)** The first set of these tools is a testing library.
>
> **[0:11](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-makes-up-a-testing-toolkit?u=76281980&t=11)** A testing library is used to scaffold and structure test cases.
>
> **[0:15](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-makes-up-a-testing-toolkit?u=76281980&t=15)** One of the most popular JavaScript testing libraries is Mocha.
>
> **[0:19](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-makes-up-a-testing-toolkit?u=76281980&t=19)** The Jest testing framework also contains a testing library, built-in.
>
> **[0:24](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-makes-up-a-testing-toolkit?u=76281980&t=24)** The second tool required in your testing toolkit is an assertion library.
>
> **[0:28](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-makes-up-a-testing-toolkit?u=76281980&t=28)** An assertion library allows you to test a piece of code or component in your application by passing an input value and checking for an expected result.
>
> **[0:36](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-makes-up-a-testing-toolkit?u=76281980&t=36)** An assertion library is used within the structure created by a testing library in a test case.
>
> **[0:42](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-makes-up-a-testing-toolkit?u=76281980&t=42)** An example of an assertion library is chai.js.
>
> **[0:45](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-makes-up-a-testing-toolkit?u=76281980&t=45)** Chai.js can be easily combined with Mocha to write test cases.
>
> **[0:50](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-makes-up-a-testing-toolkit?u=76281980&t=50)** The Jest testing framework also consists of an assertion library, built-in.
>
> **[0:55](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-makes-up-a-testing-toolkit?u=76281980&t=55)** The third tool required in your testing toolkit is a test runner.
>
> **[0:59](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-makes-up-a-testing-toolkit?u=76281980&t=59)** This is the tool that takes the code written in your test cases and runs them to give a success or failure report.
>
> **[1:05](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-makes-up-a-testing-toolkit?u=76281980&t=65)** Examples of test runners are Karma and the Jest testing framework.
>
> **[1:09](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-makes-up-a-testing-toolkit?u=76281980&t=69)** The three tools we have discussed so far are compulsory in a testing setup.
>
> **[1:13](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-makes-up-a-testing-toolkit?u=76281980&t=73)** However, the next two are based on your testing needs.
>
> **[1:17](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-makes-up-a-testing-toolkit?u=76281980&t=77)** The first set of these optional tools is actually a set of functions known as mocks, stubs and spies.
>
> **[1:25](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-makes-up-a-testing-toolkit?u=76281980&t=85)** This set of functions are used to imitate collaborative code.
>
> **[1:29](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-makes-up-a-testing-toolkit?u=76281980&t=89)** If the unit of code you're testing depends on an external model or a piece of code, these functions can be used to imitate external functionality that your code depends on.
>
> **[1:39](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-makes-up-a-testing-toolkit?u=76281980&t=99)** The second optional and final tool in your toolkit is a test coverage tool.
>
> **[1:43](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-makes-up-a-testing-toolkit?u=76281980&t=103)** Developers and testers often ask the question, how much test is enough test?
>
> **[1:48](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-makes-up-a-testing-toolkit?u=76281980&t=108)** This tool helps you get close to the answer to that question by reporting the amount of your code that is currently being covered in your test cases.
>
> **[1:55](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-makes-up-a-testing-toolkit?u=76281980&t=115)** An example of a test coverage tool is istanbul.js.
>
> **[2:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-makes-up-a-testing-toolkit?u=76281980&t=120)** The Jest testing framework also has a test coverage functionality that is built on istanbul.js.
>
> **[2:06](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-makes-up-a-testing-toolkit?u=76281980&t=126)** In this course, we are going to be using the Jest testing framework.
>
> **[2:09](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-makes-up-a-testing-toolkit?u=76281980&t=129)** The Jest testing framework is a perfect choice because it consists of all the tools that we have just mentioned.
>
> **[2:16](https://www.linkedin.com/learning/vue-js-testing-and-debugging/what-makes-up-a-testing-toolkit?u=76281980&t=136)** So, in the next video we are going to be setting up the Jest testing framework to use in testing our vue.js applications.

> [!info]- Semantic Content
>
> **File Paths:** vue.js (2), chai.js (2), istanbul.js (2)
> **Definitions:** is a  (4), is an  (1), known as (1)
> **Prerequisites:** set up (1), setup (1)
> **Code Keywords:** case. (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Getting started with Jest
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-testing-and-debugging/getting-started-with-jest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/getting-started-with-jest?u=76281980&t=0)** - Jest is a testing framework for JavaScript applications.
>
> **[0:03](https://www.linkedin.com/learning/vue-js-testing-and-debugging/getting-started-with-jest?u=76281980&t=3)** One of the major advantages of Jest is that it has all the five testing tools described in the previous video built-in.
>
> **[0:11](https://www.linkedin.com/learning/vue-js-testing-and-debugging/getting-started-with-jest?u=76281980&t=11)** Jest also has an API that is familiar with other JavaScript testing frameworks you may already be used to.
>
> **[0:17](https://www.linkedin.com/learning/vue-js-testing-and-debugging/getting-started-with-jest?u=76281980&t=17)** The Jest testing framework can be used to test any of the three most popular front end frameworks.
>
> **[0:24](https://www.linkedin.com/learning/vue-js-testing-and-debugging/getting-started-with-jest?u=76281980&t=24)** That is Angular, React, and, of course, Vue.js.
>
> **[0:28](https://www.linkedin.com/learning/vue-js-testing-and-debugging/getting-started-with-jest?u=76281980&t=28)** Jest can also be configured to work with any custom JavaScript project setup you have.
>
> **[0:33](https://www.linkedin.com/learning/vue-js-testing-and-debugging/getting-started-with-jest?u=76281980&t=33)** The philosophy behind Jest is to ensure correctness in any JavaScript code base.
>
> **[0:39](https://www.linkedin.com/learning/vue-js-testing-and-debugging/getting-started-with-jest?u=76281980&t=39)** Jest has a very approachable feature-rich API, and you can use only what you need from the framework.
>
> **[0:45](https://www.linkedin.com/learning/vue-js-testing-and-debugging/getting-started-with-jest?u=76281980&t=45)** Jest is also well-documented and makes the testing experience a delight.
>
> **[0:50](https://www.linkedin.com/learning/vue-js-testing-and-debugging/getting-started-with-jest?u=76281980&t=50)** Jest was built and is maintained by Facebook, and has a very strong community of developers behind it.
>
> **[0:56](https://www.linkedin.com/learning/vue-js-testing-and-debugging/getting-started-with-jest?u=76281980&t=56)** In the following sections, you'll be installing and setting up Jest to write tests for the demo application you just cloned.

> [!info]- Semantic Content
>
> **Env Vars:** api (2)
> **File Paths:** vue.js (1)
> **Cross-References:** previous video (1)
> **Definitions:** is a  (1)
> **Prerequisites:** setup (1)
> **Speakers:** - jest (1)

#### Syntax error checking with ESLint
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-testing-and-debugging/syntax-error-checking-with-eslint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/syntax-error-checking-with-eslint?u=76281980&t=0)** - Linting your code is very important in your testing process, as it helps you detect syntax errors.
>
> **[0:05](https://www.linkedin.com/learning/vue-js-testing-and-debugging/syntax-error-checking-with-eslint?u=76281980&t=5)** This reduces the time you spend in debugging your code, as it ensures that your code is free of syntax errors before you run it.
>
> **[0:12](https://www.linkedin.com/learning/vue-js-testing-and-debugging/syntax-error-checking-with-eslint?u=76281980&t=12)** To follow along with this exercise, make sure that you are on the 01_04b branch of the project.
>
> **[0:19](https://www.linkedin.com/learning/vue-js-testing-and-debugging/syntax-error-checking-with-eslint?u=76281980&t=19)** The easiest way to add linting to your Vue.js project is by using the Vue CLI add function to install and configure the ESLint packet.
>
> **[0:26](https://www.linkedin.com/learning/vue-js-testing-and-debugging/syntax-error-checking-with-eslint?u=76281980&t=26)** Make sure you're at the root of your project and run the command vue add @vue/cli dash plugin dash eslint.
>
> **[0:41](https://www.linkedin.com/learning/vue-js-testing-and-debugging/syntax-error-checking-with-eslint?u=76281980&t=41)** Now hit enter to run the command.
>
> **[0:43](https://www.linkedin.com/learning/vue-js-testing-and-debugging/syntax-error-checking-with-eslint?u=76281980&t=43)** This will begin the installation and setup process.
>
> **[0:46](https://www.linkedin.com/learning/vue-js-testing-and-debugging/syntax-error-checking-with-eslint?u=76281980&t=46)** This might take awhile, so you would want to return when the process is done.
>
> **[0:53](https://www.linkedin.com/learning/vue-js-testing-and-debugging/syntax-error-checking-with-eslint?u=76281980&t=53)** At some point in the installation process, you'll get a prompt to pick a configuration for ESLint.
>
> **[0:58](https://www.linkedin.com/learning/vue-js-testing-and-debugging/syntax-error-checking-with-eslint?u=76281980&t=58)** Let's go with the standard configuration.
>
> **[1:02](https://www.linkedin.com/learning/vue-js-testing-and-debugging/syntax-error-checking-with-eslint?u=76281980&t=62)** Next, you'll get a prompt to pick additional features for ESLint.
>
> **[1:06](https://www.linkedin.com/learning/vue-js-testing-and-debugging/syntax-error-checking-with-eslint?u=76281980&t=66)** The two options are lint on save and lint on commit.
>
> **[1:09](https://www.linkedin.com/learning/vue-js-testing-and-debugging/syntax-error-checking-with-eslint?u=76281980&t=69)** The lint on save option runs the linter each time you save your code in the editor.
>
> **[1:13](https://www.linkedin.com/learning/vue-js-testing-and-debugging/syntax-error-checking-with-eslint?u=76281980&t=73)** The lint on commit option lints your code before it's committed to your local repository.
>
> **[1:18](https://www.linkedin.com/learning/vue-js-testing-and-debugging/syntax-error-checking-with-eslint?u=76281980&t=78)** Select the lint on save option by hitting the enter key as it's already the default selection.
>
> **[1:23](https://www.linkedin.com/learning/vue-js-testing-and-debugging/syntax-error-checking-with-eslint?u=76281980&t=83)** Then wait once again, for the process to finally complete.
>
> **[1:28](https://www.linkedin.com/learning/vue-js-testing-and-debugging/syntax-error-checking-with-eslint?u=76281980&t=88)** Once the setup is complete, load up the project in your text editor.
>
> **[1:32](https://www.linkedin.com/learning/vue-js-testing-and-debugging/syntax-error-checking-with-eslint?u=76281980&t=92)** The setup process did not only install ESLint, but configured the package for the Vue.js project.
>
> **[1:37](https://www.linkedin.com/learning/vue-js-testing-and-debugging/syntax-error-checking-with-eslint?u=76281980&t=97)** Notice the eslint.rc.js file.
>
> **[1:41](https://www.linkedin.com/learning/vue-js-testing-and-debugging/syntax-error-checking-with-eslint?u=76281980&t=101)** This is the configuration file for the ESLint package.
>
> **[1:44](https://www.linkedin.com/learning/vue-js-testing-and-debugging/syntax-error-checking-with-eslint?u=76281980&t=104)** Another item added by the setup process can be found in the package.json file.
>
> **[1:49](https://www.linkedin.com/learning/vue-js-testing-and-debugging/syntax-error-checking-with-eslint?u=76281980&t=109)** A lint script has an added to the list of scripts.
>
> **[1:52](https://www.linkedin.com/learning/vue-js-testing-and-debugging/syntax-error-checking-with-eslint?u=76281980&t=112)** This allows us to run the linter on the entire project from the terminal.
>
> **[1:56](https://www.linkedin.com/learning/vue-js-testing-and-debugging/syntax-error-checking-with-eslint?u=76281980&t=116)** Let's try this out.
>
> **[1:57](https://www.linkedin.com/learning/vue-js-testing-and-debugging/syntax-error-checking-with-eslint?u=76281980&t=117)** Let's head over to the terminal.
>
> **[1:59](https://www.linkedin.com/learning/vue-js-testing-and-debugging/syntax-error-checking-with-eslint?u=76281980&t=119)** At the root of the project, run the lint script by typing NPM run lint.
>
> **[2:05](https://www.linkedin.com/learning/vue-js-testing-and-debugging/syntax-error-checking-with-eslint?u=76281980&t=125)** At this point of the project, the linter reports that no errors were found as the project does not contain any syntax errors at the moment.
>
> **[2:12](https://www.linkedin.com/learning/vue-js-testing-and-debugging/syntax-error-checking-with-eslint?u=76281980&t=132)** Let's try to get some error reporting by intentionally adding some syntax errors to our code.
>
> **[2:17](https://www.linkedin.com/learning/vue-js-testing-and-debugging/syntax-error-checking-with-eslint?u=76281980&t=137)** Inside the text editor, open up Home.vue.
>
> **[2:23](https://www.linkedin.com/learning/vue-js-testing-and-debugging/syntax-error-checking-with-eslint?u=76281980&t=143)** Just underneath the first opening div, add an incomplete div tag.
>
> **[2:32](https://www.linkedin.com/learning/vue-js-testing-and-debugging/syntax-error-checking-with-eslint?u=76281980&t=152)** Now let's return to the terminal and run the linting command once again.
>
> **[2:37](https://www.linkedin.com/learning/vue-js-testing-and-debugging/syntax-error-checking-with-eslint?u=76281980&t=157)** This time the linter reports the syntax errors in our code.
>
> **[2:41](https://www.linkedin.com/learning/vue-js-testing-and-debugging/syntax-error-checking-with-eslint?u=76281980&t=161)** It also gives information on where the error takes place, helping us locate and fix them.

> [!info]- Semantic Content
>
> **Prerequisites:** setup (4), install (2), configure (1)
> **Code Keywords:** let (5), function (1)
> **File Paths:** vue.js (2), eslint.rc.js (1), package.json (1)
> **CLI Commands:** make (2), npm (1)
> **Tools:** terminal (3)
> **Env Vars:** cli (1), npm (1)
> **UI Navigation:** select the (1)
> **Speakers:** - linting (1)


### 3. 2. Unit Testing

#### Installing and running Jest
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-testing-and-debugging/installing-and-running-jest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/installing-and-running-jest?u=76281980&t=0)** - Now that we understand Jest and what it does, let's get it installed and set up in our project.
>
> **[0:06](https://www.linkedin.com/learning/vue-js-testing-and-debugging/installing-and-running-jest?u=76281980&t=6)** To install Jest, have your command line open at the root of the Vue.js project.
>
> **[0:11](https://www.linkedin.com/learning/vue-js-testing-and-debugging/installing-and-running-jest?u=76281980&t=11)** To follow along with this video, you need the 02_01b branch of the project.
>
> **[0:17](https://www.linkedin.com/learning/vue-js-testing-and-debugging/installing-and-running-jest?u=76281980&t=17)** So check the branch out of the remote repository using git, now run the command to install the jest package as a development dependency.
>
> **[0:30](https://www.linkedin.com/learning/vue-js-testing-and-debugging/installing-and-running-jest?u=76281980&t=30)** Now, this process is going to take a while, so you can take a short break, maybe check on your emails, then turn back when it's done.
>
> **[0:39](https://www.linkedin.com/learning/vue-js-testing-and-debugging/installing-and-running-jest?u=76281980&t=39)** Now that Jest has been installed into the project, we can start using it to run our tests.
>
> **[0:44](https://www.linkedin.com/learning/vue-js-testing-and-debugging/installing-and-running-jest?u=76281980&t=44)** You can confirm this by running the jest command at the root of the project.
>
> **[0:49](https://www.linkedin.com/learning/vue-js-testing-and-debugging/installing-and-running-jest?u=76281980&t=49)** The output of running jest at this point indicates that there are no tests currently available in the project.
>
> **[0:55](https://www.linkedin.com/learning/vue-js-testing-and-debugging/installing-and-running-jest?u=76281980&t=55)** The way we just ran jest is not a standard way we will be running into command, we'll be creating an NPM script for that.
>
> **[1:02](https://www.linkedin.com/learning/vue-js-testing-and-debugging/installing-and-running-jest?u=76281980&t=62)** To add the NPM script, locate the package.json file in your text editor.
>
> **[1:09](https://www.linkedin.com/learning/vue-js-testing-and-debugging/installing-and-running-jest?u=76281980&t=69)** Now add the test script in the script section and set it to call the jest command, this way each time we run the test script, the jest command we'll run.
>
> **[1:19](https://www.linkedin.com/learning/vue-js-testing-and-debugging/installing-and-running-jest?u=76281980&t=79)** Let's go ahead and test that out in the CLI.
>
> **[1:22](https://www.linkedin.com/learning/vue-js-testing-and-debugging/installing-and-running-jest?u=76281980&t=82)** I do it on the project once again, run the test script using NPM, as seen we get the same results as we did when we just ran the jest command, but this time we have some errors coming from NPM terminating the process.
>
> **[1:37](https://www.linkedin.com/learning/vue-js-testing-and-debugging/installing-and-running-jest?u=76281980&t=97)** Now you don't have to worry about these errors, they are completely normal and would no longer show up once we have test files in the project.

> [!info]- Semantic Content
>
> **CLI Commands:** npm (4), git (1)
> **Env Vars:** npm (4), cli (1)
> **Code Keywords:** let (2), while, (1), break, (1)
> **Prerequisites:** install (2), set up (1)
> **File Paths:** vue.js (1), package.json (1)
> **Tools:** command line (1)
> **Speakers:** - now (1)

#### Testing strings using matchers
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-strings-using-matchers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-strings-using-matchers?u=76281980&t=0)** - Are projects now has just installed and is good to go.
>
> **[0:03](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-strings-using-matchers?u=76281980&t=3)** Time for us to start adding some tests to our application, starting with string tests.
>
> **[0:09](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-strings-using-matchers?u=76281980&t=9)** Just our sessions make use of matches to compare the output of our code to expected results.
>
> **[0:14](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-strings-using-matchers?u=76281980&t=14)** So we'll be using string matches to test out strings in this video.
>
> **[0:18](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-strings-using-matchers?u=76281980&t=18)** To follow along with this video, you need the 02 underscore 02B branch of the project so make sure you're on the 02 underscore 02B branch.
>
> **[0:29](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-strings-using-matchers?u=76281980&t=29)** For the exercises in this chapter, we will be placing all our tests inside a special just folder named tests, with double underscores on both sides.
>
> **[0:38](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-strings-using-matchers?u=76281980&t=38)** When we run our test command, just look at this folder and run the files inside it as test suits.
>
> **[0:44](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-strings-using-matchers?u=76281980&t=44)** Let's go ahead and create a folder inside the source folder.
>
> **[0:49](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-strings-using-matchers?u=76281980&t=49)** Next, create a strings dot JS file within this folder.
>
> **[0:57](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-strings-using-matchers?u=76281980&t=57)** The file just created will continue our string tests.
>
> **[1:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-strings-using-matchers?u=76281980&t=60)** Given tests and terminologies, this file is known as it test suit.
>
> **[1:05](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-strings-using-matchers?u=76281980&t=65)** Within the file, let's add a simple string test that will test if a certain phrase contains a substring.
>
> **[1:16](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-strings-using-matchers?u=76281980&t=76)** So here we start by writing the test case definition, then within the test case we search the phrase it's raining cats and dogs to contain the substring dogs.
>
> **[1:35](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-strings-using-matchers?u=76281980&t=95)** We do this using the expect function given to us by just and distinct matcher to match.
>
> **[1:41](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-strings-using-matchers?u=76281980&t=101)** Too much text in a regular expression or string match in the search term.
>
> **[1:46](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-strings-using-matchers?u=76281980&t=106)** Let's go ahead and save this file then switch to the command line to run the test.
>
> **[1:51](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-strings-using-matchers?u=76281980&t=111)** Now we're going to test command at the root of the project.
>
> **[1:54](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-strings-using-matchers?u=76281980&t=114)** To run the string test we'll just add it.
>
> **[1:58](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-strings-using-matchers?u=76281980&t=118)** The command we just ran invokes just to begin searching the project for test files and any file found will be run and the test results printed.
>
> **[2:07](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-strings-using-matchers?u=76281980&t=127)** This process can sometimes take a while depending on the number of tests, the logic in the test or the speed of your machine.
>
> **[2:14](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-strings-using-matchers?u=76281980&t=134)** Not only the testing process is complete we see a passed result printer to the screen.
>
> **[2:19](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-strings-using-matchers?u=76281980&t=139)** That is because the substring dogs does exist in the tested phrase it's raining cats and dogs.
>
> **[2:25](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-strings-using-matchers?u=76281980&t=145)** Just indicates a check mark to the left of the test case name to show its status.
>
> **[2:31](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-strings-using-matchers?u=76281980&t=151)** It also reports how many test cases and test suits that were involved in the testing process and how many of them passed.
>
> **[2:39](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-strings-using-matchers?u=76281980&t=159)** We also get information on how long it took the tests to run.
>
> **[2:42](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-strings-using-matchers?u=76281980&t=162)** Let's cause the test to fail by searching for a non-existent substring and see how just will post the failure.
>
> **[2:48](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-strings-using-matchers?u=76281980&t=168)** Back in the text editor, let's replace the search term by switching dogs to fishes in the to match function then save the file.
>
> **[2:57](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-strings-using-matchers?u=76281980&t=177)** Switch back to the terminal and run the test once again.
>
> **[3:03](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-strings-using-matchers?u=76281980&t=183)** The test results are way different this time.
>
> **[3:05](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-strings-using-matchers?u=76281980&t=185)** The red ink already indicates to us that something is wrong somewhere and we know why.
>
> **[3:10](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-strings-using-matchers?u=76281980&t=190)** The substrings fishes cannot be found in the given phrase.
>
> **[3:14](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-strings-using-matchers?u=76281980&t=194)** And as you can see, just clearly we post that expected button cannot be found in received string.
>
> **[3:21](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-strings-using-matchers?u=76281980&t=201)** Just goes a step further by showing us where in the test case the error is coming from.
>
> **[3:25](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-strings-using-matchers?u=76281980&t=205)** In this case, it's in the substring supplied to the matcher.
>
> **[3:29](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-strings-using-matchers?u=76281980&t=209)** We also get to use your stats on the number of tests and field versus past test report, including the time it took the test to run.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (2), switch (2), continue (1), match. (1)
> **CLI Commands:** make (2)
> **Tools:** command line (1), terminal (1)
> **UI Navigation:** switch to (1)
> **Definitions:** known as (1)
> **Speakers:** - are (1)

#### Testing numeric values
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=0)** - Numeric values are one of the most important data types that require testing in your code.
>
> **[0:05](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=5)** In this video, we'll be doing just that.
>
> **[0:08](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=8)** Your official JS documentation consists of a couple of matches for testing numbers, and we will be making use of some of them in this exercise.
>
> **[0:16](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=16)** To follow along with this video, you need the 02_03b branch of the project.
>
> **[0:22](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=22)** So make sure you are on the 02_03b branch.
>
> **[0:26](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=26)** A new model has been added to the project that will contain utilities to be used in our tests.
>
> **[0:32](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=32)** Inside the source folder, there's a utilities.js file containing the utilities model.
>
> **[0:36](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=36)** The model currently contains a single function, "addNumbers".
>
> **[0:41](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=41)** This function simply adds the two numbers supplied to it as arguments.
>
> **[0:44](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=44)** We'll be making use of this model in our next test.
>
> **[0:48](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=48)** Navigate to the tests folder.
>
> **[0:50](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=50)** And within it create a new file numbers.js.
>
> **[0:54](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=54)** (keyboard typing) This file will contain test cases for our numeric tests.
>
> **[1:01](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=61)** First thing to do in this test is to import the addNumbers function.
>
> **[1:04](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=64)** (keyboard typing) Good, now let's add a test case that uses addNumbers to add the numbers four and five.
>
> **[1:21](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=81)** (keyboard typing) Using it toEqual Jest matcher, let's assert its result to be nine as expected.
>
> **[1:30](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=90)** Good, now save the file and returned it to the command line to run the tests.
>
> **[1:34](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=94)** We currently have two test suites in the project.
>
> **[1:36](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=96)** One for the strings test, from a previous video and the one we just added for testing numeric values.
>
> **[1:42](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=102)** If we want npm, run test, Jest will run all the tests suites currently available within the project.
>
> **[1:47](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=107)** We can, however, run a specific test suite by adding a space and the name of the test suite file, after the test command.
>
> **[1:54](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=114)** Let's run the numbers.js file this way.
>
> **[2:01](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=121)** As seen from the results, just reports a passing state for our addNumbers function.
>
> **[2:06](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=126)** Let's introduce a bug into this function and see if our tests can help us detect that.
>
> **[2:14](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=134)** Going to the utilities model.
>
> **[2:16](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=136)** And we'll place the addition operator, which is subtraction.
>
> **[2:20](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=140)** Save the file and switch back to the command line to run the test suite once again.
>
> **[2:28](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=148)** This time Jest reports that our function is not producing the right output, which indicates a bug in its implementation.
>
> **[2:35](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=155)** This shows the importance of tests in our application.
>
> **[2:37](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=157)** As we can be quickly notified of unwanted behaviors in our code.
>
> **[2:42](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=162)** Let's go back to the utilities model to fix the function and next we'll look at testing floating point numbers.
>
> **[2:50](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=170)** To test floating point numbers, we'll be adding another test case.
>
> **[2:55](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=175)** This time we'll be adding floating point numbers, 0.4 and 0.5 to a certain expected result of 0.9.
>
> **[3:05](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=185)** (keyboard typing)
>
> **[3:14](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=194)** Good.
>
> **[3:15](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=195)** Now save the file and switch back to the command line to run the test suite once again.
>
> **[3:22](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=202)** (keyboard typing) Everything appears to be fine.
>
> **[3:28](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=208)** our two tests are passing as expected.
>
> **[3:32](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=212)** However, there's an hidden bug right inside our code.
>
> **[3:36](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=216)** Switch back to the test file and this time add the floating point numbers 0.1 and 0.2.
>
> **[3:41](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=221)** Asserting an expected result of 0.3.
>
> **[3:44](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=224)** Make sure you save the file.
>
> **[3:45](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=225)** Now we talk to the command line, I'm going to test case once again.
>
> **[3:49](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=229)** (keyboard typing) Surprise, surprise, our test fails.
>
> **[3:57](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=237)** But why?
>
> **[3:58](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=238)** Turns out floating point numbers often have rounding up errors.
>
> **[4:02](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=242)** and this is common across different programming languages, JavaScript inclusive.
>
> **[4:07](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=247)** As seen, the result didn't turn out to be exactly 0.3.
>
> **[4:10](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=250)** It was a teeny tiny little bit above 0.3.
>
> **[4:15](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=255)** But don't worry, just adjust the right matcher to fix this problem.
>
> **[4:20](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=260)** Back in the text editor, let's replace the toEqual matcher in the floating point numbers test to the, "toBeCloseTo" matcher.
>
> **[4:32](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=272)** This matcher is preferred by Jest for testing equality in floating point numbers.
>
> **[4:36](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=276)** Save the file on and head to the command line.
>
> **[4:40](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=280)** Now run the test once again and this time we should have passing results for both tests.
>
> **[4:45](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-numeric-values?u=76281980&t=285)** (keyboard typing) Awesome. In the next video, we'll take a look at how we can test objects and arrays.

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), let (6), switch (3), require (1), assert (1)
> **Versions:** 0.3 (3), 0.4 (1), 0.5 (1), 0.9 (1), 0.1 (1)
> **Code Identifiers:** addnumbers (4), toequal (2), tobecloseto (1)
> **Non-Speech:** (keyboard typing) (7)
> **Tools:** command line (5)
> **File Paths:** numbers.js (2), utilities.js (1)
> **CLI Commands:** make (2), npm (1)
> **Cross-References:** previous video (1), go back to (1), in the next (1)

#### Testing objects and arrays
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-objects-and-arrays?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-objects-and-arrays?u=76281980&t=0)** - [Instructor] So, you have learnt how to use Jest matchers to test primitive data types like strings and numbers.
>
> **[0:06](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-objects-and-arrays?u=76281980&t=6)** It's now time to dive into the world of arrays and objects.
>
> **[0:10](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-objects-and-arrays?u=76281980&t=10)** Just as with strings or numbers, Jest comes packaged with handy matchers for writing assertions for objects and arrays.
>
> **[0:18](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-objects-and-arrays?u=76281980&t=18)** We will be taking a look at a couple of them in this video.
>
> **[0:20](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-objects-and-arrays?u=76281980&t=20)** So, without wasting any time, let's dive in.
>
> **[0:23](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-objects-and-arrays?u=76281980&t=23)** Follow along with this video.
>
> **[0:24](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-objects-and-arrays?u=76281980&t=24)** You need the 02_04b branch of the project.
>
> **[0:28](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-objects-and-arrays?u=76281980&t=28)** So make sure you are on the 02_04b branch.
>
> **[0:37](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-objects-and-arrays?u=76281980&t=37)** For this exercise, two additional properties are now present in the utilities model.
>
> **[0:43](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-objects-and-arrays?u=76281980&t=43)** A countries collection array, which holds string names of five countries and a user object, John Doe, which contains bio-data properties of a fictitious user name, you guessed it, John Doe.
>
> **[0:56](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-objects-and-arrays?u=76281980&t=56)** Just like the 'addNumbers' function, these new properties have been included in the models exports.
>
> **[1:02](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-objects-and-arrays?u=76281980&t=62)** So, let's start adding tests for these properties.
>
> **[1:05](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-objects-and-arrays?u=76281980&t=65)** Inside the test file, create a new file with the name 'object.js'.
>
> **[1:13](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-objects-and-arrays?u=76281980&t=73)** To begin writing the test suit, import the country's collection and John Doe objects from the utilities model.
>
> **[1:25](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-objects-and-arrays?u=76281980&t=85)** Next, add a text case to check if the country's collection contains a country named Nigeria.
>
> **[1:38](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-objects-and-arrays?u=76281980&t=98)** For this, the 'toContain' Jest matcher will be used.
>
> **[1:44](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-objects-and-arrays?u=76281980&t=104)** The 'toContain' matcher checks if an array contains at least one instance of the given argument.
>
> **[1:50](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-objects-and-arrays?u=76281980&t=110)** Save the file and let's take this test for spin.
>
> **[1:54](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-objects-and-arrays?u=76281980&t=114)** At the root of the project, use the test script to run the newly added test suit.
>
> **[2:02](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-objects-and-arrays?u=76281980&t=122)** As expected, Jest reports a passing result for the test suit.
>
> **[2:07](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-objects-and-arrays?u=76281980&t=127)** Let's take for a country that does not exist in the array, say France, then observe how Jest reports it.
>
> **[2:14](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-objects-and-arrays?u=76281980&t=134)** Replace the argument of the 'toContain' matcher with the string 'France'.
>
> **[2:19](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-objects-and-arrays?u=76281980&t=139)** Save the file and return to the command line to run the test once again.
>
> **[2:26](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-objects-and-arrays?u=76281980&t=146)** As expected, the test fails because the string France is not contained in our countries array.
>
> **[2:32](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-objects-and-arrays?u=76281980&t=152)** Jest prints out the expected string to be found, that is France, and below it shows the content of the array to indicate that the search term does not exist in the array.
>
> **[2:43](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-objects-and-arrays?u=76281980&t=163)** We will be testing the the John Doe object next but first let's fix the array test by reverting back to the search for the string Nigeria.
>
> **[2:50](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-objects-and-arrays?u=76281980&t=170)** To test our John Doe object, we'll be writing a test case that checks if the user object contains a subset of its information.
>
> **[2:58](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-objects-and-arrays?u=76281980&t=178)** The assertion will check if the John Doe object has an age property equal to 26 and that the user's occupation is an accountant.
>
> **[3:08](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-objects-and-arrays?u=76281980&t=188)** For this, we'll be passing into the 'toEqual' matcher, the function 'expect.objectContaining' which is a Jest helper.
>
> **[3:20](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-objects-and-arrays?u=76281980&t=200)** The 'objectContaining' helper method returns true, if the object we are searching contains the key value pairs in the sub object passed to it.
>
> **[3:32](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-objects-and-arrays?u=76281980&t=212)** Inside this function, we just passed the subset of information we want to check.
>
> **[3:36](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-objects-and-arrays?u=76281980&t=216)** Save this file and head over to the command line to run the test.
>
> **[3:42](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-objects-and-arrays?u=76281980&t=222)** Because our John Doe object contains the key value pair searched, our tests passed.
>
> **[3:47](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-objects-and-arrays?u=76281980&t=227)** A change in any of the key value pairs can cause the test to fail if it is not contained in the John Doe object as specified.
>
> **[3:54](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-objects-and-arrays?u=76281980&t=234)** For example, let's head back to our test file and change occupation to programmer, save this file and return to the CLI to run the test once again.
>
> **[4:05](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-objects-and-arrays?u=76281980&t=245)** You can see that the test now fail as the occupation key value pair is not as we have it in our John Doe object.
>
> **[4:13](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-objects-and-arrays?u=76281980&t=253)** For more methods and functions for testing objects and array, I encourage you to check the official Jest documentation and other useful examples online.
>
> **[4:21](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-objects-and-arrays?u=76281980&t=261)** This will help you familiarize yourself with different scenarios and conditions for testing objects and arrays.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), function (3), this, (2)
> **Code Identifiers:** tocontain (3), objectcontaining (2), addnumbers (1), toequal (1)
> **Tools:** command line (2)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** just like (1), for example (1)
> **File Paths:** object.js (1)
> **CLI Commands:** make (1)
> **Env Vars:** cli (1)

#### Organizing tests
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-testing-and-debugging/organizing-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/organizing-tests?u=76281980&t=0)** - [Instructor] Test cases help us test different scenarios in which our code will be used.
>
> **[0:05](https://www.linkedin.com/learning/vue-js-testing-and-debugging/organizing-tests?u=76281980&t=5)** Wouldn't it be awesome to define the context in which a test is running and group related tests?
>
> **[0:10](https://www.linkedin.com/learning/vue-js-testing-and-debugging/organizing-tests?u=76281980&t=10)** This will surely be beneficial to properly reading and interpreting test results.
>
> **[0:15](https://www.linkedin.com/learning/vue-js-testing-and-debugging/organizing-tests?u=76281980&t=15)** Using Jest, we have the ability to group tests using describe blocks.
>
> **[0:19](https://www.linkedin.com/learning/vue-js-testing-and-debugging/organizing-tests?u=76281980&t=19)** This way we can group and label related tests and also define dependencies per test group.
>
> **[0:26](https://www.linkedin.com/learning/vue-js-testing-and-debugging/organizing-tests?u=76281980&t=26)** Let's dive into our code and see how we can use describe blocks to group all the tests written so far.
>
> **[0:31](https://www.linkedin.com/learning/vue-js-testing-and-debugging/organizing-tests?u=76281980&t=31)** In this exercise, we'll be creating a group for the string tests, another group for the numeric tests and a third group for the objects and arrays tests.
>
> **[0:40](https://www.linkedin.com/learning/vue-js-testing-and-debugging/organizing-tests?u=76281980&t=40)** Inside the test folder, create a new file with the name organized.js.
>
> **[0:49](https://www.linkedin.com/learning/vue-js-testing-and-debugging/organizing-tests?u=76281980&t=49)** Inside this test suite, let's import all properties contained in the utilities module.
>
> **[0:59](https://www.linkedin.com/learning/vue-js-testing-and-debugging/organizing-tests?u=76281980&t=59)** Next, we create a container describe block to hold all our test cases.
>
> **[1:05](https://www.linkedin.com/learning/vue-js-testing-and-debugging/organizing-tests?u=76281980&t=65)** Let's now nest three describe blocks inside the parent block.
>
> **[1:08](https://www.linkedin.com/learning/vue-js-testing-and-debugging/organizing-tests?u=76281980&t=68)** One for each set of tests we have written so far.
>
> **[1:13](https://www.linkedin.com/learning/vue-js-testing-and-debugging/organizing-tests?u=76281980&t=73)** Good.
>
> **[1:14](https://www.linkedin.com/learning/vue-js-testing-and-debugging/organizing-tests?u=76281980&t=74)** Let's now copy the tests from each test file written so far into their respective blocks.
>
> **[1:34](https://www.linkedin.com/learning/vue-js-testing-and-debugging/organizing-tests?u=76281980&t=94)** With all the tests in their describe blocks, save the file and run the new test suite on the command line.
>
> **[1:42](https://www.linkedin.com/learning/vue-js-testing-and-debugging/organizing-tests?u=76281980&t=102)** As expected, our tests pass.
>
> **[1:44](https://www.linkedin.com/learning/vue-js-testing-and-debugging/organizing-tests?u=76281980&t=104)** But this is not the main story here.
>
> **[1:46](https://www.linkedin.com/learning/vue-js-testing-and-debugging/organizing-tests?u=76281980&t=106)** Look at how tests are now organized into sections and hierarchies making it easier to interpret.
>
> **[1:52](https://www.linkedin.com/learning/vue-js-testing-and-debugging/organizing-tests?u=76281980&t=112)** This arrangement also indicates the order in which the tests are ran.
>
> **[1:56](https://www.linkedin.com/learning/vue-js-testing-and-debugging/organizing-tests?u=76281980&t=116)** To confirm this, let's try switching the position of the describe blocks.
>
> **[2:01](https://www.linkedin.com/learning/vue-js-testing-and-debugging/organizing-tests?u=76281980&t=121)** Back in the editor, let's switch the position of the numeric test for that of the object test group.
>
> **[2:08](https://www.linkedin.com/learning/vue-js-testing-and-debugging/organizing-tests?u=76281980&t=128)** Now save the file and return to the CLI once again to run the test.
>
> **[2:13](https://www.linkedin.com/learning/vue-js-testing-and-debugging/organizing-tests?u=76281980&t=133)** As observed, this time the order changes, and we see the arrays and objects tests running before the numeric tests.
>
> **[2:20](https://www.linkedin.com/learning/vue-js-testing-and-debugging/organizing-tests?u=76281980&t=140)** This is a very useful tool when the order in which the tests run matter to the testing process.
>
> **[2:26](https://www.linkedin.com/learning/vue-js-testing-and-debugging/organizing-tests?u=76281980&t=146)** Using describe blocks, we can easily group tests and introduce context into our testing process.
>
> **[2:31](https://www.linkedin.com/learning/vue-js-testing-and-debugging/organizing-tests?u=76281980&t=151)** Describe blocks also helps us to use Jest set up and tear down functions to manage dependencies for test groups.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), module (1), pass (1), this, (1), switch (1)
> **File Paths:** organized.js (1)
> **Env Vars:** cli (1)
> **Tools:** command line (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Testing asynchronous code
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-asynchronous-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-asynchronous-code?u=76281980&t=0)** - [Instructor] Asynchronous code is very common in front end applications.
>
> **[0:03](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-asynchronous-code?u=76281980&t=3)** This makes it very important to learn how to test the parts of your code base that you want asynchronously.
>
> **[0:09](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-asynchronous-code?u=76281980&t=9)** For this purpose, a new function, async print, have been added to the utilities model.
>
> **[0:15](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-asynchronous-code?u=76281980&t=15)** This function mocks an asynchronous process by printing out the hello world string two seconds after it is invoked.
>
> **[0:24](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-asynchronous-code?u=76281980&t=24)** The async function without a promise that resolves a string.
>
> **[0:28](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-asynchronous-code?u=76281980&t=28)** Let's go ahead and test this function's behavior.
>
> **[0:31](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-asynchronous-code?u=76281980&t=31)** To follow along with this video, you need the 02_06b branch of the project.
>
> **[0:36](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-asynchronous-code?u=76281980&t=36)** So make sure you are on the 02_06b branch.
>
> **[0:40](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-asynchronous-code?u=76281980&t=40)** Go into the test folder and create a new file with the name async.js.
>
> **[0:48](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-asynchronous-code?u=76281980&t=48)** Inside the test file, import the async print function.
>
> **[0:54](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-asynchronous-code?u=76281980&t=54)** Next, we'll be writing a test case that checks that the asynchronous function prints the string hello world as expected.
>
> **[1:04](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-asynchronous-code?u=76281980&t=64)** Inside a test case scaffold, we call the asynchronous function and use the promise API to get its results.
>
> **[1:13](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-asynchronous-code?u=76281980&t=73)** Make sure you return the promise by adding the return keyword just before the async print function call.
>
> **[1:18](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-asynchronous-code?u=76281980&t=78)** This is important for jest to terminate the process after executing the test.
>
> **[1:23](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-asynchronous-code?u=76281980&t=83)** Now that we have the result in the data variable, we can post it to test it with the expect method and the to be matcher.
>
> **[1:37](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-asynchronous-code?u=76281980&t=97)** Good, now save the file and head over to the command line to run the test.
>
> **[1:43](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-asynchronous-code?u=76281980&t=103)** As we can see, our tests pass as expected.
>
> **[1:46](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-asynchronous-code?u=76281980&t=106)** Do take into consideration that the time it takes for the asynchronous process to complete is included in the total time it takes to test to complete.
>
> **[1:55](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-asynchronous-code?u=76281980&t=115)** Using the thenable promise syntax is one way to work with asynchronous tests and jest.
>
> **[2:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-asynchronous-code?u=76281980&t=120)** Another way to test asynchronous code and jest is to use the async await syntax.
>
> **[2:06](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-asynchronous-code?u=76281980&t=126)** Let's head back to our test file and write the async await version of the test case we just ran.
>
> **[2:11](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-asynchronous-code?u=76281980&t=131)** Back in the test file, let's comment out the first test case that we have written.
>
> **[2:17](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-asynchronous-code?u=76281980&t=137)** Now, write another test case exactly like the previous one, but this time, we'll be adding the async keyword.
>
> **[2:27](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-asynchronous-code?u=76281980&t=147)** The async keyword will be added just before the call back function.
>
> **[2:31](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-asynchronous-code?u=76281980&t=151)** Now regard the test using expect to assert the result of the async print function call.
>
> **[2:37](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-asynchronous-code?u=76281980&t=157)** Because we're testing under asynchronous function, the await keyword needs to proceed the expect call.
>
> **[2:43](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-asynchronous-code?u=76281980&t=163)** Next, we need a matcher to test the output of the function.
>
> **[2:47](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-asynchronous-code?u=76281980&t=167)** For promised based async functions, the expect function as a resolves property that needs to be called before calling the matcher function.
>
> **[2:57](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-asynchronous-code?u=76281980&t=177)** The resolves property as a fluent API that can be changed to any of the available matchers.
>
> **[3:02](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-asynchronous-code?u=76281980&t=182)** Just like the previous version of the test, we use the to be matcher to assert the expected string output of hello world.
>
> **[3:09](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-asynchronous-code?u=76281980&t=189)** Save this file and return to the CLI to run the test.
>
> **[3:15](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-asynchronous-code?u=76281980&t=195)** As expected, we have passing tests once again.
>
> **[3:18](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-asynchronous-code?u=76281980&t=198)** Feel free to choose the syntax you prefer.
>
> **[3:20](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-asynchronous-code?u=76281980&t=200)** After all, it's just syntax.
>
> **[3:22](https://www.linkedin.com/learning/vue-js-testing-and-debugging/testing-asynchronous-code?u=76281980&t=202)** One syntax does not have functional advantage over the other.

> [!info]- Semantic Content
>
> **Code Keywords:** function (14), async (11), let (3), await (3), assert (2)
> **Env Vars:** api (2), cli (1)
> **CLI Commands:** make (2)
> **File Paths:** async.js (1)
> **Tools:** command line (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Analyzing test coverage
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-testing-and-debugging/analyzing-test-coverage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/analyzing-test-coverage?u=76281980&t=0)** - [Speaker] As stated in the previous section, Jest comes bundled with tools for analyzing test coverage.
>
> **[0:05](https://www.linkedin.com/learning/vue-js-testing-and-debugging/analyzing-test-coverage?u=76281980&t=5)** Test coverage reports give visibility into how much of our code base is covered by our test cases.
>
> **[0:12](https://www.linkedin.com/learning/vue-js-testing-and-debugging/analyzing-test-coverage?u=76281980&t=12)** So let's see how we can use the test coverage tool in Jest to visualize how much of our code is currently covered by tests.
>
> **[0:20](https://www.linkedin.com/learning/vue-js-testing-and-debugging/analyzing-test-coverage?u=76281980&t=20)** To follow along with this video, you need the 02_07b branch of the project.
>
> **[0:25](https://www.linkedin.com/learning/vue-js-testing-and-debugging/analyzing-test-coverage?u=76281980&t=25)** So make sure you are on the 02_07b branch.
>
> **[0:29](https://www.linkedin.com/learning/vue-js-testing-and-debugging/analyzing-test-coverage?u=76281980&t=29)** Adding test coverage in Jest is pretty straightforward, go into the package.json file and simply add the --coverage flag to the Jest command in the test clip content in the package.json file.
>
> **[0:42](https://www.linkedin.com/learning/vue-js-testing-and-debugging/analyzing-test-coverage?u=76281980&t=42)** With this added, a test coverage report will be generated anytime we run the test script.
>
> **[0:47](https://www.linkedin.com/learning/vue-js-testing-and-debugging/analyzing-test-coverage?u=76281980&t=47)** Let's go ahead and test this out on the command line, but first save the file.
>
> **[0:53](https://www.linkedin.com/learning/vue-js-testing-and-debugging/analyzing-test-coverage?u=76281980&t=53)** To generate a test report, simply run the test command to run all the tests in the application.
>
> **[1:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/analyzing-test-coverage?u=76281980&t=60)** All our tests are currently passing, but can you spot the table below the tests?
>
> **[1:05](https://www.linkedin.com/learning/vue-js-testing-and-debugging/analyzing-test-coverage?u=76281980&t=65)** This table indicates that only the utilities module is covered by tests.
>
> **[1:11](https://www.linkedin.com/learning/vue-js-testing-and-debugging/analyzing-test-coverage?u=76281980&t=71)** This is quite obvious as the utility module is the only module being used in all our tests.
>
> **[1:17](https://www.linkedin.com/learning/vue-js-testing-and-debugging/analyzing-test-coverage?u=76281980&t=77)** This means that every other module in the project is currently not being tested.
>
> **[1:21](https://www.linkedin.com/learning/vue-js-testing-and-debugging/analyzing-test-coverage?u=76281980&t=81)** The table also shows that all the functions in the utilities module are currently being tested.
>
> **[1:26](https://www.linkedin.com/learning/vue-js-testing-and-debugging/analyzing-test-coverage?u=76281980&t=86)** This is indicated by the hundred percent score under the functions column.
>
> **[1:31](https://www.linkedin.com/learning/vue-js-testing-and-debugging/analyzing-test-coverage?u=76281980&t=91)** One side effect of running code coverage is that the tool also generates an HTML test report.
>
> **[1:36](https://www.linkedin.com/learning/vue-js-testing-and-debugging/analyzing-test-coverage?u=76281980&t=96)** This page gives us a more detailed and interactive report.
>
> **[1:40](https://www.linkedin.com/learning/vue-js-testing-and-debugging/analyzing-test-coverage?u=76281980&t=100)** Look at the coverage folder now present within the project.
>
> **[1:44](https://www.linkedin.com/learning/vue-js-testing-and-debugging/analyzing-test-coverage?u=76281980&t=104)** This is an auto-generated folder for the test report.
>
> **[1:48](https://www.linkedin.com/learning/vue-js-testing-and-debugging/analyzing-test-coverage?u=76281980&t=108)** The report file is an index.HTML file inside the lcov-report folder.
>
> **[1:55](https://www.linkedin.com/learning/vue-js-testing-and-debugging/analyzing-test-coverage?u=76281980&t=115)** The report file can be opened in the browser by running the open command to target the report's file.
>
> **[2:01](https://www.linkedin.com/learning/vue-js-testing-and-debugging/analyzing-test-coverage?u=76281980&t=121)** You can also open the file manually by double-clicking on the file.
>
> **[2:05](https://www.linkedin.com/learning/vue-js-testing-and-debugging/analyzing-test-coverage?u=76281980&t=125)** The test coverage report in the browser is more user-friendly and uses colors to improve the experience.
>
> **[2:10](https://www.linkedin.com/learning/vue-js-testing-and-debugging/analyzing-test-coverage?u=76281980&t=130)** The modules being tested are listed with your test coverage results.
>
> **[2:14](https://www.linkedin.com/learning/vue-js-testing-and-debugging/analyzing-test-coverage?u=76281980&t=134)** You can click on a module to view the parts that are being tested and the parts not tested.
>
> **[2:19](https://www.linkedin.com/learning/vue-js-testing-and-debugging/analyzing-test-coverage?u=76281980&t=139)** Currently, our utilities module is fully tested.
>
> **[2:22](https://www.linkedin.com/learning/vue-js-testing-and-debugging/analyzing-test-coverage?u=76281980&t=142)** Let's introduce a dummy module into the project and just include it in any of our test file, but not test any part of it.
>
> **[2:30](https://www.linkedin.com/learning/vue-js-testing-and-debugging/analyzing-test-coverage?u=76281980&t=150)** Create a new testModule.js file inside the source folder.
>
> **[2:35](https://www.linkedin.com/learning/vue-js-testing-and-debugging/analyzing-test-coverage?u=76281980&t=155)** Inside this module add a simple function that prints a string and export it from the module.
>
> **[2:50](https://www.linkedin.com/learning/vue-js-testing-and-debugging/analyzing-test-coverage?u=76281980&t=170)** Now open the async.js test file and import the print something function from the dummy module.
>
> **[3:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/analyzing-test-coverage?u=76281980&t=180)** With the new module in place and imported into one of our test files, let's now generate an updated test coverage by running the test script once again.
>
> **[3:08](https://www.linkedin.com/learning/vue-js-testing-and-debugging/analyzing-test-coverage?u=76281980&t=188)** When the test is complete, open the coverage file once again in the browser.
>
> **[3:14](https://www.linkedin.com/learning/vue-js-testing-and-debugging/analyzing-test-coverage?u=76281980&t=194)** This time we see two files and the report indicating that no function in our dummy module is being tested.
>
> **[3:21](https://www.linkedin.com/learning/vue-js-testing-and-debugging/analyzing-test-coverage?u=76281980&t=201)** Click on the test module to have a more detailed view.
>
> **[3:24](https://www.linkedin.com/learning/vue-js-testing-and-debugging/analyzing-test-coverage?u=76281980&t=204)** Here we see the print something function and the statement in it, colored red.
>
> **[3:28](https://www.linkedin.com/learning/vue-js-testing-and-debugging/analyzing-test-coverage?u=76281980&t=208)** This indicates that they are currently not being covered in our project tests.
>
> **[3:33](https://www.linkedin.com/learning/vue-js-testing-and-debugging/analyzing-test-coverage?u=76281980&t=213)** Manually searching true code to find what to test or guessing how much our code has been tested is counterproductive and inaccurate.
>
> **[3:40](https://www.linkedin.com/learning/vue-js-testing-and-debugging/analyzing-test-coverage?u=76281980&t=220)** Test coverage helps us avoid these assumptions by giving us factual data about the state of our tests.

> [!info]- Semantic Content
>
> **Code Keywords:** module (14), let (4), function (4), async (1)
> **File Paths:** package.json (2), index.html (1), testmodule.js (1), async.js (1)
> **UI Navigation:** open the (3), click on (2)
> **Definitions:** is an  (2), means that (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** html (2)
> **Code Identifiers:** testmodule (1)
> **Tools:** command line (1)


### 4. 3. Testing Vue Components

#### Mounting components using render
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=0)** - [Instructor] Now that we have a good understanding of testing JavaScript data types, it's time to start testing Vue JS components.
>
> **[0:07](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=7)** Vue JS component needs to be mounted into a DOM environment for it to be used.
>
> **[0:12](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=12)** Because of this, we need tools that will help simulate a DOM environment in our test environment and mount our Vue JS components on it.
>
> **[0:20](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=20)** To follow along with this video, you need the 03_01b branch to follow the project.
>
> **[0:26](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=26)** So make sure you're on the 03_01b branch.
>
> **[0:31](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=31)** Jest is a very extendable framework.
>
> **[0:33](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=33)** And in this video we'll be installing a couple of packages that are compatible with Jest for testing Vue JS components.
>
> **[0:39](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=39)** The first set of packages we would install is the 'vue test utils' package and the 'vue jest' package.
>
> **[0:45](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=45)** The 'vue test utils' library is the official unit testing utility library for Vue JS.
>
> **[0:50](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=50)** It provides all the low-level APIs for mounting and working with Vue JS components.
>
> **[0:55](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=55)** The 'vue jest' library on the other hand, is a transformer for the Vue files inside the Jest environment.
>
> **[1:01](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=61)** Simply put, it allows us to work with Vue JS components in the Jest environment.
>
> **[1:06](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=66)** Install these two libraries at development dependencies using NPM.
>
> **[1:14](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=74)** Once this installation is done, we need to add some configurations to our project.
>
> **[1:18](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=78)** Back in our editor, we need to add some configurations for Jest to recognize Vue JS files with a '.vue' extension and transform them using the vue jest package we just installed.
>
> **[1:28](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=88)** Start by creating a 'jest.config' file at the root of the project.
>
> **[1:34](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=94)** This is the file that would contain all our custom configurations for Jest.
>
> **[1:42](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=102)** First, we include the model file extensions property.
>
> **[1:47](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=107)** Then, we'll include 'js', 'json' and 'vue' to tell Jest to process '.vue' files.
>
> **[1:55](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=115)** Next, we include the transform property and instruct it to transform our vue files using 'vue-jest'.
>
> **[2:08](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=128)** Lastly, we set the test environment property to 'jsdom'.
>
> **[2:15](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=135)** This is often the default with jest, but I would advise you to set it explicitly.
>
> **[2:20](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=140)** Now that we have a Jest configuration file, the next step is to set up our test to use Babel.
>
> **[2:25](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=145)** Babel transpiler enables us use ESX syntax inside our test files.
>
> **[2:31](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=151)** The required Babel packages to be installed are 'babel-jest', 'babel-core' and 'babel-preset-env' Run the following command to install all these packages at development dependencies.
>
> **[2:45](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=165)** Now, don't worry about memorizing all this.
>
> **[2:48](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=168)** The commands are available on the 'vue test utils' online documentation.
>
> **[2:53](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=173)** You now have all that is needed to use the ESX syntax and import '.vue' files in your tests.
>
> **[2:59](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=179)** Lastly, we'll install the vue testing library.
>
> **[3:04](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=184)** At this point, you can actually start testing your application using the 'vue test utils' library, but why settle for good when there is better.
>
> **[3:12](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=192)** The vue testing library package is built on top of the vue test utils library and makes the process of testing vue components a breeze.
>
> **[3:19](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=199)** The philosophy behind the library is that, the more tests resemble the way software is used, the more confidence they provide.
>
> **[3:26](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=206)** To install this library, run the following command.
>
> **[3:32](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=212)** With all packages in place and fully configured, let's mount a vue component in our test.
>
> **[3:38](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=218)** Create a new file mount.js inside the tests folder.
>
> **[3:45](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=225)** Inside the file, import the render method from the vue testing library.
>
> **[3:55](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=235)** In this test file, we'll be mounting the 'home.vue' component, which is the login page for our application.
>
> **[4:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=240)** The 'home.vue' component is located inside the views folder.
>
> **[4:04](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=244)** Let's go ahead and import this component inside the 'mount.js' test file.
>
> **[4:12](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=252)** Next, let's write a test case for this test.
>
> **[4:18](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=258)** To mount our component into the virtual DOM that will be used by Jest, we use the render method.
>
> **[4:24](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=264)** The render method gives us a good number of utilities to work with the components once it's mounted.
>
> **[4:29](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=269)** One of those utilities is the 'getByText' method, which we'll get to use later on.
>
> **[4:39](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=279)** Let's go ahead and run this test, but first, ensure that you have saved the file.
>
> **[4:43](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=283)** If our component is not mounted, the test will throw an error.
>
> **[4:47](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=287)** Run the 'mount.js' test file by running the test command on it.
>
> **[4:52](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=292)** As we can see our test passes, indicating that we have successfully mounted a component to test.
>
> **[4:57](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=297)** This might not seem like much at the moment, but in the coming videos, we get to play around the component by testing its content and behaviors.
>
> **[5:04](https://www.linkedin.com/learning/vue-js-testing-and-debugging/mounting-components-using-render?u=76281980&t=304)** See you in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this, (1), this. (1), throw (1)
> **Env Vars:** dom (3), esx (2), npm (1)
> **Prerequisites:** install (5), set up (1)
> **File Paths:** mount.js (3), jest.config (1)
> **CLI Commands:** make (1), npm (1)
> **Definitions:** is a  (2)
> **Code Identifiers:** getbytext (1)
> **Cross-References:** in the next (1)

#### Accessing elements within a component
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-testing-and-debugging/accessing-elements-within-a-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/accessing-elements-within-a-component?u=76281980&t=0)** - [Instructor] One of the most important tests to conduct on a UI component is to check that it contains the right elements.
>
> **[0:07](https://www.linkedin.com/learning/vue-js-testing-and-debugging/accessing-elements-within-a-component?u=76281980&t=7)** These elements could be text nodes, buttons, form elements and so on.
>
> **[0:12](https://www.linkedin.com/learning/vue-js-testing-and-debugging/accessing-elements-within-a-component?u=76281980&t=12)** The login page you're currently looking at is the home.view component we mounted in a previous video.
>
> **[0:19](https://www.linkedin.com/learning/vue-js-testing-and-debugging/accessing-elements-within-a-component?u=76281980&t=19)** This page contains a background image of a couple on the left-hand side, the logo of the Explore California Toll Services company, a login form with a title and two fields to enter the login credentials and finally the button to submit the login form.
>
> **[0:33](https://www.linkedin.com/learning/vue-js-testing-and-debugging/accessing-elements-within-a-component?u=76281980&t=33)** Using Jest, we can test the components to check if it contains any of these elements.
>
> **[0:38](https://www.linkedin.com/learning/vue-js-testing-and-debugging/accessing-elements-within-a-component?u=76281980&t=38)** But how is this type of test useful?
>
> **[0:41](https://www.linkedin.com/learning/vue-js-testing-and-debugging/accessing-elements-within-a-component?u=76281980&t=41)** Imagine a team member mistakenly or maliciously deletes the password field and goes ahead to push the code to the team's repository.
>
> **[0:48](https://www.linkedin.com/learning/vue-js-testing-and-debugging/accessing-elements-within-a-component?u=76281980&t=48)** The test that checks for the presence of this field can easily detect this omission and stop the code from corrupting the application in production.
>
> **[0:56](https://www.linkedin.com/learning/vue-js-testing-and-debugging/accessing-elements-within-a-component?u=76281980&t=56)** In this exercise, we'll be testing for the presence of the form title.
>
> **[1:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/accessing-elements-within-a-component?u=76281980&t=60)** The title reads Login to your account.
>
> **[1:03](https://www.linkedin.com/learning/vue-js-testing-and-debugging/accessing-elements-within-a-component?u=76281980&t=63)** This test will fail if the title does not exist and pass if it does.
>
> **[1:07](https://www.linkedin.com/learning/vue-js-testing-and-debugging/accessing-elements-within-a-component?u=76281980&t=67)** Let's head back to our editor and write the test.
>
> **[1:10](https://www.linkedin.com/learning/vue-js-testing-and-debugging/accessing-elements-within-a-component?u=76281980&t=70)** To follow along with this video, you need the 03_02b branch of the project.
>
> **[1:15](https://www.linkedin.com/learning/vue-js-testing-and-debugging/accessing-elements-within-a-component?u=76281980&t=75)** So make sure you are on the 02_02b branch.
>
> **[1:19](https://www.linkedin.com/learning/vue-js-testing-and-debugging/accessing-elements-within-a-component?u=76281980&t=79)** Inside the mount.js file, we have extracted the function getByText from the rendered instance of the home.view component.
>
> **[1:27](https://www.linkedin.com/learning/vue-js-testing-and-debugging/accessing-elements-within-a-component?u=76281980&t=87)** The getByText method allows us to assess an element based on an exact match of its text component.
>
> **[1:33](https://www.linkedin.com/learning/vue-js-testing-and-debugging/accessing-elements-within-a-component?u=76281980&t=93)** This function will throw an error causing the test to fail if the search text cannot be found.
>
> **[1:39](https://www.linkedin.com/learning/vue-js-testing-and-debugging/accessing-elements-within-a-component?u=76281980&t=99)** Let's go ahead and use this function to search for the title of the login form.
>
> **[1:44](https://www.linkedin.com/learning/vue-js-testing-and-debugging/accessing-elements-within-a-component?u=76281980&t=104)** Good.
>
> **[1:45](https://www.linkedin.com/learning/vue-js-testing-and-debugging/accessing-elements-within-a-component?u=76281980&t=105)** Now save the file and let's run the test file.
>
> **[1:51](https://www.linkedin.com/learning/vue-js-testing-and-debugging/accessing-elements-within-a-component?u=76281980&t=111)** Because our component contains the search text in the login form title, our tests pass.
>
> **[1:56](https://www.linkedin.com/learning/vue-js-testing-and-debugging/accessing-elements-within-a-component?u=76281980&t=116)** Now let's take a look at the case where the text is incomplete.
>
> **[1:59](https://www.linkedin.com/learning/vue-js-testing-and-debugging/accessing-elements-within-a-component?u=76281980&t=119)** Back in the editor, let's remove the word account from the search string.
>
> **[2:04](https://www.linkedin.com/learning/vue-js-testing-and-debugging/accessing-elements-within-a-component?u=76281980&t=124)** Now save the file and run the test once again.
>
> **[2:08](https://www.linkedin.com/learning/vue-js-testing-and-debugging/accessing-elements-within-a-component?u=76281980&t=128)** This time, we'll get an error that shows that an exact match of the search text cannot be found.
>
> **[2:14](https://www.linkedin.com/learning/vue-js-testing-and-debugging/accessing-elements-within-a-component?u=76281980&t=134)** Jest also prints out the content of the component on the screen for confirmation.
>
> **[2:19](https://www.linkedin.com/learning/vue-js-testing-and-debugging/accessing-elements-within-a-component?u=76281980&t=139)** It might seem a little strict that Jest searches for an exact match, but when it comes to testing being strict is highly encouraged.
>
> **[2:27](https://www.linkedin.com/learning/vue-js-testing-and-debugging/accessing-elements-within-a-component?u=76281980&t=147)** Your tests are like your code gods and you must ensure that you're not taking anything for granted.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (3), pass (2), throw (1), match, (1)
> **Code Identifiers:** getbytext (2)
> **File Paths:** mount.js (1)
> **CLI Commands:** make (1)
> **Cross-References:** previous video (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Firing events on components
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-testing-and-debugging/firing-events-on-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/firing-events-on-components?u=76281980&t=0)** - [Instructor] Before we begin, make sure you're on the 03_03b branch of the project to follow along with this video.
>
> **[0:09](https://www.linkedin.com/learning/vue-js-testing-and-debugging/firing-events-on-components?u=76281980&t=9)** Accessing elements within component helps us test their existence within the components.
>
> **[0:14](https://www.linkedin.com/learning/vue-js-testing-and-debugging/firing-events-on-components?u=76281980&t=14)** This is good and covers a lot of testing scenarios, but what if we want to test behavior?
>
> **[0:20](https://www.linkedin.com/learning/vue-js-testing-and-debugging/firing-events-on-components?u=76281980&t=20)** The Explore California login form requires an email and password.
>
> **[0:25](https://www.linkedin.com/learning/vue-js-testing-and-debugging/firing-events-on-components?u=76281980&t=25)** When we type this in, I click the login button, we are navigated to the profile page.
>
> **[0:31](https://www.linkedin.com/learning/vue-js-testing-and-debugging/firing-events-on-components?u=76281980&t=31)** But what if we leave the fields blank and try to log in?
>
> **[0:34](https://www.linkedin.com/learning/vue-js-testing-and-debugging/firing-events-on-components?u=76281980&t=34)** This time, an error message is displayed instructing us to enter the login credentials.
>
> **[0:39](https://www.linkedin.com/learning/vue-js-testing-and-debugging/firing-events-on-components?u=76281980&t=39)** This behavior is one that can be tested to be sure that users are not allowed to log in without entering their credentials.
>
> **[0:46](https://www.linkedin.com/learning/vue-js-testing-and-debugging/firing-events-on-components?u=76281980&t=46)** So let's go into our editor and write the test.
>
> **[0:48](https://www.linkedin.com/learning/vue-js-testing-and-debugging/firing-events-on-components?u=76281980&t=48)** In order to test the login error functionality, we need to access the login button and trigger a click event on it.
>
> **[0:55](https://www.linkedin.com/learning/vue-js-testing-and-debugging/firing-events-on-components?u=76281980&t=55)** To achieve this, we first need to import the fire event object from the view testing library.
>
> **[1:02](https://www.linkedin.com/learning/vue-js-testing-and-debugging/firing-events-on-components?u=76281980&t=62)** The fire event object helps us simulate user events like click, mouse over, mouse in, and so on in our test environment.
>
> **[1:10](https://www.linkedin.com/learning/vue-js-testing-and-debugging/firing-events-on-components?u=76281980&t=70)** For this exercise, we'll be using the click method of the fire event object.
>
> **[1:15](https://www.linkedin.com/learning/vue-js-testing-and-debugging/firing-events-on-components?u=76281980&t=75)** Events fired on the elements using the fire event methods are asynchronous processes and return a promise.
>
> **[1:21](https://www.linkedin.com/learning/vue-js-testing-and-debugging/firing-events-on-components?u=76281980&t=81)** Thus, we need to add the async keyword to our tests callback function.
>
> **[1:27](https://www.linkedin.com/learning/vue-js-testing-and-debugging/firing-events-on-components?u=76281980&t=87)** Next, we get to reference to our login button using the get by text method to search for the button's label.
>
> **[1:35](https://www.linkedin.com/learning/vue-js-testing-and-debugging/firing-events-on-components?u=76281980&t=95)** Now let's fire the click event on the login button using the click method of the fire event object.
>
> **[1:42](https://www.linkedin.com/learning/vue-js-testing-and-debugging/firing-events-on-components?u=76281980&t=102)** Because we did not fill in any of the login credentials, the error message should be displayed after firing the click event on the button.
>
> **[1:50](https://www.linkedin.com/learning/vue-js-testing-and-debugging/firing-events-on-components?u=76281980&t=110)** Let's confirm that we have the message on the screen by using the get by text method to search for the error message.
>
> **[1:58](https://www.linkedin.com/learning/vue-js-testing-and-debugging/firing-events-on-components?u=76281980&t=118)** Good, we can now save the file and run our test.
>
> **[2:02](https://www.linkedin.com/learning/vue-js-testing-and-debugging/firing-events-on-components?u=76281980&t=122)** Everything goes fine and our tests pass as expected.
>
> **[2:06](https://www.linkedin.com/learning/vue-js-testing-and-debugging/firing-events-on-components?u=76281980&t=126)** However, the practice of testing is all about finding bugs in our application.
>
> **[2:10](https://www.linkedin.com/learning/vue-js-testing-and-debugging/firing-events-on-components?u=76281980&t=130)** So let's see what happens if we do not fire the click event but try to search for the error message.
>
> **[2:15](https://www.linkedin.com/learning/vue-js-testing-and-debugging/firing-events-on-components?u=76281980&t=135)** Let's comment out the line that fires the event and see what happens when we try to search for the error message without clicking the button.
>
> **[2:24](https://www.linkedin.com/learning/vue-js-testing-and-debugging/firing-events-on-components?u=76281980&t=144)** Save the file and add back to the command line to run the test.
>
> **[2:30](https://www.linkedin.com/learning/vue-js-testing-and-debugging/firing-events-on-components?u=76281980&t=150)** Just now, we post that the login error message cannot be found, which is good, because the component is currently not in the state that causes the error to show up.
>
> **[2:39](https://www.linkedin.com/learning/vue-js-testing-and-debugging/firing-events-on-components?u=76281980&t=159)** Understanding that testing is the practice of adding value to an application by finding our moving bugs helps us better understand the purpose of the exercise.
>
> **[2:47](https://www.linkedin.com/learning/vue-js-testing-and-debugging/firing-events-on-components?u=76281980&t=167)** This enables us to write more tests that try to break the system to expose bugs.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this, (1), async (1), function (1), pass (1)
> **CLI Commands:** make (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)


### 5. 4. Debugging with Vue and Chrome Developer tools

#### Debugging errors using Chrome DevTools
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=0)** - [Speaker] To follow along with this video, make sure you're on the 04_01b branch of the project.
>
> **[0:08](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=8)** Before diving into any fancy set up for debugging an application, it is a good practice to first see what you can get out of the tools you currently have.
>
> **[0:16](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=16)** Most modern browsers come bundled with developer tools that can be very useful in tracking down common errors in an application.
>
> **[0:23](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=23)** Unlike the old days of fireball on Firefox browsers, modern browser tools are now enhanced with debugging capabilities almost equal and sometimes more elaborate than what you get for most IDs.
>
> **[0:35](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=35)** So far in this course, we have been making use of the Chrome browser.
>
> **[0:39](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=39)** The Chrome browser currently accounts for over 60% of global browser usage according to current usage statistics.
>
> **[0:47](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=47)** Over time, Chrome has also received significant updates to its developer tool.
>
> **[0:52](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=52)** And in my opinion, it has the best browser developer tools in today's market.
>
> **[0:57](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=57)** We currently have a bug in our Explore California application, but I won't tell you what it is.
>
> **[1:03](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=63)** Let's try to login to the application to find out.
>
> **[1:06](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=66)** Let's enter our email and password.
>
> **[1:09](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=69)** Let's now click the login button to enter into the application.
>
> **[1:12](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=72)** Notice anything?
>
> **[1:13](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=73)** Yeah, the absence of action here indicates that there is an error.
>
> **[1:18](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=78)** It is expected that we should be logged in and be directed to the dashboard, but nothing happened.
>
> **[1:23](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=83)** Why is that?
>
> **[1:25](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=85)** When you trigger an action and you don't get the expected response and not even an error message to give you a hint as to what is happening, it's time to pop open the developer tools to check what might have gone wrong under the hood.
>
> **[1:38](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=98)** Open the developer tools and first check the console to find out if there are any errors present.
>
> **[1:44](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=104)** And as suspected, we have an error, if we zoom closely into the error message, we see a statement that says "Cannot read property push of undefined."
>
> **[1:55](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=115)** The statement error in V-on handler indicates that this error is taking place on an event handler.
>
> **[2:03](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=123)** Scroll down a little and we see the error statement once again.
>
> **[2:08](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=128)** Just below it is more information about where the error took place.
>
> **[2:13](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=133)** Just below it, is more information about where the error took place.
>
> **[2:18](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=138)** VueComponent is a generic reference to the component in which this error is taking place.
>
> **[2:23](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=143)** And we can see that it's on the login property.
>
> **[2:27](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=147)** This login property is contained in the Home.VueComponent as shown in the Chrome developer tools console.
>
> **[2:33](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=153)** One of the amazing features of the error reporting in Chrome's console is that you can simply click on the file and be taken directly to where in the code the error is coming from.
>
> **[2:42](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=162)** Let's click Home.vue in the console to look at the error location.
>
> **[2:45](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=165)** If you notice there is a yellow flash on the error line, it disappeared quickly, so you may not have noticed.
>
> **[2:52](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=172)** Let's go back to the console and click the file once again to observe the flash.
>
> **[2:57](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=177)** The flash highlights line 74, this is the line where the router was called to trigger the navigation to the profile page.
>
> **[3:04](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=184)** Going back to the console, again, now that we know that it takes place on line 74, the error reads "Cannot read property push of undefined."
>
> **[3:15](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=195)** This means we are calling the push method on a variable that is undefined.
>
> **[3:19](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=199)** Let's return to the error line to check that.
>
> **[3:22](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=202)** The undefined variable is definitely the dollar router object as this is the variable on which we're calling the push method.
>
> **[3:29](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=209)** Looking closely on the object, can you notice the error?
>
> **[3:32](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=212)** You can pause the video to check, do you see it now?
>
> **[3:36](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=216)** Yeah, the router object was misspelled.
>
> **[3:39](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=219)** We have a missing O in there.
>
> **[3:43](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=223)** Let's fix this error by correcting the spelling and saving the file.
>
> **[3:47](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=227)** Back in the browser, let's refresh the page to ensure that our changes have kicked in.
>
> **[3:52](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=232)** Now login once again to see if the error is gone.
>
> **[3:55](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=235)** Awesome, now we are navigated to the profile page after providing the credentials and clicking the login button.
>
> **[4:01](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-errors-using-chrome-devtools?u=76281980&t=241)** Looking at the console, there are no more errors printed, indicating that our bug is now fixed.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), from. (1)
> **UI Navigation:** open the (2), scroll down (1), click on (1)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** find (2), make (1)
> **Cross-References:** go back to (1)
> **Tools:** firefox (1)
> **Best Practices:** good practice (1)
> **Prerequisites:** set up (1)

#### Setting up Vue Devtools
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-vue-devtools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-vue-devtools?u=76281980&t=0)** - [Instructor] Debugging Vue.js apps with browser Developer tools is great.
>
> **[0:03](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-vue-devtools?u=76281980&t=3)** But if you are looking for a solution custom-made for troubleshooting Vue.js applications, the Vue Developer tools is the way to go.
>
> **[0:10](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-vue-devtools?u=76281980&t=10)** The Vue Developer tools was created by the Vue.js team to improve the developer experience building Vue.js applications.
>
> **[0:16](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-vue-devtools?u=76281980&t=16)** This tool exists as a browser plugin.
>
> **[0:18](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-vue-devtools?u=76281980&t=18)** And as at the time of this recording, only supports the Google Chrome and Firefox browsers.
>
> **[0:23](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-vue-devtools?u=76281980&t=23)** To get the tool installed on your Chrome or Firefox, simply google Vue Developer tools.
>
> **[0:29](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-vue-devtools?u=76281980&t=29)** You can append the name of your browser for a more specific search.
>
> **[0:34](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-vue-devtools?u=76281980&t=34)** The first link is what we're looking for.
>
> **[0:36](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-vue-devtools?u=76281980&t=36)** This is a link to the Chrome store, where we can view details about the plugin and install it.
>
> **[0:41](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-vue-devtools?u=76281980&t=41)** Here on the Vue Developer tools, Chrome web store page, we can see details about the plugin including the current number of downloads, which is currently at a whopping 1 million plus.
>
> **[0:51](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-vue-devtools?u=76281980&t=51)** There are also link to check reviews and seek support.
>
> **[0:55](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-vue-devtools?u=76281980&t=55)** To add the extension to Chrome, click on the Add to Chrome button.
>
> **[0:59](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-vue-devtools?u=76281980&t=59)** This will check for compatibility with your browser version.
>
> **[1:02](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-vue-devtools?u=76281980&t=62)** We then get a prompt to confirm the installation by clicking Add extension.
>
> **[1:09](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-vue-devtools?u=76281980&t=69)** Once the extension is installed, you get a success message from a pop-up notification box.
>
> **[1:15](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-vue-devtools?u=76281980&t=75)** To see the Vue Developer tools pop-up in Chrome's Dev tools, You will need to go to a page where you have a Vue site open.
>
> **[1:22](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-vue-devtools?u=76281980&t=82)** Now go ahead and open the Chrome Developer tools to see if you have a Vue tab.
>
> **[1:29](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-vue-devtools?u=76281980&t=89)** As you can see, we now have a tab for Vue.
>
> **[1:32](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-vue-devtools?u=76281980&t=92)** This might not be visible immediately, so refresh the page to bring it up.
>
> **[1:36](https://www.linkedin.com/learning/vue-js-testing-and-debugging/setting-up-vue-devtools?u=76281980&t=96)** We now have the Vue.js Developer tools installed, and we can start using it in the next video.

> [!info]- Semantic Content
>
> **File Paths:** vue.js (5)
> **UI Navigation:** click on (1), go to (1), open the (1)
> **Tools:** firefox (2)
> **Code Keywords:** for. (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Debugging with Vue Devtools
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=0)** - [Instructor] To follow along with this video, make sure you're on the 04_03b branch of the project.
>
> **[0:07](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=7)** Now that we have the Vue developer tools installed, let's walk through the tool, to understand how we can use it for debugging our Vue.js applications.
>
> **[0:14](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=14)** In the Chrome developer tools, click on the Vue tools tab.
>
> **[0:18](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=18)** By default, the components section of the tool is selected.
>
> **[0:23](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=23)** This is the section where a tree view of the components currently on the loaded page is shown.
>
> **[0:28](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=28)** The root component is default for all pages.
>
> **[0:31](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=31)** And the app component is where our router is located.
>
> **[0:34](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=34)** You can click to expand these components to see the hierarchy of child components within them.
>
> **[0:39](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=39)** For now, we only have a Home.vue component within the app component.
>
> **[0:43](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=43)** This component represents the page currently in view and contains no child components.
>
> **[0:49](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=49)** Clicking on this component will reveal its instance variable on the right-hand side.
>
> **[0:53](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=53)** This variable can be accessed on the disk key vault within the component.
>
> **[0:57](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=57)** The $route variable contains properties relating to the current route.
>
> **[1:01](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=61)** These include the route path, route name, query parameters and many other useful properties.
>
> **[1:09](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=69)** You also have information about the component's data properties, and you can inspect them as they change in real-time.
>
> **[1:16](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=76)** For example, observe what happens to the show arrow variable.
>
> **[1:19](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=79)** When we click on the login button without entering any credentials.
>
> **[1:23](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=83)** As you have observed, the show arrow variable changes from false to true.
>
> **[1:28](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=88)** This is the value that causes the error message to be displayed.
>
> **[1:31](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=91)** The Vue developer tool shows us how this piece of data updates in real-time.
>
> **[1:35](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=95)** This is very useful in debugging the current state of the component.
>
> **[1:39](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=99)** You can also inspect the actual Dom elements contained in the components currently selected and show that the Home.vue component is selected.
>
> **[1:47](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=107)** Then click on the inspect DOM icon on the right.
>
> **[1:51](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=111)** This opens the elements tab in Chrome developer tools, and immediately selects the container element for the component.
>
> **[1:57](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=117)** You can expand this to view and walk through the inner HTML.
>
> **[2:02](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=122)** This allows you to use the built-in browser DevTools to inspect the actual markup.
>
> **[2:07](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=127)** Back into DevTools.
>
> **[2:08](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=128)** Notice the highlighted components contains a statement.
>
> **[2:11](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=131)** Home component equals $vm0.
>
> **[2:15](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=135)** The $vm variable is a reference to the Home.vue component.
>
> **[2:19](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=139)** Also one useful thing about this reference is that you can simply type it in your console and interact with the component.
>
> **[2:25](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=145)** Let's type $vm0, then follow it with a dot.
>
> **[2:29](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=149)** This immediately gives us a list of all the properties available on the component instance.
>
> **[2:34](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=154)** We see properties such as el, which is a reference to the HTML container element for the component.
>
> **[2:41](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=161)** From the preview shown below the statement.
>
> **[2:43](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=163)** You can see a div with a class name container.
>
> **[2:47](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=167)** The $route property we saw earlier in the Vue DevTools is also available on the instance here in the console.
>
> **[2:53](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=173)** When you hit enter, you get the same route properties seen earlier, you can also reference data properties directly on the $vm0 object.
>
> **[3:02](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=182)** For example, the show arrow variable.
>
> **[3:04](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=184)** This can help you access the current values of data properties on the component directly in the home console.
>
> **[3:11](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=191)** The Vue.js developer tools also has other sections for inspecting your Vue.js application.
>
> **[3:15](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=195)** The Vuex section is used to view, inspect and run true state mutations, taking place in the Vuex door.
>
> **[3:22](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=202)** This tool helps you time travel two-state changes by rolling back mutations and replaying them.
>
> **[3:28](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=208)** There are also sections for monitoring events in the application.
>
> **[3:32](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=212)** Route changes and route history.
>
> **[3:34](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=214)** You also have a settings section where you can configure the theme of the DevTools.
>
> **[3:39](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=219)** Here, you can do things like enable props editing, enable auto loading of Vuex states, and many more.
>
> **[3:47](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=227)** Do note that some of these settings when enabled may impact performance or cause crashes.
>
> **[3:52](https://www.linkedin.com/learning/vue-js-testing-and-debugging/debugging-with-vue-devtools?u=76281980&t=232)** So be careful when using them.

> [!info]- Semantic Content
>
> **File Paths:** vue.js (3)
> **Code Keywords:** let (2), default, (1)
> **Env Vars:** html (2), dom (1)
> **UI Navigation:** click on (3)
> **Analogies:** for example (2), such as (1)
> **Definitions:** is a  (2)
> **Warnings:** note that (1), be careful (1)
> **CLI Commands:** make (1)

#### Tracking and debugging state
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-testing-and-debugging/tracking-and-debugging-state?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/tracking-and-debugging-state?u=76281980&t=0)** - [Instructor] State management is a huge part of front end development in today's world of web development.
>
> **[0:05](https://www.linkedin.com/learning/vue-js-testing-and-debugging/tracking-and-debugging-state?u=76281980&t=5)** The most popular architectures for managing states make use of a central store.
>
> **[0:09](https://www.linkedin.com/learning/vue-js-testing-and-debugging/tracking-and-debugging-state?u=76281980&t=9)** Components subscribe to this store for data and commute mutations to (indistinct), to change data.
>
> **[0:16](https://www.linkedin.com/learning/vue-js-testing-and-debugging/tracking-and-debugging-state?u=76281980&t=16)** Our Explore California application uses Vuex, which also makes use of the central store concept for managing states.
>
> **[0:23](https://www.linkedin.com/learning/vue-js-testing-and-debugging/tracking-and-debugging-state?u=76281980&t=23)** Follow along with this video.
>
> **[0:24](https://www.linkedin.com/learning/vue-js-testing-and-debugging/tracking-and-debugging-state?u=76281980&t=24)** make sure that you are on the 04_04b branch of the project.
>
> **[0:28](https://www.linkedin.com/learning/vue-js-testing-and-debugging/tracking-and-debugging-state?u=76281980&t=28)** When we're logging into the application, the user's data is committed to the store.
>
> **[0:37](https://www.linkedin.com/learning/vue-js-testing-and-debugging/tracking-and-debugging-state?u=76281980&t=37)** The application then navigates to the profile page.
>
> **[0:41](https://www.linkedin.com/learning/vue-js-testing-and-debugging/tracking-and-debugging-state?u=76281980&t=41)** On the profile page, the profile components subscribes to the user data using a computer property.
>
> **[0:46](https://www.linkedin.com/learning/vue-js-testing-and-debugging/tracking-and-debugging-state?u=76281980&t=46)** This piece of data referenced from the store is then used in the page templates to display the user's info.
>
> **[0:53](https://www.linkedin.com/learning/vue-js-testing-and-debugging/tracking-and-debugging-state?u=76281980&t=53)** At this moment, a state bug exists in the app, which we'll use the Vue.js developer tools to inspect.
>
> **[1:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/tracking-and-debugging-state?u=76281980&t=60)** Let's log in to the application to find out what the bug is.
>
> **[1:04](https://www.linkedin.com/learning/vue-js-testing-and-debugging/tracking-and-debugging-state?u=76281980&t=64)** Can you guess what the bug is?
>
> **[1:06](https://www.linkedin.com/learning/vue-js-testing-and-debugging/tracking-and-debugging-state?u=76281980&t=66)** Try pausing the video for a few seconds, if you are yet to figure it out.
>
> **[1:10](https://www.linkedin.com/learning/vue-js-testing-and-debugging/tracking-and-debugging-state?u=76281980&t=70)** Yup. The user data is not available on this page.
>
> **[1:13](https://www.linkedin.com/learning/vue-js-testing-and-debugging/tracking-and-debugging-state?u=76281980&t=73)** So what might be causing this?
>
> **[1:15](https://www.linkedin.com/learning/vue-js-testing-and-debugging/tracking-and-debugging-state?u=76281980&t=75)** Is a subscription to the store broken?
>
> **[1:17](https://www.linkedin.com/learning/vue-js-testing-and-debugging/tracking-and-debugging-state?u=76281980&t=77)** Let's move back to the login page and pull up the view there too.
>
> **[1:20](https://www.linkedin.com/learning/vue-js-testing-and-debugging/tracking-and-debugging-state?u=76281980&t=80)** Switch to the Vuex section so that we can inspect the mutations.
>
> **[1:25](https://www.linkedin.com/learning/vue-js-testing-and-debugging/tracking-and-debugging-state?u=76281980&t=85)** Which you'll see the set user mutation called in here when we log in.
>
> **[1:29](https://www.linkedin.com/learning/vue-js-testing-and-debugging/tracking-and-debugging-state?u=76281980&t=89)** Let's log in once again.
>
> **[1:36](https://www.linkedin.com/learning/vue-js-testing-and-debugging/tracking-and-debugging-state?u=76281980&t=96)** Okay, wait a second.
>
> **[1:38](https://www.linkedin.com/learning/vue-js-testing-and-debugging/tracking-and-debugging-state?u=76281980&t=98)** No mutation is being recorded to the Vue.js dev tools.
>
> **[1:42](https://www.linkedin.com/learning/vue-js-testing-and-debugging/tracking-and-debugging-state?u=76281980&t=102)** This shows that our set user mutation, which commits the user info to the store, is not being called, but a call is right there in our code.
>
> **[1:51](https://www.linkedin.com/learning/vue-js-testing-and-debugging/tracking-and-debugging-state?u=76281980&t=111)** What could be the issue?
>
> **[1:53](https://www.linkedin.com/learning/vue-js-testing-and-debugging/tracking-and-debugging-state?u=76281980&t=113)** Back in the log in function in the onboard view component, let's check the line that caused the mutation.
>
> **[1:59](https://www.linkedin.com/learning/vue-js-testing-and-debugging/tracking-and-debugging-state?u=76281980&t=119)** By observing the name of the mutation, it seems we have a typo here.
>
> **[2:02](https://www.linkedin.com/learning/vue-js-testing-and-debugging/tracking-and-debugging-state?u=76281980&t=122)** Let's check the store to confirm Yup.
>
> **[2:10](https://www.linkedin.com/learning/vue-js-testing-and-debugging/tracking-and-debugging-state?u=76281980&t=130)** The mutation to be called is setUser camel case.
>
> **[2:14](https://www.linkedin.com/learning/vue-js-testing-and-debugging/tracking-and-debugging-state?u=76281980&t=134)** What we have in the code is misspelled.
>
> **[2:17](https://www.linkedin.com/learning/vue-js-testing-and-debugging/tracking-and-debugging-state?u=76281980&t=137)** This is a very common issue when working with state mutation.
>
> **[2:20](https://www.linkedin.com/learning/vue-js-testing-and-debugging/tracking-and-debugging-state?u=76281980&t=140)** Let's go back and fix it.
>
> **[2:23](https://www.linkedin.com/learning/vue-js-testing-and-debugging/tracking-and-debugging-state?u=76281980&t=143)** Back in the login function, replaced the misspelled mutation name with the appropriate name.
>
> **[2:28](https://www.linkedin.com/learning/vue-js-testing-and-debugging/tracking-and-debugging-state?u=76281980&t=148)** Now save the file and switch back to the browser to login again.
>
> **[2:33](https://www.linkedin.com/learning/vue-js-testing-and-debugging/tracking-and-debugging-state?u=76281980&t=153)** Here in the browser, make sure that the VueJS developer tools is still open and on the Vuex tab.
>
> **[2:40](https://www.linkedin.com/learning/vue-js-testing-and-debugging/tracking-and-debugging-state?u=76281980&t=160)** Now let's log in again with our credentials.
>
> **[2:47](https://www.linkedin.com/learning/vue-js-testing-and-debugging/tracking-and-debugging-state?u=76281980&t=167)** Our bug appears to be fixed and we have the user data available on the profile page as it should be.
>
> **[2:52](https://www.linkedin.com/learning/vue-js-testing-and-debugging/tracking-and-debugging-state?u=76281980&t=172)** If you look at the Vuex inspector, notice that the mutation is recorded, meaning that our mutation is now being called.
>
> **[3:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/tracking-and-debugging-state?u=76281980&t=180)** The Vuex section of the Vue.js developer tools provides clear visibility into our state changes are taking place.
>
> **[3:06](https://www.linkedin.com/learning/vue-js-testing-and-debugging/tracking-and-debugging-state?u=76281980&t=186)** This in turn helps us to properly debug the changes in our applications.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), switch (2), function (2), case. (1)
> **CLI Commands:** make (3), find (1)
> **File Paths:** vue.js (3)
> **Definitions:** is a  (3)
> **Code Identifiers:** setuser (1)
> **UI Navigation:** switch to (1)
> **Speakers:** - [instructor] (1)

#### Running a performance audit
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980&t=0)** - [Instructor] Performance is a big deal in front-end applications.
>
> **[0:03](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980&t=3)** Written statistics have shown that a delay as low as 10 milliseconds can cost sites to lose traffic.
>
> **[0:09](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980&t=9)** So, how do you measure performance of a vue.js application?
>
> **[0:12](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980&t=12)** How do you track down performance bottlenecks in order to fix them?
>
> **[0:16](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980&t=16)** Fortunately, Chrome Developer Tools compounded with tools for measuring the performance of an application.
>
> **[0:22](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980&t=22)** These tools can help you track down performance bottlenecks and detect areas to improve on.
>
> **[0:28](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980&t=28)** Go ahead and open the Developer Tools in Chrome and switch to the performance tab.
>
> **[0:35](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980&t=35)** We'll be running a performance audit on the login process to analyze its run-time performance.
>
> **[0:40](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980&t=40)** Run-time performance is how your page performs when it is running as opposed to loading.
>
> **[0:46](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980&t=46)** To achieve this, click on the record button which is the gray circle on the performance tab.
>
> **[0:51](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980&t=51)** Ensure that the screenshots option is checked and enter your login credentials to login and click the login button.
>
> **[0:57](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980&t=57)** Once you're logged in, click the stop button on the recorder to stop the process.
>
> **[1:03](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980&t=63)** Woof, that's a whole bunch of information.
>
> **[1:06](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980&t=66)** Don't worry, we'll make sense of the important parts soon.
>
> **[1:09](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980&t=69)** Undock the dev tools to get a better view.
>
> **[1:12](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980&t=72)** One of the main sections is the very first section labeled FPS.
>
> **[1:16](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980&t=76)** FPS stands for frames per second.
>
> **[1:19](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980&t=79)** Here, you want to make sure that your page animations are running at 60 frames per second, and you have very little of these red bars.
>
> **[1:25](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980&t=85)** The red bars indicate that the FPS dropped to a point that might harm user experience.
>
> **[1:30](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980&t=90)** A full red bar running across white lens shows that you need to do some major optimization to avoid page junk.
>
> **[1:37](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980&t=97)** The next section is the CPU section.
>
> **[1:40](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980&t=100)** The easier way to make sense of the colors in the CPU section is to look down at the summary section on the performance panel.
>
> **[1:50](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980&t=110)** The summary section summarizes the activities taking place and the colors also correspond to the CPU section.
>
> **[1:57](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980&t=117)** If the CPU section is full of colors, it means it is maxed out during recording.
>
> **[2:02](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980&t=122)** This is not the case here, so we're good.
>
> **[2:04](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980&t=124)** We have more of CPU idle time.
>
> **[2:07](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980&t=127)** To see the state of your page at any point in time of the recording, hover over the FPS, CPU or net section.
>
> **[2:15](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980&t=135)** Moving left and right helps you replay the recording.
>
> **[2:18](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980&t=138)** This can help you track down the point in the process where there is a performance bottleneck.
>
> **[2:22](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980&t=142)** This process is known as curbing.
>
> **[2:25](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980&t=145)** In the frames section, you can also hover across the bars.
>
> **[2:29](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980&t=149)** With this, you can catch some red squares that indicate points where the frame drops.
>
> **[2:34](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980&t=154)** If your page has a lot of animations, the frames per second reading is something you want to pay close attention to.
>
> **[2:40](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980&t=160)** To further help up with this, Chrome dev tools provides the frames per second meter.
>
> **[2:45](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980&t=165)** This meter helps you visualize the frames metrics in real-time.
>
> **[2:50](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980&t=170)** To pull up the meter, type Command + Shift + P on Mac, or Ctrl + Shift + B on Windows, to open the command menu, then type rendering in the search field and select show frames per second meter.
>
> **[3:05](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980&t=185)** This will pull up the show frames per second meter which shows you the frames per second in real-time as you use the application.
>
> **[3:12](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980&t=192)** Close performance tools also gives you the ability to tweak some settings under which the app runs.
>
> **[3:18](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980&t=198)** Click on the cog icon on the right-hand side of the performance toolbar to open the settings page.
>
> **[3:25](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980&t=205)** Here, you can make the CPU slower by throttling its performance under the CPU options.
>
> **[3:29](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980&t=209)** You can also throttle the network speed in the network options.
>
> **[3:32](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-performance-audit?u=76281980&t=212)** This can help you visualize how your application will perform on less powerful devices and slower networks.

> [!info]- Semantic Content
>
> **Env Vars:** cpu (8), fps (4)
> **UI Navigation:** open the (3), click on (2), switch to (1)
> **CLI Commands:** make (4)
> **Code Keywords:** this, (3), switch (1)
> **Definitions:** is a  (2), stands for (1), known as (1)
> **File Paths:** vue.js (1)
> **Speakers:** - [instructor] (1)


### 6. 5. Functional and Automated Testing

#### Introduction to Cypress
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-testing-and-debugging/introduction-to-cypress?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/introduction-to-cypress?u=76281980&t=0)** - [Instructor] Being able to test an application just the way an end user would use it, is the best form of functional testing.
>
> **[0:06](https://www.linkedin.com/learning/vue-js-testing-and-debugging/introduction-to-cypress?u=76281980&t=6)** This type of testing gives the most useful feedback in terms of user experience.
>
> **[0:12](https://www.linkedin.com/learning/vue-js-testing-and-debugging/introduction-to-cypress?u=76281980&t=12)** However, with these benefits come the laborious task of having to perform these tests manually.
>
> **[0:18](https://www.linkedin.com/learning/vue-js-testing-and-debugging/introduction-to-cypress?u=76281980&t=18)** It can quickly become frustrating to test an application with hundreds of features from end-to-end.
>
> **[0:23](https://www.linkedin.com/learning/vue-js-testing-and-debugging/introduction-to-cypress?u=76281980&t=23)** Don't even get me started on manually performing regression tests, when updates are made to the application.
>
> **[0:29](https://www.linkedin.com/learning/vue-js-testing-and-debugging/introduction-to-cypress?u=76281980&t=29)** In comes Cypress.
>
> **[0:32](https://www.linkedin.com/learning/vue-js-testing-and-debugging/introduction-to-cypress?u=76281980&t=32)** Cypress is an open source testing tool, for automating functional tests for anything that runs in the browser.
>
> **[0:38](https://www.linkedin.com/learning/vue-js-testing-and-debugging/introduction-to-cypress?u=76281980&t=38)** Cypress is easy to set up, fast, and highly reliable.
>
> **[0:42](https://www.linkedin.com/learning/vue-js-testing-and-debugging/introduction-to-cypress?u=76281980&t=42)** If you're like me and you've used Selenium in the past, and I've had to deal with different browser versions and timeout issues, you would find Cypress to be a breath of fresh air.
>
> **[0:51](https://www.linkedin.com/learning/vue-js-testing-and-debugging/introduction-to-cypress?u=76281980&t=51)** Cypress is free and open source, thus you can start using it right away.
>
> **[0:56](https://www.linkedin.com/learning/vue-js-testing-and-debugging/introduction-to-cypress?u=76281980&t=56)** Cypress allows you to switch between different browsers when testing.
>
> **[1:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/introduction-to-cypress?u=76281980&t=60)** It also has the ability to adjust the view port when you want to test your applications responsiveness on different devices.
>
> **[1:07](https://www.linkedin.com/learning/vue-js-testing-and-debugging/introduction-to-cypress?u=76281980&t=67)** Cypress also has a time travel feature, that allows you to rewind and replay tests.
>
> **[1:12](https://www.linkedin.com/learning/vue-js-testing-and-debugging/introduction-to-cypress?u=76281980&t=72)** Cypress is fast, easy to use, and you'll find it as a good replacement for Selenium.
>
> **[1:18](https://www.linkedin.com/learning/vue-js-testing-and-debugging/introduction-to-cypress?u=76281980&t=78)** In the next video, we'll be setting up a simple Cypress test to test the login process of our VJS application.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **Code Keywords:** switch (1)
> **Env Vars:** vjs (1)
> **Cross-References:** in the next (1)
> **Definitions:** is an  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Running a simple end-to-end test with Cypress
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=0)** - [Instructor] Cypress can either be installed as a local dependency in your application or globally on your system.
>
> **[0:06](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=6)** For this exercise, we'll be installing Cypress on the development dependency in our application.
>
> **[0:11](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=11)** To follow along with this video, make sure you're on the 05_02 branch of the project.
>
> **[0:17](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=17)** Cypress is available as an NPM package.
>
> **[0:19](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=19)** Thus, we can install it using NPM.
>
> **[0:25](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=25)** This might take awhile so you might want to come back when installation is done.
>
> **[0:30](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=30)** Once Cypress is installed, you can run it through its binary content in the node modules folder.
>
> **[0:36](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=36)** This can be achieved by running the binary file directly by accessing it in the .bin folder of the node modules folder and calling its open command.
>
> **[0:50](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=50)** Once this command completes, Cypress will add a Cypress folder at the root of the application and a pop up dialog displaying the contents of the newly added folder.
>
> **[0:59](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=59)** This folder contains sample tests that you can run to confirm that Cypress is running fine.
>
> **[1:04](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=64)** We would be running all of that.
>
> **[1:05](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=65)** Let's go ahead and write our own test.
>
> **[1:08](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=68)** We'll be writing a test that will test the login process of our application.
>
> **[1:12](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=72)** To begin, let's go ahead and create our test file.
>
> **[1:16](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=76)** Go into the integrations folder of the Cypress folder and create a new file, login.spec.js.
>
> **[1:25](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=85)** Cypress tests use the Mocha library for writing test cases and charge js as the assertion library.
>
> **[1:30](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=90)** This will reflect in the syntax of the test we would be writing.
>
> **[1:34](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=94)** Let's begin by writing the describe block for our test.
>
> **[1:41](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=101)** Next, let's write our test case for the login test.
>
> **[1:47](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=107)** Great, a good practice when writing test cases is to write out the steps in the testing process.
>
> **[1:52](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=112)** For this test, we first have to load the page.
>
> **[1:57](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=117)** Once the page is loaded, we want to enter the login credentials.
>
> **[2:03](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=123)** The next step is to click on the login button to login.
>
> **[2:10](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=130)** Lastly, we want to assert that we land on the profile page once logged in.
>
> **[2:18](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=138)** These comments will form a guide to make sure we cover all steps required for our test case.
>
> **[2:24](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=144)** Let's now begin to write the code that will make this happen.
>
> **[2:27](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=147)** Before we begin, ensure that your app is running.
>
> **[2:30](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=150)** If your app is not running, make sure you get this started before running your tests.
>
> **[2:34](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=154)** First, using the Cypress global cy object, we can use the visit function to load the root URL of the app.
>
> **[2:41](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=161)** We can actually run this test at this point.
>
> **[2:43](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=163)** But first, let's delete the existing sample tests in the integration folder.
>
> **[2:54](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=174)** Now, save this file and let's head back to the command line to run Cypress.
>
> **[2:59](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=179)** Previously, we run the Cypress command by pointing to it inside the .bin folder inside node modules.
>
> **[3:06](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=186)** In recent versions of NPM, you can actually use the MPX tool to directly run binarys contained in the node modules folder.
>
> **[3:13](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=193)** Simply type NPX Cypress open to run the test we just wrote.
>
> **[3:18](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=198)** This will pop open the Cypress tool.
>
> **[3:21](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=201)** From the Cypress tool, you can then run the test we just wrote by double clicking on the test file.
>
> **[3:28](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=208)** This will open up an instance of the Chrome browser and you can literally see the address you just provided entered into the address bar and the homepage loaded.
>
> **[3:39](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=219)** How cool is that?
>
> **[3:41](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=221)** On the left-hand side, you can see your test cases and the steps involved in the test.
>
> **[3:45](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=225)** Now that we have the homepage loaded and we have confirmed that Cypress runs fine, let's write the other steps for testing our login process.
>
> **[3:53](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=233)** To populate our form fields, we use the get method on the cy objects to target the form elements, using their CSS selectors.
>
> **[4:09](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=249)** In the home.vue component, we see that the form fields now have unique classes to directly target them, and same for the button.
>
> **[4:20](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=260)** Using the get method, let's target the email field.
>
> **[4:25](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=265)** Then use the type method to fill in the required value.
>
> **[4:30](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=270)** Good, let's go ahead and do the same for the password field.
>
> **[4:37](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=277)** Next, we targeted the login button, but before that, I need to add a dot here as we are using CSS selectors.
>
> **[4:45](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=285)** Now we target the button.
>
> **[4:49](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=289)** Then call the click button on it to log into the application.
>
> **[4:54](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=294)** Now that we have logged in on this line, the final step is to assert that we are now on the profile page.
>
> **[5:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=300)** This can be done with the combination of the URL and should methods on the Cypress object.
>
> **[5:06](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=306)** The should method takes in a comparison type on what you're comparing against.
>
> **[5:10](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=310)** For this test, we'll be using the include comparison type and telling it to match the forward slash profile route.
>
> **[5:18](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=318)** Now save the file and let's run the test once again.
>
> **[5:25](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=325)** This time, with Cypress running the entire login process.
>
> **[5:30](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=330)** Our test passed because our assertions are right.
>
> **[5:34](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=334)** If any of the assertions have been wrong or Cypress cannot look at an element on the screen, tests will fail indicating that we have a bug in our login flow.
>
> **[5:42](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=342)** The beauty of this process is that once these tests have been written, you no longer need to manually perform the tests.
>
> **[5:48](https://www.linkedin.com/learning/vue-js-testing-and-debugging/running-a-simple-end-to-end-test-with-cypress?u=76281980&t=348)** You can run them as many times as you want and get detailed reporting from Cypress.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), assert (2), case. (1), function (1), delete (1)
> **CLI Commands:** make (4), node (4), npm (3), npx (1)
> **Env Vars:** npm (3), url (2), css (2), mpx (1), npx (1)
> **UI Navigation:** click on (1), open the (1)
> **File Paths:** login.spec.js (1)
> **Documentation:** spec (1)
> **Tools:** command line (1)
> **Best Practices:** good practice (1)

#### Automated testing with CircleCI
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=0)** - [Instructor] So, we're doing the writing for our application.
>
> **[0:02](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=2)** Writing test to ensure that bugs are tracked and fixed before pushing it to production.
>
> **[0:07](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=7)** However, a lot of human errors can still creep into the testing process.
>
> **[0:12](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=12)** Developers might forget to run their tests suits before pushing it to the main repo.
>
> **[0:17](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=17)** We need a way to automate this in such a way that tests guard unhealthy code from being pushed to production.
>
> **[0:24](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=24)** In today's DevOps world, the solution is continuous integration pipelines.
>
> **[0:30](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=30)** Continuous integration pipelines, monitor code repositories, and ensure that tests run automatically whenever new code is pushed to a branch.
>
> **[0:38](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=38)** This prevents errors from being pushed into the main branch as a merge will not be possible until all tests are passing.
>
> **[0:45](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=45)** Continuous integration pipelines can be built from scratch with tools like Jenkins and hosted privately.
>
> **[0:51](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=51)** However, except you have peculiar needs, using a hosted service is preferred.
>
> **[0:56](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=56)** One of the most popular continuous integration and deployment service today is CircleCI.
>
> **[1:02](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=62)** CircleCI is easy to set up and uses the infrastructure as code paradigm to provision a continuous integration pipeline for your code repositories.
>
> **[1:11](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=71)** We'll be setting up a continuous integration or CI pipeline to run the Jest tests contained in our application.
>
> **[1:18](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=78)** To begin building our CI pipeline, make sure that you're on the 05_03b branch of the project.
>
> **[1:25](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=85)** Also ensure that you have pushed your code to a GitHub repository.
>
> **[1:29](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=89)** I've already done that for this application.
>
> **[1:32](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=92)** The first step in the process of setting up a CI pipeline on CircleCI is writing the pipeline script.
>
> **[1:37](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=97)** To do this, you need to create a '.cicleci' folder at the root of your application.
>
> **[1:46](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=106)** Next, you need to create a yml configuration file with the name config inside the '.circleci' folder.
>
> **[1:54](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=114)** This is the file that will contain your continuous integration script.
>
> **[1:58](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=118)** I will go ahead and write the script, then go over it when I'm done.
>
> **[2:04](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=124)** Now that we have this script, let's go over it.
>
> **[2:06](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=126)** I will advise you not to try and crack your brain regarding the syntax here.
>
> **[2:10](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=130)** Just try to understand what the file is doing as I explain.
>
> **[2:14](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=134)** CircleCI scripts have their formats and keywords well-defined in their documentation.
>
> **[2:20](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=140)** And that should be your reference for getting familiar with the platform.
>
> **[2:23](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=143)** The pipeline script simply consists of jobs, which can be grouped into workflows.
>
> **[2:29](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=149)** Here we have defined a single job called build and set it's working directory to '/repo'.
>
> **[2:36](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=156)** Next, we set the docker image to a CircleCI image running node version 12.
>
> **[2:42](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=162)** This environment is the environment in which our tests will run.
>
> **[2:46](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=166)** Next, we go through a series of steps where we check out the code, update NPM, install and cache dependencies.
>
> **[2:57](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=177)** Finally, we run the test in the 'package.json' file using NPM.
>
> **[3:02](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=182)** This should be enough for our test to run, when we push the code to the remote repository.
>
> **[3:06](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=186)** Save this file and push it to your remote repository on GitHub.
>
> **[3:13](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=193)** The next step is to connect our repo to CircleCI.
>
> **[3:16](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=196)** Click on the login or signup button at the top right-hand corner, depending on whether you already have an account or not.
>
> **[3:24](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=204)** Either of the pages has links for logging in with GitHub.
>
> **[3:27](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=207)** Click on the GitHub link to get into your account.
>
> **[3:32](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=212)** I have already logged in with my GitHub account and now on the Projects page.
>
> **[3:37](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=217)** The Projects page is where new projects are connected to CircleCI.
>
> **[3:42](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=222)** You will see all the projects in your GitHub account listed here.
>
> **[3:46](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=226)** To add the 'explore-california' project, click on the setup project button on the right-hand side.
>
> **[3:53](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=233)** On the dialogue box, select that you'll be adding your own configuration file.
>
> **[3:57](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=237)** Next, type in the name of the branch on which the configuration file exists.
>
> **[4:04](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=244)** It's advisable that the file should be in the main branch.
>
> **[4:07](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=247)** This way, every branch that is pushed to the repo would be tested.
>
> **[4:12](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=252)** For this exercise, I have entered the project branch I am currently using to teach this exercise.
>
> **[4:17](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=257)** That is 05_03b.
>
> **[4:21](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=261)** Now click on the 'Let's Go' button and let's watch the pipeline run.
>
> **[4:27](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=267)** Now that the pipeline has finished running, we get a pass for the build.
>
> **[4:31](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=271)** Let's click on the build to view the details.
>
> **[4:36](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=276)** As seen, each step is in its own tab and you can expand the tab to view the details.
>
> **[4:43](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=283)** The step we care about the most is the one that runs the tests.
>
> **[4:46](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=286)** So let's jump to that.
>
> **[4:48](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=288)** Here, we see that our tests are successfully run and we can go through the test results.
>
> **[4:53](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=293)** With this pipeline set up, anytime we push code to the repository, the tests will automatically run.
>
> **[4:59](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=299)** If the tests pass, the code will be cleared to merge with the main branch.
>
> **[5:03](https://www.linkedin.com/learning/vue-js-testing-and-debugging/automated-testing-with-circleci?u=76281980&t=303)** If not the main branch will be protected until the faulty code is fixed.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), pass (2), this, (1), finally, (1), protected (1)
> **Tools:** github (6)
> **CLI Commands:** npm (2), make (1), docker (1), node (1)
> **UI Navigation:** click on (5)
> **Prerequisites:** set up (2), install (1), setup (1)
> **Env Vars:** npm (2)
> **File Paths:** package.json (1)
> **Versions:** version 12 (1)


### 7. Conclusion

#### Next steps with testing
> [LinkedIn Learning](https://www.linkedin.com/learning/vue-js-testing-and-debugging/next-steps-with-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vue-js-testing-and-debugging/next-steps-with-testing?u=76281980&t=0)** - [Fiyako] To further your understanding on how to test Vue.js applications, I advise that you check the Testing page on the official Vue.js website.
>
> **[0:07](https://www.linkedin.com/learning/vue-js-testing-and-debugging/next-steps-with-testing?u=76281980&t=7)** You will find helpful links to recommended tools for testing Vue.js applications.
>
> **[0:13](https://www.linkedin.com/learning/vue-js-testing-and-debugging/next-steps-with-testing?u=76281980&t=13)** I also advise that you check the Vue Testing Library documentation to get familiar with all the features it offers for making the testing process a lot easier.
>
> **[0:22](https://www.linkedin.com/learning/vue-js-testing-and-debugging/next-steps-with-testing?u=76281980&t=22)** For more details on using Cypress for automated functional testing, check out the Cypress documentation for more features of their API.
>
> **[0:29](https://www.linkedin.com/learning/vue-js-testing-and-debugging/next-steps-with-testing?u=76281980&t=29)** To learn more about Vue.js, you can check out the following courses in the LinkedIn Learning Library, Vue.js Essential Training by Ray Villalobos, Vue.js: Building an Interface, also by Ray, and Learning Vuex by Alexander Zanfer.
>
> **[0:44](https://www.linkedin.com/learning/vue-js-testing-and-debugging/next-steps-with-testing?u=76281980&t=44)** You can also connect with me on social media.
>
> **[0:47](https://www.linkedin.com/learning/vue-js-testing-and-debugging/next-steps-with-testing?u=76281980&t=47)** I'm very active on Twitter via Twitter handle displayed on your screen, and you can also find me on LinkedIn using my name.
>
> **[0:54](https://www.linkedin.com/learning/vue-js-testing-and-debugging/next-steps-with-testing?u=76281980&t=54)** Happy coding.

> [!info]- Semantic Content
>
> **File Paths:** vue.js (6)
> **CLI Commands:** find (2)
> **Code Keywords:** interface (1)
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