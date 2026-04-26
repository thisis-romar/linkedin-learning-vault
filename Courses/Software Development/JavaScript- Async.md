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
created: 2026-04-21
---

![JavaScript: Async](https://media.licdn.com/dms/image/v2/C4E0DAQHygexut8bMMQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1635186525102?e=2147483647&amp;v=beta&amp;t=PUChXOd3hEVFLxFL4P-3ZFBGhpCnPMLyjywoxjCeiRg)

# JavaScript: Async

> Asynchronous code is the foundation of most modern web experiences. It allows programs to switch between tasks and juggle multiple requests. However, without a thorough understanding of asynchronous programming, developers can write bloated code that works against the architecture of the web. Join Sasha Vodnik in this course, which explores asynchronous approaches to JavaScript programming using c

> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-async) | 1h 31m | Intermediate | 31K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Sasha Vodnik]]

## Resources

- Exercise files available

## Skills Covered

- JavaScript

## Table of Contents

### Introduction

#### Implementing smart asynchronous code
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-async/implementing-smart-asynchronous-code-22163789?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/implementing-smart-asynchronous-code-22163789?u=76281980&t=0)** - Do you want to write JavaScript code that waits for a process to return and then does exactly what you want with the result?
>
> **[0:06](https://www.linkedin.com/learning/javascript-async/implementing-smart-asynchronous-code-22163789?u=76281980&t=6)** Understanding the syntax of async code in JavaScript can be a challenge, and choosing between the many async options in modern JavaScript can be overwhelming.
>
> **[0:15](https://www.linkedin.com/learning/javascript-async/implementing-smart-asynchronous-code-22163789?u=76281980&t=15)** That's why we'll dig into basic async concepts and flow using the XHR object and SetTimeout.
>
> **[0:20](https://www.linkedin.com/learning/javascript-async/implementing-smart-asynchronous-code-22163789?u=76281980&t=20)** And we'll write modern code using promises and async/await.
>
> **[0:24](https://www.linkedin.com/learning/javascript-async/implementing-smart-asynchronous-code-22163789?u=76281980&t=24)** Whether you're just getting started with async structures or you already use them, but want to understand more about how they work, you'll practice how to implement async code to solve concrete problems on a website.
>
> **[0:35](https://www.linkedin.com/learning/javascript-async/implementing-smart-asynchronous-code-22163789?u=76281980&t=35)** So join me, and let's explore JavaScript async.

> [!info]- Semantic Content
>
> **Code Keywords:** async (7), await (1), let (1)
> **Env Vars:** xhr (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - do (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-async/what-you-should-know-14341180?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/what-you-should-know-14341180?u=76281980&t=0)** - [Instructor] This course assumes you have some experience coding in JavaScript and making API requests using HTTP.
>
> **[0:08](https://www.linkedin.com/learning/javascript-async/what-you-should-know-14341180?u=76281980&t=8)** If you don't have experience with JavaScript, a basic JavaScript course would be a great place to start.
>
> **[0:15](https://www.linkedin.com/learning/javascript-async/what-you-should-know-14341180?u=76281980&t=15)** To get an overview of the modern JavaScript tools we'll be using, check out a course on ES6 or ECMAScript 6.
>
> **[0:22](https://www.linkedin.com/learning/javascript-async/what-you-should-know-14341180?u=76281980&t=22)** For the basics of working with APIs, explore a course on Ajax.

> [!info]- Semantic Content
>
> **Env Vars:** api (1), http (1), es6 (1)
> **Speakers:** - [instructor] (1)

#### Environment setup
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-async/environment-setup-14340801?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/environment-setup-14340801?u=76281980&t=0)** - [Instructor] To work along with me on the files for this course, you need three applications, a web browser, a code editor, and an HTTP server.
>
> **[0:10](https://www.linkedin.com/learning/javascript-async/environment-setup-14340801?u=76281980&t=10)** You also need an API key from [OpenWeatherMap.org](https://OpenWeatherMap.org).
>
> **[0:14](https://www.linkedin.com/learning/javascript-async/environment-setup-14340801?u=76281980&t=14)** You undoubtedly already have a web browser installed in your machine and any major modern browser, Chrome, Firefox, or Microsoft Edge is fine for this course.
>
> **[0:25](https://www.linkedin.com/learning/javascript-async/environment-setup-14340801?u=76281980&t=25)** I'll be using Chrome in these videos, which is a popular choice among web developers because of the extensive and powerful developer tools it has built in.
>
> **[0:34](https://www.linkedin.com/learning/javascript-async/environment-setup-14340801?u=76281980&t=34)** Because we'll only be using the console though, that won't really make a difference for this course.
>
> **[0:39](https://www.linkedin.com/learning/javascript-async/environment-setup-14340801?u=76281980&t=39)** A number of great code editors are available, both free and paid apps.
>
> **[0:44](https://www.linkedin.com/learning/javascript-async/environment-setup-14340801?u=76281980&t=44)** Any editor that lets you edit and save plain text is fine for this course.
>
> **[0:50](https://www.linkedin.com/learning/javascript-async/environment-setup-14340801?u=76281980&t=50)** So if you have a code editor you like, such as Sublime Text or Atom, it's fine to use that.
>
> **[0:56](https://www.linkedin.com/learning/javascript-async/environment-setup-14340801?u=76281980&t=56)** I use Visual Studio code in these videos, which is a version of Microsoft Visual Studio, created specifically for web development.
>
> **[1:04](https://www.linkedin.com/learning/javascript-async/environment-setup-14340801?u=76281980&t=64)** Visual Studio code is free and has Windows, Mac, and Linux releases.
>
> **[1:10](https://www.linkedin.com/learning/javascript-async/environment-setup-14340801?u=76281980&t=70)** The code is available on GitHub, and users can submit issues there as well.
>
> **[1:15](https://www.linkedin.com/learning/javascript-async/environment-setup-14340801?u=76281980&t=75)** I've customized my editor with a few extensions that are particularly useful for this course.
>
> **[1:21](https://www.linkedin.com/learning/javascript-async/environment-setup-14340801?u=76281980&t=81)** Bracket Pair Colorizer by CoenraadS, assigns different colors to the parens, braces, and brackets throughout your code.
>
> **[1:31](https://www.linkedin.com/learning/javascript-async/environment-setup-14340801?u=76281980&t=91)** It uses the same color for the start and end bracket in each pair, and it uses contrasting colors for nested pairs.
>
> **[1:38](https://www.linkedin.com/learning/javascript-async/environment-setup-14340801?u=76281980&t=98)** In code with a lot of nesting, this extension makes it easier to identify which opening character a closing bracket corresponds to.
>
> **[1:47](https://www.linkedin.com/learning/javascript-async/environment-setup-14340801?u=76281980&t=107)** Identicator, by SirTori, adds a vertical line to the editor window for each indent level, and it highlights the line for the parent element of the active line of code.
>
> **[2:00](https://www.linkedin.com/learning/javascript-async/environment-setup-14340801?u=76281980&t=120)** This creates another visual cue to help you identify where a statement or block fits into the nesting hierarchy.
>
> **[2:09](https://www.linkedin.com/learning/javascript-async/environment-setup-14340801?u=76281980&t=129)** And finally, I use the Live Server extension by Ritwick Dey as my HTTP server.
>
> **[2:16](https://www.linkedin.com/learning/javascript-async/environment-setup-14340801?u=76281980&t=136)** So this extension launches an HTTP server and opens the current document in your browser using the HTTP protocol rather than using the file system.
>
> **[2:26](https://www.linkedin.com/learning/javascript-async/environment-setup-14340801?u=76281980&t=146)** This is invaluable for testing API requests and responses, which are often blocked for security reasons when initiated from a document using the file protocol.
>
> **[2:39](https://www.linkedin.com/learning/javascript-async/environment-setup-14340801?u=76281980&t=159)** Live Server adds a GoLive icon at the bottom of the Visual Studio code window, which you click to serve and open the current document.
>
> **[2:47](https://www.linkedin.com/learning/javascript-async/environment-setup-14340801?u=76281980&t=167)** It's note that when testing front-end web code, using Live Server, you need to launch the server on an HTML document.
>
> **[2:54](https://www.linkedin.com/learning/javascript-async/environment-setup-14340801?u=76281980&t=174)** So right now I have a JavaScript file open.
>
> **[2:56](https://www.linkedin.com/learning/javascript-async/environment-setup-14340801?u=76281980&t=176)** And if I click GoLive, it's going to open a live view of that file, which is just the directory of the currently open project.
>
> **[3:07](https://www.linkedin.com/learning/javascript-async/environment-setup-14340801?u=76281980&t=187)** So to close that Live Server connection, I just click this icon, disposes of that connection, and if I want to see the effect of my current JavaScript code, I need the HTML file where that code is showing up, which in this case is tours.htm.
>
> **[3:26](https://www.linkedin.com/learning/javascript-async/environment-setup-14340801?u=76281980&t=206)** And I can either open that and use the GoLive icon, or I can right-click it and click Open with Live Server.
>
> **[3:33](https://www.linkedin.com/learning/javascript-async/environment-setup-14340801?u=76281980&t=213)** And that is going to create that connection with the browser and going to show me the file.
>
> **[3:39](https://www.linkedin.com/learning/javascript-async/environment-setup-14340801?u=76281980&t=219)** And when I make any changes in the HTML, they're immediately going to be reflected in the browser.
>
> **[3:44](https://www.linkedin.com/learning/javascript-async/environment-setup-14340801?u=76281980&t=224)** So that saves me a lot of saving, reloading, saving, and reloading.
>
> **[3:50](https://www.linkedin.com/learning/javascript-async/environment-setup-14340801?u=76281980&t=230)** If you're going to use the start files for each video in this course, rather than working with one set of files all the way through, you need to make sure that you end the server session for one page before you can start it up for a different one.

> [!info]- Semantic Content
>
> **Env Vars:** http (4), html (3), api (2)
> **Tools:** visual studio (4), firefox (1), sublime (1), atom (1), github (1)
> **CLI Commands:** make (3)
> **UI Navigation:** open the (1), right-click (1)
> **Definitions:** is a  (2)
> **Code Keywords:** finally, (1)
> **URLs:** [openweathermap.org](https://openweathermap.org) (1)
> **Analogies:** such as (1)

#### Getting an OpenWeatherMap API key
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-async/getting-an-openweathermap-api-key-14340798?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/getting-an-openweathermap-api-key-14340798?u=76281980&t=0)** - [Instructor] Finally, the videos in this course make use of data from [openweathermap.org](https://openweathermap.org).
>
> **[0:06](https://www.linkedin.com/learning/javascript-async/getting-an-openweathermap-api-key-14340798?u=76281980&t=6)** Data requests from this service require an API key, which is a unique identifier that associates you with a request coming in.
>
> **[0:14](https://www.linkedin.com/learning/javascript-async/getting-an-openweathermap-api-key-14340798?u=76281980&t=14)** The service provides a limited amount of data for free and by having your own key rather than sharing one, you can ensure that you stay below the limit of free requests.
>
> **[0:24](https://www.linkedin.com/learning/javascript-async/getting-an-openweathermap-api-key-14340798?u=76281980&t=24)** To get data from this service, you need to sign up for an account with [openweathermap.org](https://openweathermap.org) and obtain an API key, which you'll use when creating your Ajax requests for data.
>
> **[0:35](https://www.linkedin.com/learning/javascript-async/getting-an-openweathermap-api-key-14340798?u=76281980&t=35)** So let's set that up now.
>
> **[0:37](https://www.linkedin.com/learning/javascript-async/getting-an-openweathermap-api-key-14340798?u=76281980&t=37)** [Openweathermap.org](https://Openweathermap.org) makes weather information available under a creative commons license.
>
> **[0:42](https://www.linkedin.com/learning/javascript-async/getting-an-openweathermap-api-key-14340798?u=76281980&t=42)** Data is free for up to 60 requests per minute, which will work fine for this course.
>
> **[0:48](https://www.linkedin.com/learning/javascript-async/getting-an-openweathermap-api-key-14340798?u=76281980&t=48)** It's only more intensive uses that require a paid subscription.
>
> **[0:51](https://www.linkedin.com/learning/javascript-async/getting-an-openweathermap-api-key-14340798?u=76281980&t=51)** To get an API key, go to [openweathermap.org](https://openweathermap.org) in your browser and then up here at the top, click API.
>
> **[0:59](https://www.linkedin.com/learning/javascript-async/getting-an-openweathermap-api-key-14340798?u=76281980&t=59)** This documents the terms as well as endpoints that you can hit with your Ajax requests.
>
> **[1:05](https://www.linkedin.com/learning/javascript-async/getting-an-openweathermap-api-key-14340798?u=76281980&t=65)** So to sign up for an account, we can click the Sign Up link at the top, set up a username and password.
>
> **[1:12](https://www.linkedin.com/learning/javascript-async/getting-an-openweathermap-api-key-14340798?u=76281980&t=72)** For this course, I'm going to use the username asynccourse and create a password in both boxes.
>
> **[1:22](https://www.linkedin.com/learning/javascript-async/getting-an-openweathermap-api-key-14340798?u=76281980&t=82)** Make sure you're clear on what you're agreeing to here.
>
> **[1:26](https://www.linkedin.com/learning/javascript-async/getting-an-openweathermap-api-key-14340798?u=76281980&t=86)** Make sure they understand you're not a robot and create your account.
>
> **[1:32](https://www.linkedin.com/learning/javascript-async/getting-an-openweathermap-api-key-14340798?u=76281980&t=92)** They ask you some questions, which I am just going to cancel out of for now.
>
> **[1:36](https://www.linkedin.com/learning/javascript-async/getting-an-openweathermap-api-key-14340798?u=76281980&t=96)** And so now I'm logged in.
>
> **[1:39](https://www.linkedin.com/learning/javascript-async/getting-an-openweathermap-api-key-14340798?u=76281980&t=99)** And so we now have another navbar and I'm going to click API keys here, and that's going to show me the API key from my account.
>
> **[1:48](https://www.linkedin.com/learning/javascript-async/getting-an-openweathermap-api-key-14340798?u=76281980&t=108)** So I'm just going to double click there.
>
> **[1:50](https://www.linkedin.com/learning/javascript-async/getting-an-openweathermap-api-key-14340798?u=76281980&t=110)** I'm going to copy that to the clipboard and then I want to put it somewhere where I can access it easily.
>
> **[1:56](https://www.linkedin.com/learning/javascript-async/getting-an-openweathermap-api-key-14340798?u=76281980&t=116)** Now, I'm on a Mac.
>
> **[1:57](https://www.linkedin.com/learning/javascript-async/getting-an-openweathermap-api-key-14340798?u=76281980&t=117)** So I'm going to open up the Notes app.
>
> **[1:59](https://www.linkedin.com/learning/javascript-async/getting-an-openweathermap-api-key-14340798?u=76281980&t=119)** You could certainly use TextEdit on a Windows machine and in a new note, I'm just going to paste my API key in there, maybe give myself a little note.
>
> **[2:13](https://www.linkedin.com/learning/javascript-async/getting-an-openweathermap-api-key-14340798?u=76281980&t=133)** So that's my OpenWeatherMap API key.
>
> **[2:16](https://www.linkedin.com/learning/javascript-async/getting-an-openweathermap-api-key-14340798?u=76281980&t=136)** Now the key you'll see me using in the videos for this course has been deactivated.
>
> **[2:19](https://www.linkedin.com/learning/javascript-async/getting-an-openweathermap-api-key-14340798?u=76281980&t=139)** So it's important that you use your own key because this one won't work.
>
> **[2:23](https://www.linkedin.com/learning/javascript-async/getting-an-openweathermap-api-key-14340798?u=76281980&t=143)** So whenever you need to access your API key during this course, you can just go back to your note, copy the text of the key and continue coding.
>
> **[2:32](https://www.linkedin.com/learning/javascript-async/getting-an-openweathermap-api-key-14340798?u=76281980&t=152)** Now let's get started.

> [!info]- Semantic Content
>
> **Env Vars:** api (9)
> **Code Keywords:** require (2), let (2), finally, (1), continue (1)
> **URLs:** [openweathermap.org](https://openweathermap.org) (4)
> **CLI Commands:** make (3)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)


### 1. Programming Asynchronously with Callbacks

#### Understanding what asynchronous means
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-async/understanding-what-asynchronous-means-14342027?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/understanding-what-asynchronous-means-14342027?u=76281980&t=0)** - [Instructror] The term asynchronous has technical applications in the field of programming.
>
> **[0:05](https://www.linkedin.com/learning/javascript-async/understanding-what-asynchronous-means-14342027?u=76281980&t=5)** However, it also fundamentally describes experiences that we all go through every day.
>
> **[0:12](https://www.linkedin.com/learning/javascript-async/understanding-what-asynchronous-means-14342027?u=76281980&t=12)** Now, asynchronous is the opposite of synchronous.
>
> **[0:16](https://www.linkedin.com/learning/javascript-async/understanding-what-asynchronous-means-14342027?u=76281980&t=16)** When a set of things has to happen one after another, that's a synchronous process.
>
> **[0:21](https://www.linkedin.com/learning/javascript-async/understanding-what-asynchronous-means-14342027?u=76281980&t=21)** For instance, imagine you go to the movies and you get in line to buy a ticket.
>
> **[0:27](https://www.linkedin.com/learning/javascript-async/understanding-what-asynchronous-means-14342027?u=76281980&t=27)** If there are three people in line in front of you and just one cashier, you have to wait until each of the people in front of you buy their tickets before you can buy yours.
>
> **[0:38](https://www.linkedin.com/learning/javascript-async/understanding-what-asynchronous-means-14342027?u=76281980&t=38)** That's a synchronous process because you can't make your purchase until all the other purchasers who are queued up in front of you have been served.
>
> **[0:48](https://www.linkedin.com/learning/javascript-async/understanding-what-asynchronous-means-14342027?u=76281980&t=48)** Synchronous processes are sometimes described as blocking because the next step in the process is blocked from happening until the current step is finished.
>
> **[0:58](https://www.linkedin.com/learning/javascript-async/understanding-what-asynchronous-means-14342027?u=76281980&t=58)** Now, instead of a movie ticket line, imagine you go to a sit-down restaurant.
>
> **[1:03](https://www.linkedin.com/learning/javascript-async/understanding-what-asynchronous-means-14342027?u=76281980&t=63)** Now, if this worked synchronously like our movie theater, you might wait in line behind everybody else who wanted to eat at the restaurant.
>
> **[1:12](https://www.linkedin.com/learning/javascript-async/understanding-what-asynchronous-means-14342027?u=76281980&t=72)** There would be one table at the restaurant and one employee.
>
> **[1:16](https://www.linkedin.com/learning/javascript-async/understanding-what-asynchronous-means-14342027?u=76281980&t=76)** They'd take the customer's order, go back to the kitchen and cook it, serve it to the customer, clear the table when the customer was finished, present the bill, take payment, and then prepare the table for another customer.
>
> **[1:28](https://www.linkedin.com/learning/javascript-async/understanding-what-asynchronous-means-14342027?u=76281980&t=88)** This would never work for a restaurant because preparing and eating a meal takes way too long for anyone to want to wait for their turn.
>
> **[1:35](https://www.linkedin.com/learning/javascript-async/understanding-what-asynchronous-means-14342027?u=76281980&t=95)** Fortunately, restaurants work on an asynchronous model in which multiple things can happen at the same time.
>
> **[1:43](https://www.linkedin.com/learning/javascript-async/understanding-what-asynchronous-means-14342027?u=76281980&t=103)** So if my friends and I sit down at a restaurant, a server might bring us a menu and take our drink order.
>
> **[1:49](https://www.linkedin.com/learning/javascript-async/understanding-what-asynchronous-means-14342027?u=76281980&t=109)** Meanwhile, another server might be serving food to people at a different table.
>
> **[1:54](https://www.linkedin.com/learning/javascript-async/understanding-what-asynchronous-means-14342027?u=76281980&t=114)** Just having multiple people working at the same time means that multiple things can happen at once.
>
> **[2:00](https://www.linkedin.com/learning/javascript-async/understanding-what-asynchronous-means-14342027?u=76281980&t=120)** Multiple servers are taking and serving orders.
>
> **[2:02](https://www.linkedin.com/learning/javascript-async/understanding-what-asynchronous-means-14342027?u=76281980&t=122)** The cooks are in the kitchen preparing meals.
>
> **[2:05](https://www.linkedin.com/learning/javascript-async/understanding-what-asynchronous-means-14342027?u=76281980&t=125)** Other people are busing tables and setting them.
>
> **[2:08](https://www.linkedin.com/learning/javascript-async/understanding-what-asynchronous-means-14342027?u=76281980&t=128)** As a result, many people can be at different stages of ordering, eating, and paying simultaneously with the blocking kept to a minimum.

> [!info]- Semantic Content
>
> **Analogies:** imagine (2), for instance (1)
> **UI Navigation:** go to (2)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructror] (1)

#### Defining asynchronous programming
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-async/defining-asynchronous-programming-14342017?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/defining-asynchronous-programming-14342017?u=76281980&t=0)** - [Instructor] We can build program flow in JavaScript in two different ways.
>
> **[0:05](https://www.linkedin.com/learning/javascript-async/defining-asynchronous-programming-14342017?u=76281980&t=5)** Synchronously and asynchronously.
>
> **[0:08](https://www.linkedin.com/learning/javascript-async/defining-asynchronous-programming-14342017?u=76281980&t=8)** Using synchronous program flow, code is executed in the order it appears in your JavaScript files.
>
> **[0:15](https://www.linkedin.com/learning/javascript-async/defining-asynchronous-programming-14342017?u=76281980&t=15)** So here, lines one through five of the code are executed first followed by lines six through 10 and then lines 11 through 15 are executed next, matching the order of statements in the code as written.
>
> **[0:31](https://www.linkedin.com/learning/javascript-async/defining-asynchronous-programming-14342017?u=76281980&t=31)** In synchronous program flow, the browser parses and executes only one statement at a time.
>
> **[0:38](https://www.linkedin.com/learning/javascript-async/defining-asynchronous-programming-14342017?u=76281980&t=38)** This results in our statements being executed in order.
>
> **[0:43](https://www.linkedin.com/learning/javascript-async/defining-asynchronous-programming-14342017?u=76281980&t=43)** Synchronous program flow exhibits a behavior known as blocking, meaning that later statements are prevented from executing until earlier statements are finished.
>
> **[0:53](https://www.linkedin.com/learning/javascript-async/defining-asynchronous-programming-14342017?u=76281980&t=53)** In many cases, this is what we want.
>
> **[0:56](https://www.linkedin.com/learning/javascript-async/defining-asynchronous-programming-14342017?u=76281980&t=56)** For instance, a value needs to be calculated first before it can be used.
>
> **[1:02](https://www.linkedin.com/learning/javascript-async/defining-asynchronous-programming-14342017?u=76281980&t=62)** But if an earlier statement may take awhile to execute and statements that follow don't rely on that earlier statement having finished, then synchronous program flow can needlessly slow down our apps.
>
> **[1:15](https://www.linkedin.com/learning/javascript-async/defining-asynchronous-programming-14342017?u=76281980&t=75)** In this case, we want to use asynchronous program flow.
>
> **[1:20](https://www.linkedin.com/learning/javascript-async/defining-asynchronous-programming-14342017?u=76281980&t=80)** When we write this type of code, also known as asynchronous code or simply async, the parser can start executing some code and continue that execution while other code is executed as well.
>
> **[1:34](https://www.linkedin.com/learning/javascript-async/defining-asynchronous-programming-14342017?u=76281980&t=94)** So here, lines one through five of the code start execution, but these include some activity that's going to take awhile.
>
> **[1:42](https://www.linkedin.com/learning/javascript-async/defining-asynchronous-programming-14342017?u=76281980&t=102)** Now technically JavaScript has only a single thread, but it does have a mechanism that allows some processes to execute in parallel while other things are going on.
>
> **[1:52](https://www.linkedin.com/learning/javascript-async/defining-asynchronous-programming-14342017?u=76281980&t=112)** So here, this first set of statements is moved into that parallel process, which continues executing even as the main program flow moves to the next set of statements.
>
> **[2:03](https://www.linkedin.com/learning/javascript-async/defining-asynchronous-programming-14342017?u=76281980&t=123)** Now that main program flow continues synchronous execution, so it keeps moving through the remaining code while that first block of code is executing in parallel.
>
> **[2:13](https://www.linkedin.com/learning/javascript-async/defining-asynchronous-programming-14342017?u=76281980&t=133)** Now remember that synchronous code is executed only in the main program flow, while we've seen that asynchronous code is instead moved over to execute in parallel.
>
> **[2:24](https://www.linkedin.com/learning/javascript-async/defining-asynchronous-programming-14342017?u=76281980&t=144)** This means that the statements are executed simultaneously.
>
> **[2:29](https://www.linkedin.com/learning/javascript-async/defining-asynchronous-programming-14342017?u=76281980&t=149)** The upshot of this architecture is that asynchronous program flow lets us write code that's non-blocking.
>
> **[2:36](https://www.linkedin.com/learning/javascript-async/defining-asynchronous-programming-14342017?u=76281980&t=156)** We write asynchronous code when we want to give part of our code time to complete while still allowing the parsers to continue executing the code that follows right away.
>
> **[2:46](https://www.linkedin.com/learning/javascript-async/defining-asynchronous-programming-14342017?u=76281980&t=166)** One of the most common situations where we use asynchronous program flow is when we make Ajax requests.
>
> **[2:53](https://www.linkedin.com/learning/javascript-async/defining-asynchronous-programming-14342017?u=76281980&t=173)** We write code using XHR or fetch, or maybe a library specific method that sends a request for data to a remote server.
>
> **[3:01](https://www.linkedin.com/learning/javascript-async/defining-asynchronous-programming-14342017?u=76281980&t=181)** This code defaults to an asynchronous mode, meaning that the request gets sent off, and while the parser is waiting for a response, the main program flow moves on to execute other code, like responding to user interactions.
>
> **[3:16](https://www.linkedin.com/learning/javascript-async/defining-asynchronous-programming-14342017?u=76281980&t=196)** Another common situation where asynchronous flow is useful is setting a timer using something like set timeout.
>
> **[3:24](https://www.linkedin.com/learning/javascript-async/defining-asynchronous-programming-14342017?u=76281980&t=204)** The timer starts, and while it's counting down, the main program flow can go on to execute other code.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (2), case, (1), async (1)
> **Definitions:** known as (2), means that (1)
> **CLI Commands:** make (1)
> **Env Vars:** xhr (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Using callbacks in asynchronous programming
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980&t=0)** - [Instructor] JavaScript includes a handful of built-in functions that are executed asynchronously by default.
>
> **[0:07](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980&t=7)** These include Ajax methods, such as those in an XML HTTP request object, as well as timing functions like set timeout and animation methods, like request animation frame.
>
> **[0:20](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980&t=20)** These asynchronous methods and functions have long provided the foundation for building asynchronous code in JavaScript.
>
> **[0:28](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980&t=28)** Sometimes we want to specify additional functions or methods to execute after an asynchronous function has finished.
>
> **[0:36](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980&t=36)** Traditionally, this has been accomplished using the callback pattern.
>
> **[0:40](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980&t=40)** In this pattern, an asynchronous function is called and its execution happens in parallel, while the main program flow continues.
>
> **[0:49](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980&t=49)** This asynchronous function takes another function as an argument.
>
> **[0:54](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980&t=54)** After the statements of the original function are executed, the function passed as an argument is called.
>
> **[1:01](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980&t=61)** This function is known as a callback function.
>
> **[1:04](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980&t=64)** A callback enables you to specify what should happen next after a function is executed asynchronously.
>
> **[1:13](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980&t=73)** For instance, the asynchronous set timeout function takes two arguments, a callback function and delay time in milliseconds.
>
> **[1:23](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980&t=83)** In this code, the first argument is the callback function.
>
> **[1:27](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980&t=87)** And in this case, I've specified an anonymous function right in the function call.
>
> **[1:32](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980&t=92)** This is a pretty common way to use set timeout.
>
> **[1:35](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980&t=95)** And the callback function simply logs hello world to the console.
>
> **[1:40](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980&t=100)** After the callback function is the second and final argument, which is the length of the delay in milliseconds.
>
> **[1:47](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980&t=107)** Here, I've specified 5,000 milliseconds, which is the same as five seconds.
>
> **[1:52](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980&t=112)** So when this code runs, the set timeout function first delays for 5,000 milliseconds and then calls the callback function, which logs hello world to the console.
>
> **[2:04](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980&t=124)** When set timeout is called, it's moved out of the main program flow and then pauses for the specified number of milliseconds, which in this case is 5,000.
>
> **[2:15](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980&t=135)** After the time has elapsed, the callback function is called and hello world is logged to the console.
>
> **[2:23](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980&t=143)** So let's take a look at this in practice.
>
> **[2:26](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980&t=146)** So, I've written up some sample code that does three things.
>
> **[2:31](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980&t=151)** We're basically just logging three things to the console here.
>
> **[2:34](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980&t=154)** So first, we log the word hi to the console, and that's going to happen immediately when the script loads.
>
> **[2:41](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980&t=161)** And next we call set timeout, passing it a function that logs the text, asynchronous result, to the console, but only after 5,000 milliseconds have passed.
>
> **[2:52](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980&t=172)** And then, finally, we have text that logs synchronous result to the console.
>
> **[2:58](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980&t=178)** Now remember that set timeout is an asynchronous function.
>
> **[3:02](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980&t=182)** So, according to what we've just learned, hi should log to the console first, set timeout should start running, but should be set aside, run in parallel and wait 5,000 milliseconds.
>
> **[3:15](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980&t=195)** But the main program flow will move on to that final console dot log statement and log synchronous result before that set timeout is finished.
>
> **[3:25](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980&t=205)** And so, I have my index dot HTML file running, using live server.
>
> **[3:31](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980&t=211)** So, I need to kill my previous live server and then with that index dot HTML file open, going to hit go live.
>
> **[3:40](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980&t=220)** And in my browser, I'm going to open up the console.
>
> **[3:43](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980&t=223)** And just to get rid of that live reload text, I'm going to reload my page one more time and just see the flow here.
>
> **[3:48](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980&t=228)** So immediately, the word hi is logged and synchronous result is logged almost immediately.
>
> **[3:54](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980&t=234)** And then notice that it took about five seconds for that text asynchronous result to be logged to the console.
>
> **[4:00](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980&t=240)** So in this case, our code ran that set timeout function.
>
> **[4:05](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980&t=245)** And when set timeout was finished running asynchronously, it went ahead and called this callback function.
>
> **[4:12](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980&t=252)** And this other anonymous function ran after set timeout.
>
> **[4:16](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980&t=256)** And so, the callback functions are a tool that allow us to specify what happens next after a function is executed asynchronously.
>
> **[4:26](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980&t=266)** Now, callbacks can also be used synchronously to simply specify what happens after code is executed in the main program flow.
>
> **[4:34](https://www.linkedin.com/learning/javascript-async/using-callbacks-in-asynchronous-programming?u=76281980&t=274)** And developers do this all the time, but as we've seen here, callbacks are an especially important tool when building asynchronous code.

> [!info]- Semantic Content
>
> **Code Keywords:** function (25), case, (2), default. (1), let (1), finally, (1)
> **Definitions:** is called (4), known as (1), is a  (1), is an  (1)
> **Env Vars:** html (2), xml (1), http (1)
> **Analogies:** such as (1), for instance (1)
> **Exercise Files:** sample code (1)
> **Speakers:** - [instructor] (1)

#### Implementing callbacks for problem-solving
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=0)** - [Instructor] Let's take a look at what a callback function looks like in practice.
>
> **[0:04](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=4)** We're going to work with the fictitious Explore California site, and we're going to implement a feature using a callback.
>
> **[0:11](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=11)** We want to add a feature to the tours page that shows the current weather in Los Angeles.
>
> **[0:16](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=16)** Here's what that looks like in the end file for this video.
>
> **[0:20](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=20)** We're going to create an Ajax request to OpenWeatherMap to get current weather data for L.A.
>
> **[0:25](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=25)** And then we want to incorporate the data that's returned into the DOM so it's displayed in the browser window.
>
> **[0:33](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=33)** And so to do that, I want to create an XML HTTP request object.
>
> **[0:39](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=39)** So I'm going to create that here.
>
> **[0:43](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=43)** I'm going to call it httpRequest and set that to new XMLHttpRequest.
>
> **[0:51](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=51)** And then my plan is to create a function called get where I can pass in a URL to actually make that HTTP request.
>
> **[0:59](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=59)** So I'll create a function called get.
>
> **[1:03](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=63)** Parameter name will be URL.
>
> **[1:06](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=66)** And we'll start by referencing our variable HTTP request.
>
> **[1:11](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=71)** And we'll use the open method passing in the get HTTP verb and that URL parameter.
>
> **[1:21](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=81)** So that's going to create our request and then we also have to send that request.
>
> **[1:26](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=86)** So we're going to do httpRequest.send and that'll actually send it off to the web service.
>
> **[1:34](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=94)** Now I've created a function here called tempToF because the weather that we actually get back from OpenWeatherMap is in Kelvin.
>
> **[1:43](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=103)** It's not used in actually understanding what temperature it is outside.
>
> **[1:46](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=106)** And so this function will simply take a Kelvin temperature and give you back a Fahrenheit temperature.
>
> **[1:52](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=112)** And then we've got a function called successHandler and this is actually going to take the data that we get back and it's going to render it into the DOM.
>
> **[2:01](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=121)** This uses a template literal and then some vanilla JavaScript to actually add the structure to the DOM.
>
> **[2:09](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=129)** And so then down here, I've got an event listener for when the DOM has finished loading.
>
> **[2:13](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=133)** I have an API key for OpenWeatherMap.
>
> **[2:15](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=135)** Now this is an API key that won't be active when you're watching this video.
>
> **[2:19](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=139)** So you need to go to OpenWeatherMap and get your own.
>
> **[2:22](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=142)** And I also have a variable called URL, which is storing the constructed URL to get the weather from Los Angeles.
>
> **[2:31](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=151)** I got this URL just by looking at the API documentation for OpenWeatherMap.
>
> **[2:36](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=156)** So like most other APIs, there's really good documentation here.
>
> **[2:40](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=160)** And I'm looking for the current weather data for one location.
>
> **[2:43](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=163)** So they're showing me some sample strings, some sample queries that I can construct.
>
> **[2:48](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=168)** And so that's what I used to create this URL.
>
> **[2:51](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=171)** So all I should have to do then is call that new function that I just created called get.
>
> **[2:58](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=178)** I want to pass it in that URL.
>
> **[3:01](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=181)** And then once I've made that call, I want to add this data to the DOM.
>
> **[3:06](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=186)** And so I'm going to call my successHandler function, and I'm going to pass it httpRequest.responseText.
>
> **[3:16](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=196)** So we are getting JSON back from this API that comes back in the response text property of that XHR object.
>
> **[3:24](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=204)** And so let's see what happens.
>
> **[3:26](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=206)** I'm going to save that code.
>
> **[3:34](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=214)** Going to switch over to the HTML file and go live with that.
>
> **[3:39](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=219)** And I don't have any data here.
>
> **[3:41](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=221)** Nothing's showing up in my DOM like it did in solution file.
>
> **[3:43](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=223)** So opening up the console, we've got an unexpected end of JSON input.
>
> **[3:48](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=228)** My experience that usually means you're trying to parse something as JSON that's not actually JSON or that doesn't exist.
>
> **[3:54](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=234)** So let's look back at our code.
>
> **[3:57](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=237)** Now we created an XHR request here and we sent that off to get data.
>
> **[4:03](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=243)** So when we called that get function, we're sending off request.
>
> **[4:07](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=247)** And then immediately, synchronously, we are calling this successHandler function and saying, hey, take that data and do something with it.
>
> **[4:16](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=256)** But since we know that an XHR request is generally going to take at least a couple seconds to make that round trip, to make the request, get the data processed and then get it back, we are calling our successHandler function before we actually have any data for it because we're using a synchronous model here.
>
> **[4:36](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=276)** We're just saying, do this thing, then do this thing.
>
> **[4:38](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=278)** And our code is not waiting around for that get request to return any data.
>
> **[4:44](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=284)** And so one thing we can do instead is to use a callback.
>
> **[4:49](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=289)** And so I'm going to tweak my get function here to take a second parameter called success.
>
> **[4:56](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=296)** And this is going to be a callback.
>
> **[4:59](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=299)** And then I can take advantage of one of the properties of the XHR object.
>
> **[5:04](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=304)** So I can actually specify callback functions to respond to specific events.
>
> **[5:09](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=309)** And so referencing that object, I can use the onload property to respond when we actually get a response.
>
> **[5:18](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=318)** And I'm going to use an anonymous function to call that success callback and pass it, httpRequest.responseText.
>
> **[5:31](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=331)** So once I get that data back, the next thing I want to happen is for that data to be passed along to this callback function.
>
> **[5:39](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=339)** And then I just need to comment out my call to success handler down here because I don't need that anymore.
>
> **[5:48](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=348)** Oh, so I still have to pass in that callback function in my get call.
>
> **[5:52](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=352)** So here I'm calling URL and I need to pass in the name of my callback function is successHandler.
>
> **[6:00](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=360)** Save that.
>
> **[6:02](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=362)** Switch back to my browser and there's my weather.
>
> **[6:06](https://www.linkedin.com/learning/javascript-async/implementing-callbacks-for-problem-solving?u=76281980&t=366)** And so we used a callback function to wait for the response from the remote server and then use that callback function as the next step to work with that data in our asynchronous model.

> [!info]- Semantic Content
>
> **Env Vars:** url (9), dom (6), http (4), api (4), json (4)
> **Code Keywords:** function (18), pass (6), let (3), switch (2)
> **Code Identifiers:** successhandler (5), httprequest (4), responsetext (2), temptof (1)
> **CLI Commands:** make (3)
> **UI Navigation:** go to (1)
> **Exercise Files:** template (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Using error checking with multiple callbacks
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=1)** - [Instructor] Our Explore California site uses an Ajax request to get weather, and a callback to work with the data received.
>
> **[0:09](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=9)** But what happens when the response contains something other than the data we expect?
>
> **[0:14](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=14)** We could receive an authentication error, a notification that the service is down, or any one of a number of other responses that don't include the data we're looking for.
>
> **[0:25](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=25)** To deal with this, it's common to use error checking in conjunction with multiple callbacks.
>
> **[0:32](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=32)** So, when the response comes in, instead of simply assuming we have good data and calling the success callback, we can check what kind of response we got.
>
> **[0:41](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=41)** If our Ajax request results in a 200 response, then we know the request succeeded, and we have data, so we can call the success callback.
>
> **[0:50](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=50)** But for any other response code, we may or may not be getting the data we expect.
>
> **[0:55](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=55)** And we're probably not.
>
> **[0:57](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=57)** So, we want to instead call a different callback function to examine the response, and figure out how best to deal with it.
>
> **[1:04](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=64)** So, in my code, the first thing I want to do is update that get function.
>
> **[1:10](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=70)** Because in addition to a success callback, I want to specify a fail callback.
>
> **[1:15](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=75)** So, I want to make it possible to actually specify what callback should be called, in case I don't get good data back.
>
> **[1:24](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=84)** And so the next thing I'm going to do is change my onload function.
>
> **[1:30](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=90)** So, instead of just assuming success, I'm going to use an ifelse construction.
>
> **[1:36](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=96)** So, I'm going to check if, httpRequest.status, which gives us the numerical status code of the response.
>
> **[1:45](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=105)** I want to see if that status code is 200.
>
> **[1:48](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=108)** If it is, we know everything is good.
>
> **[1:50](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=110)** So, in that case, we are just going to use our existing success function call.
>
> **[2:00](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=120)** But otherwise, we may need to dig in a little bit deeper.
>
> **[2:05](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=125)** And in this case, just to get started, I'm going to use our fail callback, and I'm just going to send it the status property of our XHR object.
>
> **[2:18](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=138)** And that will give us that actual status code.
>
> **[2:23](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=143)** And so I have my success handler, and now I want to write another function, that I'm going to call failHandler.
>
> **[2:31](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=151)** And I want that to take a parameter which is going to be called status, and that'll be our status code.
>
> **[2:38](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=158)** So, the first thing I want to to do is console.log that status code.
>
> **[2:44](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=164)** And so that may be useful if we have a user who's actually reporting an issue, who can give us that status code.
>
> **[2:50](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=170)** And then I actually have a fallback image already built into my app.
>
> **[2:55](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=175)** And so I'm just going to add a couple lines of DOM manipulation to forget about the weather report, and just show an image.
>
> **[3:05](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=185)** And I can actually copy those lines from up above.
>
> **[3:08](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=188)** So, up in my success handler, line 16 on my screen, defines a constant called weatherDiv.
>
> **[3:15](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=195)** So, I'm going to copy that and stick that in my fail handler.
>
> **[3:21](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=201)** And then up here on line 32, we've got weatherDiv.classList.remove.
>
> **[3:29](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=209)** And I'm going to copy that, and stick that as the last line of my fail handler.
>
> **[3:35](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=215)** And so this is basically just going to display this existing section of the page, which includes an image by default.
>
> **[3:45](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=225)** So, there's one final thing I need to do at the very bottom of my code, I'm calling my get method.
>
> **[3:53](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=233)** I'm sending it a URL specifying success handler as my success callback.
>
> **[3:59](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=239)** I also need to specify my new function, failHandler, as my fail fallback.
>
> **[4:07](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=247)** And so up here in my get function, it's now expecting three parameters.
>
> **[4:13](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=253)** And so, now I have three arguments in my function call.
>
> **[4:17](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=257)** So, I've saved my code.
>
> **[4:20](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=260)** Switching back to my app in the browser, nothing looks different.
>
> **[4:26](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=266)** So, the success is still working, it looks like.
>
> **[4:29](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=269)** I'm still getting successful information backing having that displayed.
>
> **[4:33](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=273)** But let's go back to the code and simulate a problem.
>
> **[4:36](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=276)** So, I'm going to duplicate the line containing my API key.
>
> **[4:42](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=282)** I'm going to comment out the first one, and in the second one, I'm going to turn it into an empty string.
>
> **[4:50](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=290)** And so now when I build out that URL, it's going to have an invalid API key, that should give me an error from open weather map, and should result in me not actually getting data.
>
> **[5:02](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=302)** And so with those changes saved, going back to the browser, and there we are.
>
> **[5:07](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=307)** We've got the default image showing, instead of the weather report.
>
> **[5:10](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=310)** And if I open up the console, I have a failure message from the browser itself.
>
> **[5:16](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=316)** I also have that failure status code of 401 logged from my code, in case that's useful.
>
> **[5:23](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=323)** You know, there are a lot of different HTTP status codes that we could get back, and they tell us lots of information about what has happened.
>
> **[5:33](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=333)** So, there may indeed be some codes where we can figure out a way to reformulate our query and resubmit it.
>
> **[5:39](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=339)** Some of them are dead ends, but this gives us a good start toward dealing with a known success, and dealing with anything else.
>
> **[5:47](https://www.linkedin.com/learning/javascript-async/using-error-checking-with-multiple-callbacks?u=76281980&t=347)** And we could certainly make this more fine-grained down the road.

> [!info]- Semantic Content
>
> **Code Keywords:** function (8), case, (2), for. (1), this, (1), if, (1)
> **Env Vars:** url (2), api (2), xhr (1), dom (1), http (1)
> **Code Identifiers:** failhandler (2), weatherdiv (2), httprequest (1), classlist (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)


### 2. Programming Asynchronously with Promises

#### Understanding promises
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-async/understanding-promises-14342019?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/understanding-promises-14342019?u=76281980&t=0)** - Callbacks are really handy for basic cases where we want to execute additional code after an asynchronous function completes.
>
> **[0:09](https://www.linkedin.com/learning/javascript-async/understanding-promises-14342019?u=76281980&t=9)** And as you might imagine, it's even possible to string callbacks together pretty much as far as we need to.
>
> **[0:17](https://www.linkedin.com/learning/javascript-async/understanding-promises-14342019?u=76281980&t=17)** However, when we start working with code that uses multiple chain callbacks, it can be hard to write code that's both well-organized and easy for humans to read, to solve this problem.
>
> **[0:30](https://www.linkedin.com/learning/javascript-async/understanding-promises-14342019?u=76281980&t=30)** Modern JavaScript supports promises, which allow us to string together multiple callbacks while maintaining well-organized and human readable code.
>
> **[0:41](https://www.linkedin.com/learning/javascript-async/understanding-promises-14342019?u=76281980&t=41)** A promise is an object that represents the eventual result of an asynchronous operation.
>
> **[0:48](https://www.linkedin.com/learning/javascript-async/understanding-promises-14342019?u=76281980&t=48)** A promise contains information about the operation and tracks its status.
>
> **[0:53](https://www.linkedin.com/learning/javascript-async/understanding-promises-14342019?u=76281980&t=53)** It has a state property which can be pending fulfilled or rejected, and it has a result property which starts as undefined and can be given a value based on the operation.
>
> **[1:07](https://www.linkedin.com/learning/javascript-async/understanding-promises-14342019?u=76281980&t=67)** When the operation is complete, the promise executes one of two methods resolve, meaning that the operation was successful or reject, meaning that an error occurred.
>
> **[1:19](https://www.linkedin.com/learning/javascript-async/understanding-promises-14342019?u=76281980&t=79)** These methods change the state and result properties to reflect the outcome of the operation.
>
> **[1:26](https://www.linkedin.com/learning/javascript-async/understanding-promises-14342019?u=76281980&t=86)** You create a promise using the promise constructor.
>
> **[1:29](https://www.linkedin.com/learning/javascript-async/understanding-promises-14342019?u=76281980&t=89)** You can put code within a promise to do most anything you want, but a promise is most useful with an asynchronous task using the resolve or reject callbacks.
>
> **[1:41](https://www.linkedin.com/learning/javascript-async/understanding-promises-14342019?u=76281980&t=101)** When a promise resolves the result is returned.
>
> **[1:45](https://www.linkedin.com/learning/javascript-async/understanding-promises-14342019?u=76281980&t=105)** When a promise rejects the error is returned, what makes promises easier for humans to read and understand the nested callbacks is the syntax used to work with the result of a promise.
>
> **[1:59](https://www.linkedin.com/learning/javascript-async/understanding-promises-14342019?u=76281980&t=119)** The promise specification allows additional methods to be chained to the code that calls the original promise in order to work with the result of the promise to work with the result of a resolved promise.
>
> **[2:12](https://www.linkedin.com/learning/javascript-async/understanding-promises-14342019?u=76281980&t=132)** You can add the cen method note that there are a few common ways you might see the promise then code organized because JavaScript ignores white space.
>
> **[2:24](https://www.linkedin.com/learning/javascript-async/understanding-promises-14342019?u=76281980&t=144)** It's fine to use any combination of line breaks and in dense, that works for you.
>
> **[2:30](https://www.linkedin.com/learning/javascript-async/understanding-promises-14342019?u=76281980&t=150)** Whatever format you choose, you have the possibility of stringing together.
>
> **[2:34](https://www.linkedin.com/learning/javascript-async/understanding-promises-14342019?u=76281980&t=154)** A number of cen methods, all indented the same amount and with a clear flow from one to the next, making the progression of code visually obvious to you and other developers.

> [!info]- Semantic Content
>
> **Code Keywords:** function (1)
> **Documentation:** specification (1)
> **Definitions:** is an  (1)
> **Analogies:** imagine (1)
> **Warnings:** note that (1)
> **Speakers:** - callbacks (1)

#### Building asynchronous code with promises
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-async/building-asynchronous-code-with-promises?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/building-asynchronous-code-with-promises?u=76281980&t=0)** - Modern JavaScript includes a method called Fetch, that creates an asynchronous HTTP request using a syntax that's based on Promises.
>
> **[0:10](https://www.linkedin.com/learning/javascript-async/building-asynchronous-code-with-promises?u=76281980&t=10)** However, to get practice building Promises from the ground up, we're going to create our own method using the Promises constructor to create and send an XHR request for the weather information on the explore California site.
>
> **[0:25](https://www.linkedin.com/learning/javascript-async/building-asynchronous-code-with-promises?u=76281980&t=25)** So we're going to start by basically rewriting the GET Method that we've already created.
>
> **[0:31](https://www.linkedin.com/learning/javascript-async/building-asynchronous-code-with-promises?u=76281980&t=31)** So our GET Method is just creating an XHR request, sending that and then working with the response, and we just want to turn this into code that is actually creating and then working with a Promise.
>
> **[0:45](https://www.linkedin.com/learning/javascript-async/building-asynchronous-code-with-promises?u=76281980&t=45)** So the first thing I'm going to do is take out the success and fail Callback parameters because Promises don't actually work with those.
>
> **[0:54](https://www.linkedin.com/learning/javascript-async/building-asynchronous-code-with-promises?u=76281980&t=54)** We don't use Callbacks with Promises, We do that more Under the Hood.
>
> **[0:58](https://www.linkedin.com/learning/javascript-async/building-asynchronous-code-with-promises?u=76281980&t=58)** And then the first line of my function, I want to return a new Promise, and this is a capital P using the Promise constructor, and then within the parentheses, I'm going to pass in an anonymous function and that's going to have two parameters resolve and reject, which correspond to methods inherited from the constructor.
>
> **[1:21](https://www.linkedin.com/learning/javascript-async/building-asynchronous-code-with-promises?u=76281980&t=81)** So Promises are essentially Callbacks Under the Hood, but they let us write the syntax of course in a way that's easier for us to work with.
>
> **[1:30](https://www.linkedin.com/learning/javascript-async/building-asynchronous-code-with-promises?u=76281980&t=90)** And so then I basically need to stick all of this other content that used to be part of my GET function, and just Nest that inside of my new Promise.
>
> **[1:43](https://www.linkedin.com/learning/javascript-async/building-asynchronous-code-with-promises?u=76281980&t=103)** And then I need to deal with what happens in response to the load event.
>
> **[1:50](https://www.linkedin.com/learning/javascript-async/building-asynchronous-code-with-promises?u=76281980&t=110)** So when the status is 200, instead of calling that success callback like I used to do, I instead want to call the resolve callback that I've specified for my Promise and then for the fail case, instead of calling the fail callback now I have a reject callback, and here I can actually create an error object which is just adding an extra layer to my JavaScript so that I can actually generate an error in the browser console.
>
> **[2:26](https://www.linkedin.com/learning/javascript-async/building-asynchronous-code-with-promises?u=76281980&t=146)** That's not a promise specific thing, but it's something else we can do to make our errors a little bit more useful to us as developers, and then scrolling down to the very bottom where I'm actually calling my GET Method.
>
> **[2:46](https://www.linkedin.com/learning/javascript-async/building-asynchronous-code-with-promises?u=76281980&t=166)** I'm not going to be calling it and passing in any methods right now.
>
> **[2:52](https://www.linkedin.com/learning/javascript-async/building-asynchronous-code-with-promises?u=76281980&t=172)** I'm going to comment out that previous function call and because we don't have any response handling set up yet, I'm going to start by just console.logging the response, so we can see what happens when a Promise resolves or rejects.
>
> **[3:11](https://www.linkedin.com/learning/javascript-async/building-asynchronous-code-with-promises?u=76281980&t=191)** So I'm just going to call that GET Method, pass it our URL, and then console.log the results and so over in my browser, I have my page loading with livereload and so here is the result of my console.log So my GET function now returns a Promise and we can actually look inside that Promise and see it has a status and a value, the status is resolved meaning that it got a successful response and it got some data back and then the Promise value is actually that data and when I hover over that, I can actually see I have this big blob of JSON containing weather data just like I expect.
>
> **[3:54](https://www.linkedin.com/learning/javascript-async/building-asynchronous-code-with-promises?u=76281980&t=234)** So this is the first stage of actually creating a promise.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), pass (2), let (1), case, (1)
> **API Endpoints:** get  (5), get
 (1)
> **Env Vars:** xhr (2), http (1), url (1), json (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Prerequisites:** set up (1)
> **Speakers:** - modern (1)

#### Appending methods to resolved promises
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-async/appending-methods-to-resolved-promises?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/appending-methods-to-resolved-promises?u=76281980&t=0)** - So far, our code returns an object from a promise, and that means we're on the right track, but we want to do something with that object.
>
> **[0:09](https://www.linkedin.com/learning/javascript-async/appending-methods-to-resolved-promises?u=76281980&t=9)** The object returned by a resolve method isn't meant for direct examination.
>
> **[0:14](https://www.linkedin.com/learning/javascript-async/appending-methods-to-resolved-promises?u=76281980&t=14)** It itself is a promise and requires specific syntax to work with.
>
> **[0:19](https://www.linkedin.com/learning/javascript-async/appending-methods-to-resolved-promises?u=76281980&t=19)** To handle the object return from a successful promise, we simply append the then method to the promise call.
>
> **[0:26](https://www.linkedin.com/learning/javascript-async/appending-methods-to-resolved-promises?u=76281980&t=26)** Then expects a promise as an argument and enables you to work with the result data embedded in that object.
>
> **[0:34](https://www.linkedin.com/learning/javascript-async/appending-methods-to-resolved-promises?u=76281980&t=34)** And you can chain as many then methods as you want.
>
> **[0:38](https://www.linkedin.com/learning/javascript-async/appending-methods-to-resolved-promises?u=76281980&t=38)** One after another, allowing you to work with data synchronously or asynchronously and hand off the result to another function at each step.
>
> **[0:47](https://www.linkedin.com/learning/javascript-async/appending-methods-to-resolved-promises?u=76281980&t=47)** And this makes code easier to read, than nested callback sometimes do.
>
> **[0:53](https://www.linkedin.com/learning/javascript-async/appending-methods-to-resolved-promises?u=76281980&t=53)** In our get function for the Explore California site.
>
> **[0:56](https://www.linkedin.com/learning/javascript-async/appending-methods-to-resolved-promises?u=76281980&t=56)** We want to dig into the data returned from our HTTP request.
>
> **[1:00](https://www.linkedin.com/learning/javascript-async/appending-methods-to-resolved-promises?u=76281980&t=60)** So to do that, instead of logging that object to the console, I'm going to make an actual straight up call to my method, get, and then I'm going to add dot then to the end of that function call, I'm going to pass an anonymous function to the then method.
>
> **[1:23](https://www.linkedin.com/learning/javascript-async/appending-methods-to-resolved-promises?u=76281980&t=83)** And I'm going to use a parameter name of result to make it clear that that's what I'm starting with here.
>
> **[1:31](https://www.linkedin.com/learning/javascript-async/appending-methods-to-resolved-promises?u=76281980&t=91)** Now, the result that I get from the promise should be adjacent string.
>
> **[1:34](https://www.linkedin.com/learning/javascript-async/appending-methods-to-resolved-promises?u=76281980&t=94)** And so I can simply hand that off to my success handler function.
>
> **[1:38](https://www.linkedin.com/learning/javascript-async/appending-methods-to-resolved-promises?u=76281980&t=98)** And so my success handler function is still totally ready to pick that up.
>
> **[1:43](https://www.linkedin.com/learning/javascript-async/appending-methods-to-resolved-promises?u=76281980&t=103)** And so I can simply call success handler and pass it my response parameter.
>
> **[1:52](https://www.linkedin.com/learning/javascript-async/appending-methods-to-resolved-promises?u=76281980&t=112)** And so my success handlers should actually go ahead and grab that data. And as long as we have a good request, we should see that in the Dom.
>
> **[1:59](https://www.linkedin.com/learning/javascript-async/appending-methods-to-resolved-promises?u=76281980&t=119)** So I'm going to save my changes and I've got an error there because I'm not using the parameter name.
>
> **[2:04](https://www.linkedin.com/learning/javascript-async/appending-methods-to-resolved-promises?u=76281980&t=124)** Let me just change that. So these are both response.
>
> **[2:08](https://www.linkedin.com/learning/javascript-async/appending-methods-to-resolved-promises?u=76281980&t=128)** So my parameters response, and then I'm using that when I'm calling success handler.
>
> **[2:13](https://www.linkedin.com/learning/javascript-async/appending-methods-to-resolved-promises?u=76281980&t=133)** And there we go, no errors in the console, and I have my weather being displayed once again.
>
> **[2:19](https://www.linkedin.com/learning/javascript-async/appending-methods-to-resolved-promises?u=76281980&t=139)** And so now we actually have weather being displayed on this page as the result of a resolved promise, handing off the data to our success handler function.
>
> **[2:32](https://www.linkedin.com/learning/javascript-async/appending-methods-to-resolved-promises?u=76281980&t=152)** And so we're getting that same functionality, but by using promises, our code is better organized.

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), pass (2), let (1)
> **CLI Commands:** make (2)
> **Env Vars:** http (1)
> **Definitions:** is a  (1)
> **Speakers:** - so (1)

#### Using catch methods for rejected promises
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-async/using-catch-methods-for-rejected-promises?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/using-catch-methods-for-rejected-promises?u=76281980&t=0)** - [Instructor] Instead of resolving, a promise that does not complete successfully can instead reject.
>
> **[0:07](https://www.linkedin.com/learning/javascript-async/using-catch-methods-for-rejected-promises?u=76281980&t=7)** While the result of a resolved promise is passed to the first then statement that's chained the promise call, you use a separate method, catch, to work with a rejected promise.
>
> **[0:18](https://www.linkedin.com/learning/javascript-async/using-catch-methods-for-rejected-promises?u=76281980&t=18)** The catch method allows you to perform error handling, just like the more general catch statement that JavaScript supports.
>
> **[0:25](https://www.linkedin.com/learning/javascript-async/using-catch-methods-for-rejected-promises?u=76281980&t=25)** Catch is passed to the object created by the reject method of the original promise.
>
> **[0:31](https://www.linkedin.com/learning/javascript-async/using-catch-methods-for-rejected-promises?u=76281980&t=31)** This allows you to view the error message, or object, that was generated by the original promise.
>
> **[0:38](https://www.linkedin.com/learning/javascript-async/using-catch-methods-for-rejected-promises?u=76281980&t=38)** So, looking at our promise code, we're calling the resolve method if we have a successful response, and then we're calling the reject method if we don't have a successful response.
>
> **[0:48](https://www.linkedin.com/learning/javascript-async/using-catch-methods-for-rejected-promises?u=76281980&t=48)** We're also calling the reject method if we run into a specific network error.
>
> **[0:53](https://www.linkedin.com/learning/javascript-async/using-catch-methods-for-rejected-promises?u=76281980&t=53)** And so, in order to handle this reject state, we need to go down to our function call and add a catch handler.
>
> **[1:03](https://www.linkedin.com/learning/javascript-async/using-catch-methods-for-rejected-promises?u=76281980&t=63)** Now remember that as we're chaining methods, the white space doesn't matter, so we can use any sort of layout we want.
>
> **[1:10](https://www.linkedin.com/learning/javascript-async/using-catch-methods-for-rejected-promises?u=76281980&t=70)** And it's actually pretty common to put the then on its own line, indented underneath the get.
>
> **[1:19](https://www.linkedin.com/learning/javascript-async/using-catch-methods-for-rejected-promises?u=76281980&t=79)** And then, we'll put the catch on its own line as well, passing that, an anonymous function, catching that status with parameter and then calling our fail handler and passing it whatever data it got in that status parameter.
>
> **[1:43](https://www.linkedin.com/learning/javascript-async/using-catch-methods-for-rejected-promises?u=76281980&t=103)** And so here, we have our function call to the get function, which creates the promise.
>
> **[1:49](https://www.linkedin.com/learning/javascript-async/using-catch-methods-for-rejected-promises?u=76281980&t=109)** The result of that promise has passed to then if it's successful.
>
> **[1:53](https://www.linkedin.com/learning/javascript-async/using-catch-methods-for-rejected-promises?u=76281980&t=113)** And if it's not successful, it's passed to catch.
>
> **[1:57](https://www.linkedin.com/learning/javascript-async/using-catch-methods-for-rejected-promises?u=76281980&t=117)** And it's important to notice here, we could have as many dot thens as we wanted chained here.
>
> **[2:03](https://www.linkedin.com/learning/javascript-async/using-catch-methods-for-rejected-promises?u=76281980&t=123)** And if any of them failed, if the original request failed or any of the subsequent thens rejected, it would immediately fall down to this catch statement.
>
> **[2:15](https://www.linkedin.com/learning/javascript-async/using-catch-methods-for-rejected-promises?u=76281980&t=135)** And so to test this out, let's go ahead and disable our API key.
>
> **[2:22](https://www.linkedin.com/learning/javascript-async/using-catch-methods-for-rejected-promises?u=76281980&t=142)** So, I'm going to comment that out.
>
> **[2:24](https://www.linkedin.com/learning/javascript-async/using-catch-methods-for-rejected-promises?u=76281980&t=144)** And I've got this alternate version of the API key variable with nothing in it.
>
> **[2:29](https://www.linkedin.com/learning/javascript-async/using-catch-methods-for-rejected-promises?u=76281980&t=149)** That's going to make sure we get an error from our web service.
>
> **[2:35](https://www.linkedin.com/learning/javascript-async/using-catch-methods-for-rejected-promises?u=76281980&t=155)** And so, I have live server running.
>
> **[2:38](https://www.linkedin.com/learning/javascript-async/using-catch-methods-for-rejected-promises?u=76281980&t=158)** And so, notice a couple things.
>
> **[2:40](https://www.linkedin.com/learning/javascript-async/using-catch-methods-for-rejected-promises?u=76281980&t=160)** One, that we got a 401 error.
>
> **[2:44](https://www.linkedin.com/learning/javascript-async/using-catch-methods-for-rejected-promises?u=76281980&t=164)** And this is from line 22.
>
> **[2:46](https://www.linkedin.com/learning/javascript-async/using-catch-methods-for-rejected-promises?u=76281980&t=166)** This is actually where I created a JavaScript error using the error constructor.
>
> **[2:51](https://www.linkedin.com/learning/javascript-async/using-catch-methods-for-rejected-promises?u=76281980&t=171)** And that shows up in red in the console.
>
> **[2:54](https://www.linkedin.com/learning/javascript-async/using-catch-methods-for-rejected-promises?u=76281980&t=174)** And I've also got the result on line 49, just the console dot log of the error message that I got.
>
> **[3:04](https://www.linkedin.com/learning/javascript-async/using-catch-methods-for-rejected-promises?u=76281980&t=184)** And then, the other thing we're doing here is showing the placeholder image when we don't have a successful response and that has happened here.
>
> **[3:12](https://www.linkedin.com/learning/javascript-async/using-catch-methods-for-rejected-promises?u=76281980&t=192)** And so, again, we've used the promise reject method to specify what should happen if we don't have a successful request.
>
> **[3:23](https://www.linkedin.com/learning/javascript-async/using-catch-methods-for-rejected-promises?u=76281980&t=203)** And so, I'm going to scroll down and I'm going to fix my API key.
>
> **[3:27](https://www.linkedin.com/learning/javascript-async/using-catch-methods-for-rejected-promises?u=76281980&t=207)** So we'll comment out that empty one, comment back in the correct one and then switching back.
>
> **[3:34](https://www.linkedin.com/learning/javascript-async/using-catch-methods-for-rejected-promises?u=76281980&t=214)** And we've got our successful response and our resolved promise, actually putting that data into the dom.
>
> **[3:42](https://www.linkedin.com/learning/javascript-async/using-catch-methods-for-rejected-promises?u=76281980&t=222)** And so, our then method works unless there's an error, and if there's an error, the catch method instead takes care of that error for us.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), catch, (1), catch. (1), let (1)
> **Env Vars:** api (3)
> **CLI Commands:** make (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Using the finally method for executing handlers
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-async/using-the-finally-method-for-executing-handlers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/using-the-finally-method-for-executing-handlers?u=76281980&t=0)** - In addition to the then and catch methods, promises also support chaining, a finally method you use finally, to specify statements that should be executed no matter whether the promise resolved or rejected.
>
> **[0:16](https://www.linkedin.com/learning/javascript-async/using-the-finally-method-for-executing-handlers?u=76281980&t=16)** And so examining our code, we have things in pretty good shape right now.
>
> **[0:21](https://www.linkedin.com/learning/javascript-async/using-the-finally-method-for-executing-handlers?u=76281980&t=21)** We have a successful request that's doing some dominant manipulation.
>
> **[0:25](https://www.linkedin.com/learning/javascript-async/using-the-finally-method-for-executing-handlers?u=76281980&t=25)** We have error handling for unsuccessful requests or network errors.
>
> **[0:31](https://www.linkedin.com/learning/javascript-async/using-the-finally-method-for-executing-handlers?u=76281980&t=31)** And so if we look through our code, one thing we can notice is that between the success handler and the fail handler, we have a little bit of repetition.
>
> **[0:42](https://www.linkedin.com/learning/javascript-async/using-the-finally-method-for-executing-handlers?u=76281980&t=42)** So we, in both cases notice on line 45 and 51.
>
> **[0:47](https://www.linkedin.com/learning/javascript-async/using-the-finally-method-for-executing-handlers?u=76281980&t=47)** We are removing the hidden class from our class list to either display the weather or for the fallback to display that image.
>
> **[0:57](https://www.linkedin.com/learning/javascript-async/using-the-finally-method-for-executing-handlers?u=76281980&t=57)** And so we should be able to just combine these into a single statement that happens no matter whether we have a success or failure.
>
> **[1:05](https://www.linkedin.com/learning/javascript-async/using-the-finally-method-for-executing-handlers?u=76281980&t=65)** And so the statement as written using the weather div variable relies on this statement, defining that variable.
>
> **[1:12](https://www.linkedin.com/learning/javascript-async/using-the-finally-method-for-executing-handlers?u=76281980&t=72)** That's used elsewhere in our success handler.
>
> **[1:14](https://www.linkedin.com/learning/javascript-async/using-the-finally-method-for-executing-handlers?u=76281980&t=74)** And so we can't take that out of both places, but we do need it for our always code.
>
> **[1:21](https://www.linkedin.com/learning/javascript-async/using-the-finally-method-for-executing-handlers?u=76281980&t=81)** So I'm going to copy lines 50 and 51 from the fail handler.
>
> **[1:27](https://www.linkedin.com/learning/javascript-async/using-the-finally-method-for-executing-handlers?u=76281980&t=87)** I'm going to scroll down to my get call.
>
> **[1:30](https://www.linkedin.com/learning/javascript-async/using-the-finally-method-for-executing-handlers?u=76281980&t=90)** And then after the then and the catch, I'm going to start a new line and I'm going to do a dot finally passed that an anonymous function.
>
> **[1:41](https://www.linkedin.com/learning/javascript-async/using-the-finally-method-for-executing-handlers?u=76281980&t=101)** It does not need a parameter, and I'm going to paste in those two lines that I just copied.
>
> **[1:46](https://www.linkedin.com/learning/javascript-async/using-the-finally-method-for-executing-handlers?u=76281980&t=106)** So here we're first selecting an element from the Dom and then we are removing a class from that element.
>
> **[1:57](https://www.linkedin.com/learning/javascript-async/using-the-finally-method-for-executing-handlers?u=76281980&t=117)** And so now with that code being executed in our finally method, I can scroll up and take that out of the fail handler.
>
> **[2:10](https://www.linkedin.com/learning/javascript-async/using-the-finally-method-for-executing-handlers?u=76281980&t=130)** I can also take this final line out of the success handler, but I do need to keep line 44 in here.
>
> **[2:19](https://www.linkedin.com/learning/javascript-async/using-the-finally-method-for-executing-handlers?u=76281980&t=139)** So we still have to change the inner HTML only in the success handler.
>
> **[2:24](https://www.linkedin.com/learning/javascript-async/using-the-finally-method-for-executing-handlers?u=76281980&t=144)** So I've taken out the final line of the success handler, the final two lines of the fail handler.
>
> **[2:31](https://www.linkedin.com/learning/javascript-async/using-the-finally-method-for-executing-handlers?u=76281980&t=151)** And so saving my changes, switching back to the browser, things are still working.
>
> **[2:36](https://www.linkedin.com/learning/javascript-async/using-the-finally-method-for-executing-handlers?u=76281980&t=156)** They're just fine.
>
> **[2:38](https://www.linkedin.com/learning/javascript-async/using-the-finally-method-for-executing-handlers?u=76281980&t=158)** So the success handler, isn't making that weather section visible, but the finally method is doing that instead.
>
> **[2:48](https://www.linkedin.com/learning/javascript-async/using-the-finally-method-for-executing-handlers?u=76281980&t=168)** And if we go back and test with a bad API key, so I'm just replacing my existing API key with an empty string.
>
> **[2:57](https://www.linkedin.com/learning/javascript-async/using-the-finally-method-for-executing-handlers?u=76281980&t=177)** So I'm sure I'll get a bad response.
>
> **[3:00](https://www.linkedin.com/learning/javascript-async/using-the-finally-method-for-executing-handlers?u=76281980&t=180)** And so we did indeed get an error and we've got that fallback image being displayed.
>
> **[3:07](https://www.linkedin.com/learning/javascript-async/using-the-finally-method-for-executing-handlers?u=76281980&t=187)** So again, that's the finally method that is making that section of the page visible.
>
> **[3:14](https://www.linkedin.com/learning/javascript-async/using-the-finally-method-for-executing-handlers?u=76281980&t=194)** And so here finally has allowed us to clean up our code a little bit.
>
> **[3:17](https://www.linkedin.com/learning/javascript-async/using-the-finally-method-for-executing-handlers?u=76281980&t=197)** To reduce a little bit of duplication and pull together the statement that needs to happen no matter what, to just run after everything else has happened, either through a resolve or reject.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1), catch, (1), function (1)
> **Env Vars:** api (2), html (1)
> **UI Navigation:** scroll down (1), scroll up (1)
> **Speakers:** - in (1)

#### Preparing the all method for executing multiple promises
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-async/preparing-the-all-method-for-executing-multiple-promises?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/preparing-the-all-method-for-executing-multiple-promises?u=76281980&t=0)** - [Instructor] In some cases, you need more than one promise to finish before moving onto code that works with the results.
>
> **[0:07](https://www.linkedin.com/learning/javascript-async/preparing-the-all-method-for-executing-multiple-promises?u=76281980&t=7)** While you could write somewhat involved code to do this, promises include an all method that allows you to specify an array containing multiple promises and moving to any chained methods like then and catch only when all promises have finished.
>
> **[0:25](https://www.linkedin.com/learning/javascript-async/preparing-the-all-method-for-executing-multiple-promises?u=76281980&t=25)** The promise.all method returns an array of results from the promises it was passed.
>
> **[0:31](https://www.linkedin.com/learning/javascript-async/preparing-the-all-method-for-executing-multiple-promises?u=76281980&t=31)** For our Explore California page, we're currently including weather only for Los Angeles.
>
> **[0:38](https://www.linkedin.com/learning/javascript-async/preparing-the-all-method-for-executing-multiple-promises?u=76281980&t=38)** But California is a big state.
>
> **[0:40](https://www.linkedin.com/learning/javascript-async/preparing-the-all-method-for-executing-multiple-promises?u=76281980&t=40)** At the very least, we could be including weather for San Francisco as well and maybe even some tourist destinations known for their extreme weather like Yosemite National Park and Mount Whitney.
>
> **[0:53](https://www.linkedin.com/learning/javascript-async/preparing-the-all-method-for-executing-multiple-promises?u=76281980&t=53)** So switching over to our code, we need to rewrite things a little bit to work with a raise, and then we need to actually create our code using promise.all.
>
> **[1:04](https://www.linkedin.com/learning/javascript-async/preparing-the-all-method-for-executing-multiple-promises?u=76281980&t=64)** So our get request is going to be fine, but our success handler is going to have to work with individual promises.
>
> **[1:14](https://www.linkedin.com/learning/javascript-async/preparing-the-all-method-for-executing-multiple-promises?u=76281980&t=74)** And so one thing we need to do is make sure we're not putting the weather h1 at the beginning of each of our responses because we only need it once.
>
> **[1:22](https://www.linkedin.com/learning/javascript-async/preparing-the-all-method-for-executing-multiple-promises?u=76281980&t=82)** So I'm just going to cut that out here and we will recreate that later on in our promise.all code.
>
> **[1:31](https://www.linkedin.com/learning/javascript-async/preparing-the-all-method-for-executing-multiple-promises?u=76281980&t=91)** I'm also going to change my constant name to div just to make it clear that I've rewritten this and it's different than the one I had before.
>
> **[1:41](https://www.linkedin.com/learning/javascript-async/preparing-the-all-method-for-executing-multiple-promises?u=76281980&t=101)** Now all of my references are still going to work for the data that I'm going to be getting in here.
>
> **[1:46](https://www.linkedin.com/learning/javascript-async/preparing-the-all-method-for-executing-multiple-promises?u=76281980&t=106)** And then at the end here, I'm going to need to just return that div variable that I just created.
>
> **[1:54](https://www.linkedin.com/learning/javascript-async/preparing-the-all-method-for-executing-multiple-promises?u=76281980&t=114)** And then I won't actually need to do any dom manipulation right here.
>
> **[2:00](https://www.linkedin.com/learning/javascript-async/preparing-the-all-method-for-executing-multiple-promises?u=76281980&t=120)** That's going to have to come later, so I'm just going to comment out that final line.
>
> **[2:05](https://www.linkedin.com/learning/javascript-async/preparing-the-all-method-for-executing-multiple-promises?u=76281980&t=125)** Now we have our success handler function ready to go to work with promises.all.
>
> **[2:10](https://www.linkedin.com/learning/javascript-async/preparing-the-all-method-for-executing-multiple-promises?u=76281980&t=130)** And so, to get our app working, we'll just need to rebuild the function call.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), this, (1), raise (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Implementing the all method for executing multiple promises
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=0)** - [Instructor] And so now, moving down to the code that runs when the page is loaded, right now, I have my get, then, catch and finally statements.
>
> **[0:12](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=12)** And I, down here in my finally statement, I'm creating this element called weather div that just creates a reference to a dom element.
>
> **[0:21](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=21)** But I'm going to need to use that in other parts of my code.
>
> **[0:24](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=24)** So, I'm going to cut that and I'm going to move it up here right after my API key, so that's available all throughout my event listener here.
>
> **[0:34](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=34)** And then the next thing I'm going to do is create a variable containing the coded names of the locations that I want to get weather for.
>
> **[0:42](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=42)** So, I'm going to make that a constant, I'm going to call it locations.
>
> **[0:46](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=46)** It's going to be an array.
>
> **[0:47](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=47)** I'm going to break that onto multiple lines for legibility.
>
> **[0:50](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=50)** So I'm going to do Las plus Angeles comma US.
>
> **[0:55](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=55)** So this is the encoding that open weather map expects, and then we'll do San plus Francisco comma US.
>
> **[1:04](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=64)** We'll do Lone plus Pine comma US, which is the nearest town to Mount Whitney.
>
> **[1:11](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=71)** And then we'll do Mariposa comma US, which is a town reasonably near Yosemite National Park.
>
> **[1:19](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=79)** Put a semicolon at the end of my statement.
>
> **[1:23](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=83)** And so next, instead of a single URL, I need to create an array of URLs for my call.
>
> **[1:30](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=90)** And so, I'm just going to update this a little bit.
>
> **[1:35](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=95)** And for clarity, I'm going to comment out the one that was already there and I'm going to rewrite this.
>
> **[1:43](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=103)** So I'm going to do const URLs, plural, and I'm going to use my locations array, and I'm going to use the map method to create a new array, passing in an anonymous function and using the parameter name location for each time through the loop.
>
> **[2:05](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=125)** And from my map function, I need to return.
>
> **[2:08](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=128)** And so, I'm actually going to copy my string up through the S, the equal sign, so, the beginning of my old URL.
>
> **[2:22](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=142)** And I want to return a template literal here.
>
> **[2:24](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=144)** So I'm going to use a back tick, paste that in so far through to the equal sign.
>
> **[2:30](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=150)** Then I'm going to do dollar, curly brace location, ampersand app ID in all caps equals dollar sign, curly brace, API key, curly brace.
>
> **[2:46](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=166)** And so, this is going to build me an array of URLs, ready to go to make requests, to open weather map for those four locations using my API key.
>
> **[2:59](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=179)** Now, once I have that array of URLs, I can replace my get URL statement with promise capital P dot all.
>
> **[3:12](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=192)** So, I need to pass an array that contains a promise for each one of these URLs.
>
> **[3:18](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=198)** And so, I'm going to create an array, and then I'm just going to use get URLs, square bracket zero, get URLs, square bracket one.
>
> **[3:36](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=216)** And the same thing for the other two.
>
> **[3:39](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=219)** So, I'm passing in an array of promises and then for my then, instead of response, I'm going to change it to responses, just so I'm being clear and a little bit self-documenting that I'm expecting back an array.
>
> **[3:54](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=234)** And within that anonymous function, I want to again use the map method.
>
> **[4:01](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=241)** So, I'm going to return responses dot map.
>
> **[4:07](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=247)** I'm going to pass in a function using the parameter name response, and then I'm going to grab the line we had in here before.
>
> **[4:17](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=257)** Within my map method, I need to return, and I'm simply going to return the result of running that response through the success handler function.
>
> **[4:29](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=269)** And so, this is going to give me a template literal that builds out the data I got back into a chunk of the dom, and then I'm going to return the array containing all four of those template literals.
>
> **[4:45](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=285)** And that return is going to pass it on down the chain.
>
> **[4:49](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=289)** And so here, I actually want another then statement.
>
> **[4:54](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=294)** So, I'm going to do another dot then.
>
> **[4:57](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=297)** And in my anonymous function, I'm going to use the word literals as my parameter name.
>
> **[5:06](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=306)** And so, I'm getting an array of template literals here.
>
> **[5:09](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=309)** And so, I'm going to use that weather div reference.
>
> **[5:18](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=318)** And I want to set its inner HTML.
>
> **[5:21](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=321)** And the first thing I want of that inner HTML is that H one element we had earlier.
>
> **[5:25](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=325)** I just want that once.
>
> **[5:27](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=327)** So, a template literal, which is an H one containing the word weather, and then a reference to literals dot join with no space.
>
> **[5:43](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=343)** And so, that's going to pull together all four of those array values, those template literals, join them up with what I've specified here and specify all of that as the inner HTML for the weather div.
>
> **[5:54](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=354)** So, that gets all of our data for all four of those requests into the dom.
>
> **[6:00](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=360)** I still have the same fail handler.
>
> **[6:03](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=363)** And then my finally function is going to make that weather div visible.
>
> **[6:08](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=368)** So, saving those changes.
>
> **[6:10](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=370)** And now switching back to my page and I have weather for four locations all within that same weather area.
>
> **[6:21](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=381)** So we can see weather for Los Angeles, San Francisco, Lone Pine near Mount Whitney and Mariposa near Yosemite.
>
> **[6:28](https://www.linkedin.com/learning/javascript-async/implementing-the-all-method-for-executing-multiple-promises?u=76281980&t=388)** And so, that promises dot all method allows us to make all those requests and wait for that processing until all of those requests have returned.

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), pass (3), for. (1), this. (1), const (1)
> **Env Vars:** api (3), url (3), html (3)
> **Exercise Files:** template (6)
> **CLI Commands:** make (4)
> **Definitions:** is a  (1), is an  (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Making code backward-compatible with polyfill
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-async/making-code-backward-compatible-with-polyfill?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/javascript-async/making-code-backward-compatible-with-polyfill?u=76281980&t=1)** - [Instructor] Promises became part of JavaScript in 2015 and are supported by all modern browsers.
>
> **[0:07](https://www.linkedin.com/learning/javascript-async/making-code-backward-compatible-with-polyfill?u=76281980&t=7)** However, code that uses promises won't work on older browsers or on Opera Mini.
>
> **[0:14](https://www.linkedin.com/learning/javascript-async/making-code-backward-compatible-with-polyfill?u=76281980&t=14)** And unlike a lot of other modern JavaScript syntax, promises can't be simply transpired by a tool like Babel.
>
> **[0:23](https://www.linkedin.com/learning/javascript-async/making-code-backward-compatible-with-polyfill?u=76281980&t=23)** Instead, a number of polyfills are available to replicate promise's syntax on browsers that don't support it natively.
>
> **[0:31](https://www.linkedin.com/learning/javascript-async/making-code-backward-compatible-with-polyfill?u=76281980&t=31)** This polyfill written by Taylor Hakes makes a minified version available via CDN.
>
> **[0:40](https://www.linkedin.com/learning/javascript-async/making-code-backward-compatible-with-polyfill?u=76281980&t=40)** So I'm going to copy that.
>
> **[0:42](https://www.linkedin.com/learning/javascript-async/making-code-backward-compatible-with-polyfill?u=76281980&t=42)** And then in my editor, I'm actually going to work with the HTML file.
>
> **[0:49](https://www.linkedin.com/learning/javascript-async/making-code-backward-compatible-with-polyfill?u=76281980&t=49)** And in this file, I have my JavaScript files in the head section, and I need to make sure to insert the code for the promises polyfill before the code for my Ajax, which uses it.
>
> **[1:01](https://www.linkedin.com/learning/javascript-async/making-code-backward-compatible-with-polyfill?u=76281980&t=61)** So I'm going to insert that new script element on the line before the script element that references ajax.js.
>
> **[1:10](https://www.linkedin.com/learning/javascript-async/making-code-backward-compatible-with-polyfill?u=76281980&t=70)** So I'm going to save that and going back to my browser.
>
> **[1:15](https://www.linkedin.com/learning/javascript-async/making-code-backward-compatible-with-polyfill?u=76281980&t=75)** There's no change.
>
> **[1:18](https://www.linkedin.com/learning/javascript-async/making-code-backward-compatible-with-polyfill?u=76281980&t=78)** There's nothing in the console.
>
> **[1:20](https://www.linkedin.com/learning/javascript-async/making-code-backward-compatible-with-polyfill?u=76281980&t=80)** So the polyfill doesn't change anything in a modern browser, but it will make the code we've written work for users of older browsers as well.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Env Vars:** cdn (1), html (1)
> **File Paths:** ajax.js (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)


### 3. Programming Asynchronously with Async/Await

#### Understanding the async/await model
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-async/understanding-the-async-await-model-14344029?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/understanding-the-async-await-model-14344029?u=76281980&t=0)** - [Instructor] Promises are a clear step forward from callbacks in terms of code organization.
>
> **[0:06](https://www.linkedin.com/learning/javascript-async/understanding-the-async-await-model-14344029?u=76281980&t=6)** However, especially for a developer who doesn't use them all the time, it can still be a challenge to follow what's happening in a promise chain.
>
> **[0:14](https://www.linkedin.com/learning/javascript-async/understanding-the-async-await-model-14344029?u=76281980&t=14)** In particular, because it requires identifying where the code is asynchronous and where it's not.
>
> **[0:20](https://www.linkedin.com/learning/javascript-async/understanding-the-async-await-model-14344029?u=76281980&t=20)** An even newer way to work with asynchronous code became part of JavaScript in 2017.
>
> **[0:26](https://www.linkedin.com/learning/javascript-async/understanding-the-async-await-model-14344029?u=76281980&t=26)** This syntax uses the async and await keywords to enable writing asynchronous code that closely resembles synchronous code patterns.
>
> **[0:35](https://www.linkedin.com/learning/javascript-async/understanding-the-async-await-model-14344029?u=76281980&t=35)** For this reason, code using async and await is widely recognized as being easier for humans to parse than code using promises.
>
> **[0:45](https://www.linkedin.com/learning/javascript-async/understanding-the-async-await-model-14344029?u=76281980&t=45)** You use the async keyword as part of a function declaration or expression to specify that the function should be executed asynchronously.
>
> **[0:54](https://www.linkedin.com/learning/javascript-async/understanding-the-async-await-model-14344029?u=76281980&t=54)** That is it should not block the parsers main process.
>
> **[0:59](https://www.linkedin.com/learning/javascript-async/understanding-the-async-await-model-14344029?u=76281980&t=59)** Within an asynchronous function, you use the await keyword before a statement that returns a promise to indicate that the function should stop and wait for the result of the promise before proceeding.
>
> **[1:13](https://www.linkedin.com/learning/javascript-async/understanding-the-async-await-model-14344029?u=76281980&t=73)** It's important to understand that aside from a couple details, async and await are essentially just syntactic sugar, meaning that they simply provide shorthand syntax for writing code using an existing coding practice.
>
> **[1:28](https://www.linkedin.com/learning/javascript-async/understanding-the-async-await-model-14344029?u=76281980&t=88)** In this case, async and await code creates and works with promises under the hood.
>
> **[1:35](https://www.linkedin.com/learning/javascript-async/understanding-the-async-await-model-14344029?u=76281980&t=95)** So for many situations, you can write simpler code using async and await instead of expressly writing promises and still get the same results.

> [!info]- Semantic Content
>
> **Code Keywords:** async (6), await (6), function (4), case, (1)
> **Speakers:** - [instructor] (1)

#### Using async functions with await statements
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=0)** - [Instructor] On our Explore California site, we have code that uses promises to make requests for weather information at four locations.
>
> **[0:08](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=8)** And then, when all requests are completed to use the return data, to render the information as part of the DOM.
>
> **[0:15](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=15)** We can use async and await in place of the chain promise pattern here, to make the code look more like the synchronous functions that are common in JavaScript.
>
> **[0:25](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=25)** So I'm going to start by commenting out my promise.
>
> **[0:29](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=29)** And I want to make sure not to comment out that last line because that last line closes up my event listener for the page load.
>
> **[0:39](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=39)** And so below my promise, I want to rewrite this same functionality using an asynchronous function with some await statements.
>
> **[0:47](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=47)** So, I need to create an asynchronous function, but I don't need to reference it later.
>
> **[0:52](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=52)** So I'm going to go ahead and create an IIFE.
>
> **[0:53](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=53)** I'm going to instantly invoke that function.
>
> **[0:56](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=56)** So I'm going to start by declaring an async function.
>
> **[1:03](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=63)** And I'm making this an anonymous function.
>
> **[1:05](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=65)** It doesn't need a name.
>
> **[1:07](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=67)** And so to make this instantly invoked, put that parenth at the beginning, put another one at the end, followed by a pair.
>
> **[1:15](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=75)** And so now everything in here will be an async function.
>
> **[1:17](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=77)** It will also be immediately invoked when it's declared.
>
> **[1:23](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=83)** And so the first thing I want to do here, is create an array called responses.
>
> **[1:27](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=87)** And that's going to be an empty array that I'm going to use to be able to compile the results from my get requests and then work with them.
>
> **[1:39](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=99)** So I could work with promise dot all in here, but I'd rather totally take out the promise syntax and just deal with some very basic async and await statements so we can get a flavor for that.
>
> **[1:48](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=108)** So, we're going to go responses dot push.
>
> **[1:52](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=112)** And then I want to make a call to the get function, passing it the first URL in my URLs array.
>
> **[2:01](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=121)** And so to do that, I'm just going to type get URLs, square back at zero.
>
> **[2:09](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=129)** And now what I want, is for my async function to wait for the result of that get request, before it moves on to other code.
>
> **[2:19](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=139)** And to do that, I just preface the get call with await.
>
> **[2:25](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=145)** And so this is going to grab the first URL in my array, which will be for Los Angeles.
>
> **[2:32](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=152)** It's going to send it to the get function that we've been using, that we built.
>
> **[2:36](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=156)** And then when it gets data back, it's going to push that data to the responses array, and then it will move onto the next line.
>
> **[2:44](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=164)** So I just want to repeat that three times for all the items in that array.
>
> **[2:48](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=168)** So I'm just going to copy and paste that statement three times and change my index number.
>
> **[2:57](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=177)** And clearly I could do this with some sort of a loop, but in order to really see how async and await are working here, I think it's useful to make these individual statements and see how they're executed.
>
> **[3:08](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=188)** So next, we're going to create another variable called literals.
>
> **[3:13](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=193)** And the value here is going to use the same responses dot map code that we used above, in our first then statement.
>
> **[3:21](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=201)** So I'm just going to copy and paste that here.
>
> **[3:25](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=205)** I need to un-comment these lines and get the indents looking better.
>
> **[3:37](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=217)** And so this is going to create a new array based on our existing array of responses.
>
> **[3:45](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=225)** It's going to run those through the success handler, and then that literals array is going to contain all of our template literals.
>
> **[3:53](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=233)** And then we need to do those little cleanup tasks, so I'm going to grab the statement from the next then function, paste that in here, get the indents, all ironed out.
>
> **[4:07](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=247)** So here we are adding that weather heading, followed by joining all of the literals we just generated.
>
> **[4:15](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=255)** And then the last thing we need to do is actually display this in the DOM.
>
> **[4:21](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=261)** (keyboard typing) And so saving that, going to switch over to the browser.
>
> **[4:35](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=275)** And there we are.
>
> **[4:36](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=276)** We got the same results here that we had before, but this time we are using an async function instead.
>
> **[4:46](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=286)** And so what's happening here in our function, is a combination of synchronous and asynchronous statements.
>
> **[4:52](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=292)** So we're starting out with the synchronous statement, just creating an array.
>
> **[4:56](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=296)** Now these next four statements all involve an asynchronous request through this get function.
>
> **[5:03](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=303)** And so all four of these await statements will start at the same time.
>
> **[5:09](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=309)** So they're all going to run in parallel.
>
> **[5:12](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=312)** But then we get to our next synchronous statement, and that is what's going to wait for the results of all of these other statements.
>
> **[5:20](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=320)** And so once we get responses from all four of those requests, then the synchronous code here is going to run.
>
> **[5:27](https://www.linkedin.com/learning/javascript-async/using-async-functions-with-await-statements?u=76281980&t=327)** Here and here, and then we're all done.

> [!info]- Semantic Content
>
> **Code Keywords:** function (13), async (7), await (6), switch (1)
> **CLI Commands:** make (6)
> **Env Vars:** dom (2), url (2), iife (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (keyboard typing) (1)

#### Using statements to handle errors in async/await code
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-async/using-statements-to-handle-errors-in-async-await-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/using-statements-to-handle-errors-in-async-await-code?u=76281980&t=0)** - [Instructor] Async in await statements don't come with their own error handling methods like promises do.
>
> **[0:05](https://www.linkedin.com/learning/javascript-async/using-statements-to-handle-errors-in-async-await-code?u=76281980&t=5)** But the async and await structure lets us write code that looks a lot like synchronous JavaScript.
>
> **[0:11](https://www.linkedin.com/learning/javascript-async/using-statements-to-handle-errors-in-async-await-code?u=76281980&t=11)** And it turns out that it also works just fine with standard JavaScript error handling statements.
>
> **[0:18](https://www.linkedin.com/learning/javascript-async/using-statements-to-handle-errors-in-async-await-code?u=76281980&t=18)** You include your statements in a try block and then add a catch block afterward that specifies a parameter name for the error object and includes code to handle the error.
>
> **[0:30](https://www.linkedin.com/learning/javascript-async/using-statements-to-handle-errors-in-async-await-code?u=76281980&t=30)** So for our Explorer California site, I can update the async function to handle errors.
>
> **[0:38](https://www.linkedin.com/learning/javascript-async/using-statements-to-handle-errors-in-async-await-code?u=76281980&t=38)** And so first off, I'm going to add a try block and I want to move all of my codes so far inside the function.
>
> **[0:50](https://www.linkedin.com/learning/javascript-async/using-statements-to-handle-errors-in-async-await-code?u=76281980&t=50)** I want to move that actually inside the try block.
>
> **[0:54](https://www.linkedin.com/learning/javascript-async/using-statements-to-handle-errors-in-async-await-code?u=76281980&t=54)** So leaving those last two lines down here that close the async function and that close our event listener.
>
> **[1:02](https://www.linkedin.com/learning/javascript-async/using-statements-to-handle-errors-in-async-await-code?u=76281980&t=62)** And so now all of that code, including the await statements is in the try block.
>
> **[1:09](https://www.linkedin.com/learning/javascript-async/using-statements-to-handle-errors-in-async-await-code?u=76281980&t=69)** And so after the try block, I'm going to add a catch block.
>
> **[1:16](https://www.linkedin.com/learning/javascript-async/using-statements-to-handle-errors-in-async-await-code?u=76281980&t=76)** It's going to catch the status.
>
> **[1:19](https://www.linkedin.com/learning/javascript-async/using-statements-to-handle-errors-in-async-await-code?u=76281980&t=79)** And just like we did above, we're going to call the fail handler.
>
> **[1:27](https://www.linkedin.com/learning/javascript-async/using-statements-to-handle-errors-in-async-await-code?u=76281980&t=87)** Passing at the status.
>
> **[1:30](https://www.linkedin.com/learning/javascript-async/using-statements-to-handle-errors-in-async-await-code?u=76281980&t=90)** So in promises, the catch and finally methods are based on the more generic JavaScript methods for error handling.
>
> **[1:38](https://www.linkedin.com/learning/javascript-async/using-statements-to-handle-errors-in-async-await-code?u=76281980&t=98)** And so we can also add a finally clause to our async function.
>
> **[1:48](https://www.linkedin.com/learning/javascript-async/using-statements-to-handle-errors-in-async-await-code?u=76281980&t=108)** And so I can just grab this code in line 98 that displays that weather div and move it down into the finally block.
>
> **[1:58](https://www.linkedin.com/learning/javascript-async/using-statements-to-handle-errors-in-async-await-code?u=76281980&t=118)** So what happens is both after the try block and after the catch block, no matter whether or not there's an error involved.
>
> **[2:08](https://www.linkedin.com/learning/javascript-async/using-statements-to-handle-errors-in-async-await-code?u=76281980&t=128)** And so saving that, I'm going to switch over to my browser, I have all my weather coming in.
>
> **[2:16](https://www.linkedin.com/learning/javascript-async/using-statements-to-handle-errors-in-async-await-code?u=76281980&t=136)** So the changes we made haven't affected our functionality.
>
> **[2:19](https://www.linkedin.com/learning/javascript-async/using-statements-to-handle-errors-in-async-await-code?u=76281980&t=139)** And then going back to the code, I'm going to swap in my empty API key to ensure we have errors.
>
> **[2:31](https://www.linkedin.com/learning/javascript-async/using-statements-to-handle-errors-in-async-await-code?u=76281980&t=151)** And now we have the fallback image.
>
> **[2:35](https://www.linkedin.com/learning/javascript-async/using-statements-to-handle-errors-in-async-await-code?u=76281980&t=155)** And checking out the console, we have an error from the parser and we have the error that our code generated on line 48.
>
> **[2:44](https://www.linkedin.com/learning/javascript-async/using-statements-to-handle-errors-in-async-await-code?u=76281980&t=164)** And so notice here, we only have one error message.
>
> **[2:48](https://www.linkedin.com/learning/javascript-async/using-statements-to-handle-errors-in-async-await-code?u=76281980&t=168)** So since we're not doing a group of get calls, the first one of these that fails kicks us down into the catch clause.
>
> **[2:58](https://www.linkedin.com/learning/javascript-async/using-statements-to-handle-errors-in-async-await-code?u=76281980&t=178)** And so we've an async function to create some asynchronous requests.
>
> **[3:04](https://www.linkedin.com/learning/javascript-async/using-statements-to-handle-errors-in-async-await-code?u=76281980&t=184)** We've used a catch statement to deal with errors and a finally clause to clean things up no matter which one of those previous blocks executed.

> [!info]- Semantic Content
>
> **Code Keywords:** async (6), function (5), await (3), switch (1)
> **Env Vars:** api (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Making async/await code backward compatible with polyfill
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-async/making-async-await-code-backward-compatible-with-polyfill?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/making-async-await-code-backward-compatible-with-polyfill?u=76281980&t=0)** - [Instructor] The Async and Await construction became part of JavaScript in 2017.
>
> **[0:05](https://www.linkedin.com/learning/javascript-async/making-async-await-code-backward-compatible-with-polyfill?u=76281980&t=5)** And it's supported by all modern browsers.
>
> **[0:09](https://www.linkedin.com/learning/javascript-async/making-async-await-code-backward-compatible-with-polyfill?u=76281980&t=9)** Like Promises, this code won't work on older browsers or on Opera Mini.
>
> **[0:14](https://www.linkedin.com/learning/javascript-async/making-async-await-code-backward-compatible-with-polyfill?u=76281980&t=14)** But the process of making your Async and Await code backward compatible is a bit more complicated than for Promises.
>
> **[0:22](https://www.linkedin.com/learning/javascript-async/making-async-await-code-backward-compatible-with-polyfill?u=76281980&t=22)** Because Async and Await is based on Promises under the hood, it requires a polyfill for Promises to replicate promise syntax on browsers that don't support it.
>
> **[0:33](https://www.linkedin.com/learning/javascript-async/making-async-await-code-backward-compatible-with-polyfill?u=76281980&t=33)** Our code for the Explore California site already includes a reference to this polyfill to make the earlier version of the code, using the promise constructor backwards compatible.
>
> **[0:43](https://www.linkedin.com/learning/javascript-async/making-async-await-code-backward-compatible-with-polyfill?u=76281980&t=43)** But this promise polyfill by itself won't make Async and Await code work on older browsers.
>
> **[0:50](https://www.linkedin.com/learning/javascript-async/making-async-await-code-backward-compatible-with-polyfill?u=76281980&t=50)** That's because the Async and Await construction first has to be transpiled into a Promises construction, using a tool like Babel.
>
> **[0:59](https://www.linkedin.com/learning/javascript-async/making-async-await-code-backward-compatible-with-polyfill?u=76281980&t=59)** Now transpiling is generally part of a tool chain that's configured on a developer's machine, but we can get a flavor for what transpiled Async and Await code looks like, by using a demo version of Babel Rebel online.
>
> **[1:13](https://www.linkedin.com/learning/javascript-async/making-async-await-code-backward-compatible-with-polyfill?u=76281980&t=73)** So, in my code, I'm just going to copy my Async function.
>
> **[1:19](https://www.linkedin.com/learning/javascript-async/making-async-await-code-backward-compatible-with-polyfill?u=76281980&t=79)** So in the start file here, that's just lines 87 through 103, and then on the live version of Babel Rebel, I'm going to click in the left pane and paste.
>
> **[1:32](https://www.linkedin.com/learning/javascript-async/making-async-await-code-backward-compatible-with-polyfill?u=76281980&t=92)** I'm going to accept all of those defaults on the left side, and on the right side, I get a backward compatible transpiled version of the code.
>
> **[1:41](https://www.linkedin.com/learning/javascript-async/making-async-await-code-backward-compatible-with-polyfill?u=76281980&t=101)** Now there's a lot going on here.
>
> **[1:43](https://www.linkedin.com/learning/javascript-async/making-async-await-code-backward-compatible-with-polyfill?u=76281980&t=103)** This has been architected to replicate everything that we're expecting out of our Async and Await code.
>
> **[1:49](https://www.linkedin.com/learning/javascript-async/making-async-await-code-backward-compatible-with-polyfill?u=76281980&t=109)** But notice that this is based on Promises, and so, our Async and Await code has been rewritten as Promises, and then when this code is executed in conjunction with the Promise polyfill, it does the same thing that our original Async function can do, in a modern browser.

> [!info]- Semantic Content
>
> **Code Keywords:** async (10), await (8), function (2)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Programming Asynchronously with Web Workers

#### What is a web worker?
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-async/what-is-a-web-worker-14338950?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/what-is-a-web-worker-14338950?u=76281980&t=0)** - [Instructor] JavaScript includes a number of features that enable you to program asynchronously, including callbacks, promises and async/await, but all of these async processes still rely on the main browser thread to execute their code after any delay has taken place, such as a set timeout or a response to an AJAX request.
>
> **[0:21](https://www.linkedin.com/learning/javascript-async/what-is-a-web-worker-14338950?u=76281980&t=21)** The traditional asynchronous model for JavaScript simply rearranges the order in which code is executed on a single thread to avoid blocking, but features that use this model remain limited by the fact, that with a single thread, the browser can do only one thing at a time.
>
> **[0:41](https://www.linkedin.com/learning/javascript-async/what-is-a-web-worker-14338950?u=76281980&t=41)** Modern browsers support some newer additions to JavaScript that make use of additional threads.
>
> **[0:46](https://www.linkedin.com/learning/javascript-async/what-is-a-web-worker-14338950?u=76281980&t=46)** One of these newer additions is web workers.
>
> **[0:49](https://www.linkedin.com/learning/javascript-async/what-is-a-web-worker-14338950?u=76281980&t=49)** A web worker enables you to specify code that will be executed in its own thread on the processor separate from the browser thread.
>
> **[0:57](https://www.linkedin.com/learning/javascript-async/what-is-a-web-worker-14338950?u=76281980&t=57)** This enables you to make your code asynchronous and also allows your app to do multiple things at once by leveraging one or more additional processor threads.
>
> **[1:09](https://www.linkedin.com/learning/javascript-async/what-is-a-web-worker-14338950?u=76281980&t=69)** With a web worker, your app sends a message to the code running in the additional thread.
>
> **[1:14](https://www.linkedin.com/learning/javascript-async/what-is-a-web-worker-14338950?u=76281980&t=74)** This code does the requested work on its thread, then responds with its own message, which often contains data that's then used in your app.
>
> **[1:23](https://www.linkedin.com/learning/javascript-async/what-is-a-web-worker-14338950?u=76281980&t=83)** Web workers are most useful in an app that needs to do complex processing, such as involved mathematical operations.
>
> **[1:30](https://www.linkedin.com/learning/javascript-async/what-is-a-web-worker-14338950?u=76281980&t=90)** Sending a task like this to a web worker frees up the browser thread so your user interface remains responsive.

> [!info]- Semantic Content
>
> **Code Keywords:** async (2), await (1), interface (1)
> **CLI Commands:** make (2)
> **Analogies:** such as (2)
> **Env Vars:** ajax (1)
> **Speakers:** - [instructor] (1)

#### Creating a web worker
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=0)** - To create a web worker, you use the worker constructor.
>
> **[0:03](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=3)** You assign the worker to a variable, so you can reference it in other parts of your code.
>
> **[0:08](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=8)** The worker constructor requires a single argument, which is a reference to a script file containing the code that should be executed by the worker.
>
> **[0:16](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=16)** When this statement is executed, a new thread is created for the code in the specified file.
>
> **[0:22](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=22)** I've started building out a new feature for the Explorer California site.
>
> **[0:26](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=26)** Users can pick a photo from an image gallery, and then manipulate it using a few photo filters.
>
> **[0:33](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=33)** Eventually, I imagine allowing them to add text, and share the image they've created, like a postcard.
>
> **[0:39](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=39)** But, these basic features represent my first milestone.
>
> **[0:43](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=43)** Each of these filter buttons calls a function that takes the pixels of the current selected image, and modifies them based on the relevant algorithm.
>
> **[0:51](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=51)** Image manipulation can require a significant processing power, and especially on older computers, or mobile devices, this work might be enough to slow the browser down.
>
> **[1:00](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=60)** One alternative would be to send the data to the server and have the manipulation performed there.
>
> **[1:05](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=65)** But, Ajax requests generally take a lot of time, and can be unpredictable.
>
> **[1:10](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=70)** So the browser is going to make more sense here.
>
> **[1:12](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=72)** Right now, the app seems pretty responsive.
>
> **[1:15](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=75)** And, if I open up my console, and go to the console, and I have logging turned on so I can see exactly how long each filtering step takes.
>
> **[1:26](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=86)** And, it's not very long.
>
> **[1:27](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=87)** I'm on a pretty recent computer, and both computer hardware, and modern browsers, are optimized for this sort of work.
>
> **[1:36](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=96)** Now back in my code, I've included a function called delay; which, just incorporates a delay, using a while statement that does nothing to allow me to specify a certain number of milliseconds, I'd like to wait before the next thing happens.
>
> **[1:50](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=110)** So this is essentially allowing me to create a synchronous delay, and forcing everything to wait.
>
> **[1:56](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=116)** In essence, I'm creating a block.
>
> **[1:58](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=118)** So, I want to go ahead and call this delay function within each of my three algorithm functions.
>
> **[2:05](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=125)** So, in gray scale image, right before that return statement, I'm going to call delay and send it a thousand.
>
> **[2:12](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=132)** So that's a thousand milliseconds or a one-second delay.
>
> **[2:17](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=137)** And, likewise, for the brightness image functions, delay 1000, and for threshold image, right before that return statement, delay 1000.
>
> **[2:29](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=149)** Now, I already have this running, using live server so I can switch back to my browser.
>
> **[2:34](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=154)** And these changes are reflected now.
>
> **[2:38](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=158)** So if I click gray scale, it takes a second; Then, I see that filter applied, and I can see that instead of eight milliseconds, it's 1,008 milliseconds because it includes that delay.
>
> **[2:48](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=168)** And likewise, I can hit brightness, threshold, looks like the brightness is not incorporating the filter.
>
> **[2:56](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=176)** And that's because I put that delay in (brief pause) after the return statement. So let me save that.
>
> **[3:04](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=184)** Double-check the brightness now has a delay.
>
> **[3:07](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=187)** It does, same for threshold, and for gray scale.
>
> **[3:10](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=190)** So now that I'm seeing this lag in my user interface, I have a delay after I click things.
>
> **[3:16](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=196)** And so I can actually queue things up a little bit by clicking a few of these filter buttons in a row, and notice that the UI doesn't respond.
>
> **[3:23](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=203)** Also, if I click some images after that, the filtering all has to happen before the image changes take place.
>
> **[3:30](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=210)** So I want to rewrite this app, using a web worker.
>
> **[3:33](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=213)** With this delay, I can still expect the image processing to be slow.
>
> **[3:38](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=218)** And that simulates an older device, or a mobile device.
>
> **[3:41](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=221)** But moving that image processing work to a web worker will free that main thread to respond to the user for non processor, intensive tasks, like switching images, or simply updating the UI to show me which button I just clicked.
>
> **[3:54](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=234)** I've already created a file called, filter dash worker dot JS.
>
> **[3:59](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=239)** And this contains the functions for each of my filters, as well as the apply filter function.
>
> **[4:05](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=245)** So the guts of my photo manipulation work.
>
> **[4:09](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=249)** And so I'm going to start back in my filters dot JS file by commenting out those four functions.
>
> **[4:15](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=255)** And I also can comment out the delay function.
>
> **[4:18](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=258)** So I'm going to click above the delay function, go down past delay, gray scale image, brightness image, threshold image, and apply filter.
>
> **[4:27](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=267)** I'm going to hold shift and click to select all of that code.
>
> **[4:31](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=271)** And in visual studio code, I can press command slash, to just make a line comment out of each line of code in that section, and I'll save those changes.
>
> **[4:41](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=281)** And then I want to create a worker.
>
> **[4:43](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=283)** So I'm going to scroll to the top of my DOM content loaded section, and I'm going to add a new variable.
>
> **[4:52](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=292)** So below selected filter, I'm going to say, const worker equals new capital W worker.
>
> **[5:03](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=303)** And then the file that I want to reference is that filter worker dot JS file within the underscore script folder.
>
> **[5:10](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=310)** So that's underscore scripts slash filter dash worker dot JS.
>
> **[5:18](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=318)** So by assigning that worker to a variable, I'll be able to send a message to it.
>
> **[5:23](https://www.linkedin.com/learning/javascript-async/creating-a-web-worker-14341179?u=76281980&t=323)** And then I'll also be able to set up event listeners, so that my code can work with the response messages that come from that web worker.

> [!info]- Semantic Content
>
> **Code Keywords:** function (6), require (1), switch (1), let (1), interface (1)
> **CLI Commands:** make (2)
> **Env Vars:** dom (1)
> **Tools:** visual studio (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Prerequisites:** set up (1)

#### Sending data to a web worker
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=0)** - [Instructor] To use a Web Worker, you send it a message using the postMessage method.
>
> **[0:05](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=5)** The method simply passes data, which can range from a simple string or number to a collection, like an array or object.
>
> **[0:14](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=14)** Back in my filters.js file, I'm going to start by testing things out.
>
> **[0:19](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=19)** So near the top, immediately after my worker variable, I'm going to send a message.
>
> **[0:26](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=26)** And to do that, I reference that worker, that variable name that I created, and I use the postMessage method.
>
> **[0:33](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=33)** And I'm just going to pass text, hello worker.
>
> **[0:39](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=39)** And then after that, I'll add a console.log statement, just to say, message sent to worker.
>
> **[0:46](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=46)** Just to verify that I've reached that point in my code.
>
> **[0:49](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=49)** Now, after I send that message, I want to make sure that it actually got received.
>
> **[0:53](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=53)** And to do that, I need to go to the code for the worker itself.
>
> **[0:56](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=56)** And that's in filter-worker.JS.
>
> **[1:00](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=60)** Within the code for this worker, I can use this to refer to the worker itself.
>
> **[1:07](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=67)** And I can set up an event listener for the message event.
>
> **[1:10](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=70)** So I'm at the bottom of the file and I'm using this.addEventListener.
>
> **[1:16](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=76)** Listening for message.
>
> **[1:20](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=80)** And for my function, I'm going to be sure to grab that event object.
>
> **[1:24](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=84)** I'm going to console.log message received from main script.
>
> **[1:32](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=92)** That does not need this on it.
>
> **[1:34](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=94)** And then I'm going to console.log, event.data.
>
> **[1:45](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=105)** I can access the message data using the data property of the event object for the message event.
>
> **[1:51](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=111)** And I'm capturing that with that parameter name E.
>
> **[1:53](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=113)** So console.log.e.data here, actually lets me view the message itself.
>
> **[1:58](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=118)** So saving those changes.
>
> **[2:00](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=120)** I've got Live Server fired up in my browser.
>
> **[2:04](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=124)** And so when the page loaded, I got that log that says message sent to worker from filters.JS.
>
> **[2:10](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=130)** And then over in the filter worker, I've logged message received from main script and there's the text of the message, hello worker.
>
> **[2:18](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=138)** So I've successfully sent data from the main thread to the Web Worker, which is awesome.
>
> **[2:24](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=144)** Now obviously sending a throwaway string like this isn't especially useful, and I'm going to comment that out, but I can send all kinds of data.
>
> **[2:33](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=153)** In my filter.js file, the event listeners, further down for the gray scale button, the brightness button and the threshold button, all call the applyFilter function.
>
> **[2:45](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=165)** And they pass in the text of the filter that's been chosen, as well as the level value and an image object.
>
> **[2:54](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=174)** Now I've moved the applyFilter function to my Web Worker.
>
> **[2:57](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=177)** So in order to use it, I have to start by changing the event listeners, to send a message to the Web Worker with an object containing those three pieces of data as the content.
>
> **[3:08](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=188)** And so starting up in the event listener for the gray scale button, I'm going to comment out this results variable, which calls the applyFilter function as if it's in the current file.
>
> **[3:22](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=202)** And instead, I just want to say Worker.postMessage.
>
> **[3:27](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=207)** And I'm going to pass in an object.
>
> **[3:30](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=210)** And I'll have a key call filter, whose value is going to be the selected filter variable.
>
> **[3:37](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=217)** Key called level.
>
> **[3:39](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=219)** These values are going to be the level of variable and the key called image, whose value is going to be imageDataObj.
>
> **[3:54](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=234)** And I'll go ahead and copy that same code to my other two event listeners.
>
> **[4:00](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=240)** So again, in the brightness, commenting out results and adding in this new postMessage statement.
>
> **[4:07](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=247)** And likewise for the threshold button, going to comment out results and paste in that postMessage statement.
>
> **[4:18](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=258)** And so with that all saved, switching back to my browser.
>
> **[4:23](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=263)** If I click the gray scale button, I have an issue.
>
> **[4:26](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=266)** So let's go back and take a look at that.
>
> **[4:28](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=268)** When I click gray scale.
>
> **[4:32](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=272)** Now my error message says, results not defined.
>
> **[4:36](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=276)** And that's simply because I've got this displayed filtered image statement that need to comment out as well.
>
> **[4:44](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=284)** So let's do that here, as well as for the brightness button, and for the threshold button.
>
> **[4:52](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=292)** And we'll save that and we'll rerun it.
>
> **[4:57](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=297)** And now when I click the gray scale button, that worker logs the fact that I have sent over an object containing these three pieces of data.
>
> **[5:07](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=307)** So the next thing I want to do then, in my Worker, is to change what that message event listener does.
>
> **[5:13](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=313)** And so I can comment out what I've done so far within that event listener.
>
> **[5:21](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=321)** Instead, I'm going to create a variable called workerResult.
>
> **[5:28](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=328)** And I want to take those three pieces of data that I've received and pass them to the applyFilter function.
>
> **[5:35](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=335)** So I'm going to call, applyFilter.
>
> **[5:38](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=338)** and I'm going to pass event.data.filter, which is the first key in my object.
>
> **[5:44](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=344)** And then the second parameter event.data.level.
>
> **[5:47](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=347)** It's the second key.
>
> **[5:48](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=348)** And then event.data.image.
>
> **[5:52](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=352)** And so what this means is, that when I receive that data, I'm going to be running it through applyFilter.
>
> **[5:59](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=359)** And then I'll go ahead and console.log workerResult.
>
> **[6:07](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=367)** And we'll check out in the browser what happens.
>
> **[6:10](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=370)** So if I click gray scale, I get some image data.
>
> **[6:14](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=374)** If I click brightness, same thing.
>
> **[6:17](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=377)** And threshold, same thing.
>
> **[6:20](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=380)** So notice that the filtering is going on, so I can see the filters are actually being applied.
>
> **[6:24](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=384)** And the result of calling that applyFilter function is image data.
>
> **[6:30](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=390)** So I'm sending a request to the Web Worker in response to a user event on the main thread.
>
> **[6:36](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=396)** And the Web Worker is executing that task in a separate browser thread.
>
> **[6:41](https://www.linkedin.com/learning/javascript-async/sending-data-to-a-web-worker-14343037?u=76281980&t=401)** And that's amazing.

> [!info]- Semantic Content
>
> **Code Identifiers:** applyfilter (7), postmessage (5), workerresult (2), addeventlistener (1), imagedataobj (1)
> **Code Keywords:** function (6), pass (5), let (2), this. (1)
> **File Paths:** filters.js (2), filter-worker.js (1), filter.js (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Returning data from a web worker
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-async/returning-data-from-a-web-worker-14339799?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/returning-data-from-a-web-worker-14339799?u=76281980&t=0)** - [Instructor] Sending a message from the app to a Web Worker is only half the process.
>
> **[0:05](https://www.linkedin.com/learning/javascript-async/returning-data-from-a-web-worker-14339799?u=76281980&t=5)** After the Web Worker does its own processing, it needs to communicate the result back to the app.
>
> **[0:11](https://www.linkedin.com/learning/javascript-async/returning-data-from-a-web-worker-14339799?u=76281980&t=11)** To do this, the Web Worker uses the post message method, passing along data as the message.
>
> **[0:18](https://www.linkedin.com/learning/javascript-async/returning-data-from-a-web-worker-14339799?u=76281980&t=18)** The Web Worker code in my filter worker.js file is receiving a request from the app and calling the apply filter function, passing along the data it received.
>
> **[0:28](https://www.linkedin.com/learning/javascript-async/returning-data-from-a-web-worker-14339799?u=76281980&t=28)** I'm saving the result in the worker result variable.
>
> **[0:31](https://www.linkedin.com/learning/javascript-async/returning-data-from-a-web-worker-14339799?u=76281980&t=31)** To send this back to the app, I can simply call post message and pass the variable.
>
> **[0:38](https://www.linkedin.com/learning/javascript-async/returning-data-from-a-web-worker-14339799?u=76281980&t=38)** So right after my console.log statement, I'm going to say post message, worker result, and I'll go ahead and comment out that console.log statement.
>
> **[0:49](https://www.linkedin.com/learning/javascript-async/returning-data-from-a-web-worker-14339799?u=76281980&t=49)** Shouldn't need it anymore.
>
> **[0:51](https://www.linkedin.com/learning/javascript-async/returning-data-from-a-web-worker-14339799?u=76281980&t=51)** Then back in my filters.js file, I still am posting a message at the very beginning just saying hello worker, and I don't need that anymore, so I'm going to comment that out as well.
>
> **[1:02](https://www.linkedin.com/learning/javascript-async/returning-data-from-a-web-worker-14339799?u=76281980&t=62)** And then the place that I'm actually dispatching the messages to the Web Worker are in my three event listeners for my buttons.
>
> **[1:13](https://www.linkedin.com/learning/javascript-async/returning-data-from-a-web-worker-14339799?u=76281980&t=73)** Gray scale, brightness, and threshold buttons.
>
> **[1:17](https://www.linkedin.com/learning/javascript-async/returning-data-from-a-web-worker-14339799?u=76281980&t=77)** But the Web Worker's responses don't necessarily go back to the location where they were called.
>
> **[1:23](https://www.linkedin.com/learning/javascript-async/returning-data-from-a-web-worker-14339799?u=76281980&t=83)** Instead, I need to create an event listener in the app that listens for that same message event and works with the data I receive.
>
> **[1:32](https://www.linkedin.com/learning/javascript-async/returning-data-from-a-web-worker-14339799?u=76281980&t=92)** So at the bottom, right before that closing punctuation, I'm going to add a new event listener.
>
> **[1:39](https://www.linkedin.com/learning/javascript-async/returning-data-from-a-web-worker-14339799?u=76281980&t=99)** So that'll be worker.addEventListener.
>
> **[1:43](https://www.linkedin.com/learning/javascript-async/returning-data-from-a-web-worker-14339799?u=76281980&t=103)** I'm going to listen for a message.
>
> **[1:46](https://www.linkedin.com/learning/javascript-async/returning-data-from-a-web-worker-14339799?u=76281980&t=106)** And that function is again going to grab that event object.
>
> **[1:50](https://www.linkedin.com/learning/javascript-async/returning-data-from-a-web-worker-14339799?u=76281980&t=110)** And first I will console.log received data back from worker, and then I'm going to console.log e.data.
>
> **[2:03](https://www.linkedin.com/learning/javascript-async/returning-data-from-a-web-worker-14339799?u=76281980&t=123)** And checking back in my browser, I'm going to click one of the filter buttons, and after a second, and I see the message that I actually got that data back from the worker and that is logged from the filters.js file, so that's my app.
>
> **[2:18](https://www.linkedin.com/learning/javascript-async/returning-data-from-a-web-worker-14339799?u=76281980&t=138)** And then I also see that app data logged again from filters.js.
>
> **[2:22](https://www.linkedin.com/learning/javascript-async/returning-data-from-a-web-worker-14339799?u=76281980&t=142)** So that data's been communicated from filter worker to filters.js.
>
> **[2:29](https://www.linkedin.com/learning/javascript-async/returning-data-from-a-web-worker-14339799?u=76281980&t=149)** So next, I simply want to pass the results to the display filtered image function along with the rendering context.
>
> **[2:36](https://www.linkedin.com/learning/javascript-async/returning-data-from-a-web-worker-14339799?u=76281980&t=156)** So this is what I was doing earlier, the code for my three buttons before I replaced those with these calls to post message.
>
> **[2:45](https://www.linkedin.com/learning/javascript-async/returning-data-from-a-web-worker-14339799?u=76281980&t=165)** So I'm just going to copy one of those display filtered image statements.
>
> **[2:51](https://www.linkedin.com/learning/javascript-async/returning-data-from-a-web-worker-14339799?u=76281980&t=171)** Scrolling to the bottom in my message event listener, I'm going to add that in there.
>
> **[2:56](https://www.linkedin.com/learning/javascript-async/returning-data-from-a-web-worker-14339799?u=76281980&t=176)** I'm going to take that comment mark out of there.
>
> **[3:00](https://www.linkedin.com/learning/javascript-async/returning-data-from-a-web-worker-14339799?u=76281980&t=180)** So saving that, and then I'm going to test that in my browser.
>
> **[3:03](https://www.linkedin.com/learning/javascript-async/returning-data-from-a-web-worker-14339799?u=76281980&t=183)** So if I hit gray scale, I've got an issue, and that's because I am trying to use the word results, but that doesn't actually work, I have to reference the results that came back, and that's going to be e.data.
>
> **[3:18](https://www.linkedin.com/learning/javascript-async/returning-data-from-a-web-worker-14339799?u=76281980&t=198)** So I'm sending a context like I did before, but instead of having the name e.data for my data, I can just reference it directly in that event object.
>
> **[3:27](https://www.linkedin.com/learning/javascript-async/returning-data-from-a-web-worker-14339799?u=76281980&t=207)** So saving that change, back in my browser, I'm going to hit gray scale and I've got a gray scaled image.
>
> **[3:33](https://www.linkedin.com/learning/javascript-async/returning-data-from-a-web-worker-14339799?u=76281980&t=213)** Hit brightness, same thing.
>
> **[3:36](https://www.linkedin.com/learning/javascript-async/returning-data-from-a-web-worker-14339799?u=76281980&t=216)** I hit threshold, same thing.
>
> **[3:39](https://www.linkedin.com/learning/javascript-async/returning-data-from-a-web-worker-14339799?u=76281980&t=219)** And so I can see that the filtering's happening in filter worker, and that that data's coming back into filters.js and getting rendered.
>
> **[3:47](https://www.linkedin.com/learning/javascript-async/returning-data-from-a-web-worker-14339799?u=76281980&t=227)** So now let's challenge things a bit.
>
> **[3:49](https://www.linkedin.com/learning/javascript-async/returning-data-from-a-web-worker-14339799?u=76281980&t=229)** I'm going to click these filter buttons a few times quickly to get that few second delay, and notice that each time I click a button, I get that blue outline saying, you just clicked this.
>
> **[3:58](https://www.linkedin.com/learning/javascript-async/returning-data-from-a-web-worker-14339799?u=76281980&t=238)** I can also change images and they happen right away.
>
> **[4:01](https://www.linkedin.com/learning/javascript-async/returning-data-from-a-web-worker-14339799?u=76281980&t=241)** So the image processing is no longer blocking the main thread because that image processing has its own separate queue in the separate thread.
>
> **[4:10](https://www.linkedin.com/learning/javascript-async/returning-data-from-a-web-worker-14339799?u=76281980&t=250)** My code could use an additional update to account for this, because right now that queued image manipulation might overwrite the more recent image selection, but the Web Workers offload that heavy imaging processing task to a separate thread and they make my code more responsive, and that is a definite win.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), this, (2), pass (2), let (1), this. (1)
> **File Paths:** filters.js (5), worker.js (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** addeventlistener (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Identifying use cases for web workers
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-async/identifying-use-cases-for-web-workers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/identifying-use-cases-for-web-workers?u=76281980&t=0)** - [Instructor] The ability to create a shared worker was originally developed as a way to avoid duplicating resources that need to be shared by just sharing one extra thread.
>
> **[0:11](https://www.linkedin.com/learning/javascript-async/identifying-use-cases-for-web-workers?u=76281980&t=11)** However, if I check support on something like can I use, we can see that shared workers are not widely supported by modern browsers.
>
> **[0:20](https://www.linkedin.com/learning/javascript-async/identifying-use-cases-for-web-workers?u=76281980&t=20)** And in fact, support has been removed in some cases because shared workers were not widely used and they presented some architectural issues for browser makers.
>
> **[0:31](https://www.linkedin.com/learning/javascript-async/identifying-use-cases-for-web-workers?u=76281980&t=31)** A separate but related technology known as a service worker can perform some of what a shared worker was originally designed to do.
>
> **[0:40](https://www.linkedin.com/learning/javascript-async/identifying-use-cases-for-web-workers?u=76281980&t=40)** Like a web worker, a service worker runs in a separate thread, but instead of simply running code and sending a response back to the app, a service worker is optimized to make network requests, monitor responses, and work with those responses all in the background.
>
> **[0:57](https://www.linkedin.com/learning/javascript-async/identifying-use-cases-for-web-workers?u=76281980&t=57)** Another related feature is a WebSocket.
>
> **[1:00](https://www.linkedin.com/learning/javascript-async/identifying-use-cases-for-web-workers?u=76281980&t=60)** A WebSocket maintains a persistent connection with a server and listens for updates.
>
> **[1:05](https://www.linkedin.com/learning/javascript-async/identifying-use-cases-for-web-workers?u=76281980&t=65)** Unlike web workers and service workers, WebSockets do not run in their own threads.
>
> **[1:10](https://www.linkedin.com/learning/javascript-async/identifying-use-cases-for-web-workers?u=76281980&t=70)** As a result, they have direct access to the dom.
>
> **[1:13](https://www.linkedin.com/learning/javascript-async/identifying-use-cases-for-web-workers?u=76281980&t=73)** You can use a WebSocket to replace code that performs polling, that is setting up an Ajax request to run at a regular interval to check for changes on the server.
>
> **[1:23](https://www.linkedin.com/learning/javascript-async/identifying-use-cases-for-web-workers?u=76281980&t=83)** With an open socket, any changes are pushed and your code responds to them as events.
>
> **[1:30](https://www.linkedin.com/learning/javascript-async/identifying-use-cases-for-web-workers?u=76281980&t=90)** Like web workers, you can use service workers and WebSockets to build robust asynchronous code that optimizes your app's speed and responsiveness.

> [!info]- Semantic Content
>
> **Definitions:** known as (1), is a  (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Asynchronous coding experience
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-async/asynchronous-coding-experience?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-async/asynchronous-coding-experience?u=76281980&t=0)** - [Sasha] Thanks so much for joining me in this course.
>
> **[0:03](https://www.linkedin.com/learning/javascript-async/asynchronous-coding-experience?u=76281980&t=3)** You now have a fuller understanding of what asynchronous code does, what's going on under the hood in common asynchronous methods, and experience writing asynchronous code using a variety of modern JavaScript features.
>
> **[0:17](https://www.linkedin.com/learning/javascript-async/asynchronous-coding-experience?u=76281980&t=17)** To dig deeper into some more advanced JavaScript concepts check out courses on closures or prototypes.
>
> **[0:25](https://www.linkedin.com/learning/javascript-async/asynchronous-coding-experience?u=76281980&t=25)** If you want to learn more about using data from APIs in your apps explore courses on Ajax or HTTP.
>
> **[0:33](https://www.linkedin.com/learning/javascript-async/asynchronous-coding-experience?u=76281980&t=33)** Feel free to follow me online.
>
> **[0:35](https://www.linkedin.com/learning/javascript-async/asynchronous-coding-experience?u=76281980&t=35)** Now, take your skills and build something amazing.
>
> **[0:38](https://www.linkedin.com/learning/javascript-async/asynchronous-coding-experience?u=76281980&t=38)** Good luck!

> [!info]- Semantic Content
>
> **Env Vars:** http (1)
> **Speakers:** - [sasha] (1)


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