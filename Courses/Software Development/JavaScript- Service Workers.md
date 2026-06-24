---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: javascript-service-workers
url: "https://www.linkedin.com/learning/javascript-service-workers"
duration_minutes: 216
duration: 3h 36m
level: Advanced
updated: 10/31/2018
learners: 4087
skills:
  - JavaScript
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGX5xqAG7xKJA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568661923388?e=2147483647&amp;v=beta&amp;t=3j3_SdodWgkz_0j_oppG5KRJNrqhprNQfiGs8zF1rVY"
linkedin_topic: Software Development
learning_paths:
  - '[Explore Web Development with Vanilla JavaScript](../../Paths/Software%20Development/Learning%20Paths/Explore%20Web%20Development%20with%20Vanilla%20JavaScript.md)'
prev_courses:
  - '[JavaScript- Ajax and Fetch](JavaScript-%20Ajax%20and%20Fetch.md)'
next_courses:
  - '[Vanilla JavaScript- Web Performance Optimization APIs](Vanilla%20JavaScript-%20Web%20Performance%20Optimization%20APIs.md)'
path_nav: '[{"path":"Explore Web Development with Vanilla JavaScript","position":6,"total":8,"prev":"JavaScript- Ajax and Fetch","next":"Vanilla JavaScript- Web Performance Optimization APIs"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - topic/web-development
  - skill/javascript
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/JavaScript-%20Service%20Workers.md)

![JavaScript: Service Workers](https://media.licdn.com/dms/image/v2/C4E0DAQGX5xqAG7xKJA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568661923388?e=2147483647&amp;v=beta&amp;t=3j3_SdodWgkz_0j_oppG5KRJNrqhprNQfiGs8zF1rVY)

# JavaScript: Service Workers

> Service workers are background scripts that enable features like offline storage, push notifications, and background syncing. They are an important tool for the modern web developer who wants to create faster, more interactive experiences with offline browsing and messaging. This course shows how to implement service workers in vanilla JavaScript—leaving frameworks behind in order to understand th

> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-service-workers) | 3h 36m | Advanced | 4K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Implement service workers in JavaScript](#implement-service-workers-in-javascript)
  - [What you should know](#what-you-should-know)
- [**1. A New Citizen for the Web**](#1-a-new-citizen-for-the-web) (9 videos)
  - [Hello, service workers](#hello-service-workers)
  - [Abilities](#abilities)
  - [What we can do](#what-we-can-do)
  - [Requirements and compatibility](#requirements-and-compatibility)
  - [Service workers in action](#service-workers-in-action)
  - [Understand the life cycle](#understand-the-life-cycle)
  - [See all service worker registrations](#see-all-service-worker-registrations)
  - [Understand the scope](#understand-the-scope)
  - [Learn vocabulary and concepts](#learn-vocabulary-and-concepts)
- [**2. Work with Service Workers**](#2-work-with-service-workers) (10 videos)
  - [Register a service worker](#register-a-service-worker)
  - [Change the default scope](#change-the-default-scope)
  - [Handle service worker events](#handle-service-worker-events)
  - [Debug with Developer Tools in Chrome](#debug-with-developer-tools-in-chrome)
  - [Debug with other browsers](#debug-with-other-browsers)
  - [Load external files](#load-external-files)
  - [Work with the registration](#work-with-the-registration)
  - [Update the service worker](#update-the-service-worker)
  - [Manage updates in your code](#manage-updates-in-your-code)
  - [Unregister the service worker](#unregister-the-service-worker)
- [**3. Acting as a Network Proxy**](#3-acting-as-a-network-proxy) (7 videos)
  - [Capture the fetch event](#capture-the-fetch-event)
  - [Synthesize a response](#synthesize-a-response)
  - [The Response object in detail](#the-response-object-in-detail)
  - [The Request object in detail](#the-request-object-in-detail)
  - [Work with exact routes](#work-with-exact-routes)
  - [Work with dynamic routes](#work-with-dynamic-routes)
  - [Clone before reading data](#clone-before-reading-data)
- [**4. Cache Storage**](#4-cache-storage) (11 videos)
  - [Understand the new Cache API](#understand-the-new-cache-api)
  - [Prepare the project](#prepare-the-project)
  - [Prefetch files on install](#prefetch-files-on-install)
  - [Visualize your cache](#visualize-your-cache)
  - [Implement a cache-first policy](#implement-a-cache-first-policy)
  - [Implement a network-first policy](#implement-a-network-first-policy)
  - [Cache new elements after install](#cache-new-elements-after-install)
  - [Use stale-while-revalidate](#use-stale-while-revalidate)
  - [Deliver alternate content when offline](#deliver-alternate-content-when-offline)
  - [Keep your storage clean](#keep-your-storage-clean)
  - [Summary of cache strategies](#summary-of-cache-strategies)
- [**5. Work with APIs in the Service Worker**](#5-work-with-apis-in-the-service-worker) (6 videos)
  - [What's available in the service worker](#whats-available-in-the-service-worker)
  - [Send messages from pages](#send-messages-from-pages)
  - [Receive messages in the service worker](#receive-messages-in-the-service-worker)
  - [Broadcast messages to clients](#broadcast-messages-to-clients)
  - [Receive messages from the controller](#receive-messages-from-the-controller)
  - [Sync data in the background](#sync-data-in-the-background)
- [**6. Tips and Tricks for Web Performance**](#6-tips-and-tricks-for-web-performance) (4 videos)
  - [Readable streams](#readable-streams)
  - [Navigation preload](#navigation-preload)
  - [Defer service worker registration](#defer-service-worker-registration)
  - [Make your service worker useful quickly](#make-your-service-worker-useful-quickly)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Implement service workers in JavaScript](https://www.linkedin.com/learning/javascript-service-workers/implement-service-workers-in-javascript?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/implement-service-workers-in-javascript?u=76281980&t=0)** - [Narrator] Hello and welcome to [Vanilla](../../Skills/Web%20Development/Vanilla.md) [JavaScript](../../Skills/Software%20Development/JavaScript.md) Service Workers. My name is Maximilliano Firtman and I will be your instructor during this course on service workers. The service workers API it's a very hot topic in [Web Development](../../Topics/Web%20Development.md). As it can really create good experiences on the web for progressive web apps, websites, or any kind of web content that you are currently creating for the web platform. Service workers are important today because they can enable new experiences such as making your content available while the user is offline, creating a good performance on any network situations, such if you are in a 2G connection, and it can also improve performance for normal online operations. Learning the basics of service workers using just plain [Java](../../Skills/Software%20Development/Java.md) script without any frame work, will let you understand the full potential of this new citizen of the web. Here we will cover the basics of service workers. So how they work, how to register or install a service worker, the cache storage API so we can store resources and retrieve those resources later, and also how to send messages from and to the service worker. We're going to cover all the details of service workers creating a project so we will take a website and we will make that website available offline using different caching strategies. I've been working on the web for more than 22 years. I'm the author of several books including
>
> **[1:35](https://www.linkedin.com/learning/javascript-service-workers/implement-service-workers-in-javascript?u=76281980&t=95)** my latest two books on web performance, such as High Performance Mobile Web, and Hacking Web Performance by O'reilly Media. And I've been teaching web app development for also more than 15 years. Including mobile web, mobile apps, and PWA's with service workers. So I'm glad to be here sharing my expertise with you in this [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) learning course. Hope to see you in the next videos so we can make the web faster and available offline for all your users.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Vanilla](../../Skills/Web%20Development/Vanilla.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [Web Development](../../Topics/Web%20Development.md) (1), [Java](../../Skills/Software%20Development/Java.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Env Vars:** api (2), pwa (1)
> **CLI Commands:** make (2)
> **Analogies:** such as (2)
> **Cross-References:** in the next (1)
> **Prerequisites:** install (1)
> **Speakers:** - [narrator] (1)

#### [What you should know](https://www.linkedin.com/learning/javascript-service-workers/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/what-you-should-know?u=76281980&t=0)** - [Instructor] This course is optimized for web developers, so you need to be confident with [HTML](../../Skills/Web%20Development/HTML.md), CSS, and mainly [JavaScript](../../Skills/Software%20Development/JavaScript.md). We're going to use [ECMAScript](../../Skills/Web%20Development/ECMAScript.md) 6, so you need to be confident with at least arrow functions and templated strings. Service workers are using a lot of promises, so it's important for you to understand the promises [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) and how they work on ES6 before attending this course. In terms of what you need to have installed in your computer to follow along the videos, you need a text editor. I'm going to use Visual Studio Code. You need latest versions of a web browser that you want to test service workers on, and a web server. I will use a web server based on the OJS, so if you want to use the same one, you also need to install an OJS. We are ready to start, so let's start talking about service workers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [ECMAScript](../../Skills/Web%20Development/ECMAScript.md) (1), [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (1)
> **Env Vars:** ojs (2), html (1), css (1), es6 (1)
> **Prerequisites:** you need to have (1), install (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)


### 1. A New Citizen for the Web

[↑ Back to Table of Contents](#table-of-contents)

#### [Hello, service workers](https://www.linkedin.com/learning/javascript-service-workers/hello-service-workers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/hello-service-workers?u=76281980&t=0)** - [Instructor] When we think about the web, typically we think about being online. But now we have new use cases in the modern world. For example, we might be able to work offline. Also, there are loads of slow connections out there, such as 2G or 3G connections, when we are working with similar networks. Sometimes we are on LTE, so 4G, but have an unreliable connection. Also we have now Progressive Web Apps, or PWAs, and they will need someone to cache and serve the files of the app. And finally, we all want faster web user experiences. We also have new goals now, mostly regarding web performance. We have new metrics and new goals to achieve to provide the best possible experience for our users. We usually want to offer a consistent experience across different contexts. For example, the user might be on its own home with [WiFi](../../Glossary/Standard/Wi-Fi.md) connection, or the user might be in roaming, for example, using 3G. And when we are serving mobile users, and we know that we want to serve mobile users, we are using similar connections. And these networks have high latency, which means the data takes more time to get to the user, so we need some help. In the past, we had some solutions for offline access.
>
> **[1:38](https://www.linkedin.com/learning/javascript-service-workers/hello-service-workers?u=76281980&t=98)** For example, [Google](../../Glossary/Service/Google.md) Gears, Application Cache, that was part of the original HTML5 spec and is now deprecated, and also Apache Cordova, or PhoneGap, that let us create offline apps for the store. But they all their own challenges. So fortunately, now we have a new spec from the W3C, known as Service Workers. So it's in a standard spec for browsers. It's on top of the web worker spec. A service worker manages a scope. For now, let's say that it's just a folder in the domain. It have some abilities on that scope, and it works completely detached from any browser's tab or PWA's process. We have mentioned web worker, so what is a web worker? It's a [JavaScript](../../Skills/Software%20Development/JavaScript.md) file that is running in its own thread. In the case of service workers, it's not just a thread. They also work in their own process. While a service worker is just one file, it can import other files through a synchronous API. And because it's a thread, it has no access to user interface API, which means no DOM, no document.getElementById, no innerHTML, and no window option, so no alert, or no other things that we are used on the web. We mentioned that a service worker has one scope.
>
> **[3:16](https://www.linkedin.com/learning/javascript-service-workers/hello-service-workers?u=76281980&t=196)** The scope, it's an origin and a path, which means that's just a protocol, a host and a port, plus a path. So let's see these with examples. If we have a website like [https://mydomain.com](https://mydomain.com)/, so the root folder, that's one scope. We can have a different scope if we have a subfolder, such as myapp in the same domain, that's a different scope. Also, we can have another web server in a different port. And in that case, it would be a different scope. And finally, when you are working with subdomains, we are also working with completely different scope. So one service worker will be responsible only for one scope. Inside the browser environment, we have several things in memory. For example, several tabs in the browser, several progressive web apps in stand-alone mode, like any other app, and even Iframes, all of them being served from [mydomain.com](https://mydomain.com). When we have that situation, we always have only one service worker, so one service worker can be pointing to several clients, that's the name, clients. Several clients from the same scope will always be pointing to the same service worker. The service worker will be registered by a page. Any page in the scope can register the service worker.
>
> **[4:52](https://www.linkedin.com/learning/javascript-service-workers/hello-service-workers?u=76281980&t=292)** There is no permission involved for registration, which means the user will never receive any dialogue for the service worker, and there is no limit in the amount of service workers that a user or a browser can install. On most situations, the service worker will be installed forever, so it's not going to be uninstalled automatically, or uninstalled when the user clears the cache. On most situations, later we will get more details in the lifecycle of the service worker.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wifi](../../Glossary/Standard/Wi-Fi.md) (1), [Google](../../Glossary/Service/Google.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Env Vars:** api (2), lte (1), html5 (1), w3c (1), pwa (1)
> **Analogies:** for example (5), such as (2)
> **Documentation:** spec (4), w3c (1)
> **Definitions:** known as (1), is a  (1), means that (1)
> **Code Identifiers:** getelementbyid (1), innerhtml (1)
> **URLs:** [https://mydomain.com](https://mydomain.com) (1), [mydomain.com](https://mydomain.com) (1)
> **CLI Commands:** apache (1)

#### [Abilities](https://www.linkedin.com/learning/javascript-service-workers/abilities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/abilities?u=76281980&t=0)** - [Instructor] A service worker has abilities on the scope. So it's like a couple of super powers that just keep file path on top of our website. The most important ability is to see all the network requests that pages in the scope are requesting, even across domain, which means every website from our domain that is requesting images, css files, (mumbles) files, will go through the service worker. But seeing requests is not the only ability. Responding for those requests is even more important. The service worker can create a response and take that response from a cache or it can go to the network. But the service worker will be there in the middle, like a proxy, seeing and responding and being responsible for those responses. Also, the service worker can create responses on the fly, without going to any server or without going to any cache. Just creating a response like if it is web server. On some platforms, the service worker can also receive messages from the server, even if the web app is closed. How it should do that? Think to push notification messages. The service worker is the one that is going
>
> **[1:37](https://www.linkedin.com/learning/javascript-service-workers/abilities?u=76281980&t=97)** to be responsible for receiving the message from the server, from the bush server and may be creating invisible notification to the user. Also, some platforms it can receive payment results from a third party provider, even if the user has closed the web app. So for example, you can be using Apple Pay or you can be using [Android](../../Glossary/Sdk/Android.md) Pay, or you can be paying by credit card on a website. There is an API on some browsers that will let us charge the user with credit cards without a standard API. But sometimes the result of the payment, such as if the payment was successful or not, will appear later in time. And maybe the user has closed the web app at that time. The service worker will then be activated in memory and it will receive result from the payment. Another important ability of a service worker, on some platforms, is that it can synchronize data in the background when the connection is re-established. So let's say for example, you are trying to make an order and there is no connection at that time. Instead of losing that order, you can save that order, and later, even if the user is playing a game later, when the connection is re-established, then the service worker will take that pending operation
>
> **[3:11](https://www.linkedin.com/learning/javascript-service-workers/abilities?u=76281980&t=191)** and synchronize that data with the server. Some of these abilities are available on every browser. Some of these abilities are available on some browsers only as anything on the web. So that's why we need to use (mumbles) enhancement to use some of these features.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Android](../../Glossary/Sdk/Android.md) (1)
> **Analogies:** for example (2), it's like (1), such as (1)
> **Env Vars:** api (2)
> **CLI Commands:** make (1)
> **Cross-References:** later in (1)
> **UI Navigation:** go to (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [What we can do](https://www.linkedin.com/learning/javascript-service-workers/what-we-can-do?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/what-we-can-do?u=76281980&t=0)** What can we do with a service worker? If we are creating a Progressive Web App, or a PWA, a service worker is mandatory. A service worker is like the brain of a Progressive Web App. So if we want to create these kind of apps we need to create a service worker. In this case the service worker will be responsible for installing all of the apps assets such as CSS, [JavaScript](../../Skills/Software%20Development/JavaScript.md), SVG files, images, videos and web phones. And it's also going to be responsible for serving those files from a local cache. Maybe we don't want to create the Progressive Web App but we want to offer the user an offline experience. In that case, the service worker, will be responsible for that behavior. We can make the whole website available offline, or just part of the website. It's up to us. When we are dealing with web performance, the service worker is a key piece to increase the experience of the first look because the service worker can cache files and serve those files from the cache when the user is trying to access the website again later. Sometimes, there is connection, the user is online but the server is down, or there is some weird situation. For example, the server is overloaded, or somehow the server is answering with a 404.
>
> **[1:37](https://www.linkedin.com/learning/javascript-service-workers/what-we-can-do?u=76281980&t=97)** So the file is not there, so abnormal situations. There service worker can detect and make decisions. Clients app because remember the service worker, if installed, clients app. We can also detect high-latency networks or even captive portals. For example, you're in a hotel or your in a coffee store, you connect to the [wifi](../../Glossary/Standard/Wi-Fi.md) but you didn't accept the terms, or you don't have password, so the OS is exposing a network but it is not working. Well, the service worker can detect that situation and do something with that, or replace the server, or act like the server to provide our website or web app the right files. The service worker can also generate local content and that content will be HTTP responses that are not real, so they didn't come from the server. We can also create Middleware or attach Middlewares to network connections. So for example we can have software that is tracking, measuring, it is adding client hints to a server, or adding headers to every request and we can install or uninstall those Middlewares pretty easily with a service worker. With some limited ability, the service worker can execute code in the background. No matter if the website or the PWA is
>
> **[3:09](https://www.linkedin.com/learning/javascript-service-workers/what-we-can-do?u=76281980&t=189)** on the screen or not. The browser is limiting the used cases from this because we don't want a service worker to consume all users battery in the background. And finally, another important use case is to convert file formats. The service worker can [Fetch](../../Skills/Web%20Development/Fetch.md) files from the server in an unknown format for the browser. For example, it can download web page files that's in image format on IOS. But IOS is not so important at format, but JavaScript in the service worker can convert that file into .png and then serve the .png from the service worker to the client.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [Wifi](../../Glossary/Standard/Wi-Fi.md) (1), [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **Env Vars:** pwa (2), ios (2), css (1), svg (1), http (1)
> **Analogies:** for example (4), such as (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)

#### [Requirements and compatibility](https://www.linkedin.com/learning/javascript-service-workers/requirements-and-compatibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/requirements-and-compatibility?u=76281980&t=0)** - [Instructor] Let's talk about requirements for using service workers. First, the user needs a compatible browser. Fortunatley for us, it's available on latest versions of all main browsers. So it's currently available on Chrome, Firefox, Opera. On Safari, it's available since Safari 11.1; and on iOS, iPhone, and iPad, that means iOS 11.3. It's not available on Apple Watch browser, only on iPhone and iPad. On [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) Edge, that's [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md), it's available since [Windows](../../Glossary/Service/Windows.md) version 17. And on the mobile space, we also have Samsung Internet browser, we have UCWeb, and KaiOS, that's a feature phone. All of them are supporting service workers. What about WebView compatibility? Let's start with [Android](../../Glossary/Sdk/Android.md). For example, when you are browsing a website inside the [Facebook](../../Glossary/Service/Facebook.md) mobile browsers, so you're in Facebook, you click on a link, it's being rendered inside Facebook, that website, and in that case on Android, on most Android devices, you do have support for service worker, but that service worker is completely isolated from the browser, which means if you visit the website as a user with service workers from Chrome, and then you visit that website from within Facebook, they're not going to share the cache. On iOS, service workers are not available on web views,
>
> **[1:37](https://www.linkedin.com/learning/javascript-service-workers/requirements-and-compatibility?u=76281980&t=97)** which means they're not available on Facebook, and they're not available on Chrome or other browsers on iOS, such as Firefox or even Edge on iOS. On iOS, Apple doesn't allow other web engines, which means all the other browsers in the App Store are just using the web here. Regarding other social networks, such as Twitter, they're using Custom Tabs on Android or Safari View Controller. In these cases, they do have support for service workers, and they share the content with the browser. Now, in terms of requirements from our side, from our server, we must serve our website in a secure context. That means HTTPS with a TLS certificate. That is to avoid man-in-the-middle attacks to anyone to hack, users' connections and unchecked service workers without our consent. So that's why we need HTTPS. There is one exception for that, that's localhost for our development environment. The service worker should be only one [JavaScript](../../Skills/Software%20Development/JavaScript.md) file, and that's the entry point. We can import other scripts, but only one JS file will be our service worker. Finally, we need a page in the scope, so in the folder inside our domain,
>
> **[3:13](https://www.linkedin.com/learning/javascript-service-workers/requirements-and-compatibility?u=76281980&t=193)** to register our service worker. And we need to have mind, that on some special situations, such as incognito mode or [Privacy](../../Skills/Data%20Science/Privacy.md) mode, services workers might not work. Another example is that when users have disabled third-party cookies on iframes, sometimes, service workers won't work also on those iframes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Facebook](../../Glossary/Service/Facebook.md) (5), [Android](../../Glossary/Sdk/Android.md) (4), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **Code Identifiers:** ios (6), iphone (2), ipad (2)
> **Tools:** safari (3), firefox (2)
> **Analogies:** such as (3), for example (1)
> **Env Vars:** https (2), tls (1)
> **Versions:** 11.1 (1), 11.3 (1), version 17 (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [Service workers in action](https://www.linkedin.com/learning/javascript-service-workers/service-workers-in-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/service-workers-in-action?u=76281980&t=0)** - [Instructor] Let's see in action, how service workers work. When you get to a browser, it's the first visit to a website or a PWA, you type a URL into the browser you have an empty tab and that empty tab is basically making their request to the web server. That web server will answer with a webpage, so an [HTML](../../Skills/Web%20Development/HTML.md), and then the browser will render the content. There is no service worker involved here, but here comes the new part. The new things that we need to understand in the web platform. That webpage is registering the service worker. That service worker is inside the web browser, and that service worker from now on, will be responsible only for this code of that service worker. At that point, the original webpage, the one that registered the service worker is not yet controlled by the service worker. So any request that that webpage is doing is bypassing the service worker because the service worker is not controlling that webpage yet. But if you open new tabs on the same scope, so on the same domain and folder of that service worker, or if you have a website with an iframe also on that scope, then that service worker will be controlling, seeing for example, all the requests that those new webpages are requesting to the server.
>
> **[1:34](https://www.linkedin.com/learning/javascript-service-workers/service-workers-in-action?u=76281980&t=94)** Also if you reload the page, so the initial tab, you reload that page in that case the service worker will now be responsible for that webpage and will be controlling every request that that page is doing to the web server. That also happens when the webpage is requesting resources from third party servers such as CDN's. So basically the service worker is acting like a proxy, it's in the middle between the network and the webpage, or the browser, and every request going to the server is trapped, or might be trapped by the service worker. At that point, the service worker can make some decisions. For example, it can finally [Fetch](../../Skills/Web%20Development/Fetch.md) those resources from the network, but it's still in the middle. It can also get them from a local cache, very same API known as CacheStorage available with service worker where we can store and retrieve actually be responses. So the service worker can take responses from the cache and deliver those responses to the webpage. And from a webpage point of view, those resources are really coming from the web server. So from a webpage point of view, you don't know that the service worker was in the middle. Well, you're thinking, who is filling that CacheStorage with the actual responses?
>
> **[3:10](https://www.linkedin.com/learning/javascript-service-workers/service-workers-in-action?u=76281980&t=190)** Typically the service worker downloaded all the files beforehand when the service worker is being installed. So there is an event, the install event, and that that event, the service worker will download and cache all the resources necessary for later. The service worker can also synthesize responses so basically it can create responses on the fly that are not in the cache or not coming from a server. In this case we can do this only for same-origin requests. So we cannot fake third party resources such as [JavaScript](../../Skills/Software%20Development/JavaScript.md) files. And finally, there is this message in API available between the service worker and webpages, PWA's, and iframes, meaning that we can not only drop http request, but also sending and receiving messages from the webpages.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (1), [Fetch](../../Skills/Web%20Development/Fetch.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Env Vars:** pwa (2), api (2), url (1), html (1), cdn (1)
> **Analogies:** for example (2), such as (2)
> **Definitions:** known as (1), is an  (1)
> **CLI Commands:** make (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Understand the life cycle](https://www.linkedin.com/learning/javascript-service-workers/understand-the-life-cycle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/understand-the-life-cycle?u=76281980&t=0)** - [Instructor] Understanding the life cycle of a service worker is really important because this is new to the web and the life cycle is completely different to any child script that you have coded before. So, first time you access a website, there is no service worker installed, and the website is registering that service worker. So, from a service worker's point of view this is what's going on. First, the service worker is parsed, so the file is downloaded by the browser and parsed, and then it go through an installing process, and there is an event that we combine to known as install. After it was installed, it's waiting. Maybe you're thinking, waiting for what. Well, it's waiting because sometimes there is a previous service worker in memory, so it's waiting for that previous service worker to stop working. After that's happening, we go through the next step that is activation. So, there is an activate event that we can also listen, and after that the service worker is activated. Activated means that it's right now the owner of that scope, so anything that is happening in the scope of that service worker is now the responsibility of this service worker. But, don't think that activated means that it's currently running because we have something else known as a running status. If there is any error inside installing or activating,
>
> **[1:35](https://www.linkedin.com/learning/javascript-service-workers/understand-the-life-cycle?u=76281980&t=95)** so you are downloading files and that's not working, an error event is fired and after that there is a special state known as redundant that means you're still in memory but you're not really the service worker for that scope, so the next step will be that you will be removed from user's device. So, after the service worker is activated, we have a running status. So, it is start as idle, that means that it's not executing any code. There are a series of events that will fire a running status, which means now your service worker is executing code. These events are [Fetch](../../Skills/Web%20Development/Fetch.md), push, or message that we will cover later. After a while, you're not executing any code again. In that case, the service worker will go to idle again, and after a couple of seconds of being idle the service worker will terminate or stop the service worker, which means the file, the actual file, the actual process will not be in memory anymore. There are no events that you can listen for this particular situation. So, later in the future, a new fetch, push, or message event will happen and in that case you will go back to the running status, which means you can execute code again. You need to be very careful here because when that happens, there are no events that you can listen to
>
> **[3:10](https://www.linkedin.com/learning/javascript-service-workers/understand-the-life-cycle?u=76281980&t=190)** to know that you are running again, and also, it might not be the same instance. So, be careful storing status or global variables because when you go back, it might not be the same instance, so the memory is starting from scratch. Finally, after you have activated, at one point you will go to redundant, and that means that the user is unregistered in the service worker or there is a new service worker coming that will replace us, so in that case we will go again to redundant and there is no event that we can listen for that particular situation. If a service worker is stopped, it will run again when the browser is fetching a resource again later, when the page or the Progressive Web App is sending a message to the service worker, when the browser receives a push message from the server, when the browser has pending operation, or when it receives payment responses. On all these situations, you will run again. So, wrapping up with important things here. Don't rely inside the service worker on global variables. You can store a state in IndexedDB or cache storage if you want. Sometimes more one instance of the same service worker might be memory, mostly on Safari and iOS, so be careful with that. Remember that sometimes we don't have events available for running status changes, and don't block the thread or you will be terminated.
>
> **[4:44](https://www.linkedin.com/learning/javascript-service-workers/understand-the-life-cycle?u=76281980&t=284)** You cannot execute as much code as you want. You have just a very small amount of time available to execute your code inside the service worker. If you are blocking the thread, the browser will terminate you at any time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Fetch](../../Skills/Web%20Development/Fetch.md) (2)
> **Definitions:** known as (3), is a  (3), is an  (2), means that (2)
> **UI Navigation:** go to (2)
> **Warnings:** be careful (2)
> **Code Identifiers:** ios (1)
> **Cross-References:** later in (1)
> **Tools:** safari (1)
> **Prerequisites:** install (1)

#### [See all service worker registrations](https://www.linkedin.com/learning/javascript-service-workers/see-all-service-worker-registrations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/see-all-service-worker-registrations?u=76281980&t=0)** - [Instructor] Any website that you are visiting can actually be installing and registering a service worker. So, how can you see all the current registered and installed service workers? If you're using Chrome on desktop or on [Android](../../Glossary/Sdk/Android.md), you can go to a special URL. It's chrome://serviceworker-internals. When you get there, you will see all the service workers that are currently installed in your system. For example I have one service worker here for the scope code nasa, I can see the registration ID, some information about that service worker, for example it's currently activated, remember activated doesn't mean that it's currently running, because it's currently stopped, we can see what happens if I open a new window inside Chrome, and we go to code.[nasa.gov](https://nasa.gov). So basically, this same scope. It can also be any URL, not just code.[nasa.gov](https://nasa.gov) it can be even nonexistent pages, like 404 pages. So anything in that scope will be managed by the service worker. So if I now go there, you can see that it's currently running. So it's currently executing code. If I close that tab, now there are no clients available for that particular service worker, so it will wait a couple of seconds, typically around 20 seconds, and then it will go to stop again
>
> **[1:34](https://www.linkedin.com/learning/javascript-service-workers/see-all-service-worker-registrations?u=76281980&t=94)** because there is nothing to do right now in the browser. But here we can see, that the lifecycle of the service worker is not directly related to the lifecycle of the webpage. Now we can see it's currently a stop, so after a while, because there were no requests from code.[nasa.gov](https://nasa.gov), it's say, the browser says okay, it's time for terminating these service workers installs. And now it can be activated and installed for years if you don't access the same website again. From this debugging URL, you can also force a start, so now it's running again and we can also stop it at any time. If you're a Firefox user, you can also get to the same point using a about.debugging#workers or accessing the menu, web developer, service workers. Here we can see a similar page, we can start service workers from here. I have here my code nasa service worker, also I can open a new tab or a new window and go to code.[nasa.gov](https://nasa.gov) and if I go back here we can see it is currently running, and if I close the tab after a few seconds, we will see also that it will go from running to a stop but remember, we are not changing the installation status, so that's still the activated service worker for that scope. And now, it finally also stopped inside Firefox.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Android](../../Glossary/Sdk/Android.md) (1)
> **URLs:** [nasa.gov](https://nasa.gov) (4)
> **UI Navigation:** go to (4)
> **Env Vars:** url (3)
> **Tools:** firefox (2)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### [Understand the scope](https://www.linkedin.com/learning/javascript-service-workers/understand-the-scope?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/understand-the-scope?u=76281980&t=0)** - [Instructor] We have already mentioned that every service worker has one scope. We know that the scope, it's basically a domain, a port number, and also a path, that can also be the root folder. So, the service worker will manage everything that happens, within that scope. So, for example, if the scope is [https://linkedin.com](https://linkedin.com), then here we can see several examples that will be managed by the service worker. So, [linkedin.com](https://linkedin.com), so the home page, will be managed by the service worker, the same as /about, or /assets/static/terms.pdf, or anything inside that domain. But if we are going to a different port, such as [linkedin.com](https://linkedin.com):1800, that's not managed by that service worker, because it's a different scope. The same happens if there is a subdomain, such as learning.[linkedin.com](https://linkedin.com). It's a completely different scope. If you define the scope as a subfolder of your domain, such as [linkedin.com/pwa](https://linkedin.com/pwa), then now, the homepage of [linkedin.com](https://linkedin.com) or /about are not part of that scope. Only files or subfolders inside that pwa folder will be part of that scope, such as pwa/script, pwa, and many other things inside, such as other-pwa/documents/about.[HTML](../../Skills/Web%20Development/HTML.md). That's also part of that scope.
>
> **[1:35](https://www.linkedin.com/learning/javascript-service-workers/understand-the-scope?u=76281980&t=95)** Also, if you change the port number, it's not going to be part of that scope. Typically, when you have a website, you have several HTMLs, unless it's a single-page application. So, in that case, you might have several HTMLs, such as index.html, about, and learning.html in the same scope, that all of them are registering the same service worker, let's say, sw-a.js. That's the typical situation. But sometimes, you might have multiple registrations. So in the same scope, you have index.html and learning.html that are registering one service worker with one file, and another HTML in the same scope registering another service worker. And that's a problem. So, this is what happens. When the user visits the first HTML, service worker A is registered and activated. Then, when the user visits the other HTML, a new service worker is replacing the previous registration. So now service worker B will be installed, and will probably wait for A to stop executing, so it will become the active service worker. So when the user is going to the third HTML, then the previous service worker is installed again, so a new registration happens. So, this is not an ideal situation. So in the same scope, try to have only one service worker. We need to remember that, at one point,
>
> **[3:10](https://www.linkedin.com/learning/javascript-service-workers/understand-the-scope?u=76281980&t=190)** we might have two different registrations, an old service worker, and a new service worker. The old service worker is the one that is currently controlling all the pages, at that point. When there are no clients available, then it will become redundant, and it will be removed from memory. And the new service worker will be installed, and it will keep in waiting state until the old service worker is removed. After it's removed, then the new service worker will be activated and waiting for new clients. Sometimes, you might have sub scopes. So for example, you have one service worker for [linkedin.com](https://linkedin.com), and another service worker for a subfolder on [linkedin.com](https://linkedin.com), such as [linkedin.com/app](https://linkedin.com/app). Two different service workers. So that's possible and both registrations will be there. But in that case, one service worker, in this case B, will be responsible only for the app subfolder, and anything else in that domain will be managed by service worker A. Safari on MacOS and iOS has something different with scopes. It's known as partitions. To avoid cross-site tracking, it's using a more complex scenario only on websites with cross-origin iframes that are using service workers. So, for example, your website at [linkedin.com](https://linkedin.com) can be open in a normal page, in a normal browser tab, or it can be also inside an iframe on another domain, for example, [microsoft.com](https://microsoft.com).
>
> **[4:44](https://www.linkedin.com/learning/javascript-service-workers/understand-the-scope?u=76281980&t=284)** In that case, even if both [linkedin.com](https://linkedin.com) instances are pointing and registering the same service worker, Safari will create a partition on the one with an iframe. And it's creating two different scopes, one for [linkedin.com](https://linkedin.com) alone, and the other one for the pair of [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) and [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) at the same time. It's the same service worker file, but they will be different registration instances inside that particular browser. If you don't have cross-origin iframes, you don't need to worry about webkit partitions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (13), [HTML](../../Skills/Web%20Development/HTML.md) (9), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (2)
> **URLs:** [linkedin.com](https://linkedin.com) (11), [https://linkedin.com](https://linkedin.com) (1), [microsoft.com](https://microsoft.com) (1)
> **Analogies:** such as (7), for example (4)
> **File Paths:** index.html (2), learning.html (2), other-pwa/documents/about.html (1), sw-a.js (1)
> **Env Vars:** html (4)
> **Tools:** safari (2)
> **Definitions:** is a  (1), known as (1)
> **Code Identifiers:** ios (1)

#### [Learn vocabulary and concepts](https://www.linkedin.com/learning/javascript-service-workers/learn-vocabulary-and-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/learn-vocabulary-and-concepts?u=76281980&t=0)** - [Instructor] Before coding our first service worker, we need to understand some new terms, some vocabulary about service worker. We have the registration, that's basically one instance of a service worker that was intended to be activated. Sometimes, several registrations can be in one browser, because, for example, they might be an error state or redundant state, so that means, for example, you are trying to register a service worker that does make space on the server. And you can try to do that registration many times, so you can have in memory several registrations with error state. But only one registration may be available in the waiting state, so it's waiting for the active one. And only one active registration should be available at any point. We do have a service worker known as the controller. So the controller is the service worker that's currently responsible, so controlling, the current navigation page, so the current [HTML](../../Skills/Web%20Development/HTML.md). So every browser's tab, or every standalone Progressive Web App that you're currently using, has only one service worker that is the controller. Sometimes, it can be null, so basically that means, there is no service worker controlling the current page. That may happen, because, for example, you load the page for the first time, so there were no service worker.
>
> **[1:32](https://www.linkedin.com/learning/javascript-service-workers/learn-vocabulary-and-concepts?u=76281980&t=92)** Or you load the page in a special situation, such as, for example, using Shift + Reload, and that will load the page without the service worker. We have also, something known as the client. The client is one item in the scope of the service worker, and it's, basically, an item that can be controlled by you. It can be, for example, an HTML, it can be a Progressive Web App, it can be an iframe, or it can be a web worker. So, a thread that was created by one of those HTMLs. One service worker can have, actually, as many clients as they might be available in the browser. So there is no limit in the amount of clients that one service worker can have. There are two kind of clients, controlled clients and uncontrolled clients. A controlled client is actually a client that is controlled by the service worker. So that means, that that client, so that page, that HTML, that document, was loaded when the service worker was active, or, it can also be because the servicer worker can claim that client later. Sometimes the service worker has a client that is an uncontrolled one. In that case, that client is bypassing the service worker. It's part of this code, but it's not currently controlled by the service worker. It can be because it was loaded when no service worker was available, or, for example, with a navigation special action, such as loading with Shift + Reload. Let's see this in a diagram.
>
> **[3:06](https://www.linkedin.com/learning/javascript-service-workers/learn-vocabulary-and-concepts?u=76281980&t=186)** So we have two clients. Clients can be web pages, Progressive Web Apps, iframes, inside other pages, or web workers. We can have controlled clients, or uncontrolled clients. When we have controlled clients, they have a controller, the controller is, basically, the service worker. So when you have iframes, you have a container and the iframe. Both can be controlled by the service worker, if they're part of the same scope. But sometimes, we have an iframe that is in the same scope, and the container there, is not. So in that case, the service worker will not control the container.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (3)
> **Analogies:** for example (6), such as (2)
> **Env Vars:** html (3)
> **Definitions:** known as (2), is an  (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 2. Work with Service Workers

[↑ Back to Table of Contents](#table-of-contents)

#### [Register a service worker](https://www.linkedin.com/learning/javascript-service-workers/register-a-service-worker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/register-a-service-worker?u=76281980&t=0)** - [Narrator] Now it's time to register our first service worker. To register a service worker, we need to call the register function inside navigator.serviceworker. The simplest way for the function, is to set the URL as the first argument. So it's pretty simple. Let's create an [HTML](../../Skills/Web%20Development/HTML.md) file and call that function from it. I'm here in my editor, I will use Visual Studio Code. I will open a folder. And I'm going to create an HTML file from here. Let's call it index HTML. It will be a very basic HTML, so it will have the doctype, a title called First Service Worker, and some content, an H1 with Service Worker Test. Finally, you're going to create an output element, where we're going to send some text regarding the service worker registration. The next part is to create a script tag. In this tag, we're going to register our service workers. It's going to be navigator.serviceWorker, capital W, be careful with that, register and the name of the service worker script as the first argument. So it should be in string, and for example I will call it serviceworker.js.
>
> **[1:37](https://www.linkedin.com/learning/javascript-service-workers/register-a-service-worker?u=76281980&t=97)** Typical file names are serviceworker.js or sw.js. Any name will work, but because there will be only one per scope, so per wrap, it's important to use a name that you would recognize pretty soon. So service worker seems like a good idea. Of course we need the file, so I'm going to create that file, serviceworker.js and for now it's going to be empty. The next part is to understand what service worker is returning. The register function is returning a Promise of a Service Worker Registration. Because it's a promise, I'm going to use then, this is not mandatory, but I want to see what's going on, so I'm going to receive the registration option, that has information about the current service worker and also I'm going to catch possible error. In this case, I'm going to change the contents of the output element with some text explaining if it was registered or not. I will do document query selector, I will take my output and change it's inner HTML with Service Worker registered properly. I'm going to do something similar on the catch with Service Worker not registered. In the case of the error, it can be because our website is not being served in HTTPS,
>
> **[3:11](https://www.linkedin.com/learning/javascript-service-workers/register-a-service-worker?u=76281980&t=191)** or maybe from the file protocol we cannot install or register service workers in the file protocol. Just double clicking the file, we really need a web server. Also, maybe the file is not in the server, so the server is giving you 404. In that case, you will also receive execution in the catch handle. Finally, because we might have out there, browsers without support for service worker, we don't want to call the register on an undefined option for those situations. So typically we're going to ask with the condition, if service worker property is available in the navigator option. If service worker is available in navigator, then we are going to register. If not, we will just say that service workers are not available. The API is not available, or maybe the user is in a situation, it's loading the HTML in a local file system, or it's loading in HTTP, not HTTPS.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (6)
> **Env Vars:** html (6), https (2), url (1), api (1), http (1)
> **File Paths:** serviceworker.js (3), sw.js (1)
> **Code Identifiers:** serviceworker (1)
> **Tools:** visual studio (1)
> **Analogies:** for example (1)
> **Warnings:** be careful (1)
> **Prerequisites:** install (1)

#### [Change the default scope](https://www.linkedin.com/learning/javascript-service-workers/change-the-default-scope?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/change-the-default-scope?u=76281980&t=0)** - [Instructor] We know that that the service worker has a scope but how to define that scope? By default, we do have a scope and that's the current folder of the service worker. So, for example, if your service worker is in the root folder of your domain, then the root folder of your domain is the scope of the service worker. Which might be a problem if you're used to insert all your [JavaScript](../../Skills/Software%20Development/JavaScript.md) files in a sub folder. For example, it's a folder with a name of scripts. In that case, by default, then the service worker will own or will manage only that script folder and that's not what we typically want. So that's why we have another way to define the scope with an explicit scope declaration. To do that, we're going to set a second argument of the register function that we have already seen before. In that case, we need to set an object, in this case using [JSON](../../Skills/Web%20Development/JSON.md) syntax with the scope. We can define explicit scopes down. So, to manage, it's a folder. For example, a service worker in the root folder can define a scope down as myapp folder inside my domain. But what happens if you want to go up. For example, if you are in the script folder we want to define the scope as a root folder.
>
> **[1:36](https://www.linkedin.com/learning/javascript-service-workers/change-the-default-scope?u=76281980&t=96)** So, we want to manage the whole domain. By default we can not do that for security reasons. To make it work, we need the service worker to provide a HTTP header. So, the service worker file will add an HTTP header known as service worker allowed with a maximum scope. That's like, let's say the service worker file is defining it's own maximum scope. If the maximum scope is the root folder then we can set any scope in that domain. So, to be honest, most of the time we don't want to mess with explicit scopes. Usually it's a much better idea to just insert the service worker file in the root folder of your app. It can be the root folder of your domain or the folder of your app. But it's a good idea to not change the scope frequently because you might end up with problems with multiple service worker registrations. Now let's go to the code and analyze how to allow an explicit scope in the registration. I'm in the index [HTML](../../Skills/Web%20Development/HTML.md) file that you can get from the begin folder in 02_02 and here I have a register function code. I need to add a second argument so I will add a comma, in this case in a new line but you can keep it the same line, I will add a Json option.
>
> **[3:11](https://www.linkedin.com/learning/javascript-service-workers/change-the-default-scope?u=76281980&t=191)** I will say scope and within a string defining the scope that I want. By default, it's going to be the root folder because it's where the service worker file is currently located. But if I want to have my whole app inside an app sub folder and I want the service worker to be responsible only for that sub folder then I can specify here /app. But in this case, that's not typically what we want so I can just keep / so it will manage the whole server. The whole domain will be managed by this service worker file.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (2), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Analogies:** for example (4)
> **Env Vars:** http (2)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Handle service worker events](https://www.linkedin.com/learning/javascript-service-workers/handle-service-worker-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/handle-service-worker-events?u=76281980&t=0)** - [Instructor] Let's open the project in O2_03, Begin. And I'm now in the serviceworker.js file, which is currently empty. Inside this file, we don't have the global context that we are used to, but we do have for example the same console options that we used to, so we can say "We are a service worker" One of the most important things to do within a service worker is to listen to events. To listen to events in a worker, including service worker, we typically use the self option. The self option, it's similar to this, but in this case it's not going to change when you are working with ES6 classes. So self, we can add EventListener. For example, from the life cycle that we have seen before, we can use activate and install. So I'm going to add two listeners, one for install, one for activate. Inside this event for now, we are just going to send messages to the console. So console.log, Install event. And console.log, Activate event. Remember, both events have to do with the installation process. I'm going to save the file, and now we are ready to test this on different browsers. Remember, we can not open the index.[HTML](../../Skills/Web%20Development/HTML.md)
>
> **[1:37](https://www.linkedin.com/learning/javascript-service-workers/handle-service-worker-events?u=76281980&t=97)** from the file system, so we need a web server. To install a web server, I'm going to use the integrated terminal. So View, Terminal. And from here I'm going to use [npm](../../Skills/Web%20Development/npm.md) to install a web server known as SURF. But any other web server will work. So it's npm install -g from global, server. Because it's a global installation, if you are in [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) or Mac OS, you need to add S, U, D, O, Sudo, before to request route permission. Also you can use npx to execute serve without installing. Now npm is installing the package and now it's ready to use. To create a server you just use serve and the folder. For example . means the current folder. And that will open a server in localhost:5000. Control click in [Windows](../../Glossary/Service/Windows.md) or Command click on Mac will open your browser.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [npm](../../Skills/Web%20Development/npm.md) (3), [HTML](../../Skills/Web%20Development/HTML.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **Prerequisites:** install (6)
> **CLI Commands:** npm (3), sudo (1), npx (1)
> **Analogies:** for example (3), similar to (1)
> **Env Vars:** o2_03 (1), es6 (1), surf (1)
> **UI Navigation:** open the (2), click on (1)
> **File Paths:** serviceworker.js (1), index.html (1)
> **Tools:** terminal (2)

#### [Debug with Developer Tools in Chrome](https://www.linkedin.com/learning/javascript-service-workers/debug-with-developer-tools-in-chrome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/debug-with-developer-tools-in-chrome?u=76281980&t=0)** - [Instructor] Let's open begin on O2O4 and now we are ready to see what's going on inside a browser. So I'm going to open Chrome and load localhost:5000 or command click, control click on window on the URL. And you can see our website is currently saying that the service worker was registered properly. So, if I open Developer Tools or I inspect or the menu, more tools, Developer Tools, we can see all the tabs that we have here. If you go to the Console, we are going to see our three messages. We are a service worker, install event and activate event. Also there is a tab, a very important tab by the way known as application where we can see information about the service worker. With dragging you can move that application tab, so I usually keep application and console really close together. So, inside service worker we can see here, that the recent service worker that is currently activated and running. We can stop the service worker, we can start the service worker from here. We can also trigger an update, or we can unregister the service worker. We can see the current clients, so we have only one client. But if I open a new tab on local host 5000
>
> **[1:36](https://www.linkedin.com/learning/javascript-service-workers/debug-with-developer-tools-in-chrome?u=76281980&t=96)** and I'm going back to the first tab, we can see I have now two clients because now we have two tabs pointing to the same service worker. We have some debug tools here to test push messages and backroom sync to different APIs that we will see later on top of service workers. And also we have several tools to divide and test service workers. For example, when we are in the console, we saw before that we can see messages coming from the service worker. But if we are executing code here, for example if I say alert, hello, that code is being executed in the global context. Like normal [JavaScript](../../Skills/Software%20Development/JavaScript.md) code. In fact if I say this, you can see it's the window option. So you know this. But is there any way that we can execute actual code in the console but in the context of the service worker? For that, we need to look at this drop down menu. There, we can see our service worker js number 14, that's an internal number inside Chrome. It's a registration number that is currently activated. If I click there, you can see it now the background color of that drop down menu is some kind of pink, that basically a hint saying be careful, because the console is now in the service worker. So if I tried to do an alert now, the same alert, hello,
>
> **[3:11](https://www.linkedin.com/learning/javascript-service-workers/debug-with-developer-tools-in-chrome?u=76281980&t=191)** now it doesn't work. It says alert is not defined. Why is that? Because now we are not in the window. We are in the service worker global scope. And we know that within the service worker, we can not access user interface APIs. When you are in Chrome in sources, you can also find your service worker. And with any file you can add break points, you can work with any tool that you are used to. For example, you can call the debugger, like this, and that will create a break point on the fly. So when the JavaScript code gets to that line, it will basically pause and halt execution and it will let us debug our code as you're used to with normal JavaScripts. Going back to the application tab, service workers, we have a couple of options that are really important. For example, update and reload. Because every time we reload, it's not reinstalling a service worker. In fact, if I go to a console now I don't have any message. So I'm reloading, and there are no messages. Because the service worker, it's currently in memory, and it's also installed. So our event handlers are not being executed again. So something that we can do is we can click force update on page reload.
>
> **[4:44](https://www.linkedin.com/learning/javascript-service-workers/debug-with-developer-tools-in-chrome?u=76281980&t=284)** So every time you reload now, if I open the console I can also open the console drawer so we can see another console here at the bottom. Every time I refresh I can see that a new ID is available. So I'm refreshing, and a new ID is available. So it's registering a new service worker. Every time you refresh, it's like there were no service worker before. Offline and bypass for network are debug options for caching. And we will use these options later in this course. Finally, we can unregister a service worker from here. So now it's been deleted, so if I refresh, it's creating a new one. So but I can try to see what happens if I unregister a service worker, and also from here I can open and see all service workers that are currently installed in these particular Chrome installs in this particular device.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2)
> **UI Navigation:** go to (2), open the (2), click on (1)
> **Analogies:** for example (4), it's like (1)
> **Env Vars:** o2o4 (1), url (1)
> **Definitions:** is a  (1), known as (1)
> **CLI Commands:** find (1)
> **URLs:** [localhost:5000](https://localhost:5000) (1)
> **Ports:** :5000 (1)

#### [Debug with other browsers](https://www.linkedin.com/learning/javascript-service-workers/debug-with-other-browsers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/debug-with-other-browsers?u=76281980&t=0)** - [Instructor] I'm here in Safari, for the Mac, running the same localhost:5000 project that we have seen before. We can see that here the Service Worker is registered properly and when we open the tools here, we don't have an applications tab like in Chrome. To debug Service Worker within Safari, we need to go to the develop menu, and search for the Service Worker sub-menu and there we are going to see our current domain. If there are iframes inside this website, we might see more than one Service Worker. If I open this, we are going to receive an external window that is currently connected with the Service Worker only. Here we have the network tab, we have the debugger, we can have breakpoints, resources, that is currently using, timelines for performance analysis, and the console. Everything is here inside the Web Inspector for Service Workers. We don't have a system like we saw before in Chrome, to reload the Service Worker, unregister the Service Worker, or even see what's going on. So what you need to do to unregister Service Worker it's in the develop menu, you need to empty caches. Now jumping into Firefox, loading the same URL. When you open developer tools, we don't have access to Service Worker from here.
>
> **[1:34](https://www.linkedin.com/learning/javascript-service-workers/debug-with-other-browsers?u=76281980&t=94)** But we can go to the menu, web developer, and here we have a section for Service Worker. That's opening about:debugging#workers where we can see that we currently have two Service Workers installed in this computer. And here we have our own Service Worker, that is currently stopped. We can unregister the Service Worker from here. We can start the Service Worker, and we have debug. So when it's running, we can click on debug. That will open the console and the debugger. It's simpler compared with Chrome. But we have access to breakpoint, and we do have access to the console. Finally, let's jump into [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md) and [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) Edge. I'm running the same URL, this is Edge at least 17. You can see the Service Worker is working properly. I can inspect and in the web tools we can access the debugger section. Inside that debugger tab, there is a Service Workers folder that if I open, I can see my localhost Service Worker. I will unpin the file picker, and here I can see a very similar to Chrome tool, where I can unregister the Service Worker, update, or inspect it.
>
> **[3:09](https://www.linkedin.com/learning/javascript-service-workers/debug-with-other-browsers?u=76281980&t=189)** When I inspect, I have a full inspector that is currently running in the Service Worker.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **UI Navigation:** open the (2), go to (2), click on (1)
> **Tools:** safari (2), firefox (1)
> **Env Vars:** url (2)
> **URLs:** [localhost:5000](https://localhost:5000) (1)
> **Ports:** :5000 (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)

#### [Load external files](https://www.linkedin.com/learning/javascript-service-workers/load-external-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/load-external-files?u=76281980&t=0)** - [Instructor] Let's load 02_06, Begin, and open serviceworker. In this case, we have all the code that so far is pretty small and only one file. But on a real project, we know that sometimes we don't want to write all the code in only one file. Or we might want to use additional third-party libraries that are targeting service workers. Fortunately for us, the service worker global scope has an importScript function. It a synchronous function receiving one or more URLs of additional JavaScripts that we want to load. So, for example, we can do events.js. I can create a new file here, I will call that file events.js, and inside that file, I'm going to move my two event handlers, pasting that part. So now my service worker has an additional file that is going to be downloaded and parsed at line 3. This is a synchronous API, which means if I have something on line 4, like console.log, that will be after loading the events.js script. Remember this is a synchronous API. If we want to load more files, we can have as many importScripts as we want,
>
> **[1:36](https://www.linkedin.com/learning/javascript-service-workers/load-external-files?u=76281980&t=96)** or we can add more names here, like another file. The advantage of using comma and more files instead of using different importScript references is that in this case, these two files might be downloaded in parallel. They will be executed in sequence, guaranteeing you the sequence that you set here, but the download might happen in parallel, so that's the advantage. Another advantage of using importScript is that we can load scripts from third-party origins. We know that the service worker file that we are pointing to in the register function must be served in your same domain. It must be there. But that file can include files from other sources. Remember that you should only use reliable servers because if that server is down, your service worker will fail. How can you detect if that file can't be executed or downloaded? You can do a try-catch. Because importScript will fire an exception if there is any error trying to import in that or those scripts at that point.

> [!info]- Semantic Content
>
> **Code Identifiers:** importscript (4), importscripts (1)
> **File Paths:** events.js (3)
> **Env Vars:** api (2)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Work with the registration](https://www.linkedin.com/learning/javascript-service-workers/work-with-the-registration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/work-with-the-registration?u=76281980&t=0)** - [Instructor] I'm in 02_07 > Begin project and I'm inside the index.[HTML](../../Skills/Web%20Development/HTML.md). When we were registering the serviceWorker, we need to remember that we receive a promise. When that promise give us the callback when that promise was fulfilled, we're going to receive a registration object. That object is important because there are several events that we combine to the registration, also there are some properties that we can listen to, for example, when we check the registration object, we can verify if there is an actual active serviceWorker currently available and it will give us the active serviceWorker. So, for example, we can listen to events for that serviceWorker such as onerror or onstatechange in the case that serviceWorker, for example, is going to be replaced by a new one. Also we can check its scriptURL and current state. Active is not the only serviceWorker that we can check. We can also check if there is any waiting serviceWorker. That's another serviceWorker with the same API that active has and also we do have installing and here we can see if there is currently a serviceWorker that is being installed. Typically that happens really fast unless you are the downloading a lot of files,
>
> **[1:35](https://www.linkedin.com/learning/javascript-service-workers/work-with-the-registration?u=76281980&t=95)** you are pre-caching a lot of files during installation that we will see how to do that later, so unless you are doing that, typically you're not going to have a very large installing operation. So, typically it will be active pretty soon. Waiting will be important when you have two serviceWorkers an old serviceWorker and a new one that we will check later. The registration object also has the information about the current scope. So, registration.scope will give us the current scope, so we can replace our string with a template string from ES6 and say Service Worker registered properly at we can insert that scope there. That's the current registration scope. That because we are defining that scope explicitly, it will be that one. If not, it will be the default scope. That registration object also has several events that are important for [user experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) but before seeing those events, let's see another way that we have to access that registration event, so let's say that later in the future in your HTML, you want to access that registration option, so we have a way to get it at any point using navigator.serviceWorker.getRegistration. That will give us a promise,
>
> **[3:09](https://www.linkedin.com/learning/javascript-service-workers/work-with-the-registration?u=76281980&t=189)** so we also need to do then and catch and we will get the registration argument and we need to add the catch for any kind of error trying to get the current registration. Also, because we are still using the serviceWorker API, we might be interested in verifying if the API is available before using it. So, if serviceWorker is available in navigator, then we are going to get that registration object. It's the same registration object that we have here. It's the same one, so it's just a different way to get that reference. While we are here in registration, we can see the events that are available when we type on. For example, we have the onupdatefound. That sounds good when an update for our serviceWorker is found, so we can directly assign that property or we can add an EventListener for updatefound and have an EventListener here that will do something when an update is found, typically when an update is found, we want to check the current installing worker, so the worker that is currently being installed because an update was found, that means a new serviceWorker is currently being installed, so I'm going to say the serviceWorker that is installing, it will be from the registration installing.
>
> **[4:42](https://www.linkedin.com/learning/javascript-service-workers/work-with-the-registration?u=76281980&t=282)** That's the serviceWorker. And for that serviceWorker, I want to add an EventListener for statechange and for that statechange, we want to check, so every time that that serviceWorker that is being installed is changing its state, we really want to do something and I'm going to check if, in this case, the installing serviceWorker state is equal to install. That means we know that the new serviceWorker was installed, right? And here we can do something such as inform the user that the new version of our app is available, ask the user do you want to refresh? Now to get that version or later? Or maybe you don't want to show the user any hint that there is a new version and you want to do everything silently but at least you know how to get that registration option now and how to listen for some important events that will improve the user experience.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (2), [User experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) (2)
> **Code Identifiers:** serviceworker (21), scripturl (1), serviceworkers (1), getregistration (1)
> **Analogies:** for example (4), such as (2)
> **Env Vars:** api (3), es6 (1), html (1)
> **Definitions:** is an  (1), is a  (1)
> **File Paths:** index.html (1)
> **Cross-References:** later in (1)
> **Exercise Files:** template (1)

#### [Update the service worker](https://www.linkedin.com/learning/javascript-service-workers/update-the-service-worker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/update-the-service-worker?u=76281980&t=0)** - [Instructor] After we have registered the Service Worker, in the future we usually want to change it with new code, so we need to think about this for a minute. When the Service Worker is going to be updated because the Service Worker is installed in users' devices. It works when the user is offline. So, the browser has a checking algorithm that is basically a byte-by-byte comparison in the service worker file. Some browsers are also making that byte-by-byte comparison in all the scripts used by ImportScripts. We can force an update from develop tools and also the browser will fire automatically that algorithm at some points but it can also be fired by an API, for example, we can have a user interface with an update button that will force the browser to make the check at that point. The API is pretty simple. When we have the registration object, we just call update and that will force the browser to try to go and run the checking algorithm. So, the algorithm is different per browser and per version. In the worst case scenario, the browser will check after 24 hours but only on the main service worker file, not on imported scripts. On the best case scenario, the browser will check on every new instance of the service worker's process on all the files used by that service worker,
>
> **[1:34](https://www.linkedin.com/learning/javascript-service-workers/update-the-service-worker?u=76281980&t=94)** the entry point, so the main service worker file and also all the imported scripts. Let's see this in a diagram. We have a browser with an active service worker and let's say it has two imported scripts and we have of course all these files in the server and also the browser has a browser cache. We are not talking here the cache storage, we are talking about the typical HTTP browser cache. Your files, the script files, can have HTTP headers, for example, max-age. So, the browser cache can include your service worker scripts. Let's say that your actual service worker was served with a max-age of six hours. What happens if in three hours, for example, you change the service worker file? So, now it's the green one, you changed the file. Now, let's say that your current installed service worker, so the active service worker in the browser is just three hours old, so the browser won't check for updates. It will wait for the six hours with a maximum of 24 hours. If your service worker is eight hours old, then the checking algorithm will be fired and then the browser will make a byte-by-byte comparison with the new file and it will see that there is a new version and then that new version of the service worker
>
> **[3:08](https://www.linkedin.com/learning/javascript-service-workers/update-the-service-worker?u=76281980&t=188)** will be installed and it will be in the waiting state waiting for the old one for removed from memory. Let's go back to the idea that you have served all your scripts with a max-age of six hours. The question is what happens if you change one script but not the service worker script, so you changed one of the imported scripts on your server. Some browsers even if the service worker is now eight hours old will not see any difference because they will just see the service worker file. Note the imported scripts. So, it's important for now at least to change one byte of the service worker at least, it can be a comment, it can be a version number every time one of your imported scripts has changed. The new spec will check on all the scripts and because one of the scrips has changed, then it will install a new service worker registration because one of the imported scripts have changed. The modern API is currently available, for example, on Chrome since version 68 will let us define in the options, second argument of the navigator.serviceWorker.register function and updateViaCache option accepting three possible values, imports, all or none. This is not yet available on every browser.
>
> **[4:43](https://www.linkedin.com/learning/javascript-service-workers/update-the-service-worker?u=76281980&t=283)** Imports will tell the HTTP browser cache that will not be used for the entry point but only for the imported scripts. That's the default value starting in Chrome 68 meaning that the service worker main entry point will always be checked through a network. It doesn't matter the max-age HTTP header. The browser cache will only be used for the imported scripts. If we use all, that's typically the default on other browsers. The cache will be used for all the files and none, it means it will never use the cache, so that means that every time it's firing the check algorithm it will always go to the network and try to [Fetch](../../Skills/Web%20Development/Fetch.md) all the files to make a byte-by-byte comparison.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **Env Vars:** http (4), api (3)
> **Analogies:** for example (4)
> **CLI Commands:** make (3)
> **Code Identifiers:** serviceworker (1), updateviacache (1)
> **Definitions:** is a  (1), means that (1)
> **Versions:** version 68 (1)
> **Cross-References:** go back to (1)

#### [Manage updates in your code](https://www.linkedin.com/learning/javascript-service-workers/manage-updates-in-your-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/manage-updates-in-your-code?u=76281980&t=0)** - [Instructor] We are back in our code. In this case, I am loading the project at 0209 begin. I am in the index [HTML](../../Skills/Web%20Development/HTML.md). And we're going to start adding in our HTML the button that we'll call an update function that would try to force an update check. Let's call this update check. So we integrate that function. So, inside the script tag, we can also create an external script tag for this. We're going to create the function update. In this case, we need the registration. We're going to ask for navigator service worker get registration. Remember, this is a promise. So we will get the registration object in the call back. And in this case, we're going to call registration update. This will fire the checking algorithm, that byte by byte comparison. Then, in our code, we already have an event listener when an update was found. And here we were looking for the current state of the new service worker. That in this case it can installed or activated. So, when it's installed for example, we can change our output and say that a new service worker is installed and waiting. And if it's not installed, it's because it might be activated, so we can also check if the state is activated.
>
> **[1:37](https://www.linkedin.com/learning/javascript-service-workers/manage-updates-in-your-code?u=76281980&t=97)** We can say that the new service worker is now controlling the page. So this is basically doing all the checks. So let's see this in the browser. I'm going to refresh. I'm going to check that here I have two service workers; the old one and the new one. We have one that is waiting for the activation. From the depth tools, we can click skip waiting, and that will basically force the old service worker to disappear, and the new one to be activated. So you can see that now the new one is controlling the page. So, our event listeners are working. If I fire a new an update check, nothing happens because we didn't change the service worker. So let's make a change. Going back to the code, I'm going to change something in the service worker. Remember that some browsers are not checking on the import to the script, for example, the events JS. So if we change something in events JS, we need to also make any change in the code in the service worker entry point. That will change in the future; some browsers are already doing the byte by byte checking comparison on all the files but that's not happening on every browser yet. So, one change that we can do, is we can have here a version number. So we can say that this is version two. And here we can make any change like: This is install event, and let's add an exclamation mark.
>
> **[3:14](https://www.linkedin.com/learning/javascript-service-workers/manage-updates-in-your-code?u=76281980&t=194)** So I'm changing the file. But I am also changing here the version number. So, that will compatible with all the browsers. Going back to our browser, how can I check if this is working? Well now I can fire another update check. And now we can see that because I have really changed the file, the algorithm realized that now there is a new version. So you can see that the new service worker is installed and waiting. It's not yet the controller; the new one, it's not yet the controller. So now right here, it's waiting for being activated. So if I basically close all the clients, so all the tabs, and come back again, the number 45 will be activated. Also, for debugging purposes, I can just click on skip waiting without reloading the page, and then that will change the current controller of this page. So if we click, and now the new service worker, so number 45 is now controlling the page. So this is how you update your service worker on how you manage that from the user interface.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (2)
> **CLI Commands:** make (3)
> **Env Vars:** html (2)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **UI Navigation:** click on (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Unregister the service worker](https://www.linkedin.com/learning/javascript-service-workers/unregister-the-service-worker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/unregister-the-service-worker?u=76281980&t=0)** - [Instructor] Back to our code in video 10 of chapter two, it's time to talk about unregistering service worker. On most of the browser, your service worker will leave and be activated mostly forever. So it's not going to disappear automatically. Safari is the only browser that, right now, might delete and unregister your service worker after a few weeks of inactivity. So if the user is not going back to your website, Safari might delete your service worker. But let's say that, in the future, maybe in a year, you don't want the service worker anymore in your current scope. Probably you are thinking, well, let's delete the file. So let's take the service worker in the server and delete the file. And then, when the browser is doing the check algorithm, it will verify that there is no service worker in the server, and will delete the service worker registration in the client. Well, that's not how it works. If you delete the file in the server, the client will never unregister the service worker. Because the whole idea of the service worker is to work offline and in any situation. And sometimes, maybe the server's is down, maybe you are in a captive portal, so you are inside the [WiFi](../../Glossary/Standard/Wi-Fi.md), without yet actual connection to the web, and maybe that captive portal is giving you a 404 when you are accessing the service worker. So that's why browsers are not
>
> **[1:35](https://www.linkedin.com/learning/javascript-service-workers/unregister-the-service-worker?u=76281980&t=95)** unregistering the files automatically. So we need to unregister it manually. So, in that future [HTML](../../Skills/Web%20Development/HTML.md), you might want to do the check that I'm going to do right now. I'm going to load this for learning purposes with a button that on click will just call unregister. On a real project, you would probably execute this code during the load process. Unregister. So unregister will be similar to update, so I will just copy and paste the update function, and I will change its name, of unregister. So when you click on that button, it will execute my function. And instead of calling update on the registration object, it's going to be unregister. So it's pretty easy. Unregister, and we will receive a prompt that we can listen to if we want. So if I do this, and then go to the browser, I will refresh, and now we can see that the service worker's registered properly. I can, of course, check an update. There is no update. And I can click Unregister. And in that case, you can see that now, my service worker registration is still there, but it's currently deleted. So it's still there in memory, because it's currently the controller of that page. So it's still in memory, it's still active, but it's marked for being removed later when there are no more clients managed,
>
> **[3:11](https://www.linkedin.com/learning/javascript-service-workers/unregister-the-service-worker?u=76281980&t=191)** or controlled, by that service worker. So this is how you unregister a service worker, typically in a future version of your app.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wifi](../../Glossary/Standard/Wi-Fi.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Tools:** safari (2)
> **UI Navigation:** click on (1), go to (1)
> **Env Vars:** html (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


### 3. Acting as a Network Proxy

[↑ Back to Table of Contents](#table-of-contents)

#### [Capture the fetch event](https://www.linkedin.com/learning/javascript-service-workers/capture-the-fetch-event?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/capture-the-fetch-event?u=76281980&t=0)** - [Instructor] We have a ServiceWorker, we know how it works, how to update it, how to install, how to listen for events, but it's not yet a network proxy, and we have mentioned that that's the most important of anything. So, we are here in 0301 begin in the serviceworker.js file, and we're going to listen for the most important event here, that's [Fetch](../../Skills/Web%20Development/Fetch.md). So, self, that's the ServiceWorker, addEventListener, "fetch." So, fetch will refire every time a webpage, a PWA, an iframe, or a worker, and my scope, I'm the ServiceWorker, is making a request to the network. Not matter if that request is going to my server or if it's going to a cross-origin server. In any case we will get that fetch event handler fired. For example, here we can do a console.log saying "Fetch event fired." I will save this, and now we can refresh. We need to check in the app tools that we have update and reload enabled. Remember, for development purposes it's a good idea to have that update and reload, so every time we reload the page it will force an update of the ServiceWorker file so we will always be working with the latest version of the ServiceWorker, that's the idea.
>
> **[1:34](https://www.linkedin.com/learning/javascript-service-workers/capture-the-fetch-event?u=76281980&t=94)** So, if I refresh now I can open the console, I can see my events, Install event!, Activate event!, and let's see what happens, for example, if I open a new window like there and I go to localhost:5000. You can see that fetch event was fired. Okay, so even if I go to any URL, even URLs that are currently not existing will also fire that fetch event. That's pretty cool. What else can we do here? Going back to the code, we can take that event and inside event there is a request object, and in the request object we do have the URL. So, I will change the quotes, so we are going to use a template string, and instead of this we are going to say 'Fetch,' and we're going to take from event.request the URL, fetching that URL. So, I'm saving this, I'm going back here, I'm reloading, and let's see what happens. If I open a new window... Now from here I can go to localhost:5000 and we can see Fetching and the URL. Now if I try anything else, for example, let's say /pwa, we can see that that URL is being fired, so which is pretty cool.
>
> **[3:12](https://www.linkedin.com/learning/javascript-service-workers/capture-the-fetch-event?u=76281980&t=192)** Going back to our code, let's add a new file to our project. I'm going to create the very basic styles.css file. This will change just the background color of the body with a color known as antique white, and I'm going to link to that style sheet. Styles.css with a rel of stylesheet. So, if I go back here and I refresh I'm getting that background color, and we can see in the console that the ServiceWorker is reading that fetch to that CSS file. I'm going back to the code now in the serviceworker.js file. I'm going to do something else, not just doing console.log, because this is the first ability to see everything that's passing through from the browser to the network, but it's not just seeing. We can also respond in the name of the server. So, to do that we are going to take the event argument and we're going to call a function known as respondWith, so we're going to respond to the fetch event with a response. We can respond with an HTTP response or with a promise of that. In this case we're going to create our response here. Response is a new constructor in [JavaScript](../../Skills/Software%20Development/JavaScript.md) that is basically an HTTP response,
>
> **[4:47](https://www.linkedin.com/learning/javascript-service-workers/capture-the-fetch-event?u=76281980&t=287)** so I'm going to just take my string and use that string here. Okay, so I'm saving this and I'm going to the browser. I'm refreshing, and look at this... Now we are seeing Fetching and the URL in the browser like an [HTML](../../Skills/Web%20Development/HTML.md), so that's currently my response from the server. So, if I try anything in the URL, any URL, I'm seeing this.
>
> **[5:21](https://www.linkedin.com/learning/javascript-service-workers/capture-the-fetch-event?u=76281980&t=321)** So, what's going on here, because we cannot even see our HTML anymore. Now we have registered and activated a ServiceWorker that is seeing every request and is responding with a text. Basically, the website is not getting that from the real network. It's getting that from the ServiceWorker, so we can kill a website pretty easily with this because now I cannot access my website anymore if I don't unregister my ServiceWorker. What happens in the Network tab? So, if I refresh the Network tab, here, that's the preview, that's the response. We can see the headers, okay, but it's not really receiving this from the real server. In fact, what we can see is that in the size column there is a mention that this is coming from the ServiceWorker. So, it looks like a network response, but it's not. It was generated by the ServiceWorker.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Fetch](../../Skills/Web%20Development/Fetch.md) (10), [HTML](../../Skills/Web%20Development/HTML.md) (2), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Env Vars:** url (9), http (2), html (2), pwa (1), css (1)
> **Definitions:** is a  (3), known as (2)
> **File Paths:** serviceworker.js (2), styles.css (2)
> **UI Navigation:** go to (3), open the (1)
> **Analogies:** for example (3)
> **Code Identifiers:** addeventlistener (1), respondwith (1)
> **URLs:** [localhost:5000](https://localhost:5000) (2)

#### [Synthesize a response](https://www.linkedin.com/learning/javascript-service-workers/synthesize-a-response?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/synthesize-a-response?u=76281980&t=0)** - [Instructor] I'm back in the code. I'm in the Begin folder, in 03_02, and so far, we have been listening for the [Fetch](../../Skills/Web%20Development/Fetch.md) event. So we are actually seeing all the network requests that are going through our service worker, but we are not actually doing anything with that. So besides doing a console load, we can take the event argument and execute a function known as respondwith. And that's the function that has all the power inside service workers. Because we can respond with an HTTP response, or a promise of that object. In our case, we are going to start creating a response that we will create on the fly. So in a static response that I'm going to create right here. And for that, I'm going to use a response constructor available in [Java](../../Skills/Software%20Development/Java.md) Script within the service worker. This is an actual http response that we are synthesizing from our service worker. That receives at least one argument that's mandatory to the body. So, basically, what we want to show in the browser. So for now, I can just take my URL, for example, or add in a string, and say the URL is, and do a template, so ${event.request.url}, semicolon. Every time a page, a BWA, or an iframe,
>
> **[1:39](https://www.linkedin.com/learning/javascript-service-workers/synthesize-a-response?u=76281980&t=99)** is trying to to fetch something from the network, we are capturing that event, and we are responding with one response. Let's see how it looks like in the browser. So I'm going to look at host 5000, and what I'm seeing is the URL is localhost:5000. And where is my [HTML](../../Skills/Web%20Development/HTML.md)? Where is my background color? My buttons? So it's now replaced by that response coming from the service worker. I can open another tab and try other URLs, even URLs that are not really in the web server. Anything, anything, will be captured by the service worker, and the service worker is currently generating a real HTTP response, but client side. So we are kind of a web server right now. So the browser is trying to bring the file from the server, and the service worker in the middle is saying, no, no, I will give that file, don't worry. So I'm not going to the real server. I'm acting like a server. In fact, if I open the network tab, and refresh, we can see that it seems like coming from the network. I can see, headers, the response, timings. Of course it's really fast, because it's not really
>
> **[3:12](https://www.linkedin.com/learning/javascript-service-workers/synthesize-a-response?u=76281980&t=192)** coming from the network, so there are no network problems such as latency. And even when we look at the columns here, the size columns is giving a hint that this file is actually coming from the service worker, and not from the real server. But, from a browser's point of view, it's just coming from the server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Fetch](../../Skills/Web%20Development/Fetch.md) (2), [Java](../../Skills/Software%20Development/Java.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Env Vars:** url (3), http (2), bwa (1), html (1)
> **Definitions:** known as (1), is an  (1)
> **Analogies:** for example (1), such as (1)
> **URLs:** [localhost:5000](https://localhost:5000) (1)
> **Ports:** :5000 (1)
> **UI Navigation:** open the (1)
> **Exercise Files:** template (1)

#### [The Response object in detail](https://www.linkedin.com/learning/javascript-service-workers/the-response-object-in-detail?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/the-response-object-in-detail?u=76281980&t=0)** - [Instructor] Let's continue with the project. Now looking into the response constructor. The response constructor accepts a body that can be in a string. That's exactly what we did here. But it can also be blocks or binary data, a buffer, or a stream of information. Most important, we have a second argument that is an object where we can set some additional information. For example, the status code. Typically if the request is okay, we're going to respond with 200, but it can be 404, 500, 301, or 302 for redirects. So any HTTP is status code. We can also specify the status text, which is the text that goes with that code. For example, OK, in this case. And also we have header, that's probably the most important property here. Header is typically an object where we can set several headers. For example, I can specify that now I'm going to send content-type": "text/[HTML](../../Skills/Web%20Development/HTML.md)". So now instead of rendering just text, I can render HTML or I can render binary data, such as e-machines, videos, or anything that we want. But now that we can create HTML, let's move these literal into a variable. So I'm going to cut this. So cut. And I'm going to call this the body. And I'm going to create the constant for that.
>
> **[1:34](https://www.linkedin.com/learning/javascript-service-workers/the-response-object-in-detail?u=76281980&t=94)** And now I'm going to paste. Because I'm using the template of strings of the back, I can do mod line, so I can basically write HTML here. So we can specify the doc type with a title like this is Service Worker HTML generation. And then we can have an <h1>, for example, for the URL. Now if I save these, I'm going to the browser and refresh. Now we can see that we do have the title and we do have an <h1>. So we can have HTML here because now we have set the header. The response object is the one that is returned by the [Fetch](../../Skills/Web%20Development/Fetch.md) API. So that means that we can respond with a static response, like this, or we can also respond with a promise. For example, we might be able to respond with a fetch. So we can take the request, fetch that request, and then respond with that request. So that line doesn't make too much sense because basically we are doing the default operation. We are directly going to the network. So most of the time we don't want to do this, so we don't want to create a fetch event handler that is just fetching to the network. Just don't add the handler. But sometimes we want to do something with that request, so instead of doing the fetch, for example, we can respond with a new promise.
>
> **[3:08](https://www.linkedin.com/learning/javascript-service-workers/the-response-object-in-detail?u=76281980&t=188)** Because we can respond with a response or with a promise that we'll return a response later. So I'm going to create a promise here. Resolve, reject. Creating manual promise. And for example I can take a fetch for any URL. I can even take the request. For example I can always fetch the index HTML, that's basically the root folder. And when I have that, I can do something. I can return that, for example. So I can always return the root so I can say that I'm going to resolve my promise with that fetch. So now every URL will point directly to the root folder. To the index HTML. But it's important you understand that if you listen for this promise here... So let's remove the resolve. If you go again to the fetch, if we listen to the promise we are also getting a response here. And that's the same response object that we have here. But that response can be accessed only once. Meaning that if I access, for example, the text of that response or the Blub or the [JSON](../../Skills/Web%20Development/JSON.md). So if I take the data from that response, I cannot send that response back to the browser. So in this case, if you want to send that response to the promise, for example if I want a resolve my promise, so that basically that response will go to respondWith.
>
> **[4:46](https://www.linkedin.com/learning/javascript-service-workers/the-response-object-in-detail?u=76281980&t=286)** But I also want to read the data, like a JSON or I want to get the text and do some parsing or something like that or a stat or something like that, instead of taking the response object directly, I'm going to clone it. So you clone the response and basically then you use it. So that clone method, it's something that you can execute on any response before actually using it. And then you have two responses that are exactly the same and you can consume the data of both without any problem. But in our example, we are just going to comment this because we are going to work with our static solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Fetch](../../Skills/Web%20Development/Fetch.md) (9), [HTML](../../Skills/Web%20Development/HTML.md) (8), [JSON](../../Skills/Web%20Development/JSON.md) (2)
> **Env Vars:** html (7), url (3), json (2), http (1), api (1)
> **Analogies:** for example (11), such as (1)
> **Definitions:** is an  (1), means that (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** respondwith (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** template (1)

#### [The Request object in detail](https://www.linkedin.com/learning/javascript-service-workers/the-request-object-in-detail?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/the-request-object-in-detail?u=76281980&t=0)** - I'm in the serviceworker.js file and now we have a response that is basically [HTML](../../Skills/Web%20Development/HTML.md). So now it's time to talk about the request. So the request that we are receiving is part of a request constructor that we can create objects manually if we want, but in this case, we are going to take the data from the request. and we're going to show that data in our dynamic, on the fly HTML that we are generating. We already know that we have the url there, so let's see what else do we have. I'm going to create the list here. And we're going to add a couple of lis. For example, we can read the current cache information. For example, to know if the data came from the cache or not, or for example if it's a reload operation, so if the user has to reload this, like press the reload button, that means it doesn't want the cache. We can also read, for example, credentials. They will give us information about how the request is handling credentials in terms of, say, more actions, if its sending or not the HTTP credentials. We can also check all the headers, so we have an object with the headers, event.request.headers, so we can read every object like content type, even the case the request is sending data. Let's talk about destination, I think that's important. Destination is in a string, so it's event.request.destination.
>
> **[1:35](https://www.linkedin.com/learning/javascript-service-workers/the-request-object-in-detail?u=76281980&t=95)** I first need to close the lis here, and destination will give us on a string, that will be something like, for example, document. That means, its in html. It can be image, it can be object, it can be a script, it can be audio, video, or style. So it will give us information about what kind of request the browser is trying to do, for what purpose, okay? So that's the idea of destination. We also have the method, so we can know if its a GET, a POST, a DELETE. Event.request.method. It's also in a string. And we also have the refer, that's basically who is making that request. So let's see this in action. I'm going to refresh here, and here we can see that it's a no-cache situation, there are no credentials, there is an unknown destination for this particular load, and it's a GET method. But for example, if I'm going to the console, I can try to [Fetch](../../Skills/Web%20Development/Fetch.md) to localhost:5000 anything, for example, let's say that we have an API or something like that, and I can add method: "POST" like that and I will await for that to finish, that's a promise. And we need to have the protocol, such as https. And now we can see that's the response with the information
>
> **[3:09](https://www.linkedin.com/learning/javascript-service-workers/the-request-object-in-detail?u=76281980&t=189)** and let's see if we can check the body. So I'm going to take this, in parentheses, and I'm going to parse in the text. And here we can see that, for example, in this case, our Service Worker also generated an HTML for the API, but now it says method: POST. So it's basically changing based on the kind of request, that in this case the browser is doing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (4), [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **Env Vars:** html (3), post (3), api (2), http (1), delete (1)
> **Analogies:** for example (8), such as (1)
> **File Paths:** serviceworker.js (1)
> **URLs:** [localhost:5000](https://localhost:5000) (1)
> **Ports:** :5000 (1)
> **API Endpoints:** get  (1)
> **Definitions:** is an  (1)

#### [Work with exact routes](https://www.linkedin.com/learning/javascript-service-workers/work-with-exact-routes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/work-with-exact-routes?u=76281980&t=0)** - [Instructor] So I'm here in 03_05, the begin folder, working on the serviceworker.js file. Right now, every URL that we try, for example, if we go to localhost:5000, it's being managed by the Service Worker. So if I open another tab, for example /images, it's also being managed by the Service Worker. So basically, the Service Worker is responding for every URL. But sometimes, we want to do things different based on the URL. So typically on the [Fetch](../../Skills/Web%20Development/Fetch.md) event, on the real world project, we are going to work with routes. So we're going to see the URL and try to make things different based on how the URL looks like. We know that we already have the URL here. That event.request.url is basically one string. But we can create a URL object so we can get information from it. So I'm going to create a new constant, that's called this parsedurl, and for that we are going to create a new URL object based on that .event.request.url. That object has several properties inside. For example, we can see the host, the origin, the pathname, the protocol, the port. So we have each part of the URL already parsed. Typically what we want for routes is basically the pathname.
>
> **[1:38](https://www.linkedin.com/learning/javascript-service-workers/work-with-exact-routes?u=76281980&t=98)** So for example, we can ask if that pathname is equals to forward slash, so that's basically the homepage, so the domain without specifying any other path, we can do something. For example, we can just return. If we do this, then the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the code will not be executed for the root folder. Meaning that the Service Worker will not really manage the response for the homepage. So if we go back now to our browser, to the root folder, if I refresh, now our [HTML](../../Skills/Web%20Development/HTML.md) is back. But if you pay attention here, I don't have the background color. And if we look in to the console, we have an error here on the styles.css file, saying that there is a problem with that file. And if we open that file, or I can just click here and go directly into the network tab inside chromed apples, we can click on styles.css and we can see that that file is coming from the Service Worker. So the Service Worker skipped the html but not the css. And if I click on it, instead of css, the response is html, that's basically the Service Worker. And we can see here that the destination, so the purpose of this request was for style.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (3), [Fetch](../../Skills/Web%20Development/Fetch.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** url (9)
> **Analogies:** for example (5)
> **File Paths:** styles.css (2), serviceworker.js (1)
> **UI Navigation:** click on (2), go to (1)
> **CLI Commands:** make (1)
> **URLs:** [localhost:5000](https://localhost:5000) (1)
> **Ports:** :5000 (1)

#### [Work with dynamic routes](https://www.linkedin.com/learning/javascript-service-workers/work-with-dynamic-routes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/work-with-dynamic-routes?u=76281980&t=0)** - [Instructor] And we are back with the code. In this case, we are going to work with dynamic routes. So in the last video, we had been working with exact match. So we were looking for exactly one particular URL. But sometimes, it's more difficult because we want to work directly with a folder or with one kind of file, for example JPEG files. So let's say for example that we will have an API. And that API will be available under /api. So let's say that we want to do something different for that particular thing. And of course under API I can have several things. For example, api/weather. I can have api/currency. So different APIs, but they are all under the API sub folder. For that we can use regular expressions. So, we can do something like that. We can take that parsed URL. We are still going to work with the path name, and we're going to check if it's going to match a regular expression. So matches a function, this is a string function that will receive a regular expression. And that regular expression will be something like this. For example, if I want to check if the API [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) is there, and so starting with the API word, we can do something like that. The problem is that this is a URL, so we need to add the forward slash, so I need to add the forward slash here.
>
> **[1:34](https://www.linkedin.com/learning/javascript-service-workers/work-with-dynamic-routes?u=76281980&t=94)** And the forward slash needs to be escape, so I need to alt + back slash like that. So in this case, I am asking if the URL is starting with API. I could also add another slash if I want to make sure that it's not any other word starting with API. So I can also add something like this and I need to also escape. So in this case, if I return and go to the browser, if I refresh the [HTML](../../Skills/Web%20Development/HTML.md) seems to be working without TSS and if I try a slash API, we can see we are getting a 404. So basically we are skipping the service worker. So our system is working. If I try API weather, it's also skipping the service worker. And of course, any other thing that is not API, for example, images, is still going. through the service worker. Going back into the code, instead of just returning from the [Fetch](../../Skills/Web%20Development/Fetch.md) event, we can also take that event and respond with another response, a [JSON](../../Skills/Web%20Development/JSON.md) response for example. That's an option that we need to create, similar to the one that we have created here for HTML. So we're going to create that jsonResponse as a new response and the body can be just an object that we also need to create and some headers. For example, the status as 200, the statusText as OK, the same as we did before,
>
> **[3:09](https://www.linkedin.com/learning/javascript-service-workers/work-with-dynamic-routes?u=76281980&t=189)** but now we need a different constant type. So for the headers, we need to use the mime type for json. For example, application/json. And we need that object, so let's create that object, for example let's say it's an API, so we're going to fake the API so you can see that we can use basically service workers to create a local API. So that's also a typical use case for this. So we can create the mobcap of our real API on the server very simple within the request, within the actions if it's get, post, or delete and doing something directly in the service worker. So that object we have, for example, just temperature like that, and we need to stringify that object because we want to send a string. So I'm saving this and going back here. Images is still going through the normal service worker. And now API weather is giving me a JSON. And if I look here, I can check the headers and we can see that it's application json. So we can use it for a check or fetch request.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (5), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (3), [HTML](../../Skills/Web%20Development/HTML.md) (2), [Fetch](../../Skills/Web%20Development/Fetch.md) (2)
> **Env Vars:** api (16), url (4), html (2), json (2), jpeg (1)
> **Analogies:** for example (10), similar to (1)
> **Code Identifiers:** jsonresponse (1), statustext (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** go to (1)

#### [Clone before reading data](https://www.linkedin.com/learning/javascript-service-workers/clone-before-reading-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/clone-before-reading-data?u=76281980&t=0)** - [Instructor] I'm back in the code in 03_07. And, to this code, we are going to have a discussion regarding requests and responses. So, let's say that we have, for example, in our [HTML](../../Skills/Web%20Development/HTML.md), at one point, we are going to add a button here that will post some data. So it will send some data to the server using [Fetch](../../Skills/Web%20Development/Fetch.md), or it can be also [AJAX](../../Skills/Web%20Development/AJAX.md) like old-fashioned xml http request. So I'm going to post some data. I will create, in my index.html inside on a script tag, postData, and we're going to use the fetch api. That api is available today on most browsers. So, we're going to fetch this, for example, to an api that it's going to be receiving our data, and we're going to specify that it's going to have the method POST. It can also be PUT. And the body, the actual content that we're going to send, it can be a string, it can be a [JSON](../../Skills/Web%20Development/JSON.md), it can be blobs or binary data, anything will work. So, for example, we can send some json, with some data inside, for example, an array of countries. Chile, USA, and, let's add here, China. So we'll send that data when I click on that button. So let's say that you're a service worker,
>
> **[1:35](https://www.linkedin.com/learning/javascript-service-workers/clone-before-reading-data?u=76281980&t=95)** and you want to see that data. So inside the service worker now, as we saw before, we can try to check, for example, the request method. So, if it's POST, maybe I want to see what's inside before sending that to the server. So, we can actually do that with event.request.body and that body is basically an object that we need to parse. I can parse it as json, as blob, as a stream, but most of the time, the problem is that, if we consume the data, so if we see the body, no one else can do that. So we cannot send that request to the server anymore. So this happens with requests and also with responses. So every time you want to see the contents that gets in or out, and also we want to use that object for the browser to continue the operation, we need to make a clone. So we need to clone the request or the response, and then work with that cloned request or cloned response. In this case then, we can just, in this case, return, that means we are not going to do anything in particular, so we will let the browser continue with that request to the server, but then we have a cloned request and we can actually see the data
>
> **[3:11](https://www.linkedin.com/learning/javascript-service-workers/clone-before-reading-data?u=76281980&t=191)** that was actually going to the server. So, this is important, every time you need to read, or even change, request or response information, first clone the object, and then let the browser continue the normal operation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Fetch](../../Skills/Web%20Development/Fetch.md) (3), [JSON](../../Skills/Web%20Development/JSON.md) (3), [HTML](../../Skills/Web%20Development/HTML.md) (2), [AJAX](../../Skills/Web%20Development/AJAX.md) (1)
> **Analogies:** for example (5)
> **Env Vars:** post (2), put (1), usa (1)
> **File Paths:** index.html (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** postdata (1)
> **Cross-References:** as we saw (1)
> **UI Navigation:** click on (1)


### 4. Cache Storage

[↑ Back to Table of Contents](#table-of-contents)

#### [Understand the new Cache API](https://www.linkedin.com/learning/javascript-service-workers/understand-the-new-cache-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/understand-the-new-cache-api?u=76281980&t=0)** - [Instructor] For years, we have been working with several storage APIs in the client. Now it's time to say hello to a new one, it's the Cache Storage API. This API comes with the service workers API. And it's a new storage available client-side, so in the browser. It's different from IndexedDB or Web Storage. Well, IndexedDB stores objects, and Web Storage stores strings. In this case, the Cache Storage API has HTTP requests as keys and HTTP responses as values. It's like a dictionary of requests and responses. So it's like a browser cache, but managed by our service worker. It's not the same cache as the one that is managed by the browser. The one that is used by the browser when you reload the page to not download everything again, but this is completely different. It's similar because we are storing HTTP responses but it's completely a new API. Regarding limits, it depends on the browser, so, we will not need permission from the user to use the space. On Chrome or basically Chromium-based browsers, we can store up to 6% of the available size in user's hard drive or memory if it's a mobile phone. This maximum is per origin, not per service worker.
>
> **[1:39](https://www.linkedin.com/learning/javascript-service-workers/understand-the-new-cache-api?u=76281980&t=99)** So that means if you have more than one service worker in the same domain, but in different folders, they will share the space. Safari is the most restrictive browser. It's allowing us only to store 50 megabytes per origin. Firefox, it's 10% of the available size, and Edge is the one with the more complex formula to decide the maximum. On Edge, it's up to the volume size because Edge works on mobile devices with [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md), mobile duh-dish-shun, tablets, and also desktop computers. So in that case, if it's a mobile phone typically the volume size is less than eight gigabytes. It will have only 50 megabytes per origin. Up to 32 gigabytes, that typically is tablet, it 500 megabytes, up to 128 gigabytes, it's 4% of the volume size, that can be, for example, a netbook. And finally a desktop, so if you have a hard drive with more than 128 gigabytes, it will be 20 gigabytes or 4%. So you can see it's a lot of space that every website can use without user's intervention. On some browsers there is an API available to ask about the current information about quota and usage. It's navigator.storage.estimate
>
> **[3:12](https://www.linkedin.com/learning/javascript-service-workers/understand-the-new-cache-api?u=76281980&t=192)** that we return a promise with information about the current usage of our origin. Regarding the life span of the data, most browsers will keep the data, let's say forever. So, browsers will not delete that data that we are storing with cache storage. The only exception is under storage pressure. So if the user doesn't have more space in her device then that will pressure the browser to start deleting files from storage. Safari, on iOS and macOS, is the only browser that has a policy on removing data after a couple of weeks of inactivity, which means that if the user is not coming back to our website, after a few weeks Safari can delete the service worker, and all the files that service workers in that origin have downloaded. On some browsers, such as Chrome, you can ask for Persistent Storage. In this case you're asking the browser, hey browser, please don't delete the data that I have sha-ft fayb-duh. And the browser will grant you permission for persistent storage on some situations such as, high activity with that website, or having push messages enabled, or if the user has installed that website as a PWA. For using that API you-shaz call navigator storage persist,
>
> **[4:50](https://www.linkedin.com/learning/javascript-service-workers/understand-the-new-cache-api?u=76281980&t=290)** and it will return a promise with a Boolean value, saying if it was granted, or not. Just remember that with cache storage, the owner is the origin, not the service worker. So several service worker will share the cache. Be careful because if you unregister a service worker, you're not deleting the cache data. Other responses that we are storing there are grouped in something known as a cache. That's like a folder where we're going to store responses. And the API is not just available on service workers, it's also available on clients, so basically on [HTML](../../Skills/Web%20Development/HTML.md). In our website, normal plain [JavaScript](../../Skills/Software%20Development/JavaScript.md), we can also access these files stored in the cache storage API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Env Vars:** api (9), http (3), pwa (1), html (1)
> **Analogies:** it's like (2), such as (2), for example (1)
> **Tools:** safari (3), firefox (1)
> **Definitions:** is an  (1), means that (1), known as (1)
> **Code Identifiers:** ios (1), macos (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### [Prepare the project](https://www.linkedin.com/learning/javascript-service-workers/prepare-the-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/prepare-the-project?u=76281980&t=0)** - [Instructor] In this chapter, we are going to work with cache storage. For working with cache storage, we are going to use a real project because that's how we can make an offline capable website or offline capable app. For that, you can open 0402 Begin from the project files. And there you will find four [HTML](../../Skills/Web%20Development/HTML.md) files, three [JavaScript](../../Skills/Software%20Development/JavaScript.md) files, and folders for CSS, images, and videos. It's a website for some California tours. If you open the terminal, we can serve the current folder and see this website in action. Now, we need to open this URL, the URL you see in the terminal, in the browser. And this is how it looks like. It has three links: Tools, mission, resources. And the index HTML, the homepage. In the homepage, we have some weather information that is using a current API, using the [Fetch](../../Skills/Web%20Development/Fetch.md) API, to get the weather. If I refresh, you can see that information is coming dynamically from an API. If we open Developer Tools from the menu, Inspect, or More Tools, Developer Tools. When we go Application, Service Workers, we might have an old service worker
>
> **[1:36](https://www.linkedin.com/learning/javascript-service-workers/prepare-the-project?u=76281980&t=96)** from our previous project, because we are still working on the same origin, so the same localhost in the port 5000. So it's a good idea every time you create a new project, and you are still working on localhost, to go to the Application tab inside Developer Tools. Inside the Application tab, look for Clear storage. There, you can see the current storage quota that is currently available for your project for your origin. So we have around 64 gigabytes. And from here, if we scroll down, we can delete everything using Clear site data. So that will unregister service workers and delete all the caches so we can start from scratch without really a service worker. So if we refresh now, now that service worker is redundant. So it's still in memory, but it's going to be deleted in awhile. So at one point, it will be out of the browser. So that means that this website doesn't have a service worker yet. So let's go now to the code. And let's register a service worker. So we do have a serviceworker.js file. It's empty. We have the weather.js file. It's the one that is going and fetching the API for the weather. And we have a app.js that is empty. app.js is linked from every HTML as a normal script tag. So it's a nice place to register our service worker.
>
> **[3:15](https://www.linkedin.com/learning/javascript-service-workers/prepare-the-project?u=76281980&t=195)** So in app.js, I'm going to first check if serviceWorker is available, and if it's available, then we are going to register our service worker. navigator.serviceWorker, camel case, register, and the URL of the service worker, serviceWorker.js. We don't want to listen for events here, so we don't want to see if it's registered or not. We're going to move forward with the registration. The registration will fail if something happens in the instal event or if there is an error in the service worker, but one of the important parts of service workers is that if it's not there, everything will work anyway without the service worker, because the website will directly go to the server. So after we have done this, we can go back here, refresh, and verify that now we have a service worker that is activated and running. It's doing nothing, but it's activated and running. So now we are ready to start working with the cache. For that, we are going to prefetch the files, but that's for the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (3), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **Env Vars:** api (4), html (3), url (3), css (1)
> **File Paths:** app.js (3), serviceworker.js (2), weather.js (1)
> **UI Navigation:** go to (2), open the (1), scroll down (1)
> **Code Identifiers:** serviceworker (3)
> **CLI Commands:** make (1), find (1)
> **Tools:** terminal (2)
> **Definitions:** means that (1), is an  (1)

#### [Prefetch files on install](https://www.linkedin.com/learning/javascript-service-workers/prefetch-files-on-install?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/prefetch-files-on-install?u=76281980&t=0)** - [Instructor] Back in our project, I'm currently inside the serviceworker.js file. It is currently empty. The first part to create an offline experience is to pre-cache or to cache all the files that we will need later when we don't have a connection. To do that, we're going to work with CacheStorage API and we're going to use the install event, so we're going to listen for the install event of the serviceworker. Inside this event, we are going to access the CacheStorage API and we can use the CacheStorage API using the caches object and from here we are going to open a new cache. Open will create that cache, remember the cache is like a folder. We'll create that cache if it's not there and if it's there, it's just going to open it. Open, we receive just a cacheName. Any name will work, for example, california-assets. It's usually a good idea to version our CacheStorages, like for example, version one because in the future, we might want to create another version of the same website or the same app. In that case, maybe the assets are different and we want to cache that separately, so it's a good idea to version that with your own protocol like B and a number. It's just an idea.
>
> **[1:32](https://www.linkedin.com/learning/javascript-service-workers/prefetch-files-on-install?u=76281980&t=92)** This is returning a promise, so we are going to listen for then and this will give us the cache object. That's basically that this folder where we can save data. In this cache folder, we can add new requests and we can also put request. The difference is that with put, we're going to set the request and the response, so for put we need the response already. With add, we only need the request and then the browser will go and download the file and store the response. So, we have add and that's per request. We can send a new request, so we can create a request on the fly or we can just use a string with a URL but most of the time we don't want to add only one resource, we want to add more than one, so typically we call addAll. AddAll receives an array of requests, so it's common to create a precacheList of URLs that we want to cache and that's something that we need to create, precacheList. Typically we do this as a global variable in the serviceworker. So, it's an array of URLs that we want to cache. Let's say that we want to cache for now only the HTMLs, so it's common to go and say okay, I want to cache the index.[HTML](../../Skills/Web%20Development/HTML.md), I want to cache mission.html, then we have resources.html
>
> **[3:06](https://www.linkedin.com/learning/javascript-service-workers/prefetch-files-on-install?u=76281980&t=186)** and finally tours.html. But this is wrong mostly on index because if we go back to our browser, we don't see index.html in the URL. We see Mission, Tours, Resources but we don't see Index in the URL bar. So, instead of index, we always need to cache the root folder forward slash because we are caching URLs, not real file names in the server. Be careful with that. To finish this part, we need to add one more thing. If you remember from the lifecycle of the serviceworker, the serviceworker will not wait forever before stopping our serviceworker instance. So, when we are doing this, we are caching files and the list may be long, so maybe the list is 10 gigabytes and the browser will not wait for that. What we can do is we can't ask the event, in this case, the install event before filing the event, we can ask to wait until caches.open finished. So, in this case, we are asking the browser to wait until caches.open finishes. WaitUntil receives a promise and caches.open is a promise. The same for addAll.
>
> **[4:39](https://www.linkedin.com/learning/javascript-service-workers/prefetch-files-on-install?u=76281980&t=279)** So, event.waitUntil is necessary for two reasons, first, we don't want to move to the waiting event waiting for being activated before having all the assets and the second reason is that we don't want the browser to terminate our serviceworker in a couple of seconds or minutes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (5)
> **File Paths:** index.html (2), serviceworker.js (1), mission.html (1), resources.html (1), tours.html (1)
> **Code Identifiers:** addall (2), precachelist (2), cachename (1), waituntil (1)
> **Env Vars:** api (3), url (3)
> **Prerequisites:** install (3)
> **Analogies:** for example (2)
> **Cross-References:** go back to (1)
> **Exercise Files:** download the (1)

#### [Visualize your cache](https://www.linkedin.com/learning/javascript-service-workers/visualize-your-cache?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/visualize-your-cache?u=76281980&t=0)** - [Narrator] It's time to load the project 04_04 Begin and from there we can now see if this is working in the browser. To see if our four [HTML](../../Skills/Web%20Development/HTML.md) files are being saved in the cache. So, in Chrome, we are going to reload, you need to check that Update on reload inside the Service Workers area that that tool is enabled. To see if the cache has the files we need to check inside the tools in the application tab the Cache Storage section. There we will find a little arrow that we can open and see the current caches available for the current origins. So for local host 5000. And there we can see our California assets v1. If I click there, I can see all the resources that we are downloaded. I can see the preview and the headers. These files are currently stored in my device. But our project also needs CSS files, [Java](../../Skills/Software%20Development/Java.md) script files, and images. So we need to add that to our list. So, some people are expecting for having something like okay when I do something like, all the images okay. But, unfortunately that's not possible because this is not part of the https aspect. So there is no way to get all the files from a folder in the server.
>
> **[1:32](https://www.linkedin.com/learning/javascript-service-workers/visualize-your-cache?u=76281980&t=92)** So the browser cannot do this. So we need to add all the manifest manually or create one build step that will do this for us. So in this case, I've already done this for you. So if you open assets.js you will already find the list of all the assets that are necessary to render the basic part of this project. So we have java script, css and images. So we just copy this and replace my array with that array. In this list you won't find webphones or video files. And we will cover that later. So now, I can go back to the browser, verify that Update on reload is there because, that's the one that will fire a new registration and a new registration will fire the install event. So now refreshing, going to California assets v1 and now I can see all the images, the css files and everything is there. So the next question is, are we ready for offline? So, who can we test this in a no fly environment? Well I can't turn off my [Wi-Fi](../../Glossary/Standard/Wi-Fi.md) but in this case, a local server. I can stop the server, yes sure, I can do that. But fortunately for us, inside the service workers section in the developer tools on some browsers, we have an offline emulator.
>
> **[3:05](https://www.linkedin.com/learning/javascript-service-workers/visualize-your-cache?u=76281980&t=185)** So that offline checkbox will force a disconnection from the network. So if I click there, now we are offline, technically. So if I refresh, we are expecting the website to appear offline. And if I refresh I can see the t-rex. So that means, it's not working offline. Because we have saved all the files, but no one is actually serving the files. But that's from the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (2), [HTML](../../Skills/Web%20Development/HTML.md) (1), [Wi-Fi](../../Glossary/Standard/Wi-Fi.md) (1)
> **CLI Commands:** find (3)
> **Cross-References:** go back to (1), next video (1)
> **File Paths:** assets.js (1)
> **Env Vars:** css (1)
> **UI Navigation:** checkbox (1)
> **Prerequisites:** install (1)
> **Speakers:** - [narrator] (1)

#### [Implement a cache-first policy](https://www.linkedin.com/learning/javascript-service-workers/implement-a-cache-first-policy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/implement-a-cache-first-policy?u=76281980&t=0)** - [Instructor] Back in our California project we have already saved all the files in the cache, but no one is serving those files. So we actually need to listen for the [Fetch](../../Skills/Web%20Development/Fetch.md) event handler, the same that we did before. And we're going to do this, we are going to respond with, and we need to respond with a promise of a response or an actual response. So we need to go to the cache and see if it's there. So to go to the cache we need to use caches.match. Caches.match will look for a request in that cache, and it will return a promise with the found object if it was found. For example in this case we want to search for the request that the browser is actually asking for. So event.request, and we're going to match that request. In this case we are not saying in which cache we want to search, so this API will look into all the caches available in our origin. So if we want to specify exactly the cache, we can also do that first. Opening the cache and then executing match inside the cache object. But let's do it simple first. So we're going to look into all our caches, and when it's done, we are going to receive a possible response. What happens if there is no response
>
> **[1:34](https://www.linkedin.com/learning/javascript-service-workers/implement-a-cache-first-policy?u=76281980&t=94)** because the file that the browser is trying to get from our website is not in the cache? In that case, some people will think, well you need to go with a .catch, so basically the promise will be rejected. But that's not the case because from a promise point of view, if you make a search and the search gives you no results the promise was fulfilled. So the operation was done. It could be searched, but the result is no actual response. So it's not like an error in the cache. It's basically there is no cache option. So in this case, match will return you a null object if there is no response in the cache. We can check if that object exists. If it's there, this is [JavaScript](../../Skills/Software%20Development/JavaScript.md), so we can take it as a boolean value. If it's there, then we are going to return a response. We are returning this response to event.respondWith. So this is basically, the URL is cached. And this is the actual cached version of that request that we can respond to the browser. Else, means that there is no response, so the URL is not in the cache. So we are going to return with a fetch. So we're going to the network. In this case we will just take the same request. We don't want to change the request,
>
> **[3:07](https://www.linkedin.com/learning/javascript-service-workers/implement-a-cache-first-policy?u=76281980&t=187)** so in this case we go to the network. So this is the typical code that is applying a policy known as cache-first. It's a cache policy. It's very fine if the files in the cache. If it's in the cache, it will always use the cached version. It it's not in the cache, then it will go to the network. That's the whole idea. So now event.respondWith will receive one object, the http response or one promise, a fetch. So I'm saving, I'm going back here. If I refresh, it's not working because I'm offline. Remember to unselect the offline checkbox. So if I refresh, now a new service worker will be activated. Sometime you will see some error messages in the dev tools, at the right of the serviceworker, these error messages are typically part of the offline operation. So when you're offline some things were not working, so that's why you see some error messages. So we do have a new serviceworker, so we have a fetch event handler. So let's see what happens if I select offline, so we don't have a connection now. If I refresh, now you can see the website. It's there. I can open a new tab. I can go to Visual Studio Code.
>
> **[4:41](https://www.linkedin.com/learning/javascript-service-workers/implement-a-cache-first-policy?u=76281980&t=281)** I can stop the server with control + C. So I'm shutting down the server, and now, if I type localhost:5000 I have the website. I'm offline and I have a website anyway. What happens if I try to play the video? The video is broken because we didn't save the video in the cache. So you can see that here some resources might not be there. If I turn on the server again, and untick offline. We are online again, which means, is it taking the resources from the network? Not really. Even when we are online if you go to the network tab and refresh. Most of the resources were downloaded from the serviceworker, not from the server. From servicewoker. Only things like the API for the weather is currently going to the network. Also, if I play the video. - [Video Announcer] Beautiful scenery.
>
> **[5:59](https://www.linkedin.com/learning/javascript-service-workers/implement-a-cache-first-policy?u=76281980&t=359)** - [Instructor] That video is actually coming from the network. So now we have a fully offline capable website. Just because we have a cache and a fetch event handler.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Fetch](../../Skills/Web%20Development/Fetch.md) (5), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **UI Navigation:** go to (6), checkbox (1)
> **Env Vars:** api (2), url (2)
> **Speakers:** - [instructor] (2), - [video (1)
> **Code Identifiers:** respondwith (2)
> **Definitions:** means that (1), known as (1)
> **CLI Commands:** make (1)
> **URLs:** [localhost:5000](https://localhost:5000) (1)

#### [Implement a network-first policy](https://www.linkedin.com/learning/javascript-service-workers/implement-a-network-first-policy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/implement-a-network-first-policy?u=76281980&t=0)** - [Instructor] So, we have a project that is currently working offline even if we are online. Now, every time we refresh, we will see that the app is loaded immediately, so it has really good performance. That's because all the resources, or most of the resources, that are currently in the website, are coming from the local cache storage. If you press Shift Refresh, so if you press the shift key while you click on refresh, that's a normal load without service workers. You can see there is a difference with shift, and now without shift. Let's say that we want to change the color of these titles, like we don't like that color. So, if I right click, and inspect, we can see exactly the CSS selector that we need to change. It's main CSS at line 417. So, let's change that color. We go to main CSS, to that line, and we change the color. Let's say I want to change it with a red color. So, I'm saving the main CSS file, I'm going back to the browser, I'm refreshing, and I don't see any red. Well, do you think maybe we're offline? No, we are not offline. The problem is that we already cached a version of that CSS, so the cache first policy will not let you get updates even if you are online.
>
> **[1:34](https://www.linkedin.com/learning/javascript-service-workers/implement-a-network-first-policy?u=76281980&t=94)** So, let's see other policy. Go in back to the code in this case, to serviceworker.js. We're going to keep that policy, but it's not going to be for all the resources. So we need to get the current URL first, so we are going to create the parsed URL as a new URL object based on request URL, and we need to take, from that parsed URL, we need to take the pathname, and take if it matches, a regular expression. The regular expression will look for a prefix of underscore CSS with the forward slash at the beginning that we need to escape. If that's true, so if that exists, it's because the path is a CSS, we are going to use a Network-first policy. And only if it doesn't exist, we will move and use the cache-first policy. So, the network-first policy will respond to the event with always with a [Fetch](../../Skills/Web%20Development/Fetch.md). So, it will take event request. It will go to the network, so in this case it's network-only for CSS, because if it's failing, if the network is failing, it will fail the CSS load. But we're going to capture the error,
>
> **[3:10](https://www.linkedin.com/learning/javascript-service-workers/implement-a-network-first-policy?u=76281980&t=190)** through a catch in the promise, and in that case we're going to return caches.match. So, we're going to look into the cache in that case, of the same request that we tried to get from the server. So, now we are going back here to our original color, We will go to our browser, click on update on reload, so when we reload the browser, we know that the new service worker will appear, and now we can try to actually change the color, but now disabling update on reload. Because if not, the new CSS will be downloaded, so we are going to be a normal user now. We go to the CSS, we change the color with red, we go back to the browser, and we reload. And now we can see that we have a red color on the title. And if we go to the network tab, we can see that some files were downloaded from the service worker, for example, images, and some other files were downloaded from the network. What happens if we go again to the application tab in dev tools, and select offline, And now reload? We are going back to the original color. Why is that? Because the file that is actually saved in the cache storage is the old one.
>
> **[4:45](https://www.linkedin.com/learning/javascript-service-workers/implement-a-network-first-policy?u=76281980&t=285)** We don't have the red version, so the new version in the cache. We are not updating the cache, at any time. So the cache is generated when we installed the service worker. And we never update the cache unless there is a new version of the service worker file. So that's something that we will solve in the next couple of videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **Env Vars:** css (11), url (5)
> **UI Navigation:** go to (5), click on (2)
> **Definitions:** is a  (3)
> **Cross-References:** go back to (1), in the next (1)
> **File Paths:** serviceworker.js (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Cache new elements after install](https://www.linkedin.com/learning/javascript-service-workers/cache-new-elements-after-install?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/cache-new-elements-after-install?u=76281980&t=0)** - [Instructor] I am back here in my project, and we know that we are caching a lot of files when the service worker is being installed. And we are caching images, CSS files, [JavaScript](../../Skills/Software%20Development/JavaScript.md) files and also HTMLs. But we are not caching other things, for example, fonts. And let me explain why we are not caching fonts. So each font has different versions because different browsers might take different versions of that file. That happens also when you are using, for example, responsive images with a picture tab. If we look into the CSS file, that has actually loaded the font, we can see that one font may use different version. And each browser will take one of these versions. For example the truetype or the woff file. But if we are pre-caching, I don't want to pre-cache all the versions. Because we are not going to use that and we are we going to waste space in users device. So something that we can do is that we can wait for the browser to actually request that font file and at that point cache that file. So on the second load we will have the right version of the file in the cache. To do that we are going to look into the [Fetch](../../Skills/Web%20Development/Fetch.md) event in the service worker js file and we're going to take the cache first policy
>
> **[1:36](https://www.linkedin.com/learning/javascript-service-workers/cache-new-elements-after-install?u=76281980&t=96)** and we're going to add some changes. When we know that the file is not in the cache, that is, in line 43, in the else log, we're going to ask if the current URL, and we do have that current URL here, so I'm can even copy line 27. So we're going to check if the URL is basically beside the font. So we are using a dynamic route using regular expressions to verify if the current request is trying to get the file from the font folder. If that's the case we may want to do something different. If not, we are going to return the normal fetch that we have here. So what I want to do here is basically, we also want to return a fetch request, but we also want to do something different with that fetch request. So let's create the fetch request like this. And then we're going to return that fetch request. So it's basically exactly the same, except I'm not adding anything new here. I'm doing this just to separate the request from the returns so we can see exactly what do we want to achieve. I will go to a new line here and I'm going to say that after the request has finished, so with the then,
>
> **[3:11](https://www.linkedin.com/learning/javascript-service-workers/cache-new-elements-after-install?u=76281980&t=191)** remember fetch is returning a promise, and we're going to do something. And basically I want to take that network response and do something with it. So we do have the response. That response is the one coming from the cache, and in this case the network response is the response coming from the network. So basically I want to to return that to the browser, but also I want to open my cache and put that file in the cache. So for that I will say cache open, that will open my cache, we need to remember the name of our cache, that's California Assets v1, and I need to use the same one. In fact, we don't need to use the same name. For example, instead of California Assets v1, because in this case this is a dynamic asset, I can say California fonts. I can create another folder or another cache for this file. And when the cache open, I want to do this, I want to take that cache and put for the current request, so for the font, I want to take the network response. And finally we need to return that network response, that return is important because that return is the one that is basically going, because this is a promise chain, that return will be the one that will be the fetch request. So we have a problem here, we are putting the file in the cache
>
> **[4:44](https://www.linkedin.com/learning/javascript-service-workers/cache-new-elements-after-install?u=76281980&t=284)** and we are returning that file also for the browser. And the problem is that we can use a network response only once. So what I need to do is I am going to clone that response, so I'm going to save in the cache a clone version of the response. So in this case, if this is the first time that we are accessing that font, it's not in the cache, so basically we are going to the network, and when the network finish, we are saving it in the cache for the next load and then we are also sending that file to the browser. The only missing piece here is that we need new return here. Because we have a chain of promises so network response will go up to caches.open and we need that return that will finally go up to the fetch request option that we are finally returning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Fetch](../../Skills/Web%20Development/Fetch.md) (9), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Env Vars:** url (3), css (2)
> **Analogies:** for example (4), picture (1)
> **Definitions:** is a  (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Use stale-while-revalidate](https://www.linkedin.com/learning/javascript-service-workers/use-stale-while-revalidate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/use-stale-while-revalidate?u=76281980&t=0)** - [Instructor] I'm here with our Explore California offline available website, and we know that now our cache storage has two different folders, california-assets, those are the assets that we downloaded from Scratch when we installed the service worker, and california-fonts, that were downloaded on the fly, based on what browser was downloading, but, we also have a problem. Remember that, if we try to change the CSS, we are not seeing the changes, so that's why we switch between a cache first policy and a network first policy. So, one of the problems that we have is that we can force, as we saw before, we can force a network first policy, but the problem is that when we are doing that, the assets that we downloaded, here in california-assets-v1, it's the old version. It will always be the old version. We need to install a new service worker to get that change. So, we can offer a solution to update the resources that we have downloaded during the install process. The simplest way to do that is to use a pattern known as Stale while Revalidate. so let's do that in the serviceworker.js file. We're going to replace the network first policy that we have here with a new policy. So, I'm going to just comment this by using Command + Slash, or Control + Slash in [Windows](../../Glossary/Service/Windows.md), and I'm going to change that policy
>
> **[1:35](https://www.linkedin.com/learning/javascript-service-workers/use-stale-while-revalidate?u=76281980&t=95)** with one known as Stale while Revalidate. That's the name of the policy, and we're going to apply that, in our case, only for the CSS folder. So, in your Stale while Revalidate, we also are going to respondWith caches.match. So, it's similar to cache first policy. So, we're going to match our current request, and see if it's in the cache or not. So, we will take the response, like that, and we're going to respond something inside here. So, let's first do, we are going to create a [Fetch](../../Skills/Web%20Development/Fetch.md). So, we will go to the network, okay, and then we're going to return the response or the fetch. So, basically, this means that, if we do have a response from the cache, we're going to return the response from the cache. If that's no, if it's not there, if it wasn't in the cache, we are returning the fetch. So, that looks like cache first policy, but you will see that it is a little different. So, let's create a fetch. So, the fetch, we're going to do event.request, and here, we're going to clone the API that we used here. So, we are going to put in the cache, also, the resources. So, I'm going to fetch event.request, and I'm going to also capture the promise, so let's do that here, so then, that will be the networkResponse, arrow function,
>
> **[3:11](https://www.linkedin.com/learning/javascript-service-workers/use-stale-while-revalidate?u=76281980&t=191)** like that, and what we're going to do is we're going to open our cache. In this case, we're going to open our original cache, california-assets-v1 and we're going to evaluate that cache. So, california-assets-v1, and when we open the cache, we are going to take that cache and put something inside. So, we are going to say, for the current request, we are going to take the networkResponse and clone it. So, in this case, we are going to the network, and we are updating the resource with a clone of the networkResponse. Now, we need to make all the returns. So, I need to return the networkResponse, and I also need to return caches.open. So, what's the difference between cache first policy and a Stale while Revaluate? That, if we look at the cache first policy, we are going to the network only if there is no response. Only on the else, but in our case, now, we are going to the network always. So, we're going to the network, no matter what. Then, we are returning to the browser the response, if it's in the cache, or the fetch, if it's not in the cache, and the fetch will go to the network, give that response to the browser, but also make a clone, and save it in the cache, which means that on the next load, we will have an outdated resource in our cache.
>
> **[4:47](https://www.linkedin.com/learning/javascript-service-workers/use-stale-while-revalidate?u=76281980&t=287)** Before actually seeing this in action, we have to change the name of that fetch because it has the same name as the API, so we're going to call this the networkFetch. So, networkFetch, and we're going to return the networkFetch. So, now we are ready to try this in the browser. So, we need to make sure, in the dev tools, in the application folder, service workers, that we do have update on reload, so the new service worker will be activated and running, and the idea, now, is that our california-assets-v1 cache is not going to have resources that were downloaded only during the install process. Now, every time we're actually loading each asset, in this case only CSS assets, it's also updating the cache. So, going back to CSS, we can try to make a change, here, for example, we can change margins for the body, and see the changes directly in the browser. So, if I reload, now, we need to uncheck update on reload, if I reload, I'm not going to see the change in the first reload, because after the first reload, now, that CSS file was updated, so we always need to make a double reload to see our changes. So, a State while Revalidate will basically give the browser a really fast resource
>
> **[6:22](https://www.linkedin.com/learning/javascript-service-workers/use-stale-while-revalidate?u=76281980&t=382)** as soon as possible, so that is, right now, and it's always the old version, but in the background, it's also updating the resource for the next load, so you will always see the new resource on the next load. So, if I go back to the browser and reload, now I can see that new margin after reloading twice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Fetch](../../Skills/Web%20Development/Fetch.md) (9), [Windows](../../Glossary/Service/Windows.md) (1)
> **Code Identifiers:** networkresponse (4), networkfetch (3), respondwith (1)
> **Env Vars:** css (5), api (2)
> **CLI Commands:** make (5)
> **Definitions:** known as (2), means that (2), is a  (1)
> **UI Navigation:** go to (2), open the (1)
> **Prerequisites:** install (3)
> **Cross-References:** as we saw (1), go back to (1)

#### [Deliver alternate content when offline](https://www.linkedin.com/learning/javascript-service-workers/deliver-alternate-content-when-offline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/deliver-alternate-content-when-offline?u=76281980&t=0)** - [Instructor] I'm back in my project in 04_09, and we need to remember that, besides loading font, CSS, images, and [JavaScript](../../Skills/Software%20Development/JavaScript.md) files, we also have in the weather.js file in our project, a call to an API. That API is in [explorecalifornia.org](https://explorecalifornia.org), so its in a different host. It's not in our host, that's local host. But any way the service worker can see an answer for that request because it's our website in our scope the one that is making that request. In this case, I don't want to use any of the previous policies for caching the weather because, of course, weather data is changing frequently. I don't want to cache that. So I want to use a different strategy here. If you look in the root folder, I do have an offline.[JSON](../../Skills/Web%20Development/JSON.md) file. That offline.json file is the one that I'm going to deliver when there is no connection. So weather need the weather JS file to read that error message and if that error message exists with a true then we are not going to try to get the temperature information. Going back to the browser, if we reload you can see that here, right now, we can see San Diego, Sacramento, Fresno, three California cities, and min and max temperatures in fahrenheit. So we want to show something different here when we don't have information for that city. So going back to the code inside weather.js, I need to look for, in this case, the LIs.
>
> **[1:37](https://www.linkedin.com/learning/javascript-service-workers/deliver-alternate-content-when-offline?u=76281980&t=97)** That's line eight to eleven. Where its basically creating the LI that we're actually seeing on the screen. So I cannot access data subzero forecast when we are offline because we know that forecast will not be available here. So we need to change how we are doing this part. So, for example, something we can do is that we can create that LI not as a constant but as a variable and then create an if asking if in the data, the data is basically the object that is parsed from the json, subzero .error exists. And if that's the case, we're going to do something. And, if not, we're going to create the LI like this. We're not going to create a new LI, we're going to use the LI that we defined in line eight. And here we can just take the error from data or we can just say offline. We can change the message. We can use icons. We can change the UI later to show something different. So if I say this and I go back to the browser and I refresh, we can see that the weather currently appears. If we go offline... Remember that we can go offline forcing a disconnection from here. ...and refresh, nothing appears. But that's because no one is currently serving our alternative offline JS file. So now go into the service worker file, we need to add a new policy.
>
> **[3:10](https://www.linkedin.com/learning/javascript-service-workers/deliver-alternate-content-when-offline?u=76281980&t=190)** So we will look here into the [Fetch](../../Skills/Web%20Development/Fetch.md) event handler. So line 27. And we're going to add another condition here. In this case, I'm not going to check for the path name. I'm going to check for the host. Because we know that, in this case, the API is from a different host and we don't have any other resource from that host. The host is in weather.js. It's [explorecalifornia.org](https://explorecalifornia.org). So any request that is going to that server, we are guessing that it's the API and, in this case, we want to do something different. Of course, if you are also loading resources that are not APIs, you should also ask for the path name inside that host. So if that's the case, we are going to respond with a fetch. In this case the fetch will not take the current request. It will be a fetch to one file offline json. And then we need to continue the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the conditions with an else. The problem is that that file, offline json, is not part of our pre-cached list of files, so it's not going to be available when we are offline. So we also need to add that file here. Offline.json. So that file will be pre-cached and it will be available when we don't have connection. So going back to the browser, let's make sure that we unclick offline and we have update on reload so everything will be updated. If I reload now,
>
> **[4:43](https://www.linkedin.com/learning/javascript-service-workers/deliver-alternate-content-when-offline?u=76281980&t=283)** in the cache storage California assets folder we should find offline.json. So now it's available in the cache. That's why, when we don't have connection, we want to see offline. The problem that we have is that, if we are offline or online, we are serving the json file. So we need one more piece here. We don't want to respond with offline.json always. We want to first check if we are offline. So for that I'm going to add another condition here and that condition will be navigator.online. That's a boolean value. It is true when it seems like you're online. And gives you a false when you are for sure offline. So I'm going to check if we are not online, and in this case, it goes through that offline.json. When navigator.online... Be careful with capital L. When navigator.online is false, you know for sure that you are offline. When it is true, you're not completely sure if you're online. It might be true and the connection is not working. So when navigator.online gives you a true, it means like the operating system is exposing a network but it might not work. So if you want to do the checks if it's working or not, you should check the cache of the fetch to see if it's not working properly. So I'm saving the file and doing the final test and going back here and going to reload. I can see now the temperature
>
> **[6:16](https://www.linkedin.com/learning/javascript-service-workers/deliver-alternate-content-when-offline?u=76281980&t=376)** because I'm online and if I force a disconnection and refresh, I can see the offline information. So now we have alternative content we are serving when we are offline.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (10), [Fetch](../../Skills/Web%20Development/Fetch.md) (5), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **File Paths:** offline.json (6), weather.js (3)
> **Env Vars:** api (4), css (1)
> **CLI Commands:** make (1), find (1)
> **URLs:** [explorecalifornia.org](https://explorecalifornia.org) (2)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)
> **Warnings:** be careful (1)

#### [Keep your storage clean](https://www.linkedin.com/learning/javascript-service-workers/keep-your-storage-clean?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/keep-your-storage-clean?u=76281980&t=0)** - [Instructor] When we are working with service workers and application cache, we know that sometimes we want to change the list of files that we are caching. In the previous video, we have added, for example, offline.[JSON](../../Skills/Web%20Development/JSON.md). What happens if the user already has the service worker and the package? It's not going to download that file because the service worker was already installed. So, for that typically we also need to change the version number, that's typically a good idea to change the version number in the name of the cache, so now if I go back to the browser, and refresh, we need to make sure that we are online, when we look at the Cache Storage, we have now v1 and v2, so we have the same assets twice and that may be a problem if in the future we have version 10. How do we know how many versions the user has in the storage and those folders are currently in the space of user's device? We have duplicated data. So, we need to make sure to clean previous versions of cache storages that previous versions of service worker might be installing on users' devices. So, we need to do that. Going back to the code inside the serviceworker.js file, we are going to do that typically in the activate event. Remember, activation happens after installation when that particular service worker is currently the one in charge.
>
> **[1:34](https://www.linkedin.com/learning/javascript-service-workers/keep-your-storage-clean?u=76281980&t=94)** Between install and activate, we have the waiting state, so we might have previous service workers that are currently on stage, so we don't want to clear previous caches in the install because on install we are not yet in charge and maybe another service worker with a different version of the cache is still in memory and supplying resources to the client, so we want to wait for the activate. The simplest way to do this to create a while list of cache storages that we want to keep. So, for example, we can create a Whilelist and with an array of storages that we don't want to delete. For example, in this case, we want california-assets-v2 and also we need to remember that in our code we were saving things in california-fonts as well and also here we need to update v1 to v2 as well when we were updating, in this case, files from the CSS. So that means that our value cache storages are these two, so any other folder that we find in the cache storage should be deleted. Please, be careful if you have more than one service worker in the same origin, like in different folders because all the service workers in the same origin are using the same cache storage, so we don't want to delete things from other service workers. Because deleting the files might take time, it depends on how big the cache storage is, we probably want to wait until the promise finishes
>
> **[3:09](https://www.linkedin.com/learning/javascript-service-workers/keep-your-storage-clean?u=76281980&t=189)** and the simplest way to do this is the simplest but I don't think it's simple, so we need to write a lot of code. It's the caches API has a keys method. That method will return in a promise all the available keys. Keys are basically all the available names, for cache storages. So, and that's a promise, so we will receive all the keys, all the names, and we need to check if basically all these names are or not in our Whilelist. So, to do that, we're going to call Promise.all because we need to return a promise and we're going to take the names and we're going to map them. This is an ES6 method for arrays. And we're going to map them, so each cache now we are in one cache name, let's call this cacheName like this, we're going to check if in the Whilelist, we do have that cachename. If we don't have it, indexOf will return minus one. If we have it, it will return the index in our array, so it's minus one, it means that we don't need this cache. So, we're going to delete it. How? We're going to return caches.delete. That receives the name of the cache that we want to delete. In this case cacheName. So, in this case, we are looping through all available folders,
>
> **[4:43](https://www.linkedin.com/learning/javascript-service-workers/keep-your-storage-clean?u=76281980&t=283)** we are checking if the age folder is or not in our Whilelist and if it's not, we are deleting that cache and we are doing that in the activate event. So, if I said this and now go to the browser, we need to make sure that we have update on reload, so it will install a new service worker that will go through install and activate and I'm going to reload. It's important to check that now the current service worker is activated and running, so it's activated, so it went through the activate event and now we can see that we don't have the v1 version of california-assets anymore, so we have cleaned pervious versions of folders in our cache storage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Prerequisites:** install (5)
> **CLI Commands:** make (3), find (1)
> **Code Identifiers:** cachename (2), indexof (1)
> **Env Vars:** css (1), api (1), es6 (1)
> **Definitions:** means that (2), is an  (1)
> **Analogies:** for example (3)
> **File Paths:** offline.json (1), serviceworker.js (1)

#### [Summary of cache strategies](https://www.linkedin.com/learning/javascript-service-workers/summary-of-cache-strategies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/summary-of-cache-strategies?u=76281980&t=0)** - [Instructor] Let's analyze all the Cache Strategies that we have been seeing during this chapter. We have seen that we can precache typically on the install event, then we have to deliver those assets to the browser cache first, network first stale while revalidate and any combination that we can create because we can create our own strategy. For example, we can do network first but also update resources that are not in the cache. We can do several strategies per route or per destination of the resource such as if it's a style, if it's an emash, we can also create dyno and maximum of emashes that we want and store in the cache so we can create our own algorithm. So when we are precaching, basically the service worker is downloading the resources from the server, in this case expressed as that little block with Res, that's resource and downloading that resource in the app cache. When we are using cache first and we do have the resource in the cache storage, the problem that appears is that if we change the resource, for example now it's green, the browser is still getting the old version. So cache first is not updating the resources. When we are using cache first, only when the resource is not precached, we are going to get the current version from the server. In the other hand, network first if we are online
>
> **[1:35](https://www.linkedin.com/learning/javascript-service-workers/summary-of-cache-strategies?u=76281980&t=95)** will get the updated version and only when we are offline that version will be the old one. Stale while revalidate works similar to cache first. So you will get the outdated version of the resource but in the background at the same time, the service worker will download the new version so on the next load, the app cache is now updated with that version of the resource. So updating resources, it's a challenge in the service worker's API because a service worker API is not helping us in detecting and updating the cache when there is a change in one asset server side. Stale while revalidate can help us because now on the second reload, we will get an updated resource but anyway, sometimes it's a waste of resources because let's say that the user is accessing that website everyday and we are changing the CSS file every once in awhile. Everyday with a stale while revalidate we are downloading and replacing in the cache the CSS anyway even if there is no change at all. The problem is that for the browser, there is no way to know before hand if a resource has changed or not in the server and http as a protocol doesn't have a way to do this. So the only solution is to create the manifest file of all your assets with a version or a hash server side.
>
> **[3:13](https://www.linkedin.com/learning/javascript-service-workers/summary-of-cache-strategies?u=76281980&t=193)** And you need to remember that every time you a make a change in one of those assets, you need to go and change that manifest file. There are no standards here and no protocols. You can use your own algorithm, your own technique to do this. There are many frameworks out there that will help you with this such as workbook JS and also [react](../../Skills/Web%20Development/React.js.md) [Angular](../../Skills/Web%20Development/Angular.md) view HS CLIs will do this for you. If you create that manifest file, then you need to save the manifest in the local storage. It can be in the index DV or it can be in the cache storage. So every once in awhile when the service worker is running, I know every time that the service worker is running again, it can check, oh let's see how long it's been since my last asset check. Even if the service worker is trying to do something different, we can also [Fetch](../../Skills/Web%20Development/Fetch.md) that manifest like once per day or once per five hours. We can download that manifest, compare with the version that is in the cache and then the service worker can say oh it seems like there is a logo or an emash or an SVG file that has changed in the server so let's go and download that file now and update the cache. There are no high level APIs to do this and you need to create the server solution and the client solution on your own.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (1), [Angular](../../Skills/Web%20Development/Angular.md) (1), [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **Env Vars:** api (2), css (2), svg (1)
> **Analogies:** for example (2), such as (2), similar to (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Exercise Files:** download the (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 5. Work with APIs in the Service Worker

[↑ Back to Table of Contents](#table-of-contents)

#### [What's available in the service worker](https://www.linkedin.com/learning/javascript-service-workers/what-s-available-in-the-service-worker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/what-s-available-in-the-service-worker?u=76281980&t=0)** - [Instructor] When you start working with service workers, you want to do a lot of stuff, because you feel the power that you have inside that new item on the web, but we need to think about the available APIs that are tackling that context, because we need to remember that the service worker's not like any window, like any task or code that you're used to, it's working in its own separate context, in its own separate process, and it doesn't have a UI, so despite not having any API for user interface, there is no way that the synchronous API can be executed in that context. So, for example, look at the storage. That's a synchronous API, so it's not really async, can't be executed there, because the problem is that if we are locking the thread in a service worker, we might have a problem, because when we do that, if the browser is trying to request more resources, we are not able to respond and we are the proxy that must respond. We are the service workers. So that's why, for example, a standard HTEXT, like HML, HTTP request, that can be async API, is not available. So, just assume that the API you want to use is not available, and then verify if it is, and the easiest way, despite reading the spec, is that you can go to the DevTools console
>
> **[1:35](https://www.linkedin.com/learning/javascript-service-workers/what-s-available-in-the-service-worker?u=76281980&t=95)** and change the context and try the API. We have IndexedDB for storage. we have a basic Navigator object, so it's the subset of the original navigator object, so there are things there that might not be. We have Performance Timing, we have WebAssembly. So things that have nothing to do with the user interface might be available. We know for sure that we won't have DOM APIs, the Window object, Web storage, know as local storage. Navigator has a subset so, for example, there is no geolocation, there is no access to the camera or things like that. We don't have access to Canvas. A new Canvas API for workers is going to appear later in the future, but it's not right now. Where we are in the context of the service worker, we do have new ideas available, such as the CacheStorage that we have been working in the last chapter, the Clients API that we will use in the next videos. We have the service worker's events, and also we have the registration object, the same registration that we can give in the window. Also, there are new APIs that are sitting on top of the spec. That means they are on different specs, and that means they might not be available on other browsers supporting service workers. For example, we have the PushManager, that's for push notifications. We have the SyncManager, that's for background sync. The Payment Manager, that's for payment request. NavigationPreload, and many others
>
> **[3:08](https://www.linkedin.com/learning/javascript-service-workers/what-s-available-in-the-service-worker?u=76281980&t=188)** that will appear in the future. Just remember that not every browser supporting service workers might support these new API.

> [!info]- Semantic Content
>
> **Env Vars:** api (9), htext (1), hml (1), http (1), dom (1)
> **Analogies:** for example (4), such as (1)
> **Cross-References:** later in (1), in the last (1), in the next (1)
> **Documentation:** spec (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Send messages from pages](https://www.linkedin.com/learning/javascript-service-workers/send-messages-from-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/send-messages-from-pages?u=76281980&t=0)** - [Instructor] When we have activated serviceworker we know it's not alone. We know we have clients such as browser's tabs, or [Windows](../../Glossary/Service/Windows.md), PWAs or other items such as iFriends. So fortunately we do have a communication API that will let us send messages from pages to the serviceworker and vice versa. So let's start sending messages to the servicworker from Windows. And there we have an app.js file that's a (mumbles) file that is currently registering the serviceworker and that file is pointing from every [HTML](../../Skills/Web%20Development/HTML.md). Remember that if we are registering again a serviceworker that is already installed nothing will happen. So from there we can have for example, a function that will send a message to the serviceworker. We can receive a message and this is pretty simple. In fact it's based on the web worker messaging API. So we say navigator.serviceWorker .controller so that's the actual serviceworker .postMessage. So it's the same post message that probably you have seen before. And we can send the message, that's all. One important thing here remember that the controller of my page might not be there. Because the first time you load a page there is no controller also, the user might be
>
> **[1:34](https://www.linkedin.com/learning/javascript-service-workers/send-messages-from-pages?u=76281980&t=94)** refreshing with Shift so that means there's no serviceworker. So we should check first if navigator.serviceworker.controller is there before actually trying to send a message. And if not we can just for now use the console and say there is no serviceworker controlling this page. Okay so what is a message? The post message API accepts mostly simple elements like strings, objects that can be serialized into [JSON](../../Skills/Web%20Development/JSON.md) strings, numbers, arrays and also in some situations we can transfer binary data but, in that case we are entering a phase where that may not be available in every browser. So it's typically a good idea to keep the message as simple as possible. For example, it can be an option that can contain a protocol so we can specify what we want through a string or through an action, preferably inside an option. So let's send a message. For example in our index HTML at the bottom we have footer so for example we can add a link somewhere. Here we have a section for footerResources that is empty. I will add a ul and inside the lis I can add a button or a link
>
> **[3:07](https://www.linkedin.com/learning/javascript-service-workers/send-messages-from-pages?u=76281980&t=187)** that we'll just call a function to update the app. So let's say that we are working with an app, a web app or a progressive web app or PWA. I'm going to go into colon update function that update function can be requesting an update on the serviceworker or for example might be trying to ask to the serviceworker to update all the resources such as the images, the HTML, the CSS. So we already know how to request an update check for the serviceworker, the file. But sometimes the serviceworker in the same, but the resources have changed. So in that case what we can do is we can send a message to a serviceworker specifying that the action that we want is to update resources. This is just one string that I am creating right now. So it's my protocol. In fact calling this action is also my protocol. I can say message, I can use anything I want. So I'm sending a message to the serviceworker.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (3), [Windows](../../Glossary/Service/Windows.md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Env Vars:** api (3), html (3), json (1), pwa (1), css (1)
> **Analogies:** for example (5), such as (3)
> **Code Identifiers:** ifriends (1), serviceworker (1), postmessage (1), footerresources (1)
> **File Paths:** app.js (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Receive messages in the service worker](https://www.linkedin.com/learning/javascript-service-workers/receive-messages-in-the-service-worker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/receive-messages-in-the-service-worker?u=76281980&t=0)** - [Narrator] So we are back in our code. In this case, it's 0503, the begin folder, and I'm currently in the browser. So let's see what we have. We have a service worker that is currently activated and running. And we have an [HTML](../../Skills/Web%20Development/HTML.md) that has a button. That if I click the button, it seem to be sending a message to the service worker. The problem is: no one is actually receiving that message. So let's go to the code. In the code, now we are going to the service worker file And we need to add a new event listener. So we have "install," we have "activate," we have "[Fetch](../../Skills/Web%20Development/Fetch.md)," and now we are going to add a new one. So it's self.addEventListener and the event name is "message." We are going to create a narrow function that will receive the event argument and we should receive the message sent by the page. And that message is available in event.data. So the message is event.data. Because we have established a communications protocol, we know that that object should contain an action property. So we're going to make a switch. On that property. So it will be message.action and we will have a case for our only action for now, that is: update-resources. And for now, what we can do, for example, is to clone the code that we have here that will open the assets folder
>
> **[1:33](https://www.linkedin.com/learning/javascript-service-workers/receive-messages-in-the-service-worker?u=76281980&t=93)** and will re-cache everything. So I'm pasting this here. Let's change the form. Like this. So now let's go back to the browser and see this in action. I'm going back here. I need to make sure because changed my service worker, that I have "update on reload" clicked. So I'm going to reload my page. Now I know that we have a service worker that is currently activated and running. And I can click "Update the app" and if it's working, it's basically updating all the resources in my cache. How do I know if it's working? One way is that in depth tools, in the Application tab, if we open "Cache Storage," we can take our california-assets-v2 cache, we can right click and delete everything. So, now if I update the app again, clicking on the button, it appears again without reloading. So without reloading the page, it appears again, so that means that the message was successfully received from the page to the service worker. And the service worker is in the background, updating the cache. Of course we can send more messages, wherever we want. It's our communication protocol. One question that might appear in your mind at this point is: What happens if the service worker is stopped or terminated? So remember in the life cycle of a service worker
>
> **[3:11](https://www.linkedin.com/learning/javascript-service-workers/receive-messages-in-the-service-worker?u=76281980&t=191)** at any point we can stop the service worker. It's stopped now. Remember that after a couple of seconds of no activity the browser will stop the execution. So what happens if I try to update the app right now, at this point? Maybe you are thinking: well we have already controlled that with that "if" because we are checking if the controller is there. But that's a wrong assumption. The controller is there because my page has a service worker that is controlling the page. It's stopped, but the controller is there. So when we're trying to post a message to a controller that is currently stopped, the browser will move it to the running status again. Sometimes it's just the same instance of the service worker we had before. Sometimes it will create a new instance. So remember: don't rely on global variables. Because sometimes it will be a new instance. So let's see it in action. So if I click "Update the App" now it's stopped. If I click "Update the App" now it's running again. Because receiving a message from a client is one of the events that will trigger a running status.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (1), [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **CLI Commands:** make (2)
> **UI Navigation:** go to (1), open the (1)
> **Code Identifiers:** addeventlistener (1)
> **Env Vars:** html (1)
> **Cross-References:** go back to (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)

#### [Broadcast messages to clients](https://www.linkedin.com/learning/javascript-service-workers/broadcast-messages-to-clients?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/broadcast-messages-to-clients?u=76281980&t=0)** - [Instructor] Now we have successfully sent a message from the page to the service worker. What about the other way around, like a service worker sending a message to the page? The first difference that we have is that we don't have one page. The service worker can be controlling several clients at the same time. So it's not like one to one like the page to its controller. So we need to broadcast a message to all of them, while at least trying to find one particular client, the one that we are interested in, into sending a message. To do that, we will work in the service worker JS file of our project. And, for example, what we can do is that after we cache all the files we want to send a message to all our pages so they can alert the user that a new version is available because we have just updated all the assets. Remember the service worker has no way to send a message to the user, so we need to create that message from the page. And for that we're going to send an actual low level message to the page saying, hey page do you want to alert the user that there is a new version. So add all returns a promise, so I will just capture that promise. There are no arguments here. So after all its adding them here for example, we want to an info alert pages that there was an update. So I'm going to create that function then.
>
> **[1:39](https://www.linkedin.com/learning/javascript-service-workers/broadcast-messages-to-clients?u=76281980&t=99)** So function alert pages update. And here, we need to somehow get all our clients and send a message to them. So to get the clients, there is a clients API available. The clients API works only inside the service worker. It has a method known as match all. Match all will look for all the clients. Clients can be zero to N. So because zero means that there are no clients right now, so maybe the user has just closed all the tabs or the PWA or it's because we've received a push message and there are no tabs or PWAs open on that website. Or it can be one or it can be more than one. Match all receives also some argument, for example, we can specify if we want to include uncontrolled clients. Remember when we mentioned vocabulary. We have controlled clients and uncontrolled clients. By default, we are not going to get uncontrolled clients because we can't control them so we can't really send messages. We can know how many uncontrolled clients we have. We can know the URL. We can know what's going on there. But we can't communicate with it because we are not their controller. Also we can specify of the type of client that we want. For example, I can say that I only want a window. Other options are all, I want all my clients,
>
> **[3:13](https://www.linkedin.com/learning/javascript-service-workers/broadcast-messages-to-clients?u=76281980&t=193)** worker, that's web workers or shared workers. So in this case, because we want to send messages to all the open tabs, we want window. Window will be true for tabs, stand alone PWAs, and also iframes because they are [HTML](../../Skills/Web%20Development/HTML.md) documents. So match all will give us a promise. Some go into listen for the answer that will be our list of clients. Typically, the list of clients is ordered in a way that the first one, so clients of zero, is the latest used tab or client by the user. So let's say the user has ten tabs on our scope, we will receive in the first position, the last tab that the user has used. So it's ordered by last used date or something like that. So we can just send a message to the first one and its basically from here, when we do have a client, we can post a message or we can just broadcast a message. In this case, to broadcast a message, we're going to execute a for each loop and we're going to say for each client they're going to use the same API for post message. And we're going to send a message with an action saying resources updated. We can also send more data here if we want to, such as how many resources were updated if we have the data
>
> **[4:49](https://www.linkedin.com/learning/javascript-service-workers/broadcast-messages-to-clients?u=76281980&t=289)** and many more things. Now, we are broadcasting messages to all our window based clients.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Env Vars:** api (3), pwa (1), url (1)
> **Analogies:** for example (4), such as (1)
> **Definitions:** is a  (2), known as (1), means that (1)
> **CLI Commands:** find (1)
> **Cross-References:** we mentioned (1)
> **Speakers:** - [instructor] (1)

#### [Receive messages from the controller](https://www.linkedin.com/learning/javascript-service-workers/receive-messages-from-the-controller?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/receive-messages-from-the-controller?u=76281980&t=0)** - [Instructor] So back to our code, I'm now in the project 05_05 in the Begin folder. And we know that we are sending messages to the clients from the Service Worker. We are broadcasting a message, but again, no one is receiving that message on the other side. So I need to go in this case to app.js, that's the [JavaScript](../../Skills/Software%20Development/JavaScript.md) that works in the client, and I need to receive the message that the Service Worker is sending to myself. Remember that if in the scope of the Service Worker there are many other [HTML](../../Skills/Web%20Development/HTML.md) and JavaScript, in this case, all of them if they are open, will receive the message. So what we can do here is that we can take navigator.serviceWorker and add an event listener for the message event. Typically, we are going to do this only if we register the Service Worker, so it's a good idea to probably to do this here in that condition. And again, the message is inside event.data so we can, again, create a switch event.data.action. We can also check if action is there because maybe Service Worker is sending something different, not an object, before trying to do a switch, but let's save that. In this case, we need to see the action that we were sending from the Service Worker, and create the case for that string. For example for now we are going to create an alert saying the app is ready for an update.
>
> **[1:36](https://www.linkedin.com/learning/javascript-service-workers/receive-messages-from-the-controller?u=76281980&t=96)** Please reload. You might want to change that with something inside your UI and not an alert. Okay, so let's see if it's working. Back in the browser, I am going to first refresh because I need to get the new app.js. Now, I am going to click update the app. That will send a message to the Service Worker to update all the resources, and when that's done it's sending a message back. So it's working. Remember that in this case, I can open more than one client on the same page. So now the Service Worker has four clients of type window. So what we can do here is I click update the app, we can see that the four [Windows](../../Glossary/Service/Windows.md) have received that alert. All of them are receiving the message that they should reload. And that's okay because remember, it's one Service Worker and one cache and storage for all the windows we have here. Inside the Service Worker, we can also check inside each client some properties. For example, the client has an ID that is a unique identifier that is a string so we can try to do something with that client ID and verify before sending a message if it's the client that we want. For example, we also have the type, if it's window, worker, or share worker, and finally we have the URL. So with the URL for example,
>
> **[3:09](https://www.linkedin.com/learning/javascript-service-workers/receive-messages-from-the-controller?u=76281980&t=189)** we can check before sending a message if it's something that we want to send a message to. Because remember, the Service Worker is listening for every file, for every folder in this code. And then when we want to send this message only to one particular URL. In more advanced solutions, typically using push messages, when we have a client, we can also have the ability to focus on that client or to even create a new window. So we can change the URL of that client. But that's not available, we don't have permissions on a standard Service Worker. That's only when the Service Worker also has permission for push messages.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [Windows](../../Glossary/Service/Windows.md) (2), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Env Vars:** url (4)
> **Analogies:** for example (4)
> **File Paths:** app.js (2)
> **Definitions:** is a  (2)
> **Code Identifiers:** serviceworker (1)
> **Speakers:** - [instructor] (1)

#### [Sync data in the background](https://www.linkedin.com/learning/javascript-service-workers/sync-data-in-the-background?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/sync-data-in-the-background?u=76281980&t=0)** - [Instructor] I am back with the project Explore California, and please now load 05_06, because there is something new. When you open the Tours section, the Tours [HTML](../../Skills/Web%20Development/HTML.md), we are going to see that there are a couple of California tours here and you can vote for the tour that you like. Let's see what's happening when I click on that button. If I click I can see a vote here in the console, but let's see the whole process. So, going back into the code, I'm opening tours.html, you can see that each tour has a button that onclick it's calling a vote function with a number, it's like an Id. Now I'm going to app.js, and here we can see the function. It's doing a [Fetch](../../Skills/Web%20Development/Fetch.md) to a URL, sending the Id, and when it's done it's taking the [JSON](../../Skills/Web%20Development/JSON.md) from that response and just saying 'voted!'. That's all, but there is a problem here. That fetch might take time, or even we might be offline, so if I'm offline, if I click here, Offline, and now I try to vote we have an error because yeah, the promise was rejected. I'm not catching that problem. And you can say, "Well, it's expectable, "there is no connection, there is no way "to vote that on the server," but now we have a new API that might help us. It's an API on top of ServiceWorker.
>
> **[1:33](https://www.linkedin.com/learning/javascript-service-workers/sync-data-in-the-background?u=76281980&t=93)** It's known as Background Sync, and it's especially for these kind of situations. It's not available on every browser, so to see if it's working we're going to check if the SyncManager is available in the window option. If that's the case, we will use Background Sync, that's the name of the app. If not, we can keep our current fetch, so that's not a problem. How does it work, this is pretty simple. First we need the registration, so we need to get the ServiceWorker registration. So, getRegistration, we know how to do this, and then we have the registration. When we do have the registration we need to take that registration and call .sync.register, and we're going to register one tag. What is a tag? Any string, for example, it can be I want to vote, and then I can add here the tourId that is coming as an argument. So, I can use template string and do something like this, so this is going to register in the system, in the ServiceWorker space, that there is a pending operation to vote for that Id. That's all from our point of view. Of course, that's not sending any fetch. I will take that fetch and I will copy that because I'm going to use it. Now I will go to the ServiceWorker,
>
> **[3:07](https://www.linkedin.com/learning/javascript-service-workers/sync-data-in-the-background?u=76281980&t=187)** and the second part of Background Sync is to listen for a new event, it's called "sync." So, every time there is a pending operation and we have connection, the browser will execute the sync event, and in the event we will take the tag so we can check if the tag is what we want. In this case, for example, we can check from the tag a substring, and we can verify if, from zero to four, if it's equal to both, the first four characters are both. If that's the case, we need to create a fetch, and we are doing that in the ServiceWorker, even if the user is also closing the tab, because sometimes you click on vote and you close the tab immediately. You're not waiting for the fetch to finish. Well, in this case it's being done in the ServiceWorker. We know that it has its own lifecycle. Now we need to take the Id, the tourId, that will be from event.tag.substring from (5) because we have a dash, and that's all. Now we are going to say here now 'sync: voted!' so we can see the difference in the console. So, now back in the browser let's verify that we have update and reload. Let's reload the page, I will click Vote, and you can see that now it's voted!, but using the sync API. Now let's try with offline, so I will clear the console.
>
> **[4:43](https://www.linkedin.com/learning/javascript-service-workers/sync-data-in-the-background?u=76281980&t=283)** I will click Offline, so now we don't have connection. Now I will vote for, let's say Nature Watch. So, I will click Vote, and you can see nothing happens, we don't have connection. So, let's say that now you get out of the website and you go and play some Candy Crush, or any other game, so at one point maybe you get connection again. You're not using the browser anymore. At that point, if the connection is back you will see that in the background the ServiceWorker will be running again and it will try again to execute your promise. So, at that point then every time you have a pending operation you will receive execution later in the background if there is no connection at the time. To finalize the code, instead of just doing the fetch here we can send event.waitUntil just to make sure that it will work properly, and in this case if there is no connection at that time, or the server is down, it will try again later. Background Sync will try later for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Fetch](../../Skills/Web%20Development/Fetch.md) (8), [HTML](../../Skills/Web%20Development/HTML.md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Env Vars:** api (3), html (1), url (1)
> **Definitions:** is a  (4), known as (1)
> **Code Identifiers:** tourid (2), getregistration (1), waituntil (1)
> **UI Navigation:** click on (2), open the (1), go to (1)
> **Analogies:** for example (2), it's like (1)
> **File Paths:** tours.html (1), app.js (1)
> **CLI Commands:** make (1)


### 6. Tips and Tricks for Web Performance

[↑ Back to Table of Contents](#table-of-contents)

#### [Readable streams](https://www.linkedin.com/learning/javascript-service-workers/readable-streams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/readable-streams?u=76281980&t=0)** - [Instructor] When a website is making a [Fetch](../../Skills/Web%20Development/Fetch.md) to the network, so it's making an actual HTTP request, typically, the fetch goes to the web server, the web server takes the content from a file system, and that content goes through TCP or UDP in packets through the network. So, in chunks. Probably, you've heard about this even if you're not a specialist in network. When you're downloading files, these files are coming from the network, on internet, in different packets, smaller pieces that are traveling along, and then, typically, the browser is basically waiting for all the small pieces to appear and then give you the original content. And that's in the fetch event when the promise is fulfilled, and your then callback is being executed. So, meaning that, you will render the content, or you will use the content, when all the pieces were downloaded. Sometimes it's not even about the network. It's about, also, the operating system that is parsing each packet individually. So fortunately today, we have a service worker. And when this is being done with a service worker, it's pretty much the same thing, so the webpage is making a fetch, the service worker is getting that fetch, but the service worker usually goes to a web server. It's asking for the content. The web server is splitting that in pieces. The service worker waits for all the pieces
>
> **[1:35](https://www.linkedin.com/learning/javascript-service-workers/readable-streams?u=76281980&t=95)** and basically gives you the final content in only one big piece. So, here is the thing. We do have a new API, or a new ability, thanks to fetch and service workers, that let us use each chunk, each part, of the big content as soon as it's available, in order. So instead of waiting for the full content to appear client-side, we can start rendering, or using the content, in pieces, as soon as it's arriving. And at the end, we will finally make the content, but we can start rendering sooner. This is known as readable streams. There are a couple of challenges here because we need to accumulate the stream. No one is going to accumulate the full content for us. We need to parse valid the units manually. The advantages are that we can start rendering sooner. We can show things on the screen beforehand, before we have the full amount of content. And the problem here is that chunks might not be valid units of information. So for example, we can be downloading 1,000 records from a database in [JSON](../../Skills/Web%20Development/JSON.md). Right now, we need to wait for the thousand objects to be there in the client to start actually parsing them and rendering on the screen. But when we receive chunks, we may be, for example, rendering the first 10, and then
>
> **[3:09](https://www.linkedin.com/learning/javascript-service-workers/readable-streams?u=76281980&t=189)** when we have another group of elements, we are going to render the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md). The problem is that chunks might not be fully functional units. For example, in this case, we have a JSON with two objects, [John](../../Glossary/Tool/John%20the%20Ripper.md) and Jane. But Jane is not complete, so the chunk maybe stopped after the g in age. So we don't have the e, the colon, and the number. That will arrive in the next chunk. So we need to parse these manually. So that's the disadvantage of using this ability. So we might take only John now, and then we might want to save the rest of the content for later. Because later, we will receive the next chunk with the rest of the Jane object. In that case, we will need to take the previous part with a new part and then render Jane. And we need to do this manually. So we have some challenges, but the advantage is that we can start rendering on the screen much sooner.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Fetch](../../Skills/Web%20Development/Fetch.md) (6), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (3), [JSON](../../Skills/Web%20Development/JSON.md) (2), [John](../../Glossary/Tool/John%20the%20Ripper.md) (2)
> **Env Vars:** json (2), http (1), tcp (1), udp (1), api (1)
> **Analogies:** for example (3)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Navigation preload](https://www.linkedin.com/learning/javascript-service-workers/navigation-preload?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/navigation-preload?u=76281980&t=0)** - [Instructor] Let's analyze this situation. We are in the browser, we are typing a URL, and there is currently an active service worker for that scope. Also, instead of a browser, it can be a PWA that was installed, so the user is just double-clicking on the icon or tapping the icon on a mobile device. Because there is a service worker that is currently owning that scope, the browser will not go to the web server to download the [HTML](../../Skills/Web%20Development/HTML.md), the document that we are requesting. Basically, the browser will make that service worker active and running, which means, if we need to create the process in the operating system, the thread, and then an instance of our service worker 5. That would take a couple of milliseconds, and let's say that after that, the service worker say, "Oh, I need to go the the webserver to [Fetch](../../Skills/Web%20Development/Fetch.md) that," for example, index attach html. The problem comes that on low end devices, mostly mobile devices, phones that are really cheap, it can be for example today an [Android](../../Glossary/Sdk/Android.md) Go device, that despite having Android 8, it's a Go version and that means, it has low CPU, low memory and not so many cores. So on those devices, creating a process and making that service worker available to execute the fetch event handler might take up to 200 milliseconds. And the problem with that,
>
> **[1:33](https://www.linkedin.com/learning/javascript-service-workers/navigation-preload?u=76281980&t=93)** is that for 200 milliseconds, this is just waiting. And we didn't start the network request to the real server. So, that's why we have also an ABI, that is not available in every browser. It's an ability for service workers known as, navigation preload. If navigation preload is enabled, then the browser will start the request to the web server only for the initial load, when we are loading a real page, a window, the whole document. Not when we are loading one png file, or one resource. Only for the initial. It's going to the web server as if the service worker was already there. But because it's there, at the same time, it will also make that service worker available and up running. So, both things will have an impairment. So now we have a request and we also have a service worker that is going to execute the fetch event handler. Now, when the service worker wakes up and says, "Okay, I'm here, what do I need to do?" Then the fetch event handler is fired and then you will realize, oh, I need to render the indexation of, but I can see that the browser already started my request, so in that case the service worker can say, "Okay, I will accept that loading process. So continue with that, and use that version." But because it's a service worker, and its in charge of the scope, it can also say,
>
> **[3:05](https://www.linkedin.com/learning/javascript-service-workers/navigation-preload?u=76281980&t=185)** "No, you know what? I don't want to get the file from the server, I have it here in the cache." or, "I want to synthesis one" or, whatever. So in that case we started the request but then we are going to dismiss that response. We are not going to use the response. And finally the browser will render something different. But, when we are in this situation, that we really want to get out from the network, on low end devices, activating navigation reload might render your page sooner. To activate or enable navigation preload, inside the service worker, typically the activate event we call to our registration navigationPreload.enable Be careful this ABI might not be available in every browser. So you want to check first, if navigation preload exists within the registration option. You can enable and disable this feature, as much as you want, within the service workers scope. In the fetch event, there is a preload response option available in the event handler that's a promise. The promise will give you the final response that is coming from that initial request, created by the browser, or undefined. That means there is no preload response available and in that case, you can just use any other respond with as we are used to.
>
> **[4:38](https://www.linkedin.com/learning/javascript-service-workers/navigation-preload?u=76281980&t=278)** Such as, taking something from the cache, or making a natural fetch to the network. Because we have this situation, that maybe we are making a request to the web server that is not going to be rendered in the browser. There is a special http header that the server will receive to know that navigation preload is enabled. And maybe the server wants to render something different in that case. It's service worker navigation preload: True Instead of true you can change that value dynamically with an ABI, within the service worker scope, or within the page, using setHeaderValue You can use this ability of changing the header to specify data that you want to send to the server, even if the service worker is yet, not up and running.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Fetch](../../Skills/Web%20Development/Fetch.md) (6), [HTML](../../Skills/Web%20Development/HTML.md) (2), [Android](../../Glossary/Sdk/Android.md) (2)
> **Env Vars:** abi (3), url (1), pwa (1), html (1), cpu (1)
> **Definitions:** is a  (3), known as (1)
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** navigationpreload (1), setheadervalue (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** download the (1)

#### [Defer service worker registration](https://www.linkedin.com/learning/javascript-service-workers/defer-service-worker-registration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/defer-service-worker-registration?u=76281980&t=0)** - [Instructor] Let's talk a little bit about the performance of registering a service worker. Typically, we register a service worker as soon as [JavaScript](../../Skills/Software%20Development/JavaScript.md) executes, so we have a code in our page that is just calling, navigate to our service worker, register. But on the first load, we need to remember that the window that is actually registering the service worker is not going to be controlled by that service worker. Now, I'm talking about the first load, so the first time you're accessing to that website, so you don't have a service worker activated in your computer, in that case, because there is no service worker, that window is uncontrolled. It's an uncontrolled client. So, there is no rush into installing a register that service worker. So in terms of priority, it's probably better to render the contents of the page, rather than downloading the service worker, executing the service worker, and downloading all the assets that the service worker will pre-cache, so because we can register the service worker at any time, probably we can wait for the initial page load before doing that. So instead of doing navigate to our servicWworker register, we can do that but within the window load event, the on load because the load event is fired after all the assets for that page are currently downloaded, parsed and probably on the screen.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **UI Navigation:** navigate to (2)
> **Code Identifiers:** servicwworker (1)
> **Speakers:** - [instructor] (1)

#### [Make your service worker useful quickly](https://www.linkedin.com/learning/javascript-service-workers/make-your-service-worker-useful-quickly?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/make-your-service-worker-useful-quickly?u=76281980&t=0)** - [Instructor] Let's analyze this situation. So, we have a service worker, it's currently activated and running, and it has some clients, controlled clients. So, pages, PWAs, iFrames, or workers. But then a new service worker appears. So, we know when that happens, the new service worker is being installed and that service worker is waiting. The old service worker is still up and running and it's still the one that is handling the clients, so, it's still the controller. Well, sometimes, it might be a good idea to swap the service worker as soon as possible. So, to make the new service worker available now, I don't want to wait, I want to do it now. To do that, the new service worker can skip the waiting just calling skipwaiting, so that's a function that will make that service worker now the active one. We typically do this during the install process, so after it was installed, in that case that event handler we are going to execute keepwaiting. When that happens, now the new service worker is activated and running, and the old service worker is currently redundant, it's probably still in memory, the registration is still there, but its redundant and now it's not controlling any client. So the opened tabs, or the PWA that the user was actually using are currently uncontrolled.
>
> **[1:38](https://www.linkedin.com/learning/javascript-service-workers/make-your-service-worker-useful-quickly?u=76281980&t=98)** So every new HTTP request will go directly to a network without a service worker in the middle. Every message to a service worker will just go to nowhere, because now, that client, is uncontrolled. So, when we do this, typically we also want, during our activation, to claim the client and we do that with "self.clients.claim". So, we are a service worker, we have just been activated, so we are there, we can see all the clients that we have right now in our scope, but we don't control them, so we claim them. We ask them to be our clients, and then, at that point, all the clients will be controlled, now, by the new service worker without any reload, so we don't need to reload the client or the page. Just be careful, because if the old service worker and the [HTML](../../Skills/Web%20Development/HTML.md), that are currently on users screens, are tied together, for example, one is relying on the other for messaging or because the service worker is synthesizing responses and the new version of the service worker, it's a different app so it has a different idea, it's not doing that. You need to remember that now you have an old HTML on the screen with a new service worker that is controlling that HTML, so, maybe some things might not work on those situations. If you are not tying to together the service worker
>
> **[3:15](https://www.linkedin.com/learning/javascript-service-workers/make-your-service-worker-useful-quickly?u=76281980&t=195)** with the page, then, typically, you won't have big issues.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (3)
> **Env Vars:** html (3), pwa (1), http (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** iframes (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Warnings:** be careful (1)
> **Prerequisites:** install (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/javascript-service-workers/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-service-workers/next-steps?u=76281980&t=0)** - Thank you for joining me in this journey of learning service workers. So we have been covering a lot, and now you should have a better understanding of what these new citizens of the web can do. And what we can do for the web, thanks to service workers. We have been covering lifecycle installation, how service workers work, when the service worker is executing code, the running styles, less code. We have been covering the most common scenarios, such as using the cache storage and how to make an app available offline, and how to pick which routes do we want to make them available offline, which routes do we want to use the network first, and which routes might be defined or synthesized by the service worker. So now it's time to move forward. If you want to continue your learning with these topics, you can go and search in [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning for promises, web workers, web push, web performance optimization, and progressive web apps. Also, in terms of frameworks, for service workers, you can check workbook JS. That framework was created by the Chrome team. And also, if you're using [Angular](../../Skills/Web%20Development/Angular.md), [react](../../Skills/Web%20Development/React.js.md), or blue JS, the latest versions of their CLIs, are supporting service workers as well. There are several courses at LinkedIn Learning taught by myself, and other great instructors that will help you continue with this nice journey. You can also check my latest two books and web performance published by O'Reilly Media, such as, high performance mobile web, and hacking web performance.
>
> **[1:34](https://www.linkedin.com/learning/javascript-service-workers/next-steps?u=76281980&t=94)** You can also follow me on Twitter, I'm on @firt. I usually publish articles, news, and information about service workers. And more stuff around [Web Development](../../Topics/Web%20Development.md), PWA development, and service workers. Thank you again, and see you in the next course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [Angular](../../Skills/Web%20Development/Angular.md) (1), [React](../../Skills/Web%20Development/React.js.md) (1), [Web Development](../../Topics/Web%20Development.md) (1)
> **CLI Commands:** make (2)
> **Analogies:** such as (2)
> **Env Vars:** pwa (1)
> **Cross-References:** in the next (1)
> **Speakers:** - thank (1)


## Instructor

- [Maximiliano Firtman](../../Instructors/Software%20Development/Maximiliano%20Firtman.md)

## Resources

- Exercise files available

## Skills Covered

- JavaScript

## Path Context

### In [Explore Web Development with Vanilla JavaScript](../../Paths/Software%20Development/Learning%20Paths/Explore%20Web%20Development%20with%20Vanilla%20JavaScript.md)
← [JavaScript- Ajax and Fetch](JavaScript-%20Ajax%20and%20Fetch.md) | **6 of 8** | [Vanilla JavaScript- Web Performance Optimization APIs](Vanilla%20JavaScript-%20Web%20Performance%20Optimization%20APIs.md) →

## Appears In

- [Explore Web Development with Vanilla JavaScript](../../Paths/Software%20Development/Learning%20Paths/Explore%20Web%20Development%20with%20Vanilla%20JavaScript.md)

## Related Courses

_Courses sharing skills:_

- [End-to-End JavaScript Testing with Cypress.io](End-to-End%20JavaScript%20Testing%20with%20Cypress.io.md) — JavaScript
- [Learning JavaScript Debugging](Learning%20JavaScript%20Debugging.md) — JavaScript
- [Foundational JavaScript Security](Foundational%20JavaScript%20Security.md) — JavaScript
- [JavaScript- Test-Driven Development (ES6)](JavaScript-%20Test-Driven%20Development%20(ES6).md) — JavaScript
- [JavaScript- Best Practices for Data](JavaScript-%20Best%20Practices%20for%20Data.md) — JavaScript

---

[↑ Back to top](#)