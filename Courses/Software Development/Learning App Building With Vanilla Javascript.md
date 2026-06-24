---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: learning-app-building-with-vanilla-javascript
url: "https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript"
level: Intermediate
updated: 10/11/2017
learners: 31352
skills:
  - JavaScript
  - Vanilla
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQFOZxWc6nErRg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567118219619?e=2147483647&amp;v=beta&amp;t=7O-1IBj_oFEwB4zKYZScGTd2MzxX0i4NWHzUip-zmqE"
linkedin_topic: Software Development
learning_paths:
  - '[Explore Web Development with Vanilla JavaScript](../../Paths/Software%20Development/Learning%20Paths/Explore%20Web%20Development%20with%20Vanilla%20JavaScript.md)'
  - '[Become a JavaScript Developer](../../Paths/Network%20and%20System%20Administration/Learning%20Paths/Become%20a%20JavaScript%20Developer.md)'
prev_courses:
  - null
  - '[JavaScript- Classes](../Network%20and%20System%20Administration/JavaScript-%20Classes.md)'
next_courses:
  - '[Learning Functional Programming with JavaScript ES6+](Learning%20Functional%20Programming%20with%20JavaScript%20ES6%2B.md)'
  - '[HTML Essential Training](../Web%20Development/HTML%20Essential%20Training.md)'
path_nav: '[{"path":"Explore Web Development with Vanilla JavaScript","position":1,"total":8,"prev":null,"next":"Learning Functional Programming with JavaScript ES6+"},{"path":"Become a JavaScript Developer","position":8,"total":13,"prev":"JavaScript- Classes","next":"HTML Essential Training"}]'
path_count: 2
tags:
  - course
  - topic/software-development
  - topic/web-development
  - topic/network-and-system-administration
  - skill/javascript
  - skill/vanilla
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Learning%20App%20Building%20With%20Vanilla%20Javascript.md)

![Learning App Building With Vanilla Javascript](https://media.licdn.com/dms/image/v2/C4E0DAQFOZxWc6nErRg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567118219619?e=2147483647&amp;v=beta&amp;t=7O-1IBj_oFEwB4zKYZScGTd2MzxX0i4NWHzUip-zmqE)

# Learning App Building With Vanilla Javascript

> JavaScript libraries like jQuery and frameworks like React have a lot of benefits to offer, but performance can be a tradeoff. Removing jQuery and React can improve site speed without impacting user experience. But many developers have never learned the equivalent code in JavaScript. This course teaches you how to program the same features and functionality with vanilla JavaScript. Instructor Sash

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript) | Intermediate | 31K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Welcome](#welcome)
  - [What you should know](#what-you-should-know)
  - [Exercise files](#exercise-files)
- [**1. Overview of Vanilla JS**](#1-overview-of-vanilla-js) (2 videos)
  - [Libraries, frameworks, and vanilla JavaScript](#libraries-frameworks-and-vanilla-javascript)
  - [Identify when to replace frameworks and libraries](#identify-when-to-replace-frameworks-and-libraries)
- [**2. Project Overview**](#2-project-overview) (1 videos)
  - [Application architecture](#application-architecture)
- [**3. Environment Setup**](#3-environment-setup) (2 videos)
  - [Environment setup](#environment-setup)
  - [Getting your API key](#getting-your-api-key)
- [**4. Replace Ajax**](#4-replace-ajax) (2 videos)
  - [Fetch API](#fetch-api)
  - [Create an Ajax request with Fetch](#create-an-ajax-request-with-fetch)
- [**5. Select and Modify DOM Elements**](#5-select-and-modify-dom-elements) (3 videos)
  - [Element selection with vanilla JavaScript](#element-selection-with-vanilla-javascript)
  - [Select and modify elements with querySelector](#select-and-modify-elements-with-queryselector)
  - [Select and modify elements with querySelectorAll](#select-and-modify-elements-with-queryselectorall)
- [**6. Replace Event Listeners**](#6-replace-event-listeners) (3 videos)
  - [JavaScript events](#javascript-events)
  - [Add event listeners with vanilla JavaScript](#add-event-listeners-with-vanilla-javascript)
  - [Work with the event object](#work-with-the-event-object)
- [**7. Implement Data Binding**](#7-implement-data-binding) (5 videos)
  - [Data binding](#data-binding)
  - [Create elements with vanilla JavaScript](#create-elements-with-vanilla-javascript)
  - [Add and modify properties with vanilla JavaScript](#add-and-modify-properties-with-vanilla-javascript)
  - [Append elements with vanilla JavaScript](#append-elements-with-vanilla-javascript)
  - [Template literals to build DOM content](#template-literals-to-build-dom-content)
- [**8. Replace Simple Animations**](#8-replace-simple-animations) (3 videos)
  - [Animation with vanilla JavaScript](#animation-with-vanilla-javascript)
  - [Show and hide elements using vanilla JavaScript](#show-and-hide-elements-using-vanilla-javascript)
  - [Transition element appearance using CSS](#transition-element-appearance-using-css)
- [**9. Ensure Backward Compatibility**](#9-ensure-backward-compatibility) (2 videos)
  - [Backward compatibility for vanilla JavaScript](#backward-compatibility-for-vanilla-javascript)
  - [Transpile vanilla JavaScript](#transpile-vanilla-javascript)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Welcome](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/welcome?u=76281980&t=1)** - Building apps with [Vanilla](../../Skills/Web%20Development/Vanilla.md) [JavaScript](../../Skills/Software%20Development/JavaScript.md) alone, without libraries or frameworks, can provide better load times and better overall performance without giving up modern features like data binding and animation. I'm Sasha Vodnik, a web developer, author, and educator. In this course, I'll invite you to think about removing libraries and frameworks using this metaphor as we convert an app that builds the same features and functionality with Vanilla JavaScript alone. We'll get familiar with modern JavaScript solutions like the [Fetch](../../Skills/Web%20Development/Fetch.md) API for [AJAX](../../Skills/Web%20Development/AJAX.md) requests. I'll show you how to implement Vanilla JavaScript approaches to common tasks like selecting elements. And we'll build out efficient solutions for common components of modern web apps, like updating the DOM. After you complete this course, you'll be able to rely on Vanilla JavaScript in your new projects, or to refactor existing apps. Let's dive in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (5), [Vanilla](../../Skills/Web%20Development/Vanilla.md) (4), [Fetch](../../Skills/Web%20Development/Fetch.md) (1), [AJAX](../../Skills/Web%20Development/AJAX.md) (1)
> **Env Vars:** api (1), dom (1)
> **Speakers:** - building (1)

#### [What you should know](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/what-you-should-know?u=76281980&t=0)** - [Instructor] This course assumes basic familiarity with [HTML](../../Skills/Web%20Development/HTML.md), CSS, and [JavaScript](../../Skills/Software%20Development/JavaScript.md). You should understand the basic syntax of HTML and CSS, and how CSS style rules are applied to DOM elements. You should also have basic experience coding and building apps in JavaScript. If you don't have experience with JavaScript, the JavaScript essentials course is a great place to start. We'll also be working with [React](../../Skills/Web%20Development/React.js.md) and jQuery in this course. It's helpful if you have some experience with these tools so you can understand the code we're replacing. But if you haven't worked with either or both of them before you can still complete this course. If you want to learn the basis of jQuery, check out [jQuery Essential Training](../Web%20Development/jQuery%20Essential%20Training.md). You'll find a good introduction to React in [React.js](../../Skills/Web%20Development/React.js.md) essential training.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (4), [HTML](../../Skills/Web%20Development/HTML.md) (2), [React](../../Skills/Web%20Development/React.js.md) (2), [React.js](../../Skills/Web%20Development/React.js.md) (1)
> **Env Vars:** css (3), html (2), dom (1)
> **Code Identifiers:** jquery (3)
> **File Paths:** react.js (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Exercise files](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/exercise-files?u=76281980&t=0)** - [Instructor] If you have access to the exercise files for this course, you can download them to your desktop. The Exercise Files folder contains a directory for each chapter in this course that uses files, starting with chapter four. Subfolders for each chapter contain the files for the specified video, so 04-02 contains the files for chapter four, video two. The Start folder contains the files you should use to work through the tasks in the video. The Finish folder contains the same files with all of the tasks in the video completed. If you get stuck, or just can't get a step to work, the Finish files can be a great way to check your work or to see the finished product in action. If you're viewing this course on a mobile device or a set-top device, or if your membership doesn't provide access to the exercise files, that's okay. I encourage you to still follow along as we go through the course. Now let's get started.

> [!info]- Semantic Content
>
> **Exercise Files:** exercise files (3)
> **Speakers:** - [instructor] (1)


### 1. Overview of Vanilla JS

[↑ Back to Table of Contents](#table-of-contents)

#### [Libraries, frameworks, and vanilla JavaScript](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/libraries-frameworks-and-vanilla-javascript?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/libraries-frameworks-and-vanilla-javascript?u=76281980&t=1)** - When you're building a web application, it's common to use libraries and frameworks. Both consist of pre-written code you can include in your app that makes it easier to perform common tasks. You can write [Vanilla](../../Skills/Web%20Development/Vanilla.md) [JavaScript](../../Skills/Software%20Development/JavaScript.md) code in an app that uses libraries and/or frameworks. Any combination of these can coexist in the same code base. There are some fundamental differences between libraries and frameworks, and it's important to identify the difference before you can decide how you might go about simplifying your code base. You integrate a library into an existing app simply by importing it into your code base and using any of its convenience methods as you wish. When using a library, your app comes first. You organize your code however you want and you simply integrate calls to the library's convenience methods to make your coding easier or more concise. By contrast, building an app using a framework requires you to use a structure prescribed by the framework. So instead of building an app and adding the framework to your code, as you do with a library, you instead build an app using the framework structure and then add your own code onto that. A common shorthand for thinking about the difference between the two is that your code calls a library, while a framework calls your code. In contrast to both libraries and frameworks, vanilla JavaScript is code that is part of the JavaScript language and that is recognized by any JavaScript parser, including a browser or a runtime environment, such as Node.
>
> **[1:37](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/libraries-frameworks-and-vanilla-javascript?u=76281980&t=97)** Note that we sometimes refer to vanilla JavaScript as vanilla JS, but it's not a special library or framework. This term merely refers to the core JavaScript language supported by browsers. Writing an app purely in vanilla JavaScript requires only your code. Using either a library or a framework means you need to include one or more JavaScript files containing the code for the library or framework, in addition to your own code. The more additional files your app contains, the longer the app can take to download and render for an end-user and the more memory it can require on the user's device. For this reason, developers regularly work to optimize apps by simplifying them and removing unnecessary code. If your app uses a library, especially if your app was written a number of years ago, you may find that you can rewrite all the code that uses the library in vanilla JavaScript instead and remove the library entirely from your app. This makes the app leaner and is likely to make everyone involved happy, including end-users. If you're using a framework, rewriting your app without the framework can be a major undertaking. It can have a major payoff if it doesn't require a huge bloat in your app's core code. However, such a rewrite is not something to be undertaken lightly. We're going to rewrite an app that uses the jQuery library and the [React](../../Skills/Web%20Development/React.js.md) framework to instead use only vanilla JavaScript. Now just removing the linked files that contain the code
>
> **[3:12](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/libraries-frameworks-and-vanilla-javascript?u=76281980&t=192)** for the library and framework themselves isn't enough. It would be like removing the tablecloth on a table, set with eclectic well-worn plates and mugs, only to find that the clean modern table underneath doesn't really go with the dishes. To make everything work together, I need to swap out each piece with something that does the same job, but works with the new base. In the metaphor, my clean white table, and in my app, the browser, which will be the only parser for whatever code I deploy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (10), [Vanilla](../../Skills/Web%20Development/Vanilla.md) (7), [React](../../Skills/Web%20Development/React.js.md) (1)
> **CLI Commands:** make (3), find (2), node (1)
> **Code Identifiers:** jquery (1)
> **Definitions:** refers to (1)
> **Analogies:** such as (1)
> **Warnings:** note that (1)
> **Speakers:** - when (1)

#### [Identify when to replace frameworks and libraries](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/identify-when-to-replace-frameworks-and-libraries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/identify-when-to-replace-frameworks-and-libraries?u=76281980&t=0)** - [Instructor] There are a few factors to consider before deciding whether to replace libraries or frameworks in your existing code with [Vanilla](../../Skills/Web%20Development/Vanilla.md) [JavaScript](../../Skills/Software%20Development/JavaScript.md). First, it's useful to examine how extensively your app relies on the library or framework. For instance, if only a couple lines of your code make use of a library's convenience function, it may be relatively straightforward to rewrite the code and you may experience a significant decrease in the download size of your app. On the other hand, if your app makes liberal use of a library throughout, you'll have to look at other factors before making a decision. It's also important to understand the complexity of your use case for the library or framework. For a large site that's built from the ground up on a framework, or relies heavily on a library, rebuilding in Vanilla JavaScript could be a significant task. In this case, it's important to project the benefits you expect from the project, for instance, improved load times, and compare them with the developer hours that will be required to understand if the required investment is worth it. You also need to look at the larger context of your app. If your site uses, say, five frameworks and libraries, and you're removing just one small one, the performance improvement may be insignificant. At the same time, you may find that replacing a lightly used library with JavaScript may be a useful first step, or pilot, to learn about the costs in time and workflow disruption, if you're considering taking out more heavily used libraries or frameworks down the line. Finally, before making a decision, it can be useful to survey any alternatives to a rewrite.
>
> **[1:35](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/identify-when-to-replace-frameworks-and-libraries?u=76281980&t=95)** For instance, some libraries offer modular versions that allow you to build and deploy a custom version that uses only the features you need. You may find that an alternative like this provides enough savings, at least in the short term, to put off rewriting. The app in this course uses the jQuery library, which has been around for a number of years. At the time it was first released, it simplified some coding tasks, like selecting elements and performing [AJAX](../../Skills/Web%20Development/AJAX.md) requests, that were much more complicated in Vanilla JavaScript. However, today, the JavaScript language supports simplified syntax for these and other tasks. For this reason, it makes sense to remove the library from our code base, which should let us realize an improvement in load times and memory usage. Our app also makes limited use of the [React](../../Skills/Web%20Development/React.js.md) framework. Because the app uses only a couple small React components, it's pretty straightforward to replace them with code written in Vanilla JavaScript, which allows us to eliminate the overhead of the React framework files, as well. The code for our app includes a number of JavaScript files. Now, I've included babel.js only because I'm running React and using JSX syntax. When this code is deployed, that would be pre-compiled and babel.js would no longer be a dependency. So, that's something we're using for development, but wouldn't be necessary for production. But the next three JavaScript files are all part of the app in production. The react and react-dom files are for the React framework and the jquery file
>
> **[3:09](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/identify-when-to-replace-frameworks-and-libraries?u=76281980&t=189)** is for jQuery support. So, users have to download these and they require browser resources. Our goal is to remove those files from our app.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (8), [React](../../Skills/Web%20Development/React.js.md) (7), [Vanilla](../../Skills/Web%20Development/Vanilla.md) (4), [AJAX](../../Skills/Web%20Development/AJAX.md) (1)
> **CLI Commands:** find (2), make (1)
> **Analogies:** for instance (3)
> **File Paths:** babel.js (2)
> **Code Identifiers:** jquery (2)
> **Env Vars:** jsx (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)


### 2. Project Overview

[↑ Back to Table of Contents](#table-of-contents)

#### [Application architecture](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/application-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/application-architecture?u=76281980&t=0)** - [Instructor] In this course we're starting with an existing app that uses jQuery and [React](../../Skills/Web%20Development/React.js.md), and we're refactoring that app to use [Vanilla](../../Skills/Web%20Development/Vanilla.md) [JavaScript](../../Skills/Software%20Development/JavaScript.md). So before we dig in on coding, let's get familiar with the app and its existing code. Our app is a page for a sports company, and most of the page is about its [products](../../Skills/Software%20Development/Microsoft%20Products.md) and personnel. Now up here at the top is a widget, and that's what we'll be working on. Now a user can enter a location in the box. So I'll type Dakar and click Get Forecast. And then weather forecast information is displayed below. And then below that is a list of potential sports that the user could engage in that would be appropriate for the current weather conditions in the location they entered. And there are also tabs, so the user can choose between Team or Solo sports, or a combined list of team and solo activities, which is displayed by default. Now let's look at how the app is structured, and the flow of data. So at the start we have several constants and variables, including the state variable, an object which is empty to begin. And next is an event listener for the Get Forecast button, which calls [AJAX](../../Skills/Web%20Development/AJAX.md) code to submit a request to open Weather Map, and then calls either update UI success, or update UI failure if there's a problem. Next we have one more event listener,
>
> **[1:36](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/application-architecture?u=76281980&t=96)** which is for the three tabs at the top of the activity list. The update UI success function does two things. It updates the State based on the data received from the AJAX request, and then it updates the view. The function itself contains a react component to update the weather section of the view, and then it calls the update activity list function to update the view for that list. And the update activity list function starts with some conditional logic to determine whether the tab color needs to change, and if so it makes that happen. And then it updates the state value for the activity information, and finally it updates the activity list in the view. So data flows through our app along a single path with a couple variations. The data flow starts with the user, who can either use the text input or click a tab. The data from the text input goes to an AJAX call, and the data that results from that AJAX call is used to update the state, and then finally update the view. When a user requests new information by clicking a tab, the state is updated based on the user's choice, and then the view is updated as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [AJAX](../../Skills/Web%20Development/AJAX.md) (4), [React](../../Skills/Web%20Development/React.js.md) (2), [Vanilla](../../Skills/Web%20Development/Vanilla.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Env Vars:** ajax (4)
> **Definitions:** is a  (3), is an  (1)
> **Code Identifiers:** jquery (1)
> **Speakers:** - [instructor] (1)


### 3. Environment Setup

[↑ Back to Table of Contents](#table-of-contents)

#### [Environment setup](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/environment-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/environment-setup?u=76281980&t=0)** - To complete the videos in this course, you need four applications. A web browser, a code editor, a [JavaScript](../../Skills/Software%20Development/JavaScript.md) transpiler and an http server. You undoubtedly already have a web browser installed on your machine, and any major browser, Chrome, Firefox, [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) Edge, or even Safari, is fine for this course. I'll be using Chrome in these videos, which is a popular choice among web developers because of the extensive and powerful developer tools that it has built in. Note that if you are on a Mac and you want to use Safari, you need to go into the Advanced tab of the Preferences and check the Show Develop menu in the Menu bar box in order to be able to use developer tools. A number of great code editors are available, both free and paid apps. Any editor that lets you edit and save plain text is fine for this course. So if you have a code editor you like, such as Sublime Text or Atom, it's fine to use it. I use Visual Studio Code in these videos, which is a version of Microsoft's Visual Studio created specifically for [Web Development](../../Topics/Web%20Development.md). Visual Studio Code is free and has [Windows](../../Glossary/Service/Windows.md), Mac and [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) releases. The code is available on [GitHub](../../Skills/Software%20Development/GitHub.md), and users can submit issues there as well. Babel is a utility used to transpile some newer JavaScript features to run on older browsers. For simple transpiling, I've customized my editor with a Babel Repl extension by t-sauer.
>
> **[1:34](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/environment-setup?u=76281980&t=94)** If you're not using Visual Studio Code you can search for a Babel extension for your preferred editor or you can use the web version, which doesn't require any installation. We'll use an http server throughout this course. As a web developer, this is a tool you'll need to have access to. So if you don't have one installed at this point, use this as your excuse to install it. I'm using http-server, which is a command line utility that runs under Node and it's installed through the Node Package Manager, or [npm](../../Skills/Web%20Development/npm.md). You can install Node by downloading a GUI installer from [nodejs.org](https://nodejs.org). Then, once that's installed, at the command line you simply type npm install http-server -g, where -g installs the package globally. Now if you run into errors, you may need to use Sudo to install this package. To do so, you use that same command, which I can access by pressing the up arrow on my keyboard, but then at the beginning I need to preface the command with sudo and a space. Then when prompted, you enter your password for your current login on your computer. Once that install is complete, you can use the command http-server to start a server that serves the files in the current directory.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (2), [npm](../../Skills/Web%20Development/npm.md) (2), [Web Development](../../Topics/Web%20Development.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **Tools:** visual studio (4), safari (2), command line (2), firefox (1), sublime (1)
> **CLI Commands:** node (3), npm (2), sudo (2)
> **Prerequisites:** install (5), you'll need (1)
> **Definitions:** is a  (5)
> **Env Vars:** npm (1), gui (1)
> **URLs:** [nodejs.org](https://nodejs.org) (1)
> **Analogies:** such as (1)

#### [Getting your API key](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/getting-your-api-key?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/getting-your-api-key?u=76281980&t=0)** - [Instructor] The videos in this course make use of data from [OpenWeatherMap.org](https://OpenWeatherMap.org). Data requests from this service require an API key which is a unique identifier that associates you with a request coming in. The service provides a limited amount of data for free and by having your own key you can ensure that you stay below the limit of free requests. To do this you need to sign up for an account with [OpenWeatherMap.org](https://OpenWeatherMap.org) and obtain an API key which you will use when creating your [AJAX](../../Skills/Web%20Development/AJAX.md) requests for data. So let's set that up now, [OpenWeatherMap.org](https://OpenWeatherMap.org) makes weather information available under a creative commons license, data is free for up to 60 requests per minute which will work fine for this course. It's only more intensive uses that require a paid subscription. To get an API key go to [OpenWeatherMap.org](https://OpenWeatherMap.org) in your browser and in the menu click API. This page documents the terms as well as endpoints you can hit with your Ajax requests. Click the API key link then on the page that opens click the sign up button. And in the create new account box create a unique user name and I'm going to use VanillaJScourse. Enter your email address. And then enter a password of at least 8 characters in both password boxes. And you can read the terms of service and [Privacy](../../Skills/Data%20Science/Privacy.md) policy
>
> **[1:35](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/getting-your-api-key?u=76281980&t=95)** and then check this box, verify you're not a robot, and create your account. And the company has a survey about how you can use the data, you can choose to answer that or not. I'm going to skip it for now. Next a page opens showing you information about your account. And up here on the menu, I'm going to click the API keys tab so down here under the keys heading is an alphanumeric string which is your API key. And that's going to identify your account when you make a request to the OpenWeatherMap API. I'm going to select that value and then copy onto the clipboard and then I want to put it somewhere I can access it easily. So I'm on a Mac and I'll open up the notes app. And I'll create a new note. And I'll type [OPenWeatherMap.org](https://OPenWeatherMap.org) API key, hit return and then I'll paste my key into it. So that's my OpenWeatherMAp API key. Now the key that you will see me using in the videos in this course has been deactivated, so it's important that you use your own key because this one won't work. Now whenever you need to access your API key during this course you can just go back to the note you created copy the text of the key and continue coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [AJAX](../../Skills/Web%20Development/AJAX.md) (2), [Privacy](../../Skills/Data%20Science/Privacy.md) (1)
> **Env Vars:** api (11)
> **URLs:** [openweathermap.org](https://openweathermap.org) (5)
> **CLI Commands:** make (2)
> **UI Navigation:** go to (1), in the menu (1)
> **Definitions:** is a  (1), is an  (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)


### 4. Replace Ajax

[↑ Back to Table of Contents](#table-of-contents)

#### [Fetch API](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/fetch-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/fetch-api?u=76281980&t=1)** - One common feature offered by modern libraries and frameworks is a convenience method for making [AJAX](../../Skills/Web%20Development/AJAX.md) requests. These methods let developers avoid needing to code the most widely supported [Vanilla](../../Skills/Web%20Development/Vanilla.md) [JavaScript](../../Skills/Software%20Development/JavaScript.md) object, XMLHttpRequest or XHR. XHR code for multiple sequential AJAX requests, or callbacks, requires a set of nested functions which can result in a code structure that's difficult for humans to read and can create a call stack that presents debugging challenges. A newer paradigm builds on the promise's API, which is supported in modern browsers. Using a promise, you can execute code and then pass the result to a callback only when the code execution is complete. You can also chain callbacks. Each one passing its result to the next callback. Modern browsers support the [Fetch](../../Skills/Web%20Development/Fetch.md) API, which is a successor to XHR that's built on promises. You can create a Fetch request that specifies a URL and code one or more chained success callbacks as well as a callback to deal with a failed request. Fetch accepts additional arguments besides the URL, but by default it assumes basic settings, such as get for the http method. This reduces the amount of code necessary for most common requests. If you've used the AJAX convenience methods in modern libraries and frameworks, Fetch syntax will look very familiar. As many of these methods, such as those in
>
> **[1:34](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/fetch-api?u=76281980&t=94)** jQuery or [Angular](../../Skills/Web%20Development/Angular.md), are also built on promises. The first plate I'm going to replace as I reset my table will be the jQuery AJAX code, which I'll swap out for Fetch code that will perform the same task but will work without a library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Fetch](../../Skills/Web%20Development/Fetch.md) (5), [AJAX](../../Skills/Web%20Development/AJAX.md) (4), [Vanilla](../../Skills/Web%20Development/Vanilla.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [Angular](../../Skills/Web%20Development/Angular.md) (1)
> **Env Vars:** ajax (4), xhr (3), api (2), url (2)
> **Code Identifiers:** jquery (2)
> **Definitions:** is a  (2)
> **Analogies:** such as (2)
> **Speakers:** - one (1)

#### [Create an Ajax request with Fetch](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/create-an-ajax-request-with-fetch?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/create-an-ajax-request-with-fetch?u=76281980&t=0)** - [Instructor] So, we've opened script.js from the js folder in the start files for this video and this contains the code for this app. And so if we scroll down, it's down here in lines 23 to 27 that contain the code for the [AJAX](../../Skills/Web%20Development/AJAX.md) request that fetches the weather data for whatever location the user entered. This code uses the jQuery get method which uses syntax similar to promises and [Fetch](../../Skills/Web%20Development/Fetch.md) in [Vanilla](../../Skills/Web%20Development/Vanilla.md) [JavaScript](../../Skills/Software%20Development/JavaScript.md). So, after the get request, the done method is chained capturing the response and then calling updateUISuccess which is a function and passing along that response object. Now, the done method fires only if the request is successful. And then after the done method, the fail method is chained and this is called only if the Ajax request is unsuccessful. And for our app, the fail method simply calls the updateUIFailure function. Now, because the jQuery structure is so similar to fetch, rewriting this code as vanilla JavaScript fetch request is pretty easy. So, I'm going to start by commenting out the existing code
>
> **[1:19](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/create-an-ajax-request-with-fetch?u=76281980&t=79)** and then I'm going to copy that code and paste a copy of it below and I'm going to indent that to match where it was before. So, I like to see what I've done as I'm working, but if the comments feel like too much clutter for you, it's fine to simply edit the existing code without leaving a commented out version. So first, I replaced $.get with fetch and the arguments are all going to be the same so there's no change there. Next, I replaced jQuery's done method with then which is the fetch equivalent. And finally, I replaced fail with catch which plays that role in fetch. Now, this is one instance where we have to add a bit of code because jQuery does some things for us automatically that fetch needs us to spell out. So, fetch fortunately allows us to chain as many then statements as we want and this can be useful in a number of situations like this one. So here, we need to first grab the response object and then we need to run the response.[JSON](../../Skills/Web%20Development/JSON.md) method to get just the JSON content we received from Open Weather Map and then pass that along. So, I'm going to click before the dot in .then and I'm going to press enter twice to put that on its own line and then going back up after the fetch method and after the closing paren for those arguments, I'm going to add another .then, I'm going to pass an anonymous function and I'm going to use the parameter name response for the response object.
>
> **[2:56](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/create-an-ajax-request-with-fetch?u=76281980&t=176)** And in the new function, I'm going to return just the content of the response to that Ajax request which I get by calling the response.json method. So, I'm going to type return(response.json) and they need opening and closing parens 'cause that is a method and not just a property. And then I'm going to close up the space between the end of this then and the one that follows to make it clear that these are all chained together into a single fetch request. So, I have a fetch with a chained then, another then, and finally a catch. So, before I test this out, I'm going to swap in my apiKey and so at the top of the app, we have a constant and we have apiKey as a placeholder so I have my apiKey stored in the Mac notes app so I'm just going to copy that to the clipboard and I'm going to paste it and place that placeholder. Now remember, my apiKey is deactivated at this point so you need to make sure to go to [openweathermap.org](https://openweathermap.org) and get your own apiKey in order to complete the videos in this course. So, once my apiKey is in place, I'm going to save my work. And I need to start my http server for the current folder so I'm using http-server which is an [npm](../../Skills/Web%20Development/npm.md) module and so I need to cd to the current folder so there's a little trick for that using the finder so I can do cd space and then in the finder, I'm going to grab the start folder for video 04_02.
>
> **[4:30](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/create-an-ajax-request-with-fetch?u=76281980&t=270)** I'm going to drag it over to my terminal. And then when I click the terminal, that whole path is automatically populated for me. All I have to do is press enter. Now if I do pwd for present working directory, there's my directory. And now, I can type http-server, -p for port, 3000 is the one I like to use, got that started up. And then over in my browser, I'm going to go to localhost:3000 and here's my app. Then in the location box I'll type Chicago, click the get forecast button, and the weather is populated so is the list of activities and so I know that I have a successful fetch request. Now, I also want to test the failure mode for my fetch request. So, going back to my code, I'm going to go up and comment out the value for my apiKey and instead I'm just going to make the value an empty string and so I know that Open Weather Map is not going to provide me data with an empty apiKey and so the request should fail. This is going to let me test what happens when the request fails. So, I will save that change. And then in my browser, I'm going to hold the shift key while clicking the reload button and this forces the browser to reload the entire page including the js file rather than using the cache versions of assets. And so again I'll type Chicago, click that button, and now I'm seeing the error message
>
> **[6:03](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/create-an-ajax-request-with-fetch?u=76281980&t=363)** that was specified in my fail function which is exactly what I expect so we're in good shape here. And then going back to my code, I remove that empty string and the slashes for my apiKey constant so the valid apiKey is available once again. I'm going to save my work. And so I've replaced the jQuery Ajax code with vanilla JavaScript Ajax code using fetch.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Fetch](../../Skills/Web%20Development/Fetch.md) (14), [AJAX](../../Skills/Web%20Development/AJAX.md) (5), [JSON](../../Skills/Web%20Development/JSON.md) (4), [Vanilla](../../Skills/Web%20Development/Vanilla.md) (3), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (3)
> **Code Identifiers:** apikey (10), jquery (5), updateuisuccess (1), updateuifailure (1)
> **CLI Commands:** make (3), cd (2), npm (1)
> **File Paths:** response.json (3), script.js (1)
> **Definitions:** is a  (2), is called (1), is an  (1)
> **UI Navigation:** go to (2), scroll down (1)
> **URLs:** [openweathermap.org](https://openweathermap.org) (1), [localhost:3000](https://localhost:3000) (1)
> **Env Vars:** json (1), npm (1)


### 5. Select and Modify DOM Elements

[↑ Back to Table of Contents](#table-of-contents)

#### [Element selection with vanilla JavaScript](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/element-selection-with-vanilla-javascript?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/element-selection-with-vanilla-javascript?u=76281980&t=1)** - [Vanilla](../../Skills/Web%20Development/Vanilla.md) [JavaScript](../../Skills/Software%20Development/JavaScript.md) supports numerous different ways of selecting elements, both single and collections, including references their IDs, classes, and tag names. However, the easiest way to select elements with vanilla JavaScript is to specify CSS selectors, just as you would with jQuery, for instance. Vanilla JavaScript includes two methods that accept CSS selectors to select elements. The querySelector method returns a single element. If you know you're targeting a single element, say, with an ID value, which can occur only once in a web page, then querySelector is a great choice. Now, you can also use querySelector even when you're passing a selector that may match multiple elements. By design, querySelector will return only the first element that matches. So this can be a useful shortcut if you're sure that the first match is the element you want. If you instead want to select a collection of elements, then querySelectorAll is a better choice. This method returns multiple elements in an array-like object which supports many common array methods. This provides you some useful tools in working with the results. Both querySelector and querySelectorAll are methods of the document object, so any time you use either method, you have to preference it. All references are to document.querySelector and document.querySelectorAll. So these are a little more verbose than, say,
>
> **[1:36](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/element-selection-with-vanilla-javascript?u=76281980&t=96)** jQuery selectors, but not by much. One important difference between vanilla JavaScript selectors and jQuery selectors in particular is what's returned. When you select a single element in jQuery, you don't get an element reference back. Instead you get a jQuery object, which is the element reference packaged up with jQuery methods and properties. This allows you to chain jQuery code to the element reference and use a single statement to perform a wide range of tasks. By contrast, when you select an element with querySelector, you get back a reference to the element itself, along with only those properties and methods that are part of the element itself. For instance, the attribute list and the class list. So it's important to keep in mind that the result of selecting an element with vanilla JavaScript isn't supercharged like it is in jQuery. But once you get used to coding in vanilla JavaScript, you'll hardly notice. Now the next piece of my place setting that needs updating is the jQuery selectors, which I'll replace with vanilla JavaScript selectors.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Vanilla](../../Skills/Web%20Development/Vanilla.md) (7), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (7)
> **Code Identifiers:** jquery (9), queryselector (7), queryselectorall (3)
> **Env Vars:** css (2)
> **Definitions:** is a  (2)
> **Analogies:** for instance (2)
> **Warnings:** keep in mind (1)
> **Speakers:** - vanilla (1)

#### [Select and modify elements with querySelector](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/select-and-modify-elements-with-queryselector?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/select-and-modify-elements-with-queryselector?u=76281980&t=0)** - [Instructor] So we're going to start replacing jQuery selectors in our app with [Vanilla](../../Skills/Web%20Development/Vanilla.md) [JavaScript](../../Skills/Software%20Development/JavaScript.md) selectors. So in script.js, scrolling through there are a number of places throughout that use the jQuery dollar selector syntax to select elements. Now a jQuery selector returns a jQuery object, which has jQuery methods and properties in addition to the content of the selected element or elements. By contrast, when you use a Vanilla JavaScript selector, you get back a reference to the element or elements and that's it. Now in some locations in our code where we use jQuery selectors, it's not as simple as changing them to Vanilla JavaScript, because the code that follows expects a jQuery object rather than simply an element reference. So for example here on line 18 where we're creating an event listener for an element, the code that follows the selector uses a jQuery method, click, that expects a jQuery object. So we can't simply swap that out for Vanilla JavaScript. But there are a number of places for us to get started where we can, one for one, swap out jQuery selectors for Vanilla JavaScript. So for instance here on line 20, we're creating a constant called location. And its value is the value of the element with the id value location. So this is whatever the user typed in location box before clicking the get Forecast button. So I'll comment out line 20 for my reference, I'll use double slashes for a single line,
>
> **[1:33](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/select-and-modify-elements-with-queryselector?u=76281980&t=93)** and then on a new line I am going to recreate that constant, so const location equals. And then for the value I am going to use document.querySelector. And the selector I want to use is the same one that we used for the jQuery method, so that's paren quote pound location. And then I want to check the value property, so I just chain dot value to the end. And finish it up with a semi-colon. So here I got the value of an element. And I can also use the dot value property to set the value of an element. So down here on line 22, I can replace the statement which is setting the value of an element. So I'm going to comment that out, add a new line. And I'm going to use document.querySelector with the same selector, pound location, and I'm going to chain dot value and then set that equal to an empty string. So this resets the text box, removing the user input by setting that box's value to an empty string. Now I can move down to line 58, and here we're selecting the DOM element where the [React](../../Skills/Web%20Development/React.js.md) component that follows will be rendered. So I'm going to comment this line out,
>
> **[3:10](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/select-and-modify-elements-with-queryselector?u=76281980&t=190)** and add a new line, and I'm going to create a new const statement, but I'm going to make one additional change here. So by convention, when you create a variable that stores a jQuery object, you use a dollar sign at the start of the variable name. And that's the case here in the commented out code. The variable name, or the constant name in this case, is dollar into. Now that we're switching this to use Vanilla JavaScript, we're going to take that dollar sign out. So this is just a convention, this isn't about the code, but we're just going to name our constant into, so it doesn't suggest that its storing a jQuery object, because it's not. And then we'll set that equal to document.querySelector, and the selector that we'll specify will be dot conditions. And because this isn't a jQuery object that we're working with, we don't need that zero in square brackets like we did in the jQuery code. Now we have to make one more change here. Because we changed this variable name, there is a reference to that variable or to that constant a couple lines later. And going here to line 61, we've got a reference to dollar into, so just to preserve my changes for myself, I'm going to comment that out. I'm going to go ahead and just copy that line of code and paste it in again, tab that back out. And I'm just going to remove that dollar sign, so now I am referencing the new constant that I created into, rather than the old constant, dollar into. And then we need to do all this one more time
>
> **[4:44](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/select-and-modify-elements-with-queryselector?u=76281980&t=284)** for the other React module a little later in our code. And so that's down here, starting on line 112. So I'm going to comment out line 112, create a new constant called into, and that's going to be equal to document.querySelector, and the selector is dot activities. And then my ReactDOM.render statement.
>
> **[5:17](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/select-and-modify-elements-with-queryselector?u=76281980&t=317)** I'm going to tab that over, take out the dollar sign so I am referencing the new into variable, rather than the dollar sign into variable. So these are all the places in the code where we are selecting a single element, and not relying on a jQuery object. So I'm going to save my changes. I have already put in my apiKey here, and I've got my http server started. And in location box I'll type Buffalo, get Forecast, and there we go. We have the weather and we have the list of activities. And so our changes to the code have kept the same functionality, but using Vanilla JavaScript.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Vanilla](../../Skills/Web%20Development/Vanilla.md) (7), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (7), [React](../../Skills/Web%20Development/React.js.md) (2)
> **Code Identifiers:** jquery (16), queryselector (4), apikey (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (1), for instance (1)
> **File Paths:** script.js (1)
> **Env Vars:** dom (1)
> **Cross-References:** later in (1)
> **Definitions:** is a  (1)

#### [Select and modify elements with querySelectorAll](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/select-and-modify-elements-with-queryselectorall?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/select-and-modify-elements-with-queryselectorall?u=76281980&t=0)** - [Instructor] Our app contains jQuery selector code that returns multiple elements rather than just a single element. We can re-create this behavior in [Vanilla](../../Skills/Web%20Development/Vanilla.md) [JavaScript](../../Skills/Software%20Development/JavaScript.md) using the querySelectorAll method, which returns a collection of elements. So down on line 89, the selector .options div matches three elements which are the three tabs in the activity results section. So we'll comment that out and we'll start a new line. And this time for the selector, we will use document.querySelectorAll, and we'll pass it the same selector, which is .options div. Now, when a jQuery method is changed to a selector that returns multiple elements, jQuery applies that method to each of the returned elements. This is known as implicit iteration. Now, vanilla JavaScript does not iterate implicitly. Instead, we need to crate a loop structure to move through the selected elements and transform them one at a time. Fortunately vanilla JavaScript includes some methods that make this pretty easy. The collection returned by querySelectorAll is not technically an array, but it still supports many array methods, and this includes forEach, which lets you easily loop through the elements in an array. So we'll chain the forEach method to our selector. It takes a function as its argument,
>
> **[1:34](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/select-and-modify-elements-with-queryselectorall?u=76281980&t=94)** and we'll specify el as the parameter name. That lets us reference each element in the collection during the loop. Now, for each of these elements, we want to remove a class value. So we can take advantage of the class list property that's part of each element. This stores a collection of the element's current class values, which are specified in the [HTML](../../Skills/Web%20Development/HTML.md) using the class attribute. And the class list property supports a remove method, which is similar to the removeClass method in jQuery. So for each of our elements, we can simply execute the statement el for the current element .classList.remove and then pass it the string selected. So for each element, if it has a class value of selected, that class value is removed, but we're leaving any other class values still in place. Now, only one element at a time should have this property, but it's easier to loop through the small collection than to keep tabs in our code on which element is currently selected. So I'll save my work. I already have my API key in place. Make sure you do, too. And I've started up my HTTP server for the current folder. So switching to my browser. I'm going to do a shift reload from my local host. And then I will enter Buffalo as the location, click Get Forecast, and the weather and activities list are populated. And then when I click one of the category buttons, the color changes for the one I just clicked,
>
> **[3:10](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/select-and-modify-elements-with-queryselectorall?u=76281980&t=190)** which verifies that the vanilla JavaScript we just wrote is working correctly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Vanilla](../../Skills/Web%20Development/Vanilla.md) (4), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (4), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Code Identifiers:** jquery (4), queryselectorall (3), foreach (2), removeclass (1), classlist (1)
> **Env Vars:** html (1), api (1), http (1)
> **CLI Commands:** make (2)
> **Definitions:** known as (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


### 6. Replace Event Listeners

[↑ Back to Table of Contents](#table-of-contents)

#### [JavaScript events](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/javascript-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/javascript-events?u=76281980&t=0)** - You can write all the down manipulation code you want but a web app doesn't become interactive without making it respond to events. To do that whether with a library of frame work or with [Vanilla](../../Skills/Web%20Development/Vanilla.md) [Java](../../Skills/Software%20Development/Java.md) script we have to do three things. First we have to select the element that we want a user to be able to interact with. Second we have to specify what specific event should trigger the interaction. Like load for a page or click for a button. Finally we need to specify what should happen in response to the event. In jQuery we use a jQuery selector to select the element. Then we chain the on method passing the event name followed by either a function call or an anonymous function containing the code that should run. Vanilla Java script supports a few different ways to specify code to respond to an event on a specific element. The best way to do this is using an event listener. We start by using vanilla java script method to select the element we want to listen to. I find query selector to be the easiest as it let's you identify an element using a CSS selector just like jQuery does. Once I have the element selected I use the add event listener method which takes three arguments. The first is a string containing the name of the event, like load or click. Note that the event name does not include on. The second argument is either a call
>
> **[1:34](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/javascript-events?u=76281980&t=94)** to an external function or an anonymous function which contains the code which should run after the event happens on that element. For backward compatibility it is best to include a third argument, the bullion value false. This is an optional argument that let's you specify whether the event uses event capturing. However even though modern browsers assume a default value of false if this argument isn't specified some older browsers require it so it's a best practice to include it. When the event being listened for occurs the specified function is called and an event object is passed to it. If you include a parameter in your function your code can make use of the properties and methods of the event object. Although any parameter name can be used some common conventions are event, evt, or simply e. One common use of an event object method is prevent default. Which stops the default behavior of the event on the object. This is often useful for buttons in [Forms](../../Skills/Web%20Development/Forms.md) when you want to capture a button click without immediately submitting the form and reloading the page. You can also access a number of properties about the event itself. For instance the event object for a click event includes the screen X and screen Y properties containing the X and Y coordinates of the users click on the screen. As well as the bulion shift key, control key, and alt key properties indicating
>
> **[3:08](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/javascript-events?u=76281980&t=188)** whether these keys were held during the click. Now there are a couple of other ways to target events on elements in vanilla java script. Using them is not a best practice. With event registration you select an element then specify a property name composed of on followed by the name of the event. Such as on load or on click, then set the value of the property equal to the name of the event handler function that should be called in response to the event. The big draw back to event registration is that it allows only one event handler per event on an element. So setting this property twice in the same code doesn't add another event handler. Instead it replaces it. By contrast you can create as many event listeners as you want for a given event on the same element and all of the event handlers you specify will run in response to that event. Finally you can technically register an event using an event attribute in your [HTML](../../Skills/Web%20Development/HTML.md). For instance specifying an on click attribute and setting it's value equal to the name of an event handler function, or a string containing java script code. This is just not done anymore because it's a best practice to keep java script code separate from html code, in separate files. So the work horse for responding to events in vanilla java script is the event listener. The next mug that I'm going to replace in my app is the jQuery event methods.
>
> **[4:42](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/javascript-events?u=76281980&t=282)** Which I'll replace with java script event listeners.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (8), [Vanilla](../../Skills/Web%20Development/Vanilla.md) (5), [HTML](../../Skills/Web%20Development/HTML.md) (2), [Forms](../../Skills/Web%20Development/Forms.md) (1)
> **Code Identifiers:** jquery (4)
> **UI Navigation:** select the (3), click on (1)
> **Analogies:** for instance (2), just like (1), such as (1)
> **Definitions:** is a  (1), is an  (1), is called (1)
> **Best Practices:** best practice (3)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** css (1)

#### [Add event listeners with vanilla JavaScript](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/add-event-listeners-with-vanilla-javascript?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/add-event-listeners-with-vanilla-javascript?u=76281980&t=0)** - [Instructor] The first event listener in our code is on line 18, for the element with the class value, forecast button. This is the button that users click to look up the weather for a location they've entered. So, we'll comment out the code on line 18, and then on a new line, our first step is to replace the jquery selector with a [Vanilla](../../Skills/Web%20Development/Vanilla.md) [JavaScript](../../Skills/Software%20Development/JavaScript.md) selector. Because this is a single element, we'll use document.queryselector and we'll use the same selector as in the jquery statement, which is .forecast-button. Then we're going to type a dot, and we're going to specify the add event listener method for the selected element. In the parens, we need to specify three arguments. So first, we're going to specify a string that indicates the event to listen for. For this button, that event is click. Then a comma, and then the second argument, and that's a function or a function call. So in this case, we're going to use an anonymous function. We already have this in place for the jquery click method, and so we can just type function, we are going to name the parameter E, just as we had in the previous line, and then starting that function off, and then we're going to remove that closing curly brace and that closing paren, because those are already closed below as part
>
> **[1:32](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/add-event-listeners-with-vanilla-javascript?u=76281980&t=92)** of the original jquery code. We can stop here, but there's an optional third parameter, and the best practice for vanilla javascript is to include it, for maximum compatibility with older browsers. If we click the opening paren, after the add event listener method, we see the closing paren, highlighted down here on line 40. So clicking before that closing paren, we'll add a comma, and the boolean value false. Now, we have one more event listener, and that's down here on line 43. This is for the tabs in the results section, that let users select whether they want to view solo, team, or all results. Now jquery is able to use this single selector to select all three of those elements, and then a single method to add event listeners to all three of the elements that are returned by the selector. It can do this through the magic of what's called implicit iteration. Now, vanilla javascript does not iterate implicitly. We instead have to select our collection of elements, and then we'll use the for each method to loop through each of the elements and add an event listener one at a time. We'll comment out line 43, we'll add a new line and tab over, and we'll use document.query selector, all this time, to select all three of the elements
>
> **[3:07](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/add-event-listeners-with-vanilla-javascript?u=76281980&t=187)** with that same selector.options div, and then a dot, and the for each method, and we're going to pass it an anonymous function, and as the parameter, we'll specify L, which will let us reference the current element each time through the loop. So within the function, we will use L.add event listener, to add an event listener to each selected element, and so we'll pass click as the first argument, and then we'll specify the update activity list function as the second argument, and then we'll end with that boolean value of false as the third argument for compatibility. We'll stick a semicolon at the end. Saving my work, I have my API key in place, my HTTP server is running on the current directory, and in the browser, I shift reload, and I'll enter Cairo in the location box, click the button, and we see results from the [AJAX](../../Skills/Web%20Development/AJAX.md) call, so we know that the event listener on the get forecast button works, and then I can click the tabs in the results section, and the results change. Which demonstrates that the event listeners are in place and doing what we expect for each of those tabs as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Vanilla](../../Skills/Web%20Development/Vanilla.md) (3), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (3), [AJAX](../../Skills/Web%20Development/AJAX.md) (1)
> **Env Vars:** api (1), http (1)
> **Definitions:** is a  (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### [Work with the event object](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/work-with-the-event-object?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/work-with-the-event-object?u=76281980&t=0)** - Our app also makes use of the jQuery dollar this selector in a few places to reference the element that was the target of an event. To convert this to [Vanilla](../../Skills/Web%20Development/Vanilla.md) [JavaScript](../../Skills/Software%20Development/JavaScript.md) we can use properties of the event object. So first online 82 we have and if statement that starts by checking if the event parameter has a value. If it doesn't then we know there was no click to call this function and instead we're in the initial page load. But if the event parameter has a value, and the element that was clicked has the class value of selected. Then we know that one of the tabs was clicked in the results but the clicked tab is already the selected tab. So no further dom manipulation needs to happen. So I'll comment out line 82. And then on a new line, the if statement will start the same way. If event is not equal to undefined logical and, now instead of dollar this. I can references the event object and the target property. Which is a reference to the element that the event happened to. And then we can use the class list dot contains method to check if the element that was clicked has the class value selected. And then I just need to make sure I put that opening curly brace at the end of the line to match the line of code that I commented out.
>
> **[1:34](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/work-with-the-event-object?u=76281980&t=94)** And then down on line 89 we need to construct a similar condition but for the case where the clicked element does not have the class value selected. And in this case we know that the user wants to see a different set of data and so we have to update our view. So I'll comment out line 89 and then on a line below it I'm just going to copy and paste my code from line 83 above. Because the new code I need here is almost the same. So I have to put in that closing curly brace in the else to make this an else if statement. And then the only other change is that I need to put an exclamation mark or a bang before the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) event and after the and logical operator. And then on line 94 we can see another use of jQuery dollar this to get the value of the id attribute of the element that was clicked. So again event dot target is going to help us out by referencing the element that was clicked and then we can reference any property of that element that we need, including attributes. And so I'll comment out line 94. And on a new line I will set the value of the category variable equal to event dot target dot id. And finally down here on line 103 the code uses dollar this dot add class to add the selected class value to the element that was clicked.
>
> **[3:07](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/work-with-the-event-object?u=76281980&t=187)** So we'll comment this line out and then on new line we'll use event dot target then we'll use the class list property again to access the list of classes for the element. And then the add method with the argument selected to add that class value to the element. And I'll end with a semicolon. And so I'll save my work, and I'll return to the browser. And I'll do shift reload. And then I'll enter Cairo in the box and click the button. Now all of the vanilla JavaScript code that we wrote was for the three tabs in the results section. So clicking those we see that the contents of the list change after every click. And so our vanilla JavaScript code is replicating the functionality of those jQuery statements that worked with the event object, and we didn't have to get verbose at all with our code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Vanilla](../../Skills/Web%20Development/Vanilla.md) (3), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (3), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Code Identifiers:** jquery (3)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Speakers:** - our (1)


### 7. Implement Data Binding

[↑ Back to Table of Contents](#table-of-contents)

#### [Data binding](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/data-binding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/data-binding?u=76281980&t=0)** - When you use a framework like [React](../../Skills/Web%20Development/React.js.md) for your UI, it lets you build out a view that incorporates data, either from user input or from a web service. In addition to providing you an API that lets you build a modular interface with a minimum of code, React does a couple important things for you behind the scenes to facilitate data-binding, which is connecting the data you want to display with specific parts of your view. When you're building out a UI yourself with [Vanilla](../../Skills/Web%20Development/Vanilla.md) [JavaScript](../../Skills/Software%20Development/JavaScript.md), it's important to understand how it works so you can create a fully functional solution that doesn't suffer from performance issues. When performing data-binding, it's crucial to track state, which is the canonical or authoritative value for each piece of information involved. When you're working with user-entered values, this can be as simple as storing each value in a variable and then updating the variable whenever the user input changes. However, when you're working with data retrieved from a web service, things get a little more complicated. You might think that the web service itself can serve as the authoritative store of the values. And the argument is not without merit. However, if you need to make an [AJAX](../../Skills/Web%20Development/AJAX.md) request each time you need to reference the value of a variable, your app will take a performance hit. Sometimes significant. So this is not a best practice. Instead, you also want to store retrieved values in one or more variables that are in scope when you're building out your view. It's common practice to simply create
>
> **[1:34](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/data-binding?u=76281980&t=94)** a variable-named state, set its value to an object, and store each value you're tracking as a property. Using an object allows you to use the Javascript spread operator to write more sasyncd code when you're building out the view. In addition to state, a data-binding solution benefits from a virtual DOM, which is a representation of changes to be made to the actual DOM. Without a virtual DOM, your code would be making changes to the DOM on the fly, as needed, one at a time. From a performance perspective, DOM manipulation is expensive in terms of system resources. So performing multiple iterations of DOM manipulation can slow user interaction and decrease user satisfaction with your app. Instead, it's a best practice to build out your DOM changes in memory and then update the DOM in a single operation. This reduces the demand for resources on your app and generally provides a better [user experience](../../Skills/Web%20Development/User%20Experience%20(UX).md). Our app already contains a state variable, which stores properties that are updated when the user interacts with the view. The function to update the view is then called and it uses the new values of the state object. Right now, the view is updated using React but we can use vanilla Javascript methods instead to make changes to the DOM. The web API supported by browsers contains a number of methods and properties that you can use to programmatically access information about existing DOM nodes, make changes to existing nodes,
>
> **[3:09](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/data-binding?u=76281980&t=189)** create your own nodes, and add them to the DOM tree. Together, these activities are known as DOM manipulation and are responsible for changes in the browser window that happen without the page needing to be reloaded. You can use the createElement method to create an element and the setAttribute method to add an attribute and value. You can also set the value of a node's text content property to specify its textContent. For instance, the content of a heading or paragraph of text. You'd then use the appendChild method to specify that the node you've created should become the child of another node. This enables you to not only build out a structure of new nodes, but also to attach them to a specific place in the DOM tree. The next dish I'm going to replace in my Javascript app is the React code. I'll swap in Javascript data-binding code to build out new elements based on the state and then add them to the view.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (5), [React](../../Skills/Web%20Development/React.js.md) (4), [Vanilla](../../Skills/Web%20Development/Vanilla.md) (2), [AJAX](../../Skills/Web%20Development/AJAX.md) (1), [User experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) (1)
> **Env Vars:** dom (13), api (2)
> **CLI Commands:** make (3), node (3)
> **Code Identifiers:** createelement (1), setattribute (1), textcontent (1), appendchild (1)
> **Definitions:** is a  (1), known as (1)
> **Best Practices:** best practice (2)
> **Analogies:** for instance (1)
> **Speakers:** - when (1)

#### [Create elements with vanilla JavaScript](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/create-elements-with-vanilla-javascript?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/create-elements-with-vanilla-javascript?u=76281980&t=0)** - [Instructor] Our app is currently using [React](../../Skills/Web%20Development/React.js.md) to make changes to the view in response to user interaction. Now, we already have a state variable which tracks the current values of several properties related to both user choices and [AJAX](../../Skills/Web%20Development/AJAX.md) data. When the state changes, our app calls the appropriate function to change the view with React. We're going to take out the React components altogether and then build out replacement code for DOM manipulation using [Vanilla](../../Skills/Web%20Development/Vanilla.md) [JavaScript](../../Skills/Software%20Development/JavaScript.md). So, starting with the first component on line 66, we'll comment out the ReactDOM.render statement and then we'll comment out the forecast function which is our React component for the city and weather information in our view. And then before the updateActivityList function call, we'll start our DOM manipulation code with statements to create elements. So, looking at the JSX for this React component, we can see that the structure consists of a div element and within that two p elements and within the second p element an image element. And if you're not so familiar with React, you could examine the structure by inspecting elements in your web browser's developer tools. So, switching over to the browser and looking at the information from the last time I ran the app, I'm just going to right click up here in the weather information and click inspect. And then in my elements tab, I can see the DOM representation of the code for this section
>
> **[1:35](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/create-elements-with-vanilla-javascript?u=76281980&t=95)** which has been rendered by this component and so we've got a p, we have another p. These are both within the div. And then within that second p, in addition to some text and some comments, we end up with an image element. So, div, p, image, and another p, we've got those four elements again. So, I'm going to switch back to the console. So, we know we need to create four elements and so we'll start off doing that with the document.createElement method. So, first off, I'll use let to create a variable called container and its value is going to be document.createElement with a value of div. So, notice here that the value in the parens is the element type in quotes but without angle brackets. So, if you're used to jQuery for instance, this is slightly different. And then we'll repeat that with let cityPara to create a paragraph for the city information and so the value for that is going to be document.createElement('p').
>
> **[2:51](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/create-elements-with-vanilla-javascript?u=76281980&t=171)** And then we can do another one which is let conditionsPara for the weather conditions and that equals document.createElement('p') again. And finally, we need an image element for the weather icon. So, we'll do let iconImage equal document.createElement('img').
>
> **[3:27](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/create-elements-with-vanilla-javascript?u=76281980&t=207)** Now, our app contains two different React components so we're not done replacing those elements. So, scrolling down to line 135, we have the activities component. So, I'll comment out line 135 and then I'll comment out the activities function itself.
>
> **[3:52](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/create-elements-with-vanilla-javascript?u=76281980&t=232)** So, looking at the JSX in the activities component, we're building a div containing an unordered list. And then within that unordered list is a set of list items and these are generated from the current value of props.activities and those values are pulled from state.activities and that's storing the activities that correspond to the user's current choices. So, we can start by building out the div so that's let activitiesContainer equal document.createElement('div').
>
> **[4:40](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/create-elements-with-vanilla-javascript?u=76281980&t=280)** And likewise for the unordered list, we'll do let list equal document.createElement('ul').
>
> **[4:51](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/create-elements-with-vanilla-javascript?u=76281980&t=291)** Now, we also need to build out list items for all the elements in the state.activities array. So, this should be pretty straightforward to do with a forEach loop. So, in a new line, we'll do state.activities.forEach and we'll pass an anonymous function and then within the loop, each time through the loop we need to create a new element so let listItem equal document.createElement('li').
>
> **[5:26](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/create-elements-with-vanilla-javascript?u=76281980&t=326)** Now, as written, this code is just going to create a bunch of list items without content. In fact, each loop through this code right now will just overwrite the variable created by the previous loop. But that's okay. We're just getting the basic code in place right now to create all the elements we need. And as we build that out, we'll ensure that each list item is in the right place before the next loop. So, we've taken out the React functionality, but we've completed just the first step of replacing it so this is not a complete solution, but we can log the elements we've created to the console and see what we get. Now, we've built new elements to replace two different components, but I'm going to console.log just the elements down here for the second component. So, first within the forEach loop, I'm going to add a console.log for the listItem element and then below the forEach loop, I will console.log activitiesContainer and I'll console.log list. And then I'll save my work and in the browser I'll do a Shift + Reload. I'll enter Tokyo in the box. Click get forecast. And again, the UI isn't updated right now, but this is just the first step in replacing React code. And so in the console, we can see all the elements that our code created which are the elements
>
> **[7:02](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/create-elements-with-vanilla-javascript?u=76281980&t=422)** that React was previously creating for us and so we have the set of list items created from the loop and then the div and the unordered list. And then to keep things neat, I'll go back to my code and I'll remove those console.log statements because we don't need them anymore.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (10), [AJAX](../../Skills/Web%20Development/AJAX.md) (1), [Vanilla](../../Skills/Web%20Development/Vanilla.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Code Identifiers:** createelement (8), foreach (4), activitiescontainer (2), listitem (2), updateactivitylist (1)
> **Env Vars:** dom (3), jsx (2)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Add and modify properties with vanilla JavaScript](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/add-and-modify-properties-with-vanilla-javascript?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/add-and-modify-properties-with-vanilla-javascript?u=76281980&t=0)** - [Instructor] [JavaScript](../../Skills/Software%20Development/JavaScript.md) allows us to access a number of properties and methods of DOM elements, which we can use to customize the elements. These are part of the API that let's us manipulate elements programmatically using JavaScript. So scrolling down to line 79 in our app, we've created a few elements but they need some customization before we can use them. The container element is fine, but the p element, stored in the cityPara variable, needs a class value of city, which we can see up here in the JSX for our [react](../../Skills/Web%20Development/React.js.md) component. So we can use the element's setAttribute method to specify both the attribute and its value. So we'll add a new line and we'll reference cityPara.setAttribute, and we'll give it two arguments. The first is a string class, and then a comma, and the second is the string city. So this says that we want to set the value of the class attribute to the string city. Now we also want this p element to have content which is going to be text. Now there are a few ways to make this happen in JavaScript. You may have heard of or even used the innerHTML property which is one way to specify text content. However, innerHTML comes with some security risks as it allows [HTML](../../Skills/Web%20Development/HTML.md) tags as part of its content and thus opens your code to potential Cross-site Scripting Attack. A safer alternative is the textContent property which interprets values passed to it as raw text
>
> **[1:35](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/add-and-modify-properties-with-vanilla-javascript?u=76281980&t=95)** and doesn't parse any HTML in the values. So for our p element, we want the textContent to be the value of state.City. So we'll add a new statement, cityPara.textContent = state.city, and then likewise for our conditionsPara, we want to set textContent. So conditionsPara.textContent = , and we'll set that equal to state.degCInt, which is our Celsius temperature value. Now notice, up in the commented out react component, that our p element next includes the HTML character reference for the degree symbol, which is &#176:. Now this is HTML code that won't be parsed as part of the textContent attribute, and so we can't use it in our [Vanilla](../../Skills/Web%20Development/Vanilla.md) JavaScript code. However, we can instead use the Unicode version of that same character reference. So we'll add a + and "" to start a string literal, and then we reference a Unicode character with a \, followed by u and the digits for the character, which in this case is 00B0. Then I'll type a space and a capital C, and a space, and a /, and space, and these are all literal characters that are part
>
> **[3:10](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/add-and-modify-properties-with-vanilla-javascript?u=76281980&t=190)** of the display of temperatures in our app. And then I close the quotes, add another +, and now I want the value for state.degFInt, which is the fahrenheit temperature, and then another + and a '', and again the Unicode character reference for the degree symbol, and a space, and F, and I'll close the quotes and add a semicolon. So that gives us text content for the paragraph that displays temperatures, and the remaining element that we created is an image element. Now we know that an image element displays nothing without at least one attribute, src, or source, which specifies the image file containing the image to be displayed, and we also want an alt attribute containing alternative text for users who can't view the image. So, we'll add a new line and we'll use iconImage.setAttribute, passing the string src as the attribute name, and the state.icon property, already stores the remote URL of the image icon for us, so we can use that as the value. And then another line, and we'll do iconImage.setAttribute, and this time, passing the string of alt as the attribute name, and we can use, as the value, state.condition,
>
> **[4:46](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/add-and-modify-properties-with-vanilla-javascript?u=76281980&t=286)** which is a brief description of the weather, so that's a good choice for alt text in this case. And then scrolling down to the next data binding section in our code, around line 158, we can leave the div and the unordered list as generic elements without any attributes or textContent, but each of the list items that we create needs both an attribute and textContent. So looking up here in the JSX code from the react component, which we commented out, we want the text value of each element in the array as the textContent of the list item, and we also want the index value of each element in the array as the value of a key attribute which is a react best practice and makes it easier to reference specific elements in the DOM in some situations. So forEach method let's us capture both of these pieces of data as parameters in the function that we pass to it. So I'm going to click in the parens for the function, and I'll name the first parameter activity, which is the text of the array element, and then I'll add a second parameter called index, which is the value of the index number for that array element, and now within the function, below my createElement statement, I can use listItem.textContent, and set that equal to the value of the activity parameter, and then I can do listItem.setAttribute,
>
> **[6:23](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/add-and-modify-properties-with-vanilla-javascript?u=76281980&t=383)** passing the string key as the attribute name, and the value of the index parameter as the attribute value. Now we have one final statement in our code to replace, and that's in the updateUIFailure function at the end of the code. This uses the jQuery text method to set a text value displaying an error message when our [AJAX](../../Skills/Web%20Development/AJAX.md) request is unsuccessful. So I'll comment out that jQuery statement, and then on a new line, I'll use document.querySelector to select .conditions, and then I'll use .textContent
>
> **[7:12](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/add-and-modify-properties-with-vanilla-javascript?u=76281980&t=432)** and set that equal to the string, Weather information unavailable. So, let's examine the result of our statements. So first, we can test that the final statement works if we have an unsuccessful AJAX request. So I'll go up, and I'll comment out my apiKey, and I'll give it a empty string as a value, and then I'll save, and then in my browser, I'm going to shift reload, and I'll enter Tokyo, click the button, and I get the error text just like I did before, but now, this is using a vanilla JavaScript selector and the textContent property. Those are the last things that we changed. So that's great, that worked. And so returning to the code, I'm going to restore my apiKey, and I also want to examine the result of some of my statements and verify that the elements I created now have textContent and attributes. So, back down in that forEach loop, for me it's line 160, I'm going to go to the bottom, after the final statement within that loop, and I'm going to add a console.log statement, and I'm going to log listItem, and this is going to log the list item each time through the loop. So I'll save my work, and then in the browser,
>
> **[8:47](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/add-and-modify-properties-with-vanilla-javascript?u=76281980&t=527)** I'll shift reload, I'll type Tokyo, and I'll click Get Forecast, and again, we don't totally have our UI working yet so I don't expect to see the list here, but looking in the console, I can see that each of my list items, has a key attribute with a value corresponding to its index value in the array, and it also has textContent which is the value of the element in the array. So we've modified these elements with both attributes and text content, and just to keep things clean, I'll go back to my code, and I'll remove that console.log statement, and I'll save my code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (5), [React](../../Skills/Web%20Development/React.js.md) (4), [HTML](../../Skills/Web%20Development/HTML.md) (4), [Vanilla](../../Skills/Web%20Development/Vanilla.md) (2), [AJAX](../../Skills/Web%20Development/AJAX.md) (2)
> **Code Identifiers:** textcontent (14), setattribute (5), citypara (3), listitem (3), innerhtml (2)
> **Env Vars:** html (4), dom (2), jsx (2), ajax (2), api (1)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Analogies:** just like (1)

#### [Append elements with vanilla JavaScript](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/append-elements-with-vanilla-javascript?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/append-elements-with-vanilla-javascript?u=76281980&t=0)** - [Narrator] Our code creates and customizes a number of new elements. But, each of these elements is separate, disconnected from each other and from the DOM. To connect everything up, we need to write code that appends elements to other elements. Each element has an appendChild method. We pass in a reference to a new child element, which is then appended. Now for our app we already know the document structure we need which is represented in the jsx code in the commented out [react](../../Skills/Web%20Development/React.js.md) components. So for the first one around line 79, we've created a div, two P elements, and an image element. Now the image element with the icon image variable name needs to be nested within the paragraph in the conditionsPara variable. So I can create a new statement referencing the parent element which is conditionsPara and its appendChild method, and then just pass in a reference to iconImage. And this results in the image being appended as a child to the paragraph. So likewise, I can append the two paragraphs as children of the container div. So, container, which is the parent element, dot, appendChild, cityPara, and container.appendChild, conditionsPara. Because we want things to display
>
> **[1:34](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/append-elements-with-vanilla-javascript?u=76281980&t=94)** in a certain order in the browser window, the order here is important. The first child appended is the first child of the parent in the DOM, and each subsequent child is next in order in the DOM. So this code will result in the city paragraph being displayed first, followed by the conditions paragraph. And that matches the structure where we're creating. So now we have a set of nested [HTML](../../Skills/Web%20Development/HTML.md) elements. However, they're still not part of the DOM and won't show up in the browser window yet. To incorporate them we need to append our container element to a specific element in the DOM. For this set of code we want to append to .conditions div. However, there are a couple of different situations where we might find ourselves when we're incorporating these elements into the DOM. If the pages just loaded, there's no existing content and we simply need to append. But if we're changing from an existing view to a new view, if the user enters a new city and does a new search, then we want to replace the existing content. So we'll use an if-else construction. So to start out I'll do an if, and our condition will be document.querySelector, and the selector will be .conditions div. So this is truthy if this element exists. And if it does that indicates there's
>
> **[3:08](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/append-elements-with-vanilla-javascript?u=76281980&t=188)** existing content that we have to replace. And we can use the replaceChild method rather than the appendChild method to get rid of the old content and add our new content instead. So within the if construction we'll use into as the parent element which is the element that previously hosted our react component. And then we'll use the replaceChild method. So the replaceChild method takes two arguments, first the new content, which is stored in the container variable and then the DOM element to be replaced which is .conditions div, and so we can reference that with document.querySelector, and then .conditions div. Now this only works if there's existing content. If not, there's nothing to replace so we can simple use a pen child instead. And so we'll create an else clause and we'll reference into, which is the parent element in the DOM. And then appendChild and we'll specify container as the child to append. And then we need to do the same thing for our activities list down around line 166. So we want our list nested in our div and our list items nested in our list. So to start we can add a statement in the full reach function. So below the last statement in the full reach function
>
> **[4:41](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/append-elements-with-vanilla-javascript?u=76281980&t=281)** we'll specify the parent element list, and we'll use appendChild to add the current version of listItem. And this will build out our list using the loop. And then below the loop we're going to reference the parent element activitiesContainer, which is our div, and we'll use appendChild and specify list. So this nests the unordered list within the div. Now here we're going to need another if-else to check whether content already exists. So if, document.querySelector, and in this case we're looking for .activities div. And then again using into as the parent element in the DOM, we use replaceChild, specifying activitiesContainer as the new child, and document.querySelector.activies div
>
> **[5:56](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/append-elements-with-vanilla-javascript?u=76281980&t=356)** as the child to replace. And then we also need an else statement, so if no list exists we'll simply select into and appendChild activitiesContainer. And so at this point our content should be fully built out and be visible in the browser window after user interaction. So I save my work. And then in my browser I shift reload. And I enter Tokyo, click the button, and the weather is displayed, but this time using our [Vanilla](../../Skills/Web%20Development/Vanilla.md) [JavaScript](../../Skills/Software%20Development/JavaScript.md) elements rather than react. And clicking tabs, the list updates, again using the vanilla javascript we wrote. So react is totally out of the picture at this point.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (4), [Vanilla](../../Skills/Web%20Development/Vanilla.md) (2), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Code Identifiers:** appendchild (9), queryselector (4), replacechild (4), conditionspara (3), activitiescontainer (3)
> **Env Vars:** dom (9)
> **CLI Commands:** find (1)
> **Analogies:** picture (1)
> **Speakers:** - [narrator] (1)

#### [Template literals to build DOM content](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/template-literals-to-build-dom-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/template-literals-to-build-dom-content?u=76281980&t=0)** - [Instructor] One of the really useful features of [React](../../Skills/Web%20Development/React.js.md) is the ability to write JSX code. JSX let's you write a single string that include both literal content and variable values with the common curly bracket delimiters used in templating libraries like Mustache and Handlebars. Now, JSX also let's you pass literal [HTML](../../Skills/Web%20Development/HTML.md) elements. And although React contains code to parse those safely, that's not a safe thing to do in [Vanilla](../../Skills/Web%20Development/Vanilla.md) [JavaScript](../../Skills/Software%20Development/JavaScript.md) without writing some extra code to secure it. But JavaScript does allow us to incorporate variable values with literal content in a single string known as a template literal. Template literals are a relatively new feature of JavaScript, but they're supported by all modern browsers. And you can easily transpile code that uses them into code that can be parsed by older browsers as well. Our app has one statement that combines property values from the state variable with literal content. And that's when we set the text content of the conditionsPara element here on line 84. Now, since we can't pass HTML within a template literal there's no downside to using text content with a template literal. And we know it's better for security so that's a win-win. So we had to use a few plus signs here, and we had to open and close a couple sets of quotes. And even though this works, we're going to comment it out and rewrite it as a template literal to get a feel for that syntax.
>
> **[1:34](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/template-literals-to-build-dom-content?u=76281980&t=94)** So I'm going to add a new line, and we're still setting the value of conditionsPara.textContent. And after the equals sign, I'm going to type a backtick which is the key above the tab on the left side of US keyboards. It's not a straight apostrophe, it actually slants from top-left to bottom-right. And this is the symbol that indicates a template literal in JavaScript. Now, the first thing in our string is a reference to a variable value. So we type dollar sign and an opening curly brace. Then reference the value, which is state.degCInt. And then we type a closing curly brace. So we've indicated that this is a variable value, but we don't need to use a plus sign after it or start a string. The variable value is part of the string. And then we type \u00B0 space C space, slash, space,
>
> **[2:37](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/template-literals-to-build-dom-content?u=76281980&t=157)** and then another ${state.degFInt}.
>
> **[2:49](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/template-literals-to-build-dom-content?u=76281980&t=169)** And then \u00B0 F. Then we have that final backtick to end the template literal, and we end the statement with a semicolon. I'll save my work, and I'll go to my browser and do a Shift + Reload. I'll enter Tokyo and click the button, and the temperature is displayed just as it was previously. But this time it was rendered from our template literal rather than from a set of concatenated string and variable values.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (4), [React](../../Skills/Web%20Development/React.js.md) (2), [HTML](../../Skills/Web%20Development/HTML.md) (2), [Vanilla](../../Skills/Web%20Development/Vanilla.md) (1)
> **Exercise Files:** template (8)
> **Code Identifiers:** conditionspara (2), u00b0 (2), textcontent (1), degcint (1), degfint (1)
> **Env Vars:** jsx (3), html (2)
> **Definitions:** is a  (2), known as (1)
> **Speakers:** - [instructor] (1)


### 8. Replace Simple Animations

[↑ Back to Table of Contents](#table-of-contents)

#### [Animation with vanilla JavaScript](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/animation-with-vanilla-javascript?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/animation-with-vanilla-javascript?u=76281980&t=0)** - After DOM manipulation, simple animations are probably what jQuery is most often used for. The library includes methods for simply showing and hiding elements, as well as for fading in and out and for sliding up and down as they're revealed or hidden. For simple effects like these, re-creating jQuery's scripted behavior requires just a single line of [Vanilla](../../Skills/Web%20Development/Vanilla.md) [JavaScript](../../Skills/Software%20Development/JavaScript.md) along with a bit of CSS. You can use a CSS transition, which is a feature that enables you to animate one or more of an element's CSS properties over a given duration. This means that in addition to simply toggling an element's display property to show or hide the element, you could fade it in by transitioning the display property over a number of milliseconds, or you could slide it up or down or left or right by transitioning other properties, such as top, left, height, or width. Even if your needs go beyond simple transitions, CSS supports more complex animations through the @keyframes at-rule. You can use @keyframes to build a named animation and specify the values of one or more properties at different points in the animation. This gives you the freedom to change different properties at different points in the same animation. The fact that an @keyframes animation is named means that you can create a single @keyframes animation and then apply it to more than one DOM elmeent using its name. If your animation needs exceed what CSS offers,
>
> **[1:35](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/animation-with-vanilla-javascript?u=76281980&t=95)** then vanilla JavaScript still has some additional tools for you. One of the most versatile involves creating scripted content for an [HTML](../../Skills/Web%20Development/HTML.md) canvas element and then changing the appearance of the content using the setInterval, setTimeout, or requestAnimationFrame methods. These building blocks allow you to create a frame by frame animation and are a common solution for developers when replacing content that was formerly built using Flash. The fruit bowl in my app is a single jQuery animation, which I'll replace with vanilla JavaScript code along with some CSS to achieve the same effect.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Vanilla](../../Skills/Web%20Development/Vanilla.md) (3), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (3), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Env Vars:** css (6), dom (2), html (1)
> **Code Identifiers:** jquery (3), setinterval (1), settimeout (1), requestanimationframe (1)
> **Definitions:** is a  (2), means that (2)
> **Analogies:** such as (1)
> **Speakers:** - after (1)

#### [Show and hide elements using vanilla JavaScript](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/show-and-hide-elements-using-vanilla-javascript?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/show-and-hide-elements-using-vanilla-javascript?u=76281980&t=0)** - [Instructor] Our app now uses jQuery in just one final place, to animate the appearance of the results of the [AJAX](../../Skills/Web%20Development/AJAX.md) request in the view. Near the end of the app, on line 182, we're using the jQuery slideDown method to animate the appearance of the element with the class value results, which starts off with its display set to none in CSS. Now this is one of those cases where replacing the library actually takes not just [JavaScript](../../Skills/Software%20Development/JavaScript.md), but also some CSS code. So, switching over to style.css, line 232 here is the start of the style rule for the element that's revealed. So, in addition to the display property, we have border rules to create borders on all sides, and then to take away the border on the top. So jQuery is simply toggling this display property for us, but we can do that ourselves by creating another class and applying that class. So, I'm going to create another style rule for the open class on this element. So .nav, .nav-elements, .forecast, and then I'm going to call it .open. And I'm going to set display to block. So as long as the style rule comes after the .results style rule in my stylesheet, then whenever the open class is applied in the DOM, the display will be set to block for this element.
>
> **[1:33](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/show-and-hide-elements-using-vanilla-javascript?u=76281980&t=93)** Now, jQuery automatically takes care of the borders for us, but I'll need to do that myself here. If I leave them set by default, then I'll start with a thick white line of collapsed borders even when I have no content. So, I will move the border and the border-top properties from the .results style rule down here to the .open style rule. And so this means that the borders will be applied only after the element is visible. So, I'll save those changes, and then I'll switch back to my JavaScript file. And here on line 182, I'm going to comment out my last jQuery statement, and on a new line I'll use document.querySelector to replicate that selector. So, we're looking for .results. And then I'll use the class list property and the add method to add the class name open. So, when this statement runs, which is right after the DOM manipulation above that adds new elements to the DOM, the open class will be applied, which will change the display of the element to block and give it a border. And I'll save my work on this JavaScript file, and in my browser I'll shift reload. I'll click in the box, type Oslo, and click the button.
>
> **[3:09](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/show-and-hide-elements-using-vanilla-javascript?u=76281980&t=189)** And now the new class of open is applied to the element and we can see its content. And now it has a border as well. So, I've replaced the jQuery to show this element with [Vanilla](../../Skills/Web%20Development/Vanilla.md) JavaScript code instead.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (4), [AJAX](../../Skills/Web%20Development/AJAX.md) (1), [Vanilla](../../Skills/Web%20Development/Vanilla.md) (1)
> **Code Identifiers:** jquery (6), slidedown (1), queryselector (1)
> **Env Vars:** dom (3), css (2)
> **File Paths:** style.css (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Transition element appearance using CSS](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/transition-element-appearance-using-css?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/transition-element-appearance-using-css?u=76281980&t=0)** - [Narrator] Our current code recreates a jQuery show/hide toggle, but looking at the original jQuery statement, it was using the slide down method to make the element appear from top to bottom over 300 milliseconds, which is 3/10ths of a second. Fortunately it's possible to recreate this behavior without jQuery as well, and to do that we can use a CSS transition. So, in our CSS file, here on line 232, we have the style rule for dot results, and following that is the style rule for dot open, which is the class applied when the empty element is populated and which causes it to be displayed in the browser window. Now, to create a top to bottom animation, we can't use the display property, so I'll comment out that declaration here, in the results style rule. And here in the open style rule. Now, here in results, we're going to start by setting height to auto, and max height to zero, and overflow y to hidden. We're going to be transitioning the max height property so the overflow y value ensures that any extra content isn't displayed until the element gets to its full max height. And then in the open style rule,
>
> **[1:34](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/transition-element-appearance-using-css?u=76281980&t=94)** we'll set the max height to 250 pixels. So the max height starts at zero, and then when the open class is applied, it changes to 250 pixels. So we want to animate this change, rather than having it happen all at once. To do this, we'll go back up to the results style rule and we'll add the transition property. And this lets us specify another property to transition, as well as the amount of time the transition should take, and the rhythm of the transition, which is known as a timing function. So whether it starts out slow or gets faster, for instance. So we'll specify max height as the property to transition, and a time of 0.3 s, to match the existing 300 millisecond setting in jQuery, and we'll use the ease out timing function. So I'll save my work, and in my browser I'll shift refresh, I'll enter Oslo, click the button, and there we go. Just like jQuery was doing, we're getting a gradual reveal from top to bottom over about a third of a second. If you want to see that again, you can do another shift refresh, enter the city, and then pay careful attention when you click the button. There it is, it goes from top to bottom, over a third of a second. And so this is using just [Vanilla](../../Skills/Web%20Development/Vanilla.md) [JavaScript](../../Skills/Software%20Development/JavaScript.md) to add a class to the element
>
> **[3:06](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/transition-element-appearance-using-css?u=76281980&t=186)** and using the transition property in CSS to make the height change gradual, rather than abrupt.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Vanilla](../../Skills/Web%20Development/Vanilla.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Code Identifiers:** jquery (5)
> **Env Vars:** css (3)
> **CLI Commands:** make (2)
> **Analogies:** for instance (1), just like (1)
> **Versions:** 0.3 (1)
> **UI Navigation:** toggle (1)
> **Definitions:** known as (1)


### 9. Ensure Backward Compatibility

[↑ Back to Table of Contents](#table-of-contents)

#### [Backward compatibility for vanilla JavaScript](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/backward-compatibility-for-vanilla-javascript?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/backward-compatibility-for-vanilla-javascript?u=76281980&t=1)** - In recent years, [JavaScript](../../Skills/Software%20Development/JavaScript.md) has added a lot of new syntax that enables developers to perform common coding tasks with fewer characters. These newer features, which include the spread operator and template literals are generally supported by all modern browsers. However, a significant portion of web users are running older browsers and are either using older [Hardware](../../Topics/Hardware.md) that prevents them from updating or choose not to update. To ensure that your app is usable by the widest possible set of users, it's a best practice to convert or transpile code written with newer features into an older more verbose version of JavaScript that runs on a much wider set of browsers. The newer JavaScript features are sometimes described as ES6 features, which is the name of the version of the language that was released in 2015. This was the first new version in six years and older browsers generally support the previous version known as ES5. In recent years, a new version is released each year, so ES7 is also known as JavaScript 2016. ES8 is also known as JavaScript 2017, and so on. Developers most commonly transpile to ES5 because most older browsers still in use support this standard. Transpiling is generally part of a build process involving a number of command line utilities that prepare code for deployment. Babel is a commonly used utility for transpiling ES6 code.
>
> **[1:37](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/backward-compatibility-for-vanilla-javascript?u=76281980&t=97)** In addition to transpiling, the build process for a JavaScript app often involves minifying files to remove extra spaces, line breaks, and comments, and performing other optimizations that reduce the file size as much as possible. Transpiling, minifying, and other build tasks can be automatically executed in sequence through the use of a task runner, such as Gulp or Grunt. Now, you could technically write all your code with ES5 and this step would not be necessary, but the newer features can save you time and keystrokes when you're coding, and in some situations a lot of time and keystrokes. It's also important to keep current with your JavaScript skills, so integrating newer features into your code helps you ensure you're aware of evolving practices in the language. Fortunately, transpiling is a pretty straightforward step, so including it in your build process doesn't slow things down. We're also at the end of our process of building out the [Vanilla](../../Skills/Web%20Development/Vanilla.md) JavaScript version of our app. We can remove references to the [React](../../Skills/Web%20Development/React.js.md) and jQuery files and verify that everything now works together with the tablecloth gone.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (8), [Hardware](../../Topics/Hardware.md) (1), [Vanilla](../../Skills/Web%20Development/Vanilla.md) (1), [React](../../Skills/Web%20Development/React.js.md) (1)
> **Env Vars:** es5 (3), es6 (2), es7 (1), es8 (1)
> **Definitions:** known as (3), is a  (2)
> **Code Identifiers:** jquery (1)
> **Tools:** command line (1)
> **Exercise Files:** template (1)
> **Analogies:** such as (1)
> **Best Practices:** best practice (1)

#### [Transpile vanilla JavaScript](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/transpile-vanilla-javascript?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/transpile-vanilla-javascript?u=76281980&t=0)** - [Instructor] We've finished removing all the jQuery and [React](../../Skills/Web%20Development/React.js.md) code from our app, so we should be able to run it with only our script.js file. So here in our index.[HTML](../../Skills/Web%20Development/HTML.md) file, I've scrolled to the bottom, and here are our script elements, and we can comment out the first four. Now, in addition to React and jQuery files, we have Babel here, and Babel is a library that converts [JavaScript](../../Skills/Software%20Development/JavaScript.md) code that uses newer JavaScript syntax features into older, more widely supported code. Now, to write our React components using JSX, we had to include Babel as a dependency and specify that our script was of type text/babel rather than text/javascript. But now, without React code, we can remove the type attribute altogether from our script.js element, so browsers will treat this as generic JavaScript code rather than code that needs Babel to translate it. So I'll save this, and I'll go back to my browser, and Shift reload, and then I'll enter Quito in the box, and I'll click the button. And I get the weather data, and I can click the tabs. So everything works just fine, and we are running pure [Vanilla](../../Skills/Web%20Development/Vanilla.md) JavaScript. Now, a more common scenario for transpiling with Babel is in the process of preparing code for deployment rather than running it in the browser as a dependency.
>
> **[1:35](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/transpile-vanilla-javascript?u=76281980&t=95)** If you have a build system set up, you may already have Babel or another transpiler configured to run as part of a code release. For right now, we just want to get a sense of the differences in the code and any difference in size between the code we wrote and the transpiled version. One of the most straightforward ways to transpile your code is to use a browser extension in your code editor. In Visual Studio Code, I use the Babel REPL extension created by T. Sauer. You can also go to [babeljs.io/repl](https://babeljs.io/repl) to use an online version of this tool. I like the editor extension because it makes it easier to save the transpiled code. So I'm going to open up my final script.js file, and then I'm going to press Command + Shift + P to open the command palette. This lets me select a custom command to execute within Visual Studio Code. I can start typing to narrow things down, so I'll type babel, and there's the command, Open new Babel REPL, which is what I want. So this command splits the screen and opens two new tabs. The tab on the left is labeled input.js, and the one on the right is output.js. We can add newer JavaScript code to the input.js file, and instantly see the transpiled version of the code using broadly compatible syntax in output.js. So I'll switch back to my script.js file. I'll press Command + A to select the entire contents
>
> **[3:11](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/transpile-vanilla-javascript?u=76281980&t=191)** of the file, copy them to the clipboard with Command + C, and then I'll switch to the input.js file and press Command + V to paste it all in. And just like that, the transpiled version is displayed on the right. Now, I don't need to see all these messages down here about what's going on behind the scenes, so I'm going to click the X to close that up so I can see more of my code, and I'll also go ahead and close the file explorer so I can really just focus on the code. So I'll scroll to the top in input.js, and now I'm at the top of each file and I can compare the two. And so immediately we can see that where we use the const and let keywords on the left, those have been transpiled to var keywords on the right, which is the more widely supported way to create a variable. And then if we scroll down to, say, line 86, this is where we used a template literal, and on the right,
>
> **[4:12](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/transpile-vanilla-javascript?u=76281980&t=252)** that template literal has been converted back into the syntax that uses plus signs for string concatenation. And then going down a little further, on line 141, the code on the left uses the three dot spread operator which passes each element of an array or an object as an argument in sequence. And if we scroll down there on the right, looks like we're about line 143 here, the code uses a new convenience function that was included at the top of the file to achieve what the spread operator was doing for us in our original code. So let's save the transpiled version of the code. So I'll click in the output.js window, I'll click File, Save As, navigate to the desktop, and to the folder for this video, and then in the js folder, I'll save the file with the name script-transpiled.js.
>
> **[5:26](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/transpile-vanilla-javascript?u=76281980&t=326)** And then returning to the HTML file for this project, I'll change the source of the remaining script element to the script-transpiled.js file, so we can run our code using just the transpiled version and verify that things work as we expect, even with the newer JavaScript syntax no longer in the code. And I'm going to make one more change here to add the [Fetch](../../Skills/Web%20Development/Fetch.md).js polyfill. So that's going to be a new script element with a source of js/fetch.js.
>
> **[6:06](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/transpile-vanilla-javascript?u=76281980&t=366)** So this is JavaScript code written specifically to replicate the features of the fetch API on older browsers that don't support it. And the fetch.js polyfill also requires the Promise polyfill, so we'll add that, as well. So that's another script element with a source of js/promise.min.js which is the name of the file. Now, these two files together are just under 16 kilobytes, so they add a bit of weight back to our app, but they're a huge reduction from the jQuery library, which we were previously using for HX. So I'll save my changes, and in my browser, I'll Shift reload, I'll enter Quito, click the button, and I get the weather information, and I can click the tabs. And so this is the version I'd want to publish to make sure the audience for my app is as wide as possible. And now I can go back to the folder containing my files, and I can see that the file size of the original and the transpiled code, they're essentially the same. The original file, seven kilobytes, script-transpiled, seven kilobytes. Some other newer Vanilla JavaScript features that we didn't use might've resulted in an increase in file size after transpiling, but that's not the case for our app. Now, if we look at the file sizes of other dependencies we were working with, we could ignore Babel here because we were using it just for development.
>
> **[7:40](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/transpile-vanilla-javascript?u=76281980&t=460)** But jQuery is 87 K, react-dom is 620 K, and react is 128 K. So we took an app that was using four files totalling 842 kilobytes, and we've refactored that using Vanilla JavaScript into a single file that uses only seven kilobytes. Along with our Fetch and Promise polyfills, that's still just 23 kilobytes of JavaScript code, so clearly, a huge savings both in download size and in memory footprint.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (11), [React](../../Skills/Web%20Development/React.js.md) (6), [Fetch](../../Skills/Web%20Development/Fetch.md) (5), [Vanilla](../../Skills/Web%20Development/Vanilla.md) (3), [HTML](../../Skills/Web%20Development/HTML.md) (2)
> **File Paths:** script.js (4), input.js (4), output.js (3), script-transpiled.js (2), fetch.js (2)
> **UI Navigation:** scroll down (2), go to (1), open the (1), select the (1), switch to (1)
> **Env Vars:** repl (2), jsx (1), html (1), api (1)
> **Code Identifiers:** jquery (4)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (2)
> **Tools:** visual studio (2)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-app-building-with-vanilla-javascript/next-steps?u=76281980&t=1)** - Thanks so much for joining me in this course. You now have experience building an app using [Vanilla](../../Skills/Web%20Development/Vanilla.md) [JavaScript](../../Skills/Software%20Development/JavaScript.md). You can get more practice by trying your hand at building your own app from scratch using Vanilla JavaScript, or converting an existing app that uses a library or framework to Vanilla JavaScript. To learn more about different approaches to writing [AJAX](../../Skills/Web%20Development/AJAX.md) code, check out the Building Web Applications with Ajax course. To learn more about ES 6 and transpiling JavaScript, check out the Learning [ECMAScript](../../Skills/Web%20Development/ECMAScript.md) 6 course. Feel free to connect with me online. Now take your new skills and build something amazing. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (4), [Vanilla](../../Skills/Web%20Development/Vanilla.md) (3), [AJAX](../../Skills/Web%20Development/AJAX.md) (2), [ECMAScript](../../Skills/Web%20Development/ECMAScript.md) (1)
> **Speakers:** - thanks (1)


## Instructor

- [Sasha Vodnik](../../Instructors/Software%20Development/Sasha%20Vodnik.md)

## Resources

- Exercise files available

## Skills Covered

- JavaScript
- Vanilla

## Path Context

### In [Explore Web Development with Vanilla JavaScript](../../Paths/Software%20Development/Learning%20Paths/Explore%20Web%20Development%20with%20Vanilla%20JavaScript.md)
**1 of 8** | [Learning Functional Programming with JavaScript ES6+](Learning%20Functional%20Programming%20with%20JavaScript%20ES6%2B.md) →

### In [Become a JavaScript Developer](../../Paths/Network%20and%20System%20Administration/Learning%20Paths/Become%20a%20JavaScript%20Developer.md)
← [JavaScript- Classes](../Network%20and%20System%20Administration/JavaScript-%20Classes.md) | **8 of 13** | [HTML Essential Training](../Web%20Development/HTML%20Essential%20Training.md) →

## Appears In

- [Explore Web Development with Vanilla JavaScript](../../Paths/Software%20Development/Learning%20Paths/Explore%20Web%20Development%20with%20Vanilla%20JavaScript.md)
- [Become a JavaScript Developer](../../Paths/Network%20and%20System%20Administration/Learning%20Paths/Become%20a%20JavaScript%20Developer.md)

## Related Courses

_Courses sharing skills:_

- [End-to-End JavaScript Testing with Cypress.io](End-to-End%20JavaScript%20Testing%20with%20Cypress.io.md) — JavaScript
- [Learning JavaScript Debugging](Learning%20JavaScript%20Debugging.md) — JavaScript
- [Foundational JavaScript Security](Foundational%20JavaScript%20Security.md) — JavaScript
- [JavaScript- Test-Driven Development (ES6)](JavaScript-%20Test-Driven%20Development%20(ES6).md) — JavaScript
- [JavaScript- Best Practices for Data](JavaScript-%20Best%20Practices%20for%20Data.md) — JavaScript

---

[↑ Back to top](#)