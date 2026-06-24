---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: javascript-closures
url: "https://www.linkedin.com/learning/javascript-closures"
duration_minutes: 57
duration: 57m
level: Intermediate
updated: 4/18/2025
learners: 44493
skills:
  - JavaScript
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFM8NmFGPie5A/learning-public-crop_675_1200/B56ZbF5RbaH4Ac-/0/1747076847988?e=2147483647&amp;v=beta&amp;t=AjaxURIqeODtdOfN9NsylOFZ9k01k8DyLbvbObc0UyE"
linkedin_topic: Network and System Administration
learning_paths:
  - '[Become a JavaScript Developer](../../Paths/Network%20and%20System%20Administration/Learning%20Paths/Become%20a%20JavaScript%20Developer.md)'
prev_courses:
  - '[JavaScript- Prototypes](JavaScript-%20Prototypes.md)'
next_courses:
  - '[JavaScript- Classes](JavaScript-%20Classes.md)'
path_nav: '[{"path":"Become a JavaScript Developer","position":6,"total":13,"prev":"JavaScript- Prototypes","next":"JavaScript- Classes"}]'
path_count: 1
tags:
  - course
  - topic/network-and-system-administration
  - topic/software-development
  - topic/web-development
  - skill/javascript
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Network%20and%20System%20Administration/JavaScript-%20Closures.md)

![JavaScript: Closures](https://media.licdn.com/dms/image/v2/D560DAQFM8NmFGPie5A/learning-public-crop_675_1200/B56ZbF5RbaH4Ac-/0/1747076847988?e=2147483647&amp;v=beta&amp;t=AjaxURIqeODtdOfN9NsylOFZ9k01k8DyLbvbObc0UyE)

# JavaScript: Closures

> Suggested prerequisites Familiarity with JavaScript programming Closures—a core concept for intermediate and advanced JavaScript developers—can be challenging for many developers to wrap their heads around. In this concise course, Sasha Vodnik breaks down this essential concept, explaining what closures are and how to use them in JavaScript. This course includes Code Challenges powered by CoderPad

> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-closures) | 57m | Intermediate | 44K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Using closures in JavaScript](#using-closures-in-javascript)
  - [What you should know](#what-you-should-know)
  - [Environment setup and exercise files](#environment-setup-and-exercise-files)
  - [Using CoderPad challenges](#using-coderpad-challenges)
- [**1. Building Blocks of Closures**](#1-building-blocks-of-closures) (5 videos)
  - [Local and global scope](#local-and-global-scope)
  - [Nesting functions](#nesting-functions)
  - [Return a value from an inner function](#return-a-value-from-an-inner-function)
  - [Create parallel closures](#create-parallel-closures)
  - [Solution: Create a closure using a nested function](#solution-create-a-closure-using-a-nested-function)
- [**2. Creating and Using Closures**](#2-creating-and-using-closures) (4 videos)
  - [Implement the module pattern](#implement-the-module-pattern)
  - [Avoid unintended closures](#avoid-unintended-closures)
  - [Use JS features in place of closures](#use-js-features-in-place-of-closures)
  - [Solution: Create a module](#solution-create-a-module)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continuing to learn closures](#continuing-to-learn-closures)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Using closures in JavaScript](https://www.linkedin.com/learning/javascript-closures/using-closures-in-javascript-22184726?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-closures/using-closures-in-javascript-22184726?u=76281980&t=0)** - Have you ever wondered what [JavaScript](../../Skills/Software%20Development/JavaScript.md) closures can do besides make a job interview more challenging? Closures are powerful and they're also tricky to use. I'll help you build your understanding by reviewing their building blocks. I'll invite you to code along with me to use them to implement the module pattern. I'll show you how to avoid breaking your code by creating unintended closures, and we'll write code with ES6 alternatives that we can use in their place. After we're done, you'll be able to talk about what closures are and successfully use them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **CLI Commands:** make (1)
> **Env Vars:** es6 (1)
> **Speakers:** - have (1)

#### [What you should know](https://www.linkedin.com/learning/javascript-closures/what-you-should-know-14372073?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/javascript-closures/what-you-should-know-14372073?u=76281980&t=1)** - [Instructor] This course assumes you have some experience coding in [JavaScript](../../Skills/Software%20Development/JavaScript.md). If you don't have experience with JavaScript, the JavaScript Essentials course is a great place to start. To get an overview of the modern JavaScript tools we will be using, check out the Learning [ECMAScript](../../Skills/Web%20Development/ECMAScript.md) 6 course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (4), [ECMAScript](../../Skills/Web%20Development/ECMAScript.md) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Environment setup and exercise files](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=1)** - [Instructor] To get started with this course, I have provided exercise files so you can work along with me. I also have a few tips for you to set up your environment, as well as steps to get the API key that's necessary to work through this course. If you have access to the exercise files, there's a directory for each chapter and a sub-folder for each video. The Start folder contains the files you should use to work through the tasks in the video. The Finish folder contains the same files with all of the tasks in the video completed. If you get stuck or just can't get a step to work, the Finish files can be a great way to check your work or to see the finished product in action. If you're viewing this course on a mobile device or a set-top device, or if your membership doesn't provide access to the exercise files, that's okay. I encourage you to still follow along as we go through the course. If you are working on a computer, you need three applications: a web browser, a code editor, and an HTTP server. You also need an API key from [openweathermap.org](https://openweathermap.org). You undoubtedly already have a web browser installed on your machine and any major modern browser, Chrome, Firefox, or [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) Edge, is fine for this course. I'll be using Chrome in these videos, which is a popular choice among web developers because of the extensive and powerful developer tools it has built in. Because we'll only be using the console though,
>
> **[1:35](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=95)** that won't really make a difference for this course. Note that if you're on a Mac and you want to use Safari, you'll need to go to the Preferences, select the Advanced tab and check the Show Develop menu in menu bar check box in order to be able to access the developer tools using the menu. You'll then have a menu option called Develop, which gives you access to all these different tools. A number of great code editors are available with both free and paid apps. Any editor that lets you edit and save plain text is fine for this course, so if you have a code editor you like, such as Sublime Text or Atom, it's fine to use it. I use Visual Studio Code in these videos, which is a version of Microsoft's Visual Studio that was created specifically for [Web Development](../../Topics/Web%20Development.md). Visual Studio Code is free and has [Windows](../../Glossary/Service/Windows.md), Mac, and [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) releases. The Code is available on [GitHub](../../Skills/Software%20Development/GitHub.md) and users can submit issues there as well. I've customized my editor with one extension. Open in Browser, created by TechER, lets you open the current [HTML](../../Skills/Web%20Development/HTML.md) file directly in your default browser using the alt + b or option + b keyboard shortcut. So this just saves a trip to the file manager to open a file in the browser the first time. An HTTP server is the final tool you need for this course. As a web developer, this is an application you'll need to have access to.
>
> **[3:09](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=189)** So if you don't have one installed at this point, use this as your excuse to install it. I'm using http-server, which is a command-line utility that runs under Node and is installed through the Node Package Manager, or [npm](../../Skills/Web%20Development/npm.md). You can install Node by downloading a GUI installer from [nodejs.org](https://nodejs.org). Then once that's installed, at the command line, you simply type npm install http-server -g, where -g installs the package globally. Now, if you run into errors like this, you may need to use sudo to install this package. To do so, you use the same command, but you type sudo at the start of it. So sudo npm install, http-server -g. and you type in your login password. And then I have a good install. Once that install is complete, you can use the command http-server to start a server that serves the files in the current directory. And then when you're done, just press control + C and you're back to the Bash prompt. Finally, the videos in this course make use of data from [openweathermap.org](https://openweathermap.org). Data requests from this service require an API key, which is a unique identifier that associates you with the request coming in. The service provides a limited amount of data for free.
>
> **[4:42](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=282)** And by having your own key, you can ensure you stay below the limit of free requests. To do this, you need to sign up for an account with [openweathermap.org](https://openweathermap.org) and obtain an API key, which you'll use when creating your [AJAX](../../Skills/Web%20Development/AJAX.md) requests for data. So let's set that up now. [Openweathermap.org](https://Openweathermap.org) makes weather information available under a creative commons license. Data is free for up to 60 requests a minute, which will work fine for this course. It's only more intensive uses that require a paid subscription. To get an API key, go to [openweathermap.org](https://openweathermap.org) in your browser. Then in the menu, click API. This documents the terms as well as endpoints you can hit with your AJAX requests. Click the API key link. And then on the page that opens, click the sign up button and in the Create New Account box, you're going to create a unique username And I'm going to use closurescourse, going to enter an email address, and then you're going to enter a password of at least eight characters in both boxes. And you can read the terms of service and the [Privacy](../../Skills/Data%20Science/Privacy.md) policy, and then check this box. I'm going to opt out of receiving emails. I am not a robot. And then I click Create Account. And so there's a question here. I'm just going to cancel out of that.
>
> **[6:17](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=377)** Next, a page opens showing you information about your account. And here in the menu, I'm going to click the API keys tab. So down here under the key heading is an alphanumeric string, which is your API key. And that's going to identify your account when you make a request to the OpenWeatherMap API. So I'm going to select this value and I'm going to copy it to the clipboard. And then I want to put it somewhere I can access it easily, and I'm on a Mac, so I'm going to open up the Notes app, and I'm going to create a new Note. I'm going to type open weather map API key, and then paste it in. And so that's my OpenWeatherMap API key. Now the key you'll see me using in the videos for this course has been deactivated. So it's important that you use your own key because this one won't work. Now, whenever you need access to your API key during this course, you can just go back to the note you created, copy the text of the key and continue coding. Now, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [npm](../../Skills/Web%20Development/npm.md) (3), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (2), [AJAX](../../Skills/Web%20Development/AJAX.md) (2), [Web Development](../../Topics/Web%20Development.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **Env Vars:** api (13), http (2), ajax (2), html (1), npm (1)
> **CLI Commands:** make (3), node (3), npm (3), sudo (3)
> **Tools:** visual studio (3), firefox (1), safari (1), sublime (1), atom (1)
> **Prerequisites:** install (7), you'll need (2), set up (1)
> **URLs:** [openweathermap.org](https://openweathermap.org) (5), [nodejs.org](https://nodejs.org) (1)
> **UI Navigation:** go to (2), in the menu (2), select the (1), open the (1)
> **Definitions:** is a  (4), is an  (2)

#### [Using CoderPad challenges](https://www.linkedin.com/learning/javascript-closures/using-coderpad-challenges?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-closures/using-coderpad-challenges?u=76281980&t=0)** - [Instructor] This course on [JavaScript](../../Skills/Software%20Development/JavaScript.md) closures include some code challenges that use the CoderPad environment. So let's take a quick look at that workspace. So in the top left, you have Instructions. Here, those are hidden. At the bottom left, you have Console Output, and that's going to be the result when you actually try out an answer. Now at the top right, you have the code that you're starting with and the code that you work with during your challenge. And the bottom right shows some test code, and this is what's going to run against the code that you write in the Answer section. Now also notice that the Answer section includes a couple constants, Show Expected Result and Show Hints, that you can change to True if you want to see results or if you want to see hints. So let's try this out, and I'm going to start by just saying return numbers. So an obviously false answer, so it's not going to work. And when I click the Test My Code button to try that out, I get the feedback that says some of this failed. So you get that feedback, and then you can go back and you can keep working on your answer. Keep refining that, keep thinking about it, and try it again. So instead of returning numbers here, if I say Math.max numbers(...numbers), and now when I test my code, and so I pass the test here and I can confirm that I did this right. There's a challenge at the end of each chapter. Have fun with them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Speakers:** - [instructor] (1)


### 1. Building Blocks of Closures

[↑ Back to Table of Contents](#table-of-contents)

#### [Local and global scope](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=1)** - [Instructor] The first building block of closures is scope. Scope is a way of describing which variables are available in different contexts within an application. [JavaScript](../../Skills/Software%20Development/JavaScript.md) includes a few different types of scope. For the purposes of creating a closure, two types of scope are important, global and local. The main difference between these two scopes is whether a variable is created within a function or not. Global scope describes the variables that an application has access to anywhere in the code. Global variables are created outside of functions or blocks such as conditional statements or loops. Global variables are most commonly declared at the start of the code. Any statement in a JavaScript application has access to all of that apps' lobal variables. In this code, the forecast variable is global so we can reference it anywhere in the code, including in the advise function. Local variables on the other hand are not available everywhere. A local variable is created within a function and is available only within that function. Code outside of that function cannot access the variables value by referencing the variables name. However, all global variables are available within a function because as we saw earlier, global variables are available absolutely everywhere within an app.
>
> **[1:32](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=92)** For instance, in this code, the forecast and tempC variables are created in the global scope, but the tempF variable is created within the advise function. So it has local scope within that function. This means that the tempF variable is available only within the advise function. So if we tried to access it outside of the function, like on this last line, where we try to console.log(tempF) outside of the advise function, we would get an error because that locally scoped variable is not available outside the function. You can think of a function as similar to a one-way mirror. Code within the function can see out and access global variables, but code outside the function sees only the mirror, blocking any access to the variables declared inside. The start files for this video are an app for a sports product company. When a user enters a city or other location, the app looks up the local weather and suggests whether appropriate sports for teams, individuals, or all of these together. Here in the script.js file, I want to add some new code. Now that our app is live, we want to collect some information on how it's used. And we're going to start by logging how many times a user clicks each of the buttons for the three categories of sports. Later on, we need to write some code to connect to the backend and submit this information. But for right now, we just want to capture it
>
> **[3:06](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=186)** and verify that it's being recorded correctly. I've already added an event listener down here on line 97 for an update clicks function whenever a button is clicked. So here at the top of the file, I'll create a function called update clicks.
>
> **[3:34](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=214)** And this will take a single parameter from the event listener, which will be a reference to the click target so we'll call it menu. And within the function, I'll start by adding a variable called clicks, whose value is going to be an empty object. Because this is in a function, that clicks variable has local scope, local to the update clicks function, and it's not available outside of this function. And then I'm going to create a variable called button and set its value to menu.id, which is the ID value of the element that was clicked. This is going to be useful for us. And then I'm going to set a new key value pair in the clicks object using clicks[button] as the key because those ID values correspond to the labels of the buttons as well. So they're ideal to use as keys in our object to store clicks for each button. And after the equal sign, I'm going to set this two clicks[button] + 1.
>
> **[4:43](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=283)** But if that key doesn't exist yet, this will be undefined and this math won't work. So I'll add an or, || and 1 to set the value to one otherwise. Now, before we test this out, we have to make sure that we replace the placeholder here, API key, with the actual API key value. So over in my note, I'm going to copy my API key. I'm going to paste that in here. And I'll save my work. And at the command line, I am in the start files for video 01_01. So I'm going to start my HTTP server. I'm going to set it to port 3000. And then in my browser, I'm actually going to go to local host 3000 and I'll enter Boston in that box, click the get forecast button, and we get the forecast. And then I will click these buttons a few times. So hopefully we'll log a few clicks in our object. And then I'm going to open the console and the fave icon didn't load, that's fine. And I'm going to close this little update down here. And then I want to check the value of that clicks object that hopefully all those clicks have been being added to. So I'll type that, and it says clicks is not defined. So returning to our code, let's think about why that might be. So we already said that clicks is a local variable to the update clicks function. So because of that,
>
> **[6:14](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=374)** once the function returns at the very end, the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of my code doesn't have access to the clicks variable. So instead of trying to log that value from the global scope in the console where I don't have access to it, what if I instead add a console.log statement within the function itself, that way we know the variable exists when the statement runs. So before the end of the update clicks function, I'll add a console.log and I will just log clicks. And then I'll save my work. I'll go back to the browser and I will reload. And this time we'll enter Mumbai, get the forecast and I click team, and they're in the console, I see my clicks value containing the key team and a value of one. So far so good. Now I'll click solo and I get another statement log to the console, but now my object still has only one key, but it's solo. And we find that no matter how many times we click, we only ever see a key with a value of one for the most recent click. So what's going on now? Well, going back to our code, let's think about what's happening in the update clicks function. When we click a button, the function runs. The clicks object is created. A value is added to it.
>
> **[7:47](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=467)** It's logged to the console. And then the function ends. And when the function ends, the local variable is no longer used by any code in our app. So it no longer exists either. So the next time the function runs, the object is recreated with an empty value and we start over again. This is clearly not what we want. We want a running tally. Well, remember our two way mirror. Code in a function can see out accessing global variables, but code outside of function can't see in to access local variables within the function. So how could we use scope to fix our function here? One way would be to move the clicks variable definition outside of the update clicks function. This means it stays around even after the update clicks function has finished running, but the code within the function can still access this variable from the global scope. So I'm going to cut and paste the let clicks statement outside of the update clicks function. And then I'm going to save my code. I'm going to go back and reload my browser, and I will enter a Mumbai again. And now I click team and they get that log in my object in the console. Click solo and now that's added to the object rather than replacing the existing object. I click all and that's added as well.
>
> **[9:22](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=562)** And now when I click team again, the value updates to two. So each new click is added to the ones that were there before. And that's because the variable is not deleted after each time the function runs and that's because the variable is outside the function in the global scope.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Code Identifiers:** tempf (3), tempc (1)
> **Env Vars:** api (3), http (1)
> **Definitions:** is a  (2), means that (1)
> **Analogies:** such as (1), for instance (1), similar to (1)
> **CLI Commands:** make (1), find (1)
> **Cross-References:** as we saw (1), go back to (1)
> **UI Navigation:** go to (1), open the (1)

#### [Nesting functions](https://www.linkedin.com/learning/javascript-closures/nesting-functions-14367404?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-closures/nesting-functions-14367404?u=76281980&t=0)** - [Instructor] Another building block of closures is nested functions. In [Functional Programming](../../Skills/Software%20Development/Functional%20Programming.md), we often work with a set of independent functions. In [object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md), we work with individual functions as methods of an object. In order to create a closure though, we nest functions, declaring a function within another function. We refer to the nested function as the inner function or the child function. We refer to the function the inner function is nested within as the outer function or the parent function. A function name has scope, just like a variable name. So creating a function within another function means that the inner function has local scope and is not available outside of the outer function. So in the script.js start file for this video, I'm building out our function that stores and updates the number of times an interface button has been clicked. And right now, my code logs the state of the clicks variable after each click but I'd like my code to be a little more organized. So for organizational purposes, I'm going to create a nested function within the updateClicks function. I'll call that reportClicks. And in it, I'm going to create a new variable called report whose value is an array referencing the button variable,
>
> **[1:39](https://www.linkedin.com/learning/javascript-closures/nesting-functions-14367404?u=76281980&t=99)** which is the ID of the element that was just clicked and the clicks variable. And then I can move my console.log statement inside my new nested function, and I can use the ES6 spread operator to log both elements of the report array. So I'll say ...report, and that will log both of the elements in the report array. And then finally, outside of the nested function, but still within the updateClicks function, I'll call that nested function. So we'll call reportClicks. And so now reportClicks is my nested function, my inner function, and my outer function is updateClicks. And from [JavaScript](../../Skills/Software%20Development/JavaScript.md)'s scoping rules, we know that the variables of the outer scope are available within any nested scope. So the reportClicks function has access to the button variable that's defined in the outer function, updateClicks. And both functions have access to the clicks variable, which is defined in the global scope. So I'll save my changes. I have my API key. And I have my document loaded in the browser. I will enter Sydney as the city. Get the forecast. And then as I click each button, I see the ID of the button clicked, as well as the full updated clicks object. So this code leverages nested functions
>
> **[3:15](https://www.linkedin.com/learning/javascript-closures/nesting-functions-14367404?u=76281980&t=195)** and nested local scopes to add a little more detail to our logs while keeping our code organized.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Functional Programming](../../Skills/Software%20Development/Functional%20Programming.md) (1), [Object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Code Identifiers:** updateclicks (4), reportclicks (4)
> **Env Vars:** es6 (1), api (1)
> **File Paths:** script.js (1)
> **Definitions:** is an  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Return a value from an inner function](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=1)** - [Instructor] The third and final building block of closures is returning a value from a function. And in particular, returning a reference to an inner function. Whatever a function does, it mainly affects the app that it's part of by returning a value. Data goes in, and the data that comes out has been transformed in some way by the function. For instance, this function takes in data in the form of the base and tax parameters. It then uses those parameters in a calculation, that calculation results in a new value stored in the total variable. And finally, it returns this new value as the result of the function execution. In our updateClicks function, instead of simply calling report clicks at the end of the function, we can instead return a reference to the reportClicks function. And this has a few positive effects. First off, remember that including parentheses after a function name always calls the function, and that's not what we want to do here. Instead, we want to return just the function name as the value, by returning this inner function, reportClicks, it can be called at a later time at the place in our code where it's being returned. Now, outside of our updateClicks function, we'll create a variable, I'll use the "const" keyword. The variable will be called "report." And its value will be the result of calling updateClicks. Because updateClicks returns a function,
>
> **[1:40](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=100)** the "report" variable stores a reference to that inner function. And to make that inner function work, we'll have to make a couple tweaks to our code. The value of the "button" variable will have to be determined when the report function is called, which corresponds to the inner reportClicks function. We have to move the code that sets the value of "button" within the inner function. It's best practice to instantiate the variable just once, so we'll change the "let button" statement in the updateClicks function to just declare the variable, but not set the value. Then, in the reportClicks function, we'll set the value of "button" to menu.id, which will still correspond to the ID of the button that was clicked. And we can simplify our code even further by consolidating these final two statements. Instead of creating a variable and then logging it out, we'll simply just console.log, the "button" variable, and the "clicks" variable. And we'll take this other variable out of here. Then we'll also move the line that sets the value of clicks[button], and we'll move that within our inner function after we assign a value to the "button" variable. Because this statement has to be evaluated when the report function, the inner function,
>
> **[3:13](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=193)** is called. And then, we also need to move the parameter from the outer function, which we've been calling so far to the inner function, which will effectively be calling when we return it. I'm going to cut "menu" from updateClicks, and I'm going to paste it in as the parameter for reportClicks instead. And then finally, we have to go down to the event listener, which is in line 111, and change updateClicks to "report" as the function to call in response to a click on one of the buttons. And we save and then reloading in the browser, and we're going to test, is Omaha. We have a forecast, and when we click buttons, we get those same results. We've done some pretty fancy code reorganization, but without any particularly concrete results. Switching back to the code, there's one more thing we can do that's pretty useful. We can move the "clicks" variable into the updateClicks function. Close up the spaces there. Now, originally we kept that as a global variable, so its state would persist between each time the updateClicks function was called. But now let's save and we'll reload in the browser, test with Omaha, click some buttons.
>
> **[4:52](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=292)** And we still get the same behavior, so that "clicks" value is persisting. How is this working? Well, looking at our code, the updateClicks function is returning the inner function, reportClicks. And reportClicks has its own scope and also has access to the local variables of its parent function, updateClicks. Now, normally when a function returns, it's done executing and all of its values, including variables, are garbage collected by the parser and are no longer available. But because updateClicks returns a reference to an inner function that has access to its local variables, when updateClicks returns, its references are not resolved, they remain in memory. And the reference to those variables that we've returned from the function in the form of the "report" function is called a closure. One of the advantages of a closure, which we can see right here in this code, is that we've removed clicks from the global scope. And that has a couple benefits, one is just supporting the basic practice of keeping variables out of the global scope as much as possible. If we were working with several different variables here, instead of just one, and we were able to move them all out of the global scope, that would be a significant benefit. And the other thing is that even though our "clicks" variable is still available to our app, and we can work with its value,
>
> **[6:26](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=386)** it's available only through our closure, through the "report" function. And this means that it's somewhat protected. If we're building out this code later, or another developer is working on it, we can't simply write code to change this variable because only the "report" function has access to it. Closures have concrete benefits to our code base in terms of organization and protecting variables.

> [!info]- Semantic Content
>
> **Code Identifiers:** updateclicks (13), reportclicks (7)
> **Definitions:** is called (3), means that (1)
> **CLI Commands:** make (2)
> **UI Navigation:** click on (1)
> **Analogies:** for instance (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### [Create parallel closures](https://www.linkedin.com/learning/javascript-closures/create-parallel-closures-14366907?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/javascript-closures/create-parallel-closures-14366907?u=76281980&t=1)** - [Tutor] Even though the ability to return a closure can be helpful in code organization, this feature of [JavaScript](../../Skills/Software%20Development/JavaScript.md) wouldn't necessarily be very powerful if a function could return only a single reference. If I wanted to reuse the same function elsewhere in my application, but had all of my uses referencing the same closed over values, my code would quickly become redundant and harder to maintain. Fortunately, this is not how closures work. In fact, one of the super powers of a function that creates a closure is that it can create references to multiple closed over variables that are independent of each other. Let's explore this in our code. We have a function that creates a closure to log clicks on the buttons at the top of the app. But how about if we want to reuse this function to also log each time a user moved the mouse over one of the items in the product gallery further down the page? So in the browser, scrolling down to the [products](../../Skills/Software%20Development/Microsoft%20Products.md) section and let's dig into one of those gallery elements. I'm going to right click here and click inspect. And so notice that these items do not have ID values like the buttons do. And this means we're going to have to abstract out our code a little bit so we can instead pass in values that aren't ID values. So first off, we'll replace the parameter name menu with a more generic name and we'll use item.
>
> **[1:34](https://www.linkedin.com/learning/javascript-closures/create-parallel-closures-14366907?u=76281980&t=94)** And then we'll take out that button variable and we'll take out the code that sets the value of the button variable as well. And then we'll change all three references from button to reference the item parameter instead. So here it's going to be clicks item, here it's going to be clicks item and here we're going to reference item, comma clicks. And then instead of creating a simple report function down in line 12, we want to create two distinct report functions, one for the activities buttons, and another for the product gallery. So I'll rename that existing variable to report activities, and then we'll create another statement using const to create a variable called report products and set its value to update clicks as well. So now I'll have two functions whose values are both equal to the report clicks function that's returned from calling update clicks. And then scrolling down to the bottom of the file, we need to update the event listener for the activity buttons. First, we need to change the reference to the report function to call the report activities function instead. And we need to pass the ID value of the element that was clicked. So instead of event.target, we're going to use event.target.id.
>
> **[3:10](https://www.linkedin.com/learning/javascript-closures/create-parallel-closures-14366907?u=76281980&t=190)** Now we also want to create an event listener for the items in the product gallery. They don't currently have an event listener because their visual effects are created with pure CSS. So, we'll add a document dot query selector all and we'll select .productimage. And then we'll use for each adding function and grabbing that element so that we can add an event listener to each one of those elements. So el.addeventlistener, we're going to listen for the mouse enter event, and we're going to specify an anonymous function, also captures an event and we'll use this anonymous function to call our second new function report products. And here we want to pass in the text of the H three element, that's a sibling of the image that we're binding the event to. And we can get that by grabbing the event object, and using the target property, specifying the next elementsibling.textcontent.
>
> **[4:28](https://www.linkedin.com/learning/javascript-closures/create-parallel-closures-14366907?u=76281980&t=268)** And then on the next line, just adding that final parameter false, adding our semi-colon there on line 117. So this is going to pass a unique text string that identifies the gallery item that the mouse has just entered. And then scrolling up to lines 12 and 13, we might think that because we're getting two references to the same variables, we're going to get one big object that's got all our data mixed up in it, which is not what we want, but it turns out that's not how closures work. So we'll save our work, we'll reload in the browser, and I'll enter Boston and we'll test our activities, and so far so good. We get the same object in log statements that we're used to. And then scrolling down to the gallery, I'll just start moving the mouse around and notice I have an object being logged, showing the text of these different headers, but I don't see anything that references the buttons above. And then moving back up to the top and clicking the buttons again, and the object being displayed here, doesn't contain any of the gallery headings. So we have references to two entirely different variables. And so closures enable us to create not just a single set of private variables, but as many distinct references to copies of those private variables as we want. And this means we can keep our code dry using a single function to return as many references as we need to reuse the same code within an app.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (3), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Env Vars:** css (1)
> **Speakers:** - [tutor] (1)

#### [Solution: Create a closure using a nested function](https://www.linkedin.com/learning/javascript-closures/solution-create-a-closure-using-a-nested-function?u=76281980)


### 2. Creating and Using Closures

[↑ Back to Table of Contents](#table-of-contents)

#### [Implement the module pattern](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=1)** - [Instructor] One of the main places that closures can be used in [JavaScript](../../Skills/Software%20Development/JavaScript.md) is to create modules. The idea of a module is to encapsulate a set of code and expose just a subset of properties and methods for working with it. A module keeps some values totally protected while providing access to others in specific ways through its methods. Another advantage of using a module is that it avoids polluting the global namespace. All methods and properties are replaced with a single name, the name of the module. The code to create a module returns an object. The methods within that returned object contain closures and the code that returns the object uses an IIFE so it's invoked immediately when the JavaScript code is parsed. The return value is assigned to a variable. You can then access the methods of the returned object using the name of the variable, which becomes the name of the module. In the code for this video, in addition to the function at the top of the script.js file, we have a number of variables and a few functions further down in the code. I'm going to leave the code at the top alone. This is what logs events. If we were putting more work into this app, we'd probably want to abstract that into another file so we could use it in different pages and apps. So starting here on line 14, I'm going to add a new variable called list widget, and I'll use const,
>
> **[1:35](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=95)** and this is going to store the object that will make up the module. So the value of this variable is going to be an IIFE. And so I'll start my IIFE, paren function, empty parens and then an opening curly brace. I'm going to take out that closing syntax and starting on line 15, I'm going to go all the way down to line 89. I'm going to indent all that just inside of the IIFE and then add a new line on 90. I'm going to close my function. I'm going to close my IIFE and then I'm going to add an additional set of parens at the end to invoke that function and a semi-colon to finish it all off. So that creates the IIFE. And now I need to actually export some properties and methods. And so examining my code, I have a few properties and methods that need to be accessed outside of the module. The URL and the API key are accessed outside of the module and the event listeners, but the activities and the state and the category variables are not, they're only accessed inside the module so they don't need to be exported. And then all three functions within the module needs to be exported as well. So I'm simply going to create a return statement and set its value to an object that includes the code for the variables and functions I want to export. And so I'm going to add a new line
>
> **[3:08](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=188)** after the category variable, simply going to be a return statement and the value to return is going to be an object. So I'll take out that closing curly brace for the object. And then again, I'm going to indent lines 26 all the way through 90. And then after line 90, add one more new line, close my object, add an ending semi-colon. And now I notice I have some red squigglies and that's because I need to convert the contents of the object to use object notation instead of variable names. So here in 26, instead of using a let keyword, I need to use a colon and replace that semi-colon with a comma. And then the same thing for API key. For update activity list. And update activity lists starts on line 28. Can follow that indent all the way down to line 67, where I need to put a comma. And then again, with update UI success, colon function, and follow that down to line 87 comma, and then finally update UI failure. Colon function, that ends on line 90. We're all good, the red squiggles are gone, and then I need to do one final thing.
>
> **[4:44](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=284)** All five of these properties and methods are now keys within the list widget object. So I need to change all the references outside of the module to reference the object name first. So first down here in the [Fetch](../../Skills/Web%20Development/Fetch.md) code in line 99, we've got the URL and that should reference listwidget.url, and I'm going to copy list widget dot. So I also need to add that prefix to the reference to the API key, and then also the update UI success method of the list widget object and the update UI failure method. And then in the next event listener, there's a reference to update activity list where I need to add that list widget prefix, and then up above in the code for update UI success, I have a referenced update activity list, and I'm going to change that reference to use the name of the object as well. And so saving my changes. I'm going to reload this in my browser. Type Tokyo, click get forecast, and it works. And all I'm looking for here is that the activity list functionality works because the module code didn't touch that logging function from the top. So I get a successful API response. If I click these buttons, my dom manipulation works. So I've got the same functionality, but I've done two things. I've taken variables and function names out of the global namespace and I've also organized my code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **Env Vars:** iife (6), api (4), url (2)
> **File Paths:** script.js (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Avoid unintended closures](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=1)** - [Instructor] Although closures can be useful, sometimes we create closures in our code unintentionally and they cause the code to behave in unexpected ways. In these cases, we need to rewrite our code to remove the unintended closures. One of the classic places we see this is in a loop such as a for statement. While the modern let and const keywords create block scope within a loop, the older and more widely compatible var statement does not. Let's build out some code to examine the issues this can cause and how we can use our knowledge of closures to fix them. The start files for this video are the website for a sports product company. The design team has asked us to mock up a stopwatch animation as a sports-themed placeholder while the weather information is loading after users click the Get Forecast button. And we'll start with something basic and leave off integrating it with the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the code until we get the green light from the design team. So first, for testing purposes, we'll go down to the bottom of our file to the [Fetch](../../Skills/Web%20Development/Fetch.md) code and we'll comment that out, so that's lions 99 through 105. And this will let us test the animation without the weather forecast overwriting it. Then right after the e.preventDefault statement on line 96, I'm going to add a function call for a new method of our module. So that'll be listWidget.updateUIWorking. And this will be a method that makes UI updates
>
> **[1:35](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=95)** while the [AJAX](../../Skills/Web%20Development/AJAX.md) request is happening. And then moving up to the module, on line 68 I'm going to add a new method called updateUIWorking. It's going to be a function and I'll go ahead and add my closing comma online 70. And I'm going to use a for statement to loop through some code to write a time to the dom and then update that regularly. So for let i equals zero. i is less than or equal to nine. i plus plus. And then I'll just run a setTimeout statement each time through the loop. That's going to take an anonymous function. And then in my setTimeout function, I'll grab document.querySelector .conditions and I'll set the inner [HTML](../../Skills/Web%20Development/HTML.md) using a template literal. So I'll create a p element with at class of animation and I'll give it text 00:00. which is going to simulate that stopwatch. And then I'll use dollar curly brace i to reference the current value of i and then I'll close the p element
>
> **[3:09](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=189)** and add a closing semi-colon. And then I need to add a time to my setTimeout statement. And that will be 100 for a hundred milliseconds times i. So every 1/10 of a second, I'll get an increase in the number. And so this code is just a test that should take us from zero to nine. So I'll save this. I'll reload it in my browser and I can click the button without filling out the form because we've disabled the fetch code for the time being. So I click that button and my counter shows up and counts from zero to nine. So we can absolutely do this. The font looks good. Design might even like this. So going back to our code, how about if we want to make our code a little more backward compatible and use var instead of let? So on line 69, let's just change that let to a var, save our work, and we'll reload in the browser and just click the Get Forecast button again. Now that's not right. So the stopwatch just shows up at 10. Doesn't do any counting. And so that 10 is outside the bounds of our for-loop and we don't see any of the animation. So what's going on here? So first off, when that for statement runs even though we're setting a number of timeouts for the future, all of those loops execute right away. So all the loops complete right away and the timers are set. Now remember that a let statement can create block scope. So when we were using let,
>
> **[4:43](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=283)** each time through the loop the block had a variable that was scoped to that block. So each timeout was set for 100 times the value of i when it was set. Now unlike let, var does not create block scope. So all of the setTimeout functions in our loops contain closures to the i variable in the parent scope. So all the loops happen right away. All the closures referenced the same value of i. And when the looping is complete, i is equal to 10 and all of the closures are referencing it. So they all display the final value of i which is 10. Now we can eliminate the closures here so we can still use var for backward compatibility but ensure that each timeout has its own private i variable. And to do that, we'll first enclose the setTimeout code within an inner function to create local scope.
>
> **[5:47](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=347)** And so I will put the closing brace for that function on a new line, 74. Then I will indent those three lines of setTimeout code. And then I'm going to make that inner function an iffy. So I will close that in parens, add another set of parens at the end to immediately invoke it, and then I'm going to pass in the value of i as the argument for the iffy. And then I'm going to give this new function a parameter of j. And so that's going to take the value of i we pass in and assign it to this new locally-scoped parameter j. Then I just need to change my reference from i to j, both in the template literal and in the time calculation. And then if I save my work and go back and reload in the browser, click that button again, and now the countdown works like we expect to. So each setTimeout function in our code takes advantage of the variable j in its parents scope to set a timeout based on a local scope rather than on the i variable that's shared among all iterations of the loop. And so instead of each set out time function containing a closure to the i value in the parent scope, it instead references the unique j value in its new parent scope in the wrapper function we created.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Fetch](../../Skills/Web%20Development/Fetch.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [AJAX](../../Skills/Web%20Development/AJAX.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Code Identifiers:** settimeout (7), updateuiworking (2), preventdefault (1), listwidget (1), queryselector (1)
> **CLI Commands:** make (2)
> **Env Vars:** ajax (1), html (1)
> **Exercise Files:** template (2)
> **Ports:** :00 (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Use JS features in place of closures](https://www.linkedin.com/learning/javascript-closures/use-js-features-in-place-of-closures?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/javascript-closures/use-js-features-in-place-of-closures?u=76281980&t=1)** - [Instructor] In recent versions, [JavaScript](../../Skills/Software%20Development/JavaScript.md) has added a few features that enable you to control scope without building closures. [ECMAScript](../../Skills/Web%20Development/ECMAScript.md) 5 implemented the forEach method for arrays. We can use this method instead of a for loop to iterate through an array. Because forEach takes a callback function as its first argument, each time through the loop creates a separate local scope. Essentially, the work of creating a closure is already built into this method. So in the updateUIWorking method, we can recreate our stopwatch simulator using forEach instead of for to rewrite our code without a closure. So I'm going to comment out that whole for loop. Now, we use forEach with an array, so we need to start by putting the numbers we want to count through in an array and then referencing that. So I'm going to create a variable called count, and that's an array of zero, one, two, three, four, five, six, seven, eight, and nine. And this is just one way of going at it. And then, we can simply say count.forEach, using the forEach method on the count variable, passing in an anonymous function, and using el to reference each array element as we iterate through the loop. And then, I can create my setTimeout function, passing that an anonymous function,
>
> **[1:35](https://www.linkedin.com/learning/javascript-closures/use-js-features-in-place-of-closures?u=76281980&t=95)** and I want to do that same DOM manipulation. So I'll just copy that in from my earlier code, uncomment that. Then, I have to change that j to reference el instead. And then, finishing up my setTimeout. Time is going to be 100 times el. And so this is essentially replacing the outer function that our existing code used to avoid creating a closure. So saving this, reloading the page in the browser. And I do not need to enter anything in the text box because I have commented out the [Fetch](../../Skills/Web%20Development/Fetch.md) code here. So just clicking the button, and we get the animation just like we did before. So the timer works just like it did. ES6 gives us additional options by introducing block scope. In modern browsers, using the let or const keyword creates a type of local scope, known as block scope, when it's used within curly braces other than a function, like within a for or if statement. So for instance, when we're using a var statement within a loop to create a separate local scope each time, we have to code up a closure, but an alternative in ES6 is simply to change the var keyword to let, taking advantage of block scoping in the for block. So I'm going to comment out the forEach code we just created, and then I'm going to uncomment the existing for.
>
> **[3:15](https://www.linkedin.com/learning/javascript-closures/use-js-features-in-place-of-closures?u=76281980&t=195)** I'm going to comment out the start and end of the nested function. I'm going to change my js back to is, here and here. And then, I'm going to change that var to let. Saving that work, reloading the browser, clicking that button. And again, the functionality is identical. So using the let keyword saves us some extra work in a situation like this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [ECMAScript](../../Skills/Web%20Development/ECMAScript.md) (1), [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **Code Identifiers:** foreach (7), settimeout (2), updateuiworking (1)
> **Env Vars:** es6 (2), dom (1)
> **Analogies:** just like (2), for instance (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Create a module](https://www.linkedin.com/learning/javascript-closures/solution-create-a-module?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-closures/solution-create-a-module?u=76281980&t=0)** - [Instructor] Here's how I approach this. Now I'm starting off with a constant, which is an object that contains a couple properties, and then I have a few functions to work with that object, one for updating the color value, one for updating the model value, and then one for returning the object. And then at the bottom here, I have a shell called selection for my new module. So I'm going to move these pieces of code into this module and then convert it. So this constant needs to be inside the module as is.
>
> **[0:37](https://www.linkedin.com/learning/javascript-closures/solution-create-a-module?u=76281980&t=37)** No changes there. And then I want to convert each of my existing functions into a method within an object. So I'm going to be returning an object here. And then within my object, I'm going to have these three methods, which are these functions. So I'm going to cut and paste this code and then convert it into methods. So it's no longer going to be function, just going to be updateColor, which is a function that takes new color. I need a comma at the end of that. And then I'm just going to use that same approach for the other two,
>
> **[1:35](https://www.linkedin.com/learning/javascript-closures/solution-create-a-module?u=76281980&t=95)** and now I've created a function that contains an object and returns three methods. So the final step here in order to create a module, I want to convert my function to an IIFE. And so I'm going to do an opening paren before the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) function. And then at the end here, I need the opening and closing parens to actually call the function. And then I'm going to test my code, and I can see all three tests passed. So I passed in a couple values into my object, and then when I actually called the getSelection method of my module, I got those values back.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Code Identifiers:** updatecolor (1), getselection (1)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** iife (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continuing to learn closures](https://www.linkedin.com/learning/javascript-closures/continuing-to-learn-closures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-closures/continuing-to-learn-closures?u=76281980&t=0)** - [Sasha] Thanks so much for joining me in this course. You now have a basic understanding of what a closure is in [JavaScript](../../Skills/Software%20Development/JavaScript.md), how to create one, and how it's used in common programming patterns. If you want more experience with writing [Vanilla](../../Skills/Web%20Development/Vanilla.md) JavaScript code, check out App Building with Vanilla JavaScript. Feel free to connect with me online. Now, take your new skills and build something amazing. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (3), [Vanilla](../../Skills/Web%20Development/Vanilla.md) (2)
> **Speakers:** - [sasha] (1)


## Instructor

- [Sasha Vodnik](../../Instructors/Software%20Development/Sasha%20Vodnik.md)

## Resources

- Exercise files available

## Skills Covered

- JavaScript

## Path Context

### In [Become a JavaScript Developer](../../Paths/Network%20and%20System%20Administration/Learning%20Paths/Become%20a%20JavaScript%20Developer.md)
← [JavaScript- Prototypes](JavaScript-%20Prototypes.md) | **6 of 13** | [JavaScript- Classes](JavaScript-%20Classes.md) →

## Appears In

- [Become a JavaScript Developer](../../Paths/Network%20and%20System%20Administration/Learning%20Paths/Become%20a%20JavaScript%20Developer.md)

## Related Courses

_Courses sharing skills:_

- [End-to-End JavaScript Testing with Cypress.io](../Software%20Development/End-to-End%20JavaScript%20Testing%20with%20Cypress.io.md) — JavaScript
- [Learning JavaScript Debugging](../Software%20Development/Learning%20JavaScript%20Debugging.md) — JavaScript
- [Foundational JavaScript Security](../Software%20Development/Foundational%20JavaScript%20Security.md) — JavaScript
- [JavaScript- Test-Driven Development (ES6)](../Software%20Development/JavaScript-%20Test-Driven%20Development%20(ES6).md) — JavaScript
- [JavaScript- Best Practices for Data](../Software%20Development/JavaScript-%20Best%20Practices%20for%20Data.md) — JavaScript

---

[↑ Back to top](#)