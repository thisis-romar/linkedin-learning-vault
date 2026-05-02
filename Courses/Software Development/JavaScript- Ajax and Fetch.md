---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: javascript-ajax-and-fetch-24655836
url: "https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836"
duration_minutes: 141
duration: 2h 21m
level: Intermediate
updated: 9/25/2024
learners: 34504
skills:
  - AJAX
  - JavaScript
  - Fetch
exercise_files: true
github: "https://github.com/LinkedInLearning/JavaScript-Ajax-and-Fetch-3809063/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQHzfsBPheRMHg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1724785196776?e=2147483647&amp;v=beta&amp;t=EGd0DJWCbYrFbKDaQRV1AWNwMUHdOBb9GcCn2TsYvVU"
linkedin_topic: Software Development
learning_paths:
  - '[[Explore Web Development with Vanilla JavaScript]]'
  - '[[Become a JavaScript Developer]]'
prev_courses:
  - '[[JSON Essential Training]]'
  - '[[JSON Essential Training]]'
next_courses:
  - '[[JavaScript- Service Workers]]'
  - '[[JavaScript- Modern Browser APIs]]'
path_nav: '[{"path":"Explore Web Development with Vanilla JavaScript","position":5,"total":8,"prev":"JSON Essential Training","next":"JavaScript- Service Workers"},{"path":"Become a JavaScript Developer","position":12,"total":13,"prev":"JSON Essential Training","next":"JavaScript- Modern Browser APIs"}]'
path_count: 2
tags:
  - course
  - topic/software-development
  - topic/web-development
  - topic/network-and-system-administration
  - skill/ajax
  - skill/javascript
  - skill/fetch
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/JavaScript-%20Ajax%20and%20Fetch.md)

![JavaScript: Ajax and Fetch](https://media.licdn.com/dms/image/v2/D4E0DAQHzfsBPheRMHg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1724785196776?e=2147483647&amp;v=beta&amp;t=EGd0DJWCbYrFbKDaQRV1AWNwMUHdOBb9GcCn2TsYvVU)

# JavaScript: Ajax and Fetch

> Ajax is a building block of the modern web. Ajax helps you communicate between your app and the server, and incorporate new content without reloading webpages—resulting in more interactive and high-performance apps. This course introduces both modern and legacy approaches for requesting and handling data and modifying webpage content with Ajax and vanilla JavaScript. JS expert Sasha Vodnik shows h

> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836) | 2h 21m | Intermediate | 35K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Your essential guide](#your-essential-guide)
  - [What you should know](#what-you-should-know)
  - [Setting up your environment](#setting-up-your-environment)
- [**1. Getting Started with AJAX**](#1-getting-started-with-ajax) (6 videos)
  - [What is AJAX?](#what-is-ajax)
  - [Understand asynchronous program flow](#understand-asynchronous-program-flow)
  - [Get an API key](#get-an-api-key)
  - [Research and create an AJAX request URL](#research-and-create-an-ajax-request-url)
  - [Challenge: Research an API and create a request URL](#challenge-research-an-api-and-create-a-request-url)
  - [Solution: Research an API and create a request URL](#solution-research-an-api-and-create-a-request-url)
- [**2. Working with the Fetch API**](#2-working-with-the-fetch-api) (5 videos)
  - [Understand the Fetch API](#understand-the-fetch-api)
  - [Create and test a Fetch request](#create-and-test-a-fetch-request)
  - [Handle basic Fetch errors](#handle-basic-fetch-errors)
  - [Challenge: Build a Fetch request](#challenge-build-a-fetch-request)
  - [Solution: Build a Fetch request](#solution-build-a-fetch-request)
- [**3. Modifying the DOM**](#3-modifying-the-dom) (9 videos)
  - [What is the DOM?](#what-is-the-dom)
  - [Select elements with vanilla JavaScript](#select-elements-with-vanilla-javascript)
  - [Request data in response to an event](#request-data-in-response-to-an-event)
  - [Add an event listener](#add-an-event-listener)
  - [Work with JSON data](#work-with-json-data)
  - [Modify form values with vanilla JavaScript](#modify-form-values-with-vanilla-javascript)
  - [Modify element content with vanilla JavaScript](#modify-element-content-with-vanilla-javascript)
  - [Challenge: Modify the DOM](#challenge-modify-the-dom)
  - [Solution: Modify the DOM](#solution-modify-the-dom)
- [**4. Working with the Axios Library**](#4-working-with-the-axios-library) (7 videos)
  - [Understand Axios](#understand-axios)
  - [Create an Axios request](#create-an-axios-request)
  - [Handle errors with Axios](#handle-errors-with-axios)
  - [Refactor parameters with Axios](#refactor-parameters-with-axios)
  - [Implement interceptors with Axios](#implement-interceptors-with-axios)
  - [Challenge: Build an Axios request](#challenge-build-an-axios-request)
  - [Solution: Build an Axios request](#solution-build-an-axios-request)
- [**5. Optimizing and Troubleshooting AJAX Requests**](#5-optimizing-and-troubleshooting-ajax-requests) (8 videos)
  - [Structure AJAX requests for performance](#structure-ajax-requests-for-performance)
  - [View requests and responses in the browser](#view-requests-and-responses-in-the-browser)
  - [Work with authorization errors](#work-with-authorization-errors)
  - [Work with malformed requests](#work-with-malformed-requests)
  - [Work with errors in Fetch](#work-with-errors-in-fetch)
  - [Provide error fallbacks](#provide-error-fallbacks)
  - [Challenge: Fix an AJAX request](#challenge-fix-an-ajax-request)
  - [Solution: Fix an AJAX request](#solution-fix-an-ajax-request)
- [**Conclusion**](#conclusion) (1 videos)
  - [Keep learning](#keep-learning)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Your essential guide](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/intro-video-to-be-renamed?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/intro-video-to-be-renamed?u=76281980&t=0)** Using [[AJAX]] effectively requires understanding different [[JavaScript]] syntaxes, as well as working with data and manipulating the contents of the browser window.
>
> **[0:09](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/intro-video-to-be-renamed?u=76281980&t=9)** In this course, we'll explore the most popular modern [[Coding Practices]].
>
> **[0:12](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/intro-video-to-be-renamed?u=76281980&t=12)** You'll be able to make API requests and incorporate the results into your apps, and secure your API keys in a proxy server.
>
> **[0:19](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/intro-video-to-be-renamed?u=76281980&t=19)** Do you want to build high performance interactive web apps?
>
> **[0:22](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/intro-video-to-be-renamed?u=76281980&t=22)** Let's go!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AJAX]] (1), [[JavaScript]] (1), [[Coding Practices]] (1)
> **Env Vars:** api (2)
> **CLI Commands:** make (1)

#### [What you should know](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-you-should-know?u=76281980&t=0)** This course assumes you have some experience coding in front end [[JavaScript]], as well as basic familiarity with HTTP requests and responses.
>
> **[0:08](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-you-should-know?u=76281980&t=8)** This course assumes you have some experience coding and front end JavaScript, as well as a basic familiarity with HTTP requests and responses.
>
> **[0:17](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-you-should-know?u=76281980&t=17)** If you don't have experience with JavaScript, a basic JavaScript course would be a great place to start. For basics on how data is exchanged between clients and servers Explore a course on HTTP.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (4)
> **Env Vars:** http (3)

#### [Setting up your environment](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/setting-up-your-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/setting-up-your-environment?u=76281980&t=0)** To work along with me on the files.
>
> **[0:02](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/setting-up-your-environment?u=76281980&t=2)** For this course you need three applications a web browser, a code editor, and a password manager.
>
> **[0:08](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/setting-up-your-environment?u=76281980&t=8)** Any major modern browser such as Chrome, Firefox, Edge, or Safari is fine for this course.
>
> **[0:14](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/setting-up-your-environment?u=76281980&t=14)** I'll be using Chrome in these videos, which is the most common browser in use today.
>
> **[0:19](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/setting-up-your-environment?u=76281980&t=19)** A number of great code editors are available, including both free and paid apps.
>
> **[0:24](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/setting-up-your-environment?u=76281980&t=24)** Any editor that lets you write and save code is fine for this course.
>
> **[0:28](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/setting-up-your-environment?u=76281980&t=28)** I use Visual Studio Code in these videos, which is a version of [[Microsoft]] Visual Studio created specifically for [[Web Development]].
>
> **[0:36](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/setting-up-your-environment?u=76281980&t=36)** Visual Studio Code is free and has [[Windows]], Mac, and [[Linux]] releases.
>
> **[0:41](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/setting-up-your-environment?u=76281980&t=41)** The code is available on [[GitHub]] and users can submit issues there as well.
>
> **[0:46](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/setting-up-your-environment?u=76281980&t=46)** I've turned on [[Microsoft Word|word]] wrap in my editor.
>
> **[0:49](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/setting-up-your-environment?u=76281980&t=49)** If you want to do the same, just open settings, search for word wrap and from the menu select on this ensures that long lines of code don't run off the screen.
>
> **[1:03](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/setting-up-your-environment?u=76281980&t=63)** I'm also using Extension. Live Server by Ritwik Day.
>
> **[1:09](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/setting-up-your-environment?u=76281980&t=69)** This extension is an HTTP server that you can launch with a single click that automatically opens the current [[HTML]] document in your default browser.
>
> **[1:19](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/setting-up-your-environment?u=76281980&t=79)** Testing [[AJAX]] code during development benefits from an HTTP server, and this one is really easy to use.
>
> **[1:26](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/setting-up-your-environment?u=76281980&t=86)** I recorded all the course content locally using Visual Studio Code.
>
> **[1:31](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/setting-up-your-environment?u=76281980&t=91)** You could also follow along using [[Codespaces]] from the GitHub repository.
>
> **[1:35](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/setting-up-your-environment?u=76281980&t=95)** If you use codespaces in the browser, note that the live server extension will open the Codespace folder contents in the browser instead of the HTML page itself.
>
> **[1:45](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/setting-up-your-environment?u=76281980&t=105)** So, for instance, if I have this HTML file open from folder five eight and I right click and say open with live server, it's going to open a separate tab, and it's going to show me the entire contents of my codespace.
>
> **[2:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/setting-up-your-environment?u=76281980&t=120)** Now I can still view that page preview, and all I need to do is navigate through the folder structure right here on the page.
>
> **[2:07](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/setting-up-your-environment?u=76281980&t=127)** So I know it was in chapter five and I was in five eight and I was in the begin folder.
>
> **[2:13](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/setting-up-your-environment?u=76281980&t=133)** And I want to see the contact.html file.
>
> **[2:16](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/setting-up-your-environment?u=76281980&t=136)** And there it is.
>
> **[2:17](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/setting-up-your-environment?u=76281980&t=137)** Working with APIs requires creating and storing API keys, which are sensitive data that's linked to you. To ensure these values remain private.
>
> **[2:27](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/setting-up-your-environment?u=76281980&t=147)** It's a good practice to save them in an application that provides secure storage.
>
> **[2:32](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/setting-up-your-environment?u=76281980&t=152)** In this course, I use Bitwarden.
>
> **[2:34](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/setting-up-your-environment?u=76281980&t=154)** In addition to storing passwords, it supports secure notes for storing any other character based data.
>
> **[2:40](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/setting-up-your-environment?u=76281980&t=160)** The free version of Bitwarden works fine for this course.
>
> **[2:45](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/setting-up-your-environment?u=76281980&t=165)** If you want to learn more about anything I use or talk about in this course, I encourage you to explore the library for a deeper dive on that topic.
>
> **[2:52](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/setting-up-your-environment?u=76281980&t=172)** Now let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (4), [[GitHub]] (2), [[Microsoft Word|Word]] (2), [[Codespaces]] (2), [[Microsoft]] (1)
> **Tools:** visual studio (4), github (2), firefox (1), safari (1)
> **Env Vars:** html (3), http (2), api (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** such as (1), for instance (1)
> **File Paths:** contact.html (1)
> **UI Navigation:** open the (1)
> **Best Practices:** good practice (1)


### 1. Getting Started with AJAX

[↑ Back to Table of Contents](#table-of-contents)

#### [What is AJAX?](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-ajax?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-ajax?u=76281980&t=0)** The dynamic nature of web apps and web pages is an integral feature of the modern web.
>
> **[0:05](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-ajax?u=76281980&t=5)** But this was not always the case.
>
> **[0:08](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-ajax?u=76281980&t=8)** In its early days, the web was composed of static pages.
>
> **[0:11](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-ajax?u=76281980&t=11)** Each page displayed only the content coded into its [[HTML]] document.
>
> **[0:16](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-ajax?u=76281980&t=16)** Changing the information displayed meant requesting and loading a different HTML document.
>
> **[0:21](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-ajax?u=76281980&t=21)** But new documents take time to load and to render.
>
> **[0:24](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-ajax?u=76281980&t=24)** What if we could instead simply request content and update the display of the current page?
>
> **[0:30](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-ajax?u=76281980&t=30)** In fact, this is exactly what [[AJAX]] lets us do.
>
> **[0:33](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-ajax?u=76281980&t=33)** A page that uses Ajax, which is most everything on the modern web, requests data in the background and then integrates it into the document displayed in the browser window.
>
> **[0:44](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-ajax?u=76281980&t=44)** Originally, Ajax was an acronym based on the fact that the process was asynchronous, was scripted with [[JavaScript]], and originally used XML as the data format for the new content.
>
> **[0:55](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-ajax?u=76281980&t=55)** Today, Ajax describes a more generic process, although JavaScript is still a core building block of Ajax, it's much more common to use JavaScript Object Notation or [[JSON]] for data exchange.
>
> **[1:08](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-ajax?u=76281980&t=68)** Ajax is at work any time you interact with a web page and the page changes to display data that was not present when it first loaded.
>
> **[1:16](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-ajax?u=76281980&t=76)** For instance, in many search engines, when I start typing a search in the search box the app sends what I've typed so far to the server, receives a set of likely search phrases based on that, and offers them to me in a context menu.
>
> **[1:30](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-ajax?u=76281980&t=90)** As I continue to type, these options change always based on what I've typed, but without loading a new HTML document.
>
> **[1:37](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-ajax?u=76281980&t=97)** Another place we often see Ajax is in feeds that use infinite scrolling.
>
> **[1:42](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-ajax?u=76281980&t=102)** This feature enables the feed to load just enough articles that a user can continue scrolling.
>
> **[1:47](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-ajax?u=76281980&t=107)** Notice that the scroll bar on the right shows I'm near the end of the page, but as I hit a certain point in the list, the page makes an Ajax request in the background for more articles, adds them to the bottom of the feed.
>
> **[1:59](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-ajax?u=76281980&t=119)** And now my scroll bar adjusts to show there are a lot more articles below.
>
> **[2:03](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-ajax?u=76281980&t=123)** This enables users to continue scrolling through a feed for as long as they want to, but ensures that the page does not request a lot of unnecessary data.
>
> **[2:11](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-ajax?u=76281980&t=131)** Instead, the data is requested only in chunks and only in response to the user's intent to continue scrolling.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AJAX]] (8), [[HTML]] (3), [[JavaScript]] (3), [[JSON]] (1)
> **Env Vars:** html (3), xml (1), json (1)
> **Definitions:** is an  (1)
> **Analogies:** for instance (1)

#### [Understand asynchronous program flow](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-asynchronous-program-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-asynchronous-program-flow?u=76281980&t=0)** A client can experience a lag between submitting a request for data and receiving the response.
>
> **[0:06](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-asynchronous-program-flow?u=76281980&t=6)** For this reason, it's important to structure code to minimize the impact of this potential delay on users.
>
> **[0:13](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-asynchronous-program-flow?u=76281980&t=13)** We can build program flow in [[JavaScript]] in two different ways.
>
> **[0:17](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-asynchronous-program-flow?u=76281980&t=17)** Synchronously and asynchronously.
>
> **[0:19](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-asynchronous-program-flow?u=76281980&t=19)** Using synchronous program flow code is executed in the order it appears in your JavaScript files.
>
> **[0:25](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-asynchronous-program-flow?u=76281980&t=25)** So here lines one through five of the code are executed first, followed by lines six through ten, and then lines 11 through 15 are executed next, matching the order of the statements in the code as written.
>
> **[0:37](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-asynchronous-program-flow?u=76281980&t=37)** In synchronous program flow, the browser parses and executes only one statement at a time.
>
> **[0:43](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-asynchronous-program-flow?u=76281980&t=43)** This results in our statements being executed in order.
>
> **[0:47](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-asynchronous-program-flow?u=76281980&t=47)** Synchronous program flow exhibits a behavior known as blocking, meaning that later statements are prevented from executing until earlier statements are finished.
>
> **[0:56](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-asynchronous-program-flow?u=76281980&t=56)** In many cases, this is what we want.
>
> **[0:58](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-asynchronous-program-flow?u=76281980&t=58)** For instance, a value needs to be calculated first before it can be used, but if an earlier statement may take a while to execute and statements that follow, don't rely on that earlier statement having finished, then synchronous program flow can needlessly slow down our apps.
>
> **[1:14](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-asynchronous-program-flow?u=76281980&t=74)** This is often the case with an [[AJAX]] request, which is why JavaScript treats an Ajax request as an asynchronous process by default, we want the client to make the Ajax request, but then be able to do other things like respond to user initiated events while waiting for the Ajax response.
>
> **[1:32](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-asynchronous-program-flow?u=76281980&t=92)** Otherwise, a slow response would essentially lock up our apps, which would create a bad experience that frustrates users.
>
> **[1:39](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-asynchronous-program-flow?u=76281980&t=99)** This is an example of asynchronous program flow, also known as asynchronous code or simply Async.
>
> **[1:45](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-asynchronous-program-flow?u=76281980&t=105)** Here, lines one through five of the code start execution, but these include some activity that's going to take a while.
>
> **[1:52](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-asynchronous-program-flow?u=76281980&t=112)** Now, technically JavaScript has only a single thread, but it does have a mechanism that allows some processes to execute in parallel while other things are going on.
>
> **[2:02](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-asynchronous-program-flow?u=76281980&t=122)** So here the first set of statements is moved into that parallel process, which continues executing even as the main program flow moves to the next set of statements.
>
> **[2:12](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-asynchronous-program-flow?u=76281980&t=132)** Now that main program flow continues synchronous execution.
>
> **[2:16](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-asynchronous-program-flow?u=76281980&t=136)** So it keeps moving through the remaining code while that first block of code is executing in parallel.
>
> **[2:21](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-asynchronous-program-flow?u=76281980&t=141)** Remember that synchronous code is executed only in the main program flow.
>
> **[2:26](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-asynchronous-program-flow?u=76281980&t=146)** While we've seen that asynchronous code is instead moved over to execute in parallel.
>
> **[2:31](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-asynchronous-program-flow?u=76281980&t=151)** This means that these different sets of statements are executed essentially simultaneously.
>
> **[2:37](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-asynchronous-program-flow?u=76281980&t=157)** The effect of this architecture is that asynchronous program flow lets us write code that's non-blocking.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (4), [[AJAX]] (4)
> **Definitions:** known as (2), is an  (1), means that (1)
> **CLI Commands:** make (1)
> **Analogies:** for instance (1)

#### [Get an API key](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=0)** In this course.
>
> **[0:01](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=1)** We'll start by improving the usability of the signup form for Explore California, a fictitious visitors bureau.
>
> **[0:07](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=7)** When a user enters a US address, city and state, I want the form to automatically look up the corresponding nine digit zip code and fill that in.
>
> **[0:16](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=16)** To do this, we'll make use of a web service.
>
> **[0:20](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=20)** A wide variety of web services make data available.
>
> **[0:23](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=23)** These include all sorts of subject areas, from weather to Star Wars character references.
>
> **[0:28](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=28)** Some are free, while others require payment.
>
> **[0:31](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=31)** The public API's [[GitHub]] account maintains a pretty extensive list of publicly available APIs, so I'm going to check in the geocoding section.
>
> **[0:39](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=39)** There's an index further on down the page, and I'll click on geocoding.
>
> **[0:45](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=45)** And we have a wide selection of services that can provide address information here.
>
> **[0:50](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=50)** A number of these are specific to country or focus on identifying locality information based on IP address, which is not what I'm after.
>
> **[0:59](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=59)** Now if I scroll through this, all these services at the very end, I see zippopotam or zippopotamus, which is a service I've used before.
>
> **[1:09](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=69)** So I'm going to check out the website and see if it might work.
>
> **[1:12](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=72)** The documentation for an API is a great place to find out what kind of data it can provide and what restrictions it places on your use.
>
> **[1:20](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=80)** The Zippopotam documentation is pretty straightforward.
>
> **[1:23](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=83)** The service is free, and we even have code samples to get us started in a bit.
>
> **[1:28](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=88)** We want to send an address, city and state and get a nine digit zip code back.
>
> **[1:34](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=94)** It looks like Zippopotam can take a city and state and give back a zip code, but not the full nine digit code that we're looking for, which relies on an address.
>
> **[1:45](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=105)** So this isn't going to work for us, and I've checked other sources on this public APIs list, and unfortunately, none of the options here seem to do what we want.
>
> **[1:55](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=115)** So at this point, I'm just going to do a web search on zip code API.
>
> **[2:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=120)** And there are a few options here.
>
> **[2:04](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=124)** So I need to look through those options and see what might work.
>
> **[2:08](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=128)** So I'm going to check out Smarty.
>
> **[2:11](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=131)** And I'm going to go into the resources and into documentation.
>
> **[2:17](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=137)** And let's see if we've got a zip plus four.
>
> **[2:22](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=142)** So it looks like there is a zip plus four option here that does what I want it to do.
>
> **[2:28](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=148)** So then I want to look at pricing.
>
> **[2:31](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=151)** And it looks like there is a 30 day free trial.
>
> **[2:35](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=155)** I'd prefer something a little more flexible.
>
> **[2:37](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=157)** I know there's some services out there that give you a limited number of requests every month for free.
>
> **[2:44](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=164)** So I'm going to look around a little bit more.
>
> **[2:47](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=167)** I'm going to check out Geocodio.
>
> **[2:50](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=170)** So this takes us right to some documentation that says yes it can return zip plus four codes or nine digit zip codes.
>
> **[2:56](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=176)** And then let's look at pricing.
>
> **[3:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=180)** So here we've got try for free 2500 free lookups per day.
>
> **[3:07](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=187)** So that's what I'm looking for.
>
> **[3:08](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=188)** This looks like it does what I want.
>
> **[3:09](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=189)** And it'll work for our testing purposes without a time limit.
>
> **[3:12](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=192)** Now I want to go look at documentation.
>
> **[3:17](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=197)** So it walks us through.
>
> **[3:19](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=199)** How to use this.
>
> **[3:22](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=202)** And the authentication section says all requests require an API key.
>
> **[3:27](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=207)** And this is super common with web services.
>
> **[3:29](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=209)** It's generically referred to by all services as an API key.
>
> **[3:33](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=213)** And it's basically a string of characters that's associated with your account.
>
> **[3:37](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=217)** And you provide it as part of any request you make to the API.
>
> **[3:40](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=220)** So to get this, we're going to have to sign up.
>
> **[3:42](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/get-an-api-key?u=76281980&t=222)** So I'll hit register here and I need to sign up.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (1)
> **Env Vars:** api (6)
> **CLI Commands:** make (3), find (1)
> **Definitions:** is a  (4)
> **Documentation:** the documentation (1)
> **Tools:** github (1)
> **UI Navigation:** click on (1)

#### [Research and create an AJAX request URL](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=0)** Once you've identified the API provider you want to use.
>
> **[0:03](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=3)** The next step is to build a request.
>
> **[0:05](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=5)** Modern web services are based on an architecture called [[Representational State Transfer (REST)|Rest]], which uses HTTP requests and responses to exchange information.
>
> **[0:13](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=13)** So we need to write a URL that requests the information we want.
>
> **[0:17](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=17)** APIs often provide access to multiple types of data, and you need to examine the documentation to find out how to request the specific data you want.
>
> **[0:26](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=26)** When an API gives different URL paths, these are known as endpoints, and you need to pick the correct one for the data you want from the main Geocodio page.
>
> **[0:36](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=36)** I'm going to click help and then API documentation.
>
> **[0:40](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=40)** Now the documentation outline on the left shows a number of different topics, and I'm really happy to see a search option up here at the top.
>
> **[0:47](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=47)** And that's really helpful when I'm looking for a specific feature in the API.
>
> **[0:51](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=51)** So I'm going to click there and I'm going to type nine digit zip.
>
> **[0:55](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=55)** And the first item in the search results is another way to refer to that same data which is USPS zip plus four.
>
> **[1:02](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=62)** So I'll click that.
>
> **[1:03](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=63)** There's a whole section here about requesting and working with nine digit zip code data.
>
> **[1:08](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=68)** So the API does support that.
>
> **[1:11](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=71)** And on the right there's sample code for writing request using this feature in curl, which is a command line utility, as well as tabs for several other programming languages in the curl command.
>
> **[1:23](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=83)** The URL shows the endpoint which is slash geocode, and then we see the query portion of the URL, which starts with a question mark.
>
> **[1:33](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=93)** And the first query parameter is q.
>
> **[1:35](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=95)** That generally stands for query, and I expect this is the text of the incomplete address that a user would have entered in a form.
>
> **[1:44](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=104)** Next we have the fields parameter and that has a value of zip 4, which is asking for that specific information.
>
> **[1:53](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=113)** And the documentation explained that that's the way to request the full nine zip code in the data that we get back from the API.
>
> **[2:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=120)** And finally, API underscore key is the unique API key I created and stored when I set up my account with Geocodio.
>
> **[2:10](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=130)** I want to try this out.
>
> **[2:12](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=132)** So I need to copy this URL from the curl command.
>
> **[2:15](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=135)** Now that's everything inside the quotes, but not including the quotes.
>
> **[2:20](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=140)** So I'll copy that.
>
> **[2:22](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=142)** And then I'm going to open up a new browser tab and I'm going to paste that URL.
>
> **[2:28](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=148)** Now I don't want to press enter quite yet because notice that that sample URL includes a placeholder value for my API key.
>
> **[2:36](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=156)** And I need to replace that with my actual API key.
>
> **[2:40](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=160)** So I'm going to open up my password manager.
>
> **[2:44](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=164)** I'm going to open up that API key that I saved.
>
> **[2:48](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=168)** I'm going to copy it.
>
> **[2:49](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=169)** And then back in that URL I'm going to delete the placeholder text, your API key.
>
> **[2:55](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=175)** And I'm going to paste in my actual API key.
>
> **[2:59](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=179)** Just to note here, this API key is what I'm using for development.
>
> **[3:04](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=184)** But by the time this course is released that's going to be deleted.
>
> **[3:07](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=187)** So you won't be able to just use the API key that I'm showing on screen.
>
> **[3:10](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=190)** You'll really need to create your own.
>
> **[3:12](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=192)** So I'll go ahead and press enter here and I get [[JSON]] returned, which is the data that the API created and sent in response to my request.
>
> **[3:23](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=203)** By default, it's not that easy to read in a browser window.
>
> **[3:26](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=206)** Now Chrome detects that this is JSON, and it lets me view the result in a tree layout by clicking this checkbox that says Pretty print.
>
> **[3:34](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=214)** And once I do that, I can see this information organized and it's in a hierarchical layout.
>
> **[3:43](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=223)** So scrolling through here, looking at all the different types of data that I have for this one address down here, I see zip four.
>
> **[3:52](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=232)** And down here I see zip nine.
>
> **[3:55](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=235)** So we've got a nine digit zip code right there.
>
> **[3:58](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=238)** And that's exactly what I'm looking for.
>
> **[4:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=240)** So this little test confirms that this API provides the data.
>
> **[4:05](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/research-and-create-an-ajax-request-url?u=76281980&t=245)** I need to autocomplete a nine digit zip code in my form, and that my API key is working with my free account to get that data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** api (18), url (8), json (2), http (1), usps (1)
> **CLI Commands:** curl (3), find (1)
> **Documentation:** the documentation (3)
> **Definitions:** known as (1), is a  (1), stands for (1)
> **Tools:** command line (1)
> **UI Navigation:** checkbox (1)
> **Exercise Files:** sample code (1)

#### [Challenge: Research an API and create a request URL](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-research-an-api-and-create-a-request-url?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-research-an-api-and-create-a-request-url?u=76281980&t=5)** It's time for a challenge.
>
> **[0:07](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-research-an-api-and-create-a-request-url?u=76281980&t=7)** Are you ready to try your hand at getting information from an API?
>
> **[0:10](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-research-an-api-and-create-a-request-url?u=76281980&t=10)** Another aspect we want to change on the Explore California Form page is to add information about national parks in California.
>
> **[0:18](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-research-an-api-and-create-a-request-url?u=76281980&t=18)** The National Park Service has an API that provides park information, so you can get this data using an [[AJAX]] request.
>
> **[0:26](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-research-an-api-and-create-a-request-url?u=76281980&t=26)** Check out the developer guide and the API documentation@[nps.gov](https://nps.gov).
>
> **[0:31](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-research-an-api-and-create-a-request-url?u=76281980&t=31)** Then create a request in your browser that returns information on national parks in California.
>
> **[0:37](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-research-an-api-and-create-a-request-url?u=76281980&t=37)** This is a longer challenge that might take you around 20 minutes.
>
> **[0:41](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-research-an-api-and-create-a-request-url?u=76281980&t=41)** When you're done, join me in the next video and I'll go over how I approached it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AJAX]] (1)
> **Env Vars:** api (3)
> **URLs:** [nps.gov](https://nps.gov) (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)

#### [Solution: Research an API and create a request URL](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=5)** The National Park Service API is free for a reasonable volume of requests, but it requires use of an API key.
>
> **[0:12](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=12)** I'll start by clicking the link to sign up for one, and there's a form to complete, so I'll complete that.
>
> **[0:21](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=21)** And click Sign up.
>
> **[0:24](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=24)** And I'll check my email for that API key.
>
> **[0:28](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=28)** And when I receive it I'll copy that and put it in my password manager.
>
> **[0:34](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=34)** I checked my email and it got the API key that the National Park Service sent me, and I saved it in my password manager as a secure note.
>
> **[0:42](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=42)** And so now I have that API key saved and ready to make a request.
>
> **[0:47](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=47)** Next, I need to learn about what data the API offers, and scrolling up to the top I see documentation.
>
> **[0:54](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=54)** So I'm going to open that up.
>
> **[0:56](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=56)** And as I scroll down there's a list of endpoints and each one describes the data that it returns.
>
> **[1:04](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=64)** Now I'm looking for a list of parks in a specific state.
>
> **[1:08](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=68)** So scrolling through this list I notice that there's a slash parks endpoint, and when I look at the description, it says that it provides parks related data.
>
> **[1:19](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=79)** Now I can click on the endpoint to look at the details about it.
>
> **[1:25](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=85)** And I can see that it accepts a state code, which is just what I need data about a specific state.
>
> **[1:34](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=94)** Now I want to try this out.
>
> **[1:36](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=96)** And when I click that it actually gives me fields here where I can enter the data that I want to add.
>
> **[1:43](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=103)** So for the state code I'm going to say add item.
>
> **[1:46](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=106)** And I'm going to type CA which is a common two character abbreviation for the state of California.
>
> **[1:52](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=112)** Then I'm going to scroll down to the bottom and there's an Execute button.
>
> **[1:56](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=116)** So I'll click that.
>
> **[1:57](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=117)** And if I keep scrolling down I can see again a curl statement just like we saw with Geocodio.
>
> **[2:03](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=123)** So that shows the URL that the request used.
>
> **[2:06](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=126)** And then when I scroll down it says oh your API key was missing So it looks like I actually need to input my API key here somewhere before I can actually use this testing environment.
>
> **[2:17](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=137)** So if I scroll up to the top.
>
> **[2:19](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=139)** There's an Authorize button.
>
> **[2:22](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=142)** So I'm going to click that.
>
> **[2:23](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=143)** And here it's saying okay putting your API key.
>
> **[2:27](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=147)** So I'm going to go over to my password manager, copy my API Key.
>
> **[2:33](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=153)** And then paste that in here.
>
> **[2:36](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=156)** Click the Authorize button.
>
> **[2:38](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=158)** And then I'm going to close that window I don't want to click log out here.
>
> **[2:42](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=162)** I just want to click that X to close the window.
>
> **[2:45](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=165)** And now if I scroll back down to parks.
>
> **[2:50](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=170)** I've already got California in that box.
>
> **[2:56](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=176)** And it looks like I need to click Cancel.
>
> **[3:01](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=181)** Try this out again.
>
> **[3:02](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=182)** I've already got CA entered and I'm going to click Execute.
>
> **[3:07](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=187)** And now when I scroll down I have an actual response body.
>
> **[3:12](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=192)** And this is information about parks in California can see Alcatraz Island.
>
> **[3:17](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=197)** That's very famously in San Francisco Bay in California.
>
> **[3:20](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=200)** And as we keep going down, there's lots of information about that park.
>
> **[3:26](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=206)** And then here's a historical trail.
>
> **[3:30](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=210)** So it looks like for each park we've got lots of information.
>
> **[3:33](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=213)** And at the top I noticed it's said there's something like 34 different parks listed.
>
> **[3:38](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=218)** Now, going back up to the top of this response, we have that curl command.
>
> **[3:44](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=224)** So I'm going to go ahead and just copy the URL from that command.
>
> **[3:48](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=228)** And remember that's everything in between the quotes and not including the quotes.
>
> **[3:54](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=234)** So I want just the URL.
>
> **[3:56](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=236)** I'm not going to include this -H accept application [[JSON]].
>
> **[4:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=240)** I just want everything through my API key.
>
> **[4:02](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=242)** I'm going to copy that to my clipboard.
>
> **[4:05](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=245)** And then in a new tab I'm going to paste that in and press enter.
>
> **[4:09](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=249)** And again I have raw JSON showing up on my screen, which is kind of hard to read.
>
> **[4:16](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=256)** I can click that pretty print button.
>
> **[4:18](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=258)** And now it's much better organized again, I can see there's a total of 34 records returned, and we've got Alcatraz Island leading off.
>
> **[4:28](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=268)** And then information on other national parks.
>
> **[4:33](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=273)** Now, I've confirmed I can get the information I need from this API, and I have an API key to do that.
>
> **[4:40](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-research-an-api-and-create-a-request-url?u=76281980&t=280)** And I understand what request URL I need to request that information.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (2)
> **Env Vars:** api (13), url (4), json (2)
> **UI Navigation:** scroll down (4), click on (1), scroll up (1)
> **CLI Commands:** curl (2), make (1)
> **Definitions:** is a  (1)


### 2. Working with the Fetch API

[↑ Back to Table of Contents](#table-of-contents)

#### [Understand the Fetch API](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-the-fetch-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-the-fetch-api?u=76281980&t=0)** The standard built in method for creating [[AJAX]] requests in [[JavaScript]] is the [[Fetch]] API.
>
> **[0:05](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-the-fetch-api?u=76281980&t=5)** Legacy code used a different method called XMLHttpRequest or XHR for short, but in all but the most basic use cases, XHR presented a challenge known as Callback Hell.
>
> **[0:18](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-the-fetch-api?u=76281980&t=18)** This is the situation where you want a series of things to happen in sequence.
>
> **[0:22](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-the-fetch-api?u=76281980&t=22)** The callback based solution for this in JavaScript is generally to create a series of nested function calls, each calling another, so the result of the deepest nested function must be determined before the next function in the chain is executed, and so on to the top of the stack.
>
> **[0:38](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-the-fetch-api?u=76281980&t=38)** Nested callbacks can be a challenge to read in code, and can create a call stack that presents debugging challenges.
>
> **[0:44](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-the-fetch-api?u=76281980&t=44)** The fetch API does two things.
>
> **[0:47](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-the-fetch-api?u=76281980&t=47)** First, it performs some of the basic Ajax functions without requiring you to code them.
>
> **[0:52](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-the-fetch-api?u=76281980&t=52)** You pass a URI to the fetch method, and then opening the connection and sending the request are performed behind the scenes without the need for additional statements.
>
> **[1:01](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-the-fetch-api?u=76281980&t=61)** You can pass the fetch method, an optional second argument containing some parameters, but by default it assumes basic settings such as get for the HTTP method, the result of the fetch statement is returned in a standardized response object.
>
> **[1:15](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-the-fetch-api?u=76281980&t=75)** Once the request has happened and that fetch object is generated, you can easily specify what happens in the next and in subsequent steps asynchronously using a JavaScript syntax called promises.
>
> **[1:27](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-the-fetch-api?u=76281980&t=87)** Promises provide a way to easily specify code that should run in sequence rather than creating nested callbacks.
>
> **[1:34](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-the-fetch-api?u=76281980&t=94)** Promises let you change the results of running code using the keyword "then".
>
> **[1:38](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-the-fetch-api?u=76281980&t=98)** Promises also pass along standardized objects and even include their own streamlined way to handle errors.
>
> **[1:46](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-the-fetch-api?u=76281980&t=106)** You can use the promise constructor in your code in a wide variety of situations.
>
> **[1:51](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-the-fetch-api?u=76281980&t=111)** The fetch API uses the fetch keyword, but adopts the syntax of promises, including the super useful "then" method.
>
> **[1:58](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-the-fetch-api?u=76281980&t=118)** This allows you to simplify code like this.
>
> **[2:01](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-the-fetch-api?u=76281980&t=121)** nested callback code into something as straightforward as this.
>
> **[2:05](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-the-fetch-api?u=76281980&t=125)** And in particular, while more complex XHR code often requires you to interpret nesting in the code, you can read fetch code in a linear fashion from top to bottom, and you can understand the order in which all the code will be executed.
>
> **[2:19](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-the-fetch-api?u=76281980&t=139)** If you've worked with jQuery before, the jQuery syntax for Ajax requests is also based on promises.
>
> **[2:26](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-the-fetch-api?u=76281980&t=146)** So if you've seen that, you'll notice the similarities right off.
>
> **[2:30](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-the-fetch-api?u=76281980&t=150)** In fact, you can rewrite jQuery get code by replacing dollar.get with fetch each instance of done with then, and the fail method with catch, and then adding an error handling step.
>
> **[2:44](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-the-fetch-api?u=76281980&t=164)** Each step in a fetch chain takes a function as an argument and returns a value.
>
> **[2:49](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-the-fetch-api?u=76281980&t=169)** For this reason, it's super common to see fetch code written even more concisely using arrow functions.
>
> **[2:56](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-the-fetch-api?u=76281980&t=176)** This code is identical to the fetch chain shown previously Fetch is supported by all modern browsers we can look on [caniuse.com](https://caniuse.com) to see its current level of support.
>
> **[3:06](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-the-fetch-api?u=76281980&t=186)** Now, caniuse is a great resource for understanding the level of browsers support for features in [[HTML]], CSS and JavaScript?
>
> **[3:14](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-the-fetch-api?u=76281980&t=194)** I'm at [caniuse.com](https://caniuse.com) and in the search box I can just type fetch.
>
> **[3:18](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-the-fetch-api?u=76281980&t=198)** And there it brings up a chart showing the current level of support for fetch.
>
> **[3:23](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-the-fetch-api?u=76281980&t=203)** I find it more useful to click the Usage relative button, which shows me weighted bars for how much traffic comes from browsers that support this feature in green and then in red.
>
> **[3:33](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-the-fetch-api?u=76281980&t=213)** What percentage of traffic doesn't have support.
>
> **[3:36](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-the-fetch-api?u=76281980&t=216)** I can see that fetch is standard across major browser versions and devices.
>
> **[3:41](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-the-fetch-api?u=76281980&t=221)** The only exception is Internet Explorer, which is still used within some corporate environment to support legacy needs.
>
> **[3:48](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-the-fetch-api?u=76281980&t=228)** So just like with a few other modern [[Web Development]] tools, we can use a polyfill if we need full backwards compatibility.
>
> **[3:56](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-the-fetch-api?u=76281980&t=236)** Fetch makes Ajax code easy to create and maintain using [[Vanilla]] JavaScript.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (18), [[JavaScript]] (5), [[AJAX]] (4), [[HTML]] (1), [[Web Development]] (1)
> **Env Vars:** api (3), xhr (3), uri (1), http (1), html (1)
> **Code Identifiers:** jquery (3)
> **URLs:** [caniuse.com](https://caniuse.com) (2)
> **Definitions:** known as (1), is a  (1)
> **Analogies:** such as (1), just like (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)

#### [Create and test a Fetch request](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=0)** In the starting code for the Explore California form, I'm going to build a function to create and send a [[Fetch]] request in the app.js file.
>
> **[0:07](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=7)** So I'll create a const and I'll call my function create request.
>
> **[0:14](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=14)** And I'm going to specify a single parameter.
>
> **[0:17](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=17)** I'll call URL.
>
> **[0:18](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=18)** And I'll be able to reuse this function to call multiple APIs and endpoints within the site.
>
> **[0:24](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=24)** And then within the function body I'm going to add the basic structure for a fetch request.
>
> **[0:29](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=29)** So that's fetch which takes the URL.
>
> **[0:33](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=33)** And I'm going to string to it .then Then it's going to grab the response from that fetch request.
>
> **[0:40](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=40)** And I'm just going to console.log that response.
>
> **[0:46](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=46)** And in this case I'm using that console.log statement just to verify that my code is working.
>
> **[0:51](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=51)** Next I want to add a statement after the function to call it.
>
> **[0:56](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=56)** Eventually, I want this function to be called in response to user actions, but for now I just want it called when the page loads to verify that the results are logged to the console.
>
> **[1:06](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=66)** So I'll say create request and add parentheses and a semicolon.
>
> **[1:13](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=73)** I also need to save the URL that I want to call as a variable.
>
> **[1:17](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=77)** I like to create my variables up top.
>
> **[1:20](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=80)** So I'm going to create a const.
>
> **[1:22](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=82)** I'm going to call that Geocodio URL.
>
> **[1:26](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=86)** And within those quotes I need to get that URL.
>
> **[1:31](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=91)** So I'm going to go back to the Geocodio documentation for the zip plus four feature.
>
> **[1:37](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=97)** And I'll copy the URL from the curl command.
>
> **[1:40](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=100)** So that's the first line here.
>
> **[1:42](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=102)** Everything within the quotes but not including the quotes.
>
> **[1:47](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=107)** And I'm going to paste that into my variable between the quotes.
>
> **[1:52](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=112)** And then after the closing quote I'm going to add a semicolon and save that.
>
> **[1:57](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=117)** Now I'm still not done here because I have a placeholder for my API key.
>
> **[2:03](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=123)** So next I need to go to my password manager, and I need to copy my API key here for Geocodio.
>
> **[2:14](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=134)** And then back in my code I'm going to take out that placeholder text, your API key.
>
> **[2:19](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=139)** And I'm going to paste in my actual key.
>
> **[2:23](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=143)** And then finally I need to add Geocodio URL as the value that I'm passing as an argument when I'm calling the create request function.
>
> **[2:35](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=155)** And I like to end with an empty line and I'll save that.
>
> **[2:39](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=159)** Now you can test fetch code in a browser just like you would any other front end code.
>
> **[2:44](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=164)** However, it's generally best not to simply open your [[HTML]] file in a browser to see what happens.
>
> **[2:50](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=170)** And that's because by default, a browser opens a local file using the file protocol, which browsers treat differently than pages opened using HTTP requests, which is pretty much everything on the web.
>
> **[3:01](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=181)** Fortunately, it's easy to run a simple HTTP server on your development computer, which lets you more closely match the way your [[AJAX]] code will work after you deploy it.
>
> **[3:12](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=192)** In addition, some APIs require requests to be linked to a specific URL, so using an HTTP server is a must in a situation like that.
>
> **[3:21](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=201)** I'm using the Visual Studio Code editor with the live server extension.
>
> **[3:25](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=205)** This extension takes care of all the configuration for me.
>
> **[3:28](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=208)** Similar extensions are available for many other editors, so whichever environment you're using, I recommend installing and using an extension like this one.
>
> **[3:37](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=217)** For Live Server.
>
> **[3:38](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=218)** I can start by opening the HTML file and then clicking the Go Live button, and that automatically opens the page in my browser, and that's opened using the HTTP protocol.
>
> **[3:52](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=232)** Next I'm going to open the browser console, and I can see that I have the response log to the console.
>
> **[3:59](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=239)** I'm on the console tab here.
>
> **[4:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=240)** And so if I open up that response I can see it's an object.
>
> **[4:06](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=246)** And if I dig in, there's a few details about the request and the response.
>
> **[4:10](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=250)** But notice I don't see the actual data here anywhere.
>
> **[4:15](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=255)** What you get back from a fetch request is not data, but a specific type of object called response object.
>
> **[4:21](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=261)** This always has a set of properties, including okay status and status text.
>
> **[4:26](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=266)** But notice when I click the body property here, it just says readable stream.
>
> **[4:33](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=273)** Because of the structure of a response object, I can't directly access that data.
>
> **[4:38](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=278)** Instead, I need to use the [[JSON]] method on the response object and I need to chain another .then method for total of two before I can access the response data.
>
> **[4:49](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=289)** So back in my code and back in my app.js file, you can close up this live server window and I want to chain another .then statement first of all.
>
> **[5:02](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=302)** So for the first .then I'm going to take the response and all I want to do is run response .JSON, and that's going to pull the JSON out of that response object and pass it along.
>
> **[5:18](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=318)** Then I'm going to take that data that I've just received.
>
> **[5:23](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=323)** And I need a second .then in here.
>
> **[5:27](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=327)** And I just want to run console.log data.
>
> **[5:34](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=334)** And now I'm going to save my changes here.
>
> **[5:37](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=337)** I'm going to check back in my browser.
>
> **[5:40](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=340)** And this automatically refreshes based on changes I made.
>
> **[5:44](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=344)** Now I can see I have an object and it's different.
>
> **[5:47](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=347)** And within that object I have input and results.
>
> **[5:50](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=350)** If I open that results array, I have one object within that.
>
> **[5:55](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=355)** And this clearly has address information.
>
> **[5:59](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=359)** I see fields here and I see zip4, which is something I was looking for.
>
> **[6:03](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=363)** And if I dig into that I can see I've got my nine digit zip code right down here.
>
> **[6:08](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=368)** So this is the same data I saw in the tool on the Geocodio website.
>
> **[6:13](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=373)** And now I have recreated that in my code using fetch recall that fetch is a feature that's supported by modern browsers but not older ones, and specifically Internet Explorer.
>
> **[6:26](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=386)** You can recreate this feature for older browsers using a polyfill, which is a separate set of [[JavaScript]] code that checks for the feature and recreates it as a method of the window object if it's not already present.
>
> **[6:37](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=397)** Jake Champion maintains a popular and concise fetch polyfill.
>
> **[6:41](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=401)** Looking through the documentation, one thing they make clear is that in order to use this, you also need to include a promises polyfill again, to reproduce that underlying architectural approach that fetch uses.
>
> **[6:54](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-and-test-a-fetch-request?u=76281980&t=414)** We're not going to include these polyfills in the site we're building for this course, but if you're using fetch in your own code and you need to support the widest possible user base, follow the instructions here in the documentation for this polyfill.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (11), [[JSON]] (3), [[HTML]] (2), [[AJAX]] (1), [[JavaScript]] (1)
> **Env Vars:** url (8), http (4), api (3), json (3), html (2)
> **Definitions:** is a  (3)
> **File Paths:** app.js (2)
> **CLI Commands:** curl (1), make (1)
> **Documentation:** the documentation (2)
> **UI Navigation:** go to (1), open the (1)
> **Cross-References:** go back to (1)

#### [Handle basic Fetch errors](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=0)** Each method in a [[Fetch]] chain finishes by either resolving or rejecting.
>
> **[0:04](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=4)** Resolving means the process executed successfully or rejecting means there was an issue and it throws an error.
>
> **[0:11](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=11)** You might expect that receiving an HTTP response like a 404 would result in a fetch request, rejecting.
>
> **[0:18](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=18)** However, fetch rejects only when something like a network issue prevents the request from being executed, but the response object returned by the fetch method includes a boolean okay property.
>
> **[0:30](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=30)** That's true only if the HTTP response is in the 200 range.
>
> **[0:34](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=34)** That's 200 to 299.
>
> **[0:36](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=36)** Otherwise, this property is set to false even though the fetch itself doesn't throw an error.
>
> **[0:43](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=43)** It's a common pattern when using fetch to check the okay value first before attempting to work with the data.
>
> **[0:49](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=49)** This way, you can intercept any errors and handle them differently than you would a successful response.
>
> **[0:56](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=56)** Back in my code I could add this to the first, then method, but anything more than a return statement.
>
> **[1:01](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=61)** I prefer to move into a helper function so I can keep my fetch structure lean and readable.
>
> **[1:06](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=66)** So I'm going to create a new handle errors function before my create request function.
>
> **[1:11](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=71)** It takes response as a parameter.
>
> **[1:14](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=74)** And then I'm going to use an if statement to check if response okay is true.
>
> **[1:20](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=80)** And if that's the case, I'm going to return response .[[JSON]].
>
> **[1:27](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=87)** When response dot okay is not true, I'm going to do two things.
>
> **[1:32](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=92)** Now I don't need an else statement here because obviously if that's not true, then I want something else to happen first.
>
> **[1:39](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=99)** I'll still return response .JSON and this parses the response text so I can work with the error text that it contains.
>
> **[1:47](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=107)** I'm also going to chain a .then method that takes response, which is the result of parsing that response text.
>
> **[1:56](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=116)** And I'm going to throw a new error which contains response.error
>
> **[2:05](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=125)** .message or response.error.
>
> **[2:09](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=129)** And I got to make sure that if closed, all of my friends and brackets correctly, it looks like I didn't mean to put that semicolon there.
>
> **[2:18](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=138)** so that I'm chaining this then statement to this return statement.
>
> **[2:22](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=142)** So I'm throwing this error with two options because not all APIs return an error.message.
>
> **[2:29](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=149)** And so if there's an error message I want to throw that as my error.
>
> **[2:33](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=153)** But otherwise I just want to throw the entire error object to be able to see what's there and then down and create request.
>
> **[2:40](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=160)** In my first then statement I'm going to replace response .JSON with handle errors and pass in response.
>
> **[2:50](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=170)** So I'm going to pass all of my responses to handle errors.
>
> **[2:54](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=174)** If I throw an error up in handle errors, then my method rejects and no further thens are executed.
>
> **[3:01](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=181)** However, fetch supports an additional method to work with errors and that's catch.
>
> **[3:06](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=186)** So generally I change .catch after the last .then.
>
> **[3:10](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=190)** So I'm going to go ahead and do that.
>
> **[3:11](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=191)** We'll take that last semicolon out and we'll do a .catch error.
>
> **[3:19](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=199)** And we're going to go ahead and just console .error.
>
> **[3:23](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=203)** That error object that got up past in here, I'm simply grabbing the error text that I threw in the handle errors function, and I'm calling console .error to display the response error message in the console formatted as an error.
>
> **[3:40](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=220)** I'm also going to create a handle success method, so I'll do that underneath handle errors.
>
> **[3:45](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=225)** And that's going to take the data that's been parsed.
>
> **[3:48](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=228)** And I'm simply going to console.log that data.
>
> **[3:52](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=232)** And then in my create request method I'll update my second then method to call handle success and pass it the data property.
>
> **[4:05](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=245)** I'm also going to put semicolons at the end of my two new functions, so I'll save my changes.
>
> **[4:13](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=253)** I'm going to open the [[HTML]] file, and I'm going to go live with this in the browser.
>
> **[4:18](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=258)** And I can see that the data still loads like normal.
>
> **[4:22](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=262)** And then going back to my code in my [[JavaScript]] file, I'm going to go up to my Geocodio URL constant.
>
> **[4:32](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=272)** I'm going to copy that and duplicate it.
>
> **[4:35](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=275)** and I'm going to take that first one and I'm going to comment it out to save it.
>
> **[4:41](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=281)** And now I want to delete a character or two from the copy within the API string at the end.
>
> **[4:49](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=289)** So this should result in an invalid request, which is going to let me test the code that I've written.
>
> **[4:57](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=297)** So I'm going to save that.
>
> **[4:59](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=299)** And then back in the browser.
>
> **[5:01](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=301)** The browser itself generates an error when it receives the 403.
>
> **[5:05](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=305)** And that's the first one.
>
> **[5:07](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=307)** But also my code reached the handle errors function, which displays the error message in the console.
>
> **[5:13](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=313)** Invalid API key.
>
> **[5:15](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=315)** So I've ensured that my program flow treats HTTP response codes outside the 200 range as errors.
>
> **[5:23](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=323)** Now I want to go back and clean up the API key so it works again.
>
> **[5:27](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=327)** So I'll delete that copy I made that I broke and I'll go ahead and uncomment that original constant.
>
> **[5:35](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=335)** I'll save that.
>
> **[5:37](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=337)** Go back to the browser.
>
> **[5:39](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=339)** And it's working again.
>
> **[5:41](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-basic-fetch-errors?u=76281980&t=341)** And so I'm all good.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (8), [[JSON]] (3), [[HTML]] (1), [[JavaScript]] (1)
> **Env Vars:** http (3), json (3), api (3), html (1), url (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** open the (1)

#### [Challenge: Build a Fetch request](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-build-a-fetch-request?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-build-a-fetch-request?u=76281980&t=5)** It's time for a challenge.
>
> **[0:07](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-build-a-fetch-request?u=76281980&t=7)** Ready to try your hand at building a [[Fetch]] request? For the Explore California page we want to retrieve information from the National Park Service about parks in California.
>
> **[0:17](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-build-a-fetch-request?u=76281980&t=17)** You should be able to reuse most of the code you've already written, so the main challenge will be working with the documentation to identify the endpoint, getting a working URL, and then testing your request.
>
> **[0:29](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-build-a-fetch-request?u=76281980&t=29)** Start by opening the documentation and saving the URL for the request as a variable.
>
> **[0:35](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-build-a-fetch-request?u=76281980&t=35)** Then you'll want to update your code to call the NPS API and verify that you receive data back in the console.
>
> **[0:41](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-build-a-fetch-request?u=76281980&t=41)** For an extra challenge, try sending an invalid API key and verify that you get a useful error message in the console.
>
> **[0:49](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-build-a-fetch-request?u=76281980&t=49)** This challenge should take you about ten minutes.
>
> **[0:51](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-build-a-fetch-request?u=76281980&t=51)** When you're done, join me in the next video and I'll go over how I approached it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (1)
> **Env Vars:** url (2), api (2), nps (1)
> **Documentation:** the documentation (2)
> **Cross-References:** in the next (1)

#### [Solution: Build a Fetch request](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-a-fetch-request?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-a-fetch-request?u=76281980&t=5)** Our code already contains a structured [[Fetch]] request, but the first thing we need for our National Park Service request is a URL to use on the NPS API website.
>
> **[0:15](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-a-fetch-request?u=76281980&t=15)** I'm going to start by authorizing and I need to enter my API key.
>
> **[0:23](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-a-fetch-request?u=76281980&t=23)** And now when I scroll down to the slash parks endpoint.
>
> **[0:30](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-a-fetch-request?u=76281980&t=30)** You can open that up, try it out and enter CA for my state code, Execute.
>
> **[0:38](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-a-fetch-request?u=76281980&t=38)** And then I want to copy that URL.
>
> **[0:40](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-a-fetch-request?u=76281980&t=40)** And remember this is everything between quotes but not including everything after the -H.
>
> **[0:45](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-a-fetch-request?u=76281980&t=45)** So I'm going to take that URL over to my code.
>
> **[0:49](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-a-fetch-request?u=76281980&t=49)** And I'm going to create a new variable const npsUrl and I'll paste that URL I copied as the value and finish it up with a semicolon.
>
> **[1:04](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-a-fetch-request?u=76281980&t=64)** Like many [[JavaScript]] features, once you've written the code to implement Fetch, you can pretty much reuse the same pattern, so you don't really need to write any new code here.
>
> **[1:13](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-a-fetch-request?u=76281980&t=73)** You've already created an extensible set of functions, so all you have to do is pass in the URL and you get your data handled.
>
> **[1:20](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-a-fetch-request?u=76281980&t=80)** So the only thing left to do here is to scroll to the bottom and add a new function call to create request.
>
> **[1:27](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-a-fetch-request?u=76281980&t=87)** So we'll call createRequest, and we'll pass in npsUrl, and we'll save that.
>
> **[1:35](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-a-fetch-request?u=76281980&t=95)** And I'm going to open my [[HTML]] file.
>
> **[1:38](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-a-fetch-request?u=76281980&t=98)** And I'm going to go live with that in the browser.
>
> **[1:41](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-a-fetch-request?u=76281980&t=101)** Open up my console and it takes a few seconds.
>
> **[1:45](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-a-fetch-request?u=76281980&t=105)** But I've got two objects now.
>
> **[1:48](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-a-fetch-request?u=76281980&t=108)** The first one has address components.
>
> **[1:50](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-a-fetch-request?u=76281980&t=110)** The second one has parks information.
>
> **[1:54](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-a-fetch-request?u=76281980&t=114)** And we can see Alcatraz right there, which is the first one we saw on the website.
>
> **[1:59](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-a-fetch-request?u=76281980&t=119)** And it's even easier to read this data here in the console than it was in the browser tab when we use the Pretty-print.
>
> **[2:06](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-a-fetch-request?u=76281980&t=126)** And then if I want to check that my error handling is working here, I can go back to my JavaScript file, I'll make a copy of that NPS URL constant and I will comment out the first one and then the second one.
>
> **[2:19](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-a-fetch-request?u=76281980&t=139)** Go to the end of that API key and take off a couple of characters and save it.
>
> **[2:24](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-a-fetch-request?u=76281980&t=144)** And then back in the browser. You can see that I got an error.
>
> **[2:30](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-a-fetch-request?u=76281980&t=150)** I still got results down here from my address components.
>
> **[2:34](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-a-fetch-request?u=76281980&t=154)** That's the geocoding request.
>
> **[2:37](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-a-fetch-request?u=76281980&t=157)** But for the National Park Service request, got a 403 error from the browser and from my code got error.
>
> **[2:44](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-a-fetch-request?u=76281980&t=164)** And specifically your API key is not valid.
>
> **[2:47](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-a-fetch-request?u=76281980&t=167)** So again, I'm getting a really verbose and useful error message here because of the code I wrote in my error handling function.
>
> **[2:55](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-a-fetch-request?u=76281980&t=175)** And then going back to the JavaScript, I'll erase that copy of the npsUrl constant that was broken, and I will uncomment out the original one, save that.
>
> **[3:09](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-a-fetch-request?u=76281980&t=189)** Back to the browser.
>
> **[3:11](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-a-fetch-request?u=76281980&t=191)** And again, I'm getting data on both addresses and on parks.
>
> **[3:16](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-a-fetch-request?u=76281980&t=196)** So I'm all set.
>
> **[3:17](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-a-fetch-request?u=76281980&t=197)** And I have both API requests working using a single set of Fetch code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (3), [[JavaScript]] (3), [[HTML]] (1)
> **Env Vars:** url (6), api (5), nps (2), html (1)
> **Code Identifiers:** npsurl (3), createrequest (1)
> **UI Navigation:** scroll down (1), go to (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)


### 3. Modifying the DOM

[↑ Back to Table of Contents](#table-of-contents)

#### [What is the DOM?](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-the-dom?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-the-dom?u=76281980&t=0)** The [[Document Object Model (DOM)|Document Object Model]], or DOM, is the way that a browser or other user agent represents the contents of a web document.
>
> **[0:08](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-the-dom?u=76281980&t=8)** The DOM serves as the structure by which developers can reference and manipulate elements in the browser window using [[JavaScript]].
>
> **[0:15](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-the-dom?u=76281980&t=15)** The elements in the DOM are structured in a hierarchy.
>
> **[0:19](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-the-dom?u=76281980&t=19)** It can be useful to think of the structure of the DOM as a tree, with the elements higher in the tree containing the elements lower down.
>
> **[0:26](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-the-dom?u=76281980&t=26)** Browser developer tools provide an interface for viewing and interacting with the DOM for the current document.
>
> **[0:33](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-the-dom?u=76281980&t=33)** In the browser window, right click an item.
>
> **[0:35](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-the-dom?u=76281980&t=35)** When you click the inspect option, the developer tools open and display a pane that shows the DOM tree for the current document.
>
> **[0:43](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-the-dom?u=76281980&t=43)** In Chrome, this is labeled the Elements pane.
>
> **[0:46](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-the-dom?u=76281980&t=46)** The contents of the Elements pane look a lot like a standard [[HTML]] document with nested elements, attributes, and even text content.
>
> **[0:54](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-the-dom?u=76281980&t=54)** However, it's important to understand that the DOM is not the same as the HTML file that a web page is based on.
>
> **[1:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-the-dom?u=76281980&t=60)** We can use the developer tools to explore the difference.
>
> **[1:04](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-the-dom?u=76281980&t=64)** I'm going to go to [duckduckgo.com](https://duckduckgo.com) which is a search engine.
>
> **[1:07](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-the-dom?u=76281980&t=67)** Then I'm going to right click the Search box and click Inspect.
>
> **[1:11](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-the-dom?u=76281980&t=71)** The elements pane shows the code for the input box.
>
> **[1:13](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-the-dom?u=76281980&t=73)** I right clicked with a highlight over it, and I can see that it's nested in a div element, which is nested in another div, which is then nested in a form element.
>
> **[1:22](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-the-dom?u=76281980&t=82)** And if I kept scrolling, I could explore the whole tree.
>
> **[1:25](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-the-dom?u=76281980&t=85)** But instead, keep your eye on the code, and then I'll click in the text box and start typing.
>
> **[1:30](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-the-dom?u=76281980&t=90)** And as I do, notice that some additional class names are added to one of the div tags.
>
> **[1:35](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-the-dom?u=76281980&t=95)** This is a pretty common way to change styles in response to user interactions using JavaScript.
>
> **[1:41](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-the-dom?u=76281980&t=101)** Then, when I delete what I've typed, those classes go away.
>
> **[1:44](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-the-dom?u=76281980&t=104)** So the code in the DOM tree is a reflection of exactly what's in the browser window at the current moment, and does not necessarily reflect the original HTML that was loaded.
>
> **[1:53](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-the-dom?u=76281980&t=113)** The Elements tab in the browser tools also gives us access to the CSS that's applied to an element.
>
> **[1:59](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-the-dom?u=76281980&t=119)** So still with that input element selected, I can scroll through the Styles tab and it shows me each style rule from the CSS that applies to this element.
>
> **[2:09](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-the-dom?u=76281980&t=129)** It also shows every declaration from those rules with the declarations that are superseded or not recognized crossed out.
>
> **[2:16](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-the-dom?u=76281980&t=136)** This is a super useful tool for understanding the current state of a web document in the browser window.
>
> **[2:22](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-the-dom?u=76281980&t=142)** The DOM is specially important when working with [[AJAX]] because we don't want to just receive remote data.
>
> **[2:29](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-the-dom?u=76281980&t=149)** We also want to use that data as part of the user's interaction.
>
> **[2:33](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-the-dom?u=76281980&t=153)** And that often means changing what's shown in the browser window.
>
> **[2:37](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/what-is-the-dom?u=76281980&t=157)** So once we receive data back from an Ajax request, we'll use DOM properties and methods to change the contents of the browser window.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3), [[JavaScript]] (2), [[AJAX]] (2), [[Document Object Model (DOM)|Document object model]] (1)
> **Env Vars:** dom (10), html (3), css (2)
> **Definitions:** is a  (4)
> **URLs:** [duckduckgo.com](https://duckduckgo.com) (1)
> **UI Navigation:** go to (1)

#### [Select elements with vanilla JavaScript](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/select-elements-with-vanilla-javascript?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/select-elements-with-vanilla-javascript?u=76281980&t=0)** Before you can make changes to an element in the DOM, you first have to select it.
>
> **[0:04](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/select-elements-with-vanilla-javascript?u=76281980&t=4)** The DOM interface, supported by browsers, includes several methods for selecting one or more elements, but a few methods are particularly common.
>
> **[0:12](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/select-elements-with-vanilla-javascript?u=76281980&t=12)** querySelector takes a CSS selector as an argument and selects a single element querySelectorAll is similar to querySelector, except that if your CSS selector matches multiple elements, all of them are returned as a collection.
>
> **[0:26](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/select-elements-with-vanilla-javascript?u=76281980&t=26)** There are also older methods, such as getElementById, which selects the element with the ID value you pass.
>
> **[0:33](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/select-elements-with-vanilla-javascript?u=76281980&t=33)** In general, querySelector and querySelectorAll are more versatile, but you may see getElementByID in legacy code.
>
> **[0:40](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/select-elements-with-vanilla-javascript?u=76281980&t=40)** Looking at our Explore California form, remember our first goal is to collect address city and state info and then use that to retrieve and display zip info.
>
> **[0:50](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/select-elements-with-vanilla-javascript?u=76281980&t=50)** So we'll need to reference those four form fields in the DOM.
>
> **[0:54](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/select-elements-with-vanilla-javascript?u=76281980&t=54)** So in the [[HTML]] code for the contact form, I'll start by searching for address and it takes me to the code for the address field with the city, state and zip just below that.
>
> **[1:06](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/select-elements-with-vanilla-javascript?u=76281980&t=66)** The easiest way to get references to these input elements will be with their ID values, and helpfully, those are address, city, state, and zip.
>
> **[1:16](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/select-elements-with-vanilla-javascript?u=76281980&t=76)** Back in my [[JavaScript]], I'm going to create new constants just below my URL variables.
>
> **[1:23](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/select-elements-with-vanilla-javascript?u=76281980&t=83)** So const addressField.
>
> **[1:26](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/select-elements-with-vanilla-javascript?u=76281980&t=86)** Now querySelector is a method of the document object.
>
> **[1:30](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/select-elements-with-vanilla-javascript?u=76281980&t=90)** So it's document.query Selector ('#address').
>
> **[1:38](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/select-elements-with-vanilla-javascript?u=76281980&t=98)** That gives me a reference to the input box where users will type the address and likewise const cityField =document.querySelector ('#address'), const stateField is document.querySelector ('#state').
>
> **[2:01](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/select-elements-with-vanilla-javascript?u=76281980&t=121)** Now, sometimes we have legacy code that uses a library like jQuery to select elements.
>
> **[2:06](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/select-elements-with-vanilla-javascript?u=76281980&t=126)** Back in the day, jQuery was a lot easier, but these days, if you're only using it for DOM manipulation, then you may be able to convert everything to [[Vanilla]] JavaScript and remove jQuery as a dependency.
>
> **[2:18](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/select-elements-with-vanilla-javascript?u=76281980&t=138)** So let's write a jQuery statement to select the zip field, and that's going to be const zip Field with dollar sign equals $('#zip').
>
> **[2:29](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/select-elements-with-vanilla-javascript?u=76281980&t=149)** Notice it's really similar.
>
> **[2:32](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/select-elements-with-vanilla-javascript?u=76281980&t=152)** All we're doing is replacing the dollar with document.querySelector and leaving out the dollar in the variable name.
>
> **[2:38](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/select-elements-with-vanilla-javascript?u=76281980&t=158)** So I'll comment this line out and then I'll replace it with the Vanilla JavaScript version.
>
> **[2:44](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/select-elements-with-vanilla-javascript?u=76281980&t=164)** So that's const zipField with no dollar sign equals document.querySelector ('#zip').
>
> **[2:52](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/select-elements-with-vanilla-javascript?u=76281980&t=172)** And I'll save those changes.
>
> **[2:54](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/select-elements-with-vanilla-javascript?u=76281980&t=174)** And now I have references saved for all the DOM elements that I'll be working with in the form.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (3), [[Vanilla]] (2), [[HTML]] (1)
> **Code Identifiers:** queryselector (8), jquery (4), queryselectorall (2), getelementbyid (2), addressfield (1)
> **Env Vars:** dom (5), css (2), html (1), url (1)
> **Analogies:** similar to (1), such as (1)
> **CLI Commands:** make (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)

#### [Request data in response to an event](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/request-data-in-response-to-an-event?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/request-data-in-response-to-an-event?u=76281980&t=0)** Where DOM manipulation really shines is when your code changes the view in response to an event, whether that's a user event or a browser event.
>
> **[0:08](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/request-data-in-response-to-an-event?u=76281980&t=8)** My plan for this form is to respond to a user leaving either the address, city or state field.
>
> **[0:13](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/request-data-in-response-to-an-event?u=76281980&t=13)** Leaving a field triggers the blur event, and whenever a user leaves one of these fields, my code is going to check if all three of them have content, and if they do, then I want to fire off a request to Geocodio, sending those three pieces of info and getting back additional data on that address, which includes the nine digit zip.
>
> **[0:35](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/request-data-in-response-to-an-event?u=76281980&t=35)** In my code, the first thing I want to do is define a new function called check completion, and I'm going to call that each time a user leaves one of those fields.
>
> **[0:44](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/request-data-in-response-to-an-event?u=76281980&t=44)** I'll put that below my create request function.
>
> **[0:53](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/request-data-in-response-to-an-event?u=76281980&t=53)** I can check the value of a form field using the value property of the referenced element. So I'll check if the address field .value is not equal to empty quotes, and city field .value is not equal to empty quotes, and state field .value is not equal to empty quotes.
>
> **[1:21](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/request-data-in-response-to-an-event?u=76281980&t=81)** If all of these are true, then I need to actually build out a request to Geocodio using the information the user entered.
>
> **[1:29](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/request-data-in-response-to-an-event?u=76281980&t=89)** Now back up top.
>
> **[1:30](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/request-data-in-response-to-an-event?u=76281980&t=90)** I'm going to comment out my Geocodio URL constant.
>
> **[1:35](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/request-data-in-response-to-an-event?u=76281980&t=95)** I no longer need a hardcoded value for testing, so I want to update this to allow for passing values from my form with my query.
>
> **[1:43](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/request-data-in-response-to-an-event?u=76281980&t=103)** This URL has three parts the base URL which is the URL in the path.
>
> **[1:49](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/request-data-in-response-to-an-event?u=76281980&t=109)** Then the actual query string which follows Q equals in the code, and finally the API key.
>
> **[1:56](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/request-data-in-response-to-an-event?u=76281980&t=116)** First I'll create a constant called Geocodio base URL and I'll add quotes and I'll copy in everything from my commented out constant from Https all the way through Q equals.
>
> **[2:14](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/request-data-in-response-to-an-event?u=76281980&t=134)** And I'll paste that between the quotes in the new constant.
>
> **[2:19](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/request-data-in-response-to-an-event?u=76281980&t=139)** And I'm going to use that as my base URL for my request.
>
> **[2:23](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/request-data-in-response-to-an-event?u=76281980&t=143)** And this will always form the start of my URL when I make a request to Geocodio.
>
> **[2:28](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/request-data-in-response-to-an-event?u=76281980&t=148)** I'll also create a second constant called Geocodio API key.
>
> **[2:35](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/request-data-in-response-to-an-event?u=76281980&t=155)** That's going to have a string value, and that's going to contain my API key from my original query.
>
> **[2:42](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/request-data-in-response-to-an-event?u=76281980&t=162)** So I can just copy that.
>
> **[2:44](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/request-data-in-response-to-an-event?u=76281980&t=164)** These pieces will always be part of my request URL.
>
> **[2:48](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/request-data-in-response-to-an-event?u=76281980&t=168)** For the middle part, I need to specify the actual text that the user has entered into the form.
>
> **[2:54](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/request-data-in-response-to-an-event?u=76281980&t=174)** So back down to my check completion function.
>
> **[2:58](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/request-data-in-response-to-an-event?u=76281980&t=178)** I'll create a constant called request URL and I'm going to use this to concatenate.
>
> **[3:05](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/request-data-in-response-to-an-event?u=76281980&t=185)** Geocodio base URL plus address field .value plus state field
>
> **[3:15](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/request-data-in-response-to-an-event?u=76281980&t=195)** .value plus the string ampersand fields equals zip4,
>
> **[3:24](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/request-data-in-response-to-an-event?u=76281980&t=204)** which was part of my original request.
>
> **[3:27](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/request-data-in-response-to-an-event?u=76281980&t=207)** And this is what lets Geocodio know that we want that nine digit zip code.
>
> **[3:32](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/request-data-in-response-to-an-event?u=76281980&t=212)** And then finally the text ampersand API underscore key equals plus Geocodio API key, which is the variable I just created.
>
> **[3:45](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/request-data-in-response-to-an-event?u=76281980&t=225)** And after that constant I want to call create request and passed in that request URL constant that I just created.
>
> **[3:55](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/request-data-in-response-to-an-event?u=76281980&t=235)** And I'm going to clean up my code here a little bit.
>
> **[3:58](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/request-data-in-response-to-an-event?u=76281980&t=238)** It's going to be a little easier to read if I put each of these on a separate line. Now there's one other thing I have to tighten up here when I'm specifying the address field, city field and state field, those are all going to be sent along to Geocodio, but it wants me to put a plus sign between the text of each of these.
>
> **[4:17](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/request-data-in-response-to-an-event?u=76281980&t=257)** Right now I have a literal plus sign to concatenate things, but I also need to add in a literal plus sign and then another plus after address field and after state field.
>
> **[4:30](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/request-data-in-response-to-an-event?u=76281980&t=270)** And it looks like I forgot my city field here.
>
> **[4:32](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/request-data-in-response-to-an-event?u=76281980&t=272)** So let me add that in while I'm at it.
>
> **[4:34](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/request-data-in-response-to-an-event?u=76281980&t=274)** So this is going to be city field .value plus literal plus sign plus the next line.
>
> **[4:41](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/request-data-in-response-to-an-event?u=76281980&t=281)** So now I have this check completion function done.
>
> **[4:44](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/request-data-in-response-to-an-event?u=76281980&t=284)** And I'll be able to use it to make a request to Geocodio with the information the user is entered.
>
> **[4:50](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/request-data-in-response-to-an-event?u=76281980&t=290)** If the user has completed all three of the required fields, and it looks like I have an extra parentheses down here, and now I have all this red squiggles gone, so my code looks good.
>
> **[5:01](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/request-data-in-response-to-an-event?u=76281980&t=301)** I'll end that with the semicolon and I'm ready to use this as I get my validation going in this app.

> [!info]- Semantic Content
>
> **Env Vars:** url (11), api (5), dom (1)
> **CLI Commands:** make (2)

#### [Add an event listener](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/add-an-event-listener?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/add-an-event-listener?u=76281980&t=0)** My check completion function will check if the address field, city field, and state field are all filled, and if so, it will then submit my request to Geocodio.
>
> **[0:09](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/add-an-event-listener?u=76281980&t=9)** The next thing I need to do to finish this up is to make sure that the function is called in response to the blur event on each of these three fields.
>
> **[0:18](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/add-an-event-listener?u=76281980&t=18)** To do that with [[JavaScript]], I use the addEventListener ( ) method, which takes two arguments: an event type as a string, and either a function name or an inline anonymous function.
>
> **[0:30](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/add-an-event-listener?u=76281980&t=30)** First, I want to add an event listener to the element I referenced with the address field variable, and I'm going to do that at the bottom of my file.
>
> **[0:38](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/add-an-event-listener?u=76281980&t=38)** So we'll say address addressField.AddEventListener, and I'll pass the event name blur as a string, and then I'll specify checkCompletion as the function.
>
> **[0:50](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/add-an-event-listener?u=76281980&t=50)** And I want to do the same thing for the other two fields.
>
> **[0:53](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/add-an-event-listener?u=76281980&t=53)** Because if a user changes info in any of these three fields, the query needs to be resubmitted So that's cityField.AddEventListener ('blur', checkCompletion), and stateField.AddEventListener ('blur', checkCompletion).
>
> **[1:12](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/add-an-event-listener?u=76281980&t=72)** I'm also going to comment out both of my calls to the createRequest function at the bottom.
>
> **[1:19](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/add-an-event-listener?u=76281980&t=79)** I used these for testing, but now I want all of my calls to be triggered by user events and not just happen by default when the page loads.
>
> **[1:28](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/add-an-event-listener?u=76281980&t=88)** Now I'll save my work and I'll go back to the [[HTML]] file and I'll start up my live server.
>
> **[1:34](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/add-an-event-listener?u=76281980&t=94)** And in my form I'm going to enter an address and we'll say 1600 Pennsylvania Avenue and Washington, D.C.
>
> **[1:45](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/add-an-event-listener?u=76281980&t=105)** Now when I tabbed out of each field, that was the blur event.
>
> **[1:49](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/add-an-event-listener?u=76281980&t=109)** So I'm going to open up my console and I can see that I have some data here.
>
> **[1:54](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/add-an-event-listener?u=76281980&t=114)** If I open up that object, I can see address components.
>
> **[1:58](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/add-an-event-listener?u=76281980&t=118)** And I actually have five different results from Geocodio as a result of the address that I entered here in the form. So I've written code to access data from the DOM.
>
> **[2:09](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/add-an-event-listener?u=76281980&t=129)** And then I've used that data to create and send an [[AJAX]] request.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1), [[HTML]] (1), [[AJAX]] (1)
> **Code Identifiers:** checkcompletion (3), addeventlistener (1), addressfield (1), cityfield (1), statefield (1)
> **Env Vars:** html (1), dom (1)
> **File Paths:** d.c (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Definitions:** is called (1)

#### [Work with JSON data](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-json-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-json-data?u=76281980&t=0)** After you receive the response from your [[AJAX]] request, you have to dig into it and find the specific data you need.
>
> **[0:06](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-json-data?u=76281980&t=6)** [[JavaScript]] Object Notation, or [[JSON]], is by far the most common format used to exchange data on the modern web.
>
> **[0:13](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-json-data?u=76281980&t=13)** JSON data is transmitted as a string, so in general, the first thing you need to do is parse it into the data format it encodes.
>
> **[0:22](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-json-data?u=76281980&t=22)** Although the [[Microsoft Word|word]] object is in the name, JSON data could parse out as either an object or an array, which is technically just another type of object in JavaScript.
>
> **[0:32](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-json-data?u=76281980&t=32)** To parse a JSON string, you use the parse method of the JSON object, which is built into JavaScript.
>
> **[0:40](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-json-data?u=76281980&t=40)** However, the basic structure of a [[Fetch]] request takes care of the parsing for you, so you don't actually need to use the JSON.parse command.
>
> **[0:49](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-json-data?u=76281980&t=49)** In my create request function, I pass the API response to my handle errors function, and the first line of that function passes the data from a successful response through the response JSON method, which returns an object or an array.
>
> **[1:03](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-json-data?u=76281980&t=63)** So there's no need to call JSON parse after this because it converts the JSON string to something we can work with in JavaScript.
>
> **[1:12](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-json-data?u=76281980&t=72)** I'm going to switch over to contact.htm and open it with Live Server, and then in the browser I'll enter some test data.
>
> **[1:23](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-json-data?u=76281980&t=83)** And I'll open the console.
>
> **[1:26](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-json-data?u=76281980&t=86)** And I can click the triangle here next to object and start to explore the structure.
>
> **[1:32](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-json-data?u=76281980&t=92)** The object contains two properties.
>
> **[1:35](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-json-data?u=76281980&t=95)** One is the input object, which is the data I entered in the form.
>
> **[1:38](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-json-data?u=76281980&t=98)** The other is results, and that's an array of candidate addresses that Geocodio is suggesting for this data.
>
> **[1:46](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-json-data?u=76281980&t=106)** A nested data structure like this is common in Ajax responses.
>
> **[1:50](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-json-data?u=76281980&t=110)** The array contains objects for five different addresses and I can keep clicking triangles to dig down.
>
> **[1:57](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-json-data?u=76281980&t=117)** I'll start with the first one, and I notice a fields property which contains a zip4 property.
>
> **[2:04](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-json-data?u=76281980&t=124)** So I'll open that up and within the zip4 object, there's a plus4 property, which I could combine with the five digit zip code elsewhere in the data to create the nine digit zip.
>
> **[2:15](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-json-data?u=76281980&t=135)** But there's also a zip9 property and that already does it for me.
>
> **[2:21](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-json-data?u=76281980&t=141)** So this is what I want to grab from the results.
>
> **[2:24](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-json-data?u=76281980&t=144)** One of the challenges in accessing data that's returned from an Ajax request is building up the combination of square bracket notation and dot notation that's necessary to reference each specific piece of data you want from the response.
>
> **[2:38](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-json-data?u=76281980&t=158)** This is another place where browser developer tools can help.
>
> **[2:42](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-json-data?u=76281980&t=162)** I can right click the data I want and then I can click Copy Property Path.
>
> **[2:48](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-json-data?u=76281980&t=168)** Back in my code, I want to create a constant to store the nine digit zip within my handle success function.
>
> **[2:56](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-json-data?u=76281980&t=176)** Make sure I have a semicolon after my console.log statement here, and then I'm going to create a const called zip9, and I need to reference the object that this data comes from, which is data.
>
> **[3:11](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-json-data?u=76281980&t=191)** And I'll type a dot and then I'll paste the path that I copied.
>
> **[3:16](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-json-data?u=76281980&t=196)** This path grabs the first result in the array of matches and then in fields goes into zip4, goes into zip9 and grabs the first element in the array.
>
> **[3:27](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-json-data?u=76281980&t=207)** Now I might find after some more testing, that the first result in either of those arrays is not necessarily what I want.
>
> **[3:34](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-json-data?u=76281980&t=214)** So I might need to write additional code to present choices to users and let them select one.
>
> **[3:39](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-json-data?u=76281980&t=219)** But at this stage, when I'm getting my app working, this code will work with all valid responses from the Geocodio API.
>
> **[3:46](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-json-data?u=76281980&t=226)** And as I continue developing my integration, my ongoing testing should validate whether this approach is accurate enough for my purposes.
>
> **[3:55](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-json-data?u=76281980&t=235)** So I'm going to finish up here by adding a console.log statement for zip9.
>
> **[4:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-json-data?u=76281980&t=240)** Then I'll save those changes and back in my browser I will test again.
>
> **[4:07](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-json-data?u=76281980&t=247)** I can use the autocompletion in my browser to just re-enter those same values.
>
> **[4:12](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-json-data?u=76281980&t=252)** I just need to make sure to tab out of that third field and in the console I see that right after logging that full data at the top, I have my nine digit zip code logged, so I was able to successfully reference that nine digit zip code within the incoming data and use it within my code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (9), [[JavaScript]] (4), [[AJAX]] (3), [[Microsoft Word|Word]] (1), [[Fetch]] (1)
> **Env Vars:** json (9), api (2)
> **CLI Commands:** find (2), make (2)
> **UI Navigation:** open the (1)
> **Best Practices:** make sure to (1)

#### [Modify form values with vanilla JavaScript](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-form-values-with-vanilla-javascript?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-form-values-with-vanilla-javascript?u=76281980&t=0)** My form has event listeners and logic that performs step one of my plan.
>
> **[0:05](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-form-values-with-vanilla-javascript?u=76281980&t=5)** I also have an API request in response, and I've created a reference to the data I need from the response to complete step two and finalize my feature.
>
> **[0:14](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-form-values-with-vanilla-javascript?u=76281980&t=14)** I just need to actually put the data from the API response into the form.
>
> **[0:20](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-form-values-with-vanilla-javascript?u=76281980&t=20)** To add data to a form field, I can use the same value property of the element reference that I used to get the values from the other input elements.
>
> **[0:28](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-form-values-with-vanilla-javascript?u=76281980&t=28)** I have a reference to the zipcode input element saved with the variable name zip fields.
>
> **[0:34](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-form-values-with-vanilla-javascript?u=76281980&t=34)** So in my handle success function, I can comment out both of those console.log statements and instead I can specify what I want to do and that is zip field.value=zip9.
>
> **[0:49](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-form-values-with-vanilla-javascript?u=76281980&t=49)** And then I'll save that.
>
> **[0:51](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-form-values-with-vanilla-javascript?u=76281980&t=51)** Go to my [[HTML]] file and go live and I'll enter my testing address.
>
> **[0:57](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-form-values-with-vanilla-javascript?u=76281980&t=57)** I got a tab out of that last field And then I get that zip code auto completed in the zip field after a moment.
>
> **[1:05](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-form-values-with-vanilla-javascript?u=76281980&t=65)** So behind the scenes, I had completed the values for all three fields I tabbed out of that third field.
>
> **[1:11](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-form-values-with-vanilla-javascript?u=76281980&t=71)** The request was sent, the response was parsed, and then the nine digit zip was added to that zip field.
>
> **[1:18](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-form-values-with-vanilla-javascript?u=76281980&t=78)** Great.
>
> **[1:19](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-form-values-with-vanilla-javascript?u=76281980&t=79)** So this completes the feature that I've been building.
>
> **[1:23](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-form-values-with-vanilla-javascript?u=76281980&t=83)** So far, I've been customizing this handleSuccess function for my form data, but my code is currently written to use all the same functions for both my address request and my National parks request.
>
> **[1:34](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-form-values-with-vanilla-javascript?u=76281980&t=94)** Both of these sets of data are going to require very different UI updates, so I need to refactor my code to keep the main [[Fetch]] code usable for any request, while ensuring that each response gets a custom handler.
>
> **[1:47](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-form-values-with-vanilla-javascript?u=76281980&t=107)** And that starts with handleSuccess, which is now just for the Geocodio request.
>
> **[1:53](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-form-values-with-vanilla-javascript?u=76281980&t=113)** So I'm going to rename that handle GeocodioSuccess, and then I'll create a new const called handleParkSuccess.
>
> **[2:05](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-form-values-with-vanilla-javascript?u=76281980&t=125)** And right now I'll just console.log(data) for that function.
>
> **[2:10](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-form-values-with-vanilla-javascript?u=76281980&t=130)** It looks like I have an issue here and that's just I put my arrow in the wrong place.
>
> **[2:15](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-form-values-with-vanilla-javascript?u=76281980&t=135)** This needs to be an equal sign.
>
> **[2:16](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-form-values-with-vanilla-javascript?u=76281980&t=136)** That needs to be an arrow and I'll save that.
>
> **[2:20](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-form-values-with-vanilla-javascript?u=76281980&t=140)** Now, right now the handleErrors function is the same for both.
>
> **[2:25](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-form-values-with-vanilla-javascript?u=76281980&t=145)** But eventually, I may want to do some different things with the UI.
>
> **[2:29](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-form-values-with-vanilla-javascript?u=76281980&t=149)** So I will change this to handleGeocodioErrors, and then I'll make a copy of this.
>
> **[2:36](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-form-values-with-vanilla-javascript?u=76281980&t=156)** Just a straight duplicate for right now, and I'll rename that handleParkErrors.
>
> **[2:44](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-form-values-with-vanilla-javascript?u=76281980&t=164)** Then, down in my createRequest function I want to take a couple more parameters.
>
> **[2:52](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-form-values-with-vanilla-javascript?u=76281980&t=172)** So in addition to URL I want to take errors and success.
>
> **[2:58](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-form-values-with-vanilla-javascript?u=76281980&t=178)** And these should be the names of the correct error handling and success handling functions.
>
> **[3:04](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-form-values-with-vanilla-javascript?u=76281980&t=184)** So then down in my then statements, I need to update the function names to refer to the errors and success parameters.
>
> **[3:12](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-form-values-with-vanilla-javascript?u=76281980&t=192)** So this is going to use errors and this is going to use success.
>
> **[3:16](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-form-values-with-vanilla-javascript?u=76281980&t=196)** Then continuing on the check completion function is custom for the Geocodio request.
>
> **[3:23](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-form-values-with-vanilla-javascript?u=76281980&t=203)** So I can customize the create request function call at the end.
>
> **[3:27](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-form-values-with-vanilla-javascript?u=76281980&t=207)** Adding handleGeocodioErrors and handleGeocodioSuccess as additional arguments.
>
> **[3:35](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-form-values-with-vanilla-javascript?u=76281980&t=215)** So now the [[Representational State Transfer (REST)|rest]] of the functions should work correctly, and they should end up with the appropriate success and fail callbacks.
>
> **[3:42](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-form-values-with-vanilla-javascript?u=76281980&t=222)** And then for the National park request, which is currently just a simple create request function call statement, I'll uncomment that call and I need to add my other two arguments.
>
> **[3:54](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-form-values-with-vanilla-javascript?u=76281980&t=234)** So handleParkErrors and handleParkSuccess.
>
> **[4:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-form-values-with-vanilla-javascript?u=76281980&t=240)** And then I'll save my work and I'll check back in the browser.
>
> **[4:06](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-form-values-with-vanilla-javascript?u=76281980&t=246)** When opening up console I have an object log and that is my national park data.
>
> **[4:13](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-form-values-with-vanilla-javascript?u=76281980&t=253)** So I have the Park Service data log to the console using the refactored code.
>
> **[4:18](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-form-values-with-vanilla-javascript?u=76281980&t=258)** And then I also want to test the refactored code for Geocodio.
>
> **[4:23](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-form-values-with-vanilla-javascript?u=76281980&t=263)** So I will submit my sample data tab out of there.
>
> **[4:27](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-form-values-with-vanilla-javascript?u=76281980&t=267)** And I got my zip code completion.
>
> **[4:30](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-form-values-with-vanilla-javascript?u=76281980&t=270)** So now I have custom UI functions for the [[AJAX]] requests, while still sharing the main code to create the request and check the response.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1), [[Fetch]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[AJAX]] (1)
> **Code Identifiers:** handlesuccess (2), handleparksuccess (2), handlegeocodioerrors (2), handleparkerrors (2), handleerrors (1)
> **Env Vars:** api (2), html (1), url (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)

#### [Modify element content with vanilla JavaScript](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-element-content-with-vanilla-javascript?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-element-content-with-vanilla-javascript?u=76281980&t=0)** Selecting form elements is no different from selecting other DOM elements.
>
> **[0:04](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-element-content-with-vanilla-javascript?u=76281980&t=4)** You can use query selector, query selector all or any of the older, more specific methods, but getting or setting content from non form elements involves a different property text content.
>
> **[0:18](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-element-content-with-vanilla-javascript?u=76281980&t=18)** You can also reference any attribute of an element using .notation.
>
> **[0:23](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-element-content-with-vanilla-javascript?u=76281980&t=23)** For instance, you use .src for the source attribute of an image tag.
>
> **[0:29](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-element-content-with-vanilla-javascript?u=76281980&t=29)** The one exception is the class attribute, which requires you to use class name instead.
>
> **[0:36](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-element-content-with-vanilla-javascript?u=76281980&t=36)** To avoid confusion with the [[JavaScript]] class keyword, in some [[Design Systems]], it's common for an element to have multiple class names assigned, so it can be more convenient to use the class list property and its add and remove methods to manipulate which classes are assigned to an element.
>
> **[0:55](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-element-content-with-vanilla-javascript?u=76281980&t=55)** We can try this out by starting to customize what happens on our National Park Service request in the [[HTML]].
>
> **[1:03](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-element-content-with-vanilla-javascript?u=76281980&t=63)** All of this park data is going to go in the div element with the ID specials.
>
> **[1:09](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-element-content-with-vanilla-javascript?u=76281980&t=69)** So I'll do a search on that.
>
> **[1:10](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-element-content-with-vanilla-javascript?u=76281980&t=70)** And there's the element with the ID specials.
>
> **[1:14](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-element-content-with-vanilla-javascript?u=76281980&t=74)** It contains an H2 element with a nested tag for the park name and link.
>
> **[1:20](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-element-content-with-vanilla-javascript?u=76281980&t=80)** And there's an image element for a logo, and then a P element for a description.
>
> **[1:26](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-element-content-with-vanilla-javascript?u=76281980&t=86)** Notice that the specials element has a class value of hidden, which is defined in the CSS to display none.
>
> **[1:33](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-element-content-with-vanilla-javascript?u=76281980&t=93)** So once we add content to this section, we'll want to remove that class.
>
> **[1:39](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-element-content-with-vanilla-javascript?u=76281980&t=99)** Now first off I want to add in the logo.
>
> **[1:42](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-element-content-with-vanilla-javascript?u=76281980&t=102)** Now the API response for this API doesn't include any sort of per park image thumbnail.
>
> **[1:48](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-element-content-with-vanilla-javascript?u=76281980&t=108)** So instead I'm going to use a National Park Service logo for all of the parks.
>
> **[1:53](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-element-content-with-vanilla-javascript?u=76281980&t=113)** So I'm going to start by changing the source of the image element to the URL.
>
> **[1:58](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-element-content-with-vanilla-javascript?u=76281980&t=118)** So first off, I need a reference to that element in the HTML.
>
> **[2:03](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-element-content-with-vanilla-javascript?u=76281980&t=123)** So back in my JavaScript I'm going to create a variable for that will be a constant.
>
> **[2:09](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-element-content-with-vanilla-javascript?u=76281980&t=129)** I'll call that parkthumb for thumbnail and that'll be document.queryselector.
>
> **[2:16](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-element-content-with-vanilla-javascript?u=76281980&t=136)** And then that is in the element with the ID specials.
>
> **[2:20](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-element-content-with-vanilla-javascript?u=76281980&t=140)** And within the H2 element it's an image.
>
> **[2:24](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-element-content-with-vanilla-javascript?u=76281980&t=144)** I've got to make this all string.
>
> **[2:28](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-element-content-with-vanilla-javascript?u=76281980&t=148)** And then I'll close the semicolon.
>
> **[2:31](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-element-content-with-vanilla-javascript?u=76281980&t=151)** And then scrolling down to my handle Park success function, I'll reference parkthumb, and I can use .src to reference the source attribute.
>
> **[2:42](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-element-content-with-vanilla-javascript?u=76281980&t=162)** And then I'll set it to the path of a file in this project.
>
> **[2:46](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-element-content-with-vanilla-javascript?u=76281980&t=166)** Which is _images/nps_logo.svg The other thing I need to do is unhide the section containing the park content.
>
> **[2:58](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-element-content-with-vanilla-javascript?u=76281980&t=178)** So I'll start by creating another reference as a constant.
>
> **[3:03](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-element-content-with-vanilla-javascript?u=76281980&t=183)** So that'll be const parksection.
>
> **[3:07](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-element-content-with-vanilla-javascript?u=76281980&t=187)** And that's document.queryselector and I'm looking for the ID of specials,
>
> **[3:15](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-element-content-with-vanilla-javascript?u=76281980&t=195)** and that's my entire section.
>
> **[3:18](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-element-content-with-vanilla-javascript?u=76281980&t=198)** And then down in my park success handler, after the code that changes the image source, I'm going to add parksection.classlist.remove.
>
> **[3:30](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-element-content-with-vanilla-javascript?u=76281980&t=210)** hidden. Class list is a collection of all the class values, and the remove method lets me specify a class name to be removed, and by removing the hidden class, I'll be making this section visible once again.
>
> **[3:43](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-element-content-with-vanilla-javascript?u=76281980&t=223)** So I'll save my changes here.
>
> **[3:46](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-element-content-with-vanilla-javascript?u=76281980&t=226)** I'll go live with my HTML and I notice that I have the section displayed National Park Spotlight, and I also have that logo image showing up.
>
> **[3:57](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-element-content-with-vanilla-javascript?u=76281980&t=237)** Now the position is odd, but that's just because it's missing adjacent content.
>
> **[4:01](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-element-content-with-vanilla-javascript?u=76281980&t=241)** Once I finish this up, it's going to look fine.
>
> **[4:04](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/modify-element-content-with-vanilla-javascript?u=76281980&t=244)** So again, there's a lot of similarity in DOM manipulation between [[Forms]] and other elements, but those are the basic properties and methods that are going to get you the most mileage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3), [[JavaScript]] (2), [[Design Systems]] (1), [[Forms]] (1)
> **Env Vars:** html (3), dom (2), api (2), css (1), url (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** nps_logo (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)

#### [Challenge: Modify the DOM](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-modify-the-dom?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-modify-the-dom?u=76281980&t=5)** It's time for another challenge.
>
> **[0:07](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-modify-the-dom?u=76281980&t=7)** Ready to try your hand at adding content to the DOM?
>
> **[0:10](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-modify-the-dom?u=76281980&t=10)** To complete this challenge, write code that adds the data for the first park.
>
> **[0:14](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-modify-the-dom?u=76281980&t=14)** In the return data to the DOM, you'll add the full park name as the content of the A element in the special section, and you'll add the park URL as its href value.
>
> **[0:25](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-modify-the-dom?u=76281980&t=25)** Then you'll show the park description as the content of the P element.
>
> **[0:29](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-modify-the-dom?u=76281980&t=29)** Update the function call to respond to the DOMContentLoaded event on the window object.
>
> **[0:35](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-modify-the-dom?u=76281980&t=35)** For an extra challenge, update your code to display data for a random park in the results, rather than always the first one.
>
> **[0:43](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-modify-the-dom?u=76281980&t=43)** This challenge might take you around 20 minutes.
>
> **[0:46](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-modify-the-dom?u=76281980&t=46)** When you're done, join me in the next video and I'll go over how I approached it.

> [!info]- Semantic Content
>
> **Env Vars:** dom (2), url (1)
> **Cross-References:** in the next (1)

#### [Solution: Modify the DOM](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980)

> [!transcript]- Transcript
>
> **[0:06](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=6)** The first thing I need is references to a couple more DOM elements, and I've done this before.
>
> **[0:11](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=11)** So I'll create a const called parkName and that'll be a document.querySelector.
>
> **[0:19](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=19)** And that'll be #specials h2 a.
>
> **[0:23](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=23)** And then I'm going to create a const called parkDesc for description.
>
> **[0:28](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=28)** That'll be document.querySelector.
>
> **[0:32](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=32)** And that'll be just #specials P.
>
> **[0:37](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=37)** I'll save those changes.
>
> **[0:40](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=40)** Then I'll go to my [[HTML]] and I'll go live with that.
>
> **[0:43](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=43)** And I'll open my console.
>
> **[0:46](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=46)** And then I want to look at the data that I'm receiving from the National Park Service.
>
> **[0:51](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=51)** So I can see that the data is an object containing an array named data.
>
> **[0:56](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=56)** And if I dig in, each array element contains information on one park.
>
> **[1:01](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=61)** I need the full name of the first park as well as a URL for more information and a description.
>
> **[1:09](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=69)** So here's the full name Alcatraz Island.
>
> **[1:12](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=72)** So I'm going to copy that reference.
>
> **[1:14](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=74)** I'm going to right click and say Copy Property Path.
>
> **[1:18](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=78)** And then back in my [[JavaScript]] code, go down to handleParkSuccess I'm going to use my parkName reference.
>
> **[1:27](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=87)** And I want to set the textContent, and that's going to be equal to data. and then pasting in that reference.
>
> **[1:38](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=98)** So data is the name of the object I'm being passed in the handleParkSuccess.
>
> **[1:42](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=102)** So that's how I'm referencing it in this function, and then within that I want to go to data[0].name.
>
> **[1:49](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=109)** And I'll do the same thing for the URL.
>
> **[1:52](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=112)** So back in my data in the browser I see there is a URL property.
>
> **[1:57](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=117)** So I'm going to right click and say Çopy Property Path.
>
> **[1:59](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=119)** And I'll add a new line in my code parkName.href=data.
>
> **[2:08](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=128)** and then paste data[0].url.
>
> **[2:11](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=131)** And finally for the description, we have a description property here.
>
> **[2:17](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=137)** So I'm going to right click and grab the Property Path.
>
> **[2:20](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=140)** And back in my code parkDesc.textContent=data.
>
> **[2:29](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=149)** paste data.data [0].description.
>
> **[2:32](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=152)** And then I'll save that return to the browser.
>
> **[2:36](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=156)** And now everything is showing up.
>
> **[2:38](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=158)** So that's great.
>
> **[2:39](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=159)** I got the data back in the browser, and my code is parsing out information from that data and putting it in the DOM.
>
> **[2:46](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=166)** Now, unlike the code that runs on the Geocodio data, which happens in response to user input in the form the National Park Service request is happening every time our JavaScript code loads.
>
> **[2:56](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=176)** And that makes sense, but it's best practice to set up an event handler as well.
>
> **[3:01](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=181)** I want this [[AJAX]] request to happen only after the DOM finishes loading, so I'll switch back to my code and I'm going to go to the end of my app.js file.
>
> **[3:12](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=192)** And so this is the DOM content loaded event, and this ensures that all DOM elements have loaded before we try to reference any of them in the code.
>
> **[3:22](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=202)** And I'm going to set that on the window object.
>
> **[3:25](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=205)** So I'm just going to enclose my existing function call within window dot add event listener.
>
> **[3:32](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=212)** And that's going to be DOMContentLoaded.
>
> **[3:35](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=215)** And then I'm going to cut and paste that existing statement within that addEventListener statement.
>
> **[3:44](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=224)** And then I'll save that change.
>
> **[3:46](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=226)** I'll go back to my browser and everything works just the way it did before.
>
> **[3:51](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=231)** But now I've written my code in a way that I can be certain that the DOM is finished loading before I make this Ajax request.
>
> **[3:59](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=239)** Now for the bonus, I want to randomize which park has its information displayed.
>
> **[4:05](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=245)** The first thing I need to do is generate a random number, and I want to get a number that maps the length of the array.
>
> **[4:12](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=252)** So I need to multiply Math.random by data.data.length, which is the length of the array.
>
> **[4:19](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=259)** And then I can get an integer out of that using math.floor.
>
> **[4:23](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=263)** So this is going to be a handleParkSuccess.
>
> **[4:26](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=266)** I'm going to put this at the top after my console.log statement.
>
> **[4:30](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=270)** And it's going to be a constant called randNum for random number.
>
> **[4:35](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=275)** And so, I'm going to use math.floor as a way of getting an integer.
>
> **[4:41](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=281)** And I'm going to use that on Math.random which generates a random number, and I'm going to multiply that by data.data.length.
>
> **[4:51](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=291)** Now, that gives me a random number.
>
> **[4:53](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=293)** And then I just need to use that number value.
>
> **[4:57](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=297)** So instead of hardcoding zero in my three references to the return data, I'm going to replace zero with randNum which is the variable name of that random number.
>
> **[5:08](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=308)** And I'm going to do that in each of these three locations.
>
> **[5:13](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=313)** And I'm going to do one more thing here since I'm unhiding the section, I'm going to do that after everything else has happened.
>
> **[5:20](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=320)** This is unrelated to the randomizing.
>
> **[5:22](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=322)** It's just a way of cleaning up my code a little bit.
>
> **[5:25](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=325)** So I'm generating that random number.
>
> **[5:27](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=327)** I'm setting the source value for that image, changing the three elements to add content to them, and then I will display that whole section once it's been completed.
>
> **[5:40](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=340)** So, I'll save that change.
>
> **[5:42](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=342)** I'll go over to my code and instead of showing Alcatraz, which was the First National Park return, which was the one we were always showing, now we see Manzanar, which is a different National Park in California, and I should be able to reload and it's likely, it's not guaranteed, but it's likely I'll see yet another National Park here.
>
> **[6:01](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=361)** I saw Manzanar again, and now I see California National Park.
>
> **[6:07](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=367)** There's Manzanar again.
>
> **[6:09](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=369)** Lava Beds.
>
> **[6:10](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=370)** Now, this improves our design on this page because it lets different parks have a chance in the spotlight.
>
> **[6:16](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-modify-the-dom?u=76281980&t=376)** And if there was a new National Park in California that would automatically be added to the spotlight rotation because our randomization includes the entire length of the array and not a hardcoded value.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2), [[AJAX]] (2), [[HTML]] (1)
> **Code Identifiers:** parkname (3), handleparksuccess (3), queryselector (2), parkdesc (2), textcontent (2)
> **Env Vars:** dom (6), url (3), html (1)
> **UI Navigation:** go to (3)
> **Definitions:** is a  (2), is an  (1)
> **File Paths:** app.js (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)


### 4. Working with the Axios Library

[↑ Back to Table of Contents](#table-of-contents)

#### [Understand Axios](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-axios?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-axios?u=76281980&t=0)** It's easy to use [[Fetch]] to make [[AJAX]] requests in [[JavaScript]] because it's built into the language, and all modern browsers support it.
>
> **[0:07](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-axios?u=76281980&t=7)** However, you can use other approaches in your code instead by adding external libraries to your app.
>
> **[0:13](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-axios?u=76281980&t=13)** The Axios library has become widely used for Ajax requests on the web, because it offers some features that the built in tools don't.
>
> **[0:21](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-axios?u=76281980&t=21)** The basic structure of an Axios request is very similar to a Fetch request.
>
> **[0:25](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-axios?u=76281980&t=25)** It uses a Promise structure and then and catch statements.
>
> **[0:29](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-axios?u=76281980&t=29)** However, while Fetch assumes that you want to make a Get request unless you specify otherwise in initialization settings, Axios requires that you specify which HTTP verb you're using for every request.
>
> **[0:41](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-axios?u=76281980&t=41)** Even when you're using Get, one advantage of Axios over Fetch is that Axios passes a data object to the first .then statement in a JavaScript object, instead of requiring an extra step to parse data first.
>
> **[0:54](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-axios?u=76281980&t=54)** Axios can also identify and work with more types of errors than Fetch does. With Axios, you can organize your code by passing query parameters as an object rather than embedding them in a URL string.
>
> **[1:08](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-axios?u=76281980&t=68)** In addition, Axios supports a feature called interceptors, which lets you write code to run just before a request is sent or just after a response is received.
>
> **[1:18](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-axios?u=76281980&t=78)** Interceptors are helpful for preventing unnecessary requests and avoiding unnecessary response processing, which can improve the efficiency of a web app.
>
> **[1:27](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-axios?u=76281980&t=87)** If you're starting your own project and you aren't sure which to pick, either Fetch or Axios is probably a fine choice.
>
> **[1:34](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/understand-axios?u=76281980&t=94)** But understanding how each works and what the strong points of each one are will make it easier to work on a wider variety of coding projects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (6), [[AJAX]] (2), [[JavaScript]] (2)
> **CLI Commands:** make (3)
> **Env Vars:** http (1), url (1)
> **Prerequisites:** initialization (1)

#### [Create an Axios request](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-an-axios-request?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-an-axios-request?u=76281980&t=0)** I'm going to convert the code for my Geocodio API request from [[Fetch]] to Axios.
>
> **[0:05](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-an-axios-request?u=76281980&t=5)** The first thing I need to do is to include the Axios library in my project.
>
> **[0:10](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-an-axios-request?u=76281980&t=10)** I'll start on the Axios website, and I'll click the Get Started button to see what the project maintainers recommend.
>
> **[0:16](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-an-axios-request?u=76281980&t=16)** If I scroll down a little bit, it looks like there's several options for how to include the library.
>
> **[0:22](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-an-axios-request?u=76281980&t=22)** I'm not building a project with modules, so I'm going to use the CDN approach.
>
> **[0:27](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-an-axios-request?u=76281980&t=27)** I'll copy the link for jsDelivr and then in my [[HTML]] file I'll add that near the bottom just before the link to my app.js file.
>
> **[0:39](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-an-axios-request?u=76281980&t=39)** A library needs to be imported before a [[JavaScript]] file that references it.
>
> **[0:44](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-an-axios-request?u=76281980&t=44)** So I need my Axios script element first, and then my app.js script, which will use the Axios object.
>
> **[0:51](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-an-axios-request?u=76281980&t=51)** And I'll go ahead and save that change.
>
> **[0:53](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-an-axios-request?u=76281980&t=53)** Now, over in my JavaScript file to use Axios, I need to make several changes to my code and I'll start with the create request function.
>
> **[1:03](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-an-axios-request?u=76281980&t=63)** This is where I currently call the Fetch method.
>
> **[1:06](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-an-axios-request?u=76281980&t=66)** So I'm going to just copy that entire function.
>
> **[1:09](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-an-axios-request?u=76281980&t=69)** And then I'm going to comment out one of the copies just for reference.
>
> **[1:14](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-an-axios-request?u=76281980&t=74)** And then I need to make a few changes to the copy.
>
> **[1:17](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-an-axios-request?u=76281980&t=77)** First, I'm going to take out Fetch and I'm going to replace it with Axios.get The get here specifies that I'm making an http get request to simply retrieve data.
>
> **[1:29](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-an-axios-request?u=76281980&t=89)** Next I'm going to take out the first then statement.
>
> **[1:33](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-an-axios-request?u=76281980&t=93)** This statement converted the response to a data object and then try to differentiate between error types.
>
> **[1:39](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-an-axios-request?u=76281980&t=99)** Axios can do both of those things, so I don't need this preliminary step.
>
> **[1:45](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-an-axios-request?u=76281980&t=105)** I want to test my changes.
>
> **[1:47](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-an-axios-request?u=76281980&t=107)** But first, I want to scroll to the bottom of my code and comment out the window.add event listener statement for my NPS API call.
>
> **[1:55](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-an-axios-request?u=76281980&t=115)** The changes I'm making will break that call and trigger errors in the console, which would make debugging my geocoding calls more difficult.
>
> **[2:03](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-an-axios-request?u=76281980&t=123)** So I'll start by getting my Geocodio code working, and then I'll come back later to update the NPS code.
>
> **[2:09](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-an-axios-request?u=76281980&t=129)** I'll save my changes here and in my HTML file.
>
> **[2:13](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-an-axios-request?u=76281980&t=133)** I'll go live and I'll enter some sample data, tab out of that last field, and I'll open up the console.
>
> **[2:21](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-an-axios-request?u=76281980&t=141)** And I have an error here.
>
> **[2:23](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-an-axios-request?u=76281980&t=143)** My code is not finding the data that I'm looking for.
>
> **[2:26](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-an-axios-request?u=76281980&t=146)** The issue is actually pretty straightforward.
>
> **[2:29](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-an-axios-request?u=76281980&t=149)** When I parse the API response data with Fetch, I returned it as an object called data, which had a nested results property that contained the address and field information I wanted.
>
> **[2:40](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-an-axios-request?u=76281980&t=160)** When Axios returns data automatically, it provides not just the API data I'm looking for, but also data about the request that I can use in handling errors.
>
> **[2:51](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-an-axios-request?u=76281980&t=171)** This means my data is now one layer deeper in the object that I'm working with.
>
> **[2:56](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-an-axios-request?u=76281980&t=176)** To fix my code, all I need to do is add an extra data to my data reference, and that's up here on line 35.
>
> **[3:06](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-an-axios-request?u=76281980&t=186)** So it's going to be data. data.results.
>
> **[3:10](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-an-axios-request?u=76281980&t=190)** And I'll save that change.
>
> **[3:11](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-an-axios-request?u=76281980&t=191)** And then back in my browser I'll run one more test and I'll tab out of that last field.
>
> **[3:18](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-an-axios-request?u=76281980&t=198)** And there's my zip code. So I've successfully converted my Fetch request to use Axios.
>
> **[3:24](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/create-an-axios-request?u=76281980&t=204)** I still need to update my error handling code to work with the approach that Axios uses, but I have my basic request working.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (5), [[HTML]] (2), [[JavaScript]] (2)
> **Env Vars:** api (4), html (2), nps (2), cdn (1)
> **CLI Commands:** make (3)
> **File Paths:** app.js (2)
> **Code Identifiers:** jsdelivr (1)
> **UI Navigation:** scroll down (1)

#### [Handle errors with Axios](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-errors-with-axios?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-errors-with-axios?u=76281980&t=0)** Now that I have my Axios request and my success function working, I want to update my error handling code to work with Axios as well.
>
> **[0:08](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-errors-with-axios?u=76281980&t=8)** So down at my handleGeocodioEerrors function, I'm going to copy that and I'm going to comment out the original again.
>
> **[0:16](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-errors-with-axios?u=76281980&t=16)** So we have a reference to my existing error handling code starts by converting the promise object that [[Fetch]] returns to a [[JavaScript]] object.
>
> **[0:24](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-errors-with-axios?u=76281980&t=24)** Axios doesn't require that, so I'll remove that statement.
>
> **[0:29](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-errors-with-axios?u=76281980&t=29)** Looking at the Axios documentation, there's a section on handling errors.
>
> **[0:35](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-errors-with-axios?u=76281980&t=35)** Axios natively allows me to handle different types of errors differently.
>
> **[0:41](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-errors-with-axios?u=76281980&t=41)** If a response has an HTTP code in the two hundreds, it means it's a successful response and Axios provides specific data if that's the case.
>
> **[0:50](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-errors-with-axios?u=76281980&t=50)** It also uses a separate property if no data is returned, and if neither of these are the case, it shares the error message.
>
> **[0:59](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-errors-with-axios?u=76281980&t=59)** I could create a single statement in my code that just logs an object to the console, no matter what error comes in, but the Axios documentation includes a recommended structure for handling errors to ensure that what's logged to the console is what's most relevant to the error that happened.
>
> **[1:15](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-errors-with-axios?u=76281980&t=75)** So I'm going to copy the If else structure here and use that in my function.
>
> **[1:19](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-errors-with-axios?u=76281980&t=79)** So that's these lines starting with if and ending with that last console.log statement I'll copy that.
>
> **[1:25](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-errors-with-axios?u=76281980&t=85)** And then over in my function I'm going to take out this return statement and the .then statement.
>
> **[1:32](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-errors-with-axios?u=76281980&t=92)** And I'm going to paste in what I just copied.
>
> **[1:34](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-errors-with-axios?u=76281980&t=94)** If you wanted to you could go ahead and take out the comments here.
>
> **[1:38](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-errors-with-axios?u=76281980&t=98)** But they're giving us a little explanation of just what's going on here.
>
> **[1:41](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-errors-with-axios?u=76281980&t=101)** So I'll save those changes.
>
> **[1:43](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-errors-with-axios?u=76281980&t=103)** And then I want to test this errors function.
>
> **[1:46](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-errors-with-axios?u=76281980&t=106)** So I'm going to scroll up to my Geocodio API key.
>
> **[1:49](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-errors-with-axios?u=76281980&t=109)** I'm going to duplicate that.
>
> **[1:51](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-errors-with-axios?u=76281980&t=111)** I'm going to comment out the first one.
>
> **[1:54](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-errors-with-axios?u=76281980&t=114)** And then for the second one I'm going to delete a couple characters that will break my API key.
>
> **[2:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-errors-with-axios?u=76281980&t=120)** And it should generate an error when I make a request to Geocodio.
>
> **[2:05](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-errors-with-axios?u=76281980&t=125)** So in my [[HTML]] file I'll go live and I will run a test with sample information.
>
> **[2:12](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-errors-with-axios?u=76281980&t=132)** Tabbing out of that last field and then opening up my console, I can see that I got a status of 403 here, and if I dig into the error that I logged in my code, bad request request failed with status code 403.
>
> **[2:27](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-errors-with-axios?u=76281980&t=147)** So that gives me a little bit more information about the error.
>
> **[2:31](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-errors-with-axios?u=76281980&t=151)** Now I caused this error so I know what the root of it is.
>
> **[2:34](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-errors-with-axios?u=76281980&t=154)** But if this was an unintentional error, this information would help me start the debugging process back in my code.
>
> **[2:41](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-errors-with-axios?u=76281980&t=161)** I'll take out that broken API key and I'll uncomment the correct one.
>
> **[2:47](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-errors-with-axios?u=76281980&t=167)** Save that and then one more time back in the browser, I'll enter sample information tab out of that last field and I get a successful response.
>
> **[2:57](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-errors-with-axios?u=76281980&t=177)** So my code still works even with the updates to my handle error function.
>
> **[3:02](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-errors-with-axios?u=76281980&t=182)** So now I have working code that logs useful errors in the console in a few different situations.
>
> **[3:08](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/handle-errors-with-axios?u=76281980&t=188)** And I'm doing that all with Axios now instead of with fetch.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (2), [[JavaScript]] (1), [[HTML]] (1)
> **Env Vars:** api (3), http (1), html (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** handlegeocodioeerrors (1)
> **UI Navigation:** scroll up (1)
> **Best Practices:** recommended (1)

#### [Refactor parameters with Axios](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=0)** Like many APIs, Geocodio requires that I send the details about my API request as query parameters in the URL.
>
> **[0:07](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=7)** This means that after the base URL, I have a question mark followed by a series of parameter names and values.
>
> **[0:14](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=14)** Each parameter is separated from its value by an equal sign, and a new parameter is preceded by an and sign.
>
> **[0:21](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=21)** Right now, my check completion function builds out the query string for my request using string concatenation.
>
> **[0:28](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=28)** It grabs the URL, the values of a few form fields, and then adds the fields parameter and value, and then the API key parameter and value.
>
> **[0:38](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=38)** I formatted this code to be as easy to read as I could, but it still doesn't feel super well-organized to me.
>
> **[0:44](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=44)** Axios supports passing query parameters with the request as an object.
>
> **[0:49](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=49)** This means I can specify each parameter and value in one place, and then identify that as the query string in my Axios code, which I think will make my code easier to read and edit later on.
>
> **[1:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=60)** I'll start by refactoring my check completion function.
>
> **[1:04](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=64)** I will make a copy of this.
>
> **[1:07](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=67)** And I'll comment out the original for reference.
>
> **[1:13](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=73)** I still need the if statement with its three conditions, but after that, instead of building out the entire URL, I want to create a constant with an object as its value.
>
> **[1:25](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=85)** So I'll change request url to params as my constant name, and I'll delete Geocodio base URL here because I'm only interested in the params for the moment, and I'll take out that plus sign as well.
>
> **[1:38](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=98)** Axios requires an object containing a property named params.
>
> **[1:42](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=102)** To pass query parameters to Axios, I need to create an object containing a property named params.
>
> **[1:48](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=108)** So within my existing params object I need to add a nested object also called params.
>
> **[1:54](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=114)** And then I'll add my parameter values within that.
>
> **[1:58](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=118)** My request URL currently includes three parameters.
>
> **[2:01](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=121)** The first is q which is short for query and the value is the three strings from the address, city and state fields concatenated together.
>
> **[2:09](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=129)** So I'll add Q as my first object property, and I'll keep that same set of concatenated values as its value.
>
> **[2:18](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=138)** I've got a little extra tab in here, so I'll take out those spaces to make this more readable.
>
> **[2:26](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=146)** And I need to take out that plus at the end there and then I need a comma at the end.
>
> **[2:32](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=152)** Next, I'll convert the literal code for the fields parameter to an object property and value, and so that will be fields colon zip four.
>
> **[2:43](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=163)** And I'll do the same for API key.
>
> **[2:46](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=166)** So that'll be API underscore key colon.
>
> **[2:50](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=170)** With a value of Geocodio API key.
>
> **[2:53](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=173)** And I can take out the remains of my previous code down here.
>
> **[2:57](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=177)** I'm also going to add a little bit more indent here.
>
> **[3:01](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=181)** So it's clear that those values are all part of the Q value.
>
> **[3:06](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=186)** Now that I have my params object, I need to pass it to my Axios request.
>
> **[3:11](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=191)** First I'll go to my create request function.
>
> **[3:15](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=195)** I'll add params as a fourth parameter for the function, and then I'll call that as the second argument for my Axios dot get statement.
>
> **[3:25](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=205)** And now back in my check completion function, I have to add params as the fourth argument in my create request function call.
>
> **[3:33](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=213)** Finally, I need to update my Geocodio base URL value.
>
> **[3:37](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=217)** The current value includes a question mark and q equals at the end, but the q is now part of my params object, and Axios will add the question mark automatically when adding the query parameters at the end of the base URL.
>
> **[3:51](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=231)** So I'll delete all three of those characters from the end of my base URL.
>
> **[3:55](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=235)** And with all those changes made, I'll save my work.
>
> **[3:59](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=239)** Switch to my [[HTML]] file and go live, and I'll run some test data, tab out of that last field and I'll open my console.
>
> **[4:11](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=251)** And it looks like I have one issue here.
>
> **[4:13](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=253)** Line 102 request URL is not defined.
>
> **[4:16](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=256)** Let's check that out.
>
> **[4:18](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=258)** And it looks like I forgot to make one final change.
>
> **[4:22](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=262)** And that's here.
>
> **[4:23](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=263)** I'm no longer defining a request URL, a constant here, and instead I want to refer to the base URL that I've defined at the beginning of my file.
>
> **[4:32](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=272)** And that's going to just be Geocodio base URL.
>
> **[4:35](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=275)** And so my request is going to concatenate the base URL with the params that I'm specifying here.
>
> **[4:41](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=281)** So I'm going to save that.
>
> **[4:43](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=283)** I'll go back to my live file and I'll test this one more time.
>
> **[4:48](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=288)** Tab out.
>
> **[4:50](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=290)** And I got my completed zip code.
>
> **[4:53](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=293)** So the code still works the same.
>
> **[4:55](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=295)** But now my base URL is just the URL without parameters, and the params themselves are clearly pulled out into their own object, where the parameter names and values are clearly distinguishable.
>
> **[5:08](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/refactor-parameters-with-axios?u=76281980&t=308)** And this is going to make my code easier to maintain.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **Env Vars:** url (16), api (5), html (1)
> **CLI Commands:** make (5)
> **UI Navigation:** go to (1), switch to (1)
> **Definitions:** means that (1), short for (1)
> **Cross-References:** go back to (1)

#### [Implement interceptors with Axios](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=0)** Interceptors are another unique feature of Axios.
>
> **[0:03](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=3)** In a standard [[AJAX]] request, your code builds a request, makes a call to the API and receives a response, which is then passed to code that handles the response.
>
> **[0:13](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=13)** Interceptors allow you to specify code that runs just before the API request is sent, and just after the response is received.
>
> **[0:22](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=22)** A request interceptor enables your app to check whether a request is necessary before sending it.
>
> **[0:27](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=27)** While the Response interceptor can make a quick check of the data and decide whether it needs further processing for my code, imagine the API did not return a complete formatted nine digit zip address.
>
> **[0:40](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=40)** In that case, I'd have to build it myself from the base five digit zip and the separate zip plus four value.
>
> **[0:48](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=48)** The Geocodio API does return both of these pieces of data separately, so I'm going to rewrite my code to try out an interceptor to concatenate these two pieces of data after receiving the request.
>
> **[1:01](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=61)** Add them to the response data object and pass it along to the [[Representational State Transfer (REST)|rest]] of the code.
>
> **[1:06](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=66)** That will make my code to change the UI much briefer.
>
> **[1:09](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=69)** Right after my success function, I'm going to create a new constant called zip9 interceptor, and I'm going to set that equal to Axios.interceptors.response.use.
>
> **[1:24](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=84)** And that's going to take a function.
>
> **[1:26](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=86)** That function's going to grab an object that we'll call data.
>
> **[1:30](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=90)** And I'm going to put a semicolon at the end.
>
> **[1:33](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=93)** Now I could just call this Axios code directly without assigning it a variable name.
>
> **[1:40](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=100)** But by giving it a name, I then have the option to turn it off elsewhere in my code if I need to, so it just makes the interceptor more flexible.
>
> **[1:48](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=108)** Next, I want to check if my data contains a specific property.
>
> **[1:54](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=114)** So I'm going to do an if statement and I'm going to check for data .data.results.
>
> **[2:01](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=121)** This is just the start of the path to the data I receive back from Geocodio, but the results property is specific to Geocodio.
>
> **[2:10](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=130)** So this will let me distinguish between Geocodio data and the NPS data that I'm also working with in this app.
>
> **[2:17](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=137)** I'm assuming that the nine digit zip value isn't available, so I need to start by referencing the five digit and four digit values and then putting them together in a string.
>
> **[2:27](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=147)** I've dug into the data to identify where these values are.
>
> **[2:31](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=151)** If you need to do that yourself, if you'd rather copy them and type them, you can scroll down to the handle Geocodio Success function.
>
> **[2:40](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=160)** You can uncomment out line 52 here to console.log that data.
>
> **[2:44](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=164)** And then in the browser you can run a test.
>
> **[2:47](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=167)** You can look through that data, find these two pieces and actually copy the path to them.
>
> **[2:53](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=173)** But I'm going to walk through just typing it out.
>
> **[2:56](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=176)** So first we have the base zip code.
>
> **[2:58](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=178)** That's the five digits.
>
> **[2:59](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=179)** So I'm going to create a constant called base zip.
>
> **[3:02](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=182)** And that's data.data.results.
>
> **[3:06](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=186)** Square bracket zero.address underscore components.zip.
>
> **[3:15](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=195)** And we need one more piece of data which is the plus four.
>
> **[3:19](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=199)** So I'm going to create a constant called plus four.
>
> **[3:23](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=203)** And that's data.data.results.
>
> **[3:29](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=209)** Square bracket zero.fields.04.
>
> **[3:35](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=215)** plus four square bracket zero.
>
> **[3:38](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=218)** Then I want to put this data together and console.log it.
>
> **[3:42](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=222)** So we're going to console.log base zip plus a dash character plus plus four.
>
> **[3:51](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=231)** And I need to do one more thing here in my interceptor before I can test it.
>
> **[3:55](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=235)** And that's after the if statement.
>
> **[3:57](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=237)** I always need to return the data object.
>
> **[4:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=240)** So it's passed along to the code that's going to handle working with it.
>
> **[4:04](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=244)** So I'm just going to say return data.
>
> **[4:08](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=248)** So I'll save that interceptor and I'll go live with my [[HTML]].
>
> **[4:15](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=255)** I will test my code out by entering that address.
>
> **[4:19](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=259)** Tabbing out of that last field.
>
> **[4:21](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=261)** And I'm going to open up my console.
>
> **[4:23](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=263)** And I can see that I have that nine digit zip logged to the console.
>
> **[4:28](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=268)** So that is the console.log statement I just created.
>
> **[4:31](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=271)** And that's the constructed nine digit zip that I just put together.
>
> **[4:36](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=276)** So it's a proof of concept.
>
> **[4:38](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=278)** I know that my code is working now.
>
> **[4:39](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=279)** My interceptor is actually being used.
>
> **[4:42](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=282)** The zip code that's being completed on the form though is still from the previous code.
>
> **[4:47](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=287)** So I want to go in and make a couple changes to switch that over.
>
> **[4:52](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=292)** So back in my [[JavaScript]] code, I want to do one more thing in my interceptor.
>
> **[4:57](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=297)** Now that I know that I have that data available.
>
> **[5:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=300)** I want to actually add it to the data object.
>
> **[5:03](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=303)** So again the return data statement is going to take that data that was passed into the interceptor and pass it along to the next step in the process of working with it.
>
> **[5:15](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=315)** So I'm just going to take the data that I've concatenated.
>
> **[5:18](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=318)** And I'm going to add it as a property of that data object.
>
> **[5:21](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=321)** So I'll just say data zip9 equals base zip.
>
> **[5:27](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=327)** And actually I can just copy this from right above because it's exactly what I just did.
>
> **[5:31](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=331)** So the contents of the parens on the previous line, I'll just paste in and add a semicolon.
>
> **[5:36](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=336)** And so now I'm just creating my own property on that data object.
>
> **[5:39](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=339)** It's getting passed along.
>
> **[5:41](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=341)** And then I'll be able to reference that more easily.
>
> **[5:43](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=343)** Now I don't need to call my interceptor anywhere.
>
> **[5:45](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=345)** And we've already seen this.
>
> **[5:47](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=347)** It's going to be executed automatically every time I use Axios in this app.
>
> **[5:51](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=351)** The final thing to do, though, is to update my success handler instead of needing to locate and reference data nested within the API response.
>
> **[6:01](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=361)** All my handler has to do now is use the value I added to the data object in my interceptor.
>
> **[6:07](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=367)** So in my handle Geocodio success function, I'm going to comment out this const zip9.
>
> **[6:13](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=373)** And I'm going to comment out this zip field assignment statement.
>
> **[6:18](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=378)** And then I'm going to add my own statement which is zip field .value equals data .zip9.
>
> **[6:26](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=386)** And that's that data property I just added in my interceptor.
>
> **[6:30](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=390)** So now my handle success function is much more streamlined because I've offloaded some of that work into my interceptor.
>
> **[6:37](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=397)** So I'll save those changes.
>
> **[6:39](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=399)** Switch back to the browser and enter sample data one more time.
>
> **[6:45](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=405)** And now my zip code field is being completed using the data that we pulled out in the interceptor.
>
> **[6:54](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/implement-interceptors-with-axios?u=76281980&t=414)** So I'm using that interceptor to take care of a task before the data gets to my success handler code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AJAX]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[HTML]] (1), [[JavaScript]] (1)
> **Env Vars:** api (5), nps (1), html (1)
> **CLI Commands:** make (3), find (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** imagine (1)

#### [Challenge: Build an Axios request](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-build-an-axios-request?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-build-an-axios-request?u=76281980&t=5)** It's time for a challenge.
>
> **[0:07](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-build-an-axios-request?u=76281980&t=7)** Ready to try your hand at implementing Axios?
>
> **[0:10](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-build-an-axios-request?u=76281980&t=10)** The code for the Explore California page needs an update to use Axios for the National Park Service API call.
>
> **[0:16](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-build-an-axios-request?u=76281980&t=16)** The create request function is already rewritten, but a few more changes are needed to the code for the NPS call to work.
>
> **[0:24](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-build-an-axios-request?u=76281980&t=24)** First, the handle park response function needs to be updated to reference data that's nested within an extra data object.
>
> **[0:31](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-build-an-axios-request?u=76281980&t=31)** Next, the handle park errors function needs to be updated to match the structure of the errors function you created for the Geocodio request.
>
> **[0:40](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-build-an-axios-request?u=76281980&t=40)** You also need to separate out the query parameters from the NPS URL, and create a separate variable to contain them, using the same format that you used for the Geocodio request, you also need to update the function call in the event listener statement to include a params argument.
>
> **[0:57](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-build-an-axios-request?u=76281980&t=57)** For an extra challenge, create an interceptor that pulls the three pieces of data from the response and saves them to a sub object of the response data object called "park info", and then use that object in the success function.
>
> **[1:11](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-build-an-axios-request?u=76281980&t=71)** This is a longer challenge that might take you around 30 minutes.
>
> **[1:15](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-build-an-axios-request?u=76281980&t=75)** When you're done, join me in the next video and I'll go over how I approached it.

> [!info]- Semantic Content
>
> **Env Vars:** nps (2), api (1), url (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)

#### [Solution: Build an Axios request](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=5)** The first thing I need to do for my NPS request is to update the references to the data object.
>
> **[0:11](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=11)** Remember, in Axios, the data comes nested in an extra data object.
>
> **[0:17](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=17)** So I just need to update my paths in the handle park success function.
>
> **[0:21](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=21)** So that's here in my random constant data dot and in park name data dot in href data dot and in the description data dot.
>
> **[0:36](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=36)** Next I want to update my handle park errors function, and I just want to use the format that's recommended by the Axios developers.
>
> **[0:46](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=46)** So I'm just going to copy the contents of the handle Geocodio errors function.
>
> **[0:50](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=50)** I'm going to copy that.
>
> **[0:52](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=52)** And then I'm just going to take out the existing lines for handle park errors.
>
> **[0:56](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=56)** And I'm going to paste in what I copied And then I need to change my parameter to error to match the object that's expected in the code I just pasted in.
>
> **[1:07](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=67)** Now these two functions are the same now, and if I wasn't actually going to do any customization here, it would probably be smart to combine them and just have one generic handle errors function.
>
> **[1:18](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=78)** But for now, I'll keep them separate because that's how my code is structured, so I'll save those changes.
>
> **[1:24](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=84)** I also want to break up my NPS URL constant.
>
> **[1:29](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=89)** So I'm going to duplicate that.
>
> **[1:31](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=91)** And I'm going to comment out the first one for reference.
>
> **[1:36](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=96)** And then I want to strip my base URL down to everything before the question mark.
>
> **[1:44](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=104)** So I'm going to cut everything starting with the question mark until just before that final closing quote.
>
> **[1:52](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=112)** I'm going to cut that.
>
> **[1:54](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=114)** So now my base URL is just the URL section with the path.
>
> **[1:59](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=119)** And then I'm going to create a new constant called const NPS request params.
>
> **[2:06](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=126)** And that's going to be an object.
>
> **[2:08](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=128)** It's going to contain a params property.
>
> **[2:13](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=133)** Because remember that's what Axios expects.
>
> **[2:16](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=136)** And then within that params object I need to break up the content that I've just cut out of the existing URL.
>
> **[2:27](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=147)** So first I'll paste that in.
>
> **[2:29](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=149)** And then I'm just going to use that content and turn it into a set of properties and values.
>
> **[2:36](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=156)** So state code is my first parameter.
>
> **[2:40](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=160)** I'm going to replace that equal sign with a colon.
>
> **[2:42](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=162)** And the value is CA.
>
> **[2:44](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=164)** And I put a comma after that.
>
> **[2:47](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=167)** Then on the next line I can take out that and sign.
>
> **[2:50](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=170)** API key is my second parameter.
>
> **[2:53](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=173)** Replace that equals sign with a colon.
>
> **[2:56](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=176)** And then instead of literally including the API key here I want to save that as its own variable.
>
> **[3:02](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=182)** So I'm going to cut this content and I'm going to create one more variable const and NPS API key.
>
> **[3:12](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=192)** And in quotes I'm going to paste that value.
>
> **[3:15](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=195)** And now down in NPS request params I can just reference NPS API key.
>
> **[3:21](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=201)** And I'll put a semicolon at the end of that const statement.
>
> **[3:26](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=206)** And now down in my event listener I need to reference my new URL and my parameters.
>
> **[3:34](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=214)** So down at the end of my code I'm going to uncomment this event listener code.
>
> **[3:41](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=221)** And for my create request I'm still calling NPS URL.
>
> **[3:45](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=225)** And I need to add that fourth parameter here.
>
> **[3:48](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=228)** That fourth argument which is NPS request params.
>
> **[3:53](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=233)** So I'll save those changes.
>
> **[3:55](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=235)** I'll go live with my code.
>
> **[3:58](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=238)** So now over in the browser I can see I have National Park Service information loaded, and that's loading through Axios.
>
> **[4:07](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=247)** And just to verify, I will try out an address and that's completing as well.
>
> **[4:15](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=255)** So I have now my NPS code working with Axios alongside my Geocodio code working with Axios.
>
> **[4:23](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=263)** And we'll try one more thing here.
>
> **[4:25](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=265)** Back in the [[JavaScript]], let's test what happens when we get an error with our NPS request.
>
> **[4:32](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=272)** So I'm going to duplicate that API key.
>
> **[4:34](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=274)** I'm going to comment out the first one.
>
> **[4:36](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=276)** And I'm going to take a couple characters off the end of the second one.
>
> **[4:40](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=280)** I'm going to save that switch back to the browser, open up the console.
>
> **[4:45](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=285)** And I can see here that I have an error 403.
>
> **[4:49](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=289)** That was a bad request.
>
> **[4:51](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=291)** And I've got all this information logged about that issue.
>
> **[4:56](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=296)** And so again that gets me a start in debugging.
>
> **[5:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=300)** So I can see that I am actually able to use that error interceptor for the NPS request.
>
> **[5:07](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=307)** And I'll go back and take out that bad API key.
>
> **[5:11](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=311)** Uncomment the good one, save that back in the browser.
>
> **[5:17](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=317)** I've got information about a park loading again.
>
> **[5:20](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=320)** So my code's working well.
>
> **[5:22](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=322)** All right so that was the main challenge.
>
> **[5:24](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=324)** The last thing was to add an interceptor for the park service.
>
> **[5:28](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=328)** That would pull out the data we want and make it available as part of the data object to simplify our code elsewhere.
>
> **[5:35](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=335)** So I'm going to scroll down and create an interceptor, and I'll create that after the zip nine interceptor.
>
> **[5:42](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=342)** And I'll just call it Const Park Interceptor.
>
> **[5:45](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=345)** That's going to be Axios Interceptors dot response dot use.
>
> **[5:51](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=351)** That's going to take a data parameter.
>
> **[5:55](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=355)** And so here we want to check if we're getting Park service data.
>
> **[5:59](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=359)** And one way we can do that is say if data dot data dot data exists.
>
> **[6:05](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=365)** And that's something that differentiates Park Service data from Geocodio data.
>
> **[6:09](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=369)** Then we want to do a few things.
>
> **[6:11](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=371)** And here I'm really just porting over some of the manipulation code from elsewhere in my code.
>
> **[6:18](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=378)** So up in our handle park success function, I want to make that random number.
>
> **[6:24](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=384)** And I want to assign this data that I'm getting.
>
> **[6:28](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=388)** So I'm going to cut those four lines, the const and the three lines of value assignment.
>
> **[6:34](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=394)** And I'm going to come down to my park interceptor I'm going to paste those in and I'll have to make some edits to them.
>
> **[6:39](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=399)** So first off that random number that's still the same.
>
> **[6:44](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=404)** So we don't have to make any changes there.
>
> **[6:46](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=406)** But now I want to actually take these three pieces of data that I'm collecting here.
>
> **[6:51](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=411)** The park name, the link and the text content of the description.
>
> **[6:56](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=416)** And I want to turn those into an object and append that to the data object. So right after my random number constant, I'm going to create a statement that adds to the data object a new property called Park Info.
>
> **[7:11](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=431)** And that's going to be an object.
>
> **[7:14](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=434)** And I can just take these three lines, put those in the object and edit them up to be properties and values.
>
> **[7:19](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=439)** So I'm going to create a property called Park Name.
>
> **[7:23](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=443)** And I've already got the reference there.
>
> **[7:25](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=445)** And I'll replace the semicolon with a comma.
>
> **[7:27](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=447)** And then I'll use the second property.
>
> **[7:30](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=450)** I'll call that park href.
>
> **[7:32](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=452)** And again I'll turn that into a colon and I'll change the semicolon into a comma.
>
> **[7:40](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=460)** And then third one I'm just going to call park desk.
>
> **[7:43](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=463)** I've already got that.
>
> **[7:44](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=464)** I'm going to put in a colon.
>
> **[7:46](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=466)** I'm going to take out that semicolon.
>
> **[7:48](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=468)** And so now I've created an object called park info which I'm appending to the data object.
>
> **[7:55](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=475)** Now the last thing we need to do here I'm going to put a semicolon at the end of that statement.
>
> **[8:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=480)** And then after the if clause.
>
> **[8:03](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=483)** So right before the closing bracket.
>
> **[8:06](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=486)** And then for this const I need to return data.
>
> **[8:11](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=491)** And that's something we always need to do in an interceptor.
>
> **[8:14](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=494)** So I'll save that.
>
> **[8:15](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=495)** And then I need to do one more thing.
>
> **[8:17](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=497)** Now I want to use this data in my success function.
>
> **[8:22](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=502)** So up in handle park success right after my park thumb dot source statement, which isn't changed at this point, I do actually need to go back and reassign those values, the text content and href using these new references that I've created.
>
> **[8:39](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=519)** So it's going to be park name dot text content.
>
> **[8:43](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=523)** And that's going to be data dot park info, which is the object I just created Dot Park name.
>
> **[8:49](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=529)** And the same thing for park name dot ref in the DOM.
>
> **[8:54](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=534)** And that's going to be data dot park info dot park ref and then park disc dot text content. That's going to be data park info dot park desk.
>
> **[9:10](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=550)** And then we still have that statement at the end that removes the hidden class and makes this all visible.
>
> **[9:16](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=556)** So that's the interceptor.
>
> **[9:18](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=558)** And let's go ahead and test that out in the browser.
>
> **[9:21](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=561)** Now I have a link and I have a name, but I do not have a description.
>
> **[9:29](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=569)** So it looks like something I may have typed wrong.
>
> **[9:32](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=572)** And indeed I can see right here I typed park desk instead of park desk with a C for park description.
>
> **[9:39](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=579)** And that's a lesson to remember to use the autocomplete features in the editor because they help in situations like that.
>
> **[9:46](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=586)** And then back in the browser there's the description.
>
> **[9:49](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=589)** And so now I have moved that code to pull those pieces of data out of the data object and do all of that referencing.
>
> **[9:59](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-build-an-axios-request?u=76281980&t=599)** I put those in the interceptor, and I've slightly simplified the code in my handle success function.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1)
> **Env Vars:** nps (11), url (7), api (6), dom (1)
> **CLI Commands:** make (4)
> **Best Practices:** recommended (1), remember to (1)
> **UI Navigation:** scroll down (1)


### 5. Optimizing and Troubleshooting AJAX Requests

[↑ Back to Table of Contents](#table-of-contents)

#### [Structure AJAX requests for performance](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/structure-ajax-requests-for-performance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/structure-ajax-requests-for-performance?u=76281980&t=0)** Whether you're using [[Fetch]] or Axios, the way you structure an [[AJAX]] request impacts his performance.
>
> **[0:07](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/structure-ajax-requests-for-performance?u=76281980&t=7)** There are a few important considerations when creating a request that can help you ensure that your app is as responsive as possible.
>
> **[0:14](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/structure-ajax-requests-for-performance?u=76281980&t=14)** First off, you should aim to minimize the number of Ajax requests in your app.
>
> **[0:18](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/structure-ajax-requests-for-performance?u=76281980&t=18)** While it may be tempting to limit yourself to retrieving only the data you need in a particular part of your code, it's important to balance that against the performance that you take for each Ajax request.
>
> **[0:29](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/structure-ajax-requests-for-performance?u=76281980&t=29)** When you know you'll need additional data from the same source, or even if it's very likely, then you should go ahead and get everything in a single request, rather than repeating requests for smaller bytes of data.
>
> **[0:40](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/structure-ajax-requests-for-performance?u=76281980&t=40)** Second, Get requests are faster than Post requests, so when you have a choice, use get.
>
> **[0:46](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/structure-ajax-requests-for-performance?u=76281980&t=46)** Now, each of these verbs has its own specific use case.
>
> **[0:50](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/structure-ajax-requests-for-performance?u=76281980&t=50)** Get for retrieving data and post for creating a resource, but you may find that you're hitting a single endpoint using the same method for different requests.
>
> **[0:59](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/structure-ajax-requests-for-performance?u=76281980&t=59)** Even when you're simply retrieving data.
>
> **[1:01](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/structure-ajax-requests-for-performance?u=76281980&t=61)** You can improve the performance of your Ajax requests by identifying these unneeded Post requests and recoding them as Get.
>
> **[1:08](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/structure-ajax-requests-for-performance?u=76281980&t=68)** Finally, you can reduce the impact of your Ajax requests on performance by reducing the size of the data you're sending and receiving.
>
> **[1:16](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/structure-ajax-requests-for-performance?u=76281980&t=76)** One way to do this is to use the leanest data format that your app and that your endpoint can deal with.
>
> **[1:21](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/structure-ajax-requests-for-performance?u=76281980&t=81)** Obviously, plain text is free of structural characters, and using plain text enables you to minimize the size of the data stream.
>
> **[1:29](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/structure-ajax-requests-for-performance?u=76281980&t=89)** However, most requests and responses need some sort of structured data.
>
> **[1:33](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/structure-ajax-requests-for-performance?u=76281980&t=93)** Among popular formats and use [[JSON]] has the lowest overhead.
>
> **[1:37](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/structure-ajax-requests-for-performance?u=76281980&t=97)** XML has a much higher overhead because of the high ratio of structuring characters tags to data.
>
> **[1:44](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/structure-ajax-requests-for-performance?u=76281980&t=104)** Of course, if XML is required for a specific endpoint or application, there's not much you can do.
>
> **[1:49](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/structure-ajax-requests-for-performance?u=76281980&t=109)** But if a data source offers a choice, JSON is highly preferable over XML.
>
> **[1:55](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/structure-ajax-requests-for-performance?u=76281980&t=115)** If your Ajax requests use XML because your app is written to accept it, it may be useful to perform a cost benefit analysis of rewriting your app to accept a data format with lower overhead.
>
> **[2:06](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/structure-ajax-requests-for-performance?u=76281980&t=126)** Another way to reduce data size is to make sure you're hitting the right endpoint.
>
> **[2:10](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/structure-ajax-requests-for-performance?u=76281980&t=130)** If you're requesting user profile information, for instance, but the endpoint you're hitting returns full user information, including an array of recent activity, it's worth looking for a different endpoint that returns a narrower slice containing less data that you don't need.
>
> **[2:25](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/structure-ajax-requests-for-performance?u=76281980&t=145)** App development is a constant tug of war between adding features and increasing performance.
>
> **[2:31](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/structure-ajax-requests-for-performance?u=76281980&t=151)** Following these performance guidelines in your Ajax requests can keep them from adding bloat to your apps and keep your apps responsive.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AJAX]] (7), [[JSON]] (2), [[Fetch]] (1)
> **Env Vars:** xml (4), json (2)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Prerequisites:** you'll need (1)

#### [View requests and responses in the browser](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/view-requests-and-responses-in-the-browser?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/view-requests-and-responses-in-the-browser?u=76281980&t=0)** When you're working with [[AJAX]] requests, it can be useful to examine the actual HTTP request and response headers that are being sent when your code is executed.
>
> **[0:09](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/view-requests-and-responses-in-the-browser?u=76281980&t=9)** Modern browser developer tools let you record and review network activity, including each HTTP request for the current page.
>
> **[0:16](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/view-requests-and-responses-in-the-browser?u=76281980&t=16)** So let's check that out.
>
> **[0:18](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/view-requests-and-responses-in-the-browser?u=76281980&t=18)** I'm going to go live with my [[HTML]] code, and then I'm going to open up my developer tools.
>
> **[0:24](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/view-requests-and-responses-in-the-browser?u=76281980&t=24)** Both Chrome and Firefox developer tools include a network tab and I'm using Chrome.
>
> **[0:31](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/view-requests-and-responses-in-the-browser?u=76281980&t=31)** So in my developer tools I'm going to click network.
>
> **[0:36](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/view-requests-and-responses-in-the-browser?u=76281980&t=36)** And to really explore this, it's going to be easier for me to view this along the bottom of the screen rather than along the side.
>
> **[0:43](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/view-requests-and-responses-in-the-browser?u=76281980&t=43)** So I'm going to use these icons up here to change where those developer tools are shown.
>
> **[0:48](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/view-requests-and-responses-in-the-browser?u=76281980&t=48)** And I'm going to drag them up a little bit to let me see a little bit more.
>
> **[0:51](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/view-requests-and-responses-in-the-browser?u=76281980&t=51)** Now notice that the network list is pretty empty.
>
> **[0:55](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/view-requests-and-responses-in-the-browser?u=76281980&t=55)** Browsers generally want to avoid doing a bunch of work in the background and they want to keep from saving information that takes up memory, but that may never be viewed.
>
> **[1:05](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/view-requests-and-responses-in-the-browser?u=76281980&t=65)** So developer tools generally don't log network requests until you open the tab.
>
> **[1:10](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/view-requests-and-responses-in-the-browser?u=76281980&t=70)** Now with the tab open, I can reload this page.
>
> **[1:14](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/view-requests-and-responses-in-the-browser?u=76281980&t=74)** And now I see all the requests logged for this page, including CSS and JS files, fonts, images, and even my Ajax request for parks info.
>
> **[1:26](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/view-requests-and-responses-in-the-browser?u=76281980&t=86)** I can click any request to see details.
>
> **[1:29](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/view-requests-and-responses-in-the-browser?u=76281980&t=89)** So here's my National Park Service request, and I'll click that URL and the view changes to show me information about that request.
>
> **[1:37](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/view-requests-and-responses-in-the-browser?u=76281980&t=97)** So here in the headers tab I have a summary that tells me the URL I hit and the result which is a 200.
>
> **[1:45](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/view-requests-and-responses-in-the-browser?u=76281980&t=105)** Below that is a list of response headers.
>
> **[1:48](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/view-requests-and-responses-in-the-browser?u=76281980&t=108)** These are the key value pairs that my browser received from the NPS web service.
>
> **[1:54](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/view-requests-and-responses-in-the-browser?u=76281980&t=114)** And then further down there's a list of request headers, which is data that my browser sent to the NPS web service when making the request.
>
> **[2:05](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/view-requests-and-responses-in-the-browser?u=76281980&t=125)** On the preview tab, I can view the response body, which is the data I received back in the response a parsed version.
>
> **[2:13](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/view-requests-and-responses-in-the-browser?u=76281980&t=133)** And this is the data that I've already been working with in my code.
>
> **[2:17](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/view-requests-and-responses-in-the-browser?u=76281980&t=137)** But if I was having a problem with getting the right data back, this might be a quicker way to examine than doing a bunch of console logging in my code.
>
> **[2:25](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/view-requests-and-responses-in-the-browser?u=76281980&t=145)** I can watch this in action for my other API, so I'll scroll up on the page a little bit and I'll fill in a sample address. Tab out of that state field.
>
> **[2:37](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/view-requests-and-responses-in-the-browser?u=76281980&t=157)** And here I can see my Geocodio request that just happened as a result of that test information.
>
> **[2:45](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/view-requests-and-responses-in-the-browser?u=76281980&t=165)** And when I click that I can see information about this request.
>
> **[2:50](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/view-requests-and-responses-in-the-browser?u=76281980&t=170)** And again I have headers and I got a 200 response.
>
> **[2:56](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/view-requests-and-responses-in-the-browser?u=76281980&t=176)** I can see the payload which are the query string parameters that were sent.
>
> **[3:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/view-requests-and-responses-in-the-browser?u=76281980&t=180)** And here's a preview of that data.
>
> **[3:03](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/view-requests-and-responses-in-the-browser?u=76281980&t=183)** It can also look at the initiator tab.
>
> **[3:06](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/view-requests-and-responses-in-the-browser?u=76281980&t=186)** And this shows me the call stack.
>
> **[3:08](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/view-requests-and-responses-in-the-browser?u=76281980&t=188)** That is the series of functions that were called that resulted in this request.
>
> **[3:13](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/view-requests-and-responses-in-the-browser?u=76281980&t=193)** Now a lot of this is calls within the Axios library.
>
> **[3:17](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/view-requests-and-responses-in-the-browser?u=76281980&t=197)** But at the bottom I can see the two functions in my code that initiate the request create request and check completion.
>
> **[3:25](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/view-requests-and-responses-in-the-browser?u=76281980&t=205)** And then the bottom of this tab shows the URLs that the request was passed through from my localhost, which is 127.0.0.1 to the Axios library on the CDM.
>
> **[3:37](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/view-requests-and-responses-in-the-browser?u=76281980&t=217)** That's [jsdeliver.net](https://jsdeliver.net) And finally to Geocodio.
>
> **[3:41](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/view-requests-and-responses-in-the-browser?u=76281980&t=221)** So the network tab is a tool that lets us look behind the scenes.
>
> **[3:45](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/view-requests-and-responses-in-the-browser?u=76281980&t=225)** And it can be really helpful when we're debugging or just want to understand a little better what's going on in a particular request.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AJAX]] (2), [[HTML]] (1)
> **Env Vars:** http (2), url (2), nps (2), html (1), css (1)
> **Definitions:** is a  (3)
> **UI Navigation:** open the (1), scroll up (1)
> **URLs:** [jsdeliver.net](https://jsdeliver.net) (1)
> **Versions:** 127.0.0 (1)
> **Tools:** firefox (1)
> **Best Practices:** avoid doing (1)

#### [Work with authorization errors](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-authorization-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-authorization-errors?u=76281980&t=0)** When errors happen in an API request, sometimes half the battle is understanding what went wrong.
>
> **[0:06](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-authorization-errors?u=76281980&t=6)** Often the error code and message returned from a failed request is enough to point you in the right direction.
>
> **[0:12](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-authorization-errors?u=76281980&t=12)** But once you have a general idea of the issue, it's also important to understand how to fix it.
>
> **[0:17](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-authorization-errors?u=76281980&t=17)** One common error you might encounter is an authorization error, which is generally accompanied by either a 401 or a 403 code.
>
> **[0:26](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-authorization-errors?u=76281980&t=26)** When your request results in either of these errors.
>
> **[0:30](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-authorization-errors?u=76281980&t=30)** One good place to look is your API key.
>
> **[0:32](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-authorization-errors?u=76281980&t=32)** A few things can go wrong with an API key.
>
> **[0:35](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-authorization-errors?u=76281980&t=35)** The first place to check is to ensure that the key in your code matches the credential issued by the web service.
>
> **[0:42](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-authorization-errors?u=76281980&t=42)** A copy and paste error, or even erroneously typing or deleting a single character in the wrong place can cause issues here.
>
> **[0:50](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-authorization-errors?u=76281980&t=50)** If the key in your code matches the provided string.
>
> **[0:53](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-authorization-errors?u=76281980&t=53)** Another thing to check is that you're using the correct key.
>
> **[0:56](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-authorization-errors?u=76281980&t=56)** Some providers, such as Geocodio, enable you to set up multiple API keys and turn them on and off.
>
> **[1:03](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-authorization-errors?u=76281980&t=63)** So it's important to be sure you're using the correct key for your app.
>
> **[1:07](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-authorization-errors?u=76281980&t=67)** If you're sure you're using the right string.
>
> **[1:10](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-authorization-errors?u=76281980&t=70)** Also, check that you've completed all the necessary configuration.
>
> **[1:14](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-authorization-errors?u=76281980&t=74)** For instance, some APIs require you to associate an IP address with your key.
>
> **[1:19](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-authorization-errors?u=76281980&t=79)** Even using the correct key in your app will result in a 401 or a 403 error, unless you also associated with your IP address in testing and then again in production.
>
> **[1:30](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-authorization-errors?u=76281980&t=90)** Right now my code's working really well, but I'm going to go ahead and introduce an error and see what that looks like in the console, and specifically an error with the API key.
>
> **[1:41](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-authorization-errors?u=76281980&t=101)** So I'm going to break my Geocodio API key.
>
> **[1:45](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-authorization-errors?u=76281980&t=105)** And I'm going to make a copy of the existing one.
>
> **[1:48](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-authorization-errors?u=76281980&t=108)** Comment out one of them.
>
> **[1:51](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-authorization-errors?u=76281980&t=111)** And then I'm just going to take the last two characters off of that API key.
>
> **[1:56](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-authorization-errors?u=76281980&t=116)** I'll save that change.
>
> **[1:58](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-authorization-errors?u=76281980&t=118)** I'll go live with my web page.
>
> **[2:01](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-authorization-errors?u=76281980&t=121)** I'll go ahead and run some sample data in here, tab out of that state field for the request, and open up my console.
>
> **[2:10](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-authorization-errors?u=76281980&t=130)** Now in my console, I can see that the error that I got out of my Axios request is 403.
>
> **[2:16](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-authorization-errors?u=76281980&t=136)** Now, I know that's because I went in and broke that API key.
>
> **[2:20](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-authorization-errors?u=76281980&t=140)** So again, getting that API key right is crucial to make sure your requests work.
>
> **[2:26](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-authorization-errors?u=76281980&t=146)** And I can dig in here a little bit.
>
> **[2:28](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-authorization-errors?u=76281980&t=148)** I've logged the error object a couple times.
>
> **[2:30](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-authorization-errors?u=76281980&t=150)** And if I go into the data I specifically get that statement about the error that this is an invalid API key.
>
> **[2:38](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-authorization-errors?u=76281980&t=158)** So sometimes you only see that error number up front.
>
> **[2:42](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-authorization-errors?u=76281980&t=162)** By digging into the error object itself, you get a more verbose explanation of what the problem is, and that can really help you identify the issue and then fix it.
>
> **[2:52](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-authorization-errors?u=76281980&t=172)** And I'm going to go ahead and fix my code.
>
> **[2:55](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-authorization-errors?u=76281980&t=175)** So I will delete that broken API key and I will uncomment the original API key.
>
> **[3:02](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-authorization-errors?u=76281980&t=182)** I'll save those changes.
>
> **[3:04](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-authorization-errors?u=76281980&t=184)** Then back in my browser.
>
> **[3:07](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-authorization-errors?u=76281980&t=187)** I'll try out a request one more time.
>
> **[3:10](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-authorization-errors?u=76281980&t=190)** And now I get a successful request and I get that zip code populating.
>
> **[3:16](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-authorization-errors?u=76281980&t=196)** So making sure that your API key is correct, making sure that it matches the one you've been provided, and making sure that it's correctly configured are all steps you can take to work with an authorization error.

> [!info]- Semantic Content
>
> **Env Vars:** api (13)
> **CLI Commands:** make (2)
> **Definitions:** is an  (2)
> **Analogies:** such as (1), for instance (1)
> **Warnings:** common error (1)
> **Prerequisites:** set up (1)

#### [Work with malformed requests](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=0)** As your first building your request code, it's common to receive errors due to malformed requests.
>
> **[0:05](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=5)** This type of error results from an error in either the data you're sending or the syntax of your request.
>
> **[0:11](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=11)** A few common issues are often at the root of malformed requests.
>
> **[0:15](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=15)** One of these is simply an invalid endpoint that can include for getting HTTP or HTTPS at the start of the URL, not providing the full path for the endpoint, or even using an outdated endpoint for which support has ended.
>
> **[0:29](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=29)** Another place to look is in the separator characters in the query section of the URL for getting the question mark at the start of this query string, or omitting the ampersand between key value pairs, or the equal sign separating a key from a value, can all result in unparseable data.
>
> **[0:48](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=48)** Finally, it's important to check that the keys and values you're sending in the query string mapped to what's expected by the endpoint.
>
> **[0:56](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=56)** That may look like using an incorrect key.
>
> **[0:58](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=58)** For instance, address one rather than street one or sending data that hasn't been parsed correctly before being added to the string.
>
> **[1:07](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=67)** Developer tools can be particularly useful in troubleshooting this type of error.
>
> **[1:12](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=72)** The network tab lets you view the malformed request, including the parsed query parameters.
>
> **[1:17](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=77)** I want to test this out with my code.
>
> **[1:19](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=79)** My code uses a parameters object with the Axios library, and Axios uses the key value pairs I provide to construct a query string, and it adds the characters that go between different parts of the URL.
>
> **[1:31](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=91)** So I actually can't break those parts of the URL with Axios.
>
> **[1:35](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=95)** I'm going to go to the NPS URL and make a copy.
>
> **[1:40](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=100)** I'll comment out the first one, and then I'm going to start by taking out the number one.
>
> **[1:48](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=108)** So this is V1, which is usually an indicator of the version of the API that you're accessing.
>
> **[1:53](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=113)** And I'm going to take out that one.
>
> **[1:55](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=115)** So it just says V.
>
> **[1:56](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=116)** So I'll save that new base URL.
>
> **[1:59](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=119)** Then I'll open my [[HTML]] file with live server and I can see I don't have any park information.
>
> **[2:08](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=128)** I open my developer tools and I can see I have some errors logged.
>
> **[2:13](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=133)** So it looks like there's an access issue here.
>
> **[2:16](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=136)** It's been blocked by a CORS policy and I can actually dig in and look.
>
> **[2:21](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=141)** That's some information that's not particularly helpful for me.
>
> **[2:24](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=144)** But this should be my error object.
>
> **[2:27](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=147)** And in this case I don't have any very specific information in the response.
>
> **[2:32](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=152)** And that's probably because of the way that the URL is broken as far as NPS is concerned.
>
> **[2:39](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=159)** I'm trying to access a part of their server that is not available to the public, and that's probably because it doesn't exist, but they're not able to actually give me a super useful error message here, just that I'm not allowed to go where my URL is pointing.
>
> **[2:55](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=175)** So fortunately, in this case, I know what's broken and I can go back and fix that.
>
> **[3:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=180)** But checking the URL in general against the documentation is a good way to troubleshoot when you're just not getting any sort of real, reasonable response from the server.
>
> **[3:10](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=190)** What if I was sloppy with one of my parameter values instead?
>
> **[3:14](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=194)** So imagine for state code.
>
> **[3:16](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=196)** I know the documentation says I'm supposed to enter a two letter abbreviation, but maybe I just entered C instead of CA for California, so I'll save that.
>
> **[3:27](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=207)** Go over to my browser.
>
> **[3:29](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=209)** Now I do have a park showing up here, but if I read it, I notice that it's all about Florida.
>
> **[3:36](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=216)** So that's not a California park.
>
> **[3:38](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=218)** And if I reload, this is Abraham Lincoln's birthplace, which mentions Kentucky.
>
> **[3:45](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=225)** And then we've got Amistad National Recreation Area.
>
> **[3:50](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=230)** Not sure where that is, but I don't recognize it as one of the California parks.
>
> **[3:55](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=235)** So it looks like we're getting all the parks instead of having them limited to the California parks.
>
> **[4:01](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=241)** Now, this is a sign of a robust API when I can pass in bad information and there's actually a fallback.
>
> **[4:08](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=248)** And in this case, it seems like the API is saying I don't understand what limits you're putting on this, but I'm still going to give you some data rather than telling you you did something wrong.
>
> **[4:17](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=257)** So an error like the one I made here does not actually break my API request.
>
> **[4:22](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=262)** It just changes the data.
>
> **[4:24](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=264)** I get back into something that's not quite what I want.
>
> **[4:27](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=267)** So it would take an eagle eye here for somebody to notice this.
>
> **[4:31](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=271)** Hopefully me as the developer, but maybe I wouldn't notice this until someone said something when the site was live, and then I'd have to do a little bit of research to figure out why I'm not getting California specific responses.
>
> **[4:43](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=283)** So again, since the parameters are what control the type of data you're asking for, that's a good place to target when there's an issue with the type of data I'm getting back.
>
> **[4:54](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=294)** So I'll set that back to CA, which is the correct abbreviation for California.
>
> **[4:59](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=299)** I'll save that and back in my browser.
>
> **[5:02](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-malformed-requests?u=76281980&t=302)** Now I have Tule Lake, which I know is a California National Monument.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **Env Vars:** url (9), api (4), nps (2), http (1), https (1)
> **Documentation:** the documentation (2)
> **Definitions:** is a  (2)
> **Analogies:** for instance (1), imagine (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Warnings:** troubleshoot (1)

#### [Work with errors in Fetch](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=0)** The promises pattern that [[Fetch]] is based on is really efficient to write.
>
> **[0:04](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=4)** However, it has a few gotchas that can result in errors, especially when you're using fetch for the first time.
>
> **[0:11](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=11)** It's super common to try to access the data too soon.
>
> **[0:15](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=15)** Remember that the first then method needs to return the payload and then the second.
>
> **[0:20](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=20)** Then method can work with the data.
>
> **[0:22](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=22)** The architecture of fetch keeps the data off limits to your code in the first, then method.
>
> **[0:28](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=28)** Another place where fetch can trip you up is forgotten return statements.
>
> **[0:33](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=33)** Every chained then method needs to use return in order to pass data to the next method.
>
> **[0:39](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=39)** You can instead manipulate variables in the parent scope, but it's better practice to simply pass the data along the chain.
>
> **[0:46](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=46)** Finally, sometimes you'll see no result from a fetch request, including no errors logged in the console, even if you've included a catch method.
>
> **[0:55](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=55)** Remember that fetch considers a request to have failed only if there's something like a network error that prevents it from being sent, or a response from being received.
>
> **[1:04](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=64)** In all other cases, it's important for you to provide the error handling logic yourself.
>
> **[1:10](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=70)** Otherwise, responses other than 200 may result in no data to be rendered, but will not throw an error.
>
> **[1:17](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=77)** Let's check this out for ourselves for this video.
>
> **[1:20](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=80)** The exercise files contain the fetch version of my app, so we can specifically look at issues working with fetch rather than Axios.
>
> **[1:29](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=89)** I'm going to go down to the create request function, and I'm going to start by commenting out the first then.
>
> **[1:35](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=95)** This is the first then that takes the response object, parses out the response [[JSON]] and passes that along to the next then.
>
> **[1:43](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=103)** So let's just remind ourselves what happens if we skip that step and try and parse that response object with the success handler.
>
> **[1:51](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=111)** So I'll save those changes.
>
> **[1:53](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=113)** I'll go live with my [[HTML]] file.
>
> **[1:56](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=116)** I'm going to open up the console, and I can see that I have an error logged here.
>
> **[2:03](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=123)** I can look at the response here and look at that body property.
>
> **[2:07](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=127)** And again it just says readable stream, which is a really good reminder that I'm looking at the result of a promise here.
>
> **[2:13](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=133)** And I'm not actually looking at data.
>
> **[2:16](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=136)** So I have information about the actual response.
>
> **[2:19](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=139)** But then when I try and use that in my success code, it's just telling me that it doesn't actually have access to the data.
>
> **[2:26](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=146)** So going back to my code, I'm going to uncomment that line.
>
> **[2:32](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=152)** This then method is calling the handle errors function and passing along the response object.
>
> **[2:38](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=158)** What happens if I take out the error handling code here.
>
> **[2:42](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=162)** So I'm going to go up to the handle.
>
> **[2:45](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=165)** Park errors function because I'm working with errors in the park data here.
>
> **[2:50](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=170)** And I'm going to take out that first line and I'm going to take out the third line.
>
> **[2:54](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=174)** So I'm just left with return response .JSON.
>
> **[2:57](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=177)** I'll save those changes.
>
> **[2:59](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=179)** And then I'm going to go up and duplicate and break my URL.
>
> **[3:04](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=184)** So I'll make a copy of my URL constant comment out one of them, and I'll take out the question mark that separates the base URL from the query parameters.
>
> **[3:16](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=196)** I'll save that and then I'll go back over to my browser.
>
> **[3:20](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=200)** Now I have errors logged here, and lines 52 and 55 are both in my fetch code.
>
> **[3:26](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=206)** But line 42 is in my success function.
>
> **[3:30](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=210)** So here I'm logging data within my success function, which means that that data actually got sent forward into my handle success function.
>
> **[3:40](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=220)** So even though the browser's gotten an error message from the remote server without that custom error handling code, the [[Representational State Transfer (REST)|rest]] of my code is still trying to work with that data.
>
> **[3:50](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=230)** So leaving that error in my URL, I'm going to go back and uncomment those two lines in my error handler, and I'll save that and go back to my browser.
>
> **[4:04](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=244)** And now I just have those two error messages.
>
> **[4:08](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=248)** I don't have an error being flagged by my success code, which means that this isn't being passed along to the success handler.
>
> **[4:15](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=255)** And that's what I want my error handling code to do.
>
> **[4:17](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=257)** And that's exactly why I need to write my own error handling code.
>
> **[4:21](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=261)** Finally, I'm going to go back to my URL.
>
> **[4:24](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=264)** I'm going to take out the one that I broke, and I'm going to uncomment the original one.
>
> **[4:30](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=270)** I'll save that and go back to my browser.
>
> **[4:34](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=274)** And now again my code is working.
>
> **[4:36](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/work-with-errors-in-fetch?u=76281980&t=276)** I have everything back to a working state, and now I have my fetch request set up in such a way that I can accommodate issues that come up.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (10), [[JSON]] (2), [[HTML]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** url (5), json (2), html (1)
> **Cross-References:** go back to (3)
> **Definitions:** means that (2), is a  (1)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** set up (1)

#### [Provide error fallbacks](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=0)** You can make your [[AJAX]] error handling code more useful by accounting for specific cases that are significant to your app, and ensuring that your code can deal appropriately with each.
>
> **[0:10](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=10)** One of those many types of Ajax errors can result in the requested data not being available to incorporate into the DOM.
>
> **[0:18](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=18)** In this case, it's important to consider how you can meet the needs of your end users without remote data.
>
> **[0:24](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=24)** For the Explore California form.
>
> **[0:27](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=27)** The zip code data is just an extra.
>
> **[0:29](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=29)** If the zip input box isn't auto completed, users can still use the form and fill in that manually, so there's no extra fallback required here.
>
> **[0:38](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=38)** The national park section is already hidden by default, and if the data isn't returned for whatever reason, it remains hidden so we don't have an issue.
>
> **[0:49](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=49)** However, we could improve the [[User Experience (UX)|user experience]] by including some default data that's displayed if we don't get a response.
>
> **[0:57](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=57)** For instance, we could include the data for one of the parks in the code for the page and set up our code to use that data.
>
> **[1:03](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=63)** If we can't get live data back from an NPS, this would require someone to check maybe once or twice a year to ensure that the fallback data is still up to date.
>
> **[1:12](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=72)** But it would make this feature of our page a little more bulletproof.
>
> **[1:16](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=76)** What I'd like to do is actually grab the data for, say, the first part that comes through my request, and then copy that into my code and set up some code that uses that as a default, If I don't get data back from request when the page loads.
>
> **[1:32](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=92)** So I'm going to open up my console, and I'm still loading that object so I can dig into the data.
>
> **[1:40](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=100)** And I'm going to go into the first item in the array which is index number zero.
>
> **[1:47](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=107)** And I have an option when I right click the zero that I can store as global variable.
>
> **[1:54](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=114)** And this is going to grab the entire contents of this element in the data array.
>
> **[1:59](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=119)** So I'm going to select that.
>
> **[2:02](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=122)** And then if I scroll to the bottom here I've got temp1 here in the console.
>
> **[2:08](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=128)** And that's the name that's been provided for this set of data.
>
> **[2:13](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=133)** Then I can use the copy command at the console to actually copy that data to my clipboard.
>
> **[2:18](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=138)** And I just say copy(temp1) and press enter.
>
> **[2:23](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=143)** And even though it says undefined here that data has been copied to the clipboard.
>
> **[2:28](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=148)** Now I'm going to switch back over to my code, and I'm going to go to my [[JavaScript]] code.
>
> **[2:35](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=155)** And right after my [[npm]] request params I'm going to create a new constant.
>
> **[2:41](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=161)** And I'm going to call that NPS fallback.
>
> **[2:44](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=164)** And as the value, I'm simply going to paste in the code that I just copied, which is an object, and I'll put a semicolon at the end.
>
> **[2:52](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=172)** Now this is the full data for one park.
>
> **[2:55](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=175)** And out of this data I only need three properties.
>
> **[2:59](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=179)** I need the description, the full name, and the URL.
>
> **[3:02](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=182)** So I'm going to delete all of the properties that I will never need so I can trim this up a little bit to scroll.
>
> **[3:09](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=189)** Quite a way to get to the top of this, but there it is.
>
> **[3:13](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=193)** So here's the full name and the URL.
>
> **[3:16](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=196)** I don't need this ID property.
>
> **[3:19](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=199)** I don't need the park code.
>
> **[3:21](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=201)** So there's the URL full name and description.
>
> **[3:25](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=205)** And then everything from latitude all the way to the end of my object I can just delete.
>
> **[3:32](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=212)** So all the way through relevance score.
>
> **[3:35](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=215)** I'll delete that.
>
> **[3:36](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=216)** Take out that blank line.
>
> **[3:38](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=218)** Take out that final comma.
>
> **[3:41](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=221)** And now I have an NPS fallback object that contains a URL full name and description value.
>
> **[3:48](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=228)** Now to make use of this I can write some code in my handle park errors function.
>
> **[3:55](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=235)** So here in handle park errors I have my error being logged to the console.
>
> **[3:59](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=239)** But before that I want to do a little DOM manipulation and I can actually copy a few lines from Handle Park Success, which is actually lower down.
>
> **[4:08](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=248)** So I actually want all five lines after the console.log statement in Handle Park success.
>
> **[4:14](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=254)** That's all of my DOM manipulation that only happens right now in the Handle Pak success function.
>
> **[4:22](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=262)** So I'll copy that, scroll back up to my handle park errors function, and I'm going to paste that at the very beginning.
>
> **[4:30](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=270)** And then I need to update these references a little bit.
>
> **[4:34](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=274)** All of these should refer to that new variable I just created called NPS fallback.
>
> **[4:39](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=279)** So instead of these data references I need npsFallback.Fullname.
>
> **[4:47](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=287)** For the href, I need npsFallback.url, and for the description I need npsFallback.description.
>
> **[5:02](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=302)** I'm going to save this.
>
> **[5:04](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=304)** And then to test out this fallback functionality I'm going to scroll to the top.
>
> **[5:09](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=309)** And I want to break my parks URL.
>
> **[5:12](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=312)** So that's the NPS URL.
>
> **[5:14](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=314)** Actually I can just break that NPS API key.
>
> **[5:18](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=318)** So let's do that.
>
> **[5:19](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=319)** That'll ensure I don't get any data back, so I'll duplicate my API key, comment out one of them, take a couple characters off the other and save that.
>
> **[5:31](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=331)** And now back over in my browser, I can see that I got an error 4 or 3 forbidden, so I didn't get any data back.
>
> **[5:41](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=341)** But also I have the information about Alcatraz Island still showing up on the screen, so my error handling code was able to go and recognize that I did not get a successful response, but then it was able to use the data that I'd saved in the file as a backup to display something to enhance the page.
>
> **[5:59](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=359)** So I've implemented this feature in my code to deal with potential errors in a graceful way, and then I just need to go back and make sure that I fix that error in my API key.
>
> **[6:10](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=370)** So I'll delete the broken one and I'll uncomment the good one.
>
> **[6:15](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/provide-error-fallbacks?u=76281980&t=375)** I'll save that and then back in my browser I have a different park showing up and I don't have an error in the console.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AJAX]] (2), [[User Experience (UX)|User experience]] (1), [[JavaScript]] (1), [[npm]] (1)
> **Env Vars:** nps (6), url (6), dom (3), api (3)
> **CLI Commands:** make (4), npm (1)
> **Code Identifiers:** npsfallback (3)
> **Prerequisites:** set up (2)
> **UI Navigation:** go to (1)
> **Definitions:** is an  (1)
> **Analogies:** for instance (1)

#### [Challenge: Fix an AJAX request](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-fix-an-ajax-request?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-fix-an-ajax-request?u=76281980&t=5)** It's time for a challenge.
>
> **[0:07](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-fix-an-ajax-request?u=76281980&t=7)** Ready to try your hand at debugging an [[AJAX]] request?
>
> **[0:10](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-fix-an-ajax-request?u=76281980&t=10)** For this challenge, you need to use the folder for this video, which contains a broken API request for Geocodio, so you'll need to troubleshoot and fix the errors.
>
> **[0:19](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-fix-an-ajax-request?u=76281980&t=19)** Be sure to update the API key variable with your own key or the requests won't work.
>
> **[0:24](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-fix-an-ajax-request?u=76281980&t=24)** You'll know you're done when the zip code functionality in the form works.
>
> **[0:29](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-fix-an-ajax-request?u=76281980&t=29)** This challenge might take around ten minutes.
>
> **[0:32](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/challenge-fix-an-ajax-request?u=76281980&t=32)** When you're done, join me in the next video and I'll go over how I approached it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AJAX]] (1)
> **Env Vars:** api (2)
> **Cross-References:** in the next (1)
> **Warnings:** troubleshoot (1)
> **Prerequisites:** you'll need (1)

#### [Solution: Fix an AJAX request](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=5)** So I have my code for this challenge, and the first thing I want to do is open it into the browser and see what kind of response I get.
>
> **[0:15](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=15)** See if there's actually an error.
>
> **[0:17](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=17)** I already have this open in the browser with my live server.
>
> **[0:21](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=21)** I'm going to go ahead and try out some sample data.
>
> **[0:25](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=25)** Make that address request.
>
> **[0:27](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=27)** Doesn't look like it's working.
>
> **[0:29](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=29)** And I'll open my console.
>
> **[0:31](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=31)** All right.
>
> **[0:32](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=32)** So I've got a 403 error and I've got some error objects.
>
> **[0:38](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=38)** And I can see the error text of invalid API key.
>
> **[0:43](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=43)** So that gives me a place to look.
>
> **[0:45](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=45)** Now I've made sure I have my API key here, but it may be that there's some issues with the way that the API key is being referenced in my code.
>
> **[0:56](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=56)** So let me check what my actual request looks like.
>
> **[1:01](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=61)** And I think the easiest way to do that is to go to the network tab and reload.
>
> **[1:06](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=66)** And I'm going to go ahead and make that request again.
>
> **[1:10](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=70)** And here is my address lookup.
>
> **[1:14](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=74)** And I can look at some headers here.
>
> **[1:17](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=77)** So the request URL I can see here I'm going to switch this to the bottom.
>
> **[1:21](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=81)** So I have wider space to look at the whole thing.
>
> **[1:25](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=85)** And I can see that I am supplying the address asking for zip four.
>
> **[1:32](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=92)** And I've got my API key supplied here.
>
> **[1:34](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=94)** Now one thing I can do is switch over to the documentation and just put it side by side and see if I'm missing anything.
>
> **[1:43](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=103)** So I'll look here at the code for the zip plus four.
>
> **[1:47](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=107)** This is the URL that I'm basing this on.
>
> **[1:50](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=110)** And this is a pretty subtle thing, but if I read things really closely, I notice that API key is supposed to have an underline in it, and over in my request it does not.
>
> **[2:01](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=121)** This is a situation you might end up just starting from scratch, but it's really nice to be able to dig in and try and find these things if you have the time to just debug.
>
> **[2:12](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=132)** So there's an issue with the way that I'm specifying the key in my code, and I remember that I did this as a set of parameters.
>
> **[2:21](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=141)** Lower down in the code.
>
> **[2:23](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=143)** And so right here in the params object within check completion is where I'm specifying the names of the keys that I'm sending to Geocodio So I've got API key with no underscore.
>
> **[2:37](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=157)** And that's supposed to be API underscore key.
>
> **[2:39](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=159)** That's the key name that Geocodio is expecting.
>
> **[2:44](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=164)** So I'm going to save that.
>
> **[2:46](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=166)** I'm going to go back to my browser I'm going to scroll up try another sample request.
>
> **[2:54](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=174)** Tab out of there.
>
> **[2:57](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=177)** Still got an error.
>
> **[2:58](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=178)** Let me look at the console first.
>
> **[3:01](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=181)** So I've got unprocessed content and I've got an error 422.
>
> **[3:09](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=189)** And in the error data it says could not parse coordinate and it looks like it's looking for a latitude longitude pair.
>
> **[3:18](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=198)** And that's not the data that I'm sending.
>
> **[3:21](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=201)** So it looks like for some reason, Geocodio is expecting something that I'm not sending.
>
> **[3:28](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=208)** So let me take another look at that URL and I can go back to the documentation here.
>
> **[3:33](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=213)** And in fact, there are two ways to use zip plus four.
>
> **[3:38](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=218)** One of them is sending an address to get the zip plus four.
>
> **[3:42](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=222)** Another one is using the reverse endpoint to send coordinates and get that zip plus four for those geographic coordinates.
>
> **[3:50](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=230)** Now the one I want to use uses the geocode endpoint.
>
> **[3:53](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=233)** This other one uses the reverse endpoint.
>
> **[3:56](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=236)** And if I check my code and I check that base URL, there it is.
>
> **[4:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=240)** So I got the wrong endpoint in this code.
>
> **[4:03](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=243)** And that means that even though I'm sending the correct data, the web service doesn't understand it because it's not expecting what I'm sending.
>
> **[4:12](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=252)** So the endpoint I want is Geocodio and I'm going to save that.
>
> **[4:18](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=258)** I'm going to go back to my app.
>
> **[4:20](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=260)** I'm going to try sample data one more time.
>
> **[4:25](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=265)** And there we go.
>
> **[4:26](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=266)** This time I got the zip code completion.
>
> **[4:29](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/solution-fix-an-ajax-request?u=76281980&t=269)** And so my app is working again.

> [!info]- Semantic Content
>
> **Env Vars:** api (7), url (4)
> **CLI Commands:** make (2), find (1)
> **Cross-References:** go back to (3)
> **Definitions:** is a  (2), means that (1)
> **Documentation:** the documentation (2)
> **UI Navigation:** go to (1), scroll up (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Keep learning](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/next-steps?u=76281980&t=0)** Thanks so much for joining me in this course.
>
> **[0:02](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/next-steps?u=76281980&t=2)** You now have experience working directly with the [[Fetch]] API and the Axios library that are used for the vast majority of [[AJAX]] requests on the web.
>
> **[0:10](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/next-steps?u=76281980&t=10)** To dig deeper into some of the [[JavaScript]] mechanics that underpin Ajax.
>
> **[0:14](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/next-steps?u=76281980&t=14)** Check out my other courses on [[LinkedIn]] learning such as JavaScript: Async and Web security.
>
> **[0:19](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/next-steps?u=76281980&t=19)** Same Origin Policies.
>
> **[0:21](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/next-steps?u=76281980&t=21)** If you want to learn more about JavaScript Object Notation or [[JSON]].
>
> **[0:24](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/next-steps?u=76281980&t=24)** Take a look at my course [[JSON Essential Training]].
>
> **[0:28](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/next-steps?u=76281980&t=28)** If you want to dig into the tools available for inspecting code on the front end.
>
> **[0:32](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/next-steps?u=76281980&t=32)** Check out my course Learning Chrome Web Developer Tools.
>
> **[0:35](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/next-steps?u=76281980&t=35)** Feel free to follow me on LinkedIn.
>
> **[0:37](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/next-steps?u=76281980&t=37)** Now take your new skills and build something amazing.
>
> **[0:40](https://www.linkedin.com/learning/javascript-ajax-and-fetch-24655836/next-steps?u=76281980&t=40)** Good luck!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (3), [[AJAX]] (2), [[LinkedIn]] (2), [[JSON]] (2), [[Fetch]] (1)
> **Env Vars:** json (2), api (1)


## Instructor

- [[Sasha Vodnik]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/JavaScript-Ajax-and-Fetch-3809063/codespaces)

## Skills Covered

- AJAX
- JavaScript
- Fetch

## Path Context

### In [[Explore Web Development with Vanilla JavaScript]]
← [[JSON Essential Training]] | **5 of 8** | [[JavaScript- Service Workers]] →

### In [[Become a JavaScript Developer]]
← [[JSON Essential Training]] | **12 of 13** | [[JavaScript- Modern Browser APIs]] →

## Appears In

- [[Explore Web Development with Vanilla JavaScript]]
- [[Become a JavaScript Developer]]

## Related Courses

_Courses sharing skills:_

- [[End-to-End JavaScript Testing with Cypress.io]] — JavaScript
- [[Learning JavaScript Debugging]] — JavaScript
- [[Foundational JavaScript Security]] — JavaScript
- [[JavaScript- Test-Driven Development (ES6)]] — JavaScript
- [[JavaScript- Best Practices for Data]] — JavaScript

---

[↑ Back to top](#)