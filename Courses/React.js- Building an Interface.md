---
type: course
slug: react-js-building-an-interface-8551484
url: "https://www.linkedin.com/learning/react-js-building-an-interface-8551484"
duration_minutes: 100
duration: 1h 40m
level: Intermediate
updated: 4/23/2021
learners: 27435
skills:
  - React.js
  - Web Interface Design
exercise_files: true
github: "https://github.com/LinkedInLearning/react-interface-2880067"
tags:
  - course
  - topic/web-development
  - topic/software-development
  - skill/react-js
  - skill/web-interface-design
status: not-started
created: 2026-04-17
---

# React.js: Building an Interface

> React is a JavaScript library with reusable components and a unique data rendering approach. Web interfaces that you create with React are flexible, fast, and lightweight. In this course, instructor Ray Villalobos reviews component architecture in React and covers key skills that you need to be able to build interfaces. Ray steps through how to install React and get started with components, debugg

> [LinkedIn Learning](https://www.linkedin.com/learning/react-js-building-an-interface-8551484) | 1h 40m | Intermediate | 27K learners

## Instructor

- [[Ray Villalobos]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/react-interface-2880067)

## Skills Covered

- React.js
- Web Interface Design

## Table of Contents

### Introduction

#### Why React is so important
> [LinkedIn Learning](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/why-react-is-so-important?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/why-react-is-so-important?u=76281980&t=0)** - [Ray] There's two reasons why, if I had to learn only one JavaScript framework, it would be React.
>
> **[0:06](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/why-react-is-so-important?u=76281980&t=6)** Now first, the speed at which it's dominated the industry is amazing.
>
> **[0:11](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/why-react-is-so-important?u=76281980&t=11)** If I was looking for a job today as a front end or full stack developer, chances are it's on the list of preferred skills.
>
> **[0:19](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/why-react-is-so-important?u=76281980&t=19)** But the second reason is more important.
>
> **[0:21](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/why-react-is-so-important?u=76281980&t=21)** It's a lot of fun to code in.
>
> **[0:24](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/why-react-is-so-important?u=76281980&t=24)** React makes things that are annoying, like managing the virtual DOM, trivial.
>
> **[0:29](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/why-react-is-so-important?u=76281980&t=29)** Hey there, this is Ray Villalobos, senior staff instructor at LinkedIn, and I created this course as a quick introduction to React that will teach you how it works in a practical way.
>
> **[0:39](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/why-react-is-so-important?u=76281980&t=39)** I'm using React Hooks in this course, the most modern way of working with the library.
>
> **[0:44](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/why-react-is-so-important?u=76281980&t=44)** I'm assuming you know the basics of HTML, CSS, and JavaScript, and that's about it.
>
> **[0:49](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/why-react-is-so-important?u=76281980&t=49)** Now, we're going to build a simple application that will get you some experience with React and show you why it's worth your time.
>
> **[0:56](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/why-react-is-so-important?u=76281980&t=56)** So if you're ready to build an interactive project, let's get started.

> [!info]- Semantic Content
>
> **Env Vars:** dom (1), html (1), css (1)
> **Code Keywords:** let (1)
> **Speakers:** - [ray] (1)

#### Exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/exercise-files?u=76281980&t=0)** - [Instructor] To work with the exercises for this course, simply go to [raybo.org/slides_reactinterface](https://raybo.org/slides_reactinterface).
>
> **[0:08](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/exercise-files?u=76281980&t=8)** This will take you to a slide show with all the links you'll need for the course.
>
> **[0:13](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/exercise-files?u=76281980&t=13)** At the bottom of the slide show, you will find a navigation toolbar.
>
> **[0:16](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/exercise-files?u=76281980&t=16)** You can hit the t key to show or hide this toolbar.
>
> **[0:20](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/exercise-files?u=76281980&t=20)** You'll find a links to the GitHub repository for this course as well as contact information.
>
> **[0:26](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/exercise-files?u=76281980&t=26)** If you hit the m key, you should see an index for all the slides on the course.
>
> **[0:31](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/exercise-files?u=76281980&t=31)** If you click on a slide, that slide will play for you on your monitor.
>
> **[0:35](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/exercise-files?u=76281980&t=35)** At the beginning of some slides, there is an overlay with a link to the slides you're looking at.
>
> **[0:40](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/exercise-files?u=76281980&t=40)** You can get to a GitHub repo that has some of the code for the course.
>
> **[0:44](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/exercise-files?u=76281980&t=44)** The link to the repo is at the bottom of the slides.
>
> **[0:47](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/exercise-files?u=76281980&t=47)** This repository is built so that there are branches for each of the videos in the course.
>
> **[0:52](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/exercise-files?u=76281980&t=52)** You can use this branch pop-up right here to switch to the specific branch and take a look at the code at that stage.
>
> **[0:58](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/exercise-files?u=76281980&t=58)** For example, the branch titled 01_04 would show you the code on chapter one and show the fourth video in that chapter.
>
> **[1:06](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/exercise-files?u=76281980&t=66)** If you see a letter B at the end of the name, it means that's how the code looked at the beginning of the video.
>
> **[1:12](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/exercise-files?u=76281980&t=72)** If you see an E at the end of the name, that's how the code looked at the end of the video.
>
> **[1:17](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/exercise-files?u=76281980&t=77)** If you want to, you can download the course by going to the Code button and choosing one of the options like Open with Codespaces or GitHub Desktop.
>
> **[1:27](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/exercise-files?u=76281980&t=87)** If you're familiar with terminal commands, you can also download the repo by using the clipboard icon to copy the link.
>
> **[1:33](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/exercise-files?u=76281980&t=93)** We recommend that you download the main branch and issue an NPM install command.
>
> **[1:38](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/exercise-files?u=76281980&t=98)** You can also look at the code or download any of these branches by going to the branch pop-up first, and then using the Code button, you can download the ZIP file for the specific video you want to follow along with.
>
> **[1:52](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/exercise-files?u=76281980&t=112)** If you need more experience with Git and GitHub, do a search for learning Git and GitHub in our library.
>
> **[1:58](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/exercise-files?u=76281980&t=118)** That's how you work with this project, so let's keep going.

> [!info]- Semantic Content
>
> **Tools:** github (5), terminal (1)
> **Exercise Files:** download the (4), github repo (1), zip file (1)
> **CLI Commands:** find (2), git (2), npm (1)
> **UI Navigation:** go to (1), click on (1), switch to (1)
> **Code Keywords:** switch (1), let (1)
> **Env Vars:** npm (1), zip (1)
> **Definitions:** is an  (1), means that (1)
> **Prerequisites:** you'll need (1), install (1)


### 1. Set Up and Install

#### Installing requirements
> [LinkedIn Learning](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-requirements?u=76281980&t=0)** - [Instructor] Let's take a look at the tools we'll need to get started installing a React project with Create React App.
>
> **[0:06](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-requirements?u=76281980&t=6)** Now before you get started, you'll need to have some tools pre-installed on your computer to work on this project.
>
> **[0:12](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-requirements?u=76281980&t=12)** First, you'll need a copy of Git installed.
>
> **[0:15](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-requirements?u=76281980&t=15)** A Git is a version control system that lets you keep track of and collaborate on projects.
>
> **[0:21](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-requirements?u=76281980&t=21)** If you're on a PC, when you install Git, you have the option of installing an app called Git Bash, which lets you use Linux commands on a PC.
>
> **[0:30](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-requirements?u=76281980&t=30)** You'll also need a copy of Node.js, which is used to manage the project.
>
> **[0:34](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-requirements?u=76281980&t=34)** A couple of optional tools will also make your life easier.
>
> **[0:38](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-requirements?u=76281980&t=38)** First, I highly recommend that you install the React Developer Tools.
>
> **[0:42](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-requirements?u=76281980&t=42)** They allow you to inspect what's going on with React in real time.
>
> **[0:46](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-requirements?u=76281980&t=46)** I'll be using Visual Studio Code for this project, so there's a couple of extensions that will really help.
>
> **[0:51](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-requirements?u=76281980&t=51)** The first is a series of React Snippets that will make your life easier when working with React.
>
> **[0:56](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-requirements?u=76281980&t=56)** The second is a series of snippets for JSX, the language that React projects are based on.
>
> **[1:03](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-requirements?u=76281980&t=63)** You can create a React app with a tool called Create React App.
>
> **[1:07](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-requirements?u=76281980&t=67)** It's a much simpler way to create projects, but it does require that you have npm, which comes with Node.js 5.2 or higher.
>
> **[1:15](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-requirements?u=76281980&t=75)** If you have a previous version of the Create React App project, you can uninstall it with the command seen here.
>
> **[1:21](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-requirements?u=76281980&t=81)** Otherwise, you can use your terminal application to run the following commands.
>
> **[1:26](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-requirements?u=76281980&t=86)** First, I like to put my projects on the desktop but you can put them wherever you want.
>
> **[1:31](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-requirements?u=76281980&t=91)** Then you'll use an npx and then use the Create React App command and give your application a name.
>
> **[1:39](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-requirements?u=76281980&t=99)** I'm going to call mine reactinterface then we'll switch over to the reactinterface folder and run npm start.
>
> **[1:46](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-requirements?u=76281980&t=106)** Let's go ahead and try that in a terminal.
>
> **[1:48](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-requirements?u=76281980&t=108)** I'm using a hyper right here but you can use the macro S terminal, Git Bash, or any other tool of your liking.
>
> **[1:55](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-requirements?u=76281980&t=115)** So I'm going to issue a cd~/Desktop, that will put my terminal in the desktop and then I'll use the npx create-react-app and create the reactinterface project.
>
> **[2:10](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-requirements?u=76281980&t=130)** I'm going to hit return, wait for the installation to complete.
>
> **[2:16](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-requirements?u=76281980&t=136)** Once that's done, you can see the different commands that you can use.
>
> **[2:20](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-requirements?u=76281980&t=140)** If you see yarn, that means that you have another application called yarn.
>
> **[2:25](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-requirements?u=76281980&t=145)** You can look for that, or if you have npm, you can use npm, but you can use any of these commands that you want.
>
> **[2:31](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-requirements?u=76281980&t=151)** I'm going to cd into the reactinterface folder, and once in there I can run the npm start command, or you can run yarn start.
>
> **[2:41](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-requirements?u=76281980&t=161)** Now, if you do have something running on the default port, like I do, it's going to ask you this, just go ahead and say yes, and it'll start your browser with the sample application showing.

> [!info]- Semantic Content
>
> **CLI Commands:** git (5), npm (5), yarn (3), node (2), make (2)
> **Tools:** terminal (4), bash (2), visual studio (1)
> **Code Keywords:** let (2), require (1), switch (1), return, (1), this, (1)
> **Definitions:** is a  (3), means that (1)
> **Prerequisites:** you'll need (2), install (2)
> **File Paths:** node.js (2)
> **Env Vars:** jsx (1)
> **Versions:** 5.2 (1)

#### React installation
> [LinkedIn Learning](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=0)** - [Instructor] The create-react-app makes it easier to create a project by installing a lot of modules.
>
> **[0:05](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=5)** So let's go over what we got when we installed the project with create react app.
>
> **[0:10](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=10)** I'm going to go over to the desktop and look at the folder that was installed and I'm going to drag it onto my code editor which is Visual Studio Code.
>
> **[0:18](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=18)** Now a couple of notes.
>
> **[0:19](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=19)** If you're comfortable with react installations, you might want to skip this video.
>
> **[0:23](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=23)** Also, if you're working with our GitHub repo, like I am, you'll see some additional files and folders like the contributing license, notice, GitHub folder, and a different read me file than the default installation.
>
> **[0:37](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=37)** Those are required for us to add the projects on GitHub but the rest is the default installation.
>
> **[0:43](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=43)** Now let's go ahead and run the npm start or the yarn start command.
>
> **[0:48](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=48)** So I'm going to pull up a terminal and go to the terminal menu and select new terminal and then type in the npm start or yarn start command.
>
> **[0:58](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=58)** If it does give you this message just go ahead and say, yes.
>
> **[1:01](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=61)** This will startup our application in a browser.
>
> **[1:07](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=67)** Let's talk about some of the modules that get installed when you use create react app.
>
> **[1:11](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=71)** First Webpack is a JavaScript bundler.
>
> **[1:14](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=74)** Its main job is to manage how our application is assembled and the loading of your different modules into an application.
>
> **[1:22](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=82)** Babel is a JavaScript compiler, it lets you write code with the latest JavaScript features and it will convert that, so that it works with older browsers.
>
> **[1:31](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=91)** Est Lint is a JavaScript linter which analyzes your code against certain rules and helps you fix them.
>
> **[1:38](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=98)** You might need to have an extension installed on your editor to use this, and you can find one for Visuals Studio Code at the links right here.
>
> **[1:47](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=107)** You also get Jest, a testing framework.
>
> **[1:50](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=110)** And if you want to run tests on your JavaScript code, you can use that.
>
> **[1:54](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=114)** Finally, you'll also get something called Web Vitals which is a performance monitoring tool for your site measuring performance, accessibility, and best practices.
>
> **[2:07](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=127)** Now you can see the modules that I was talking about installed right here.
>
> **[2:10](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=130)** So for example you can see jest install right there, as well as the testing version for the react library of jest and some of the other tools that we talked about into the package.json file.
>
> **[2:24](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=144)** Now the package.json is the file that Node.js creates to manage my project.
>
> **[2:29](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=149)** You can also see a browser list section down here.
>
> **[2:33](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=153)** This helps our modules like Webpack note which browsers you're targeting for the build.
>
> **[2:38](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=158)** You can see that we're targeting browsers that are not opera mini.
>
> **[2:42](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=162)** The getignore file is a document that helps you control which files are tracked by GitHub.
>
> **[2:48](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=168)** So for example, the node modules folder is not going to be copied to your GitHub repo.
>
> **[2:53](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=173)** Now let's see how this project is put together.
>
> **[2:56](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=176)** The files are in two main folders.
>
> **[2:58](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=178)** The public folder has files that Webpack will manage.
>
> **[3:02](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=182)** They will also be moved to the server when our project is deployed.
>
> **[3:05](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=185)** You can see that there are some icons as well as logos here that show up when we preview our application.
>
> **[3:13](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=193)** The robots.txt file gives web crawlers information about your sites.
>
> **[3:18](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=198)** Web crawlers are applications that search engines like Google use to get more information about your websites.
>
> **[3:24](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=204)** The index.html file is the entry point for browsers.
>
> **[3:28](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=208)** You can modify this file if you want, but Webpack will use this file to inject the JavaScript code you write as well as react code and other CSS.
>
> **[3:39](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=219)** The single most important section is this div with the id of root.
>
> **[3:43](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=223)** This is where your application will be loaded.
>
> **[3:46](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=226)** Now let's look at some of the react files.
>
> **[3:49](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=229)** The other main folder is this source folder.
>
> **[3:52](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=232)** And here you'll find the index.js file.
>
> **[3:56](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=236)** This is your entry point for the JavaScript application.
>
> **[3:59](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=239)** Now this file is going to import a lot of code from different libraries like React and React-dom.
>
> **[4:05](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=245)** React is the main library for working with react while React-dom manages how the document object model works within react.
>
> **[4:13](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=253)** Now these are being loaded by Node.js using what's listed as dependencies in your package.json file.
>
> **[4:19](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=259)** If you're looking for where these files are coming from, they're coming from the node_modules folder.
>
> **[4:25](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=265)** Since we're using Webpack, you can include your CSS as an import with a command like import right here.
>
> **[4:32](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=272)** Now that's instead of using a link tag in your HTML this is going to let you have a CSS file for your entire application.
>
> **[4:39](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=279)** We're also importing a configuration file for web report vitals and this is the module that we talked about earlier.
>
> **[4:47](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=287)** Now we're calling that function right here at the bottom.
>
> **[4:49](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=289)** Another import we're doing is for a react module called App.
>
> **[4:54](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=294)** Although you don't see the extension, this is loading the file called app.js.
>
> **[4:58](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=298)** You getignore extensions when you load other JavaScript files.
>
> **[5:02](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=302)** Now we're using the react library inside our render command.
>
> **[5:06](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=306)** You can see some code to put react in StrictMode during development.
>
> **[5:10](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=310)** StrictMode will complain if you write potentially dangerous code.
>
> **[5:14](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=314)** The render command then loads up the app component as a module and looks for an item with the Id of root in your index that html file and that's where your application will be loaded.
>
> **[5:26](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=326)** Now let's take a look at App.js next.
>
> **[5:29](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=329)** There's a load command here for a file called logo.svg, which is in the same folder you can see it right here.
>
> **[5:37](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=337)** You can include images and logos in here but they will be managed by Webpack which can be useful in automating things like compression but it means that they won't be in the final folder that is exposed to the web.
>
> **[5:49](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=349)** We're also loading a test for this document that's in a file called App.test.js.
>
> **[5:55](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=355)** We installed the jest testing library and this code shows some sample test code.
>
> **[6:00](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=360)** This are related file called setupTests.js down here.
>
> **[6:04](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=364)** In the same way, we're loading an App.css file right here.
>
> **[6:08](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=368)** Then we have a function that defines our document.
>
> **[6:11](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=371)** I should mention that, although the code follows what looks to be JavaScript, it's written in a language called JSX which is a combination of JavaScript and HTML.
>
> **[6:22](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=382)** So you can see that we use a return statement right here inside the function called App and then we export default just like we would for a normal JavaScript project.
>
> **[6:33](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=393)** So that part looks like JavaScript.
>
> **[6:35](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=395)** And then all the code right here looks like regular HTML but do notice that there are some changes.
>
> **[6:40](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=400)** So for example, we can import a variable right here which is this logo that we imported earlier.
>
> **[6:47](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=407)** And whenever we use the keyword class in HTML, we have to modify that to className because class means something in JavaScript.
>
> **[6:57](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=417)** We can't use that in JSX.
>
> **[6:59](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=419)** So we have to always remember to use className instead of class and there are a lot of other places where you're going to have to remember to use the JSX version of the HTML.
>
> **[7:11](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=431)** Also notice that standalone tags like the image tag, have to have this closing slash right here.
>
> **[7:18](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=438)** So that's how our application loads.
>
> **[7:20](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/react-installation?u=76281980&t=440)** Now there's a lot going on here but hopefully everything makes sense.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), module (3), function (3), this, (1), finally, (1)
> **File Paths:** package.json (3), node.js (2), app.js (2), robots.txt (1), index.html (1)
> **Env Vars:** html (5), css (3), jsx (3)
> **CLI Commands:** node (3), npm (2), yarn (2), find (2)
> **Tools:** github (5), terminal (3), visual studio (1)
> **Definitions:** is a  (6), means that (1)
> **Code Identifiers:** classname (2), node_modules (1), setuptests (1)
> **Analogies:** for example (3), just like (1)

#### Customizing your installs
> [LinkedIn Learning](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/customizing-your-installs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/customizing-your-installs?u=76281980&t=0)** - [Instructor] The set-up for this project, is a bit overkill.
>
> **[0:02](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/customizing-your-installs?u=76281980&t=2)** Let's spend some time paring it down just a bit.
>
> **[0:05](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/customizing-your-installs?u=76281980&t=5)** Here's what we have so far, and the application is already running in the terminal, and so what I'm going to do is remove a bunch of files, that I'm not going to use in this project.
>
> **[0:15](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/customizing-your-installs?u=76281980&t=15)** So for example these logos I'm going to get rid of, as well as my manifest.json file, robots.txt, it doesn't hurt that much to leave them in there, but I just want my project to look a little bit simpler.
>
> **[0:29](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/customizing-your-installs?u=76281980&t=29)** I'm not going to use this app.css file, so I'm going to get rid of that too, or the tests, and I'm not going to use this logo.svg, and I'll also get rid of this, setup test for report web vitals, and this setup tests.js.
>
> **[0:47](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/customizing-your-installs?u=76281980&t=47)** So let's go ahead and right click, and we'll say delete.
>
> **[0:51](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/customizing-your-installs?u=76281980&t=51)** It'll take a second, and it's going to crash our project, so let's just go ahead and make this big, so it doesn't bother us.
>
> **[0:58](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/customizing-your-installs?u=76281980&t=58)** All right, in addition to that, we're going to need to make some modifications, to some of the files.
>
> **[1:03](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/customizing-your-installs?u=76281980&t=63)** We'll start with the index.html.
>
> **[1:05](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/customizing-your-installs?u=76281980&t=65)** I usually take out like these comments, once I know what I'm doing and, so let's just get rid of all the comments first.
>
> **[1:14](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/customizing-your-installs?u=76281980&t=74)** And then, we're going to take out some of these tags.
>
> **[1:19](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/customizing-your-installs?u=76281980&t=79)** We're not using or, I'm not going to use the favicon, and we'll take out this description here, the apple touch icon, the manifest.
>
> **[1:28](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/customizing-your-installs?u=76281980&t=88)** Just making things super tiny.
>
> **[1:32](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/customizing-your-installs?u=76281980&t=92)** So let's go ahead and save this.
>
> **[1:34](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/customizing-your-installs?u=76281980&t=94)** Then I'm going to go to my index.js file.
>
> **[1:37](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/customizing-your-installs?u=76281980&t=97)** Because I got rid of some stuff, I need to make sure that, I delete some of these calls to things that I'm not using.
>
> **[1:45](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/customizing-your-installs?u=76281980&t=105)** So this web vitals will go, and this alt method right here, will also go.
>
> **[1:51](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/customizing-your-installs?u=76281980&t=111)** And, not that I don't appreciate the comments, but I don't really need them.
>
> **[1:55](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/customizing-your-installs?u=76281980&t=115)** So I'll get rid of that as well.
>
> **[1:57](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/customizing-your-installs?u=76281980&t=117)** And so let's go ahead and save that one.
>
> **[1:59](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/customizing-your-installs?u=76281980&t=119)** We'll go to App.js, and let's see what we can get rid of, here.
>
> **[2:04](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/customizing-your-installs?u=76281980&t=124)** So we'll get rid of this logo, and also this App.css file.
>
> **[2:11](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/customizing-your-installs?u=76281980&t=131)** Make sure that in index we are still importing to css here.
>
> **[2:18](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/customizing-your-installs?u=76281980&t=138)** Because we are going to put some stuff in there, a little bit later on.
>
> **[2:21](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/customizing-your-installs?u=76281980&t=141)** So we're not using this logo, actually we're not using this entire header, I'm just going to make myself a different header here.
>
> **[2:29](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/customizing-your-installs?u=76281980&t=149)** So this will just say, H one, and we'll just say, "Your Appointments" right now.
>
> **[2:37](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/customizing-your-installs?u=76281980&t=157)** Let's go ahead and save that, and we'll make sure that our process is still running.
>
> **[2:42](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/customizing-your-installs?u=76281980&t=162)** We may have to stop it, and restart it.
>
> **[2:44](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/customizing-your-installs?u=76281980&t=164)** So I have a couple of terminals running, so in addition to getting a terminal, by going through new terminal here, you can also add another terminal here, or delete a terminal, and I usually have a couple running.
>
> **[2:57](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/customizing-your-installs?u=76281980&t=177)** One where I have my process, and another one where I have, or issue any commands that I need to issue.
>
> **[3:04](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/customizing-your-installs?u=76281980&t=184)** So let's see if we did everything correctly.
>
> **[3:08](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/customizing-your-installs?u=76281980&t=188)** So it's still thinks that, is looking for, the logo.sgv file, so.
>
> **[3:16](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/customizing-your-installs?u=76281980&t=196)** Let's make sure that we deleted everywhere, where that logo file might be.
>
> **[3:22](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/customizing-your-installs?u=76281980&t=202)** I think index.js, not in apps, so let's try restarting our process.
>
> **[3:31](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/customizing-your-installs?u=76281980&t=211)** So, I'm going to go back to this terminal.
>
> **[3:32](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/customizing-your-installs?u=76281980&t=212)** Control C to get out of that one.
>
> **[3:34](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/customizing-your-installs?u=76281980&t=214)** I'll clear this out, it's always cleaner, and then issue an npm start command again.
>
> **[3:40](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/customizing-your-installs?u=76281980&t=220)** And now we get just the very simple page, that says, "Your Appointments."
>
> **[3:46](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/customizing-your-installs?u=76281980&t=226)** That's great, that's all we need to do right now, and in the next video we'll cover, installing additional modules, like icons and intel in CSS.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), delete (3), this, (1), super (1), this. (1)
> **File Paths:** app.css (2), index.js (2), manifest.json (1), robots.txt (1), tests.js (1)
> **CLI Commands:** make (7), npm (1)
> **Tools:** terminal (6)
> **Cross-References:** go back to (1), in the next (1)
> **UI Navigation:** go to (2)
> **Prerequisites:** setup (2)
> **Env Vars:** css (1)

#### Using React icon components
> [LinkedIn Learning](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/using-react-icon-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/using-react-icon-components?u=76281980&t=0)** - [Tutor] In a real project, you will want to do all the work yourself.
>
> **[0:03](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/using-react-icon-components?u=76281980&t=3)** So, let's take a look at how we can install a module that is external to help us add icons to our project.
>
> **[0:10](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/using-react-icon-components?u=76281980&t=10)** Now the one I'm going to be using is called React Icons, and it's one of my favorite React Component Libraries.
>
> **[0:17](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/using-react-icon-components?u=76281980&t=17)** To install it, we're going to issue an npm install command, and use react-icons, and then save it as a dependency.
>
> **[0:25](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/using-react-icon-components?u=76281980&t=25)** So, I'll just copy this code right here, from the slide and then go into my terminal, in my project, and go ahead and paste it in there, and run it.
>
> **[0:36](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/using-react-icon-components?u=76281980&t=36)** Once you've done that, you can use it in any one of your modules, which is pretty cool.
>
> **[0:39](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/using-react-icon-components?u=76281980&t=39)** Now, to use that, you're going to need to have the import command with the icon that you want to import.
>
> **[0:46](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/using-react-icon-components?u=76281980&t=46)** So, one of the cool things about React Icons is that it'll only insert the code for the icon that you need.
>
> **[0:54](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/using-react-icon-components?u=76281980&t=54)** So, you won't, unlike something like Font Awesome if you install it normally, you copy the entire library with all the icons, even if you only need like two or three icons, so, way more stuff than you need and has to download that By doing thing with this module, it just copies the code for the one or two or three or however many icons you're going to need for your project.
>
> **[1:15](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/using-react-icon-components?u=76281980&t=75)** So super efficient.
>
> **[1:16](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/using-react-icon-components?u=76281980&t=76)** So, you use the import command in any module that you want, and then you add the name of the icon.
>
> **[1:22](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/using-react-icon-components?u=76281980&t=82)** When you import, you can add more by adding commas and putting in more names, and then you have to specify what library you are going to import them from.
>
> **[1:32](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/using-react-icon-components?u=76281980&t=92)** So, this is usually a two letter extension, so bs is for Bootstrap and you can find the names of the icon libraries on the website.
>
> **[1:42](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/using-react-icon-components?u=76281980&t=102)** I'll show it to you in a second.
>
> **[1:43](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/using-react-icon-components?u=76281980&t=103)** Then whenever you want to use the icon, you can just use a tag with the icon name.
>
> **[1:48](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/using-react-icon-components?u=76281980&t=108)** Usually this is capitalized and you can write the code like this or, I usually just write it as a single sort of tag and put a slash at the end, like this.
>
> **[2:00](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/using-react-icon-components?u=76281980&t=120)** So, as I mentioned, to get the name of the icon we can go into React Icons and either search for what we're looking for.
>
> **[2:09](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/using-react-icon-components?u=76281980&t=129)** So say that you're looking for a cool trash can, then you just type in trash in here and you're see that all the libraries or icons for trash for all the libraries appear.
>
> **[2:19](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/using-react-icon-components?u=76281980&t=139)** I like this one called BiTrash, I think that looks pretty cool.
>
> **[2:23](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/using-react-icon-components?u=76281980&t=143)** And once you find one that you want to use, just click on it and notice that it copies the icon name to the clipboard, which means that you can immediately use.
>
> **[2:32](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/using-react-icon-components?u=76281980&t=152)** You just have to remember that this two-letter word before the name of the icon is the extension, but if you know the library, if you go to say BoxIcons, which is where this comes from, you can see that this is how you would import it, the bi goes at the beginning.
>
> **[2:51](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/using-react-icon-components?u=76281980&t=171)** So, you can kind of guess it from the name or you can just go to that sort of icons page and find the icon and the import command right here.
>
> **[3:01](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/using-react-icon-components?u=76281980&t=181)** So, let's say that we wanted to import, I'm going to use this BiArchive.
>
> **[3:06](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/using-react-icon-components?u=76281980&t=186)** So, now it copied the name of the icon to the clipboard and we'll need to add this import icon name at the top of the component.
>
> **[3:13](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/using-react-icon-components?u=76281980&t=193)** So, let's see, we wanted to go ahead and add that to say this App, that JS component.
>
> **[3:20](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/using-react-icon-components?u=76281980&t=200)** So, first we'll need the import statement.
>
> **[3:22](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/using-react-icon-components?u=76281980&t=202)** And, I think I just have the name of the icon.
>
> **[3:24](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/using-react-icon-components?u=76281980&t=204)** So, it'll be import and then the, in curly braces, the name of which icon you want to import, in this case we just want this icon to begin with.
>
> **[3:35](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/using-react-icon-components?u=76281980&t=215)** And then we also need from, and react-icons, slash and then, the library name, which for us was bi.
>
> **[3:47](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/using-react-icon-components?u=76281980&t=227)** Now that means that the icon is ready to just be inserted wherever you want it to be, and what I'll do is I'll just copy the name right here and go ahead and create a tag, put the slash at the end here, and that will allow me to import that.
>
> **[4:03](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/using-react-icon-components?u=76281980&t=243)** So, once I save it, you can see that it came up right here in the proper position.
>
> **[4:07](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/using-react-icon-components?u=76281980&t=247)** And that's how you can install any icon.
>
> **[4:09](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/using-react-icon-components?u=76281980&t=249)** If you wanted to have more than one icon, then you would just sort of add comma.
>
> **[4:13](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/using-react-icon-components?u=76281980&t=253)** So, it actually makes sense to import from just one icon library, but if you want to do two then you can just copy this a couple of times or however many times you need it, and bring that into your project.
>
> **[4:25](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/using-react-icon-components?u=76281980&t=265)** So, that is awesome.
>
> **[4:27](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/using-react-icon-components?u=76281980&t=267)** And it's a great way to find, just about any icons you need are going to be in that list.
>
> **[4:33](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/using-react-icon-components?u=76281980&t=273)** So, not only can you install a library like this for icons but you can also use any other React Components that have been pre-made for you, to bring other things into your applications, a little bit more efficiently.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), module (3), import, (3), from, (2), import. (1)
> **Prerequisites:** install (6)
> **CLI Commands:** find (4), npm (1)
> **UI Navigation:** go to (2), click on (1)
> **Definitions:** means that (2), is called (1)
> **Tools:** terminal (1)
> **Speakers:** - [tutor] (1)

#### Installing Tailwind CSS in React
> [LinkedIn Learning](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=0)** - [Instructor] Tailwind CSS is a framework for building great looking sites, with a utility first approach.
>
> **[0:06](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=6)** Now this is super popular for libraries like React.
>
> **[0:09](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=9)** So let's take a look at how you go about installing it.
>
> **[0:12](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=12)** So to install Tailwind CSS is a little bit different than most libraries.
>
> **[0:16](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=16)** Part of the reason for that is that there is a problem with one of the libraries that it uses called PostCSS.
>
> **[0:23](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=23)** And right now this Create React App doesn't support PostCSS 8.
>
> **[0:28](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=28)** So, you need to do a slightly more complex method of installation.
>
> **[0:33](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=33)** And I just want to note that as of this video, this is what's happening with the library.
>
> **[0:37](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=37)** By the time you watch this video much later, it might be different.
>
> **[0:41](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=41)** So, make sure that you keep the link rate here on the slides to that page so that you can check if the installation isn't working for you, to see if they have updated things.
>
> **[0:52](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=52)** So, you're going to install a bunch of different modules, let's go ahead and copy everything.
>
> **[0:56](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=56)** There's actually more stuff to the right of this slide, but if you just triple click, it should get everything.
>
> **[1:02](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=62)** And then I'm going to come into my application and just paste all that in, now I'm installing Tailwind CSS, of course, as well as additional things to make it compatible with PostCSS 7, as you can see here, and I'm also installing a module called Autoprefixer, add a specific version, and then I'm also installing something called Tailwind CSS forms.
>
> **[1:27](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=87)** By default, when you install tailwind it doesn't come with the CSS components.
>
> **[1:32](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=92)** So we're adding that to now.
>
> **[1:33](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=93)** That's something that is not on the string if you copy it from the website.
>
> **[1:38](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=98)** So if later on the installation becomes a lot simpler you're going to need to NPM install just this additional library.
>
> **[1:46](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=106)** So, let's keep on going, let's go ahead and hit return here.
>
> **[1:49](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=109)** And it's going to take a little bit of time to do that.
>
> **[1:54](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=114)** Now because the current version of the Create React App doesn't yet support PostCSS 8, we have to do one more installation using a utility called CRACO.
>
> **[2:03](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=123)** And that stands for Create React App Configuration Override.
>
> **[2:07](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=127)** Now then we'll modify the scripts in our package.json to use that.
>
> **[2:10](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=130)** So I'm going to copy this, go back and here it looks like that other installation is done and paste this thing.
>
> **[2:17](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=137)** So, this one installed CRACO, I'm not even sure if that's how you pronounce things.
>
> **[2:22](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=142)** And in addition to this, we are going to add a few things or really modify our package.json, so that instead of using the default scripts that we have been using, we're going to use CRACO versions of them.
>
> **[2:37](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=157)** So we're going to go to package.json, and we're going to find the scripts which you can see right here, and make sure that we replace them.
>
> **[2:47](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=167)** Sometimes it tries to prep that other one.
>
> **[2:49](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=169)** So, now when you do NPM start, it's going to run CRACO start.
>
> **[2:54](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=174)** So, that's going to work.
>
> **[2:56](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=176)** There's one more thing we need to do and that's to create a config file for CRACO.
>
> **[3:00](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=180)** So I've placed it right here.
>
> **[3:02](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=182)** We're going to have to add this to a CRACO.config.js file.
>
> **[3:08](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=188)** So, let's go back.
>
> **[3:10](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=190)** And if you're used to working on the web you know that this is like so typical you always have to do a lot of installations for everything.
>
> **[3:21](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=201)** So, if this is driving you nuts, it's because that's the way it is.
>
> **[3:26](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=206)** Okay, so, we're going to create a craco.config.js file, and I'm going to paste that in there.
>
> **[3:34](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=214)** We don't need this comment right here.
>
> **[3:36](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=216)** So this is going to require the Tailwind CSS plugin as well as Autoprefixer, which were part of the installation that we did earlier.
>
> **[3:44](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=224)** All right, let's keep going, we're not quite done yet.
>
> **[3:47](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=227)** So we have to also create a config file for tailwind.
>
> **[3:50](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=230)** This is how you configure and customize Tailwind CSS.
>
> **[3:53](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=233)** So we're going to grab this and just for fun we'll do some more installations.
>
> **[3:59](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=239)** Let's paste that in, and actually this is going to initialize a file and it's going to create this tailwind config.js file.
>
> **[4:07](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=247)** We're going to modify it a little bit.
>
> **[4:09](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=249)** And this next thing is one of the reasons I love tailwinds so much.
>
> **[4:13](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=253)** One of the things that it does, is unlike something like bootstrap, that installs a ton of classes whether or not you need them, tailwind can be configured so that it removes anything you're not using, when it goes to generate the CSS for you.
>
> **[4:28](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=268)** And that's one of the advantages of using PostCSS which a tailwind CSS is actually a PostCSS plugin.
>
> **[4:34](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=274)** You normally use something like PostCSS to add prefixes for older browsers, but it does have this different library called PurgeCSS that allows you to do that.
>
> **[4:44](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=284)** So I'm going to copy this line, I'm actually going to copy all these lines right here because I'll talk about this in a minute.
>
> **[4:51](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=291)** And we're going to find a tailwind config file, and I'll just paste it right here for now.
>
> **[4:58](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=298)** And first we need this purge section, so we're going to paste that in here.
>
> **[5:03](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=303)** This is going to look for all the files of this type, JavaScript files, JSX, TS and TSX as those TypeScript files here.
>
> **[5:11](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=311)** And also the index.html, and then put them through the plugin looks like sometimes when you paste things it tends to copy whatever was in the next line.
>
> **[5:21](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=321)** So, sorry about that.
>
> **[5:23](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=323)** And if you want to add some additional files like if you had additional pages, then you would add them in here, and you can also use wild cards if you want to customize this further, right?
>
> **[5:32](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=332)** So that is going to make our output a lot smaller, and then we're going to need to, because we are using the forms plugin we're going to need to add it right there.
>
> **[5:44](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=344)** So that is our configuration file.
>
> **[5:47](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=347)** And once we do that, then we need to change our CSS file just a little bit.
>
> **[5:52](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=352)** So, because tailwind needs to import all of its different pieces, there are three different sort of sub components that tailwind is created in, and you can customize these if you want to.
>
> **[6:05](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=365)** So I'm going to copy these, and I'm going to open up the index.css file and just replace everything in here with our new content.
>
> **[6:16](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=376)** So this is the file where you would customize things like color, the grid, and everything else you would want to do with tailwind on a global sort of way because this index file, is going to be imported by your index digest file, this is the entry level for your applications.
>
> **[6:32](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=392)** So any CSS you put in here will apply to the entire application.
>
> **[6:35](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=395)** Whereas any CSS that you would put in the app desk component would just apply to that component.
>
> **[6:41](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=401)** So, that is a great place to customize things.
>
> **[6:44](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=404)** Now if you want to learn how to customize Tailwind CSS I did a fantastic course on it.
>
> **[6:48](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=408)** So, make sure you look in the library for tailwind, and let's take a look at what else we need to do.
>
> **[6:54](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=414)** So now all we have to do is modify our JSX to take advantage of the library.
>
> **[6:59](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=419)** We may need to restart things, you can see that it's not getting applied quite yet, but let's go ahead and modify our content here.
>
> **[7:08](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=428)** So, one of the first things you want to add to any tailwind sort of project is the container.
>
> **[7:14](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=434)** I mean, most of the time, this makes the content align to the grid actually creates the grid that tailwind has which is like a bootstrap grid a 12 column grid that is customizable.
>
> **[7:25](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=445)** And then usually you want to add like MX Auto, this will center the grid onscreen.
>
> **[7:30](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=450)** Otherwise everything would be left align.
>
> **[7:33](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=453)** And I'm going to add a little bit of margin to the top of the screen, so MT and then a number.
>
> **[7:38](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=458)** So I'm going to use three.
>
> **[7:40](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=460)** And then I can say I want all the fonts to have a thin look by default.
>
> **[7:45](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=465)** So let's go ahead and save that.
>
> **[7:46](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=466)** And then on this H one, I'm going to add a ClassName of text-5XL here, and then let's go ahead and save this.
>
> **[8:00](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=480)** And I can see that it's not getting applied.
>
> **[8:02](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=482)** And that means that I need to go to my process and make sure that because I created all kinds of config files, I need to go ahead and stop in and rerun it.
>
> **[8:12](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=492)** So I hit Control + C here on my terminal, and then I'm going to just run the NPM start command once again.
>
> **[8:19](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=499)** Now it's going to run CRACO start instead of the traditional NPM start that it would run before, and eventually this will update, and you'll see the styles for Tailwind CSS.
>
> **[8:31](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=511)** Now, let's go ahead and modify this a little bit more.
>
> **[8:37](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=517)** So I'm going to add a... One thing to remember is that when I use react, you don't use class, you have to use ClassName.
>
> **[8:45](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=525)** Notice that ClassName is cam low case, so capital N and this is the way that you would do things in JavaScript traditionally.
>
> **[8:52](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=532)** So, just remember that a lot the sort of HTML properties will have to be compatible with JSX, which are slightly different.
>
> **[9:01](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=541)** So like informs normally you would use a four, a four attribute for an input field if you want to tie the label to the input field, but because four means something to JavaScript you have to use HTML for, with the F being capitalized.
>
> **[9:18](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=558)** So something to remember, the ClassName here will be in line block.
>
> **[9:22](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=562)** Notice that my logo by default is sort of a block.
>
> **[9:27](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=567)** So, it puts a little bit of space after it, and puts the next thing on the new line.
>
> **[9:33](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=573)** And then I'll do text-red-400.
>
> **[9:38](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=578)** So the way that colors work in tailwind, is you specify what you want to change.
>
> **[9:43](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=583)** In this case, the text, this could be BG or something with a background.
>
> **[9:46](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=586)** If you wanted to change the background then the color name and then a strength.
>
> **[9:50](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=590)** The strength goes from like 50 then 100, and then it goes from like 100 to like 900 and anything like 500 it's usually the middle point, so, let's go ahead and save this.
>
> **[10:01](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=601)** So you can see there, and if I do like 800, it'll just be a lot darker.
>
> **[10:06](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=606)** If I do like 200, it'll just be a lot wider.
>
> **[10:10](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=610)** So we call the darker one's a shade, so anything above 500 is like a shade.
>
> **[10:15](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=615)** Anything below 500 is considered a tint kind of like you add a little bit of white to it.
>
> **[10:21](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=621)** So I think 400 looks pretty good.
>
> **[10:23](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=623)** And then let's see, we will do align top to align that icon a little bit better.
>
> **[10:31](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=631)** And now let's go ahead and make it this wider.
>
> **[10:34](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=634)** You can see that it's aligning to the grid, and it you can't really tell because there's only so much text in there but the grid is actually also centered on the layout.
>
> **[10:46](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=646)** That's the basics of Tailwind CSS, as I mentioned, I do have a course on it, and because it has that PortCSS functionality, it's really nice that it's only going to add the things that you need and you'll never have to create CSS.
>
> **[11:01](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/installing-tailwind-css-in-react?u=76281980&t=661)** So you'll never have to actually write CSS, you can, if you want to put things in index.css but the sort of cool thing about Tailwind CSS is that you end up just adding classes that modify things just directly on the components.

> [!info]- Semantic Content
>
> **Env Vars:** css (18), craco (7), npm (4), jsx (3), html (2)
> **Code Keywords:** let (15), this, (2), this. (2), case, (2), super (1)
> **CLI Commands:** make (7), npm (4), find (2)
> **File Paths:** package.json (3), craco.config.js (2), index.css (2), config.js (1), index.html (1)
> **Definitions:** is a  (4), stands for (1), means that (1)
> **Prerequisites:** install (4), configure (1)
> **UI Navigation:** go to (2)
> **Cross-References:** in the next (1)


### 2. Getting Started

#### Your first component
> [LinkedIn Learning](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=0)** - All the work that we've been doing has prepared us for building our own interface.
>
> **[0:04](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=4)** Now let's get started by putting together our first component.
>
> **[0:07](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=7)** Now you've already seen a couple of components in our application.
>
> **[0:10](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=10)** If we take a peek at the index.JS file, which is the entry point for our application, you'll notice that it doesn't start outputting HTML to our page.
>
> **[0:20](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=20)** Instead it calls a separate component called App right here.
>
> **[0:24](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=24)** It imports it from this file which then displays the information that we need right here.
>
> **[0:30](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=30)** And App.JS itself calls a different component from the React icons library.
>
> **[0:35](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=35)** And you can see how it's used in this line right here.
>
> **[0:37](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=37)** We simply call it as an HTML tag with properties.
>
> **[0:41](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=41)** This should make it pretty easy to understand how to make another component.
>
> **[0:44](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=44)** So let's go ahead and add a folder in here, in the source directory.
>
> **[0:49](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=49)** And we're going to call this components.
>
> **[0:52](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=52)** We're going to place all of our components in here.
>
> **[0:54](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=54)** The first component we'll need will be a search component.
>
> **[0:57](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=57)** So I'm going to create a new file and I'm going to call this one search.
>
> **[1:02](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=62)** And usually you capitalize the name of components.
>
> **[1:06](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=66)** It'll have a .JS extension.
>
> **[1:08](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=68)** Now in here there's a couple of ways that we could create the component.
>
> **[1:12](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=72)** We can use a function and type in the function name and then create a function just like we would in normal JavaScript.
>
> **[1:20](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=80)** But there's another way that you can do this and it's a little bit more convenient for some of the work that we'll be doing later on.
>
> **[1:26](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=86)** So we can create a function by creating a constant.
>
> **[1:31](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=91)** We'll call this search.
>
> **[1:33](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=93)** And then we'll use arrow functions instead.
>
> **[1:36](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=96)** Arrow functions are just like regular functions except that they have a little arrow which is just an equal sign plus a greater than sign.
>
> **[1:45](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=105)** And they allow you to use this section right here to pass along one or more variables.
>
> **[1:51](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=111)** And in here, since this is going to create some HTML for us, it's going to return a number of things right here.
>
> **[1:59](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=119)** So what it's going to return is some HTML and I've prepared a file here for you with all the HTML you need for this component.
>
> **[2:07](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=127)** Now this is written in JSX, so you see class name instead of the word class and we're already using an icon component called search right here and caret down.
>
> **[2:19](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=139)** So let's go ahead and copy this.
>
> **[2:22](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=142)** Switch back and we'll go ahead and paste.
>
> **[2:25](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=145)** So that's interesting.
>
> **[2:26](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=146)** We have a JavaScript function that returns some HTML looking stuff which is the language we call JSX.
>
> **[2:36](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=156)** So in addition to this, we're going to need to import the icon library for the two icons that we're using here.
>
> **[2:44](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=164)** So we'll say import and then in curly braces, we'll import BI search as well as BI caret down.
>
> **[2:53](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=173)** And this is going to come from the react icons library /BI for the name of the icons we're using.
>
> **[3:05](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=185)** And then since this is going to be used in a parent component, we're going to need to export default which means that by default, what we want to export out of this module is the search component.
>
> **[3:20](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=200)** So let's go ahead and save that.
>
> **[3:22](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=202)** And then we'll need to call this inside the app .JS component.
>
> **[3:30](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=210)** So now this is going to import and we'll give this a name locally.
>
> **[3:35](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=215)** So locally this will be called search.
>
> **[3:36](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=216)** I know this is the name that the component, of course, is called but what we call this here will be the name of the tag that we're using wherever we're calling this component.
>
> **[3:47](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=227)** So import, search from and we'll look for a component and then the name, we don't need to put the JS in here, so we'll just leave it like this.
>
> **[3:56](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=236)** And we'll save this and then we'll need to add this into our project.
>
> **[4:03](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=243)** So after this headline, we will use our new search tag.
>
> **[4:09](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=249)** We'll use the self closing version and we'll hit save.
>
> **[4:13](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=253)** Now let's see if this is showing up in our application.
>
> **[4:15](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=255)** And sure enough you can see that the search box is showing up.
>
> **[4:18](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=258)** It has the proper icon next to the search right here and it has this little caret that allows us to create a drop down whenever we get to that part.
>
> **[4:28](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/your-first-component?u=76281980&t=268)** That's pretty awesome.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (5), this. (2), interface (1), pass (1)
> **Env Vars:** html (6), jsx (2)
> **Definitions:** means that (1), is called (1), we call this (1)
> **File Paths:** index.js (1), app.js (1)
> **CLI Commands:** make (2)
> **Analogies:** just like (2)
> **Speakers:** - all (1)

#### Creating a sub-component Hooks
> [LinkedIn Learning](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/creating-a-sub-component-hooks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/creating-a-sub-component-hooks?u=76281980&t=0)** - [Tutor] So it's time for us to create another component.
>
> **[0:03](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/creating-a-sub-component-hooks?u=76281980&t=3)** I'd like to create the component that has the information for the dropdown when we click right here.
>
> **[0:08](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/creating-a-sub-component-hooks?u=76281980&t=8)** Now I could do that in a separate file like I've done this search AS component but it's really a component that's not going to be used anywhere else and it's really part of this search function.
>
> **[0:19](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/creating-a-sub-component-hooks?u=76281980&t=19)** I could optionally just create some additional code right here but this is going to be so much code that I like to put it in a separate component by itself.
>
> **[0:28](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/creating-a-sub-component-hooks?u=76281980&t=28)** So I'm going to create a const here and I'll call this drop down and I'll use the same function notation with arrow functions.
>
> **[0:39](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/creating-a-sub-component-hooks?u=76281980&t=39)** And I have the cool font that lets me use ligatures in VS code so my arrow functions look pretty awesome.
>
> **[0:45](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/creating-a-sub-component-hooks?u=76281980&t=45)** And then we're going to need a return statement with some additional HTML.
>
> **[0:51](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/creating-a-sub-component-hooks?u=76281980&t=51)** So I put that on this page for you.
>
> **[0:54](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/creating-a-sub-component-hooks?u=76281980&t=54)** Let's go ahead and grab this from here.
>
> **[0:57](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/creating-a-sub-component-hooks?u=76281980&t=57)** Now we'll go ahead and paste that.
>
> **[1:01](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/creating-a-sub-component-hooks?u=76281980&t=61)** Notice that I'm using an icon right here so I need to make sure that I call that.
>
> **[1:10](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/creating-a-sub-component-hooks?u=76281980&t=70)** And I need to make sure that I call this dropdown right underneath this button.
>
> **[1:20](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/creating-a-sub-component-hooks?u=76281980&t=80)** Cool now I get the code for the dropdown and I have all these little check boxes that I'll be programming later on.
>
> **[1:27](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/creating-a-sub-component-hooks?u=76281980&t=87)** Now to me it makes sense to keep things together that belong together and not put everything in a separate file otherwise we'll just be making sub-components and have to dig through them all over your file structure.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), const (1), let (1)
> **UI Navigation:** dropdown (3)
> **CLI Commands:** make (2)
> **Env Vars:** html (1)
> **Tools:** vs code (1)
> **Speakers:** - [tutor] (1)

#### Getting appointments and debugging
> [LinkedIn Learning](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=0)** - So let's go ahead and add another component that will allow us to add appointments into our project.
>
> **[0:06](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=6)** So to do that I'm going to go into my components sub folder and make a new file.
>
> **[0:13](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=13)** And this one's going to be called add appointment and it's going to be pretty much like the one we just made.
>
> **[0:21](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=21)** So let's go through the process again.
>
> **[0:23](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=23)** We're going to import some icons so let's go ahead and import something called BiCalendarPlus and then this will come from react icons/bi and then we'll create the constant for ad appointment using our arrow function.
>
> **[0:48](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=48)** This is going to return something.
>
> **[0:51](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=51)** So this is pretty much the structure of every component at least to begin with.
>
> **[0:55](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=55)** You don't even have to have the import.
>
> **[0:57](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=57)** So let's go ahead and save this and I'm going to go get some code for my component.
>
> **[1:05](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=65)** So this is all just a bunch of JSX code which has a lot of code for T%ailwind CSS which is what's going to make it look really nice without a lot of work.
>
> **[1:18](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=78)** So we're going to paste that in here.
>
> **[1:21](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=81)** Put that on the next line.
>
> **[1:23](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=83)** And we'll save that.
>
> **[1:26](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=86)** Let's take a look at our project so we need to import it on top of the search.
>
> **[1:31](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=91)** That means that we're going to need to go back into app.js, and I'll put this above search.
>
> **[1:36](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=96)** Actually, I need to import the component first.
>
> **[1:46](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=106)** Let's go ahead and collapse the file area here.
>
> **[1:49](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=109)** I can use the shortcut or you can use the view menu in visual studio code.
>
> **[1:55](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=115)** So I'm using command B cause I'm on a Mac but this is where it is if you want to know and you can just toggle that on and off.
>
> **[2:02](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=122)** And then once we add the appointment component we can insert it right here.
>
> **[2:09](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=129)** Put a slash right there.
>
> **[2:11](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=131)** And of course it looks like I forgot to export something.
>
> **[2:14](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=134)** This is good, this is how errors appear when you make a mistake.
>
> **[2:17](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=137)** They'll appear in a number of different places.
>
> **[2:20](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=140)** You can see them sometimes if you look at the terminal so editors don't show that, terminals show this.
>
> **[2:27](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=147)** Let me just bring it in like this editors.
>
> **[2:30](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=150)** You can see them if you take a look at the terminal but they'll also show up in the browser.
>
> **[2:35](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=155)** So sometimes it's easier to see what's going on in the browser.
>
> **[2:39](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=159)** And sometimes it's easier to just look at the terminal.
>
> **[2:42](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=162)** So let's fix that.
>
> **[2:44](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=164)** So of course, and I should have known a visual... See a code has given me sort of these little curly braces that also help me whenever I forget to do something.
>
> **[2:53](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=173)** It says it's declared, but it's never read.
>
> **[2:55](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=175)** And because of all of the tools that you installed with create react app, it's going to give you this sort of help.
>
> **[3:03](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=183)** And so that means that I need to go all the way down to the bottom and make sure that I export as the default element or the default component add appointment.
>
> **[3:18](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=198)** So in the previous video, I showed you that you can create a component that has different pieces or different sub components.
>
> **[3:26](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=206)** So this component has the search as in the dropdown component and you can export one or more components if you're going to use them in other places from the same file.
>
> **[3:36](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=216)** So by doing this export default search by default this component is going to export whatever is in this search constant which is what we're doing now for add appointment.
>
> **[3:49](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=229)** So let's go ahead and save that.
>
> **[3:51](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=231)** And it's now giving me another error that I'm not it says it can't resolve a new icon that I'm using here.
>
> **[3:59](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=239)** So it should have been a react icons and there now that works.
>
> **[4:04](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=244)** Okay, so it looks like I could use a little bit better spacing here.
>
> **[4:09](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=249)** So I'm going to go back into my app.js and just add a couple of things here.
>
> **[4:16](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=256)** I'm going to add a little bit more of a margin at the bottom of this headline.
>
> **[4:21](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=261)** Okay, that looks a little bit better.
>
> **[4:23](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=263)** And I'm going to change this file icon to a calendar.
>
> **[4:27](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=267)** So instead of BI archive, I'll use BI calendar because this sort of interface is about appointments and I think the calendar looks pretty good.
>
> **[4:37](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=277)** This particular icon library has some cool icons for adding and also deleting appointments, which we'll see actually a toggle here later on that will use that other icon as well.
>
> **[4:49](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=289)** So that is how you bring some other components and I happen to show you how you solve a few errors which always happen as you're programming things.
>
> **[5:00](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/getting-appointments-and-debugging?u=76281980&t=300)** And the nice thing is that with all the tools that we installed, if you screw up you should see a lot of different kinds of feedback in different places.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), function (1), import. (1), this. (1), interface (1)
> **CLI Commands:** make (4)
> **Tools:** terminal (3), visual studio (1)
> **UI Navigation:** toggle (2), dropdown (1)
> **File Paths:** app.js (2)
> **Env Vars:** jsx (1), css (1)
> **Definitions:** means that (2)
> **Cross-References:** previous video (1)

#### Importing JSON data as a variable
> [LinkedIn Learning](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/importing-json-data-as-a-variable?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/importing-json-data-as-a-variable?u=76281980&t=0)** - It's time to start adding some appointments.
>
> **[0:02](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/importing-json-data-as-a-variable?u=76281980&t=2)** So, I've prepared a bit of data here for you, at this URL so that we can go ahead and grab this and work with it.
>
> **[0:09](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/importing-json-data-as-a-variable?u=76281980&t=9)** So, I'm going to go and select all this and I'm going to place it in this source folder.
>
> **[0:15](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/importing-json-data-as-a-variable?u=76281980&t=15)** So, if I insert a file here, I'm going to call it data.JSON and I paste all of my JSON code in there.
>
> **[0:23](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/importing-json-data-as-a-variable?u=76281980&t=23)** Then we can easily import that into App.JS just by adding an import statement.
>
> **[0:29](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/importing-json-data-as-a-variable?u=76281980&t=29)** And when we import it, we want it to have a variable name.
>
> **[0:32](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/importing-json-data-as-a-variable?u=76281980&t=32)** So, that will be appointmentList.
>
> **[0:37](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/importing-json-data-as-a-variable?u=76281980&t=37)** And it's going to be imported from data.JSON.
>
> **[0:41](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/importing-json-data-as-a-variable?u=76281980&t=41)** So, it's in the same folder as the current file.
>
> **[0:44](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/importing-json-data-as-a-variable?u=76281980&t=44)** So, I'm going to save that.
>
> **[0:46](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/importing-json-data-as-a-variable?u=76281980&t=46)** And then, once we have this information, then we can go ahead and add our list of items.
>
> **[0:53](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/importing-json-data-as-a-variable?u=76281980&t=53)** So, we're going to create an unordered list.
>
> **[0:57](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/importing-json-data-as-a-variable?u=76281980&t=57)** And this unordered list, I'm going to add some code here for Tailwind CSS.
>
> **[1:02](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/importing-json-data-as-a-variable?u=76281980&t=62)** So, this is going to have a class name and it's going to say, divide, because I want dividers in between the different items vertically.
>
> **[1:13](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/importing-json-data-as-a-variable?u=76281980&t=73)** And that you can specify the color, so I'll do gray 200 here, right.
>
> **[1:18](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/importing-json-data-as-a-variable?u=76281980&t=78)** And then, what we can do is use that appointmentList variable.
>
> **[1:23](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/importing-json-data-as-a-variable?u=76281980&t=83)** And we're going to use JavaScript's map function to create a temporary variable called appointment for each one of those items as they come in and then we'll use an arrow function.
>
> **[1:34](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/importing-json-data-as-a-variable?u=76281980&t=94)** And this time we're going to add a parenthesis here, which will be what gets returned from this list and placed in here instead of this expression.
>
> **[1:46](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/importing-json-data-as-a-variable?u=76281980&t=106)** So, let's clean up some of the spacing right here and I have some code right here that I want to use in there.
>
> **[1:52](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/importing-json-data-as-a-variable?u=76281980&t=112)** So, you don't want to be type in a bunch of really boring code.
>
> **[1:56](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/importing-json-data-as-a-variable?u=76281980&t=116)** So, I'm just going to paste that in there.
>
> **[1:58](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/importing-json-data-as-a-variable?u=76281980&t=118)** Looks like I'm importing a new icon in here as well.
>
> **[2:01](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/importing-json-data-as-a-variable?u=76281980&t=121)** So, I'll make sure that I add it right there.
>
> **[2:04](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/importing-json-data-as-a-variable?u=76281980&t=124)** And when I save that, you can see that all those snippets are repeated with that bar in between, or you can see the divider is in between but right now it's not showing you any of the sort of individual data for each item.
>
> **[2:20](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/importing-json-data-as-a-variable?u=76281980&t=140)** So, what I'll need to do is use an expression to print out what's in right now, this temporary variable called appointment.
>
> **[2:29](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/importing-json-data-as-a-variable?u=76281980&t=149)** So, instead of just doing it like this, I'm putting the petName, I can say appointment.petName and I have to use the curly braces so that it's an expression.
>
> **[2:39](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/importing-json-data-as-a-variable?u=76281980&t=159)** And now, you can see the names of all the pets.
>
> **[2:42](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/importing-json-data-as-a-variable?u=76281980&t=162)** Let's go ahead and hide this sidebar here.
>
> **[2:44](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/importing-json-data-as-a-variable?u=76281980&t=164)** So, we can see more code.
>
> **[2:46](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/importing-json-data-as-a-variable?u=76281980&t=166)** So, I just need to keep on doing that with all of the other ones.
>
> **[2:49](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/importing-json-data-as-a-variable?u=76281980&t=169)** So, curly brace, appointment.
>
> **[2:53](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/importing-json-data-as-a-variable?u=76281980&t=173)** So, I see, do add appointment and let's just go ahead and make this bigger so we can see everything.
>
> **[2:58](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/importing-json-data-as-a-variable?u=76281980&t=178)** And do it to all of them.
>
> **[3:08](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/importing-json-data-as-a-variable?u=76281980&t=188)** Let's see if we got all of them.
>
> **[3:11](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/importing-json-data-as-a-variable?u=76281980&t=191)** And this is looking great.
>
> **[3:14](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/importing-json-data-as-a-variable?u=76281980&t=194)** Super. So, you can see that bringing in some data from a JSON file is super easy.
>
> **[3:19](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/importing-json-data-as-a-variable?u=76281980&t=199)** All you have to do is use an import statement.
>
> **[3:22](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/importing-json-data-as-a-variable?u=76281980&t=202)** It can go straight into a variable that then you can use, using regular JavaScript to map a series of HTML or JSX HTML into the variable and display our list pretty easily.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), function (2), super (2), this, (1)
> **Env Vars:** json (4), html (2), url (1), css (1), jsx (1)
> **Code Identifiers:** appointmentlist (2), petname (2)
> **File Paths:** data.json (2), app.js (1)
> **CLI Commands:** make (2)
> **Speakers:** - it (1)


### 3. Sort and Search

#### Passing data to a component
> [LinkedIn Learning](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-data-to-a-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-data-to-a-component?u=76281980&t=0)** - Components need to do more than just displaying content.
>
> **[0:03](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-data-to-a-component?u=76281980&t=3)** So let's take a look at how we can pass information down to a component.
>
> **[0:08](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-data-to-a-component?u=76281980&t=8)** And to do that I'm going to create another new component that's going to have sort of the information for each one of these items right here.
>
> **[0:14](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-data-to-a-component?u=76281980&t=14)** So, I'm going to make this bigger and I'm going to grab all this code right here and I'm going to put that inside a component.
>
> **[0:25](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-data-to-a-component?u=76281980&t=25)** So I'll create a new file right here.
>
> **[0:28](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-data-to-a-component?u=76281980&t=28)** I'll call this appointment info and I'll just paste all this right now but I also need to create this component properly.
>
> **[0:43](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-data-to-a-component?u=76281980&t=43)** So this will be const appointment info
>
> **[0:52](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-data-to-a-component?u=76281980&t=52)** and using the arrow function, we'll use a return statement and that's where all of our code will go.
>
> **[1:01](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-data-to-a-component?u=76281980&t=61)** And we need to export as a default the appointment info.
>
> **[1:07](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-data-to-a-component?u=76281980&t=67)** We're using the trash icon here so, let's go ahead and go back into our component.
>
> **[1:14](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-data-to-a-component?u=76281980&t=74)** And I'm going to copy this line from here but I'll delete this BI trash from here 'cause it's no longer used inside the app.js file.
>
> **[1:23](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-data-to-a-component?u=76281980&t=83)** So, go back into appointment info and I'll paste that in there.
>
> **[1:27](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-data-to-a-component?u=76281980&t=87)** And of course this one doesn't use the calendar icon, just the trash icon.
>
> **[1:33](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-data-to-a-component?u=76281980&t=93)** And now, as you can see it doesn't know where to get this appointment variable from.
>
> **[1:40](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-data-to-a-component?u=76281980&t=100)** So we're going to need to pass that down into this component and it goes right here.
>
> **[1:46](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-data-to-a-component?u=76281980&t=106)** So, all we have to do here is say that this is going to receive an appointment variable from the parent component, right?
>
> **[1:53](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-data-to-a-component?u=76281980&t=113)** And then everything looks good on this sub component.
>
> **[1:56](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-data-to-a-component?u=76281980&t=116)** So let's go ahead and fix up what's going to be happening in app.js.
>
> **[2:01](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-data-to-a-component?u=76281980&t=121)** So here, let's go ahead and save this for now.
>
> **[2:05](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-data-to-a-component?u=76281980&t=125)** We need to bring in the new component.
>
> **[2:15](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-data-to-a-component?u=76281980&t=135)** And once we do that we can use that in this section right here.
>
> **[2:19](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-data-to-a-component?u=76281980&t=139)** So this is going to use appointment info and it's going to need a couple of things.
>
> **[2:27](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-data-to-a-component?u=76281980&t=147)** And I didn't do this one earlier but every time you use, you loop through a series of elements, you should use a key.
>
> **[2:35](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-data-to-a-component?u=76281980&t=155)** And sometimes the compiler will complain if you don't use one.
>
> **[2:39](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-data-to-a-component?u=76281980&t=159)** So, for the key, my appointments have an ID field.
>
> **[2:45](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-data-to-a-component?u=76281980&t=165)** So I'm going to use that for the key and let's see, oh, let's go ahead and close that out.
>
> **[2:52](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-data-to-a-component?u=76281980&t=172)** And then we are going to pass to a variable called appointment, the local variable called appointment.
>
> **[3:00](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-data-to-a-component?u=76281980&t=180)** So we're going to pass down this appointment right here to our component and it's going to receive it in an appointment variable.
>
> **[3:09](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-data-to-a-component?u=76281980&t=189)** So let's save that.
>
> **[3:10](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-data-to-a-component?u=76281980&t=190)** Take a look at our file.
>
> **[3:12](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-data-to-a-component?u=76281980&t=192)** It should look exactly the same except that now we are passing along the information through this appointment variable, receiving it into this variable right here.
>
> **[3:24](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-data-to-a-component?u=76281980&t=204)** This by the way is called de-structuring because you can pass along the different variables by putting them in this object and receiving them.
>
> **[3:33](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-data-to-a-component?u=76281980&t=213)** So if you wanted to use something else here you could pass it along as well.
>
> **[3:37](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-data-to-a-component?u=76281980&t=217)** And you can pass events as well from one component to another by using this section right here, which makes it easier to break our components down into pieces, especially when working with things like loop which would cause our application to just look a lot bigger than it needs to.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), pass (7), const (1), function (1), delete (1)
> **File Paths:** app.js (2)
> **CLI Commands:** make (1)
> **Definitions:** is called (1)
> **Speakers:** - components (1)

#### The useState Hook and conditional classes
> [LinkedIn Learning](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=0)** - The modern way to work with React projects is to use a feature called Hooks.
>
> **[0:05](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=5)** Hooks allow you to use state and other react features without having to write classes.
>
> **[0:10](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=10)** Let's go ahead and work on creating a toggle in this component called AddAppointment to turn on and off the showing of this form because we don't really need to see that input form unless somebody is ready to add an appointment.
>
> **[0:23](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=23)** So to do that, I'm going to need to import this feature into this component.
>
> **[0:28](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=28)** So I'll have to say 'import' and I'm going to import useState from React, right?
>
> **[0:35](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=35)** And now I'm going to create a state.
>
> **[0:38](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=38)** This component is going to keep track of a variable and I'm going to call this variable called toggleForm.
>
> **[0:45](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=45)** And this is what's going to allow our application to show or hide the rest of the form.
>
> **[0:52](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=52)** So the way that useState works is you create the name of the variable, and then you also create something that modifies that variable.
>
> **[1:02](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=62)** So it's essentially like a function that you can call whenever you want to modify that variable.
>
> **[1:07](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=67)** And it's normally called the same thing as the variable name, usually with the word 'set' at the front.
>
> **[1:15](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=75)** I'm going to ask that to useState.
>
> **[1:18](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=78)** And in here I can ask it to be initialized with a certain value.
>
> **[1:23](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=83)** So I'll initialize it with false because the form should not be displaying by default.
>
> **[1:29](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=89)** So if I want to use this, what I'm going to need to do is to grab the part that I want to show or hide which will be everything except for this button.
>
> **[1:39](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=99)** And I'm just going to grab all this code here, except for that last div.
>
> **[1:45](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=105)** So we have a div that has everything including the button and this other piece.
>
> **[1:50](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=110)** And then I'm going to create a fragment by putting these curly braces and asking to check for the toggle form variable and if it exists, go ahead and display our div.
>
> **[2:05](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=125)** So I'll just paste all that other content in there and I'm going to save that.
>
> **[2:14](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=134)** And it looks like I misspelled, for some reason it automatically typed userState here, so that's not right, it should be useState.
>
> **[2:23](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=143)** All right, let's try that out.
>
> **[2:24](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=144)** So now you can see that my form is no longer showing because I'm checking that variable and seeing if it exists.
>
> **[2:34](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=154)** And if I set this value to true you'll see that the form will show.
>
> **[2:38](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=158)** So I can toggle it by turning that variable on and off.
>
> **[2:43](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=163)** Definitely don't want to do this with code.
>
> **[2:45](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=165)** So we'll add some other things in here to make the button go ahead and turn this item on and off.
>
> **[2:54](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=174)** So to do that, we'll need to create an event on the buttons.
>
> **[2:57](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=177)** I'm going to put this class name on the next line and I'll say onClick.
>
> **[3:03](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=183)** So it's sort of like a JavaScript onClick event here in JSX.
>
> **[3:07](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=187)** And then whenever I click on this button it's going to execute a arrow function.
>
> **[3:14](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=194)** And this arrow function is going to be the one that uses the setToggleForm method.
>
> **[3:20](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=200)** And it's going to set it to the opposite of whatever it currently is.
>
> **[3:27](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=207)** And take a look at our project here.
>
> **[3:35](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=215)** And I forgot to put the little arrow here on the arrow function.
>
> **[3:39](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=219)** Sorry about that.
>
> **[3:40](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=220)** All right, so now it's looking good, and if I click on this, it should show or hide the form.
>
> **[3:48](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=228)** Now, whenever the form is showing, this sort of bottom section looks good, but whenever the form is not showing, it looks sort of weird that I don't have rounded edges.
>
> **[4:00](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=240)** So this should look more like a regular button.
>
> **[4:03](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=243)** So to do that, I'm going to modify the way that I'm outputting these classes here.
>
> **[4:07](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=247)** And it's going to be simpler than it seems.
>
> **[4:11](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=251)** What I'll do is I will grab all of these classes, and here's the one that's actually making the rounded edge have sort of a border radius.
>
> **[4:25](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=265)** Now, if I modify that to just be a rounded-md, then it would be always rounded, but then whenever you show the form, this would look weird.
>
> **[4:32](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=272)** So I want it to be rounded-t sometimes and just rounded-md some other times.
>
> **[4:38](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=278)** So I'm going to grab all this and convert it into a JavaScript expression.
>
> **[4:45](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=285)** So I'm going to use the tick marks right here and I'll paste all that code.
>
> **[4:51](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=291)** And actually this needs to all be an expression.
>
> **[4:54](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=294)** So before I do that, I'm going to type in an expression in here, then use the tick marks and paste that as text.
>
> **[5:03](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=303)** And then in here, I'm going to use a turnery statement.
>
> **[5:07](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=307)** So I'm going to say check the value of toggle form.
>
> **[5:14](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=314)** And if it happens to be true, then I want to go ahead and output rounded-t-md, otherwise, going to output rounded-md.
>
> **[5:26](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=326)** All right let's see if that worked.
>
> **[5:30](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=330)** And you can see now if I click it has the rounded edges, and if I click again, it has the sort of only the top is round edges.
>
> **[5:41](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=341)** So by importing this useState feature we can track the value of an element and modify our code so that it can do things when that element is true.
>
> **[5:52](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/the-usestate-hook-and-conditional-classes?u=76281980&t=352)** That's perfect for toggling things like the form and our content.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), let (3), this, (2), default. (1)
> **Code Identifiers:** usestate (5), onclick (2), toggleform (1), userstate (1), settoggleform (1)
> **UI Navigation:** toggle (4), click on (2)
> **CLI Commands:** make (1)
> **Env Vars:** jsx (1)
> **Speakers:** - the (1)

#### Passing state and hiding components
> [LinkedIn Learning](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-state-and-hiding-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-state-and-hiding-components?u=76281980&t=0)** - [Instructor] So let's work on the toggle that's going to turn on and off this extra dropdown whenever we specify how things should be sorted.
>
> **[0:09](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-state-and-hiding-components?u=76281980&t=9)** So, it sounds like it should be pretty similar to Add Appointment and it is, but there are some interesting differences right here.
>
> **[0:17](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-state-and-hiding-components?u=76281980&t=17)** So, it's going to seem pretty similar at least.
>
> **[0:20](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-state-and-hiding-components?u=76281980&t=20)** Let's go ahead and import state.
>
> **[0:23](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-state-and-hiding-components?u=76281980&t=23)** So, useState from react, and that means that we can useState in any of these two different components.
>
> **[0:32](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-state-and-hiding-components?u=76281980&t=32)** So, we have two components here and what we want to do is actually pass information about the state from this main component into this sub-component.
>
> **[0:42](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-state-and-hiding-components?u=76281980&t=42)** So, to do that, we're going to create some state variables here.
>
> **[0:47](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-state-and-hiding-components?u=76281980&t=47)** So, we'll say toggleSort and setToggleSort.
>
> **[0:53](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-state-and-hiding-components?u=76281980&t=53)** So, that's how we're going to update things.
>
> **[0:55](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-state-and-hiding-components?u=76281980&t=55)** And we'll ask it to useState, and we want this one, like the previous one to be set to false by default, so it doesn't show up.
>
> **[1:03](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-state-and-hiding-components?u=76281980&t=63)** All right.
>
> **[1:04](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-state-and-hiding-components?u=76281980&t=64)** So, in a similar fashion whenever we get to the button, which is right here, we can create an event and that event will be an expression with an arrow function here.
>
> **[1:17](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-state-and-hiding-components?u=76281980&t=77)** And what it's going to do is setToggleSort.
>
> **[1:21](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-state-and-hiding-components?u=76281980&t=81)** So, this is going to be what changes that variable to the opposite of whatever it normally is.
>
> **[1:26](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-state-and-hiding-components?u=76281980&t=86)** Now, in order to get this to work in the sub-component, I need to make sure that I pass that information down.
>
> **[1:32](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-state-and-hiding-components?u=76281980&t=92)** I'm going to pass it along in a variable called toggle, and this is going to receive the toggleSort variable, right?
>
> **[1:41](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-state-and-hiding-components?u=76281980&t=101)** So, now this dropdown needs to receive that information, and I added it as I mentioned to a variable called toggle right here.
>
> **[1:52](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-state-and-hiding-components?u=76281980&t=112)** Now, that it has it, we need to go ahead and show and hide this data.
>
> **[1:57](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-state-and-hiding-components?u=76281980&t=117)** And the way that you can do that is by actually returning null, if you don't want to show the component and then returning the regular component, if you do.
>
> **[2:08](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-state-and-hiding-components?u=76281980&t=128)** So, this is sort of interesting.
>
> **[2:10](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-state-and-hiding-components?u=76281980&t=130)** You can say, if toggle is false then I want you to return null.
>
> **[2:18](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-state-and-hiding-components?u=76281980&t=138)** And so if the toggle is false, so it's going to ignore any of the other code, and if it's true, then it'll sort of not run this and just run whatever is in here.
>
> **[2:31](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-state-and-hiding-components?u=76281980&t=151)** So, let's take a peek, and, of course, I made a mistake somewhere.
>
> **[2:35](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-state-and-hiding-components?u=76281980&t=155)** It's like I forgot the equal sign on the onClick, a method down here.
>
> **[2:40](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-state-and-hiding-components?u=76281980&t=160)** So, onClick.
>
> **[2:43](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-state-and-hiding-components?u=76281980&t=163)** Look, it's even telling me and I forgot that equal sign right there.
>
> **[2:47](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-state-and-hiding-components?u=76281980&t=167)** So now, if we click on this, you can see the toggle and if we click it off, you won't even see it.
>
> **[2:55](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-state-and-hiding-components?u=76281980&t=175)** And the nice thing is that we're not just showing it and hiding it, we're actually not displaying it at all.
>
> **[3:00](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-state-and-hiding-components?u=76281980&t=180)** It does not exist when this variable is false.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), pass (3), default, (1), function (1), this, (1)
> **Code Identifiers:** usestate (3), togglesort (2), settogglesort (2), onclick (2)
> **UI Navigation:** toggle (6), dropdown (2), click on (1)
> **Analogies:** similar to (1), it's like (1)
> **CLI Commands:** make (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)


### 4. Mutating Data

#### useEffect and useCallback Hooks
> [LinkedIn Learning](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=0)** - [Instructor] Normally your data wouldn't be coming from your own project.
>
> **[0:04](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=4)** You would be checking this data that JSON file usually from an API, like GraphQL or your own REST API.
>
> **[0:13](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=13)** So to simulate that we're going to take this data with our JSON file.
>
> **[0:16](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=16)** And let me make this bigger because this is probably going to crash our application.
>
> **[0:21](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=21)** And we're going to put it in the public folder.
>
> **[0:23](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=23)** That means that it will export with our project and be available as a URL.
>
> **[0:28](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=28)** So this is similar to what would happen if you were getting this data from an API.
>
> **[0:33](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=33)** So in order to get that to work within our project we're going to have to use a few other hooks in our React application.
>
> **[0:41](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=41)** And the hooks that we have to use will need to be imported.
>
> **[0:45](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=45)** So we will import three different hooks into this project.
>
> **[0:50](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=50)** We'll start with useState, which we've already seen.
>
> **[0:53](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=53)** and then also work with useEffect and another one called useCallback.
>
> **[1:02](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=62)** And these will get imported from React.
>
> **[1:06](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=66)** Now useEffect lets you perform what are called side-effects and function components.
>
> **[1:12](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=72)** I'm not crazy about that name because I don't think it's very descriptive.
>
> **[1:15](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=75)** But if you are familiar with the way that React life cycle methods used to work.
>
> **[1:21](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=81)** You can think of useEffect as the component did mount, component did update and component will amount.
>
> **[1:27](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=87)** Now this is perfect for handling data searching operations and manually changing the DOM when certain components are a result of these operations.
>
> **[1:37](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=97)** So this is how we're going to import our content from the state of that JSON file.
>
> **[1:43](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=103)** So we won't need to do it like this anymore, we'll delete that out of there.
>
> **[1:50](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=110)** And we'll start by creating useState variables for our appointment list now.
>
> **[1:57](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=117)** And we'll create the set appointment list so that we can create it if we need to.
>
> **[2:02](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=122)** This is going to useState and it will be initialized to an empty array.
>
> **[2:10](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=130)** All right, so let's go ahead and get our data.
>
> **[2:12](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=132)** For doing that I'm going to create a function called fetchData and this is going to use the callback effect.
>
> **[2:23](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=143)** We'll use an arrow function here and now we can use JavaScript's fetch API which will allow us to retrieve an element either from a local file or from a server.
>
> **[2:36](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=156)** So here we'll use the fetch method and we're going to retrieve the data, that JSON file.
>
> **[2:44](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=164)** And notice that it looks like I'm asking for this data to be in the same folder as my current file, but it really isn't.
>
> **[2:51](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=171)** It's instead in the public folder since we moved it there.
>
> **[2:56](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=176)** Now, as I mentioned anything in the public folder will just appear at the same level as your application once it has been pushed up to a server.
>
> **[3:05](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=185)** And when you see it in preview it's automatically taking care of that for you.
>
> **[3:10](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=190)** So to React or to JavaScript and the browser the data that JSON file will just be in the same directory as everything else.
>
> **[3:19](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=199)** All right, so now we need to take care of getting the data.
>
> **[3:23](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=203)** So we'll then issue a promise and say that our data will be retrieved.
>
> **[3:28](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=208)** And then we'll say that we will receive a response from the server we are asking the data from.
>
> **[3:35](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=215)** This case is just going to be our file directory.
>
> **[3:38](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=218)** And then we'll use an arrow function to take that response from the server and convert it to JSON.
>
> **[3:46](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=226)** Because when we receive that data normally it'll just come back as text.
>
> **[3:52](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=232)** Then we'll use another promise and we'll create a temporary variable called data, where we receive all the data.
>
> **[3:58](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=238)** And then in here we will use the set appointment list method that we just created and pass it along the process data that we receive from the server.
>
> **[4:07](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=247)** Now, optionally here I can pass along some variables that I would track although I'm not going to do any of them for this project.
>
> **[4:17](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=257)** So we're retrieving that data and asking useCallback to monitor any changes that happen to that data.
>
> **[4:23](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=263)** So this is actually perfect for retrieving data from a fetch command in JavaScript.
>
> **[4:28](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=268)** But we're going to work with useEffect to make sure that it is tracking the data and any changes to the data as it comes in.
>
> **[4:36](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=276)** And this is how you would actually work with a traditional API.
>
> **[4:40](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=280)** Now you can issue a more complex fetch command here and also work with posting and deleting items from your data if you want to.
>
> **[4:49](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=289)** If you want to take a look at how that works I have another course on using React with GraphQL which will show you how to handle those things from a real GraphQL server.
>
> **[5:01](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=301)** So make sure you take a look at that course and look for it in the library under GraphQL.
>
> **[5:06](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=306)** All right, so let's finish this up.
>
> **[5:08](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=308)** So now we will call useEffect here.
>
> **[5:11](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=311)** So effect is supposed to be something like a side effect that your application doesn't normally worry about.
>
> **[5:18](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=318)** So this is sort of manually controlling React a little bit more.
>
> **[5:22](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=322)** And so what we'll do in here is we will issue the fetchData method that we created earlier on.
>
> **[5:30](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=330)** And then we'll ask useEffect to track the fetching of data.
>
> **[5:35](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=335)** So if the data changes for some reason, useEffect we'll keep track of it and update our application automatically.
>
> **[5:42](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=342)** And this needs to be an arrow function right here, lets go ahead and save this.
>
> **[5:46](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=346)** And hopefully if we did everything correctly, which doesn't always happen it would have looked great.
>
> **[5:53](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=353)** So it looks like I need to make a couple of small changes here, I'll add a semi-colon here.
>
> **[6:00](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=360)** So sometimes when you do this because it's got to fetch some data from the server, you have to do a refresh.
>
> **[6:05](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=365)** So once you do a refresh it should show your data just like it used to be.
>
> **[6:09](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/useeffect-and-usecallback-hooks?u=76281980&t=369)** Except that now it is being fetched properly from a fetch command and also monitored for changes using useEffect and useCallback.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), let (3), public (3), pass (2), delete (1)
> **Code Identifiers:** useeffect (8), usestate (3), usecallback (3), fetchdata (2)
> **Env Vars:** json (6), api (5), rest (1), url (1), dom (1)
> **CLI Commands:** make (4)
> **Analogies:** similar to (1), just like (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Deleting records
> [LinkedIn Learning](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/deleting-records?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/deleting-records?u=76281980&t=0)** - [Instructor] Let's go ahead and add the functionality to delete these items.
>
> **[0:04](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/deleting-records?u=76281980&t=4)** So in order to do that, I'm going to need to modify this appointment info and add a method that takes care of that.
>
> **[0:11](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/deleting-records?u=76281980&t=11)** So right here, I'm going to say, whenever somebody clicks on this item then I'm going to execute an expression here.
>
> **[0:24](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/deleting-records?u=76281980&t=24)** This is going to create an arrow function that calls this new method that I'm going to create called onDeleteAppointment and it's going to pass along the appointment ID.
>
> **[0:38](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/deleting-records?u=76281980&t=38)** So sometimes you create things that live within the different components.
>
> **[0:43](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/deleting-records?u=76281980&t=43)** So for example, when we did the toggling, the parent component didn't need to know about toggling something on and off inside a component but sometimes you do want to communicate with the parent component.
>
> **[0:54](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/deleting-records?u=76281980&t=54)** In this case, we're going to be changing the data itself.
>
> **[0:57](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/deleting-records?u=76281980&t=57)** So the parent component is going to manage all that data and we'll need to pass this along.
>
> **[1:03](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/deleting-records?u=76281980&t=63)** Now that means that we will need to put it in here as well so that it knows to send it back up to the parent component and let's go ahead and save that and then we'll go to the parent component and here's a place where we're calling the appointment list and so what we'll do is go ahead and pass along or really in this case, receive that on the lead appointment method and once again, it's going to be an expression.
>
> **[1:33](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/deleting-records?u=76281980&t=93)** Now this is going to be a little bit complicated.
>
> **[1:35](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/deleting-records?u=76281980&t=95)** We could create a separate function to handle this but it's short enough that we can take care of it here.
>
> **[1:41](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/deleting-records?u=76281980&t=101)** So whenever this event triggers, we're going to receive an appointment ID and then we will create an arrow function.
>
> **[1:52](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/deleting-records?u=76281980&t=112)** This is going to use our set appointment list method.
>
> **[1:57](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/deleting-records?u=76281980&t=117)** That is part of the state management.
>
> **[1:59](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/deleting-records?u=76281980&t=119)** So when you create useState, you create this method called set appointment list and that's what we're using here and what we'll do is we will take the appointment list, the current one and then use the JavaScript filter method to remove any items that match the ID that we get past.
>
> **[2:22](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/deleting-records?u=76281980&t=142)** So we will receive that into a temporary variable called appointment and then make sure that the appointment ID matches the one that we received whenever somebody clicks on that element.
>
> **[2:40](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/deleting-records?u=76281980&t=160)** Okay, let's see, we can break this down.
>
> **[2:44](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/deleting-records?u=76281980&t=164)** We'll just do it right here just to make it fit a little bit better on our screen.
>
> **[2:50](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/deleting-records?u=76281980&t=170)** All right, so let's check to see if that's working.
>
> **[2:52](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/deleting-records?u=76281980&t=172)** So if we take a look at our list, we should be able to click on any one of these and it will remove the data from our list.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), function (3), pass (3), case, (2), delete (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** ondeleteappointment (1), usestate (1)
> **UI Navigation:** go to (1), click on (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Searching with a filtered array
> [LinkedIn Learning](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/searching-with-a-filtered-array?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/searching-with-a-filtered-array?u=76281980&t=0)** - [Instructor] Let's take a look at how we might code some search functionality into our component.
>
> **[0:04](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/searching-with-a-filtered-array?u=76281980&t=4)** So I'm going to start with the search component and what I need to do here is trigger an event, when somebody types something into the search box, which is right here.
>
> **[0:13](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/searching-with-a-filtered-array?u=76281980&t=13)** What I'll do is create an onChange event.
>
> **[0:16](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/searching-with-a-filtered-array?u=76281980&t=16)** And this is going to have an event variable that will get created for us based on what happens when somebody types in something, and that's going to trigger this arrow function.
>
> **[0:30](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/searching-with-a-filtered-array?u=76281980&t=30)** And then we're going to trigger an event which will appear on the parent component called onQueryChange.
>
> **[0:36](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/searching-with-a-filtered-array?u=76281980&t=36)** That event is going to get past the target.value here, which means that it will get whatever it is in this input field.
>
> **[0:48](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/searching-with-a-filtered-array?u=76281980&t=48)** All right, so that means that we're going to need, eventually, once that gets modified, we'll need to change or make sure that the value gets tracked also right here.
>
> **[0:59](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/searching-with-a-filtered-array?u=76281980&t=59)** So there's going to be some two way communication happening between this search module and the parent component.
>
> **[1:06](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/searching-with-a-filtered-array?u=76281980&t=66)** Whatever somebody types in this search is going to affect the larger app component.
>
> **[1:11](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/searching-with-a-filtered-array?u=76281980&t=71)** So that means that we need to pass that along.
>
> **[1:15](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/searching-with-a-filtered-array?u=76281980&t=75)** And so this right here, we'll see query and then also expect an onQuery event or onQueryChange event to come in.
>
> **[1:26](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/searching-with-a-filtered-array?u=76281980&t=86)** All right, so let's go and work with the app now.
>
> **[1:30](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/searching-with-a-filtered-array?u=76281980&t=90)** So here, we're going to need to create another piece of state for the query information.
>
> **[1:37](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/searching-with-a-filtered-array?u=76281980&t=97)** So I'll take the query and I'm going to call the modifier setQuery here and this will be useState.
>
> **[1:46](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/searching-with-a-filtered-array?u=76281980&t=106)** I'll initialize that to an empty string.
>
> **[1:49](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/searching-with-a-filtered-array?u=76281980&t=109)** Now I can create a place for my query to go to my component and then my onQueryChange event to be trapped in this parent component.
>
> **[1:58](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/searching-with-a-filtered-array?u=76281980&t=118)** So I'll say query will get passed along our local query variable here, and then onQueryChange, It's going to receive something from the event and then use the setQuery method and pass along what we receive.
>
> **[2:24](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/searching-with-a-filtered-array?u=76281980&t=144)** So that's great.
>
> **[2:26](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/searching-with-a-filtered-array?u=76281980&t=146)** And what we want to do now is make sure that we modify the array that has the list of items and take into consideration the changes that happened to this input field that is going to trigger this onQueryChange event.
>
> **[2:43](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/searching-with-a-filtered-array?u=76281980&t=163)** However, we don't want to touch the original array because if somebody types something into our query field and that's because we want to limit just the display of what's shown on screen and not the actual array.
>
> **[2:58](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/searching-with-a-filtered-array?u=76281980&t=178)** So we're going to create a separate array I'll call it filtered appointments and this is going to be equal to the appointmentList, and then we're going to filter this so that it only shows the ones that are affected by the query.
>
> **[3:18](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/searching-with-a-filtered-array?u=76281980&t=198)** So here, we're going to create a temporary item variable and then we are going to return and we're going to go through the different fields.
>
> **[3:29](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/searching-with-a-filtered-array?u=76281980&t=209)** So for each item, we're going to check each of the fields that we're interested in searching through.
>
> **[3:34](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/searching-with-a-filtered-array?u=76281980&t=214)** So return, item, petName, to make sure that it doesn't care about uppercase and lowercase, I'll convert the petName to lowercase using a JavaScript function.
>
> **[3:51](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/searching-with-a-filtered-array?u=76281980&t=231)** And we'll use the includes method from JavaScript to also take a look at the query and compare our petName to the query, also converted to lowercase just in case.
>
> **[4:06](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/searching-with-a-filtered-array?u=76281980&t=246)** All right, we want to check more than just one field so I'm going to do the same thing for the petName, ownerName and aptNotes.
>
> **[4:20](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/searching-with-a-filtered-array?u=76281980&t=260)** This last one is not going to need that that double pipe, which means or so we're going to check if any of these things are true, then it's going to return that into this new filter at appointments variable.
>
> **[4:33](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/searching-with-a-filtered-array?u=76281980&t=273)** And this should be here includes, not icludes.
>
> **[4:37](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/searching-with-a-filtered-array?u=76281980&t=277)** All right, so now what we can do is whenever we are mapping this appointmentList, instead of using that one, we're going to map the filteredAppointments and that's what's going to show on screen, our original variable will be untouched and now we can type in something in here.
>
> **[4:55](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/searching-with-a-filtered-array?u=76281980&t=295)** So if we type cat or dog, or even I know there's a fish or two in here, you can type that in and it's going to quickly search that giving you the results on this screen right here.

> [!info]- Semantic Content
>
> **Code Identifiers:** onquerychange (5), petname (4), setquery (2), appointmentlist (2), onchange (1)
> **Code Keywords:** let (2), function (2), pass (2), module (1), return, (1)
> **CLI Commands:** make (3), cat (1)
> **Definitions:** means that (3)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Setting up a sort
> [LinkedIn Learning](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/setting-up-a-sort?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/setting-up-a-sort?u=76281980&t=0)** - [Instructor] It's time to add sorting to our application.
>
> **[0:03](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/setting-up-a-sort?u=76281980&t=3)** In this video, I'm going to show you how to actually create the sorting algorithm and then in the next video, I'll show you how to program this interface right here.
>
> **[0:11](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/setting-up-a-sort?u=76281980&t=11)** So I'm going to get started by working with the App.js module and I'm going to need a couple of other states.
>
> **[0:19](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/setting-up-a-sort?u=76281980&t=19)** So we'll create a sortBy state and of course, we'll need a setSortBy method up here.
>
> **[0:29](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/setting-up-a-sort?u=76281980&t=29)** This is going to once again useState and I'm going to initialize that by petName.
>
> **[0:35](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/setting-up-a-sort?u=76281980&t=35)** So by default, it's going to sort things by petName.
>
> **[0:39](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/setting-up-a-sort?u=76281980&t=39)** Next, I'm going to create an orderBy state and then I'll create a setOrderBy method right here and then this will be initialized to ascending, so ascending order.
>
> **[0:54](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/setting-up-a-sort?u=76281980&t=54)** All right, let's go ahead and create our sorting algorithm.
>
> **[0:57](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/setting-up-a-sort?u=76281980&t=57)** So in the same place that we filter the appointments, I'm going to add an additional section here and use the JavaScript sort function.
>
> **[1:05](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/setting-up-a-sort?u=76281980&t=65)** So JavaScript sort expects a couple of different variables.
>
> **[1:09](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/setting-up-a-sort?u=76281980&t=69)** They're usually called a and b and they just allow you to compare those two variables and it's going to do a simple sort based on the value of those two variables.
>
> **[1:20](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/setting-up-a-sort?u=76281980&t=80)** If you're sorting by say like the petName, it'll compare the two names and see which needs to go on top of the other one.
>
> **[1:27](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/setting-up-a-sort?u=76281980&t=87)** So once we get those two variables, then we can create a function that will take care of the order.
>
> **[1:34](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/setting-up-a-sort?u=76281980&t=94)** So I'll say let order, so this'll be a local variable, is going to be equal to orderBy and if it's equal to and this is a triple equal sign just in case you're wondering what this fancy font I got here.
>
> **[1:50](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/setting-up-a-sort?u=76281980&t=110)** So if it's equal to the ascending order, then the value of order is going to be one.
>
> **[1:56](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/setting-up-a-sort?u=76281980&t=116)** Otherwise it's going to be equal to -1.
>
> **[2:00](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/setting-up-a-sort?u=76281980&t=120)** And on traditional sorts this is how we decide how to compare the two items.
>
> **[2:05](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/setting-up-a-sort?u=76281980&t=125)** So by creating this variable, we are controlling the order itself.
>
> **[2:11](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/setting-up-a-sort?u=76281980&t=131)** All right, so once we have that variable, let's go ahead and hit our return statement here and then we'll compare the two methods here.
>
> **[2:18](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/setting-up-a-sort?u=76281980&t=138)** So we'll say a using the sortBy.
>
> **[2:23](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/setting-up-a-sort?u=76281980&t=143)** We'll test a using the sortBy field, which by default is set to petName.
>
> **[2:28](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/setting-up-a-sort?u=76281980&t=148)** So that's what we're comparing when this first gets started.
>
> **[2:31](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/setting-up-a-sort?u=76281980&t=151)** And then once again, we're going to do toLowerCase to make sure that the comparisons don't care about capital letters, right?
>
> **[2:41](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/setting-up-a-sort?u=76281980&t=161)** And then we'll compare that to same thing but b here, convert it toLowerCase and then we're going to use a turnary statement.
>
> **[2:51](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/setting-up-a-sort?u=76281980&t=171)** So in the turnary statement, this right here will be the test and then we'll put this question mark on the next line.
>
> **[3:00](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/setting-up-a-sort?u=76281980&t=180)** Maybe that's a little bit clearer.
>
> **[3:01](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/setting-up-a-sort?u=76281980&t=181)** So we'll go ahead and return -1 times the value of order.
>
> **[3:07](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/setting-up-a-sort?u=76281980&t=187)** Otherwise, we will just use one times the value of order.
>
> **[3:13](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/setting-up-a-sort?u=76281980&t=193)** This is going to control how the two items are compared.
>
> **[3:18](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/setting-up-a-sort?u=76281980&t=198)** Let's go ahead and save that.
>
> **[3:21](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/setting-up-a-sort?u=76281980&t=201)** And take a look at our application and you can see that now everything is ordered right now by the pet name in ascending order.
>
> **[3:31](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/setting-up-a-sort?u=76281980&t=211)** Now, let's go ahead and try something else here.
>
> **[3:34](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/setting-up-a-sort?u=76281980&t=214)** ownerName.
>
> **[3:35](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/setting-up-a-sort?u=76281980&t=215)** So now if I save this, it's going to sort things by the owner's name in ascending order.
>
> **[3:41](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/setting-up-a-sort?u=76281980&t=221)** Let's try descending order.
>
> **[3:44](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/setting-up-a-sort?u=76281980&t=224)** Just the other value.
>
> **[3:45](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/setting-up-a-sort?u=76281980&t=225)** And you can see that now the owner name is in descending order.
>
> **[3:49](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/setting-up-a-sort?u=76281980&t=229)** And let's go ahead and set this back to petName and ascending order, which is the default.
>
> **[3:58](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/setting-up-a-sort?u=76281980&t=238)** So the names right here will control the sort.
>
> **[4:00](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/setting-up-a-sort?u=76281980&t=240)** Now because we already had the filteredAppointments variable created, we didn't have to worry about anything else.
>
> **[4:06](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/setting-up-a-sort?u=76281980&t=246)** All we had to do was just modify how things are sorted by adding this additional function and this is the classic JavaScript sort.
>
> **[4:15](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/setting-up-a-sort?u=76281980&t=255)** Now, we are not going to setSortBy and set the orderBy.
>
> **[4:19](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/setting-up-a-sort?u=76281980&t=259)** We'll take care of that when we build the interface part of the sort, which we'll take care of in the next video.

> [!info]- Semantic Content
>
> **Code Identifiers:** petname (5), sortby (3), orderby (3), setsortby (2), tolowercase (2)
> **Code Keywords:** let (7), function (3), interface (2), module (1), default, (1)
> **Cross-References:** in the next (2)
> **File Paths:** app.js (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Programming the sorting interface
> [LinkedIn Learning](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/programming-the-sorting-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/programming-the-sorting-interface?u=76281980&t=0)** - Let's work on building the toggle for this search functionality.
>
> **[0:04](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/programming-the-sorting-interface?u=76281980&t=4)** So to do that, we're going to start in App.js, and what we need to do here is make sure that we pass along into the search component some of the information about the order and the sorting.
>
> **[0:19](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/programming-the-sorting-interface?u=76281980&t=19)** So I'll pass along orderBy, as well as an onOrderBy event.
>
> **[0:29](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/programming-the-sorting-interface?u=76281980&t=29)** I'll call it onOrderByChange, and this is going to be mySort, so it's going to receive a value called mySort from the dropdown, and then I'm going to setOrderBy using that variable.
>
> **[0:46](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/programming-the-sorting-interface?u=76281980&t=46)** Then we'll set up the sortBy, pass that along, and create a method for that as well.
>
> **[1:06](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/programming-the-sorting-interface?u=76281980&t=66)** All right, let's go ahead and save that.
>
> **[1:07](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/programming-the-sorting-interface?u=76281980&t=67)** And now we'll need to go into our search component.
>
> **[1:11](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/programming-the-sorting-interface?u=76281980&t=71)** I'll make sure that we received that into the main search component here under dropdown.
>
> **[1:17](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/programming-the-sorting-interface?u=76281980&t=77)** So in order to get to this dropdown though, we'll need to pass that along here.
>
> **[1:22](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/programming-the-sorting-interface?u=76281980&t=82)** So we'll add sortBy, onSortByChange, orderBy, and onOrderByChange.
>
> **[1:34](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/programming-the-sorting-interface?u=76281980&t=94)** Now we can add them down here into this dropdown.
>
> **[1:49](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/programming-the-sorting-interface?u=76281980&t=109)** Sort of like the same thing we did in the app component above, except that this is going to be passed down to the mySort component.
>
> **[2:18](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/programming-the-sorting-interface?u=76281980&t=138)** All right, so now we need to work on the component with the dropdown right here.
>
> **[2:24](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/programming-the-sorting-interface?u=76281980&t=144)** So this needs to receive all that information.
>
> **[2:36](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/programming-the-sorting-interface?u=76281980&t=156)** And then we'll need to create some events whenever people click on any of these buttons.
>
> **[2:42](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/programming-the-sorting-interface?u=76281980&t=162)** So, this'll be an onClick event, and it'll trigger that onSortByChange right here.
>
> **[2:49](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/programming-the-sorting-interface?u=76281980&t=169)** And then we pass along the name of the field that we want to sort by.
>
> **[2:57](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/programming-the-sorting-interface?u=76281980&t=177)** So we'll do the same thing for all these different divs here, and we'll change the field names.
>
> **[3:19](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/programming-the-sorting-interface?u=76281980&t=199)** For these bottom ones, they should be an onOrderByChange.
>
> **[3:27](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/programming-the-sorting-interface?u=76281980&t=207)** Now we need to make sure that these items are properly displayed so that the check mark will only show up if somebody has chosen the proper item.
>
> **[3:37](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/programming-the-sorting-interface?u=76281980&t=217)** So I'm going to grab this, and put it inside an expression and then do a test to see if the current element that we have chosen for sortBy happens to be the same as the current item that we're displaying.
>
> **[3:54](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/programming-the-sorting-interface?u=76281980&t=234)** So this is our test, and we're going to do a ternary statement.
>
> **[3:58](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/programming-the-sorting-interface?u=76281980&t=238)** So we're going to do a test, and if this element happens to be correct, then we will show this BiCheck right here.
>
> **[4:07](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/programming-the-sorting-interface?u=76281980&t=247)** And it looks like I just need one of these right here.
>
> **[4:11](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/programming-the-sorting-interface?u=76281980&t=251)** So once again, I'm going to copy this same thing.
>
> **[4:13](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/programming-the-sorting-interface?u=76281980&t=253)** It's just a little bit easier, and then run the same type of tests on all of these other elements, and then we'll modify them so that they make sense.
>
> **[4:35](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/programming-the-sorting-interface?u=76281980&t=275)** So this date, right here is supposed to be appointment date, not just date.
>
> **[4:39](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/programming-the-sorting-interface?u=76281980&t=279)** And of course these two will be orderBy here.
>
> **[4:44](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/programming-the-sorting-interface?u=76281980&t=284)** And then ascending or descending.
>
> **[4:48](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/programming-the-sorting-interface?u=76281980&t=288)** All right, let's check to see if it's working.
>
> **[4:50](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/programming-the-sorting-interface?u=76281980&t=290)** We don't see any errors on this display.
>
> **[4:54](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/programming-the-sorting-interface?u=76281980&t=294)** Let's click on these and you can see that pet name is selected, because it's running these tests on the dropdowns and showing a check mark next to the current value of the item.
>
> **[5:05](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/programming-the-sorting-interface?u=76281980&t=305)** And if I switch it over, you can see that I can switch it over by a pet name, owner name, date, and also switch ascending or descending order.

> [!info]- Semantic Content
>
> **Code Identifiers:** orderby (3), onorderbychange (3), mysort (3), sortby (3), onsortbychange (2)
> **Code Keywords:** pass (5), let (4), switch (3), this, (1)
> **UI Navigation:** dropdown (5), click on (2), toggle (1)
> **CLI Commands:** make (4)
> **File Paths:** app.js (1)
> **Prerequisites:** set up (1)
> **Speakers:** - let (1)

#### Adding a new appointment
> [LinkedIn Learning](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=0)** - [Instructor] We're almost done with this project.
>
> **[0:02](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=2)** Now we have to figure out how to pass along the information when somebody types in a new appointment.
>
> **[0:08](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=8)** To take care of that, we're going to go to AddAppointment and we're going to need to create a variable that's going to hold the information for the form.
>
> **[0:16](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=16)** So in addition to toggleForm, we'll create a variable here and it'll be formData.
>
> **[0:24](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=24)** Of course, we'll need setFormData as well.
>
> **[0:28](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=28)** We'll useState and the default here is going to be essentially an object with all of the different form fields.
>
> **[0:38](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=38)** So I'll need the ownerName and all the other ones.
>
> **[0:52](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=52)** Now, I know I'm going to need this object whenever I need to clear out the form.
>
> **[0:58](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=58)** So I'm actually going to put this in a separate variable.
>
> **[1:06](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=66)** And then I'll use that to initialize the form and I'll use it later to clear the form whenever somebody finishes typing something in.
>
> **[1:16](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=76)** All right, so now we need to go ahead and do the events for the form.
>
> **[1:21](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=81)** So I'll start with ownerName.
>
> **[1:23](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=83)** It's going to be pretty similar for all of them.
>
> **[1:26](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=86)** So in here, what I'll do is I'll create an onChange event.
>
> **[1:30](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=90)** So when something changes about this input field, then we're going to need an expression and we're going to capture the event information.
>
> **[1:38](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=98)** And then we are going to pass along the information from that event, which will be stored in event.target.value.
>
> **[1:52](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=112)** Now, we don't just want to pass the event.target.value because what will happen is if we just pass this into our formData, then it will actually clear any of the other information for any of the other fields.
>
> **[2:08](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=128)** So instead of doing this, what I'm going to do is select setFormData, of course, and this is where you would pass everything.
>
> **[2:16](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=136)** And then in here, we're going to pass an object and we'll use these three dots, which is called the spread operator in JavaScript.
>
> **[2:26](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=146)** Sort of a newer feature.
>
> **[2:27](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=147)** That will pass all the information that is in the current formData and then plus the ownerName using the event.target.value.
>
> **[2:39](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=159)** So what this will do is if something has changed about the input fields, not just this input fields but any of the other input fields, then it's going to add the ownerName as I type it to the formData information instead of just the information for this field.
>
> **[2:58](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=178)** So that's going to be pretty handy and then in addition to that, I need to make sure that I pass along the value of the input field, and so that's going to be formData.ownerName.
>
> **[3:11](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=191)** Super cool.
>
> **[3:12](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=192)** All the other fields are going to be pretty much repeating the same sort of structure.
>
> **[3:16](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=196)** So I'll copy that and then I'll just change the field here.
>
> **[3:22](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=202)** So petName.
>
> **[3:25](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=205)** And then this is aptDate.
>
> **[3:31](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=211)** This one is aptTime.
>
> **[3:40](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=220)** And this will be aptNotes.
>
> **[3:44](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=224)** So now what I need to do is program my button or really my submit button right here and then say when somebody clicks on this, I'm going to execute a method called formDataPublish.
>
> **[4:01](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=241)** Now, I haven't defined this yet.
>
> **[4:03](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=243)** So let's go ahead and take care of that now.
>
> **[4:07](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=247)** So this'll be function formDataPublish.
>
> **[4:13](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=253)** I'm not going to need to pass anything because all these input fields are automatically updating my form data for me.
>
> **[4:21](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=261)** So in here, I'm going to have to create a new object because some of these input fields require some computations.
>
> **[4:29](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=269)** So we're going to create a constant here called appointmentInfo and this is going to be our object and that object is sort of going to have all this information in it for the most part but aptDate and aptTime need to be merged together.
>
> **[4:51](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=291)** So when I pass the date, it's going to be aptDate and then we'll just do a simple concatenation with aptTime.
>
> **[5:04](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=304)** And that way we don't need to pass this.
>
> **[5:06](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=306)** And these aren't going to be quotations.
>
> **[5:10](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=310)** It's going to all be formData.ownerName.
>
> **[5:14](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=314)** So these will all be formData and then the field.
>
> **[5:21](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=321)** So these will be formData.aptName.
>
> **[5:27](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=327)** Oops, that shouldn't be petName, it should be formData.aptName.
>
> **[5:32](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=332)** formData.aptTime.
>
> **[5:36](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=336)** And aptNotes here.
>
> **[5:38](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=338)** Oops, Notes.
>
> **[5:39](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=339)** We're also going to need to pass along a unique ID.
>
> **[5:43](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=343)** We're going to get that from the main component.
>
> **[5:45](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=345)** So we'll just refer to it right here.
>
> **[5:48](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=348)** It's going to be called lastId and so this lastId will be the value of the lastId that was entered into our form.
>
> **[5:59](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=359)** So remember, when you look at, I don't now if this is going to be showing right now, but when you look at these things, they are currently in ascending owner name order and that means that since they're not stored that way in our database, that we have to go into each one of those records, extract the ID and figure out which is the largest of the IDs.
>
> **[6:23](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=383)** So say if I have 25 items, the lastId will be 24 and that's why I'm adding one at the end.
>
> **[6:30](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=390)** So we are, let's see, we need to add a comma there.
>
> **[6:34](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=394)** And I don't have this lastId yet, so I'll be creating it in a minute here.
>
> **[6:39](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=399)** So okay, once I have this appointment, and let's go ahead and make this bigger because I knew it was going to crash, so you don't need to see that quite yet.
>
> **[6:48](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=408)** All right, so appointmentInfo.
>
> **[6:51](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=411)** So once I have all that information captured, then I need to go ahead and pass it along to the parent component.
>
> **[6:58](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=418)** So that's going to be passed along in a method called onSendAppointment appointmentInfo with what we'll pass.
>
> **[7:10](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=430)** And then we'll call setFormData and use the clearData value that we made earlier on.
>
> **[7:19](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=439)** We'll also use setToggleForm and go ahead and reverse the value of the toggleForm so that it shows or hides the form when somebody's done.
>
> **[7:32](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=452)** So it's going to send the information along, clear the data in the form and then hide the form again.
>
> **[7:43](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=463)** All righty, so now we need to make sure that we are receiving that information.
>
> **[7:49](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=469)** So this component is going to receive onSendAppointment, as well as the lastId.
>
> **[7:58](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=478)** And we'll need to do that in the main component.
>
> **[8:02](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=482)** So in App.js, we need to scroll down to the place where we add the appointment, which is right here.
>
> **[8:15](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=495)** And we need to go ahead and pass along or receive really the onSendAppointment method, right?
>
> **[8:24](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=504)** So that is going to be an expression and it's going to pass along a variable called myAppointment, which will then modify using setAppointmentList and in here, we're going to once again use the very handy spread operator.
>
> **[8:44](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=524)** We want to add this record to the end of our appointmentList.
>
> **[8:48](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=528)** So we're going to take the current appointmentList and then pass along myAppointment to it, so it's almost like a push, except that this is kind of nice because I guess you don't have to do a push, you just sort of add something to the current array.
>
> **[9:06](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=546)** Sort of nifty.
>
> **[9:08](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=548)** All right, so now we need to make sure that we pass along the lastId.
>
> **[9:13](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=553)** All right, so for that, we're going to have use a reducer, so reducer's a function in JavaScript, which I think is confusingly named.
>
> **[9:24](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=564)** It's really an accumulator, which means that you can pass along an array and then you can add a sequence of elements in the array with the reducer together.
>
> **[9:38](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=578)** So it's a reducer but actually, it's a fantastic thing for adding things together.
>
> **[9:42](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=582)** But we are going to use it in an interesting way.
>
> **[9:47](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=587)** So let's see.
>
> **[9:48](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=588)** We will do lastId is going to be the current appointmentList and then we'll use this reduce function, right?
>
> **[9:56](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=596)** And the reduce function is going to use two different values.
>
> **[10:01](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=601)** One of them is going to be our maximum number and then each of the items that we want to go through.
>
> **[10:08](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=608)** So think of you've got the array.
>
> **[10:11](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=611)** And you want to go through each one of the items and you want to see if the current item is the biggest one, right?
>
> **[10:19](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=619)** So as you're going through each of these items, you have this other variable called max that's going to test out to see if the current value of the element or the item is the biggest, right?
>
> **[10:32](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=632)** So let's do that.
>
> **[10:33](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=633)** So here, now we can say here item.id.
>
> **[10:37](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=637)** So remember, the item.id is the ID of each item as you go through them.
>
> **[10:42](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=642)** However, because it is in JSON format, by default, this will be a string.
>
> **[10:48](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=648)** So we need to put this in a Number method to make sure that we convert it into a number from a string, otherwise your math is not going to work because when you add things in strings, it actually concatenates them instead of adding them.
>
> **[11:06](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=666)** Yay, JavaScript.
>
> **[11:07](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=667)** All right, so we're going to test to see if this is the maximum number and if it is, then it will use, we'll use Number again to store that item.id as the current number.
>
> **[11:20](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=680)** So instead of adding things, we are going to just test to see whether the current one is the biggest.
>
> **[11:28](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=688)** If it is, then we're going to keep that number.
>
> **[11:31](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=691)** If it isn't, then we are going to just keep on going through the list ourselves.
>
> **[11:37](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=697)** Otherwise, here's where we keep the maximum number.
>
> **[11:41](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=701)** And we need to pass the first value that we're looking for, which is going to be zero in this case.
>
> **[11:52](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=712)** Let's see if we mess things up and it looks like we didn't crash anything but the night is young.
>
> **[12:00](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=720)** Let's try this out.
>
> **[12:01](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=721)** Number, owner name is Ray.
>
> **[12:04](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=724)** We will try to pass along.
>
> **[12:07](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=727)** I figured if I type Ace, it'll appear here because it's got an A and our first pet is Bailey.
>
> **[12:15](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=735)** And then I'll just pick a date here and I don't really care what time I make the appointment.
>
> **[12:21](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=741)** And let's see, we'll say that the bark is worse than the bite.
>
> **[12:28](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=748)** And we'll submit.
>
> **[12:29](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=749)** And it looks like we have a little bit of a problem here.
>
> **[12:33](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=753)** So this is one of those not every helpful errors.
>
> **[12:37](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=757)** It says that onSendAppointment is not a function but at least it's telling us where to look for it.
>
> **[12:42](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=762)** So we need to go back into AddAppointment and I think the problem is that I was supposed to pass in here an object.
>
> **[12:51](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=771)** So let's see if that fixes it.
>
> **[12:53](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=773)** We'll try submitting this again.
>
> **[12:56](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=776)** And now you can see that Ace appears and it even cleared our form out and also toggled this back to where it used to be.
>
> **[13:05](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/adding-a-new-appointment?u=76281980&t=785)** That was a lot of code but we learned about things like the spread operator that allows us to modify an array of elements by pushing something onto them, which is really a great technique.

> [!info]- Semantic Content
>
> **Code Identifiers:** formdata (10), lastid (8), ownername (6), apttime (4), onsendappointment (4)
> **Code Keywords:** pass (22), let (9), function (5), this, (2), super (1)
> **CLI Commands:** make (6)
> **Definitions:** means that (2), is called (1)
> **UI Navigation:** go to (1), scroll down (1)
> **File Paths:** app.js (1)
> **Env Vars:** json (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/next-steps?u=76281980&t=0)** - [Ray] Working with a real project like this is a lot of fun, but I bet you're probably wondering what else you could do with this technology.
>
> **[0:07](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/next-steps?u=76281980&t=7)** Of course, you can go to the React website and take a look at the documentation as well as the tutorial.
>
> **[0:13](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/next-steps?u=76281980&t=13)** If you go to the docs, make sure that you check out the section on Hooks, which is how we treated things in this course.
>
> **[0:21](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/next-steps?u=76281980&t=21)** Most of the documentation uses classes, which isn't the most modern way to work with React.
>
> **[0:27](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/next-steps?u=76281980&t=27)** There's also a step-by-step tutorial that will walk you through building an additional application.
>
> **[0:32](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/next-steps?u=76281980&t=32)** And we also have lots of content on LinkedIn Learning, so make sure you do a search for React on our website, and you can take a look at this React.js for additional courses on the subject.
>
> **[0:45](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/next-steps?u=76281980&t=45)** Now, you can also look me up on LinkedIn Learning.
>
> **[0:48](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/next-steps?u=76281980&t=48)** I've created lots of courses on many different topics, including several courses on React and Vue.js.
>
> **[0:55](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/next-steps?u=76281980&t=55)** In addition to that, go ahead and follow me on LinkedIn.
>
> **[0:58](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/next-steps?u=76281980&t=58)** I publish all kinds of interesting content, including a couple of different tools daily, a weekly newsletter, and lots of things like live streaming.
>
> **[1:08](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/next-steps?u=76281980&t=68)** If you want to learn what I'm up to, go ahead and check out my website at [raybo.org](https://raybo.org), and you can follow me just about anywhere at planetoftheweb.

> [!info]- Semantic Content
>
> **Documentation:** the documentation (2), the docs (1)
> **File Paths:** react.js (1), vue.js (1)
> **CLI Commands:** make (2)
> **UI Navigation:** go to (2)
> **URLs:** [raybo.org](https://raybo.org) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [ray] (1)


## Path Context

### In [[Explore a Career in Front-End Web Development]]
← [[React Essential Training]] | **9 of 11** | [[JavaScript- Modern Browser APIs]] →

### In [[Explore React.js Development]]
← [[React Essential Training]] | **2 of 8** | [[React- Creating and Hosting a Full-Stack Site]] →

## Appears In

- [[Explore a Career in Front-End Web Development]]
- [[Explore React.js Development]]

## Related Courses

_Courses sharing skills:_

- [[React- Cloud-Powered Apps with Firebase]] — React.js
- [[Building a GraphQL Project with React.js]] — React.js
- [[React- Software Architecture]] — React.js
- [[React- Testing and Debugging]] — React.js
- [[React- Building Styles with CSS Modules]] — React.js
