---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: vanilla-javascript-web-performance-optimization-apis
url: "https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis"
duration_minutes: 103
duration: 1h 43m
level: Advanced
updated: 10/30/2018
learners: 5568
skills:
  - JavaScript
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQFfzyF5w7z1jg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567118421027?e=2147483647&amp;v=beta&amp;t=hCs3GbtwGtigkt-MH50rhR3mVPxC0VbeF3Khe3ekAb0"
linkedin_topic: Software Development
learning_paths:
  - '[[Explore Web Development with Vanilla JavaScript]]'
prev_courses:
  - '[[JavaScript- Service Workers]]'
next_courses:
  - '[[Vanilla JavaScript- Building on the Document Object Model (DOM)]]'
path_nav: '[{"path":"Explore Web Development with Vanilla JavaScript","position":7,"total":8,"prev":"JavaScript- Service Workers","next":"Vanilla JavaScript- Building on the Document Object Model (DOM)"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - topic/web-development
  - skill/javascript
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Vanilla%20JavaScript-%20Web%20Performance%20Optimization%20APIs.md)

![Vanilla JavaScript: Web Performance Optimization APIs](https://media.licdn.com/dms/image/v2/C4E0DAQFfzyF5w7z1jg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567118421027?e=2147483647&amp;v=beta&amp;t=hCs3GbtwGtigkt-MH50rhR3mVPxC0VbeF3Khe3ekAb0)

# Vanilla JavaScript: Web Performance Optimization APIs

> With the Performance APIs built into modern browsers, you can measure the performance of your websites and applications and make "live" changes to the content, page navigation, and more. This allows you to create a faster and better experience for all your users: for the desktop user on high-speed Wi-Fi or the mobile user with a weak signal. This course shows how to collect real metrics from real 

> [LinkedIn Learning](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis) | 1h 43m | Advanced | 6K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Optimize APIs with JavaScript](#optimize-apis-with-javascript)
  - [What you should know](#what-you-should-know)
- [**1. Reactive Web Performance**](#1-reactive-web-performance) (5 videos)
  - [The need for web performance APIs](#the-need-for-web-performance-apis)
  - [Summary of what we can do](#summary-of-what-we-can-do)
  - [Real user monitoring (RUM) and reactive web performance](#real-user-monitoring-rum-and-reactive-web-performance)
  - [Measure time](#measure-time)
  - [High-resolution timings](#high-resolution-timings)
- [**2. Performance Basics**](#2-performance-basics) (5 videos)
  - [Navigation Timing Level 1](#navigation-timing-level-1)
  - [Understand timings available](#understand-timings-available)
  - [Calculate milestones in the timeline](#calculate-milestones-in-the-timeline)
  - [The Performance Timeline interface](#the-performance-timeline-interface)
  - [Navigation Timing Level 2](#navigation-timing-level-2)
- [**3. Measure Performance**](#3-measure-performance) (8 videos)
  - [Measuring our websites](#measuring-our-websites)
  - [Add the Navigation Timing API](#add-the-navigation-timing-api)
  - [Use the Resource Timing API](#use-the-resource-timing-api)
  - [Create custom user timing](#create-custom-user-timing)
  - [Get paint timing](#get-paint-timing)
  - [Detect long tasks](#detect-long-tasks)
  - [Detect frame rate drops](#detect-frame-rate-drops)
  - [Add server timing information](#add-server-timing-information)
- [**4. Decision-Making Helpers**](#4-decision-making-helpers) (4 videos)
  - [Read network information](#read-network-information)
  - [Read device memory](#read-device-memory)
  - [Save data for your users](#save-data-for-your-users)
  - [Receive client hints on the server](#receive-client-hints-on-the-server)
- [**5. Execute Code More Efficiently**](#5-execute-code-more-efficiently) (5 videos)
  - [Send low-priority requests with beacons](#send-low-priority-requests-with-beacons)
  - [Understand frame rate execution](#understand-frame-rate-execution)
  - [Execute animation control code](#execute-animation-control-code)
  - [Execute background tasks](#execute-background-tasks)
  - [Efficient script yielding](#efficient-script-yielding)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Optimize APIs with JavaScript](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/optimize-apis-with-javascript?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/optimize-apis-with-javascript?u=76281980&t=0)** - [Instructor] Hello, my name is Maximiliano Firtman and I will be your instructor in this course on [[Vanilla]] [[JavaScript]] Web Performance APIs. I've been working with web performance for more than 10 years, and I'm happy to be here sharing with you my experience on getting metrics, real user metrics, from real devices on real networks, and make some decisions to improve the [[User Experience (UX)|user experience]]. Without any framework, we will be applying these APIs on a real website. We are going to get information, and we are going to see everything that we can do to improve and keep a consistent experience across different context. Not matter if the user is on a desktop computer on a [[Wi-Fi|wifi]] connection, or if the user is on a very cheap [[Android]] device on a bad 2G connection. We will try to keep the experience consistent using reactive web performance techniques, and we will also see how to execute code efficiently, understanding the browsers, frame management and the new APIs available for us. I hope to see you in this course so we can make, together, the web faster and better for our users.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vanilla]] (1), [[JavaScript]] (1), [[User Experience (UX)|User experience]] (1), [[Wi-Fi|Wifi]] (1), [[Android]] (1)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)

#### [What you should know](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/what-you-should-know?u=76281980&t=0)** - [Instructor] To participate in this course, you only need to know basics of [[HTML]], CSS and [[JavaScript]], and how the browser works. Such as understanding what that HTTP request is, and what the HTTP response is. We maybe writing JavaScript code, so you need to be comfortable with ES6. Such as, for example, arrow functions. For the pressure pad we are going to use a web server and a text editor. In my case I will use Note JS and Bushido Studio code. But any web server and any text editor that you like will be good enough. So let's start working with web performance APIs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2), [[HTML]] (1)
> **Env Vars:** http (2), html (1), css (1), es6 (1)
> **Analogies:** such as (2), for example (1)
> **Speakers:** - [instructor] (1)


### 1. Reactive Web Performance

[↑ Back to Table of Contents](#table-of-contents)

#### [The need for web performance APIs](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-need-for-web-performance-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-need-for-web-performance-apis?u=76281980&t=0)** - [Instructor] Web performance optimization is a set of practices to improve perception of how fast the website, or the app, is being loaded. Increasing perception will increase conversion, so it will make more money for the company, it will make more visitors, more page views, or whatever conversion means for that particular site. In the last few years, new user-centric metrics and new goals have appeared, that now, we need to achieve. For example, we have first meaningful paint that the current goal is from one to three seconds, meaning that we should show something meaningful to the user within the first three seconds. Then, we have first interactive, that is typically two to four seconds. That means, we don't want to see something only. We want that something to work, to actually work, and for that, it should be interactive. Sometimes you see a page on the screen, but it's not working, you try to click, you try to scroll, and nothing happens. So, that's because first interactive didn't happen yet. So, typically, when we are doing web performance, we are developing the app, we measure performance, and then we say, oh, let's apply some techniques here, and then we develop that, measure, apply techniques, and so on, that's basically how, typically, web performance works. At one point, we say, okay, we are ready to deploy. We deploy, and we go to the user. So then, the user will get that optimized website. So, what's the problem, then, with this?
>
> **[1:37](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-need-for-web-performance-apis?u=76281980&t=97)** We are thinking that web performance is something static, that after we have applied techniques, we are done. The problem is that the real web performance out there is based on users' contexts. For example, the user may be on an iPhone X on a [[Wi-Fi]] connection, or it can be a laptop using 3G, there are laptops with cellular connections. We can be a Moto G, an [[Android]] device, 4th generation, so let's say two to three years old, and it's currently on a bad LTE connection, so it's a 4G, but it's not working properly with that connection, because the user can be on a bath. It can be a [[Google]] Pixel 3, so a very modern Android device, but it's on roaming, and it's on 2G, or it can be an Android Go, so, low CPU, low memory, but on 4G. So, different contexts, and we still need to achieve all our goals, but it's not possible within a static analysis to get and achieve the same goals on every context. So, we need something different. We need to think about an approach that after we have deployed the website, we can measure directly on user devices, and make some decisions there, and change the experience. Most of those measurements can change how we apply techniques later, statically, for a future version. So, we need real user metrics, and for that, we're going to use client side [[JavaScript]] APIs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (3), [[Wi-Fi]] (1), [[Google]] (1), [[JavaScript]] (1)
> **CLI Commands:** make (3)
> **Env Vars:** lte (1), cpu (1)
> **Analogies:** for example (2)
> **Code Identifiers:** iphone (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)

#### [Summary of what we can do](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/summary-of-what-we-can-do?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/summary-of-what-we-can-do?u=76281980&t=0)** - [Instructor] Let's see what we can do with client-side web performance APIs. First, we are going to cover a lot of APIs available in the browser. The information that we can get from those APIs sometimes can also be shared with our server. It can be shared automatically with a flag that we set somewhere in the browser, or it can be shared manually, such as sending that data using a [[Fetch]] request or adding that data to HTTP headers manually on each fetch or using a service worker. As most of the APIs in the browser, compatibility is not the same on every version of every browser. So sometimes, we need to have fall backs to polyfills, other solutions, or even the stats. So if there is no way to gather some information from that user, at least we can get average stats from other user. Typically, today, we can measure all the timings for the current navigation. That means DNS, TCP connection, SSL, timings for HTTP request, and HTTP response for the main navigation documents through the [[HTML]] and also for each of the resources that we are currently using. So for example, in that case, we can see, we are loading resources from different CDNs which one is faster. Also, we can verify if the connection to our server is currently slow or having high latency. We can also check the type of connection
>
> **[1:35](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/summary-of-what-we-can-do?u=76281980&t=95)** that the device's operating system is exposing to our website. For example, if it's a cellular connection, we can know if it's 2G, 3G, or 4G. Also, we can get an estimated current bandwidth, download bandwidth, and also the latency, or round-trip time. The latency on cellular networks is even more important than the bandwidth because that latency is time that will be there no matter how big the file you're downloading is. And on cellular connections, latency, even in 4G, are 10 to 50 times bigger than when you are using at desktop connection. We can also get information about current device's memory, not just the available memory, but more important, the total memory of the device. With that information, we can guess which kind of device the user is actually using. For example, if it's a cheap [[Android]] phone or a high-end Android phone, if it's a tablet or desktop. We can also measure our own custom metrics so we can achieve our own goals. For example, if you have a website where the user is adding items to a shopping cart, we can measure the time to get an item into that shopping cart. That's a custom metric. Also, we can measure paint timings. For example, first paint or first meaningful paint so we can know exactly the time that has passed
>
> **[3:09](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/summary-of-what-we-can-do?u=76281980&t=189)** since the user has typed the URL, and the user has seen something meaningful on the screen. And finally, we can also detect on the fly CPU-intense operations, such as for that particular user and that particular CPU, that function that we have in our code is taking too much time. So we know it's a low CPU problem, and then, we can make a change on the fly to improve that user's experience.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (2), [[Android]] (2), [[HTML]] (1)
> **Env Vars:** http (3), cpu (3), dns (1), tcp (1), ssl (1)
> **Analogies:** for example (5), such as (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Real user monitoring (RUM) and reactive web performance](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=0)** - [Instructor] When we are working statically in our development environment to improve performance, we don't know exactly how well our users are accessing the website. So our measurements are not real. So that's why we can use real user monitoring solution, or RUM, that will basically gather information clients side from the browser to understand the current metrics of our user. We can make analytics on that data. We can improve the experience of every user based on that data. And also we can prove and create that stats on our servers and local testing environments to create conditions for [[Simulation]] that are closer to real ones. And after, we gather some data, we can start applying some reactive web performance techniques. In this case, the idea of reactive web performance is to be closer to our user centric goals on every situation, no matter what. So if we want to show the user meaningful content in three seconds, we need to do that if the user is on desktop with a [[Wi-Fi|Wifi]] connection, if the user is on Galaxy S9, on 4G, and also if the user is on an IPhone SE over a bad 3G connection. So we need to change the idea that we sometimes have
>
> **[1:35](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=95)** as web developers, oh it's not my fault. On my IPhone or [[Android]], I'm in a big city, it's fast. So I can't help the user if the user has an old Android device or if the user is in 2G. We need to change that mind. We need to think that the context is always changing. So we need to change our mind from it's not my fault to let's do something about it. Because I'm responsible for the [[User Experience (UX)|user experience]] on my website. So reactive web performance is a set of on the fly optimizations that we apply to keep a consistent user experience based on real user metrics. So it's similar to the Netflix experience. So if you're a Netflix user, when you're watching a TV show or a movie it's really difficult to see a buffering spinner, like an animation. Typically when the connection changes Netflix is changing the quality of the content on the fly. So we are going from a 4K streaming to an HD streaming or even to a lower resolution streaming if the connection is not working properly. But the movie never stops. To make it work, we are going to read current context with the APIs that we will cover during the [[Representational State Transfer (REST)|rest]] of the course. And then also listen to changes because we know the user is on the move and the connection status might change. And then we can make decisions to keep the user experience
>
> **[3:08](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=188)** consistent and fast, while upholding high quality if the context allows it. So we can have a low resolution versus high resolution. Not just two versions, we can have several versions. We can inform the user of the situation. For example, if we are in the low condition we can specify with a little bar or something like we are in a low resolution version. And let the user change it. Low resolution doesn't mean less powerful. Be careful here. So if it's a newspaper, I want to read the latest news. No matter what. So don't remove the news, just for example, send less amount of data or less resolution for the images. Something that you can do is change how your providing web fonts. Deliver low resolution images no matter the current device pixel radio. So even if it's a 4K device but we know it's in 2G we're not going to send a 4K image. So we can serve low quality videos as well. We can not use HTTP/2 push to reduce bandwidth usage. We can change how the service workers' cache policy working. So we can prefer cached resources and reduce the updates when possible, so in that case we would go less to the network and increase the performance. We can omit images that are not really data or important. We can stop pre fetching files,
>
> **[4:41](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=281)** because we don't want to waste the bandwidth. And we can use a reduced amount of data that we load per page, because we want to show information as soon as possible. So let's reduce the amount of data that we load initially.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[User Experience (UX)|User experience]] (3), [[Android]] (2), [[Simulation]] (1), [[Wi-Fi|Wifi]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (3)
> **Analogies:** for example (2), similar to (1)
> **Env Vars:** rum (1), http (1)
> **Definitions:** is a  (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### [Measure time](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measure-time?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measure-time?u=76281980&t=0)** - [Instructor] When we are working with time in [[JavaScript]], typically we get the metrics with a timestamp. For example, if we execute new Date ().getTime, we will get a timestamp. That timestamp is expressed in a Unix format, also known as epoch. But in this case, JavaScript, instead of using the standard Unix format that is expressed in seconds, it's using milliseconds. So, it's basically the amount of milliseconds that have happened since January the 1st, 1970, at 00:00:00 UTC. Probably you are thinking, what? So if you have ever played with times in any language, probably you are used to these timestamps, or even [[Databases]], but it's a number that looks like this. In this case, this particular number can be converted into, let's say, human readable dates in our Gregorian dates, and in that case, in this case, that number is October 21st, 2015 at 7:28. So the problem is that why is this important? Because yeah, we can convert a timestamp into real date, but the importance is not really the number, but how we can calculate distances between two timestamps. So, if we have two timestamps, so we measure. We do something. We measure again.
>
> **[1:32](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measure-time?u=76281980&t=92)** We can subtract both values and get, in milliseconds, the time that has happened between both events. So for example, if we have two events, and these are two timestamps, that will give us 190,000 milliseconds, which is 3.16 minutes. So, maybe you are wondering that if you want to measure time of a process that we have, some code that we have, we can be doing something like this. And I've been doing this like during the '90s. When I started doing [[Web Development]], I was measuring time with this. The problem with this is that taking the calendar and creating a date will take time. So we have the problem of the observer. We are trying to measure something observing that something, and we are changing the observation. So while for some processes this is okay, this is not good today. So fortunately, modern browsers have a new API that is known as performance timing that we will get to later, that will let us use performance.now. So performance, it's a global option available in these browsers, and they have a now property that in this case is not changing the observation. So it's a low-level API. So, we call performance.now, we save that as timing one. We do some process. We execute some synchronous code, and after that, we take another measurement with the same performance.now,
>
> **[3:05](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measure-time?u=76281980&t=185)** and we calculate the difference. But in this case, performance.now is not getting the milliseconds since 1970. It's using zero as the moment in which a browser started the navigation to that page. It's a relative time from when the user started the navigation, roughly. On some browsers, we can check the timestamp of that zero moment with performance.timeOrigin. And on other browsers, older browsers, we can use performance.timing.navigationStart, if we want to know the zero of performance.now. So, basically, on a timeline where we have time, zero is January 1st, 1970. And then we have when the navigation started, the exact moment might change per browser. So we can get the difference with performance.timeOrigin, and then when we are doing performance.now, at any time that we want to measure something, it will be the distance from the zero at the top, so that's a new zero that we have, and that exact moment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2), [[Databases]] (1), [[Web Development]] (1)
> **Code Identifiers:** timeorigin (2), gettime (1), navigationstart (1)
> **Ports:** :00 (2), :28 (1)
> **Env Vars:** api (2), utc (1)
> **Definitions:** known as (2)
> **Analogies:** for example (2)
> **Versions:** 3.16 (1)
> **Speakers:** - [instructor] (1)

#### [High-resolution timings](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/high-resolution-timings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/high-resolution-timings?u=76281980&t=0)** - [Instructor] When we are measuring performance in an web app or web site, sometimes having the resolution in milliseconds is not enough, because sometimes we have processes that are faster than one millisecond. So in [[JavaScript]], the time that we are getting from these APIs, it's a number. So that's always a float value. But on most browsers, a few years ago we were always receiving an integer. So the W3C created a new spec to increase granularity on these performance APIs. It's known as High Resolution Time Stamps, and it's creating a new interface, a new data type for JavaScript known as DOMHighResTimeStamp. When you see a performance API returning a DOMHighResTimeStamp, now you know that's it's a high accuracy number. In this case, this API is increasing the accuracy of the unit to a thousandth of a millisecond, which is known as a microsecond. Typically browsers are exposing that granularity with a precision of five microseconds. So sometimes when you're getting a measurement, you will get the float value, so an integer value and also a fractional value. In this case, if we have this number, like 4523 .89, that means it's four seconds,
>
> **[1:34](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/high-resolution-timings?u=76281980&t=94)** 523 milliseconds, 890 microseconds. Maybe you have heard about Spectre and Meltdown. These are two security problems on modern CPUs, such as on the Intel CPUs. But it's also affecting mobile devices and tablets. So this problem is also affecting the web. There is also a vulnerability on the web known as a spy in the sandbox, which can let a hacker spy private data if they have access to high accuracy timers. That's exactly what we are discussing now. So that's why after these vulnerabilities appeared in the community, are changing how they are offering us these high accuracy information. So most browsers in latest versions have rounded the microseconds accuracy to different levels. Sometimes they're adding random noise, sometimes they are just changing the accuracy of the data that we are getting to reduce the impact of these vulnerabilities.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2)
> **Definitions:** known as (4)
> **Env Vars:** api (2), w3c (1)
> **Documentation:** w3c (1), spec (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 2. Performance Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [Navigation Timing Level 1](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-1?u=76281980&t=0)** - [Instructor] The first client side API that appeared on the web regarding web performance is Navigation Timing API. This API is currently available on every browser including IE so Internet Explorer. It's basically creating a global object with the name performance available in the window so that's inside normal [[Java]] script context and it's also available in web workers. The API is also the base for all the [[Representational State Transfer (REST)|rest]] of measurement specs available. So the interface that this API is offering to us will also be useful for other performance APIs. The Navigation Timing API includes three basic functionalities the performance.now measurement system that we have already seen before. Getting information about the current navigation type and also the most important part to get timings for the current navigation. So let's start with the first two. We have already seen that we can call performace.now at any time and in that case we will get a timestamp from what is known as the timeOrigin. You can call and ask about the timeOrigin that is available on some browsers with performance.timeOrgin remember it's the amount of milliseconds and on some browsers it will also give you some microseconds precision based on the browser version. There are two versions of the API level one and level two.
>
> **[1:36](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-1?u=76281980&t=96)** Level one is the version that is available on every browser and level two is the starting to appear in all the browser but is not yet on everyone. So let's first talk about level one. On level one for example we can get the amount of redirects that the user had to have in that particular navigation using performance.navigation.redirectCount. So for example if you went to [Facebook.com](https://Facebook.com) from a mobile device and [Facebook.com](https://Facebook.com) redirected to m.[facebook.com](https://facebook.com) because you're on mobile browser in that case performance navigation rediectCount will give you one. Because there was one redirect to get to that point. Also we have available performance navigation type. The value can be one of the following options type navigate and that means that it's a normal navigation. So the user has typed the URL, the user has clicked on a link so the browser rendered that page. It can be a reload navigation so that means the user has pressed reload so you can detect that using performance navigation type or it can be type back forward. In that case it means that the user is on that page because of she has used the history of the browser pressing the back button or the forward button.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Facebook]] (3), [[Java]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** api (7), url (1)
> **Code Identifiers:** timeorigin (2), timeorgin (1), redirectcount (1), rediectcount (1)
> **URLs:** [facebook.com](https://facebook.com) (3)
> **Definitions:** means that (2), known as (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### [Understand timings available](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=0)** - [Instructor] With a navigation timing API, we can also get a list of timings. And on Level One, we get those timings through performance.timings. That will give us object with a lot of properties inside with timestamps. These timestamps will be from January 1970. So it looks like this. So you can go now and open any website, open the console, and type performance.timing, and you will see an object that will have a lot of big numbers, like in this case, those are timestamps, using Unix timestamp in milliseconds. Let's see each timing one-by-one. When you start the navigation, I mean, you are going to a URL, the browser first fires a navigationStart. NavigationStart doesn't mean yet the network. In this case, it's doing some kind of preparations. Preparations might be involved, for example, AppCache, that's a deprecated offline solution and also unloading previous pages or process a redirect. In that case, you will see that, also, there are a couple of optional timings where you're going to see some information such as unloadEventStart, unloadEventEnd, redirectStart, and redirectEnd. After that's done, now the browser is ready to start the actual [[Fetch]] for the new page that you want to visit. In that case, fetchStart is fired,
>
> **[1:37](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=97)** so we will get the timing for fetchStart at that point. After that, typically, we need a DNS query. So in that case, we can get two timings through the performance timings collection, that's domainLookupStart and domainLookupEnd. After DNS, we have TCP connection because now we have the IP address of the server, so we need to start the TCP connection, so there is a connectStart, but of course, will have its own connectEnd. After opening the TCP on modern [[Web Development]], the next step is typically go into HTTPs. So, there is a need for a negotiation on SSL. In that case, we have a secureConnectionStart, and for [[Privacy]] reasons, we won't get information about secure connection and only the start. After the handshaking of SSL, the clients or the browser is ready to send an HTTP request. So here, a new timing appears known as requestStart. The server will receive that request and will do something server-side. In this case, because it's in the server, we can't see what's going on, so the next step from the client point of view is to actually see the response, which means the first byte from the server has appeared in the client. Remember all these timings are just timestamps of numbers
>
> **[3:13](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=193)** that we can use navigation timing API. First the HTTP response, that's typically the [[HTML]] because we are loading a document. ResponseEnd will mean that the browser has all the HTML in memory. So it's time for the HTML parsing. In this process, also the browser might be executing or downloading and executing blocking a script. So if you have a [[JavaScript]] code in the middle of the HTML, and it's not the defer or async, then that execution will be part of this HTML parsing phase. So downloading expire, and when it's done, we have domInteractive. So domInteractive means that the DOM is ready, but the next step is to download and parse blocking CSS files, so the necessary CSS files surrendering the content. Also, in some browsers, after domInteractive, there may be also some JavaScript that needs to be executed and blocking the rendering. After the CSS and the JavaScript was already parsed, we have the well-known domContentLoadedEvent. But in this case, we have two timings that we can listen to, domContentLoadedEventStart and domContentLoadedEventCompleted. In the middle, we have our own document add event listener domContentLoaded. So we can create our own script. So in this case, we can measure the time of our own domContentLoaded script.
>
> **[4:48](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=288)** And finally, after that, the browser might be downloading images and other resources, and after everything was downloaded, parsed, and rendered, we have finally domComplete, that the final timing. And after that, we have the JavaScript on loadEvent. So we have loadEventStart and loadEventEnd. So if we are handling the onload event, here, we can measure the time that we have there. So these are all the timings available. The next step is to try to get some useful information from these timings.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (5), [[JavaScript]] (4), [[Fetch]] (1), [[Web Development]] (1), [[Privacy]] (1)
> **Code Identifiers:** dominteractive (3), fetchstart (2), domcontentloaded (2), navigationstart (1), unloadeventstart (1)
> **Env Vars:** html (5), tcp (3), css (3), api (2), dns (2)
> **Definitions:** is a  (2), known as (1), means that (1)
> **Analogies:** for example (1), such as (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)

#### [Calculate milestones in the timeline](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/calculate-milestones-in-the-timeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/calculate-milestones-in-the-timeline?u=76281980&t=0)** - [Instructor] We have already seen that in the navigation time in API we have a lot of performance entries or timings available. While we can get information from each timing alone, it's important to try to analyze the information not just one by one but making some calculations between this navigation matrix. For example if you want to know the time cue first byte so that is from when the request started to when the first byte came to the client. We can take responseStart and fetchStart if we calculate the difference between both matrix we will know exactly the time that was necessary to receive the first byte. There you will have DNS query times, you will have TCP latencies, SSL latency and your server time. So when you have an infrastructure issue you might see that time to first byte is really big. Typically we are looking for a time a time to first byte of around 600 milliseconds on an average connection. Then we have the download part. So here we are going to see the bandwidth of the user. If we take response to start and response end we can know and calculate based on the size of the file we can calculate the speed of downloading that file over the downstream.
>
> **[1:36](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/calculate-milestones-in-the-timeline?u=76281980&t=96)** Other useful information that we can get is the domLoad time and that is taking the domInteractive and calculating the difference with fetchStart after the [[HTML]] is from the client we have parsing and rendering times and that is a web designers responsibility or web developers responsibility. So if you want to know all the timings that have to do with the design phase for the rendering you need to calculate the difference between downloading and load event end. And finally the total page load time is going to be domComplete minus fetchStart. Of course you can make any combination here and take any value and calculate the difference with other value and for example then make a decision about that. To see if the connection is good enough or not or you can also create analytics save the data on your server so then get some conclusions about your real user metrics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **Code Identifiers:** fetchstart (3), responsestart (1), domload (1), dominteractive (1), domcomplete (1)
> **Env Vars:** api (1), dns (1), tcp (1), ssl (1), html (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [The Performance Timeline interface](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=0)** - [Instructor] All the APIs available in the browser for web performance are under the umbrella of the Web Performance Working Group. This is a working group in the w3c that currently maintains different specs for web performance. On the screen now, we are seeing some of the APIs available today for web performance. Most of the APIs that we will cover in the [[Representational State Transfer (REST)|rest]] of the videos. And we can see that all of them are going to use the high-resolution time spec that we already covered, on something known as the performance timeline. So, the performance timeline, it's a generic interface that we're going to use for all the API, including the navigation timing API version two. So we also have resource timing, user timing, server timing and frame timing. So, it's important that you understand first that generic performance timeline interface that later we will see for all the API. So that interface, its also working over the performance property that we have already seen in the window object and also in worker's contexts. But the difference with the original navigation timing API, is that we're not going to get objects with timings, we're going to ask collections about their entries. Each entry is an object with a lot of metrics inside, or a lot of timings inside. We can query entries using filters with a get entries method or we can get entries by name or by type.
>
> **[1:38](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=98)** A name, for example, can be the URL of an image that we are loading. That's the name. And then inside the type, we can use resource because it's an image resource. We can also entries by time, for example I want to see all the entries, all the available metrics. For example for, paint. The available times are based on the APIs that the browser is supporting. For example, using the navigation timing API level 2, we have the types navigation and frame. Resource timing is giving us the resource type. User timing mark and measure, and also we have the paint timing API using the type paint. The types are just streams, using one of these values. In the future, if more API for performance are available, there will be new types. So for getting entries is pretty simple, you just execute performance, get entries by type, for example we can also search by name. And then say I want to see all the navigation entries. And that will give you always, an array. Even if its one element, it will be an array, of one element. And inside each element, we will have performance entry properties. Each property will have a name, the entry type, the startTime, that's the timing, and the duration. Duration, it depends, duration might not be available,
>
> **[3:12](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=192)** in every entry, because it will give you information about that particular entry, and not every entry will have a start and an end. Some entries are just mystone in the timeline. And some entries are phases, when an entry is a phase, we will have information for duration. We will know based on the type or on the name, if we should look in to startTime or duration, getEntries methods should be called after the events actually happened. For example, you cannot read domcomplete timings before that actually happen. So that's why there is a new version of the performance timeline spec. So that's level two, but it's currently available on some browser. And that version of the performance timeline API, will let us create observers. The observers will be executed every time, there is new data in one particular entry type. So a new measurement has been recorded. So, this is really useful for prepare all measurement code, all our logic, beforehand. Before the events actually happen, we set up what do we want to do, when that event is recorded in the performance timeline. API is pretty simple, which has created a new performance observer. That observer will receive the list and then that list is a subset of all the entries avialable in the performance timeline. only of the types that we are going to observe.
>
> **[4:46](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=286)** So we can get all the entries, with getEntries, or we can get getEntries by name or by type. And then we select which types do we want to observe. For example, I want to observe all the resources, every time a new resource that has been downloaded, such as an image. Then the observer callback will be executed. This is the basic ADI of performance observers, there are also some advanced functions. But just to understand the basic idea of performance observers. With this code, we can cover all the most important use cases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** api (9), url (1), adi (1)
> **Analogies:** for example (7), such as (1)
> **Definitions:** is a  (4), known as (1), is an  (1)
> **Code Identifiers:** getentries (3), starttime (2)
> **Documentation:** spec (2), w3c (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Navigation Timing Level 2](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-2?u=76281980&t=0)** - [Instructor] We haven't really mentioned that the first API available for web performance was the Navigation Timing. And at the time, there were no other ideas so they created this object-based API, pretty simple, that for example if you want to get all the timings you should just use performance.timings. And if you want to get one particular timing of all the ones that we've seen before, you can just say for example performance.timing.domInteractive and that will give you the timestamp, the unique timestamp in milliseconds of that particular time. But after that API, we've seen that the working group has created other ideas that we will cover in the next chapter and all of them are based on the same interface that we now know as the performance timeline API. So that's why now we have a new version of the Navigation Timing API following the performance timeline spec. And that's the level two. In this case, the performance.timings object is deprecating, so it's still there but it's deprecating, we should stop using it for the future. But for example some browsers today are still supporting only level one, that might change when you are watching this video. We need to change that object with a getEntriesByType, and the type for the Navigation Timing API's going to be navigation. It's just the string navigation. We can also get frame that is useful
>
> **[1:34](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-2?u=76281980&t=94)** when you are working with iframes. After you get all the entries, you will receive in this case only one entry. So that's why I'm using subzero. Only one entry you will have, the name of that entry will be the URL of the current navigation. And if you want to get one property, you just use dot and the name of the program, for example .domInteractive following the previous example. And this is the Navigation Timing Level 2. Also this new version of the Navigation Timing API is adding new entries to that option. The first two options that we have are redirectCount and type, that are both being transferred from the old performance.navigation object that we have already seen before. We also have nextHopProtocol, and that has to do to understand the protocol that is going to be used for the navigation. For example, if it's HTP2 or Quick, we have a set of properties, a bit double of the same entry, so we're still using identities by types, a zero. We have transferSize, encodedBodySize and decodedBodySize. So, here is the deal. If you're downloading an [[HTML]] file, typically it's zip, so transferSize, we have the information in bytes of the whole response, including headers. EncodedBodySize was the transfer package without headers and decodedBodySize is the amount of bytes after it was decoded, so that means it was unzipped.
>
> **[3:14](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-2?u=76281980&t=194)** But it's not just zipped, because now you can also have brotli and other encoding [[Algorithms]]. So basically, we are talking about encoded and decoded. And also, because now we have service workers, there is a new property known as workerStart. In that case, workerStart will give us zero if there is no service worker. And if there is a service worker with a [[Fetch]] event handler, then workerStart will give us a timestamp exactly before the fetch event in the service worker was fired.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (2), [[HTML]] (1), [[Algorithms]] (1)
> **Code Identifiers:** workerstart (3), dominteractive (2), transfersize (2), decodedbodysize (2), getentriesbytype (1)
> **Env Vars:** api (7), url (1), htp2 (1)
> **Analogies:** for example (5)
> **Definitions:** is a  (2), known as (1)
> **Cross-References:** in the next (1)
> **Documentation:** spec (1)
> **Speakers:** - [instructor] (1)


### 3. Measure Performance

[↑ Back to Table of Contents](#table-of-contents)

#### [Measuring our websites](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=0)** - [Instructor] It's time to use the performance APIs in our project. So if you have a website, you can add the usage of these APIs, measure, monitor from your server, and create real user metrics. And to see this in action, we are going to open this in a server. I'm going to use a [[Node.js]]-based server, but any server will work. In this case, I already have Node.js installed. I'm in a Mac, so I'm going to request root permission. If you are in [[Windows]], you don't need to add sudo, [[npm]] install -g serve. This is going to install a very simple web server. Now that it's done, I'm going to type serve, dot, that's the current folder. And it will open then my current project in localhost:5000. And this is our project. It's Explore California, it's a website. It has some API calls here. So if I re-load, you can see that the weather is coming through some [[AJAX]] code through a web service. And we're going to our web performance API support for this. So I'm going to the code now. I'm going to open app.js, that is currently empty. So here, we are going to add some logic so we can start doing some logs on performance data. So I'm going to create a function. Let's call this function perf.
>
> **[1:34](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=94)** That we receive information that we will later send to the server. Right now we are going to just log the information in the console. We're going to see the type of measurement that we are receiving, the name and some data that we want to show. Later, we are going to send the data to a server. That's not the purpose of this course. We are going to learn the API, first. So for now we are just going to do a console.log. I'm going to use a special version of console.log that will let us have several colors. So I'm going to use a template script with a backtick ES6. And I'm going to say percentage c. That means here I'm going to apply one string with one css style. So I'm going to take the type, the type that we are receiving as an argument. Then we can add the color here, another percentage c, so another css declaration for that, the name, and then we are going to select, for example, a pipe and another variable here that is going to be the data. And I need to set three css declarations. So for example, we can say that I want the color to be red; for the second one I want the color to be green;
>
> **[3:04](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=184)** and for the fourth one, the color will be silver. This is just a special console.log so we can see three different values in three different colors in one line. And now to see if this is working, we can start listening to the onload event.
>
> **[3:25](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=205)** And just to see if this is working, we are going to call our perf function, and we are going to say this is the onload, event, no data.
>
> **[3:37](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=217)** Also for the data, we can make it optional. So if there is no data that we want to show here, we can verify the data is there, if not, we are going to use just an empty string, like that. Let's see this in action. We're going to refresh. And we're going to open the Tools in the console. If you are using Chrome, it's in the menu, More Tools, Developer Tools. On different browsers, it's in a similar place. And here, we can see that our logger is currently working. Now it's time to add more information here. So for example, we are going to start working with the navigation timing API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (2), [[Windows]] (1), [[npm]] (1), [[AJAX]] (1)
> **Env Vars:** api (4), ajax (1), es6 (1)
> **CLI Commands:** node (2), sudo (1), npm (1), make (1)
> **File Paths:** node.js (2), app.js (1)
> **Analogies:** for example (3)
> **UI Navigation:** open the (1), in the menu (1)
> **Prerequisites:** install (2)
> **URLs:** [localhost:5000](https://localhost:5000) (1)

#### [Add the Navigation Timing API](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=0)** - [Narrator] Continuing with the project, it's time to replace our on-low handler here with the navigation time in API we're going to start using navigation time in API version 2 and then we will make a fall back. So for that, we need tracks their performance object and there, we need to get entries. In this case, by type. We're going to ask for, the type navigation we don't have frames here, so we don't need to add for frame And that will give us a list of entries, so let's create navigation entries. Let's create the constant for that, and then we're going to take those entries, and make a loop. So we're going to check every entry, and for every entry there, we're going to do something. In this case, there is only one entry usually for navigation, or no entries at all. So I can show access sub zero if tail for each and just in case let's other for each. And if it's zero, it's probably because it doesn't have the second version of the API. So once we are here, what we're going to do is send a perf message, so we're going to log something in our logger. And we're going to, for example, say, that this is a navigation. That's the type. The name of the property we want to show. We can show anything that we have here, for example, we can take [[Fetch]]-start, and we're going to take the entry,
>
> **[1:36](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=96)** and we're going to take fetch.Start. So here in this entry, we have all the objects that we have seen for the navigation type in API. Going back here, we can refresh and now we can see we have navigation fetch start 1.69. So, that's basically milliseconds. Remember that when we have decimal values, we are talking that microseconds value . What we can do now, is that if we have the data here we can also add millisecond. For example, like ms, or we can render other things as well. Now that we have fetch start, let's do something more interesting. For example, we can try to calculate the time to first byte. That's the calculation that we have already seen. And for that, we're going to take the responseStart, and we're going to say minus fetchStart. So now we can also say navigation, time to first byte, and we're going to take time to first byte. So, we refresh, and now we have the information properly there. What we can here is we can round the value, so we are going get rid of the microseconds value. And we also have, ms, like that. So now, we can see that we have a fetchStart and also
>
> **[3:13](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=193)** time to first byte is two milliseconds. That's because, we are pretty quick, we are loading this locally. What we can do is, instead of using Chrome, that not available in every browser, you can open the console drawer from the menu. And in the console drawer, you can click on network conditions. And there we can specify that we want to throttle the network. And we can enable it Fast 3G, so now it's simulating a 3G connection. So you can see that the time to first byte is bigger and a Slow 3G connection that is even bigger. Something that we can do, instead of silver here, let's change it with gray. Now, we can feel the pain there is slow like that. And now, let's go back to online. Now let's talk about old versions. So if navEntries if the lengths is zero, then it means the the API is not there. The new version of API. So what we can do is, we can use the old version, let's say, this is now replicated. But is currently the only one available in some browsers, instead of entry here, we are going to just say performance.timing.fetchStart That's the old version of the spec. There we are. We're not going to see a difference here. So, that's all for the navigation timing in API. If you want to support a very old browsers, like IE,
>
> **[4:49](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=289)** in this case, getEntriesByType will not be available, so you can also check if getEntriesByType is available in performance and this case, you can also go and do a fallback like as we did before.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (4)
> **Code Identifiers:** fetchstart (3), getentriesbytype (2), responsestart (1), naventries (1)
> **Env Vars:** api (7)
> **Analogies:** for example (4)
> **CLI Commands:** make (2)
> **Versions:** version 2 (1), 1.69 (1)
> **Cross-References:** go back to (1)
> **Documentation:** spec (1)

#### [Use the Resource Timing API](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980&t=0)** - [Instructor] Do you remember that we saw this diagram with all the available timings for a document load? What happens with each resource, each [[JavaScript]] file, CSS file, webfont, image, SVG, or any document that you are loading? We do have an additional API known as Resource Timing API, and in this case, we have a simplified version of the diagram because there is no [[HTML]], there is no parsing, where we can also get the information per resource. So let's see this in action. Now going back to the code, you can load 03_03 > Begin from the Exercise Files and after we have already played with the Navigation Timing API, we are going to add, after that, Resource Timing API. So the Resource Timing API is pretty simple. We also have to get the entries, so let's call this resEntries from resources. And in this case, we are going to getEntriesByType and the type's going to be resource. And here, we need to go through all the entries, so I'm going to use forEach, entry, similar to what we did before. I'm going to say, in this case, it's a resource. Instead of resource, I can also get a type. So if it's a CSS, if it's an image, from the entry, with a property known as initiatorType.
>
> **[1:39](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980&t=99)** Like that. Then we can take the name of the entry. The name is going to be the URL of the resource that is being loaded. So if we want to get information about one particular resource, we can also use getEntriesByName and try to find the URL of the entry that we are interested in. For example, if you have a CDN, we are loading a file from a CDN, we can check network status and network bandwidth and latency with that CDN. And for example, for the resource, we can also take all the timings, but I'm going to take the size. If you remember, we have available the size of each navigation, including resources. So I'm going to create the size, and it's going to be an int temp string that will take from the entry the encodedBodySize. So that's the actual transfer file. If you want the real file, you can use decodedBodySize. And I'm going to divide it by 1024, so we can get the value in kilobytes. And when I'm here, I'm also going to parse this as an integer, or I can round it. So we can get the real value. We can also take the the time to first byte and it's going to be the same as we did with the Navigation Timing API with the main document.
>
> **[3:16](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980&t=196)** I'm going to send that time to first byte here as well. So now we have a fourth argument for the size. So let's go back at the top and we can add, in this case, options. So we can add the fourth character here in the console that will take the optional options. And we can use in this case, lightblue, or something like that for that one. So now let's go to the browser. I'm going to refresh and there we are. So we have an undefined there at the top. We can solve the problem here like verifying if option is there, we can add an optional value for the argument because this is ES6. There we are. So now we can see that, in this case, we have two CSS files that are being loaded through a link type. Then we have a script type, video type, img type, and also fonts that are being loaded by CSS. And we can see the actual transfer size of that file. Remember in the case of CSS and JavaScript, they are being compressed. So that's how you use Resource Timing API. You just loop through all the entries and then you can get all the navigation timing information that is available for the document, but in this case, for resource.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2), [[HTML]] (1)
> **Env Vars:** api (7), css (5), cdn (3), url (2), svg (1)
> **Code Identifiers:** resentries (1), getentriesbytype (1), foreach (1), initiatortype (1), getentriesbyname (1)
> **Analogies:** for example (2), similar to (1)
> **Definitions:** known as (2)
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)

#### [Create custom user timing](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/create-custom-user-timing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/create-custom-user-timing?u=76281980&t=0)** - [Instructor] So far, we are measuring the main navigation load, as well as information about each of all our resources, but sometimes, we want to measure a specific things that are up to our app, they are not available on other apps. For example, in this case, the weather. Let's open, again, the console drawer from the menu and enable the network throttling. If I go to Fast 3G and reload, pay attention to the weather information. That way, information takes some time, because it goes into an API, and that API, it's asynchronous, so it might take time. So, how can we measure that time? For that situation, we have another aspect known as user timing API. With user timing API, we can create our own marks in the timeline, that then, we can read, with the same performance time on API that we're used to, such as getEntriesByType. Going back to the code, the first step is to do the marks. In our case, we have a weather.js file in the project that is making a lot of fetches to an API reading the information from three figures. So, that Promise.all is executing those requests to the server, so before doing that, before actually executing this, we can make a mark, and we do a mark,
>
> **[1:33](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/create-custom-user-timing?u=76281980&t=93)** with the user time in API, with performance.mark. It's pretty simple, easy to remember. Mark receives just a name, for example, we can say, weatherStart. It's just my custom name, and then we need to mark the [[Representational State Transfer (REST)|rest]], this case, because it's Promise.all, Promise.all will execute the .then with all the promises in this case, with all the weathers are coming, so we can also do performance.mark weatherEnd. So, we already set those marks. Going back to app.js, it's time to also read for these marks, and we can read them with another type, but it's not navigation, it's not resource, in this case, it's mark. If we are doing this in the low event, maybe, the weather is not ready yet, so maybe, we will get no entries. So, in this case, we need to use the performance of server pattern that we have seen before. So, we need to create a performance observer for user timing, and for that, we are going to do this. We are going to create, for example, a userObserver. It's a new PerformanceObserver, and the constructor receives a callback to a function, but we receive the list of entries, and after that, we are going to observe, and we need to set some options, including the entryTypes.
>
> **[3:10](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/create-custom-user-timing?u=76281980&t=190)** There is an array, a service and array, of all the types that you want to listen to. For example, in this case, I want to listen for the mark types, so every time there is a change in that entry list, it will execute the callback. So, in this case, we're going to pick the list, and we're going to get entries, all of them, and we're going to log those entries in our system. So, in this case, we're going to say that it's a mark or, let's take the entry type directly from the property, entry.entryType, then we have a name, for example, we can specify for the name, entry.name, and finally, entry dot, and here we have, startTime, for example, at what time is the timestamp that mark has happened in the timeline. So, if I save this, go to the browser, and refresh, we can see, now, the mark weatherStart and the time, and weatherEnd, with the time. Every time you make a change in the [[JavaScript]] file, remember that if you're using a server, there's cache in file, you can use shift reload, so you make sure you have the latest version of the JavaScript file. With a user timing API, you can also create measures, and the measure is pretty simple.
>
> **[4:47](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/create-custom-user-timing?u=76281980&t=287)** In this case, because we have start and end, after the end, we can ask the performance API to measure, and we're going to measure weather, and we're going to say that the start mark is weatherStart, and weatherEnd is the end, so it will just make the difference, and it will call it weather, and it will be a measure. So, basically, it's another entry type, so now we can listen for measure and marks, or just one, or both. So finally, going back here and reloading, we have weatherStart, weatherEnd, and weather, that is the difference between both values. Now, going back to the code, we need to think that, when we have the measure, we shouldn't use the start time to show on the screen, we should use the other property, that's duration, but for mark, we should use the other one so we can check if the entryType is mark, we are going to use entry.startTime. If not, entry.duration, let's go to a new line. Like that, and mark is in a string, and now if we go back to the browser, now we can see that the information is actually making sense.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **Code Identifiers:** weatherstart (4), weatherend (4), entrytype (2), starttime (2), getentriesbytype (1)
> **Env Vars:** api (9)
> **Analogies:** for example (6), such as (1)
> **CLI Commands:** make (4)
> **UI Navigation:** go to (3)
> **Definitions:** known as (1), is an  (1), is a  (1)
> **File Paths:** weather.js (1), app.js (1)

#### [Get paint timing](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=0)** - [Narrator] At the beginning of the course we mentioned that, we do have now new metrics to measure web performance. Such as thirst meaning full paint. But how can we measure that in the browser for our real users. There is a new API on top of the performance API that is not yet available on every browser. It has started in chrome, we just call the Paint Timing API. Its as good idea to use it with performance observers and not directly with get entries like type, because we don't know when that will happen. So this is then the Paint Timing API. Am going to create an observer for it. So its going to be the paint observer, new performance observer the same as before. That we'll receive a list. That's an error function. And then we are going to observe for the entrytypes that its paint. Here we might have a problem. Because if you try to observe of an invalid entrytype for example, in the browsers there is not compatible with that API, this will throw an exception. So when you know that might not be there its a good idea to rub this in tri catch, so that we can be sure. In this case we know Paint API not available. Its a Paint Timing API.
>
> **[1:38](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=98)** And here in the performer observer we can also get all the entries to they their speck has two entries with specific names. So instead of looping through all the entries we can get one by one by name. One its known as the First Paint, so we are going to say First Paint. First Paint happens in the timeline when one pixel appears on the screen. Maybe its a line maybe its one pixel really. So we are going to then take the list, an we are going to get entries by name. And the name is exactly First dash paint that's the name in the speck. The entry will have that name. So just in case we are going to check if it does exist. Remember that this is an array, we can check that the length its greater than zero and if that's the case then we are going to log, in this case the entrytype. its paint, the name is going to be First Paint and we are going to take from First Paint sub zero remember that get entries always gives you an array dot start time. And beside First Paint we also have First Contentful Paint So I will select the three lines, copy and paste and we have First Contentful Paint and lets call this First Contentful Paint.
>
> **[3:13](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=193)** And replace all the preferences. Do I need to add all the contentful here as well? So what's the difference between First Paint and First Contentful Paint. First Paint is just one pixel one line one background color. And First Contentful Paint means there is actually something contentful. It can be texts it can be an image. So its something that the users brain is going to path. So that's the difference. So now for example, you can take this value and verify if its within the goal that you have set for your performance goals. And if not then you can do something about that such as send you a message, log in somewhere or even change how you are rendering the page so it will become faster from now on. So lets try to see this in action in the browser. So am in the browser and refreshing and here we can see that First Paint and First Contentful Paint both are happening at 59 milliseconds right now. Because its a very simple website that is served from a local server. So that's the Paint Timing API. Just remember its not yet available on every browser.

> [!info]- Semantic Content
>
> **Env Vars:** api (8)
> **Analogies:** such as (2), for example (2)
> **Definitions:** is a  (1), known as (1), is an  (1)
> **Cross-References:** we mentioned (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [narrator] (1)

#### [Detect long tasks](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-long-tasks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-long-tasks?u=76281980&t=0)** - [Narrator] A recent addition to the performance family is the Long Task API. The long task API will let us detect when we have some code that is taking the thread for too much time, so it's a long task. And we should do something different, such as using a web worker, or changing the algorithm. That's not available in every browser today. In fact it's fairly experimental. So we need to do something similar to paint timing. This is the long task API, we also need an observer in this case, it's mandatory to have an observer. We going to create the long task observer. It's a new performance observer that we receive a list and we're going to first try to observe on that observer and in this case, the entry type is Longtask, one [[Microsoft Word|word]].
>
> **[1:15](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-long-tasks?u=76281980&t=75)** We need the catch, and we're going to observe here for now. We will just get the entries, all of them and for each entry, we're going to execute the very simple code that we'll call Perf, and we'll say Longtask and for the name, we're going to specify, Thread used for too long.
>
> **[1:45](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-long-tasks?u=76281980&t=105)** (mumbles) If I go to the browser and refresh, it's difficult to find this in action if I don't have a lot of transcript. Let's make a barcode just to prove that the API is working, I will go to my index [[HTML]] and anywhere, for example at the bottom I will line a script tag. Then I'm going to create the code that I will execute every, for example, three seconds. So it's a set interval every three seconds I'm going to do something here. And what I'm going to do it I'm going to first take a measurement and then create a, while, that will ask for a new measurement be less than begin plus 500, so 500 milliseconds.
>
> **[2:48](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-long-tasks?u=76281980&t=168)** So as this, while, is doing nothing for 1/2 a second basically. Every three seconds, I'm keeping in the, while. It's like an infinite loop but it's not infinite because it will just take five seconds of looping into the nothing, into the body and that's taking the thread for 1/2 a second. Okay, so it's very bad, but now because we are measuring that, we are observing the long task we can know that that's happening and we can send a message to our server so we can solve the problem in the future. I'm going back here, I'm going to reload and after three seconds we can see the message and we can see the message appearing and appearing again because every three seconds it's taking the thread for too long. This is currently available on Chrome and it's probably going to appear in other browsers in the future.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1), [[HTML]] (1)
> **Analogies:** for example (2), such as (1), similar to (1), it's like (1)
> **Env Vars:** api (4)
> **CLI Commands:** find (1), make (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [narrator] (1)

#### [Detect frame rate drops](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-frame-rate-drops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-frame-rate-drops?u=76281980&t=0)** - [Instructor] I'm back in the project, in this case, in 03_07, Begin, and we have already talked about Long Task API and there is a new one coming, but it's not yet available at the time of shooting this video in any browser. But, it's in development in Chrome and many others. There isn't a standard in W3C so it will be available. It's called the Frame Timing API. That API will let us detect frame rate drops. So we know that to create a consistent animation, typically we want to have 60 frames per second. And sometimes our transcript code, or too many CSS styles will harm that frame break. While the browsers will start warning us when we are dropping a frame, so we are not consistently providing 60 frames per second. This works very similar to Long Task API, so we need to create in this case an observer, frameObserver. We are going to create the PerformanceObserver again, so it's pretty similar to the previous example. I'm going to try to do this because it's not yet available, and we don't want to get an exception. We're going to observe, and for entryTypes, this is going to be frame. This is basically frame problem, so it's not like every time there is a frame
>
> **[1:33](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-frame-rate-drops?u=76281980&t=93)** it's going to create an entry, no that's not the case. Every time there is a problem with the frame, it's going to create an entry. For here what we can do is we can get the entries and for each entry, the important part is that... Let's say Frame drop. We can say there is a problem with the thread, and the data that is useful here, it should take duration. Duration will be in milliseconds, duration between the two frames that typically is going to be greater than 16 milliseconds, because with 16 milliseconds, you can achieve 60 frames per second. We can't see this in action yet, but when your browser will start supporting this, you will start receiving report of every time that you have a frame drop so you can try to adjust what you're doing to increase performance and increase consistency in you [[User Experience (UX)|user experience]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[User Experience (UX)|User experience]] (1)
> **Env Vars:** api (4), w3c (1), css (1)
> **Definitions:** is a  (4)
> **Code Identifiers:** frameobserver (1), entrytypes (1)
> **Analogies:** similar to (2)
> **Documentation:** w3c (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### [Add server timing information](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-server-timing-information?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-server-timing-information?u=76281980&t=0)** - [Instructor] The last timing API available in the performance interface is known as the serverTiming API. And because it has server in its name, it means we are getting out of the browser of the client. The whole idea here is that we can also send metrics about the performance of the server to the API, and we need to do that from the server. If you open the project, you will find the same web project that we were working on but now we also have a server.js file that is using [[Express.js]] to just set a web server with [[Node.js]], and it's also using a library, known as server-timing, that will let us set metrics and send those metrics to the client. Of course, you can use [[PHP]], .NET, [[Java]] or any server side architectural language. The metrics are being sent using http headers. And then the browser will receive those headers and will populate the information within the performance timeline. So let's see this in action. I'm going to start my project, and before that we need to install dependencies, so in the terminal I will just type [[npm]] install, and now npm start. That will open a server in the port 4000. You can change the port if you want. Now, going back to the browser,
>
> **[1:33](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-server-timing-information?u=76281980&t=93)** we can reload the page and look at the host 4000, and we can see that the same project is still out there. But now, in the console, I will type performance.getEntriesByType. And we're going to check for navigation. Of course we have one item, one entity, with all the information. And we can see that now we also have a serverTiming property with the information like db, duration, description, that the server has sent. Also, if you are using Chrome in Dev Tools in the Network tab, when you clock on the [[HTML]] you can see several tabs here, and the last one is Timing. And if you scroll down, you will find also your Server Timing information in this panel. And remember this information is generated by the server. So on the server, when you are accessing the database, proxies, caches, you are consuming web services or APIs, then you can measure each part server side, send that information to the client side API, and then use the API to store the information, to log the information, or make analytics. So going back to the code, to read information in our system, we need to take, as we saw before, performance.getEntriesByType. We need to read them for navigation,
>
> **[3:09](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-server-timing-information?u=76281980&t=189)** and they are the first object. And there we will have .serverTiming. And that's out serverTiming. And we can read, for example, all the timings with a .forEach, so forEach timing. We will call our perf. We will say this is Server. The name, we can take the name from the timing object, and we can also take duration, timing.duration. Going back to the browser, I'm refreshing, and we can see here that we are logging the data from the server, in this case the database to 100 milliseconds, and the cache to 300 milliseconds. That's basically dummy data that we are sending from the server. But you can apply this on your own server script, and populate client-side APIs with performance information on your server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (2), [[Express.js]] (1), [[Node.js]] (1), [[PHP]] (1), [[Java]] (1)
> **Code Identifiers:** servertiming (4), getentriesbytype (2), foreach (2)
> **CLI Commands:** find (2), npm (2), node (1), php (1), make (1)
> **Env Vars:** api (5), php (1), net (1)
> **File Paths:** server.js (1), express.js (1), node.js (1)
> **UI Navigation:** open the (1), scroll down (1)
> **Definitions:** known as (2)
> **Prerequisites:** install (2)


### 4. Decision-Making Helpers

[↑ Back to Table of Contents](#table-of-contents)

#### [Read network information](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980&t=0)** - [Instructor] Now that we know how to track and get all the available performance timeline information, it's time to see some APIs that will help us into making decisions about the current situation to improve [[User Experience (UX)|user experience]]. Let's start talking about the Network Information API. It's available on some browsers only. Unfortunately, there are different versions of the specs out there. Let's say, a 90% of the browsers supporting this API are currently using the latest spec, but we might have users with older spec, so we need to create some conditionals there. It's available in the navigator object, that means it's on [[Windows]], so in the normal context, and also in web workers context. It's using decimal units to get the information about the current bandwidth, for example. Decimal units means that 1 Kilobyte it's 1000 bytes. To use the API, we just need to access navigator.connection and we can se there are several properties that we can read, such as type, downlink or saveData. Let's see these properties one by one. rtt will let us see the current Round-trip time, also known as the latency, expressed in milliseconds. This is the network latency. So for example, if we are getting an rtt value less than 50, that's milliseconds, it means we are in a fast-wired connection. Typically, from 50 to 200 milliseconds, we are typically in the [[Wi-Fi]] or in 4G. From 200
>
> **[1:33](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980&t=93)** to 450, we are typically in 3G, or maybe a bad 4G. And If it's more than 450 milliseconds, we are for sure in a 2G, or a very bad connection. So, we can ask about this and make a decision about our next steps to improve the user experience. We also have available downlink. Downlink is the effective bandwidth estimate expressed in Megabits per second, and it's rounded to the nearest 25 Megabits per second. So the browser is going to estimate the current bandwidth based on the recent activity to your origin. There is a type* property that is not yet available in all the browsers, so please verify if it has a value before trying to use it. It's calculated based on the Operating System report on the current connection. You can get different string values such as: Bluetooth, cellular, ethernet, mixed, Wi-Fi, wimax; so, these are the kind of connections that the user can be using at one point while browsing your website. There is one property that is available, known as effectiveType. In this case, is not exactly the type, because you can be on Wi-Fi, but it will give you based on the OS report, and also the badwidth and the Round-trip time estimation; it will give you an idea if you're in a 4G, 3G, 2G, or a very slow-2G connection. So it's one string.
>
> **[3:06](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980&t=186)** So if you are, for example, on desktop, using a wire connection, like an ethernet connection, and your working properly, you'll probably get 4G. According to the spec, if you are in a slow 2G, you should only deliver text. On 2G alone, you can also serve small images. 3G, you can serve hi-res images, and slow-definition videos, and only in 4G, HD video is possible. We also have a downlinkMax property, that may not be available in every browser, that it will give you the maximum effective bandwidth in Megabits per second. So, not the current estimate, but the maximum possible in the current situation. So, if you are in 3G, for example, there is a maximum that is allowed by that technology. All their browsers will give you a type*, as we saw before, but with other values, such as 2G, 3G, 4G, ethernet or Wi-Fi, so, be careful here when you are reading the type, because you might also get other values on some browsers. And finally, a property that was deprecated from the spec, but some browsers are still exposing it, its metered*, that it will give you a Boolean value, that if it's true, it means that the user is paying per bite. So, for example, it's in roaming, or it has a data plan, it's paying that bandwidth. If you are on an ethernet connection, it will give you a false. But, because it's difficult sometimes to know if the user is in a metered or not network, then, that's why the spec deprecated this property.
>
> **[4:42](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980&t=282)** Finally, we do have an Event. It's the change event, that we can listen to the connection object, and that callback is going to be executed every time there is a change in these properties. For example, if the user is going from 3G to 2G, or if the user is going from Wi-Fi to a cellular connection. All the browsers might be using a different name for this event, if they have change, they're using typechange, so it's a good idea to support both.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wi-Fi]] (5), [[User Experience (UX)|User experience]] (2), [[Windows]] (1)
> **Analogies:** for example (6), such as (3)
> **Definitions:** is a  (3), means that (2), known as (2)
> **Documentation:** spec (5)
> **Code Identifiers:** savedata (1), effectivetype (1), downlinkmax (1)
> **Env Vars:** api (3)
> **CLI Commands:** make (1)
> **Cross-References:** as we saw (1)

#### [Read device memory](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-device-memory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-device-memory?u=76281980&t=0)** - [Instructor] Starting with Chrome, we also have available an API to check device's memory. That is the available memory, the RAM memory available in the current user's device. Compatibility might change with the future but today it's only on Chromium-based browsers and it will give you a number expressing gibibytes. So remember gibibytes is basically 1024 mebibytes. So it's basically roughly what we know of gigabytes but it's a binary version of that. To use the API it's just getting navigator the deviceMemory that's all. And we're going to get the amount of gigabytes out of float number. It can be left on one for example at 0.5. And typically the minimum value that we will get it's 0.25 gibibytes. Then if we have one or less than one it means it's a low-end device like a very cheap or old [[Android]]. From one to two gibibytes it's a mid-end device. Two to four a high-end device. It can also be a tablet. And from four to eight it's probably a desktop. This is important because even if you're desktop computer or your laptop has 32 gigabytes of RAM the API is exposing up to eight. So it means eight piece of CAdES we don't have memory problems, we don't have memory issues. So, you can do whatever you want. The idea here is to understand what kind of device the user
>
> **[1:32](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-device-memory?u=76281980&t=92)** is currently browsing your website and make some decisions on top of that. For example, if it's a low-end device we might not want to send really high resolution e-messages because those e-messages need to be the code of the memory and we know there are not so much memory available. So this is a very simple API that will let us make some decisions in the kind of content that we will load based on the available memory in user's device.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (1)
> **Env Vars:** api (4), ram (2)
> **CLI Commands:** make (2)
> **Versions:** 0.5 (1), 0.25 (1)
> **Analogies:** for example (2)
> **Code Identifiers:** devicememory (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Save data for your users](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/save-data-for-your-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/save-data-for-your-users?u=76281980&t=0)** - [Instructor] Some browsers are adding a Network Information API extension known as the Save Data Flag. When the flag is enabled, currently in Chrome and Opera, it's a Boolean flag telling us if we should be saving data or not. And it sits on top of the Network Information API so it's available on navigator.connection. To read that flag we need to check for navigator.connection.saveData common case. The idea here is that this is a flyer to tell us hey developer be careful with the data that you are consuming from the network because the user or the current conditions are ideal for saving data to improve performance. Today, for example, on Chrome on [[Android]] the user can go to Settings enable the Data Saver. If the user uses Data Saver then the flag will be on. And for example future versions of Chrome are making some decisions such as if the user is in 2G. And also has the saveData flag on, then for example it's not going to execute any [[JavaScript]] code. It's just plain [[HTML]], because we need to save data because in 2G, and also it's a very low end device so we don't want to execute or download any chance of code. You can do also things like that and be in charge of what will happen when your website is reloaded and they're these extreme conditions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (1), [[JavaScript]] (1), [[HTML]] (1)
> **Analogies:** for example (3), such as (1)
> **Env Vars:** api (2), html (1)
> **Code Identifiers:** savedata (2)
> **Definitions:** known as (1), is a  (1)
> **UI Navigation:** go to (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### [Receive client hints on the server](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=0)** - [Narrator] To make decisions for web performance we know now that there are many information available client-side only, such as the network information API, device memory, save-data, and even responsive queries, such as the current available width, the current device pixel ratio, so the resolution of the screen. But sometimes we need to access that data in the server. For example, to apply some reactive web performance techniques, such as changing the amount of data or the quality of the data that we are sending based on this information. Also, because we might want to serve better responsive images. Such as, the browser is requesting for the picture. Without more information, the server can't say, Okay, let's say we are in an iPhone X We are in a slow 2G, and we have that memory. Well, let's send that version. Another user, oh, this is an [[Android]]? It's on 4G, and it has different resolution, and only has two gigabytes of memory. Okay, let's use this version. Or let's compress more the jpeg file that they are sending. So, to make those decisions we need information server-side. So, let's meet client-hints. Client-hints, it's a new spec where we can opt in for hints that are going to be sent from the client to the server. To opt in we need to use a response header or a meta tag, and that will let us make decisions from the server.
>
> **[1:33](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=93)** It can be easily poly-filled with service workers or even with cookies. Let's see how it works. So, we have the browser requesting an [[HTML]]. The web server in their response will opt in for client-hints. So, it's not enabled by default. The web server needs to opt in for client-hints. And after that the next request will go with client-hints. So, let's see this in action. In terms of a meta tag we use <meta http-equiv="Accept-CH" CH from client hints, and then in the content, we are going to specify the client hints that we want to receive. We can also set these as an Accept-CH header in the HTTP Response from the server. The possible client-hints available are width, in this case it's the expected resource width in physical pixels available for images. So, in this case, the browser will say to the browser, "Hey, browser, in my current situation the IMG, for example, that I need to fill with this image, I need the file to be 100 x 150 physical pixel." Viewport-width will send the browser information about the current layout width, so the viewport. That's expressed in CSS pixels not in physical pixels. DPR, that's the device pixel ratio. For example, it will be three for the iPhone X; it will be four for the Galaxy S9; it will be one for a normal desktop;
>
> **[3:06](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=186)** it will be two for a regular screen Macbook Pro; and it will be two for an iPhone 8. Also, we can request client-hints from the network information API and the memory API. So, we can request RTT, so the round-trip time, downlink, the estimated bandwidth, ECT, that means effective connection type, and it's going to read the string, such as slow 2G, 3G, 4G. We can request save-data, so we can know server-side if the user has selected save-data on the client, and device memory, so we can get the amount of gigabytes of memory that the user's devices has. So, for example, when the browser requests the HTML, the web server can answer with an HTTP header, saying, I accept CH, so I accent these client hints: DPR, device memory, save data, and effective connection type, ECT. So, on the next request, in this case, for example, for a resource, it can be an image. It will go with the data expressed in HTTP headers in their request, such as DPR 3.0, device memory 2, save-data on. That's how you know if save-data is in true. And ECT with a 3G value. And then the web server can make decisions on top of that. Also, on modern browsers we can also specify a client-hints cash, in Lifetime. In that case we use also a meta or an HTP tether known as accept-CH-Lifetime,
>
> **[4:40](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=280)** and we express a value in seconds. In that case, that's useful for next visits because client-hints don't work on the initial HTML request, only on the additional resources or request that the browser will do after the HTML. With Lifetime we can request that for a couple of minutes or hours. We want to accept client-hints, so on the next time the user is accessing even the initial HTML, we will get the data. So, now we can apply reactive and responsive web performance based on the data that we get in the server. We can select the right image and resolution. We can select the quality of the content and also the quantity of the content that they're going to send based on these client-hints.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (5), [[Android]] (1)
> **Env Vars:** html (5), api (3), http (3), dpr (3), ect (3)
> **Analogies:** such as (6), for example (5), picture (1)
> **CLI Commands:** make (4)
> **Code Identifiers:** iphone (3)
> **UI Navigation:** select the (2)
> **Definitions:** is an  (1), known as (1)
> **Versions:** 3.0 (1)


### 5. Execute Code More Efficiently

[↑ Back to Table of Contents](#table-of-contents)

#### [Send low-priority requests with beacons](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/send-low-priority-requests-with-beacons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/send-low-priority-requests-with-beacons?u=76281980&t=0)** - [Instructor] It's time to see some modern APIs available in [[Vanilla]] [[JavaScript]] to execute our code more efficiently. We're going to start talking about the Beacon API; that has nothing to do with Bluetooth beacons. So, this is useful for analytics, trackers, or state updates that you are currently sending over [[AJAX]] or typical [[Fetch]] requests. We are going to use this API when waiting for a response is not really important. For example, let's say the user is clicking a link and we want to save stats and analytics server-side to know how many clicks that link has received. So, we don't want to wait for a response, it's just, okay, server, the user has just clicked here. I don't care about a response. Also, those requests shouldn't be high-priority, so I don't want to mess with the performance of my app because I'm sending that track information. Also, what happens if the user doesn't have connection at that time, or if the user is closing the browser or the tab, or if the user is going to another URL? The JavaScript context is not there anymore; I don't want that request to be aborted because of that. So, that's why we have, now, the Beacon API. It's a very simple API: navigator.sendBeacon, we set a URL, and we can send optional data. It can be, for example, an option, or a [[JSON]] syntax option. And that's all! So, the browser will send that beacon,
>
> **[1:35](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/send-low-priority-requests-with-beacons?u=76281980&t=95)** even if the user is not on that page anymore, if the user is on a different page, or even if the tab is closed, and that request will be low-priority, so we know for sure that we will not be harming the performance of the [[Representational State Transfer (REST)|rest]] of our app.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2), [[Vanilla]] (1), [[AJAX]] (1), [[Fetch]] (1), [[JSON]] (1)
> **Env Vars:** api (4), url (2), ajax (1), json (1)
> **Analogies:** for example (2)
> **Code Identifiers:** sendbeacon (1)
> **Speakers:** - [instructor] (1)

#### [Understand frame rate execution](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=0)** - [Narrator] To improve responsiveness of our app, we need to understand frames. So the browser is rendering frames all the time. We want to achieve 60 frames per second for better performance, unless we are doing VR, virtual reality or augmented reality. In those cases, we might want more frames per second, but on a normal screen, 60 frames per second is enough. And to achieve 60 frames per second, we need to understand how the system works. At least, at a high level overview and then use a new approach. So, this is a simplified version of the architecture of how the browser is rendering frames. Each frame, so 60 frames per second. So this diagram will try to be executed 60 times per second. So a frame starts. In that case, the browser will start processing your input demands. So if you have an on click handler, on scroll, or something like that, after you do some changes, there might be some new [[HTML]] that needs to be parsed. The browser will calculate the styles, the layout, new CSS that you have changed in the input events, and then the browser will calculate and do the paint and composite. From frame start to frame end, we should be having 16 milliseconds. With 16 milliseconds, we achieve 60 frames per second. And so that means there will be some idle time like, "Yeah I'm doing nothing. I'm the browser. I'm doing nothing." before the frame actually ends.
>
> **[1:33](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=93)** And at one point, you may have your own timers, such as set timeout, set interval, and those timers will be executed at any time. So, there is no guarantee that those timers will be executed within one frame. So that means that in a typical browser environment, we want to see situations like this. One frame starts, another frame starts, another frame starts, with the same sequence. But the problem is that that's an ideal situation. That's not usually what's happening. Because if you have a long script, so you have a child script code that is being executed. It can be in an input event handler. It can be in set timeout, or in any place. That script is taking the thread and because of that the next frame is being pushed in the timeline. So we are dropping frames. We are losing responsiveness of our app. So we can have frame rate drop. Sometimes, there will be frames without executing your code. So that frame won't be updated. Also what happens if we have low-priority code that you don't want to mess with the animation? So you want to execute some code, but it's not really so important to push one frame. So you want to wait and you want to make sure that that code will be executed in the idle time. So when there is nothing to be done by the browser. But we don't know when that's happening. So that's the problem that we have.
>
> **[3:05](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=185)** So that's why today, we have new APIs, we have request animation frame. That's a code that will be guaranteed to be executed on each frame and then we have idle callback. That is a way that we have now to execute code in the idle time. Even if we have an API, so we can check the available time. So let's see these APIs in the next videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **Env Vars:** html (1), css (1), api (1)
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### [Execute animation control code](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/execute-animation-control-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/execute-animation-control-code?u=76281980&t=0)** - [Instructor] If we want to execute code on each frame, we shouldn't be using set interval or set timeout anymore. We need to use request animation frame, because it's the only way to guarantee that our code will be executed after each frame has started. It's part of the latest HTML5 spec, so it's in standard in HTML5. It will let us execute code on the next frame before actually painting and parsing that frame, and it's guaranteed to be executed on the next frame. So request animation frame, will execute code in the next frame. It's much better than timers, and we should always keep that code small anyway, because if you're taking more than ten milliseconds to execute that code, we are going to push the next frame, so we will have frame drop anyway. But this is the only way that we have to guarantee that our code, for example, to ablate the UI to move elements on the screen will be executed on time before rendering and parsing the next frame. The API is really simple. It's just requestAnimationFrame, and we sent a call back as an argument. And that's all.

> [!info]- Semantic Content
>
> **Env Vars:** html5 (2), api (1)
> **Code Identifiers:** requestanimationframe (1)
> **Cross-References:** in the next (1)
> **Documentation:** spec (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Execute background tasks](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/execute-background-tasks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/execute-background-tasks?u=76281980&t=0)** - [Instructor] It's now time to execute code when the browser is idle. The problem with the idle time on each frame is that it is different per frame. Because the other faces of the frame, such as input advance, parsing, or painting are not equally on each frame. So sometimes we will have more idle time, sometimes we will have less or even no idle time at all. There will be many frames without idle time. So there is a new API. It's the W3C, under the spec known as Cooperative Schedule of Background Tasks, sometimes also known as the background task API or request idle callback. It will let us execute low-priority code before each frame or after each frame has been painted, or before the next one. If there is enough idle time, because it is low-priority, also we receive an argument where we can query how much time is left before that idle time is gone and before the next frame should start being processed. We are not forced to stop executing code when the available time is zero, but we should stop and instead the new idle callback in that case because we don't want to have frame drops. We want to achieve 60 frames per second. So this is the API. We call request idle callback in the global context and we receive an argument. That argument has a method with the name time remaining.
>
> **[1:35](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/execute-background-tasks?u=76281980&t=95)** So we can execute some code if it's a loop, for example, before the next iteration we can ask, do we have time? And if we don't have more time, we can stop and request a new idle callback for the next frame. There is no guarantee that our code will be executed on the next frame because it will execute code only when the browser is idle. So the browser will retry on each frame but if there is no time, no idle time, no idle time, no idle time, it will never execute your code. So we can specify a timeout such as I want to execute this low priority code if the browser is idle but I want to wait maximum three seconds. So after the timeout passes, the browser will execute your code on the next frame, even if there is no idle time on the next frame. So after expiration, the browser guarantees that you will execute your code anyway and, in that case, it will probably push another frame but you need to execute that code at that time because you set an expiration. To set an expiration on the request idle callback, you send a second argument with an object, specifying the timeout in milliseconds. And then also, inside the callback, despite having the ability to reel the remaining time, you can also verify the voo-lee-on value with timeout where you can know if the current execution
>
> **[3:09](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/execute-background-tasks?u=76281980&t=189)** is after a timeout or not.

> [!info]- Semantic Content
>
> **Env Vars:** api (3), w3c (1)
> **Analogies:** such as (2), for example (1)
> **Documentation:** w3c (1), spec (1)
> **Definitions:** is a  (1), known as (1)
> **Speakers:** - [instructor] (1)

#### [Efficient script yielding](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/efficient-script-yielding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/efficient-script-yielding?u=76281980&t=0)** - [Instructor] The final API available in modern browsers regarding executing code is efficient script yielding. It's a way to yield control to the browser before actually running our code. In this case, it's for normal to high-priority code that we want to execute. So it's not low priority. We want to execute that code as soon as possible, but we want to do that after the browser has rendered any changes on the screen. Typically, we were using the setTimeout zero to do this, I've been doing this a lot in web apps, since probably 1998, but the problem with setTimeout zero is that it always has some time that is being used for other purposes, so it's not going to execute your code as soon as possible when you are using setTimeout. So, instead of doing that, we can access the new API that is really simple, it's just setImmediate. We send a callback, and the code that we are executing there will be executed exactly after the browser has finished parsing and rendering any pending changes on the screen.

> [!info]- Semantic Content
>
> **Code Identifiers:** settimeout (3), setimmediate (1)
> **Env Vars:** api (2)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/next-steps?u=76281980&t=0)** - [Maximiliano] Thank you for joining me in this course. We have covered a lot that should help you now increasing the performance of your website and also gathering information from your real users in terms of timings, goals, and metrics that will increase your [[User Experience (UX)|user experience]]. We have been covering the Performance Timeline API and all the APIs available in [[Vanilla]] [[JavaScript]] without any framework in most modern browsers. We know how to calculate milestones in that timeline, how to check information about navigation, research timing, your custom code, paint timings, and also how to detect frame rate drops and long tasks. We also know the APIs that they're available to gather information about the current network and memory conditions and how to execute your code more efficiently. It's time now to move forward and now you can continue your learning with one of my two books on web performance: High Performance Mobile Web and Hacking Web Performance both published by O'Reilly Media. And you can also find a lot of content from myself and other great authors in [[LinkedIn]] Learning about web performance, web workers, and service workers. You can also follow me on Twitter. I'm F-I-R-T, firt. I usually publish information and articles about web performance and updates on all of my courses. So thank you again and see you in the next journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[User Experience (UX)|User experience]] (1), [[Vanilla]] (1), [[JavaScript]] (1), [[LinkedIn]] (1)
> **CLI Commands:** find (1)
> **Env Vars:** api (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [maximiliano] (1)


## Instructor

- [[Maximiliano Firtman]]

## Resources

- Exercise files available

## Skills Covered

- JavaScript

## Path Context

### In [[Explore Web Development with Vanilla JavaScript]]
← [[JavaScript- Service Workers]] | **7 of 8** | [[Vanilla JavaScript- Building on the Document Object Model (DOM)]] →

## Appears In

- [[Explore Web Development with Vanilla JavaScript]]

## Related Courses

_Courses sharing skills:_

- [[End-to-End JavaScript Testing with Cypress.io]] — JavaScript
- [[Learning JavaScript Debugging]] — JavaScript
- [[Foundational JavaScript Security]] — JavaScript
- [[JavaScript- Test-Driven Development (ES6)]] — JavaScript
- [[JavaScript- Best Practices for Data]] — JavaScript

---

[↑ Back to top](#)