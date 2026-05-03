---
type: course
cssclasses:
  - lle-course
slug: http-essential-training
url: "https://www.linkedin.com/learning/http-essential-training"
duration_minutes: 50
duration: 50m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHlCMUIgqq4Xg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567118413530?e=2147483647&amp;v=beta&amp;t=JhjFNxHVGSU0trcDYkhLrM87D3_zGC4ecZO8GB-TWtE"
linkedin_topic: Software Development
learning_paths:
  - '[[Become a RESTful API Developer]]'
prev_courses:
  - '[[Learning Rest Apis]]'
next_courses:
  - '[[Designing RESTful APIs]]'
path_nav: '[{"path":"Become a RESTful API Developer","position":2,"total":5,"prev":"Learning Rest Apis","next":"Designing RESTful APIs"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - topic/web-development
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/HTTP%20Essential%20Training.md)

![HTTP Essential Training](https://media.licdn.com/dms/image/v2/C4E0DAQHlCMUIgqq4Xg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567118413530?e=2147483647&amp;v=beta&amp;t=JhjFNxHVGSU0trcDYkhLrM87D3_zGC4ecZO8GB-TWtE)

# HTTP Essential Training

> Hypertext Transfer Protocol (HTTP) is one of the most utilized protocols on the internet. In this course, instructor Morten Rand-Hendriksen helps you bolster your understanding of how HTTP works by reviewing fundamental concepts. He begins by explaining what HTTP is, and then covers key terminology and the HTTP flow. He then discusses the request/response pair, HTTP methods, and status messages. T

> [LinkedIn Learning](https://www.linkedin.com/learning/http-essential-training) | 50m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Welcome](#welcome)
- [**1. HTTP: Hypertext Transfer Protocol**](#1-http-hypertext-transfer-protocol) (5 videos)
  - [What is HTTP?](#what-is-http)
  - [HTTP, HTTP/2, and HTTPS](#http-http2-and-https)
  - [HTTP terminology](#http-terminology)
  - [The HTTP flow](#the-http-flow)
  - [Tools to see HTTP in action](#tools-to-see-http-in-action)
- [**2. Requests and Responses**](#2-requests-and-responses) (4 videos)
  - [The request/response pair](#the-requestresponse-pair)
  - [Anatomy of a URL](#anatomy-of-a-url)
  - [HTTP methods](#http-methods)
  - [HTTP status messages](#http-status-messages)
- [**3. HTTP Headers**](#3-http-headers) (6 videos)
  - [What are HTTP headers?](#what-are-http-headers)
  - [How to see HTTP headers](#how-to-see-http-headers)
  - [Anatomy of a request header](#anatomy-of-a-request-header)
  - [Anatomy of a response header](#anatomy-of-a-response-header)
  - [Cookies](#cookies)
  - [Caching](#caching)
- [**Conclusion**](#conclusion) (1 videos)
  - [Thank you](#thank-you)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Welcome](https://www.linkedin.com/learning/http-essential-training/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/http-essential-training/welcome?u=76281980&t=0)** - What is the one thing every site you visit on the web has in common?
>
> **[0:04](https://www.linkedin.com/learning/http-essential-training/welcome?u=76281980&t=4)** The answer is in the address bar of your browser at the very front.
>
> **[0:09](https://www.linkedin.com/learning/http-essential-training/welcome?u=76281980&t=9)** HTTP, the hypertext transfer protocol.
>
> **[0:14](https://www.linkedin.com/learning/http-essential-training/welcome?u=76281980&t=14)** Any time you interact with content on the web, you use the HTTP protocol to send requests and receive responses between servers and browsers and the HTTP protocol defines how all this information is formatted and transmitted.
>
> **[0:29](https://www.linkedin.com/learning/http-essential-training/welcome?u=76281980&t=29)** HTTP facilitates every transaction we make over the World Wide Web.
>
> **[0:34](https://www.linkedin.com/learning/http-essential-training/welcome?u=76281980&t=34)** Click on a link and the browser sends a request to get the data at the other end of the link from its server.
>
> **[0:40](https://www.linkedin.com/learning/http-essential-training/welcome?u=76281980&t=40)** Click on the submit button on a social media post and the browser sends a request to post the data you just typed in to a database on the server.
>
> **[0:50](https://www.linkedin.com/learning/http-essential-training/welcome?u=76281980&t=50)** The web is the biggest and most accessible information resource ever made and HTTP is the reason it works so well we rarely consider what's going on behind the scenes.
>
> **[1:01](https://www.linkedin.com/learning/http-essential-training/welcome?u=76281980&t=61)** Knowing how HTTP works and how to work with it, gives you the power to make the web work for you and I'm here to show you how to do it right.
>
> **[1:10](https://www.linkedin.com/learning/http-essential-training/welcome?u=76281980&t=70)** Let's get cracking.

> [!info]- Semantic Content
>
> **Env Vars:** http (6)
> **CLI Commands:** make (2)
> **UI Navigation:** click on (2)
> **Speakers:** - what (1)


### 1. HTTP: Hypertext Transfer Protocol

[↑ Back to Table of Contents](#table-of-contents)

#### [What is HTTP?](https://www.linkedin.com/learning/http-essential-training/what-is-http?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/http-essential-training/what-is-http?u=76281980&t=0)** - HTTP is an acronym for Hypertext Transfer Protocol, literally a protocol used to transfer hypertext.
>
> **[0:09](https://www.linkedin.com/learning/http-essential-training/what-is-http?u=76281980&t=9)** Which begs two questions.
>
> **[0:11](https://www.linkedin.com/learning/http-essential-training/what-is-http?u=76281980&t=11)** What is a protocol and what is hypertext?
>
> **[0:15](https://www.linkedin.com/learning/http-essential-training/what-is-http?u=76281980&t=15)** In this context, a protocol is a system of rules that allow communication of information between different entities, like computers.
>
> **[0:24](https://www.linkedin.com/learning/http-essential-training/what-is-http?u=76281980&t=24)** Hypertext is a somewhat outdated [[Microsoft Word|word]] for text that is displayed on a computer screen that contains hyperlinks to other text.
>
> **[0:33](https://www.linkedin.com/learning/http-essential-training/what-is-http?u=76281980&t=33)** So web documents.
>
> **[0:35](https://www.linkedin.com/learning/http-essential-training/what-is-http?u=76281980&t=35)** So, the hypertext transfer protocol is the set of rules, servers and browsers used to transfer web documents back and forth.
>
> **[0:44](https://www.linkedin.com/learning/http-essential-training/what-is-http?u=76281980&t=44)** Which is why every URL you type into a web browser starts with http.
>
> **[0:51](https://www.linkedin.com/learning/http-essential-training/what-is-http?u=76281980&t=51)** That's a nice definition, but it doesn't tell us much about the nature of HTTP.
>
> **[0:56](https://www.linkedin.com/learning/http-essential-training/what-is-http?u=76281980&t=56)** What it is.
>
> **[0:57](https://www.linkedin.com/learning/http-essential-training/what-is-http?u=76281980&t=57)** So let's dig in a bit deeper.
>
> **[1:00](https://www.linkedin.com/learning/http-essential-training/what-is-http?u=76281980&t=60)** One of the core principles of HTTP is that is plain language and human readable.
>
> **[1:05](https://www.linkedin.com/learning/http-essential-training/what-is-http?u=76281980&t=65)** When you see an HTTP request, response or message, you can read it out loud and make sense of it even if you don't necessarily know how the technology works.
>
> **[1:15](https://www.linkedin.com/learning/http-essential-training/what-is-http?u=76281980&t=75)** As an example, all HTTP request methods use simple human language verbs.
>
> **[1:21](https://www.linkedin.com/learning/http-essential-training/what-is-http?u=76281980&t=81)** Get, post, put, delete and so on.
>
> **[1:25](https://www.linkedin.com/learning/http-essential-training/what-is-http?u=76281980&t=85)** You don't need to know anything about computers or computer networks to get what I mean.
>
> **[1:32](https://www.linkedin.com/learning/http-essential-training/what-is-http?u=76281980&t=92)** Another principle is that HTTP is a stateless protocol.
>
> **[1:36](https://www.linkedin.com/learning/http-essential-training/what-is-http?u=76281980&t=96)** That means each individual request sent over the protocol is unique, and no request is connected to another request.
>
> **[1:44](https://www.linkedin.com/learning/http-essential-training/what-is-http?u=76281980&t=104)** To put it in another way, HTTP has no memory of previous requests.
>
> **[1:49](https://www.linkedin.com/learning/http-essential-training/what-is-http?u=76281980&t=109)** Go to a web page with a photo gallery, and it will show you the first picture.
>
> **[1:53](https://www.linkedin.com/learning/http-essential-training/what-is-http?u=76281980&t=113)** Go reload your browser or type in the URL again and you get the first picture again, because HTTP has no memory of you making that first request.
>
> **[2:03](https://www.linkedin.com/learning/http-essential-training/what-is-http?u=76281980&t=123)** This statelessness ensures users don't get trapped in or placed in the middle of sequences of content, but it also means they can't walk their way through sequences because the requests are not connected.
>
> **[2:16](https://www.linkedin.com/learning/http-essential-training/what-is-http?u=76281980&t=136)** To fix this, HTTP allows sessions.
>
> **[2:19](https://www.linkedin.com/learning/http-essential-training/what-is-http?u=76281980&t=139)** Stored states shared between the browser and the server.
>
> **[2:23](https://www.linkedin.com/learning/http-essential-training/what-is-http?u=76281980&t=143)** If a visitor is flipping their way through a photo gallery, the browser and server can exchange information about where the visitor is in the sequence by passing information back and forth in the form of cookies.
>
> **[2:34](https://www.linkedin.com/learning/http-essential-training/what-is-http?u=76281980&t=154)** Reload the page, and the browser sends along a cookie to the server saying, "Hey, last time we spoke "we were looking at the third picture, start there."
>
> **[2:45](https://www.linkedin.com/learning/http-essential-training/what-is-http?u=76281980&t=165)** This means, while HTTP is stateless, it is not sessionless.
>
> **[2:50](https://www.linkedin.com/learning/http-essential-training/what-is-http?u=76281980&t=170)** That passing of cookies that allows HTTP to preserve sessions is made possible by the extensibility of HTTP.
>
> **[2:58](https://www.linkedin.com/learning/http-essential-training/what-is-http?u=76281980&t=178)** When requests and responses are sent back and forth over HTTP, we can include HTTP headers with additional information.
>
> **[3:06](https://www.linkedin.com/learning/http-essential-training/what-is-http?u=76281980&t=186)** These headers can carry information about everything from what type of client sent the requests, the [[Server Configuration]] and the time and date of the response to how and for how long the client should store the data, what format the data is in, those cookies used to track sessions and so on.
>
> **[3:24](https://www.linkedin.com/learning/http-essential-training/what-is-http?u=76281980&t=204)** Which brings us to the last basic principle.
>
> **[3:27](https://www.linkedin.com/learning/http-essential-training/what-is-http?u=76281980&t=207)** HTTP works based on request/response pairs.
>
> **[3:31](https://www.linkedin.com/learning/http-essential-training/what-is-http?u=76281980&t=211)** Every action performed over HTTP starts with a request using one of the HTTP methods and ends with a response containing an HTTP status code saying what happened to the request along with the data like headers and content.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1), [[Server Configuration]] (1)
> **Env Vars:** http (18), url (2)
> **Definitions:** is a  (4), is an  (1)
> **Analogies:** picture (3)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Speakers:** - http (1)

#### [HTTP, HTTP/2, and HTTPS](https://www.linkedin.com/learning/http-essential-training/http-http-2-and-https?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/http-essential-training/http-http-2-and-https?u=76281980&t=0)** - Quick sidebar, when people talk about HTTP, they often refer to HTTPS and HTTP/2, and it's important to know what these things are right off the top.
>
> **[0:11](https://www.linkedin.com/learning/http-essential-training/http-http-2-and-https?u=76281980&t=11)** Just like every other web technology, the HTTP protocol is constantly evolving and new features are added to make it work better, faster, and with new technologies.
>
> **[0:21](https://www.linkedin.com/learning/http-essential-training/http-http-2-and-https?u=76281980&t=21)** When I talk about HTTP in this course, I'll be referring to version two of the protocol, simply called HTTP/2.
>
> **[0:28](https://www.linkedin.com/learning/http-essential-training/http-http-2-and-https?u=76281980&t=28)** HTTP/2 is relatively new in web terms, and as of right now, powers between 70 and 80 percent of all transactions over the web.
>
> **[0:38](https://www.linkedin.com/learning/http-essential-training/http-http-2-and-https?u=76281980&t=38)** The older protocol, HTTP/1.1, is still very much alive, and it's also the fallback protocol anytime HTTP/2 fails, which means you will encounter HTTP/1.1 from time to time now, and in the future.
>
> **[0:53](https://www.linkedin.com/learning/http-essential-training/http-http-2-and-https?u=76281980&t=53)** So, what's the difference between HTTP/2 and HTTP/1.1?
>
> **[0:58](https://www.linkedin.com/learning/http-essential-training/http-http-2-and-https?u=76281980&t=58)** Well, we have a whole course on this topic you can go check out, but the most important points are HTTP/2 is faster and more secure.
>
> **[1:07](https://www.linkedin.com/learning/http-essential-training/http-http-2-and-https?u=76281980&t=67)** It uses compression [[Algorithms]] to speed up requests, allows for multi-plexing, meaning multiple files are sent over connection at the same time and requires an encrypted connection between the client and the server through HTTPS.
>
> **[1:22](https://www.linkedin.com/learning/http-essential-training/http-http-2-and-https?u=76281980&t=82)** By contrast, HTTP/1 sends uncompressed headers, transfers only one file at a time over a connection, and has no default encryption.
>
> **[1:32](https://www.linkedin.com/learning/http-essential-training/http-http-2-and-https?u=76281980&t=92)** What does all this mean?
>
> **[1:33](https://www.linkedin.com/learning/http-essential-training/http-http-2-and-https?u=76281980&t=93)** Well, in an ideal world, every HTTP transaction would be done over an encrypted HTTPS connection using the HTTP/2 protocol.
>
> **[1:44](https://www.linkedin.com/learning/http-essential-training/http-http-2-and-https?u=76281980&t=104)** In the real world, it means most HTTP transactions will use HTTPS over HTTP/2, and when that doesn't work, they'll fall back on unencrypted HTTP/1.1, which, while slower, still works just as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1)
> **Env Vars:** http (18), https (4)
> **Versions:** 1.1 (4)
> **CLI Commands:** make (1)
> **Analogies:** just like (1)
> **Speakers:** - quick (1)

#### [HTTP terminology](https://www.linkedin.com/learning/http-essential-training/http-terminology?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/http-essential-training/http-terminology?u=76281980&t=0)** - [Instructor] When talking about HTTP, we use a lot of terms to describe different technologies and protocols and standards and rules and conventions and tools and other things.
>
> **[0:09](https://www.linkedin.com/learning/http-essential-training/http-terminology?u=76281980&t=9)** To make sure we're all talking about the same thing when we talk about HTTP, let's look at some of the oft-used but seldom explained terms you are most likely to come across, starting with a simple one, browser.
>
> **[0:23](https://www.linkedin.com/learning/http-essential-training/http-terminology?u=76281980&t=23)** The browser is an application used to access and navigate between [[HTML]] documents, nothing more, nothing less.
>
> **[0:30](https://www.linkedin.com/learning/http-essential-training/http-terminology?u=76281980&t=30)** Browsers come in many varieties, the most common being the regular visual browsers you see on your smartphone or tablet or computer.
>
> **[0:38](https://www.linkedin.com/learning/http-essential-training/http-terminology?u=76281980&t=38)** Other browsers include text-to-speech audio browsers, text-only browsers, VR, AR, MR, XR browsers, et cetera, et cetera.
>
> **[0:49](https://www.linkedin.com/learning/http-essential-training/http-terminology?u=76281980&t=49)** A user agent is an application that is acting on behalf of the user, so a literal user agent.
>
> **[0:55](https://www.linkedin.com/learning/http-essential-training/http-terminology?u=76281980&t=55)** It is also commonly referred to as a client application.
>
> **[0:59](https://www.linkedin.com/learning/http-essential-training/http-terminology?u=76281980&t=59)** When we talk about HTTP, the user agent in question is whatever application is transporting information from the user to a server and back.
>
> **[1:09](https://www.linkedin.com/learning/http-essential-training/http-terminology?u=76281980&t=69)** That job typically falls to the browser, but it's not limited to the browser.
>
> **[1:13](https://www.linkedin.com/learning/http-essential-training/http-terminology?u=76281980&t=73)** It can also be middleware or a service like [[Google]] or even a server.
>
> **[1:18](https://www.linkedin.com/learning/http-essential-training/http-terminology?u=76281980&t=78)** TCP is short for Transmission Control Protocol.
>
> **[1:22](https://www.linkedin.com/learning/http-essential-training/http-terminology?u=76281980&t=82)** It is one of the main internet protocols used by, among other things, the World Wide Web, email, FTPs, a file transfer protocol, and remote administration.
>
> **[1:33](https://www.linkedin.com/learning/http-essential-training/http-terminology?u=76281980&t=93)** When you connect to a service over the internet, you are probably using a TCP connection.
>
> **[1:38](https://www.linkedin.com/learning/http-essential-training/http-terminology?u=76281980&t=98)** IP is short for Internet Protocol, the protocol used to actually transfer data between computers over a network.
>
> **[1:46](https://www.linkedin.com/learning/http-essential-training/http-terminology?u=76281980&t=106)** Each computer connected to the internet has a dedicated IP address which is used to connect to it.
>
> **[1:53](https://www.linkedin.com/learning/http-essential-training/http-terminology?u=76281980&t=113)** The URL is quite literally a Universal Resource Locator, a universally understood address pointing at a resource somewhere on the web.
>
> **[2:03](https://www.linkedin.com/learning/http-essential-training/http-terminology?u=76281980&t=123)** URLs are human-readable addresses stored in Domain Name Servers and configured to point to the IP addresses of [[Web Servers]].
>
> **[2:11](https://www.linkedin.com/learning/http-essential-training/http-terminology?u=76281980&t=131)** When you type in a web address in the address bar of your browser, that address is automatically prefixed with either HTTP or HTTPS, telling you you are using the Hypertext Transfer Protocol to access the resource at the other end of that universal locator.
>
> **[2:28](https://www.linkedin.com/learning/http-essential-training/http-terminology?u=76281980&t=148)** A server is a computer on the internet running some form of [[Data Storage]] and sharing application, most commonly a web server application, allowing users to access its data through the HTTP protocol.
>
> **[2:40](https://www.linkedin.com/learning/http-essential-training/http-terminology?u=76281980&t=160)** HTTP is a client server protocol, meaning the clients, or user agent, most commonly the browser, sends request to the server and the server serves responses back to the client.
>
> **[2:53](https://www.linkedin.com/learning/http-essential-training/http-terminology?u=76281980&t=173)** A proxy is a service, either software or [[Hardware]], acting as a middle person between clients and servers.
>
> **[3:01](https://www.linkedin.com/learning/http-essential-training/http-terminology?u=76281980&t=181)** Proxies are often used when the IP address of a server needs to be hidden or when a server or client sits behind some sort of network barrier like a firewall.
>
> **[3:10](https://www.linkedin.com/learning/http-essential-training/http-terminology?u=76281980&t=190)** The proxy is quite literally a proxy handing data back and forth.
>
> **[3:16](https://www.linkedin.com/learning/http-essential-training/http-terminology?u=76281980&t=196)** Clients and servers communicate over HTTP using request-response pairs.
>
> **[3:21](https://www.linkedin.com/learning/http-essential-training/http-terminology?u=76281980&t=201)** Whenever a client, typically a browser, talks to a server, it does so by sending an HTTP request.
>
> **[3:27](https://www.linkedin.com/learning/http-essential-training/http-terminology?u=76281980&t=207)** That request contains a request method describing what action is requested, an address pointing to a resource, and other information about the client.
>
> **[3:37](https://www.linkedin.com/learning/http-essential-training/http-terminology?u=76281980&t=217)** If the client is trying to send information to the server, that information is also packaged in the request as a payload.
>
> **[3:43](https://www.linkedin.com/learning/http-essential-training/http-terminology?u=76281980&t=223)** The response is the literal response to the request.
>
> **[3:47](https://www.linkedin.com/learning/http-essential-training/http-terminology?u=76281980&t=227)** It contains a status response code explaining what happened, information about how the response was handled, and any data requested if the response was successful.
>
> **[3:57](https://www.linkedin.com/learning/http-essential-training/http-terminology?u=76281980&t=237)** Requests and responses use HTTP headers to identify themselves and explain what they want.
>
> **[4:04](https://www.linkedin.com/learning/http-essential-training/http-terminology?u=76281980&t=244)** Every request and response has a header and some also have payloads, the data that's transferred.
>
> **[4:09](https://www.linkedin.com/learning/http-essential-training/http-terminology?u=76281980&t=249)** The header contains [[Metadata]] about the request facilitating communication between clients and servers.
>
> **[4:16](https://www.linkedin.com/learning/http-essential-training/http-terminology?u=76281980&t=256)** The headers of an HTTP request always contain a request method, or verb.
>
> **[4:21](https://www.linkedin.com/learning/http-essential-training/http-terminology?u=76281980&t=261)** These methods are words like get to get something, put to put something, update to update something, delete to delete something, et cetera.
>
> **[4:31](https://www.linkedin.com/learning/http-essential-training/http-terminology?u=76281980&t=271)** The header of an HTTP response always contains a status response code.
>
> **[4:36](https://www.linkedin.com/learning/http-essential-training/http-terminology?u=76281980&t=276)** These are numerical codes in the 100 to 500 range describing what type of response the client is receiving, 200 OK, 404 Not Found, 500 Server Error, et cetera.
>
> **[4:49](https://www.linkedin.com/learning/http-essential-training/http-terminology?u=76281980&t=289)** Web servers and clients can cache, so literally store data for a specified length of time to speed up transfers and performance.
>
> **[4:58](https://www.linkedin.com/learning/http-essential-training/http-terminology?u=76281980&t=298)** As an example, when you visit a regular website, your browser will likely download the CSS for that website once and then cache it in its memory so when you navigate to the next page or come back to the site later, you don't have to re-download that CSS file.
>
> **[5:14](https://www.linkedin.com/learning/http-essential-training/http-terminology?u=76281980&t=314)** Websites and web servers can instruct clients to cache files, clear cached files, or update specific cached files.
>
> **[5:22](https://www.linkedin.com/learning/http-essential-training/http-terminology?u=76281980&t=322)** All this is done through instructions passed in a cache header.
>
> **[5:27](https://www.linkedin.com/learning/http-essential-training/http-terminology?u=76281980&t=327)** HTTP is a stateless protocol, meaning there is no link between two requests being sent between the client and the server.
>
> **[5:34](https://www.linkedin.com/learning/http-essential-training/http-terminology?u=76281980&t=334)** When we need to create a stateful session, we can use cookies, small pieces of information passed back and forth between the client and the server in the HTTP header to notify each party of the state the other is in.
>
> **[5:46](https://www.linkedin.com/learning/http-essential-training/http-terminology?u=76281980&t=346)** This, for example, is how once you've logged into a service, you typically stayed logged in.
>
> **[5:52](https://www.linkedin.com/learning/http-essential-training/http-terminology?u=76281980&t=352)** The server has placed a cookie in your browser in its cache and when you visit the site the next time, that cookie is sent back to the server saying, hey, we've already met and you trust me, so just let me in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Web Servers]] (3), [[HTML]] (1), [[Google]] (1), [[Data Storage]] (1), [[Hardware]] (1)
> **Env Vars:** http (13), tcp (2), css (2), html (1), url (1)
> **Definitions:** is a  (4), is an  (2), short for (2)
> **CLI Commands:** make (1)
> **UI Navigation:** navigate to (1)
> **Exercise Files:** download the (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [The HTTP flow](https://www.linkedin.com/learning/http-essential-training/the-http-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/http-essential-training/the-http-flow?u=76281980&t=0)** - To get a clear idea of how HTTP works, imagine the whole web as a library and you are a client looking for information.
>
> **[0:07](https://www.linkedin.com/learning/http-essential-training/the-http-flow?u=76281980&t=7)** In this library, each cubby in a shelf is a website.
>
> **[0:11](https://www.linkedin.com/learning/http-essential-training/the-http-flow?u=76281980&t=11)** A site can carry a bunch of different information, documents, images, video and audio, style sheets, [[JavaScript]] files, et cetera.
>
> **[0:19](https://www.linkedin.com/learning/http-essential-training/the-http-flow?u=76281980&t=19)** When you want to see what's in one of these websites, you go to a librarian and make a hypertext transfer protocol request.
>
> **[0:26](https://www.linkedin.com/learning/http-essential-training/the-http-flow?u=76281980&t=26)** Can I get the stuff in cubby number four?
>
> **[0:30](https://www.linkedin.com/learning/http-essential-training/the-http-flow?u=76281980&t=30)** This request is received and handled by the librarian representing servers on the web who goes to the cubby, gathers up the relevant pieces to match your request, and hands them back with a response status.
>
> **[0:43](https://www.linkedin.com/learning/http-essential-training/the-http-flow?u=76281980&t=43)** This is the flow of all HTTP transactions.
>
> **[0:46](https://www.linkedin.com/learning/http-essential-training/the-http-flow?u=76281980&t=46)** First, the browser opens a TCP connection to the server.
>
> **[0:51](https://www.linkedin.com/learning/http-essential-training/the-http-flow?u=76281980&t=51)** This ensures data can be sent back and forth over the network and that the data sent from one end is put together the same way at the other end.
>
> **[0:59](https://www.linkedin.com/learning/http-essential-training/the-http-flow?u=76281980&t=59)** If the connection happens over HTTPS, TLS certificates are exchanged to ensure only the computer and the server can encrypt and decrypt the transmitted data.
>
> **[1:10](https://www.linkedin.com/learning/http-essential-training/the-http-flow?u=76281980&t=70)** This prevents anyone from being able to eavesdrop on the conversation between the client and the server and steal the data they are transmitting.
>
> **[1:18](https://www.linkedin.com/learning/http-essential-training/the-http-flow?u=76281980&t=78)** Second, the browser sends an HTTP message.
>
> **[1:22](https://www.linkedin.com/learning/http-essential-training/the-http-flow?u=76281980&t=82)** This message always contains an HTTP method, like GET, PUT, DELETE or something similar, and a URL pointing at the requested resource.
>
> **[1:33](https://www.linkedin.com/learning/http-essential-training/the-http-flow?u=76281980&t=93)** It can also contain headers like cookies or authentication data and data if the browser is submitting data to the server using the post, put, or path methods.
>
> **[1:44](https://www.linkedin.com/learning/http-essential-training/the-http-flow?u=76281980&t=104)** Third, the server performs the requested actions and sends a response back to the browser.
>
> **[1:49](https://www.linkedin.com/learning/http-essential-training/the-http-flow?u=76281980&t=109)** This response will contain an HTTP status message indicating what happened, headers with information about the response, and whatever data was requested.
>
> **[1:58](https://www.linkedin.com/learning/http-essential-training/the-http-flow?u=76281980&t=118)** This data could be an [[HTML]] document or a style sheet or a JavaScript file or image or any other type of content used in a standard website.
>
> **[2:08](https://www.linkedin.com/learning/http-essential-training/the-http-flow?u=76281980&t=128)** Finally, once the response is fully received, the TCP connection is closed.
>
> **[2:14](https://www.linkedin.com/learning/http-essential-training/the-http-flow?u=76281980&t=134)** Since HTTP is stateless, we are now back to a clean slate.
>
> **[2:19](https://www.linkedin.com/learning/http-essential-training/the-http-flow?u=76281980&t=139)** In most scenarios, the first HTTP transaction between a browser and a server is to retrieve a web document for a page or a view.
>
> **[2:27](https://www.linkedin.com/learning/http-essential-training/the-http-flow?u=76281980&t=147)** This document typically holds links to CSS and JavaScript files as well as referenced elements like images.
>
> **[2:34](https://www.linkedin.com/learning/http-essential-training/the-http-flow?u=76281980&t=154)** Each of these items is fetched from their server and brought into the browser using the same HTTP flow.
>
> **[2:41](https://www.linkedin.com/learning/http-essential-training/the-http-flow?u=76281980&t=161)** HTTP/2 allows multiplexing, meaning multiple transactions can take place over the same TCP connection at the the same time.
>
> **[2:50](https://www.linkedin.com/learning/http-essential-training/the-http-flow?u=76281980&t=170)** This new protocol also allows the server to push data to the browser, meaning if the browser requests a specific document, the server can say, "hey, this document depends "on these other files, so I'll push them "to you at the same time."
>
> **[3:04](https://www.linkedin.com/learning/http-essential-training/the-http-flow?u=76281980&t=184)** All of this improves performance and reduces the load time for webpages and views significantly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (3), [[HTML]] (1)
> **Env Vars:** http (9), tcp (3), https (1), tls (1), put (1)
> **CLI Commands:** make (1)
> **API Endpoints:** delete  (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - to (1)

#### [Tools to see HTTP in action](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=0)** - [Instructor] Anytime you load something into a browser, you're seeing http in action, but you're not actually seeing what's happening because the browser puts a nice, shiny user interface on top of all the code stuff that happens behind the scenes.
>
> **[0:13](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=13)** To really see the http transactions that take place, we need to go to the developer tools.
>
> **[0:18](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=18)** You can do this in all modern browsers including Brave, Chrome, Edge, Firefox, and Safari.
>
> **[0:23](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=23)** In this example, I'll show you what to do in Firefox.
>
> **[0:26](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=26)** First, load up the site you want to see the transactions for and boot up the developer tools.
>
> **[0:33](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=33)** Easiest thing to do is right-click somewhere and say, inspect element.
>
> **[0:37](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=37)** Next, in the developer tools, go to the Network tab.
>
> **[0:41](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=41)** This tool can capture all the network traffic between the browser and the server and display it to you, but it doesn't always do this by default because it uses a lot of resources, so once you've opened the Network tab, make sure all is checked, and then, hit Reload for the page.
>
> **[0:59](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=59)** Now, you'll likely get a huge cascade of files and these are all the http requests that were sent from the browser to the server to get all this different data.
>
> **[1:10](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=70)** Breaking this down, you can see here, there's a lot of things going on.
>
> **[1:14](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=74)** At the very top, we have a file.
>
> **[1:15](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=75)** This is a document.
>
> **[1:17](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=77)** It's an [[HTML]] document, and it's the main html document for the current page you're looking at.
>
> **[1:22](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=82)** You can see over in the status, this received a 200 status for the method GET, meaning we received a file we requested, and then, when we scroll down, you see there's a ton of other content here with the request status 304.
>
> **[1:36](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=96)** The request status 304 means the browser has already been here before and has cached this data.
>
> **[1:42](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=102)** You can see it over here.
>
> **[1:43](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=103)** So you see all these stylesheets and scripts have been cached by the computer.
>
> **[1:48](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=108)** Scrolling down, there's another new stylesheet here that comes from [[Google]].
>
> **[1:52](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=112)** This one has been retrieved the second we loaded the page, so it has a 200 status, and we can keep going down and see the status of all of these different elements, so these are the pieces that make up the site, and these are all the http requests that were sent over TCP and navigated back and forth between the browser and the server.
>
> **[2:12](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=132)** Now that you have the full breakdown of the site, you can click on any of these files and see the actual transaction that took place.
>
> **[2:19](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=139)** I'll make this view a little bit bigger so you can see exactly what's going on.
>
> **[2:22](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=142)** Here, we have the request headers for that first html document, and at the top, you see the request URL.
>
> **[2:29](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=149)** This is the URL that was requested by the browser, full URL.
>
> **[2:33](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=153)** Then we have the request method, GET.
>
> **[2:36](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=156)** We have the remote address that this URL resolved to, so that's the IP address for the server where this file is sitting.
>
> **[2:43](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=163)** We have the status code for the response, 200 OK, and then we have the http version that was used.
>
> **[2:50](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=170)** This transaction happened over https.
>
> **[2:52](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=172)** The site and server are setup to support HTTP2 and that's why we have HTTP 2.0.
>
> **[2:59](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=179)** Below that, we have both the request headers and the response headers, so here you can see, in the request headers, it says, Accept text html application, da, da, da, da.
>
> **[3:09](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=189)** It says that it accepts the gsp and deflate encoding methods, that it accepts certain types of languages, that it uses cache control, that it has a keep-alive connection, what host it's talking to, what refer it came from, and here you see the refer was actually http, not https, and then, a bunch of other information, and down at the bottom, we have the User-Agent.
>
> **[3:32](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=212)** This last piece here, the User-Agent is how the browser identifies itself to the server, and says, hello, I am Mozilla 5.0, so that would be Firefox.
>
> **[3:42](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=222)** I want files from you.
>
> **[3:44](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=224)** In the response header, we have similar information.
>
> **[3:46](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=226)** Here, we first have the content type of this file, and this file is an html file with the UTF-8 character set, so that's up here.
>
> **[3:55](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=235)** Then we have the date the response was sent.
>
> **[3:57](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=237)** We have a host header, so this is a key from the host.
>
> **[4:00](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=240)** We have the link to the [[JSON]] API that runs in the background of this particular site.
>
> **[4:06](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=246)** We get information about the server.
>
> **[4:08](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=248)** In this case, the server is running Nginx, and finally, we have some X headers, meaning they are custom headers that tell the browser what's going on.
>
> **[4:17](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=257)** You can do this with each and every file that's been sent over the network, so you can look at the stylesheet from Google.
>
> **[4:23](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=263)** You can look at any of these cached files and see what happened and where it is, and if the site uses cookies, you can also go and inspect the cookies, no cookies in this case, and you can inspect other information like parameters, or response times, and timings, and so on, and so on.
>
> **[4:38](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=278)** So the browser tools give you a full breakdown of exactly what happens in the browser.
>
> **[4:43](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=283)** If you need to run even more in-depth tests on request and response headers, you can also use a dedicated [[Representational State Transfer (REST)|REST]] client to do so.
>
> **[4:51](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=291)** There are many such applications available, including Postman, Insomnia, and my current favorite, the VS Code REST Client extension.
>
> **[5:01](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=301)** From here, you can send custom request headers as plain text, and get the responses back as plain text for inspection, and you don't have to deal with this whole browser-user interface.
>
> **[5:12](https://www.linkedin.com/learning/http-essential-training/tools-to-see-http-in-action?u=76281980&t=312)** We'll talk more about that later in the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (5), [[Google]] (2), [[Representational State Transfer (REST)|Rest]] (2), [[JSON]] (1)
> **Env Vars:** url (4), rest (2), tcp (1), http2 (1), http (1)
> **Tools:** firefox (3), safari (1), postman (1), insomnia (1), vs code (1)
> **UI Navigation:** go to (2), right-click (1), scroll down (1), click on (1)
> **CLI Commands:** make (3), nginx (1)
> **Definitions:** is a  (2), is an  (1)
> **Versions:** 2.0 (1), 5.0 (1)
> **Cross-References:** later in (1)


### 2. Requests and Responses

[↑ Back to Table of Contents](#table-of-contents)

#### [The request/response pair](https://www.linkedin.com/learning/http-essential-training/the-request-response-pair?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/http-essential-training/the-request-response-pair?u=76281980&t=0)** - The core component of HTTP is the request-response pair.
>
> **[0:05](https://www.linkedin.com/learning/http-essential-training/the-request-response-pair?u=76281980&t=5)** Anytime something happens on the web, whether it be someone clicking a link, or entering an address in the address bar, or clicking the submit button in a form, they're sending a request, and the server will return a response.
>
> **[0:17](https://www.linkedin.com/learning/http-essential-training/the-request-response-pair?u=76281980&t=17)** All of this is handled automatically by our user agent, i.e., the browser.
>
> **[0:23](https://www.linkedin.com/learning/http-essential-training/the-request-response-pair?u=76281980&t=23)** You got a glimpse of what the browser does at the end of the last chapter, and in this chapter, we'll dig into it in more detail and find out exactly what's going on.
>
> **[0:32](https://www.linkedin.com/learning/http-essential-training/the-request-response-pair?u=76281980&t=32)** What you'll see is, the browser does a lot of things behind the scenes, and once we know what it's doing, we can take advantage of that work and even get it to do things for us.
>
> **[0:42](https://www.linkedin.com/learning/http-essential-training/the-request-response-pair?u=76281980&t=42)** There's more to the request-response pair than meets the eye, at least until you know where to look.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Env Vars:** http (1)
> **Speakers:** - the (1)

#### [Anatomy of a URL](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-url?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-url?u=76281980&t=0)** - To get access to information on the web you need to know the address of that information.
>
> **[0:05](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-url?u=76281980&t=5)** That's what the URL or universal resource locator is for.
>
> **[0:09](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-url?u=76281980&t=9)** A URL is a human-readable address, describing exactly where on the web and in what location on a server the information you are requesting is located.
>
> **[0:20](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-url?u=76281980&t=20)** Let's take a regular URL and break it apart to see how it fits together, [https://linkedin.com/learning](https://linkedin.com/learning)/ [[JavaScript]]-essential-training-3/ and then a bunch of extra information.
>
> **[0:36](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-url?u=76281980&t=36)** The URL has two main pieces, a protocol declaration, and a Universal Resource Name, or URN.
>
> **[0:45](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-url?u=76281980&t=45)** This URN provides the location of the resource.
>
> **[0:49](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-url?u=76281980&t=49)** The protocol declaration states how we are accessing that resource using the http methods and transport layer.
>
> **[0:57](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-url?u=76281980&t=57)** The URN itself is made up of several pieces.
>
> **[1:01](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-url?u=76281980&t=61)** First, we have the host.
>
> **[1:03](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-url?u=76281980&t=63)** This is the domain which is registered at a domain name service, or DNS.
>
> **[1:08](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-url?u=76281980&t=68)** And this domain points to a dedicated server IP address, somewhere on the web.
>
> **[1:14](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-url?u=76281980&t=74)** Next, we have the implied, and usually invisible, connection port, stating which port we want to access on the server.
>
> **[1:21](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-url?u=76281980&t=81)** For http connections, the default port is 80.
>
> **[1:25](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-url?u=76281980&t=85)** For https connections, the default port is 443.
>
> **[1:29](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-url?u=76281980&t=89)** As long as the server uses either of these ports, we don't see the port declared.
>
> **[1:34](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-url?u=76281980&t=94)** If the server uses another port or we want to access another port, say 8080, that port can be declared using a colon, localhost:8080.
>
> **[1:45](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-url?u=76281980&t=105)** After the host and port comes the resource path.
>
> **[1:49](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-url?u=76281980&t=109)** This is the file location within the server.
>
> **[1:52](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-url?u=76281980&t=112)** The default names for web documents are index.[[HTML]] and default.html, or just htm, or something like that.
>
> **[2:00](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-url?u=76281980&t=120)** If we request a folder without a file specification, the server and browser automatically look for files named either index.html or default.html or index.[[PHP]] or similar and returns that file to us.
>
> **[2:15](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-url?u=76281980&t=135)** If the file is called anything else, like about.html or contact.php, etc., the resource path needs to list the filename specifically, so [mysite.com/folder/about.html](https://mysite.com/folder/about.html).
>
> **[2:30](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-url?u=76281980&t=150)** Finally, we have the optional URL query.
>
> **[2:34](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-url?u=76281980&t=154)** This is one or more queries added to the end of the resource path that can perform further actions on the server.
>
> **[2:41](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-url?u=76281980&t=161)** In some cases, such queries are used to track a user's ID, in others they're used to filter content or perform other actions.
>
> **[2:50](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-url?u=76281980&t=170)** URL queries start with a question mark and then each query comprises an argument and a value like u=1234.
>
> **[3:00](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-url?u=76281980&t=180)** These queries can be strung together, using the ampersand symbol.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (6), [[PHP]] (2), [[LinkedIn]] (1), [[JavaScript]] (1)
> **Env Vars:** url (6), urn (3), dns (1)
> **File Paths:** index.html (2), default.html (2), index.php (1), about.html (1), contact.php (1)
> **URLs:** [https://linkedin.com/learning](https://linkedin.com/learning) (1), [localhost:8080](https://localhost:8080) (1), [mysite.com](https://mysite.com) (1)
> **CLI Commands:** php (2)
> **Definitions:** is a  (1), is called (1)
> **Ports:** :8080 (1)
> **Documentation:** specification (1)

#### [HTTP methods](https://www.linkedin.com/learning/http-essential-training/http-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/http-essential-training/http-methods?u=76281980&t=0)** - Every request sent over the HTTP protocol includes a method, aka a verb.
>
> **[0:06](https://www.linkedin.com/learning/http-essential-training/http-methods?u=76281980&t=6)** This method tells the server what type of action we want to perform with the request.
>
> **[0:11](https://www.linkedin.com/learning/http-essential-training/http-methods?u=76281980&t=11)** There are a limited set of these methods available and some are more used than others.
>
> **[0:16](https://www.linkedin.com/learning/http-essential-training/http-methods?u=76281980&t=16)** For standard web transactions, we typically only use three.
>
> **[0:20](https://www.linkedin.com/learning/http-essential-training/http-methods?u=76281980&t=20)** GET, POST, and DELETE.
>
> **[0:22](https://www.linkedin.com/learning/http-essential-training/http-methods?u=76281980&t=22)** But these are not the only methods available to use.
>
> **[0:26](https://www.linkedin.com/learning/http-essential-training/http-methods?u=76281980&t=26)** Each of the HTTP methods has it's own request response pair and some require more information than others to work.
>
> **[0:32](https://www.linkedin.com/learning/http-essential-training/http-methods?u=76281980&t=32)** Let's take a closer look.
>
> **[0:35](https://www.linkedin.com/learning/http-essential-training/http-methods?u=76281980&t=35)** By far the most frequently used HTTP method is GET.
>
> **[0:38](https://www.linkedin.com/learning/http-essential-training/http-methods?u=76281980&t=38)** It is also the simplest one.
>
> **[0:41](https://www.linkedin.com/learning/http-essential-training/http-methods?u=76281980&t=41)** A GET request for a public resource only needs the method and the URL to work.
>
> **[0:46](https://www.linkedin.com/learning/http-essential-training/http-methods?u=76281980&t=46)** If this resource sits behind a security layer, the request typically also needs an authorization header containing an encrypted username and password pair and may require a cookie containing an authentication token.
>
> **[0:59](https://www.linkedin.com/learning/http-essential-training/http-methods?u=76281980&t=59)** If a GET request is successful, a 200 OK HTTP status is returned along with the requested data.
>
> **[1:06](https://www.linkedin.com/learning/http-essential-training/http-methods?u=76281980&t=66)** If it fails, meaning the requested resource does not work, the familiar 404 Not Found status is returned telling you the resource quite literally cannot be found at this address.
>
> **[1:17](https://www.linkedin.com/learning/http-essential-training/http-methods?u=76281980&t=77)** If the user does not have the correct access authorization, a 405 Not Allowed status is returned and if the resource is blocked by the server, a 403 Forbidden status is returned.
>
> **[1:30](https://www.linkedin.com/learning/http-essential-training/http-methods?u=76281980&t=90)** To send data from the client to the server, we have three different methods to perform different types of actions.
>
> **[1:37](https://www.linkedin.com/learning/http-essential-training/http-methods?u=76281980&t=97)** POST, PUT, and PATCH.
>
> **[1:41](https://www.linkedin.com/learning/http-essential-training/http-methods?u=76281980&t=101)** POST is the most common of these methods, as it is the one useD when you submit a form on a webpage.
>
> **[1:48](https://www.linkedin.com/learning/http-essential-training/http-methods?u=76281980&t=108)** A POST request asks the server to create a new resource and give it an ID for future retrieval.
>
> **[1:54](https://www.linkedin.com/learning/http-essential-training/http-methods?u=76281980&t=114)** Because POST requests make changes to the server, they typically need an authorization header.
>
> **[2:00](https://www.linkedin.com/learning/http-essential-training/http-methods?u=76281980&t=120)** A successful POST request returns a 201 Created HTTP status along with a link to the new resource ID and the response header.
>
> **[2:08](https://www.linkedin.com/learning/http-essential-training/http-methods?u=76281980&t=128)** If the resource already exists, the server returns a 409 Conflict status and if the resource is sent to a resource that can't create new resources then you get a 404 Not Found HTTP status in return.
>
> **[2:24](https://www.linkedin.com/learning/http-essential-training/http-methods?u=76281980&t=144)** PUT is used to update an existing resource by replacing some or all of its contents with the contents of the request.
>
> **[2:32](https://www.linkedin.com/learning/http-essential-training/http-methods?u=76281980&t=152)** Like POST, PUT typically requires an authorization header.
>
> **[2:36](https://www.linkedin.com/learning/http-essential-training/http-methods?u=76281980&t=156)** Unlike POST, which just contains the contents, a PUT request contains the ID of a resource and the new content to be added to that resource.
>
> **[2:46](https://www.linkedin.com/learning/http-essential-training/http-methods?u=76281980&t=166)** If the resource already exists, the existing content is replaced with the contents in the PUT request.
>
> **[2:53](https://www.linkedin.com/learning/http-essential-training/http-methods?u=76281980&t=173)** If no resource with this ID exists, the server will in some cases allow the new resource to be created with the user defined ID or you'll get an error message.
>
> **[3:04](https://www.linkedin.com/learning/http-essential-training/http-methods?u=76281980&t=184)** A successful PUT request returns a 200 OK status.
>
> **[3:08](https://www.linkedin.com/learning/http-essential-training/http-methods?u=76281980&t=188)** If there is no content on the server, a 204 No Content status is returned.
>
> **[3:13](https://www.linkedin.com/learning/http-essential-training/http-methods?u=76281980&t=193)** If the ID doesn't match an existing resource, a 404 Not Found status is returned.
>
> **[3:19](https://www.linkedin.com/learning/http-essential-training/http-methods?u=76281980&t=199)** If a PUT request is sent to a resource that can't be updated, a 405 Method Not Allowed status is returned.
>
> **[3:27](https://www.linkedin.com/learning/http-essential-training/http-methods?u=76281980&t=207)** PATCH is used to modify an existing resource.
>
> **[3:30](https://www.linkedin.com/learning/http-essential-training/http-methods?u=76281980&t=210)** Where PUT updates the resource by replacing content, Patch can carry along instructions on how to modify the existing resource without necessarily replacing data.
>
> **[3:40](https://www.linkedin.com/learning/http-essential-training/http-methods?u=76281980&t=220)** PATCH also typically requires an authorization header and returns the same status as PUT.
>
> **[3:47](https://www.linkedin.com/learning/http-essential-training/http-methods?u=76281980&t=227)** DELETE does exactly what it sounds like.
>
> **[3:49](https://www.linkedin.com/learning/http-essential-training/http-methods?u=76281980&t=229)** It deletes a specified resource.
>
> **[3:52](https://www.linkedin.com/learning/http-essential-training/http-methods?u=76281980&t=232)** A DELETE request must contain the ID for the resource and an authorization header.
>
> **[3:57](https://www.linkedin.com/learning/http-essential-training/http-methods?u=76281980&t=237)** If you try to delete a resource you are not allowed to delete, you'll get a 405 Method Not Allowed status.
>
> **[4:03](https://www.linkedin.com/learning/http-essential-training/http-methods?u=76281980&t=243)** What actually happens on the server when you send a DELETE request varies from server to server.
>
> **[4:08](https://www.linkedin.com/learning/http-essential-training/http-methods?u=76281980&t=248)** In some cases you delete a database entry.
>
> **[4:10](https://www.linkedin.com/learning/http-essential-training/http-methods?u=76281980&t=250)** In other cases, you change the status of a database entry without actually removing content.
>
> **[4:15](https://www.linkedin.com/learning/http-essential-training/http-methods?u=76281980&t=255)** It all depends on the design of the system you're interacting with.
>
> **[4:19](https://www.linkedin.com/learning/http-essential-training/http-methods?u=76281980&t=259)** In addition to these content methods, HTTP also has three methods to get information from the server without really touching the content.
>
> **[4:28](https://www.linkedin.com/learning/http-essential-training/http-methods?u=76281980&t=268)** They are HEAD, which returns just the HEAD section of the response, OPTIONS which returns a description of the communication options for the target resource, and TRACE, which creates a loop back of the request message effectively telling the client where the request ended up.

> [!info]- Semantic Content
>
> **Env Vars:** put (9), post (8), http (7), delete (4), patch (3)
> **API Endpoints:** put  (7), post  (4), get  (2), patch  (2), delete  (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** used (1)
> **Speakers:** - every (1)

#### [HTTP status messages](https://www.linkedin.com/learning/http-essential-training/http-status-messages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/http-essential-training/http-status-messages?u=76281980&t=0)** - Anytime you send an HTTP request to a server, you'll get a response, even if the response is that something went wrong.
>
> **[0:07](https://www.linkedin.com/learning/http-essential-training/http-status-messages?u=76281980&t=7)** This response starts with an HTTP status code, explaining what happened on the server and how your request was handled.
>
> **[0:15](https://www.linkedin.com/learning/http-essential-training/http-status-messages?u=76281980&t=15)** The client can use these status codes to identify successes and failures and automatically respond with next steps.
>
> **[0:23](https://www.linkedin.com/learning/http-essential-training/http-status-messages?u=76281980&t=23)** The HTTP response status codes are split into five main groupings.
>
> **[0:27](https://www.linkedin.com/learning/http-essential-training/http-status-messages?u=76281980&t=27)** 100, 200, 300, 400, and 500 codes.
>
> **[0:32](https://www.linkedin.com/learning/http-essential-training/http-status-messages?u=76281980&t=32)** Status codes of the 100 format are informational and rarely encountered.
>
> **[0:38](https://www.linkedin.com/learning/http-essential-training/http-status-messages?u=76281980&t=38)** They're used to inform the client of the status of the server, typically 102 Processing, which tells the client to wait for the server to finish.
>
> **[0:46](https://www.linkedin.com/learning/http-essential-training/http-status-messages?u=76281980&t=46)** Or 100 Continue, which simply tells the client the server has received the request headers, and is ready for the [[Representational State Transfer (REST)|rest]] of the request body.
>
> **[0:55](https://www.linkedin.com/learning/http-essential-training/http-status-messages?u=76281980&t=55)** This last one is typically encountered when sending POST requests with a large data body.
>
> **[1:00](https://www.linkedin.com/learning/http-essential-training/http-status-messages?u=76281980&t=60)** Status codes of the 200 format are success messages.
>
> **[1:03](https://www.linkedin.com/learning/http-essential-training/http-status-messages?u=76281980&t=63)** Here you find common codes including, 200 OK, which means the request was successful, 201 Created which means the request was successful and a new resource was created.
>
> **[1:14](https://www.linkedin.com/learning/http-essential-training/http-status-messages?u=76281980&t=74)** And 204 No Content, meaning the server processed the request, but returned no content.
>
> **[1:21](https://www.linkedin.com/learning/http-essential-training/http-status-messages?u=76281980&t=81)** Status codes of the 300 format indicate redirection.
>
> **[1:24](https://www.linkedin.com/learning/http-essential-training/http-status-messages?u=76281980&t=84)** The client is provided with a new URL to follow to get to the requested resource.
>
> **[1:30](https://www.linkedin.com/learning/http-essential-training/http-status-messages?u=76281980&t=90)** These codes include 301 Moved Permanently, which tells the client, "Use this new URI for all future requests."
>
> **[1:38](https://www.linkedin.com/learning/http-essential-training/http-status-messages?u=76281980&t=98)** 302 Found which technically means "resource temporarily redirected to this other URI" but is most often used to mean "the response to this resource is actually found at this other URI," which is the real job of 303 See Other.
>
> **[1:57](https://www.linkedin.com/learning/http-essential-training/http-status-messages?u=76281980&t=117)** Just to confuse things, there's also 307 for Temporary Redirects, and 308 for Permanent Redirects because reasons.
>
> **[2:07](https://www.linkedin.com/learning/http-essential-training/http-status-messages?u=76281980&t=127)** Status codes for the 400 format signal client errors.
>
> **[2:11](https://www.linkedin.com/learning/http-essential-training/http-status-messages?u=76281980&t=131)** Here you'll find 400 Bad Request, meaning the request is mal-formed or too large or something else.
>
> **[2:18](https://www.linkedin.com/learning/http-essential-training/http-status-messages?u=76281980&t=138)** 401 Unauthorized meaning the client lacks proper authentication to access the resource.
>
> **[2:24](https://www.linkedin.com/learning/http-essential-training/http-status-messages?u=76281980&t=144)** 403 Forbidden meaning the request is refused by the server, typically because the client is not logged in, or does not have the correct permissions.
>
> **[2:33](https://www.linkedin.com/learning/http-essential-training/http-status-messages?u=76281980&t=153)** And the well-known 404 Not Found which means the resource doesn't exist.
>
> **[2:38](https://www.linkedin.com/learning/http-essential-training/http-status-messages?u=76281980&t=158)** You can also encounter 405 Method Not Allowed, which kicks in if you try to use an HTTP verb like "POST" on a resource that can only receive "GET" requests.
>
> **[2:49](https://www.linkedin.com/learning/http-essential-training/http-status-messages?u=76281980&t=169)** And they're also a myriad of other error messages under this 400 heading.
>
> **[2:54](https://www.linkedin.com/learning/http-essential-training/http-status-messages?u=76281980&t=174)** The last group, status codes of the 500 format, signal server errors.
>
> **[2:58](https://www.linkedin.com/learning/http-essential-training/http-status-messages?u=76281980&t=178)** Here we have 500 Internal Error meaning something went wrong on the server.
>
> **[3:04](https://www.linkedin.com/learning/http-essential-training/http-status-messages?u=76281980&t=184)** 502 Bad Gateway meaning the serve acts as a literal gateway or proxy and received an invalid response from wherever it was trying to connect to.
>
> **[3:13](https://www.linkedin.com/learning/http-essential-training/http-status-messages?u=76281980&t=193)** And the fairly common 503 Service Unavailable, which is encountered when a server is overloaded or temporarily unavailable, or something else goes wrong.
>
> **[3:23](https://www.linkedin.com/learning/http-essential-training/http-status-messages?u=76281980&t=203)** There are more HTTP status messages, but these are the ones you're most likely to encounter when working with regular websites.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** http (5), uri (3), post (2), url (1)
> **CLI Commands:** find (2)
> **API Endpoints:** post  (1)
> **Speakers:** - anytime (1)


### 3. HTTP Headers

[↑ Back to Table of Contents](#table-of-contents)

#### [What are HTTP headers?](https://www.linkedin.com/learning/http-essential-training/what-are-http-headers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/http-essential-training/what-are-http-headers?u=76281980&t=0)** - Earlier in the course I explained that the HTTP protocol is stateless, meaning it doesn't store any information between requests.
>
> **[0:08](https://www.linkedin.com/learning/http-essential-training/what-are-http-headers?u=76281980&t=8)** This means, if a client, or the server, or both, need information about the state of the other, or any other information, we have to send that information along with our request or response.
>
> **[0:20](https://www.linkedin.com/learning/http-essential-training/what-are-http-headers?u=76281980&t=20)** That's what HTTP headers are for.
>
> **[0:23](https://www.linkedin.com/learning/http-essential-training/what-are-http-headers?u=76281980&t=23)** An HTTP header is a human readable name value pair separated by a colon, added to the HTTP request or response, which can be used to pass standard or custom information back and forth between the client and the server.
>
> **[0:37](https://www.linkedin.com/learning/http-essential-training/what-are-http-headers?u=76281980&t=37)** A request can hold as many headers as are needed, each separated by a line break.
>
> **[0:44](https://www.linkedin.com/learning/http-essential-training/what-are-http-headers?u=76281980&t=44)** In modern single page applications and responses from advanced [[Content Management Systems (CMS)|content management systems]] and servers, there is usually a lot of information passing back and forth using these headers.
>
> **[0:54](https://www.linkedin.com/learning/http-essential-training/what-are-http-headers?u=76281980&t=54)** Let's look at a couple of examples.
>
> **[0:57](https://www.linkedin.com/learning/http-essential-training/what-are-http-headers?u=76281980&t=57)** Say you want to send a POST request to a [[Content Management]] system to create a new resource.
>
> **[1:03](https://www.linkedin.com/learning/http-essential-training/what-are-http-headers?u=76281980&t=63)** To make this work, you first have to authenticate yourself to prove to the server you have the correct authorization to create new resources.
>
> **[1:11](https://www.linkedin.com/learning/http-essential-training/what-are-http-headers?u=76281980&t=71)** In it's most basic form, this type of authentication is done by sending an authentication header with basic authentication information, a username and a password.
>
> **[1:22](https://www.linkedin.com/learning/http-essential-training/what-are-http-headers?u=76281980&t=82)** In the real world, the username password combo is Base64 encoded, to ensure it doesn't get misunderstood as a text string when passed to the server.
>
> **[1:32](https://www.linkedin.com/learning/http-essential-training/what-are-http-headers?u=76281980&t=92)** If a server wants, or needs, the client to remember where it has been or what state it is in, like what movie the client is currently watching in this course, it can use a set cookie header, to give the client a cookie, a small piece of data.
>
> **[1:48](https://www.linkedin.com/learning/http-essential-training/what-are-http-headers?u=76281980&t=108)** The next time the client visits the server, it sends the cookie back, and the server brings the client to the right state.
>
> **[1:56](https://www.linkedin.com/learning/http-essential-training/what-are-http-headers?u=76281980&t=116)** Cookies like this are used everywhere on the web.
>
> **[1:59](https://www.linkedin.com/learning/http-essential-training/what-are-http-headers?u=76281980&t=119)** They are the reason why news and social media sites seem to remember where you have been and why you stayed logged into sites even after you have closed the tab or the browser.
>
> **[2:09](https://www.linkedin.com/learning/http-essential-training/what-are-http-headers?u=76281980&t=129)** You may have seen warnings on some sites telling you they use cookies to track you, this is what they're talking about.
>
> **[2:16](https://www.linkedin.com/learning/http-essential-training/what-are-http-headers?u=76281980&t=136)** You can see what cookies a website has sent to your browser by looking at the cookies in the application settings in your developer tools.
>
> **[2:22](https://www.linkedin.com/learning/http-essential-training/what-are-http-headers?u=76281980&t=142)** If you're worried about cookies stored in your browser you can delete them by clearing the browser data.
>
> **[2:28](https://www.linkedin.com/learning/http-essential-training/what-are-http-headers?u=76281980&t=148)** This will log you out of any site using cookies and will make your browser forget where it has been.
>
> **[2:34](https://www.linkedin.com/learning/http-essential-training/what-are-http-headers?u=76281980&t=154)** It doesn't actually forget anything, but it forgets the cookies.
>
> **[2:38](https://www.linkedin.com/learning/http-essential-training/what-are-http-headers?u=76281980&t=158)** If a server wants the client to cache, so effectively save some data for specific period of time, it can send one or several cache headers.
>
> **[2:48](https://www.linkedin.com/learning/http-essential-training/what-are-http-headers?u=76281980&t=168)** These headers tell the browser what files to save, whether cached files should be updated, and for how long they should be kept.
>
> **[2:56](https://www.linkedin.com/learning/http-essential-training/what-are-http-headers?u=76281980&t=176)** Caching files can dramatically improve performance cause you're not sending as many files back and forth every time you're reloading a page, but when files are cached in the browser, the browser will not receive any new versions of those files until the cached files are either cleared or have expired.
>
> **[3:14](https://www.linkedin.com/learning/http-essential-training/what-are-http-headers?u=76281980&t=194)** Headers are also often used to provide information about the client or the server.
>
> **[3:18](https://www.linkedin.com/learning/http-essential-training/what-are-http-headers?u=76281980&t=198)** This can be anything from date and time information about the request response pair, to a user agent header identifying the client, a server header identifying the software used by the server, proxy information, security information, cross origin resource sharing information, and much much more.
>
> **[3:36](https://www.linkedin.com/learning/http-essential-training/what-are-http-headers?u=76281980&t=216)** With HTTP2 and other modern technologies, we're also seeing new headers come online including Link, which allows us to use server Push, to push files to the client before they are requested.
>
> **[3:49](https://www.linkedin.com/learning/http-essential-training/what-are-http-headers?u=76281980&t=229)** In this chapter we'll take a closer look at request and response headers and see some examples of how they are used in real life.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Content Management Systems (CMS)|Content management systems]] (1), [[Content Management]] (1)
> **Env Vars:** http (4), post (1), http2 (1)
> **CLI Commands:** make (2)
> **API Endpoints:** post  (1)
> **Cross-References:** earlier in (1)
> **Definitions:** is a  (1)
> **Speakers:** - earlier (1)

#### [How to see HTTP headers](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=0)** - The easiest way to see HTTP headers is through the browser developer tools.
>
> **[0:05](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=5)** As you saw earlier in the course, any time you open a document in the browser you can go to the developer tools, go to the Network tab, and capture the network traffic.
>
> **[0:15](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=15)** And once you've done that, you can inspect the request and response headers for each individual resource.
>
> **[0:20](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=20)** But within the context of the browser, you're relying on the browser to generate your requests.
>
> **[0:26](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=26)** If you need to send custom request headers to a server to test the response, you can do so using a [[Representational State Transfer (REST)|REST]] client.
>
> **[0:33](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=33)** If you don't know what REST is, or you want to learn more about REST and RESTful APIs, go check out my other course, "Learning REST APIs".
>
> **[0:41](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=41)** Short story, REST, or [[Representational State Transfer (REST)|representational state transfer]], is a set of rules that describe how data is transferred and managed between clients and servers.
>
> **[0:49](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=49)** All you need to know here is that the entire web is a giant RESTful API, and you can use a REST client to interface with it.
>
> **[0:57](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=57)** But, I digress.
>
> **[0:58](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=58)** For our purposes, a REST client is a text-only user agent that allows us to create custom request headers, send them off to a server, and inspect the response.
>
> **[1:08](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=68)** Let me show you how to do this using two different tools.
>
> **[1:11](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=71)** Postman and the Visual Studio Code REST Client extension.
>
> **[1:15](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=75)** In both cases, we'll request this page here.
>
> **[1:18](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=78)** You can do this with any page on the web.
>
> **[1:20](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=80)** It does not matter.
>
> **[1:21](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=81)** So, I'll just copy out the URL to the page I have open in my browser.
>
> **[1:24](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=84)** Then I'll navigate over to Postman, the standalone application.
>
> **[1:28](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=88)** And here, inside the application, I can choose what type of request I want to send to the server.
>
> **[1:34](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=94)** So, using this drop-down, you'll see I have a ton of different verbs I can use.
>
> **[1:38](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=98)** I am going to use the "HEAD" verb here because I only want the headers.
>
> **[1:42](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=102)** Then I'll paste in the URL that I want to send the request to and click "send".
>
> **[1:47](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=107)** Now the request is sent to the server.
>
> **[1:50](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=110)** I see that there is no body here.
>
> **[1:52](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=112)** That's because I sent a "HEAD" request, so I'm only getting the headers back.
>
> **[1:55](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=115)** So, if I click on the "Headers" section here, you'll see the full breakdown of all my headers.
>
> **[2:00](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=120)** And, in this case, I get six headers.
>
> **[2:02](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=122)** Connection, Content Type, Date, Host Header, Link, and Server.
>
> **[2:08](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=128)** If I want to see the actual content of the same request, I just change my request from "HEAD" to "GET".
>
> **[2:15](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=135)** Send it again.
>
> **[2:16](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=136)** And this time, under "Body", I'll get the actual [[HTML]] document itself, in addition to the headers.
>
> **[2:22](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=142)** And here you see I get two extra headers, so I have eight this time because I also have Content Type, HTML, and I have this Transfer Encoding, chunked, section.
>
> **[2:31](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=151)** If Postman isn't quite your style, or you want an actual text-only REST Client to work with, you can use Visual Studio code and download the REST Client extension.
>
> **[2:42](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=162)** Using this client is really simple.
>
> **[2:44](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=164)** You just set up a document.
>
> **[2:46](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=166)** It could be anything.
>
> **[2:46](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=166)** I called it "rest.http".
>
> **[2:48](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=168)** And then you put in your actual REST request.
>
> **[2:51](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=171)** So, HEAD, and then the URL.
>
> **[2:53](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=173)** When you do this, the REST Client extension automatically detects that this is a REST request.
>
> **[2:59](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=179)** So it sets up this "Send Request" button at the top above your request.
>
> **[3:03](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=183)** Click it.
>
> **[3:04](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=184)** A new panel opens, and here you get the response headers.
>
> **[3:07](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=187)** So we have Server, Date, Content Type, Connection, Link, and Host-Header.
>
> **[3:11](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=191)** This is the exact same information that you saw in Firefox, in the developer tools, and in Postman.
>
> **[3:16](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=196)** Just different ways of presenting the same information.
>
> **[3:20](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=200)** Personally, I find using using this extension in Visual Studio to be the most beneficial because here I can type out any headers I want and see immediately what happens when they are returned from the server.
>
> **[3:32](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=212)** I can do the same inside a tool like Postman.
>
> **[3:35](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=215)** But then I have to go and use all different panels here, and put the headers in the right place, and then text the writing coding.
>
> **[3:40](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=220)** And there's a lot more settings going on.
>
> **[3:42](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=222)** And I personally prefer just working with a straight-up text file.
>
> **[3:46](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=226)** But that is my preference.
>
> **[3:47](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=227)** You should check out the different options and see which one works best for you.
>
> **[3:51](https://www.linkedin.com/learning/http-essential-training/how-to-see-http-headers?u=76281980&t=231)** And, like I said, if you want to dive deeper into this particular aspect of working with HTTP, you should go check out "Learning REST APIs" where I dive into this in much more detail.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (15), [[HTML]] (2), [[Representational State Transfer (REST)|Representational state transfer]] (1)
> **Env Vars:** rest (14), head (4), url (3), http (2), html (2)
> **Tools:** postman (5), visual studio (3), firefox (1)
> **Definitions:** is a  (4)
> **UI Navigation:** go to (2), click on (1)
> **Cross-References:** as you saw (1), earlier in (1)
> **CLI Commands:** find (1)
> **Exercise Files:** download the (1)

#### [Anatomy of a request header](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-request-header?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-request-header?u=76281980&t=0)** - [Narrator] The request header is the message a client application sends over HTTP to the server, requesting to perform an action on a specific resource.
>
> **[0:08](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-request-header?u=76281980&t=8)** If I enter the URL I've been showcasing throughout this course in my browser address bar.
>
> **[0:13](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-request-header?u=76281980&t=13)** My browser sends a get request along with a series of headers to the server in the hopes of a return.
>
> **[0:20](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-request-header?u=76281980&t=20)** This is what that full request header looks like and this is how one computer talks to another to make sure the communication between them is crystal clear.
>
> **[0:29](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-request-header?u=76281980&t=29)** First, the client states what method it's using get and what resource it's requesting using a regular URL.
>
> **[0:37](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-request-header?u=76281980&t=37)** As you learned earlier, that URL contains the protocol declaration, in this case HTTPS and the URN, which is the address to the resource.
>
> **[0:47](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-request-header?u=76281980&t=47)** Next, the client adds in a user-agent header to identify itself, lists out what file types, language types and encoding types it accepts, tells the server where it came from, using the refer header, tells it to keep the connection alive for future requests and sets the cache-control of the current file to zero seconds, meaning it will not be saved when it arrives.
>
> **[1:09](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-request-header?u=76281980&t=69)** Just a side note, that user-agent header you see here is how the server and any scripts on the website knows what browser is being used.
>
> **[1:18](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-request-header?u=76281980&t=78)** This is also how some browsers pretend to be other browsers to get around browser-sniffing scripts targeting specific browsers to block content or do other strange things.
>
> **[1:28](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-request-header?u=76281980&t=88)** In addition to this header, the HTTP request can contain a payload of data.
>
> **[1:33](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-request-header?u=76281980&t=93)** Things like form submissions or upload media files.
>
> **[1:36](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-request-header?u=76281980&t=96)** All of this info is passed on to the server via HTTP and the browser waits patiently for a response.

> [!info]- Semantic Content
>
> **Env Vars:** http (3), url (3), https (1), urn (1)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)

#### [Anatomy of a response header](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-response-header?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-response-header?u=76281980&t=0)** - [Instructor] If there is a server at the requested address specified in the request header, that server will return a response even if that response is simply not found.
>
> **[0:09](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-response-header?u=76281980&t=9)** In our example, the request is successful and we get a more comprehensive response header.
>
> **[0:14](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-response-header?u=76281980&t=14)** This response header declares the status of the response 200 OK, the server type, the date and time of the response message, the content type of the return data, and other information.
>
> **[0:26](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-response-header?u=76281980&t=26)** What you see here is just the response headers in addition comes the entire payload which in this case is [[HTML]] document.
>
> **[0:34](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-response-header?u=76281980&t=34)** The client in our case, the Firefox browser, receives this header and processes whatever data is returned in the payload according to the header content.
>
> **[0:43](https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-response-header?u=76281980&t=43)** In this example that is to render the content of the return of the html document.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2)
> **Tools:** firefox (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Cookies](https://www.linkedin.com/learning/http-essential-training/cookies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/http-essential-training/cookies?u=76281980&t=0)** - [Instructor] To get an idea of how headers are used to perform actions by both servers and browsers, let's look at two examples.
>
> **[0:06](https://www.linkedin.com/learning/http-essential-training/cookies?u=76281980&t=6)** First up, cookies.
>
> **[0:08](https://www.linkedin.com/learning/http-essential-training/cookies?u=76281980&t=8)** As I've explained before, cookies are used to pass states between clients and servers over the state less ATTP protocol, effectively setting up sessions between the server and client.
>
> **[0:19](https://www.linkedin.com/learning/http-essential-training/cookies?u=76281980&t=19)** Let's say I have a website with a login panel and once someone has logged in, I want their browser to remember that and authenticate itself by telling the server who it is and that it's already in a logged in state.
>
> **[0:32](https://www.linkedin.com/learning/http-essential-training/cookies?u=76281980&t=32)** This can be done using a cookie.
>
> **[0:34](https://www.linkedin.com/learning/http-essential-training/cookies?u=76281980&t=34)** When the user first goes to the site, they are met with a login panel.
>
> **[0:38](https://www.linkedin.com/learning/http-essential-training/cookies?u=76281980&t=38)** They put in their username and password and the site lets them in.
>
> **[0:43](https://www.linkedin.com/learning/http-essential-training/cookies?u=76281980&t=43)** At this point, the server includes a set cookie response header with a unique token or string of characters in its response and also stores that same string in its own database associated with the current logged in user.
>
> **[0:55](https://www.linkedin.com/learning/http-essential-training/cookies?u=76281980&t=55)** The browser receives this cookie and keeps it in its memory.
>
> **[0:59](https://www.linkedin.com/learning/http-essential-training/cookies?u=76281980&t=59)** In my browser, I've logged into the [[WordPress]] site I've been using as a demo and when I go to my developer tools and click on networks and click on the main file, you'll see over here, next to the headers tab, we have a cookies tab.
>
> **[1:12](https://www.linkedin.com/learning/http-essential-training/cookies?u=76281980&t=72)** And when you click on that cookies tab, you'll see my WordPress site has left a bunch of different cookies stored in the browser.
>
> **[1:19](https://www.linkedin.com/learning/http-essential-training/cookies?u=76281980&t=79)** These cookies are for authentication purposes and also provide other information.
>
> **[1:23](https://www.linkedin.com/learning/http-essential-training/cookies?u=76281980&t=83)** The next time I go to the WordPress site and try to do some form of action, like look at a new post or leave a comment or anything else, all of these cookies are sent along in my request header and these cookies help identify who I am.
>
> **[1:37](https://www.linkedin.com/learning/http-essential-training/cookies?u=76281980&t=97)** If I go back to the headers, you can actually see that.
>
> **[1:38](https://www.linkedin.com/learning/http-essential-training/cookies?u=76281980&t=98)** If I click on raw headers here.
>
> **[1:40](https://www.linkedin.com/learning/http-essential-training/cookies?u=76281980&t=100)** In the request header, here, you'll see under the cookie header, we have all that same information passed on to the server.
>
> **[1:48](https://www.linkedin.com/learning/http-essential-training/cookies?u=76281980&t=108)** Now, the next time a request is sent from the browser to the server, the request header includes a cookie header with the same unique [[Tokens]].
>
> **[1:57](https://www.linkedin.com/learning/http-essential-training/cookies?u=76281980&t=117)** The server receives the request, checks the token in the cookie against its own database and if everything matches, sends back the data as requested.
>
> **[2:06](https://www.linkedin.com/learning/http-essential-training/cookies?u=76281980&t=126)** Cookies can be used for everything from keeping people logged in to making sure they land back where they left off to tracking their behavior.
>
> **[2:14](https://www.linkedin.com/learning/http-essential-training/cookies?u=76281980&t=134)** Because cookies are often used by advertisers to track users across multiple websites, many companies and the European Union, have made it mandatory for any site that uses cookies to explicitly warn the end user that cookies are being used to track them.
>
> **[2:29](https://www.linkedin.com/learning/http-essential-training/cookies?u=76281980&t=149)** That's why you see all these cookie warnings on sites you visit.
>
> **[2:32](https://www.linkedin.com/learning/http-essential-training/cookies?u=76281980&t=152)** Now you know it has nothing to do with actual cookies.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (3), [[Tokens]] (1)
> **UI Navigation:** click on (4), go to (2)
> **Env Vars:** attp (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Caching](https://www.linkedin.com/learning/http-essential-training/caching?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/http-essential-training/caching?u=76281980&t=0)** - [Instructor] The second example is caching.
>
> **[0:02](https://www.linkedin.com/learning/http-essential-training/caching?u=76281980&t=2)** On your website, you may have contents that are rarely updated, like your [[JavaScript]] or CSS files, content that is sometimes updated, like pages, and content that is updated all the time, like the front page or news section of an information site.
>
> **[0:16](https://www.linkedin.com/learning/http-essential-training/caching?u=76281980&t=16)** Both servers and clients can tell the other party to cache, literally store for later, any files they send through HTTP.
>
> **[0:25](https://www.linkedin.com/learning/http-essential-training/caching?u=76281980&t=25)** Once cached, these files will be used instead of downloading fresh ones, and this dramatically speeds up the site and the performance.
>
> **[0:32](https://www.linkedin.com/learning/http-essential-training/caching?u=76281980&t=32)** You can provide specific instructions on how long to cache the files for and under what circumstances the cached files can be overwritten.
>
> **[0:40](https://www.linkedin.com/learning/http-essential-training/caching?u=76281980&t=40)** All of this is done using the cache control header and various directives.
>
> **[0:45](https://www.linkedin.com/learning/http-essential-training/caching?u=76281980&t=45)** These directives include max-age, no-cache, no-store, public, private and more.
>
> **[0:51](https://www.linkedin.com/learning/http-essential-training/caching?u=76281980&t=51)** Most commonly Cache-Control is used to store files in the browser to speed up future visits to the same address by storing the files and then just using the stored files instead of downloading new ones.
>
> **[1:03](https://www.linkedin.com/learning/http-essential-training/caching?u=76281980&t=63)** This is done using the Cache-Control: max-age directive.
>
> **[1:08](https://www.linkedin.com/learning/http-essential-training/caching?u=76281980&t=68)** In this example the server says, please store this file without checking with me and use it instead of coming to me to download a fresh copy for one year.
>
> **[1:17](https://www.linkedin.com/learning/http-essential-training/caching?u=76281980&t=77)** That would be 31 million, 536 thousand seconds.
>
> **[1:22](https://www.linkedin.com/learning/http-essential-training/caching?u=76281980&t=82)** The browser will now hold onto the file for up to a year unless the user actively goes in and clears the cache for the browser.
>
> **[1:30](https://www.linkedin.com/learning/http-essential-training/caching?u=76281980&t=90)** If a file is cached like this, the server won't be able to force the browser to update the file for one year.
>
> **[1:36](https://www.linkedin.com/learning/http-essential-training/caching?u=76281980&t=96)** Meaning, any updates will not be seen by the visitor.
>
> **[1:39](https://www.linkedin.com/learning/http-essential-training/caching?u=76281980&t=99)** This is why when you update a CSS or JavaScript file on a server, you sometimes can't see the new version in the browser and you have to keep rebooting the browser and eventually clear the cache.
>
> **[1:49](https://www.linkedin.com/learning/http-essential-training/caching?u=76281980&t=109)** To avoid this problem you can either, tell the browser to check if the server has a newer version of the file using no cache on individual assets or on the entire domain, or explicitly tell the browser to not cache certain files, or reduce the max-age to something shorter, like a day or 30 days.
>
> **[2:10](https://www.linkedin.com/learning/http-essential-training/caching?u=76281980&t=130)** Or you can use a technique called Cache Busting, where each file has a unique file name, therefore, anytime you upload a new version of a file, you're actually uploading a new unique file name and that new unique file is stored in the visitors browser.
>
> **[2:25](https://www.linkedin.com/learning/http-essential-training/caching?u=76281980&t=145)** HTTP caching deserves an entire course of its own.
>
> **[2:29](https://www.linkedin.com/learning/http-essential-training/caching?u=76281980&t=149)** You can learn more about it in my course HTTP Two, Developing For Performance, and find further information on MDM and on developers.[google.com](https://google.com).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2), [[Google]] (1)
> **Env Vars:** http (3), css (2), mdm (1)
> **CLI Commands:** find (1)
> **URLs:** [google.com](https://google.com) (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Thank you](https://www.linkedin.com/learning/http-essential-training/thank-you?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/http-essential-training/thank-you?u=76281980&t=0)** - [Instructor] That concludes this introduction to HTTP now that you know the basics of how the hypertext transfer protocol works, I encourage you to dive deeper into this material by watching the learning [[Representational State Transfer (REST)|rest]] API course the HTTP 2 Developing for Performance course and reading the excellent documentation on HTTP on MDN and on developers.[google.com](https://google.com).
>
> **[0:22](https://www.linkedin.com/learning/http-essential-training/thank-you?u=76281980&t=22)** Knowing how HTTP works and how to make it work for you will open new doors and make your websites more performance and more user-friendly.
>
> **[0:30](https://www.linkedin.com/learning/http-essential-training/thank-you?u=76281980&t=30)** I love hearing from you about how you use what you've learned in my courses, you can find me on Twitter at Morten 'cause that's my name where I talk about the web and how it shapes us and I publish random articles on [[LinkedIn]] as well.
>
> **[0:43](https://www.linkedin.com/learning/http-essential-training/thank-you?u=76281980&t=43)** Now all that stuff for me to say is (mumbles) go do exciting things with the hypertext transfer protocol and I'll see you in the next course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Google]] (1), [[LinkedIn]] (1)
> **Env Vars:** http (4), api (1), mdn (1)
> **CLI Commands:** make (2), find (1)
> **URLs:** [google.com](https://google.com) (1)
> **Cross-References:** in the next (1)
> **Documentation:** mdn (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Morten Rand-Hendriksen]]

## Path Context

### In [[Become a RESTful API Developer]]
← [[Learning Rest Apis]] | **2 of 5** | [[Designing RESTful APIs]] →

## Appears In

- [[Become a RESTful API Developer]]

---

[↑ Back to top](#)