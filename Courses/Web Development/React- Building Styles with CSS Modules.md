---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: react-building-styles-with-css-modules-9222678
url: "https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678"
duration_minutes: 94
duration: 1h 34m
level: Intermediate
updated: 10/6/2021
learners: 27435
skills:
  - Cascading Style Sheets (CSS)
  - React.js
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHt6E-zUzRRcA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1633369796940?e=2147483647&amp;v=beta&amp;t=jV1RKFz3tBJRYWTJ6K7FEf6CWTzk322ZFVViK2rYxmc"
linkedin_topic: Web Development
learning_paths:
  - '[[Improve Your React Skills]]'
prev_courses:
  - '[[Building Modern Uis With React Router V6]]'
next_courses:
  - '[[React- Securing Applications]]'
path_nav: '[{"path":"Improve Your React Skills","position":2,"total":9,"prev":"Building Modern Uis With React Router V6","next":"React- Securing Applications"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/cascading-style-sheets-css
  - skill/react-js
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/React-%20Building%20Styles%20with%20CSS%20Modules.md)

![React: Building Styles with CSS Modules](https://media.licdn.com/dms/image/v2/C4E0DAQHt6E-zUzRRcA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1633369796940?e=2147483647&amp;v=beta&amp;t=jV1RKFz3tBJRYWTJ6K7FEf6CWTzk322ZFVViK2rYxmc)

# React: Building Styles with CSS Modules

> React styles and CSS styles haven't always agreed in the use of inline styling. As React development has grown, developers have figured out more and more ways of smoothly integrating and maintaining a style with their code. But with so many options, it may be confusing on where to get started, especially if you’ve worked with CSS on non-React-based projects. In this course, Emmanuel Henri brings s

> [LinkedIn Learning](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678) | 1h 34m | Intermediate | 27K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (2 videos)
- **2. 1. Setting Up** (2 videos)
- **3. 2. Basics of CSS Modules** (7 videos)
- **4. 3. Interactions and Responsive Design** (4 videos)
- **5. Conclusion** (1 videos)

### 1. Introduction

#### Building a React site with CSS Modules
> [LinkedIn Learning](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/building-a-react-site-with-css-modules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/building-a-react-site-with-css-modules?u=76281980&t=0)** - [Manny] Doing CSS with React is always a subject with so many options, it can be confusing to get started.
>
> **[0:07](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/building-a-react-site-with-css-modules?u=76281980&t=7)** In this course, I'm going to clarify your options and introduce the concepts and syntax for CSS modules with React.
>
> **[0:15](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/building-a-react-site-with-css-modules?u=76281980&t=15)** Hi, I'm Manny Henri and I've been working with React since it was introduced.
>
> **[0:20](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/building-a-react-site-with-css-modules?u=76281980&t=20)** And I'm here to help you in your quest for proper styling while working on a cool space project.
>
> **[0:26](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/building-a-react-site-with-css-modules?u=76281980&t=26)** We'll first set up our initial project.
>
> **[0:28](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/building-a-react-site-with-css-modules?u=76281980&t=28)** Then we'll go over the basic syntax and introduce the concepts of CSS files with React components, compose, and use the state to change our components.
>
> **[0:39](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/building-a-react-site-with-css-modules?u=76281980&t=39)** And finally, we'll create some animation and add our final touches.
>
> **[0:43](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/building-a-react-site-with-css-modules?u=76281980&t=43)** So if you're ready to create a space project with CSS modules, fire up your favorite editor and let's get started.

> [!info]- Semantic Content
>
> **Env Vars:** css (4)
> **Code Keywords:** finally, (1), let (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [manny] (1)

#### Course prerequisites
> [LinkedIn Learning](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/course-prerequisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/course-prerequisites?u=76281980&t=0)** - [Instructor] As this course is focused on the exploration of CSS modules with React, some experience with React is a must.
>
> **[0:07](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/course-prerequisites?u=76281980&t=7)** If you aren't familiar with creating React components, using props and importing modules, I suggest that you take a basic React course such as the one we have in our library.
>
> **[0:18](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/course-prerequisites?u=76281980&t=18)** Also experience with JavaScript, especially the ES6 syntax or above is a must for this course as this is the basis of a React programmer.
>
> **[0:29](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/course-prerequisites?u=76281980&t=29)** Next, being familiar with terminal commands and NPM isn't a must, but definitely will help you when we use these tools.
>
> **[0:37](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/course-prerequisites?u=76281980&t=37)** As you'll see, I'm running on a Mac, but you can follow along on a PC as the tools work exactly the same on both platforms.

> [!info]- Semantic Content
>
> **Env Vars:** css (1), es6 (1), npm (1)
> **Definitions:** is a  (2)
> **CLI Commands:** npm (1)
> **Tools:** terminal (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 2. 1. Setting Up

#### React with CSS Modules without ejecting
> [LinkedIn Learning](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/react-with-css-modules-without-ejecting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/react-with-css-modules-without-ejecting?u=76281980&t=0)** - [Instructor] When first creating a React project, many old tutorials, including the previous version of this course, recommended to create a new application with special scripts or reject the application.
>
> **[0:11](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/react-with-css-modules-without-ejecting?u=76281980&t=11)** Well, I've got good news for you.
>
> **[0:13](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/react-with-css-modules-without-ejecting?u=76281980&t=13)** You don't have to anymore, because since React script 2.0 and above, CSS modules are actually supported.
>
> **[0:20](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/react-with-css-modules-without-ejecting?u=76281980&t=20)** So let's go ahead and create our new React application inside of Visual Studio Code.
>
> **[0:26](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/react-with-css-modules-without-ejecting?u=76281980&t=26)** Feel free to use any editor you want, or use a terminal to create the application, and then come back into your editor of choice.
>
> **[0:33](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/react-with-css-modules-without-ejecting?u=76281980&t=33)** But because there is a terminal included with Visual Studio Code, I'm going to do it everything internally.
>
> **[0:39](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/react-with-css-modules-without-ejecting?u=76281980&t=39)** So what I'm going to do is have Visual Studio Code open, and then I'm going to open up a new terminal.
>
> **[0:46](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/react-with-css-modules-without-ejecting?u=76281980&t=46)** So you can do this by clicking here, New Terminal, or use the shortcut that you have in here.
>
> **[0:54](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/react-with-css-modules-without-ejecting?u=76281980&t=54)** So what am I going to do to create a new React application is use npx.
>
> **[1:01](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/react-with-css-modules-without-ejecting?u=76281980&t=61)** So, if you're not familiar with npx, it's basically npm on steroids.
>
> **[1:06](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/react-with-css-modules-without-ejecting?u=76281980&t=66)** So basically what happened, after a while npm realized that not every single thing that you want to use needs to be installed locally inside of your system.
>
> **[1:18](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/react-with-css-modules-without-ejecting?u=76281980&t=78)** So what they did is created npx, which is a command, which basically will use the library that you need to create a new React application in this case, but then is going to clear up the local install of create React app.
>
> **[1:34](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/react-with-css-modules-without-ejecting?u=76281980&t=94)** So it uses a temporary folder, installs all the files that you need to create a new React application, creates the new React application and then clears up that temporary folder.
>
> **[1:46](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/react-with-css-modules-without-ejecting?u=76281980&t=106)** So it frees up space inside of your system.
>
> **[1:49](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/react-with-css-modules-without-ejecting?u=76281980&t=109)** It also prevents a whole bunch of libraries being installed locally.
>
> **[1:52](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/react-with-css-modules-without-ejecting?u=76281980&t=112)** So basically how it works, you need to do npx and then do the command that you would do if you were using the library in question.
>
> **[2:01](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/react-with-css-modules-without-ejecting?u=76281980&t=121)** So to create a new React application, you would do something like create-react app and then name the application or the folder the way you want to have it name.
>
> **[2:13](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/react-with-css-modules-without-ejecting?u=76281980&t=133)** And then it will work with npx as opposed to have to whoops that I have create-react-app like so.
>
> **[2:24](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/react-with-css-modules-without-ejecting?u=76281980&t=144)** Perfect.
>
> **[2:25](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/react-with-css-modules-without-ejecting?u=76281980&t=145)** So now what is going to do is leverage, create react app, install it internally, temporarily, create a new application and then clear up that folder.
>
> **[2:35](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/react-with-css-modules-without-ejecting?u=76281980&t=155)** So let's see what happens.
>
> **[2:43](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/react-with-css-modules-without-ejecting?u=76281980&t=163)** Okay. So once the application is created and, by the way, make sure that you are in the directory where you want the application to be created.
>
> **[2:51](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/react-with-css-modules-without-ejecting?u=76281980&t=171)** In this case, I created it on my desktop.
>
> **[2:54](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/react-with-css-modules-without-ejecting?u=76281980&t=174)** So once you have it created, all you have to do is basically load it inside of Visual Studio Code and I'm going to do that right now.
>
> **[3:03](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/react-with-css-modules-without-ejecting?u=76281980&t=183)** Okay, so what you have to do is, if you're familiar with Visual Studio Code, is open Explorer and then open the folder where your application is created.
>
> **[3:13](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/react-with-css-modules-without-ejecting?u=76281980&t=193)** In this case it's on my desktop, so let's go ahead on my desktop.
>
> **[3:16](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/react-with-css-modules-without-ejecting?u=76281980&t=196)** I've got cssmodules right here and open up the application, like so.
>
> **[3:24](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/react-with-css-modules-without-ejecting?u=76281980&t=204)** Okay.
>
> **[3:25](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/react-with-css-modules-without-ejecting?u=76281980&t=205)** So this is primarily, if you're familiar with React, this is primarily the typical application that React will create for you, depending on the version that you're watching, this might be a little bit different, but since React scripts version 2 and above, CSS modules are supported, so you don't have to worry if this is above version 2.
>
> **[3:48](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/react-with-css-modules-without-ejecting?u=76281980&t=228)** In this case, I'm on 4.
>
> **[3:49](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/react-with-css-modules-without-ejecting?u=76281980&t=229)** So you should be on a version above 4 and be fine.
>
> **[3:54](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/react-with-css-modules-without-ejecting?u=76281980&t=234)** Okay.
>
> **[3:55](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/react-with-css-modules-without-ejecting?u=76281980&t=235)** So this is the application and we're going to work a little bit on it in the next video.
>
> **[4:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/react-with-css-modules-without-ejecting?u=76281980&t=240)** We're going to change a few things here to basically prepare it for the project that we're going to be working on.
>
> **[4:07](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/react-with-css-modules-without-ejecting?u=76281980&t=247)** So, if you have that actually installed, let's run the application so you can see what it looks like.
>
> **[4:14](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/react-with-css-modules-without-ejecting?u=76281980&t=254)** Again, if you're familiar with React, you can skip to the next video.
>
> **[4:17](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/react-with-css-modules-without-ejecting?u=76281980&t=257)** This is basically typical React application.
>
> **[4:21](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/react-with-css-modules-without-ejecting?u=76281980&t=261)** So what I'm going to do is make sure first that I am in the right directory by doing ls, like so, and I am, and then I'm going to do npm start.
>
> **[4:34](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/react-with-css-modules-without-ejecting?u=76281980&t=274)** And this is what the application should look like.
>
> **[4:37](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/react-with-css-modules-without-ejecting?u=76281980&t=277)** So, once you have this loaded and the application created, let's move on.

> [!info]- Semantic Content
>
> **CLI Commands:** npx (5), npm (3), make (2), ls (1)
> **Tools:** visual studio (5), terminal (4)
> **Code Keywords:** let (5), case, (3)
> **Versions:** version 2 (2), 2.0 (1)
> **Env Vars:** css (2)
> **Cross-References:** in the next (1), next video (1)
> **Definitions:** is a  (2)
> **Prerequisites:** install (2)

#### Clean up of your created file
> [LinkedIn Learning](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/clean-up-of-your-created-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/clean-up-of-your-created-file?u=76281980&t=0)** - [Instructor] Before we move on to introducing CSS modules.
>
> **[0:04](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/clean-up-of-your-created-file?u=76281980&t=4)** I want to prep our current project, so we can remove a few things and prep the code for the next stage.
>
> **[0:09](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/clean-up-of-your-created-file?u=76281980&t=9)** So let's get to it.
>
> **[0:10](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/clean-up-of-your-created-file?u=76281980&t=10)** So I'm back into Visual Studio Code right here, and the first thing I want to do, is remove the logo.
>
> **[0:17](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/clean-up-of-your-created-file?u=76281980&t=17)** So if you remember, and again, let's go ahead and turn on the application.
>
> **[0:22](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/clean-up-of-your-created-file?u=76281980&t=22)** So you bring up the terminal, npm start, and then we can close the terminal, and bring up the application here.
>
> **[0:32](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/clean-up-of-your-created-file?u=76281980&t=32)** So as you can see right now, we have a turning star or basically their react logo.
>
> **[0:38](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/clean-up-of-your-created-file?u=76281980&t=38)** So I want to remove all this and start from a clean slate.
>
> **[0:42](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/clean-up-of-your-created-file?u=76281980&t=42)** So I'm going to go back to Visual Studio Code, and I'm going to remove everything, but the div, class name app.
>
> **[0:50](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/clean-up-of-your-created-file?u=76281980&t=50)** So let's go ahead and do that, like so, and then also remove the logo right here, 'cause we're not using it.
>
> **[1:05](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/clean-up-of-your-created-file?u=76281980&t=65)** And then while we're at it, we're going to remove the logo into our files.
>
> **[1:09](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/clean-up-of-your-created-file?u=76281980&t=69)** So you can either do this, inside of the actual folder on your desktop or where you have those files, or you can right click inside of Visual Studio Code and delete the file, like so.
>
> **[1:22](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/clean-up-of-your-created-file?u=76281980&t=82)** Perfect. So the next thing I want to do, and we're not going to talk about CSS modules yet, but I still want to prep the files for that.
>
> **[1:31](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/clean-up-of-your-created-file?u=76281980&t=91)** So what I'm going to do first, is change the name of App here.
>
> **[1:36](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/clean-up-of-your-created-file?u=76281980&t=96)** So what we're going to do instead of doing App.css, we're going to do App.module.css.
>
> **[1:44](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/clean-up-of-your-created-file?u=76281980&t=104)** So let's go ahead and right click, rename and do App... .module... .css... like so... and then, because we've renamed the file, we're not importing it properly here.
>
> **[2:02](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/clean-up-of-your-created-file?u=76281980&t=122)** So we want to basically import it properly here.
>
> **[2:06](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/clean-up-of-your-created-file?u=76281980&t=126)** So what I'm going to do, as opposed to just import the CSS files.
>
> **[2:10](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/clean-up-of-your-created-file?u=76281980&t=130)** So this is not doing module CSS, this is just importing the CSS files and then basically inserting it through class names.
>
> **[2:19](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/clean-up-of-your-created-file?u=76281980&t=139)** So we're going to change this now.
>
> **[2:21](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/clean-up-of-your-created-file?u=76281980&t=141)** So instead of doing it this way, what we're going to do is import, styles
>
> **[2:32](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/clean-up-of-your-created-file?u=76281980&t=152)** from, and then we're going to rename the file here, to app... .module... .css, like so.
>
> **[2:43](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/clean-up-of-your-created-file?u=76281980&t=163)** Well now that we're doing this, we need to change how we're importing inside of the class name.
>
> **[2:49](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/clean-up-of-your-created-file?u=76281980&t=169)** So what are you going to do instead is doing inside of curly braces, Styles... .app... like so... and now you're importing the styles for the app right here, so these styles... by importing them through [Styles.App](https://Styles.App).
>
> **[3:14](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/clean-up-of-your-created-file?u=76281980&t=194)** So we're going to cover, how does that work?
>
> **[3:17](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/clean-up-of-your-created-file?u=76281980&t=197)** Why are we doing it this way? In the next video.
>
> **[3:20](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/clean-up-of-your-created-file?u=76281980&t=200)** But I just wanted to prep the files properly on this one.
>
> **[3:23](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/clean-up-of-your-created-file?u=76281980&t=203)** And then we'll just continue on that conversation in the next chapter.
>
> **[3:27](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/clean-up-of-your-created-file?u=76281980&t=207)** So let's save that file, okay?
>
> **[3:29](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/clean-up-of-your-created-file?u=76281980&t=209)** So now that we have that done, let's make sure that our application is running properly.
>
> **[3:33](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/clean-up-of-your-created-file?u=76281980&t=213)** So let's bring up the terminal and let's make sure that it's running, if it isn't.
>
> **[3:46](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/clean-up-of-your-created-file?u=76281980&t=226)** And it was running, alrighty, right here.
>
> **[3:50](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/clean-up-of-your-created-file?u=76281980&t=230)** So let's delete that.
>
> **[3:53](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/clean-up-of-your-created-file?u=76281980&t=233)** And right now there seems to be a problem, cannot find that at all, okay.
>
> **[3:57](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/clean-up-of-your-created-file?u=76281980&t=237)** I just did capital M for this one though, so let's save that and then we're back and refresh that.
>
> **[4:10](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/clean-up-of-your-created-file?u=76281980&t=250)** And the application is running properly, but there's nothing right now and that's completely normal because our main component right here is completely empty.
>
> **[4:20](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/clean-up-of-your-created-file?u=76281980&t=260)** Perfect. So now that everything is ready, let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), module (4), this, (2), delete (2), import, (1)
> **Tools:** visual studio (3), terminal (3)
> **Env Vars:** css (5)
> **CLI Commands:** make (2), npm (1), find (1)
> **Cross-References:** in the next (2), go back to (1)
> **File Paths:** app.css (1), app.module.css (1)
> **URLs:** [styles.app](https://styles.app) (1)
> **Speakers:** - [instructor] (1)


### 3. 2. Basics of CSS Modules

#### Introduction to CSS Modules
> [LinkedIn Learning](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/introduction-to-css-modules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/introduction-to-css-modules?u=76281980&t=0)** - [Instructor] What exactly are CSS modules?
>
> **[0:03](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/introduction-to-css-modules?u=76281980&t=3)** Before I explain what they are, let's take a look at plain old CSS.
>
> **[0:07](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/introduction-to-css-modules?u=76281980&t=7)** When you work with CSS, you have one or many style sheets and they live pretty much on their own, and that's fine for simple apps or websites.
>
> **[0:16](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/introduction-to-css-modules?u=76281980&t=16)** But when your application or website grows, most likely you'll need to start splitting your components into smaller chunks to make it more manageable.
>
> **[0:25](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/introduction-to-css-modules?u=76281980&t=25)** Yet your CSS, even with leveraging imports, can become harder to manage, especially if you add scripts into your CSS.
>
> **[0:35](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/introduction-to-css-modules?u=76281980&t=35)** CSS modules comes to the rescue and facilitates this growth by first doing a one-to-one relationship where each component has its own CSS, but also integrates tightly into React's component approach with the possibility of using JavaScript or any methods available to React.
>
> **[0:55](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/introduction-to-css-modules?u=76281980&t=55)** This allows you to do really dynamic CSS and easily manage the component styles when needed.
>
> **[1:02](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/introduction-to-css-modules?u=76281980&t=62)** And all of this will be demonstrated as we add the modules into our application.
>
> **[1:07](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/introduction-to-css-modules?u=76281980&t=67)** So let me demonstrate an overview of how our website will be built and how CSS modules will impact this.
>
> **[1:15](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/introduction-to-css-modules?u=76281980&t=75)** We'll first have a background with its own background CSS, so component to CSS, one-to-one relationship.
>
> **[1:24](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/introduction-to-css-modules?u=76281980&t=84)** Then we'll have a title, same way, and then we'll have a big grid which will also have its own module or modular CSS.
>
> **[1:34](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/introduction-to-css-modules?u=76281980&t=94)** And then each grid item because it's its own component will have its own CSS.
>
> **[1:40](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/introduction-to-css-modules?u=76281980&t=100)** Remember like in React, because we're repeating the same component across, we only need to create a component and therefore its modular CSS once.
>
> **[1:51](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/introduction-to-css-modules?u=76281980&t=111)** And finally, we'll have the rocket and the smoke component and therefore its own CSS.
>
> **[1:58](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/introduction-to-css-modules?u=76281980&t=118)** Okay, so now that we have a good understanding of the benefits and how we are going to build a website, let's move on.

> [!info]- Semantic Content
>
> **Env Vars:** css (15)
> **Code Keywords:** let (3), this. (1), module (1), finally, (1)
> **CLI Commands:** make (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Initial directory structure
> [LinkedIn Learning](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=0)** - [Instructor] Now that we understand how we're going to build our website, let's go ahead and structure a project and add the proper files.
>
> **[0:07](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=7)** Also, in the exercise files, there are two files that are called React-stateful and React-stateless.
>
> **[0:16](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=16)** So if you look into the resources, you have those two files.
>
> **[0:21](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=21)** And these are templates that you can use to add the proper code inside of our initial components.
>
> **[0:26](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=26)** So if you want to use the stateless one, you can use this one, which is basically a functional component, and this one is a full stateful component.
>
> **[0:36](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=36)** So if you want to use one or the other, you can leverage those to make your initial components as we create the new components inside of our application.
>
> **[0:46](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=46)** So what I'm going to do is basically open those two inside of its own Visual Studio code.
>
> **[0:54](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=54)** So what I'm going to do is right click Visual Studio Code, create a new window, and then inside of that window, I'm going to basically add those two files, like so.
>
> **[1:09](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=69)** So if I need anything, let me just close this.
>
> **[1:12](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=72)** So if I need any code here, I have these two that I can leverage for the components that we're going to create.
>
> **[1:19](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=79)** So let me get back to our project right here.
>
> **[1:23](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=83)** And the first thing I'm going to do is create, inside of our source file, a few files here and a few folders.
>
> **[1:30](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=90)** So let's go ahead and, inside of the source folder, create a new folder, and I'm going to call this one Background.
>
> **[1:41](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=101)** And then let's go again in the source folder and I'm going to create the Grid.
>
> **[1:48](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=108)** And by the way, if you want to insert them inside of a component folder, so you can basically have less stuff inside of the source folder, feel free to do so.
>
> **[1:58](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=118)** Either way works, as long as you have your imports named properly.
>
> **[2:03](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=123)** Otherwise, just follow along what I'm doing.
>
> **[2:08](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=128)** Next one is called Rocket, and the final one is called Title.
>
> **[2:18](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=138)** Okay, so now we have all of our files here, plus the three folders that we need for future stuff.
>
> **[2:25](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=145)** So inside of Background, I'm going to start creating new files.
>
> **[2:29](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=149)** So, the first one is going to be the module for the CSS.
>
> **[2:35](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=155)** So we're going to call this Background.module.css,
>
> **[2:44](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=164)** like so.
>
> **[2:46](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=166)** Then again, inside of that folder, I'm going to create the component, so background.js.
>
> **[2:54](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=174)** And again, if you want to copy from our own Visual Studio files that I just loaded, you can simply copy and paste from these two samples or templates.
>
> **[3:07](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=187)** So for this one, I'm going to use the Stateful.
>
> **[3:10](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=190)** So I'll copy, paste and then save, and then we have the Background done.
>
> **[3:20](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=200)** So in the grid, let's go ahead and create new files as well.
>
> **[3:23](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=203)** So I'm just going to maximize this.
>
> **[3:26](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=206)** I'm going to create four files for the grid.
>
> **[3:29](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=209)** As you remember, we had our main grid, and then inside of that grid, we had the single components that are repeated so on and so forth, so that needs also a component.
>
> **[3:38](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=218)** So, we need to create four files.
>
> **[3:40](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=220)** So the first one is going to be, again, Grid.module.css, and then we're going to create a second file, which is going to be the Grid.js.
>
> **[3:52](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=232)** And then another file, which will be the GridItem, so GridItem.module.css, and then finally, GridItem.js for the actual file.
>
> **[4:10](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=250)** Perfect.
>
> **[4:12](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=252)** And, let me just close a few of those.
>
> **[4:15](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=255)** I need to keep the grid.js and the GridItem.js, so I can copy and paste.
>
> **[4:25](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=265)** I already copied it.
>
> **[4:26](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=266)** So I'm assuming I can paste again. Yep.
>
> **[4:29](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=269)** So I'm going to do all of these as Stateful for now.
>
> **[4:32](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=272)** Just save them and then change as we need it stateless.
>
> **[4:36](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=276)** Again, those files are already at my disposal whenever I need them.
>
> **[4:39](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=279)** So, just going to minimize this, maximize this, and then paste again, save.
>
> **[4:46](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=286)** And as I complete them, I'm just going to close them.
>
> **[4:49](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=289)** Okay, so now we can close this folder, and now we're going to create the title.
>
> **[4:55](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=295)** And actually, those two shouldn't be together like that, so let me delete that.
>
> **[5:02](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=302)** And now, I have just Rocket. Perfect.
>
> **[5:04](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=304)** And now in the source file, I need to create a new folder called Title.
>
> **[5:11](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=311)** Perfect. So, you need to have those four separate.
>
> **[5:14](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=314)** I didn't want to have indented folders inside of folders, so that's perfect.
>
> **[5:20](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=320)** Okay, so now let's go back to Rocket, and we're going to create four files inside of Rocket.
>
> **[5:27](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=327)** The Smoke, so the module for Smoke, the component and the same thing for Rocket, so let's go ahead and create those.
>
> **[5:34](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=334)** I'm going to start with the Rocket.module.css, then create the actual components, so Rocket.js.
>
> **[5:46](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=346)** Then, let's go and do the same for the Smoke, so Smoke.module.css.
>
> **[5:53](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=353)** And now, let's create also the component, so Smoke.js.
>
> **[6:01](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=361)** And, before we move on to the title, let's make sure we have some code inside of our two components.
>
> **[6:07](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=367)** I'm going to close the CSS ones, and let's make sure that I have something copied, Stateful again, and then let's just paste our Smoke.js component.
>
> **[6:25](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=385)** Save that, and then do it again, save that.
>
> **[6:28](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=388)** And now we're done with the Rocket stuff, and the Smoke.
>
> **[6:32](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=392)** Now, in the title, we need two things.
>
> **[6:36](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=396)** So we need the Title.module.css and finally, we need the Module component.
>
> **[6:50](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=410)** Sorry, we need the Title component.
>
> **[6:55](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=415)** Perfect.
>
> **[6:56](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=416)** So, now what we need to do is paste also the Stateful component right here, and now we have all of our files ready for the next step.
>
> **[7:07](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=427)** So if we want to take a look at what we've created, we have our Background, which has the modules, so the CSS module and the component.
>
> **[7:17](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=437)** We have the Grid, which we have the overall Grid with its own module and the component, and the GridItem, which will be repeated inside of the grid with its own modules, CSS.
>
> **[7:30](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=450)** Same thing for the Rocket and the Smoke, so the module and the component for both.
>
> **[7:37](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=457)** And then, finally, the Title, which has its own components and also the CSS module.
>
> **[7:44](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/initial-directory-structure?u=76281980&t=464)** So now, we have our full structure for a project completed and ready to go for us to work on it, so let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (16), module (13), finally, (3), this. (2), this, (2)
> **File Paths:** grid.js (2), griditem.js (2), smoke.js (2), background.module.css (1), background.js (1)
> **Env Vars:** css (5)
> **CLI Commands:** make (3)
> **Tools:** visual studio (3)
> **Definitions:** is called (2), is a  (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise files (1)

#### Add components to the app
> [LinkedIn Learning](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-components-to-the-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-components-to-the-app?u=76281980&t=0)** - So now let's continue setting up our application.
>
> **[0:03](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-components-to-the-app?u=76281980&t=3)** So what we're going to do in this particular video, we're going to add a title for each of our components with an <h1> and then we're going to add all of these components inside of our main App.js component.
>
> **[0:15](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-components-to-the-app?u=76281980&t=15)** Let's go ahead and do that.
>
> **[0:16](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-components-to-the-app?u=76281980&t=16)** So I'm going to open first the Background, like so.
>
> **[0:21](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-components-to-the-app?u=76281980&t=21)** And, basically, all I'm going to do instead of Stateful component, I'm going to change this to the actual component.
>
> **[0:27](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-components-to-the-app?u=76281980&t=27)** In this case, it's the Background so let's go ahead and do that.
>
> **[0:31](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-components-to-the-app?u=76281980&t=31)** And make sure that this is typed properly.
>
> **[0:35](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-components-to-the-app?u=76281980&t=35)** And then save this and then repeat the same process for each of our components.
>
> **[0:40](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-components-to-the-app?u=76281980&t=40)** So if you want to go ahead and pause the video and practice on your own, feel free to go ahead and do that.
>
> **[0:46](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-components-to-the-app?u=76281980&t=46)** I'm just going to basically go through each of the components and change the <h1> title.
>
> **[0:51](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-components-to-the-app?u=76281980&t=51)** And that's how simple this is going to get.
>
> **[0:54](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-components-to-the-app?u=76281980&t=54)** So this one is the Grid, this one is the GridItem, then I'm going to continue with Rocket, like so.
>
> **[1:11](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-components-to-the-app?u=76281980&t=71)** Rocket.
>
> **[1:12](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-components-to-the-app?u=76281980&t=72)** Save it.
>
> **[1:14](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-components-to-the-app?u=76281980&t=74)** Do Smoke.
>
> **[1:17](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-components-to-the-app?u=76281980&t=77)** And basically the reason why I'm doing this is because when we load them inside of our application, we're going to know what is what.
>
> **[1:24](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-components-to-the-app?u=76281980&t=84)** So, basically, once we attach all of these components inside of the main App.js component, we're going to see Smoke, we're going to see GridItem, and so on and so forth.
>
> **[1:34](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-components-to-the-app?u=76281980&t=94)** So we're going to be able to position them properly inside of the main component.
>
> **[1:39](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-components-to-the-app?u=76281980&t=99)** And I typically do that when I build an application and just to structure the application properly, I add all these titles and then when I connect them inside of the main component, I know where each component sits.
>
> **[1:54](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-components-to-the-app?u=76281980&t=114)** Alright, so we're going to do the same for Title and then save.
>
> **[2:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-components-to-the-app?u=76281980&t=120)** And then we're going to go inside of the main component, so the App.js, and we're going to import each of these components first.
>
> **[2:09](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-components-to-the-app?u=76281980&t=129)** So we're going to import Title from and then Title and then forward slash Title, like so.
>
> **[2:20](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-components-to-the-app?u=76281980&t=140)** And just a little tip, if you want to have the proper component suggested to you, what you can do is do from first, so where you want to load from, and in this case we're going to load Background next.
>
> **[2:44](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-components-to-the-app?u=76281980&t=164)** And then based on what you've imported, it's going to suggest to you what components are available, like so.
>
> **[2:53](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-components-to-the-app?u=76281980&t=173)** But I typically do everything in order.
>
> **[2:56](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-components-to-the-app?u=76281980&t=176)** So it's a little trick from visuals to do code if you want to try it whenever you have large libraries and you're not so sure what's available, you can load the from first, load the library first, and then import and then it's going to suggest as you type things.
>
> **[3:14](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-components-to-the-app?u=76281980&t=194)** Now, I prefer doing the from after because it's actually suggesting what's available to me when I start typing in.
>
> **[3:22](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-components-to-the-app?u=76281980&t=202)** So Grid, so let's go ahead and do that and then Grid, import Rocket.
>
> **[3:32](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-components-to-the-app?u=76281980&t=212)** And the reason why I'm not importing GridItem is because it's going to be inside of the Grid.
>
> **[3:45](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-components-to-the-app?u=76281980&t=225)** And then, finally, Smoke
>
> **[3:53](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-components-to-the-app?u=76281980&t=233)** from the Rocket folder, like so.
>
> **[3:56](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-components-to-the-app?u=76281980&t=236)** Okay, so now we have all our imports and now what we can do is start putting them inside of our component.
>
> **[4:04](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-components-to-the-app?u=76281980&t=244)** So I'm going to start with Title because that's the first one I want.
>
> **[4:13](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-components-to-the-app?u=76281980&t=253)** Then I'm going to do Background, then I'm going to do Grid, Rocket, and you can probably guess what's going to happen for the next two, and finally Smoke, like so.
>
> **[4:32](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-components-to-the-app?u=76281980&t=272)** And just to be structurally sound, you want to indent them inside of the main div, like so.
>
> **[4:39](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-components-to-the-app?u=76281980&t=279)** Awesome!
>
> **[4:40](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-components-to-the-app?u=76281980&t=280)** So now, all you have to do is save this and we have our first structure in place so we can start working with CSS functions.
>
> **[4:49](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-components-to-the-app?u=76281980&t=289)** Let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), continue (2), case, (1), from, (1), finally, (1)
> **File Paths:** app.js (3)
> **CLI Commands:** make (1)
> **Env Vars:** css (1)
> **Speakers:** - so (1)

#### CSS syntax with the components
> [LinkedIn Learning](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=0)** - [Male Narrator] CSS modules allows us to scope our CSS inside of a specific component, like we demonstrated earlier and also make it reusable across different projects.
>
> **[0:12](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=12)** So for example, if you create a component and it's corresponding styles with CSS modules, you can literally copy the folder of that specific component into another project.
>
> **[0:22](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=22)** And you'll maintain all of its styles without having to go through several CSS files to find them.
>
> **[0:28](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=28)** So let's go ahead and work on our first CSS module, and then I'll show you how you could copy these styles or this module into another project and reuse it.
>
> **[0:38](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=38)** So the first thing we're going to do, I'm going to clean up my work area and just leave title- And clean the other one, like so- and then open up the title module CSS, this file.
>
> **[0:55](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=55)** So the first thing we're going to do is actually create the styles inside of our CSS module here.
>
> **[1:02](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=62)** So what I'm going to do is create a class called title, and then inside of that class, I'm going to start with font family, use Roboto or sans-serif if Roboto is not available on the browser or is not supported on the browser.
>
> **[1:23](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=83)** And then we'll do a font size of four EM.
>
> **[1:28](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=88)** Now you can save this, and now let's load this module inside of our component right here.
>
> **[1:35](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=95)** So the first thing we're going to do, like we've done before- and this is good practice- is start to import module.
>
> **[1:42](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=102)** So we're going to import styles from our module.
>
> **[1:48](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=108)** So the file is title, dot, module, dot, CSS, like so.
>
> **[1:57](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=117)** And then what we can do is apply those styles to that specific component.
>
> **[2:03](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=123)** And while we're at it, let's change that component to a functional component because right now it's a class component and it's not really required because we're simply loading a title, we're not passing anything from the state, from a state that's loaded here.
>
> **[2:18](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=138)** So we don't need the class.
>
> **[2:20](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=140)** So as you remember, I had a couple of examples here.
>
> **[2:23](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=143)** So I have the state list and the state full component already for you, if you want it to leverage it, and we're going to do that.
>
> **[2:31](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=151)** So what I'm going to do is simply copy this particular area, like so, quickly paste it here, like so, and we're going to change this to title.
>
> **[2:48](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=168)** We're not importing any props, so that's not required.
>
> **[2:53](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=173)** And then here, we're going to change it to title.
>
> **[2:56](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=176)** So we can copy that line if we want to simply type it here, like so, and then we're going to pass the styles to the title.
>
> **[3:08](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=188)** So let's go ahead and do that.
>
> **[3:09](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=189)** So class name and by the way if you don't know why we're using class name as opposed to class in pure HTML is because the work class is already used in react.
>
> **[3:24](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=204)** And pass styles dot, title, like so.
>
> **[3:32](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=212)** Because we're loading styles here from the title module, and we want to make sure we have the same name here, so we should be fine.
>
> **[3:41](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=221)** And then we need to correct this by simply doing this, like so, and obviously remove our class or stateful component.
>
> **[3:52](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=232)** All right, so now we're good.
>
> **[3:55](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=235)** Let's save this and let's start our application.
>
> **[4:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=240)** So I'm going to click on terminal, new terminal, Do NPM start just to see if there's any issues that we need to take care of and something is wrong here.
>
> **[4:11](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=251)** Title- title does not contain a default export, import it as title, and that's definitely something we need to work on.
>
> **[4:21](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=261)** So let's go ahead and do export default title.
>
> **[4:26](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=266)** And that's my bad.
>
> **[4:27](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=267)** I forgot to do the export, which is something that I typically do directly in the class component here, and I forgot to add it here.
>
> **[4:35](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=275)** So let's save that.
>
> **[4:36](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=276)** And now we have our application running, and let's check the application, and as structured in the previous video, we have all of our other components inside of our main app component, like so.
>
> **[4:49](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=289)** Awesome!
>
> **[4:50](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=290)** So what if you want it to basically copy all this into a new application?
>
> **[4:55](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=295)** All you would have to do is create a brand new react application and copy the folders right here inside of the source folder, directly into your application, and then make sure that there's no errors from loading the app here.
>
> **[5:10](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=310)** So index dot JS is importing app from the right directory and then do the same from app to the others.
>
> **[5:18](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=318)** And that's basically what you would need to check and make sure that you're importing properly inside of your application.
>
> **[5:24](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=324)** And automatically the styles from the module would be applied to your component here and show up on the page.
>
> **[5:32](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/css-syntax-with-the-components?u=76281980&t=332)** So as you can see, CSS modules allow complete flexibility and reusability of the CSS for your components.

> [!info]- Semantic Content
>
> **Code Keywords:** module (10), let (9), this, (2), pass (2), export, (2)
> **Env Vars:** css (10), html (1), npm (1)
> **CLI Commands:** make (4), find (1), npm (1)
> **Tools:** terminal (2)
> **Cross-References:** previous video (1)
> **UI Navigation:** click on (1)
> **Analogies:** for example (1)
> **Best Practices:** good practice (1)

#### Use composes to leverage other styles
> [LinkedIn Learning](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=0)** - [Instructor] There might be cases where you need to leverage styles from other style sheets or classes, and this is where compose comes into play.
>
> **[0:08](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=8)** So let me demonstrate.
>
> **[0:09](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=9)** So the first thing we're going to do is actually grab some pictures from the exercise files.
>
> **[0:15](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=15)** So let me minimize all this, and I'm going to open my project right here and open the exercise files and go into the resources and the files that you want is the alpha, nebula, and then stars.
>
> **[0:31](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=31)** I'm going to select this, this, and this, and then copy.
>
> **[0:38](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=38)** And then I'm going to go into the source folder.
>
> **[0:42](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=42)** We used to put the images in the public folder, but recent development with react.
>
> **[0:47](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=47)** Basically this allows us to put this into the public folder and then actually tag them or use them inside of our code here.
>
> **[0:56](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=56)** So you need to create the images folder inside of the source folder, like so.
>
> **[1:01](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=61)** So new folder, let's call this one images and then I'm going to paste the three images that I just copied.
>
> **[1:13](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=73)** So now we're all set and let's go ahead and open up visual studio code.
>
> **[1:19](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=79)** So the two files that I want to work on is the background dot JS.
>
> **[1:24](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=84)** So we're going to be working on the background and the background modules CSS.
>
> **[1:29](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=89)** So those are the two files.
>
> **[1:31](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=91)** So the first thing I'm going to do is add some styles to the background.
>
> **[1:34](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=94)** So let's go ahead and do that.
>
> **[1:36](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=96)** So the first thing I'm going to create a new class called background items, and this is going to be a class that we'll leverage across other classes.
>
> **[1:48](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=108)** And I'll use composed after that, to leverage that class.
>
> **[1:52](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=112)** So let's go ahead and start typing some stuff.
>
> **[1:55](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=115)** So position, we're going to have it fixed.
>
> **[1:58](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=118)** And then top, we're going to have zero, left, zero.
>
> **[2:05](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=125)** We're going to do right, zero, bottom, the same thing.
>
> **[2:12](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=132)** Width, we're going to be at a hundred percent.
>
> **[2:17](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=137)** Height, the exact same thing.
>
> **[2:20](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=140)** And then finally, we want to display this as a block, like so.
>
> **[2:25](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=145)** So now that we have our main class, we'll start generating the class for the stars, the alpha and the nebula, and we'll use composed to leverage the class background items.
>
> **[2:36](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=156)** So I'm going to show you how that works.
>
> **[2:38](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=158)** So let's go ahead and start with stars and we're going to use composes and then type background items, like so.
>
> **[2:51](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=171)** So what happens here, because we've actually defined all of these styles for background items, when we use composes and actually add background items as the class that we're leveraging, we don't have to redo all that code again for stars.
>
> **[3:09](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=189)** We're basically combining the class background items with the actual styles that we'll define for stars.
>
> **[3:16](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=196)** So what we're going to do now, we're going to do a background which will be black and we'll have a URL which will include the image that we just imported inside of our project.
>
> **[3:28](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=208)** So let's go ahead and grab that image.
>
> **[3:32](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=212)** So you're going to have to do twice getting out of there and then go into, actually not twice, but just once, sorry about that.
>
> **[3:41](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=221)** And then go into images and then select stars.
>
> **[3:46](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=226)** And then we want to repeat, top center.
>
> **[3:54](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=234)** So now we've defined the background for that specific class.
>
> **[3:58](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=238)** Now we'll use the Z index to position it front to back inside of our composition that we're doing for this particular application.
>
> **[4:10](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=250)** So this is going to be the further out image that we're going to leverage.
>
> **[4:14](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=254)** Cause the other two are going to be front to the stars class.
>
> **[4:18](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=258)** So let's go ahead and create the alpha class now.
>
> **[4:21](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=261)** Let's go and create that.
>
> **[4:26](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=266)** So for the alpha class, we're going to do compose again, background and Z index.
>
> **[4:30](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=270)** So let's copy those styles here and paste them here, like so.
>
> **[4:35](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=275)** So we're still composing background items.
>
> **[4:38](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=278)** So we're leveraging some of that.
>
> **[4:40](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=280)** The background is not going to be black.
>
> **[4:43](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=283)** It's going to be transparent.
>
> **[4:45](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=285)** The URL this time is going to leverage the alpha image.
>
> **[4:49](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=289)** And again, we're doing repeat top center.
>
> **[4:52](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=292)** Now for the alpha, the Z index is going to be minus two.
>
> **[4:57](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=297)** So this one's going to be on top of the stars.
>
> **[5:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=300)** So the minus determines where it is positioned in the Z coordinates.
>
> **[5:06](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=306)** So basically the way to determine where it sits in the Z index is the higher the number, the better it is or in front of everything else.
>
> **[5:15](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=315)** So if you want to have something in front of the alpha, you would put zero, one or above.
>
> **[5:22](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=322)** And finally for this one, we're going to add animation, which we'll actually write momentarily.
>
> **[5:28](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=328)** And basically the animation that we'll leverage is called star gazing.
>
> **[5:34](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=334)** And we're going to do 500 seconds linear animation and infinite.
>
> **[5:41](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=341)** So basically will always play.
>
> **[5:44](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=344)** Then we're going to paste again, what we just did and actually create the class first.
>
> **[5:49](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=349)** So this is going to be nebula again for the last image, paste what we've already written and for the background's going to be transparent as well.
>
> **[6:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=360)** Transparent.
>
> **[6:01](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=361)** The URL this time is going to be nebula repeat top center as well.
>
> **[6:06](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=366)** And the Z index going to be minus one, because this is going to be on top of the alpha and the stars.
>
> **[6:13](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=373)** And finally, I want to add some opacity for that one.
>
> **[6:16](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=376)** So let's go ahead and do that.
>
> **[6:17](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=377)** And the opacity will be at 0.15.
>
> **[6:20](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=380)** So although nebulas are going to be there, it's going to be very, very opaque or not as apparent as the other images.
>
> **[6:29](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=389)** And finally let's do the animations.
>
> **[6:32](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=392)** So let's do key frames and let's make sure we use the name properly, star gazing.
>
> **[6:39](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=399)** That's the one we have here.
>
> **[6:41](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=401)** Perfect.
>
> **[6:42](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=402)** And the animation is going to be from backgrounds.
>
> **[6:46](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=406)** So basically what we're doing here is doing an animation from 0.0 to, and again, we're leveraging background position, like so.
>
> **[7:03](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=423)** Minus 10,000 pixels, 5,000 pixels.
>
> **[7:09](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=429)** So basically what we've done here is an animation of that particular image, which is the alpha.
>
> **[7:15](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=435)** So this alpha image is going to be moving from these positions every 500 seconds in a linear animation, and it's going to be infinite.
>
> **[7:27](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=447)** Okay.
>
> **[7:28](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=448)** So now that we've defined all of our styles here, let's go into our JavaScript file and make sure first we import it.
>
> **[7:39](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=459)** So import styles from background dot module.
>
> **[7:49](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=469)** And you want to make sure again, that you're naming it the same way.
>
> **[7:52](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=472)** So module dot CSS, like so.
>
> **[7:57](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=477)** And then inside of our component, we're going to start leveraging those styles.
>
> **[8:04](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=484)** So we'll have the first div with a class name and the styles, stars, like so.
>
> **[8:15](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=495)** And then let's copy that line.
>
> **[8:16](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=496)** We're going to paste it twice after that, to do the other two images.
>
> **[8:22](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=502)** So basically we're going to do alpha next and then finally nebula, like so.
>
> **[8:35](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=515)** Okay, perfect.
>
> **[8:36](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=516)** So now that we have the component done, we have all of our styles.
>
> **[8:40](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=520)** Let's take a look at what it looks like.
>
> **[8:42](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=522)** So we have something in there here.
>
> **[8:45](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=525)** So I made a little typo, let's go and correct that.
>
> **[8:53](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=533)** Small error. Let me bring up the terminal.
>
> **[8:57](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=537)** And the terminal says that we have no errors now.
>
> **[8:59](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=539)** So we're all good.
>
> **[9:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=540)** Let's go back to our browser and we have our stars.
>
> **[9:05](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=545)** So basically the animation, I don't know if you can see it, but right now there's something that's moving that makes all these dots go out or in.
>
> **[9:15](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=555)** And that's the animation that makes some type of star gazing or sky with stars that are coming in and out.
>
> **[9:24](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=564)** And this is my opinion, very beautiful and ready to move on for the next stage of our project.
>
> **[9:32](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=572)** So like I said, compose is another tool that allows you to leverage styles from other files or within the same file.
>
> **[9:40](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/use-composes-to-leverage-other-styles?u=76281980&t=580)** So let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (22), this, (4), class. (3), public (2), finally, (2)
> **Env Vars:** url (3), css (2)
> **CLI Commands:** make (3)
> **Tools:** terminal (2), visual studio (1)
> **Versions:** 0.15 (1), 0.0 (1)
> **Exercise Files:** exercise files (2)
> **Definitions:** is called (1), is an  (1)
> **Cross-References:** go back to (1)

#### Set up your state and grid component
> [LinkedIn Learning](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=0)** - [Instructor] Okay, so let's move on to code our grid component.
>
> **[0:04](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=4)** We'll also set up our state so we can start using it for data, UI, and animations, so let's get to it.
>
> **[0:10](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=10)** So the first thing I'm going to do is actually leverage some data that I created for you in the resources.
>
> **[0:16](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=16)** So if you click on the exercise files, resources, you have a JSON file right here that's called NASA dot or underscore facts.
>
> **[0:26](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=26)** And what I want to do is copy that and close it.
>
> **[0:33](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=33)** And then inside of our CSS modules in the source folder, I'm going to create a data folder and I'm going to paste that file inside of that folder, like so.
>
> **[0:49](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=49)** Perfect.
>
> **[0:50](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=50)** Now we're ready to get back to our code and I'm going to remove my terminal for now.
>
> **[0:55](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=55)** And I'm using basically a shortcut, which is Control grave, and then let's close the backgrounds.
>
> **[1:03](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=63)** And what I want to do is open first the app.js file.
>
> **[1:09](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=69)** So that's the first one I want to do.
>
> **[1:11](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=71)** So what we're going to do first is import the data inside of that file, so let's go ahead and do that.
>
> **[1:17](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=77)** So I'm just going to write a little comment here, data.
>
> **[1:21](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=81)** And then import facts from go into the data folder right here.
>
> **[1:29](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=89)** And that's what I want.
>
> **[1:32](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=92)** Perfect.
>
> **[1:34](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=94)** So now that we have that, we have a little problem inside of our app.js file.
>
> **[1:39](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=99)** We have a functional component and not a class or stateful component.
>
> **[1:44](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=104)** So what we're going to do is basically redo that component above right here.
>
> **[1:50](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=110)** So I'm going to do a class app extends component.
>
> **[1:58](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=118)** And then the first thing I'm going to do inside of that class is add the constructor So I can pass props to it.
>
> **[2:07](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=127)** Super props, and this is the template for most of your stateful components.
>
> **[2:13](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=133)** So if you're familiar with react, you're familiar with this.
>
> **[2:17](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=137)** So I'm going to create a state and I'm going to pass facts to it.
>
> **[2:23](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=143)** And that's pretty much it.
>
> **[2:24](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=144)** I don't need that much more.
>
> **[2:25](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=145)** I don't want to spend too much time on this state.
>
> **[2:27](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=147)** It's just typical code so I can actually render a component with data inside of it.
>
> **[2:33](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=153)** So let's go ahead and create the render function.
>
> **[2:42](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=162)** And inside of the render function, all I need is the return.
>
> **[2:47](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=167)** So what I could do is copy my return right here, cut it and paste it inside of my render right here, like so, and then I can remove this thing here.
>
> **[3:03](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=183)** So now that I have all this in here, what I need to do next, and if you want to test that your code is working fine, you can save it, bring it back to terminal, making sure that something is working properly.
>
> **[3:17](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=197)** If it's not, then make the proper change.
>
> **[3:19](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=199)** In this case, component is not defined, so we really need to go to here and make sure that we also import react,
>
> **[3:38](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=218)** component, like so, from react, and we should be fine with the air.
>
> **[3:47](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=227)** So now we're back.
>
> **[3:49](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=229)** I'm going to remove my terminal by doing Control grave or just clicking the X.
>
> **[3:58](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=238)** But now what I need to do is pass the state to our grid.
>
> **[4:04](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=244)** So we need to pass it to the grid so we can actually create the grid item and repeat the grid item how many times we have elements inside of our data.
>
> **[4:14](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=254)** So let's go ahead and do that.
>
> **[4:15](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=255)** So I'm going to pass the facts and do this.state.facts.
>
> **[4:27](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=267)** Okay, so now this is done.
>
> **[4:30](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=270)** Let's save that.
>
> **[4:32](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=272)** And now, let's go into our grid right here.
>
> **[4:37](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=277)** In our grid, we're going to start leveraging some of the stuff that we've actually passed to it.
>
> **[4:43](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=283)** So the first thing I'm going to do is first make sure that I can import grid item in here.
>
> **[4:49](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=289)** So let's go ahead and import grid item from grid item, like so.
>
> **[4:55](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=295)** So now we have that component.
>
> **[4:57](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=297)** Let's also import the styles, which we'll actually change later on.
>
> **[5:01](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=301)** So let's import the styles from our grid.module.css, and you want to make sure that you don't make any typos 'cause react is going to tell you.
>
> **[5:18](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=318)** And then in here, before my actual render, I'm going to create a function that will basically repeat the grid item with the number of elements that I have in my data.
>
> **[5:32](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=332)** So let's go ahead and do that.
>
> **[5:33](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=333)** So I'm going to create this render facts function in here, and it's going to return this.props.facts, so the props that I passed to this component.
>
> **[5:49](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=349)** And then, we'll map it and for how many items I have inside of the data, please render what follows.
>
> **[6:01](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=361)** And this is where we're going to render our grid item.
>
> **[6:06](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=366)** So the grid item is going to have inside of it a key, which will be the ID of the items.
>
> **[6:12](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=372)** Let's take a look at the data just to make sure you understand what's happening here.
>
> **[6:16](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=376)** So let's go back to our source, take a look at the data very quickly.
>
> **[6:21](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=381)** And for each elements, and I believe we have 12 elements, yeah, we have 12 items inside of that JSON file.
>
> **[6:31](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=391)** So for each element, we have an ID which will be the key for our grid item in here, so the key that I was just about to write.
>
> **[6:39](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=399)** And then, for each of these elements, we'll have a title, fact, and clicked.
>
> **[6:43](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=403)** And this will be passed to that grid item.
>
> **[6:46](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=406)** And then, we'll define how that component displays those items in a future video.
>
> **[6:51](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=411)** So let's go ahead and pass the key as item.id so we have an ID for each item in here.
>
> **[6:58](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=418)** So zero, one, two, and whatever follows.
>
> **[7:02](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=422)** And then, we're going to pass for each element in our database the item.
>
> **[7:08](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=428)** So whatever is in the item here, we'll have access to all that data and leverage it inside of the component.
>
> **[7:15](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=435)** So then, we need to make sure we close that component, that, and then that completes what we need to do in here.
>
> **[7:24](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=444)** And we'll actually leverage the styles later on, but I'm not going to do that on that video.
>
> **[7:30](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=450)** So what we've done now is actually pass data to our application and then leverage that data inside of our grid where each of the item in the database will create a new grid item.
>
> **[7:41](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=461)** So let's save that and make sure we don't have any problems.
>
> **[7:45](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=465)** Yeah, so we have a warning, which is fine because we've defined styles, but we haven't used it, so that's fine.
>
> **[7:52](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=472)** If we ended up not using the styles, I would remove it.
>
> **[7:55](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=475)** So let's take a look also at our application, and we're still running fine.
>
> **[8:02](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=482)** Good.
>
> **[8:03](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/set-up-your-state-and-grid-component?u=76281980&t=483)** So now we're done with this, let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (18), pass (8), function (4), this. (3), extends (1)
> **CLI Commands:** make (8)
> **Env Vars:** json (2), nasa (1), css (1)
> **File Paths:** app.js (2), grid.module.css (1)
> **Tools:** terminal (3)
> **Exercise Files:** exercise files (1), template (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** click on (1)

#### Complete your grid item
> [LinkedIn Learning](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=0)** - [Instructor] Okay, so let's finish our grid items and make sure that we have styles applied to the grid and the grid items as well.
>
> **[0:07](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=7)** So we have a lot of code to write in this video.
>
> **[0:10](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=10)** So let's get ready.
>
> **[0:11](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=11)** So the first thing I'm going to do is actually go to the grid and add some styles that we can apply to the grid.
>
> **[0:18](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=18)** So let's go ahead and create a class called grid, and we're going to call or use columns gap or column gap.
>
> **[0:30](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=30)** And we're going to do 10 pixels column count.
>
> **[0:38](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=38)** We're going to do three.
>
> **[0:41](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=41)** And then padding.
>
> **[0:44](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=44)** We're going to do 175px to 20px or pixels, 10 pixels and 20 pixels.
>
> **[0:53](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=53)** And by the way, all these values are stuff that or values that I actually tested before I did the course.
>
> **[1:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=60)** So if you wonder what these are, or if you want to play with them, go ahead and actually change those.
>
> **[1:05](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=65)** And you'll see the results directly on the page.
>
> **[1:07](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=67)** But these are the things that I actually worked with, and basically set for my own project here.
>
> **[1:14](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=74)** All right, so let's save that.
>
> **[1:15](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=75)** We can close the file and then let's go in the actual grid and load that CSS in here.
>
> **[1:23](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=83)** So we already did the import.
>
> **[1:25](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=85)** So we're good there.
>
> **[1:26](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=86)** What we need to do at this point is actually use the render facts function inside of our render here.
>
> **[1:32](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=92)** Because it's not rendering it anyways right now, and actually leverage the styles as well.
>
> **[1:37](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=97)** So let's finish that code here will be very simple.
>
> **[1:40](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=100)** So the first thing we're going to do is do a section with a class name, and then we'll apply the styles.grid, what we just written.
>
> **[1:53](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=113)** And then close that.
>
> **[1:54](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=114)** And then inside of that section, we're going to render this, that render facts.
>
> **[2:02](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=122)** Boom.
>
> **[2:04](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=124)** And we're done.
>
> **[2:05](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=125)** So let's say save, let's check with our terminal, everything is working fine.
>
> **[2:10](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=130)** So we're still good.
>
> **[2:11](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=131)** And now let's move on to the actual grid item.
>
> **[2:15](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=135)** And what am I going to do for this one is do the actual CSS first and then apply to CSS to the actual component.
>
> **[2:23](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=143)** So let's go ahead and do that.
>
> **[2:24](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=144)** So I'm going to open the grid items CSS and the grid item component, the JavaScript.
>
> **[2:31](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=151)** So grid item.js.
>
> **[2:33](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=153)** So let's go into our module CSS and let's start writing some CSS.
>
> **[2:38](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=158)** So the first thing we're going to create is a card class and inside of it, we're going to do display in line block, and then we're going to do a width of 90%.
>
> **[2:52](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=172)** And again, these values are all stuff that I've defined before.
>
> **[2:55](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=175)** So if you want to play with these, go ahead and change them and you'll see how it looks versus what I've done.
>
> **[3:01](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=181)** So for that, we're going to do space mono.
>
> **[3:05](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=185)** And again, if it's not available or not supported, we are going to leverage mono space, border default.
>
> **[3:13](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=193)** Sorry, border radius.
>
> **[3:15](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=195)** I don't know why I said default, 3px our pixels border, and we're going to do one pixel solid.
>
> **[3:27](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=207)** And the rgba value is going to be 168, by 168, by 168.
>
> **[3:38](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=218)** And the alpha is going to be 0.2.
>
> **[3:42](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=222)** Like so.
>
> **[3:44](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=224)** Background color.
>
> **[3:47](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=227)** I don't like when it's not suggesting something, that means that I'm not typing something properly, but let's see what happens.
>
> **[3:54](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=234)** Rgba.
>
> **[3:56](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=236)** Zero.
>
> **[3:57](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=237)** Zero.
>
> **[3:58](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=238)** Zero.
>
> **[3:58](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=238)** 0.3.
>
> **[4:04](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=244)** Something's off here.
>
> **[4:07](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=247)** Oh, I didn't put the, there you go.
>
> **[4:10](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=250)** That's why.
>
> **[4:12](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=252)** When something's weird, there's a reason.
>
> **[4:15](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=255)** That means you've forgotten something, you've written a typo somewhere, something's off.
>
> **[4:20](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=260)** Just take a look at your code and figure it out, or take a look at the suggestions from the console.
>
> **[4:27](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=267)** There you go.
>
> **[4:29](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=269)** And then finally margin bottom 10 pixel.
>
> **[4:35](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=275)** Okay. So this class is done.
>
> **[4:37](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=277)** Now, what we're going to do is a hover for that class.
>
> **[4:41](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=281)** So card that hover.
>
> **[4:44](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=284)** So when we hover over that card, the styles are going to change.
>
> **[4:49](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=289)** So we're going to do animation name, flash.
>
> **[4:56](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=296)** And we're going to create that animation shortly.
>
> **[5:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=300)** Animation duration.
>
> **[5:04](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=304)** One second.
>
> **[5:06](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=306)** Border.
>
> **[5:08](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=308)** And one of the things that I recommend when people don't want to take a look at me, typing all these values.
>
> **[5:16](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=316)** What you could do is basically take a look at the exercise files and reproduce that.
>
> **[5:23](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=323)** Because this is basically all code that I've preset before the course, because I know these values are going to work.
>
> **[5:30](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=330)** But if you want to play with them, you can play with them.
>
> **[5:33](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=333)** But just to write them, you can actually use the exercise files, if you want to.
>
> **[5:39](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=339)** Rgba.
>
> **[5:41](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=341)** And basically we're reusing a lot of the same values as we've used before, which is good.
>
> **[5:47](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=347)** Now we're going to do a title with a margin top of five pixels, and then a margin bottom of 10 pixels.
>
> **[5:59](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=359)** Like so.
>
> **[6:01](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=361)** And then finally, we're going to do fact.
>
> **[6:06](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=366)** A fact class with a text line of justify.
>
> **[6:11](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=371)** Okay, so that's a lot of CSS, but we're done.
>
> **[6:15](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=375)** It return, save.
>
> **[6:17](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=377)** And now let's move on to the actual component.
>
> **[6:20](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=380)** And this is going to be the shorter part.
>
> **[6:22](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=382)** So instead of doing a class component or a stateful component here, let's do a functional component instead.
>
> **[6:29](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=389)** And I'm going to basically do this very quickly.
>
> **[6:33](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=393)** So grid item.
>
> **[6:36](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=396)** And don't forget to export after that, because I'm basically exporting right here.
>
> **[6:40](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=400)** So let's make sure we export after that.
>
> **[6:42](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=402)** So we're passing props on this one from the grid component, and now let's return, and start doing our divs.
>
> **[6:52](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=412)** And what I'm going to do is, well, actually I don't have to.
>
> **[6:56](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=416)** So let's go and create a div with a class name of styles.
>
> **[7:04](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=424)** And we haven't imported our style yet.
>
> **[7:06](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=426)** So let's go ahead and do that just to make sure that, we can leverage the auto-complete because we've already defined it prior.
>
> **[7:16](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=436)** And it's going to be grid item.module.css.
>
> **[7:23](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=443)** Like we've done throughout this course, this guy here.
>
> **[7:26](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=446)** Or basically this guy.
>
> **[7:28](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=448)** Perfect, so now we can leverage it right here, styles dot, and this one is the card.
>
> **[7:35](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=455)** Boom.
>
> **[7:36](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=456)** And then we can start working on our h2 or title with a class name.
>
> **[7:42](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=462)** And again, we defined already a style for our title and for this guy, the title was going to be passing props, dot fact, the title.
>
> **[7:57](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=477)** And again, if you wonder what I'm doing, let's go to the data and we're passing this guy.
>
> **[8:02](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=482)** So we have the id title fact clicked that we have available for each item inside of that component.
>
> **[8:10](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=490)** So let's leverage the title first.
>
> **[8:14](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=494)** Like so.
>
> **[8:15](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=495)** Then the second one is going to be an article tag and we're going to pass the styles dot, and you probably imagine what I'm going to do next, fact.
>
> **[8:31](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=511)** And now let's close the tag and then pass from the props the fact, dot fact.
>
> **[8:39](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=519)** 'Cause we have the fact here that we need to pass inside of the article here.
>
> **[8:46](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=526)** Perfect.
>
> **[8:47](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=527)** So now that we're done, all we need to do is make sure we export our little functional component that we created.
>
> **[8:57](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=537)** And I'm basically just going to leverage what I have in here and just finish it up.
>
> **[9:03](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=543)** Like so.
>
> **[9:06](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=546)** Boom.
>
> **[9:07](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=547)** Now let's save.
>
> **[9:08](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=548)** I'm going to check my terminology just to make sure that everything is going fine and everything is good there.
>
> **[9:14](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=554)** And then I'm going to switch to the browser just to take a look.
>
> **[9:18](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=558)** Okay, so now we're back in the browser and obviously there's an issue.
>
> **[9:22](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=562)** Because right now, if I look at this, I have the texts, but because it's black, we can't see it.
>
> **[9:28](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=568)** So we're going to make a minor correction.
>
> **[9:31](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=571)** So let's go back to VS code and hide the terminal.
>
> **[9:36](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=576)** And then I'm going to go into the CSS module.
>
> **[9:40](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=580)** And the only thing I'm going to add is color for the font.
>
> **[9:43](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=583)** So I'm just going to do that below the font family, and I'm going to do color, and then simply do white.
>
> **[9:50](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=590)** Like so.
>
> **[9:52](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=592)** So I'm going to save and then go back to the browser, and everything is showing up now.
>
> **[9:59](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=599)** Okay, perfect.
>
> **[10:01](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=601)** So basically what we've built here are the CSS for these cards here.
>
> **[10:06](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=606)** And as you can see, we see the cards, we see all the animations of the stars in the back.
>
> **[10:11](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=611)** This is really cool.
>
> **[10:13](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/complete-your-grid-item?u=76281980&t=613)** So let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (25), module (3), pass (3), this, (2), return, (2)
> **Env Vars:** css (9)
> **CLI Commands:** make (6)
> **UI Navigation:** go to (2), open the (1), switch to (1)
> **Tools:** terminal (2), vs code (1)
> **Definitions:** is a  (2), means that (1)
> **File Paths:** item.js (1), item.module.css (1)
> **Versions:** 0.2 (1), 0.3 (1)


### 4. 3. Interactions and Responsive Design

#### Basic animation with CSS keyframes
> [LinkedIn Learning](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/basic-animation-with-css-keyframes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/basic-animation-with-css-keyframes?u=76281980&t=0)** - [Trainer] Animations are the basis of great interactions.
>
> **[0:03](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/basic-animation-with-css-keyframes?u=76281980&t=3)** And we'll start adding them directly inside of our CSS modules.
>
> **[0:07](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/basic-animation-with-css-keyframes?u=76281980&t=7)** So where I want you to go is to this website, animate.style.
>
> **[0:14](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/basic-animation-with-css-keyframes?u=76281980&t=14)** And once you get to that, you can actually browse and take a look at what, the animations are here.
>
> **[0:19](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/basic-animation-with-css-keyframes?u=76281980&t=19)** So if you want to see what the flash animation is, you can see it directly here.
>
> **[0:24](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/basic-animation-with-css-keyframes?u=76281980&t=24)** So bounce, pulse, rubberBand and so on, so forth.
>
> **[0:28](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/basic-animation-with-css-keyframes?u=76281980&t=28)** So if you want to explore, go ahead and explore, what animations you'd like to add to the cards that we'll have into our application.
>
> **[0:37](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/basic-animation-with-css-keyframes?u=76281980&t=37)** So once you're ready.
>
> **[0:39](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/basic-animation-with-css-keyframes?u=76281980&t=39)** Let's go ahead and click on the GitHub logo right here.
>
> **[0:42](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/basic-animation-with-css-keyframes?u=76281980&t=42)** So this is going to bring us to the actual source of the repo and the source of the actual animation, so the CSS code that is used to do the animation.
>
> **[0:53](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/basic-animation-with-css-keyframes?u=76281980&t=53)** So once you're there, all you have to do is go into Source and then click on what type of animation you'd like to leverage.
>
> **[1:01](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/basic-animation-with-css-keyframes?u=76281980&t=61)** So in this case, we want to do an attention seeker.
>
> **[1:05](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/basic-animation-with-css-keyframes?u=76281980&t=65)** And then you can look directly into the CSS of what the animation you want to do.
>
> **[1:10](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/basic-animation-with-css-keyframes?u=76281980&t=70)** So if you wanted to do rubberBand, you can click on rubberBand CSS and take a look at rubberBand, like so.
>
> **[1:18](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/basic-animation-with-css-keyframes?u=76281980&t=78)** But in this case, I want to do flash.
>
> **[1:20](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/basic-animation-with-css-keyframes?u=76281980&t=80)** So, let's go ahead and take a look at flash.
>
> **[1:24](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/basic-animation-with-css-keyframes?u=76281980&t=84)** So this is the styles or the code for CSS that we have to add to our code to actually do this animation.
>
> **[1:32](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/basic-animation-with-css-keyframes?u=76281980&t=92)** So let's go ahead and copy that code like, so, and then let's go back to VS Code.
>
> **[1:40](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/basic-animation-with-css-keyframes?u=76281980&t=100)** And what we're going to do is paste that code directly inside of the grid item .module.css, right here.
>
> **[1:48](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/basic-animation-with-css-keyframes?u=76281980&t=108)** Because what we're doing in the card hover, we're actually calling on to the flash animation.
>
> **[1:54](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/basic-animation-with-css-keyframes?u=76281980&t=114)** So if you were to do something else, you would need to change the name of the animation here.
>
> **[1:59](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/basic-animation-with-css-keyframes?u=76281980&t=119)** So let's say you would do something like the rubberBand.
>
> **[2:02](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/basic-animation-with-css-keyframes?u=76281980&t=122)** The name of the key frame is what you want to grab here.
>
> **[2:06](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/basic-animation-with-css-keyframes?u=76281980&t=126)** So rubberBand would be the actual name that you will need to put in here.
>
> **[2:11](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/basic-animation-with-css-keyframes?u=76281980&t=131)** But in this case, we already put flash because I was planning ahead of time to do this and now I'm going to paste the code.
>
> **[2:20](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/basic-animation-with-css-keyframes?u=76281980&t=140)** And now I have everything I need to do the flash animation.
>
> **[2:24](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/basic-animation-with-css-keyframes?u=76281980&t=144)** So I'm going to save this and then go back to the website and reload.
>
> **[2:31](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/basic-animation-with-css-keyframes?u=76281980&t=151)** And now whenever I hover over any of the cards, it's going to do a flash animation.
>
> **[2:38](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/basic-animation-with-css-keyframes?u=76281980&t=158)** So if you were to do a rubberBand, they would do rubberBand and so on and so forth.
>
> **[2:42](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/basic-animation-with-css-keyframes?u=76281980&t=162)** So this is a quick way to add really cool automations to any of your applications inside of React, by leveraging animate.css.
>
> **[2:52](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/basic-animation-with-css-keyframes?u=76281980&t=172)** So we've done a base animation.
>
> **[2:54](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/basic-animation-with-css-keyframes?u=76281980&t=174)** Now we're ready to add some interactivity.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), case, (3), module (1), else, (1)
> **Code Identifiers:** rubberband (8)
> **Env Vars:** css (5)
> **File Paths:** module.css (1), animate.css (1)
> **Cross-References:** go back to (2)
> **Tools:** github (1), vs code (1)
> **UI Navigation:** click on (2)
> **Definitions:** is a  (1)

#### SVG loading with state
> [LinkedIn Learning](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=0)** - Sometimes you need to have visuals changed based on events like a mouse click, or UI change, et cetera.
>
> **[0:08](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=8)** This is exactly what we'll add to our website here.
>
> **[0:11](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=11)** So let's get to it.
>
> **[0:13](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=13)** So the first thing I want to do is minimize VScode for a second.
>
> **[0:17](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=17)** And what I want to do is grab two files from the exercise files.
>
> **[0:21](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=21)** So if you click on the exercise files and you click on resources, you'll have two JavaScript files called Badge and Explorer.
>
> **[0:30](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=30)** So these are basically components that I've created with an SVG file inside of it.
>
> **[0:36](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=36)** So basically code that creates an image.
>
> **[0:39](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=39)** Didn't want to code this live on the screen for you, because it's not a course about that.
>
> **[0:44](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=44)** So what we're going to do is copy those two files and then put them in the grid folder right here, like so.
>
> **[0:55](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=55)** Perfect.
>
> **[0:56](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=56)** So once we have that, let's go ahead and code our interactions.
>
> **[1:01](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=61)** And the next thing we're going to do is first create the function inside the app dot JS, right here that will allow us to click and change the state.
>
> **[1:11](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=71)** So what I'm going to do, just below the constructor right here.
>
> **[1:16](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=76)** I'm going to create a method or function.
>
> **[1:20](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=80)** That's going to be called update clicked, and we're going to pass an ID.
>
> **[1:26](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=86)** And that function will basically take the state and create a copy.
>
> **[1:33](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=93)** So we're going to create a brand new copy of the state with the object assign method, which is basically pure JavaScript.
>
> **[1:43](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=103)** And then leverage that state copy and fax that ID.
>
> **[1:51](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=111)** We're going to change the click to true, like so, so if you wonder what we're doing, if we take a look at the data again, each element has a clicked element and now it's false, but what we're going to do once we click on that particular element or card inside of our application, the click true the function here is going to change, picking up the ID, and I'm going to change click to true, like so.
>
> **[2:23](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=143)** So in our state, this is going to change to true, if we were to click on the NASA acronym.
>
> **[2:36](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=156)** And then we're going to make sure that we update our state inside of our application.
>
> **[2:44](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=164)** So basically we're doing all of this through the copy of the state and not the actual state.
>
> **[2:49](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=169)** And then we're setting the state with whatever we changed in the copy of our state.
>
> **[2:55](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=175)** Okay, so once you have the method or function done, what you need to do at this point is to add it to our actual, or pass it down to the component that needs it.
>
> **[3:05](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=185)** So let's go ahead and do that.
>
> **[3:06](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=186)** So I'm going to pass it down to here.
>
> **[3:09](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=189)** I'm going to call this updated click, and pass down the actual function that I created.
>
> **[3:14](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=194)** So this, that update clicked, and we're going to bind this just to make sure, like so.
>
> **[3:24](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=204)** Perfect.
>
> **[3:25](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=205)** So now that we've passed it down to our grid, we're going to open the grid.
>
> **[3:32](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=212)** And let's go ahead and open the main grid here, not the Explorer, the grid.
>
> **[3:40](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=220)** Awesome.
>
> **[3:41](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=221)** And then what we're going to do is in the grid, we're going to first create the method here.
>
> **[3:50](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=230)** So update clicked, pass the ID and then basically leverage this dot props, because now we have the update click as a prop and pass the ID.
>
> **[4:04](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=244)** Boom, we got it here.
>
> **[4:06](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=246)** And now we need to add it to our grid item because we're clicking the item and not the grid itself.
>
> **[4:12](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=252)** So basically we passed the function from the top level, all the way down to the actual component that needs it.
>
> **[4:19](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=259)** So we're going to pass it down to the grid item now, the same way we did it on the app.
>
> **[4:24](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=264)** So if you want to copy the code right here, so this code all the way to here, like so, this is exactly what you need to add right here, like so.
>
> **[4:37](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=277)** Updated clicked this, updated clicked, bind this.
>
> **[4:40](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=280)** And that's pretty much what we need to do on the grid.
>
> **[4:43](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=283)** So you save this and now what we need to do is leverage that inside of the grid item.
>
> **[4:50](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=290)** So change the styles as we click.
>
> **[4:54](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=294)** So what am I going to do also is to add some styles to grid item.
>
> **[5:03](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=303)** Not this one, but grid item dot module dot CSS.
>
> **[5:06](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=306)** I'm going to add a badge.
>
> **[5:12](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=312)** Little margin bottom, just to make sure when we have the badge,
>
> **[5:23](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=323)** we have that style.
>
> **[5:24](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=324)** Perfect.
>
> **[5:25](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=325)** So that's something that I added when I actually tested the badge that we just added.
>
> **[5:29](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=329)** So this badge here, just to make sure that it fits properly.
>
> **[5:33](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=333)** So just add that it's going to look better.
>
> **[5:36](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=336)** And again, all the styles are pretty much stuff that you can play on your own and make it your own, basically explore whatever you want.
>
> **[5:44](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=344)** All right, so now we need to actually make the code or create the code.
>
> **[5:49](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=349)** So when we click on this grid item, something's going to happen.
>
> **[5:53](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=353)** So what we're going to do is add a few things here.
>
> **[5:57](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=357)** So now we have access to the on click.
>
> **[6:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=360)** That is the function that we can leverage in react.
>
> **[6:03](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=363)** So when we click on something, do something and that's the function that's going to happen.
>
> **[6:08](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=368)** So in this case, what we're going to do is leverage the updated click past the props, fact that ID, which basically means that we're passing the ID to the function and it's going to change at that point, what's going to happen.
>
> **[6:30](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=390)** And when that happens, what you want to do is either add the Explorer or the badge.
>
> **[6:39](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=399)** So basically when we click on the actual card, either add the badge or the Explorer SVG.
>
> **[6:46](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=406)** So what we're going to do is do this, so props fact dot click question marks.
>
> **[6:54](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=414)** So basically this is a NIF statement.
>
> **[6:56](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=416)** So this is the ES6 and above version of an if statement.
>
> **[7:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=420)** So if you clicked and it's true, add the Explorer component in here, otherwise add the badge.
>
> **[7:13](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=433)** So the two SVGs that I created will basically show one or the other based on the actual state of that particular component here.
>
> **[7:24](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=444)** So if it's true, it's going to show Explorer. If it's false, it's going to show the badge.
>
> **[7:29](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=449)** But now what we need to do, because right now we've actually imported this.
>
> **[7:33](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=453)** So we're going to have an error if I save this because I didn't import the badge and the Explorer.
>
> **[7:38](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=458)** So we need to import those.
>
> **[7:39](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=459)** So let's go ahead and do that and then import Explorer, from Explorer.
>
> **[7:56](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=476)** So we have all of our elements for the click event.
>
> **[8:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=480)** So let's go and test it.
>
> **[8:02](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=482)** So I'm going to turn this or save this, and I'm going to check if everything is running okay, from a terminal perspective.
>
> **[8:12](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=492)** And now I'm going to go to the browser.
>
> **[8:14](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=494)** And as you can see, I have this SVG that shows up at the top if I click on it.
>
> **[8:22](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=502)** Okay.
>
> **[8:23](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=503)** So there seems to be a typo in the actual function that I created.
>
> **[8:27](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=507)** It's not updated, but update clicked.
>
> **[8:30](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=510)** So let's go and change the typo on that one, because I've actually pass, if you want to actually debug this yourself, you're going to see I've actually pass, update clicked, and not updated click.
>
> **[8:43](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=523)** So that's my mistake.
>
> **[8:44](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=524)** So let's go and make that change.
>
> **[8:47](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=527)** Now it should be running.
>
> **[8:49](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=529)** Okay.
>
> **[8:50](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=530)** So everything's fine on the console.
>
> **[8:53](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=533)** Let's go back to the browser and now everything's good.
>
> **[8:56](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=536)** If I click on it now I've got this brand new SVG that shows up.
>
> **[9:01](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=541)** So whenever I click on an element here, it's going to turn the actual state of that specific card to true, as opposed to false.
>
> **[9:11](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=551)** And it's going to change the SVG.
>
> **[9:14](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=554)** So good job.
>
> **[9:15](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/svg-loading-with-state?u=76281980&t=555)** And let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** function (11), let (10), pass (9), this, (4), this. (2)
> **UI Navigation:** click on (9), open the (2), go to (1)
> **Env Vars:** svg (5), nasa (1), css (1), nif (1), es6 (1)
> **CLI Commands:** make (7)
> **Exercise Files:** exercise files (2)
> **Definitions:** basically means (1), is a  (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)

#### Add final elements
> [LinkedIn Learning](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=0)** - [Instructor] Now that we have completed a good portion of our project while learning how to use CSS modules, let's add a few items that will truly make our project pop.
>
> **[0:10](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=10)** So the first thing we're going to do is go inside of the Exercise Files in the resources folder.
>
> **[0:16](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=16)** And we have three files that I want you to bring into our project.
>
> **[0:20](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=20)** First one being NASA MP3 which is basically a sound file that is a rocket launch.
>
> **[0:27](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=27)** If you want to listen to it, you can actually open it, (audio plays) and you'll hear what it is.
>
> **[0:33](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=33)** The second and the third are the shuttle and the smoke.mov.
>
> **[0:39](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=39)** Now here's something that's going to be different than what we've done before.
>
> **[0:44](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=44)** I don't know if you remember, before we actually copied and pasted the files, and they had to be inside of the source folder.
>
> **[0:53](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=53)** Otherwise, React wouldn't recognize that.
>
> **[0:56](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=56)** Well, that was when we actually were loading these files from a CSS file.
>
> **[1:02](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=62)** So if we go back to our code, just to bring back some context into this.
>
> **[1:08](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=68)** If we go into, they were in the rocket, I believe.
>
> **[1:16](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=76)** Background, there you go.
>
> **[1:17](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=77)** So we were loading these files from a CSS module.
>
> **[1:22](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=82)** When they are in a CSS module, you need to have them inside of the source folder.
>
> **[1:27](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=87)** If you need to load them anywhere else in the project, you can have them in the public folder and do basically what we were doing before, is actually do forward slash and the name of the file.
>
> **[1:41](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=101)** So this is what we're going to do.
>
> **[1:42](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=102)** So let me just close those two files here.
>
> **[1:45](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=105)** Let's go back to that.
>
> **[1:49](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=109)** Copy those files and then put them in the public folder.
>
> **[1:53](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=113)** Like so.
>
> **[1:54](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=114)** Close those folders.
>
> **[1:56](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=116)** All right. So let's start by working on the rocket.
>
> **[1:59](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=119)** So the first thing I want to show is the rocket.
>
> **[2:02](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=122)** So I'm going to bring the JavaScript file and the CSS module.
>
> **[2:06](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=126)** So the first thing I'm going to do is actually load the rocket right here.
>
> **[2:11](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=131)** So I'm going to actually import also the CSS styles right away before I forget about it and do Rocket.module.css.
>
> **[2:28](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=148)** So now that's loaded.
>
> **[2:29](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=149)** Now let's load an image here inside of the rocket title.
>
> **[2:35](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=155)** Let's do image.
>
> **[2:37](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=157)** The source is basically the main folder, so shuttle.png.
>
> **[2:45](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=165)** And you're always need to have alt when you do an image inside of React.
>
> **[2:50](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=170)** Otherwise, it's going to give you an error.
>
> **[2:53](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=173)** And then we're going to bring the modules CSS styles.
>
> **[2:59](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=179)** And close the tag.
>
> **[3:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=180)** Okay. So let's save that.
>
> **[3:02](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=182)** Let's go and make sure that our image is loaded.
>
> **[3:05](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=185)** So let's go into our project here.
>
> **[3:08](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=188)** Let's scroll down, and we see the show.
>
> **[3:10](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=190)** It's a bit big right now, so what we'll do is go back here and go inside of our CSS file.
>
> **[3:18](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=198)** We're going to do some adjustments on the image.
>
> **[3:20](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=200)** So let's do a class of image, do a position, relative.
>
> **[3:27](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=207)** I don't know why I removed that.
>
> **[3:30](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=210)** Bottom.
>
> **[3:31](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=211)** Let's do minus 25 pixels with- And again, these are all values that I tested before, so I know these are going to look great.
>
> **[3:42](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=222)** If you want to do your own, do your own.
>
> **[3:45](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=225)** It's entirely fine to do that.
>
> **[3:49](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=229)** Margin bottom.
>
> **[3:51](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=231)** And you can actually do my own values and then play with them just to make sure that, you know, you can play with it, to do your own thing.
>
> **[4:01](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=241)** So z index, I'm going to do 99 just to be sure that it sits on the very top of everything, okay?
>
> **[4:08](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=248)** So now that's save.
>
> **[4:10](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=250)** Let's continue working on our stuff.
>
> **[4:12](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=252)** The next thing we're going to work on is the actual smoke.
>
> **[4:17](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=257)** So let's go into the smoke JavaScript first.
>
> **[4:23](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=263)** And we're going to do the same.
>
> **[4:24](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=264)** So let's go and import our styles from Smoke.module.css.
>
> **[4:32](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=272)** That's exactly what I've done here.
>
> **[4:35](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=275)** Let's open it just to make sure it's Smoke.module.css.
>
> **[4:38](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=278)** Yep.
>
> **[4:39](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=279)** Because again, if you have a typo, React is going to react on you.
>
> **[4:44](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=284)** (chuckles) All right. So the first thing I'm going to first add a className to the top div, which will be the smoke.
>
> **[4:55](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=295)** And then inside of that div, I'm going to add a video, and that's the video we just loaded inside of our public folder here.
>
> **[5:07](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=307)** So this one, smoke video.
>
> **[5:09](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=309)** We're going to have some smoke, just going to be below the actual rocket.
>
> **[5:15](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=315)** ClassName.
>
> **[5:16](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=316)** And then we'll apply styles.video.
>
> **[5:21](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=321)** Autoplay.
>
> **[5:24](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=324)** Loop.
>
> **[5:25](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=325)** Source, smoke.mov, And then close the tag. Whoops.
>
> **[5:36](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=336)** That's not what I want.
>
> **[5:37](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=337)** I want to actually do a closing tag like this. Okay.
>
> **[5:42](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=342)** So now we have our video inside of our JavaScript file, now we need to apply some styles to this, just to make sure that we have proper styling for the smoke and also for the video.
>
> **[5:54](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=354)** So let's go position, relative, bottom, zero pixel.
>
> **[6:02](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=362)** Then we'll do a margin top of minus 500 pixels and then z index of 99 as well.
>
> **[6:11](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=371)** So the rocket and the actual smoke is going be at the same level, as supposed to be one on top of each other.
>
> **[6:19](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=379)** And now let's do the class for a video.
>
> **[6:22](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=382)** We're going to do a width of 100%.
>
> **[6:26](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=386)** Height, auto.
>
> **[6:28](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=388)** And then opacity 0.5.
>
> **[6:33](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=393)** Okay. So now that we've done all this, let's take a look at what it looks like.
>
> **[6:39](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=399)** So let's go back.
>
> **[6:40](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=400)** And first, I always check the console first, because if there's a major error, it's going to show in the console first.
>
> **[6:47](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=407)** And then if it's really a style error or something that is minimal, mostly style, it's going to a actually show us the error on the browser.
>
> **[6:59](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=419)** And we don't have any error.
>
> **[7:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=420)** I'm just going to refresh just out of- And then scroll all the way down.
>
> **[7:07](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=427)** And I have smoke with a rocket.
>
> **[7:16](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=436)** Awesome.
>
> **[7:17](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=437)** Now the last thing I want to do is actually add the audio file to this page.
>
> **[7:24](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=444)** So when we load the page, it's going to play the launch, the rocket launch.
>
> **[7:28](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=448)** So where you actually load that is in the HTML file.
>
> **[7:33](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=453)** Let's go into the HTML file, like so.
>
> **[7:37](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=457)** And what I'm going to do is basically go inside of the body, so line 29 and below, and remove all that commenting from React.
>
> **[7:46](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=466)** Thank you very much for telling us all this.
>
> **[7:49](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=469)** And then what I'm going to do is load that sound file.
>
> **[7:52](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=472)** So it's fairly easy to load audio inside of an HTML file.
>
> **[7:56](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=476)** If you don't want to do that, you can actually not do that code, because audio files is something that is kind of, some people like it, some people don't like it.
>
> **[8:06](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=486)** But if you don't want to add it, that's completely fine.
>
> **[8:09](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=489)** So now the way to do this is to do audio.
>
> **[8:13](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=493)** And I'm going to do an autoplay on this on loop.
>
> **[8:17](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=497)** So it's going to be annoying.
>
> **[8:19](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=499)** And then inside of that audio, I actually determine what the source is.
>
> **[8:26](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=506)** So the source of that audio is the NASA file.
>
> **[8:31](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=511)** This guy here.
>
> **[8:32](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=512)** So you want to make sure you also make high caps for all letters to match the name of the file.
>
> **[8:39](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=519)** Otherwise, it's not going to load.
>
> **[8:41](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=521)** Type audio, mpeg.
>
> **[8:46](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=526)** And then close that tag.
>
> **[8:48](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=528)** Okay.
>
> **[8:49](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=529)** And now that we saved this, most likely React will start the audio file, so check the controller.
>
> **[8:57](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=537)** If it doesn't, we will just refresh the page.
>
> **[9:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=540)** Okay. So now let's check the browser.
>
> **[9:03](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=543)** And I'm going to refresh just to be sure.
>
> **[9:06](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=546)** And I'm going to scroll down, and I can see that the actual movie is not playing here.
>
> **[9:12](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=552)** This is most likely a protection from your browser.
>
> **[9:16](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=556)** So if you want to make sure that it's actually working, what you could do is change browsers.
>
> **[9:21](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=561)** So for example, I have Safari, let's go to Safari and enter localhost 3000.
>
> **[9:32](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=572)** Refresh.
>
> **[9:33](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=573)** And the actual animation is working here.
>
> **[9:36](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=576)** So the movie's working.
>
> **[9:38](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=578)** So we have that part, but we don't have the sound or the actual NASA launch.
>
> **[9:43](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=583)** And again, it's probably a protection from your browser, because most browsers, as of late, they protect from playing sounds from websites automatically.
>
> **[9:54](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=594)** But there are settings that you can change inside of the browser.
>
> **[9:58](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=598)** But I know for a fact that Firefox allows you to actually check this from the get go.
>
> **[10:03](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=603)** So I'm going to open Firefox.
>
> **[10:05](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=605)** And I'm going to enter localhost.
>
> **[10:08](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=608)** (audio plays) And this is the setting question.
>
> **[10:15](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=615)** So if I block audio video, it's going to stop if I refresh.
>
> **[10:21](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=621)** I'm no longer going to have the audio playing.
>
> **[10:25](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=625)** And the video is not playing as well.
>
> **[10:27](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=627)** But if I want that to play, I can go to the settings, go here and allow audio and video and simply refresh.
>
> **[10:35](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=635)** So this is basically a security setting from your browser that prevents from playing video or audio files automatically, because this is something that's annoying for a lot of users.
>
> **[10:47](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=647)** And that's okay.
>
> **[10:48](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=648)** But I just wanted to show you that there's a way to hear it.
>
> **[10:51](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=651)** But FYI, if you truly want your MP3 file or sound files to play, there is a little trick on the web that I've seen on Stack Overflow, where if you changed the bit rate to 128 kilobytes per second, it's going to work.
>
> **[11:09](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=669)** I'm not sure, I haven't tested it.
>
> **[11:10](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=670)** But I like to have that security feature from the browser, because, personally, when I go to a website, if it plays something automatically, it's a little bit annoying for me.
>
> **[11:20](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=680)** But in all cases, if you want to test your files, you can always do it here.
>
> **[11:25](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=685)** So you can refresh (audio plays) and get that, and you're going to have the animation here as well.
>
> **[11:32](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=692)** So.
>
> **[11:35](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=695)** So now if you're like me, and you love space, this is one project to cherish and watch and hear several times over with the actual sound over.
>
> **[11:46](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/add-final-elements?u=76281980&t=706)** So let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (24), module (6), this. (3), public (3), this, (3)
> **Env Vars:** css (8), nasa (3), html (3), mp3 (2), fyi (1)
> **CLI Commands:** make (8)
> **UI Navigation:** go to (3), scroll down (2)
> **Tools:** safari (2), firefox (2)
> **File Paths:** smoke.module.css (2), rocket.module.css (1)
> **Cross-References:** go back to (2)
> **Definitions:** is a  (2)

#### Media queries and combining styles
> [LinkedIn Learning](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=0)** - [Narrator] In CSS modules, you can do media queries the same way you've done it before with HTML.
>
> **[0:06](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=6)** It'll work too.
>
> **[0:07](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=7)** However, I want to show you an example of doing them externally of the component and then leveraging CX composition to add multiple styles to one element.
>
> **[0:18](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=18)** So, let me demonstrate.
>
> **[0:19](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=19)** So, the actual library that we're going to leverage to do that is this library, classnames.
>
> **[0:26](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=26)** So, the way to install it, basically you do, npm install classnames, and I'm going to do that inside of the application.
>
> **[0:33](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=33)** And I'm going to bring my terminal, stop the application with control + C, npm install class name.
>
> **[0:44](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=44)** Like so.
>
> **[0:47](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=47)** once you have that, let's go ahead and do npm start again, So we have our project running in the background.
>
> **[0:54](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=54)** Everything is running fine, let's close the terminal.
>
> **[0:58](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=58)** And then what I'm going to do is create inside of our grid a brand new module.
>
> **[1:04](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=64)** So, right here, brand new file.
>
> **[1:07](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=67)** And I'm going to call this Media .module .CSS.
>
> **[1:13](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=73)** Like so.
>
> **[1:14](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=74)** And basically what I'm going to do is start adding some media CSS styles right here.
>
> **[1:20](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=80)** So, let's go ahead and do that. Again, these are my values.
>
> **[1:26](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=86)** Feel free to do your own.
>
> **[1:28](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=88)** For the grid, we're going to do something different at this width of a 1,024 pixels.
>
> **[1:35](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=95)** We're going to do a column-gap of 10 pixels, column-count of two, and then padding, we're going to do 175 pixels by 10 pixels, 10 pixels, 10 pixels.
>
> **[1:58](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=118)** Okay, so we got the first one.
>
> **[2:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=120)** Now, we're going to do another media query for 768 pixels.
>
> **[2:07](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=127)** Like so.
>
> **[2:13](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=133)** And then for that one, we're going to basically replicate a lot of that code here so we can copy that.
>
> **[2:20](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=140)** So, the column gap is going to remain.
>
> **[2:23](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=143)** The column count is going to be one.
>
> **[2:25](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=145)** And then here for the second value, we're going to do five pixels.
>
> **[2:30](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=150)** And then for the last value, five pixels as well.
>
> **[2:34](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=154)** We're also going to add something for the title and we're going to work on our styles for the title fairly shortly.
>
> **[2:40](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=160)** And we're going to do a font-size of 3em, as opposed to 4em, which is the value that it has right now.
>
> **[2:49](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=169)** Okay, so we got our module.
>
> **[2:51](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=171)** Now let's compose these styles along with the styles that we already have for our grid.
>
> **[2:58](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=178)** So, what I'm going to do is actually open the Grid.js file here.
>
> **[3:03](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=183)** And I'm going to make one very simple change here.
>
> **[3:08](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=188)** But the first thing we're going to do is make sure that we have all of our styles imported here.
>
> **[3:12](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=192)** So, we have our grill module and we're going to import also mediastyles from our module, that we have right here.
>
> **[3:26](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=206)** So, Media .module .css, Like so.
>
> **[3:30](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=210)** And then we're going to use the brand new library we just installed, which is the classnames to compose those two styles or those two stylesheets into our section here.
>
> **[3:44](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=224)** So, how do you go about that is fairly simple inside of react.
>
> **[3:49](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=229)** So, here, as opposed to do just styles, we're going to do something else.
>
> **[3:54](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=234)** So, I'm just going to hit return and actually remove all this, just to show you from scratch what it would look like, actually not hit return.
>
> **[4:05](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=245)** So, you wouldn't use something in... Actually you need to import it first.
>
> **[4:08](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=248)** So, we need to actually go here and import classnames.
>
> **[4:13](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=253)** So, I'm going to use the letter CX from classnames, like so.
>
> **[4:19](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=259)** Now we have access to it.
>
> **[4:20](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=260)** And now in the actual styles here, I'm going to use CX, which is basically a function that allows to add multiple stylesheets into this particular function.
>
> **[4:33](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=273)** So, basically what we're going to do is go ahead and add our styles.
>
> **[4:40](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=280)** grid, comma and also media styles .grid.
>
> **[4:48](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=288)** So, we're basically combining the two into the one.
>
> **[4:53](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=293)** And all of our styles are going to be applied, like so.
>
> **[4:56](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=296)** And save that.
>
> **[4:57](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=297)** If you take a look at the terminal, everything is fine.
>
> **[5:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=300)** And then also inside of the browser, everything is fine.
>
> **[5:04](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=304)** So, the only way to see how it looks and I actually have... Right now, we don't see the title, but the grid will change if we actually shrink this.
>
> **[5:15](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=315)** So, now we're at two.
>
> **[5:17](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=317)** So, the media styles have been applied automatically.
>
> **[5:19](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=319)** The title, we don't see it yet.
>
> **[5:21](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=321)** So, that's why we're not seeing anything here.
>
> **[5:24](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=324)** So, let's go ahead and make those changes for the title.
>
> **[5:26](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=326)** So, I'm going to close the terminal, bring up the title, right here.
>
> **[5:34](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=334)** The styles for title and also Title.js.
>
> **[5:38](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=338)** And the first thing I'm going to do for title, is make a lot of changes here.
>
> **[5:42](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=342)** So, the font size we're going to keep.
>
> **[5:45](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=345)** Then what I'm going to do is add color, white.
>
> **[5:48](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=348)** So, we can actually see the font.
>
> **[5:51](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=351)** Position fixed, left 50%, transform translate, and we're going to do minus 50 percent.
>
> **[6:08](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=368)** So, we're adding a little bit of an animation here, with 100% margin-bottom.
>
> **[6:15](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=375)** And again, I'm just basically typing what you would see if you look into the exercise files.
>
> **[6:20](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=380)** So, feel free to copy and paste or just type along with me.
>
> **[6:25](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=385)** So, this is zero, zero, zero, 0.5.
>
> **[6:32](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=392)** Margin- top zero, margin-bottom zero and padding top 0.67 em.
>
> **[6:47](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=407)** And again, these are values that I actually played with for a little bit and figured out that these look great.
>
> **[6:55](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=415)** Okay, well now we have that.
>
> **[6:57](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=417)** And I'd like to add a media query for this one.
>
> **[7:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=420)** So, I'm going to go for media query max-width.
>
> **[7:05](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=425)** So, you can basically do that directly inside of the CSS module.
>
> **[7:09](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=429)** So, you could basically add all your media queries directly here, as opposed to do in a separate file like I did.
>
> **[7:15](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=435)** But I wanted to show you a way where you can combine multiple stylesheets into one classname, inside of a component.
>
> **[7:22](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=442)** So, that's very useful when you want to start decomposing your code and make sure that it's very clean and you can easily find some styles that you apply to something by the name of the file.
>
> **[7:35](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=455)** So... And again, it adds to the modularity of your project, 768 pixels, and I'm going to title, font-size 3em.
>
> **[7:50](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=470)** And I believe I'm just repeating what I've done here.
>
> **[7:54](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=474)** Yeah so, basically I wanted to show you, you can do it here, but you can also do it here.
>
> **[8:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=480)** So, if you don't want to have it repeated in the code, and that's a good idea.
>
> **[8:05](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=485)** Let's clean it here, and then let's add it directly into the file itself.
>
> **[8:11](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=491)** Like so.
>
> **[8:11](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=491)** Okay!
>
> **[8:12](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=492)** So now we have our styles.
>
> **[8:14](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=494)** The last thing we need to do is change our title and make sure that it says something that's related to NASA.
>
> **[8:21](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=501)** So let's go and do, NASA facts.
>
> **[8:26](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=506)** Perfect.
>
> **[8:26](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=506)** So, we're done.
>
> **[8:28](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=508)** So, let's go and make sure to test this.
>
> **[8:31](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=511)** Bring up the terminal.
>
> **[8:33](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=513)** Everything is good.
>
> **[8:44](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=524)** as we scroll, The movie is working here, which is good.
>
> **[8:52](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=532)** We don't hear the sound.
>
> **[8:53](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=533)** That's probably a protection from react.
>
> **[8:55](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=535)** You can click here, it changes everything.
>
> **[8:57](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/media-queries-and-combining-styles?u=76281980&t=537)** And then also media query wise, the title changes, the number of element changes, and I can basically see that my media queries are also working.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), module (7), function (2), this. (2), else. (1)
> **CLI Commands:** make (7), npm (3), find (1)
> **Env Vars:** css (4), nasa (2), html (1)
> **Tools:** terminal (5)
> **Prerequisites:** install (3)
> **File Paths:** grid.js (1), title.js (1)
> **Versions:** 0.5 (1), 0.67 (1)
> **UI Navigation:** open the (1)


### 5. Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/next-steps?u=76281980&t=0)** - [Emmanuel] This course was an introduction to CSS modules in React applications.
>
> **[0:06](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/next-steps?u=76281980&t=6)** With the tools and syntax we've explored here, you should be able to use CSS modules in your next React Project.
>
> **[0:13](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/next-steps?u=76281980&t=13)** Using CSS with React is always an evolving subject, so always go back to the community on Facebook or follow them on Twitter.
>
> **[0:21](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/next-steps?u=76281980&t=21)** And finally, always read the docs for any updates.
>
> **[0:25](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/next-steps?u=76281980&t=25)** Feel free to integrate any of your pre-processors and use Sass, Stylus, or Less with React CSS modules.
>
> **[0:33](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/next-steps?u=76281980&t=33)** However, I found that this approach adds extra steps to get the same result while you have the same benefits that these bring with CSS modules.
>
> **[0:43](https://www.linkedin.com/learning/react-building-styles-with-css-modules-9222678/next-steps?u=76281980&t=43)** Thanks very much for taking my course and I'll see you in a bit.

> [!info]- Semantic Content
>
> **Env Vars:** css (5)
> **Code Keywords:** finally, (1)
> **Cross-References:** go back to (1)
> **Documentation:** the docs (1)
> **Speakers:** - [emmanuel] (1)


## Instructor

- [[Emmanuel Henri]]

## Resources

- Exercise files available

## Skills Covered

- Cascading Style Sheets (CSS)
- React.js

## Path Context

### In [[Improve Your React Skills]]
← [[Building Modern Uis With React Router V6]] | **2 of 9** | [[React- Securing Applications]] →

## Appears In

- [[Improve Your React Skills]]

## Related Courses

_Courses sharing skills:_

- [[Making Sense of the CSS Box Model]] — Cascading Style Sheets (CSS)
- [[React- Cloud-Powered Apps with Firebase]] — React.js
- [[Building a GraphQL Project with React.js]] — React.js
- [[React- Software Architecture]] — React.js
- [[React- Testing and Debugging]] — React.js

---

[↑ Back to top](#)