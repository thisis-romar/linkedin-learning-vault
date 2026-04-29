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
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Vanilla%20JavaScript-%20Web%20Performance%20Optimization%20APIs.md)

![Vanilla JavaScript: Web Performance Optimization APIs](https://media.licdn.com/dms/image/v2/C4E0DAQFfzyF5w7z1jg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567118421027?e=2147483647&amp;v=beta&amp;t=hCs3GbtwGtigkt-MH50rhR3mVPxC0VbeF3Khe3ekAb0)

# Vanilla JavaScript: Web Performance Optimization APIs

> With the Performance APIs built into modern browsers, you can measure the performance of your websites and applications and make "live" changes to the content, page navigation, and more. This allows you to create a faster and better experience for all your users: for the desktop user on high-speed Wi-Fi or the mobile user with a weak signal. This course shows how to collect real metrics from real 

> [LinkedIn Learning](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis) | 1h 43m | Advanced | 6K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (2 videos)
- **[[#1. Reactive Web Performance]]** (5 videos)
- **[[#2. Performance Basics]]** (5 videos)
- **[[#3. Measure Performance]]** (8 videos)
- **[[#4. Decision-Making Helpers]]** (4 videos)
- **[[#5. Execute Code More Efficiently]]** (5 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Optimize APIs with JavaScript
> [LinkedIn Learning](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/optimize-apis-with-javascript?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/optimize-apis-with-javascript?u=76281980&t=0)** - [Instructor] Hello, my name is Maximiliano Firtman and I will be your instructor in this course on Vanilla JavaScript Web Performance APIs.
>
> **[0:10](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/optimize-apis-with-javascript?u=76281980&t=10)** I've been working with web performance for more than 10 years, and I'm happy to be here sharing with you my experience on getting metrics, real user metrics, from real devices on real networks, and make some decisions to improve the user experience.
>
> **[0:28](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/optimize-apis-with-javascript?u=76281980&t=28)** Without any framework, we will be applying these APIs on a real website.
>
> **[0:34](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/optimize-apis-with-javascript?u=76281980&t=34)** We are going to get information, and we are going to see everything that we can do to improve and keep a consistent experience across different context.
>
> **[0:43](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/optimize-apis-with-javascript?u=76281980&t=43)** Not matter if the user is on a desktop computer on a wifi connection, or if the user is on a very cheap Android device on a bad 2G connection.
>
> **[0:54](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/optimize-apis-with-javascript?u=76281980&t=54)** We will try to keep the experience consistent using reactive web performance techniques, and we will also see how to execute code efficiently, understanding the browsers, frame management and the new APIs available for us.
>
> **[1:09](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/optimize-apis-with-javascript?u=76281980&t=69)** I hope to see you in this course so we can make, together, the web faster and better for our users.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/what-you-should-know?u=76281980&t=0)** - [Instructor] To participate in this course, you only need to know basics of HTML, CSS and JavaScript, and how the browser works.
>
> **[0:08](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/what-you-should-know?u=76281980&t=8)** Such as understanding what that HTTP request is, and what the HTTP response is.
>
> **[0:13](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/what-you-should-know?u=76281980&t=13)** We maybe writing JavaScript code, so you need to be comfortable with ES6.
>
> **[0:18](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/what-you-should-know?u=76281980&t=18)** Such as, for example, arrow functions.
>
> **[0:20](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/what-you-should-know?u=76281980&t=20)** For the pressure pad we are going to use a web server and a text editor.
>
> **[0:25](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/what-you-should-know?u=76281980&t=25)** In my case I will use Note JS and Bushido Studio code.
>
> **[0:29](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/what-you-should-know?u=76281980&t=29)** But any web server and any text editor that you like will be good enough.
>
> **[0:34](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/what-you-should-know?u=76281980&t=34)** So let's start working with web performance APIs.

> [!info]- Semantic Content
>
> **Env Vars:** http (2), html (1), css (1), es6 (1)
> **Analogies:** such as (2), for example (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)


### 1. Reactive Web Performance

> [[#Table of Contents|↑ Back to Table of Contents]]

#### The need for web performance APIs
> [LinkedIn Learning](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-need-for-web-performance-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-need-for-web-performance-apis?u=76281980&t=0)** - [Instructor] Web performance optimization is a set of practices to improve perception of how fast the website, or the app, is being loaded.
>
> **[0:08](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-need-for-web-performance-apis?u=76281980&t=8)** Increasing perception will increase conversion, so it will make more money for the company, it will make more visitors, more page views, or whatever conversion means for that particular site.
>
> **[0:21](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-need-for-web-performance-apis?u=76281980&t=21)** In the last few years, new user-centric metrics and new goals have appeared, that now, we need to achieve.
>
> **[0:28](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-need-for-web-performance-apis?u=76281980&t=28)** For example, we have first meaningful paint that the current goal is from one to three seconds, meaning that we should show something meaningful to the user within the first three seconds.
>
> **[0:41](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-need-for-web-performance-apis?u=76281980&t=41)** Then, we have first interactive, that is typically two to four seconds.
>
> **[0:45](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-need-for-web-performance-apis?u=76281980&t=45)** That means, we don't want to see something only.
>
> **[0:48](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-need-for-web-performance-apis?u=76281980&t=48)** We want that something to work, to actually work, and for that, it should be interactive.
>
> **[0:54](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-need-for-web-performance-apis?u=76281980&t=54)** Sometimes you see a page on the screen, but it's not working, you try to click, you try to scroll, and nothing happens.
>
> **[1:01](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-need-for-web-performance-apis?u=76281980&t=61)** So, that's because first interactive didn't happen yet.
>
> **[1:05](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-need-for-web-performance-apis?u=76281980&t=65)** So, typically, when we are doing web performance, we are developing the app, we measure performance, and then we say, oh, let's apply some techniques here, and then we develop that, measure, apply techniques, and so on, that's basically how, typically, web performance works.
>
> **[1:24](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-need-for-web-performance-apis?u=76281980&t=84)** At one point, we say, okay, we are ready to deploy.
>
> **[1:27](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-need-for-web-performance-apis?u=76281980&t=87)** We deploy, and we go to the user.
>
> **[1:30](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-need-for-web-performance-apis?u=76281980&t=90)** So then, the user will get that optimized website.
>
> **[1:35](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-need-for-web-performance-apis?u=76281980&t=95)** So, what's the problem, then, with this?
>
> **[1:37](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-need-for-web-performance-apis?u=76281980&t=97)** We are thinking that web performance is something static, that after we have applied techniques, we are done.
>
> **[1:45](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-need-for-web-performance-apis?u=76281980&t=105)** The problem is that the real web performance out there is based on users' contexts.
>
> **[1:50](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-need-for-web-performance-apis?u=76281980&t=110)** For example, the user may be on an iPhone X on a Wi-Fi connection, or it can be a laptop using 3G, there are laptops with cellular connections.
>
> **[2:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-need-for-web-performance-apis?u=76281980&t=120)** We can be a Moto G, an Android device, 4th generation, so let's say two to three years old, and it's currently on a bad LTE connection, so it's a 4G, but it's not working properly with that connection, because the user can be on a bath.
>
> **[2:15](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-need-for-web-performance-apis?u=76281980&t=135)** It can be a Google Pixel 3, so a very modern Android device, but it's on roaming, and it's on 2G, or it can be an Android Go, so, low CPU, low memory, but on 4G.
>
> **[2:27](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-need-for-web-performance-apis?u=76281980&t=147)** So, different contexts, and we still need to achieve all our goals, but it's not possible within a static analysis to get and achieve the same goals on every context.
>
> **[2:40](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-need-for-web-performance-apis?u=76281980&t=160)** So, we need something different.
>
> **[2:42](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-need-for-web-performance-apis?u=76281980&t=162)** We need to think about an approach that after we have deployed the website, we can measure directly on user devices, and make some decisions there, and change the experience.
>
> **[2:58](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-need-for-web-performance-apis?u=76281980&t=178)** Most of those measurements can change how we apply techniques later, statically, for a future version.
>
> **[3:07](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-need-for-web-performance-apis?u=76281980&t=187)** So, we need real user metrics, and for that, we're going to use client side JavaScript APIs.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), static (2)
> **CLI Commands:** make (3)
> **Env Vars:** lte (1), cpu (1)
> **Analogies:** for example (2)
> **Code Identifiers:** iphone (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)

#### Summary of what we can do
> [LinkedIn Learning](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/summary-of-what-we-can-do?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/summary-of-what-we-can-do?u=76281980&t=0)** - [Instructor] Let's see what we can do with client-side web performance APIs.
>
> **[0:05](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/summary-of-what-we-can-do?u=76281980&t=5)** First, we are going to cover a lot of APIs available in the browser.
>
> **[0:09](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/summary-of-what-we-can-do?u=76281980&t=9)** The information that we can get from those APIs sometimes can also be shared with our server.
>
> **[0:16](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/summary-of-what-we-can-do?u=76281980&t=16)** It can be shared automatically with a flag that we set somewhere in the browser, or it can be shared manually, such as sending that data using a fetch request or adding that data to HTTP headers manually on each fetch or using a service worker.
>
> **[0:34](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/summary-of-what-we-can-do?u=76281980&t=34)** As most of the APIs in the browser, compatibility is not the same on every version of every browser.
>
> **[0:42](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/summary-of-what-we-can-do?u=76281980&t=42)** So sometimes, we need to have fall backs to polyfills, other solutions, or even the stats.
>
> **[0:48](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/summary-of-what-we-can-do?u=76281980&t=48)** So if there is no way to gather some information from that user, at least we can get average stats from other user.
>
> **[0:56](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/summary-of-what-we-can-do?u=76281980&t=56)** Typically, today, we can measure all the timings for the current navigation.
>
> **[1:01](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/summary-of-what-we-can-do?u=76281980&t=61)** That means DNS, TCP connection, SSL, timings for HTTP request, and HTTP response for the main navigation documents through the HTML and also for each of the resources that we are currently using.
>
> **[1:18](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/summary-of-what-we-can-do?u=76281980&t=78)** So for example, in that case, we can see, we are loading resources from different CDNs which one is faster.
>
> **[1:24](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/summary-of-what-we-can-do?u=76281980&t=84)** Also, we can verify if the connection to our server is currently slow or having high latency.
>
> **[1:33](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/summary-of-what-we-can-do?u=76281980&t=93)** We can also check the type of connection that the device's operating system is exposing to our website.
>
> **[1:39](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/summary-of-what-we-can-do?u=76281980&t=99)** For example, if it's a cellular connection, we can know if it's 2G, 3G, or 4G.
>
> **[1:46](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/summary-of-what-we-can-do?u=76281980&t=106)** Also, we can get an estimated current bandwidth, download bandwidth, and also the latency, or round-trip time.
>
> **[1:55](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/summary-of-what-we-can-do?u=76281980&t=115)** The latency on cellular networks is even more important than the bandwidth because that latency is time that will be there no matter how big the file you're downloading is.
>
> **[2:06](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/summary-of-what-we-can-do?u=76281980&t=126)** And on cellular connections, latency, even in 4G, are 10 to 50 times bigger than when you are using at desktop connection.
>
> **[2:16](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/summary-of-what-we-can-do?u=76281980&t=136)** We can also get information about current device's memory, not just the available memory, but more important, the total memory of the device.
>
> **[2:25](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/summary-of-what-we-can-do?u=76281980&t=145)** With that information, we can guess which kind of device the user is actually using.
>
> **[2:31](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/summary-of-what-we-can-do?u=76281980&t=151)** For example, if it's a cheap Android phone or a high-end Android phone, if it's a tablet or desktop.
>
> **[2:39](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/summary-of-what-we-can-do?u=76281980&t=159)** We can also measure our own custom metrics so we can achieve our own goals.
>
> **[2:44](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/summary-of-what-we-can-do?u=76281980&t=164)** For example, if you have a website where the user is adding items to a shopping cart, we can measure the time to get an item into that shopping cart.
>
> **[2:56](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/summary-of-what-we-can-do?u=76281980&t=176)** That's a custom metric.
>
> **[2:58](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/summary-of-what-we-can-do?u=76281980&t=178)** Also, we can measure paint timings.
>
> **[3:01](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/summary-of-what-we-can-do?u=76281980&t=181)** For example, first paint or first meaningful paint so we can know exactly the time that has passed since the user has typed the URL, and the user has seen something meaningful on the screen.
>
> **[3:17](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/summary-of-what-we-can-do?u=76281980&t=197)** And finally, we can also detect on the fly CPU-intense operations, such as for that particular user and that particular CPU, that function that we have in our code is taking too much time.
>
> **[3:31](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/summary-of-what-we-can-do?u=76281980&t=211)** So we know it's a low CPU problem, and then, we can make a change on the fly to improve that user's experience.

> [!info]- Semantic Content
>
> **Env Vars:** http (3), cpu (3), dns (1), tcp (1), ssl (1)
> **Analogies:** for example (5), such as (2)
> **Code Keywords:** let (1), case, (1), finally, (1), function (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Real user monitoring (RUM) and reactive web performance
> [LinkedIn Learning](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=0)** - [Instructor] When we are working statically in our development environment to improve performance, we don't know exactly how well our users are accessing the website.
>
> **[0:10](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=10)** So our measurements are not real.
>
> **[0:13](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=13)** So that's why we can use real user monitoring solution, or RUM, that will basically gather information clients side from the browser to understand the current metrics of our user.
>
> **[0:29](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=29)** We can make analytics on that data.
>
> **[0:32](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=32)** We can improve the experience of every user based on that data.
>
> **[0:37](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=37)** And also we can prove and create that stats on our servers and local testing environments to create conditions for simulation that are closer to real ones.
>
> **[0:51](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=51)** And after, we gather some data, we can start applying some reactive web performance techniques.
>
> **[0:59](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=59)** In this case, the idea of reactive web performance is to be closer to our user centric goals on every situation, no matter what.
>
> **[1:09](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=69)** So if we want to show the user meaningful content in three seconds, we need to do that if the user is on desktop with a Wifi connection, if the user is on Galaxy S9, on 4G, and also if the user is on an IPhone SE over a bad 3G connection.
>
> **[1:31](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=91)** So we need to change the idea that we sometimes have as web developers, oh it's not my fault.
>
> **[1:38](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=98)** On my IPhone or Android, I'm in a big city, it's fast.
>
> **[1:43](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=103)** So I can't help the user if the user has an old Android device or if the user is in 2G.
>
> **[1:51](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=111)** We need to change that mind.
>
> **[1:53](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=113)** We need to think that the context is always changing.
>
> **[1:58](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=118)** So we need to change our mind from it's not my fault to let's do something about it.
>
> **[2:05](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=125)** Because I'm responsible for the user experience on my website.
>
> **[2:10](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=130)** So reactive web performance is a set of on the fly optimizations that we apply to keep a consistent user experience based on real user metrics.
>
> **[2:20](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=140)** So it's similar to the Netflix experience.
>
> **[2:22](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=142)** So if you're a Netflix user, when you're watching a TV show or a movie it's really difficult to see a buffering spinner, like an animation.
>
> **[2:33](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=153)** Typically when the connection changes Netflix is changing the quality of the content on the fly.
>
> **[2:39](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=159)** So we are going from a 4K streaming to an HD streaming or even to a lower resolution streaming if the connection is not working properly.
>
> **[2:49](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=169)** But the movie never stops.
>
> **[2:52](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=172)** To make it work, we are going to read current context with the APIs that we will cover during the rest of the course.
>
> **[2:58](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=178)** And then also listen to changes because we know the user is on the move and the connection status might change.
>
> **[3:05](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=185)** And then we can make decisions to keep the user experience consistent and fast, while upholding high quality if the context allows it.
>
> **[3:15](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=195)** So we can have a low resolution versus high resolution.
>
> **[3:18](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=198)** Not just two versions, we can have several versions.
>
> **[3:21](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=201)** We can inform the user of the situation.
>
> **[3:23](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=203)** For example, if we are in the low condition we can specify with a little bar or something like we are in a low resolution version.
>
> **[3:33](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=213)** And let the user change it.
>
> **[3:35](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=215)** Low resolution doesn't mean less powerful.
>
> **[3:38](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=218)** Be careful here.
>
> **[3:39](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=219)** So if it's a newspaper, I want to read the latest news.
>
> **[3:44](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=224)** No matter what.
>
> **[3:46](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=226)** So don't remove the news, just for example, send less amount of data or less resolution for the images.
>
> **[3:54](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=234)** Something that you can do is change how your providing web fonts.
>
> **[3:59](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=239)** Deliver low resolution images no matter the current device pixel radio.
>
> **[4:04](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=244)** So even if it's a 4K device but we know it's in 2G we're not going to send a 4K image.
>
> **[4:11](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=251)** So we can serve low quality videos as well.
>
> **[4:14](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=254)** We can not use HTTP/2 push to reduce bandwidth usage.
>
> **[4:19](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=259)** We can change how the service workers' cache policy working.
>
> **[4:23](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=263)** So we can prefer cached resources and reduce the updates when possible, so in that case we would go less to the network and increase the performance.
>
> **[4:34](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=274)** We can omit images that are not really data or important.
>
> **[4:39](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=279)** We can stop pre fetching files, because we don't want to waste the bandwidth.
>
> **[4:44](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=284)** And we can use a reduced amount of data that we load per page, because we want to show information as soon as possible.
>
> **[4:52](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/real-user-monitoring-rum-and-reactive-web-performance?u=76281980&t=292)** So let's reduce the amount of data that we load initially.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), case, (1)
> **CLI Commands:** make (3)
> **Analogies:** for example (2), similar to (1)
> **Env Vars:** rum (1), http (1)
> **Definitions:** is a  (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### Measure time
> [LinkedIn Learning](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measure-time?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measure-time?u=76281980&t=0)** - [Instructor] When we are working with time in JavaScript, typically we get the metrics with a timestamp.
>
> **[0:08](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measure-time?u=76281980&t=8)** For example, if we execute new Date ().getTime, we will get a timestamp.
>
> **[0:14](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measure-time?u=76281980&t=14)** That timestamp is expressed in a Unix format, also known as epoch.
>
> **[0:20](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measure-time?u=76281980&t=20)** But in this case, JavaScript, instead of using the standard Unix format that is expressed in seconds, it's using milliseconds.
>
> **[0:29](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measure-time?u=76281980&t=29)** So, it's basically the amount of milliseconds that have happened since January the 1st, 1970, at 00:00:00 UTC.
>
> **[0:44](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measure-time?u=76281980&t=44)** Probably you are thinking, what?
>
> **[0:47](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measure-time?u=76281980&t=47)** So if you have ever played with times in any language, probably you are used to these timestamps, or even databases, but it's a number that looks like this.
>
> **[0:57](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measure-time?u=76281980&t=57)** In this case, this particular number can be converted into, let's say, human readable dates in our Gregorian dates, and in that case, in this case, that number is October 21st, 2015 at 7:28.
>
> **[1:12](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measure-time?u=76281980&t=72)** So the problem is that why is this important?
>
> **[1:16](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measure-time?u=76281980&t=76)** Because yeah, we can convert a timestamp into real date, but the importance is not really the number, but how we can calculate distances between two timestamps.
>
> **[1:26](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measure-time?u=76281980&t=86)** So, if we have two timestamps, so we measure.
>
> **[1:29](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measure-time?u=76281980&t=89)** We do something.
>
> **[1:30](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measure-time?u=76281980&t=90)** We measure again.
>
> **[1:32](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measure-time?u=76281980&t=92)** We can subtract both values and get, in milliseconds, the time that has happened between both events.
>
> **[1:40](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measure-time?u=76281980&t=100)** So for example, if we have two events, and these are two timestamps, that will give us 190,000 milliseconds, which is 3.16 minutes.
>
> **[1:54](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measure-time?u=76281980&t=114)** So, maybe you are wondering that if you want to measure time of a process that we have, some code that we have, we can be doing something like this.
>
> **[2:04](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measure-time?u=76281980&t=124)** And I've been doing this like during the '90s.
>
> **[2:06](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measure-time?u=76281980&t=126)** When I started doing web development, I was measuring time with this.
>
> **[2:11](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measure-time?u=76281980&t=131)** The problem with this is that taking the calendar and creating a date will take time.
>
> **[2:17](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measure-time?u=76281980&t=137)** So we have the problem of the observer.
>
> **[2:20](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measure-time?u=76281980&t=140)** We are trying to measure something observing that something, and we are changing the observation.
>
> **[2:25](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measure-time?u=76281980&t=145)** So while for some processes this is okay, this is not good today.
>
> **[2:29](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measure-time?u=76281980&t=149)** So fortunately, modern browsers have a new API that is known as performance timing that we will get to later, that will let us use performance.now.
>
> **[2:41](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measure-time?u=76281980&t=161)** So performance, it's a global option available in these browsers, and they have a now property that in this case is not changing the observation.
>
> **[2:49](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measure-time?u=76281980&t=169)** So it's a low-level API.
>
> **[2:51](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measure-time?u=76281980&t=171)** So, we call performance.now, we save that as timing one.
>
> **[2:56](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measure-time?u=76281980&t=176)** We do some process.
>
> **[2:57](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measure-time?u=76281980&t=177)** We execute some synchronous code, and after that, we take another measurement with the same performance.now, and we calculate the difference.
>
> **[3:07](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measure-time?u=76281980&t=187)** But in this case, performance.now is not getting the milliseconds since 1970.
>
> **[3:15](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measure-time?u=76281980&t=195)** It's using zero as the moment in which a browser started the navigation to that page.
>
> **[3:21](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measure-time?u=76281980&t=201)** It's a relative time from when the user started the navigation, roughly.
>
> **[3:27](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measure-time?u=76281980&t=207)** On some browsers, we can check the timestamp of that zero moment with performance.timeOrigin.
>
> **[3:34](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measure-time?u=76281980&t=214)** And on other browsers, older browsers, we can use performance.timing.navigationStart, if we want to know the zero of performance.now.
>
> **[3:45](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measure-time?u=76281980&t=225)** So, basically, on a timeline where we have time, zero is January 1st, 1970.
>
> **[3:55](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measure-time?u=76281980&t=235)** And then we have when the navigation started, the exact moment might change per browser.
>
> **[4:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measure-time?u=76281980&t=240)** So we can get the difference with performance.timeOrigin, and then when we are doing performance.now, at any time that we want to measure something, it will be the distance from the zero at the top, so that's a new zero that we have, and that exact moment.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (5), this. (3), let (2)
> **Code Identifiers:** timeorigin (2), gettime (1), navigationstart (1)
> **Ports:** :00 (2), :28 (1)
> **Env Vars:** api (2), utc (1)
> **Definitions:** known as (2)
> **Analogies:** for example (2)
> **Versions:** 3.16 (1)
> **Speakers:** - [instructor] (1)

#### High-resolution timings
> [LinkedIn Learning](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/high-resolution-timings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/high-resolution-timings?u=76281980&t=0)** - [Instructor] When we are measuring performance in an web app or web site, sometimes having the resolution in milliseconds is not enough, because sometimes we have processes that are faster than one millisecond.
>
> **[0:14](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/high-resolution-timings?u=76281980&t=14)** So in JavaScript, the time that we are getting from these APIs, it's a number.
>
> **[0:21](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/high-resolution-timings?u=76281980&t=21)** So that's always a float value.
>
> **[0:23](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/high-resolution-timings?u=76281980&t=23)** But on most browsers, a few years ago we were always receiving an integer.
>
> **[0:29](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/high-resolution-timings?u=76281980&t=29)** So the W3C created a new spec to increase granularity on these performance APIs.
>
> **[0:36](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/high-resolution-timings?u=76281980&t=36)** It's known as High Resolution Time Stamps, and it's creating a new interface, a new data type for JavaScript known as DOMHighResTimeStamp.
>
> **[0:46](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/high-resolution-timings?u=76281980&t=46)** When you see a performance API returning a DOMHighResTimeStamp, now you know that's it's a high accuracy number.
>
> **[0:55](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/high-resolution-timings?u=76281980&t=55)** In this case, this API is increasing the accuracy of the unit to a thousandth of a millisecond, which is known as a microsecond.
>
> **[1:05](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/high-resolution-timings?u=76281980&t=65)** Typically browsers are exposing that granularity with a precision of five microseconds.
>
> **[1:14](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/high-resolution-timings?u=76281980&t=74)** So sometimes when you're getting a measurement, you will get the float value, so an integer value and also a fractional value.
>
> **[1:22](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/high-resolution-timings?u=76281980&t=82)** In this case, if we have this number, like 4523 .89, that means it's four seconds, 523 milliseconds, 890 microseconds.
>
> **[1:39](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/high-resolution-timings?u=76281980&t=99)** Maybe you have heard about Spectre and Meltdown.
>
> **[1:42](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/high-resolution-timings?u=76281980&t=102)** These are two security problems on modern CPUs, such as on the Intel CPUs.
>
> **[1:47](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/high-resolution-timings?u=76281980&t=107)** But it's also affecting mobile devices and tablets.
>
> **[1:51](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/high-resolution-timings?u=76281980&t=111)** So this problem is also affecting the web.
>
> **[1:54](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/high-resolution-timings?u=76281980&t=114)** There is also a vulnerability on the web known as a spy in the sandbox, which can let a hacker spy private data if they have access to high accuracy timers.
>
> **[2:06](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/high-resolution-timings?u=76281980&t=126)** That's exactly what we are discussing now.
>
> **[2:09](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/high-resolution-timings?u=76281980&t=129)** So that's why after these vulnerabilities appeared in the community, are changing how they are offering us these high accuracy information.
>
> **[2:22](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/high-resolution-timings?u=76281980&t=142)** So most browsers in latest versions have rounded the microseconds accuracy to different levels.
>
> **[2:30](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/high-resolution-timings?u=76281980&t=150)** Sometimes they're adding random noise, sometimes they are just changing the accuracy of the data that we are getting to reduce the impact of these vulnerabilities.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (2), interface (1), let (1), private (1)
> **Definitions:** known as (4)
> **Env Vars:** api (2), w3c (1)
> **Documentation:** w3c (1), spec (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 2. Performance Basics

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Navigation Timing Level 1
> [LinkedIn Learning](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-1?u=76281980&t=0)** - [Instructor] The first client side API that appeared on the web regarding web performance is Navigation Timing API.
>
> **[0:08](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-1?u=76281980&t=8)** This API is currently available on every browser including IE so Internet Explorer.
>
> **[0:15](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-1?u=76281980&t=15)** It's basically creating a global object with the name performance available in the window so that's inside normal java script context and it's also available in web workers.
>
> **[0:26](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-1?u=76281980&t=26)** The API is also the base for all the rest of measurement specs available.
>
> **[0:32](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-1?u=76281980&t=32)** So the interface that this API is offering to us will also be useful for other performance APIs.
>
> **[0:39](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-1?u=76281980&t=39)** The Navigation Timing API includes three basic functionalities the performance.now measurement system that we have already seen before.
>
> **[0:50](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-1?u=76281980&t=50)** Getting information about the current navigation type and also the most important part to get timings for the current navigation.
>
> **[0:59](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-1?u=76281980&t=59)** So let's start with the first two.
>
> **[1:02](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-1?u=76281980&t=62)** We have already seen that we can call performace.now at any time and in that case we will get a timestamp from what is known as the timeOrigin.
>
> **[1:12](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-1?u=76281980&t=72)** You can call and ask about the timeOrigin that is available on some browsers with performance.timeOrgin remember it's the amount of milliseconds and on some browsers it will also give you some microseconds precision based on the browser version.
>
> **[1:31](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-1?u=76281980&t=91)** There are two versions of the API level one and level two.
>
> **[1:36](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-1?u=76281980&t=96)** Level one is the version that is available on every browser and level two is the starting to appear in all the browser but is not yet on everyone.
>
> **[1:45](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-1?u=76281980&t=105)** So let's first talk about level one.
>
> **[1:47](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-1?u=76281980&t=107)** On level one for example we can get the amount of redirects that the user had to have in that particular navigation using performance.navigation.redirectCount.
>
> **[2:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-1?u=76281980&t=120)** So for example if you went to [Facebook.com](https://Facebook.com) from a mobile device and [Facebook.com](https://Facebook.com) redirected to m.[facebook.com](https://facebook.com) because you're on mobile browser in that case performance navigation rediectCount will give you one.
>
> **[2:15](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-1?u=76281980&t=135)** Because there was one redirect to get to that point.
>
> **[2:19](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-1?u=76281980&t=139)** Also we have available performance navigation type.
>
> **[2:23](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-1?u=76281980&t=143)** The value can be one of the following options type navigate and that means that it's a normal navigation.
>
> **[2:30](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-1?u=76281980&t=150)** So the user has typed the URL, the user has clicked on a link so the browser rendered that page.
>
> **[2:37](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-1?u=76281980&t=157)** It can be a reload navigation so that means the user has pressed reload so you can detect that using performance navigation type or it can be type back forward.
>
> **[2:48](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-1?u=76281980&t=168)** In that case it means that the user is on that page because of she has used the history of the browser pressing the back button or the forward button.

> [!info]- Semantic Content
>
> **Env Vars:** api (7), url (1)
> **Code Identifiers:** timeorigin (2), timeorgin (1), redirectcount (1), rediectcount (1)
> **Code Keywords:** let (2), interface (1), type. (1)
> **URLs:** [facebook.com](https://facebook.com) (3)
> **Definitions:** means that (2), known as (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### Understand timings available
> [LinkedIn Learning](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=0)** - [Instructor] With a navigation timing API, we can also get a list of timings.
>
> **[0:05](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=5)** And on Level One, we get those timings through performance.timings.
>
> **[0:11](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=11)** That will give us object with a lot of properties inside with timestamps.
>
> **[0:17](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=17)** These timestamps will be from January 1970.
>
> **[0:23](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=23)** So it looks like this.
>
> **[0:24](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=24)** So you can go now and open any website, open the console, and type performance.timing, and you will see an object that will have a lot of big numbers, like in this case, those are timestamps, using Unix timestamp in milliseconds.
>
> **[0:42](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=42)** Let's see each timing one-by-one.
>
> **[0:45](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=45)** When you start the navigation, I mean, you are going to a URL, the browser first fires a navigationStart.
>
> **[0:53](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=53)** NavigationStart doesn't mean yet the network.
>
> **[0:57](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=57)** In this case, it's doing some kind of preparations.
>
> **[0:59](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=59)** Preparations might be involved, for example, AppCache, that's a deprecated offline solution and also unloading previous pages or process a redirect.
>
> **[1:11](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=71)** In that case, you will see that, also, there are a couple of optional timings where you're going to see some information such as unloadEventStart, unloadEventEnd, redirectStart, and redirectEnd.
>
> **[1:24](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=84)** After that's done, now the browser is ready to start the actual fetch for the new page that you want to visit.
>
> **[1:34](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=94)** In that case, fetchStart is fired, so we will get the timing for fetchStart at that point.
>
> **[1:41](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=101)** After that, typically, we need a DNS query.
>
> **[1:45](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=105)** So in that case, we can get two timings through the performance timings collection, that's domainLookupStart and domainLookupEnd.
>
> **[1:54](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=114)** After DNS, we have TCP connection because now we have the IP address of the server, so we need to start the TCP connection, so there is a connectStart, but of course, will have its own connectEnd.
>
> **[2:08](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=128)** After opening the TCP on modern web development, the next step is typically go into HTTPs.
>
> **[2:17](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=137)** So, there is a need for a negotiation on SSL.
>
> **[2:22](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=142)** In that case, we have a secureConnectionStart, and for privacy reasons, we won't get information about secure connection and only the start.
>
> **[2:33](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=153)** After the handshaking of SSL, the clients or the browser is ready to send an HTTP request.
>
> **[2:42](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=162)** So here, a new timing appears known as requestStart.
>
> **[2:47](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=167)** The server will receive that request and will do something server-side.
>
> **[2:53](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=173)** In this case, because it's in the server, we can't see what's going on, so the next step from the client point of view is to actually see the response, which means the first byte from the server has appeared in the client.
>
> **[3:09](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=189)** Remember all these timings are just timestamps of numbers that we can use navigation timing API.
>
> **[3:16](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=196)** First the HTTP response, that's typically the HTML because we are loading a document.
>
> **[3:21](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=201)** ResponseEnd will mean that the browser has all the HTML in memory.
>
> **[3:27](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=207)** So it's time for the HTML parsing.
>
> **[3:30](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=210)** In this process, also the browser might be executing or downloading and executing blocking a script.
>
> **[3:36](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=216)** So if you have a JavaScript code in the middle of the HTML, and it's not the defer or async, then that execution will be part of this HTML parsing phase.
>
> **[3:48](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=228)** So downloading expire, and when it's done, we have domInteractive.
>
> **[3:53](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=233)** So domInteractive means that the DOM is ready, but the next step is to download and parse blocking CSS files, so the necessary CSS files surrendering the content.
>
> **[4:07](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=247)** Also, in some browsers, after domInteractive, there may be also some JavaScript that needs to be executed and blocking the rendering.
>
> **[4:16](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=256)** After the CSS and the JavaScript was already parsed, we have the well-known domContentLoadedEvent.
>
> **[4:24](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=264)** But in this case, we have two timings that we can listen to, domContentLoadedEventStart and domContentLoadedEventCompleted.
>
> **[4:34](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=274)** In the middle, we have our own document add event listener domContentLoaded.
>
> **[4:39](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=279)** So we can create our own script.
>
> **[4:42](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=282)** So in this case, we can measure the time of our own domContentLoaded script.
>
> **[4:48](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=288)** And finally, after that, the browser might be downloading images and other resources, and after everything was downloaded, parsed, and rendered, we have finally domComplete, that the final timing.
>
> **[5:02](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=302)** And after that, we have the JavaScript on loadEvent.
>
> **[5:05](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=305)** So we have loadEventStart and loadEventEnd.
>
> **[5:08](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=308)** So if we are handling the onload event, here, we can measure the time that we have there.
>
> **[5:15](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=315)** So these are all the timings available.
>
> **[5:18](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-timings-available?u=76281980&t=318)** The next step is to try to get some useful information from these timings.

> [!info]- Semantic Content
>
> **Code Identifiers:** dominteractive (3), fetchstart (2), domcontentloaded (2), navigationstart (1), unloadeventstart (1)
> **Env Vars:** html (5), tcp (3), css (3), api (2), dns (2)
> **Code Keywords:** case, (9), this. (1), let (1), async (1), finally, (1)
> **Definitions:** is a  (2), known as (1), means that (1)
> **Analogies:** for example (1), such as (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)

#### Calculate milestones in the timeline
> [LinkedIn Learning](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/calculate-milestones-in-the-timeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/calculate-milestones-in-the-timeline?u=76281980&t=0)** - [Instructor] We have already seen that in the navigation time in API we have a lot of performance entries or timings available.
>
> **[0:08](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/calculate-milestones-in-the-timeline?u=76281980&t=8)** While we can get information from each timing alone, it's important to try to analyze the information not just one by one but making some calculations between this navigation matrix.
>
> **[0:25](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/calculate-milestones-in-the-timeline?u=76281980&t=25)** For example if you want to know the time cue first byte so that is from when the request started to when the first byte came to the client.
>
> **[0:36](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/calculate-milestones-in-the-timeline?u=76281980&t=36)** We can take responseStart and fetchStart if we calculate the difference between both matrix we will know exactly the time that was necessary to receive the first byte.
>
> **[0:49](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/calculate-milestones-in-the-timeline?u=76281980&t=49)** There you will have DNS query times, you will have TCP latencies, SSL latency and your server time.
>
> **[0:59](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/calculate-milestones-in-the-timeline?u=76281980&t=59)** So when you have an infrastructure issue you might see that time to first byte is really big.
>
> **[1:07](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/calculate-milestones-in-the-timeline?u=76281980&t=67)** Typically we are looking for a time a time to first byte of around 600 milliseconds on an average connection.
>
> **[1:16](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/calculate-milestones-in-the-timeline?u=76281980&t=76)** Then we have the download part.
>
> **[1:19](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/calculate-milestones-in-the-timeline?u=76281980&t=79)** So here we are going to see the bandwidth of the user.
>
> **[1:22](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/calculate-milestones-in-the-timeline?u=76281980&t=82)** If we take response to start and response end we can know and calculate based on the size of the file we can calculate the speed of downloading that file over the downstream.
>
> **[1:36](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/calculate-milestones-in-the-timeline?u=76281980&t=96)** Other useful information that we can get is the domLoad time and that is taking the domInteractive and calculating the difference with fetchStart after the HTML is from the client we have parsing and rendering times and that is a web designers responsibility or web developers responsibility.
>
> **[1:57](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/calculate-milestones-in-the-timeline?u=76281980&t=117)** So if you want to know all the timings that have to do with the design phase for the rendering you need to calculate the difference between downloading and load event end.
>
> **[2:11](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/calculate-milestones-in-the-timeline?u=76281980&t=131)** And finally the total page load time is going to be domComplete minus fetchStart.
>
> **[2:17](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/calculate-milestones-in-the-timeline?u=76281980&t=137)** Of course you can make any combination here and take any value and calculate the difference with other value and for example then make a decision about that.
>
> **[2:29](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/calculate-milestones-in-the-timeline?u=76281980&t=149)** To see if the connection is good enough or not or you can also create analytics save the data on your server so then get some conclusions about your real user metrics.

> [!info]- Semantic Content
>
> **Code Identifiers:** fetchstart (3), responsestart (1), domload (1), dominteractive (1), domcomplete (1)
> **Env Vars:** api (1), dns (1), tcp (1), ssl (1), html (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### The Performance Timeline interface
> [LinkedIn Learning](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=0)** - [Instructor] All the APIs available in the browser for web performance are under the umbrella of the Web Performance Working Group.
>
> **[0:08](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=8)** This is a working group in the w3c that currently maintains different specs for web performance.
>
> **[0:14](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=14)** On the screen now, we are seeing some of the APIs available today for web performance.
>
> **[0:20](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=20)** Most of the APIs that we will cover in the rest of the videos.
>
> **[0:23](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=23)** And we can see that all of them are going to use the high-resolution time spec that we already covered, on something known as the performance timeline.
>
> **[0:33](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=33)** So, the performance timeline, it's a generic interface that we're going to use for all the API, including the navigation timing API version two.
>
> **[0:45](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=45)** So we also have resource timing, user timing, server timing and frame timing.
>
> **[0:50](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=50)** So, it's important that you understand first that generic performance timeline interface that later we will see for all the API.
>
> **[1:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=60)** So that interface, its also working over the performance property that we have already seen in the window object and also in worker's contexts.
>
> **[1:09](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=69)** But the difference with the original navigation timing API, is that we're not going to get objects with timings, we're going to ask collections about their entries.
>
> **[1:22](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=82)** Each entry is an object with a lot of metrics inside, or a lot of timings inside.
>
> **[1:28](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=88)** We can query entries using filters with a get entries method or we can get entries by name or by type.
>
> **[1:38](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=98)** A name, for example, can be the URL of an image that we are loading.
>
> **[1:42](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=102)** That's the name.
>
> **[1:44](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=104)** And then inside the type, we can use resource because it's an image resource.
>
> **[1:49](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=109)** We can also entries by time, for example I want to see all the entries, all the available metrics.
>
> **[1:56](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=116)** For example for, paint.
>
> **[1:58](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=118)** The available times are based on the APIs that the browser is supporting.
>
> **[2:03](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=123)** For example, using the navigation timing API level 2, we have the types navigation and frame.
>
> **[2:10](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=130)** Resource timing is giving us the resource type.
>
> **[2:14](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=134)** User timing mark and measure, and also we have the paint timing API using the type paint.
>
> **[2:22](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=142)** The types are just streams, using one of these values.
>
> **[2:27](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=147)** In the future, if more API for performance are available, there will be new types.
>
> **[2:35](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=155)** So for getting entries is pretty simple, you just execute performance, get entries by type, for example we can also search by name.
>
> **[2:45](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=165)** And then say I want to see all the navigation entries.
>
> **[2:49](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=169)** And that will give you always, an array.
>
> **[2:51](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=171)** Even if its one element, it will be an array, of one element.
>
> **[2:55](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=175)** And inside each element, we will have performance entry properties.
>
> **[3:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=180)** Each property will have a name, the entry type, the startTime, that's the timing, and the duration.
>
> **[3:08](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=188)** Duration, it depends, duration might not be available, in every entry, because it will give you information about that particular entry, and not every entry will have a start and an end.
>
> **[3:21](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=201)** Some entries are just mystone in the timeline.
>
> **[3:24](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=204)** And some entries are phases, when an entry is a phase, we will have information for duration.
>
> **[3:31](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=211)** We will know based on the type or on the name, if we should look in to startTime or duration, getEntries methods should be called after the events actually happened.
>
> **[3:44](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=224)** For example, you cannot read domcomplete timings before that actually happen.
>
> **[3:52](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=232)** So that's why there is a new version of the performance timeline spec.
>
> **[3:57](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=237)** So that's level two, but it's currently available on some browser.
>
> **[4:01](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=241)** And that version of the performance timeline API, will let us create observers.
>
> **[4:07](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=247)** The observers will be executed every time, there is new data in one particular entry type.
>
> **[4:14](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=254)** So a new measurement has been recorded.
>
> **[4:17](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=257)** So, this is really useful for prepare all measurement code, all our logic, beforehand.
>
> **[4:23](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=263)** Before the events actually happen, we set up what do we want to do, when that event is recorded in the performance timeline.
>
> **[4:31](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=271)** API is pretty simple, which has created a new performance observer. That observer will receive the list and then that list is a subset of all the entries avialable in the performance timeline.
>
> **[4:43](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=283)** only of the types that we are going to observe.
>
> **[4:46](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=286)** So we can get all the entries, with getEntries, or we can get getEntries by name or by type.
>
> **[4:52](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=292)** And then we select which types do we want to observe.
>
> **[4:56](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=296)** For example, I want to observe all the resources, every time a new resource that has been downloaded, such as an image.
>
> **[5:06](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=306)** Then the observer callback will be executed.
>
> **[5:09](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=309)** This is the basic ADI of performance observers, there are also some advanced functions.
>
> **[5:16](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=316)** But just to understand the basic idea of performance observers.
>
> **[5:19](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/the-performance-timeline-interface?u=76281980&t=319)** With this code, we can cover all the most important use cases.

> [!info]- Semantic Content
>
> **Code Keywords:** type. (4), interface (3), type, (3), for, (1), let (1)
> **Env Vars:** api (9), url (1), adi (1)
> **Analogies:** for example (7), such as (1)
> **Definitions:** is a  (4), known as (1), is an  (1)
> **Code Identifiers:** getentries (3), starttime (2)
> **Documentation:** spec (2), w3c (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Navigation Timing Level 2
> [LinkedIn Learning](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-2?u=76281980&t=0)** - [Instructor] We haven't really mentioned that the first API available for web performance was the Navigation Timing.
>
> **[0:07](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-2?u=76281980&t=7)** And at the time, there were no other ideas so they created this object-based API, pretty simple, that for example if you want to get all the timings you should just use performance.timings.
>
> **[0:19](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-2?u=76281980&t=19)** And if you want to get one particular timing of all the ones that we've seen before, you can just say for example performance.timing.domInteractive and that will give you the timestamp, the unique timestamp in milliseconds of that particular time.
>
> **[0:36](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-2?u=76281980&t=36)** But after that API, we've seen that the working group has created other ideas that we will cover in the next chapter and all of them are based on the same interface that we now know as the performance timeline API.
>
> **[0:53](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-2?u=76281980&t=53)** So that's why now we have a new version of the Navigation Timing API following the performance timeline spec.
>
> **[1:01](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-2?u=76281980&t=61)** And that's the level two.
>
> **[1:02](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-2?u=76281980&t=62)** In this case, the performance.timings object is deprecating, so it's still there but it's deprecating, we should stop using it for the future.
>
> **[1:12](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-2?u=76281980&t=72)** But for example some browsers today are still supporting only level one, that might change when you are watching this video.
>
> **[1:20](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-2?u=76281980&t=80)** We need to change that object with a getEntriesByType, and the type for the Navigation Timing API's going to be navigation.
>
> **[1:28](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-2?u=76281980&t=88)** It's just the string navigation.
>
> **[1:31](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-2?u=76281980&t=91)** We can also get frame that is useful when you are working with iframes.
>
> **[1:36](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-2?u=76281980&t=96)** After you get all the entries, you will receive in this case only one entry.
>
> **[1:41](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-2?u=76281980&t=101)** So that's why I'm using subzero.
>
> **[1:43](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-2?u=76281980&t=103)** Only one entry you will have, the name of that entry will be the URL of the current navigation.
>
> **[1:51](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-2?u=76281980&t=111)** And if you want to get one property, you just use dot and the name of the program, for example .domInteractive following the previous example.
>
> **[1:59](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-2?u=76281980&t=119)** And this is the Navigation Timing Level 2.
>
> **[2:02](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-2?u=76281980&t=122)** Also this new version of the Navigation Timing API is adding new entries to that option.
>
> **[2:09](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-2?u=76281980&t=129)** The first two options that we have are redirectCount and type, that are both being transferred from the old performance.navigation object that we have already seen before.
>
> **[2:21](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-2?u=76281980&t=141)** We also have nextHopProtocol, and that has to do to understand the protocol that is going to be used for the navigation.
>
> **[2:29](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-2?u=76281980&t=149)** For example, if it's HTP2 or Quick, we have a set of properties, a bit double of the same entry, so we're still using identities by types, a zero.
>
> **[2:39](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-2?u=76281980&t=159)** We have transferSize, encodedBodySize and decodedBodySize.
>
> **[2:44](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-2?u=76281980&t=164)** So, here is the deal.
>
> **[2:45](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-2?u=76281980&t=165)** If you're downloading an html file, typically it's zip, so transferSize, we have the information in bytes of the whole response, including headers.
>
> **[2:57](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-2?u=76281980&t=177)** EncodedBodySize was the transfer package without headers and decodedBodySize is the amount of bytes after it was decoded, so that means it was unzipped.
>
> **[3:14](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-2?u=76281980&t=194)** But it's not just zipped, because now you can also have brotli and other encoding algorithms.
>
> **[3:19](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-2?u=76281980&t=199)** So basically, we are talking about encoded and decoded.
>
> **[3:22](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-2?u=76281980&t=202)** And also, because now we have service workers, there is a new property known as workerStart.
>
> **[3:29](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-2?u=76281980&t=209)** In that case, workerStart will give us zero if there is no service worker.
>
> **[3:35](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/navigation-timing-level-2?u=76281980&t=215)** And if there is a service worker with a fetch event handler, then workerStart will give us a timestamp exactly before the fetch event in the service worker was fired.

> [!info]- Semantic Content
>
> **Code Identifiers:** workerstart (3), dominteractive (2), transfersize (2), decodedbodysize (2), getentriesbytype (1)
> **Env Vars:** api (7), url (1), htp2 (1)
> **Analogies:** for example (5)
> **Code Keywords:** case, (2), interface (1), type, (1)
> **Definitions:** is a  (2), known as (1)
> **Cross-References:** in the next (1)
> **Documentation:** spec (1)
> **Speakers:** - [instructor] (1)


### 3. Measure Performance

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Measuring our websites
> [LinkedIn Learning](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=0)** - [Instructor] It's time to use the performance APIs in our project.
>
> **[0:05](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=5)** So if you have a website, you can add the usage of these APIs, measure, monitor from your server, and create real user metrics.
>
> **[0:17](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=17)** And to see this in action, we are going to open this in a server.
>
> **[0:21](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=21)** I'm going to use a Node.js-based server, but any server will work.
>
> **[0:26](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=26)** In this case, I already have Node.js installed.
>
> **[0:29](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=29)** I'm in a Mac, so I'm going to request root permission.
>
> **[0:33](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=33)** If you are in Windows, you don't need to add sudo, npm install -g serve.
>
> **[0:43](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=43)** This is going to install a very simple web server.
>
> **[0:48](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=48)** Now that it's done, I'm going to type serve, dot, that's the current folder.
>
> **[0:55](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=55)** And it will open then my current project in localhost:5000.
>
> **[1:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=60)** And this is our project.
>
> **[1:02](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=62)** It's Explore California, it's a website.
>
> **[1:05](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=65)** It has some API calls here.
>
> **[1:06](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=66)** So if I re-load, you can see that the weather is coming through some AJAX code through a web service.
>
> **[1:13](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=73)** And we're going to our web performance API support for this.
>
> **[1:17](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=77)** So I'm going to the code now.
>
> **[1:19](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=79)** I'm going to open app.js, that is currently empty.
>
> **[1:23](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=83)** So here, we are going to add some logic so we can start doing some logs on performance data.
>
> **[1:29](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=89)** So I'm going to create a function.
>
> **[1:31](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=91)** Let's call this function perf.
>
> **[1:34](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=94)** That we receive information that we will later send to the server.
>
> **[1:39](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=99)** Right now we are going to just log the information in the console.
>
> **[1:42](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=102)** We're going to see the type of measurement that we are receiving, the name and some data that we want to show.
>
> **[1:52](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=112)** Later, we are going to send the data to a server.
>
> **[1:58](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=118)** That's not the purpose of this course.
>
> **[1:59](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=119)** We are going to learn the API, first.
>
> **[2:02](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=122)** So for now we are just going to do a console.log.
>
> **[2:05](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=125)** I'm going to use a special version of console.log that will let us have several colors.
>
> **[2:12](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=132)** So I'm going to use a template script with a backtick ES6.
>
> **[2:16](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=136)** And I'm going to say percentage c.
>
> **[2:19](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=139)** That means here I'm going to apply one string with one css style.
>
> **[2:24](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=144)** So I'm going to take the type, the type that we are receiving as an argument.
>
> **[2:29](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=149)** Then we can add the color here, another percentage c, so another css declaration for that, the name, and then we are going to select, for example, a pipe and another variable here that is going to be the data.
>
> **[2:47](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=167)** And I need to set three css declarations.
>
> **[2:50](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=170)** So for example, we can say that I want the color to be red; for the second one I want the color to be green;
>
> **[3:04](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=184)** and for the fourth one, the color will be silver.
>
> **[3:09](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=189)** This is just a special console.log so we can see three different values in three different colors in one line.
>
> **[3:14](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=194)** And now to see if this is working, we can start listening to the onload event.
>
> **[3:25](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=205)** And just to see if this is working, we are going to call our perf function, and we are going to say this is the onload, event, no data.
>
> **[3:37](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=217)** Also for the data, we can make it optional.
>
> **[3:39](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=219)** So if there is no data that we want to show here, we can verify the data is there, if not, we are going to use just an empty string, like that.
>
> **[3:49](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=229)** Let's see this in action.
>
> **[3:51](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=231)** We're going to refresh.
>
> **[3:53](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=233)** And we're going to open the Tools in the console.
>
> **[3:55](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=235)** If you are using Chrome, it's in the menu, More Tools, Developer Tools.
>
> **[4:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=240)** On different browsers, it's in a similar place.
>
> **[4:02](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=242)** And here, we can see that our logger is currently working.
>
> **[4:07](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=247)** Now it's time to add more information here.
>
> **[4:11](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/measuring-our-websites?u=76281980&t=251)** So for example, we are going to start working with the navigation timing API.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), let (3), case, (1), this. (1), type, (1)
> **Env Vars:** api (4), ajax (1), es6 (1)
> **CLI Commands:** node (2), sudo (1), npm (1), make (1)
> **File Paths:** node.js (2), app.js (1)
> **Analogies:** for example (3)
> **UI Navigation:** open the (1), in the menu (1)
> **Prerequisites:** install (2)
> **URLs:** [localhost:5000](https://localhost:5000) (1)

#### Add the Navigation Timing API
> [LinkedIn Learning](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=0)** - [Narrator] Continuing with the project, it's time to replace our on-low handler here with the navigation time in API we're going to start using navigation time in API version 2 and then we will make a fall back.
>
> **[0:14](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=14)** So for that, we need tracks their performance object and there, we need to get entries.
>
> **[0:21](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=21)** In this case, by type.
>
> **[0:22](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=22)** We're going to ask for, the type navigation we don't have frames here, so we don't need to add for frame And that will give us a list of entries, so let's create navigation entries.
>
> **[0:37](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=37)** Let's create the constant for that, and then we're going to take those entries, and make a loop.
>
> **[0:42](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=42)** So we're going to check every entry, and for every entry there, we're going to do something.
>
> **[0:49](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=49)** In this case, there is only one entry usually for navigation, or no entries at all.
>
> **[0:56](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=56)** So I can show access sub zero if tail for each and just in case let's other for each.
>
> **[1:02](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=62)** And if it's zero, it's probably because it doesn't have the second version of the API.
>
> **[1:08](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=68)** So once we are here, what we're going to do is send a perf message, so we're going to log something in our logger.
>
> **[1:17](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=77)** And we're going to, for example, say, that this is a navigation. That's the type.
>
> **[1:24](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=84)** The name of the property we want to show.
>
> **[1:26](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=86)** We can show anything that we have here, for example, we can take fetch-start, and we're going to take the entry, and we're going to take fetch.Start.
>
> **[1:40](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=100)** So here in this entry, we have all the objects that we have seen for the navigation type in API.
>
> **[1:48](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=108)** Going back here, we can refresh and now we can see we have navigation fetch start 1.69.
>
> **[1:55](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=115)** So, that's basically milliseconds.
>
> **[1:58](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=118)** Remember that when we have decimal values, we are talking that microseconds value .
>
> **[2:03](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=123)** What we can do now, is that if we have the data here we can also add millisecond. For example, like ms, or we can render other things as well.
>
> **[2:15](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=135)** Now that we have fetch start, let's do something more interesting.
>
> **[2:18](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=138)** For example, we can try to calculate the time to first byte.
>
> **[2:24](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=144)** That's the calculation that we have already seen.
>
> **[2:26](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=146)** And for that, we're going to take the responseStart, and we're going to say minus fetchStart.
>
> **[2:36](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=156)** So now we can also say navigation, time to first byte, and we're going to take time to first byte.
>
> **[2:47](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=167)** So, we refresh, and now we have the information properly there.
>
> **[2:52](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=172)** What we can here is we can round the value, so we are going get rid of the microseconds value.
>
> **[3:02](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=182)** And we also have, ms, like that.
>
> **[3:09](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=189)** So now, we can see that we have a fetchStart and also time to first byte is two milliseconds.
>
> **[3:15](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=195)** That's because, we are pretty quick, we are loading this locally.
>
> **[3:18](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=198)** What we can do is, instead of using Chrome, that not available in every browser, you can open the console drawer from the menu.
>
> **[3:27](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=207)** And in the console drawer, you can click on network conditions.
>
> **[3:32](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=212)** And there we can specify that we want to throttle the network.
>
> **[3:36](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=216)** And we can enable it Fast 3G, so now it's simulating a 3G connection. So you can see that the time to first byte is bigger and a Slow 3G connection that is even bigger.
>
> **[3:49](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=229)** Something that we can do, instead of silver here, let's change it with gray.
>
> **[3:54](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=234)** Now, we can feel the pain there is slow like that.
>
> **[3:57](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=237)** And now, let's go back to online.
>
> **[4:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=240)** Now let's talk about old versions.
>
> **[4:02](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=242)** So if navEntries if the lengths is zero, then it means the the API is not there.
>
> **[4:16](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=256)** The new version of API.
>
> **[4:18](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=258)** So what we can do is, we can use the old version, let's say, this is now replicated.
>
> **[4:25](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=265)** But is currently the only one available in some browsers, instead of entry here, we are going to just say performance.timing.fetchStart That's the old version of the spec. There we are.
>
> **[4:39](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=279)** We're not going to see a difference here.
>
> **[4:42](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=282)** So, that's all for the navigation timing in API.
>
> **[4:45](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-the-navigation-timing-api?u=76281980&t=285)** If you want to support a very old browsers, like IE, in this case, getEntriesByType will not be available, so you can also check if getEntriesByType is available in performance and this case, you can also go and do a fallback like as we did before.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), case, (4), type. (2), for, (1)
> **Code Identifiers:** fetchstart (3), getentriesbytype (2), responsestart (1), naventries (1)
> **Env Vars:** api (7)
> **Analogies:** for example (4)
> **CLI Commands:** make (2)
> **Versions:** version 2 (1), 1.69 (1)
> **Cross-References:** go back to (1)
> **Documentation:** spec (1)

#### Use the Resource Timing API
> [LinkedIn Learning](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980&t=0)** - [Instructor] Do you remember that we saw this diagram with all the available timings for a document load?
>
> **[0:07](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980&t=7)** What happens with each resource, each JavaScript file, CSS file, webfont, image, SVG, or any document that you are loading?
>
> **[0:19](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980&t=19)** We do have an additional API known as Resource Timing API, and in this case, we have a simplified version of the diagram because there is no HTML, there is no parsing, where we can also get the information per resource.
>
> **[0:35](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980&t=35)** So let's see this in action.
>
> **[0:38](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980&t=38)** Now going back to the code, you can load 03_03 > Begin from the Exercise Files and after we have already played with the Navigation Timing API, we are going to add, after that, Resource Timing API.
>
> **[0:56](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980&t=56)** So the Resource Timing API is pretty simple.
>
> **[1:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980&t=60)** We also have to get the entries, so let's call this resEntries from resources.
>
> **[1:07](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980&t=67)** And in this case, we are going to getEntriesByType and the type's going to be resource.
>
> **[1:12](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980&t=72)** And here, we need to go through all the entries, so I'm going to use forEach, entry, similar to what we did before.
>
> **[1:24](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980&t=84)** I'm going to say, in this case, it's a resource.
>
> **[1:26](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980&t=86)** Instead of resource, I can also get a type.
>
> **[1:30](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980&t=90)** So if it's a CSS, if it's an image, from the entry, with a property known as initiatorType.
>
> **[1:39](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980&t=99)** Like that.
>
> **[1:41](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980&t=101)** Then we can take the name of the entry.
>
> **[1:44](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980&t=104)** The name is going to be the URL of the resource that is being loaded.
>
> **[1:48](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980&t=108)** So if we want to get information about one particular resource, we can also use getEntriesByName and try to find the URL of the entry that we are interested in.
>
> **[2:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980&t=120)** For example, if you have a CDN, we are loading a file from a CDN, we can check network status and network bandwidth and latency with that CDN.
>
> **[2:10](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980&t=130)** And for example, for the resource, we can also take all the timings, but I'm going to take the size.
>
> **[2:17](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980&t=137)** If you remember, we have available the size of each navigation, including resources.
>
> **[2:25](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980&t=145)** So I'm going to create the size, and it's going to be an int temp string that will take from the entry the encodedBodySize.
>
> **[2:36](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980&t=156)** So that's the actual transfer file.
>
> **[2:39](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980&t=159)** If you want the real file, you can use decodedBodySize.
>
> **[2:43](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980&t=163)** And I'm going to divide it by 1024, so we can get the value in kilobytes.
>
> **[2:51](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980&t=171)** And when I'm here, I'm also going to parse this as an integer, or I can round it.
>
> **[3:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980&t=180)** So we can get the real value.
>
> **[3:02](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980&t=182)** We can also take the the time to first byte and it's going to be the same as we did with the Navigation Timing API with the main document.
>
> **[3:16](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980&t=196)** I'm going to send that time to first byte here as well.
>
> **[3:19](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980&t=199)** So now we have a fourth argument for the size.
>
> **[3:22](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980&t=202)** So let's go back at the top and we can add, in this case, options.
>
> **[3:28](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980&t=208)** So we can add the fourth character here in the console that will take the optional options.
>
> **[3:36](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980&t=216)** And we can use in this case, lightblue, or something like that for that one.
>
> **[3:45](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980&t=225)** So now let's go to the browser.
>
> **[3:47](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980&t=227)** I'm going to refresh and there we are.
>
> **[3:51](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980&t=231)** So we have an undefined there at the top.
>
> **[3:54](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980&t=234)** We can solve the problem here like verifying if option is there, we can add an optional value for the argument because this is ES6.
>
> **[4:06](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980&t=246)** There we are.
>
> **[4:08](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980&t=248)** So now we can see that, in this case, we have two CSS files that are being loaded through a link type.
>
> **[4:15](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980&t=255)** Then we have a script type, video type, img type, and also fonts that are being loaded by CSS.
>
> **[4:21](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980&t=261)** And we can see the actual transfer size of that file.
>
> **[4:26](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980&t=266)** Remember in the case of CSS and JavaScript, they are being compressed.
>
> **[4:31](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980&t=271)** So that's how you use Resource Timing API.
>
> **[4:34](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/use-the-resource-timing-api?u=76281980&t=274)** You just loop through all the entries and then you can get all the navigation timing information that is available for the document, but in this case, for resource.

> [!info]- Semantic Content
>
> **Env Vars:** api (7), css (5), cdn (3), url (2), svg (1)
> **Code Keywords:** case, (7), let (4), type, (3), type. (2)
> **Code Identifiers:** resentries (1), getentriesbytype (1), foreach (1), initiatortype (1), getentriesbyname (1)
> **Analogies:** for example (2), similar to (1)
> **Definitions:** known as (2)
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)

#### Create custom user timing
> [LinkedIn Learning](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/create-custom-user-timing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/create-custom-user-timing?u=76281980&t=0)** - [Instructor] So far, we are measuring the main navigation load, as well as information about each of all our resources, but sometimes, we want to measure a specific things that are up to our app, they are not available on other apps.
>
> **[0:15](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/create-custom-user-timing?u=76281980&t=15)** For example, in this case, the weather.
>
> **[0:18](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/create-custom-user-timing?u=76281980&t=18)** Let's open, again, the console drawer from the menu and enable the network throttling.
>
> **[0:23](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/create-custom-user-timing?u=76281980&t=23)** If I go to Fast 3G and reload, pay attention to the weather information.
>
> **[0:32](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/create-custom-user-timing?u=76281980&t=32)** That way, information takes some time, because it goes into an API, and that API, it's asynchronous, so it might take time.
>
> **[0:42](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/create-custom-user-timing?u=76281980&t=42)** So, how can we measure that time?
>
> **[0:44](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/create-custom-user-timing?u=76281980&t=44)** For that situation, we have another aspect known as user timing API.
>
> **[0:51](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/create-custom-user-timing?u=76281980&t=51)** With user timing API, we can create our own marks in the timeline, that then, we can read, with the same performance time on API that we're used to, such as getEntriesByType.
>
> **[1:03](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/create-custom-user-timing?u=76281980&t=63)** Going back to the code, the first step is to do the marks.
>
> **[1:09](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/create-custom-user-timing?u=76281980&t=69)** In our case, we have a weather.js file in the project that is making a lot of fetches to an API reading the information from three figures.
>
> **[1:21](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/create-custom-user-timing?u=76281980&t=81)** So, that Promise.all is executing those requests to the server, so before doing that, before actually executing this, we can make a mark, and we do a mark, with the user time in API, with performance.mark.
>
> **[1:37](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/create-custom-user-timing?u=76281980&t=97)** It's pretty simple, easy to remember.
>
> **[1:40](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/create-custom-user-timing?u=76281980&t=100)** Mark receives just a name, for example, we can say, weatherStart.
>
> **[1:46](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/create-custom-user-timing?u=76281980&t=106)** It's just my custom name, and then we need to mark the rest, this case, because it's Promise.all, Promise.all will execute the .then with all the promises in this case, with all the weathers are coming, so we can also do performance.mark weatherEnd.
>
> **[2:06](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/create-custom-user-timing?u=76281980&t=126)** So, we already set those marks.
>
> **[2:10](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/create-custom-user-timing?u=76281980&t=130)** Going back to app.js, it's time to also read for these marks, and we can read them with another type, but it's not navigation, it's not resource, in this case, it's mark.
>
> **[2:23](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/create-custom-user-timing?u=76281980&t=143)** If we are doing this in the low event, maybe, the weather is not ready yet, so maybe, we will get no entries.
>
> **[2:32](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/create-custom-user-timing?u=76281980&t=152)** So, in this case, we need to use the performance of server pattern that we have seen before.
>
> **[2:39](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/create-custom-user-timing?u=76281980&t=159)** So, we need to create a performance observer for user timing, and for that, we are going to do this.
>
> **[2:47](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/create-custom-user-timing?u=76281980&t=167)** We are going to create, for example, a userObserver.
>
> **[2:51](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/create-custom-user-timing?u=76281980&t=171)** It's a new PerformanceObserver, and the constructor receives a callback to a function, but we receive the list of entries, and after that, we are going to observe, and we need to set some options, including the entryTypes.
>
> **[3:10](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/create-custom-user-timing?u=76281980&t=190)** There is an array, a service and array, of all the types that you want to listen to.
>
> **[3:15](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/create-custom-user-timing?u=76281980&t=195)** For example, in this case, I want to listen for the mark types, so every time there is a change in that entry list, it will execute the callback.
>
> **[3:26](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/create-custom-user-timing?u=76281980&t=206)** So, in this case, we're going to pick the list, and we're going to get entries, all of them, and we're going to log those entries in our system.
>
> **[3:39](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/create-custom-user-timing?u=76281980&t=219)** So, in this case, we're going to say that it's a mark or, let's take the entry type directly from the property, entry.entryType, then we have a name, for example, we can specify for the name, entry.name, and finally, entry dot, and here we have, startTime, for example, at what time is the timestamp that mark has happened in the timeline.
>
> **[4:14](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/create-custom-user-timing?u=76281980&t=254)** So, if I save this, go to the browser, and refresh, we can see, now, the mark weatherStart and the time, and weatherEnd, with the time.
>
> **[4:28](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/create-custom-user-timing?u=76281980&t=268)** Every time you make a change in the JavaScript file, remember that if you're using a server, there's cache in file, you can use shift reload, so you make sure you have the latest version of the JavaScript file.
>
> **[4:40](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/create-custom-user-timing?u=76281980&t=280)** With a user timing API, you can also create measures, and the measure is pretty simple.
>
> **[4:47](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/create-custom-user-timing?u=76281980&t=287)** In this case, because we have start and end, after the end, we can ask the performance API to measure, and we're going to measure weather, and we're going to say that the start mark is weatherStart, and weatherEnd is the end, so it will just make the difference, and it will call it weather, and it will be a measure.
>
> **[5:10](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/create-custom-user-timing?u=76281980&t=310)** So, basically, it's another entry type, so now we can listen for measure and marks, or just one, or both.
>
> **[5:18](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/create-custom-user-timing?u=76281980&t=318)** So finally, going back here and reloading, we have weatherStart, weatherEnd, and weather, that is the difference between both values.
>
> **[5:27](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/create-custom-user-timing?u=76281980&t=327)** Now, going back to the code, we need to think that, when we have the measure, we shouldn't use the start time to show on the screen, we should use the other property, that's duration, but for mark, we should use the other one so we can check if the entryType is mark, we are going to use entry.startTime.
>
> **[5:51](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/create-custom-user-timing?u=76281980&t=351)** If not, entry.duration, let's go to a new line.
>
> **[5:55](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/create-custom-user-timing?u=76281980&t=355)** Like that, and mark is in a string, and now if we go back to the browser, now we can see that the information is actually making sense.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (10), let (3), this, (2), type, (2), finally, (2)
> **Code Identifiers:** weatherstart (4), weatherend (4), entrytype (2), starttime (2), getentriesbytype (1)
> **Env Vars:** api (9)
> **Analogies:** for example (6), such as (1)
> **CLI Commands:** make (4)
> **UI Navigation:** go to (3)
> **Definitions:** known as (1), is an  (1), is a  (1)
> **File Paths:** weather.js (1), app.js (1)

#### Get paint timing
> [LinkedIn Learning](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=0)** - [Narrator] At the beginning of the course we mentioned that, we do have now new metrics to measure web performance.
>
> **[0:07](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=7)** Such as thirst meaning full paint.
>
> **[0:09](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=9)** But how can we measure that in the browser for our real users.
>
> **[0:16](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=16)** There is a new API on top of the performance API that is not yet available on every browser.
>
> **[0:22](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=22)** It has started in chrome, we just call the Paint Timing API.
>
> **[0:26](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=26)** Its as good idea to use it with performance observers and not directly with get entries like type, because we don't know when that will happen.
>
> **[0:35](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=35)** So this is then the Paint Timing API.
>
> **[0:40](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=40)** Am going to create an observer for it.
>
> **[0:43](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=43)** So its going to be the paint observer, new performance observer the same as before.
>
> **[0:50](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=50)** That we'll receive a list.
>
> **[0:54](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=54)** That's an error function.
>
> **[0:55](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=55)** And then we are going to observe for the entrytypes that its paint.
>
> **[1:02](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=62)** Here we might have a problem.
>
> **[1:05](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=65)** Because if you try to observe of an invalid entrytype for example, in the browsers there is not compatible with that API, this will throw an exception.
>
> **[1:16](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=76)** So when you know that might not be there its a good idea to rub this in tri catch, so that we can be sure.
>
> **[1:28](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=88)** In this case we know Paint API not available.
>
> **[1:34](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=94)** Its a Paint Timing API.
>
> **[1:38](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=98)** And here in the performer observer we can also get all the entries to they their speck has two entries with specific names.
>
> **[1:47](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=107)** So instead of looping through all the entries we can get one by one by name.
>
> **[1:52](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=112)** One its known as the First Paint, so we are going to say First Paint.
>
> **[1:57](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=117)** First Paint happens in the timeline when one pixel appears on the screen.
>
> **[2:03](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=123)** Maybe its a line maybe its one pixel really.
>
> **[2:07](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=127)** So we are going to then take the list, an we are going to get entries by name.
>
> **[2:12](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=132)** And the name is exactly First dash paint that's the name in the speck.
>
> **[2:16](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=136)** The entry will have that name.
>
> **[2:18](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=138)** So just in case we are going to check if it does exist.
>
> **[2:25](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=145)** Remember that this is an array, we can check that the length its greater than zero and if that's the case then we are going to log, in this case the entrytype.
>
> **[2:38](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=158)** its paint, the name is going to be First Paint and we are going to take from First Paint sub zero remember that get entries always gives you an array dot start time.
>
> **[2:56](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=176)** And beside First Paint we also have First Contentful Paint So I will select the three lines, copy and paste and we have First Contentful Paint and lets call this First Contentful Paint.
>
> **[3:13](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=193)** And replace all the preferences.
>
> **[3:16](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=196)** Do I need to add all the contentful here as well?
>
> **[3:19](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=199)** So what's the difference between First Paint and First Contentful Paint.
>
> **[3:23](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=203)** First Paint is just one pixel one line one background color.
>
> **[3:27](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=207)** And First Contentful Paint means there is actually something contentful.
>
> **[3:32](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=212)** It can be texts it can be an image.
>
> **[3:35](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=215)** So its something that the users brain is going to path.
>
> **[3:39](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=219)** So that's the difference.
>
> **[3:40](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=220)** So now for example, you can take this value and verify if its within the goal that you have set for your performance goals.
>
> **[3:51](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=231)** And if not then you can do something about that such as send you a message, log in somewhere or even change how you are rendering the page so it will become faster from now on.
>
> **[4:05](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=245)** So lets try to see this in action in the browser.
>
> **[4:09](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=249)** So am in the browser and refreshing and here we can see that First Paint and First Contentful Paint both are happening at 59 milliseconds right now.
>
> **[4:20](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=260)** Because its a very simple website that is served from a local server.
>
> **[4:25](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=265)** So that's the Paint Timing API.
>
> **[4:27](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/get-paint-timing?u=76281980&t=267)** Just remember its not yet available on every browser.

> [!info]- Semantic Content
>
> **Env Vars:** api (8)
> **Code Keywords:** type, (1), function (1), throw (1), catch, (1)
> **Analogies:** such as (2), for example (2)
> **Definitions:** is a  (1), known as (1), is an  (1)
> **Cross-References:** we mentioned (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [narrator] (1)

#### Detect long tasks
> [LinkedIn Learning](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-long-tasks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-long-tasks?u=76281980&t=0)** - [Narrator] A recent addition to the performance family is the Long Task API.
>
> **[0:07](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-long-tasks?u=76281980&t=7)** The long task API will let us detect when we have some code that is taking the thread for too much time, so it's a long task.
>
> **[0:18](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-long-tasks?u=76281980&t=18)** And we should do something different, such as using a web worker, or changing the algorithm.
>
> **[0:25](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-long-tasks?u=76281980&t=25)** That's not available in every browser today.
>
> **[0:27](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-long-tasks?u=76281980&t=27)** In fact it's fairly experimental.
>
> **[0:29](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-long-tasks?u=76281980&t=29)** So we need to do something similar to paint timing.
>
> **[0:33](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-long-tasks?u=76281980&t=33)** This is the long task API, we also need an observer in this case, it's mandatory to have an observer.
>
> **[0:42](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-long-tasks?u=76281980&t=42)** We going to create the long task observer.
>
> **[0:46](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-long-tasks?u=76281980&t=46)** It's a new performance observer that we receive a list and we're going to first try to observe on that observer and in this case, the entry type is Longtask, one word.
>
> **[1:15](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-long-tasks?u=76281980&t=75)** We need the catch, and we're going to observe here for now.
>
> **[1:21](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-long-tasks?u=76281980&t=81)** We will just get the entries, all of them and for each entry, we're going to execute the very simple code that we'll call Perf, and we'll say Longtask and for the name, we're going to specify, Thread used for too long.
>
> **[1:45](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-long-tasks?u=76281980&t=105)** (mumbles) If I go to the browser and refresh, it's difficult to find this in action if I don't have a lot of transcript.
>
> **[1:56](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-long-tasks?u=76281980&t=116)** Let's make a barcode just to prove that the API is working, I will go to my index html and anywhere, for example at the bottom I will line a script tag.
>
> **[2:10](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-long-tasks?u=76281980&t=130)** Then I'm going to create the code that I will execute every, for example, three seconds.
>
> **[2:17](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-long-tasks?u=76281980&t=137)** So it's a set interval every three seconds I'm going to do something here.
>
> **[2:23](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-long-tasks?u=76281980&t=143)** And what I'm going to do it I'm going to first take a measurement and then create a, while, that will ask for a new measurement be less than begin plus 500, so 500 milliseconds.
>
> **[2:48](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-long-tasks?u=76281980&t=168)** So as this, while, is doing nothing for 1/2 a second basically.
>
> **[2:53](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-long-tasks?u=76281980&t=173)** Every three seconds, I'm keeping in the, while.
>
> **[2:57](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-long-tasks?u=76281980&t=177)** It's like an infinite loop but it's not infinite because it will just take five seconds of looping into the nothing, into the body and that's taking the thread for 1/2 a second.
>
> **[3:07](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-long-tasks?u=76281980&t=187)** Okay, so it's very bad, but now because we are measuring that, we are observing the long task we can know that that's happening and we can send a message to our server so we can solve the problem in the future.
>
> **[3:22](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-long-tasks?u=76281980&t=202)** I'm going back here, I'm going to reload and after three seconds we can see the message and we can see the message appearing and appearing again because every three seconds it's taking the thread for too long.
>
> **[3:38](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-long-tasks?u=76281980&t=218)** This is currently available on Chrome and it's probably going to appear in other browsers in the future.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case, (2), while, (2), catch, (1), this, (1)
> **Analogies:** for example (2), such as (1), similar to (1), it's like (1)
> **Env Vars:** api (4)
> **CLI Commands:** find (1), make (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [narrator] (1)

#### Detect frame rate drops
> [LinkedIn Learning](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-frame-rate-drops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-frame-rate-drops?u=76281980&t=0)** - [Instructor] I'm back in the project, in this case, in 03_07, Begin, and we have already talked about Long Task API and there is a new one coming, but it's not yet available at the time of shooting this video in any browser.
>
> **[0:16](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-frame-rate-drops?u=76281980&t=16)** But, it's in development in Chrome and many others.
>
> **[0:21](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-frame-rate-drops?u=76281980&t=21)** There isn't a standard in W3C so it will be available.
>
> **[0:24](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-frame-rate-drops?u=76281980&t=24)** It's called the Frame Timing API.
>
> **[0:29](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-frame-rate-drops?u=76281980&t=29)** That API will let us detect frame rate drops.
>
> **[0:34](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-frame-rate-drops?u=76281980&t=34)** So we know that to create a consistent animation, typically we want to have 60 frames per second.
>
> **[0:40](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-frame-rate-drops?u=76281980&t=40)** And sometimes our transcript code, or too many CSS styles will harm that frame break.
>
> **[0:47](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-frame-rate-drops?u=76281980&t=47)** While the browsers will start warning us when we are dropping a frame, so we are not consistently providing 60 frames per second.
>
> **[0:58](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-frame-rate-drops?u=76281980&t=58)** This works very similar to Long Task API, so we need to create in this case an observer, frameObserver.
>
> **[1:07](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-frame-rate-drops?u=76281980&t=67)** We are going to create the PerformanceObserver again, so it's pretty similar to the previous example.
>
> **[1:13](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-frame-rate-drops?u=76281980&t=73)** I'm going to try to do this because it's not yet available, and we don't want to get an exception.
>
> **[1:22](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-frame-rate-drops?u=76281980&t=82)** We're going to observe, and for entryTypes, this is going to be frame.
>
> **[1:29](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-frame-rate-drops?u=76281980&t=89)** This is basically frame problem, so it's not like every time there is a frame it's going to create an entry, no that's not the case.
>
> **[1:35](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-frame-rate-drops?u=76281980&t=95)** Every time there is a problem with the frame, it's going to create an entry.
>
> **[1:39](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-frame-rate-drops?u=76281980&t=99)** For here what we can do is we can get the entries and for each entry, the important part is that... Let's say Frame drop.
>
> **[1:54](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-frame-rate-drops?u=76281980&t=114)** We can say there is a problem with the thread, and the data that is useful here, it should take duration.
>
> **[2:01](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-frame-rate-drops?u=76281980&t=121)** Duration will be in milliseconds, duration between the two frames that typically is going to be greater than 16 milliseconds, because with 16 milliseconds, you can achieve 60 frames per second.
>
> **[2:17](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/detect-frame-rate-drops?u=76281980&t=137)** We can't see this in action yet, but when your browser will start supporting this, you will start receiving report of every time that you have a frame drop so you can try to adjust what you're doing to increase performance and increase consistency in you user experience.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case, (1), break. (1), case. (1), this, (1)
> **Env Vars:** api (4), w3c (1), css (1)
> **Definitions:** is a  (4)
> **Code Identifiers:** frameobserver (1), entrytypes (1)
> **Analogies:** similar to (2)
> **Documentation:** w3c (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### Add server timing information
> [LinkedIn Learning](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-server-timing-information?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-server-timing-information?u=76281980&t=0)** - [Instructor] The last timing API available in the performance interface is known as the serverTiming API.
>
> **[0:09](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-server-timing-information?u=76281980&t=9)** And because it has server in its name, it means we are getting out of the browser of the client.
>
> **[0:15](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-server-timing-information?u=76281980&t=15)** The whole idea here is that we can also send metrics about the performance of the server to the API, and we need to do that from the server.
>
> **[0:26](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-server-timing-information?u=76281980&t=26)** If you open the project, you will find the same web project that we were working on but now we also have a server.js file that is using Express.js to just set a web server with Node.js, and it's also using a library, known as server-timing, that will let us set metrics and send those metrics to the client.
>
> **[0:51](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-server-timing-information?u=76281980&t=51)** Of course, you can use PHP, .NET, Java or any server side architectural language.
>
> **[0:57](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-server-timing-information?u=76281980&t=57)** The metrics are being sent using http headers.
>
> **[1:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-server-timing-information?u=76281980&t=60)** And then the browser will receive those headers and will populate the information within the performance timeline.
>
> **[1:08](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-server-timing-information?u=76281980&t=68)** So let's see this in action.
>
> **[1:11](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-server-timing-information?u=76281980&t=71)** I'm going to start my project, and before that we need to install dependencies, so in the terminal I will just type npm install, and now npm start.
>
> **[1:25](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-server-timing-information?u=76281980&t=85)** That will open a server in the port 4000.
>
> **[1:29](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-server-timing-information?u=76281980&t=89)** You can change the port if you want.
>
> **[1:31](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-server-timing-information?u=76281980&t=91)** Now, going back to the browser, we can reload the page and look at the host 4000, and we can see that the same project is still out there.
>
> **[1:40](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-server-timing-information?u=76281980&t=100)** But now, in the console, I will type performance.getEntriesByType.
>
> **[1:48](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-server-timing-information?u=76281980&t=108)** And we're going to check for navigation.
>
> **[1:52](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-server-timing-information?u=76281980&t=112)** Of course we have one item, one entity, with all the information.
>
> **[1:57](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-server-timing-information?u=76281980&t=117)** And we can see that now we also have a serverTiming property with the information like db, duration, description, that the server has sent.
>
> **[2:09](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-server-timing-information?u=76281980&t=129)** Also, if you are using Chrome in Dev Tools in the Network tab, when you clock on the html you can see several tabs here, and the last one is Timing.
>
> **[2:22](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-server-timing-information?u=76281980&t=142)** And if you scroll down, you will find also your Server Timing information in this panel.
>
> **[2:29](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-server-timing-information?u=76281980&t=149)** And remember this information is generated by the server.
>
> **[2:32](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-server-timing-information?u=76281980&t=152)** So on the server, when you are accessing the database, proxies, caches, you are consuming web services or APIs, then you can measure each part server side, send that information to the client side API, and then use the API to store the information, to log the information, or make analytics.
>
> **[2:53](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-server-timing-information?u=76281980&t=173)** So going back to the code, to read information in our system, we need to take, as we saw before, performance.getEntriesByType.
>
> **[3:06](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-server-timing-information?u=76281980&t=186)** We need to read them for navigation, and they are the first object.
>
> **[3:12](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-server-timing-information?u=76281980&t=192)** And there we will have .serverTiming.
>
> **[3:15](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-server-timing-information?u=76281980&t=195)** And that's out serverTiming.
>
> **[3:19](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-server-timing-information?u=76281980&t=199)** And we can read, for example, all the timings with a .forEach, so forEach timing.
>
> **[3:27](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-server-timing-information?u=76281980&t=207)** We will call our perf.
>
> **[3:31](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-server-timing-information?u=76281980&t=211)** We will say this is Server.
>
> **[3:33](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-server-timing-information?u=76281980&t=213)** The name, we can take the name from the timing object, and we can also take duration, timing.duration.
>
> **[3:45](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-server-timing-information?u=76281980&t=225)** Going back to the browser, I'm refreshing, and we can see here that we are logging the data from the server, in this case the database to 100 milliseconds, and the cache to 300 milliseconds.
>
> **[3:59](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-server-timing-information?u=76281980&t=239)** That's basically dummy data that we are sending from the server.
>
> **[4:02](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/add-server-timing-information?u=76281980&t=242)** But you can apply this on your own server script, and populate client-side APIs with performance information on your server.

> [!info]- Semantic Content
>
> **Code Identifiers:** servertiming (4), getentriesbytype (2), foreach (2)
> **CLI Commands:** find (2), npm (2), node (1), php (1), make (1)
> **Env Vars:** api (5), php (1), net (1)
> **File Paths:** server.js (1), express.js (1), node.js (1)
> **Code Keywords:** let (2), interface (1)
> **UI Navigation:** open the (1), scroll down (1)
> **Definitions:** known as (2)
> **Prerequisites:** install (2)


### 4. Decision-Making Helpers

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Read network information
> [LinkedIn Learning](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980&t=0)** - [Instructor] Now that we know how to track and get all the available performance timeline information, it's time to see some APIs that will help us into making decisions about the current situation to improve user experience.
>
> **[0:16](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980&t=16)** Let's start talking about the Network Information API.
>
> **[0:19](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980&t=19)** It's available on some browsers only.
>
> **[0:21](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980&t=21)** Unfortunately, there are different versions of the specs out there.
>
> **[0:25](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980&t=25)** Let's say, a 90% of the browsers supporting this API are currently using the latest spec, but we might have users with older spec, so we need to create some conditionals there.
>
> **[0:36](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980&t=36)** It's available in the navigator object, that means it's on Windows, so in the normal context, and also in web workers context.
>
> **[0:44](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980&t=44)** It's using decimal units to get the information about the current bandwidth, for example.
>
> **[0:49](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980&t=49)** Decimal units means that 1 Kilobyte it's 1000 bytes.
>
> **[0:54](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980&t=54)** To use the API, we just need to access navigator.connection and we can se there are several properties that we can read, such as type, downlink or saveData.
>
> **[1:04](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980&t=64)** Let's see these properties one by one.
>
> **[1:07](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980&t=67)** rtt will let us see the current Round-trip time, also known as the latency, expressed in milliseconds.
>
> **[1:14](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980&t=74)** This is the network latency.
>
> **[1:16](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980&t=76)** So for example, if we are getting an rtt value less than 50, that's milliseconds, it means we are in a fast-wired connection.
>
> **[1:26](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980&t=86)** Typically, from 50 to 200 milliseconds, we are typically in the Wi-Fi or in 4G.
>
> **[1:32](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980&t=92)** From 200 to 450, we are typically in 3G, or maybe a bad 4G.
>
> **[1:38](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980&t=98)** And If it's more than 450 milliseconds, we are for sure in a 2G, or a very bad connection.
>
> **[1:45](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980&t=105)** So, we can ask about this and make a decision about our next steps to improve the user experience.
>
> **[1:51](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980&t=111)** We also have available downlink.
>
> **[1:54](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980&t=114)** Downlink is the effective bandwidth estimate expressed in Megabits per second, and it's rounded to the nearest 25 Megabits per second.
>
> **[2:04](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980&t=124)** So the browser is going to estimate the current bandwidth based on the recent activity to your origin.
>
> **[2:11](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980&t=131)** There is a type* property that is not yet available in all the browsers, so please verify if it has a value before trying to use it.
>
> **[2:20](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980&t=140)** It's calculated based on the Operating System report on the current connection.
>
> **[2:25](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980&t=145)** You can get different string values such as: Bluetooth, cellular, ethernet, mixed, Wi-Fi, wimax; so, these are the kind of connections that the user can be using at one point while browsing your website.
>
> **[2:42](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980&t=162)** There is one property that is available, known as effectiveType.
>
> **[2:46](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980&t=166)** In this case, is not exactly the type, because you can be on Wi-Fi, but it will give you based on the OS report, and also the badwidth and the Round-trip time estimation; it will give you an idea if you're in a 4G, 3G, 2G, or a very slow-2G connection.
>
> **[3:05](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980&t=185)** So it's one string.
>
> **[3:06](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980&t=186)** So if you are, for example, on desktop, using a wire connection, like an ethernet connection, and your working properly, you'll probably get 4G.
>
> **[3:13](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980&t=193)** According to the spec, if you are in a slow 2G, you should only deliver text.
>
> **[3:19](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980&t=199)** On 2G alone, you can also serve small images.
>
> **[3:23](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980&t=203)** 3G, you can serve hi-res images, and slow-definition videos, and only in 4G, HD video is possible.
>
> **[3:33](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980&t=213)** We also have a downlinkMax property, that may not be available in every browser, that it will give you the maximum effective bandwidth in Megabits per second. So, not the current estimate, but the maximum possible in the current situation.
>
> **[3:46](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980&t=226)** So, if you are in 3G, for example, there is a maximum that is allowed by that technology.
>
> **[3:52](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980&t=232)** All their browsers will give you a type*, as we saw before, but with other values, such as 2G, 3G, 4G, ethernet or Wi-Fi, so, be careful here when you are reading the type, because you might also get other values on some browsers.
>
> **[4:09](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980&t=249)** And finally, a property that was deprecated from the spec, but some browsers are still exposing it, its metered*, that it will give you a Boolean value, that if it's true, it means that the user is paying per bite.
>
> **[4:23](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980&t=263)** So, for example, it's in roaming, or it has a data plan, it's paying that bandwidth.
>
> **[4:29](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980&t=269)** If you are on an ethernet connection, it will give you a false.
>
> **[4:32](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980&t=272)** But, because it's difficult sometimes to know if the user is in a metered or not network, then, that's why the spec deprecated this property.
>
> **[4:42](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980&t=282)** Finally, we do have an Event.
>
> **[4:45](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980&t=285)** It's the change event, that we can listen to the connection object, and that callback is going to be executed every time there is a change in these properties.
>
> **[4:56](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980&t=296)** For example, if the user is going from 3G to 2G, or if the user is going from Wi-Fi to a cellular connection.
>
> **[5:05](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-network-information?u=76281980&t=305)** All the browsers might be using a different name for this event, if they have change, they're using typechange, so it's a good idea to support both.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), type, (3), finally, (2), case, (1)
> **Analogies:** for example (6), such as (3)
> **Definitions:** is a  (3), means that (2), known as (2)
> **Documentation:** spec (5)
> **Code Identifiers:** savedata (1), effectivetype (1), downlinkmax (1)
> **Env Vars:** api (3)
> **CLI Commands:** make (1)
> **Cross-References:** as we saw (1)

#### Read device memory
> [LinkedIn Learning](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-device-memory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-device-memory?u=76281980&t=0)** - [Instructor] Starting with Chrome, we also have available an API to check device's memory.
>
> **[0:07](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-device-memory?u=76281980&t=7)** That is the available memory, the RAM memory available in the current user's device.
>
> **[0:14](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-device-memory?u=76281980&t=14)** Compatibility might change with the future but today it's only on Chromium-based browsers and it will give you a number expressing gibibytes.
>
> **[0:23](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-device-memory?u=76281980&t=23)** So remember gibibytes is basically 1024 mebibytes.
>
> **[0:28](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-device-memory?u=76281980&t=28)** So it's basically roughly what we know of gigabytes but it's a binary version of that.
>
> **[0:34](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-device-memory?u=76281980&t=34)** To use the API it's just getting navigator the deviceMemory that's all.
>
> **[0:39](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-device-memory?u=76281980&t=39)** And we're going to get the amount of gigabytes out of float number.
>
> **[0:43](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-device-memory?u=76281980&t=43)** It can be left on one for example at 0.5.
>
> **[0:47](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-device-memory?u=76281980&t=47)** And typically the minimum value that we will get it's 0.25 gibibytes.
>
> **[0:53](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-device-memory?u=76281980&t=53)** Then if we have one or less than one it means it's a low-end device like a very cheap or old android.
>
> **[1:01](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-device-memory?u=76281980&t=61)** From one to two gibibytes it's a mid-end device.
>
> **[1:05](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-device-memory?u=76281980&t=65)** Two to four a high-end device.
>
> **[1:06](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-device-memory?u=76281980&t=66)** It can also be a tablet.
>
> **[1:08](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-device-memory?u=76281980&t=68)** And from four to eight it's probably a desktop.
>
> **[1:11](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-device-memory?u=76281980&t=71)** This is important because even if you're desktop computer or your laptop has 32 gigabytes of RAM the API is exposing up to eight.
>
> **[1:21](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-device-memory?u=76281980&t=81)** So it means eight piece of CAdES we don't have memory problems, we don't have memory issues.
>
> **[1:26](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-device-memory?u=76281980&t=86)** So, you can do whatever you want.
>
> **[1:29](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-device-memory?u=76281980&t=89)** The idea here is to understand what kind of device the user is currently browsing your website and make some decisions on top of that.
>
> **[1:37](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-device-memory?u=76281980&t=97)** For example, if it's a low-end device we might not want to send really high resolution e-messages because those e-messages need to be the code of the memory and we know there are not so much memory available.
>
> **[1:50](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/read-device-memory?u=76281980&t=110)** So this is a very simple API that will let us make some decisions in the kind of content that we will load based on the available memory in user's device.

> [!info]- Semantic Content
>
> **Env Vars:** api (4), ram (2)
> **CLI Commands:** make (2)
> **Versions:** 0.5 (1), 0.25 (1)
> **Analogies:** for example (2)
> **Code Keywords:** let (1)
> **Code Identifiers:** devicememory (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Save data for your users
> [LinkedIn Learning](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/save-data-for-your-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/save-data-for-your-users?u=76281980&t=0)** - [Instructor] Some browsers are adding a Network Information API extension known as the Save Data Flag.
>
> **[0:07](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/save-data-for-your-users?u=76281980&t=7)** When the flag is enabled, currently in Chrome and Opera, it's a Boolean flag telling us if we should be saving data or not.
>
> **[0:18](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/save-data-for-your-users?u=76281980&t=18)** And it sits on top of the Network Information API so it's available on navigator.connection.
>
> **[0:24](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/save-data-for-your-users?u=76281980&t=24)** To read that flag we need to check for navigator.connection.saveData common case.
>
> **[0:31](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/save-data-for-your-users?u=76281980&t=31)** The idea here is that this is a flyer to tell us hey developer be careful with the data that you are consuming from the network because the user or the current conditions are ideal for saving data to improve performance.
>
> **[0:46](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/save-data-for-your-users?u=76281980&t=46)** Today, for example, on Chrome on Android the user can go to Settings enable the Data Saver.
>
> **[0:53](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/save-data-for-your-users?u=76281980&t=53)** If the user uses Data Saver then the flag will be on.
>
> **[0:58](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/save-data-for-your-users?u=76281980&t=58)** And for example future versions of Chrome are making some decisions such as if the user is in 2G.
>
> **[1:05](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/save-data-for-your-users?u=76281980&t=65)** And also has the saveData flag on, then for example it's not going to execute any JavaScript code.
>
> **[1:13](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/save-data-for-your-users?u=76281980&t=73)** It's just plain HTML, because we need to save data because in 2G, and also it's a very low end device so we don't want to execute or download any chance of code.
>
> **[1:25](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/save-data-for-your-users?u=76281980&t=85)** You can do also things like that and be in charge of what will happen when your website is reloaded and they're these extreme conditions.

> [!info]- Semantic Content
>
> **Analogies:** for example (3), such as (1)
> **Env Vars:** api (2), html (1)
> **Code Identifiers:** savedata (2)
> **Definitions:** known as (1), is a  (1)
> **Code Keywords:** case. (1)
> **UI Navigation:** go to (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### Receive client hints on the server
> [LinkedIn Learning](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=0)** - [Narrator] To make decisions for web performance we know now that there are many information available client-side only, such as the network information API, device memory, save-data, and even responsive queries, such as the current available width, the current device pixel ratio, so the resolution of the screen.
>
> **[0:22](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=22)** But sometimes we need to access that data in the server.
>
> **[0:26](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=26)** For example, to apply some reactive web performance techniques, such as changing the amount of data or the quality of the data that we are sending based on this information.
>
> **[0:37](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=37)** Also, because we might want to serve better responsive images.
>
> **[0:41](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=41)** Such as, the browser is requesting for the picture.
>
> **[0:45](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=45)** Without more information, the server can't say, Okay, let's say we are in an iPhone X We are in a slow 2G, and we have that memory.
>
> **[0:54](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=54)** Well, let's send that version.
>
> **[0:56](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=56)** Another user, oh, this is an Android?
>
> **[0:58](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=58)** It's on 4G, and it has different resolution, and only has two gigabytes of memory.
>
> **[1:03](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=63)** Okay, let's use this version.
>
> **[1:05](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=65)** Or let's compress more the jpeg file that they are sending.
>
> **[1:09](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=69)** So, to make those decisions we need information server-side.
>
> **[1:13](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=73)** So, let's meet client-hints.
>
> **[1:15](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=75)** Client-hints, it's a new spec where we can opt in for hints that are going to be sent from the client to the server.
>
> **[1:25](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=85)** To opt in we need to use a response header or a meta tag, and that will let us make decisions from the server.
>
> **[1:33](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=93)** It can be easily poly-filled with service workers or even with cookies.
>
> **[1:37](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=97)** Let's see how it works.
>
> **[1:39](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=99)** So, we have the browser requesting an HTML.
>
> **[1:42](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=102)** The web server in their response will opt in for client-hints.
>
> **[1:48](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=108)** So, it's not enabled by default.
>
> **[1:50](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=110)** The web server needs to opt in for client-hints.
>
> **[1:53](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=113)** And after that the next request will go with client-hints.
>
> **[1:59](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=119)** So, let's see this in action.
>
> **[2:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=120)** In terms of a meta tag we use <meta http-equiv="Accept-CH" CH from client hints, and then in the content, we are going to specify the client hints that we want to receive.
>
> **[2:14](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=134)** We can also set these as an Accept-CH header in the HTTP Response from the server.
>
> **[2:21](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=141)** The possible client-hints available are width, in this case it's the expected resource width in physical pixels available for images.
>
> **[2:30](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=150)** So, in this case, the browser will say to the browser, "Hey, browser, in my current situation the IMG, for example, that I need to fill with this image, I need the file to be 100 x 150 physical pixel."
>
> **[2:43](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=163)** Viewport-width will send the browser information about the current layout width, so the viewport.
>
> **[2:50](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=170)** That's expressed in CSS pixels not in physical pixels.
>
> **[2:54](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=174)** DPR, that's the device pixel ratio.
>
> **[2:57](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=177)** For example, it will be three for the iPhone X; it will be four for the Galaxy S9; it will be one for a normal desktop; it will be two for a regular screen Macbook Pro; and it will be two for an iPhone 8.
>
> **[3:12](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=192)** Also, we can request client-hints from the network information API and the memory API.
>
> **[3:18](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=198)** So, we can request RTT, so the round-trip time, downlink, the estimated bandwidth, ECT, that means effective connection type, and it's going to read the string, such as slow 2G, 3G, 4G.
>
> **[3:31](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=211)** We can request save-data, so we can know server-side if the user has selected save-data on the client, and device memory, so we can get the amount of gigabytes of memory that the user's devices has.
>
> **[3:45](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=225)** So, for example, when the browser requests the HTML, the web server can answer with an HTTP header, saying, I accept CH, so I accent these client hints: DPR, device memory, save data, and effective connection type, ECT.
>
> **[4:02](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=242)** So, on the next request, in this case, for example, for a resource, it can be an image.
>
> **[4:08](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=248)** It will go with the data expressed in HTTP headers in their request, such as DPR 3.0, device memory 2, save-data on.
>
> **[4:17](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=257)** That's how you know if save-data is in true.
>
> **[4:21](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=261)** And ECT with a 3G value.
>
> **[4:24](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=264)** And then the web server can make decisions on top of that.
>
> **[4:28](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=268)** Also, on modern browsers we can also specify a client-hints cash, in Lifetime.
>
> **[4:34](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=274)** In that case we use also a meta or an HTP tether known as accept-CH-Lifetime, and we express a value in seconds.
>
> **[4:42](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=282)** In that case, that's useful for next visits because client-hints don't work on the initial HTML request, only on the additional resources or request that the browser will do after the HTML.
>
> **[4:57](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=297)** With Lifetime we can request that for a couple of minutes or hours.
>
> **[5:02](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=302)** We want to accept client-hints, so on the next time the user is accessing even the initial HTML, we will get the data.
>
> **[5:10](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=310)** So, now we can apply reactive and responsive web performance based on the data that we get in the server.
>
> **[5:17](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=317)** We can select the right image and resolution.
>
> **[5:20](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/receive-client-hints-on-the-server?u=76281980&t=320)** We can select the quality of the content and also the quantity of the content that they're going to send based on these client-hints.

> [!info]- Semantic Content
>
> **Env Vars:** html (5), api (3), http (3), dpr (3), ect (3)
> **Code Keywords:** let (8), case, (3), type, (2), default. (1)
> **Analogies:** such as (6), for example (5), picture (1)
> **CLI Commands:** make (4)
> **Code Identifiers:** iphone (3)
> **UI Navigation:** select the (2)
> **Definitions:** is an  (1), known as (1)
> **Versions:** 3.0 (1)


### 5. Execute Code More Efficiently

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Send low-priority requests with beacons
> [LinkedIn Learning](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/send-low-priority-requests-with-beacons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/send-low-priority-requests-with-beacons?u=76281980&t=0)** - [Instructor] It's time to see some modern APIs available in vanilla JavaScript to execute our code more efficiently.
>
> **[0:08](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/send-low-priority-requests-with-beacons?u=76281980&t=8)** We're going to start talking about the Beacon API; that has nothing to do with Bluetooth beacons.
>
> **[0:13](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/send-low-priority-requests-with-beacons?u=76281980&t=13)** So, this is useful for analytics, trackers, or state updates that you are currently sending over AJAX or typical fetch requests.
>
> **[0:24](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/send-low-priority-requests-with-beacons?u=76281980&t=24)** We are going to use this API when waiting for a response is not really important.
>
> **[0:28](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/send-low-priority-requests-with-beacons?u=76281980&t=28)** For example, let's say the user is clicking a link and we want to save stats and analytics server-side to know how many clicks that link has received.
>
> **[0:39](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/send-low-priority-requests-with-beacons?u=76281980&t=39)** So, we don't want to wait for a response, it's just, okay, server, the user has just clicked here.
>
> **[0:45](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/send-low-priority-requests-with-beacons?u=76281980&t=45)** I don't care about a response.
>
> **[0:47](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/send-low-priority-requests-with-beacons?u=76281980&t=47)** Also, those requests shouldn't be high-priority, so I don't want to mess with the performance of my app because I'm sending that track information.
>
> **[0:57](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/send-low-priority-requests-with-beacons?u=76281980&t=57)** Also, what happens if the user doesn't have connection at that time, or if the user is closing the browser or the tab, or if the user is going to another URL?
>
> **[1:06](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/send-low-priority-requests-with-beacons?u=76281980&t=66)** The JavaScript context is not there anymore; I don't want that request to be aborted because of that.
>
> **[1:12](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/send-low-priority-requests-with-beacons?u=76281980&t=72)** So, that's why we have, now, the Beacon API.
>
> **[1:16](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/send-low-priority-requests-with-beacons?u=76281980&t=76)** It's a very simple API: navigator.sendBeacon, we set a URL, and we can send optional data.
>
> **[1:25](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/send-low-priority-requests-with-beacons?u=76281980&t=85)** It can be, for example, an option, or a JSON syntax option.
>
> **[1:30](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/send-low-priority-requests-with-beacons?u=76281980&t=90)** And that's all!
>
> **[1:31](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/send-low-priority-requests-with-beacons?u=76281980&t=91)** So, the browser will send that beacon, even if the user is not on that page anymore, if the user is on a different page, or even if the tab is closed, and that request will be low-priority, so we know for sure that we will not be harming the performance of the rest of our app.

> [!info]- Semantic Content
>
> **Env Vars:** api (4), url (2), ajax (1), json (1)
> **Analogies:** for example (2)
> **Code Keywords:** let (1)
> **Code Identifiers:** sendbeacon (1)
> **Speakers:** - [instructor] (1)

#### Understand frame rate execution
> [LinkedIn Learning](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=0)** - [Narrator] To improve responsiveness of our app, we need to understand frames.
>
> **[0:04](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=4)** So the browser is rendering frames all the time.
>
> **[0:08](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=8)** We want to achieve 60 frames per second for better performance, unless we are doing VR, virtual reality or augmented reality.
>
> **[0:16](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=16)** In those cases, we might want more frames per second, but on a normal screen, 60 frames per second is enough.
>
> **[0:23](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=23)** And to achieve 60 frames per second, we need to understand how the system works.
>
> **[0:28](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=28)** At least, at a high level overview and then use a new approach.
>
> **[0:34](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=34)** So, this is a simplified version of the architecture of how the browser is rendering frames.
>
> **[0:41](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=41)** Each frame, so 60 frames per second.
>
> **[0:43](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=43)** So this diagram will try to be executed 60 times per second.
>
> **[0:48](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=48)** So a frame starts.
>
> **[0:50](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=50)** In that case, the browser will start processing your input demands.
>
> **[0:53](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=53)** So if you have an on click handler, on scroll, or something like that, after you do some changes, there might be some new HTML that needs to be parsed.
>
> **[1:02](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=62)** The browser will calculate the styles, the layout, new CSS that you have changed in the input events, and then the browser will calculate and do the paint and composite.
>
> **[1:14](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=74)** From frame start to frame end, we should be having 16 milliseconds.
>
> **[1:20](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=80)** With 16 milliseconds, we achieve 60 frames per second.
>
> **[1:24](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=84)** And so that means there will be some idle time like, "Yeah I'm doing nothing.
>
> **[1:29](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=89)** I'm the browser. I'm doing nothing."
>
> **[1:30](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=90)** before the frame actually ends.
>
> **[1:33](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=93)** And at one point, you may have your own timers, such as set timeout, set interval, and those timers will be executed at any time.
>
> **[1:43](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=103)** So, there is no guarantee that those timers will be executed within one frame.
>
> **[1:49](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=109)** So that means that in a typical browser environment, we want to see situations like this.
>
> **[1:55](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=115)** One frame starts, another frame starts, another frame starts, with the same sequence.
>
> **[2:01](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=121)** But the problem is that that's an ideal situation.
>
> **[2:03](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=123)** That's not usually what's happening.
>
> **[2:06](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=126)** Because if you have a long script, so you have a child script code that is being executed.
>
> **[2:11](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=131)** It can be in an input event handler.
>
> **[2:13](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=133)** It can be in set timeout, or in any place.
>
> **[2:16](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=136)** That script is taking the thread and because of that the next frame is being pushed in the timeline.
>
> **[2:25](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=145)** So we are dropping frames.
>
> **[2:27](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=147)** We are losing responsiveness of our app.
>
> **[2:31](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=151)** So we can have frame rate drop.
>
> **[2:33](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=153)** Sometimes, there will be frames without executing your code.
>
> **[2:38](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=158)** So that frame won't be updated.
>
> **[2:41](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=161)** Also what happens if we have low-priority code that you don't want to mess with the animation?
>
> **[2:46](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=166)** So you want to execute some code, but it's not really so important to push one frame.
>
> **[2:52](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=172)** So you want to wait and you want to make sure that that code will be executed in the idle time.
>
> **[2:57](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=177)** So when there is nothing to be done by the browser.
>
> **[3:01](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=181)** But we don't know when that's happening.
>
> **[3:03](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=183)** So that's the problem that we have.
>
> **[3:05](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=185)** So that's why today, we have new APIs, we have request animation frame.
>
> **[3:11](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=191)** That's a code that will be guaranteed to be executed on each frame and then we have idle callback.
>
> **[3:21](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=201)** That is a way that we have now to execute code in the idle time.
>
> **[3:26](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=206)** Even if we have an API, so we can check the available time.
>
> **[3:31](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/understand-frame-rate-execution?u=76281980&t=211)** So let's see these APIs in the next videos.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (1), this. (1), let (1)
> **Env Vars:** html (1), css (1), api (1)
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### Execute animation control code
> [LinkedIn Learning](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/execute-animation-control-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/execute-animation-control-code?u=76281980&t=0)** - [Instructor] If we want to execute code on each frame, we shouldn't be using set interval or set timeout anymore.
>
> **[0:07](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/execute-animation-control-code?u=76281980&t=7)** We need to use request animation frame, because it's the only way to guarantee that our code will be executed after each frame has started.
>
> **[0:18](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/execute-animation-control-code?u=76281980&t=18)** It's part of the latest HTML5 spec, so it's in standard in HTML5.
>
> **[0:23](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/execute-animation-control-code?u=76281980&t=23)** It will let us execute code on the next frame before actually painting and parsing that frame, and it's guaranteed to be executed on the next frame.
>
> **[0:32](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/execute-animation-control-code?u=76281980&t=32)** So request animation frame, will execute code in the next frame.
>
> **[0:38](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/execute-animation-control-code?u=76281980&t=38)** It's much better than timers, and we should always keep that code small anyway, because if you're taking more than ten milliseconds to execute that code, we are going to push the next frame, so we will have frame drop anyway.
>
> **[0:52](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/execute-animation-control-code?u=76281980&t=52)** But this is the only way that we have to guarantee that our code, for example, to ablate the UI to move elements on the screen will be executed on time before rendering and parsing the next frame.
>
> **[1:05](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/execute-animation-control-code?u=76281980&t=65)** The API is really simple.
>
> **[1:07](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/execute-animation-control-code?u=76281980&t=67)** It's just requestAnimationFrame, and we sent a call back as an argument.
>
> **[1:11](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/execute-animation-control-code?u=76281980&t=71)** And that's all.

> [!info]- Semantic Content
>
> **Env Vars:** html5 (2), api (1)
> **Code Keywords:** let (1)
> **Code Identifiers:** requestanimationframe (1)
> **Cross-References:** in the next (1)
> **Documentation:** spec (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Execute background tasks
> [LinkedIn Learning](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/execute-background-tasks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/execute-background-tasks?u=76281980&t=0)** - [Instructor] It's now time to execute code when the browser is idle.
>
> **[0:04](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/execute-background-tasks?u=76281980&t=4)** The problem with the idle time on each frame is that it is different per frame.
>
> **[0:10](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/execute-background-tasks?u=76281980&t=10)** Because the other faces of the frame, such as input advance, parsing, or painting are not equally on each frame.
>
> **[0:19](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/execute-background-tasks?u=76281980&t=19)** So sometimes we will have more idle time, sometimes we will have less or even no idle time at all.
>
> **[0:26](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/execute-background-tasks?u=76281980&t=26)** There will be many frames without idle time.
>
> **[0:29](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/execute-background-tasks?u=76281980&t=29)** So there is a new API.
>
> **[0:30](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/execute-background-tasks?u=76281980&t=30)** It's the W3C, under the spec known as Cooperative Schedule of Background Tasks, sometimes also known as the background task API or request idle callback.
>
> **[0:43](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/execute-background-tasks?u=76281980&t=43)** It will let us execute low-priority code before each frame or after each frame has been painted, or before the next one.
>
> **[0:52](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/execute-background-tasks?u=76281980&t=52)** If there is enough idle time, because it is low-priority, also we receive an argument where we can query how much time is left before that idle time is gone and before the next frame should start being processed.
>
> **[1:08](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/execute-background-tasks?u=76281980&t=68)** We are not forced to stop executing code when the available time is zero, but we should stop and instead the new idle callback in that case because we don't want to have frame drops.
>
> **[1:19](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/execute-background-tasks?u=76281980&t=79)** We want to achieve 60 frames per second.
>
> **[1:22](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/execute-background-tasks?u=76281980&t=82)** So this is the API.
>
> **[1:24](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/execute-background-tasks?u=76281980&t=84)** We call request idle callback in the global context and we receive an argument.
>
> **[1:31](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/execute-background-tasks?u=76281980&t=91)** That argument has a method with the name time remaining.
>
> **[1:35](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/execute-background-tasks?u=76281980&t=95)** So we can execute some code if it's a loop, for example, before the next iteration we can ask, do we have time?
>
> **[1:44](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/execute-background-tasks?u=76281980&t=104)** And if we don't have more time, we can stop and request a new idle callback for the next frame.
>
> **[1:51](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/execute-background-tasks?u=76281980&t=111)** There is no guarantee that our code will be executed on the next frame because it will execute code only when the browser is idle.
>
> **[2:01](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/execute-background-tasks?u=76281980&t=121)** So the browser will retry on each frame but if there is no time, no idle time, no idle time, no idle time, it will never execute your code.
>
> **[2:10](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/execute-background-tasks?u=76281980&t=130)** So we can specify a timeout such as I want to execute this low priority code if the browser is idle but I want to wait maximum three seconds.
>
> **[2:20](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/execute-background-tasks?u=76281980&t=140)** So after the timeout passes, the browser will execute your code on the next frame, even if there is no idle time on the next frame.
>
> **[2:29](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/execute-background-tasks?u=76281980&t=149)** So after expiration, the browser guarantees that you will execute your code anyway and, in that case, it will probably push another frame but you need to execute that code at that time because you set an expiration.
>
> **[2:45](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/execute-background-tasks?u=76281980&t=165)** To set an expiration on the request idle callback, you send a second argument with an object, specifying the timeout in milliseconds.
>
> **[2:55](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/execute-background-tasks?u=76281980&t=175)** And then also, inside the callback, despite having the ability to reel the remaining time, you can also verify the voo-lee-on value with timeout where you can know if the current execution is after a timeout or not.

> [!info]- Semantic Content
>
> **Env Vars:** api (3), w3c (1)
> **Analogies:** such as (2), for example (1)
> **Code Keywords:** let (1), case, (1)
> **Documentation:** w3c (1), spec (1)
> **Definitions:** is a  (1), known as (1)
> **Speakers:** - [instructor] (1)

#### Efficient script yielding
> [LinkedIn Learning](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/efficient-script-yielding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/efficient-script-yielding?u=76281980&t=0)** - [Instructor] The final API available in modern browsers regarding executing code is efficient script yielding.
>
> **[0:07](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/efficient-script-yielding?u=76281980&t=7)** It's a way to yield control to the browser before actually running our code.
>
> **[0:13](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/efficient-script-yielding?u=76281980&t=13)** In this case, it's for normal to high-priority code that we want to execute.
>
> **[0:18](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/efficient-script-yielding?u=76281980&t=18)** So it's not low priority.
>
> **[0:20](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/efficient-script-yielding?u=76281980&t=20)** We want to execute that code as soon as possible, but we want to do that after the browser has rendered any changes on the screen.
>
> **[0:28](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/efficient-script-yielding?u=76281980&t=28)** Typically, we were using the setTimeout zero to do this, I've been doing this a lot in web apps, since probably 1998, but the problem with setTimeout zero is that it always has some time that is being used for other purposes, so it's not going to execute your code as soon as possible when you are using setTimeout.
>
> **[0:51](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/efficient-script-yielding?u=76281980&t=51)** So, instead of doing that, we can access the new API that is really simple, it's just setImmediate.
>
> **[0:59](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/efficient-script-yielding?u=76281980&t=59)** We send a callback, and the code that we are executing there will be executed exactly after the browser has finished parsing and rendering any pending changes on the screen.

> [!info]- Semantic Content
>
> **Code Identifiers:** settimeout (3), setimmediate (1)
> **Code Keywords:** yield (1), case, (1), this, (1)
> **Env Vars:** api (2)
> **Speakers:** - [instructor] (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/next-steps?u=76281980&t=0)** - [Maximiliano] Thank you for joining me in this course.
>
> **[0:02](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/next-steps?u=76281980&t=2)** We have covered a lot that should help you now increasing the performance of your website and also gathering information from your real users in terms of timings, goals, and metrics that will increase your user experience.
>
> **[0:18](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/next-steps?u=76281980&t=18)** We have been covering the Performance Timeline API and all the APIs available in Vanilla JavaScript without any framework in most modern browsers.
>
> **[0:29](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/next-steps?u=76281980&t=29)** We know how to calculate milestones in that timeline, how to check information about navigation, research timing, your custom code, paint timings, and also how to detect frame rate drops and long tasks.
>
> **[0:43](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/next-steps?u=76281980&t=43)** We also know the APIs that they're available to gather information about the current network and memory conditions and how to execute your code more efficiently.
>
> **[0:54](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/next-steps?u=76281980&t=54)** It's time now to move forward and now you can continue your learning with one of my two books on web performance: High Performance Mobile Web and Hacking Web Performance both published by O'Reilly Media.
>
> **[1:06](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/next-steps?u=76281980&t=66)** And you can also find a lot of content from myself and other great authors in LinkedIn Learning about web performance, web workers, and service workers.
>
> **[1:17](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/next-steps?u=76281980&t=77)** You can also follow me on Twitter.
>
> **[1:19](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/next-steps?u=76281980&t=79)** I'm F-I-R-T, firt.
>
> **[1:21](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/next-steps?u=76281980&t=81)** I usually publish information and articles about web performance and updates on all of my courses.
>
> **[1:27](https://www.linkedin.com/learning/vanilla-javascript-web-performance-optimization-apis/next-steps?u=76281980&t=87)** So thank you again and see you in the next journey.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Code Keywords:** continue (1)
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