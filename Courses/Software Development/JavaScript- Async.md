---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: javascript-async
url: "https://www.linkedin.com/learning/javascript-async"
duration_minutes: 91
duration: 1h 31m
level: Intermediate
updated: 4/17/2023
learners: 31352
skills:
  - JavaScript
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHygexut8bMMQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1635186525102?e=2147483647&amp;v=beta&amp;t=PUChXOd3hEVFLxFL4P-3ZFBGhpCnPMLyjywoxjCeiRg"
linkedin_topic: Software Development
learning_paths:
  - '[[Improve Your JavaScript Language Skills]]'
prev_courses:
  - '[[Learning Functional Programming with JavaScript ES6+]]'
next_courses:
  - '[[Level Up- JavaScript]]'
path_nav: '[{"path":"Improve Your JavaScript Language Skills","position":2,"total":8,"prev":"Learning Functional Programming with JavaScript ES6+","next":"Level Up- JavaScript"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/javascript
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/JavaScript-%20Async.md)

![JavaScript: Async](https://media.licdn.com/dms/image/v2/C4E0DAQHygexut8bMMQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1635186525102?e=2147483647&amp;v=beta&amp;t=PUChXOd3hEVFLxFL4P-3ZFBGhpCnPMLyjywoxjCeiRg)

# JavaScript: Async

> Asynchronous code is the foundation of most modern web experiences. It allows programs to switch between tasks and juggle multiple requests. However, without a thorough understanding of asynchronous programming, developers can write bloated code that works against the architecture of the web. Join Sasha Vodnik in this course, which explores asynchronous approaches to JavaScript programming using c

> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-async) | 1h 31m | Intermediate | 31K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Implementing smart asynchronous code](#implementing-smart-asynchronous-code)
  - [What you should know](#what-you-should-know)
  - [Environment setup](#environment-setup)
  - [Getting an OpenWeatherMap API key](#getting-an-openweathermap-api-key)
- [**1. Programming Asynchronously with Callbacks**](#1-programming-asynchronously-with-callbacks) (5 videos)
  - [Understanding what asynchronous means](#understanding-what-asynchronous-means)
  - [Defining asynchronous programming](#defining-asynchronous-programming)
  - [Using callbacks in asynchronous programming](#using-callbacks-in-asynchronous-programming)
  - [Implementing callbacks for problem-solving](#implementing-callbacks-for-problem-solving)
  - [Using error checking with multiple callbacks](#using-error-checking-with-multiple-callbacks)
- [**2. Programming Asynchronously with Promises**](#2-programming-asynchronously-with-promises) (8 videos)
  - [Understanding promises](#understanding-promises)
  - [Building asynchronous code with promises](#building-asynchronous-code-with-promises)
  - [Appending methods to resolved promises](#appending-methods-to-resolved-promises)
  - [Using catch methods for rejected promises](#using-catch-methods-for-rejected-promises)
  - [Using the finally method for executing handlers](#using-the-finally-method-for-executing-handlers)
  - [Preparing the all method for executing multiple promises](#preparing-the-all-method-for-executing-multiple-promises)
  - [Implementing the all method for executing multiple promises](#implementing-the-all-method-for-executing-multiple-promises)
  - [Making code backward-compatible with polyfill](#making-code-backward-compatible-with-polyfill)
- [**3. Programming Asynchronously with Async/Await**](#3-programming-asynchronously-with-asyncawait) (4 videos)
  - [Understanding the async/await model](#understanding-the-asyncawait-model)
  - [Using async functions with await statements](#using-async-functions-with-await-statements)
  - [Using statements to handle errors in async/await code](#using-statements-to-handle-errors-in-asyncawait-code)
  - [Making async/await code backward compatible with polyfill](#making-asyncawait-code-backward-compatible-with-polyfill)
- [**4. Programming Asynchronously with Web Workers**](#4-programming-asynchronously-with-web-workers) (5 videos)
  - [What is a web worker?](#what-is-a-web-worker)
  - [Creating a web worker](#creating-a-web-worker)
  - [Sending data to a web worker](#sending-data-to-a-web-worker)
  - [Returning data from a web worker](#returning-data-from-a-web-worker)
  - [Identifying use cases for web workers](#identifying-use-cases-for-web-workers)
- [**Conclusion**](#conclusion) (1 videos)
  - [Asynchronous coding experience](#asynchronous-coding-experience)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Implementing smart asynchronous code](https://www.linkedin.com/learning/javascript-async/implementing-smart-asynchronous-code-22163789?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/implementing-smart-asynchronous-code-22163789?u=76281980&t=0)** - Do you want to write [[JavaScript]] code that waits for a process to return and then does exactly what you want with the result? Understanding the syntax of async code in JavaScript can be a challenge, and choosing between the many async options in modern JavaScript can be overwhelming. That's why we'll dig into basic async concepts and flow using the XHR object and SetTimeout. And we'll write modern code using promises and async/await. Whether you're just getting started with async structures or you already use them, but want to understand more about how they work, you'll practice how to implement async code to solve concrete problems on a website. So join me, and let's explore JavaScript async.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (4)
> **Env Vars:** xhr (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - do (1)

#### [What you should know](https://www.linkedin.com/learning/javascript-async/what-you-should-know-14341180?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/what-you-should-know-14341180?u=76281980&t=0)** - [Instructor] This course assumes you have some experience coding in [[JavaScript]] and making API requests using HTTP. If you don't have experience with JavaScript, a basic JavaScript course would be a great place to start. To get an overview of the modern JavaScript tools we'll be using, check out a course on ES6 or [[ECMAScript]] 6. For the basics of working with APIs, explore a course on [[AJAX]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (4), [[ECMAScript]] (1), [[AJAX]] (1)
> **Env Vars:** api (1), http (1), es6 (1)
> **Speakers:** - [instructor] (1)

#### [Environment setup](https://www.linkedin.com/learning/javascript-async/environment-setup-14340801?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/environment-setup-14340801?u=76281980&t=0)** - [Instructor] To work along with me on the files for this course, you need three applications, a web browser, a code editor, and an HTTP server. You also need an API key from [OpenWeatherMap.org](https://OpenWeatherMap.org). You undoubtedly already have a web browser installed in your machine and any major modern browser, Chrome, Firefox, or [[Microsoft]] Edge is fine for this course. I'll be using Chrome in these videos, which is a popular choice among web developers because of the extensive and powerful developer tools it has built in. Because we'll only be using the console though, that won't really make a difference for this course. A number of great code editors are available, both free and paid apps. Any editor that lets you edit and save plain text is fine for this course. So if you have a code editor you like, such as Sublime Text or Atom, it's fine to use that. I use Visual Studio code in these videos, which is a version of Microsoft Visual Studio, created specifically for [[Web Development]]. Visual Studio code is free and has [[Windows]], Mac, and [[Linux]] releases. The code is available on [[GitHub]], and users can submit issues there as well. I've customized my editor with a few extensions that are particularly useful for this course. Bracket Pair Colorizer by CoenraadS, assigns different colors to the parens, braces, and brackets throughout your code. It uses the same color for the start
>
> **[1:33](https://www.linkedin.com/learning/javascript-async/environment-setup-14340801?u=76281980&t=93)** and end bracket in each pair, and it uses contrasting colors for nested pairs. In code with a lot of nesting, this extension makes it easier to identify which opening character a closing bracket corresponds to. Identicator, by SirTori, adds a vertical line to the editor window for each indent level, and it highlights the line for the parent element of the active line of code. This creates another visual cue to help you identify where a statement or block fits into the nesting hierarchy. And finally, I use the Live Server extension by Ritwick Dey as my HTTP server. So this extension launches an HTTP server and opens the current document in your browser using the HTTP protocol rather than using the file system. This is invaluable for testing API requests and responses, which are often blocked for security reasons when initiated from a document using the file protocol. Live Server adds a GoLive icon at the bottom of the Visual Studio code window, which you click to serve and open the current document. It's note that when testing front-end web code, using Live Server, you need to launch the server on an [[HTML]] document. So right now I have a [[JavaScript]] file open. And if I click GoLive, it's going to open a live view of that file, which is just the directory of the currently open project. So to close that Live Server connection,
>
> **[3:10](https://www.linkedin.com/learning/javascript-async/environment-setup-14340801?u=76281980&t=190)** I just click this icon, disposes of that connection, and if I want to see the effect of my current JavaScript code, I need the HTML file where that code is showing up, which in this case is tours.htm. And I can either open that and use the GoLive icon, or I can right-click it and click Open with Live Server. And that is going to create that connection with the browser and going to show me the file. And when I make any changes in the HTML, they're immediately going to be reflected in the browser. So that saves me a lot of saving, reloading, saving, and reloading. If you're going to use the start files for each video in this course, rather than working with one set of files all the way through, you need to make sure that you end the server session for one page before you can start it up for a different one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3), [[Microsoft]] (2), [[JavaScript]] (2), [[Web Development]] (1), [[Windows]] (1)
> **Env Vars:** http (4), html (3), api (2)
> **Tools:** visual studio (4), firefox (1), sublime (1), atom (1), github (1)
> **CLI Commands:** make (3)
> **UI Navigation:** open the (1), right-click (1)
> **Definitions:** is a  (2)
> **URLs:** [openweathermap.org](https://openweathermap.org) (1)
> **Analogies:** such as (1)

#### [Getting an OpenWeatherMap API key](https://www.linkedin.com/learning/javascript-async/getting-an-openweathermap-api-key-14340798?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/getting-an-openweathermap-api-key-14340798?u=76281980&t=0)** - [Instructor] Finally, the videos in this course make use of data from [openweathermap.org](https://openweathermap.org). Data requests from this service require an API key, which is a unique identifier that associates you with a request coming in. The service provides a limited amount of data for free and by having your own key rather than sharing one, you can ensure that you stay below the limit of free requests. To get data from this service, you need to sign up for an account with [openweathermap.org](https://openweathermap.org) and obtain an API key, which you'll use when creating your [[AJAX]] requests for data. So let's set that up now. [Openweathermap.org](https://Openweathermap.org) makes weather information available under a creative commons license. Data is free for up to 60 requests per minute, which will work fine for this course. It's only more intensive uses that require a paid subscription. To get an API key, go to [openweathermap.org](https://openweathermap.org) in your browser and then up here at the top, click API. This documents the terms as well as endpoints that you can hit with your Ajax requests. So to sign up for an account, we can click the Sign Up link at the top, set up a username and password. For this course, I'm going to use the username asynccourse and create a password in both boxes. Make sure you're clear on what you're agreeing to here. Make sure they understand you're not a robot and create your account. They ask you some questions,
>
> **[1:33](https://www.linkedin.com/learning/javascript-async/getting-an-openweathermap-api-key-14340798?u=76281980&t=93)** which I am just going to cancel out of for now. And so now I'm logged in. And so we now have another navbar and I'm going to click API keys here, and that's going to show me the API key from my account. So I'm just going to double click there. I'm going to copy that to the clipboard and then I want to put it somewhere where I can access it easily. Now, I'm on a Mac. So I'm going to open up the Notes app. You could certainly use TextEdit on a [[Windows]] machine and in a new note, I'm just going to paste my API key in there, maybe give myself a little note. So that's my OpenWeatherMap API key. Now the key you'll see me using in the videos for this course has been deactivated. So it's important that you use your own key because this one won't work. So whenever you need to access your API key during this course, you can just go back to your note, copy the text of the key and continue coding. Now let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AJAX]] (2), [[Windows]] (1)
> **Env Vars:** api (9)
> **URLs:** [openweathermap.org](https://openweathermap.org) (4)
> **CLI Commands:** make (3)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)


### 1. Programming Asynchronously with Callbacks

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding what asynchronous means](https://www.linkedin.com/learning/javascript-async/understanding-what-asynchronous-means-14342027?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/understanding-what-asynchronous-means-14342027?u=76281980&t=0)** - [Instructror] The term asynchronous has technical applications in the field of programming. However, it also fundamentally describes experiences that we all go through every day. Now, asynchronous is the opposite of synchronous. When a set of things has to happen one after another, that's a synchronous process. For instance, imagine you go to the movies and you get in line to buy a ticket. If there are three people in line in front of you and just one cashier, you have to wait until each of the people in front of you buy their tickets before you can buy yours. That's a synchronous process because you can't make your purchase until all the other purchasers who are queued up in front of you have been served. Synchronous processes are sometimes described as blocking because the next step in the process is blocked from happening until the current step is finished. Now, instead of a movie ticket line, imagine you go to a sit-down restaurant. Now, if this worked synchronously like our movie theater, you might wait in line behind everybody else who wanted to eat at the restaurant. There would be one table at the restaurant and one employee. They'd take the customer's order, go back to the kitchen and cook it, serve it to the customer, clear the table when the customer was finished, present the bill, take payment, and then prepare the table for another customer. This would never work for a restaurant because preparing and eating a meal takes way too long for anyone to want
>
> **[1:33](https://www.linkedin.com/learning/javascript-async/understanding-what-asynchronous-means-14342027?u=76281980&t=93)** to wait for their turn. Fortunately, restaurants work on an asynchronous model in which multiple things can happen at the same time. So if my friends and I sit down at a restaurant, a server might bring us a menu and take our drink order. Meanwhile, another server might be serving food to people at a different table. Just having multiple people working at the same time means that multiple things can happen at once. Multiple servers are taking and serving orders. The cooks are in the kitchen preparing meals. Other people are busing tables and setting them. As a result, many people can be at different stages of ordering, eating, and paying simultaneously with the blocking kept to a minimum.

> [!info]- Semantic Content
>
> **Analogies:** imagine (2), for instance (1)
> **UI Navigation:** go to (2)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructror] (1)

#### [Defining asynchronous programming](https://www.linkedin.com/learning/javascript-async/defining-asynchronous-programming-14342017?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/defining-asynchronous-programming-14342017?u=76281980&t=0)** - [Instructor] We can build program flow in [[JavaScript]] in two different ways. Synchronously and asynchronously. Using synchronous program flow, code is executed in the order it appears in your JavaScript files. So here, lines one through five of the code are executed first followed by lines six through 10 and then lines 11 through 15 are executed next, matching the order of statements in the code as written. In synchronous program flow, the browser parses and executes only one statement at a time. This results in our statements being executed in order. Synchronous program flow exhibits a behavior known as blocking, meaning that later statements are prevented from executing until earlier statements are finished. In many cases, this is what we want. For instance, a value needs to be calculated first before it can be used. But if an earlier statement may take awhile to execute and statements that follow don't rely on that earlier statement having finished, then synchronous program flow can needlessly slow down our apps. In this case, we want to use asynchronous program flow. When we write this type of code, also known as asynchronous code or simply async, the parser can start executing some code and continue that execution while other code is executed as well.
>
> **[1:34](https://www.linkedin.com/learning/javascript-async/defining-asynchronous-programming-14342017?u=76281980&t=94)** So here, lines one through five of the code start execution, but these include some activity that's going to take awhile. Now technically JavaScript has only a single thread, but it does have a mechanism that allows some processes to execute in parallel while other things are going on. So here, this first set of statements is moved into that parallel process, which continues executing even as the main program flow moves to the next set of statements. Now that main program flow continues synchronous execution, so it keeps moving through the remaining code while that first block of code is executing in parallel. Now remember that synchronous code is executed only in the main program flow, while we've seen that asynchronous code is instead moved over to execute in parallel. This means that the statements are executed simultaneously. The upshot of this architecture is that asynchronous program flow lets us write code that's non-blocking. We write asynchronous code when we want to give part of our code time to complete while still allowing the parsers to continue executing the code that follows right away. One of the most common situations where we use asynchronous program flow is when we make [[AJAX]] requests. We write code using XHR or [[Fetch]], or maybe a library specific method that sends a request for data to a remote server. This code defaults to an asynchronous mode, meaning that the request gets sent off,
>
> **[3:06](https://www.linkedin.com/learning/javascript-async/defining-asynchronous-programming-14342017?u=76281980&t=186)** and while the parser is waiting for a response, the main program flow moves on to execute other code, like responding to user interactions. Another common situation where asynchronous flow is useful is setting a timer using something like set timeout. The timer starts, and while it's counting down, the main program flow can go on to execute other code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (3), [[AJAX]] (1), [[Fetch]] (1)
> **Definitions:** known as (2), means that (1)
> **CLI Commands:** make (1)
> **Env Vars:** xhr (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Using callbacks in asynchronous programming](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980&t=0)** - [Instructor] [[JavaScript]] includes a handful of built-in functions that are executed asynchronously by default. These include [[AJAX]] methods, such as those in an XML HTTP request object, as well as timing functions like set timeout and animation methods, like request animation frame. These asynchronous methods and functions have long provided the foundation for building asynchronous code in JavaScript. Sometimes we want to specify additional functions or methods to execute after an asynchronous function has finished. Traditionally, this has been accomplished using the callback pattern. In this pattern, an asynchronous function is called and its execution happens in parallel, while the main program flow continues. This asynchronous function takes another function as an argument. After the statements of the original function are executed, the function passed as an argument is called. This function is known as a callback function. A callback enables you to specify what should happen next after a function is executed asynchronously. For instance, the asynchronous set timeout function takes two arguments, a callback function and delay time in milliseconds. In this code, the first argument is the callback function. And in this case, I've specified an anonymous function right in the function call. This is a pretty common way to use set timeout.
>
> **[1:35](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980&t=95)** And the callback function simply logs hello world to the console. After the callback function is the second and final argument, which is the length of the delay in milliseconds. Here, I've specified 5,000 milliseconds, which is the same as five seconds. So when this code runs, the set timeout function first delays for 5,000 milliseconds and then calls the callback function, which logs hello world to the console. When set timeout is called, it's moved out of the main program flow and then pauses for the specified number of milliseconds, which in this case is 5,000. After the time has elapsed, the callback function is called and hello world is logged to the console. So let's take a look at this in practice. So, I've written up some sample code that does three things. We're basically just logging three things to the console here. So first, we log the [[Microsoft Word|word]] hi to the console, and that's going to happen immediately when the script loads. And next we call set timeout, passing it a function that logs the text, asynchronous result, to the console, but only after 5,000 milliseconds have passed. And then, finally, we have text that logs synchronous result to the console. Now remember that set timeout is an asynchronous function. So, according to what we've just learned, hi should log to the console first, set timeout should start running,
>
> **[3:09](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980&t=189)** but should be set aside, run in parallel and wait 5,000 milliseconds. But the main program flow will move on to that final console dot log statement and log synchronous result before that set timeout is finished. And so, I have my index dot [[HTML]] file running, using live server. So, I need to kill my previous live server and then with that index dot HTML file open, going to hit go live. And in my browser, I'm going to open up the console. And just to get rid of that live reload text, I'm going to reload my page one more time and just see the flow here. So immediately, the word hi is logged and synchronous result is logged almost immediately. And then notice that it took about five seconds for that text asynchronous result to be logged to the console. So in this case, our code ran that set timeout function. And when set timeout was finished running asynchronously, it went ahead and called this callback function. And this other anonymous function ran after set timeout. And so, the callback functions are a tool that allow us to specify what happens next after a function is executed asynchronously. Now, callbacks can also be used synchronously to simply specify what happens after code is executed in the main program flow. And developers do this all the time, but as we've seen here, callbacks are an especially important tool when building asynchronous code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2), [[Microsoft Word|Word]] (2), [[HTML]] (2), [[AJAX]] (1)
> **Definitions:** is called (4), known as (1), is a  (1), is an  (1)
> **Env Vars:** html (2), xml (1), http (1)
> **Analogies:** such as (1), for instance (1)
> **Exercise Files:** sample code (1)
> **Speakers:** - [instructor] (1)

#### [Implementing callbacks for problem-solving](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=0)** - [Instructor] Let's take a look at what a callback function looks like in practice. We're going to work with the fictitious Explore California site, and we're going to implement a feature using a callback. We want to add a feature to the tours page that shows the current weather in Los Angeles. Here's what that looks like in the end file for this video. We're going to create an [[AJAX]] request to OpenWeatherMap to get current weather data for L.A. And then we want to incorporate the data that's returned into the DOM so it's displayed in the browser window. And so to do that, I want to create an XML HTTP request object. So I'm going to create that here. I'm going to call it httpRequest and set that to new XMLHttpRequest. And then my plan is to create a function called get where I can pass in a URL to actually make that HTTP request. So I'll create a function called get. Parameter name will be URL. And we'll start by referencing our variable HTTP request. And we'll use the open method passing in the get HTTP verb and that URL parameter. So that's going to create our request and then we also have to send that request. So we're going to do httpRequest.send and that'll actually send it off to the web service. Now I've created a function here called tempToF
>
> **[1:37](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=97)** because the weather that we actually get back from OpenWeatherMap is in Kelvin. It's not used in actually understanding what temperature it is outside. And so this function will simply take a Kelvin temperature and give you back a Fahrenheit temperature. And then we've got a function called successHandler and this is actually going to take the data that we get back and it's going to render it into the DOM. This uses a template literal and then some [[Vanilla]] [[JavaScript]] to actually add the structure to the DOM. And so then down here, I've got an event listener for when the DOM has finished loading. I have an API key for OpenWeatherMap. Now this is an API key that won't be active when you're watching this video. So you need to go to OpenWeatherMap and get your own. And I also have a variable called URL, which is storing the constructed URL to get the weather from Los Angeles. I got this URL just by looking at the API documentation for OpenWeatherMap. So like most other APIs, there's really good documentation here. And I'm looking for the current weather data for one location. So they're showing me some sample strings, some sample queries that I can construct. And so that's what I used to create this URL. So all I should have to do then is call that new function that I just created called get. I want to pass it in that URL. And then once I've made that call, I want to add this data to the DOM. And so I'm going to call my successHandler function, and I'm going to pass it httpRequest.responseText.
>
> **[3:16](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=196)** So we are getting [[JSON]] back from this API that comes back in the response text property of that XHR object. And so let's see what happens. I'm going to save that code. Going to switch over to the [[HTML]] file and go live with that. And I don't have any data here. Nothing's showing up in my DOM like it did in solution file. So opening up the console, we've got an unexpected end of JSON input. My experience that usually means you're trying to parse something as JSON that's not actually JSON or that doesn't exist. So let's look back at our code. Now we created an XHR request here and we sent that off to get data. So when we called that get function, we're sending off request. And then immediately, synchronously, we are calling this successHandler function and saying, hey, take that data and do something with it. But since we know that an XHR request is generally going to take at least a couple seconds to make that round trip, to make the request, get the data processed and then get it back, we are calling our successHandler function before we actually have any data for it because we're using a synchronous model here. We're just saying, do this thing, then do this thing. And our code is not waiting around for that get request to return any data. And so one thing we can do instead is to use a callback. And so I'm going to tweak my get function here
>
> **[4:53](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=293)** to take a second parameter called success. And this is going to be a callback. And then I can take advantage of one of the properties of the XHR object. So I can actually specify callback functions to respond to specific events. And so referencing that object, I can use the onload property to respond when we actually get a response. And I'm going to use an anonymous function to call that success callback and pass it, httpRequest.responseText. So once I get that data back, the next thing I want to happen is for that data to be passed along to this callback function. And then I just need to comment out my call to success handler down here because I don't need that anymore. Oh, so I still have to pass in that callback function in my get call. So here I'm calling URL and I need to pass in the name of my callback function is successHandler. Save that. Switch back to my browser and there's my weather. And so we used a callback function to wait for the response from the remote server and then use that callback function as the next step to work with that data in our asynchronous model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (4), [[AJAX]] (1), [[Vanilla]] (1), [[JavaScript]] (1), [[HTML]] (1)
> **Env Vars:** url (9), dom (6), http (4), api (4), json (4)
> **Code Identifiers:** successhandler (5), httprequest (4), responsetext (2), temptof (1)
> **CLI Commands:** make (3)
> **UI Navigation:** go to (1)
> **Exercise Files:** template (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Using error checking with multiple callbacks](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=1)** - [Instructor] Our Explore California site uses an [[AJAX]] request to get weather, and a callback to work with the data received. But what happens when the response contains something other than the data we expect? We could receive an authentication error, a notification that the service is down, or any one of a number of other responses that don't include the data we're looking for. To deal with this, it's common to use error checking in conjunction with multiple callbacks. So, when the response comes in, instead of simply assuming we have good data and calling the success callback, we can check what kind of response we got. If our Ajax request results in a 200 response, then we know the request succeeded, and we have data, so we can call the success callback. But for any other response code, we may or may not be getting the data we expect. And we're probably not. So, we want to instead call a different callback function to examine the response, and figure out how best to deal with it. So, in my code, the first thing I want to do is update that get function. Because in addition to a success callback, I want to specify a fail callback. So, I want to make it possible to actually specify what callback should be called, in case I don't get good data back. And so the next thing I'm going to do is change my onload function. So, instead of just assuming success, I'm going to use an ifelse construction.
>
> **[1:36](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=96)** So, I'm going to check if, httpRequest.status, which gives us the numerical status code of the response. I want to see if that status code is 200. If it is, we know everything is good. So, in that case, we are just going to use our existing success function call.
>
> **[2:00](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=120)** But otherwise, we may need to dig in a little bit deeper. And in this case, just to get started, I'm going to use our fail callback, and I'm just going to send it the status property of our XHR object. And that will give us that actual status code. And so I have my success handler, and now I want to write another function, that I'm going to call failHandler. And I want that to take a parameter which is going to be called status, and that'll be our status code. So, the first thing I want to to do is console.log that status code. And so that may be useful if we have a user who's actually reporting an issue, who can give us that status code. And then I actually have a fallback image already built into my app. And so I'm just going to add a couple lines of DOM manipulation to forget about the weather report, and just show an image. And I can actually copy those lines from up above. So, up in my success handler, line 16 on my screen, defines a constant called weatherDiv. So, I'm going to copy that and stick that in my fail handler. And then up here on line 32, we've got weatherDiv.classList.remove. And I'm going to copy that, and stick that
>
> **[3:33](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=213)** as the last line of my fail handler. And so this is basically just going to display this existing section of the page, which includes an image by default. So, there's one final thing I need to do at the very bottom of my code, I'm calling my get method. I'm sending it a URL specifying success handler as my success callback. I also need to specify my new function, failHandler, as my fail fallback. And so up here in my get function, it's now expecting three parameters. And so, now I have three arguments in my function call. So, I've saved my code. Switching back to my app in the browser, nothing looks different. So, the success is still working, it looks like. I'm still getting successful information backing having that displayed. But let's go back to the code and simulate a problem. So, I'm going to duplicate the line containing my API key. I'm going to comment out the first one, and in the second one, I'm going to turn it into an empty string. And so now when I build out that URL, it's going to have an invalid API key, that should give me an error from open weather map, and should result in me not actually getting data. And so with those changes saved, going back to the browser,
>
> **[5:06](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=306)** and there we are. We've got the default image showing, instead of the weather report. And if I open up the console, I have a failure message from the browser itself. I also have that failure status code of 401 logged from my code, in case that's useful. You know, there are a lot of different HTTP status codes that we could get back, and they tell us lots of information about what has happened. So, there may indeed be some codes where we can figure out a way to reformulate our query and resubmit it. Some of them are dead ends, but this gives us a good start toward dealing with a known success, and dealing with anything else. And we could certainly make this more fine-grained down the road.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AJAX]] (2)
> **Env Vars:** url (2), api (2), xhr (1), dom (1), http (1)
> **Code Identifiers:** failhandler (2), weatherdiv (2), httprequest (1), classlist (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)


### 2. Programming Asynchronously with Promises

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding promises](https://www.linkedin.com/learning/javascript-async/understanding-promises-14342019?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/understanding-promises-14342019?u=76281980&t=0)** - Callbacks are really handy for basic cases where we want to execute additional code after an asynchronous function completes. And as you might imagine, it's even possible to string callbacks together pretty much as far as we need to. However, when we start working with code that uses multiple chain callbacks, it can be hard to write code that's both well-organized and easy for humans to read, to solve this problem. Modern [[JavaScript]] supports promises, which allow us to string together multiple callbacks while maintaining well-organized and human readable code. A promise is an object that represents the eventual result of an asynchronous operation. A promise contains information about the operation and tracks its status. It has a state property which can be pending fulfilled or rejected, and it has a result property which starts as undefined and can be given a value based on the operation. When the operation is complete, the promise executes one of two methods resolve, meaning that the operation was successful or reject, meaning that an error occurred. These methods change the state and result properties to reflect the outcome of the operation. You create a promise using the promise constructor. You can put code within a promise to do most anything you want,
>
> **[1:34](https://www.linkedin.com/learning/javascript-async/understanding-promises-14342019?u=76281980&t=94)** but a promise is most useful with an asynchronous task using the resolve or reject callbacks. When a promise resolves the result is returned. When a promise rejects the error is returned, what makes promises easier for humans to read and understand the nested callbacks is the syntax used to work with the result of a promise. The promise specification allows additional methods to be chained to the code that calls the original promise in order to work with the result of the promise to work with the result of a resolved promise. You can add the cen method note that there are a few common ways you might see the promise then code organized because JavaScript ignores white space. It's fine to use any combination of line breaks and in dense, that works for you. Whatever format you choose, you have the possibility of stringing together. A number of cen methods, all indented the same amount and with a clear flow from one to the next, making the progression of code visually obvious to you and other developers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2)
> **Documentation:** specification (1)
> **Definitions:** is an  (1)
> **Analogies:** imagine (1)
> **Warnings:** note that (1)
> **Speakers:** - callbacks (1)

#### [Building asynchronous code with promises](https://www.linkedin.com/learning/javascript-async/building-asynchronous-code-with-promises?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/building-asynchronous-code-with-promises?u=76281980&t=0)** - Modern [[JavaScript]] includes a method called [[Fetch]], that creates an asynchronous HTTP request using a syntax that's based on Promises. However, to get practice building Promises from the ground up, we're going to create our own method using the Promises constructor to create and send an XHR request for the weather information on the explore California site. So we're going to start by basically rewriting the GET Method that we've already created. So our GET Method is just creating an XHR request, sending that and then working with the response, and we just want to turn this into code that is actually creating and then working with a Promise. So the first thing I'm going to do is take out the success and fail Callback parameters because Promises don't actually work with those. We don't use Callbacks with Promises, We do that more Under the Hood. And then the first line of my function, I want to return a new Promise, and this is a capital P using the Promise constructor, and then within the parentheses, I'm going to pass in an anonymous function and that's going to have two parameters resolve and reject, which correspond to methods inherited from the constructor. So Promises are essentially Callbacks Under the Hood, but they let us write the syntax of course in a way that's easier for us to work with. And so then I basically need to stick all of this other
>
> **[1:33](https://www.linkedin.com/learning/javascript-async/building-asynchronous-code-with-promises?u=76281980&t=93)** content that used to be part of my GET function, and just Nest that inside of my new Promise. And then I need to deal with what happens in response to the load event. So when the status is 200, instead of calling that success callback like I used to do, I instead want to call the resolve callback that I've specified for my Promise and then for the fail case, instead of calling the fail callback now I have a reject callback, and here I can actually create an error object which is just adding an extra layer to my JavaScript so that I can actually generate an error in the browser console. That's not a promise specific thing, but it's something else we can do to make our errors a little bit more useful to us as developers, and then scrolling down to the very bottom where I'm actually calling my GET Method. I'm not going to be calling it and passing in any methods right now. I'm going to comment out that previous function call and because we don't have any response handling set up yet, I'm going to start by just console.logging the response, so we can see what happens when a
>
> **[3:07](https://www.linkedin.com/learning/javascript-async/building-asynchronous-code-with-promises?u=76281980&t=187)** Promise resolves or rejects. So I'm just going to call that GET Method, pass it our URL, and then console.log the results and so over in my browser, I have my page loading with livereload and so here is the result of my console.log So my GET function now returns a Promise and we can actually look inside that Promise and see it has a status and a value, the status is resolved meaning that it got a successful response and it got some data back and then the Promise value is actually that data and when I hover over that, I can actually see I have this big blob of [[JSON]] containing weather data just like I expect. So this is the first stage of actually creating a promise.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2), [[Fetch]] (1), [[JSON]] (1)
> **API Endpoints:** get  (5), get
 (1)
> **Env Vars:** xhr (2), http (1), url (1), json (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Prerequisites:** set up (1)
> **Speakers:** - modern (1)

#### [Appending methods to resolved promises](https://www.linkedin.com/learning/javascript-async/appending-methods-to-resolved-promises?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/appending-methods-to-resolved-promises?u=76281980&t=0)** - So far, our code returns an object from a promise, and that means we're on the right track, but we want to do something with that object. The object returned by a resolve method isn't meant for direct examination. It itself is a promise and requires specific syntax to work with. To handle the object return from a successful promise, we simply append the then method to the promise call. Then expects a promise as an argument and enables you to work with the result data embedded in that object. And you can chain as many then methods as you want. One after another, allowing you to work with data synchronously or asynchronously and hand off the result to another function at each step. And this makes code easier to read, than nested callback sometimes do. In our get function for the Explore California site. We want to dig into the data returned from our HTTP request. So to do that, instead of logging that object to the console, I'm going to make an actual straight up call to my method, get, and then I'm going to add dot then to the end of that function call, I'm going to pass an anonymous function to the then method. And I'm going to use a parameter name of result to make it clear that that's what I'm starting with here. Now, the result that I get from the promise should be
>
> **[1:33](https://www.linkedin.com/learning/javascript-async/appending-methods-to-resolved-promises?u=76281980&t=93)** adjacent string. And so I can simply hand that off to my success handler function. And so my success handler function is still totally ready to pick that up. And so I can simply call success handler and pass it my response parameter. And so my success handlers should actually go ahead and grab that data. And as long as we have a good request, we should see that in the Dom. So I'm going to save my changes and I've got an error there because I'm not using the parameter name. Let me just change that. So these are both response. So my parameters response, and then I'm using that when I'm calling success handler. And there we go, no errors in the console, and I have my weather being displayed once again. And so now we actually have weather being displayed on this page as the result of a resolved promise, handing off the data to our success handler function. And so we're getting that same functionality, but by using promises, our code is better organized.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Env Vars:** http (1)
> **Definitions:** is a  (1)
> **Speakers:** - so (1)

#### [Using catch methods for rejected promises](https://www.linkedin.com/learning/javascript-async/using-catch-methods-for-rejected-promises?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/using-catch-methods-for-rejected-promises?u=76281980&t=0)** - [Instructor] Instead of resolving, a promise that does not complete successfully can instead reject. While the result of a resolved promise is passed to the first then statement that's chained the promise call, you use a separate method, catch, to work with a rejected promise. The catch method allows you to perform error handling, just like the more general catch statement that [[JavaScript]] supports. Catch is passed to the object created by the reject method of the original promise. This allows you to view the error message, or object, that was generated by the original promise. So, looking at our promise code, we're calling the resolve method if we have a successful response, and then we're calling the reject method if we don't have a successful response. We're also calling the reject method if we run into a specific network error. And so, in order to handle this reject state, we need to go down to our function call and add a catch handler. Now remember that as we're chaining methods, the white space doesn't matter, so we can use any sort of layout we want. And it's actually pretty common to put the then on its own line, indented underneath the get. And then, we'll put the catch on its own line as well, passing that, an anonymous function, catching that status with parameter and then calling our fail handler
>
> **[1:37](https://www.linkedin.com/learning/javascript-async/using-catch-methods-for-rejected-promises?u=76281980&t=97)** and passing it whatever data it got in that status parameter. And so here, we have our function call to the get function, which creates the promise. The result of that promise has passed to then if it's successful. And if it's not successful, it's passed to catch. And it's important to notice here, we could have as many dot thens as we wanted chained here. And if any of them failed, if the original request failed or any of the subsequent thens rejected, it would immediately fall down to this catch statement. And so to test this out, let's go ahead and disable our API key. So, I'm going to comment that out. And I've got this alternate version of the API key variable with nothing in it. That's going to make sure we get an error from our web service. And so, I have live server running. And so, notice a couple things. One, that we got a 401 error. And this is from line 22. This is actually where I created a JavaScript error using the error constructor. And that shows up in red in the console. And I've also got the result on line 49, just the console dot log of the error message that I got. And then, the other thing we're doing here is showing the placeholder image when we don't have a successful response
>
> **[3:10](https://www.linkedin.com/learning/javascript-async/using-catch-methods-for-rejected-promises?u=76281980&t=190)** and that has happened here. And so, again, we've used the promise reject method to specify what should happen if we don't have a successful request. And so, I'm going to scroll down and I'm going to fix my API key. So we'll comment out that empty one, comment back in the correct one and then switching back. And we've got our successful response and our resolved promise, actually putting that data into the dom. And so, our then method works unless there's an error, and if there's an error, the catch method instead takes care of that error for us.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2)
> **Env Vars:** api (3)
> **CLI Commands:** make (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Using the finally method for executing handlers](https://www.linkedin.com/learning/javascript-async/using-the-finally-method-for-executing-handlers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/using-the-finally-method-for-executing-handlers?u=76281980&t=0)** - In addition to the then and catch methods, promises also support chaining, a finally method you use finally, to specify statements that should be executed no matter whether the promise resolved or rejected. And so examining our code, we have things in pretty good shape right now. We have a successful request that's doing some dominant manipulation. We have error handling for unsuccessful requests or network errors. And so if we look through our code, one thing we can notice is that between the success handler and the fail handler, we have a little bit of repetition. So we, in both cases notice on line 45 and 51. We are removing the hidden class from our class list to either display the weather or for the fallback to display that image. And so we should be able to just combine these into a single statement that happens no matter whether we have a success or failure. And so the statement as written using the weather div variable relies on this statement, defining that variable. That's used elsewhere in our success handler. And so we can't take that out of both places, but we do need it for our always code. So I'm going to copy lines 50 and 51 from the fail handler. I'm going to scroll down to my get call. And then after the then and the catch, I'm going to start a new line
>
> **[1:35](https://www.linkedin.com/learning/javascript-async/using-the-finally-method-for-executing-handlers?u=76281980&t=95)** and I'm going to do a dot finally passed that an anonymous function. It does not need a parameter, and I'm going to paste in those two lines that I just copied. So here we're first selecting an element from the Dom and then we are removing a class from that element. And so now with that code being executed in our finally method, I can scroll up and take that out of the fail handler. I can also take this final line out of the success handler, but I do need to keep line 44 in here. So we still have to change the inner [[HTML]] only in the success handler. So I've taken out the final line of the success handler, the final two lines of the fail handler. And so saving my changes, switching back to the browser, things are still working. They're just fine. So the success handler, isn't making that weather section visible, but the finally method is doing that instead. And if we go back and test with a bad API key, so I'm just replacing my existing API key with an empty string. So I'm sure I'll get a bad response. And so we did indeed get an error and we've got that fallback image being displayed. So again, that's the finally method
>
> **[3:09](https://www.linkedin.com/learning/javascript-async/using-the-finally-method-for-executing-handlers?u=76281980&t=189)** that is making that section of the page visible. And so here finally has allowed us to clean up our code a little bit. To reduce a little bit of duplication and pull together the statement that needs to happen no matter what, to just run after everything else has happened, either through a resolve or reject.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **Env Vars:** api (2), html (1)
> **UI Navigation:** scroll down (1), scroll up (1)
> **Speakers:** - in (1)

#### [Preparing the all method for executing multiple promises](https://www.linkedin.com/learning/javascript-async/preparing-the-all-method-for-executing-multiple-promises?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/preparing-the-all-method-for-executing-multiple-promises?u=76281980&t=0)** - [Instructor] In some cases, you need more than one promise to finish before moving onto code that works with the results. While you could write somewhat involved code to do this, promises include an all method that allows you to specify an array containing multiple promises and moving to any chained methods like then and catch only when all promises have finished. The promise.all method returns an array of results from the promises it was passed. For our Explore California page, we're currently including weather only for Los Angeles. But California is a big state. At the very least, we could be including weather for San Francisco as well and maybe even some tourist destinations known for their extreme weather like Yosemite National Park and Mount Whitney. So switching over to our code, we need to rewrite things a little bit to work with a raise, and then we need to actually create our code using promise.all. So our get request is going to be fine, but our success handler is going to have to work with individual promises. And so one thing we need to do is make sure we're not putting the weather h1 at the beginning of each of our responses because we only need it once. So I'm just going to cut that out here and we will recreate that later on in our promise.all code. I'm also going to change my constant name to div
>
> **[1:35](https://www.linkedin.com/learning/javascript-async/preparing-the-all-method-for-executing-multiple-promises?u=76281980&t=95)** just to make it clear that I've rewritten this and it's different than the one I had before. Now all of my references are still going to work for the data that I'm going to be getting in here. And then at the end here, I'm going to need to just return that div variable that I just created. And then I won't actually need to do any dom manipulation right here. That's going to have to come later, so I'm just going to comment out that final line. Now we have our success handler function ready to go to work with promises.all. And so, to get our app working, we'll just need to rebuild the function call.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Implementing the all method for executing multiple promises](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=0)** - [Instructor] And so now, moving down to the code that runs when the page is loaded, right now, I have my get, then, catch and finally statements. And I, down here in my finally statement, I'm creating this element called weather div that just creates a reference to a dom element. But I'm going to need to use that in other parts of my code. So, I'm going to cut that and I'm going to move it up here right after my API key, so that's available all throughout my event listener here. And then the next thing I'm going to do is create a variable containing the coded names of the locations that I want to get weather for. So, I'm going to make that a constant, I'm going to call it locations. It's going to be an array. I'm going to break that onto multiple lines for legibility. So I'm going to do Las plus Angeles comma US. So this is the encoding that open weather map expects, and then we'll do San plus Francisco comma US. We'll do Lone plus Pine comma US, which is the nearest town to Mount Whitney. And then we'll do Mariposa comma US, which is a town reasonably near Yosemite National Park. Put a semicolon at the end of my statement. And so next, instead of a single URL, I need to create an array of URLs for my call. And so, I'm just going to update this a little bit. And for clarity,
>
> **[1:36](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=96)** I'm going to comment out the one that was already there and I'm going to rewrite this. So I'm going to do const URLs, plural, and I'm going to use my locations array, and I'm going to use the map method to create a new array, passing in an anonymous function and using the parameter name location for each time through the loop. And from my map function, I need to return. And so, I'm actually going to copy my string up through the S, the equal sign, so, the beginning of my old URL. And I want to return a template literal here. So I'm going to use a back tick, paste that in so far through to the equal sign. Then I'm going to do dollar, curly brace location, ampersand app ID in all caps equals dollar sign, curly brace, API key, curly brace. And so, this is going to build me an array of URLs, ready to go to make requests, to open weather map for those four locations using my API key. Now, once I have that array of URLs, I can replace my get URL statement with promise capital P dot all.
>
> **[3:12](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=192)** So, I need to pass an array that contains a promise for each one of these URLs. And so, I'm going to create an array, and then I'm just going to use get URLs, square bracket zero, get URLs, square bracket one. And the same thing for the other two. So, I'm passing in an array of promises and then for my then, instead of response, I'm going to change it to responses, just so I'm being clear and a little bit self-documenting that I'm expecting back an array. And within that anonymous function, I want to again use the map method. So, I'm going to return responses dot map. I'm going to pass in a function using the parameter name response, and then I'm going to grab the line we had in here before. Within my map method, I need to return, and I'm simply going to return the result of running that response through the success handler function. And so, this is going to give me a template literal that builds out the data I got back into a chunk of the dom, and then I'm going to return the array containing all four of those template literals. And that return is going to pass it on down the chain.
>
> **[4:49](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=289)** And so here, I actually want another then statement. So, I'm going to do another dot then. And in my anonymous function, I'm going to use the [[Microsoft Word|word]] literals as my parameter name. And so, I'm getting an array of template literals here. And so, I'm going to use that weather div reference. And I want to set its inner [[HTML]]. And the first thing I want of that inner HTML is that H one element we had earlier. I just want that once. So, a template literal, which is an H one containing the word weather, and then a reference to literals dot join with no space. And so, that's going to pull together all four of those array values, those template literals, join them up with what I've specified here and specify all of that as the inner HTML for the weather div. So, that gets all of our data for all four of those requests into the dom. I still have the same fail handler. And then my finally function is going to make that weather div visible. So, saving those changes. And now switching back to my page and I have weather for four locations all within that same weather area. So we can see weather for Los Angeles, San Francisco,
>
> **[6:23](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=383)** Lone Pine near Mount Whitney and Mariposa near Yosemite. And so, that promises dot all method allows us to make all those requests and wait for that processing until all of those requests have returned.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3), [[Microsoft Word|Word]] (2)
> **Env Vars:** api (3), url (3), html (3)
> **Exercise Files:** template (6)
> **CLI Commands:** make (4)
> **Definitions:** is a  (1), is an  (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Making code backward-compatible with polyfill](https://www.linkedin.com/learning/javascript-async/making-code-backward-compatible-with-polyfill?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/javascript-async/making-code-backward-compatible-with-polyfill?u=76281980&t=1)** - [Instructor] Promises became part of [[JavaScript]] in 2015 and are supported by all modern browsers. However, code that uses promises won't work on older browsers or on Opera Mini. And unlike a lot of other modern JavaScript syntax, promises can't be simply transpired by a tool like Babel. Instead, a number of polyfills are available to replicate promise's syntax on browsers that don't support it natively. This polyfill written by Taylor Hakes makes a minified version available via CDN. So I'm going to copy that. And then in my editor, I'm actually going to work with the [[HTML]] file. And in this file, I have my JavaScript files in the head section, and I need to make sure to insert the code for the promises polyfill before the code for my [[AJAX]], which uses it. So I'm going to insert that new script element on the line before the script element that references ajax.js. So I'm going to save that and going back to my browser. There's no change. There's nothing in the console. So the polyfill doesn't change anything in a modern browser, but it will make the code we've written work for users of older browsers as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (3), [[AJAX]] (2), [[HTML]] (1)
> **CLI Commands:** make (2)
> **Env Vars:** cdn (1), html (1)
> **File Paths:** ajax.js (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)


### 3. Programming Asynchronously with Async/Await

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding the async/await model](https://www.linkedin.com/learning/javascript-async/understanding-the-async-await-model-14344029?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/understanding-the-async-await-model-14344029?u=76281980&t=0)** - [Instructor] Promises are a clear step forward from callbacks in terms of code organization. However, especially for a developer who doesn't use them all the time, it can still be a challenge to follow what's happening in a promise chain. In particular, because it requires identifying where the code is asynchronous and where it's not. An even newer way to work with asynchronous code became part of [[JavaScript]] in 2017. This syntax uses the async and await keywords to enable writing asynchronous code that closely resembles synchronous code patterns. For this reason, code using async and await is widely recognized as being easier for humans to parse than code using promises. You use the async keyword as part of a function declaration or expression to specify that the function should be executed asynchronously. That is it should not block the parsers main process. Within an asynchronous function, you use the await keyword before a statement that returns a promise to indicate that the function should stop and wait for the result of the promise before proceeding. It's important to understand that aside from a couple details, async and await are essentially just syntactic sugar, meaning that they simply provide shorthand syntax for writing code using an existing coding practice. In this case, async and await code creates and works with promises under the hood.
>
> **[1:35](https://www.linkedin.com/learning/javascript-async/understanding-the-async-await-model-14344029?u=76281980&t=95)** So for many situations, you can write simpler code using async and await instead of expressly writing promises and still get the same results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1)
> **Speakers:** - [instructor] (1)

#### [Using async functions with await statements](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=0)** - [Instructor] On our Explore California site, we have code that uses promises to make requests for weather information at four locations. And then, when all requests are completed to use the return data, to render the information as part of the DOM. We can use async and await in place of the chain promise pattern here, to make the code look more like the synchronous functions that are common in [[JavaScript]]. So I'm going to start by commenting out my promise. And I want to make sure not to comment out that last line because that last line closes up my event listener for the page load. And so below my promise, I want to rewrite this same functionality using an asynchronous function with some await statements. So, I need to create an asynchronous function, but I don't need to reference it later. So I'm going to go ahead and create an IIFE. I'm going to instantly invoke that function. So I'm going to start by declaring an async function. And I'm making this an anonymous function. It doesn't need a name. And so to make this instantly invoked, put that parenth at the beginning, put another one at the end, followed by a pair. And so now everything in here will be an async function. It will also be immediately invoked when it's declared. And so the first thing I want to do here, is create an array called responses. And that's going to be an empty array that I'm going to use to be able to compile the results
>
> **[1:34](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=94)** from my get requests and then work with them. So I could work with promise dot all in here, but I'd rather totally take out the promise syntax and just deal with some very basic async and await statements so we can get a flavor for that. So, we're going to go responses dot push. And then I want to make a call to the get function, passing it the first URL in my URLs array. And so to do that, I'm just going to type get URLs, square back at zero. And now what I want, is for my async function to wait for the result of that get request, before it moves on to other code. And to do that, I just preface the get call with await. And so this is going to grab the first URL in my array, which will be for Los Angeles. It's going to send it to the get function that we've been using, that we built. And then when it gets data back, it's going to push that data to the responses array, and then it will move onto the next line. So I just want to repeat that three times for all the items in that array. So I'm just going to copy and paste that statement three times and change my index number. And clearly I could do this with some sort of a loop, but in order to really see how async and await are working here, I think it's useful to make these individual statements and see how they're executed.
>
> **[3:08](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=188)** So next, we're going to create another variable called literals. And the value here is going to use the same responses dot map code that we used above, in our first then statement. So I'm just going to copy and paste that here. I need to un-comment these lines and get the indents looking better. And so this is going to create a new array based on our existing array of responses. It's going to run those through the success handler, and then that literals array is going to contain all of our template literals. And then we need to do those little cleanup tasks, so I'm going to grab the statement from the next then function, paste that in here, get the indents, all ironed out. So here we are adding that weather heading, followed by joining all of the literals we just generated. And then the last thing we need to do is actually display this in the DOM. (keyboard typing) And so saving that, going to switch over to the browser. And there we are. We got the same results here that we had before, but this time we are using an async function instead.
>
> **[4:46](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=286)** And so what's happening here in our function, is a combination of synchronous and asynchronous statements. So we're starting out with the synchronous statement, just creating an array. Now these next four statements all involve an asynchronous request through this get function. And so all four of these await statements will start at the same time. So they're all going to run in parallel. But then we get to our next synchronous statement, and that is what's going to wait for the results of all of these other statements. And so once we get responses from all four of those requests, then the synchronous code here is going to run. Here and here, and then we're all done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1)
> **CLI Commands:** make (6)
> **Env Vars:** dom (2), url (2), iife (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (keyboard typing) (1)

#### [Using statements to handle errors in async/await code](https://www.linkedin.com/learning/javascript-async/using-statements-to-handle-errors-in-async-await-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/using-statements-to-handle-errors-in-async-await-code?u=76281980&t=0)** - [Instructor] Async in await statements don't come with their own error handling methods like promises do. But the async and await structure lets us write code that looks a lot like synchronous [[JavaScript]]. And it turns out that it also works just fine with standard JavaScript error handling statements. You include your statements in a try block and then add a catch block afterward that specifies a parameter name for the error object and includes code to handle the error. So for our Explorer California site, I can update the async function to handle errors. And so first off, I'm going to add a try block and I want to move all of my codes so far inside the function. I want to move that actually inside the try block. So leaving those last two lines down here that close the async function and that close our event listener. And so now all of that code, including the await statements is in the try block. And so after the try block, I'm going to add a catch block. It's going to catch the status. And just like we did above, we're going to call the fail handler. Passing at the status. So in promises, the catch and finally methods are based on the more generic JavaScript methods for error handling.
>
> **[1:38](https://www.linkedin.com/learning/javascript-async/using-statements-to-handle-errors-in-async-await-code?u=76281980&t=98)** And so we can also add a finally clause to our async function. And so I can just grab this code in line 98 that displays that weather div and move it down into the finally block. So what happens is both after the try block and after the catch block, no matter whether or not there's an error involved. And so saving that, I'm going to switch over to my browser, I have all my weather coming in. So the changes we made haven't affected our functionality. And then going back to the code, I'm going to swap in my empty API key to ensure we have errors. And now we have the fallback image. And checking out the console, we have an error from the parser and we have the error that our code generated on line 48. And so notice here, we only have one error message. So since we're not doing a group of get calls, the first one of these that fails kicks us down into the catch clause. And so we've an async function to create some asynchronous requests. We've used a catch statement to deal with errors and a finally clause to clean things up no matter which one of those previous blocks executed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (3)
> **Env Vars:** api (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Making async/await code backward compatible with polyfill](https://www.linkedin.com/learning/javascript-async/making-async-await-code-backward-compatible-with-polyfill?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/making-async-await-code-backward-compatible-with-polyfill?u=76281980&t=0)** - [Instructor] The Async and Await construction became part of [[JavaScript]] in 2017. And it's supported by all modern browsers. Like Promises, this code won't work on older browsers or on Opera Mini. But the process of making your Async and Await code backward compatible is a bit more complicated than for Promises. Because Async and Await is based on Promises under the hood, it requires a polyfill for Promises to replicate promise syntax on browsers that don't support it. Our code for the Explore California site already includes a reference to this polyfill to make the earlier version of the code, using the promise constructor backwards compatible. But this promise polyfill by itself won't make Async and Await code work on older browsers. That's because the Async and Await construction first has to be transpiled into a Promises construction, using a tool like Babel. Now transpiling is generally part of a tool chain that's configured on a developer's machine, but we can get a flavor for what transpiled Async and Await code looks like, by using a demo version of Babel Rebel online. So, in my code, I'm just going to copy my Async function. So in the start file here, that's just lines 87 through 103, and then on the live version of Babel Rebel, I'm going to click in the left pane and paste. I'm going to accept all of those defaults
>
> **[1:34](https://www.linkedin.com/learning/javascript-async/making-async-await-code-backward-compatible-with-polyfill?u=76281980&t=94)** on the left side, and on the right side, I get a backward compatible transpiled version of the code. Now there's a lot going on here. This has been architected to replicate everything that we're expecting out of our Async and Await code. But notice that this is based on Promises, and so, our Async and Await code has been rewritten as Promises, and then when this code is executed in conjunction with the Promise polyfill, it does the same thing that our original Async function can do, in a modern browser.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Programming Asynchronously with Web Workers

[↑ Back to Table of Contents](#table-of-contents)

#### [What is a web worker?](https://www.linkedin.com/learning/javascript-async/what-is-a-web-worker-14338950?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/what-is-a-web-worker-14338950?u=76281980&t=0)** - [Instructor] [[JavaScript]] includes a number of features that enable you to program asynchronously, including callbacks, promises and async/await, but all of these async processes still rely on the main browser thread to execute their code after any delay has taken place, such as a set timeout or a response to an [[AJAX]] request. The traditional asynchronous model for JavaScript simply rearranges the order in which code is executed on a single thread to avoid blocking, but features that use this model remain limited by the fact, that with a single thread, the browser can do only one thing at a time. Modern browsers support some newer additions to JavaScript that make use of additional threads. One of these newer additions is web workers. A web worker enables you to specify code that will be executed in its own thread on the processor separate from the browser thread. This enables you to make your code asynchronous and also allows your app to do multiple things at once by leveraging one or more additional processor threads. With a web worker, your app sends a message to the code running in the additional thread. This code does the requested work on its thread, then responds with its own message, which often contains data that's then used in your app. Web workers are most useful in an app that needs to do complex processing, such as involved mathematical operations. Sending a task like this to a web worker frees up
>
> **[1:33](https://www.linkedin.com/learning/javascript-async/what-is-a-web-worker-14338950?u=76281980&t=93)** the browser thread so your user interface remains responsive.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (3), [[AJAX]] (1)
> **CLI Commands:** make (2)
> **Analogies:** such as (2)
> **Env Vars:** ajax (1)
> **Speakers:** - [instructor] (1)

#### [Creating a web worker](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=0)** - To create a web worker, you use the worker constructor. You assign the worker to a variable, so you can reference it in other parts of your code. The worker constructor requires a single argument, which is a reference to a script file containing the code that should be executed by the worker. When this statement is executed, a new thread is created for the code in the specified file. I've started building out a new feature for the Explorer California site. Users can pick a photo from an image gallery, and then manipulate it using a few photo filters. Eventually, I imagine allowing them to add text, and share the image they've created, like a postcard. But, these basic features represent my first milestone. Each of these filter buttons calls a function that takes the pixels of the current selected image, and modifies them based on the relevant algorithm. Image manipulation can require a significant processing power, and especially on older computers, or mobile devices, this work might be enough to slow the browser down. One alternative would be to send the data to the server and have the manipulation performed there. But, [[AJAX]] requests generally take a lot of time, and can be unpredictable. So the browser is going to make more sense here. Right now, the app seems pretty responsive. And, if I open up my console, and go to the console, and I have logging turned on so I can see exactly how long each filtering step takes. And, it's not very long. I'm on a pretty recent computer, and both computer [[Hardware]], and modern browsers, are optimized for this sort of work.
>
> **[1:36](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=96)** Now back in my code, I've included a function called delay; which, just incorporates a delay, using a while statement that does nothing to allow me to specify a certain number of milliseconds, I'd like to wait before the next thing happens. So this is essentially allowing me to create a synchronous delay, and forcing everything to wait. In essence, I'm creating a block. So, I want to go ahead and call this delay function within each of my three algorithm functions. So, in gray scale image, right before that return statement, I'm going to call delay and send it a thousand. So that's a thousand milliseconds or a one-second delay. And, likewise, for the brightness image functions, delay 1000, and for threshold image, right before that return statement, delay 1000. Now, I already have this running, using live server so I can switch back to my browser. And these changes are reflected now. So if I click gray scale, it takes a second; Then, I see that filter applied, and I can see that instead of eight milliseconds, it's 1,008 milliseconds because it includes that delay. And likewise, I can hit brightness, threshold, looks like the brightness is not incorporating the filter. And that's because I put that delay in (brief pause) after the return statement. So let me save that. Double-check the brightness now has a delay. It does, same for threshold, and for gray scale.
>
> **[3:10](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=190)** So now that I'm seeing this lag in my user interface, I have a delay after I click things. And so I can actually queue things up a little bit by clicking a few of these filter buttons in a row, and notice that the UI doesn't respond. Also, if I click some images after that, the filtering all has to happen before the image changes take place. So I want to rewrite this app, using a web worker. With this delay, I can still expect the [[Image Processing]] to be slow. And that simulates an older device, or a mobile device. But moving that image processing work to a web worker will free that main thread to respond to the user for non processor, intensive tasks, like switching images, or simply updating the UI to show me which button I just clicked. I've already created a file called, filter dash worker dot JS. And this contains the functions for each of my filters, as well as the apply filter function. So the guts of my photo manipulation work. And so I'm going to start back in my filters dot JS file by commenting out those four functions. And I also can comment out the delay function. So I'm going to click above the delay function, go down past delay, gray scale image, brightness image, threshold image, and apply filter. I'm going to hold shift and click to select all of that code. And in visual studio code, I can press command slash, to just make a line comment out of each line of code in that section, and I'll save those changes. And then I want to create a worker.
>
> **[4:43](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=283)** So I'm going to scroll to the top of my DOM content loaded section, and I'm going to add a new variable. So below selected filter, I'm going to say, const worker equals new capital W worker. And then the file that I want to reference is that filter worker dot JS file within the underscore script folder. So that's underscore scripts slash filter dash worker dot JS. So by assigning that worker to a variable, I'll be able to send a message to it. And then I'll also be able to set up event listeners, so that my code can work with the response messages that come from that web worker.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Image Processing]] (2), [[AJAX]] (1), [[Hardware]] (1)
> **CLI Commands:** make (2)
> **Env Vars:** dom (1)
> **Tools:** visual studio (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Prerequisites:** set up (1)

#### [Sending data to a web worker](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=0)** - [Instructor] To use a Web Worker, you send it a message using the postMessage method. The method simply passes data, which can range from a simple string or number to a collection, like an array or object. Back in my filters.js file, I'm going to start by testing things out. So near the top, immediately after my worker variable, I'm going to send a message. And to do that, I reference that worker, that variable name that I created, and I use the postMessage method. And I'm just going to pass text, hello worker. And then after that, I'll add a console.log statement, just to say, message sent to worker. Just to verify that I've reached that point in my code. Now, after I send that message, I want to make sure that it actually got received. And to do that, I need to go to the code for the worker itself. And that's in filter-worker.JS. Within the code for this worker, I can use this to refer to the worker itself. And I can set up an event listener for the message event. So I'm at the bottom of the file and I'm using this.addEventListener. Listening for message. And for my function, I'm going to be sure to grab that event object. I'm going to console.log message received from main script. That does not need this on it.
>
> **[1:34](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=94)** And then I'm going to console.log, event.data. I can access the message data using the data property of the event object for the message event. And I'm capturing that with that parameter name E. So console.log.e.data here, actually lets me view the message itself. So saving those changes. I've got Live Server fired up in my browser. And so when the page loaded, I got that log that says message sent to worker from filters.JS. And then over in the filter worker, I've logged message received from main script and there's the text of the message, hello worker. So I've successfully sent data from the main thread to the Web Worker, which is awesome. Now obviously sending a throwaway string like this isn't especially useful, and I'm going to comment that out, but I can send all kinds of data. In my filter.js file, the event listeners, further down for the gray scale button, the brightness button and the threshold button, all call the applyFilter function. And they pass in the text of the filter that's been chosen, as well as the level value and an image object. Now I've moved the applyFilter function to my Web Worker. So in order to use it, I have to start by changing the event listeners, to send a message to the Web Worker with an object containing those three pieces of data as the content.
>
> **[3:08](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=188)** And so starting up in the event listener for the gray scale button, I'm going to comment out this results variable, which calls the applyFilter function as if it's in the current file. And instead, I just want to say Worker.postMessage. And I'm going to pass in an object. And I'll have a key call filter, whose value is going to be the selected filter variable. Key called level. These values are going to be the level of variable and the key called image, whose value is going to be imageDataObj.
>
> **[3:54](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=234)** And I'll go ahead and copy that same code to my other two event listeners. So again, in the brightness, commenting out results and adding in this new postMessage statement. And likewise for the threshold button, going to comment out results and paste in that postMessage statement. And so with that all saved, switching back to my browser. If I click the gray scale button, I have an issue. So let's go back and take a look at that. When I click gray scale. Now my error message says, results not defined. And that's simply because I've got this displayed filtered image statement that need to comment out as well. So let's do that here, as well as for the brightness button, and for the threshold button. And we'll save that and we'll rerun it. And now when I click the gray scale button, that worker logs the fact that I have sent over an object containing these three pieces of data. So the next thing I want to do then, in my Worker, is to change what that message event listener does. And so I can comment out what I've done so far within that event listener. Instead, I'm going to create a variable called workerResult.
>
> **[5:28](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=328)** And I want to take those three pieces of data that I've received and pass them to the applyFilter function. So I'm going to call, applyFilter. and I'm going to pass event.data.filter, which is the first key in my object. And then the second parameter event.data.level. It's the second key. And then event.data.image. And so what this means is, that when I receive that data, I'm going to be running it through applyFilter. And then I'll go ahead and console.log workerResult.
>
> **[6:07](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=367)** And we'll check out in the browser what happens. So if I click gray scale, I get some image data. If I click brightness, same thing. And threshold, same thing. So notice that the filtering is going on, so I can see the filters are actually being applied. And the result of calling that applyFilter function is image data. So I'm sending a request to the Web Worker in response to a user event on the main thread. And the Web Worker is executing that task in a separate browser thread. And that's amazing.

> [!info]- Semantic Content
>
> **Code Identifiers:** applyfilter (7), postmessage (5), workerresult (2), addeventlistener (1), imagedataobj (1)
> **File Paths:** filters.js (2), filter-worker.js (1), filter.js (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Returning data from a web worker](https://www.linkedin.com/learning/javascript-async/returning-data-from-a-web-worker-14339799?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/returning-data-from-a-web-worker-14339799?u=76281980&t=0)** - [Instructor] Sending a message from the app to a Web Worker is only half the process. After the Web Worker does its own processing, it needs to communicate the result back to the app. To do this, the Web Worker uses the post message method, passing along data as the message. The Web Worker code in my filter worker.js file is receiving a request from the app and calling the apply filter function, passing along the data it received. I'm saving the result in the worker result variable. To send this back to the app, I can simply call post message and pass the variable. So right after my console.log statement, I'm going to say post message, worker result, and I'll go ahead and comment out that console.log statement. Shouldn't need it anymore. Then back in my filters.js file, I still am posting a message at the very beginning just saying hello worker, and I don't need that anymore, so I'm going to comment that out as well. And then the place that I'm actually dispatching the messages to the Web Worker are in my three event listeners for my buttons. Gray scale, brightness, and threshold buttons. But the Web Worker's responses don't necessarily go back to the location where they were called. Instead, I need to create an event listener in the app that listens for that same message event and works with the data I receive. So at the bottom, right before that closing punctuation,
>
> **[1:36](https://www.linkedin.com/learning/javascript-async/returning-data-from-a-web-worker-14339799?u=76281980&t=96)** I'm going to add a new event listener. So that'll be worker.addEventListener. I'm going to listen for a message. And that function is again going to grab that event object. And first I will console.log received data back from worker, and then I'm going to console.log e.data. And checking back in my browser, I'm going to click one of the filter buttons, and after a second, and I see the message that I actually got that data back from the worker and that is logged from the filters.js file, so that's my app. And then I also see that app data logged again from filters.js. So that data's been communicated from filter worker to filters.js. So next, I simply want to pass the results to the display filtered image function along with the rendering context. So this is what I was doing earlier, the code for my three buttons before I replaced those with these calls to post message. So I'm just going to copy one of those display filtered image statements. Scrolling to the bottom in my message event listener, I'm going to add that in there. I'm going to take that comment mark out of there. So saving that, and then I'm going to test that in my browser. So if I hit gray scale, I've got an issue, and that's because I am trying to use the [[Microsoft Word|word]] results,
>
> **[3:11](https://www.linkedin.com/learning/javascript-async/returning-data-from-a-web-worker-14339799?u=76281980&t=191)** but that doesn't actually work, I have to reference the results that came back, and that's going to be e.data. So I'm sending a context like I did before, but instead of having the name e.data for my data, I can just reference it directly in that event object. So saving that change, back in my browser, I'm going to hit gray scale and I've got a gray scaled image. Hit brightness, same thing. I hit threshold, same thing. And so I can see that the filtering's happening in filter worker, and that that data's coming back into filters.js and getting rendered. So now let's challenge things a bit. I'm going to click these filter buttons a few times quickly to get that few second delay, and notice that each time I click a button, I get that blue outline saying, you just clicked this. I can also change images and they happen right away. So the [[Image Processing]] is no longer blocking the main thread because that image processing has its own separate queue in the separate thread. My code could use an additional update to account for this, because right now that queued image manipulation might overwrite the more recent image selection, but the Web Workers offload that heavy imaging processing task to a separate thread and they make my code more responsive, and that is a definite win.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Image Processing]] (2), [[Microsoft Word|Word]] (1)
> **File Paths:** filters.js (5), worker.js (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** addeventlistener (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Identifying use cases for web workers](https://www.linkedin.com/learning/javascript-async/identifying-use-cases-for-web-workers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/identifying-use-cases-for-web-workers?u=76281980&t=0)** - [Instructor] The ability to create a shared worker was originally developed as a way to avoid duplicating resources that need to be shared by just sharing one extra thread. However, if I check support on something like can I use, we can see that shared workers are not widely supported by modern browsers. And in fact, support has been removed in some cases because shared workers were not widely used and they presented some architectural issues for browser makers. A separate but related technology known as a service worker can perform some of what a shared worker was originally designed to do. Like a web worker, a service worker runs in a separate thread, but instead of simply running code and sending a response back to the app, a service worker is optimized to make network requests, monitor responses, and work with those responses all in the background. Another related feature is a [[WebSocket]]. A WebSocket maintains a persistent connection with a server and listens for updates. Unlike web workers and service workers, [[WebSocket|WebSockets]] do not run in their own threads. As a result, they have direct access to the dom. You can use a WebSocket to replace code that performs polling, that is setting up an [[AJAX]] request to run at a regular interval to check for changes on the server. With an open socket, any changes are pushed and your code responds to them as events. Like web workers, you can use service workers and WebSockets
>
> **[1:34](https://www.linkedin.com/learning/javascript-async/identifying-use-cases-for-web-workers?u=76281980&t=94)** to build robust asynchronous code that optimizes your app's speed and responsiveness.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WebSocket]] (3), [[WebSocket|Websockets]] (2), [[AJAX]] (1)
> **Definitions:** known as (1), is a  (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Asynchronous coding experience](https://www.linkedin.com/learning/javascript-async/asynchronous-coding-experience?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/asynchronous-coding-experience?u=76281980&t=0)** - [Sasha] Thanks so much for joining me in this course. You now have a fuller understanding of what asynchronous code does, what's going on under the hood in common asynchronous methods, and experience writing asynchronous code using a variety of modern [[JavaScript]] features. To dig deeper into some more advanced JavaScript concepts check out courses on closures or prototypes. If you want to learn more about using data from APIs in your apps explore courses on [[AJAX]] or HTTP. Feel free to follow me online. Now, take your skills and build something amazing. Good luck!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2), [[AJAX]] (1)
> **Env Vars:** http (1)
> **Speakers:** - [sasha] (1)


## Instructor

- [[Sasha Vodnik]]

## Resources

- Exercise files available

## Skills Covered

- JavaScript

## Path Context

### In [[Improve Your JavaScript Language Skills]]
← [[Learning Functional Programming with JavaScript ES6+]] | **2 of 8** | [[Level Up- JavaScript]] →

## Appears In

- [[Improve Your JavaScript Language Skills]]

## Related Courses

_Courses sharing skills:_

- [[End-to-End JavaScript Testing with Cypress.io]] — JavaScript
- [[Learning JavaScript Debugging]] — JavaScript
- [[Foundational JavaScript Security]] — JavaScript
- [[JavaScript- Test-Driven Development (ES6)]] — JavaScript
- [[JavaScript- Best Practices for Data]] — JavaScript

---

[↑ Back to top](#)