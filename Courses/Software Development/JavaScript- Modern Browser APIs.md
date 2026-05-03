---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: javascript-modern-browser-apis
url: "https://www.linkedin.com/learning/javascript-modern-browser-apis"
duration_minutes: 111
duration: 1h 51m
level: Advanced
updated: 3/21/2019
learners: 79911
skills:
  - JavaScript
  - Application Programming Interfaces (API)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHtai2uKxMcWA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568066318011?e=2147483647&amp;v=beta&amp;t=Kxr23tPSI4oAxVChhhky4PCVZ2xq3mwJNmEuj3nhfOI"
linkedin_topic: Software Development
learning_paths:
  - '[[Explore a Career in Front-End Web Development]]'
  - '[[Explore Web Development with Vanilla JavaScript]]'
  - '[[Become a JavaScript Developer]]'
  - '[[Advance Your JavaScript Skills]]'
prev_courses:
  - '[[React.js- Building an Interface]]'
  - '[[Learning Functional Programming with JavaScript ES6+]]'
  - '[[JavaScript- Ajax and Fetch]]'
  - '[[End-to-End JavaScript Testing with Cypress.io]]'
next_courses:
  - '[[jQuery Essential Training]]'
  - '[[JSON Essential Training]]'
  - null
  - null
path_nav: '[{"path":"Explore a Career in Front-End Web Development","position":10,"total":11,"prev":"React.js- Building an Interface","next":"jQuery Essential Training"},{"path":"Explore Web Development with Vanilla JavaScript","position":3,"total":8,"prev":"Learning Functional Programming with JavaScript ES6+","next":"JSON Essential Training"},{"path":"Become a JavaScript Developer","position":13,"total":13,"prev":"JavaScript- Ajax and Fetch","next":null},{"path":"Advance Your JavaScript Skills","position":10,"total":10,"prev":"End-to-End JavaScript Testing with Cypress.io","next":null}]'
path_count: 4
tags:
  - course
  - topic/web-development
  - topic/software-development
  - topic/network-and-system-administration
  - skill/javascript
  - skill/application-programming-interfaces-api
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/JavaScript-%20Modern%20Browser%20APIs.md)

![JavaScript: Modern Browser APIs](https://media.licdn.com/dms/image/v2/C4E0DAQHtai2uKxMcWA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568066318011?e=2147483647&amp;v=beta&amp;t=Kxr23tPSI4oAxVChhhky4PCVZ2xq3mwJNmEuj3nhfOI)

# JavaScript: Modern Browser APIs

> Over the past few years, new APIs and features have been proliferating through modern web browsers. These APIs can help you build amazing web apps that perform better, work offline, delight the user, and provide better user experiences overall. In this course, learn how to use standard JavaScript and a selection of modern browser APIs to improve data retrieval and storage, get better app performan

> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-modern-browser-apis) | 1h 51m | Advanced | 80K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Building apps with modern JavaScript](#building-apps-with-modern-javascript)
  - [What you should know](#what-you-should-know)
  - [Set up the development environment](#set-up-the-development-environment)
- [**1. Improving Performance**](#1-improving-performance) (5 videos)
  - [Smoother animation with requestAnimationFrame()](#smoother-animation-with-requestanimationframe)
  - [Faster navigation with prefetch](#faster-navigation-with-prefetch)
  - [Prioritized loading with preload](#prioritized-loading-with-preload)
  - [Server communication with Beacon API](#server-communication-with-beacon-api)
  - [Element visibility with Intersection Observer](#element-visibility-with-intersection-observer)
- [**2. Better Data Management**](#2-better-data-management) (7 videos)
  - [Overview of data handling](#overview-of-data-handling)
  - [Easier Ajax with the Fetch API](#easier-ajax-with-the-fetch-api)
  - [Simplified IndexedDB with localForage](#simplified-indexeddb-with-localforage)
  - [localForage and multiple instances](#localforage-and-multiple-instances)
  - [Caching data with the Cache API](#caching-data-with-the-cache-api)
  - [Making storage persistent](#making-storage-persistent)
  - [Getting device memory information](#getting-device-memory-information)
- [**3. Advanced User Experiences**](#3-advanced-user-experiences) (8 videos)
  - [Native overlays with the Dialog API](#native-overlays-with-the-dialog-api)
  - [Integrating with native notifications](#integrating-with-native-notifications)
  - [Detecting network conditions](#detecting-network-conditions)
  - [Using page visibility](#using-page-visibility)
  - [Going full screen with content](#going-full-screen-with-content)
  - [Using full-screen events and styling](#using-full-screen-events-and-styling)
  - [Dynamic images with CSS Paint API](#dynamic-images-with-css-paint-api)
  - [Parameters with CSS Paint API](#parameters-with-css-paint-api)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Building apps with modern JavaScript](https://www.linkedin.com/learning/javascript-modern-browser-apis/building-apps-with-modern-javascript?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/javascript-modern-browser-apis/building-apps-with-modern-javascript?u=76281980&t=1)** - It's never been a better time to be a web developer. The kinds of applications that you can build on the web today using standard [[JavaScript]], [[HTML]], and CSS are highly capable, performant, and can do almost anything a native app can. It's hard to picture this today, but there was once a time when validating the content of a web form, or dynamically changing images on a page was about as advanced as JavaScript could get. We've come a long way since those days. Today we can build web apps that use features like native dialogs, integrated system notifications, and rich full-screen experiences just to name a few. What makes all of these features possible are the raft of new and modern APIs that have been added over the years by the main browser vendors. Browser capabilities have evolved significantly, and, in many cases, the kinds of features that used to require third party libraries, or resorting to native application building can now be done with standard JavaScript. Hi, I'm Joe Marini, and I've been building software professionally for over 30 years at companies like [[Microsoft]], [[Google]], and Adobe. Come join me in my course, and see how we can build great applications with JavaScript, and modern browser APIs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (4), [[HTML]] (1), [[Microsoft]] (1), [[Google]] (1)
> **Env Vars:** html (1), css (1)
> **Analogies:** picture (1)
> **Speakers:** - it (1)

#### [What you should know](https://www.linkedin.com/learning/javascript-modern-browser-apis/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/javascript-modern-browser-apis/what-you-should-know?u=76281980&t=1)** - [Instructor] Before we get started, there are some things that you should already be familiar with. First, you should be familiar with programming in [[JavaScript]], since that's the main language that web browsers use and it's what we will be using in this course. You don't need to be an expert, but I do expect that you already know how to do things like write functions and handle events, and you're reasonably up to speed on the most recent version of JavaScript. If you need to brush up on your JavaScript skills, I suggest you take a look at [[JavaScript Essential Training]]. You should also have some experience building webpages with [[HTML]] and CSS. There are plenty of great courses to check out if you need to shore up your skills in these areas, and I'd suggest looking at [[HTML Essential Training]] and Learning CSS. Since we're going to be working with text files, you can use whatever code editor you want for this course. I'm going to be using Visual Studio Code, but if you prefer to use Sublime Text or Emacs or vi, that's entirely up to you. VS Code is a free code editor that has a rich set of features and extensions that make it a great editor for almost any language. It's available on Mac, [[Windows]], and [[Linux]], so whatever operating system you happen to be using, it should work there. You can download it for free from code.[visualstudio.com](https://visualstudio.com). If you'd like to learn more about VS Code before starting this course, I'd suggest you watch Visual Studio Code for Web Developers. Once you feel comfortable with the subjects, you're ready to move on with the [[Representational State Transfer (REST)|rest]] of the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (4), [[HTML]] (2), [[Windows]] (1), [[Linux]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Tools:** visual studio (2), vs code (2), sublime (1), emacs (1)
> **Env Vars:** html (2), css (2)
> **CLI Commands:** make (1)
> **URLs:** [visualstudio.com](https://visualstudio.com) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Set up the development environment](https://www.linkedin.com/learning/javascript-modern-browser-apis/set-up-the-development-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-modern-browser-apis/set-up-the-development-environment?u=76281980&t=0)** - [Instructor] Before we get started working with the latest browser APIs, let's take a moment and get our development environment set up. I'm going to be using visual studio code as my code editor, but as I said earlier, you can use whatever code editor you like. One of the main reasons I really like using VS Code is that there are some really nice extensions available for all kinds of development tasks, so if you want to get your environment set up like I'll be using it in this course, then follow along with me here. First, place your exercise files folder wherever it's most convenient for you to access. I've put it on my desktop to make recording easier, but you can start wherever you want. Then once you've installed VS Code, go to the extensions view and type in Live Server in the search box, and this should produce a list of results for various extensions that let you preview web pages in a local development server which we'll need for some of these APIs. I've already installed this one called Live Server which has a lot of installs and is free. So this extension will make it easier for us to see our results as we go through the course, so go ahead and install this. And I'm also going to be using an online resource called [httpbin.org](httpbin.org). And this is useful for viewing real time data from a remote server, and it doesn't require you to set anything up. But you should spend a few minutes checking it out and getting familiar with it. The reason I like httpbin is because it's a great resource for testing out web apps.
>
> **[1:32](https://www.linkedin.com/learning/javascript-modern-browser-apis/set-up-the-development-environment?u=76281980&t=92)** For example, I can generate sample [[JSON]] data just by going to [httpbin.org/JSON](httpbin.org/JSON). And there you can see, if I choose the raw data, and there you can see the sample JSON data. So spend a few minutes touring this site and getting familiar with it, and perhaps try out some of the samples. OK, so once you've got everything here in place, you should be ready to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (3)
> **Env Vars:** json (3)
> **Tools:** vs code (2), visual studio (1)
> **Prerequisites:** set up (2), install (1)
> **CLI Commands:** make (2)
> **URLs:** [httpbin.org](httpbin.org) (2)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)


### 1. Improving Performance

[↑ Back to Table of Contents](#table-of-contents)

#### [Smoother animation with requestAnimationFrame()](https://www.linkedin.com/learning/javascript-modern-browser-apis/smoother-animation-with-requestanimationframe?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/javascript-modern-browser-apis/smoother-animation-with-requestanimationframe?u=76281980&t=1)** - In this chapter we're going to be looking at APIs that help you build web apps with better performance. And we are going to start off with a relatively simple API that improves the quality of animations in a webpage. So I'm going to open the finished example here using my live server extension. And you can see that it's just a simple animation in a canvas element on the webpage. So the API we're going to use is called request animation frame. And it's used to sync up the display refresh cycle with animation code in the browser. And before this API was available, developers had to use either set timeout or set interval in order to animate page content. The downside of that approach is that these functions are not very accurate and are not synchronized with the display refresh rate. So the result of this is that calls to set timeout or set interval might either be duplicated or dropped during screen paint cycles, which will produce a stuttering effect. Request animation frame fixes that problem by ensuring that it is only called once per display refresh cycle. So let's open the editor and build this example. Alright, so here I'm going to open up animation start.[[HTML]]. And you can see my page here has a canvas element which is right down here. Okay, here's my canvas. And it has some code that sets up the drawing environment, gets a reference to the canvas, initializes some content. And if you scroll down a little bit further, here's my initialization function. And if we scroll down
>
> **[1:33](https://www.linkedin.com/learning/javascript-modern-browser-apis/smoother-animation-with-requestanimationframe?u=76281980&t=93)** there's an anim function and this anim function is called repeatedly to create the animation. So first, in the init function what I'm going to do is call the request animation frame function and assign the result to my animationRef variable here. And that will become clear a little bit later. So for now I'm going to say animationRef is equal to and I'm going to call request animation frame. And then I'm going to call the anim function. So it's kind of like set interval except that you don't specify a timing interval. The request animation frame just syncs up with whatever the display cycle is. Alright, so this starts the process. And we can use the reference value for this function to stop the animation later. So what we're going to do now is I'm going to have to call request animation frame again from within the animation function. And I'm not going to go deep into the animation code. You can follow it later on in your, or debunker it if you want to. What I'm going to do is, once again, animationRef is equal to request animation frame. And this time I'm going to have my animation function call itself. Now to stop the animation I call cancel animation frame with this reference value. So let's go ahead and scroll up and I have a button here that says stop animation and here's my event handler. So to stop the animation what I'm going to do is call cancel animation frame
>
> **[3:08](https://www.linkedin.com/learning/javascript-modern-browser-apis/smoother-animation-with-requestanimationframe?u=76281980&t=188)** and I have my animationRef variable that I pass in. That's pretty much all there is to it. So let's go ahead and run this. And there you can see the animation is running and I can click stop and the animation stops. So if I refresh animation starts all over again, right? So using request animation frame is much more efficient that using set interval and it's supported in all of the major browsers so there's not reason not to use it. If you're building applications that need to use animation, you should be using request animation frame from now on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **UI Navigation:** open the (2), scroll down (2), scroll up (1)
> **Code Identifiers:** animationref (4)
> **Env Vars:** api (3)
> **Definitions:** is called (2)
> **File Paths:** start.html (1)
> **Analogies:** kind of like (1)
> **Prerequisites:** initialization (1)

#### [Faster navigation with prefetch](https://www.linkedin.com/learning/javascript-modern-browser-apis/faster-navigation-with-prefetch?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/javascript-modern-browser-apis/faster-navigation-with-prefetch?u=76281980&t=1)** - [Instructor] In this example we're going to learn about a technique called link prefetching, which is a mechanism that the browser can use to start downloading pages that the user is likely to visit next. And there are a variety of scenarios where this ability is useful. So for example, if you display a list of search results to the user with links to more results, it's reasonable to assume that the user is likely to click on the next page link. Or if the user is filling out a purchase form on your site, then you can reasonably expect them to progress through the form. And you can indicate to the browser which resources are likely to be needed on the next navigation by using the standard link tag with a value of prefetch for the rel attribute. So let's see how this works. In my editor, I'm going to open prefetch_start and I'm going to bring this up in the browser so we can see the content, so I'll right click and choose the open with live server. So here's the page with my content and in this page I have a link to a destination page. So if I open the developer tools here in Chrome, and I'll choose the Network tab and let me reload this one more time, so you can see that the prefetch_start page is being loaded, but the destination page link is not being loaded, right? So just the, just the page that we're currently looking at. So when I click on the link, right, the destination page loads and everything is fine and over here in the network panel you can see that the prefetch page destination
>
> **[1:34](https://www.linkedin.com/learning/javascript-modern-browser-apis/faster-navigation-with-prefetch?u=76281980&t=94)** is now loaded. All right, so let's go back to the code. So what I'm going to do is add a link tag. I'm going to say link rel is equal to prefetch and then I'm going to specify the destination as that destination page. That's going to be prefetch page underscore page dot [[HTML]]. And I'll close the link. So now let's go back to the browser. And let's go back to our original page and I'll refresh. And now when I refresh the page, you can see that in the list of pages that were loaded, here's the start page right here, and here's the destination page, that's prefetch_page.html. So the browser is making a request for the prefetch page resource even though I haven't yet clicked on it. So what I've done is I've told the browser that this page is very likely to be visited so to go ahead and [[Fetch]] that page while the user is still on this one. And this feature works with more than just pages. You can prefetch images, or scripts, or other resources as well. Now before you run off and start adding prefetch links to everything on your site, it's important to understand that this feature will only be a benefit to you if you take the time to understand which resources are in fact highly used. And that's why it's a good idea to profile your web app with analytics and other tools to make sure you're applying this technique to the right things.
>
> **[3:09](https://www.linkedin.com/learning/javascript-modern-browser-apis/faster-navigation-with-prefetch?u=76281980&t=189)** So you would use analytics to figure out, oh, well the user is likely to click on this link, so let me tell the browser to go ahead and prefetch it. So if you want to learn more about this, you can go over to the [w3.org](https://w3.org) website and I'll going to pull that up here. You can see that the Resource Hints page is here. This feature is specified in the resource hints working draft and you can read more about it at this link.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2), [[Fetch]] (1)
> **UI Navigation:** click on (3), open the (1)
> **Code Identifiers:** prefetch_start (2), prefetch_page (1)
> **Cross-References:** go back to (3)
> **File Paths:** prefetch_page.html (1)
> **CLI Commands:** make (1)
> **URLs:** [w3.org](https://w3.org) (1)
> **Definitions:** is a  (1)

#### [Prioritized loading with preload](https://www.linkedin.com/learning/javascript-modern-browser-apis/prioritized-loading-with-preload?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/javascript-modern-browser-apis/prioritized-loading-with-preload?u=76281980&t=1)** - A close relative of prefetching data, which we saw in the previous example, is preloading data. Now, they may sound like similar operations, and they are, but there is an important difference. The prefetch directive we saw earlier gives a hint to the browser to [[Fetch]] a resource that will likely be needed for the next navigation event. So for example, if we know that a user is very likely to visit a specific page after the one that they are currently on, because it's the next page of search results or the next page of a form, then we can ask the browser to get it in advance. Preload, on the other hand, has a similar syntax in that it also uses the link tag. However, you also need to specify what kind of resource it is. CSS, Script, Image, and so on, and this resource is very likely to be needed in the current page. So, let's take a look at a very simplified example. So, here are my code. I'm going to open up my preload start file. And, let's take a look at this in the browser first, so I'll bring this up in the live server. You can see, when I load the page, that there's an image here and back in the code you can see that it's actually a div element, which is this div element right here, and the div element has a style applied and the style definition has a background image. So, let's go back to the page and look at the network panel. So I'll bring up the Tools, and here's the network panel,
>
> **[1:36](https://www.linkedin.com/learning/javascript-modern-browser-apis/prioritized-loading-with-preload?u=76281980&t=96)** and let me refresh the page. Okay. So, you can see that the page, when the page loads there's some processing that happens, and then the image loads after the CSS is parsed. Now, again, this is a fairly simple page, but you can imagine that if this were a complicated CSS style that wasn't loaded right away, there could be a significant delay in the image loading. And remember, this issue isn't limited to images, this can happen to script code, or style sheets, or other media resources that load after some point when the initial page gets brought up. So, to help with this, we can use the preload attribute, which essentially allows us to declare high-priority resources that the browser should load first. So I'm going to add my preload directive to the top of the page. So back in the code, and I'm going to write my link tag and, in this case the rel attribute is going to be preload, and then the href is going to be a link to my image. So that's going to be...oops...images... And that's going to be my tulips image. And then I have to say as=image, so I've got to tell the browser I'm loading this resource as an image. All right, so I'll save, and now let's go back and refresh the page again. So, when I refresh,
>
> **[3:08](https://www.linkedin.com/learning/javascript-modern-browser-apis/prioritized-loading-with-preload?u=76281980&t=188)** you can see now that the image has loaded much, much sooner in the process. So here, the style sheet got loaded and parsed, and the image got loaded almost immediately. So, when the CSS is being parsed, and the image is discovered, my link tag has told the browser to already go out and get it because I know it's going to be used in the page. So, that dramatically speeds up the loading process for that particular resource. Now, does that mean that you should just preload all the things, and then you don't have to worry about loading performance? No, of course not. You're web app will be different than everyone else's, and that's why it's important to use the browser tools, like this network panel, to figure out what makes sense for your app. Preload can be a great way to increase the performance of your app, but you need to use it properly. It turns out that there is a W3C spec for this. So, if you want to learn more about this capability, you can check out the spec at this link.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (1)
> **Env Vars:** css (4), w3c (1)
> **Documentation:** spec (2), w3c (1)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** for example (1), imagine (1)
> **Cross-References:** go back to (1)
> **Speakers:** - a (1)

#### [Server communication with Beacon API](https://www.linkedin.com/learning/javascript-modern-browser-apis/server-communication-with-beacon-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/javascript-modern-browser-apis/server-communication-with-beacon-api?u=76281980&t=1)** - [Instructor] Alright, now let's learn about the Beacon API. So chances are, you've probably written code that makes use of [[AJAX]] to send data to a server using the XML http request object. This capability makes it possible to send all kinds of data to the server from your web app, including analytics and other kinds of diagnostic data. There are; however, some challenges involved when relying on Ajax for this. For example, it's not an easy task to send data during certain kinds of events, such as when the page is being unloaded because the browser will ignore those requests. You also want to make sure that your server communication doesn't interfere with the performance of your app. And this is where the Beacon API is really useful and can be a better alternative to using plain Ajax for data like analytics and diagnostics. It provides a way to send data to the server in situations where you don't expect to get a response. And it's done asynchronously, when the browser gets a chance to send the data during an idle moment during regular processing. The Beacon API is supported in all the latest versions of the major modern browsers. It consists of a single function named sendBeacon, which is found on the top level navigator object. The first argument is the URL to send the data to and the second argument is the data to send. And this data can either be an array buffer, a string, a blob object, or a form data. The function returns true, if the browser is able to schedule the data to be sent and false otherwise. You can learn about the Beacon API
>
> **[1:34](https://www.linkedin.com/learning/javascript-modern-browser-apis/server-communication-with-beacon-api?u=76281980&t=94)** at this link on the W3C's website. So let's go over to the code and try this out. Alright, so here in my editor, I'm going to open up the Beacon start file. And in order to test this function, I'm going to use an online tool called PutsReq. So I'll bring that up here in my browser. And PutsReq is a tool that basically makes it easy for me to create a temporary end point that I can send data to, to make sure it's working. So if you want to follow along with me, then you can use this tool to create your own end point and use that URL in place of mine. So I'm going to create a PutsReq and I'm going to copy this link, okay? And I'll scroll down a little bit. And this is where the requests will show up, down here. So, back over in my code, what I'm going to do is paste that URL in here, which is where the end point's going to be. And I'll close that, so we have more room. Alright, so I'll save. Okay, so now that I've pasted the URL in, so you can see here in the code that I have several event handlers for the loading and the unloading of the page, along with two click handlers for buttons. And those buttons are right here, up in the mark up. So, let's fill out the function that will send data to our end point. So right here, in our send Beacon function, I'm using feature detection to make sure that the send Beacon API exists and if it does I will call navigator.sendBeacon
>
> **[3:11](https://www.linkedin.com/learning/javascript-modern-browser-apis/server-communication-with-beacon-api?u=76281980&t=191)** and I will use the Beacon URL, which is defined right here, that's my PutsReq end point. And then the data I'm going to send is whatever the value of this strEvent argument is. So I'll send strEvent and let's save. So, in my various even handlers, I'll send strings like load and unload events and I have button one click and button two click. Alright, so let's try this out. I'm going to right click and choose open with live server. And I'll give the browser a moment to send the data and then let's go over to our PutsReq page. Alright, and here you can see our request. So, right there, you can see that the post to this URL was the load event and I'm sending back a nonsense response, but you can customize the response up here in the [[Java]] Script. And you can see that we've got our first event being sent. So now we're using the Beacon API to send data to, in this case, a temporary end point. But if this were your server, that's where you would send the data, alright? So here's the headers that were sent and you can see that the referrer is our local server right here. And the payload area shows our string. So let's go back to the page and now, let's go ahead and click on button one and then let's click on button two. And then we'll go back to the PutsReq page, alright.
>
> **[4:47](https://www.linkedin.com/learning/javascript-modern-browser-apis/server-communication-with-beacon-api?u=76281980&t=287)** And now you can see that there's another event. So here's the button one click event and then I'll click on next again, alright. And there's the load event and if I go back, alright, there's button one click. And I'll go back again, and there is the button two click event, okay? So, you can see that this is a much simpler way of sending data to the server, than using full-blown Ajax. And it works in situations like page unload, where Ajax doesn't. So, just to show that, let's go back to the browser. So when I close this page, alright, let's go back here to the PutsReq and we'll give it a moment to record the event. So there's button two click, alright. And there you can see that now the unload event is being passed in. So, again, much simpler way of sending data to the server than using regular Ajax and unlike Ajax, it works in situations like page unload. Browsers ignore that even, because hey, why isn't it Ajax data if the page is about to be unloaded? So if you find a need to be sending analytics or diagnostics data to your server, consider using the Beacon API instead.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AJAX]] (8), [[Java]] (1)
> **Env Vars:** api (7), url (6), xml (1), w3c (1)
> **CLI Commands:** make (3), find (1)
> **Code Identifiers:** sendbeacon (2), strevent (2)
> **UI Navigation:** click on (3), scroll down (1)
> **Cross-References:** go back to (3)
> **Definitions:** is a  (2)
> **Analogies:** for example (1), such as (1)

#### [Element visibility with Intersection Observer](https://www.linkedin.com/learning/javascript-modern-browser-apis/element-visibility-with-intersection-observer?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/javascript-modern-browser-apis/element-visibility-with-intersection-observer?u=76281980&t=1)** - [Instructor] It's a fairly common design pattern in modern web apps to detect when an element on the page is actually visible to the user. You can use this kind of detection to delay the loading of images until they're visible, or to start and stop a video, or to see if an ad has actually been viewed by the user, and so on. There's a variety of use cases for this. The IntersectionObserver API makes this kind of scenario much easier to accomplish in a way that doesn't degrade the browser's performance. So consider an example where we have a webpage with some content in it, and an element, let's call it Element A, that's down in the page somewhere. So in this example, the element is not visible when the page first loads, but when the user scrolls the page content and reveals Element A, we want to be able to detect that. This is what the IntersectionObserver API does. So let's take it for a spin in our code editor and exercise it a little bit. So here in my editor, I'm going to open up intersection_start.[[HTML]], and I'll hide the files so we have some more room. And you can see that it contains a bunch of placeholder text along with an element that's down here in the content, and that's this element right here. So we want to write some code that detects when this div element is visible to the user. So let's start by implementing a basic observer. And this will tell me when the element becomes visible or is no longer visible. So to do that, I need to create
>
> **[1:33](https://www.linkedin.com/learning/javascript-modern-browser-apis/element-visibility-with-intersection-observer?u=76281980&t=93)** an IntersectionObserver object, so I'll write const observer and I'll create a new IntersectionObserver. And it takes two arguments. The first argument is a callback function, and that takes one argument. And inside my callback, I'm just, for now, going to log out to the console the entries argument. So the callback function is going to be invoked when any of our observed elements enters or leaves the viewport, and this entries element contains information about the elements that we're observing. The second argument is a set of options, and I'm going to leave that out for now and just use the default values. So once I've created the observer, I can then ask it to start observing elements on the page. So I'm going to write observer.observe, and I want it to observe this element, so it has an ID, so I'll write document.getElementById, and that's going to be targetElem. Okay, so we're all set. Let's run this and see what happens. So I'll bring this up in our live server, and I'll bring up the developer tools so we can see the console. And you can see that there's already one entry in the console, and that's because when the page loaded, the element that I'm viewing is not visible. So if we look at the data, we can see isIntersecting is false.
>
> **[3:06](https://www.linkedin.com/learning/javascript-modern-browser-apis/element-visibility-with-intersection-observer?u=76281980&t=186)** So it's not visible right now, okay? So I'll start scrolling the page, and when I scroll the page, you can see that when the element becomes visible I get another entry here in the console, and we look at the data, we can see the results, and so right here we can see that isIntersecting is now true, right, so we can see that there is the true value means that it's now visible in the viewport, and we can see how much of the element is visible by looking at the intersectionRect or the intersectionRatio. And we can see that the intersectionRatio, that's about, hm, maybe 3% or so of the element was visible when the IntersectionObserver fired. So this is interesting, but we can actually get more fine-grained control than this. We can give the observer a set of threshold ratios that we want to serve as trigger points as the element comes into and goes out of view. So in other words, we can ask the observer to trigger when different portion sizes of the element are visible. So to do this, we give the observer an array of numbers as the second option in the constructor. So let's go back to the code, and for the second argument to the creation function, I'm going to give it an options object, and that's going to be the threshold property, and I'll go in and specify an array of values of zero, 0.5, and 1.0.
>
> **[4:44](https://www.linkedin.com/learning/javascript-modern-browser-apis/element-visibility-with-intersection-observer?u=76281980&t=284)** So now I want to trigger the IntersectionObserver when zero, 50%, and 100% of the element are visible. And you might have noticed that I had some CSS styles declared back up in the top of my document labeled, you know, some background, and then some number, so what I'm going to do is apply a different background color to the element as more or less of it is visible. So let's go back down to our observer code. And in addition to running out to the console, I'm going to write if (entries[0].interesctionRatio,
>
> **[5:27](https://www.linkedin.com/learning/javascript-modern-browser-apis/element-visibility-with-intersection-observer?u=76281980&t=327)** so for the case where it's less than .5, I'm going to apply a background color to entries[0], and I've only got one entry, right, that's why I'm using this zero suffix. So entries[0].target.className is going to be background0,
>
> **[5:50](https://www.linkedin.com/learning/javascript-modern-browser-apis/element-visibility-with-intersection-observer?u=76281980&t=350)** and then I'll copy and paste this a couple times. So for the case where it's greater than or equal to one, that would be background 100, and if it's greater than or equal to 0.5 and if it's going to be less than one,
>
> **[6:20](https://www.linkedin.com/learning/javascript-modern-browser-apis/element-visibility-with-intersection-observer?u=76281980&t=380)** I'll apply background 50. So now I've got backgrounds for 0%, 50%, and 100% visibility, all right? So let's go back to the browser, and scroll back up, and let's reload. All right, and now as I scroll the element into view, you can see that as it barely becomes visible it's got a background of zero, and then when half of it becomes visible, the background changes to light blue, and then when it's fully visible it becomes dark blue. And then vice versa, as I scroll it back out of sight again. Now, it's important to point out here that IntersectionObserver is not intended to be low-latency or pixel-perfect, and that means that you can't expect it to fire immediately when the element visibility changes. So you shouldn't do things like base scroll value animations on it or anything that needs to be super low latency. You can learn more about this API by visiting the W3C specification for it, located at this link.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **Code Identifiers:** isintersecting (2), intersectionratio (2), intersection_start (1), getelementbyid (1), targetelem (1)
> **Env Vars:** api (3), css (1), w3c (1)
> **Definitions:** is a  (2), means that (2), in other words (1)
> **Versions:** 0.5 (2), 1.0 (1)
> **Cross-References:** go back to (2)
> **Documentation:** w3c (1), specification (1)
> **File Paths:** intersection_start.html (1)


### 2. Better Data Management

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of data handling](https://www.linkedin.com/learning/javascript-modern-browser-apis/overview-of-data-handling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-modern-browser-apis/overview-of-data-handling?u=76281980&t=0)** - [Instructor] Data is one of the most essential components of any real web app. Most apps have a need to retrieve, manipulate, store, and process various kinds of data. In this chapter, we're going to spend some time looking at the modern APIs available to make working with data easier. Over the years, various [[Web Standards]] have emerged to give developers the tools needed to perform basic data-related tasks. And this has resulted in a fairly complex set of APIs for working with data. So just to name some of them, there's Cookies, Application cache, localStorage, sessionStorage, XmlHttpRequest, IndexedDB, and WebSQL. Now some of these are still in use while others are obsolete and the ones that are still in use have drawbacks. LocalStorage, for example, is a synchronous API. So it blocks user interaction while your code is accessing it. Application cache never really fully solved all the scenarios of building true offline capable web apps, and WebSQL was never universally adopted. The APIs that we're going to be working with in this chapter provide the functionality you need to work with data using the latest [[JavaScript]] standards, like Promises. So we're going to start off learning about the [[Fetch]]() API, which is a much nicer way of getting and posting data than XMLHttpRequest. Then we'll take a look at an API provided by Mozilla Foundation, called localForage, which gives you a nice wrapper around the IndexedDB API, and simplifies some common [[Data Storage]] scenarios.
>
> **[1:36](https://www.linkedin.com/learning/javascript-modern-browser-apis/overview-of-data-handling?u=76281980&t=96)** After that, we'll combine what we've learned about fetch() with the newer Cache API to see how to easily cache http request and response pairs locally. Then we'll wrap up with the StorageManager and DeviceMemory APIs, which give you new ways of determining how much storage space and memory capacity a device has, and how to make it persistent on the user's local machine.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (2), [[Web Standards]] (1), [[JavaScript]] (1), [[Data Storage]] (1)
> **Env Vars:** api (5)
> **Code Identifiers:** localstorage (1), sessionstorage (1), localforage (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Easier Ajax with the Fetch API](https://www.linkedin.com/learning/javascript-modern-browser-apis/easier-ajax-with-the-fetch-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/javascript-modern-browser-apis/easier-ajax-with-the-fetch-api?u=76281980&t=1)** - [Speaker] Back when it was first introduced, the XML HTTP request API, sometimes called xHR, or even [[AJAX]] for short, had a huge impact on the quality of web applications. The modern API equivalent of xHR is called [[Fetch]]. And it dramatically simplifies writing code that requests data from remote servers. Let's take a look at how to use this API to perform a network operation. So here in chapter two, I'll open up fetch underscore_start. And let's begin by implementing a simple HTTP GET operation. And I'm going to be using the HTTP [been.org](https://been.org) site here to retrieve some sample [[JSON]] code. So let's start off with the code to perform, a get so all right fetch and the URL is HTTP [been.org/JSON](https://been.org/JSON). Now because the fetch API uses [[JavaScript]] promises, I can use the then function to chain onto this call and define the code for what happens next. So all right then, and that takes a callback function with the response. And inside that callback, I'm going to log out some information to the console. So I'll console log the content-type. And that's going to be the, response.headers.get.
>
> **[1:39](https://www.linkedin.com/learning/javascript-modern-browser-apis/easier-ajax-with-the-fetch-api?u=76281980&t=99)** And that's going to be content_type. And we close the files, we can see some more. Alright, and I'll just copy this line and get some other information, so we'll get the redirected header. And that's going to be the response.redirected and then we'll get the status. And that's going to be response status. And we might as well get the status-text while we're at it. And that's going to be status-text. And then we'll get the response type. And that's going to be response.type. And then finally, let's get the response URL and that's going to be the respons.url property. Okay, so that gives us a nice set of information that we can log out when we do the fetch. So let's go ahead and run what we have. So I'll bring this up in the live server. To see the output, we can look at the developer tools in the console. And you can see that the various fields have been logged out here, right? So the content type is application JSON,
>
> **[3:12](https://www.linkedin.com/learning/javascript-modern-browser-apis/easier-ajax-with-the-fetch-api?u=76281980&t=192)** we were redirected, the status code is 200, which is okay, and so on. If you're not familiar with JavaScript promises, by the way, make a note to watch the JavaScript promises videos in the learning ECMO script six course. Alright, so let's add some code to get the response data. So let's go back to the code and in here, what I'm going to write is if response.status is equal to 200, then I'm going to return response.text which itself is a promise so now we can further chain, on to this function by writing .then and then I'm going to have a function called returned data. And return data... We actually return data will be the argument right? There we go, and inside that function, I'm going to write out to the console that the returned data was the return data argument.
>
> **[4:27](https://www.linkedin.com/learning/javascript-modern-browser-apis/easier-ajax-with-the-fetch-api?u=76281980&t=267)** And I can also catch any errors. And if any errors happen, I'll just simply log the error out to the field. And that's going to be this argument there. Alright, so now I'm actually going to get the response text back from the response that comes back and log it out to the console, so let's save and let's go back to the code and I'll refresh. And you can see that now the return data is a bunch of JSON. And that's being written out to the console here. Alright, so of course, you're not limited to get requests, you can also easily make a POST request by using the right arguments to the fetch function. So in this case, will post a simple set of data and a custom header, so let's go back to the code and here in the post example, I'm going to write fetch and I'm going to use, the same address only this time, I'm going to call the post endpoint and I'm going to call the post endpoint with an object that contains my data. So all right method and that's going to be post and the body is going to be a string and I'll just pass in some simple arguments like full equals bar.
>
> **[6:00](https://www.linkedin.com/learning/javascript-modern-browser-apis/easier-ajax-with-the-fetch-api?u=76281980&t=360)** And then I'll pass in some custom headers, which is itself an object. And I'll pass in, you know, x custom header. And I'll give it my custom value. All right, so that's all there is to that and then, I'll write then, and then once again, I have a function to handle the response. And then inside that, I'm going to return the response.text, which means I'll write .then, and that's going to be a function for the return data. And then I'll write out the return data, host data and that's going to be the return data. Alright, so let's go ahead and run this one more time. And then back here in the developer tools, you can see that here's the get operation and the post operation. You can see that that returns the posted data and right here is my full equals bar argument in the data property. And then if we look down here, yep, there's my custom header, so here's x custom header with my custom value. So as you can see, using the fetch API, along with JavaScript promises, results in code that is much easier to write and maintain, then using the old style Ajax.
>
> **[7:36](https://www.linkedin.com/learning/javascript-modern-browser-apis/easier-ajax-with-the-fetch-api?u=76281980&t=456)** You can avoid having to handle multiple callbacks and different response states and just focus on sending and retrieving data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (8), [[JSON]] (4), [[JavaScript]] (4), [[AJAX]] (2)
> **Env Vars:** api (5), http (4), json (4), url (2), xml (1)
> **Code Identifiers:** xhr (2), underscore_start (1), content_type (1)
> **Cross-References:** go back to (3)
> **Definitions:** is a  (2), is called (1)
> **CLI Commands:** make (2)
> **URLs:** [been.org](https://been.org) (2)
> **API Endpoints:** get  (1), post  (1)

#### [Simplified IndexedDB with localForage](https://www.linkedin.com/learning/javascript-modern-browser-apis/simplified-indexeddb-with-localforage?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/javascript-modern-browser-apis/simplified-indexeddb-with-localforage?u=76281980&t=1)** - [Narrator] As I mentioned at the start of the chapter, most applications have a need to store data locally on the user's machine. And you probably already know by now that IndexedDB is the preferable way to do so. First, it's asynchronous. So it helps to keep your app responsive. It also lets you store multiple kinds of data, so you're not limited to strings of text. You can also define more than one database, so you can separate unrelated data and only operate on the collection that you need to. The downside of IndexedDB however, is that the API for using it is considerably more complex then the simple key value system used by something like local storage. The good folks at Mozilla, however, have created a good, third party library called localForage that helps with this. You can download it from this sight, which also contains the detailed docs for it. Using localForage you can treat IndexedDB [[Databases]] as simple key value storage. So let's fire it up in our editor and take it for a spin. So here in our editor I'm going to open up indexed_start.[[HTML]] and I've already downloaded and stored the minimized version of localForage.js in my folder here, so I've already got that in place. And you can see I'm accessing it here in this script tag. So, let's take a quick look at our page in the browser, and you can see that this is a page that has some controls in it for storing and retrieving values
>
> **[1:38](https://www.linkedin.com/learning/javascript-modern-browser-apis/simplified-indexeddb-with-localforage?u=76281980&t=98)** and deleting items and listing data. So let's go fill in the code to make these controls work. So I've already got some code in place to handle the button click events. So let's add the code to store data using the set item function which takes a key and a value. So when the user clicks the set button, I'm going to write localForage.setitem and that takes a key and a value, which we've already retrieved from the forum using these statements. And what's nice is that localForage uses [[JavaScript]] promises, so I can just write then, and then I have my callback function, which will give me a value and I can write to the console that set item stored this value. And then let's add the code to retrieve the data. So that's going to be localForage.getitem and we're going to give it a key, and then once again I'll have a function as my callback and in this case I'll just log that get item retrieved that value. We could also remove data from the database using the remove item function. So I'll write localForage.removeitem and that takes a key
>
> **[3:16](https://www.linkedin.com/learning/javascript-modern-browser-apis/simplified-indexeddb-with-localforage?u=76281980&t=196)** and then once again we'll have our callback and the callback will just console log that remove item deleted that given value. And then finally, let's add some code to iterate over all the stored data. So I'll use localForage.iterate and the iterate function takes a callback and that callback will be given a value, a key, and the iteration number. And once again we can just console.log, the iteration number, and the key and the value. And of course that uses a promise so we can then say then, when it's done, we'll log out that iteration complete. Okay, so now let's go back and refresh our page and let's bring up the developer tools so we can see the console. Alright. So I'll go ahead and store some values. So here's key one and value one. So we'll store that. And then we'll store key two and value two. And let's store key three and value three.
>
> **[4:53](https://www.linkedin.com/learning/javascript-modern-browser-apis/simplified-indexeddb-with-localforage?u=76281980&t=293)** And you can see that those values are being stored. And let's try retrieving a value. So we'll retrieve value three using key three. You can see that that worked. Let's go ahead and delete key two. And so now when we try to get key two you can see that that's not there anymore. And now let's go ahead and list all the values. And you can see the key one and key three are left, and the iteration is complete. Alright, so that's a quick introduction to localForage. So in the next example, we'll take a look at how we can work with multiple different instances of localForage databases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (2), [[HTML]] (1), [[JavaScript]] (1)
> **Code Identifiers:** localforage (10), indexed_start (1)
> **File Paths:** indexed_start.html (1), localforage.js (1)
> **CLI Commands:** make (1)
> **Env Vars:** api (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [localForage and multiple instances](https://www.linkedin.com/learning/javascript-modern-browser-apis/localforage-and-multiple-instances?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/javascript-modern-browser-apis/localforage-and-multiple-instances?u=76281980&t=1)** - Alright, let's pick up where we left off in the previous example and let's try using LocalForage with multiple database instances. So I'm going to go ahead and open up my indexed_start in the example four of chapter two. And let's scroll down. And here's the code from where we left off in the previous video. Alright, so here in the event handler for the create instances button which if we scroll back up you can see that there is a button here called btnMulti which is for Create Instances and then we've got buttons for storing and getting data. So back down here in the event handler for the create instances button I'm going to create two different [[Databases]]. So I'll have instance1 which will be localforage and I'll use the createInstance function and I have to pass in some options. And so I'll give it a name. And the name's going to be instance1 and then I'll create instance2 and then pretty much the same code. So I'll just copy and paste it. And that's going to be instance2. And just to show how this works, let's store two different values
>
> **[1:35](https://www.linkedin.com/learning/javascript-modern-browser-apis/localforage-and-multiple-instances?u=76281980&t=95)** with the same key name, but in separate instances. So when the user clicks the star button I'm going to say instance1 and I'm going to call setItem() and I'm going to store key1 with value1. And then I'll do the same thing for instance2. Same key name but a different value. And then let's retrieve the data. So I'll have instance1 and I'll use the getItem() function and I'll get the value of key1 and of course, have to have my promise function. So that's going to give me a value back and I'll log out to the console, that instance1 returned. And that's going to be the value. And then I'll do the same thing for instance2. So there's instance2 and it's going to retrieve the same key name. Alright so let's go ahead and save and let's go ahead and bring this back up in our browser. Alright. And I'll show the developer tools. Alright, there's the console. So I'm going to create the instances. Alright. And then I'm going to store the data. And you can see that when I click the Get Data button
>
> **[3:14](https://www.linkedin.com/learning/javascript-modern-browser-apis/localforage-and-multiple-instances?u=76281980&t=194)** that instance1 returned value1 and instance2 returned value2 so even though the keys have the same names the data returned is different. Local forages are a really useful library for simplifying the IndexDB API for storing key value pairs while keeping the advantages of using this modern storage mechanism. You get [[JavaScript]] promises. You get asynchronous code execution. And overall it's just much better than using local storage or session storage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1), [[JavaScript]] (1)
> **Code Identifiers:** indexed_start (1), btnmulti (1), createinstance (1), setitem (1), getitem (1)
> **Env Vars:** api (1)
> **Cross-References:** previous video (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Speakers:** - alright (1)

#### [Caching data with the Cache API](https://www.linkedin.com/learning/javascript-modern-browser-apis/caching-data-with-the-cache-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/javascript-modern-browser-apis/caching-data-with-the-cache-api?u=76281980&t=1)** - In this example we're going to look at another useful API for storing data locally called the Cache API and you can read more about that at this link here in the MDN docs. The Cache API was originally developed to support service workers and offline progressive web apps, but you can also use it in regular web apps. The Cache API provides a convenient mechanism for storing the results of HTTP request and response pairs. So you wouldn't use this API the same way that you would use IndexedDB for example which provides detailed, random access to structured data. Instead, the Cache API makes it easy to do exactly what its name implies: take the results of an HTTP request and store it for later use. So a good example of this is a resource like your company logo. It probably doesn't change very often so why not just cache it locally instead of getting it from the server every time? So lets take a look at how we can modify an existing resource request to use the Cache API when available. So over here in my code, I'm going to open up cache_start and if I scroll down you can see that when the user clicks this Get [[JSON]] data button it calls this function to get JSON data from this sample URL and that calls this function here so we use the [[Fetch]] API to get some data and then log it out to the console.
>
> **[1:33](https://www.linkedin.com/learning/javascript-modern-browser-apis/caching-data-with-the-cache-api?u=76281980&t=93)** So lets go ahead and bring this up in the browser. And I'll bring up the developer tools. And when I click on Get JSON data you can see that the JSON comes back just as you would expect, alright. So lets go ahead back to the code. So what I'd like to do cache this data locally so I don't have to hit the network each time. Now in this case, I'm working with JSON but, again, you can cache whatever an HTTP response comes back with. It could be an image, it could be blob data, doesn't really matter. So first, let's check to see if the Cache API is present. So I'll write if caches is in the window property then we know that the Cache API is there. So now I can open the Cache and check to see if our data is already there and just like with IndexedDB [[Databases]], you can have multiple different named caches. So I'm going to open, and I'm going to call it my-data-cache, and the Cache API uses promises so the result of that will be a function that comes back with my cache object. Alright, now to see if the data is already in the Cache I need to use the match function. So I'll call cache.match and I'm going to match the URL that I was given, that's this URL right here,
>
> **[3:07](https://www.linkedin.com/learning/javascript-modern-browser-apis/caching-data-with-the-cache-api?u=76281980&t=187)** and then, once again we're using promises, so I'll use then, will take a result. So if the result that comes back from that match call is undefined, then we know that the result was not found. So I'll write console.log and I'll just say not found in cache and that's the URL that we were past. Alright, and I'll just fetch the data normally if that's the case. So I'm going to move my original code and paste it in here. So this will be in the no cache hit case. I just get the data and what I'm going to do is add the data to the cache when the result comes back. So now that I've got the data, I'm going to call cache.put and I'm going to put the URL and the result response that came back, alright. Now, responses can only be read one time so because I want to log this data to the console, I have to clone this response and what I'm going to do is write let cloned response equal result.clone and then I'm going to get the text content from the cloned version. So I'm going to write clonedresponse.text and then.
>
> **[4:44](https://www.linkedin.com/learning/javascript-modern-browser-apis/caching-data-with-the-cache-api?u=76281980&t=284)** So that's it for no hit in the Cache path. So we see if the URL is there and if it's not there we say it's not there, we call the fetch function, we clone the response, I put the original response into the Cache and then I write out the data from the response. Now the other case is if there's data in the Cache. So if the Cache was hit, I'm going to write result.text and then I'll have my callback function take a text argument
>
> **[5:21](https://www.linkedin.com/learning/javascript-modern-browser-apis/caching-data-with-the-cache-api?u=76281980&t=321)** and then in that case I can simply write console.log and then I'll write cache hit along with the URL and the text. Okay, so now let's give this a try. So I'm going to go back to the browser and I'll refresh so now lets hit the JSON and you can see that the result says not found in cache so this is the case where we hit the data the first time and there's the URL and here's the JSON that came back. So now, I'm going to click on the Get JSON button again and in this case you can see there was a cache hit because when I went to go get the URL, I checked to see if that URL was in the cache and it was and this data was already there. So let add some code to clear the cache. So when the user clicks clear cache content button, I'm going to write caches.delete and I'm going to call it my-data-cache and then I'll have my callback function and I'll just write out the console
>
> **[6:45](https://www.linkedin.com/learning/javascript-modern-browser-apis/caching-data-with-the-cache-api?u=76281980&t=405)** that cache was deleted or there was an error. So now I have the ability to delete the content from the cache. So now let's go back and try that. So once again, we refresh. I'll click on JSON data, you can see that there's a cache hit. I'll clear the local cache, you can see that the cache was deleted. I'll click on JSON data again and now it says "not found in cache." Okay? So this is a fairly simple example intended to show how the cache is used. In practice, you would probably want to add some checks to see if the content has changed on the server in order to clear out the Cache, and there are multiple ways you can do this. For example, you can use an IndexedDB database to keep track of when you added specific URLs to the Cache and then periodically update them, or you can use push messaging to inform your client apps that new data is available and clear the Cache that way. There's numerous ways to do this and it's beyond the scope of this course to go into them in detail, but it's something you'll need to consider for your app if you choose to use this API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (10), [[Fetch]] (3), [[Databases]] (1)
> **Env Vars:** api (12), json (10), url (10), http (3), mdn (1)
> **UI Navigation:** click on (4), scroll down (1), open the (1)
> **Analogies:** for example (2), just like (1)
> **Definitions:** is a  (2)
> **Code Identifiers:** cache_start (1)
> **Cross-References:** go back to (1)
> **Documentation:** mdn (1)

#### [Making storage persistent](https://www.linkedin.com/learning/javascript-modern-browser-apis/making-storage-persistent?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/javascript-modern-browser-apis/making-storage-persistent?u=76281980&t=1)** - [Instructor] So far in this chapter, we've looked at the APIs available for storing information. But how does your app know about the memory capabilities of a particular device? How do you know how much storage space is available and how much has already been used? How do you know how much RAM a device has? Well up until the storage manager and device memory APIs came along, there wasn't a good way to find out any of this information. But now, we can do so in a standards compliant way. So we'll start with the Storage Manager API which you can find at this link here and I'll let you catch up on the content in your own time. For now, we're going to exercise these features in our example file. So in VS Code, I'm going to open up the storage_start file and let's just scroll up, you can see that there's some controls in here for finding out about storage space and so on. Let's just go ahead and bring this up in the browser. So I'll bring this up with my Live Server. And here in the page, I have some fields where I'll fill out the quota and usage stats and there's a button that will let me request what's called Storage Persistence and we'll get into that in a moment. I also have a field for the device's RAM configuration. So storage space is allocated on the browser on an origin by origin basis. So, if we go back to the code, I already have some code here that does Feature Detection to see if the Storage API is available, and if it is, I'll call the Estimate Function,
>
> **[1:39](https://www.linkedin.com/learning/javascript-modern-browser-apis/making-storage-persistent?u=76281980&t=99)** which just like many new APIs these days, revolves as a [[JavaScript]] promise. So I'll write: navigator.storage.estimate and then, use my Then Function to get a callback.
>
> **[2:02](https://www.linkedin.com/learning/javascript-modern-browser-apis/making-storage-persistent?u=76281980&t=122)** Let's get some more room here. Here we go. And then inside my callback, I'll write: document.getElementById and that is the estimate. And that's going to be my estimate.quota and I'll have a similar line for the usage and that's going to be estimate.usage. Alright, so I've got two properties in my estimate object that comes back to my callback to see how much storage I have available. So let's go ahead and try that out. And you can see that when I refresh the page, I've got a quota of a whole lot of bytes and I've only used a small amount. Alright, so I've got quite a lot of storage available and my app can then use this information to make intelligent choices about how much data to download and cache. I can also use this API to ask the browser to make the data that I store locally, what's called Persistent. In other words, I want the browser to do its best to prioritize maintaining my site's data. So when a device is under memory pressure and it needs to clear out storage in order to make room, browsers will automatically attempt to clear storage space. For offline web apps, that's a problem because the browser might clear storage that contains really important information. So storage that is marked as persistent will not
>
> **[3:36](https://www.linkedin.com/learning/javascript-modern-browser-apis/making-storage-persistent?u=76281980&t=216)** be cleared without first asking the user for confirmation. So the way that we do this is by requesting the persistent storage permission from the browser. And so once again, I've got some feature detection code, and if this feature is available, I can write: navigator.storage.persisted and then got my callback function, which will get a result and I can write: persistEl and I'll get that from my document.getElementById which is dtPersisted
>
> **[4:28](https://www.linkedin.com/learning/javascript-modern-browser-apis/making-storage-persistent?u=76281980&t=268)** and then I'll write: persistEl.textContent is equal to this result right here. So that's persisted and that's either going to be true or false. So now I can request this ability from the browser, which I'll do here in the Event Handler for the Request Persisted Storage button. So I'll write: navigator.storage.persist
>
> **[5:09](https://www.linkedin.com/learning/javascript-modern-browser-apis/making-storage-persistent?u=76281980&t=309)** and then once again that resolves as promise and if the result is true, I'll console.log "Storage is persistent" I'll write out something else, "Unable to make storage persistent." Alright, so let's give this a try. Let's go back to the browser and we'll refresh and you can see that the Storage Persistence is false so when I bring up the Developer Tools, here we are in the console, I'm going to Request Storage Persistence and now you can see that the storage is persistent so when I refresh, you can see now that the Storage Persistence is true. So, what this means is that now, data that is stored locally by my app from this origin, will be given priority when other data needs to be cleared out. Now my app can't prevent that from happening, but at least I've asked the browser to prioritize my data above other more transient web apps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1)
> **Code Identifiers:** getelementbyid (2), persistel (2), storage_start (1), dtpersisted (1), textcontent (1)
> **CLI Commands:** make (4), find (2)
> **Env Vars:** api (3), ram (2)
> **Cross-References:** go back to (2)
> **Tools:** vs code (1)
> **UI Navigation:** scroll up (1)
> **Definitions:** in other words (1)

#### [Getting device memory information](https://www.linkedin.com/learning/javascript-modern-browser-apis/getting-device-memory-information?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/javascript-modern-browser-apis/getting-device-memory-information?u=76281980&t=1)** - Okay, so now we're going to use the Device Memory API to see how much RAM our device has. And this API's pretty simple. It's basically just a property available on the global navigator object called Device Memory. So I've brought the spec up here in a browser and you can learn more about it by following this link. In the mean time, let's jump over to the code and fill out the [[Representational State Transfer (REST)|rest]] of our storage example to use the device memory API. So I'm going to open up storage_start and I'll close the files list, so we have some space. So this is essentially where we left off in the storage example. And if I scroll down, you can see that the code that we filled in for the storage persistence is still here. And we're going to fill in this section here. So as I stated, this API is pretty simple. I'm going to write if navigator.deviceMemory. So I'll feature detect to see if this property is here, and if it's there, I'm going to write Document.getElementById and the I.D. of the field that we want is this span right here called devMem, and we're going to fill in this value with how much RAM our device has. So, it's called devMem, and I'll set the text content equal to navigator.devMemory. Now for security purposes, this API is not exact.
>
> **[1:35](https://www.linkedin.com/learning/javascript-modern-browser-apis/getting-device-memory-information?u=76281980&t=95)** It doesn't tell you exactly how much RAM a device has, and that's to prevent device fingerprinting by malicious code. It just basically tells you what memory class this device is, so as of this recording, this API will only report the values of .25, .5, one, two, four, and eight gigabytes of RAM. So the API basically rounds whatever the value of the RAM is to the most significant bit. So with this information, we can decide on the fly what resources to download in order to provide the richest possible experience without degrading performance. So let's go ahead and save, and let's bring this up in a browser, and you can see from the previous storage example, we still have our values from that. So here's our quota, it has how much is used, here's whether it's persistent. And now down here in the device memory section, I've got my value of eight gigabytes, so we can see that I'm on a pretty serious class machine here, but if I was on a lower end mobile device, this might only be one gigabyte, or maybe even .5 gigabytes. So by using these different values for device memory and the storage manager, you can figure out what the storage capacity of a user's device is, and tailor the experience accordingly to make the most of the resources that the user has.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** api (7), ram (5)
> **Code Identifiers:** devmem (2), storage_start (1), devicememory (1), getelementbyid (1), devmemory (1)
> **CLI Commands:** make (1)
> **Documentation:** spec (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - okay (1)


### 3. Advanced User Experiences

[↑ Back to Table of Contents](#table-of-contents)

#### [Native overlays with the Dialog API](https://www.linkedin.com/learning/javascript-modern-browser-apis/native-overlays-with-the-dialog-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/javascript-modern-browser-apis/native-overlays-with-the-dialog-api?u=76281980&t=1)** - [Instructor] Dialogues and overlays are a fairly common sight on modern web apps. But until recently they had to be built manually using position div elements and other CSS and [[JavaScript]] hacks. The [[HTML]] 5.2 spec introduced an official dialog element which is currently supported natively in Chrome and other browsers based on the Blink engine and is under development in Firefox. In this page here, you know, click on the dialog element. This contains information about the new dialog element and I'll let you read it at your leisure. There's also a polyfill available for browsers that don't yet natively support it. So let's go over to our code, let's take a look at the finished version of this example in our browser. All right, so here's the finished version and you can see that when I click on this button the dialog shows up and I can dismiss it, and it's the non-modal version and this is the modal version with the page grayed-out and this is a, this backdrop option that you see here can be styled individually. All right, so let's open the code and build this. So here in VS Code I'll open up dialog_start and here's my file, and if I scroll down, you can see that the dialog element is defined in HTML right here using the dialog tag. And once I defined the dialog structure using markup I have to write some script code to handle showing and closing the dialog in response to the button clicks.
>
> **[1:35](https://www.linkedin.com/learning/javascript-modern-browser-apis/native-overlays-with-the-dialog-api?u=76281980&t=95)** So let's fill that in. So when the user clicks the show button I'm going to show the dialog using the non-modal API so I'll write document.getElementById and the dialog has an id of dialog1, so I'll get that dialog and I'll call the show function and for the modal version I will simply call showModal instead. Right, and then I'll add a code to close the dialog when the OK and Cancel buttons are clicked in the dialog. So, I'll write if and in this case I need to check to see if the dialog is open by checking the open property, then I'll call dlg.close. And dlg is right here, we get the same element. And in the close function I will call this with the value of OK for the OK button and then for the Cancel button I'll just copy that code and paste it down here, and in this case I'll call close with the value of Cancel instead. All right, so let's try out what we have so far. So we'll bring this up with our Live Server, and sure enough you can see there's the dialog and in this case you can see it's working but it doesn't look very good. So we can add some CSS styling to make it look better. So that's the non-modal version and this is the modal version, you can see that it
>
> **[3:09](https://www.linkedin.com/learning/javascript-modern-browser-apis/native-overlays-with-the-dialog-api?u=76281980&t=189)** kind of slightly grays out but I don't really like that, we can do a better job there. So let's go back to the code, all right, so here in the code I'm going to scroll up and I'm going to uncomment this style sheet declaration right here. So I'll uncomment that, and remove the closing comment there. All right, so the first style sheet defines an appearance for the dialog itself. It has a background color, border radius, shadow and so on. The next two styles are for the content inside the dialog. There's the h1 that defines the title and the div that contains the dialog content, the text and the buttons. And the last style defines an appearance for the backdrop or the shaded part of the page that is not part of the dialog and is only used when the dialog is a modal one. So let's save this and let's go back to the browser. And we'll refresh, and now let's bring up the modal dialog again. And there you can see that the dialog appearance has changed along with the shaded backdrop area. All right, there's one more thing to look at so let's go back to the code. So the values that are passed to the dialog close function are actually available to the [[Representational State Transfer (REST)|rest]] of the program as returned values from the dialog. So dialogs also have a couple of events that your code can listen for, and I'm going to demonstrate both features here. So at the bottom of my script I have some code that listens for the close and cancel events
>
> **[4:46](https://www.linkedin.com/learning/javascript-modern-browser-apis/native-overlays-with-the-dialog-api?u=76281980&t=286)** which is fired when the Escape key is used to cancel the dialog. So, what we're going to do is go back to the developer tools and look at the console, because this property here the returnValue on the dialog element should be given whatever was called into the close function, so when I click the OK button, the string of OK should show up here for the close function. And when I cancel the string Cancel should show up when this value is accessed of the dialog element in this case. So let's go back to the browser. And let's bring up the Developer Tools. All right, so let's go ahead and show the dialog and when I click OK, you can see the dialog was closed with the OK button. And when I show it with the modal I'm going to click Cancel and you can see that it was closed with Cancel. And rather than clicking I'll hit the Escape key, and there you can see there was both canceled and closed. So, instead of using third party libraries just to show dialogs you can now use the built-in feature of HTML.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3), [[JavaScript]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** html (3), css (2), api (1)
> **Cross-References:** go back to (5)
> **UI Navigation:** click on (2), open the (1), scroll down (1), scroll up (1)
> **Code Identifiers:** dialog_start (1), getelementbyid (1), showmodal (1), returnvalue (1)
> **Tools:** firefox (1), vs code (1)
> **CLI Commands:** make (1)
> **Versions:** 5.2 (1)

#### [Integrating with native notifications](https://www.linkedin.com/learning/javascript-modern-browser-apis/integrating-with-native-notifications?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/javascript-modern-browser-apis/integrating-with-native-notifications?u=76281980&t=1)** - [Narrator] Notifications have become a fairly common way of interacting with users. Both on the desktop as well as mobile devices. The notifications API gives web developers a way of leveraging this feature and it works even if your web app is not the currently active app. So I've got the link for the web notifications spec here and you can learn more about it by reading the spec and I'll leave that to your own time. So for now let's jump over to the code editor and let's open up notifications underscore start and before we do anything let's go ahead and bring this up in the browser and you can see that my page has some controls in it for requesting notifications and showing notifications with some different options. So let's go ahead and fill out the code. Before we can send notifications to the user, we first have to request the permission to do so which we will handle when the request notifications permission button is clicked. So here's that button right here and then down in my code, I have an event handler for when the user clicks the button. The global notification object has a request permission function that returns a promise. So I'll write notification dot request permission and that returns a promise so I'll use my then function which will take a call back which gives me a result and I will write console dot log that the notification permission request along with the result.
>
> **[1:41](https://www.linkedin.com/learning/javascript-modern-browser-apis/integrating-with-native-notifications?u=76281980&t=101)** So once we receive permission to display notifications we can create and show them. So let's start with a basic example. When the user clicks the show basic notification button, I have an event handler here that will execute so let's fill that out. So I'll check to see if the notification permission property is equal to granted in which case we have permission to show notifications. So I'll write var notify is equal to new notification and I'll just give it some text. This is a basic notification. All right so let's go ahead and save, let's go back to the browser and let's bring up the console. So here's the developer tools. So I'll click on request notification permission and you can see that the browser is prompting me to say hey this site wants to show notifications. So I'll click allow and you can see in the output the request was granted. So now that we have that permission I can click on show basic notification and you can see up here that the basic notification appears, it's not very fancy but we can go ahead and change that. Now this is going to look different based on the OS that you're running this on. So this is on the Mac, this will look different on [[Windows]], it'll also look different on [[Linux]] or on mobile devices. So we can customize this, let's go back to the code. So the notifications API provides a fair number of options for customizing the notification
>
> **[3:16](https://www.linkedin.com/learning/javascript-modern-browser-apis/integrating-with-native-notifications?u=76281980&t=196)** and I'm not going to go through all of them. You can refer to the documentation to try out some of these yourself and I encourage you to do so, but you can see that I have a form here in the page that allows for setting of some of the properties and so we're going to fill these out. So let's go down to here in the event handler, and let's go ahead and fill in some of the code for creating the customized notification and you can see I've already got some code that retrieves the values for the options that the user entered. So first I'm going to create an object to hold the options, and I'll call that not Options and I'll say not Options dot body is equal to the body text that the user entered and the require Interaction is going to be set to the is Persistent value which is this one right here to see if that radio button is checked and I'll say if the user wants to use an icon then the icon is going to be images info dot png.
>
> **[4:52](https://www.linkedin.com/learning/javascript-modern-browser-apis/integrating-with-native-notifications?u=76281980&t=292)** And let's make sure that that path is correct. Yep, all right. And then I create the notification like I did before but now I pass the options as the second parameter. So I'll write var the Note equals new Notification and I'll give it the title that the user entered along with the options and notifications also generate their own events that we can listen to. So in this case I'll listen for a click event on the notification and I'll assign that to a function. So when the user clicks on the notification we will open up a web page. So first I will preempt the notification and I will close it when the user clicks on it and I'll write window dot location is equal to and we'll just send the user over to the w3 website. All right so let's save and now let's run the updated example. So I'll refresh and you can still see we've got the basic notification like we did before and we'll close that. So I'll change some of these options. I'll write this is the title, here's some body text
>
> **[6:26](https://www.linkedin.com/learning/javascript-modern-browser-apis/integrating-with-native-notifications?u=76281980&t=386)** and we'll use an icon and we'll show the custom notification and you can see now that the icon is being shown. We've got the title, this is the title, here's some body text. We could also call make persistent which basically means that the notification just sticks around. So it's going to hang out there until I click the close button. Normally notifications go away after a few minutes but when I say make it persistent I have to click close manually. And let's do it one more time you can see that when I click on the notification, we open up the W3C's website. So as you can see working with web-based notifications is fairly easy and it gives your app a nice native integration point with the user's platform. So I suggest taking some time to play with some of the features we didn't cover here. And again you can go back to the documentation and learn more about some of the additional properties you can set when you build web notifications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (1), [[Linux]] (1)
> **Documentation:** spec (2), the documentation (2), w3c (1)
> **CLI Commands:** make (3)
> **Env Vars:** api (2), w3c (1)
> **Cross-References:** go back to (3)
> **UI Navigation:** click on (3)
> **Definitions:** is a  (1), basically means (1)
> **Speakers:** - [narrator] (1)

#### [Detecting network conditions](https://www.linkedin.com/learning/javascript-modern-browser-apis/detecting-network-conditions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/javascript-modern-browser-apis/detecting-network-conditions?u=76281980&t=1)** - [Instructor] Back when web applications were mainly confined to desktops that had reliable connections to the internet, there wasn't much of a need to detect the Online or Offline state of the app or the quality of the network connection. These days, web apps running on phones and other mobile devices are much more likely to encounter a wide variety of network constraints. And users just expect their apps to deal with these changing conditions in a seamless fashion. There are some important APIs that modern web apps can use to help mitigate these challenges. The first is the Network State API, which indicates whether an app is Online or Offline. And the second is the Network Information API, which provides details about the type and quality of the network connection. So let's open up the network start example. And when I scroll down to the main page. So the code for the main page has a div where we'll display the state of the network. And I have to find a couple of CSS styles that will be applied to the div based on the network state. So the script portion down here, contains the update netState function, which you can see is called when the page loads and we are going to fill out. So first, let's code up the part of the example that detects the Online state of the page. So to do that, we'll use the Online property of the navigator object. So I'll write let isOnline and I'll use the navigator.online property.
>
> **[1:39](https://www.linkedin.com/learning/javascript-modern-browser-apis/detecting-network-conditions?u=76281980&t=99)** And then I'll update the Online status, so I'll write statusElem, which we are retrieving right here. And I'll set the class name of that element equal to, depending on whether isonline is true or not, the onlineState or the offlineState. And I'll, oops! And I'll say innerText is equal to, once again, and we'll just make this Online and Offline. All right, so let's go ahead and run this. And so when the page loads the you can see that the div element is updated with the correct network state. And we also want to know when the state of the connection changes. So to do this, we need to listen for the events that the browser sends, when the Online and Offline state changes. So let's add the code for that and what I'm going to do is add some Eventlisteners. And I'm going to add Eventlistener for the online state and I'll call update net state. And I'll add another case for the offline State. All right, so now when we run the app, I want to bring up the developer tools.
>
> **[3:14](https://www.linkedin.com/learning/javascript-modern-browser-apis/detecting-network-conditions?u=76281980&t=194)** And I'm going to choose the network panel, alright? And in the network panel, you can see I can click the Offline button here. And when I click Online and Offline, this is simulating the network condition changing, right? And you can see the box turns red when we're Offline and it's green when we are Online. All right, so let's go back to the code and add one more feature. In this case we're going to add a feature for detecting the characteristics of the network such as its type and download speed. And your application can use this information to make intelligent decisions about whether it should download certain resources. Now, as of this recording, the network information API is not yet fully implemented in all browsers. But it's easy enough to see if it's there by using feature detection. So to do that, I check for the presence of the connection property on the navigator object and if it's there, we can make use of the information it contains. So first we can check to see what the type of the connection is by checking the effective type field. And this will be a string like 4G or 3G or [[Wi-Fi]] and so on. So I'll add some code for this and I'll get the connection type, which is going to be navigator.connection. And then I will update the status element
>
> **[4:52](https://www.linkedin.com/learning/javascript-modern-browser-apis/detecting-network-conditions?u=76281980&t=292)** to say that the effective type is and that's going to be connType.effectiveType. And we can also check the Downlink speed of the network based upon recent activity that the device has experienced. So we'll add another string that says Downlink speed
>
> **[5:23](https://www.linkedin.com/learning/javascript-modern-browser-apis/detecting-network-conditions?u=76281980&t=323)** and we'll add connType.downlink, whoops! Plus and that's going to be megabytes per second.
>
> **[5:43](https://www.linkedin.com/learning/javascript-modern-browser-apis/detecting-network-conditions?u=76281980&t=343)** And we can also see what the typical round-trip time of a response to the network is. So we'll add another string that says; Estimated round-trip time is and then we'll add in connType.rtt plus and that's going to be in milliseconds. All right, so let's save and let's go back to the browser and let's refresh the page. And you can see that we're online, the Effective type is 4G, Downlink is about 7MB/s and the estimated round-trip time is 250 milliseconds. Now I can play with this a little bit. So if I go into the tools here. I can choose throttling. So for example I can choose to say that this is slow 3G, right? And then when I refresh the page, right? You can see there that the page updated and let me go ahead and make this visible again. And now you can see that the Effective type is 2G and the Downlink speed is 0.4MB/s and the Estimated round-trip time is now 2100 milliseconds. So by using these network API's, you can help prevent users from getting a bad experience if they try to make a navigation where there's no connection
>
> **[7:16](https://www.linkedin.com/learning/javascript-modern-browser-apis/detecting-network-conditions?u=76281980&t=436)** and you can fine tune the experience based upon the network speed. So if you see that the users on a 2G network maybe don't download large images, maybe try accessing a lighter version of your site. You can make intelligent decisions based upon the network that the user is actually experiencing. And don't forget to try these out in the network panel. The developer tools make this a really great easy way to test your your site out under a different network connection.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wi-Fi]] (1)
> **Code Identifiers:** conntype (3), netstate (1), isonline (1), statuselem (1), onlinestate (1)
> **CLI Commands:** make (7), find (1)
> **Env Vars:** api (4), css (1)
> **Cross-References:** go back to (2)
> **Analogies:** such as (1), for example (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is called (1)

#### [Using page visibility](https://www.linkedin.com/learning/javascript-modern-browser-apis/using-page-visibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/javascript-modern-browser-apis/using-page-visibility?u=76281980&t=1)** - [Narrator] Knowing whether a page is currently visible to the user can be of great help when developing web apps that are resource efficient. So for example, you can change the update frequency of retrieving remote data, when you know that the updates won't be seen, or you can choose to automatically pause videos or games when the tab that contains them becomes hidden. The standard way of doing this is with the page visibility API. In the past, developers would sometimes try to achieve this ability using the focus and blur events on the window, but that doesn't tell you when the page is actually not visible, just when the focus changes from one tab to another. So here in my editor, I'm going to open up pagevis_start and we'll try the API out. So if we look down here, we have a div called target element and we're going to update this div element each time the page visibility changes. Now this is not a very complicated API, it basically consists of an event and a property. The visibility state property of a document tells you what the current state of the page is, so let's start by recording the initial visibility state in our div. So when the page loads, we're going to write some code that says that the output div, which we're getting right here, so outputDiv.innerHTML, and we're going to append in the visibility state we're going to' say visibility state
>
> **[1:39](https://www.linkedin.com/learning/javascript-modern-browser-apis/using-page-visibility?u=76281980&t=99)** plus, here let me hide this, document.visibilityState and then we'll close off that paragraph, alright. There's also an older property named hidden which is a brilliant value that indicates whether the page is currently hidden. Now that particular property is considered historical now and has been deprecated and the API docs say that you should use visibility state instead. Alright next let's listen to the visibility change event and update the div content there as well so I'm going to setup an event listener for the visibility change event and then I'll have a call back function which updates the div and I can just simply use this one right here, and that's pretty much all there is to it so let's go ahead and try this out in the browser, and when I bring up the page you can see that the div content starts out with the page being visible so now let's create another tab and when I switch back and forth between the tabs you can see that the visibility is updated each time in the div, so it goes from being visible to hidden and back and forth between being visible and hidden. Now this might seem like a trivial thing to add
>
> **[3:11](https://www.linkedin.com/learning/javascript-modern-browser-apis/using-page-visibility?u=76281980&t=191)** to your app but it's actually one of those ways of adding a touch of polish, and improved experience for your users having a video or game automatically pause when the user looks at another tab or slowing down animations or network requests gives your users a much nicer expereinece and extends the battery life of their devices, the good news of course is that this API is supported broadly in all the major modern browsers including mobile and it's very simple to implement.

> [!info]- Semantic Content
>
> **Env Vars:** api (5)
> **Code Identifiers:** pagevis_start (1), outputdiv (1), innerhtml (1), visibilitystate (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [narrator] (1)

#### [Going full screen with content](https://www.linkedin.com/learning/javascript-modern-browser-apis/going-full-screen-with-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/javascript-modern-browser-apis/going-full-screen-with-content?u=76281980&t=1)** - Modern web apps have a great number of capabilities for creating rich, immersive experiences that wouldn't have been possible even just a few years ago. One of these is the ability to have your apps content fill the user's entire screen. And this of course has obvious benefits for media heavy apps like games or video players, but it's also useful for other kinds of apps. Productivity apps, for example, can maximize the user's workspace, or even an app specialized for something like real estate can show photos of houses at fullscreen size. So let's see the finished example in action. Here in my browser I've opened up the fullscreen finished example file. So there's two buttons to start fullscreen mode and one to exit. So notice that I can have the entire document enter fullscreen, which I can then programmatically exit by pressing this button. Or I can enter fullscreen for just the image and then exit it by using the escape key. Alright so let's open the fullscreen start file in the code editor and get to work on this. So in browsers that implement this API, both the root document and elements on the page have the ability to request fullscreen mode. So let's start with the document. Now as of this recording the fullscreen API is still relatively new, so some browsers still use prefixed APIs such as WebKit and Moz and so on. So what that means, that for now I have to write a wrapper function that does the feature detection
>
> **[1:36](https://www.linkedin.com/learning/javascript-modern-browser-apis/going-full-screen-with-content?u=76281980&t=96)** for the presence of the correct API. So when the user clicks on the enter fullscreen button, which is, let's see, if we look at the event handler here's the enter fullscreen mode for the document and enter screen mode for the image. If I scroll down, you'll see that there are event listeners for those buttons. So here's the doc, here's the image. And they call this function called enter fullscreen, and the exit button calls exit fullscreen. So I need to fill those functions out. And for enter fullscreen, it passes in either the document element or in this case the image for the element that is requesting fullscreen mode. So in my enter fullscreen function, so what I'm going to do is check if the standard API is supported. So if element dot request fullscreen is there,
>
> **[2:38](https://www.linkedin.com/learning/javascript-modern-browser-apis/going-full-screen-with-content?u=76281980&t=158)** then I'm just going to call that element request fullscreen function. Otherwise, we need to use one of the prefixed versions and there's a few of them. So there's one for WebKit, and there's one for Mozilla, which is M-O-Z, and that's request fullscreen, that's a capital s in their case. And then there's one for [[Microsoft]]. And then I'll just simply copy and paste each of these. Alright. And for exiting fullscreen mode, there's a similar standard API called, and it's on the document object. and it's called exit fullscreen. So if that's present then I'm just going to simply call that function. Otherwise, I need to check for the prefixed versions and there's a WebKit one, and in the Moz case it's called M-O-Z, and it's called cancel fullscreen. And then there's the MS version. And then once again I'll just simply copy and paste these. Okay. Alright, so let's try out what we have so far.
>
> **[4:10](https://www.linkedin.com/learning/javascript-modern-browser-apis/going-full-screen-with-content?u=76281980&t=250)** So, I'm going to bring this up in my live server and here's my example, so let's click on enter document fullscreen mode and you can see that that works and I can exit and I can do the same thing with the image and once again I can exit. Alright, so that's how we enter and exit fullscreen mode. In the next example, we'll see how we can use the fullscreen events as well as apply styling to elements when they are in fullscreen mode.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (1)
> **Env Vars:** api (5)
> **UI Navigation:** open the (1), scroll down (1)
> **Analogies:** for example (1), such as (1)
> **Cross-References:** in the next (1)
> **Speakers:** - modern (1)

#### [Using full-screen events and styling](https://www.linkedin.com/learning/javascript-modern-browser-apis/using-full-screen-events-and-styling?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/javascript-modern-browser-apis/using-full-screen-events-and-styling?u=76281980&t=1)** - [Instructor] Alright in the previous example we saw how to enter and exit full screen mode for both the document and an individual element. We're going to pick up where we left off. And try out a couple more things. So here in chapter 6 I'm going to open up my full screen start. And I'm going to scroll down and heres the code we've already entered. Right. So first there are events that your code can listen to. In order to detect entering and exiting from fullscreen. You can see that those event handlers are right here. The standard event name is fullscreen change. But you can see that there are prefixed versions of this API as well. And each of these event handlers call a function that I've written here. That looks at the current fullscreen element and writes it out to the debug console. So I've already filled that function in and we'll take a look at that in a moment. But there's one other thing I want to demonstrate. You could also define CSS styles that are applied when fullscreen mode is active. So to do that you define a style using a fullscreen pseudo class. So lets go back up to the top of the doc. And in my style sheet here I'm going to create a fullscreen style and I'm going to apply it to the buttons in the page. So when the document is in fullscreen mode.
>
> **[1:36](https://www.linkedin.com/learning/javascript-modern-browser-apis/using-full-screen-events-and-styling?u=76281980&t=96)** I'm going to set the background color of the button to be green. And I'm going to set the foreground color to be white. And again because this is a new API there a prefixed versions of this style as well. So I'm going to copy this and I'm going to paste it a couple times. So I'm going to use dash webkit dash fullscreen and then there's one for which is the Moz version. Which is dash moz dash fullscreen. And then there's another one and in this case there's the [[Microsoft]] version which is dash ms dash fullscreen. That's all one [[Microsoft Word|word]]. Then finally an older version of the API which is full dash screen button. Okay. And lets also define a style just for the case when the image element is in fullscreen mode. I'm not going to do every single one of the prefixes. I'm just going to know in advance I'm going to use the webkit one. You're free to try the other on your own. So I'm going to use image, webkit full screen. And when the image is in fullscreen mode
>
> **[3:10](https://www.linkedin.com/learning/javascript-modern-browser-apis/using-full-screen-events-and-styling?u=76281980&t=190)** I'm going to give it a border of a 5 pix solid blue. I'm going to give it a background color of green.
>
> **[3:25](https://www.linkedin.com/learning/javascript-modern-browser-apis/using-full-screen-events-and-styling?u=76281980&t=205)** Okay so now lets take a look at our updated example. So I'll go ahead and open this in the browser. Alright so lets go ahead and open the developer tools.
>
> **[3:42](https://www.linkedin.com/learning/javascript-modern-browser-apis/using-full-screen-events-and-styling?u=76281980&t=222)** And we'll go to the console. Ill go ahead and enter fullscreen mode. You can see here that the fullscreen event fired. Heres the information about that event. Alright. And you can see that the current fullscreen element is the document, its the entire document element. And you can also see that the styling is now being applied to my buttons. Right? So there's the background color of green and the foreground color of white. And you can that when I exit the fullscreen mode that styling goes away. And then the fullscreen event fires again and now there is no fullscreen element. So lets go ahead now just do the image. And now you can see that the image has this background color of green, and heres the 5 pixel blue border. So if you have an application that would benefit from having a fullscreen view. You could easily accomplish that with the modern fullscreen API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** api (4), css (1)
> **UI Navigation:** scroll down (1), open the (1), go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Dynamic images with CSS Paint API](https://www.linkedin.com/learning/javascript-modern-browser-apis/dynamic-images-with-css-paint-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/javascript-modern-browser-apis/dynamic-images-with-css-paint-api?u=76281980&t=1)** - [Instructor] What I'm about to say might surprise you, but there's a very important area of [[Web Development]] that hasn't really seen a whole lot of innovation for [[JavaScript]] programmers, and that's CSS. Now of course, CSS has added a ton of features for designers over the years, and most of those are accessible to developers. But JavaScript coders haven't had access to the underlying CSS engine itself in order to customize how things work. A new effort called CSS Houdini aims to change all of that. And some of the first efforts to bear fruit are showing some real promise and excitement. At the time of this recording, it's still pretty new and under development, and if you go to the [css-houdini.org](https://css-houdini.org) page, you'll be taken to the Houdini homepage here where you can learn more about the features and ideas that are being explored. So I suggest you take a few minutes and look through the ideas and the specs area on the site. And there's also a handy chart of Houdini features at this link, which tracks the progress that's being made in each of the features across the various browsers. The first of these to reach candidate recommendation status and actually ship is the CSS Paint API, which we'll take a look at in this example. Using CSS Paint, you can programmatically create an image anywhere that a CSS property expects an image, such as the background image property. And this opens up a large number of possibilities. So let's go over to the code and try this out. So here in the editor, I'm going to open up
>
> **[1:34](https://www.linkedin.com/learning/javascript-modern-browser-apis/dynamic-images-with-css-paint-api?u=76281980&t=94)** the csspaint_start and csspaint JS file. So what we're going to do in this example is create a JavaScript class that dynamically generates an image for use in a CSS style sheet. And the way that this works is we're going to create something called a paint worklet that will do the drawing. And by the way, this uses the [[HTML]] Canvas API, so if you're not familiar with Canvas, I suggest you go take a look at the Learning HTML Canvas course. Alright, so step number one is to see if paint worklets are supported, and then register our painting module. So here in the HTML file, in the code for the window event listener, I already have some code to check to see if the paintWorklet is in the CSS object. And if it is, I'm going to call a addModule function to add our painting module, and the way I do that is by saying CSS.paintWorklet.addModule, and then I have to provide the name of our JavaScript file that implements the module, and that is going to be csspaint_start.js. Alright, so I'll save that. And otherwise, I'll just log out to the console that paintworklet is not supported here. So here, I've given as the name of the module the csspaint_start.js, so let's fill that out next. So I'll go over to the JavaScript code for the module. So here in this module, I need to see
>
> **[3:05](https://www.linkedin.com/learning/javascript-modern-browser-apis/dynamic-images-with-css-paint-api?u=76281980&t=185)** if the registerPaint function exists, and if it does, then I'm going to create a class that does the actual painting. So my class named SampleCSSPaint has a method named paint that does all the work. So this function will be given a drawing service that is essentially an HTML Canvas object. So this function will be Canvas context, its size, and some properties, and we'll come back to the properties later. For now, I'm just going to have my code draw a blue X as the background image for my element. So using the context, and again, you should check out the Canvas course if you're not familiar with any of this, but for now, just follow along. So I'll give the lineWidth as 3, and I'll give it a strokeStyle of blue,
>
> **[3:58](https://www.linkedin.com/learning/javascript-modern-browser-apis/dynamic-images-with-css-paint-api?u=76281980&t=238)** and I'm going to draw my path, so I'm going to begin my path, and that has to be counterbalanced by a stroke. And then, inside the, whoops. And then inside that, I'm going to move the pen
>
> **[4:22](https://www.linkedin.com/learning/javascript-modern-browser-apis/dynamic-images-with-css-paint-api?u=76281980&t=262)** to the top of the box, and then draw a line. And I'm going to draw a line to the size.width and size.height. Alright, so that's line number one. And then I'll just copy this and modify it. So now, I'm going to moveTo size.width, and I'm going to lineTo 0 and size.height. Okay, then, I have to call my registerPaint function to register my painting class with the browser's CSS engine, so I'll call registerPaint, and I'm going to call it samplepainter, that's I'm going to use inside the CSS, and then I just give it my class name, SampleCSSPaint. Alright, so back in the HTML, let's add the paint function to the style that's applied to my div element. So here in the code, I have this target div, okay, and then what I'm going to do is modify the CSS style that's applied to that box. So the first thing I'm going to do is add a background image, so I'll say background-image, and now instead of specifying a background image, I'm going to use the paint function,
>
> **[5:55](https://www.linkedin.com/learning/javascript-modern-browser-apis/dynamic-images-with-css-paint-api?u=76281980&t=355)** and I'm going to use samplepainter as the background. Alright so now, I'm at a point where I can run this, so let's bring this up in the browser. And for the moment, this only works in Chrome, but it should work in other browsers soon. So let's go ahead and open this with our live server, and you can see that my blue X's are being drawn programmatically in the background of the box. But here's the thing, I don't really want to hard code these values, right? I don't want to hard code the line width and the color. It would be better if I could specify the line thickness and the color in the style sheet. So in the next part of the example, we're going to add that ability.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (5), [[HTML]] (5), [[Web Development]] (1)
> **Env Vars:** css (13), html (5), api (2)
> **Code Identifiers:** csspaint_start (3), registerpaint (3), paintworklet (2), addmodule (2), linewidth (1)
> **File Paths:** csspaint_start.js (2)
> **URLs:** [css-houdini.org](https://css-houdini.org) (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Analogies:** such as (1)

#### [Parameters with CSS Paint API](https://www.linkedin.com/learning/javascript-modern-browser-apis/parameters-with-css-paint-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/javascript-modern-browser-apis/parameters-with-css-paint-api?u=76281980&t=1)** - [Instructor] Okay, let's pick up where we left off on our last example by adding the ability to customize the image that gets drawn by using CSS custom properties. So, here in my editor, I'm going to open up the CSS start [[HTML]] and CSS paint start JS files, and you can see this is where we left off. So, what I need to do first is define two custom properties in my style sheet that are going to represent the thickness and color of the lines. So, I'm going to use dash dash cross thickness, and I'll give that a value of two, and then I'll define cross color, which will be red. Then in my painter class definition, I have to define a static method that declares what properties my class uses. So, I'll write a static getter, and it's called input properties. This method is going to return an array that identifies the name of the properties that I want to access from CSS. So, the first one is dash dash cross thickness, and the second one is, dash dash cross color. Then, I just need to retrieve those values in my paint function, and here's where this props argument comes in. So, what I'm going to do is write that width equals props dot get,
>
> **[1:38](https://www.linkedin.com/learning/javascript-modern-browser-apis/parameters-with-css-paint-api?u=76281980&t=98)** and I'm going to write dash dash cross thickness, and then I'm going to write let color equal props dot get, and in this case, I'm going to use the cross-color property, and in the case of the color, I have to write to string. So, the way that these properties are specified, along with units and all that, that's still in the process of being specified. For the most part, you can assume that they're going to be strings, and I'm not going to get too deeply into how the CSS typed object model works just yet because that's another Houdini spec that's still being written, but for the moment, you can get these properties just using this getter function right here. So now that I've got my width and color, I can parametrize that and set my local variables to be width and color. Okay, so now I have the ability to specify values in the style sheet, so let's go ahead and back to the browser, and I'm going to open this file in my live server, and now you can see that the colors are red, and the thickness is still two, but now because I've got these properties, let's go ahead and open the developer tools, and go to the elements panel, and then here in the style sheet, what I can do is select this element, and you can see now that I've got my properties here
>
> **[3:11](https://www.linkedin.com/learning/javascript-modern-browser-apis/parameters-with-css-paint-api?u=76281980&t=191)** in the inspector, so I can just modify these on the fly. So, I can change this to five, and you can see the thickness changes. I can make this purple, oops, let me, hang on a second, double click that, there we go. I'll change that to purple, and you can see the color is changing. So, I can use the built in browser tools to change the values in the style sheet, and you can see that my [[JavaScript]] class is picking up those values and using them on the fly. So, this is a really exciting new area for developers, and I encourage you to check out and follow the Houdini project as it progresses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1), [[JavaScript]] (1)
> **Env Vars:** css (5)
> **UI Navigation:** open the (1), go to (1)
> **CLI Commands:** make (1)
> **Documentation:** spec (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/javascript-modern-browser-apis/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/javascript-modern-browser-apis/next-steps?u=76281980&t=1)** - [Instructor] Well congratulations on finishing the course. I hope you enjoyed learning about the modern features available to [[JavaScript]] developers in today's modern browsers. And that hopefully you're inspired to try some of these APIs out in your projects. Of course, there's a lot more to building great modern web apps than just using APIs, and I have a few suggestions on where you might want to go next. If you want to learn more about building modern, progressive web apps, then there are a couple of courses to consider watching: Building a Progressive Web App and [[Vanilla]] [[JavaScript- Service Workers]]. Each of which cover important topics that are key to building great progressive web apps. Of course, a web app can't be considered great unless it also has great performance, so I'd also suggest watching Learning Enterprise Web Application Performance which discusses the tools and techniques you need to know to get the best performance from your apps. Finally, if you liked what you saw in Using Visual Studio Code and want to learn more about it, then I suggest watching Visual Studio Code for Web Developers. And of course, remember to stay on top of new developments by checking out the emerging [[Web Standards]] at the W3C and WHATWG working groups. I hope to see you again in another one of my courses soon. Until then, happy coding!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2), [[Vanilla]] (1), [[Web Standards]] (1)
> **Env Vars:** w3c (1), whatwg (1)
> **Tools:** visual studio (2)
> **Documentation:** w3c (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Joe Marini]]

## Resources

- Exercise files available

## Skills Covered

- JavaScript
- Application Programming Interfaces (API)

## Path Context

### In [[Explore a Career in Front-End Web Development]]
← [[React.js- Building an Interface]] | **10 of 11** | [[jQuery Essential Training]] →

### In [[Explore Web Development with Vanilla JavaScript]]
← [[Learning Functional Programming with JavaScript ES6+]] | **3 of 8** | [[JSON Essential Training]] →

### In [[Become a JavaScript Developer]]
← [[JavaScript- Ajax and Fetch]] | **13 of 13**

### In [[Advance Your JavaScript Skills]]
← [[End-to-End JavaScript Testing with Cypress.io]] | **10 of 10**

## Appears In

- [[Explore a Career in Front-End Web Development]]
- [[Explore Web Development with Vanilla JavaScript]]
- [[Become a JavaScript Developer]]
- [[Advance Your JavaScript Skills]]

## Related Courses

_Courses sharing skills:_

- [[End-to-End JavaScript Testing with Cypress.io]] — JavaScript
- [[Learning JavaScript Debugging]] — JavaScript
- [[Foundational JavaScript Security]] — JavaScript
- [[JavaScript- Test-Driven Development (ES6)]] — JavaScript
- [[JavaScript- Best Practices for Data]] — JavaScript

---

[↑ Back to top](#)